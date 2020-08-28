import VueClock from './VueClock.vue';

// Declare install function excuted by Vue.use()
export function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Vue.component('VueClock', VueClock);
}

const plugin = { install };

let globalVue = null;

if (typeof window !== 'undefined') {
  globalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  globalVue = global.Vue;
}

if (globalVue) {
  globalVue.use(plugin);
}

export default VueClock;
