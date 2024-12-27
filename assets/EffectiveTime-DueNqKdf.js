import{C as st,_ as ot}from"./SearchItem.vue_vue_type_script_setup_true_lang-HN9sb5Ci.js";import{_ as it}from"./BackBtn.vue_vue_type_script_setup_true_lang-DjJPGEGx.js";import{_ as at}from"./ProgressBar.vue_vue_type_script_setup_true_lang-CtrRUcMy.js";import{d as Be,o as ie,c as ae,a as F,h as H,i as ct,l as te,m as lt,w as ut,F as ft,r as dt}from"./index-C49GVAEx.js";const pt={class:"border-2 p-[20px] rounded-lg w-full"},ht={class:"flex items-center justify-between mb-[20px]"},mt=Be({__name:"EffectiveTimeStudent",setup(e){const t={value:50,percentage:50,color:"bg-green-500"};return(r,n)=>(ie(),ae("article",pt,[n[1]||(n[1]=F("div",{class:"mb-[20px]"},[F("p",null,"ELA - 5th"),F("p",{class:"font-bold"},"Jose Martinez de la Cruz")],-1)),F("div",ht,[n[0]||(n[0]=F("p",{class:"w-1/12"},"22.4 hours ",-1)),H(at,{item:t})]),n[2]||(n[2]=ct('<div class="flex items-center"><div class="flex items-center"><div class="p-[8px] mr-[10px] rounded-full" style="background-color:#12B76A;width:16px;height:16px;"></div><p>18.4 hours of effective time</p></div><div class="flex items-center ml-[20px]"><div class="p-[8px] mr-[10px] rounded-full" style="background-color:#F04438;width:16px;height:16px;"></div><p>5.3 hours of lost time</p></div></div>',1))]))}});function De(e,t){return function(){return e.apply(t,arguments)}}const{toString:yt}=Object.prototype,{getPrototypeOf:he}=Object,X=(e=>t=>{const r=yt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),_=e=>(e=e.toLowerCase(),t=>X(t)===e),G=e=>t=>typeof t===e,{isArray:k}=Array,I=G("undefined");function bt(e){return e!==null&&!I(e)&&e.constructor!==null&&!I(e.constructor)&&A(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Ue=_("ArrayBuffer");function wt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Ue(e.buffer),t}const Et=G("string"),A=G("function"),ke=G("number"),Q=e=>e!==null&&typeof e=="object",gt=e=>e===!0||e===!1,J=e=>{if(X(e)!=="object")return!1;const t=he(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Rt=_("Date"),St=_("File"),Tt=_("Blob"),Ot=_("FileList"),xt=e=>Q(e)&&A(e.pipe),At=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||A(e.append)&&((t=X(e))==="formdata"||t==="object"&&A(e.toString)&&e.toString()==="[object FormData]"))},_t=_("URLSearchParams"),[Ct,Nt,Pt,Ft]=["ReadableStream","Request","Response","Headers"].map(_),Lt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function M(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),k(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(n=0;n<i;n++)c=o[n],t.call(null,e[c],c,e)}}function je(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const B=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qe=e=>!I(e)&&e!==B;function ce(){const{caseless:e}=qe(this)&&this||{},t={},r=(n,s)=>{const o=e&&je(t,s)||s;J(t[o])&&J(n)?t[o]=ce(t[o],n):J(n)?t[o]=ce({},n):k(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&M(arguments[n],r);return t}const Bt=(e,t,r,{allOwnKeys:n}={})=>(M(t,(s,o)=>{r&&A(s)?e[o]=De(s,r):e[o]=s},{allOwnKeys:n}),e),Dt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Ut=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},kt=(e,t,r,n)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=r!==!1&&he(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},jt=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},qt=e=>{if(!e)return null;if(k(e))return e;let t=e.length;if(!ke(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},Ht=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&he(Uint8Array)),It=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Mt=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},vt=_("HTMLFormElement"),zt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ee=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),Jt=_("RegExp"),He=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};M(r,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(n[o]=i||s)}),Object.defineProperties(e,n)},$t=e=>{He(e,(t,r)=>{if(A(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(A(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},Vt=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return k(e)?n(e):n(String(e).split(t)),r},Wt=()=>{},Kt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,ne="abcdefghijklmnopqrstuvwxyz",ge="0123456789",Ie={DIGIT:ge,ALPHA:ne,ALPHA_DIGIT:ne+ne.toUpperCase()+ge},Xt=(e=16,t=Ie.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function Gt(e){return!!(e&&A(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Qt=e=>{const t=new Array(10),r=(n,s)=>{if(Q(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=k(n)?[]:{};return M(n,(i,c)=>{const f=r(i,s+1);!I(f)&&(o[c]=f)}),t[s]=void 0,o}}return n};return r(e,0)},Zt=_("AsyncFunction"),Yt=e=>e&&(Q(e)||A(e))&&A(e.then)&&A(e.catch),Me=((e,t)=>e?setImmediate:t?((r,n)=>(B.addEventListener("message",({source:s,data:o})=>{s===B&&o===r&&n.length&&n.shift()()},!1),s=>{n.push(s),B.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",A(B.postMessage)),en=typeof queueMicrotask<"u"?queueMicrotask.bind(B):typeof process<"u"&&process.nextTick||Me,a={isArray:k,isArrayBuffer:Ue,isBuffer:bt,isFormData:At,isArrayBufferView:wt,isString:Et,isNumber:ke,isBoolean:gt,isObject:Q,isPlainObject:J,isReadableStream:Ct,isRequest:Nt,isResponse:Pt,isHeaders:Ft,isUndefined:I,isDate:Rt,isFile:St,isBlob:Tt,isRegExp:Jt,isFunction:A,isStream:xt,isURLSearchParams:_t,isTypedArray:Ht,isFileList:Ot,forEach:M,merge:ce,extend:Bt,trim:Lt,stripBOM:Dt,inherits:Ut,toFlatObject:kt,kindOf:X,kindOfTest:_,endsWith:jt,toArray:qt,forEachEntry:It,matchAll:Mt,isHTMLForm:vt,hasOwnProperty:Ee,hasOwnProp:Ee,reduceDescriptors:He,freezeMethods:$t,toObjectSet:Vt,toCamelCase:zt,noop:Wt,toFiniteNumber:Kt,findKey:je,global:B,isContextDefined:qe,ALPHABET:Ie,generateString:Xt,isSpecCompliantForm:Gt,toJSONObject:Qt,isAsyncFn:Zt,isThenable:Yt,setImmediate:Me,asap:en};function m(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const ve=m.prototype,ze={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ze[e]={value:e}});Object.defineProperties(m,ze);Object.defineProperty(ve,"isAxiosError",{value:!0});m.from=(e,t,r,n,s,o)=>{const i=Object.create(ve);return a.toFlatObject(e,i,function(f){return f!==Error.prototype},c=>c!=="isAxiosError"),m.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const tn=null;function le(e){return a.isPlainObject(e)||a.isArray(e)}function Je(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Re(e,t,r){return e?e.concat(t).map(function(s,o){return s=Je(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function nn(e){return a.isArray(e)&&!e.some(le)}const rn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function Z(e,t,r){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=a.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,h){return!a.isUndefined(h[y])});const n=r.metaTokens,s=r.visitor||u,o=r.dots,i=r.indexes,f=(r.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(p){if(p===null)return"";if(a.isDate(p))return p.toISOString();if(!f&&a.isBlob(p))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(p)||a.isTypedArray(p)?f&&typeof Blob=="function"?new Blob([p]):Buffer.from(p):p}function u(p,y,h){let w=p;if(p&&!h&&typeof p=="object"){if(a.endsWith(y,"{}"))y=n?y:y.slice(0,-2),p=JSON.stringify(p);else if(a.isArray(p)&&nn(p)||(a.isFileList(p)||a.endsWith(y,"[]"))&&(w=a.toArray(p)))return y=Je(y),w.forEach(function(S,N){!(a.isUndefined(S)||S===null)&&t.append(i===!0?Re([y],N,o):i===null?y:y+"[]",l(S))}),!1}return le(p)?!0:(t.append(Re(h,y,o),l(p)),!1)}const d=[],b=Object.assign(rn,{defaultVisitor:u,convertValue:l,isVisitable:le});function g(p,y){if(!a.isUndefined(p)){if(d.indexOf(p)!==-1)throw Error("Circular reference detected in "+y.join("."));d.push(p),a.forEach(p,function(w,R){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(R)?R.trim():R,y,b))===!0&&g(w,y?y.concat(R):[R])}),d.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return g(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function me(e,t){this._pairs=[],e&&Z(e,this,t)}const $e=me.prototype;$e.append=function(t,r){this._pairs.push([t,r])};$e.toString=function(t){const r=t?function(n){return t.call(this,n,Se)}:Se;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function sn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ve(e,t,r){if(!t)return e;const n=r&&r.encode||sn;a.isFunction(r)&&(r={serialize:r});const s=r&&r.serialize;let o;if(s?o=s(t,r):o=a.isURLSearchParams(t)?t.toString():new me(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Te{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(n){n!==null&&t(n)})}}const We={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},on=typeof URLSearchParams<"u"?URLSearchParams:me,an=typeof FormData<"u"?FormData:null,cn=typeof Blob<"u"?Blob:null,ln={isBrowser:!0,classes:{URLSearchParams:on,FormData:an,Blob:cn},protocols:["http","https","file","blob","url","data"]},ye=typeof window<"u"&&typeof document<"u",ue=typeof navigator=="object"&&navigator||void 0,un=ye&&(!ue||["ReactNative","NativeScript","NS"].indexOf(ue.product)<0),fn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dn=ye&&window.location.href||"http://localhost",pn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:ye,hasStandardBrowserEnv:un,hasStandardBrowserWebWorkerEnv:fn,navigator:ue,origin:dn},Symbol.toStringTag,{value:"Module"})),T={...pn,...ln};function hn(e,t){return Z(e,new T.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return T.isNode&&a.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function mn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yn(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function Ke(e){function t(r,n,s,o){let i=r[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),f=o>=r.length;return i=!i&&a.isArray(s)?s.length:i,f?(a.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&a.isArray(s[i])&&(s[i]=yn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const r={};return a.forEachEntry(e,(n,s)=>{t(mn(n),s,r,0)}),r}return null}function bn(e,t,r){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(e)}const v={transitional:We,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(Ke(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return hn(t,this.formSerializer).toString();if((c=a.isFileList(t))||n.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return Z(c?{"files[]":t}:t,f&&new f,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),bn(t)):t}],transformResponse:[function(t){const r=this.transitional||v.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?m.from(c,m.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:T.classes.FormData,Blob:T.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{v.headers[e]={}});const wn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),En=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&wn[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Oe=Symbol("internals");function q(e){return e&&String(e).trim().toLowerCase()}function $(e){return e===!1||e==null?e:a.isArray(e)?e.map($):String(e)}function gn(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Rn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function re(e,t,r,n,s){if(a.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!a.isString(t)){if(a.isString(n))return t.indexOf(n)!==-1;if(a.isRegExp(n))return n.test(t)}}function Sn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function Tn(e,t){const r=a.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class x{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(c,f,l){const u=q(f);if(!u)throw new Error("header name must be a non-empty string");const d=a.findKey(s,u);(!d||s[d]===void 0||l===!0||l===void 0&&s[d]!==!1)&&(s[d||f]=$(c))}const i=(c,f)=>a.forEach(c,(l,u)=>o(l,u,f));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,r);else if(a.isString(t)&&(t=t.trim())&&!Rn(t))i(En(t),r);else if(a.isHeaders(t))for(const[c,f]of t.entries())o(f,c,n);else t!=null&&o(r,t,n);return this}get(t,r){if(t=q(t),t){const n=a.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return gn(s);if(a.isFunction(r))return r.call(this,s,n);if(a.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=q(t),t){const n=a.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||re(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=q(i),i){const c=a.findKey(n,i);c&&(!r||re(n,n[c],c,r))&&(delete n[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||re(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return a.forEach(this,(s,o)=>{const i=a.findKey(n,o);if(i){r[i]=$(s),delete r[o];return}const c=t?Sn(o):String(o).trim();c!==o&&delete r[o],r[c]=$(s),n[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return a.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&a.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=q(i);n[c]||(Tn(s,i),n[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}x.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(x.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});a.freezeMethods(x);function se(e,t){const r=this||v,n=t||r,s=x.from(n.headers);let o=n.data;return a.forEach(e,function(c){o=c.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Xe(e){return!!(e&&e.__CANCEL__)}function j(e,t,r){m.call(this,e??"canceled",m.ERR_CANCELED,t,r),this.name="CanceledError"}a.inherits(j,m,{__CANCEL__:!0});function Ge(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new m("Request failed with status code "+r.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function On(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function xn(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(f){const l=Date.now(),u=n[o];i||(i=l),r[s]=f,n[s]=l;let d=o,b=0;for(;d!==s;)b+=r[d++],d=d%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const g=u&&l-u;return g?Math.round(b*1e3/g):void 0}}function An(e,t){let r=0,n=1e3/t,s,o;const i=(l,u=Date.now())=>{r=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),d=u-r;d>=n?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},n-d)))},()=>s&&i(s)]}const W=(e,t,r=3)=>{let n=0;const s=xn(50,250);return An(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,f=i-n,l=s(f),u=i<=c;n=i;const d={loaded:i,total:c,progress:c?i/c:void 0,bytes:f,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(d)},r)},xe=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},Ae=e=>(...t)=>a.asap(()=>e(...t)),_n=T.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,T.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(T.origin),T.navigator&&/(msie|trident)/i.test(T.navigator.userAgent)):()=>!0,Cn=T.hasStandardBrowserEnv?{write(e,t,r,n,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(r)&&i.push("expires="+new Date(r).toGMTString()),a.isString(n)&&i.push("path="+n),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Nn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Pn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Qe(e,t){return e&&!Nn(t)?Pn(e,t):t}const _e=e=>e instanceof x?{...e}:e;function U(e,t){t=t||{};const r={};function n(l,u,d,b){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:b},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,d,b){if(a.isUndefined(u)){if(!a.isUndefined(l))return n(void 0,l,d,b)}else return n(l,u,d,b)}function o(l,u){if(!a.isUndefined(u))return n(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return n(void 0,l)}else return n(void 0,u)}function c(l,u,d){if(d in t)return n(l,u);if(d in e)return n(void 0,l)}const f={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u,d)=>s(_e(l),_e(u),d,!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const d=f[u]||s,b=d(e[u],t[u],u);a.isUndefined(b)&&d!==c||(r[u]=b)}),r}const Ze=e=>{const t=U({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=x.from(i),t.url=Ve(Qe(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let f;if(a.isFormData(r)){if(T.hasStandardBrowserEnv||T.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((f=i.getContentType())!==!1){const[l,...u]=f?f.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(T.hasStandardBrowserEnv&&(n&&a.isFunction(n)&&(n=n(t)),n||n!==!1&&_n(t.url))){const l=s&&o&&Cn.read(o);l&&i.set(s,l)}return t},Fn=typeof XMLHttpRequest<"u",Ln=Fn&&function(e){return new Promise(function(r,n){const s=Ze(e);let o=s.data;const i=x.from(s.headers).normalize();let{responseType:c,onUploadProgress:f,onDownloadProgress:l}=s,u,d,b,g,p;function y(){g&&g(),p&&p(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let h=new XMLHttpRequest;h.open(s.method.toUpperCase(),s.url,!0),h.timeout=s.timeout;function w(){if(!h)return;const S=x.from("getAllResponseHeaders"in h&&h.getAllResponseHeaders()),O={data:!c||c==="text"||c==="json"?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:S,config:e,request:h};Ge(function(L){r(L),y()},function(L){n(L),y()},O),h=null}"onloadend"in h?h.onloadend=w:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.indexOf("file:")===0)||setTimeout(w)},h.onabort=function(){h&&(n(new m("Request aborted",m.ECONNABORTED,e,h)),h=null)},h.onerror=function(){n(new m("Network Error",m.ERR_NETWORK,e,h)),h=null},h.ontimeout=function(){let N=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const O=s.transitional||We;s.timeoutErrorMessage&&(N=s.timeoutErrorMessage),n(new m(N,O.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,h)),h=null},o===void 0&&i.setContentType(null),"setRequestHeader"in h&&a.forEach(i.toJSON(),function(N,O){h.setRequestHeader(O,N)}),a.isUndefined(s.withCredentials)||(h.withCredentials=!!s.withCredentials),c&&c!=="json"&&(h.responseType=s.responseType),l&&([b,p]=W(l,!0),h.addEventListener("progress",b)),f&&h.upload&&([d,g]=W(f),h.upload.addEventListener("progress",d),h.upload.addEventListener("loadend",g)),(s.cancelToken||s.signal)&&(u=S=>{h&&(n(!S||S.type?new j(null,e,h):S),h.abort(),h=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const R=On(s.url);if(R&&T.protocols.indexOf(R)===-1){n(new m("Unsupported protocol "+R+":",m.ERR_BAD_REQUEST,e));return}h.send(o||null)})},Bn=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;n.abort(u instanceof m?u:new j(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new m(`timeout ${t} of ms exceeded`,m.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:f}=n;return f.unsubscribe=()=>a.asap(c),f}},Dn=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,s;for(;n<r;)s=n+t,yield e.slice(n,s),n=s},Un=async function*(e,t){for await(const r of kn(e))yield*Dn(r,t)},kn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Ce=(e,t,r,n)=>{const s=Un(e,t);let o=0,i,c=f=>{i||(i=!0,n&&n(f))};return new ReadableStream({async pull(f){try{const{done:l,value:u}=await s.next();if(l){c(),f.close();return}let d=u.byteLength;if(r){let b=o+=d;r(b)}f.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(f){return c(f),s.return()}},{highWaterMark:2})},Y=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ye=Y&&typeof ReadableStream=="function",jn=Y&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),et=(e,...t)=>{try{return!!e(...t)}catch{return!1}},qn=Ye&&et(()=>{let e=!1;const t=new Request(T.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Ne=64*1024,fe=Ye&&et(()=>a.isReadableStream(new Response("").body)),K={stream:fe&&(e=>e.body)};Y&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!K[t]&&(K[t]=a.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new m(`Response type '${t}' is not supported`,m.ERR_NOT_SUPPORT,n)})})})(new Response);const Hn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(T.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await jn(e)).byteLength},In=async(e,t)=>{const r=a.toFiniteNumber(e.getContentLength());return r??Hn(t)},Mn=Y&&(async e=>{let{url:t,method:r,data:n,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:f,responseType:l,headers:u,withCredentials:d="same-origin",fetchOptions:b}=Ze(e);l=l?(l+"").toLowerCase():"text";let g=Bn([s,o&&o.toAbortSignal()],i),p;const y=g&&g.unsubscribe&&(()=>{g.unsubscribe()});let h;try{if(f&&qn&&r!=="get"&&r!=="head"&&(h=await In(u,n))!==0){let O=new Request(t,{method:"POST",body:n,duplex:"half"}),P;if(a.isFormData(n)&&(P=O.headers.get("content-type"))&&u.setContentType(P),O.body){const[L,z]=xe(h,W(Ae(f)));n=Ce(O.body,Ne,L,z)}}a.isString(d)||(d=d?"include":"omit");const w="credentials"in Request.prototype;p=new Request(t,{...b,signal:g,method:r.toUpperCase(),headers:u.normalize().toJSON(),body:n,duplex:"half",credentials:w?d:void 0});let R=await fetch(p);const S=fe&&(l==="stream"||l==="response");if(fe&&(c||S&&y)){const O={};["status","statusText","headers"].forEach(we=>{O[we]=R[we]});const P=a.toFiniteNumber(R.headers.get("content-length")),[L,z]=c&&xe(P,W(Ae(c),!0))||[];R=new Response(Ce(R.body,Ne,L,()=>{z&&z(),y&&y()}),O)}l=l||"text";let N=await K[a.findKey(K,l)||"text"](R,e);return!S&&y&&y(),await new Promise((O,P)=>{Ge(O,P,{data:N,headers:x.from(R.headers),status:R.status,statusText:R.statusText,config:e,request:p})})}catch(w){throw y&&y(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new m("Network Error",m.ERR_NETWORK,e,p),{cause:w.cause||w}):m.from(w,w&&w.code,e,p)}}),de={http:tn,xhr:Ln,fetch:Mn};a.forEach(de,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Pe=e=>`- ${e}`,vn=e=>a.isFunction(e)||e===null||e===!1,tt={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let r,n;const s={};for(let o=0;o<t;o++){r=e[o];let i;if(n=r,!vn(r)&&(n=de[(i=String(r)).toLowerCase()],n===void 0))throw new m(`Unknown adapter '${i}'`);if(n)break;s[i||"#"+o]=n}if(!n){const o=Object.entries(s).map(([c,f])=>`adapter ${c} `+(f===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(Pe).join(`
`):" "+Pe(o[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return n},adapters:de};function oe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new j(null,e)}function Fe(e){return oe(e),e.headers=x.from(e.headers),e.data=se.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tt.getAdapter(e.adapter||v.adapter)(e).then(function(n){return oe(e),n.data=se.call(e,e.transformResponse,n),n.headers=x.from(n.headers),n},function(n){return Xe(n)||(oe(e),n&&n.response&&(n.response.data=se.call(e,e.transformResponse,n.response),n.response.headers=x.from(n.response.headers))),Promise.reject(n)})}const nt="1.7.9",ee={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{ee[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Le={};ee.transitional=function(t,r,n){function s(o,i){return"[Axios v"+nt+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,c)=>{if(t===!1)throw new m(s(i," has been removed"+(r?" in "+r:"")),m.ERR_DEPRECATED);return r&&!Le[i]&&(Le[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,c):!0}};ee.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function zn(e,t,r){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const c=e[o],f=c===void 0||i(c,o,e);if(f!==!0)throw new m("option "+o+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new m("Unknown option "+o,m.ERR_BAD_OPTION)}}const V={assertOptions:zn,validators:ee},C=V.validators;class D{constructor(t){this.defaults=t,this.interceptors={request:new Te,response:new Te}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{n.stack?o&&!String(n.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+o):n.stack=o}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=U(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&V.assertOptions(n,{silentJSONParsing:C.transitional(C.boolean),forcedJSONParsing:C.transitional(C.boolean),clarifyTimeoutError:C.transitional(C.boolean)},!1),s!=null&&(a.isFunction(s)?r.paramsSerializer={serialize:s}:V.assertOptions(s,{encode:C.function,serialize:C.function},!0)),V.assertOptions(r,{baseUrl:C.spelling("baseURL"),withXsrfToken:C.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[r.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],p=>{delete o[p]}),r.headers=x.concat(i,o);const c=[];let f=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(r)===!1||(f=f&&y.synchronous,c.unshift(y.fulfilled,y.rejected))});const l=[];this.interceptors.response.forEach(function(y){l.push(y.fulfilled,y.rejected)});let u,d=0,b;if(!f){const p=[Fe.bind(this),void 0];for(p.unshift.apply(p,c),p.push.apply(p,l),b=p.length,u=Promise.resolve(r);d<b;)u=u.then(p[d++],p[d++]);return u}b=c.length;let g=r;for(d=0;d<b;){const p=c[d++],y=c[d++];try{g=p(g)}catch(h){y.call(this,h);break}}try{u=Fe.call(this,g)}catch(p){return Promise.reject(p)}for(d=0,b=l.length;d<b;)u=u.then(l[d++],l[d++]);return u}getUri(t){t=U(this.defaults,t);const r=Qe(t.baseURL,t.url);return Ve(r,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){D.prototype[t]=function(r,n){return this.request(U(n||{},{method:t,url:r,data:(n||{}).data}))}});a.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,c){return this.request(U(c||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}D.prototype[t]=r(),D.prototype[t+"Form"]=r(!0)});class be{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{n.subscribe(c),o=c}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,c){n.reason||(n.reason=new j(o,i,c),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new be(function(s){t=s}),cancel:t}}}function Jn(e){return function(r){return e.apply(null,r)}}function $n(e){return a.isObject(e)&&e.isAxiosError===!0}const pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(pe).forEach(([e,t])=>{pe[t]=e});function rt(e){const t=new D(e),r=De(D.prototype.request,t);return a.extend(r,D.prototype,t,{allOwnKeys:!0}),a.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return rt(U(e,s))},r}const E=rt(v);E.Axios=D;E.CanceledError=j;E.CancelToken=be;E.isCancel=Xe;E.VERSION=nt;E.toFormData=Z;E.AxiosError=m;E.Cancel=E.CanceledError;E.all=function(t){return Promise.all(t)};E.spread=Jn;E.isAxiosError=$n;E.mergeConfig=U;E.AxiosHeaders=x;E.formToJSON=e=>Ke(a.isHTMLForm(e)?new FormData(e):e);E.getAdapter=tt.getAdapter;E.HttpStatusCode=pe;E.default=E;const Vn=E.create({baseURL:"https://f6exdiv4w2.execute-api.us-east-1.amazonaws.com/dev/"}),Wn={class:"p-[20px] main-container"},Kn={class:"flex gap-[20px] flex-wrap"},Yn=Be({__name:"EffectiveTime",setup(e){const t=te(null),r=te(!1),n=te(null);return lt(async()=>{r.value=!0,n.value=null;try{const o=await Vn.get("/attendance");t.value=o.data}catch(o){n.value="Hubo un error al obtener los datos: "+o.message}finally{r.value=!1}}),(o,i)=>(ie(),ae("section",Wn,[H(it,{onClick:i[0]||(i[0]=c=>o.$router.back()),class:"my-[20px]"}),H(st,null,{default:ut(()=>[i[1]||(i[1]=F("div",null,[F("p",{class:"text-[20px] font-bold"},"Effective Time")],-1)),H(ot,{class:"my-[20px]"}),F("div",Kn,[(ie(),ae(ft,null,dt(10,(c,f)=>H(mt,{key:f})),64))])]),_:1})]))}});export{Yn as default};
