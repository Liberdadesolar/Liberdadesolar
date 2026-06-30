# SPEC — Login Kit Liberdade Solar

## Objetivo
Um kit de telas de autenticação branded (login + recuperação de senha) reutilizável como **rosto compartilhado** nos sistemas internos da Liberdade Solar, mantendo cada sistema com **backend independente**.

## Usuários
Uso **interno/operacional** (staff e prestadores), NÃO cliente final:
- Visualização interna das usinas (`paraty.frado.com.br`)
- Projeto `salin`
- App de **O&M / manutenção** (independente e isolado)
- (clientes finais de Jabaeté são atendidos pela **Digital Grid** — fora do escopo deste kit)

## Requisitos

### Funcionais (MUST)
- MUST ter 5 telas: login, esqueci a senha, verifique o e-mail, nova senha, senha alterada.
- MUST autenticar contra PocketBase (`authWithPassword`, `requestPasswordReset`, `confirmPasswordReset`).
- MUST mostrar/ocultar senha (olho) — oculta=olho riscado, visível=olho aberto.
- MUST validar: senha mín. 8 caracteres, confirmação igual, token presente.
- MUST existir em 2 formatos: HTML puro e React (styled-components).

### Não-funcionais
- SHOULD seguir 100% o branding oficial (cores, Sora, logo+tagline) — ver `BRAND.md`.
- SHOULD ser mobile-first.
- SHOULD permitir cada projeto apontar para o **seu próprio** `PB_URL`.

### Limites (o que NÃO faz)
- NÃO é SSO / identidade central — cada projeto tem seu backend.
- NÃO atende cliente final (isso é Digital Grid).
- NÃO inclui pagamento nem WhatsApp (são camadas de cada app, fora do kit de login).

## Critério de aceite
Fluxo de recuperação funciona ponta a ponta: pedido → e-mail chega → link → nova senha → confirmação → login.
