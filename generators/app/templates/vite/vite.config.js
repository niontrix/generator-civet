import civetVitePlugin from '@danielx/civet/vite';
import { defineConfig } from 'vite';

const civetPlugin = civetVitePlugin({
  // 'preserve' is used here, because otherwise debugging with source maps currently isn't working.
  // If you want all the language features of Civet, use 'tsc' instead. Downside: no debugging.
  ts: 'preserve',
  emitDeclaration: true,
  typecheck: true,
});

export default defineConfig({
  build: {
    sourcemap: 'hidden',
  },
  plugins: [ civetPlugin ],
  // Vite's `?worker` query parameter isn't working without this
  worker: {
    plugins: () => [ civetPlugin ],
  }
});
