# Liberdade Solar — Cartela de Cores (referência oficial)

> Fonte oficial: https://www.liberdade.solar/brandbook/cartela-de-cores
> Brandbook completo: https://www.liberdade.solar/brandbook
> Tagline: **o sol nasce pra todos.**

Use este arquivo como referência de marca para qualquer projeto do ecossistema Liberdade Solar.

## Cores principais

| Cor | HEX | RGB | Pantone |
|-----|-----|-----|---------|
| 🟠 Laranja (**PRINCIPAL**) | `#F44A00` | 244, 74, 0 | Orange 021 U |
| 🟤 Areia / bege | `#ECE2CB` | 236, 226, 203 | 7527 U |
| 🔵 Azul-marinho | `#004B6D` | 0, 75, 109 | 3025 C |
| 🟡 Amarelo | `#FFE575` | 255, 229, 117 | 2003 U |

## Subtons (liberdade criativa)

| Cor | HEX |
|-----|-----|
| Laranja escuro | `#CE3703` |
| Coral / pêssego | `#FF8865` |
| Lilás claro | `#EDD3FF` |
| Verde claro | `#D6ECD7` |

## Como usar

- O **laranja `#F44A00`** é a cor principal — vital, vibrante e disruptivo.
- **Areia + azul + amarelo** equilibram o contraste entre proximidade e confiança.
- **B2C** (consumidor final): tons mais alegres e calorosos — amarelo, laranja, bege (leveza e acessibilidade).
- **B2B** (construtoras/investidores): combinações sólidas — **azul-marinho + bege** (seriedade sem perder energia).
- **Não usar preto** como cor de texto — usar o azul-marinho `#004B6D` como "tinta".
- ⚠️ Evitar apenas azul/verde **POP vibrante** (cores de concorrentes como Eletrobras/Nextron). O azul-marinho sóbrio `#004B6D` **É** cor oficial da marca.

## Tipografia

- **Sora** — fonte principal (Google Fonts). Pesos: 400, 500, 600, 700, 800.

## Tokens CSS (já aplicados na tela de login)

```css
:root {
  --ls-orange: #f44a00;       /* principal / CTA / acentos */
  --ls-orange-dark: #ce3703;  /* subton oficial (hover) */
  --ls-blue: #004b6d;         /* azul-marinho / texto / títulos */
  --ls-sand: #ece2cb;         /* areia */
  --ls-yellow: #ffe575;       /* amarelo */
  --ls-coral: #ff8865;        /* coral (subton) */
}
```

### Degradê de fundo (quente, do branding)

```css
background:
  radial-gradient(1100px 560px at 50% -8%, #ffe7c6 0%, transparent 60%),
  linear-gradient(160deg, #f7edd8 0%, #ffe9c8 52%, #ffd6b2 100%);
```
