(function(a,u){typeof exports=="object"&&typeof module!="undefined"?u(exports):typeof define=="function"&&define.amd?define(["exports"],u):(a=typeof globalThis!="undefined"?globalThis:a||self,u(a.VueClock={}))})(this,function(a){"use strict";const u=1e3,f=12;function g(e){return e>=12?"PM":"AM"}function _(e){return(parseInt(e,10)>=10?"":"0")+e}var k={data(){return{hours:0,minutes:0,seconds:0,hourtime:""}},mounted(){this.$options.timer=window.setTimeout(this.updateDateTime,u)},beforeDestroy(){window.clearTimeout(this.$options.timer)},methods:{updateDateTime(){const e=new Date();this.hours=e.getHours(),this.minutes=_(e.getMinutes()),this.seconds=_(e.getSeconds()),this.hourtime=g(this.hours),this.hours=this.hours%f||f,this.$options.timer=window.setTimeout(this.updateDateTime,u)}}};function b(e,t,s,n,l,A,c,r,C,O){typeof c!="boolean"&&(C=r,r=c,c=!1);const i=typeof s=="function"?s.options:s;e&&e.render&&(i.render=e.render,i.staticRenderFns=e.staticRenderFns,i._compiled=!0,l&&(i.functional=!0)),n&&(i._scopeId=n);let d;if(A?(d=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(o=__VUE_SSR_CONTEXT__),t&&t.call(this,C(o)),o&&o._registeredComponents&&o._registeredComponents.add(A)},i._ssrRegister=d):t&&(d=c?function(o){t.call(this,O(o,this.$root.$options.shadowRoot))}:function(o){t.call(this,r(o))}),d)if(i.functional){const o=i.render;i.render=function($,v){return d.call(v),o($,v)}}else{const o=i.beforeCreate;i.beforeCreate=o?[].concat(o,d):[d]}return s}const E=typeof navigator!="undefined"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function y(e){return(t,s)=>w(t,s)}let m;const p={};function w(e,t){const s=E?t.media||"default":e,n=p[s]||(p[s]={ids:new Set(),styles:[]});if(!n.ids.has(e)){n.ids.add(e);let l=t.source;if(t.map&&(l+=`
/*# sourceURL=`+t.map.sources[0]+" */",l+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),n.element||(n.element=document.createElement("style"),n.element.type="text/css",t.media&&n.element.setAttribute("media",t.media),m===void 0&&(m=document.head||document.getElementsByTagName("head")[0]),m.appendChild(n.element)),"styleSheet"in n.element)n.styles.push(l),n.element.styleSheet.cssText=n.styles.filter(Boolean).join(`
`);else{const A=n.ids.size-1,c=document.createTextNode(l),r=n.element.childNodes;r[A]&&n.element.removeChild(r[A]),r.length?n.element.insertBefore(c,r[A]):n.element.appendChild(c)}}}const T=k;var h=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.hourtime!=""?s("div",{staticClass:"clock"},[s("div",{staticClass:"clock__hours"},[s("span",{staticClass:"clock__hourtime",domProps:{textContent:e._s(e.hourtime)}}),e._v(" "),s("span",{domProps:{textContent:e._s(e.hours)}})]),e._v(" "),s("div",{staticClass:"clock__minutes",domProps:{textContent:e._s(e.minutes)}}),e._v(" "),s("div",{staticClass:"clock__seconds",domProps:{textContent:e._s(e.seconds)}})]):e._e()},x=[];h._withStripped=!0;const S=function(e){if(!e)return;e("data-v-6294754c_0",{source:`
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
`]},media:void 0})},R="data-v-6294754c",D=void 0,B=!1,N=b({render:h,staticRenderFns:x},S,T,R,B,D,!1,y,void 0,void 0);a.default=N,Object.defineProperty(a,"__esModule",{value:!0})});