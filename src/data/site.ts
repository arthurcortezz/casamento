export const site = {
  bride: { name: 'Emanuela', initials: 'E' },
  groom: { name: 'Arthur', initials: 'A' },

  coupleNames: 'Arthur & Emanuela',

  weddingDateISO: '2027-01-10T16:30:00-03:00',
  weddingDateLabel: 'Domingo, 10 de janeiro de 2027',
  weddingTimeLabel: '16h30',
  city: 'Maceió · Alagoas',
  hashtag: '#ArthurEmanuela2027',

  rsvp: {
    googleFormUrl: 'https://forms.gle/QDj9fnm8xEMYxxFV9',
    rsvpDeadline: '10 de dezembro de 2026',
    whatsappNumber: '558288350421',
    whatsappMessage: 'Olá! Quero confirmar minha presença no casamento de Arthur & Emanuela 💍',
  },

  // Nome + mensagem de quem presenteia: enviados direto para um Google Forms (veja o README)
  giftMessages: {
    // ID do formulário — fica na URL: docs.google.com/forms/d/e/<ID>/viewform
    googleFormId: '1FAIpQLSe7uXG9I6UegfZ1QoaOddjPp27NJvKoCHk9Rfy5ciArGT4HYA',
    // IDs dos campos ("entry.123456789"), obtidos pelo link pré-preenchido
    nameEntry: 'entry.1060004193',
    messageEntry: 'entry.769031492',
    giftEntry: 'entry.450849138',
  },

  contacts: {
    phoneLabel: '(82) 98835-0421',
  },
};
