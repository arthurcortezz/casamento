/* ═══════════════════════════════════════════════════════════════
 * ✏️  EDITE: nossa história, cerimônia, recepção, dress code,
 *  avisos e perguntas frequentes (FAQ)
 * ═══════════════════════════════════════════════════════════════ */

/** Linha do tempo "Nossa História" — Arthur & Emanuela 💛 */
export const story = [
  {
    year: '2019',
    icon: '🎬',
    title: 'O primeiro emprego, o primeiro olhar',
    text: 'Tudo começou no cinema do shopping, no nosso primeiro emprego. Entre uma sessão e outra, o clima rolou de cara — e foi ali, no meio das pipocas e dos ingressos, que a nossa história começou.',
  },
  {
    year: '2019 – 2020',
    icon: '🤫',
    title: 'O namoro escondido',
    text: 'Foram meses de sessões secretas e olhares cúmplices entre uma sala e outra: namoro escondido no cinema — e fora dele também. Até que, em novembro de 2019, o segredo virou oficial: começamos a namorar!',
  },
  {
    year: '05/2025',
    icon: '💍',
    title: 'O pedido',
    text: 'Estava tudo planejado: pousada na praia do Patacho, jantar romântico e o pedido no rooftop do restaurante. Mas a chuva e o vento mudaram os planos. Depois do jantar, ali mesmo na pousada, veio a pergunta — e, depois de muitas lágrimas de alegria, o "sim". Nem a chuva apagou esse momento: foi perfeito do jeito que aconteceu. 💛',
  },
  {
    year: '10/01/2027',
    icon: '🥂',
    title: 'O grande dia',
    text: 'O próximo capítulo: o nosso casamento! A festa será no Recanto Giardino, em Maceió — e nada disso estaria completo sem vocês ali para celebrar com a gente. 💛',
  },
];

/** O grande dia: sem cerimônia — a festa é o evento! (layout se adapta a 1 card) */
export const events = [
  {
    icon: '🥂',
    name: 'Recepção',
    time: '16h30',
    dateLabel: 'Domingo, 10/01/2027',
    place: 'Recanto Giardino',
    address: 'R. Silvio Sandes Torres Júnior, 153 - A — Barro Duro, Maceió — AL, 57045-260',
    note: 'Depois do "sim", uma tarde para celebrar, agradecer e brindar ao que vem pela frente. 💛',
  },
];

export const dressCode = {
  /** ✏️ Ajuste livremente — textos pensados para o estilo do casal */
  title: 'Elegante, sem formalidade',
  description:
    'Queremos vê-los bonitos e à vontade para celebrar com a gente. Não é necessário traje de gala: capriche no estilo e no conforto — tem festa (e muita dança) pela frente!',

  female: {
    icon: '👗',
    title: 'Traje feminino',
    items: [
      'Vestidos, macacões ou conjuntos são ótimas opções',
      'Não é necessário vestido de festa',
    ],
    tip: 'Escolha peças em que se sinta linda e confortável para dançar a noite toda.',
  },
  male: {
    icon: '👔',
    title: 'Traje masculino',
    items: ['Calça e camisa', 'Não é necessário terno nem gravata'],
    tip: 'Blazer é opcional — para quem quiser caprichar, fica elegante do mesmo jeito.',
  },

  avoid: [
    'Branco, off-white e nude (reservados à noiva)',
    'Roupas muito casuais: jeans com regata, chinelo de praia',
    'Cores neon e estampas muito chamativas',
  ],
};

/** Avisos em destaque na seção de informações */
export const notices = [
  {
    icon: '👶',
    text: 'Crianças de até 8 anos não pagam.',
  },
  {
    icon: '⏰',
    text: 'Pontualidade: a festa começará pontualmente às 16h30.',
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
    a: 'Podem sim! Crianças de até 8 anos não pagam.',
  },
  {
    q: 'Posso levar acompanhante?',
    a: 'O convite é nominal, e pessoas a mais pagam individualmente. Confirme no formulário o número exato de pessoas que vão com você.',
  },
  {
    q: 'Até quando posso confirmar presença?',
    a: 'Até 10/12/2026, pelo formulário online ou pelo WhatsApp.',
  },
  {
    q: 'Como funciona a lista de presentes?',
    a: 'Escolha um item na lista e presenteie direto na loja pelo link, ou use nosso Pix. Sua presença já é o nosso maior presente! 🎁',
  },
];
