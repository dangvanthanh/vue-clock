import vue from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import base from './rollup.config.base';
import pkg from '../package.json';

const production = !process.env.ROLLUP_WATCH;

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueClock',
    file: pkg.unpkg,
    format: 'iife'
  }
});

config.plugins.push(vue());
config.plugins.push(esbuild({ minify: production }));

export default config;
