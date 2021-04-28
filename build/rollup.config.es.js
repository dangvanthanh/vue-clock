import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import filesize from 'rollup-plugin-filesize'
import pkg from '../package.json'

const config = {
  input: 'src/index.js',
  output: {
    name: pkg.name,
    file: pkg.module,
    format: 'esm',
    exports: 'named',
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ES_BUILD': JSON.stringify('true'),
    }),
    nodeResolve(),
    commonjs(),
    vue({ css: true }),
    filesize(),
  ],
}

export default config
