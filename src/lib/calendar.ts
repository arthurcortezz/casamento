import { site } from '../data/site';
import { events } from '../data/info';

/** Converte ISO 8601 para o formato do Google Agenda (UTC básico): 20270110T193000Z */
function toCalendarDate(iso: string): string {
  return `${new Date(iso).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
}

const start = new Date(site.weddingDateISO);
// Duração estimada da festa: 6 horas
const end = new Date(start.getTime() + 6 * 60 * 60 * 1000);
const event = events[0];

/** Link que abre o Google Agenda com o evento preenchido (sem baixar arquivo) */
export const calendarUrl = `https://calendar.google.com/calendar/render?${new URLSearchParams({
  action: 'TEMPLATE',
  text: `Casamento de ${site.coupleNames}`,
  dates: `${toCalendarDate(start.toISOString())}/${toCalendarDate(end.toISOString())}`,
  details: `A festa de casamento começa às ${site.weddingTimeLabel}. Confirme sua presença! ${site.hashtag}`,
  location: event ? `${event.place}, ${event.address}` : site.city,
})}`;
