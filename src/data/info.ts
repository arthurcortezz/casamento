/* ═══════════════════════════════════════════════════════════════
 * ✏️  EDITE: nossa história, cerimônia, recepção, dress code,
 *  avisos e perguntas frequentes (FAQ)
 * ═══════════════════════════════════════════════════════════════ */

/** Linha do tempo "Nossa História" — Arthur & Emanuela 💛 */
export const story = [
  {
    /** TODO: confira o ano em que vocês se conheceram */
    year: '2020',
    icon: '🎬',
    title: 'O primeiro emprego, o primeiro olhar',
    text: 'Tudo começou no cinema do shopping, no nosso primeiro emprego. Entre uma sessão e outra, o clima rolou de cara — e foi ali, no meio das pipocas e dos ingressos, que a nossa história começou.',
  },
  {
    /** TODO: ajuste o período e acrescentem as memórias favoritas dessa fase */
    year: '2020 – 2025',
    icon: '🍿',
    title: 'O namoro escondido',
    text: 'Foram anos de sessões secretas e olhares cúmplices entre uma sala e outra: namoro escondido no cinema — e fora dele também. Do que era sigilo nasceu um amor que já soma 6 anos.',
  },
  {
    /** TODO: confira o ano do pedido e conte como foi */
    year: '2025',
    icon: '💍',
    title: 'O pedido',
    text: 'Seis anos depois daquele primeiro olhar, veio o pedido — e o "sim" que virou noivado. Um ano de noivado depois, falta pouco para o dia mais esperado: o nosso casamento!',
  },
];

/** Cerimônia e recepção (cada uma com endereço próprio) */
export const events = [
  {
    icon: '⛪',
    name: 'Cerimônia',
    time: '16h',
    /** TODO: confirme o horário */
    dateLabel: 'Domingo, 10/01/2027',
    place: 'TODO: nome da igreja/espaço da cerimônia',
    address: 'TODO: endereço completo da cerimônia',
    note: 'Chegue com pelo menos 30 minutos de antecedência.',
  },
  {
    icon: '🥂',
    name: 'Recepção',
    time: '19h',
    /** TODO: confirme o horário */
    dateLabel: 'Domingo, 10/01/2027',
    place: 'TODO: nome do salão/espaço da recepção',
    address: 'TODO: endereço completo da recepção',
    note: 'TODO: descrevam a recepção — jantar, brinde, festa...',
  },
];

export const dressCode = {
  title: 'Traje Passeio Completo',
  description:
    'TODO: descreva o dress code com suas palavras — ex.: "queremos ver vocês elegantes e confortáveis para celebrar com a gente".',
  suggestions: ['Vestidos longos ou midis', 'Ternos ou smoking', 'Sapatos fechados'],
  avoid: [
    'Branco, off-white e nude (reservados à noiva)',
    'Jeans, regatas e tênis esportivo',
    'Estampas muito chamativas',
  ],
};

/** Avisos em destaque na seção de informações */
export const notices = [
  {
    icon: '👶',
    text: 'A recepção será apenas para adultos. Bebês de colo são bem-vindos na cerimônia. TODO: ajuste à sua realidade.',
  },
  {
    icon: '⏰',
    text: 'Pontualidade: a cerimônia começará pontualmente às 16h.',
  },
  {
    icon: '💐',
    text: 'Sem necessidade de levar flores ou presentes no dia — seu carinho já é presente!',
  },
];

/** Perguntas frequentes dos convidados */
export const faq = [
  {
    q: 'Posso levar crianças?',
    a: 'TODO: explique sua regra. Ex.: "A recepção é somente para adultos; a cerimônia está aberta a toda a família."',
  },
  {
    q: 'Posso levar acompanhante?',
    a: 'TODO: ex.: "Os convites são nominais. Confirme no formulário o número exato de pessoas que virão com você."',
  },
  {
    q: 'Haverá estacionamento?',
    a: 'Sim! O salão conta com estacionamento gratuito. Mais detalhes na seção Local.',
  },
  {
    q: 'Até quando posso confirmar presença?',
    a: 'Até 10/12/2026, pelo formulário online ou pelo WhatsApp.',
  },
  {
    q: 'Como funciona a lista de presentes?',
    a: 'Escolha um item na lista e presenteie direto na loja pelo link, ou use nosso Pix. Sua presença já é o nosso maior presente! 🎁',
  },
  {
    q: 'Onde posso me hospedar?',
    a: 'Selecionamos hotéis com boa localização e valores para todos os bolsos — veja a seção Local.',
  },
];
