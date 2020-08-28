(function(d,l){typeof exports=="object"&&typeof module!="undefined"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(d=typeof globalThis!="undefined"?globalThis:d||self,l(d.VueClock={}))})(this,function(d){"use strict";const l=1e3,p=12;function E(e){return e>=12?"PM":"AM"}function h(e){return(parseInt(e,10)>=10?"":"0")+e}var y={data(){return{hours:0,minutes:0,seconds:0,hourtime:""}},mounted(){this.$options.timer=window.setTimeout(this.updateDateTime,l)},beforeDestroy(){window.clearTimeout(this.$options.timer)},methods:{updateDateTime(){const e=new Date();this.hours=e.getHours(),this.minutes=h(e.getMinutes()),this.seconds=h(e.getSeconds()),this.hourtime=E(this.hours),this.hours=this.hours%p||p,this.$options.timer=window.setTimeout(this.updateDateTime,l)}}};function w(e,t,i,n,u,A,c,r,k,U){typeof c!="boolean"&&(k=r,r=c,c=!1);const s=typeof i=="function"?i.options:i;e&&e.render&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns,s._compiled=!0,u&&(s.functional=!0)),n&&(s._scopeId=n);let a;if(A?(a=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(o=__VUE_SSR_CONTEXT__),t&&t.call(this,k(o)),o&&o._registeredComponents&&o._registeredComponents.add(A)},s._ssrRegister=a):t&&(a=c?function(o){t.call(this,U(o,this.$root.$options.shadowRoot))}:function(o){t.call(this,r(o))}),a)if(s.functional){const o=s.render;s.render=function(H,b){return a.call(b),o(H,b)}}else{const o=s.beforeCreate;s.beforeCreate=o?[].concat(o,a):[a]}return i}const T=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function x(e){return(t,i)=>S(t,i)}let _;const C={};function S(e,t){const i=T?t.media||"default":e,n=C[i]||(C[i]={ids:new Set(),styles:[]});if(!n.ids.has(e)){n.ids.add(e);let u=t.source;if(t.map&&(u+=`
/*# sourceURL=`+t.map.sources[0]+" */",u+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),_===void 0&&(_=document.head||document.getElementsByTagName("head")[0]),_.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(u),n.element.styleSheet.cssText=n.styles.filter(Boolean).join(`
`);else{const A=n.ids.size-1,c=document.createTextNode(u),r=n.element.childNodes;r[A]&&n.element.removeChild(r[A]),r.length?n.element.insertBefore(c,r[A]):n.element.appendChild(c)}}}const R=y;var v=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.hourtime!=""?i("div",{staticClass:"clock"},[i("div",{staticClass:"clock__hours"},[i("span",{staticClass:"clock__hourtime",domProps:{textContent:e._s(e.hourtime)}}),e._v(" "),i("span",{domProps:{textContent:e._s(e.hours)}})]),e._v(" "),i("div",{staticClass:"clock__minutes",domProps:{textContent:e._s(e.minutes)}}),e._v(" "),i("div",{staticClass:"clock__seconds",domProps:{textContent:e._s(e.seconds)}})]):e._e()},D=[];v._withStripped=!0;const B=function(e){if(!e)return;e("data-v-6294754c_0",{source:`
.clock[data-v-6294754c] {
  background: #fff;
  border: 0.3rem solid #fff;
  border-radius: 0.5rem;
  display: inline-block;
  margin-bottom: 1em;
}
.clock__hours[data-v-6294754c],
.clock__minutes[data-v-6294754c],
.clock__seconds[data-v-6294754c] {
  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);
  display: inline-block;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  padding: 0.5rem 1rem;
  text-align: center;
  position: relative;
}
.clock__hours[data-v-6294754c] {
  border-right: 0.15rem solid #fff;
  border-radius: 0.5rem 0 0 0.5rem;
}
.clock__minutes[data-v-6294754c] {
  border-right: 0.15rem solid #fff;
}
.clock__seconds[data-v-6294754c] {
  border-radius: 0 0.5rem 0.5rem 0;
}
.clock__hourtime[data-v-6294754c] {
  font-size: 1rem;
  position: absolute;
  top: 2px;
  left: 8px;
}
`,map:{version:3,sources:["/Users/dangvanthanh/Code/vue-clock/src/VueClock.vue"],names:[],mappings:";AA4CA;EACA,gBAAA;EACA,yBAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;AACA;AAEA;;;EAGA,gEAAA;EACA,qBAAA;EACA,WAAA;EACA,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,gCAAA;EACA,gCAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;AACA",file:"VueClock.vue",sourcesContent:[`<template>
  <div class="clock" v-if="hourtime != ''">
    <div class="clock__hours">
      <span class="clock__hourtime" v-text="hourtime"></span>
      <span v-text="hours"></span>
    </div>
    <div class="clock__minutes" v-text="minutes"></div>
    <div class="clock__seconds" v-text="seconds"></div>
  </div>
</template>

<script>
import { SECOND, HOUR, getHourTime, getZeroPad } from './Filters';

export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: '',
    };
  },
  mounted() {
    this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);
  },
  beforeDestroy() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    updateDateTime() {
      const now = new Date();
      this.hours = now.getHours();
      this.minutes = getZeroPad(now.getMinutes());
      this.seconds = getZeroPad(now.getSeconds());
      this.hourtime = getHourTime(this.hours);
      this.hours = this.hours % HOUR || HOUR;
      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);
    },
  },
};
</script>

<style scoped>
.clock {
  background: #fff;
  border: 0.3rem solid #fff;
  border-radius: 0.5rem;
  display: inline-block;
  margin-bottom: 1em;
}

.clock__hours,
.clock__minutes,
.clock__seconds {
  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);
  display: inline-block;
  color: #fff;
  font-family: 'Nunito', sans-serif;
  font-size: 3rem;
  font-weight: 300;
  padding: 0.5rem 1rem;
  text-align: center;
  position: relative;
}

.clock__hours {
  border-right: 0.15rem solid #fff;
  border-radius: 0.5rem 0 0 0.5rem;
}

.clock__minutes {
  border-right: 0.15rem solid #fff;
}

.clock__seconds {
  border-radius: 0 0.5rem 0.5rem 0;
}

.clock__hourtime {
  font-size: 1rem;
  position: absolute;
  top: 2px;
  left: 8px;
}
</style>
`]},media:void 0})},N="data-v-6294754c",O=void 0,$=!1,g=w({render:v,staticRenderFns:D},B,R,N,$,O,!1,x,void 0,void 0);function m(e){if(m.installed)return;m.installed=!0,e.component("VueClock",g)}const P={install:m};let f=null;typeof window!="undefined"?f=window.Vue:typeof global!="undefined"&&(f=global.Vue),f&&f.use(P),d.default=g,d.install=m,Object.defineProperty(d,"__esModule",{value:!0})});
