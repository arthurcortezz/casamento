# 💍 Site do Casamento

Site **single-page, estático e gratuito para hospedar** com: contagem regressiva, nossa história,
informações do casamento (cerimônia + recepção), local com mapa, lista de presentes (sacola + Pix/cartão),
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
| `src/data/venue.ts`| Local, endereço, transporte, hotéis                                    |
| `src/data/gifts.ts`| Lista de presentes (foto, categoria, valor), faixas de preço, **Pix**, InfiniteTag do cartão |

Outros pontos para personalizar:

- **Foto de capa:** substitua `public/images/og-cover.svg` (ideal: JPG ~1200×630 para compartilhamento no WhatsApp).
- **Fontes e cores:** `src/styles/global.css` (bloco `@theme`) + `<link>` no `src/layouts/Base.astro`.
- **Domínio:** `astro.config.mjs` → opção `site`.

## 📋 Checklist antes de publicar

- [ ] Nomes reais dos noivos (`site.ts`)
- [ ] Data e hora reais (`site.ts` → `weddingDateISO` e rótulos)
- [ ] Google Forms criado + link em `site.ts → rsvp.googleFormUrl`
- [ ] WhatsApp real em formato internacional (`55DD9XXXXXXXX`)
- [x] Horário da festa: 16h30 (não haverá cerimônia)
- [ ] Valores dos presentes e dados do Pix (`gifts.ts`) — teste um Pix de verdade antes de divulgar
- [ ] Cartão: conta InfinitePay com "Checkout externo" ativo + InfiniteTag em `gifts.ts → card.infinitePayHandle`
- [ ] Foto de capa para compartilhamento (og-image)
- [x] Google Forms das mensagens dos presentes + IDs em `site.ts → giftMessages`
- [ ] Domínio real no `astro.config.mjs`

## 📮 Como criar o Google Forms (RSVP sem back-end)

1. Acesse [forms.google.com](https://forms.google.com) e crie um formulário.
2. Perguntas sugeridas: **Nome completo**, **Telefone/WhatsApp**,
   **Quantos adultos?** (número), **Quantas crianças?** (número),
   **Restrição alimentar/alergia?** (texto), **Mensagem aos noivos** (parágrafo).
3. Aba **Respostas** → clique no ícone de planilha → cria a planilha que vocês acompanham.
4. Copie o link "Enviar" e cole em `site.ts → rsvp.googleFormUrl`.

## 🎁 Lista de presentes com sacola (sem back-end)

Os presentes ficam em `gifts.ts → gifts` (nome, categoria, valor e foto em `public/images/presentes/`).
Na página o convidado filtra por **categoria** e **faixa de preço** (`priceRanges`), ordena por preço
e clica em **Presentear** para colocar na **sacola** (dá pra aumentar a quantidade). A sacola fica salva
no navegador dele. Ao finalizar:

1. **Itens** → confere os presentes e o total.
2. **Quem está presenteando?** → nome + mensagem (opcional), enviados para o Google Forms.
3. **Pagamento** do **total da sacola**, por Pix ou cartão.

Cada compra ganha um código `SITE...` que aparece na planilha, no Pix (txid) e na InfinitePay — use-o
para cruzar mensagem e pagamento.

### 💌 Planilha com nome, mensagem e presentes

1. Crie um formulário com três perguntas de **resposta curta/parágrafo**: **Nome**, **Mensagem** e
   **Presente**. Não marque nenhuma como obrigatória. Em **Configurações**, deixe *desmarcado*
   "Coletar e-mails" e "Limitar a 1 resposta", e não restrinja à organização (exigem login).
2. Menu **⋮ → Gerar link pré-preenchido**, preencha qualquer coisa nos três campos e copie o link:
   `https://docs.google.com/forms/d/e/<ID>/viewform?usp=pp_url&entry.111=a&entry.222=b&entry.333=c`
3. Em `site.ts → giftMessages`, cole `<ID>` em `googleFormId` e os `entry.XXXX` em
   `nameEntry`, `messageEntry` e `giftEntry`.

> A resposta registra a **intenção** de presentear (é enviada antes do pagamento) — confira o
> pagamento no banco/InfinitePay. O navegador não consegue ler a resposta do Google (CORS), então,
> se os IDs estiverem errados, nada é gravado e o site não percebe: faça um teste depois de configurar.

### 💳 Pix e cartão

- **Pix:** QR Code e "Pix copia e cola" com o **valor total** da sacola, gerados no navegador
  (padrão BR Code do Banco Central) a partir de `pix.qrKey`, `pix.holder` e `pix.city`.
  O dinheiro cai direto na conta da chave.
- **Cartão de crédito:** o site cria um link de checkout da **InfinitePay** com os presentes e o total
  (`POST https://api.checkout.infinitepay.io/links`, que só pede a InfiniteTag — nada secreto fica no
  site) e abre numa janela por cima do site (no celular, em nova aba). Para ativar:
  1. Tenha uma conta InfinitePay e ative **Checkout externo** em
     [app.infinitepay.io](https://app.infinitepay.io/external-checkout#configuracoes?enabled=true).
  2. Coloque sua InfiniteTag (sem o `$`) em `gifts.ts → card.infinitePayHandle`.
     Vazio = o site mostra só o Pix.
  3. Parcelamento: o convidado escolhe em até **12x** na tela da InfinitePay. Se quiser repassar os
     juros do parcelamento para quem paga, ative essa opção nas configurações da InfinitePay.

> **Por que não Mercado Pago?** Para cobrar um valor que muda (o total da sacola), o Mercado Pago
> exige criar a cobrança com o *Access Token*, que é secreto e só pode ficar num servidor.

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
