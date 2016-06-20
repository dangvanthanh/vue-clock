import babel from 'rollup-plugin-babel'
import vue from 'rollup-plugin-vue'

export default {
  entry: './src/app.js',
  dest: './app.js',
  plugins: [
    babel({
      exclude: './src/components/**',
      presets: 'es2015-rollup'
    }),
    vue()
  ]
}
