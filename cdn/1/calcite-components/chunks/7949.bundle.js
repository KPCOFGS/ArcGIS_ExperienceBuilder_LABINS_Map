/*! For license information please see 7949.bundle.js.LICENSE.txt */
(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[7949,1993,9731,842,7166,5283],{1993:e=>{function t(e){return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}t.keys=()=>[],t.resolve=t,t.id=1993,e.exports=t},9705:(e,t,i)=>{"use strict";i.r(t),i.d(t,{CalciteDropdown:()=>n,defineCustomElement:()=>o});var s=i(3885);const n=s.D,o=s.d},3885:(e,t,i)=>{"use strict";i.d(t,{D:()=>h,d:()=>u});var s=i(7210),n=i(9145),o=i(4285),r=i(6472),a=i(4426),l=i(5694),c=i(6265),d=i(5545),p=i(8811);const h=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteDropdownSelect=(0,s.yM)(this,"calciteDropdownSelect",6),this.calciteDropdownBeforeClose=(0,s.yM)(this,"calciteDropdownBeforeClose",6),this.calciteDropdownClose=(0,s.yM)(this,"calciteDropdownClose",6),this.calciteDropdownBeforeOpen=(0,s.yM)(this,"calciteDropdownBeforeOpen",6),this.calciteDropdownOpen=(0,s.yM)(this,"calciteDropdownOpen",6),this.items=[],this.groups=[],this.mutationObserver=(0,d.c)("mutation",(()=>this.updateItems())),this.resizeObserver=(0,d.c)("resize",(e=>this.resizeObserverCallback(e))),this.openTransitionProp="opacity",this.guid=`calcite-dropdown-${(0,r.g)()}`,this.defaultAssignedElements=[],this.slotChangeHandler=e=>{this.defaultAssignedElements=e.target.assignedElements({flatten:!0}),this.updateItems()},this.setFilteredPlacements=()=>{const{el:e,flipPlacements:t}=this;this.filteredFlipPlacements=t?(0,o.f)(t,e):null},this.updateTriggers=e=>{this.triggers=e.target.assignedElements({flatten:!0}),this.reposition(!0)},this.updateItems=()=>{this.items=this.groups.map((e=>Array.from(e?.querySelectorAll("calcite-dropdown-item")))).reduce(((e,t)=>[...e,...t]),[]),this.updateSelectedItems(),this.reposition(!0),this.items.forEach((e=>e.scale=this.scale))},this.updateGroups=e=>{const t=e.target.assignedElements({flatten:!0}).filter((e=>e?.matches("calcite-dropdown-group")));this.groups=t,this.updateItems()},this.resizeObserverCallback=e=>{e.forEach((e=>{const{target:t}=e;t===this.referenceEl?this.setDropdownWidth():t===this.scrollerEl&&this.setMaxScrollerHeight()}))},this.setDropdownWidth=()=>{const{referenceEl:e,scrollerEl:t}=this,i=e?.clientWidth;i&&t&&(t.style.minWidth=`${i}px`)},this.setMaxScrollerHeight=()=>{const{scrollerEl:e}=this;if(!e)return;this.reposition(!0);const t=this.getMaxScrollerHeight();e.style.maxHeight=t>0?`${t}px`:"",this.reposition(!0)},this.setScrollerAndTransitionEl=e=>{this.resizeObserver.observe(e),this.scrollerEl=e,this.transitionEl=e},this.setReferenceEl=e=>{this.referenceEl=e,(0,o.c)(this,this.referenceEl,this.floatingEl),this.resizeObserver.observe(e)},this.setFloatingEl=e=>{this.floatingEl=e,(0,o.c)(this,this.referenceEl,this.floatingEl)},this.keyDownHandler=e=>{if(!e.composedPath().includes(this.referenceEl))return;const{defaultPrevented:t,key:i}=e;if(!t){if(this.open){if("Escape"===i)return this.closeCalciteDropdown(),void e.preventDefault();if(e.shiftKey&&"Tab"===i)return this.closeCalciteDropdown(),void e.preventDefault()}(0,l.i)(i)?(this.openCalciteDropdown(),e.preventDefault()):"Escape"===i&&(this.closeCalciteDropdown(),e.preventDefault())}},this.focusOnFirstActiveOrFirstItem=()=>{this.getFocusableElement(this.items.find((e=>e.selected))||this.items[0])},this.toggleOpenEnd=()=>{this.focusOnFirstActiveOrFirstItem(),this.el.removeEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.openCalciteDropdown=()=>{this.open=!this.open,this.open&&this.el.addEventListener("calciteDropdownOpen",this.toggleOpenEnd)},this.open=!1,this.closeOnSelectDisabled=!1,this.disabled=!1,this.flipPlacements=void 0,this.maxItems=0,this.overlayPositioning="absolute",this.placement=o.d,this.selectedItems=[],this.type="click",this.width=void 0,this.scale="m"}openHandler(e){if(!this.disabled)return e&&this.reposition(!0),void(0,p.o)(this);this.open=!1}handleDisabledChange(e){e||(this.open=!1)}flipPlacementsHandler(){this.setFilteredPlacements(),this.reposition(!0)}maxItemsHandler(){this.setMaxScrollerHeight()}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}handlePropsChange(){this.updateItems()}async setFocus(){await(0,c.c)(this),this.el.focus()}connectedCallback(){this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.setFilteredPlacements(),this.reposition(!0),this.open&&(this.openHandler(this.open),(0,p.o)(this)),(0,a.c)(this),this.updateItems()}componentWillLoad(){(0,c.a)(this)}componentDidLoad(){(0,c.s)(this),this.reposition(!0)}componentDidRender(){(0,a.u)(this)}disconnectedCallback(){this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect(),(0,a.d)(this),(0,o.a)(this,this.referenceEl,this.floatingEl)}render(){const{open:e,guid:t}=this;return(0,s.h)(s.AA,null,(0,s.h)("div",{class:"calcite-trigger-container",id:`${t}-menubutton`,onClick:this.openCalciteDropdown,onKeyDown:this.keyDownHandler,ref:this.setReferenceEl},(0,s.h)("slot",{"aria-controls":`${t}-menu`,"aria-expanded":(0,n.t)(e),"aria-haspopup":"menu",name:"trigger",onSlotchange:this.updateTriggers})),(0,s.h)("div",{"aria-hidden":(0,n.t)(!e),class:"calcite-dropdown-wrapper",ref:this.setFloatingEl},(0,s.h)("div",{"aria-labelledby":`${t}-menubutton`,class:{"calcite-dropdown-content":!0,[o.F.animation]:!0,[o.F.animationActive]:e},id:`${t}-menu`,role:"menu",ref:this.setScrollerAndTransitionEl},(0,s.h)("slot",{onSlotchange:this.updateGroups}))))}async reposition(e=!1){const{floatingEl:t,referenceEl:i,placement:s,overlayPositioning:n,filteredFlipPlacements:r}=this;return(0,o.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:s,flipPlacements:r,type:"menu"},e)}closeCalciteDropdownOnClick(e){!this.disabled&&(0,n.j)(e)&&this.open&&!e.composedPath().includes(this.el)&&this.closeCalciteDropdown(!1)}closeCalciteDropdownOnEvent(e){this.closeCalciteDropdown(),e.stopPropagation()}closeCalciteDropdownOnOpenEvent(e){e.composedPath().includes(this.el)||(this.open=!1)}pointerEnterHandler(){this.disabled||"hover"!==this.type||this.openCalciteDropdown()}pointerLeaveHandler(){this.disabled||"hover"!==this.type||this.closeCalciteDropdown()}calciteInternalDropdownItemKeyEvent(e){const{keyboardEvent:t}=e.detail,i=t.target;switch(t.key){case"Tab":this.open=!1,this.updateTabIndexOfItems(i);break;case"ArrowDown":(0,n.i)(this.items,i,"next");break;case"ArrowUp":(0,n.i)(this.items,i,"previous");break;case"Home":(0,n.i)(this.items,i,"first");break;case"End":(0,n.i)(this.items,i,"last")}e.stopPropagation()}handleItemSelect(e){this.updateSelectedItems(),e.stopPropagation(),this.calciteDropdownSelect.emit(),this.closeOnSelectDisabled&&"none"!==e.detail.requestedDropdownGroup.selectionMode||this.closeCalciteDropdown(),e.stopPropagation()}onBeforeOpen(){this.calciteDropdownBeforeOpen.emit()}onOpen(){this.calciteDropdownOpen.emit()}onBeforeClose(){this.calciteDropdownBeforeClose.emit()}onClose(){this.calciteDropdownClose.emit()}updateSelectedItems(){this.selectedItems=this.items.filter((e=>e.selected))}getMaxScrollerHeight(){const{maxItems:e,items:t}=this;let i,s=0,n=0;return this.groups.forEach((t=>{e>0&&s<e&&Array.from(t.children).forEach(((t,o)=>{0===o&&(isNaN(i)&&(i=t.offsetTop),n+=i),s<e&&(n+=t.offsetHeight,s+=1)}))})),t.length>e?n:0}closeCalciteDropdown(e=!0){this.open=!1,e&&(0,n.k)(this.triggers[0])}getFocusableElement(e){if(!e)return;const t=e.attributes.isLink?e.shadowRoot.querySelector("a"):e;(0,n.k)(t)}updateTabIndexOfItems(e){this.items.forEach((t=>{t.tabIndex=e!==t?-1:0}))}static get delegatesFocus(){return!0}get el(){return this}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledChange"],flipPlacements:["flipPlacementsHandler"],maxItems:["maxItemsHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],scale:["handlePropsChange"]}}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:inline-flex;flex:0 1 auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host .calcite-dropdown-wrapper{--calcite-floating-ui-z-index:var(--calcite-app-z-index-dropdown);display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index);visibility:hidden}.calcite-dropdown-wrapper .calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}.calcite-dropdown-wrapper[data-placement^=bottom] .calcite-floating-ui-anim{transform:translateY(-5px)}.calcite-dropdown-wrapper[data-placement^=top] .calcite-floating-ui-anim{transform:translateY(5px)}.calcite-dropdown-wrapper[data-placement^=left] .calcite-floating-ui-anim{transform:translateX(5px)}.calcite-dropdown-wrapper[data-placement^=right] .calcite-floating-ui-anim{transform:translateX(-5px)}.calcite-dropdown-wrapper[data-placement] .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([open]) .calcite-dropdown-wrapper{visibility:visible}:host .calcite-dropdown-content{max-block-size:45vh;inline-size:auto;overflow-y:auto;overflow-x:hidden;background-color:var(--calcite-ui-foreground-1);inline-size:var(--calcite-dropdown-width)}.calcite-trigger-container{position:relative;display:flex;flex:1 1 auto;word-wrap:break-word;word-break:break-word}@media (forced-colors: active){:host([open]) .calcite-dropdown-wrapper{border:1px solid canvasText}}:host([width=s]){--calcite-dropdown-width:12rem}:host([width=m]){--calcite-dropdown-width:14rem}:host([width=l]){--calcite-dropdown-width:16rem}:host([hidden]){display:none}[hidden]{display:none}"}},[17,"calcite-dropdown",{open:[1540],closeOnSelectDisabled:[516,"close-on-select-disabled"],disabled:[516],flipPlacements:[16],maxItems:[514,"max-items"],overlayPositioning:[513,"overlay-positioning"],placement:[513],selectedItems:[1040],type:[513],width:[513],scale:[513],setFocus:[64],reposition:[64]},[[9,"pointerdown","closeCalciteDropdownOnClick"],[0,"calciteInternalDropdownCloseRequest","closeCalciteDropdownOnEvent"],[8,"calciteDropdownOpen","closeCalciteDropdownOnOpenEvent"],[1,"pointerenter","pointerEnterHandler"],[1,"pointerleave","pointerLeaveHandler"],[0,"calciteInternalDropdownItemKeyEvent","calciteInternalDropdownItemKeyEvent"],[0,"calciteInternalDropdownItemSelect","handleItemSelect"]]]);function u(){"undefined"!=typeof customElements&&["calcite-dropdown"].forEach((e=>{"calcite-dropdown"===e&&(customElements.get(e)||customElements.define(e,h))}))}u()},4426:(e,t,i)=>{"use strict";i.d(t,{c:()=>w,d:()=>g,g:()=>n,u:()=>h});var s=i(7210);function n(){if(!s.Z5.isBrowser)return"";const e=navigator.userAgentData;return e?.brands?e.brands.map((({brand:e,version:t})=>`${e}/${t}`)).join(" "):navigator.userAgent}const o=/firefox/i.test(n()),r=o?new WeakMap:null;function a(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){const t=e.target;if(o&&!r.get(t))return;const{disabled:i}=t;i&&e.preventDefault()}const c=["mousedown","mouseup","click"];function d(e){if(o&&!r.get(e.target))return;const{disabled:t}=e.target;t&&(e.stopImmediatePropagation(),e.preventDefault())}const p={capture:!0};function h(e,t=!1){if(e.disabled)return e.el.setAttribute("tabindex","-1"),e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void u(e);f(e),"function"==typeof t?e.el.setAttribute("tabindex",t.call(e)?"0":"-1"):!0===t?e.el.setAttribute("tabindex","0"):!1===t&&e.el.removeAttribute("tabindex"),e.el.removeAttribute("aria-disabled")}function u(e){var t;e.el.click=a,(t=o?m(e):e.el)&&(t.addEventListener("pointerdown",l,p),c.forEach((e=>t.addEventListener(e,d,p))))}function m(e){return r.get(e.el)}function f(e){var t;delete e.el.click,(t=o?m(e):e.el)&&(t.removeEventListener("pointerdown",l,p),c.forEach((e=>t.removeEventListener(e,d,p))))}function w(e){if(!e.disabled||!o)return;const t=e.el.parentElement||e.el;r.set(e.el,t),u(e)}function g(e){o&&(r.delete(e.el),f(e))}},5694:(e,t,i)=>{"use strict";function s(e){return"Enter"===e||" "===e}i.d(t,{i:()=>s,n:()=>n});const n=["0","1","2","3","4","5","6","7","8","9"]},6265:(e,t,i)=>{"use strict";i.d(t,{a:()=>r,b:()=>l,c:()=>c,s:()=>a});var s=i(7210);const n=new WeakMap,o=new WeakMap;function r(e){o.set(e,new Promise((t=>n.set(e,t))))}function a(e){n.get(e)()}function l(e){return o.get(e)}async function c(e){if(await l(e),s.Z5.isBrowser)return(0,s.xE)(e),new Promise((e=>requestAnimationFrame((()=>e()))))}},5545:(e,t,i)=>{"use strict";i.d(t,{c:()=>n});var s=i(7210);function n(e,t,i){if(!s.Z5.isBrowser)return;const n=function(e){class t extends window.MutationObserver{constructor(e){super(e),this.observedEntry=[],this.callback=e}observe(e,t){return this.observedEntry.push({target:e,options:t}),super.observe(e,t)}unobserve(e){const t=this.observedEntry.filter((t=>t.target!==e));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),t.forEach((e=>this.observe(e.target,e.options)))}}return"intersection"===e?window.IntersectionObserver:"mutation"===e?t:window.ResizeObserver}(e);return new n(t,i)}}}]);