/* ═══════════════════════════════════════════════════════════════
 * ✏️  EDITE: lista de presentes + dados do Pix
 * ═══════════════════════════════════════════════════════════════ */

export const giftsIntro =
  'Sua presença é o nosso maior presente! Se quiser nos mimar, ficamos felizes com qualquer um destes mimos. 🎁';

export const pix = {
  /** TODO: dados reais do Pix dos noivos */
  key: 'mariaejoao@email.com',
  keyType: 'E-mail',
  holder: 'Arthur e Emanuela',
  bank: 'Banco — TODO',
  city: 'Belo Horizonte',
  /**
   * TODO: gere o QR Code Pix no app do seu banco (ou site do seu banco)
   * e salve como public/images/pix-qr.png — depois troque a extensão abaixo.
   */
  qrImage: '/images/pix-qr.svg',
};

export interface Gift {
  icon: string;
  name: string;
  description: string;
  price: string;
  /** Link direto do produto na loja (Magalu, Amazon, Havan...) */
  url: string;
}

/** ✏️ EDITE: itens da lista — misture presentes de casa e cotas de lua de mel */
export const gifts: Gift[] = [
  {
    icon: '🥂',
    name: 'Jogo de taças de cristal',
    description: 'Para brindar os primeiros (e todos os) anos juntos.',
    price: 'R$ 189',
    url: 'https://www.magazineluiza.com.br/TODO-link-do-produto',
  },
  {
    icon: '🍳',
    name: 'Jogo de panelas',
    description: 'A primeira receita de casados merece um bom time de panelas.',
    price: 'R$ 349',
    url: 'https://www.magazineluiza.com.br/TODO-link-do-produto',
  },
  {
    icon: '☕',
    name: 'Cafeteira',
    description: 'Porque bom dia começa com café.',
    price: 'R$ 259',
    url: 'https://www.amazon.com.br/TODO-link-do-produto',
  },
  {
    icon: '🛏️',
    name: 'Jogo de cama king',
    description: '600 fios para um sono tranquilo.',
    price: 'R$ 299',
    url: 'https://www.amazon.com.br/TODO-link-do-produto',
  },
  {
    icon: '🧺',
    name: 'Jogo de toalhas',
    description: 'Para o banho relaxante de domingo.',
    price: 'R$ 159',
    url: 'https://www.havan.com.br/TODO-link-do-produto',
  },
  {
    icon: '✈️',
    name: 'Cota lua de mel — Jantar em Paris',
    description: 'Uma noite inesquecível na Cidade Luz.',
    price: 'R$ 300',
    url: 'TODO-link-ou-pix',
  },
  {
    icon: '🗼',
    name: 'Cota lua de mel — Passeio',
    description: 'City tour e cruzeiro no Sena.',
    price: 'R$ 250',
    url: 'TODO-link-ou-pix',
  },
  {
    icon: '🏝️',
    name: 'Cota lua de mel — Diária na praia',
    description: 'Para esticar a viagem e descansar.',
    price: 'R$ 400',
    url: 'TODO-link-ou-pix',
  },
];
