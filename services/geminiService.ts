import { GoogleGenerativeAI } from "@google/generative-ai";
import { MOCK_PROTOCOLS, MOCK_CONTACTS } from '../data/mockContent';

// Initialize the client with proper Vite environment variable
const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY || '';
if (!apiKey) {
  console.warn('⚠️ VITE_GEMINI_API_KEY not configured in .env.local');
}

const genAI = new GoogleGenerativeAI(apiKey);

// Construct a system prompt that includes the context of the manual
const SYSTEM_INSTRUCTION = `
Você é o HRO Bot, um assistente virtual inteligente e prestativo do Hospital Regional do Oeste (HRO).
Seu objetivo é ajudar os profissionais de saúde a encontrar informações rápidas sobre protocolos, ramais e fluxos do hospital.

CONTEXTO DO HOSPITAL (MANUAL RESUMIDO):
---
PROTOCOLOS:
${MOCK_PROTOCOLS.map(p => `ID: ${p.title}\nCategoria: ${p.category}\nConteúdo: ${p.content}`).join('\n---\n')}

CONTATOS E RAMAIS:
${MOCK_CONTACTS.map(c => `${c.department}: Ramal ${c.extension} ${c.external ? `(Externo: ${c.external})` : ''}`).join('\n')}

LINKS ÚTEIS:
- Escala de Profissionais: https://escala-hro.vercel.app/
- Manual Completo: https://manual-hro.vercel.app/
---

DIRETRIZES:
1. Responda de forma concisa e profissional.
2. Se a pergunta for sobre um protocolo médico, cite o protocolo específico do contexto acima.
3. Se a pergunta for sobre um ramal, forneça o número.
4. Se não encontrar a informação no contexto fornecido, diga educadamente que não consta no manual digital atual e sugira contatar a supervisão.
5. Use formatação Markdown (negrito, listas) para facilitar a leitura rápida.
6. Sempre priorize a segurança do paciente.
`;

let chatSession: any = null;

export const getChatSession = () => {
  if (!chatSession) {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      systemInstruction: SYSTEM_INSTRUCTION,
    });
    chatSession = model.startChat({
      generationConfig: {
        temperature: 0.4,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 1000,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    if (!apiKey) {
      return "API Key do Gemini não configurada. Configure VITE_GEMINI_API_KEY no .env.local";
    }

    const chat = getChatSession();
    const result = await chat.sendMessage(message);
    return result.response.text() || "Desculpe, não consegui processar sua resposta no momento.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ocorreu um erro ao comunicar com o assistente. Verifique sua conexão ou chave de API.";
  }
};

// Type definition for the generated protocol structure
export interface GeneratedProtocolData {
  id: string;
  title: string;
  category: string;
  tags: string[];
  content: string;
}

const PROTOCOL_SCHEMA = {
  type: "object",
  properties: {
    id: { type: "string", description: "A unique slug ID (e.g., 'normativa-uso-uniforme')" },
    title: { type: "string", description: "The official title" },
    category: { type: "string", description: "Category (e.g., Emergência, Administrativo, RH, Normativa)" },
    tags: {
      type: "array",
      items: { type: "string" },
      description: "3-5 relevant tags"
    },
    content: { type: "string", description: "The content in Markdown. Organize nicely with headers, bullet points, and bold text for rules/deadlines." }
  },
  required: ["id", "title", "category", "tags", "content"],
} as any;

export const generateProtocolFromPdf = async (base64Pdf: string): Promise<GeneratedProtocolData | null> => {
  try {
    if (!apiKey) {
      throw new Error("API Key não configurada");
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: PROTOCOL_SCHEMA,
      },
    });

    const response = await model.generateContent([
      {
        inlineData: {
          mimeType: 'application/pdf',
          data: base64Pdf
        }
      },
      {
        text: "Analise este documento PDF (Protocolo ou Normativa Hospitalar). Crie uma versão executiva resumida e estruturada. Extraia o título, sugira uma categoria e tags. O conteúdo deve ser em Markdown, focado em ação rápida, ideal para leitura em celular."
      }
    ]);

    const text = response.response.text();
    if (!text) return null;

    return JSON.parse(text) as GeneratedProtocolData;

  } catch (error) {
    console.error("Error processing PDF:", error);
    throw error;
  }
};

export const generateProtocolFromText = async (rawText: string): Promise<GeneratedProtocolData | null> => {
  try {
    if (!apiKey) {
      throw new Error("API Key não configurada");
    }

    const model = genAI.getGenerativeModel({
      model: 'gemini-2.0-flash',
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: PROTOCOL_SCHEMA,
      },
    });

    const response = await model.generateContent(`Analise o texto abaixo (Protocolo ou Normativa Hospitalar).
            Estruture-o para um manual digital.
            1. Crie um ID único (slug).
            2. Identifique o Título Oficial.
            3. Categorize (ex: Normativa, RH, Assistencial).
            4. Gere tags relevantes.
            5. Formate o conteúdo em MARKDOWN limpo e organizado (Use títulos ##, listas *, e negrito ** para ênfase).

            TEXTO ORIGINAL:
            ${rawText}`);

    const text = response.response.text();
    if (!text) return null;

    return JSON.parse(text) as GeneratedProtocolData;

  } catch (error) {
    console.error("Error processing Text:", error);
    throw error;
  }
};