import { pascalCase } from 'pascal-case'
import replace from '@rollup/plugin-replace'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import terser from '@rollup/plugin-terser'
import filesize from 'rollup-plugin-filesize'

import pkg from '../package.json'

const globals = {
  // Provide global variable names to replace your external imports
  // eg. jquery: '$'
  vue: 'Vue',
}

const config = {
  input: 'src/index.js',
  output: {
    compact: true,
    name: pascalCase(pkg.name),
    file: pkg.unpkg,
    format: 'iife',
    exports: 'named',
    globals,
  },
  plugins: [
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('production'),
      'process.env.ES_BUILD': JSON.stringify('false'),
    }),
    nodeResolve(),
    commonjs(),
    vue({ css: true }),
    terser(),
    filesize(),
  ],
}

export default config
