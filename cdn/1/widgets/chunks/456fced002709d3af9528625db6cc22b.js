/*! For license information please see 456fced002709d3af9528625db6cc22b.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[53356],{53356:(t,e,i)=>{i.r(e),i.d(e,{calcite_value_list_item:()=>f});var n=i(30396),a=i(39591),o=i(9615),r=i(31964),c=i(32544),s=i(29340),l=i(51124),d=i(23002);const u="actions-end",h="actions-start",f=class{constructor(t){(0,n.r)(this,t),this.calciteListItemRemove=(0,n.c)(this,"calciteListItemRemove",7),this.pickListItem=null,this.guid=`calcite-value-list-item-${(0,r.g)()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(t.preventDefault(),this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected},this.description=void 0,this.disabled=!1,this.deselectDisabled=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.iconFlipRtl=!1,this.label=void 0,this.metadata=void 0,this.removable=!1,this.selected=!1,this.value=void 0}connectedCallback(){(0,a.c)(this)}disconnectedCallback(){(0,a.d)(this)}componentWillLoad(){(0,s.a)(this)}componentDidLoad(){(0,s.s)(this)}componentDidRender(){(0,c.u)(this,!!this.el.closest("calcite-value-list")&&"managed")}async toggleSelected(t){this.pickListItem.toggleSelected(t)}async setFocus(){await(0,s.c)(this),this.pickListItem?.setFocus()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this;return(0,o.g)(t,u)?(0,n.h)("slot",{name:u,slot:l.S.actionsEnd}):null}renderActionsStart(){const{el:t}=this;return(0,o.g)(t,h)?(0,n.h)("slot",{name:h,slot:l.S.actionsStart}):null}renderHandle(){const{icon:t,iconFlipRtl:e}=this;if(t===d.I.grip)return(0,n.h)("span",{class:{[l.C.handle]:!0,[l.C.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},(0,n.h)("calcite-icon",{flipRtl:e,icon:"drag",scale:"s"}))}render(){return(0,n.h)(n.H,{id:this.el.id||this.guid},this.renderHandle(),(0,n.h)("calcite-pick-list-item",{description:this.description,deselectDisabled:this.deselectDisabled,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return(0,n.g)(this)}};f.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}"},39591:(t,e,i)=>{i.d(e,{c:()=>s,d:()=>l});var n=i(30396),a=i(77041);const o=new Set;let r;const c={childList:!0};function s(t){r||(r=(0,a.c)("mutation",d)),r.observe(t.el,c)}function l(t){o.delete(t.el),d(r.takeRecords()),r.disconnect();for(const[t]of o.entries())r.observe(t,c)}function d(t){t.forEach((({target:t})=>{(0,n.f)(t)}))}},9615:(t,e,i)=>{i.d(e,{a:()=>p,b:()=>d,c:()=>v,d:()=>E,e:()=>l,f:()=>u,g:()=>x,h:()=>w,i:()=>R,j:()=>y,k:()=>c,l:()=>r,m:()=>L,n:()=>s,o:()=>C,p:()=>_,q:()=>m,r:()=>S,s:()=>D,t:()=>I,u:()=>h});var n=i(96440),a=i(31964),o=i(90770);const r={getShadowRoot:!0};function c(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,a.g)()}`:""}function s(t){return Array.isArray(t)?t:Array.from(t)}function l(t){const e=v(t,`.${o.C.darkMode}, .${o.C.lightMode}`);return e?.classList.contains("calcite-mode-dark")?"dark":"light"}function d(t){const e=v(t,"[dir]");return e?e.getAttribute("dir"):"ltr"}function u(t,e,i){const n=`[${e}]`,a=t.closest(n);return a?a.getAttribute(e):i}function h(t){return t.getRootNode()}function f(t){return t.host||null}function m(t,{selector:e,id:i}){return function t(n){if(!n)return null;n.assignedSlot&&(n=n.assignedSlot);const a=h(n),o=i?"getElementById"in a?a.getElementById(i):null:e?a.querySelector(e):null,r=f(a);return o||(r?t(r):null)}(t)}function v(t,e){return function t(i){return i?i.closest(e)||t(f(h(i))):null}(t)}function b(t,e){return g(t,e)}function g(t,e){if(!t)return;const i=e(t);if(void 0!==i)return i;const{parentNode:n}=t;return g(n instanceof ShadowRoot?n.host:n,e)}function p(t,e){return!!b(e,(e=>e===t||void 0))}async function w(t){if(t)return function(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()}function y(t){((0,n.t)(t,r)[0]||t).focus()}const k=":not([slot])";function x(t,e,i){e&&!Array.isArray(e)&&"string"!=typeof e&&(i=e,e=null);const n=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:k;return i?.all?function(t,e,i){let n=e===k?A(t,k):Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((e=>e.parentElement===t)),n=i?.matches?n.filter((t=>t?.matches(i.matches))):n;const a=i?.selector;return a?n.map((t=>Array.from(t.querySelectorAll(a)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):n}(t,n,i):function(t,e,i){let n=e===k?A(t,k)[0]||null:t.querySelector(e);n=i&&!1===i.direct||n?.parentElement===t?n:null,n=i?.matches?n?.matches(i.matches)?n:null:n;const a=i?.selector;return a?n?.querySelector(a):n}(t,n,i)}function A(t,e){return t?Array.from(t.children||[]).filter((t=>t?.matches(e))):[]}function S(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function E(t,e,i){return"string"==typeof e&&""!==e?e:""===e?t[i]:void 0}function C(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function I(t){return Boolean(t).toString()}function D(t){return!!L(t).length}function L(t){return t.target.assignedElements({flatten:!0})}function R(t){return!(!t.isPrimary||0!==t.button)}const _=(t,e,i)=>{const n=t.indexOf(e),a=0===n,o=n===t.length-1;let r;switch(i="previous"===i&&a?"last":"next"===i&&o?"first":i){case"first":r=t[0];break;case"last":r=t[t.length-1];break;case"next":r=t[n+1]||t[0];break;case"previous":r=t[n-1]||t[t.length-1]}return w(r),r}},31964:(t,e,i)=>{i.d(e,{g:()=>n});const n=()=>[2,1,1,1,3].map((t=>{let e="";for(let i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")},32544:(t,e,i)=>{function n(){}function a(t,e=!1){if(t.disabled)return t.el.setAttribute("tabindex","-1"),t.el.setAttribute("aria-disabled","true"),t.el.contains(document.activeElement)&&document.activeElement.blur(),void(t.el.click=n);t.el.click=HTMLElement.prototype.click,"function"==typeof e?t.el.setAttribute("tabindex",e.call(t)?"0":"-1"):!0===e?t.el.setAttribute("tabindex","0"):!1===e&&t.el.removeAttribute("tabindex"),t.el.removeAttribute("aria-disabled")}i.d(e,{u:()=>a})},29340:(t,e,i)=>{i.d(e,{a:()=>o,c:()=>c,s:()=>r});const n=new WeakMap,a=new WeakMap;function o(t){a.set(t,new Promise((e=>n.set(t,e))))}function r(t){n.get(t)()}function c(t){return a.get(t)}},77041:(t,e,i)=>{function n(t,e,i){const n=function(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}(t);return new n(e,i)}i.d(e,{c:()=>n})},23002:(t,e,i)=>{i.d(e,{C:()=>n,I:()=>a,S:()=>o});const n={sticky:"sticky-pos"};var a;!function(t){t.circle="circle",t.square="square",t.grip="grip"}(a||(a={}));const o={menuActions:"menu-actions"}},51124:(t,e,i)=>{i.d(e,{C:()=>n,I:()=>a,S:()=>o});const n={actions:"actions",actionsEnd:"actions--end",actionsStart:"actions--start",description:"description",handle:"handle",handleActivated:"handle--activated",highlight:"highlight",icon:"icon",iconDot:"icon-dot",label:"label",remove:"remove",title:"title",textContainer:"text-container"},a={checked:"check",remove:"x"},o={actionsEnd:"actions-end",actionsStart:"actions-start"}}}]);