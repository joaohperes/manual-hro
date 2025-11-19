# 🔥 Configuração do Firebase Storage

## 📋 O que foi implementado

✅ **Upload de PDFs**: PDFs originais são enviados para Firebase Storage quando um novo protocolo é importado
✅ **Download de PDFs**: Usuários podem baixar protocolos/normativas na íntegra via botão "Baixar PDF"
✅ **Metadados**: Armazena nome, tamanho e URL de cada arquivo
✅ **Fallback**: Se Firebase não configurado, app continua funcionando sem download de PDFs

---

## 🚀 Como Configurar Firebase

### Passo 1: Criar Projeto Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com)
2. Clique **"Criar Projeto"**
3. Nome: `manual-hro` (ou outro nome)
4. Desabilite Google Analytics (opcional)
5. Clique **"Criar Projeto"**

### Passo 2: Ativar Cloud Storage

1. No Firebase Console, acesse **"Armazenamento"** (no menu lateral)
2. Clique **"Iniciar"**
3. Modo de segurança: Escolha **"Iniciar no modo de testes"** (para desenvolvimento)
4. Localização: Deixe padrão ou escolha a mais próxima do Brasil
5. Clique **"Concluído"**

### Passo 3: Obter Credenciais Firebase

1. Acesse **"Configurações do Projeto"** (ícone de engrenagem → Projeto)
2. Aba **"Geral"**
3. Role até **"Seus aplicativos"** → **"Web"**
4. Clique no ícone de código `</>`
5. Copie o objeto `firebaseConfig`

Exemplo:
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyD...",
  authDomain: "manual-hro.firebaseapp.com",
  projectId: "manual-hro",
  storageBucket: "manual-hro.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Passo 4: Configurar Variáveis de Ambiente

#### No Desenvolvimento (.env.local)

```env
VITE_FIREBASE_API_KEY=AIzaSyD...
VITE_FIREBASE_AUTH_DOMAIN=manual-hro.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=manual-hro
VITE_FIREBASE_STORAGE_BUCKET=manual-hro.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

#### No Vercel (Production)

1. Acesse seu projeto no [Vercel Dashboard](https://vercel.com/dashboard)
2. **Settings** → **Environment Variables**
3. Adicione cada variável:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
4. Clique **"Save"**
5. Clique **"Redeploy"** para aplicar as mudanças

### Passo 5: Testar Localmente

```bash
# Instalar dependências (se não feito ainda)
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse: http://localhost:5173

1. Vá para **"Importar Conteúdo"**
2. Faça upload de um PDF
3. Clique **"Visualizar no App"**
4. No detalhe do protocolo, clique **"Baixar PDF"**
5. Arquivo deve fazer download

---

## 🔐 Segurança (Importante!)

### Regras Padrão (Desenvolvimiento)

Modo de testes permite qualquer pessoa fazer upload/download. Para produção:

1. Firebase Console → **"Armazenamento"** → **"Regras"**
2. Substitua pelas regras de produção:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /protocols/{allPaths=**} {
      // Apenas leitura pública
      allow read: if true;
      // Somente uploads autenticados (adicionar autenticação depois)
      allow write: if false;
    }
  }
}
```

3. Clique **"Publicar"**

---

## 📂 Estrutura de Armazenamento

```
protocols/
├── protocolo-id_1234567890.pdf
├── normativa-uso-uniforme_1234567890.pdf
└── ...
```

---

## 🐛 Troubleshooting

### "Firebase not configured" - PDFs não fazem upload

**Causa**: Variáveis de ambiente não configuradas

**Solução**:
```bash
# Verificar .env.local
cat .env.local

# Deve conter todas as 6 variáveis VITE_FIREBASE_*
```

### "File upload failed" no console

**Causa**: Credenciais inválidas ou Cloud Storage não ativado

**Solução**:
1. Verifique Firebase Console → Armazenamento (está ativado?)
2. Teste credenciais novamente
3. Verifique regras de segurança (modo de testes vs produção)

### PDFs não fazem download

**Causa**: URL expirada ou bucket inacessível

**Solução**:
1. Reimporte o protocolo (gera nova URL)
2. Verifique console do navegador (F12) para erro específico

---

## 📊 Plano Futuro

- [ ] **Autenticação**: Permitir apenas usuários autenticados
- [ ] **Permissões Granulares**: Alguns protocolos privados, outros públicos
- [ ] **Versionamento**: Histórico de versões de cada protocolo
- [ ] **Backup Automático**: Sincronizar com Cloud Storage
- [ ] **Analytics**: Rastrear downloads/visualizações

---

## 📞 Próximos Passos

1. ✅ Configurar Firebase Storage
2. ✅ Testar upload/download local
3. ✅ Configurar variáveis em Vercel
4. ✅ Fazer deploy
5. ✅ Testar em produção

**Status**: Aguardando configuração do Firebase para ativar upload/download! 🚀

---

**Documentação**: [Firebase Storage Docs](https://firebase.google.com/docs/storage)
