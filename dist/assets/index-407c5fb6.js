(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Xr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function Qr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?Ec(s):Qr(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(_e(t))return t;if(le(t))return t}}const vc=/;(?![^(]*\))/g,wc=/:([^]+)/,Ic=/\/\*.*?\*\//gs;function Ec(t){const e={};return t.replace(Ic,"").split(vc).forEach(n=>{if(n){const s=n.split(wc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function is(t){let e="";if(_e(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=is(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tc=Xr(xc);function ca(t){return!!t||t===""}function Sc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Yt(t[s],e[s]);return n}function Yt(t,e){if(t===e)return!0;let n=ji(t),s=ji(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Kn(t),s=Kn(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?Sc(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Yt(t[o],e[o]))return!1}}return String(t)===String(e)}function Zr(t,e){return t.findIndex(n=>Yt(n,e))}const j=t=>_e(t)?t:t==null?"":F(t)||le(t)&&(t.toString===da||!V(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):cn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:xn(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!F(e)&&!ha(e)?String(e):e,ue={},ln=[],Je=()=>{},kc=()=>!1,Cc=/^on[^a-z]/,Vs=t=>Cc.test(t),ei=t=>t.startsWith("onUpdate:"),Se=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Pc=Object.prototype.hasOwnProperty,Q=(t,e)=>Pc.call(t,e),F=Array.isArray,cn=t=>os(t)==="[object Map]",xn=t=>os(t)==="[object Set]",ji=t=>os(t)==="[object Date]",V=t=>typeof t=="function",_e=t=>typeof t=="string",Kn=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",fa=t=>le(t)&&V(t.then)&&V(t.catch),da=Object.prototype.toString,os=t=>da.call(t),Rc=t=>os(t).slice(8,-1),ha=t=>os(t)==="[object Object]",ni=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Is=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ws=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ac=/-(\w)/g,it=Ws(t=>t.replace(Ac,(e,n)=>n?n.toUpperCase():"")),Oc=/\B([A-Z])/g,Tn=Ws(t=>t.replace(Oc,"-$1").toLowerCase()),zs=Ws(t=>t.charAt(0).toUpperCase()+t.slice(1)),lr=Ws(t=>t?`on${zs(t)}`:""),qn=(t,e)=>!Object.is(t,e),Es=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},As=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Gn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hi;const Nc=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class pa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ga(t){return new pa(t)}function Dc(t,e=Me){e&&e.active&&e.effects.push(t)}function Mc(){return Me}function Lc(t){Me&&Me.cleanups.push(t)}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ma=t=>(t.w&At)>0,_a=t=>(t.n&At)>0,Uc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},$c=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ma(r)&&!_a(r)?r.delete(t):e[n++]=r,r.w&=~At,r.n&=~At}e.length=n}},Tr=new WeakMap;let Mn=0,At=1;const Sr=30;let qe;const qt=Symbol(""),kr=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Dc(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,St=!0,At=1<<++Mn,Mn<=Sr?Uc(this):Vi(this),this.fn()}finally{Mn<=Sr&&$c(this),At=1<<--Mn,qe=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(Vi(this),this.onStop&&this.onStop(),this.active=!1)}}function Vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const ba=[];function Sn(){ba.push(St),St=!1}function kn(){const t=ba.pop();St=t===void 0?!0:t}function $e(t,e,n){if(St&&qe){let s=Tr.get(t);s||Tr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),ya(r)}}function ya(t,e){let n=!1;Mn<=Sr?_a(t)||(t.n|=At,n=!ma(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function pt(t,e,n,s,r,i){const o=Tr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&F(t)){const l=Gn(s);o.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":F(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(qt)),cn(t)&&a.push(o.get(kr)));break;case"delete":F(t)||(a.push(o.get(qt)),cn(t)&&a.push(o.get(kr)));break;case"set":cn(t)&&a.push(o.get(qt));break}if(a.length===1)a[0]&&Cr(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Cr(si(l))}}function Cr(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&Wi(s);for(const s of n)s.computed||Wi(s)}function Wi(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Fc=Xr("__proto__,__v_isRef,__isVue"),va=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kn)),Bc=ii(),jc=ii(!1,!0),Hc=ii(!0),zi=Vc();function Vc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let i=0,o=this.length;i<o;i++)$e(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Sn();const s=Z(this)[e].apply(this,n);return kn(),s}}),t}function ii(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?iu:Ta:e?xa:Ea).get(s))return s;const o=F(s);if(!t&&o&&Q(zi,r))return Reflect.get(zi,r,i);const a=Reflect.get(s,r,i);return(Kn(r)?va.has(r):Fc(r))||(t||$e(s,"get",r),e)?a:pe(a)?o&&ni(r)?a:a.value:le(a)?t?Sa(a):Cn(a):a}}const Wc=wa(),zc=wa(!0);function wa(t=!1){return function(n,s,r,i){let o=n[s];if(gn(o)&&pe(o)&&!pe(r))return!1;if(!t&&(!Os(r)&&!gn(r)&&(o=Z(o),r=Z(r)),!F(n)&&pe(o)&&!pe(r)))return o.value=r,!0;const a=F(n)&&ni(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,r,i);return n===Z(i)&&(a?qn(r,o)&&pt(n,"set",s,r):pt(n,"add",s,r)),l}}function Kc(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&pt(t,"delete",e,void 0),s}function qc(t,e){const n=Reflect.has(t,e);return(!Kn(e)||!va.has(e))&&$e(t,"has",e),n}function Gc(t){return $e(t,"iterate",F(t)?"length":qt),Reflect.ownKeys(t)}const Ia={get:Bc,set:Wc,deleteProperty:Kc,has:qc,ownKeys:Gc},Jc={get:Hc,set(t,e){return!0},deleteProperty(t,e){return!0}},Yc=Se({},Ia,{get:jc,set:zc}),oi=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function ps(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),i=Z(e);n||(e!==i&&$e(r,"get",e),$e(r,"get",i));const{has:o}=Ks(r),a=s?oi:n?ci:Jn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function gs(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&$e(s,"has",t),$e(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function ms(t,e=!1){return t=t.__v_raw,!e&&$e(Z(t),"iterate",qt),Reflect.get(t,"size",t)}function Ki(t){t=Z(t);const e=Z(this);return Ks(e).has.call(e,t)||(e.add(t),pt(e,"add",t,t)),this}function qi(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Ks(n);let i=s.call(n,t);i||(t=Z(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?qn(e,o)&&pt(n,"set",t,e):pt(n,"add",t,e),this}function Gi(t){const e=Z(this),{has:n,get:s}=Ks(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&pt(e,"delete",t,void 0),i}function Ji(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&pt(t,"clear",void 0,void 0),n}function _s(t,e){return function(s,r){const i=this,o=i.__v_raw,a=Z(o),l=e?oi:t?ci:Jn;return!t&&$e(a,"iterate",qt),o.forEach((c,f)=>s.call(r,l(c),l(f),i))}}function bs(t,e,n){return function(...s){const r=this.__v_raw,i=Z(r),o=cn(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...s),f=n?oi:e?ci:Jn;return!e&&$e(i,"iterate",l?kr:qt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function _t(t){return function(...e){return t==="delete"?!1:this}}function Xc(){const t={get(i){return ps(this,i)},get size(){return ms(this)},has:gs,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:_s(!1,!1)},e={get(i){return ps(this,i,!1,!0)},get size(){return ms(this)},has:gs,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:_s(!1,!0)},n={get(i){return ps(this,i,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:_s(!0,!1)},s={get(i){return ps(this,i,!0,!0)},get size(){return ms(this,!0)},has(i){return gs.call(this,i,!0)},add:_t("add"),set:_t("set"),delete:_t("delete"),clear:_t("clear"),forEach:_s(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=bs(i,!1,!1),n[i]=bs(i,!0,!1),e[i]=bs(i,!1,!0),s[i]=bs(i,!0,!0)}),[t,n,e,s]}const[Qc,Zc,eu,tu]=Xc();function ai(t,e){const n=e?t?tu:eu:t?Zc:Qc;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const nu={get:ai(!1,!1)},su={get:ai(!1,!0)},ru={get:ai(!0,!1)},Ea=new WeakMap,xa=new WeakMap,Ta=new WeakMap,iu=new WeakMap;function ou(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function au(t){return t.__v_skip||!Object.isExtensible(t)?0:ou(Rc(t))}function Cn(t){return gn(t)?t:li(t,!1,Ia,nu,Ea)}function lu(t){return li(t,!1,Yc,su,xa)}function Sa(t){return li(t,!0,Jc,ru,Ta)}function li(t,e,n,s,r){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=au(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function kt(t){return gn(t)?kt(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Os(t){return!!(t&&t.__v_isShallow)}function ka(t){return kt(t)||gn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function mn(t){return As(t,"__v_skip",!0),t}const Jn=t=>le(t)?Cn(t):t,ci=t=>le(t)?Sa(t):t;function Ca(t){St&&qe&&(t=Z(t),ya(t.dep||(t.dep=si())))}function Pa(t,e){t=Z(t),t.dep&&Cr(t.dep)}function pe(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Ra(t,!1)}function cu(t){return Ra(t,!0)}function Ra(t,e){return pe(t)?t:new uu(t,e)}class uu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:Jn(e)}get value(){return Ca(this),this._value}set value(e){const n=this.__v_isShallow||Os(e)||gn(e);e=n?e:Z(e),qn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Jn(e),Pa(this))}}function un(t){return pe(t)?t.value:t}const fu={get:(t,e,n)=>un(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pe(r)&&!pe(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Aa(t){return kt(t)?t:new Proxy(t,fu)}function du(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=pu(t,n);return e}class hu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function pu(t,e,n){const s=t[e];return pe(s)?s:new hu(t,e,n)}var Oa;class gu{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Oa]=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,Pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return Ca(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Oa="__v_isReadonly";function mu(t,e,n=!1){let s,r;const i=V(t);return i?(s=t,r=Je):(s=t.get,r=t.set),new gu(s,r,i||!r,n)}function Ct(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){qs(i,e,n)}return r}function je(t,e,n,s){if(V(t)){const i=Ct(t,e,n,s);return i&&fa(i)&&i.catch(o=>{qs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(je(t[i],e,n,s));return r}function qs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const c=i.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Ct(l,null,10,[t,o,a]);return}}_u(t,n,r,s)}function _u(t,e,n,s=!0){console.error(t)}let Yn=!1,Pr=!1;const Te=[];let tt=0;const fn=[];let lt=null,jt=0;const Na=Promise.resolve();let fi=null;function di(t){const e=fi||Na;return t?e.then(this?t.bind(this):t):e}function bu(t){let e=tt+1,n=Te.length;for(;e<n;){const s=e+n>>>1;Xn(Te[s])<t?e=s+1:n=s}return e}function hi(t){(!Te.length||!Te.includes(t,Yn&&t.allowRecurse?tt+1:tt))&&(t.id==null?Te.push(t):Te.splice(bu(t.id),0,t),Da())}function Da(){!Yn&&!Pr&&(Pr=!0,fi=Na.then(La))}function yu(t){const e=Te.indexOf(t);e>tt&&Te.splice(e,1)}function vu(t){F(t)?fn.push(...t):(!lt||!lt.includes(t,t.allowRecurse?jt+1:jt))&&fn.push(t),Da()}function Yi(t,e=Yn?tt+1:0){for(;e<Te.length;e++){const n=Te[e];n&&n.pre&&(Te.splice(e,1),e--,n())}}function Ma(t){if(fn.length){const e=[...new Set(fn)];if(fn.length=0,lt){lt.push(...e);return}for(lt=e,lt.sort((n,s)=>Xn(n)-Xn(s)),jt=0;jt<lt.length;jt++)lt[jt]();lt=null,jt=0}}const Xn=t=>t.id==null?1/0:t.id,wu=(t,e)=>{const n=Xn(t)-Xn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function La(t){Pr=!1,Yn=!0,Te.sort(wu);const e=Je;try{for(tt=0;tt<Te.length;tt++){const n=Te[tt];n&&n.active!==!1&&Ct(n,null,14)}}finally{tt=0,Te.length=0,Ma(),Yn=!1,fi=null,(Te.length||fn.length)&&La()}}function Iu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ue;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||ue;p&&(r=n.map(b=>_e(b)?b.trim():b)),h&&(r=n.map(Gn))}let a,l=s[a=lr(e)]||s[a=lr(it(e))];!l&&i&&(l=s[a=lr(Tn(e))]),l&&je(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(c,t,6,r)}}function Ua(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!V(t)){const l=c=>{const f=Ua(c,e,!0);f&&(a=!0,Se(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(le(t)&&s.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):Se(o,i),le(t)&&s.set(t,o),o)}function Gs(t,e){return!t||!Vs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,Tn(e))||Q(t,e))}let xe=null,$a=null;function Ns(t){const e=xe;return xe=t,$a=t&&t.type.__scopeId||null,e}function Be(t,e=xe,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&oo(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&oo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function cr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:f,renderCache:h,data:p,setupState:b,ctx:x,inheritAttrs:S}=t;let U,R;const B=Ns(t);try{if(n.shapeFlag&4){const W=r||s;U=et(f.call(W,W,h,i,b,p,x)),R=l}else{const W=e;U=et(W.length>1?W(i,{attrs:l,slots:a,emit:c}):W(i,null)),R=e.props?l:Eu(l)}}catch(W){jn.length=0,qs(W,t,1),U=te(He)}let O=U;if(R&&S!==!1){const W=Object.keys(R),{shapeFlag:K}=O;W.length&&K&7&&(o&&W.some(ei)&&(R=xu(R,o)),O=Ot(O,R))}return n.dirs&&(O=Ot(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Ns(B),U}const Eu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vs(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Tu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?Xi(s,o,c):!!o;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Gs(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,c):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gs(n,i))return!0}return!1}function Su({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ku=t=>t.__isSuspense;function Cu(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):vu(t)}function xs(t,e){if(ve){let n=ve.provides;const s=ve.parent&&ve.parent.provides;s===n&&(n=ve.provides=Object.create(s)),n[t]=e}}function nt(t,e,n=!1){const s=ve||xe;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s.proxy):e}}const ys={};function $n(t,e,n){return Fa(t,e,n)}function Fa(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ue){const a=ve;let l,c=!1,f=!1;if(pe(t)?(l=()=>t.value,c=Os(t)):kt(t)?(l=()=>t,s=!0):F(t)?(f=!0,c=t.some(O=>kt(O)||Os(O)),l=()=>t.map(O=>{if(pe(O))return O.value;if(kt(O))return zt(O);if(V(O))return Ct(O,a,2)})):V(t)?e?l=()=>Ct(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),je(t,a,3,[p])}:l=Je,e&&s){const O=l;l=()=>zt(O())}let h,p=O=>{h=R.onStop=()=>{Ct(O,a,4)}},b;if(Zn)if(p=Je,e?n&&je(e,a,3,[l(),f?[]:void 0,p]):l(),r==="sync"){const O=Ef();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Je;let x=f?new Array(t.length).fill(ys):ys;const S=()=>{if(R.active)if(e){const O=R.run();(s||c||(f?O.some((W,K)=>qn(W,x[K])):qn(O,x)))&&(h&&h(),je(e,a,3,[O,x===ys?void 0:f&&x[0]===ys?[]:x,p]),x=O)}else R.run()};S.allowRecurse=!!e;let U;r==="sync"?U=S:r==="post"?U=()=>Oe(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),U=()=>hi(S));const R=new ri(l,U);e?n?S():x=R.run():r==="post"?Oe(R.run.bind(R),a&&a.suspense):R.run();const B=()=>{R.stop(),a&&a.scope&&ti(a.scope.effects,R)};return b&&b.push(B),B}function Pu(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?Ba(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=ve;_n(this);const a=Fa(r,i.bind(s),n);return o?_n(o):Gt(),a}function Ba(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function zt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),pe(t))zt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)zt(t[n],e);else if(xn(t)||cn(t))t.forEach(n=>{zt(n,e)});else if(ha(t))for(const n in t)zt(t[n],e);return t}function Ru(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),Ka(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],Au={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=al(),s=Ru();let r;return()=>{const i=e.default&&Ha(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==He){o=S;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return ur(o);const c=Qi(o);if(!c)return ur(o);const f=Rr(c,a,s,n);Ar(c,f);const h=n.subTree,p=h&&Qi(h);let b=!1;const{getTransitionKey:x}=c.type;if(x){const S=x();r===void 0?r=S:S!==r&&(r=S,b=!0)}if(p&&p.type!==He&&(!Ht(c,p)||b)){const S=Rr(p,a,s,n);if(Ar(p,S),l==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ur(o);l==="in-out"&&c.type!==He&&(S.delayLeave=(U,R,B)=>{const O=ja(s,p);O[String(p.key)]=p,U._leaveCb=()=>{R(),U._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=B})}return o}}},Ou=Au;function ja(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Rr(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:b,onLeaveCancelled:x,onBeforeAppear:S,onAppear:U,onAfterAppear:R,onAppearCancelled:B}=e,O=String(t.key),W=ja(n,t),K=(A,J)=>{A&&je(A,s,9,J)},re=(A,J)=>{const Y=J[1];K(A,J),F(A)?A.every(de=>de.length<=1)&&Y():A.length<=1&&Y()},z={mode:i,persisted:o,beforeEnter(A){let J=a;if(!n.isMounted)if(r)J=S||a;else return;A._leaveCb&&A._leaveCb(!0);const Y=W[O];Y&&Ht(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[A])},enter(A){let J=l,Y=c,de=f;if(!n.isMounted)if(r)J=U||l,Y=R||c,de=B||f;else return;let be=!1;const Ne=A._enterCb=Ce=>{be||(be=!0,Ce?K(de,[A]):K(Y,[A]),z.delayedLeave&&z.delayedLeave(),A._enterCb=void 0)};J?re(J,[A,Ne]):Ne()},leave(A,J){const Y=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return J();K(h,[A]);let de=!1;const be=A._leaveCb=Ne=>{de||(de=!0,J(),Ne?K(x,[A]):K(b,[A]),A._leaveCb=void 0,W[Y]===t&&delete W[Y])};W[Y]=t,p?re(p,[A,be]):be()},clone(A){return Rr(A,e,n,s)}};return z}function ur(t){if(Js(t))return t=Ot(t),t.children=null,t}function Qi(t){return Js(t)?t.children?t.children[0]:void 0:t}function Ar(t,e){t.shapeFlag&6&&t.component?Ar(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ha(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Le?(o.patchFlag&128&&r++,s=s.concat(Ha(o.children,e,a))):(e||o.type!==He)&&s.push(a!=null?Ot(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Va(t){return V(t)?{setup:t,name:t.name}:t}const Fn=t=>!!t.type.__asyncLoader,Js=t=>t.type.__isKeepAlive;function Nu(t,e){Wa(t,"a",e)}function Du(t,e){Wa(t,"da",e)}function Wa(t,e,n=ve){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ys(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Js(r.parent.vnode)&&Mu(s,e,n,r),r=r.parent}}function Mu(t,e,n,s){const r=Ys(e,t,s,!0);qa(()=>{ti(s[e],r)},n)}function Ys(t,e,n=ve,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Sn(),_n(n);const a=je(e,n,t,o);return Gt(),kn(),a});return s?r.unshift(i):r.push(i),i}}const mt=t=>(e,n=ve)=>(!Zn||t==="sp")&&Ys(t,(...s)=>e(...s),n),Lu=mt("bm"),za=mt("m"),Uu=mt("bu"),$u=mt("u"),Ka=mt("bum"),qa=mt("um"),Fu=mt("sp"),Bu=mt("rtg"),ju=mt("rtc");function Hu(t,e=ve){Ys("ec",t,e)}function we(t,e){const n=xe;if(n===null)return t;const s=er(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,l,c=ue]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&zt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Lt(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Sn(),je(l,n,8,[t.el,a,t,e]),kn())}}const pi="components";function Xt(t,e){return Ja(pi,t,!0,e)||t}const Ga=Symbol();function Vu(t){return _e(t)?Ja(pi,t,!1)||t:t||Ga}function Ja(t,e,n=!0,s=!1){const r=xe||ve;if(r){const i=r.type;if(t===pi){const a=vf(i,!1);if(a&&(a===e||a===it(e)||a===zs(it(e))))return i}const o=Zi(r[t]||i[t],e)||Zi(r.appContext[t],e);return!o&&s?i:o}}function Zi(t,e){return t&&(t[e]||t[it(e)]||t[zs(it(e))])}function vy(t,e,n,s){let r;const i=n&&n[s];if(F(t)||_e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(le(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Wu(t,e,n={},s,r){if(xe.isCE||xe.parent&&Fn(xe.parent)&&xe.parent.isCE)return e!=="default"&&(n.name=e),te("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&Ya(i(n)),a=Qs(Le,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ya(t){return t.some(e=>Ms(e)?!(e.type===He||e.type===Le&&!Ya(e.children)):!0)?t:null}const Or=t=>t?ll(t)?er(t)||t.proxy:Or(t.parent):null,Bn=Se(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>hi(t.update)),$nextTick:t=>t.n||(t.n=di.bind(t.proxy)),$watch:t=>Pu.bind(t)}),fr=(t,e)=>t!==ue&&!t.__isScriptSetup&&Q(t,e),zu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(fr(s,e))return o[e]=1,s[e];if(r!==ue&&Q(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return o[e]=3,i[e];if(n!==ue&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const f=Bn[e];let h,p;if(f)return e==="$attrs"&&$e(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ue&&Q(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return fr(r,e)?(r[e]=n,!0):s!==ue&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ue&&Q(t,o)||fr(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q(Bn,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Ku(t){const e=gi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:c,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:x,activated:S,deactivated:U,beforeDestroy:R,beforeUnmount:B,destroyed:O,unmounted:W,render:K,renderTracked:re,renderTriggered:z,errorCaptured:A,serverPrefetch:J,expose:Y,inheritAttrs:de,components:be,directives:Ne,filters:Ce}=e;if(c&&qu(c,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ne=o[ie];V(ne)&&(s[ie]=ne.bind(n))}if(r){const ie=r.call(n,n);le(ie)&&(t.data=Cn(ie))}if(Nr=!0,i)for(const ie in i){const ne=i[ie],We=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):Je,Mt=!V(ne)&&V(ne.set)?ne.set.bind(n):Je,ze=Ue({get:We,set:Mt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Ae=>ze.value=Ae})}if(a)for(const ie in a)Xa(a[ie],s,n,ie);if(l){const ie=V(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ne=>{xs(ne,ie[ne])})}f&&eo(f,t,"c");function ge(ie,ne){F(ne)?ne.forEach(We=>ie(We.bind(n))):ne&&ie(ne.bind(n))}if(ge(Lu,h),ge(za,p),ge(Uu,b),ge($u,x),ge(Nu,S),ge(Du,U),ge(Hu,A),ge(ju,re),ge(Bu,z),ge(Ka,B),ge(qa,W),ge(Fu,J),F(Y))if(Y.length){const ie=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});K&&t.render===Je&&(t.render=K),de!=null&&(t.inheritAttrs=de),be&&(t.components=be),Ne&&(t.directives=Ne)}function qu(t,e,n=Je,s=!1){F(t)&&(t=Dr(t));for(const r in t){const i=t[r];let o;le(i)?"default"in i?o=nt(i.from||r,i.default,!0):o=nt(i.from||r):o=nt(i),pe(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function eo(t,e,n){je(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xa(t,e,n,s){const r=s.includes(".")?Ba(n,s):()=>n[s];if(_e(t)){const i=e[t];V(i)&&$n(r,i)}else if(V(t))$n(r,t.bind(n));else if(le(t))if(F(t))t.forEach(i=>Xa(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&$n(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ds(l,c,o,!0)),Ds(l,e,o)),le(e)&&i.set(e,l),l}function Ds(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ds(t,i,n,!0),r&&r.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gu={data:to,props:Ft,emits:Ft,methods:Ft,computed:Ft,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:Ft,directives:Ft,watch:Yu,provide:to,inject:Ju};function to(t,e){return e?t?function(){return Se(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Ju(t,e){return Ft(Dr(t),Dr(e))}function Dr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pe(t,e){return t?[...new Set([].concat(t,e))]:e}function Ft(t,e){return t?Se(Se(Object.create(null),t),e):e}function Yu(t,e){if(!t)return e;if(!e)return t;const n=Se(Object.create(null),t);for(const s in e)n[s]=Pe(t[s],e[s]);return n}function Xu(t,e,n,s=!1){const r={},i={};As(i,Zs,1),t.propsDefaults=Object.create(null),Qa(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:lu(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Qu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Gs(t.emitsOptions,p))continue;const b=e[p];if(l)if(Q(i,p))b!==i[p]&&(i[p]=b,c=!0);else{const x=it(p);r[x]=Mr(l,a,x,b,t,!1)}else b!==i[p]&&(i[p]=b,c=!0)}}}else{Qa(t,e,r,i)&&(c=!0);let f;for(const h in a)(!e||!Q(e,h)&&((f=Tn(h))===h||!Q(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Mr(l,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h))&&(delete i[h],c=!0)}c&&pt(t,"set","$attrs")}function Qa(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Is(l))continue;const c=e[l];let f;r&&Q(r,f=it(l))?!i||!i.includes(f)?n[f]=c:(a||(a={}))[f]=c:Gs(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(i){const l=Z(n),c=a||ue;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Mr(r,l,h,c[h],t,!Q(c,h))}}return o}function Mr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&V(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(_n(r),s=c[n]=l.call(null,e),Gt())}else s=l}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Tn(n))&&(s=!0))}return s}function Za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!V(t)){const f=h=>{l=!0;const[p,b]=Za(h,e,!0);Se(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return le(t)&&s.set(t,ln),ln;if(F(i))for(let f=0;f<i.length;f++){const h=it(i[f]);no(h)&&(o[h]=ue)}else if(i)for(const f in i){const h=it(f);if(no(h)){const p=i[f],b=o[h]=F(p)||V(p)?{type:p}:Object.assign({},p);if(b){const x=io(Boolean,b.type),S=io(String,b.type);b[0]=x>-1,b[1]=S<0||x<S,(x>-1||Q(b,"default"))&&a.push(h)}}}const c=[o,a];return le(t)&&s.set(t,c),c}function no(t){return t[0]!=="$"}function so(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ro(t,e){return so(t)===so(e)}function io(t,e){return F(e)?e.findIndex(n=>ro(n,t)):V(e)&&ro(e,t)?0:-1}const el=t=>t[0]==="_"||t==="$stable",mi=t=>F(t)?t.map(et):[et(t)],Zu=(t,e,n)=>{if(e._n)return e;const s=Be((...r)=>mi(e(...r)),n);return s._c=!1,s},tl=(t,e,n)=>{const s=t._ctx;for(const r in t){if(el(r))continue;const i=t[r];if(V(i))e[r]=Zu(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},nl=(t,e)=>{const n=mi(e);t.slots.default=()=>n},ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),As(e,"_",n)):tl(e,t.slots={})}else t.slots={},e&&nl(t,e);As(t.slots,Zs,1)},tf=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ue;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Se(r,e),!n&&a===1&&delete r._):(i=!e.$stable,tl(e,r)),o=e}else e&&(nl(t,e),o={default:1});if(i)for(const a in r)!el(a)&&!(a in o)&&delete r[a]};function sl(){return{app:null,config:{isNativeTag:kc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function sf(t,e){return function(s,r=null){V(s)||(s=Object.assign({},s)),r!=null&&!le(r)&&(r=null);const i=sl(),o=new Set;let a=!1;const l=i.app={_uid:nf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xf,get config(){return i.config},set config(c){},use(c,...f){return o.has(c)||(c&&V(c.install)?(o.add(c),c.install(l,...f)):V(c)&&(o.add(c),c(l,...f))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,f){return f?(i.components[c]=f,l):i.components[c]},directive(c,f){return f?(i.directives[c]=f,l):i.directives[c]},mount(c,f,h){if(!a){const p=te(s,r);return p.appContext=i,f&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,er(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,f){return i.provides[c]=f,l}};return l}}function Lr(t,e,n,s,r=!1){if(F(t)){t.forEach((p,b)=>Lr(p,e&&(F(e)?e[b]:e),n,s,r));return}if(Fn(s)&&!r)return;const i=s.shapeFlag&4?er(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=t,c=e&&e.r,f=a.refs===ue?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(_e(c)?(f[c]=null,Q(h,c)&&(h[c]=null)):pe(c)&&(c.value=null)),V(l))Ct(l,a,12,[o,f]);else{const p=_e(l),b=pe(l);if(p||b){const x=()=>{if(t.f){const S=p?Q(h,l)?h[l]:f[l]:l.value;r?F(S)&&ti(S,i):F(S)?S.includes(i)||S.push(i):p?(f[l]=[i],Q(h,l)&&(h[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else p?(f[l]=o,Q(h,l)&&(h[l]=o)):b&&(l.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,Oe(x,n)):x()}}}const Oe=Cu;function rf(t){return of(t)}function of(t,e){const n=Nc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Je,insertStaticContent:x}=t,S=(u,d,g,m=null,v=null,E=null,C=!1,I=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!Ht(u,d)&&(m=k(u),Ae(u,v,E,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:N}=d;switch(w){case Xs:U(u,d,g,m);break;case He:R(u,d,g,m);break;case Ts:u==null&&B(d,g,m,C);break;case Le:be(u,d,g,m,v,E,C,I,T);break;default:N&1?K(u,d,g,m,v,E,C,I,T):N&6?Ne(u,d,g,m,v,E,C,I,T):(N&64||N&128)&&w.process(u,d,g,m,v,E,C,I,T,X)}M!=null&&v&&Lr(M,u&&u.ref,E,d||u,!d)},U=(u,d,g,m)=>{if(u==null)s(d.el=a(d.children),g,m);else{const v=d.el=u.el;d.children!==u.children&&c(v,d.children)}},R=(u,d,g,m)=>{u==null?s(d.el=l(d.children||""),g,m):d.el=u.el},B=(u,d,g,m)=>{[u.el,u.anchor]=x(u.children,d,g,m,u.el,u.anchor)},O=({el:u,anchor:d},g,m)=>{let v;for(;u&&u!==d;)v=p(u),s(u,g,m),u=v;s(d,g,m)},W=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},K=(u,d,g,m,v,E,C,I,T)=>{C=C||d.type==="svg",u==null?re(d,g,m,v,E,C,I,T):J(u,d,v,E,C,I,T)},re=(u,d,g,m,v,E,C,I)=>{let T,w;const{type:M,props:N,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=o(u.type,E,N&&N.is,N),L&8?f(T,u.children):L&16&&A(u.children,T,null,m,v,E&&M!=="foreignObject",C,I),G&&Lt(u,null,m,"created"),N){for(const se in N)se!=="value"&&!Is(se)&&i(T,se,null,N[se],E,u.children,m,v,P);"value"in N&&i(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Ze(w,m,u)}z(T,u,u.scopeId,C,m),G&&Lt(u,null,m,"beforeMount");const oe=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,d,g),((w=N&&N.onVnodeMounted)||oe||G)&&Oe(()=>{w&&Ze(w,m,u),oe&&H.enter(T),G&&Lt(u,null,m,"mounted")},v)},z=(u,d,g,m,v)=>{if(g&&b(u,g),m)for(let E=0;E<m.length;E++)b(u,m[E]);if(v){let E=v.subTree;if(d===E){const C=v.vnode;z(u,C,C.scopeId,C.slotScopeIds,v.parent)}}},A=(u,d,g,m,v,E,C,I,T=0)=>{for(let w=T;w<u.length;w++){const M=u[w]=I?vt(u[w]):et(u[w]);S(null,M,d,g,m,v,E,C,I)}},J=(u,d,g,m,v,E,C)=>{const I=d.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:M}=d;T|=u.patchFlag&16;const N=u.props||ue,L=d.props||ue;let H;g&&Ut(g,!1),(H=L.onVnodeBeforeUpdate)&&Ze(H,g,d,u),M&&Lt(d,u,g,"beforeUpdate"),g&&Ut(g,!0);const G=v&&d.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,I,g,m,G,E):C||ne(u,d,I,null,g,m,G,E,!1),T>0){if(T&16)de(I,d,N,L,g,m,v);else if(T&2&&N.class!==L.class&&i(I,"class",null,L.class,v),T&4&&i(I,"style",N.style,L.style,v),T&8){const oe=d.dynamicProps;for(let se=0;se<oe.length;se++){const me=oe[se],Ke=N[me],sn=L[me];(sn!==Ke||me==="value")&&i(I,me,Ke,sn,v,u.children,g,m,P)}}T&1&&u.children!==d.children&&f(I,d.children)}else!C&&w==null&&de(I,d,N,L,g,m,v);((H=L.onVnodeUpdated)||M)&&Oe(()=>{H&&Ze(H,g,d,u),M&&Lt(d,u,g,"updated")},m)},Y=(u,d,g,m,v,E,C)=>{for(let I=0;I<d.length;I++){const T=u[I],w=d[I],M=T.el&&(T.type===Le||!Ht(T,w)||T.shapeFlag&70)?h(T.el):g;S(T,w,M,null,m,v,E,C,!0)}},de=(u,d,g,m,v,E,C)=>{if(g!==m){if(g!==ue)for(const I in g)!Is(I)&&!(I in m)&&i(u,I,g[I],null,C,d.children,v,E,P);for(const I in m){if(Is(I))continue;const T=m[I],w=g[I];T!==w&&I!=="value"&&i(u,I,w,T,C,d.children,v,E,P)}"value"in m&&i(u,"value",g.value,m.value)}},be=(u,d,g,m,v,E,C,I,T)=>{const w=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=d;H&&(I=I?I.concat(H):H),u==null?(s(w,g,m),s(M,g,m),A(d.children,g,M,v,E,C,I,T)):N>0&&N&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,g,v,E,C,I),(d.key!=null||v&&d===v.subTree)&&rl(u,d,!0)):ne(u,d,g,M,v,E,C,I,T)},Ne=(u,d,g,m,v,E,C,I,T)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?v.ctx.activate(d,g,m,C,T):Ce(d,g,m,v,E,C,T):ye(u,d,T)},Ce=(u,d,g,m,v,E,C)=>{const I=u.component=gf(u,m,v);if(Js(u)&&(I.ctx.renderer=X),mf(I),I.asyncDep){if(v&&v.registerDep(I,ge),!u.el){const T=I.subTree=te(He);R(null,T,d,g)}return}ge(I,u,d,g,v,E,C)},ye=(u,d,g)=>{const m=d.component=u.component;if(Tu(u,d,g))if(m.asyncDep&&!m.asyncResolved){ie(m,d,g);return}else m.next=d,yu(m.update),m.update();else d.el=u.el,m.vnode=d},ge=(u,d,g,m,v,E,C)=>{const I=()=>{if(u.isMounted){let{next:M,bu:N,u:L,parent:H,vnode:G}=u,oe=M,se;Ut(u,!1),M?(M.el=G.el,ie(u,M,C)):M=G,N&&Es(N),(se=M.props&&M.props.onVnodeBeforeUpdate)&&Ze(se,H,M,G),Ut(u,!0);const me=cr(u),Ke=u.subTree;u.subTree=me,S(Ke,me,h(Ke.el),k(Ke),u,v,E),M.el=me.el,oe===null&&Su(u,me.el),L&&Oe(L,v),(se=M.props&&M.props.onVnodeUpdated)&&Oe(()=>Ze(se,H,M,G),v)}else{let M;const{el:N,props:L}=d,{bm:H,m:G,parent:oe}=u,se=Fn(d);if(Ut(u,!1),H&&Es(H),!se&&(M=L&&L.onVnodeBeforeMount)&&Ze(M,oe,d),Ut(u,!0),N&&q){const me=()=>{u.subTree=cr(u),q(N,u.subTree,u,v,null)};se?d.type.__asyncLoader().then(()=>!u.isUnmounted&&me()):me()}else{const me=u.subTree=cr(u);S(null,me,g,m,u,v,E),d.el=me.el}if(G&&Oe(G,v),!se&&(M=L&&L.onVnodeMounted)){const me=d;Oe(()=>Ze(M,oe,me),v)}(d.shapeFlag&256||oe&&Fn(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Oe(u.a,v),u.isMounted=!0,d=g=m=null}},T=u.effect=new ri(I,()=>hi(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,Ut(u,!0),w()},ie=(u,d,g)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Qu(u,d.props,m,g),tf(u,d.children,g),Sn(),Yi(),kn()},ne=(u,d,g,m,v,E,C,I,T=!1)=>{const w=u&&u.children,M=u?u.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:H}=d;if(L>0){if(L&128){Mt(w,N,g,m,v,E,C,I,T);return}else if(L&256){We(w,N,g,m,v,E,C,I,T);return}}H&8?(M&16&&P(w,v,E),N!==w&&f(g,N)):M&16?H&16?Mt(w,N,g,m,v,E,C,I,T):P(w,v,E,!0):(M&8&&f(g,""),H&16&&A(N,g,m,v,E,C,I,T))},We=(u,d,g,m,v,E,C,I,T)=>{u=u||ln,d=d||ln;const w=u.length,M=d.length,N=Math.min(w,M);let L;for(L=0;L<N;L++){const H=d[L]=T?vt(d[L]):et(d[L]);S(u[L],H,g,null,v,E,C,I,T)}w>M?P(u,v,E,!0,!1,N):A(d,g,m,v,E,C,I,T,N)},Mt=(u,d,g,m,v,E,C,I,T)=>{let w=0;const M=d.length;let N=u.length-1,L=M-1;for(;w<=N&&w<=L;){const H=u[w],G=d[w]=T?vt(d[w]):et(d[w]);if(Ht(H,G))S(H,G,g,null,v,E,C,I,T);else break;w++}for(;w<=N&&w<=L;){const H=u[N],G=d[L]=T?vt(d[L]):et(d[L]);if(Ht(H,G))S(H,G,g,null,v,E,C,I,T);else break;N--,L--}if(w>N){if(w<=L){const H=L+1,G=H<M?d[H].el:m;for(;w<=L;)S(null,d[w]=T?vt(d[w]):et(d[w]),g,G,v,E,C,I,T),w++}}else if(w>L)for(;w<=N;)Ae(u[w],v,E,!0),w++;else{const H=w,G=w,oe=new Map;for(w=G;w<=L;w++){const De=d[w]=T?vt(d[w]):et(d[w]);De.key!=null&&oe.set(De.key,w)}let se,me=0;const Ke=L-G+1;let sn=!1,$i=0;const On=new Array(Ke);for(w=0;w<Ke;w++)On[w]=0;for(w=H;w<=N;w++){const De=u[w];if(me>=Ke){Ae(De,v,E,!0);continue}let Qe;if(De.key!=null)Qe=oe.get(De.key);else for(se=G;se<=L;se++)if(On[se-G]===0&&Ht(De,d[se])){Qe=se;break}Qe===void 0?Ae(De,v,E,!0):(On[Qe-G]=w+1,Qe>=$i?$i=Qe:sn=!0,S(De,d[Qe],g,null,v,E,C,I,T),me++)}const Fi=sn?af(On):ln;for(se=Fi.length-1,w=Ke-1;w>=0;w--){const De=G+w,Qe=d[De],Bi=De+1<M?d[De+1].el:m;On[w]===0?S(null,Qe,g,Bi,v,E,C,I,T):sn&&(se<0||w!==Fi[se]?ze(Qe,g,Bi,2):se--)}}},ze=(u,d,g,m,v=null)=>{const{el:E,type:C,transition:I,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,d,g,m);return}if(w&128){u.suspense.move(d,g,m);return}if(w&64){C.move(u,d,g,X);return}if(C===Le){s(E,d,g);for(let N=0;N<T.length;N++)ze(T[N],d,g,m);s(u.anchor,d,g);return}if(C===Ts){O(u,d,g);return}if(m!==2&&w&1&&I)if(m===0)I.beforeEnter(E),s(E,d,g),Oe(()=>I.enter(E),v);else{const{leave:N,delayLeave:L,afterLeave:H}=I,G=()=>s(E,d,g),oe=()=>{N(E,()=>{G(),H&&H()})};L?L(E,G,oe):oe()}else s(E,d,g)},Ae=(u,d,g,m=!1,v=!1)=>{const{type:E,props:C,ref:I,children:T,dynamicChildren:w,shapeFlag:M,patchFlag:N,dirs:L}=u;if(I!=null&&Lr(I,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const H=M&1&&L,G=!Fn(u);let oe;if(G&&(oe=C&&C.onVnodeBeforeUnmount)&&Ze(oe,d,u),M&6)y(u.component,g,m);else{if(M&128){u.suspense.unmount(g,m);return}H&&Lt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,v,X,m):w&&(E!==Le||N>0&&N&64)?P(w,d,g,!1,!0):(E===Le&&N&384||!v&&M&16)&&P(T,d,g),m&&nn(u)}(G&&(oe=C&&C.onVnodeUnmounted)||H)&&Oe(()=>{oe&&Ze(oe,d,u),H&&Lt(u,null,d,"unmounted")},g)},nn=u=>{const{type:d,el:g,anchor:m,transition:v}=u;if(d===Le){hs(g,m);return}if(d===Ts){W(u);return}const E=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:I}=v,T=()=>C(g,E);I?I(u.el,E,T):T()}else E()},hs=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},y=(u,d,g)=>{const{bum:m,scope:v,update:E,subTree:C,um:I}=u;m&&Es(m),v.stop(),E&&(E.active=!1,Ae(C,u,d,g)),I&&Oe(I,d),Oe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},P=(u,d,g,m=!1,v=!1,E=0)=>{for(let C=E;C<u.length;C++)Ae(u[C],d,g,m,v)},k=u=>u.shapeFlag&6?k(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),D=(u,d,g)=>{u==null?d._vnode&&Ae(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,g),Yi(),Ma(),d._vnode=u},X={p:S,um:Ae,m:ze,r:nn,mt:Ce,mc:A,pc:ne,pbc:Y,n:k,o:t};let fe,q;return e&&([fe,q]=e(X)),{render:D,hydrate:fe,createApp:sf(D,fe)}}function Ut({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rl(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=vt(r[i]),a.el=o.el),n||rl(o,a)),a.type===Xs&&(a.el=o.el)}}function af(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const lf=t=>t.__isTeleport,Le=Symbol(void 0),Xs=Symbol(void 0),He=Symbol(void 0),Ts=Symbol(void 0),jn=[];let Ge=null;function he(t=!1){jn.push(Ge=t?null:[])}function cf(){jn.pop(),Ge=jn[jn.length-1]||null}let Qn=1;function oo(t){Qn+=t}function il(t){return t.dynamicChildren=Qn>0?Ge||ln:null,cf(),Qn>0&&Ge&&Ge.push(t),t}function Ee(t,e,n,s,r,i){return il(_(t,e,n,s,r,i,!0))}function Qs(t,e,n,s,r){return il(te(t,e,n,s,r,!0))}function Ms(t){return t?t.__v_isVNode===!0:!1}function Ht(t,e){return t.type===e.type&&t.key===e.key}const Zs="__vInternal",ol=({key:t})=>t??null,Ss=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||pe(t)||V(t)?{i:xe,r:t,k:e,f:!!n}:t:null;function _(t,e=null,n=null,s=0,r=null,i=t===Le?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ol(e),ref:e&&Ss(e),scopeId:$a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:xe};return a?(bi(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=_e(n)?8:16),Qn>0&&!o&&Ge&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ge.push(l),l}const te=uf;function uf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ga)&&(t=He),Ms(t)){const a=Ot(t,e,!0);return n&&bi(a,n),Qn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(wf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:a,style:l}=e;a&&!_e(a)&&(e.class=is(a)),le(l)&&(ka(l)&&!F(l)&&(l=Se({},l)),e.style=Qr(l))}const o=_e(t)?1:ku(t)?128:lf(t)?64:le(t)?4:V(t)?2:0;return _(t,e,n,s,r,o,i,!0)}function ff(t){return t?ka(t)||Zs in t?Se({},t):t:null}function Ot(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?df(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&ol(a),ref:e&&e.ref?n&&r?F(r)?r.concat(Ss(e)):[r,Ss(e)]:Ss(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ot(t.ssContent),ssFallback:t.ssFallback&&Ot(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function Ie(t=" ",e=0){return te(Xs,null,t,e)}function _i(t,e){const n=te(Ts,null,t);return n.staticCount=e,n}function ut(t="",e=!1){return e?(he(),Qs(He,null,t)):te(He,null,t)}function et(t){return t==null||typeof t=="boolean"?te(He):F(t)?te(Le,null,t.slice()):typeof t=="object"?vt(t):te(Xs,null,String(t))}function vt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ot(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Zs in e)?e._ctx=xe:r===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),s&64?(n=16,e=[Ie(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=is([e.class,s.class]));else if(r==="style")e.style=Qr([e.style,s.style]);else if(Vs(r)){const i=e[r],o=s[r];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ze(t,e,n,s=null){je(t,e,7,[n,s])}const hf=sl();let pf=0;function gf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||hf,i={uid:pf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Za(s,r),emitsOptions:Ua(s,r),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:s.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Iu.bind(null,i),t.ce&&t.ce(i),i}let ve=null;const al=()=>ve||xe,_n=t=>{ve=t,t.scope.on()},Gt=()=>{ve&&ve.scope.off(),ve=null};function ll(t){return t.vnode.shapeFlag&4}let Zn=!1;function mf(t,e=!1){Zn=e;const{props:n,children:s}=t.vnode,r=ll(t);Xu(t,n,r,e),ef(t,s);const i=r?_f(t,e):void 0;return Zn=!1,i}function _f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mn(new Proxy(t.ctx,zu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?yf(t):null;_n(t),Sn();const i=Ct(s,t,0,[t.props,r]);if(kn(),Gt(),fa(i)){if(i.then(Gt,Gt),e)return i.then(o=>{ao(t,o,e)}).catch(o=>{qs(o,t,0)});t.asyncDep=i}else ao(t,i,e)}else cl(t,e)}function ao(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Aa(e)),cl(t,n)}let lo;function cl(t,e,n){const s=t.type;if(!t.render){if(!e&&lo&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=Se(Se({isCustomElement:i,delimiters:a},o),l);s.render=lo(r,c)}}t.render=s.render||Je}_n(t),Sn(),Ku(t),kn(),Gt()}function bf(t){return new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}})}function yf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=bf(t))},slots:t.slots,emit:t.emit,expose:e}}function er(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Aa(mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Bn)return Bn[n](t)},has(e,n){return n in e||n in Bn}}))}function vf(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return V(t)&&"__vccOpts"in t}const Ue=(t,e)=>mu(t,e,Zn);function ul(t,e,n){const s=arguments.length;return s===2?le(e)&&!F(e)?Ms(e)?te(t,null,[e]):te(t,e):te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ms(n)&&(n=[n]),te(t,e,n))}const If=Symbol(""),Ef=()=>nt(If),xf="3.2.45",Tf="http://www.w3.org/2000/svg",Vt=typeof document<"u"?document:null,co=Vt&&Vt.createElement("template"),Sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Vt.createElementNS(Tf,t):Vt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Vt.createTextNode(t),createComment:t=>Vt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{co.innerHTML=s?`<svg>${t}</svg>`:t;const a=co.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function kf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Cf(t,e,n){const s=t.style,r=_e(n);if(n&&!r){for(const i in n)Ur(s,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&Ur(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const uo=/\s*!important$/;function Ur(t,e,n){if(F(n))n.forEach(s=>Ur(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Pf(t,e);uo.test(n)?t.setProperty(Tn(s),n.replace(uo,""),"important"):t[s]=n}}const fo=["Webkit","Moz","ms"],dr={};function Pf(t,e){const n=dr[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return dr[e]=s;s=zs(s);for(let r=0;r<fo.length;r++){const i=fo[r]+s;if(i in t)return dr[e]=i}return e}const ho="http://www.w3.org/1999/xlink";function Rf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ho,e.slice(6,e.length)):t.setAttributeNS(ho,e,n);else{const i=Tc(e);n==null||i&&!ca(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Af(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ca(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ct(t,e,n,s){t.addEventListener(e,n,s)}function Of(t,e,n,s){t.removeEventListener(e,n,s)}function Nf(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=Df(e);if(s){const c=i[e]=Uf(s,r);ct(t,a,c,l)}else o&&(Of(t,a,o,l),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function Df(t){let e;if(po.test(t)){e={};let s;for(;s=t.match(po);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Tn(t.slice(2)),e]}let hr=0;const Mf=Promise.resolve(),Lf=()=>hr||(Mf.then(()=>hr=0),hr=Date.now());function Uf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;je($f(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function $f(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const go=/^on[a-z]/,Ff=(t,e,n,s,r=!1,i,o,a,l)=>{e==="class"?kf(t,s,r):e==="style"?Cf(t,n,s):Vs(e)?ei(e)||Nf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,s,r))?Af(t,e,s,i,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rf(t,e,s,r))};function Bf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&go.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||go.test(e)&&_e(n)?!1:e in t}const jf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ou.props;const Nt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>Es(e,n):e};function Hf(t){t.target.composing=!0}function mo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ft={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Nt(r);const i=s||r.props&&r.props.type==="number";ct(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Gn(a)),t._assign(a)}),n&&ct(t,"change",()=>{t.value=t.value.trim()}),e||(ct(t,"compositionstart",Hf),ct(t,"compositionend",mo),ct(t,"change",mo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Nt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Gn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vf={deep:!0,created(t,e,n){t._assign=Nt(n),ct(t,"change",()=>{const s=t._modelValue,r=bn(t),i=t.checked,o=t._assign;if(F(s)){const a=Zr(s,r),l=a!==-1;if(i&&!l)o(s.concat(r));else if(!i&&l){const c=[...s];c.splice(a,1),o(c)}}else if(xn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(fl(t,i))})},mounted:_o,beforeUpdate(t,e,n){t._assign=Nt(n),_o(t,e,n)}};function _o(t,{value:e,oldValue:n},s){t._modelValue=e,F(e)?t.checked=Zr(e,s.props.value)>-1:xn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Yt(e,fl(t,!0)))}const Wf={created(t,{value:e},n){t.checked=Yt(e,n.props.value),t._assign=Nt(n),ct(t,"change",()=>{t._assign(bn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Nt(s),e!==n&&(t.checked=Yt(e,s.props.value))}},zf={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=xn(e);ct(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Gn(bn(o)):bn(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Nt(s)},mounted(t,{value:e}){bo(t,e)},beforeUpdate(t,e,n){t._assign=Nt(n)},updated(t,{value:e}){bo(t,e)}};function bo(t,e){const n=t.multiple;if(!(n&&!F(e)&&!xn(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=bn(i);if(n)F(e)?i.selected=Zr(e,o)>-1:i.selected=e.has(o);else if(Yt(bn(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bn(t){return"_value"in t?t._value:t.value}function fl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const $r={created(t,e,n){vs(t,e,n,null,"created")},mounted(t,e,n){vs(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){vs(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){vs(t,e,n,s,"updated")}};function Kf(t,e){switch(t){case"SELECT":return zf;case"TEXTAREA":return ft;default:switch(e){case"checkbox":return Vf;case"radio":return Wf;default:return ft}}}function vs(t,e,n,s,r){const o=Kf(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const Wt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Nn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Nn(t,!0),s.enter(t)):s.leave(t,()=>{Nn(t,!1)}):Nn(t,e))},beforeUnmount(t,{value:e}){Nn(t,e)}};function Nn(t,e){t.style.display=e?t._vod:"none"}const qf=Se({patchProp:Ff},Sf);let yo;function Gf(){return yo||(yo=rf(qf))}const Jf=(...t)=>{const e=Gf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Yf(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Yf(t){return _e(t)?document.querySelector(t):t}var Xf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let dl;const tr=t=>dl=t,hl=Symbol();function Fr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Hn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Hn||(Hn={}));function Qf(){const t=ga(!0),e=t.run(()=>ui({}));let n=[],s=[];const r=mn({install(i){tr(r),r._a=i,i.provide(hl,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Xf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const pl=()=>{};function vo(t,e,n,s=pl){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Mc()&&Lc(r),r}function rn(t,...e){t.slice().forEach(n=>{n(...e)})}function Br(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Fr(r)&&Fr(s)&&t.hasOwnProperty(n)&&!pe(s)&&!kt(s)?t[n]=Br(r,s):t[n]=s}return t}const Zf=Symbol();function ed(t){return!Fr(t)||!t.hasOwnProperty(Zf)}const{assign:wt}=Object;function td(t){return!!(pe(t)&&t.effect)}function nd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const f=du(n.state.value[t]);return wt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=mn(Ue(()=>{tr(n);const b=n._s.get(t);return o[p].call(b,b)})),h),{}))}return l=gl(t,c,e,n,s,!0),l.$reset=function(){const h=r?r():{};this.$patch(p=>{wt(p,h)})},l}function gl(t,e,n={},s,r,i){let o;const a=wt({actions:{}},n),l={deep:!0};let c,f,h=mn([]),p=mn([]),b;const x=s.state.value[t];!i&&!x&&(s.state.value[t]={}),ui({});let S;function U(z){let A;c=f=!1,typeof z=="function"?(z(s.state.value[t]),A={type:Hn.patchFunction,storeId:t,events:b}):(Br(s.state.value[t],z),A={type:Hn.patchObject,payload:z,storeId:t,events:b});const J=S=Symbol();di().then(()=>{S===J&&(c=!0)}),f=!0,rn(h,A,s.state.value[t])}const R=pl;function B(){o.stop(),h=[],p=[],s._s.delete(t)}function O(z,A){return function(){tr(s);const J=Array.from(arguments),Y=[],de=[];function be(ye){Y.push(ye)}function Ne(ye){de.push(ye)}rn(p,{args:J,name:z,store:K,after:be,onError:Ne});let Ce;try{Ce=A.apply(this&&this.$id===t?this:K,J)}catch(ye){throw rn(de,ye),ye}return Ce instanceof Promise?Ce.then(ye=>(rn(Y,ye),ye)).catch(ye=>(rn(de,ye),Promise.reject(ye))):(rn(Y,Ce),Ce)}}const W={_p:s,$id:t,$onAction:vo.bind(null,p),$patch:U,$reset:R,$subscribe(z,A={}){const J=vo(h,z,A.detached,()=>Y()),Y=o.run(()=>$n(()=>s.state.value[t],de=>{(A.flush==="sync"?f:c)&&z({storeId:t,type:Hn.direct,events:b},de)},wt({},l,A)));return J},$dispose:B},K=Cn(W);s._s.set(t,K);const re=s._e.run(()=>(o=ga(),o.run(()=>e())));for(const z in re){const A=re[z];if(pe(A)&&!td(A)||kt(A))i||(x&&ed(A)&&(pe(A)?A.value=x[z]:Br(A,x[z])),s.state.value[t][z]=A);else if(typeof A=="function"){const J=O(z,A);re[z]=J,a.actions[z]=A}}return wt(K,re),wt(Z(K),re),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:z=>{U(A=>{wt(A,z)})}}),s._p.forEach(z=>{wt(K,o.run(()=>z({store:K,app:s._a,pinia:s,options:a})))}),x&&i&&n.hydrate&&n.hydrate(K.$state,x),c=!0,f=!0,K}function sd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,l){const c=al();return a=a||c&&nt(hl,null),a&&tr(a),a=dl,a._s.has(s)||(i?gl(s,e,r,a):nd(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ml=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},rd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_l={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,b=c&63;l||(b=64,o||(p=64)),s.push(n[f],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ml(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||c==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),c!==64){const b=a<<4&240|c>>2;if(s.push(b),h!==64){const x=c<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},id=function(t){const e=ml(t);return _l.encodeByteArray(e,!0)},bl=function(t){return id(t).replace(/\./g,"")},yl=function(t){try{return _l.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const ad=()=>od().__FIREBASE_DEFAULTS__,ld=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cd=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yl(t[1]);return e&&JSON.parse(e)},yi=()=>{try{return ad()||ld()||cd()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ud=t=>{var e,n;return(n=(e=yi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fd=()=>{var t;return(t=yi())===null||t===void 0?void 0:t.config},vl=t=>{var e;return(e=yi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function pd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function md(){const t=ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="FirebaseError";class Dt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yd,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,as.prototype.create)}}class as{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?vd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dt(r,a,s)}}function vd(t,e){return t.replace(wd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wd=/\{\$([^}]+)}/g;function Id(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ls(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wo(i)&&wo(o)){if(!Ls(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ln(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Un(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Ed(t,e){const n=new xd(t,e);return n.subscribe.bind(n)}class xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Td(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=pr),r.error===void 0&&(r.error=pr),r.complete===void 0&&(r.complete=pr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Td(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pr(){}/**
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
 */class Sd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cd(e))try{this.getOrInitializeService({instanceIdentifier:Bt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Bt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bt){return this.instances.has(e)}getOptions(e=Bt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bt){return this.component?this.component.multipleInstances?e:Bt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kd(t){return t===Bt?void 0:t}function Cd(t){return t.instantiationMode==="EAGER"}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Rd={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Ad=ae.INFO,Od={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Nd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Od[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wl{constructor(e){this.name=e,this._logLevel=Ad,this._logHandler=Nd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Dd=(t,e)=>e.some(n=>t instanceof n);let Io,Eo;function Md(){return Io||(Io=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return Eo||(Eo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Il=new WeakMap,jr=new WeakMap,El=new WeakMap,gr=new WeakMap,vi=new WeakMap;function Ud(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Pt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Il.set(n,t)}).catch(()=>{}),vi.set(e,t),e}function $d(t){if(jr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});jr.set(t,e)}let Hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return jr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||El.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fd(t){Hr=t(Hr)}function Bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(mr(this),e,...n);return El.set(s,e.sort?e.sort():[e]),Pt(s)}:Ld().includes(t)?function(...e){return t.apply(mr(this),e),Pt(Il.get(this))}:function(...e){return Pt(t.apply(mr(this),e))}}function jd(t){return typeof t=="function"?Bd(t):(t instanceof IDBTransaction&&$d(t),Dd(t,Md())?new Proxy(t,Hr):t)}function Pt(t){if(t instanceof IDBRequest)return Ud(t);if(gr.has(t))return gr.get(t);const e=jd(t);return e!==t&&(gr.set(t,e),vi.set(e,t)),e}const mr=t=>vi.get(t);function Hd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Pt(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Pt(o.result),l.oldVersion,l.newVersion,Pt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Vd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],_r=new Map;function xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_r.get(e))return _r.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Wd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Vd.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return _r.set(e,i),i}Fd(t=>({...t,get:(e,n,s)=>xo(e,n)||t.get(e,n,s),has:(e,n)=>!!xo(e,n)||t.has(e,n)}));/**
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
 */const Us=new Map,zr=new Map;function yh(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(zr.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;zr.set(e,t);for(const n of Us.values())yh(n,t);return!0}function xl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rt=new as("app","Firebase",vh);/**
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
 */class wh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=_h;function Tl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Wr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Rt.create("bad-app-name",{appName:String(r)});if(n||(n=fd()),!n)throw Rt.create("no-options");const i=Us.get(r);if(i){if(Ls(n,i.options)&&Ls(s,i.config))return i;throw Rt.create("duplicate-app",{appName:r})}const o=new Pd(r);for(const l of zr.values())o.addComponent(l);const a=new wh(n,s,o);return Us.set(r,a),a}function Ih(t=Wr){const e=Us.get(t);if(!e&&t===Wr)return Tl();if(!e)throw Rt.create("no-app",{appName:t});return e}function dn(t,e,n){var s;let r=(s=bh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}es(new yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Eh="firebase-heartbeat-database",xh=1,ts="firebase-heartbeat-store";let br=null;function Sl(){return br||(br=Hd(Eh,xh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ts)}}}).catch(t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})})),br}async function Th(t){try{return(await Sl()).transaction(ts).objectStore(ts).get(kl(t))}catch(e){if(e instanceof Dt)Qt.warn(e.message);else{const n=Rt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function So(t,e){try{const s=(await Sl()).transaction(ts,"readwrite");return await s.objectStore(ts).put(e,kl(t)),s.done}catch(n){if(n instanceof Dt)Qt.warn(n.message);else{const s=Rt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function kl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sh=1024,kh=30*24*60*60*1e3;class Ch{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ko();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=kh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ko(),{heartbeatsToSend:n,unsentEntries:s}=Ph(this._heartbeatsCache.heartbeats),r=bl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ko(){return new Date().toISOString().substring(0,10)}function Ph(t,e=Sh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Co(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Co(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Th(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Co(t){return bl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ah(t){es(new yn("platform-logger",e=>new zd(e),"PRIVATE")),es(new yn("heartbeat",e=>new Ch(e),"PRIVATE")),dn(Vr,To,t),dn(Vr,To,"esm2017"),dn("fire-js","")}Ah("");function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Cl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=Cl,Pl=new as("auth","Firebase",Cl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new wl("@firebase/auth");function ks(t,...e){Po.logLevel<=ae.ERROR&&Po.error(`Auth (${nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw Ii(t,...e)}function st(t,...e){return Ii(t,...e)}function Rl(t,e,n){const s=Object.assign(Object.assign({},Oh()),{[e]:n});return new as("auth","Firebase",s).create(e,{appName:t.name})}function Nh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ve(t,"argument-error"),Rl(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ii(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Pl.create(t,...e)}function $(t,e,...n){if(!t)throw Ii(e,...n)}function dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ks(e),new Error(e)}function gt(t,e){t||dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map;function ht(t){gt(t instanceof Function,"Expected a class definition");let e=Ro.get(t);return e?(gt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ro.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t,e){const n=xl(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Ls(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Mh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Uh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Lh()||pd()||"connection"in navigator)?navigator.onLine:!0}function $h(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,gt(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||gd()}get(){return Uh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t,e){gt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh=new cs(3e4,6e4);function Pn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tn(t,e,n,s,r={}){return Ol(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=ls(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Al.fetch()(Nl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ol(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Fh),e);try{const r=new jh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ws(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ws(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ws(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ws(t,"user-disabled",o);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rl(t,f,c);Ve(t,f)}}catch(r){if(r instanceof Dt)throw r;Ve(t,"network-request-failed")}}async function us(t,e,n,s,r={}){const i=await tn(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Nl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ei(t.config,r):`${t.config.apiScheme}://${r}`}class jh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(st(this.auth,"network-request-failed")),Bh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ws(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=st(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){return tn(t,"POST","/v1/accounts:delete",e)}async function Vh(t,e){return tn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const n=Xe(t),s=await n.getIdToken(e),r=xi(s);$(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Vn(yr(r.auth_time)),issuedAtTime:Vn(yr(r.iat)),expirationTime:Vn(yr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function yr(t){return Number(t)*1e3}function xi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return ks("JWT malformed, contained fewer than 3 sections"),null;try{const r=yl(n);return r?JSON.parse(r):(ks("Failed to decode base64 JWT payload"),null)}catch(r){return ks("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zh(t){const e=xi(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dt&&Kh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Vn(this.lastLoginAt),this.creationTime=Vn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $s(t){var e;const n=t.auth,s=await t.getIdToken(),r=await vn(t,Vh(n,{idToken:s}));$(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yh(i.providerUserInfo):[],a=Jh(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Dl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Gh(t){const e=Xe(t);await $s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Yh(t){return t.map(e=>{var{providerId:n}=e,s=wi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e){const n=await Ol(t,{},async()=>{const s=ls({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Nl(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Al.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Xh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ns;return s&&($(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&($(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&($(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vn(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wh(this,e)}reload(){return Gh(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await $s(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vn(this,Hh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,c,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,R=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:W,isAnonymous:K,providerData:re,stsTokenManager:z}=n;$(O&&z,e,"internal-error");const A=ns.fromJSON(this.name,z);$(typeof O=="string",e,"internal-error"),bt(h,e.name),bt(p,e.name),$(typeof W=="boolean",e,"internal-error"),$(typeof K=="boolean",e,"internal-error"),bt(b,e.name),bt(x,e.name),bt(S,e.name),bt(U,e.name),bt(R,e.name),bt(B,e.name);const J=new Jt({uid:O,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:b,tenantId:S,stsTokenManager:A,createdAt:R,lastLoginAt:B});return re&&Array.isArray(re)&&(J.providerData=re.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new ns;r.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await $s(i),i}}/**
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
 */class Ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ml.type="NONE";const Oo=Ml;/**
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
 */function Cs(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Cs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Cs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(ht(Oo),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=r[0]||ht(Oo);const o=Cs(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(o);if(f){const h=Jt._fromJSON(e,f);c!==i&&(a=h),i=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new hn(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new hn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($l(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ll(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bl(e))return"Blackberry";if(jl(e))return"Webos";if(Ti(e))return"Safari";if((e.includes("chrome/")||Ul(e))&&!e.includes("edge/"))return"Chrome";if(Fl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Ll(t=ke()){return/firefox\//i.test(t)}function Ti(t=ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ul(t=ke()){return/crios\//i.test(t)}function $l(t=ke()){return/iemobile/i.test(t)}function Fl(t=ke()){return/android/i.test(t)}function Bl(t=ke()){return/blackberry/i.test(t)}function jl(t=ke()){return/webos/i.test(t)}function sr(t=ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qh(t=ke()){var e;return sr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zh(){return md()&&document.documentMode===10}function Hl(t=ke()){return sr(t)||Fl(t)||jl(t)||Bl(t)||/windows phone/i.test(t)||$l(t)}function ep(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(t,e=[]){let n;switch(t){case"Browser":n=No(ke());break;case"Worker":n=`${No(ke())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class np{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Do(this),this.idTokenSubscription=new Do(this),this.beforeStateQueue=new tp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ht(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $s(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$h()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Xe(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new as("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ht(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Rn(t){return Xe(t)}class Do{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ed(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sp(t,e,n){const s=Rn(t);$(s._canInitEmulator,s,"emulator-config-failed"),$(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wl(e),{host:o,port:a}=rp(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ip()}function Wl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rp(t){const e=Wl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Mo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Mo(o)}}}function Mo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ip(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dt("not implemented")}_getIdTokenResponse(e){return dt("not implemented")}_linkToIdToken(e,n){return dt("not implemented")}_getReauthenticationResolver(e){return dt("not implemented")}}async function op(t,e){return tn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e){return us(t,"POST","/v1/accounts:signInWithPassword",Pn(t,e))}async function lp(t,e){return tn(t,"POST","/v1/accounts:sendOobCode",Pn(t,e))}async function cp(t,e){return lp(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function up(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}async function fp(t,e){return us(t,"POST","/v1/accounts:signInWithEmailLink",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends Si{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ss(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ss(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ap(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return up(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return op(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return fp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e){return us(t,"POST","/v1/accounts:signInWithIdp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dp="http://localhost";class Zt extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:dp,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ls(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pp(t){const e=Ln(Un(t)).link,n=e?Ln(Un(e)).deep_link_id:null,s=Ln(Un(t)).deep_link_id;return(s?Ln(Un(s)).link:null)||s||n||e||t}class ki{constructor(e){var n,s,r,i,o,a;const l=Ln(Un(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(s=l.oobCode)!==null&&s!==void 0?s:null,h=hp((r=l.mode)!==null&&r!==void 0?r:null);$(c&&f&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pp(e);try{return new ki(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.providerId=An.PROVIDER_ID}static credential(e,n){return ss._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=ki.parseLink(n);return $(s,"argument-error"),ss._fromEmailAndCode(e,s.code,s.tenantId)}}An.PROVIDER_ID="password";An.EMAIL_PASSWORD_SIGN_IN_METHOD="password";An.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class fs extends Ci{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function gp(t,e){return us(t,"POST","/v1/accounts:signUp",Pn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Fs extends Dt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Fs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Fs(e,n,s,r)}}function zl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Fs._fromErrorAndOperation(t,i,e,s):i})}async function mp(t,e,n=!1){const s=await vn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",s)}/**
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
 */async function _p(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await vn(t,zl(s,r,e,t),n);$(i.idToken,s,"internal-error");const o=xi(i.idToken);$(o,s,"internal-error");const{sub:a}=o;return $(t.uid===a,s,"user-mismatch"),en._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kl(t,e,n=!1){const s="signIn",r=await zl(t,s,e),i=await en._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function bp(t,e){return Kl(Rn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function wy(t,e,n){const s=Xe(t),r={requestType:"PASSWORD_RESET",email:e};n&&yp(s,r,n),await cp(s,r)}async function vp(t,e,n){const s=Rn(t),r=await gp(s,{returnSecureToken:!0,email:e,password:n}),i=await en._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function wp(t,e,n){return bp(Xe(t),An.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function Ep(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const s=Xe(t),i={idToken:await s.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vn(s,Ip(s.auth,i));s.displayName=o.displayName||null,s.photoURL=o.photoUrl||null;const a=s.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=s.displayName,a.photoURL=s.photoURL),await s._updateTokensIfNecessary(o)}function xp(t,e,n,s){return Xe(t).onIdTokenChanged(e,n,s)}function Tp(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Sp(t,e,n,s){return Xe(t).onAuthStateChanged(e,n,s)}function Iy(t){return Xe(t).signOut()}const Bs="__sak";/**
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
 */function kp(){const t=ke();return Ti(t)||sr(t)}const Cp=1e3,Pp=10;class Gl extends ql{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=kp()&&ep(),this.fallbackToPolling=Hl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Pp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Cp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gl.type="LOCAL";const Rp=Gl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ap(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new rr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await Ap(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Op{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Pi("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Np(t){rt().location.href=t}/**
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
 */function Xl(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function Dp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Mp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Lp(){return Xl()?self:null}/**
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
 */const Ql="firebaseLocalStorageDb",Up=1,js="firebaseLocalStorage",Zl="fbase_key";class ds{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ir(t,e){return t.transaction([js],e?"readwrite":"readonly").objectStore(js)}function $p(){const t=indexedDB.deleteDatabase(Ql);return new ds(t).toPromise()}function qr(){const t=indexedDB.open(Ql,Up);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(js,{keyPath:Zl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(js)?e(s):(s.close(),await $p(),e(await qr()))})})}async function Uo(t,e,n){const s=ir(t,!0).put({[Zl]:e,value:n});return new ds(s).toPromise()}async function Fp(t,e){const n=ir(t,!1).get(e),s=await new ds(n).toPromise();return s===void 0?null:s.value}function $o(t,e){const n=ir(t,!0).delete(e);return new ds(n).toPromise()}const Bp=800,jp=3;class ec{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>jp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rr._getInstance(Lp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Dp(),!this.activeServiceWorker)return;this.sender=new Op(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Mp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qr();return await Uo(e,Bs,"1"),await $o(e,Bs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Fp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=ir(r,!1).getAll();return new ds(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Bp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ec.type="LOCAL";const Hp=ec;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Wp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=st("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",Vp().appendChild(s)})}function zp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new cs(3e4,6e4);/**
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
 */function tc(t,e){return e?ht(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ri extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kp(t){return Kl(t.auth,new Ri(t),t.bypassAuthState)}function qp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),_p(n,new Ri(t),t.bypassAuthState)}async function Gp(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),mp(n,new Ri(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kp;case"linkViaPopup":case"linkViaRedirect":return Gp;case"reauthViaPopup":case"reauthViaRedirect":return qp;default:Ve(this.auth,"internal-error")}}resolve(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp=new cs(2e3,1e4);async function sc(t,e,n){const s=Rn(t);Nh(t,e,Ci);const r=tc(s,n);return new Kt(s,"signInViaPopup",e,r).executeNotNull()}class Kt extends nc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Kt.currentPopupAction&&Kt.currentPopupAction.cancel(),Kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){gt(this.filter.length===1,"Popup operations only handle one event");const e=Pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Jp.get())};e()}}Kt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yp="pendingRedirect",Ps=new Map;class Xp extends nc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Ps.get(this.auth._key());if(!e){try{const s=await Qp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Ps.set(this.auth._key(),e)}return this.bypassAuthState||Ps.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qp(t,e){const n=tg(e),s=eg(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Zp(t,e){Ps.set(t._key(),e)}function eg(t){return ht(t._redirectPersistence)}function tg(t){return Cs(Yp,t.config.apiKey,t.name)}async function ng(t,e,n=!1){const s=Rn(t),r=tc(s,e),o=await new Xp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sg=10*60*1e3;class rg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ig(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(st(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fo(e))}saveEventToCache(e){this.cachedEventUids.add(Fo(e)),this.lastProcessedEventTime=Date.now()}}function Fo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ig(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function og(t,e={}){return tn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lg=/^https?/;async function cg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await og(t);for(const n of e)try{if(ug(n))return}catch{}Ve(t,"unauthorized-domain")}function ug(t){const e=Kr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!lg.test(n))return!1;if(ag.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const fg=new cs(3e4,6e4);function Bo(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function dg(t){return new Promise((e,n)=>{var s,r,i;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(st(t,"network-request-failed"))},timeout:fg.get()})}if(!((r=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=zp("iframefcb");return rt()[a]=()=>{gapi.load?o():n(st(t,"network-request-failed"))},Wp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Rs=null,e})}let Rs=null;function hg(t){return Rs=Rs||dg(t),Rs}/**
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
 */const pg=new cs(5e3,15e3),gg="__/auth/iframe",mg="emulator/auth/iframe",_g={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ei(e,mg):`https://${t.config.authDomain}/${gg}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=bg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${ls(s).slice(1)}`}async function vg(t){const e=await hg(t),n=rt().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:yg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_g,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},pg.get());function l(){rt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const wg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ig=500,Eg=600,xg="_blank",Tg="http://localhost";class jo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sg(t,e,n,s=Ig,r=Eg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},wg),{width:s.toString(),height:r.toString(),top:i,left:o}),c=ke().toLowerCase();n&&(a=Ul(c)?xg:n),Ll(c)&&(e=e||Tg,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[b,x])=>`${p}${b}=${x},`,"");if(Qh(c)&&a!=="_self")return kg(e||"",a),new jo(null);const h=window.open(e||"",a,f);$(h,t,"popup-blocked");try{h.focus()}catch{}return new jo(h)}function kg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Cg="__/auth/handler",Pg="emulator/auth/handler";function Ho(t,e,n,s,r,i){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof Ci){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Id(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(i||{}))o[l]=c}if(e instanceof fs){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Rg(t)}?${ls(a).slice(1)}`}function Rg({config:t}){return t.emulator?Ei(t,Pg):`https://${t.authDomain}/${Cg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="webStorageSupport";class Ag{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yl,this._completeRedirectFn=ng,this._overrideRedirectResult=Zp}async _openPopup(e,n,s,r){var i;gt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ho(e,n,s,Kr(),r);return Sg(e,o,Pi())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Np(Ho(e,n,s,Kr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(gt(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await vg(e),s=new rg(e);return n.register("authEvent",r=>($(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(vr,{type:vr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[vr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hl()||Ti()||sr()}}const Og=Ag;var Vo="@firebase/auth",Wo="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Mg(t){es(new yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,l)=>{$(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const c={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vl(t)},f=new np(a,l,c);return Mh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),es(new yn("auth-internal",e=>{const n=Rn(e.getProvider("auth").getImmediate());return(s=>new Ng(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Vo,Wo,Dg(t)),dn(Vo,Wo,"esm2017")}/**
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
 */const Lg=5*60,Ug=vl("authIdTokenMaxAge")||Lg;let zo=null;const $g=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Ug)return;const r=n==null?void 0:n.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function wn(t=Ih()){const e=xl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Dh(t,{popupRedirectResolver:Og,persistence:[Hp,Rp,Yl]}),s=vl("authTokenSyncURL");if(s){const i=$g(s);Tp(n,i,()=>i(n.currentUser)),xp(n,o=>i(o))}const r=ud("auth");return r&&sp(n,`http://${r}`),n}Mg("Browser");const ce=sd("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",loggedIn:!1,uid:"",name:"",email:"",data:{},dataOpt:{},cart:{},lang:"ru",langProp:{},number:"",address:""}),getters:{},actions:{sum(){let t=0;for(let e in this.cart)console.log(this.cart[e].price),t+=this.cart[e].price*this.cart[e].quantity;return t},sumItem(t){return this.cart[t].quantity*this.cart[t].price},async process(){let t=await fetch(`/api/language/?lang=${this.lang}`);this.langProp=await t.json()},async checkStatus(){return new Promise((t,e)=>{const n=wn();Sp(n,s=>{s&&(this.loggedIn=!0,this.uid=s.uid,this.name=s.displayName,this.email=s.email),t(s)})})},async getData(){try{let t=await fetch("/api/productsList");this.data=await t.json(),t=await fetch("/api/productsListOpt"),this.dataOpt=await t.json()}catch(t){console.log(t)}},async getCart(){try{let e=await(await fetch("/api/usersCart",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:this.uid})})).json();e=JSON.parse(e.orders);for(let n in e){console.log(n);let s;try{s=JSON.parse(JSON.stringify(this.data[e[n].id])),s.quantity=e[n].quantity,console.log(s),this.cart[s.id]=s}catch(r){console.log(r),s=JSON.parse(JSON.stringify(this.dataOpt[e[n].id])),s.quantity=e[n].quantity,this.cart[s.id]=s}}}catch(t){localStorage.getItem("cart")!=null&&(this.cart=JSON.parse(localStorage.getItem("cart"))),console.log(t)}}}});var Fg="firebase",Bg="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(Fg,Bg,"app");const Ai="/assets/Telegram-c178456d.svg",Oi="/assets/WhatsApp-64705ce5.svg",Ni="/assets/Instagram-d32ffc78.svg",ot=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},jg={props:{buttonName:String},data:()=>({contact:!1,store:ce()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},Hg={class:"grid [&_*]:font-roboto max-[395px]:h-[600px]"},Vg={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1 max-[700px]:text-[30px] max-[402px]:text-[20px]"},Wg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},zg=_("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Kg={class:"grid grid-cols-2 max-[700px]:grid-cols-1"},qg={class:"text-3xl max-[440px]:text-2xl mb-[5px] font-semibold font-roboto"},Gg={class:"text-2xl max-[440px]:text-xl font-roboto"},Jg={class:"text-2xl max-[440px]:text-xl mb-[20px] font-roboto"},Yg={class:"text-3xl max-[440px]:text-2xl mb-[5px] font-roboto font-semibold"},Xg=_("p",{class:"text-2xl max-[440px]:text-xl mb-[20px] font-roboto"},"+996779454233",-1),Qg={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px] max-[440px]:mb-[10px]"},Zg={class:"text-3xl max-[440px]:text-2xl font-roboto font-semibold"},em=_i('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+Ai+'" alt=""></a><p class="text-2xl max-[440px]:text-xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+Oi+'" alt=""></a><p class="text-2xl max-[440px]:text-xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+Ni+'" alt=""></a><p class="text-2xl max-[440px]:text-xl font-roboto">crafthoney.kg</p></div>',3),tm=_("div",null,[_("p",{class:"text-3xl max-[440px]:text-2xl mb-[5px] font-roboto font-semibold"},"E-mail:"),_("p",{class:"text-2xl max-[440px]:text-xl max-[380px]:text-[16px] font-roboto"},"crafthoneykg@gmail.com")],-1);function nm(t,e,n,s,r,i){return he(),Ee("div",Hg,[_("div",Vg,[_("span",Wg,j(t.store.langProp.contacts),1),zg,_("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},j(t.store.langProp.feedback),1)]),_("div",Kg,[_("div",null,[_("p",qg,j(t.store.langProp.address),1),_("p",Gg,"770033, "+j(t.store.langProp.kyrgyzstan),1),_("p",Jg,j(t.store.langProp.street),1)]),_("div",null,[_("p",Yg,j(t.store.langProp.telephone),1),Xg]),_("div",Qg,[_("p",Zg,j(t.store.langProp.socialnetworks),1),em]),tm])])}const ic=ot(jg,[["render",nm]]),sm="/assets/Register_1-5c661edd.svg",oc="/assets/Enter_1-7f28cdb9.svg",rm={data(){return{store:ce(),lang:ce().lang}}},im={class:""},om={class:"flex flex-col justify-center [&>*]:px-[10px]"},am=_("strong",null,"X",-1),lm=[am],cm={key:0,class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},um=_("img",{class:"w-[24px] h-24[px] mr-[10px]",src:sm,alt:""},null,-1),fm=_("img",{class:"w-[24px] h-[24px] mr-[10px]",src:oc,alt:""},null,-1),dm={key:1,class:"flex justify-center border-b-[1px] border-[#BCB9B9]"},hm=_("img",{class:"w-[24px] h-[24px] mr-[10px]",src:oc,alt:""},null,-1),pm={class:"my-[20px] px-[10px]"},gm=_i('<div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a></div></div>',1),mm={class:"my-[10px]"},_m={class:"my-[10px]"},bm=_("a",{href:"https://www.instagram.com/crafthoney.kg",target:"_blank"},[_("img",{src:Ni,alt:""})],-1);function ym(t,e,n,s,r,i){const o=Xt("router-link");return he(),Ee("div",im,[_("div",om,[_("button",{onClick:e[0]||(e[0]=a=>t.$emit("changeBurger")),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right hover:text-amber-700"},lm),te(o,{to:`/${r.lang}/Products`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ie(j(r.store.langProp.catalogue),1)]),_:1},8,["to"]),te(o,{to:`/${r.lang}/About`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ie(j(r.store.langProp.aboutus),1)]),_:1},8,["to"]),te(o,{to:`/${r.lang}/Blog`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ie(j(r.store.langProp.blog),1)]),_:1},8,["to"]),_("button",{onClick:e[1]||(e[1]=a=>(r.store.modal=!0,t.$emit("changeBurger"),r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999] hover:text-amber-700 hover:underline underline-offset-4"},j(r.store.langProp.contacts),1)]),r.store.loggedIn?ut("",!0):(he(),Ee("div",cm,[_("button",{onClick:e[2]||(e[2]=a=>(r.store.bg="bg-bee",r.store.modal=!0,t.$emit("changeBurger"),r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[um,Ie(j(r.store.langProp.registration),1)]),_("button",{onClick:e[3]||(e[3]=a=>(r.store.modal=!0,t.$emit("changeBurger"),r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[fm,Ie(j(r.store.langProp.login),1)])])),r.store.loggedIn&&!t.$route.path.includes("Personal")?(he(),Ee("div",dm,[te(o,{to:`/${r.lang}/PersonalArea/${r.store.uid}`,class:"border-[2px] border-solid border-black rounded-[8px] my-4 w-[218px] h-[47px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},{default:Be(()=>[hm,Ie(j(r.store.langProp.profile),1)]),_:1},8,["to"])])):ut("",!0),_("div",pm,[gm,_("p",mm,j(r.store.langProp.address+" 770033 "+r.store.langProp.kyrgyzstan+","),1),_("p",_m,j(r.store.langProp.street),1),bm])])}const vm=ot(rm,[["render",ym]]),wm="/assets/drawing-9a7198cf.svg",Im="/assets/CraftHoney-0d412893.svg",Em="/assets/menu-694c5a76.svg",ac="/assets/account_circle-229cba33.svg",xm="/assets/shopping_cart-809c2612.svg",Tm={beforeRouteEnter(t,e){},data(){return{burgerMenu:!1,products:"/${store.lang}/Products",store:ce()}},methods:{changeBurger(){this.burgerMenu=!1}},components:{Contacts:ic,Burger:vm}},Sm={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},km={class:"grid grid-flow-col gap-[40px] items-center"},Cm=_("img",{class:"self-center w-[60px] inline",src:wm},null,-1),Pm=_("img",{class:"ml-[10px] self-center w-[120px] inline",src:Im},null,-1),Rm={key:0,class:"text-xl [&>a]:mr-[30px] max-[1200px]:hidden"},Am={class:"grid min-[1201px]:hidden"},Om={class:"grid grid-flow-col gap-[40px] items-center max-[1200px]:hidden"},Nm={key:0,class:"flex items-center"},Dm=_("img",{class:"mr-[10px] w-[24px]",src:ac},null,-1),Mm={key:1,class:"flex items-center"},Lm=_("img",{class:"mr-[10px] w-[24px]",src:ac},null,-1),Um={class:""},$m={class:"relative"},Fm=_("img",{class:"w-[22px] max-[800px]:hidden",src:xm,alt:""},null,-1),Bm={key:0,class:"absolute h-[18px] w-[18px] top-[-9px] left-[12px] rounded-full bg-red-600 flex justify-center align-center text-white"},jm={class:"text-[12px]"},Hm={class:"text-xl"},Vm={class:"ml-[8px] h-[32px] w-[56px] bg-[#ffcc00] rounded-xl hover:cursor-pointer px-2 hover:text-amber-700 hover:bg-amber-200 underline-offset-4",name:"store.lang",id:""},Wm={selected:"",disabled:"",hidden:""},zm=_i('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Ni+'" alt=""></a></div>',1);function Km(t,e,n,s,r,i){const o=Xt("router-link"),a=Xt("Burger");return he(),Ee("header",Sm,[_("div",km,[_("div",null,[te(o,{class:"flex max-w-fit",to:`/${r.store.lang}/Home`},{default:Be(()=>[Cm,Pm]),_:1},8,["to"])]),t.$route.path.includes("Home")?ut("",!0):(he(),Ee("div",Rm,[te(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:"products"},{default:Be(()=>{var l,c;return[Ie(j((c=(l=r.store)==null?void 0:l.langProp)==null?void 0:c.catalogue),1)]}),_:1}),te(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/About`},{default:Be(()=>[Ie(j(r.store.langProp.about),1)]),_:1},8,["to"]),te(o,{class:"hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/Blog`},{default:Be(()=>[Ie(j(r.store.langProp.blog),1)]),_:1},8,["to"]),_("button",{class:"hover:text-amber-700 hover:underline underline-offset-4",onClick:e[0]||(e[0]=l=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},j(r.store.langProp.contacts),1)]))]),_("div",Am,[_("img",{onClick:e[1]||(e[1]=l=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:Em})]),_("div",Om,[!r.store.loggedIn&&!t.$route.path.includes("Personal")?(he(),Ee("div",Nm,[Dm,_("button",{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",onClick:e[2]||(e[2]=l=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},j(r.store.langProp.login),1)])):ut("",!0),r.store.loggedIn&&!t.$route.path.includes("Personal")?(he(),Ee("div",Mm,[Lm,te(o,{class:"text-xl text-center hover:text-amber-700 hover:underline underline-offset-4",to:`/${r.store.lang}/PersonalArea/${r.store.uid}`},{default:Be(()=>[Ie(j(r.store.langProp.profile),1)]),_:1},8,["to"])])):ut("",!0),_("div",Um,[te(o,{to:`/${r.store.lang}/Checkout`},{default:Be(()=>[_("div",$m,[Fm,Object.keys(r.store.cart).length?(he(),Ee("div",Bm,[_("span",jm,j(Object.keys(r.store.cart).length),1)])):ut("",!0)])]),_:1},8,["to"])]),_("div",null,[_("p",Hm,[Ie(j(r.store.langProp.lang)+": ",1),_("select",Vm,[_("option",Wm,j(r.store.lang.toUpperCase()),1),_("option",{onClick:e[3]||(e[3]=l=>(r.store.lang="ru",t.$router.push(`/ru/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"RU"),_("option",{onClick:e[4]||(e[4]=l=>(r.store.lang="en",t.$router.push(`/en/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"EN"),_("option",{onClick:e[5]||(e[5]=l=>(r.store.lang="kg",t.$router.push(`/kg/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"KG")])])]),zm]),_("div",{class:is(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[te(a,{onChangeBurger:i.changeBurger},null,8,["onChangeBurger"])],2)])}const qm=ot(Tm,[["render",Km]]),Gm={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",messageValue:"",store:ce()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail="",this.messageValue=""},handleInput(){this.inputValuePhone=this.inputValuePhone.replace(/[^0-9+]/g,"")}}},Jm={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},Ym={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},Xm=_("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Qm={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Zm=["placeholder"],e_={class:"grid grid-cols-2 gap-[20px]"},t_=["placeholder"],n_={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},s_=["disabled"];function r_(t,e,n,s,r,i){return he(),Ee("div",Jm,[_("div",Ym,[_("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},j(t.store.langProp.contacts),1),Xm,_("span",Qm,j(t.store.langProp.feedback),1)]),we(_("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.inputValueName=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:t.store.langProp.yourname},null,8,Zm),[[ft,t.inputValueName]]),_("div",e_,[we(_("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.inputValueMail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[ft,t.inputValueMail]]),we(_("input",{onInput:e[3]||(e[3]=(...o)=>i.handleInput&&i.handleInput(...o)),"onUpdate:modelValue":e[4]||(e[4]=o=>t.inputValuePhone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",placeholder:t.store.langProp.telephone},null,40,t_),[[ft,t.inputValuePhone]])]),we(_("textarea",{"onUpdate:modelValue":e[5]||(e[5]=o=>t.messageValue=o),class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,512),[[ft,t.messageValue]]),_("div",n_,[_("button",{onClick:e[6]||(e[6]=()=>{}),disabled:t.inputValueName.length<=2||t.inputValueMail.length<=5||t.inputValuePhone.length<=7||t.messageValue.length<=10,class:"bg-[#EAAD02] text-white rounded-[5px] disabled:opacity-50"},j(t.store.langProp.send),9,s_),_("button",{onClick:e[7]||(e[7]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},j(t.store.langProp.reset),1)])])}const lc=ot(Gm,[["render",r_]]),i_="/assets/call-65c88a38.svg",o_={data(){return{store:ce()}},components:{Feedback:lc}},a_={class:"bg-white flex justify-center my-[1vh] w-full"},l_={class:"self-center"},c_=_("img",{class:"inline ml-2",src:i_},null,-1);function u_(t,e,n,s,r,i){return he(),Ee("footer",a_,[_("div",l_,[_("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),c_])])}const f_=ot(o_,[["render",u_]]),d_="/assets/Vector-9ca58fbf.svg",Di="/assets/visibility_on-0c36d6bb.svg",Mi="/assets/visibility_off-e6686e60.svg",h_={props:{buttonName:String},data(){return{email:"",password:"",store:ce(),showPassword:!1}},methods:{loginGoogle(){const t=wn(),e=new Re;sc(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;this.store.modal=!1,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:r.uid})}),store.getCart(),this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,Re.credentialFromError(n)})},async login(){const t=wn();wp(t,this.email,this.password).then(e=>{const n=e.user;console.log(n),this.store.modal=!1,store.getCart(),this.$router.push(`/${this.store.lang}/PersonalArea/${n.uid}`)}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword}}},p_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},g_={class:"grid auto-rows-min gap-[20px]"},m_={class:"text-[30px] flex justify-center"},__={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},b_=_("span",{class:"mx-2"},"|",-1),y_=_("img",{class:"mr-[8px]",src:d_},null,-1),v_=["placeholder"],w_={class:"relative"},I_=["type","placeholder"],E_={src:Di,alt:""},x_={src:Mi,alt:""},T_=["disabled"],S_={class:"text-center"};function k_(t,e,n,s,r,i){const o=Xt("router-link");return he(),Ee("div",p_,[_("div",g_,[_("div",m_,[_("span",__,j(r.store.langProp.login),1),b_,_("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},j(r.store.langProp.registration),1)]),_("button",{onClick:e[1]||(e[1]=(...a)=>i.loginGoogle&&i.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[y_,Ie(j(r.store.langProp.loginwithgoogle),1)]),we(_("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp.enteremail},null,8,v_),[[ft,r.email]]),_("div",w_,[we(_("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.enterpassword},null,8,I_),[[$r,r.password]]),_("button",{onClick:e[4]||(e[4]=(...a)=>i.eyechange&&i.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(_("img",E_,null,512),[[Wt,r.showPassword]]),we(_("img",x_,null,512),[[Wt,!r.showPassword]])])]),te(o,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Be(()=>[Ie(j(r.store.langProp.forgotyourpassword),1)]),_:1}),_("button",{onClick:e[5]||(e[5]=(...a)=>i.login&&i.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.login),9,T_),_("p",S_,[Ie(j(r.store.langProp.donthaveaccount),1),_("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.createaccount),1)])])])}const C_=ot(h_,[["render",k_]]),P_="/assets/Vector-9ca58fbf.svg",R_={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:ce()}},methods:{loginGoogle(){const t=wn(),e=new Re;sc(t,e).then(n=>{Re.credentialFromResult(n).accessToken;const r=n.user;console.log(r),this.store.modal=!1,fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:r.uid})}),store.getCart(),this.$router.push(`/${this.store.lang}/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,Re.credentialFromError(n)})},async register(){const t=wn();vp(t,this.email,this.password).then(e=>{const n=e.user;this.store.comp="Login",fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:n.uid})}),Ep(t.currentUser,{displayName:this.name})}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},A_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},O_={class:"grid auto-rows-min gap-[20px]"},N_={class:"text-[30px] h-[45px] flex justify-center"},D_=_("span",{class:"mx-2"},"|",-1),M_={class:"bg-gray-300 rounded-[10px] px-2 text-black"},L_=_("img",{class:"mr-[8px]",src:P_},null,-1),U_=["placeholder"],$_=["placeholder"],F_={class:"relative"},B_=["type","placeholder"],j_={src:Di,alt:""},H_={src:Mi,alt:""},V_={class:"relative"},W_=["type","placeholder"],z_={src:Di,alt:""},K_={src:Mi,alt:""},q_={key:0,class:"text-red-500 font-roboto leading-[2px]"},G_=["disabled"],J_={class:"text-center"};function Y_(t,e,n,s,r,i){return he(),Ee("div",A_,[_("div",O_,[_("div",N_,[_("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},j(r.store.langProp.login),1),D_,_("span",M_,j(r.store.langProp.registration),1)]),_("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[L_,Ie(" "+j(r.store.langProp.loginwithgoogle),1)]),we(_("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp.username},null,8,U_),[[ft,r.name]]),we(_("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp.enteremail},null,8,$_),[[ft,r.email]]),_("div",F_,[we(_("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.password},null,40,B_),[[$r,r.password]]),_("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(_("img",j_,null,512),[[Wt,r.showPassword]]),we(_("img",H_,null,512),[[Wt,!r.showPassword]])])]),_("div",V_,[we(_("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.confirmthepassword},null,8,W_),[[$r,r.password2]]),_("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(_("img",z_,null,512),[[Wt,r.showPassword]]),we(_("img",K_,null,512),[[Wt,!r.showPassword]])])]),r.password2!=r.password?(he(),Ee("div",q_,j(r.store.langProp.passwordmismatch),1)):ut("",!0),we(_("div",{class:"text-red-500 font-roboto leading-[2px]"},j(r.store.langProp.minimumnumberofsymbols)+" - "+j(r.MinLength),513),[[Wt,r.passwordMinLength&&r.password.length<=5]]),_("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},j(r.store.langProp.registration),9,G_),_("p",J_,[Ie(j(r.store.langProp.doyouhaveaccount),1),_("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},j(r.store.langProp.login),1)])])])}const X_=ot(R_,[["render",Y_]]),Q_={data(){return{store:ce()}},components:{Contacts:ic,Feedback:lc,Login:C_,Register:X_}},Z_={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},eb={class:"p-2 text-right"},tb=_("strong",null,"X",-1),nb=[tb];function sb(t,e,n,s,r,i){return r.store.modal?(he(),Ee("div",Z_,[r.store.modal?(he(),Ee("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):ut("",!0),_("div",{class:is([r.store.bg,"max-h-screen bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[_("div",eb,[_("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},nb)]),(he(),Qs(Vu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):ut("",!0)}const rb=ot(Q_,[["render",sb]]),ib={components:{Header:qm,Footer:f_,LayoutModal:rb}},ob={class:"h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]"};function ab(t,e,n,s,r,i){const o=Xt("LayoutModal"),a=Xt("Header");return he(),Ee(Le,null,[te(o),_("div",ob,[te(a),Wu(t.$slots,"default")])],64)}const lb=ot(ib,[["render",ab]]),cb={};function ub(t,e){const n=Xt("RouterView");return he(),Qs(n)}const fb=ot(cb,[["render",ub]]),db="modulepreload",hb=function(t){return"/"+t},Ko={},$t=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=hb(i),i in Ko)return;Ko[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":db,o||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),o)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function pb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ee=Object.assign;function wr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ye(r)?r.map(t):t(r)}return n}const Wn=()=>{},Ye=Array.isArray,gb=/\/$/,mb=t=>t.replace(gb,"");function Ir(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=vb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function _b(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bb(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&In(e.matched[s],n.matched[r])&&cc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function In(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function cc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yb(t[n],e[n]))return!1;return!0}function yb(t,e){return Ye(t)?Go(t,e):Ye(e)?Go(e,t):t===e}function Go(t,e){return Ye(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function vb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var rs;(function(t){t.pop="pop",t.push="push"})(rs||(rs={}));var zn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(zn||(zn={}));function wb(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mb(t)}const Ib=/^[^#]+#/;function Eb(t,e){return t.replace(Ib,"#")+e}function xb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const or=()=>({left:window.pageXOffset,top:window.pageYOffset});function Tb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=xb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jo(t,e){return(history.state?history.state.position-e:-1)+t}const Gr=new Map;function Sb(t,e){Gr.set(t,e)}function kb(t){const e=Gr.get(t);return Gr.delete(t),e}let Cb=()=>location.protocol+"//"+location.host;function uc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),qo(l,"")}return qo(n,t)+s+r}function Pb(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const b=uc(t,location),x=n.value,S=e.value;let U=0;if(p){if(n.value=b,e.value=p,o&&o===x){o=null;return}U=S?p.position-S.position:0}else s(b);r.forEach(R=>{R(n.value,x,{delta:U,type:rs.pop,direction:U?U>0?zn.forward:zn.back:zn.unknown})})};function l(){o=n.value}function c(p){r.push(p);const b=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(b),b}function f(){const{history:p}=window;p.state&&p.replaceState(ee({},p.state,{scroll:or()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:h}}function Yo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?or():null}}function Rb(t){const{history:e,location:n}=window,s={value:uc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Cb()+t+l;try{e[f?"replaceState":"pushState"](c,"",p),r.value=c}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(l,c){const f=ee({},e.state,Yo(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});i(l,f,!0),s.value=l}function a(l,c){const f=ee({},r.value,e.state,{forward:l,scroll:or()});i(f.current,f,!0);const h=ee({},Yo(s.value,l,null),{position:f.position+1},c);i(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function Ab(t){t=wb(t);const e=Rb(t),n=Pb(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=ee({location:"",base:t,go:s,createHref:Eb.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Ob(t){return typeof t=="string"||t&&typeof t=="object"}function fc(t){return typeof t=="string"||typeof t=="symbol"}const yt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dc=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function En(t,e){return ee(new Error,{type:t,[dc]:!0},e)}function at(t,e){return t instanceof Error&&dc in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Nb={sensitive:!1,strict:!1,start:!0,end:!0},Db=/[.+*?^${}()[\]/\\]/g;function Mb(t,e){const n=ee({},Nb,e),s=[];let r=n.start?"^":"";const i=[];for(const c of t){const f=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const p=c[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Db,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:S,optional:U,regexp:R}=p;i.push({name:x,repeatable:S,optional:U});const B=R||Qo;if(B!==Qo){b+=10;try{new RegExp(`(${B})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+W.message)}}let O=S?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(O=U&&c.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),S&&(b+=-20),B===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const f=c.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",x=i[p-1];h[x.name]=b&&x.repeatable?b.split("/"):b}return h}function l(c){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:x,repeatable:S,optional:U}=b,R=x in c?c[x]:"";if(Ye(R)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=Ye(R)?R.join("/"):R;if(!B)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);f+=B}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function Lb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ub(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Lb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Zo(s))return 1;if(Zo(r))return-1}return r.length-s.length}function Zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $b={type:0,value:""},Fb=/[a-zA-Z0-9_]/;function Bb(t){if(!t)return[[]];if(t==="/")return[[$b]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,c="",f="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:Fb.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function jb(t,e,n){const s=Mb(Bb(t.path),n),r=ee(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Hb(t,e){const n=[],s=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const b=!p,x=Vb(f);x.aliasOf=p&&p.record;const S=na(e,f),U=[x];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of O)U.push(ee({},x,{components:p?p.record.components:x.components,path:W,aliasOf:p?p.record:x}))}let R,B;for(const O of U){const{path:W}=O;if(h&&W[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(W&&re+W)}if(R=jb(O,h,S),p?p.alias.push(R):(B=B||R,B!==R&&B.alias.push(R),b&&f.name&&!ta(R)&&o(f.name)),x.children){const K=x.children;for(let re=0;re<K.length;re++)i(K[re],R,p&&p.children[re])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&l(R)}return B?()=>{o(B)}:Wn}function o(f){if(fc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){let h=0;for(;h<n.length&&Ub(f,n[h])>=0&&(f.record.path!==n[h].record.path||!hc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ta(f)&&s.set(f.record.name,f)}function c(f,h){let p,b={},x,S;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw En(1,{location:f});S=p.record.name,b=ee(ea(h.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),f.params&&ea(f.params,p.keys.map(B=>B.name))),x=p.stringify(b)}else if("path"in f)x=f.path,p=n.find(B=>B.re.test(x)),p&&(b=p.parse(x),S=p.record.name);else{if(p=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw En(1,{location:f,currentLocation:h});S=p.record.name,b=ee({},h.params,f.params),x=p.stringify(b)}const U=[];let R=p;for(;R;)U.unshift(R.record),R=R.parent;return{name:S,path:x,params:b,matched:U,meta:zb(U)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ea(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Vb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Wb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function zb(t){return t.reduce((e,n)=>ee(e,n.meta),{})}function na(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hc(t,e){return e.children.some(n=>n===t||hc(t,n))}const pc=/#/g,Kb=/&/g,qb=/\//g,Gb=/=/g,Jb=/\?/g,gc=/\+/g,Yb=/%5B/g,Xb=/%5D/g,mc=/%5E/g,Qb=/%60/g,_c=/%7B/g,Zb=/%7C/g,bc=/%7D/g,ey=/%20/g;function Li(t){return encodeURI(""+t).replace(Zb,"|").replace(Yb,"[").replace(Xb,"]")}function ty(t){return Li(t).replace(_c,"{").replace(bc,"}").replace(mc,"^")}function Jr(t){return Li(t).replace(gc,"%2B").replace(ey,"+").replace(pc,"%23").replace(Kb,"%26").replace(Qb,"`").replace(_c,"{").replace(bc,"}").replace(mc,"^")}function ny(t){return Jr(t).replace(Gb,"%3D")}function sy(t){return Li(t).replace(pc,"%23").replace(Jb,"%3F")}function ry(t){return t==null?"":sy(t).replace(qb,"%2F")}function Hs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function iy(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gc," "),o=i.indexOf("="),a=Hs(o<0?i:i.slice(0,o)),l=o<0?null:Hs(i.slice(o+1));if(a in e){let c=e[a];Ye(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function sa(t){let e="";for(let n in t){const s=t[n];if(n=ny(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(s)?s.map(i=>i&&Jr(i)):[s&&Jr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function oy(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ye(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const ay=Symbol(""),ra=Symbol(""),Ui=Symbol(""),yc=Symbol(""),Yr=Symbol("");function Dn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function It(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(En(4,{from:n,to:e})):h instanceof Error?a(h):Ob(h)?a(En(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},c=t.call(s&&s.instances[r],e,n,l);let f=Promise.resolve(c);t.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function Er(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ly(a)){const c=(a.__vccOpts||a)[e];c&&r.push(It(c,n,s,i,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=pb(c)?c.default:c;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&It(p,n,s,i,o)()}))}}return r}function ly(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=nt(Ui),n=nt(yc),s=Ue(()=>e.resolve(un(t.to))),r=Ue(()=>{const{matched:l}=s.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(In.bind(null,f));if(p>-1)return p;const b=oa(l[c-2]);return c>1&&oa(f)===b&&h[h.length-1].path!==b?h.findIndex(In.bind(null,l[c-2])):p}),i=Ue(()=>r.value>-1&&dy(n.params,s.value.params)),o=Ue(()=>r.value>-1&&r.value===n.matched.length-1&&cc(n.params,s.value.params));function a(l={}){return fy(l)?e[un(t.replace)?"replace":"push"](un(t.to)).catch(Wn):Promise.resolve()}return{route:s,href:Ue(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const cy=Va({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=Cn(ia(t)),{options:s}=nt(Ui),r=Ue(()=>({[aa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:ul("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),uy=cy;function fy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dy(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ye(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,hy=Va({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=nt(Yr),r=Ue(()=>t.route||s.value),i=nt(ra,0),o=Ue(()=>{let c=un(i);const{matched:f}=r.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),a=Ue(()=>r.value.matched[o.value]);xs(ra,Ue(()=>o.value+1)),xs(ay,a),xs(Yr,r);const l=ui();return $n(()=>[l.value,a.value,t.name],([c,f,h],[p,b,x])=>{f&&(f.instances[h]=c,b&&b!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),c&&f&&(!b||!In(f,b)||!p)&&(f.enterCallbacks[h]||[]).forEach(S=>S(c))},{flush:"post"}),()=>{const c=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return la(n.default,{Component:p,route:c});const b=h.props[f],x=b?b===!0?c.params:typeof b=="function"?b(c):b:null,U=ul(p,ee({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return la(n.default,{Component:U,route:c})||U}}});function la(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const py=hy;function gy(t){const e=Hb(t.routes,t),n=t.parseQuery||iy,s=t.stringifyQuery||sa,r=t.history,i=Dn(),o=Dn(),a=Dn(),l=cu(yt);let c=yt;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=wr.bind(null,y=>""+y),h=wr.bind(null,ry),p=wr.bind(null,Hs);function b(y,P){let k,D;return fc(y)?(k=e.getRecordMatcher(y),D=P):D=y,e.addRoute(D,k)}function x(y){const P=e.getRecordMatcher(y);P&&e.removeRoute(P)}function S(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function R(y,P){if(P=ee({},P||l.value),typeof y=="string"){const u=Ir(n,y,P.path),d=e.resolve({path:u.path},P),g=r.createHref(u.fullPath);return ee(u,d,{params:p(d.params),hash:Hs(u.hash),redirectedFrom:void 0,href:g})}let k;if("path"in y)k=ee({},y,{path:Ir(n,y.path,P.path).path});else{const u=ee({},y.params);for(const d in u)u[d]==null&&delete u[d];k=ee({},y,{params:h(y.params)}),P.params=h(P.params)}const D=e.resolve(k,P),X=y.hash||"";D.params=f(p(D.params));const fe=_b(s,ee({},y,{hash:ty(X),path:D.path})),q=r.createHref(fe);return ee({fullPath:fe,hash:X,query:s===sa?oy(y.query):y.query||{}},D,{redirectedFrom:void 0,href:q})}function B(y){return typeof y=="string"?Ir(n,y,l.value.path):ee({},y)}function O(y,P){if(c!==y)return En(8,{from:P,to:y})}function W(y){return z(y)}function K(y){return W(ee(B(y),{replace:!0}))}function re(y){const P=y.matched[y.matched.length-1];if(P&&P.redirect){const{redirect:k}=P;let D=typeof k=="function"?k(y):k;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=B(D):{path:D},D.params={}),ee({query:y.query,hash:y.hash,params:"path"in D?{}:y.params},D)}}function z(y,P){const k=c=R(y),D=l.value,X=y.state,fe=y.force,q=y.replace===!0,u=re(k);if(u)return z(ee(B(u),{state:typeof u=="object"?ee({},X,u.state):X,force:fe,replace:q}),P||k);const d=k;d.redirectedFrom=P;let g;return!fe&&bb(s,D,k)&&(g=En(16,{to:d,from:D}),Mt(D,D,!0,!1)),(g?Promise.resolve(g):J(d,D)).catch(m=>at(m)?at(m,2)?m:We(m):ie(m,d,D)).then(m=>{if(m){if(at(m,2))return z(ee({replace:q},B(m.to),{state:typeof m.to=="object"?ee({},X,m.to.state):X,force:fe}),P||d)}else m=de(d,D,!0,q,X);return Y(d,D,m),m})}function A(y,P){const k=O(y,P);return k?Promise.reject(k):Promise.resolve()}function J(y,P){let k;const[D,X,fe]=my(y,P);k=Er(D.reverse(),"beforeRouteLeave",y,P);for(const u of D)u.leaveGuards.forEach(d=>{k.push(It(d,y,P))});const q=A.bind(null,y,P);return k.push(q),on(k).then(()=>{k=[];for(const u of i.list())k.push(It(u,y,P));return k.push(q),on(k)}).then(()=>{k=Er(X,"beforeRouteUpdate",y,P);for(const u of X)u.updateGuards.forEach(d=>{k.push(It(d,y,P))});return k.push(q),on(k)}).then(()=>{k=[];for(const u of y.matched)if(u.beforeEnter&&!P.matched.includes(u))if(Ye(u.beforeEnter))for(const d of u.beforeEnter)k.push(It(d,y,P));else k.push(It(u.beforeEnter,y,P));return k.push(q),on(k)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),k=Er(fe,"beforeRouteEnter",y,P),k.push(q),on(k))).then(()=>{k=[];for(const u of o.list())k.push(It(u,y,P));return k.push(q),on(k)}).catch(u=>at(u,8)?u:Promise.reject(u))}function Y(y,P,k){for(const D of a.list())D(y,P,k)}function de(y,P,k,D,X){const fe=O(y,P);if(fe)return fe;const q=P===yt,u=an?history.state:{};k&&(D||q?r.replace(y.fullPath,ee({scroll:q&&u&&u.scroll},X)):r.push(y.fullPath,X)),l.value=y,Mt(y,P,k,q),We()}let be;function Ne(){be||(be=r.listen((y,P,k)=>{if(!hs.listening)return;const D=R(y),X=re(D);if(X){z(ee(X,{replace:!0}),D).catch(Wn);return}c=D;const fe=l.value;an&&Sb(Jo(fe.fullPath,k.delta),or()),J(D,fe).catch(q=>at(q,12)?q:at(q,2)?(z(q.to,D).then(u=>{at(u,20)&&!k.delta&&k.type===rs.pop&&r.go(-1,!1)}).catch(Wn),Promise.reject()):(k.delta&&r.go(-k.delta,!1),ie(q,D,fe))).then(q=>{q=q||de(D,fe,!1),q&&(k.delta&&!at(q,8)?r.go(-k.delta,!1):k.type===rs.pop&&at(q,20)&&r.go(-1,!1)),Y(D,fe,q)}).catch(Wn)}))}let Ce=Dn(),ye=Dn(),ge;function ie(y,P,k){We(y);const D=ye.list();return D.length?D.forEach(X=>X(y,P,k)):console.error(y),Promise.reject(y)}function ne(){return ge&&l.value!==yt?Promise.resolve():new Promise((y,P)=>{Ce.add([y,P])})}function We(y){return ge||(ge=!y,Ne(),Ce.list().forEach(([P,k])=>y?k(y):P()),Ce.reset()),y}function Mt(y,P,k,D){const{scrollBehavior:X}=t;if(!an||!X)return Promise.resolve();const fe=!k&&kb(Jo(y.fullPath,0))||(D||!k)&&history.state&&history.state.scroll||null;return di().then(()=>X(y,P,fe)).then(q=>q&&Tb(q)).catch(q=>ie(q,y,P))}const ze=y=>r.go(y);let Ae;const nn=new Set,hs={currentRoute:l,listening:!0,addRoute:b,removeRoute:x,hasRoute:U,getRoutes:S,resolve:R,options:t,push:W,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ye.add,isReady:ne,install(y){const P=this;y.component("RouterLink",uy),y.component("RouterView",py),y.config.globalProperties.$router=P,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>un(l)}),an&&!Ae&&l.value===yt&&(Ae=!0,W(r.location).catch(X=>{}));const k={};for(const X in yt)k[X]=Ue(()=>l.value[X]);y.provide(Ui,P),y.provide(yc,Cn(k)),y.provide(Yr,l);const D=y.unmount;nn.add(y),y.unmount=function(){nn.delete(y),nn.size<1&&(c=yt,be&&be(),be=null,l.value=yt,Ae=!1,ge=!1),D()}}};return hs}function on(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function my(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>In(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>In(c,l))||r.push(l))}return[n,s,r]}const xr=[{path:"Home",alias:"Home",component:()=>$t(()=>import("./Home-6450df5a.js"),[])},{path:"About",alias:"About",component:()=>$t(()=>import("./About-92366277.js"),[])},{path:"Products",alias:"Products",component:()=>$t(()=>import("./Products-4f26524d.js"),["assets/Products-4f26524d.js","assets/Group19-49c36de6.js"])},{path:"Personal/:id",alias:"Personal/:id",component:()=>$t(()=>import("./Personal-6f01814b.js"),[])},{path:"PersonalArea/:id",alias:"PersonalArea/:id",component:()=>$t(()=>import("./PersonalArea-10fd7aa4.js"),[])},{path:"Blog",alias:"Blog",component:()=>$t(()=>import("./Blog-835cdb94.js"),[])},{path:"Checkout",alias:"Checkout",component:()=>$t(()=>import("./Checkout-4c0929a3.js"),["assets/Checkout-4c0929a3.js","assets/Group19-49c36de6.js"])}],_y=gy({history:Ab("/"),routes:[{path:"/",name:"root",redirect:t=>ce().lang},{path:"/ru",name:"ru",redirect:t=>"ru/Home",beforeEnter:async(t,e,n)=>{ce().lang="ru",await ce().process(),await ce().checkStatus(),await ce().getData(),ce().getCart(),n()},children:xr},{path:"/en",name:"en",redirect:t=>"en/Home",beforeEnter:async(t,e,n)=>{ce().lang="en",await ce().process(),await ce().checkStatus(),ce().getData(),ce().getCart(),n()},children:xr},{path:"/kg",name:"kg",redirect:t=>"kg/Home",beforeEnter:async(t,e,n)=>{ce().lang="kg",await ce().process(),await ce().checkStatus(),ce().getData(),ce().getCart(),n()},children:xr}],strict:!0});const ar=Jf(fb),by=Qf();new Re;const yy={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};ar.component("Layout",lb);ar.use(by);ar.use(_y);Tl(yy);wn();ar.mount("#app");export{Le as F,lb as L,ot as _,te as a,_ as b,Ee as c,Ie as d,Qs as e,vy as f,wn as g,Sp as h,wy as i,we as j,ft as k,ut as l,Qr as n,he as o,Xt as r,Iy as s,j as t,ce as u,Wt as v,Be as w};
