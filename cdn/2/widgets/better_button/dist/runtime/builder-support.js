System.register(["jimu-core","jimu-theme","jimu-ui","jimu-ui/advanced/setting-components"],(function(e,t){var s={},i={},r={},o={};return{setters:[function(e){s.React=e.React,s.classNames=e.classNames,s.css=e.css,s.jsx=e.jsx,s.polished=e.polished},function(e){i.getBuilderThemeVariables=e.getBuilderThemeVariables},function(e){r.Link=e.Link},function(e){o.QuickStylePopper=e.QuickStylePopper}],execute:function(){e((()=>{"use strict";var e={9244:e=>{e.exports=s},1888:e=>{e.exports=i},4321:e=>{e.exports=r},9298:e=>{e.exports=o}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{n.r(a),n.d(a,{default:()=>l});var e=n(9244),t=n(1888),s=n(4321),i=n(9298);const r={_widgetLabel:"Button"};class o extends e.React.PureComponent{constructor(t){super(t),this.THEMETYPES=["default","primary","secondary","tertiary","danger","link"],this.translate=e=>{const{intl:t}=this.props;return t?t.formatMessage({id:e,defaultMessage:r[e]}):""},this.getStyle=(t,s)=>e.css`
      ${s&&`width: ${e.polished.rem(360)};\n        background-color: ${t.colors.palette.light[300]};\n        color: ${t.colors.dark};\n        border: 1px solid ${t.colors.palette.light[500]};\n        box-shadow: 0 4px 20px 4px ${e.polished.rgba(t.colors.white,.5)};`}
      .button-item{
        width: 100%;
        font-size: ${e.polished.rem(13)};
      }
      .quick-style-item-container{
        padding-left: 4px;
        padding-right: 4px;
        padding-bottom: 8px;
      }
      .quick-style-item{
        border: 2px solid transparent;
        &.quick-style-item-selected{
          border: 2px solid ${t.colors.palette.primary[600]};
        }
        .quick-style-item-inner{
          ${s&&`background-color: ${t.colors.palette.light[400]};`}
          cursor: pointer;
        }
      }
    `,this.state={}}render(){const{usePopper:r}=this.props;return r?(0,e.jsx)(i.QuickStylePopper,{reference:this.props.reference,open:!0,placement:"right-start",css:this.getStyle(this.props.theme||(0,t.getBuilderThemeVariables)(),r),onClose:this.props.onClose,onInitDragHandler:this.props.onInitDragHandler,onInitResizeHandler:this.props.onInitResizeHandler,trapFocus:!1,autoFocus:!1},(0,e.jsx)("div",{className:"container-fluid mb-2"},(0,e.jsx)("div",{className:"row no-gutters"},this.THEMETYPES.map(((t,i)=>(0,e.jsx)("div",{key:i,className:"col-4 quick-style-item-container"},(0,e.jsx)("div",{className:(0,e.classNames)("quick-style-item",{"quick-style-item-selected":this.props.selectedType===t})},(0,e.jsx)("div",{className:"quick-style-item-inner p-2",onClick:()=>{this.props.onChange(t)}},(0,e.jsx)(s.Link,{title:this.translate("_widgetLabel"),role:"button",className:"d-inline-block button-item text-truncate",type:t},this.translate("_widgetLabel")))))))))):(0,e.jsx)("div",{className:"container-fluid mb-2",css:this.getStyle(this.props.theme||(0,t.getBuilderThemeVariables)(),r)},(0,e.jsx)("div",{className:"row no-gutters"},this.THEMETYPES.map(((t,i)=>(0,e.jsx)("div",{key:i,className:"col-4 quick-style-item-container"},(0,e.jsx)("div",{className:(0,e.classNames)("quick-style-item",{"quick-style-item-selected":this.props.selectedType===t})},(0,e.jsx)("div",{className:"quick-style-item-inner p-2",onClick:()=>{this.props.onChange(t)}},(0,e.jsx)(s.Link,{title:this.translate("variableButton"),role:"button",className:"d-inline-block button-item text-truncate",type:t},this.translate("variableButton")))))))))}}const l={QuickStyle:o}})(),a})())}}}));