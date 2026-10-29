var El=Object.defineProperty;var bl=(n,e,t)=>e in n?El(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var me=(n,e,t)=>bl(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Il="modulepreload",Tl=function(n){return"/"+n},Ms={},Sl=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let o=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=o(t.map(c=>{if(c=Tl(c),c in Ms)return;Ms[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const h=document.createElement("link");if(h.rel=u?"stylesheet":Il,u||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),u)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&r(a.reason);return e().catch(r)})};function wl(n={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:i,onRegistered:s,onRegisteredSW:r,onRegisterError:o}=n;let a,l;const c=async(d=!0)=>{await l};async function u(){if("serviceWorker"in navigator){if(a=await Sl(async()=>{const{Workbox:d}=await import("./workbox-window.prod.es5-BIl4cyR9.js");return{Workbox:d}},[]).then(({Workbox:d})=>new d("/sw.js",{scope:"/",type:"classic"})).catch(d=>{o==null||o(d)}),!a)return;a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||i==null||i()}),a.register({immediate:e}).then(d=>{r?r("/sw.js",d):s==null||s(d)}).catch(d=>{o==null||o(d)})}}return l=u(),c}var xs={};/**
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
 */const Zr={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw lt(e)},lt=function(n){return new Error("Firebase Database ("+Zr.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const eo=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},kl=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Di={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(h=64)),i.push(t[u],t[d],t[h],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(eo(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):kl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const d=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||d==null)throw new Cl;const h=r<<2|a>>4;if(i.push(h),c!==64){const f=a<<4&240|c>>2;if(i.push(f),d!==64){const p=c<<6&192|d;i.push(p)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const to=function(n){const e=eo(n);return Di.encodeByteArray(e,!0)},ln=function(n){return to(n).replace(/\./g,"")},cn=function(n){try{return Di.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Rl(n){return no(void 0,n)}function no(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Al(t)||(n[t]=no(n[t],e[t]));return n}function Al(n){return n!=="__proto__"}/**
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
 */function Nl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Pl=()=>Nl().__FIREBASE_DEFAULTS__,Ol=()=>{if(typeof process>"u"||typeof xs>"u")return;const n=xs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Dl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cn(n[1]);return e&&JSON.parse(e)},Li=()=>{try{return Pl()||Ol()||Dl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},io=n=>{var e,t;return(t=(e=Li())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Ll=n=>{const e=io(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},so=()=>{var n;return(n=Li())===null||n===void 0?void 0:n.config},ro=n=>{var e;return(e=Li())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class On{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function Ml(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ln(JSON.stringify(t)),ln(JSON.stringify(o)),""].join(".")}/**
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
 */function U(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(U())}function xl(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Fl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function oo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ul(){const n=U();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bl(){return Zr.NODE_ADMIN===!0}function Vl(){try{return typeof indexedDB=="object"}catch{return!1}}function Kl(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Hl="FirebaseError";class Ne extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Hl,Object.setPrototypeOf(this,Ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Gl(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ne(s,a,i)}}function Gl(n,e){return n.replace(Wl,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Wl=/\{\$([^}]+)}/g;/**
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
 */function Nt(n){return JSON.parse(n)}function L(n){return JSON.stringify(n)}/**
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
 */const ao=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=Nt(cn(r[0])||""),t=Nt(cn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},$l=function(n){const e=ao(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},jl=function(n){const e=ao(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function pe(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function nt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ui(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function dn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function un(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Fs(r)&&Fs(o)){if(!un(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Fs(n){return n!==null&&typeof n=="object"}/**
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
 */function ct(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function It(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Tt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class ql{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)i[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)i[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const h=i[d-3]^i[d-8]^i[d-14]^i[d-16];i[d]=(h<<1|h>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(s<<5|s>>>27)+c+l+u+i[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=h}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function zl(n,e){const t=new Yl(n,e);return t.subscribe.bind(t)}class Yl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Ql(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Yn),s.error===void 0&&(s.error=Yn),s.complete===void 0&&(s.complete=Yn);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ql(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Yn(){}function xi(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Jl=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,m(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dn=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function B(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const De="[DEFAULT]";/**
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
 */class Xl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new On;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ec(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Zl(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zl(n){return n===De?void 0:n}function ec(n){return n.instantiationMode==="EAGER"}/**
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
 */class tc{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Xl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var S;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(S||(S={}));const nc={debug:S.DEBUG,verbose:S.VERBOSE,info:S.INFO,warn:S.WARN,error:S.ERROR,silent:S.SILENT},ic=S.INFO,sc={[S.DEBUG]:"log",[S.VERBOSE]:"log",[S.INFO]:"info",[S.WARN]:"warn",[S.ERROR]:"error"},rc=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=sc[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=ic,this._logHandler=rc,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in S))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nc[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,S.DEBUG,...e),this._logHandler(this,S.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,S.VERBOSE,...e),this._logHandler(this,S.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,S.INFO,...e),this._logHandler(this,S.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,S.WARN,...e),this._logHandler(this,S.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,S.ERROR,...e),this._logHandler(this,S.ERROR,...e)}}const oc=(n,e)=>e.some(t=>n instanceof t);let Us,Bs;function ac(){return Us||(Us=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lc(){return Bs||(Bs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lo=new WeakMap,hi=new WeakMap,co=new WeakMap,Qn=new WeakMap,Ui=new WeakMap;function cc(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(Ie(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&lo.set(t,n)}).catch(()=>{}),Ui.set(e,n),e}function dc(n){if(hi.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});hi.set(n,e)}let fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||co.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ie(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function uc(n){fi=n(fi)}function hc(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Jn(this),e,...t);return co.set(i,e.sort?e.sort():[e]),Ie(i)}:lc().includes(n)?function(...e){return n.apply(Jn(this),e),Ie(lo.get(this))}:function(...e){return Ie(n.apply(Jn(this),e))}}function fc(n){return typeof n=="function"?hc(n):(n instanceof IDBTransaction&&dc(n),oc(n,ac())?new Proxy(n,fi):n)}function Ie(n){if(n instanceof IDBRequest)return cc(n);if(Qn.has(n))return Qn.get(n);const e=fc(n);return e!==n&&(Qn.set(n,e),Ui.set(e,n)),e}const Jn=n=>Ui.get(n);function pc(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=Ie(o);return i&&o.addEventListener("upgradeneeded",l=>{i(Ie(o.result),l.oldVersion,l.newVersion,Ie(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const mc=["get","getKey","getAll","getAllKeys","count"],gc=["put","add","delete","clear"],Xn=new Map;function Vs(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xn.get(e))return Xn.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=gc.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||mc.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Xn.set(e,r),r}uc(n=>({...n,get:(e,t,i)=>Vs(e,t)||n.get(e,t,i),has:(e,t)=>!!Vs(e,t)||n.has(e,t)}));/**
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
 */class _c{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(vc(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function vc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pi="@firebase/app",Ks="0.10.13";/**
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
 */const de=new Fi("@firebase/app"),yc="@firebase/app-compat",Ec="@firebase/analytics-compat",bc="@firebase/analytics",Ic="@firebase/app-check-compat",Tc="@firebase/app-check",Sc="@firebase/auth",wc="@firebase/auth-compat",kc="@firebase/database",Cc="@firebase/data-connect",Rc="@firebase/database-compat",Ac="@firebase/functions",Nc="@firebase/functions-compat",Pc="@firebase/installations",Oc="@firebase/installations-compat",Dc="@firebase/messaging",Lc="@firebase/messaging-compat",Mc="@firebase/performance",xc="@firebase/performance-compat",Fc="@firebase/remote-config",Uc="@firebase/remote-config-compat",Bc="@firebase/storage",Vc="@firebase/storage-compat",Kc="@firebase/firestore",Hc="@firebase/vertexai-preview",Gc="@firebase/firestore-compat",Wc="firebase",$c="10.14.1";/**
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
 */const mi="[DEFAULT]",jc={[pi]:"fire-core",[yc]:"fire-core-compat",[bc]:"fire-analytics",[Ec]:"fire-analytics-compat",[Tc]:"fire-app-check",[Ic]:"fire-app-check-compat",[Sc]:"fire-auth",[wc]:"fire-auth-compat",[kc]:"fire-rtdb",[Cc]:"fire-data-connect",[Rc]:"fire-rtdb-compat",[Ac]:"fire-fn",[Nc]:"fire-fn-compat",[Pc]:"fire-iid",[Oc]:"fire-iid-compat",[Dc]:"fire-fcm",[Lc]:"fire-fcm-compat",[Mc]:"fire-perf",[xc]:"fire-perf-compat",[Fc]:"fire-rc",[Uc]:"fire-rc-compat",[Bc]:"fire-gcs",[Vc]:"fire-gcs-compat",[Kc]:"fire-fst",[Gc]:"fire-fst-compat",[Hc]:"fire-vertex","fire-js":"fire-js",[Wc]:"fire-js-all"};/**
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
 */const hn=new Map,qc=new Map,gi=new Map;function Hs(n,e){try{n.container.addComponent(e)}catch(t){de.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function it(n){const e=n.name;if(gi.has(e))return de.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,n);for(const t of hn.values())Hs(t,n);for(const t of qc.values())Hs(t,n);return!0}function Bi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ie(n){return n.settings!==void 0}/**
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
 */const zc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Te=new Ht("app","Firebase",zc);/**
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
 */class Yc{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Te.create("app-deleted",{appName:this._name})}}/**
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
 */const dt=$c;function uo(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:mi,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Te.create("bad-app-name",{appName:String(s)});if(t||(t=so()),!t)throw Te.create("no-options");const r=hn.get(s);if(r){if(un(t,r.options)&&un(i,r.config))return r;throw Te.create("duplicate-app",{appName:s})}const o=new tc(s);for(const l of gi.values())o.addComponent(l);const a=new Yc(t,i,o);return hn.set(s,a),a}function ho(n=mi){const e=hn.get(n);if(!e&&n===mi&&so())return uo();if(!e)throw Te.create("no-app",{appName:n});return e}function Se(n,e,t){var i;let s=(i=jc[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),de.warn(a.join(" "));return}it(new Ue(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Qc="firebase-heartbeat-database",Jc=1,Pt="firebase-heartbeat-store";let Zn=null;function fo(){return Zn||(Zn=pc(Qc,Jc,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pt)}catch(t){console.warn(t)}}}}).catch(n=>{throw Te.create("idb-open",{originalErrorMessage:n.message})})),Zn}async function Xc(n){try{const t=(await fo()).transaction(Pt),i=await t.objectStore(Pt).get(po(n));return await t.done,i}catch(e){if(e instanceof Ne)de.warn(e.message);else{const t=Te.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});de.warn(t.message)}}}async function Gs(n,e){try{const i=(await fo()).transaction(Pt,"readwrite");await i.objectStore(Pt).put(e,po(n)),await i.done}catch(t){if(t instanceof Ne)de.warn(t.message);else{const i=Te.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});de.warn(i.message)}}}function po(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Zc=1024,ed=720*60*60*1e3;class td{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new id(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ws();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)?void 0:(this._heartbeatsCache.heartbeats.push({date:r,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=ed}),this._storage.overwrite(this._heartbeatsCache))}catch(i){de.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ws(),{heartbeatsToSend:i,unsentEntries:s}=nd(this._heartbeatsCache.heartbeats),r=ln(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return de.warn(t),""}}}function Ws(){return new Date().toISOString().substring(0,10)}function nd(n,e=Zc){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),$s(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),$s(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class id{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vl()?Kl().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xc(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Gs(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function $s(n){return ln(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sd(n){it(new Ue("platform-logger",e=>new _c(e),"PRIVATE")),it(new Ue("heartbeat",e=>new td(e),"PRIVATE")),Se(pi,Ks,n),Se(pi,Ks,"esm2017"),Se("fire-js","")}sd("");var rd="firebase",od="10.14.1";/**
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
 */Se(rd,od,"app");function Vi(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function mo(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ad=mo,go=new Ht("auth","Firebase",mo());/**
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
 */const fn=new Fi("@firebase/auth");function ld(n,...e){fn.logLevel<=S.WARN&&fn.warn(`Auth (${dt}): ${n}`,...e)}function tn(n,...e){fn.logLevel<=S.ERROR&&fn.error(`Auth (${dt}): ${n}`,...e)}/**
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
 */function J(n,...e){throw Ki(n,...e)}function ee(n,...e){return Ki(n,...e)}function _o(n,e,t){const i=Object.assign(Object.assign({},ad()),{[e]:t});return new Ht("auth","Firebase",i).create(e,{appName:n.name})}function we(n){return _o(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ki(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return go.create(n,...e)}function _(n,e,...t){if(!n)throw Ki(e,...t)}function se(n){const e="INTERNAL ASSERTION FAILED: "+n;throw tn(e),new Error(e)}function ue(n,e){n||se(e)}/**
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
 */function _i(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cd(){return js()==="http:"||js()==="https:"}function js(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function dd(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cd()||Fl()||"connection"in navigator)?navigator.onLine:!0}function ud(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Gt{constructor(e,t){this.shortDelay=e,this.longDelay=t,ue(t>e,"Short delay should be less than long delay!"),this.isMobile=Mi()||oo()}get(){return dd()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Hi(n,e){ue(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class vo{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hd={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fd=new Gt(3e4,6e4);function We(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Pe(n,e,t,i,s={}){return yo(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=ct(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return xl()||(c.referrerPolicy="no-referrer"),vo.fetch()(Eo(n,n.config.apiHost,t,a),c)})}async function yo(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},hd),e);try{const s=new md(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Jt(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jt(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jt(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jt(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw _o(n,u,c);J(n,u)}}catch(s){if(s instanceof Ne)throw s;J(n,"network-request-failed",{message:String(s)})}}async function Ln(n,e,t,i,s={}){const r=await Pe(n,e,t,i,s);return"mfaPendingCredential"in r&&J(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Eo(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Hi(n.config,s):`${n.config.apiScheme}://${s}`}function pd(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class md{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(ee(this.auth,"network-request-failed")),fd.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jt(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=ee(n,e,i);return s.customData._tokenResponse=t,s}function qs(n){return n!==void 0&&n.enterprise!==void 0}class gd{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return pd(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function _d(n,e){return Pe(n,"GET","/v2/recaptchaConfig",We(n,e))}/**
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
 */async function vd(n,e){return Pe(n,"POST","/v1/accounts:delete",e)}async function bo(n,e){return Pe(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function St(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yd(n,e=!1){const t=B(n),i=await t.getIdToken(e),s=Gi(i);_(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:St(ei(s.auth_time)),issuedAtTime:St(ei(s.iat)),expirationTime:St(ei(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ei(n){return Number(n)*1e3}function Gi(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return tn("JWT malformed, contained fewer than 3 sections"),null;try{const s=cn(t);return s?JSON.parse(s):(tn("Failed to decode base64 JWT payload"),null)}catch(s){return tn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zs(n){const e=Gi(n);return _(e,"internal-error"),_(typeof e.exp<"u","internal-error"),_(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ot(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ne&&Ed(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Ed({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class bd{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=St(this.lastLoginAt),this.creationTime=St(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ot(n,bo(t,{idToken:i}));_(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Io(r.providerUserInfo):[],a=Td(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vi(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Id(n){const e=B(n);await pn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Td(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Io(n){return n.map(e=>{var{providerId:t}=e,i=Vi(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Sd(n,e){const t=await yo(n,{},async()=>{const i=ct({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Eo(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vo.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wd(n,e){return Pe(n,"POST","/v2/accounts:revokeToken",We(n,e))}/**
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
 */class Qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_(e.idToken,"internal-error"),_(typeof e.idToken<"u","internal-error"),_(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_(e.length!==0,"internal-error");const t=zs(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Sd(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new Qe;return i&&(_(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(_(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(_(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qe,this.toJSON())}_performRefresh(){return se("not implemented")}}/**
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
 */function ge(n,e){_(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class re{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bd(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vi(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ot(this,this.stsTokenManager.getToken(this.auth,e));return _(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yd(this,e)}reload(){return Id(this)}_assign(e){this!==e&&(_(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new re(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await pn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ie(this.auth.app))return Promise.reject(we(this.auth));const e=await this.getIdToken();return await Ot(this,vd(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const d=(i=t.displayName)!==null&&i!==void 0?i:void 0,h=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,g=(a=t.tenantId)!==null&&a!==void 0?a:void 0,T=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=t.createdAt)!==null&&c!==void 0?c:void 0,x=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Z,emailVerified:je,isAnonymous:Ds,providerData:qn,stsTokenManager:Ls}=t;_(Z&&Ls,e,"internal-error");const vl=Qe.fromJSON(this.name,Ls);_(typeof Z=="string",e,"internal-error"),ge(d,e.name),ge(h,e.name),_(typeof je=="boolean",e,"internal-error"),_(typeof Ds=="boolean",e,"internal-error"),ge(f,e.name),ge(p,e.name),ge(g,e.name),ge(T,e.name),ge(A,e.name),ge(x,e.name);const zn=new re({uid:Z,auth:e,email:h,emailVerified:je,displayName:d,isAnonymous:Ds,photoURL:p,phoneNumber:f,tenantId:g,stsTokenManager:vl,createdAt:A,lastLoginAt:x});return qn&&Array.isArray(qn)&&(zn.providerData=qn.map(yl=>Object.assign({},yl))),T&&(zn._redirectEventId=T),zn}static async _fromIdTokenResponse(e,t,i=!1){const s=new Qe;s.updateFromServerResponse(t);const r=new re({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await pn(r),r}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];_(s.localId!==void 0,"internal-error");const r=s.providerUserInfo!==void 0?Io(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(r!=null&&r.length),a=new Qe;a.updateFromIdToken(i);const l=new re({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:r,metadata:new vi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ys=new Map;function oe(n){ue(n instanceof Function,"Expected a class definition");let e=Ys.get(n);return e?(ue(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ys.set(n,e),e)}/**
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
 */class To{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}To.type="NONE";const Qs=To;/**
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
 */function nn(n,e,t){return`firebase:${n}:${e}:${t}`}class Je{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=nn(this.userKey,s.apiKey,r),this.fullPersistenceKey=nn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?re._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Je(oe(Qs),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||oe(Qs);const o=nn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const d=re._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Je(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Je(r,e,i))}}/**
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
 */function Js(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Co(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(So(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ao(e))return"Blackberry";if(No(e))return"Webos";if(wo(e))return"Safari";if((e.includes("chrome/")||ko(e))&&!e.includes("edge/"))return"Chrome";if(Ro(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function So(n=U()){return/firefox\//i.test(n)}function wo(n=U()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ko(n=U()){return/crios\//i.test(n)}function Co(n=U()){return/iemobile/i.test(n)}function Ro(n=U()){return/android/i.test(n)}function Ao(n=U()){return/blackberry/i.test(n)}function No(n=U()){return/webos/i.test(n)}function Wi(n=U()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function kd(n=U()){var e;return Wi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cd(){return Ul()&&document.documentMode===10}function Po(n=U()){return Wi(n)||Ro(n)||No(n)||Ao(n)||/windows phone/i.test(n)||Co(n)}/**
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
 */function Oo(n,e=[]){let t;switch(n){case"Browser":t=Js(U());break;case"Worker":t=`${Js(U())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${dt}/${i}`}/**
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
 */class Rd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function Ad(n,e={}){return Pe(n,"GET","/v2/passwordPolicy",We(n,e))}/**
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
 */const Nd=6;class Pd{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Nd,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class Od{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xs(this),this.idTokenSubscription=new Xs(this),this.beforeStateQueue=new Rd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=go,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=oe(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Je.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bo(this,{idToken:e}),i=await re._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ie(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await pn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ud()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ie(this.app))return Promise.reject(we(this));const t=e?B(e):null;return t&&_(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ie(this.app)?Promise.reject(we(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ie(this.app)?Promise.reject(we(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(oe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ad(this),t=new Pd(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ht("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await wd(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&oe(e)||this._popupRedirectResolver;_(t,this,"argument-error"),this.redirectPersistenceManager=await Je.create(this,[oe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(_(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oo(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&ld(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function ut(n){return B(n)}class Xs{constructor(e){this.auth=e,this.observer=null,this.addObserver=zl(t=>this.observer=t)}get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dd(n){Mn=n}function Do(n){return Mn.loadJS(n)}function Ld(){return Mn.recaptchaEnterpriseScript}function Md(){return Mn.gapiScript}function xd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const Fd="recaptcha-enterprise",Ud="NO_RECAPTCHA";class Bd{constructor(e){this.type=Fd,this.auth=ut(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{_d(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new gd(l);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(r,o,a){const l=window.grecaptcha;qs(l)?l.enterprise.ready(()=>{l.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(Ud)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!t&&qs(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Ld();l.length!==0&&(l+=a),Do(l).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Zs(n,e,t,i=!1){const s=new Bd(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function er(n,e,t,i){var s;if(!((s=n._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Zs(n,e,t,t==="getOobCode");return i(n,r)}else return i(n,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zs(n,e,t,t==="getOobCode");return i(n,o)}else return Promise.reject(r)})}/**
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
 */function Vd(n,e){const t=Bi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(un(r,e??{}))return s;J(s,"already-initialized")}return t.initialize({options:e})}function Kd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(oe);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Hd(n,e,t){const i=ut(n);_(i._canInitEmulator,i,"emulator-config-failed"),_(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,r=Lo(e),{host:o,port:a}=Gd(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),Wd()}function Lo(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Gd(n){const e=Lo(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:tr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:tr(o)}}}function tr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Wd(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class $i{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return se("not implemented")}_getIdTokenResponse(e){return se("not implemented")}_linkToIdToken(e,t){return se("not implemented")}_getReauthenticationResolver(e){return se("not implemented")}}async function $d(n,e){return Pe(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function jd(n,e){return Ln(n,"POST","/v1/accounts:signInWithPassword",We(n,e))}/**
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
 */async function qd(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",We(n,e))}async function zd(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",We(n,e))}/**
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
 */class Dt extends $i{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Dt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Dt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return er(e,t,"signInWithPassword",jd);case"emailLink":return qd(e,{email:this._email,oobCode:this._password});default:J(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return er(e,i,"signUpPassword",$d);case"emailLink":return zd(e,{idToken:t,email:this._email,oobCode:this._password});default:J(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xe(n,e){return Ln(n,"POST","/v1/accounts:signInWithIdp",We(n,e))}/**
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
 */const Yd="http://localhost";class Be extends $i{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Be(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):J("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Vi(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new Be(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Xe(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Xe(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Xe(e,t)}buildRequest(){const e={requestUri:Yd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ct(t)}return e}}/**
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
 */function Qd(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jd(n){const e=It(Tt(n)).link,t=e?It(Tt(e)).deep_link_id:null,i=It(Tt(n)).deep_link_id;return(i?It(Tt(i)).link:null)||i||t||e||n}class ji{constructor(e){var t,i,s,r,o,a;const l=It(Tt(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(i=l.oobCode)!==null&&i!==void 0?i:null,d=Qd((s=l.mode)!==null&&s!==void 0?s:null);_(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=l.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Jd(e);try{return new ji(t)}catch{return null}}}/**
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
 */class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Dt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ji.parseLink(t);return _(i,"argument-error"),Dt._fromEmailAndCode(e,i.code,i.tenantId)}}ht.PROVIDER_ID="password";ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Wt extends Mo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _e extends Wt{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:_e.PROVIDER_ID,signInMethod:_e.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _e.credentialFromTaggedObject(e)}static credentialFromError(e){return _e.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _e.credential(e.oauthAccessToken)}catch{return null}}}_e.FACEBOOK_SIGN_IN_METHOD="facebook.com";_e.PROVIDER_ID="facebook.com";/**
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
 */class ve extends Wt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Be._fromParams({providerId:ve.PROVIDER_ID,signInMethod:ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ve.credentialFromTaggedObject(e)}static credentialFromError(e){return ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return ve.credential(t,i)}catch{return null}}}ve.GOOGLE_SIGN_IN_METHOD="google.com";ve.PROVIDER_ID="google.com";/**
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
 */class ye extends Wt{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:ye.PROVIDER_ID,signInMethod:ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ye.credentialFromTaggedObject(e)}static credentialFromError(e){return ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ye.credential(e.oauthAccessToken)}catch{return null}}}ye.GITHUB_SIGN_IN_METHOD="github.com";ye.PROVIDER_ID="github.com";/**
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
 */class Ee extends Wt{constructor(){super("twitter.com")}static credential(e,t){return Be._fromParams({providerId:Ee.PROVIDER_ID,signInMethod:Ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ee.credentialFromTaggedObject(e)}static credentialFromError(e){return Ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Ee.credential(t,i)}catch{return null}}}Ee.TWITTER_SIGN_IN_METHOD="twitter.com";Ee.PROVIDER_ID="twitter.com";/**
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
 */class st{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await re._fromIdTokenResponse(e,i,s),o=nr(i);return new st({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=nr(i);return new st({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function nr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class mn extends Ne{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,mn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new mn(e,t,i,s)}}function xo(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?mn._fromErrorAndOperation(n,r,e,i):r})}async function Xd(n,e,t=!1){const i=await Ot(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return st._forOperation(n,"link",i)}/**
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
 */async function Zd(n,e,t=!1){const{auth:i}=n;if(ie(i.app))return Promise.reject(we(i));const s="reauthenticate";try{const r=await Ot(n,xo(i,s,e,n),t);_(r.idToken,i,"internal-error");const o=Gi(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(n.uid===a,i,"user-mismatch"),st._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&J(i,"user-mismatch"),r}}/**
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
 */async function Fo(n,e,t=!1){if(ie(n.app))return Promise.reject(we(n));const i="signIn",s=await xo(n,i,e),r=await st._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function eu(n,e){return Fo(ut(n),e)}/**
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
 */async function tu(n){const e=ut(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function nu(n,e,t){return ie(n.app)?Promise.reject(we(n)):eu(B(n),ht.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&tu(n),i})}function iu(n,e,t,i){return B(n).onIdTokenChanged(e,t,i)}function su(n,e,t){return B(n).beforeAuthStateChanged(e,t)}function ru(n,e,t,i){return B(n).onAuthStateChanged(e,t,i)}function qi(n){return B(n).signOut()}const gn="__sak";/**
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
 */class Uo{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(gn,"1"),this.storage.removeItem(gn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ou=1e3,au=10;class Bo extends Uo{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Po(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Cd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,au):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ou)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Bo.type="LOCAL";const lu=Bo;/**
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
 */class Vo extends Uo{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vo.type="SESSION";const Ko=Vo;/**
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
 */function cu(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class xn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new xn(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await cu(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xn.receivers=[];/**
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
 */function zi(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class du{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=zi("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function te(){return window}function uu(n){te().location.href=n}/**
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
 */function Ho(){return typeof te().WorkerGlobalScope<"u"&&typeof te().importScripts=="function"}async function hu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fu(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function pu(){return Ho()?self:null}/**
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
 */const Go="firebaseLocalStorageDb",mu=1,_n="firebaseLocalStorage",Wo="fbase_key";class $t{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fn(n,e){return n.transaction([_n],e?"readwrite":"readonly").objectStore(_n)}function gu(){const n=indexedDB.deleteDatabase(Go);return new $t(n).toPromise()}function yi(){const n=indexedDB.open(Go,mu);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(_n,{keyPath:Wo})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(_n)?e(i):(i.close(),await gu(),e(await yi()))})})}async function ir(n,e,t){const i=Fn(n,!0).put({[Wo]:e,value:t});return new $t(i).toPromise()}async function _u(n,e){const t=Fn(n,!1).get(e),i=await new $t(t).toPromise();return i===void 0?null:i.value}function sr(n,e){const t=Fn(n,!0).delete(e);return new $t(t).toPromise()}const vu=800,yu=3;class $o{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>yu)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ho()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xn._getInstance(pu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await hu(),!this.activeServiceWorker)return;this.sender=new du(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yi();return await ir(e,gn,"1"),await sr(e,gn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ir(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>_u(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>sr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Fn(s,!1).getAll();return new $t(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$o.type="LOCAL";const Eu=$o;new Gt(3e4,6e4);/**
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
 */function bu(n,e){return e?oe(e):(_(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Yi extends $i{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Xe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Xe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Iu(n){return Fo(n.auth,new Yi(n),n.bypassAuthState)}function Tu(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Zd(t,new Yi(n),n.bypassAuthState)}async function Su(n){const{auth:e,user:t}=n;return _(t,e,"internal-error"),Xd(t,new Yi(n),n.bypassAuthState)}/**
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
 */class jo{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Iu;case"linkViaPopup":case"linkViaRedirect":return Su;case"reauthViaPopup":case"reauthViaRedirect":return Tu;default:J(this.auth,"internal-error")}}resolve(e){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wu=new Gt(2e3,1e4);class ze extends jo{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ze.currentPopupAction&&ze.currentPopupAction.cancel(),ze.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _(e,this.auth,"internal-error"),e}async onExecution(){ue(this.filter.length===1,"Popup operations only handle one event");const e=zi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ze.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wu.get())};e()}}ze.currentPopupAction=null;/**
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
 */const ku="pendingRedirect",sn=new Map;class Cu extends jo{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=sn.get(this.auth._key());if(!e){try{const i=await Ru(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}sn.set(this.auth._key(),e)}return this.bypassAuthState||sn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ru(n,e){const t=Pu(e),i=Nu(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function Au(n,e){sn.set(n._key(),e)}function Nu(n){return oe(n._redirectPersistence)}function Pu(n){return nn(ku,n.config.apiKey,n.name)}async function Ou(n,e,t=!1){if(ie(n.app))return Promise.reject(we(n));const i=ut(n),s=bu(i,e),o=await new Cu(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
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
 */const Du=600*1e3;class Lu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Mu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!qo(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(ee(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Du&&this.cachedEventUids.clear(),this.cachedEventUids.has(rr(e))}saveEventToCache(e){this.cachedEventUids.add(rr(e)),this.lastProcessedEventTime=Date.now()}}function rr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function qo({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Mu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qo(n);default:return!1}}/**
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
 */async function xu(n,e={}){return Pe(n,"GET","/v1/projects",e)}/**
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
 */const Fu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Uu=/^https?/;async function Bu(n){if(n.config.emulator)return;const{authorizedDomains:e}=await xu(n);for(const t of e)try{if(Vu(t))return}catch{}J(n,"unauthorized-domain")}function Vu(n){const e=_i(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Uu.test(t))return!1;if(Fu.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Ku=new Gt(3e4,6e4);function or(){const n=te().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hu(n){return new Promise((e,t)=>{var i,s,r;function o(){or(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{or(),t(ee(n,"network-request-failed"))},timeout:Ku.get()})}if(!((s=(i=te().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=te().gapi)===null||r===void 0)&&r.load)o();else{const a=xd("iframefcb");return te()[a]=()=>{gapi.load?o():t(ee(n,"network-request-failed"))},Do(`${Md()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw rn=null,e})}let rn=null;function Gu(n){return rn=rn||Hu(n),rn}/**
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
 */const Wu=new Gt(5e3,15e3),$u="__/auth/iframe",ju="emulator/auth/iframe",qu={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zu=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Yu(n){const e=n.config;_(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Hi(e,ju):`https://${n.config.authDomain}/${$u}`,i={apiKey:e.apiKey,appName:n.name,v:dt},s=zu.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${ct(i).slice(1)}`}async function Qu(n){const e=await Gu(n),t=te().gapi;return _(t,n,"internal-error"),e.open({where:document.body,url:Yu(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qu,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=ee(n,"network-request-failed"),a=te().setTimeout(()=>{r(o)},Wu.get());function l(){te().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const Ju={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Xu=500,Zu=600,eh="_blank",th="http://localhost";class ar{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nh(n,e,t,i=Xu,s=Zu){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ju),{width:i.toString(),height:s.toString(),top:r,left:o}),c=U().toLowerCase();t&&(a=ko(c)?eh:t),So(c)&&(e=e||th,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[f,p])=>`${h}${f}=${p},`,"");if(kd(c)&&a!=="_self")return ih(e||"",a),new ar(null);const d=window.open(e||"",a,u);_(d,n,"popup-blocked");try{d.focus()}catch{}return new ar(d)}function ih(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const sh="__/auth/handler",rh="emulator/auth/handler",oh=encodeURIComponent("fac");async function lr(n,e,t,i,s,r){_(n.config.authDomain,n,"auth-domain-config-required"),_(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:dt,eventId:s};if(e instanceof Mo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ui(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Wt){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${oh}=${encodeURIComponent(l)}`:"";return`${ah(n)}?${ct(a).slice(1)}${c}`}function ah({config:n}){return n.emulator?Hi(n,rh):`https://${n.authDomain}/${sh}`}/**
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
 */const ti="webStorageSupport";class lh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ko,this._completeRedirectFn=Ou,this._overrideRedirectResult=Au}async _openPopup(e,t,i,s){var r;ue((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await lr(e,t,i,_i(),s);return nh(e,o,zi())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await lr(e,t,i,_i(),s);return uu(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(ue(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Qu(e),i=new Lu(e);return t.register("authEvent",s=>(_(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ti,{type:ti},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ti];o!==void 0&&t(!!o),J(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Bu(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Po()||wo()||Wi()}}const ch=lh;var cr="@firebase/auth",dr="1.7.9";/**
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
 */class dh{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uh(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hh(n){it(new Ue("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;_(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oo(n)},c=new Od(i,s,r,l);return Kd(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),it(new Ue("auth-internal",e=>{const t=ut(e.getProvider("auth").getImmediate());return(i=>new dh(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Se(cr,dr,uh(n)),Se(cr,dr,"esm2017")}/**
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
 */const fh=300,ph=ro("authIdTokenMaxAge")||fh;let ur=null;const mh=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>ph)return;const s=t==null?void 0:t.token;ur!==s&&(ur=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gh(n=ho()){const e=Bi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Vd(n,{popupRedirectResolver:ch,persistence:[Eu,lu,Ko]}),i=ro("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(i,location.origin);if(location.origin===r.origin){const o=mh(r.toString());su(t,o,()=>o(t.currentUser)),iu(t,a=>o(a))}}const s=io("auth");return s&&Hd(t,`http://${s}`),t}function _h(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dd({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=ee("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",_h().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hh("Browser");var hr={};const fr="@firebase/database",pr="1.0.8";/**
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
 */let zo="";function vh(n){zo=n}/**
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
 */class yh{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),L(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Nt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Eh{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return pe(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Yo=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new yh(e)}}catch{}return new Eh},Me=Yo("localStorage"),bh=Yo("sessionStorage");/**
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
 */const Ze=new Fi("@firebase/database"),Ih=(function(){let n=1;return function(){return n++}})(),Qo=function(n){const e=Jl(n),t=new ql;t.update(e);const i=t.digest();return Di.encodeByteArray(i)},jt=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=jt.apply(null,i):typeof i=="object"?e+=L(i):e+=i,e+=" "}return e};let wt=null,mr=!0;const Th=function(n,e){m(!0,"Can't turn on custom loggers persistently."),Ze.logLevel=S.VERBOSE,wt=Ze.log.bind(Ze)},F=function(...n){if(mr===!0&&(mr=!1,wt===null&&bh.get("logging_enabled")===!0&&Th()),wt){const e=jt.apply(null,n);wt(e)}},qt=function(n){return function(...e){F(n,...e)}},Ei=function(...n){const e="FIREBASE INTERNAL ERROR: "+jt(...n);Ze.error(e)},he=function(...n){const e=`FIREBASE FATAL ERROR: ${jt(...n)}`;throw Ze.error(e),new Error(e)},G=function(...n){const e="FIREBASE WARNING: "+jt(...n);Ze.warn(e)},Sh=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&G("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},wh=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},rt="[MIN_NAME]",Ve="[MAX_NAME]",ft=function(n,e){if(n===e)return 0;if(n===rt||e===Ve)return-1;if(e===rt||n===Ve)return 1;{const t=gr(n),i=gr(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},kh=function(n,e){return n===e?0:n<e?-1:1},vt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+L(e))},Qi=function(n){if(typeof n!="object"||n===null)return L(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=L(e[i]),t+=":",t+=Qi(n[e[i]]);return t+="}",t},Xo=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function W(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Zo=function(n){m(!Jo(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Ch=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Rh=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ah(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Nh=new RegExp("^-?(0*)\\d{1,10}$"),Ph=-2147483648,Oh=2147483647,gr=function(n){if(Nh.test(n)){const e=Number(n);if(e>=Ph&&e<=Oh)return e}return null},pt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw G("Exception was thrown by user callback.",t),e},Math.floor(0))}},Dh=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},kt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Lh{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){G(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Mh{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(F("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',G(e)}}class on{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}on.OWNER="owner";/**
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
 */const Ji="5",ea="v",ta="s",na="r",ia="f",sa=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ra="ls",oa="p",bi="ac",aa="websocket",la="long_polling";/**
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
 */class ca{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Me.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Me.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xh(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function da(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let i;if(e===aa)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===la)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xh(n)&&(t.ns=n.namespace);const s=[];return W(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
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
 */class Fh{constructor(){this.counters_={}}incrementCounter(e,t=1){pe(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Rl(this.counters_)}}/**
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
 */const ni={},ii={};function Xi(n){const e=n.toString();return ni[e]||(ni[e]=new Fh),ni[e]}function Uh(n,e){const t=n.toString();return ii[t]||(ii[t]=e()),ii[t]}/**
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
 */class Bh{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&pt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const _r="start",Vh="close",Kh="pLPCommand",Hh="pRTLPCB",ua="id",ha="pw",fa="ser",Gh="cb",Wh="seg",$h="ts",jh="d",qh="dframe",pa=1870,ma=30,zh=pa-ma,Yh=25e3,Qh=3e4;class Ye{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qt(e),this.stats_=Xi(t),this.urlFn=l=>(this.appCheckToken&&(l[bi]=this.appCheckToken),da(t,la,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Bh(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Qh)),wh(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zi((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===_r)this.id=a,this.password=l;else if(o===Vh)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[_r]="t",i[fa]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Gh]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ea]=Ji,this.transportSessionId&&(i[ta]=this.transportSessionId),this.lastSessionId&&(i[ra]=this.lastSessionId),this.applicationId&&(i[oa]=this.applicationId),this.appCheckToken&&(i[bi]=this.appCheckToken),typeof location<"u"&&location.hostname&&sa.test(location.hostname)&&(i[na]=ia);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ye.forceAllow_=!0}static forceDisallow(){Ye.forceDisallow_=!0}static isAvailable(){return Ye.forceAllow_?!0:!Ye.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ch()&&!Rh()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=L(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=to(t),s=Xo(i,zh);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[qh]="t",i[ua]=e,i[ha]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=L(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Zi{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ih(),window[Kh+this.uniqueCallbackIdentifier]=e,window[Hh+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zi.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){F("frame writing exception"),a.stack&&F(a.stack),F(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||F("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ua]=this.myID,e[ha]=this.myPW,e[fa]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+ma+i.length<=pa;){const o=this.pendingSegs.shift();i=i+"&"+Wh+s+"="+o.seg+"&"+$h+s+"="+o.ts+"&"+jh+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Yh)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{F("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Jh=16384,Xh=45e3;let vn=null;typeof MozWebSocket<"u"?vn=MozWebSocket:typeof WebSocket<"u"&&(vn=WebSocket);class j{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qt(this.connId),this.stats_=Xi(t),this.connURL=j.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ea]=Ji,typeof location<"u"&&location.hostname&&sa.test(location.hostname)&&(o[na]=ia),t&&(o[ta]=t),i&&(o[ra]=i),s&&(o[bi]=s),r&&(o[oa]=r),da(e,aa,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Me.set("previous_websocket_failure",!0);try{let i;Bl(),this.mySock=new vn(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){j.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&vn!==null&&!j.forceDisallow_}static previouslyFailed(){return Me.isInMemoryStorage||Me.get("previous_websocket_failure")===!0}markConnectionHealthy(){Me.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=Nt(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=L(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xo(t,Jh);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Xh))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}j.responsesRequiredToBeHealthy=2;j.healthyTimeout=3e4;/**
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
 */class Lt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ye,j]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=j&&j.isAvailable();let i=t&&!j.previouslyFailed();if(e.webSocketOnly&&(t||G("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[j];else{const s=this.transports_=[];for(const r of Lt.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);Lt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Lt.globalTransportInitialized_=!1;/**
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
 */const Zh=6e4,ef=5e3,tf=10*1024,nf=100*1024,si="t",vr="d",sf="s",yr="r",rf="e",Er="o",br="a",Ir="n",Tr="p",of="h";class af{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qt("c:"+this.id+":"),this.transportManager_=new Lt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=kt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>nf?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>tf?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(si in e){const t=e[si];t===br?this.upgradeIfSecondaryHealthy_():t===yr?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Er&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=vt("t",e),i=vt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Tr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:br,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ir,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=vt("t",e),i=vt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=vt(si,e);if(vr in e){const i=e[vr];if(t===of){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===Ir){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===sf?this.onConnectionShutdown_(i):t===yr?this.onReset_(i):t===rf?Ei("Server Error: "+i):t===Er?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ei("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Ji!==i&&G("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),kt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Zh))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):kt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(ef))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Tr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Me.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ga{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class _a{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class yn extends _a{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yn}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Sr=32,wr=768;class w{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function I(){return new w("")}function y(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Re(n){return n.pieces_.length-n.pieceNum_}function k(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new w(n.pieces_,e)}function va(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function lf(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function ya(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ea(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new w(e,0)}function N(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof w)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new w(t,0)}function b(n){return n.pieceNum_>=n.pieces_.length}function K(n,e){const t=y(n),i=y(e);if(t===null)return e;if(t===i)return K(k(n),k(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function es(n,e){if(Re(n)!==Re(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function q(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Re(n)>Re(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class cf{constructor(e,t){this.errorPrefix_=t,this.parts_=ya(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Dn(this.parts_[i]);ba(this)}}function df(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Dn(e),ba(n)}function uf(n){const e=n.parts_.pop();n.byteLength_-=Dn(e),n.parts_.length>0&&(n.byteLength_-=1)}function ba(n){if(n.byteLength_>wr)throw new Error(n.errorPrefix_+"has a key path longer than "+wr+" bytes ("+n.byteLength_+").");if(n.parts_.length>Sr)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Sr+") or object contains a cycle "+Le(n))}function Le(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class ts extends _a{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new ts}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yt=1e3,hf=300*1e3,kr=30*1e3,ff=1.3,pf=3e4,mf="server_kill",Cr=3;class le extends ga{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=le.nextPersistentConnectionId_++,this.log_=qt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yt,this.maxReconnectDelay_=hf,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ts.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&yn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(L(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new On,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;le.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&pe(e,"w")){const i=nt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();G(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||jl(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=kr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=$l(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+L(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ei("Unrecognized action received from server: "+L(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>pf&&(this.reconnectDelay_=yt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ff)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+le.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?F("getToken() completed but was canceled"):(F("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new af(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{G(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(mf)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&G(d),l())}}}interrupt(e){F("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){F("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ui(this.interruptReasons_)&&(this.reconnectDelay_=yt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Qi(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new w(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){F("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Cr&&(this.reconnectDelay_=kr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){F("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Cr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+zo.replace(/\./g,"-")]=1,Mi()?e["framework.cordova"]=1:oo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=yn.getInstance().currentlyOnline();return ui(this.interruptReasons_)&&e}}le.nextPersistentConnectionId_=0;le.nextConnectionId_=0;/**
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
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
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
 */class Un{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new E(rt,e),s=new E(rt,t);return this.compare(i,s)!==0}minPost(){return E.MIN}}/**
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
 */let Xt;class Ia extends Un{static get __EMPTY_NODE(){return Xt}static set __EMPTY_NODE(e){Xt=e}compare(e,t){return ft(e.name,t.name)}isDefinedOn(e){throw lt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(Ve,Xt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,Xt)}toString(){return".key"}}const et=new Ia;/**
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
 */class Zt{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class D{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??D.RED,this.left=s??H.EMPTY_NODE,this.right=r??H.EMPTY_NODE}copy(e,t,i,s,r){return new D(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return H.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return H.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,D.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,D.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}D.RED=!0;D.BLACK=!1;class gf{copy(e,t,i,s,r){return this}insert(e,t,i){return new D(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class H{constructor(e,t=H.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new H(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,D.BLACK,null,null))}remove(e){return new H(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,D.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Zt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Zt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Zt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Zt(this.root_,null,this.comparator_,!0,e)}}H.EMPTY_NODE=new gf;/**
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
 */function _f(n,e){return ft(n.name,e.name)}function ns(n,e){return ft(n,e)}/**
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
 */let Ii;function vf(n){Ii=n}const Ta=function(n){return typeof n=="number"?"number:"+Zo(n):"string:"+n},Sa=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&pe(e,".sv"),"Priority must be a string or number.")}else m(n===Ii||n.isEmpty(),"priority of unexpected type.");m(n===Ii||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Rr;class O{constructor(e,t=O.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Sa(this.priorityNode_)}static set __childrenNodeConstructor(e){Rr=e}static get __childrenNodeConstructor(){return Rr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new O(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:O.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return b(e)?this:y(e)===".priority"?this.priorityNode_:O.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:O.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=y(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(m(i!==".priority"||Re(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,O.__childrenNodeConstructor.EMPTY_NODE.updateChild(k(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ta(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Zo(this.value_):e+=this.value_,this.lazyHash_=Qo(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===O.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof O.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=O.VALUE_TYPE_ORDER.indexOf(t),r=O.VALUE_TYPE_ORDER.indexOf(i);return m(s>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}O.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let wa,ka;function yf(n){wa=n}function Ef(n){ka=n}class bf extends Un{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ft(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(Ve,new O("[PRIORITY-POST]",ka))}makePost(e,t){const i=wa(e);return new E(t,new O("[PRIORITY-POST]",i))}toString(){return".priority"}}const R=new bf;/**
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
 */const If=Math.log(2);class Tf{constructor(e){const t=r=>parseInt(Math.log(r)/If,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const En=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=n[l],h=t?t(d):d,new D(h,d.node,D.BLACK,null,null);{const f=parseInt(u/2,10)+l,p=s(l,f),g=s(f+1,c);return d=n[f],h=t?t(d):d,new D(h,d.node,D.BLACK,p,g)}},r=function(l){let c=null,u=null,d=n.length;const h=function(p,g){const T=d-p,A=d;d-=p;const x=s(T+1,A),Z=n[T],je=t?t(Z):Z;f(new D(je,Z.node,g,null,x))},f=function(p){c?(c.left=p,c=p):(u=p,c=p)};for(let p=0;p<l.count;++p){const g=l.nextBitIsOne(),T=Math.pow(2,l.count-(p+1));g?h(T,D.BLACK):(h(T,D.BLACK),h(T,D.RED))}return u},o=new Tf(n.length),a=r(o);return new H(i||e,a)};/**
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
 */let ri;const qe={};class ae{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return m(qe&&R,"ChildrenNode.ts has not been loaded"),ri=ri||new ae({".priority":qe},{".priority":R}),ri}get(e){const t=nt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof H?t:null}hasIndex(e){return pe(this.indexSet_,e.toString())}addIndex(e,t){m(e!==et,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=En(i,e.getCompare()):a=qe;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new ae(u,c)}addToIndexes(e,t){const i=dn(this.indexes_,(s,r)=>{const o=nt(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),s===qe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(E.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),En(a,o.getCompare())}else return qe;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new ae(i,this.indexSet_)}removeFromIndexes(e,t){const i=dn(this.indexes_,s=>{if(s===qe)return s;{const r=t.get(e.name);return r?s.remove(new E(e.name,r)):s}});return new ae(i,this.indexSet_)}}/**
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
 */let Et;class v{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Sa(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Et||(Et=new v(new H(ns),null,ae.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Et}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Et:t}}getChild(e){const t=y(e);return t===null?this:this.getImmediateChild(t).getChild(k(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new E(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?Et:this.priorityNode_;return new v(s,o,r)}}updateChild(e,t){const i=y(e);if(i===null)return t;{m(y(e)!==".priority"||Re(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(k(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(R,(o,a)=>{t[o]=a.val(e),i++,r&&v.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ta(this.getPriority().val())+":"),this.forEachChild(R,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Qo(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===zt?-1:0}withIndex(e){if(e===et||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===et||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(R),s=t.getIterator(R);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===et?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Sf extends v{constructor(){super(new H(ns),v.EMPTY_NODE,ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const zt=new Sf;Object.defineProperties(E,{MIN:{value:new E(rt,v.EMPTY_NODE)},MAX:{value:new E(Ve,zt)}});Ia.__EMPTY_NODE=v.EMPTY_NODE;O.__childrenNodeConstructor=v;vf(zt);Ef(zt);/**
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
 */const wf=!0;function M(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new O(t,M(e))}if(!(n instanceof Array)&&wf){const t=[];let i=!1;if(W(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=M(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new E(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=En(t,_f,o=>o.name,ns);if(i){const o=En(t,R.getCompare());return new v(r,M(e),new ae({".priority":o},{".priority":R}))}else return new v(r,M(e),ae.Default)}else{let t=v.EMPTY_NODE;return W(n,(i,s)=>{if(pe(n,i)&&i.substring(0,1)!=="."){const r=M(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(M(e))}}yf(M);/**
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
 */class kf extends Un{constructor(e){super(),this.indexPath_=e,m(!b(e)&&y(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ft(e.name,t.name):r}makePost(e,t){const i=M(e),s=v.EMPTY_NODE.updateChild(this.indexPath_,i);return new E(t,s)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,zt);return new E(Ve,e)}toString(){return ya(this.indexPath_,0).join("/")}}/**
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
 */class Cf extends Un{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ft(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const i=M(e);return new E(t,i)}toString(){return".value"}}const Rf=new Cf;/**
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
 */function Ca(n){return{type:"value",snapshotNode:n}}function ot(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Mt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function xt(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Af(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class is{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(Mt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ot(t,i)):o.trackChildChange(xt(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(R,(s,r)=>{t.hasChild(s)||i.trackChildChange(Mt(s,r))}),t.isLeafNode()||t.forEachChild(R,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(xt(s,r,o))}else i.trackChildChange(ot(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ft{constructor(e){this.indexedFilter_=new is(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ft.getStartPost_(e),this.endPost_=Ft.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new E(t,i))||(i=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=v.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(R,(o,a)=>{r.matches(new E(o,a))||(s=s.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Nf{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new Ft(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new E(t,i))||(i=v.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,f)=>d(f,h)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new E(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let h=s.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===t||a.hasChild(h.name));)h=s.getChildAfterChild(this.index_,h,this.reverse_);const f=h==null?1:o(h,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(xt(t,i,d)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(Mt(t,d));const g=a.updateImmediateChild(t,v.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ot(h.name,h.node)),g.updateImmediateChild(h.name,h.node)):g}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Mt(c.name,c.node)),r.trackChildChange(ot(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
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
 */class ss{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=R}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rt}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ve}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===R}copy(){const e=new ss;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Pf(n){return n.loadsAllData()?new is(n.getIndex()):n.hasLimit()?new Nf(n):new Ft(n)}function Ar(n){const e={};if(n.isDefault())return e;let t;if(n.index_===R?t="$priority":n.index_===Rf?t="$value":n.index_===et?t="$key":(m(n.index_ instanceof kf,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=L(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=L(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+L(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=L(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+L(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Nr(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==R&&(e.i=n.index_.toString()),e}/**
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
 */class bn extends ga{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=qt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=bn.getListenId_(e,i),a={};this.listens_[o]=a;const l=Ar(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,i),nt(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",s(h,null)}})}unlisten(e,t){const i=bn.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Ar(e._queryParams),i=e._path.toString(),s=new On;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ct(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Nt(a.responseText)}catch{G("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&G("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Of{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function In(){return{value:null,children:new Map}}function Ra(n,e,t){if(b(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=y(e);n.children.has(i)||n.children.set(i,In());const s=n.children.get(i);e=k(e),Ra(s,e,t)}}function Ti(n,e,t){n.value!==null?t(e,n.value):Df(n,(i,s)=>{const r=new w(e.toString()+"/"+i);Ti(s,r,t)})}function Df(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Lf{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&W(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const Pr=10*1e3,Mf=30*1e3,xf=300*1e3;class Ff{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Lf(e);const i=Pr+(Mf-Pr)*Math.random();kt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;W(e,(s,r)=>{r>0&&pe(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),kt(this.reportStats_.bind(this),Math.floor(Math.random()*2*xf))}}/**
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
 */var z;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(z||(z={}));function Aa(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function os(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Tn{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=z.ACK_USER_WRITE,this.source=Aa()}operationForChild(e){if(b(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new w(e));return new Tn(I(),t,this.revert)}}else return m(y(this.path)===e,"operationForChild called for unrelated child."),new Tn(k(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ut{constructor(e,t){this.source=e,this.path=t,this.type=z.LISTEN_COMPLETE}operationForChild(e){return b(this.path)?new Ut(this.source,I()):new Ut(this.source,k(this.path))}}/**
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
 */class Ke{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=z.OVERWRITE}operationForChild(e){return b(this.path)?new Ke(this.source,I(),this.snap.getImmediateChild(e)):new Ke(this.source,k(this.path),this.snap)}}/**
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
 */class Bt{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=z.MERGE}operationForChild(e){if(b(this.path)){const t=this.children.subtree(new w(e));return t.isEmpty()?null:t.value?new Ke(this.source,I(),t.value):new Bt(this.source,I(),t)}else return m(y(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bt(this.source,k(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class He{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(b(e))return this.isFullyInitialized()&&!this.filtered_;const t=y(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Uf{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Bf(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Af(o.childName,o.snapshotNode))}),bt(n,s,"child_removed",e,i,t),bt(n,s,"child_added",e,i,t),bt(n,s,"child_moved",r,i,t),bt(n,s,"child_changed",e,i,t),bt(n,s,"value",e,i,t),s}function bt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>Kf(n,a,l)),o.forEach(a=>{const l=Vf(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Vf(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Kf(n,e,t){if(e.childName==null||t.childName==null)throw lt("Should only compare child_ events.");const i=new E(e.childName,e.snapshotNode),s=new E(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Bn(n,e){return{eventCache:n,serverCache:e}}function Ct(n,e,t,i){return Bn(new He(e,t,i),n.serverCache)}function Na(n,e,t,i){return Bn(n.eventCache,new He(e,t,i))}function Si(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ge(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let oi;const Hf=()=>(oi||(oi=new H(kh)),oi);class C{constructor(e,t=Hf()){this.value=e,this.children=t}static fromObject(e){let t=new C(null);return W(e,(i,s)=>{t=t.set(new w(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:I(),value:this.value};if(b(e))return null;{const i=y(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(k(e),t);return r!=null?{path:N(new w(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(b(e))return this;{const t=y(e),i=this.children.get(t);return i!==null?i.subtree(k(e)):new C(null)}}set(e,t){if(b(e))return new C(t,this.children);{const i=y(e),r=(this.children.get(i)||new C(null)).set(k(e),t),o=this.children.insert(i,r);return new C(this.value,o)}}remove(e){if(b(e))return this.children.isEmpty()?new C(null):new C(null,this.children);{const t=y(e),i=this.children.get(t);if(i){const s=i.remove(k(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new C(null):new C(this.value,r)}else return this}}get(e){if(b(e))return this.value;{const t=y(e),i=this.children.get(t);return i?i.get(k(e)):null}}setTree(e,t){if(b(e))return t;{const i=y(e),r=(this.children.get(i)||new C(null)).setTree(k(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new C(this.value,o)}}fold(e){return this.fold_(I(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(N(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,I(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(b(e))return null;{const r=y(e),o=this.children.get(r);return o?o.findOnPath_(k(e),N(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,I(),t)}foreachOnPath_(e,t,i){if(b(e))return this;{this.value&&i(t,this.value);const s=y(e),r=this.children.get(s);return r?r.foreachOnPath_(k(e),N(t,s),i):new C(null)}}foreach(e){this.foreach_(I(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(N(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class Y{constructor(e){this.writeTree_=e}static empty(){return new Y(new C(null))}}function Rt(n,e,t){if(b(e))return new Y(new C(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=K(s,e);return r=r.updateChild(o,t),new Y(n.writeTree_.set(s,r))}else{const s=new C(t),r=n.writeTree_.setTree(e,s);return new Y(r)}}}function Or(n,e,t){let i=n;return W(t,(s,r)=>{i=Rt(i,N(e,s),r)}),i}function Dr(n,e){if(b(e))return Y.empty();{const t=n.writeTree_.setTree(e,new C(null));return new Y(t)}}function wi(n,e){return $e(n,e)!=null}function $e(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(K(t.path,e)):null}function Lr(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(R,(i,s)=>{e.push(new E(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new E(i,s.value))}),e}function ke(n,e){if(b(e))return n;{const t=$e(n,e);return t!=null?new Y(new C(t)):new Y(n.writeTree_.subtree(e))}}function ki(n){return n.writeTree_.isEmpty()}function at(n,e){return Pa(I(),n.writeTree_,e)}function Pa(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Pa(N(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(N(n,".priority"),i)),t}}/**
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
 */function as(n,e){return Ma(e,n)}function Gf(n,e,t,i,s){m(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=Rt(n.visibleWrites,e,t)),n.lastWriteId=i}function Wf(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function $f(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&jf(a,i.path)?s=!1:q(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return qf(n),!0;if(i.snap)n.visibleWrites=Dr(n.visibleWrites,i.path);else{const a=i.children;W(a,l=>{n.visibleWrites=Dr(n.visibleWrites,N(i.path,l))})}return!0}else return!1}function jf(n,e){if(n.snap)return q(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&q(N(n.path,t),e))return!0;return!1}function qf(n){n.visibleWrites=Oa(n.allWrites,zf,I()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function zf(n){return n.visible}function Oa(n,e,t){let i=Y.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)q(t,o)?(a=K(t,o),i=Rt(i,a,r.snap)):q(o,t)&&(a=K(o,t),i=Rt(i,I(),r.snap.getChild(a)));else if(r.children){if(q(t,o))a=K(t,o),i=Or(i,a,r.children);else if(q(o,t))if(a=K(o,t),b(a))i=Or(i,I(),r.children);else{const l=nt(r.children,y(a));if(l){const c=l.getChild(k(a));i=Rt(i,I(),c)}}}else throw lt("WriteRecord should have .snap or .children")}}return i}function Da(n,e,t,i,s){if(!i&&!s){const r=$e(n.visibleWrites,e);if(r!=null)return r;{const o=ke(n.visibleWrites,e);if(ki(o))return t;if(t==null&&!wi(o,I()))return null;{const a=t||v.EMPTY_NODE;return at(o,a)}}}else{const r=ke(n.visibleWrites,e);if(!s&&ki(r))return t;if(!s&&t==null&&!wi(r,I()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(q(c.path,e)||q(e,c.path))},a=Oa(n.allWrites,o,e),l=t||v.EMPTY_NODE;return at(a,l)}}}function Yf(n,e,t){let i=v.EMPTY_NODE;const s=$e(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(R,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=ke(n.visibleWrites,e);return t.forEachChild(R,(o,a)=>{const l=at(ke(r,new w(o)),a);i=i.updateImmediateChild(o,l)}),Lr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=ke(n.visibleWrites,e);return Lr(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function Qf(n,e,t,i,s){m(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=N(e,t);if(wi(n.visibleWrites,r))return null;{const o=ke(n.visibleWrites,r);return ki(o)?s.getChild(t):at(o,s.getChild(t))}}function Jf(n,e,t,i){const s=N(e,t),r=$e(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=ke(n.visibleWrites,s);return at(o,i.getNode().getImmediateChild(t))}else return null}function Xf(n,e){return $e(n.visibleWrites,e)}function Zf(n,e,t,i,s,r,o){let a;const l=ke(n.visibleWrites,e),c=$e(l,I());if(c!=null)a=c;else if(t!=null)a=at(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=h.getNext();for(;f&&u.length<s;)d(f,i)!==0&&u.push(f),f=h.getNext();return u}else return[]}function ep(){return{visibleWrites:Y.empty(),allWrites:[],lastWriteId:-1}}function Sn(n,e,t,i){return Da(n.writeTree,n.treePath,e,t,i)}function ls(n,e){return Yf(n.writeTree,n.treePath,e)}function Mr(n,e,t,i){return Qf(n.writeTree,n.treePath,e,t,i)}function wn(n,e){return Xf(n.writeTree,N(n.treePath,e))}function tp(n,e,t,i,s,r){return Zf(n.writeTree,n.treePath,e,t,i,s,r)}function cs(n,e,t){return Jf(n.writeTree,n.treePath,e,t)}function La(n,e){return Ma(N(n.treePath,e),n.writeTree)}function Ma(n,e){return{treePath:n,writeTree:e}}/**
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
 */class np{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,xt(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,Mt(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,ot(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,xt(i,e.snapshotNode,s.oldSnap));else throw lt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ip{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const xa=new ip;class ds{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new He(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ge(this.viewCache_),r=tp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function sp(n){return{filter:n}}function rp(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function op(n,e,t,i,s){const r=new np;let o,a;if(t.type===z.OVERWRITE){const c=t;c.source.fromUser?o=Ci(n,e,c.path,c.snap,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!b(c.path),o=kn(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===z.MERGE){const c=t;c.source.fromUser?o=lp(n,e,c.path,c.children,i,s,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ri(n,e,c.path,c.children,i,s,a,r))}else if(t.type===z.ACK_USER_WRITE){const c=t;c.revert?o=up(n,e,c.path,i,s,r):o=cp(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===z.LISTEN_COMPLETE)o=dp(n,e,t.path,i,r);else throw lt("Unknown operation type: "+t.type);const l=r.getChanges();return ap(e,o,l),{viewCache:o,changes:l}}function ap(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Si(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Ca(Si(e)))}}function Fa(n,e,t,i,s,r){const o=e.eventCache;if(wn(i,t)!=null)return e;{let a,l;if(b(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ge(e),u=c instanceof v?c:v.EMPTY_NODE,d=ls(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Sn(i,Ge(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=y(t);if(c===".priority"){m(Re(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Mr(i,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=k(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Mr(i,t,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=cs(i,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,s,r):a=o.getNode()}}return Ct(e,a,o.isFullyInitialized()||b(t),n.filter.filtersNodes())}}function kn(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(b(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=y(t);if(!l.isCompleteForPath(t)&&Re(t)>1)return e;const p=k(t),T=l.getNode().getImmediateChild(f).updateChild(p,i);f===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),f,T,p,xa,null)}const d=Na(e,c,l.isFullyInitialized()||b(t),u.filtersNodes()),h=new ds(s,d,r);return Fa(n,d,t,s,h,a)}function Ci(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new ds(s,e,r);if(b(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Ct(e,c,!0,n.filter.filtersNodes());else{const d=y(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Ct(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=k(t),f=a.getNode().getImmediateChild(d);let p;if(b(h))p=i;else{const g=u.getCompleteChild(d);g!=null?va(h)===".priority"&&g.getChild(Ea(h)).isEmpty()?p=g:p=g.updateChild(h,i):p=v.EMPTY_NODE}if(f.equals(p))l=e;else{const g=n.filter.updateChild(a.getNode(),d,p,h,u,o);l=Ct(e,g,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function xr(n,e){return n.eventCache.isCompleteForChild(e)}function lp(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=N(t,l);xr(e,y(u))&&(a=Ci(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=N(t,l);xr(e,y(u))||(a=Ci(n,a,u,c,s,r,o))}),a}function Fr(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ri(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;b(t)?c=i:c=new C(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),p=Fr(n,f,h);l=kn(n,l,new w(d),p,s,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const f=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!f){const p=e.serverCache.getNode().getImmediateChild(d),g=Fr(n,p,h);l=kn(n,l,new w(d),g,s,r,o,a)}}),l}function cp(n,e,t,i,s,r,o){if(wn(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(b(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return kn(n,e,t,l.getNode().getChild(t),s,r,a,o);if(b(t)){let c=new C(null);return l.getNode().forEachChild(et,(u,d)=>{c=c.set(new w(u),d)}),Ri(n,e,t,c,s,r,a,o)}else return e}else{let c=new C(null);return i.foreach((u,d)=>{const h=N(t,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ri(n,e,t,c,s,r,a,o)}}function dp(n,e,t,i,s){const r=e.serverCache,o=Na(e,r.getNode(),r.isFullyInitialized()||b(t),r.isFiltered());return Fa(n,o,t,i,xa,s)}function up(n,e,t,i,s,r){let o;if(wn(i,t)!=null)return e;{const a=new ds(i,e,s),l=e.eventCache.getNode();let c;if(b(t)||y(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Sn(i,Ge(e));else{const d=e.serverCache.getNode();m(d instanceof v,"serverChildren would be complete if leaf node"),u=ls(i,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=y(t);let d=cs(i,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,k(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,v.EMPTY_NODE,k(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Sn(i,Ge(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||wn(i,I())!=null,Ct(e,c,o,n.filter.filtersNodes())}}/**
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
 */class hp{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new is(i.getIndex()),r=Pf(i);this.processor_=sp(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new He(l,o.isFullyInitialized(),s.filtersNodes()),d=new He(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Bn(d,u),this.eventGenerator_=new Uf(this.query_)}get query(){return this.query_}}function fp(n){return n.viewCache_.serverCache.getNode()}function pp(n,e){const t=Ge(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!b(e)&&!t.getImmediateChild(y(e)).isEmpty())?t.getChild(e):null}function Ur(n){return n.eventRegistrations_.length===0}function mp(n,e){n.eventRegistrations_.push(e)}function Br(n,e,t){const i=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Vr(n,e,t,i){e.type===z.MERGE&&e.source.queryId!==null&&(m(Ge(n.viewCache_),"We should always have a full cache before handling merges"),m(Si(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=op(n.processor_,s,e,t,i);return rp(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ua(n,r.changes,r.viewCache.eventCache.getNode(),null)}function gp(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(R,(r,o)=>{i.push(ot(r,o))}),t.isFullyInitialized()&&i.push(Ca(t.getNode())),Ua(n,i,t.getNode(),e)}function Ua(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Bf(n.eventGenerator_,e,t,s)}/**
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
 */let Cn;class _p{constructor(){this.views=new Map}}function vp(n){m(!Cn,"__referenceConstructor has already been defined"),Cn=n}function yp(){return m(Cn,"Reference.ts has not been loaded"),Cn}function Ep(n){return n.views.size===0}function us(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return m(r!=null,"SyncTree gave us an op for an invalid query."),Vr(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Vr(o,e,t,i));return r}}function bp(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Sn(t,s?i:null),l=!1;a?l=!0:i instanceof v?(a=ls(t,i),l=!1):(a=v.EMPTY_NODE,l=!1);const c=Bn(new He(a,l,!1),new He(i,s,!1));return new hp(e,c)}return o}function Ip(n,e,t,i,s,r){const o=bp(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),mp(o,t),gp(o,t)}function Tp(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Ae(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Br(c,t,i)),Ur(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Br(l,t,i)),Ur(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Ae(n)&&r.push(new(yp())(e._repo,e._path)),{removed:r,events:o}}function Ba(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function tt(n,e){let t=null;for(const i of n.views.values())t=t||pp(i,e);return t}function Va(n,e){if(e._queryParams.loadsAllData())return Vn(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Ka(n,e){return Va(n,e)!=null}function Ae(n){return Vn(n)!=null}function Vn(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Rn;function Sp(n){m(!Rn,"__referenceConstructor has already been defined"),Rn=n}function wp(){return m(Rn,"Reference.ts has not been loaded"),Rn}let kp=1;class Kr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new C(null),this.pendingWriteTree_=ep(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ha(n,e,t,i,s){return Gf(n.pendingWriteTree_,e,t,i,s),s?Yt(n,new Ke(Aa(),e,t)):[]}function xe(n,e,t=!1){const i=Wf(n.pendingWriteTree_,e);if($f(n.pendingWriteTree_,e)){let r=new C(null);return i.snap!=null?r=r.set(I(),!0):W(i.children,o=>{r=r.set(new w(o),!0)}),Yt(n,new Tn(i.path,r,t))}else return[]}function Kn(n,e,t){return Yt(n,new Ke(rs(),e,t))}function Cp(n,e,t){const i=C.fromObject(t);return Yt(n,new Bt(rs(),e,i))}function Rp(n,e){return Yt(n,new Ut(rs(),e))}function Ap(n,e,t){const i=fs(n,t);if(i){const s=ps(i),r=s.path,o=s.queryId,a=K(r,e),l=new Ut(os(o),a);return ms(n,r,l)}else return[]}function Ai(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Ka(o,e))){const l=Tp(o,e,t,i);Ep(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(h,f)=>Ae(f));if(u&&!d){const h=n.syncPointTree_.subtree(r);if(!h.isEmpty()){const f=Op(h);for(let p=0;p<f.length;++p){const g=f[p],T=g.query,A=$a(n,g);n.listenProvider_.startListening(At(T),An(n,T),A.hashFn,A.onComplete)}}}!d&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(At(e),null):c.forEach(h=>{const f=n.queryToTagMap.get(Hn(h));n.listenProvider_.stopListening(At(h),f)}))}Dp(n,c)}return a}function Np(n,e,t,i){const s=fs(n,i);if(s!=null){const r=ps(s),o=r.path,a=r.queryId,l=K(o,e),c=new Ke(os(a),l,t);return ms(n,o,c)}else return[]}function Pp(n,e,t,i){const s=fs(n,i);if(s){const r=ps(s),o=r.path,a=r.queryId,l=K(o,e),c=C.fromObject(t),u=new Bt(os(a),l,c);return ms(n,o,u)}else return[]}function Hr(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(h,f)=>{const p=K(h,s);r=r||tt(f,p),o=o||Ae(f)});let a=n.syncPointTree_.get(s);a?(o=o||Ae(a),r=r||tt(a,I())):(a=new _p,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,p)=>{const g=tt(p,I());g&&(r=r.updateImmediateChild(f,g))}));const c=Ka(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Hn(e);m(!n.queryToTagMap.has(h),"View does not exist, but we have a tag");const f=Lp();n.queryToTagMap.set(h,f),n.tagToQueryMap.set(f,h)}const u=as(n.pendingWriteTree_,s);let d=Ip(a,e,t,u,r,l);if(!c&&!o&&!i){const h=Va(a,e);d=d.concat(Mp(n,e,h))}return d}function hs(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=K(o,e),c=tt(a,l);if(c)return c});return Da(s,e,r,t,!0)}function Yt(n,e){return Ga(e,n.syncPointTree_,null,as(n.pendingWriteTree_,I()))}function Ga(n,e,t,i){if(b(n.path))return Wa(n,e,t,i);{const s=e.get(I());t==null&&s!=null&&(t=tt(s,I()));let r=[];const o=y(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=La(i,o);r=r.concat(Ga(a,l,c,u))}return s&&(r=r.concat(us(s,n,i,t))),r}}function Wa(n,e,t,i){const s=e.get(I());t==null&&s!=null&&(t=tt(s,I()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=La(i,o),u=n.operationForChild(o);u&&(r=r.concat(Wa(u,a,l,c)))}),s&&(r=r.concat(us(s,n,i,t))),r}function $a(n,e){const t=e.query,i=An(n,t);return{hashFn:()=>(fp(e)||v.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?Ap(n,t._path,i):Rp(n,t._path);{const r=Ah(s,t);return Ai(n,t,null,r)}}}}function An(n,e){const t=Hn(e);return n.queryToTagMap.get(t)}function Hn(n){return n._path.toString()+"$"+n._queryIdentifier}function fs(n,e){return n.tagToQueryMap.get(e)}function ps(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new w(n.substr(0,e))}}function ms(n,e,t){const i=n.syncPointTree_.get(e);m(i,"Missing sync point for query tag that we're tracking");const s=as(n.pendingWriteTree_,e);return us(i,t,s,null)}function Op(n){return n.fold((e,t,i)=>{if(t&&Ae(t))return[Vn(t)];{let s=[];return t&&(s=Ba(t)),W(i,(r,o)=>{s=s.concat(o)}),s}})}function At(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(wp())(n._repo,n._path):n}function Dp(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Hn(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function Lp(){return kp++}function Mp(n,e,t){const i=e._path,s=An(n,e),r=$a(n,t),o=n.listenProvider_.startListening(At(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)m(!Ae(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!b(c)&&u&&Ae(u))return[Vn(u).query];{let h=[];return u&&(h=h.concat(Ba(u).map(f=>f.query))),W(d,(f,p)=>{h=h.concat(p)}),h}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(At(u),An(n,u))}}return o}/**
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
 */class gs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new gs(t)}node(){return this.node_}}class _s{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=N(this.path_,e);return new _s(this.syncTree_,t)}node(){return hs(this.syncTree_,this.path_)}}const xp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Gr=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Fp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Up(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Fp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Up=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&m(!1,"Unexpected increment value: "+i);const s=e.node();if(m(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Bp=function(n,e,t,i){return vs(e,new _s(t,n),i)},ja=function(n,e,t){return vs(n,new gs(e),t)};function vs(n,e,t){const i=n.getPriority().val(),s=Gr(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Gr(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new O(a,M(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new O(s))),o.forEachChild(R,(a,l)=>{const c=vs(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ys{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Es(n,e){let t=e instanceof w?e:new w(e),i=n,s=y(t);for(;s!==null;){const r=nt(i.node.children,s)||{children:{},childCount:0};i=new ys(s,i,r),t=k(t),s=y(t)}return i}function mt(n){return n.node.value}function qa(n,e){n.node.value=e,Ni(n)}function za(n){return n.node.childCount>0}function Vp(n){return mt(n)===void 0&&!za(n)}function Gn(n,e){W(n.node.children,(t,i)=>{e(new ys(t,n,i))})}function Ya(n,e,t,i){t&&e(n),Gn(n,s=>{Ya(s,e,!0)})}function Kp(n,e,t){let i=n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Qt(n){return new w(n.parent===null?n.name:Qt(n.parent)+"/"+n.name)}function Ni(n){n.parent!==null&&Hp(n.parent,n.name,n)}function Hp(n,e,t){const i=Vp(t),s=pe(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Ni(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Ni(n))}/**
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
 */const Gp=/[\[\].#$\/\u0000-\u001F\u007F]/,Wp=/[\[\].#$\u0000-\u001F\u007F]/,ai=10*1024*1024,Qa=function(n){return typeof n=="string"&&n.length!==0&&!Gp.test(n)},Ja=function(n){return typeof n=="string"&&n.length!==0&&!Wp.test(n)},$p=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ja(n)},Xa=function(n,e,t,i){i&&e===void 0||bs(xi(n,"value"),e,t)},bs=function(n,e,t){const i=t instanceof w?new cf(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Le(i));if(typeof e=="function")throw new Error(n+"contains a function "+Le(i)+" with contents = "+e.toString());if(Jo(e))throw new Error(n+"contains "+e.toString()+" "+Le(i));if(typeof e=="string"&&e.length>ai/3&&Dn(e)>ai)throw new Error(n+"contains a string greater than "+ai+" utf8 bytes "+Le(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(W(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Qa(o)))throw new Error(n+" contains an invalid key ("+o+") "+Le(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);df(i,o),bs(n,a,i),uf(i)}),s&&r)throw new Error(n+' contains ".value" child '+Le(i)+" in addition to actual children.")}},Za=function(n,e,t,i){if(!Ja(t))throw new Error(xi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jp=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Za(n,e,t)},Is=function(n,e){if(y(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},qp=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Qa(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!$p(t))throw new Error(xi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class zp{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ts(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!es(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function el(n,e,t){Ts(n,t),tl(n,i=>es(i,e))}function fe(n,e,t){Ts(n,t),tl(n,i=>q(i,e)||q(e,i))}function tl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(Yp(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function Yp(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();wt&&F("event: "+t.toString()),pt(i)}}}/**
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
 */const Qp="repo_interrupt",Jp=25;class Xp{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new zp,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=In(),this.transactionQueueTree_=new ys,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Zp(n,e,t){if(n.stats_=Xi(n.repoInfo_),n.forceRestClient_||Dh())n.server_=new bn(n.repoInfo_,(i,s,r,o)=>{Wr(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>$r(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{L(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new le(n.repoInfo_,e,(i,s,r,o)=>{Wr(n,i,s,r,o)},i=>{$r(n,i)},i=>{em(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Uh(n.repoInfo_,()=>new Ff(n.stats_,n.server_)),n.infoData_=new Of,n.infoSyncTree_=new Kr({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Kn(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ws(n,"connected",!1),n.serverSyncTree_=new Kr({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);fe(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function nl(n){const t=n.infoData_.getNode(new w(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ss(n){return xp({timestamp:nl(n)})}function Wr(n,e,t,i,s){n.dataUpdateCount++;const r=new w(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=dn(t,c=>M(c));o=Pp(n.serverSyncTree_,r,l,s)}else{const l=M(t);o=Np(n.serverSyncTree_,r,l,s)}else if(i){const l=dn(t,c=>M(c));o=Cp(n.serverSyncTree_,r,l)}else{const l=M(t);o=Kn(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Wn(n,r)),fe(n.eventQueue_,a,o)}function $r(n,e){ws(n,"connected",e),e===!1&&nm(n)}function em(n,e){W(e,(t,i)=>{ws(n,t,i)})}function ws(n,e,t){const i=new w("/.info/"+e),s=M(t);n.infoData_.updateSnapshot(i,s);const r=Kn(n.infoSyncTree_,i,s);fe(n.eventQueue_,i,r)}function il(n){return n.nextWriteId_++}function tm(n,e,t,i,s){ks(n,"set",{path:e.toString(),value:t,priority:i});const r=Ss(n),o=M(t,i),a=hs(n.serverSyncTree_,e),l=ja(o,a,r),c=il(n),u=Ha(n.serverSyncTree_,e,l,c,!0);Ts(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(h,f)=>{const p=h==="ok";p||G("set at "+e+" failed: "+h);const g=xe(n.serverSyncTree_,c,!p);fe(n.eventQueue_,e,g),om(n,s,h,f)});const d=ll(n,e);Wn(n,d),fe(n.eventQueue_,d,[])}function nm(n){ks(n,"onDisconnectEvents");const e=Ss(n),t=In();Ti(n.onDisconnect_,I(),(s,r)=>{const o=Bp(s,r,n.serverSyncTree_,e);Ra(t,s,o)});let i=[];Ti(t,I(),(s,r)=>{i=i.concat(Kn(n.serverSyncTree_,s,r));const o=ll(n,s);Wn(n,o)}),n.onDisconnect_=In(),fe(n.eventQueue_,I(),i)}function im(n,e,t){let i;y(e._path)===".info"?i=Hr(n.infoSyncTree_,e,t):i=Hr(n.serverSyncTree_,e,t),el(n.eventQueue_,e._path,i)}function sm(n,e,t){let i;y(e._path)===".info"?i=Ai(n.infoSyncTree_,e,t):i=Ai(n.serverSyncTree_,e,t),el(n.eventQueue_,e._path,i)}function rm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Qp)}function ks(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),F(t,...e)}function om(n,e,t,i){e&&pt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function sl(n,e,t){return hs(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function Cs(n,e=n.transactionQueueTree_){if(e||$n(n,e),mt(e)){const t=ol(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&am(n,Qt(e),t)}else za(e)&&Gn(e,t=>{Cs(n,t)})}function am(n,e,t){const i=t.map(c=>c.currentWriteId),s=sl(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=K(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ks(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<t.length;h++)t[h].status=2,u=u.concat(xe(n.serverSyncTree_,t[h].currentWriteId)),t[h].onComplete&&d.push(()=>t[h].onComplete(null,!0,t[h].currentOutputSnapshotResolved)),t[h].unwatcher();$n(n,Es(n.transactionQueueTree_,e)),Cs(n,n.transactionQueueTree_),fe(n.eventQueue_,e,u);for(let h=0;h<d.length;h++)pt(d[h])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{G("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Wn(n,e)}},o)}function Wn(n,e){const t=rl(n,e),i=Qt(t),s=ol(n,t);return lm(n,s,i),i}function lm(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=K(t,l.path);let u=!1,d;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Jp)u=!0,d="maxretry",s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0));else{const h=sl(n,l.path,o);l.currentInputSnapshot=h;const f=e[a].update(h.val());if(f!==void 0){bs("transaction failed: Data returned ",f,l.path);let p=M(f);typeof f=="object"&&f!=null&&pe(f,".priority")||(p=p.updatePriority(h.getPriority()));const T=l.currentWriteId,A=Ss(n),x=ja(p,h,A);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=x,l.currentWriteId=il(n),o.splice(o.indexOf(T),1),s=s.concat(Ha(n.serverSyncTree_,l.path,x,l.currentWriteId,l.applyLocally)),s=s.concat(xe(n.serverSyncTree_,T,!0))}else u=!0,d="nodata",s=s.concat(xe(n.serverSyncTree_,l.currentWriteId,!0))}fe(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,(function(h){setTimeout(h,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(d),!1,null))))}$n(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)pt(i[a]);Cs(n,n.transactionQueueTree_)}function rl(n,e){let t,i=n.transactionQueueTree_;for(t=y(e);t!==null&&mt(i)===void 0;)i=Es(i,t),e=k(e),t=y(e);return i}function ol(n,e){const t=[];return al(n,e,t),t.sort((i,s)=>i.order-s.order),t}function al(n,e,t){const i=mt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Gn(e,s=>{al(n,s,t)})}function $n(n,e){const t=mt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,qa(e,t.length>0?t:void 0)}Gn(e,i=>{$n(n,i)})}function ll(n,e){const t=Qt(rl(n,e)),i=Es(n.transactionQueueTree_,e);return Kp(i,s=>{li(n,s)}),li(n,i),Ya(i,s=>{li(n,s)}),t}function li(n,e){const t=mt(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(xe(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?qa(e,void 0):t.length=r+1,fe(n.eventQueue_,Qt(e),s);for(let o=0;o<i.length;o++)pt(i[o])}}/**
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
 */function cm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function dm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):G(`Invalid query segment '${t}' in query '${n}'`)}return e}const jr=function(n,e){const t=um(n),i=t.namespace;t.domain==="firebase.com"&&he(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&he("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Sh();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new ca(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new w(t.pathString)}},um=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(s=cm(n.substring(u,d)));const h=dm(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");i=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=i}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
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
 */const qr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",hm=(function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=qr.charAt(t%64),t=Math.floor(t/64);m(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=qr.charAt(e[s]);return m(o.length===20,"nextPushId: Length should be 20."),o}})();/**
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
 */class fm{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+L(this.snapshot.exportVal())}}class pm{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class mm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Rs{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return b(this._path)?null:va(this._path)}get ref(){return new Oe(this._repo,this._path)}get _queryIdentifier(){const e=Nr(this._queryParams),t=Qi(e);return t==="{}"?"default":t}get _queryObject(){return Nr(this._queryParams)}isEqual(e){if(e=B(e),!(e instanceof Rs))return!1;const t=this._repo===e._repo,i=es(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+lf(this._path)}}class Oe extends Rs{constructor(e,t){super(e,t,new ss,!1)}get parent(){const e=Ea(this._path);return e===null?null:new Oe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Nn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new w(e),i=Vt(this.ref,e);return new Nn(this._node.getChild(t),i,R)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Nn(s,Vt(this.ref,i),R)))}hasChild(e){const t=new w(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gt(n,e){return n=B(n),n._checkNotDeleted("ref"),e!==void 0?Vt(n._root,e):n._root}function Vt(n,e){return n=B(n),y(n._path)===null?jp("child","path",e):Za("child","path",e),new Oe(n._repo,N(n._path,e))}function cl(n,e){n=B(n),Is("push",n._path),Xa("push",e,n._path,!0);const t=nl(n._repo),i=hm(t),s=Vt(n,i),r=Vt(n,i);let o;return o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function gm(n){return Is("remove",n._path),jn(n,null)}function jn(n,e){n=B(n),Is("set",n._path),Xa("set",e,n._path,!1);const t=new On;return tm(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class As{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new fm("value",this,new Nn(e.snapshotNode,new Oe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new pm(this,e,t):null}matches(e){return e instanceof As?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function _m(n,e,t,i,s){const r=new mm(t,void 0),o=new As(r);return im(n._repo,n,o),()=>sm(n._repo,n,o)}function dl(n,e,t,i){return _m(n,"value",e)}vp(Oe);Sp(Oe);/**
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
 */const vm="FIREBASE_DATABASE_EMULATOR_HOST",Pi={};let ym=!1;function Em(n,e,t,i){n.repoInfo_=new ca(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function bm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||he("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),F("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=jr(r,s),a=o.repoInfo,l;typeof process<"u"&&hr&&(l=hr[vm]),l?(r=`http://${l}?ns=${a.namespace}`,o=jr(r,s),a=o.repoInfo):o.repoInfo.secure;const c=new Mh(n.name,n.options,e);qp("Invalid Firebase Database URL",o),b(o.path)||he("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Tm(a,n,c,new Lh(n.name,t));return new Sm(u,n)}function Im(n,e){const t=Pi[e];(!t||t[n.key]!==n)&&he(`Database ${e}(${n.repoInfo_}) has already been deleted.`),rm(n),delete t[n.key]}function Tm(n,e,t,i){let s=Pi[e.name];s||(s={},Pi[e.name]=s);let r=s[n.toURLString()];return r&&he("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Xp(n,ym,t,i),s[n.toURLString()]=r,r}class Sm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Zp(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Oe(this._repo,I())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Im(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&he("Cannot call "+e+" on a deleted database.")}}function wm(n=ho(),e){const t=Bi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Ll("database");i&&km(t,...i)}return t}function km(n,e,t,i={}){n=B(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&he("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&he('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new on(on.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:Ml(i.mockUserToken,n.app.options.projectId);r=new on(o)}Em(s,e,t,r)}/**
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
 */function Cm(n){vh(dt),it(new Ue("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return bm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Se(fr,pr,n),Se(fr,pr,"esm2017")}le.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};le.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Cm();const Rm={apiKey:"AIzaSyBXqi_wmAdr5AbiS9k8Rul1ERbg5Tn73MI",authDomain:"tegelv2.firebaseapp.com",databaseURL:"https://tegelv2.firebaseio.com",projectId:"tegelv2",storageBucket:"tegelv2.firebasestorage.app",messagingSenderId:"1053223905500",appId:"1:1053223905500:web:fc9f7d25213aea0d18ec19"},ul=uo(Rm),X=gh(ul),_t=wm(ul);function Am(n){const e=gt(_t,"events");return dl(e,t=>{const i=t.val();if(!i){n([]);return}const s=Object.keys(i).map(r=>({...i[r],id:r}));n(s)})}async function Nm(n){const e=gt(_t,"events"),t=cl(e);return jn(t,n)}async function Ns(n){const e=gt(_t,`events/${n}`);return jn(e,null)}async function Pm(n){const e=n.map(t=>Ns(t));return Promise.all(e)}function Om(n){const e=gt(_t,"chalkboard");return dl(e,t=>{const i=t.val();if(!i){n([]);return}const s=Object.keys(i).map(r=>({...i[r],id:r}));n(s)})}async function Dm(n){const e=gt(_t,"chalkboard"),t=cl(e);return jn(t,n)}async function Lm(){const n=gt(_t,"chalkboard");return gm(n)}function Mm(){const n=document.getElementById("synth-canvas");if(!n)return;const e=n.getContext("2d");if(!e)return;let t=n.width=window.innerWidth,i=n.height=window.innerHeight;window.addEventListener("resize",()=>{t=n.width=window.innerWidth,i=n.height=window.innerHeight});let s=0;const r=Array.from({length:100},()=>({x:Math.random()*t,y:Math.random()*i,size:Math.random()*2,speed:Math.random()*.05}));function o(){if(!e)return;e.clearRect(0,0,t,i);const a=e.createLinearGradient(0,0,0,i);a.addColorStop(0,"#0d0221"),a.addColorStop(.5,"#240b36"),a.addColorStop(1,"#0d0221"),e.fillStyle=a,e.fillRect(0,0,t,i),e.fillStyle="#fff",r.forEach(f=>{e.globalAlpha=.2+Math.sin(Date.now()*.001+f.x)*.3,e.fillRect(f.x,f.y,f.size,f.size)}),e.globalAlpha=1;const l=i*.45,c=Math.min(t,i)*.25,u=e.createLinearGradient(0,l-c,0,l+c);u.addColorStop(0,"#ff00ff"),u.addColorStop(1,"#ff8800"),e.shadowBlur=40,e.shadowColor="#ff00ff",e.fillStyle=u,e.beginPath(),e.arc(t/2,l,c,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.fillStyle="#0d0221";for(let f=0;f<15;f++){const p=2+f*2,g=l+f*(c*2/15)-10;g>l-c&&g<l+c&&e.fillRect(t/2-c,g,c*2,p)}e.strokeStyle="#00ffff",e.lineWidth=2,e.beginPath(),e.moveTo(0,i*.6),e.lineTo(t,i*.6),e.stroke();const d=i*.6,h=i-d;e.strokeStyle="#ff00ff",e.lineWidth=1;for(let f=-10;f<=10;f++){const p=t/2+f*(t/20),g=t/2+f*(t/2);e.beginPath(),e.moveTo(p,d),e.lineTo(g,i),e.stroke()}s=(s+1)%40;for(let f=0;f<20;f++){const p=(f*40+s)/800,g=d+Math.pow(p,2)*h;e.globalAlpha=p,e.beginPath(),e.moveTo(0,g),e.lineTo(t,g),e.stroke()}e.globalAlpha=1,requestAnimationFrame(o)}o()}const hl=["January","February","March","April","May","June","July","August","September","October","November","December"];function fl(n,e,t){const i=[],s=new Date(n,e+1,0);for(let r=1;r<=s.getDate();r++){const o=new Date(n,e,r),a=o.getTime(),l=new Date(n,e,r,23,59,59,999).getTime(),c=t.filter(p=>p.start<l&&p.end>a),u=o.getFullYear(),d=String(o.getMonth()+1).padStart(2,"0"),h=String(o.getDate()).padStart(2,"0"),f=`${u}-${d}-${h}`;i.push({date:f,dayOfMonth:r,events:c})}return{days:i}}function xm(n,e,t,i){const s=[];let r=n,o=e;for(let a=0;a<t;a++){const l=fl(r,o,i),c=new Date(r,o,1).getDay();s.push({year:r,month:o,monthName:hl[o],days:l.days,firstDayOfWeek:c}),o++,o>11&&(o=0,r++)}return{months:s}}function Fm(n,e){return e.some(t=>n.start<t.end&&n.end>t.start)}class Um{constructor(e){me(this,"canvas");me(this,"ctx");me(this,"isDrawing",!1);me(this,"currentPoints",[]);me(this,"currentColor","#00ffff");me(this,"currentWidth",3);me(this,"allLines",[]);e.innerHTML=`
            <div class="chalkboard-container">
                <div class="chalkboard-controls">
                    <input type="color" id="chalk-color" value="#00ffff">
                    <input type="range" id="chalk-width" min="1" max="10" value="3">
                    <button id="clear-chalkboard" class="small-btn-neon">Clear Board</button>
                    <button id="back-to-calendar" class="small-btn-neon" style="border-color: #ff00ff; color: #ff00ff;">Calendar</button>
                </div>
                <canvas id="chalkboard-canvas"></canvas>
            </div>
        `,this.canvas=document.getElementById("chalkboard-canvas"),this.ctx=this.canvas.getContext("2d"),this.resize(),window.addEventListener("resize",()=>this.resize()),this.initEvents(),this.initFirebase()}resize(){var t;const e=(t=this.canvas.parentElement)==null?void 0:t.getBoundingClientRect();e&&(this.canvas.width=e.width,this.canvas.height=e.height-60),this.redraw()}initEvents(){const e=document.getElementById("chalk-color"),t=document.getElementById("chalk-width"),i=document.getElementById("clear-chalkboard");e.addEventListener("change",()=>this.currentColor=e.value),t.addEventListener("change",()=>this.currentWidth=parseInt(t.value)),i==null||i.addEventListener("click",()=>{Pn("Clear the entire board? This will delete everyone's drawings!",()=>{Lm()})}),this.canvas.addEventListener("mousedown",s=>this.startDrawing(s)),this.canvas.addEventListener("mousemove",s=>this.draw(s)),this.canvas.addEventListener("mouseup",()=>this.stopDrawing()),this.canvas.addEventListener("mouseleave",()=>this.stopDrawing()),this.canvas.addEventListener("touchstart",s=>{s.preventDefault();const r=s.touches[0];this.startDrawing(r)}),this.canvas.addEventListener("touchmove",s=>{s.preventDefault();const r=s.touches[0];this.draw(r)}),this.canvas.addEventListener("touchend",()=>this.stopDrawing())}initFirebase(){Om(e=>{this.allLines=e,this.redraw()})}getMousePos(e){const t=this.canvas.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}startDrawing(e){this.isDrawing=!0;const t=this.getMousePos(e);this.currentPoints=[t],this.ctx.beginPath(),this.ctx.moveTo(t.x,t.y),this.ctx.strokeStyle=this.currentColor,this.ctx.lineWidth=this.currentWidth,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.shadowBlur=10,this.ctx.shadowColor=this.currentColor}draw(e){if(!this.isDrawing)return;const t=this.getMousePos(e);this.currentPoints.push(t),this.ctx.lineTo(t.x,t.y),this.ctx.stroke()}async stopDrawing(){if(!this.isDrawing)return;this.isDrawing=!1;const e=X.currentUser;e&&this.currentPoints.length>1&&await Dm({userId:e.uid,color:this.currentColor,width:this.currentWidth,points:this.currentPoints}),this.currentPoints=[]}redraw(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.allLines.forEach(e=>{if(!(e.points.length<2)){this.ctx.beginPath(),this.ctx.moveTo(e.points[0].x,e.points[0].y),this.ctx.strokeStyle=e.color,this.ctx.lineWidth=e.width,this.ctx.lineCap="round",this.ctx.lineJoin="round",this.ctx.shadowBlur=10,this.ctx.shadowColor=e.color;for(let t=1;t<e.points.length;t++)this.ctx.lineTo(e.points[t].x,e.points[t].y);this.ctx.stroke()}}),this.ctx.shadowBlur=0}}const Bm=[{brand:"STATENS VARDAGSVERK",headline:"HAR DU GLÖMT VARFÖR DU GICK IN I KÖKET?",subtext:"Anmäl ofrivilligt kylskåpsstirrande senast tisdag. Blankett 44-B krävs.",cta:"ERKÄNN DIREKT",badge:"MYNDIGHETSINFO",icon:"📋",imageQuery:"refrigerator kitchen",theme:"myndighet",layout:"myndighet",clickMessage:"📋 Tack! En handläggare kommer hem till dig och stänger kylskåpet om 6–8 arbetsveckor."},{brand:"377 TEGEL-TEXT",headline:"SYNTETISK FALUKORV SLUT I HELA VÄSTERÅS",subtext:"Experten: 'Folk panikköper och använder dem som nackkuddar på tåget'",cta:"SIDA 378 >>",badge:"TEXT-TV 377",icon:"📺",imageQuery:"sausage food",theme:"texttv",layout:"texttv",clickMessage:"📺 Laddar sida 378... FEL: Text-TV har tagit lunchrast till 1999."},{brand:"TV-SHOP NATT",headline:"TRÖTT PÅ ATT SKALA DINA EGNA BANANER?!",subtext:"Med BananSprängaren 3000™ öppnar du frukten med mindre än 4 gram dynamit!",cta:"BESTÄLL NU",price:"149:-",badge:"SE TV-SUCCÉN!",icon:"💥",imageQuery:"banana fruit",theme:"tvshop",layout:"tvshop",clickMessage:"💥 Kaboom! Din beställning av BananSprängaren 3000™ skickas i ett vadderat kuvert."},{brand:"AFTONCHOCKEN EXTRA",headline:"CHOCKEN: KENNETH, 54, ÅT EN HELT VANLIG FRUKOST",subtext:'"Jag tog en ostmacka och sen hände absolut ingenting" • Grannarna rasar',cta:"LÄS PLUS+",badge:"JUST NU",icon:"🗞️",imageQuery:"cheese sandwich",theme:"tabloid",layout:"tabloid",clickMessage:"🗞️ Du har låst upp artikeln: Det var Hushållsost 28%. Kenneth mår efter omständigheterna helt okej."},{brand:"WIN98 SYSTEMTJÄNST",headline:"DITT TÅLAMOD HAR SLUTAT SVARA (FELKOD: MÅNDAG)",subtext:"Vill du starta om helgen i felsäkert läge med kanelbulle?",cta:"JA, TACK",badge:"SYSTEMFEL",icon:"💾",imageQuery:"retro computer floppy",theme:"win95",layout:"win95",clickMessage:"💾 Startar om helgen... Vänligen mata in Diskett 2 av 47 (Fredagsmys.exe)."},{brand:"CYBER-CONNY AB",headline:"TRIMMA DIN DAMMSUGARE TILL 450 HÄSTKRAFTER",subtext:"Suger upp damm, mattor, parkettgolv och mindre husdjur från grannlägenheten.",cta:"CHIPTRIMMA NU",price:"990:-",badge:"TURBO V8",icon:"🌪️",imageQuery:"vacuum cleaner jet engine",theme:"cyberneon",layout:"split",clickMessage:"🌪️ VROOOM! Din Electrolux har nu passerat ljudvallen över vardagsrumsmattan."},{brand:"SVENSKA SUCK-AKADEMIN",headline:"LÄR DIG SUCKA SÅ HÖGT ATT KOLLEGAN BYTER KONTOR",subtext:"Intensivkurs i passiv-aggressiv utandning vid kaffemaskinen. Diplom ingår.",cta:"BOKA KURS",badge:"2 PLATSER KVAR",icon:"😮‍💨",imageQuery:"office coffee bored",theme:"localbiz",layout:"split",clickMessage:"😮‍💨 *Hääääääääh...* Snyggt! Du är redan antagen till fortsättningskursen."},{brand:"MADAME YVONNES HOTLINE",headline:"JAG SPÅR DIN FRAMTID I GAMLA KVITTON FRÅN BILTEMA",subtext:"Har du köpt spännband och varmkorv? Då väntar mystisk romantik i höst.",cta:"SPÅ MIG (29 KR)",badge:"SYNSK SEDAN -92",icon:"🔮",imageQuery:"crystal ball fortune teller",theme:"occult",layout:"split",clickMessage:"🔮 Andarna talar: Du kommer köpa 3-pack torkarblad som inte passar din bil."},{brand:"MAISON DE GRÅSTEN",headline:"EAU DE KOMMUNALHUS – DEN NYA DOFTEN AV PÄRMAR & KALLT KAFFE",subtext:"En förförisk symfoni av lysrör, häftapparat och linoleumgolv.",cta:"UPPLEV DOFTEN",price:"2 499:-",badge:"PARIS • BORÅS",icon:"✨",imageQuery:"perfume bottle luxury",theme:"luxury",layout:"split",clickMessage:"✨ *Pssht!* Du luktar nu som ett sammanträdesrum i Eslöv kl 15:45."},{brand:"BRF TÅLAMODET",headline:"VEM TOG LUDDET UR TORKTUMLAREN MEN LÄMNADE EN STRUMPA?",subtext:"Styrelsen har kallat in forensisk expertis och arga lappar i laminat.",cta:"ANGE SKYLDIG",badge:"TVÄTTSTUGAN",icon:"🧦",imageQuery:"washing machine laundry",theme:"warning",layout:"split",clickMessage:"🧦 Anmälan mottagen! En laminerad arg lapp med Comic Sans har satts upp i trapphuset."},{brand:"ROOT@FALUKORV:~#",headline:"LADDA NER 64 GB EXTRA SÖMN TILL INATT [CRACKED]",subtext:"Ingen reklam • Inga konstiga drömmar om gymnasiet • 100% djupsömn.",cta:"RUN SLEEP.SH",badge:"TERMINAL v4.2",icon:"💻",imageQuery:"hacker matrix server",theme:"terminal",layout:"split",clickMessage:"💻 Executing sleep.sh... ERROR: Din hjärna tänker fortfarande på något pinsamt du sa 2014."},{brand:"GÖRAN & SÖNER UTHYRNING",headline:"HYR EN GUBBE SOM STÅR OCH PEKAR PÅ DITT BYGGPROJEKT",subtext:"Armarna i kors, skeptisk blick och mumlar 'Jaha, du tänkte göra sådär ja...'",cta:"BOKA GÖRAN",price:"350:-/tim",badge:"PROFFS-SKEPTIKER",icon:"👷",imageQuery:"construction worker carpenter",theme:"localbiz",layout:"split",clickMessage:"👷 Göran är på väg! Han har redan ringt och frågat om du verkligen mätt med vattenpass."},{brand:"VAPOR-KLIPP AB",headline:"FRISYRER SOM SER UT SOM OM DU GÅTT IGENOM EN HÄCK",subtext:"Vi klipper endast i motvind med slö kökssax. Kaffe på fat ingår ej.",cta:"BOKA SNEDKLIPP",price:"85:-",badge:"ESTETIK 1987",icon:"✂️",imageQuery:"barber haircut retro",theme:"vaporwave",layout:"split",clickMessage:"✂️ Din lugg är nu 4 centimeter kortare på vänster sida. Välkommen åter!"},{brand:"GULA SIDORNA PRIVAT",headline:"BORTSKÄNKES: 400 LITER HEMKOKT KRUSBÄRSKRÄM (FRÅGA EJ)",subtext:"Finns i källarförråd i Mjölby. Ta med egen spade och skyddsglasögon.",cta:"HÄMTA IDAG",badge:"RADANNONS",icon:"🫙",imageQuery:"glass jars jam cellar",theme:"classified",layout:"split",clickMessage:"🫙 Säljaren 'Kräm-Kent' svarar: 'Kom efter mörkrets inbrott, krämen har börjat bubbla.'"},{brand:"KOMMUNALA VÄDERVERKET",headline:"VI INFÖR HORISONTELLT SNÖBLASK MELLAN KL 07 OCH 18",subtext:"Motvind åt alla väderstreck samtidigt garanteras på samtliga cykelbanor.",cta:"KLAGA FORMELLT",badge:"VÄDERVARNING",icon:"🌨️",imageQuery:"snowstorm blizzard winter",theme:"myndighet",layout:"myndighet",clickMessage:"🌨️ Ditt klagomål har registrats. Som kompensation ökar vi motvinden med 4 m/s."},{brand:"RETRO-WEBBEN 1997",headline:"GRATTIS! DU ÄR BESÖKARE NR 000014! KLICKA FÖR ATT VINNA EN FAX!",subtext:"Ingen lottning! Bara 400 meter termopapper och ett modem som skriker!",cta:"HÄMTA VINST!!",badge:"VINNARE!!",icon:"📠",imageQuery:"fax machine telephone",theme:"retro90",layout:"win95",clickMessage:"📠 *BEEEEP-KRRR-SHHHH!* Din faxmaskin skickas med postdiligens från 1997."},{brand:"EXPRESS-BLADET",headline:"SÅ VET DU OM DIN KATT DRIVER ETT SKUGGBOLAG PÅ CYPERN",subtext:"Misstänkta kvitton på tonfisk • Sover 18 timmar för att dölja skatteplanering",cta:"SE HELA LISTAN",badge:"AVSLÖJANDE",icon:"🐱",imageQuery:"cat funny",theme:"tabloid",layout:"tabloid",clickMessage:"🐱 Misse (4 år) nekar till anklagelserna och har vält en blomkruka som protest."},{brand:"TV-SHOP KÖK",headline:"OSTHYVELN SOM SPELAR 'FINAL COUNTDOWN' VID VARJE DRAG!",subtext:"Slut på tysta frukostar! Nu med inbyggd rökmaskin och 140 dB siren!",cta:"KÖP 2 FÅ 1",price:"299:-",badge:"SOM PÅ TV!",icon:"🧀",imageQuery:"cheese yellow",theme:"tvshop",layout:"tvshop",clickMessage:"🧀 DA-DA-DA-DAA! Din frukostmacka har nu godkänts av Joey Tempest."},{brand:"377 TEGEL-TEXT",headline:"MAN I BORLÄNGE HITTADE DEN PERFEKTA PINNEN I SKOGEN",subtext:"'Den ser exakt ut som ett svärd' säger Stefan, 38. Visas på hembygdsgården.",cta:"SIDA 379 >>",badge:"INRIKES 377",icon:"🪵",imageQuery:"forest branch wood",theme:"texttv",layout:"texttv",clickMessage:"🪵 Sida 379: Pinnen har nu försäkrats för 1,2 miljoner kronor."},{brand:"NEON-BAGERIET 2088",headline:"LASERGRÄDDADE KANELBULLAR MED SMAK AV BLÅBÄR & ÅNGEST",subtext:"Pärlsocker av äkta kvantkristaller. Lyser i mörkret i upp till 14 timmar.",cta:"TELEPORTERA BULLE",price:"45:-",badge:"CYBER-FIKA",icon:"🥐",imageQuery:"cinnamon bun pastry",theme:"cyberneon",layout:"split",clickMessage:"🥐 *ZAP!* En självlysande kanelbulle har materialiserats i din ficka."},{brand:"SVENSKA SMÅPRATSJOUREN",headline:"FAST I HISSEN MED EN BEKANT? VI SMS:AR DIG VÄDERFAKTA!",subtext:"Få akuta repliker som 'Ja, det märks att det går mot ljusare/mörkare tider nu'.",cta:"TECKNA JOUR",price:"19:-/mån",badge:"AKUT HJÄLP",icon:"🛗",imageQuery:"elevator corridor",theme:"myndighet",layout:"myndighet",clickMessage:"🛗 SMS skickat: Säg 'Det är inte kylan, det är fukten som gör det' och titta i golvet!"},{brand:"BENGTSSONS MYSTERIER",headline:"VI HITTAR DET DÄR LOCKET TILL MATDOSAN SOM FÖRSVANN 2019",subtext:"Våra certifierade skåpdykare genomsöker den fjärde dimensionen under diskbänken.",cta:"STARTA SÖKNING",badge:"GARANTI*",icon:"🕵️",imageQuery:"detective magnifying glass",theme:"occult",layout:"split",clickMessage:"🕵️ Vi hittade 14 lock, men inget av dem passar någon burk som existerar på jorden."},{brand:"WIN95 DIALOG",headline:"VARNING: DU HAR INTE SAGT 'OJ DÅ' PÅ ÖVER 3 TIMMAR",subtext:"Enligt svensk lag måste du snart resa dig, slå dig på knäna och säga 'Nej, om man skulle...'",cta:"SLÅ PÅ KNÄNA",badge:"SVENSK STANDARD",icon:"🦵",imageQuery:"sofa living room",theme:"win95",layout:"win95",clickMessage:"🦵 *KLAPP PÅ KNÄNA!* 'Nämen... om man skulle ta och tänka på refrängen då!'"},{brand:"LÄNSMANNENS LOPPIS",headline:"SÄLJES: EN PALL MED BLANDADE SLADDAR FRÅN 2004",subtext:"SCART, Nokia-laddare, oklara adaptrar och en sladd som ingen vet vad den gör.",cta:"GE BUD",price:"50:-",badge:"BRA ATT HA!",icon:"🔌",imageQuery:"cables wires electronics",theme:"classified",layout:"split",clickMessage:"🔌 Du la vantarna på sladdlådan! Den får absolut inte slängas förrän 2045."},{brand:"AFTONCHOCKEN EXTRA",headline:"SUPER-GUIDEN: SÅ VÄLJER DU RÄTT KASSAKÖ PÅ ICA (DU KOMMER ÄNDÅ VÄLJA FEL)",subtext:"Forskare bekräftar: Tant med papperskuponger och pantkvitto uppstår ur tomma intet",cta:"SE FORSKNINGEN",badge:"VARDAGSCHOCK",icon:"🛒",imageQuery:"supermarket shopping cart",theme:"tabloid",layout:"tabloid",clickMessage:"🛒 Kassan bredvid rullar nu i 90 km/h medan din kassa väntar på prisfråga på kålrot."},{brand:"CHÂTEAU DE VÄRMLAND",headline:"ÅRGÅNGSLÄSK: CHAMPIS LAGRAT PÅ GAMMAL EPA-TRAKTOR",subtext:"Toner av granbarr, Wunderbaum Vanilj och nyslaget dike utanför Sunne.",cta:"RESERVERA FLASKA",price:"1 890:-",badge:"LIMITED EDITION",icon:"🍾",imageQuery:"champagne bottle vintage car",theme:"luxury",layout:"split",clickMessage:"🍾 Sommelieren rekommenderar att den serveras ljummen direkt ur handskfacket."},{brand:"VARNINGSCENTRALEN",headline:"OBS! NÅGON PÅ JOBBET HAR VÄRMT FISK I MIKRON IGEN!",subtext:"Utrym lunchrummet omedelbart! Nivå 4 av kokt torsk-aerosol har uppmätts.",cta:"AKTIVERA FLÄKT",badge:"KATASTROFLARM",icon:"🐟",imageQuery:"fish microwave kitchen",theme:"warning",layout:"split",clickMessage:"🐟 För sent! Doften har nu satt sig permanent i gardinerna fram till pensionen."},{brand:"TV-SHOP TRÄNING",headline:"FÅ MAGRUTOR MEDAN DU LIGGER I SOFFAN OCH ÄTER OSTBÅGAR!",subtext:"Vår patenterade Rut-Stämpel™ trycker in ett sexpack i huden på 3 sekunder!",cta:"KÖP STÄMPELN",price:"199:-",badge:"INGEN SVETT!",icon:"💪",imageQuery:"fitness dumbbell gym",theme:"tvshop",layout:"tvshop",clickMessage:"💪 *STÄMPEL!* Du ser nu ut som en nygräddad våffla på magen. Snyggt!"},{brand:"SYSADMIN KEBAB & DATA",headline:"VI LAGAR DIN SKRIVARE ELLER GER DIG EN FAMILJEPIZZA",subtext:"Ingen har någonsin lyckats laga en skrivare, så välj sås redan nu.",cta:"VÄLJ VITLÖKSSÅS",badge:"IT-GARANTI",icon:"🍕",imageQuery:"pizza food",theme:"terminal",layout:"split",clickMessage:"🍕 PC LOAD LETTER! Vi slängde skrivaren i containern, pizzan är klar om 10 minuter!"},{brand:"377 TEGEL-TEXT",headline:"NY LAG: FÖRBJUDET ATT SÄGA 'DET GÅR BRA' NÄR DET INTE GÅR BRA",subtext:"Miljontals svenskar riskerar böter om de inte erkänner att det är lite bökigt.",cta:"SIDA 380 >>",badge:"POLITIK 377",icon:"⚖️",imageQuery:"parliament courthouse",theme:"texttv",layout:"texttv",clickMessage:"⚖️ Sida 380: Polisen tillåter fortfarande 'Jodå, man ska väl inte klaga' i undantagsfall."},{brand:"ASTRAL-TRAFIKEN",headline:"ERSÄTTNINGSBUSS FÖR LINJE 404 AVGÅR FRÅN DEN ASTRALA DIMENSIONEN",subtext:"Stannar vid hållplatsen bakom ditt lokala pizzeria-plank kl 25:70.",cta:"SE TIDTABELL",badge:"FÖRSENAD",icon:"🚌",imageQuery:"bus night neon",theme:"vaporwave",layout:"split",clickMessage:"🚌 Bussen körde precis förbi dig i 4:e dimensionen utan att stanna."},{brand:"KURTS ALIBI-BYRÅ",headline:"VI RINGER DIG MITT UNDER TRÅKIGA MÖTEN OCH SKRIKER 'DET BRINNER I KANOTEN!'",subtext:"100% trovärdig ursäkt för att lämna vilket utvecklingssamtal som helst.",cta:"BESTÄLL NÖDSAMTAL",price:"79:-",badge:"DISKRET SERVICE",icon:"🛶",imageQuery:"canoe lake paddle",theme:"localbiz",layout:"split",clickMessage:"🛶 *RING RING!* 'HALLÅ?! DIN KANOT DRAR IVÄG MOT DANMARK, DU MÅSTE KOMMA NU!!'"},{brand:"RETRO-WEBBEN 1999",headline:"LADDA NER FLER MEGABYTE RAM-MINNE DIREKT FRÅN INTERNET!",subtext:"100% äkta .exe-fil! Gör din Pentium II snabbare än grannens Volvo 740!",cta:"DOWNLOAD.EXE",badge:"FREEWARE!!",icon:"💿",imageQuery:"microchip circuit board",theme:"retro90",layout:"win95",clickMessage:"💿 Grattis! Du har nu 14 nya verktygsfält i Internet Explorer och en dansande älg på skrivbordet."},{brand:"CYBER-SYNTH FRISÖR",headline:"HOCKEYFRILLA MED INBYGGD SUBWOOFER OCH BLINKERS",subtext:"Kort där fram, fest där bak, och 800 Watt baslåda i nacken. Besiktigad.",cta:"INSTALLERA FRILLA",price:"1 200:-",badge:"EPA-CERTIFIERAD",icon:"🎸",imageQuery:"loudspeaker concert neon",theme:"cyberneon",layout:"split",clickMessage:"🎸 *DUNK-DUNK-DUNK!* Dina polisonger spelar nu eurodance så plomberna skakar!"},{brand:"STATENS FIKA-INSPEKTION",headline:"SISTA BITEN AV TÅRTAN HAR LEGAT KVAR PÅ FATET I 4 DYGN",subtext:"Den är nu halverad 16 gånger och mäter 0,3 millimeter. Ingen vågar ta den.",cta:"TILLKALLA INSATS",badge:"KRISLÄGE",icon:"🍰",imageQuery:"cake dessert plate",theme:"myndighet",layout:"myndighet",clickMessage:"🍰 Nationella insatsstyrkan har delat tårtbiten på mitten igen. Nu är den på atomnivå."},{brand:"AFTONCHOCKEN EXTRA",headline:"SKRÄCKEN I ULLARED: MAN GICK IN FÖR ATT KÖPA EN (1) SAK – GICK UT MED EN!",subtext:"Säkerhetsvakterna i chock: 'Vi trodde det var fysiskt omöjligt utan stekpanna och 40 par strumpor'",cta:"SE ÖVERVAKNINGSBILD",badge:"HISTORISKT",icon:"🛍️",imageQuery:"department store shopping",theme:"tabloid",layout:"tabloid",clickMessage:"🛍️ Rättelse: Det visade sig att han råkat få med sig 3 paket fryspåsar och en trädgårdstomte ändå."},{brand:"OCKULTA HEMFIXARNA",headline:"KNARRAR GOLVET? DET ÄR INTE FUKT – DET ÄR FARFAR SOM VILL HA SNUS",subtext:"Vi driver ut gnälliga husspöken med hjälp av skruvdragare och kaffe.",cta:"BOKA EXORCISM",price:"666:-",badge:"RUT-AVDRAG*",icon:"👻",imageQuery:"haunted house spooky stairs",theme:"occult",layout:"split",clickMessage:"👻 Spöket har fått en dosa Ettan Lös och har lovat att sluta tända lampan i hallen."},{brand:"TV-SHOP VINTER",headline:"TRÖTT PÅ ATT SKRAPA VINDRUTAN? BYT UT BILEN MOT EN HELIKOPTER!",subtext:"Eller köp vår El-Eldkastare i fickformat! Smälter isen (och motorhuven) på 1 sekund!",cta:"BESTÄLL IDAG",price:"399:-",badge:"VINTER-KLIPP!",icon:"🔥",imageQuery:"car snow winter ice",theme:"tvshop",layout:"tvshop",clickMessage:"🔥 Ingen mer is på rutan! (Ingen mer ruta heller, så ta på dig skidglasögon!)."},{brand:"377 TEGEL-TEXT",headline:"KOMMUNEN BYGGER RONDELL INUTI EN ANNAN RONDELL",subtext:"'Vi hade 400 ton kantsten över', förklarar trafiknämnden i Skövde.",cta:"SIDA 381 >>",badge:"TRAFIK 377",icon:"🔄",imageQuery:"roundabout road traffic",theme:"texttv",layout:"texttv",clickMessage:"🔄 Sida 381: En lokal bilist har nu snurrat i den inre rondellen sedan i torsdags."},{brand:"L’ORÉAL DE SÖDERTÄLJE",headline:"SCHAMPO MED EXTRA GRUS – FÖR DIG SOM SAKNAR KÄNSLAN AV VÅRENS CYKELBANOR",subtext:"Ger håret den där autentiska 'sandpapper och vägsalt'-volymen.",cta:"KÖP FLASKA",price:"890:-",badge:"HAUTE COUTURE",icon:"🪨",imageQuery:"gravel stones road",theme:"luxury",layout:"split",clickMessage:"🪨 För att du är värd lite rullgrus i hårbotten!"},{brand:"SVENSKA KÖLAPP-MUSEET",headline:"VI KÖPER DIN GAMLA KÖLAPP FRÅN SYSTEMBOLAGET 1998",subtext:"Särskilt intresse för nummer 094 med tummade hörn och kaffefläck.",cta:"VÄRDERA LAPP",badge:"ANTIKRUNDAN",icon:"🎟️",imageQuery:"ticket paper vintage",theme:"classified",layout:"split",clickMessage:"🎟️ Vår expert bjuder 14 kronor och en halväten Piggelin för din kölapp!"},{brand:"FÖRSÄKRINGSKASSAN NIGHTSHIFT",headline:"HAR DU DRÖMT ATT DU JOBBADE INATT? GLÖM INTE ATT FÖRMODA SKATT!",subtext:"Obeskattad REM-sömn räknas som grovt skattebrott enligt §12 Sömnlagen.",cta:"DEKLARERA DRÖM",badge:"SKATTEVERKET",icon:"💤",imageQuery:"sleeping bed pillow",theme:"myndighet",layout:"myndighet",clickMessage:"💤 Du är nu skyldig staten 3 timmars mardröm om ett matteprov du inte pluggat till."},{brand:"WIN95 SYSTEMVARNING",headline:"DIN KAFFEKOPP ÄR SNART TOM (KRITISKT SYSTEMFEL 0x00F1KA)",subtext:"Om du inte fyller på bryggkaffe inom 4 minuter kommer du svara 'Mjo' på allt.",cta:"BRYGG NYTT",badge:"VARNING",icon:"☕",imageQuery:"coffee cup espresso",theme:"win95",layout:"win95",clickMessage:"☕ Kaffebryggaren gurglar nu med 110 decibel i personalrummet."},{brand:"TV-SHOP HUSHÅLL",headline:"TRÖTT PÅ ATT VIKA TVÄTT? SKJUT IN DEN I GARDEROBEN MED TVÄTT-KANONEN™!",subtext:"Komprimerar 12 kilo strumpor och påslakan till en kompakt kub i överljudsfart!",cta:"BESTÄLL KANON",price:"499:-",badge:"TV-EXKLUSIV!",icon:"🧦",imageQuery:"cannon artillery",theme:"tvshop",layout:"tvshop",clickMessage:"🧦 *BOOOOM!* Garderobsdörren flög in till grannen, men tvätten är inne!"},{brand:"AFTONCHOCKEN EXTRA",headline:"DRAMAT PÅ BUSSEN: NÅGON SATTE SIG BREDVID TROTS LEDIGA SÄTEN",subtext:"Krisgrupp inkallad till linje 4 • 'Jag var tvungen att titta ut genom fönstret i 20 minuter'",cta:"LÄS VITTNESMÅLET",badge:"BUSS-CHOCK",icon:"💺",imageQuery:"bus seats public transport",theme:"tabloid",layout:"tabloid",clickMessage:"💺 Passageraren höll dessutom sin ryggsäck i knät utan att säga ett ord. Rysare!"},{brand:"377 TEGEL-TEXT",headline:"REKORDMÅNGA SVENSKAR SA 'HOPPSAN' NÄR DE GICK IN I STOLPE",subtext:"84% bad även stolpen om ursäkt innan de skyndade vidare, visar ny statistik.",cta:"SIDA 382 >>",badge:"SAMHÄLLE 377",icon:"🚧",imageQuery:"street lamp post city",theme:"texttv",layout:"texttv",clickMessage:"🚧 Sida 382: Stolpen har accepterat ursäkten och hälsar hem."},{brand:"CYBER-KORV 2099",headline:"HOLOGRAM-KORV MED BRÖD – 0 KALORIER, 100% NEON-SENAP",subtext:"Smakar exakt som en Statoil-korv kl 03:15 fast helt gjord av fotoner.",cta:"LADDA NER KORV",price:"25:-",badge:"3D-PRINTAD",icon:"🌭",imageQuery:"hotdog street food",theme:"cyberneon",layout:"split",clickMessage:"🌭 Du klickade på stark senap! En laserdusch av senap har träffat din jacka."},{brand:"SPÖK-RÖRMOKAREN",headline:"KLUCKAR DET I AVLOPPET? DET ÄR EN GAMMAL VIKING SOM BOR I GOLVBRUNNEN",subtext:"Vi mutar Ragnar Lodbrok med mjöd och rensband så vattnet rinner undan igen.",cta:"RING JOUREN",price:"550:-",badge:"24/7 AKUT",icon:"🪠",imageQuery:"viking helmet ship",theme:"occult",layout:"split",clickMessage:"🪠 Ragnar har flyttat till grannens dusch istället. Fritt blås i rören!"},{brand:"BENGTS PLASTPÅSE-BANK",headline:"INVESTERAR DU I PLASTPÅSAR UNDER DISKBÄNKEN? VI GER 8% RÄNTA!",subtext:"Sätt in en stor papperskasse full med knölade konsumpåsar från 2011.",cta:"ÖPPNA PÅSKONTO",badge:"TRYGG SPARFORM",icon:"🛍️",imageQuery:"plastic bags shopping",theme:"localbiz",layout:"split",clickMessage:"🛍️ Din portfölj av skrynkliga Coop-kassar har just stigit med 400% på börsen!"},{brand:"TERMINAL HOROSKOP",headline:"SUDO APT-GET INSTALL FRAMGÅNG --FORCE-YES",subtext:"Ditt stjärntecken (Kompileringsfel) visar att du kommer glömma ett semikolon idag.",cta:"GIT PUSH --FORCE",badge:"DEVOPS-SPÅDOM",icon:"🖥️",imageQuery:"code terminal screen",theme:"terminal",layout:"split",clickMessage:"🖥️ Fatal error: Fredags-deploy påbörjad kl 16:59. Lycka till i helgen!"},{brand:"VARNING: GRANNLARM",headline:"DIN GRANNE STÅR I TRAPPHUSET OCH VILL PRATA OM SOPRUMMET!",subtext:"Kikhåls-sensorn har detekterat tofflor och en dömande blick utanför din dörr.",cta:"SLÄCK ALLA LAMPOR",badge:"FARA NIVÅ RÖD",icon:"👀",imageQuery:"staircase hallway door",theme:"warning",layout:"split",clickMessage:"👀 *Schhh!* Du ligger nu helt blickstilla på hallmattan tills fotstegen försvinner."},{brand:"VAPOR-TANDLÄKAREN",headline:"BYT UT DINA VISDOMSTÄNDER MOT DISCOKULOR I KROM",subtext:"Varje gång du gäspar spelas ett saxofonsolo från 1986 i hela rummet.",cta:"BOKA BORRNING",price:"3 400:-",badge:"AESTHETIC SMILE",icon:"🦷",imageQuery:"disco ball mirror",theme:"vaporwave",layout:"split",clickMessage:"🦷 *Careless Whisper på saxofon ekar nu ur din mun varje gång du ler!*"},{brand:"RETRO-WEBBEN 1996",headline:"BESÖK MIN HEMSIDA OM MINA 14 MARSVIN! [UNDER CONSTRUCTION]",subtext:"Gästboken är öppen!! Lämna en hälsning eller bli bannad från mitt Webring!",cta:"SKRIV I GÄSTBOK",badge:"NETSCAPE 3.0",icon:"🐹",imageQuery:"guinea pig rodent",theme:"retro90",layout:"win95",clickMessage:"🐹 Tack för ditt inlägg i gästboken! Marsvinet Pelle hälsar med en animerad GIF."},{brand:"PARFUM DE SLUSSEN",headline:"NATTBUSS N°5 – EXKLUSIV HERRDOFT MED TONER AV KEBAB & BLÖT ULLKAPPA",subtext:"Fångar den magiska känslan av att missa sista bytet i regnet kl 02:47.",cta:"BESTÄLL PROV",price:"1 650:-",badge:"EAU DE TOILETTE",icon:"🌧️",imageQuery:"rain night city street",theme:"luxury",layout:"split",clickMessage:"🌧️ En sofistikerad pust av vitlökssås och våt asfalt sveper genom rummet."},{brand:"RADANNONS TORGET",headline:"BYTES: EN HALV BURK INLAGD SILL MOT EN FUNGERANDE HELIKOPTER",subtext:"Sillen är av årgång 2021 (Löksill). Helikoptern bör vara nybesiktigad.",cta:"KONTAKTA RUNAR",badge:"BYTESMARKNAD",icon:"🚁",imageQuery:"helicopter aircraft",theme:"classified",layout:"split",clickMessage:"🚁 Runar svarar: 'Är det du som har helikoptern? Sillen står redo i kylskåpet!'"},{brand:"STATENS PÅSLAKAN-NÄMND",headline:"HAR DITT TÄCKE KORVAT IHOP SIG SOM EN BOLL LÄNGST NER I PÅSLAKANET?",subtext:"Kryp inte in i påslakanet ensam! Vi skickar en certifierad hörnskakare.",cta:"BEGÄR UTRYCKNING",badge:"SAMHÄLLSSKYDD",icon:"🛏️",imageQuery:"bed sheets bedroom",theme:"myndighet",layout:"myndighet",clickMessage:"🛏️ Varning: Handläggaren fastnade också inne i påslakanet. Skicka fler handläggare!"},{brand:"TV-SHOP FRITID",headline:"SVAMP-RADARN 5000™ – HITTAR KANTARELLER PÅ 8 MILS AVSTÅND!",subtext:"Piper även vid gulmålat grus, postbilar och borttappade golfbollar!",cta:"KÖP RADARN",price:"599:-",badge:"SKOGENS KUNG!",icon:"🍄",imageQuery:"mushroom chanterelle forest",theme:"tvshop",layout:"tvshop",clickMessage:"🍄 *BEEP BEEP!* Radarn har lokaliserat en kantarell (eller en gul legobit) i Enköping!"},{brand:"AFTONCHOCKEN EXTRA",headline:"CHOCK-TESTET: ÄR DU EN 'VI HÖRS'-PERSON SOM ALDRIG HÖR AV SIG?",subtext:"9 av 10 svenskar säger 'Vi måste ta en lunch snart!' och går sedan under jorden i 6 år",cta:"GÖR TESTET HÄR",badge:"RELATIONER",icon:"📱",imageQuery:"smartphone texting",theme:"tabloid",layout:"tabloid",clickMessage:"📱 Resultat: Du har 17 utlovade luncher från 2018 som väntar på dig!"},{brand:"377 TEGEL-TEXT",headline:"KVINNA LYCKADES ÖPPNA PLASTFÖRPACKNING UTAN SAX ELLER VÅLD",subtext:"Förpackningsindustrin i krismöte: 'Det här skulle inte vara tekniskt möjligt'",cta:"SIDA 383 >>",badge:"VETENSKAP 377",icon:"✂️",imageQuery:"scissors plastic package",theme:"texttv",layout:"texttv",clickMessage:"✂️ Sida 383: Vi har nu förstärkt alla skinkpaket med kevlar och superlim."},{brand:"LOKALA FIKA-KARTELLET",headline:"SMUGGEL-SEMLOR SÄLJES I GRÄNDEN BAKOM JÄRNHANDELN",subtext:"Äkta mandelmassa, 4 deciliter grädde, helt utan säsongstillstånd. Säg kodord 'Hetvägg'.",cta:"VISKA KODORD",price:"60:-",badge:"SVARTABÖRSEN",icon:"🧁",imageQuery:"cream bun bakery",theme:"localbiz",layout:"split",clickMessage:"🧁 *Pssst!* En man i trenchcoat räckte dig precis en kartong med florsocker på."}];let V=[],Fe=null,ci=null,Oi=!1,zr=!1;const Yr=new Map;function Vm(n){const e=n.split(" ")[0]||"random",t=Math.floor(Math.random()*99999);return`https://loremflickr.com/640/260/${encodeURIComponent(e)}?lock=${t}`}async function Km(n){var t,i,s;const e=Yr.get(n);if(e&&e.length>0)return e[Math.floor(Math.random()*e.length)];try{const r=`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrnamespace=6&gsrsearch=filetype:bitmap+${encodeURIComponent(n)}&gsrlimit=15&prop=imageinfo&iiprop=url&iiurlwidth=640&format=json&origin=*`,o=await fetch(r);if(o.ok){const a=await o.json(),l=(t=a==null?void 0:a.query)==null?void 0:t.pages;if(l){const c=[];for(const u of Object.keys(l)){const d=(s=(i=l[u])==null?void 0:i.imageinfo)==null?void 0:s[0],h=(d==null?void 0:d.thumburl)||(d==null?void 0:d.url);h&&typeof h=="string"&&!h.endsWith(".svg")&&!h.endsWith(".tif")&&c.push(h)}if(c.length>0)return Yr.set(n,c),c[Math.floor(Math.random()*c.length)]}}}catch{}return Vm(n)}function Hm(){if(V.length===0){V=[...Bm];for(let n=V.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[V[n],V[e]]=[V[e],V[n]]}Fe&&V[0]===Fe&&V.length>1&&([V[0],V[1]]=[V[1],V[0]])}return Fe=V.shift(),Fe}function Gm(n,e){const t=n.badge?`<span class="ad-badge">${n.badge}</span>`:"",i=n.price?`<span class="ad-price-tag">${n.price}</span>`:"",s=`
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
    `}const Qr=["🚫 Du kan inte stänga reklamen! Vi bytte ut den mot en ännu konstigare istället.","🛡️ AdBlocker avvisad av Kommunala Mysterieverket. Här får du en ny annons!","💸 För att stänga reklamen krävs Tegel Premium Gold Plus (4 999 kr/halvtimme).","🔄 Reklam stängd! Laddar omedelbart in ersättningsreklam..."];function an(n=!0){const e=document.querySelectorAll(".ad-space");if(e.length===0)return;const t=Hm();e.forEach(i=>{n&&i.innerHTML.trim()!==""?(i.classList.add("ad-switching"),setTimeout(()=>{Jr(i,t),i.classList.remove("ad-switching")},180)):Jr(i,t)})}function Jr(n,e){const t=`https://picsum.photos/seed/${encodeURIComponent(e.brand+Math.floor(Math.random()*1e3))}/800/300`;n.className=`ad-space theme-${e.theme} layout-${e.layout}`,n.innerHTML=`
        <div class="ad-bg-image" style="background-image: url('${t}')"></div>
        <div class="ad-bg-overlay"></div>
        <div class="ad-bg-pattern"></div>
        <div class="ad-inner-wrapper">
            ${Gm(e,t)}
        </div>
        <div class="ad-progress-bar"></div>
    `,Km(e.imageQuery).then(i=>{const s=new Image;s.onload=()=>{if(Fe!==e)return;const r=n.querySelector(".ad-bg-image"),o=n.querySelector(".ad-photo-thumb");r&&(r.style.backgroundImage=`url('${i}')`),o&&(o.style.backgroundImage=`url('${i}')`)},s.src=i})}function Wm(n){if(zr)return;zr=!0,an(!1),document.querySelectorAll(".ad-space").forEach(t=>{t.addEventListener("mouseenter",()=>{Oi=!0,t.classList.add("ad-paused")}),t.addEventListener("mouseleave",()=>{Oi=!1,t.classList.remove("ad-paused")}),t.addEventListener("click",i=>{const s=i.target;if(s.closest(".ad-next-btn")){i.stopPropagation(),an(!0),di();return}if(s.closest(".ad-close-btn")){i.stopPropagation();const a=Qr[Math.floor(Math.random()*Qr.length)];n(a,"info"),an(!0),di();return}const r=document.createElement("span");r.classList.add("ripple"),t.appendChild(r);const o=t.getBoundingClientRect();r.style.left=`${i.clientX-o.left}px`,r.style.top=`${i.clientY-o.top}px`,setTimeout(()=>r.remove(),600),Fe&&n(Fe.clickMessage,"info")})}),di()}function di(){ci!==null&&window.clearInterval(ci),ci=window.setInterval(()=>{Oi||an(!0)},9e3)}Mm();const pl=wl({immediate:!0,onNeedRefresh(){P("New version available! Refreshing...","info"),setTimeout(()=>{pl(!0)},1500)},onOfflineReady(){P("App ready to work offline!","info")}});setInterval(()=>{pl(!0)},3600*1e3);const ce=document.querySelector("#app"),Ps=document.createElement("div");Ps.className="toast-container";document.body.appendChild(Ps);function Xr(){const n=document.getElementById("splash-screen");n&&(n.classList.add("fade-out"),setTimeout(()=>n.remove(),1e3))}let ne=new Date().getFullYear(),$=new Date().getMonth(),Ce=[],Q="calendar";function P(n,e="info"){const t=document.createElement("div");t.className=`toast ${e}`,t.innerText=n,Ps.appendChild(t),setTimeout(()=>{t.classList.add("fade-out"),setTimeout(()=>t.remove(),500)},3500)}Wm(P);function ml(){var e,t,i,s;ce.classList.add("auth-mode"),ce.innerHTML=`
        <div class="top-bar">
            <h1>Tegel</h1>
            <button id="games-btn" class="games-link">Games</button>
        </div>
        <div class="auth-form">
            <input type="email" id="email" placeholder="Email" />
            <input type="password" id="password" placeholder="Password" />
            <button id="login-btn">Login</button>
        </div>
    `,(e=document.getElementById("games-btn"))==null||e.addEventListener("click",()=>{Q="games",Kt()});const n=async()=>{const r=document.getElementById("email").value,o=document.getElementById("password").value;try{await nu(X,r,o),P("Logged in successfully!")}catch(a){P(a.message,"error")}};(t=document.getElementById("login-btn"))==null||t.addEventListener("click",n),(i=document.getElementById("password"))==null||i.addEventListener("keypress",r=>{r.key==="Enter"&&n()}),(s=document.getElementById("email"))==null||s.addEventListener("keypress",r=>{r.key==="Enter"&&n()})}function Pn(n,e){var r,o;const t=document.querySelector(".modal-overlay");t&&t.remove();const i=document.createElement("div");i.className="modal-overlay active",i.innerHTML=`
        <div class="modal-content">
            <h2>Are you sure?</h2>
            <p style="text-align: center; color: #9d00ff; margin-bottom: 20px;">${n}</p>
            <div class="modal-actions">
                <button id="confirm-yes">Yes, Delete</button>
                <button id="confirm-no" class="cancel-btn">No, Keep it</button>
            </div>
        </div>
    `,document.body.appendChild(i);const s=()=>{i.classList.remove("active"),setTimeout(()=>i.remove(),300)};(r=document.getElementById("confirm-no"))==null||r.addEventListener("click",s),(o=document.getElementById("confirm-yes"))==null||o.addEventListener("click",()=>{e(),s()})}function gl(n,e){var a,l;const t=document.querySelector(".modal-overlay");t&&t.remove();const i=document.createElement("div");i.className="modal-overlay active";const s=X.currentUser,r=(s==null?void 0:s.email)||"";i.innerHTML=`
        <div class="modal-content">
            <h2>Book Event</h2>
            <p style="text-align: center; color: #9d00ff;">Date: ${n}</p>
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="event-title" placeholder="Synth Party" value="${r}" />
            </div>
            <div class="form-group">
                <label>Start Time</label>
                <input type="time" id="event-start" value="12:00" />
            </div>
            <div class="form-group">
                <label>End Time</label>
                <input type="time" id="event-end" value="13:00" />
            </div>
            <div class="modal-actions">
                <button id="confirm-booking">Confirm</button>
                <button id="cancel-booking" class="cancel-btn">Cancel</button>
            </div>
        </div>
    `,document.body.appendChild(i),(a=document.getElementById("cancel-booking"))==null||a.addEventListener("click",()=>{i.classList.remove("active"),setTimeout(()=>i.remove(),300)});const o=async()=>{const c=document.getElementById("event-title").value,u=document.getElementById("event-start").value,d=document.getElementById("event-end").value;if(!c){P("Please enter a title","error");return}const h=new Date(`${n}T${u}`).getTime(),f=new Date(`${n}T${d}`).getTime();if(f<=h){P("End time must be after start time","error");return}if(Fm({start:h,end:f},e)){P("This time slot is already booked!","error");return}const p=X.currentUser;if(p)try{await Nm({userId:p.uid,title:c,start:h,end:f,email:p.email||"",color:"#"+Math.floor(Math.random()*16777215).toString(16)}),P("Event booked!"),i.classList.remove("active"),setTimeout(()=>i.remove(),300)}catch(g){P(g.message,"error")}};(l=document.getElementById("confirm-booking"))==null||l.addEventListener("click",o),["event-title","event-start","event-end"].forEach(c=>{var u;(u=document.getElementById(c))==null||u.addEventListener("keypress",d=>{d.key==="Enter"&&o()})})}function Os(n){var l,c;const e=Date.now(),t=n.filter(u=>{var d;return u.email===((d=X.currentUser)==null?void 0:d.email)}),i=t.filter(u=>u.end>=e).sort((u,d)=>u.start-d.start),s=t.filter(u=>u.end<e).sort((u,d)=>d.start-u.start),r=document.querySelector(".modal-overlay");r&&r.remove();const o=u=>{const d=new Date(u.start).toLocaleDateString(),h=new Date(u.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),f=new Date(u.end).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
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
    `,document.body.appendChild(a),(l=document.getElementById("delete-all-past"))==null||l.addEventListener("click",()=>{const u=s.map(d=>d.id).filter(d=>!!d);u.length>0&&Pn(`Delete all ${u.length} past bookings?`,async()=>{try{await Pm(u),P("Past bookings cleared"),a.remove()}catch(d){P(d.message,"error")}})}),(c=document.getElementById("close-my-bookings"))==null||c.addEventListener("click",()=>{a.classList.remove("active"),setTimeout(()=>a.remove(),300)}),document.querySelectorAll(".delete-my-booking").forEach(u=>{u.addEventListener("click",async()=>{const d=u.getAttribute("data-id");d&&Pn("Delete this booking?",async()=>{try{await Ns(d),P("Booking deleted"),a.remove()}catch(h){P(h.message,"error")}})})})}function $m(n){if(n.length===0)return"";if(n.length===1)return`background: ${n[0].color||"#ff00ff"}`;const e=n.map(s=>s.color||"#ff00ff"),t=100/e.length;let i="background: linear-gradient(135deg, ";return e.forEach((s,r)=>{i+=`${s} ${r*t}%, ${s} ${(r+1)*t}%`,r<e.length-1&&(i+=", ")}),i+=")",i}function Kt(){var e,t,i,s;ce.classList.remove("auth-mode");const n=!!X.currentUser;ce.innerHTML=`
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                ${n?`
                    <button id="back-to-calendar" class="small-btn-neon purple">Back to Calendar</button>
                    <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                    <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
                `:`
                    <button id="back-to-auth" class="small-btn-neon purple">Back to Login</button>
                `}
            </div>
        </div>

        <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 20px 0; text-transform: uppercase; text-align: center;">Games</h2>

        <div class="games-grid">
            <a href="https://games.tegelhus.uk" class="game-card pink" target="_blank" rel="noopener noreferrer">
                <div class="game-card-icon">👾</div>
                <div class="game-card-title">Games</div>
                <div class="game-card-url">games.tegelhus.uk</div>
            </a>
            <a href="https://atlas.tegelhus.uk" class="game-card cyan" target="_blank" rel="noopener noreferrer">
                <div class="game-card-icon">🌍</div>
                <div class="game-card-title">Atlas</div>
                <div class="game-card-url">atlas.tegelhus.uk</div>
            </a>
        </div>
    `,(e=document.getElementById("back-to-calendar"))==null||e.addEventListener("click",()=>{Q="calendar",be()}),(t=document.getElementById("back-to-auth"))==null||t.addEventListener("click",()=>{Q="calendar",ml()}),(i=document.getElementById("my-bookings-btn"))==null||i.addEventListener("click",()=>{Os(Ce)}),(s=document.getElementById("logout-btn"))==null||s.addEventListener("click",()=>{qi(X),P("Logged out")})}function _l(){var e,t,i,s;ce.classList.remove("auth-mode");const n=xm(ne,$,12,Ce);ce.innerHTML=`
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
                                 style="${$m(l.events)}">
                                ${l.dayOfMonth}
                            </div>
                        `).join("")}
                    </div>
                </div>
                `}).join("")}
        </div>
    `,(e=document.getElementById("games-btn"))==null||e.addEventListener("click",()=>{Q="games",Kt()}),(t=document.getElementById("back-to-calendar"))==null||t.addEventListener("click",()=>{Q="calendar",be()}),(i=document.getElementById("my-bookings-btn"))==null||i.addEventListener("click",()=>{Os(Ce)}),(s=document.getElementById("logout-btn"))==null||s.addEventListener("click",()=>{qi(X),P("Logged out")}),document.querySelectorAll(".month-tile").forEach(r=>{r.addEventListener("click",()=>{ne=parseInt(r.getAttribute("data-year")||"0"),$=parseInt(r.getAttribute("data-month")||"0"),Q="calendar",be()})}),document.querySelectorAll(".mini-day:not(.empty)").forEach(r=>{r.addEventListener("click",o=>{o.stopPropagation();const a=document.createElement("span");a.classList.add("ripple"),r.appendChild(a);const l=o.clientX-r.getBoundingClientRect().left,c=o.clientY-r.getBoundingClientRect().top;a.style.left=`${l}px`,a.style.top=`${c}px`,setTimeout(()=>a.remove(),600);const u=r.getAttribute("data-date");u&&gl(u,Ce)})})}function be(){var r,o,a,l,c,u,d,h;ce.classList.remove("auth-mode");const n=fl(ne,$,Ce),e=new Date,t=ne===e.getFullYear()&&$===e.getMonth(),i=`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`;ce.innerHTML=`
        <div class="top-bar">
            <h1>Tegel</h1>
            <div class="actions-bar">
                <button id="games-btn" class="games-link">Games</button>
                <button id="chalkboard-btn" class="small-btn-neon pink">Anslagstavla</button>
                <button id="year-overview-btn" class="small-btn-neon cyan">Overview</button>
                ${t?"":'<button id="go-today-btn" class="small-btn-neon purple">Current Month</button>'}
                <button id="my-bookings-btn" class="small-btn-neon">My Bookings</button>
                <button id="logout-btn" class="small-btn-neon" style="color: #fff; border-color: #fff; box-shadow: 0 0 5px #fff;">Logout</button>
            </div>
        </div>
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 20px;">
            <button id="prev-month">&lt;</button>
            <h2 style="color: #00ffff; text-shadow: 0 0 5px #00ffff; margin: 0; text-transform: uppercase; font-size: 1.2rem;">
                ${hl[$]} ${ne}
            </h2>
            <button id="next-month">&gt;</button>
        </div>

        <div class="calendar-grid">
            ${n.days.map(f=>`
                <div class="day-cell ${f.date===i?"today":""}" data-date="${f.date}">
                    <div class="day-number">${f.dayOfMonth}</div>
                    <div class="event-list">
                        ${f.events.map(p=>{var x;const g=p.email===((x=X.currentUser)==null?void 0:x.email),T=new Date(p.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),A=new Date(p.end).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return`
                                <div class="event ${g?"my-event":""}" 
                                     style="border-color: ${p.color||"#ff00ff"}" 
                                     title="${T} - ${A}: ${p.title}" 
                                     data-id="${p.id}">
                                    <span class="event-time">${T}-${A}</span>
                                    <span class="event-title">${p.title}${g?" (Me)":""}</span>
                                    ${g?'<span class="delete-ev-btn" title="Delete">&times;</span>':""}
                                </div>
                            `}).join("")}
                    </div>
                </div>
            `).join("")}
        </div>
    `,(r=document.getElementById("games-btn"))==null||r.addEventListener("click",()=>{Q="games",Kt()}),(o=document.getElementById("year-overview-btn"))==null||o.addEventListener("click",()=>{Q="yearOverview",_l()}),(a=document.getElementById("logout-btn"))==null||a.addEventListener("click",()=>{qi(X),P("Logged out")}),(l=document.getElementById("chalkboard-btn"))==null||l.addEventListener("click",()=>{var f;new Um(ce),(f=document.getElementById("back-to-calendar"))==null||f.addEventListener("click",()=>{be()})}),(c=document.getElementById("my-bookings-btn"))==null||c.addEventListener("click",()=>{Os(Ce)}),(u=document.getElementById("go-today-btn"))==null||u.addEventListener("click",()=>{const f=new Date;ne=f.getFullYear(),$=f.getMonth(),be()}),(d=document.getElementById("prev-month"))==null||d.addEventListener("click",()=>{$--,$<0&&($=11,ne--),be()}),(h=document.getElementById("next-month"))==null||h.addEventListener("click",()=>{$++,$>11&&($=0,ne++),be()}),document.querySelectorAll(".delete-ev-btn").forEach(f=>{f.addEventListener("click",async p=>{var x,Z;p.stopPropagation();const g=f.closest(".event"),T=g.getAttribute("data-id"),A=(Z=(x=g.querySelector(".event-title"))==null?void 0:x.textContent)==null?void 0:Z.replace(" (Me)","");T&&Pn(`Delete event "${A}"?`,async()=>{try{await Ns(T),P("Event deleted")}catch(je){P(je.message,"error")}})})}),document.querySelectorAll(".day-cell").forEach(f=>{f.addEventListener("click",p=>{const g=document.createElement("span");g.classList.add("ripple"),f.appendChild(g);const T=p.clientX-f.getBoundingClientRect().left,A=p.clientY-f.getBoundingClientRect().top;g.style.left=`${T}px`,g.style.top=`${A}px`,setTimeout(()=>g.remove(),600);const x=f.getAttribute("data-date");x&&gl(x,Ce)})});const s=new Date;if(ne===s.getFullYear()&&$===s.getMonth()){const f=s.getFullYear(),p=String(s.getMonth()+1).padStart(2,"0"),g=String(s.getDate()).padStart(2,"0"),T=`${f}-${p}-${g}`,A=document.querySelector(`.day-cell[data-date="${T}"]`);A&&setTimeout(()=>{A.scrollIntoView({behavior:"smooth",block:"center"}),A.style.boxShadow="0 0 20px #00ffff",setTimeout(()=>{A.style.boxShadow=""},2e3)},100)}}let en=!0;window.addEventListener("keydown",n=>{if(n.key==="Escape"){const e=document.querySelector(".modal-overlay.active");e&&(e.classList.remove("active"),setTimeout(()=>e.remove(),300))}});ru(X,n=>{n?Am(e=>{Ce=e,Q==="yearOverview"?_l():Q==="games"?Kt():be(),en&&(Xr(),en=!1)}):(Q==="games"?Kt():ml(),en&&(Xr(),en=!1))});
