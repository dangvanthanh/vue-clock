import vue from 'rollup-plugin-vue';
import filesize from 'rollup-plugin-filesize';
import base from './rollup.config.base';
import pkg from '../package.json';

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'vue-clock',
    file: pkg.main,
    format: 'umd',
  },
});

config.plugins.push(vue());
config.plugins.push(filesize());

export default config;
