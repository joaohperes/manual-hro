# ⚡ Deploy Rápido no Vercel (5 minutos)

## 🚀 Resumo dos Passos

```
1. GitHub: Criar repo + fazer push
2. Vercel: Importar projeto
3. Configurar: Variável VITE_GEMINI_API_KEY
4. Deploy: Clicar botão
5. Pronto!
```

---

## 📝 Passo 1: Git & GitHub (2 min)

### 1.1 Inicializar e fazer commit
```bash
cd /Users/joaoperes/Downloads/manual-hro-gemini

# Inicializar git (se não estiver)
git init
git add .
git commit -m "Deploy: Manual HRO corrigido"
```

### 1.2 Criar repo no GitHub
- Acesse: https://github.com/new
- Nome: `manual-hro-gemini`
- Selecione: **Public**
- Crie o repositório

### 1.3 Fazer push
```bash
git remote add origin https://github.com/SEU_USERNAME/manual-hro-gemini.git
git branch -M main
git push -u origin main
```

---

## 🔧 Passo 2: Vercel (2 min)

### 2.1 Conectar Vercel

1. Acesse: https://vercel.com (crie conta se não tiver)
2. Clique: **Add New...** → **Project**
3. Selecione: `manual-hro-gemini` (do seu GitHub)
4. Clique: **Import**

### 2.2 Configurar Variáveis

Na tela de importação:

```
Environment Variables:
VITE_GEMINI_API_KEY = sua_chave_api_aqui
```

(Copie sua chave do Google Cloud Console)

### 2.3 Deploy

Clique: **Deploy**

Aguarde ~2-3 minutos... ✨

---

## ✅ Passo 3: Verificar

Após deploy:

1. Vercel mostra URL: `https://manual-hro-gemini.vercel.app`
2. Clique para abrir
3. Teste:
   - [ ] Homepage carrega
   - [ ] Chat funciona
   - [ ] Busca funciona
   - [ ] Importar PDF funciona

---

## 🔄 Passo 4: Atualizações Futuras

Após primeira vez, qualquer push faz deploy automático:

```bash
# Fazer alteração
git add .
git commit -m "Fix: descrição"
git push origin main

# Vercel redeploy automaticamente! ✨
```

---

## 🆘 Se Algo Quebrar

### Build falhou?
```bash
# Testar local
npm install
npm run build

# Ver erro específico
npm run dev
```

### API não funciona?
1. Vercel Dashboard → Settings → Environment Variables
2. Verifique: `VITE_GEMINI_API_KEY` está lá?
3. Redeploy: Clique "Redeploy Now"

### Chat não responde?
- Chave API pode estar inválida
- Crie nova em: console.cloud.google.com
- Atualize no Vercel

---

## 📞 Pronto!

Sua aplicação está ONLINE! 🎉

URL para compartilhar:
```
https://manual-hro-gemini.vercel.app
```

---

## Próximos Passos (Opcional)

- [ ] Domínio customizado (ex: manual.hospital.com.br)
- [ ] Firebase para multi-usuário (veja NEXT_STEPS_FIREBASE.md)
- [ ] Analytics
- [ ] Backup automático

---

**Dúvidas?** Veja `DEPLOY_VERCEL.md` para guia completo.
