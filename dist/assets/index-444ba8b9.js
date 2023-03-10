(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Qr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ye(s)?Sc(s):Qr(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(ye(t))return t;if(ce(t))return t}}const Ic=/;(?![^(]*\))/g,xc=/:([^]+)/,Tc=/\/\*.*?\*\//gs;function Sc(t){const e={};return t.replace(Tc,"").split(Ic).forEach(n=>{if(n){const s=n.split(xc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function gn(t){let e="";if(ye(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=gn(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cc=Xr(kc);function ua(t){return!!t||t===""}function Pc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Xt(t[s],e[s]);return n}function Xt(t,e){if(t===e)return!0;let n=Hi(t),s=Hi(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=qn(t),s=qn(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?Pc(t,e):!1;if(n=ce(t),s=ce(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xt(t[o],e[o]))return!1}}return String(t)===String(e)}function Zr(t,e){return t.findIndex(n=>Xt(n,e))}const j=t=>ye(t)?t:t==null?"":F(t)||ce(t)&&(t.toString===ha||!V(t.toString))?JSON.stringify(t,da,2):String(t),da=(t,e)=>e&&e.__v_isRef?da(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Tn(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!F(e)&&!pa(e)?String(e):e,ue={},ln=[],Ye=()=>{},Rc=()=>!1,Ac=/^on[^a-z]/,Vs=t=>Ac.test(t),ei=t=>t.startsWith("onUpdate:"),Se=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Oc=Object.prototype.hasOwnProperty,Q=(t,e)=>Oc.call(t,e),F=Array.isArray,cn=t=>os(t)==="[object Map]",Tn=t=>os(t)==="[object Set]",Hi=t=>os(t)==="[object Date]",V=t=>typeof t=="function",ye=t=>typeof t=="string",qn=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",fa=t=>ce(t)&&V(t.then)&&V(t.catch),ha=Object.prototype.toString,os=t=>ha.call(t),Nc=t=>os(t).slice(8,-1),pa=t=>os(t)==="[object Object]",ni=t=>ye(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Dc=/-(\w)/g,lt=Ws(t=>t.replace(Dc,(e,n)=>n?n.toUpperCase():"")),Mc=/\B([A-Z])/g,Sn=Ws(t=>t.replace(Mc,"-$1").toLowerCase()),zs=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),lr=Ws(t=>t?`on${zs(t)}`:""),Gn=(t,e)=>!Object.is(t,e),Is=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Jn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Vi;const Lc=()=>Vi||(Vi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class ga{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ma(t){return new ga(t)}function Uc(t,e=Me){e&&e.active&&e.effects.push(t)}function $c(){return Me}function Fc(t){Me&&Me.cleanups.push(t)}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},_a=t=>(t.w&Ot)>0,ba=t=>(t.n&Ot)>0,Bc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},jc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];_a(r)&&!ba(r)?r.delete(t):e[n++]=r,r.w&=~Ot,r.n&=~Ot}e.length=n}},Tr=new WeakMap;let Ln=0,Ot=1;const Sr=30;let qe;const Gt=Symbol(""),kr=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Uc(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,St=!0,Ot=1<<++Ln,Ln<=Sr?Bc(this):Wi(this),this.fn()}finally{Ln<=Sr&&jc(this),Ot=1<<--Ln,qe=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(Wi(this),this.onStop&&this.onStop(),this.active=!1)}}function Wi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const ya=[];function kn(){ya.push(St),St=!1}function Cn(){const t=ya.pop();St=t===void 0?!0:t}function $e(t,e,n){if(St&&qe){let s=Tr.get(t);s||Tr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),va(r)}}function va(t,e){let n=!1;Ln<=Sr?ba(t)||(t.n|=Ot,n=!_a(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function pt(t,e,n,s,r,i){const o=Tr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const l=Jn(s);o.forEach((c,d)=>{(d==="length"||d>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(Gt)),cn(t)&&a.push(o.get(kr)));break;case"delete":F(t)||(a.push(o.get(Gt)),cn(t)&&a.push(o.get(kr)));break;case"set":cn(t)&&a.push(o.get(Gt));break}if(a.length===1)a[0]&&Cr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Cr(si(l))}}function Cr(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&zi(s);for(const s of n)s.computed||zi(s)}function zi(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Hc=Xr("__proto__,__v_isRef,__isVue"),wa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn)),Vc=ii(),Wc=ii(!1,!0),zc=ii(!0),Ki=Kc();function Kc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)$e(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){kn();const s=Z(this)[e].apply(this,n);return Cn(),s}}),t}function ii(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?lu:Sa:e?Ta:xa).get(s))return s;const o=F(s);if(!t&&o&&Q(Ki,r))return Reflect.get(Ki,r,i);const a=Reflect.get(s,r,i);return(qn(r)?wa.has(r):Hc(r))||(t||$e(s,"get",r),e)?a:pe(a)?o&&ni(r)?a:a.value:ce(a)?t?ka(a):Pn(a):a}}const qc=Ea(),Gc=Ea(!0);function Ea(t=!1){return function(n,s,r,i){let o=n[s];if(mn(o)&&pe(o)&&!pe(r))return!1;if(!t&&(!Os(r)&&!mn(r)&&(o=Z(o),r=Z(r)),!F(n)&&pe(o)&&!pe(r)))return o.value=r,!0;const a=F(n)&&ni(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?Gn(r,o)&&pt(n,"set",s,r):pt(n,"add",s,r)),l}}function Jc(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pt(t,"delete",e,void 0),s}function Yc(t,e){const n=Reflect.has(t,e);return(!qn(e)||!wa.has(e))&&$e(t,"has",e),n}function Xc(t){return $e(t,"iterate",F(t)?"length":Gt),Reflect.ownKeys(t)}const Ia={get:Vc,set:qc,deleteProperty:Jc,has:Yc,ownKeys:Xc},Qc={get:zc,set(t,e){return!0},deleteProperty(t,e){return!0}},Zc=Se({},Ia,{get:Wc,set:Gc}),oi=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&$e(r,"get",e),$e(r,"get",i));const{has:o}=Ks(r),a=s?oi:n?ci:Yn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&$e(s,"has",t),$e(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ms(t,e=!1){return t=t.__v_raw,!e&&$e(Z(t),"iterate",Gt),Reflect.get(t,"size",t)}function qi(t){t=Z(t);const e=Z(this);return Ks(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function Gi(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Ks(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Gn(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Ji(t){const e=Z(this),{has:n,get:s}=Ks(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&pt(e,"delete",t,void 0),i}function Yi(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function _s(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=e?oi:t?ci:Yn;return!t&&$e(a,"iterate",Gt),o.forEach((c,d)=>s.call(r,l(c),l(d),i))}}function bs(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=cn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),d=n?oi:e?ci:Yn;return!e&&$e(i,"iterate",l?kr:Gt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[d(h[0]),d(h[1])]:d(h),done:p}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function eu(){const t={get(i){return ps(this,i)},get size(){return ms(this)},has:gs,add:qi,set:Gi,delete:Ji,clear:Yi,forEach:_s(!1,!1)},e={get(i){return ps(this,i,!1,!0)},get size(){return ms(this)},has:gs,add:qi,set:Gi,delete:Ji,clear:Yi,forEach:_s(!1,!0)},n={get(i){return ps(this,i,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:_s(!0,!1)},s={get(i){return ps(this,i,!0,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bs(i,!1,!1),n[i]=bs(i,!0,!1),e[i]=bs(i,!1,!0),s[i]=bs(i,!0,!0)}),[t,n,e,s]}const[tu,nu,su,ru]=eu();function ai(t,e){const n=e?t?ru:su:t?nu:tu;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const iu={get:ai(!1,!1)},ou={get:ai(!1,!0)},au={get:ai(!0,!1)},xa=new WeakMap,Ta=new WeakMap,Sa=new WeakMap,lu=new WeakMap;function cu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uu(t){return t.__v_skip||!Object.isExtensible(t)?0:cu(Nc(t))}function Pn(t){return mn(t)?t:li(t,!1,Ia,iu,xa)}function du(t){return li(t,!1,Zc,ou,Ta)}function ka(t){return li(t,!0,Qc,au,Sa)}function li(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=uu(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function kt(t){return mn(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function mn(t){return!!(t&&t.__v_isReadonly)}function Os(t){return!!(t&&t.__v_isShallow)}function Ca(t){return kt(t)||mn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function _n(t){return As(t,"__v_skip",!0),t}const Yn=t=>ce(t)?Pn(t):t,ci=t=>ce(t)?ka(t):t;function Pa(t){St&&qe&&(t=Z(t),va(t.dep||(t.dep=si())))}function Ra(t,e){t=Z(t),t.dep&&Cr(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Aa(t,!1)}function fu(t){return Aa(t,!0)}function Aa(t,e){return pe(t)?t:new hu(t,e)}class hu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Yn(e)}get value(){return Pa(this),this._value}set value(e){const n=this.__v_isShallow||Os(e)||mn(e);e=n?e:Z(e),Gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Yn(e),Ra(this))}}function un(t){return pe(t)?t.value:t}const pu={get:(t,e,n)=>un(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pe(r)&&!pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Oa(t){return kt(t)?t:new Proxy(t,pu)}function gu(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=_u(t,n);return e}class mu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function _u(t,e,n){const s=t[e];return pe(s)?s:new mu(t,e,n)}var Na;class bu{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Na]=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,Ra(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return Pa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Na="__v_isReadonly";function yu(t,e,n=!1){let s,r;const i=V(t);return i?(s=t,r=Ye):(s=t.get,r=t.set),new bu(s,r,i||!r,n)}function Ct(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){qs(i,e,n)}return r}function je(t,e,n,s){if(V(t)){const i=Ct(t,e,n,s);return i&&fa(i)&&i.catch(o=>{qs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(je(t[i],e,n,s));return r}function qs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ct(l,null,10,[t,o,a]);return}}vu(t,n,r,s)}function vu(t,e,n,s=!0){console.error(t)}let Xn=!1,Pr=!1;const Te=[];let st=0;const dn=[];let ut=null,Ht=0;const Da=Promise.resolve();let di=null;function fi(t){const e=di||Da;return t?e.then(this?t.bind(this):t):e}function wu(t){let e=st+1,n=Te.length;for(;e<n;){const s=e+n>>>1;Qn(Te[s])<t?e=s+1:n=s}return e}function hi(t){(!Te.length||!Te.includes(t,Xn&&t.allowRecurse?st+1:st))&&(t.id==null?Te.push(t):Te.splice(wu(t.id),0,t),Ma())}function Ma(){!Xn&&!Pr&&(Pr=!0,di=Da.then(Ua))}function Eu(t){const e=Te.indexOf(t);e>st&&Te.splice(e,1)}function Iu(t){F(t)?dn.push(...t):(!ut||!ut.includes(t,t.allowRecurse?Ht+1:Ht))&&dn.push(t),Ma()}function Xi(t,e=Xn?st+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function La(t){if(dn.length){const e=[...new Set(dn)];if(dn.length=0,ut){ut.push(...e);return}for(ut=e,ut.sort((n,s)=>Qn(n)-Qn(s)),Ht=0;Ht<ut.length;Ht++)ut[Ht]();ut=null,Ht=0}}const Qn=t=>t.id==null?1/0:t.id,xu=(t,e)=>{const n=Qn(t)-Qn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ua(t){Pr=!1,Xn=!0,Te.sort(xu);const e=Ye;try{for(st=0;st<Te.length;st++){const n=Te[st];n&&n.active!==!1&&Ct(n,null,14)}}finally{st=0,Te.length=0,La(),Xn=!1,di=null,(Te.length||dn.length)&&Ua()}}function Tu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[d]||ue;p&&(r=n.map(b=>ye(b)?b.trim():b)),h&&(r=n.map(Jn))}let a,l=s[a=lr(e)]||s[a=lr(lt(e))];!l&&i&&(l=s[a=lr(Sn(e))]),l&&je(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(c,t,6,r)}}function $a(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const d=$a(c,e,!0);d&&(a=!0,Se(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ce(t)&&s.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):Se(o,i),ce(t)&&s.set(t,o),o)}function Gs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Sn(e))||Q(t,e))}let Ie=null,Fa=null;function Ns(t){const e=Ie;return Ie=t,Fa=t&&t.type.__scopeId||null,e}function Be(t,e=Ie,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&ao(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&ao(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function cr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:d,renderCache:h,data:p,setupState:b,ctx:x,inheritAttrs:S}=t;let U,R;const B=Ns(t);try{if(n.shapeFlag&4){const W=r||s;U=nt(d.call(W,W,h,i,b,p,x)),R=l}else{const W=e;U=nt(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),R=e.props?l:Su(l)}}catch(W){Hn.length=0,qs(W,t,1),U=ne(He)}let O=U;if(R&&S!==!1){const W=Object.keys(R),{shapeFlag:K}=O;W.length&&K&7&&(o&&W.some(ei)&&(R=ku(R,o)),O=Nt(O,R))}return n.dirs&&(O=Nt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Ns(B),U}const Su=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},ku=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Cu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Qi(s,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let h=0;h<d.length;h++){const p=d[h];if(o[p]!==s[p]&&!Gs(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Qi(s,o,c):!0:!!o;return!1}function Qi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gs(n,i))return!0}return!1}function Pu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Ru=t=>t.__isSuspense;function Au(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Iu(t)}function xs(t,e){if(Ee){let n=Ee.provides;const s=Ee.parent&&Ee.parent.provides;s===n&&(n=Ee.provides=Object.create(s)),n[t]=e}}function it(t,e,n=!1){const s=Ee||Ie;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s.proxy):e}}const ys={};function Fn(t,e,n){return Ba(t,e,n)}function Ba(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ue){const a=Ee;let l,c=!1,d=!1;if(pe(t)?(l=()=>t.value,c=Os(t)):kt(t)?(l=()=>t,s=!0):F(t)?(d=!0,c=t.some(O=>kt(O)||Os(O)),l=()=>t.map(O=>{if(pe(O))return O.value;if(kt(O))return Kt(O);if(V(O))return Ct(O,a,2)})):V(t)?e?l=()=>Ct(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),je(t,a,3,[p])}:l=Ye,e&&s){const O=l;l=()=>Kt(O())}let h,p=O=>{h=R.onStop=()=>{Ct(O,a,4)}},b;if(es)if(p=Ye,e?n&&je(e,a,3,[l(),d?[]:void 0,p]):l(),r==="sync"){const O=Td();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Ye;let x=d?new Array(t.length).fill(ys):ys;const S=()=>{if(R.active)if(e){const O=R.run();(s||c||(d?O.some((W,K)=>Gn(W,x[K])):Gn(O,x)))&&(h&&h(),je(e,a,3,[O,x===ys?void 0:d&&x[0]===ys?[]:x,p]),x=O)}else R.run()};S.allowRecurse=!!e;let U;r==="sync"?U=S:r==="post"?U=()=>Oe(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),U=()=>hi(S));const R=new ri(l,U);e?n?S():x=R.run():r==="post"?Oe(R.run.bind(R),a&&a.suspense):R.run();const B=()=>{R.stop(),a&&a.scope&&ti(a.scope.effects,R)};return b&&b.push(B),B}function Ou(t,e,n){const s=this.proxy,r=ye(t)?t.includes(".")?ja(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=Ee;yn(this);const a=Ba(r,i.bind(s),n);return o?yn(o):Jt(),a}function ja(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Kt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))Kt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Kt(t[n],e);else if(Tn(t)||cn(t))t.forEach(n=>{Kt(n,e)});else if(pa(t))for(const n in t)Kt(t[n],e);return t}function Nu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ka(()=>{t.isMounted=!0}),qa(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],Du={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=ll(),s=Nu();let r;return()=>{const i=e.default&&Va(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==He){o=S;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return ur(o);const c=Zi(o);if(!c)return ur(o);const d=Rr(c,a,s,n);Ar(c,d);const h=n.subTree,p=h&&Zi(h);let b=!1;const{getTransitionKey:x}=c.type;if(x){const S=x();r===void 0?r=S:S!==r&&(r=S,b=!0)}if(p&&p.type!==He&&(!Vt(c,p)||b)){const S=Rr(p,a,s,n);if(Ar(p,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ur(o);l==="in-out"&&c.type!==He&&(S.delayLeave=(U,R,B)=>{const O=Ha(s,p);O[String(p.key)]=p,U._leaveCb=()=>{R(),U._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=B})}return o}}},Mu=Du;function Ha(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:d,onBeforeLeave:h,onLeave:p,onAfterLeave:b,onLeaveCancelled:x,onBeforeAppear:S,onAppear:U,onAfterAppear:R,onAppearCancelled:B}=e,O=String(t.key),W=Ha(n,t),K=(A,J)=>{A&&je(A,s,9,J)},ie=(A,J)=>{const Y=J[1];K(A,J),F(A)?A.every(he=>he.length<=1)&&Y():A.length<=1&&Y()},z={mode:i,persisted:o,beforeEnter(A){let J=a;if(!n.isMounted)if(r)J=S||a;else return;A._leaveCb&&A._leaveCb(!0);const Y=W[O];Y&&Vt(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[A])},enter(A){let J=l,Y=c,he=d;if(!n.isMounted)if(r)J=U||l,Y=R||c,he=B||d;else return;let ve=!1;const Ne=A._enterCb=Ce=>{ve||(ve=!0,Ce?K(he,[A]):K(Y,[A]),z.delayedLeave&&z.delayedLeave(),A._enterCb=void 0)};J?ie(J,[A,Ne]):Ne()},leave(A,J){const Y=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return J();K(h,[A]);let he=!1;const ve=A._leaveCb=Ne=>{he||(he=!0,J(),Ne?K(x,[A]):K(b,[A]),A._leaveCb=void 0,W[Y]===t&&delete W[Y])};W[Y]=t,p?ie(p,[A,ve]):ve()},clone(A){return Rr(A,e,n,s)}};return z}function ur(t){if(Js(t))return t=Nt(t),t.children=null,t}function Zi(t){return Js(t)?t.children?t.children[0]:void 0:t}function Ar(t,e){t.shapeFlag&6&&t.component?Ar(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Va(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&r++,s=s.concat(Va(o.children,e,a))):(e||o.type!==He)&&s.push(a!=null?Nt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Wa(t){return V(t)?{setup:t,name:t.name}:t}const Bn=t=>!!t.type.__asyncLoader,Js=t=>t.type.__isKeepAlive;function Lu(t,e){za(t,"a",e)}function Uu(t,e){za(t,"da",e)}function za(t,e,n=Ee){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ys(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Js(r.parent.vnode)&&$u(s,e,n,r),r=r.parent}}function $u(t,e,n,s){const r=Ys(e,t,s,!0);Ga(()=>{ti(s[e],r)},n)}function Ys(t,e,n=Ee,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;kn(),yn(n);const a=je(e,n,t,o);return Jt(),Cn(),a});return s?r.unshift(i):r.push(i),i}}const mt=t=>(e,n=Ee)=>(!es||t==="sp")&&Ys(t,(...s)=>e(...s),n),Fu=mt("bm"),Ka=mt("m"),Bu=mt("bu"),ju=mt("u"),qa=mt("bum"),Ga=mt("um"),Hu=mt("sp"),Vu=mt("rtg"),Wu=mt("rtc");function zu(t,e=Ee){Ys("ec",t,e)}function _e(t,e){const n=Ie;if(n===null)return t;const s=er(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ue]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Ut(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(kn(),je(l,n,8,[t.el,a,t,e]),Cn())}}const pi="components";function bn(t,e){return Ya(pi,t,!0,e)||t}const Ja=Symbol();function Ku(t){return ye(t)?Ya(pi,t,!1)||t:t||Ja}function Ya(t,e,n=!0,s=!1){const r=Ie||Ee;if(r){const i=r.type;if(t===pi){const a=Ed(i,!1);if(a&&(a===e||a===lt(e)||a===zs(lt(e))))return i}const o=eo(r[t]||i[t],e)||eo(r.appContext[t],e);return!o&&s?i:o}}function eo(t,e){return t&&(t[e]||t[lt(e)]||t[zs(lt(e))])}function Hy(t,e,n,s){let r;const i=n&&n[s];if(F(t)||ye(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function qu(t,e,n={},s,r){if(Ie.isCE||Ie.parent&&Bn(Ie.parent)&&Ie.parent.isCE)return e!=="default"&&(n.name=e),ne("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),de();const o=i&&Xa(i(n)),a=Qs(Le,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Xa(t){return t.some(e=>Ms(e)?!(e.type===He||e.type===Le&&!Xa(e.children)):!0)?t:null}const Or=t=>t?cl(t)?er(t)||t.proxy:Or(t.parent):null,jn=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>hi(t.update)),$nextTick:t=>t.n||(t.n=fi.bind(t.proxy)),$watch:t=>Ou.bind(t)}),dr=(t,e)=>t!==ue&&!t.__isScriptSetup&&Q(t,e),Gu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(dr(s,e))return o[e]=1,s[e];if(r!==ue&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,i[e];if(n!==ue&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const d=jn[e];let h,p;if(d)return e==="$attrs"&&$e(t,"get",e),d(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&Q(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return dr(r,e)?(r[e]=n,!0):s!==ue&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ue&&Q(t,o)||dr(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(jn,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Ju(t){const e=gi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&to(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:h,mounted:p,beforeUpdate:b,updated:x,activated:S,deactivated:U,beforeDestroy:R,beforeUnmount:B,destroyed:O,unmounted:W,render:K,renderTracked:ie,renderTriggered:z,errorCaptured:A,serverPrefetch:J,expose:Y,inheritAttrs:he,components:ve,directives:Ne,filters:Ce}=e;if(c&&Yu(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const oe in o){const se=o[oe];V(se)&&(s[oe]=se.bind(n))}if(r){const oe=r.call(n,n);ce(oe)&&(t.data=Pn(oe))}if(Nr=!0,i)for(const oe in i){const se=i[oe],We=V(se)?se.bind(n,n):V(se.get)?se.get.bind(n,n):Ye,Lt=!V(se)&&V(se.set)?se.set.bind(n):Ye,ze=Ue({get:We,set:Lt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ae=>ze.value=Ae})}if(a)for(const oe in a)Qa(a[oe],s,n,oe);if(l){const oe=V(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(se=>{xs(se,oe[se])})}d&&to(d,t,"c");function ge(oe,se){F(se)?se.forEach(We=>oe(We.bind(n))):se&&oe(se.bind(n))}if(ge(Fu,h),ge(Ka,p),ge(Bu,b),ge(ju,x),ge(Lu,S),ge(Uu,U),ge(zu,A),ge(Wu,ie),ge(Vu,z),ge(qa,B),ge(Ga,W),ge(Hu,J),F(Y))if(Y.length){const oe=t.exposed||(t.exposed={});Y.forEach(se=>{Object.defineProperty(oe,se,{get:()=>n[se],set:We=>n[se]=We})})}else t.exposed||(t.exposed={});K&&t.render===Ye&&(t.render=K),he!=null&&(t.inheritAttrs=he),ve&&(t.components=ve),Ne&&(t.directives=Ne)}function Yu(t,e,n=Ye,s=!1){F(t)&&(t=Dr(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=it(i.from||r,i.default,!0):o=it(i.from||r):o=it(i),pe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function to(t,e,n){je(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Qa(t,e,n,s){const r=s.includes(".")?ja(n,s):()=>n[s];if(ye(t)){const i=e[t];V(i)&&Fn(r,i)}else if(V(t))Fn(r,t.bind(n));else if(ce(t))if(F(t))t.forEach(i=>Qa(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Fn(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ds(l,c,o,!0)),Ds(l,e,o)),ce(e)&&i.set(e,l),l}function Ds(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ds(t,i,n,!0),r&&r.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Xu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Xu={data:no,props:Bt,emits:Bt,methods:Bt,computed:Bt,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Bt,directives:Bt,watch:Zu,provide:no,inject:Qu};function no(t,e){return e?t?function(){return Se(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Qu(t,e){return Bt(Dr(t),Dr(e))}function Dr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Bt(t,e){return t?Se(Se(Object.create(null),t),e):e}function Zu(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function ed(t,e,n,s=!1){const r={},i={};As(i,Zs,1),t.propsDefaults=Object.create(null),Za(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:du(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function td(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let h=0;h<d.length;h++){let p=d[h];if(Gs(t.emitsOptions,p))continue;const b=e[p];if(l)if(Q(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const x=lt(p);r[x]=Mr(l,a,x,b,t,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Za(t,e,r,i)&&(c=!0);let d;for(const h in a)(!e||!Q(e,h)&&((d=Sn(h))===h||!Q(e,d)))&&(l?n&&(n[h]!==void 0||n[d]!==void 0)&&(r[h]=Mr(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h))&&(delete i[h],c=!0)}c&&pt(t,"set","$attrs")}function Za(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let d;r&&Q(r,d=lt(l))?!i||!i.includes(d)?n[d]=c:(a||(a={}))[d]=c:Gs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||ue;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Mr(r,l,h,c[h],t,!Q(c,h))}}return o}function Mr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(yn(r),s=c[n]=l.call(null,e),Jt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Sn(n))&&(s=!0))}return s}function el(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!V(t)){const d=h=>{l=!0;const[p,b]=el(h,e,!0);Se(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return ce(t)&&s.set(t,ln),ln;if(F(i))for(let d=0;d<i.length;d++){const h=lt(i[d]);so(h)&&(o[h]=ue)}else if(i)for(const d in i){const h=lt(d);if(so(h)){const p=i[d],b=o[h]=F(p)||V(p)?{type:p}:Object.assign({},p);if(b){const x=oo(Boolean,b.type),S=oo(String,b.type);b[0]=x>-1,b[1]=S<0||x<S,(x>-1||Q(b,"default"))&&a.push(h)}}}const c=[o,a];return ce(t)&&s.set(t,c),c}function so(t){return t[0]!=="$"}function ro(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function io(t,e){return ro(t)===ro(e)}function oo(t,e){return F(e)?e.findIndex(n=>io(n,t)):V(e)&&io(e,t)?0:-1}const tl=t=>t[0]==="_"||t==="$stable",mi=t=>F(t)?t.map(nt):[nt(t)],nd=(t,e,n)=>{if(e._n)return e;const s=Be((...r)=>mi(e(...r)),n);return s._c=!1,s},nl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(tl(r))continue;const i=t[r];if(V(i))e[r]=nd(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},sl=(t,e)=>{const n=mi(e);t.slots.default=()=>n},sd=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),As(e,"_",n)):nl(e,t.slots={})}else t.slots={},e&&sl(t,e);As(t.slots,Zs,1)},rd=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ue;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Se(r,e),!n&&a===1&&delete r._):(i=!e.$stable,nl(e,r)),o=e}else e&&(sl(t,e),o={default:1});if(i)for(const a in r)!tl(a)&&!(a in o)&&delete r[a]};function rl(){return{app:null,config:{isNativeTag:Rc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let id=0;function od(t,e){return function(s,r=null){V(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=rl(),o=new Set;let a=!1;const l=i.app={_uid:id++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Sd,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...d)):V(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,h){if(!a){const p=ne(s,r);return p.appContext=i,d&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,er(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Lr(t,e,n,s,r=!1){if(F(t)){t.forEach((p,b)=>Lr(p,e&&(F(e)?e[b]:e),n,s,r));return}if(Bn(s)&&!r)return;const i=s.shapeFlag&4?er(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,d=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ye(c)?(d[c]=null,Q(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),V(l))Ct(l,a,12,[o,d]);else{const p=ye(l),b=pe(l);if(p||b){const x=()=>{if(t.f){const S=p?Q(h,l)?h[l]:d[l]:l.value;r?F(S)&&ti(S,i):F(S)?S.includes(i)||S.push(i):p?(d[l]=[i],Q(h,l)&&(h[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else p?(d[l]=o,Q(h,l)&&(h[l]=o)):b&&(l.value=o,t.k&&(d[t.k]=o))};o?(x.id=-1,Oe(x,n)):x()}}}const Oe=Au;function ad(t){return ld(t)}function ld(t,e){const n=Lc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:h,nextSibling:p,setScopeId:b=Ye,insertStaticContent:x}=t,S=(u,f,m,_=null,v=null,I=null,C=!1,E=null,T=!!f.dynamicChildren)=>{if(u===f)return;u&&!Vt(u,f)&&(_=k(u),Ae(u,v,I,!0),u=null),f.patchFlag===-2&&(T=!1,f.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=f;switch(w){case Xs:U(u,f,m,_);break;case He:R(u,f,m,_);break;case Ts:u==null&&B(f,m,_,C);break;case Le:ve(u,f,m,_,v,I,C,E,T);break;default:N&1?K(u,f,m,_,v,I,C,E,T):N&6?Ne(u,f,m,_,v,I,C,E,T):(N&64||N&128)&&w.process(u,f,m,_,v,I,C,E,T,X)}M!=null&&v&&Lr(M,u&&u.ref,I,f||u,!f)},U=(u,f,m,_)=>{if(u==null)s(f.el=a(f.children),m,_);else{const v=f.el=u.el;f.children!==u.children&&c(v,f.children)}},R=(u,f,m,_)=>{u==null?s(f.el=l(f.children||""),m,_):f.el=u.el},B=(u,f,m,_)=>{[u.el,u.anchor]=x(u.children,f,m,_,u.el,u.anchor)},O=({el:u,anchor:f},m,_)=>{let v;for(;u&&u!==f;)v=p(u),s(u,m,_),u=v;s(f,m,_)},W=({el:u,anchor:f})=>{let m;for(;u&&u!==f;)m=p(u),r(u),u=m;r(f)},K=(u,f,m,_,v,I,C,E,T)=>{C=C||f.type==="svg",u==null?ie(f,m,_,v,I,C,E,T):J(u,f,v,I,C,E,T)},ie=(u,f,m,_,v,I,C,E)=>{let T,w;const{type:M,props:N,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=o(u.type,I,N&&N.is,N),L&8?d(T,u.children):L&16&&A(u.children,T,null,_,v,I&&M!=="foreignObject",C,E),G&&Ut(u,null,_,"created"),N){for(const re in N)re!=="value"&&!Es(re)&&i(T,re,null,N[re],I,u.children,_,v,P);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&tt(w,_,u)}z(T,u,u.scopeId,C,_),G&&Ut(u,null,_,"beforeMount");const ae=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;ae&&H.beforeEnter(T),s(T,f,m),((w=N&&N.onVnodeMounted)||ae||G)&&Oe(()=>{w&&tt(w,_,u),ae&&H.enter(T),G&&Ut(u,null,_,"mounted")},v)},z=(u,f,m,_,v)=>{if(m&&b(u,m),_)for(let I=0;I<_.length;I++)b(u,_[I]);if(v){let I=v.subTree;if(f===I){const C=v.vnode;z(u,C,C.scopeId,C.slotScopeIds,v.parent)}}},A=(u,f,m,_,v,I,C,E,T=0)=>{for(let w=T;w<u.length;w++){const M=u[w]=E?vt(u[w]):nt(u[w]);S(null,M,f,m,_,v,I,C,E)}},J=(u,f,m,_,v,I,C)=>{const E=f.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=f;T|=u.patchFlag&16;const N=u.props||ue,L=f.props||ue;let H;m&&$t(m,!1),(H=L.onVnodeBeforeUpdate)&&tt(H,m,f,u),M&&Ut(f,u,m,"beforeUpdate"),m&&$t(m,!0);const G=v&&f.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,E,m,_,G,I):C||se(u,f,E,null,m,_,G,I,!1),T>0){if(T&16)he(E,f,N,L,m,_,v);else if(T&2&&N.class!==L.class&&i(E,"class",null,L.class,v),T&4&&i(E,"style",N.style,L.style,v),T&8){const ae=f.dynamicProps;for(let re=0;re<ae.length;re++){const me=ae[re],Ke=N[me],sn=L[me];(sn!==Ke||me==="value")&&i(E,me,Ke,sn,v,u.children,m,_,P)}}T&1&&u.children!==f.children&&d(E,f.children)}else!C&&w==null&&he(E,f,N,L,m,_,v);((H=L.onVnodeUpdated)||M)&&Oe(()=>{H&&tt(H,m,f,u),M&&Ut(f,u,m,"updated")},_)},Y=(u,f,m,_,v,I,C)=>{for(let E=0;E<f.length;E++){const T=u[E],w=f[E],M=T.el&&(T.type===Le||!Vt(T,w)||T.shapeFlag&70)?h(T.el):m;S(T,w,M,null,_,v,I,C,!0)}},he=(u,f,m,_,v,I,C)=>{if(m!==_){if(m!==ue)for(const E in m)!Es(E)&&!(E in _)&&i(u,E,m[E],null,C,f.children,v,I,P);for(const E in _){if(Es(E))continue;const T=_[E],w=m[E];T!==w&&E!=="value"&&i(u,E,w,T,C,f.children,v,I,P)}"value"in _&&i(u,"value",m.value,_.value)}},ve=(u,f,m,_,v,I,C,E,T)=>{const w=f.el=u?u.el:a(""),M=f.anchor=u?u.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=f;H&&(E=E?E.concat(H):H),u==null?(s(w,m,_),s(M,m,_),A(f.children,m,M,v,I,C,E,T)):N>0&&N&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,m,v,I,C,E),(f.key!=null||v&&f===v.subTree)&&il(u,f,!0)):se(u,f,m,M,v,I,C,E,T)},Ne=(u,f,m,_,v,I,C,E,T)=>{f.slotScopeIds=E,u==null?f.shapeFlag&512?v.ctx.activate(f,m,_,C,T):Ce(f,m,_,v,I,C,T):we(u,f,T)},Ce=(u,f,m,_,v,I,C)=>{const E=u.component=_d(u,_,v);if(Js(u)&&(E.ctx.renderer=X),bd(E),E.asyncDep){if(v&&v.registerDep(E,ge),!u.el){const T=E.subTree=ne(He);R(null,T,f,m)}return}ge(E,u,f,m,v,I,C)},we=(u,f,m)=>{const _=f.component=u.component;if(Cu(u,f,m))if(_.asyncDep&&!_.asyncResolved){oe(_,f,m);return}else _.next=f,Eu(_.update),_.update();else f.el=u.el,_.vnode=f},ge=(u,f,m,_,v,I,C)=>{const E=()=>{if(u.isMounted){let{next:M,bu:N,u:L,parent:H,vnode:G}=u,ae=M,re;$t(u,!1),M?(M.el=G.el,oe(u,M,C)):M=G,N&&Is(N),(re=M.props&&M.props.onVnodeBeforeUpdate)&&tt(re,H,M,G),$t(u,!0);const me=cr(u),Ke=u.subTree;u.subTree=me,S(Ke,me,h(Ke.el),k(Ke),u,v,I),M.el=me.el,ae===null&&Pu(u,me.el),L&&Oe(L,v),(re=M.props&&M.props.onVnodeUpdated)&&Oe(()=>tt(re,H,M,G),v)}else{let M;const{el:N,props:L}=f,{bm:H,m:G,parent:ae}=u,re=Bn(f);if($t(u,!1),H&&Is(H),!re&&(M=L&&L.onVnodeBeforeMount)&&tt(M,ae,f),$t(u,!0),N&&q){const me=()=>{u.subTree=cr(u),q(N,u.subTree,u,v,null)};re?f.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=cr(u);S(null,me,m,_,u,v,I),f.el=me.el}if(G&&Oe(G,v),!re&&(M=L&&L.onVnodeMounted)){const me=f;Oe(()=>tt(M,ae,me),v)}(f.shapeFlag&256||ae&&Bn(ae.vnode)&&ae.vnode.shapeFlag&256)&&u.a&&Oe(u.a,v),u.isMounted=!0,f=m=_=null}},T=u.effect=new ri(E,()=>hi(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,$t(u,!0),w()},oe=(u,f,m)=>{f.component=u;const _=u.vnode.props;u.vnode=f,u.next=null,td(u,f.props,_,m),rd(u,f.children,m),kn(),Xi(),Cn()},se=(u,f,m,_,v,I,C,E,T=!1)=>{const w=u&&u.children,M=u?u.shapeFlag:0,N=f.children,{patchFlag:L,shapeFlag:H}=f;if(L>0){if(L&128){Lt(w,N,m,_,v,I,C,E,T);return}else if(L&256){We(w,N,m,_,v,I,C,E,T);return}}H&8?(M&16&&P(w,v,I),N!==w&&d(m,N)):M&16?H&16?Lt(w,N,m,_,v,I,C,E,T):P(w,v,I,!0):(M&8&&d(m,""),H&16&&A(N,m,_,v,I,C,E,T))},We=(u,f,m,_,v,I,C,E,T)=>{u=u||ln,f=f||ln;const w=u.length,M=f.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const H=f[L]=T?vt(f[L]):nt(f[L]);S(u[L],H,m,null,v,I,C,E,T)}w>M?P(u,v,I,!0,!1,N):A(f,m,_,v,I,C,E,T,N)},Lt=(u,f,m,_,v,I,C,E,T)=>{let w=0;const M=f.length;let N=u.length-1,L=M-1;for(;w<=N&&w<=L;){const H=u[w],G=f[w]=T?vt(f[w]):nt(f[w]);if(Vt(H,G))S(H,G,m,null,v,I,C,E,T);else break;w++}for(;w<=N&&w<=L;){const H=u[N],G=f[L]=T?vt(f[L]):nt(f[L]);if(Vt(H,G))S(H,G,m,null,v,I,C,E,T);else break;N--,L--}if(w>N){if(w<=L){const H=L+1,G=H<M?f[H].el:_;for(;w<=L;)S(null,f[w]=T?vt(f[w]):nt(f[w]),m,G,v,I,C,E,T),w++}}else if(w>L)for(;w<=N;)Ae(u[w],v,I,!0),w++;else{const H=w,G=w,ae=new Map;for(w=G;w<=L;w++){const De=f[w]=T?vt(f[w]):nt(f[w]);De.key!=null&&ae.set(De.key,w)}let re,me=0;const Ke=L-G+1;let sn=!1,Fi=0;const Nn=new Array(Ke);for(w=0;w<Ke;w++)Nn[w]=0;for(w=H;w<=N;w++){const De=u[w];if(me>=Ke){Ae(De,v,I,!0);continue}let et;if(De.key!=null)et=ae.get(De.key);else for(re=G;re<=L;re++)if(Nn[re-G]===0&&Vt(De,f[re])){et=re;break}et===void 0?Ae(De,v,I,!0):(Nn[et-G]=w+1,et>=Fi?Fi=et:sn=!0,S(De,f[et],m,null,v,I,C,E,T),me++)}const Bi=sn?cd(Nn):ln;for(re=Bi.length-1,w=Ke-1;w>=0;w--){const De=G+w,et=f[De],ji=De+1<M?f[De+1].el:_;Nn[w]===0?S(null,et,m,ji,v,I,C,E,T):sn&&(re<0||w!==Bi[re]?ze(et,m,ji,2):re--)}}},ze=(u,f,m,_,v=null)=>{const{el:I,type:C,transition:E,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,f,m,_);return}if(w&128){u.suspense.move(f,m,_);return}if(w&64){C.move(u,f,m,X);return}if(C===Le){s(I,f,m);for(let N=0;N<T.length;N++)ze(T[N],f,m,_);s(u.anchor,f,m);return}if(C===Ts){O(u,f,m);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(I),s(I,f,m),Oe(()=>E.enter(I),v);else{const{leave:N,delayLeave:L,afterLeave:H}=E,G=()=>s(I,f,m),ae=()=>{N(I,()=>{G(),H&&H()})};L?L(I,G,ae):ae()}else s(I,f,m)},Ae=(u,f,m,_=!1,v=!1)=>{const{type:I,props:C,ref:E,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=u;if(E!=null&&Lr(E,null,m,u,!0),M&256){f.ctx.deactivate(u);return}const H=M&1&&L,G=!Bn(u);let ae;if(G&&(ae=C&&C.onVnodeBeforeUnmount)&&tt(ae,f,u),M&6)y(u.component,m,_);else{if(M&128){u.suspense.unmount(m,_);return}H&&Ut(u,null,f,"beforeUnmount"),M&64?u.type.remove(u,f,m,v,X,_):w&&(I!==Le||N>0&&N&64)?P(w,f,m,!1,!0):(I===Le&&N&384||!v&&M&16)&&P(T,f,m),_&&nn(u)}(G&&(ae=C&&C.onVnodeUnmounted)||H)&&Oe(()=>{ae&&tt(ae,f,u),H&&Ut(u,null,f,"unmounted")},m)},nn=u=>{const{type:f,el:m,anchor:_,transition:v}=u;if(f===Le){hs(m,_);return}if(f===Ts){W(u);return}const I=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:E}=v,T=()=>C(m,I);E?E(u.el,I,T):T()}else I()},hs=(u,f)=>{let m;for(;u!==f;)m=p(u),r(u),u=m;r(f)},y=(u,f,m)=>{const{bum:_,scope:v,update:I,subTree:C,um:E}=u;_&&Is(_),v.stop(),I&&(I.active=!1,Ae(C,u,f,m)),E&&Oe(E,f),Oe(()=>{u.isUnmounted=!0},f),f&&f.pendingBranch&&!f.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===f.pendingId&&(f.deps--,f.deps===0&&f.resolve())},P=(u,f,m,_=!1,v=!1,I=0)=>{for(let C=I;C<u.length;C++)Ae(u[C],f,m,_,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),D=(u,f,m)=>{u==null?f._vnode&&Ae(f._vnode,null,null,!0):S(f._vnode||null,u,f,null,null,null,m),Xi(),La(),f._vnode=u},X={p:S,um:Ae,m:ze,r:nn,mt:Ce,mc:A,pc:se,pbc:Y,n:k,o:t};let fe,q;return e&&([fe,q]=e(X)),{render:D,hydrate:fe,createApp:od(D,fe)}}function $t({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function il(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vt(r[i]),a.el=o.el),n||il(o,a)),a.type===Xs&&(a.el=o.el)}}function cd(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const ud=t=>t.__isTeleport,Le=Symbol(void 0),Xs=Symbol(void 0),He=Symbol(void 0),Ts=Symbol(void 0),Hn=[];let Je=null;function de(t=!1){Hn.push(Je=t?null:[])}function dd(){Hn.pop(),Je=Hn[Hn.length-1]||null}let Zn=1;function ao(t){Zn+=t}function ol(t){return t.dynamicChildren=Zn>0?Je||ln:null,dd(),Zn>0&&Je&&Je.push(t),t}function be(t,e,n,s,r,i){return ol(g(t,e,n,s,r,i,!0))}function Qs(t,e,n,s,r){return ol(ne(t,e,n,s,r,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",al=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>t!=null?ye(t)||pe(t)||V(t)?{i:Ie,r:t,k:e,f:!!n}:t:null;function g(t,e=null,n=null,s=0,r=null,i=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&al(e),ref:e&&Ss(e),scopeId:Fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ie};return a?(bi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),Zn>0&&!o&&Je&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Je.push(l),l}const ne=fd;function fd(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ja)&&(t=He),Ms(t)){const a=Nt(t,e,!0);return n&&bi(a,n),Zn>0&&!i&&Je&&(a.shapeFlag&6?Je[Je.indexOf(t)]=a:Je.push(a)),a.patchFlag|=-2,a}if(Id(t)&&(t=t.__vccOpts),e){e=hd(e);let{class:a,style:l}=e;a&&!ye(a)&&(e.class=gn(a)),ce(l)&&(Ca(l)&&!F(l)&&(l=Se({},l)),e.style=Qr(l))}const o=ye(t)?1:Ru(t)?128:ud(t)?64:ce(t)?4:V(t)?2:0;return g(t,e,n,s,r,o,i,!0)}function hd(t){return t?Ca(t)||Zs in t?Se({},t):t:null}function Nt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?pd(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&al(a),ref:e&&e.ref?n&&r?F(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Nt(t.ssContent),ssFallback:t.ssFallback&&Nt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function xe(t=" ",e=0){return ne(Xs,null,t,e)}function _i(t,e){const n=ne(Ts,null,t);return n.staticCount=e,n}function Ge(t="",e=!1){return e?(de(),Qs(He,null,t)):ne(He,null,t)}function nt(t){return t==null||typeof t=="boolean"?ne(He):F(t)?ne(Le,null,t.slice()):typeof t=="object"?vt(t):ne(Xs,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Nt(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zs in e)?e._ctx=Ie:r===3&&Ie&&(Ie.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ie},n=32):(e=String(e),s&64?(n=16,e=[xe(e)]):n=8);t.children=e,t.shapeFlag|=n}function pd(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=gn([e.class,s.class]));else if(r==="style")e.style=Qr([e.style,s.style]);else if(Vs(r)){const i=e[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function tt(t,e,n,s=null){je(t,e,7,[n,s])}const gd=rl();let md=0;function _d(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||gd,i={uid:md++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ga(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:el(s,r),emitsOptions:$a(s,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Tu.bind(null,i),t.ce&&t.ce(i),i}let Ee=null;const ll=()=>Ee||Ie,yn=t=>{Ee=t,t.scope.on()},Jt=()=>{Ee&&Ee.scope.off(),Ee=null};function cl(t){return t.vnode.shapeFlag&4}let es=!1;function bd(t,e=!1){es=e;const{props:n,children:s}=t.vnode,r=cl(t);ed(t,n,r,e),sd(t,s);const i=r?yd(t,e):void 0;return es=!1,i}function yd(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_n(new Proxy(t.ctx,Gu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?wd(t):null;yn(t),kn();const i=Ct(s,t,0,[t.props,r]);if(Cn(),Jt(),fa(i)){if(i.then(Jt,Jt),e)return i.then(o=>{lo(t,o,e)}).catch(o=>{qs(o,t,0)});t.asyncDep=i}else lo(t,i,e)}else ul(t,e)}function lo(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Oa(e)),ul(t,n)}let co;function ul(t,e,n){const s=t.type;if(!t.render){if(!e&&co&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Se(Se({isCustomElement:i,delimiters:a},o),l);s.render=co(r,c)}}t.render=s.render||Ye}yn(t),kn(),Ju(t),Cn(),Jt()}function vd(t){return new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}})}function wd(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=vd(t))},slots:t.slots,emit:t.emit,expose:e}}function er(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Oa(_n(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in jn)return jn[n](t)},has(e,n){return n in e||n in jn}}))}function Ed(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function Id(t){return V(t)&&"__vccOpts"in t}const Ue=(t,e)=>yu(t,e,es);function dl(t,e,n){const s=arguments.length;return s===2?ce(e)&&!F(e)?Ms(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ms(n)&&(n=[n]),ne(t,e,n))}const xd=Symbol(""),Td=()=>it(xd),Sd="3.2.45",kd="http://www.w3.org/2000/svg",Wt=typeof document<"u"?document:null,uo=Wt&&Wt.createElement("template"),Cd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wt.createElementNS(kd,t):Wt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{uo.innerHTML=s?`<svg>${t}</svg>`:t;const a=uo.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Pd(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Rd(t,e,n){const s=t.style,r=ye(n);if(n&&!r){for(const i in n)Ur(s,i,n[i]);if(e&&!ye(e))for(const i in e)n[i]==null&&Ur(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const fo=/\s*!important$/;function Ur(t,e,n){if(F(n))n.forEach(s=>Ur(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Ad(t,e);fo.test(n)?t.setProperty(Sn(s),n.replace(fo,""),"important"):t[s]=n}}const ho=["Webkit","Moz","ms"],fr={};function Ad(t,e){const n=fr[e];if(n)return n;let s=lt(e);if(s!=="filter"&&s in t)return fr[e]=s;s=zs(s);for(let r=0;r<ho.length;r++){const i=ho[r]+s;if(i in t)return fr[e]=i}return e}const po="http://www.w3.org/1999/xlink";function Od(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(po,e.slice(6,e.length)):t.setAttributeNS(po,e,n);else{const i=Cc(e);n==null||i&&!ua(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Nd(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ua(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function dt(t,e,n,s){t.addEventListener(e,n,s)}function Dd(t,e,n,s){t.removeEventListener(e,n,s)}function Md(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Ld(e);if(s){const c=i[e]=Fd(s,r);dt(t,a,c,l)}else o&&(Dd(t,a,o,l),i[e]=void 0)}}const go=/(?:Once|Passive|Capture)$/;function Ld(t){let e;if(go.test(t)){e={};let s;for(;s=t.match(go);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sn(t.slice(2)),e]}let hr=0;const Ud=Promise.resolve(),$d=()=>hr||(Ud.then(()=>hr=0),hr=Date.now());function Fd(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;je(Bd(s,n.value),e,5,[s])};return n.value=t,n.attached=$d(),n}function Bd(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const mo=/^on[a-z]/,jd=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?Pd(t,s,r):e==="style"?Rd(t,n,s):Vs(e)?ei(e)||Md(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hd(t,e,s,r))?Nd(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Od(t,e,s,r))};function Hd(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&mo.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||mo.test(e)&&ye(n)?!1:e in t}const Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Mu.props;const Dt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Is(e,n):e};function Wd(t){t.target.composing=!0}function _o(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Dt(r);const i=s||r.props&&r.props.type==="number";dt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Jn(a)),t._assign(a)}),n&&dt(t,"change",()=>{t.value=t.value.trim()}),e||(dt(t,"compositionstart",Wd),dt(t,"compositionend",_o),dt(t,"change",_o))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Dt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Jn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},zd={deep:!0,created(t,e,n){t._assign=Dt(n),dt(t,"change",()=>{const s=t._modelValue,r=vn(t),i=t.checked,o=t._assign;if(F(s)){const a=Zr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(Tn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(fl(t,i))})},mounted:bo,beforeUpdate(t,e,n){t._assign=Dt(n),bo(t,e,n)}};function bo(t,{value:e,oldValue:n},s){t._modelValue=e,F(e)?t.checked=Zr(e,s.props.value)>-1:Tn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Xt(e,fl(t,!0)))}const Kd={created(t,{value:e},n){t.checked=Xt(e,n.props.value),t._assign=Dt(n),dt(t,"change",()=>{t._assign(vn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Dt(s),e!==n&&(t.checked=Xt(e,s.props.value))}},yi={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=Tn(e);dt(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Jn(vn(o)):vn(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Dt(s)},mounted(t,{value:e}){yo(t,e)},beforeUpdate(t,e,n){t._assign=Dt(n)},updated(t,{value:e}){yo(t,e)}};function yo(t,e){const n=t.multiple;if(!(n&&!F(e)&&!Tn(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=vn(i);if(n)F(e)?i.selected=Zr(e,o)>-1:i.selected=e.has(o);else if(Xt(vn(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function vn(t){return"_value"in t?t._value:t.value}function fl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $r={created(t,e,n){vs(t,e,n,null,"created")},mounted(t,e,n){vs(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){vs(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){vs(t,e,n,s,"updated")}};function qd(t,e){switch(t){case"SELECT":return yi;case"TEXTAREA":return rt;default:switch(e){case"checkbox":return zd;case"radio":return Kd;default:return rt}}}function vs(t,e,n,s,r){const o=qd(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Gd=["ctrl","shift","alt","meta"],Jd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Gd.some(n=>t[`${n}Key`]&&!e.includes(n))},Vy=(t,e)=>(n,...s)=>{for(let r=0;r<e.length;r++){const i=Jd[e[r]];if(i&&i(n,e))return}return t(n,...s)},zt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Dn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Dn(t,!0),s.enter(t)):s.leave(t,()=>{Dn(t,!1)}):Dn(t,e))},beforeUnmount(t,{value:e}){Dn(t,e)}};function Dn(t,e){t.style.display=e?t._vod:"none"}const Yd=Se({patchProp:jd},Cd);let vo;function Xd(){return vo||(vo=ad(Yd))}const Qd=(...t)=>{const e=Xd().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Zd(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Zd(t){return ye(t)?document.querySelector(t):t}var ef=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let hl;const tr=t=>hl=t,pl=Symbol();function Fr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Vn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vn||(Vn={}));function tf(){const t=ma(!0),e=t.run(()=>ui({}));let n=[],s=[];const r=_n({install(i){tr(r),r._a=i,i.provide(pl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!ef?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const gl=()=>{};function wo(t,e,n,s=gl){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&$c()&&Fc(r),r}function rn(t,...e){t.slice().forEach(n=>{n(...e)})}function Br(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Fr(r)&&Fr(s)&&t.hasOwnProperty(n)&&!pe(s)&&!kt(s)?t[n]=Br(r,s):t[n]=s}return t}const nf=Symbol();function sf(t){return!Fr(t)||!t.hasOwnProperty(nf)}const{assign:wt}=Object;function rf(t){return!!(pe(t)&&t.effect)}function of(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const d=gu(n.state.value[t]);return wt(d,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=_n(Ue(()=>{tr(n);const b=n._s.get(t);return o[p].call(b,b)})),h),{}))}return l=ml(t,c,e,n,s,!0),l.$reset=function(){const h=r?r():{};this.$patch(p=>{wt(p,h)})},l}function ml(t,e,n={},s,r,i){let o;const a=wt({actions:{}},n),l={deep:!0};let c,d,h=_n([]),p=_n([]),b;const x=s.state.value[t];!i&&!x&&(s.state.value[t]={}),ui({});let S;function U(z){let A;c=d=!1,typeof z=="function"?(z(s.state.value[t]),A={type:Vn.patchFunction,storeId:t,events:b}):(Br(s.state.value[t],z),A={type:Vn.patchObject,payload:z,storeId:t,events:b});const J=S=Symbol();fi().then(()=>{S===J&&(c=!0)}),d=!0,rn(h,A,s.state.value[t])}const R=gl;function B(){o.stop(),h=[],p=[],s._s.delete(t)}function O(z,A){return function(){tr(s);const J=Array.from(arguments),Y=[],he=[];function ve(we){Y.push(we)}function Ne(we){he.push(we)}rn(p,{args:J,name:z,store:K,after:ve,onError:Ne});let Ce;try{Ce=A.apply(this&&this.$id===t?this:K,J)}catch(we){throw rn(he,we),we}return Ce instanceof Promise?Ce.then(we=>(rn(Y,we),we)).catch(we=>(rn(he,we),Promise.reject(we))):(rn(Y,Ce),Ce)}}const W={_p:s,$id:t,$onAction:wo.bind(null,p),$patch:U,$reset:R,$subscribe(z,A={}){const J=wo(h,z,A.detached,()=>Y()),Y=o.run(()=>Fn(()=>s.state.value[t],he=>{(A.flush==="sync"?d:c)&&z({storeId:t,type:Vn.direct,events:b},he)},wt({},l,A)));return J},$dispose:B},K=Pn(W);s._s.set(t,K);const ie=s._e.run(()=>(o=ma(),o.run(()=>e())));for(const z in ie){const A=ie[z];if(pe(A)&&!rf(A)||kt(A))i||(x&&sf(A)&&(pe(A)?A.value=x[z]:Br(A,x[z])),s.state.value[t][z]=A);else if(typeof A=="function"){const J=O(z,A);ie[z]=J,a.actions[z]=A}}return wt(K,ie),wt(Z(K),ie),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:z=>{U(A=>{wt(A,z)})}}),s._p.forEach(z=>{wt(K,o.run(()=>z({store:K,app:s._a,pinia:s,options:a})))}),x&&i&&n.hydrate&&n.hydrate(K.$state,x),c=!0,d=!0,K}function af(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=ll();return a=a||c&&it(pl,null),a&&tr(a),a=hl,a._s.has(s)||(i?ml(s,e,r,a):of(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _l=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},lf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},bl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,b=c&63;l||(b=64,o||(p=64)),s.push(n[d],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_l(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):lf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const b=a<<4&240|c>>2;if(s.push(b),h!==64){const x=c<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},cf=function(t){const e=_l(t);return bl.encodeByteArray(e,!0)},yl=function(t){return cf(t).replace(/\./g,"")},vl=function(t){try{return bl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function uf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const df=()=>uf().__FIREBASE_DEFAULTS__,ff=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},hf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vl(t[1]);return e&&JSON.parse(e)},vi=()=>{try{return df()||ff()||hf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pf=t=>{var e,n;return(n=(e=vi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gf=()=>{var t;return(t=vi())===null||t===void 0?void 0:t.config},wl=t=>{var e;return(e=vi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _f(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function bf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function yf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function vf(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wf(){try{return typeof indexedDB=="object"}catch{return!1}}function Ef(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const If="FirebaseError";class Mt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=If,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?xf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Mt(r,a,s)}}function xf(t,e){return t.replace(Tf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Tf=/\{\$([^}]+)}/g;function Sf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Eo(i)&&Eo(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Eo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Un(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function $n(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kf(t,e){const n=new Cf(t,e);return n.subscribe.bind(n)}class Cf{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Pf(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pr),r.error===void 0&&(r.error=pr),r.complete===void 0&&(r.complete=pr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Pf(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pr(){}/**
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
 */function Qe(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class Rf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new mf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Of(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Af(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Af(t){return t===jt?void 0:t}function Of(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Rf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(le||(le={}));const Df={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},Mf=le.INFO,Lf={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Uf=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Lf[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class El{constructor(e){this.name=e,this._logLevel=Mf,this._logHandler=Uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Df[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const $f=(t,e)=>e.some(n=>t instanceof n);let Io,xo;function Ff(){return Io||(Io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bf(){return xo||(xo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,jr=new WeakMap,xl=new WeakMap,gr=new WeakMap,wi=new WeakMap;function jf(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Il.set(n,t)}).catch(()=>{}),wi.set(e,t),e}function Hf(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vf(t){Hr=t(Hr)}function Wf(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mr(this),e,...n);return xl.set(s,e.sort?e.sort():[e]),Pt(s)}:Bf().includes(t)?function(...e){return t.apply(mr(this),e),Pt(Il.get(this))}:function(...e){return Pt(t.apply(mr(this),e))}}function zf(t){return typeof t=="function"?Wf(t):(t instanceof IDBTransaction&&Hf(t),$f(t,Ff())?new Proxy(t,Hr):t)}function Pt(t){if(t instanceof IDBRequest)return jf(t);if(gr.has(t))return gr.get(t);const e=zf(t);return e!==t&&(gr.set(t,e),wi.set(e,t)),e}const mr=t=>wi.get(t);function Kf(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const qf=["get","getKey","getAll","getAllKeys","count"],Gf=["put","add","delete","clear"],_r=new Map;function To(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_r.get(e))return _r.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Gf.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||qf.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return _r.set(e,i),i}Vf(t=>({...t,get:(e,n,s)=>To(e,n)||t.get(e,n,s),has:(e,n)=>!!To(e,n)||t.has(e,n)}));/**
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
 */class Jf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yf(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Yf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vr="@firebase/app",So="0.9.3";/**
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
 */const Qt=new El("@firebase/app"),Xf="@firebase/app-compat",Qf="@firebase/analytics-compat",Zf="@firebase/analytics",eh="@firebase/app-check-compat",th="@firebase/app-check",nh="@firebase/auth",sh="@firebase/auth-compat",rh="@firebase/database",ih="@firebase/database-compat",oh="@firebase/functions",ah="@firebase/functions-compat",lh="@firebase/installations",ch="@firebase/installations-compat",uh="@firebase/messaging",dh="@firebase/messaging-compat",fh="@firebase/performance",hh="@firebase/performance-compat",ph="@firebase/remote-config",gh="@firebase/remote-config-compat",mh="@firebase/storage",_h="@firebase/storage-compat",bh="@firebase/firestore",yh="@firebase/firestore-compat",vh="firebase",wh="9.17.1";/**
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
 */const Wr="[DEFAULT]",Eh={[Vr]:"fire-core",[Xf]:"fire-core-compat",[Zf]:"fire-analytics",[Qf]:"fire-analytics-compat",[th]:"fire-app-check",[eh]:"fire-app-check-compat",[nh]:"fire-auth",[sh]:"fire-auth-compat",[rh]:"fire-rtdb",[ih]:"fire-rtdb-compat",[oh]:"fire-fn",[ah]:"fire-fn-compat",[lh]:"fire-iid",[ch]:"fire-iid-compat",[uh]:"fire-fcm",[dh]:"fire-fcm-compat",[fh]:"fire-perf",[hh]:"fire-perf-compat",[ph]:"fire-rc",[gh]:"fire-rc-compat",[mh]:"fire-gcs",[_h]:"fire-gcs-compat",[bh]:"fire-fst",[yh]:"fire-fst-compat","fire-js":"fire-js",[vh]:"fire-js-all"};/**
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
 */const Us=new Map,zr=new Map;function Ih(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ts(t){const e=t.name;if(zr.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of Us.values())Ih(n,t);return!0}function Tl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const xh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new as("app","Firebase",xh);/**
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
 */class Th{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=wh;function Sl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=gf()),!n)throw Rt.create("no-options");const i=Us.get(r);if(i){if(Ls(n,i.options)&&Ls(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new Nf(r);for(const l of zr.values())o.addComponent(l);const a=new Th(n,s,o);return Us.set(r,a),a}function Sh(t=Wr){const e=Us.get(t);if(!e&&t===Wr)return Sl();if(!e)throw Rt.create("no-app",{appName:t});return e}function fn(t,e,n){var s;let r=(s=Eh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}ts(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const kh="firebase-heartbeat-database",Ch=1,ns="firebase-heartbeat-store";let br=null;function kl(){return br||(br=Kf(kh,Ch,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ns)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),br}async function Ph(t){try{return(await kl()).transaction(ns).objectStore(ns).get(Cl(t))}catch(e){if(e instanceof Mt)Qt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function ko(t,e){try{const s=(await kl()).transaction(ns,"readwrite");return await s.objectStore(ns).put(e,Cl(t)),s.done}catch(n){if(n instanceof Mt)Qt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function Cl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Rh=1024,Ah=30*24*60*60*1e3;class Oh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Dh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ah}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:n,unsentEntries:s}=Nh(this._heartbeatsCache.heartbeats),r=yl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Co(){return new Date().toISOString().substring(0,10)}function Nh(t,e=Rh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Po(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Po(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wf()?Ef().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ph(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ko(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return ko(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Po(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Mh(t){ts(new wn("platform-logger",e=>new Jf(e),"PRIVATE")),ts(new wn("heartbeat",e=>new Oh(e),"PRIVATE")),fn(Vr,So,t),fn(Vr,So,"esm2017"),fn("fire-js","")}Mh("");function Ei(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lh=Pl,Rl=new as("auth","Firebase",Pl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new El("@firebase/auth");function ks(t,...e){Ro.logLevel<=le.ERROR&&Ro.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw Ii(t,...e)}function ot(t,...e){return Ii(t,...e)}function Al(t,e,n){const s=Object.assign(Object.assign({},Lh()),{[e]:n});return new as("auth","Firebase",s).create(e,{appName:t.name})}function Uh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ve(t,"argument-error"),Al(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ii(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Rl.create(t,...e)}function $(t,e,...n){if(!t)throw Ii(e,...n)}function ft(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ks(e),new Error(e)}function gt(t,e){t||ft(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $h(t,e){const n=Tl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ls(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Fh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Bh(){return Oo()==="http:"||Oo()==="https:"}function Oo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Bh()||bf()||"connection"in navigator)?navigator.onLine:!0}function Hh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=_f()||yf()}get(){return jh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ol{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ft("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ft("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ft("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh=new cs(3e4,6e4);function Rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tn(t,e,n,s,r={}){return Nl(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ls(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Ol.fetch()(Dl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Nl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Vh),e);try{const r=new zh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ws(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ws(t,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Al(t,d,c);Ve(t,d)}}catch(r){if(r instanceof Mt)throw r;Ve(t,"network-request-failed")}}async function us(t,e,n,s,r={}){const i=await tn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Dl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?xi(t.config,r):`${t.config.apiScheme}://${r}`}class zh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ot(this.auth,"network-request-failed")),Wh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=ot(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(t,e){return tn(t,"POST","/v1/accounts:delete",e)}async function qh(t,e){return tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gh(t,e=!1){const n=Qe(t),s=await n.getIdToken(e),r=Ti(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Wn(yr(r.auth_time)),issuedAtTime:Wn(yr(r.iat)),expirationTime:Wn(yr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yr(t){return Number(t)*1e3}function Ti(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const r=vl(n);return r?JSON.parse(r):(ks("Failed to decode base64 JWT payload"),null)}catch(r){return ks("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Jh(t){const e=Ti(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function En(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Mt&&Yh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Yh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function $s(t){var e;const n=t.auth,s=await t.getIdToken(),r=await En(t,qh(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ep(i.providerUserInfo):[],a=Zh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ml(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function Qh(t){const e=Qe(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ep(t){return t.map(e=>{var{providerId:n}=e,s=Ei(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tp(t,e){const n=await Nl(t,{},async()=>{const s=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Dl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ol.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Jh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await tp(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ss;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return ft("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=Ei(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ml(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await En(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gh(this,e)}reload(){return Qh(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await En(this,Kh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,d;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:O,emailVerified:W,isAnonymous:K,providerData:ie,stsTokenManager:z}=n;$(O&&z,e,"internal-error");const A=ss.fromJSON(this.name,z);$(typeof O=="string",e,"internal-error"),bt(h,e.name),bt(p,e.name),$(typeof W=="boolean",e,"internal-error"),$(typeof K=="boolean",e,"internal-error"),bt(b,e.name),bt(x,e.name),bt(S,e.name),bt(U,e.name),bt(R,e.name),bt(B,e.name);const J=new Yt({uid:O,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:b,tenantId:S,stsTokenManager:A,createdAt:R,lastLoginAt:B});return ie&&Array.isArray(ie)&&(J.providerData=ie.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new ss;r.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $s(i),i}}/**
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
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(ht(No),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ht(No);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=Yt._fromJSON(e,d);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new hn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ul(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jl(e))return"Blackberry";if(Hl(e))return"Webos";if(Si(e))return"Safari";if((e.includes("chrome/")||$l(e))&&!e.includes("edge/"))return"Chrome";if(Bl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ul(t=ke()){return/firefox\//i.test(t)}function Si(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $l(t=ke()){return/crios\//i.test(t)}function Fl(t=ke()){return/iemobile/i.test(t)}function Bl(t=ke()){return/android/i.test(t)}function jl(t=ke()){return/blackberry/i.test(t)}function Hl(t=ke()){return/webos/i.test(t)}function sr(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function np(t=ke()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sp(){return vf()&&document.documentMode===10}function Vl(t=ke()){return sr(t)||Bl(t)||Hl(t)||jl(t)||/windows phone/i.test(t)||Fl(t)}function rp(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wl(t,e=[]){let n;switch(t){case"Browser":n=Do(ke());break;case"Worker":n=`${Do(ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class ip{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Mo(this),this.idTokenSubscription=new Mo(this),this.beforeStateQueue=new ip(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $s(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Qe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ht(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function An(t){return Qe(t)}class Mo{constructor(e){this.auth=e,this.observer=null,this.addObserver=kf(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function ap(t,e,n){const s=An(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=zl(e),{host:o,port:a}=lp(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||cp()}function zl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lp(t){const e=zl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Lo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Lo(o)}}}function Lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cp(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ft("not implemented")}_getIdTokenResponse(e){return ft("not implemented")}_linkToIdToken(e,n){return ft("not implemented")}_getReauthenticationResolver(e){return ft("not implemented")}}async function up(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dp(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",Rn(t,e))}async function fp(t,e){return tn(t,"POST","/v1/accounts:sendOobCode",Rn(t,e))}async function hp(t,e){return fp(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}async function gp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs extends ki{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new rs(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new rs(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return dp(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return pp(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return up(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return gp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mp="http://localhost";class Zt extends ki{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=Ei(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:mp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function bp(t){const e=Un($n(t)).link,n=e?Un($n(e)).deep_link_id:null,s=Un($n(t)).deep_link_id;return(s?Un($n(s)).link:null)||s||n||e||t}class Ci{constructor(e){var n,s,r,i,o,a;const l=Un($n(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(s=l.oobCode)!==null&&s!==void 0?s:null,h=_p((r=l.mode)!==null&&r!==void 0?r:null);$(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=bp(e);try{return new Ci(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ds extends Pi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ds{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.FACEBOOK_SIGN_IN_METHOD="facebook.com";It.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Re.credential(n,s)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ds{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xt.credential(e.oauthAccessToken)}catch{return null}}}xt.GITHUB_SIGN_IN_METHOD="github.com";xt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends ds{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Tt.credential(n,s)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yp(t,e){return us(t,"POST","/v1/accounts:signUp",Rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Yt._fromIdTokenResponse(e,s,r),o=Uo(s);return new en({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Uo(s);return new en({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Mt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Fs(e,n,s,r)}}function Kl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(t,i,e,s):i})}async function vp(t,e,n=!1){const s=await En(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",s)}/**
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
 */async function wp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await En(t,Kl(s,r,e,t),n);$(i.idToken,s,"internal-error");const o=Ti(i.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(t.uid===a,s,"user-mismatch"),en._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ql(t,e,n=!1){const s="signIn",r=await Kl(t,s,e),i=await en._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function Ep(t,e){return ql(An(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t,e,n){var s;$(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gl(t,e,n){const s=Qe(t),r={requestType:"PASSWORD_RESET",email:e};n&&Ip(s,r,n),await hp(s,r)}async function xp(t,e,n){const s=An(t),r=await yp(s,{returnSecureToken:!0,email:e,password:n}),i=await en._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function Tp(t,e,n){return Ep(Qe(t),On.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Qe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await En(s,Sp(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function Cp(t,e,n,s){return Qe(t).onIdTokenChanged(e,n,s)}function Pp(t,e,n){return Qe(t).beforeAuthStateChanged(e,n)}function Rp(t,e,n,s){return Qe(t).onAuthStateChanged(e,n,s)}function Wy(t){return Qe(t).signOut()}const Bs="__sak";/**
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
 */class Jl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bs,"1"),this.storage.removeItem(Bs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(){const t=ke();return Si(t)||sr(t)}const Op=1e3,Np=10;class Yl extends Jl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ap()&&rp(),this.fallbackToPolling=Vl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);sp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Np):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Op)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Yl.type="LOCAL";const Dp=Yl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl extends Jl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xl.type="SESSION";const Ql=Xl;/**
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
 */function Mp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Mp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Lp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Ri("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function Up(t){at().location.href=t}/**
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
 */function Zl(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function $p(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Fp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Bp(){return Zl()?self:null}/**
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
 */const ec="firebaseLocalStorageDb",jp=1,js="firebaseLocalStorage",tc="fbase_key";class fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ir(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function Hp(){const t=indexedDB.deleteDatabase(ec);return new fs(t).toPromise()}function qr(){const t=indexedDB.open(ec,jp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(js,{keyPath:tc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(js)?e(s):(s.close(),await Hp(),e(await qr()))})})}async function $o(t,e,n){const s=ir(t,!0).put({[tc]:e,value:n});return new fs(s).toPromise()}async function Vp(t,e){const n=ir(t,!1).get(e),s=await new fs(n).toPromise();return s===void 0?null:s.value}function Fo(t,e){const n=ir(t,!0).delete(e);return new fs(n).toPromise()}const Wp=800,zp=3;class nc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>zp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(Bp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $p(),!this.activeServiceWorker)return;this.sender=new Lp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Fp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await $o(e,Bs,"1"),await Fo(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$o(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Vp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ir(r,!1).getAll();return new fs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nc.type="LOCAL";const Kp=nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=ot("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",qp().appendChild(s)})}function Jp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new cs(3e4,6e4);/**
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
 */function sc(t,e){return e?ht(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ai extends ki{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yp(t){return ql(t.auth,new Ai(t),t.bypassAuthState)}function Xp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),wp(n,new Ai(t),t.bypassAuthState)}async function Qp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),vp(n,new Ai(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yp;case"linkViaPopup":case"linkViaRedirect":return Qp;case"reauthViaPopup":case"reauthViaRedirect":return Xp;default:Ve(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=new cs(2e3,1e4);async function ic(t,e,n){const s=An(t);Uh(t,e,Pi);const r=sc(s,n);return new qt(s,"signInViaPopup",e,r).executeNotNull()}class qt extends rc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ot(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zp.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg="pendingRedirect",Ps=new Map;class tg extends rc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const s=await ng(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ng(t,e){const n=ig(e),s=rg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function sg(t,e){Ps.set(t._key(),e)}function rg(t){return ht(t._redirectPersistence)}function ig(t){return Cs(eg,t.config.apiKey,t.name)}async function og(t,e,n=!1){const s=An(t),r=sc(s,e),o=await new tg(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=10*60*1e3;class lg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!oc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(ot(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ag&&this.cachedEventUids.clear(),this.cachedEventUids.has(Bo(e))}saveEventToCache(e){this.cachedEventUids.add(Bo(e)),this.lastProcessedEventTime=Date.now()}}function Bo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function oc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ug(t,e={}){return tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fg=/^https?/;async function hg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ug(t);for(const n of e)try{if(pg(n))return}catch{}Ve(t,"unauthorized-domain")}function pg(t){const e=Kr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!fg.test(n))return!1;if(dg.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const gg=new cs(3e4,6e4);function jo(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mg(t){return new Promise((e,n)=>{var s,r,i;function o(){jo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jo(),n(ot(t,"network-request-failed"))},timeout:gg.get()})}if(!((r=(s=at().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=at().gapi)===null||i===void 0)&&i.load)o();else{const a=Jp("iframefcb");return at()[a]=()=>{gapi.load?o():n(ot(t,"network-request-failed"))},Gp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function _g(t){return Rs=Rs||mg(t),Rs}/**
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
 */const bg=new cs(5e3,15e3),yg="__/auth/iframe",vg="emulator/auth/iframe",wg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Eg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ig(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xi(e,vg):`https://${t.config.authDomain}/${yg}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=Eg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ls(s).slice(1)}`}async function xg(t){const e=await _g(t),n=at().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:Ig(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:wg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=ot(t,"network-request-failed"),a=at().setTimeout(()=>{i(o)},bg.get());function l(){at().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sg=500,kg=600,Cg="_blank",Pg="http://localhost";class Ho{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Rg(t,e,n,s=Sg,r=kg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Tg),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ke().toLowerCase();n&&(a=$l(c)?Cg:n),Ul(c)&&(e=e||Pg,l.scrollbars="yes");const d=Object.entries(l).reduce((p,[b,x])=>`${p}${b}=${x},`,"");if(np(c)&&a!=="_self")return Ag(e||"",a),new Ho(null);const h=window.open(e||"",a,d);$(h,t,"popup-blocked");try{h.focus()}catch{}return new Ho(h)}function Ag(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Og="__/auth/handler",Ng="emulator/auth/handler";function Vo(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof Pi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Sf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof ds){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Dg(t)}?${ls(a).slice(1)}`}function Dg({config:t}){return t.emulator?xi(t,Ng):`https://${t.authDomain}/${Og}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="webStorageSupport";class Mg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ql,this._completeRedirectFn=og,this._overrideRedirectResult=sg}async _openPopup(e,n,s,r){var i;gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Vo(e,n,s,Kr(),r);return Rg(e,o,Ri())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Up(Vo(e,n,s,Kr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(gt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xg(e),s=new lg(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vr,{type:vr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[vr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=hg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Vl()||Si()||sr()}}const Lg=Mg;var Wo="@firebase/auth",zo="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Fg(t){ts(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wl(t)},d=new op(a,l,c);return Fh(d,n),d})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ts(new wn("auth-internal",e=>{const n=An(e.getProvider("auth").getImmediate());return(s=>new Ug(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Wo,zo,$g(t)),fn(Wo,zo,"esm2017")}/**
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
 */const Bg=5*60,jg=wl("authIdTokenMaxAge")||Bg;let Ko=null;const Hg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>jg)return;const r=n==null?void 0:n.token;Ko!==r&&(Ko=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function At(t=Sh()){const e=Tl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$h(t,{popupRedirectResolver:Lg,persistence:[Kp,Dp,Ql]}),s=wl("authTokenSyncURL");if(s){const i=Hg(s);Pp(n,i,()=>i(n.currentUser)),Cp(n,o=>i(o))}const r=pf("auth");return r&&ap(n,`http://${r}`),n}Fg("Browser");const ee=af("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",loggedIn:!1,uid:"",name:"",email:"",data:{},dataOpt:{},cart:{},lang:"ru",langProp:{},number:"",address:"",delivery:"",blog:{},payment:"",orders:{}}),getters:{},actions:{sum(){let t=0;for(let e in this.cart)console.log(this.cart[e].price),t+=this.cart[e].price*this.cart[e].quantity;return t},sumItem(t){return this.cart[t].quantity*this.cart[t].price},async process(){let t=await fetch(`/api/language/?lang=${this.lang}`);this.langProp=await t.json()},async checkStatus(){return new Promise((t,e)=>{const n=At();Rp(n,s=>{s&&(this.loggedIn=!0,this.uid=s.uid,this.name=s.displayName,this.email=s.email),t(s)})})},async getData(){try{let t=await fetch("/api/productsList");this.data=await t.json(),t=await fetch("/api/productsListOpt"),this.dataOpt=await t.json(),t=await fetch("/api/blog"),this.blog=await t.json(),t=await fetch(`/api/userInfo?user=${this.uid}`);let e=await t.json();console.log(e),e.address&&(this.address=e.address),e.phone&&(this.number=e.phone),e.delivery&&(this.delivery=e.delivery)}catch(t){console.log(t)}},async getOrders(){if(this.uid!="")try{let t=await fetch(`/api/getOrders?user=${this.uid}`);this.orders=await t.json(),console.log(this.orders)}catch(t){console.log(t)}},async getCart(){this.cart={};try{let e=await(await fetch("/api/usersCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:this.uid})})).json();e=JSON.parse(e.orders);for(let n in e){console.log(n);let s;try{s=JSON.parse(JSON.stringify(this.data[e[n].id])),s.quantity=e[n].quantity,console.log(s),this.cart[s.id]=s}catch(r){console.log(r),s=JSON.parse(JSON.stringify(this.dataOpt[e[n].id])),s.quantity=e[n].quantity,this.cart[s.id]=s}}}catch(t){localStorage.getItem("cart")!=null&&(this.cart=JSON.parse(localStorage.getItem("cart"))),console.log(t)}}},persist:{storage:localStorage,paths:["delivery"]}});var Vg="firebase",Wg="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(Vg,Wg,"app");const Oi="/assets/Telegram-c178456d.svg",Ni="/assets/WhatsApp-64705ce5.svg",Di="/assets/Instagram-d32ffc78.svg",Ze=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},zg={props:{buttonName:String},data:()=>({contact:!1,store:ee()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},Kg={class:"grid [&_*]:font-roboto"},qg={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1 max-[700px]:text-[30px]"},Gg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Jg=g("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Yg={class:"grid grid-cols-2 max-[700px]:grid-cols-1"},Xg={class:"text-3xl max-[700px]:text-2xl mb-[5px] font-semibold font-roboto"},Qg={class:"text-2xl max-[700px]:text-xl font-roboto"},Zg={class:"text-2xl max-[7000px]:text-xl mb-[20px] font-roboto"},em={class:"text-3xl max-[700px]:text-2xl mb-[5px] font-roboto font-semibold"},tm=g("p",{class:"text-2xl max-[700px]:text-xl mb-[20px] font-roboto"},"+996779454233",-1),nm={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},sm={class:"text-3xl max-[700px]:text-2xl font-roboto font-semibold"},rm=_i('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline max-[380px]: w-[20px] h-[20px]" src="'+Oi+'" alt=""></a><p class="text-2xl max-[700px]:text-xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline max-[380px]: w-[20px] h-[20px]" src="'+Ni+'" alt=""></a><p class="text-2xl max-[700px]:text-xl">+79146089174</p></div><div class="flex items-center mb-[20px]"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline max-[380px]: w-[20px] h-[20px]" src="'+Di+'" alt=""></a><p class="text-2xl max-[700px]:text-xl font-roboto">crafthoney.kg</p></div>',3),im=g("div",null,[g("p",{class:"text-3xl max-[700px]:text-2xl mb-[5px] font-roboto font-semibold"},"E-mail:"),g("p",{class:"text-2xl max-[700px]:text-xl font-roboto"},"crafthoneykg@gmail.com")],-1);function om(t,e,n,s,r,i){return de(),be("div",Kg,[g("div",qg,[g("span",Gg,j(t.store.langProp.contacts),1),Jg,g("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},j(t.store.langProp.feedback),1)]),g("div",Yg,[g("div",null,[g("p",Xg,j(t.store.langProp.address),1),g("p",Qg,"770033, "+j(t.store.langProp.kyrgyzstan),1),g("p",Zg,j(t.store.langProp.street),1)]),g("div",null,[g("p",em,j(t.store.langProp.telephone),1),tm]),g("div",nm,[g("p",sm,j(t.store.langProp.socialnetworks),1),rm]),im])])}const ac=Ze(zg,[["render",om]]),am="/assets/Register_1-5c661edd.svg",lc="/assets/Enter_1-7f28cdb9.svg",lm={data(){return{store:ee(),lang:ee().lang}}},cm={class:""},um={class:"flex flex-col justify-center [&>*]:px-[10px]"},dm={class:"flex content-center justify-between mt-[8px]"},fm={selected:"",disabled:"",hidden:""},hm=g("option",{value:"ru"},"RU",-1),pm=g("option",{value:"en"},"EN",-1),gm=g("option",{value:"kg"},"KG",-1),mm=g("strong",null,"X",-1),_m=[mm],bm={key:0,class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},ym=g("img",{class:"w-[24px] h-24[px] mr-[10px]",src:am,alt:""},null,-1),vm=g("img",{class:"w-[24px] h-[24px] mr-[10px]",src:lc,alt:""},null,-1),wm={key:1,class:"flex justify-center border-b-[1px] border-[#BCB9B9]"},Em=g("img",{class:"w-[24px] h-[24px] mr-[10px]",src:lc,alt:""},null,-1),Im={class:"my-[20px] px-[10px]"},xm=_i('<div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Di+'" alt=""></a><a href="https://wa.me/79146089174" target="_blank"><img src="'+Ni+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Oi+'" alt=""></a></div></div>',1),Tm={class:"my-[10px]"},Sm={class:"my-[10px]"};function km(t,e,n,s,r,i){const o=bn("router-link");return de(),be("div",cm,[g("div",um,[g("div",dm,[_e(g("select",{onChange:e[0]||(e[0]=a=>t.$router.push(`/${r.store.lang}/${t.$route.path.slice(4,t.$route.path.length)}`)),class:"text-center h-[32px] w-[70px] bg-[#DAE2E2] border-[2px] border-black rounded-xl hover:cursor-pointer hover:text-amber-700 hover:bg-amber-200 underline-offset-4",name:"store.lang",id:"","onUpdate:modelValue":e[1]||(e[1]=a=>r.store.lang=a)},[g("option",fm,j(r.store.lang.toUpperCase()),1),hm,pm,gm],544),[[yi,r.store.lang]]),g("button",{onClick:e[2]||(e[2]=a=>t.$emit("changeBurger")),class:"w-fit focus:outline-none text-[24px] text-right hover:text-amber-700"},_m)]),ne(o,{to:`/${r.store.lang}/Products`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[xe(j(r.store.langProp.catalogue),1)]),_:1},8,["to"]),ne(o,{to:`/${r.store.lang}/About`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[xe(j(r.store.langProp.aboutus),1)]),_:1},8,["to"]),ne(o,{to:`/${r.store.lang}/Blog`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[xe(j(r.store.langProp.blog),1)]),_:1},8,["to"]),g("button",{onClick:e[3]||(e[3]=a=>(r.store.modal=!0,t.$emit("changeBurger"),r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},j(r.store.langProp.contacts),1)]),r.store.loggedIn?Ge("",!0):(de(),be("div",bm,[g("button",{onClick:e[4]||(e[4]=a=>(r.store.bg="bg-bee",r.store.modal=!0,t.$emit("changeBurger"),r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[ym,xe(j(r.store.langProp.registration),1)]),g("button",{onClick:e[5]||(e[5]=a=>(r.store.modal=!0,t.$emit("changeBurger"),r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[vm,xe(j(r.store.langProp.login),1)])])),r.store.loggedIn&&!t.$route.path.includes("Personal")?(de(),be("div",wm,[ne(o,{to:`/${r.lang}/PersonalArea/${r.store.uid}`,class:"border-[2px] border-solid border-black rounded-[8px] my-4 w-[218px] h-[47px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},{default:Be(()=>[Em,xe(j(r.store.langProp.personalarea),1)]),_:1},8,["to"])])):Ge("",!0),g("div",Im,[xm,g("p",Tm,j(r.store.langProp.address+" 770033 "+r.store.langProp.kyrgyzstan+","),1),g("p",Sm,j(r.store.langProp.street),1)])])}const Cm=Ze(lm,[["render",km]]),Pm="/assets/drawing1-9a7198cf.svg",Rm="/assets/CraftHoney-0d412893.svg",cc="/assets/shopping_cart-809c2612.svg",Am="/assets/menu-694c5a76.svg",uc="/assets/account_circle-229cba33.svg",Om={beforeRouteEnter(t,e){},data(){return{burgerMenu:!1,products:"/${store.lang}/Products",store:ee()}},methods:{changeBurger(){this.burgerMenu=!1}},components:{Contacts:ac,Burger:Cm}},Nm={class:"grid grid-flow-col gap-[40px] items-center"},Dm=g("img",{class:"self-center w-[40px] inline",src:Pm},null,-1),Mm=g("img",{class:"ml-[10px] self-center w-[120px] inline",src:Rm},null,-1),Lm={key:0,class:"text-xl [&>a]:mr-[30px] max-[1300px]:hidden"},Um={class:"grid grid-flow-col gap-[20px] min-[1301px]:hidden"},$m={class:"self-center"},Fm={class:"relative"},Bm=g("img",{class:"w-[22px]",src:cc,alt:""},null,-1),jm={key:0,class:"absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center items-center text-white"},Hm={class:"text-[12px]"},Vm={class:"self-center"},Wm={class:"grid grid-flow-col gap-[40px] items-center max-[1300px]:hidden"},zm={key:0,class:"flex items-center"},Km=g("img",{class:"mr-[10px] w-[24px]",src:uc},null,-1),qm={key:1,class:"flex items-center"},Gm=g("img",{class:"mr-[10px] w-[24px]",src:uc},null,-1),Jm={class:"relative"},Ym=g("img",{class:"w-[22px]",src:cc,alt:""},null,-1),Xm={key:0,class:"absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center items-center text-white"},Qm={class:"text-[12px]"},Zm={class:"text-xl [&_*]:text-center"},e_={selected:"",disabled:"",hidden:""},t_=g("option",{value:"ru"},"RU",-1),n_=g("option",{value:"en"},"EN",-1),s_=g("option",{value:"kg"},"KG",-1),r_=_i('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Ni+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Di+'" alt=""></a></div>',1);function i_(t,e,n,s,r,i){const o=bn("router-link"),a=bn("Burger");return de(),be("header",{class:gn([{"border-black border-b-[3px] pb-[20px]":!t.$route.path.includes("Home")},"bg-white flex justify-between mt-[10px] pb-[10px] max-[800px]:grid-cols-1"])},[g("div",Nm,[g("div",null,[ne(o,{class:"flex max-w-fit",to:`/${r.store.lang}/Home`},{default:Be(()=>[Dm,Mm]),_:1},8,["to"])]),t.$route.path.includes("Home")?Ge("",!0):(de(),be("div",Lm,[ne(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/Products`},{default:Be(()=>{var l,c;return[xe(j((c=(l=r.store)==null?void 0:l.langProp)==null?void 0:c.catalogue),1)]}),_:1},8,["to"]),ne(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/About`},{default:Be(()=>[xe(j(r.store.langProp.about),1)]),_:1},8,["to"]),ne(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/Blog`},{default:Be(()=>[xe(j(r.store.langProp.blog),1)]),_:1},8,["to"]),g("button",{class:"hover:text-amber-700 hover:underline underline-offset-4",onClick:e[0]||(e[0]=l=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},j(r.store.langProp.contacts),1)]))]),g("div",Um,[g("div",$m,[ne(o,{to:`/${r.store.lang}/Checkout`},{default:Be(()=>[g("div",Fm,[Bm,Object.keys(r.store.cart).length?(de(),be("div",jm,[g("span",Hm,j(Object.keys(r.store.cart).length),1)])):Ge("",!0)])]),_:1},8,["to"])]),g("div",Vm,[g("img",{onClick:e[1]||(e[1]=l=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:Am})])]),g("div",Wm,[!r.store.loggedIn&&!t.$route.path.includes("Personal")?(de(),be("div",zm,[Km,g("button",{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",onClick:e[2]||(e[2]=l=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},j(r.store.langProp.login),1)])):Ge("",!0),r.store.loggedIn&&!t.$route.path.includes("Personal")?(de(),be("div",qm,[Gm,ne(o,{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/PersonalArea/${r.store.uid}`},{default:Be(()=>[xe(j(r.store.langProp.personalarea),1)]),_:1},8,["to"])])):Ge("",!0),g("div",null,[ne(o,{to:`/${r.store.lang}/Checkout`},{default:Be(()=>[g("div",Jm,[Ym,Object.keys(r.store.cart).length?(de(),be("div",Xm,[g("span",Qm,j(Object.keys(r.store.cart).length),1)])):Ge("",!0)])]),_:1},8,["to"])]),g("div",null,[g("p",Zm,[xe(j(r.store.langProp.lang)+": ",1),_e(g("select",{onChange:e[3]||(e[3]=l=>t.$router.push(`/${r.store.lang}/${t.$route.path.slice(4,t.$route.path.length)}`)),class:"ml-[8px] h-[32px] w-[70px] bg-[#ffcc00] rounded-xl hover:cursor-pointer hover:text-amber-700 hover:bg-amber-200 underline-offset-4",name:"store.lang",id:"","onUpdate:modelValue":e[4]||(e[4]=l=>r.store.lang=l)},[g("option",e_,j(r.store.lang.toUpperCase()),1),t_,n_,s_],544),[[yi,r.store.lang]])])]),r_]),g("div",{class:gn(["overflow-scroll scrollClass fixed right-0 top-0 transition-all duration-500 ease-in-out z-50 h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[300px]":"w-[0px]"])},[ne(a,{onChangeBurger:i.changeBurger},null,8,["onChangeBurger"])],2)],2)}const o_=Ze(Om,[["render",i_]]),a_={props:{buttonName:String},data:()=>({feedback:!1,name:"",mail:"",phone:"",message:"",store:ee()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.name="",this.phone="",this.mail="",this.message=""},handleInput(){this.phone=this.phone.replace(/[^0-9+]/g,"")},sendMail(){fetch(`/api/mail/?name=${this.name}&mail=${this.mail}&phone=${this.phone}&message=${this.message}`)}}},l_={class:"grid grid-flow-row gap-y-[20px] mb-[60px] [&_input]:h-[60px]"},c_={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},u_=g("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),d_={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center max-[550px]:text-2xl"},f_=["placeholder"],h_={class:"grid grid-cols-2 gap-[20px]"},p_=["placeholder"],g_={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},m_=["disabled"];function __(t,e,n,s,r,i){return de(),be("div",l_,[g("div",c_,[g("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white max-[550px]:text-2xl"},j(t.store.langProp.contacts),1),u_,g("span",d_,j(t.store.langProp.feedback),1)]),g("div",null,[_e(g("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.name=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center w-full",type:"text",placeholder:t.store.langProp.yourname},null,8,f_),[[rt,t.name]])]),g("div",h_,[_e(g("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.mail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[rt,t.mail]]),_e(g("input",{onInput:e[3]||(e[3]=(...o)=>i.handleInput&&i.handleInput(...o)),"onUpdate:modelValue":e[4]||(e[4]=o=>t.phone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",placeholder:t.store.langProp.telephone},null,40,p_),[[rt,t.phone]])]),g("div",null,[_e(g("textarea",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.message=o),class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px] w-full",placeholder:"Сообщение",name:"",id:""},null,512),[[rt,t.message]])]),g("div",g_,[g("button",{onClick:e[6]||(e[6]=(...o)=>i.sendMail&&i.sendMail(...o)),disabled:t.name.length<=2||t.mail.length<=5||t.phone.length<=7||t.message.length<=10,class:"bg-[#EAAD02] text-white rounded-[5px] disabled:opacity-50"},j(t.store.langProp.send),9,m_),g("button",{onClick:e[7]||(e[7]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},j(t.store.langProp.reset),1)])])}const dc=Ze(a_,[["render",__]]),b_="/assets/call-65c88a38.svg",y_={data(){return{store:ee()}},components:{Feedback:dc}},v_={class:"bg-white flex justify-center my-[1vh] w-full"},w_={class:"self-center"},E_=g("img",{class:"inline ml-2",src:b_},null,-1);function I_(t,e,n,s,r,i){return de(),be("footer",v_,[g("div",w_,[g("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),E_])])}const x_=Ze(y_,[["render",I_]]),T_="/assets/Vector-9ca58fbf.svg",Mi="/assets/visibility_on-0c36d6bb.svg",Li="/assets/visibility_off-e6686e60.svg",S_={props:{buttonName:String},data(){return{email:"",password:"",store:ee(),showPassword:!1}},methods:{loginGoogle(){const t=At(),e=new Re;ic(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;this.store.modal=!1,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:r.uid})}),this.store.getCart(),this.store.getOrders(),this.store.name=r.displayName,this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,Re.credentialFromError(n)})},async login(){const t=At();Tp(t,this.email,this.password).then(e=>{const n=e.user;console.log(n),this.store.modal=!1,this.store.getCart(),this.store.getOrders(),this.store.name=n.displayName,this.$router.push(`/${this.store.lang}/PersonalArea/${n.uid}`)}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword},resetPassword(){const t=At();console.log(this.store.email),Gl(t,this.store.email).then(()=>{}).catch(e=>{e.code,e.message})}}},k_={class:"h-[500px] grid grid-cols-2 max-[450px]:grid-cols-1 [&_*]:font-roboto [&_input]:pl-[8px]"},C_={class:"grid auto-rows-min gap-[20px]"},P_={class:"text-[30px] flex"},R_={class:"bg-gray-200 rounded-[10px] px-2 text-black"},A_=g("span",{class:"mx-2"},"|",-1),O_=g("img",{class:"mr-[8px]",src:T_},null,-1),N_=["placeholder"],D_={class:"relative"},M_=["type","placeholder"],L_={src:Mi,alt:""},U_={src:Li,alt:""},$_=["disabled"],F_={class:"text-center"};function B_(t,e,n,s,r,i){return de(),be("div",k_,[g("div",C_,[g("div",P_,[g("span",R_,j(r.store.langProp.login),1),A_,g("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},j(r.store.langProp.registration),1)]),g("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[O_,xe(j(r.store.langProp.loginwithgoogle),1)]),_e(g("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] w-full px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp.enteremail},null,8,N_),[[rt,r.email]]),g("div",D_,[_e(g("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.password=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.enterpassword},null,8,M_),[[$r,r.password]]),g("button",{onClick:e[4]||(e[4]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[_e(g("img",L_,null,512),[[zt,r.showPassword]]),_e(g("img",U_,null,512),[[zt,!r.showPassword]])])]),g("span",{onClick:e[5]||(e[5]=o=>r.store.comp="FogotPassword"),class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline hover:cursor-pointer underline-offset-4"},j(r.store.langProp.forgotpassword),1),g("button",{onClick:e[6]||(e[6]=(...o)=>i.login&&i.login(...o)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.login),9,$_),g("p",F_,[xe(j(r.store.langProp.donthaveaccount),1),g("button",{onClick:e[7]||(e[7]=o=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.createaccount),1)])])])}const j_=Ze(S_,[["render",B_]]),H_="/assets/Vector-9ca58fbf.svg",V_={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:ee()}},methods:{loginGoogle(){const t=At(),e=new Re;ic(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;console.log(r),this.store.modal=!1,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:r.uid})}),this.store.getCart(),this.store.getOrders(),this.store.name=r.displayName,this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,Re.credentialFromError(n)})},async register(){const t=At();xp(t,this.email,this.password).then(e=>{const n=e.user;this.store.comp="Login",fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:n.uid})}),kp(t.currentUser,{displayName:this.name})}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},W_={class:"h-[500px] grid grid-cols-2 max-[450px]:grid-cols-1 [&_*]:font-roboto [&_input]:pl-[8px]"},z_={class:"grid auto-rows-min gap-[20px]"},K_={class:"text-[30px] h-[45px] flex justify-center"},q_=g("span",{class:"mx-2"},"|",-1),G_={class:"bg-gray-300 rounded-[10px] px-2 text-black"},J_=g("img",{class:"mr-[8px]",src:H_},null,-1),Y_=["placeholder"],X_=["placeholder"],Q_={class:"relative"},Z_=["type","placeholder"],eb={src:Mi,alt:""},tb={src:Li,alt:""},nb={class:"relative"},sb=["type","placeholder"],rb={src:Mi,alt:""},ib={src:Li,alt:""},ob={key:0,class:"text-red-500 font-roboto leading-[2px]"},ab=["disabled"],lb={class:"text-center"};function cb(t,e,n,s,r,i){return de(),be("div",W_,[g("div",z_,[g("div",K_,[g("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},j(r.store.langProp.login),1),q_,g("span",G_,j(r.store.langProp.registration),1)]),g("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[J_,xe(" "+j(r.store.langProp.loginwithgoogle),1)]),_e(g("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp.username},null,8,Y_),[[rt,r.name]]),_e(g("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp.enteremail},null,8,X_),[[rt,r.email]]),g("div",Q_,[_e(g("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.password},null,40,Z_),[[$r,r.password]]),g("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[_e(g("img",eb,null,512),[[zt,r.showPassword]]),_e(g("img",tb,null,512),[[zt,!r.showPassword]])])]),g("div",nb,[_e(g("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.confirmthepassword},null,8,sb),[[$r,r.password2]]),g("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[_e(g("img",rb,null,512),[[zt,r.showPassword]]),_e(g("img",ib,null,512),[[zt,!r.showPassword]])])]),r.password2!=r.password?(de(),be("div",ob,j(r.store.langProp.passwordmismatch),1)):Ge("",!0),_e(g("div",{class:"text-red-500 font-roboto leading-[2px]"},j(r.store.langProp.minimumnumberofsymbols)+" - "+j(r.MinLength),513),[[zt,r.passwordMinLength&&r.password.length<=5]]),g("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.registration),9,ab),g("p",lb,[xe(j(r.store.langProp.doyouhaveaccount),1),g("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.login),1)])])])}const ub=Ze(V_,[["render",cb]]),db={data(){return{email:"",store:ee(),errorMessge:!1}},methods:{resetPassword(){const t=At();Gl(t,this.email).then(()=>{this.store.comp="Login"}).catch(e=>{e.code,e.message,this.errorMessge=!0})}}},fb={class:"grid grid-cols-2 h-[500px] [&_*]:font-roboto [&_input]:pl-[8px]"},hb={class:"grid grid-flow-row self-center gap-[20px]"},pb={class:"text-[30px] max-[350px]:text-[20px]"},gb=["placeholder"],mb=["disabled"],_b={key:0,class:"text-red-500 font-roboto"};function bb(t,e,n,s,r,i){return de(),be("div",fb,[g("div",hb,[g("h1",pb,j(r.store.langProp.passwordRecovery),1),_e(g("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp.enteremail},null,8,gb),[[rt,r.email]]),g("button",{onClick:e[1]||(e[1]=(...o)=>i.resetPassword&&i.resetPassword(...o)),disabled:r.email.length<=2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.getPassword),9,mb),r.errorMessge?(de(),be("span",_b,j(r.store.langProp.notFound),1)):Ge("",!0)])])}const yb=Ze(db,[["render",bb]]),vb={data(){return{store:ee()}},components:{Contacts:ac,Feedback:dc,Login:j_,Register:ub,FogotPassword:yb}},wb={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},Eb={class:"p-2 text-right"},Ib=g("strong",null,"X",-1),xb=[Ib];function Tb(t,e,n,s,r,i){return r.store.modal?(de(),be("div",wb,[r.store.modal?(de(),be("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):Ge("",!0),g("div",{class:gn([r.store.bg,"overflow-y-scroll scrollClass max-h-screen bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[g("div",Eb,[g("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},xb)]),(de(),Qs(Ku(r.store.comp),{class:"mx-20 mb-10 max-[450px]:mx-[10px]"}))],2)])):Ge("",!0)}const Sb=Ze(vb,[["render",Tb]]),kb={components:{Header:o_,Footer:x_,LayoutModal:Sb}},Cb={class:"h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px] max-[400px]:px-[4px]"};function Pb(t,e,n,s,r,i){const o=bn("LayoutModal"),a=bn("Header");return de(),be(Le,null,[ne(o),g("div",Cb,[ne(a),qu(t.$slots,"default")])],64)}const Rb=Ze(kb,[["render",Pb]]),Ab={};function Ob(t,e){const n=bn("RouterView");return de(),Qs(n)}const Nb=Ze(Ab,[["render",Ob]]),Db="modulepreload",Mb=function(t){return"/"+t},qo={},Ft=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Mb(i),i in qo)return;qo[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let d=r.length-1;d>=0;d--){const h=r[d];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Db,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((d,h)=>{c.addEventListener("load",d),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function Lb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function wr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Xe(r)?r.map(t):t(r)}return n}const zn=()=>{},Xe=Array.isArray,Ub=/\/$/,$b=t=>t.replace(Ub,"");function Er(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=Hb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function Fb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Go(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Bb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&In(e.matched[s],n.matched[r])&&fc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!jb(t[n],e[n]))return!1;return!0}function jb(t,e){return Xe(t)?Jo(t,e):Xe(e)?Jo(e,t):t===e}function Jo(t,e){return Xe(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function Hb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var is;(function(t){t.pop="pop",t.push="push"})(is||(is={}));var Kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Kn||(Kn={}));function Vb(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),$b(t)}const Wb=/^[^#]+#/;function zb(t,e){return t.replace(Wb,"#")+e}function Kb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function qb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Kb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const Gr=new Map;function Gb(t,e){Gr.set(t,e)}function Jb(t){const e=Gr.get(t);return Gr.delete(t),e}let Yb=()=>location.protocol+"//"+location.host;function hc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Go(l,"")}return Go(n,t)+s+r}function Xb(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const b=hc(t,location),x=n.value,S=e.value;let U=0;if(p){if(n.value=b,e.value=p,o&&o===x){o=null;return}U=S?p.position-S.position:0}else s(b);r.forEach(R=>{R(n.value,x,{delta:U,type:is.pop,direction:U?U>0?Kn.forward:Kn.back:Kn.unknown})})};function l(){o=n.value}function c(p){r.push(p);const b=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(b),b}function d(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:or()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",d),{pauseListeners:l,listen:c,destroy:h}}function Xo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?or():null}}function Qb(t){const{history:e,location:n}=window,s={value:hc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,d){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Yb()+t+l;try{e[d?"replaceState":"pushState"](c,"",p),r.value=c}catch(b){console.error(b),n[d?"replace":"assign"](p)}}function o(l,c){const d=te({},e.state,Xo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,d,!0),s.value=l}function a(l,c){const d=te({},r.value,e.state,{forward:l,scroll:or()});i(d.current,d,!0);const h=te({},Xo(s.value,l,null),{position:d.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Zb(t){t=Vb(t);const e=Qb(t),n=Xb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=te({location:"",base:t,go:s,createHref:zb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function ey(t){return typeof t=="string"||t&&typeof t=="object"}function pc(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},gc=Symbol("");var Qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qo||(Qo={}));function xn(t,e){return te(new Error,{type:t,[gc]:!0},e)}function ct(t,e){return t instanceof Error&&gc in t&&(e==null||!!(t.type&e))}const Zo="[^/]+?",ty={sensitive:!1,strict:!1,start:!0,end:!0},ny=/[.+*?^${}()[\]/\\]/g;function sy(t,e){const n=te({},ty,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const d=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const p=c[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(ny,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:S,optional:U,regexp:R}=p;i.push({name:x,repeatable:S,optional:U});const B=R||Zo;if(B!==Zo){b+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+W.message)}}let O=S?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(O=U&&c.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),S&&(b+=-20),B===".*"&&(b+=-50)}d.push(b)}s.push(d)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const d=c.match(o),h={};if(!d)return null;for(let p=1;p<d.length;p++){const b=d[p]||"",x=i[p-1];h[x.name]=b&&x.repeatable?b.split("/"):b}return h}function l(c){let d="",h=!1;for(const p of t){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const b of p)if(b.type===0)d+=b.value;else if(b.type===1){const{value:x,repeatable:S,optional:U}=b,R=x in c?c[x]:"";if(Xe(R)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=Xe(R)?R.join("/"):R;if(!B)if(U)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);d+=B}}return d||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function ry(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function iy(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=ry(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(ea(s))return 1;if(ea(r))return-1}return r.length-s.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oy={type:0,value:""},ay=/[a-zA-Z0-9_]/;function ly(t){if(!t)return[[]];if(t==="/")return[[oy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",d="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:ay.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=3:d+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function cy(t,e,n){const s=sy(ly(t.path),n),r=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function uy(t,e){const n=[],s=new Map;e=sa({strict:!1,end:!0,sensitive:!1},e);function r(d){return s.get(d)}function i(d,h,p){const b=!p,x=dy(d);x.aliasOf=p&&p.record;const S=sa(e,d),U=[x];if("alias"in d){const O=typeof d.alias=="string"?[d.alias]:d.alias;for(const W of O)U.push(te({},x,{components:p?p.record.components:x.components,path:W,aliasOf:p?p.record:x}))}let R,B;for(const O of U){const{path:W}=O;if(h&&W[0]!=="/"){const K=h.record.path,ie=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(W&&ie+W)}if(R=cy(O,h,S),p?p.alias.push(R):(B=B||R,B!==R&&B.alias.push(R),b&&d.name&&!na(R)&&o(d.name)),x.children){const K=x.children;for(let ie=0;ie<K.length;ie++)i(K[ie],R,p&&p.children[ie])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return B?()=>{o(B)}:zn}function o(d){if(pc(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){let h=0;for(;h<n.length&&iy(d,n[h])>=0&&(d.record.path!==n[h].record.path||!mc(d,n[h]));)h++;n.splice(h,0,d),d.record.name&&!na(d)&&s.set(d.record.name,d)}function c(d,h){let p,b={},x,S;if("name"in d&&d.name){if(p=s.get(d.name),!p)throw xn(1,{location:d});S=p.record.name,b=te(ta(h.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),d.params&&ta(d.params,p.keys.map(B=>B.name))),x=p.stringify(b)}else if("path"in d)x=d.path,p=n.find(B=>B.re.test(x)),p&&(b=p.parse(x),S=p.record.name);else{if(p=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw xn(1,{location:d,currentLocation:h});S=p.record.name,b=te({},h.params,d.params),x=p.stringify(b)}const U=[];let R=p;for(;R;)U.unshift(R.record),R=R.parent;return{name:S,path:x,params:b,matched:U,meta:hy(U)}}return t.forEach(d=>i(d)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ta(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function dy(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:fy(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function fy(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hy(t){return t.reduce((e,n)=>te(e,n.meta),{})}function sa(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function mc(t,e){return e.children.some(n=>n===t||mc(t,n))}const _c=/#/g,py=/&/g,gy=/\//g,my=/=/g,_y=/\?/g,bc=/\+/g,by=/%5B/g,yy=/%5D/g,yc=/%5E/g,vy=/%60/g,vc=/%7B/g,wy=/%7C/g,wc=/%7D/g,Ey=/%20/g;function Ui(t){return encodeURI(""+t).replace(wy,"|").replace(by,"[").replace(yy,"]")}function Iy(t){return Ui(t).replace(vc,"{").replace(wc,"}").replace(yc,"^")}function Jr(t){return Ui(t).replace(bc,"%2B").replace(Ey,"+").replace(_c,"%23").replace(py,"%26").replace(vy,"`").replace(vc,"{").replace(wc,"}").replace(yc,"^")}function xy(t){return Jr(t).replace(my,"%3D")}function Ty(t){return Ui(t).replace(_c,"%23").replace(_y,"%3F")}function Sy(t){return t==null?"":Ty(t).replace(gy,"%2F")}function Hs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ky(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(bc," "),o=i.indexOf("="),a=Hs(o<0?i:i.slice(0,o)),l=o<0?null:Hs(i.slice(o+1));if(a in e){let c=e[a];Xe(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ra(t){let e="";for(let n in t){const s=t[n];if(n=xy(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xe(s)?s.map(i=>i&&Jr(i)):[s&&Jr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Cy(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Xe(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Py=Symbol(""),ia=Symbol(""),$i=Symbol(""),Ec=Symbol(""),Yr=Symbol("");function Mn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Et(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(xn(4,{from:n,to:e})):h instanceof Error?a(h):ey(h)?a(xn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let d=Promise.resolve(c);t.length<3&&(d=d.then(l)),d.catch(h=>a(h))})}function Ir(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Ry(a)){const c=(a.__vccOpts||a)[e];c&&r.push(Et(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const d=Lb(c)?c.default:c;i.components[o]=d;const p=(d.__vccOpts||d)[e];return p&&Et(p,n,s,i,o)()}))}}return r}function Ry(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oa(t){const e=it($i),n=it(Ec),s=Ue(()=>e.resolve(un(t.to))),r=Ue(()=>{const{matched:l}=s.value,{length:c}=l,d=l[c-1],h=n.matched;if(!d||!h.length)return-1;const p=h.findIndex(In.bind(null,d));if(p>-1)return p;const b=aa(l[c-2]);return c>1&&aa(d)===b&&h[h.length-1].path!==b?h.findIndex(In.bind(null,l[c-2])):p}),i=Ue(()=>r.value>-1&&Dy(n.params,s.value.params)),o=Ue(()=>r.value>-1&&r.value===n.matched.length-1&&fc(n.params,s.value.params));function a(l={}){return Ny(l)?e[un(t.replace)?"replace":"push"](un(t.to)).catch(zn):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const Ay=Wa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oa,setup(t,{slots:e}){const n=Pn(oa(t)),{options:s}=it($i),r=Ue(()=>({[la(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[la(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:dl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),Oy=Ay;function Ny(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dy(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Xe(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function aa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const la=(t,e,n)=>t??e??n,My=Wa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=it(Yr),r=Ue(()=>t.route||s.value),i=it(ia,0),o=Ue(()=>{let c=un(i);const{matched:d}=r.value;let h;for(;(h=d[c])&&!h.components;)c++;return c}),a=Ue(()=>r.value.matched[o.value]);xs(ia,Ue(()=>o.value+1)),xs(Py,a),xs(Yr,r);const l=ui();return Fn(()=>[l.value,a.value,t.name],([c,d,h],[p,b,x])=>{d&&(d.instances[h]=c,b&&b!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=b.leaveGuards),d.updateGuards.size||(d.updateGuards=b.updateGuards))),c&&d&&(!b||!In(d,b)||!p)&&(d.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,d=t.name,h=a.value,p=h&&h.components[d];if(!p)return ca(n.default,{Component:p,route:c});const b=h.props[d],x=b?b===!0?c.params:typeof b=="function"?b(c):b:null,U=dl(p,te({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[d]=null)},ref:l}));return ca(n.default,{Component:U,route:c})||U}}});function ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ly=My;function Uy(t){const e=uy(t.routes,t),n=t.parseQuery||ky,s=t.stringifyQuery||ra,r=t.history,i=Mn(),o=Mn(),a=Mn(),l=fu(yt);let c=yt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=wr.bind(null,y=>""+y),h=wr.bind(null,Sy),p=wr.bind(null,Hs);function b(y,P){let k,D;return pc(y)?(k=e.getRecordMatcher(y),D=P):D=y,e.addRoute(D,k)}function x(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function S(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function R(y,P){if(P=te({},P||l.value),typeof y=="string"){const u=Er(n,y,P.path),f=e.resolve({path:u.path},P),m=r.createHref(u.fullPath);return te(u,f,{params:p(f.params),hash:Hs(u.hash),redirectedFrom:void 0,href:m})}let k;if("path"in y)k=te({},y,{path:Er(n,y.path,P.path).path});else{const u=te({},y.params);for(const f in u)u[f]==null&&delete u[f];k=te({},y,{params:h(y.params)}),P.params=h(P.params)}const D=e.resolve(k,P),X=y.hash||"";D.params=d(p(D.params));const fe=Fb(s,te({},y,{hash:Iy(X),path:D.path})),q=r.createHref(fe);return te({fullPath:fe,hash:X,query:s===ra?Cy(y.query):y.query||{}},D,{redirectedFrom:void 0,href:q})}function B(y){return typeof y=="string"?Er(n,y,l.value.path):te({},y)}function O(y,P){if(c!==y)return xn(8,{from:P,to:y})}function W(y){return z(y)}function K(y){return W(te(B(y),{replace:!0}))}function ie(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:k}=P;let D=typeof k=="function"?k(y):k;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=B(D):{path:D},D.params={}),te({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function z(y,P){const k=c=R(y),D=l.value,X=y.state,fe=y.force,q=y.replace===!0,u=ie(k);if(u)return z(te(B(u),{state:typeof u=="object"?te({},X,u.state):X,force:fe,replace:q}),P||k);const f=k;f.redirectedFrom=P;let m;return!fe&&Bb(s,D,k)&&(m=xn(16,{to:f,from:D}),Lt(D,D,!0,!1)),(m?Promise.resolve(m):J(f,D)).catch(_=>ct(_)?ct(_,2)?_:We(_):oe(_,f,D)).then(_=>{if(_){if(ct(_,2))return z(te({replace:q},B(_.to),{state:typeof _.to=="object"?te({},X,_.to.state):X,force:fe}),P||f)}else _=he(f,D,!0,q,X);return Y(f,D,_),_})}function A(y,P){const k=O(y,P);return k?Promise.reject(k):Promise.resolve()}function J(y,P){let k;const[D,X,fe]=$y(y,P);k=Ir(D.reverse(),"beforeRouteLeave",y,P);for(const u of D)u.leaveGuards.forEach(f=>{k.push(Et(f,y,P))});const q=A.bind(null,y,P);return k.push(q),on(k).then(()=>{k=[];for(const u of i.list())k.push(Et(u,y,P));return k.push(q),on(k)}).then(()=>{k=Ir(X,"beforeRouteUpdate",y,P);for(const u of X)u.updateGuards.forEach(f=>{k.push(Et(f,y,P))});return k.push(q),on(k)}).then(()=>{k=[];for(const u of y.matched)if(u.beforeEnter&&!P.matched.includes(u))if(Xe(u.beforeEnter))for(const f of u.beforeEnter)k.push(Et(f,y,P));else k.push(Et(u.beforeEnter,y,P));return k.push(q),on(k)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),k=Ir(fe,"beforeRouteEnter",y,P),k.push(q),on(k))).then(()=>{k=[];for(const u of o.list())k.push(Et(u,y,P));return k.push(q),on(k)}).catch(u=>ct(u,8)?u:Promise.reject(u))}function Y(y,P,k){for(const D of a.list())D(y,P,k)}function he(y,P,k,D,X){const fe=O(y,P);if(fe)return fe;const q=P===yt,u=an?history.state:{};k&&(D||q?r.replace(y.fullPath,te({scroll:q&&u&&u.scroll},X)):r.push(y.fullPath,X)),l.value=y,Lt(y,P,k,q),We()}let ve;function Ne(){ve||(ve=r.listen((y,P,k)=>{if(!hs.listening)return;const D=R(y),X=ie(D);if(X){z(te(X,{replace:!0}),D).catch(zn);return}c=D;const fe=l.value;an&&Gb(Yo(fe.fullPath,k.delta),or()),J(D,fe).catch(q=>ct(q,12)?q:ct(q,2)?(z(q.to,D).then(u=>{ct(u,20)&&!k.delta&&k.type===is.pop&&r.go(-1,!1)}).catch(zn),Promise.reject()):(k.delta&&r.go(-k.delta,!1),oe(q,D,fe))).then(q=>{q=q||he(D,fe,!1),q&&(k.delta&&!ct(q,8)?r.go(-k.delta,!1):k.type===is.pop&&ct(q,20)&&r.go(-1,!1)),Y(D,fe,q)}).catch(zn)}))}let Ce=Mn(),we=Mn(),ge;function oe(y,P,k){We(y);const D=we.list();return D.length?D.forEach(X=>X(y,P,k)):console.error(y),Promise.reject(y)}function se(){return ge&&l.value!==yt?Promise.resolve():new Promise((y,P)=>{Ce.add([y,P])})}function We(y){return ge||(ge=!y,Ne(),Ce.list().forEach(([P,k])=>y?k(y):P()),Ce.reset()),y}function Lt(y,P,k,D){const{scrollBehavior:X}=t;if(!an||!X)return Promise.resolve();const fe=!k&&Jb(Yo(y.fullPath,0))||(D||!k)&&history.state&&history.state.scroll||null;return fi().then(()=>X(y,P,fe)).then(q=>q&&qb(q)).catch(q=>oe(q,y,P))}const ze=y=>r.go(y);let Ae;const nn=new Set,hs={currentRoute:l,listening:!0,addRoute:b,removeRoute:x,hasRoute:U,getRoutes:S,resolve:R,options:t,push:W,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:se,install(y){const P=this;y.component("RouterLink",Oy),y.component("RouterView",Ly),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>un(l)}),an&&!Ae&&l.value===yt&&(Ae=!0,W(r.location).catch(X=>{}));const k={};for(const X in yt)k[X]=Ue(()=>l.value[X]);y.provide($i,P),y.provide(Ec,Pn(k)),y.provide(Yr,l);const D=y.unmount;nn.add(y),y.unmount=function(){nn.delete(y),nn.size<1&&(c=yt,ve&&ve(),ve=null,l.value=yt,Ae=!1,ge=!1),D()}}};return hs}function on(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function $y(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>In(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>In(c,l))||r.push(l))}return[n,s,r]}const xr=[{path:"Home",alias:"Home",component:()=>Ft(()=>import("./Home-b9f08493.js"),[])},{path:"About",alias:"About",component:()=>Ft(()=>import("./About-a76808b8.js"),[])},{path:"Products",alias:"Products",component:()=>Ft(()=>import("./Products-fdcd2625.js"),["assets/Products-fdcd2625.js","assets/Group19-49c36de6.js"])},{path:"Personal/:id",alias:"Personal/:id",component:()=>Ft(()=>import("./Personal-96d038dc.js"),[])},{path:"PersonalArea/:id",alias:"PersonalArea/:id",component:()=>Ft(()=>import("./PersonalArea-b395c582.js"),[])},{path:"Blog",alias:"Blog",component:()=>Ft(()=>import("./Blog-2c6fd9a6.js"),[])},{path:"Checkout",alias:"Checkout",component:()=>Ft(()=>import("./Checkout-8c07b68b.js"),["assets/Checkout-8c07b68b.js","assets/Group19-49c36de6.js"])}],Fy=Uy({history:Zb("/"),routes:[{path:"/",name:"root",redirect:t=>ee().lang},{path:"/ru",name:"ru",redirect:t=>"ru/Home",beforeEnter:async(t,e,n)=>{ee().lang="ru",await ee().process(),await ee().checkStatus(),ee().getData(),ee().getOrders(),ee().getCart(),n()},children:xr},{path:"/en",name:"en",redirect:t=>"en/Home",beforeEnter:async(t,e,n)=>{ee().lang="en",await ee().process(),await ee().checkStatus(),ee().getData(),ee().getOrders(),ee().getCart(),n()},children:xr},{path:"/kg",name:"kg",redirect:t=>"kg/Home",beforeEnter:async(t,e,n)=>{ee().lang="kg",await ee().process(),await ee().checkStatus(),ee().getData(),ee().getOrders(),ee().getCart(),n()},children:xr}],strict:!0});const ar=Qd(Nb),By=tf();new Re;const jy={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};ar.component("Layout",Rb);ar.use(By);ar.use(Fy);Sl(jy);At();ar.mount("#app");export{Le as F,Rb as L,Ze as _,ne as a,g as b,be as c,xe as d,Qs as e,Hy as f,At as g,Rp as h,Gl as i,_e as j,rt as k,Ge as l,Kd as m,Qr as n,de as o,Vy as p,bn as r,Wy as s,j as t,ee as u,zt as v,Be as w};
