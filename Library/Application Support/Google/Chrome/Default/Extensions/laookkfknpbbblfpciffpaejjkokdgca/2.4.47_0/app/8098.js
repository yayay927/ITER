(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[8098],{1778:(e,t,n)=>{(e.exports=n(3645)(!1)).push([e.id,"\n.percent-format[data-v-c19f4aa6] { top: 65%; opacity: 1; font-size: 25%;\n}\n@media screen and (max-width: 450px) {\n.percent-format[data-v-c19f4aa6] { margin-bottom: -3px; top: auto; font-size: 62%;\n}\n}\n",""])},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r=e[1]||"",a=e[3];if(!a)return r;if(t&&"function"==typeof btoa){var s=(n=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),o=a.sources.map((function(e){return"/*# sourceURL="+a.sourceRoot+e+" */"}));return[r].concat(o).concat([s]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var s=this[a][0];null!=s&&(r[s]=!0)}for(a=0;a<e.length;a++){var o=e[a];null!=o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},8098:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"center-col percent-clock",attrs:{"data-test":"percent-clock"}},[n("div",{staticClass:"time"},[e._v("\n\t\t"+e._s(e.balance.percent)),n("span",{staticClass:"format percent-format"},[e._v("%")])])])};r._withStripped=!0;const a={name:"PercentClock",mixins:[n(1940).Z],bb:()=>({balance:m.models.balanceMode})};n(6121);var s=(0,n(1900).Z)(a,r,[],!1,null,"c19f4aa6",null);s.options.__file="source/addins-vue/clock/PercentClock.vue";const o=s.exports},6121:(e,t,n)=>{var r=n(1778);"string"==typeof r&&(r=[[e.id,r,""]]),r.locals&&(e.exports=r.locals),(0,n(5346).Z)("42238270",r,!1,{ssrId:!0})},5346:(e,t,n)=>{"use strict";function r(e,t){for(var n=[],r={},a=0;a<t.length;a++){var s=t[a],o=s[0],i={id:e+":"+a,css:s[1],media:s[2],sourceMap:s[3]};r[o]?r[o].parts.push(i):n.push(r[o]={id:o,parts:[i]})}return n}n.d(t,{Z:()=>h});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},o=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,c=0,u=!1,l=function(){},d=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,a){u=n,d=a||{};var o=r(e,t);return v(o),function(t){for(var n=[],a=0;a<o.length;a++){var i=o[a];(c=s[i.id]).refs--,n.push(c)}for(t?v(o=r(e,t)):o=[],a=0;a<n.length;a++){var c;if(0===(c=n[a]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete s[c.id]}}}}function v(e){for(var t=0;t<e.length;t++){var n=e[t],r=s[n.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](n.parts[a]);for(;a<n.parts.length;a++)r.parts.push(g(n.parts[a]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var o=[];for(a=0;a<n.parts.length;a++)o.push(g(n.parts[a]));s[n.id]={id:n.id,refs:1,parts:o}}}}function m(){var e=document.createElement("style");return e.type="text/css",o.appendChild(e),e}function g(e){var t,n,r=document.querySelector("style["+p+'~="'+e.id+'"]');if(r){if(u)return l;r.parentNode.removeChild(r)}if(f){var a=c++;r=i||(i=m()),t=C.bind(null,r,a,!1),n=C.bind(null,r,a,!0)}else r=m(),t=x.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function C(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,a);else{var s=document.createTextNode(a),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(s,o[t]):e.appendChild(s)}}function x(e,t){var n=t.css,r=t.media,a=t.sourceMap;if(r&&e.setAttribute("media",r),d.ssrId&&e.setAttribute(p,t.id),a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);