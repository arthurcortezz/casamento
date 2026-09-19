# 💍 Site do Casamento

Site **single-page, estático e gratuito para hospedar** com: contagem regressiva, nossa história,
informações do casamento (cerimônia + recepção), local com mapa, lista de presentes (com Pix),
confirmação de presença (RSVP) e FAQ.

## Stack

- [Astro 5](https://astro.build) — gera HTML estático (quase zero JS)
- [Tailwind CSS 4](https://tailwindcss.com) — estilização

## Comandos

| Comando           | O que faz                                    |
| ----------------- | -------------------------------------------- |
| `npm install`     | Instala as dependências                       |
| `npm run dev`     | Servidor local em `http://localhost:4321`     |
| `npm run build`   | Gera o site estático em `./dist/`             |
| `npm run preview` | Serve a build local para conferir antes do deploy |

## ✏️ Onde editar o conteúdo

Tudo está em **`src/data/`** — os campos marcados com `TODO` são placeholders de exemplo:

| Arquivo         | Conteúdo                                                                 |
| --------------- | ------------------------------------------------------------------------ |
| `src/data/site.ts` | Nomes, **data/hora** (formato ISO), cidade, hashtag, RSVP, contatos    |
| `src/data/info.ts` | Nossa história, cerimônia/recepção, dress code, avisos, FAQ            |
| `src/data/venue.ts`| Salão, endereço, estacionamento, transporte, hotéis                    |
| `src/data/gifts.ts`| Lista de presentes, links das lojas, **dados do Pix**                  |

Outros pontos para personalizar:

- **Fotos/QR Code:** substitua `public/images/pix-qr.svg` (gere o QR no app do banco) e
  `public/images/og-cover.svg` (ideal: JPG ~1200×630 para compartilhamento no WhatsApp).
- **Fontes e cores:** `src/styles/global.css` (bloco `@theme`) + `<link>` no `src/layouts/Base.astro`.
- **Domínio:** `astro.config.mjs` → opção `site`.

## 📋 Checklist antes de publicar

- [ ] Nomes reais dos noivos (`site.ts`)
- [ ] Data e hora reais (`site.ts` → `weddingDateISO` e rótulos)
- [ ] Google Forms criado + link em `site.ts → rsvp.googleFormUrl`
- [ ] WhatsApp real em formato internacional (`55DD9XXXXXXXX`)
- [ ] Endereços reais da cerimônia e recepção (`info.ts` e `venue.ts`)
- [ ] Links reais dos presentes e dados do Pix (`gifts.ts`)
- [ ] QR Code Pix real salvo em `public/images/`
- [ ] Foto de capa para compartilhamento (og-image)
- [ ] Domínio real no `astro.config.mjs`

## 📮 Como criar o Google Forms (RSVP sem back-end)

1. Acesse [forms.google.com](https://forms.google.com) e crie um formulário.
2. Perguntas sugeridas: **Nome completo**, **Telefone/WhatsApp**,
   **Quantos adultos?** (número), **Quantas crianças?** (número),
   **Restrição alimentar/alergia?** (texto), **Mensagem aos noivos** (parágrafo).
3. Aba **Respostas** → clique no ícone de planilha → cria a planilha que vocês acompanham.
4. Copie o link "Enviar" e cole em `site.ts → rsvp.googleFormUrl`.

## 🚀 Deploy gratuito

### Netlify
1. Suba o projeto para um repositório Git (GitHub/GitLab).
2. Em [netlify.com](https://netlify.com) → "Add new site" → "Import an existing project".
3. Build command: `npm run build` · Publish directory: `dist`.

### Vercel
1. Suba para o GitHub e importe em [vercel.com](https://vercel.com).
2. Framework preset: **Astro** (detecta sozinho). Deploy.

Sem repositório? `npm run build` e arraste a pasta **`dist/`** para
[app.netlify.com/drop](https://app.netlify.com/drop).

### Hostinger (hPanel)

1. `npm run build` — gera a pasta `dist/` (já empacotada como `site-casamento.zip` na raiz do projeto).
2. No hPanel: **Sites → Gerenciar → File Manager** → abra a pasta `public_html`.
3. Envie o `site-casamento.zip` e use **Extrair** (botão direito). O conteúdo deve ficar
   **direto** em `public_html` (index.html, _astro/, images/...) — e não dentro de uma subpasta.
4. Apague o zip depois de extrair. Pronto: o site está no ar! 🎉
5. **Ative o SSL grátis:** hPanel → **SSL/TLS** (Let's Encrypt). Com o SSL ativo, descomente
   as 3 linhas de redirect no `.htaccess` (no `public/` do projeto e também no do servidor).

Alternativa por **FTP**: FileZilla → host `ftp.seudominio.com`, usuário/senha em
**hPanel → Files → FTP Accounts** → arraste o conteúdo de `dist/` para `public_html`.

Domínio próprio (ex.: `nomes.com.br`): registre no [Registro.br](https://registro.br) ou
[Namecheap](https://namecheap.com) e aponte para a Netlify/Vercel.
