# 🚀 Deploy no Vercel - Manual HRO

Guia passo a passo para fazer o deploy do projeto no Vercel.

## ✅ Pré-requisitos

- [ ] Conta GitHub
- [ ] Projeto no GitHub (ou criar um novo)
- [ ] Conta Vercel (gratuita em vercel.com)
- [ ] Chave API do Google Gemini

---

## 📋 Passo 1: Preparar o Repositório Git

### 1.1 Inicializar Git (se não tiver)
```bash
cd /Users/joaoperes/Downloads/manual-hro-gemini
git init
git config user.email "seu-email@example.com"
git config user.name "Seu Nome"
```

### 1.2 Adicionar arquivos ao Git
```bash
git add .
git commit -m "Initial commit: Manual HRO com bugs corrigidos"
```

### 1.3 Criar repositório no GitHub

1. Acesse [github.com/new](https://github.com/new)
2. Nome do repositório: `manual-hro-gemini`
3. Descrição: `Manual Digital do Hospital Regional do Oeste com IA`
4. Selecione: **Public** (para fácil acesso)
5. Clique **Create repository**

### 1.4 Fazer push para GitHub
```bash
git remote add origin https://github.com/SEU_USERNAME/manual-hro-gemini.git
git branch -M main
git push -u origin main
```

---

## 🔧 Passo 2: Configurar Variáveis de Ambiente no Vercel

### 2.1 Configurar no Vercel Console

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique **Add New...** → **Project**
3. Selecione seu repositório `manual-hro-gemini`
4. Clique **Import**

### 2.2 Configurar Environment Variables

Antes de fazer deploy, configure as variáveis:

1. Na página de import, desça até **Environment Variables**
2. Adicione a variável:
   ```
   VITE_GEMINI_API_KEY = sua_chave_api_gemini
   ```

### 2.3 Deploy

1. Clique **Deploy**
2. Aguarde ~2-3 minutos
3. Pronto! 🎉

---

## 🎯 Passo 3: Verificar o Deploy

Após o deploy:

### 3.1 Acessar a URL
- Vercel fornecerá uma URL como: `https://manual-hro-gemini.vercel.app`
- Clique para abrir

### 3.2 Testar as funcionalidades

```
✅ Homepage carrega
✅ Chat funciona (HRO Bot responde)
✅ Protocolos listam
✅ Busca funciona
✅ Importar PDF funciona
✅ Contatos aparecem
```

### 3.3 Verificar Console

Se houver erros:
1. Abra DevTools (F12)
2. Vá para **Console**
3. Procure por mensagens de erro
4. Verifique se `VITE_GEMINI_API_KEY` está configurado

---

## 🌐 Passo 4: Configurar Domínio Customizado (Opcional)

Se quiser um domínio próprio (ex: manual-hro.hospital.com.br):

### 4.1 Adicionar Domínio no Vercel

1. No dashboard do Vercel → Seu projeto
2. Settings → **Domains**
3. Adicione seu domínio
4. Siga as instruções para apontar o DNS

### 4.2 Configurar DNS

- Se o domínio for seu, aponte os nameservers para o Vercel
- Ou crie um registro CNAME apontando para `cname.vercel.com`

---

## 🔄 Passo 5: Deploy Automático

Após conectar ao GitHub, todo commit na `main` gera novo deploy:

```bash
# Fazer alteração no código
git add .
git commit -m "Fix: descrição da mudança"
git push origin main

# Vercel faz deploy automaticamente!
```

---

## 🔐 Passo 6: Melhorar Segurança

### 6.1 Não Fazer Push de `.env.local`

Seu `.env.local` **não deve** estar no GitHub!

```bash
# Verificar se .env.local está no .gitignore
cat .gitignore | grep env.local
```

Se não estiver, adicione:
```bash
echo ".env.local" >> .gitignore
git rm --cached .env.local
git commit -m "Remove .env.local from tracking"
git push
```

### 6.2 Usar Vercel Secrets

Para local development:
```bash
# Crie .env.local com sua chave
VITE_GEMINI_API_KEY=sua_chave_aqui
```

Para Vercel:
- Configure via dashboard (já fiz na seção 2.2)

---

## 📊 Passo 7: Monitorar o Projeto

### 7.1 Verificar Analytics no Vercel

1. Dashboard → Seu projeto → **Analytics**
2. Veja:
   - Visitantes
   - Países
   - Navegadores
   - Performance

### 7.2 Verificar Logs

1. Dashboard → Seu projeto → **Deployments**
2. Clique no deploy recente
3. Veja os logs de build

### 7.3 Alertas de Erro

Configure para receber alertas:
1. Settings → **Integrations**
2. Conecte Slack, Discord, ou Email

---

## 🚨 Troubleshooting

### "Build failed"

**Causa**: Erro ao compilar TypeScript

**Solução**:
```bash
# Local
npm run build

# Veja o erro específico
# Corrija e faça push novamente
```

### "API não funciona"

**Causa**: `VITE_GEMINI_API_KEY` não configurado

**Solução**:
1. Vercel Dashboard → Settings → Environment Variables
2. Verifique se `VITE_GEMINI_API_KEY` está lá
2. Redeploy (Redeploy now)

### "Dados desaparecem"

**Causa**: localStorage não funciona entre refreshes

**Solução**: Implementar Firebase (veja NEXT_STEPS_FIREBASE.md)

### "Chat não responde"

**Causa**: Chave API inválida ou expirada

**Solução**:
1. Verifique chave no [console.cloud.google.com](https://console.cloud.google.com)
2. Crie nova chave se necessário
3. Atualize no Vercel
4. Redeploy

---

## 📝 Passo 8: Documentação para Compartilhar

Crie um arquivo `VERCEL_SETUP.txt` para o time:

```
📱 APLICAÇÃO PUBLICADA

URL: https://manual-hro-gemini.vercel.app
Status: ✅ Online

FEATURES:
✓ Chat IA com Gemini
✓ Busca de Protocolos
✓ Importação de PDFs
✓ Lista de Contatos/Ramais
✓ Armazenamento local (localStorage)

PRÓXIMOS PASSOS:
→ Firebase para multi-usuário
→ Autenticação com login
→ Download PDF/Word

CONTATO:
Dúvidas? Veja os arquivos de documentação:
- BUGFIX_SUMMARY.md
- TESTING_GUIDE.md
- NEXT_STEPS_FIREBASE.md
```

---

## 🎯 Checklist Final

```
□ Repositório criado no GitHub
□ Variáveis configuradas no Vercel
□ Deploy executado com sucesso
□ Testar todas as funcionalidades
□ Domínio customizado (opcional)
□ Compartilhar URL com o time
□ Documentação atualizada
□ Monitorar performance
```

---

## 💡 Dicas Extras

### Analytics e SEO

1. Configure og:image no HTML
2. Adicione sitemap.xml
3. Use Google Analytics (opcional)

### Performance

1. Vercel oferece CDN automático
2. Imagens são otimizadas automaticamente
3. Build time: ~2-3 min

### Backup

1. GitHub é seu backup
2. localStorage não persiste entre dispositivos
3. Considere Firebase para múltiplos usuários

---

## 🚀 Próximas Fases (Após Firebase)

Quando implementar Firebase:
1. Authentication (login/signup)
2. Firestore (sincronização real-time)
3. Storage (PDFs originais)
4. Email notifications

---

## 📞 Suporte

Problemas com deploy?
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com
- Veja TESTING_GUIDE.md para troubleshooting local

---

**Status**: Pronto para Deploy no Vercel! 🎉

Para começar agora:
```bash
git push origin main
# Vercel detectará automaticamente e fará deploy
```
