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
# RESUMO EXECUTIVO: DOR ABDOMINAL AGUDA

Este protocolo guia a avaliação inicial de dor abdominal aguda em adultos e idosos no pronto-socorro, focando na identificação de **abdome agudo cirúrgico**.

## PASSO 1: Avaliação Inicial

### Anamnese Focada
*   **Dor**: Início, qualidade, irradiação, localização e tempo.
*   **Sintomas**: Náuseas, vômitos (vômito *após* dor sugere obstrução), distensão, parada de eliminação de gases/fezes.
*   **Histórico**: Cirurgias prévias, comorbidades.
*   **Idosos**: Atenção redobrada! Podem apresentar sintomas atípicos e menor intensidade de dor, mesmo em quadros graves.

### Exame Físico
*   **Sinais Vitais**: Instabilidade sugere choque ou sepse.
*   **Inspeção**: Distensão, cicatrizes, peristaltismo visível.
*   **Ausculta**: Mínimo 3 minutos. Ausência (peritonite) ou sons metálicos (obstrução).
*   **Palpação**: Defesa voluntária vs. **Rigidez involuntária** (irritação peritoneal).

### 🚩 Sinais de Alerta
*   Dor de **início súbito e máxima intensidade** (ruptura, isquemia, perfuração).
*   Dor constante durando **> 6 horas**.
*   Idosos ou imunocomprometidos sem febre (não exclui infecção).

## PASSO 2: Tipos de Abdome Agudo

*   **Inflamatório** (Apendicite, Colecistite): Dor progressiva, febre, peritonite.
    *   *Alvarado ≥ 7*: Alta chance de apendicite.
*   **Perfurativo** (Úlcera): Dor súbita, intensa, "abdome em tábua".
*   **Obstrutivo** (Bridas, Neoplasia): Cólica, distensão, paradas de gases.
*   **Vascular** (Isquemia Mesentérica): Dor desproporcional ao exame físico, acidose metabólica.
*   **Hemorrágico** (Gravidez Ectópica): Choque, dor súbita.

## PASSO 3: Exames Complementares

### Laboratório
*   **Hemograma**: Leucocitose (atenção: normal não exclui diagnóstico).
*   **B-HCG**: **Obrigatório** em mulheres em idade fértil.
*   **Amilase/Lipase**: Suspeita de pancreatite.
*   **Função Renal/Eletrólitos/Gasometria**: Avaliar gravidade sistêmica.

### Imagem
*   **RX Abdome/Tórax**: Pneumoperitônio (ar livre), níveis hidroaéreos (obstrução).
*   **USG Abdomen**: Colecistite, apendicite (crianças/grávidas), ginecológico.
*   **TC de Abdome**: Padrão-ouro para a maioria dos casos de dor abdominal indiferenciada no adulto/idoso.
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

*   **P**ain (Dor): Intensa, súbita, não alivia com analgésicos comuns.
*   **P**allor (Palidez): Membro cadaverico/branco.
*   **P**ulselessness (Ausência de Pulso): Distal à obstrução.
*   **P**oikilothermia (Friotermia): Membro frio comparado ao contralateral.
*   **P**aresthesia (Parestesia): Formigamento/dormência (sinal de sofrimento nervoso).
*   **P**aralysis (Paralisia): Perda motora (sinal grave/tardio).

## 2. Classificação de Rutherford (Viabilidade)

*   **I. Viável**: Sem deficiência sensitiva ou motora. Doppler audível.
    *   *Conduta*: Imagem + Tratamento planejado.
*   **IIa. Ameaça Marginal**: Parestesia leve (dedos), sem paralisia.
    *   *Conduta*: Revascularização urgente.
*   **IIb. Ameaça Imediata**: Dor em repouso, perda sensitiva além dos dedos, fraqueza muscular leve/moderada.
    *   *Conduta*: **Revascularização de EMERGÊNCIA**. Não perder tempo com exames complexos se atrasarem a cirurgia.
*   **III. Irreversível**: Anestesia completa, paralisia (rigidez), ausência de fluxo ao Doppler.
    *   *Conduta*: Amputação primária.

## 3. Conduta Imediata no PS

1.  **Aquecer o paciente** (mas não o membro isquêmico diretamente com calor intenso).
2.  **Membro em posição neutra ou levemente pendente** (nunca elevar).
3.  **Analgesia potente** (Opioides).
4.  **Anticoagulação Plena (Imediata)**:
    *   **Heparina Sódica (Não fracionada)**: Bolus de **80 UI/kg** IV + Manutenção **18 UI/kg/h**.
    *   Objetivo: Evitar propagação do trombo.
5.  **Acionar Cirurgia Vascular** imediatamente.
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

1.  **Dois Identificadores**: Sempre confirme **Nome Completo** e **Data de Nascimento**. Nunca use o número do leito.
2.  **Conferência Ativa**: Peça para o paciente dizer o nome (se consciente). Não pergunte "Você é o Sr. João?".
3.  **Pulseira Obrigatória**: Todo paciente em área assistencial deve estar com pulseira.

## Padrões de Cores (Pulseiras)

*   ⚪ **Branca**: Identificação Padrão (Internação/PS).
*   🔴 **Vermelha**: Alergia (Medicamentosa ou Alimentar).
*   🟡 **Amarela**: Risco de Queda.
*   🟣 **Roxa**: Ordem de Não Reanimar (conforme protocolo de cuidados paliativos).
*   🔵 **Azul**: Risco de Lesão por Pressão.

## Rotinas por Setor

### Admissão / Internação
*   Pulseira colocada no ato da admissão.
*   Conferir dados com documento oficial.
*   Local preferencial: Punho direito.

### Recém-Nascidos (RN)
*   Identificação **imediata** após nascimento (sala de parto).
*   **Duas pulseiras**: Uma no punho, uma no tornozelo.
*   Dados: "RN de [Nome da Mãe]", Data e Hora do parto, Sexo.

### Pacientes Sem Identificação (Desconhecidos)
*   Usar nomenclatura padrão: "DESCONHECIDO [GÊNERO] [DATA/HORA]".
*   Exemplo: "DESCONHECIDO MASCULINO 18/11/24 14:30".
*   Atualizar assim que identificação civil for confirmada.
`
  },
  {
    id: 'protocolo-hemorragia-digestiva-baixa',
    title: 'PROTOCOLO DE HEMORRAGIA DIGESTIVA BAIXA (HDB)',
    category: 'Emergência',
    lastUpdated: '2025-11-18',
    tags: ['HDB', 'Sangramento', 'Gastroenterologia', 'Colonoscopia'],
    googleDriveFileId: '1J9hce27qo4Rd9_WoJudEFluSUv6RrDRZ',
    content: `
# MANEJO DA HEMORRAGIA DIGESTIVA BAIXA

Sangramento abaixo do ângulo de Treitz. Geralmente autolimitado (80%), mas casos graves exigem ação rápida.

## 1. Avaliação Inicial e Estabilização

*   **ABCDE**: Vias aéreas, ventilação, circulação.
*   **Acesso Venoso**: 2 acessos calibrosos (Jelco 14 ou 16).
*   **Reposição Volêmica**: Cristaloide aquecido.
*   **Toque Retal**: **OBRIGATÓRIO**. Avaliar presença de sangue vivo, melena, massas ou doença orificial.

## 2. Estratificação de Risco

**Sinais de Instabilidade (Alto Risco):**
*   PAS < 100 mmHg.
*   FC > 100 bpm.
*   Síncope.
*   Queda de Hb > 2g/dL.

## 3. Investigação Diagnóstica

### Excluir HDA (Hemorragia Alta)
*   15% das hematoquezias (sangue vivo) vêm de HDA maciça.
*   Se instabilidade hemodinâmica: **Passar SNG**.
    *   Lavado com sangue/borra de café: Solicitar **EDA (Endoscopia)** antes da Colonoscopia.
    *   Lavado com bile: HDA improvável.

### Colonoscopia (Padrão-Ouro)
*   **Pacientes Estáveis**: Preparo e exame eletivo (12-24h).
*   **Pacientes Instáveis**: Estabilizar primeiro. Colonoscopia de urgência após preparo rápido (se possível) ou AngioTC.

### Angiotomografia
*   Indicada se sangramento ativo maciço e impossibilidade de preparo para colonoscopia.
*   Sensível para detectar o local do sangramento (0,3-0,5 ml/min).

## 4. Etiologias Comuns
1.  **Doença Diverticular** (Mais comum).
2.  Angiodisplasias.
3.  Neoplasias / Pólipos.
4.  Doenças Orificiais (Hemorróidas/Fissuras).
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
*   **Suspeita de Inalação**: Queimadura em face, vibrissas chamuscadas, escarro carbonáceo, rouquidão, estridor.
*   **Conduta**: **Intubação Precoce**. O edema de glote progride rápido. Não espere o paciente descompensar.

### B (Breathing) - Respiração
*   Ofertarde O2 100%.
*   Avaliar queimadura circunferencial em tórax (risco de restrição expansiva) -> Considerar escarotomia.

### C (Circulation) - Circulação
*   Acesso venoso calibroso em área **não queimada** (se possível).
*   **Fórmula de Parkland (Atualizada - ATLS)**:
    *   **2 ml de Ringer Lactato** x **Peso (kg)** x **% SCQ (Superfície Corporal Queimada)**.
    *   *Obs: Queimaduras elétricas usar 4 ml.*
*   **Administração**:
    *   50% do volume nas primeiras **8 horas** (contadas a partir da hora da *queimadura*, não da chegada).
    *   50% nas 16 horas seguintes.
*   **Meta**: Diurese > 0,5 ml/kg/h (Adulto) e > 1 ml/kg/h (Criança). **Sondagem Vesical Obrigatória**.

### E (Exposure) - Exposição
*   Remover roupas e adornos (anéis, pulseiras causam garroteamento com edema).
*   Cobrir com lençóis limpos e secos para evitar hipotermia.
*   **NÃO USAR** pomadas ou cremes na emergência (dificulta avaliação do cirurgião plástico).

## 2. Cálculo da Superfície Corporal (Regra dos 9)

*   Cabeça e Pescoço: 9%
*   Tronco Anterior: 18%
*   Tronco Posterior: 18%
*   Membros Superiores: 9% cada
*   Membros Inferiores: 18% cada
*   Genitália: 1%

## 3. Critérios de Transferência (Centro de Queimados)
*   Queimadura 2º grau > 10% SCQ.
*   Queimaduras em face, mãos, pés, genitália, períneo ou grandes articulações.
*   Qualquer queimadura de 3º grau.
*   Queimaduras Elétricas ou Químicas.
*   Lesão por inalação.
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
*   **C** - Coronariana (SCA).
*   **H** - Hipertensão (Emergência Hipertensiva).
*   **A** - Arritmia.
*   **M** - Mecânica (Valvopatia aguda).
*   **P** - Pulmonar (TEP).

## 2. Perfil Hemodinâmico (A beira leito)

### Perfil B: Quente e Úmido (Mais comum - Edema Agudo de Pulmão)
*   **Sinais**: Boa perfusão, mas congestão pulmonar (crepitações, dispneia, ortopneia).
*   **Tratamento**:
    *   **VNI (Ventilação Não Invasiva)**: Precoce! Melhora sobrevida.
    *   **Diurético**: Furosemida EV (bolus). Se já usa em casa, dobrar a dose da manhã.
    *   **Vasodilatador**: Nitroglicerina ou Nitroprussiato (se PAS > 110 mmHg). Alivia pós-carga.

### Perfil C: Frio e Úmido (Choque Cardiogênico)
*   **Sinais**: Má perfusão (frio, hipotenso, oligúrico) e congestão.
*   **Tratamento**:
    *   **Inotrópico**: Dobutamina (primeira escolha).
    *   **Vasopressor**: Noradrenalina (se hipotensão grave PAS < 70-80 mmHg).
    *   *Cuidado com diuréticos antes da estabilização hemodinâmica.*

### Perfil L: Frio e Seco (Hipovolêmico/Baixo Débito)
*   **Sinais**: Má perfusão, sem congestão pulmonar.
*   **Tratamento**:
    *   Prova de volume cuidadosa (250ml SF).
    *   Se não responder: Inotrópico.

## 3. Medicamentos Chave

*   **Furosemida**: Ampola 20mg. Dose inicial 0,5 a 1mg/kg EV.
*   **Morfina**: **EVITAR** rotina em IC descompensada (aumenta necessidade de IOT e mortalidade). Usar apenas em dor refratária ou ansiedade extrema incontrolável.
*   **Nitroglicerina (Tridil)**: Iniciar 5-10 mcg/min. Titular a cada 5 min.
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

*   **Neutropenia**: Neutrófilos < 500/mm³ (ou < 1000 com previsão de queda).
*   **Febre**: Tax ≥ 38,3ºC (única) ou ≥ 38,0ºC sustentada por 1 hora.
*   **Atenção**: Sinais inflamatórios podem estar ausentes devido à falta de leucócitos.

## 2. Avaliação Inicial (Na primeira hora)

1.  **Hemoculturas**: 2 pares periféricos (ou 1 periférico + 1 de cateter central).
2.  **Exames**: Hemograma, Creatinina, Ureia, TGO/TGP, Bilirrubinas, Eletrólitos.
3.  **Raio-X de Tórax**: Se sintomas respiratórios.
4.  **Cultura de Urina e Sítios Suspeitos**.

## 3. Estratificação de Risco (Escore MASCC)

Avalia se o paciente pode tratar em casa ou precisa internar.

*   **Baixo Risco (MASCC ≥ 21)**: Pode ser elegível para tratamento ambulatorial (VO).
*   **Alto Risco (MASCC < 21)**: Internação Obrigatória + ATB Endovenoso.

**Critérios de Alto Risco Clínico (Internação Imediata):**
*   Instabilidade hemodinâmica.
*   Pneumonia ou infecção de cateter.
*   Alteração neurológica.
*   Mucosite grave ou diarreia.

## 4. Antibioticoterapia Empírica

Deve cobrir *Pseudomonas aeruginosa*.

### Pacientes Alto Risco (Endovenoso)
*   **Monoterapia (Padrão)**:
    *   **Cefepime** 2g IV 8/8h
    *   OU **Piperacilina-Tazobactam** 4,5g IV 6/6h
    *   OU **Meropenem** 1g IV 8/8h (reservar para casos graves/histórico de ESBL).

### Indicações de Vancomicina Inicial
*Não usar de rotina! Apenas se:*
*   Instabilidade hemodinâmica (Choque).
*   Suspeita de infecção de cateter (CVC).
*   Infecção de pele e partes moles.
*   Pneumonia grave.
*   Histórico de MRSA.

### Pacientes Baixo Risco (Oral - Apenas com supervisão)
*   Ciprofloxacino 500mg 12/12h + Amoxicilina-Clavulanato 875mg 12/12h.

## 5. Reavaliação
*   Se febre persistir após 48-72h em paciente estável: Manter esquema.
*   Se instabilidade: Escalonar antibiótico (cobrir Gram+, Gram- resistentes, Fungal).
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
*   **Vias Aéreas**: Considerar IOT se rebaixamento (Glasgow < 8) ou hematêmese maciça.
*   **Acesso**: 2 acessos venosos periféricos calibrosos (14G/16G).
*   **Exames**: Hemograma, Coagulograma, Função Renal/Hepática.
*   **Transfusão**: Alvo Hb > 7.0 (se coronariopata > 9.0). Plaquetas se < 50.000.

### Tratamento Farmacológico (Imediato)
*   **IBP (Omeprazol)**: Bolus 80mg EV + 8mg/h em BIC (se alto risco/estigmas na EDA).
*   **Terlipressina ou Octreotide**: Em suspeita de **Varizes Esofágicas**.
    *   *Octreotide*: Bolus 50mcg + 50mcg/h.
*   **Antibiótico**: Ceftriaxona 1g EV 24/24h (Profilaxia em cirróticos).

### Endoscopia (EDA)
*   Realizar nas primeiras **24 horas** (12h se varizes).
*   Classificação de Forrest define risco de ressangramento.

---

## 2. Hemorragia Digestiva Baixa (HDB)

### Abordagem
1.  **Estabilizar** o paciente primeiro.
2.  **Excluir HDA**: 15% das hematoquezias maciças vêm de HDA. Instável? Passar SNG. Se vier sangue/bile, é alto.
3.  **Toque Retal**: Obrigatório (fissuras, massas).

### Diagnóstico
*   **Colonoscopia**: Exame de escolha. Requer preparo.
*   **AngioTC**: Se sangramento ativo e impossibilidade de preparo (instabilidade mantida). Sensível para 0.3-0.5 ml/min.
*   **Arteriografia**: Diagnóstica e Terapêutica (Embolização).
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
# RESUMO EXECUTIVO: SEPSE

## 1. Identificação (Sinais de Alerta)

Suspeita de infecção + **Sinais de Disfunção Orgânica**:

*   **Hipotensão**: PAS < 100 mmHg.
*   **Alteração Mental**: Agitação, sonolência, confusão (Glasgow < 15).
*   **Taquipneia**: FR ≥ 22 irpm.
*   *Outros*: Oligúria, queda de plaquetas, aumento de bilirrubinas.

*Se suspeita forte: Abrir Protocolo de Sepse.*

## 2. Pacote da 1ª Hora (Time is Life)

Ações simultâneas a serem iniciadas imediatamente:

1.  **Lactato Arterial**: Coletar imediatamente.
    *   Se alterado (> 2 mmol/L), repetir em 2-4h para guiar ressuscitação.
2.  **Hemoculturas**: 2 pares (aeróbio/anaeróbio) de sítios diferentes.
    *   *Importante*: Coletar **ANTES** do antibiótico.
    *   *Exceção*: Se acesso difícil (> 45 min), não atrasar o ATB.
3.  **Antibiótico Amplo Espectro**: Iniciar na **primeira hora**.
    *   A escolha depende do foco (Pulmonar, Urinário, Abdominal).
    *   Na dúvida ou foco indeterminado: Cobrir Gram- e Gram+.
4.  **Reposição Volêmica**: Se hipotensão (PAS < 90 mmHg) ou Lactato ≥ 4 mmol/L.
    *   **30 ml/kg** de cristaloide (Ringer Lactato ou SF 0,9%) em bolus (até 3 horas).

## 3. Manejo do Choque Séptico

Definição: Hipotensão persistente necessitando de vasopressor para manter PAM ≥ 65 mmHg E Lactato > 2 mmol/L, mesmo após volume adequado.

### Conduta Imediata
1.  **Vasopressor**: Iniciar **Noradrenalina** se não responder ao volume inicial.
    *   Pode iniciar em acesso periférico calibroso (curto prazo) enquanto providencia central.
    *   Alvo: **PAM ≥ 65 mmHg**.
2.  **Corticoide**: Hidrocortisona 200mg/dia (50mg 6/6h) apenas se instabilidade refratária a volume e vasoativos em altas doses.
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
*   **INSTITUIR ISOLAMENTO POR AEROSSÓIS IMEDIATAMENTE.**
*   **COMUNICAR SCIRAS** (Serviço de Controle de Infecções Relacionadas à Assistência à Saúde).

## 2. Diagnóstico Laboratorial

### 2.1. Coleta de Amostras
*   **Escarro/Escarro Induzido:** Coletar pela **manhã**, logo após o paciente acordar, para melhor rendimento do teste.
*   **Pacientes intubados:** Coletar amostra via **aspirado traqueal**. Manter sistema de aspiração fechado até o diagnóstico.
*   **Tosse pouco produtiva:** Considerar **escarro induzido** por nebulização com solução salina a 3%, realizado no quarto privativo.

### 2.2. Teste Rápido Molecular (RT-PCR-TB) - HRO
*   **Prioridade para casos novos** devido à maior sensibilidade e menor tempo para definição diagnóstica e decisão de isolamento.
*   **Amostras processadas no HRO:** Escarro e escarro induzido.
*   **Amostras para LACEN:** Lavado Broncoalveolar (LBA) ou materiais de biópsia (pleura, linfonodo).
*   **Sensibilidade:** Cerca de **90%** para TB pulmonar em escarro. Detecta resistência à Rifampicina com **95%** de sensibilidade.

**Fluxograma RT-PCR-TB (HRO):**
1.  **Suspeita de TB** → Instituir isolamento aerossóis + Comunicar SCIRAS.
2.  Solicitar **RT-PCR *Mycobacterium tuberculosis*** em **1 amostra de escarro** (coletada pela manhã).
3.  **Resultados:**
    *   **RT-PCR Detectado + Resistência à Rifampicina:** Notificar caso, iniciar tratamento (esquema básico), discutir com infectologista (SCIRAS/DIVE), **MANTER ISOLAMENTO AEROSSÓIS.**
    *   **RT-PCR Detectado + SEM Resistência à Rifampicina:** Notificar caso, iniciar tratamento (esquema básico), **MANTER ISOLAMENTO AEROSSÓIS.** Solicitar nova amostra para BAAR de seguimento e cultura (LACEN).
    *   **RT-PCR Não Detectado + Clínica/Imagem Sugestiva:** Prosseguir investigação (cultura, LBA), considerar diagnósticos alternativos, iniciar tratamento empírico (até resultado da cultura). Discutir manutenção do isolamento com infectologista/SCIRAS.
    *   **RT-PCR Não Detectado + Baixa Suspeita Clínica/Radiológica:** **SUSPENDER ISOLAMENTO AEROSSÓIS** (avaliação individualizada).
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
*   Avaliar **sinais e sintomas**, **foco suspeito** e necessidade de **culturas (preferencialmente antes do antimicrobiano)**.
*   Evitar culturas desnecessárias (ex: urocultura em sepse de foco respiratório).

## Passo 2: Escolha do Antimicrobiano
*   Considerar **penetração da droga no sítio infeccioso**. Diferenciar **colonização de infecção**.
*   Optar pelo **menor espectro possível**.
*   Doses neste guia são para **função renal normal** (ajustes conforme TFG em protocolo específico).
*   Preferir **ciclos curtos** em infecções não complicadas e com foco drenado. **Avaliar diariamente a possibilidade de suspensão**.

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