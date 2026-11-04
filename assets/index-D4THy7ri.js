var oc=Object.defineProperty;var ac=(n,e,t)=>e in n?oc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ae=(n,e,t)=>ac(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const lc="modulepreload",cc=function(n){return"/"+n},hr={},dc=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=cc(c),c in hr)return;hr[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":lc,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,m)=>{h.addEventListener("load",f),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function uc(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:s,onRegisteredSW:r,onRegisterError:o}=n;let a,l;const c=async(d=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(a=await dc(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{o==null||o(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||i==null||i()}),a.register({immediate:e}).then(d=>{r?r("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return l=u(),c}var fr={};/**
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
 */const Po={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const p=function(n,e){if(!n)throw Ct(e)},Ct=function(n){return new Error("Firebase Database ("+Po.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Lo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},hc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},us={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Lo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new fc;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const m=c<<6&192|d;i.push(m)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Do=function(n){const e=Lo(n);return us.encodeByteArray(e,!0)},Fn=function(n){return Do(n).replace(/\./g,"")},Un=function(n){try{return us.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function pc(n){return Oo(void 0,n)}function Oo(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!mc(t)||(n[t]=Oo(n[t],e[t]));return n}function mc(n){return n!=="__proto__"}/**
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
 */function gc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _c=()=>gc().__FIREBASE_DEFAULTS__,vc=()=>{if(typeof process>"u"||typeof fr>"u")return;const n=fr.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Un(n[1]);return e&&JSON.parse(e)},hs=()=>{try{return _c()||vc()||yc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Mo=n=>{var e,t;return(t=(e=hs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ec=n=>{const e=Mo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},xo=()=>{var n;return(n=hs())===null||n===void 0?void 0:n.config},Fo=n=>{var e;return(e=hs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class li{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function bc(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Fn(JSON.stringify(t)),Fn(JSON.stringify(o)),""].join(".")}/**
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
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function Ic(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Tc(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Uo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wc(){const n=q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Sc(){return Po.NODE_ADMIN===!0}function kc(){try{return typeof indexedDB=="object"}catch{return!1}}function Cc(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Rc="FirebaseError";class We extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Rc,Object.setPrototypeOf(this,We.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Ac(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new We(s,a,i)}}function Ac(n,e){return n.replace(Nc,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Nc=/\{\$([^}]+)}/g;/**
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
 */function Qt(n){return JSON.parse(n)}function B(n){return JSON.stringify(n)}/**
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
 */const Bo=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Qt(Un(r[0])||""),t=Qt(Un(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Pc=function(n){const e=Bo(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Lc=function(n){const e=Bo(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function yt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Vi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Bn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function $n(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(pr(r)&&pr(o)){if(!$n(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function pr(n){return n!==null&&typeof n=="object"}/**
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
 */function Rt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function $t(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Vt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Dc{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Oc(n,e){const t=new Mc(n,e);return t.subscribe.bind(t)}class Mc{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");xc(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=wi),s.error===void 0&&(s.error=wi),s.complete===void 0&&(s.complete=wi);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xc(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function wi(){}function ps(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Fc=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ci=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function $(n){return n&&n._delegate?n._delegate:n}class nt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ye="[DEFAULT]";/**
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
 */class Uc{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new li;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($c(e))try{this.getOrInitializeService({instanceIdentifier:Ye})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ye){return this.instances.has(e)}getOptions(e=Ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Bc(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ye){return this.component?this.component.multipleInstances?e:Ye:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bc(n){return n===Ye?void 0:n}function $c(n){return n.instantiationMode==="EAGER"}/**
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
 */class Vc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Uc(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var k;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(k||(k={}));const Hc={debug:k.DEBUG,verbose:k.VERBOSE,info:k.INFO,warn:k.WARN,error:k.ERROR,silent:k.SILENT},Kc=k.INFO,Gc={[k.DEBUG]:"log",[k.VERBOSE]:"log",[k.INFO]:"info",[k.WARN]:"warn",[k.ERROR]:"error"},Wc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=Gc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ms{constructor(e){this.name=e,this._logLevel=Kc,this._logHandler=Wc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in k))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,k.DEBUG,...e),this._logHandler(this,k.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,k.VERBOSE,...e),this._logHandler(this,k.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,k.INFO,...e),this._logHandler(this,k.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,k.WARN,...e),this._logHandler(this,k.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,k.ERROR,...e),this._logHandler(this,k.ERROR,...e)}}const jc=(n,e)=>e.some(t=>n instanceof t);let mr,gr;function qc(){return mr||(mr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zc(){return gr||(gr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $o=new WeakMap,Hi=new WeakMap,Vo=new WeakMap,Si=new WeakMap,gs=new WeakMap;function Yc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(xe(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$o.set(t,n)}).catch(()=>{}),gs.set(e,n),e}function Qc(n){if(Hi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});Hi.set(n,e)}let Ki={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Hi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vo.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Jc(n){Ki=n(Ki)}function Xc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(ki(this),e,...t);return Vo.set(i,e.sort?e.sort():[e]),xe(i)}:zc().includes(n)?function(...e){return n.apply(ki(this),e),xe($o.get(this))}:function(...e){return xe(n.apply(ki(this),e))}}function Zc(n){return typeof n=="function"?Xc(n):(n instanceof IDBTransaction&&Qc(n),jc(n,qc())?new Proxy(n,Ki):n)}function xe(n){if(n instanceof IDBRequest)return Yc(n);if(Si.has(n))return Si.get(n);const e=Zc(n);return e!==n&&(Si.set(n,e),gs.set(e,n)),e}const ki=n=>gs.get(n);function ed(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=xe(o);return i&&o.addEventListener("upgradeneeded",l=>{i(xe(o.result),l.oldVersion,l.newVersion,xe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const td=["get","getKey","getAll","getAllKeys","count"],nd=["put","add","delete","clear"],Ci=new Map;function _r(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ci.get(e))return Ci.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=nd.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||td.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Ci.set(e,r),r}Jc(n=>({...n,get:(e,t,i)=>_r(e,t)||n.get(e,t,i),has:(e,t)=>!!_r(e,t)||n.has(e,t)}));/**
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
 */class id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sd(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function sd(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gi="@firebase/app",vr="0.10.13";/**
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
 */const Te=new ms("@firebase/app"),rd="@firebase/app-compat",od="@firebase/analytics-compat",ad="@firebase/analytics",ld="@firebase/app-check-compat",cd="@firebase/app-check",dd="@firebase/auth",ud="@firebase/auth-compat",hd="@firebase/database",fd="@firebase/data-connect",pd="@firebase/database-compat",md="@firebase/functions",gd="@firebase/functions-compat",_d="@firebase/installations",vd="@firebase/installations-compat",yd="@firebase/messaging",Ed="@firebase/messaging-compat",bd="@firebase/performance",Id="@firebase/performance-compat",Td="@firebase/remote-config",wd="@firebase/remote-config-compat",Sd="@firebase/storage",kd="@firebase/storage-compat",Cd="@firebase/firestore",Rd="@firebase/vertexai-preview",Ad="@firebase/firestore-compat",Nd="firebase",Pd="10.14.1";/**
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
 */const Wi="[DEFAULT]",Ld={[Gi]:"fire-core",[rd]:"fire-core-compat",[ad]:"fire-analytics",[od]:"fire-analytics-compat",[cd]:"fire-app-check",[ld]:"fire-app-check-compat",[dd]:"fire-auth",[ud]:"fire-auth-compat",[hd]:"fire-rtdb",[fd]:"fire-data-connect",[pd]:"fire-rtdb-compat",[md]:"fire-fn",[gd]:"fire-fn-compat",[_d]:"fire-iid",[vd]:"fire-iid-compat",[yd]:"fire-fcm",[Ed]:"fire-fcm-compat",[bd]:"fire-perf",[Id]:"fire-perf-compat",[Td]:"fire-rc",[wd]:"fire-rc-compat",[Sd]:"fire-gcs",[kd]:"fire-gcs-compat",[Cd]:"fire-fst",[Ad]:"fire-fst-compat",[Rd]:"fire-vertex","fire-js":"fire-js",[Nd]:"fire-js-all"};/**
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
 */const Vn=new Map,Dd=new Map,ji=new Map;function yr(n,e){try{n.container.addComponent(e)}catch(t){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Et(n){const e=n.name;if(ji.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;ji.set(e,n);for(const t of Vn.values())yr(t,n);for(const t of Dd.values())yr(t,n);return!0}function _s(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function _e(n){return n.settings!==void 0}/**
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
 */const Od={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Fe=new fn("app","Firebase",Od);/**
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
 */class Md{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Fe.create("app-deleted",{appName:this._name})}}/**
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
 */const At=Pd;function Ho(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Wi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Fe.create("bad-app-name",{appName:String(s)});if(t||(t=xo()),!t)throw Fe.create("no-options");const r=Vn.get(s);if(r){if($n(t,r.options)&&$n(i,r.config))return r;throw Fe.create("duplicate-app",{appName:s})}const o=new Vc(s);for(const l of ji.values())o.addComponent(l);const a=new Md(t,i,o);return Vn.set(s,a),a}function Ko(n=Wi){const e=Vn.get(n);if(!e&&n===Wi&&xo())return Ho();if(!e)throw Fe.create("no-app",{appName:n});return e}function Ue(n,e,t){var i;let s=(i=Ld[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(a.join(" "));return}Et(new nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const xd="firebase-heartbeat-database",Fd=1,Jt="firebase-heartbeat-store";let Ri=null;function Go(){return Ri||(Ri=ed(xd,Fd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Jt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Fe.create("idb-open",{originalErrorMessage:n.message})})),Ri}async function Ud(n){try{const t=(await Go()).transaction(Jt),i=await t.objectStore(Jt).get(Wo(n));return await t.done,i}catch(e){if(e instanceof We)Te.warn(e.message);else{const t=Fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Te.warn(t.message)}}}async function Er(n,e){try{const i=(await Go()).transaction(Jt,"readwrite");await i.objectStore(Jt).put(e,Wo(n)),await i.done}catch(t){if(t instanceof We)Te.warn(t.message);else{const i=Fe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Te.warn(i.message)}}}function Wo(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Bd=1024,$d=720*60*60*1e3;class Vd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Kd(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=br();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$d}),this._storage.overwrite(this._heartbeatsCache))}catch(i){Te.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=br(),{heartbeatsToSend:i,unsentEntries:s}=Hd(this._heartbeatsCache.heartbeats),r=Fn(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Te.warn(t),""}}}function br(){return new Date().toISOString().substring(0,10)}function Hd(n,e=Bd){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Ir(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ir(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Kd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kc()?Cc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Ud(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Er(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Er(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ir(n){return Fn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Gd(n){Et(new nt("platform-logger",e=>new id(e),"PRIVATE")),Et(new nt("heartbeat",e=>new Vd(e),"PRIVATE")),Ue(Gi,vr,n),Ue(Gi,vr,"esm2017"),Ue("fire-js","")}Gd("");var Wd="firebase",jd="10.14.1";/**
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
 */Ue(Wd,jd,"app");function vs(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function jo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qd=jo,qo=new fn("auth","Firebase",jo());/**
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
 */const Hn=new ms("@firebase/auth");function zd(n,...e){Hn.logLevel<=k.WARN&&Hn.warn(`Auth (${At}): ${n}`,...e)}function An(n,...e){Hn.logLevel<=k.ERROR&&Hn.error(`Auth (${At}): ${n}`,...e)}/**
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
 */function se(n,...e){throw ys(n,...e)}function fe(n,...e){return ys(n,...e)}function zo(n,e,t){const i=Object.assign(Object.assign({},qd()),{[e]:t});return new fn("auth","Firebase",i).create(e,{appName:n.name})}function Be(n){return zo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ys(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return qo.create(n,...e)}function _(n,e,...t){if(!n)throw ys(e,...t)}function ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw An(e),new Error(e)}function we(n,e){n||ve(e)}/**
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
 */function qi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Yd(){return Tr()==="http:"||Tr()==="https:"}function Tr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Qd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Yd()||Tc()||"connection"in navigator)?navigator.onLine:!0}function Jd(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class pn{constructor(e,t){this.shortDelay=e,this.longDelay=t,we(t>e,"Short delay should be less than long delay!"),this.isMobile=fs()||Uo()}get(){return Qd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Es(n,e){we(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Yo{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Xd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Zd=new pn(3e4,6e4);function Re(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function me(n,e,t,i,s={}){return Qo(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=Rt(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return Ic()||(c.referrerPolicy="no-referrer"),Yo.fetch()(Jo(n,n.config.apiHost,t,a),c)})}async function Qo(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Xd),e);try{const s=new tu(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Sn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Sn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Sn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Sn(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw zo(n,u,c);se(n,u)}}catch(s){if(s instanceof We)throw s;se(n,"network-request-failed",{message:String(s)})}}async function di(n,e,t,i,s={}){const r=await me(n,e,t,i,s);return"mfaPendingCredential"in r&&se(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Jo(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Es(n.config,s):`${n.config.apiScheme}://${s}`}function eu(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tu{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(fe(this.auth,"network-request-failed")),Zd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Sn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=fe(n,e,i);return s.customData._tokenResponse=t,s}function wr(n){return n!==void 0&&n.enterprise!==void 0}class nu{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return eu(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function iu(n,e){return me(n,"GET","/v2/recaptchaConfig",Re(n,e))}/**
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
 */async function su(n,e){return me(n,"POST","/v1/accounts:delete",e)}async function Xo(n,e){return me(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Kt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ru(n,e=!1){const t=$(n),i=await t.getIdToken(e),s=bs(i);_(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Kt(Ai(s.auth_time)),issuedAtTime:Kt(Ai(s.iat)),expirationTime:Kt(Ai(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ai(n){return Number(n)*1e3}function bs(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return An("JWT malformed, contained fewer than 3 sections"),null;try{const s=Un(t);return s?JSON.parse(s):(An("Failed to decode base64 JWT payload"),null)}catch(s){return An("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sr(n){const e=bs(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Xt(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof We&&ou(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ou({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class au{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Kt(this.lastLoginAt),this.creationTime=Kt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Xt(n,Xo(t,{idToken:i}));_(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Zo(r.providerUserInfo):[],a=cu(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new zi(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function lu(n){const e=$(n);await Kn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cu(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Zo(n){return n.map(e=>{var{providerId:t}=e,i=vs(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function du(n,e){const t=await Qo(n,{},async()=>{const i=Rt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Jo(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Yo.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uu(n,e){return me(n,"POST","/v2/accounts:revokeToken",Re(n,e))}/**
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
 */class ft{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sr(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(e.length!==0,"internal-error");const t=Sr(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await du(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ft;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(_(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(_(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ft,this.toJSON())}_performRefresh(){return ve("not implemented")}}/**
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
 */function Ne(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ye{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=vs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new au(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new zi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xt(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ru(this,e)}reload(){return lu(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Kn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(_e(this.auth.app))return Promise.reject(Be(this.auth));const e=await this.getIdToken();return await Xt(this,su(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=t.photoURL)!==null&&o!==void 0?o:void 0,y=(a=t.tenantId)!==null&&a!==void 0?a:void 0,A=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=t.createdAt)!==null&&c!==void 0?c:void 0,M=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:H,emailVerified:ee,isAnonymous:ge,providerData:he,stsTokenManager:ze}=t;_(H&&ze,e,"internal-error");const In=ft.fromJSON(this.name,ze);_(typeof H=="string",e,"internal-error"),Ne(d,e.name),Ne(h,e.name),_(typeof ee=="boolean",e,"internal-error"),_(typeof ge=="boolean",e,"internal-error"),Ne(f,e.name),Ne(m,e.name),Ne(y,e.name),Ne(A,e.name),Ne(E,e.name),Ne(M,e.name);const ct=new ye({uid:H,auth:e,email:h,emailVerified:ee,displayName:d,isAnonymous:ge,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:In,createdAt:E,lastLoginAt:M});return he&&Array.isArray(he)&&(ct.providerData=he.map(Tn=>Object.assign({},Tn))),A&&(ct._redirectEventId=A),ct}static async _fromIdTokenResponse(e,t,i=!1){const s=new ft;s.updateFromServerResponse(t);const r=new ye({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Kn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];_(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Zo(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new ft;a.updateFromIdToken(i);const l=new ye({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new zi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const kr=new Map;function Ee(n){we(n instanceof Function,"Expected a class definition");let e=kr.get(n);return e?(we(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,kr.set(n,e),e)}/**
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
 */class ea{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ea.type="NONE";const Cr=ea;/**
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
 */function Nn(n,e,t){return`firebase:${n}:${e}:${t}`}class pt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Nn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Nn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pt(Ee(Cr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ee(Cr);const o=Nn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=ye._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new pt(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new pt(r,e,i))}}/**
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
 */function Rr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(sa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ta(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(oa(e))return"Blackberry";if(aa(e))return"Webos";if(na(e))return"Safari";if((e.includes("chrome/")||ia(e))&&!e.includes("edge/"))return"Chrome";if(ra(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function ta(n=q()){return/firefox\//i.test(n)}function na(n=q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ia(n=q()){return/crios\//i.test(n)}function sa(n=q()){return/iemobile/i.test(n)}function ra(n=q()){return/android/i.test(n)}function oa(n=q()){return/blackberry/i.test(n)}function aa(n=q()){return/webos/i.test(n)}function Is(n=q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function hu(n=q()){var e;return Is(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fu(){return wc()&&document.documentMode===10}function la(n=q()){return Is(n)||ra(n)||aa(n)||oa(n)||/windows phone/i.test(n)||sa(n)}/**
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
 */function ca(n,e=[]){let t;switch(n){case"Browser":t=Rr(q());break;case"Worker":t=`${Rr(q())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${At}/${i}`}/**
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
 */class pu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function mu(n,e={}){return me(n,"GET","/v2/passwordPolicy",Re(n,e))}/**
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
 */const gu=6;class _u{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:gu,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class vu{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ar(this),this.idTokenSubscription=new Ar(this),this.beforeStateQueue=new pu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ee(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await pt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Xo(this,{idToken:e}),i=await ye._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(_e(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Kn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jd()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(_e(this.app))return Promise.reject(Be(this));const t=e?$(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return _e(this.app)?Promise.reject(Be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return _e(this.app)?Promise.reject(Be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ee(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mu(this),t=new _u(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await uu(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ee(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await pt.create(this,[Ee(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ca(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zd(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function je(n){return $(n)}class Ar{constructor(e){this.auth=e,this.observer=null,this.addObserver=Oc(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ui={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yu(n){ui=n}function da(n){return ui.loadJS(n)}function Eu(){return ui.recaptchaEnterpriseScript}function bu(){return ui.gapiScript}function Iu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Tu="recaptcha-enterprise",wu="NO_RECAPTCHA";class Su{constructor(e){this.type=Tu,this.auth=je(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{iu(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nu(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;wr(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(wu)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&wr(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Eu();l.length!==0&&(l+=a),da(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Nr(n,e,t,i=!1){const s=new Su(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Yi(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Nr(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Nr(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function ku(n,e){const t=_s(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if($n(r,e??{}))return s;se(s,"already-initialized")}return t.initialize({options:e})}function Cu(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ee);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ru(n,e,t){const i=je(n);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=ua(e),{host:o,port:a}=Au(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Nu()}function ua(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Au(n){const e=ua(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Pr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:Pr(o)}}}function Pr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Nu(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ts{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ve("not implemented")}_getIdTokenResponse(e){return ve("not implemented")}_linkToIdToken(e,t){return ve("not implemented")}_getReauthenticationResolver(e){return ve("not implemented")}}/**
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
 */async function ha(n,e){return me(n,"POST","/v1/accounts:resetPassword",Re(n,e))}async function Pu(n,e){return me(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Lu(n,e){return di(n,"POST","/v1/accounts:signInWithPassword",Re(n,e))}async function Du(n,e){return me(n,"POST","/v1/accounts:sendOobCode",Re(n,e))}async function Ou(n,e){return Du(n,e)}/**
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
 */async function Mu(n,e){return di(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}async function xu(n,e){return di(n,"POST","/v1/accounts:signInWithEmailLink",Re(n,e))}/**
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
 */class Zt extends Ts{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Zt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Zt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,t,"signInWithPassword",Lu);case"emailLink":return Mu(e,{email:this._email,oobCode:this._password});default:se(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yi(e,i,"signUpPassword",Pu);case"emailLink":return xu(e,{idToken:t,email:this._email,oobCode:this._password});default:se(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mt(n,e){return di(n,"POST","/v1/accounts:signInWithIdp",Re(n,e))}/**
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
 */const Fu="http://localhost";class it extends Ts{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new it(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=vs(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new it(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return mt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,mt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mt(e,t)}buildRequest(){const e={requestUri:Fu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Rt(t)}return e}}/**
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
 */function Uu(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Bu(n){const e=$t(Vt(n)).link,t=e?$t(Vt(e)).deep_link_id:null,i=$t(Vt(n)).deep_link_id;return(i?$t(Vt(i)).link:null)||i||t||e||n}class ws{constructor(e){var t,i,s,r,o,a;const l=$t(Vt(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=Uu((s=l.mode)!==null&&s!==void 0?s:null);_(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Bu(e);try{return new ws(t)}catch{return null}}}/**
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
 */class Nt{constructor(){this.providerId=Nt.PROVIDER_ID}static credential(e,t){return Zt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ws.parseLink(t);return _(i,"argument-error"),Zt._fromEmailAndCode(e,i.code,i.tenantId)}}Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mn extends fa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Le extends mn{constructor(){super("facebook.com")}static credential(e){return it._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Le.credential(e.oauthAccessToken)}catch{return null}}}Le.FACEBOOK_SIGN_IN_METHOD="facebook.com";Le.PROVIDER_ID="facebook.com";/**
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
 */class De extends mn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return it._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return De.credentialFromTaggedObject(e)}static credentialFromError(e){return De.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return De.credential(t,i)}catch{return null}}}De.GOOGLE_SIGN_IN_METHOD="google.com";De.PROVIDER_ID="google.com";/**
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
 */class Oe extends mn{constructor(){super("github.com")}static credential(e){return it._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
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
 */class Me extends mn{constructor(){super("twitter.com")}static credential(e,t){return it._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Me.credential(t,i)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
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
 */class bt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ye._fromIdTokenResponse(e,i,s),o=Lr(i);return new bt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Lr(i);return new bt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Lr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Gn extends We{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Gn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Gn(e,t,i,s)}}function pa(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Gn._fromErrorAndOperation(n,r,e,i):r})}async function $u(n,e,t=!1){const i=await Xt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bt._forOperation(n,"link",i)}/**
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
 */async function Vu(n,e,t=!1){const{auth:i}=n;if(_e(i.app))return Promise.reject(Be(i));const s="reauthenticate";try{const r=await Xt(n,pa(i,s,e,n),t);_(r.idToken,i,"internal-error");const o=bs(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(n.uid===a,i,"user-mismatch"),bt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&se(i,"user-mismatch"),r}}/**
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
 */async function ma(n,e,t=!1){if(_e(n.app))return Promise.reject(Be(n));const i="signIn",s=await pa(n,i,e),r=await bt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function Hu(n,e){return ma(je(n),e)}/**
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
 */class Ss{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?ks._fromServerResponse(e,t):"totpInfo"in t?Cs._fromServerResponse(e,t):se(e,"internal-error")}}class ks extends Ss{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new ks(t)}}class Cs extends Ss{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Cs(t)}}/**
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
 */function Ku(n,e,t){var i;_(((i=t.url)===null||i===void 0?void 0:i.length)>0,n,"invalid-continue-uri"),_(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(_(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(_(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function ga(n){const e=je(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gu(n,e,t){const i=je(n),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Ku(i,s,t),await Yi(i,s,"getOobCode",Ou)}async function Wu(n,e,t){await ha($(n),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ga(n),i})}async function ju(n,e){const t=$(n),i=await ha(t,{oobCode:e}),s=i.requestType;switch(_(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":_(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":_(i.mfaInfo,t,"internal-error");default:_(i.email,t,"internal-error")}let r=null;return i.mfaInfo&&(r=Ss._fromServerResponse(je(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:r},operation:s}}async function qu(n,e){const{data:t}=await ju($(n),e);return t.email}function zu(n,e,t){return _e(n.app)?Promise.reject(Be(n)):Hu($(n),Nt.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&ga(n),i})}function Yu(n,e,t,i){return $(n).onIdTokenChanged(e,t,i)}function Qu(n,e,t){return $(n).beforeAuthStateChanged(e,t)}function Ju(n,e,t,i){return $(n).onAuthStateChanged(e,t,i)}function _a(n){return $(n).signOut()}const Wn="__sak";/**
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
 */class va{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wn,"1"),this.storage.removeItem(Wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xu=1e3,Zu=10;class ya extends va{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=la(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);fu()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zu):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},Xu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ya.type="LOCAL";const eh=ya;/**
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
 */class Ea extends va{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ea.type="SESSION";const ba=Ea;/**
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
 */function th(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new hi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await th(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hi.receivers=[];/**
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
 */function Rs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class nh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Rs("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pe(){return window}function ih(n){pe().location.href=n}/**
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
 */function Ia(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function sh(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rh(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function oh(){return Ia()?self:null}/**
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
 */const Ta="firebaseLocalStorageDb",ah=1,jn="firebaseLocalStorage",wa="fbase_key";class gn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function fi(n,e){return n.transaction([jn],e?"readwrite":"readonly").objectStore(jn)}function lh(){const n=indexedDB.deleteDatabase(Ta);return new gn(n).toPromise()}function Qi(){const n=indexedDB.open(Ta,ah);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(jn,{keyPath:wa})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(jn)?e(i):(i.close(),await lh(),e(await Qi()))})})}async function Dr(n,e,t){const i=fi(n,!0).put({[wa]:e,value:t});return new gn(i).toPromise()}async function ch(n,e){const t=fi(n,!1).get(e),i=await new gn(t).toPromise();return i===void 0?null:i.value}function Or(n,e){const t=fi(n,!0).delete(e);return new gn(t).toPromise()}const dh=800,uh=3;class Sa{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>uh)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ia()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hi._getInstance(oh()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await sh(),!this.activeServiceWorker)return;this.sender=new nh(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qi();return await Dr(e,Wn,"1"),await Or(e,Wn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Dr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>ch(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Or(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=fi(s,!1).getAll();return new gn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sa.type="LOCAL";const hh=Sa;new pn(3e4,6e4);/**
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
 */function fh(n,e){return e?Ee(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class As extends Ts{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ph(n){return ma(n.auth,new As(n),n.bypassAuthState)}function mh(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Vu(t,new As(n),n.bypassAuthState)}async function gh(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),$u(t,new As(n),n.bypassAuthState)}/**
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
 */class ka{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ph;case"linkViaPopup":case"linkViaRedirect":return gh;case"reauthViaPopup":case"reauthViaRedirect":return mh;default:se(this.auth,"internal-error")}}resolve(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){we(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _h=new pn(2e3,1e4);class ut extends ka{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ut.currentPopupAction&&ut.currentPopupAction.cancel(),ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){we(this.filter.length===1,"Popup operations only handle one event");const e=Rs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_h.get())};e()}}ut.currentPopupAction=null;/**
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
 */const vh="pendingRedirect",Pn=new Map;class yh extends ka{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Pn.get(this.auth._key());if(!e){try{const i=await Eh(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Pn.set(this.auth._key(),e)}return this.bypassAuthState||Pn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Eh(n,e){const t=Th(e),i=Ih(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function bh(n,e){Pn.set(n._key(),e)}function Ih(n){return Ee(n._redirectPersistence)}function Th(n){return Nn(vh,n.config.apiKey,n.name)}async function wh(n,e,t=!1){if(_e(n.app))return Promise.reject(Be(n));const i=je(n),s=fh(i,e),o=await new yh(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Sh=600*1e3;class kh{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ch(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Ca(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(fe(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mr(e))}saveEventToCache(e){this.cachedEventUids.add(Mr(e)),this.lastProcessedEventTime=Date.now()}}function Mr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Ca({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ch(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ca(n);default:return!1}}/**
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
 */async function Rh(n,e={}){return me(n,"GET","/v1/projects",e)}/**
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
 */const Ah=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Nh=/^https?/;async function Ph(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Rh(n);for(const t of e)try{if(Lh(t))return}catch{}se(n,"unauthorized-domain")}function Lh(n){const e=qi(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Nh.test(t))return!1;if(Ah.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Dh=new pn(3e4,6e4);function xr(){const n=pe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Oh(n){return new Promise((e,t)=>{var i,s,r;function o(){xr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{xr(),t(fe(n,"network-request-failed"))},timeout:Dh.get()})}if(!((s=(i=pe().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=pe().gapi)===null||r===void 0)&&r.load)o();else{const a=Iu("iframefcb");return pe()[a]=()=>{gapi.load?o():t(fe(n,"network-request-failed"))},da(`${bu()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ln=null,e})}let Ln=null;function Mh(n){return Ln=Ln||Oh(n),Ln}/**
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
 */const xh=new pn(5e3,15e3),Fh="__/auth/iframe",Uh="emulator/auth/iframe",Bh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$h=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vh(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Es(e,Uh):`https://${n.config.authDomain}/${Fh}`,i={apiKey:e.apiKey,appName:n.name,v:At},s=$h.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Rt(i).slice(1)}`}async function Hh(n){const e=await Mh(n),t=pe().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:Vh(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bh,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=fe(n,"network-request-failed"),a=pe().setTimeout(()=>{r(o)},xh.get());function l(){pe().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Kh={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gh=500,Wh=600,jh="_blank",qh="http://localhost";class Fr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zh(n,e,t,i=Gh,s=Wh){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Kh),{width:i.toString(),height:s.toString(),top:r,left:o}),c=q().toLowerCase();t&&(a=ia(c)?jh:t),ta(c)&&(e=e||qh,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,m])=>`${h}${f}=${m},`,"");if(hu(c)&&a!=="_self")return Yh(e||"",a),new Fr(null);const d=window.open(e||"",a,u);_(d,n,"popup-blocked");try{d.focus()}catch{}return new Fr(d)}function Yh(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const Qh="__/auth/handler",Jh="emulator/auth/handler",Xh=encodeURIComponent("fac");async function Ur(n,e,t,i,s,r){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:At,eventId:s};if(e instanceof fa){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Vi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof mn){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${Xh}=${encodeURIComponent(l)}`:"";return`${Zh(n)}?${Rt(a).slice(1)}${c}`}function Zh({config:n}){return n.emulator?Es(n,Jh):`https://${n.authDomain}/${Qh}`}/**
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
 */const Ni="webStorageSupport";class ef{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ba,this._completeRedirectFn=wh,this._overrideRedirectResult=bh}async _openPopup(e,t,i,s){var r;we((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Ur(e,t,i,qi(),s);return zh(e,o,Rs())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Ur(e,t,i,qi(),s);return ih(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(we(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Hh(e),i=new kh(e);return t.register("authEvent",s=>(_(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ni,{type:Ni},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Ni];o!==void 0&&t(!!o),se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ph(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return la()||na()||Is()}}const tf=ef;var Br="@firebase/auth",$r="1.7.9";/**
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
 */class nf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sf(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rf(n){Et(new nt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ca(n)},c=new vu(i,s,r,l);return Cu(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Et(new nt("auth-internal",e=>{const t=je(e.getProvider("auth").getImmediate());return(i=>new nf(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(Br,$r,sf(n)),Ue(Br,$r,"esm2017")}/**
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
 */const of=300,af=Fo("authIdTokenMaxAge")||of;let Vr=null;const lf=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>af)return;const s=t==null?void 0:t.token;Vr!==s&&(Vr=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cf(n=Ko()){const e=_s(n,"auth");if(e.isInitialized())return e.getImmediate();const t=ku(n,{popupRedirectResolver:tf,persistence:[hh,eh,ba]}),i=Fo("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=lf(r.toString());Qu(t,o,()=>o(t.currentUser)),Yu(t,a=>o(a))}}const s=Mo("auth");return s&&Ru(t,`http://${s}`),t}function df(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}yu({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=fe("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",df().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rf("Browser");var Hr={};const Kr="@firebase/database",Gr="1.0.8";/**
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
 */let Ra="";function uf(n){Ra=n}/**
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
 */class hf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Qt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ff{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Aa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hf(e)}}catch{}return new ff},Je=Aa("localStorage"),pf=Aa("sessionStorage");/**
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
 */const gt=new ms("@firebase/database"),mf=(function(){let n=1;return function(){return n++}})(),Na=function(n){const e=Fc(n),t=new Dc;t.update(e);const i=t.digest();return us.encodeByteArray(i)},_n=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=_n.apply(null,i):typeof i=="object"?e+=B(i):e+=i,e+=" "}return e};let Gt=null,Wr=!0;const gf=function(n,e){p(!0,"Can't turn on custom loggers persistently."),gt.logLevel=k.VERBOSE,Gt=gt.log.bind(gt)},K=function(...n){if(Wr===!0&&(Wr=!1,Gt===null&&pf.get("logging_enabled")===!0&&gf()),Gt){const e=_n.apply(null,n);Gt(e)}},vn=function(n){return function(...e){K(n,...e)}},Ji=function(...n){const e="FIREBASE INTERNAL ERROR: "+_n(...n);gt.error(e)},Se=function(...n){const e=`FIREBASE FATAL ERROR: ${_n(...n)}`;throw gt.error(e),new Error(e)},X=function(...n){const e="FIREBASE WARNING: "+_n(...n);gt.warn(e)},_f=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&X("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Pa=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},vf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},It="[MIN_NAME]",st="[MAX_NAME]",Pt=function(n,e){if(n===e)return 0;if(n===It||e===st)return-1;if(e===It||n===st)return 1;{const t=jr(n),i=jr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},yf=function(n,e){return n===e?0:n<e?-1:1},xt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+B(e))},Ns=function(n){if(typeof n!="object"||n===null)return B(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=B(e[i]),t+=":",t+=Ns(n[e[i]]);return t+="}",t},La=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function Z(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Da=function(n){p(!Pa(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Ef=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},bf=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function If(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Tf=new RegExp("^-?(0*)\\d{1,10}$"),wf=-2147483648,Sf=2147483647,jr=function(n){if(Tf.test(n)){const e=Number(n);if(e>=wf&&e<=Sf)return e}return null},Lt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw X("Exception was thrown by user callback.",t),e},Math.floor(0))}},kf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Cf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){X(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Rf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',X(e)}}class Dn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Dn.OWNER="owner";/**
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
 */const Ps="5",Oa="v",Ma="s",xa="r",Fa="f",Ua=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Ba="ls",$a="p",Xi="ac",Va="websocket",Ha="long_polling";/**
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
 */class Ka{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Je.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Je.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Af(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ga(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===Va)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Ha)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Af(n)&&(t.ns=n.namespace);const s=[];return Z(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Nf{constructor(){this.counters_={}}incrementCounter(e,t=1){Ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return pc(this.counters_)}}/**
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
 */const Pi={},Li={};function Ls(n){const e=n.toString();return Pi[e]||(Pi[e]=new Nf),Pi[e]}function Pf(n,e){const t=n.toString();return Li[t]||(Li[t]=e()),Li[t]}/**
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
 */class Lf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Lt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const qr="start",Df="close",Of="pLPCommand",Mf="pRTLPCB",Wa="id",ja="pw",qa="ser",xf="cb",Ff="seg",Uf="ts",Bf="d",$f="dframe",za=1870,Ya=30,Vf=za-Ya,Hf=25e3,Kf=3e4;class ht{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=vn(e),this.stats_=Ls(t),this.urlFn=l=>(this.appCheckToken&&(l[Xi]=this.appCheckToken),Ga(t,Ha,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Lf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Kf)),vf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ds((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===qr)this.id=a,this.password=l;else if(o===Df)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[qr]="t",i[qa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[xf]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Oa]=Ps,this.transportSessionId&&(i[Ma]=this.transportSessionId),this.lastSessionId&&(i[Ba]=this.lastSessionId),this.applicationId&&(i[$a]=this.applicationId),this.appCheckToken&&(i[Xi]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ua.test(location.hostname)&&(i[xa]=Fa);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ht.forceAllow_=!0}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){return ht.forceAllow_?!0:!ht.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ef()&&!bf()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Do(t),s=La(i,Vf);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[$f]="t",i[Wa]=e,i[ja]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ds{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=mf(),window[Of+this.uniqueCallbackIdentifier]=e,window[Mf+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ds.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){K("frame writing exception"),a.stack&&K(a.stack),K(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wa]=this.myID,e[ja]=this.myPW,e[qa]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Ya+i.length<=za;){const o=this.pendingSegs.shift();i=i+"&"+Ff+s+"="+o.seg+"&"+Uf+s+"="+o.ts+"&"+Bf+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Hf)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Gf=16384,Wf=45e3;let qn=null;typeof MozWebSocket<"u"?qn=MozWebSocket:typeof WebSocket<"u"&&(qn=WebSocket);class le{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=vn(this.connId),this.stats_=Ls(t),this.connURL=le.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[Oa]=Ps,typeof location<"u"&&location.hostname&&Ua.test(location.hostname)&&(o[xa]=Fa),t&&(o[Ma]=t),i&&(o[Ba]=i),s&&(o[Xi]=s),r&&(o[$a]=r),Ga(e,Va,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Je.set("previous_websocket_failure",!0);try{let i;Sc(),this.mySock=new qn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&qn!==null&&!le.forceDisallow_}static previouslyFailed(){return Je.isInMemoryStorage||Je.get("previous_websocket_failure")===!0}markConnectionHealthy(){Je.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Qt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=La(t,Gf);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wf))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2;le.healthyTimeout=3e4;/**
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
 */class en{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ht,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let i=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||X("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[le];else{const s=this.transports_=[];for(const r of en.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);en.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}en.globalTransportInitialized_=!1;/**
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
 */const jf=6e4,qf=5e3,zf=10*1024,Yf=100*1024,Di="t",zr="d",Qf="s",Yr="r",Jf="e",Qr="o",Jr="a",Xr="n",Zr="p",Xf="h";class Zf{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=vn("c:"+this.id+":"),this.transportManager_=new en(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Wt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Di in e){const t=e[Di];t===Jr?this.upgradeIfSecondaryHealthy_():t===Yr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Qr&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=xt("t",e),i=xt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Zr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Jr,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Xr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=xt("t",e),i=xt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=xt(Di,e);if(zr in e){const i=e[zr];if(t===Xf){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Xr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qf?this.onConnectionShutdown_(i):t===Yr?this.onReset_(i):t===Jf?Ji("Server Error: "+i):t===Qr?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ji("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ps!==i&&X("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Wt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(jf))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(qf))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Zr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Je.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Qa{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class Ja{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class zn extends Ja{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new zn}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const eo=32,to=768;class C{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function S(){return new C("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ke(n){return n.pieces_.length-n.pieceNum_}function R(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new C(n.pieces_,e)}function Xa(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function ep(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Za(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function el(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new C(e,0)}function x(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof C)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new C(t,0)}function T(n){return n.pieceNum_>=n.pieces_.length}function Q(n,e){const t=b(n),i=b(e);if(t===null)return e;if(t===i)return Q(R(n),R(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Os(n,e){if(Ke(n)!==Ke(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ce(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ke(n)>Ke(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class tp{constructor(e,t){this.errorPrefix_=t,this.parts_=Za(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=ci(this.parts_[i]);tl(this)}}function np(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=ci(e),tl(n)}function ip(n){const e=n.parts_.pop();n.byteLength_-=ci(e),n.parts_.length>0&&(n.byteLength_-=1)}function tl(n){if(n.byteLength_>to)throw new Error(n.errorPrefix_+"has a key path longer than "+to+" bytes ("+n.byteLength_+").");if(n.parts_.length>eo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+eo+") or object contains a cycle "+Qe(n))}function Qe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ms extends Ja{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Ms}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ft=1e3,sp=300*1e3,no=30*1e3,rp=1.3,op=3e4,ap="server_kill",io=3;class Ie extends Qa{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ie.nextPersistentConnectionId_++,this.log_=vn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ft,this.maxReconnectDelay_=sp,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ms.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&zn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(B(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new li,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ie.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ce(e,"w")){const i=yt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();X(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Lc(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=no)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Pc(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ji("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ft,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ft,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>op&&(this.reconnectDelay_=Ft),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rp)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ie.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Zf(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{X(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(ap)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&X(d),l())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Vi(this.interruptReasons_)&&(this.reconnectDelay_=Ft,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Ns(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new C(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){K("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=io&&(this.reconnectDelay_=no,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){K("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=io&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ra.replace(/\./g,"-")]=1,fs()?e["framework.cordova"]=1:Uo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=zn.getInstance().currentlyOnline();return Vi(this.interruptReasons_)&&e}}Ie.nextPersistentConnectionId_=0;Ie.nextConnectionId_=0;/**
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
 */class pi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new I(It,e),s=new I(It,t);return this.compare(i,s)!==0}minPost(){return I.MIN}}/**
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
 */let kn;class nl extends pi{static get __EMPTY_NODE(){return kn}static set __EMPTY_NODE(e){kn=e}compare(e,t){return Pt(e.name,t.name)}isDefinedOn(e){throw Ct("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return I.MIN}maxPost(){return new I(st,kn)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new I(e,kn)}toString(){return".key"}}const _t=new nl;/**
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
 */class Cn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class U{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??U.RED,this.left=s??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,t,i,s,r){return new U(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return J.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}U.RED=!0;U.BLACK=!1;class lp{copy(e,t,i,s,r){return this}insert(e,t,i){return new U(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,t=J.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new J(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,U.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,U.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Cn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Cn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Cn(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new lp;/**
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
 */function cp(n,e){return Pt(n.name,e.name)}function xs(n,e){return Pt(n,e)}/**
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
 */let Zi;function dp(n){Zi=n}const il=function(n){return typeof n=="number"?"number:"+Da(n):"string:"+n},sl=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ce(e,".sv"),"Priority must be a string or number.")}else p(n===Zi||n.isEmpty(),"priority of unexpected type.");p(n===Zi||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let so;class F{constructor(e,t=F.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sl(this.priorityNode_)}static set __childrenNodeConstructor(e){so=e}static get __childrenNodeConstructor(){return so}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new F(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return T(e)?this:b(e)===".priority"?this.priorityNode_:F.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:F.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=b(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Ke(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,F.__childrenNodeConstructor.EMPTY_NODE.updateChild(R(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+il(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Da(this.value_):e+=this.value_,this.lazyHash_=Na(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===F.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof F.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=F.VALUE_TYPE_ORDER.indexOf(t),r=F.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}F.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rl,ol;function up(n){rl=n}function hp(n){ol=n}class fp extends pi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Pt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return I.MIN}maxPost(){return new I(st,new F("[PRIORITY-POST]",ol))}makePost(e,t){const i=rl(e);return new I(t,new F("[PRIORITY-POST]",i))}toString(){return".priority"}}const D=new fp;/**
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
 */const pp=Math.log(2);class mp{constructor(e){const t=r=>parseInt(Math.log(r)/pp,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Yn=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new U(h,d.node,U.BLACK,null,null);{const f=parseInt(u/2,10)+l,m=s(l,f),y=s(f+1,c);return d=n[f],h=t?t(d):d,new U(h,d.node,U.BLACK,m,y)}},r=function(l){let c=null,u=null,d=n.length;const h=function(m,y){const A=d-m,E=d;d-=m;const M=s(A+1,E),H=n[A],ee=t?t(H):H;f(new U(ee,H.node,y,null,M))},f=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const y=l.nextBitIsOne(),A=Math.pow(2,l.count-(m+1));y?h(A,U.BLACK):(h(A,U.BLACK),h(A,U.RED))}return u},o=new mp(n.length),a=r(o);return new J(i||e,a)};/**
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
 */let Oi;const dt={};class be{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(dt&&D,"ChildrenNode.ts has not been loaded"),Oi=Oi||new be({".priority":dt},{".priority":D}),Oi}get(e){const t=yt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof J?t:null}hasIndex(e){return Ce(this.indexSet_,e.toString())}addIndex(e,t){p(e!==_t,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(I.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=Yn(i,e.getCompare()):a=dt;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new be(u,c)}addToIndexes(e,t){const i=Bn(this.indexes_,(s,r)=>{const o=yt(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===dt)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(I.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Yn(a,o.getCompare())}else return dt;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new I(e.name,a))),l.insert(e,e.node)}});return new be(i,this.indexSet_)}removeFromIndexes(e,t){const i=Bn(this.indexes_,s=>{if(s===dt)return s;{const r=t.get(e.name);return r?s.remove(new I(e.name,r)):s}});return new be(i,this.indexSet_)}}/**
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
 */let Ut;class v{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&sl(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ut||(Ut=new v(new J(xs),null,be.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ut}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ut:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(R(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new I(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Ut:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=b(e);if(i===null)return t;{p(b(e)!==".priority"||Ke(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(R(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(D,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+il(this.getPriority().val())+":"),this.forEachChild(D,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Na(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new I(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new I(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new I(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,I.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yn?-1:0}withIndex(e){if(e===_t||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===_t||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(D),s=t.getIterator(D);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===_t?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class gp extends v{constructor(){super(new J(xs),v.EMPTY_NODE,be.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const yn=new gp;Object.defineProperties(I,{MIN:{value:new I(It,v.EMPTY_NODE)},MAX:{value:new I(st,yn)}});nl.__EMPTY_NODE=v.EMPTY_NODE;F.__childrenNodeConstructor=v;dp(yn);hp(yn);/**
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
 */const _p=!0;function V(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new F(t,V(e))}if(!(n instanceof Array)&&_p){const t=[];let i=!1;if(Z(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new I(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Yn(t,cp,o=>o.name,xs);if(i){const o=Yn(t,D.getCompare());return new v(r,V(e),new be({".priority":o},{".priority":D}))}else return new v(r,V(e),be.Default)}else{let t=v.EMPTY_NODE;return Z(n,(i,s)=>{if(Ce(n,i)&&i.substring(0,1)!=="."){const r=V(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(V(e))}}up(V);/**
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
 */class vp extends pi{constructor(e){super(),this.indexPath_=e,p(!T(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Pt(e.name,t.name):r}makePost(e,t){const i=V(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new I(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,yn);return new I(st,e)}toString(){return Za(this.indexPath_,0).join("/")}}/**
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
 */class yp extends pi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Pt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return I.MIN}maxPost(){return I.MAX}makePost(e,t){const i=V(e);return new I(t,i)}toString(){return".value"}}const Ep=new yp;/**
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
 */function al(n){return{type:"value",snapshotNode:n}}function Tt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function tn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function nn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function bp(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Fs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(tn(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Tt(t,i)):o.trackChildChange(nn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(D,(s,r)=>{t.hasChild(s)||i.trackChildChange(tn(s,r))}),t.isLeafNode()||t.forEachChild(D,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(nn(s,r,o))}else i.trackChildChange(Tt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class sn{constructor(e){this.indexedFilter_=new Fs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=sn.getStartPost_(e),this.endPost_=sn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new I(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(D,(o,a)=>{r.matches(new I(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ip{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new sn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new I(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new I(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(nn(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(tn(t,d));const y=a.updateImmediateChild(t,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Tt(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(tn(c.name,c.node)),r.trackChildChange(Tt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class Us{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=D}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:It}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:st}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===D}copy(){const e=new Us;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tp(n){return n.loadsAllData()?new Fs(n.getIndex()):n.hasLimit()?new Ip(n):new sn(n)}function ro(n){const e={};if(n.isDefault())return e;let t;if(n.index_===D?t="$priority":n.index_===Ep?t="$value":n.index_===_t?t="$key":(p(n.index_ instanceof vp,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=B(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=B(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+B(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=B(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+B(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function oo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==D&&(e.i=n.index_.toString()),e}/**
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
 */class Qn extends Qa{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=vn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Qn.getListenId_(e,i),a={};this.listens_[o]=a;const l=ro(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),yt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=Qn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=ro(e._queryParams),i=e._path.toString(),s=new li;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Rt(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Qt(a.responseText)}catch{X("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&X("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class wp{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Jn(){return{value:null,children:new Map}}function ll(n,e,t){if(T(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=b(e);n.children.has(i)||n.children.set(i,Jn());const s=n.children.get(i);e=R(e),ll(s,e,t)}}function es(n,e,t){n.value!==null?t(e,n.value):Sp(n,(i,s)=>{const r=new C(e.toString()+"/"+i);es(s,r,t)})}function Sp(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class kp{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Z(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ao=10*1e3,Cp=30*1e3,Rp=300*1e3;class Ap{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new kp(e);const i=ao+(Cp-ao)*Math.random();Wt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;Z(e,(s,r)=>{r>0&&Ce(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Wt(this.reportStats_.bind(this),Math.floor(Math.random()*2*Rp))}}/**
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
 */var de;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(de||(de={}));function cl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function $s(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Xn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=de.ACK_USER_WRITE,this.source=cl()}operationForChild(e){if(T(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new C(e));return new Xn(S(),t,this.revert)}}else return p(b(this.path)===e,"operationForChild called for unrelated child."),new Xn(R(this.path),this.affectedTree,this.revert)}}/**
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
 */class rn{constructor(e,t){this.source=e,this.path=t,this.type=de.LISTEN_COMPLETE}operationForChild(e){return T(this.path)?new rn(this.source,S()):new rn(this.source,R(this.path))}}/**
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
 */class rt{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=de.OVERWRITE}operationForChild(e){return T(this.path)?new rt(this.source,S(),this.snap.getImmediateChild(e)):new rt(this.source,R(this.path),this.snap)}}/**
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
 */class on{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=de.MERGE}operationForChild(e){if(T(this.path)){const t=this.children.subtree(new C(e));return t.isEmpty()?null:t.value?new rt(this.source,S(),t.value):new on(this.source,S(),t)}else return p(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new on(this.source,R(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ot{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(T(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Np{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Pp(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(bp(o.childName,o.snapshotNode))}),Bt(n,s,"child_removed",e,i,t),Bt(n,s,"child_added",e,i,t),Bt(n,s,"child_moved",r,i,t),Bt(n,s,"child_changed",e,i,t),Bt(n,s,"value",e,i,t),s}function Bt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Dp(n,a,l)),o.forEach(a=>{const l=Lp(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Lp(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Dp(n,e,t){if(e.childName==null||t.childName==null)throw Ct("Should only compare child_ events.");const i=new I(e.childName,e.snapshotNode),s=new I(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function mi(n,e){return{eventCache:n,serverCache:e}}function jt(n,e,t,i){return mi(new ot(e,t,i),n.serverCache)}function dl(n,e,t,i){return mi(n.eventCache,new ot(e,t,i))}function ts(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function at(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Mi;const Op=()=>(Mi||(Mi=new J(yf)),Mi);class N{constructor(e,t=Op()){this.value=e,this.children=t}static fromObject(e){let t=new N(null);return Z(e,(i,s)=>{t=t.set(new C(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:S(),value:this.value};if(T(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(R(e),t);return r!=null?{path:x(new C(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(T(e))return this;{const t=b(e),i=this.children.get(t);return i!==null?i.subtree(R(e)):new N(null)}}set(e,t){if(T(e))return new N(t,this.children);{const i=b(e),r=(this.children.get(i)||new N(null)).set(R(e),t),o=this.children.insert(i,r);return new N(this.value,o)}}remove(e){if(T(e))return this.children.isEmpty()?new N(null):new N(null,this.children);{const t=b(e),i=this.children.get(t);if(i){const s=i.remove(R(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new N(null):new N(this.value,r)}else return this}}get(e){if(T(e))return this.value;{const t=b(e),i=this.children.get(t);return i?i.get(R(e)):null}}setTree(e,t){if(T(e))return t;{const i=b(e),r=(this.children.get(i)||new N(null)).setTree(R(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new N(this.value,o)}}fold(e){return this.fold_(S(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(x(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,S(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(T(e))return null;{const r=b(e),o=this.children.get(r);return o?o.findOnPath_(R(e),x(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,S(),t)}foreachOnPath_(e,t,i){if(T(e))return this;{this.value&&i(t,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(R(e),x(t,s),i):new N(null)}}foreach(e){this.foreach_(S(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(x(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class ue{constructor(e){this.writeTree_=e}static empty(){return new ue(new N(null))}}function qt(n,e,t){if(T(e))return new ue(new N(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=Q(s,e);return r=r.updateChild(o,t),new ue(n.writeTree_.set(s,r))}else{const s=new N(t),r=n.writeTree_.setTree(e,s);return new ue(r)}}}function lo(n,e,t){let i=n;return Z(t,(s,r)=>{i=qt(i,x(e,s),r)}),i}function co(n,e){if(T(e))return ue.empty();{const t=n.writeTree_.setTree(e,new N(null));return new ue(t)}}function ns(n,e){return lt(n,e)!=null}function lt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Q(t.path,e)):null}function uo(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(D,(i,s)=>{e.push(new I(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new I(i,s.value))}),e}function $e(n,e){if(T(e))return n;{const t=lt(n,e);return t!=null?new ue(new N(t)):new ue(n.writeTree_.subtree(e))}}function is(n){return n.writeTree_.isEmpty()}function wt(n,e){return ul(S(),n.writeTree_,e)}function ul(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=ul(x(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(x(n,".priority"),i)),t}}/**
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
 */function Vs(n,e){return ml(e,n)}function Mp(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=qt(n.visibleWrites,e,t)),n.lastWriteId=i}function xp(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Fp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Up(a,i.path)?s=!1:ce(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return Bp(n),!0;if(i.snap)n.visibleWrites=co(n.visibleWrites,i.path);else{const a=i.children;Z(a,l=>{n.visibleWrites=co(n.visibleWrites,x(i.path,l))})}return!0}else return!1}function Up(n,e){if(n.snap)return ce(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ce(x(n.path,t),e))return!0;return!1}function Bp(n){n.visibleWrites=hl(n.allWrites,$p,S()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function $p(n){return n.visible}function hl(n,e,t){let i=ue.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)ce(t,o)?(a=Q(t,o),i=qt(i,a,r.snap)):ce(o,t)&&(a=Q(o,t),i=qt(i,S(),r.snap.getChild(a)));else if(r.children){if(ce(t,o))a=Q(t,o),i=lo(i,a,r.children);else if(ce(o,t))if(a=Q(o,t),T(a))i=lo(i,S(),r.children);else{const l=yt(r.children,b(a));if(l){const c=l.getChild(R(a));i=qt(i,S(),c)}}}else throw Ct("WriteRecord should have .snap or .children")}}return i}function fl(n,e,t,i,s){if(!i&&!s){const r=lt(n.visibleWrites,e);if(r!=null)return r;{const o=$e(n.visibleWrites,e);if(is(o))return t;if(t==null&&!ns(o,S()))return null;{const a=t||v.EMPTY_NODE;return wt(o,a)}}}else{const r=$e(n.visibleWrites,e);if(!s&&is(r))return t;if(!s&&t==null&&!ns(r,S()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(ce(c.path,e)||ce(e,c.path))},a=hl(n.allWrites,o,e),l=t||v.EMPTY_NODE;return wt(a,l)}}}function Vp(n,e,t){let i=v.EMPTY_NODE;const s=lt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(D,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=$e(n.visibleWrites,e);return t.forEachChild(D,(o,a)=>{const l=wt($e(r,new C(o)),a);i=i.updateImmediateChild(o,l)}),uo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=$e(n.visibleWrites,e);return uo(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Hp(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=x(e,t);if(ns(n.visibleWrites,r))return null;{const o=$e(n.visibleWrites,r);return is(o)?s.getChild(t):wt(o,s.getChild(t))}}function Kp(n,e,t,i){const s=x(e,t),r=lt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=$e(n.visibleWrites,s);return wt(o,i.getNode().getImmediateChild(t))}else return null}function Gp(n,e){return lt(n.visibleWrites,e)}function Wp(n,e,t,i,s,r,o){let a;const l=$e(n.visibleWrites,e),c=lt(l,S());if(c!=null)a=c;else if(t!=null)a=wt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function jp(){return{visibleWrites:ue.empty(),allWrites:[],lastWriteId:-1}}function Zn(n,e,t,i){return fl(n.writeTree,n.treePath,e,t,i)}function Hs(n,e){return Vp(n.writeTree,n.treePath,e)}function ho(n,e,t,i){return Hp(n.writeTree,n.treePath,e,t,i)}function ei(n,e){return Gp(n.writeTree,x(n.treePath,e))}function qp(n,e,t,i,s,r){return Wp(n.writeTree,n.treePath,e,t,i,s,r)}function Ks(n,e,t){return Kp(n.writeTree,n.treePath,e,t)}function pl(n,e){return ml(x(n.treePath,e),n.writeTree)}function ml(n,e){return{treePath:n,writeTree:e}}/**
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
 */class zp{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,nn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,tn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Tt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,nn(i,e.snapshotNode,s.oldSnap));else throw Ct("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Yp{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const gl=new Yp;class Gs{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new ot(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ks(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:at(this.viewCache_),r=qp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Qp(n){return{filter:n}}function Jp(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Xp(n,e,t,i,s){const r=new zp;let o,a;if(t.type===de.OVERWRITE){const c=t;c.source.fromUser?o=ss(n,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!T(c.path),o=ti(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===de.MERGE){const c=t;c.source.fromUser?o=em(n,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=rs(n,e,c.path,c.children,i,s,a,r))}else if(t.type===de.ACK_USER_WRITE){const c=t;c.revert?o=im(n,e,c.path,i,s,r):o=tm(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===de.LISTEN_COMPLETE)o=nm(n,e,t.path,i,r);else throw Ct("Unknown operation type: "+t.type);const l=r.getChanges();return Zp(e,o,l),{viewCache:o,changes:l}}function Zp(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ts(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(al(ts(e)))}}function _l(n,e,t,i,s,r){const o=e.eventCache;if(ei(i,t)!=null)return e;{let a,l;if(T(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=at(e),u=c instanceof v?c:v.EMPTY_NODE,d=Hs(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Zn(i,at(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=b(t);if(c===".priority"){p(Ke(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ho(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=R(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=ho(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Ks(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return jt(e,a,o.isFullyInitialized()||T(t),n.filter.filtersNodes())}}function ti(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(T(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=b(t);if(!l.isCompleteForPath(t)&&Ke(t)>1)return e;const m=R(t),A=l.getNode().getImmediateChild(f).updateChild(m,i);f===".priority"?c=u.updatePriority(l.getNode(),A):c=u.updateChild(l.getNode(),f,A,m,gl,null)}const d=dl(e,c,l.isFullyInitialized()||T(t),u.filtersNodes()),h=new Gs(s,d,r);return _l(n,d,t,s,h,a)}function ss(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Gs(s,e,r);if(T(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=jt(e,c,!0,n.filter.filtersNodes());else{const d=b(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=jt(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=R(t),f=a.getNode().getImmediateChild(d);let m;if(T(h))m=i;else{const y=u.getCompleteChild(d);y!=null?Xa(h)===".priority"&&y.getChild(el(h)).isEmpty()?m=y:m=y.updateChild(h,i):m=v.EMPTY_NODE}if(f.equals(m))l=e;else{const y=n.filter.updateChild(a.getNode(),d,m,h,u,o);l=jt(e,y,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function fo(n,e){return n.eventCache.isCompleteForChild(e)}function em(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=x(t,l);fo(e,b(u))&&(a=ss(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=x(t,l);fo(e,b(u))||(a=ss(n,a,u,c,s,r,o))}),a}function po(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function rs(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;T(t)?c=i:c=new N(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=po(n,f,h);l=ti(n,l,new C(d),m,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),y=po(n,m,h);l=ti(n,l,new C(d),y,s,r,o,a)}}),l}function tm(n,e,t,i,s,r,o){if(ei(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(T(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return ti(n,e,t,l.getNode().getChild(t),s,r,a,o);if(T(t)){let c=new N(null);return l.getNode().forEachChild(_t,(u,d)=>{c=c.set(new C(u),d)}),rs(n,e,t,c,s,r,a,o)}else return e}else{let c=new N(null);return i.foreach((u,d)=>{const h=x(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),rs(n,e,t,c,s,r,a,o)}}function nm(n,e,t,i,s){const r=e.serverCache,o=dl(e,r.getNode(),r.isFullyInitialized()||T(t),r.isFiltered());return _l(n,o,t,i,gl,s)}function im(n,e,t,i,s,r){let o;if(ei(i,t)!=null)return e;{const a=new Gs(i,e,s),l=e.eventCache.getNode();let c;if(T(t)||b(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Zn(i,at(e));else{const d=e.serverCache.getNode();p(d instanceof v,"serverChildren would be complete if leaf node"),u=Hs(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=b(t);let d=Ks(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,R(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,v.EMPTY_NODE,R(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Zn(i,at(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ei(i,S())!=null,jt(e,c,o,n.filter.filtersNodes())}}/**
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
 */class sm{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new Fs(i.getIndex()),r=Tp(i);this.processor_=Qp(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new ot(l,o.isFullyInitialized(),s.filtersNodes()),d=new ot(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=mi(d,u),this.eventGenerator_=new Np(this.query_)}get query(){return this.query_}}function rm(n){return n.viewCache_.serverCache.getNode()}function om(n,e){const t=at(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!T(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function mo(n){return n.eventRegistrations_.length===0}function am(n,e){n.eventRegistrations_.push(e)}function go(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function _o(n,e,t,i){e.type===de.MERGE&&e.source.queryId!==null&&(p(at(n.viewCache_),"We should always have a full cache before handling merges"),p(ts(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Xp(n.processor_,s,e,t,i);return Jp(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,vl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function lm(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(D,(r,o)=>{i.push(Tt(r,o))}),t.isFullyInitialized()&&i.push(al(t.getNode())),vl(n,i,t.getNode(),e)}function vl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Pp(n.eventGenerator_,e,t,s)}/**
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
 */let ni;class cm{constructor(){this.views=new Map}}function dm(n){p(!ni,"__referenceConstructor has already been defined"),ni=n}function um(){return p(ni,"Reference.ts has not been loaded"),ni}function hm(n){return n.views.size===0}function Ws(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),_o(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(_o(o,e,t,i));return r}}function fm(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Zn(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=Hs(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=mi(new ot(a,l,!1),new ot(i,s,!1));return new sm(e,c)}return o}function pm(n,e,t,i,s,r){const o=fm(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),am(o,t),lm(o,t)}function mm(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ge(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(go(c,t,i)),mo(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(go(l,t,i)),mo(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ge(n)&&r.push(new(um())(e._repo,e._path)),{removed:r,events:o}}function yl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function vt(n,e){let t=null;for(const i of n.views.values())t=t||om(i,e);return t}function El(n,e){if(e._queryParams.loadsAllData())return gi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function bl(n,e){return El(n,e)!=null}function Ge(n){return gi(n)!=null}function gi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ii;function gm(n){p(!ii,"__referenceConstructor has already been defined"),ii=n}function _m(){return p(ii,"Reference.ts has not been loaded"),ii}let vm=1;class vo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new N(null),this.pendingWriteTree_=jp(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Il(n,e,t,i,s){return Mp(n.pendingWriteTree_,e,t,i,s),s?En(n,new rt(cl(),e,t)):[]}function Xe(n,e,t=!1){const i=xp(n.pendingWriteTree_,e);if(Fp(n.pendingWriteTree_,e)){let r=new N(null);return i.snap!=null?r=r.set(S(),!0):Z(i.children,o=>{r=r.set(new C(o),!0)}),En(n,new Xn(i.path,r,t))}else return[]}function _i(n,e,t){return En(n,new rt(Bs(),e,t))}function ym(n,e,t){const i=N.fromObject(t);return En(n,new on(Bs(),e,i))}function Em(n,e){return En(n,new rn(Bs(),e))}function bm(n,e,t){const i=qs(n,t);if(i){const s=zs(i),r=s.path,o=s.queryId,a=Q(r,e),l=new rn($s(o),a);return Ys(n,r,l)}else return[]}function os(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||bl(o,e))){const l=mm(o,e,t,i);hm(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>Ge(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=wm(h);for(let m=0;m<f.length;++m){const y=f[m],A=y.query,E=Sl(n,y);n.listenProvider_.startListening(zt(A),si(n,A),E.hashFn,E.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(zt(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(vi(h));n.listenProvider_.stopListening(zt(h),f)}))}Sm(n,c)}return a}function Im(n,e,t,i){const s=qs(n,i);if(s!=null){const r=zs(s),o=r.path,a=r.queryId,l=Q(o,e),c=new rt($s(a),l,t);return Ys(n,o,c)}else return[]}function Tm(n,e,t,i){const s=qs(n,i);if(s){const r=zs(s),o=r.path,a=r.queryId,l=Q(o,e),c=N.fromObject(t),u=new on($s(a),l,c);return Ys(n,o,u)}else return[]}function yo(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const m=Q(h,s);r=r||vt(f,m),o=o||Ge(f)});let a=n.syncPointTree_.get(s);a?(o=o||Ge(a),r=r||vt(a,S())):(a=new cm,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,m)=>{const y=vt(m,S());y&&(r=r.updateImmediateChild(f,y))}));const c=bl(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=vi(e);p(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=km();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=Vs(n.pendingWriteTree_,s);let d=pm(a,e,t,u,r,l);if(!c&&!o&&!i){const h=El(a,e);d=d.concat(Cm(n,e,h))}return d}function js(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Q(o,e),c=vt(a,l);if(c)return c});return fl(s,e,r,t,!0)}function En(n,e){return Tl(e,n.syncPointTree_,null,Vs(n.pendingWriteTree_,S()))}function Tl(n,e,t,i){if(T(n.path))return wl(n,e,t,i);{const s=e.get(S());t==null&&s!=null&&(t=vt(s,S()));let r=[];const o=b(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=pl(i,o);r=r.concat(Tl(a,l,c,u))}return s&&(r=r.concat(Ws(s,n,i,t))),r}}function wl(n,e,t,i){const s=e.get(S());t==null&&s!=null&&(t=vt(s,S()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=pl(i,o),u=n.operationForChild(o);u&&(r=r.concat(wl(u,a,l,c)))}),s&&(r=r.concat(Ws(s,n,i,t))),r}function Sl(n,e){const t=e.query,i=si(n,t);return{hashFn:()=>(rm(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?bm(n,t._path,i):Em(n,t._path);{const r=If(s,t);return os(n,t,null,r)}}}}function si(n,e){const t=vi(e);return n.queryToTagMap.get(t)}function vi(n){return n._path.toString()+"$"+n._queryIdentifier}function qs(n,e){return n.tagToQueryMap.get(e)}function zs(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new C(n.substr(0,e))}}function Ys(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=Vs(n.pendingWriteTree_,e);return Ws(i,t,s,null)}function wm(n){return n.fold((e,t,i)=>{if(t&&Ge(t))return[gi(t)];{let s=[];return t&&(s=yl(t)),Z(i,(r,o)=>{s=s.concat(o)}),s}})}function zt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(_m())(n._repo,n._path):n}function Sm(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=vi(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function km(){return vm++}function Cm(n,e,t){const i=e._path,s=si(n,e),r=Sl(n,t),o=n.listenProvider_.startListening(zt(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!Ge(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!T(c)&&u&&Ge(u))return[gi(u).query];{let h=[];return u&&(h=h.concat(yl(u).map(f=>f.query))),Z(d,(f,m)=>{h=h.concat(m)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(zt(u),si(n,u))}}return o}/**
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
 */class Qs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qs(t)}node(){return this.node_}}class Js{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=x(this.path_,e);return new Js(this.syncTree_,t)}node(){return js(this.syncTree_,this.path_)}}const Rm=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Eo=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Am(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Nm(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Am=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Nm=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Pm=function(n,e,t,i){return Xs(e,new Js(t,n),i)},kl=function(n,e,t){return Xs(n,new Qs(e),t)};function Xs(n,e,t){const i=n.getPriority().val(),s=Eo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Eo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new F(a,V(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new F(s))),o.forEachChild(D,(a,l)=>{const c=Xs(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Zs{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function er(n,e){let t=e instanceof C?e:new C(e),i=n,s=b(t);for(;s!==null;){const r=yt(i.node.children,s)||{children:{},childCount:0};i=new Zs(s,i,r),t=R(t),s=b(t)}return i}function Dt(n){return n.node.value}function Cl(n,e){n.node.value=e,as(n)}function Rl(n){return n.node.childCount>0}function Lm(n){return Dt(n)===void 0&&!Rl(n)}function yi(n,e){Z(n.node.children,(t,i)=>{e(new Zs(t,n,i))})}function Al(n,e,t,i){t&&e(n),yi(n,s=>{Al(s,e,!0)})}function Dm(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function bn(n){return new C(n.parent===null?n.name:bn(n.parent)+"/"+n.name)}function as(n){n.parent!==null&&Om(n.parent,n.name,n)}function Om(n,e,t){const i=Lm(t),s=Ce(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,as(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,as(n))}/**
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
 */const Mm=/[\[\].#$\/\u0000-\u001F\u007F]/,xm=/[\[\].#$\u0000-\u001F\u007F]/,xi=10*1024*1024,Nl=function(n){return typeof n=="string"&&n.length!==0&&!Mm.test(n)},Pl=function(n){return typeof n=="string"&&n.length!==0&&!xm.test(n)},Fm=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pl(n)},Ll=function(n,e,t,i){i&&e===void 0||tr(ps(n,"value"),e,t)},tr=function(n,e,t){const i=t instanceof C?new tp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Qe(i));if(typeof e=="function")throw new Error(n+"contains a function "+Qe(i)+" with contents = "+e.toString());if(Pa(e))throw new Error(n+"contains "+e.toString()+" "+Qe(i));if(typeof e=="string"&&e.length>xi/3&&ci(e)>xi)throw new Error(n+"contains a string greater than "+xi+" utf8 bytes "+Qe(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(Z(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nl(o)))throw new Error(n+" contains an invalid key ("+o+") "+Qe(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);np(i,o),tr(n,a,i),ip(i)}),s&&r)throw new Error(n+' contains ".value" child '+Qe(i)+" in addition to actual children.")}},Dl=function(n,e,t,i){if(!Pl(t))throw new Error(ps(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Um=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Dl(n,e,t)},nr=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},Bm=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nl(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Fm(t))throw new Error(ps(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class $m{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ir(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Os(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Ol(n,e,t){ir(n,t),Ml(n,i=>Os(i,e))}function ke(n,e,t){ir(n,t),Ml(n,i=>ce(i,e)||ce(e,i))}function Ml(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Vm(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Vm(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();Gt&&K("event: "+t.toString()),Lt(i)}}}/**
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
 */const Hm="repo_interrupt",Km=25;class Gm{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $m,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Jn(),this.transactionQueueTree_=new Zs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Wm(n,e,t){if(n.stats_=Ls(n.repoInfo_),n.forceRestClient_||kf())n.server_=new Qn(n.repoInfo_,(i,s,r,o)=>{bo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Io(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ie(n.repoInfo_,e,(i,s,r,o)=>{bo(n,i,s,r,o)},i=>{Io(n,i)},i=>{jm(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Pf(n.repoInfo_,()=>new Ap(n.stats_,n.server_)),n.infoData_=new wp,n.infoSyncTree_=new vo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=_i(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),rr(n,"connected",!1),n.serverSyncTree_=new vo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);ke(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function xl(n){const t=n.infoData_.getNode(new C(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function sr(n){return Rm({timestamp:xl(n)})}function bo(n,e,t,i,s){n.dataUpdateCount++;const r=new C(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=Bn(t,c=>V(c));o=Tm(n.serverSyncTree_,r,l,s)}else{const l=V(t);o=Im(n.serverSyncTree_,r,l,s)}else if(i){const l=Bn(t,c=>V(c));o=ym(n.serverSyncTree_,r,l)}else{const l=V(t);o=_i(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ei(n,r)),ke(n.eventQueue_,a,o)}function Io(n,e){rr(n,"connected",e),e===!1&&zm(n)}function jm(n,e){Z(e,(t,i)=>{rr(n,t,i)})}function rr(n,e,t){const i=new C("/.info/"+e),s=V(t);n.infoData_.updateSnapshot(i,s);const r=_i(n.infoSyncTree_,i,s);ke(n.eventQueue_,i,r)}function Fl(n){return n.nextWriteId_++}function qm(n,e,t,i,s){or(n,"set",{path:e.toString(),value:t,priority:i});const r=sr(n),o=V(t,i),a=js(n.serverSyncTree_,e),l=kl(o,a,r),c=Fl(n),u=Il(n.serverSyncTree_,e,l,c,!0);ir(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const m=h==="ok";m||X("set at "+e+" failed: "+h);const y=Xe(n.serverSyncTree_,c,!m);ke(n.eventQueue_,e,y),Xm(n,s,h,f)});const d=Hl(n,e);Ei(n,d),ke(n.eventQueue_,d,[])}function zm(n){or(n,"onDisconnectEvents");const e=sr(n),t=Jn();es(n.onDisconnect_,S(),(s,r)=>{const o=Pm(s,r,n.serverSyncTree_,e);ll(t,s,o)});let i=[];es(t,S(),(s,r)=>{i=i.concat(_i(n.serverSyncTree_,s,r));const o=Hl(n,s);Ei(n,o)}),n.onDisconnect_=Jn(),ke(n.eventQueue_,S(),i)}function Ym(n,e,t){let i;b(e._path)===".info"?i=yo(n.infoSyncTree_,e,t):i=yo(n.serverSyncTree_,e,t),Ol(n.eventQueue_,e._path,i)}function Qm(n,e,t){let i;b(e._path)===".info"?i=os(n.infoSyncTree_,e,t):i=os(n.serverSyncTree_,e,t),Ol(n.eventQueue_,e._path,i)}function Jm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Hm)}function or(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),K(t,...e)}function Xm(n,e,t,i){e&&Lt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function Ul(n,e,t){return js(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function ar(n,e=n.transactionQueueTree_){if(e||bi(n,e),Dt(e)){const t=$l(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&Zm(n,bn(e),t)}else Rl(e)&&yi(e,t=>{ar(n,t)})}function Zm(n,e,t){const i=t.map(c=>c.currentWriteId),s=Ul(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=Q(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{or(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(Xe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();bi(n,er(n.transactionQueueTree_,e)),ar(n,n.transactionQueueTree_),ke(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)Lt(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{X("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Ei(n,e)}},o)}function Ei(n,e){const t=Bl(n,e),i=bn(t),s=$l(n,t);return eg(n,s,i),i}function eg(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Q(t,l.path);let u=!1,d;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Km)u=!0,d="maxretry",s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0));else{const h=Ul(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){tr("transaction failed: Data returned ",f,l.path);let m=V(f);typeof f=="object"&&f!=null&&Ce(f,".priority")||(m=m.updatePriority(h.getPriority()));const A=l.currentWriteId,E=sr(n),M=kl(m,h,E);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=M,l.currentWriteId=Fl(n),o.splice(o.indexOf(A),1),s=s.concat(Il(n.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),s=s.concat(Xe(n.serverSyncTree_,A,!0))}else u=!0,d="nodata",s=s.concat(Xe(n.serverSyncTree_,l.currentWriteId,!0))}ke(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}bi(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Lt(i[a]);ar(n,n.transactionQueueTree_)}function Bl(n,e){let t,i=n.transactionQueueTree_;for(t=b(e);t!==null&&Dt(i)===void 0;)i=er(i,t),e=R(e),t=b(e);return i}function $l(n,e){const t=[];return Vl(n,e,t),t.sort((i,s)=>i.order-s.order),t}function Vl(n,e,t){const i=Dt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);yi(e,s=>{Vl(n,s,t)})}function bi(n,e){const t=Dt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Cl(e,t.length>0?t:void 0)}yi(e,i=>{bi(n,i)})}function Hl(n,e){const t=bn(Bl(n,e)),i=er(n.transactionQueueTree_,e);return Dm(i,s=>{Fi(n,s)}),Fi(n,i),Al(i,s=>{Fi(n,s)}),t}function Fi(n,e){const t=Dt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(Xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Cl(e,void 0):t.length=r+1,ke(n.eventQueue_,bn(e),s);for(let o=0;o<i.length;o++)Lt(i[o])}}/**
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
 */function tg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function ng(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):X(`Invalid query segment '${t}' in query '${n}'`)}return e}const To=function(n,e){const t=ig(n),i=t.namespace;t.domain==="firebase.com"&&Se(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Se("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_f();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ka(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new C(t.pathString)}},ig=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=tg(n.substring(u,d)));const h=ng(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");i=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const wo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",sg=(function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=wo.charAt(t%64),t=Math.floor(t/64);p(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=wo.charAt(e[s]);return p(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class rg{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class og{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class ag{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class lr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return T(this._path)?null:Xa(this._path)}get ref(){return new qe(this._repo,this._path)}get _queryIdentifier(){const e=oo(this._queryParams),t=Ns(e);return t==="{}"?"default":t}get _queryObject(){return oo(this._queryParams)}isEqual(e){if(e=$(e),!(e instanceof lr))return!1;const t=this._repo===e._repo,i=Os(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ep(this._path)}}class qe extends lr{constructor(e,t){super(e,t,new Us,!1)}get parent(){const e=el(this._path);return e===null?null:new qe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ri{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new C(e),i=an(this.ref,e);return new ri(this._node.getChild(t),i,D)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new ri(s,an(this.ref,i),D)))}hasChild(e){const t=new C(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ot(n,e){return n=$(n),n._checkNotDeleted("ref"),e!==void 0?an(n._root,e):n._root}function an(n,e){return n=$(n),b(n._path)===null?Um("child","path",e):Dl("child","path",e),new qe(n._repo,x(n._path,e))}function Kl(n,e){n=$(n),nr("push",n._path),Ll("push",e,n._path,!0);const t=xl(n._repo),i=sg(t),s=an(n,i),r=an(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function lg(n){return nr("remove",n._path),Ii(n,null)}function Ii(n,e){n=$(n),nr("set",n._path),Ll("set",e,n._path,!1);const t=new li;return qm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class cr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new rg("value",this,new ri(e.snapshotNode,new qe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new og(this,e,t):null}matches(e){return e instanceof cr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function cg(n,e,t,i,s){const r=new ag(t,void 0),o=new cr(r);return Ym(n._repo,n,o),()=>Qm(n._repo,n,o)}function Gl(n,e,t,i){return cg(n,"value",e)}dm(qe);gm(qe);/**
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
 */const dg="FIREBASE_DATABASE_EMULATOR_HOST",ls={};let ug=!1;function hg(n,e,t,i){n.repoInfo_=new Ka(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function fg(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Se("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=To(r,s),a=o.repoInfo,l;typeof process<"u"&&Hr&&(l=Hr[dg]),l?(r=`http://${l}?ns=${a.namespace}`,o=To(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Rf(n.name,n.options,e);Bm("Invalid Firebase Database URL",o),T(o.path)||Se("Database URL must point to the root of a Firebase Database (not including a child path).");const u=mg(a,n,c,new Cf(n.name,t));return new gg(u,n)}function pg(n,e){const t=ls[e];(!t||t[n.key]!==n)&&Se(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Jm(n),delete t[n.key]}function mg(n,e,t,i){let s=ls[e.name];s||(s={},ls[e.name]=s);let r=s[n.toURLString()];return r&&Se("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Gm(n,ug,t,i),s[n.toURLString()]=r,r}class gg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Wm(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new qe(this._repo,S())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Se("Cannot call "+e+" on a deleted database.")}}function _g(n=Ko(),e){const t=_s(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ec("database");i&&vg(t,...i)}return t}function vg(n,e,t,i={}){n=$(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Se("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Se('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Dn(Dn.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:bc(i.mockUserToken,n.app.options.projectId);r=new Dn(o)}hg(s,e,t,r)}/**
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
 */function yg(n){uf(At),Et(new nt("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fg(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ue(Kr,Gr,n),Ue(Kr,Gr,"esm2017")}Ie.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ie.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};yg();const Eg={apiKey:"AIzaSyBXqi_wmAdr5AbiS9k8Rul1ERbg5Tn73MI",authDomain:"tegelv2.firebaseapp.com",databaseURL:"https://tegelv2.firebaseio.com",projectId:"tegelv2",storageBucket:"tegelv2.firebasestorage.app",messagingSenderId:"1053223905500",appId:"1:1053223905500:web:fc9f7d25213aea0d18ec19"},Wl=Ho(Eg),ne=cf(Wl),Mt=_g(Wl);function bg(n){const e=Ot(Mt,"events");return Gl(e,t=>{const i=t.val();if(!i){n([]);return}const s=Object.keys(i).map(r=>({...i[r],id:r}));n(s)})}async function Ig(n){const e=Ot(Mt,"events"),t=Kl(e);return Ii(t,n)}async function dr(n){const e=Ot(Mt,`events/${n}`);return Ii(e,null)}async function Tg(n){const e=n.map(t=>dr(t));return Promise.all(e)}function wg(n){const e=Ot(Mt,"chalkboard");return Gl(e,t=>{const i=t.val();if(!i){n([]);return}const s=Object.keys(i).map(r=>({...i[r],id:r}));n(s)})}async function Sg(n){const e=Ot(Mt,"chalkboard"),t=Kl(e);return Ii(t,n)}async function kg(){const n=Ot(Mt,"chalkboard");return lg(n)}function Cg(){const n=document.getElementById("synth-canvas");if(!n)return;const e=n.getContext("2d");if(!e)return;let t=n.width=window.innerWidth,i=n.height=window.innerHeight;window.addEventListener("resize",()=>{t=n.width=window.innerWidth,i=n.height=window.innerHeight});let s=0;const r=Array.from({length:100},()=>({x:Math.random()*t,y:Math.random()*i,size:Math.random()*2,speed:Math.random()*.05}));function o(){if(!e)return;e.clearRect(0,0,t,i);const a=e.createLinearGradient(0,0,0,i);a.addColorStop(0,"#0d0221"),a.addColorStop(.5,"#240b36"),a.addColorStop(1,"#0d0221"),e.fillStyle=a,e.fillRect(0,0,t,i),e.fillStyle="#fff",r.forEach(f=>{e.globalAlpha=.2+Math.sin(Date.now()*.001+f.x)*.3,e.fillRect(f.x,f.y,f.size,f.size)}),e.globalAlpha=1;const l=i*.45,c=Math.min(t,i)*.25,u=e.createLinearGradient(0,l-c,0,l+c);u.addColorStop(0,"#ff00ff"),u.addColorStop(1,"#ff8800"),e.shadowBlur=40,e.shadowColor="#ff00ff",e.fillStyle=u,e.beginPath(),e.arc(t/2,l,c,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#0d0221";for(let f=0;f<15;f++){const m=2+f*2,y=l+f*(c*2/15)-10;y>l-c&&y<l+c&&e.fillRect(t/2-c,y,c*2,m)}e.strokeStyle="#00ffff",e.lineWidth=2,e.beginPath(),e.moveTo(0,i*.6),e.lineTo(t,i*.6),e.stroke();const d=i*.6,h=i-d;e.strokeStyle="#ff00ff",e.lineWidth=1;for(let f=-10;f<=10;f++){const m=t/2+f*(t/20),y=t/2+f*(t/2);e.beginPath(),e.moveTo(m,d),e.lineTo(y,i),e.stroke()}s=(s+1)%40;for(let f=0;f<20;f++){const m=(f*40+s)/800,y=d+Math.pow(m,2)*h;e.globalAlpha=m,e.beginPath(),e.moveTo(0,y),e.lineTo(t,y),e.stroke()}e.globalAlpha=1,requestAnimationFrame(o)}o()}const jl=["January","February","March","April","May","June","July","August","September","October","November","December"];function ql(n,e,t){const i=[],s=new Date(n,e+1,0);for(let r=1;r<=s.getDate();r++){const o=new Date(n,e,r),a=o.getTime(),l=new Date(n,e,r,23,59,59,999).getTime(),c=t.filter(m=>m.start<l&&m.end>a),u=o.getFullYear(),d=String(o.getMonth()+1).padStart(2,"0"),h=String(o.getDate()).padStart(2,"0"),f=`${u}-${d}-${h}`;i.push({date:f,dayOfMonth:r,events:c})}return{days:i}}function Rg(n,e,t,i){const s=[];let r=n,o=e;for(let a=0;a<t;a++){const l=ql(r,o,i),c=new Date(r,o,1).getDay();s.push({year:r,month:o,monthName:jl[o],days:l.days,firstDayOfWeek:c}),o++,o>11&&(o=0,r++)}return{months:s}}function Ag(n,e){return e.some(t=>n.start<t.end&&n.end>t.start)}class Ng{constructor(e){Ae(this,"canvas");Ae(this,"ctx");Ae(this,"isDrawing",!1);Ae(this,"currentPoints",[]);Ae(this,"currentColor","#00ffff");Ae(this,"currentWidth",3);Ae(this,"allLines",[]);e.innerHTML=`
            <div class="chalkboard-container">
                <div class="chalkboard-controls">
                    <input type="color" id="chalk-color" value="#00ffff">
                    <input type="range" id="chalk-width" min="1" max="10" value="3">
                    <button id="clear-chalkboard" class="small-btn-neon">Clear Board</button>
                    <button id="back-to-calendar" class="small-btn-neon" style="border-color: #ff00ff; color: #ff00ff;">Calendar</button>
                </div>
                <canvas id="chalkboard-canvas"></canvas>
            </div>
        `,this.canvas=document.getElementById("chalkboard-canvas"),this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize()),this.initEvents(),this.initFirebase()}resize(){var t;const e=(t=this.canvas.parentElement)==null?void 0:t.getBoundingClientRect();e&&(this.canvas.width=e.width,this.canvas.height=e.height-60),this.redraw()}initEvents(){const e=document.getElementById("chalk-color"),t=document.getElementById("chalk-width"),i=document.getElementById("clear-chalkboard");e.addEventListener("change",()=>this.currentColor=e.value),t.addEventListener("change",()=>this.currentWidth=parseInt(t.value)),i==null||i.addEventListener("click",()=>{ai("Clear the entire board? This will delete everyone's drawings!",()=>{kg()})}),this.canvas.addEventListener("mousedown",s=>this.startDrawing(s)),this.canvas.addEventListener("mousemove",s=>this.draw(s)),this.canvas.addEventListener("mouseup",()=>this.stopDrawing()),this.canvas.addEventListener("mouseleave",()=>this.stopDrawing()),this.canvas.addEventListener("touchstart",s=>{s.preventDefault();const r=s.touches[0];this.startDrawing(r)}),this.canvas.addEventListener("touchmove",s=>{s.preventDefault();const r=s.touches[0];this.draw(r)}),this.canvas.addEventListener("touchend",()=>this.stopDrawing())}initFirebase(){wg(e=>{this.allLines=e,this.redraw()})}getMousePos(e){const t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}startDrawing(e){this.isDrawing=!0;const t=this.getMousePos(e);this.currentPoints=[t],this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.strokeStyle=this.currentColor,this.ctx.lineWidth=this.currentWidth,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.shadowBlur=10,this.ctx.shadowColor=this.currentColor}draw(e){if(!this.isDrawing)return;const t=this.getMousePos(e);this.currentPoints.push(t),this.ctx.lineTo(t.x,t.y),this.ctx.stroke()}async stopDrawing(){if(!this.isDrawing)return;this.isDrawing=!1;const e=ne.currentUser;e&&this.currentPoints.length>1&&await Sg({userId:e.uid,color:this.currentColor,width:this.currentWidth,points:this.currentPoints}),this.currentPoints=[]}redraw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.allLines.forEach(e=>{if(!(e.points.length<2)){this.ctx.beginPath(),this.ctx.moveTo(e.points[0].x,e.points[0].y),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.width,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color;for(let t=1;t<e.points.length;t++)this.ctx.lineTo(e.points[t].x,e.points[t].y);this.ctx.stroke()}}),this.ctx.shadowBlur=0}}const Pg=[{brand:"STATENS VARDAGSVERK",headline:"HAR DU GLÖMT VARFÖR DU GICK IN I KÖKET?",subtext:"Anmäl ofrivilligt kylskåpsstirrande senast tisdag. Blankett 44-B krävs.",cta:"ERKÄNN DIREKT",badge:"MYNDIGHETSINFO",icon:"📋",imageQuery:"refrigerator kitchen",theme:"myndighet",layout:"myndighet",clickMessage:"📋 Tack! En handläggare kommer hem till dig och stänger kylskåpet om 6–8 arbetsveckor."},{brand:"377 TEGEL-TEXT",headline:"SYNTETISK FALUKORV SLUT I HELA VÄSTERÅS",subtext:"Experten: 'Folk panikköper och använder dem som nackkuddar på tåget'",cta:"SIDA 378 >>",badge:"TEXT-TV 377",icon:"📺",imageQuery:"sausage food",theme:"texttv",layout:"texttv",clickMessage:"📺 Laddar sida 378... FEL: Text-TV har tagit lunchrast till 1999."},{brand:"TV-SHOP NATT",headline:"TRÖTT PÅ ATT SKALA DINA EGNA BANANER?!",subtext:"Med BananSprängaren 3000™ öppnar du frukten med mindre än 4 gram dynamit!",cta:"BESTÄLL NU",price:"149:-",badge:"SE TV-SUCCÉN!",icon:"💥",imageQuery:"banana fruit",theme:"tvshop",layout:"tvshop",clickMessage:"💥 Kaboom! Din beställning av BananSprängaren 3000™ skickas i ett vadderat kuvert."},{brand:"AFTONCHOCKEN EXTRA",headline:"CHOCKEN: KENNETH, 54, ÅT EN HELT VANLIG FRUKOST",subtext:'"Jag tog en ostmacka och sen hände absolut ingenting" • Grannarna rasar',cta:"LÄS PLUS+",badge:"JUST NU",icon:"🗞️",imageQuery:"cheese sandwich",theme:"tabloid",layout:"tabloid",clickMessage:"🗞️ Du har låst upp artikeln: Det var Hushållsost 28%. Kenneth mår efter omständigheterna helt okej."},{brand:"WIN98 SYSTEMTJÄNST",headline:"DITT TÅLAMOD HAR SLUTAT SVARA (FELKOD: MÅNDAG)",subtext:"Vill du starta om helgen i felsäkert läge med kanelbulle?",cta:"JA, TACK",badge:"SYSTEMFEL",icon:"💾",imageQuery:"retro computer floppy",theme:"win95",layout:"win95",clickMessage:"💾 Startar om helgen... Vänligen mata in Diskett 2 av 47 (Fredagsmys.exe)."},{brand:"CYBER-CONNY AB",headline:"TRIMMA DIN DAMMSUGARE TILL 450 HÄSTKRAFTER",subtext:"Suger upp damm, mattor, parkettgolv och mindre husdjur från grannlägenheten.",cta:"CHIPTRIMMA NU",price:"990:-",badge:"TURBO V8",icon:"🌪️",imageQuery:"vacuum cleaner jet engine",theme:"cyberneon",layout:"split",clickMessage:"🌪️ VROOOM! Din Electrolux har nu passerat ljudvallen över vardagsrumsmattan."},{brand:"SVENSKA SUCK-AKADEMIN",headline:"LÄR DIG SUCKA SÅ HÖGT ATT KOLLEGAN BYTER KONTOR",subtext:"Intensivkurs i passiv-aggressiv utandning vid kaffemaskinen. Diplom ingår.",cta:"BOKA KURS",badge:"2 PLATSER KVAR",icon:"😮‍💨",imageQuery:"office coffee bored",theme:"localbiz",layout:"split",clickMessage:"😮‍💨 *Hääääääääh...* Snyggt! Du är redan antagen till fortsättningskursen."},{brand:"MADAME YVONNES HOTLINE",headline:"JAG SPÅR DIN FRAMTID I GAMLA KVITTON FRÅN BILTEMA",subtext:"Har du köpt spännband och varmkorv? Då väntar mystisk romantik i höst.",cta:"SPÅ MIG (29 KR)",badge:"SYNSK SEDAN -92",icon:"🔮",imageQuery:"crystal ball fortune teller",theme:"occult",layout:"split",clickMessage:"🔮 Andarna talar: Du kommer köpa 3-pack torkarblad som inte passar din bil."},{brand:"MAISON DE GRÅSTEN",headline:"EAU DE KOMMUNALHUS – DEN NYA DOFTEN AV PÄRMAR & KALLT KAFFE",subtext:"En förförisk symfoni av lysrör, häftapparat och linoleumgolv.",cta:"UPPLEV DOFTEN",price:"2 499:-",badge:"PARIS • BORÅS",icon:"✨",imageQuery:"perfume bottle luxury",theme:"luxury",layout:"split",clickMessage:"✨ *Pssht!* Du luktar nu som ett sammanträdesrum i Eslöv kl 15:45."},{brand:"BRF TÅLAMODET",headline:"VEM TOG LUDDET UR TORKTUMLAREN MEN LÄMNADE EN STRUMPA?",subtext:"Styrelsen har kallat in forensisk expertis och arga lappar i laminat.",cta:"ANGE SKYLDIG",badge:"TVÄTTSTUGAN",icon:"🧦",imageQuery:"washing machine laundry",theme:"warning",layout:"split",clickMessage:"🧦 Anmälan mottagen! En laminerad arg lapp med Comic Sans har satts upp i trapphuset."},{brand:"ROOT@FALUKORV:~#",headline:"LADDA NER 64 GB EXTRA SÖMN TILL INATT [CRACKED]",subtext:"Ingen reklam • Inga konstiga drömmar om gymnasiet • 100% djupsömn.",cta:"RUN SLEEP.SH",badge:"TERMINAL v4.2",icon:"💻",imageQuery:"hacker matrix server",theme:"terminal",layout:"split",clickMessage:"💻 Executing sleep.sh... ERROR: Din hjärna tänker fortfarande på något pinsamt du sa 2014."},{brand:"GÖRAN & SÖNER UTHYRNING",headline:"HYR EN GUBBE SOM STÅR OCH PEKAR PÅ DITT BYGGPROJEKT",subtext:"Armarna i kors, skeptisk blick och mumlar 'Jaha, du tänkte göra sådär ja...'",cta:"BOKA GÖRAN",price:"350:-/tim",badge:"PROFFS-SKEPTIKER",icon:"👷",imageQuery:"construction worker carpenter",theme:"localbiz",layout:"split",clickMessage:"👷 Göran är på väg! Han har redan ringt och frågat om du verkligen mätt med vattenpass."},{brand:"VAPOR-KLIPP AB",headline:"FRISYRER SOM SER UT SOM OM DU GÅTT IGENOM EN HÄCK",subtext:"Vi klipper endast i motvind med slö kökssax. Kaffe på fat ingår ej.",cta:"BOKA SNEDKLIPP",price:"85:-",badge:"ESTETIK 1987",icon:"✂️",imageQuery:"barber haircut retro",theme:"vaporwave",layout:"split",clickMessage:"✂️ Din lugg är nu 4 centimeter kortare på vänster sida. Välkommen åter!"},{brand:"GULA SIDORNA PRIVAT",headline:"BORTSKÄNKES: 400 LITER HEMKOKT KRUSBÄRSKRÄM (FRÅGA EJ)",subtext:"Finns i källarförråd i Mjölby. Ta med egen spade och skyddsglasögon.",cta:"HÄMTA IDAG",badge:"RADANNONS",icon:"🫙",imageQuery:"glass jars jam cellar",theme:"classified",layout:"split",clickMessage:"🫙 Säljaren 'Kräm-Kent' svarar: 'Kom efter mörkrets inbrott, krämen har börjat bubbla.'"},{brand:"KOMMUNALA VÄDERVERKET",headline:"VI INFÖR HORISONTELLT SNÖBLASK MELLAN KL 07 OCH 18",subtext:"Motvind åt alla väderstreck samtidigt garanteras på samtliga cykelbanor.",cta:"KLAGA FORMELLT",badge:"VÄDERVARNING",icon:"🌨️",imageQuery:"snowstorm blizzard winter",theme:"myndighet",layout:"myndighet",clickMessage:"🌨️ Ditt klagomål har registrats. Som kompensation ökar vi motvinden med 4 m/s."},{brand:"RETRO-WEBBEN 1997",headline:"GRATTIS! DU ÄR BESÖKARE NR 000014! KLICKA FÖR ATT VINNA EN FAX!",subtext:"Ingen lottning! Bara 400 meter termopapper och ett modem som skriker!",cta:"HÄMTA VINST!!",badge:"VINNARE!!",icon:"📠",imageQuery:"fax machine telephone",theme:"retro90",layout:"win95",clickMessage:"📠 *BEEEEP-KRRR-SHHHH!* Din faxmaskin skickas med postdiligens från 1997."},{brand:"EXPRESS-BLADET",headline:"SÅ VET DU OM DIN KATT DRIVER ETT SKUGGBOLAG PÅ CYPERN",subtext:"Misstänkta kvitton på tonfisk • Sover 18 timmar för att dölja skatteplanering",cta:"SE HELA LISTAN",badge:"AVSLÖJANDE",icon:"🐱",imageQuery:"cat funny",theme:"tabloid",layout:"tabloid",clickMessage:"🐱 Misse (4 år) nekar till anklagelserna och har vält en blomkruka som protest."},{brand:"TV-SHOP KÖK",headline:"OSTHYVELN SOM SPELAR 'FINAL COUNTDOWN' VID VARJE DRAG!",subtext:"Slut på tysta frukostar! Nu med inbyggd rökmaskin och 140 dB siren!",cta:"KÖP 2 FÅ 1",price:"299:-",badge:"SOM PÅ TV!",icon:"🧀",imageQuery:"cheese yellow",theme:"tvshop",layout:"tvshop",clickMessage:"🧀 DA-DA-DA-DAA! Din frukostmacka har nu godkänts av Joey Tempest."},{brand:"377 TEGEL-TEXT",headline:"MAN I BORLÄNGE HITTADE DEN PERFEKTA PINNEN I SKOGEN",subtext:"'Den ser exakt ut som ett svärd' säger Stefan, 38. Visas på hembygdsgården.",cta:"SIDA 379 >>",badge:"INRIKES 377",icon:"🪵",imageQuery:"forest branch wood",theme:"texttv",layout:"texttv",clickMessage:"🪵 Sida 379: Pinnen har nu försäkrats för 1,2 miljoner kronor."},{brand:"NEON-BAGERIET 2088",headline:"LASERGRÄDDADE KANELBULLAR MED SMAK AV BLÅBÄR & ÅNGEST",subtext:"Pärlsocker av äkta kvantkristaller. Lyser i mörkret i upp till 14 timmar.",cta:"TELEPORTERA BULLE",price:"45:-",badge:"CYBER-FIKA",icon:"🥐",imageQuery:"cinnamon bun pastry",theme:"cyberneon",layout:"split",clickMessage:"🥐 *ZAP!* En självlysande kanelbulle har materialiserats i din ficka."},{brand:"SVENSKA SMÅPRATSJOUREN",headline:"FAST I HISSEN MED EN BEKANT? VI SMS:AR DIG VÄDERFAKTA!",subtext:"Få akuta repliker som 'Ja, det märks att det går mot ljusare/mörkare tider nu'.",cta:"TECKNA JOUR",price:"19:-/mån",badge:"AKUT HJÄLP",icon:"🛗",imageQuery:"elevator corridor",theme:"myndighet",layout:"myndighet",clickMessage:"🛗 SMS skickat: Säg 'Det är inte kylan, det är fukten som gör det' och titta i golvet!"},{brand:"BENGTSSONS MYSTERIER",headline:"VI HITTAR DET DÄR LOCKET TILL MATDOSAN SOM FÖRSVANN 2019",subtext:"Våra certifierade skåpdykare genomsöker den fjärde dimensionen under diskbänken.",cta:"STARTA SÖKNING",badge:"GARANTI*",icon:"🕵️",imageQuery:"detective magnifying glass",theme:"occult",layout:"split",clickMessage:"🕵️ Vi hittade 14 lock, men inget av dem passar någon burk som existerar på jorden."},{brand:"WIN95 DIALOG",headline:"VARNING: DU HAR INTE SAGT 'OJ DÅ' PÅ ÖVER 3 TIMMAR",subtext:"Enligt svensk lag måste du snart resa dig, slå dig på knäna och säga 'Nej, om man skulle...'",cta:"SLÅ PÅ KNÄNA",badge:"SVENSK STANDARD",icon:"🦵",imageQuery:"sofa living room",theme:"win95",layout:"win95",clickMessage:"🦵 *KLAPP PÅ KNÄNA!* 'Nämen... om man skulle ta och tänka på refrängen då!'"},{brand:"LÄNSMANNENS LOPPIS",headline:"SÄLJES: EN PALL MED BLANDADE SLADDAR FRÅN 2004",subtext:"SCART, Nokia-laddare, oklara adaptrar och en sladd som ingen vet vad den gör.",cta:"GE BUD",price:"50:-",badge:"BRA ATT HA!",icon:"🔌",imageQuery:"cables wires electronics",theme:"classified",layout:"split",clickMessage:"🔌 Du la vantarna på sladdlådan! Den får absolut inte slängas förrän 2045."},{brand:"AFTONCHOCKEN EXTRA",headline:"SUPER-GUIDEN: SÅ VÄLJER DU RÄTT KASSAKÖ PÅ ICA (DU KOMMER ÄNDÅ VÄLJA FEL)",subtext:"Forskare bekräftar: Tant med papperskuponger och pantkvitto uppstår ur tomma intet",cta:"SE FORSKNINGEN",badge:"VARDAGSCHOCK",icon:"🛒",imageQuery:"supermarket shopping cart",theme:"tabloid",layout:"tabloid",clickMessage:"🛒 Kassan bredvid rullar nu i 90 km/h medan din kassa väntar på prisfråga på kålrot."},{brand:"CHÂTEAU DE VÄRMLAND",headline:"ÅRGÅNGSLÄSK: CHAMPIS LAGRAT PÅ GAMMAL EPA-TRAKTOR",subtext:"Toner av granbarr, Wunderbaum Vanilj och nyslaget dike utanför Sunne.",cta:"RESERVERA FLASKA",price:"1 890:-",badge:"LIMITED EDITION",icon:"🍾",imageQuery:"champagne bottle vintage car",theme:"luxury",layout:"split",clickMessage:"🍾 Sommelieren rekommenderar att den serveras ljummen direkt ur handskfacket."},{brand:"VARNINGSCENTRALEN",headline:"OBS! NÅGON PÅ JOBBET HAR VÄRMT FISK I MIKRON IGEN!",subtext:"Utrym lunchrummet omedelbart! Nivå 4 av kokt torsk-aerosol har uppmätts.",cta:"AKTIVERA FLÄKT",badge:"KATASTROFLARM",icon:"🐟",imageQuery:"fish microwave kitchen",theme:"warning",layout:"split",clickMessage:"🐟 För sent! Doften har nu satt sig permanent i gardinerna fram till pensionen."},{brand:"TV-SHOP TRÄNING",headline:"FÅ MAGRUTOR MEDAN DU LIGGER I SOFFAN OCH ÄTER OSTBÅGAR!",subtext:"Vår patenterade Rut-Stämpel™ trycker in ett sexpack i huden på 3 sekunder!",cta:"KÖP STÄMPELN",price:"199:-",badge:"INGEN SVETT!",icon:"💪",imageQuery:"fitness dumbbell gym",theme:"tvshop",layout:"tvshop",clickMessage:"💪 *STÄMPEL!* Du ser nu ut som en nygräddad våffla på magen. Snyggt!"},{brand:"SYSADMIN KEBAB & DATA",headline:"VI LAGAR DIN SKRIVARE ELLER GER DIG EN FAMILJEPIZZA",subtext:"Ingen har någonsin lyckats laga en skrivare, så välj sås redan nu.",cta:"VÄLJ VITLÖKSSÅS",badge:"IT-GARANTI",icon:"🍕",imageQuery:"pizza food",theme:"terminal",layout:"split",clickMessage:"🍕 PC LOAD LETTER! Vi slängde skrivaren i containern, pizzan är klar om 10 minuter!"},{brand:"377 TEGEL-TEXT",headline:"NY LAG: FÖRBJUDET ATT SÄGA 'DET GÅR BRA' NÄR DET INTE GÅR BRA",subtext:"Miljontals svenskar riskerar böter om de inte erkänner att det är lite bökigt.",cta:"SIDA 380 >>",badge:"POLITIK 377",icon:"⚖️",imageQuery:"parliament courthouse",theme:"texttv",layout:"texttv",clickMessage:"⚖️ Sida 380: Polisen tillåter fortfarande 'Jodå, man ska väl inte klaga' i undantagsfall."},{brand:"ASTRAL-TRAFIKEN",headline:"ERSÄTTNINGSBUSS FÖR LINJE 404 AVGÅR FRÅN DEN ASTRALA DIMENSIONEN",subtext:"Stannar vid hållplatsen bakom ditt lokala pizzeria-plank kl 25:70.",cta:"SE TIDTABELL",badge:"FÖRSENAD",icon:"🚌",imageQuery:"bus night neon",theme:"vaporwave",layout:"split",clickMessage:"🚌 Bussen körde precis förbi dig i 4:e dimensionen utan att stanna."},{brand:"KURTS ALIBI-BYRÅ",headline:"VI RINGER DIG MITT UNDER TRÅKIGA MÖTEN OCH SKRIKER 'DET BRINNER I KANOTEN!'",subtext:"100% trovärdig ursäkt för att lämna vilket utvecklingssamtal som helst.",cta:"BESTÄLL NÖDSAMTAL",price:"79:-",badge:"DISKRET SERVICE",icon:"🛶",imageQuery:"canoe lake paddle",theme:"localbiz",layout:"split",clickMessage:"🛶 *RING RING!* 'HALLÅ?! DIN KANOT DRAR IVÄG MOT DANMARK, DU MÅSTE KOMMA NU!!'"},{brand:"RETRO-WEBBEN 1999",headline:"LADDA NER FLER MEGABYTE RAM-MINNE DIREKT FRÅN INTERNET!",subtext:"100% äkta .exe-fil! Gör din Pentium II snabbare än grannens Volvo 740!",cta:"DOWNLOAD.EXE",badge:"FREEWARE!!",icon:"💿",imageQuery:"microchip circuit board",theme:"retro90",layout:"win95",clickMessage:"💿 Grattis! Du har nu 14 nya verktygsfält i Internet Explorer och en dansande älg på skrivbordet."},{brand:"CYBER-SYNTH FRISÖR",headline:"HOCKEYFRILLA MED INBYGGD SUBWOOFER OCH BLINKERS",subtext:"Kort där fram, fest där bak, och 800 Watt baslåda i nacken. Besiktigad.",cta:"INSTALLERA FRILLA",price:"1 200:-",badge:"EPA-CERTIFIERAD",icon:"🎸",imageQuery:"loudspeaker concert neon",theme:"cyberneon",layout:"split",clickMessage:"🎸 *DUNK-DUNK-DUNK!* Dina polisonger spelar nu eurodance så plomberna skakar!"},{brand:"STATENS FIKA-INSPEKTION",headline:"SISTA BITEN AV TÅRTAN HAR LEGAT KVAR PÅ FATET I 4 DYGN",subtext:"Den är nu halverad 16 gånger och mäter 0,3 millimeter. Ingen vågar ta den.",cta:"TILLKALLA INSATS",badge:"KRISLÄGE",icon:"🍰",imageQuery:"cake dessert plate",theme:"myndighet",layout:"myndighet",clickMessage:"🍰 Nationella insatsstyrkan har delat tårtbiten på mitten igen. Nu är den på atomnivå."},{brand:"AFTONCHOCKEN EXTRA",headline:"SKRÄCKEN I ULLARED: MAN GICK IN FÖR ATT KÖPA EN (1) SAK – GICK UT MED EN!",subtext:"Säkerhetsvakterna i chock: 'Vi trodde det var fysiskt omöjligt utan stekpanna och 40 par strumpor'",cta:"SE ÖVERVAKNINGSBILD",badge:"HISTORISKT",icon:"🛍️",imageQuery:"department store shopping",theme:"tabloid",layout:"tabloid",clickMessage:"🛍️ Rättelse: Det visade sig att han råkat få med sig 3 paket fryspåsar och en trädgårdstomte ändå."},{brand:"OCKULTA HEMFIXARNA",headline:"KNARRAR GOLVET? DET ÄR INTE FUKT – DET ÄR FARFAR SOM VILL HA SNUS",subtext:"Vi driver ut gnälliga husspöken med hjälp av skruvdragare och kaffe.",cta:"BOKA EXORCISM",price:"666:-",badge:"RUT-AVDRAG*",icon:"👻",imageQuery:"haunted house spooky stairs",theme:"occult",layout:"split",clickMessage:"👻 Spöket har fått en dosa Ettan Lös och har lovat att sluta tända lampan i hallen."},{brand:"TV-SHOP VINTER",headline:"TRÖTT PÅ ATT SKRAPA VINDRUTAN? BYT UT BILEN MOT EN HELIKOPTER!",subtext:"Eller köp vår El-Eldkastare i fickformat! Smälter isen (och motorhuven) på 1 sekund!",cta:"BESTÄLL IDAG",price:"399:-",badge:"VINTER-KLIPP!",icon:"🔥",imageQuery:"car snow winter ice",theme:"tvshop",layout:"tvshop",clickMessage:"🔥 Ingen mer is på rutan! (Ingen mer ruta heller, så ta på dig skidglasögon!)."},{brand:"377 TEGEL-TEXT",headline:"KOMMUNEN BYGGER RONDELL INUTI EN ANNAN RONDELL",subtext:"'Vi hade 400 ton kantsten över', förklarar trafiknämnden i Skövde.",cta:"SIDA 381 >>",badge:"TRAFIK 377",icon:"🔄",imageQuery:"roundabout road traffic",theme:"texttv",layout:"texttv",clickMessage:"🔄 Sida 381: En lokal bilist har nu snurrat i den inre rondellen sedan i torsdags."},{brand:"L’ORÉAL DE SÖDERTÄLJE",headline:"SCHAMPO MED EXTRA GRUS – FÖR DIG SOM SAKNAR KÄNSLAN AV VÅRENS CYKELBANOR",subtext:"Ger håret den där autentiska 'sandpapper och vägsalt'-volymen.",cta:"KÖP FLASKA",price:"890:-",badge:"HAUTE COUTURE",icon:"🪨",imageQuery:"gravel stones road",theme:"luxury",layout:"split",clickMessage:"🪨 För att du är värd lite rullgrus i hårbotten!"},{brand:"SVENSKA KÖLAPP-MUSEET",headline:"VI KÖPER DIN GAMLA KÖLAPP FRÅN SYSTEMBOLAGET 1998",subtext:"Särskilt intresse för nummer 094 med tummade hörn och kaffefläck.",cta:"VÄRDERA LAPP",badge:"ANTIKRUNDAN",icon:"🎟️",imageQuery:"ticket paper vintage",theme:"classified",layout:"split",clickMessage:"🎟️ Vår expert bjuder 14 kronor och en halväten Piggelin för din kölapp!"},{brand:"FÖRSÄKRINGSKASSAN NIGHTSHIFT",headline:"HAR DU DRÖMT ATT DU JOBBADE INATT? GLÖM INTE ATT FÖRMODA SKATT!",subtext:"Obeskattad REM-sömn räknas som grovt skattebrott enligt §12 Sömnlagen.",cta:"DEKLARERA DRÖM",badge:"SKATTEVERKET",icon:"💤",imageQuery:"sleeping bed pillow",theme:"myndighet",layout:"myndighet",clickMessage:"💤 Du är nu skyldig staten 3 timmars mardröm om ett matteprov du inte pluggat till."},{brand:"WIN95 SYSTEMVARNING",headline:"DIN KAFFEKOPP ÄR SNART TOM (KRITISKT SYSTEMFEL 0x00F1KA)",subtext:"Om du inte fyller på bryggkaffe inom 4 minuter kommer du svara 'Mjo' på allt.",cta:"BRYGG NYTT",badge:"VARNING",icon:"☕",imageQuery:"coffee cup espresso",theme:"win95",layout:"win95",clickMessage:"☕ Kaffebryggaren gurglar nu med 110 decibel i personalrummet."},{brand:"TV-SHOP HUSHÅLL",headline:"TRÖTT PÅ ATT VIKA TVÄTT? SKJUT IN DEN I GARDEROBEN MED TVÄTT-KANONEN™!",subtext:"Komprimerar 12 kilo strumpor och påslakan till en kompakt kub i överljudsfart!",cta:"BESTÄLL KANON",price:"499:-",badge:"TV-EXKLUSIV!",icon:"🧦",imageQuery:"cannon artillery",theme:"tvshop",layout:"tvshop",clickMessage:"🧦 *BOOOOM!* Garderobsdörren flög in till grannen, men tvätten är inne!"},{brand:"AFTONCHOCKEN EXTRA",headline:"DRAMAT PÅ BUSSEN: NÅGON SATTE SIG BREDVID TROTS LEDIGA SÄTEN",subtext:"Krisgrupp inkallad till linje 4 • 'Jag var tvungen att titta ut genom fönstret i 20 minuter'",cta:"LÄS VITTNESMÅLET",badge:"BUSS-CHOCK",icon:"💺",imageQuery:"bus seats public transport",theme:"tabloid",layout:"tabloid",clickMessage:"💺 Passageraren höll dessutom sin ryggsäck i knät utan att säga ett ord. Rysare!"},{brand:"377 TEGEL-TEXT",headline:"REKORDMÅNGA SVENSKAR SA 'HOPPSAN' NÄR DE GICK IN I STOLPE",subtext:"84% bad även stolpen om ursäkt innan de skyndade vidare, visar ny statistik.",cta:"SIDA 382 >>",badge:"SAMHÄLLE 377",icon:"🚧",imageQuery:"street lamp post city",theme:"texttv",layout:"texttv",clickMessage:"🚧 Sida 382: Stolpen har accepterat ursäkten och hälsar hem."},{brand:"CYBER-KORV 2099",headline:"HOLOGRAM-KORV MED BRÖD – 0 KALORIER, 100% NEON-SENAP",subtext:"Smakar exakt som en Statoil-korv kl 03:15 fast helt gjord av fotoner.",cta:"LADDA NER KORV",price:"25:-",badge:"3D-PRINTAD",icon:"🌭",imageQuery:"hotdog street food",theme:"cyberneon",layout:"split",clickMessage:"🌭 Du klickade på stark senap! En laserdusch av senap har träffat din jacka."},{brand:"SPÖK-RÖRMOKAREN",headline:"KLUCKAR DET I AVLOPPET? DET ÄR EN GAMMAL VIKING SOM BOR I GOLVBRUNNEN",subtext:"Vi mutar Ragnar Lodbrok med mjöd och rensband så vattnet rinner undan igen.",cta:"RING JOUREN",price:"550:-",badge:"24/7 AKUT",icon:"🪠",imageQuery:"viking helmet ship",theme:"occult",layout:"split",clickMessage:"🪠 Ragnar har flyttat till grannens dusch istället. Fritt blås i rören!"},{brand:"BENGTS PLASTPÅSE-BANK",headline:"INVESTERAR DU I PLASTPÅSAR UNDER DISKBÄNKEN? VI GER 8% RÄNTA!",subtext:"Sätt in en stor papperskasse full med knölade konsumpåsar från 2011.",cta:"ÖPPNA PÅSKONTO",badge:"TRYGG SPARFORM",icon:"🛍️",imageQuery:"plastic bags shopping",theme:"localbiz",layout:"split",clickMessage:"🛍️ Din portfölj av skrynkliga Coop-kassar har just stigit med 400% på börsen!"},{brand:"TERMINAL HOROSKOP",headline:"SUDO APT-GET INSTALL FRAMGÅNG --FORCE-YES",subtext:"Ditt stjärntecken (Kompileringsfel) visar att du kommer glömma ett semikolon idag.",cta:"GIT PUSH --FORCE",badge:"DEVOPS-SPÅDOM",icon:"🖥️",imageQuery:"code terminal screen",theme:"terminal",layout:"split",clickMessage:"🖥️ Fatal error: Fredags-deploy påbörjad kl 16:59. Lycka till i helgen!"},{brand:"VARNING: GRANNLARM",headline:"DIN GRANNE STÅR I TRAPPHUSET OCH VILL PRATA OM SOPRUMMET!",subtext:"Kikhåls-sensorn har detekterat tofflor och en dömande blick utanför din dörr.",cta:"SLÄCK ALLA LAMPOR",badge:"FARA NIVÅ RÖD",icon:"👀",imageQuery:"staircase hallway door",theme:"warning",layout:"split",clickMessage:"👀 *Schhh!* Du ligger nu helt blickstilla på hallmattan tills fotstegen försvinner."},{brand:"VAPOR-TANDLÄKAREN",headline:"BYT UT DINA VISDOMSTÄNDER MOT DISCOKULOR I KROM",subtext:"Varje gång du gäspar spelas ett saxofonsolo från 1986 i hela rummet.",cta:"BOKA BORRNING",price:"3 400:-",badge:"AESTHETIC SMILE",icon:"🦷",imageQuery:"disco ball mirror",theme:"vaporwave",layout:"split",clickMessage:"🦷 *Careless Whisper på saxofon ekar nu ur din mun varje gång du ler!*"},{brand:"RETRO-WEBBEN 1996",headline:"BESÖK MIN HEMSIDA OM MINA 14 MARSVIN! [UNDER CONSTRUCTION]",subtext:"Gästboken är öppen!! Lämna en hälsning eller bli bannad från mitt Webring!",cta:"SKRIV I GÄSTBOK",badge:"NETSCAPE 3.0",icon:"🐹",imageQuery:"guinea pig rodent",theme:"retro90",layout:"win95",clickMessage:"🐹 Tack för ditt inlägg i gästboken! Marsvinet Pelle hälsar med en animerad GIF."},{brand:"PARFUM DE SLUSSEN",headline:"NATTBUSS N°5 – EXKLUSIV HERRDOFT MED TONER AV KEBAB & BLÖT ULLKAPPA",subtext:"Fångar den magiska känslan av att missa sista bytet i regnet kl 02:47.",cta:"BESTÄLL PROV",price:"1 650:-",badge:"EAU DE TOILETTE",icon:"🌧️",imageQuery:"rain night city street",theme:"luxury",layout:"split",clickMessage:"🌧️ En sofistikerad pust av vitlökssås och våt asfalt sveper genom rummet."},{brand:"RADANNONS TORGET",headline:"BYTES: EN HALV BURK INLAGD SILL MOT EN FUNGERANDE HELIKOPTER",subtext:"Sillen är av årgång 2021 (Löksill). Helikoptern bör vara nybesiktigad.",cta:"KONTAKTA RUNAR",badge:"BYTESMARKNAD",icon:"🚁",imageQuery:"helicopter aircraft",theme:"classified",layout:"split",clickMessage:"🚁 Runar svarar: 'Är det du som har helikoptern? Sillen står redo i kylskåpet!'"},{brand:"STATENS PÅSLAKAN-NÄMND",headline:"HAR DITT TÄCKE KORVAT IHOP SIG SOM EN BOLL LÄNGST NER I PÅSLAKANET?",subtext:"Kryp inte in i påslakanet ensam! Vi skickar en certifierad hörnskakare.",cta:"BEGÄR UTRYCKNING",badge:"SAMHÄLLSSKYDD",icon:"🛏️",imageQuery:"bed sheets bedroom",theme:"myndighet",layout:"myndighet",clickMessage:"🛏️ Varning: Handläggaren fastnade också inne i påslakanet. Skicka fler handläggare!"},{brand:"TV-SHOP FRITID",headline:"SVAMP-RADARN 5000™ – HITTAR KANTARELLER PÅ 8 MILS AVSTÅND!",subtext:"Piper även vid gulmålat grus, postbilar och borttappade golfbollar!",cta:"KÖP RADARN",price:"599:-",badge:"SKOGENS KUNG!",icon:"🍄",imageQuery:"mushroom chanterelle forest",theme:"tvshop",layout:"tvshop",clickMessage:"🍄 *BEEP BEEP!* Radarn har lokaliserat en kantarell (eller en gul legobit) i Enköping!"},{brand:"AFTONCHOCKEN EXTRA",headline:"CHOCK-TESTET: ÄR DU EN 'VI HÖRS'-PERSON SOM ALDRIG HÖR AV SIG?",subtext:"9 av 10 svenskar säger 'Vi måste ta en lunch snart!' och går sedan under jorden i 6 år",cta:"GÖR TESTET HÄR",badge:"RELATIONER",icon:"📱",imageQuery:"smartphone texting",theme:"tabloid",layout:"tabloid",clickMessage:"📱 Resultat: Du har 17 utlovade luncher från 2018 som väntar på dig!"},{brand:"377 TEGEL-TEXT",headline:"KVINNA LYCKADES ÖPPNA PLASTFÖRPACKNING UTAN SAX ELLER VÅLD",subtext:"Förpackningsindustrin i krismöte: 'Det här skulle inte vara tekniskt möjligt'",cta:"SIDA 383 >>",badge:"VETENSKAP 377",icon:"✂️",imageQuery:"scissors plastic package",theme:"texttv",layout:"texttv",clickMessage:"✂️ Sida 383: Vi har nu förstärkt alla skinkpaket med kevlar och superlim."},{brand:"LOKALA FIKA-KARTELLET",headline:"SMUGGEL-SEMLOR SÄLJES I GRÄNDEN BAKOM JÄRNHANDELN",subtext:"Äkta mandelmassa, 4 deciliter grädde, helt utan säsongstillstånd. Säg kodord 'Hetvägg'.",cta:"VISKA KODORD",price:"60:-",badge:"SVARTABÖRSEN",icon:"🧁",imageQuery:"cream bun bakery",theme:"localbiz",layout:"split",clickMessage:"🧁 *Pssst!* En man i trenchcoat räckte dig precis en kartong med florsocker på."}];let z=[],Ze=null,Ui=null,cs=!1,So=!1;const ko=new Map;function Lg(n){const e=n.split(" ")[0]||"random",t=Math.floor(Math.random()*99999);return`https://loremflickr.com/640/260/${encodeURIComponent(e)}?lock=${t}`}async function Dg(n){var t,i,s;const e=ko.get(n);if(e&&e.length>0)return e[Math.floor(Math.random()*e.length)];try{const r=`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=filetype:bitmap+${encodeURIComponent(n)}&gsrlimit=15&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`,o=await fetch(r);if(o.ok){const a=await o.json(),l=(t=a==null?void 0:a.query)==null?void 0:t.pages;if(l){const c=[];for(const u of Object.keys(l)){const d=(s=(i=l[u])==null?void 0:i.imageinfo)==null?void 0:s[0],h=(d==null?void 0:d.thumburl)||(d==null?void 0:d.url);h&&typeof h=="string"&&!h.endsWith(".svg")&&!h.endsWith(".tif")&&c.push(h)}if(c.length>0)return ko.set(n,c),c[Math.floor(Math.random()*c.length)]}}}catch{}return Lg(n)}function Og(){if(z.length===0){z=[...Pg];for(let n=z.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[z[n],z[e]]=[z[e],z[n]]}Ze&&z[0]===Ze&&z.length>1&&([z[0],z[1]]=[z[1],z[0]])}return Ze=z.shift(),Ze}function Mg(n,e){const t=n.badge?`<span class="ad-badge">${n.badge}</span>`:"",i=n.price?`<span class="ad-price-tag">${n.price}</span>`:"",s=`
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
    `}const Co=["🚫 Du kan inte stänga reklamen! Vi bytte ut den mot en ännu konstigare istället.","🛡️ AdBlocker avvisad av Kommunala Mysterieverket. Här får du en ny annons!","💸 För att stänga reklamen krävs Tegel Premium Gold Plus (4 999 kr/halvtimme).","🔄 Reklam stängd! Laddar omedelbart in ersättningsreklam..."];function On(n=!0){const e=document.querySelectorAll(".ad-space");if(e.length===0)return;const t=Og();e.forEach(i=>{n&&i.innerHTML.trim()!==""?(i.classList.add("ad-switching"),setTimeout(()=>{Ro(i,t),i.classList.remove("ad-switching")},180)):Ro(i,t)})}function Ro(n,e){const t=`https://picsum.photos/seed/${encodeURIComponent(e.brand+Math.floor(Math.random()*1e3))}/800/300`;n.className=`ad-space theme-${e.theme} layout-${e.layout}`,n.innerHTML=`
        <div class="ad-bg-image" style="background-image: url('${t}')"></div>
        <div class="ad-bg-overlay"></div>
        <div class="ad-bg-pattern"></div>
        <div class="ad-inner-wrapper">
            ${Mg(e,t)}
        </div>
        <div class="ad-progress-bar"></div>
    `,Dg(e.imageQuery).then(i=>{const s=new Image;s.onload=()=>{if(Ze!==e)return;const r=n.querySelector(".ad-bg-image"),o=n.querySelector(".ad-photo-thumb");r&&(r.style.backgroundImage=`url('${i}')`),o&&(o.style.backgroundImage=`url('${i}')`)},s.src=i})}function xg(n){if(So)return;So=!0,On(!1),document.querySelectorAll(".ad-space").forEach(t=>{t.addEventListener("mouseenter",()=>{cs=!0,t.classList.add("ad-paused")}),t.addEventListener("mouseleave",()=>{cs=!1,t.classList.remove("ad-paused")}),t.addEventListener("click",i=>{const s=i.target;if(s.closest(".ad-next-btn")){i.stopPropagation(),On(!0),Bi();return}if(s.closest(".ad-close-btn")){i.stopPropagation();const a=Co[Math.floor(Math.random()*Co.length)];n(a,"info"),On(!0),Bi();return}const r=document.createElement("span");r.classList.add("ripple"),t.appendChild(r);const o=t.getBoundingClientRect();r.style.left=`${i.clientX-o.left}px`,r.style.top=`${i.clientY-o.top}px`,setTimeout(()=>r.remove(),600),Ze&&n(Ze.clickMessage,"info")})}),Bi()}function Bi(){Ui!==null&&window.clearInterval(Ui),Ui=window.setInterval(()=>{cs||On(!0)},9e3)}Cg();const zl=uc({immediate:!0,onNeedRefresh(){P("New version available! Refreshing...","info"),setTimeout(()=>{zl(!0)},1500)},onOfflineReady(){P("App ready to work offline!","info")}});setInterval(()=>{zl(!0)},3600*1e3);const j=document.querySelector("#app"),ur=document.createElement("div");ur.className="toast-container";document.body.appendChild(ur);function Ao(){const n=document.getElementById("splash-screen");n&&(n.classList.add("fade-out"),setTimeout(()=>n.remove(),1e3))}const Yl=new URLSearchParams(window.location.search),Fg=Yl.get("mode"),ds=Yl.get("oobCode");let ie=new Date().getFullYear(),G=new Date().getMonth(),ae=[],O=Fg==="resetPassword"&&ds?"resetPassword":"calendar";function P(n,e="info"){const t=document.createElement("div");t.className=`toast ${e}`,t.innerText=n,ur.appendChild(t),setTimeout(()=>{t.classList.add("fade-out"),setTimeout(()=>t.remove(),500)},3500)}xg(P);const L={mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',eyeOff:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19"/><path d="m1 1 22 22"/></svg>',arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>',back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 19l-7-7 7-7"/></svg>',key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="4.5"/><path d="m10.7 12.3 9.8-9.8M17 6l3 3M15 8l2 2"/></svg>',inbox:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>'};function te(n){return n.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function oi(n){const e=(n==null?void 0:n.code)||"";return{"auth/invalid-email":"That email address looks invalid.","auth/user-not-found":"Wrong email or password.","auth/wrong-password":"Wrong email or password.","auth/invalid-credential":"Wrong email or password.","auth/missing-password":"Please enter your password.","auth/too-many-requests":"Too many attempts. Take a breather and try again later.","auth/network-request-failed":"Network error. Check your connection (or start the emulator locally).","auth/expired-action-code":"This reset link has expired. Request a new one.","auth/invalid-action-code":"This reset link is invalid or already used.","auth/weak-password":"Password is too weak. Use at least 6 characters."}[e]||(n==null?void 0:n.message)||"Something went wrong."}function ln(n){return`
        <div class="auth-topbar">
            ${n.includes('class="auth-logo"')?"<span></span>":'<div class="cal-logo">TEGEL</div>'}
            <button id="games-btn" class="games-link">Games</button>
        </div>
        <div class="auth-card">
            <div class="auth-card-glow"></div>
            ${n}
        </div>
    `}function cn(n){return`
        <label class="auth-field ${n.toggle?"has-toggle":""}" for="${n.id}">
            <span class="auth-field-icon">${n.icon}</span>
            <input type="${n.type}" id="${n.id}" placeholder=" " autocomplete="${n.autocomplete}" ${n.disabled?"disabled":""} />
            <span class="auth-field-label">${n.label}</span>
            ${n.toggle?`<button type="button" class="auth-field-toggle" data-target="${n.id}" aria-label="Show password">${L.eye}</button>`:""}
        </label>
    `}function dn(){var n;(n=document.getElementById("games-btn"))==null||n.addEventListener("click",()=>{O="games",hn()}),document.querySelectorAll(".auth-field-toggle").forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const i=document.getElementById(e.dataset.target),s=i.type==="password";i.type=s?"text":"password",e.innerHTML=s?L.eyeOff:L.eye,e.classList.toggle("active",s)})})}function St(n,e,t){n.disabled=e,n.classList.toggle("loading",e),n.innerHTML=e?`<span class="spinner"></span><span>${t}</span>`:`<span>${t}</span>${L.arrow}`}function Ve(n){n&&(n.classList.remove("shake"),n.offsetWidth,n.classList.add("shake"))}function kt(){var t;j.classList.add("auth-mode"),j.innerHTML=ln(`
        <div class="auth-header">
            <div class="auth-logo" data-text="TEGEL">TEGEL</div>
            <p class="auth-subtitle">// ACCESS TERMINAL</p>
        </div>
        <form class="auth-form" id="login-form" novalidate>
            ${cn({id:"email",type:"email",label:"Email",icon:L.mail,autocomplete:"email"})}
            ${cn({id:"password",type:"password",label:"Password",icon:L.lock,autocomplete:"current-password",toggle:!0})}
            <div class="auth-row">
                <button id="forgot-password-btn" class="link-btn" type="button">Forgot password?</button>
            </div>
            <button id="login-btn" class="btn-neon" type="submit"><span>Login</span>${L.arrow}</button>
        </form>
    `),dn(),(t=document.getElementById("forgot-password-btn"))==null||t.addEventListener("click",()=>{var i;O="forgotPassword",Ti((i=document.getElementById("email"))==null?void 0:i.value)});const n=document.getElementById("login-form"),e=document.getElementById("login-btn");n.addEventListener("submit",async i=>{i.preventDefault();const s=document.getElementById("email").value.trim(),r=document.getElementById("password").value;if(!s||!r){Ve(document.querySelector(".auth-card")),P("Please enter email and password.","error");return}try{St(e,!0,"Connecting..."),await zu(ne,s,r),P("Logged in successfully!")}catch(o){St(e,!1,"Login"),Ve(document.querySelector(".auth-card")),P(oi(o),"error")}})}function Ti(n=""){var i,s;j.classList.add("auth-mode"),j.innerHTML=ln(`
        <div class="auth-header">
            <div class="auth-badge">${L.key}</div>
            <h2 class="auth-title">Forgot password</h2>
            <p class="auth-description">No worries. Enter your email and we'll beam you a reset link.</p>
        </div>
        <form class="auth-form" id="forgot-form" novalidate>
            ${cn({id:"reset-email",type:"email",label:"Email",icon:L.mail,autocomplete:"email"})}
            <button id="send-reset-btn" class="btn-neon" type="submit"><span>Send reset link</span>${L.arrow}</button>
            <button id="back-to-login-btn" class="link-btn back" type="button">${L.back}<span>Back to login</span></button>
        </form>
    `),dn();const e=document.getElementById("reset-email");e.value=n,e.focus(),(i=document.getElementById("back-to-login-btn"))==null||i.addEventListener("click",()=>{O="calendar",kt()});const t=document.getElementById("send-reset-btn");(s=document.getElementById("forgot-form"))==null||s.addEventListener("submit",async r=>{r.preventDefault();const o=e.value.trim();if(!o){Ve(document.querySelector(".auth-card")),P("Please enter your email.","error");return}try{St(t,!0,"Sending..."),await Gu(ne,o,{url:window.location.origin}),Ug(o)}catch(a){St(t,!1,"Send reset link"),Ve(document.querySelector(".auth-card")),P(oi(a),"error")}})}function Ug(n){var e,t;j.innerHTML=ln(`
        <div class="auth-header success">
            <div class="auth-badge success pulse">${L.inbox}</div>
            <h2 class="auth-title">Check your inbox</h2>
            <p class="auth-description">
                If an account exists for <strong class="auth-email">${te(n)}</strong>,
                a reset link is on its way. Don't forget to check spam.
            </p>
        </div>
        <div class="auth-form">
            <button id="back-to-login-btn" class="btn-neon" type="button"><span>Back to login</span>${L.arrow}</button>
            <button id="resend-btn" class="link-btn" type="button">Didn't get it? Try again</button>
        </div>
    `),dn(),(e=document.getElementById("back-to-login-btn"))==null||e.addEventListener("click",()=>{O="calendar",kt()}),(t=document.getElementById("resend-btn"))==null||t.addEventListener("click",()=>{Ti(n)})}function Bg(n){let e=0;return n.length>=6&&e++,n.length>=10&&e++,/[A-Z]/.test(n)&&/[a-z]/.test(n)&&e++,/\d/.test(n)&&/[^A-Za-z0-9]/.test(n)&&e++,e}function $g(n){var l,c;j.classList.add("auth-mode"),j.innerHTML=ln(`
        <div class="auth-header">
            <div class="auth-badge" id="reset-badge">${L.lock}</div>
            <h2 class="auth-title">New password</h2>
            <p class="auth-description" id="reset-status"><span class="spinner small"></span> Verifying reset link...</p>
        </div>
        <form class="auth-form" id="reset-form" novalidate>
            ${cn({id:"new-password",type:"password",label:"New password",icon:L.lock,autocomplete:"new-password",disabled:!0,toggle:!0})}
            <div class="strength-meter" id="strength-meter" data-score="0">
                <span></span><span></span><span></span><span></span>
            </div>
            ${cn({id:"confirm-password",type:"password",label:"Confirm password",icon:L.lock,autocomplete:"new-password",disabled:!0,toggle:!0})}
            <button id="save-new-password-btn" class="btn-neon" type="submit" disabled><span>Save new password</span>${L.arrow}</button>
            <button id="cancel-reset-btn" class="link-btn back" type="button">${L.back}<span>Back to login</span></button>
        </form>
    `),dn();const e=document.getElementById("reset-status"),t=document.getElementById("reset-badge"),i=document.getElementById("new-password"),s=document.getElementById("confirm-password"),r=document.getElementById("save-new-password-btn"),o=document.getElementById("strength-meter");i.addEventListener("input",()=>{o.dataset.score=String(Bg(i.value))}),qu(ne,n).then(u=>{e.innerHTML=`Choose a new password for <strong class="auth-email">${te(u)}</strong>`,i.disabled=!1,s.disabled=!1,r.disabled=!1,i.focus()}).catch(u=>{var h;t.classList.add("error"),t.innerHTML=L.alert,e.textContent=oi(u),r.style.display="none",document.querySelectorAll("#reset-form .auth-field, #strength-meter").forEach(f=>f.style.display="none");const d=document.createElement("button");d.type="button",d.className="btn-neon",d.innerHTML=`<span>Request a new link</span>${L.arrow}`,d.addEventListener("click",()=>{window.history.replaceState({},document.title,window.location.pathname),O="forgotPassword",Ti()}),(h=document.getElementById("reset-form"))==null||h.prepend(d)});const a=()=>{window.history.replaceState({},document.title,window.location.pathname),O="calendar",kt()};(l=document.getElementById("cancel-reset-btn"))==null||l.addEventListener("click",a),(c=document.getElementById("reset-form"))==null||c.addEventListener("submit",async u=>{var f;u.preventDefault();const d=i.value,h=s.value;if(!d||d.length<6){Ve(document.querySelector(".auth-card")),P("Password must be at least 6 characters.","error");return}if(d!==h){Ve(document.querySelector(".auth-card")),P("Passwords do not match.","error");return}try{St(r,!0,"Saving..."),await Wu(ne,n,d),window.history.replaceState({},document.title,window.location.pathname),j.innerHTML=ln(`
                <div class="auth-header success">
                    <div class="auth-badge success pulse">${L.check}</div>
                    <h2 class="auth-title">Password updated</h2>
                    <p class="auth-description">You're all set. Log in with your new password.</p>
                </div>
                <div class="auth-form">
                    <button id="go-login-btn" class="btn-neon" type="button"><span>Go to login</span>${L.arrow}</button>
                </div>
            `),dn(),(f=document.getElementById("go-login-btn"))==null||f.addEventListener("click",()=>{O="calendar",kt()})}catch(m){St(r,!1,"Save new password"),Ve(document.querySelector(".auth-card")),P(oi(m),"error")}})}function ai(n,e){var r,o;const t=document.querySelector(".modal-overlay");t&&t.remove();const i=document.createElement("div");i.className="modal-overlay active",i.innerHTML=`
        <div class="modal-content">
            <h2>Are you sure?</h2>
            <p style="text-align: center; color: #9d00ff; margin-bottom: 20px;">${n}</p>
            <div class="modal-actions">
                <button id="confirm-yes">Yes, Delete</button>
                <button id="confirm-no" class="cancel-btn">No, Keep it</button>
            </div>
        </div>
    `,document.body.appendChild(i);const s=()=>{i.classList.remove("active"),setTimeout(()=>i.remove(),300)};(r=document.getElementById("confirm-no"))==null||r.addEventListener("click",s),(o=document.getElementById("confirm-yes"))==null||o.addEventListener("click",()=>{e(),s()})}const W={chevronLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="3"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',year:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',board:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',games:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="12" rx="5"/><path d="M7 11v4M5 13h4M15.5 12h.01M18 14h.01"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>',trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',bolt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'},No=["#ff00ff","#00ffff","#9d00ff","#ff3d9a","#39ff88","#ffb84d","#4d7cff","#ff6b4d"],Vg=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],et=n=>String(n).padStart(2,"0"),tt=n=>`${n.getFullYear()}-${et(n.getMonth()+1)}-${et(n.getDate())}`,un=n=>{const[e,t,i]=n.split("-").map(Number);return new Date(e,t-1,i)},Pe=n=>new Date(n).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function Ql(n,e){const t=un(n).getTime(),i=t+1440*60*1e3;return e.filter(s=>s.start<i&&s.end>t).sort((s,r)=>s.start-r.start)}function Hg(n){const e=new Date,t=tt(e),i=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1);return n===t?"Today":n===tt(i)?"Tomorrow":un(n).toLocaleDateString("en-GB",{weekday:"short",day:"numeric",month:"short"})}let Y=null,Ht=null,Mn=!0;function Yt(n){G+=n,G<0&&(G=11,ie--),G>11&&(G=0,ie++),Ht=n>0?"left":"right",Mn=!0,Y=null,He()}function $i(n){n.classList.remove("active"),setTimeout(()=>n.remove(),300)}function Jl(n){const e=ne.currentUser,t=(e==null?void 0:e.email)||"",i=(s,r,o)=>`<button class="cal-tab ${n===s?"active":""}" data-view="${s}">${r}<span>${o}</span></button>`;return`
        <header class="cal-header">
            <div class="cal-logo">TEGEL</div>
            ${e?`
                <div class="user-menu">
                    <button class="user-avatar" id="user-avatar" aria-label="Account menu">${te((t[0]||"?").toUpperCase())}</button>
                    <div class="user-dropdown" id="user-dropdown">
                        <div class="user-dropdown-email">${te(t)}</div>
                        <button class="user-dropdown-item" id="my-bookings-btn">${W.list}<span>My bookings</span></button>
                        <button class="user-dropdown-item danger" id="logout-btn">${W.logout}<span>Log out</span></button>
                    </div>
                </div>
            `:`
                <button class="cal-today-btn" id="header-login-btn">Log in</button>
            `}
        </header>
        ${e?`
            <nav class="cal-tabs">
                ${i("calendar",W.calendar,"Calendar")}
                ${i("yearOverview",W.year,"Year")}
                ${i("board",W.board,"Board")}
                ${i("games",W.games,"Games")}
            </nav>
        `:""}
    `}function Xl(n){var e;if(n==="board"){O="board",new Ng(j),(e=document.getElementById("back-to-calendar"))==null||e.addEventListener("click",()=>Xl("calendar"));return}O=n,n==="calendar"?He():n==="yearOverview"?tc():hn()}function Zl(){var e,t,i,s;document.querySelectorAll(".cal-tab[data-view]").forEach(r=>{r.addEventListener("click",()=>{r.classList.contains("active")||Xl(r.dataset.view)})});const n=document.getElementById("user-dropdown");(e=document.getElementById("user-avatar"))==null||e.addEventListener("click",r=>{r.stopPropagation(),n==null||n.classList.toggle("open")}),(t=document.getElementById("my-bookings-btn"))==null||t.addEventListener("click",()=>{n==null||n.classList.remove("open"),ec(ae)}),(i=document.getElementById("logout-btn"))==null||i.addEventListener("click",()=>{_a(ne),P("Logged out")}),(s=document.getElementById("header-login-btn"))==null||s.addEventListener("click",()=>{O="calendar",kt()})}function xn(n,e){var y,A;const t=document.querySelector(".modal-overlay");t&&t.remove();const i=ne.currentUser,s=un(n),r=Ql(n,e),o=new Date;let a=12;n===tt(o)&&(a=Math.min(o.getHours()+1,22));const l=`${et(a)}:00`,c=`${et(a+1)}:00`,u=document.createElement("div");u.className="modal-overlay active",u.innerHTML=`
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
                <input type="text" id="event-title" placeholder="Synth Party" value="${te((i==null?void 0:i.email)||"")}" />
            </div>
            <div class="time-row">
                <div class="form-group">
                    <label for="event-start">Start</label>
                    <input type="time" id="event-start" value="${l}" />
                </div>
                <span class="time-arrow">${W.chevronRight}</span>
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
                                ${Pe(E.start)}–${Pe(E.end)} · ${te(E.title)}
                            </span>
                        `).join("")}
                    </div>
                </div>
            `:""}
            <div class="modal-actions">
                <button id="confirm-booking" class="btn-neon"><span>Book it</span>${W.bolt}</button>
                <button id="cancel-booking" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `,document.body.appendChild(u);const d=document.getElementById("event-start"),h=document.getElementById("event-end"),f=E=>{const[M,H]=d.value.split(":").map(Number),ee=Math.min(M*60+H+E,1439);h.value=`${et(Math.floor(ee/60))}:${et(ee%60)}`};u.querySelectorAll(".duration-chip").forEach(E=>{E.addEventListener("click",()=>{u.querySelectorAll(".duration-chip").forEach(M=>M.classList.remove("active")),E.classList.add("active"),f(Number(E.dataset.min))})}),d.addEventListener("change",()=>{const E=u.querySelector(".duration-chip.active");E&&f(Number(E.dataset.min))}),h.addEventListener("input",()=>{u.querySelectorAll(".duration-chip").forEach(E=>E.classList.remove("active"))}),u.addEventListener("click",E=>{E.target===u&&$i(u)}),(y=document.getElementById("cancel-booking"))==null||y.addEventListener("click",()=>$i(u));const m=async()=>{const E=document.getElementById("event-title").value.trim(),M=d.value,H=h.value;if(!E){P("Please enter a title","error");return}const ee=new Date(`${n}T${M}`).getTime(),ge=new Date(`${n}T${H}`).getTime();if(ge<=ee){P("End time must be after start time","error");return}if(Ag({start:ee,end:ge},e)){P("This time slot is already booked!","error"),Ve(u.querySelector(".modal-content"));return}const he=ne.currentUser;if(he)try{await Ig({userId:he.uid,title:E,start:ee,end:ge,email:he.email||"",color:No[Math.floor(Math.random()*No.length)]}),P("Event booked!"),Y=n,$i(u)}catch(ze){P(ze.message,"error")}};(A=document.getElementById("confirm-booking"))==null||A.addEventListener("click",m),["event-title","event-start","event-end"].forEach(E=>{var M;(M=document.getElementById(E))==null||M.addEventListener("keypress",H=>{H.key==="Enter"&&m()})})}function ec(n){var l,c;const e=Date.now(),t=n.filter(u=>{var d;return u.email===((d=ne.currentUser)==null?void 0:d.email)}),i=t.filter(u=>u.end>=e).sort((u,d)=>u.start-d.start),s=t.filter(u=>u.end<e).sort((u,d)=>d.start-u.start),r=document.querySelector(".modal-overlay");r&&r.remove();const o=u=>{const d=new Date(u.start).toLocaleDateString(),h=new Date(u.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),f=new Date(u.end).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
            <div class="my-booking-item" style="border-left-color: ${u.color}">
                <div class="my-booking-info">
                    <div class="my-booking-title">${u.title}</div>
                    <div class="my-booking-time">${d} | ${h} - ${f}</div>
                </div>
                <button class="delete-my-booking" data-id="${u.id}">&times;</button>
            </div>
        `},a=document.createElement("div");a.className="modal-overlay active",a.innerHTML=`
        <div class="modal-content" style="max-height: 85vh; display: flex; flex-direction: column;">
            <h2>My Bookings</h2>
            <div class="my-bookings-list" style="overflow-y: auto; flex: 1; padding-right: 5px;">
                ${t.length===0?'<p style="text-align: center; color: #ff00ff;">No bookings found.</p>':""}
                
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
    `,document.body.appendChild(a),(l=document.getElementById("delete-all-past"))==null||l.addEventListener("click",()=>{const u=s.map(d=>d.id).filter(d=>!!d);u.length>0&&ai(`Delete all ${u.length} past bookings?`,async()=>{try{await Tg(u),P("Past bookings cleared"),a.remove()}catch(d){P(d.message,"error")}})}),(c=document.getElementById("close-my-bookings"))==null||c.addEventListener("click",()=>{a.classList.remove("active"),setTimeout(()=>a.remove(),300)}),document.querySelectorAll(".delete-my-booking").forEach(u=>{u.addEventListener("click",async()=>{const d=u.getAttribute("data-id");d&&ai("Delete this booking?",async()=>{try{await dr(d),P("Booking deleted"),a.remove()}catch(h){P(h.message,"error")}})})})}function Kg(n){if(n.length===0)return"";if(n.length===1)return`background: ${n[0].color||"#ff00ff"}`;const e=n.map(s=>s.color||"#ff00ff"),t=100/e.length;let i="background: linear-gradient(135deg, ";return e.forEach((s,r)=>{i+=`${s} ${r*t}%, ${s} ${(r+1)*t}%`,r<e.length-1&&(i+=", ")}),i+=")",i}const Gg=[{url:"https://games.tegelhus.uk",host:"games.tegelhus.uk",title:"Games",tagline:"The Tegel arcade. Pick a cabinet and start playing.",icon:"👾",tag:"ARCADE",theme:"pink"},{url:"https://atlas.tegelhus.uk",host:"atlas.tegelhus.uk",title:"Atlas",tagline:"Explore the world, one map at a time.",icon:"🌍",tag:"EXPLORE",theme:"cyan"}];function hn(){j.classList.remove("auth-mode"),j.innerHTML=`
        <div class="cal arcade">
            ${Jl("games")}

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
                ${Gg.map((n,e)=>`
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
                                <span class="arcade-card-play">PLAY ${W.chevronRight}</span>
                            </div>
                        </div>
                        <div class="arcade-card-glare"></div>
                    </a>
                `).join("")}
            </div>
        </div>
    `,Zl(),window.matchMedia("(hover: hover) and (pointer: fine)").matches&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&document.querySelectorAll(".arcade-card").forEach(n=>{n.addEventListener("pointermove",e=>{const t=n.getBoundingClientRect(),i=(e.clientX-t.left)/t.width,s=(e.clientY-t.top)/t.height;n.style.setProperty("--rx",`${(.5-s)*10}deg`),n.style.setProperty("--ry",`${(i-.5)*12}deg`),n.style.setProperty("--gx",`${i*100}%`),n.style.setProperty("--gy",`${s*100}%`)}),n.addEventListener("pointerleave",()=>{n.style.setProperty("--rx","0deg"),n.style.setProperty("--ry","0deg")})})}function tc(){var e,t,i,s;j.classList.remove("auth-mode");const n=Rg(ie,G,12,ae);j.innerHTML=`
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                <button id="games-btn" class="games-link">Games</button>
                <button id="back-to-calendar" class="small-btn-neon purple">Back to Calendar</button>
                <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
            </div>
        </div>
        
        <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 20px 0; text-transform: uppercase; text-align: center;">Yearly Overview</h2>

        <div class="year-overview-grid">
            ${n.months.map(r=>{const o=(r.firstDayOfWeek+6)%7,a=Array(o).fill(null);return`
                <div class="month-tile" data-year="${r.year}" data-month="${r.month}">
                    <div class="month-tile-header">
                        ${r.monthName} ${r.year}
                    </div>
                    <div class="month-tile-grid">
                        <div class="mini-day-header">M</div>
                        <div class="mini-day-header">T</div>
                        <div class="mini-day-header">W</div>
                        <div class="mini-day-header">T</div>
                        <div class="mini-day-header">F</div>
                        <div class="mini-day-header">S</div>
                        <div class="mini-day-header">S</div>
                        ${a.map(()=>'<div class="mini-day empty"></div>').join("")}
                        ${r.days.map(l=>`
                            <div class="mini-day ${l.events.length>0?"has-events":""}" 
                                 title="${l.date}${l.events.length>0?": "+l.events.length+" events":""}"
                                 data-date="${l.date}"
                                 style="${Kg(l.events)}">
                                ${l.dayOfMonth}
                            </div>
                        `).join("")}
                    </div>
                </div>
                `}).join("")}
        </div>
    `,(e=document.getElementById("games-btn"))==null||e.addEventListener("click",()=>{O="games",hn()}),(t=document.getElementById("back-to-calendar"))==null||t.addEventListener("click",()=>{O="calendar",He()}),(i=document.getElementById("my-bookings-btn"))==null||i.addEventListener("click",()=>{ec(ae)}),(s=document.getElementById("logout-btn"))==null||s.addEventListener("click",()=>{_a(ne),P("Logged out")}),document.querySelectorAll(".month-tile").forEach(r=>{r.addEventListener("click",()=>{ie=parseInt(r.getAttribute("data-year")||"0"),G=parseInt(r.getAttribute("data-month")||"0"),O="calendar",He()})}),document.querySelectorAll(".mini-day:not(.empty)").forEach(r=>{r.addEventListener("click",o=>{o.stopPropagation();const a=document.createElement("span");a.classList.add("ripple"),r.appendChild(a);const l=o.clientX-r.getBoundingClientRect().left,c=o.clientY-r.getBoundingClientRect().top;a.style.left=`${l}px`,a.style.top=`${c}px`,setTimeout(()=>a.remove(),600);const u=r.getAttribute("data-date");u&&xn(u,ae)})})}function He(){var ge,he,ze,In,ct,Tn;j.classList.remove("auth-mode");const n=ql(ie,G,ae),e=((ge=ne.currentUser)==null?void 0:ge.email)||"",t=Date.now(),i=new Date,s=tt(i),r=ie===i.getFullYear()&&G===i.getMonth(),o=`${ie}-${et(G+1)}`;(!Y||!Y.startsWith(o))&&(Y=r?s:n.days[0].date);const a=(new Date(ie,G,1).getDay()+6)%7,c=Math.ceil((a+n.days.length)/7)*7-a-n.days.length,u=n.days.reduce((g,w)=>g+w.events.length,0),d=ae.filter(g=>g.email===e&&g.end>=t).sort((g,w)=>g.start-w.start)[0],h=(g,w)=>{const re=(a+w)%7,wn=["cal-day",g.date===s?"is-today":"",g.date===Y?"is-selected":"",g.date<s?"is-past":"",re>=5?"is-weekend":"",g.events.length?"has-events":"",g.events.some(oe=>oe.email===e)?"has-mine":""].filter(Boolean).join(" "),nc=g.events.slice(0,3).map(oe=>`<i style="--ev:${oe.color||"#ff00ff"}"></i>`).join(""),ic=g.events.length>3?`<em>+${g.events.length-3}</em>`:"",sc=g.events.slice(0,3).map(oe=>`
                <span class="cal-chip ${oe.email===e?"mine":""}" style="--ev:${oe.color||"#ff00ff"}" title="${Pe(oe.start)}–${Pe(oe.end)}: ${te(oe.title)}">
                    <b>${Pe(oe.start)}</b> ${te(oe.title)}
                </span>`).join(""),rc=g.events.length>3?`<span class="cal-chip-more">+${g.events.length-3} more</span>`:"";return`
            <div class="${wn}" role="button" tabindex="0" data-date="${g.date}" style="--i:${w}"
                 aria-label="${g.date}, ${g.events.length} bookings">
                <span class="cal-day-num">${g.dayOfMonth}</span>
                <span class="cal-dots">${nc}${ic}</span>
                <span class="cal-chips">${sc}${rc}</span>
                <span class="cal-quick-add" data-date="${g.date}" title="Book">${W.plus}</span>
            </div>`},f=Ql(Y,ae),m=un(Y),y=f.map(g=>{const w=g.email===e,re=g.start<=t&&g.end>t;return`
            <div class="agenda-item ${w?"mine":""} ${g.end<t?"done":""}" style="--ev:${g.color||"#ff00ff"}">
                <div class="agenda-time">
                    <span>${Pe(g.start)}</span>
                    <span>${Pe(g.end)}</span>
                </div>
                <div class="agenda-info">
                    <div class="agenda-title">${te(g.title)}${re?'<span class="live-badge">LIVE</span>':""}</div>
                    <div class="agenda-owner">${w?"You":te(g.email||"Unknown")}</div>
                </div>
                ${w?`<button class="agenda-delete" data-id="${g.id}" data-title="${te(g.title)}" aria-label="Delete booking">${W.trash}</button>`:""}
            </div>`}).join(""),A=[Ht?`slide-${Ht}`:"",Mn?"animate":""].join(" ");Ht=null,Mn=!1,j.innerHTML=`
        <div class="cal">
            ${Jl("calendar")}

            ${d?`
                <button class="cal-next-up" id="next-up" data-date="${tt(new Date(d.start))}" style="--ev:${d.color||"#00ffff"}">
                    <span class="next-up-label">${d.start<=t?"Now":"Next up"}</span>
                    <span class="next-up-title">${te(d.title)}</span>
                    <span class="next-up-when">${Hg(tt(new Date(d.start)))} · ${Pe(d.start)}</span>
                </button>
            `:""}

            <div class="cal-body">
                <section class="cal-panel">
                    <div class="cal-monthbar">
                        <button class="cal-nav-btn" id="prev-month" aria-label="Previous month">${W.chevronLeft}</button>
                        <div class="cal-month-title">
                            <h2>${jl[G]}</h2>
                            <span>${ie} · ${u} booking${u===1?"":"s"}</span>
                        </div>
                        ${r?"":'<button class="cal-today-btn" id="go-today-btn">Today</button>'}
                        <button class="cal-nav-btn" id="next-month" aria-label="Next month">${W.chevronRight}</button>
                    </div>

                    <div class="cal-weekdays">
                        ${Vg.map((g,w)=>`<span class="${w>=5?"weekend":""}"><b>${g}</b><i>${g[0]}</i></span>`).join("")}
                    </div>

                    <div class="cal-grid ${A}" id="cal-grid">
                        ${Array(a).fill('<div class="cal-day is-blank"></div>').join("")}
                        ${n.days.map(h).join("")}
                        ${Array(c).fill('<div class="cal-day is-blank"></div>').join("")}
                    </div>
                    <p class="cal-hint">Swipe to change month · tap a day to see bookings</p>
                </section>

                <aside class="cal-agenda" id="cal-agenda">
                    <div class="cal-agenda-head">
                        <div>
                            <div class="cal-agenda-weekday">${Y===s?"Today":m.toLocaleDateString("en-GB",{weekday:"long"})}</div>
                            <div class="cal-agenda-date">${m.toLocaleDateString("en-GB",{day:"numeric",month:"long"})}</div>
                        </div>
                        <span class="cal-agenda-count">${f.length} booked</span>
                    </div>
                    <div class="cal-agenda-list">
                        ${f.length?y:`
                            <div class="agenda-empty">
                                ${W.moon}
                                <p>Nothing booked.<br/>The tegel is all yours.</p>
                            </div>
                        `}
                    </div>
                    <button class="btn-neon" id="book-day-btn">${W.plus}<span>Book this day</span></button>
                </aside>
            </div>
        </div>
    `,Zl(),(he=document.getElementById("prev-month"))==null||he.addEventListener("click",()=>Yt(-1)),(ze=document.getElementById("next-month"))==null||ze.addEventListener("click",()=>Yt(1)),(In=document.getElementById("go-today-btn"))==null||In.addEventListener("click",()=>{const g=new Date;Ht=g.getFullYear()*12+g.getMonth()>ie*12+G?"left":"right",ie=g.getFullYear(),G=g.getMonth(),Y=tt(g),Mn=!0,He()}),(ct=document.getElementById("next-up"))==null||ct.addEventListener("click",g=>{var wn;const w=g.currentTarget.dataset.date,re=un(w);ie=re.getFullYear(),G=re.getMonth(),Y=w,He(),(wn=document.getElementById("cal-agenda"))==null||wn.scrollIntoView({behavior:"smooth",block:"nearest"})});const E=document.getElementById("cal-grid");let M=0,H=0;E.addEventListener("touchstart",g=>{M=g.touches[0].clientX,H=g.touches[0].clientY},{passive:!0}),E.addEventListener("touchend",g=>{const w=g.changedTouches[0].clientX-M,re=g.changedTouches[0].clientY-H;Math.abs(w)>50&&Math.abs(w)>Math.abs(re)*1.5&&Yt(w<0?1:-1)},{passive:!0});const ee=g=>{var w;Y=g,He(),window.matchMedia("(max-width: 1023px)").matches&&((w=document.getElementById("cal-agenda"))==null||w.scrollIntoView({behavior:"smooth",block:"nearest"}))};document.querySelectorAll(".cal-day:not(.is-blank)").forEach(g=>{g.addEventListener("click",w=>{if(w.target.closest(".cal-quick-add")){xn(g.dataset.date,ae);return}if(g.dataset.date===Y){xn(g.dataset.date,ae);return}ee(g.dataset.date)}),g.addEventListener("keydown",w=>{(w.key==="Enter"||w.key===" ")&&(w.preventDefault(),g.click())})}),(Tn=document.getElementById("book-day-btn"))==null||Tn.addEventListener("click",()=>{xn(Y,ae)}),document.querySelectorAll(".agenda-delete").forEach(g=>{g.addEventListener("click",()=>{const w=g.dataset.id;w&&ai(`Delete "${te(g.dataset.title||"")}"?`,async()=>{try{await dr(w),P("Booking deleted")}catch(re){P(re.message,"error")}})})})}let Rn=!0;document.addEventListener("click",n=>{const e=document.getElementById("user-dropdown");e!=null&&e.classList.contains("open")&&!n.target.closest(".user-menu")&&e.classList.remove("open")});window.addEventListener("keydown",n=>{var i;const e=n.target,t=["INPUT","TEXTAREA","SELECT"].includes(e==null?void 0:e.tagName);if(O==="calendar"&&!t&&!document.querySelector(".modal-overlay")&&document.getElementById("cal-grid")&&(n.key==="ArrowLeft"&&Yt(-1),n.key==="ArrowRight"&&Yt(1)),n.key==="Escape"){(i=document.getElementById("user-dropdown"))==null||i.classList.remove("open");const s=document.querySelector(".modal-overlay.active");s&&(s.classList.remove("active"),setTimeout(()=>s.remove(),300))}});Ju(ne,n=>{n&&O!=="resetPassword"?bg(e=>{ae=e,O==="board"||(O==="yearOverview"?tc():O==="games"?hn():He()),Rn&&(Ao(),Rn=!1)}):(O==="games"?hn():O==="resetPassword"&&ds?$g(ds):O==="forgotPassword"?Ti():kt(),Rn&&(Ao(),Rn=!1))});
