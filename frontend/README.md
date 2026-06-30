# Login Kit — Liberdade Solar

Telas de autenticação branded (login + recuperação de senha) para os sistemas internos da Liberdade Solar.
Backend: **PocketBase**. E-mail: **Resend**. Design: cartela oficial (ver [`BRAND.md`](BRAND.md)).

> **Filosofia:** rosto compartilhado, cérebro independente. Cada projeto usa o mesmo visual, mas aponta para o **seu próprio** backend. Ver [`docs/PLAN.md`](docs/PLAN.md).

## As 5 telas

| # | Tela | HTML | React |
|---|------|------|-------|
| 1 | Login | `html/index.html` | `react/LoginForm.jsx` |
| 2 | Esqueci a senha | `html/esqueci-senha.html` | `react/ForgotPasswordForm.jsx` |
| 3 | Verifique o e-mail | `html/verifique-email.html` | `react/VerifyEmail.jsx` |
| 4 | Nova senha | `html/nova-senha.html` | `react/ResetPasswordForm.jsx` |
| 5 | Senha alterada | `html/senha-alterada.html` | `react/PasswordResetSuccess.jsx` |

Fluxo: **login** → (esqueci) → **esqueci a senha** → e-mail → **nova senha** → **senha alterada** → login.

## Como usar

### HTML puro
1. Copie os arquivos de `html/`.
2. Em cada um, edite no topo: `const PB_URL = 'https://SEU_POCKETBASE'`.
3. Sirva: `npx serve html/`.

### React
1. Copie `react/` para `src/components/` e crie `src/lib/pb.js` com a instância PocketBase.
2. `.env`: `VITE_PB_URL=https://SEU_POCKETBASE`.
3. Roteie as telas (ex: `/login`, `/esqueci-senha`, `/nova-senha`, `/senha-alterada`).

## Backend (e-mail)
O fluxo de reset depende de SMTP no PocketBase. Já configurado com Resend (`smtp.resend.com:465`).
Para produção: verificar o domínio no Resend e apontar o template de reset para a tela `nova-senha?token=`. Ver [`docs/VERIFICATION-REPORT.md`](docs/VERIFICATION-REPORT.md).

## Docs
- [`docs/SPEC.md`](docs/SPEC.md) — o quê e por quê
- [`docs/PLAN.md`](docs/PLAN.md) — arquitetura e decisões
- [`docs/VERIFICATION-REPORT.md`](docs/VERIFICATION-REPORT.md) — status verificado
- [`BRAND.md`](BRAND.md) — cartela de cores oficial
