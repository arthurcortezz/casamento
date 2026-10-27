// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: troque pelo domínio final (ex.: 'https://mariaejoao.com.br')
export default defineConfig({
  site: 'https://casamento.example.com',
  // A auditoria da barra de dev força o download de todas as imagens lazy
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
