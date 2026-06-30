# Login Template — Liberdade Solar

Template de tela de login com autenticação PocketBase integrada.  
Design: [Uiverse.io by akshat-patel28](https://uiverse.io/akshat-patel28/rare-cobra-61)

Disponível em duas versões: **HTML puro** e **React + Vite**.

---

## Versão HTML (`html/`)

Arquivo único, zero dependências. Ideal para projetos simples ou integração avulsa.

### Como usar

1. Copie `html/index.html` para o seu projeto
2. Edite as duas variáveis no topo do arquivo:
   ```js
   const PB_URL = 'https://seu-pocketbase.exemplo.com';
   const REDIRECT_URL = '/dashboard';
   ```
3. Abra no browser:
   ```bash
   npx serve .
   # acesse http://localhost:3000
   ```

---

## Versão React (`react/`)

React 18 + Vite + styled-components + PocketBase SDK.  
Ideal para projetos que já usam React.

### Como usar

1. Copie a pasta `react/` para o seu projeto
2. Copie `.env.example` para `.env` e configure:
   ```
   VITE_PB_URL=https://seu-pocketbase.exemplo.com
   VITE_REDIRECT_URL=/dashboard
   ```
3. Instale e rode:
   ```bash
   npm install
   npm run dev
   ```

### Estrutura
```
react/
├── src/
│   ├── lib/pb.js            ← instância PocketBase (edite aqui a URL)
│   ├── components/
│   │   └── LoginForm.jsx    ← componente principal com auth
│   ├── App.jsx
│   └── main.jsx
├── .env.example             ← variáveis de ambiente
└── package.json
```

---

## Autenticação PocketBase

Ambas as versões usam `pb.collection('users').authWithPassword(email, password)`.

- Token salvo automaticamente no `localStorage` pelo SDK
- Para checar se o usuário está logado: `pb.authStore.isValid`
- Para logout: `pb.authStore.clear()`

O nome da coleção (`users`) pode ser alterado conforme o schema do seu PocketBase.
