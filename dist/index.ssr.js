'use strict';Object.defineProperty(exports,'__esModule',{value:true});const SECOND = 1000;
const HOUR = 12;

function getHourTime (h) {
  return h >= 12 ? 'PM' : 'AM'
}

function getZeroPad (n) {
  return (parseInt(n, 10) >= 10 ? '' : '0') + n
}//

var script = {
  props: {
    isHour: {
      type: Boolean,
      default: true
    },
    isMinute: {
      type: Boolean,
      default: true
    },
    isSecond: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
      hourtime: '',
    };
  },
  mounted() {
    const timer = window.setTimeout(this.updateDateTime, SECOND);
    this.$on('hook:destroyed', () => window.clearTimeout(timer));
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
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group = css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _vm.hourtime != ""
    ? _c("div", { staticClass: "clock" }, [
        _vm._ssrNode(
          (_vm.isHour
            ? '<div class="clock__hours" data-v-294d233e><span class="clock__hourtime" data-v-294d233e>' +
              _vm._ssrEscape(_vm._s(_vm.hourtime)) +
              "</span> <span data-v-294d233e>" +
              _vm._ssrEscape(_vm._s(_vm.hours)) +
              "</span></div>"
            : "<!---->") +
            " " +
            (_vm.isMinute
              ? '<div class="clock__minutes" data-v-294d233e>' +
                _vm._ssrEscape(_vm._s(_vm.minutes)) +
                "</div>"
              : "<!---->") +
            " " +
            (_vm.isSecond
              ? '<div class="clock__seconds" data-v-294d233e>' +
                _vm._ssrEscape(_vm._s(_vm.seconds)) +
                "</div>"
              : "<!---->")
        )
      ])
    : _vm._e()
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = function (inject) {
    if (!inject) return
    inject("data-v-294d233e_0", { source: "\n.clock[data-v-294d233e] {\n  background: #fff;\n  border: 0.3rem solid #fff;\n  border-radius: 0.5rem;\n  display: inline-block;\n  margin-bottom: 1em;\n}\n.clock__hours[data-v-294d233e],\n.clock__minutes[data-v-294d233e],\n.clock__seconds[data-v-294d233e] {\n  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);\n  display: inline-block;\n  color: #fff;\n  font-family: 'Nunito', sans-serif;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  position: relative;\n}\n.clock__hours[data-v-294d233e] {\n  border-right: 0.15rem solid #fff;\n}\n.clock__minutes[data-v-294d233e] {\n  border-right: 0.15rem solid #fff;\n}\n.clock__hourtime[data-v-294d233e] {\n  font-size: 1rem;\n  position: absolute;\n  top: 2px;\n  left: 8px;\n}\n", map: {"version":3,"sources":["/Users/dangvanthanh/Code/Vue/vue-clock/src/VueClock.vue"],"names":[],"mappings":";AAwDA;EACA,gBAAA;EACA,yBAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;AACA;AAEA;;;EAGA,gEAAA;EACA,qBAAA;EACA,WAAA;EACA,iCAAA;EACA,eAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;EACA,kBAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,gCAAA;AACA;AAEA;EACA,eAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;AACA","file":"VueClock.vue","sourcesContent":["<template>\n  <div class=\"clock\" v-if=\"hourtime != ''\">\n    <div class=\"clock__hours\" v-if=\"isHour\">\n      <span class=\"clock__hourtime\" v-text=\"hourtime\"></span>\n      <span v-text=\"hours\"></span>\n    </div>\n    <div class=\"clock__minutes\" v-text=\"minutes\" v-if=\"isMinute\"></div>\n    <div class=\"clock__seconds\" v-text=\"seconds\" v-if=\"isSecond\"></div>\n  </div>\n</template>\n\n<script>\nimport { SECOND, HOUR, getHourTime, getZeroPad } from './filters';\n\nexport default {\n  props: {\n    isHour: {\n      type: Boolean,\n      default: true\n    },\n    isMinute: {\n      type: Boolean,\n      default: true\n    },\n    isSecond: {\n      type: Boolean,\n      default: true\n    }\n  },\n  data() {\n    return {\n      hours: 0,\n      minutes: 0,\n      seconds: 0,\n      hourtime: '',\n    };\n  },\n  mounted() {\n    const timer = window.setTimeout(this.updateDateTime, SECOND);\n    this.$on('hook:destroyed', () => window.clearTimeout(timer))\n  },\n  methods: {\n    updateDateTime() {\n      const now = new Date();\n      this.hours = now.getHours();\n      this.minutes = getZeroPad(now.getMinutes());\n      this.seconds = getZeroPad(now.getSeconds());\n      this.hourtime = getHourTime(this.hours);\n      this.hours = this.hours % HOUR || HOUR;\n      this.$options.timer = window.setTimeout(this.updateDateTime, SECOND);\n    },\n  },\n};\n</script>\n\n<style scoped>\n.clock {\n  background: #fff;\n  border: 0.3rem solid #fff;\n  border-radius: 0.5rem;\n  display: inline-block;\n  margin-bottom: 1em;\n}\n\n.clock__hours,\n.clock__minutes,\n.clock__seconds {\n  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);\n  display: inline-block;\n  color: #fff;\n  font-family: 'Nunito', sans-serif;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: 0.5rem 1rem;\n  text-align: center;\n  position: relative;\n}\n\n.clock__hours {\n  border-right: 0.15rem solid #fff;\n}\n\n.clock__minutes {\n  border-right: 0.15rem solid #fff;\n}\n\n.clock__hourtime {\n  font-size: 1rem;\n  position: absolute;\n  top: 2px;\n  left: 8px;\n}\n</style>\n"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__ = "data-v-294d233e";
  /* module identifier */
  const __vue_module_identifier__ = "data-v-294d233e";
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    createInjectorSSR,
    undefined
  );// Declare install function excuted by Vue.use()
const install = function(Vue) {
  if (install.installed) return
  install.installed = true;
  Vue.component('VueClock', __vue_component__);
};

// Create module definition for Vue.use
const plugin = { install };

let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

__vue_component__.install = install;exports["default"]=__vue_component__;