System.register(["jimu-core","jimu-ui","jimu-layouts/layout-runtime","jimu-theme"],(function(e,t){var o={},a={},n={},i={};return{setters:[function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.ContainerType=e.ContainerType,o.ControllerPosition=e.ControllerPosition,o.ErrorBoundary=e.ErrorBoundary,o.Immutable=e.Immutable,o.LayoutItemType=e.LayoutItemType,o.React=e.React,o.ReactRedux=e.ReactRedux,o.WidgetManager=e.WidgetManager,o.WidgetState=e.WidgetState,o.appActions=e.appActions,o.classNames=e.classNames,o.css=e.css,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.jsx=e.jsx,o.lodash=e.lodash,o.polished=e.polished},function(e){a.Button=e.Button,a.FloatingPanel=e.FloatingPanel,a.Icon=e.Icon,a.Loading=e.Loading,a.MobilePanel=e.MobilePanel,a.NavButtonGroup=e.NavButtonGroup,a.Popper=e.Popper,a.Tooltip=e.Tooltip,a.defaultMessages=e.defaultMessages,a.styleUtils=e.styleUtils,a.utils=e.utils},function(e){n.searchUtils=e.searchUtils},function(e){i.styled=e.styled}],execute:function(){e((()=>{var e={859:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="#000" d="M4 4h2v1H4zM8 4h2v1H8zM14 4h-2v1h2zM15 4h1v2h-1zM16 8h-1v2h1zM4 14h1v2H4zM5 6H4v2h1zM4 10h1v2H4zM16 12h-1v2h1zM16 15v1h-2v-1zM12 15h-2v1h2zM6 15h2v1H6z"></path><path fill="#000" fill-rule="evenodd" d="M18 0a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1H2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1" clip-rule="evenodd"></path></svg>'},838:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},244:e=>{"use strict";e.exports=o},496:e=>{"use strict";e.exports=n},888:e=>{"use strict";e.exports=i},321:e=>{"use strict";e.exports=a}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var l={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(l),r.d(l,{__set_webpack_public_path__:()=>F,default:()=>U});var e=r(244),t=r(321);const o="controller",a={sm:24,default:32,lg:48},n={width:150,height:120},i={width:300,height:300},s={x:70,y:70},c={x:30,y:30},d=(e.ControllerPosition.TopRight,[{name:"preventOverflow",options:{boundary:document.body,rootBoundary:document}},{name:"offset",options:{offset:[0,16]}}]);var u=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o};const p=(e,t,o)=>{let n=a[e];return t&&(n+=21),n+=2*v(e,o),n},v=(e,t)=>"circle"===t?"sm"===e?4:"default"===e?2:"lg"===e?0:void 0:6,g=e.React.forwardRef(((o,a)=>{var n;const{label:i,className:r,title:l,showLabel:s,showIndicator:c=!0,showTooltip:d=!0,labelGrowth:g=0,icon:h,marker:m,onClick:f,onMarkerClick:b,avatar:w,autoFlip:y,active:S,editDraggable:R,disabled:x,widgetid:I}=o,k=u(o,["label","className","title","showLabel","showIndicator","showTooltip","labelGrowth","icon","marker","onClick","onMarkerClick","avatar","autoFlip","active","editDraggable","disabled","widgetid"]),C=w||{},{shape:j,style:M}=C,O=u(C,["shape","style"]),z=((t,o,a,n,i)=>e.React.useMemo((()=>{const r=p(t,o,n),l=r+i,s=v(t,n);return e.css`
      display: flex;
      align-items:center;
      flex-direction: column;
      justify-content: ${o?"space-around":"center"};
      width: ${e.polished.rem(l)} !important;
      height: ${e.polished.rem(r)};
      .tool-drag-handler {
        cursor: auto;
      }
      .avatar {
        padding: ${s}px;
        position: relative;
        text-align: center;
        &:hover .marker {
          visibility: visible;
        }
        .marker {
          position: absolute;
          right: 0;
          top: 0;
          padding: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-btn-sizer {
            min-width: .625rem;
            min-height: .625rem;
          }
          visibility: hidden;
        }
      }
      ${a?".avatar.active {\n        .avatar-button, .marker {\n          transform: translateY(-7px);\n        }\n        .marker {\n          z-index: 1;\n        }\n        ::after {\n          content: '';\n          position: absolute;\n          bottom: 0;\n          left: 50%;\n          transform: translateX(-50%);\n          border: 1px solid var(--white);\n          border-radius: 3px;\n          width: 6px;\n          height: 3px;\n          background-color: var(--primary);\n          box-sizing: content-box;\n        }\n      }":""}
      .avatar-label {
        text-align: center;
        width: 100%;
        min-height: ${e.polished.rem(21)};
        cursor: default;
      }
    `}),[t,o,n,i,a]))(null==O?void 0:O.size,s,c,j,g),E=(0,e.jsx)(t.Button,Object.assign({"data-widgetid":I,icon:!0,active:S,className:(0,e.classNames)("avatar-button",{disabled:x}),ref:a},O,{style:Object.assign({borderRadius:"circle"===j?"50%":void 0},M),onClick:f}),(0,e.jsx)(t.Icon,{color:"string"!=typeof h&&(null===(n=h.properties)||void 0===n?void 0:n.color),icon:"string"!=typeof h?h.svg:h,autoFlip:y}));return(0,e.jsx)("div",Object.assign({},k,{className:(0,e.classNames)("avatar-card",`${r} avatar-card`),css:z}),(0,e.jsx)("div",{className:(0,e.classNames)({"no-drag-action":!R,active:S},"avatar tool-drag-handler")},m&&(0,e.jsx)(t.Button,{className:"marker",size:"sm",icon:!0,onClick:b},(0,e.jsx)(t.Icon,{size:8,icon:m})),d?(0,e.jsx)(t.Tooltip,{title:l||i,style:{pointerEvents:"none"}},E):E),s&&(0,e.jsx)("div",{className:(0,e.classNames)("avatar-label text-truncate",{active:S})},i))}));var h=r(496),m=r(838),f=r.n(m);const b=o=>{var a,n;const{markerEnabled:i,onMarkerClick:r,widgetid:l,showLabel:s,showIndicator:c,showTooltip:d,labelGrowth:u,avatar:p,onClick:v,active:h,editDraggable:m,className:b}=o,w=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appConfig.widgets)||void 0===t?void 0:t[l]}));return w?e.React.createElement(g,{"data-widgetid":l,widgetid:l,className:`widget-avatar-card ${b}`,showLabel:s,showIndicator:c,showTooltip:d,labelGrowth:u,avatar:p,label:w.label,icon:w.icon,autoFlip:null===(n=null===(a=null==w?void 0:w.manifest)||void 0===a?void 0:a.properties)||void 0===n?void 0:n.flipIcon,marker:i?f():"",active:h,editDraggable:m,onMarkerClick:r,onClick:v}):e.React.createElement(t.Loading,null)},w=(e,t,o)=>{let a=e,n=t;return n-a>o?n=e+o:n-a<o&&(a=0,n=a+o),[a,n]};const y=[],S=e.React.forwardRef(((o,a)=>{const{scrollRef:n,className:i,lists:r=y,createItem:l,vertical:s,itemLength:c,space:d,onChange:u,autoHideArrow:p,minLength:v=c,autoScrollEnd:g,autoSize:h,onScrollStatusChange:m}=o,f=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["scrollRef","className","lists","createItem","vertical","itemLength","space","onChange","autoHideArrow","minLength","autoScrollEnd","autoSize","onScrollStatusChange"]),b=e.hooks.useTranslation(t.defaultMessages),[S,R]=e.hooks.useForwardRef(a),{start:x,end:I,disablePrevious:k,disableNext:C,hideArrow:j,scroll:M}=(t=>{var o;const{rootRef:a,lists:n,itemLength:i,autoSize:r,vertical:l,space:s,minLength:c,autoScrollEnd:d}=t,u=null!==(o=null==n?void 0:n.length)&&void 0!==o?o:0,p=((t,o,a=0,n=a,i)=>{let r=((t,o=500,a=!1,n)=>{var i,r;const l=a?"clientHeight":"clientWidth",[s,c]=e.React.useState(null!==(r=null===(i=t.current)||void 0===i?void 0:i[l])&&void 0!==r?r:0),d=!n&&!window.jimuConfig.isInBuilder,u=e.hooks.useLatest((()=>{const e=t.current[l]||0;c(e)})),p=e.React.useMemo((()=>e.lodash.debounce((()=>{u.current()}),o,{leading:!0})),[]);return e.React.useEffect((()=>{if(d)return;const e=t.current;e&&p();const o=new ResizeObserver(p);return o.observe(e),()=>{o.disconnect(),p.cancel()}}),[t,p,d]),s})(t,500,o,!i);r+=a,r=Math.max(r,n);const l=((t=500,o=!1)=>{const a=o?"clientHeight":"clientWidth",[n,i]=e.React.useState((()=>document.body[a]-40));e.hooks.useUpdateEffect((()=>{i(document.body[a]-40)}),[a]);const r=e.React.useMemo((()=>e.lodash.debounce((()=>{i(document.body[a]-40)}),t)),[a,t]);return e.React.useEffect((()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)})),[r]),n})(500,o);return r=i?l:Math.min(r,l),r})(a,l,s,c,r),v=Math.floor(p/i),[g,h]=e.React.useState(w(0,0,v)[0]),[m,f]=e.React.useState(w(0,0,v)[1]),b=e.hooks.useLatest(g),y=e.hooks.useLatest(m),S=m-g>=u,R=0===g,x=m===u;e.React.useEffect((()=>{if(0===p)return;const[e,t]=w(y.current,b.current,v);h(e),f(t)}),[v,p,y,b]);const I=e.hooks.useEventCallback(((e,t=!0)=>{const o=t?1:v;let a=0,n=0;e?(a=g-o,a<0?(a=0,n=a+v):n=m-o):(n=m+o,n>u?(n=u,a=n-v):a=g+o),h(a),f(n)})),k=e.React.useRef([]),C=e.hooks.useEventCallback((()=>{const e=u>0&&k.current.length>0&&n[n.length-1]!==k.current[k.current.length-1];if(d&&e&&k.current.length>u){let e=0,t=0;t=u,e=t-v,e=Math.max(0,e),h(e),f(t)}}));return e.React.useEffect((()=>{C(),k.current=n}),[n,C]),{start:g,end:m,disablePrevious:R,disableNext:x,hideArrow:S,scroll:I}})({rootRef:S,lists:r,itemLength:c,autoSize:h,vertical:s,space:d,minLength:v,autoScrollEnd:g}),O=r.slice(x,I),z=((t,o,a,n,i)=>e.css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button.previous, button.next {
      flex-shrink: 0;
      display: ${i?"none":"block"};
    }
    .root {
      flex-direction: ${t?"column":"row"};
      width: 100%;
      height: 100%;
      min-width: ${e.polished.rem(a)};
      max-height: ${n?"100%":"calc(100% - 20px)"};
      max-width: ${n?"100%":"calc(100% - 20px)"};
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      align-items: center;
      .scroll-list-item {
        &:not(:first-of-type) {
          margin-top: ${t?e.polished.rem(o):"unset"};
          margin-left: ${t?"unset":e.polished.rem(o)};
        }
      }
    }
`)(s,d,v,h,j);return e.React.useEffect((()=>{null==m||m(j,k,C)}),[C,k,j,m]),e.React.useEffect((()=>{t.utils.setRef(n,M)}),[M,n]),(0,e.jsx)(t.NavButtonGroup,Object.assign({},f,{css:z,type:"tertiary",vertical:s,onChange:e=>{null==u||u(e),M(e,!0)},disablePrevious:k,disableNext:C,previousAriaLabel:b("previous"),nextAriaLabel:b("next"),className:(0,e.classNames)("scroll-list",i)}),(0,e.jsx)("div",{className:"root scroll-list-root",ref:R},r.map((t=>{const o=!O.includes(t);return l(t,(0,e.classNames)("scroll-list-item",{"d-none":o}))}))))}));r(859),(0,r(888).styled)("div",{shouldForwardProp:e=>!["vertical","space"].includes(e)})`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${e=>e.vertical?"column":"row"};
  .avatar-placeholder {
    &:not(:first-of-type) {
      margin-top: ${t=>t.vertical?e.polished.rem(t.space):"unset"};
      margin-left: ${t=>t.vertical?"unset":e.polished.rem(t.space)};
    }
  }
`,(e=>{const t=[];for(;e>0;)t.push(e),e--})(3);function R(o){const{widgetId:a,canCrossLayoutBoundary:n,showMask:i,className:r,layoutId:l,layoutItemId:s}=o,c=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(o[a[n]]=e[a[n]])}return o}(o,["widgetId","canCrossLayoutBoundary","showMask","className","layoutId","layoutItemId"]),d=e.hooks.useCancelablePromiseMaker(),[u,p]=e.React.useState(null),[v,g]=e.React.useState(""),[h,m]=e.React.useState("");e.React.useEffect((()=>{p(null),g("");const t=d((t=>{var o,a;if(t)return(null===(a=null===(o=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===o?void 0:o[t])||void 0===a?void 0:a.isClassLoaded)?Promise.resolve(e.WidgetManager.getInstance().getWidgetClass(t)):e.WidgetManager.getInstance().loadWidgetClass(t)})(a));t.then((e=>{p(e),g(a)}),(e=>{var t;m(null!==(t=null==e?void 0:e.message)&&void 0!==t?t:e)}))}),[d,a]);const f=e.React.useCallback((()=>{var t,o;h||window.jimuConfig.isBuilder||(null===(o=null===(t=(0,e.getAppStore)().getState().widgetsRuntimeInfo)||void 0===t?void 0:t[a])||void 0===o?void 0:o.state)===e.WidgetState.Active||(0,e.getAppStore)().dispatch(e.appActions.activateWidget(a))}),[h,a]),b=(0,e.classNames)("widget-renderer w-100 h-100",r),w=(t=>e.React.useMemo((()=>e.css`
      overflow: ${t?"visible":"hidden"};
      position: relative;
      .widget-content {
        position: relative;
        height: 100%;
        width: 100%;
        z-index: 0;
      }
      .widget-mask {
        position: absolute;
        background: transparent;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
      }
  `),[t]))(n);return(0,e.jsx)("div",Object.assign({css:w,className:b,onMouseDownCapture:f,"data-widgetid":v},c),(0,e.jsx)("div",{className:"widget-content p-1"},h,!h&&u&&(0,e.jsx)(e.ErrorBoundary,null,(0,e.jsx)(u,{widgetId:v,layoutId:l,layoutItemId:s})),!h&&!u&&(0,e.jsx)(t.Loading,null)),i&&(0,e.jsx)("div",{className:"widget-mask"}))}const x=(t,o)=>e.ReactRedux.useSelector((e=>{var a,n,i,r;const l=null===(i=null===(n=null===(a=e.appConfig.widgets)||void 0===a?void 0:a[t])||void 0===n?void 0:n.layouts)||void 0===i?void 0:i[o],s=e.browserSizeMode,c=e.appConfig.mainSizeMode,d=h.searchUtils.findLayoutId(l,s,c);return null===(r=e.appConfig.layouts)||void 0===r?void 0:r[d]})),I=(e,t)=>{if(null!=(null==e?void 0:e.content)&&t)return Object.keys(e.content).find((o=>e.content[o].widgetId===t))},k=t=>[e.WidgetState.Opened,e.WidgetState.Active].includes(t.state),C=(0,e.Immutable)({}),j=a=>{var n,i,r;const{controllerId:l,containerMapId:s,onClose:c,widgets:d=C}=a,u=null!==(n=Object.keys(d).find((e=>k(d[e]))))&&void 0!==n?n:"",p=null===(r=null===(i=(0,e.getAppStore)().getState().appConfig.widgets)||void 0===i?void 0:i[u])||void 0===r?void 0:r.label,v=x(l,o),g=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==v?void 0:v.id,i=I(v,o),r=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;r&&r.layoutId===n&&r.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[v]);return e.React.createElement(t.MobilePanel,{className:(0,e.classNames)({"d-none":!u}),mapWidgetId:s,title:p,open:!!u,keepMount:!0,onClose:e=>{null==e||e.stopPropagation(),null==e||e.nativeEvent.stopImmediatePropagation(),null==c||c(u)}},Object.entries(d).map((([t,o])=>{if(void 0===o.state)return null;const a=k(o);return e.React.createElement(R,{key:t,widgetId:t,onClick:e=>{g(e,t)},className:(0,e.classNames)({"d-none":!a})})})))},M=e=>document.querySelector(`.widget-controller .avatar-card[data-widgetid='${e}']`),O=(0,e.Immutable)({}),z=a=>{const{controllerId:r,widgets:l=O,root:s,placement:c,sizes:u,onClose:p}=a,v=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),g=x(r,o),h=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==g?void 0:g.id,i=I(g,o),r=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;r&&r.layoutId===n&&r.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[g]),[m,f]=e.React.useState(u),b=(e,t)=>{var o;t.stopPropagation(),null==p||p(e);const a=null===(o=M(e))||void 0===o?void 0:o.querySelector("button");null==a||a.focus()};return e.React.createElement(e.React.Fragment,null,Object.entries(l).map((([o,a])=>{var r,l;if(void 0===a.state)return null;const u=a.state!==e.WidgetState.Closed,p=null!==(r=m[o])&&void 0!==r?r:i,g=null===(l=null==v?void 0:v[o])||void 0===l?void 0:l.label;let w=M(o);return w&&w.offsetParent||(w=null==s?void 0:s.querySelector(".avatar-card")),e.React.createElement(t.Popper,{key:o,style:{maxWidth:"100vw"},modifiers:d,className:(0,e.classNames)({"d-none":!u},"single-widget-launcher"),headerTitle:g,activateOnlyForHeader:!0,minSize:n,dragBounds:"body",defaultSize:p,onResize:e=>{var t,a;t=o,a=e,f((e=>e.set(t,a)))},onHeaderClose:e=>{b(o,e)},showHeaderCollapse:!0,floating:!0,open:!0,autoFocus:u,reference:w,toggle:e=>{((e,t)=>{"Escape"===(null==t?void 0:t.key)&&b(e,t)})(o,e)},onClick:e=>{h(e,o)},placement:c},e.React.createElement(R,{widgetId:o}))})))};var E;!function(e){e.Stack="STACK",e.SideBySide="SIDEBYSIDE"}(E||(E={}));const A=()=>document.body.getBoundingClientRect(),L=(0,e.Immutable)({}),N=a=>{const{mode:n,start:r,spaceX:l,spaceY:s,sizes:c,controllerId:d,widgets:u=L,onClose:p}=a,v=e.ReactRedux.useSelector((e=>e.appConfig.widgets)),[g,h]=e.React.useState(c),m=e.React.useMemo((()=>((t,o)=>{let a=(0,e.Immutable)({});return Object.keys(t).forEach((e=>{a=a.set(e,o[e]||i)})),a})(u,g)),[g,u]),f=x(d,o),b=e.React.useCallback(((t,o)=>{var a;t.stopPropagation();const n=null==f?void 0:f.id,i=I(f,o),r=null===(a=(0,e.getAppStore)().getState().appRuntimeInfo)||void 0===a?void 0:a.selection;r&&r.layoutId===n&&r.layoutItemId===i||(0,e.getAppStore)().dispatch(e.appActions.selectionChanged({layoutId:n,layoutItemId:i}))}),[f]),w=e=>{const t=M(e),o=null==t?void 0:t.querySelector("button");null==o||o.focus()},y=((t,o,a,n,i)=>{const[r,l]=e.React.useState((()=>A())),[s,c]=e.React.useState([a]),d=e.React.useRef(0);e.React.useEffect((()=>{const e=()=>{const e=A();l(e)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const u=(e,t)=>e.right>=t.right||e.left<=t.left,p=(e,t)=>e.bottom>=t.bottom||e.top<=t.top,v=e.hooks.useEventCallback((e=>{if(d.current++,d.current>7)return console.warn(`Number of cycles: ${d.current}.You may have opened too many panels, and now there is not enough space for them to be placed without overstepping and blocking`),e;const o=((e,t)=>!(!e||!t)&&(u(e,t)||p(e,t)))(e,r);if(!o)return e;const{width:n,height:l}=e;let{left:s,top:c,right:g,bottom:h}=e;if(o){const e=u({left:s,top:c,right:g,bottom:h,width:n,height:l},r),o=p({left:s,top:c,right:g,bottom:h,width:n,height:l},r);e&&(s=t===E.SideBySide?a.x:r.right-n),o||t!==E.SideBySide||(c+=i),g=s+n,h=c+l}return v({left:s,top:c,right:g,bottom:h,width:n,height:l})}));return e.React.useEffect((()=>{const e=[];let r={width:0,height:0};Object.keys(o).forEach(((l,s)=>{const c=o[l],u=0!==s?e[s-1]:a;let{x:p,y:g}=u;if(t===E.SideBySide){const{width:e}=r;p+=n>0?e:-e,p+=0!==s?n:0}else t===E.Stack&&(p+=0!==s?n:0,g+=0!==s?i:0);const h={left:p,top:g,right:p+c.width,bottom:g+c.height,width:c.width,height:c.height},{left:m,top:f}=v(h);d.current>7?(p=u.x,g=u.y):(p=m,g=f),d.current=0,e.push({x:p,y:g}),r=c})),c(e)}),[t,a,n,i,r.width,r.height,v,o]),s})(n,m,r,l,s);return e.React.createElement(e.React.Fragment,null,Object.entries(u).map((([o,a],n)=>{var i;if(void 0===a.state)return null;const r=k(a),l=y[n];if(!l)return null;const s=m[o],c=null===(i=null==v?void 0:v[o])||void 0===i?void 0:i.label;return e.React.createElement(t.FloatingPanel,{key:o,style:{maxWidth:"100vw"},headerTitle:c,defaultPosition:l,defaultSize:s,className:(0,e.classNames)({"d-none":!r},"multiple-widget-launcher"),showHeaderClose:!0,showHeaderCollapse:!0,activateOnlyForHeader:!0,autoFocus:r,dragBounds:"body",onClick:e=>{b(e,o)},onResize:e=>{var t,a;t=o,a=e,h(g.set(t,a))},onLeave:()=>{w(o)},onHeaderClose:e=>{((e,t)=>{null==t||t.stopPropagation(),null==p||p(e),w(e)})(o,e)}},e.React.createElement(R,{widgetId:o}))})))},$=t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=Object.values(null!=o?o:{}).find((e=>{var o;return null===(o=e.views)||void 0===o?void 0:o.includes(t)}));return null==a?void 0:a.id},P=t=>{var a,n,r,l,d,u,v,g,m,f,w,y,R,I,C,O,E;const{id:A,config:L,version:P,autoSize:T}=t,B=null!==(n=null===(a=null==L?void 0:L.behavior)||void 0===a?void 0:a.arrangement)&&void 0!==n?n:"floating",W=null===(r=L.behavior)||void 0===r?void 0:r.onlyOpenOne,H=null===(l=L.behavior)||void 0===l?void 0:l.openStarts,U=null===(d=L.behavior)||void 0===d?void 0:d.size,F=null===(u=L.behavior)||void 0===u?void 0:u.vertical,V=null===(v=L.behavior)||void 0===v?void 0:v.displayType,G=null===(g=null==L?void 0:L.appearance)||void 0===g?void 0:g.card,_=((e,t)=>{const o=null==e?void 0:e.showLabel,a=null==e?void 0:e.labelGrowth,n=null==e?void 0:e.avatar.size,i=null==e?void 0:e.avatar.shape;return p(n,o,i)+t+a})(null===(m=null==L?void 0:L.appearance)||void 0===m?void 0:m.card,null===(f=null==L?void 0:L.appearance)||void 0===f?void 0:f.space),D=null===(R=null===(y=null===(w=(0,e.getAppStore)())||void 0===w?void 0:w.getState())||void 0===y?void 0:y.appContext)||void 0===R?void 0:R.isRTL,Y=null===(O=null===(C=null===(I=(0,e.getAppStore)())||void 0===I?void 0:I.getState())||void 0===C?void 0:C.appContext)||void 0===O?void 0:O.isInBuilder,q=e.React.useMemo((()=>D?Object.assign(Object.assign({},s),{x:document.body.clientWidth-i.width-s.x}):s),[D]),X=e.React.useMemo((()=>D?Object.assign(Object.assign({},c),{x:-c.x}):c),[D]),K=F?"right-start":"bottom",J=(t=>{const o=e.ReactRedux.useSelector((e=>{var t;return null===(t=e.appRuntimeInfo)||void 0===t?void 0:t.sectionNavInfos}));return((t,o)=>{const a=(t=>{const o=(0,e.getAppStore)().getState().appConfig.sections,a=t?Object.values(t).map((e=>e.currentViewId)):[],n=a.map($),i=Object.values(null!=o?o:{}).map((e=>{var t;if(!n.includes(e.id))return null===(t=e.views)||void 0===t?void 0:t[0]})).filter((e=>!!e)),r=a;return i.forEach((e=>{a.includes(e)||r.push(e)})),r})(t),n=(0,e.getAppStore)().getState().browserSizeMode,i=(0,e.getAppStore)().getState().appConfig,r=h.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Widget,n);let l=!0;if(!r)return l;if(r.type===e.ContainerType.View)if(a.includes(r.id)){const t=r.id,o=$(t),s=h.searchUtils.getContentContainerInfo(i,o,e.LayoutItemType.Section,n);s&&s.type===e.ContainerType.View&&(a.includes(s.id)||(l=!1))}else l=!1;return l})(o,t)})(A),Q=(t=>e.ReactRedux.useSelector((e=>{var o,a,n,i;const r=e.appConfig,l=e.browserSizeMode,s=r.widgets[t].parent;let c=null!==(o=s[l])&&void 0!==o?o:[];0===c.length&&(c=null!==(a=s[r.mainSizeMode])&&void 0!==a?a:[]);const d=null===(n=c[0])||void 0===n?void 0:n.layoutId,u=h.searchUtils.getWidgetIdThatUseTheLayoutId(r,d),p=r.widgets[u];return"arcgis-map"===(null===(i=null==p?void 0:p.manifest)||void 0===i?void 0:i.name)?p.id:""})))(A),Z=e.hooks.useCheckSmallBrowserSizeMode(),ee=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.currentPageId)),te=W&&"floating"===B,oe=!W&&"floating"===B,ae=e.React.useRef(null),ne=((t,o)=>{const a=e.ReactRedux.useSelector((e=>e.widgetsRuntimeInfo)),n=(e=>{const t=(e=>{var t,o,a;let n=(null!==(a=null===(o=null===(t=null==e?void 0:e.order)||void 0===t?void 0:t.asMutable)||void 0===o?void 0:o.call(t))&&void 0!==a?a:[]).map((t=>{var o;return null===(o=e.content)||void 0===o?void 0:o[t]}));return n=n.filter((e=>e&&e.id&&e.widgetId&&!e.isPending)),n.map((e=>e.id))})(e);return t.map((t=>{var o,a;return null===(a=null===(o=e.content)||void 0===o?void 0:o[t])||void 0===a?void 0:a.widgetId}))})(x(t,o));return e.React.useMemo((()=>{const t={};return n.forEach((o=>{var n;const i=null!==(n=null==a?void 0:a[o])&&void 0!==n?n:{isClassLoaded:!1};t[o]=(0,e.Immutable)(i)})),(0,e.Immutable)(t)}),[n,a])})(A,o),ie=Object.keys(ne),re=ie.filter((e=>k(ne[e]))),le=e.React.useCallback((t=>{var o;const a=null===(o=t.currentTarget.dataset)||void 0===o?void 0:o.widgetid;a&&(Z||W?((0,e.getAppStore)().dispatch(e.appActions.closeWidgets(re)),re.includes(a)||(0,e.getAppStore)().dispatch(e.appActions.openWidget(a,A))):re.includes(a)?(0,e.getAppStore)().dispatch(e.appActions.closeWidget(a)):(0,e.getAppStore)().dispatch(e.appActions.openWidget(a,A)))}),[Z,W,re,A]),se=t=>{if(!t)return;(0,e.getAppStore)().dispatch(e.appActions.closeWidget(t));const o=M(t);null==o||o.focus()};e.hooks.useUpdateEffect((()=>{(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(ie))}),[P,ee]),e.hooks.useUpdateEffect((()=>{J||(0,e.getAppStore)().dispatch(e.appActions.closeWidgets(re))}),[J]),e.React.useEffect((()=>{Y&&(0,e.getAppStore)().dispatch(e.appActions.resetWidgetsState(ie)),!Y&&(null==H?void 0:H.length)&&J&&setTimeout((()=>{(0,e.getAppStore)().dispatch(e.appActions.openWidgets(H,A))}),1e3)}),[]);const ce=e.React.useCallback(((t,o)=>{const a=re.includes(t);return e.React.createElement(b,Object.assign({},G,{key:t,className:`${o} layout-item`,widgetid:t,markerEnabled:!1,active:a,onClick:le}))}),[G,le,re]);return e.React.createElement("div",{className:"controller-runtime w-100 h-100"},Z&&e.React.createElement(j,{containerMapId:Q,controllerId:A,widgets:ne,onClose:se}),!Z&&e.React.createElement(e.React.Fragment,null,te&&e.React.createElement(z,{sizes:U,root:ae.current,placement:K,controllerId:A,widgets:ne,onClose:se}),oe&&e.React.createElement(N,{sizes:U,mode:V,start:q,spaceX:X.x,spaceY:X.y,controllerId:A,widgets:ne,onClose:se})),e.React.createElement(S,{ref:ae,className:"runtime--scroll-list",vertical:F,itemLength:_,space:null===(E=L.appearance)||void 0===E?void 0:E.space,autoHideArrow:!0,autoSize:T,lists:ie,createItem:ce}))},T={behavior:{onlyOpenOne:!0,openStarts:[],displayType:"STACK",vertical:!1,size:{}},appearance:{space:0,advanced:!1,card:{showLabel:!1,labelGrowth:10,showTooltip:!0,showIndicator:!1,avatar:{type:"primary",size:"default",shape:"circle"}}}};class B extends e.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.0.0",description:"Version manager for release 1.0.0",upgrader:e=>{if(!e)return T;if(e.behavior&&e.appearance)return e;{let o=e;return e.behavior||(o=o.setIn(["behavior","openStarts"],[]),o=o.setIn(["behavior","onlyOpenOne"],e.onlyOpenOne),o=o.setIn(["behavior","displayType"],e.displayType),o=o.setIn(["behavior","vertical"],e.vertical),o=o.setIn(["behavior","size"],e.size),o=o.without(["onlyOpenOne","displayType","size"])),e.appearance||(o=o.setIn(["appearance","advanced"],!1),e.vertical?o=o.setIn(["appearance","space"],e.space):(o=o.setIn(["appearance","space"],0),o=o.setIn(["appearance","card","labelGrowth"],e.space)),o=o.setIn(["appearance","card","showLabel"],e.showLabel),o=o.setIn(["appearance","card","avatar","size"],"SMALL"===(t=e.iconSize)?"sm":"MEDIUM"===t?"default":"LARGE"===t?"lg":t),o=o.setIn(["appearance","card","avatar","shape"],e.iconStyle),o=o.setIn(["appearance","card","avatar","type"],"primary"),o=o.without(["space","showLabel","iconSize","iconStyle","vertical"])),o}var t}},{version:"1.1.0",description:"Version manager for release 1.1.0",upgrader:e=>{var t,o;if(!e)return T;let a=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card;const n=null==a?void 0:a.variants,i=null===(o=null==a?void 0:a.avatar)||void 0===o?void 0:o.type;let r=e;if(n){const e=((e,t="primary")=>null==e?void 0:e[t])(n,i);a=null==a?void 0:a.set("variant",e).without("variants"),r=r.setIn(["appearance","card"],a)}return r}},{version:"1.6.0",description:"Version manager for release 1.6.0",upgrader:e=>{var t;if(!e)return T;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showTooltip",!0),a=a.setIn(["appearance","card"],o)),a}},{version:"1.14.0",description:"Version manager for release 1.14.0",upgrader:e=>{var t;if(!e)return T;let o=null===(t=null==e?void 0:e.appearance)||void 0===t?void 0:t.card,a=e;return o&&(o=o.set("showIndicator",!1),a=a.setIn(["appearance","card"],o)),a}}]}}const W=new B,H=o=>{var n,i,r,l;const{builderSupportModules:s,id:c,config:d,onInitResizeHandler:u,autoWidth:p,autoHeight:v}=o,g=null===(n=d.behavior)||void 0===n?void 0:n.onlyOpenOne,h=null===(i=d.behavior)||void 0===i?void 0:i.displayType,m=null===(r=null==d?void 0:d.behavior)||void 0===r?void 0:r.vertical,f=null==d?void 0:d.appearance.advanced,b=null===(l=null==d?void 0:d.appearance)||void 0===l?void 0:l.card.variant,w=m?v:p,y=e.ReactRedux.useSelector((e=>e.appContext.isInBuilder)),S=e.ReactRedux.useSelector((e=>e.appRuntimeInfo.appMode)),R=e.ReactRedux.useSelector((e=>e.browserSizeMode));e.React.useEffect((()=>{null==u||u(null,null,(()=>{C((e=>e+1))}))}),[u]);const x=y&&S!==e.AppMode.Run,I=x&&s.widgetModules.Builder,[k,C]=e.React.useState(0);e.hooks.useUpdateEffect((()=>{C((e=>e+1))}),[g,h,S,R]);const j=((t,o,n)=>{const i=t?0:a.sm,r=t?0:a.sm,l=o?"5px":0,s=n?"5px":0;return e.React.useMemo((()=>e.css`
      overflow: visible;
      white-space: nowrap;
      .controller-container {
        width: 100%;
        height: 100%;
        padding: ${s} ${l};
        min-width:  ${i}px;
        min-height: ${r}px;
      }
    `),[l,s,i,r])})(w,p,v),M=((o,a)=>{const n=null==o?void 0:o.default,i=null==o?void 0:o.active,r=null==o?void 0:o.hover;return e.React.useMemo((()=>a?e.css`
      .avatar-card:not(.add-widget-btn) {
        ${n&&e.css`
          > .avatar {
            > .avatar-button {
              background-color: ${n.bg};
              border-color: ${n.bg};
            }
          }
          > .avatar-label {
            color: ${n.color};
            font-style: ${(null==n?void 0:n.italic)?"italic":"normal"};
            font-weight: ${(null==n?void 0:n.bold)?"bold":"normal"};
            text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:n.underline,strike:n.strike})};
          }
        `}
        ${r&&e.css`
          &:hover {
            > .avatar {
              > .avatar-button {
                background-color: ${r.bg};
                border-color: ${r.bg};
              }
            }
            > .avatar-label {
              color: ${r.color};
              font-style: ${(null==r?void 0:r.italic)?"italic":"normal"};
              font-weight: ${(null==r?void 0:r.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:r.underline,strike:r.strike})};
            }
          }
        `}
        ${i&&e.css`
          > .avatar {
            > .avatar-button {
              &:not(:disabled):not(.disabled):active,
              &:not(:disabled):not(.disabled).active,
              &[aria-expanded='true'] {
                background-color: ${i.bg};
                border-color: ${i.bg};
              }
            }
            &::after {
              background-color: ${i.bg};
            }
          }
          > .avatar-label {
            &:not(:disabled):not(.disabled):active,
            &:not(:disabled):not(.disabled).active {
              color: ${i.color};
              font-style: ${(null==i?void 0:i.italic)?"italic":"normal"};
              font-weight: ${(null==i?void 0:i.bold)?"bold":"normal"};
              text-decoration: ${t.styleUtils.toCSSTextUnderLine({underline:i.underline,strike:i.strike})};
            }
          }
        `}
      }
    `:e.css``),[a,n,i,r])})(b,f);return(0,e.jsx)("div",{className:"widget-controller jimu-widget rw-controller",css:[j,M]},(0,e.jsx)("div",{className:"controller-container"},!x&&(0,e.jsx)(P,{id:c,version:k,config:d,autoSize:w}),x&&I&&(0,e.jsx)(I,{id:c,version:k,config:d,autoSize:w})))};H.versionManager=W;const U=H;function F(e){r.p=e}})(),l})())}}}));