/* ═══════════════════════════════════════════════════════════════
 * Pix "copia e cola" (BR Code estático — padrão EMV do Banco Central)
 * Roda no build e no navegador: não depende de API nem de back-end.
 * ═══════════════════════════════════════════════════════════════ */

import QRCode from 'qrcode';

export interface PixParams {
  /** Chave Pix já no formato do DICT (telefone com +55, e-mail, CPF só dígitos...) */
  key: string;
  /** Nome do recebedor (máx. 25 caracteres, sem acentos) */
  name: string;
  /** Cidade do recebedor (máx. 15 caracteres, sem acentos) */
  city: string;
  /** Valor em reais — omitido = convidado digita o valor */
  amount?: number;
  /** Identificador que aparece no comprovante (máx. 25, só letras e números) */
  txid?: string;
}

const field = (id: string, value: string) => `${id}${value.length.toString().padStart(2, '0')}${value}`;

/** Remove acentos/símbolos e corta no tamanho máximo permitido pelo padrão */
const sanitize = (text: string, max: number) =>
  text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^A-Za-z0-9 ]/g, '')
    .trim()
    .toUpperCase()
    .slice(0, max);

/** CRC16-CCITT (polinômio 0x1021, inicial 0xFFFF) exigido no campo 63 */
function crc16(payload: string): string {
  let crc = 0xffff;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let bit = 0; bit < 8; bit++) {
      crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
    }
  }
  return (crc & 0xffff).toString(16).toUpperCase().padStart(4, '0');
}

export function pixPayload({ key, name, city, amount, txid }: PixParams): string {
  const payload = [
    field('00', '01'),
    field('26', field('00', 'br.gov.bcb.pix') + field('01', key)),
    field('52', '0000'),
    field('53', '986'),
    amount ? field('54', amount.toFixed(2)) : '',
    field('58', 'BR'),
    field('59', sanitize(name, 25)),
    field('60', sanitize(city, 15)),
    field('62', field('05', txid ? sanitize(txid, 25).replace(/ /g, '') || '***' : '***')),
    '6304',
  ].join('');
  return payload + crc16(payload);
}

/** QR Code em SVG inline (sem imagem externa) */
export const pixQrSvg = (payload: string) =>
  QRCode.toString(payload, { type: 'svg', margin: 1, errorCorrectionLevel: 'M', color: { dark: '#3b382f', light: '#ffffff' } });
