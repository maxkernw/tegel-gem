var hc=Object.defineProperty;var fc=(n,e,t)=>e in n?hc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ne=(n,e,t)=>fc(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const pc="modulepreload",mc=function(n){return"/"+n},Er={},gc=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=mc(c),c in Er)return;Er[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":pc,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((p,f)=>{h.addEventListener("load",p),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function _c(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:s,onRegisteredSW:r,onRegisterError:o}=n;let a,l;const c=async(d=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(a=await gc(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{o==null||o(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||i==null||i()}),a.register({immediate:e}).then(d=>{r?r("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return l=u(),c}var br={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw Ct(e)},Ct=function(n){return new Error("Firebase Database ("+Bo.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ps={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(h=64)),i.push(t[u],t[d],t[h],t[p])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray($o(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):vc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new yc;const h=r<<2|a>>4;if(i.push(h),c!==64){const p=a<<4&240|c>>2;if(i.push(p),d!==64){const f=c<<6&192|d;i.push(f)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class yc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vo=function(n){const e=$o(n);return ps.encodeByteArray(e,!0)},Un=function(n){return Vo(n).replace(/\./g,"")},Bn=function(n){try{return ps.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(n){return Ho(void 0,n)}function Ho(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!bc(t)||(n[t]=Ho(n[t],e[t]));return n}function bc(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=()=>Ic().__FIREBASE_DEFAULTS__,wc=()=>{if(typeof process>"u"||typeof br>"u")return;const n=br.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Sc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Bn(n[1]);return e&&JSON.parse(e)},ms=()=>{try{return Tc()||wc()||Sc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ko=n=>{var e,t;return(t=(e=ms())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kc=n=>{const e=Ko(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Go=()=>{var n;return(n=ms())===null||n===void 0?void 0:n.config},Wo=n=>{var e;return(e=ms())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Un(JSON.stringify(t)),Un(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(z())}function Ac(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Rc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Nc(){const n=z();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Pc(){return Bo.NODE_ADMIN===!0}function Lc(){try{return typeof indexedDB=="object"}catch{return!1}}function Dc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc="FirebaseError";class je extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Oc,Object.setPrototypeOf(this,je.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pn.prototype.create)}}class pn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Mc(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new je(s,a,i)}}function Mc(n,e){return n.replace(xc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const xc=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(n){return JSON.parse(n)}function B(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Jt(Bn(r[0])||""),t=Jt(Bn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Fc=function(n){const e=qo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Uc=function(n){const e=qo(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Et(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ki(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $n(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function Vn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Ir(r)&&Ir(o)){if(!Vn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ir(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Vt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Ht(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function $c(n,e){const t=new Vc(n,e);return t.subscribe.bind(t)}class Vc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Hc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=ki),s.error===void 0&&(s.error=ki),s.complete===void 0&&(s.complete=ki);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ki(){}function _s(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ui=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n){return n&&n._delegate?n._delegate:n}class it{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new di;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jc(e))try{this.getOrInitializeService({instanceIdentifier:Qe})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Qe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qe){return this.instances.has(e)}getOptions(e=Qe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Wc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Qe){return this.component?this.component.multipleInstances?e:Qe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wc(n){return n===Qe?void 0:n}function jc(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Gc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var C;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(C||(C={}));const zc={debug:C.DEBUG,verbose:C.VERBOSE,info:C.INFO,warn:C.WARN,error:C.ERROR,silent:C.SILENT},Yc=C.INFO,Qc={[C.DEBUG]:"log",[C.VERBOSE]:"log",[C.INFO]:"info",[C.WARN]:"warn",[C.ERROR]:"error"},Jc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Qc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vs{constructor(e){this.name=e,this._logLevel=Yc,this._logHandler=Jc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in C))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,C.DEBUG,...e),this._logHandler(this,C.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,C.VERBOSE,...e),this._logHandler(this,C.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,C.INFO,...e),this._logHandler(this,C.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,C.WARN,...e),this._logHandler(this,C.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,C.ERROR,...e),this._logHandler(this,C.ERROR,...e)}}const Xc=(n,e)=>e.some(t=>n instanceof t);let Tr,wr;function Zc(){return Tr||(Tr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ed(){return wr||(wr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zo=new WeakMap,Gi=new WeakMap,Yo=new WeakMap,Ci=new WeakMap,ys=new WeakMap;function td(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Fe(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zo.set(t,n)}).catch(()=>{}),ys.set(e,n),e}function nd(n){if(Gi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Gi.set(n,e)}let Wi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Gi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Yo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Fe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function id(n){Wi=n(Wi)}function sd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ai(this),e,...t);return Yo.set(i,e.sort?e.sort():[e]),Fe(i)}:ed().includes(n)?function(...e){return n.apply(Ai(this),e),Fe(zo.get(this))}:function(...e){return Fe(n.apply(Ai(this),e))}}function rd(n){return typeof n=="function"?sd(n):(n instanceof IDBTransaction&&nd(n),Xc(n,Zc())?new Proxy(n,Wi):n)}function Fe(n){if(n instanceof IDBRequest)return td(n);if(Ci.has(n))return Ci.get(n);const e=rd(n);return e!==n&&(Ci.set(n,e),ys.set(e,n)),e}const Ai=n=>ys.get(n);function od(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Fe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Fe(o.result),l.oldVersion,l.newVersion,Fe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const ad=["get","getKey","getAll","getAllKeys","count"],ld=["put","add","delete","clear"],Ri=new Map;function Sr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ri.get(e))return Ri.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=ld.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||ad.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ri.set(e,r),r}id(n=>({...n,get:(e,t,i)=>Sr(e,t)||n.get(e,t,i),has:(e,t)=>!!Sr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(dd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function dd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ji="@firebase/app",kr="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we=new vs("@firebase/app"),ud="@firebase/app-compat",hd="@firebase/analytics-compat",fd="@firebase/analytics",pd="@firebase/app-check-compat",md="@firebase/app-check",gd="@firebase/auth",_d="@firebase/auth-compat",vd="@firebase/database",yd="@firebase/data-connect",Ed="@firebase/database-compat",bd="@firebase/functions",Id="@firebase/functions-compat",Td="@firebase/installations",wd="@firebase/installations-compat",Sd="@firebase/messaging",kd="@firebase/messaging-compat",Cd="@firebase/performance",Ad="@firebase/performance-compat",Rd="@firebase/remote-config",Nd="@firebase/remote-config-compat",Pd="@firebase/storage",Ld="@firebase/storage-compat",Dd="@firebase/firestore",Od="@firebase/vertexai-preview",Md="@firebase/firestore-compat",xd="firebase",Fd="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qi="[DEFAULT]",Ud={[ji]:"fire-core",[ud]:"fire-core-compat",[fd]:"fire-analytics",[hd]:"fire-analytics-compat",[md]:"fire-app-check",[pd]:"fire-app-check-compat",[gd]:"fire-auth",[_d]:"fire-auth-compat",[vd]:"fire-rtdb",[yd]:"fire-data-connect",[Ed]:"fire-rtdb-compat",[bd]:"fire-fn",[Id]:"fire-fn-compat",[Td]:"fire-iid",[wd]:"fire-iid-compat",[Sd]:"fire-fcm",[kd]:"fire-fcm-compat",[Cd]:"fire-perf",[Ad]:"fire-perf-compat",[Rd]:"fire-rc",[Nd]:"fire-rc-compat",[Pd]:"fire-gcs",[Ld]:"fire-gcs-compat",[Dd]:"fire-fst",[Md]:"fire-fst-compat",[Od]:"fire-vertex","fire-js":"fire-js",[xd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=new Map,Bd=new Map,zi=new Map;function Cr(n,e){try{n.container.addComponent(e)}catch(t){we.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function bt(n){const e=n.name;if(zi.has(e))return we.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,n);for(const t of Hn.values())Cr(t,n);for(const t of Bd.values())Cr(t,n);return!0}function Es(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _e(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ue=new pn("app","Firebase",$d);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new it("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=Fd;function Qo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:qi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(t||(t=Go()),!t)throw Ue.create("no-options");const r=Hn.get(s);if(r){if(Vn(t,r.options)&&Vn(i,r.config))return r;throw Ue.create("duplicate-app",{appName:s})}const o=new qc(s);for(const l of zi.values())o.addComponent(l);const a=new Vd(t,i,o);return Hn.set(s,a),a}function Jo(n=qi){const e=Hn.get(n);if(!e&&n===qi&&Go())return Qo();if(!e)throw Ue.create("no-app",{appName:n});return e}function Be(n,e,t){var i;let s=(i=Ud[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),we.warn(a.join(" "));return}bt(new it(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hd="firebase-heartbeat-database",Kd=1,Xt="firebase-heartbeat-store";let Ni=null;function Xo(){return Ni||(Ni=od(Hd,Kd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Xt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ue.create("idb-open",{originalErrorMessage:n.message})})),Ni}async function Gd(n){try{const t=(await Xo()).transaction(Xt),i=await t.objectStore(Xt).get(Zo(n));return await t.done,i}catch(e){if(e instanceof je)we.warn(e.message);else{const t=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});we.warn(t.message)}}}async function Ar(n,e){try{const i=(await Xo()).transaction(Xt,"readwrite");await i.objectStore(Xt).put(e,Zo(n)),await i.done}catch(t){if(t instanceof je)we.warn(t.message);else{const i=Ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});we.warn(i.message)}}}function Zo(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=1024,jd=720*60*60*1e3;class qd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Yd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Rr();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=jd}),this._storage.overwrite(this._heartbeatsCache))}catch(i){we.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rr(),{heartbeatsToSend:i,unsentEntries:s}=zd(this._heartbeatsCache.heartbeats),r=Un(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return we.warn(t),""}}}function Rr(){return new Date().toISOString().substring(0,10)}function zd(n,e=Wd){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Nr(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nr(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Yd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lc()?Dc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Gd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ar(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ar(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nr(n){return Un(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(n){bt(new it("platform-logger",e=>new cd(e),"PRIVATE")),bt(new it("heartbeat",e=>new qd(e),"PRIVATE")),Be(ji,kr,n),Be(ji,kr,"esm2017"),Be("fire-js","")}Qd("");var Jd="firebase",Xd="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be(Jd,Xd,"app");function bs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function ea(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Zd=ea,ta=new pn("auth","Firebase",ea());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new vs("@firebase/auth");function eu(n,...e){Kn.logLevel<=C.WARN&&Kn.warn(`Auth (${Rt}): ${n}`,...e)}function Nn(n,...e){Kn.logLevel<=C.ERROR&&Kn.error(`Auth (${Rt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,...e){throw Is(n,...e)}function fe(n,...e){return Is(n,...e)}function na(n,e,t){const i=Object.assign(Object.assign({},Zd()),{[e]:t});return new pn("auth","Firebase",i).create(e,{appName:n.name})}function $e(n){return na(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Is(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ta.create(n,...e)}function _(n,e,...t){if(!n)throw Is(e,...t)}function ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Nn(e),new Error(e)}function Se(n,e){n||ve(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function tu(){return Pr()==="http:"||Pr()==="https:"}function Pr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tu()||Rc()||"connection"in navigator)?navigator.onLine:!0}function iu(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Se(t>e,"Short delay should be less than long delay!"),this.isMobile=gs()||jo()}get(){return nu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(n,e){Se(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=new mn(3e4,6e4);function Re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function me(n,e,t,i,s={}){return sa(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=At(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return Ac()||(c.referrerPolicy="no-referrer"),ia.fetch()(ra(n,n.config.apiHost,t,a),c)})}async function sa(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},su),e);try{const s=new au(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw kn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw kn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw kn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw kn(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw na(n,u,c);se(n,u)}}catch(s){if(s instanceof je)throw s;se(n,"network-request-failed",{message:String(s)})}}async function hi(n,e,t,i,s={}){const r=await me(n,e,t,i,s);return"mfaPendingCredential"in r&&se(n,"multi-factor-auth-required",{_serverResponse:r}),r}function ra(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Ts(n.config,s):`${n.config.apiScheme}://${s}`}function ou(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class au{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(fe(this.auth,"network-request-failed")),ru.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function kn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=fe(n,e,i);return s.customData._tokenResponse=t,s}function Lr(n){return n!==void 0&&n.enterprise!==void 0}class lu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ou(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cu(n,e){return me(n,"GET","/v2/recaptchaConfig",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(n,e){return me(n,"POST","/v1/accounts:delete",e)}async function oa(n,e){return me(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uu(n,e=!1){const t=$(n),i=await t.getIdToken(e),s=ws(i);_(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Gt(Pi(s.auth_time)),issuedAtTime:Gt(Pi(s.iat)),expirationTime:Gt(Pi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Pi(n){return Number(n)*1e3}function ws(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Nn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bn(t);return s?JSON.parse(s):(Nn("Failed to decode base64 JWT payload"),null)}catch(s){return Nn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dr(n){const e=ws(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof je&&hu(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function hu({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Gt(this.lastLoginAt),this.creationTime=Gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Zt(n,oa(t,{idToken:i}));_(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?aa(r.providerUserInfo):[],a=mu(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Qi(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function pu(n){const e=$(n);await Gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mu(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function aa(n){return n.map(e=>{var{providerId:t}=e,i=bs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gu(n,e){const t=await sa(n,{},async()=>{const i=At({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=ra(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ia.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function _u(n,e){return me(n,"POST","/v2/accounts:revokeToken",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(e.length!==0,"internal-error");const t=Dr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await gu(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new pt;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(_(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(_(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pt,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ye{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=bs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Qi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Zt(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return uu(this,e)}reload(){return pu(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Gn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject($e(this.auth));const e=await this.getIdToken();return await Zt(this,du(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,p=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,f=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,w=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,M=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:te,isAnonymous:ge,providerData:ue,stsTokenManager:Ye}=t;_(H&&Ye,e,"internal-error");const Tn=pt.fromJSON(this.name,Ye);_(typeof H=="string",e,"internal-error"),Pe(d,e.name),Pe(h,e.name),_(typeof te=="boolean",e,"internal-error"),_(typeof ge=="boolean",e,"internal-error"),Pe(p,e.name),Pe(f,e.name),Pe(y,e.name),Pe(w,e.name),Pe(E,e.name),Pe(M,e.name);const dt=new ye({uid:H,auth:e,email:h,emailVerified:te,displayName:d,isAnonymous:ge,photoURL:f,phoneNumber:p,tenantId:y,stsTokenManager:Tn,createdAt:E,lastLoginAt:M});return ue&&Array.isArray(ue)&&(dt.providerData=ue.map(wn=>Object.assign({},wn))),w&&(dt._redirectEventId=w),dt}static async _fromIdTokenResponse(e,t,i=!1){const s=new pt;s.updateFromServerResponse(t);const r=new ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Gn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];_(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?aa(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new pt;a.updateFromIdToken(i);const l=new ye({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new Qi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map;function Ee(n){Se(n instanceof Function,"Expected a class definition");let e=Or.get(n);return e?(Se(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Or.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}la.type="NONE";const Mr=la;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n,e,t){return`firebase:${n}:${e}:${t}`}class mt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Pn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Pn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new mt(Ee(Mr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ee(Mr);const o=Pn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=ye._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new mt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new mt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ha(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ca(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(pa(e))return"Blackberry";if(ma(e))return"Webos";if(da(e))return"Safari";if((e.includes("chrome/")||ua(e))&&!e.includes("edge/"))return"Chrome";if(fa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ca(n=z()){return/firefox\//i.test(n)}function da(n=z()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ua(n=z()){return/crios\//i.test(n)}function ha(n=z()){return/iemobile/i.test(n)}function fa(n=z()){return/android/i.test(n)}function pa(n=z()){return/blackberry/i.test(n)}function ma(n=z()){return/webos/i.test(n)}function Ss(n=z()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function vu(n=z()){var e;return Ss(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function yu(){return Nc()&&document.documentMode===10}function ga(n=z()){return Ss(n)||fa(n)||ma(n)||pa(n)||/windows phone/i.test(n)||ha(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(n,e=[]){let t;switch(n){case"Browser":t=xr(z());break;case"Worker":t=`${xr(z())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(n,e={}){return me(n,"GET","/v2/passwordPolicy",Re(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu=6;class Tu{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Iu,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fr(this),this.idTokenSubscription=new Fr(this),this.beforeStateQueue=new Eu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ta,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ee(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await mt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await oa(this,{idToken:e}),i=await ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Gn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject($e(this));const t=e?$(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _e(this.app)?Promise.reject($e(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject($e(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await bu(this),t=new Tu(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await _u(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ee(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await mt.create(this,[Ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_a(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&eu(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function qe(n){return $(n)}class Fr{constructor(e){this.auth=e,this.observer=null,this.addObserver=$c(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Su(n){fi=n}function va(n){return fi.loadJS(n)}function ku(){return fi.recaptchaEnterpriseScript}function Cu(){return fi.gapiScript}function Au(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Ru="recaptcha-enterprise",Nu="NO_RECAPTCHA";class Pu{constructor(e){this.type=Ru,this.auth=qe(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{cu(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new lu(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;Lr(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Nu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&Lr(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=ku();l.length!==0&&(l+=a),va(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ur(n,e,t,i=!1){const s=new Pu(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ji(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ur(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ur(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(n,e){const t=Es(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(Vn(r,e??{}))return s;se(s,"already-initialized")}return t.initialize({options:e})}function Du(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ee);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ou(n,e,t){const i=qe(n);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=ya(e),{host:o,port:a}=Mu(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),xu()}function ya(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Mu(n){const e=ya(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Br(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Br(o)}}}function Br(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function xu(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(n,e){return me(n,"POST","/v1/accounts:resetPassword",Re(n,e))}async function Fu(n,e){return me(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uu(n,e){return hi(n,"POST","/v1/accounts:signInWithPassword",Re(n,e))}async function Bu(n,e){return me(n,"POST","/v1/accounts:sendOobCode",Re(n,e))}async function $u(n,e){return Bu(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vu(n,e){return hi(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}async function Hu(n,e){return hi(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en extends ks{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new en(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new en(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ji(e,t,"signInWithPassword",Uu);case"emailLink":return Vu(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ji(e,i,"signUpPassword",Fu);case"emailLink":return Hu(e,{idToken:t,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(n,e){return hi(n,"POST","/v1/accounts:signInWithIdp",Re(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="http://localhost";class st extends ks{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new st(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=bs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new st(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return gt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,gt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gt(e,t)}buildRequest(){const e={requestUri:Ku,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=At(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wu(n){const e=Vt(Ht(n)).link,t=e?Vt(Ht(e)).deep_link_id:null,i=Vt(Ht(n)).deep_link_id;return(i?Vt(Ht(i)).link:null)||i||t||e||n}class Cs{constructor(e){var t,i,s,r,o,a;const l=Vt(Ht(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=Gu((s=l.mode)!==null&&s!==void 0?s:null);_(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Wu(e);try{return new Cs(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.providerId=Nt.PROVIDER_ID}static credential(e,t){return en._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Cs.parseLink(t);return _(i,"argument-error"),en._fromEmailAndCode(e,i.code,i.tenantId)}}Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends ba{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends gn{constructor(){super("facebook.com")}static credential(e){return st._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return De.credential(e.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return st._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Oe.credential(t,i)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends gn{constructor(){super("github.com")}static credential(e){return st._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Me.credential(e.oauthAccessToken)}catch{return null}}}Me.GITHUB_SIGN_IN_METHOD="github.com";Me.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends gn{constructor(){super("twitter.com")}static credential(e,t){return st._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return xe.credential(t,i)}catch{return null}}}xe.TWITTER_SIGN_IN_METHOD="twitter.com";xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ye._fromIdTokenResponse(e,i,s),o=$r(i);return new It({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=$r(i);return new It({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function $r(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends je{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Wn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Wn(e,t,i,s)}}function Ia(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Wn._fromErrorAndOperation(n,r,e,i):r})}async function ju(n,e,t=!1){const i=await Zt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return It._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(n,e,t=!1){const{auth:i}=n;if(_e(i.app))return Promise.reject($e(i));const s="reauthenticate";try{const r=await Zt(n,Ia(i,s,e,n),t);_(r.idToken,i,"internal-error");const o=ws(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(n.uid===a,i,"user-mismatch"),It._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&se(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ta(n,e,t=!1){if(_e(n.app))return Promise.reject($e(n));const i="signIn",s=await Ia(n,i,e),r=await It._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function zu(n,e){return Ta(qe(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Rs._fromServerResponse(e,t):"totpInfo"in t?Ns._fromServerResponse(e,t):se(e,"internal-error")}}class Rs extends As{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Rs(t)}}class Ns extends As{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ns(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yu(n,e,t){var i;_(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),_(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(_(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(_(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wa(n){const e=qe(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Qu(n,e,t){const i=qe(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Yu(i,s,t),await Ji(i,s,"getOobCode",$u)}async function Ju(n,e,t){await Ea($(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&wa(n),i})}async function Xu(n,e){const t=$(n),i=await Ea(t,{oobCode:e}),s=i.requestType;switch(_(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(i.mfaInfo,t,"internal-error");default:_(i.email,t,"internal-error")}let r=null;return i.mfaInfo&&(r=As._fromServerResponse(qe(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function Zu(n,e){const{data:t}=await Xu($(n),e);return t.email}function eh(n,e,t){return _e(n.app)?Promise.reject($e(n)):zu($(n),Nt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&wa(n),i})}function th(n,e,t,i){return $(n).onIdTokenChanged(e,t,i)}function nh(n,e,t){return $(n).beforeAuthStateChanged(e,t)}function ih(n,e,t,i){return $(n).onAuthStateChanged(e,t,i)}function Ps(n){return $(n).signOut()}const jn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(jn,"1"),this.storage.removeItem(jn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=1e3,rh=10;class ka extends Sa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ga(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);yu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,rh):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},sh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ka.type="LOCAL";const oh=ka;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca extends Sa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ca.type="SESSION";const Aa=Ca;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new pi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await ah(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ls("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return window}function ch(n){pe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function dh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hh(){return Ra()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="firebaseLocalStorageDb",fh=1,qn="firebaseLocalStorage",Pa="fbase_key";class _n{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mi(n,e){return n.transaction([qn],e?"readwrite":"readonly").objectStore(qn)}function ph(){const n=indexedDB.deleteDatabase(Na);return new _n(n).toPromise()}function Xi(){const n=indexedDB.open(Na,fh);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(qn,{keyPath:Pa})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(qn)?e(i):(i.close(),await ph(),e(await Xi()))})})}async function Vr(n,e,t){const i=mi(n,!0).put({[Pa]:e,value:t});return new _n(i).toPromise()}async function mh(n,e){const t=mi(n,!1).get(e),i=await new _n(t).toPromise();return i===void 0?null:i.value}function Hr(n,e){const t=mi(n,!0).delete(e);return new _n(t).toPromise()}const gh=800,_h=3;class La{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>_h)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ra()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pi._getInstance(hh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dh(),!this.activeServiceWorker)return;this.sender=new lh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xi();return await Vr(e,jn,"1"),await Hr(e,jn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Vr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>mh(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Hr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=mi(s,!1).getAll();return new _n(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}La.type="LOCAL";const vh=La;new mn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yh(n,e){return e?Ee(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds extends ks{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Eh(n){return Ta(n.auth,new Ds(n),n.bypassAuthState)}function bh(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),qu(t,new Ds(n),n.bypassAuthState)}async function Ih(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),ju(t,new Ds(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eh;case"linkViaPopup":case"linkViaRedirect":return Ih;case"reauthViaPopup":case"reauthViaRedirect":return bh;default:se(this.auth,"internal-error")}}resolve(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Se(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th=new mn(2e3,1e4);class ht extends Da{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){Se(this.filter.length===1,"Popup operations only handle one event");const e=Ls();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Th.get())};e()}}ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="pendingRedirect",Ln=new Map;class Sh extends Da{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Ln.get(this.auth._key());if(!e){try{const i=await kh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Ln.set(this.auth._key(),e)}return this.bypassAuthState||Ln.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kh(n,e){const t=Rh(e),i=Ah(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Ch(n,e){Ln.set(n._key(),e)}function Ah(n){return Ee(n._redirectPersistence)}function Rh(n){return Pn(wh,n.config.apiKey,n.name)}async function Nh(n,e,t=!1){if(_e(n.app))return Promise.reject($e(n));const i=qe(n),s=yh(i,e),o=await new Sh(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph=600*1e3;class Lh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Dh(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Oa(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(fe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ph&&this.cachedEventUids.clear(),this.cachedEventUids.has(Kr(e))}saveEventToCache(e){this.cachedEventUids.add(Kr(e)),this.lastProcessedEventTime=Date.now()}}function Kr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Oa({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Dh(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Oa(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oh(n,e={}){return me(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xh=/^https?/;async function Fh(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Oh(n);for(const t of e)try{if(Uh(t))return}catch{}se(n,"unauthorized-domain")}function Uh(n){const e=Yi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!xh.test(t))return!1;if(Mh.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new mn(3e4,6e4);function Gr(){const n=pe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $h(n){return new Promise((e,t)=>{var i,s,r;function o(){Gr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gr(),t(fe(n,"network-request-failed"))},timeout:Bh.get()})}if(!((s=(i=pe().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=pe().gapi)===null||r===void 0)&&r.load)o();else{const a=Au("iframefcb");return pe()[a]=()=>{gapi.load?o():t(fe(n,"network-request-failed"))},va(`${Cu()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Dn=null,e})}let Dn=null;function Vh(n){return Dn=Dn||$h(n),Dn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh=new mn(5e3,15e3),Kh="__/auth/iframe",Gh="emulator/auth/iframe",Wh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qh(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ts(e,Gh):`https://${n.config.authDomain}/${Kh}`,i={apiKey:e.apiKey,appName:n.name,v:Rt},s=jh.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${At(i).slice(1)}`}async function zh(n){const e=await Vh(n),t=pe().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:qh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wh,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=fe(n,"network-request-failed"),a=pe().setTimeout(()=>{r(o)},Hh.get());function l(){pe().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qh=500,Jh=600,Xh="_blank",Zh="http://localhost";class Wr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ef(n,e,t,i=Qh,s=Jh){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Yh),{width:i.toString(),height:s.toString(),top:r,left:o}),c=z().toLowerCase();t&&(a=ua(c)?Xh:t),ca(c)&&(e=e||Zh,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[p,f])=>`${h}${p}=${f},`,"");if(vu(c)&&a!=="_self")return tf(e||"",a),new Wr(null);const d=window.open(e||"",a,u);_(d,n,"popup-blocked");try{d.focus()}catch{}return new Wr(d)}function tf(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="__/auth/handler",sf="emulator/auth/handler",rf=encodeURIComponent("fac");async function jr(n,e,t,i,s,r){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Rt,eventId:s};if(e instanceof ba){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Ki(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof gn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${rf}=${encodeURIComponent(l)}`:"";return`${of(n)}?${At(a).slice(1)}${c}`}function of({config:n}){return n.emulator?Ts(n,sf):`https://${n.authDomain}/${nf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li="webStorageSupport";class af{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aa,this._completeRedirectFn=Nh,this._overrideRedirectResult=Ch}async _openPopup(e,t,i,s){var r;Se((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await jr(e,t,i,Yi(),s);return ef(e,o,Ls())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await jr(e,t,i,Yi(),s);return ch(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Se(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await zh(e),i=new Lh(e);return t.register("authEvent",s=>(_(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Li,{type:Li},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Li];o!==void 0&&t(!!o),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Fh(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ga()||da()||Ss()}}const lf=af;var qr="@firebase/auth",zr="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uf(n){bt(new it("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_a(n)},c=new wu(i,s,r,l);return Du(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),bt(new it("auth-internal",e=>{const t=qe(e.getProvider("auth").getImmediate());return(i=>new cf(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Be(qr,zr,df(n)),Be(qr,zr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=300,ff=Wo("authIdTokenMaxAge")||hf;let Yr=null;const pf=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ff)return;const s=t==null?void 0:t.token;Yr!==s&&(Yr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mf(n=Jo()){const e=Es(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Lu(n,{popupRedirectResolver:lf,persistence:[vh,oh,Aa]}),i=Wo("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=pf(r.toString());nh(t,o,()=>o(t.currentUser)),th(t,a=>o(a))}}const s=Ko("auth");return s&&Ou(t,`http://${s}`),t}function gf(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Su({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=fe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",gf().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uf("Browser");var Qr={};const Jr="@firebase/database",Xr="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma="";function _f(n){Ma=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Jt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vf(e)}}catch{}return new yf},Xe=xa("localStorage"),Ef=xa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t=new vs("@firebase/database"),bf=(function(){let n=1;return function(){return n++}})(),Fa=function(n){const e=Kc(n),t=new Bc;t.update(e);const i=t.digest();return ps.encodeByteArray(i)},vn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=vn.apply(null,i):typeof i=="object"?e+=B(i):e+=i,e+=" "}return e};let Wt=null,Zr=!0;const If=function(n,e){m(!0,"Can't turn on custom loggers persistently."),_t.logLevel=C.VERBOSE,Wt=_t.log.bind(_t)},K=function(...n){if(Zr===!0&&(Zr=!1,Wt===null&&Ef.get("logging_enabled")===!0&&If()),Wt){const e=vn.apply(null,n);Wt(e)}},yn=function(n){return function(...e){K(n,...e)}},Zi=function(...n){const e="FIREBASE INTERNAL ERROR: "+vn(...n);_t.error(e)},ke=function(...n){const e=`FIREBASE FATAL ERROR: ${vn(...n)}`;throw _t.error(e),new Error(e)},Z=function(...n){const e="FIREBASE WARNING: "+vn(...n);_t.warn(e)},Tf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Z("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ua=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Tt="[MIN_NAME]",rt="[MAX_NAME]",Pt=function(n,e){if(n===e)return 0;if(n===Tt||e===rt)return-1;if(e===Tt||n===rt)return 1;{const t=eo(n),i=eo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Sf=function(n,e){return n===e?0:n<e?-1:1},Ft=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+B(e))},Os=function(n){if(typeof n!="object"||n===null)return B(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=B(e[i]),t+=":",t+=Os(n[e[i]]);return t+="}",t},Ba=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ee(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const $a=function(n){m(!Ua(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},kf=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Cf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Af(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Rf=new RegExp("^-?(0*)\\d{1,10}$"),Nf=-2147483648,Pf=2147483647,eo=function(n){if(Rf.test(n)){const e=Number(n);if(e>=Nf&&e<=Pf)return e}return null},Lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Z("Exception was thrown by user callback.",t),e},Math.floor(0))}},Lf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},jt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){Z(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Z(e)}}class On{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}On.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms="5",Va="v",Ha="s",Ka="r",Ga="f",Wa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ja="ls",qa="p",es="ac",za="websocket",Ya="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xe.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Xe.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Mf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ja(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===za)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ya)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Mf(n)&&(t.ns=n.namespace);const s=[];return ee(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(){this.counters_={}}incrementCounter(e,t=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ec(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={},Oi={};function xs(n){const e=n.toString();return Di[e]||(Di[e]=new xf),Di[e]}function Ff(n,e){const t=n.toString();return Oi[t]||(Oi[t]=e()),Oi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Lt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const to="start",Bf="close",$f="pLPCommand",Vf="pRTLPCB",Xa="id",Za="pw",el="ser",Hf="cb",Kf="seg",Gf="ts",Wf="d",jf="dframe",tl=1870,nl=30,qf=tl-nl,zf=25e3,Yf=3e4;class ft{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yn(e),this.stats_=xs(t),this.urlFn=l=>(this.appCheckToken&&(l[es]=this.appCheckToken),Ja(t,Ya,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Uf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Yf)),wf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fs((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===to)this.id=a,this.password=l;else if(o===Bf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[to]="t",i[el]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Hf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Va]=Ms,this.transportSessionId&&(i[Ha]=this.transportSessionId),this.lastSessionId&&(i[ja]=this.lastSessionId),this.applicationId&&(i[qa]=this.applicationId),this.appCheckToken&&(i[es]=this.appCheckToken),typeof location<"u"&&location.hostname&&Wa.test(location.hostname)&&(i[Ka]=Ga);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ft.forceAllow_=!0}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){return ft.forceAllow_?!0:!ft.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!kf()&&!Cf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Vo(t),s=Ba(i,qf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[jf]="t",i[Xa]=e,i[Za]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Fs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=bf(),window[$f+this.uniqueCallbackIdentifier]=e,window[Vf+this.uniqueCallbackIdentifier]=t,this.myIFrame=Fs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){K("frame writing exception"),a.stack&&K(a.stack),K(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xa]=this.myID,e[Za]=this.myPW,e[el]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nl+i.length<=tl;){const o=this.pendingSegs.shift();i=i+"&"+Kf+s+"="+o.seg+"&"+Gf+s+"="+o.ts+"&"+Wf+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(zf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=16384,Jf=45e3;let zn=null;typeof MozWebSocket<"u"?zn=MozWebSocket:typeof WebSocket<"u"&&(zn=WebSocket);class ae{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yn(this.connId),this.stats_=xs(t),this.connURL=ae.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Va]=Ms,typeof location<"u"&&location.hostname&&Wa.test(location.hostname)&&(o[Ka]=Ga),t&&(o[Ha]=t),i&&(o[ja]=i),s&&(o[es]=s),r&&(o[qa]=r),Ja(e,za,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xe.set("previous_websocket_failure",!0);try{let i;Pc(),this.mySock=new zn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){ae.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&zn!==null&&!ae.forceDisallow_}static previouslyFailed(){return Xe.isInMemoryStorage||Xe.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xe.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Jt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Ba(t,Qf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Jf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ae.responsesRequiredToBeHealthy=2;ae.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ft,ae]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=ae&&ae.isAvailable();let i=t&&!ae.previouslyFailed();if(e.webSocketOnly&&(t||Z("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[ae];else{const s=this.transports_=[];for(const r of tn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);tn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=6e4,Zf=5e3,ep=10*1024,tp=100*1024,Mi="t",no="d",np="s",io="r",ip="e",so="o",ro="a",oo="n",ao="p",sp="h";class rp{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yn("c:"+this.id+":"),this.transportManager_=new tn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=jt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>tp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ep?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Mi in e){const t=e[Mi];t===ro?this.upgradeIfSecondaryHealthy_():t===io?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===so&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ft("t",e),i=Ft("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ao,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ro,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:oo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ft("t",e),i=Ft("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ft(Mi,e);if(no in e){const i=e[no];if(t===sp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===oo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===np?this.onConnectionShutdown_(i):t===io?this.onReset_(i):t===ip?Zi("Server Error: "+i):t===so?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Zi("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ms!==i&&Z("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),jt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Xf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):jt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Zf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ao,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xe.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends sl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!gs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Yn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=32,co=768;class A{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function k(){return new A("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ke(n){return n.pieces_.length-n.pieceNum_}function R(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new A(n.pieces_,e)}function rl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function op(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ol(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function al(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new A(e,0)}function x(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof A)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new A(t,0)}function T(n){return n.pieceNum_>=n.pieces_.length}function J(n,e){const t=b(n),i=b(e);if(t===null)return e;if(t===i)return J(R(n),R(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Us(n,e){if(Ke(n)!==Ke(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function le(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ke(n)>Ke(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class ap{constructor(e,t){this.errorPrefix_=t,this.parts_=ol(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ui(this.parts_[i]);ll(this)}}function lp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ui(e),ll(n)}function cp(n){const e=n.parts_.pop();n.byteLength_-=ui(e),n.parts_.length>0&&(n.byteLength_-=1)}function ll(n){if(n.byteLength_>co)throw new Error(n.errorPrefix_+"has a key path longer than "+co+" bytes ("+n.byteLength_+").");if(n.parts_.length>lo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+lo+") or object contains a cycle "+Je(n))}function Je(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends sl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Bs}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=1e3,dp=300*1e3,uo=30*1e3,up=1.3,hp=3e4,fp="server_kill",ho=3;class Ie extends il{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ie.nextPersistentConnectionId_++,this.log_=yn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ut,this.maxReconnectDelay_=dp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Yn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(B(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new di,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ie.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ae(e,"w")){const i=Et(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Z(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Uc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=uo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Fc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Zi("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ut,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ut,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hp&&(this.reconnectDelay_=Ut),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*up)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new rp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,p=>{Z(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(fp)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Z(d),l())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ki(this.interruptReasons_)&&(this.reconnectDelay_=Ut,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Os(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new A(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){K("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ho&&(this.reconnectDelay_=uo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){K("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ho&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ma.replace(/\./g,"-")]=1,gs()?e["framework.cordova"]=1:jo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yn.getInstance().currentlyOnline();return Ki(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0;Ie.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new I(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new I(Tt,e),s=new I(Tt,t);return this.compare(i,s)!==0}minPost(){return I.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;class cl extends gi{static get __EMPTY_NODE(){return Cn}static set __EMPTY_NODE(e){Cn=e}compare(e,t){return Pt(e.name,t.name)}isDefinedOn(e){throw Ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(rt,Cn)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,Cn)}toString(){return".key"}}const vt=new cl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class U{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??U.RED,this.left=s??X.EMPTY_NODE,this.right=r??X.EMPTY_NODE}copy(e,t,i,s,r){return new U(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return X.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return X.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}U.RED=!0;U.BLACK=!1;class pp{copy(e,t,i,s,r){return this}insert(e,t,i){return new U(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class X{constructor(e,t=X.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new X(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,U.BLACK,null,null))}remove(e){return new X(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,U.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new An(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new An(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new An(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new An(this.root_,null,this.comparator_,!0,e)}}X.EMPTY_NODE=new pp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mp(n,e){return Pt(n.name,e.name)}function $s(n,e){return Pt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts;function gp(n){ts=n}const dl=function(n){return typeof n=="number"?"number:"+$a(n):"string:"+n},ul=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ae(e,".sv"),"Priority must be a string or number.")}else m(n===ts||n.isEmpty(),"priority of unexpected type.");m(n===ts||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fo;class F{constructor(e,t=F.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ul(this.priorityNode_)}static set __childrenNodeConstructor(e){fo=e}static get __childrenNodeConstructor(){return fo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new F(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:b(e)===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:F.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=b(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,F.__childrenNodeConstructor.EMPTY_NODE.updateChild(R(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+dl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=$a(this.value_):e+=this.value_,this.lazyHash_=Fa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===F.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof F.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=F.VALUE_TYPE_ORDER.indexOf(t),r=F.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}F.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl,fl;function _p(n){hl=n}function vp(n){fl=n}class yp extends gi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Pt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(rt,new F("[PRIORITY-POST]",fl))}makePost(e,t){const i=hl(e);return new I(t,new F("[PRIORITY-POST]",i))}toString(){return".priority"}}const O=new yp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ep=Math.log(2);class bp{constructor(e){const t=r=>parseInt(Math.log(r)/Ep,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Qn=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new U(h,d.node,U.BLACK,null,null);{const p=parseInt(u/2,10)+l,f=s(l,p),y=s(p+1,c);return d=n[p],h=t?t(d):d,new U(h,d.node,U.BLACK,f,y)}},r=function(l){let c=null,u=null,d=n.length;const h=function(f,y){const w=d-f,E=d;d-=f;const M=s(w+1,E),H=n[w],te=t?t(H):H;p(new U(te,H.node,y,null,M))},p=function(f){c?(c.left=f,c=f):(u=f,c=f)};for(let f=0;f<l.count;++f){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(f+1));y?h(w,U.BLACK):(h(w,U.BLACK),h(w,U.RED))}return u},o=new bp(n.length),a=r(o);return new X(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi;const ut={};class be{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(ut&&O,"ChildrenNode.ts has not been loaded"),xi=xi||new be({".priority":ut},{".priority":O}),xi}get(e){const t=Et(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof X?t:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,t){m(e!==vt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(I.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Qn(i,e.getCompare()):a=ut;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new be(u,c)}addToIndexes(e,t){const i=$n(this.indexes_,(s,r)=>{const o=Et(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===ut)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(I.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Qn(a,o.getCompare())}else return ut;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new I(e.name,a))),l.insert(e,e.node)}});return new be(i,this.indexSet_)}removeFromIndexes(e,t){const i=$n(this.indexes_,s=>{if(s===ut)return s;{const r=t.get(e.name);return r?s.remove(new I(e.name,r)):s}});return new be(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bt;class v{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&ul(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bt||(Bt=new v(new X($s),null,be.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bt}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Bt:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(R(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new I(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Bt:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=b(e);if(i===null)return t;{m(b(e)!==".priority"||Ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(R(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(O,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+dl(this.getPriority().val())+":"),this.forEachChild(O,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Fa(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new I(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===En?-1:0}withIndex(e){if(e===vt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===vt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(O),s=t.getIterator(O);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vt?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ip extends v{constructor(){super(new X($s),v.EMPTY_NODE,be.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const En=new Ip;Object.defineProperties(I,{MIN:{value:new I(Tt,v.EMPTY_NODE)},MAX:{value:new I(rt,En)}});cl.__EMPTY_NODE=v.EMPTY_NODE;F.__childrenNodeConstructor=v;gp(En);vp(En);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=!0;function V(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new F(t,V(e))}if(!(n instanceof Array)&&Tp){const t=[];let i=!1;if(ee(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new I(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Qn(t,mp,o=>o.name,$s);if(i){const o=Qn(t,O.getCompare());return new v(r,V(e),new be({".priority":o},{".priority":O}))}else return new v(r,V(e),be.Default)}else{let t=v.EMPTY_NODE;return ee(n,(i,s)=>{if(Ae(n,i)&&i.substring(0,1)!=="."){const r=V(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(V(e))}}_p(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wp extends gi{constructor(e){super(),this.indexPath_=e,m(!T(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Pt(e.name,t.name):r}makePost(e,t){const i=V(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,En);return new I(rt,e)}toString(){return ol(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp extends gi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Pt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){const i=V(e);return new I(t,i)}toString(){return".value"}}const kp=new Sp;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(n){return{type:"value",snapshotNode:n}}function wt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function nn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function sn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Cp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(nn(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(wt(t,i)):o.trackChildChange(sn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(O,(s,r)=>{t.hasChild(s)||i.trackChildChange(nn(s,r))}),t.isLeafNode()||t.forEachChild(O,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(sn(s,r,o))}else i.trackChildChange(wt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this.indexedFilter_=new Vs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rn.getStartPost_(e),this.endPost_=rn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new I(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(O,(o,a)=>{r.matches(new I(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new rn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new I(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,p)=>d(p,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new I(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const p=h==null?1:o(h,l);if(u&&!i.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(sn(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(nn(t,d));const y=a.updateImmediateChild(t,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(wt(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(nn(c.name,c.node)),r.trackChildChange(wt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=O}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Tt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===O}copy(){const e=new Hs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rp(n){return n.loadsAllData()?new Vs(n.getIndex()):n.hasLimit()?new Ap(n):new rn(n)}function po(n){const e={};if(n.isDefault())return e;let t;if(n.index_===O?t="$priority":n.index_===kp?t="$value":n.index_===vt?t="$key":(m(n.index_ instanceof wp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=B(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=B(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+B(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=B(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+B(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function mo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==O&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends il{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=yn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Jn.getListenId_(e,i),a={};this.listens_[o]=a;const l=po(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),Et(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=Jn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=po(e._queryParams),i=e._path.toString(),s=new di;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+At(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Jt(a.responseText)}catch{Z("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&Z("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(){return{value:null,children:new Map}}function ml(n,e,t){if(T(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=b(e);n.children.has(i)||n.children.set(i,Xn());const s=n.children.get(i);e=R(e),ml(s,e,t)}}function ns(n,e,t){n.value!==null?t(e,n.value):Pp(n,(i,s)=>{const r=new A(e.toString()+"/"+i);ns(s,r,t)})}function Pp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ee(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=10*1e3,Dp=30*1e3,Op=300*1e3;class Mp{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lp(e);const i=go+(Dp-go)*Math.random();jt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ee(e,(s,r)=>{r>0&&Ae(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),jt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Op))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ce||(ce={}));function gl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ks(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ce.ACK_USER_WRITE,this.source=gl()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new A(e));return new Zn(k(),t,this.revert)}}else return m(b(this.path)===e,"operationForChild called for unrelated child."),new Zn(R(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e,t){this.source=e,this.path=t,this.type=ce.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new on(this.source,k()):new on(this.source,R(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ce.OVERWRITE}operationForChild(e){return T(this.path)?new ot(this.source,k(),this.snap.getImmediateChild(e)):new ot(this.source,R(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ce.MERGE}operationForChild(e){if(T(this.path)){const t=this.children.subtree(new A(e));return t.isEmpty()?null:t.value?new ot(this.source,k(),t.value):new an(this.source,k(),t)}else return m(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new an(this.source,R(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Fp(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Cp(o.childName,o.snapshotNode))}),$t(n,s,"child_removed",e,i,t),$t(n,s,"child_added",e,i,t),$t(n,s,"child_moved",r,i,t),$t(n,s,"child_changed",e,i,t),$t(n,s,"value",e,i,t),s}function $t(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Bp(n,a,l)),o.forEach(a=>{const l=Up(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Up(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Bp(n,e,t){if(e.childName==null||t.childName==null)throw Ct("Should only compare child_ events.");const i=new I(e.childName,e.snapshotNode),s=new I(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(n,e){return{eventCache:n,serverCache:e}}function qt(n,e,t,i){return _i(new at(e,t,i),n.serverCache)}function _l(n,e,t,i){return _i(n.eventCache,new at(e,t,i))}function is(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function lt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fi;const $p=()=>(Fi||(Fi=new X(Sf)),Fi);class N{constructor(e,t=$p()){this.value=e,this.children=t}static fromObject(e){let t=new N(null);return ee(e,(i,s)=>{t=t.set(new A(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:k(),value:this.value};if(T(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(R(e),t);return r!=null?{path:x(new A(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const t=b(e),i=this.children.get(t);return i!==null?i.subtree(R(e)):new N(null)}}set(e,t){if(T(e))return new N(t,this.children);{const i=b(e),r=(this.children.get(i)||new N(null)).set(R(e),t),o=this.children.insert(i,r);return new N(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=b(e),i=this.children.get(t);if(i){const s=i.remove(R(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const t=b(e),i=this.children.get(t);return i?i.get(R(e)):null}}setTree(e,t){if(T(e))return t;{const i=b(e),r=(this.children.get(i)||new N(null)).setTree(R(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new N(this.value,o)}}fold(e){return this.fold_(k(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(x(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,k(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(T(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(R(e),x(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,k(),t)}foreachOnPath_(e,t,i){if(T(e))return this;{this.value&&i(t,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(R(e),x(t,s),i):new N(null)}}foreach(e){this.foreach_(k(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(x(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.writeTree_=e}static empty(){return new de(new N(null))}}function zt(n,e,t){if(T(e))return new de(new N(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=J(s,e);return r=r.updateChild(o,t),new de(n.writeTree_.set(s,r))}else{const s=new N(t),r=n.writeTree_.setTree(e,s);return new de(r)}}}function _o(n,e,t){let i=n;return ee(t,(s,r)=>{i=zt(i,x(e,s),r)}),i}function vo(n,e){if(T(e))return de.empty();{const t=n.writeTree_.setTree(e,new N(null));return new de(t)}}function ss(n,e){return ct(n,e)!=null}function ct(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(J(t.path,e)):null}function yo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(O,(i,s)=>{e.push(new I(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new I(i,s.value))}),e}function Ve(n,e){if(T(e))return n;{const t=ct(n,e);return t!=null?new de(new N(t)):new de(n.writeTree_.subtree(e))}}function rs(n){return n.writeTree_.isEmpty()}function St(n,e){return vl(k(),n.writeTree_,e)}function vl(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=vl(x(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(x(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(n,e){return Il(e,n)}function Vp(n,e,t,i,s){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=zt(n.visibleWrites,e,t)),n.lastWriteId=i}function Hp(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Kp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Gp(a,i.path)?s=!1:le(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Wp(n),!0;if(i.snap)n.visibleWrites=vo(n.visibleWrites,i.path);else{const a=i.children;ee(a,l=>{n.visibleWrites=vo(n.visibleWrites,x(i.path,l))})}return!0}else return!1}function Gp(n,e){if(n.snap)return le(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&le(x(n.path,t),e))return!0;return!1}function Wp(n){n.visibleWrites=yl(n.allWrites,jp,k()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function jp(n){return n.visible}function yl(n,e,t){let i=de.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)le(t,o)?(a=J(t,o),i=zt(i,a,r.snap)):le(o,t)&&(a=J(o,t),i=zt(i,k(),r.snap.getChild(a)));else if(r.children){if(le(t,o))a=J(t,o),i=_o(i,a,r.children);else if(le(o,t))if(a=J(o,t),T(a))i=_o(i,k(),r.children);else{const l=Et(r.children,b(a));if(l){const c=l.getChild(R(a));i=zt(i,k(),c)}}}else throw Ct("WriteRecord should have .snap or .children")}}return i}function El(n,e,t,i,s){if(!i&&!s){const r=ct(n.visibleWrites,e);if(r!=null)return r;{const o=Ve(n.visibleWrites,e);if(rs(o))return t;if(t==null&&!ss(o,k()))return null;{const a=t||v.EMPTY_NODE;return St(o,a)}}}else{const r=Ve(n.visibleWrites,e);if(!s&&rs(r))return t;if(!s&&t==null&&!ss(r,k()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(le(c.path,e)||le(e,c.path))},a=yl(n.allWrites,o,e),l=t||v.EMPTY_NODE;return St(a,l)}}}function qp(n,e,t){let i=v.EMPTY_NODE;const s=ct(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(O,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ve(n.visibleWrites,e);return t.forEachChild(O,(o,a)=>{const l=St(Ve(r,new A(o)),a);i=i.updateImmediateChild(o,l)}),yo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ve(n.visibleWrites,e);return yo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function zp(n,e,t,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=x(e,t);if(ss(n.visibleWrites,r))return null;{const o=Ve(n.visibleWrites,r);return rs(o)?s.getChild(t):St(o,s.getChild(t))}}function Yp(n,e,t,i){const s=x(e,t),r=ct(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ve(n.visibleWrites,s);return St(o,i.getNode().getImmediateChild(t))}else return null}function Qp(n,e){return ct(n.visibleWrites,e)}function Jp(n,e,t,i,s,r,o){let a;const l=Ve(n.visibleWrites,e),c=ct(l,k());if(c!=null)a=c;else if(t!=null)a=St(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let p=h.getNext();for(;p&&u.length<s;)d(p,i)!==0&&u.push(p),p=h.getNext();return u}else return[]}function Xp(){return{visibleWrites:de.empty(),allWrites:[],lastWriteId:-1}}function ei(n,e,t,i){return El(n.writeTree,n.treePath,e,t,i)}function js(n,e){return qp(n.writeTree,n.treePath,e)}function Eo(n,e,t,i){return zp(n.writeTree,n.treePath,e,t,i)}function ti(n,e){return Qp(n.writeTree,x(n.treePath,e))}function Zp(n,e,t,i,s,r){return Jp(n.writeTree,n.treePath,e,t,i,s,r)}function qs(n,e,t){return Yp(n.writeTree,n.treePath,e,t)}function bl(n,e){return Il(x(n.treePath,e),n.writeTree)}function Il(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,sn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,nn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,wt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,sn(i,e.snapshotNode,s.oldSnap));else throw Ct("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Tl=new tm;class zs{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new at(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return qs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:lt(this.viewCache_),r=Zp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){return{filter:n}}function im(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function sm(n,e,t,i,s){const r=new em;let o,a;if(t.type===ce.OVERWRITE){const c=t;c.source.fromUser?o=os(n,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!T(c.path),o=ni(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===ce.MERGE){const c=t;c.source.fromUser?o=om(n,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=as(n,e,c.path,c.children,i,s,a,r))}else if(t.type===ce.ACK_USER_WRITE){const c=t;c.revert?o=cm(n,e,c.path,i,s,r):o=am(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===ce.LISTEN_COMPLETE)o=lm(n,e,t.path,i,r);else throw Ct("Unknown operation type: "+t.type);const l=r.getChanges();return rm(e,o,l),{viewCache:o,changes:l}}function rm(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=is(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(pl(is(e)))}}function wl(n,e,t,i,s,r){const o=e.eventCache;if(ti(i,t)!=null)return e;{let a,l;if(T(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=lt(e),u=c instanceof v?c:v.EMPTY_NODE,d=js(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=ei(i,lt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=b(t);if(c===".priority"){m(Ke(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Eo(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=R(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Eo(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=qs(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return qt(e,a,o.isFullyInitialized()||T(t),n.filter.filtersNodes())}}function ni(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(T(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),p,null)}else{const p=b(t);if(!l.isCompleteForPath(t)&&Ke(t)>1)return e;const f=R(t),w=l.getNode().getImmediateChild(p).updateChild(f,i);p===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),p,w,f,Tl,null)}const d=_l(e,c,l.isFullyInitialized()||T(t),u.filtersNodes()),h=new zs(s,d,r);return wl(n,d,t,s,h,a)}function os(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new zs(s,e,r);if(T(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=qt(e,c,!0,n.filter.filtersNodes());else{const d=b(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=qt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=R(t),p=a.getNode().getImmediateChild(d);let f;if(T(h))f=i;else{const y=u.getCompleteChild(d);y!=null?rl(h)===".priority"&&y.getChild(al(h)).isEmpty()?f=y:f=y.updateChild(h,i):f=v.EMPTY_NODE}if(p.equals(f))l=e;else{const y=n.filter.updateChild(a.getNode(),d,f,h,u,o);l=qt(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function bo(n,e){return n.eventCache.isCompleteForChild(e)}function om(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=x(t,l);bo(e,b(u))&&(a=os(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=x(t,l);bo(e,b(u))||(a=os(n,a,u,c,s,r,o))}),a}function Io(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function as(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;T(t)?c=i:c=new N(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),f=Io(n,p,h);l=ni(n,l,new A(d),f,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const p=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!p){const f=e.serverCache.getNode().getImmediateChild(d),y=Io(n,f,h);l=ni(n,l,new A(d),y,s,r,o,a)}}),l}function am(n,e,t,i,s,r,o){if(ti(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(T(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ni(n,e,t,l.getNode().getChild(t),s,r,a,o);if(T(t)){let c=new N(null);return l.getNode().forEachChild(vt,(u,d)=>{c=c.set(new A(u),d)}),as(n,e,t,c,s,r,a,o)}else return e}else{let c=new N(null);return i.foreach((u,d)=>{const h=x(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),as(n,e,t,c,s,r,a,o)}}function lm(n,e,t,i,s){const r=e.serverCache,o=_l(e,r.getNode(),r.isFullyInitialized()||T(t),r.isFiltered());return wl(n,o,t,i,Tl,s)}function cm(n,e,t,i,s,r){let o;if(ti(i,t)!=null)return e;{const a=new zs(i,e,s),l=e.eventCache.getNode();let c;if(T(t)||b(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=ei(i,lt(e));else{const d=e.serverCache.getNode();m(d instanceof v,"serverChildren would be complete if leaf node"),u=js(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=b(t);let d=qs(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,R(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,v.EMPTY_NODE,R(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ei(i,lt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ti(i,k())!=null,qt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Vs(i.getIndex()),r=Rp(i);this.processor_=nm(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new at(l,o.isFullyInitialized(),s.filtersNodes()),d=new at(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=_i(d,u),this.eventGenerator_=new xp(this.query_)}get query(){return this.query_}}function um(n){return n.viewCache_.serverCache.getNode()}function hm(n,e){const t=lt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!T(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function To(n){return n.eventRegistrations_.length===0}function fm(n,e){n.eventRegistrations_.push(e)}function wo(n,e,t){const i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function So(n,e,t,i){e.type===ce.MERGE&&e.source.queryId!==null&&(m(lt(n.viewCache_),"We should always have a full cache before handling merges"),m(is(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=sm(n.processor_,s,e,t,i);return im(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Sl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function pm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(O,(r,o)=>{i.push(wt(r,o))}),t.isFullyInitialized()&&i.push(pl(t.getNode())),Sl(n,i,t.getNode(),e)}function Sl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Fp(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;class mm{constructor(){this.views=new Map}}function gm(n){m(!ii,"__referenceConstructor has already been defined"),ii=n}function _m(){return m(ii,"Reference.ts has not been loaded"),ii}function vm(n){return n.views.size===0}function Ys(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),So(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(So(o,e,t,i));return r}}function ym(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ei(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=js(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=_i(new at(a,l,!1),new at(i,s,!1));return new dm(e,c)}return o}function Em(n,e,t,i,s,r){const o=ym(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),fm(o,t),pm(o,t)}function bm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ge(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(wo(c,t,i)),To(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(wo(l,t,i)),To(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ge(n)&&r.push(new(_m())(e._repo,e._path)),{removed:r,events:o}}function kl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function yt(n,e){let t=null;for(const i of n.views.values())t=t||hm(i,e);return t}function Cl(n,e){if(e._queryParams.loadsAllData())return vi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Al(n,e){return Cl(n,e)!=null}function Ge(n){return vi(n)!=null}function vi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;function Im(n){m(!si,"__referenceConstructor has already been defined"),si=n}function Tm(){return m(si,"Reference.ts has not been loaded"),si}let wm=1;class ko{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=Xp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rl(n,e,t,i,s){return Vp(n.pendingWriteTree_,e,t,i,s),s?bn(n,new ot(gl(),e,t)):[]}function Ze(n,e,t=!1){const i=Hp(n.pendingWriteTree_,e);if(Kp(n.pendingWriteTree_,e)){let r=new N(null);return i.snap!=null?r=r.set(k(),!0):ee(i.children,o=>{r=r.set(new A(o),!0)}),bn(n,new Zn(i.path,r,t))}else return[]}function yi(n,e,t){return bn(n,new ot(Ks(),e,t))}function Sm(n,e,t){const i=N.fromObject(t);return bn(n,new an(Ks(),e,i))}function km(n,e){return bn(n,new on(Ks(),e))}function Cm(n,e,t){const i=Js(n,t);if(i){const s=Xs(i),r=s.path,o=s.queryId,a=J(r,e),l=new on(Gs(o),a);return Zs(n,r,l)}else return[]}function ls(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Al(o,e))){const l=bm(o,e,t,i);vm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,p)=>Ge(p));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const p=Nm(h);for(let f=0;f<p.length;++f){const y=p[f],w=y.query,E=Ll(n,y);n.listenProvider_.startListening(Yt(w),ri(n,w),E.hashFn,E.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(Yt(e),null):c.forEach(h=>{const p=n.queryToTagMap.get(Ei(h));n.listenProvider_.stopListening(Yt(h),p)}))}Pm(n,c)}return a}function Am(n,e,t,i){const s=Js(n,i);if(s!=null){const r=Xs(s),o=r.path,a=r.queryId,l=J(o,e),c=new ot(Gs(a),l,t);return Zs(n,o,c)}else return[]}function Rm(n,e,t,i){const s=Js(n,i);if(s){const r=Xs(s),o=r.path,a=r.queryId,l=J(o,e),c=N.fromObject(t),u=new an(Gs(a),l,c);return Zs(n,o,u)}else return[]}function Co(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,p)=>{const f=J(h,s);r=r||yt(p,f),o=o||Ge(p)});let a=n.syncPointTree_.get(s);a?(o=o||Ge(a),r=r||yt(a,k())):(a=new mm,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((p,f)=>{const y=yt(f,k());y&&(r=r.updateImmediateChild(p,y))}));const c=Al(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ei(e);m(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const p=Lm();n.queryToTagMap.set(h,p),n.tagToQueryMap.set(p,h)}const u=Ws(n.pendingWriteTree_,s);let d=Em(a,e,t,u,r,l);if(!c&&!o&&!i){const h=Cl(a,e);d=d.concat(Dm(n,e,h))}return d}function Qs(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=J(o,e),c=yt(a,l);if(c)return c});return El(s,e,r,t,!0)}function bn(n,e){return Nl(e,n.syncPointTree_,null,Ws(n.pendingWriteTree_,k()))}function Nl(n,e,t,i){if(T(n.path))return Pl(n,e,t,i);{const s=e.get(k());t==null&&s!=null&&(t=yt(s,k()));let r=[];const o=b(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=bl(i,o);r=r.concat(Nl(a,l,c,u))}return s&&(r=r.concat(Ys(s,n,i,t))),r}}function Pl(n,e,t,i){const s=e.get(k());t==null&&s!=null&&(t=yt(s,k()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=bl(i,o),u=n.operationForChild(o);u&&(r=r.concat(Pl(u,a,l,c)))}),s&&(r=r.concat(Ys(s,n,i,t))),r}function Ll(n,e){const t=e.query,i=ri(n,t);return{hashFn:()=>(um(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Cm(n,t._path,i):km(n,t._path);{const r=Af(s,t);return ls(n,t,null,r)}}}}function ri(n,e){const t=Ei(e);return n.queryToTagMap.get(t)}function Ei(n){return n._path.toString()+"$"+n._queryIdentifier}function Js(n,e){return n.tagToQueryMap.get(e)}function Xs(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new A(n.substr(0,e))}}function Zs(n,e,t){const i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=Ws(n.pendingWriteTree_,e);return Ys(i,t,s,null)}function Nm(n){return n.fold((e,t,i)=>{if(t&&Ge(t))return[vi(t)];{let s=[];return t&&(s=kl(t)),ee(i,(r,o)=>{s=s.concat(o)}),s}})}function Yt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Tm())(n._repo,n._path):n}function Pm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ei(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Lm(){return wm++}function Dm(n,e,t){const i=e._path,s=ri(n,e),r=Ll(n,t),o=n.listenProvider_.startListening(Yt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)m(!Ge(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!T(c)&&u&&Ge(u))return[vi(u).query];{let h=[];return u&&(h=h.concat(kl(u).map(p=>p.query))),ee(d,(p,f)=>{h=h.concat(f)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(Yt(u),ri(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new er(t)}node(){return this.node_}}class tr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=x(this.path_,e);return new tr(this.syncTree_,t)}node(){return Qs(this.syncTree_,this.path_)}}const Om=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ao=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Mm(n[".sv"],e,t);if(typeof n[".sv"]=="object")return xm(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Mm=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},xm=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Fm=function(n,e,t,i){return nr(e,new tr(t,n),i)},Dl=function(n,e,t){return nr(n,new er(e),t)};function nr(n,e,t){const i=n.getPriority().val(),s=Ao(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ao(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new F(a,V(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new F(s))),o.forEachChild(O,(a,l)=>{const c=nr(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function sr(n,e){let t=e instanceof A?e:new A(e),i=n,s=b(t);for(;s!==null;){const r=Et(i.node.children,s)||{children:{},childCount:0};i=new ir(s,i,r),t=R(t),s=b(t)}return i}function Dt(n){return n.node.value}function Ol(n,e){n.node.value=e,cs(n)}function Ml(n){return n.node.childCount>0}function Um(n){return Dt(n)===void 0&&!Ml(n)}function bi(n,e){ee(n.node.children,(t,i)=>{e(new ir(t,n,i))})}function xl(n,e,t,i){t&&e(n),bi(n,s=>{xl(s,e,!0)})}function Bm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function In(n){return new A(n.parent===null?n.name:In(n.parent)+"/"+n.name)}function cs(n){n.parent!==null&&$m(n.parent,n.name,n)}function $m(n,e,t){const i=Um(t),s=Ae(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,cs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,cs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vm=/[\[\].#$\/\u0000-\u001F\u007F]/,Hm=/[\[\].#$\u0000-\u001F\u007F]/,Ui=10*1024*1024,Fl=function(n){return typeof n=="string"&&n.length!==0&&!Vm.test(n)},Ul=function(n){return typeof n=="string"&&n.length!==0&&!Hm.test(n)},Km=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ul(n)},Bl=function(n,e,t,i){i&&e===void 0||rr(_s(n,"value"),e,t)},rr=function(n,e,t){const i=t instanceof A?new ap(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Je(i));if(typeof e=="function")throw new Error(n+"contains a function "+Je(i)+" with contents = "+e.toString());if(Ua(e))throw new Error(n+"contains "+e.toString()+" "+Je(i));if(typeof e=="string"&&e.length>Ui/3&&ui(e)>Ui)throw new Error(n+"contains a string greater than "+Ui+" utf8 bytes "+Je(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ee(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fl(o)))throw new Error(n+" contains an invalid key ("+o+") "+Je(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lp(i,o),rr(n,a,i),cp(i)}),s&&r)throw new Error(n+' contains ".value" child '+Je(i)+" in addition to actual children.")}},$l=function(n,e,t,i){if(!Ul(t))throw new Error(_s(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Gm=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$l(n,e,t)},or=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Wm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Km(t))throw new Error(_s(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ar(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Us(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Vl(n,e,t){ar(n,t),Hl(n,i=>Us(i,e))}function Ce(n,e,t){ar(n,t),Hl(n,i=>le(i,e)||le(e,i))}function Hl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(qm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function qm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Wt&&K("event: "+t.toString()),Lt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="repo_interrupt",Ym=25;class Qm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jm,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Xn(),this.transactionQueueTree_=new ir,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Jm(n,e,t){if(n.stats_=xs(n.repoInfo_),n.forceRestClient_||Lf())n.server_=new Jn(n.repoInfo_,(i,s,r,o)=>{Ro(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>No(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ie(n.repoInfo_,e,(i,s,r,o)=>{Ro(n,i,s,r,o)},i=>{No(n,i)},i=>{Xm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Ff(n.repoInfo_,()=>new Mp(n.stats_,n.server_)),n.infoData_=new Np,n.infoSyncTree_=new ko({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=yi(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cr(n,"connected",!1),n.serverSyncTree_=new ko({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Ce(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Kl(n){const t=n.infoData_.getNode(new A(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function lr(n){return Om({timestamp:Kl(n)})}function Ro(n,e,t,i,s){n.dataUpdateCount++;const r=new A(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=$n(t,c=>V(c));o=Rm(n.serverSyncTree_,r,l,s)}else{const l=V(t);o=Am(n.serverSyncTree_,r,l,s)}else if(i){const l=$n(t,c=>V(c));o=Sm(n.serverSyncTree_,r,l)}else{const l=V(t);o=yi(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ii(n,r)),Ce(n.eventQueue_,a,o)}function No(n,e){cr(n,"connected",e),e===!1&&eg(n)}function Xm(n,e){ee(e,(t,i)=>{cr(n,t,i)})}function cr(n,e,t){const i=new A("/.info/"+e),s=V(t);n.infoData_.updateSnapshot(i,s);const r=yi(n.infoSyncTree_,i,s);Ce(n.eventQueue_,i,r)}function Gl(n){return n.nextWriteId_++}function Zm(n,e,t,i,s){dr(n,"set",{path:e.toString(),value:t,priority:i});const r=lr(n),o=V(t,i),a=Qs(n.serverSyncTree_,e),l=Dl(o,a,r),c=Gl(n),u=Rl(n.serverSyncTree_,e,l,c,!0);ar(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,p)=>{const f=h==="ok";f||Z("set at "+e+" failed: "+h);const y=Ze(n.serverSyncTree_,c,!f);Ce(n.eventQueue_,e,y),sg(n,s,h,p)});const d=Yl(n,e);Ii(n,d),Ce(n.eventQueue_,d,[])}function eg(n){dr(n,"onDisconnectEvents");const e=lr(n),t=Xn();ns(n.onDisconnect_,k(),(s,r)=>{const o=Fm(s,r,n.serverSyncTree_,e);ml(t,s,o)});let i=[];ns(t,k(),(s,r)=>{i=i.concat(yi(n.serverSyncTree_,s,r));const o=Yl(n,s);Ii(n,o)}),n.onDisconnect_=Xn(),Ce(n.eventQueue_,k(),i)}function tg(n,e,t){let i;b(e._path)===".info"?i=Co(n.infoSyncTree_,e,t):i=Co(n.serverSyncTree_,e,t),Vl(n.eventQueue_,e._path,i)}function ng(n,e,t){let i;b(e._path)===".info"?i=ls(n.infoSyncTree_,e,t):i=ls(n.serverSyncTree_,e,t),Vl(n.eventQueue_,e._path,i)}function ig(n){n.persistentConnection_&&n.persistentConnection_.interrupt(zm)}function dr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),K(t,...e)}function sg(n,e,t,i){e&&Lt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Wl(n,e,t){return Qs(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function ur(n,e=n.transactionQueueTree_){if(e||Ti(n,e),Dt(e)){const t=ql(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&rg(n,In(e),t)}else Ml(e)&&bi(e,t=>{ur(n,t)})}function rg(n,e,t){const i=t.map(c=>c.currentWriteId),s=Wl(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=J(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{dr(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(Ze(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();Ti(n,sr(n.transactionQueueTree_,e)),ur(n,n.transactionQueueTree_),Ce(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Lt(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Z("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Ii(n,e)}},o)}function Ii(n,e){const t=jl(n,e),i=In(t),s=ql(n,t);return og(n,s,i),i}function og(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=J(t,l.path);let u=!1,d;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Ze(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Ym)u=!0,d="maxretry",s=s.concat(Ze(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Wl(n,l.path,o);l.currentInputSnapshot=h;const p=e[a].update(h.val());if(p!==void 0){rr("transaction failed: Data returned ",p,l.path);let f=V(p);typeof p=="object"&&p!=null&&Ae(p,".priority")||(f=f.updatePriority(h.getPriority()));const w=l.currentWriteId,E=lr(n),M=Dl(f,h,E);l.currentOutputSnapshotRaw=f,l.currentOutputSnapshotResolved=M,l.currentWriteId=Gl(n),o.splice(o.indexOf(w),1),s=s.concat(Rl(n.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),s=s.concat(Ze(n.serverSyncTree_,w,!0))}else u=!0,d="nodata",s=s.concat(Ze(n.serverSyncTree_,l.currentWriteId,!0))}Ce(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ti(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Lt(i[a]);ur(n,n.transactionQueueTree_)}function jl(n,e){let t,i=n.transactionQueueTree_;for(t=b(e);t!==null&&Dt(i)===void 0;)i=sr(i,t),e=R(e),t=b(e);return i}function ql(n,e){const t=[];return zl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function zl(n,e,t){const i=Dt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);bi(e,s=>{zl(n,s,t)})}function Ti(n,e){const t=Dt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Ol(e,t.length>0?t:void 0)}bi(e,i=>{Ti(n,i)})}function Yl(n,e){const t=In(jl(n,e)),i=sr(n.transactionQueueTree_,e);return Bm(i,s=>{Bi(n,s)}),Bi(n,i),xl(i,s=>{Bi(n,s)}),t}function Bi(n,e){const t=Dt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Ze(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ol(e,void 0):t.length=r+1,Ce(n.eventQueue_,In(e),s);for(let o=0;o<i.length;o++)Lt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function lg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Z(`Invalid query segment '${t}' in query '${n}'`)}return e}const Po=function(n,e){const t=cg(n),i=t.namespace;t.domain==="firebase.com"&&ke(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&ke("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Tf();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Qa(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new A(t.pathString)}},cg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=ag(n.substring(u,d)));const h=lg(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const f=e.indexOf(".");i=e.substring(0,f).toLowerCase(),t=e.substring(f+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",dg=(function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Lo.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=Lo.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class hg{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return T(this._path)?null:rl(this._path)}get ref(){return new ze(this._repo,this._path)}get _queryIdentifier(){const e=mo(this._queryParams),t=Os(e);return t==="{}"?"default":t}get _queryObject(){return mo(this._queryParams)}isEqual(e){if(e=$(e),!(e instanceof hr))return!1;const t=this._repo===e._repo,i=Us(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+op(this._path)}}class ze extends hr{constructor(e,t){super(e,t,new Hs,!1)}get parent(){const e=al(this._path);return e===null?null:new ze(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class oi{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new A(e),i=ln(this.ref,e);return new oi(this._node.getChild(t),i,O)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new oi(s,ln(this.ref,i),O)))}hasChild(e){const t=new A(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ot(n,e){return n=$(n),n._checkNotDeleted("ref"),e!==void 0?ln(n._root,e):n._root}function ln(n,e){return n=$(n),b(n._path)===null?Gm("child","path",e):$l("child","path",e),new ze(n._repo,x(n._path,e))}function Ql(n,e){n=$(n),or("push",n._path),Bl("push",e,n._path,!0);const t=Kl(n._repo),i=dg(t),s=ln(n,i),r=ln(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function pg(n){return or("remove",n._path),wi(n,null)}function wi(n,e){n=$(n),or("set",n._path),Bl("set",e,n._path,!1);const t=new di;return Zm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class fr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new ug("value",this,new oi(e.snapshotNode,new ze(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hg(this,e,t):null}matches(e){return e instanceof fr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function mg(n,e,t,i,s){const r=new fg(t,void 0),o=new fr(r);return tg(n._repo,n,o),()=>ng(n._repo,n,o)}function Jl(n,e,t,i){return mg(n,"value",e)}gm(ze);Im(ze);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="FIREBASE_DATABASE_EMULATOR_HOST",ds={};let _g=!1;function vg(n,e,t,i){n.repoInfo_=new Qa(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function yg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||ke("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Po(r,s),a=o.repoInfo,l;typeof process<"u"&&Qr&&(l=Qr[gg]),l?(r=`http://${l}?ns=${a.namespace}`,o=Po(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Of(n.name,n.options,e);Wm("Invalid Firebase Database URL",o),T(o.path)||ke("Database URL must point to the root of a Firebase Database (not including a child path).");const u=bg(a,n,c,new Df(n.name,t));return new Ig(u,n)}function Eg(n,e){const t=ds[e];(!t||t[n.key]!==n)&&ke(`Database ${e}(${n.repoInfo_}) has already been deleted.`),ig(n),delete t[n.key]}function bg(n,e,t,i){let s=ds[e.name];s||(s={},ds[e.name]=s);let r=s[n.toURLString()];return r&&ke("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Qm(n,_g,t,i),s[n.toURLString()]=r,r}class Ig{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Jm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ze(this._repo,k())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Eg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&ke("Cannot call "+e+" on a deleted database.")}}function Tg(n=Jo(),e){const t=Es(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=kc("database");i&&wg(t,...i)}return t}function wg(n,e,t,i={}){n=$(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&ke("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&ke('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new On(On.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Cc(i.mockUserToken,n.app.options.projectId);r=new On(o)}vg(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){_f(Rt),bt(new it("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return yg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Be(Jr,Xr,n),Be(Jr,Xr,"esm2017")}Ie.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ie.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Sg();const kg={apiKey:"AIzaSyBXqi_wmAdr5AbiS9k8Rul1ERbg5Tn73MI",authDomain:"tegelv2.firebaseapp.com",databaseURL:"https://tegelv2.firebaseio.com",projectId:"tegelv2",storageBucket:"tegelv2.firebasestorage.app",messagingSenderId:"1053223905500",appId:"1:1053223905500:web:fc9f7d25213aea0d18ec19"},Xl=Qo(kg),G=mf(Xl),Mt=Tg(Xl);function Cg(n){const e=Ot(Mt,"events");return Jl(e,t=>{const i=t.val();if(!i){n([]);return}const s=Object.keys(i).map(r=>({...i[r],id:r}));n(s)})}async function Ag(n){const e=Ot(Mt,"events"),t=Ql(e);return wi(t,n)}async function pr(n){const e=Ot(Mt,`events/${n}`);return wi(e,null)}async function Rg(n){const e=n.map(t=>pr(t));return Promise.all(e)}function Ng(n){const e=Ot(Mt,"chalkboard");return Jl(e,t=>{const i=t.val();if(!i){n([]);return}const s=Object.keys(i).map(r=>({...i[r],id:r}));n(s)})}async function Pg(n){const e=Ot(Mt,"chalkboard"),t=Ql(e);return wi(t,n)}async function Lg(){const n=Ot(Mt,"chalkboard");return pg(n)}function Dg(){const n=document.getElementById("synth-canvas");if(!n)return;const e=n.getContext("2d");if(!e)return;let t=n.width=window.innerWidth,i=n.height=window.innerHeight;window.addEventListener("resize",()=>{t=n.width=window.innerWidth,i=n.height=window.innerHeight});let s=0;const r=Array.from({length:100},()=>({x:Math.random()*t,y:Math.random()*i,size:Math.random()*2,speed:Math.random()*.05}));function o(){if(!e)return;if(e.clearRect(0,0,t,i),document.body.classList.contains("theme-win95")||document.body.classList.contains("theme-vcr")){e.fillStyle="#008080",e.fillRect(0,0,t,i),e.fillStyle="rgba(0, 0, 0, 0.04)";for(let f=0;f<i;f+=4)for(let y=f%8===0?0:2;y<t;y+=4)e.fillRect(y,f,2,2);requestAnimationFrame(o);return}const l=e.createLinearGradient(0,0,0,i);l.addColorStop(0,"#0d0221"),l.addColorStop(.5,"#240b36"),l.addColorStop(1,"#0d0221"),e.fillStyle=l,e.fillRect(0,0,t,i),e.fillStyle="#fff",r.forEach(f=>{e.globalAlpha=.2+Math.sin(Date.now()*.001+f.x)*.3,e.fillRect(f.x,f.y,f.size,f.size)}),e.globalAlpha=1;const c=i*.45,u=Math.min(t,i)*.25,d=e.createLinearGradient(0,c-u,0,c+u);d.addColorStop(0,"#ff00ff"),d.addColorStop(1,"#ff8800"),e.shadowBlur=40,e.shadowColor="#ff00ff",e.fillStyle=d,e.beginPath(),e.arc(t/2,c,u,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#0d0221";for(let f=0;f<15;f++){const y=2+f*2,w=c+f*(u*2/15)-10;w>c-u&&w<c+u&&e.fillRect(t/2-u,w,u*2,y)}e.strokeStyle="#00ffff",e.lineWidth=2,e.beginPath(),e.moveTo(0,i*.6),e.lineTo(t,i*.6),e.stroke();const h=i*.6,p=i-h;e.strokeStyle="#ff00ff",e.lineWidth=1;for(let f=-10;f<=10;f++){const y=t/2+f*(t/20),w=t/2+f*(t/2);e.beginPath(),e.moveTo(y,h),e.lineTo(w,i),e.stroke()}s=(s+1)%40;for(let f=0;f<20;f++){const y=(f*40+s)/800,w=h+Math.pow(y,2)*p;e.globalAlpha=y,e.beginPath(),e.moveTo(0,w),e.lineTo(t,w),e.stroke()}e.globalAlpha=1,requestAnimationFrame(o)}o()}const Zl=["January","February","March","April","May","June","July","August","September","October","November","December"];function ec(n,e,t){const i=[],s=new Date(n,e+1,0);for(let r=1;r<=s.getDate();r++){const o=new Date(n,e,r),a=o.getTime(),l=new Date(n,e,r,23,59,59,999).getTime(),c=t.filter(f=>f.start<l&&f.end>a),u=o.getFullYear(),d=String(o.getMonth()+1).padStart(2,"0"),h=String(o.getDate()).padStart(2,"0"),p=`${u}-${d}-${h}`;i.push({date:p,dayOfMonth:r,events:c})}return{days:i}}function Og(n,e,t,i){const s=[];let r=n,o=e;for(let a=0;a<t;a++){const l=ec(r,o,i),c=new Date(r,o,1).getDay();s.push({year:r,month:o,monthName:Zl[o],days:l.days,firstDayOfWeek:c}),o++,o>11&&(o=0,r++)}return{months:s}}function Mg(n,e){return e.some(t=>n.start<t.end&&n.end>t.start)}class tc{constructor(e){Ne(this,"canvas");Ne(this,"ctx");Ne(this,"isDrawing",!1);Ne(this,"currentPoints",[]);Ne(this,"currentColor","#00ffff");Ne(this,"currentWidth",3);Ne(this,"allLines",[]);e.innerHTML=`
            <div class="chalkboard-container">
                <div class="chalkboard-controls">
                    <input type="color" id="chalk-color" value="#00ffff">
                    <input type="range" id="chalk-width" min="1" max="10" value="3">
                    <button id="clear-chalkboard" class="small-btn-neon">Clear Board</button>
                    <button id="back-to-calendar" class="small-btn-neon" style="border-color: #ff00ff; color: #ff00ff;">Calendar</button>
                </div>
                <canvas id="chalkboard-canvas"></canvas>
            </div>
        `,this.canvas=document.getElementById("chalkboard-canvas"),this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize()),this.initEvents(),this.initFirebase()}resize(){var t;const e=(t=this.canvas.parentElement)==null?void 0:t.getBoundingClientRect();e&&(this.canvas.width=e.width,this.canvas.height=e.height-60),this.redraw()}initEvents(){const e=document.getElementById("chalk-color"),t=document.getElementById("chalk-width"),i=document.getElementById("clear-chalkboard");e.addEventListener("change",()=>this.currentColor=e.value),t.addEventListener("change",()=>this.currentWidth=parseInt(t.value)),i==null||i.addEventListener("click",()=>{ci("Clear the entire board? This will delete everyone's drawings!",()=>{Lg()})}),this.canvas.addEventListener("mousedown",s=>this.startDrawing(s)),this.canvas.addEventListener("mousemove",s=>this.draw(s)),this.canvas.addEventListener("mouseup",()=>this.stopDrawing()),this.canvas.addEventListener("mouseleave",()=>this.stopDrawing()),this.canvas.addEventListener("touchstart",s=>{s.preventDefault();const r=s.touches[0];this.startDrawing(r)}),this.canvas.addEventListener("touchmove",s=>{s.preventDefault();const r=s.touches[0];this.draw(r)}),this.canvas.addEventListener("touchend",()=>this.stopDrawing())}initFirebase(){Ng(e=>{this.allLines=e,this.redraw()})}getMousePos(e){const t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}startDrawing(e){this.isDrawing=!0;const t=this.getMousePos(e);this.currentPoints=[t],this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.strokeStyle=this.currentColor,this.ctx.lineWidth=this.currentWidth,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.shadowBlur=10,this.ctx.shadowColor=this.currentColor}draw(e){if(!this.isDrawing)return;const t=this.getMousePos(e);this.currentPoints.push(t),this.ctx.lineTo(t.x,t.y),this.ctx.stroke()}async stopDrawing(){if(!this.isDrawing)return;this.isDrawing=!1;const e=G.currentUser;e&&this.currentPoints.length>1&&await Pg({userId:e.uid,color:this.currentColor,width:this.currentWidth,points:this.currentPoints}),this.currentPoints=[]}redraw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.allLines.forEach(e=>{if(!(e.points.length<2)){this.ctx.beginPath(),this.ctx.moveTo(e.points[0].x,e.points[0].y),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.width,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color;for(let t=1;t<e.points.length;t++)this.ctx.lineTo(e.points[t].x,e.points[t].y);this.ctx.stroke()}}),this.ctx.shadowBlur=0}}const xg=[{brand:"STATENS VARDAGSVERK",headline:"HAR DU GLÖMT VARFÖR DU GICK IN I KÖKET?",subtext:"Anmäl ofrivilligt kylskåpsstirrande senast tisdag. Blankett 44-B krävs.",cta:"ERKÄNN DIREKT",badge:"MYNDIGHETSINFO",icon:"📋",imageQuery:"refrigerator kitchen",theme:"myndighet",layout:"myndighet",clickMessage:"📋 Tack! En handläggare kommer hem till dig och stänger kylskåpet om 6–8 arbetsveckor."},{brand:"377 TEGEL-TEXT",headline:"SYNTETISK FALUKORV SLUT I HELA VÄSTERÅS",subtext:"Experten: 'Folk panikköper och använder dem som nackkuddar på tåget'",cta:"SIDA 378 >>",badge:"TEXT-TV 377",icon:"📺",imageQuery:"sausage food",theme:"texttv",layout:"texttv",clickMessage:"📺 Laddar sida 378... FEL: Text-TV har tagit lunchrast till 1999."},{brand:"TV-SHOP NATT",headline:"TRÖTT PÅ ATT SKALA DINA EGNA BANANER?!",subtext:"Med BananSprängaren 3000™ öppnar du frukten med mindre än 4 gram dynamit!",cta:"BESTÄLL NU",price:"149:-",badge:"SE TV-SUCCÉN!",icon:"💥",imageQuery:"banana fruit",theme:"tvshop",layout:"tvshop",clickMessage:"💥 Kaboom! Din beställning av BananSprängaren 3000™ skickas i ett vadderat kuvert."},{brand:"AFTONCHOCKEN EXTRA",headline:"CHOCKEN: KENNETH, 54, ÅT EN HELT VANLIG FRUKOST",subtext:'"Jag tog en ostmacka och sen hände absolut ingenting" • Grannarna rasar',cta:"LÄS PLUS+",badge:"JUST NU",icon:"🗞️",imageQuery:"cheese sandwich",theme:"tabloid",layout:"tabloid",clickMessage:"🗞️ Du har låst upp artikeln: Det var Hushållsost 28%. Kenneth mår efter omständigheterna helt okej."},{brand:"WIN98 SYSTEMTJÄNST",headline:"DITT TÅLAMOD HAR SLUTAT SVARA (FELKOD: MÅNDAG)",subtext:"Vill du starta om helgen i felsäkert läge med kanelbulle?",cta:"JA, TACK",badge:"SYSTEMFEL",icon:"💾",imageQuery:"retro computer floppy",theme:"win95",layout:"win95",clickMessage:"💾 Startar om helgen... Vänligen mata in Diskett 2 av 47 (Fredagsmys.exe)."},{brand:"CYBER-CONNY AB",headline:"TRIMMA DIN DAMMSUGARE TILL 450 HÄSTKRAFTER",subtext:"Suger upp damm, mattor, parkettgolv och mindre husdjur från grannlägenheten.",cta:"CHIPTRIMMA NU",price:"990:-",badge:"TURBO V8",icon:"🌪️",imageQuery:"vacuum cleaner jet engine",theme:"cyberneon",layout:"split",clickMessage:"🌪️ VROOOM! Din Electrolux har nu passerat ljudvallen över vardagsrumsmattan."},{brand:"SVENSKA SUCK-AKADEMIN",headline:"LÄR DIG SUCKA SÅ HÖGT ATT KOLLEGAN BYTER KONTOR",subtext:"Intensivkurs i passiv-aggressiv utandning vid kaffemaskinen. Diplom ingår.",cta:"BOKA KURS",badge:"2 PLATSER KVAR",icon:"😮‍💨",imageQuery:"office coffee bored",theme:"localbiz",layout:"split",clickMessage:"😮‍💨 *Hääääääääh...* Snyggt! Du är redan antagen till fortsättningskursen."},{brand:"MADAME YVONNES HOTLINE",headline:"JAG SPÅR DIN FRAMTID I GAMLA KVITTON FRÅN BILTEMA",subtext:"Har du köpt spännband och varmkorv? Då väntar mystisk romantik i höst.",cta:"SPÅ MIG (29 KR)",badge:"SYNSK SEDAN -92",icon:"🔮",imageQuery:"crystal ball fortune teller",theme:"occult",layout:"split",clickMessage:"🔮 Andarna talar: Du kommer köpa 3-pack torkarblad som inte passar din bil."},{brand:"MAISON DE GRÅSTEN",headline:"EAU DE KOMMUNALHUS – DEN NYA DOFTEN AV PÄRMAR & KALLT KAFFE",subtext:"En förförisk symfoni av lysrör, häftapparat och linoleumgolv.",cta:"UPPLEV DOFTEN",price:"2 499:-",badge:"PARIS • BORÅS",icon:"✨",imageQuery:"perfume bottle luxury",theme:"luxury",layout:"split",clickMessage:"✨ *Pssht!* Du luktar nu som ett sammanträdesrum i Eslöv kl 15:45."},{brand:"BRF TÅLAMODET",headline:"VEM TOG LUDDET UR TORKTUMLAREN MEN LÄMNADE EN STRUMPA?",subtext:"Styrelsen har kallat in forensisk expertis och arga lappar i laminat.",cta:"ANGE SKYLDIG",badge:"TVÄTTSTUGAN",icon:"🧦",imageQuery:"washing machine laundry",theme:"warning",layout:"split",clickMessage:"🧦 Anmälan mottagen! En laminerad arg lapp med Comic Sans har satts upp i trapphuset."},{brand:"ROOT@FALUKORV:~#",headline:"LADDA NER 64 GB EXTRA SÖMN TILL INATT [CRACKED]",subtext:"Ingen reklam • Inga konstiga drömmar om gymnasiet • 100% djupsömn.",cta:"RUN SLEEP.SH",badge:"TERMINAL v4.2",icon:"💻",imageQuery:"hacker matrix server",theme:"terminal",layout:"split",clickMessage:"💻 Executing sleep.sh... ERROR: Din hjärna tänker fortfarande på något pinsamt du sa 2014."},{brand:"GÖRAN & SÖNER UTHYRNING",headline:"HYR EN GUBBE SOM STÅR OCH PEKAR PÅ DITT BYGGPROJEKT",subtext:"Armarna i kors, skeptisk blick och mumlar 'Jaha, du tänkte göra sådär ja...'",cta:"BOKA GÖRAN",price:"350:-/tim",badge:"PROFFS-SKEPTIKER",icon:"👷",imageQuery:"construction worker carpenter",theme:"localbiz",layout:"split",clickMessage:"👷 Göran är på väg! Han har redan ringt och frågat om du verkligen mätt med vattenpass."},{brand:"VAPOR-KLIPP AB",headline:"FRISYRER SOM SER UT SOM OM DU GÅTT IGENOM EN HÄCK",subtext:"Vi klipper endast i motvind med slö kökssax. Kaffe på fat ingår ej.",cta:"BOKA SNEDKLIPP",price:"85:-",badge:"ESTETIK 1987",icon:"✂️",imageQuery:"barber haircut retro",theme:"vaporwave",layout:"split",clickMessage:"✂️ Din lugg är nu 4 centimeter kortare på vänster sida. Välkommen åter!"},{brand:"GULA SIDORNA PRIVAT",headline:"BORTSKÄNKES: 400 LITER HEMKOKT KRUSBÄRSKRÄM (FRÅGA EJ)",subtext:"Finns i källarförråd i Mjölby. Ta med egen spade och skyddsglasögon.",cta:"HÄMTA IDAG",badge:"RADANNONS",icon:"🫙",imageQuery:"glass jars jam cellar",theme:"classified",layout:"split",clickMessage:"🫙 Säljaren 'Kräm-Kent' svarar: 'Kom efter mörkrets inbrott, krämen har börjat bubbla.'"},{brand:"KOMMUNALA VÄDERVERKET",headline:"VI INFÖR HORISONTELLT SNÖBLASK MELLAN KL 07 OCH 18",subtext:"Motvind åt alla väderstreck samtidigt garanteras på samtliga cykelbanor.",cta:"KLAGA FORMELLT",badge:"VÄDERVARNING",icon:"🌨️",imageQuery:"snowstorm blizzard winter",theme:"myndighet",layout:"myndighet",clickMessage:"🌨️ Ditt klagomål har registrats. Som kompensation ökar vi motvinden med 4 m/s."},{brand:"RETRO-WEBBEN 1997",headline:"GRATTIS! DU ÄR BESÖKARE NR 000014! KLICKA FÖR ATT VINNA EN FAX!",subtext:"Ingen lottning! Bara 400 meter termopapper och ett modem som skriker!",cta:"HÄMTA VINST!!",badge:"VINNARE!!",icon:"📠",imageQuery:"fax machine telephone",theme:"retro90",layout:"win95",clickMessage:"📠 *BEEEEP-KRRR-SHHHH!* Din faxmaskin skickas med postdiligens från 1997."},{brand:"EXPRESS-BLADET",headline:"SÅ VET DU OM DIN KATT DRIVER ETT SKUGGBOLAG PÅ CYPERN",subtext:"Misstänkta kvitton på tonfisk • Sover 18 timmar för att dölja skatteplanering",cta:"SE HELA LISTAN",badge:"AVSLÖJANDE",icon:"🐱",imageQuery:"cat funny",theme:"tabloid",layout:"tabloid",clickMessage:"🐱 Misse (4 år) nekar till anklagelserna och har vält en blomkruka som protest."},{brand:"TV-SHOP KÖK",headline:"OSTHYVELN SOM SPELAR 'FINAL COUNTDOWN' VID VARJE DRAG!",subtext:"Slut på tysta frukostar! Nu med inbyggd rökmaskin och 140 dB siren!",cta:"KÖP 2 FÅ 1",price:"299:-",badge:"SOM PÅ TV!",icon:"🧀",imageQuery:"cheese yellow",theme:"tvshop",layout:"tvshop",clickMessage:"🧀 DA-DA-DA-DAA! Din frukostmacka har nu godkänts av Joey Tempest."},{brand:"377 TEGEL-TEXT",headline:"MAN I BORLÄNGE HITTADE DEN PERFEKTA PINNEN I SKOGEN",subtext:"'Den ser exakt ut som ett svärd' säger Stefan, 38. Visas på hembygdsgården.",cta:"SIDA 379 >>",badge:"INRIKES 377",icon:"🪵",imageQuery:"forest branch wood",theme:"texttv",layout:"texttv",clickMessage:"🪵 Sida 379: Pinnen har nu försäkrats för 1,2 miljoner kronor."},{brand:"NEON-BAGERIET 2088",headline:"LASERGRÄDDADE KANELBULLAR MED SMAK AV BLÅBÄR & ÅNGEST",subtext:"Pärlsocker av äkta kvantkristaller. Lyser i mörkret i upp till 14 timmar.",cta:"TELEPORTERA BULLE",price:"45:-",badge:"CYBER-FIKA",icon:"🥐",imageQuery:"cinnamon bun pastry",theme:"cyberneon",layout:"split",clickMessage:"🥐 *ZAP!* En självlysande kanelbulle har materialiserats i din ficka."},{brand:"SVENSKA SMÅPRATSJOUREN",headline:"FAST I HISSEN MED EN BEKANT? VI SMS:AR DIG VÄDERFAKTA!",subtext:"Få akuta repliker som 'Ja, det märks att det går mot ljusare/mörkare tider nu'.",cta:"TECKNA JOUR",price:"19:-/mån",badge:"AKUT HJÄLP",icon:"🛗",imageQuery:"elevator corridor",theme:"myndighet",layout:"myndighet",clickMessage:"🛗 SMS skickat: Säg 'Det är inte kylan, det är fukten som gör det' och titta i golvet!"},{brand:"BENGTSSONS MYSTERIER",headline:"VI HITTAR DET DÄR LOCKET TILL MATDOSAN SOM FÖRSVANN 2019",subtext:"Våra certifierade skåpdykare genomsöker den fjärde dimensionen under diskbänken.",cta:"STARTA SÖKNING",badge:"GARANTI*",icon:"🕵️",imageQuery:"detective magnifying glass",theme:"occult",layout:"split",clickMessage:"🕵️ Vi hittade 14 lock, men inget av dem passar någon burk som existerar på jorden."},{brand:"WIN95 DIALOG",headline:"VARNING: DU HAR INTE SAGT 'OJ DÅ' PÅ ÖVER 3 TIMMAR",subtext:"Enligt svensk lag måste du snart resa dig, slå dig på knäna och säga 'Nej, om man skulle...'",cta:"SLÅ PÅ KNÄNA",badge:"SVENSK STANDARD",icon:"🦵",imageQuery:"sofa living room",theme:"win95",layout:"win95",clickMessage:"🦵 *KLAPP PÅ KNÄNA!* 'Nämen... om man skulle ta och tänka på refrängen då!'"},{brand:"LÄNSMANNENS LOPPIS",headline:"SÄLJES: EN PALL MED BLANDADE SLADDAR FRÅN 2004",subtext:"SCART, Nokia-laddare, oklara adaptrar och en sladd som ingen vet vad den gör.",cta:"GE BUD",price:"50:-",badge:"BRA ATT HA!",icon:"🔌",imageQuery:"cables wires electronics",theme:"classified",layout:"split",clickMessage:"🔌 Du la vantarna på sladdlådan! Den får absolut inte slängas förrän 2045."},{brand:"AFTONCHOCKEN EXTRA",headline:"SUPER-GUIDEN: SÅ VÄLJER DU RÄTT KASSAKÖ PÅ ICA (DU KOMMER ÄNDÅ VÄLJA FEL)",subtext:"Forskare bekräftar: Tant med papperskuponger och pantkvitto uppstår ur tomma intet",cta:"SE FORSKNINGEN",badge:"VARDAGSCHOCK",icon:"🛒",imageQuery:"supermarket shopping cart",theme:"tabloid",layout:"tabloid",clickMessage:"🛒 Kassan bredvid rullar nu i 90 km/h medan din kassa väntar på prisfråga på kålrot."},{brand:"CHÂTEAU DE VÄRMLAND",headline:"ÅRGÅNGSLÄSK: CHAMPIS LAGRAT PÅ GAMMAL EPA-TRAKTOR",subtext:"Toner av granbarr, Wunderbaum Vanilj och nyslaget dike utanför Sunne.",cta:"RESERVERA FLASKA",price:"1 890:-",badge:"LIMITED EDITION",icon:"🍾",imageQuery:"champagne bottle vintage car",theme:"luxury",layout:"split",clickMessage:"🍾 Sommelieren rekommenderar att den serveras ljummen direkt ur handskfacket."},{brand:"VARNINGSCENTRALEN",headline:"OBS! NÅGON PÅ JOBBET HAR VÄRMT FISK I MIKRON IGEN!",subtext:"Utrym lunchrummet omedelbart! Nivå 4 av kokt torsk-aerosol har uppmätts.",cta:"AKTIVERA FLÄKT",badge:"KATASTROFLARM",icon:"🐟",imageQuery:"fish microwave kitchen",theme:"warning",layout:"split",clickMessage:"🐟 För sent! Doften har nu satt sig permanent i gardinerna fram till pensionen."},{brand:"TV-SHOP TRÄNING",headline:"FÅ MAGRUTOR MEDAN DU LIGGER I SOFFAN OCH ÄTER OSTBÅGAR!",subtext:"Vår patenterade Rut-Stämpel™ trycker in ett sexpack i huden på 3 sekunder!",cta:"KÖP STÄMPELN",price:"199:-",badge:"INGEN SVETT!",icon:"💪",imageQuery:"fitness dumbbell gym",theme:"tvshop",layout:"tvshop",clickMessage:"💪 *STÄMPEL!* Du ser nu ut som en nygräddad våffla på magen. Snyggt!"},{brand:"SYSADMIN KEBAB & DATA",headline:"VI LAGAR DIN SKRIVARE ELLER GER DIG EN FAMILJEPIZZA",subtext:"Ingen har någonsin lyckats laga en skrivare, så välj sås redan nu.",cta:"VÄLJ VITLÖKSSÅS",badge:"IT-GARANTI",icon:"🍕",imageQuery:"pizza food",theme:"terminal",layout:"split",clickMessage:"🍕 PC LOAD LETTER! Vi slängde skrivaren i containern, pizzan är klar om 10 minuter!"},{brand:"377 TEGEL-TEXT",headline:"NY LAG: FÖRBJUDET ATT SÄGA 'DET GÅR BRA' NÄR DET INTE GÅR BRA",subtext:"Miljontals svenskar riskerar böter om de inte erkänner att det är lite bökigt.",cta:"SIDA 380 >>",badge:"POLITIK 377",icon:"⚖️",imageQuery:"parliament courthouse",theme:"texttv",layout:"texttv",clickMessage:"⚖️ Sida 380: Polisen tillåter fortfarande 'Jodå, man ska väl inte klaga' i undantagsfall."},{brand:"ASTRAL-TRAFIKEN",headline:"ERSÄTTNINGSBUSS FÖR LINJE 404 AVGÅR FRÅN DEN ASTRALA DIMENSIONEN",subtext:"Stannar vid hållplatsen bakom ditt lokala pizzeria-plank kl 25:70.",cta:"SE TIDTABELL",badge:"FÖRSENAD",icon:"🚌",imageQuery:"bus night neon",theme:"vaporwave",layout:"split",clickMessage:"🚌 Bussen körde precis förbi dig i 4:e dimensionen utan att stanna."},{brand:"KURTS ALIBI-BYRÅ",headline:"VI RINGER DIG MITT UNDER TRÅKIGA MÖTEN OCH SKRIKER 'DET BRINNER I KANOTEN!'",subtext:"100% trovärdig ursäkt för att lämna vilket utvecklingssamtal som helst.",cta:"BESTÄLL NÖDSAMTAL",price:"79:-",badge:"DISKRET SERVICE",icon:"🛶",imageQuery:"canoe lake paddle",theme:"localbiz",layout:"split",clickMessage:"🛶 *RING RING!* 'HALLÅ?! DIN KANOT DRAR IVÄG MOT DANMARK, DU MÅSTE KOMMA NU!!'"},{brand:"RETRO-WEBBEN 1999",headline:"LADDA NER FLER MEGABYTE RAM-MINNE DIREKT FRÅN INTERNET!",subtext:"100% äkta .exe-fil! Gör din Pentium II snabbare än grannens Volvo 740!",cta:"DOWNLOAD.EXE",badge:"FREEWARE!!",icon:"💿",imageQuery:"microchip circuit board",theme:"retro90",layout:"win95",clickMessage:"💿 Grattis! Du har nu 14 nya verktygsfält i Internet Explorer och en dansande älg på skrivbordet."},{brand:"CYBER-SYNTH FRISÖR",headline:"HOCKEYFRILLA MED INBYGGD SUBWOOFER OCH BLINKERS",subtext:"Kort där fram, fest där bak, och 800 Watt baslåda i nacken. Besiktigad.",cta:"INSTALLERA FRILLA",price:"1 200:-",badge:"EPA-CERTIFIERAD",icon:"🎸",imageQuery:"loudspeaker concert neon",theme:"cyberneon",layout:"split",clickMessage:"🎸 *DUNK-DUNK-DUNK!* Dina polisonger spelar nu eurodance så plomberna skakar!"},{brand:"STATENS FIKA-INSPEKTION",headline:"SISTA BITEN AV TÅRTAN HAR LEGAT KVAR PÅ FATET I 4 DYGN",subtext:"Den är nu halverad 16 gånger och mäter 0,3 millimeter. Ingen vågar ta den.",cta:"TILLKALLA INSATS",badge:"KRISLÄGE",icon:"🍰",imageQuery:"cake dessert plate",theme:"myndighet",layout:"myndighet",clickMessage:"🍰 Nationella insatsstyrkan har delat tårtbiten på mitten igen. Nu är den på atomnivå."},{brand:"AFTONCHOCKEN EXTRA",headline:"SKRÄCKEN I ULLARED: MAN GICK IN FÖR ATT KÖPA EN (1) SAK – GICK UT MED EN!",subtext:"Säkerhetsvakterna i chock: 'Vi trodde det var fysiskt omöjligt utan stekpanna och 40 par strumpor'",cta:"SE ÖVERVAKNINGSBILD",badge:"HISTORISKT",icon:"🛍️",imageQuery:"department store shopping",theme:"tabloid",layout:"tabloid",clickMessage:"🛍️ Rättelse: Det visade sig att han råkat få med sig 3 paket fryspåsar och en trädgårdstomte ändå."},{brand:"OCKULTA HEMFIXARNA",headline:"KNARRAR GOLVET? DET ÄR INTE FUKT – DET ÄR FARFAR SOM VILL HA SNUS",subtext:"Vi driver ut gnälliga husspöken med hjälp av skruvdragare och kaffe.",cta:"BOKA EXORCISM",price:"666:-",badge:"RUT-AVDRAG*",icon:"👻",imageQuery:"haunted house spooky stairs",theme:"occult",layout:"split",clickMessage:"👻 Spöket har fått en dosa Ettan Lös och har lovat att sluta tända lampan i hallen."},{brand:"TV-SHOP VINTER",headline:"TRÖTT PÅ ATT SKRAPA VINDRUTAN? BYT UT BILEN MOT EN HELIKOPTER!",subtext:"Eller köp vår El-Eldkastare i fickformat! Smälter isen (och motorhuven) på 1 sekund!",cta:"BESTÄLL IDAG",price:"399:-",badge:"VINTER-KLIPP!",icon:"🔥",imageQuery:"car snow winter ice",theme:"tvshop",layout:"tvshop",clickMessage:"🔥 Ingen mer is på rutan! (Ingen mer ruta heller, så ta på dig skidglasögon!)."},{brand:"377 TEGEL-TEXT",headline:"KOMMUNEN BYGGER RONDELL INUTI EN ANNAN RONDELL",subtext:"'Vi hade 400 ton kantsten över', förklarar trafiknämnden i Skövde.",cta:"SIDA 381 >>",badge:"TRAFIK 377",icon:"🔄",imageQuery:"roundabout road traffic",theme:"texttv",layout:"texttv",clickMessage:"🔄 Sida 381: En lokal bilist har nu snurrat i den inre rondellen sedan i torsdags."},{brand:"L’ORÉAL DE SÖDERTÄLJE",headline:"SCHAMPO MED EXTRA GRUS – FÖR DIG SOM SAKNAR KÄNSLAN AV VÅRENS CYKELBANOR",subtext:"Ger håret den där autentiska 'sandpapper och vägsalt'-volymen.",cta:"KÖP FLASKA",price:"890:-",badge:"HAUTE COUTURE",icon:"🪨",imageQuery:"gravel stones road",theme:"luxury",layout:"split",clickMessage:"🪨 För att du är värd lite rullgrus i hårbotten!"},{brand:"SVENSKA KÖLAPP-MUSEET",headline:"VI KÖPER DIN GAMLA KÖLAPP FRÅN SYSTEMBOLAGET 1998",subtext:"Särskilt intresse för nummer 094 med tummade hörn och kaffefläck.",cta:"VÄRDERA LAPP",badge:"ANTIKRUNDAN",icon:"🎟️",imageQuery:"ticket paper vintage",theme:"classified",layout:"split",clickMessage:"🎟️ Vår expert bjuder 14 kronor och en halväten Piggelin för din kölapp!"},{brand:"FÖRSÄKRINGSKASSAN NIGHTSHIFT",headline:"HAR DU DRÖMT ATT DU JOBBADE INATT? GLÖM INTE ATT FÖRMODA SKATT!",subtext:"Obeskattad REM-sömn räknas som grovt skattebrott enligt §12 Sömnlagen.",cta:"DEKLARERA DRÖM",badge:"SKATTEVERKET",icon:"💤",imageQuery:"sleeping bed pillow",theme:"myndighet",layout:"myndighet",clickMessage:"💤 Du är nu skyldig staten 3 timmars mardröm om ett matteprov du inte pluggat till."},{brand:"WIN95 SYSTEMVARNING",headline:"DIN KAFFEKOPP ÄR SNART TOM (KRITISKT SYSTEMFEL 0x00F1KA)",subtext:"Om du inte fyller på bryggkaffe inom 4 minuter kommer du svara 'Mjo' på allt.",cta:"BRYGG NYTT",badge:"VARNING",icon:"☕",imageQuery:"coffee cup espresso",theme:"win95",layout:"win95",clickMessage:"☕ Kaffebryggaren gurglar nu med 110 decibel i personalrummet."},{brand:"TV-SHOP HUSHÅLL",headline:"TRÖTT PÅ ATT VIKA TVÄTT? SKJUT IN DEN I GARDEROBEN MED TVÄTT-KANONEN™!",subtext:"Komprimerar 12 kilo strumpor och påslakan till en kompakt kub i överljudsfart!",cta:"BESTÄLL KANON",price:"499:-",badge:"TV-EXKLUSIV!",icon:"🧦",imageQuery:"cannon artillery",theme:"tvshop",layout:"tvshop",clickMessage:"🧦 *BOOOOM!* Garderobsdörren flög in till grannen, men tvätten är inne!"},{brand:"AFTONCHOCKEN EXTRA",headline:"DRAMAT PÅ BUSSEN: NÅGON SATTE SIG BREDVID TROTS LEDIGA SÄTEN",subtext:"Krisgrupp inkallad till linje 4 • 'Jag var tvungen att titta ut genom fönstret i 20 minuter'",cta:"LÄS VITTNESMÅLET",badge:"BUSS-CHOCK",icon:"💺",imageQuery:"bus seats public transport",theme:"tabloid",layout:"tabloid",clickMessage:"💺 Passageraren höll dessutom sin ryggsäck i knät utan att säga ett ord. Rysare!"},{brand:"377 TEGEL-TEXT",headline:"REKORDMÅNGA SVENSKAR SA 'HOPPSAN' NÄR DE GICK IN I STOLPE",subtext:"84% bad även stolpen om ursäkt innan de skyndade vidare, visar ny statistik.",cta:"SIDA 382 >>",badge:"SAMHÄLLE 377",icon:"🚧",imageQuery:"street lamp post city",theme:"texttv",layout:"texttv",clickMessage:"🚧 Sida 382: Stolpen har accepterat ursäkten och hälsar hem."},{brand:"CYBER-KORV 2099",headline:"HOLOGRAM-KORV MED BRÖD – 0 KALORIER, 100% NEON-SENAP",subtext:"Smakar exakt som en Statoil-korv kl 03:15 fast helt gjord av fotoner.",cta:"LADDA NER KORV",price:"25:-",badge:"3D-PRINTAD",icon:"🌭",imageQuery:"hotdog street food",theme:"cyberneon",layout:"split",clickMessage:"🌭 Du klickade på stark senap! En laserdusch av senap har träffat din jacka."},{brand:"SPÖK-RÖRMOKAREN",headline:"KLUCKAR DET I AVLOPPET? DET ÄR EN GAMMAL VIKING SOM BOR I GOLVBRUNNEN",subtext:"Vi mutar Ragnar Lodbrok med mjöd och rensband så vattnet rinner undan igen.",cta:"RING JOUREN",price:"550:-",badge:"24/7 AKUT",icon:"🪠",imageQuery:"viking helmet ship",theme:"occult",layout:"split",clickMessage:"🪠 Ragnar har flyttat till grannens dusch istället. Fritt blås i rören!"},{brand:"BENGTS PLASTPÅSE-BANK",headline:"INVESTERAR DU I PLASTPÅSAR UNDER DISKBÄNKEN? VI GER 8% RÄNTA!",subtext:"Sätt in en stor papperskasse full med knölade konsumpåsar från 2011.",cta:"ÖPPNA PÅSKONTO",badge:"TRYGG SPARFORM",icon:"🛍️",imageQuery:"plastic bags shopping",theme:"localbiz",layout:"split",clickMessage:"🛍️ Din portfölj av skrynkliga Coop-kassar har just stigit med 400% på börsen!"},{brand:"TERMINAL HOROSKOP",headline:"SUDO APT-GET INSTALL FRAMGÅNG --FORCE-YES",subtext:"Ditt stjärntecken (Kompileringsfel) visar att du kommer glömma ett semikolon idag.",cta:"GIT PUSH --FORCE",badge:"DEVOPS-SPÅDOM",icon:"🖥️",imageQuery:"code terminal screen",theme:"terminal",layout:"split",clickMessage:"🖥️ Fatal error: Fredags-deploy påbörjad kl 16:59. Lycka till i helgen!"},{brand:"VARNING: GRANNLARM",headline:"DIN GRANNE STÅR I TRAPPHUSET OCH VILL PRATA OM SOPRUMMET!",subtext:"Kikhåls-sensorn har detekterat tofflor och en dömande blick utanför din dörr.",cta:"SLÄCK ALLA LAMPOR",badge:"FARA NIVÅ RÖD",icon:"👀",imageQuery:"staircase hallway door",theme:"warning",layout:"split",clickMessage:"👀 *Schhh!* Du ligger nu helt blickstilla på hallmattan tills fotstegen försvinner."},{brand:"VAPOR-TANDLÄKAREN",headline:"BYT UT DINA VISDOMSTÄNDER MOT DISCOKULOR I KROM",subtext:"Varje gång du gäspar spelas ett saxofonsolo från 1986 i hela rummet.",cta:"BOKA BORRNING",price:"3 400:-",badge:"AESTHETIC SMILE",icon:"🦷",imageQuery:"disco ball mirror",theme:"vaporwave",layout:"split",clickMessage:"🦷 *Careless Whisper på saxofon ekar nu ur din mun varje gång du ler!*"},{brand:"RETRO-WEBBEN 1996",headline:"BESÖK MIN HEMSIDA OM MINA 14 MARSVIN! [UNDER CONSTRUCTION]",subtext:"Gästboken är öppen!! Lämna en hälsning eller bli bannad från mitt Webring!",cta:"SKRIV I GÄSTBOK",badge:"NETSCAPE 3.0",icon:"🐹",imageQuery:"guinea pig rodent",theme:"retro90",layout:"win95",clickMessage:"🐹 Tack för ditt inlägg i gästboken! Marsvinet Pelle hälsar med en animerad GIF."},{brand:"PARFUM DE SLUSSEN",headline:"NATTBUSS N°5 – EXKLUSIV HERRDOFT MED TONER AV KEBAB & BLÖT ULLKAPPA",subtext:"Fångar den magiska känslan av att missa sista bytet i regnet kl 02:47.",cta:"BESTÄLL PROV",price:"1 650:-",badge:"EAU DE TOILETTE",icon:"🌧️",imageQuery:"rain night city street",theme:"luxury",layout:"split",clickMessage:"🌧️ En sofistikerad pust av vitlökssås och våt asfalt sveper genom rummet."},{brand:"RADANNONS TORGET",headline:"BYTES: EN HALV BURK INLAGD SILL MOT EN FUNGERANDE HELIKOPTER",subtext:"Sillen är av årgång 2021 (Löksill). Helikoptern bör vara nybesiktigad.",cta:"KONTAKTA RUNAR",badge:"BYTESMARKNAD",icon:"🚁",imageQuery:"helicopter aircraft",theme:"classified",layout:"split",clickMessage:"🚁 Runar svarar: 'Är det du som har helikoptern? Sillen står redo i kylskåpet!'"},{brand:"STATENS PÅSLAKAN-NÄMND",headline:"HAR DITT TÄCKE KORVAT IHOP SIG SOM EN BOLL LÄNGST NER I PÅSLAKANET?",subtext:"Kryp inte in i påslakanet ensam! Vi skickar en certifierad hörnskakare.",cta:"BEGÄR UTRYCKNING",badge:"SAMHÄLLSSKYDD",icon:"🛏️",imageQuery:"bed sheets bedroom",theme:"myndighet",layout:"myndighet",clickMessage:"🛏️ Varning: Handläggaren fastnade också inne i påslakanet. Skicka fler handläggare!"},{brand:"TV-SHOP FRITID",headline:"SVAMP-RADARN 5000™ – HITTAR KANTARELLER PÅ 8 MILS AVSTÅND!",subtext:"Piper även vid gulmålat grus, postbilar och borttappade golfbollar!",cta:"KÖP RADARN",price:"599:-",badge:"SKOGENS KUNG!",icon:"🍄",imageQuery:"mushroom chanterelle forest",theme:"tvshop",layout:"tvshop",clickMessage:"🍄 *BEEP BEEP!* Radarn har lokaliserat en kantarell (eller en gul legobit) i Enköping!"},{brand:"AFTONCHOCKEN EXTRA",headline:"CHOCK-TESTET: ÄR DU EN 'VI HÖRS'-PERSON SOM ALDRIG HÖR AV SIG?",subtext:"9 av 10 svenskar säger 'Vi måste ta en lunch snart!' och går sedan under jorden i 6 år",cta:"GÖR TESTET HÄR",badge:"RELATIONER",icon:"📱",imageQuery:"smartphone texting",theme:"tabloid",layout:"tabloid",clickMessage:"📱 Resultat: Du har 17 utlovade luncher från 2018 som väntar på dig!"},{brand:"377 TEGEL-TEXT",headline:"KVINNA LYCKADES ÖPPNA PLASTFÖRPACKNING UTAN SAX ELLER VÅLD",subtext:"Förpackningsindustrin i krismöte: 'Det här skulle inte vara tekniskt möjligt'",cta:"SIDA 383 >>",badge:"VETENSKAP 377",icon:"✂️",imageQuery:"scissors plastic package",theme:"texttv",layout:"texttv",clickMessage:"✂️ Sida 383: Vi har nu förstärkt alla skinkpaket med kevlar och superlim."},{brand:"LOKALA FIKA-KARTELLET",headline:"SMUGGEL-SEMLOR SÄLJES I GRÄNDEN BAKOM JÄRNHANDELN",subtext:"Äkta mandelmassa, 4 deciliter grädde, helt utan säsongstillstånd. Säg kodord 'Hetvägg'.",cta:"VISKA KODORD",price:"60:-",badge:"SVARTABÖRSEN",icon:"🧁",imageQuery:"cream bun bakery",theme:"localbiz",layout:"split",clickMessage:"🧁 *Pssst!* En man i trenchcoat räckte dig precis en kartong med florsocker på."}];let Y=[],et=null,$i=null,us=!1,Do=!1;const Oo=new Map;function Fg(n){const e=n.split(" ")[0]||"random",t=Math.floor(Math.random()*99999);return`https://loremflickr.com/640/260/${encodeURIComponent(e)}?lock=${t}`}async function Ug(n){var t,i,s;const e=Oo.get(n);if(e&&e.length>0)return e[Math.floor(Math.random()*e.length)];try{const r=`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=filetype:bitmap+${encodeURIComponent(n)}&gsrlimit=15&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`,o=await fetch(r);if(o.ok){const a=await o.json(),l=(t=a==null?void 0:a.query)==null?void 0:t.pages;if(l){const c=[];for(const u of Object.keys(l)){const d=(s=(i=l[u])==null?void 0:i.imageinfo)==null?void 0:s[0],h=(d==null?void 0:d.thumburl)||(d==null?void 0:d.url);h&&typeof h=="string"&&!h.endsWith(".svg")&&!h.endsWith(".tif")&&c.push(h)}if(c.length>0)return Oo.set(n,c),c[Math.floor(Math.random()*c.length)]}}}catch{}return Fg(n)}function Bg(){if(Y.length===0){Y=[...xg];for(let n=Y.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[Y[n],Y[e]]=[Y[e],Y[n]]}et&&Y[0]===et&&Y.length>1&&([Y[0],Y[1]]=[Y[1],Y[0]])}return et=Y.shift(),et}function $g(n,e){const t=n.badge?`<span class="ad-badge">${n.badge}</span>`:"",i=n.price?`<span class="ad-price-tag">${n.price}</span>`:"",s=`
        <div class="ad-photo-thumb" style="background-image: url('${e}')">
            <span class="ad-thumb-emoji">${n.icon}</span>
            ${i}
        </div>
    `;return n.layout==="win95"?`
            <div class="ad-win95-frame">
                <div class="ad-win95-titlebar">
                    <span class="ad-win95-title">${n.icon} ${n.brand}.EXE</span>
                    <div class="ad-win95-controls">
                        <button type="button" class="ad-next-btn" title="Nästa annons">↻</button>
                        <button type="button" class="ad-close-btn" title="Stäng">✕</button>
                    </div>
                </div>
                <div class="ad-win95-body">
                    ${s}
                    <div class="ad-win95-text">
                        <div class="ad-headline">${n.headline}</div>
                        <div class="ad-subtext">${n.subtext}</div>
                    </div>
                    <button type="button" class="ad-cta-btn">${n.cta}</button>
                </div>
            </div>
        `:n.layout==="texttv"?`
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-texttv-frame">
                <div class="ad-texttv-header">
                    <span class="ttv-page">P377</span>
                    <span class="ttv-brand">${n.brand}</span>
                    <span class="ttv-clock">${new Date().toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}</span>
                </div>
                <div class="ad-texttv-body">
                    ${s}
                    <div class="ad-texttv-main">
                        <div class="ad-headline">${n.headline}</div>
                        <div class="ad-subtext">${n.subtext}</div>
                    </div>
                    <button type="button" class="ad-cta-btn">${n.cta}</button>
                </div>
            </div>
        `:n.layout==="tabloid"?`
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-tabloid-frame">
                <div class="ad-tabloid-sidebar">
                    <span class="ad-tabloid-brand">${n.brand}</span>
                    ${t}
                </div>
                ${s}
                <div class="ad-tabloid-main">
                    <div class="ad-headline">${n.headline}</div>
                    <div class="ad-subtext">${n.subtext}</div>
                </div>
                <div class="ad-tabloid-action">
                    <button type="button" class="ad-cta-btn">${n.cta}</button>
                </div>
            </div>
        `:n.layout==="tvshop"?`
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-tvshop-frame">
                ${s}
                <div class="ad-tvshop-burst">
                    <span class="burst-icon">${n.icon}</span>
                    ${i||'<span class="ad-price-tag">REA!</span>'}
                </div>
                <div class="ad-tvshop-main">
                    <div class="ad-brand-row">
                        <span class="ad-brand">${n.brand}</span>
                        ${t}
                    </div>
                    <div class="ad-headline">${n.headline}</div>
                    <div class="ad-subtext">${n.subtext}</div>
                </div>
                <button type="button" class="ad-cta-btn">${n.cta}</button>
            </div>
        `:n.layout==="myndighet"?`
            <div class="ad-controls-floating">
                <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
                <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
            </div>
            <div class="ad-myndighet-frame">
                ${s}
                <div class="ad-myndighet-main">
                    <div class="ad-brand-row">
                        <span class="ad-brand">${n.brand}</span>
                        ${t}
                    </div>
                    <div class="ad-headline">${n.headline}</div>
                    <div class="ad-subtext">${n.subtext}</div>
                </div>
                <button type="button" class="ad-cta-btn">${n.cta}</button>
            </div>
        `:`
        <div class="ad-controls-floating">
            <button type="button" class="ad-next-btn" title="Byt reklam">↻</button>
            <button type="button" class="ad-close-btn" title="Stäng reklam">✕</button>
        </div>
        <div class="ad-split-frame">
            ${s}
            <div class="ad-split-main">
                <div class="ad-brand-row">
                    <span class="ad-brand">${n.brand}</span>
                    ${t}
                </div>
                <div class="ad-headline">${n.headline}</div>
                <div class="ad-subtext">${n.subtext}</div>
            </div>
            <div class="ad-split-cta">
                <button type="button" class="ad-cta-btn">${n.cta}</button>
            </div>
        </div>
    `}const Mo=["🚫 Du kan inte stänga reklamen! Vi bytte ut den mot en ännu konstigare istället.","🛡️ AdBlocker avvisad av Kommunala Mysterieverket. Här får du en ny annons!","💸 För att stänga reklamen krävs Tegel Premium Gold Plus (4 999 kr/halvtimme).","🔄 Reklam stängd! Laddar omedelbart in ersättningsreklam..."];function Mn(n=!0){const e=document.querySelectorAll(".ad-space");if(e.length===0)return;const t=Bg();e.forEach(i=>{n&&i.innerHTML.trim()!==""?(i.classList.add("ad-switching"),setTimeout(()=>{xo(i,t),i.classList.remove("ad-switching")},180)):xo(i,t)})}function xo(n,e){const t=`https://picsum.photos/seed/${encodeURIComponent(e.brand+Math.floor(Math.random()*1e3))}/800/300`;n.className=`ad-space theme-${e.theme} layout-${e.layout}`,n.innerHTML=`
        <div class="ad-bg-image" style="background-image: url('${t}')"></div>
        <div class="ad-bg-overlay"></div>
        <div class="ad-bg-pattern"></div>
        <div class="ad-inner-wrapper">
            ${$g(e,t)}
        </div>
        <div class="ad-progress-bar"></div>
    `,Ug(e.imageQuery).then(i=>{const s=new Image;s.onload=()=>{if(et!==e)return;const r=n.querySelector(".ad-bg-image"),o=n.querySelector(".ad-photo-thumb");r&&(r.style.backgroundImage=`url('${i}')`),o&&(o.style.backgroundImage=`url('${i}')`)},s.src=i})}function Vg(n){if(Do)return;Do=!0,Mn(!1),document.querySelectorAll(".ad-space").forEach(t=>{t.addEventListener("mouseenter",()=>{us=!0,t.classList.add("ad-paused")}),t.addEventListener("mouseleave",()=>{us=!1,t.classList.remove("ad-paused")}),t.addEventListener("click",i=>{const s=i.target;if(s.closest(".ad-next-btn")){i.stopPropagation(),Mn(!0),Vi();return}if(s.closest(".ad-close-btn")){i.stopPropagation();const a=Mo[Math.floor(Math.random()*Mo.length)];n(a,"info"),Mn(!0),Vi();return}const r=document.createElement("span");r.classList.add("ripple"),t.appendChild(r);const o=t.getBoundingClientRect();r.style.left=`${i.clientX-o.left}px`,r.style.top=`${i.clientY-o.top}px`,setTimeout(()=>r.remove(),600),et&&n(et.clickMessage,"info")})}),Vi()}function Vi(){$i!==null&&window.clearInterval($i),$i=window.setInterval(()=>{us||Mn(!0)},9e3)}Dg();const nc=_c({immediate:!0,onNeedRefresh(){L("New version available! Refreshing...","info"),setTimeout(()=>{nc(!0)},1500)},onOfflineReady(){L("App ready to work offline!","info")}});setInterval(()=>{nc(!0)},3600*1e3);const W=document.querySelector("#app"),mr=document.createElement("div");mr.className="toast-container";document.body.appendChild(mr);function Fo(){const n=document.getElementById("splash-screen");n&&(n.classList.add("fade-out"),setTimeout(()=>n.remove(),1e3))}const ic=new URLSearchParams(window.location.search),Hg=ic.get("mode"),hs=ic.get("oobCode");let ie=new Date().getFullYear(),j=new Date().getMonth(),he=[],P=Hg==="resetPassword"&&hs?"resetPassword":"calendar";function L(n,e="info"){const t=document.createElement("div");t.className=`toast ${e}`,t.innerText=n,mr.appendChild(t),setTimeout(()=>{t.classList.add("fade-out"),setTimeout(()=>t.remove(),500)},3500)}Vg(L);const D={mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',eyeOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19"/><path d="m1 1 22 22"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>',key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M17 6l3 3M15 8l2 2"/></svg>',inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>'};function ne(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function ai(n){const e=(n==null?void 0:n.code)||"";return{"auth/invalid-email":"That email address looks invalid.","auth/user-not-found":"Wrong email or password.","auth/wrong-password":"Wrong email or password.","auth/invalid-credential":"Wrong email or password.","auth/missing-password":"Please enter your password.","auth/too-many-requests":"Too many attempts. Take a breather and try again later.","auth/network-request-failed":"Network error. Check your connection (or start the emulator locally).","auth/expired-action-code":"This reset link has expired. Request a new one.","auth/invalid-action-code":"This reset link is invalid or already used.","auth/weak-password":"Password is too weak. Use at least 6 characters."}[e]||(n==null?void 0:n.message)||"Something went wrong."}let fs=localStorage.getItem("tegel-theme");fs==="vcr"&&(fs="win95");let xt=fs||"synth";function gr(n){xt=n;try{localStorage.setItem("tegel-theme",n)}catch{}n==="win95"?(document.documentElement.setAttribute("data-theme","win95"),document.body.classList.add("theme-win95"),document.body.classList.remove("theme-vcr")):(document.documentElement.removeAttribute("data-theme"),document.body.classList.remove("theme-win95"),document.body.classList.remove("theme-vcr")),Kg()}gr(xt);function Kg(){const n=xt==="win95",e=n?"⚡ SYNTH":"🪟 WIN '95",t=n?"Switch to Synthwave Theme":"Switch to Windows 95 Theme";document.querySelectorAll(".theme-toggle-btn").forEach(i=>{i.innerHTML=`<span class="theme-icon">${n?"⚡":"🪟"}</span><span class="theme-label">${e}</span>`,i.title=t,i.setAttribute("aria-label",t),i.classList.toggle("active-win95",n)})}function li(){gr(xt==="synth"?"win95":"synth")}function sc(){const n=xt==="win95",e=n?"⚡ SYNTH":"🪟 WIN '95",t=n?"Switch to Synthwave Theme":"Switch to Windows 95 Theme";return`
        <button type="button" class="theme-toggle-btn ${n?"active-win95":""}" title="${t}" aria-label="${t}">
            <span class="theme-icon">${n?"⚡":"🪟"}</span>
            <span class="theme-label">${e}</span>
        </button>
    `}function rc(){const n=document.getElementById("win95-clock");if(!n)return;const e=new Date;n.textContent=e.toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"})}setInterval(rc,1e3);setTimeout(rc,50);function Gg(){var i,s,r,o,a,l,c;const n=document.getElementById("win95-start-btn"),e=document.getElementById("win95-start-menu");n==null||n.addEventListener("click",u=>{u.stopPropagation(),e==null||e.classList.toggle("open"),n.classList.toggle("active")}),document.addEventListener("click",u=>{const d=u.target;!d.closest("#win95-start-menu")&&!d.closest("#win95-start-btn")&&(e==null||e.classList.remove("open"),n==null||n.classList.remove("active"))});const t=()=>{e==null||e.classList.remove("open"),n==null||n.classList.remove("active")};(i=document.getElementById("win95-start-cal"))==null||i.addEventListener("click",()=>{t(),G.currentUser?(P="calendar",Te()):(P="calendar",We())}),(s=document.getElementById("win95-start-year"))==null||s.addEventListener("click",()=>{t(),P="yearOverview",yr()}),(r=document.getElementById("win95-start-games"))==null||r.addEventListener("click",()=>{t(),P="games",fn()}),(o=document.getElementById("win95-start-board"))==null||o.addEventListener("click",()=>{var u;t(),P="board",new tc(W),(u=document.getElementById("back-to-calendar"))==null||u.addEventListener("click",()=>{P="calendar",Te()})}),(a=document.getElementById("win95-start-theme"))==null||a.addEventListener("click",()=>{t(),li()}),(l=document.getElementById("win95-tray-theme"))==null||l.addEventListener("click",()=>{li()}),(c=document.getElementById("win95-start-logout"))==null||c.addEventListener("click",()=>{t(),G.currentUser?(Ps(G),L("Logged out")):We()})}gr(xt);setTimeout(Gg,50);function cn(n){return`
        <div class="auth-topbar">
            ${n.includes('class="auth-logo"')?'<div class="auth-dialog-title">Logon to Tegel</div>':'<div class="cal-logo">TEGEL</div>'}
            <div class="auth-topbar-actions">
                ${sc()}
                <button id="games-btn" class="games-link">Games</button>
            </div>
        </div>
        <div class="auth-card">
            <div class="auth-card-glow"></div>
            ${n}
        </div>
    `}function dn(n){return`
        <label class="auth-field ${n.toggle?"has-toggle":""}" for="${n.id}">
            <span class="auth-field-icon">${n.icon}</span>
            <input type="${n.type}" id="${n.id}" placeholder=" " autocomplete="${n.autocomplete}" ${n.disabled?"disabled":""} />
            <span class="auth-field-label">${n.label}</span>
            ${n.toggle?`<button type="button" class="auth-field-toggle" data-target="${n.id}" aria-label="Show password">${D.eye}</button>`:""}
        </label>
    `}function un(){var n;document.querySelectorAll(".theme-toggle-btn").forEach(e=>{e.addEventListener("click",li)}),(n=document.getElementById("games-btn"))==null||n.addEventListener("click",()=>{P="games",fn()}),document.querySelectorAll(".auth-field-toggle").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=document.getElementById(e.dataset.target),s=i.type==="password";i.type=s?"text":"password",e.innerHTML=s?D.eyeOff:D.eye,e.classList.toggle("active",s)})})}function kt(n,e,t){n.disabled=e,n.classList.toggle("loading",e),n.innerHTML=e?`<span class="spinner"></span><span>${t}</span>`:`<span>${t}</span>${D.arrow}`}function He(n){n&&(n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake"))}function We(){var t;W.classList.add("auth-mode"),W.innerHTML=cn(`
        <div class="auth-header">
            <div class="auth-logo" data-text="TEGEL">TEGEL</div>
            <p class="auth-subtitle">// ACCESS TERMINAL</p>
        </div>
        <form class="auth-form" id="login-form" novalidate>
            ${dn({id:"email",type:"email",label:"Email",icon:D.mail,autocomplete:"email"})}
            ${dn({id:"password",type:"password",label:"Password",icon:D.lock,autocomplete:"current-password",toggle:!0})}
            <div class="auth-row">
                <button id="forgot-password-btn" class="link-btn" type="button">Forgot password?</button>
            </div>
            <button id="login-btn" class="btn-neon" type="submit"><span>Login</span>${D.arrow}</button>
        </form>
    `),un(),(t=document.getElementById("forgot-password-btn"))==null||t.addEventListener("click",()=>{var i;P="forgotPassword",Si((i=document.getElementById("email"))==null?void 0:i.value)});const n=document.getElementById("login-form"),e=document.getElementById("login-btn");n.addEventListener("submit",async i=>{i.preventDefault();const s=document.getElementById("email").value.trim(),r=document.getElementById("password").value;if(!s||!r){He(document.querySelector(".auth-card")),L("Please enter email and password.","error");return}try{kt(e,!0,"Connecting..."),await eh(G,s,r),L("Logged in successfully!")}catch(o){kt(e,!1,"Login"),He(document.querySelector(".auth-card")),L(ai(o),"error")}})}function Si(n=""){var i,s;W.classList.add("auth-mode"),W.innerHTML=cn(`
        <div class="auth-header">
            <div class="auth-badge">${D.key}</div>
            <h2 class="auth-title">Forgot password</h2>
            <p class="auth-description">No worries. Enter your email and we'll beam you a reset link.</p>
        </div>
        <form class="auth-form" id="forgot-form" novalidate>
            ${dn({id:"reset-email",type:"email",label:"Email",icon:D.mail,autocomplete:"email"})}
            <button id="send-reset-btn" class="btn-neon" type="submit"><span>Send reset link</span>${D.arrow}</button>
            <button id="back-to-login-btn" class="link-btn back" type="button">${D.back}<span>Back to login</span></button>
        </form>
    `),un();const e=document.getElementById("reset-email");e.value=n,e.focus(),(i=document.getElementById("back-to-login-btn"))==null||i.addEventListener("click",()=>{P="calendar",We()});const t=document.getElementById("send-reset-btn");(s=document.getElementById("forgot-form"))==null||s.addEventListener("submit",async r=>{r.preventDefault();const o=e.value.trim();if(!o){He(document.querySelector(".auth-card")),L("Please enter your email.","error");return}try{kt(t,!0,"Sending..."),await Qu(G,o,{url:window.location.origin}),Wg(o)}catch(a){kt(t,!1,"Send reset link"),He(document.querySelector(".auth-card")),L(ai(a),"error")}})}function Wg(n){var e,t;W.innerHTML=cn(`
        <div class="auth-header success">
            <div class="auth-badge success pulse">${D.inbox}</div>
            <h2 class="auth-title">Check your inbox</h2>
            <p class="auth-description">
                If an account exists for <strong class="auth-email">${ne(n)}</strong>,
                a reset link is on its way. Don't forget to check spam.
            </p>
        </div>
        <div class="auth-form">
            <button id="back-to-login-btn" class="btn-neon" type="button"><span>Back to login</span>${D.arrow}</button>
            <button id="resend-btn" class="link-btn" type="button">Didn't get it? Try again</button>
        </div>
    `),un(),(e=document.getElementById("back-to-login-btn"))==null||e.addEventListener("click",()=>{P="calendar",We()}),(t=document.getElementById("resend-btn"))==null||t.addEventListener("click",()=>{Si(n)})}function jg(n){let e=0;return n.length>=6&&e++,n.length>=10&&e++,/[A-Z]/.test(n)&&/[a-z]/.test(n)&&e++,/\d/.test(n)&&/[^A-Za-z0-9]/.test(n)&&e++,e}function qg(n){var l,c;W.classList.add("auth-mode"),W.innerHTML=cn(`
        <div class="auth-header">
            <div class="auth-badge" id="reset-badge">${D.lock}</div>
            <h2 class="auth-title">New password</h2>
            <p class="auth-description" id="reset-status"><span class="spinner small"></span> Verifying reset link...</p>
        </div>
        <form class="auth-form" id="reset-form" novalidate>
            ${dn({id:"new-password",type:"password",label:"New password",icon:D.lock,autocomplete:"new-password",disabled:!0,toggle:!0})}
            <div class="strength-meter" id="strength-meter" data-score="0">
                <span></span><span></span><span></span><span></span>
            </div>
            ${dn({id:"confirm-password",type:"password",label:"Confirm password",icon:D.lock,autocomplete:"new-password",disabled:!0,toggle:!0})}
            <button id="save-new-password-btn" class="btn-neon" type="submit" disabled><span>Save new password</span>${D.arrow}</button>
            <button id="cancel-reset-btn" class="link-btn back" type="button">${D.back}<span>Back to login</span></button>
        </form>
    `),un();const e=document.getElementById("reset-status"),t=document.getElementById("reset-badge"),i=document.getElementById("new-password"),s=document.getElementById("confirm-password"),r=document.getElementById("save-new-password-btn"),o=document.getElementById("strength-meter");i.addEventListener("input",()=>{o.dataset.score=String(jg(i.value))}),Zu(G,n).then(u=>{e.innerHTML=`Choose a new password for <strong class="auth-email">${ne(u)}</strong>`,i.disabled=!1,s.disabled=!1,r.disabled=!1,i.focus()}).catch(u=>{var h;t.classList.add("error"),t.innerHTML=D.alert,e.textContent=ai(u),r.style.display="none",document.querySelectorAll("#reset-form .auth-field, #strength-meter").forEach(p=>p.style.display="none");const d=document.createElement("button");d.type="button",d.className="btn-neon",d.innerHTML=`<span>Request a new link</span>${D.arrow}`,d.addEventListener("click",()=>{window.history.replaceState({},document.title,window.location.pathname),P="forgotPassword",Si()}),(h=document.getElementById("reset-form"))==null||h.prepend(d)});const a=()=>{window.history.replaceState({},document.title,window.location.pathname),P="calendar",We()};(l=document.getElementById("cancel-reset-btn"))==null||l.addEventListener("click",a),(c=document.getElementById("reset-form"))==null||c.addEventListener("submit",async u=>{var p;u.preventDefault();const d=i.value,h=s.value;if(!d||d.length<6){He(document.querySelector(".auth-card")),L("Password must be at least 6 characters.","error");return}if(d!==h){He(document.querySelector(".auth-card")),L("Passwords do not match.","error");return}try{kt(r,!0,"Saving..."),await Ju(G,n,d),window.history.replaceState({},document.title,window.location.pathname),W.innerHTML=cn(`
                <div class="auth-header success">
                    <div class="auth-badge success pulse">${D.check}</div>
                    <h2 class="auth-title">Password updated</h2>
                    <p class="auth-description">You're all set. Log in with your new password.</p>
                </div>
                <div class="auth-form">
                    <button id="go-login-btn" class="btn-neon" type="button"><span>Go to login</span>${D.arrow}</button>
                </div>
            `),un(),(p=document.getElementById("go-login-btn"))==null||p.addEventListener("click",()=>{P="calendar",We()})}catch(f){kt(r,!1,"Save new password"),He(document.querySelector(".auth-card")),L(ai(f),"error")}})}function ci(n,e){var r,o;const t=document.querySelector(".modal-overlay");t&&t.remove();const i=document.createElement("div");i.className="modal-overlay active",i.innerHTML=`
        <div class="modal-content">
            <h2>Are you sure?</h2>
            <p style="text-align: center; color: #9d00ff; margin-bottom: 20px;">${n}</p>
            <div class="modal-actions">
                <button id="confirm-yes">Yes, Delete</button>
                <button id="confirm-no" class="cancel-btn">No, Keep it</button>
            </div>
        </div>
    `,document.body.appendChild(i);const s=()=>{i.classList.remove("active"),setTimeout(()=>i.remove(),300)};(r=document.getElementById("confirm-no"))==null||r.addEventListener("click",s),(o=document.getElementById("confirm-yes"))==null||o.addEventListener("click",()=>{e(),s()})}const q={chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',year:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',board:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',games:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="12" rx="5"/><path d="M7 11v4M5 13h4M15.5 12h.01M18 14h.01"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'},Uo=["#ff00ff","#00ffff","#9d00ff","#ff3d9a","#39ff88","#ffb84d","#4d7cff","#ff6b4d"],zg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],tt=n=>String(n).padStart(2,"0"),nt=n=>`${n.getFullYear()}-${tt(n.getMonth()+1)}-${tt(n.getDate())}`,hn=n=>{const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)},Le=n=>new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function oc(n,e){const t=hn(n).getTime(),i=t+1440*60*1e3;return e.filter(s=>s.start<i&&s.end>t).sort((s,r)=>s.start-r.start)}function Yg(n){const e=new Date,t=nt(e),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);return n===t?"Today":n===nt(i)?"Tomorrow":hn(n).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})}let Q=null,Kt=null,xn=!0;function Qt(n){j+=n,j<0&&(j=11,ie--),j>11&&(j=0,ie++),Kt=n>0?"left":"right",xn=!0,Q=null,Te()}function Hi(n){n.classList.remove("active"),setTimeout(()=>n.remove(),300)}function _r(n){const e=G.currentUser,t=(e==null?void 0:e.email)||"",i=(s,r,o)=>`<button class="cal-tab ${n===s?"active":""}" data-view="${s}">${r}<span>${o}</span></button>`;return`
        <header class="cal-header">
            <div class="cal-logo">TEGEL</div>
            <div class="cal-header-actions">
                ${sc()}
                ${e?`
                    <div class="user-menu">
                        <button class="user-avatar" id="user-avatar" aria-label="Account menu">${ne((t[0]||"?").toUpperCase())}</button>
                        <div class="user-dropdown" id="user-dropdown">
                            <div class="user-dropdown-email">${ne(t)}</div>
                            <button class="user-dropdown-item" id="my-bookings-btn">${q.list}<span>My bookings</span></button>
                            <button class="user-dropdown-item danger" id="logout-btn">${q.logout}<span>Log out</span></button>
                        </div>
                    </div>
                `:`
                    <button class="cal-today-btn" id="header-login-btn">Log in</button>
                `}
            </div>
        </header>
        ${e?`
            <nav class="cal-tabs">
                ${i("calendar",q.calendar,"Calendar")}
                ${i("yearOverview",q.year,"Year")}
                ${i("board",q.board,"Board")}
                ${i("games",q.games,"Games")}
            </nav>
        `:""}
    `}function ac(n){var e;if(n==="board"){P="board",new tc(W),(e=document.getElementById("back-to-calendar"))==null||e.addEventListener("click",()=>ac("calendar"));return}P=n,n==="calendar"?Te():n==="yearOverview"?yr():fn()}function vr(){var e,t,i,s;document.querySelectorAll(".theme-toggle-btn").forEach(r=>{r.addEventListener("click",li)}),document.querySelectorAll(".cal-tab[data-view]").forEach(r=>{r.addEventListener("click",()=>{r.classList.contains("active")||ac(r.dataset.view)})});const n=document.getElementById("user-dropdown");(e=document.getElementById("user-avatar"))==null||e.addEventListener("click",r=>{r.stopPropagation(),n==null||n.classList.toggle("open")}),(t=document.getElementById("my-bookings-btn"))==null||t.addEventListener("click",()=>{n==null||n.classList.remove("open"),Qg(he)}),(i=document.getElementById("logout-btn"))==null||i.addEventListener("click",()=>{Ps(G),L("Logged out")}),(s=document.getElementById("header-login-btn"))==null||s.addEventListener("click",()=>{P="calendar",We()})}function Fn(n,e){var y,w;const t=document.querySelector(".modal-overlay");t&&t.remove();const i=G.currentUser,s=hn(n),r=oc(n,e),o=new Date;let a=12;n===nt(o)&&(a=Math.min(o.getHours()+1,22));const l=`${tt(a)}:00`,c=`${tt(a+1)}:00`,u=document.createElement("div");u.className="modal-overlay active",u.innerHTML=`
        <div class="modal-content sheet">
            <div class="sheet-handle"></div>
            <div class="sheet-head">
                <div class="sheet-date-badge">
                    <span>${s.toLocaleDateString("en-GB",{month:"short"})}</span>
                    <strong>${s.getDate()}</strong>
                </div>
                <div>
                    <h2>New booking</h2>
                    <p>${s.toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"long",year:"numeric"})}</p>
                </div>
            </div>
            <div class="form-group">
                <label for="event-title">Title</label>
                <input type="text" id="event-title" placeholder="Synth Party" value="${ne((i==null?void 0:i.email)||"")}" />
            </div>
            <div class="time-row">
                <div class="form-group">
                    <label for="event-start">Start</label>
                    <input type="time" id="event-start" value="${l}" />
                </div>
                <span class="time-arrow">${q.chevronRight}</span>
                <div class="form-group">
                    <label for="event-end">End</label>
                    <input type="time" id="event-end" value="${c}" />
                </div>
            </div>
            <div class="duration-chips">
                ${[30,60,120,180].map(E=>`<button type="button" class="duration-chip ${E===60?"active":""}" data-min="${E}">${E<60?E+"m":E/60+"h"}</button>`).join("")}
            </div>
            ${r.length?`
                <div class="taken-slots">
                    <div class="taken-label">Already booked</div>
                    <div class="taken-list">
                        ${r.map(E=>`
                            <span class="taken-chip" style="--ev:${E.color||"#ff00ff"}">
                                ${Le(E.start)}–${Le(E.end)} · ${ne(E.title)}
                            </span>
                        `).join("")}
                    </div>
                </div>
            `:""}
            <div class="modal-actions">
                <button id="confirm-booking" class="btn-neon"><span>Book it</span>${q.bolt}</button>
                <button id="cancel-booking" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `,document.body.appendChild(u);const d=document.getElementById("event-start"),h=document.getElementById("event-end"),p=E=>{const[M,H]=d.value.split(":").map(Number),te=Math.min(M*60+H+E,1439);h.value=`${tt(Math.floor(te/60))}:${tt(te%60)}`};u.querySelectorAll(".duration-chip").forEach(E=>{E.addEventListener("click",()=>{u.querySelectorAll(".duration-chip").forEach(M=>M.classList.remove("active")),E.classList.add("active"),p(Number(E.dataset.min))})}),d.addEventListener("change",()=>{const E=u.querySelector(".duration-chip.active");E&&p(Number(E.dataset.min))}),h.addEventListener("input",()=>{u.querySelectorAll(".duration-chip").forEach(E=>E.classList.remove("active"))}),u.addEventListener("click",E=>{E.target===u&&Hi(u)}),(y=document.getElementById("cancel-booking"))==null||y.addEventListener("click",()=>Hi(u));const f=async()=>{const E=document.getElementById("event-title").value.trim(),M=d.value,H=h.value;if(!E){L("Please enter a title","error");return}const te=new Date(`${n}T${M}`).getTime(),ge=new Date(`${n}T${H}`).getTime();if(ge<=te){L("End time must be after start time","error");return}if(Mg({start:te,end:ge},e)){L("This time slot is already booked!","error"),He(u.querySelector(".modal-content"));return}const ue=G.currentUser;if(ue)try{await Ag({userId:ue.uid,title:E,start:te,end:ge,email:ue.email||"",color:Uo[Math.floor(Math.random()*Uo.length)]}),L("Event booked!"),Q=n,Hi(u)}catch(Ye){L(Ye.message,"error")}};(w=document.getElementById("confirm-booking"))==null||w.addEventListener("click",f),["event-title","event-start","event-end"].forEach(E=>{var M;(M=document.getElementById(E))==null||M.addEventListener("keypress",H=>{H.key==="Enter"&&f()})})}function Qg(n){var l,c;const e=Date.now(),t=n.filter(u=>{var d;return u.email===((d=G.currentUser)==null?void 0:d.email)}),i=t.filter(u=>u.end>=e).sort((u,d)=>u.start-d.start),s=t.filter(u=>u.end<e).sort((u,d)=>d.start-u.start),r=document.querySelector(".modal-overlay");r&&r.remove();const o=u=>{const d=new Date(u.start).toLocaleDateString(),h=new Date(u.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),p=new Date(u.end).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
            <div class="my-booking-item" style="border-left-color: ${u.color}">
                <div class="my-booking-info">
                    <div class="my-booking-title">${u.title}</div>
                    <div class="my-booking-time">${d} | ${h} - ${p}</div>
                </div>
                <button class="delete-my-booking" data-id="${u.id}">&times;</button>
            </div>
        `},a=document.createElement("div");a.className="modal-overlay active",a.innerHTML=`
        <div class="modal-content" style="max-height: 85vh; display: flex; flex-direction: column;">
            <h2>My Bookings</h2>
            <div class="my-bookings-list" style="overflow-y: auto; flex: 1; padding-right: 5px;">
                ${t.length===0?'<p class="no-bookings-msg">No bookings found.</p>':""}
                
                ${i.length>0?`
                    <div class="booking-section">
                        <h3 class="section-title upcoming">Upcoming</h3>
                        ${i.map(o).join("")}
                    </div>
                `:""}

                ${s.length>0?`
                    <div class="booking-section">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                            <h3 class="section-title past">Past</h3>
                            <button id="delete-all-past" class="tiny-btn-neon">Delete All Past</button>
                        </div>
                        ${s.map(o).join("")}
                    </div>
                `:""}
            </div>
            <div class="modal-actions">
                <button id="close-my-bookings">Close</button>
            </div>
        </div>
    `,document.body.appendChild(a),(l=document.getElementById("delete-all-past"))==null||l.addEventListener("click",()=>{const u=s.map(d=>d.id).filter(d=>!!d);u.length>0&&ci(`Delete all ${u.length} past bookings?`,async()=>{try{await Rg(u),L("Past bookings cleared"),a.remove()}catch(d){L(d.message,"error")}})}),(c=document.getElementById("close-my-bookings"))==null||c.addEventListener("click",()=>{a.classList.remove("active"),setTimeout(()=>a.remove(),300)}),document.querySelectorAll(".delete-my-booking").forEach(u=>{u.addEventListener("click",async()=>{const d=u.getAttribute("data-id");d&&ci("Delete this booking?",async()=>{try{await pr(d),L("Booking deleted"),a.remove()}catch(h){L(h.message,"error")}})})})}function Jg(n){if(n.length===0)return"";if(n.length===1)return`background: ${n[0].color||"#ff00ff"}`;const e=n.map(s=>s.color||"#ff00ff"),t=100/e.length;let i="background: linear-gradient(135deg, ";return e.forEach((s,r)=>{i+=`${s} ${r*t}%, ${s} ${(r+1)*t}%`,r<e.length-1&&(i+=", ")}),i+=")",i}const Xg=[{url:"https://games.tegelhus.uk",host:"games.tegelhus.uk",title:"Games",tagline:"The Tegel arcade. Pick a cabinet and start playing.",icon:"👾",tag:"ARCADE",theme:"pink"},{url:"https://atlas.tegelhus.uk",host:"atlas.tegelhus.uk",title:"Atlas",tagline:"Explore the world, one map at a time.",icon:"🌍",tag:"EXPLORE",theme:"cyan"}];function fn(){W.classList.remove("auth-mode"),W.innerHTML=`
        <div class="cal arcade">
            ${_r("games")}

            <section class="arcade-hero">
                <div class="arcade-hero-sun"></div>
                <div class="arcade-hero-grid"></div>
                <div class="arcade-hero-content">
                    <span class="arcade-kicker">// PLAYER ONE READY</span>
                    <h2 class="arcade-title" data-text="ARCADE">ARCADE</h2>
                    <p class="arcade-sub">Insert coin<span class="arcade-blink">_</span></p>
                </div>
            </section>

            <div class="arcade-grid">
                ${Xg.map((n,e)=>`
                    <a href="${n.url}" class="arcade-card ${n.theme}" target="_blank" rel="noopener noreferrer" style="--i:${e}">
                        <div class="arcade-card-art">
                            <div class="arcade-card-sun"></div>
                            <div class="arcade-card-floor"></div>
                            <div class="arcade-card-icon">${n.icon}</div>
                            <span class="arcade-card-tag">${n.tag}</span>
                        </div>
                        <div class="arcade-card-body">
                            <div class="arcade-card-title">${n.title}</div>
                            <p class="arcade-card-tagline">${n.tagline}</p>
                            <div class="arcade-card-footer">
                                <span class="arcade-card-host">${n.host}</span>
                                <span class="arcade-card-play">PLAY ${q.chevronRight}</span>
                            </div>
                        </div>
                        <div class="arcade-card-glare"></div>
                    </a>
                `).join("")}
            </div>
        </div>
    `,vr(),window.matchMedia("(hover: hover) and (pointer: fine)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.querySelectorAll(".arcade-card").forEach(n=>{n.addEventListener("pointermove",e=>{const t=n.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,s=(e.clientY-t.top)/t.height;n.style.setProperty("--rx",`${(.5-s)*10}deg`),n.style.setProperty("--ry",`${(i-.5)*12}deg`),n.style.setProperty("--gx",`${i*100}%`),n.style.setProperty("--gy",`${s*100}%`)}),n.addEventListener("pointerleave",()=>{n.style.setProperty("--rx","0deg"),n.style.setProperty("--ry","0deg")})})}function yr(){var e;W.classList.remove("auth-mode");const n=Og(ie,j,12,he);W.innerHTML=`
        <div class="cal">
            ${_r("yearOverview")}
            
            <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 16px 0 12px; text-transform: uppercase; text-align: center;">Yearly Overview</h2>

            <div class="year-overview-grid">
                ${n.months.map(t=>{const i=(t.firstDayOfWeek+6)%7,s=Array(i).fill(null);return`
                    <div class="month-tile" data-year="${t.year}" data-month="${t.month}">
                        <div class="month-tile-header">
                            ${t.monthName} ${t.year}
                        </div>
                        <div class="month-tile-grid">
                            <div class="mini-day-header">M</div>
                            <div class="mini-day-header">T</div>
                            <div class="mini-day-header">W</div>
                            <div class="mini-day-header">T</div>
                            <div class="mini-day-header">F</div>
                            <div class="mini-day-header">S</div>
                            <div class="mini-day-header">S</div>
                            ${s.map(()=>'<div class="mini-day empty"></div>').join("")}
                            ${t.days.map(r=>`
                                <div class="mini-day ${r.events.length>0?"has-events":""}" 
                                     title="${r.date}${r.events.length>0?": "+r.events.length+" events":""}"
                                     data-date="${r.date}"
                                     style="${Jg(r.events)}">
                                    ${r.dayOfMonth}
                                </div>
                            `).join("")}
                        </div>
                    </div>
                    `}).join("")}
            </div>
        </div>
    `,vr(),(e=document.getElementById("logout-btn"))==null||e.addEventListener("click",()=>{Ps(G),L("Logged out")}),document.querySelectorAll(".month-tile").forEach(t=>{t.addEventListener("click",()=>{ie=parseInt(t.getAttribute("data-year")||"0"),j=parseInt(t.getAttribute("data-month")||"0"),P="calendar",Te()})}),document.querySelectorAll(".mini-day:not(.empty)").forEach(t=>{t.addEventListener("click",i=>{i.stopPropagation();const s=document.createElement("span");s.classList.add("ripple"),t.appendChild(s);const r=i.clientX-t.getBoundingClientRect().left,o=i.clientY-t.getBoundingClientRect().top;s.style.left=`${r}px`,s.style.top=`${o}px`,setTimeout(()=>s.remove(),600);const a=t.getAttribute("data-date");a&&Fn(a,he)})})}function Te(){var ge,ue,Ye,Tn,dt,wn;W.classList.remove("auth-mode");const n=ec(ie,j,he),e=((ge=G.currentUser)==null?void 0:ge.email)||"",t=Date.now(),i=new Date,s=nt(i),r=ie===i.getFullYear()&&j===i.getMonth(),o=`${ie}-${tt(j+1)}`;(!Q||!Q.startsWith(o))&&(Q=r?s:n.days[0].date);const a=(new Date(ie,j,1).getDay()+6)%7,c=Math.ceil((a+n.days.length)/7)*7-a-n.days.length,u=n.days.reduce((g,S)=>g+S.events.length,0),d=he.filter(g=>g.email===e&&g.end>=t).sort((g,S)=>g.start-S.start)[0],h=(g,S)=>{const re=(a+S)%7,Sn=["cal-day",g.date===s?"is-today":"",g.date===Q?"is-selected":"",g.date<s?"is-past":"",re>=5?"is-weekend":"",g.events.length?"has-events":"",g.events.some(oe=>oe.email===e)?"has-mine":""].filter(Boolean).join(" "),lc=g.events.slice(0,3).map(oe=>`<i style="--ev:${oe.color||"#ff00ff"}"></i>`).join(""),cc=g.events.length>3?`<em>+${g.events.length-3}</em>`:"",dc=g.events.slice(0,3).map(oe=>`
                <span class="cal-chip ${oe.email===e?"mine":""}" style="--ev:${oe.color||"#ff00ff"}" title="${Le(oe.start)}–${Le(oe.end)}: ${ne(oe.title)}">
                    <b>${Le(oe.start)}</b> ${ne(oe.title)}
                </span>`).join(""),uc=g.events.length>3?`<span class="cal-chip-more">+${g.events.length-3} more</span>`:"";return`
            <div class="${Sn}" role="button" tabindex="0" data-date="${g.date}" style="--i:${S}"
                 aria-label="${g.date}, ${g.events.length} bookings">
                <span class="cal-day-num">${g.dayOfMonth}</span>
                <span class="cal-dots">${lc}${cc}</span>
                <span class="cal-chips">${dc}${uc}</span>
                <span class="cal-quick-add" data-date="${g.date}" title="Book">${q.plus}</span>
            </div>`},p=oc(Q,he),f=hn(Q),y=p.map(g=>{const S=g.email===e,re=g.start<=t&&g.end>t;return`
            <div class="agenda-item ${S?"mine":""} ${g.end<t?"done":""}" style="--ev:${g.color||"#ff00ff"}">
                <div class="agenda-time">
                    <span>${Le(g.start)}</span>
                    <span>${Le(g.end)}</span>
                </div>
                <div class="agenda-info">
                    <div class="agenda-title">${ne(g.title)}${re?'<span class="live-badge">LIVE</span>':""}</div>
                    <div class="agenda-owner">${S?"You":ne(g.email||"Unknown")}</div>
                </div>
                ${S?`<button class="agenda-delete" data-id="${g.id}" data-title="${ne(g.title)}" aria-label="Delete booking">${q.trash}</button>`:""}
            </div>`}).join(""),w=[Kt?`slide-${Kt}`:"",xn?"animate":""].join(" ");Kt=null,xn=!1,W.innerHTML=`
        <div class="cal">
            ${_r("calendar")}

            ${d?`
                <button class="cal-next-up" id="next-up" data-date="${nt(new Date(d.start))}" style="--ev:${d.color||"#00ffff"}">
                    <span class="next-up-label">${d.start<=t?"Now":"Next up"}</span>
                    <span class="next-up-title">${ne(d.title)}</span>
                    <span class="next-up-when">${Yg(nt(new Date(d.start)))} · ${Le(d.start)}</span>
                </button>
            `:""}

            <div class="cal-body">
                <section class="cal-panel">
                    <div class="cal-monthbar">
                        <button class="cal-nav-btn" id="prev-month" aria-label="Previous month">${q.chevronLeft}</button>
                        <div class="cal-month-title">
                            <h2>${Zl[j]}</h2>
                            <span>${ie} · ${u} booking${u===1?"":"s"}</span>
                        </div>
                        ${r?"":'<button class="cal-today-btn" id="go-today-btn">Today</button>'}
                        <button class="cal-nav-btn" id="next-month" aria-label="Next month">${q.chevronRight}</button>
                    </div>

                    <div class="cal-weekdays">
                        ${zg.map((g,S)=>`<span class="${S>=5?"weekend":""}"><b>${g}</b><i>${g[0]}</i></span>`).join("")}
                    </div>

                    <div class="cal-grid ${w}" id="cal-grid">
                        ${Array(a).fill('<div class="cal-day is-blank"></div>').join("")}
                        ${n.days.map(h).join("")}
                        ${Array(c).fill('<div class="cal-day is-blank"></div>').join("")}
                    </div>
                    <p class="cal-hint">Swipe to change month · tap a day to see bookings</p>
                </section>

                <aside class="cal-agenda" id="cal-agenda">
                    <div class="cal-agenda-head">
                        <div>
                            <div class="cal-agenda-weekday">${Q===s?"Today":f.toLocaleDateString("en-GB",{weekday:"long"})}</div>
                            <div class="cal-agenda-date">${f.toLocaleDateString("en-GB",{day:"numeric",month:"long"})}</div>
                        </div>
                        <span class="cal-agenda-count">${p.length} booked</span>
                    </div>
                    <div class="cal-agenda-list">
                        ${p.length?y:`
                            <div class="agenda-empty">
                                ${q.moon}
                                <p>Nothing booked.<br/>The tegel is all yours.</p>
                            </div>
                        `}
                    </div>
                    <button class="btn-neon" id="book-day-btn">${q.plus}<span>Book this day</span></button>
                </aside>
            </div>
        </div>
    `,vr(),(ue=document.getElementById("prev-month"))==null||ue.addEventListener("click",()=>Qt(-1)),(Ye=document.getElementById("next-month"))==null||Ye.addEventListener("click",()=>Qt(1)),(Tn=document.getElementById("go-today-btn"))==null||Tn.addEventListener("click",()=>{const g=new Date;Kt=g.getFullYear()*12+g.getMonth()>ie*12+j?"left":"right",ie=g.getFullYear(),j=g.getMonth(),Q=nt(g),xn=!0,Te()}),(dt=document.getElementById("next-up"))==null||dt.addEventListener("click",g=>{var Sn;const S=g.currentTarget.dataset.date,re=hn(S);ie=re.getFullYear(),j=re.getMonth(),Q=S,Te(),(Sn=document.getElementById("cal-agenda"))==null||Sn.scrollIntoView({behavior:"smooth",block:"nearest"})});const E=document.getElementById("cal-grid");let M=0,H=0;E.addEventListener("touchstart",g=>{M=g.touches[0].clientX,H=g.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",g=>{const S=g.changedTouches[0].clientX-M,re=g.changedTouches[0].clientY-H;Math.abs(S)>50&&Math.abs(S)>Math.abs(re)*1.5&&Qt(S<0?1:-1)},{passive:!0});const te=g=>{var S;Q=g,Te(),window.matchMedia("(max-width: 1023px)").matches&&((S=document.getElementById("cal-agenda"))==null||S.scrollIntoView({behavior:"smooth",block:"nearest"}))};document.querySelectorAll(".cal-day:not(.is-blank)").forEach(g=>{g.addEventListener("click",S=>{if(S.target.closest(".cal-quick-add")){Fn(g.dataset.date,he);return}if(g.dataset.date===Q){Fn(g.dataset.date,he);return}te(g.dataset.date)}),g.addEventListener("keydown",S=>{(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),g.click())})}),(wn=document.getElementById("book-day-btn"))==null||wn.addEventListener("click",()=>{Fn(Q,he)}),document.querySelectorAll(".agenda-delete").forEach(g=>{g.addEventListener("click",()=>{const S=g.dataset.id;S&&ci(`Delete "${ne(g.dataset.title||"")}"?`,async()=>{try{await pr(S),L("Booking deleted")}catch(re){L(re.message,"error")}})})})}let Rn=!0;document.addEventListener("click",n=>{const e=document.getElementById("user-dropdown");e!=null&&e.classList.contains("open")&&!n.target.closest(".user-menu")&&e.classList.remove("open")});window.addEventListener("keydown",n=>{var i;const e=n.target,t=["INPUT","TEXTAREA","SELECT"].includes(e==null?void 0:e.tagName);if(P==="calendar"&&!t&&!document.querySelector(".modal-overlay")&&document.getElementById("cal-grid")&&(n.key==="ArrowLeft"&&Qt(-1),n.key==="ArrowRight"&&Qt(1)),n.key==="Escape"){(i=document.getElementById("user-dropdown"))==null||i.classList.remove("open");const s=document.querySelector(".modal-overlay.active");s&&(s.classList.remove("active"),setTimeout(()=>s.remove(),300))}});ih(G,n=>{n&&P!=="resetPassword"?Cg(e=>{he=e,P==="board"||(P==="yearOverview"?yr():P==="games"?fn():Te()),Rn&&(Fo(),Rn=!1)}):(P==="games"?fn():P==="resetPassword"&&hs?qg(hs):P==="forgotPassword"?Si():We(),Rn&&(Fo(),Rn=!1))});
