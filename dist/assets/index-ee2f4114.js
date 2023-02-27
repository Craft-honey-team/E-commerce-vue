(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Qr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=me(s)?Ic(s):Qr(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(me(t))return t;if(le(t))return t}}const yc=/;(?![^(]*\))/g,wc=/:([^]+)/,Ec=/\/\*.*?\*\//gs;function Ic(t){const e={};return t.replace(Ec,"").split(yc).forEach(n=>{if(n){const s=n.split(wc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rs(t){let e="";if(me(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=rs(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tc=Xr(xc);function ca(t){return!!t||t===""}function Sc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Yt(t[s],e[s]);return n}function Yt(t,e){if(t===e)return!0;let n=Hi(t),s=Hi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=zn(t),s=zn(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?Sc(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Yt(t[o],e[o]))return!1}}return String(t)===String(e)}function Zr(t,e){return t.findIndex(n=>Yt(n,e))}const j=t=>me(t)?t:t==null?"":F(t)||le(t)&&(t.toString===da||!V(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:In(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!F(e)&&!ha(e)?String(e):e,ce={},an=[],Je=()=>{},Cc=()=>!1,kc=/^on[^a-z]/,Vs=t=>kc.test(t),ei=t=>t.startsWith("onUpdate:"),Se=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pc=Object.prototype.hasOwnProperty,Q=(t,e)=>Pc.call(t,e),F=Array.isArray,ln=t=>is(t)==="[object Map]",In=t=>is(t)==="[object Set]",Hi=t=>is(t)==="[object Date]",V=t=>typeof t=="function",me=t=>typeof t=="string",zn=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",fa=t=>le(t)&&V(t.then)&&V(t.catch),da=Object.prototype.toString,is=t=>da.call(t),Rc=t=>is(t).slice(8,-1),ha=t=>is(t)==="[object Object]",ni=t=>me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ac=/-(\w)/g,rt=Ws(t=>t.replace(Ac,(e,n)=>n?n.toUpperCase():"")),Oc=/\B([A-Z])/g,xn=Ws(t=>t.replace(Oc,"-$1").toLowerCase()),zs=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),lr=Ws(t=>t?`on${zs(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Is=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ji;const Nc=()=>ji||(ji=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let De;class pa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=De,!e&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}run(e){if(this.active){const n=De;try{return De=this,e()}finally{De=n}}}on(){De=this}off(){De=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ga(t){return new pa(t)}function Mc(t,e=De){e&&e.active&&e.effects.push(t)}function Dc(){return De}function Lc(t){De&&De.cleanups.push(t)}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ma=t=>(t.w&At)>0,_a=t=>(t.n&At)>0,Uc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},Fc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ma(r)&&!_a(r)?r.delete(t):e[n++]=r,r.w&=~At,r.n&=~At}e.length=n}},Tr=new WeakMap;let Mn=0,At=1;const Sr=30;let qe;const qt=Symbol(""),Cr=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Mc(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=Tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,Tt=!0,At=1<<++Mn,Mn<=Sr?Uc(this):Vi(this),this.fn()}finally{Mn<=Sr&&Fc(this),At=1<<--Mn,qe=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(Vi(this),this.onStop&&this.onStop(),this.active=!1)}}function Vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tt=!0;const ba=[];function Tn(){ba.push(Tt),Tt=!1}function Sn(){const t=ba.pop();Tt=t===void 0?!0:t}function Fe(t,e,n){if(Tt&&qe){let s=Tr.get(t);s||Tr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),va(r)}}function va(t,e){let n=!1;Mn<=Sr?_a(t)||(t.n|=At,n=!ma(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function ht(t,e,n,s,r,i){const o=Tr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const l=qn(s);o.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(qt)),ln(t)&&a.push(o.get(Cr)));break;case"delete":F(t)||(a.push(o.get(qt)),ln(t)&&a.push(o.get(Cr)));break;case"set":ln(t)&&a.push(o.get(qt));break}if(a.length===1)a[0]&&kr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);kr(si(l))}}function kr(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&Wi(s);for(const s of n)s.computed||Wi(s)}function Wi(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const $c=Xr("__proto__,__v_isRef,__isVue"),ya=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(zn)),Bc=ii(),Hc=ii(!1,!0),jc=ii(!0),zi=Vc();function Vc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)Fe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tn();const s=Z(this)[e].apply(this,n);return Sn(),s}}),t}function ii(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?iu:Ta:e?xa:Ia).get(s))return s;const o=F(s);if(!t&&o&&Q(zi,r))return Reflect.get(zi,r,i);const a=Reflect.get(s,r,i);return(zn(r)?ya.has(r):$c(r))||(t||Fe(s,"get",r),e)?a:de(a)?o&&ni(r)?a:a.value:le(a)?t?Sa(a):Cn(a):a}}const Wc=wa(),zc=wa(!0);function wa(t=!1){return function(n,s,r,i){let o=n[s];if(pn(o)&&de(o)&&!de(r))return!1;if(!t&&(!Os(r)&&!pn(r)&&(o=Z(o),r=Z(r)),!F(n)&&de(o)&&!de(r)))return o.value=r,!0;const a=F(n)&&ni(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?Kn(r,o)&&ht(n,"set",s,r):ht(n,"add",s,r)),l}}function Kc(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ht(t,"delete",e,void 0),s}function qc(t,e){const n=Reflect.has(t,e);return(!zn(e)||!ya.has(e))&&Fe(t,"has",e),n}function Gc(t){return Fe(t,"iterate",F(t)?"length":qt),Reflect.ownKeys(t)}const Ea={get:Bc,set:Wc,deleteProperty:Kc,has:qc,ownKeys:Gc},Jc={get:jc,set(t,e){return!0},deleteProperty(t,e){return!0}},Yc=Se({},Ea,{get:Hc,set:zc}),oi=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&Fe(r,"get",e),Fe(r,"get",i));const{has:o}=Ks(r),a=s?oi:n?ci:Gn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&Fe(s,"has",t),Fe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ms(t,e=!1){return t=t.__v_raw,!e&&Fe(Z(t),"iterate",qt),Reflect.get(t,"size",t)}function Ki(t){t=Z(t);const e=Z(this);return Ks(e).has.call(e,t)||(e.add(t),ht(e,"add",t,t)),this}function qi(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Ks(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Kn(e,o)&&ht(n,"set",t,e):ht(n,"add",t,e),this}function Gi(t){const e=Z(this),{has:n,get:s}=Ks(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ht(e,"delete",t,void 0),i}function Ji(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&ht(t,"clear",void 0,void 0),n}function _s(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=e?oi:t?ci:Gn;return!t&&Fe(a,"iterate",qt),o.forEach((c,f)=>s.call(r,l(c),l(f),i))}}function bs(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=ln(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),f=n?oi:e?ci:Gn;return!e&&Fe(i,"iterate",l?Cr:qt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function mt(t){return function(...e){return t==="delete"?!1:this}}function Xc(){const t={get(i){return ps(this,i)},get size(){return ms(this)},has:gs,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:_s(!1,!1)},e={get(i){return ps(this,i,!1,!0)},get size(){return ms(this)},has:gs,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:_s(!1,!0)},n={get(i){return ps(this,i,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:_s(!0,!1)},s={get(i){return ps(this,i,!0,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:mt("add"),set:mt("set"),delete:mt("delete"),clear:mt("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bs(i,!1,!1),n[i]=bs(i,!0,!1),e[i]=bs(i,!1,!0),s[i]=bs(i,!0,!0)}),[t,n,e,s]}const[Qc,Zc,eu,tu]=Xc();function ai(t,e){const n=e?t?tu:eu:t?Zc:Qc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const nu={get:ai(!1,!1)},su={get:ai(!1,!0)},ru={get:ai(!0,!1)},Ia=new WeakMap,xa=new WeakMap,Ta=new WeakMap,iu=new WeakMap;function ou(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function au(t){return t.__v_skip||!Object.isExtensible(t)?0:ou(Rc(t))}function Cn(t){return pn(t)?t:li(t,!1,Ea,nu,Ia)}function lu(t){return li(t,!1,Yc,su,xa)}function Sa(t){return li(t,!0,Jc,ru,Ta)}function li(t,e,n,s,r){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=au(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function St(t){return pn(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function pn(t){return!!(t&&t.__v_isReadonly)}function Os(t){return!!(t&&t.__v_isShallow)}function Ca(t){return St(t)||pn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function gn(t){return As(t,"__v_skip",!0),t}const Gn=t=>le(t)?Cn(t):t,ci=t=>le(t)?Sa(t):t;function ka(t){Tt&&qe&&(t=Z(t),va(t.dep||(t.dep=si())))}function Pa(t,e){t=Z(t),t.dep&&kr(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Ra(t,!1)}function cu(t){return Ra(t,!0)}function Ra(t,e){return de(t)?t:new uu(t,e)}class uu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Gn(e)}get value(){return ka(this),this._value}set value(e){const n=this.__v_isShallow||Os(e)||pn(e);e=n?e:Z(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Gn(e),Pa(this))}}function cn(t){return de(t)?t.value:t}const fu={get:(t,e,n)=>cn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Aa(t){return St(t)?t:new Proxy(t,fu)}function du(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=pu(t,n);return e}class hu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function pu(t,e,n){const s=t[e];return de(s)?s:new hu(t,e,n)}var Oa;class gu{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Oa]=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,Pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return ka(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Oa="__v_isReadonly";function mu(t,e,n=!1){let s,r;const i=V(t);return i?(s=t,r=Je):(s=t.get,r=t.set),new gu(s,r,i||!r,n)}function Ct(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){qs(i,e,n)}return r}function He(t,e,n,s){if(V(t)){const i=Ct(t,e,n,s);return i&&fa(i)&&i.catch(o=>{qs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(He(t[i],e,n,s));return r}function qs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ct(l,null,10,[t,o,a]);return}}_u(t,n,r,s)}function _u(t,e,n,s=!0){console.error(t)}let Jn=!1,Pr=!1;const xe=[];let et=0;const un=[];let lt=null,Ht=0;const Na=Promise.resolve();let fi=null;function di(t){const e=fi||Na;return t?e.then(this?t.bind(this):t):e}function bu(t){let e=et+1,n=xe.length;for(;e<n;){const s=e+n>>>1;Yn(xe[s])<t?e=s+1:n=s}return e}function hi(t){(!xe.length||!xe.includes(t,Jn&&t.allowRecurse?et+1:et))&&(t.id==null?xe.push(t):xe.splice(bu(t.id),0,t),Ma())}function Ma(){!Jn&&!Pr&&(Pr=!0,fi=Na.then(La))}function vu(t){const e=xe.indexOf(t);e>et&&xe.splice(e,1)}function yu(t){F(t)?un.push(...t):(!lt||!lt.includes(t,t.allowRecurse?Ht+1:Ht))&&un.push(t),Ma()}function Yi(t,e=Jn?et+1:0){for(;e<xe.length;e++){const n=xe[e];n&&n.pre&&(xe.splice(e,1),e--,n())}}function Da(t){if(un.length){const e=[...new Set(un)];if(un.length=0,lt){lt.push(...e);return}for(lt=e,lt.sort((n,s)=>Yn(n)-Yn(s)),Ht=0;Ht<lt.length;Ht++)lt[Ht]();lt=null,Ht=0}}const Yn=t=>t.id==null?1/0:t.id,wu=(t,e)=>{const n=Yn(t)-Yn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function La(t){Pr=!1,Jn=!0,xe.sort(wu);const e=Je;try{for(et=0;et<xe.length;et++){const n=xe[et];n&&n.active!==!1&&Ct(n,null,14)}}finally{et=0,xe.length=0,Da(),Jn=!1,fi=null,(xe.length||un.length)&&La()}}function Eu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||ce;p&&(r=n.map(_=>me(_)?_.trim():_)),h&&(r=n.map(qn))}let a,l=s[a=lr(e)]||s[a=lr(rt(e))];!l&&i&&(l=s[a=lr(xn(e))]),l&&He(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,He(c,t,6,r)}}function Ua(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const f=Ua(c,e,!0);f&&(a=!0,Se(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(le(t)&&s.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):Se(o,i),le(t)&&s.set(t,o),o)}function Gs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,xn(e))||Q(t,e))}let Ie=null,Fa=null;function Ns(t){const e=Ie;return Ie=t,Fa=t&&t.type.__scopeId||null,e}function Be(t,e=Ie,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&oo(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&oo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function cr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:h,data:p,setupState:_,ctx:x,inheritAttrs:S}=t;let U,R;const $=Ns(t);try{if(n.shapeFlag&4){const W=r||s;U=Ze(f.call(W,W,h,i,_,p,x)),R=l}else{const W=e;U=Ze(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),R=e.props?l:Iu(l)}}catch(W){Bn.length=0,qs(W,t,1),U=te(je)}let O=U;if(R&&S!==!1){const W=Object.keys(R),{shapeFlag:K}=O;W.length&&K&7&&(o&&W.some(ei)&&(R=xu(R,o)),O=Ot(O,R))}return n.dirs&&(O=Ot(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Ns($),U}const Iu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Tu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Xi(s,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Gs(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,c):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gs(n,i))return!0}return!1}function Su({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cu=t=>t.__isSuspense;function ku(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):yu(t)}function xs(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function tt(t,e,n=!1){const s=ye||Ie;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s.proxy):e}}const vs={};function Un(t,e,n){return $a(t,e,n)}function $a(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ce){const a=ye;let l,c=!1,f=!1;if(de(t)?(l=()=>t.value,c=Os(t)):St(t)?(l=()=>t,s=!0):F(t)?(f=!0,c=t.some(O=>St(O)||Os(O)),l=()=>t.map(O=>{if(de(O))return O.value;if(St(O))return zt(O);if(V(O))return Ct(O,a,2)})):V(t)?e?l=()=>Ct(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),He(t,a,3,[p])}:l=Je,e&&s){const O=l;l=()=>zt(O())}let h,p=O=>{h=R.onStop=()=>{Ct(O,a,4)}},_;if(Qn)if(p=Je,e?n&&He(e,a,3,[l(),f?[]:void 0,p]):l(),r==="sync"){const O=If();_=O.__watcherHandles||(O.__watcherHandles=[])}else return Je;let x=f?new Array(t.length).fill(vs):vs;const S=()=>{if(R.active)if(e){const O=R.run();(s||c||(f?O.some((W,K)=>Kn(W,x[K])):Kn(O,x)))&&(h&&h(),He(e,a,3,[O,x===vs?void 0:f&&x[0]===vs?[]:x,p]),x=O)}else R.run()};S.allowRecurse=!!e;let U;r==="sync"?U=S:r==="post"?U=()=>Oe(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),U=()=>hi(S));const R=new ri(l,U);e?n?S():x=R.run():r==="post"?Oe(R.run.bind(R),a&&a.suspense):R.run();const $=()=>{R.stop(),a&&a.scope&&ti(a.scope.effects,R)};return _&&_.push($),$}function Pu(t,e,n){const s=this.proxy,r=me(t)?t.includes(".")?Ba(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=ye;mn(this);const a=$a(r,i.bind(s),n);return o?mn(o):Gt(),a}function Ba(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function zt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))zt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)zt(t[n],e);else if(In(t)||ln(t))t.forEach(n=>{zt(n,e)});else if(ha(t))for(const n in t)zt(t[n],e);return t}function Ru(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),Ka(()=>{t.isUnmounting=!0}),t}const $e=[Function,Array],Au={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$e,onEnter:$e,onAfterEnter:$e,onEnterCancelled:$e,onBeforeLeave:$e,onLeave:$e,onAfterLeave:$e,onLeaveCancelled:$e,onBeforeAppear:$e,onAppear:$e,onAfterAppear:$e,onAppearCancelled:$e},setup(t,{slots:e}){const n=al(),s=Ru();let r;return()=>{const i=e.default&&ja(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==je){o=S;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return ur(o);const c=Qi(o);if(!c)return ur(o);const f=Rr(c,a,s,n);Ar(c,f);const h=n.subTree,p=h&&Qi(h);let _=!1;const{getTransitionKey:x}=c.type;if(x){const S=x();r===void 0?r=S:S!==r&&(r=S,_=!0)}if(p&&p.type!==je&&(!jt(c,p)||_)){const S=Rr(p,a,s,n);if(Ar(p,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ur(o);l==="in-out"&&c.type!==je&&(S.delayLeave=(U,R,$)=>{const O=Ha(s,p);O[String(p.key)]=p,U._leaveCb=()=>{R(),U._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=$})}return o}}},Ou=Au;function Ha(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:S,onAppear:U,onAfterAppear:R,onAppearCancelled:$}=e,O=String(t.key),W=Ha(n,t),K=(A,J)=>{A&&He(A,s,9,J)},re=(A,J)=>{const Y=J[1];K(A,J),F(A)?A.every(fe=>fe.length<=1)&&Y():A.length<=1&&Y()},z={mode:i,persisted:o,beforeEnter(A){let J=a;if(!n.isMounted)if(r)J=S||a;else return;A._leaveCb&&A._leaveCb(!0);const Y=W[O];Y&&jt(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[A])},enter(A){let J=l,Y=c,fe=f;if(!n.isMounted)if(r)J=U||l,Y=R||c,fe=$||f;else return;let _e=!1;const Ne=A._enterCb=ke=>{_e||(_e=!0,ke?K(fe,[A]):K(Y,[A]),z.delayedLeave&&z.delayedLeave(),A._enterCb=void 0)};J?re(J,[A,Ne]):Ne()},leave(A,J){const Y=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return J();K(h,[A]);let fe=!1;const _e=A._leaveCb=Ne=>{fe||(fe=!0,J(),Ne?K(x,[A]):K(_,[A]),A._leaveCb=void 0,W[Y]===t&&delete W[Y])};W[Y]=t,p?re(p,[A,_e]):_e()},clone(A){return Rr(A,e,n,s)}};return z}function ur(t){if(Js(t))return t=Ot(t),t.children=null,t}function Qi(t){return Js(t)?t.children?t.children[0]:void 0:t}function Ar(t,e){t.shapeFlag&6&&t.component?Ar(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ja(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&r++,s=s.concat(ja(o.children,e,a))):(e||o.type!==je)&&s.push(a!=null?Ot(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Va(t){return V(t)?{setup:t,name:t.name}:t}const Fn=t=>!!t.type.__asyncLoader,Js=t=>t.type.__isKeepAlive;function Nu(t,e){Wa(t,"a",e)}function Mu(t,e){Wa(t,"da",e)}function Wa(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ys(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Js(r.parent.vnode)&&Du(s,e,n,r),r=r.parent}}function Du(t,e,n,s){const r=Ys(e,t,s,!0);qa(()=>{ti(s[e],r)},n)}function Ys(t,e,n=ye,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tn(),mn(n);const a=He(e,n,t,o);return Gt(),Sn(),a});return s?r.unshift(i):r.push(i),i}}const gt=t=>(e,n=ye)=>(!Qn||t==="sp")&&Ys(t,(...s)=>e(...s),n),Lu=gt("bm"),za=gt("m"),Uu=gt("bu"),Fu=gt("u"),Ka=gt("bum"),qa=gt("um"),$u=gt("sp"),Bu=gt("rtg"),Hu=gt("rtc");function ju(t,e=ye){Ys("ec",t,e)}function we(t,e){const n=Ie;if(n===null)return t;const s=er(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ce]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&zt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Tn(),He(l,n,8,[t.el,a,t,e]),Sn())}}const pi="components";function Xt(t,e){return Ja(pi,t,!0,e)||t}const Ga=Symbol();function Vu(t){return me(t)?Ja(pi,t,!1)||t:t||Ga}function Ja(t,e,n=!0,s=!1){const r=Ie||ye;if(r){const i=r.type;if(t===pi){const a=yf(i,!1);if(a&&(a===e||a===rt(e)||a===zs(rt(e))))return i}const o=Zi(r[t]||i[t],e)||Zi(r.appContext[t],e);return!o&&s?i:o}}function Zi(t,e){return t&&(t[e]||t[rt(e)]||t[zs(rt(e))])}function pv(t,e,n,s){let r;const i=n&&n[s];if(F(t)||me(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Wu(t,e,n={},s,r){if(Ie.isCE||Ie.parent&&Fn(Ie.parent)&&Ie.parent.isCE)return e!=="default"&&(n.name=e),te("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ge();const o=i&&Ya(i(n)),a=Qs(Le,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ya(t){return t.some(e=>Ds(e)?!(e.type===je||e.type===Le&&!Ya(e.children)):!0)?t:null}const Or=t=>t?ll(t)?er(t)||t.proxy:Or(t.parent):null,$n=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>hi(t.update)),$nextTick:t=>t.n||(t.n=di.bind(t.proxy)),$watch:t=>Pu.bind(t)}),fr=(t,e)=>t!==ce&&!t.__isScriptSetup&&Q(t,e),zu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(fr(s,e))return o[e]=1,s[e];if(r!==ce&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,i[e];if(n!==ce&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const f=$n[e];let h,p;if(f)return e==="$attrs"&&Fe(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&Q(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return fr(r,e)?(r[e]=n,!0):s!==ce&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ce&&Q(t,o)||fr(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q($n,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Ku(t){const e=gi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:x,activated:S,deactivated:U,beforeDestroy:R,beforeUnmount:$,destroyed:O,unmounted:W,render:K,renderTracked:re,renderTriggered:z,errorCaptured:A,serverPrefetch:J,expose:Y,inheritAttrs:fe,components:_e,directives:Ne,filters:ke}=e;if(c&&qu(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ne=o[ie];V(ne)&&(s[ie]=ne.bind(n))}if(r){const ie=r.call(n,n);le(ie)&&(t.data=Cn(ie))}if(Nr=!0,i)for(const ie in i){const ne=i[ie],We=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):Je,Dt=!V(ne)&&V(ne.set)?ne.set.bind(n):Je,ze=Ue({get:We,set:Dt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ae=>ze.value=Ae})}if(a)for(const ie in a)Xa(a[ie],s,n,ie);if(l){const ie=V(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ne=>{xs(ne,ie[ne])})}f&&eo(f,t,"c");function he(ie,ne){F(ne)?ne.forEach(We=>ie(We.bind(n))):ne&&ie(ne.bind(n))}if(he(Lu,h),he(za,p),he(Uu,_),he(Fu,x),he(Nu,S),he(Mu,U),he(ju,A),he(Hu,re),he(Bu,z),he(Ka,$),he(qa,W),he($u,J),F(Y))if(Y.length){const ie=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});K&&t.render===Je&&(t.render=K),fe!=null&&(t.inheritAttrs=fe),_e&&(t.components=_e),Ne&&(t.directives=Ne)}function qu(t,e,n=Je,s=!1){F(t)&&(t=Mr(t));for(const r in t){const i=t[r];let o;le(i)?"default"in i?o=tt(i.from||r,i.default,!0):o=tt(i.from||r):o=tt(i),de(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function eo(t,e,n){He(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xa(t,e,n,s){const r=s.includes(".")?Ba(n,s):()=>n[s];if(me(t)){const i=e[t];V(i)&&Un(r,i)}else if(V(t))Un(r,t.bind(n));else if(le(t))if(F(t))t.forEach(i=>Xa(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Un(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ms(l,c,o,!0)),Ms(l,e,o)),le(e)&&i.set(e,l),l}function Ms(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ms(t,i,n,!0),r&&r.forEach(o=>Ms(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gu={data:to,props:$t,emits:$t,methods:$t,computed:$t,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:$t,directives:$t,watch:Yu,provide:to,inject:Ju};function to(t,e){return e?t?function(){return Se(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Ju(t,e){return $t(Mr(t),Mr(e))}function Mr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function $t(t,e){return t?Se(Se(Object.create(null),t),e):e}function Yu(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function Xu(t,e,n,s=!1){const r={},i={};As(i,Zs,1),t.propsDefaults=Object.create(null),Qa(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:lu(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Qu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Gs(t.emitsOptions,p))continue;const _=e[p];if(l)if(Q(i,p))_!==i[p]&&(i[p]=_,c=!0);else{const x=rt(p);r[x]=Dr(l,a,x,_,t,!1)}else _!==i[p]&&(i[p]=_,c=!0)}}}else{Qa(t,e,r,i)&&(c=!0);let f;for(const h in a)(!e||!Q(e,h)&&((f=xn(h))===h||!Q(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Dr(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h))&&(delete i[h],c=!0)}c&&ht(t,"set","$attrs")}function Qa(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let f;r&&Q(r,f=rt(l))?!i||!i.includes(f)?n[f]=c:(a||(a={}))[f]=c:Gs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||ce;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Dr(r,l,h,c[h],t,!Q(c,h))}}return o}function Dr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(mn(r),s=c[n]=l.call(null,e),Gt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xn(n))&&(s=!0))}return s}function Za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!V(t)){const f=h=>{l=!0;const[p,_]=Za(h,e,!0);Se(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return le(t)&&s.set(t,an),an;if(F(i))for(let f=0;f<i.length;f++){const h=rt(i[f]);no(h)&&(o[h]=ce)}else if(i)for(const f in i){const h=rt(f);if(no(h)){const p=i[f],_=o[h]=F(p)||V(p)?{type:p}:Object.assign({},p);if(_){const x=io(Boolean,_.type),S=io(String,_.type);_[0]=x>-1,_[1]=S<0||x<S,(x>-1||Q(_,"default"))&&a.push(h)}}}const c=[o,a];return le(t)&&s.set(t,c),c}function no(t){return t[0]!=="$"}function so(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ro(t,e){return so(t)===so(e)}function io(t,e){return F(e)?e.findIndex(n=>ro(n,t)):V(e)&&ro(e,t)?0:-1}const el=t=>t[0]==="_"||t==="$stable",mi=t=>F(t)?t.map(Ze):[Ze(t)],Zu=(t,e,n)=>{if(e._n)return e;const s=Be((...r)=>mi(e(...r)),n);return s._c=!1,s},tl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(el(r))continue;const i=t[r];if(V(i))e[r]=Zu(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},nl=(t,e)=>{const n=mi(e);t.slots.default=()=>n},ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),As(e,"_",n)):tl(e,t.slots={})}else t.slots={},e&&nl(t,e);As(t.slots,Zs,1)},tf=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Se(r,e),!n&&a===1&&delete r._):(i=!e.$stable,tl(e,r)),o=e}else e&&(nl(t,e),o={default:1});if(i)for(const a in r)!el(a)&&!(a in o)&&delete r[a]};function sl(){return{app:null,config:{isNativeTag:Cc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function sf(t,e){return function(s,r=null){V(s)||(s=Object.assign({},s)),r!=null&&!le(r)&&(r=null);const i=sl(),o=new Set;let a=!1;const l=i.app={_uid:nf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...f)):V(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,h){if(!a){const p=te(s,r);return p.appContext=i,f&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,er(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Lr(t,e,n,s,r=!1){if(F(t)){t.forEach((p,_)=>Lr(p,e&&(F(e)?e[_]:e),n,s,r));return}if(Fn(s)&&!r)return;const i=s.shapeFlag&4?er(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,f=a.refs===ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(me(c)?(f[c]=null,Q(h,c)&&(h[c]=null)):de(c)&&(c.value=null)),V(l))Ct(l,a,12,[o,f]);else{const p=me(l),_=de(l);if(p||_){const x=()=>{if(t.f){const S=p?Q(h,l)?h[l]:f[l]:l.value;r?F(S)&&ti(S,i):F(S)?S.includes(i)||S.push(i):p?(f[l]=[i],Q(h,l)&&(h[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else p?(f[l]=o,Q(h,l)&&(h[l]=o)):_&&(l.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,Oe(x,n)):x()}}}const Oe=ku;function rf(t){return of(t)}function of(t,e){const n=Nc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=Je,insertStaticContent:x}=t,S=(u,d,g,m=null,y=null,I=null,k=!1,E=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!jt(u,d)&&(m=C(u),Ae(u,y,I,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:N}=d;switch(w){case Xs:U(u,d,g,m);break;case je:R(u,d,g,m);break;case Ts:u==null&&$(d,g,m,k);break;case Le:_e(u,d,g,m,y,I,k,E,T);break;default:N&1?K(u,d,g,m,y,I,k,E,T):N&6?Ne(u,d,g,m,y,I,k,E,T):(N&64||N&128)&&w.process(u,d,g,m,y,I,k,E,T,X)}D!=null&&y&&Lr(D,u&&u.ref,I,d||u,!d)},U=(u,d,g,m)=>{if(u==null)s(d.el=a(d.children),g,m);else{const y=d.el=u.el;d.children!==u.children&&c(y,d.children)}},R=(u,d,g,m)=>{u==null?s(d.el=l(d.children||""),g,m):d.el=u.el},$=(u,d,g,m)=>{[u.el,u.anchor]=x(u.children,d,g,m,u.el,u.anchor)},O=({el:u,anchor:d},g,m)=>{let y;for(;u&&u!==d;)y=p(u),s(u,g,m),u=y;s(d,g,m)},W=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},K=(u,d,g,m,y,I,k,E,T)=>{k=k||d.type==="svg",u==null?re(d,g,m,y,I,k,E,T):J(u,d,y,I,k,E,T)},re=(u,d,g,m,y,I,k,E)=>{let T,w;const{type:D,props:N,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=o(u.type,I,N&&N.is,N),L&8?f(T,u.children):L&16&&A(u.children,T,null,m,y,I&&D!=="foreignObject",k,E),G&&Lt(u,null,m,"created"),N){for(const se in N)se!=="value"&&!Es(se)&&i(T,se,null,N[se],I,u.children,m,y,P);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Qe(w,m,u)}z(T,u,u.scopeId,k,m),G&&Lt(u,null,m,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,d,g),((w=N&&N.onVnodeMounted)||oe||G)&&Oe(()=>{w&&Qe(w,m,u),oe&&H.enter(T),G&&Lt(u,null,m,"mounted")},y)},z=(u,d,g,m,y)=>{if(g&&_(u,g),m)for(let I=0;I<m.length;I++)_(u,m[I]);if(y){let I=y.subTree;if(d===I){const k=y.vnode;z(u,k,k.scopeId,k.slotScopeIds,y.parent)}}},A=(u,d,g,m,y,I,k,E,T=0)=>{for(let w=T;w<u.length;w++){const D=u[w]=E?vt(u[w]):Ze(u[w]);S(null,D,d,g,m,y,I,k,E)}},J=(u,d,g,m,y,I,k)=>{const E=d.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:D}=d;T|=u.patchFlag&16;const N=u.props||ce,L=d.props||ce;let H;g&&Ut(g,!1),(H=L.onVnodeBeforeUpdate)&&Qe(H,g,d,u),D&&Lt(d,u,g,"beforeUpdate"),g&&Ut(g,!0);const G=y&&d.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,E,g,m,G,I):k||ne(u,d,E,null,g,m,G,I,!1),T>0){if(T&16)fe(E,d,N,L,g,m,y);else if(T&2&&N.class!==L.class&&i(E,"class",null,L.class,y),T&4&&i(E,"style",N.style,L.style,y),T&8){const oe=d.dynamicProps;for(let se=0;se<oe.length;se++){const pe=oe[se],Ke=N[pe],nn=L[pe];(nn!==Ke||pe==="value")&&i(E,pe,Ke,nn,y,u.children,g,m,P)}}T&1&&u.children!==d.children&&f(E,d.children)}else!k&&w==null&&fe(E,d,N,L,g,m,y);((H=L.onVnodeUpdated)||D)&&Oe(()=>{H&&Qe(H,g,d,u),D&&Lt(d,u,g,"updated")},m)},Y=(u,d,g,m,y,I,k)=>{for(let E=0;E<d.length;E++){const T=u[E],w=d[E],D=T.el&&(T.type===Le||!jt(T,w)||T.shapeFlag&70)?h(T.el):g;S(T,w,D,null,m,y,I,k,!0)}},fe=(u,d,g,m,y,I,k)=>{if(g!==m){if(g!==ce)for(const E in g)!Es(E)&&!(E in m)&&i(u,E,g[E],null,k,d.children,y,I,P);for(const E in m){if(Es(E))continue;const T=m[E],w=g[E];T!==w&&E!=="value"&&i(u,E,w,T,k,d.children,y,I,P)}"value"in m&&i(u,"value",g.value,m.value)}},_e=(u,d,g,m,y,I,k,E,T)=>{const w=d.el=u?u.el:a(""),D=d.anchor=u?u.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(s(w,g,m),s(D,g,m),A(d.children,g,D,y,I,k,E,T)):N>0&&N&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,g,y,I,k,E),(d.key!=null||y&&d===y.subTree)&&rl(u,d,!0)):ne(u,d,g,D,y,I,k,E,T)},Ne=(u,d,g,m,y,I,k,E,T)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,g,m,k,T):ke(d,g,m,y,I,k,T):be(u,d,T)},ke=(u,d,g,m,y,I,k)=>{const E=u.component=gf(u,m,y);if(Js(u)&&(E.ctx.renderer=X),mf(E),E.asyncDep){if(y&&y.registerDep(E,he),!u.el){const T=E.subTree=te(je);R(null,T,d,g)}return}he(E,u,d,g,y,I,k)},be=(u,d,g)=>{const m=d.component=u.component;if(Tu(u,d,g))if(m.asyncDep&&!m.asyncResolved){ie(m,d,g);return}else m.next=d,vu(m.update),m.update();else d.el=u.el,m.vnode=d},he=(u,d,g,m,y,I,k)=>{const E=()=>{if(u.isMounted){let{next:D,bu:N,u:L,parent:H,vnode:G}=u,oe=D,se;Ut(u,!1),D?(D.el=G.el,ie(u,D,k)):D=G,N&&Is(N),(se=D.props&&D.props.onVnodeBeforeUpdate)&&Qe(se,H,D,G),Ut(u,!0);const pe=cr(u),Ke=u.subTree;u.subTree=pe,S(Ke,pe,h(Ke.el),C(Ke),u,y,I),D.el=pe.el,oe===null&&Su(u,pe.el),L&&Oe(L,y),(se=D.props&&D.props.onVnodeUpdated)&&Oe(()=>Qe(se,H,D,G),y)}else{let D;const{el:N,props:L}=d,{bm:H,m:G,parent:oe}=u,se=Fn(d);if(Ut(u,!1),H&&Is(H),!se&&(D=L&&L.onVnodeBeforeMount)&&Qe(D,oe,d),Ut(u,!0),N&&q){const pe=()=>{u.subTree=cr(u),q(N,u.subTree,u,y,null)};se?d.type.__asyncLoader().then(()=>!u.isUnmounted&&pe()):pe()}else{const pe=u.subTree=cr(u);S(null,pe,g,m,u,y,I),d.el=pe.el}if(G&&Oe(G,y),!se&&(D=L&&L.onVnodeMounted)){const pe=d;Oe(()=>Qe(D,oe,pe),y)}(d.shapeFlag&256||oe&&Fn(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Oe(u.a,y),u.isMounted=!0,d=g=m=null}},T=u.effect=new ri(E,()=>hi(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,Ut(u,!0),w()},ie=(u,d,g)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Qu(u,d.props,m,g),tf(u,d.children,g),Tn(),Yi(),Sn()},ne=(u,d,g,m,y,I,k,E,T=!1)=>{const w=u&&u.children,D=u?u.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:H}=d;if(L>0){if(L&128){Dt(w,N,g,m,y,I,k,E,T);return}else if(L&256){We(w,N,g,m,y,I,k,E,T);return}}H&8?(D&16&&P(w,y,I),N!==w&&f(g,N)):D&16?H&16?Dt(w,N,g,m,y,I,k,E,T):P(w,y,I,!0):(D&8&&f(g,""),H&16&&A(N,g,m,y,I,k,E,T))},We=(u,d,g,m,y,I,k,E,T)=>{u=u||an,d=d||an;const w=u.length,D=d.length,N=Math.min(w,D);let L;for(L=0;L<N;L++){const H=d[L]=T?vt(d[L]):Ze(d[L]);S(u[L],H,g,null,y,I,k,E,T)}w>D?P(u,y,I,!0,!1,N):A(d,g,m,y,I,k,E,T,N)},Dt=(u,d,g,m,y,I,k,E,T)=>{let w=0;const D=d.length;let N=u.length-1,L=D-1;for(;w<=N&&w<=L;){const H=u[w],G=d[w]=T?vt(d[w]):Ze(d[w]);if(jt(H,G))S(H,G,g,null,y,I,k,E,T);else break;w++}for(;w<=N&&w<=L;){const H=u[N],G=d[L]=T?vt(d[L]):Ze(d[L]);if(jt(H,G))S(H,G,g,null,y,I,k,E,T);else break;N--,L--}if(w>N){if(w<=L){const H=L+1,G=H<D?d[H].el:m;for(;w<=L;)S(null,d[w]=T?vt(d[w]):Ze(d[w]),g,G,y,I,k,E,T),w++}}else if(w>L)for(;w<=N;)Ae(u[w],y,I,!0),w++;else{const H=w,G=w,oe=new Map;for(w=G;w<=L;w++){const Me=d[w]=T?vt(d[w]):Ze(d[w]);Me.key!=null&&oe.set(Me.key,w)}let se,pe=0;const Ke=L-G+1;let nn=!1,Fi=0;const An=new Array(Ke);for(w=0;w<Ke;w++)An[w]=0;for(w=H;w<=N;w++){const Me=u[w];if(pe>=Ke){Ae(Me,y,I,!0);continue}let Xe;if(Me.key!=null)Xe=oe.get(Me.key);else for(se=G;se<=L;se++)if(An[se-G]===0&&jt(Me,d[se])){Xe=se;break}Xe===void 0?Ae(Me,y,I,!0):(An[Xe-G]=w+1,Xe>=Fi?Fi=Xe:nn=!0,S(Me,d[Xe],g,null,y,I,k,E,T),pe++)}const $i=nn?af(An):an;for(se=$i.length-1,w=Ke-1;w>=0;w--){const Me=G+w,Xe=d[Me],Bi=Me+1<D?d[Me+1].el:m;An[w]===0?S(null,Xe,g,Bi,y,I,k,E,T):nn&&(se<0||w!==$i[se]?ze(Xe,g,Bi,2):se--)}}},ze=(u,d,g,m,y=null)=>{const{el:I,type:k,transition:E,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,d,g,m);return}if(w&128){u.suspense.move(d,g,m);return}if(w&64){k.move(u,d,g,X);return}if(k===Le){s(I,d,g);for(let N=0;N<T.length;N++)ze(T[N],d,g,m);s(u.anchor,d,g);return}if(k===Ts){O(u,d,g);return}if(m!==2&&w&1&&E)if(m===0)E.beforeEnter(I),s(I,d,g),Oe(()=>E.enter(I),y);else{const{leave:N,delayLeave:L,afterLeave:H}=E,G=()=>s(I,d,g),oe=()=>{N(I,()=>{G(),H&&H()})};L?L(I,G,oe):oe()}else s(I,d,g)},Ae=(u,d,g,m=!1,y=!1)=>{const{type:I,props:k,ref:E,children:T,dynamicChildren:w,shapeFlag:D,patchFlag:N,dirs:L}=u;if(E!=null&&Lr(E,null,g,u,!0),D&256){d.ctx.deactivate(u);return}const H=D&1&&L,G=!Fn(u);let oe;if(G&&(oe=k&&k.onVnodeBeforeUnmount)&&Qe(oe,d,u),D&6)v(u.component,g,m);else{if(D&128){u.suspense.unmount(g,m);return}H&&Lt(u,null,d,"beforeUnmount"),D&64?u.type.remove(u,d,g,y,X,m):w&&(I!==Le||N>0&&N&64)?P(w,d,g,!1,!0):(I===Le&&N&384||!y&&D&16)&&P(T,d,g),m&&tn(u)}(G&&(oe=k&&k.onVnodeUnmounted)||H)&&Oe(()=>{oe&&Qe(oe,d,u),H&&Lt(u,null,d,"unmounted")},g)},tn=u=>{const{type:d,el:g,anchor:m,transition:y}=u;if(d===Le){hs(g,m);return}if(d===Ts){W(u);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:k,delayLeave:E}=y,T=()=>k(g,I);E?E(u.el,I,T):T()}else I()},hs=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},v=(u,d,g)=>{const{bum:m,scope:y,update:I,subTree:k,um:E}=u;m&&Is(m),y.stop(),I&&(I.active=!1,Ae(k,u,d,g)),E&&Oe(E,d),Oe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},P=(u,d,g,m=!1,y=!1,I=0)=>{for(let k=I;k<u.length;k++)Ae(u[k],d,g,m,y)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),M=(u,d,g)=>{u==null?d._vnode&&Ae(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,g),Yi(),Da(),d._vnode=u},X={p:S,um:Ae,m:ze,r:tn,mt:ke,mc:A,pc:ne,pbc:Y,n:C,o:t};let ue,q;return e&&([ue,q]=e(X)),{render:M,hydrate:ue,createApp:sf(M,ue)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rl(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vt(r[i]),a.el=o.el),n||rl(o,a)),a.type===Xs&&(a.el=o.el)}}function af(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lf=t=>t.__isTeleport,Le=Symbol(void 0),Xs=Symbol(void 0),je=Symbol(void 0),Ts=Symbol(void 0),Bn=[];let Ge=null;function ge(t=!1){Bn.push(Ge=t?null:[])}function cf(){Bn.pop(),Ge=Bn[Bn.length-1]||null}let Xn=1;function oo(t){Xn+=t}function il(t){return t.dynamicChildren=Xn>0?Ge||an:null,cf(),Xn>0&&Ge&&Ge.push(t),t}function Te(t,e,n,s,r,i){return il(b(t,e,n,s,r,i,!0))}function Qs(t,e,n,s,r){return il(te(t,e,n,s,r,!0))}function Ds(t){return t?t.__v_isVNode===!0:!1}function jt(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",ol=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>t!=null?me(t)||de(t)||V(t)?{i:Ie,r:t,k:e,f:!!n}:t:null;function b(t,e=null,n=null,s=0,r=null,i=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ol(e),ref:e&&Ss(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ie};return a?(bi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=me(n)?8:16),Xn>0&&!o&&Ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ge.push(l),l}const te=uf;function uf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ga)&&(t=je),Ds(t)){const a=Ot(t,e,!0);return n&&bi(a,n),Xn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(wf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:a,style:l}=e;a&&!me(a)&&(e.class=rs(a)),le(l)&&(Ca(l)&&!F(l)&&(l=Se({},l)),e.style=Qr(l))}const o=me(t)?1:Cu(t)?128:lf(t)?64:le(t)?4:V(t)?2:0;return b(t,e,n,s,r,o,i,!0)}function ff(t){return t?Ca(t)||Zs in t?Se({},t):t:null}function Ot(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?df(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ol(a),ref:e&&e.ref?n&&r?F(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ee(t=" ",e=0){return te(Xs,null,t,e)}function _i(t,e){const n=te(Ts,null,t);return n.staticCount=e,n}function kt(t="",e=!1){return e?(ge(),Qs(je,null,t)):te(je,null,t)}function Ze(t){return t==null||typeof t=="boolean"?te(je):F(t)?te(Le,null,t.slice()):typeof t=="object"?vt(t):te(Xs,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ot(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zs in e)?e._ctx=Ie:r===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),s&64?(n=16,e=[Ee(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=rs([e.class,s.class]));else if(r==="style")e.style=Qr([e.style,s.style]);else if(Vs(r)){const i=e[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Qe(t,e,n,s=null){He(t,e,7,[n,s])}const hf=sl();let pf=0;function gf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||hf,i={uid:pf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Za(s,r),emitsOptions:Ua(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Eu.bind(null,i),t.ce&&t.ce(i),i}let ye=null;const al=()=>ye||Ie,mn=t=>{ye=t,t.scope.on()},Gt=()=>{ye&&ye.scope.off(),ye=null};function ll(t){return t.vnode.shapeFlag&4}let Qn=!1;function mf(t,e=!1){Qn=e;const{props:n,children:s}=t.vnode,r=ll(t);Xu(t,n,r,e),ef(t,s);const i=r?_f(t,e):void 0;return Qn=!1,i}function _f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=gn(new Proxy(t.ctx,zu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?vf(t):null;mn(t),Tn();const i=Ct(s,t,0,[t.props,r]);if(Sn(),Gt(),fa(i)){if(i.then(Gt,Gt),e)return i.then(o=>{ao(t,o,e)}).catch(o=>{qs(o,t,0)});t.asyncDep=i}else ao(t,i,e)}else cl(t,e)}function ao(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Aa(e)),cl(t,n)}let lo;function cl(t,e,n){const s=t.type;if(!t.render){if(!e&&lo&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Se(Se({isCustomElement:i,delimiters:a},o),l);s.render=lo(r,c)}}t.render=s.render||Je}mn(t),Tn(),Ku(t),Sn(),Gt()}function bf(t){return new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}})}function vf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=bf(t))},slots:t.slots,emit:t.emit,expose:e}}function er(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Aa(gn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $n)return $n[n](t)},has(e,n){return n in e||n in $n}}))}function yf(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return V(t)&&"__vccOpts"in t}const Ue=(t,e)=>mu(t,e,Qn);function ul(t,e,n){const s=arguments.length;return s===2?le(e)&&!F(e)?Ds(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ds(n)&&(n=[n]),te(t,e,n))}const Ef=Symbol(""),If=()=>tt(Ef),xf="3.2.45",Tf="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,co=Vt&&Vt.createElement("template"),Sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Vt.createElementNS(Tf,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{co.innerHTML=s?`<svg>${t}</svg>`:t;const a=co.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function kf(t,e,n){const s=t.style,r=me(n);if(n&&!r){for(const i in n)Ur(s,i,n[i]);if(e&&!me(e))for(const i in e)n[i]==null&&Ur(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const uo=/\s*!important$/;function Ur(t,e,n){if(F(n))n.forEach(s=>Ur(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pf(t,e);uo.test(n)?t.setProperty(xn(s),n.replace(uo,""),"important"):t[s]=n}}const fo=["Webkit","Moz","ms"],dr={};function Pf(t,e){const n=dr[e];if(n)return n;let s=rt(e);if(s!=="filter"&&s in t)return dr[e]=s;s=zs(s);for(let r=0;r<fo.length;r++){const i=fo[r]+s;if(i in t)return dr[e]=i}return e}const ho="http://www.w3.org/1999/xlink";function Rf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ho,e.slice(6,e.length)):t.setAttributeNS(ho,e,n);else{const i=Tc(e);n==null||i&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Af(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ca(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ct(t,e,n,s){t.addEventListener(e,n,s)}function Of(t,e,n,s){t.removeEventListener(e,n,s)}function Nf(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Mf(e);if(s){const c=i[e]=Uf(s,r);ct(t,a,c,l)}else o&&(Of(t,a,o,l),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function Mf(t){let e;if(po.test(t)){e={};let s;for(;s=t.match(po);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let hr=0;const Df=Promise.resolve(),Lf=()=>hr||(Df.then(()=>hr=0),hr=Date.now());function Uf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;He(Ff(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function Ff(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const go=/^on[a-z]/,$f=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Cf(t,s,r):e==="style"?kf(t,n,s):Vs(e)?ei(e)||Nf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,s,r))?Af(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rf(t,e,s,r))};function Bf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&go.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||go.test(e)&&me(n)?!1:e in t}const Hf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ou.props;const Nt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Is(e,n):e};function jf(t){t.target.composing=!0}function mo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ut={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Nt(r);const i=s||r.props&&r.props.type==="number";ct(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qn(a)),t._assign(a)}),n&&ct(t,"change",()=>{t.value=t.value.trim()}),e||(ct(t,"compositionstart",jf),ct(t,"compositionend",mo),ct(t,"change",mo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Nt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&qn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vf={deep:!0,created(t,e,n){t._assign=Nt(n),ct(t,"change",()=>{const s=t._modelValue,r=_n(t),i=t.checked,o=t._assign;if(F(s)){const a=Zr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(In(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(fl(t,i))})},mounted:_o,beforeUpdate(t,e,n){t._assign=Nt(n),_o(t,e,n)}};function _o(t,{value:e,oldValue:n},s){t._modelValue=e,F(e)?t.checked=Zr(e,s.props.value)>-1:In(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Yt(e,fl(t,!0)))}const Wf={created(t,{value:e},n){t.checked=Yt(e,n.props.value),t._assign=Nt(n),ct(t,"change",()=>{t._assign(_n(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Nt(s),e!==n&&(t.checked=Yt(e,s.props.value))}},zf={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=In(e);ct(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qn(_n(o)):_n(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Nt(s)},mounted(t,{value:e}){bo(t,e)},beforeUpdate(t,e,n){t._assign=Nt(n)},updated(t,{value:e}){bo(t,e)}};function bo(t,e){const n=t.multiple;if(!(n&&!F(e)&&!In(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=_n(i);if(n)F(e)?i.selected=Zr(e,o)>-1:i.selected=e.has(o);else if(Yt(_n(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function _n(t){return"_value"in t?t._value:t.value}function fl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Fr={created(t,e,n){ys(t,e,n,null,"created")},mounted(t,e,n){ys(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){ys(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){ys(t,e,n,s,"updated")}};function Kf(t,e){switch(t){case"SELECT":return zf;case"TEXTAREA":return ut;default:switch(e){case"checkbox":return Vf;case"radio":return Wf;default:return ut}}}function ys(t,e,n,s,r){const o=Kf(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Wt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):On(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),On(t,!0),s.enter(t)):s.leave(t,()=>{On(t,!1)}):On(t,e))},beforeUnmount(t,{value:e}){On(t,e)}};function On(t,e){t.style.display=e?t._vod:"none"}const qf=Se({patchProp:$f},Sf);let vo;function Gf(){return vo||(vo=rf(qf))}const Jf=(...t)=>{const e=Gf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Yf(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Yf(t){return me(t)?document.querySelector(t):t}var Xf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let dl;const tr=t=>dl=t,hl=Symbol();function $r(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hn||(Hn={}));function Qf(){const t=ga(!0),e=t.run(()=>ui({}));let n=[],s=[];const r=gn({install(i){tr(r),r._a=i,i.provide(hl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Xf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const pl=()=>{};function yo(t,e,n,s=pl){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Dc()&&Lc(r),r}function sn(t,...e){t.slice().forEach(n=>{n(...e)})}function Br(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];$r(r)&&$r(s)&&t.hasOwnProperty(n)&&!de(s)&&!St(s)?t[n]=Br(r,s):t[n]=s}return t}const Zf=Symbol();function ed(t){return!$r(t)||!t.hasOwnProperty(Zf)}const{assign:yt}=Object;function td(t){return!!(de(t)&&t.effect)}function nd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const f=du(n.state.value[t]);return yt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=gn(Ue(()=>{tr(n);const _=n._s.get(t);return o[p].call(_,_)})),h),{}))}return l=gl(t,c,e,n,s,!0),l.$reset=function(){const h=r?r():{};this.$patch(p=>{yt(p,h)})},l}function gl(t,e,n={},s,r,i){let o;const a=yt({actions:{}},n),l={deep:!0};let c,f,h=gn([]),p=gn([]),_;const x=s.state.value[t];!i&&!x&&(s.state.value[t]={}),ui({});let S;function U(z){let A;c=f=!1,typeof z=="function"?(z(s.state.value[t]),A={type:Hn.patchFunction,storeId:t,events:_}):(Br(s.state.value[t],z),A={type:Hn.patchObject,payload:z,storeId:t,events:_});const J=S=Symbol();di().then(()=>{S===J&&(c=!0)}),f=!0,sn(h,A,s.state.value[t])}const R=pl;function $(){o.stop(),h=[],p=[],s._s.delete(t)}function O(z,A){return function(){tr(s);const J=Array.from(arguments),Y=[],fe=[];function _e(be){Y.push(be)}function Ne(be){fe.push(be)}sn(p,{args:J,name:z,store:K,after:_e,onError:Ne});let ke;try{ke=A.apply(this&&this.$id===t?this:K,J)}catch(be){throw sn(fe,be),be}return ke instanceof Promise?ke.then(be=>(sn(Y,be),be)).catch(be=>(sn(fe,be),Promise.reject(be))):(sn(Y,ke),ke)}}const W={_p:s,$id:t,$onAction:yo.bind(null,p),$patch:U,$reset:R,$subscribe(z,A={}){const J=yo(h,z,A.detached,()=>Y()),Y=o.run(()=>Un(()=>s.state.value[t],fe=>{(A.flush==="sync"?f:c)&&z({storeId:t,type:Hn.direct,events:_},fe)},yt({},l,A)));return J},$dispose:$},K=Cn(W);s._s.set(t,K);const re=s._e.run(()=>(o=ga(),o.run(()=>e())));for(const z in re){const A=re[z];if(de(A)&&!td(A)||St(A))i||(x&&ed(A)&&(de(A)?A.value=x[z]:Br(A,x[z])),s.state.value[t][z]=A);else if(typeof A=="function"){const J=O(z,A);re[z]=J,a.actions[z]=A}}return yt(K,re),yt(Z(K),re),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:z=>{U(A=>{yt(A,z)})}}),s._p.forEach(z=>{yt(K,o.run(()=>z({store:K,app:s._a,pinia:s,options:a})))}),x&&i&&n.hydrate&&n.hydrate(K.$state,x),c=!0,f=!0,K}function sd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=al();return a=a||c&&tt(hl,null),a&&tr(a),a=dl,a._s.has(s)||(i?gl(s,e,r,a):nd(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
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
 *//**
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
 */const ml=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},rd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),s.push(n[f],n[h],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ml(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const _=a<<4&240|c>>2;if(s.push(_),h!==64){const x=c<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},id=function(t){const e=ml(t);return _l.encodeByteArray(e,!0)},bl=function(t){return id(t).replace(/\./g,"")},vl=function(t){try{return _l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function od(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ad=()=>od().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vl(t[1]);return e&&JSON.parse(e)},vi=()=>{try{return ad()||ld()||cd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ud=t=>{var e,n;return(n=(e=vi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fd=()=>{var t;return(t=vi())===null||t===void 0?void 0:t.config},yl=t=>{var e;return(e=vi())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function pd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function md(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const vd="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=vd,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?yd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Mt(r,a,s)}}function yd(t,e){return t.replace(wd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wd=/\{\$([^}]+)}/g;function Ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wo(i)&&wo(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wo(t){return t!==null&&typeof t=="object"}/**
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
 */function as(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Dn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Ln(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Id(t,e){const n=new xd(t,e);return n.subscribe.bind(n)}class xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Td(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pr),r.error===void 0&&(r.error=pr),r.complete===void 0&&(r.complete=pr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Td(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pr(){}/**
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
 */function it(t){return t&&t._delegate?t._delegate:t}class bn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Bt="[DEFAULT]";/**
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
 */class Sd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kd(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(t){return t===Bt?void 0:t}function kd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Pd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Rd={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Ad=ae.INFO,Od={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Nd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Od[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=Ad,this._logHandler=Nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Md=(t,e)=>e.some(n=>t instanceof n);let Eo,Io;function Dd(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const El=new WeakMap,Hr=new WeakMap,Il=new WeakMap,gr=new WeakMap,yi=new WeakMap;function Ud(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&El.set(n,t)}).catch(()=>{}),yi.set(e,t),e}function Fd(t){if(Hr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hr.set(t,e)}let jr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Il.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $d(t){jr=t(jr)}function Bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mr(this),e,...n);return Il.set(s,e.sort?e.sort():[e]),Pt(s)}:Ld().includes(t)?function(...e){return t.apply(mr(this),e),Pt(El.get(this))}:function(...e){return Pt(t.apply(mr(this),e))}}function Hd(t){return typeof t=="function"?Bd(t):(t instanceof IDBTransaction&&Fd(t),Md(t,Dd())?new Proxy(t,jr):t)}function Pt(t){if(t instanceof IDBRequest)return Ud(t);if(gr.has(t))return gr.get(t);const e=Hd(t);return e!==t&&(gr.set(t,e),yi.set(e,t)),e}const mr=t=>yi.get(t);function jd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Vd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],_r=new Map;function xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_r.get(e))return _r.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Wd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Vd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return _r.set(e,i),i}$d(t=>({...t,get:(e,n,s)=>xo(e,n)||t.get(e,n,s),has:(e,n)=>!!xo(e,n)||t.has(e,n)}));/**
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
 */class zd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",To="0.9.3";/**
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
 */const Qt=new wl("@firebase/app"),qd="@firebase/app-compat",Gd="@firebase/analytics-compat",Jd="@firebase/analytics",Yd="@firebase/app-check-compat",Xd="@firebase/app-check",Qd="@firebase/auth",Zd="@firebase/auth-compat",eh="@firebase/database",th="@firebase/database-compat",nh="@firebase/functions",sh="@firebase/functions-compat",rh="@firebase/installations",ih="@firebase/installations-compat",oh="@firebase/messaging",ah="@firebase/messaging-compat",lh="@firebase/performance",ch="@firebase/performance-compat",uh="@firebase/remote-config",fh="@firebase/remote-config-compat",dh="@firebase/storage",hh="@firebase/storage-compat",ph="@firebase/firestore",gh="@firebase/firestore-compat",mh="firebase",_h="9.17.1";/**
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
 */const Wr="[DEFAULT]",bh={[Vr]:"fire-core",[qd]:"fire-core-compat",[Jd]:"fire-analytics",[Gd]:"fire-analytics-compat",[Xd]:"fire-app-check",[Yd]:"fire-app-check-compat",[Qd]:"fire-auth",[Zd]:"fire-auth-compat",[eh]:"fire-rtdb",[th]:"fire-rtdb-compat",[nh]:"fire-fn",[sh]:"fire-fn-compat",[rh]:"fire-iid",[ih]:"fire-iid-compat",[oh]:"fire-fcm",[ah]:"fire-fcm-compat",[lh]:"fire-perf",[ch]:"fire-perf-compat",[uh]:"fire-rc",[fh]:"fire-rc-compat",[dh]:"fire-gcs",[hh]:"fire-gcs-compat",[ph]:"fire-fst",[gh]:"fire-fst-compat","fire-js":"fire-js",[mh]:"fire-js-all"};/**
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
 */const Us=new Map,zr=new Map;function vh(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zn(t){const e=t.name;if(zr.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of Us.values())vh(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new os("app","Firebase",yh);/**
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
 */class wh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new bn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=_h;function Tl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=fd()),!n)throw Rt.create("no-options");const i=Us.get(r);if(i){if(Ls(n,i.options)&&Ls(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new Pd(r);for(const l of zr.values())o.addComponent(l);const a=new wh(n,s,o);return Us.set(r,a),a}function Eh(t=Wr){const e=Us.get(t);if(!e&&t===Wr)return Tl();if(!e)throw Rt.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=bh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Zn(new bn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ih="firebase-heartbeat-database",xh=1,es="firebase-heartbeat-store";let br=null;function Sl(){return br||(br=jd(Ih,xh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(es)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),br}async function Th(t){try{return(await Sl()).transaction(es).objectStore(es).get(Cl(t))}catch(e){if(e instanceof Mt)Qt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function So(t,e){try{const s=(await Sl()).transaction(es,"readwrite");return await s.objectStore(es).put(e,Cl(t)),s.done}catch(n){if(n instanceof Mt)Qt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function Cl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sh=1024,Ch=30*24*60*60*1e3;class kh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ch}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:n,unsentEntries:s}=Ph(this._heartbeatsCache.heartbeats),r=bl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Co(){return new Date().toISOString().substring(0,10)}function Ph(t,e=Sh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ko(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ko(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Th(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ko(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ah(t){Zn(new bn("platform-logger",e=>new zd(e),"PRIVATE")),Zn(new bn("heartbeat",e=>new kh(e),"PRIVATE")),fn(Vr,To,t),fn(Vr,To,"esm2017"),fn("fire-js","")}Ah("");function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function kl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=kl,Pl=new os("auth","Firebase",kl());/**
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
 */const Po=new wl("@firebase/auth");function Cs(t,...e){Po.logLevel<=ae.ERROR&&Po.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw Ei(t,...e)}function nt(t,...e){return Ei(t,...e)}function Rl(t,e,n){const s=Object.assign(Object.assign({},Oh()),{[e]:n});return new os("auth","Firebase",s).create(e,{appName:t.name})}function Nh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ve(t,"argument-error"),Rl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ei(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Pl.create(t,...e)}function B(t,e,...n){if(!t)throw Ei(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Cs(e),new Error(e)}function pt(t,e){t||ft(e)}/**
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
 */const Ro=new Map;function dt(t){pt(t instanceof Function,"Expected a class definition");let e=Ro.get(t);return e?(pt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ro.set(t,e),e)}/**
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
 */function Mh(t,e){const n=xl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ls(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Dh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lh(){return Ao()==="http:"||Ao()==="https:"}function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Uh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lh()||pd()||"connection"in navigator)?navigator.onLine:!0}function Fh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ls{constructor(e,n){this.shortDelay=e,this.longDelay=n,pt(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||gd()}get(){return Uh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ii(t,e){pt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Al{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $h={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Bh=new ls(3e4,6e4);function cs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,s,r={}){return Ol(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=as(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Al.fetch()(Nl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ol(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$h),e);try{const r=new Hh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ws(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ws(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rl(t,f,c);Ve(t,f)}}catch(r){if(r instanceof Mt)throw r;Ve(t,"network-request-failed")}}async function us(t,e,n,s,r={}){const i=await kn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Nl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ii(t.config,r):`${t.config.apiScheme}://${r}`}class Hh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(nt(this.auth,"network-request-failed")),Bh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=nt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function jh(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function Vh(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const n=it(t),s=await n.getIdToken(e),r=xi(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jn(vr(r.auth_time)),issuedAtTime:jn(vr(r.iat)),expirationTime:jn(vr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vr(t){return Number(t)*1e3}function xi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Cs("JWT malformed, contained fewer than 3 sections"),null;try{const r=vl(n);return r?JSON.parse(r):(Cs("Failed to decode base64 JWT payload"),null)}catch(r){return Cs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zh(t){const e=xi(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&Kh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class qh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ml{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vn(t,Vh(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yh(i.providerUserInfo):[],a=Jh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ml(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Gh(t){const e=it(t);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Yh(t){return t.map(e=>{var{providerId:n}=e,s=wi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Xh(t,e){const n=await Ol(t,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Nl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Xh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ts;return s&&(B(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(B(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
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
 */function _t(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ml(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wh(this,e)}reload(){return Gh(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vn(this,jh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:W,isAnonymous:K,providerData:re,stsTokenManager:z}=n;B(O&&z,e,"internal-error");const A=ts.fromJSON(this.name,z);B(typeof O=="string",e,"internal-error"),_t(h,e.name),_t(p,e.name),B(typeof W=="boolean",e,"internal-error"),B(typeof K=="boolean",e,"internal-error"),_t(_,e.name),_t(x,e.name),_t(S,e.name),_t(U,e.name),_t(R,e.name),_t($,e.name);const J=new Jt({uid:O,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:_,tenantId:S,stsTokenManager:A,createdAt:R,lastLoginAt:$});return re&&Array.isArray(re)&&(J.providerData=re.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new ts;r.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fs(i),i}}/**
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
 */class Dl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dl.type="NONE";const Oo=Dl;/**
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
 */function ks(t,e,n){return`firebase:${t}:${e}:${n}`}class dn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ks(this.userKey,r.apiKey,i),this.fullPersistenceKey=ks("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new dn(dt(Oo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||dt(Oo);const o=ks(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const h=Jt._fromJSON(e,f);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new dn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new dn(i,e,s))}}/**
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
 */function No(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ll(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bl(e))return"Blackberry";if(Hl(e))return"Webos";if(Ti(e))return"Safari";if((e.includes("chrome/")||Ul(e))&&!e.includes("edge/"))return"Chrome";if($l(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ll(t=Ce()){return/firefox\//i.test(t)}function Ti(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ul(t=Ce()){return/crios\//i.test(t)}function Fl(t=Ce()){return/iemobile/i.test(t)}function $l(t=Ce()){return/android/i.test(t)}function Bl(t=Ce()){return/blackberry/i.test(t)}function Hl(t=Ce()){return/webos/i.test(t)}function sr(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qh(t=Ce()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zh(){return md()&&document.documentMode===10}function jl(t=Ce()){return sr(t)||$l(t)||Hl(t)||Bl(t)||/windows phone/i.test(t)||Fl(t)}function ep(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Vl(t,e=[]){let n;switch(t){case"Browser":n=No(Ce());break;case"Worker":n=`${No(Ce())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class tp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class np{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mo(this),this.idTokenSubscription=new Mo(this),this.beforeStateQueue=new tp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await dn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?it(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dt(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await dn.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Pn(t){return it(t)}class Mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=Id(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sp(t,e,n){const s=Pn(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wl(e),{host:o,port:a}=rp(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ip()}function Wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rp(t){const e=Wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Do(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Do(o)}}}function Do(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ip(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function op(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ap(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",cs(t,e))}/**
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
 */async function lp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}async function cp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",cs(t,e))}/**
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
 */class ns extends Si{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ns(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ns(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ap(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lp(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return op(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hn(t,e){return us(t,"POST","/v1/accounts:signInWithIdp",cs(t,e))}/**
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
 */const up="http://localhost";class Zt extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hn(e,n)}buildRequest(){const e={requestUri:up,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=as(n)}return e}}/**
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
 */function fp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dp(t){const e=Dn(Ln(t)).link,n=e?Dn(Ln(e)).deep_link_id:null,s=Dn(Ln(t)).deep_link_id;return(s?Dn(Ln(s)).link:null)||s||n||e||t}class Ci{constructor(e){var n,s,r,i,o,a;const l=Dn(Ln(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,h=fp((r=l.mode)!==null&&r!==void 0?r:null);B(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dp(e);try{return new Ci(n)}catch{return null}}}/**
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
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return ns._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ci.parseLink(n);return B(s,"argument-error"),ns._fromEmailAndCode(e,s.code,s.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ki{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends ki{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Et extends fs{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
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
 */class Re extends fs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Re.credential(n,s)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
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
 */class It extends fs{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
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
 */class xt extends fs{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return xt.credential(n,s)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
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
 */async function hp(t,e){return us(t,"POST","/v1/accounts:signUp",cs(t,e))}/**
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
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Jt._fromIdTokenResponse(e,s,r),o=Lo(s);return new en({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lo(s);return new en({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class $s extends Mt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,$s.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new $s(e,n,s,r)}}function zl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$s._fromErrorAndOperation(t,i,e,s):i})}async function pp(t,e,n=!1){const s=await vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",s)}/**
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
 */async function gp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await vn(t,zl(s,r,e,t),n);B(i.idToken,s,"internal-error");const o=xi(i.idToken);B(o,s,"internal-error");const{sub:a}=o;return B(t.uid===a,s,"user-mismatch"),en._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
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
 */async function Kl(t,e,n=!1){const s="signIn",r=await zl(t,s,e),i=await en._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function mp(t,e){return Kl(Pn(t),e)}async function _p(t,e,n){const s=Pn(t),r=await hp(s,{returnSecureToken:!0,email:e,password:n}),i=await en._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function bp(t,e,n){return mp(it(t),Rn.credential(e,n))}/**
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
 */async function vp(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function yp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=it(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vn(s,vp(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function wp(t,e,n,s){return it(t).onIdTokenChanged(e,n,s)}function Ep(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function Ip(t,e,n,s){return it(t).onAuthStateChanged(e,n,s)}function gv(t){return it(t).signOut()}const Bs="__sak";/**
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
 */class ql{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function xp(){const t=Ce();return Ti(t)||sr(t)}const Tp=1e3,Sp=10;class Gl extends ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xp()&&ep(),this.fallbackToPolling=jl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Sp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Tp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const Cp=Gl;/**
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
 */class Jl extends ql{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jl.type="SESSION";const Yl=Jl;/**
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
 */function kp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await kp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
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
 */function Pi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Pi("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function st(){return window}function Rp(t){st().location.href=t}/**
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
 */function Xl(){return typeof st().WorkerGlobalScope<"u"&&typeof st().importScripts=="function"}async function Ap(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Op(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Np(){return Xl()?self:null}/**
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
 */const Ql="firebaseLocalStorageDb",Mp=1,Hs="firebaseLocalStorage",Zl="fbase_key";class ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ir(t,e){return t.transaction([Hs],e?"readwrite":"readonly").objectStore(Hs)}function Dp(){const t=indexedDB.deleteDatabase(Ql);return new ds(t).toPromise()}function qr(){const t=indexedDB.open(Ql,Mp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Hs,{keyPath:Zl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Hs)?e(s):(s.close(),await Dp(),e(await qr()))})})}async function Uo(t,e,n){const s=ir(t,!0).put({[Zl]:e,value:n});return new ds(s).toPromise()}async function Lp(t,e){const n=ir(t,!1).get(e),s=await new ds(n).toPromise();return s===void 0?null:s.value}function Fo(t,e){const n=ir(t,!0).delete(e);return new ds(n).toPromise()}const Up=800,Fp=3;class ec{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Fp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(Np()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Ap(),!this.activeServiceWorker)return;this.sender=new Pp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Op()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await Uo(e,Bs,"1"),await Fo(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Lp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ir(r,!1).getAll();return new ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Up)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ec.type="LOCAL";const $p=ec;/**
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
 */function Bp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Hp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=nt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Bp().appendChild(s)})}function jp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ls(3e4,6e4);/**
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
 */function tc(t,e){return e?dt(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ri extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Vp(t){return Kl(t.auth,new Ri(t),t.bypassAuthState)}function Wp(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gp(n,new Ri(t),t.bypassAuthState)}async function zp(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),pp(n,new Ri(t),t.bypassAuthState)}/**
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
 */class nc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vp;case"linkViaPopup":case"linkViaRedirect":return zp;case"reauthViaPopup":case"reauthViaRedirect":return Wp;default:Ve(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Kp=new ls(2e3,1e4);async function sc(t,e,n){const s=Pn(t);Nh(t,e,ki);const r=tc(s,n);return new Kt(s,"signInViaPopup",e,r).executeNotNull()}class Kt extends nc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Kp.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const qp="pendingRedirect",Ps=new Map;class Gp extends nc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const s=await Jp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Jp(t,e){const n=Qp(e),s=Xp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Yp(t,e){Ps.set(t._key(),e)}function Xp(t){return dt(t._redirectPersistence)}function Qp(t){return ks(qp,t.config.apiKey,t.name)}async function Zp(t,e,n=!1){const s=Pn(t),r=tc(s,e),o=await new Gp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const eg=10*60*1e3;class tg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ng(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(nt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eg&&this.cachedEventUids.clear(),this.cachedEventUids.has($o(e))}saveEventToCache(e){this.cachedEventUids.add($o(e)),this.lastProcessedEventTime=Date.now()}}function $o(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ng(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rc(t);default:return!1}}/**
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
 */async function sg(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
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
 */const rg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ig=/^https?/;async function og(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sg(t);for(const n of e)try{if(ag(n))return}catch{}Ve(t,"unauthorized-domain")}function ag(t){const e=Kr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!ig.test(n))return!1;if(rg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const lg=new ls(3e4,6e4);function Bo(){const t=st().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cg(t){return new Promise((e,n)=>{var s,r,i;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(nt(t,"network-request-failed"))},timeout:lg.get()})}if(!((r=(s=st().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=st().gapi)===null||i===void 0)&&i.load)o();else{const a=jp("iframefcb");return st()[a]=()=>{gapi.load?o():n(nt(t,"network-request-failed"))},Hp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function ug(t){return Rs=Rs||cg(t),Rs}/**
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
 */const fg=new ls(5e3,15e3),dg="__/auth/iframe",hg="emulator/auth/iframe",pg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mg(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ii(e,hg):`https://${t.config.authDomain}/${dg}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=gg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${as(s).slice(1)}`}async function _g(t){const e=await ug(t),n=st().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:mg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=nt(t,"network-request-failed"),a=st().setTimeout(()=>{i(o)},fg.get());function l(){st().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vg=500,yg=600,wg="_blank",Eg="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ig(t,e,n,s=vg,r=yg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bg),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Ce().toLowerCase();n&&(a=Ul(c)?wg:n),Ll(c)&&(e=e||Eg,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[_,x])=>`${p}${_}=${x},`,"");if(Qh(c)&&a!=="_self")return xg(e||"",a),new Ho(null);const h=window.open(e||"",a,f);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Ho(h)}function xg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Tg="__/auth/handler",Sg="emulator/auth/handler";function jo(t,e,n,s,r,i){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof ki){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Cg(t)}?${as(a).slice(1)}`}function Cg({config:t}){return t.emulator?Ii(t,Sg):`https://${t.authDomain}/${Tg}`}/**
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
 */const yr="webStorageSupport";class kg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yl,this._completeRedirectFn=Zp,this._overrideRedirectResult=Yp}async _openPopup(e,n,s,r){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=jo(e,n,s,Kr(),r);return Ig(e,o,Pi())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Rp(jo(e,n,s,Kr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(pt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await _g(e),s=new tg(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yr,{type:yr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[yr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=og(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jl()||Ti()||sr()}}const Pg=kg;var Vo="@firebase/auth",Wo="0.21.3";/**
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
 */class Rg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ag(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Og(t){Zn(new bn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{B(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),B(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vl(t)},f=new np(a,l,c);return Dh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Zn(new bn("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(s=>new Rg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Vo,Wo,Ag(t)),fn(Vo,Wo,"esm2017")}/**
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
 */const Ng=5*60,Mg=yl("authIdTokenMaxAge")||Ng;let zo=null;const Dg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Mg)return;const r=n==null?void 0:n.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function yn(t=Eh()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mh(t,{popupRedirectResolver:Pg,persistence:[$p,Cp,Yl]}),s=yl("authTokenSyncURL");if(s){const i=Dg(s);Ep(n,i,()=>i(n.currentUser)),wp(n,o=>i(o))}const r=ud("auth");return r&&sp(n,`http://${r}`),n}Og("Browser");const ve=sd("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",loggedIn:!1,uid:"",name:"",email:"",lang:"ru",langProp:{}}),actions:{async process(){let t=await fetch("/api/language",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:this.lang})});this.langProp=await t.json(),console.log("repeat")},checkStatus(){const t=yn();Ip(t,e=>{e&&(console.log("works"),this.loggedIn=!0,this.uid=e.uid,this.name=e.displayName,this.email=e.email,console.log(e))})}}});var Lg="firebase",Ug="9.17.1";/**
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
 */fn(Lg,Ug,"app");const Ai="/assets/Telegram-c178456d.svg",Oi="/assets/WhatsApp-64705ce5.svg",Ni="/assets/Instagram-d32ffc78.svg",ot=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Fg={props:{buttonName:String},data:()=>({contact:!1,store:ve()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},$g={class:"grid overflow-scroll [&_*]:font-roboto"},Bg={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1"},Hg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},jg=b("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Vg={class:"grid grid-cols-2"},Wg={class:"text-3xl mb-[5px] font-semibold font-roboto"},zg={class:"text-2xl font-roboto"},Kg={class:"text-2xl mb-[20px] font-roboto"},qg={class:"text-3xl mb-[5px] font-roboto font-semibold"},Gg=b("p",{class:"text-2xl mb-[20px] font-roboto"},"+996779454233",-1),Jg={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},Yg={class:"text-3xl font-roboto font-semibold"},Xg=_i('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+Ai+'" alt=""></a><p class="text-2xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+Oi+'" alt=""></a><p class="text-2xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+Ni+'" alt=""></a><p class="text-2xl font-roboto">crafthoney.kg</p></div>',3),Qg=b("div",null,[b("p",{class:"text-3xl mb-[5px] font-roboto font-semibold"},"E-mail:"),b("p",{class:"text-2xl font-roboto"},"crafthoneykg@gmail.com")],-1);function Zg(t,e,n,s,r,i){return ge(),Te("div",$g,[b("div",Bg,[b("span",Hg,j(t.store.langProp.contacts),1),jg,b("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},j(t.store.langProp.feedback),1)]),b("div",Vg,[b("div",null,[b("p",Wg,j(t.store.langProp.address),1),b("p",zg,"770033, "+j(t.store.langProp.kyrgyzstan),1),b("p",Kg,j(t.store.langProp.street),1)]),b("div",null,[b("p",qg,j(t.store.langProp.telephone),1),Gg]),b("div",Jg,[b("p",Yg,j(t.store.langProp.socialnetworks),1),Xg]),Qg])])}const ic=ot(Fg,[["render",Zg]]),em="/assets/Register_1-5c661edd.svg",oc="/assets/Enter_1-7f28cdb9.svg",tm={data(){return{store:ve(),lang:ve().lang}}},nm={class:""},sm={class:"flex flex-col justify-center [&>*]:px-[10px]"},rm=b("strong",null,"X",-1),im=[rm],om={key:0,class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},am=b("img",{class:"w-[24px] h-24[px] mr-[10px]",src:em,alt:""},null,-1),lm=b("img",{class:"w-[24px] h-[24px] mr-[10px]",src:oc,alt:""},null,-1),cm={key:1,class:"flex justify-center border-b-[1px] border-[#BCB9B9]"},um=b("img",{class:"w-[24px] h-[24px] mr-[10px]",src:oc,alt:""},null,-1),fm={class:"my-[20px] px-[10px]"},dm=_i('<div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a></div></div>',1),hm={class:"my-[10px]"},pm={class:"my-[10px]"},gm=b("a",{href:"https://www.instagram.com/crafthoney.kg",target:"_blank"},[b("img",{src:Ni,alt:""})],-1);function mm(t,e,n,s,r,i){const o=Xt("router-link");return ge(),Te("div",nm,[b("div",sm,[b("button",{onClick:e[0]||(e[0]=a=>t.$emit("changeBurger")),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right hover:text-amber-700"},im),te(o,{to:`/${r.lang}/Products`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ee(j(r.store.langProp.catalogue),1)]),_:1},8,["to"]),te(o,{to:`/${r.lang}/About`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ee(j(r.store.langProp.aboutus),1)]),_:1},8,["to"]),te(o,{to:`/${r.lang}/Blog`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ee(j(r.store.langProp.blog),1)]),_:1},8,["to"]),b("button",{onClick:e[1]||(e[1]=a=>(r.store.modal=!0,t.burgerMenu=!1,r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},j(r.store.langProp.contacts),1)]),r.store.loggedIn?kt("",!0):(ge(),Te("div",om,[b("button",{onClick:e[2]||(e[2]=a=>(r.store.bg="bg-bee",r.store.modal=!0,t.burgerMenu=!1,r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[am,Ee(j(r.store.langProp.registration),1)]),b("button",{onClick:e[3]||(e[3]=a=>(r.store.modal=!0,t.burgerMenu=!1,r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[lm,Ee(j(r.store.langProp.login),1)])])),r.store.loggedIn&&!t.$route.path.includes("Personal")?(ge(),Te("div",cm,[te(o,{to:`/${r.lang}/PersonalArea/${r.store.uid}`,class:"border-[2px] border-solid border-black rounded-[8px] my-4 w-[218px] h-[47px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},{default:Be(()=>[um,Ee(j(r.store.langProp.profile),1)]),_:1},8,["to"])])):kt("",!0),b("div",fm,[dm,b("p",hm,j(r.store.langProp.address+" 770033 "+r.store.langProp.kyrgyzstan+","),1),b("p",pm,j(r.store.langProp.street),1),gm])])}const _m=ot(tm,[["render",mm]]),bm="/assets/drawing-9a7198cf.svg",vm="/assets/CraftHoney-0d412893.svg",ym="/assets/menu-694c5a76.svg",ac="/assets/account_circle-229cba33.svg",wm="/assets/shopping_cart-809c2612.svg",Em={beforeRouteEnter(t,e){},data(){return{burgerMenu:!1,store:ve(),lang:ve().lang}},methods:{changeBurger(){this.burgerMenu=!1}},components:{Contacts:ic,Burger:_m},mounted(){console.log(this.$route)}},Im={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},xm={class:"grid grid-flow-col gap-[40px] items-center"},Tm=b("img",{class:"self-center w-[60px] inline",src:bm},null,-1),Sm=b("img",{class:"ml-[10px] self-center w-[120px] inline",src:vm},null,-1),Cm={key:0,class:"text-xl [&>a]:mr-[30px] max-[1200px]:hidden"},km={class:"grid min-[1201px]:hidden"},Pm={class:"grid grid-flow-col gap-[40px] items-center max-[1200px]:hidden"},Rm={key:0,class:"flex items-center"},Am=b("img",{class:"mr-[10px] w-[24px]",src:ac},null,-1),Om={key:1,class:"flex items-center"},Nm=b("img",{class:"mr-[10px] w-[24px]",src:ac},null,-1),Mm={class:""},Dm=b("img",{class:"w-[22px] max-[800px]:hidden",src:wm,alt:""},null,-1),Lm={class:"text-xl"},Um={class:"ml-[8px] h-[32px] w-[56px] bg-[#ffcc00] rounded-xl hover:cursor-pointer px-2 hover:text-amber-700 hover:bg-amber-200 underline-offset-4",name:"lang",id:""},Fm={selected:"",disabled:"",hidden:""},$m=_i('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Ni+'" alt=""></a></div>',1);function Bm(t,e,n,s,r,i){const o=Xt("router-link"),a=Xt("Burger");return ge(),Te("header",Im,[b("div",xm,[b("div",null,[te(o,{class:"flex max-w-fit",to:`/${r.lang}/Home`},{default:Be(()=>[Tm,Sm]),_:1},8,["to"])]),t.$route.path!=`/${r.lang}/Home`?(ge(),Te("div",Cm,[te(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.lang}/Products`},{default:Be(()=>{var l,c;return[Ee(j((c=(l=r.store)==null?void 0:l.langProp)==null?void 0:c.catalogue),1)]}),_:1},8,["to"]),te(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.lang}/About`},{default:Be(()=>[Ee(j(r.store.langProp.about),1)]),_:1},8,["to"]),te(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.lang}/Blog`},{default:Be(()=>[Ee(j(r.store.langProp.blog),1)]),_:1},8,["to"]),b("button",{class:"hover:text-amber-700 hover:underline underline-offset-4",onClick:e[0]||(e[0]=l=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},j(r.store.langProp.contacts),1)])):kt("",!0)]),b("div",km,[b("img",{onClick:e[1]||(e[1]=l=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:ym})]),b("div",Pm,[!r.store.loggedIn&&!t.$route.path.includes("Personal")?(ge(),Te("div",Rm,[Am,b("button",{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",onClick:e[2]||(e[2]=l=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},j(r.store.langProp.login),1)])):kt("",!0),r.store.loggedIn&&!t.$route.path.includes("Personal")?(ge(),Te("div",Om,[Nm,te(o,{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.lang}/PersonalArea/${r.store.uid}`},{default:Be(()=>[Ee(j(r.store.langProp.profile),1)]),_:1},8,["to"])])):kt("",!0),b("div",Mm,[te(o,{to:`/${r.store.lang}/Checkout`},{default:Be(()=>[Dm]),_:1},8,["to"])]),b("div",null,[b("p",Lm,[Ee(j(r.store.langProp.lang)+": ",1),b("select",Um,[b("option",Fm,j(r.store.lang.toUpperCase()),1),b("option",{onClick:e[3]||(e[3]=l=>(r.store.lang="ru",t.$router.push(`/ru/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"RU"),b("option",{onClick:e[4]||(e[4]=l=>(r.store.lang="en",t.$router.push(`/en/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"EN"),b("option",{onClick:e[5]||(e[5]=l=>(r.store.lang="kg",t.$router.push(`/kg/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"KG")])])]),$m]),b("div",{class:rs(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[te(a,{onChangeBurger:i.changeBurger},null,8,["onChangeBurger"])],2)])}const Hm=ot(Em,[["render",Bm]]),jm={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",messageValue:"",store:ve()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail="",this.messageValue=""},handleInput(){this.inputValuePhone=this.inputValuePhone.replace(/[^0-9+]/g,"")}}},Vm={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},Wm={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},zm=b("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Km={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},qm=["placeholder"],Gm={class:"grid grid-cols-2 gap-[20px]"},Jm=["placeholder"],Ym={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},Xm=["disabled"];function Qm(t,e,n,s,r,i){return ge(),Te("div",Vm,[b("div",Wm,[b("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},j(t.store.langProp.contacts),1),zm,b("span",Km,j(t.store.langProp.feedback),1)]),we(b("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.inputValueName=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:t.store.langProp.yourname},null,8,qm),[[ut,t.inputValueName]]),b("div",Gm,[we(b("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.inputValueMail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[ut,t.inputValueMail]]),we(b("input",{onInput:e[3]||(e[3]=(...o)=>i.handleInput&&i.handleInput(...o)),"onUpdate:modelValue":e[4]||(e[4]=o=>t.inputValuePhone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",placeholder:t.store.langProp.telephone},null,40,Jm),[[ut,t.inputValuePhone]])]),we(b("textarea",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.messageValue=o),class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,512),[[ut,t.messageValue]]),b("div",Ym,[b("button",{onClick:e[6]||(e[6]=()=>{}),disabled:t.inputValueName.length<=2||t.inputValueMail.length<=5||t.inputValuePhone.length<=7||t.messageValue.length<=10,class:"bg-[#EAAD02] text-white rounded-[5px] disabled:opacity-50"},j(t.store.langProp.send),9,Xm),b("button",{onClick:e[7]||(e[7]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},j(t.store.langProp.reset),1)])])}const lc=ot(jm,[["render",Qm]]),Zm="/assets/call-65c88a38.svg",e_={data(){return{store:ve()}},components:{Feedback:lc}},t_={class:"bg-white flex justify-center my-[1vh] w-full"},n_={class:"self-center"},s_=b("img",{class:"inline ml-2",src:Zm},null,-1);function r_(t,e,n,s,r,i){return ge(),Te("footer",t_,[b("div",n_,[b("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),s_])])}const i_=ot(e_,[["render",r_]]),o_="/assets/Googlelogo-9ca58fbf.svg",Mi="/assets/visibility_on-0c36d6bb.svg",Di="/assets/visibility_off-e6686e60.svg",a_={props:{buttonName:String},data(){return{email:"",password:"",store:ve(),showPassword:!1}},methods:{loginGoogle(){const t=yn(),e=new Re;sc(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;this.store.modal=!1,this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,n.customData.email,Re.credentialFromError(n)})},async login(){const t=yn();bp(t,this.email,this.password).then(e=>{const n=e.user;console.log(n),this.store.modal=!1,this.$router.push(`/${this.store.lang}/PersonalArea/${n.uid}`)}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword}}},l_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},c_={class:"grid auto-rows-min gap-[20px]"},u_={class:"text-[30px] flex justify-center"},f_={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},d_=b("span",{class:"mx-2"},"|",-1),h_=b("img",{class:"mr-[8px]",src:o_},null,-1),p_=["placeholder"],g_={class:"relative"},m_=["type","placeholder"],__={src:Mi,alt:""},b_={src:Di,alt:""},v_=["disabled"],y_={class:"text-center"};function w_(t,e,n,s,r,i){const o=Xt("router-link");return ge(),Te("div",l_,[b("div",c_,[b("div",u_,[b("span",f_,j(r.store.langProp.login),1),d_,b("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},j(r.store.langProp.registration),1)]),b("button",{onClick:e[1]||(e[1]=(...a)=>i.loginGoogle&&i.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[h_,Ee(j(r.store.langProp.loginwithgoogle),1)]),we(b("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp.enteremail},null,8,p_),[[ut,r.email]]),b("div",g_,[we(b("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.enterpassword},null,8,m_),[[Fr,r.password]]),b("button",{onClick:e[4]||(e[4]=(...a)=>i.eyechange&&i.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(b("img",__,null,512),[[Wt,r.showPassword]]),we(b("img",b_,null,512),[[Wt,!r.showPassword]])])]),te(o,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ee(j(r.store.langProp.forgotyourpassword),1)]),_:1}),b("button",{onClick:e[5]||(e[5]=(...a)=>i.login&&i.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.login),9,v_),b("p",y_,[Ee(j(r.store.langProp.donthaveaccount),1),b("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.createaccount),1)])])])}const E_=ot(a_,[["render",w_]]),I_="/assets/Googlelogo-9ca58fbf.svg",x_={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:ve()}},methods:{loginGoogle(){const t=yn(),e=new Re;sc(t,e).then(n=>{Re.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Re.credentialFromError(n)})},async register(){const t=yn();_p(t,this.email,this.password).then(e=>{e.user,this.store.comp="Login"}).then(()=>{yp(t.currentUser,{displayName:this.name}).then(()=>{}).catch(e=>{console.log(e)})}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},T_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},S_={class:"grid auto-rows-min gap-[20px]"},C_={class:"text-[30px] h-[45px] flex justify-center"},k_=b("span",{class:"mx-2"},"|",-1),P_={class:"bg-gray-300 rounded-[10px] px-2 text-black"},R_=b("img",{class:"mr-[8px]",src:I_},null,-1),A_=["placeholder"],O_=["placeholder"],N_={class:"relative"},M_=["type","placeholder"],D_={src:Mi,alt:""},L_={src:Di,alt:""},U_={class:"relative"},F_=["type","placeholder"],$_={src:Mi,alt:""},B_={src:Di,alt:""},H_={key:0,class:"text-red-500 font-roboto leading-[2px]"},j_=["disabled"],V_={class:"text-center"};function W_(t,e,n,s,r,i){return ge(),Te("div",T_,[b("div",S_,[b("div",C_,[b("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},j(r.store.langProp.login),1),k_,b("span",P_,j(r.store.langProp.registration),1)]),b("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[R_,Ee(" "+j(r.store.langProp.loginwithgoogle),1)]),we(b("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp.username},null,8,A_),[[ut,r.name]]),we(b("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp.enteremail},null,8,O_),[[ut,r.email]]),b("div",N_,[we(b("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.password},null,40,M_),[[Fr,r.password]]),b("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(b("img",D_,null,512),[[Wt,r.showPassword]]),we(b("img",L_,null,512),[[Wt,!r.showPassword]])])]),b("div",U_,[we(b("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.confirmthepassword},null,8,F_),[[Fr,r.password2]]),b("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(b("img",$_,null,512),[[Wt,r.showPassword]]),we(b("img",B_,null,512),[[Wt,!r.showPassword]])])]),r.password2!=r.password?(ge(),Te("div",H_,j(r.store.langProp.passwordmismatch),1)):kt("",!0),we(b("div",{class:"text-red-500 font-roboto leading-[2px]"},j(r.store.langProp.minimumnumberofsymbols)+" - "+j(r.MinLength),513),[[Wt,r.passwordMinLength&&r.password.length<=5]]),b("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.registration),9,j_),b("p",V_,[Ee(j(r.store.langProp.doyouhaveaccount),1),b("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.login),1)])])])}const z_=ot(x_,[["render",W_]]),K_={data(){return{store:ve()}},components:{Contacts:ic,Feedback:lc,Login:E_,Register:z_}},q_={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},G_={class:"p-2 text-right"},J_=b("strong",null,"X",-1),Y_=[J_];function X_(t,e,n,s,r,i){return r.store.modal?(ge(),Te("div",q_,[r.store.modal?(ge(),Te("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):kt("",!0),b("div",{class:rs([r.store.bg,"max-h-screen overflow-scroll bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[b("div",G_,[b("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},Y_)]),(ge(),Qs(Vu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):kt("",!0)}const Q_=ot(K_,[["render",X_]]),Z_={components:{Header:Hm,Footer:i_,LayoutModal:Q_}},eb={class:"h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]"};function tb(t,e,n,s,r,i){const o=Xt("LayoutModal"),a=Xt("Header");return ge(),Te(Le,null,[te(o),b("div",eb,[te(a),Wu(t.$slots,"default")])],64)}const nb=ot(Z_,[["render",tb]]),sb={};function rb(t,e){const n=Xt("RouterView");return ge(),Qs(n)}const ib=ot(sb,[["render",rb]]),ob="modulepreload",ab=function(t){return"/"+t},Ko={},Ft=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ab(i),i in Ko)return;Ko[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":ob,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const on=typeof window<"u";function lb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function wr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ye(r)?r.map(t):t(r)}return n}const Vn=()=>{},Ye=Array.isArray,cb=/\/$/,ub=t=>t.replace(cb,"");function Er(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=pb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function fb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function db(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&wn(e.matched[s],n.matched[r])&&cc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hb(t[n],e[n]))return!1;return!0}function hb(t,e){return Ye(t)?Go(t,e):Ye(e)?Go(e,t):t===e}function Go(t,e){return Ye(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ss;(function(t){t.pop="pop",t.push="push"})(ss||(ss={}));var Wn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Wn||(Wn={}));function gb(t){if(!t)if(on){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ub(t)}const mb=/^[^#]+#/;function _b(t,e){return t.replace(mb,"#")+e}function bb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function vb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=bb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jo(t,e){return(history.state?history.state.position-e:-1)+t}const Gr=new Map;function yb(t,e){Gr.set(t,e)}function wb(t){const e=Gr.get(t);return Gr.delete(t),e}let Eb=()=>location.protocol+"//"+location.host;function uc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),qo(l,"")}return qo(n,t)+s+r}function Ib(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const _=uc(t,location),x=n.value,S=e.value;let U=0;if(p){if(n.value=_,e.value=p,o&&o===x){o=null;return}U=S?p.position-S.position:0}else s(_);r.forEach(R=>{R(n.value,x,{delta:U,type:ss.pop,direction:U?U>0?Wn.forward:Wn.back:Wn.unknown})})};function l(){o=n.value}function c(p){r.push(p);const _=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:or()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:h}}function Yo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?or():null}}function xb(t){const{history:e,location:n}=window,s={value:uc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Eb()+t+l;try{e[f?"replaceState":"pushState"](c,"",p),r.value=c}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(l,c){const f=ee({},e.state,Yo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,f,!0),s.value=l}function a(l,c){const f=ee({},r.value,e.state,{forward:l,scroll:or()});i(f.current,f,!0);const h=ee({},Yo(s.value,l,null),{position:f.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Tb(t){t=gb(t);const e=xb(t),n=Ib(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:t,go:s,createHref:_b.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Sb(t){return typeof t=="string"||t&&typeof t=="object"}function fc(t){return typeof t=="string"||typeof t=="symbol"}const bt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dc=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function En(t,e){return ee(new Error,{type:t,[dc]:!0},e)}function at(t,e){return t instanceof Error&&dc in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Cb={sensitive:!1,strict:!1,start:!0,end:!0},kb=/[.+*?^${}()[\]/\\]/g;function Pb(t,e){const n=ee({},Cb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const f=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const p=c[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(kb,"\\$&"),_+=40;else if(p.type===1){const{value:x,repeatable:S,optional:U,regexp:R}=p;i.push({name:x,repeatable:S,optional:U});const $=R||Qo;if($!==Qo){_+=10;try{new RegExp(`(${$})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${$}): `+W.message)}}let O=S?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;h||(O=U&&c.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,_+=20,U&&(_+=-8),S&&(_+=-20),$===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const f=c.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",x=i[p-1];h[x.name]=_&&x.repeatable?_.split("/"):_}return h}function l(c){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:x,repeatable:S,optional:U}=_,R=x in c?c[x]:"";if(Ye(R)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const $=Ye(R)?R.join("/"):R;if(!$)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);f+=$}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Rb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ab(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Rb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Zo(s))return 1;if(Zo(r))return-1}return r.length-s.length}function Zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ob={type:0,value:""},Nb=/[a-zA-Z0-9_]/;function Mb(t){if(!t)return[[]];if(t==="/")return[[Ob]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${c}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",f="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:Nb.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Db(t,e,n){const s=Pb(Mb(t.path),n),r=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Lb(t,e){const n=[],s=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const _=!p,x=Ub(f);x.aliasOf=p&&p.record;const S=na(e,f),U=[x];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of O)U.push(ee({},x,{components:p?p.record.components:x.components,path:W,aliasOf:p?p.record:x}))}let R,$;for(const O of U){const{path:W}=O;if(h&&W[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(W&&re+W)}if(R=Db(O,h,S),p?p.alias.push(R):($=$||R,$!==R&&$.alias.push(R),_&&f.name&&!ta(R)&&o(f.name)),x.children){const K=x.children;for(let re=0;re<K.length;re++)i(K[re],R,p&&p.children[re])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return $?()=>{o($)}:Vn}function o(f){if(fc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){let h=0;for(;h<n.length&&Ab(f,n[h])>=0&&(f.record.path!==n[h].record.path||!hc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ta(f)&&s.set(f.record.name,f)}function c(f,h){let p,_={},x,S;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw En(1,{location:f});S=p.record.name,_=ee(ea(h.params,p.keys.filter($=>!$.optional).map($=>$.name)),f.params&&ea(f.params,p.keys.map($=>$.name))),x=p.stringify(_)}else if("path"in f)x=f.path,p=n.find($=>$.re.test(x)),p&&(_=p.parse(x),S=p.record.name);else{if(p=h.name?s.get(h.name):n.find($=>$.re.test(h.path)),!p)throw En(1,{location:f,currentLocation:h});S=p.record.name,_=ee({},h.params,f.params),x=p.stringify(_)}const U=[];let R=p;for(;R;)U.unshift(R.record),R=R.parent;return{name:S,path:x,params:_,matched:U,meta:$b(U)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ea(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ub(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Fb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Fb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function $b(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function na(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hc(t,e){return e.children.some(n=>n===t||hc(t,n))}const pc=/#/g,Bb=/&/g,Hb=/\//g,jb=/=/g,Vb=/\?/g,gc=/\+/g,Wb=/%5B/g,zb=/%5D/g,mc=/%5E/g,Kb=/%60/g,_c=/%7B/g,qb=/%7C/g,bc=/%7D/g,Gb=/%20/g;function Li(t){return encodeURI(""+t).replace(qb,"|").replace(Wb,"[").replace(zb,"]")}function Jb(t){return Li(t).replace(_c,"{").replace(bc,"}").replace(mc,"^")}function Jr(t){return Li(t).replace(gc,"%2B").replace(Gb,"+").replace(pc,"%23").replace(Bb,"%26").replace(Kb,"`").replace(_c,"{").replace(bc,"}").replace(mc,"^")}function Yb(t){return Jr(t).replace(jb,"%3D")}function Xb(t){return Li(t).replace(pc,"%23").replace(Vb,"%3F")}function Qb(t){return t==null?"":Xb(t).replace(Hb,"%2F")}function js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gc," "),o=i.indexOf("="),a=js(o<0?i:i.slice(0,o)),l=o<0?null:js(i.slice(o+1));if(a in e){let c=e[a];Ye(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sa(t){let e="";for(let n in t){const s=t[n];if(n=Yb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(s)?s.map(i=>i&&Jr(i)):[s&&Jr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ev(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ye(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const tv=Symbol(""),ra=Symbol(""),Ui=Symbol(""),vc=Symbol(""),Yr=Symbol("");function Nn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function wt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(En(4,{from:n,to:e})):h instanceof Error?a(h):Sb(h)?a(En(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let f=Promise.resolve(c);t.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function Ir(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(nv(a)){const c=(a.__vccOpts||a)[e];c&&r.push(wt(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=lb(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&wt(p,n,s,i,o)()}))}}return r}function nv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=tt(Ui),n=tt(vc),s=Ue(()=>e.resolve(cn(t.to))),r=Ue(()=>{const{matched:l}=s.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(wn.bind(null,f));if(p>-1)return p;const _=oa(l[c-2]);return c>1&&oa(f)===_&&h[h.length-1].path!==_?h.findIndex(wn.bind(null,l[c-2])):p}),i=Ue(()=>r.value>-1&&ov(n.params,s.value.params)),o=Ue(()=>r.value>-1&&r.value===n.matched.length-1&&cc(n.params,s.value.params));function a(l={}){return iv(l)?e[cn(t.replace)?"replace":"push"](cn(t.to)).catch(Vn):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const sv=Va({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=Cn(ia(t)),{options:s}=tt(Ui),r=Ue(()=>({[aa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),rv=sv;function iv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ov(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ye(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,av=Va({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=tt(Yr),r=Ue(()=>t.route||s.value),i=tt(ra,0),o=Ue(()=>{let c=cn(i);const{matched:f}=r.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),a=Ue(()=>r.value.matched[o.value]);xs(ra,Ue(()=>o.value+1)),xs(tv,a),xs(Yr,r);const l=ui();return Un(()=>[l.value,a.value,t.name],([c,f,h],[p,_,x])=>{f&&(f.instances[h]=c,_&&_!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),c&&f&&(!_||!wn(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return la(n.default,{Component:p,route:c});const _=h.props[f],x=_?_===!0?c.params:typeof _=="function"?_(c):_:null,U=ul(p,ee({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return la(n.default,{Component:U,route:c})||U}}});function la(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const lv=av;function cv(t){const e=Lb(t.routes,t),n=t.parseQuery||Zb,s=t.stringifyQuery||sa,r=t.history,i=Nn(),o=Nn(),a=Nn(),l=cu(bt);let c=bt;on&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wr.bind(null,v=>""+v),h=wr.bind(null,Qb),p=wr.bind(null,js);function _(v,P){let C,M;return fc(v)?(C=e.getRecordMatcher(v),M=P):M=v,e.addRoute(M,C)}function x(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function S(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function R(v,P){if(P=ee({},P||l.value),typeof v=="string"){const u=Er(n,v,P.path),d=e.resolve({path:u.path},P),g=r.createHref(u.fullPath);return ee(u,d,{params:p(d.params),hash:js(u.hash),redirectedFrom:void 0,href:g})}let C;if("path"in v)C=ee({},v,{path:Er(n,v.path,P.path).path});else{const u=ee({},v.params);for(const d in u)u[d]==null&&delete u[d];C=ee({},v,{params:h(v.params)}),P.params=h(P.params)}const M=e.resolve(C,P),X=v.hash||"";M.params=f(p(M.params));const ue=fb(s,ee({},v,{hash:Jb(X),path:M.path})),q=r.createHref(ue);return ee({fullPath:ue,hash:X,query:s===sa?ev(v.query):v.query||{}},M,{redirectedFrom:void 0,href:q})}function $(v){return typeof v=="string"?Er(n,v,l.value.path):ee({},v)}function O(v,P){if(c!==v)return En(8,{from:P,to:v})}function W(v){return z(v)}function K(v){return W(ee($(v),{replace:!0}))}function re(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:C}=P;let M=typeof C=="function"?C(v):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=$(M):{path:M},M.params={}),ee({query:v.query,hash:v.hash,params:"path"in M?{}:v.params},M)}}function z(v,P){const C=c=R(v),M=l.value,X=v.state,ue=v.force,q=v.replace===!0,u=re(C);if(u)return z(ee($(u),{state:typeof u=="object"?ee({},X,u.state):X,force:ue,replace:q}),P||C);const d=C;d.redirectedFrom=P;let g;return!ue&&db(s,M,C)&&(g=En(16,{to:d,from:M}),Dt(M,M,!0,!1)),(g?Promise.resolve(g):J(d,M)).catch(m=>at(m)?at(m,2)?m:We(m):ie(m,d,M)).then(m=>{if(m){if(at(m,2))return z(ee({replace:q},$(m.to),{state:typeof m.to=="object"?ee({},X,m.to.state):X,force:ue}),P||d)}else m=fe(d,M,!0,q,X);return Y(d,M,m),m})}function A(v,P){const C=O(v,P);return C?Promise.reject(C):Promise.resolve()}function J(v,P){let C;const[M,X,ue]=uv(v,P);C=Ir(M.reverse(),"beforeRouteLeave",v,P);for(const u of M)u.leaveGuards.forEach(d=>{C.push(wt(d,v,P))});const q=A.bind(null,v,P);return C.push(q),rn(C).then(()=>{C=[];for(const u of i.list())C.push(wt(u,v,P));return C.push(q),rn(C)}).then(()=>{C=Ir(X,"beforeRouteUpdate",v,P);for(const u of X)u.updateGuards.forEach(d=>{C.push(wt(d,v,P))});return C.push(q),rn(C)}).then(()=>{C=[];for(const u of v.matched)if(u.beforeEnter&&!P.matched.includes(u))if(Ye(u.beforeEnter))for(const d of u.beforeEnter)C.push(wt(d,v,P));else C.push(wt(u.beforeEnter,v,P));return C.push(q),rn(C)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),C=Ir(ue,"beforeRouteEnter",v,P),C.push(q),rn(C))).then(()=>{C=[];for(const u of o.list())C.push(wt(u,v,P));return C.push(q),rn(C)}).catch(u=>at(u,8)?u:Promise.reject(u))}function Y(v,P,C){for(const M of a.list())M(v,P,C)}function fe(v,P,C,M,X){const ue=O(v,P);if(ue)return ue;const q=P===bt,u=on?history.state:{};C&&(M||q?r.replace(v.fullPath,ee({scroll:q&&u&&u.scroll},X)):r.push(v.fullPath,X)),l.value=v,Dt(v,P,C,q),We()}let _e;function Ne(){_e||(_e=r.listen((v,P,C)=>{if(!hs.listening)return;const M=R(v),X=re(M);if(X){z(ee(X,{replace:!0}),M).catch(Vn);return}c=M;const ue=l.value;on&&yb(Jo(ue.fullPath,C.delta),or()),J(M,ue).catch(q=>at(q,12)?q:at(q,2)?(z(q.to,M).then(u=>{at(u,20)&&!C.delta&&C.type===ss.pop&&r.go(-1,!1)}).catch(Vn),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ie(q,M,ue))).then(q=>{q=q||fe(M,ue,!1),q&&(C.delta&&!at(q,8)?r.go(-C.delta,!1):C.type===ss.pop&&at(q,20)&&r.go(-1,!1)),Y(M,ue,q)}).catch(Vn)}))}let ke=Nn(),be=Nn(),he;function ie(v,P,C){We(v);const M=be.list();return M.length?M.forEach(X=>X(v,P,C)):console.error(v),Promise.reject(v)}function ne(){return he&&l.value!==bt?Promise.resolve():new Promise((v,P)=>{ke.add([v,P])})}function We(v){return he||(he=!v,Ne(),ke.list().forEach(([P,C])=>v?C(v):P()),ke.reset()),v}function Dt(v,P,C,M){const{scrollBehavior:X}=t;if(!on||!X)return Promise.resolve();const ue=!C&&wb(Jo(v.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return di().then(()=>X(v,P,ue)).then(q=>q&&vb(q)).catch(q=>ie(q,v,P))}const ze=v=>r.go(v);let Ae;const tn=new Set,hs={currentRoute:l,listening:!0,addRoute:_,removeRoute:x,hasRoute:U,getRoutes:S,resolve:R,options:t,push:W,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:be.add,isReady:ne,install(v){const P=this;v.component("RouterLink",rv),v.component("RouterView",lv),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>cn(l)}),on&&!Ae&&l.value===bt&&(Ae=!0,W(r.location).catch(X=>{}));const C={};for(const X in bt)C[X]=Ue(()=>l.value[X]);v.provide(Ui,P),v.provide(vc,Cn(C)),v.provide(Yr,l);const M=v.unmount;tn.add(v),v.unmount=function(){tn.delete(v),tn.size<1&&(c=bt,_e&&_e(),_e=null,l.value=bt,Ae=!1,he=!1),M()}}};return hs}function rn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uv(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>wn(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>wn(c,l))||r.push(l))}return[n,s,r]}const xr=[{path:"Home",alias:"Home",component:()=>Ft(()=>import("./Home-f73e272b.js"),[])},{path:"About",alias:"About",component:()=>Ft(()=>import("./About-dd2a6bba.js"),[])},{path:"Products",alias:"Products",component:()=>Ft(()=>import("./Products-f62d59cd.js"),[])},{path:"Personal/:id",alias:"Personal/:id",component:()=>Ft(()=>import("./Personal-dad6e6c2.js"),[])},{path:"PersonalArea/:id",alias:"PersonalArea/:id",component:()=>Ft(()=>import("./PersonalArea-3f7b9377.js"),[])},{path:"Blog",alias:"Blog",component:()=>Ft(()=>import("./Blog-91ed577e.js"),[])},{path:"Checkout",alias:"Checkout",component:()=>Ft(()=>import("./Checkout-567b6df6.js"),[])}],fv=cv({history:Tb("/"),routes:[{path:"/",name:"root",redirect:t=>ve().lang},{path:"/ru",name:"ru",redirect:t=>"ru/Home",beforeEnter:async(t,e)=>{ve().lang="ru",ve().process()},children:xr},{path:"/en",name:"en",redirect:t=>"en/Home",beforeEnter:t=>{ve().lang="en",ve().process()},children:xr},{path:"/kg",name:"kg",redirect:t=>"kg/Home",beforeEnter:t=>{ve().lang="kg",ve().process()},children:xr}],strict:!0});const ar=Jf(ib),dv=Qf();new Re;const hv={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};ar.component("Layout",nb);ar.use(dv);ar.use(fv);Tl(hv);ve().checkStatus();yn();ar.mount("#app");export{Le as F,nb as L,ot as _,te as a,b,Te as c,Ee as d,Qs as e,pv as f,yn as g,Ip as h,Qr as n,ge as o,Xt as r,gv as s,j as t,ve as u,Be as w};
