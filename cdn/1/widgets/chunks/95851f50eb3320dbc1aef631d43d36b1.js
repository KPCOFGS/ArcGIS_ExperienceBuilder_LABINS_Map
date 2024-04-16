/*! For license information please see 95851f50eb3320dbc1aef631d43d36b1.js.LICENSE.txt */
"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[11063],{58892:(e,l,t)=>{t.d(l,{a:()=>a,b:()=>i,c:()=>o,d:()=>s});const s=(0,t(27010).c)({typeKeywords:[],customParameters:[],analyzedLocationTypes:[],allowStoredAuth:!0,isSecured:null,checkAuth:!1}),a=s.state,o=s.state,i=s.state},11063:(e,l,t)=>{t.r(l),t.d(l,{arcgis_new_item_pages_tile_layer_select:()=>n});var s=t(28384),a=t(76134),o=t(58892),i=t(54871),r=t(99274),c=t(27099);t(27010);const n=class{constructor(e){(0,s.r)(this,e),this.newItemUpdatePage=(0,s.c)(this,"newItemUpdatePage",7),this.rasterOptions={upload:{icon:"upload-to",page:"layerUpload"},store:{icon:"data-cloud",page:"dataStoreList"},existing:{icon:"layers",page:"tileLayerFromExisting"}},this.vectorOptions={upload:{icon:"upload-to",page:"layerUpload"},store:{icon:"data-cloud",page:"dataStoreList"},existing:{icon:"layers",page:"tileLayerFromExisting"}},this.selectedSource="existing",this.selectedLayerType="vector",this.options=this.vectorOptions}async componentWillLoad(){this.selectedSource=o.a.addTileLayerOption||"upload";const e=o.a.tileLayerPublishType;this.selectedLayerType="3dTiles"===e?"3dTiles":"tiles"===e?"raster":"vector",this.i18n=i.u.i18n.tileLayerSelect}handleNewLayerTypeChange(e){const{rasterOptions:l,vectorOptions:t,selectedSource:s}=this,o=a.c.portal.isPortal;this.selectedLayerType=e,this.options="raster"===e?l:t,("vector"===e&&"existing"===s&&o||"3dTiles"===e)&&(this.selectedSource="upload")}handleNext(){const{selectedSource:e,selectedLayerType:l}=this;o.a.addTileLayerOption=e,o.a.tileLayerPublishType="3dTiles"===l?"3dTiles":"raster"===l?"tiles":"vectorTiles",(0,c.b)(),this.newItemUpdatePage.emit(this.options[e].page)}render(){const{i18n:e,options:l,selectedLayerType:t}=this,o=a.c.portal.isPortal,{helpMap:c,helpBase:n}=a.c.config;return(0,s.h)("div",null,(0,s.h)("arcgis-new-item-description",{header:e.layerTypeHeading,headerLink:{text:i.u.i18n.common.learnMore,href:`${n}${c[120003719]}`}}),(0,s.h)("calcite-tile-select-group",{layout:"vertical",class:"tile-select"},r.d.filter((e=>"3dTiles"!==e||i.u.featureFlags.tileLayer3dTiles)).map((l=>(0,s.h)("calcite-tile-select",{checked:this.selectedLayerType===l,heading:e.layerTypeOptions[l].title,description:e.layerTypeOptions[l].description,name:"tile-layer-type","input-enabled":!0,width:"full",type:"radio",value:l,onCalciteTileSelectChange:e=>{const l=e.target.value;this.handleNewLayerTypeChange(l)}})))),"3dTiles"!==t&&(0,s.h)(s.F,null,(0,s.h)("arcgis-new-item-description",{header:e.sourceHeading}),(0,s.h)("calcite-tile-select-group",{layout:"vertical",class:"tile-select"},Object.keys(l).filter((e=>o?"existing"!==e||"raster"===t:"store"!==e)).map(((l,a)=>(0,s.h)("calcite-tile-select",{key:`${l}-${a}`,checked:this.selectedSource===l,heading:e.sourceOptions[l]["upload"===l&&"raster"===t?"titleRaster":"title"],description:e.sourceOptions[l]["upload"===l&&"raster"===t?"rasterDescription":"description"],name:"tile-layer-create-mode","input-enabled":!0,width:"full",type:"radio",value:l,onCalciteTileSelectChange:e=>{this.selectedSource=e.target.value}}))))))}get el(){return(0,s.d)(this)}};n.style=".tile-select{margin-top:1.25rem}.tile-select:not(:last-child){margin-bottom:2.5rem}"},76134:(e,l,t)=>{t.d(l,{c:()=>a,o:()=>o});const s=(0,t(27010).c)({portal:null,user:null,api:4,scale:"m"}),a=s.state,o=s.onChange},27010:(e,l,t)=>{t.d(l,{c:()=>r});var s=t(28384);const a=e=>!("isConnected"in e)||e.isConnected,o=((e,l)=>{let t;return(...e)=>{t&&clearTimeout(t),t=setTimeout((()=>{t=0,(e=>{for(let l of e.keys())e.set(l,e.get(l).filter(a))})(...e)}),2e3)}})(),i=e=>"function"==typeof e?e():e,r=(e,l)=>{const t=((e,l=((e,l)=>e!==l))=>{const t=i(e);let s=new Map(Object.entries(null!=t?t:{}));const a={dispose:[],get:[],set:[],reset:[]},o=()=>{var l;s=new Map(Object.entries(null!==(l=i(e))&&void 0!==l?l:{})),a.reset.forEach((e=>e()))},r=e=>(a.get.forEach((l=>l(e))),s.get(e)),c=(e,t)=>{const o=s.get(e);l(t,o,e)&&(s.set(e,t),a.set.forEach((l=>l(e,t,o))))},n="undefined"==typeof Proxy?{}:new Proxy(t,{get:(e,l)=>r(l),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,l)=>s.has(l),set:(e,l,t)=>(c(l,t),!0)}),u=(e,l)=>(a[e].push(l),()=>{((e,l)=>{const t=e.indexOf(l);t>=0&&(e[t]=e[e.length-1],e.length--)})(a[e],l)});return{state:n,get:r,set:c,on:u,onChange:(l,t)=>{const s=u("set",((e,s)=>{e===l&&t(s)})),a=u("reset",(()=>t(i(e)[l])));return()=>{s(),a()}},use:(...e)=>{const l=e.reduce(((e,l)=>(l.set&&e.push(u("set",l.set)),l.get&&e.push(u("get",l.get)),l.reset&&e.push(u("reset",l.reset)),l.dispose&&e.push(u("dispose",l.dispose)),e)),[]);return()=>l.forEach((e=>e()))},dispose:()=>{a.dispose.forEach((e=>e())),o()},reset:o,forceUpdate:e=>{const l=s.get(e);a.set.forEach((t=>t(e,l,l)))}}})(e,l);return t.use((()=>{if("function"!=typeof s.g)return{};const e=new Map;return{dispose:()=>e.clear(),get:l=>{const t=(0,s.g)();t&&((e,l,t)=>{const s=e.get(l);s?s.includes(t)||s.push(t):e.set(l,[t])})(e,l,t)},set:l=>{const t=e.get(l);t&&e.set(l,t.filter(s.f)),o(e)},reset:()=>{e.forEach((e=>e.forEach(s.f))),o(e)}}})()),t}},99274:(e,l,t)=>{t.d(l,{D:()=>o,T:()=>r,a:()=>u,b:()=>p,c:()=>v,d:()=>i,e:()=>c,f:()=>s,g:()=>n,p:()=>d,t:()=>a});const s=["standard","custom"],a=["IntegratedMesh","3DObject"],o=a[0],i=["vector","raster","3dTiles"],r=147914382,c=0,n=[{level:0,label:"1:591,657,528",scale:591657527.591555},{level:1,label:"1:295,828,764",scale:295828763.795777},{level:2,label:"1:147,914,382",scale:147914381.897889},{level:3,label:"1:73,957,191",scale:73957190.948944},{level:4,label:"1:36,978,595",scale:36978595.474472},{level:5,label:"1:18,489,298",scale:18489297.737236},{level:6,label:"1:9,244,649",scale:9244648.868618},{level:7,label:"1:4,622,324",scale:4622324.434309},{level:8,label:"1:2,311,162",scale:2311162.217155},{level:9,label:"1:1,155,581",scale:1155581.108577},{level:10,label:"1:577,791",scale:577790.554289},{level:11,label:"1:288,895",scale:288895.277144},{level:12,label:"1:144,448",scale:144447.638572},{level:13,label:"1:72,224",scale:72223.819286},{level:14,label:"1:36,112",scale:36111.909643},{level:15,label:"1:18,056",scale:18055.954822},{level:16,label:"1:9,028",scale:9027.977411},{level:17,label:"1:4,514",scale:4513.988705},{level:18,label:"1:2,257",scale:2256.994353},{level:19,label:"1:1,128",scale:1128.497176},{level:20,label:"1:564",scale:564.248588},{level:21,label:"1:282",scale:282.124294},{level:22,label:"1:141",scale:141.062147}],u={spatialReference:{wkid:102100,latestWkid:3857},origin:{x:-20037508.342787,y:20037508.342787},rows:256,cols:256,dpi:96,preciseDpi:96,lods:[{level:0,resolution:156543.033928,scale:591657527.591555},{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.14929107082380833,scale:564.248588},{level:21,resolution:.07464553541190416,scale:282.124294},{level:22,resolution:.03732276770595208,scale:141.062147}]},d={spatialReference:{wkid:102100,latestWkid:3857},origin:{x:-20037508.342787,y:20037508.342787},rows:512,cols:512,dpi:96,preciseDpi:96,lods:[{level:0,resolution:78271.51696399994,scale:295828763.795777},{level:1,resolution:39135.75848200009,scale:147914381.897889},{level:2,resolution:19567.87924099992,scale:73957190.948944},{level:3,resolution:9783.93962049996,scale:36978595.474472},{level:4,resolution:4891.96981024998,scale:18489297.737236},{level:5,resolution:2445.98490512499,scale:9244648.868618},{level:6,resolution:1222.992452562495,scale:4622324.434309},{level:7,resolution:611.4962262813797,scale:2311162.217155},{level:8,resolution:305.74811314055756,scale:1155581.108577},{level:9,resolution:152.87405657041106,scale:577790.554289},{level:10,resolution:76.43702828507324,scale:288895.277144},{level:11,resolution:38.21851414253662,scale:144447.638572},{level:12,resolution:19.10925707126831,scale:72223.819286},{level:13,resolution:9.554628535634155,scale:36111.909643},{level:14,resolution:4.77731426794937,scale:18055.954822},{level:15,resolution:2.388657133974685,scale:9027.977411},{level:16,resolution:1.1943285668550503,scale:4513.988705},{level:17,resolution:.5971642835598172,scale:2256.994353},{level:18,resolution:.29858214164761665,scale:1128.497176},{level:19,resolution:.14929107082380833,scale:564.248588},{level:20,resolution:.07464553541190416,scale:282.124294},{level:21,resolution:.03732276770595208,scale:141.062147},{level:22,resolution:.01866138385297604,scale:70.5310735},{level:23,resolution:.009330691929342804,scale:35.265536760789715}]},p={format:"indexedVector",compressionQuality:0,antialiasing:!1},v={format:"PNG32",compressionQuality:0,antialiasing:!0}},27099:(e,l,t)=>{t.d(l,{a:()=>d,b:()=>u,l:()=>n});var s=t(76134),a=t(58892);const o="create tile layer",i="my content",r=e=>{switch(e){case"store":return"data store";case"existing":return"fs";case"upload":return"upload"}},c=e=>{switch(e){case"tiles":return"raster";case"vectorTiles":return"vector"}},n=()=>{var e;null===(e=s.c.telemetry)||void 0===e||e.startWorkflow(o,{category:"create tile layer",pageName:"my content"})},u=()=>{const e=s.c.telemetry;null==e||e.stepWorkflow(o,"from option",{category:o,attribute:r(a.a.addTileLayerOption),details:c(a.a.tileLayerPublishType),pageName:i})},d=()=>{const e=s.c.telemetry;null==e||e.endWorkflow(o,{category:o,attribute:r(a.a.addTileLayerOption),details:c(a.a.tileLayerPublishType),pageName:i})}},54871:(e,l,t)=>{t.d(l,{a:()=>s,u:()=>a});const s=(0,t(27010).c)({nextText:"next",workflow:"content",scale:"m",disableScroll:!1,featureFlags:{tileLayer3dTiles:!1}}),a=s.state}}]);