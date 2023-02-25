(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Qr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function wt(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=_e(s)?Il(s):wt(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(_e(t))return t;if(ce(t))return t}}const vl=/;(?![^(]*\))/g,wl=/:([^]+)/,El=/\/\*.*?\*\//gs;function Il(t){const e={};return t.replace(El,"").split(vl).forEach(n=>{if(n){const s=n.split(wl);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function rs(t){let e="";if(_e(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const s=rs(t[n]);s&&(e+=s+" ")}else if(ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const xl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tl=Qr(xl);function la(t){return!!t||t===""}function Sl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Xt(t[s],e[s]);return n}function Xt(t,e){if(t===e)return!0;let n=ji(t),s=ji(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Wn(t),s=Wn(e),n||s)return t===e;if(n=$(t),s=$(e),n||s)return n&&s?Sl(t,e):!1;if(n=ce(t),s=ce(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Xt(t[o],e[o]))return!1}}return String(t)===String(e)}function Zr(t,e){return t.findIndex(n=>Xt(n,e))}const B=t=>_e(t)?t:t==null?"":$(t)||ce(t)&&(t.toString===da||!V(t.toString))?JSON.stringify(t,ua,2):String(t),ua=(t,e)=>e&&e.__v_isRef?ua(t,e.value):ln(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:In(e)?{[`Set(${e.size})`]:[...e.values()]}:ce(e)&&!$(e)&&!ha(e)?String(e):e,le={},cn=[],Je=()=>{},Cl=()=>!1,Pl=/^on[^a-z]/,Ws=t=>Pl.test(t),ei=t=>t.startsWith("onUpdate:"),Ce=Object.assign,ti=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kl=Object.prototype.hasOwnProperty,Q=(t,e)=>kl.call(t,e),$=Array.isArray,ln=t=>is(t)==="[object Map]",In=t=>is(t)==="[object Set]",ji=t=>is(t)==="[object Date]",V=t=>typeof t=="function",_e=t=>typeof t=="string",Wn=t=>typeof t=="symbol",ce=t=>t!==null&&typeof t=="object",fa=t=>ce(t)&&V(t.then)&&V(t.catch),da=Object.prototype.toString,is=t=>da.call(t),Rl=t=>is(t).slice(8,-1),ha=t=>is(t)==="[object Object]",ni=t=>_e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Is=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Al=/-(\w)/g,it=zs(t=>t.replace(Al,(e,n)=>n?n.toUpperCase():"")),Ol=/\B([A-Z])/g,xn=zs(t=>t.replace(Ol,"-$1").toLowerCase()),Ks=zs(t=>t.charAt(0).toUpperCase()+t.slice(1)),lr=zs(t=>t?`on${Ks(t)}`:""),zn=(t,e)=>!Object.is(t,e),xs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Os=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Kn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hi;const Ml=()=>Hi||(Hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Le;class pa{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Le,!e&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Le;try{return Le=this,e()}finally{Le=n}}}on(){Le=this}off(){Le=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ga(t){return new pa(t)}function Nl(t,e=Le){e&&e.active&&e.effects.push(t)}function Dl(){return Le}function Ll(t){Le&&Le.cleanups.push(t)}const si=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ma=t=>(t.w&Ot)>0,_a=t=>(t.n&Ot)>0,Ul=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ot},$l=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ma(r)&&!_a(r)?r.delete(t):e[n++]=r,r.w&=~Ot,r.n&=~Ot}e.length=n}},Sr=new WeakMap;let Mn=0,Ot=1;const Cr=30;let qe;const Gt=Symbol(""),Pr=Symbol("");class ri{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nl(this,s)}run(){if(!this.active)return this.fn();let e=qe,n=Tt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=qe,qe=this,Tt=!0,Ot=1<<++Mn,Mn<=Cr?Ul(this):Vi(this),this.fn()}finally{Mn<=Cr&&$l(this),Ot=1<<--Mn,qe=this.parent,Tt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){qe===this?this.deferStop=!0:this.active&&(Vi(this),this.onStop&&this.onStop(),this.active=!1)}}function Vi(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Tt=!0;const ba=[];function Tn(){ba.push(Tt),Tt=!1}function Sn(){const t=ba.pop();Tt=t===void 0?!0:t}function Fe(t,e,n){if(Tt&&qe){let s=Sr.get(t);s||Sr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=si()),ya(r)}}function ya(t,e){let n=!1;Mn<=Cr?_a(t)||(t.n|=Ot,n=!ma(t)):n=!t.has(qe),n&&(t.add(qe),qe.deps.push(t))}function ft(t,e,n,s,r,i){const o=Sr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Kn(s);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?ni(n)&&a.push(o.get("length")):(a.push(o.get(Gt)),ln(t)&&a.push(o.get(Pr)));break;case"delete":$(t)||(a.push(o.get(Gt)),ln(t)&&a.push(o.get(Pr)));break;case"set":ln(t)&&a.push(o.get(Gt));break}if(a.length===1)a[0]&&kr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);kr(si(c))}}function kr(t,e){const n=$(t)?t:[...t];for(const s of n)s.computed&&Wi(s);for(const s of n)s.computed||Wi(s)}function Wi(t,e){(t!==qe||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Fl=Qr("__proto__,__v_isRef,__isVue"),va=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Wn)),Bl=ii(),jl=ii(!1,!0),Hl=ii(!0),zi=Vl();function Vl(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ee(this);for(let i=0,o=this.length;i<o;i++)Fe(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(ee)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Tn();const s=ee(this)[e].apply(this,n);return Sn(),s}}),t}function ii(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?iu:Ta:e?xa:Ia).get(s))return s;const o=$(s);if(!t&&o&&Q(zi,r))return Reflect.get(zi,r,i);const a=Reflect.get(s,r,i);return(Wn(r)?va.has(r):Fl(r))||(t||Fe(s,"get",r),e)?a:de(a)?o&&ni(r)?a:a.value:ce(a)?t?Sa(a):Cn(a):a}}const Wl=wa(),zl=wa(!0);function wa(t=!1){return function(n,s,r,i){let o=n[s];if(gn(o)&&de(o)&&!de(r))return!1;if(!t&&(!Ms(r)&&!gn(r)&&(o=ee(o),r=ee(r)),!$(n)&&de(o)&&!de(r)))return o.value=r,!0;const a=$(n)&&ni(s)?Number(s)<n.length:Q(n,s),c=Reflect.set(n,s,r,i);return n===ee(i)&&(a?zn(r,o)&&ft(n,"set",s,r):ft(n,"add",s,r)),c}}function Kl(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function ql(t,e){const n=Reflect.has(t,e);return(!Wn(e)||!va.has(e))&&Fe(t,"has",e),n}function Gl(t){return Fe(t,"iterate",$(t)?"length":Gt),Reflect.ownKeys(t)}const Ea={get:Bl,set:Wl,deleteProperty:Kl,has:ql,ownKeys:Gl},Jl={get:Hl,set(t,e){return!0},deleteProperty(t,e){return!0}},Yl=Ce({},Ea,{get:jl,set:zl}),oi=t=>t,qs=t=>Reflect.getPrototypeOf(t);function gs(t,e,n=!1,s=!1){t=t.__v_raw;const r=ee(t),i=ee(e);n||(e!==i&&Fe(r,"get",e),Fe(r,"get",i));const{has:o}=qs(r),a=s?oi:n?li:qn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function ms(t,e=!1){const n=this.__v_raw,s=ee(n),r=ee(t);return e||(t!==r&&Fe(s,"has",t),Fe(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function _s(t,e=!1){return t=t.__v_raw,!e&&Fe(ee(t),"iterate",Gt),Reflect.get(t,"size",t)}function Ki(t){t=ee(t);const e=ee(this);return qs(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function qi(t,e){e=ee(e);const n=ee(this),{has:s,get:r}=qs(n);let i=s.call(n,t);i||(t=ee(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?zn(e,o)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Gi(t){const e=ee(this),{has:n,get:s}=qs(e);let r=n.call(e,t);r||(t=ee(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ft(e,"delete",t,void 0),i}function Ji(){const t=ee(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function bs(t,e){return function(s,r){const i=this,o=i.__v_raw,a=ee(o),c=e?oi:t?li:qn;return!t&&Fe(a,"iterate",Gt),o.forEach((l,f)=>s.call(r,c(l),c(f),i))}}function ys(t,e,n){return function(...s){const r=this.__v_raw,i=ee(r),o=ln(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),f=n?oi:e?li:qn;return!e&&Fe(i,"iterate",c?Pr:Gt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function gt(t){return function(...e){return t==="delete"?!1:this}}function Xl(){const t={get(i){return gs(this,i)},get size(){return _s(this)},has:ms,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:bs(!1,!1)},e={get(i){return gs(this,i,!1,!0)},get size(){return _s(this)},has:ms,add:Ki,set:qi,delete:Gi,clear:Ji,forEach:bs(!1,!0)},n={get(i){return gs(this,i,!0)},get size(){return _s(this,!0)},has(i){return ms.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:bs(!0,!1)},s={get(i){return gs(this,i,!0,!0)},get size(){return _s(this,!0)},has(i){return ms.call(this,i,!0)},add:gt("add"),set:gt("set"),delete:gt("delete"),clear:gt("clear"),forEach:bs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ys(i,!1,!1),n[i]=ys(i,!0,!1),e[i]=ys(i,!1,!0),s[i]=ys(i,!0,!0)}),[t,n,e,s]}const[Ql,Zl,eu,tu]=Xl();function ai(t,e){const n=e?t?tu:eu:t?Zl:Ql;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,i)}const nu={get:ai(!1,!1)},su={get:ai(!1,!0)},ru={get:ai(!0,!1)},Ia=new WeakMap,xa=new WeakMap,Ta=new WeakMap,iu=new WeakMap;function ou(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function au(t){return t.__v_skip||!Object.isExtensible(t)?0:ou(Rl(t))}function Cn(t){return gn(t)?t:ci(t,!1,Ea,nu,Ia)}function cu(t){return ci(t,!1,Yl,su,xa)}function Sa(t){return ci(t,!0,Jl,ru,Ta)}function ci(t,e,n,s,r){if(!ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=au(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function St(t){return gn(t)?St(t.__v_raw):!!(t&&t.__v_isReactive)}function gn(t){return!!(t&&t.__v_isReadonly)}function Ms(t){return!!(t&&t.__v_isShallow)}function Ca(t){return St(t)||gn(t)}function ee(t){const e=t&&t.__v_raw;return e?ee(e):t}function mn(t){return Os(t,"__v_skip",!0),t}const qn=t=>ce(t)?Cn(t):t,li=t=>ce(t)?Sa(t):t;function Pa(t){Tt&&qe&&(t=ee(t),ya(t.dep||(t.dep=si())))}function ka(t,e){t=ee(t),t.dep&&kr(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function ui(t){return Ra(t,!1)}function lu(t){return Ra(t,!0)}function Ra(t,e){return de(t)?t:new uu(t,e)}class uu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ee(e),this._value=n?e:qn(e)}get value(){return Pa(this),this._value}set value(e){const n=this.__v_isShallow||Ms(e)||gn(e);e=n?e:ee(e),zn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:qn(e),ka(this))}}function un(t){return de(t)?t.value:t}const fu={get:(t,e,n)=>un(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Aa(t){return St(t)?t:new Proxy(t,fu)}function du(t){const e=$(t)?new Array(t.length):{};for(const n in t)e[n]=pu(t,n);return e}class hu{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function pu(t,e,n){const s=t[e];return de(s)?s:new hu(t,e,n)}var Oa;class gu{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[Oa]=!1,this._dirty=!0,this.effect=new ri(e,()=>{this._dirty||(this._dirty=!0,ka(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=ee(this);return Pa(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Oa="__v_isReadonly";function mu(t,e,n=!1){let s,r;const i=V(t);return i?(s=t,r=Je):(s=t.get,r=t.set),new gu(s,r,i||!r,n)}function Ct(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){Gs(i,e,n)}return r}function je(t,e,n,s){if(V(t)){const i=Ct(t,e,n,s);return i&&fa(i)&&i.catch(o=>{Gs(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(je(t[i],e,n,s));return r}function Gs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Ct(c,null,10,[t,o,a]);return}}_u(t,n,r,s)}function _u(t,e,n,s=!0){console.error(t)}let Gn=!1,Rr=!1;const Se=[];let tt=0;const fn=[];let at=null,Ht=0;const Ma=Promise.resolve();let fi=null;function di(t){const e=fi||Ma;return t?e.then(this?t.bind(this):t):e}function bu(t){let e=tt+1,n=Se.length;for(;e<n;){const s=e+n>>>1;Jn(Se[s])<t?e=s+1:n=s}return e}function hi(t){(!Se.length||!Se.includes(t,Gn&&t.allowRecurse?tt+1:tt))&&(t.id==null?Se.push(t):Se.splice(bu(t.id),0,t),Na())}function Na(){!Gn&&!Rr&&(Rr=!0,fi=Ma.then(La))}function yu(t){const e=Se.indexOf(t);e>tt&&Se.splice(e,1)}function vu(t){$(t)?fn.push(...t):(!at||!at.includes(t,t.allowRecurse?Ht+1:Ht))&&fn.push(t),Na()}function Yi(t,e=Gn?tt+1:0){for(;e<Se.length;e++){const n=Se[e];n&&n.pre&&(Se.splice(e,1),e--,n())}}function Da(t){if(fn.length){const e=[...new Set(fn)];if(fn.length=0,at){at.push(...e);return}for(at=e,at.sort((n,s)=>Jn(n)-Jn(s)),Ht=0;Ht<at.length;Ht++)at[Ht]();at=null,Ht=0}}const Jn=t=>t.id==null?1/0:t.id,wu=(t,e)=>{const n=Jn(t)-Jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function La(t){Rr=!1,Gn=!0,Se.sort(wu);const e=Je;try{for(tt=0;tt<Se.length;tt++){const n=Se[tt];n&&n.active!==!1&&Ct(n,null,14)}}finally{tt=0,Se.length=0,Da(),Gn=!1,fi=null,(Se.length||fn.length)&&La()}}function Eu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||le;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||le;p&&(r=n.map(b=>_e(b)?b.trim():b)),h&&(r=n.map(Kn))}let a,c=s[a=lr(e)]||s[a=lr(it(e))];!c&&i&&(c=s[a=lr(xn(e))]),c&&je(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(l,t,6,r)}}function Ua(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!V(t)){const c=l=>{const f=Ua(l,e,!0);f&&(a=!0,Ce(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(ce(t)&&s.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):Ce(o,i),ce(t)&&s.set(t,o),o)}function Js(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,xn(e))||Q(t,e))}let Ee=null,$a=null;function Ns(t){const e=Ee;return Ee=t,$a=t&&t.type.__scopeId||null,e}function Te(t,e=Ee,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&oo(-1);const i=Ns(e);let o;try{o=t(...r)}finally{Ns(i),s._d&&oo(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ur(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:x,inheritAttrs:S}=t;let U,R;const F=Ns(t);try{if(n.shapeFlag&4){const W=r||s;U=et(f.call(W,W,h,i,b,p,x)),R=c}else{const W=e;U=et(W.length>1?W(i,{attrs:c,slots:a,emit:l}):W(i,null)),R=e.props?c:Iu(c)}}catch(W){Fn.length=0,Gs(W,t,1),U=Z(He)}let O=U;if(R&&S!==!1){const W=Object.keys(R),{shapeFlag:K}=O;W.length&&K&7&&(o&&W.some(ei)&&(R=xu(R,o)),O=Mt(O,R))}return n.dirs&&(O=Mt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Ns(F),U}const Iu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},xu=(t,e)=>{const n={};for(const s in t)(!ei(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Tu(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Xi(s,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Js(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Xi(s,o,l):!0:!!o;return!1}function Xi(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Js(n,i))return!0}return!1}function Su({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Cu=t=>t.__isSuspense;function Pu(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):vu(t)}function Ts(t,e){if(we){let n=we.provides;const s=we.parent&&we.parent.provides;s===n&&(n=we.provides=Object.create(s)),n[t]=e}}function nt(t,e,n=!1){const s=we||Ee;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&V(e)?e.call(s.proxy):e}}const vs={};function Ln(t,e,n){return Fa(t,e,n)}function Fa(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=le){const a=we;let c,l=!1,f=!1;if(de(t)?(c=()=>t.value,l=Ms(t)):St(t)?(c=()=>t,s=!0):$(t)?(f=!0,l=t.some(O=>St(O)||Ms(O)),c=()=>t.map(O=>{if(de(O))return O.value;if(St(O))return Kt(O);if(V(O))return Ct(O,a,2)})):V(t)?e?c=()=>Ct(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),je(t,a,3,[p])}:c=Je,e&&s){const O=c;c=()=>Kt(O())}let h,p=O=>{h=R.onStop=()=>{Ct(O,a,4)}},b;if(Xn)if(p=Je,e?n&&je(e,a,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const O=If();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Je;let x=f?new Array(t.length).fill(vs):vs;const S=()=>{if(R.active)if(e){const O=R.run();(s||l||(f?O.some((W,K)=>zn(W,x[K])):zn(O,x)))&&(h&&h(),je(e,a,3,[O,x===vs?void 0:f&&x[0]===vs?[]:x,p]),x=O)}else R.run()};S.allowRecurse=!!e;let U;r==="sync"?U=S:r==="post"?U=()=>Me(S,a&&a.suspense):(S.pre=!0,a&&(S.id=a.uid),U=()=>hi(S));const R=new ri(c,U);e?n?S():x=R.run():r==="post"?Me(R.run.bind(R),a&&a.suspense):R.run();const F=()=>{R.stop(),a&&a.scope&&ti(a.scope.effects,R)};return b&&b.push(F),F}function ku(t,e,n){const s=this.proxy,r=_e(t)?t.includes(".")?Ba(s,t):()=>s[t]:t.bind(s,s);let i;V(e)?i=e:(i=e.handler,n=e);const o=we;_n(this);const a=Fa(r,i.bind(s),n);return o?_n(o):Jt(),a}function Ba(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Kt(t,e){if(!ce(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Kt(t.value,e);else if($(t))for(let n=0;n<t.length;n++)Kt(t[n],e);else if(In(t)||ln(t))t.forEach(n=>{Kt(n,e)});else if(ha(t))for(const n in t)Kt(t[n],e);return t}function Ru(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return za(()=>{t.isMounted=!0}),Ka(()=>{t.isUnmounting=!0}),t}const Be=[Function,Array],Au={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},setup(t,{slots:e}){const n=ac(),s=Ru();let r;return()=>{const i=e.default&&Ha(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const S of i)if(S.type!==He){o=S;break}}const a=ee(t),{mode:c}=a;if(s.isLeaving)return fr(o);const l=Qi(o);if(!l)return fr(o);const f=Ar(l,a,s,n);Or(l,f);const h=n.subTree,p=h&&Qi(h);let b=!1;const{getTransitionKey:x}=l.type;if(x){const S=x();r===void 0?r=S:S!==r&&(r=S,b=!0)}if(p&&p.type!==He&&(!Vt(l,p)||b)){const S=Ar(p,a,s,n);if(Or(p,S),c==="out-in")return s.isLeaving=!0,S.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},fr(o);c==="in-out"&&l.type!==He&&(S.delayLeave=(U,R,F)=>{const O=ja(s,p);O[String(p.key)]=p,U._leaveCb=()=>{R(),U._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=F})}return o}}},Ou=Au;function ja(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Ar(t,e,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:b,onLeaveCancelled:x,onBeforeAppear:S,onAppear:U,onAfterAppear:R,onAppearCancelled:F}=e,O=String(t.key),W=ja(n,t),K=(A,J)=>{A&&je(A,s,9,J)},re=(A,J)=>{const Y=J[1];K(A,J),$(A)?A.every(fe=>fe.length<=1)&&Y():A.length<=1&&Y()},z={mode:i,persisted:o,beforeEnter(A){let J=a;if(!n.isMounted)if(r)J=S||a;else return;A._leaveCb&&A._leaveCb(!0);const Y=W[O];Y&&Vt(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[A])},enter(A){let J=c,Y=l,fe=f;if(!n.isMounted)if(r)J=U||c,Y=R||l,fe=F||f;else return;let ye=!1;const Ne=A._enterCb=ke=>{ye||(ye=!0,ke?K(fe,[A]):K(Y,[A]),z.delayedLeave&&z.delayedLeave(),A._enterCb=void 0)};J?re(J,[A,Ne]):Ne()},leave(A,J){const Y=String(t.key);if(A._enterCb&&A._enterCb(!0),n.isUnmounting)return J();K(h,[A]);let fe=!1;const ye=A._leaveCb=Ne=>{fe||(fe=!0,J(),Ne?K(x,[A]):K(b,[A]),A._leaveCb=void 0,W[Y]===t&&delete W[Y])};W[Y]=t,p?re(p,[A,ye]):ye()},clone(A){return Ar(A,e,n,s)}};return z}function fr(t){if(Ys(t))return t=Mt(t),t.children=null,t}function Qi(t){return Ys(t)?t.children?t.children[0]:void 0:t}function Or(t,e){t.shapeFlag&6&&t.component?Or(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ha(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ue?(o.patchFlag&128&&r++,s=s.concat(Ha(o.children,e,a))):(e||o.type!==He)&&s.push(a!=null?Mt(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Va(t){return V(t)?{setup:t,name:t.name}:t}const Un=t=>!!t.type.__asyncLoader,Ys=t=>t.type.__isKeepAlive;function Mu(t,e){Wa(t,"a",e)}function Nu(t,e){Wa(t,"da",e)}function Wa(t,e,n=we){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Xs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ys(r.parent.vnode)&&Du(s,e,n,r),r=r.parent}}function Du(t,e,n,s){const r=Xs(e,t,s,!0);qa(()=>{ti(s[e],r)},n)}function Xs(t,e,n=we,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Tn(),_n(n);const a=je(e,n,t,o);return Jt(),Sn(),a});return s?r.unshift(i):r.push(i),i}}const pt=t=>(e,n=we)=>(!Xn||t==="sp")&&Xs(t,(...s)=>e(...s),n),Lu=pt("bm"),za=pt("m"),Uu=pt("bu"),$u=pt("u"),Ka=pt("bum"),qa=pt("um"),Fu=pt("sp"),Bu=pt("rtg"),ju=pt("rtc");function Hu(t,e=we){Xs("ec",t,e)}function xe(t,e){const n=Ee;if(n===null)return t;const s=tr(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=le]=e[i];o&&(V(o)&&(o={mounted:o,updated:o}),o.deep&&Kt(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function $t(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(Tn(),je(c,n,8,[t.el,a,t,e]),Sn())}}const pi="components";function dt(t,e){return Ja(pi,t,!0,e)||t}const Ga=Symbol();function Vu(t){return _e(t)?Ja(pi,t,!1)||t:t||Ga}function Ja(t,e,n=!0,s=!1){const r=Ee||we;if(r){const i=r.type;if(t===pi){const a=vf(i,!1);if(a&&(a===e||a===it(e)||a===Ks(it(e))))return i}const o=Zi(r[t]||i[t],e)||Zi(r.appContext[t],e);return!o&&s?i:o}}function Zi(t,e){return t&&(t[e]||t[it(e)]||t[Ks(it(e))])}function Ry(t,e,n,s){let r;const i=n&&n[s];if($(t)||_e(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(ce(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Wu(t,e,n={},s,r){if(Ee.isCE||Ee.parent&&Un(Ee.parent)&&Ee.parent.isCE)return e!=="default"&&(n.name=e),Z("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),he();const o=i&&Ya(i(n)),a=Zs(Ue,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Ya(t){return t.some(e=>Ls(e)?!(e.type===He||e.type===Ue&&!Ya(e.children)):!0)?t:null}const Mr=t=>t?cc(t)?tr(t)||t.proxy:Mr(t.parent):null,$n=Ce(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Mr(t.parent),$root:t=>Mr(t.root),$emit:t=>t.emit,$options:t=>gi(t),$forceUpdate:t=>t.f||(t.f=()=>hi(t.update)),$nextTick:t=>t.n||(t.n=di.bind(t.proxy)),$watch:t=>ku.bind(t)}),dr=(t,e)=>t!==le&&!t.__isScriptSetup&&Q(t,e),zu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const b=o[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(dr(s,e))return o[e]=1,s[e];if(r!==le&&Q(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&Q(l,e))return o[e]=3,i[e];if(n!==le&&Q(n,e))return o[e]=4,n[e];Nr&&(o[e]=0)}}const f=$n[e];let h,p;if(f)return e==="$attrs"&&Fe(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==le&&Q(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return dr(r,e)?(r[e]=n,!0):s!==le&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==le&&Q(t,o)||dr(e,o)||(a=i[0])&&Q(a,o)||Q(s,o)||Q($n,o)||Q(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Nr=!0;function Ku(t){const e=gi(t),n=t.proxy,s=t.ctx;Nr=!1,e.beforeCreate&&eo(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:x,activated:S,deactivated:U,beforeDestroy:R,beforeUnmount:F,destroyed:O,unmounted:W,render:K,renderTracked:re,renderTriggered:z,errorCaptured:A,serverPrefetch:J,expose:Y,inheritAttrs:fe,components:ye,directives:Ne,filters:ke}=e;if(l&&qu(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const ie in o){const ne=o[ie];V(ne)&&(s[ie]=ne.bind(n))}if(r){const ie=r.call(n,n);ce(ie)&&(t.data=Cn(ie))}if(Nr=!0,i)for(const ie in i){const ne=i[ie],We=V(ne)?ne.bind(n,n):V(ne.get)?ne.get.bind(n,n):Je,Ut=!V(ne)&&V(ne.set)?ne.set.bind(n):Je,ze=$e({get:We,set:Ut});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>ze.value,set:Oe=>ze.value=Oe})}if(a)for(const ie in a)Xa(a[ie],s,n,ie);if(c){const ie=V(c)?c.call(n):c;Reflect.ownKeys(ie).forEach(ne=>{Ts(ne,ie[ne])})}f&&eo(f,t,"c");function pe(ie,ne){$(ne)?ne.forEach(We=>ie(We.bind(n))):ne&&ie(ne.bind(n))}if(pe(Lu,h),pe(za,p),pe(Uu,b),pe($u,x),pe(Mu,S),pe(Nu,U),pe(Hu,A),pe(ju,re),pe(Bu,z),pe(Ka,F),pe(qa,W),pe(Fu,J),$(Y))if(Y.length){const ie=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(ie,ne,{get:()=>n[ne],set:We=>n[ne]=We})})}else t.exposed||(t.exposed={});K&&t.render===Je&&(t.render=K),fe!=null&&(t.inheritAttrs=fe),ye&&(t.components=ye),Ne&&(t.directives=Ne)}function qu(t,e,n=Je,s=!1){$(t)&&(t=Dr(t));for(const r in t){const i=t[r];let o;ce(i)?"default"in i?o=nt(i.from||r,i.default,!0):o=nt(i.from||r):o=nt(i),de(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function eo(t,e,n){je($(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Xa(t,e,n,s){const r=s.includes(".")?Ba(n,s):()=>n[s];if(_e(t)){const i=e[t];V(i)&&Ln(r,i)}else if(V(t))Ln(r,t.bind(n));else if(ce(t))if($(t))t.forEach(i=>Xa(i,e,n,s));else{const i=V(t.handler)?t.handler.bind(n):e[t.handler];V(i)&&Ln(r,i,t)}}function gi(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>Ds(c,l,o,!0)),Ds(c,e,o)),ce(e)&&i.set(e,c),c}function Ds(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Ds(t,i,n,!0),r&&r.forEach(o=>Ds(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Gu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Gu={data:to,props:Bt,emits:Bt,methods:Bt,computed:Bt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Bt,directives:Bt,watch:Yu,provide:to,inject:Ju};function to(t,e){return e?t?function(){return Ce(V(t)?t.call(this,this):t,V(e)?e.call(this,this):e)}:e:t}function Ju(t,e){return Bt(Dr(t),Dr(e))}function Dr(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Re(t,e){return t?[...new Set([].concat(t,e))]:e}function Bt(t,e){return t?Ce(Ce(Object.create(null),t),e):e}function Yu(t,e){if(!t)return e;if(!e)return t;const n=Ce(Object.create(null),t);for(const s in e)n[s]=Re(t[s],e[s]);return n}function Xu(t,e,n,s=!1){const r={},i={};Os(i,er,1),t.propsDefaults=Object.create(null),Qa(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:cu(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Qu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=ee(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Js(t.emitsOptions,p))continue;const b=e[p];if(c)if(Q(i,p))b!==i[p]&&(i[p]=b,l=!0);else{const x=it(p);r[x]=Lr(c,a,x,b,t,!1)}else b!==i[p]&&(i[p]=b,l=!0)}}}else{Qa(t,e,r,i)&&(l=!0);let f;for(const h in a)(!e||!Q(e,h)&&((f=xn(h))===h||!Q(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Lr(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!Q(e,h))&&(delete i[h],l=!0)}l&&ft(t,"set","$attrs")}function Qa(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Is(c))continue;const l=e[c];let f;r&&Q(r,f=it(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Js(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=ee(n),l=a||le;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Lr(r,c,h,l[h],t,!Q(l,h))}}return o}function Lr(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Q(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&V(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(_n(r),s=l[n]=c.call(null,e),Jt())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===xn(n))&&(s=!0))}return s}function Za(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!V(t)){const f=h=>{c=!0;const[p,b]=Za(h,e,!0);Ce(o,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return ce(t)&&s.set(t,cn),cn;if($(i))for(let f=0;f<i.length;f++){const h=it(i[f]);no(h)&&(o[h]=le)}else if(i)for(const f in i){const h=it(f);if(no(h)){const p=i[f],b=o[h]=$(p)||V(p)?{type:p}:Object.assign({},p);if(b){const x=io(Boolean,b.type),S=io(String,b.type);b[0]=x>-1,b[1]=S<0||x<S,(x>-1||Q(b,"default"))&&a.push(h)}}}const l=[o,a];return ce(t)&&s.set(t,l),l}function no(t){return t[0]!=="$"}function so(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ro(t,e){return so(t)===so(e)}function io(t,e){return $(e)?e.findIndex(n=>ro(n,t)):V(e)&&ro(e,t)?0:-1}const ec=t=>t[0]==="_"||t==="$stable",mi=t=>$(t)?t.map(et):[et(t)],Zu=(t,e,n)=>{if(e._n)return e;const s=Te((...r)=>mi(e(...r)),n);return s._c=!1,s},tc=(t,e,n)=>{const s=t._ctx;for(const r in t){if(ec(r))continue;const i=t[r];if(V(i))e[r]=Zu(r,i,s);else if(i!=null){const o=mi(i);e[r]=()=>o}}},nc=(t,e)=>{const n=mi(e);t.slots.default=()=>n},ef=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ee(e),Os(e,"_",n)):tc(e,t.slots={})}else t.slots={},e&&nc(t,e);Os(t.slots,er,1)},tf=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=le;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Ce(r,e),!n&&a===1&&delete r._):(i=!e.$stable,tc(e,r)),o=e}else e&&(nc(t,e),o={default:1});if(i)for(const a in r)!ec(a)&&!(a in o)&&delete r[a]};function sc(){return{app:null,config:{isNativeTag:Cl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nf=0;function sf(t,e){return function(s,r=null){V(s)||(s=Object.assign({},s)),r!=null&&!ce(r)&&(r=null);const i=sc(),o=new Set;let a=!1;const c=i.app={_uid:nf++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xf,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&V(l.install)?(o.add(l),l.install(c,...f)):V(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=Z(s,r);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,tr(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function Ur(t,e,n,s,r=!1){if($(t)){t.forEach((p,b)=>Ur(p,e&&($(e)?e[b]:e),n,s,r));return}if(Un(s)&&!r)return;const i=s.shapeFlag&4?tr(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===le?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(_e(l)?(f[l]=null,Q(h,l)&&(h[l]=null)):de(l)&&(l.value=null)),V(c))Ct(c,a,12,[o,f]);else{const p=_e(c),b=de(c);if(p||b){const x=()=>{if(t.f){const S=p?Q(h,c)?h[c]:f[c]:c.value;r?$(S)&&ti(S,i):$(S)?S.includes(i)||S.push(i):p?(f[c]=[i],Q(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,Q(h,c)&&(h[c]=o)):b&&(c.value=o,t.k&&(f[t.k]=o))};o?(x.id=-1,Me(x,n)):x()}}}const Me=Pu;function rf(t){return of(t)}function of(t,e){const n=Ml();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Je,insertStaticContent:x}=t,S=(u,d,g,_=null,v=null,I=null,P=!1,E=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!Vt(u,d)&&(_=C(u),Oe(u,v,I,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:M}=d;switch(w){case Qs:U(u,d,g,_);break;case He:R(u,d,g,_);break;case Ss:u==null&&F(d,g,_,P);break;case Ue:ye(u,d,g,_,v,I,P,E,T);break;default:M&1?K(u,d,g,_,v,I,P,E,T):M&6?Ne(u,d,g,_,v,I,P,E,T):(M&64||M&128)&&w.process(u,d,g,_,v,I,P,E,T,X)}D!=null&&v&&Ur(D,u&&u.ref,I,d||u,!d)},U=(u,d,g,_)=>{if(u==null)s(d.el=a(d.children),g,_);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},R=(u,d,g,_)=>{u==null?s(d.el=c(d.children||""),g,_):d.el=u.el},F=(u,d,g,_)=>{[u.el,u.anchor]=x(u.children,d,g,_,u.el,u.anchor)},O=({el:u,anchor:d},g,_)=>{let v;for(;u&&u!==d;)v=p(u),s(u,g,_),u=v;s(d,g,_)},W=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},K=(u,d,g,_,v,I,P,E,T)=>{P=P||d.type==="svg",u==null?re(d,g,_,v,I,P,E,T):J(u,d,v,I,P,E,T)},re=(u,d,g,_,v,I,P,E)=>{let T,w;const{type:D,props:M,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=o(u.type,I,M&&M.is,M),L&8?f(T,u.children):L&16&&A(u.children,T,null,_,v,I&&D!=="foreignObject",P,E),G&&$t(u,null,_,"created"),M){for(const se in M)se!=="value"&&!Is(se)&&i(T,se,null,M[se],I,u.children,_,v,k);"value"in M&&i(T,"value",null,M.value),(w=M.onVnodeBeforeMount)&&Ze(w,_,u)}z(T,u,u.scopeId,P,_),G&&$t(u,null,_,"beforeMount");const oe=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(T),s(T,d,g),((w=M&&M.onVnodeMounted)||oe||G)&&Me(()=>{w&&Ze(w,_,u),oe&&H.enter(T),G&&$t(u,null,_,"mounted")},v)},z=(u,d,g,_,v)=>{if(g&&b(u,g),_)for(let I=0;I<_.length;I++)b(u,_[I]);if(v){let I=v.subTree;if(d===I){const P=v.vnode;z(u,P,P.scopeId,P.slotScopeIds,v.parent)}}},A=(u,d,g,_,v,I,P,E,T=0)=>{for(let w=T;w<u.length;w++){const D=u[w]=E?bt(u[w]):et(u[w]);S(null,D,d,g,_,v,I,P,E)}},J=(u,d,g,_,v,I,P)=>{const E=d.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:D}=d;T|=u.patchFlag&16;const M=u.props||le,L=d.props||le;let H;g&&Ft(g,!1),(H=L.onVnodeBeforeUpdate)&&Ze(H,g,d,u),D&&$t(d,u,g,"beforeUpdate"),g&&Ft(g,!0);const G=v&&d.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,E,g,_,G,I):P||ne(u,d,E,null,g,_,G,I,!1),T>0){if(T&16)fe(E,d,M,L,g,_,v);else if(T&2&&M.class!==L.class&&i(E,"class",null,L.class,v),T&4&&i(E,"style",M.style,L.style,v),T&8){const oe=d.dynamicProps;for(let se=0;se<oe.length;se++){const ge=oe[se],Ke=M[ge],nn=L[ge];(nn!==Ke||ge==="value")&&i(E,ge,Ke,nn,v,u.children,g,_,k)}}T&1&&u.children!==d.children&&f(E,d.children)}else!P&&w==null&&fe(E,d,M,L,g,_,v);((H=L.onVnodeUpdated)||D)&&Me(()=>{H&&Ze(H,g,d,u),D&&$t(d,u,g,"updated")},_)},Y=(u,d,g,_,v,I,P)=>{for(let E=0;E<d.length;E++){const T=u[E],w=d[E],D=T.el&&(T.type===Ue||!Vt(T,w)||T.shapeFlag&70)?h(T.el):g;S(T,w,D,null,_,v,I,P,!0)}},fe=(u,d,g,_,v,I,P)=>{if(g!==_){if(g!==le)for(const E in g)!Is(E)&&!(E in _)&&i(u,E,g[E],null,P,d.children,v,I,k);for(const E in _){if(Is(E))continue;const T=_[E],w=g[E];T!==w&&E!=="value"&&i(u,E,w,T,P,d.children,v,I,k)}"value"in _&&i(u,"value",g.value,_.value)}},ye=(u,d,g,_,v,I,P,E,T)=>{const w=d.el=u?u.el:a(""),D=d.anchor=u?u.anchor:a("");let{patchFlag:M,dynamicChildren:L,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(s(w,g,_),s(D,g,_),A(d.children,g,D,v,I,P,E,T)):M>0&&M&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,g,v,I,P,E),(d.key!=null||v&&d===v.subTree)&&rc(u,d,!0)):ne(u,d,g,D,v,I,P,E,T)},Ne=(u,d,g,_,v,I,P,E,T)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,g,_,P,T):ke(d,g,_,v,I,P,T):ve(u,d,T)},ke=(u,d,g,_,v,I,P)=>{const E=u.component=gf(u,_,v);if(Ys(u)&&(E.ctx.renderer=X),mf(E),E.asyncDep){if(v&&v.registerDep(E,pe),!u.el){const T=E.subTree=Z(He);R(null,T,d,g)}return}pe(E,u,d,g,v,I,P)},ve=(u,d,g)=>{const _=d.component=u.component;if(Tu(u,d,g))if(_.asyncDep&&!_.asyncResolved){ie(_,d,g);return}else _.next=d,yu(_.update),_.update();else d.el=u.el,_.vnode=d},pe=(u,d,g,_,v,I,P)=>{const E=()=>{if(u.isMounted){let{next:D,bu:M,u:L,parent:H,vnode:G}=u,oe=D,se;Ft(u,!1),D?(D.el=G.el,ie(u,D,P)):D=G,M&&xs(M),(se=D.props&&D.props.onVnodeBeforeUpdate)&&Ze(se,H,D,G),Ft(u,!0);const ge=ur(u),Ke=u.subTree;u.subTree=ge,S(Ke,ge,h(Ke.el),C(Ke),u,v,I),D.el=ge.el,oe===null&&Su(u,ge.el),L&&Me(L,v),(se=D.props&&D.props.onVnodeUpdated)&&Me(()=>Ze(se,H,D,G),v)}else{let D;const{el:M,props:L}=d,{bm:H,m:G,parent:oe}=u,se=Un(d);if(Ft(u,!1),H&&xs(H),!se&&(D=L&&L.onVnodeBeforeMount)&&Ze(D,oe,d),Ft(u,!0),M&&q){const ge=()=>{u.subTree=ur(u),q(M,u.subTree,u,v,null)};se?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ge()):ge()}else{const ge=u.subTree=ur(u);S(null,ge,g,_,u,v,I),d.el=ge.el}if(G&&Me(G,v),!se&&(D=L&&L.onVnodeMounted)){const ge=d;Me(()=>Ze(D,oe,ge),v)}(d.shapeFlag&256||oe&&Un(oe.vnode)&&oe.vnode.shapeFlag&256)&&u.a&&Me(u.a,v),u.isMounted=!0,d=g=_=null}},T=u.effect=new ri(E,()=>hi(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,Ft(u,!0),w()},ie=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Qu(u,d.props,_,g),tf(u,d.children,g),Tn(),Yi(),Sn()},ne=(u,d,g,_,v,I,P,E,T=!1)=>{const w=u&&u.children,D=u?u.shapeFlag:0,M=d.children,{patchFlag:L,shapeFlag:H}=d;if(L>0){if(L&128){Ut(w,M,g,_,v,I,P,E,T);return}else if(L&256){We(w,M,g,_,v,I,P,E,T);return}}H&8?(D&16&&k(w,v,I),M!==w&&f(g,M)):D&16?H&16?Ut(w,M,g,_,v,I,P,E,T):k(w,v,I,!0):(D&8&&f(g,""),H&16&&A(M,g,_,v,I,P,E,T))},We=(u,d,g,_,v,I,P,E,T)=>{u=u||cn,d=d||cn;const w=u.length,D=d.length,M=Math.min(w,D);let L;for(L=0;L<M;L++){const H=d[L]=T?bt(d[L]):et(d[L]);S(u[L],H,g,null,v,I,P,E,T)}w>D?k(u,v,I,!0,!1,M):A(d,g,_,v,I,P,E,T,M)},Ut=(u,d,g,_,v,I,P,E,T)=>{let w=0;const D=d.length;let M=u.length-1,L=D-1;for(;w<=M&&w<=L;){const H=u[w],G=d[w]=T?bt(d[w]):et(d[w]);if(Vt(H,G))S(H,G,g,null,v,I,P,E,T);else break;w++}for(;w<=M&&w<=L;){const H=u[M],G=d[L]=T?bt(d[L]):et(d[L]);if(Vt(H,G))S(H,G,g,null,v,I,P,E,T);else break;M--,L--}if(w>M){if(w<=L){const H=L+1,G=H<D?d[H].el:_;for(;w<=L;)S(null,d[w]=T?bt(d[w]):et(d[w]),g,G,v,I,P,E,T),w++}}else if(w>L)for(;w<=M;)Oe(u[w],v,I,!0),w++;else{const H=w,G=w,oe=new Map;for(w=G;w<=L;w++){const De=d[w]=T?bt(d[w]):et(d[w]);De.key!=null&&oe.set(De.key,w)}let se,ge=0;const Ke=L-G+1;let nn=!1,$i=0;const Rn=new Array(Ke);for(w=0;w<Ke;w++)Rn[w]=0;for(w=H;w<=M;w++){const De=u[w];if(ge>=Ke){Oe(De,v,I,!0);continue}let Qe;if(De.key!=null)Qe=oe.get(De.key);else for(se=G;se<=L;se++)if(Rn[se-G]===0&&Vt(De,d[se])){Qe=se;break}Qe===void 0?Oe(De,v,I,!0):(Rn[Qe-G]=w+1,Qe>=$i?$i=Qe:nn=!0,S(De,d[Qe],g,null,v,I,P,E,T),ge++)}const Fi=nn?af(Rn):cn;for(se=Fi.length-1,w=Ke-1;w>=0;w--){const De=G+w,Qe=d[De],Bi=De+1<D?d[De+1].el:_;Rn[w]===0?S(null,Qe,g,Bi,v,I,P,E,T):nn&&(se<0||w!==Fi[se]?ze(Qe,g,Bi,2):se--)}}},ze=(u,d,g,_,v=null)=>{const{el:I,type:P,transition:E,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){P.move(u,d,g,X);return}if(P===Ue){s(I,d,g);for(let M=0;M<T.length;M++)ze(T[M],d,g,_);s(u.anchor,d,g);return}if(P===Ss){O(u,d,g);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(I),s(I,d,g),Me(()=>E.enter(I),v);else{const{leave:M,delayLeave:L,afterLeave:H}=E,G=()=>s(I,d,g),oe=()=>{M(I,()=>{G(),H&&H()})};L?L(I,G,oe):oe()}else s(I,d,g)},Oe=(u,d,g,_=!1,v=!1)=>{const{type:I,props:P,ref:E,children:T,dynamicChildren:w,shapeFlag:D,patchFlag:M,dirs:L}=u;if(E!=null&&Ur(E,null,g,u,!0),D&256){d.ctx.deactivate(u);return}const H=D&1&&L,G=!Un(u);let oe;if(G&&(oe=P&&P.onVnodeBeforeUnmount)&&Ze(oe,d,u),D&6)y(u.component,g,_);else{if(D&128){u.suspense.unmount(g,_);return}H&&$t(u,null,d,"beforeUnmount"),D&64?u.type.remove(u,d,g,v,X,_):w&&(I!==Ue||M>0&&M&64)?k(w,d,g,!1,!0):(I===Ue&&M&384||!v&&D&16)&&k(T,d,g),_&&tn(u)}(G&&(oe=P&&P.onVnodeUnmounted)||H)&&Me(()=>{oe&&Ze(oe,d,u),H&&$t(u,null,d,"unmounted")},g)},tn=u=>{const{type:d,el:g,anchor:_,transition:v}=u;if(d===Ue){ps(g,_);return}if(d===Ss){W(u);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:P,delayLeave:E}=v,T=()=>P(g,I);E?E(u.el,I,T):T()}else I()},ps=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},y=(u,d,g)=>{const{bum:_,scope:v,update:I,subTree:P,um:E}=u;_&&xs(_),v.stop(),I&&(I.active=!1,Oe(P,u,d,g)),E&&Me(E,d),Me(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},k=(u,d,g,_=!1,v=!1,I=0)=>{for(let P=I;P<u.length;P++)Oe(u[P],d,g,_,v)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),N=(u,d,g)=>{u==null?d._vnode&&Oe(d._vnode,null,null,!0):S(d._vnode||null,u,d,null,null,null,g),Yi(),Da(),d._vnode=u},X={p:S,um:Oe,m:ze,r:tn,mt:ke,mc:A,pc:ne,pbc:Y,n:C,o:t};let ue,q;return e&&([ue,q]=e(X)),{render:N,hydrate:ue,createApp:sf(N,ue)}}function Ft({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function rc(t,e,n=!1){const s=t.children,r=e.children;if($(s)&&$(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=bt(r[i]),a.el=o.el),n||rc(o,a)),a.type===Qs&&(a.el=o.el)}}function af(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const cf=t=>t.__isTeleport,Ue=Symbol(void 0),Qs=Symbol(void 0),He=Symbol(void 0),Ss=Symbol(void 0),Fn=[];let Ge=null;function he(t=!1){Fn.push(Ge=t?null:[])}function lf(){Fn.pop(),Ge=Fn[Fn.length-1]||null}let Yn=1;function oo(t){Yn+=t}function ic(t){return t.dynamicChildren=Yn>0?Ge||cn:null,lf(),Yn>0&&Ge&&Ge.push(t),t}function Ie(t,e,n,s,r,i){return ic(m(t,e,n,s,r,i,!0))}function Zs(t,e,n,s,r){return ic(Z(t,e,n,s,r,!0))}function Ls(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const er="__vInternal",oc=({key:t})=>t??null,Cs=({ref:t,ref_key:e,ref_for:n})=>t!=null?_e(t)||de(t)||V(t)?{i:Ee,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,i=t===Ue?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&oc(e),ref:e&&Cs(e),scopeId:$a,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ee};return a?(bi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=_e(n)?8:16),Yn>0&&!o&&Ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ge.push(c),c}const Z=uf;function uf(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Ga)&&(t=He),Ls(t)){const a=Mt(t,e,!0);return n&&bi(a,n),Yn>0&&!i&&Ge&&(a.shapeFlag&6?Ge[Ge.indexOf(t)]=a:Ge.push(a)),a.patchFlag|=-2,a}if(wf(t)&&(t=t.__vccOpts),e){e=ff(e);let{class:a,style:c}=e;a&&!_e(a)&&(e.class=rs(a)),ce(c)&&(Ca(c)&&!$(c)&&(c=Ce({},c)),e.style=wt(c))}const o=_e(t)?1:Cu(t)?128:cf(t)?64:ce(t)?4:V(t)?2:0;return m(t,e,n,s,r,o,i,!0)}function ff(t){return t?Ca(t)||er in t?Ce({},t):t:null}function Mt(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?df(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&oc(a),ref:e&&e.ref?n&&r?$(r)?r.concat(Cs(e)):[r,Cs(e)]:Cs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ue?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mt(t.ssContent),ssFallback:t.ssFallback&&Mt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function me(t=" ",e=0){return Z(Qs,null,t,e)}function _i(t,e){const n=Z(Ss,null,t);return n.staticCount=e,n}function Pt(t="",e=!1){return e?(he(),Zs(He,null,t)):Z(He,null,t)}function et(t){return t==null||typeof t=="boolean"?Z(He):$(t)?Z(Ue,null,t.slice()):typeof t=="object"?bt(t):Z(Qs,null,String(t))}function bt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mt(t)}function bi(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),bi(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(er in e)?e._ctx=Ee:r===3&&Ee&&(Ee.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else V(e)?(e={default:e,_ctx:Ee},n=32):(e=String(e),s&64?(n=16,e=[me(e)]):n=8);t.children=e,t.shapeFlag|=n}function df(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=rs([e.class,s.class]));else if(r==="style")e.style=wt([e.style,s.style]);else if(Ws(r)){const i=e[r],o=s[r];o&&i!==o&&!($(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ze(t,e,n,s=null){je(t,e,7,[n,s])}const hf=sc();let pf=0;function gf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||hf,i={uid:pf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new pa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Za(s,r),emitsOptions:Ua(s,r),emit:null,emitted:null,propsDefaults:le,inheritAttrs:s.inheritAttrs,ctx:le,data:le,props:le,attrs:le,slots:le,refs:le,setupState:le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Eu.bind(null,i),t.ce&&t.ce(i),i}let we=null;const ac=()=>we||Ee,_n=t=>{we=t,t.scope.on()},Jt=()=>{we&&we.scope.off(),we=null};function cc(t){return t.vnode.shapeFlag&4}let Xn=!1;function mf(t,e=!1){Xn=e;const{props:n,children:s}=t.vnode,r=cc(t);Xu(t,n,r,e),ef(t,s);const i=r?_f(t,e):void 0;return Xn=!1,i}function _f(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=mn(new Proxy(t.ctx,zu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?yf(t):null;_n(t),Tn();const i=Ct(s,t,0,[t.props,r]);if(Sn(),Jt(),fa(i)){if(i.then(Jt,Jt),e)return i.then(o=>{ao(t,o,e)}).catch(o=>{Gs(o,t,0)});t.asyncDep=i}else ao(t,i,e)}else lc(t,e)}function ao(t,e,n){V(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ce(e)&&(t.setupState=Aa(e)),lc(t,n)}let co;function lc(t,e,n){const s=t.type;if(!t.render){if(!e&&co&&!s.render){const r=s.template||gi(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Ce(Ce({isCustomElement:i,delimiters:a},o),c);s.render=co(r,l)}}t.render=s.render||Je}_n(t),Tn(),Ku(t),Sn(),Jt()}function bf(t){return new Proxy(t.attrs,{get(e,n){return Fe(t,"get","$attrs"),e[n]}})}function yf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=bf(t))},slots:t.slots,emit:t.emit,expose:e}}function tr(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Aa(mn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $n)return $n[n](t)},has(e,n){return n in e||n in $n}}))}function vf(t,e=!0){return V(t)?t.displayName||t.name:t.name||e&&t.__name}function wf(t){return V(t)&&"__vccOpts"in t}const $e=(t,e)=>mu(t,e,Xn);function uc(t,e,n){const s=arguments.length;return s===2?ce(e)&&!$(e)?Ls(e)?Z(t,null,[e]):Z(t,e):Z(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ls(n)&&(n=[n]),Z(t,e,n))}const Ef=Symbol(""),If=()=>nt(Ef),xf="3.2.45",Tf="http://www.w3.org/2000/svg",Wt=typeof document<"u"?document:null,lo=Wt&&Wt.createElement("template"),Sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Wt.createElementNS(Tf,t):Wt.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Wt.createTextNode(t),createComment:t=>Wt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Wt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{lo.innerHTML=s?`<svg>${t}</svg>`:t;const a=lo.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function Cf(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Pf(t,e,n){const s=t.style,r=_e(n);if(n&&!r){for(const i in n)$r(s,i,n[i]);if(e&&!_e(e))for(const i in e)n[i]==null&&$r(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const uo=/\s*!important$/;function $r(t,e,n){if($(n))n.forEach(s=>$r(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=kf(t,e);uo.test(n)?t.setProperty(xn(s),n.replace(uo,""),"important"):t[s]=n}}const fo=["Webkit","Moz","ms"],hr={};function kf(t,e){const n=hr[e];if(n)return n;let s=it(e);if(s!=="filter"&&s in t)return hr[e]=s;s=Ks(s);for(let r=0;r<fo.length;r++){const i=fo[r]+s;if(i in t)return hr[e]=i}return e}const ho="http://www.w3.org/1999/xlink";function Rf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ho,e.slice(6,e.length)):t.setAttributeNS(ho,e,n);else{const i=Tl(e);n==null||i&&!la(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Af(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=la(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function ct(t,e,n,s){t.addEventListener(e,n,s)}function Of(t,e,n,s){t.removeEventListener(e,n,s)}function Mf(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=Nf(e);if(s){const l=i[e]=Uf(s,r);ct(t,a,l,c)}else o&&(Of(t,a,o,c),i[e]=void 0)}}const po=/(?:Once|Passive|Capture)$/;function Nf(t){let e;if(po.test(t)){e={};let s;for(;s=t.match(po);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let pr=0;const Df=Promise.resolve(),Lf=()=>pr||(Df.then(()=>pr=0),pr=Date.now());function Uf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;je($f(s,n.value),e,5,[s])};return n.value=t,n.attached=Lf(),n}function $f(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const go=/^on[a-z]/,Ff=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?Cf(t,s,r):e==="style"?Pf(t,n,s):Ws(e)?ei(e)||Mf(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bf(t,e,s,r))?Af(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Rf(t,e,s,r))};function Bf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&go.test(e)&&V(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||go.test(e)&&_e(n)?!1:e in t}const jf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ou.props;const Nt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>xs(e,n):e};function Hf(t){t.target.composing=!0}function mo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Nt(r);const i=s||r.props&&r.props.type==="number";ct(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Kn(a)),t._assign(a)}),n&&ct(t,"change",()=>{t.value=t.value.trim()}),e||(ct(t,"compositionstart",Hf),ct(t,"compositionend",mo),ct(t,"change",mo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Nt(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Kn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Vf={deep:!0,created(t,e,n){t._assign=Nt(n),ct(t,"change",()=>{const s=t._modelValue,r=bn(t),i=t.checked,o=t._assign;if($(s)){const a=Zr(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(In(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(fc(t,i))})},mounted:_o,beforeUpdate(t,e,n){t._assign=Nt(n),_o(t,e,n)}};function _o(t,{value:e,oldValue:n},s){t._modelValue=e,$(e)?t.checked=Zr(e,s.props.value)>-1:In(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Xt(e,fc(t,!0)))}const Wf={created(t,{value:e},n){t.checked=Xt(e,n.props.value),t._assign=Nt(n),ct(t,"change",()=>{t._assign(bn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Nt(s),e!==n&&(t.checked=Xt(e,s.props.value))}},zf={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=In(e);ct(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Kn(bn(o)):bn(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Nt(s)},mounted(t,{value:e}){bo(t,e)},beforeUpdate(t,e,n){t._assign=Nt(n)},updated(t,{value:e}){bo(t,e)}};function bo(t,e){const n=t.multiple;if(!(n&&!$(e)&&!In(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=bn(i);if(n)$(e)?i.selected=Zr(e,o)>-1:i.selected=e.has(o);else if(Xt(bn(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function bn(t){return"_value"in t?t._value:t.value}function fc(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Fr={created(t,e,n){ws(t,e,n,null,"created")},mounted(t,e,n){ws(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){ws(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){ws(t,e,n,s,"updated")}};function Kf(t,e){switch(t){case"SELECT":return zf;case"TEXTAREA":return kt;default:switch(e){case"checkbox":return Vf;case"radio":return Wf;default:return kt}}}function ws(t,e,n,s,r){const o=Kf(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const zt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):An(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),An(t,!0),s.enter(t)):s.leave(t,()=>{An(t,!1)}):An(t,e))},beforeUnmount(t,{value:e}){An(t,e)}};function An(t,e){t.style.display=e?t._vod:"none"}const qf=Ce({patchProp:Ff},Sf);let yo;function Gf(){return yo||(yo=rf(qf))}const Jf=(...t)=>{const e=Gf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Yf(s);if(!r)return;const i=e._component;!V(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Yf(t){return _e(t)?document.querySelector(t):t}var Xf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let dc;const nr=t=>dc=t,hc=Symbol();function Br(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Bn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Bn||(Bn={}));function Qf(){const t=ga(!0),e=t.run(()=>ui({}));let n=[],s=[];const r=mn({install(i){nr(r),r._a=i,i.provide(hc,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!Xf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const pc=()=>{};function vo(t,e,n,s=pc){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&Dl()&&Ll(r),r}function sn(t,...e){t.slice().forEach(n=>{n(...e)})}function jr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Br(r)&&Br(s)&&t.hasOwnProperty(n)&&!de(s)&&!St(s)?t[n]=jr(r,s):t[n]=s}return t}const Zf=Symbol();function ed(t){return!Br(t)||!t.hasOwnProperty(Zf)}const{assign:yt}=Object;function td(t){return!!(de(t)&&t.effect)}function nd(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const f=du(n.state.value[t]);return yt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=mn($e(()=>{nr(n);const b=n._s.get(t);return o[p].call(b,b)})),h),{}))}return c=gc(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(p=>{yt(p,h)})},c}function gc(t,e,n={},s,r,i){let o;const a=yt({actions:{}},n),c={deep:!0};let l,f,h=mn([]),p=mn([]),b;const x=s.state.value[t];!i&&!x&&(s.state.value[t]={}),ui({});let S;function U(z){let A;l=f=!1,typeof z=="function"?(z(s.state.value[t]),A={type:Bn.patchFunction,storeId:t,events:b}):(jr(s.state.value[t],z),A={type:Bn.patchObject,payload:z,storeId:t,events:b});const J=S=Symbol();di().then(()=>{S===J&&(l=!0)}),f=!0,sn(h,A,s.state.value[t])}const R=pc;function F(){o.stop(),h=[],p=[],s._s.delete(t)}function O(z,A){return function(){nr(s);const J=Array.from(arguments),Y=[],fe=[];function ye(ve){Y.push(ve)}function Ne(ve){fe.push(ve)}sn(p,{args:J,name:z,store:K,after:ye,onError:Ne});let ke;try{ke=A.apply(this&&this.$id===t?this:K,J)}catch(ve){throw sn(fe,ve),ve}return ke instanceof Promise?ke.then(ve=>(sn(Y,ve),ve)).catch(ve=>(sn(fe,ve),Promise.reject(ve))):(sn(Y,ke),ke)}}const W={_p:s,$id:t,$onAction:vo.bind(null,p),$patch:U,$reset:R,$subscribe(z,A={}){const J=vo(h,z,A.detached,()=>Y()),Y=o.run(()=>Ln(()=>s.state.value[t],fe=>{(A.flush==="sync"?f:l)&&z({storeId:t,type:Bn.direct,events:b},fe)},yt({},c,A)));return J},$dispose:F},K=Cn(W);s._s.set(t,K);const re=s._e.run(()=>(o=ga(),o.run(()=>e())));for(const z in re){const A=re[z];if(de(A)&&!td(A)||St(A))i||(x&&ed(A)&&(de(A)?A.value=x[z]:jr(A,x[z])),s.state.value[t][z]=A);else if(typeof A=="function"){const J=O(z,A);re[z]=J,a.actions[z]=A}}return yt(K,re),yt(ee(K),re),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:z=>{U(A=>{yt(A,z)})}}),s._p.forEach(z=>{yt(K,o.run(()=>z({store:K,app:s._a,pinia:s,options:a})))}),x&&i&&n.hydrate&&n.hydrate(K.$state,x),l=!0,f=!0,K}function sd(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=ac();return a=a||l&&nt(hc,null),a&&nr(a),a=dc,a._s.has(s)||(i?gc(s,e,r,a):nd(s,r,a)),a._s.get(s)}return o.$id=s,o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mc=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},rd=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,o||(p=64)),s.push(n[f],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mc(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const b=a<<4&240|l>>2;if(s.push(b),h!==64){const x=l<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},id=function(t){const e=mc(t);return _c.encodeByteArray(e,!0)},bc=function(t){return id(t).replace(/\./g,"")},yc=function(t){try{return _c.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const ad=()=>od().__FIREBASE_DEFAULTS__,cd=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ld=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yc(t[1]);return e&&JSON.parse(e)},yi=()=>{try{return ad()||cd()||ld()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ud=t=>{var e,n;return(n=(e=yi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},fd=()=>{var t;return(t=yi())===null||t===void 0?void 0:t.config},vc=t=>{var e;return(e=yi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function pd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function md(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _d(){try{return typeof indexedDB=="object"}catch{return!1}}function bd(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="FirebaseError";class Dt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=yd,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,os.prototype.create)}}class os{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?vd(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Dt(r,a,s)}}function vd(t,e){return t.replace(wd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const wd=/\{\$([^}]+)}/g;function Ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Us(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(wo(i)&&wo(o)){if(!Us(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function wo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Id(t,e){const n=new xd(t,e);return n.subscribe.bind(n)}class xd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Td(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=gr),r.error===void 0&&(r.error=gr),r.complete===void 0&&(r.complete=gr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Td(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function gr(){}/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Sd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pd(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Cd(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cd(t){return t===jt?void 0:t}function Pd(t){return t.instantiationMode==="EAGER"}/**
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
 */class kd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Sd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const Rd={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},Ad=ae.INFO,Od={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Md=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Od[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wc{constructor(e){this.name=e,this._logLevel=Ad,this._logHandler=Md,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Nd=(t,e)=>e.some(n=>t instanceof n);let Eo,Io;function Dd(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ld(){return Io||(Io=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ec=new WeakMap,Hr=new WeakMap,Ic=new WeakMap,mr=new WeakMap,vi=new WeakMap;function Ud(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Rt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ec.set(n,t)}).catch(()=>{}),vi.set(e,t),e}function $d(t){if(Hr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hr.set(t,e)}let Vr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ic.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fd(t){Vr=t(Vr)}function Bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(_r(this),e,...n);return Ic.set(s,e.sort?e.sort():[e]),Rt(s)}:Ld().includes(t)?function(...e){return t.apply(_r(this),e),Rt(Ec.get(this))}:function(...e){return Rt(t.apply(_r(this),e))}}function jd(t){return typeof t=="function"?Bd(t):(t instanceof IDBTransaction&&$d(t),Nd(t,Dd())?new Proxy(t,Vr):t)}function Rt(t){if(t instanceof IDBRequest)return Ud(t);if(mr.has(t))return mr.get(t);const e=jd(t);return e!==t&&(mr.set(t,e),vi.set(e,t)),e}const _r=t=>vi.get(t);function Hd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Rt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Rt(o.result),c.oldVersion,c.newVersion,Rt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Vd=["get","getKey","getAll","getAllKeys","count"],Wd=["put","add","delete","clear"],br=new Map;function xo(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Wd.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Vd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return br.set(e,i),i}Fd(t=>({...t,get:(e,n,s)=>xo(e,n)||t.get(e,n,s),has:(e,n)=>!!xo(e,n)||t.has(e,n)}));/**
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
 */class zd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Kd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Kd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wr="@firebase/app",To="0.9.3";/**
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
 */const Qt=new wc("@firebase/app"),qd="@firebase/app-compat",Gd="@firebase/analytics-compat",Jd="@firebase/analytics",Yd="@firebase/app-check-compat",Xd="@firebase/app-check",Qd="@firebase/auth",Zd="@firebase/auth-compat",eh="@firebase/database",th="@firebase/database-compat",nh="@firebase/functions",sh="@firebase/functions-compat",rh="@firebase/installations",ih="@firebase/installations-compat",oh="@firebase/messaging",ah="@firebase/messaging-compat",ch="@firebase/performance",lh="@firebase/performance-compat",uh="@firebase/remote-config",fh="@firebase/remote-config-compat",dh="@firebase/storage",hh="@firebase/storage-compat",ph="@firebase/firestore",gh="@firebase/firestore-compat",mh="firebase",_h="9.17.1";/**
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
 */const zr="[DEFAULT]",bh={[Wr]:"fire-core",[qd]:"fire-core-compat",[Jd]:"fire-analytics",[Gd]:"fire-analytics-compat",[Xd]:"fire-app-check",[Yd]:"fire-app-check-compat",[Qd]:"fire-auth",[Zd]:"fire-auth-compat",[eh]:"fire-rtdb",[th]:"fire-rtdb-compat",[nh]:"fire-fn",[sh]:"fire-fn-compat",[rh]:"fire-iid",[ih]:"fire-iid-compat",[oh]:"fire-fcm",[ah]:"fire-fcm-compat",[ch]:"fire-perf",[lh]:"fire-perf-compat",[uh]:"fire-rc",[fh]:"fire-rc-compat",[dh]:"fire-gcs",[hh]:"fire-gcs-compat",[ph]:"fire-fst",[gh]:"fire-fst-compat","fire-js":"fire-js",[mh]:"fire-js-all"};/**
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
 */const $s=new Map,Kr=new Map;function yh(t,e){try{t.container.addComponent(e)}catch(n){Qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Qn(t){const e=t.name;if(Kr.has(e))return Qt.debug(`There were multiple attempts to register component ${e}.`),!1;Kr.set(e,t);for(const n of $s.values())yh(n,t);return!0}function xc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const vh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},At=new os("app","Firebase",vh);/**
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
 */class wh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const sr=_h;function Tc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:zr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw At.create("bad-app-name",{appName:String(r)});if(n||(n=fd()),!n)throw At.create("no-options");const i=$s.get(r);if(i){if(Us(n,i.options)&&Us(s,i.config))return i;throw At.create("duplicate-app",{appName:r})}const o=new kd(r);for(const c of Kr.values())o.addComponent(c);const a=new wh(n,s,o);return $s.set(r,a),a}function Eh(t=zr){const e=$s.get(t);if(!e&&t===zr)return Tc();if(!e)throw At.create("no-app",{appName:t});return e}function dn(t,e,n){var s;let r=(s=bh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qt.warn(a.join(" "));return}Qn(new yn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const Ih="firebase-heartbeat-database",xh=1,Zn="firebase-heartbeat-store";let yr=null;function Sc(){return yr||(yr=Hd(Ih,xh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Zn)}}}).catch(t=>{throw At.create("idb-open",{originalErrorMessage:t.message})})),yr}async function Th(t){try{return(await Sc()).transaction(Zn).objectStore(Zn).get(Cc(t))}catch(e){if(e instanceof Dt)Qt.warn(e.message);else{const n=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qt.warn(n.message)}}}async function So(t,e){try{const s=(await Sc()).transaction(Zn,"readwrite");return await s.objectStore(Zn).put(e,Cc(t)),s.done}catch(n){if(n instanceof Dt)Qt.warn(n.message);else{const s=At.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qt.warn(s.message)}}}function Cc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Sh=1024,Ch=30*24*60*60*1e3;class Ph{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Co();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=Ch}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Co(),{heartbeatsToSend:n,unsentEntries:s}=kh(this._heartbeatsCache.heartbeats),r=bc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Co(){return new Date().toISOString().substring(0,10)}function kh(t,e=Sh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Po(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Po(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _d()?bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Th(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return So(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Po(t){return bc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ah(t){Qn(new yn("platform-logger",e=>new zd(e),"PRIVATE")),Qn(new yn("heartbeat",e=>new Ph(e),"PRIVATE")),dn(Wr,To,t),dn(Wr,To,"esm2017"),dn("fire-js","")}Ah("");function wi(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Pc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oh=Pc,kc=new os("auth","Firebase",Pc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ko=new wc("@firebase/auth");function Ps(t,...e){ko.logLevel<=ae.ERROR&&ko.error(`Auth (${sr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,...e){throw Ei(t,...e)}function st(t,...e){return Ei(t,...e)}function Rc(t,e,n){const s=Object.assign(Object.assign({},Oh()),{[e]:n});return new os("auth","Firebase",s).create(e,{appName:t.name})}function Mh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ve(t,"argument-error"),Rc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ei(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return kc.create(t,...e)}function j(t,e,...n){if(!t)throw Ei(e,...n)}function lt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ps(e),new Error(e)}function ht(t,e){t||lt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Map;function ut(t){ht(t instanceof Function,"Expected a class definition");let e=Ro.get(t);return e?(ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ro.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(t,e){const n=xc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Us(i,e??{}))return r;Ve(r,"already-initialized")}return n.initialize({options:e})}function Dh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Lh(){return Ao()==="http:"||Ao()==="https:"}function Ao(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class cs{constructor(e,n){this.shortDelay=e,this.longDelay=n,ht(n>e,"Short delay should be less than long delay!"),this.isMobile=hd()||gd()}get(){return Uh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(t,e){ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Bh=new cs(3e4,6e4);function ls(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function us(t,e,n,s,r={}){return Oc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=as(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ac.fetch()(Mc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Oc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Fh),e);try{const r=new jh(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Es(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Es(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Es(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Es(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Rc(t,f,l);Ve(t,f)}}catch(r){if(r instanceof Dt)throw r;Ve(t,"network-request-failed")}}async function fs(t,e,n,s,r={}){const i=await us(t,e,n,s,r);return"mfaPendingCredential"in i&&Ve(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Mc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Ii(t.config,r):`${t.config.apiScheme}://${r}`}class jh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(st(this.auth,"network-request-failed")),Bh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Es(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=st(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(t,e){return us(t,"POST","/v1/accounts:delete",e)}async function Vh(t,e){return us(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Wh(t,e=!1){const n=Lt(t),s=await n.getIdToken(e),r=xi(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:jn(vr(r.auth_time)),issuedAtTime:jn(vr(r.iat)),expirationTime:jn(vr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vr(t){return Number(t)*1e3}function xi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ps("JWT malformed, contained fewer than 3 sections"),null;try{const r=yc(n);return r?JSON.parse(r):(Ps("Failed to decode base64 JWT payload"),null)}catch(r){return Ps("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function zh(t){const e=xi(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dt&&Kh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Kh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=jn(this.lastLoginAt),this.creationTime=jn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fs(t){var e;const n=t.auth,s=await t.getIdToken(),r=await es(t,Vh(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Yh(i.providerUserInfo):[],a=Jh(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Nc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Gh(t){const e=Lt(t);await Fs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Jh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Yh(t){return t.map(e=>{var{providerId:n}=e,s=wi(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e){const n=await Oc(t,{},async()=>{const s=as({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=Mc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ac.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Xh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ts;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(j(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Yt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Nc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Wh(this,e)}reload(){return Gh(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Yt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Fs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await es(this,Hh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,R=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:W,isAnonymous:K,providerData:re,stsTokenManager:z}=n;j(O&&z,e,"internal-error");const A=ts.fromJSON(this.name,z);j(typeof O=="string",e,"internal-error"),mt(h,e.name),mt(p,e.name),j(typeof W=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),mt(b,e.name),mt(x,e.name),mt(S,e.name),mt(U,e.name),mt(R,e.name),mt(F,e.name);const J=new Yt({uid:O,auth:e,email:p,emailVerified:W,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:b,tenantId:S,stsTokenManager:A,createdAt:R,lastLoginAt:F});return re&&Array.isArray(re)&&(J.providerData=re.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new ts;r.updateFromServerResponse(n);const i=new Yt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await Fs(i),i}}/**
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
 */class Dc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dc.type="NONE";const Oo=Dc;/**
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
 */function ks(t,e,n){return`firebase:${t}:${e}:${n}`}class hn{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=ks(this.userKey,r.apiKey,i),this.fullPersistenceKey=ks("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Yt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new hn(ut(Oo),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||ut(Oo);const o=ks(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Yt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new hn(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new hn(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($c(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bc(e))return"Blackberry";if(jc(e))return"Webos";if(Ti(e))return"Safari";if((e.includes("chrome/")||Uc(e))&&!e.includes("edge/"))return"Chrome";if(Fc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Lc(t=Pe()){return/firefox\//i.test(t)}function Ti(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uc(t=Pe()){return/crios\//i.test(t)}function $c(t=Pe()){return/iemobile/i.test(t)}function Fc(t=Pe()){return/android/i.test(t)}function Bc(t=Pe()){return/blackberry/i.test(t)}function jc(t=Pe()){return/webos/i.test(t)}function rr(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Qh(t=Pe()){var e;return rr(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Zh(){return md()&&document.documentMode===10}function Hc(t=Pe()){return rr(t)||Fc(t)||jc(t)||Bc(t)||/windows phone/i.test(t)||$c(t)}function ep(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(t,e=[]){let n;switch(t){case"Browser":n=Mo(Pe());break;case"Worker":n=`${Mo(Pe())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${s}`}/**
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
 */class tp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new No(this),this.idTokenSubscription=new No(this),this.beforeStateQueue=new tp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await hn.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fs(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$h()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Lt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new os("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await hn.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return j(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Pn(t){return Lt(t)}class No{constructor(e){this.auth=e,this.observer=null,this.addObserver=Id(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sp(t,e,n){const s=Pn(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Wc(e),{host:o,port:a}=rp(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||ip()}function Wc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rp(t){const e=Wc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:Do(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:Do(o)}}}function Do(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ip(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,n){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}async function op(t,e){return us(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ap(t,e){return fs(t,"POST","/v1/accounts:signInWithPassword",ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cp(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",ls(t,e))}async function lp(t,e){return fs(t,"POST","/v1/accounts:signInWithEmailLink",ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Si{constructor(e,n,s,r=null){super("password",s),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new ns(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new ns(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ap(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return cp(e,{email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return op(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return lp(e,{idToken:n,email:this._email,oobCode:this._password});default:Ve(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(t,e){return fs(t,"POST","/v1/accounts:signInWithIdp",ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="http://localhost";class Zt extends Si{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wi(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Zt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,pn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pn(e,n)}buildRequest(){const e={requestUri:up,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=as(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dp(t){const e=Nn(Dn(t)).link,n=e?Nn(Dn(e)).deep_link_id:null,s=Nn(Dn(t)).deep_link_id;return(s?Nn(Dn(s)).link:null)||s||n||e||t}class Ci{constructor(e){var n,s,r,i,o,a;const c=Nn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(s=c.oobCode)!==null&&s!==void 0?s:null,h=fp((r=c.mode)!==null&&r!==void 0?r:null);j(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=dp(e);try{return new Ci(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.providerId=kn.PROVIDER_ID}static credential(e,n){return ns._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Ci.parseLink(n);return j(s,"argument-error"),ns._fromEmailAndCode(e,s.code,s.tenantId)}}kn.PROVIDER_ID="password";kn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Et extends ds{constructor(){super("facebook.com")}static credential(e){return Zt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends ds{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zt._fromParams({providerId:Ae.PROVIDER_ID,signInMethod:Ae.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ae.credentialFromTaggedObject(e)}static credentialFromError(e){return Ae.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ae.credential(n,s)}catch{return null}}}Ae.GOOGLE_SIGN_IN_METHOD="google.com";Ae.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ds{constructor(){super("github.com")}static credential(e){return Zt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt extends ds{constructor(){super("twitter.com")}static credential(e,n){return Zt._fromParams({providerId:xt.PROVIDER_ID,signInMethod:xt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xt.credentialFromTaggedObject(e)}static credentialFromError(e){return xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return xt.credential(n,s)}catch{return null}}}xt.TWITTER_SIGN_IN_METHOD="twitter.com";xt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hp(t,e){return fs(t,"POST","/v1/accounts:signUp",ls(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Yt._fromIdTokenResponse(e,s,r),o=Lo(s);return new en({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Lo(s);return new en({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Lo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs extends Dt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Bs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Bs(e,n,s,r)}}function zc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bs._fromErrorAndOperation(t,i,e,s):i})}async function pp(t,e,n=!1){const s=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return en._forOperation(t,"link",s)}/**
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
 */async function gp(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await es(t,zc(s,r,e,t),n);j(i.idToken,s,"internal-error");const o=xi(i.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),en._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ve(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kc(t,e,n=!1){const s="signIn",r=await zc(t,s,e),i=await en._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}async function mp(t,e){return Kc(Pn(t),e)}async function _p(t,e,n){const s=Pn(t),r=await hp(s,{returnSecureToken:!0,email:e,password:n}),i=await en._fromIdTokenResponse(s,"signIn",r);return await s._updateCurrentUser(i.user),i}function bp(t,e,n){return mp(Lt(t),kn.credential(e,n))}function yp(t,e,n,s){return Lt(t).onIdTokenChanged(e,n,s)}function vp(t,e,n){return Lt(t).beforeAuthStateChanged(e,n)}function wp(t,e,n,s){return Lt(t).onAuthStateChanged(e,n,s)}const js="__sak";/**
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
 */class qc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(js,"1"),this.storage.removeItem(js),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){const t=Pe();return Ti(t)||rr(t)}const Ip=1e3,xp=10;class Gc extends qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ep()&&ep(),this.fallbackToPolling=Hc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Zh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,xp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Ip)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gc.type="LOCAL";const Tp=Gc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jc.type="SESSION";const Yc=Jc;/**
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
 */function Sp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ir{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new ir(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Sp(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ir.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ki(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Cp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=ki("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function Pp(t){rt().location.href=t}/**
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
 */function Xc(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function kp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Rp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ap(){return Xc()?self:null}/**
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
 */const Qc="firebaseLocalStorageDb",Op=1,Hs="firebaseLocalStorage",Zc="fbase_key";class hs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function or(t,e){return t.transaction([Hs],e?"readwrite":"readonly").objectStore(Hs)}function Mp(){const t=indexedDB.deleteDatabase(Qc);return new hs(t).toPromise()}function Gr(){const t=indexedDB.open(Qc,Op);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Hs,{keyPath:Zc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Hs)?e(s):(s.close(),await Mp(),e(await Gr()))})})}async function Uo(t,e,n){const s=or(t,!0).put({[Zc]:e,value:n});return new hs(s).toPromise()}async function Np(t,e){const n=or(t,!1).get(e),s=await new hs(n).toPromise();return s===void 0?null:s.value}function $o(t,e){const n=or(t,!0).delete(e);return new hs(n).toPromise()}const Dp=800,Lp=3;class el{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>Lp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ir._getInstance(Ap()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kp(),!this.activeServiceWorker)return;this.sender=new Cp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Rp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gr();return await Uo(e,js,"1"),await $o(e,js),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>Np(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$o(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=or(r,!1).getAll();return new hs(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Dp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}el.type="LOCAL";const Up=el;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Fp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=st("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",$p().appendChild(s)})}function Bp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new cs(3e4,6e4);/**
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
 */function tl(t,e){return e?ut(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ri extends Si{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jp(t){return Kc(t.auth,new Ri(t),t.bypassAuthState)}function Hp(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),gp(n,new Ri(t),t.bypassAuthState)}async function Vp(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),pp(n,new Ri(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jp;case"linkViaPopup":case"linkViaRedirect":return Vp;case"reauthViaPopup":case"reauthViaRedirect":return Hp;default:Ve(this.auth,"internal-error")}}resolve(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wp=new cs(2e3,1e4);async function sl(t,e,n){const s=Pn(t);Mh(t,e,Pi);const r=tl(s,n);return new qt(s,"signInViaPopup",e,r).executeNotNull()}class qt extends nl{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,qt.currentPopupAction&&qt.currentPopupAction.cancel(),qt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){ht(this.filter.length===1,"Popup operations only handle one event");const e=ki();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(st(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(st(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(st(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Wp.get())};e()}}qt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zp="pendingRedirect",Rs=new Map;class Kp extends nl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Rs.get(this.auth._key());if(!e){try{const s=await qp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Rs.set(this.auth._key(),e)}return this.bypassAuthState||Rs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qp(t,e){const n=Yp(e),s=Jp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Gp(t,e){Rs.set(t._key(),e)}function Jp(t){return ut(t._redirectPersistence)}function Yp(t){return ks(zp,t.config.apiKey,t.name)}async function Xp(t,e,n=!1){const s=Pn(t),r=tl(s,e),o=await new Kp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=10*60*1e3;class Zp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eg(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!rl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(st(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Qp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Fo(e))}saveEventToCache(e){this.cachedEventUids.add(Fo(e)),this.lastProcessedEventTime=Date.now()}}function Fo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eg(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tg(t,e={}){return us(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sg=/^https?/;async function rg(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tg(t);for(const n of e)try{if(ig(n))return}catch{}Ve(t,"unauthorized-domain")}function ig(t){const e=qr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!sg.test(n))return!1;if(ng.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const og=new cs(3e4,6e4);function Bo(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ag(t){return new Promise((e,n)=>{var s,r,i;function o(){Bo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bo(),n(st(t,"network-request-failed"))},timeout:og.get()})}if(!((r=(s=rt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=rt().gapi)===null||i===void 0)&&i.load)o();else{const a=Bp("iframefcb");return rt()[a]=()=>{gapi.load?o():n(st(t,"network-request-failed"))},Fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw As=null,e})}let As=null;function cg(t){return As=As||ag(t),As}/**
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
 */const lg=new cs(5e3,15e3),ug="__/auth/iframe",fg="emulator/auth/iframe",dg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pg(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ii(e,fg):`https://${t.config.authDomain}/${ug}`,s={apiKey:e.apiKey,appName:t.name,v:sr},r=hg.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${as(s).slice(1)}`}async function gg(t){const e=await cg(t),n=rt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:pg(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dg,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=st(t,"network-request-failed"),a=rt().setTimeout(()=>{i(o)},lg.get());function c(){rt().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const mg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_g=500,bg=600,yg="_blank",vg="http://localhost";class jo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wg(t,e,n,s=_g,r=bg){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},mg),{width:s.toString(),height:r.toString(),top:i,left:o}),l=Pe().toLowerCase();n&&(a=Uc(l)?yg:n),Lc(l)&&(e=e||vg,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,x])=>`${p}${b}=${x},`,"");if(Qh(l)&&a!=="_self")return Eg(e||"",a),new jo(null);const h=window.open(e||"",a,f);j(h,t,"popup-blocked");try{h.focus()}catch{}return new jo(h)}function Eg(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Ig="__/auth/handler",xg="emulator/auth/handler";function Ho(t,e,n,s,r,i){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:sr,eventId:r};if(e instanceof Pi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ds){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Tg(t)}?${as(a).slice(1)}`}function Tg({config:t}){return t.emulator?Ii(t,xg):`https://${t.authDomain}/${Ig}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="webStorageSupport";class Sg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yc,this._completeRedirectFn=Xp,this._overrideRedirectResult=Gp}async _openPopup(e,n,s,r){var i;ht((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ho(e,n,s,qr(),r);return wg(e,o,ki())}async _openRedirect(e,n,s,r){return await this._originValidation(e),Pp(Ho(e,n,s,qr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ht(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await gg(e),s=new Zp(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wr,{type:wr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[wr];o!==void 0&&n(!!o),Ve(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=rg(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hc()||Ti()||rr()}}const Cg=Sg;var Vo="@firebase/auth",Wo="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Rg(t){Qn(new yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{j(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),j(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vc(t)},f=new np(a,c,l);return Dh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Qn(new yn("auth-internal",e=>{const n=Pn(e.getProvider("auth").getImmediate());return(s=>new Pg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dn(Vo,Wo,kg(t)),dn(Vo,Wo,"esm2017")}/**
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
 */const Ag=5*60,Og=vc("authIdTokenMaxAge")||Ag;let zo=null;const Mg=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>Og)return;const r=n==null?void 0:n.token;zo!==r&&(zo=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function vn(t=Eh()){const e=xc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Nh(t,{popupRedirectResolver:Cg,persistence:[Up,Tp,Yc]}),s=vc("authTokenSyncURL");if(s){const i=Mg(s);vp(n,i,()=>i(n.currentUser)),yp(n,o=>i(o))}const r=ud("auth");return r&&sp(n,`http://${r}`),n}Rg("Browser");const be=sd("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",loggedIn:!1,uid:"",lang:"ru",langProp:{}}),actions:{async process(){let t=await fetch("/api/language",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({1:this.lang})});this.langProp=await t.json(),console.log("repeat")},checkStatus(){const t=vn();wp(t,e=>{e&&(console.log("works"),this.loggedIn=!0,this.uid=e.uid)})}}});var Ng="firebase",Dg="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn(Ng,Dg,"app");const Ai="/assets/Telegram-c178456d.svg",Oi="/assets/WhatsApp-64705ce5.svg",Mi="/assets/Instagram-d32ffc78.svg",Xe=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},Lg={props:{buttonName:String},data:()=>({contact:!1,store:be()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},Ug={class:"grid overflow-scroll [&_*]:font-roboto"},$g={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1"},Fg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Bg=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),jg={class:"grid grid-cols-2"},Hg={class:"text-3xl mb-[5px] font-semibold font-roboto"},Vg={class:"text-2xl font-roboto"},Wg={class:"text-2xl mb-[20px] font-roboto"},zg={class:"text-3xl mb-[5px] font-roboto font-semibold"},Kg=m("p",{class:"text-2xl mb-[20px] font-roboto"},"+996779454233",-1),qg={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},Gg={class:"text-3xl font-roboto font-semibold"},Jg=_i('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+Ai+'" alt=""></a><p class="text-2xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+Oi+'" alt=""></a><p class="text-2xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+Mi+'" alt=""></a><p class="text-2xl font-roboto">crafthoney.kg</p></div>',3),Yg=m("div",null,[m("p",{class:"text-3xl mb-[5px] font-roboto font-semibold"},"E-mail:"),m("p",{class:"text-2xl font-roboto"},"crafthoneykg@gmail.com")],-1);function Xg(t,e,n,s,r,i){return he(),Ie("div",Ug,[m("div",$g,[m("span",Fg,B(t.store.langProp.contacts),1),Bg,m("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},B(t.store.langProp.feedback),1)]),m("div",jg,[m("div",null,[m("p",Hg,B(t.store.langProp.address),1),m("p",Vg,"770033, "+B(t.store.langProp.kyrgyzstan),1),m("p",Wg,B(t.store.langProp.street),1)]),m("div",null,[m("p",zg,B(t.store.langProp.telephone),1),Kg]),m("div",qg,[m("p",Gg,B(t.store.langProp.socialnetworks),1),Jg]),Yg])])}const il=Xe(Lg,[["render",Xg]]),Qg="/assets/Register_1-5c661edd.svg",ol="/assets/Enter_1-7f28cdb9.svg",Zg={data(){return{store:be(),lang:be().lang}}},em={class:""},tm={class:"flex flex-col justify-center [&>*]:px-[10px]"},nm=m("strong",null,"X",-1),sm=[nm],rm={key:0,class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},im=m("img",{class:"w-[24px] h-24[px] mr-[10px]",src:Qg,alt:""},null,-1),om=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:ol,alt:""},null,-1),am={key:1,class:"flex justify-center border-b-[1px] border-[#BCB9B9]"},cm=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:ol,alt:""},null,-1),lm={class:"my-[20px] px-[10px]"},um=_i('<div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a></div></div>',1),fm={class:"my-[10px]"},dm={class:"my-[10px]"},hm=m("a",{href:"https://www.instagram.com/crafthoney.kg",target:"_blank"},[m("img",{src:Mi,alt:""})],-1);function pm(t,e,n,s,r,i){const o=dt("router-link");return he(),Ie("div",em,[m("div",tm,[m("button",{onClick:e[0]||(e[0]=a=>t.$emit("changeBurger")),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right"},sm),Z(o,{to:`/${r.lang}/Products`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Te(()=>[me(B(r.store.langProp.catalogue),1)]),_:1},8,["to"]),Z(o,{to:`/${r.lang}/About`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Te(()=>[me(B(r.store.langProp.aboutus),1)]),_:1},8,["to"]),Z(o,{to:`/${r.lang}/Blog`,class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Te(()=>[me(B(r.store.langProp.blog),1)]),_:1},8,["to"]),m("button",{onClick:e[1]||(e[1]=a=>(r.store.modal=!0,t.burgerMenu=!1,r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},B(r.store.langProp.contacts),1)]),r.store.loggedIn?Pt("",!0):(he(),Ie("div",rm,[m("button",{onClick:e[2]||(e[2]=a=>(r.store.bg="bg-bee",r.store.modal=!0,t.burgerMenu=!1,r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[im,me(B(r.store.langProp.registration),1)]),m("button",{onClick:e[3]||(e[3]=a=>(r.store.modal=!0,t.burgerMenu=!1,r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[om,me(B(r.store.langProp.login),1)])])),r.store.loggedIn&&!t.$route.path.includes("personalArea")?(he(),Ie("div",am,[Z(o,{to:`personalArea/${r.store.uid}`,class:"border-[2px] border-solid border-black rounded-[8px] my-4 w-[218px] h-[47px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},{default:Te(()=>[cm,me(B(r.store.langProp.profile),1)]),_:1},8,["to"])])):Pt("",!0),m("div",lm,[um,m("p",fm,B(r.store.langProp.address+" 770033 "+r.store.langProp.kyrgyzstan+","),1),m("p",dm,B(r.store.langProp.street),1),hm])])}const gm=Xe(Zg,[["render",pm]]),mm="/assets/drawing-9a7198cf.svg",_m="/assets/CraftHoney-0d412893.svg",bm="/assets/menu-694c5a76.svg",al="/assets/account_circle-229cba33.svg",ym="/assets/shopping_cart-809c2612.svg",vm={beforeRouteEnter(t,e){},data(){return{burgerMenu:!1,store:be(),lang:be().lang}},methods:{changeBurger(){this.burgerMenu=!1}},components:{Contacts:il,Burger:gm},mounted(){console.log(this.$route)}},wm={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},Em={class:"grid grid-flow-col gap-[40px] items-center"},Im=m("img",{class:"self-center w-[60px] inline",src:mm},null,-1),xm=m("img",{class:"ml-[10px] self-center w-[120px] inline",src:_m},null,-1),Tm={key:0,class:"text-xl [&>a]:mr-[30px] max-[1200px]:hidden"},Sm={class:"grid min-[1201px]:hidden"},Cm={class:"grid grid-flow-col gap-[40px] items-center max-[1200px]:hidden"},Pm={key:0,class:"flex items-center"},km=m("img",{class:"mr-[10px] w-[24px]",src:al},null,-1),Rm={key:1,class:"flex items-center"},Am=m("img",{class:"mr-[10px] w-[24px]",src:al},null,-1),Om={class:""},Mm=m("img",{class:"w-[22px] max-[800px]:hidden",src:ym,alt:""},null,-1),Nm={class:"text-xl"},Dm={class:"ml-[8px] hover:cursor-pointer px-1",name:"lang",id:""},Lm={selected:"",disabled:"",hidden:""},Um=_i('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+Oi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+Ai+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Mi+'" alt=""></a></div>',1);function $m(t,e,n,s,r,i){const o=dt("router-link"),a=dt("Burger");return he(),Ie("header",wm,[m("div",Em,[m("div",null,[Z(o,{class:"flex max-w-fit",to:`/${r.lang}/home`},{default:Te(()=>[Im,xm]),_:1},8,["to"])]),t.$route.path!=`/${r.lang}/home`?(he(),Ie("div",Tm,[Z(o,{to:`/${r.lang}/Products`},{default:Te(()=>{var c,l;return[me(B((l=(c=r.store)==null?void 0:c.langProp)==null?void 0:l.catalogue),1)]}),_:1},8,["to"]),Z(o,{to:`/${r.lang}/About`},{default:Te(()=>[me(B(r.store.langProp.about),1)]),_:1},8,["to"]),Z(o,{to:`/${r.lang}/Blog`},{default:Te(()=>[me(B(r.store.langProp.blog),1)]),_:1},8,["to"]),m("button",{onClick:e[0]||(e[0]=c=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},B(r.store.langProp.contacts),1)])):Pt("",!0)]),m("div",Sm,[m("img",{onClick:e[1]||(e[1]=c=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:bm})]),m("div",Cm,[r.store.loggedIn?Pt("",!0):(he(),Ie("div",Pm,[km,m("button",{class:"text-xl text-center",onClick:e[2]||(e[2]=c=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},B(r.store.langProp.login),1)])),r.store.loggedIn&&!t.$route.path.includes("personalArea")?(he(),Ie("div",Rm,[Am,Z(o,{class:"text-xl text-center",to:`personalArea/${r.store.uid}`},{default:Te(()=>[me(B(r.store.langProp.profile),1)]),_:1},8,["to"])])):Pt("",!0),m("div",Om,[Z(o,{to:"Checkout"},{default:Te(()=>[Mm]),_:1})]),m("div",null,[m("p",Nm,[me(B(r.store.langProp.lang)+": ",1),m("select",Dm,[m("option",Lm,B(r.store.lang.toUpperCase()),1),m("option",{onClick:e[3]||(e[3]=c=>(r.store.lang="ru",t.$router.push(`/ru/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"RU"),m("option",{onClick:e[4]||(e[4]=c=>(r.store.lang="en",t.$router.push(`/en/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"EN"),m("option",{onClick:e[5]||(e[5]=c=>(r.store.lang="kg",t.$router.push(`/kg/${t.$route.path.slice(4,t.$route.path.length)}`))),value:""},"KG")])])]),Um]),m("div",{class:rs(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[Z(a,{onChangeBurger:i.changeBurger},null,8,["onChangeBurger"])],2)])}const Fm=Xe(vm,[["render",$m]]),Bm={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",store:be()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail=""}}},jm={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},Hm={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},Vm=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Wm={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},zm={class:"text-3xl justify-self-center font-roboto"},Km=["placeholder"],qm={class:"grid grid-cols-2 gap-[20px]"},Gm=["placeholder"],Jm=m("textarea",{class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,-1),Ym={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},Xm={class:"bg-[#EAAD02] text-white rounded-[5px]"};function Qm(t,e,n,s,r,i){return he(),Ie("div",jm,[m("div",Hm,[m("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},B(t.store.langProp.contacts),1),Vm,m("span",Wm,B(t.store.langProp.feedback),1)]),m("h2",zm,B(t.store.langProp.contactus),1),xe(m("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.inputValueName=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:t.store.langProp.yourname},null,8,Km),[[kt,t.inputValueName]]),m("div",qm,[xe(m("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.inputValueMail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[kt,t.inputValueMail]]),xe(m("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.inputValuePhone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:t.store.langProp.telephone_1},null,8,Gm),[[kt,t.inputValuePhone]])]),Jm,m("div",Ym,[m("button",Xm,B(t.store.langProp.send),1),m("button",{onClick:e[4]||(e[4]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},B(t.store.langProp.reset),1)])])}const cl=Xe(Bm,[["render",Qm]]),Zm="/assets/call-65c88a38.svg",e_={data(){return{store:be()}},components:{Feedback:cl}},t_={class:"bg-white flex justify-center my-[1vh] w-full"},n_={class:"self-center"},s_=m("img",{class:"inline ml-2",src:Zm},null,-1);function r_(t,e,n,s,r,i){return he(),Ie("footer",t_,[m("div",n_,[m("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),s_])])}const i_=Xe(e_,[["render",r_]]),o_="/assets/Vector-9ca58fbf.svg",Ni="/assets/visibility_on-0c36d6bb.svg",Di="/assets/visibility_off-e6686e60.svg",a_={props:{buttonName:String},data(){return{email:"",password:"",store:be(),showPassword:!1}},methods:{loginGoogle(){const t=vn(),e=new Ae;sl(t,e).then(n=>{Ae.credentialFromResult(n).accessToken;const r=n.user;this.store.modal=!1,this.$router.push(`/PersonalArea/${r.uid}`)}).catch(n=>{n.code,n.message,n.customData.email,Ae.credentialFromError(n)})},async login(){const t=vn();bp(t,this.email,this.password).then(e=>{const n=e.user;console.log(n),this.store.modal=!1,this.$router.push(`/PersonalArea/${n.uid}`)}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword}}},c_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},l_={class:"grid auto-rows-min gap-[20px]"},u_={class:"text-[30px] flex justify-center"},f_={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},d_=m("span",{class:"mx-2"},"|",-1),h_=m("img",{class:"mr-[8px]",src:o_},null,-1),p_=["placeholder"],g_={class:"relative"},m_=["type","placeholder"],__={src:Ni,alt:""},b_={src:Di,alt:""},y_=["disabled"],v_={class:"text-center"};function w_(t,e,n,s,r,i){const o=dt("router-link");return he(),Ie("div",c_,[m("div",l_,[m("div",u_,[m("span",f_,B(r.store.langProp.login),1),d_,m("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},B(r.store.langProp.registration),1)]),m("button",{onClick:e[1]||(e[1]=(...a)=>i.loginGoogle&&i.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[h_,me(B(r.store.langProp.loginwithgoogle),1)]),xe(m("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp.enteremail},null,8,p_),[[kt,r.email]]),m("div",g_,[xe(m("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.enterpassword},null,8,m_),[[Fr,r.password]]),m("button",{onClick:e[4]||(e[4]=(...a)=>i.eyechange&&i.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[xe(m("img",__,null,512),[[zt,r.showPassword]]),xe(m("img",b_,null,512),[[zt,!r.showPassword]])])]),Z(o,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Te(()=>[me(B(r.store.langProp.forgotyourpassword),1)]),_:1}),m("button",{onClick:e[5]||(e[5]=(...a)=>i.login&&i.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},B(r.store.langProp.login),9,y_),m("p",v_,[me(B(r.store.langProp.donthaveaccount),1),m("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},B(r.store.langProp.createaccount),1)])])])}const E_=Xe(a_,[["render",w_]]),I_="/assets/Vector-9ca58fbf.svg",x_={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:be()}},methods:{loginGoogle(){const t=vn(),e=new Ae;sl(t,e).then(n=>{Ae.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Ae.credentialFromError(n)})},async register(){const t=vn();_p(t,this.email,this.password).then(e=>{e.user,this.store.comp="Login"}).catch(e=>{e.code,e.message})},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},T_={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},S_={class:"grid auto-rows-min gap-[20px]"},C_={class:"text-[30px] h-[45px] flex justify-center"},P_=m("span",{class:"mx-2"},"|",-1),k_={class:"bg-gray-300 rounded-[10px] px-2 text-black"},R_=m("img",{class:"mr-[8px]",src:I_},null,-1),A_=["placeholder"],O_=["placeholder"],M_={class:"relative"},N_=["type","placeholder"],D_={src:Ni,alt:""},L_={src:Di,alt:""},U_={class:"relative"},$_=["type","placeholder"],F_={src:Ni,alt:""},B_={src:Di,alt:""},j_={key:0,class:"text-red-500 font-roboto leading-[2px]"},H_=["disabled"],V_={class:"text-center"};function W_(t,e,n,s,r,i){return he(),Ie("div",T_,[m("div",S_,[m("div",C_,[m("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},B(r.store.langProp.login),1),P_,m("span",k_,B(r.store.langProp.registration),1)]),m("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[R_,me(" "+B(r.store.langProp.loginwithgoogle),1)]),xe(m("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp.username},null,8,A_),[[kt,r.name]]),xe(m("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp.enteremail},null,8,O_),[[kt,r.email]]),m("div",M_,[xe(m("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.password},null,40,N_),[[Fr,r.password]]),m("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[xe(m("img",D_,null,512),[[zt,r.showPassword]]),xe(m("img",L_,null,512),[[zt,!r.showPassword]])])]),m("div",U_,[xe(m("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp.confirmthepassword},null,8,$_),[[Fr,r.password2]]),m("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[xe(m("img",F_,null,512),[[zt,r.showPassword]]),xe(m("img",B_,null,512),[[zt,!r.showPassword]])])]),r.password2!=r.password?(he(),Ie("div",j_,B(r.store.langProp.passwordmismatch),1)):Pt("",!0),xe(m("div",{class:"text-red-500 font-roboto leading-[2px]"},B(r.store.langProp.minimumnumberofsymbols)+" - "+B(r.MinLength),513),[[zt,r.passwordMinLength&&r.password.length<=5]]),m("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},B(r.store.langProp.registration),9,H_),m("p",V_,[me(B(r.store.langProp.doyouhaveaccount),1),m("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},B(r.store.langProp.login),1)])])])}const z_=Xe(x_,[["render",W_]]),K_={data(){return{store:be()}},components:{Contacts:il,Feedback:cl,Login:E_,Register:z_}},q_={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},G_={class:"p-2 text-right"},J_=m("strong",null,"X",-1),Y_=[J_];function X_(t,e,n,s,r,i){return r.store.modal?(he(),Ie("div",q_,[r.store.modal?(he(),Ie("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):Pt("",!0),m("div",{class:rs([r.store.bg,"max-h-screen overflow-scroll bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[m("div",G_,[m("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},Y_)]),(he(),Zs(Vu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):Pt("",!0)}const Q_=Xe(K_,[["render",X_]]),Z_={components:{Header:Fm,Footer:i_,LayoutModal:Q_}},eb={class:"h-screen min-h-[700px] overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]"};function tb(t,e,n,s,r,i){const o=dt("LayoutModal"),a=dt("Header");return he(),Ie(Ue,null,[Z(o),m("div",eb,[Z(a),Wu(t.$slots,"default")])],64)}const nb=Xe(Z_,[["render",tb]]),sb={};function rb(t,e){const n=dt("RouterView");return he(),Zs(n)}const ib=Xe(sb,[["render",rb]]),ob="modulepreload",ab=function(t){return"/"+t},Ko={},rn=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=ab(i),i in Ko)return;Ko[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":ob,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const an=typeof window<"u";function cb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function Er(t,e){const n={};for(const s in e){const r=e[s];n[s]=Ye(r)?r.map(t):t(r)}return n}const Hn=()=>{},Ye=Array.isArray,lb=/\/$/,ub=t=>t.replace(lb,"");function Ir(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=pb(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function fb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function qo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function db(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&wn(e.matched[s],n.matched[r])&&ll(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function wn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ll(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!hb(t[n],e[n]))return!1;return!0}function hb(t,e){return Ye(t)?Go(t,e):Ye(e)?Go(e,t):t===e}function Go(t,e){return Ye(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var ss;(function(t){t.pop="pop",t.push="push"})(ss||(ss={}));var Vn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vn||(Vn={}));function gb(t){if(!t)if(an){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ub(t)}const mb=/^[^#]+#/;function _b(t,e){return t.replace(mb,"#")+e}function bb(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const ar=()=>({left:window.pageXOffset,top:window.pageYOffset});function yb(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=bb(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Jo(t,e){return(history.state?history.state.position-e:-1)+t}const Jr=new Map;function vb(t,e){Jr.set(t,e)}function wb(t){const e=Jr.get(t);return Jr.delete(t),e}let Eb=()=>location.protocol+"//"+location.host;function ul(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),qo(c,"")}return qo(n,t)+s+r}function Ib(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const b=ul(t,location),x=n.value,S=e.value;let U=0;if(p){if(n.value=b,e.value=p,o&&o===x){o=null;return}U=S?p.position-S.position:0}else s(b);r.forEach(R=>{R(n.value,x,{delta:U,type:ss.pop,direction:U?U>0?Vn.forward:Vn.back:Vn.unknown})})};function c(){o=n.value}function l(p){r.push(p);const b=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return i.push(b),b}function f(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:ar()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Yo(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?ar():null}}function xb(t){const{history:e,location:n}=window,s={value:ul(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Eb()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),r.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function o(c,l){const f=te({},e.state,Yo(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,f,!0),s.value=c}function a(c,l){const f=te({},r.value,e.state,{forward:c,scroll:ar()});i(f.current,f,!0);const h=te({},Yo(s.value,c,null),{position:f.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function Tb(t){t=gb(t);const e=xb(t),n=Ib(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=te({location:"",base:t,go:s,createHref:_b.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Sb(t){return typeof t=="string"||t&&typeof t=="object"}function fl(t){return typeof t=="string"||typeof t=="symbol"}const _t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},dl=Symbol("");var Xo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xo||(Xo={}));function En(t,e){return te(new Error,{type:t,[dl]:!0},e)}function ot(t,e){return t instanceof Error&&dl in t&&(e==null||!!(t.type&e))}const Qo="[^/]+?",Cb={sensitive:!1,strict:!1,start:!0,end:!0},Pb=/[.+*?^${}()[\]/\\]/g;function kb(t,e){const n=te({},Cb,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(Pb,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:S,optional:U,regexp:R}=p;i.push({name:x,repeatable:S,optional:U});const F=R||Qo;if(F!==Qo){b+=10;try{new RegExp(`(${F})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${x}" (${F}): `+W.message)}}let O=S?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(O=U&&l.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),S&&(b+=-20),F===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",x=i[p-1];h[x.name]=b&&x.repeatable?b.split("/"):b}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:x,repeatable:S,optional:U}=b,R=x in l?l[x]:"";if(Ye(R)&&!S)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const F=Ye(R)?R.join("/"):R;if(!F)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);f+=F}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function Rb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Ab(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=Rb(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(Zo(s))return 1;if(Zo(r))return-1}return r.length-s.length}function Zo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ob={type:0,value:""},Mb=/[a-zA-Z0-9_]/;function Nb(t){if(!t)return[[]];if(t==="/")return[[Ob]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:Mb.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function Db(t,e,n){const s=kb(Nb(t.path),n),r=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Lb(t,e){const n=[],s=new Map;e=na({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const b=!p,x=Ub(f);x.aliasOf=p&&p.record;const S=na(e,f),U=[x];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const W of O)U.push(te({},x,{components:p?p.record.components:x.components,path:W,aliasOf:p?p.record:x}))}let R,F;for(const O of U){const{path:W}=O;if(h&&W[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(W&&re+W)}if(R=Db(O,h,S),p?p.alias.push(R):(F=F||R,F!==R&&F.alias.push(R),b&&f.name&&!ta(R)&&o(f.name)),x.children){const K=x.children;for(let re=0;re<K.length;re++)i(K[re],R,p&&p.children[re])}p=p||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return F?()=>{o(F)}:Hn}function o(f){if(fl(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&Ab(f,n[h])>=0&&(f.record.path!==n[h].record.path||!hl(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ta(f)&&s.set(f.record.name,f)}function l(f,h){let p,b={},x,S;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw En(1,{location:f});S=p.record.name,b=te(ea(h.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),f.params&&ea(f.params,p.keys.map(F=>F.name))),x=p.stringify(b)}else if("path"in f)x=f.path,p=n.find(F=>F.re.test(x)),p&&(b=p.parse(x),S=p.record.name);else{if(p=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!p)throw En(1,{location:f,currentLocation:h});S=p.record.name,b=te({},h.params,f.params),x=p.stringify(b)}const U=[];let R=p;for(;R;)U.unshift(R.record),R=R.parent;return{name:S,path:x,params:b,matched:U,meta:Fb(U)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function ea(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ub(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:$b(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function $b(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ta(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Fb(t){return t.reduce((e,n)=>te(e,n.meta),{})}function na(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function hl(t,e){return e.children.some(n=>n===t||hl(t,n))}const pl=/#/g,Bb=/&/g,jb=/\//g,Hb=/=/g,Vb=/\?/g,gl=/\+/g,Wb=/%5B/g,zb=/%5D/g,ml=/%5E/g,Kb=/%60/g,_l=/%7B/g,qb=/%7C/g,bl=/%7D/g,Gb=/%20/g;function Li(t){return encodeURI(""+t).replace(qb,"|").replace(Wb,"[").replace(zb,"]")}function Jb(t){return Li(t).replace(_l,"{").replace(bl,"}").replace(ml,"^")}function Yr(t){return Li(t).replace(gl,"%2B").replace(Gb,"+").replace(pl,"%23").replace(Bb,"%26").replace(Kb,"`").replace(_l,"{").replace(bl,"}").replace(ml,"^")}function Yb(t){return Yr(t).replace(Hb,"%3D")}function Xb(t){return Li(t).replace(pl,"%23").replace(Vb,"%3F")}function Qb(t){return t==null?"":Xb(t).replace(jb,"%2F")}function Vs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Zb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(gl," "),o=i.indexOf("="),a=Vs(o<0?i:i.slice(0,o)),c=o<0?null:Vs(i.slice(o+1));if(a in e){let l=e[a];Ye(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function sa(t){let e="";for(let n in t){const s=t[n];if(n=Yb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ye(s)?s.map(i=>i&&Yr(i)):[s&&Yr(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function ey(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ye(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const ty=Symbol(""),ra=Symbol(""),Ui=Symbol(""),yl=Symbol(""),Xr=Symbol("");function On(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function vt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(En(4,{from:n,to:e})):h instanceof Error?a(h):Sb(h)?a(En(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function xr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(ny(a)){const l=(a.__vccOpts||a)[e];l&&r.push(vt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=cb(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&vt(p,n,s,i,o)()}))}}return r}function ny(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ia(t){const e=nt(Ui),n=nt(yl),s=$e(()=>e.resolve(un(t.to))),r=$e(()=>{const{matched:c}=s.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(wn.bind(null,f));if(p>-1)return p;const b=oa(c[l-2]);return l>1&&oa(f)===b&&h[h.length-1].path!==b?h.findIndex(wn.bind(null,c[l-2])):p}),i=$e(()=>r.value>-1&&oy(n.params,s.value.params)),o=$e(()=>r.value>-1&&r.value===n.matched.length-1&&ll(n.params,s.value.params));function a(c={}){return iy(c)?e[un(t.replace)?"replace":"push"](un(t.to)).catch(Hn):Promise.resolve()}return{route:s,href:$e(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const sy=Va({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ia,setup(t,{slots:e}){const n=Cn(ia(t)),{options:s}=nt(Ui),r=$e(()=>({[aa(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[aa(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:uc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),ry=sy;function iy(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function oy(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Ye(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function oa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const aa=(t,e,n)=>t??e??n,ay=Va({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=nt(Xr),r=$e(()=>t.route||s.value),i=nt(ra,0),o=$e(()=>{let l=un(i);const{matched:f}=r.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=$e(()=>r.value.matched[o.value]);Ts(ra,$e(()=>o.value+1)),Ts(ty,a),Ts(Xr,r);const c=ui();return Ln(()=>[c.value,a.value,t.name],([l,f,h],[p,b,x])=>{f&&(f.instances[h]=l,b&&b!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),l&&f&&(!b||!wn(f,b)||!p)&&(f.enterCallbacks[h]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return ca(n.default,{Component:p,route:l});const b=h.props[f],x=b?b===!0?l.params:typeof b=="function"?b(l):b:null,U=uc(p,te({},x,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return ca(n.default,{Component:U,route:l})||U}}});function ca(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const cy=ay;function ly(t){const e=Lb(t.routes,t),n=t.parseQuery||Zb,s=t.stringifyQuery||sa,r=t.history,i=On(),o=On(),a=On(),c=lu(_t);let l=_t;an&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Er.bind(null,y=>""+y),h=Er.bind(null,Qb),p=Er.bind(null,Vs);function b(y,k){let C,N;return fl(y)?(C=e.getRecordMatcher(y),N=k):N=y,e.addRoute(N,C)}function x(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function S(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function R(y,k){if(k=te({},k||c.value),typeof y=="string"){const u=Ir(n,y,k.path),d=e.resolve({path:u.path},k),g=r.createHref(u.fullPath);return te(u,d,{params:p(d.params),hash:Vs(u.hash),redirectedFrom:void 0,href:g})}let C;if("path"in y)C=te({},y,{path:Ir(n,y.path,k.path).path});else{const u=te({},y.params);for(const d in u)u[d]==null&&delete u[d];C=te({},y,{params:h(y.params)}),k.params=h(k.params)}const N=e.resolve(C,k),X=y.hash||"";N.params=f(p(N.params));const ue=fb(s,te({},y,{hash:Jb(X),path:N.path})),q=r.createHref(ue);return te({fullPath:ue,hash:X,query:s===sa?ey(y.query):y.query||{}},N,{redirectedFrom:void 0,href:q})}function F(y){return typeof y=="string"?Ir(n,y,c.value.path):te({},y)}function O(y,k){if(l!==y)return En(8,{from:k,to:y})}function W(y){return z(y)}function K(y){return W(te(F(y),{replace:!0}))}function re(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:C}=k;let N=typeof C=="function"?C(y):C;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=F(N):{path:N},N.params={}),te({query:y.query,hash:y.hash,params:"path"in N?{}:y.params},N)}}function z(y,k){const C=l=R(y),N=c.value,X=y.state,ue=y.force,q=y.replace===!0,u=re(C);if(u)return z(te(F(u),{state:typeof u=="object"?te({},X,u.state):X,force:ue,replace:q}),k||C);const d=C;d.redirectedFrom=k;let g;return!ue&&db(s,N,C)&&(g=En(16,{to:d,from:N}),Ut(N,N,!0,!1)),(g?Promise.resolve(g):J(d,N)).catch(_=>ot(_)?ot(_,2)?_:We(_):ie(_,d,N)).then(_=>{if(_){if(ot(_,2))return z(te({replace:q},F(_.to),{state:typeof _.to=="object"?te({},X,_.to.state):X,force:ue}),k||d)}else _=fe(d,N,!0,q,X);return Y(d,N,_),_})}function A(y,k){const C=O(y,k);return C?Promise.reject(C):Promise.resolve()}function J(y,k){let C;const[N,X,ue]=uy(y,k);C=xr(N.reverse(),"beforeRouteLeave",y,k);for(const u of N)u.leaveGuards.forEach(d=>{C.push(vt(d,y,k))});const q=A.bind(null,y,k);return C.push(q),on(C).then(()=>{C=[];for(const u of i.list())C.push(vt(u,y,k));return C.push(q),on(C)}).then(()=>{C=xr(X,"beforeRouteUpdate",y,k);for(const u of X)u.updateGuards.forEach(d=>{C.push(vt(d,y,k))});return C.push(q),on(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!k.matched.includes(u))if(Ye(u.beforeEnter))for(const d of u.beforeEnter)C.push(vt(d,y,k));else C.push(vt(u.beforeEnter,y,k));return C.push(q),on(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=xr(ue,"beforeRouteEnter",y,k),C.push(q),on(C))).then(()=>{C=[];for(const u of o.list())C.push(vt(u,y,k));return C.push(q),on(C)}).catch(u=>ot(u,8)?u:Promise.reject(u))}function Y(y,k,C){for(const N of a.list())N(y,k,C)}function fe(y,k,C,N,X){const ue=O(y,k);if(ue)return ue;const q=k===_t,u=an?history.state:{};C&&(N||q?r.replace(y.fullPath,te({scroll:q&&u&&u.scroll},X)):r.push(y.fullPath,X)),c.value=y,Ut(y,k,C,q),We()}let ye;function Ne(){ye||(ye=r.listen((y,k,C)=>{if(!ps.listening)return;const N=R(y),X=re(N);if(X){z(te(X,{replace:!0}),N).catch(Hn);return}l=N;const ue=c.value;an&&vb(Jo(ue.fullPath,C.delta),ar()),J(N,ue).catch(q=>ot(q,12)?q:ot(q,2)?(z(q.to,N).then(u=>{ot(u,20)&&!C.delta&&C.type===ss.pop&&r.go(-1,!1)}).catch(Hn),Promise.reject()):(C.delta&&r.go(-C.delta,!1),ie(q,N,ue))).then(q=>{q=q||fe(N,ue,!1),q&&(C.delta&&!ot(q,8)?r.go(-C.delta,!1):C.type===ss.pop&&ot(q,20)&&r.go(-1,!1)),Y(N,ue,q)}).catch(Hn)}))}let ke=On(),ve=On(),pe;function ie(y,k,C){We(y);const N=ve.list();return N.length?N.forEach(X=>X(y,k,C)):console.error(y),Promise.reject(y)}function ne(){return pe&&c.value!==_t?Promise.resolve():new Promise((y,k)=>{ke.add([y,k])})}function We(y){return pe||(pe=!y,Ne(),ke.list().forEach(([k,C])=>y?C(y):k()),ke.reset()),y}function Ut(y,k,C,N){const{scrollBehavior:X}=t;if(!an||!X)return Promise.resolve();const ue=!C&&wb(Jo(y.fullPath,0))||(N||!C)&&history.state&&history.state.scroll||null;return di().then(()=>X(y,k,ue)).then(q=>q&&yb(q)).catch(q=>ie(q,y,k))}const ze=y=>r.go(y);let Oe;const tn=new Set,ps={currentRoute:c,listening:!0,addRoute:b,removeRoute:x,hasRoute:U,getRoutes:S,resolve:R,options:t,push:W,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ve.add,isReady:ne,install(y){const k=this;y.component("RouterLink",ry),y.component("RouterView",cy),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>un(c)}),an&&!Oe&&c.value===_t&&(Oe=!0,W(r.location).catch(X=>{}));const C={};for(const X in _t)C[X]=$e(()=>c.value[X]);y.provide(Ui,k),y.provide(yl,Cn(C)),y.provide(Xr,c);const N=y.unmount;tn.add(y),y.unmount=function(){tn.delete(y),tn.size<1&&(l=_t,ye&&ye(),ye=null,c.value=_t,Oe=!1,pe=!1),N()}}};return ps}function on(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function uy(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>wn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>wn(l,c))||r.push(c))}return[n,s,r]}const fy="/assets/paralax1-371235c6.png",dy="/assets/paralax2-aa0b773a.png",hy="/assets/paralax3a-7b662525.png",py="/assets/paralax3b-b777e898.png",gy="/assets/paralax9-20ab124f.png",my={data(){return{xPos:0,yPos:0,store:be()}},methods:{check(t){this.xPos=t.clientX-window.innerWidth/2,this.yPos=t.clientY-window.innerHeight/2},touch(t){this.xPos=t.touches[0].clientX-window.innerWidth/2,this.yPos=t.touches[0].clientY-window.innerHeight/2}},computed:{parallaxHeight(){return window.innerHeight-102*2}}},_y={class:"relative grid overflow-hidden -mx-[100px] [&>img]:max-w-none [&>img]:select-none"},by=m("div",{class:"absolute w-full h-full bg-gray-900 bg-opacity-[.3]"},null,-1),yy={class:"h-full justify-center flex items-center"},vy={class:"grid gap-[10vh] [&_*]:text-white"},wy={class:"justify-center flex"},Ey={class:"grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"},Iy={class:"justify-center flex max-[800px]:pt-[10px]"},xy={class:"grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"};function Ty(t,e,n,s,r,i){const o=dt("router-link"),a=dt("Layout");return he(),Ie("div",{onTouchmove:e[1]||(e[1]=(...c)=>i.touch&&i.touch(...c)),onMousemove:e[2]||(e[2]=(...c)=>i.check&&i.check(...c))},[Z(a,null,{default:Te(()=>[m("div",_y,[by,m("img",{style:wt({transform:`translate(${r.xPos/10}px, ${r.yPos/10}px)`}),class:"w-[2200px] absolute left-[-10%] top-[-10%] -z-10",src:fy},null,4),m("img",{style:wt({transform:`translate(${r.xPos/13}px, ${r.yPos/13}px)`}),class:"w-[2200px] h-[70%] absolute left-[-10%] top-0 -z-10",src:dy},null,4),m("img",{style:wt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[440px] absolute justify-self-center mr-[1120px] bottom-[60px] z-[-9]",src:hy},null,4),m("img",{style:wt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[500px] absolute justify-self-center ml-[220px] bottom-[40px] z-[-9]",src:py},null,4),m("img",{style:wt({transform:`translate(${r.xPos/18}px, ${r.yPos/20}px)`}),class:"w-[2200px] absolute justify-self-center bottom-[-4%] -z-10",src:gy},null,4),m("div",yy,[m("div",vy,[m("div",wy,[m("div",Ey,[Z(o,{to:"Products",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Te(()=>[me(B(r.store.langProp.catalogue),1)]),_:1}),Z(o,{to:"about",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Te(()=>[me(B(r.store.langProp.about),1)]),_:1})])]),m("div",Iy,[m("div",xy,[Z(o,{to:"Blog",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Te(()=>[me(B(r.store.langProp.blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=c=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white")),class:"relative z-10 bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},B(r.store.langProp.contacts),1)])])])])])]),_:1})],32)}const Sy=Xe(my,[["render",Ty]]),Tr=[{path:"home",alias:"home",component:Sy},{path:"about",alias:"About",component:()=>rn(()=>import("./About-cebbd94b.js"),[])},{path:"Products",alias:"Products",component:()=>rn(()=>import("./Products-5b4a77f9.js"),[])},{path:"Personal/:id",alias:"Personal/:id",component:()=>rn(()=>import("./Personal-c32dd495.js"),[])},{path:"PersonalArea/:id",alias:"PersonalArea/:id",component:()=>rn(()=>import("./PersonalArea-68cbae4b.js"),[])},{path:"Blog",alias:"Blog",component:()=>rn(()=>import("./Blog-92ce5326.js"),[])},{path:"Checkout",alias:"Checkout",component:()=>rn(()=>import("./Checkout-5162cc04.js"),[])}],Cy=ly({history:Tb("/"),routes:[{path:"/",name:"root",redirect:t=>be().lang},{path:"/ru",name:"ru",redirect:t=>"ru/home",beforeEnter:async(t,e)=>{be().lang="ru",be().process()},children:Tr},{path:"/en",name:"en",redirect:t=>"en/home",beforeEnter:t=>{be().lang="en",be().process()},children:Tr},{path:"/kg",name:"kg",redirect:t=>"kg/home",beforeEnter:t=>{be().lang="kg",be().process()},children:Tr}]});const cr=Jf(ib),Py=Qf();new Ae;const ky={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};cr.component("Layout",nb);cr.use(Py);cr.use(Cy);Tc(ky);be().checkStatus();vn();cr.mount("#app");export{Ue as F,nb as L,Xe as _,m as a,me as b,Zs as c,Ie as d,Ry as e,Z as f,vn as g,wp as h,he as o,dt as r,B as t,be as u,Te as w};
