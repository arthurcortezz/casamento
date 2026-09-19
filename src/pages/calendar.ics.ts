import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { events } from '../data/info';

/** Converte ISO 8601 para o formato ICS (UTC básico): 20270123T190000Z */
function toIcsDate(iso: string): string {
  return `${new Date(iso).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`;
}

/** Escapa textos conforme o formato ICS (vírgulas, ponto-e-vírgula e quebras de linha) */
function escapeIcs(text: string): string {
  return text
    .replace(/\\/g, '\\\\')
    .replace(/([,;])/g, '\\$1')
    .replace(/\r?\n/g, '\\n');
}

export const GET: APIRoute = () => {
  const start = toIcsDate(site.weddingDateISO);
  // Duração estimada do evento: 6 horas (cerimônia + recepção)
  const end = toIcsDate(new Date(new Date(site.weddingDateISO).getTime() + 6 * 60 * 60 * 1000).toISOString());
  const stamp = toIcsDate(new Date().toISOString());
  const location = events[1]?.address ?? events[0]?.address ?? '';

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Site de Casamento//PT-BR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:casamento-${new Date(site.weddingDateISO).getTime()}@site`,
    `DTSTAMP:${stamp}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:${escapeIcs(`Casamento de ${site.coupleNames}`)}`,
    `LOCATION:${escapeIcs(location)}`,
    `DESCRIPTION:${escapeIcs(
      `Cerimônia às ${site.weddingTimeLabel} e recepção em seguida. Confirme sua presença! ${site.hashtag}`,
    )}`,
    'STATUS:CONFIRMED',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'ACTION:DISPLAY',
    `DESCRIPTION:${escapeIcs('Amanhã é o casamento! 💍')}`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  return new Response(ics, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'inline; filename="casamento.ics"',
    },
  });
};
