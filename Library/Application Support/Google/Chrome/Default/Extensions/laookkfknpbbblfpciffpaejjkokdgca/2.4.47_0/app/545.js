(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[545],{1306:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});let a={};const s={bind:function(e,t){m.utils.isTouchDevice()&&(e.dataset.justBoundMobileBlurHandler=!0,setTimeout((()=>{e.dataset.justBoundMobileBlurHandler=!1}),100),e.dataset.mobileBlurHandlerId=Math.random().toString(36).substring(7),a[e.dataset.mobileBlurHandlerId]=t.value,e.addEventListener("focusout",t.value))},unbind:function(e){m.utils.isTouchDevice()&&(e.removeEventListener("click",a[e.dataset.mobileBlurHandlerId]),delete a[e.dataset.mobileBlurHandlerId],delete e.dataset.mobileBlurHandlerId,delete e.dataset.justBoundMobileBlurHandler)}}},6941:(e,t,n)=>{(e.exports=n(3645)(!1)).push([e.id,"\n.name-punctuation-no-wrap[data-v-4e331ed7] { white-space: nowrap;\n}\n.input-wrapper[data-v-4e331ed7] { margin: -5px -2px -8px; padding: 5px 2px 8px; position: relative;\n}\n.input-wrapper .hidden-span[data-v-4e331ed7] { visibility: hidden;\n}\ninput.name[data-v-4e331ed7] { width: 100%; position: absolute; top: 0; right: 0; bottom: 0; left: 0;\n}\n.editing[data-v-4e331ed7] { border: none; font-weight: 500; min-width: 1.5em; max-width: 12em; text-align: center;\n}\n\n",""])},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,a=e[1]||"",s=e[3];if(!s)return a;if(t&&"function"==typeof btoa){var i=(n=s,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),r=s.sources.map((function(e){return"/*# sourceURL="+s.sourceRoot+e+" */"}));return[a].concat(r).concat([i]).join("\n")}return[a].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n})).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var a={},s=0;s<this.length;s++){var i=this[s][0];null!=i&&(a[i]=!0)}for(s=0;s<e.length;s++){var r=e[s];null!=r[0]&&a[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),t.push(r))}},t}},545:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("span",{key:e.message.content,staticClass:"content",attrs:{"data-test":"content"}},[n("span",{staticClass:"message",attrs:{"data-test":"message"},on:{dblclick:e.openMantraSettings}},[e._v(e._s(e.message.content))]),n("span",{staticClass:"name-punctuation-no-wrap"},[e.message.name||e.editingName?n("span",{staticClass:"name-wrapper",attrs:{"data-test":"name-wrapper"}},[e.editingName?n("span",{staticClass:"input-wrapper"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"},{name:"mobile-blur",rawName:"v-mobile-blur",value:e.handleNameChange,expression:"handleNameChange"}],ref:"editingName",staticClass:"name editing",class:{pulse:e.pulse},attrs:{spellcheck:"false","data-test":"name-input"},domProps:{value:e.value},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleNameChange(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.revertName(t)}],blur:e.handleNameChange,input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),n("span",{staticClass:"name hidden-span"},[e._v(e._s(e.value.replace(/ /g," ")||" "))])]):n("span",{staticClass:"name",class:{pulse:e.pulse},attrs:{"data-test":"name"},on:{dblclick:function(t){return e.$emit("editing",!0)}}},[e._v(e._s(e.message.name))])]):e._e(),n("span",{attrs:{"data-test":"punctuation"}},[e._v(e._s(e.message.punctuation))])])])])};a._withStripped=!0;const s={name:"Message",directives:{MobileBlur:n(1306).Z},props:{message:{type:Object,default:()=>({})},editingName:{type:Boolean,default:!1},value:{type:String,default:""}},data:()=>({pulse:!1}),watch:{editingName(e){e&&(this.pulseName(),this.$nextTick((()=>{this.$refs.editingName&&this.$refs.editingName.focus()})))}},methods:{handleNameChange(){const e=this.value.trim();""===e?this.revertName():(this.message.name=this.value,m.models.customization.save({displayname:e}),this.editDone())},openMantraSettings(){this.editingName||(m.commandManager.executeAsync("settings.display",null,{section:"mantra-settings"}),m.sendEvent("Greeting","Message Double Click"))},revertName(){this.value=m.models.customization.get("displayname"),this.editDone()},editDone(){this.$emit("editing",!1),this.pulseName()},pulseName(){this.pulse=!0,setTimeout((()=>{this.pulse=!1}),1e3)}}};n(2943);var i=(0,n(1900).Z)(s,a,[],!1,null,"4e331ed7",null);i.options.__file="source/addins-vue/greetings-mantra/Message.vue";const r=i.exports},2943:(e,t,n)=>{var a=n(6941);"string"==typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals),(0,n(5346).Z)("ac55c8b6",a,!1,{ssrId:!0})},5346:(e,t,n)=>{"use strict";function a(e,t){for(var n=[],a={},s=0;s<t.length;s++){var i=t[s],r=i[0],o={id:e+":"+s,css:i[1],media:i[2],sourceMap:i[3]};a[r]?a[r].parts.push(o):n.push(a[r]={id:r,parts:[o]})}return n}n.d(t,{Z:()=>h});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=s&&(document.head||document.getElementsByTagName("head")[0]),o=null,u=0,l=!1,d=function(){},p=null,c="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(e,t,n,s){l=n,p=s||{};var r=a(e,t);return f(r),function(t){for(var n=[],s=0;s<r.length;s++){var o=r[s];(u=i[o.id]).refs--,n.push(u)}for(t?f(r=a(e,t)):r=[],s=0;s<n.length;s++){var u;if(0===(u=n[s]).refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete i[u.id]}}}}function f(e){for(var t=0;t<e.length;t++){var n=e[t],a=i[n.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](n.parts[s]);for(;s<n.parts.length;s++)a.parts.push(g(n.parts[s]));a.parts.length>n.parts.length&&(a.parts.length=n.parts.length)}else{var r=[];for(s=0;s<n.parts.length;s++)r.push(g(n.parts[s]));i[n.id]={id:n.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function g(e){var t,n,a=document.querySelector("style["+c+'~="'+e.id+'"]');if(a){if(l)return d;a.parentNode.removeChild(a)}if(m){var s=u++;a=o||(o=v()),t=C.bind(null,a,s,!1),n=C.bind(null,a,s,!0)}else a=v(),t=N.bind(null,a),n=function(){a.parentNode.removeChild(a)};return t(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap)return;t(e=a)}else n()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function C(e,t,n,a){var s=n?"":a.css;if(e.styleSheet)e.styleSheet.cssText=y(t,s);else{var i=document.createTextNode(s),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(i,r[t]):e.appendChild(i)}}function N(e,t){var n=t.css,a=t.media,s=t.sourceMap;if(a&&e.setAttribute("media",a),p.ssrId&&e.setAttribute(c,t.id),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}}]);