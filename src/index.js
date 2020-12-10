import component from './VueClock.vue'

// Declare install function excuted by Vue.use()
const install = function(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('VueClock', component)
}

// Create module definition for Vue.use
const plugin = { install }

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

component.install = install

export default component
