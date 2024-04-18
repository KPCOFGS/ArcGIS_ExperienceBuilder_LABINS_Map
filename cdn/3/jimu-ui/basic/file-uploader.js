/*! For license information please see file-uploader.js.LICENSE.txt */
System.register(["jimu-core","jimu-core/react"],(function(t,e){var r={},n={};return{setters:[function(t){r.React=t.React,r.classNames=t.classNames},function(t){n.Component=t.Component,n.default=t.default}],execute:function(){t((()=>{var t={94184:(t,e)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var a=typeof r;if("string"===a||"number"===a)t.push(r);else if(Array.isArray(r)){if(r.length){var i=o.apply(null,r);i&&t.push(i)}}else if("object"===a){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},86405:(t,e,r)=>{var n=r(74858),o=r(30607);n.stream=o,t.exports=n},74858:(t,e,r)=>{var n=r(90326);t.exports={toObject:function(t,e){var r=(e=e||{}).delimiter||",",o=n.getQuoteChar(e.quote),a=t,i=null;if("string"!=typeof a)throw new Error("Invalid input, input data should be a string");a=a.split(/[\n\r]+/gi),"string"==typeof e.headers?(i=e.headers.split(/[\n\r]+/gi),i=o?n.convertArray(i.shift(),r,o):i.shift().split(r)):i=o?n.convertArray(a.shift(),r,o):a.shift().split(r);var c=[];return a.forEach((function(t){if(t){t=o?n.convertArray(t,r,o):t.split(r);var e={};i.forEach((function(r,o){e[r]=n.removeQuote(t[o])})),c.push(e)}})),c},toArray:function(t,e){var r=(e=e||{}).delimiter||",",o=n.getQuoteChar(e.quote),a=t;if("string"!=typeof a)throw new Error("Invalid input, input data should be a string");a=a.split(/[\n\r]+/gi);var i=[];return a.forEach((function(t){t&&(t=(t=o?n.convertArray(t,r,o):t.split(r)).map((function(t){return n.removeQuote(t)})),i.push(t))})),i},toColumnArray:function(t,e){var r=(e=e||{}).delimiter||",",o=n.getQuoteChar(e.quote),a=t,i=null;if("string"!=typeof a)throw new Error("Invalid input, input data should be a string");a=a.split(/[\n\r]+/gi),"string"==typeof e.headers?(i=e.headers.split(/[\n\r]+/gi),i=o?n.convertArray(i.shift(),r,o):i.shift().split(r)):i=o?n.convertArray(a.shift(),r,o):a.shift().split(r);var c={};return i.forEach((function(t){c[t]=[]})),a.forEach((function(t){t&&(t=o?n.convertArray(t,r,o):t.split(r)).forEach((function(t,e){c[i[e]].push(n.removeQuote(t))}))})),c},toSchemaObject:function(t,e){var r=(e=e||{}).delimiter||",",o=n.getQuoteChar(e.quote),a=t,i=null;if("string"!=typeof a)throw new Error("Invalid input, input should be a string");a=a.split(/[\n\r]+/gi),"string"==typeof e.headers?(i=e.headers.split(/[\n\r]+/gi),i=o?n.convertArray(i.shift(),r,o):i.shift().split(r)):i=o?n.convertArray(a.shift(),r,o):a.shift().split(r);var c=[];return a.forEach((function(t){if(t){t=o?n.convertArray(t,r,o):t.split(r);var e={};t.forEach((function(t,a){n.addDataInSchema(i[a],t,e,r,o)})),c.push(e)}})),c},toCSV:function(t,e){(e=e||{}).delimiter=e.delimiter||",",e.wrap=e.wrap||"",e.arrayDenote=e.arrayDenote&&String(e.arrayDenote).trim()?e.arrayDenote:"[]",e.objectDenote=e.objectDenote&&String(e.objectDenote).trim()?e.objectDenote:".",e.detailedOutput="boolean"!=typeof e.detailedOutput||e.detailedOutput,e.headers=String(e.headers).toLowerCase();var r={},o="";e.headers.match(/none|full|relative|key/)?e.headers=e.headers.match(/none|full|relative|key/)[0]:e.headers="full",!0===e.wrap&&(e.wrap='"'),"string"==typeof t&&(t=JSON.parse(t)),n.toCsv(t,r,"",0,e);var a=n.getHeaders(e.headers,r,e);a&&(e.wrap&&(a=a.map((function(t){return e.wrap+t+e.wrap}))),o=a.join(e.delimiter));var i=n.getLengthyItem(r),c=Object.keys(r),u=[],s=/\n|\r/g;e.wrap||(s=new RegExp("\n|\r|"+e.delimiter,"g"));for(var l=0;l<i;l++){u=[];for(var f=0;f<c.length;f++)r[c[f]][l]?(r[c[f]][l]=r[c[f]][l].replace(s,"\t"),e.wrap&&(r[c[f]][l]=e.wrap+r[c[f]][l]+e.wrap),u[u.length]=r[c[f]][l]):u[u.length]="";o+="\n"+u.join(e.delimiter)}return o}}},90326:t=>{function e(t){if(null===t)return"null";if(t&&(1===t.nodeType||9===t.nodeType))return"element";var e=Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase();if("number"===e){if(isNaN(t))return"nan";if(!isFinite(t))return"infinity"}return e}function r(t,r,o,a,u){return"undefined"===e(t)?n("",r,o,a):"null"===e(t)?n("null",r,o,a):Array.isArray(t)?i(t,r,o,a,u):"object"==typeof t?c(t,r,o,a,u):n(String(t),r,o,a)}function n(t,e,r,n,o){return e&&e[r]||(e[r]=[]),n<e[r].length&&(n=e[r].length),e[r][n]=t,e}function o(t){return t.every((function(t){return!e(t).match(/array|object/)}))}function a(t){return t?String(t).trim().replace(/^["|'](.*)["|']$/,"$1"):""}function i(t,e,a,i,c){if(o(t))return n(t.join(";"),e,a+c.arrayDenote,i);t.forEach((function(t,n){return r(t,e,a+c.arrayDenote,n,c)}))}function c(t,e,n,o,a){Object.keys(t).forEach((function(i){return r(t[i],e,n+a.objectDenote+i,o,a)}))}function u(t,e,r){if(r&&-1!==t.indexOf(r))return s(t,e,r);var n=[];return t.split(e).forEach((function(t){var e=t.trim();n.push(e)})),n}function s(t,e,r){e=e||",",r=r||'"';var n=new RegExp("(?!\\s*$)\\s*(?:"+r+"([^"+r+"\\\\]*(?:\\\\[\\S\\s][^"+r+"\\\\]*)*)"+r+"|([^"+e+r+"\\s\\\\]*(?:\\s+[^"+e+r+"\\s\\\\]+)*))\\s*(?:"+e+"|$)","g"),o=[];return t.replace(n,(function(t,e,r){return void 0!==e?o.push(e.replace(/\\'/g,"'")):void 0!==r&&o.push(r),""})),/,\s*$/.test(t)&&o.push(""),o}t.exports={getQuoteChar:function(t){return"string"==typeof t?t:!0===t?'"':null},dataType:e,toCsv:r,putData:n,allObjsOrArray:o,getHeaders:function(t,e,r){var n=/([^\[\]\.]+)$/,o=/\[\]\.?([^\[\]]+)$/;switch(t){case"none":return null;case"full":return Object.keys(e);case"key":return Object.keys(e).map((function(t){var e=t.match(n);return e&&2===e.length?e[1]:t}));case"relative":return Object.keys(e).map((function(t){var e=t.match(o);return e&&2===e.length?e[1]:t}))}},getLengthyItem:function(t){var e=0;return Object.keys(t).forEach((function(r){Array.isArray(t[r])&&t[r].length>e&&(e=t[r].length)})),e},addDataInSchema:function t(e,r,n,o,i){var c,s,l=e.match(/\[*[\d]\]\.(\w+)|\.|\[\]|\[(.)\]|-|\+/gi);if(l){var f=l[0];if(-1!==l.indexOf("-"))return!0;if(-1!==l.indexOf(".")){var p=e.split(".");n[s=p.shift()]=n[s]||{},t(p.join("."),r,n[s],o,i)}else if(-1!==l.indexOf("[]"))n[c=e.replace(/\[\]/gi,"")]||(n[c]=[]),n[c].push(r);else if(/\[*[\d]\]\.(\w+)/.test(f)){c=e.split("[").shift();var h=parseInt(f.match(/\[(.)\]/).pop(),10);s=e.split(".").pop(),n[c]=n[c]||[],n[c][h]=n[c][h]||{},n[c][h][s]=r}else/\[(.)\]/.test(f)?(o=f.match(/\[(.)\]/).pop(),n[c=e.replace(/\[(.)\]/gi,"")]=u(r,o,i)):-1!==l.indexOf("+")&&(n[c=e.replace(/\+/gi,"")]=Number(r))}else n[e]=a(r);return n},removeQuote:a,arrayToCsv:i,objectToCsv:c,convertArray:u,csvToArray:s}},30607:(t,e,r)=>{var n=r(74858);function o(t){return t.split(/[\n\r]/gi)}function a(t){return new(r(60835).Transform)({readableObjectMode:!0,writableObjectMode:!0,transform:t})}function i(t,e,r,a){var i=o(t.toString());if(!a._head){var c=i.shift();a._head=c,a._opts.headers=c}this.push(n.toColumnArray(i.join("\n"),a._opts)),r()}function c(t,e,r,a){var i=o(t.toString());if(!a._head){var c=i.shift();a._head=c,a._opts.headers=c}this.push(n.toObject(i.join("\n"),a._opts)),r()}function u(t,e,r,a){var i=o(t.toString());if(!a._head){var c=i.shift();a._head=c,a._opts.headers=c}this.push(n.toSchemaObject(i.join("\n"),a._opts)),r()}function s(t,e,r,a){var i=o(t.toString());this.push(n.toArray(i.join("\n"),a._opts)),r()}t.exports={toColumnArray:function(t){t=t||{};var e=a((function(t,r,n){i.call(this,t,r,n,e)}));return e._head=t.headers?t.headers:null,e._opts=t,e},toObject:function(t){t=t||{};var e=a((function(t,r,n){c.call(this,t,r,n,e)}));return e._head=t.headers?t.headers:null,e._opts=t,e},toSchemaObject:function(t){t=t||{};var e=a((function(t,r,n){u.call(this,t,r,n,e)}));return e._head=t.headers?t.headers:null,e._opts=t,e},toArray:function(t){t=t||{};var e=a((function(t,r,n){s.call(this,t,r,n,e)}));return e._opts=t,e},transform:a,stringify:function(t){return a((function(e,r,n){this.push(JSON.stringify(e,null,t)),n()}))}}},48891:t=>{"use strict";t.exports=r},51315:t=>{"use strict";t.exports=n},60835:()=>{}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};return(()=>{"use strict";o.r(a),o.d(a,{FileUploader:()=>B});var t=o(48891);function e(){return e=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},e.apply(this,arguments)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function i(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===n(e)?e:String(e)}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function u(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&s(t,e)}function f(t){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},f(t)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=f(t);if(e){var a=f(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return function(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,r)}}var h=o(51315);function d(t,e,r){return(e=i(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(){y=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new P(n||[]);return o(i,"_invoke",{value:S(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p={};function h(){}function d(){}function v(){}var m={};s(m,i,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(C([])));b&&b!==e&&r.call(b,i)&&(m=b);var w=v.prototype=h.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function a(o,i,c,u){var s=f(t[o],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==n(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){a("next",t,c,u)}),(function(t){a("throw",t,c,u)})):e.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return a("throw",t,c,u)}))}u(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function C(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=v,o(w,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(j.prototype),s(j.prototype,c,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new j(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(w),s(w,u,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function v(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function g(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?m(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=o(94184),w=o.n(b);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var j="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function S(t,e){return 0===t.indexOf(e)}function E(t){var e=t.responseText||t.response;if(!e)return e;try{return JSON.parse(e)}catch(t){return e}}function x(t){var e=new XMLHttpRequest;t.onProgress&&e.upload&&(e.upload.onprogress=function(e){e.total>0&&(e.percent=e.loaded/e.total*100),t.onProgress(e)});var r=new FormData;t.data&&Object.keys(t.data).forEach((function(e){var n=t.data[e];Array.isArray(n)?n.forEach((function(t){r.append("".concat(e,"[]"),t)})):r.append(e,n)})),t.file instanceof Blob?r.append(t.filename,t.file,t.file.name):r.append(t.filename,t.file),e.onerror=function(e){t.onError(e)},e.onload=function(){return e.status<200||e.status>=300?t.onError(function(t,e){var r="cannot ".concat(t.method," ").concat(t.action," ").concat(e.status,"'"),n=new Error(r);return n.status=e.status,n.method=t.method,n.url=t.action,n}(t,e),E(e)):t.onSuccess(E(e),e)},e.open(t.method,t.action,!0),t.withCredentials&&"withCredentials"in e&&(e.withCredentials=!0);var n=t.headers||{};return null!==n["X-Requested-With"]&&e.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(n).forEach((function(t){null!==n[t]&&e.setRequestHeader(t,n[t])})),e.send(r),{abort:function(){e.abort()}}}var k=+new Date,P=0;function C(){return"rc-upload-".concat(k,"-").concat(++P)}var _={},D=[];function L(t,e){}function A(t,e){}function F(t,e,r){e||_[r]||(t(!1,r),_[r]=!0)}function M(t,e){F(L,t,e)}M.preMessage=function(t){D.push(t)},M.resetWarned=function(){_={}},M.noteOnce=function(t,e){F(A,t,e)};const T=M,R=function(t,e){if(t&&e){var r=Array.isArray(e)?e:e.split(","),n=t.name||"",o=t.type||"",a=o.replace(/\/.*$/,"");return r.some((function(t){var e=t.trim();if(/^\*(\/\*)?$/.test(t))return!0;if("."===e.charAt(0)){var r=n.toLowerCase(),i=e.toLowerCase(),c=[i];return".jpg"!==i&&".jpeg"!==i||(c=[".jpg",".jpeg"]),c.some((function(t){return r.endsWith(t)}))}return/\/\*$/.test(e)?a===e.replace(/\/.*$/,""):o===e||!!/^\w+$/.test(e)&&(T(!1,"Upload takes an invalidate 'accept' type '".concat(e,"'.Skip for check.")),!0)}))}return!0},N=function(t,e,r){var n=function t(n,o){n.path=o||"",n.isFile?n.file((function(t){r(t)&&(n.fullPath&&!t.webkitRelativePath&&(Object.defineProperties(t,{webkitRelativePath:{writable:!0}}),t.webkitRelativePath=n.fullPath.replace(/^\//,""),Object.defineProperties(t,{webkitRelativePath:{writable:!1}})),e([t]))})):n.isDirectory&&function(t,e){var r=t.createReader(),n=[];!function t(){r.readEntries((function(r){var o=Array.prototype.slice.apply(r);n=n.concat(o),o.length?t():e(n)}))}()}(n,(function(e){e.forEach((function(e){t(e,"".concat(o).concat(n.name,"/"))}))}))};t.forEach((function(t){n(t.webkitGetAsEntry())}))};var I=["component","prefixCls","className","disabled","id","style","multiple","accept","capture","children","directory","openFileDialogOnClick","onMouseEnter","onMouseLeave"],q=function(t){l(a,t);var o=p(a);function a(){var t;r(this,a);for(var e=arguments.length,i=new Array(e),c=0;c<e;c++)i[c]=arguments[c];return(t=o.call.apply(o,[this].concat(i))).state={uid:C()},t.reqs={},t.fileInput=void 0,t._isMounted=void 0,t.onChange=function(e){var r=t.props,n=r.accept,o=r.directory,a=g(e.target.files).filter((function(t){return!o||R(t,n)}));t.uploadFiles(a),t.reset()},t.onClick=function(e){var r=t.fileInput;if(r){var n=t.props,o=n.children,a=n.onClick;if(o&&"button"===o.type){var i=r.parentNode;i.focus(),i.querySelector("button").blur()}r.click(),a&&a(e)}},t.onKeyDown=function(e){"Enter"===e.key&&t.onClick(e)},t.onFileDrop=function(e){var r=t.props.multiple;if(e.preventDefault(),"dragover"!==e.type)if(t.props.directory)N(Array.prototype.slice.call(e.dataTransfer.items),t.uploadFiles,(function(e){return R(e,t.props.accept)}));else{var n=g(e.dataTransfer.files).filter((function(e){return R(e,t.props.accept)}));!1===r&&(n=n.slice(0,1)),t.uploadFiles(n)}},t.uploadFiles=function(e){var r=g(e),n=r.map((function(e){return e.uid=C(),t.processFile(e,r)}));Promise.all(n).then((function(e){var r=t.props.onBatchStart;null==r||r(e.map((function(t){return{file:t.origin,parsedFile:t.parsedFile}}))),e.filter((function(t){return null!==t.parsedFile})).forEach((function(e){t.post(e)}))}))},t.processFile=function(){var e,r=(e=y().mark((function e(r,o){var a,i,c,u,s,l,f,p,h;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.props.beforeUpload,i=r,!a){e.next=14;break}return e.prev=3,e.next=6,a(r,o);case 6:i=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(3),i=!1;case 12:if(!1!==i){e.next=14;break}return e.abrupt("return",{origin:r,parsedFile:null,action:null,data:null});case 14:if("function"!=typeof(c=t.props.action)){e.next=21;break}return e.next=18,c(r);case 18:u=e.sent,e.next=22;break;case 21:u=c;case 22:if("function"!=typeof(s=t.props.data)){e.next=29;break}return e.next=26,s(r);case 26:l=e.sent,e.next=30;break;case 29:l=s;case 30:return f="object"!==n(i)&&"string"!=typeof i||!i?r:i,p=f instanceof File?f:new File([f],r.name,{type:r.type}),(h=p).uid=r.uid,e.abrupt("return",{origin:r,data:l,parsedFile:h,action:u});case 35:case"end":return e.stop()}}),e,null,[[3,9]])})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(t){v(a,n,o,i,c,"next",t)}function c(t){v(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t,e){return r.apply(this,arguments)}}(),t.saveFileInput=function(e){t.fileInput=e},t}return u(a,[{key:"componentDidMount",value:function(){this._isMounted=!0}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.abort()}},{key:"post",value:function(t){var e=this,r=t.data,n=t.origin,o=t.action,a=t.parsedFile;if(this._isMounted){var i=this.props,c=i.onStart,u=i.customRequest,s=i.name,l=i.headers,f=i.withCredentials,p=i.method,h=n.uid,d=u||x,y={action:o,filename:s,data:r,file:a,headers:l,withCredentials:f,method:p||"post",onProgress:function(t){var r=e.props.onProgress;null==r||r(t,a)},onSuccess:function(t,r){var n=e.props.onSuccess;null==n||n(t,a,r),delete e.reqs[h]},onError:function(t,r){var n=e.props.onError;null==n||n(t,r,a),delete e.reqs[h]}};c(n),this.reqs[h]=d(y)}}},{key:"reset",value:function(){this.setState({uid:C()})}},{key:"abort",value:function(t){var e=this.reqs;if(t){var r=t.uid?t.uid:t;e[r]&&e[r].abort&&e[r].abort(),delete e[r]}else Object.keys(e).forEach((function(t){e[t]&&e[t].abort&&e[t].abort(),delete e[t]}))}},{key:"render",value:function(){var t,r=this.props,n=r.component,o=r.prefixCls,a=r.className,i=r.disabled,c=r.id,u=r.style,s=r.multiple,l=r.accept,f=r.capture,p=r.children,y=r.directory,v=r.openFileDialogOnClick,m=r.onMouseEnter,g=r.onMouseLeave,b=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(r,I),E=w()((d(t={},o,!0),d(t,"".concat(o,"-disabled"),i),d(t,a,a),t)),x=y?{directory:"directory",webkitdirectory:"webkitdirectory"}:{},k=i?{}:{onClick:v?this.onClick:function(){},onKeyDown:v?this.onKeyDown:function(){},onMouseEnter:m,onMouseLeave:g,onDrop:this.onFileDrop,onDragOver:this.onFileDrop,tabIndex:"0"};return h.default.createElement(n,e({},k,{className:E,role:"button",style:u}),h.default.createElement("input",e({},function(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e=!1===r?{aria:!0,data:!0,attr:!0}:!0===r?{aria:!0}:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){d(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},r);var n={};return Object.keys(t).forEach((function(r){(e.aria&&("role"===r||S(r,"aria-"))||e.data&&S(r,"data-")||e.attr&&j.includes(r))&&(n[r]=t[r])})),n}(b,{aria:!0,data:!0}),{id:c,type:"file",ref:this.saveFileInput,onClick:function(t){return t.stopPropagation()},key:this.state.uid,style:{display:"none"},accept:l},x,{multiple:s,onChange:this.onChange},null!=f?{capture:f}:{})),p)}}]),a}(h.Component);const U=q;function $(){}var G=function(t){l(o,t);var n=p(o);function o(){var t;r(this,o);for(var e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(t=n.call.apply(n,[this].concat(a))).uploader=void 0,t.saveUploader=function(e){t.uploader=e},t}return u(o,[{key:"abort",value:function(t){this.uploader.abort(t)}},{key:"render",value:function(){return h.default.createElement(U,e({},this.props,{ref:this.saveUploader}))}}]),o}(h.Component);G.defaultProps={component:"span",prefixCls:"rc-upload",data:{},headers:{},name:"file",multipart:!1,onStart:$,onError:$,onSuccess:$,multiple:!1,beforeUpload:null,customRequest:null,withCredentials:!1,openFileDialogOnClick:!0};const Q=G;var W=o(86405);class B extends t.React.PureComponent{constructor(){super(...arguments),this.onUploadSuccess=(t,e,r)=>{const n=new FileReader;n.onload=()=>{new Promise(((t,e)=>{t(W.toObject(n.result))})).then((t=>{this.props.onUploadSuccess&&this.props.onUploadSuccess({records:t,name:e.name,id:e.uid.replace("rc","exb")})}))},n.readAsBinaryString(e)}}render(){return t.React.createElement(Q,{id:"fileSelect",onSuccess:this.onUploadSuccess,style:{width:"60px",height:"20px"},className:(0,t.classNames)("w-100 h-100",{[this.props.className]:!!this.props.className}),accept:this.props.accept},"Upload")}}})(),a})())}}}));