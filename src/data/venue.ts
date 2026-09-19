/* ═══════════════════════════════════════════════════════════════
 * ✏️  EDITE: informações do local da recepção, estacionamento,
 *  transporte e hotéis próximos
 * ═══════════════════════════════════════════════════════════════ */

export const venue = {
  /** TODO: nome e endereço do salão/local da recepção */
  name: 'Salão Bela Vista',
  address: 'Av. das Palmeiras, 456 — Bairro Nobre, Belo Horizonte — MG',

  /** TODO: dicas de chegada */
  parking: 'Estacionamento gratuito no local, com manobrista e 120 vagas. TODO: ajuste os detalhes.',
  transit:
    'A 15 min do centro de carro. Uber e táxi são as melhores opções na volta — a portaria faz o chamado. TODO.',

  /** TODO: hotéis próximos com valores negociados, se houver */
  hotels: [
    {
      name: 'Hotel Central Plaza',
      distance: '2,5 km do salão',
      note: 'Conforto ★★★★ — café da manhã incluso',
      url: 'https://www.google.com/search?q=hotel+central+plaza',
    },
    {
      name: 'Pousada Vila Nova',
      distance: '4 km do salão',
      note: 'Opção econômica e charmosa',
      url: 'https://www.google.com/search?q=pousada+vila+nova',
    },
    {
      name: 'Grand Plaza Business',
      distance: '3 km do salão',
      note: 'Ideal para quem chega de viagem',
      url: 'https://www.google.com/search?q=grand+plaza+business',
    },
  ],
};
