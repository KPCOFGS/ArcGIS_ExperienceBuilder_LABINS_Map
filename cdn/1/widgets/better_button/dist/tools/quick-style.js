System.register(["jimu-core","jimu-ui"],(function(e,t){var r={},o={};return{setters:[function(e){r.Immutable=e.Immutable,r.appActions=e.appActions,r.getAppStore=e.getAppStore,r.i18n=e.i18n},function(e){o.defaultMessages=e.defaultMessages}],execute:function(){e((()=>{var e={90:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M15.551.25c.45.356.58.989.307 1.496L11.696 9.49a1.967 1.967 0 0 1-2.958.621l-.996-.787a2.018 2.018 0 0 1-.12-3.054l6.42-5.959a1.16 1.16 0 0 1 1.509-.06m-.61.79a.18.18 0 0 0-.23.009l-6.42 5.96a1.01 1.01 0 0 0 .06 1.527l.997.787a.984.984 0 0 0 1.479-.31l4.162-7.745a.18.18 0 0 0-.047-.229M6.733 9.4l1.43 1.215a2.794 2.794 0 0 1-.507 4.602q-3.439 1.794-7.553-.522a.2.2 0 0 1 .087-.374q2.77-.164 2.771-2.334c0-1.063.299-1.96 1.18-2.59.88-.631 1.832-.457 2.592.003m.633 4.802c.125-.088.253-.178.353-.295a1.793 1.793 0 0 0-.205-2.53l-1.43-1.214a1 1 0 0 0-1.296-.002c-.56.472-.825 1.055-.825 1.826 0 1.22-1.19 2.713-1.987 2.713 1.3.517 3.745.799 5.212-.368q.086-.067.178-.13" clip-rule="evenodd"></path></svg>'},244:e=>{"use strict";e.exports=r},321:e=>{"use strict";e.exports=o}},t={};function a(r){var o=t[r];if(void 0!==o)return o.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,a),n.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{"use strict";a.r(n),a.d(n,{default:()=>l});var e=a(244),t=a(321),r=a(90),o=a.n(r);class l{constructor(){this.index=2,this.id="button-quick-style"}visible(e){return!0}getGroupId(){return null}getTitle(){const r=e.i18n.getIntl("_jimu");return r?r.formatMessage({id:"quickStyle",defaultMessage:t.defaultMessages.quickStyle}):"Quick style"}checked(t){const r=t.layoutItem.widgetId;return!!((0,e.getAppStore)().getState().widgetsState[r]||(0,e.Immutable)({})).showQuickStyle}getIcon(){return o()}onClick(t){const r=t.layoutItem.widgetId,o=!((0,e.getAppStore)().getState().widgetsState[r]||(0,e.Immutable)({})).showQuickStyle;(0,e.getAppStore)().dispatch(e.appActions.widgetStatePropChange(r,"showQuickStyle",o))}getSettingPanel(){return null}}})(),n})())}}}));