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

export interface Gift {
  icon: string;
  name: string;
  description: string;
  price: number;
  mercadoPagoUrl?: string;
}

export const gifts: Gift[] = [
  {
    icon: '🥂',
    name: 'Jogo de taças de cristal',
    description: 'Para brindar os primeiros (e todos os) anos juntos.',
    price: 189,
    mercadoPagoUrl: 'https://mpago.la/2nShNo9',
  },
  {
    icon: '🍳',
    name: 'Jogo de panelas',
    description: 'A primeira receita de casados merece um bom time de panelas.',
    price: 349,
    mercadoPagoUrl: 'https://mpago.la/1CdCcHV',
  },
  {
    icon: '☕',
    name: 'Cafeteira',
    description: 'Porque bom dia começa com café.',
    price: 259,
    mercadoPagoUrl: 'https://mpago.la/2iGY85B',
  },
  {
    icon: '🛏️',
    name: 'Jogo de cama king',
    description: '600 fios para um sono tranquilo.',
    price: 299,
    mercadoPagoUrl: 'https://mpago.la/2R5ZAdj',
  },
  {
    icon: '🧺',
    name: 'Jogo de toalhas',
    description: 'Para o banho relaxante de domingo.',
    price: 159,
    mercadoPagoUrl: 'https://mpago.la/1mZVpJR',
  },
  {
    icon: '✈️',
    name: 'Cota lua de mel — Jantar em Paris',
    description: 'Uma noite inesquecível na Cidade Luz.',
    price: 300,
    mercadoPagoUrl: 'https://mpago.la/1uEbtuv',
  },
  {
    icon: '🗼',
    name: 'Cota lua de mel — Passeio',
    description: 'City tour e cruzeiro no Sena.',
    price: 250,
    mercadoPagoUrl: 'https://mpago.la/2tg2Mhh',
  },
  {
    icon: '🏝️',
    name: 'Cota lua de mel — Diária na praia',
    description: 'Para esticar a viagem e descansar.',
    price: 400,
    mercadoPagoUrl: 'https://mpago.la/1RBcy3r',
  },
];
