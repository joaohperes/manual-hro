import { Protocol, Contact } from '../types';

export const MOCK_PROTOCOLS: Protocol[] = [
  {
    id: 'protocolo-avaliacao-dor-abdominal-aguda-adulto-idoso',
    title: 'PROTOCOLO DE AVALIAÇÃO DE DOR ABDOMINAL AGUDA',
    category: 'Emergência',
    lastUpdated: '2025-11-18',
    tags: ['Dor abdominal', 'Abdome agudo', 'Idoso', 'Emergência', 'Cirurgia'],
    googleDriveFileId: '1xd99dJPp2Uz6nqrNGGCEGSKwwDImxapO',
    content: `
# DOR ABDOMINAL AGUDA - GUIA RÁPIDO

> **Objetivo**: Diagnóstico e estratificação de risco para **abdome agudo cirúrgico**

**Para não esquecer**: Em idosos, os sintomas podem ser atípicos e menos intensos. Não deixe de investigar!

---

## PASSO 1: Avaliação Inicial

### Anamnese Focada

**Dor**

Início, qualidade, irradiação, localização e tempo.

<br/>

**Sintomas**

Náuseas, vômitos (vômito *após* dor sugere obstrução), distensão, parada de eliminação de gases/fezes.

<br/>

**Histórico**

Cirurgias prévias, comorbidades.

<br/>

**Idosos - Atenção Redobrada**

Podem apresentar sintomas atípicos e menor intensidade de dor, mesmo em quadros graves.

<br/>

---

### Exame Físico

**Sinais Vitais**

Instabilidade sugere choque ou sepse.

<br/>

**Inspeção**

Distensão, cicatrizes, peristaltismo visível.

<br/>

**Ausculta**

Mínimo 3 minutos. Ausência (peritonite) ou sons metálicos (obstrução).

<br/>

**Palpação**

Defesa voluntária vs. **Rigidez involuntária** (irritação peritoneal).

<br/>

---

<br/>

### Sinais de Alerta

**Dor de Início Súbito e Máxima Intensidade**

Ruptura, isquemia, perfuração.

<br/>

**Dor Constante Durando > 6 Horas**

Requer investigação urgente.

<br/>

**Idosos ou Imunocomprometidos Sem Febre**

Não exclui infecção.

<br/>

---

<br/>

## PASSO 2: Tipos de Abdome Agudo

**Abdome Inflamatório**

Apendicite, Colecistite: Dor progressiva, febre, peritonite. (Alvarado ≥ 7 = Alta chance de apendicite)

<br/>

**Abdome Perfurativo**

Úlcera: Dor súbita, intensa, "abdome em tábua".

<br/>

**Abdome Obstrutivo**

Bridas, Neoplasia: Cólica, distensão, paradas de gases.

<br/>

**Abdome Vascular**

Isquemia Mesentérica: Dor desproporcional ao exame físico, acidose metabólica.

<br/>

**Abdome Hemorrágico**

Gravidez Ectópica: Choque, dor súbita.

## PASSO 3: Exames Complementares

### Laboratório

**Hemograma**

Leucocitose (atenção: normal não exclui diagnóstico).

<br/>

**B-HCG**

**Obrigatório** em mulheres em idade fértil.

<br/>

**Amilase/Lipase**

Suspeita de pancreatite.

<br/>

**Função Renal/Eletrólitos/Gasometria**

Avaliar gravidade sistêmica.

<br/>

---

<br/>

### Imagem

**RX Abdome/Tórax**

Pneumoperitônio (ar livre), níveis hidroaéreos (obstrução).

<br/>

**USG Abdomen**

Colecistite, apendicite (crianças/grávidas), ginecológico.

<br/>

**TC de Abdome**

Padrão-ouro para a maioria dos casos de dor abdominal indiferenciada no adulto/idoso.
`
  },
  {
    id: 'protocolo-oclusao-arterial-aguda-emergencia',
    title: 'PROTOCOLO DE OCLUSÃO ARTERIAL AGUDA (OAA)',
    category: 'Emergência',
    lastUpdated: '2025-11-18',
    tags: ['Vascular', 'Isquemia', 'Trombose', 'Embolia', 'Membro'],
    googleDriveFileId: '1NjJRgPvoCIyH-4ypfsOpJRkUAvJzLd9_',
    content: `
# MANEJO DA OCLUSÃO ARTERIAL AGUDA

Objetivo: Diagnóstico rápido e preservação do membro. Tempo é músculo.

## 1. Diagnóstico Clínico (Os 6 Ps)

A suspeita é clínica. Não aguarde exames para acionar a especialidade se o quadro for clássico.

**P**ain (Dor)

Intensa, súbita, não alivia com analgésicos comuns.

<br/>

**P**allor (Palidez)

Membro cadaverico/branco.

<br/>

**P**ulselessness (Ausência de Pulso)

Distal à obstrução.

<br/>

**P**oikilothermia (Friotermia)

Membro frio comparado ao contralateral.

<br/>

**P**aresthesia (Parestesia)

Formigamento/dormência (sinal de sofrimento nervoso).

<br/>

**P**aralysis (Paralisia)

Perda motora (sinal grave/tardio).

<br/>

---

<br/>

## 2. Classificação de Rutherford (Viabilidade)

**I. Viável**

Sem deficiência sensitiva ou motora. Doppler audível.

Conduta: Imagem + Tratamento planejado.

<br/>

**IIa. Ameaça Marginal**

Parestesia leve (dedos), sem paralisia.

Conduta: Revascularização urgente.

<br/>

**IIb. Ameaça Imediata**

Dor em repouso, perda sensitiva além dos dedos, fraqueza muscular leve/moderada.

Conduta: **Revascularização de EMERGÊNCIA**. Não perder tempo com exames complexos se atrasarem a cirurgia.

<br/>

**III. Irreversível**

Anestesia completa, paralisia (rigidez), ausência de fluxo ao Doppler.

Conduta: Amputação primária.

<br/>

---

<br/>

## 3. Conduta Imediata no PS

**Aquecer o Paciente**

Mas não o membro isquêmico diretamente com calor intenso.

<br/>

**Membro em Posição Neutra ou Levemente Pendente**

Nunca elevar.

<br/>

**Analgesia Potente**

Opioides.

<br/>

**Anticoagulação Plena (Imediata)**

Heparina Sódica (Não fracionada): Bolus de **80 UI/kg** IV + Manutenção **18 UI/kg/h**. Objetivo: Evitar propagação do trombo.

<br/>

**Acionar Cirurgia Vascular Imediatamente**
`
  },
  {
    id: 'protocolo-identificacao-paciente',
    title: 'PROTOCOLO DE IDENTIFICAÇÃO DO PACIENTE',
    category: 'Segurança do Paciente',
    lastUpdated: '2025-11-18',
    tags: ['Segurança', 'Identificação', 'Pulseira', 'Risco'],
    googleDriveFileId: '1x7ifNHJkNUxX8ye2C17Ik5geMkfeQNlD',
    content: `
# IDENTIFICAÇÃO DO PACIENTE - METAS DE SEGURANÇA

Garantir que o cuidado seja prestado à pessoa certa é a barreira #1 contra erros médicos.

## Regras de Ouro

**Dois Identificadores**

Sempre confirme **Nome Completo** e **Data de Nascimento**. Nunca use o número do leito.

<br/>

**Conferência Ativa**

Peça para o paciente dizer o nome (se consciente). Não pergunte "Você é o Sr. João?".

<br/>

**Pulseira Obrigatória**

Todo paciente em área assistencial deve estar com pulseira.

<br/>

---

<br/>

## Padrões de Cores (Pulseiras)

⚪ **Branca** - Identificação Padrão (Internação/PS).

<br/>

🔴 **Vermelha** - Alergia (Medicamentosa ou Alimentar).

<br/>

🟡 **Amarela** - Risco de Queda.

<br/>

🟣 **Roxa** - Ordem de Não Reanimar (conforme protocolo de cuidados paliativos).

<br/>

🔵 **Azul** - Risco de Lesão por Pressão.

<br/>

---

<br/>

## Rotinas por Setor

### Admissão / Internação

**Pulseira Colocada no Ato da Admissão**

Conferir dados com documento oficial.

<br/>

**Local Preferencial**: Punho direito.

<br/>

---

<br/>

### Recém-Nascidos (RN)

**Identificação Imediata Após Nascimento**

Sala de parto.

<br/>

**Duas Pulseiras** - Uma no punho, uma no tornozelo.

<br/>

**Dados**: "RN de [Nome da Mãe]", Data e Hora do parto, Sexo.

<br/>

---

<br/>

### Pacientes Sem Identificação (Desconhecidos)

**Usar Nomenclatura Padrão**

"DESCONHECIDO [GÊNERO] [DATA/HORA]".

Exemplo: "DESCONHECIDO MASCULINO 18/11/24 14:30".

<br/>

**Atualizar** assim que identificação civil for confirmada.
`
  },
  {
    id: 'protocolo-hemorragia-digestiva-baixa',
    title: 'PROTOCOLO DE HEMORRAGIA DIGESTIVA BAIXA (HDB)',
    category: 'Emergência',
    lastUpdated: '2025-11-18',
    tags: ['HDB', 'Sangramento', 'Gastroenterologia', 'Colonoscopia'],
    executiveSummary: `**Definição**: Sangramento originado abaixo do ângulo de Treitz

**Prognóstico**: Geralmente autolimitado (80% dos casos), porém casos graves exigem ação imediata

**Estratégia**: A prioridade é estabilizar hemodinamicamente. A investigação diagnóstica depende da estabilidade e inclui colonoscopia como padrão-ouro nos pacientes estáveis.`,
    googleDriveFileId: '1J9hce27qo4Rd9_WoJudEFluSUv6RrDRZ',
    content: `
# HEMORRAGIA DIGESTIVA BAIXA - GUIA RÁPIDO

## Fluxograma Visual

![Fluxograma HDB](/fluxogramas/hdb-fluxograma.png)

---

## 1. Avaliação Inicial e Estabilização

**O foco inicial é a estabilidade hemodinâmica do paciente, não o diagnóstico da causa.**

### Abordagem Sistemática (ABCDE)

#### 🫁 Vias Aéreas, Boa Ventilação, Circulação
- Abordagem sistemática padrão

#### 💉 Acesso Venoso Periférico
- Garantir **2 acessos calibrosos** imediatamente (Jelco 14 ou 16)

#### 💧 Reposição Volêmica
- Iniciar com **cristaloide aquecido**

#### 🔍 Toque Retal - **OBRIGATÓRIO**
- Avaliar presença de sangue vivo
- Melena (sugere HDA ou trânsito lento)
- Massas palpáveis ou doença orificial visível

---

## 2. Estratificação de Risco (Sinais de Alarme)

**Pacientes com QUALQUER UM dos sinais abaixo são considerados de ALTO RISCO e requerem monitoramento intensivo:**

| Parâmetro | Valor de Alarme |
|-----------|-----------------|
| **PAS (Pressão Arterial Sistólica)** | < 100 mmHg |
| **FC (Frequência Cardíaca)** | > 100 bpm (taquicardia) |
| **Clínica** | História de síncope |
| **Laboratório** | Queda de Hemoglobina > 2 g/dL |

---

## 3. Investigação Diagnóstica

**A estratégia diagnóstica depende fundamentalmente da estabilidade hemodinâmica do paciente.**

### ⚠️ Passo Crucial: Excluir Hemorragia Digestiva Alta (HDA)

> **Atenção:** Cerca de **15% dos casos de hematoquezia** (sangue vivo via retal) são, na verdade, **HDA maciça com trânsito intestinal acelerado.**

#### Se Instabilidade Hemodinâmica: Passar Sonda Nasogástrica (SNG)

**Resultado: Sangue/Borra de Café**
- Forte indício de HDA
- Solicitar **EDA (Endoscopia) URGENTE** antes da colonoscopia

**Resultado: Bile (Claro/Amarelo/Verde)**
- HDA improvável
- Prosseguir investigação de HDB

### 🔬 Colonoscopia (Padrão-Ouro)

**Para Pacientes Estáveis:**
- Realizar preparo intestinal adequado
- Exame eletivo (idealmente nas primeiras 12-24h da admissão)

**Para Pacientes Instáveis:**
- Prioridade é ESTABILIZAR primeiro
- Colonoscopia de urgência após estabilização
- Preparo rápido (se as condições permitirem)

### 📊 Angiotomografia (AngioTC)

**Indicação:**
- Sangramento ativo maciço com instabilidade contínua
- **E** impossibilidade de realizar preparo para colonoscopia

**Vantagens:**
- Exame rápido e sensível
- Detecta fluxos de 0,3-0,5 ml/min
- Permite planejamento de intervenção (radiologia intervencionista ou cirurgia)

---

## 4. Etiologias Comuns da HDB

**As causas variam com a idade, mas as mais frequentes incluem:**

### 🔴 **Doença Diverticular dos Cólons** (CAUSA MAIS COMUM)
- Principal responsável pela HDB em idosos
- Sangramento em geral profuso mas autolimitado

### 🔴 **Angiodisplasias**
- Malformações vasculares
- Mais frequentes em pacientes com doenças crônicas (insuficiência renal)

### 🔴 **Neoplasias**
- Câncer colorretal
- Pólipos (principalmente com componente vascular)

### 🔴 **Doenças Orificiais**
- Hemorróidas
- Fissuras anais
`
  },
  {
    id: 'protocolo-grande-queimado',
    title: 'PROTOCOLO DE ATENDIMENTO AO GRANDE QUEIMADO',
    category: 'Trauma',
    lastUpdated: '2025-11-18',
    tags: ['Queimadura', 'Parkland', 'Trauma', 'Emergência'],
    googleDriveFileId: '1Z-uxV2Cojcgvc4zJX7dgD15odsBQPcGw',
    content: `
# ATENDIMENTO AO GRANDE QUEIMADO

Prioridade: Interromper o processo de queimadura, garantir vias aéreas e reposição volêmica agressiva.

## 1. Avaliação Primária (ABCDE)

### A (Airway) - Vias Aéreas

**Suspeita de Inalação**

Queimadura em face, vibrissas chamuscadas, escarro carbonáceo, rouquidão, estridor.

<br/>

**Conduta**: **Intubação Precoce**

O edema de glote progride rápido. Não espere o paciente descompensar.

<br/>

---

<br/>

### B (Breathing) - Respiração

**Ofertar O2 100%**

<br/>

**Queimadura Circunferencial em Tórax**

Risco de restrição expansiva → Considerar escarotomia.

<br/>

---

<br/>

### C (Circulation) - Circulação

**Acesso Venoso Calibroso**

Em área **não queimada** (se possível).

<br/>

**Fórmula de Parkland (Atualizada - ATLS)**

**2 ml de Ringer Lactato** x **Peso (kg)** x **% SCQ (Superfície Corporal Queimada)**.

Obs: Queimaduras elétricas usar 4 ml.

<br/>

**Administração**

50% do volume nas primeiras **8 horas** (contadas a partir da hora da *queimadura*, não da chegada).

50% nas 16 horas seguintes.

<br/>

**Meta**: Diurese > 0,5 ml/kg/h (Adulto) e > 1 ml/kg/h (Criança). **Sondagem Vesical Obrigatória**.

<br/>

---

<br/>

### E (Exposure) - Exposição

**Remover Roupas e Adornos**

Anéis, pulseiras causam garroteamento com edema.

<br/>

**Cobrir com Lençóis Limpos e Secos**

Para evitar hipotermia.

<br/>

**NÃO USAR Pomadas ou Cremes**

Na emergência, dificulta avaliação do cirurgião plástico.

<br/>

---

<br/>

## 2. Cálculo da Superfície Corporal (Regra dos 9)

**Cabeça e Pescoço**: 9%

**Tronco Anterior**: 18%

**Tronco Posterior**: 18%

**Membros Superiores**: 9% cada

**Membros Inferiores**: 18% cada

**Genitália**: 1%

<br/>

---

<br/>

## 3. Critérios de Transferência (Centro de Queimados)

**Queimadura 2º Grau > 10% SCQ**

<br/>

**Queimaduras em Áreas Críticas**

Face, mãos, pés, genitália, períneo ou grandes articulações.

<br/>

**Qualquer Queimadura de 3º Grau**

<br/>

**Queimaduras Elétricas ou Químicas**

<br/>

**Lesão por Inalação**
`
  },
  {
    id: 'protocolo-insuficiencia-cardiaca-aguda',
    title: 'PROTOCOLO DE INSUFICIÊNCIA CARDÍACA AGUDA (IC)',
    category: 'Cardiologia',
    lastUpdated: '2025-11-18',
    tags: ['IC', 'Edema Agudo', 'Lasix', 'Cardiologia'],
    googleDriveFileId: '1LGT4Juza9BbO0asxzmEWfcMFbEZfQYXp',
    content: `
# INSUFICIÊNCIA CARDÍACA AGUDA (ICA)

Foco na identificação do perfil hemodinâmico para guiar a terapia.

## 1. Avaliação Inicial (CHAMP)

Identificar causas reversíveis imediatas que exigem terapia específica:

**C** - Coronariana (SCA).

**H** - Hipertensão (Emergência Hipertensiva).

**A** - Arritmia.

**M** - Mecânica (Valvopatia aguda).

**P** - Pulmonar (TEP).

<br/>

---

<br/>

## 2. Perfil Hemodinâmico (À Beira Leito)

### Perfil B: Quente e Úmido (Mais Comum - Edema Agudo de Pulmão)

**Sinais**: Boa perfusão, mas congestão pulmonar (crepitações, dispneia, ortopneia).

<br/>

**VNI (Ventilação Não Invasiva)**

Precoce! Melhora sobrevida.

<br/>

**Diurético**

Furosemida EV (bolus). Se já usa em casa, dobrar a dose da manhã.

<br/>

**Vasodilatador**

Nitroglicerina ou Nitroprussiato (se PAS > 110 mmHg). Alivia pós-carga.

<br/>

---

<br/>

### Perfil C: Frio e Úmido (Choque Cardiogênico)

**Sinais**: Má perfusão (frio, hipotenso, oligúrico) e congestão.

<br/>

**Inotrópico**

Dobutamina (primeira escolha).

<br/>

**Vasopressor**

Noradrenalina (se hipotensão grave PAS < 70-80 mmHg).

<br/>

**Cuidado com Diuréticos** antes da estabilização hemodinâmica.

<br/>

---

<br/>

### Perfil L: Frio e Seco (Hipovolêmico/Baixo Débito)

**Sinais**: Má perfusão, sem congestão pulmonar.

<br/>

**Prova de Volume Cuidadosa**

250ml SF.

<br/>

**Se Não Responder**: Inotrópico.

<br/>

---

<br/>

## 3. Medicamentos Chave

**Furosemida**

Ampola 20mg. Dose inicial 0,5 a 1mg/kg EV.

<br/>

**Morfina**

**EVITAR** rotina em IC descompensada (aumenta necessidade de IOT e mortalidade). Usar apenas em dor refratária ou ansiedade extrema incontrolável.

<br/>

**Nitroglicerina (Tridil)**

Iniciar 5-10 mcg/min. Titular a cada 5 min.
`
  },
  {
    id: 'protocolo-neutropenia-febril-adultos',
    title: 'PROTOCOLO DE NEUTROPENIA FEBRIL',
    category: 'Oncologia',
    lastUpdated: '2025-11-18',
    tags: ['Neutropenia', 'Sepse', 'Câncer', 'Antibiótico', 'Emergência'],
    googleDriveFileId: '1w7IAncqL6ewFBX457KFeau0YZ4e_dNHB',
    content: `
# MANEJO DA NEUTROPENIA FEBRIL

Emergência oncológica. Risco iminente de sepse grave. O tempo porta-agulha (início do antibiótico) deve ser **< 60 minutos**.

## 1. Definições

**Neutropenia**

Neutrófilos < 500/mm³ (ou < 1000 com previsão de queda).

<br/>

**Febre**

Tax ≥ 38,3ºC (única) ou ≥ 38,0ºC sustentada por 1 hora.

<br/>

**Atenção**

Sinais inflamatórios podem estar ausentes devido à falta de leucócitos.

<br/>

---

<br/>

## 2. Avaliação Inicial (Na Primeira Hora)

**Hemoculturas**

2 pares periféricos (ou 1 periférico + 1 de cateter central).

<br/>

**Exames**

Hemograma, Creatinina, Ureia, TGO/TGP, Bilirrubinas, Eletrólitos.

<br/>

**Raio-X de Tórax**

Se sintomas respiratórios.

<br/>

**Cultura de Urina e Sítios Suspeitos**

<br/>

---

<br/>

## 3. Estratificação de Risco (Escore MASCC)

Avalia se o paciente pode tratar em casa ou precisa internar.

**Baixo Risco (MASCC ≥ 21)**

Pode ser elegível para tratamento ambulatorial (VO).

<br/>

**Alto Risco (MASCC < 21)**

Internação Obrigatória + ATB Endovenoso.

<br/>

**Critérios de Alto Risco Clínico (Internação Imediata):**

- Instabilidade hemodinâmica.
- Pneumonia ou infecção de cateter.
- Alteração neurológica.
- Mucosite grave ou diarreia.

<br/>

---

<br/>

## 4. Antibioticoterapia Empírica

Deve cobrir *Pseudomonas aeruginosa*.

### Pacientes Alto Risco (Endovenoso)

**Monoterapia (Padrão)**:

- **Cefepime** 2g IV 8/8h
- **OU Piperacilina-Tazobactam** 4,5g IV 6/6h
- **OU Meropenem** 1g IV 8/8h (reservar para casos graves/histórico de ESBL).

<br/>

---

<br/>

### Indicações de Vancomicina Inicial

Não usar de rotina! Apenas se:

- Instabilidade hemodinâmica (Choque).
- Suspeita de infecção de cateter (CVC).
- Infecção de pele e partes moles.
- Pneumonia grave.
- Histórico de MRSA.

<br/>

---

<br/>

### Pacientes Baixo Risco (Oral - Apenas com Supervisão)

Ciprofloxacino 500mg 12/12h + Amoxicilina-Clavulanato 875mg 12/12h.

<br/>

---

<br/>

## 5. Reavaliação

**Se Febre Persistir Após 48-72h em Paciente Estável**

Manter esquema.

<br/>

**Se Instabilidade**

Escalonar antibiótico (cobrir Gram+, Gram- resistentes, Fungal).
`
  },
  {
    id: 'protocolo-manejo-hemorragia-digestiva-alta-e-baixa',
    title: 'MANEJO DE HEMORRAGIA DIGESTIVA ALTA E BAIXA',
    category: 'Emergência',
    lastUpdated: '2025-11-18',
    tags: ['HDA', 'HDB', 'Endoscopia', 'Sangramento', 'Coagulopatia'],
    googleDriveFileId: '1ibMP30LxqD_0wccKT2BYX6LBSufmv_Fo',
    content: `
# MANEJO DE HEMORRAGIA DIGESTIVA

## 1. Hemorragia Digestiva Alta (HDA)

### Estabilização Inicial

**Vias Aéreas**

Considerar IOT se rebaixamento (Glasgow < 8) ou hematêmese maciça.

<br/>

**Acesso**

2 acessos venosos periféricos calibrosos (14G/16G).

<br/>

**Exames**

Hemograma, Coagulograma, Função Renal/Hepática.

<br/>

**Transfusão**

Alvo Hb > 7.0 (se coronariopata > 9.0). Plaquetas se < 50.000.

<br/>

---

<br/>

### Tratamento Farmacológico (Imediato)

**IBP (Omeprazol)**

Bolus 80mg EV + 8mg/h em BIC (se alto risco/estigmas na EDA).

<br/>

**Terlipressina ou Octreotide**

Em suspeita de **Varizes Esofágicas**.

Octreotide: Bolus 50mcg + 50mcg/h.

<br/>

**Antibiótico**

Ceftriaxona 1g EV 24/24h (Profilaxia em cirróticos).

<br/>

---

<br/>

### Endoscopia (EDA)

**Timing**

Realizar nas primeiras **24 horas** (12h se varizes).

<br/>

**Classificação de Forrest**

Define risco de ressangramento.

<br/>

---

<br/>

## 2. Hemorragia Digestiva Baixa (HDB)

### Abordagem

**Estabilizar o Paciente Primeiro**

<br/>

**Excluir HDA**

15% das hematoquezias maciças vêm de HDA. Instável? Passar SNG. Se vier sangue/bile, é alto.

<br/>

**Toque Retal**

Obrigatório (fissuras, massas).

<br/>

---

<br/>

### Diagnóstico

**Colonoscopia**

Exame de escolha. Requer preparo.

<br/>

**AngioTC**

Se sangramento ativo e impossibilidade de preparo (instabilidade mantida). Sensível para 0.3-0.5 ml/min.

<br/>

**Arteriografia**

Diagnóstica e Terapêutica (Embolização).
`
  },
  {
    id: 'protocolo-sepse-adulto-hro',
    title: 'PROTOCOLO DE SEPSE E CHOQUE SÉPTICO (ADULTO)',
    category: 'Emergência',
    lastUpdated: '2025-11-18',
    tags: ['sepse', 'choque séptico', 'antibiótico', 'noradrenalina', 'emergência'],
    googleDriveFileId: '17ZF5SngBk-yKYm39jPJYd9UGsydZPQ7o',
    content: `
# SEPSE E CHOQUE SÉPTICO - GUIA RÁPIDO

> **Objetivo**: Reconhecer, estratificar e tratar sepse em < 3 horas (golden hour)

**Tempo = Vida**: A cada hora de atraso no antibiótico aumenta mortalidade em ~8%

---

## 1. Identificação (Sinais de Alerta)

Suspeita de infecção + **Sinais de Disfunção Orgânica**:

**Hipotensão**

PAS < 100 mmHg.

<br/>

**Alteração Mental**

Agitação, sonolência, confusão (Glasgow < 15).

<br/>

**Taquipneia**

FR ≥ 22 irpm.

<br/>

**Outros Sinais**

Oligúria, queda de plaquetas, aumento de bilirrubinas.

<br/>

**Se Suspeita Forte**: Abrir Protocolo de Sepse.

<br/>

---

<br/>

## 2. Pacote da 1ª Hora (Time is Life)

Ações simultâneas a serem iniciadas imediatamente:

**Lactato Arterial**

Coletar imediatamente.

Se alterado (> 2 mmol/L), repetir em 2-4h para guiar ressuscitação.

<br/>

**Hemoculturas**

2 pares (aeróbio/anaeróbio) de sítios diferentes.

Importante: Coletar **ANTES** do antibiótico.

Exceção: Se acesso difícil (> 45 min), não atrasar o ATB.

<br/>

**Antibiótico Amplo Espectro**

Iniciar na **primeira hora**.

A escolha depende do foco (Pulmonar, Urinário, Abdominal).

Na dúvida ou foco indeterminado: Cobrir Gram- e Gram+.

<br/>

**Reposição Volêmica**

Se hipotensão (PAS < 90 mmHg) ou Lactato ≥ 4 mmol/L.

**30 ml/kg** de cristaloide (Ringer Lactato ou SF 0,9%) em bolus (até 3 horas).

<br/>

---

<br/>

## 3. Manejo do Choque Séptico

Definição: Hipotensão persistente necessitando de vasopressor para manter PAM ≥ 65 mmHg E Lactato > 2 mmol/L, mesmo após volume adequado.

### Conduta Imediata

**Vasopressor**

Iniciar **Noradrenalina** se não responder ao volume inicial.

Pode iniciar em acesso periférico calibroso (curto prazo) enquanto providencia central.

Alvo: **PAM ≥ 65 mmHg**.

<br/>

**Corticoide**

Hidrocortisona 200mg/dia (50mg 6/6h) apenas se instabilidade refratária a volume e vasoativos em altas doses.
`
  },
    {
    id: 'protocolo-diagnostico-isolamento-tratamento-tuberculose-pulmonar-hro',
    title: 'PROTOCOLO PARA DIAGNÓSTICO, ISOLAMENTO E TRATAMENTO DE TUBERCULOSE PULMONAR',
    category: 'Infectologia',
    lastUpdated: '2025-11-18',
    tags: ['Tuberculose', 'Diagnóstico', 'Isolamento', 'Tratamento', 'RT-PCR'],
    googleDriveFileId: '1GEae0kc7K3c_9InoHegynEwJy8MxIAKU',
    content: `
# Protocolo Tuberculose Pulmonar HRO: Diagnóstico, Isolamento e Tratamento Rápido

Este protocolo fornece diretrizes para o diagnóstico, isolamento e tratamento da Tuberculose Pulmonar no HRO.

## 1. Suspeita Clínica e Ações Iniciais

**Perfil do Paciente Suspeito:**
*   Tosse persistente (mais de **3 semanas**)
*   Sudorese noturna
*   Emagrecimento
*   Escarro com sangue (hemoptoicos)
*   Achados radiológicos (RX/TC de tórax): consolidações em ápices, cavitações, infiltrado micronodular bilateral.

**Ação Imediata:**

**INSTITUIR ISOLAMENTO POR AEROSSÓIS IMEDIATAMENTE.**

**COMUNICAR SCIRAS** (Serviço de Controle de Infecções Relacionadas à Assistência à Saúde).

<br/>

---

<br/>

## 2. Diagnóstico Laboratorial

### 2.1. Coleta de Amostras

**Escarro/Escarro Induzido**

Coletar pela **manhã**, logo após o paciente acordar, para melhor rendimento do teste.

<br/>

**Pacientes Intubados**

Coletar amostra via **aspirado traqueal**. Manter sistema de aspiração fechado até o diagnóstico.

<br/>

**Tosse Pouco Produtiva**

Considerar **escarro induzido** por nebulização com solução salina a 3%, realizado no quarto privativo.

<br/>

---

<br/>

### 2.2. Teste Rápido Molecular (RT-PCR-TB) - HRO

**Prioridade para Casos Novos**

Devido à maior sensibilidade e menor tempo para definição diagnóstica e decisão de isolamento.

<br/>

**Amostras Processadas no HRO**

Escarro e escarro induzido.

<br/>

**Amostras para LACEN**

Lavado Broncoalveolar (LBA) ou materiais de biópsia (pleura, linfonodo).

<br/>

**Sensibilidade**

Cerca de **90%** para TB pulmonar em escarro. Detecta resistência à Rifampicina com **95%** de sensibilidade.

<br/>

---

**Fluxograma RT-PCR-TB (HRO):**

**Passo 1: Suspeita de TB**

Instituir isolamento aerossóis + Comunicar SCIRAS.

<br/>

**Passo 2: Solicitar RT-PCR**

RT-PCR *Mycobacterium tuberculosis* em **1 amostra de escarro** (coletada pela manhã).

<br/>

---

**Passo 3: Interpretação de Resultados**

**RT-PCR Detectado + Resistência à Rifampicina**

Notificar caso, iniciar tratamento (esquema básico), discutir com infectologista (SCIRAS/DIVE), **MANTER ISOLAMENTO AEROSSÓÍS.**

<br/>

**RT-PCR Detectado + SEM Resistência à Rifampicina**

Notificar caso, iniciar tratamento (esquema básico), **MANTER ISOLAMENTO AEROSSÓÍS.** Solicitar nova amostra para BAAR de seguimento e cultura (LACEN).

<br/>

**RT-PCR Não Detectado + Clínica/Imagem Sugestiva**

Prosseguir investigação (cultura, LBA), considerar diagnósticos alternativos, iniciar tratamento empírico (até resultado da cultura). Discutir manutenção do isolamento com infectologista/SCIRAS.

<br/>

**RT-PCR Não Detectado + Baixa Suspeita Clínica/Radiológica**

**SUSPENDER ISOLAMENTO AEROSSÓÍS** (avaliação individualizada).
`
  },
    {
    id: 'protocolo-infeccoes-adultos-funcao-renal-preservada',
    title: 'Tratamento das Principais Infecções em Pacientes Adultos',
    category: 'Infectologia',
    lastUpdated: '2025-11-18',
    tags: ['Infecções', 'Antibióticos', 'Adulto', 'Função Renal', 'Protocolo Hospitalar'],
    googleDriveFileId: '1QhGcjeYurXBCnJO9JRWvOzWncPmdM5hO',
    content: `
**Considerações Gerais:**

## Passo 1: Avaliação Inicial

**Avaliar Sinais, Sintomas e Foco**

Sinais e sintomas, foco suspeito e necessidade de culturas (preferencialmente antes do antimicrobiano).

<br/>

**Evitar Culturas Desnecessárias**

Ex: urocultura em sepse de foco respiratório.

<br/>

---

## Passo 2: Escolha do Antimicrobiano

**Penetração da Droga no Sítio Infeccioso**

Considerar penetração. Diferenciar colonização de infecção.

<br/>

**Menor Espectro Possível**

Optar pelo menor espectro possível.

<br/>

**Doses e Função Renal**

Doses neste guia são para **função renal normal** (ajustes conforme TFG em protocolo específico).

<br/>

**Ciclos Curtos**

Preferir **ciclos curtos** em infecções não complicadas e com foco drenado. **Avaliar diariamente a possibilidade de suspensão**.

## Vias Aéreas Superiores

### Abscesso Periamigdaliano
*   **Tratamento Internado**: Amoxicilina/clavulanato **1,2g EV 8/8h** OU Ceftriaxona **1g EV 12/12h + Clindamicina 600 mg EV 8/8h** (se falha ambulatorial ou sepse).
*   **Observação**: Avaliar necessidade de **drenagem cirúrgica**.

### Faringoamigdalite Aguda
*   **Tratamento Internado**: Amoxicilina/clavulanato **1,2g EV 8/8h** OU Clindamicina **600 mg EV 8/8h** (se alergia a penicilina).
*   **Observação**: Se falha ambulatorial, Ceftriaxona **1g EV 12/12h (ou 2g EV 1x/dia) + Clindamicina 600 mg EV 8/8h**.

## Vias Aéreas Inferiores

### Pneumonia Adquirida na Comunidade (PAC)
*   **Tratamento Internado**: Ceftriaxona **1g EV 12/12h + Azitromicina 500 mg EV ou VO 1x/dia** OU Levofloxacino **750 mg EV 1x/dia** (preferencial para DPOC com exacerbações frequentes).
*   **Observações**:
    *   **Pneumonia aspirativa**: Não há necessidade de azitromicina ou anaerobicida (exceto abscesso pulmonar).
    *   Transicionar azitromicina para VO o mais rápido possível.

### Pneumonia Hospitalar (>72h de internação)
*   **Tratamento Internado**: Cefepime **2g EV 8/8h**.
*   **Fatores de risco para MRSA**: Associar Vancomicina **15 mg/kg EV 12/12h**.
*   **Alérgicos a betalactâmicos**: Moxifloxacino **400 mg EV 1x/dia +/- Gentamicina 5 mg/kg EV 1x/dia**.

## Trato Gastrointestinal

### Apendicite Aguda
*   **Tratamento Internado**: Ampicilina/sulbactam **3g EV 6/6h**.
*   **Apendicite supurada**: Ceftriaxona **1g EV 12/12h + Metronidazol 1,5g EV 1x/dia**.

### Colecistite Aguda
*   **Tratamento Internado**: Ampicilina/sulbactam **3g EV 6/6h** OU Ceftriaxona **1g EV 12/12h + Metronidazol 500 mg EV 8/8h** (se uso recente de ATB ou instabilidade/sepse).

## Trato Genitourinário

### Pielonefrite Aguda
*   **Tratamento Internado**: Gentamicina **3-5 mg/kg EV 1x/dia** OU Ceftriaxona **1g EV 12/12h** (se disfunção renal ou contraindicação à gentamicina).

### Cistite (ITU Baixa)
*   **Tratamento Internado**: Nitrofurantoína **100 mg VO 6/6h por 5 dias** OU Sulfametoxazol/trimetoprim **400/160 mg 2 cp VO 12/12h**.

## Pele e Partes Moles

### Celulite, Erisipela
*   **Tratamento Internado**: Cefazolina **1g EV 8/8h** OU Ceftriaxona **1g EV 12/12h + Clindamicina 600 mg EV 8/8h**.
*   **Fator de risco MRSA**: Associar Vancomicina.
`
  },
    {
    id: 'instrucao-normativa-001-aih-prescricao',
    title: 'Instrução Normativa Nº 001/2023 – AIH e Prescrição',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Internação', 'AIH', 'Prescrição Médica', 'Pronto-Socorro', 'Documentação Médica'],
    googleDriveFileId: '1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h1h',
    content: `
## Objetivo
Padronizar os processos de **início de internação clínica via pronto-socorro**, desde a criação de AIH até a prescrição e documentação médica obrigatória no sistema.

## 📌 Orientações:

### 01. Internação Clínica
*   A decisão de internar deve ser realizada **exclusivamente pelo médico plantonista**.
*   Após decisão clínica, o médico deve:
    *   Inserir **AIH** no sistema com diagnóstico provável.
    *   Inserir **prescrição inicial completa** para as primeiras 12–24h.
    *   Informar a equipe de enfermagem da internação.

### 02. AIH – Autorização de Internação Hospitalar
*   Criar diretamente no sistema com a aba “AIH”.
*   Marcar o motivo da internação como **"Emergência Clínica"**.
*   Incluir CID compatível.
*   Em caso de dúvida, consultar **NIR** ou responsável pela clínica.

### 03. Evolução Médica Obrigatória
*   O médico responsável pela internação deve fazer uma **evolução médica compatível com o momento da internação**, constando:
    *   Avaliação inicial completa.
    *   Reavaliação do paciente no momento da internação.
    *   Justificativa clínica para conduta e necessidade de leito.

### 04. Prescrição Médica
*   Deve conter:
    *   Medicações EV e VO.
    *   Hidratação, dieta, controles.
    *   Exames laboratoriais e de imagem.
*   Incluir:
    *   Medicações de uso contínuo.
    *   Medicações em horário fixo (ex: insulina NPH, antibióticos EV).

### 05. Transferência de Cuidados
*   Após inserção da AIH e prescrição, avisar **enfermagem e NIR**.
*   Acompanhar alocação de leito e evolução do quadro clínico.
*   O plantonista continua responsável até a **aceitação formal pelo médico da clínica**.
    `
  },
    {
    id: 'instrucao-normativa-002-2022-fluxo-oncologicos',
    title: 'Instrução Normativa Nº 002/2022 – Fluxo Assistencial para Pacientes Oncológicos',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Oncologia', 'Fluxo Assistencial', 'Internação', 'Pacientes Oncológicos', 'HRO'],
    googleDriveFileId: '1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i',
    content: `
Esta instrução normativa estabelece o fluxo assistencial para o suporte clínico de pacientes da Oncologia Clínica internados no HRO.

## 1. Pacientes Oncológicos em Tratamento Sistêmico Vigente
*   Devem ser encaminhados **diretamente ao Serviço de Oncologia Clínica**, quando possível, com internação formalizada via emergência.
*   Caso estejam inicialmente sob cuidados da Clínica Médica, deve haver reavaliação conjunta com o oncologista para eventual transferência.

## 2. Motivo da Internação Fora do Escopo da Oncologia
*   Deve ser discutido com o médico da Clínica Médica e o oncologista assistente do paciente.
*   A decisão deve ser registrada em prontuário, com **justificativa clara**.

## 3. Prazo para Transferência entre Clínicas
*   A transferência entre clínicas deve ocorrer **preferencialmente em até 2 dias úteis**, após contato com a equipe de oncologia.

## 4. Registros Médicos da Oncologia
*   Médicos da Oncologia devem registrar uma avaliação clara e objetiva, mesmo se o paciente estiver com **baixa expectativa de resposta terapêutica**.
*   Sempre que possível, é importante deixar um **relatório médico impresso**, principalmente em casos de pacientes oriundos de outros municípios ou em acolhimento paliativo.

## 5. Pacientes Oncológicos Paliativos
*   Pacientes oncológicos **paliativos, sem tratamento antineoplásico vigente e sem perspectiva de novo tratamento**, permanecem sob responsabilidade da **Clínica Médica**, mesmo que o caso seja discutido com a oncologia.
*   A equipe da Clínica Médica pode solicitar orientação à Oncologia, mas **sem transferência de responsabilidade**.
    `
  },
      {
    id: 'instrucao-normativa-003-2023-fluxo-politraumatizados',
    title: 'Instrução Normativa nº 003/2023 – Fluxo de pacientes politraumatizados',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['politrauma', 'fluxo de pacientes', 'pronto socorro', 'internação', 'emergência'],
    googleDriveFileId: '1j3j3j3j3j3j3j3j3j3j3j3j3j3j3j3j',
    content: `
## Internações de pacientes politraumatizados no Pronto Socorro

Com o objetivo de otimizar o fluxo de atendimento aos pacientes com politrauma no HRO, ficam definidos os seguintes critérios:

1.  Os pacientes com politrauma internarão sob os cuidados da **especialidade cujo trauma for predominante**, respeitando a **autonomia do emergencista** na decisão.

2.  As **equipes das especialidades envolvidas** no atendimento ao politrauma devem acompanhar diariamente os pacientes, com **registro em prontuário** e **plano terapêutico** definido.
    *   Em casos de **transferência entre especialidades**, a equipe que transfere deverá **comunicar a decisão em comum acordo** e registrar em prontuário.

3.  A **Direção Técnica** será responsável por supervisionar o funcionamento da equipe de politrauma, apoiar na melhoria de processos e fornecer dados para avaliação periódica.
    `
  },
    {
    id: 'instrucao-normativa-004-2023-internacoes-cirurgia-geral',
    title: 'Instrução Normativa nº 004/2023 – Internações em Cirurgia Geral',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Internação', 'Cirurgia Geral', 'Pronto Socorro', 'Protocolo', 'Sobresaviso'],
    googleDriveFileId: '1k4k4k4k4k4k4k4k4k4k4k4k4k4k4k4k',
    content: `
Dispõe sobre os critérios de internação de pacientes oriundos do Pronto Socorro no serviço de **Cirurgia Geral (sobresaviso)**.

## 1. Critérios de Internação na Cirurgia Geral
Serão internados na Cirurgia Geral os pacientes com as seguintes condições:
*   **Obstrução ou pseudo-obstrução intestinal**
*   **Abdome agudo**
*   **Doenças das vias biliares**
*   **Fístulas/úlceras com indicação de debridamento cirúrgico**
*   **Pós-operatório recente com complicações cirúrgicas**
*   Outros quadros relacionados à Cirurgia Geral

## 2. Pacientes com Avaliação Cirúrgica de Outra Instituição
Pacientes que chegam com avaliação cirúrgica **de outra instituição** devem ser **reavaliados** pelo plantonista do Pronto Socorro (PS) antes de qualquer encaminhamento ao serviço de Cirurgia Geral.

## 3. Atuação da Clínica Médica
A Clínica Médica prestará atendimento a pacientes internados na Cirurgia Geral, com foco em:
*   **Avaliação clínica**
*   **Gestão de intercorrências clínicas**
*   **Acompanhamento** ou **transferência** quando necessário

## 4. Transferência entre Equipes
A transferência de pacientes entre equipes deve ser realizada de forma **clara e organizada**. Isso inclui a definição de planos para:
*   Retirada de drenos
*   Curativos
*   Planos ambulatoriais
*   Outras orientações pertinentes
    `
  },
    {
    id: 'normativa-007-2023-endoscopia-transfusao-ps',
    title: 'Instrução Normativa nº 007/2023 – Endoscopia e Transfusão no Pronto Socorro',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Endoscopia', 'Transfusão Sanguínea', 'Pronto Socorro', 'Urgência', 'Emergência'],
    content: `
Dispõe sobre os critérios de atendimento no Serviço de Urgência e Emergência do HRO para pacientes com indicação de Endoscopia Digestiva Alta ou transfusão sanguínea.

A Direção Técnica Administrativa do HRO, visando aprimorar os fluxos de atendimentos no Pronto Socorro, estabelece:

## Endoscopia Digestiva Alta (EDA) e Passagem de Sonda Nasoenteral
*   Pacientes com necessidade de EDA ou passagem de sonda nasoenteral devem ter o exame **solicitado ainda no Pronto Socorro**, **sem necessidade de internação para realização**.

## Transfusão Sanguínea
*   Pacientes com necessidade **apenas de transfusão sanguínea** devem receber o componente **no próprio Pronto Socorro**, **sem internação**.

## Após a Transfusão
*   O médico plantonista deverá solicitar a **AIH (Autorização de Internação Hospitalar)** com o **código 0301060088** (diagnóstico e/ou atendimento de urgência em Clínica Médica).

## A AIH
*   Deve ser **anexada ao prontuário** do paciente.
*   **Não há necessidade de internação** para esse procedimento.
    `
  },
    {
    id: 'instrucao-normativa-009-2023-atendimento-ortopedia-ps',
    title: 'Instrução Normativa nº 009/2023 – Atendimento em Ortopedia no PS',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Ortopedia', 'Pronto Socorro', 'Atendimento', 'Urgência', 'Fluxo'],
    googleDriveFileId: '1l5l5l5l5l5l5l5l5l5l5l5l5l5l5l5l',
    content: `
Estabelece os critérios para atendimento e acompanhamento de pacientes ortopédicos no Pronto Socorro do HRO.

## 1. Atendimento Inicial
*   Todo paciente com **queixa ortopédica** será avaliado inicialmente **pelo médico plantonista do PS**.
*   Casos com necessidade de avaliação especializada deverão ser encaminhados para **avaliação do sobreaviso de Ortopedia**.

## 2. Avaliação pelo Ortopedista
*   O plantonista deve realizar **anamnese e exame físico prévios**, com **registro no prontuário**.
*   A equipe de Ortopedia deve ser acionada **após avaliação clínica inicial**, exceto em situações de **emergência ortopédica evidente**.

## 3. Condutas e Internação
*   Casos com **indicação cirúrgica** ou necessidade de imobilização avançada deverão ser conduzidos com o **acompanhamento da Ortopedia**.
*   A internação de pacientes ortopédicos deve ser realizada mediante **registro da indicação pelo ortopedista** ou com validação do plantonista em situações críticas.

## 4. Alta e Retorno
*   Pacientes com lesões que **não requerem intervenção imediata** devem receber orientação de alta com:
    *   Prescrição médica
    *   Agendamento ou referência para acompanhamento ambulatorial, conforme protocolo
    `
  },
      {
    id: 'instrucao-normativa-010-2023-internacoes-pediatria',
    title: 'Instrução Normativa nº 010/2023 – Internações em Pediatria',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['internação', 'pediatria', 'pronto socorro', 'protocolo', 'crianças'],
    googleDriveFileId: '1m6m6m6m6m6m6m6m6m6m6m6m6m6m6m6m',
    content: `
Esta instrução normativa estabelece critérios claros para internações de pacientes pediátricos que chegam ao Pronto Socorro do HRO.

## Indicações para Internação na Pediatria

Crianças e adolescentes com as seguintes condições podem ser indicados para internação:

*   **Quadro respiratório grave**
*   **Desidratação significativa**
*   **Febre persistente** sem foco definido
*   Necessidade de **antibioticoterapia EV**
*   **Convulsões**
*   **Quadro neurológico agudo**
*   **Intoxicações**
*   Outros quadros clínicos com **risco de agravamento**

## Encaminhamento para Internação

A decisão pela internação deverá ser tomada **pelo plantonista do PS**, preferencialmente **em conjunto com o pediatra de sobreaviso**. É obrigatório que o **registro da justificativa** para a internação conste no prontuário do paciente, indicando também o nome do responsável técnico que aceitou a internação.

## Acompanhamento

A equipe de Pediatria é integralmente responsável pelo **acompanhamento diário** dos pacientes internados sob sua especialidade. Sempre que houver intercorrência clínica relevante, deve-se avaliar a necessidade de **interconsulta com outras especialidades** (ex: Neurologia, Infectologia, Cirurgia Pediátrica).

## Situações Excepcionais

Casos que apresentem instabilidade clínica ou que excedam a capacidade de suporte da Pediatria devem ser discutidos com a **Direção Técnica** do hospital para a definição do melhor fluxo assistencial e manejo do paciente.
    `
  },
    {
    id: 'normativa-011-2023-atendimento-neurocirurgicos',
    title: 'Instrução Normativa nº 011/2023 – Atendimento a Pacientes Neurocirúrgicos',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Neurocirurgia', 'Pronto Socorro', 'Atendimento', 'Protocolo Hospitalar', 'Emergência'],
    content: `
Esta instrução normativa estabelece critérios para o atendimento de pacientes com demanda neurocirúrgica no Pronto Socorro do HRO.

## 1. Avaliação Inicial
Pacientes com suspeita de lesão neurocirúrgica (ex: TCE grave, HSA, HIC, abscesso cerebral, hematoma subdural, hidrocefalia etc.) devem ser:
*   Avaliados inicialmente pelo **médico plantonista**.
*   Encaminhados para avaliação do **sobreaviso de Neurocirurgia** com base em critérios clínicos e de imagem.

## 2. Encaminhamento e Indicação de Conduta
A equipe de Neurocirurgia:
*   Avaliará o caso no PS e definirá **a conduta apropriada** (internação, cirurgia, observação ou alta com seguimento).
*   Deve **registrar no prontuário** sua conduta, plano terapêutico e necessidade de internação, se houver.

## 3. Internação
A internação será realizada:
*   Após **avaliação e aceite formal do neurocirurgião**.
*   Com registro claro da **indicação cirúrgica ou da necessidade de monitoramento especializado**.

## 4. Seguimento Ambulatorial
Casos que não demandam internação imediata devem receber:
*   Prescrição médica.
*   Orientação sobre agendamento de retorno ambulatorial conforme prioridade clínica.
    `
  },
    {
    id: 'instrucao-normativa-012-2023-atendimento-otorrinolaringologia',
    title: 'Instrução Normativa nº 012/2023 – Atendimento em Otorrinolaringologia',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Otorrinolaringologia', 'Pronto Socorro', 'Atendimento', 'Internação', 'Protocolo'],
    googleDriveFileId: '1n7n7n7n7n7n7n7n7n7n7n7n7n7n7n7n',
    content: `
Esta instrução estabelece critérios para o atendimento de pacientes com queixas otorrinolaringológicas no Pronto Socorro do HRO.

## 1. Avaliação Inicial
Todo paciente com queixas em ORL (ex: epistaxe, otalgia, faringite, amigdalite, corpos estranhos, rouquidão súbita, abscessos cervicais) deve ser:
*   **Avaliado inicialmente pelo médico plantonista do PS**.

## 2. Encaminhamento ao Sobreaviso
Casos com necessidade de avaliação especializada devem ser:
*   Encaminhados ao **sobreaviso de Otorrinolaringologia**, após **registro da avaliação clínica inicial** no prontuário.

## 3. Indicação de Internação
A internação em ORL deve ocorrer somente quando:
*   Houver **indicação formal registrada pelo otorrino de sobreaviso**.
*   O caso justificar necessidade de **monitoramento hospitalar, antibioticoterapia EV prolongada, ou intervenção cirúrgica**.

## 4. Casos sem Critério de Internação
Devem receber:
*   Prescrição médica.
*   Orientação para **retorno ambulatorial programado**, conforme protocolos.

## 5. Intercorrências Clínicas
Se houver intercorrência clínica relevante durante a internação sob responsabilidade da ORL, poderá ser solicitada **interconsulta com a Clínica Médica**.
    `
  },
    {
    id: 'instrucao-normativa-013-2023-atendimento-cirurgia-vascular',
    title: 'Instrução Normativa nº 013/2023 – Atendimento em Cirurgia Vascular',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Cirurgia Vascular', 'Pronto Socorro', 'Encaminhamento', 'Internação', 'Protocolo HRO'],
    googleDriveFileId: '1o8o8o8o8o8o8o8o8o8o8o8o8o8o8o8o',
    content: `
Esta instrução normativa estabelece os critérios para encaminhamento e internação de pacientes com demandas de Cirurgia Vascular no Pronto Socorro do HRO.

## 1. Avaliação Inicial
*   Todo paciente com suspeita de afecção vascular (ex: isquemia de membros, TVP extensa, sangramento arterial, pseudoaneurisma, celulite de repetição com fístula vascular) deve ser:
    *   Avaliado inicialmente pelo **plantonista do PS**, com registro clínico completo.

## 2. Encaminhamento ao Sobreaviso
*   O **sobreaviso de Cirurgia Vascular** será acionado para:
    *   Casos com **confirmação clínica ou radiológica** de condição vascular que exija avaliação especializada.
    *   Situações de urgência (ex: isquemia aguda crítica, sangramento arterial ativo, fístulas arteriovenosas complicadas).

## 3. Indicação de Internação
*   A internação será realizada somente com:
    *   **Registro da avaliação do cirurgião vascular** e indicação clara da necessidade hospitalar (ex: revascularização, hemostasia cirúrgica, controle de infecção grave associada a acesso vascular).

## 4. Alta com Seguimento
*   Casos sem necessidade de internação:
    *   Devem receber alta com orientação, prescrição e, se necessário, encaminhamento para **seguimento ambulatorial** ou retorno programado.

## 5. Intercorrências Clínicas
*   Pacientes internados sob responsabilidade da Cirurgia Vascular com intercorrências clínicas devem ser avaliados com apoio da **Clínica Médica**.
    `
  },
    {
    id: 'instrucao-normativa-014-2023-cirurgia-toracica',
    title: 'Instrução Normativa nº 014/2023 – Atendimento em Cirurgia Torácica',
    category: 'Normativa',
    lastUpdated: '2025-11-18',
    tags: ['Cirurgia Torácica', 'Pronto Socorro', 'Internação', 'Protocolo Clínico', 'HRO'],
    googleDriveFileId: '1p9p9p9p9p9p9p9p9p9p9p9p9p9p9p9p',
    content: `
## Objetivo
Define os critérios para avaliação e internação de pacientes com demandas de Cirurgia Torácica no Pronto Socorro do HRO.

## 1. Casos que demandam avaliação pela Cirurgia Torácica:
*   **Hemotórax ou pneumotórax traumático**
*   **Pneumotórax espontâneo recidivante**
*   **Hemotórax espontâneo**
*   **Derrames pleurais com necessidade de drenagem**
*   **Empiema pleural**
*   **Trauma torácico fechado com fratura costal múltipla**
*   **Fístula broncopleural**
*   **Hemoptise volumosa**
*   **Tumores torácicos obstrutivos ou sangrantes**
*   **Complicações de procedimentos torácicos**

## 2. Fluxo de atendimento:
O paciente deve ser:
*   Avaliado inicialmente pelo **plantonista do PS**, com registro da suspeita ou confirmação clínica/imaginológica.
*   Encaminhado ao **sobreaviso de Cirurgia Torácica** se houver critério clínico.

## 3. Internação:
Deve ocorrer mediante:
*   Avaliação e aceite pelo **cirurgião torácico de sobreaviso**.
*   Registro da indicação no prontuário (ex: drenagem, cirurgia, oxigenoterapia de alto fluxo, monitoramento intensivo).

## 4. Casos não cirúrgicos:
Devem ser acompanhados pela **Clínica Médica** com apoio da Cirurgia Torácica, se necessário.
    `
  },
  {
    id: 'normativa-plantao-noturno-intercorrencias',
    title: 'Plantão Noturno — Intercorrências',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Plantão', 'Intercorrências', 'TRR', 'Responsabilidade'],
    content: `# Plantão Noturno — Intercorrências

## Responsabilidades do Plantão Noturno

### 1. Encaminhamento de Intercorrências

**TRR (Time de Resposta Rápida):**
- Contato imediato em casos de deterioração clínica
- Ramais: **8040** ou **8038**
- Disponível 24h para emergências internas

**Residência de Clínica Médica:**
- Residente de plantão pode ser acionado via ramal da clínica
- Para apoio em casos complexos ou instáveis
- Avisar sobre necessidade de transferência prévia

### 2. Pacientes em Intercorrência

**Definição:** Qualquer situação que fuja do esperado para aquele paciente naquele momento.

**Exemplos:**
- Piora de sinais vitais
- Emergência de sintomas novos
- Falência de órgão agudo
- Complicações de procedimentos

**Protocolo:**
1. Avaliação imediata (pode ser breve)
2. Ligar TRR ou residente conforme necessário
3. Preparar transferência se indicado
4. Documentar tudo em prontuário
5. Comunicar família se houver tempo

### 3. Atribuições do Plantonista Noturno

**Não é responsabilidade:**
- Fazer diagnósticos definitivos de novos quadros
- Realizar procedimentos complexos sozinho
- Tomar decisões solitárias em crises maiores

**É responsabilidade:**
- Reconhecer sinais de perigo
- Acionar ajuda rapidamente
- Manter estabilidade provisória
- Documentar evento completo

### 4. Transferência de Pacientes em Intercorrência

Se necessário:
1. Avisar sobreaviso ou residente ANTES de sair do PS
2. Deixar outro médico responsável se possível
3. Avisar enfermagem sobre destino
4. Documentar razão e hora da transferência`
  },
  {
    id: 'normativa-transferencias-pacientes-internados',
    title: 'Transferências de pacientes internados para o HRO',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Transferência', 'Pacientes', 'SISREG', 'NIR', 'Regulação'],
    content: `# Transferências de pacientes internados para o HRO

## Processo de Regulação e Aceite

### 1. Contato Inicial

**NIR (Núcleo de Informação e Regulação):**
- Ramal: **6616**
- Horário: 24h
- Responsável pelo SISREG

**Informações necessárias:**
- Nome completo do paciente
- Idade e dados demográficos
- Diagnóstico principal
- Motivo da transferência
- Medicações em uso
- Patologias prévias

### 2. Solicitação no SISREG

**Fluxo:**
1. NIR registra a solicitação
2. Sistema busca leitos disponíveis
3. HRO é contatado para aceite
4. Confirmação de leito e horário
5. Organização do transporte

**Papel do Médico Solicitante:**
- Fornecer informações clínicas claras
- Manter contato com NIR
- Preparar paciente para transporte
- Documentar em prontuário

### 3. Critérios de Aceite

**HRO aceita transferências para:**
- Clínica Médica com múltiplas comorbidades
- Procedimentos cirúrgicos
- Exames complementares
- Retaguarda de pacientes críticos

**HRO NÃO aceita:**
- Pacientes leves que podem aguardar
- Problemas já resolvidos
- Pacientes com exames já liberados

### 4. Checklist de Preparação

- [ ] Documentação do paciente preparada
- [ ] Medicações atualizadas e em quantidade suficiente
- [ ] Exames complementares anexados ao prontuário
- [ ] Prescrições assinadas
- [ ] Alergias documentadas em local visível
- [ ] Contato de familiares atualizado`
  },
  {
    id: 'normativa-internacoes-macrorregiao-grande-oeste',
    title: 'Internações (Macrorregião Grande Oeste)',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Internação', 'Leitos', 'Retaguarda', 'SISREG', 'Clínica Médica'],
    content: `# Internações (Macrorregião Grande Oeste)

## Política de Leitos e Internações

### 1. Distribuição de Leitos HRO

**Retaguarda para a Macrorregião:**
- Clínica Médica: **X leitos** (varia conforme lotação)
- Cirurgia: **Y leitos** (conforme disponibilidade)
- Pediatria: **Z leitos**
- Maternidade: **W leitos**

### 2. Critérios de Internação

**Indicações para Clínica Médica:**
- Pacientes com múltiplas comorbidades
- Infecções complexas ou graves
- Condições crônicas descompensadas
- Necessidade de observação prolongada

**Indicações para Cirurgia:**
- Afecções cirúrgicas agudas
- Traumas com indicação de internação
- Pós-operatório de cirurgias maiores

### 3. Processo de Solicitação

**Passo 1:** Contato com NIR (ramal 6616)
**Passo 2:** Passar informações clínicas
**Passo 3:** Aguardar confirmação de leito
**Passo 4:** Solicitar transporte via SISREG
**Passo 5:** Documentar no prontuário

### 4. Cuidados na Transferência

- Paciente estável para o transporte?
- Medicações críticas trazidas?
- Acompanhante informado?
- Documentação completa?`
  },
  {
    id: 'normativa-transferencia-leito-uti',
    title: 'Transferência de pacientes para Leito de UTI',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Transferência', 'UTI', 'Leito', 'Critérios', 'Estabilização'],
    content: `# Transferência de pacientes para Leito de UTI

## Critérios e Processo

### 1. Critérios de Indicação para UTI

**Instabilidade Hemodinâmica:**
- PA < 90/60 mmHg refratária
- Necessidade de vasopressor
- Choque cardiogênico ou séptico

**Insuficiência Respiratória:**
- SpO2 < 90% em O2 alto fluxo
- FR > 30 ou < 10
- Indicação de intubação

**Deterioração Neurológica:**
- Glasgow < 12
- Convulsões refratárias
- AVC extenso

**Sepse Grave/Choque Séptico:**
- Hipotensão
- Lactato elevado
- Disfunção de órgão

### 2. Solicitação de Leito

**Plantonista da Emergência:**
- Contato direto com UTI (ramais **8040 ou 8038**)
- Passa informações clínicas detalhadas
- Aguarda confirmação de disponibilidade

**Se sem leito disponível:**
- Manter estabilidade na Emergência
- Contato com NIR para transferência para outro hospital
- Reavaliar a cada hora

### 3. Preparação para Transferência

**Medicações:**
- Todas as infusões documentadas
- Velocidades de infusão anotadas
- Alergias em local visível

**Exames:**
- Últimos resultados em prontuário
- Radiografias anexadas
- Culturascoletadas (se aplicável)

**Documentação:**
- Evolução clínica resumida
- Diagnósticos principais
- Comorbidades relevantes
- Dinâmica do caso`
  },
  {
    id: 'normativa-internacoes-clinicas-ps',
    title: 'Internações clínicas oriundas do PS',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Internação', 'Clínica Médica', 'PS', 'Procedimentos', 'Critérios'],
    content: `# Internações clínicas oriundas do PS

## Processo de Internação

### 1. Avaliação de Necessidade de Internação

**Indicações:**
- Infecção grave com necessidade de IV prolongado
- Descompensação de doença crônica
- Investigação de novo diagnóstico complexo
- Monitoramento de paciente instável

**Não são indicações:**
- Falta de cuidador em domicílio
- Espera por consulta eletiva
- Exame complementar que pode ser feito ambulatorialmente

### 2. Comunicação com Clínica Médica

**Processo:**
1. Avaliação clínica completa no PS
2. Decisão de internação pelo médico
3. Contato com o sobreaviso de clínica médica
4. Apresentação do caso para aceite
5. Transferência ordenada para enfermaria

**Informações Necessárias:**
- Diagnóstico principal
- Antecedentes relevantes
- Medicações em uso
- Alergias
- Necessidades especiais

### 3. Documentação para Internação

**Prescrição:**
- Completa e assinada
- Medicações com frequência clara
- Dieta especificada
- Monitorização indicada

**Prontuário:**
- Anamnese
- Exame físico
- Hipóteses diagnósticas
- Plano de investigação
- Exames solicitados

### 4. Transferência para Enfermaria

- Passagem verbal para enfermeira da enfermaria
- Documentação fornecida completa
- Paciente estável para transferência
- Acompanhante informado sobre rotina`
  },
  {
    id: 'normativa-internacao-criticos-uti',
    title: 'Internação de pacientes críticos com critério de UTI',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Crítico', 'UTI', 'AIH', 'TRR', 'SISREG', 'Leito', 'Transferência'],
    content: `# Internação de pacientes críticos com critério de UTI

## Fluxo de Identificação e Internação

### 1. Identificação do caso clínico para UTI

**Médico rotineiro presente?**
- **Sim:** Contatar para avaliação e decisão
- **Não:** Seguir protocolo abaixo

**Se sem médico rotineiro:**
1. Fazer a AIH em nome do rotineiro
2. Prescrever primeira dose de antibióticos ou medicações de estabilização como "AGORA"
3. Comunicar Time de Resposta Rápida (TRR)
4. Solicitar leito de UTI interno → Aba de formulários e ligar para plantonista da UTI (ramais 8040 ou 8038)

### 2. Leito disponível?

**Sim:**
- Enfermagem realiza encaminhamentos
- Paciente transferido para UTI
- Médico acompanha até estabilização

**Não:**
1. Duplicar AIH com cabeçalho "AIH PARA TRANSFERÊNCIA"
2. Contatar NIR (Ramal 6616) para inclusão no SISREG
3. Comunicar paciente e/ou família
4. Paciente permanece no pronto socorro
5. Em caso de intercorrência ou desestabilização:
   - Solicitar ajuda ao residente da clínica médica de plantão
   - Ou acionar TRR novamente

### 3. Monitorização Provisória

**Se aguardando leito:**
- Sinais vitais a cada 15-30 min
- Reavaliar resposta ao tratamento
- Documentar deterioração imediatamente
- Contactar NIR a cada 1-2h para status de leito

### 4. Documentação Crítica

- AIH completa e assinada
- Prescrição em prontuário eletrônico
- Justificativa clínica para UTI documentada
- Comunicações registradas (SISREG, TRR, familiares)`
  },
  {
    id: 'normativa-municipios-referenciados-aceite',
    title: 'Municípios Referenciados e Critérios de Aceite — HRO',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Referência', 'Municípios', 'Critérios de Aceite', 'Especialidades', 'Ortopedia', 'Neurologia'],
    content: `# Municípios Referenciados e Critérios de Aceite — HRO

## Lista de Municípios Referenciados

**HRO é referência para TODAS as especialidades e emergência nos seguintes municípios:**

1. Águas de Chapecó
2. Águas Frias
3. Arvoredo
4. Caibi
5. Caxambu do Sul
6. Chapecó
7. Cordilheira Alta
8. Coronel Freitas
9. Cunhataí
10. Formosa do Sul
11. Guatambú
12. Irati
13. Jardinópolis
14. Lajeado Grande
15. Marema
16. Nova Erechim
17. Nova Itaberaba
18. Paial
19. Palmitos
20. Pinhalzinho
21. Planalto Alegre
22. Quilombo
23. Riqueza
24. Santiago do Sul
25. São Carlos
26. Serra Alta
27. Sul Brasil
28. União do Oeste

## Observações Especiais de Referência

### ORTOPEDIA

**Regra Geral:**
- Pacientes dos municípios listados acima são sempre aceitos

**Pacientes de fora da macrorregião:**
- **Só serão aceitos APÓS liberação do sobreaviso da ortopedia**
- **Obrigatório ligar antes**

### NEUROLOGIA / NEUROCIRURGIA

**Casos de alta complexidade:**
- Pacientes que precisem de avaliação da neuroclínica ou neurocirurgia
- Podem ser aceitos **sem necessidade de ligar para o sobreaviso antes**
- O **plantonista pode aceitar diretamente**

**Exemplos de casos aceitos:**
- AVC isquêmico com janela terapêutica
- Hemorragia intracraniana
- TCE grave
- Estado de mal convulsivo
- Trauma raquimedular

### PACIENTES DE XANXERÊ

**Atenção Especial:**

**NÃO somos referência para:**
- Nenhuma especialidade geral de Xanxerê
- APENAS para Neurocirurgia, Neurologia e Ortopedia de alta complexidade (se houver aceite do sobreaviso)

**Restrições absolutas:**
- **NÃO aceitar pacientes de Xanxerê para:**
  - Cirurgias gerais
  - EDA por HDA
  - Oftalmologia
  - Otorrinolaringologia (não temos sobreaviso)
  - Exames complementares isolados

## Verificação de Referência

Antes de aceitar qualquer paciente de fora da lista:
1. Confirmar município de origem
2. Verificar especialidade solicitada
3. Aplicar critérios acima
4. Documentar decisão em prontuário`
  },
  {
    id: 'normativa-transfusao-hemocomponentes',
    title: 'Transfusão de Hemocomponentes',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Transfusão', 'Hemocomponentes', 'G-HOSP', 'SSH', 'Hemograma', 'Anemia', 'Emergência'],
    content: `# Transfusão de Hemocomponentes

## 1. Prescrição de Hemocomponentes no G-HOSP

**Frequência Recomendada:**
- Utilize **frequência "ACM" (A Critério Médico)** ou **"SN" (Se Necessário)**
- Evita falhas na checagem ou agendamento da enfermagem
- Facilita implementação flexível conforme resposta clínica

## 2. Prescrição da Transfusão — Campo "Cuidados"

**Obrigatoriedade:**
- O **médico assistente DEVE prescrever** a transfusão na seção "Cuidados"
- Não deve ser apenas no pedido do laboratório

**Exemplos de Prescrição:**
- "Transfundir 1 CHAD"
- "Transfundir 2 plaquetas após liberação"
- "Transfusão de plasma conforme plano de tratamento"

**Por quê?**
- Formaliza a ordem médica para enfermagem e banco de sangue
- Cria rastreabilidade completa
- Facilita continuidade do cuidado entre plantões

## 3. Observações Clínicas na Aba Hemoterapia

**Campo "Notas":**
Registre instruções adicionais importantes para toda a equipe:
- "Infundir assim que disponível"
- "Transfundir após chegada da prova cruzada"
- "Urgência – Anemia grave"
- "Paciente com reação transfusional prévia – avaliar"

**Benefícios:**
- Evita atrasos desnecessários
- Reforça contexto clínico
- Prioriza ação do banco de sangue

## 4. Solicitação de Sangue O Negativo (Emergência)

**Cenários Críticos:**
Em situações onde não há tempo para prova cruzada convencional:

**Procedimento:**
1. Solicitar o exame: **"Prova cruzada O negativo – transfusão emergencial"**
2. Preencher a **SSH (Solicitação de Sangue e Hemocomponentes)** no G-HOSP
3. Para múltiplas unidades, **repetir o pedido separadamente** para cada bolsa

**Meta Temporal:**
⏱️ Transfusão deve ocorrer em **até 15 minutos** após solicitação formal

## 5. Internação Exclusiva para Transfusão

**Indicação:**
Pacientes com anemia com critério transfusional devem ser **internados pelo plantonista da emergência**

**Dados de Internação:**
- **CID:** D649 (Anemia não especificada)
- **Procedimento:** 03.01.06.008-8 (Diagnóstico e/ou atendimento de urgência em clínica médica)

## 6. Hemograma Pré e Pós-Transfusão

**Hemograma Pré-Transfusão:**
- **Obrigatório SEMPRE**, mesmo se paciente trouxer exames externos
- Garante baseline conhecida e evita interpretações erradas

**Hemograma Pós-Transfusão:**
- **Solicitar novo hemograma** após término da transfusão
- Preferencialmente em **até 12 horas**
- Avalia resposta terapêutica e necessidade de transfusões adicionais

## 7. Passagem de Plantão e Comunicação Efetiva

**Durante Passagem de Plantão:**
O médico deve sinalizar claramente:
- Se o paciente está internado **APENAS para transfusão**
- Se há **outros diagnósticos e condutas em andamento**
- Qual é o plano após a transfusão

**Importante:**
⚠️ **A transfusão não é a única conduta!**

**Investigação Obrigatória:**
- Identificar e tratar a **causa da anemia**
  - Sangramento oculto (teste de fezes, endoscopia)
  - Hemólise (reticulocitos, bilirrubina, DHL)
  - Insuficiência medular (medulograma se indicado)
  - Deficiência nutritiva (ferritina, B12, folato)

---

## Checklist de Transfusão

- [ ] Prescrição no campo "Cuidados" completada
- [ ] SSH preenchida no G-HOSP
- [ ] Hemograma pré-transfusão realizado
- [ ] Notas clínicas adicionadas à aba de hemoterapia
- [ ] Causa da anemia sendo investigada
- [ ] Passagem de plantão documenta contexto clínico
- [ ] Hemograma pós-transfusão agendado`
  },
  {
    id: 'normativa-passagem-plantao',
    title: 'Passagem de plantão',
    category: 'Orientação',
    lastUpdated: '2025-12-03',
    tags: ['Plantão', 'Passagem', 'Comunicação', 'Segurança do Paciente', 'SBAR', 'Priorização', 'Equipe'],
    content: `# Passagem de plantão

## GUIA PRÁTICO

## 1. FUNDAMENTOS DA PASSAGEM DE PLANTÃO

### 1.1 OBJETIVOS

- **Continuidade do cuidado** - garantir que o paciente não seja "perdido" na troca
- **Segurança do paciente** - prevenir eventos adversos por falha de comunicação
- **Compartilhamento de responsabilidade** - transferência formal do cuidado
- **Eficiência** - otimizar tempo sem comprometer qualidade

### 1.2 PRINCÍPIO FUNDAMENTAL

> A passagem de plantão deve seguir a MESMAinton lógica de priorização clínica que você usa durante o atendimento.

Se você prioriza sala vermelha durante o plantão, deve priorizar sala vermelha na passagem.

---

## 2. CLASSIFICAÇÃO DE PRIORIDADE NA PASSAGEM

### 🔴 PRIORIDADE 1 - PASSAGEM ATIVA OBRIGATÓRIA

**Tempo: 1-3 minutos por paciente**

**Quem inclui:**
- Pacientes em sala vermelha
- Instabilidade hemodinâmica ou ventilatória
- Rebaixamento do nível de consciência
- Pós-PCR recente
- Politrauma grave
- Choque de qualquer etiologia
- Sepse grave/choque séptico
- IAM com instabilidade
- AVC em janela terapêutica

### 🟡 PRIORIDADE 2 - PASSAGEM ATIVA RECOMENDADA

**Tempo: 1-2 minutos por paciente**

**Quem inclui:**
- Urgências com risco de deterioração
- Casos complexos com múltiplas comorbidades
- Pacientes aguardando exames/procedimentos críticos
- Situações diagnósticas indefinidas
- Pacientes com histórico sugestivo de complicação grave

### 🟢 PRIORIDADE 3 - PASSAGEM PASSIVA ACEITÁVEL

**Tempo: menção breve ou prontuário**

**Quem inclui:**
- Pacientes em observação estável
- Aguardando resultados de exames de rotina
- Alta programada
- Quadros benignos autolimitados

---

## 3. ESTRUTURA DA PASSAGEM ATIVA — MODELO SBAR

**IDENTIFICAÇÃO:** Leito + nome + idade

**S (Situação):**
→ Motivo principal do atendimento atual
→ Condição clínica no momento da passagem

**B (Background):**
→ Doenças crônicas relevantes
→ História breve do evento atual
→ Tratamentos prévios já realizados

**A (Avaliação):**
→ Quadro clínico com dados objetivos (sinais vitais, exame físico, exames)
→ Diagnóstico ou hipóteses diagnósticas
→ Gravidade do caso e riscos

**R (Recomendação):**
→ Condutas já tomadas
→ O que está pendente ou deve ser feito no próximo plantão
→ Pontos de atenção e necessidade de monitorização

---

## 4. PASSAGEM EM CENÁRIO DE PS LOTADO

### Realidade do HRO

Quando há múltiplos pacientes críticos simultaneamente:

**É REALISTA E ACEITÁVEL:**
- Passagens mais objetivas para casos de prioridade 2 e 3
- Focar tempo verbal nos casos de prioridade 1
- Orientar leitura de prontuário para casos estáveis
- Fazer passagens mais curtas (mas completas)

**NÃO É ACEITÁVEL:**
- Omitir casos com risco de deterioração
- Não informar pendências críticas
- "Passar por cima" de urgências complexas
- Assumir que colega vai "descobrir" as pendências

---

## 5. RECEBENDO A PASSAGEM DE PLANTÃO

### 5.1 RESPONSABILIDADES DE QUEM RECEBE

**DURANTE a passagem:**
- Ouvir ativamente, sem interromper desnecessariamente
- Anotar casos prioritários e pendências
- Fazer perguntas pertinentes
- Esclarecer dúvidas específicas

**APÓS a passagem:**
- Ler prontuário dos casos não passados ativamente
- Reavaliar prioridades conforme evolução
- **ASSUMIR RESPONSABILIDADE integral pelos pacientes**

### 5.2 PRINCÍPIO FUNDAMENTAL

**A partir do momento que você recebe o plantão, os pacientes são SUA responsabilidade, independente do que foi ou não foi passado verbalmente.**

---

## 6. CHECKLIST DA PASSAGEM IDEAL

### ANTES DA PASSAGEM
- Revisar lista de pacientes
- Categorizar por prioridade (1, 2, 3)
- Checar exames recém-liberados
- Identificar pendências críticas

### DURANTE A PASSAGEM (10-20 minutos)
- **Prioridade 1:** passar todos, beira-leito se possível
- **Prioridade 2:** passar principais casos verbalmente (SBAR)
- **Prioridade 3:** mencionar brevemente ou orientar prontuário
- Informar pacientes em exames/procedimentos
- Mencionar vagas solicitadas (UTI, internação, transferência)
- Esclarecer dúvidas

### APÓS A PASSAGEM (5 minutos)
- Documentar passagem em prontuário dos casos prioritários
- Disponibilizar telefone para dúvidas urgentes (opcional)
- Fazer última ronda rápida se houver tempo
- Transferir formalmente a responsabilidade

---

## 7. REGRA DE OURO

**"Passe o plantão da forma que você gostaria de receber: completo, honesto, realista e respeitoso."**

---

## 8. CONCLUSÃO

**A passagem de plantão ideal equilibra completude com realismo, segurança do paciente com reconhecimento das limitações humanas, e responsabilidade individual com trabalho em equipe.**

**Seja o colega que você gostaria de ter ao seu lado.**`
  },
];

export const MOCK_CONTACTS: Contact[] = [
  { id: '1', department: 'Recepção Central', extension: '1000' },
  { id: '2', department: 'Emergência (Posto de Enfermagem)', extension: '1010' },
  { id: '3', department: 'UTI Geral - Coordenação', extension: '2050' },
  { id: '4', department: 'Farmácia Central', extension: '3000' },
  { id: '5', department: 'Laboratório', extension: '4000' },
  { id: '6', department: 'TI / Suporte', extension: '5555' },
  { id: '7', department: 'Diretoria Médica', extension: '9000', external: '(49) 3333-0000' },
  { id: '8', department: 'Segurança do Paciente (NSP)', extension: '2100' },
  { id: '9', department: 'Centro Cirúrgico', extension: '2200' },
];