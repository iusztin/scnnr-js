!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.scnnr=t()}(this,function(){"use strict";function e(e){return"[object Array]"===b.call(e)}function t(e){return null!==e&&"object"==typeof e}function n(e){return"[object Function]"===b.call(e)}function r(t,n){if(null!==t&&void 0!==t)if("object"!=typeof t&&(t=[t]),e(t))for(var r=0,o=t.length;r<o;r++)n.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&n.call(null,t[i],i,t)}function o(){function e(e,n){t[n]="object"==typeof t[n]&&"object"==typeof e?o(t[n],e):e}for(var t={},n=0,i=arguments.length;n<i;n++)r(arguments[n],e);return t}function i(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function s(e,t){!k.isUndefined(e)&&k.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function u(){this.handlers=[]}function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}function c(e){this.defaults=e,this.interceptors={request:new _,response:new _}}function f(e){this.message=e}function l(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new U(e),t(n.reason))})}function p(e){var t=new B(e),n=w(B.prototype.request,t);return k.extend(n,B.prototype,t),k.extend(n,t),n}function h(e,t,n){var r="";return e&&(r="["+e+"]"),t&&(r=r+" "+t),n&&(r=r+" ("+n+")"),r}function d(e){switch(e.type){case"one-time":return new Y(e.value,e.expires_in);default:return null}}function m(e){return"string"!=typeof e?null:""===(e=e.replace(/^\s*/,"").replace(/\s*$/,""))?null:e}function y(e){var t=m(e.apiKey),n=m(e.publicAPIKey);if(null!=t)return new W(t);if(null!=n)return new te(n,{url:e.url,version:e.version});throw new X("`apiKey` or `publicAPIKey` configuration is required.")}function g(e){var t=this,n=e.requestFunc,r=e.conditionChecker,o=e.remainingTime,i=(o||0)-25<0?o:25;return new Promise(function(e,s){return o<=0?s(new V("Polling timed out")):n({timeout:i}).then(function(s){if(r(s))return e(s);return e(g.call(t,{requestFunc:n,conditionChecker:r,remainingTime:o-i}))})})}var v={url:"https://api.scnnr.cubki.jp/",version:"v1",timeout:null,apiKey:null},w=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},b=Object.prototype.toString,k={isArray:e,isArrayBuffer:function(e){return"[object ArrayBuffer]"===b.call(e)},isBuffer:function(e){return null!=e&&null!=e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:t,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===b.call(e)},isFile:function(e){return"[object File]"===b.call(e)},isBlob:function(e){return"[object Blob]"===b.call(e)},isFunction:n,isStream:function(e){return t(e)&&n(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:r,merge:o,extend:function(e,t,n){return r(t,function(t,r){e[r]=n&&"function"==typeof t?w(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}},P=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}(new Error(e),t,n,r,o)},j=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],R=k.isStandardBrowserEnv()?function(){function e(e){var t=e;return n&&(r.setAttribute("href",t),t=r.href),r.setAttribute("href",t),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}var t,n=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");return t=e(window.location.href),function(n){var r=k.isString(n)?e(n):n;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},T=k.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),k.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),k.isString(r)&&s.push("path="+r),k.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},E=function(e){return new Promise(function(t,n){var r=e.data,o=e.headers;k.isFormData(r)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var u=e.auth.username||"",a=e.auth.password||"";o.Authorization="Basic "+btoa(u+":"+a)}if(s.open(e.method.toUpperCase(),function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(k.isURLSearchParams(t))r=t.toString();else{var o=[];k.forEach(t,function(e,t){null!==e&&void 0!==e&&(k.isArray(e)?t+="[]":e=[e],k.forEach(e,function(e){k.isDate(e)?e=e.toISOString():k.isObject(e)&&(e=JSON.stringify(e)),o.push(i(t)+"="+i(e))}))}),r=o.join("&")}return r&&(e+=(-1===e.indexOf("?")?"?":"&")+r),e}(e.url,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in s?function(e){var t,n,r,o={};return e?(k.forEach(e.split("\n"),function(e){if(r=e.indexOf(":"),t=k.trim(e.substr(0,r)).toLowerCase(),n=k.trim(e.substr(r+1)),t){if(o[t]&&j.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([n]):o[t]?o[t]+", "+n:n}}),o):o}(s.getAllResponseHeaders()):null;!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(P("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,{data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:r,config:e,request:s}),s=null}},s.onerror=function(){n(P("Network Error",e,null,s)),s=null},s.ontimeout=function(){n(P("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",s)),s=null},k.isStandardBrowserEnv()){var c=T,f=(e.withCredentials||R(e.url))&&e.xsrfCookieName?c.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}if("setRequestHeader"in s&&k.forEach(o,function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)}),e.withCredentials&&(s.withCredentials=!0),e.responseType)try{s.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){s&&(s.abort(),n(e),s=null)}),void 0===r&&(r=null),s.send(r)})},O={"Content-Type":"application/x-www-form-urlencoded"},C={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=E:"undefined"!=typeof process&&(e=E),e}(),transformRequest:[function(e,t){return function(e,t){k.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}(t,"Content-Type"),k.isFormData(e)||k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e)?e:k.isArrayBufferView(e)?e.buffer:k.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):k.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};C.headers={common:{Accept:"application/json, text/plain, */*"}},k.forEach(["delete","get","head"],function(e){C.headers[e]={}}),k.forEach(["post","put","patch"],function(e){C.headers[e]=k.merge(O)});var x=C;u.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},u.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},u.prototype.forEach=function(e){k.forEach(this.handlers,function(t){null!==t&&e(t)})};var _=u,A=function(e,t,n){return k.forEach(n,function(n){e=n(e,t)}),e},S=function(e){return!(!e||!e.__CANCEL__)},q=function(e){a(e),e.baseURL&&!function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}(e.url)&&(e.url=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e.baseURL,e.url)),e.headers=e.headers||{},e.data=A(e.data,e.headers,e.transformRequest),e.headers=k.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),k.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});return(e.adapter||x.adapter)(e).then(function(t){return a(e),t.data=A(t.data,t.headers,e.transformResponse),t},function(t){return S(t)||(a(e),t&&t.response&&(t.response.data=A(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})};c.prototype.request=function(e){"string"==typeof e&&(e=k.merge({url:arguments[0]},arguments[1])),(e=k.merge(x,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[q,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},k.forEach(["delete","get","head","options"],function(e){c.prototype[e]=function(t,n){return this.request(k.merge(n||{},{method:e,url:t}))}}),k.forEach(["post","put","patch"],function(e){c.prototype[e]=function(t,n,r){return this.request(k.merge(r||{},{method:e,url:t,data:n}))}});var B=c;f.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},f.prototype.__CANCEL__=!0;var U=f;l.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},l.source=function(){var e;return{token:new l(function(t){e=t}),cancel:e}};var I=l,D=p(x);D.Axios=B,D.create=function(e){return p(k.merge(x,e))},D.Cancel=U,D.CancelToken=I,D.isCancel=S,D.all=function(e){return Promise.all(e)},D.spread=function(e){return function(t){return e.apply(null,t)}};var L=D;L.default=D;var F=L,N=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},z=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){function t(e){N(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return Error.hasOwnProperty("captureStackTrace")?Error.captureStackTrace(n,t):n.stack=(new Error).stack,n}return K(t,e),t}(Error),V=function(e){function t(e){N(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="PollTimeout",n}return K(t,J),t}(),X=function(e){function t(e){N(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.name="PreconditionFailed",n}return K(t,J),t}(),$=function(e){function t(e){var n=e.title,r=e.detail,o=e.type,i=e.statusCode,s=e.rawResponse;N(this,t);var u=h(n,r,o),a=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,u));return a.name="ScnnrAPIError",Object.assign(a,{title:n,detail:r,type:o,statusCode:i,rawResponse:s}),a}return K(t,J),t}(),M=function(e){function t(e,n){var r=e.title,o=e.detail,i=e.type;N(this,t);var s=h(r,o,i),u=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s));return u.name="RecognitionError",Object.assign(u,{title:r,detail:o,type:i,recognition:n}),u}return K(t,J),t}(),G=Object.freeze({ScnnrError:J,PollTimeout:V,PreconditionFailed:X,ScnnrAPIError:$,RecognitionError:M}),Q=function(){function e(){N(this,e),this.interceptRequest=this.interceptRequest.bind(this)}return z(e,[{key:"interceptRequest",value:function(e){return Promise.resolve(e)}}]),e}(),W=function(e){function t(e){N(this,t);var n=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.apiKey=e,n}return K(t,Q),z(t,[{key:"interceptRequest",value:function(e){var t=this;return new Promise(function(n,r){e.headers["x-api-key"]=t.apiKey,n(e)})}}]),t}(),Y=function(){function e(t,n){N(this,e),this.value=t,this.expiresIn=n,this.expiresAt=new Date(Date.now()+1e3*n)}return z(e,[{key:"hasExpired",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return Date.now()>=this.expiresAt.getTime()-e}}]),e}(),Z=Object.freeze({OneTimeToken:Y,buildToken:d}),ee=function(){function e(t,n){N(this,e),this.publicAPIKey=t,this.options=n,this.token=null,this.timeout=null,this.marginToExpire=.05}return z(e,[{key:"get",value:function(){var e=this;return this.issue().then(function(){return e.getAndClearToken()})}},{key:"issue",value:function(){var e=this;return this.hasValidToken()?Promise.resolve():this.requestToken().then(function(t){e.token=t})}},{key:"requestToken",value:function(){return ne.build(!0,Object.assign({},this.options,{apiKey:this.publicAPIKey})).sendJson("/auth/tokens",{type:"one-time"}).then(function(e){return d(e.data)})}},{key:"hasValidToken",value:function(){return null!=this.token&&!this.token.hasExpired(this.token.expiresIn*this.marginToExpire*1e3)}},{key:"getAndClearToken",value:function(){var e=this.token;return this.token=null,e}}]),e}(),te=function(e){function t(e,n){N(this,t);var r=H(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.oneTimeTokenProvider=new ee(e,n),r}return K(t,Q),z(t,[{key:"interceptRequest",value:function(e){return this.oneTimeTokenProvider.get().then(function(t){return e.headers["x-api-key"]="use-scnnr-one-time-token",e.headers["x-scnnr-one-time-token"]=t.value,e})}}]),t}(),ne=function(){function e(t){var n=t.url,r=t.apiKey,o=t.params,i=t.authInterceptor,s=t.onUploadProgress,u=t.onDownloadProgress;N(this,e);var a={};r&&(a["x-api-key"]=r),this.httpClient=F.create({params:o,headers:a,baseURL:n,onUploadProgress:s,onDownloadProgress:u}),this.httpClient.interceptors.response.use(function(e){return e},this.errorInterceptor),null!=i&&this.httpClient.interceptors.request.use(i.interceptRequest)}return z(e,[{key:"get",value:function(e){return this.httpClient.get(e,null)}},{key:"sendJson",value:function(e,t){return this.send(e,t,"application/json")}},{key:"sendBinary",value:function(e,t){return this.send(e,t,"application/octet-stream")}},{key:"send",value:function(e,t,n){return this.httpClient.post(e,t,{headers:{"Content-Type":n}})}},{key:"errorInterceptor",value:function(e){return e.response?Promise.reject(new $({title:e.response.data.title||e.response.data.message,detail:e.response.data.detail||e.message,type:e.response.data.type,rawResponse:e.response.data,statusCode:e.response.status})):Promise.reject(e)}}],[{key:"build",value:function(t,n){var r=n.params||{};return(n.timeout||0)>0&&(r.timeout=n.timeout),new e({params:r,authInterceptor:t?y(n):null,url:n.url+n.version,onUploadProgress:n.onUploadProgress,onDownloadProgress:n.onDownloadProgress})}}]),e}(),re=function e(t){N(this,e),this.category=t.category,this.boundingBox=t.boundingBox||t.bounding_box,this.labels=t.labels},oe=function e(t){var n=t.width,r=t.height;N(this,e),this.width=n,this.height=r},ie=function e(t){var n=t.url,r=t.size;N(this,e),this.url=n,this.size=new oe(r)};ie.Size=oe;var se=function(){function e(t){var n=t.id,r=t.objects,o=t.state,i=t.image,s=t.error;N(this,e),this.id=n,this.objects=(r||[]).map(function(e){return new re(e)}),this.state=o,null!=i&&(this.image=new ie(i)),this.error=s}return z(e,[{key:"isFinished",value:function(){return"finished"===this.state}},{key:"hasError",value:function(){return!!this.error}}]),e}();se.Item=re,se.Image=ie;var ue=function(){function e(t){N(this,e),this.config=Object.assign({},v,t)}return z(e,[{key:"recognizeURL",value:function(e){var t=this;return this.recognizeRequest(function(n){return t.connection(!0,n).sendJson("/remote/recognitions",{url:e})},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{})}},{key:"recognizeImage",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={public:n.public},o=Object.assign({},n,{params:r});return this.recognizeRequest(function(n){return t.connection(!0,n).sendBinary("/recognitions",e)},o)}},{key:"recognizeRequest",value:function(e,t){var n=this,r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments[1];return e-t<0?e:t}(t.timeout,25),o=e(Object.assign({},t,{timeout:r}));return new Promise(function(e,i){o.then(n.handleResponse).then(function(o){return(t.timeout||0)>0&&!o.isFinished()?g({requestFunc:function(e){return n.fetch(o.id,e)},conditionChecker:function(e){return e.isFinished()},remainingTime:t.timeout-r}):e(o)}).then(e).catch(i)})}},{key:"fetch",value:function(e){return this.connection(!1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).get("/recognitions/"+e).then(this.handleResponse)}},{key:"handleResponse",value:function(e){var t=new se(e.data);if(t.hasError())throw new M(t.error,t);return t}},{key:"connection",value:function(e,t){return ne.build(e,Object.assign({},this.config,t))}}]),e}();return Object.assign(function(e){return new ue(e)},{Client:ue,Connection:ne,Recognition:se,PrivateKeyAuthInterceptor:W,PublicKeyAuthInterceptor:te,authInterceptor:y,OneTimeTokenProvider:ee},Z,G)});
