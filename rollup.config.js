import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import css from 'rollup-plugin-css-only';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const plugins = [vue(), resolve(), commonjs(), esbuild({ minify: production })];
const pluginsSSR = [
  vue({ template: { optimizeSSR: true }, css: false }),
  css(),
  resolve(),
  commonjs(),
  esbuild({ minify: production }),
];

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: pkg.module,
    },
    plugins: pluginsSSR,
  },
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      format: 'cjs',
      file: pkg.main,
    },
    plugins,
  },
  {
    input: 'src/index.js',
    output: {
      name: 'VueClock',
      exports: 'named',
      format: 'umd',
      file: pkg.browser,
    },
    plugins,
  },
];
