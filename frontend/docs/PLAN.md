# PLAN — Login Kit Liberdade Solar

## Princípio de arquitetura: separar "rosto" de "cérebro"
- **Rosto** (UI + branding): compartilhado e versionado = este kit.
- **Cérebro** (contas, dados, backend): **independente por projeto**. O&M = silo isolado.

```
        LOGIN KIT (rosto, branding)  ← compartilhado
                    │
     ┌──────────────┼───────────────┐
  paraty-viz      salin           O&M
  backend A      backend B     backend C   ← cada um o SEU PocketBase, isolados
```

Por que O&M isolado: resiliência (sem ponto único de falha), segurança (menor superfície), evolução independente.

## Stack
- **HTML puro**: 1 arquivo por tela, PocketBase via CDN. Para qualquer site/PWA/WordPress.
- **React + styled-components**: 1 componente por tela + `lib/pb.js`. Para apps React/Next.
- **Backend**: PocketBase (auth nativo: authWithPassword, requestPasswordReset, confirmPasswordReset, OTP).
- **E-mail**: SMTP Resend (`smtp.resend.com:465`, TLS).

## Componentes (telas)
| # | HTML | React | Backend |
|---|------|-------|---------|
| 1 Login | `html/index.html` | `LoginForm.jsx` | authWithPassword |
| 2 Esqueci a senha | `esqueci-senha.html` | `ForgotPasswordForm.jsx` | requestPasswordReset |
| 3 Verifique o e-mail | `verifique-email.html` | `VerifyEmail.jsx` | (reenvio) |
| 4 Nova senha | `nova-senha.html` | `ResetPasswordForm.jsx` | confirmPasswordReset |
| 5 Senha alterada | `senha-alterada.html` | `PasswordResetSuccess.jsx` | — |

## Configuração por projeto
Cada projeto define só o seu backend:
- HTML: `const PB_URL = '...'` no topo de cada arquivo.
- React: `VITE_PB_URL` no `.env`.

## Decisões / trade-offs
- **Distribuição do rosto**: começar como **template** (copiar a pasta). Evoluir para **pacote npm `@liberdadesolar/login-kit`** + Web Component quando houver 3+ consumidores (marca propaga via `npm update`, dados continuam independentes).
- **Método de login**: e-mail/senha (público interno). OTP via WhatsApp fica para apps de cliente final (fora deste kit).

## Pendências de produção (deploy)
1. Verificar domínio `liberdade.solar` no Resend (SPF/DKIM) → trocar sender de `onboarding@resend.dev` para `noreply@liberdade.solar`.
2. Hospedar o frontend e trocar o link do template de reset do PocketBase para a tela `nova-senha?token=`.
3. Domínio `liberdade.solar` → Cloudflare → Opalstack (planejado).
