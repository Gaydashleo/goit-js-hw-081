var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,i=/^0o[0-7]+$/i,r=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,a=f||u||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(t,e,n){var o,i,r,f,u,a,c=0,v=!1,p=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,c=e,f=t.apply(r,n)}function j(t){return c=t,u=setTimeout(T,e),v?g(t):f}function h(t){var n=t-a;return void 0===a||n>=e||n<0||p&&t-c>=r}function T(){var t=d();if(h(t))return w(t);u=setTimeout(T,function(t){var n=e-(t-a);return p?s(n,r-(t-c)):n}(t))}function w(t){return u=void 0,y&&o?g(t):(o=i=void 0,f)}function O(){var t=d(),n=h(t);if(o=arguments,i=this,a=t,n){if(void 0===u)return j(a);if(p)return u=setTimeout(T,e),g(a)}return void 0===u&&(u=setTimeout(T,e)),f}return e=b(e)||0,m(n)&&(v=!!n.leading,r=(p="maxWait"in n)?l(b(n.maxWait)||0,e):r,y="trailing"in n?!!n.trailing:y),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=a=i=u=void 0},O.flush=function(){return void 0===u?f:w(d())},O}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==c.call(t)}(t))return NaN;if(m(t)){var f="function"==typeof t.valueOf?t.valueOf():t;t=m(f)?f+"":f}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(e,"");var u=o.test(t);return u||i.test(t)?r(t.slice(2),u?2:8):n.test(t)?NaN:+t}const p=document.querySelector(".feedback-form");p.addEventListener("input",(function(t){const e=email.value;localStorage.setItem("feedback-form-state",e)})),p.addEventListener("submit",(function(t){const e=message.value;localStorage.setItem("feedback-form-state",e)}));email,message;
//# sourceMappingURL=03-feedback.2d9d8648.js.map
