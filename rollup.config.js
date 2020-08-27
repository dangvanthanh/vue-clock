import vue from 'rollup-plugin-vue';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';
import pkg from './package.json';

const production = !process.env.ROLLUP_WATCH;

const plugins = [vue(), resolve(), commonjs(), esbuild({ minify: production })];

export default [
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      file: pkg.main
    },
    plugins
  },
  {
    input: 'src/index.js',
    output: {
      exports: 'named',
      format: 'cjs',
      file: pkg.module
    },
    plugins
  },
  {
    input: 'src/index.js',
    output: {
      name: 'VueClock',
      exports: 'named',
      format: 'umd',
      file: pkg.browser
    },
    plugins
  }
];
