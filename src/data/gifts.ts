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
  { min: 0, max: 100 },
  { min: 100, max: 200 },
  { min: 200, max: 500 },
  { min: 500, max: 1000 },
  { min: 1000 },
];

export interface Gift {
  name: string;
  category: string;
  price: number;
  /** Foto em public/ */
  image: string;
}

export const gifts: Gift[] = [
  { name: 'Conjunto de panelas 2 peças', category: 'Utensílios de cozinha', price: 300, image: '/images/presentes/conjunto-de-panelas-2-pecas.webp' },
  { name: 'Panela de pressão trava segurança', category: 'Utensílios de cozinha', price: 399, image: '/images/presentes/panela-de-pressao-trava-seguranca.webp' },
  { name: 'Mixer portátil', category: 'Eletroportáteis', price: 399, image: '/images/presentes/mixer-portatil.webp' },
  { name: 'Conjunto de pratos para almoço - 8 peças', category: 'Para servir', price: 499, image: '/images/presentes/conjunto-de-pratos-para-almoco-8-pecas.webp' },
  { name: 'Kit para tempeiros', category: 'Utensílios de cozinha', price: 299, image: '/images/presentes/kit-para-tempeiros.webp' },
  { name: 'Grill portátil', category: 'Eletroportáteis', price: 300, image: '/images/presentes/grill-portatil.webp' },
  { name: 'Fritadeira elétrica inox', category: 'Eletroportáteis', price: 389, image: '/images/presentes/fritadeira-eletrica-inox.webp' },
  { name: 'Mesinha de cabeceria', category: 'Móveis', price: 299, image: '/images/presentes/mesinha-de-cabeceria.webp' },
  { name: 'Televisão 50 polegadas', category: 'Eletrodomésticos', price: 1990, image: '/images/presentes/televisao-50-polegadas.webp' },
  { name: 'Cama baixa', category: 'Móveis', price: 2000, image: '/images/presentes/cama-baixa.webp' },
  { name: 'Cabideiro', category: 'Limpeza e organização', price: 299, image: '/images/presentes/cabideiro.webp' },
  { name: 'Conjunto de travesseiros', category: 'Cama, mesa e banho', price: 499, image: '/images/presentes/conjunto-de-travesseiros.webp' },
  { name: 'Jogo de lençol', category: 'Cama, mesa e banho', price: 300, image: '/images/presentes/jogo-de-lencol.webp' },
  { name: 'Conjunto de mantas e cobertores', category: 'Cama, mesa e banho', price: 300, image: '/images/presentes/conjunto-de-mantas-e-cobertores.webp' },
  { name: 'Kit Churrasco', category: 'Utensílios de cozinha', price: 399, image: '/images/presentes/kit-churrasco.webp' },
  { name: 'Máquina de lavar roupa 12 kgs', category: 'Eletrodomésticos', price: 1800, image: '/images/presentes/maquina-de-lavar-roupa-12-kgs.webp' },
  { name: 'Airfryer', category: 'Eletroportáteis', price: 800, image: '/images/presentes/airfryer.webp' },
  { name: 'Cota 6 - Geladeira', category: 'Eletrodomésticos', price: 300, image: '/images/presentes/cota-6-geladeira.webp' },
  { name: 'Coifa de parede', category: 'Eletrodomésticos', price: 600, image: '/images/presentes/coifa-de-parede.webp' },
  { name: 'Aspirador de pó', category: 'Eletroportáteis', price: 499, image: '/images/presentes/aspirador-de-po.webp' },
  { name: 'Microondas 32 litros', category: 'Eletrodomésticos', price: 699, image: '/images/presentes/microondas-32-litros.webp' },
  { name: 'Liquidificador', category: 'Eletroportáteis', price: 350, image: '/images/presentes/liquidificador.webp' },
  { name: 'Forno elétrico grande', category: 'Eletrodomésticos', price: 499, image: '/images/presentes/forno-eletrico-grande.webp' },
  { name: 'Cota 1 - Geladeira', category: 'Eletrodomésticos', price: 300, image: '/images/presentes/cota-1-geladeira.webp' },
  { name: 'Cota 2 - Geladeira', category: 'Eletrodomésticos', price: 300, image: '/images/presentes/cota-2-geladeira.webp' },
  { name: 'Batedeira planetária', category: 'Eletroportáteis', price: 1999, image: '/images/presentes/batedeira-planetaria.webp' },
  { name: 'Guarda-Roupas', category: 'Móveis', price: 1000, image: '/images/presentes/guarda-roupas.webp' },
  { name: 'Kit completo para foundue', category: 'Utensílios de cozinha', price: 300, image: '/images/presentes/kit-completo-para-foundue.webp' },
  { name: 'Filtro de agua brastemp', category: 'Eletroportáteis', price: 500, image: '/images/presentes/filtro-de-agua-brastemp.webp' },
  { name: 'Cota 3 - Geladeira', category: 'Eletrodomésticos', price: 300, image: '/images/presentes/cota-3-geladeira.webp' },
  { name: 'Cota 5 - Geladeira', category: 'Eletrodomésticos', price: 300, image: '/images/presentes/cota-5-geladeira.webp' },
  { name: 'Cooktop', category: 'Eletrodomésticos', price: 1599, image: '/images/presentes/cooktop.webp' },
  { name: 'Cafeteira elétrica luxo', category: 'Eletrodomésticos', price: 340, image: '/images/presentes/cafeteira-eletrica-luxo.webp' },
  { name: 'Varal compacto', category: 'Limpeza e organização', price: 300, image: '/images/presentes/varal-compacto.webp' },
  { name: 'Cota 4 - Geladeira', category: 'Eletrodomésticos', price: 300, image: '/images/presentes/cota-4-geladeira.webp' },
];
