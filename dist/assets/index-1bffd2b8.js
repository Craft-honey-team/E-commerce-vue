(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Qr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?Tc(s):Qr(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(_e(t))return t;if(le(t))return t}}const Ec=/;(?![^(]*\))/g,Ic=/:([^]+)/,xc=/\/\*.*?\*\//gs;function Tc(t){const e={};return t.replace(xc,"").split(Ec).forEach(n=>{if(n){const s=n.split(Ic);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gn(t){let e="";if(_e(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=gn(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sc=Xr(kc);function ua(t){return!!t||t===""}function Cc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Yt(t[s],e[s]);return n}function Yt(t,e){if(t===e)return!0;let n=Hi(t),s=Hi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qn(t),s=qn(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?Cc(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Yt(t[o],e[o]))return!1}}return String(t)===String(e)}function Zr(t,e){return t.findIndex(n=>Yt(n,e))}const j=t=>_e(t)?t:t==null?"":F(t)||le(t)&&(t.toString===ha||!V(t.toString))?JSON.stringify(t,fa,2):String(t),fa=(t,e)=>e&&e.__v_isRef?fa(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Tn(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!F(e)&&!pa(e)?String(e):e,ue={},ln=[],Je=()=>{},Pc=()=>!1,Rc=/^on[^a-z]/,Vs=t=>Rc.test(t),ei=t=>t.startsWith("onUpdate:"),ke=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ac=Object.prototype.hasOwnProperty,Q=(t,e)=>Ac.call(t,e),F=Array.isArray,cn=t=>os(t)==="[object Map]",Tn=t=>os(t)==="[object Set]",Hi=t=>os(t)==="[object Date]",V=t=>typeof t=="function",_e=t=>typeof t=="string",qn=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",da=t=>le(t)&&V(t.then)&&V(t.catch),ha=Object.prototype.toString,os=t=>ha.call(t),Oc=t=>os(t).slice(8,-1),pa=t=>os(t)==="[object Object]",ni=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Nc=/-(\w)/g,ot=Ws(t=>t.replace(Nc,(e,n)=>n?n.toUpperCase():"")),Dc=/\B([A-Z])/g,kn=Ws(t=>t.replace(Dc,"-$1").toLowerCase()),zs=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),lr=Ws(t=>t?`on${zs(t)}`:""),Gn=(t,e)=>!Object.is(t,e),Is=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Jn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vi;const Mc=()=>Vi||(Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class ga{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ma(t){return new ga(t)}function Lc(t,e=Me){e&&e.active&&e.effects.push(t)}function Uc(){return Me}function $c(t){Me&&Me.cleanups.push(t)}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_a=t=>(t.w&At)>0,ba=t=>(t.n&At)>0,Fc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},Bc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];_a(r)&&!ba(r)?r.delete(t):e[n++]=r,r.w&=~At,r.n&=~At}e.length=n}},Tr=new WeakMap;let Ln=0,At=1;const kr=30;let qe;const qt=Symbol(""),Sr=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lc(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=kt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,kt=!0,At=1<<++Ln,Ln<=kr?Fc(this):Wi(this),this.fn()}finally{Ln<=kr&&Bc(this),At=1<<--Ln,qe=this.parent,kt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(Wi(this),this.onStop&&this.onStop(),this.active=!1)}}function Wi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let kt=!0;const va=[];function Sn(){va.push(kt),kt=!1}function Cn(){const t=va.pop();kt=t===void 0?!0:t}function Fe(t,e,n){if(kt&&qe){let s=Tr.get(t);s||Tr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),ya(r)}}function ya(t,e){let n=!1;Ln<=kr?ba(t)||(t.n|=At,n=!_a(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function pt(t,e,n,s,r,i){const o=Tr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const l=Jn(s);o.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(qt)),cn(t)&&a.push(o.get(Sr)));break;case"delete":F(t)||(a.push(o.get(qt)),cn(t)&&a.push(o.get(Sr)));break;case"set":cn(t)&&a.push(o.get(qt));break}if(a.length===1)a[0]&&Cr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Cr(si(l))}}function Cr(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&zi(s);for(const s of n)s.computed||zi(s)}function zi(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const jc=Xr("__proto__,__v_isRef,__isVue"),wa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn)),Hc=ii(),Vc=ii(!1,!0),Wc=ii(!0),Ki=zc();function zc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)Fe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sn();const s=Z(this)[e].apply(this,n);return Cn(),s}}),t}function ii(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?au:ka:e?Ta:xa).get(s))return s;const o=F(s);if(!t&&o&&Q(Ki,r))return Reflect.get(Ki,r,i);const a=Reflect.get(s,r,i);return(qn(r)?wa.has(r):jc(r))||(t||Fe(s,"get",r),e)?a:pe(a)?o&&ni(r)?a:a.value:le(a)?t?Sa(a):Pn(a):a}}const Kc=Ea(),qc=Ea(!0);function Ea(t=!1){return function(n,s,r,i){let o=n[s];if(mn(o)&&pe(o)&&!pe(r))return!1;if(!t&&(!Os(r)&&!mn(r)&&(o=Z(o),r=Z(r)),!F(n)&&pe(o)&&!pe(r)))return o.value=r,!0;const a=F(n)&&ni(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?Gn(r,o)&&pt(n,"set",s,r):pt(n,"add",s,r)),l}}function Gc(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pt(t,"delete",e,void 0),s}function Jc(t,e){const n=Reflect.has(t,e);return(!qn(e)||!wa.has(e))&&Fe(t,"has",e),n}function Yc(t){return Fe(t,"iterate",F(t)?"length":qt),Reflect.ownKeys(t)}const Ia={get:Hc,set:Kc,deleteProperty:Gc,has:Jc,ownKeys:Yc},Xc={get:Wc,set(t,e){return!0},deleteProperty(t,e){return!0}},Qc=ke({},Ia,{get:Vc,set:qc}),oi=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&Fe(r,"get",e),Fe(r,"get",i));const{has:o}=Ks(r),a=s?oi:n?ci:Yn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&Fe(s,"has",t),Fe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ms(t,e=!1){return t=t.__v_raw,!e&&Fe(Z(t),"iterate",qt),Reflect.get(t,"size",t)}function qi(t){t=Z(t);const e=Z(this);return Ks(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function Gi(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Ks(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Gn(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Ji(t){const e=Z(this),{has:n,get:s}=Ks(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&pt(e,"delete",t,void 0),i}function Yi(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function _s(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=e?oi:t?ci:Yn;return!t&&Fe(a,"iterate",qt),o.forEach((c,f)=>s.call(r,l(c),l(f),i))}}function bs(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=cn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),f=n?oi:e?ci:Yn;return!e&&Fe(i,"iterate",l?Sr:qt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Zc(){const t={get(i){return ps(this,i)},get size(){return ms(this)},has:gs,add:qi,set:Gi,delete:Ji,clear:Yi,forEach:_s(!1,!1)},e={get(i){return ps(this,i,!1,!0)},get size(){return ms(this)},has:gs,add:qi,set:Gi,delete:Ji,clear:Yi,forEach:_s(!1,!0)},n={get(i){return ps(this,i,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:_s(!0,!1)},s={get(i){return ps(this,i,!0,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bs(i,!1,!1),n[i]=bs(i,!0,!1),e[i]=bs(i,!1,!0),s[i]=bs(i,!0,!0)}),[t,n,e,s]}const[eu,tu,nu,su]=Zc();function ai(t,e){const n=e?t?su:nu:t?tu:eu;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const ru={get:ai(!1,!1)},iu={get:ai(!1,!0)},ou={get:ai(!0,!1)},xa=new WeakMap,Ta=new WeakMap,ka=new WeakMap,au=new WeakMap;function lu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cu(t){return t.__v_skip||!Object.isExtensible(t)?0:lu(Oc(t))}function Pn(t){return mn(t)?t:li(t,!1,Ia,ru,xa)}function uu(t){return li(t,!1,Qc,iu,Ta)}function Sa(t){return li(t,!0,Xc,ou,ka)}function li(t,e,n,s,r){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=cu(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function St(t){return mn(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function mn(t){return!!(t&&t.__v_isReadonly)}function Os(t){return!!(t&&t.__v_isShallow)}function Ca(t){return St(t)||mn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function _n(t){return As(t,"__v_skip",!0),t}const Yn=t=>le(t)?Pn(t):t,ci=t=>le(t)?Sa(t):t;function Pa(t){kt&&qe&&(t=Z(t),ya(t.dep||(t.dep=si())))}function Ra(t,e){t=Z(t),t.dep&&Cr(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Aa(t,!1)}function fu(t){return Aa(t,!0)}function Aa(t,e){return pe(t)?t:new du(t,e)}class du{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Yn(e)}get value(){return Pa(this),this._value}set value(e){const n=this.__v_isShallow||Os(e)||mn(e);e=n?e:Z(e),Gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Yn(e),Ra(this))}}function un(t){return pe(t)?t.value:t}const hu={get:(t,e,n)=>un(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pe(r)&&!pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Oa(t){return St(t)?t:new Proxy(t,hu)}function pu(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=mu(t,n);return e}class gu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function mu(t,e,n){const s=t[e];return pe(s)?s:new gu(t,e,n)}var Na;class _u{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Na]=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,Ra(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return Pa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Na="__v_isReadonly";function bu(t,e,n=!1){let s,r;const i=V(t);return i?(s=t,r=Je):(s=t.get,r=t.set),new _u(s,r,i||!r,n)}function Ct(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){qs(i,e,n)}return r}function je(t,e,n,s){if(V(t)){const i=Ct(t,e,n,s);return i&&da(i)&&i.catch(o=>{qs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(je(t[i],e,n,s));return r}function qs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ct(l,null,10,[t,o,a]);return}}vu(t,n,r,s)}function vu(t,e,n,s=!0){console.error(t)}let Xn=!1,Pr=!1;const Te=[];let tt=0;const fn=[];let ct=null,jt=0;const Da=Promise.resolve();let fi=null;function di(t){const e=fi||Da;return t?e.then(this?t.bind(this):t):e}function yu(t){let e=tt+1,n=Te.length;for(;e<n;){const s=e+n>>>1;Qn(Te[s])<t?e=s+1:n=s}return e}function hi(t){(!Te.length||!Te.includes(t,Xn&&t.allowRecurse?tt+1:tt))&&(t.id==null?Te.push(t):Te.splice(yu(t.id),0,t),Ma())}function Ma(){!Xn&&!Pr&&(Pr=!0,fi=Da.then(Ua))}function wu(t){const e=Te.indexOf(t);e>tt&&Te.splice(e,1)}function Eu(t){F(t)?fn.push(...t):(!ct||!ct.includes(t,t.allowRecurse?jt+1:jt))&&fn.push(t),Ma()}function Xi(t,e=Xn?tt+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function La(t){if(fn.length){const e=[...new Set(fn)];if(fn.length=0,ct){ct.push(...e);return}for(ct=e,ct.sort((n,s)=>Qn(n)-Qn(s)),jt=0;jt<ct.length;jt++)ct[jt]();ct=null,jt=0}}const Qn=t=>t.id==null?1/0:t.id,Iu=(t,e)=>{const n=Qn(t)-Qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ua(t){Pr=!1,Xn=!0,Te.sort(Iu);const e=Je;try{for(tt=0;tt<Te.length;tt++){const n=Te[tt];n&&n.active!==!1&&Ct(n,null,14)}}finally{tt=0,Te.length=0,La(),Xn=!1,fi=null,(Te.length||fn.length)&&Ua()}}function xu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||ue;p&&(r=n.map(b=>_e(b)?b.trim():b)),h&&(r=n.map(Jn))}let a,l=s[a=lr(e)]||s[a=lr(ot(e))];!l&&i&&(l=s[a=lr(kn(e))]),l&&je(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(c,t,6,r)}}function $a(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const f=$a(c,e,!0);f&&(a=!0,ke(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(le(t)&&s.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):ke(o,i),le(t)&&s.set(t,o),o)}function Gs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,kn(e))||Q(t,e))}let xe=null,Fa=null;function Ns(t){const e=xe;return xe=t,Fa=t&&t.type.__scopeId||null,e}function Le(t,e=xe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ao(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&ao(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function cr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:h,data:p,setupState:b,ctx:x,inheritAttrs:k}=t;let U,R;const B=Ns(t);try{if(n.shapeFlag&4){const W=r||s;U=et(f.call(W,W,h,i,b,p,x)),R=l}else{const W=e;U=et(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),R=e.props?l:Tu(l)}}catch(W){Hn.length=0,qs(W,t,1),U=ee(He)}let O=U;if(R&&k!==!1){const W=Object.keys(R),{shapeFlag:K}=O;W.length&&K&7&&(o&&W.some(ei)&&(R=ku(R,o)),O=Ot(O,R))}return n.dirs&&(O=Ot(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Ns(B),U}const Tu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},ku=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Su(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Qi(s,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Gs(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Qi(s,o,c):!0:!!o;return!1}function Qi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gs(n,i))return!0}return!1}function Cu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Pu=t=>t.__isSuspense;function Ru(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Eu(t)}function xs(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function st(t,e,n=!1){const s=Ee||xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s.proxy):e}}const vs={};function Fn(t,e,n){return Ba(t,e,n)}function Ba(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ue){const a=Ee;let l,c=!1,f=!1;if(pe(t)?(l=()=>t.value,c=Os(t)):St(t)?(l=()=>t,s=!0):F(t)?(f=!0,c=t.some(O=>St(O)||Os(O)),l=()=>t.map(O=>{if(pe(O))return O.value;if(St(O))return zt(O);if(V(O))return Ct(O,a,2)})):V(t)?e?l=()=>Ct(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),je(t,a,3,[p])}:l=Je,e&&s){const O=l;l=()=>zt(O())}let h,p=O=>{h=R.onStop=()=>{Ct(O,a,4)}},b;if(es)if(p=Je,e?n&&je(e,a,3,[l(),f?[]:void 0,p]):l(),r==="sync"){const O=Tf();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Je;let x=f?new Array(t.length).fill(vs):vs;const k=()=>{if(R.active)if(e){const O=R.run();(s||c||(f?O.some((W,K)=>Gn(W,x[K])):Gn(O,x)))&&(h&&h(),je(e,a,3,[O,x===vs?void 0:f&&x[0]===vs?[]:x,p]),x=O)}else R.run()};k.allowRecurse=!!e;let U;r==="sync"?U=k:r==="post"?U=()=>Oe(k,a&&a.suspense):(k.pre=!0,a&&(k.id=a.uid),U=()=>hi(k));const R=new ri(l,U);e?n?k():x=R.run():r==="post"?Oe(R.run.bind(R),a&&a.suspense):R.run();const B=()=>{R.stop(),a&&a.scope&&ti(a.scope.effects,R)};return b&&b.push(B),B}function Au(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?ja(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=Ee;bn(this);const a=Ba(r,i.bind(s),n);return o?bn(o):Gt(),a}function ja(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function zt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))zt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)zt(t[n],e);else if(Tn(t)||cn(t))t.forEach(n=>{zt(n,e)});else if(pa(t))for(const n in t)zt(t[n],e);return t}function Ou(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ka(()=>{t.isMounted=!0}),qa(()=>{t.isUnmounting=!0}),t}const Be=[Function,Array],Nu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},setup(t,{slots:e}){const n=ll(),s=Ou();let r;return()=>{const i=e.default&&Va(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const k of i)if(k.type!==He){o=k;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return ur(o);const c=Zi(o);if(!c)return ur(o);const f=Rr(c,a,s,n);Ar(c,f);const h=n.subTree,p=h&&Zi(h);let b=!1;const{getTransitionKey:x}=c.type;if(x){const k=x();r===void 0?r=k:k!==r&&(r=k,b=!0)}if(p&&p.type!==He&&(!Ht(c,p)||b)){const k=Rr(p,a,s,n);if(Ar(p,k),l==="out-in")return s.isLeaving=!0,k.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ur(o);l==="in-out"&&c.type!==He&&(k.delayLeave=(U,R,B)=>{const O=Ha(s,p);O[String(p.key)]=p,U._leaveCb=()=>{R(),U._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=B})}return o}}},Du=Nu;function Ha(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:b,onLeaveCancelled:x,onBeforeAppear:k,onAppear:U,onAfterAppear:R,onAppearCancelled:B}=e,O=String(t.key),W=Ha(n,t),K=(A,J)=>{A&&je(A,s,9,J)},re=(A,J)=>{const Y=J[1];K(A,J),F(A)?A.every(de=>de.length<=1)&&Y():A.length<=1&&Y()},z={mode:i,persisted:o,beforeEnter(A){let J=a;if(!n.isMounted)if(r)J=k||a;else return;A._leaveCb&&A._leaveCb(!0);const Y=W[O];Y&&Ht(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[A])},enter(A){let J=l,Y=c,de=f;if(!n.isMounted)if(r)J=U||l,Y=R||c,de=B||f;else return;let ve=!1;const Ne=A._enterCb=Ce=>{ve||(ve=!0,Ce?K(de,[A]):K(Y,[A]),z.delayedLeave&&z.delayedLeave(),A._enterCb=void 0)};J?re(J,[A,Ne]):Ne()},leave(A,J){const Y=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return J();K(h,[A]);let de=!1;const ve=A._leaveCb=Ne=>{de||(de=!0,J(),Ne?K(x,[A]):K(b,[A]),A._leaveCb=void 0,W[Y]===t&&delete W[Y])};W[Y]=t,p?re(p,[A,ve]):ve()},clone(A){return Rr(A,e,n,s)}};return z}function ur(t){if(Js(t))return t=Ot(t),t.children=null,t}function Zi(t){return Js(t)?t.children?t.children[0]:void 0:t}function Ar(t,e){t.shapeFlag&6&&t.component?Ar(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Va(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ue?(o.patchFlag&128&&r++,s=s.concat(Va(o.children,e,a))):(e||o.type!==He)&&s.push(a!=null?Ot(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Wa(t){return V(t)?{setup:t,name:t.name}:t}const Bn=t=>!!t.type.__asyncLoader,Js=t=>t.type.__isKeepAlive;function Mu(t,e){za(t,"a",e)}function Lu(t,e){za(t,"da",e)}function za(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ys(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Js(r.parent.vnode)&&Uu(s,e,n,r),r=r.parent}}function Uu(t,e,n,s){const r=Ys(e,t,s,!0);Ga(()=>{ti(s[e],r)},n)}function Ys(t,e,n=Ee,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sn(),bn(n);const a=je(e,n,t,o);return Gt(),Cn(),a});return s?r.unshift(i):r.push(i),i}}const mt=t=>(e,n=Ee)=>(!es||t==="sp")&&Ys(t,(...s)=>e(...s),n),$u=mt("bm"),Ka=mt("m"),Fu=mt("bu"),Bu=mt("u"),qa=mt("bum"),Ga=mt("um"),ju=mt("sp"),Hu=mt("rtg"),Vu=mt("rtc");function Wu(t,e=Ee){Ys("ec",t,e)}function be(t,e){const n=xe;if(n===null)return t;const s=er(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ue]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&zt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Sn(),je(l,n,8,[t.el,a,t,e]),Cn())}}const pi="components";function Xt(t,e){return Ya(pi,t,!0,e)||t}const Ja=Symbol();function zu(t){return _e(t)?Ya(pi,t,!1)||t:t||Ja}function Ya(t,e,n=!0,s=!1){const r=xe||Ee;if(r){const i=r.type;if(t===pi){const a=Ef(i,!1);if(a&&(a===e||a===ot(e)||a===zs(ot(e))))return i}const o=eo(r[t]||i[t],e)||eo(r.appContext[t],e);return!o&&s?i:o}}function eo(t,e){return t&&(t[e]||t[ot(e)]||t[zs(ot(e))])}function Rv(t,e,n,s){let r;const i=n&&n[s];if(F(t)||_e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Ku(t,e,n={},s,r){if(xe.isCE||xe.parent&&Bn(xe.parent)&&xe.parent.isCE)return e!=="default"&&(n.name=e),ee("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&Xa(i(n)),a=Qs(Ue,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Xa(t){return t.some(e=>Ms(e)?!(e.type===He||e.type===Ue&&!Xa(e.children)):!0)?t:null}const Or=t=>t?cl(t)?er(t)||t.proxy:Or(t.parent):null,jn=ke(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>hi(t.update)),$nextTick:t=>t.n||(t.n=di.bind(t.proxy)),$watch:t=>Au.bind(t)}),fr=(t,e)=>t!==ue&&!t.__isScriptSetup&&Q(t,e),qu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(fr(s,e))return o[e]=1,s[e];if(r!==ue&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,i[e];if(n!==ue&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const f=jn[e];let h,p;if(f)return e==="$attrs"&&Fe(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&Q(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return fr(r,e)?(r[e]=n,!0):s!==ue&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ue&&Q(t,o)||fr(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(jn,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Gu(t){const e=gi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&to(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:x,activated:k,deactivated:U,beforeDestroy:R,beforeUnmount:B,destroyed:O,unmounted:W,render:K,renderTracked:re,renderTriggered:z,errorCaptured:A,serverPrefetch:J,expose:Y,inheritAttrs:de,components:ve,directives:Ne,filters:Ce}=e;if(c&&Ju(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ne=o[ie];V(ne)&&(s[ie]=ne.bind(n))}if(r){const ie=r.call(n,n);le(ie)&&(t.data=Pn(ie))}if(Nr=!0,i)for(const ie in i){const ne=i[ie],We=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):Je,Mt=!V(ne)&&V(ne.set)?ne.set.bind(n):Je,ze=$e({get:We,set:Mt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ae=>ze.value=Ae})}if(a)for(const ie in a)Qa(a[ie],s,n,ie);if(l){const ie=V(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ne=>{xs(ne,ie[ne])})}f&&to(f,t,"c");function ge(ie,ne){F(ne)?ne.forEach(We=>ie(We.bind(n))):ne&&ie(ne.bind(n))}if(ge($u,h),ge(Ka,p),ge(Fu,b),ge(Bu,x),ge(Mu,k),ge(Lu,U),ge(Wu,A),ge(Vu,re),ge(Hu,z),ge(qa,B),ge(Ga,W),ge(ju,J),F(Y))if(Y.length){const ie=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});K&&t.render===Je&&(t.render=K),de!=null&&(t.inheritAttrs=de),ve&&(t.components=ve),Ne&&(t.directives=Ne)}function Ju(t,e,n=Je,s=!1){F(t)&&(t=Dr(t));for(const r in t){const i=t[r];let o;le(i)?"default"in i?o=st(i.from||r,i.default,!0):o=st(i.from||r):o=st(i),pe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function to(t,e,n){je(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qa(t,e,n,s){const r=s.includes(".")?ja(n,s):()=>n[s];if(_e(t)){const i=e[t];V(i)&&Fn(r,i)}else if(V(t))Fn(r,t.bind(n));else if(le(t))if(F(t))t.forEach(i=>Qa(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Fn(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ds(l,c,o,!0)),Ds(l,e,o)),le(e)&&i.set(e,l),l}function Ds(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ds(t,i,n,!0),r&&r.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Yu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Yu={data:no,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Ft,directives:Ft,watch:Qu,provide:no,inject:Xu};function no(t,e){return e?t?function(){return ke(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Xu(t,e){return Ft(Dr(t),Dr(e))}function Dr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ft(t,e){return t?ke(ke(Object.create(null),t),e):e}function Qu(t,e){if(!t)return e;if(!e)return t;const n=ke(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function Zu(t,e,n,s=!1){const r={},i={};As(i,Zs,1),t.propsDefaults=Object.create(null),Za(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:uu(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function ef(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Gs(t.emitsOptions,p))continue;const b=e[p];if(l)if(Q(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const x=ot(p);r[x]=Mr(l,a,x,b,t,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Za(t,e,r,i)&&(c=!0);let f;for(const h in a)(!e||!Q(e,h)&&((f=kn(h))===h||!Q(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Mr(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h))&&(delete i[h],c=!0)}c&&pt(t,"set","$attrs")}function Za(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let f;r&&Q(r,f=ot(l))?!i||!i.includes(f)?n[f]=c:(a||(a={}))[f]=c:Gs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||ue;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Mr(r,l,h,c[h],t,!Q(c,h))}}return o}function Mr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(bn(r),s=c[n]=l.call(null,e),Gt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===kn(n))&&(s=!0))}return s}function el(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!V(t)){const f=h=>{l=!0;const[p,b]=el(h,e,!0);ke(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return le(t)&&s.set(t,ln),ln;if(F(i))for(let f=0;f<i.length;f++){const h=ot(i[f]);so(h)&&(o[h]=ue)}else if(i)for(const f in i){const h=ot(f);if(so(h)){const p=i[f],b=o[h]=F(p)||V(p)?{type:p}:Object.assign({},p);if(b){const x=oo(Boolean,b.type),k=oo(String,b.type);b[0]=x>-1,b[1]=k<0||x<k,(x>-1||Q(b,"default"))&&a.push(h)}}}const c=[o,a];return le(t)&&s.set(t,c),c}function so(t){return t[0]!=="$"}function ro(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function io(t,e){return ro(t)===ro(e)}function oo(t,e){return F(e)?e.findIndex(n=>io(n,t)):V(e)&&io(e,t)?0:-1}const tl=t=>t[0]==="_"||t==="$stable",mi=t=>F(t)?t.map(et):[et(t)],tf=(t,e,n)=>{if(e._n)return e;const s=Le((...r)=>mi(e(...r)),n);return s._c=!1,s},nl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(tl(r))continue;const i=t[r];if(V(i))e[r]=tf(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},sl=(t,e)=>{const n=mi(e);t.slots.default=()=>n},nf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),As(e,"_",n)):nl(e,t.slots={})}else t.slots={},e&&sl(t,e);As(t.slots,Zs,1)},sf=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ue;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ke(r,e),!n&&a===1&&delete r._):(i=!e.$stable,nl(e,r)),o=e}else e&&(sl(t,e),o={default:1});if(i)for(const a in r)!tl(a)&&!(a in o)&&delete r[a]};function rl(){return{app:null,config:{isNativeTag:Pc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rf=0;function of(t,e){return function(s,r=null){V(s)||(s=Object.assign({},s)),r!=null&&!le(r)&&(r=null);const i=rl(),o=new Set;let a=!1;const l=i.app={_uid:rf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:kf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...f)):V(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,h){if(!a){const p=ee(s,r);return p.appContext=i,f&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,er(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Lr(t,e,n,s,r=!1){if(F(t)){t.forEach((p,b)=>Lr(p,e&&(F(e)?e[b]:e),n,s,r));return}if(Bn(s)&&!r)return;const i=s.shapeFlag&4?er(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,f=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(_e(c)?(f[c]=null,Q(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),V(l))Ct(l,a,12,[o,f]);else{const p=_e(l),b=pe(l);if(p||b){const x=()=>{if(t.f){const k=p?Q(h,l)?h[l]:f[l]:l.value;r?F(k)&&ti(k,i):F(k)?k.includes(i)||k.push(i):p?(f[l]=[i],Q(h,l)&&(h[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else p?(f[l]=o,Q(h,l)&&(h[l]=o)):b&&(l.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,Oe(x,n)):x()}}}const Oe=Ru;function af(t){return lf(t)}function lf(t,e){const n=Mc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Je,insertStaticContent:x}=t,k=(u,d,g,_=null,y=null,I=null,C=!1,E=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ht(u,d)&&(_=S(u),Ae(u,y,I,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=d;switch(w){case Xs:U(u,d,g,_);break;case He:R(u,d,g,_);break;case Ts:u==null&&B(d,g,_,C);break;case Ue:ve(u,d,g,_,y,I,C,E,T);break;default:N&1?K(u,d,g,_,y,I,C,E,T):N&6?Ne(u,d,g,_,y,I,C,E,T):(N&64||N&128)&&w.process(u,d,g,_,y,I,C,E,T,X)}M!=null&&y&&Lr(M,u&&u.ref,I,d||u,!d)},U=(u,d,g,_)=>{if(u==null)s(d.el=a(d.children),g,_);else{const y=d.el=u.el;d.children!==u.children&&c(y,d.children)}},R=(u,d,g,_)=>{u==null?s(d.el=l(d.children||""),g,_):d.el=u.el},B=(u,d,g,_)=>{[u.el,u.anchor]=x(u.children,d,g,_,u.el,u.anchor)},O=({el:u,anchor:d},g,_)=>{let y;for(;u&&u!==d;)y=p(u),s(u,g,_),u=y;s(d,g,_)},W=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},K=(u,d,g,_,y,I,C,E,T)=>{C=C||d.type==="svg",u==null?re(d,g,_,y,I,C,E,T):J(u,d,y,I,C,E,T)},re=(u,d,g,_,y,I,C,E)=>{let T,w;const{type:M,props:N,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=o(u.type,I,N&&N.is,N),L&8?f(T,u.children):L&16&&A(u.children,T,null,_,y,I&&M!=="foreignObject",C,E),G&&Lt(u,null,_,"created"),N){for(const se in N)se!=="value"&&!Es(se)&&i(T,se,null,N[se],I,u.children,_,y,P);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Ze(w,_,u)}z(T,u,u.scopeId,C,_),G&&Lt(u,null,_,"beforeMount");const oe=(!y||y&&!y.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,d,g),((w=N&&N.onVnodeMounted)||oe||G)&&Oe(()=>{w&&Ze(w,_,u),oe&&H.enter(T),G&&Lt(u,null,_,"mounted")},y)},z=(u,d,g,_,y)=>{if(g&&b(u,g),_)for(let I=0;I<_.length;I++)b(u,_[I]);if(y){let I=y.subTree;if(d===I){const C=y.vnode;z(u,C,C.scopeId,C.slotScopeIds,y.parent)}}},A=(u,d,g,_,y,I,C,E,T=0)=>{for(let w=T;w<u.length;w++){const M=u[w]=E?yt(u[w]):et(u[w]);k(null,M,d,g,_,y,I,C,E)}},J=(u,d,g,_,y,I,C)=>{const E=d.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=d;T|=u.patchFlag&16;const N=u.props||ue,L=d.props||ue;let H;g&&Ut(g,!1),(H=L.onVnodeBeforeUpdate)&&Ze(H,g,d,u),M&&Lt(d,u,g,"beforeUpdate"),g&&Ut(g,!0);const G=y&&d.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,E,g,_,G,I):C||ne(u,d,E,null,g,_,G,I,!1),T>0){if(T&16)de(E,d,N,L,g,_,y);else if(T&2&&N.class!==L.class&&i(E,"class",null,L.class,y),T&4&&i(E,"style",N.style,L.style,y),T&8){const oe=d.dynamicProps;for(let se=0;se<oe.length;se++){const me=oe[se],Ke=N[me],sn=L[me];(sn!==Ke||me==="value")&&i(E,me,Ke,sn,y,u.children,g,_,P)}}T&1&&u.children!==d.children&&f(E,d.children)}else!C&&w==null&&de(E,d,N,L,g,_,y);((H=L.onVnodeUpdated)||M)&&Oe(()=>{H&&Ze(H,g,d,u),M&&Lt(d,u,g,"updated")},_)},Y=(u,d,g,_,y,I,C)=>{for(let E=0;E<d.length;E++){const T=u[E],w=d[E],M=T.el&&(T.type===Ue||!Ht(T,w)||T.shapeFlag&70)?h(T.el):g;k(T,w,M,null,_,y,I,C,!0)}},de=(u,d,g,_,y,I,C)=>{if(g!==_){if(g!==ue)for(const E in g)!Es(E)&&!(E in _)&&i(u,E,g[E],null,C,d.children,y,I,P);for(const E in _){if(Es(E))continue;const T=_[E],w=g[E];T!==w&&E!=="value"&&i(u,E,w,T,C,d.children,y,I,P)}"value"in _&&i(u,"value",g.value,_.value)}},ve=(u,d,g,_,y,I,C,E,T)=>{const w=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(s(w,g,_),s(M,g,_),A(d.children,g,M,y,I,C,E,T)):N>0&&N&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,g,y,I,C,E),(d.key!=null||y&&d===y.subTree)&&il(u,d,!0)):ne(u,d,g,M,y,I,C,E,T)},Ne=(u,d,g,_,y,I,C,E,T)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,g,_,C,T):Ce(d,g,_,y,I,C,T):ye(u,d,T)},Ce=(u,d,g,_,y,I,C)=>{const E=u.component=_f(u,_,y);if(Js(u)&&(E.ctx.renderer=X),bf(E),E.asyncDep){if(y&&y.registerDep(E,ge),!u.el){const T=E.subTree=ee(He);R(null,T,d,g)}return}ge(E,u,d,g,y,I,C)},ye=(u,d,g)=>{const _=d.component=u.component;if(Su(u,d,g))if(_.asyncDep&&!_.asyncResolved){ie(_,d,g);return}else _.next=d,wu(_.update),_.update();else d.el=u.el,_.vnode=d},ge=(u,d,g,_,y,I,C)=>{const E=()=>{if(u.isMounted){let{next:M,bu:N,u:L,parent:H,vnode:G}=u,oe=M,se;Ut(u,!1),M?(M.el=G.el,ie(u,M,C)):M=G,N&&Is(N),(se=M.props&&M.props.onVnodeBeforeUpdate)&&Ze(se,H,M,G),Ut(u,!0);const me=cr(u),Ke=u.subTree;u.subTree=me,k(Ke,me,h(Ke.el),S(Ke),u,y,I),M.el=me.el,oe===null&&Cu(u,me.el),L&&Oe(L,y),(se=M.props&&M.props.onVnodeUpdated)&&Oe(()=>Ze(se,H,M,G),y)}else{let M;const{el:N,props:L}=d,{bm:H,m:G,parent:oe}=u,se=Bn(d);if(Ut(u,!1),H&&Is(H),!se&&(M=L&&L.onVnodeBeforeMount)&&Ze(M,oe,d),Ut(u,!0),N&&q){const me=()=>{u.subTree=cr(u),q(N,u.subTree,u,y,null)};se?d.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=cr(u);k(null,me,g,_,u,y,I),d.el=me.el}if(G&&Oe(G,y),!se&&(M=L&&L.onVnodeMounted)){const me=d;Oe(()=>Ze(M,oe,me),y)}(d.shapeFlag&256||oe&&Bn(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Oe(u.a,y),u.isMounted=!0,d=g=_=null}},T=u.effect=new ri(E,()=>hi(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,Ut(u,!0),w()},ie=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,ef(u,d.props,_,g),sf(u,d.children,g),Sn(),Xi(),Cn()},ne=(u,d,g,_,y,I,C,E,T=!1)=>{const w=u&&u.children,M=u?u.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:H}=d;if(L>0){if(L&128){Mt(w,N,g,_,y,I,C,E,T);return}else if(L&256){We(w,N,g,_,y,I,C,E,T);return}}H&8?(M&16&&P(w,y,I),N!==w&&f(g,N)):M&16?H&16?Mt(w,N,g,_,y,I,C,E,T):P(w,y,I,!0):(M&8&&f(g,""),H&16&&A(N,g,_,y,I,C,E,T))},We=(u,d,g,_,y,I,C,E,T)=>{u=u||ln,d=d||ln;const w=u.length,M=d.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const H=d[L]=T?yt(d[L]):et(d[L]);k(u[L],H,g,null,y,I,C,E,T)}w>M?P(u,y,I,!0,!1,N):A(d,g,_,y,I,C,E,T,N)},Mt=(u,d,g,_,y,I,C,E,T)=>{let w=0;const M=d.length;let N=u.length-1,L=M-1;for(;w<=N&&w<=L;){const H=u[w],G=d[w]=T?yt(d[w]):et(d[w]);if(Ht(H,G))k(H,G,g,null,y,I,C,E,T);else break;w++}for(;w<=N&&w<=L;){const H=u[N],G=d[L]=T?yt(d[L]):et(d[L]);if(Ht(H,G))k(H,G,g,null,y,I,C,E,T);else break;N--,L--}if(w>N){if(w<=L){const H=L+1,G=H<M?d[H].el:_;for(;w<=L;)k(null,d[w]=T?yt(d[w]):et(d[w]),g,G,y,I,C,E,T),w++}}else if(w>L)for(;w<=N;)Ae(u[w],y,I,!0),w++;else{const H=w,G=w,oe=new Map;for(w=G;w<=L;w++){const De=d[w]=T?yt(d[w]):et(d[w]);De.key!=null&&oe.set(De.key,w)}let se,me=0;const Ke=L-G+1;let sn=!1,Fi=0;const Nn=new Array(Ke);for(w=0;w<Ke;w++)Nn[w]=0;for(w=H;w<=N;w++){const De=u[w];if(me>=Ke){Ae(De,y,I,!0);continue}let Qe;if(De.key!=null)Qe=oe.get(De.key);else for(se=G;se<=L;se++)if(Nn[se-G]===0&&Ht(De,d[se])){Qe=se;break}Qe===void 0?Ae(De,y,I,!0):(Nn[Qe-G]=w+1,Qe>=Fi?Fi=Qe:sn=!0,k(De,d[Qe],g,null,y,I,C,E,T),me++)}const Bi=sn?cf(Nn):ln;for(se=Bi.length-1,w=Ke-1;w>=0;w--){const De=G+w,Qe=d[De],ji=De+1<M?d[De+1].el:_;Nn[w]===0?k(null,Qe,g,ji,y,I,C,E,T):sn&&(se<0||w!==Bi[se]?ze(Qe,g,ji,2):se--)}}},ze=(u,d,g,_,y=null)=>{const{el:I,type:C,transition:E,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){C.move(u,d,g,X);return}if(C===Ue){s(I,d,g);for(let N=0;N<T.length;N++)ze(T[N],d,g,_);s(u.anchor,d,g);return}if(C===Ts){O(u,d,g);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(I),s(I,d,g),Oe(()=>E.enter(I),y);else{const{leave:N,delayLeave:L,afterLeave:H}=E,G=()=>s(I,d,g),oe=()=>{N(I,()=>{G(),H&&H()})};L?L(I,G,oe):oe()}else s(I,d,g)},Ae=(u,d,g,_=!1,y=!1)=>{const{type:I,props:C,ref:E,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=u;if(E!=null&&Lr(E,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const H=M&1&&L,G=!Bn(u);let oe;if(G&&(oe=C&&C.onVnodeBeforeUnmount)&&Ze(oe,d,u),M&6)v(u.component,g,_);else{if(M&128){u.suspense.unmount(g,_);return}H&&Lt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,y,X,_):w&&(I!==Ue||N>0&&N&64)?P(w,d,g,!1,!0):(I===Ue&&N&384||!y&&M&16)&&P(T,d,g),_&&nn(u)}(G&&(oe=C&&C.onVnodeUnmounted)||H)&&Oe(()=>{oe&&Ze(oe,d,u),H&&Lt(u,null,d,"unmounted")},g)},nn=u=>{const{type:d,el:g,anchor:_,transition:y}=u;if(d===Ue){hs(g,_);return}if(d===Ts){W(u);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:C,delayLeave:E}=y,T=()=>C(g,I);E?E(u.el,I,T):T()}else I()},hs=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},v=(u,d,g)=>{const{bum:_,scope:y,update:I,subTree:C,um:E}=u;_&&Is(_),y.stop(),I&&(I.active=!1,Ae(C,u,d,g)),E&&Oe(E,d),Oe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},P=(u,d,g,_=!1,y=!1,I=0)=>{for(let C=I;C<u.length;C++)Ae(u[C],d,g,_,y)},S=u=>u.shapeFlag&6?S(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),D=(u,d,g)=>{u==null?d._vnode&&Ae(d._vnode,null,null,!0):k(d._vnode||null,u,d,null,null,null,g),Xi(),La(),d._vnode=u},X={p:k,um:Ae,m:ze,r:nn,mt:Ce,mc:A,pc:ne,pbc:Y,n:S,o:t};let fe,q;return e&&([fe,q]=e(X)),{render:D,hydrate:fe,createApp:of(D,fe)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function il(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=yt(r[i]),a.el=o.el),n||il(o,a)),a.type===Xs&&(a.el=o.el)}}function cf(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const uf=t=>t.__isTeleport,Ue=Symbol(void 0),Xs=Symbol(void 0),He=Symbol(void 0),Ts=Symbol(void 0),Hn=[];let Ge=null;function he(t=!1){Hn.push(Ge=t?null:[])}function ff(){Hn.pop(),Ge=Hn[Hn.length-1]||null}let Zn=1;function ao(t){Zn+=t}function ol(t){return t.dynamicChildren=Zn>0?Ge||ln:null,ff(),Zn>0&&Ge&&Ge.push(t),t}function we(t,e,n,s,r,i){return ol(m(t,e,n,s,r,i,!0))}function Qs(t,e,n,s,r){return ol(ee(t,e,n,s,r,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",al=({key:t})=>t??null,ks=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||pe(t)||V(t)?{i:xe,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,i=t===Ue?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&al(e),ref:e&&ks(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:xe};return a?(bi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),Zn>0&&!o&&Ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ge.push(l),l}const ee=df;function df(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ja)&&(t=He),Ms(t)){const a=Ot(t,e,!0);return n&&bi(a,n),Zn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(If(t)&&(t=t.__vccOpts),e){e=hf(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=gn(a)),le(l)&&(Ca(l)&&!F(l)&&(l=ke({},l)),e.style=Qr(l))}const o=_e(t)?1:Pu(t)?128:uf(t)?64:le(t)?4:V(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function hf(t){return t?Ca(t)||Zs in t?ke({},t):t:null}function Ot(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?pf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&al(a),ref:e&&e.ref?n&&r?F(r)?r.concat(ks(e)):[r,ks(e)]:ks(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ie(t=" ",e=0){return ee(Xs,null,t,e)}function _i(t,e){const n=ee(Ts,null,t);return n.staticCount=e,n}function nt(t="",e=!1){return e?(he(),Qs(He,null,t)):ee(He,null,t)}function et(t){return t==null||typeof t=="boolean"?ee(He):F(t)?ee(Ue,null,t.slice()):typeof t=="object"?yt(t):ee(Xs,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ot(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zs in e)?e._ctx=xe:r===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function pf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=gn([e.class,s.class]));else if(r==="style")e.style=Qr([e.style,s.style]);else if(Vs(r)){const i=e[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ze(t,e,n,s=null){je(t,e,7,[n,s])}const gf=rl();let mf=0;function _f(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gf,i={uid:mf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:el(s,r),emitsOptions:$a(s,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=xu.bind(null,i),t.ce&&t.ce(i),i}let Ee=null;const ll=()=>Ee||xe,bn=t=>{Ee=t,t.scope.on()},Gt=()=>{Ee&&Ee.scope.off(),Ee=null};function cl(t){return t.vnode.shapeFlag&4}let es=!1;function bf(t,e=!1){es=e;const{props:n,children:s}=t.vnode,r=cl(t);Zu(t,n,r,e),nf(t,s);const i=r?vf(t,e):void 0;return es=!1,i}function vf(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_n(new Proxy(t.ctx,qu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?wf(t):null;bn(t),Sn();const i=Ct(s,t,0,[t.props,r]);if(Cn(),Gt(),da(i)){if(i.then(Gt,Gt),e)return i.then(o=>{lo(t,o,e)}).catch(o=>{qs(o,t,0)});t.asyncDep=i}else lo(t,i,e)}else ul(t,e)}function lo(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Oa(e)),ul(t,n)}let co;function ul(t,e,n){const s=t.type;if(!t.render){if(!e&&co&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ke(ke({isCustomElement:i,delimiters:a},o),l);s.render=co(r,c)}}t.render=s.render||Je}bn(t),Sn(),Gu(t),Cn(),Gt()}function yf(t){return new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}})}function wf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=yf(t))},slots:t.slots,emit:t.emit,expose:e}}function er(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(_n(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jn)return jn[n](t)},has(e,n){return n in e||n in jn}}))}function Ef(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function If(t){return V(t)&&"__vccOpts"in t}const $e=(t,e)=>bu(t,e,es);function fl(t,e,n){const s=arguments.length;return s===2?le(e)&&!F(e)?Ms(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ms(n)&&(n=[n]),ee(t,e,n))}const xf=Symbol(""),Tf=()=>st(xf),kf="3.2.45",Sf="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,uo=Vt&&Vt.createElement("template"),Cf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Vt.createElementNS(Sf,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{uo.innerHTML=s?`<svg>${t}</svg>`:t;const a=uo.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rf(t,e,n){const s=t.style,r=_e(n);if(n&&!r){for(const i in n)Ur(s,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&Ur(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const fo=/\s*!important$/;function Ur(t,e,n){if(F(n))n.forEach(s=>Ur(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Af(t,e);fo.test(n)?t.setProperty(kn(s),n.replace(fo,""),"important"):t[s]=n}}const ho=["Webkit","Moz","ms"],dr={};function Af(t,e){const n=dr[e];if(n)return n;let s=ot(e);if(s!=="filter"&&s in t)return dr[e]=s;s=zs(s);for(let r=0;r<ho.length;r++){const i=ho[r]+s;if(i in t)return dr[e]=i}return e}const po="http://www.w3.org/1999/xlink";function Of(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(po,e.slice(6,e.length)):t.setAttributeNS(po,e,n);else{const i=Sc(e);n==null||i&&!ua(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nf(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ua(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ut(t,e,n,s){t.addEventListener(e,n,s)}function Df(t,e,n,s){t.removeEventListener(e,n,s)}function Mf(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Lf(e);if(s){const c=i[e]=Ff(s,r);ut(t,a,c,l)}else o&&(Df(t,a,o,l),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Lf(t){let e;if(go.test(t)){e={};let s;for(;s=t.match(go);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):kn(t.slice(2)),e]}let hr=0;const Uf=Promise.resolve(),$f=()=>hr||(Uf.then(()=>hr=0),hr=Date.now());function Ff(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;je(Bf(s,n.value),e,5,[s])};return n.value=t,n.attached=$f(),n}function Bf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const mo=/^on[a-z]/,jf=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Pf(t,s,r):e==="style"?Rf(t,n,s):Vs(e)?ei(e)||Mf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hf(t,e,s,r))?Nf(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Of(t,e,s,r))};function Hf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&mo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mo.test(e)&&_e(n)?!1:e in t}const Vf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Du.props;const Nt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Is(e,n):e};function Wf(t){t.target.composing=!0}function _o(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ft={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Nt(r);const i=s||r.props&&r.props.type==="number";ut(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Jn(a)),t._assign(a)}),n&&ut(t,"change",()=>{t.value=t.value.trim()}),e||(ut(t,"compositionstart",Wf),ut(t,"compositionend",_o),ut(t,"change",_o))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Nt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Jn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zf={deep:!0,created(t,e,n){t._assign=Nt(n),ut(t,"change",()=>{const s=t._modelValue,r=vn(t),i=t.checked,o=t._assign;if(F(s)){const a=Zr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Tn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(dl(t,i))})},mounted:bo,beforeUpdate(t,e,n){t._assign=Nt(n),bo(t,e,n)}};function bo(t,{value:e,oldValue:n},s){t._modelValue=e,F(e)?t.checked=Zr(e,s.props.value)>-1:Tn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Yt(e,dl(t,!0)))}const Kf={created(t,{value:e},n){t.checked=Yt(e,n.props.value),t._assign=Nt(n),ut(t,"change",()=>{t._assign(vn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Nt(s),e!==n&&(t.checked=Yt(e,s.props.value))}},vi={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Tn(e);ut(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jn(vn(o)):vn(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Nt(s)},mounted(t,{value:e}){vo(t,e)},beforeUpdate(t,e,n){t._assign=Nt(n)},updated(t,{value:e}){vo(t,e)}};function vo(t,e){const n=t.multiple;if(!(n&&!F(e)&&!Tn(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=vn(i);if(n)F(e)?i.selected=Zr(e,o)>-1:i.selected=e.has(o);else if(Yt(vn(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vn(t){return"_value"in t?t._value:t.value}function dl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $r={created(t,e,n){ys(t,e,n,null,"created")},mounted(t,e,n){ys(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){ys(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){ys(t,e,n,s,"updated")}};function qf(t,e){switch(t){case"SELECT":return vi;case"TEXTAREA":return ft;default:switch(e){case"checkbox":return zf;case"radio":return Kf;default:return ft}}}function ys(t,e,n,s,r){const o=qf(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Wt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Dn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Dn(t,!0),s.enter(t)):s.leave(t,()=>{Dn(t,!1)}):Dn(t,e))},beforeUnmount(t,{value:e}){Dn(t,e)}};function Dn(t,e){t.style.display=e?t._vod:"none"}const Gf=ke({patchProp:jf},Cf);let yo;function Jf(){return yo||(yo=af(Gf))}const Yf=(...t)=>{const e=Jf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Xf(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Xf(t){return _e(t)?document.querySelector(t):t}var Qf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let hl;const tr=t=>hl=t,pl=Symbol();function Fr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vn||(Vn={}));function Zf(){const t=ma(!0),e=t.run(()=>ui({}));let n=[],s=[];const r=_n({install(i){tr(r),r._a=i,i.provide(pl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Qf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const gl=()=>{};function wo(t,e,n,s=gl){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Uc()&&$c(r),r}function rn(t,...e){t.slice().forEach(n=>{n(...e)})}function Br(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Fr(r)&&Fr(s)&&t.hasOwnProperty(n)&&!pe(s)&&!St(s)?t[n]=Br(r,s):t[n]=s}return t}const ed=Symbol();function td(t){return!Fr(t)||!t.hasOwnProperty(ed)}const{assign:wt}=Object;function nd(t){return!!(pe(t)&&t.effect)}function sd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const f=pu(n.state.value[t]);return wt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=_n($e(()=>{tr(n);const b=n._s.get(t);return o[p].call(b,b)})),h),{}))}return l=ml(t,c,e,n,s,!0),l.$reset=function(){const h=r?r():{};this.$patch(p=>{wt(p,h)})},l}function ml(t,e,n={},s,r,i){let o;const a=wt({actions:{}},n),l={deep:!0};let c,f,h=_n([]),p=_n([]),b;const x=s.state.value[t];!i&&!x&&(s.state.value[t]={}),ui({});let k;function U(z){let A;c=f=!1,typeof z=="function"?(z(s.state.value[t]),A={type:Vn.patchFunction,storeId:t,events:b}):(Br(s.state.value[t],z),A={type:Vn.patchObject,payload:z,storeId:t,events:b});const J=k=Symbol();di().then(()=>{k===J&&(c=!0)}),f=!0,rn(h,A,s.state.value[t])}const R=gl;function B(){o.stop(),h=[],p=[],s._s.delete(t)}function O(z,A){return function(){tr(s);const J=Array.from(arguments),Y=[],de=[];function ve(ye){Y.push(ye)}function Ne(ye){de.push(ye)}rn(p,{args:J,name:z,store:K,after:ve,onError:Ne});let Ce;try{Ce=A.apply(this&&this.$id===t?this:K,J)}catch(ye){throw rn(de,ye),ye}return Ce instanceof Promise?Ce.then(ye=>(rn(Y,ye),ye)).catch(ye=>(rn(de,ye),Promise.reject(ye))):(rn(Y,Ce),Ce)}}const W={_p:s,$id:t,$onAction:wo.bind(null,p),$patch:U,$reset:R,$subscribe(z,A={}){const J=wo(h,z,A.detached,()=>Y()),Y=o.run(()=>Fn(()=>s.state.value[t],de=>{(A.flush==="sync"?f:c)&&z({storeId:t,type:Vn.direct,events:b},de)},wt({},l,A)));return J},$dispose:B},K=Pn(W);s._s.set(t,K);const re=s._e.run(()=>(o=ma(),o.run(()=>e())));for(const z in re){const A=re[z];if(pe(A)&&!nd(A)||St(A))i||(x&&td(A)&&(pe(A)?A.value=x[z]:Br(A,x[z])),s.state.value[t][z]=A);else if(typeof A=="function"){const J=O(z,A);re[z]=J,a.actions[z]=A}}return wt(K,re),wt(Z(K),re),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:z=>{U(A=>{wt(A,z)})}}),s._p.forEach(z=>{wt(K,o.run(()=>z({store:K,app:s._a,pinia:s,options:a})))}),x&&i&&n.hydrate&&n.hydrate(K.$state,x),c=!0,f=!0,K}function rd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=ll();return a=a||c&&st(pl,null),a&&tr(a),a=hl,a._s.has(s)||(i?ml(s,e,r,a):sd(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _l=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},id=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,b=c&63;l||(b=64,o||(p=64)),s.push(n[f],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_l(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):id(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const b=a<<4&240|c>>2;if(s.push(b),h!==64){const x=c<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},od=function(t){const e=_l(t);return bl.encodeByteArray(e,!0)},vl=function(t){return od(t).replace(/\./g,"")},yl=function(t){try{return bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ld=()=>ad().__FIREBASE_DEFAULTS__,cd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ud=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yl(t[1]);return e&&JSON.parse(e)},yi=()=>{try{return ld()||cd()||ud()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fd=t=>{var e,n;return(n=(e=yi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dd=()=>{var t;return(t=yi())===null||t===void 0?void 0:t.config},wl=t=>{var e;return(e=yi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function gd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function md(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _d(){const t=Se();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bd(){try{return typeof indexedDB=="object"}catch{return!1}}function vd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="FirebaseError";class Dt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yd,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?wd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dt(r,a,s)}}function wd(t,e){return t.replace(Ed,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ed=/\{\$([^}]+)}/g;function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Eo(i)&&Eo(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Eo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Un(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function $n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xd(t,e){const n=new Td(t,e);return n.subscribe.bind(n)}class Td{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");kd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pr),r.error===void 0&&(r.error=pr),r.complete===void 0&&(r.complete=pr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pr(){}/**
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
 */function Xe(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Sd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new hd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(t){return t===Bt?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Ad={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Od=ae.INFO,Nd={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Dd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Nd[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=Od,this._logHandler=Dd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ad[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Md=(t,e)=>e.some(n=>t instanceof n);let Io,xo;function Ld(){return Io||(Io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ud(){return xo||(xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,jr=new WeakMap,xl=new WeakMap,gr=new WeakMap,wi=new WeakMap;function $d(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Il.set(n,t)}).catch(()=>{}),wi.set(e,t),e}function Fd(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Bd(t){Hr=t(Hr)}function jd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mr(this),e,...n);return xl.set(s,e.sort?e.sort():[e]),Pt(s)}:Ud().includes(t)?function(...e){return t.apply(mr(this),e),Pt(Il.get(this))}:function(...e){return Pt(t.apply(mr(this),e))}}function Hd(t){return typeof t=="function"?jd(t):(t instanceof IDBTransaction&&Fd(t),Md(t,Ld())?new Proxy(t,Hr):t)}function Pt(t){if(t instanceof IDBRequest)return $d(t);if(gr.has(t))return gr.get(t);const e=Hd(t);return e!==t&&(gr.set(t,e),wi.set(e,t)),e}const mr=t=>wi.get(t);function Vd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Wd=["get","getKey","getAll","getAllKeys","count"],zd=["put","add","delete","clear"],_r=new Map;function To(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_r.get(e))return _r.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=zd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Wd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return _r.set(e,i),i}Bd(t=>({...t,get:(e,n,s)=>To(e,n)||t.get(e,n,s),has:(e,n)=>!!To(e,n)||t.has(e,n)}));/**
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
 */class Kd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(qd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function qd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",ko="0.9.3";/**
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
 */const Qt=new El("@firebase/app"),Gd="@firebase/app-compat",Jd="@firebase/analytics-compat",Yd="@firebase/analytics",Xd="@firebase/app-check-compat",Qd="@firebase/app-check",Zd="@firebase/auth",eh="@firebase/auth-compat",th="@firebase/database",nh="@firebase/database-compat",sh="@firebase/functions",rh="@firebase/functions-compat",ih="@firebase/installations",oh="@firebase/installations-compat",ah="@firebase/messaging",lh="@firebase/messaging-compat",ch="@firebase/performance",uh="@firebase/performance-compat",fh="@firebase/remote-config",dh="@firebase/remote-config-compat",hh="@firebase/storage",ph="@firebase/storage-compat",gh="@firebase/firestore",mh="@firebase/firestore-compat",_h="firebase",bh="9.17.1";/**
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
 */const Wr="[DEFAULT]",vh={[Vr]:"fire-core",[Gd]:"fire-core-compat",[Yd]:"fire-analytics",[Jd]:"fire-analytics-compat",[Qd]:"fire-app-check",[Xd]:"fire-app-check-compat",[Zd]:"fire-auth",[eh]:"fire-auth-compat",[th]:"fire-rtdb",[nh]:"fire-rtdb-compat",[sh]:"fire-fn",[rh]:"fire-fn-compat",[ih]:"fire-iid",[oh]:"fire-iid-compat",[ah]:"fire-fcm",[lh]:"fire-fcm-compat",[ch]:"fire-perf",[uh]:"fire-perf-compat",[fh]:"fire-rc",[dh]:"fire-rc-compat",[hh]:"fire-gcs",[ph]:"fire-gcs-compat",[gh]:"fire-fst",[mh]:"fire-fst-compat","fire-js":"fire-js",[_h]:"fire-js-all"};/**
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
 */const Us=new Map,zr=new Map;function yh(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(zr.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of Us.values())yh(n,t);return!0}function Tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const wh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new as("app","Firebase",wh);/**
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
 */class Eh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=bh;function kl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=dd()),!n)throw Rt.create("no-options");const i=Us.get(r);if(i){if(Ls(n,i.options)&&Ls(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new Rd(r);for(const l of zr.values())o.addComponent(l);const a=new Eh(n,s,o);return Us.set(r,a),a}function Ih(t=Wr){const e=Us.get(t);if(!e&&t===Wr)return kl();if(!e)throw Rt.create("no-app",{appName:t});return e}function dn(t,e,n){var s;let r=(s=vh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}ts(new yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const xh="firebase-heartbeat-database",Th=1,ns="firebase-heartbeat-store";let br=null;function Sl(){return br||(br=Vd(xh,Th,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),br}async function kh(t){try{return(await Sl()).transaction(ns).objectStore(ns).get(Cl(t))}catch(e){if(e instanceof Dt)Qt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function So(t,e){try{const s=(await Sl()).transaction(ns,"readwrite");return await s.objectStore(ns).put(e,Cl(t)),s.done}catch(n){if(n instanceof Dt)Qt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function Cl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sh=1024,Ch=30*24*60*60*1e3;class Ph{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ah(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ch}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:n,unsentEntries:s}=Rh(this._heartbeatsCache.heartbeats),r=vl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Co(){return new Date().toISOString().substring(0,10)}function Rh(t,e=Sh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Po(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Po(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ah{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bd()?vd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await kh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Po(t){return vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Oh(t){ts(new yn("platform-logger",e=>new Kd(e),"PRIVATE")),ts(new yn("heartbeat",e=>new Ph(e),"PRIVATE")),dn(Vr,ko,t),dn(Vr,ko,"esm2017"),dn("fire-js","")}Oh("");function Ei(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Nh=Pl,Rl=new as("auth","Firebase",Pl());/**
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
 */const Ro=new El("@firebase/auth");function Ss(t,...e){Ro.logLevel<=ae.ERROR&&Ro.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Ve(t,...e){throw Ii(t,...e)}function rt(t,...e){return Ii(t,...e)}function Al(t,e,n){const s=Object.assign(Object.assign({},Nh()),{[e]:n});return new as("auth","Firebase",s).create(e,{appName:t.name})}function Dh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ve(t,"argument-error"),Al(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ii(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Rl.create(t,...e)}function $(t,e,...n){if(!t)throw Ii(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ss(e),new Error(e)}function gt(t,e){t||dt(e)}/**
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
 */const Ao=new Map;function ht(t){gt(t instanceof Function,"Expected a class definition");let e=Ao.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ao.set(t,e),e)}/**
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
 */function Mh(t,e){const n=Tl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ls(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Lh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Kr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uh(){return Oo()==="http:"||Oo()==="https:"}function Oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uh()||gd()||"connection"in navigator)?navigator.onLine:!0}function Fh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=pd()||md()}get(){return $h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xi(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ol{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Bh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const jh=new cs(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tn(t,e,n,s,r={}){return Nl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ls(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ol.fetch()(Dl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Nl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Bh),e);try{const r=new Hh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ws(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ws(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Al(t,f,c);Ve(t,f)}}catch(r){if(r instanceof Dt)throw r;Ve(t,"network-request-failed")}}async function us(t,e,n,s,r={}){const i=await tn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?xi(t.config,r):`${t.config.apiScheme}://${r}`}class Hh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(rt(this.auth,"network-request-failed")),jh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=rt(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function Vh(t,e){return tn(t,"POST","/v1/accounts:delete",e)}async function Wh(t,e){return tn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zh(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),r=Ti(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Wn(vr(r.auth_time)),issuedAtTime:Wn(vr(r.iat)),expirationTime:Wn(vr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vr(t){return Number(t)*1e3}function Ti(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ss("JWT malformed, contained fewer than 3 sections"),null;try{const r=yl(n);return r?JSON.parse(r):(Ss("Failed to decode base64 JWT payload"),null)}catch(r){return Ss("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Kh(t){const e=Ti(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dt&&qh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function qh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Gh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ml{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Wn(this.lastLoginAt),this.creationTime=Wn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $s(t){var e;const n=t.auth,s=await t.getIdToken(),r=await wn(t,Wh(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xh(i.providerUserInfo):[],a=Yh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ml(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Jh(t){const e=Xe(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Xh(t){return t.map(e=>{var{providerId:n}=e,s=Ei(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Qh(t,e){const n=await Nl(t,{},async()=>{const s=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Dl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ol.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Qh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ss;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
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
 */function bt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Gh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ml(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zh(this,e)}reload(){return Jh(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wn(this,Vh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:W,isAnonymous:K,providerData:re,stsTokenManager:z}=n;$(O&&z,e,"internal-error");const A=ss.fromJSON(this.name,z);$(typeof O=="string",e,"internal-error"),bt(h,e.name),bt(p,e.name),$(typeof W=="boolean",e,"internal-error"),$(typeof K=="boolean",e,"internal-error"),bt(b,e.name),bt(x,e.name),bt(k,e.name),bt(U,e.name),bt(R,e.name),bt(B,e.name);const J=new Jt({uid:O,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:b,tenantId:k,stsTokenManager:A,createdAt:R,lastLoginAt:B});return re&&Array.isArray(re)&&(J.providerData=re.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new ss;r.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $s(i),i}}/**
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
 */class Ll{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ll.type="NONE";const No=Ll;/**
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
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(ht(No),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ht(No);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const h=Jt._fromJSON(e,f);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new hn(i,e,s))}}/**
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
 */function Do(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jl(e))return"Blackberry";if(Hl(e))return"Webos";if(ki(e))return"Safari";if((e.includes("chrome/")||$l(e))&&!e.includes("edge/"))return"Chrome";if(Bl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ul(t=Se()){return/firefox\//i.test(t)}function ki(t=Se()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $l(t=Se()){return/crios\//i.test(t)}function Fl(t=Se()){return/iemobile/i.test(t)}function Bl(t=Se()){return/android/i.test(t)}function jl(t=Se()){return/blackberry/i.test(t)}function Hl(t=Se()){return/webos/i.test(t)}function sr(t=Se()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Zh(t=Se()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ep(){return _d()&&document.documentMode===10}function Vl(t=Se()){return sr(t)||Bl(t)||Hl(t)||jl(t)||/windows phone/i.test(t)||Fl(t)}function tp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Wl(t,e=[]){let n;switch(t){case"Browser":n=Do(Se());break;case"Worker":n=`${Do(Se())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class np{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class sp{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mo(this),this.idTokenSubscription=new Mo(this),this.beforeStateQueue=new np(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $s(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Fh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ht(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function An(t){return Xe(t)}class Mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=xd(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rp(t,e,n){const s=An(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=zl(e),{host:o,port:a}=ip(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||op()}function zl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ip(t){const e=zl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Lo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Lo(o)}}}function Lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function op(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function ap(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function lp(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}async function cp(t,e){return tn(t,"POST","/v1/accounts:sendOobCode",Rn(t,e))}async function up(t,e){return cp(t,e)}/**
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
 */async function fp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function dp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
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
 */class rs extends Si{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new rs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new rs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return lp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fp(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return ap(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return dp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function pn(t,e){return us(t,"POST","/v1/accounts:signInWithIdp",Rn(t,e))}/**
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
 */const hp="http://localhost";class Zt extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ei(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:hp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
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
 */function pp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gp(t){const e=Un($n(t)).link,n=e?Un($n(e)).deep_link_id:null,s=Un($n(t)).deep_link_id;return(s?Un($n(s)).link:null)||s||n||e||t}class Ci{constructor(e){var n,s,r,i,o,a;const l=Un($n(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,h=pp((r=l.mode)!==null&&r!==void 0?r:null);$(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=gp(e);try{return new Ci(n)}catch{return null}}}/**
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
 */class On{constructor(){this.providerId=On.PROVIDER_ID}static credential(e,n){return rs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ci.parseLink(n);return $(s,"argument-error"),rs._fromEmailAndCode(e,s.code,s.tenantId)}}On.PROVIDER_ID="password";On.EMAIL_PASSWORD_SIGN_IN_METHOD="password";On.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class It extends fs{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
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
 */class xt extends fs{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
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
 */class Tt extends fs{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tt.credential(n,s)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
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
 */async function mp(t,e){return us(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
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
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Jt._fromIdTokenResponse(e,s,r),o=Uo(s);return new en({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Uo(s);return new en({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Fs extends Dt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Fs(e,n,s,r)}}function Kl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(t,i,e,s):i})}async function _p(t,e,n=!1){const s=await wn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",s)}/**
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
 */async function bp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await wn(t,Kl(s,r,e,t),n);$(i.idToken,s,"internal-error");const o=Ti(i.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(t.uid===a,s,"user-mismatch"),en._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
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
 */async function ql(t,e,n=!1){const s="signIn",r=await Kl(t,s,e),i=await en._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function vp(t,e){return ql(An(t),e)}/**
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
 */function yp(t,e,n){var s;$(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Av(t,e,n){const s=Xe(t),r={requestType:"PASSWORD_RESET",email:e};n&&yp(s,r,n),await up(s,r)}async function wp(t,e,n){const s=An(t),r=await mp(s,{returnSecureToken:!0,email:e,password:n}),i=await en._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Ep(t,e,n){return vp(Xe(t),On.credential(e,n))}/**
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
 */async function Ip(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function xp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Xe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await wn(s,Ip(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Tp(t,e,n,s){return Xe(t).onIdTokenChanged(e,n,s)}function kp(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Sp(t,e,n,s){return Xe(t).onAuthStateChanged(e,n,s)}function Ov(t){return Xe(t).signOut()}const Bs="__sak";/**
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
 */class Gl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Cp(){const t=Se();return ki(t)||sr(t)}const Pp=1e3,Rp=10;class Jl extends Gl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Cp()&&tp(),this.fallbackToPolling=Vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);ep()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Rp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Pp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jl.type="LOCAL";const Ap=Jl;/**
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
 */class Yl extends Gl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yl.type="SESSION";const Xl=Yl;/**
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
 */function Op(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Op(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
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
 */function Ri(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Np{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Ri("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function it(){return window}function Dp(t){it().location.href=t}/**
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
 */function Ql(){return typeof it().WorkerGlobalScope<"u"&&typeof it().importScripts=="function"}async function Mp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Lp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Up(){return Ql()?self:null}/**
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
 */const Zl="firebaseLocalStorageDb",$p=1,js="firebaseLocalStorage",ec="fbase_key";class ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ir(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function Fp(){const t=indexedDB.deleteDatabase(Zl);return new ds(t).toPromise()}function qr(){const t=indexedDB.open(Zl,$p);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(js,{keyPath:ec})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(js)?e(s):(s.close(),await Fp(),e(await qr()))})})}async function $o(t,e,n){const s=ir(t,!0).put({[ec]:e,value:n});return new ds(s).toPromise()}async function Bp(t,e){const n=ir(t,!1).get(e),s=await new ds(n).toPromise();return s===void 0?null:s.value}function Fo(t,e){const n=ir(t,!0).delete(e);return new ds(n).toPromise()}const jp=800,Hp=3;class tc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Hp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(Up()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mp(),!this.activeServiceWorker)return;this.sender=new Np(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Lp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await $o(e,Bs,"1"),await Fo(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$o(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Bp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ir(r,!1).getAll();return new ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tc.type="LOCAL";const Vp=tc;/**
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
 */function Wp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=rt("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Wp().appendChild(s)})}function Kp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new cs(3e4,6e4);/**
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
 */function nc(t,e){return e?ht(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ai extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function qp(t){return ql(t.auth,new Ai(t),t.bypassAuthState)}function Gp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),bp(n,new Ai(t),t.bypassAuthState)}async function Jp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),_p(n,new Ai(t),t.bypassAuthState)}/**
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
 */class sc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return qp;case"linkViaPopup":case"linkViaRedirect":return Jp;case"reauthViaPopup":case"reauthViaRedirect":return Gp;default:Ve(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Yp=new cs(2e3,1e4);async function rc(t,e,n){const s=An(t);Dh(t,e,Pi);const r=nc(s,n);return new Kt(s,"signInViaPopup",e,r).executeNotNull()}class Kt extends sc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Yp.get())};e()}}Kt.currentPopupAction=null;/**
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
 */const Xp="pendingRedirect",Ps=new Map;class Qp extends sc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const s=await Zp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Zp(t,e){const n=ng(e),s=tg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function eg(t,e){Ps.set(t._key(),e)}function tg(t){return ht(t._redirectPersistence)}function ng(t){return Cs(Xp,t.config.apiKey,t.name)}async function sg(t,e,n=!1){const s=An(t),r=nc(s,e),o=await new Qp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const rg=10*60*1e3;class ig{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!og(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!ic(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(rt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ic({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function og(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ic(t);default:return!1}}/**
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
 */async function ag(t,e={}){return tn(t,"GET","/v1/projects",e)}/**
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
 */const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cg=/^https?/;async function ug(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ag(t);for(const n of e)try{if(fg(n))return}catch{}Ve(t,"unauthorized-domain")}function fg(t){const e=Kr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!cg.test(n))return!1;if(lg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const dg=new cs(3e4,6e4);function jo(){const t=it().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hg(t){return new Promise((e,n)=>{var s,r,i;function o(){jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jo(),n(rt(t,"network-request-failed"))},timeout:dg.get()})}if(!((r=(s=it().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=it().gapi)===null||i===void 0)&&i.load)o();else{const a=Kp("iframefcb");return it()[a]=()=>{gapi.load?o():n(rt(t,"network-request-failed"))},zp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function pg(t){return Rs=Rs||hg(t),Rs}/**
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
 */const gg=new cs(5e3,15e3),mg="__/auth/iframe",_g="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,_g):`https://${t.config.authDomain}/${mg}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=vg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ls(s).slice(1)}`}async function wg(t){const e=await pg(t),n=it().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:yg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=rt(t,"network-request-failed"),a=it().setTimeout(()=>{i(o)},gg.get());function l(){it().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,xg=600,Tg="_blank",kg="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sg(t,e,n,s=Ig,r=xg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Eg),{width:s.toString(),height:r.toString(),top:i,left:o}),c=Se().toLowerCase();n&&(a=$l(c)?Tg:n),Ul(c)&&(e=e||kg,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[b,x])=>`${p}${b}=${x},`,"");if(Zh(c)&&a!=="_self")return Cg(e||"",a),new Ho(null);const h=window.open(e||"",a,f);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Ho(h)}function Cg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Pg="__/auth/handler",Rg="emulator/auth/handler";function Vo(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof Pi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Ag(t)}?${ls(a).slice(1)}`}function Ag({config:t}){return t.emulator?xi(t,Rg):`https://${t.authDomain}/${Pg}`}/**
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
 */const yr="webStorageSupport";class Og{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xl,this._completeRedirectFn=sg,this._overrideRedirectResult=eg}async _openPopup(e,n,s,r){var i;gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vo(e,n,s,Kr(),r);return Sg(e,o,Ri())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Dp(Vo(e,n,s,Kr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(gt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await wg(e),s=new ig(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yr,{type:yr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[yr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ug(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vl()||ki()||sr()}}const Ng=Og;var Wo="@firebase/auth",zo="0.21.3";/**
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
 */class Dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Mg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Lg(t){ts(new yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wl(t)},f=new sp(a,l,c);return Lh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ts(new yn("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(s=>new Dg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Wo,zo,Mg(t)),dn(Wo,zo,"esm2017")}/**
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
 */const Ug=5*60,$g=wl("authIdTokenMaxAge")||Ug;let Ko=null;const Fg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>$g)return;const r=n==null?void 0:n.token;Ko!==r&&(Ko=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function En(t=Ih()){const e=Tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Mh(t,{popupRedirectResolver:Ng,persistence:[Vp,Ap,Xl]}),s=wl("authTokenSyncURL");if(s){const i=Fg(s);kp(n,i,()=>i(n.currentUser)),Tp(n,o=>i(o))}const r=fd("auth");return r&&rp(n,`http://${r}`),n}Lg("Browser");const ce=rd("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",loggedIn:!1,uid:"",name:"",email:"",data:{},dataOpt:{},cart:{},lang:"ru",langProp:{},number:"",address:""}),getters:{},actions:{sum(){let t=0;for(let e in this.cart)console.log(this.cart[e].price),t+=this.cart[e].price*this.cart[e].quantity;return t},sumItem(t){return this.cart[t].quantity*this.cart[t].price},async process(){let t=await fetch(`/api/language/?lang=${this.lang}`);this.langProp=await t.json()},async checkStatus(){return new Promise((t,e)=>{const n=En();Sp(n,s=>{s&&(this.loggedIn=!0,this.uid=s.uid,this.name=s.displayName,this.email=s.email),t(s)})})},async getData(){try{let t=await fetch("/api/productsList");this.data=await t.json(),t=await fetch("/api/productsListOpt"),this.dataOpt=await t.json()}catch(t){console.log(t)}},async getCart(){console.log("are you fucking kidding me"),this.cart={};try{let e=await(await fetch("/api/usersCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:this.uid})})).json();e=JSON.parse(e.orders);for(let n in e){console.log(n);let s;try{s=JSON.parse(JSON.stringify(this.data[e[n].id])),s.quantity=e[n].quantity,console.log(s),this.cart[s.id]=s}catch(r){console.log(r),s=JSON.parse(JSON.stringify(this.dataOpt[e[n].id])),s.quantity=e[n].quantity,this.cart[s.id]=s}}}catch(t){localStorage.getItem("cart")!=null&&(this.cart=JSON.parse(localStorage.getItem("cart"))),console.log(t)}}}});var Bg="firebase",jg="9.17.1";/**
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
 */dn(Bg,jg,"app");const Oi="/assets/Telegram-c178456d.svg",Ni="/assets/WhatsApp-64705ce5.svg",Di="/assets/Instagram-d32ffc78.svg",at=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Hg={props:{buttonName:String},data:()=>({contact:!1,store:ce()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},Vg={class:"grid [&_*]:font-roboto"},Wg={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1 max-[700px]:text-[30px]"},zg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Kg=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),qg={class:"grid grid-cols-2 max-[700px]:grid-cols-1"},Gg={class:"text-3xl max-[700px]:text-2xl mb-[5px] font-semibold font-roboto"},Jg={class:"text-2xl max-[700px]:text-xl font-roboto"},Yg={class:"text-2xl max-[7000px]:text-xl mb-[20px] font-roboto"},Xg={class:"text-3xl max-[700px]:text-2xl mb-[5px] font-roboto font-semibold"},Qg=m("p",{class:"text-2xl max-[700px]:text-xl mb-[20px] font-roboto"},"+996779454233",-1),Zg={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},em={class:"text-3xl max-[700px]:text-2xl font-roboto font-semibold"},tm=_i('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+Oi+'" alt=""></a><p class="text-2xl max-[700px]:text-xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+Ni+'" alt=""></a><p class="text-2xl max-[700px]:text-xl">+79146089174</p></div><div class="flex items-center mb-[20px]"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+Di+'" alt=""></a><p class="text-2xl max-[700px]:text-xl font-roboto">crafthoney.kg</p></div>',3),nm=m("div",null,[m("p",{class:"text-3xl max-[700px]:text-2xl mb-[5px] font-roboto font-semibold"},"E-mail:"),m("p",{class:"text-2xl max-[700px]:text-xl font-roboto"},"crafthoneykg@gmail.com")],-1);function sm(t,e,n,s,r,i){return he(),we("div",Vg,[m("div",Wg,[m("span",zg,j(t.store.langProp.contacts),1),Kg,m("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},j(t.store.langProp.feedback),1)]),m("div",qg,[m("div",null,[m("p",Gg,j(t.store.langProp.address),1),m("p",Jg,"770033, "+j(t.store.langProp.kyrgyzstan),1),m("p",Yg,j(t.store.langProp.street),1)]),m("div",null,[m("p",Xg,j(t.store.langProp.telephone),1),Qg]),m("div",Zg,[m("p",em,j(t.store.langProp.socialnetworks),1),tm]),nm])])}const oc=at(Hg,[["render",sm]]),rm="/assets/Register_1-5c661edd.svg",ac="/assets/Enter_1-7f28cdb9.svg",im={data(){return{store:ce(),lang:ce().lang}}},om={class:""},am={class:"flex flex-col justify-center [&>*]:px-[10px]"},lm={class:"flex justify-between mt-[8px]"},cm={selected:"",disabled:"",hidden:""},um=m("option",{value:"ru"},"RU",-1),fm=m("option",{value:"en"},"EN",-1),dm=m("option",{value:"kg"},"KG",-1),hm=m("strong",null,"X",-1),pm=[hm],gm={key:0,class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},mm=m("img",{class:"w-[24px] h-24[px] mr-[10px]",src:rm,alt:""},null,-1),_m=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:ac,alt:""},null,-1),bm={key:1,class:"flex justify-center border-b-[1px] border-[#BCB9B9]"},vm=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:ac,alt:""},null,-1),ym={class:"my-[20px] px-[10px]"},wm=_i('<div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Di+'" alt=""></a><a href="https://wa.me/79146089174" target="_blank"><img src="'+Ni+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Oi+'" alt=""></a></div></div>',1),Em={class:"my-[10px]"},Im={class:"my-[10px]"};function xm(t,e,n,s,r,i){const o=Xt("router-link");return he(),we("div",om,[m("div",am,[m("div",lm,[be(m("select",{onChange:e[0]||(e[0]=a=>t.$router.push(`/${r.store.lang}/${t.$route.path.slice(4,t.$route.path.length)}`)),class:"text-center h-[32px] w-[70px] bg-[#DAE2E2] border-[2px] border-black rounded-xl hover:cursor-pointer hover:text-amber-700 hover:bg-amber-200 underline-offset-4",name:"store.lang",id:"","onUpdate:modelValue":e[1]||(e[1]=a=>r.store.lang=a)},[m("option",cm,j(r.store.lang.toUpperCase()),1),um,fm,dm],544),[[vi,r.store.lang]]),m("button",{onClick:e[2]||(e[2]=a=>t.$emit("changeBurger")),class:"w-fit focus:outline-none text-[24px] text-right hover:text-amber-700"},pm)]),ee(o,{to:`/${r.lang}/Products`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Le(()=>[Ie(j(r.store.langProp.catalogue),1)]),_:1},8,["to"]),ee(o,{to:`/${r.lang}/About`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Le(()=>[Ie(j(r.store.langProp.aboutus),1)]),_:1},8,["to"]),ee(o,{to:`/${r.lang}/Blog`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Le(()=>[Ie(j(r.store.langProp.blog),1)]),_:1},8,["to"]),m("button",{onClick:e[3]||(e[3]=a=>(r.store.modal=!0,t.$emit("changeBurger"),r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},j(r.store.langProp.contacts),1)]),r.store.loggedIn?nt("",!0):(he(),we("div",gm,[m("button",{onClick:e[4]||(e[4]=a=>(r.store.bg="bg-bee",r.store.modal=!0,t.$emit("changeBurger"),r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[mm,Ie(j(r.store.langProp.registration),1)]),m("button",{onClick:e[5]||(e[5]=a=>(r.store.modal=!0,t.$emit("changeBurger"),r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[_m,Ie(j(r.store.langProp.login),1)])])),r.store.loggedIn&&!t.$route.path.includes("Personal")?(he(),we("div",bm,[ee(o,{to:`/${r.lang}/PersonalArea/${r.store.uid}`,class:"border-[2px] border-solid border-black rounded-[8px] my-4 w-[218px] h-[47px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},{default:Le(()=>[vm,Ie(j(r.store.langProp.personalarea),1)]),_:1},8,["to"])])):nt("",!0),m("div",ym,[wm,m("p",Em,j(r.store.langProp.address+" 770033 "+r.store.langProp.kyrgyzstan+","),1),m("p",Im,j(r.store.langProp.street),1)])])}const Tm=at(im,[["render",xm]]),km="/assets/drawing-9a7198cf.svg",Sm="/assets/CraftHoney-0d412893.svg",lc="/assets/shopping_cart-809c2612.svg",Cm="/assets/menu-694c5a76.svg",cc="/assets/account_circle-229cba33.svg",Pm={beforeRouteEnter(t,e){},data(){return{burgerMenu:!1,products:"/${store.lang}/Products",store:ce()}},methods:{changeBurger(){this.burgerMenu=!1}},components:{Contacts:oc,Burger:Tm}},Rm={class:"grid grid-flow-col gap-[40px] items-center"},Am=m("img",{class:"self-center w-[60px] inline",src:km},null,-1),Om=m("img",{class:"ml-[10px] self-center w-[120px] inline",src:Sm},null,-1),Nm={key:0,class:"text-xl [&>a]:mr-[30px] max-[1300px]:hidden"},Dm={class:"grid grid-flow-col gap-[20px] min-[1301px]:hidden"},Mm={class:"self-center"},Lm={class:"relative"},Um=m("img",{class:"w-[22px]",src:lc,alt:""},null,-1),$m={key:0,class:"absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center align-center text-white"},Fm={class:"text-[12px]"},Bm={class:"self-center"},jm={class:"grid grid-flow-col gap-[40px] items-center max-[1300px]:hidden"},Hm={key:0,class:"flex items-center"},Vm=m("img",{class:"mr-[10px] w-[24px]",src:cc},null,-1),Wm={key:1,class:"flex items-center"},zm=m("img",{class:"mr-[10px] w-[24px]",src:cc},null,-1),Km={class:"relative"},qm=m("img",{class:"w-[22px]",src:lc,alt:""},null,-1),Gm={key:0,class:"absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center align-center text-white"},Jm={class:"text-[12px]"},Ym={class:"text-xl [&_*]:text-center"},Xm={selected:"",disabled:"",hidden:""},Qm=m("option",{value:"ru"},"RU",-1),Zm=m("option",{value:"en"},"EN",-1),e_=m("option",{value:"kg"},"KG",-1),t_=_i('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Ni+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Di+'" alt=""></a></div>',1);function n_(t,e,n,s,r,i){const o=Xt("router-link"),a=Xt("Burger");return he(),we("header",{class:gn([{"border-black border-b-[3px] pb-[20px]":!t.$route.path.includes("Home")},"bg-white flex justify-between mt-[10px] pb-[10px] max-[800px]:grid-cols-1"])},[m("div",Rm,[m("div",null,[ee(o,{class:"flex max-w-fit",to:`/${r.store.lang}/Home`},{default:Le(()=>[Am,Om]),_:1},8,["to"])]),t.$route.path.includes("Home")?nt("",!0):(he(),we("div",Nm,[ee(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:"products"},{default:Le(()=>{var l,c;return[Ie(j((c=(l=r.store)==null?void 0:l.langProp)==null?void 0:c.catalogue),1)]}),_:1}),ee(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/About`},{default:Le(()=>[Ie(j(r.store.langProp.about),1)]),_:1},8,["to"]),ee(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/Blog`},{default:Le(()=>[Ie(j(r.store.langProp.blog),1)]),_:1},8,["to"]),m("button",{class:"hover:text-amber-700 hover:underline underline-offset-4",onClick:e[0]||(e[0]=l=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},j(r.store.langProp.contacts),1)]))]),m("div",Dm,[m("div",Mm,[ee(o,{to:`/${r.store.lang}/Checkout`},{default:Le(()=>[m("div",Lm,[Um,Object.keys(r.store.cart).length?(he(),we("div",$m,[m("span",Fm,j(Object.keys(r.store.cart).length),1)])):nt("",!0)])]),_:1},8,["to"])]),m("div",Bm,[m("img",{onClick:e[1]||(e[1]=l=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:Cm})])]),m("div",jm,[!r.store.loggedIn&&!t.$route.path.includes("Personal")?(he(),we("div",Hm,[Vm,m("button",{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",onClick:e[2]||(e[2]=l=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},j(r.store.langProp.login),1)])):nt("",!0),r.store.loggedIn&&!t.$route.path.includes("Personal")?(he(),we("div",Wm,[zm,ee(o,{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/PersonalArea/${r.store.uid}`},{default:Le(()=>[Ie(j(r.store.langProp.personalarea),1)]),_:1},8,["to"])])):nt("",!0),m("div",null,[ee(o,{to:`/${r.store.lang}/Checkout`},{default:Le(()=>[m("div",Km,[qm,Object.keys(r.store.cart).length?(he(),we("div",Gm,[m("span",Jm,j(Object.keys(r.store.cart).length),1)])):nt("",!0)])]),_:1},8,["to"])]),m("div",null,[m("p",Ym,[Ie(j(r.store.langProp.lang)+": ",1),be(m("select",{onChange:e[3]||(e[3]=l=>t.$router.push(`/${r.store.lang}/${t.$route.path.slice(4,t.$route.path.length)}`)),class:"ml-[8px] h-[32px] w-[70px] bg-[#ffcc00] rounded-xl hover:cursor-pointer hover:text-amber-700 hover:bg-amber-200 underline-offset-4",name:"store.lang",id:"","onUpdate:modelValue":e[4]||(e[4]=l=>r.store.lang=l)},[m("option",Xm,j(r.store.lang.toUpperCase()),1),Qm,Zm,e_],544),[[vi,r.store.lang]])])]),t_]),m("div",{class:gn(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[ee(a,{onChangeBurger:i.changeBurger},null,8,["onChangeBurger"])],2)],2)}const s_=at(Pm,[["render",n_]]),r_={props:{buttonName:String},data:()=>({feedback:!1,name:"",mail:"",phone:"",message:"",store:ce()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.name="",this.phone="",this.mail="",this.message=""},handleInput(){this.phone=this.phone.replace(/[^0-9+]/g,"")},sendMail(){fetch(`/api/mail/?name=${this.name}&mail=${this.mail}&phone=${this.phone}&message=${this.message}`)}}},i_={class:"grid grid-flow-row gap-y-[20px] mb-[60px] [&_input]:h-[60px]"},o_={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},a_=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),l_={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center max-[550px]:text-2xl"},c_=["placeholder"],u_={class:"grid grid-cols-2 gap-[20px]"},f_=["placeholder"],d_={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},h_=["disabled"];function p_(t,e,n,s,r,i){return he(),we("div",i_,[m("div",o_,[m("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white max-[550px]:text-2xl"},j(t.store.langProp.contacts),1),a_,m("span",l_,j(t.store.langProp.feedback),1)]),m("div",null,[be(m("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.name=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center w-full",type:"text",placeholder:t.store.langProp.yourname},null,8,c_),[[ft,t.name]])]),m("div",u_,[be(m("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.mail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[ft,t.mail]]),be(m("input",{onInput:e[3]||(e[3]=(...o)=>i.handleInput&&i.handleInput(...o)),"onUpdate:modelValue":e[4]||(e[4]=o=>t.phone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",placeholder:t.store.langProp.telephone},null,40,f_),[[ft,t.phone]])]),m("div",null,[be(m("textarea",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.message=o),class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px] w-full",placeholder:"Сообщение",name:"",id:""},null,512),[[ft,t.message]])]),m("div",d_,[m("button",{onClick:e[6]||(e[6]=(...o)=>i.sendMail&&i.sendMail(...o)),disabled:t.name.length<=2||t.mail.length<=5||t.phone.length<=7||t.message.length<=10,class:"bg-[#EAAD02] text-white rounded-[5px] disabled:opacity-50"},j(t.store.langProp.send),9,h_),m("button",{onClick:e[7]||(e[7]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},j(t.store.langProp.reset),1)])])}const uc=at(r_,[["render",p_]]),g_="/assets/call-65c88a38.svg",m_={data(){return{store:ce()}},components:{Feedback:uc}},__={class:"bg-white flex justify-center my-[1vh] w-full"},b_={class:"self-center"},v_=m("img",{class:"inline ml-2",src:g_},null,-1);function y_(t,e,n,s,r,i){return he(),we("footer",__,[m("div",b_,[m("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),v_])])}const w_=at(m_,[["render",y_]]),E_="/assets/Vector-9ca58fbf.svg",Mi="/assets/visibility_on-0c36d6bb.svg",Li="/assets/visibility_off-e6686e60.svg",I_={props:{buttonName:String},data(){return{email:"",password:"",store:ce(),showPassword:!1}},methods:{loginGoogle(){const t=En(),e=new Re;rc(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;this.store.modal=!1,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:r.uid})}),this.store.getCart(),this.store.name=r.displayName,this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,Re.credentialFromError(n)})},async login(){const t=En();Ep(t,this.email,this.password).then(e=>{const n=e.user;console.log(n),this.store.modal=!1,this.store.getCart(),this.store.name=n.displayName,this.$router.push(`/${this.store.lang}/PersonalArea/${n.uid}`)}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword}}},x_={class:"h-[500px] grid grid-cols-2 max-[450px]:grid-cols-1 [&_*]:font-roboto [&_input]:pl-[8px]"},T_={class:"grid auto-rows-min gap-[20px]"},k_={class:"text-[30px] flex justify-center"},S_={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},C_=m("span",{class:"mx-2"},"|",-1),P_=m("img",{class:"mr-[8px]",src:E_},null,-1),R_=["placeholder"],A_={class:"relative"},O_=["type","placeholder"],N_={src:Mi,alt:""},D_={src:Li,alt:""},M_=["disabled"],L_={class:"text-center"};function U_(t,e,n,s,r,i){const o=Xt("router-link");return he(),we("div",x_,[m("div",T_,[m("div",k_,[m("span",S_,j(r.store.langProp.login),1),C_,m("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},j(r.store.langProp.registration),1)]),m("button",{onClick:e[1]||(e[1]=(...a)=>i.loginGoogle&&i.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[P_,Ie(j(r.store.langProp.loginwithgoogle),1)]),be(m("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp.enteremail},null,8,R_),[[ft,r.email]]),m("div",A_,[be(m("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.enterpassword},null,8,O_),[[$r,r.password]]),m("button",{onClick:e[4]||(e[4]=(...a)=>i.eyechange&&i.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[be(m("img",N_,null,512),[[Wt,r.showPassword]]),be(m("img",D_,null,512),[[Wt,!r.showPassword]])])]),ee(o,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Le(()=>[Ie(j(r.store.langProp.forgotyourpassword),1)]),_:1}),m("button",{onClick:e[5]||(e[5]=(...a)=>i.login&&i.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.login),9,M_),m("p",L_,[Ie(j(r.store.langProp.donthaveaccount),1),m("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.createaccount),1)])])])}const $_=at(I_,[["render",U_]]),F_="/assets/Vector-9ca58fbf.svg",B_={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:ce()}},methods:{loginGoogle(){const t=En(),e=new Re;rc(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;console.log(r),this.store.modal=!1,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:r.uid})}),this.store.getCart(),this.store.name=r.displayName,this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,Re.credentialFromError(n)})},async register(){const t=En();wp(t,this.email,this.password).then(e=>{const n=e.user;this.store.comp="Login",fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:n.uid})}),xp(t.currentUser,{displayName:this.name})}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},j_={class:"h-[500px] grid grid-cols-2 max-[450px]:grid-cols-1 [&_*]:font-roboto [&_input]:pl-[8px]"},H_={class:"grid auto-rows-min gap-[20px]"},V_={class:"text-[30px] h-[45px] flex justify-center"},W_=m("span",{class:"mx-2"},"|",-1),z_={class:"bg-gray-300 rounded-[10px] px-2 text-black"},K_=m("img",{class:"mr-[8px]",src:F_},null,-1),q_=["placeholder"],G_=["placeholder"],J_={class:"relative"},Y_=["type","placeholder"],X_={src:Mi,alt:""},Q_={src:Li,alt:""},Z_={class:"relative"},eb=["type","placeholder"],tb={src:Mi,alt:""},nb={src:Li,alt:""},sb={key:0,class:"text-red-500 font-roboto leading-[2px]"},rb=["disabled"],ib={class:"text-center"};function ob(t,e,n,s,r,i){return he(),we("div",j_,[m("div",H_,[m("div",V_,[m("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},j(r.store.langProp.login),1),W_,m("span",z_,j(r.store.langProp.registration),1)]),m("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[K_,Ie(" "+j(r.store.langProp.loginwithgoogle),1)]),be(m("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp.username},null,8,q_),[[ft,r.name]]),be(m("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp.enteremail},null,8,G_),[[ft,r.email]]),m("div",J_,[be(m("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.password},null,40,Y_),[[$r,r.password]]),m("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[be(m("img",X_,null,512),[[Wt,r.showPassword]]),be(m("img",Q_,null,512),[[Wt,!r.showPassword]])])]),m("div",Z_,[be(m("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.confirmthepassword},null,8,eb),[[$r,r.password2]]),m("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[be(m("img",tb,null,512),[[Wt,r.showPassword]]),be(m("img",nb,null,512),[[Wt,!r.showPassword]])])]),r.password2!=r.password?(he(),we("div",sb,j(r.store.langProp.passwordmismatch),1)):nt("",!0),be(m("div",{class:"text-red-500 font-roboto leading-[2px]"},j(r.store.langProp.minimumnumberofsymbols)+" - "+j(r.MinLength),513),[[Wt,r.passwordMinLength&&r.password.length<=5]]),m("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.registration),9,rb),m("p",ib,[Ie(j(r.store.langProp.doyouhaveaccount),1),m("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.login),1)])])])}const ab=at(B_,[["render",ob]]),lb={data(){return{store:ce()}},components:{Contacts:oc,Feedback:uc,Login:$_,Register:ab}},cb={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},ub={class:"p-2 text-right"},fb=m("strong",null,"X",-1),db=[fb];function hb(t,e,n,s,r,i){return r.store.modal?(he(),we("div",cb,[r.store.modal?(he(),we("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):nt("",!0),m("div",{class:gn([r.store.bg,"max-h-screen bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[m("div",ub,[m("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},db)]),(he(),Qs(zu(r.store.comp),{class:"mx-20 mb-10 max-[450px]:mx-[10px]"}))],2)])):nt("",!0)}const pb=at(lb,[["render",hb]]),gb={components:{Header:s_,Footer:w_,LayoutModal:pb}},mb={class:"h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px] max-[400px]:px-[4px]"};function _b(t,e,n,s,r,i){const o=Xt("LayoutModal"),a=Xt("Header");return he(),we(Ue,null,[ee(o),m("div",mb,[ee(a),Ku(t.$slots,"default")])],64)}const bb=at(gb,[["render",_b]]),vb={};function yb(t,e){const n=Xt("RouterView");return he(),Qs(n)}const wb=at(vb,[["render",yb]]),Eb="modulepreload",Ib=function(t){return"/"+t},qo={},$t=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Ib(i),i in qo)return;qo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Eb,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function xb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function wr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ye(r)?r.map(t):t(r)}return n}const zn=()=>{},Ye=Array.isArray,Tb=/\/$/,kb=t=>t.replace(Tb,"");function Er(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Rb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Sb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Go(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Cb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&In(e.matched[s],n.matched[r])&&fc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Pb(t[n],e[n]))return!1;return!0}function Pb(t,e){return Ye(t)?Jo(t,e):Ye(e)?Jo(e,t):t===e}function Jo(t,e){return Ye(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Rb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var is;(function(t){t.pop="pop",t.push="push"})(is||(is={}));var Kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kn||(Kn={}));function Ab(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kb(t)}const Ob=/^[^#]+#/;function Nb(t,e){return t.replace(Ob,"#")+e}function Db(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Mb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Db(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const Gr=new Map;function Lb(t,e){Gr.set(t,e)}function Ub(t){const e=Gr.get(t);return Gr.delete(t),e}let $b=()=>location.protocol+"//"+location.host;function dc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Go(l,"")}return Go(n,t)+s+r}function Fb(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const b=dc(t,location),x=n.value,k=e.value;let U=0;if(p){if(n.value=b,e.value=p,o&&o===x){o=null;return}U=k?p.position-k.position:0}else s(b);r.forEach(R=>{R(n.value,x,{delta:U,type:is.pop,direction:U?U>0?Kn.forward:Kn.back:Kn.unknown})})};function l(){o=n.value}function c(p){r.push(p);const b=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(b),b}function f(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:or()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:h}}function Xo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?or():null}}function Bb(t){const{history:e,location:n}=window,s={value:dc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:$b()+t+l;try{e[f?"replaceState":"pushState"](c,"",p),r.value=c}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(l,c){const f=te({},e.state,Xo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,f,!0),s.value=l}function a(l,c){const f=te({},r.value,e.state,{forward:l,scroll:or()});i(f.current,f,!0);const h=te({},Xo(s.value,l,null),{position:f.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function jb(t){t=Ab(t);const e=Bb(t),n=Fb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=te({location:"",base:t,go:s,createHref:Nb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Hb(t){return typeof t=="string"||t&&typeof t=="object"}function hc(t){return typeof t=="string"||typeof t=="symbol"}const vt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pc=Symbol("");var Qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qo||(Qo={}));function xn(t,e){return te(new Error,{type:t,[pc]:!0},e)}function lt(t,e){return t instanceof Error&&pc in t&&(e==null||!!(t.type&e))}const Zo="[^/]+?",Vb={sensitive:!1,strict:!1,start:!0,end:!0},Wb=/[.+*?^${}()[\]/\\]/g;function zb(t,e){const n=te({},Vb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const f=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const p=c[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Wb,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:k,optional:U,regexp:R}=p;i.push({name:x,repeatable:k,optional:U});const B=R||Zo;if(B!==Zo){b+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+W.message)}}let O=k?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(O=U&&c.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),k&&(b+=-20),B===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const f=c.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",x=i[p-1];h[x.name]=b&&x.repeatable?b.split("/"):b}return h}function l(c){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:x,repeatable:k,optional:U}=b,R=x in c?c[x]:"";if(Ye(R)&&!k)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=Ye(R)?R.join("/"):R;if(!B)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);f+=B}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Kb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function qb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Kb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ea(s))return 1;if(ea(r))return-1}return r.length-s.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Gb={type:0,value:""},Jb=/[a-zA-Z0-9_]/;function Yb(t){if(!t)return[[]];if(t==="/")return[[Gb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",f="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:Jb.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Xb(t,e,n){const s=zb(Yb(t.path),n),r=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Qb(t,e){const n=[],s=new Map;e=sa({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const b=!p,x=Zb(f);x.aliasOf=p&&p.record;const k=sa(e,f),U=[x];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of O)U.push(te({},x,{components:p?p.record.components:x.components,path:W,aliasOf:p?p.record:x}))}let R,B;for(const O of U){const{path:W}=O;if(h&&W[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(W&&re+W)}if(R=Xb(O,h,k),p?p.alias.push(R):(B=B||R,B!==R&&B.alias.push(R),b&&f.name&&!na(R)&&o(f.name)),x.children){const K=x.children;for(let re=0;re<K.length;re++)i(K[re],R,p&&p.children[re])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return B?()=>{o(B)}:zn}function o(f){if(hc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){let h=0;for(;h<n.length&&qb(f,n[h])>=0&&(f.record.path!==n[h].record.path||!gc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!na(f)&&s.set(f.record.name,f)}function c(f,h){let p,b={},x,k;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw xn(1,{location:f});k=p.record.name,b=te(ta(h.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),f.params&&ta(f.params,p.keys.map(B=>B.name))),x=p.stringify(b)}else if("path"in f)x=f.path,p=n.find(B=>B.re.test(x)),p&&(b=p.parse(x),k=p.record.name);else{if(p=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw xn(1,{location:f,currentLocation:h});k=p.record.name,b=te({},h.params,f.params),x=p.stringify(b)}const U=[];let R=p;for(;R;)U.unshift(R.record),R=R.parent;return{name:k,path:x,params:b,matched:U,meta:tv(U)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ta(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Zb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ev(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ev(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tv(t){return t.reduce((e,n)=>te(e,n.meta),{})}function sa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function gc(t,e){return e.children.some(n=>n===t||gc(t,n))}const mc=/#/g,nv=/&/g,sv=/\//g,rv=/=/g,iv=/\?/g,_c=/\+/g,ov=/%5B/g,av=/%5D/g,bc=/%5E/g,lv=/%60/g,vc=/%7B/g,cv=/%7C/g,yc=/%7D/g,uv=/%20/g;function Ui(t){return encodeURI(""+t).replace(cv,"|").replace(ov,"[").replace(av,"]")}function fv(t){return Ui(t).replace(vc,"{").replace(yc,"}").replace(bc,"^")}function Jr(t){return Ui(t).replace(_c,"%2B").replace(uv,"+").replace(mc,"%23").replace(nv,"%26").replace(lv,"`").replace(vc,"{").replace(yc,"}").replace(bc,"^")}function dv(t){return Jr(t).replace(rv,"%3D")}function hv(t){return Ui(t).replace(mc,"%23").replace(iv,"%3F")}function pv(t){return t==null?"":hv(t).replace(sv,"%2F")}function Hs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function gv(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(_c," "),o=i.indexOf("="),a=Hs(o<0?i:i.slice(0,o)),l=o<0?null:Hs(i.slice(o+1));if(a in e){let c=e[a];Ye(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ra(t){let e="";for(let n in t){const s=t[n];if(n=dv(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(s)?s.map(i=>i&&Jr(i)):[s&&Jr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function mv(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ye(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const _v=Symbol(""),ia=Symbol(""),$i=Symbol(""),wc=Symbol(""),Yr=Symbol("");function Mn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Et(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(xn(4,{from:n,to:e})):h instanceof Error?a(h):Hb(h)?a(xn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let f=Promise.resolve(c);t.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function Ir(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(bv(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Et(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=xb(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&Et(p,n,s,i,o)()}))}}return r}function bv(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oa(t){const e=st($i),n=st(wc),s=$e(()=>e.resolve(un(t.to))),r=$e(()=>{const{matched:l}=s.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(In.bind(null,f));if(p>-1)return p;const b=aa(l[c-2]);return c>1&&aa(f)===b&&h[h.length-1].path!==b?h.findIndex(In.bind(null,l[c-2])):p}),i=$e(()=>r.value>-1&&Ev(n.params,s.value.params)),o=$e(()=>r.value>-1&&r.value===n.matched.length-1&&fc(n.params,s.value.params));function a(l={}){return wv(l)?e[un(t.replace)?"replace":"push"](un(t.to)).catch(zn):Promise.resolve()}return{route:s,href:$e(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const vv=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oa,setup(t,{slots:e}){const n=Pn(oa(t)),{options:s}=st($i),r=$e(()=>({[la(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:fl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),yv=vv;function wv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ev(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ye(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function aa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,Iv=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=st(Yr),r=$e(()=>t.route||s.value),i=st(ia,0),o=$e(()=>{let c=un(i);const{matched:f}=r.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),a=$e(()=>r.value.matched[o.value]);xs(ia,$e(()=>o.value+1)),xs(_v,a),xs(Yr,r);const l=ui();return Fn(()=>[l.value,a.value,t.name],([c,f,h],[p,b,x])=>{f&&(f.instances[h]=c,b&&b!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),c&&f&&(!b||!In(f,b)||!p)&&(f.enterCallbacks[h]||[]).forEach(k=>k(c))},{flush:"post"}),()=>{const c=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return ca(n.default,{Component:p,route:c});const b=h.props[f],x=b?b===!0?c.params:typeof b=="function"?b(c):b:null,U=fl(p,te({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return ca(n.default,{Component:U,route:c})||U}}});function ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const xv=Iv;function Tv(t){const e=Qb(t.routes,t),n=t.parseQuery||gv,s=t.stringifyQuery||ra,r=t.history,i=Mn(),o=Mn(),a=Mn(),l=fu(vt);let c=vt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wr.bind(null,v=>""+v),h=wr.bind(null,pv),p=wr.bind(null,Hs);function b(v,P){let S,D;return hc(v)?(S=e.getRecordMatcher(v),D=P):D=v,e.addRoute(D,S)}function x(v){const P=e.getRecordMatcher(v);P&&e.removeRoute(P)}function k(){return e.getRoutes().map(v=>v.record)}function U(v){return!!e.getRecordMatcher(v)}function R(v,P){if(P=te({},P||l.value),typeof v=="string"){const u=Er(n,v,P.path),d=e.resolve({path:u.path},P),g=r.createHref(u.fullPath);return te(u,d,{params:p(d.params),hash:Hs(u.hash),redirectedFrom:void 0,href:g})}let S;if("path"in v)S=te({},v,{path:Er(n,v.path,P.path).path});else{const u=te({},v.params);for(const d in u)u[d]==null&&delete u[d];S=te({},v,{params:h(v.params)}),P.params=h(P.params)}const D=e.resolve(S,P),X=v.hash||"";D.params=f(p(D.params));const fe=Sb(s,te({},v,{hash:fv(X),path:D.path})),q=r.createHref(fe);return te({fullPath:fe,hash:X,query:s===ra?mv(v.query):v.query||{}},D,{redirectedFrom:void 0,href:q})}function B(v){return typeof v=="string"?Er(n,v,l.value.path):te({},v)}function O(v,P){if(c!==v)return xn(8,{from:P,to:v})}function W(v){return z(v)}function K(v){return W(te(B(v),{replace:!0}))}function re(v){const P=v.matched[v.matched.length-1];if(P&&P.redirect){const{redirect:S}=P;let D=typeof S=="function"?S(v):S;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=B(D):{path:D},D.params={}),te({query:v.query,hash:v.hash,params:"path"in D?{}:v.params},D)}}function z(v,P){const S=c=R(v),D=l.value,X=v.state,fe=v.force,q=v.replace===!0,u=re(S);if(u)return z(te(B(u),{state:typeof u=="object"?te({},X,u.state):X,force:fe,replace:q}),P||S);const d=S;d.redirectedFrom=P;let g;return!fe&&Cb(s,D,S)&&(g=xn(16,{to:d,from:D}),Mt(D,D,!0,!1)),(g?Promise.resolve(g):J(d,D)).catch(_=>lt(_)?lt(_,2)?_:We(_):ie(_,d,D)).then(_=>{if(_){if(lt(_,2))return z(te({replace:q},B(_.to),{state:typeof _.to=="object"?te({},X,_.to.state):X,force:fe}),P||d)}else _=de(d,D,!0,q,X);return Y(d,D,_),_})}function A(v,P){const S=O(v,P);return S?Promise.reject(S):Promise.resolve()}function J(v,P){let S;const[D,X,fe]=kv(v,P);S=Ir(D.reverse(),"beforeRouteLeave",v,P);for(const u of D)u.leaveGuards.forEach(d=>{S.push(Et(d,v,P))});const q=A.bind(null,v,P);return S.push(q),on(S).then(()=>{S=[];for(const u of i.list())S.push(Et(u,v,P));return S.push(q),on(S)}).then(()=>{S=Ir(X,"beforeRouteUpdate",v,P);for(const u of X)u.updateGuards.forEach(d=>{S.push(Et(d,v,P))});return S.push(q),on(S)}).then(()=>{S=[];for(const u of v.matched)if(u.beforeEnter&&!P.matched.includes(u))if(Ye(u.beforeEnter))for(const d of u.beforeEnter)S.push(Et(d,v,P));else S.push(Et(u.beforeEnter,v,P));return S.push(q),on(S)}).then(()=>(v.matched.forEach(u=>u.enterCallbacks={}),S=Ir(fe,"beforeRouteEnter",v,P),S.push(q),on(S))).then(()=>{S=[];for(const u of o.list())S.push(Et(u,v,P));return S.push(q),on(S)}).catch(u=>lt(u,8)?u:Promise.reject(u))}function Y(v,P,S){for(const D of a.list())D(v,P,S)}function de(v,P,S,D,X){const fe=O(v,P);if(fe)return fe;const q=P===vt,u=an?history.state:{};S&&(D||q?r.replace(v.fullPath,te({scroll:q&&u&&u.scroll},X)):r.push(v.fullPath,X)),l.value=v,Mt(v,P,S,q),We()}let ve;function Ne(){ve||(ve=r.listen((v,P,S)=>{if(!hs.listening)return;const D=R(v),X=re(D);if(X){z(te(X,{replace:!0}),D).catch(zn);return}c=D;const fe=l.value;an&&Lb(Yo(fe.fullPath,S.delta),or()),J(D,fe).catch(q=>lt(q,12)?q:lt(q,2)?(z(q.to,D).then(u=>{lt(u,20)&&!S.delta&&S.type===is.pop&&r.go(-1,!1)}).catch(zn),Promise.reject()):(S.delta&&r.go(-S.delta,!1),ie(q,D,fe))).then(q=>{q=q||de(D,fe,!1),q&&(S.delta&&!lt(q,8)?r.go(-S.delta,!1):S.type===is.pop&&lt(q,20)&&r.go(-1,!1)),Y(D,fe,q)}).catch(zn)}))}let Ce=Mn(),ye=Mn(),ge;function ie(v,P,S){We(v);const D=ye.list();return D.length?D.forEach(X=>X(v,P,S)):console.error(v),Promise.reject(v)}function ne(){return ge&&l.value!==vt?Promise.resolve():new Promise((v,P)=>{Ce.add([v,P])})}function We(v){return ge||(ge=!v,Ne(),Ce.list().forEach(([P,S])=>v?S(v):P()),Ce.reset()),v}function Mt(v,P,S,D){const{scrollBehavior:X}=t;if(!an||!X)return Promise.resolve();const fe=!S&&Ub(Yo(v.fullPath,0))||(D||!S)&&history.state&&history.state.scroll||null;return di().then(()=>X(v,P,fe)).then(q=>q&&Mb(q)).catch(q=>ie(q,v,P))}const ze=v=>r.go(v);let Ae;const nn=new Set,hs={currentRoute:l,listening:!0,addRoute:b,removeRoute:x,hasRoute:U,getRoutes:k,resolve:R,options:t,push:W,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:ne,install(v){const P=this;v.component("RouterLink",yv),v.component("RouterView",xv),v.config.globalProperties.$router=P,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>un(l)}),an&&!Ae&&l.value===vt&&(Ae=!0,W(r.location).catch(X=>{}));const S={};for(const X in vt)S[X]=$e(()=>l.value[X]);v.provide($i,P),v.provide(wc,Pn(S)),v.provide(Yr,l);const D=v.unmount;nn.add(v),v.unmount=function(){nn.delete(v),nn.size<1&&(c=vt,ve&&ve(),ve=null,l.value=vt,Ae=!1,ge=!1),D()}}};return hs}function on(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function kv(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>In(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>In(c,l))||r.push(l))}return[n,s,r]}const xr=[{path:"Home",alias:"Home",component:()=>$t(()=>import("./Home-4a7e46a8.js"),[])},{path:"About",alias:"About",component:()=>$t(()=>import("./About-4e481f14.js"),[])},{path:"Products",alias:"Products",component:()=>$t(()=>import("./Products-ce27c9cb.js"),["assets/Products-ce27c9cb.js","assets/Group19-49c36de6.js"])},{path:"Personal/:id",alias:"Personal/:id",component:()=>$t(()=>import("./Personal-e0b83b8e.js"),[])},{path:"PersonalArea/:id",alias:"PersonalArea/:id",component:()=>$t(()=>import("./PersonalArea-08466529.js"),[])},{path:"Blog",alias:"Blog",component:()=>$t(()=>import("./Blog-1f62b588.js"),[])},{path:"Checkout",alias:"Checkout",component:()=>$t(()=>import("./Checkout-f810a2d3.js"),["assets/Checkout-f810a2d3.js","assets/Group19-49c36de6.js"])}],Sv=Tv({history:jb("/"),routes:[{path:"/",name:"root",redirect:t=>ce().lang},{path:"/ru",name:"ru",redirect:t=>"ru/Home",beforeEnter:async(t,e,n)=>{ce().lang="ru",await ce().process(),await ce().checkStatus(),await ce().getData(),ce().getCart(),n()},children:xr},{path:"/en",name:"en",redirect:t=>"en/Home",beforeEnter:async(t,e,n)=>{ce().lang="en",await ce().process(),await ce().checkStatus(),ce().getData(),ce().getCart(),n()},children:xr},{path:"/kg",name:"kg",redirect:t=>"kg/Home",beforeEnter:async(t,e,n)=>{ce().lang="kg",await ce().process(),await ce().checkStatus(),ce().getData(),ce().getCart(),n()},children:xr}],strict:!0});const ar=Yf(wb),Cv=Zf();new Re;const Pv={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};ar.component("Layout",bb);ar.use(Cv);ar.use(Sv);kl(Pv);En();ar.mount("#app");export{Ue as F,bb as L,at as _,ee as a,m as b,we as c,Ie as d,Qs as e,Rv as f,En as g,Sp as h,Av as i,be as j,ft as k,nt as l,Qr as n,he as o,Xt as r,Ov as s,j as t,ce as u,Wt as v,Le as w};
