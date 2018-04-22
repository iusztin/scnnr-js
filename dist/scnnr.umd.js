!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scnnr=t()}(this,function(){"use strict";function e(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function t(e){return"[object Array]"===w.call(e)}function n(e){return null!==e&&"object"==typeof e}function r(e){return"[object Function]"===w.call(e)}function o(e,n){if(null!==e&&void 0!==e)if("object"==typeof e||t(e)||(e=[e]),t(e))for(var r=0,o=e.length;r<o;r++)n.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.call(null,e[i],i,e)}function i(){function e(e,n){t[n]="object"==typeof t[n]&&"object"==typeof e?i(t[n],e):e}for(var t={},n=0,r=arguments.length;n<r;n++)o(arguments[n],e);return t}function s(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function a(){this.message="String contains an invalid character"}function u(e,t){!v.isUndefined(e)&&v.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function c(){this.handlers=[]}function f(e){e.cancelToken&&e.cancelToken.throwIfRequested()}function l(e){this.defaults=e,this.interceptors={request:new A,response:new A}}function p(e){this.message=e}function h(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new U(e),t(n.reason))})}function d(e){var t=new q(e),n=y(q.prototype.request,t);return v.extend(n,q.prototype,t),v.extend(n,t),n}function m(e){var t=this,n=e.requestFunc,r=e.conditionChecker,o=e.remainingTime,i=(o||0)-25<0?o:25;return new Promise(function(e,s){return o<=0?s(new J("Polling timed out")):n({timeout:i}).then(function(s){if(r(s))return e(s);return e(m.call(t,{requestFunc:n,conditionChecker:r,remainingTime:o-i}))})})}var g={url:"https://api.scnnr.cubki.jp/",version:"v1",timeout:null,apiKey:null},y=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},w=Object.prototype.toString,v={isArray:t,isArrayBuffer:function(e){return"[object ArrayBuffer]"===w.call(e)},isBuffer:function(t){return null!=t&&(e(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&e(t.slice(0,0))}(t)||!!t._isBuffer)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:n,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===w.call(e)},isFile:function(e){return"[object File]"===w.call(e)},isBlob:function(e){return"[object Blob]"===w.call(e)},isFunction:r,isStream:function(e){return n(e)&&r(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:o,merge:i,extend:function(e,t,n){return o(t,function(t,r){e[r]=n&&"function"==typeof t?y(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},b=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}(new Error(e),t,n,r,o)},C=v.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=v.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";(a.prototype=new Error).code=5,a.prototype.name="InvalidCharacterError";var E=function(e){for(var t,n,r=String(e),o="",i=0,s=j;r.charAt(0|i)||(s="=",i%1);o+=s.charAt(63&t>>8-i%1*8)){if((n=r.charCodeAt(i+=.75))>255)throw new a;t=t<<8|n}return o},R=v.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),v.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),v.isString(r)&&s.push("path="+r),v.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},P="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||E,O=function(e){return new Promise(function(t,n){var r=e.data,o=e.headers;v.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest,a="onreadystatechange",u=!1;if("test"===process.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in i||C(e.url)||(i=new window.XDomainRequest,a="onload",u=!0,i.onprogress=function(){},i.ontimeout=function(){}),e.auth){o.Authorization="Basic "+P((e.auth.username||"")+":"+(e.auth.password||""))}if(i.open(e.method.toUpperCase(),function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(v.isURLSearchParams(t))r=t.toString();else{var o=[];v.forEach(t,function(e,t){null!==e&&void 0!==e&&(v.isArray(e)&&(t+="[]"),v.isArray(e)||(e=[e]),v.forEach(e,function(e){v.isDate(e)?e=e.toISOString():v.isObject(e)&&(e=JSON.stringify(e)),o.push(s(t)+"="+s(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}(e.url,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i[a]=function(){if(i&&(4===i.readyState||u)&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in i?function(e){var t,n,r,o={};return e?(v.forEach(e.split("\n"),function(e){r=e.indexOf(":"),t=v.trim(e.substr(0,r)).toLowerCase(),n=v.trim(e.substr(r+1)),t&&(o[t]=o[t]?o[t]+", "+n:n)}),o):o}(i.getAllResponseHeaders()):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(b("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,{data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:1223===i.status?204:i.status,statusText:1223===i.status?"No Content":i.statusText,headers:r,config:e,request:i}),i=null}},i.onerror=function(){n(b("Network Error",e,null,i)),i=null},i.ontimeout=function(){n(b("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",i)),i=null},v.isStandardBrowserEnv()){var c=R,f=(e.withCredentials||C(e.url))&&e.xsrfCookieName?c.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}if("setRequestHeader"in i&&v.forEach(o,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)}),e.withCredentials&&(i.withCredentials=!0),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){i&&(i.abort(),n(e),i=null)}),void 0===r&&(r=null),i.send(r)})},S={"Content-Type":"application/x-www-form-urlencoded"},k={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=O:"undefined"!=typeof process&&(e=O),e}(),transformRequest:[function(e,t){return function(e,t){v.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}(t,"Content-Type"),v.isFormData(e)||v.isArrayBuffer(e)||v.isBuffer(e)||v.isStream(e)||v.isFile(e)||v.isBlob(e)?e:v.isArrayBufferView(e)?e.buffer:v.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):v.isObject(e)?(u(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};k.headers={common:{Accept:"application/json, text/plain, */*"}},v.forEach(["delete","get","head"],function(e){k.headers[e]={}}),v.forEach(["post","put","patch"],function(e){k.headers[e]=v.merge(S)});var T=k;c.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},c.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},c.prototype.forEach=function(e){v.forEach(this.handlers,function(t){null!==t&&e(t)})};var A=c,x=function(e,t,n){return v.forEach(n,function(n){e=n(e,t)}),e},_=function(e){return!(!e||!e.__CANCEL__)},B=function(e){f(e),e.headers=e.headers||{},e.data=x(e.data,e.headers,e.transformRequest),e.headers=v.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),v.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});return(e.adapter||T.adapter)(e).then(function(t){return f(e),t.data=x(t.data,t.headers,e.transformResponse),t},function(t){return _(t)||(f(e),t&&t.response&&(t.response.data=x(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})};l.prototype.request=function(e){"string"==typeof e&&(e=v.merge({url:arguments[0]},arguments[1])),(e=v.merge(T,this.defaults,{method:"get"},e)).method=e.method.toLowerCase(),e.baseURL&&!function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}(e.url)&&(e.url=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e.baseURL,e.url));var t=[B,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},v.forEach(["delete","get","head","options"],function(e){l.prototype[e]=function(t,n){return this.request(v.merge(n||{},{method:e,url:t}))}}),v.forEach(["post","put","patch"],function(e){l.prototype[e]=function(t,n,r){return this.request(v.merge(r||{},{method:e,url:t,data:n}))}});var q=l;p.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},p.prototype.__CANCEL__=!0;var U=p;h.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},h.source=function(){var e;return{token:new h(function(t){e=t}),cancel:e}};var L=h,D=d(T);D.Axios=q,D.create=function(e){return d(v.merge(T,e))},D.Cancel=U,D.CancelToken=L,D.isCancel=_,D.all=function(e){return Promise.all(e)},D.spread=function(e){return function(t){return e.apply(null,t)}};var F=D;F.default=D;var N=F,I=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){function t(e){I(this,t);var n=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(n,t):n.stack=(new Error).stack,n}return H(t,e),t}(Error),J=function(e){function t(e){I(this,t);var n=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="PollTimeout",n}return H(t,X),t}(),V=function(e){function t(e){I(this,t);var n=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="PreconditionFailed",n}return H(t,X),t}(),$=function(e){function t(e){var n=e.title,r=e.detail,o=e.type,i=e.statusCode,s=e.rawResponse;I(this,t);var a=function(e,t,n){var r="";return e&&(r="["+e+"]"),t&&(r=r+" "+t),n&&(r=r+" ("+n+")"),r}(n,r,o),u=K(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a));return u.name="ScnnrAPIError",Object.assign(u,{title:n,detail:r,type:o,statusCode:i,rawResponse:s}),u}return H(t,X),t}(),M=Object.freeze({ScnnrError:X,PollTimeout:J,PreconditionFailed:V,ScnnrAPIError:$}),G=function(){function e(t){var n=t.url,r=t.apiKey,o=t.params,i=t.onUploadProgress,s=t.onDownloadProgress;I(this,e);var a={};r&&(a["x-api-key"]=r),this.httpClient=N.create({params:o,headers:a,baseURL:n,onUploadProgress:i,onDownloadProgress:s}),this.httpClient.interceptors.response.use(function(e){return e},this.errorInterceptor)}return z(e,[{key:"get",value:function(e){return this.httpClient.get(e,null)}},{key:"sendJson",value:function(e,t){return this.send(e,t,"application/json")}},{key:"sendBinary",value:function(e,t){return this.send(e,t,"application/octet-stream")}},{key:"send",value:function(e,t,n){return this.httpClient.post(e,t,{headers:{"Content-Type":n}})}},{key:"errorInterceptor",value:function(e){return e.response?Promise.reject(new $({title:e.response.data.title||e.response.data.message,detail:e.response.data.detail||e.message,type:e.response.data.type,rawResponse:e.response.data,statusCode:e.response.status})):Promise.reject(e)}}]),e}(),Q=function e(t){I(this,e),this.category=t.category,this.boundingBox=t.boundingBox||t.bounding_box,this.labels=t.labels},W=function e(t){var n=t.width,r=t.height;I(this,e),this.width=n,this.height=r},Y=function e(t){var n=t.url,r=t.size;I(this,e),this.url=n,this.size=new W(r)};Y.Size=W;var Z=function(){function e(t){var n=t.id,r=t.objects,o=t.state,i=t.image,s=t.error;I(this,e),this.id=n,this.objects=(r||[]).map(function(e){return new Q(e)}),this.state=o,null!=i&&(this.image=new Y(i)),this.error=s}return z(e,[{key:"isFinished",value:function(){return"finished"===this.state}}]),e}();Z.Item=Q,Z.Image=Y;var ee=function(){function e(t){I(this,e),this.config=Object.assign({},g,t)}return z(e,[{key:"recognizeURL",value:function(e){var t=this;return this.recognizeRequest(function(n){return t.connection(!0,n).sendJson("/remote/recognitions",{url:e})},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}},{key:"recognizeImage",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={public:n.public},o=Object.assign({},n,{params:r});return this.recognizeRequest(function(n){return t.connection(!0,n).sendBinary("/recognitions",e)},o)}},{key:"recognizeRequest",value:function(e,t){var n=this;if(t.timeout>100)throw new X("Timeout time greater than 100 not allowed");var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1];return e-t<0?e:t}(t.timeout,25),o=e(Object.assign({},t,{timeout:r}));return new Promise(function(e,i){o.then(n.handleResponse).then(function(o){return(t.timeout||0)>0&&!o.isFinished()?m({requestFunc:function(e){return n.fetch(o.id,e)},conditionChecker:function(e){return e.isFinished()},remainingTime:t.timeout-r}):e(o)}).then(e).catch(i)})}},{key:"fetch",value:function(e){return this.connection(!1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).get("/recognitions/"+e).then(this.handleResponse)}},{key:"handleResponse",value:function(e){return new Z(e.data)}},{key:"connection",value:function(e,t){return new G(this.connectionConfig(e,t))}},{key:"connectionConfig",value:function(e,t){var n=Object.assign({},this.config,t),r=function(e){return"string"!=typeof e?null:""===(e=e.replace(/^\s*/,"").replace(/\s*$/,""))?null:e}(n.apiKey);if(e&&null==r)throw new V("`apiKey` configuration is required.");var o=t.params||{};return(n.timeout||0)>0&&(o.timeout=n.timeout),{apiKey:r,params:o,url:n.url+n.version,onUploadProgress:n.onUploadProgress,onDownloadProgress:n.onDownloadProgress}}}]),e}();return Object.assign(function(e){return new ee(e)},{Client:ee,Connection:G,Recognition:Z},M)});
