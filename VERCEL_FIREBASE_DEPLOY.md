# 🚀 Deploy no Vercel com Firebase (5 minutos)

## ✅ O que já está pronto

- ✅ Código atualizado no GitHub
- ✅ Firebase Storage implementado
- ✅ Build testado localmente
- ✅ Credenciais Firebase obtidas

## 🎯 Passo-a-Passo: Deploy com Firebase

### **Passo 1: Acessar Vercel Dashboard**

1. Acesse: https://vercel.com/dashboard
2. Clique no projeto **`manual-hro`**

### **Passo 2: Configurar Variáveis de Ambiente**

1. Clique em **Settings** (menu no topo)
2. Clique em **Environment Variables** (menu lateral esquerdo)
3. Você verá: `VITE_GEMINI_API_KEY` já configurada

### **Passo 3: Adicionar Variáveis Firebase**

Clique em **"Add New"** e adicione cada uma:

#### Variável 1
```
Name: VITE_FIREBASE_API_KEY
Value: AIzaSyBxLaAp_vXt6PcoSS5r5aqXn820aXsPo5w
Environments: Production, Preview, Development
```
Clique **"Save"**

#### Variável 2
```
Name: VITE_FIREBASE_AUTH_DOMAIN
Value: manual-hro.firebaseapp.com
Environments: Production, Preview, Development
```
Clique **"Save"**

#### Variável 3
```
Name: VITE_FIREBASE_PROJECT_ID
Value: manual-hro
Environments: Production, Preview, Development
```
Clique **"Save"**

#### Variável 4
```
Name: VITE_FIREBASE_STORAGE_BUCKET
Value: manual-hro.firebasestorage.app
Environments: Production, Preview, Development
```
Clique **"Save"**

#### Variável 5
```
Name: VITE_FIREBASE_MESSAGING_SENDER_ID
Value: 959269133112
Environments: Production, Preview, Development
```
Clique **"Save"**

#### Variável 6
```
Name: VITE_FIREBASE_APP_ID
Value: 1:959269133112:web:d0543598cee4fb19f57fcd
Environments: Production, Preview, Development
```
Clique **"Save"**

### **Passo 4: Fazer Redeploy**

1. Depois de adicionar todas as 6 variáveis
2. Vá para **"Deployments"** (menu no topo)
3. Clique em **"..."** do último deployment
4. Clique **"Redeploy"**
5. Aguarde ~2-3 minutos
6. Status deve mudar para ✅ **Ready**

### **Passo 5: Testar**

1. Clique no link do deployment
2. Acesse a aplicação
3. Vá para **"Importar Conteúdo"**
4. Faça upload de um PDF
5. Clique **"Visualizar no App"**
6. Clique **"Baixar PDF"** no detalhe
7. Deve fazer download! 🎉

---

## 📋 Checklist Rápido

```
Environment Variables no Vercel:
☐ VITE_FIREBASE_API_KEY
☐ VITE_FIREBASE_AUTH_DOMAIN
☐ VITE_FIREBASE_PROJECT_ID
☐ VITE_FIREBASE_STORAGE_BUCKET
☐ VITE_FIREBASE_MESSAGING_SENDER_ID
☐ VITE_FIREBASE_APP_ID

Deploy:
☐ Todas as 6 variáveis adicionadas
☐ Clicou em "Redeploy"
☐ Status mudou para "Ready"
☐ Testou upload/download
```

---

## 🆘 Se Algo Quebrar

### Build falhou?
- Verifique se TODAS as 6 variáveis foram adicionadas
- Verifique a ortografia exata dos nomes
- Clique "Redeploy" novamente

### PDF upload não funciona?
- Verifique console do navegador (F12)
- Procure por erro "Firebase not configured"
- Confirme que as variáveis estão todas presentes

### Download não funciona?
- PDFs só fazem download se `pdfUrl` está preenchida
- Reimporte um PDF para testar
- Verifique console do navegador

---

## ✨ Pronto!

Depois de completar todos os passos, sua app vai ter:
- ✅ Upload de PDFs para Firebase Storage
- ✅ Download de PDFs para usuários
- ✅ Tudo funcionando em produção

**URL da app**: https://manual-hro.vercel.app (ou seu domínio customizado)

---

**Precisar de ajuda?** Veja [FIREBASE_SETUP.md](FIREBASE_SETUP.md) para mais detalhes!
