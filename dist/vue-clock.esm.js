"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const SECOND=1e3,HOUR=12;function getHourTime(e){return e>=12?"PM":"AM"}function getZeroPad(e){return(parseInt(e,10)>=10?"":"0")+e}var script={data(){return{hours:0,minutes:0,seconds:0,hourtime:""}},mounted(){this.$options.timer=window.setTimeout(this.updateDateTime,SECOND)},beforeDestroy(){window.clearTimeout(this.$options.timer)},methods:{updateDateTime(){const e=new Date();this.hours=e.getHours(),this.minutes=getZeroPad(e.getMinutes()),this.seconds=getZeroPad(e.getSeconds()),this.hourtime=getHourTime(this.hours),this.hours=this.hours%HOUR||HOUR,this.$options.timer=window.setTimeout(this.updateDateTime,SECOND)}}};function normalizeComponent(e,n,s,i,a,c,d,u,_,A){typeof d!="boolean"&&(_=u,u=d,d=!1);const o=typeof s=="function"?s.options:s;e&&e.render&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns,o._compiled=!0,a&&(o.functional=!0)),i&&(o._scopeId=i);let r;if(c?(r=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!t&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(t=__VUE_SSR_CONTEXT__),n&&n.call(this,_(t)),t&&t._registeredComponents&&t._registeredComponents.add(c)},o._ssrRegister=r):n&&(r=d?function(t){n.call(this,A(t,this.$root.$options.shadowRoot))}:function(t){n.call(this,u(t))}),r)if(o.functional){const t=o.render;o.render=function(m,l){return r.call(l),t(m,l)}}else{const t=o.beforeCreate;o.beforeCreate=t?[].concat(t,r):[r]}return s}function createInjectorSSR(e){return!e&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(e=__VUE_SSR_CONTEXT__),e?("styles"in e||(e._styles=e._styles||{},Object.defineProperty(e,"styles",{enumerable:!0,get:()=>e._renderStyles(e._styles)}),e._renderStyles=e._renderStyles||renderStyles),(n,s)=>addStyle(n,s,e)):()=>{}}function addStyle(e,n,s){const i=process.env.NODE_ENV==="production"?n.media||"default":e,a=s._styles[i]||(s._styles[i]={ids:[],css:""});if(!a.ids.includes(e)){a.media=n.media,a.ids.push(e);let c=n.source;process.env.NODE_ENV!=="production"&&n.map&&(c+=`
/*# sourceURL=`+n.map.sources[0]+" */",c+=`
/*# sourceMappingURL=data:application/json;base64,`+Buffer.from(unescape(encodeURIComponent(JSON.stringify(n.map)))).toString("base64")+" */"),a.css+=c+`
`}}function renderStyles(e){let n="";for(const s in e){const i=e[s];n+='<style data-vue-ssr-id="'+Array.from(i.ids).join(" ")+'"'+(i.media?' media="'+i.media+'"':"")+">"+i.css+"</style>"}return n}const __vue_script__=script;var __vue_render__=function(){var e=this,n=e.$createElement,s=e._self._c||n;return e.hourtime!=""?s("div",{staticClass:"clock"},[e._ssrNode('<div class="clock__hours" data-v-6294754c><span class="clock__hourtime" data-v-6294754c>'+e._ssrEscape(e._s(e.hourtime))+"</span> <span data-v-6294754c>"+e._ssrEscape(e._s(e.hours))+'</span></div> <div class="clock__minutes" data-v-6294754c>'+e._ssrEscape(e._s(e.minutes))+'</div> <div class="clock__seconds" data-v-6294754c>'+e._ssrEscape(e._s(e.seconds))+"</div>")]):e._e()},__vue_staticRenderFns__=[];__vue_render__._withStripped=!0;const __vue_inject_styles__=function(e){if(!e)return;e("data-v-6294754c_0",{source:`
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
`]},media:void 0})},__vue_scope_id__="data-v-6294754c",__vue_module_identifier__="data-v-6294754c",__vue_is_functional_template__=!1,__vue_component__=normalizeComponent({render:__vue_render__,staticRenderFns:__vue_staticRenderFns__},__vue_inject_styles__,__vue_script__,__vue_scope_id__,__vue_is_functional_template__,__vue_module_identifier__,!1,void 0,createInjectorSSR,void 0);exports.default=__vue_component__;
