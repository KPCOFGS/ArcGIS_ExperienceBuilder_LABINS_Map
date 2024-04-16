System.register(["jimu-core","jimu-ui","jimu-ui/advanced/setting-components","jimu-ui/basic/list-tree","jimu-core/react","jimu-arcgis"],(function(e,t){var a={},s={},o={},i={},n={},l={};return{setters:[function(e){a.React=e.React,a.classNames=e.classNames,a.css=e.css,a.defaultMessages=e.defaultMessages,a.getAppStore=e.getAppStore,a.hooks=e.hooks,a.jsx=e.jsx,a.polished=e.polished},function(e){s.Button=e.Button,s.Label=e.Label,s.Option=e.Option,s.Radio=e.Radio,s.Select=e.Select,s.TextInput=e.TextInput,s.defaultMessages=e.defaultMessages},function(e){o.MapWidgetSelector=e.MapWidgetSelector,o.SettingRow=e.SettingRow,o.SettingSection=e.SettingSection,o.SidePopper=e.SidePopper},function(e){i.List=e.List,i.TreeItemActionType=e.TreeItemActionType},function(e){n.Fragment=e.Fragment},function(e){l.basemapUtils=e.basemapUtils,l.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules}],execute:function(){e((()=>{var e={42957:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M16 2.443 5.851 14 0 8.115l1.45-1.538 4.31 4.334L14.463 1 16 2.443Z" clip-rule="evenodd"></path></svg>'},748:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5c0 .527-.074 1.036-.212 1.518l.912.438a6.5 6.5 0 1 0-6.586 4.533l-.077-1.008A5.5 5.5 0 1 1 12 6.5Zm-9 0a3.501 3.501 0 0 0 2.88 3.445L5.8 8.901a2.501 2.501 0 1 1 3.194-2.224l.949.456A3.5 3.5 0 1 0 3 6.5ZM15.5 11l-5 1-3 4-1-9.5 9 4.5Zm-5.57.094-1.702 2.269-.542-5.152 4.76 2.38-2.517.503Z" clip-rule="evenodd"></path></svg>'},73982:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0V1.5Zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062Zm-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643L3.176 2.436ZM6.244 10.6H5.43h.814ZM.961 9.8h4.88c.211 0 .359.19.359.4a1.8 1.8 0 0 0 3.555.4h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755c.03-.129.045-.263.045-.4 0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228L.961 9.8Zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356h9.544Z" clip-rule="evenodd"></path></svg>'},55339:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746L8.746 8Z"></path></svg>'},30224:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Zm-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707l-4.137-4.137Z" clip-rule="evenodd"></path></svg>'},26826:e=>{"use strict";e.exports=l},48891:e=>{"use strict";e.exports=a},51315:e=>{"use strict";e.exports=n},30726:e=>{"use strict";e.exports=s},77756:e=>{"use strict";e.exports=o},59587:e=>{"use strict";e.exports=i}},t={};function r(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="";var c={};return r.p=window.jimuConfig.baseUrl,(()=>{"use strict";r.r(c),r.d(c,{__set_webpack_public_path__:()=>P,default:()=>T});var e,t=r(48891),a=r(30726),s=r(77756);function o(e){return t.css`
    &.jimu-widget-basemap-setting {
      display: flex;
      flex-flow: column;
      overflow-y: hidden;
      .custom-list-container {
        position: relative;
        flex: 1;
        overflow: auto;
      }

      .empty-placeholder {
        display: flex;
        flex-flow: column;
        justify-content: center;
        height: calc(100% - 96px);
        overflow: hidden;
        .empty-placeholder-inner {
          padding: 0px 20px;
          flex-direction: column;
          align-items: center;
          display: flex;
          .empty-placeholder-text {
            color: ${e.colors.palette.dark[500]};
            font-size: ${t.polished.rem(14)};
            margin-top: 16px;
            text-align: center;
          }
          .empty-placeholder-icon {
            color: ${e.colors.palette.dark[200]};
          }
        }
      }

      .basemap-list-item {
        display: flex;
        width: calc(100% - 8px);
        align-items: center;
        height: ${t.polished.rem(76)};
        padding: 0.5rem 0;
        cursor: move;
        .basemap_thumb {
          width: ${t.polished.rem(80)};
          height: ${t.polished.rem(60)};
        }
        .basemap-title {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          font-size: ${t.polished.rem(13)};
          line-height: ${t.polished.rem(17)};
          font-weight: 400;
          width: calc(100% - 120px);
          margin: 0 ${t.polished.rem(8)};
        }
        .del-btn {
          opacity: 0;
          &:focus {
            opacity: 1;
          }
        }

        &:hover,&:focus,&:active {
          .del-btn {
            opacity: 1;
          }
        }
      }

      .jimu-tree-item__body button {
        z-index: 1;
      }
    }
  `}function i(e){return t.css`
  &.basemap-setting-popper {
    .search-row{
      margin-top: 12px !important;
    }
    .empty-placeholder{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      .empty-placeholder-text, .empty-placeholder-icon{
        display: table;
        margin: 0 auto;
      }
      .empty-placeholder-text{
        color: ${e.colors.palette.dark[500]};
        font-family: 'Avenir Next';
        font-style: normal;
        font-weight: 500;
        line-height: ${t.polished.rem(19)};;
        font-size: ${t.polished.rem(14)};
        width: ${t.polished.rem(228)};
        margin-top: 16px;
        text-align: center;
      }
      .empty-placeholder-icon{
        color: ${e.colors.palette.dark[200]};
      }
    }
    .item-border-color-selected {
      outline: ${t.polished.rem(2)} solid ${e.colors.palette.primary[700]};
    }
    .basemap-items {
      width: 100%;
      .basemap-item {
        position: relative;
        width: calc(50% - 6px);
        min-width:  calc(50% - 6px);
        padding: 0;
        border: 0;
        color: ${e.colors.palette.dark[200]};
        border-color: transparent;
        background-color: ${e.colors.palette.light[500]};
        &:nth-of-type(2n) {
          margin-left: 6px;
        }
        &:nth-of-type(2n+1) {
          margin-right: 6px;
        }
        align-items: center;

        margin-bottom: ${t.polished.rem(10)};
        &:hover {
          outline: ${t.polished.rem(2)} solid ${e.colors.palette.primary[700]};
        }
        img {
          width: 100%;
          height: ${t.polished.rem(81)};
          background-color: ${e.colors.palette.light[600]};
        }
        .basemap-title {
          overflow: hidden;
          font-size: ${t.polished.rem(12)};
          line-height: ${t.polished.rem(16)};
          font-weight: 400;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          width: calc(100% - 8px);
          height: ${t.polished.rem(33)};
          margin: 4px 4px 8px 4px;
          color: ${e.colors.palette.dark[800]};
        }
        .item-active-icon, .item-part-active-icon {
          position: absolute;
          top: -2px;
          right: -2px;

          .item-active-icon-container, .item-part-active-icon-container {
            width: ${t.polished.rem(18)};
            height: ${t.polished.rem(18)};
            line-height: ${t.polished.rem(18)};
            color: ${e.colors.secondary};
            background-color: ${e.colors.palette.primary[700]};
          }
          .item-part-active-icon-container {
            padding: ${t.polished.rem(2)};
          }
        }
        .item-part-active-icon-container {
          .item-part-active-icon-innerbox {
            width: ${t.polished.rem(18)};
            height: ${t.polished.rem(18)};
            background-color: ${e.colors.palette.secondary[300]};
            >div {
              width: ${t.polished.rem(10)};
              height: ${t.polished.rem(10)};
              border-radius: ${t.polished.rem(1)};
              background-color: ${e.colors.palette.primary[700]};
            }
          }
        }
      }
    }
  }
`}!function(e){e.Organization="ORGANIZATION",e.Custom="CUSTOM"}(e||(e={}));const n={baseMapSettings:"Basemap settings",groupBasemaps:"Synchronize with the basemap gallery settings of your organization",customBasemaps:"Configure custom basemaps",importBasemaps:"Import",importTips:'Click the "Import" button to add basemaps for the Map widget.',sideTitle:"Import basemaps",chooseWebmaps:"Select a group where web maps can be used as basemaps."};var l=r(59587),p=r(55339),m=r.n(p);const d=e=>{const a=window.SVG,{className:s}=e,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",s);return a?t.React.createElement(a,Object.assign({className:i,src:m()},o)):t.React.createElement("svg",Object.assign({className:i},o))};var u=r(748),g=r.n(u);const h=e=>{const a=window.SVG,{className:s}=e,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",s);return a?t.React.createElement(a,Object.assign({className:i,src:g()},o)):t.React.createElement("svg",Object.assign({className:i},o))};var f=r(51315),v=r(26826),b=r(73982),x=r.n(b);const y=e=>{const a=window.SVG,{className:s}=e,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",s);return a?t.React.createElement(a,Object.assign({className:i,src:x()},o)):t.React.createElement("svg",Object.assign({className:i},o))};var j=r(42957),w=r.n(j);const O=e=>{const a=window.SVG,{className:s}=e,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",s);return a?t.React.createElement(a,Object.assign({className:i,src:w()},o)):t.React.createElement("svg",Object.assign({className:i},o))};var S=r(30224),N=r.n(S);const R=e=>{const a=window.SVG,{className:s}=e,o=function(e,t){var a={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(s=Object.getOwnPropertySymbols(e);o<s.length;o++)t.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(e,s[o])&&(a[s[o]]=e[s[o]])}return a}(e,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",s);return a?t.React.createElement(a,Object.assign({className:i,src:N()},o)):t.React.createElement("svg",Object.assign({className:i},o))};var k=function(e,t,a,s){return new(a||(a=Promise))((function(o,i){function n(e){try{r(s.next(e))}catch(e){i(e)}}function l(e){try{r(s.throw(e))}catch(e){i(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,l)}r((s=s.apply(e,t||[])).next())}))};const I=Object.assign({},n,t.defaultMessages,a.defaultMessages),$=e=>{const{id:o,token:n,onSettingChange:l,config:r,theme:c}=e,{customBasemaps:p}=r,m=t.hooks.useTranslation(I),d=t.React.useRef(null),u=t.React.useRef(null),g=t.React.useRef(null),h=t.React.useRef(null),[f,b]=t.React.useState({title:m("esriDefault"),id:""}),[x,j]=t.React.useState(!0),[w,S]=t.React.useState([{title:m("esriDefault"),id:""}]),[N,$]=t.React.useState(null),[M,T]=t.React.useState(""),[P,B]=t.React.useState([]),[C,A]=t.React.useState(!0);t.React.useEffect((()=>{(0,v.loadArcGISJSAPIModules)(["esri/portal/Portal","esri/request"]).then((e=>{u.current=(0,t.getAppStore)().getState().portalUrl,d.current=new e[0]({url:u.current}),h.current=e[1],d.current.load().then((()=>k(void 0,void 0,void 0,(function*(){g.current=d.current.sourceJSON,z()}))))}))}),[]);const z=()=>k(void 0,void 0,void 0,(function*(){var e,a;const s=null===(a=null===(e=(0,t.getAppStore)())||void 0===e?void 0:e.getState())||void 0===a?void 0:a.user,o=yield v.basemapUtils.getBasemapGroup(d.current,g.current,!0),i=yield v.basemapUtils.getBasemapGroup(d.current,g.current,!1),n={id:null==o?void 0:o.id,title:m("esriDefault")},l={id:null==i?void 0:i.id,title:m("organizationDefault")};S([n,l].concat(null==s?void 0:s.groups)),b(n),j(!1),yield E(n.id),A(!1)})),E=e=>k(void 0,void 0,void 0,(function*(){const t=yield v.basemapUtils.getBasemapItemsByGroupId(d.current,u.current,e);B(t),$(t)}));return(0,t.jsx)("div",{className:"basemap-setting-popper h-100",css:i(c)},(0,t.jsx)(s.SettingSection,{className:"pt-0",title:m("chooseWebmaps")},(0,t.jsx)(s.SettingRow,null,(0,t.jsx)(a.Select,{size:"sm",role:"menu","aria-label":m("chooseWebmaps"),value:null==f?void 0:f.id,disabled:x,onChange:e=>k(void 0,void 0,void 0,(function*(){const t=w.find((t=>t.id===e.target.value));b(t),$(null),A(!0),yield E(t.id),A(!1),T("")}))},null==w?void 0:w.map(((e,s)=>(0,t.jsx)(a.Option,{key:s,value:null==e?void 0:e.id},null==e?void 0:e.title))))),(0,t.jsx)(s.SettingRow,{className:"search-row"},(0,t.jsx)(a.TextInput,{size:"sm",prefix:(0,t.jsx)(R,{size:"m",color:c.colors.dark}),placeholder:m("search"),onChange:e=>{const t=e.target.value;if(T(t),""===t)$(P);else{const e=P.filter((e=>-1!==e.title.toUpperCase().indexOf(t.toUpperCase())));$(e)}},"aria-label":m("search"),className:"search-input py-0 w-100",value:M,disabled:C,allowClear:!0})),(0,t.jsx)(s.SettingRow,null,C?(0,t.jsx)("div",{className:"jimu-secondary-loading"}):N.length>0?(0,t.jsx)("div",{className:"basemap-items row no-gutters",role:"listbox"},null==N?void 0:N.map(((e,a)=>{const s=(null==p?void 0:p.filter((t=>t.id===e.id)).length)>0;return(0,t.jsx)("button",{role:"option","aria-selected":s,key:a,"data-value":e.id,className:(0,t.classNames)("basemap-item",{"item-border-color-selected":s}),onClick:t=>{((e,t)=>{let a;a=t?(p||[]).concat(e):null==p?void 0:p.filter((t=>t.id!==e.id));const s=r.set("customBasemaps",a);l({id:o,config:s})})(e,!s)}},(0,t.jsx)("img",{src:e.thumbnailUrl+"?token="+n}),(0,t.jsx)("div",{className:"text-left text-wrap text-break basemap-title",title:e.title},e.title),(0,t.jsx)("div",{className:(0,t.classNames)({"item-active-icon":s},{"d-none":!s})},(0,t.jsx)("div",{className:"text-center item-active-icon-container"},(0,t.jsx)(O,{size:"s"}))))}))):(0,t.jsx)("div",{className:"empty-placeholder w-100"},(0,t.jsx)("div",{className:"empty-placeholder-icon"},(0,t.jsx)(y,{size:48})),(0,t.jsx)("div",{className:"empty-placeholder-text"}," ",m("noItemFoundWarning"))))))},M=Object.assign({},n,t.defaultMessages,a.defaultMessages),T=i=>{const{id:n,token:r,onSettingChange:c,config:p,useMapWidgetIds:m,theme:u}=i,{basemapsType:g,customBasemaps:v}=p,b=t.hooks.useTranslation(M),x=t.React.useRef(null),y=t.React.useRef(null),[j,w]=t.React.useState(!1);t.React.useEffect((()=>{g!==e.Custom&&O()}),[g]);const O=()=>{w(!1)},S=(e,t)=>{if(t===p[e])return;const a=p.set(e,t);c({id:n,config:a})},N=e=>{const t=v.asMutable({deep:!0});t.splice(e,1);const a=p.set("customBasemaps",t);c({id:n,config:a})},R=!m||(null==m?void 0:m.length)<=0;return(0,t.jsx)("div",{className:"jimu-widget-setting jimu-widget-basemap-setting h-100",css:o(u)},(0,t.jsx)(s.SettingSection,{className:(0,t.classNames)({"border-bottom-0":R}),title:b("selectMapWidget")},(0,t.jsx)(s.SettingRow,null,(0,t.jsx)(s.MapWidgetSelector,{onSelect:e=>{c({id:n,useMapWidgetIds:e,config:p})},useMapWidgetIds:m}))),R&&(0,t.jsx)("div",{className:"empty-placeholder w-100"},(0,t.jsx)("div",{className:"empty-placeholder-inner"},(0,t.jsx)("div",{className:"empty-placeholder-icon"},(0,t.jsx)(h,{size:48})),(0,t.jsx)("div",{className:"empty-placeholder-text"},b("selectMapHint")))),(null==m?void 0:m.length)>0&&(0,t.jsx)(f.Fragment,null,(0,t.jsx)(s.SettingSection,{className:(0,t.classNames)({"border-0":g===e.Organization||(null==v?void 0:v.length)<=0}),title:b("baseMapSettings"),role:"group","aria-label":b("baseMapSettings")},(0,t.jsx)(s.SettingRow,{flow:"wrap"},(0,t.jsx)("div",{role:"radiogroup",className:"mb-3"},(0,t.jsx)(a.Label,{className:"d-flex align-items-center"},(0,t.jsx)(a.Radio,{style:{cursor:"pointer"},name:"basemapsType",className:"mr-2",checked:g===e.Organization,onChange:()=>{S("basemapsType",e.Organization)}}),b("groupBasemaps")),(0,t.jsx)(a.Label,{className:"d-flex align-items-center"},(0,t.jsx)(a.Radio,{name:"basemapsType",className:"mr-2",checked:g===e.Custom,onChange:()=>{S("basemapsType",e.Custom)}}),b("customBasemaps")))),g===e.Custom&&(0,t.jsx)(a.Button,{ref:x,className:"w-100 text-dark link-setting-ok-btn",type:"primary","aria-description":b("importTips"),onClick:()=>{j||w(!0)}},b("importBasemaps"))),(0,t.jsx)("div",{className:"custom-list-container"},g===e.Custom&&(0,t.jsx)("div",{ref:y,className:"h-100 position-relative py-3"},(null==v?void 0:v.length)<=0&&(0,t.jsx)("div",{className:"empty-placeholder w-100"},(0,t.jsx)("div",{className:"empty-placeholder-inner"},(0,t.jsx)("div",{className:"empty-placeholder-icon"},(0,t.jsx)(h,{size:48})),(0,t.jsx)("div",{className:"empty-placeholder-text"},b("importTips")))),(null==v?void 0:v.length)>0&&(0,t.jsx)(l.List,{size:"default",className:"setting-ui-unit-list px-3",itemsJson:v.asMutable().map(((e,t)=>({itemStateDetailContent:e,itemKey:`${t}`}))),dndEnabled:!0,onDidDrop:(e,t)=>{const{itemJsons:[,a]}=t.props;(e=>{const t=p.set("customBasemaps",e);c({id:n,config:t})})(a.map((e=>e.itemStateDetailContent)))},overrideItemBlockInfo:({itemBlockInfo:e})=>({name:l.TreeItemActionType.RenderOverrideItem,children:[{name:l.TreeItemActionType.RenderOverrideItemDroppableContainer,children:[{name:l.TreeItemActionType.RenderOverrideItemDraggableContainer,children:[{name:l.TreeItemActionType.RenderOverrideItemBody,children:[{name:l.TreeItemActionType.RenderOverrideItemDragHandle},{name:l.TreeItemActionType.RenderOverrideItemMainLine}]}]}]}]}),renderOverrideItemMainLine:(e,s)=>{const{itemJsons:o}=s.props,i=o[0],n=o[1];return l=i.itemStateDetailContent,c=n.indexOf(i),(0,t.jsx)("div",{key:l.id,"data-value":l.id,className:"basemap-list-item"},(0,t.jsx)("img",{className:"basemap_thumb",src:l.thumbnailUrl+"?token="+r}),(0,t.jsx)("span",{className:"text-left text-wrap text-break basemap-title",title:l.title},l.title),(0,t.jsx)(a.Button,{size:"sm",type:"tertiary",icon:!0,className:"del-btn p-0",title:b("delete"),"aria-label":b("delete"),onClick:e=>{e.stopPropagation(),N(c)},onKeyDown:e=>{"Enter"!==e.key&&" "!==e.key||(e.stopPropagation(),N(c))}},(0,t.jsx)(d,null)));var l,c}})))),(0,t.jsx)(s.SidePopper,{position:"right",title:b("sideTitle"),"aria-label":b("sideTitle"),isOpen:j,toggle:O,trigger:[null==x?void 0:x.current,null==y?void 0:y.current]},(0,t.jsx)($,Object.assign({},i))))};function P(e){r.p=e}})(),c})())}}}));