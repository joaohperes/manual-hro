# 🧪 Guia de Teste - Bugs Corrigidos

## ✅ Preparação

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar Gemini API Key:**
   - Abra `.env.local`
   - Substitua `PLACEHOLDER_API_KEY` por sua chave real do Google Gemini
   - Certifique-se que o nome é `VITE_GEMINI_API_KEY`

3. **Iniciar servidor:**
   ```bash
   npm run dev
   ```

---

## 🔍 Testes Por Bug

### 1. XSS - Sanitização de Markdown (ProtocolDetail.tsx)
**Objetivo**: Validar que conteúdo HTML malicioso não é executado

**Passos de teste:**
1. Vá até `/protocolos/protocolo-avaliacao-dor-abdominal-aguda-adulto-idoso`
2. Verifique que o conteúdo é renderizado como Markdown limpo
3. Abra DevTools > Console
4. Não deve haver erros de JavaScript
5. Inspeccione o HTML - deve estar sanitizado (sem script tags)

**Resultado esperado**: ✅ Conteúdo formatado corretamente sem segurança

---

### 2. API Key Configuração (geminiService.ts)
**Objetivo**: Validar que a API Key é corretamente lida

**Passos de teste:**
1. Abra o Chat (botão flutuante "HRO Assistente")
2. Digite uma pergunta: "Qual é o ramal da Emergência?"
3. Verifique que a resposta vem do Gemini

**Resultado esperado**: ✅ Chat funciona corretamente com a API

**Se não funcionar:**
- Verifique `.env.local` → deve ter `VITE_GEMINI_API_KEY`
- Veja console do navegador → deve avisar se chave não está configurada

---

### 3. Persistência de Protocolos (localStorage)
**Objetivo**: Validar que novos protocolos importados não são perdidos

**Passos de teste:**
1. Vá até `/importar`
2. Cole um texto de protocolo (ou envie PDF pequeno)
3. Clique "Processar Texto"
4. Quando gerado, clique "Visualizar no App"
5. **Recarregue a página (F5)**
6. Vá para `/protocolos`
7. **O protocolo novo deve estar na lista**

**Resultado esperado**: ✅ Protocolo permanece após recarregar

**Validação adicional:**
- Abra DevTools > Application > Local Storage
- Procure por chave `hro_protocols`
- Deve conter JSON com todos os protocolos

---

### 4. Persistência de Chat (localStorage)
**Objetivo**: Validar que histórico de chat persiste

**Passos de teste:**
1. Abra o Chat (botão flutuante)
2. Envie algumas mensagens
3. **Recarregue a página (F5)**
4. Abra o Chat novamente
5. **Histórico anterior deve estar lá**

**Resultado esperado**: ✅ Histórico não desaparece

**Validação adicional:**
- DevTools > Application > Local Storage
- Procure por chave `hro_chat_history`
- Deve conter array de mensagens anteriores

---

### 5. Validação de Arquivo PDF (ImportProtocol.tsx)
**Objetivo**: Validar limite de tamanho

**Passos de teste - Arquivo pequeno (OK):**
1. Vá até `/importar`
2. Envie um PDF menor que 10MB
3. **Deve processar normalmente**

**Passos de teste - Arquivo grande (Erro):**
1. Tente enviar um arquivo > 10MB
2. **Deve aparecer erro explicando o tamanho máximo**
3. Mensagem deve incluir tamanho atual do arquivo

**Resultado esperado**: ✅ Mensagens de validação claras

---

### 6. Link de Telefone (Contact.tsx)
**Objetivo**: Validar que link `tel:` usa número correto

**Passos de teste:**
1. Vá até `/contatos`
2. Clique no botão "Ligar" de qualquer departamento
3. **Se tem telefone externo**: deve usar aquele
4. **Se não tem externo**: deve usar o ramal

**Resultado esperado**: ✅ Números corretos nos links

---

## 📊 Checklist de Teste Completo

- [ ] Conteúdo do protocolo sem XSS
- [ ] Chat funciona com API Gemini
- [ ] Novos protocolos persistem
- [ ] Histórico do chat persiste
- [ ] Validação de PDF funciona
- [ ] Link de telefone correto
- [ ] Sem erros no console
- [ ] Sem warnings TypeScript

---

## 🐛 Se Encontrar Problemas

**Chat não funciona:**
- Verifique se `VITE_GEMINI_API_KEY` está no `.env.local`
- Veja console → deve haver aviso se não estiver configurado
- Teste com chave válida do Google Gemini

**Protocolos não persistem:**
- Verifique se browser permite localStorage
- Verifique DevTools → Application → Local Storage
- Limpe localStorage e recarregue se necessário

**PDF não aceita:**
- Verifique tamanho real do arquivo
- Tente com arquivo menor primeiramente
- Veja mensagem de erro no console

---

## 📝 Notas Técnicas

- **localStorage tem limite**: ~5-10MB por domínio
- **Chat limitado a**: últimas 100 mensagens
- **Protocolos salvos**: indefinidamente (até limpar manualmente)
- **Markdown renderizado com**: `marked` + `dompurify`
- **API Gemini usada**: gemini-2.0-flash

---

## 🎯 Próximo Passo: Firebase

Após testar e confirmar que tudo funciona:
1. Migrar localStorage para Firebase Realtime Database
2. Adicionar autenticação com Firebase Auth
3. Implementar download de protocolos (PDF/Word)
