/* ═══════════════════════════════════════════════════════════════
 * ✏️  EDITE ESTE ARQUIVO: dados principais do casamento
 *  Todos os textos abaixo são EXEMPLO — substitua pelos reais.
 * ═══════════════════════════════════════════════════════════════ */

export const site = {
  bride: { name: 'Emanuela', initials: 'E' },
  groom: { name: 'Arthur', initials: 'A' },

  /** Ordem exibida no site — o hero e o monograma derivam daqui */
  coupleNames: 'Arthur & Emanuela',

  /** TODO: confirme o horário (mantive 16h como exemplo) */
  weddingDateISO: '2027-01-10T16:00:00-03:00',
  weddingDateLabel: 'Domingo, 10 de janeiro de 2027',
  weddingTimeLabel: '16h',
  /** TODO: cidade onde vai ser o casamento */
  city: 'TODO: cidade do casamento',
  hashtag: '#ArthurEmanuela2027',

  rsvp: {
    /** TODO: crie o Google Forms e cole o link aqui (passo a passo no README) */
    googleFormUrl: 'https://docs.google.com/forms/d/SEU-FORMULARIO-AQUI',
    rsvpDeadline: '10 de dezembro de 2026',
    /** TODO: WhatsApp para confirmações (formato internacional, só números) */
    whatsappNumber: '5531900000000',
    whatsappMessage: 'Olá! Quero confirmar minha presença no casamento de Arthur & Emanuela 💍',
  },

  contacts: {
    /** TODO: e-mail e telefone reais dos noivos */
    email: 'arthur.emanuela@email.com',
    phoneLabel: '(XX) 90000-0000',
  },
};
