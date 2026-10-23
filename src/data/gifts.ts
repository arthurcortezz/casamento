/* ═══════════════════════════════════════════════════════════════
 * ✏️  EDITE: lista de presentes + dados do Pix
 * ═══════════════════════════════════════════════════════════════ */

export const giftsIntro =
  'Sua presença é o nosso maior presente! Se quiser nos mimar, ficamos felizes com qualquer um destes mimos. 🎁';

export const pix = {
  key: '82998072790',
  keyType: 'Telefone',
  qrKey: '+5582998072790',
  holder: 'Arthur de Omena Cortez',
  bank: 'Banco — Mercado Pago',
  city: 'Maceió',
};

/** Cartão de crédito com o valor total da sacola, via link de checkout da InfinitePay (sem back-end) */
export const card = {
  // TODO: sua InfiniteTag, sem o "$". Vazio = esconde a opção de cartão.
  // Precisa ativar o "Checkout externo" em app.infinitepay.io → Configurações.
  infinitePayHandle: 'arthur_de_omena_cortez',
};

/** Faixas do filtro de preço (em reais); `max` ausente = "Mais de" */
export const priceRanges: { min: number; max?: number }[] = [
  { min: 0, max: 30 },
  { min: 30, max: 60 },
  { min: 60 },
];

export interface Gift {
  name: string;
  category: string;
  price: number;
  /** Foto em public/ */
  image: string;
}

export const gifts: Gift[] = [
  { name: 'Escorredor de macarrão', category: 'Utensílios de cozinha', price: 25, image: '/images/presentes/escorredor-de-macarrao.webp' },
  { name: 'Travessa de vidro', category: 'Utensílios de cozinha', price: 25, image: '/images/presentes/travessa-de-vidro.webp' },
  { name: 'Conjunto para Sobremesa', category: 'Copos e taças', price: 25, image: '/images/presentes/conjunto-para-sobremesa.webp' },
  { name: 'Conjunto de copo de vidro', category: 'Copos e taças', price: 25, image: '/images/presentes/conjunto-de-copo-de-vidro.webp' },
  { name: 'Forma de bolo', category: 'Utensílios de cozinha', price: 25, image: '/images/presentes/forma-de-bolo.webp' },
  { name: 'Ajuda pra festa de casamento sair', category: 'Presentes para o seu casamento', price: 25, image: '/images/presentes/ajuda-pra-festa-de-casamento-sair.webp' },
  { name: 'Tudo o que eu tenho na conta', category: 'Presentes Divertidos', price: 25, image: '/images/presentes/tudo-o-que-eu-tenho-na-conta.webp' },
  { name: 'Netflix pro casal no mês', category: 'Maratonistas de Netflix', price: 25, image: '/images/presentes/netflix-pro-casal-no-mes.webp' },
  { name: 'Mini triturador de alho', category: 'Personalizados', price: 25, image: '/images/presentes/mini-triturador-de-alho.webp' },
  { name: 'Tampão de ouvido pra noiva enquanto noivo ronca', category: 'Presentes Divertidos', price: 30, image: '/images/presentes/tampao-de-ouvido-pra-noiva-enquanto-noivo-ronca.webp' },
  { name: 'Forma de Pizza - Tramontina', category: 'Utensílios de cozinha', price: 35, image: '/images/presentes/forma-de-pizza-tramontina.webp' },
  { name: 'Fruteira', category: 'Mesa posta', price: 50, image: '/images/presentes/fruteira.webp' },
  { name: '1º almoço dos noivos', category: 'Presentes Divertidos', price: 50, image: '/images/presentes/1-almoco-dos-noivos.jpeg' },
  { name: 'Lua de mel na praia', category: 'Lua de Mel', price: 50, image: '/images/presentes/lua-de-mel-na-praia.webp' },
  { name: 'Operação lua de mel', category: 'Lua de Mel', price: 90, image: '/images/presentes/operacao-lua-de-mel.jpeg' },
  { name: 'Noite de Pizza na Lua de Mel', category: 'Lua de Mel', price: 93.14, image: '/images/presentes/noite-de-pizza-na-lua-de-mel.webp' },
  { name: 'Conjunto de porta mantimentos', category: 'Limpeza e organização', price: 99, image: '/images/presentes/conjunto-de-porta-mantimentos.webp' },
  { name: 'Jogo de toalhas', category: 'Cama, mesa e banho', price: 99, image: '/images/presentes/jogo-de-toalhas.webp' },
  { name: 'PCS 24', category: 'Personalizados', price: 99.90, image: '/images/presentes/pcs-24.webp' },
  { name: 'Lista de supermercado pronta', category: 'Presentes Divertidos', price: 100, image: '/images/presentes/lista-de-supermercado-pronta.webp' },
];
