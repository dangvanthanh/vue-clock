import vue from 'rollup-plugin-vue';
import esbuild from 'rollup-plugin-esbuild';
import filesize from 'rollup-plugin-filesize';
import base from './rollup.config.base';
import pkg from '../package.json';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'VueClock',
    file: pkg.unpkg,
    format: 'iife',
  },
});

config.plugins.push(vue());
config.plugins.push(esbuild({ minify: true }));
config.plugins.push(filesize());

export default config;
