(self.webpackChunkmomentum_extension=self.webpackChunkmomentum_extension||[]).push([[295],{3214:(t,a,e)=>{"use strict";e.d(a,{Z:()=>n});const n={clock:{name:"Clock",icon:e(5488)},pomodoro:{name:"Pomodoro",icon:e(9318),upsell:"UPSELL_POMODORO"},percent:{name:"Percent",icon:e(2447)}}},5111:(t,a,e)=>{"use strict";e.d(a,{Z:()=>i});let n={};const i={bind:function(t,a){let e,i;t.dataset.justBoundClickOutsideHandler=!0,setTimeout((()=>{t.dataset.justBoundClickOutsideHandler=!1}),100);const s=t=>{i=!1,(t=>t&&t.clientX>window.innerWidth)(t)?i=!0:e=t.target},c=n=>{i||(a.modifiers.bubble||!t.contains(e)&&!t.contains(n.target)&&t!==e&&t!==n.target&&"true"!==t.dataset.justBoundClickOutsideHandler)&&a.value(n)};t.dataset.clickOutsideMouseupHandlerId=Math.random().toString(36).substring(7),t.dataset.clickOutsideMousedownHandlerId=Math.random().toString(36).substring(7),n[t.dataset.clickOutsideMouseupHandlerId]=c,n[t.dataset.clickOutsideMousedownHandlerId]=s,document.addEventListener("mouseup",c),document.addEventListener("mousedown",s)},unbind:function(t){document.removeEventListener("mouseup",n[t.dataset.clickOutsideMouseupHandlerId]),document.removeEventListener("mousedown",n[t.dataset.clickOutsideMousedownHandlerId]),delete n[t.dataset.clickOutsideMouseupHandlerId],delete n[t.dataset.clickOutsideMousedownHandlerId],delete t.dataset.clickOutsideMouseupHandlerId,delete t.dataset.clickOutsideMousedownHandlerId,delete t.dataset.justBoundClickOutsideHandler}}},4589:(t,a,e)=>{(t.exports=e(3645)(!1)).push([t.id,"\n.container[data-v-018521fc] { --icon-size: 26px; --icon-padding: 10px; position: relative; margin-right: 16px;\n}\n[data-v-018521fc] .icon { height: var(--icon-size); width: var(--icon-size); padding: var(--icon-padding); box-sizing: content-box; cursor: pointer; vertical-align: top;\n}\n.dash-icon-wrapper[data-v-018521fc] { padding: 0; vertical-align: top;\n}\n.dash-icon-wrapper[data-v-018521fc]:after { --icon-wrapper-size: 42px;\n}\n.dash-icon[data-v-018521fc] { opacity: 0;\n}\n.dash-icon[data-v-018521fc]:hover { opacity: 1;\n}\n\n\t/* Ensure the negative side margin matches the nav-item first/last child padding */\n.nav[data-v-018521fc] { margin: 0 -2px; position: absolute; top: 0; background: var(--app-background); border-radius: 100px;\n}\n.nav.align-left[data-v-018521fc] {\n}\n.nav.align-center[data-v-018521fc] { margin: 0; left: 50%; transform: translateX(-50%);\n}\n.nav.align-right[data-v-018521fc] { right: 0;\n}\n.open-enter-active[data-v-018521fc], .open-leave-active[data-v-018521fc] { transition: opacity 0.1s ease;\n}\n.open-enter[data-v-018521fc], .open-leave-to[data-v-018521fc] { opacity: 0;\n}\n@media screen and (max-width: 450px) {\n.container[data-v-018521fc] { --icon-size: 22px;\n}\n.icon[data-v-018521fc] { padding-right: 10px;\n}\n}\n",""])},5349:(t,a,e)=>{(t.exports=e(3645)(!1)).push([t.id,"\n.nav[data-v-5476143a] { display: flex;\n}\n.nav-item[data-v-5476143a] { position: relative;\n}\n.nav-item .icon[data-v-5476143a] { padding: var(--icon-padding) calc(var(--icon-padding) - 4px); opacity: 0.5; fill: var(--icon-color);\n}\n.nav-item:first-child .icon[data-v-5476143a] { padding-left: calc(var(--icon-padding) + 2px);\n}\n.nav-item:last-child .icon[data-v-5476143a] { padding-right: calc(var(--icon-padding) + 2px);\n}\n.nav-item:hover .icon[data-v-5476143a] { opacity: 0.8;\n}\n.nav-item:hover:active .icon[data-v-5476143a], .nav-item.active .icon[data-v-5476143a] { opacity: 1 !important;\n}\n.nav-title[data-v-5476143a] { display: none;\n}\n.tooltip[data-v-5476143a] { padding: 3px 5px; position: absolute; top: calc(100% + 2px); left: 50%; z-index: 1; display: none; background: hsla(0deg 0% 15% / 95%); border-radius: 4px; color: white; font-size: 0.8125rem; transform: translateX(-50%); white-space: nowrap;\n}\n.nav-item:hover .tooltip[data-v-5476143a] { display: block;\n}\n.tooltip .badge[data-v-5476143a] { background: rgba(255 255 255 / 20%); color: white;\n}\n\n\t/* Mobile */\n.toast .nav[data-v-5476143a] { display: grid; grid-template-columns: 1fr 1fr 1fr; grid-column-gap: 10px;\n}\n.toast .nav-item[data-v-5476143a] { padding: 7px; display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 6px; box-shadow: inset 0 0 0 1.5px var(--border-color); font-size: 12px;\n}\n.toast .nav-icon[data-v-5476143a] { --size: 22px; height: var(--size); width: var(--size); margin: 3px 0; opacity: 0.5; border-radius: 4px;\n}\n.toast .nav-title[data-v-5476143a] { margin: 1px 0 -1px; opacity: 0.7; display: block; line-height: 1.2; /* <-- remove when .focus-row { line-height: 120% } is removed */\n}\n.toast .tooltip[data-v-5476143a] { display: none;\n}\n.toast .nav-item.active[data-v-5476143a], .toast .nav-item[data-v-5476143a]:active { background: var(--border-color); box-shadow: none;\n}\n.toast .nav-item.active .nav-icon[data-v-5476143a], .toast .nav-item.active .nav-title[data-v-5476143a] { opacity: 1;\n}\n\n",""])},5488:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzQ2IDM2NmExOS45NCAxOS45NCAwIDAxLTE0LjE0LTUuODZsLTkwLTkwYTIwIDIwIDAgMDEtNS44Ni0xNC4wNmwtLjY3LTE1Ni4zM2EyMCAyMCAwIDAxMTkuOTEtMjAuMDloLjA5YTIwIDIwIDAgMDEyMCAxOS45MWwuNjMgMTQ4LjEgODQuMTggODQuMThBMjAgMjAgMCAwMTM0NiAzNjZ6IiAvPjxwYXRoIGQ9Ik0yNTYgNTEyQTI1NiAyNTYgMCAwMTc1IDc1YTI1NiAyNTYgMCAwMTM2MiAzNjIgMjU0LjMzIDI1NC4zMyAwIDAxLTE4MSA3NXptMC00NzJhMjE2IDIxNiAwIDAwLTE1Mi43NCAzNjguNzQgMjE2IDIxNiAwIDAwMzA1LjQ4LTMwNS40OEEyMTQuNTkgMjE0LjU5IDAgMDAyNTYgNDB6IiAvPjwvc3ZnPgo="},2447:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJNMjU2LDUxMkEyNTYsMjU2LDAsMCwxLDc1LDc1LDI1NiwyNTYsMCwwLDEsNDM3LDQzNywyNTQuMzMsMjU0LjMzLDAsMCwxLDI1Niw1MTJabTAtNDcyQTIxNiwyMTYsMCwwLDAsMTAzLjI2LDQwOC43NCwyMTYsMjE2LDAsMCwwLDQwOC43NCwxMDMuMjYsMjE0LjYyLDIxNC42MiwwLDAsMCwyNTYsNDBaIiAvPjxwYXRoIGQ9Ik0xOTIuMjIsMjM5LjQyYTUwLjIzLDUwLjIzLDAsMSwxLDUwLjIzLTUwLjIzQTUwLjI4LDUwLjI4LDAsMCwxLDE5Mi4yMiwyMzkuNDJabTAtNzAuNDFhMjAuMTksMjAuMTksMCwxLDAsMjAuMTksMjAuMThBMjAuMjEsMjAuMjEsMCwwLDAsMTkyLjIyLDE2OVoiIC8+PHBhdGggZD0iTTMyMS43OCwzNjhBNTAuMjMsNTAuMjMsMCwxLDEsMzcyLDMxNy44MSw1MC4yOCw1MC4yOCwwLDAsMSwzMjEuNzgsMzY4Wm0wLTcwLjQxQTIwLjE5LDIwLjE5LDAsMSwwLDM0MiwzMTcuODEsMjAuMjIsMjAuMjIsMCwwLDAsMzIxLjc4LDI5Ny42MloiIC8+PHBhdGggZD0iTTE2NC4zOCwzNjMuMjhhMTYuOSwxNi45LDAsMCwxLTExLjk1LTI4Ljg0TDMzMy41MSwxNTMuMzZhMTYuOSwxNi45LDAsMSwxLDIzLjg5LDIzLjlMMTc2LjMzLDM1OC4zM0ExNi44NiwxNi44NiwwLDAsMSwxNjQuMzgsMzYzLjI4WiIgLz48L2c+PC9zdmc+Cg=="},9318:t=>{t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDI3LjI1MiA5My45MzljLTQyLjUwMy0yNi4yNjgtOTcuMDQ2LTM1LjI5MS0xNDMuNTQxLTI1LjY0MWwuMDEtLjAyMUMyOTMuMjM2IDQ5LjI1IDMwOS45IDQwIDMzNC42NjcgNDBjMTEuMDQ2IDAgMjAtOC45NTQgMjAtMjBzLTguOTU0LTIwLTIwLTIwQzMwMy4wODQgMCAyNzQuNjk2IDExLjEwOSAyNTYgCTM3LjAyOSAyMzcuMzA1IDExLjExMSAyMDguOTE4IDAgMTc3LjMzMyAwYy0xMS4wNDYgMC0yMCA4Ljk1NC0yMCAyMHM4Ljk1NCAyMCAyMCAyMGMyNC4zMzMgMCA0MC44MjggOC45MTkgNTAuNDI4IDI3LjI2Ny4xOC4zNDMuMzUxLjY4Ny41MjMgMS4wMzFDMTI2LjY1MiA0Ny4yMDYgMCAxMTAuNTE4IDAgMjU1Ljk1OCAwIDM5NC44NjIgOTYuNTk5IDUxMiAyNTYgNTEyYzE1OS4wMDkgMCAyNTYtMTE2LjczMSAyNTYtMjU2LjA0MiAwLTcwLjcwMy0zMC4wOTgtMTI4LjI0My04NC43NDgtMTYyLjAxOXptLTE4MC4xOTYgMjIuNjE2YTIwLjA3IDIwLjA3IDAgMCAwIDE3Ljg4OSAwYzY4LjUzMS0zNC4yNjkgMjE4LjY1NS0uMzk1IDIwNi4yOTYgMTU4Ljc3OGgtOTYuNTc0VjI1NmMwLTExLjA0Ni04Ljk1NC0yMC0yMC0yMHMtMjAgOC45NTQtMjAgMjB2MTkuMzMzSDI3NnYtNTguNjY3YzAtMTEuMDQ2LTguOTU0LTIwLTIwLTIwcy0yMCA4Ljk1NC0yMCAyMHY1OC42NjdoLTU4LjY2N1YyNTZjMC0xMS4wNDYtOC45NTQtMjAtMjAtMjBzLTIwIDguOTU0LTIwIDIwdjE5LjMzM0g0MC43NkMyOC41MjEgMTE3LjcxMiAxNzcuMjE5IDgxLjYzOCAyNDcuMDU2IDExNi41NTV6TTI1NiA0NzJjLTExMS45MDggMC0xODUuNjg0LTY1LjMxNS0yMDguNzI3LTE1Ni42NjdoNDE3LjQ1M0M0NDEuNzI4IDQwNi41MDggMzY4LjExNSA0NzIgMjU2IDQ3MnptMzMuODA5LTkyLjQ3NmM3LjgxMSA3LjgxMSA3LjgxMSAyMC40NzQgMCAyOC4yODQtNy44MTEgNy44MTEtMjAuNDc0IDcuODEtMjguMjg0IDBMMjU2IDQwMi4yODRsLTUuNTI0IDUuNTI0Yy03LjgxMSA3LjgxMS0yMC40NzQgNy44MTEtMjguMjg0IDBzLTcuODExLTIwLjQ3NCAwLTI4LjI4NGwxOS42NjctMTkuNjY3YzcuODExLTcuODExIDIwLjQ3NC03LjgxMSAyOC4yODQgMHoiIC8+PC9zdmc+Cg=="},2502:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>r});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.close,expression:"close"}],staticClass:"container",attrs:{"data-test":"center-nav"}},[e("div",{staticClass:"icon-wrapper dash-icon-wrapper",attrs:{"data-test":"open","data-ob":"center-nav"},on:{click:t.clickCenterNav}},[e("inline-svg",{class:"active-mode dash-icon icon icon-"+t.activeClock,attrs:{src:t.clocks[t.activeClock].icon}})],1),t._v(" "),e("transition",{attrs:{name:"open"}},[t.open?e("clock-list",{class:t.alignment,attrs:{"active-clock":t.activeClock},on:{"switch-clock":t.switchTo}}):t._e()],1)],1)};n._withStripped=!0;var i=e(1940),s=e(5111),c=e(8469),o=e(3214);const M={name:"CenterNav",directives:{ClickOutside:s.Z},components:{ClockList:c.default},mixins:[i.Z],props:{activeClock:{type:String,default:"clock"}},data:()=>({open:!1,dropdownActive:!1}),unreactive:()=>({clocks:o.Z}),computed:{alignment(){switch(this.activeClock){case"clock":return"align-left";case"pomodoro":return"align-center";case"percent":return"align-right"}}},created(){this.$e.listenTo(m,"globalEvent:esc",this.close)},destroyed(){this.$e.stopListening(m,"globalEvent:esc",this.close)},methods:{clickCenterNav(){this.open=!0,m.sendEvent("Center nav","Show nav")},switchTo(t){this.$emit("switch-clock",t),this.close()},close(){this.open&&(this.open=!1)},toggleDropdown(t=!this.dropdownActive){this.dropdownActive=t}}};e(7874);var d=(0,e(1900).Z)(M,n,[],!1,null,"018521fc",null);d.options.__file="source/addins-vue/shared_components/CenterNav.vue";const r=d.exports},8469:(t,a,e)=>{"use strict";e.r(a),e.d(a,{default:()=>o});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"nav"},t._l(t.clocks,(function(a,n){return e("div",{key:n,staticClass:"nav-item",class:{active:t.activeClock===n},attrs:{"data-test":n+"-opt"},on:{click:function(a){return t.switchTo(n)}}},[e("inline-svg",{class:"nav-icon icon icon-"+n,attrs:{src:a.icon}}),t._v(" "),e("div",{staticClass:"nav-title"},[t._v(t._s(a.name))]),t._v(" "),e("span",{staticClass:"tooltip"},[t._v(t._s(a.name))])],1)})),0)};n._withStripped=!0;var i=e(3214);const s={name:"ClockList",unreactive:()=>({clocks:i.Z}),props:{activeClock:{type:String,default:"clock"}},methods:{switchTo(t){const a=this.clocks[t].upsell;!this.$plus&&a&&m.cmd("modal.open",a,{sourceEvent:"Dash: center nav"}),this.$emit("switch-clock",t),m.sendEvent("Center nav","Activate "+t)}}};e(7813);var c=(0,e(1900).Z)(s,n,[],!1,null,"5476143a",null);c.options.__file="source/addins-vue/shared_components/ClockList.vue";const o=c.exports},7874:(t,a,e)=>{var n=e(4589);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,e(5346).Z)("1e7094c9",n,!1,{ssrId:!0})},7813:(t,a,e)=>{var n=e(5349);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,e(5346).Z)("0d57997e",n,!1,{ssrId:!0})}}]);