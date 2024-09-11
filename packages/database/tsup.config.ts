import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // Ou qualquer formato que você precise
  outDir: 'dist',
  dts: true, // Habilita a geração de arquivos .d.ts
  sourcemap: true, // Opcional: gera arquivos de mapa de fonte
  minify: false, // Opcional: minifica o código
});
