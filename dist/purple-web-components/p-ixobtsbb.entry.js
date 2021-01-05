import{r as t,h as n,g as e}from"./p-f473413c.js";function r(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function i(t,n){return t(n={exports:{}},n.exports),n.exports}var o=i(function(t){var n;n=function(){function t(){}function n(t,n){for(var e=n.length,r=0;r<e;++r)i(t,n[r])}t.prototype=Object.create(null);var e={}.hasOwnProperty,r=/\s+/;function i(t,i){if(i){var o=typeof i;"string"===o?function(t){for(var n=i.split(r),e=n.length,o=0;o<e;++o)t[n[o]]=!0}(t):Array.isArray(i)?n(t,i):"object"===o?function(t,n){for(var r in n)e.call(n,r)&&(t[r]=!!n[r])}(t,i):"number"===o&&function(t){t[i]=!0}(t)}}return function(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=new t;n(o,r);var u=[];for(var a in o)o[a]&&u.push(a);return u.join(" ")}}(),t.exports?(n.default=n,t.exports=n):window.classNames=n}),u=function(t,n){return function(){for(var e=new Array(arguments.length),r=0;r<e.length;r++)e[r]=arguments[r];return t.apply(n,e)}},a=Object.prototype.toString;function c(t){return"[object Array]"===a.call(t)}function f(t){return null!==t&&"object"==typeof t}function s(t){return"[object Function]"===a.call(t)}function l(t,n){if(null!=t)if("object"!=typeof t&&(t=[t]),c(t))for(var e=0,r=t.length;e<r;e++)n.call(null,t[e],e,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.call(null,t[i],i,t)}var d={isArray:c,isArrayBuffer:function(t){return"[object ArrayBuffer]"===a.call(t)},isBuffer:function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){return"undefined"!=typeof FormData&&t instanceof FormData},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:f,isUndefined:function(t){return void 0===t},isDate:function(t){return"[object Date]"===a.call(t)},isFile:function(t){return"[object File]"===a.call(t)},isBlob:function(t){return"[object Blob]"===a.call(t)},isFunction:s,isStream:function(t){return f(t)&&s(t.pipe)},isURLSearchParams:function(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function t(){var n={};function e(e,r){n[r]="object"==typeof n[r]&&"object"==typeof e?t(n[r],e):e}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],e);return n},deepMerge:function t(){var n={};function e(e,r){n[r]="object"==typeof n[r]&&"object"==typeof e?t(n[r],e):"object"==typeof e?t({},e):e}for(var r=0,i=arguments.length;r<i;r++)l(arguments[r],e);return n},extend:function(t,n,e){return l(n,function(n,r){t[r]=e&&"function"==typeof n?u(n,e):n}),t},trim:function(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}};function p(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var h=function(t,n,e){if(!n)return t;var r;if(e)r=e(n);else if(d.isURLSearchParams(n))r=n.toString();else{var i=[];d.forEach(n,function(t,n){null!=t&&(d.isArray(t)?n+="[]":t=[t],d.forEach(t,function(t){d.isDate(t)?t=t.toISOString():d.isObject(t)&&(t=JSON.stringify(t)),i.push(p(n)+"="+p(t))}))}),r=i.join("&")}if(r){var o=t.indexOf("#");-1!==o&&(t=t.slice(0,o)),t+=(-1===t.indexOf("?")?"?":"&")+r}return t};function v(){this.handlers=[]}v.prototype.use=function(t,n){return this.handlers.push({fulfilled:t,rejected:n}),this.handlers.length-1},v.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},v.prototype.forEach=function(t){d.forEach(this.handlers,function(n){null!==n&&t(n)})};var m=v,g=function(t,n,e){return d.forEach(e,function(e){t=e(t,n)}),t},y=function(t){return!(!t||!t.__CANCEL__)},b=function(t,n){d.forEach(t,function(e,r){r!==n&&r.toUpperCase()===n.toUpperCase()&&(t[n]=e,delete t[r])})},w=function(t,n,e,r,i){return function(t,n,e,r,i){return t.config=n,e&&(t.code=e),t.request=r,t.response=i,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}(new Error(t),n,e,r,i)},j=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],x=d.isStandardBrowserEnv()?function(){var t,n=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");function r(t){var r=t;return n&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return t=r(window.location.href),function(n){var e=d.isString(n)?r(n):n;return e.protocol===t.protocol&&e.host===t.host}}():function(){return!0},R=d.isStandardBrowserEnv()?{write:function(t,n,e,r,i,o){var u=[];u.push(t+"="+encodeURIComponent(n)),d.isNumber(e)&&u.push("expires="+new Date(e).toGMTString()),d.isString(r)&&u.push("path="+r),d.isString(i)&&u.push("domain="+i),!0===o&&u.push("secure"),document.cookie=u.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},O=function(t){return new Promise(function(n,e){var r=t.data,i=t.headers;d.isFormData(r)&&delete i["Content-Type"];var o=new XMLHttpRequest;if(t.auth&&(i.Authorization="Basic "+btoa((t.auth.username||"")+":"+(t.auth.password||""))),o.open(t.method.toUpperCase(),h(t.url,t.params,t.paramsSerializer),!0),o.timeout=t.timeout,o.onreadystatechange=function(){if(o&&4===o.readyState&&(0!==o.status||o.responseURL&&0===o.responseURL.indexOf("file:"))){var r,i,u,a,c,f="getAllResponseHeaders"in o?(r=o.getAllResponseHeaders(),c={},r?(d.forEach(r.split("\n"),function(t){if(a=t.indexOf(":"),i=d.trim(t.substr(0,a)).toLowerCase(),u=d.trim(t.substr(a+1)),i){if(c[i]&&j.indexOf(i)>=0)return;c[i]="set-cookie"===i?(c[i]?c[i]:[]).concat([u]):c[i]?c[i]+", "+u:u}}),c):c):null;!function(t,n,e){var r=e.config.validateStatus;!r||r(e.status)?t(e):n(w("Request failed with status code "+e.status,e.config,null,e.request,e))}(n,e,{data:t.responseType&&"text"!==t.responseType?o.response:o.responseText,status:o.status,statusText:o.statusText,headers:f,config:t,request:o}),o=null}},o.onabort=function(){o&&(e(w("Request aborted",t,"ECONNABORTED",o)),o=null)},o.onerror=function(){e(w("Network Error",t,null,o)),o=null},o.ontimeout=function(){e(w("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",o)),o=null},d.isStandardBrowserEnv()){var u=R,a=(t.withCredentials||x(t.url))&&t.xsrfCookieName?u.read(t.xsrfCookieName):void 0;a&&(i[t.xsrfHeaderName]=a)}if("setRequestHeader"in o&&d.forEach(i,function(t,n){void 0===r&&"content-type"===n.toLowerCase()?delete i[n]:o.setRequestHeader(n,t)}),t.withCredentials&&(o.withCredentials=!0),t.responseType)try{o.responseType=t.responseType}catch(n){if("json"!==t.responseType)throw n}"function"==typeof t.onDownloadProgress&&o.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&o.upload&&o.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){o&&(o.abort(),e(t),o=null)}),void 0===r&&(r=null),o.send(r)})},S={"Content-Type":"application/x-www-form-urlencoded"};function A(t,n){!d.isUndefined(t)&&d.isUndefined(t["Content-Type"])&&(t["Content-Type"]=n)}var k,N={adapter:("undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)?k=O:"undefined"!=typeof XMLHttpRequest&&(k=O),k),transformRequest:[function(t,n){return b(n,"Accept"),b(n,"Content-Type"),d.isFormData(t)||d.isArrayBuffer(t)||d.isBuffer(t)||d.isStream(t)||d.isFile(t)||d.isBlob(t)?t:d.isArrayBufferView(t)?t.buffer:d.isURLSearchParams(t)?(A(n,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):d.isObject(t)?(A(n,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(t){N.headers[t]={}}),d.forEach(["post","put","patch"],function(t){N.headers[t]=d.merge(S)});var E=N;function C(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var T=function(t){var n,e;return C(t),t.baseURL&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t.url)&&(t.url=(n=t.baseURL,(e=t.url)?n.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):n)),t.headers=t.headers||{},t.data=g(t.data,t.headers,t.transformRequest),t.headers=d.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),d.forEach(["delete","get","head","post","put","patch","common"],function(n){delete t.headers[n]}),(t.adapter||E.adapter)(t).then(function(n){return C(t),n.data=g(n.data,n.headers,t.transformResponse),n},function(n){return y(n)||(C(t),n&&n.response&&(n.response.data=g(n.response.data,n.response.headers,t.transformResponse))),Promise.reject(n)})},B=function(t,n){n=n||{};var e={};return d.forEach(["url","method","params","data"],function(t){void 0!==n[t]&&(e[t]=n[t])}),d.forEach(["headers","auth","proxy"],function(r){d.isObject(n[r])?e[r]=d.deepMerge(t[r],n[r]):void 0!==n[r]?e[r]=n[r]:d.isObject(t[r])?e[r]=d.deepMerge(t[r]):void 0!==t[r]&&(e[r]=t[r])}),d.forEach(["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"],function(r){void 0!==n[r]?e[r]=n[r]:void 0!==t[r]&&(e[r]=t[r])}),e};function D(t){this.defaults=t,this.interceptors={request:new m,response:new m}}D.prototype.request=function(t){"string"==typeof t?(t=arguments[1]||{}).url=arguments[0]:t=t||{},(t=B(this.defaults,t)).method=t.method?t.method.toLowerCase():"get";var n=[T,void 0],e=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){n.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){n.push(t.fulfilled,t.rejected)});n.length;)e=e.then(n.shift(),n.shift());return e},D.prototype.getUri=function(t){return t=B(this.defaults,t),h(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},d.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(n,e){return this.request(d.merge(e||{},{method:t,url:n}))}}),d.forEach(["post","put","patch"],function(t){D.prototype[t]=function(n,e,r){return this.request(d.merge(r||{},{method:t,url:n,data:e}))}});var F=D;function L(t){this.message=t}L.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},L.prototype.__CANCEL__=!0;var P=L;function q(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var n;this.promise=new Promise(function(t){n=t});var e=this;t(function(t){e.reason||(e.reason=new P(t),n(e.reason))})}q.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},q.source=function(){var t;return{token:new q(function(n){t=n}),cancel:t}};var M=q;function U(t){var n=new F(t),e=u(F.prototype.request,n);return d.extend(e,F.prototype,n),d.extend(e,n),e}var $=U(E);$.Axios=F,$.create=function(t){return U(B($.defaults,t))},$.Cancel=P,$.CancelToken=M,$.isCancel=y,$.all=function(t){return Promise.all(t)},$.spread=function(t){return function(n){return t.apply(null,n)}};var _=$;_.default=$;var z=_,H=i(function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t){return function(n,e,i){return{configurable:!0,enumerable:i.enumerable,get:function(){return Object.defineProperty(this,e,{configurable:!0,enumerable:i.enumerable,value:r(i.value,t)}),this[e]}}}},n.debounce=r;var e=500;function r(t){var n=arguments.length<=1||void 0===arguments[1]?e:arguments[1],r=void 0;function i(){for(var e=this,o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];i.clear(),r=setTimeout(function(){r=null,t.apply(e,u)},n)}return i.clear=function(){r&&(clearTimeout(r),r=null)},i}n.DEFAULT_DEBOUNCE_DURATION=e});r(H);const X=r(i(function(t,n){function e(t,n){for(var e=Object.getOwnPropertyNames(n),r=0;r<e.length;r++){var i=e[r],o=Object.getOwnPropertyDescriptor(n,i);o&&o.configurable&&void 0===t[i]&&Object.defineProperty(t,i,o)}return t}Object.defineProperty(n,"__esModule",{value:!0});var r,i,o=(r=H)&&r.__esModule?r:{default:r};n.default=o.default,e(n,(delete(i=e({},H)).default,i))}));var I=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};const J=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=1)}([function(t,n,e){var r=e(2),i=e(3),o=e(4);t.exports=function(t){return r(t)||i(t)||o()}},function(t,n,e){e.r(n),e.d(n,"sparkline",function(){return c});var r=e(0),i=e.n(r);function o(t,n,e,r){return parseFloat((n-r*n/t+e).toFixed(2))}function u(t){return t.value}function a(t,n){var e=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in n)e.setAttribute(r,n[r]);return e}function c(t,n,e){var r;if(r=t,i()(r.querySelectorAll("*")).forEach(function(t){return r.removeChild(t)}),!(n.length<=1)){e=e||{},"number"==typeof n[0]&&(n=n.map(function(t){return{value:t}}));var c=e.onmousemove,f=e.onmouseout,s="interactive"in e?e.interactive:!!c,l=e.spotRadius||2,d=2*l,p=e.cursorWidth||2,h=parseFloat(t.attributes["stroke-width"].value),v=e.fetch||u,m=n.map(function(t){return v(t)}),g=parseFloat(t.attributes.width.value)-2*d,y=parseFloat(t.attributes.height.value),b=y-2*h-d,w=Math.max.apply(Math,i()(m)),j=-1e3,x=m.length-1,R=g/x,O=[],S=o(w,b,h+l,m[0]),A="M".concat(String(d)," ").concat(String(S));m.forEach(function(t,e){var r=e*R+d,i=o(w,b,h+l,t);O.push(Object.assign({},n[e],{index:e,x:r,y:i})),A+=" L ".concat(String(r)," ").concat(String(i))});var k=a("path",{class:"sparkline--line",d:A,fill:"none"}),N=a("path",{class:"sparkline--fill",d:"".concat(A," V ").concat(String(y)," L ").concat(String(d)," ").concat(String(y)," Z"),stroke:"none"});if(t.appendChild(N),t.appendChild(k),s){var E=a("line",{class:"sparkline--cursor",x1:j,x2:j,y1:0,y2:y,"stroke-width":p}),C=a("circle",{class:"sparkline--spot",cx:j,cy:j,r:l});t.appendChild(E),t.appendChild(C);var T=a("rect",{width:t.attributes.width.value,height:t.attributes.height.value,style:"fill: transparent; stroke: transparent",class:"sparkline--interaction-layer"});t.appendChild(T),T.addEventListener("mouseout",function(t){E.setAttribute("x1",j),E.setAttribute("x2",j),C.setAttribute("cx",j),f&&f(t)}),T.addEventListener("mousemove",function(t){var n=t.offsetX,e=O.find(function(t){return t.x>=n});e||(e=O[x]);var r,i=O[O.indexOf(e)-1],o=(r=i?i.x+(e.x-i.x)/2<=n?e:i:e).x,u=r.y;C.setAttribute("cx",o),C.setAttribute("cy",u),E.setAttribute("x1",o),E.setAttribute("x2",o),c&&c(t,r)})}}}n.default=c},function(t){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},function(t){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}}]),K=(t,n)=>{if(t.tagName===n)return t;for(;(t=t.parentNode)&&t.tagName!==n;);return t},V=class{constructor(n){t(this,n),this.data=[],this.currency=[]}validateName(t){if(null===typeof t)throw new Error("`strategy` is required")}handleWindowResize(){this.calculateSize()}componentDidLoad(){console.info("did load"),this.calculateSize(),this.getData()}componentDidRender(){console.info("did render"),this.generateChart()}calculateSize(){const t=this.el.querySelector(".sparkline--container");console.log(t.offsetWidth,t.offsetHeight),this.width=t.offsetWidth}getData(){z({method:"get",url:`https://api.purple-trading.com/strategies/${this.strategy}`}).then(t=>{this.name=t.data.name,this.currency=t.data.currency,this.gain=t.data.gainsSum,this.data=t.data.dailyGains,this.generateChart()})}generateChart(){const t=this,n={width:this.width,fetch:t=>t.gain,onmousemove(n,e){const r=K(n.target,"svg").nextElementSibling,i=t.data.map(t=>t.date).indexOf(e.date)<t.data.length/2;r.style.visibility="visible",r.textContent=`${(100*e.gain).toFixed(2)} %`,r.style.top=`${n.offsetY}px`,i?(r.style.left=`${n.offsetX+20}px`,r.style.right="unset"):(r.style.left="unset",r.style.right=`${t.width-n.offsetX+20}px`)},onmouseout(){K(event.target,"svg").nextElementSibling.style.visibility="hidden"}},e=this.el.querySelector(".sparkline");e.innerHTML="",console.log(e),J.sparkline(e,this.data,n)}render(){console.info("render");const t=o("pt-widget",{"my-class":!0});return n("div",{class:t},n("h3",{class:"widget--header"},this.name),n("div",{class:"widget--gain"},this.gain," %"),n("div",{class:"widget--currency"},this.currency.map(t=>n("div",null,t))),n("div",{class:"sparkline--container"},n("svg",{class:"sparkline",width:this.width,height:this.height,"stroke-width":"2",stroke:"blue",fill:"transparent"}),n("span",{class:"sparkline--tooltip"})))}get el(){return e(this)}static get watchers(){return{strategy:["validateName"]}}static get style(){return".pt-widget{position:relative;height:100%}.pt-widget .widget--header{margin:0;font-size:16px;line-height:16px;color:#522974;font-weight:400}.pt-widget .widget--gain{font-size:16px;line-height:16px;color:grey}.pt-widget .widget--currency{font-size:12px;line-height:12px;color:grey;position:absolute;top:0;right:0}.pt-widget .sparkline{stroke:#14ad53;fill:transparent;stroke-width:2}.pt-widget .sparkline--container{-ms-flex:1;flex:1}.pt-widget .sparkline--tooltip{visibility:hidden;position:absolute;background:rgba(82,41,116,.8);color:#fff;padding:2px 5px;font-size:12px;white-space:nowrap;z-index:9999}.pt-widget .sparkline--cursor{stroke:#efefef}.pt-widget .sparkline--spot{fill:#522974;stroke:#522974}"}};!function(t,n,e,r){var i,o=arguments.length,u=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,e):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(t,n,e,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(u=(o<3?i(u):o>3?i(n,e,u):i(n,e))||u);o>3&&u&&Object.defineProperty(n,e,u)}([X(1e3),I("design:type",Function),I("design:paramtypes",[]),I("design:returntype",void 0)],V.prototype,"handleWindowResize",null);export{V as pt_widget};