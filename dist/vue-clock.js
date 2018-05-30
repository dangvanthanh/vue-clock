(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VueClock = {})));
}(this, (function (exports) { 'use strict';

  function getHourTime(h) {
    return h >= 12 ? 'PM' : 'AM';
  }
  function getZeroPad(n) {
    return (parseInt(n, 10) >= 10 ? '' : '0') + n;
  }

  //
  var script = {
    data: function data() {
      return {
        hours: '',
        minutes: '',
        seconds: '',
        hourtime: ''
      };
    },
    mounted: function mounted() {
      setInterval(this.updateDateTime, 1000);
    },
    methods: {
      updateDateTime: function updateDateTime() {
        var now = new Date();
        this.hours = now.getHours();
        this.minutes = getZeroPad(now.getMinutes());
        this.seconds = getZeroPad(now.getSeconds());
        this.hourtime = getHourTime(this.hours);
        this.hours = this.hours % 12 || 12;
      }
    }
  };

  /* script */
  var __vue_script__ = script;
  /* template */

  var __vue_render__ = function __vue_render__() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div", {
      staticClass: "clock"
    }, [_c("div", {
      staticClass: "clock__hours"
    }, [_c("span", {
      staticClass: "clock__hourtime",
      domProps: {
        textContent: _vm._s(_vm.hourtime)
      }
    }), _vm._v(" "), _c("span", {
      domProps: {
        textContent: _vm._s(_vm.hours)
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "clock__minutes",
      domProps: {
        textContent: _vm._s(_vm.minutes)
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "clock__seconds",
      domProps: {
        textContent: _vm._s(_vm.seconds)
      }
    })]);
  };

  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  var __vue_template__ = typeof __vue_render__ !== 'undefined' ? {
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  } : {};
  /* style */


  var __vue_inject_styles__ = function (inject) {
    if (!inject) return;
    inject("data-v-3b693988_0", {
      source: "\n.clock {\n  background: #fff;\n  border: .3rem solid #fff;\n  border-radius: .5rem;\n  display: inline-block;\n  margin-bottom: 1em;\n}\n.clock__hours,\n.clock__minutes,\n.clock__seconds {\n  background: linear-gradient(to bottom, #26303b 50%, #2c3540 50%);\n  display: inline-block;\n  color: #fff;\n  font-family: 'Nunito', sans-serif;\n  font-size: 3rem;\n  font-weight: 300;\n  padding: .5rem 1rem;\n  text-align: center;\n  position: relative;\n}\n.clock__hours {\n  border-right: .15rem solid #fff;\n  border-radius: .5rem 0 0 .5rem;\n}\n.clock__minutes {\n  border-right: .15rem solid #fff;\n}\n.clock__seconds {\n  border-radius: 0 .5rem .5rem 0;\n}\n.clock__hourtime {\n  font-size: 1rem;\n  position: absolute;\n  top: 2px;\n  left: 8px;\n}\n",
      map: undefined,
      media: undefined
    });
  };
  /* scoped */


  var __vue_scope_id__ = undefined;
  /* module identifier */


  var __vue_module_identifier__ = undefined;
  /* functional template */


  var __vue_is_functional_template__ = false;
  /* component normalizer */

  function __vue_normalize__(template, style, script$$1, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
    var component = (typeof script$$1 === 'function' ? script$$1.options : script$$1) || {};

    {
      component.__file = "/Users/dangvanthanh/Code/dev/vue/vue-clock/src/VueClock.vue";
    }

    if (!component.render) {
      component.render = template.render;
      component.staticRenderFns = template.staticRenderFns;
      component._compiled = true;
      if (functional) component.functional = true;
    }

    component._scopeId = scope;

    {
      var hook;

      if (style) {
        hook = function hook(context) {
          style.call(this, createInjector(context));
        };
      }

      if (hook !== undefined) {
        if (component.functional) {
          // register for functional component in vue file
          var originalRender = component.render;

          component.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          var existing = component.beforeCreate;
          component.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
      }
    }

    return component;
  }
  /* style inject */


  function __vue_create_injector__() {
    var head = document.head || document.getElementsByTagName('head')[0];
    var styles = __vue_create_injector__.styles || (__vue_create_injector__.styles = {});
    var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
    return function addStyle(id, css) {
      if (document.querySelector('style[data-vue-ssr-id~="' + id + '"]')) return; // SSR styles are present.

      var group = isOldIE ? css.media || 'default' : id;
      var style = styles[group] || (styles[group] = {
        ids: [],
        parts: [],
        element: undefined
      });

      if (!style.ids.includes(id)) {
        var code = css.source;
        var index = style.ids.length;
        style.ids.push(id);

        if (isOldIE) {
          style.element = style.element || document.querySelector('style[data-group=' + group + ']');
        }

        if (!style.element) {
          var el = style.element = document.createElement('style');
          el.type = 'text/css';
          if (css.media) el.setAttribute('media', css.media);

          if (isOldIE) {
            el.setAttribute('data-group', group);
            el.setAttribute('data-next-index', '0');
          }

          head.appendChild(el);
        }

        if (isOldIE) {
          index = parseInt(style.element.getAttribute('data-next-index'));
          style.element.setAttribute('data-next-index', index + 1);
        }

        if (style.element.styleSheet) {
          style.parts.push(code);
          style.element.styleSheet.cssText = style.parts.filter(Boolean).join('\n');
        } else {
          var textNode = document.createTextNode(code);
          var nodes = style.element.childNodes;
          if (nodes[index]) style.element.removeChild(nodes[index]);
          if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
        }
      }
    };
  }
  /* style inject SSR */


  var VueClock = __vue_normalize__(__vue_template__, __vue_inject_styles__, typeof __vue_script__ === 'undefined' ? {} : __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, typeof __vue_create_injector__ !== 'undefined' ? __vue_create_injector__ : function () {}, typeof __vue_create_injector_ssr__ !== 'undefined' ? __vue_create_injector_ssr__ : function () {});

  exports.default = VueClock;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
