import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: 'dist/vue-clock.esm.js',
    },
    plugins: [vue(), resolve(), commonjs()],
  },
  {
    input: 'src/index.js',
    output: {
      exports: 'default',
      format: 'cjs',
      file: 'dist/vue-clock.cjs.js',
    },
    plugins: [vue({ template: { optimizeSSR: true } }), resolve(), commonjs()],
  },
  {
    input: 'src/index.js',
    output: {
      name: 'VueClock',
      format: 'umd',
      file: 'dist/vue-clock.umd.js',
    },
    plugins: [vue(), resolve(), commonjs()],
  },
];
