(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Wr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function vt(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ge(s)?hc(s):vt(s);if(r)for(const o in r)e[o]=r[o]}return e}else{if(ge(t))return t;if(le(t))return t}}const uc=/;(?![^(]*\))/g,fc=/:([^]+)/,dc=/\/\*.*?\*\//gs;function hc(t){const e={};return t.replace(dc,"").split(uc).forEach(n=>{if(n){const s=n.split(fc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function vn(t){let e="";if(ge(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const s=vn(t[n]);s&&(e+=s+" ")}else if(le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const pc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",gc=Wr(pc);function ta(t){return!!t||t===""}function mc(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Gt(t[s],e[s]);return n}function Gt(t,e){if(t===e)return!0;let n=Mo(t),s=Mo(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Bn(t),s=Bn(e),n||s)return t===e;if(n=F(t),s=F(e),n||s)return n&&s?mc(t,e):!1;if(n=le(t),s=le(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const i in t){const a=t.hasOwnProperty(i),l=e.hasOwnProperty(i);if(a&&!l||!a&&l||!Gt(t[i],e[i]))return!1}}return String(t)===String(e)}function Kr(t,e){return t.findIndex(n=>Gt(n,e))}const W=t=>ge(t)?t:t==null?"":F(t)||le(t)&&(t.toString===ra||!$(t.toString))?JSON.stringify(t,na,2):String(t),na=(t,e)=>e&&e.__v_isRef?na(t,e.value):on(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:wn(e)?{[`Set(${e.size})`]:[...e.values()]}:le(e)&&!F(e)&&!oa(e)?String(e):e,ce={},rn=[],Ge=()=>{},_c=()=>!1,bc=/^on[^a-z]/,Ds=t=>bc.test(t),qr=t=>t.startsWith("onUpdate:"),xe=Object.assign,Gr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yc=Object.prototype.hasOwnProperty,Q=(t,e)=>yc.call(t,e),F=Array.isArray,on=t=>Qn(t)==="[object Map]",wn=t=>Qn(t)==="[object Set]",Mo=t=>Qn(t)==="[object Date]",$=t=>typeof t=="function",ge=t=>typeof t=="string",Bn=t=>typeof t=="symbol",le=t=>t!==null&&typeof t=="object",sa=t=>le(t)&&$(t.then)&&$(t.catch),ra=Object.prototype.toString,Qn=t=>ra.call(t),vc=t=>Qn(t).slice(8,-1),oa=t=>Qn(t)==="[object Object]",Jr=t=>ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hs=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ls=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wc=/-(\w)/g,st=Ls(t=>t.replace(wc,(e,n)=>n?n.toUpperCase():"")),Ec=/\B([A-Z])/g,En=Ls(t=>t.replace(Ec,"-$1").toLowerCase()),Us=Ls(t=>t.charAt(0).toUpperCase()+t.slice(1)),nr=Ls(t=>t?`on${Us(t)}`:""),jn=(t,e)=>!Object.is(t,e),ps=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Es=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Hn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Do;const Ic=()=>Do||(Do=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Me;class ia{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Me,!e&&Me&&(this.index=(Me.scopes||(Me.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Me;try{return Me=this,e()}finally{Me=n}}}on(){Me=this}off(){Me=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function aa(t){return new ia(t)}function xc(t,e=Me){e&&e.active&&e.effects.push(t)}function Tc(){return Me}function Pc(t){Me&&Me.cleanups.push(t)}const Yr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},la=t=>(t.w&At)>0,ca=t=>(t.n&At)>0,Cc=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=At},Sc=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];la(r)&&!ca(r)?r.delete(t):e[n++]=r,r.w&=~At,r.n&=~At}e.length=n}},yr=new WeakMap;let An=0,At=1;const vr=30;let Ke;const Wt=Symbol(""),wr=Symbol("");class Xr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,xc(this,s)}run(){if(!this.active)return this.fn();let e=Ke,n=xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ke,Ke=this,xt=!0,At=1<<++An,An<=vr?Cc(this):Lo(this),this.fn()}finally{An<=vr&&Sc(this),At=1<<--An,Ke=this.parent,xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ke===this?this.deferStop=!0:this.active&&(Lo(this),this.onStop&&this.onStop(),this.active=!1)}}function Lo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let xt=!0;const ua=[];function In(){ua.push(xt),xt=!1}function xn(){const t=ua.pop();xt=t===void 0?!0:t}function Ue(t,e,n){if(xt&&Ke){let s=yr.get(t);s||yr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=Yr()),fa(r)}}function fa(t,e){let n=!1;An<=vr?ca(t)||(t.n|=At,n=!la(t)):n=!t.has(Ke),n&&(t.add(Ke),Ke.deps.push(t))}function ft(t,e,n,s,r,o){const i=yr.get(t);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(n==="length"&&F(t)){const l=Hn(s);i.forEach((c,f)=>{(f==="length"||f>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(i.get(n)),e){case"add":F(t)?Jr(n)&&a.push(i.get("length")):(a.push(i.get(Wt)),on(t)&&a.push(i.get(wr)));break;case"delete":F(t)||(a.push(i.get(Wt)),on(t)&&a.push(i.get(wr)));break;case"set":on(t)&&a.push(i.get(Wt));break}if(a.length===1)a[0]&&Er(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Er(Yr(l))}}function Er(t,e){const n=F(t)?t:[...t];for(const s of n)s.computed&&Uo(s);for(const s of n)s.computed||Uo(s)}function Uo(t,e){(t!==Ke||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const kc=Wr("__proto__,__v_isRef,__isVue"),da=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Bn)),Ac=Qr(),Rc=Qr(!1,!0),Oc=Qr(!0),Fo=Nc();function Nc(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Z(this);for(let o=0,i=this.length;o<i;o++)Ue(s,"get",o+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Z)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){In();const s=Z(this)[e].apply(this,n);return xn(),s}}),t}function Qr(t=!1,e=!1){return function(s,r,o){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(t?e?Jc:_a:e?ma:ga).get(s))return s;const i=F(s);if(!t&&i&&Q(Fo,r))return Reflect.get(Fo,r,o);const a=Reflect.get(s,r,o);return(Bn(r)?da.has(r):kc(r))||(t||Ue(s,"get",r),e)?a:de(a)?i&&Jr(r)?a:a.value:le(a)?t?ba(a):Tn(a):a}}const Mc=ha(),Dc=ha(!0);function ha(t=!1){return function(n,s,r,o){let i=n[s];if(dn(i)&&de(i)&&!de(r))return!1;if(!t&&(!Is(r)&&!dn(r)&&(i=Z(i),r=Z(r)),!F(n)&&de(i)&&!de(r)))return i.value=r,!0;const a=F(n)&&Jr(s)?Number(s)<n.length:Q(n,s),l=Reflect.set(n,s,r,o);return n===Z(o)&&(a?jn(r,i)&&ft(n,"set",s,r):ft(n,"add",s,r)),l}}function Lc(t,e){const n=Q(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ft(t,"delete",e,void 0),s}function Uc(t,e){const n=Reflect.has(t,e);return(!Bn(e)||!da.has(e))&&Ue(t,"has",e),n}function Fc(t){return Ue(t,"iterate",F(t)?"length":Wt),Reflect.ownKeys(t)}const pa={get:Ac,set:Mc,deleteProperty:Lc,has:Uc,ownKeys:Fc},Bc={get:Oc,set(t,e){return!0},deleteProperty(t,e){return!0}},jc=xe({},pa,{get:Rc,set:Dc}),Zr=t=>t,Fs=t=>Reflect.getPrototypeOf(t);function os(t,e,n=!1,s=!1){t=t.__v_raw;const r=Z(t),o=Z(e);n||(e!==o&&Ue(r,"get",e),Ue(r,"get",o));const{has:i}=Fs(r),a=s?Zr:n?no:$n;if(i.call(r,e))return a(t.get(e));if(i.call(r,o))return a(t.get(o));t!==r&&t.get(e)}function is(t,e=!1){const n=this.__v_raw,s=Z(n),r=Z(t);return e||(t!==r&&Ue(s,"has",t),Ue(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function as(t,e=!1){return t=t.__v_raw,!e&&Ue(Z(t),"iterate",Wt),Reflect.get(t,"size",t)}function Bo(t){t=Z(t);const e=Z(this);return Fs(e).has.call(e,t)||(e.add(t),ft(e,"add",t,t)),this}function jo(t,e){e=Z(e);const n=Z(this),{has:s,get:r}=Fs(n);let o=s.call(n,t);o||(t=Z(t),o=s.call(n,t));const i=r.call(n,t);return n.set(t,e),o?jn(e,i)&&ft(n,"set",t,e):ft(n,"add",t,e),this}function Ho(t){const e=Z(this),{has:n,get:s}=Fs(e);let r=n.call(e,t);r||(t=Z(t),r=n.call(e,t)),s&&s.call(e,t);const o=e.delete(t);return r&&ft(e,"delete",t,void 0),o}function $o(){const t=Z(this),e=t.size!==0,n=t.clear();return e&&ft(t,"clear",void 0,void 0),n}function ls(t,e){return function(s,r){const o=this,i=o.__v_raw,a=Z(i),l=e?Zr:t?no:$n;return!t&&Ue(a,"iterate",Wt),i.forEach((c,f)=>s.call(r,l(c),l(f),o))}}function cs(t,e,n){return function(...s){const r=this.__v_raw,o=Z(r),i=on(o),a=t==="entries"||t===Symbol.iterator&&i,l=t==="keys"&&i,c=r[t](...s),f=n?Zr:e?no:$n;return!e&&Ue(o,"iterate",l?wr:Wt),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:this}}function Hc(){const t={get(o){return os(this,o)},get size(){return as(this)},has:is,add:Bo,set:jo,delete:Ho,clear:$o,forEach:ls(!1,!1)},e={get(o){return os(this,o,!1,!0)},get size(){return as(this)},has:is,add:Bo,set:jo,delete:Ho,clear:$o,forEach:ls(!1,!0)},n={get(o){return os(this,o,!0)},get size(){return as(this,!0)},has(o){return is.call(this,o,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ls(!0,!1)},s={get(o){return os(this,o,!0,!0)},get size(){return as(this,!0)},has(o){return is.call(this,o,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:ls(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=cs(o,!1,!1),n[o]=cs(o,!0,!1),e[o]=cs(o,!1,!0),s[o]=cs(o,!0,!0)}),[t,n,e,s]}const[$c,Vc,zc,Wc]=Hc();function eo(t,e){const n=e?t?Wc:zc:t?Vc:$c;return(s,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Q(n,r)&&r in s?n:s,r,o)}const Kc={get:eo(!1,!1)},qc={get:eo(!1,!0)},Gc={get:eo(!0,!1)},ga=new WeakMap,ma=new WeakMap,_a=new WeakMap,Jc=new WeakMap;function Yc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xc(t){return t.__v_skip||!Object.isExtensible(t)?0:Yc(vc(t))}function Tn(t){return dn(t)?t:to(t,!1,pa,Kc,ga)}function Qc(t){return to(t,!1,jc,qc,ma)}function ba(t){return to(t,!0,Bc,Gc,_a)}function to(t,e,n,s,r){if(!le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const i=Xc(t);if(i===0)return t;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Tt(t){return dn(t)?Tt(t.__v_raw):!!(t&&t.__v_isReactive)}function dn(t){return!!(t&&t.__v_isReadonly)}function Is(t){return!!(t&&t.__v_isShallow)}function ya(t){return Tt(t)||dn(t)}function Z(t){const e=t&&t.__v_raw;return e?Z(e):t}function hn(t){return Es(t,"__v_skip",!0),t}const $n=t=>le(t)?Tn(t):t,no=t=>le(t)?ba(t):t;function va(t){xt&&Ke&&(t=Z(t),fa(t.dep||(t.dep=Yr())))}function wa(t,e){t=Z(t),t.dep&&Er(t.dep)}function de(t){return!!(t&&t.__v_isRef===!0)}function so(t){return Ea(t,!1)}function Zc(t){return Ea(t,!0)}function Ea(t,e){return de(t)?t:new eu(t,e)}class eu{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Z(e),this._value=n?e:$n(e)}get value(){return va(this),this._value}set value(e){const n=this.__v_isShallow||Is(e)||dn(e);e=n?e:Z(e),jn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$n(e),wa(this))}}function an(t){return de(t)?t.value:t}const tu={get:(t,e,n)=>an(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return de(r)&&!de(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function Ia(t){return Tt(t)?t:new Proxy(t,tu)}function nu(t){const e=F(t)?new Array(t.length):{};for(const n in t)e[n]=ru(t,n);return e}class su{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ru(t,e,n){const s=t[e];return de(s)?s:new su(t,e,n)}var xa;class ou{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[xa]=!1,this._dirty=!0,this.effect=new Xr(e,()=>{this._dirty||(this._dirty=!0,wa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Z(this);return va(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}xa="__v_isReadonly";function iu(t,e,n=!1){let s,r;const o=$(t);return o?(s=t,r=Ge):(s=t.get,r=t.set),new ou(s,r,o||!r,n)}function Pt(t,e,n,s){let r;try{r=s?t(...s):t()}catch(o){Bs(o,e,n)}return r}function je(t,e,n,s){if($(t)){const o=Pt(t,e,n,s);return o&&sa(o)&&o.catch(i=>{Bs(i,e,n)}),o}const r=[];for(let o=0;o<t.length;o++)r.push(je(t[o],e,n,s));return r}function Bs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const i=e.proxy,a=n;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,i,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){Pt(l,null,10,[t,i,a]);return}}au(t,n,r,s)}function au(t,e,n,s=!0){console.error(t)}let Vn=!1,Ir=!1;const Ee=[];let Ze=0;const ln=[];let at=null,Bt=0;const Ta=Promise.resolve();let ro=null;function oo(t){const e=ro||Ta;return t?e.then(this?t.bind(this):t):e}function lu(t){let e=Ze+1,n=Ee.length;for(;e<n;){const s=e+n>>>1;zn(Ee[s])<t?e=s+1:n=s}return e}function io(t){(!Ee.length||!Ee.includes(t,Vn&&t.allowRecurse?Ze+1:Ze))&&(t.id==null?Ee.push(t):Ee.splice(lu(t.id),0,t),Pa())}function Pa(){!Vn&&!Ir&&(Ir=!0,ro=Ta.then(Sa))}function cu(t){const e=Ee.indexOf(t);e>Ze&&Ee.splice(e,1)}function uu(t){F(t)?ln.push(...t):(!at||!at.includes(t,t.allowRecurse?Bt+1:Bt))&&ln.push(t),Pa()}function Vo(t,e=Vn?Ze+1:0){for(;e<Ee.length;e++){const n=Ee[e];n&&n.pre&&(Ee.splice(e,1),e--,n())}}function Ca(t){if(ln.length){const e=[...new Set(ln)];if(ln.length=0,at){at.push(...e);return}for(at=e,at.sort((n,s)=>zn(n)-zn(s)),Bt=0;Bt<at.length;Bt++)at[Bt]();at=null,Bt=0}}const zn=t=>t.id==null?1/0:t.id,fu=(t,e)=>{const n=zn(t)-zn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Sa(t){Ir=!1,Vn=!0,Ee.sort(fu);const e=Ge;try{for(Ze=0;Ze<Ee.length;Ze++){const n=Ee[Ze];n&&n.active!==!1&&Pt(n,null,14)}}finally{Ze=0,Ee.length=0,Ca(),Vn=!1,ro=null,(Ee.length||ln.length)&&Sa()}}function du(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ce;let r=n;const o=e.startsWith("update:"),i=o&&e.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:p}=s[f]||ce;p&&(r=n.map(b=>ge(b)?b.trim():b)),h&&(r=n.map(Hn))}let a,l=s[a=nr(e)]||s[a=nr(st(e))];!l&&o&&(l=s[a=nr(En(e))]),l&&je(l,t,6,r);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,je(c,t,6,r)}}function ka(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const o=t.emits;let i={},a=!1;if(!$(t)){const l=c=>{const f=ka(c,e,!0);f&&(a=!0,xe(i,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(le(t)&&s.set(t,null),null):(F(o)?o.forEach(l=>i[l]=null):xe(i,o),le(t)&&s.set(t,i),i)}function js(t,e){return!t||!Ds(e)?!1:(e=e.slice(2).replace(/Once$/,""),Q(t,e[0].toLowerCase()+e.slice(1))||Q(t,En(e))||Q(t,e))}let ve=null,Aa=null;function xs(t){const e=ve;return ve=t,Aa=t&&t.type.__scopeId||null,e}function Re(t,e=ve,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Zo(-1);const o=xs(e);let i;try{i=t(...r)}finally{xs(o),s._d&&Zo(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function sr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:a,attrs:l,emit:c,render:f,renderCache:h,data:p,setupState:b,ctx:x,inheritAttrs:P}=t;let U,A;const B=xs(t);try{if(n.shapeFlag&4){const V=r||s;U=Qe(f.call(V,V,h,o,b,p,x)),A=l}else{const V=e;U=Qe(V.length>1?V(o,{attrs:l,slots:a,emit:c}):V(o,null)),A=e.props?l:hu(l)}}catch(V){Mn.length=0,Bs(V,t,1),U=ee(He)}let O=U;if(A&&P!==!1){const V=Object.keys(A),{shapeFlag:K}=O;V.length&&K&7&&(i&&V.some(qr)&&(A=pu(A,i)),O=Rt(O,A))}return n.dirs&&(O=Rt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,xs(B),U}const hu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ds(n))&&((e||(e={}))[n]=t[n]);return e},pu=(t,e)=>{const n={};for(const s in t)(!qr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function gu(t,e,n){const{props:s,children:r,component:o}=t,{props:i,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?zo(s,i,c):!!i;if(l&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(i[p]!==s[p]&&!js(c,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?zo(s,i,c):!0:!!i;return!1}function zo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==t[o]&&!js(n,o))return!0}return!1}function mu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const _u=t=>t.__isSuspense;function bu(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):uu(t)}function gs(t,e){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[t]=e}}function et(t,e,n=!1){const s=ye||ve;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}const us={};function Rn(t,e,n){return Ra(t,e,n)}function Ra(t,e,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=ce){const a=ye;let l,c=!1,f=!1;if(de(t)?(l=()=>t.value,c=Is(t)):Tt(t)?(l=()=>t,s=!0):F(t)?(f=!0,c=t.some(O=>Tt(O)||Is(O)),l=()=>t.map(O=>{if(de(O))return O.value;if(Tt(O))return Vt(O);if($(O))return Pt(O,a,2)})):$(t)?e?l=()=>Pt(t,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),je(t,a,3,[p])}:l=Ge,e&&s){const O=l;l=()=>Vt(O())}let h,p=O=>{h=A.onStop=()=>{Pt(O,a,4)}},b;if(Kn)if(p=Ge,e?n&&je(e,a,3,[l(),f?[]:void 0,p]):l(),r==="sync"){const O=hf();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Ge;let x=f?new Array(t.length).fill(us):us;const P=()=>{if(A.active)if(e){const O=A.run();(s||c||(f?O.some((V,K)=>jn(V,x[K])):jn(O,x)))&&(h&&h(),je(e,a,3,[O,x===us?void 0:f&&x[0]===us?[]:x,p]),x=O)}else A.run()};P.allowRecurse=!!e;let U;r==="sync"?U=P:r==="post"?U=()=>Ae(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),U=()=>io(P));const A=new Xr(l,U);e?n?P():x=A.run():r==="post"?Ae(A.run.bind(A),a&&a.suspense):A.run();const B=()=>{A.stop(),a&&a.scope&&Gr(a.scope.effects,A)};return b&&b.push(B),B}function yu(t,e,n){const s=this.proxy,r=ge(t)?t.includes(".")?Oa(s,t):()=>s[t]:t.bind(s,s);let o;$(e)?o=e:(o=e.handler,n=e);const i=ye;pn(this);const a=Ra(r,o.bind(s),n);return i?pn(i):Kt(),a}function Oa(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Vt(t,e){if(!le(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),de(t))Vt(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)Vt(t[n],e);else if(wn(t)||on(t))t.forEach(n=>{Vt(n,e)});else if(oa(t))for(const n in t)Vt(t[n],e);return t}function vu(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ua(()=>{t.isMounted=!0}),Fa(()=>{t.isUnmounting=!0}),t}const Fe=[Function,Array],wu={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fe,onEnter:Fe,onAfterEnter:Fe,onEnterCancelled:Fe,onBeforeLeave:Fe,onLeave:Fe,onAfterLeave:Fe,onLeaveCancelled:Fe,onBeforeAppear:Fe,onAppear:Fe,onAfterAppear:Fe,onAppearCancelled:Fe},setup(t,{slots:e}){const n=Za(),s=vu();let r;return()=>{const o=e.default&&Ma(e.default(),!0);if(!o||!o.length)return;let i=o[0];if(o.length>1){for(const P of o)if(P.type!==He){i=P;break}}const a=Z(t),{mode:l}=a;if(s.isLeaving)return rr(i);const c=Wo(i);if(!c)return rr(i);const f=xr(c,a,s,n);Tr(c,f);const h=n.subTree,p=h&&Wo(h);let b=!1;const{getTransitionKey:x}=c.type;if(x){const P=x();r===void 0?r=P:P!==r&&(r=P,b=!0)}if(p&&p.type!==He&&(!jt(c,p)||b)){const P=xr(p,a,s,n);if(Tr(p,P),l==="out-in")return s.isLeaving=!0,P.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},rr(i);l==="in-out"&&c.type!==He&&(P.delayLeave=(U,A,B)=>{const O=Na(s,p);O[String(p.key)]=p,U._leaveCb=()=>{A(),U._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=B})}return i}}},Eu=wu;function Na(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function xr(t,e,n,s){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:b,onLeaveCancelled:x,onBeforeAppear:P,onAppear:U,onAfterAppear:A,onAppearCancelled:B}=e,O=String(t.key),V=Na(n,t),K=(R,J)=>{R&&je(R,s,9,J)},re=(R,J)=>{const Y=J[1];K(R,J),F(R)?R.every(fe=>fe.length<=1)&&Y():R.length<=1&&Y()},z={mode:o,persisted:i,beforeEnter(R){let J=a;if(!n.isMounted)if(r)J=P||a;else return;R._leaveCb&&R._leaveCb(!0);const Y=V[O];Y&&jt(t,Y)&&Y.el._leaveCb&&Y.el._leaveCb(),K(J,[R])},enter(R){let J=l,Y=c,fe=f;if(!n.isMounted)if(r)J=U||l,Y=A||c,fe=B||f;else return;let me=!1;const Oe=R._enterCb=Pe=>{me||(me=!0,Pe?K(fe,[R]):K(Y,[R]),z.delayedLeave&&z.delayedLeave(),R._enterCb=void 0)};J?re(J,[R,Oe]):Oe()},leave(R,J){const Y=String(t.key);if(R._enterCb&&R._enterCb(!0),n.isUnmounting)return J();K(h,[R]);let fe=!1;const me=R._leaveCb=Oe=>{fe||(fe=!0,J(),Oe?K(x,[R]):K(b,[R]),R._leaveCb=void 0,V[Y]===t&&delete V[Y])};V[Y]=t,p?re(p,[R,me]):me()},clone(R){return xr(R,e,n,s)}};return z}function rr(t){if(Hs(t))return t=Rt(t),t.children=null,t}function Wo(t){return Hs(t)?t.children?t.children[0]:void 0:t}function Tr(t,e){t.shapeFlag&6&&t.component?Tr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ma(t,e=!1,n){let s=[],r=0;for(let o=0;o<t.length;o++){let i=t[o];const a=n==null?i.key:String(n)+String(i.key!=null?i.key:o);i.type===De?(i.patchFlag&128&&r++,s=s.concat(Ma(i.children,e,a))):(e||i.type!==He)&&s.push(a!=null?Rt(i,{key:a}):i)}if(r>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function Da(t){return $(t)?{setup:t,name:t.name}:t}const On=t=>!!t.type.__asyncLoader,Hs=t=>t.type.__isKeepAlive;function Iu(t,e){La(t,"a",e)}function xu(t,e){La(t,"da",e)}function La(t,e,n=ye){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($s(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Hs(r.parent.vnode)&&Tu(s,e,n,r),r=r.parent}}function Tu(t,e,n,s){const r=$s(e,t,s,!0);Ba(()=>{Gr(s[e],r)},n)}function $s(t,e,n=ye,s=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;In(),pn(n);const a=je(e,n,t,i);return Kt(),xn(),a});return s?r.unshift(o):r.push(o),o}}const ht=t=>(e,n=ye)=>(!Kn||t==="sp")&&$s(t,(...s)=>e(...s),n),Pu=ht("bm"),Ua=ht("m"),Cu=ht("bu"),Su=ht("u"),Fa=ht("bum"),Ba=ht("um"),ku=ht("sp"),Au=ht("rtg"),Ru=ht("rtc");function Ou(t,e=ye){$s("ec",t,e)}function we(t,e){const n=ve;if(n===null)return t;const s=Ks(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[i,a,l,c=ce]=e[o];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&Vt(a),r.push({dir:i,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Dt(t,e,n,s){const r=t.dirs,o=e&&e.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let l=a.dir[s];l&&(In(),je(l,n,8,[t.el,a,t,e]),xn())}}const ao="components";function Jt(t,e){return Ha(ao,t,!0,e)||t}const ja=Symbol();function Nu(t){return ge(t)?Ha(ao,t,!1)||t:t||ja}function Ha(t,e,n=!0,s=!1){const r=ve||ye;if(r){const o=r.type;if(t===ao){const a=uf(o,!1);if(a&&(a===e||a===st(e)||a===Us(st(e))))return o}const i=Ko(r[t]||o[t],e)||Ko(r.appContext[t],e);return!i&&s?o:i}}function Ko(t,e){return t&&(t[e]||t[st(e)]||t[Us(st(e))])}function ny(t,e,n,s){let r;const o=n&&n[s];if(F(t)||ge(t)){r=new Array(t.length);for(let i=0,a=t.length;i<a;i++)r[i]=e(t[i],i,void 0,o&&o[i])}else if(typeof t=="number"){r=new Array(t);for(let i=0;i<t;i++)r[i]=e(i+1,i,void 0,o&&o[i])}else if(le(t))if(t[Symbol.iterator])r=Array.from(t,(i,a)=>e(i,a,void 0,o&&o[a]));else{const i=Object.keys(t);r=new Array(i.length);for(let a=0,l=i.length;a<l;a++){const c=i[a];r[a]=e(t[c],c,a,o&&o[a])}}else r=[];return n&&(n[s]=r),r}function Mu(t,e,n={},s,r){if(ve.isCE||ve.parent&&On(ve.parent)&&ve.parent.isCE)return e!=="default"&&(n.name=e),ee("slot",n,s&&s());let o=t[e];o&&o._c&&(o._d=!1),Ie();const i=o&&$a(o(n)),a=zs(De,{key:n.key||i&&i.key||`_${e}`},i||(s?s():[]),i&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function $a(t){return t.some(e=>Ps(e)?!(e.type===He||e.type===De&&!$a(e.children)):!0)?t:null}const Pr=t=>t?el(t)?Ks(t)||t.proxy:Pr(t.parent):null,Nn=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pr(t.parent),$root:t=>Pr(t.root),$emit:t=>t.emit,$options:t=>lo(t),$forceUpdate:t=>t.f||(t.f=()=>io(t.update)),$nextTick:t=>t.n||(t.n=oo.bind(t.proxy)),$watch:t=>yu.bind(t)}),or=(t,e)=>t!==ce&&!t.__isScriptSetup&&Q(t,e),Du={get({_:t},e){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const b=i[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(or(s,e))return i[e]=1,s[e];if(r!==ce&&Q(r,e))return i[e]=2,r[e];if((c=t.propsOptions[0])&&Q(c,e))return i[e]=3,o[e];if(n!==ce&&Q(n,e))return i[e]=4,n[e];Cr&&(i[e]=0)}}const f=Nn[e];let h,p;if(f)return e==="$attrs"&&Ue(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ce&&Q(n,e))return i[e]=4,n[e];if(p=l.config.globalProperties,Q(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:o}=t;return or(r,e)?(r[e]=n,!0):s!==ce&&Q(s,e)?(s[e]=n,!0):Q(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let a;return!!n[i]||t!==ce&&Q(t,i)||or(e,i)||(a=o[0])&&Q(a,i)||Q(s,i)||Q(Nn,i)||Q(r.config.globalProperties,i)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Q(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Cr=!0;function Lu(t){const e=lo(t),n=t.proxy,s=t.ctx;Cr=!1,e.beforeCreate&&qo(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:i,watch:a,provide:l,inject:c,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:x,activated:P,deactivated:U,beforeDestroy:A,beforeUnmount:B,destroyed:O,unmounted:V,render:K,renderTracked:re,renderTriggered:z,errorCaptured:R,serverPrefetch:J,expose:Y,inheritAttrs:fe,components:me,directives:Oe,filters:Pe}=e;if(c&&Uu(c,s,null,t.appContext.config.unwrapInjectedRef),i)for(const oe in i){const ne=i[oe];$(ne)&&(s[oe]=ne.bind(n))}if(r){const oe=r.call(n,n);le(oe)&&(t.data=Tn(oe))}if(Cr=!0,o)for(const oe in o){const ne=o[oe],Ve=$(ne)?ne.bind(n,n):$(ne.get)?ne.get.bind(n,n):Ge,Mt=!$(ne)&&$(ne.set)?ne.set.bind(n):Ge,ze=Le({get:Ve,set:Mt});Object.defineProperty(s,oe,{enumerable:!0,configurable:!0,get:()=>ze.value,set:ke=>ze.value=ke})}if(a)for(const oe in a)Va(a[oe],s,n,oe);if(l){const oe=$(l)?l.call(n):l;Reflect.ownKeys(oe).forEach(ne=>{gs(ne,oe[ne])})}f&&qo(f,t,"c");function he(oe,ne){F(ne)?ne.forEach(Ve=>oe(Ve.bind(n))):ne&&oe(ne.bind(n))}if(he(Pu,h),he(Ua,p),he(Cu,b),he(Su,x),he(Iu,P),he(xu,U),he(Ou,R),he(Ru,re),he(Au,z),he(Fa,B),he(Ba,V),he(ku,J),F(Y))if(Y.length){const oe=t.exposed||(t.exposed={});Y.forEach(ne=>{Object.defineProperty(oe,ne,{get:()=>n[ne],set:Ve=>n[ne]=Ve})})}else t.exposed||(t.exposed={});K&&t.render===Ge&&(t.render=K),fe!=null&&(t.inheritAttrs=fe),me&&(t.components=me),Oe&&(t.directives=Oe)}function Uu(t,e,n=Ge,s=!1){F(t)&&(t=Sr(t));for(const r in t){const o=t[r];let i;le(o)?"default"in o?i=et(o.from||r,o.default,!0):i=et(o.from||r):i=et(o),de(i)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function qo(t,e,n){je(F(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Va(t,e,n,s){const r=s.includes(".")?Oa(n,s):()=>n[s];if(ge(t)){const o=e[t];$(o)&&Rn(r,o)}else if($(t))Rn(r,t.bind(n));else if(le(t))if(F(t))t.forEach(o=>Va(o,e,n,s));else{const o=$(t.handler)?t.handler.bind(n):e[t.handler];$(o)&&Rn(r,o,t)}}function lo(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(c=>Ts(l,c,i,!0)),Ts(l,e,i)),le(e)&&o.set(e,l),l}function Ts(t,e,n,s=!1){const{mixins:r,extends:o}=e;o&&Ts(t,o,n,!0),r&&r.forEach(i=>Ts(t,i,n,!0));for(const i in e)if(!(s&&i==="expose")){const a=Fu[i]||n&&n[i];t[i]=a?a(t[i],e[i]):e[i]}return t}const Fu={data:Go,props:Ut,emits:Ut,methods:Ut,computed:Ut,beforeCreate:Ce,created:Ce,beforeMount:Ce,mounted:Ce,beforeUpdate:Ce,updated:Ce,beforeDestroy:Ce,beforeUnmount:Ce,destroyed:Ce,unmounted:Ce,activated:Ce,deactivated:Ce,errorCaptured:Ce,serverPrefetch:Ce,components:Ut,directives:Ut,watch:ju,provide:Go,inject:Bu};function Go(t,e){return e?t?function(){return xe($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Bu(t,e){return Ut(Sr(t),Sr(e))}function Sr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ce(t,e){return t?[...new Set([].concat(t,e))]:e}function Ut(t,e){return t?xe(xe(Object.create(null),t),e):e}function ju(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ce(t[s],e[s]);return n}function Hu(t,e,n,s=!1){const r={},o={};Es(o,Ws,1),t.propsDefaults=Object.create(null),za(t,e,r,o);for(const i in t.propsOptions[0])i in r||(r[i]=void 0);n?t.props=s?r:Qc(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function $u(t,e,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=t,a=Z(r),[l]=t.propsOptions;let c=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(js(t.emitsOptions,p))continue;const b=e[p];if(l)if(Q(o,p))b!==o[p]&&(o[p]=b,c=!0);else{const x=st(p);r[x]=kr(l,a,x,b,t,!1)}else b!==o[p]&&(o[p]=b,c=!0)}}}else{za(t,e,r,o)&&(c=!0);let f;for(const h in a)(!e||!Q(e,h)&&((f=En(h))===h||!Q(e,f)))&&(l?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=kr(l,a,h,void 0,t,!0)):delete r[h]);if(o!==a)for(const h in o)(!e||!Q(e,h))&&(delete o[h],c=!0)}c&&ft(t,"set","$attrs")}function za(t,e,n,s){const[r,o]=t.propsOptions;let i=!1,a;if(e)for(let l in e){if(hs(l))continue;const c=e[l];let f;r&&Q(r,f=st(l))?!o||!o.includes(f)?n[f]=c:(a||(a={}))[f]=c:js(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,i=!0)}if(o){const l=Z(n),c=a||ce;for(let f=0;f<o.length;f++){const h=o[f];n[h]=kr(r,l,h,c[h],t,!Q(c,h))}}return i}function kr(t,e,n,s,r,o){const i=t[n];if(i!=null){const a=Q(i,"default");if(a&&s===void 0){const l=i.default;if(i.type!==Function&&$(l)){const{propsDefaults:c}=r;n in c?s=c[n]:(pn(r),s=c[n]=l.call(null,e),Kt())}else s=l}i[0]&&(o&&!a?s=!1:i[1]&&(s===""||s===En(n))&&(s=!0))}return s}function Wa(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const o=t.props,i={},a=[];let l=!1;if(!$(t)){const f=h=>{l=!0;const[p,b]=Wa(h,e,!0);xe(i,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!o&&!l)return le(t)&&s.set(t,rn),rn;if(F(o))for(let f=0;f<o.length;f++){const h=st(o[f]);Jo(h)&&(i[h]=ce)}else if(o)for(const f in o){const h=st(f);if(Jo(h)){const p=o[f],b=i[h]=F(p)||$(p)?{type:p}:Object.assign({},p);if(b){const x=Qo(Boolean,b.type),P=Qo(String,b.type);b[0]=x>-1,b[1]=P<0||x<P,(x>-1||Q(b,"default"))&&a.push(h)}}}const c=[i,a];return le(t)&&s.set(t,c),c}function Jo(t){return t[0]!=="$"}function Yo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Xo(t,e){return Yo(t)===Yo(e)}function Qo(t,e){return F(e)?e.findIndex(n=>Xo(n,t)):$(e)&&Xo(e,t)?0:-1}const Ka=t=>t[0]==="_"||t==="$stable",co=t=>F(t)?t.map(Qe):[Qe(t)],Vu=(t,e,n)=>{if(e._n)return e;const s=Re((...r)=>co(e(...r)),n);return s._c=!1,s},qa=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Ka(r))continue;const o=t[r];if($(o))e[r]=Vu(r,o,s);else if(o!=null){const i=co(o);e[r]=()=>i}}},Ga=(t,e)=>{const n=co(e);t.slots.default=()=>n},zu=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Z(e),Es(e,"_",n)):qa(e,t.slots={})}else t.slots={},e&&Ga(t,e);Es(t.slots,Ws,1)},Wu=(t,e,n)=>{const{vnode:s,slots:r}=t;let o=!0,i=ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(xe(r,e),!n&&a===1&&delete r._):(o=!e.$stable,qa(e,r)),i=e}else e&&(Ga(t,e),i={default:1});if(o)for(const a in r)!Ka(a)&&!(a in i)&&delete r[a]};function Ja(){return{app:null,config:{isNativeTag:_c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ku=0;function qu(t,e){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!le(r)&&(r=null);const o=Ja(),i=new Set;let a=!1;const l=o.app={_uid:Ku++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:pf,get config(){return o.config},set config(c){},use(c,...f){return i.has(c)||(c&&$(c.install)?(i.add(c),c.install(l,...f)):$(c)&&(i.add(c),c(l,...f))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,f){return f?(o.components[c]=f,l):o.components[c]},directive(c,f){return f?(o.directives[c]=f,l):o.directives[c]},mount(c,f,h){if(!a){const p=ee(s,r);return p.appContext=o,f&&e?e(p,c):t(p,c,h),a=!0,l._container=c,c.__vue_app__=l,Ks(p.component)||p.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,f){return o.provides[c]=f,l}};return l}}function Ar(t,e,n,s,r=!1){if(F(t)){t.forEach((p,b)=>Ar(p,e&&(F(e)?e[b]:e),n,s,r));return}if(On(s)&&!r)return;const o=s.shapeFlag&4?Ks(s.component)||s.component.proxy:s.el,i=r?null:o,{i:a,r:l}=t,c=e&&e.r,f=a.refs===ce?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(ge(c)?(f[c]=null,Q(h,c)&&(h[c]=null)):de(c)&&(c.value=null)),$(l))Pt(l,a,12,[i,f]);else{const p=ge(l),b=de(l);if(p||b){const x=()=>{if(t.f){const P=p?Q(h,l)?h[l]:f[l]:l.value;r?F(P)&&Gr(P,o):F(P)?P.includes(o)||P.push(o):p?(f[l]=[o],Q(h,l)&&(h[l]=f[l])):(l.value=[o],t.k&&(f[t.k]=l.value))}else p?(f[l]=i,Q(h,l)&&(h[l]=i)):b&&(l.value=i,t.k&&(f[t.k]=i))};i?(x.id=-1,Ae(x,n)):x()}}}const Ae=bu;function Gu(t){return Ju(t)}function Ju(t,e){const n=Ic();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:a,createComment:l,setText:c,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Ge,insertStaticContent:x}=t,P=(u,d,g,_=null,v=null,I=null,S=!1,E=null,T=!!d.dynamicChildren)=>{if(u===d)return;u&&!jt(u,d)&&(_=C(u),ke(u,v,I,!0),u=null),d.patchFlag===-2&&(T=!1,d.dynamicChildren=null);const{type:w,ref:D,shapeFlag:N}=d;switch(w){case Vs:U(u,d,g,_);break;case He:A(u,d,g,_);break;case ms:u==null&&B(d,g,_,S);break;case De:me(u,d,g,_,v,I,S,E,T);break;default:N&1?K(u,d,g,_,v,I,S,E,T):N&6?Oe(u,d,g,_,v,I,S,E,T):(N&64||N&128)&&w.process(u,d,g,_,v,I,S,E,T,X)}D!=null&&v&&Ar(D,u&&u.ref,I,d||u,!d)},U=(u,d,g,_)=>{if(u==null)s(d.el=a(d.children),g,_);else{const v=d.el=u.el;d.children!==u.children&&c(v,d.children)}},A=(u,d,g,_)=>{u==null?s(d.el=l(d.children||""),g,_):d.el=u.el},B=(u,d,g,_)=>{[u.el,u.anchor]=x(u.children,d,g,_,u.el,u.anchor)},O=({el:u,anchor:d},g,_)=>{let v;for(;u&&u!==d;)v=p(u),s(u,g,_),u=v;s(d,g,_)},V=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},K=(u,d,g,_,v,I,S,E,T)=>{S=S||d.type==="svg",u==null?re(d,g,_,v,I,S,E,T):J(u,d,v,I,S,E,T)},re=(u,d,g,_,v,I,S,E)=>{let T,w;const{type:D,props:N,shapeFlag:L,transition:H,dirs:G}=u;if(T=u.el=i(u.type,I,N&&N.is,N),L&8?f(T,u.children):L&16&&R(u.children,T,null,_,v,I&&D!=="foreignObject",S,E),G&&Dt(u,null,_,"created"),N){for(const se in N)se!=="value"&&!hs(se)&&o(T,se,null,N[se],I,u.children,_,v,k);"value"in N&&o(T,"value",null,N.value),(w=N.onVnodeBeforeMount)&&Xe(w,_,u)}z(T,u,u.scopeId,S,_),G&&Dt(u,null,_,"beforeMount");const ie=(!v||v&&!v.pendingBranch)&&H&&!H.persisted;ie&&H.beforeEnter(T),s(T,d,g),((w=N&&N.onVnodeMounted)||ie||G)&&Ae(()=>{w&&Xe(w,_,u),ie&&H.enter(T),G&&Dt(u,null,_,"mounted")},v)},z=(u,d,g,_,v)=>{if(g&&b(u,g),_)for(let I=0;I<_.length;I++)b(u,_[I]);if(v){let I=v.subTree;if(d===I){const S=v.vnode;z(u,S,S.scopeId,S.slotScopeIds,v.parent)}}},R=(u,d,g,_,v,I,S,E,T=0)=>{for(let w=T;w<u.length;w++){const D=u[w]=E?_t(u[w]):Qe(u[w]);P(null,D,d,g,_,v,I,S,E)}},J=(u,d,g,_,v,I,S)=>{const E=d.el=u.el;let{patchFlag:T,dynamicChildren:w,dirs:D}=d;T|=u.patchFlag&16;const N=u.props||ce,L=d.props||ce;let H;g&&Lt(g,!1),(H=L.onVnodeBeforeUpdate)&&Xe(H,g,d,u),D&&Dt(d,u,g,"beforeUpdate"),g&&Lt(g,!0);const G=v&&d.type!=="foreignObject";if(w?Y(u.dynamicChildren,w,E,g,_,G,I):S||ne(u,d,E,null,g,_,G,I,!1),T>0){if(T&16)fe(E,d,N,L,g,_,v);else if(T&2&&N.class!==L.class&&o(E,"class",null,L.class,v),T&4&&o(E,"style",N.style,L.style,v),T&8){const ie=d.dynamicProps;for(let se=0;se<ie.length;se++){const pe=ie[se],We=N[pe],Zt=L[pe];(Zt!==We||pe==="value")&&o(E,pe,We,Zt,v,u.children,g,_,k)}}T&1&&u.children!==d.children&&f(E,d.children)}else!S&&w==null&&fe(E,d,N,L,g,_,v);((H=L.onVnodeUpdated)||D)&&Ae(()=>{H&&Xe(H,g,d,u),D&&Dt(d,u,g,"updated")},_)},Y=(u,d,g,_,v,I,S)=>{for(let E=0;E<d.length;E++){const T=u[E],w=d[E],D=T.el&&(T.type===De||!jt(T,w)||T.shapeFlag&70)?h(T.el):g;P(T,w,D,null,_,v,I,S,!0)}},fe=(u,d,g,_,v,I,S)=>{if(g!==_){if(g!==ce)for(const E in g)!hs(E)&&!(E in _)&&o(u,E,g[E],null,S,d.children,v,I,k);for(const E in _){if(hs(E))continue;const T=_[E],w=g[E];T!==w&&E!=="value"&&o(u,E,w,T,S,d.children,v,I,k)}"value"in _&&o(u,"value",g.value,_.value)}},me=(u,d,g,_,v,I,S,E,T)=>{const w=d.el=u?u.el:a(""),D=d.anchor=u?u.anchor:a("");let{patchFlag:N,dynamicChildren:L,slotScopeIds:H}=d;H&&(E=E?E.concat(H):H),u==null?(s(w,g,_),s(D,g,_),R(d.children,g,D,v,I,S,E,T)):N>0&&N&64&&L&&u.dynamicChildren?(Y(u.dynamicChildren,L,g,v,I,S,E),(d.key!=null||v&&d===v.subTree)&&Ya(u,d,!0)):ne(u,d,g,D,v,I,S,E,T)},Oe=(u,d,g,_,v,I,S,E,T)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,g,_,S,T):Pe(d,g,_,v,I,S,T):_e(u,d,T)},Pe=(u,d,g,_,v,I,S)=>{const E=u.component=rf(u,_,v);if(Hs(u)&&(E.ctx.renderer=X),of(E),E.asyncDep){if(v&&v.registerDep(E,he),!u.el){const T=E.subTree=ee(He);A(null,T,d,g)}return}he(E,u,d,g,v,I,S)},_e=(u,d,g)=>{const _=d.component=u.component;if(gu(u,d,g))if(_.asyncDep&&!_.asyncResolved){oe(_,d,g);return}else _.next=d,cu(_.update),_.update();else d.el=u.el,_.vnode=d},he=(u,d,g,_,v,I,S)=>{const E=()=>{if(u.isMounted){let{next:D,bu:N,u:L,parent:H,vnode:G}=u,ie=D,se;Lt(u,!1),D?(D.el=G.el,oe(u,D,S)):D=G,N&&ps(N),(se=D.props&&D.props.onVnodeBeforeUpdate)&&Xe(se,H,D,G),Lt(u,!0);const pe=sr(u),We=u.subTree;u.subTree=pe,P(We,pe,h(We.el),C(We),u,v,I),D.el=pe.el,ie===null&&mu(u,pe.el),L&&Ae(L,v),(se=D.props&&D.props.onVnodeUpdated)&&Ae(()=>Xe(se,H,D,G),v)}else{let D;const{el:N,props:L}=d,{bm:H,m:G,parent:ie}=u,se=On(d);if(Lt(u,!1),H&&ps(H),!se&&(D=L&&L.onVnodeBeforeMount)&&Xe(D,ie,d),Lt(u,!0),N&&q){const pe=()=>{u.subTree=sr(u),q(N,u.subTree,u,v,null)};se?d.type.__asyncLoader().then(()=>!u.isUnmounted&&pe()):pe()}else{const pe=u.subTree=sr(u);P(null,pe,g,_,u,v,I),d.el=pe.el}if(G&&Ae(G,v),!se&&(D=L&&L.onVnodeMounted)){const pe=d;Ae(()=>Xe(D,ie,pe),v)}(d.shapeFlag&256||ie&&On(ie.vnode)&&ie.vnode.shapeFlag&256)&&u.a&&Ae(u.a,v),u.isMounted=!0,d=g=_=null}},T=u.effect=new Xr(E,()=>io(w),u.scope),w=u.update=()=>T.run();w.id=u.uid,Lt(u,!0),w()},oe=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,$u(u,d.props,_,g),Wu(u,d.children,g),In(),Vo(),xn()},ne=(u,d,g,_,v,I,S,E,T=!1)=>{const w=u&&u.children,D=u?u.shapeFlag:0,N=d.children,{patchFlag:L,shapeFlag:H}=d;if(L>0){if(L&128){Mt(w,N,g,_,v,I,S,E,T);return}else if(L&256){Ve(w,N,g,_,v,I,S,E,T);return}}H&8?(D&16&&k(w,v,I),N!==w&&f(g,N)):D&16?H&16?Mt(w,N,g,_,v,I,S,E,T):k(w,v,I,!0):(D&8&&f(g,""),H&16&&R(N,g,_,v,I,S,E,T))},Ve=(u,d,g,_,v,I,S,E,T)=>{u=u||rn,d=d||rn;const w=u.length,D=d.length,N=Math.min(w,D);let L;for(L=0;L<N;L++){const H=d[L]=T?_t(d[L]):Qe(d[L]);P(u[L],H,g,null,v,I,S,E,T)}w>D?k(u,v,I,!0,!1,N):R(d,g,_,v,I,S,E,T,N)},Mt=(u,d,g,_,v,I,S,E,T)=>{let w=0;const D=d.length;let N=u.length-1,L=D-1;for(;w<=N&&w<=L;){const H=u[w],G=d[w]=T?_t(d[w]):Qe(d[w]);if(jt(H,G))P(H,G,g,null,v,I,S,E,T);else break;w++}for(;w<=N&&w<=L;){const H=u[N],G=d[L]=T?_t(d[L]):Qe(d[L]);if(jt(H,G))P(H,G,g,null,v,I,S,E,T);else break;N--,L--}if(w>N){if(w<=L){const H=L+1,G=H<D?d[H].el:_;for(;w<=L;)P(null,d[w]=T?_t(d[w]):Qe(d[w]),g,G,v,I,S,E,T),w++}}else if(w>L)for(;w<=N;)ke(u[w],v,I,!0),w++;else{const H=w,G=w,ie=new Map;for(w=G;w<=L;w++){const Ne=d[w]=T?_t(d[w]):Qe(d[w]);Ne.key!=null&&ie.set(Ne.key,w)}let se,pe=0;const We=L-G+1;let Zt=!1,Ro=0;const Cn=new Array(We);for(w=0;w<We;w++)Cn[w]=0;for(w=H;w<=N;w++){const Ne=u[w];if(pe>=We){ke(Ne,v,I,!0);continue}let Ye;if(Ne.key!=null)Ye=ie.get(Ne.key);else for(se=G;se<=L;se++)if(Cn[se-G]===0&&jt(Ne,d[se])){Ye=se;break}Ye===void 0?ke(Ne,v,I,!0):(Cn[Ye-G]=w+1,Ye>=Ro?Ro=Ye:Zt=!0,P(Ne,d[Ye],g,null,v,I,S,E,T),pe++)}const Oo=Zt?Yu(Cn):rn;for(se=Oo.length-1,w=We-1;w>=0;w--){const Ne=G+w,Ye=d[Ne],No=Ne+1<D?d[Ne+1].el:_;Cn[w]===0?P(null,Ye,g,No,v,I,S,E,T):Zt&&(se<0||w!==Oo[se]?ze(Ye,g,No,2):se--)}}},ze=(u,d,g,_,v=null)=>{const{el:I,type:S,transition:E,children:T,shapeFlag:w}=u;if(w&6){ze(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){S.move(u,d,g,X);return}if(S===De){s(I,d,g);for(let N=0;N<T.length;N++)ze(T[N],d,g,_);s(u.anchor,d,g);return}if(S===ms){O(u,d,g);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(I),s(I,d,g),Ae(()=>E.enter(I),v);else{const{leave:N,delayLeave:L,afterLeave:H}=E,G=()=>s(I,d,g),ie=()=>{N(I,()=>{G(),H&&H()})};L?L(I,G,ie):ie()}else s(I,d,g)},ke=(u,d,g,_=!1,v=!1)=>{const{type:I,props:S,ref:E,children:T,dynamicChildren:w,shapeFlag:D,patchFlag:N,dirs:L}=u;if(E!=null&&Ar(E,null,g,u,!0),D&256){d.ctx.deactivate(u);return}const H=D&1&&L,G=!On(u);let ie;if(G&&(ie=S&&S.onVnodeBeforeUnmount)&&Xe(ie,d,u),D&6)y(u.component,g,_);else{if(D&128){u.suspense.unmount(g,_);return}H&&Dt(u,null,d,"beforeUnmount"),D&64?u.type.remove(u,d,g,v,X,_):w&&(I!==De||N>0&&N&64)?k(w,d,g,!1,!0):(I===De&&N&384||!v&&D&16)&&k(T,d,g),_&&Qt(u)}(G&&(ie=S&&S.onVnodeUnmounted)||H)&&Ae(()=>{ie&&Xe(ie,d,u),H&&Dt(u,null,d,"unmounted")},g)},Qt=u=>{const{type:d,el:g,anchor:_,transition:v}=u;if(d===De){rs(g,_);return}if(d===ms){V(u);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:E}=v,T=()=>S(g,I);E?E(u.el,I,T):T()}else I()},rs=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},y=(u,d,g)=>{const{bum:_,scope:v,update:I,subTree:S,um:E}=u;_&&ps(_),v.stop(),I&&(I.active=!1,ke(S,u,d,g)),E&&Ae(E,d),Ae(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},k=(u,d,g,_=!1,v=!1,I=0)=>{for(let S=I;S<u.length;S++)ke(u[S],d,g,_,v)},C=u=>u.shapeFlag&6?C(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),M=(u,d,g)=>{u==null?d._vnode&&ke(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,g),Vo(),Ca(),d._vnode=u},X={p:P,um:ke,m:ze,r:Qt,mt:Pe,mc:R,pc:ne,pbc:Y,n:C,o:t};let ue,q;return e&&([ue,q]=e(X)),{render:M,hydrate:ue,createApp:qu(M,ue)}}function Lt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ya(t,e,n=!1){const s=t.children,r=e.children;if(F(s)&&F(r))for(let o=0;o<s.length;o++){const i=s[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=_t(r[o]),a.el=i.el),n||Ya(i,a)),a.type===Vs&&(a.el=i.el)}}function Yu(t){const e=t.slice(),n=[0];let s,r,o,i,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(r=n[n.length-1],t[r]<c){e[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,t[n[a]]<c?o=a+1:i=a;c<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=e[i];return n}const Xu=t=>t.__isTeleport,De=Symbol(void 0),Vs=Symbol(void 0),He=Symbol(void 0),ms=Symbol(void 0),Mn=[];let qe=null;function Ie(t=!1){Mn.push(qe=t?null:[])}function Qu(){Mn.pop(),qe=Mn[Mn.length-1]||null}let Wn=1;function Zo(t){Wn+=t}function Xa(t){return t.dynamicChildren=Wn>0?qe||rn:null,Qu(),Wn>0&&qe&&qe.push(t),t}function $e(t,e,n,s,r,o){return Xa(m(t,e,n,s,r,o,!0))}function zs(t,e,n,s,r){return Xa(ee(t,e,n,s,r,!0))}function Ps(t){return t?t.__v_isVNode===!0:!1}function jt(t,e){return t.type===e.type&&t.key===e.key}const Ws="__vInternal",Qa=({key:t})=>t??null,_s=({ref:t,ref_key:e,ref_for:n})=>t!=null?ge(t)||de(t)||$(t)?{i:ve,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,o=t===De?0:1,i=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qa(e),ref:e&&_s(e),scopeId:Aa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ve};return a?(fo(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=ge(n)?8:16),Wn>0&&!i&&qe&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&qe.push(l),l}const ee=Zu;function Zu(t,e=null,n=null,s=0,r=null,o=!1){if((!t||t===ja)&&(t=He),Ps(t)){const a=Rt(t,e,!0);return n&&fo(a,n),Wn>0&&!o&&qe&&(a.shapeFlag&6?qe[qe.indexOf(t)]=a:qe.push(a)),a.patchFlag|=-2,a}if(ff(t)&&(t=t.__vccOpts),e){e=ef(e);let{class:a,style:l}=e;a&&!ge(a)&&(e.class=vn(a)),le(l)&&(ya(l)&&!F(l)&&(l=xe({},l)),e.style=vt(l))}const i=ge(t)?1:_u(t)?128:Xu(t)?64:le(t)?4:$(t)?2:0;return m(t,e,n,s,r,i,o,!0)}function ef(t){return t?ya(t)||Ws in t?xe({},t):t:null}function Rt(t,e,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=t,a=e?tf(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Qa(a),ref:e&&e.ref?n&&r?F(r)?r.concat(_s(e)):[r,_s(e)]:_s(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Rt(t.ssContent),ssFallback:t.ssFallback&&Rt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function be(t=" ",e=0){return ee(Vs,null,t,e)}function uo(t,e){const n=ee(ms,null,t);return n.staticCount=e,n}function Cs(t="",e=!1){return e?(Ie(),zs(He,null,t)):ee(He,null,t)}function Qe(t){return t==null||typeof t=="boolean"?ee(He):F(t)?ee(De,null,t.slice()):typeof t=="object"?_t(t):ee(Vs,null,String(t))}function _t(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Rt(t)}function fo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),fo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Ws in e)?e._ctx=ve:r===3&&ve&&(ve.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:ve},n=32):(e=String(e),s&64?(n=16,e=[be(e)]):n=8);t.children=e,t.shapeFlag|=n}function tf(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=vn([e.class,s.class]));else if(r==="style")e.style=vt([e.style,s.style]);else if(Ds(r)){const o=e[r],i=s[r];i&&o!==i&&!(F(o)&&o.includes(i))&&(e[r]=o?[].concat(o,i):i)}else r!==""&&(e[r]=s[r])}return e}function Xe(t,e,n,s=null){je(t,e,7,[n,s])}const nf=Ja();let sf=0;function rf(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||nf,o={uid:sf++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new ia(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wa(s,r),emitsOptions:ka(s,r),emit:null,emitted:null,propsDefaults:ce,inheritAttrs:s.inheritAttrs,ctx:ce,data:ce,props:ce,attrs:ce,slots:ce,refs:ce,setupState:ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=du.bind(null,o),t.ce&&t.ce(o),o}let ye=null;const Za=()=>ye||ve,pn=t=>{ye=t,t.scope.on()},Kt=()=>{ye&&ye.scope.off(),ye=null};function el(t){return t.vnode.shapeFlag&4}let Kn=!1;function of(t,e=!1){Kn=e;const{props:n,children:s}=t.vnode,r=el(t);Hu(t,n,r,e),zu(t,s);const o=r?af(t,e):void 0;return Kn=!1,o}function af(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=hn(new Proxy(t.ctx,Du));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?cf(t):null;pn(t),In();const o=Pt(s,t,0,[t.props,r]);if(xn(),Kt(),sa(o)){if(o.then(Kt,Kt),e)return o.then(i=>{ei(t,i,e)}).catch(i=>{Bs(i,t,0)});t.asyncDep=o}else ei(t,o,e)}else tl(t,e)}function ei(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:le(e)&&(t.setupState=Ia(e)),tl(t,n)}let ti;function tl(t,e,n){const s=t.type;if(!t.render){if(!e&&ti&&!s.render){const r=s.template||lo(t).template;if(r){const{isCustomElement:o,compilerOptions:i}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=xe(xe({isCustomElement:o,delimiters:a},i),l);s.render=ti(r,c)}}t.render=s.render||Ge}pn(t),In(),Lu(t),xn(),Kt()}function lf(t){return new Proxy(t.attrs,{get(e,n){return Ue(t,"get","$attrs"),e[n]}})}function cf(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=lf(t))},slots:t.slots,emit:t.emit,expose:e}}function Ks(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ia(hn(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Nn)return Nn[n](t)},has(e,n){return n in e||n in Nn}}))}function uf(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function ff(t){return $(t)&&"__vccOpts"in t}const Le=(t,e)=>iu(t,e,Kn);function nl(t,e,n){const s=arguments.length;return s===2?le(e)&&!F(e)?Ps(e)?ee(t,null,[e]):ee(t,e):ee(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ps(n)&&(n=[n]),ee(t,e,n))}const df=Symbol(""),hf=()=>et(df),pf="3.2.45",gf="http://www.w3.org/2000/svg",Ht=typeof document<"u"?document:null,ni=Ht&&Ht.createElement("template"),mf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ht.createElementNS(gf,t):Ht.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ht.createTextNode(t),createComment:t=>Ht.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ht.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,o){const i=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{ni.innerHTML=s?`<svg>${t}</svg>`:t;const a=ni.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function _f(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bf(t,e,n){const s=t.style,r=ge(n);if(n&&!r){for(const o in n)Rr(s,o,n[o]);if(e&&!ge(e))for(const o in e)n[o]==null&&Rr(s,o,"")}else{const o=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=o)}}const si=/\s*!important$/;function Rr(t,e,n){if(F(n))n.forEach(s=>Rr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=yf(t,e);si.test(n)?t.setProperty(En(s),n.replace(si,""),"important"):t[s]=n}}const ri=["Webkit","Moz","ms"],ir={};function yf(t,e){const n=ir[e];if(n)return n;let s=st(e);if(s!=="filter"&&s in t)return ir[e]=s;s=Us(s);for(let r=0;r<ri.length;r++){const o=ri[r]+s;if(o in t)return ir[e]=o}return e}const oi="http://www.w3.org/1999/xlink";function vf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(oi,e.slice(6,e.length)):t.setAttributeNS(oi,e,n);else{const o=gc(e);n==null||o&&!ta(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function wf(t,e,n,s,r,o,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,r,o),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n??"";(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ta(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function lt(t,e,n,s){t.addEventListener(e,n,s)}function Ef(t,e,n,s){t.removeEventListener(e,n,s)}function If(t,e,n,s,r=null){const o=t._vei||(t._vei={}),i=o[e];if(s&&i)i.value=s;else{const[a,l]=xf(e);if(s){const c=o[e]=Cf(s,r);lt(t,a,c,l)}else i&&(Ef(t,a,i,l),o[e]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function xf(t){let e;if(ii.test(t)){e={};let s;for(;s=t.match(ii);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let ar=0;const Tf=Promise.resolve(),Pf=()=>ar||(Tf.then(()=>ar=0),ar=Date.now());function Cf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;je(Sf(s,n.value),e,5,[s])};return n.value=t,n.attached=Pf(),n}function Sf(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ai=/^on[a-z]/,kf=(t,e,n,s,r=!1,o,i,a,l)=>{e==="class"?_f(t,s,r):e==="style"?bf(t,n,s):Ds(e)?qr(e)||If(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Af(t,e,s,r))?wf(t,e,s,o,i,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),vf(t,e,s,r))};function Af(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ai.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ai.test(e)&&ge(n)?!1:e in t}const Rf={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Eu.props;const Ot=t=>{const e=t.props["onUpdate:modelValue"]||!1;return F(e)?n=>ps(e,n):e};function Of(t){t.target.composing=!0}function li(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ct={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ot(r);const o=s||r.props&&r.props.type==="number";lt(t,e?"change":"input",i=>{if(i.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=Hn(a)),t._assign(a)}),n&&lt(t,"change",()=>{t.value=t.value.trim()}),e||(lt(t,"compositionstart",Of),lt(t,"compositionend",li),lt(t,"change",li))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},o){if(t._assign=Ot(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Hn(t.value)===e))return;const i=e??"";t.value!==i&&(t.value=i)}},Nf={deep:!0,created(t,e,n){t._assign=Ot(n),lt(t,"change",()=>{const s=t._modelValue,r=gn(t),o=t.checked,i=t._assign;if(F(s)){const a=Kr(s,r),l=a!==-1;if(o&&!l)i(s.concat(r));else if(!o&&l){const c=[...s];c.splice(a,1),i(c)}}else if(wn(s)){const a=new Set(s);o?a.add(r):a.delete(r),i(a)}else i(sl(t,o))})},mounted:ci,beforeUpdate(t,e,n){t._assign=Ot(n),ci(t,e,n)}};function ci(t,{value:e,oldValue:n},s){t._modelValue=e,F(e)?t.checked=Kr(e,s.props.value)>-1:wn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Gt(e,sl(t,!0)))}const Mf={created(t,{value:e},n){t.checked=Gt(e,n.props.value),t._assign=Ot(n),lt(t,"change",()=>{t._assign(gn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ot(s),e!==n&&(t.checked=Gt(e,s.props.value))}},Df={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=wn(e);lt(t,"change",()=>{const o=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Hn(gn(i)):gn(i));t._assign(t.multiple?r?new Set(o):o:o[0])}),t._assign=Ot(s)},mounted(t,{value:e}){ui(t,e)},beforeUpdate(t,e,n){t._assign=Ot(n)},updated(t,{value:e}){ui(t,e)}};function ui(t,e){const n=t.multiple;if(!(n&&!F(e)&&!wn(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],i=gn(o);if(n)F(e)?o.selected=Kr(e,i)>-1:o.selected=e.has(i);else if(Gt(gn(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function gn(t){return"_value"in t?t._value:t.value}function sl(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Or={created(t,e,n){fs(t,e,n,null,"created")},mounted(t,e,n){fs(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){fs(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){fs(t,e,n,s,"updated")}};function Lf(t,e){switch(t){case"SELECT":return Df;case"TEXTAREA":return Ct;default:switch(e){case"checkbox":return Nf;case"radio":return Mf;default:return Ct}}}function fs(t,e,n,s,r){const i=Lf(t.tagName,n.props&&n.props.type)[r];i&&i(t,e,n,s)}const $t={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Sn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Sn(t,!0),s.enter(t)):s.leave(t,()=>{Sn(t,!1)}):Sn(t,e))},beforeUnmount(t,{value:e}){Sn(t,e)}};function Sn(t,e){t.style.display=e?t._vod:"none"}const Uf=xe({patchProp:kf},mf);let fi;function Ff(){return fi||(fi=Gu(Uf))}const Bf=(...t)=>{const e=Ff().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=jf(s);if(!r)return;const o=e._component;!$(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function jf(t){return ge(t)?document.querySelector(t):t}var Hf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let rl;const qs=t=>rl=t,ol=Symbol();function Nr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Dn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Dn||(Dn={}));function $f(){const t=aa(!0),e=t.run(()=>so({}));let n=[],s=[];const r=hn({install(o){qs(r),r._a=o,o.provide(ol,r),o.config.globalProperties.$pinia=r,s.forEach(i=>n.push(i)),s=[]},use(o){return!this._a&&!Hf?s.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const il=()=>{};function di(t,e,n,s=il){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),s())};return!n&&Tc()&&Pc(r),r}function en(t,...e){t.slice().forEach(n=>{n(...e)})}function Mr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Nr(r)&&Nr(s)&&t.hasOwnProperty(n)&&!de(s)&&!Tt(s)?t[n]=Mr(r,s):t[n]=s}return t}const Vf=Symbol();function zf(t){return!Nr(t)||!t.hasOwnProperty(Vf)}const{assign:bt}=Object;function Wf(t){return!!(de(t)&&t.effect)}function Kf(t,e,n,s){const{state:r,actions:o,getters:i}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const f=nu(n.state.value[t]);return bt(f,o,Object.keys(i||{}).reduce((h,p)=>(h[p]=hn(Le(()=>{qs(n);const b=n._s.get(t);return i[p].call(b,b)})),h),{}))}return l=al(t,c,e,n,s,!0),l.$reset=function(){const h=r?r():{};this.$patch(p=>{bt(p,h)})},l}function al(t,e,n={},s,r,o){let i;const a=bt({actions:{}},n),l={deep:!0};let c,f,h=hn([]),p=hn([]),b;const x=s.state.value[t];!o&&!x&&(s.state.value[t]={}),so({});let P;function U(z){let R;c=f=!1,typeof z=="function"?(z(s.state.value[t]),R={type:Dn.patchFunction,storeId:t,events:b}):(Mr(s.state.value[t],z),R={type:Dn.patchObject,payload:z,storeId:t,events:b});const J=P=Symbol();oo().then(()=>{P===J&&(c=!0)}),f=!0,en(h,R,s.state.value[t])}const A=il;function B(){i.stop(),h=[],p=[],s._s.delete(t)}function O(z,R){return function(){qs(s);const J=Array.from(arguments),Y=[],fe=[];function me(_e){Y.push(_e)}function Oe(_e){fe.push(_e)}en(p,{args:J,name:z,store:K,after:me,onError:Oe});let Pe;try{Pe=R.apply(this&&this.$id===t?this:K,J)}catch(_e){throw en(fe,_e),_e}return Pe instanceof Promise?Pe.then(_e=>(en(Y,_e),_e)).catch(_e=>(en(fe,_e),Promise.reject(_e))):(en(Y,Pe),Pe)}}const V={_p:s,$id:t,$onAction:di.bind(null,p),$patch:U,$reset:A,$subscribe(z,R={}){const J=di(h,z,R.detached,()=>Y()),Y=i.run(()=>Rn(()=>s.state.value[t],fe=>{(R.flush==="sync"?f:c)&&z({storeId:t,type:Dn.direct,events:b},fe)},bt({},l,R)));return J},$dispose:B},K=Tn(V);s._s.set(t,K);const re=s._e.run(()=>(i=aa(),i.run(()=>e())));for(const z in re){const R=re[z];if(de(R)&&!Wf(R)||Tt(R))o||(x&&zf(R)&&(de(R)?R.value=x[z]:Mr(R,x[z])),s.state.value[t][z]=R);else if(typeof R=="function"){const J=O(z,R);re[z]=J,a.actions[z]=R}}return bt(K,re),bt(Z(K),re),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:z=>{U(R=>{bt(R,z)})}}),s._p.forEach(z=>{bt(K,i.run(()=>z({store:K,app:s._a,pinia:s,options:a})))}),x&&o&&n.hydrate&&n.hydrate(K.$state,x),c=!0,f=!0,K}function qf(t,e,n){let s,r;const o=typeof e=="function";typeof t=="string"?(s=t,r=o?n:e):(r=t,s=t.id);function i(a,l){const c=Za();return a=a||c&&et(ol,null),a&&qs(a),a=rl,a._s.has(s)||(o?al(s,e,r,a):Kf(s,r,a)),a._s.get(s)}return i.$id=s,i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const ll=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Gf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],i=t[n++],a=t[n++],l=((r&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|i&63)}}return e.join("")},cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],i=r+1<t.length,a=i?t[r+1]:0,l=r+2<t.length,c=l?t[r+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|c>>6,b=c&63;l||(b=64,i||(p=64)),s.push(n[f],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ll(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||c==null||h==null)throw Error();const p=o<<2|a>>4;if(s.push(p),c!==64){const b=a<<4&240|c>>2;if(s.push(b),h!==64){const x=c<<6&192|h;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Jf=function(t){const e=ll(t);return cl.encodeByteArray(e,!0)},ul=function(t){return Jf(t).replace(/\./g,"")},fl=function(t){try{return cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xf=()=>Yf().__FIREBASE_DEFAULTS__,Qf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fl(t[1]);return e&&JSON.parse(e)},ho=()=>{try{return Xf()||Qf()||Zf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ed=t=>{var e,n;return(n=(e=ho())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},td=()=>{var t;return(t=ho())===null||t===void 0?void 0:t.config},dl=t=>{var e;return(e=ho())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Te())}function rd(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function od(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function id(){const t=Te();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ad(){try{return typeof indexedDB=="object"}catch{return!1}}function ld(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="FirebaseError";class Nt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cd,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?ud(o,s):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new Nt(r,a,s)}}function ud(t,e){return t.replace(fd,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const fd=/\{\$([^}]+)}/g;function dd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],i=e[r];if(hi(o)&&hi(i)){if(!Ss(o,i))return!1}else if(o!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function hi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function hd(t,e){const n=new pd(t,e);return n.subscribe.bind(n)}class pd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=lr),r.error===void 0&&(r.error=lr),r.complete===void 0&&(r.complete=lr);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lr(){}/**
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
 */function Pn(t){return t&&t._delegate?t._delegate:t}class mn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ft="[DEFAULT]";/**
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
 */class md{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new nd;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bd(e))try{this.getOrInitializeService({instanceIdentifier:Ft})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Ft){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ft){return this.instances.has(e)}getOptions(e=Ft){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);s===a&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_d(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ft){return this.component?this.component.multipleInstances?e:Ft:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _d(t){return t===Ft?void 0:t}function bd(t){return t.instantiationMode==="EAGER"}/**
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
 */class yd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new md(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const vd={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},wd=ae.INFO,Ed={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Id=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=Ed[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hl{constructor(e){this.name=e,this._logLevel=wd,this._logHandler=Id,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const xd=(t,e)=>e.some(n=>t instanceof n);let pi,gi;function Td(){return pi||(pi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pd(){return gi||(gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pl=new WeakMap,Dr=new WeakMap,gl=new WeakMap,cr=new WeakMap,po=new WeakMap;function Cd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(St(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&pl.set(n,t)}).catch(()=>{}),po.set(e,t),e}function Sd(t){if(Dr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Dr.set(t,e)}let Lr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return St(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kd(t){Lr=t(Lr)}function Ad(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ur(this),e,...n);return gl.set(s,e.sort?e.sort():[e]),St(s)}:Pd().includes(t)?function(...e){return t.apply(ur(this),e),St(pl.get(this))}:function(...e){return St(t.apply(ur(this),e))}}function Rd(t){return typeof t=="function"?Ad(t):(t instanceof IDBTransaction&&Sd(t),xd(t,Td())?new Proxy(t,Lr):t)}function St(t){if(t instanceof IDBRequest)return Cd(t);if(cr.has(t))return cr.get(t);const e=Rd(t);return e!==t&&(cr.set(t,e),po.set(e,t)),e}const ur=t=>po.get(t);function Od(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),a=St(i);return s&&i.addEventListener("upgradeneeded",l=>{s(St(i.result),l.oldVersion,l.newVersion,St(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Nd=["get","getKey","getAll","getAllKeys","count"],Md=["put","add","delete","clear"],fr=new Map;function mi(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fr.get(e))return fr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Md.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Nd.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,r?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),r&&l.done]))[0]};return fr.set(e,o),o}kd(t=>({...t,get:(e,n,s)=>mi(e,n)||t.get(e,n,s),has:(e,n)=>!!mi(e,n)||t.has(e,n)}));/**
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
 */class Dd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ld(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ld(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ur="@firebase/app",_i="0.9.3";/**
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
 */const Yt=new hl("@firebase/app"),Ud="@firebase/app-compat",Fd="@firebase/analytics-compat",Bd="@firebase/analytics",jd="@firebase/app-check-compat",Hd="@firebase/app-check",$d="@firebase/auth",Vd="@firebase/auth-compat",zd="@firebase/database",Wd="@firebase/database-compat",Kd="@firebase/functions",qd="@firebase/functions-compat",Gd="@firebase/installations",Jd="@firebase/installations-compat",Yd="@firebase/messaging",Xd="@firebase/messaging-compat",Qd="@firebase/performance",Zd="@firebase/performance-compat",eh="@firebase/remote-config",th="@firebase/remote-config-compat",nh="@firebase/storage",sh="@firebase/storage-compat",rh="@firebase/firestore",oh="@firebase/firestore-compat",ih="firebase",ah="9.17.1";/**
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
 */const Fr="[DEFAULT]",lh={[Ur]:"fire-core",[Ud]:"fire-core-compat",[Bd]:"fire-analytics",[Fd]:"fire-analytics-compat",[Hd]:"fire-app-check",[jd]:"fire-app-check-compat",[$d]:"fire-auth",[Vd]:"fire-auth-compat",[zd]:"fire-rtdb",[Wd]:"fire-rtdb-compat",[Kd]:"fire-fn",[qd]:"fire-fn-compat",[Gd]:"fire-iid",[Jd]:"fire-iid-compat",[Yd]:"fire-fcm",[Xd]:"fire-fcm-compat",[Qd]:"fire-perf",[Zd]:"fire-perf-compat",[eh]:"fire-rc",[th]:"fire-rc-compat",[nh]:"fire-gcs",[sh]:"fire-gcs-compat",[rh]:"fire-fst",[oh]:"fire-fst-compat","fire-js":"fire-js",[ih]:"fire-js-all"};/**
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
 */const ks=new Map,Br=new Map;function ch(t,e){try{t.container.addComponent(e)}catch(n){Yt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qn(t){const e=t.name;if(Br.has(e))return Yt.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,t);for(const n of ks.values())ch(n,t);return!0}function ml(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const uh={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},kt=new Zn("app","Firebase",uh);/**
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
 */class fh{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=ah;function _l(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fr,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw kt.create("bad-app-name",{appName:String(r)});if(n||(n=td()),!n)throw kt.create("no-options");const o=ks.get(r);if(o){if(Ss(n,o.options)&&Ss(s,o.config))return o;throw kt.create("duplicate-app",{appName:r})}const i=new yd(r);for(const l of Br.values())i.addComponent(l);const a=new fh(n,s,i);return ks.set(r,a),a}function dh(t=Fr){const e=ks.get(t);if(!e&&t===Fr)return _l();if(!e)throw kt.create("no-app",{appName:t});return e}function cn(t,e,n){var s;let r=(s=lh[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Yt.warn(a.join(" "));return}qn(new mn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const hh="firebase-heartbeat-database",ph=1,Gn="firebase-heartbeat-store";let dr=null;function bl(){return dr||(dr=Od(hh,ph,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Gn)}}}).catch(t=>{throw kt.create("idb-open",{originalErrorMessage:t.message})})),dr}async function gh(t){try{return(await bl()).transaction(Gn).objectStore(Gn).get(yl(t))}catch(e){if(e instanceof Nt)Yt.warn(e.message);else{const n=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Yt.warn(n.message)}}}async function bi(t,e){try{const s=(await bl()).transaction(Gn,"readwrite");return await s.objectStore(Gn).put(e,yl(t)),s.done}catch(n){if(n instanceof Nt)Yt.warn(n.message);else{const s=kt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Yt.warn(s.message)}}}function yl(t){return`${t.name}!${t.options.appId}`}/**
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
 */const mh=1024,_h=30*24*60*60*1e3;class bh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=_h}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yi(),{heartbeatsToSend:n,unsentEntries:s}=yh(this._heartbeatsCache.heartbeats),r=ul(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function yi(){return new Date().toISOString().substring(0,10)}function yh(t,e=mh){const n=[];let s=t.slice();for(const r of t){const o=n.find(i=>i.agent===r.agent);if(o){if(o.dates.push(r.date),vi(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),vi(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class vh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ad()?ld().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return bi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function vi(t){return ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function wh(t){qn(new mn("platform-logger",e=>new Dd(e),"PRIVATE")),qn(new mn("heartbeat",e=>new bh(e),"PRIVATE")),cn(Ur,_i,t),cn(Ur,_i,"esm2017"),cn("fire-js","")}wh("");var Eh="firebase",Ih="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(Eh,Ih,"app");function go(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function vl(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xh=vl,wl=new Zn("auth","Firebase",vl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new hl("@firebase/auth");function bs(t,...e){wi.logLevel<=ae.ERROR&&wi.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,...e){throw mo(t,...e)}function tt(t,...e){return mo(t,...e)}function El(t,e,n){const s=Object.assign(Object.assign({},xh()),{[e]:n});return new Zn("auth","Firebase",s).create(e,{appName:t.name})}function Th(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&rt(t,"argument-error"),El(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function mo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return wl.create(t,...e)}function j(t,e,...n){if(!t)throw mo(e,...n)}function ct(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bs(e),new Error(e)}function dt(t,e){t||ct(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new Map;function ut(t){dt(t instanceof Function,"Expected a class definition");let e=Ei.get(t);return e?(dt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ei.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t,e){const n=ml(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(Ss(o,e??{}))return r;rt(r,"already-initialized")}return n.initialize({options:e})}function Ch(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ut);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Sh(){return Ii()==="http:"||Ii()==="https:"}function Ii(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sh()||rd()||"connection"in navigator)?navigator.onLine:!0}function Ah(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n){this.shortDelay=e,this.longDelay=n,dt(n>e,"Short delay should be less than long delay!"),this.isMobile=sd()||od()}get(){return kh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e){dt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ct("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ct("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ct("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=new ts(3e4,6e4);function Nh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Js(t,e,n,s,r={}){return xl(t,r,async()=>{let o={},i={};s&&(e==="GET"?i=s:o={body:JSON.stringify(s)});const a=es(Object.assign({key:t.config.apiKey},i)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Il.fetch()(Tl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function xl(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Rh),e);try{const r=new Dh(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw ds(t,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const a=o.ok?i.errorMessage:i.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ds(t,"credential-already-in-use",i);if(l==="EMAIL_EXISTS")throw ds(t,"email-already-in-use",i);if(l==="USER_DISABLED")throw ds(t,"user-disabled",i);const f=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw El(t,f,c);rt(t,f)}}catch(r){if(r instanceof Nt)throw r;rt(t,"network-request-failed")}}async function Mh(t,e,n,s,r={}){const o=await Js(t,e,n,s,r);return"mfaPendingCredential"in o&&rt(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Tl(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?_o(t.config,r):`${t.config.apiScheme}://${r}`}class Dh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(tt(this.auth,"network-request-failed")),Oh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ds(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=tt(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lh(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function Uh(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fh(t,e=!1){const n=Pn(t),s=await n.getIdToken(e),r=bo(s);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,i=o==null?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:Ln(hr(r.auth_time)),issuedAtTime:Ln(hr(r.iat)),expirationTime:Ln(hr(r.exp)),signInProvider:i||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function hr(t){return Number(t)*1e3}function bo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return bs("JWT malformed, contained fewer than 3 sections"),null;try{const r=fl(n);return r?JSON.parse(r):(bs("Failed to decode base64 JWT payload"),null)}catch(r){return bs("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Bh(t){const e=bo(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Nt&&jh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function jh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ln(this.lastLoginAt),this.creationTime=Ln(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function As(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Jn(t,Uh(n,{idToken:s}));j(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const i=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?zh(o.providerUserInfo):[],a=Vh(t.providerData,i),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=l?c:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Pl(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function $h(t){const e=Pn(t);await As(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vh(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function zh(t){return t.map(e=>{var{providerId:n}=e,s=go(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,e){const n=await xl(t,{},async()=>{const s=es({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,i=Tl(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Il.fetch()(i,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return j(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:o}=await Wh(e,n);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:o}=n,i=new Yn;return s&&(j(typeof s=="string","internal-error",{appName:e}),i.refreshToken=s),r&&(j(typeof r=="string","internal-error",{appName:e}),i.accessToken=r),o&&(j(typeof o=="number","internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yn,this.toJSON())}_performRefresh(){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,o=go(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Pl(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fh(this,e)}reload(){return $h(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await As(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jn(this,Lh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,o,i,a,l,c,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,x=(i=n.photoURL)!==null&&i!==void 0?i:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,A=(c=n.createdAt)!==null&&c!==void 0?c:void 0,B=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:V,isAnonymous:K,providerData:re,stsTokenManager:z}=n;j(O&&z,e,"internal-error");const R=Yn.fromJSON(this.name,z);j(typeof O=="string",e,"internal-error"),gt(h,e.name),gt(p,e.name),j(typeof V=="boolean",e,"internal-error"),j(typeof K=="boolean",e,"internal-error"),gt(b,e.name),gt(x,e.name),gt(P,e.name),gt(U,e.name),gt(A,e.name),gt(B,e.name);const J=new qt({uid:O,auth:e,email:p,emailVerified:V,displayName:h,isAnonymous:K,photoURL:x,phoneNumber:b,tenantId:P,stsTokenManager:R,createdAt:A,lastLoginAt:B});return re&&Array.isArray(re)&&(J.providerData=re.map(Y=>Object.assign({},Y))),U&&(J._redirectEventId=U),J}static async _fromIdTokenResponse(e,n,s=!1){const r=new Yn;r.updateFromServerResponse(n);const o=new qt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await As(o),o}}/**
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
 */class Cl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Cl.type="NONE";const xi=Cl;/**
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
 */function ys(t,e,n){return`firebase:${t}:${e}:${n}`}class un{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=ys(this.userKey,r.apiKey,o),this.fullPersistenceKey=ys("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new un(ut(xi),e,s);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=r[0]||ut(xi);const i=ys(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const f=await c._get(i);if(f){const h=qt._fromJSON(e,f);c!==o&&(a=h),o=c;break}}catch{}const l=r.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new un(o,e,s):(o=l[0],a&&await o._set(i,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(i)}catch{}})),new un(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Al(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ol(e))return"Blackberry";if(Nl(e))return"Webos";if(yo(e))return"Safari";if((e.includes("chrome/")||kl(e))&&!e.includes("edge/"))return"Chrome";if(Rl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Sl(t=Te()){return/firefox\//i.test(t)}function yo(t=Te()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kl(t=Te()){return/crios\//i.test(t)}function Al(t=Te()){return/iemobile/i.test(t)}function Rl(t=Te()){return/android/i.test(t)}function Ol(t=Te()){return/blackberry/i.test(t)}function Nl(t=Te()){return/webos/i.test(t)}function Ys(t=Te()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Kh(t=Te()){var e;return Ys(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qh(){return id()&&document.documentMode===10}function Ml(t=Te()){return Ys(t)||Rl(t)||Nl(t)||Ol(t)||/windows phone/i.test(t)||Al(t)}function Gh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(t,e=[]){let n;switch(t){case"Browser":n=Ti(Te());break;case"Worker":n=`${Ti(Te())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}/**
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
 */class Jh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((i,a)=>{try{const l=e(o);i(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pi(this),this.idTokenSubscription=new Pi(this),this.beforeStateQueue=new Jh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ut(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await un.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!i||i===a)&&(l!=null&&l.user)&&(r=l.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await As(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Ah()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pn(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ut(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ut(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await un.create(this,[ut(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),i=this._isInitialized?Promise.resolve():this._initializationPromise;return j(i,this,"internal-error"),i.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Xs(t){return Pn(t)}class Pi{constructor(e){this.auth=e,this.observer=null,this.addObserver=hd(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Xh(t,e,n){const s=Xs(t);j(s._canInitEmulator,s,"emulator-config-failed"),j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),o=Ll(e),{host:i,port:a}=Qh(e),l=a===null?"":`:${a}`;s.config.emulator={url:`${o}//${i}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:i,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Zh()}function Ll(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Qh(t){const e=Ll(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:Ci(s.substr(o.length+1))}}else{const[o,i]=s.split(":");return{host:o,port:Ci(i)}}}function Ci(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Zh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ct("not implemented")}_getIdTokenResponse(e){return ct("not implemented")}_linkToIdToken(e,n){return ct("not implemented")}_getReauthenticationResolver(e){return ct("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return Mh(t,"POST","/v1/accounts:signInWithIdp",Nh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ep="http://localhost";class Xt extends Ul{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,o=go(n,["providerId","signInMethod"]);if(!s||!r)return null;const i=new Xt(s,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const n=this.buildRequest();return fn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,fn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fn(e,n)}buildRequest(){const e={requestUri:ep,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=es(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ns extends vo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends ns{constructor(){super("facebook.com")}static credential(e){return Xt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wt.credential(e.oauthAccessToken)}catch{return null}}}wt.FACEBOOK_SIGN_IN_METHOD="facebook.com";wt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends ns{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xt._fromParams({providerId:Se.PROVIDER_ID,signInMethod:Se.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Se.credentialFromTaggedObject(e)}static credentialFromError(e){return Se.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Se.credential(n,s)}catch{return null}}}Se.GOOGLE_SIGN_IN_METHOD="google.com";Se.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends ns{constructor(){super("github.com")}static credential(e){return Xt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.GITHUB_SIGN_IN_METHOD="github.com";Et.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ns{constructor(){super("twitter.com")}static credential(e,n){return Xt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return It.credential(n,s)}catch{return null}}}It.TWITTER_SIGN_IN_METHOD="twitter.com";It.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const o=await qt._fromIdTokenResponse(e,s,r),i=Si(s);return new _n({user:o,providerId:i,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Si(s);return new _n({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Si(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Nt{constructor(e,n,s,r){var o;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Rs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Rs(e,n,s,r)}}function Fl(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Rs._fromErrorAndOperation(t,o,e,s):o})}async function tp(t,e,n=!1){const s=await Jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",s)}/**
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
 */async function np(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const o=await Jn(t,Fl(s,r,e,t),n);j(o.idToken,s,"internal-error");const i=bo(o.idToken);j(i,s,"internal-error");const{sub:a}=i;return j(t.uid===a,s,"user-mismatch"),_n._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&rt(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e,n=!1){const s="signIn",r=await Fl(t,s,e),o=await _n._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}function rp(t,e,n,s){return Pn(t).onIdTokenChanged(e,n,s)}function op(t,e,n){return Pn(t).beforeAuthStateChanged(e,n)}const Os="__sak";/**
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
 */class Bl{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Os,"1"),this.storage.removeItem(Os),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ip(){const t=Te();return yo(t)||Ys(t)}const ap=1e3,lp=10;class jl extends Bl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ip()&&Gh(),this.fallbackToPolling=Ml(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((i,a,l)=>{this.notifyListeners(i,l)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(s);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const i=this.storage.getItem(s);!n&&this.localCache[s]===i||this.notifyListeners(s,i)},o=this.storage.getItem(s);qh()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,lp):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jl.type="LOCAL";const cp=jl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Bl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hl.type="SESSION";const $l=Hl;/**
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
 */function up(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Qs(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:o}=n.data,i=this.handlersMap[r];if(!(i!=null&&i.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(i).map(async c=>c(n.origin,o)),l=await up(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class fp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((a,l)=>{const c=wo("",20);r.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},s);i={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(f),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){return window}function dp(t){nt().location.href=t}/**
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
 */function Vl(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function hp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pp(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function gp(){return Vl()?self:null}/**
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
 */const zl="firebaseLocalStorageDb",mp=1,Ns="firebaseLocalStorage",Wl="fbase_key";class ss{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Zs(t,e){return t.transaction([Ns],e?"readwrite":"readonly").objectStore(Ns)}function _p(){const t=indexedDB.deleteDatabase(zl);return new ss(t).toPromise()}function Hr(){const t=indexedDB.open(zl,mp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Ns,{keyPath:Wl})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Ns)?e(s):(s.close(),await _p(),e(await Hr()))})})}async function ki(t,e,n){const s=Zs(t,!0).put({[Wl]:e,value:n});return new ss(s).toPromise()}async function bp(t,e){const n=Zs(t,!1).get(e),s=await new ss(n).toPromise();return s===void 0?null:s.value}function Ai(t,e){const n=Zs(t,!0).delete(e);return new ss(n).toPromise()}const yp=800,vp=3;class Kl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Hr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>vp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qs._getInstance(gp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hp(),!this.activeServiceWorker)return;this.sender=new fp(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pp()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Hr();return await ki(e,Os,"1"),await Ai(e,Os),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>ki(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>bp(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ai(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Zs(r,!1).getAll();return new ss(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kl.type="LOCAL";const wp=Kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ip(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const o=tt("internal-error");o.customData=r,n(o)},s.type="text/javascript",s.charset="UTF-8",Ep().appendChild(s)})}function xp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new ts(3e4,6e4);/**
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
 */function ql(t,e){return e?ut(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Eo extends Ul{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Tp(t){return sp(t.auth,new Eo(t),t.bypassAuthState)}function Pp(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),np(n,new Eo(t),t.bypassAuthState)}async function Cp(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),tp(n,new Eo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:o,error:i,type:a}=e;if(i){this.reject(i);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Tp;case"linkViaPopup":case"linkViaRedirect":return Cp;case"reauthViaPopup":case"reauthViaRedirect":return Pp;default:rt(this.auth,"internal-error")}}resolve(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new ts(2e3,1e4);async function Jl(t,e,n){const s=Xs(t);Th(t,e,vo);const r=ql(s,n);return new zt(s,"signInViaPopup",e,r).executeNotNull()}class zt extends Gl{constructor(e,n,s,r,o){super(e,n,r,o),this.provider=s,this.authWindow=null,this.pollId=null,zt.currentPopupAction&&zt.currentPopupAction.cancel(),zt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){dt(this.filter.length===1,"Popup operations only handle one event");const e=wo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Sp.get())};e()}}zt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="pendingRedirect",vs=new Map;class Ap extends Gl{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vs.get(this.auth._key());if(!e){try{const s=await Rp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vs.set(this.auth._key(),e)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rp(t,e){const n=Mp(e),s=Np(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function Op(t,e){vs.set(t._key(),e)}function Np(t){return ut(t._redirectPersistence)}function Mp(t){return ys(kp,t.config.apiKey,t.name)}async function Dp(t,e,n=!1){const s=Xs(t),r=ql(s,e),i=await new Ap(s,r,n).execute();return i&&!n&&(delete i.user._redirectEventId,await s._persistUserIfCurrent(i.user),await s._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lp=10*60*1e3;class Up{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Yl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(tt(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Lp&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ri(e))}saveEventToCache(e){this.cachedEventUids.add(Ri(e)),this.lastProcessedEventTime=Date.now()}}function Ri(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bp(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hp=/^https?/;async function $p(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Bp(t);for(const n of e)try{if(Vp(n))return}catch{}rt(t,"unauthorized-domain")}function Vp(t){const e=jr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===s}if(!Hp.test(n))return!1;if(jp.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const zp=new ts(3e4,6e4);function Oi(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Wp(t){return new Promise((e,n)=>{var s,r,o;function i(){Oi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oi(),n(tt(t,"network-request-failed"))},timeout:zp.get()})}if(!((r=(s=nt().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=nt().gapi)===null||o===void 0)&&o.load)i();else{const a=xp("iframefcb");return nt()[a]=()=>{gapi.load?i():n(tt(t,"network-request-failed"))},Ip(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ws=null,e})}let ws=null;function Kp(t){return ws=ws||Wp(t),ws}/**
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
 */const qp=new ts(5e3,15e3),Gp="__/auth/iframe",Jp="emulator/auth/iframe",Yp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Xp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Qp(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_o(e,Jp):`https://${t.config.authDomain}/${Gp}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},r=Xp.get(t.config.apiHost);r&&(s.eid=r);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${es(s).slice(1)}`}async function Zp(t){const e=await Kp(t),n=nt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:Qp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yp,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const i=tt(t,"network-request-failed"),a=nt().setTimeout(()=>{o(i)},qp.get());function l(){nt().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{o(i)})}))}/**
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
 */const eg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tg=500,ng=600,sg="_blank",rg="http://localhost";class Ni{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function og(t,e,n,s=tg,r=ng){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),i=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},eg),{width:s.toString(),height:r.toString(),top:o,left:i}),c=Te().toLowerCase();n&&(a=kl(c)?sg:n),Sl(c)&&(e=e||rg,l.scrollbars="yes");const f=Object.entries(l).reduce((p,[b,x])=>`${p}${b}=${x},`,"");if(Kh(c)&&a!=="_self")return ig(e||"",a),new Ni(null);const h=window.open(e||"",a,f);j(h,t,"popup-blocked");try{h.focus()}catch{}return new Ni(h)}function ig(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const ag="__/auth/handler",lg="emulator/auth/handler";function Mi(t,e,n,s,r,o){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:r};if(e instanceof vo){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",dd(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))i[l]=c}if(e instanceof ns){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(i.scopes=l.join(","))}t.tenantId&&(i.tid=t.tenantId);const a=i;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${cg(t)}?${es(a).slice(1)}`}function cg({config:t}){return t.emulator?_o(t,lg):`https://${t.authDomain}/${ag}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="webStorageSupport";class ug{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=Dp,this._overrideRedirectResult=Op}async _openPopup(e,n,s,r){var o;dt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Mi(e,n,s,jr(),r);return og(e,i,wo())}async _openRedirect(e,n,s,r){return await this._originValidation(e),dp(Mi(e,n,s,jr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(dt(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await Zp(e),s=new Up(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pr,{type:pr},r=>{var o;const i=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[pr];i!==void 0&&n(!!i),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=$p(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ml()||yo()||Ys()}}const fg=ug;var Di="@firebase/auth",Li="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pg(t){qn(new mn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:o,authDomain:i}=s.options;return((a,l)=>{j(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),j(!(i!=null&&i.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dl(t)},f=new Yh(a,l,c);return Ch(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),qn(new mn("auth-internal",e=>{const n=Xs(e.getProvider("auth").getImmediate());return(s=>new dg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Di,Li,hg(t)),cn(Di,Li,"esm2017")}/**
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
 */const gg=5*60,mg=dl("authIdTokenMaxAge")||gg;let Ui=null;const _g=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>mg)return;const r=n==null?void 0:n.token;Ui!==r&&(Ui=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Io(t=dh()){const e=ml(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ph(t,{popupRedirectResolver:fg,persistence:[wp,cp,$l]}),s=dl("authTokenSyncURL");if(s){const o=_g(s);op(n,o,()=>o(n.currentUser)),rp(n,i=>o(i))}const r=ed("auth");return r&&Xh(n,`http://${r}`),n}pg("Browser");const Be=qf("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",lang:"ru",langProp:{ru:{lang:"Язык",catalogue:"Каталог",about:"О нас",blog:"Блог",contacts:"Контакты",entrance:"Вход",registeration:"Регистрация",loginWithGoogle:"Вход через Google",enterEmail:"Введите Email",enterPassword:"Введите пароль",password:"Пароль",confirmThePassword:"Подтвердите пароль",username:"Имя пользователя",minimumNumberOfSymbols:"Минимальное кол-во символов",passwordMismatch:"Пароли не совпадают",toComeIn:"Войти",doYouAlreadyHaveAnAccount:"У Вас уже есть аккаунт?",forgotYourPassword:"Забыли пароль?",dontHaveAnAccountYet:"У Вас еще нет аккаунта?",create:"Создать",aboutUs:"О нас",aboutUsP1:"Мы рады приветствовать Вас на нашем семейном производстве экологически чистых продуктов",aboutUsP2:"Наше небольшое семейное производство берет свое начало в далеком 1996 году, а началось все с того, что наш папа решил завести несколько пчелиных семей и начал постигать основы общения с пчелами, изучать их нрав и поведение. Изначально пчел у нас было не много, всего 16 семей Среднерусской породы, за тем по мере углубления в изучение пчеловодства мы экспериментировали и заводили другие породы пчел:",aboutUsP3:"в 2000 году мы заводили Карпатскую породу пчел, порядка 15 семей, в 2014 перешли на породу Карника и увеличили количество семей уже до 40, а к 2020 году увеличили количество семей этой породы до 235. С 2022 года мы оставили 110 семей пород Бакфаст и Карника.",aboutUsP4:"Экологически чистое место расположение нашей пасеки в высокогорье Джалал-Абадской области обеспечивает высокое качество продукта, чистый горный воздух, обширные луга с разными травами, кристально-чистая вода горных рек ледникового происхождения, все это делает наш мед неповторимым по составу и качеству.",aboutUsP5:"Приобретая нашу продукцию Вы обеспечиваете здоровье и долголетие Вас и Вашей семьи!",blogP1:"Интересные факты про мед",blogP2:"Мед — очень полезный продукт питания. Настоящий мед делают только пчелы. Благодаря большому содержанию полезных веществ этот продукт обладает целебными свойствами. Самые интересные факты о мёде — в этой статье. В 1985 году перуанские наркодиллеры выпускали пчел прямо на поля с цветущим коки. Насекомые собрали наркотический мед, который был конфискован на границе. Для изготовления литра меда пчелы собирают 2,5 литра нектара. Испанцы добавляют мед к искусственному питанию детей, болеющих желтухой или болезнями крови.",blogP3:"Цветочный мед",blogP4:"Сложность цветочного медав том, что привести его к какой-то одной характеристике по внешнему виду невозможно. Цвет и запах зависит от того, где и с каких растений он был собран. Наиболее часто встречающиеся разновидности по цвету - светло-желтый или оранжевый мед. Также на рынке можно встретить янтарные оттенки меда, золотистые, темно-коричневые. Чуть реже встречается мед зеленоватого оттенка. Что касается запаха, то здесь обязательно превалируют цветочные ароматы, часто слышатся фруктовые нотки. Есть включения сладкого или пряного аромата. На вкус цветочный мед - очень деликатный, нежный, послевкусие - продолжительное. В меде чувствуется приятный травяной привкус.",feedback:"Обратная связь",address:"Адрес:",kyrgyzstan:"Кыргызстан",street:"ул.Киевская 77",telephone:"Телефон:",telephone_1:"Телефон",socialNetworks:"Соц. сети:",contactUs:"Свяжитесь с нами",yourName:"Ваше Имя",message:"Сообщение",send:"Отправить",reset:"Сбросить"},en:{lang:"Lang",catalogue:"Products",about:"About us",blog:"Blog",contacts:"Contacts",entrance:"Entrance",registeration:"Registration",loginWithGoogle:"Login with Google",enterEmail:"Enter Email",enterPassword:"Enter password",password:"Password",confirmThePassword:"Confirm the password",username:"Username",minimumNumberOfSymbols:"Minimum number of symbols",passwordMismatch:"Password mismatch",toComeIn:"To come in",doYouAlreadyHaveAnAccount:"Do you already have an account?",forgotYourPassword:"Forgot your password?",dontHaveAnAccountYet:"Do not have an account yet?",create:"Create",aboutUs:"About Us",aboutUsP1:"We are pleased to welcome you to our family-run production of organic products",aboutUsP2:"Our small family business dates back to 1996, and it all started with the fact that our dad decided to start several bee colonies and began to comprehend the basics of communication with bees, to study their temper and behavior. Initially, we did not have many bees, only 16 families of the Central Russian breed, then, as we deepened in studying beekeeping, we experimented and started other breeds of bees:",aboutUsP3:"in 2000 we started the Carpathian breed of bees, about 15 families, in 2014 we switched to the Karnika breed and increased the number of families is already up to 40, and by 2020 the number of families of this breed has been increased to 235. Since 2022, we have left 110 families of Buckfast and Karnika breeds.",aboutUsP4:"An ecologically clean place, the location of our apiary in the highlands of the Jalal-Abad region provides high product quality, clean mountain air, vast meadows with various herbs, crystal clear mountain water rivers of glacial origin, all this makes our honey unique in composition and quality.",aboutUsP5:"By purchasing our products you ensure the health and longevity of you and your family!",blogP1:"Interesting facts about honey",blogP2:"Honey is a very useful food product. Only bees make real honey. Thanks to the great content nutrients this product has healing properties. The most interesting facts about honey - in this article. In 1985, Peruvian drug dealers released bees into coca fields. Insects collected narcotic honey that was confiscated at the border. To make a liter of honey, bees collect 2.5 liters of nectar. The Spaniards add honey to the artificial nutrition of children suffering from jaundice or blood diseases.",blogP3:"Flower honey",blogP4:"The complexity of flower honey is that it is impossible to bring it to any one characteristic in appearance. The color and smell depends on where and from which plants it was collected. The most common varieties in color are light yellow or orange honey. Also on the market you can find amber shades of honey, golden, dark brown. Slightly less common is honey of a greenish hue. As for the smell, floral aromas definitely prevail here, fruity notes are often heard. There are inclusions of a sweet or spicy aroma. The taste of flower honey is very delicate, delicate, the aftertaste is long. Honey has a pleasant herbal flavor.",feedback:"Feedback",address:"Address:",kyrgyzstan:"Kyrgyzstan",street:"Kievskaya street 77",telephone:"Telephone:",socialNetworks:"Social networks:",contactUs:"Contact us",yourName:"Your name",telephone_1:"Telephone",message:"Message",send:"Send",reset:"Reset"},kg:{lang:"Тил",catalogue:"Каталог",about:"Биз жөнүндө",blog:"Блог",contacts:"Байланыштар",entrance:"Кире бериш",registeration:"Каттоо",loginWithGoogle:"Google менен кириңиз",enterEmail:"Электрондук почтаны киргизиңиз",enterPassword:"Сырсөздү киргизиңиз",password:"Купуя сөз",confirmThePassword:"Сырсөздү ырастаңыз",username:"Колдонуучунун аты",minimumNumberOfSymbols:"Символдордун минималдуу саны",passwordMismatch:"Сырсөз дал келбейт",toComeIn:"Кирүү үчүн",doYouAlreadyHaveAnAccount:"Сиздин аккаунтуңуз барбы?",forgotYourPassword:"Сыр сөзүңүздү унуттуңузбу?",dontHaveAnAccountYet:"Азырынча аккаунтуңуз жокпу?",create:"Түзүү",aboutUs:"Биз жөнүндө",aboutUsP1:"Сизди биздин үй-бүлөбүздүн органикалык өндүрүшүндө тосуп алууга кубанычтабыз	буюмдар",aboutUsP2:"Биздин чакан үй-бүлөлүк бизнесибиз 1996-жылдан бери башталган жана анын баары биздин ата бир нече аары колонияларын түзүүнү чечти жана аарылар менен баарлашуунун негиздерин түшүнө баштады, алардын мүнөзүн жана мүнөзүн изилдей баштады. жүрүм-турум. Адегенде бизде аарылар көп болгон эмес, болгону 16 үй-бүлө Борбордук орус породасындагы, андан кийин тереңдеген сайын окуп жатат аарычылык, биз эксперимент жүргүзүп, аарылардын башка породаларын баштадык:",aboutUsP3:"2000-жылы аарылардын Карпат породасын, 15ке жакын үй-бүлөнү, 2014-жылы Карника породасын жана көбөйдү үй-бүлөлөрдүн саны 40ка жетти, ал эми 2020-жылга чейин бул породадагы үй-бүлөлөрдүн саны 235ке чейин көбөйтүлдү. 2022-жылдан бери биз Бакфаст жана Карника породаларынын 110 үй-бүлөсүн калтырдык.",aboutUsP4:"Экологиялык жактан таза жер, биздин бал челектин Жалал-Абад облусунун бийик тоолуу аймагында жайгашканы бийик продукциянын сапаты, таза тоонун абасы, ар кандай чөптөр өскөн кең шалбаалар, тунук тоо суулары дарыялар мөңгүдөн келип чыккан, мунун баары биздин балды курамы жана сапаты боюнча уникалдуу кылат.",aboutUsP5:"Биздин продукцияларды сатып алуу менен сиз өзүңүздүн жана үй-бүлөңүздүн ден соолугун жана узак өмүрүн камсыздайсыз!",blogP1:"Бал жөнүндө кызыктуу фактылар",blogP2:"Бал абдан пайдалуу тамак-аш продуктусу. Чыныгы балды аарылар гана жасайт. Улууга рахмат мазмун бул продукт дарылык касиетке ээ. Бал жөнүндө эң кызыктуу фактылар - жылы бул макала. 1985-жылы Перулук баңгизат сатуучулар аарыларды кока талааларына кое беришкен. Курт-кумурскалар чогултулган чек арадан алынган наркотикалык бал. Бир литр бал алуу үчүн аарылар 2,5 литр шире чогултат. Испаниялыктар сарык же кан оорулары менен ооруган балдардын жасалма тамактануусуна бал кошуп беришет.",blogP3:"Гүл бал",blogP4:"Гүл балынын татаалдыгы, аны сырткы көрүнүшү боюнча кандайдыр бир өзгөчөлүккө алып келүү мүмкүн эмес. Түсү жана жыты анын кайдан жана кайсы өсүмдүктөрдөн чогултулганына жараша болот. түсү көп таралган сорттору ачык сары же кызгылт сары бал болуп саналат. Ошондой эле рынокто бал, алтын, кара күрөң янтарь көлөкөлөрүн таба аласыз. Бир аз таралган жашыл түстөгү бал. Жытка келсек, бул жерде сөзсүз түрдө гүл жыттары басымдуулук кылат, мөмөлүү ноталар көп угулат. таттуу же ачуу жыпар жыттуу кошулмалар бар. Гүлдүн балынын даамы өтө назик, назик, даамы узун. Балдын жагымдуу чөп даамы бар.",feedback:"Кайра Байланыш",address:"Дарек:",kyrgyzstan:"Кыргызстан",street:"Киев көчөсү 77",telephone:"Телефон:",socialNetworks:"Социалдык тармактар:",contactUs:"Биз менен байланыш",yourName:"Сиздин атыңыз",telephone_1:"Телефон",message:"Кабар",send:"Жөнөтүү",reset:"Калыбына келтирүү"}}})}),xo="/assets/Telegram-c178456d.svg",To="/assets/WhatsApp-64705ce5.svg",Po="/assets/Instagram-d32ffc78.svg",ot=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},bg={props:{buttonName:String},data:()=>({contact:!1,store:Be()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},yg={class:"grid overflow-scroll [&_*]:font-roboto"},vg={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1"},wg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},Eg=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),Ig={class:"grid grid-cols-2"},xg={class:"text-3xl mb-[5px] font-semibold font-roboto"},Tg={class:"text-2xl font-roboto"},Pg={class:"text-2xl mb-[20px] font-roboto"},Cg={class:"text-3xl mb-[5px] font-roboto font-semibold"},Sg=m("p",{class:"text-2xl mb-[20px] font-roboto"},"+996779454233",-1),kg={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},Ag={class:"text-3xl font-roboto font-semibold"},Rg=uo('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+xo+'" alt=""></a><p class="text-2xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+To+'" alt=""></a><p class="text-2xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+Po+'" alt=""></a><p class="text-2xl font-roboto">crafthoney.kg</p></div>',3),Og=m("div",null,[m("p",{class:"text-3xl mb-[5px] font-roboto font-semibold"},"E-mail:"),m("p",{class:"text-2xl font-roboto"},"crafthoneykg@gmail.com")],-1);function Ng(t,e,n,s,r,o){return Ie(),$e("div",yg,[m("div",vg,[m("span",wg,W(t.store.langProp[t.store.lang].contacts),1),Eg,m("button",{onClick:e[0]||(e[0]=i=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},W(t.store.langProp[t.store.lang].feedback),1)]),m("div",Ig,[m("div",null,[m("p",xg,W(t.store.langProp[t.store.lang].address),1),m("p",Tg,"770033, "+W(t.store.langProp[t.store.lang].kyrgyzstan),1),m("p",Pg,W(t.store.langProp[t.store.lang].street),1)]),m("div",null,[m("p",Cg,W(t.store.langProp[t.store.lang].telephone),1),Sg]),m("div",kg,[m("p",Ag,W(t.store.langProp[t.store.lang].socialNetworks),1),Rg]),Og])])}const Xl=ot(bg,[["render",Ng]]),Mg="/assets/drawing-9a7198cf.svg",Dg="/assets/CraftHoney-0d412893.svg",Lg="/assets/menu-694c5a76.svg",Ug="/assets/account_circle-229cba33.svg",Fg="/assets/shopping_cart-809c2612.svg",Bg="/assets/Register_1-5c661edd.svg",jg="/assets/Enter_1-7f28cdb9.svg",Hg={data(){return{burgerMenu:!1,store:Be()}},components:{Contacts:Xl},mounted(){console.log(this.$route)}},$g={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},Vg={class:"grid grid-flow-col gap-[40px] items-center"},zg=m("img",{class:"self-center w-[60px] inline",src:Mg},null,-1),Wg=m("img",{class:"ml-[10px] self-center w-[120px] inline",src:Dg},null,-1),Kg={key:0,class:"text-xl [&>a]:mr-[30px] max-[1200px]:hidden"},qg={class:"grid min-[1201px]:hidden"},Gg={class:"grid grid-flow-col gap-[40px] items-center max-[1200px]:hidden"},Jg={class:"flex items-center"},Yg=m("img",{class:"mr-[10px] w-[24px]",src:Ug},null,-1),Xg={class:""},Qg=m("img",{class:"w-[22px] max-[800px]:hidden",src:Fg,alt:""},null,-1),Zg={class:"text-xl"},em={class:"ml-[8px] hover:cursor-pointer px-1",name:"lang",id:""},tm={selected:"",disabled:"",hidden:""},nm=uo('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+To+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+xo+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Po+'" alt=""></a></div>',1),sm={class:""},rm={class:"flex flex-col justify-center [&>*]:px-[10px]"},om=m("strong",null,"X",-1),im=[om],am={class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},lm=m("img",{class:"w-[24px] h-24[px] mr-[10px]",src:Bg,alt:""},null,-1),cm=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:jg,alt:""},null,-1),um=uo('<div class="my-[20px] px-[10px]"><div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+To+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+xo+'" alt=""></a></div></div><p class="my-[10px]">Адрес: 770033,Кыргызстан <br>ул.Киевская,77</p><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+Po+'" alt=""></a></div>',1);function fm(t,e,n,s,r,o){const i=Jt("router-link");return Ie(),$e("header",$g,[m("div",Vg,[m("div",null,[ee(i,{class:"flex max-w-fit",to:t.$route.matched[0].path+"/home"},{default:Re(()=>[zg,Wg]),_:1},8,["to"])]),t.$route.name!="Home"?(Ie(),$e("div",Kg,[ee(i,{to:"/Products"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),ee(i,{to:"/about"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].about),1)]),_:1}),ee(i,{to:"/Blog"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=a=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},W(r.store.langProp[r.store.lang].contacts),1)])):Cs("",!0)]),m("div",qg,[m("img",{onClick:e[1]||(e[1]=a=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:Lg})]),m("div",Gg,[m("div",Jg,[Yg,m("button",{class:"text-xl text-center",onClick:e[2]||(e[2]=a=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},W(r.store.langProp[r.store.lang].entrance),1)]),m("div",Xg,[ee(i,{to:"/ru/Checkout"},{default:Re(()=>[Qg]),_:1})]),m("div",null,[m("p",Zg,[be(W(r.store.langProp[r.store.lang].lang)+": ",1),m("select",em,[m("option",tm,W(r.store.lang),1),m("option",{onClick:e[3]||(e[3]=a=>r.store.lang="rus"),value:""},"RUS"),m("option",{onClick:e[4]||(e[4]=a=>r.store.lang="en"),value:""},"ENG"),m("option",{onClick:e[5]||(e[5]=a=>r.store.lang="kyr"),value:""},"KYR")])])]),nm]),m("div",{class:vn(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[m("div",sm,[m("div",rm,[m("button",{onClick:e[6]||(e[6]=a=>r.burgerMenu=!1),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right"},im),ee(i,{to:"/Products",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Re(()=>[be("Каталог")]),_:1}),ee(i,{to:"/about",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Re(()=>[be("О нас")]),_:1}),ee(i,{to:"/Blog",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Re(()=>[be("Блог")]),_:1}),m("button",{onClick:e[7]||(e[7]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},"Контакты")]),m("div",am,[m("button",{onClick:e[8]||(e[8]=a=>(r.store.bg="bg-bee",r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[lm,be("Регистрация")]),m("button",{onClick:e[9]||(e[9]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[cm,be("Вход")])]),um])],2)])}const dm=ot(Hg,[["render",fm]]),hm={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",store:Be()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail=""}}},pm={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},gm={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},mm=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),_m={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},bm={class:"text-3xl justify-self-center font-roboto"},ym=["placeholder"],vm={class:"grid grid-cols-2 gap-[20px]"},wm=["placeholder"],Em=m("textarea",{class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,-1),Im={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},xm={class:"bg-[#EAAD02] text-white rounded-[5px]"};function Tm(t,e,n,s,r,o){return Ie(),$e("div",pm,[m("div",gm,[m("button",{onClick:e[0]||(e[0]=i=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},W(t.store.langProp[t.store.lang].contacts),1),mm,m("span",_m,W(t.store.langProp[t.store.lang].feedback),1)]),m("h2",bm,W(t.store.langProp[t.store.lang].contactUs),1),we(m("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>t.inputValueName=i),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:t.store.langProp[t.store.lang].yourName},null,8,ym),[[Ct,t.inputValueName]]),m("div",vm,[we(m("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>t.inputValueMail=i),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[Ct,t.inputValueMail]]),we(m("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>t.inputValuePhone=i),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:t.store.langProp[t.store.lang].telephone_1},null,8,wm),[[Ct,t.inputValuePhone]])]),Em,m("div",Im,[m("button",xm,W(t.store.langProp[t.store.lang].send),1),m("button",{onClick:e[4]||(e[4]=(...i)=>o.clearInput&&o.clearInput(...i)),class:"bg-[#02020233] rounded-[5px]"},W(t.store.langProp[t.store.lang].reset),1)])])}const Ql=ot(hm,[["render",Tm]]),Pm="/assets/call-65c88a38.svg",Cm={data(){return{store:Be()}},components:{Feedback:Ql}},Sm={class:"bg-white flex justify-center my-[1vh] w-full"},km={class:"self-center"},Am=m("img",{class:"inline ml-2",src:Pm},null,-1);function Rm(t,e,n,s,r,o){return Ie(),$e("footer",Sm,[m("div",km,[m("button",{onClick:e[0]||(e[0]=i=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),Am])])}const Om=ot(Cm,[["render",Rm]]),Nm="/assets/Vector-9ca58fbf.svg",Co="/assets/visibility_on-0c36d6bb.svg",So="/assets/visibility_off-e6686e60.svg",Mm={props:{buttonName:String},data(){return{email:"",password:"",store:Be(),showPassword:!1}},methods:{loginGoogle(){const t=Io(),e=new Se;Jl(t,e).then(n=>{Se.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Se.credentialFromError(n)})},async login(){let t={method:"POST",header:{"Contetnt-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,returnSecureToken:!0})};const e=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",t);e!=null&&e.ok&&(e.json(),this.store.modal=!1)},eyechange(){this.showPassword=!this.showPassword}}},Dm={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},Lm={class:"grid auto-rows-min gap-[20px]"},Um={class:"text-[30px] flex justify-center"},Fm={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},Bm=m("span",{class:"mx-2"},"|",-1),jm=m("img",{class:"mr-[8px]",src:Nm},null,-1),Hm=["placeholder"],$m={class:"relative"},Vm=["type","placeholder"],zm={src:Co,alt:""},Wm={src:So,alt:""},Km=["disabled"],qm={class:"text-center"};function Gm(t,e,n,s,r,o){const i=Jt("router-link");return Ie(),$e("div",Dm,[m("div",Lm,[m("div",Um,[m("span",Fm,W(r.store.langProp[r.store.lang].entrance),1),Bm,m("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},W(r.store.langProp[r.store.lang].registeration),1)]),m("button",{onClick:e[1]||(e[1]=(...a)=>o.loginGoogle&&o.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[jm,be(W(r.store.langProp[r.store.lang].loginWithGoogle),1)]),we(m("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp[r.store.lang].enterEmail},null,8,Hm),[[Ct,r.email]]),m("div",$m,[we(m("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].enterPassword},null,8,Vm),[[Or,r.password]]),m("button",{onClick:e[4]||(e[4]=(...a)=>o.eyechange&&o.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(m("img",zm,null,512),[[$t,r.showPassword]]),we(m("img",Wm,null,512),[[$t,!r.showPassword]])])]),ee(i,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].forgotYourPassword),1)]),_:1}),m("button",{onClick:e[5]||(e[5]=(...a)=>o.login&&o.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},W(r.store.langProp[r.store.lang].toComeIn),9,Km),m("p",qm,[be(W(r.store.langProp[r.store.lang].dontHaveAnAccountYet),1),m("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},W(r.store.langProp[r.store.lang].create),1)])])])}const Jm=ot(Mm,[["render",Gm]]),Ym="/assets/Vector-9ca58fbf.svg",Xm={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:Be()}},methods:{loginGoogle(){const t=Io(),e=new Se;Jl(t,e).then(n=>{Se.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Se.credentialFromError(n)})},async register(){let t={method:"POST",header:{"Contetnt-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,returnSecureToken:!0})};if(this.password2==this.password){const e=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",t);e!=null&&e.ok&&(e.json(),this.store.comp="Login")}},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},Qm={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},Zm={class:"grid auto-rows-min gap-[20px]"},e_={class:"text-[30px] h-[45px] flex justify-center"},t_=m("span",{class:"mx-2"},"|",-1),n_={class:"bg-gray-300 rounded-[10px] px-2 text-black"},s_=m("img",{class:"mr-[8px]",src:Ym},null,-1),r_=["placeholder"],o_=["placeholder"],i_={class:"relative"},a_=["type","placeholder"],l_={src:Co,alt:""},c_={src:So,alt:""},u_={class:"relative"},f_=["type","placeholder"],d_={src:Co,alt:""},h_={src:So,alt:""},p_={key:0,class:"text-red-500 font-roboto leading-[2px]"},g_=["disabled"],m_={class:"text-center"};function __(t,e,n,s,r,o){return Ie(),$e("div",Qm,[m("div",Zm,[m("div",e_,[m("button",{onClick:e[0]||(e[0]=i=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},W(r.store.langProp[r.store.lang].entrance),1),t_,m("span",n_,W(r.store.langProp[r.store.lang].registeration),1)]),m("button",{onClick:e[1]||(e[1]=(...i)=>o.loginGoogle&&o.loginGoogle(...i)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[s_,be(" "+W(r.store.langProp[r.store.lang].loginWithGoogle),1)]),we(m("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>r.name=i),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp[r.store.lang].username},null,8,r_),[[Ct,r.name]]),we(m("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>r.email=i),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp[r.store.lang].enterEmail},null,8,o_),[[Ct,r.email]]),m("div",i_,[we(m("input",{"onUpdate:modelValue":e[4]||(e[4]=i=>r.password=i),onFocus:e[5]||(e[5]=i=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].password},null,40,a_),[[Or,r.password]]),m("button",{onClick:e[6]||(e[6]=(...i)=>o.eyechange&&o.eyechange(...i)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(m("img",l_,null,512),[[$t,r.showPassword]]),we(m("img",c_,null,512),[[$t,!r.showPassword]])])]),m("div",u_,[we(m("input",{"onUpdate:modelValue":e[7]||(e[7]=i=>r.password2=i),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].confirmThePassword},null,8,f_),[[Or,r.password2]]),m("button",{onClick:e[8]||(e[8]=i=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[we(m("img",d_,null,512),[[$t,r.showPassword]]),we(m("img",h_,null,512),[[$t,!r.showPassword]])])]),r.password2!=r.password?(Ie(),$e("div",p_,W(r.store.langProp[r.store.lang].passwordMismatch),1)):Cs("",!0),we(m("div",{class:"text-red-500 font-roboto leading-[2px]"},W(r.store.langProp[r.store.lang].minimumNumberOfSymbols)+" - "+W(r.MinLength),513),[[$t,r.passwordMinLength&&r.password.length<=5]]),m("button",{onClick:e[9]||(e[9]=(...i)=>o.register&&o.register(...i)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},W(r.store.langProp[r.store.lang].toComeIn),9,g_),m("p",m_,[be(W(r.store.langProp[r.store.lang].doYouAlreadyHaveAnAccount),1),m("button",{onClick:e[10]||(e[10]=i=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},W(r.store.langProp[r.store.lang].toComeIn),1)])])])}const b_=ot(Xm,[["render",__]]),y_={data(){return{store:Be()}},components:{Contacts:Xl,Feedback:Ql,Login:Jm,Register:b_}},v_={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},w_={class:"p-2 text-right"},E_=m("strong",null,"X",-1),I_=[E_];function x_(t,e,n,s,r,o){return r.store.modal?(Ie(),$e("div",v_,[r.store.modal?(Ie(),$e("div",{key:0,onClick:e[0]||(e[0]=i=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):Cs("",!0),m("div",{class:vn([r.store.bg,"max-h-screen overflow-scroll bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[m("div",w_,[m("button",{onClick:e[1]||(e[1]=i=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},I_)]),(Ie(),zs(Nu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):Cs("",!0)}const T_=ot(y_,[["render",x_]]),P_={components:{Header:dm,Footer:Om,LayoutModal:T_}};function C_(t,e,n,s,r,o){const i=Jt("LayoutModal"),a=Jt("Header");return Ie(),$e(De,null,[ee(i),m("div",{class:vn([t.$route.name=="Home"?"h-screen min-h-[700px]":"min-h-screen","overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]"])},[ee(a),Mu(t.$slots,"default")],2)],64)}const S_=ot(P_,[["render",C_]]),k_={};function A_(t,e){const n=Jt("RouterView");return Ie(),zs(n)}const R_=ot(k_,[["render",A_]]),O_="modulepreload",N_=function(t){return"/"+t},Fi={},tn=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=N_(o),o in Fi)return;Fi[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===o&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=i?"stylesheet":O_,i||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),i)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const sn=typeof window<"u";function M_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const te=Object.assign;function gr(t,e){const n={};for(const s in e){const r=e[s];n[s]=Je(r)?r.map(t):t(r)}return n}const Un=()=>{},Je=Array.isArray,D_=/\/$/,L_=t=>t.replace(D_,"");function mr(t,e,n="/"){let s,r={},o="",i="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),r=t(o)),a>-1&&(s=s||e.slice(0,a),i=e.slice(a,e.length)),s=j_(s??e,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:i}}function U_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function F_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&bn(e.matched[s],n.matched[r])&&Zl(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function bn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!B_(t[n],e[n]))return!1;return!0}function B_(t,e){return Je(t)?ji(t,e):Je(e)?ji(e,t):t===e}function ji(t,e){return Je(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function j_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Xn;(function(t){t.pop="pop",t.push="push"})(Xn||(Xn={}));var Fn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fn||(Fn={}));function H_(t){if(!t)if(sn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),L_(t)}const $_=/^[^#]+#/;function V_(t,e){return t.replace($_,"#")+e}function z_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const er=()=>({left:window.pageXOffset,top:window.pageYOffset});function W_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=z_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hi(t,e){return(history.state?history.state.position-e:-1)+t}const $r=new Map;function K_(t,e){$r.set(t,e)}function q_(t){const e=$r.get(t);return $r.delete(t),e}let G_=()=>location.protocol+"//"+location.host;function ec(t,e){const{pathname:n,search:s,hash:r}=e,o=t.indexOf("#");if(o>-1){let a=r.includes(t.slice(o))?t.slice(o).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Bi(l,"")}return Bi(n,t)+s+r}function J_(t,e,n,s){let r=[],o=[],i=null;const a=({state:p})=>{const b=ec(t,location),x=n.value,P=e.value;let U=0;if(p){if(n.value=b,e.value=p,i&&i===x){i=null;return}U=P?p.position-P.position:0}else s(b);r.forEach(A=>{A(n.value,x,{delta:U,type:Xn.pop,direction:U?U>0?Fn.forward:Fn.back:Fn.unknown})})};function l(){i=n.value}function c(p){r.push(p);const b=()=>{const x=r.indexOf(p);x>-1&&r.splice(x,1)};return o.push(b),b}function f(){const{history:p}=window;p.state&&p.replaceState(te({},p.state,{scroll:er()}),"")}function h(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:c,destroy:h}}function $i(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?er():null}}function Y_(t){const{history:e,location:n}=window,s={value:ec(t,n)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:G_()+t+l;try{e[f?"replaceState":"pushState"](c,"",p),r.value=c}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function i(l,c){const f=te({},e.state,$i(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});o(l,f,!0),s.value=l}function a(l,c){const f=te({},r.value,e.state,{forward:l,scroll:er()});o(f.current,f,!0);const h=te({},$i(s.value,l,null),{position:f.position+1},c);o(l,h,!1),s.value=l}return{location:s,state:r,push:a,replace:i}}function X_(t){t=H_(t);const e=Y_(t),n=J_(t,e.state,e.location,e.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=te({location:"",base:t,go:s,createHref:V_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Q_(t){return typeof t=="string"||t&&typeof t=="object"}function tc(t){return typeof t=="string"||typeof t=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},nc=Symbol("");var Vi;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Vi||(Vi={}));function yn(t,e){return te(new Error,{type:t,[nc]:!0},e)}function it(t,e){return t instanceof Error&&nc in t&&(e==null||!!(t.type&e))}const zi="[^/]+?",Z_={sensitive:!1,strict:!1,start:!0,end:!0},eb=/[.+*?^${}()[\]/\\]/g;function tb(t,e){const n=te({},Z_,e),s=[];let r=n.start?"^":"";const o=[];for(const c of t){const f=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const p=c[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(eb,"\\$&"),b+=40;else if(p.type===1){const{value:x,repeatable:P,optional:U,regexp:A}=p;o.push({name:x,repeatable:P,optional:U});const B=A||zi;if(B!==zi){b+=10;try{new RegExp(`(${B})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${x}" (${B}): `+V.message)}}let O=P?`((?:${B})(?:/(?:${B}))*)`:`(${B})`;h||(O=U&&c.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),P&&(b+=-20),B===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(c){const f=c.match(i),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",x=o[p-1];h[x.name]=b&&x.repeatable?b.split("/"):b}return h}function l(c){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:x,repeatable:P,optional:U}=b,A=x in c?c[x]:"";if(Je(A)&&!P)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const B=Je(A)?A.join("/"):A;if(!B)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${x}"`);f+=B}}return f||"/"}return{re:i,score:s,keys:o,parse:a,stringify:l}}function nb(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function sb(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const o=nb(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Wi(s))return 1;if(Wi(r))return-1}return r.length-s.length}function Wi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rb={type:0,value:""},ob=/[a-zA-Z0-9_]/;function ib(t){if(!t)return[[]];if(t==="/")return[[rb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${c}": ${b}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let a=0,l,c="",f="";function h(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),i()):l===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:ob.test(l)?p():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),i(),r}function ab(t,e,n){const s=tb(ib(t.path),n),r=te(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lb(t,e){const n=[],s=new Map;e=Gi({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function o(f,h,p){const b=!p,x=cb(f);x.aliasOf=p&&p.record;const P=Gi(e,f),U=[x];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const V of O)U.push(te({},x,{components:p?p.record.components:x.components,path:V,aliasOf:p?p.record:x}))}let A,B;for(const O of U){const{path:V}=O;if(h&&V[0]!=="/"){const K=h.record.path,re=K[K.length-1]==="/"?"":"/";O.path=h.record.path+(V&&re+V)}if(A=ab(O,h,P),p?p.alias.push(A):(B=B||A,B!==A&&B.alias.push(A),b&&f.name&&!qi(A)&&i(f.name)),x.children){const K=x.children;for(let re=0;re<K.length;re++)o(K[re],A,p&&p.children[re])}p=p||A,(A.record.components&&Object.keys(A.record.components).length||A.record.name||A.record.redirect)&&l(A)}return B?()=>{i(B)}:Un}function i(f){if(tc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function l(f){let h=0;for(;h<n.length&&sb(f,n[h])>=0&&(f.record.path!==n[h].record.path||!sc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!qi(f)&&s.set(f.record.name,f)}function c(f,h){let p,b={},x,P;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw yn(1,{location:f});P=p.record.name,b=te(Ki(h.params,p.keys.filter(B=>!B.optional).map(B=>B.name)),f.params&&Ki(f.params,p.keys.map(B=>B.name))),x=p.stringify(b)}else if("path"in f)x=f.path,p=n.find(B=>B.re.test(x)),p&&(b=p.parse(x),P=p.record.name);else{if(p=h.name?s.get(h.name):n.find(B=>B.re.test(h.path)),!p)throw yn(1,{location:f,currentLocation:h});P=p.record.name,b=te({},h.params,f.params),x=p.stringify(b)}const U=[];let A=p;for(;A;)U.unshift(A.record),A=A.parent;return{name:P,path:x,params:b,matched:U,meta:fb(U)}}return t.forEach(f=>o(f)),{addRoute:o,resolve:c,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function Ki(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function cb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ub(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ub(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function qi(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fb(t){return t.reduce((e,n)=>te(e,n.meta),{})}function Gi(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function sc(t,e){return e.children.some(n=>n===t||sc(t,n))}const rc=/#/g,db=/&/g,hb=/\//g,pb=/=/g,gb=/\?/g,oc=/\+/g,mb=/%5B/g,_b=/%5D/g,ic=/%5E/g,bb=/%60/g,ac=/%7B/g,yb=/%7C/g,lc=/%7D/g,vb=/%20/g;function ko(t){return encodeURI(""+t).replace(yb,"|").replace(mb,"[").replace(_b,"]")}function wb(t){return ko(t).replace(ac,"{").replace(lc,"}").replace(ic,"^")}function Vr(t){return ko(t).replace(oc,"%2B").replace(vb,"+").replace(rc,"%23").replace(db,"%26").replace(bb,"`").replace(ac,"{").replace(lc,"}").replace(ic,"^")}function Eb(t){return Vr(t).replace(pb,"%3D")}function Ib(t){return ko(t).replace(rc,"%23").replace(gb,"%3F")}function xb(t){return t==null?"":Ib(t).replace(hb,"%2F")}function Ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Tb(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(oc," "),i=o.indexOf("="),a=Ms(i<0?o:o.slice(0,i)),l=i<0?null:Ms(o.slice(i+1));if(a in e){let c=e[a];Je(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ji(t){let e="";for(let n in t){const s=t[n];if(n=Eb(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Je(s)?s.map(o=>o&&Vr(o)):[s&&Vr(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function Pb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Je(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Cb=Symbol(""),Yi=Symbol(""),Ao=Symbol(""),cc=Symbol(""),zr=Symbol("");function kn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function yt(t,e,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const l=h=>{h===!1?a(yn(4,{from:n,to:e})):h instanceof Error?a(h):Q_(h)?a(yn(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),i())},c=t.call(s&&s.instances[r],e,n,l);let f=Promise.resolve(c);t.length<3&&(f=f.then(l)),f.catch(h=>a(h))})}function _r(t,e,n,s){const r=[];for(const o of t)for(const i in o.components){let a=o.components[i];if(!(e!=="beforeRouteEnter"&&!o.instances[i]))if(Sb(a)){const c=(a.__vccOpts||a)[e];c&&r.push(yt(c,n,s,o,i))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const f=M_(c)?c.default:c;o.components[i]=f;const p=(f.__vccOpts||f)[e];return p&&yt(p,n,s,o,i)()}))}}return r}function Sb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Xi(t){const e=et(Ao),n=et(cc),s=Le(()=>e.resolve(an(t.to))),r=Le(()=>{const{matched:l}=s.value,{length:c}=l,f=l[c-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(bn.bind(null,f));if(p>-1)return p;const b=Qi(l[c-2]);return c>1&&Qi(f)===b&&h[h.length-1].path!==b?h.findIndex(bn.bind(null,l[c-2])):p}),o=Le(()=>r.value>-1&&Ob(n.params,s.value.params)),i=Le(()=>r.value>-1&&r.value===n.matched.length-1&&Zl(n.params,s.value.params));function a(l={}){return Rb(l)?e[an(t.replace)?"replace":"push"](an(t.to)).catch(Un):Promise.resolve()}return{route:s,href:Le(()=>s.value.href),isActive:o,isExactActive:i,navigate:a}}const kb=Da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Xi,setup(t,{slots:e}){const n=Tn(Xi(t)),{options:s}=et(Ao),r=Le(()=>({[Zi(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Zi(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:nl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),Ab=kb;function Rb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Ob(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Je(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function Qi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zi=(t,e,n)=>t??e??n,Nb=Da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=et(zr),r=Le(()=>t.route||s.value),o=et(Yi,0),i=Le(()=>{let c=an(o);const{matched:f}=r.value;let h;for(;(h=f[c])&&!h.components;)c++;return c}),a=Le(()=>r.value.matched[i.value]);gs(Yi,Le(()=>i.value+1)),gs(Cb,a),gs(zr,r);const l=so();return Rn(()=>[l.value,a.value,t.name],([c,f,h],[p,b,x])=>{f&&(f.instances[h]=c,b&&b!==f&&c&&c===p&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),c&&f&&(!b||!bn(f,b)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(c))},{flush:"post"}),()=>{const c=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return ea(n.default,{Component:p,route:c});const b=h.props[f],x=b?b===!0?c.params:typeof b=="function"?b(c):b:null,U=nl(p,te({},x,e,{onVnodeUnmounted:A=>{A.component.isUnmounted&&(h.instances[f]=null)},ref:l}));return ea(n.default,{Component:U,route:c})||U}}});function ea(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mb=Nb;function Db(t){const e=lb(t.routes,t),n=t.parseQuery||Tb,s=t.stringifyQuery||Ji,r=t.history,o=kn(),i=kn(),a=kn(),l=Zc(mt);let c=mt;sn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=gr.bind(null,y=>""+y),h=gr.bind(null,xb),p=gr.bind(null,Ms);function b(y,k){let C,M;return tc(y)?(C=e.getRecordMatcher(y),M=k):M=y,e.addRoute(M,C)}function x(y){const k=e.getRecordMatcher(y);k&&e.removeRoute(k)}function P(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function A(y,k){if(k=te({},k||l.value),typeof y=="string"){const u=mr(n,y,k.path),d=e.resolve({path:u.path},k),g=r.createHref(u.fullPath);return te(u,d,{params:p(d.params),hash:Ms(u.hash),redirectedFrom:void 0,href:g})}let C;if("path"in y)C=te({},y,{path:mr(n,y.path,k.path).path});else{const u=te({},y.params);for(const d in u)u[d]==null&&delete u[d];C=te({},y,{params:h(y.params)}),k.params=h(k.params)}const M=e.resolve(C,k),X=y.hash||"";M.params=f(p(M.params));const ue=U_(s,te({},y,{hash:wb(X),path:M.path})),q=r.createHref(ue);return te({fullPath:ue,hash:X,query:s===Ji?Pb(y.query):y.query||{}},M,{redirectedFrom:void 0,href:q})}function B(y){return typeof y=="string"?mr(n,y,l.value.path):te({},y)}function O(y,k){if(c!==y)return yn(8,{from:k,to:y})}function V(y){return z(y)}function K(y){return V(te(B(y),{replace:!0}))}function re(y){const k=y.matched[y.matched.length-1];if(k&&k.redirect){const{redirect:C}=k;let M=typeof C=="function"?C(y):C;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=B(M):{path:M},M.params={}),te({query:y.query,hash:y.hash,params:"path"in M?{}:y.params},M)}}function z(y,k){const C=c=A(y),M=l.value,X=y.state,ue=y.force,q=y.replace===!0,u=re(C);if(u)return z(te(B(u),{state:typeof u=="object"?te({},X,u.state):X,force:ue,replace:q}),k||C);const d=C;d.redirectedFrom=k;let g;return!ue&&F_(s,M,C)&&(g=yn(16,{to:d,from:M}),Mt(M,M,!0,!1)),(g?Promise.resolve(g):J(d,M)).catch(_=>it(_)?it(_,2)?_:Ve(_):oe(_,d,M)).then(_=>{if(_){if(it(_,2))return z(te({replace:q},B(_.to),{state:typeof _.to=="object"?te({},X,_.to.state):X,force:ue}),k||d)}else _=fe(d,M,!0,q,X);return Y(d,M,_),_})}function R(y,k){const C=O(y,k);return C?Promise.reject(C):Promise.resolve()}function J(y,k){let C;const[M,X,ue]=Lb(y,k);C=_r(M.reverse(),"beforeRouteLeave",y,k);for(const u of M)u.leaveGuards.forEach(d=>{C.push(yt(d,y,k))});const q=R.bind(null,y,k);return C.push(q),nn(C).then(()=>{C=[];for(const u of o.list())C.push(yt(u,y,k));return C.push(q),nn(C)}).then(()=>{C=_r(X,"beforeRouteUpdate",y,k);for(const u of X)u.updateGuards.forEach(d=>{C.push(yt(d,y,k))});return C.push(q),nn(C)}).then(()=>{C=[];for(const u of y.matched)if(u.beforeEnter&&!k.matched.includes(u))if(Je(u.beforeEnter))for(const d of u.beforeEnter)C.push(yt(d,y,k));else C.push(yt(u.beforeEnter,y,k));return C.push(q),nn(C)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),C=_r(ue,"beforeRouteEnter",y,k),C.push(q),nn(C))).then(()=>{C=[];for(const u of i.list())C.push(yt(u,y,k));return C.push(q),nn(C)}).catch(u=>it(u,8)?u:Promise.reject(u))}function Y(y,k,C){for(const M of a.list())M(y,k,C)}function fe(y,k,C,M,X){const ue=O(y,k);if(ue)return ue;const q=k===mt,u=sn?history.state:{};C&&(M||q?r.replace(y.fullPath,te({scroll:q&&u&&u.scroll},X)):r.push(y.fullPath,X)),l.value=y,Mt(y,k,C,q),Ve()}let me;function Oe(){me||(me=r.listen((y,k,C)=>{if(!rs.listening)return;const M=A(y),X=re(M);if(X){z(te(X,{replace:!0}),M).catch(Un);return}c=M;const ue=l.value;sn&&K_(Hi(ue.fullPath,C.delta),er()),J(M,ue).catch(q=>it(q,12)?q:it(q,2)?(z(q.to,M).then(u=>{it(u,20)&&!C.delta&&C.type===Xn.pop&&r.go(-1,!1)}).catch(Un),Promise.reject()):(C.delta&&r.go(-C.delta,!1),oe(q,M,ue))).then(q=>{q=q||fe(M,ue,!1),q&&(C.delta&&!it(q,8)?r.go(-C.delta,!1):C.type===Xn.pop&&it(q,20)&&r.go(-1,!1)),Y(M,ue,q)}).catch(Un)}))}let Pe=kn(),_e=kn(),he;function oe(y,k,C){Ve(y);const M=_e.list();return M.length?M.forEach(X=>X(y,k,C)):console.error(y),Promise.reject(y)}function ne(){return he&&l.value!==mt?Promise.resolve():new Promise((y,k)=>{Pe.add([y,k])})}function Ve(y){return he||(he=!y,Oe(),Pe.list().forEach(([k,C])=>y?C(y):k()),Pe.reset()),y}function Mt(y,k,C,M){const{scrollBehavior:X}=t;if(!sn||!X)return Promise.resolve();const ue=!C&&q_(Hi(y.fullPath,0))||(M||!C)&&history.state&&history.state.scroll||null;return oo().then(()=>X(y,k,ue)).then(q=>q&&W_(q)).catch(q=>oe(q,y,k))}const ze=y=>r.go(y);let ke;const Qt=new Set,rs={currentRoute:l,listening:!0,addRoute:b,removeRoute:x,hasRoute:U,getRoutes:P,resolve:A,options:t,push:V,replace:K,go:ze,back:()=>ze(-1),forward:()=>ze(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:_e.add,isReady:ne,install(y){const k=this;y.component("RouterLink",Ab),y.component("RouterView",Mb),y.config.globalProperties.$router=k,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>an(l)}),sn&&!ke&&l.value===mt&&(ke=!0,V(r.location).catch(X=>{}));const C={};for(const X in mt)C[X]=Le(()=>l.value[X]);y.provide(Ao,k),y.provide(cc,Tn(C)),y.provide(zr,l);const M=y.unmount;Qt.add(y),y.unmount=function(){Qt.delete(y),Qt.size<1&&(c=mt,me&&me(),me=null,l.value=mt,ke=!1,he=!1),M()}}};return rs}function nn(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function Lb(t,e){const n=[],s=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let i=0;i<o;i++){const a=e.matched[i];a&&(t.matched.find(c=>bn(c,a))?s.push(a):n.push(a));const l=t.matched[i];l&&(e.matched.find(c=>bn(c,l))||r.push(l))}return[n,s,r]}const Ub="/assets/paralax1-371235c6.png",Fb="/assets/paralax2-aa0b773a.png",Bb="/assets/paralax3a-7b662525.png",jb="/assets/paralax3b-b777e898.png",Hb="/assets/paralax9-20ab124f.png",$b={data(){return{xPos:0,yPos:0,store:Be()}},methods:{check(t){this.xPos=t.clientX-window.innerWidth/2,this.yPos=t.clientY-window.innerHeight/2},touch(t){this.xPos=t.touches[0].clientX-window.innerWidth/2,this.yPos=t.touches[0].clientY-window.innerHeight/2}},computed:{parallaxHeight(){return window.innerHeight-102*2}}},Vb={class:"relative grid overflow-hidden -mx-[100px] [&>img]:max-w-none [&>img]:select-none"},zb=m("div",{class:"absolute w-full h-full bg-gray-900 bg-opacity-[.3]"},null,-1),Wb={class:"h-full justify-center flex items-center"},Kb={class:"grid gap-[10vh] [&_*]:text-white"},qb={class:"justify-center flex"},Gb={class:"grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"},Jb={class:"justify-center flex max-[800px]:pt-[10px]"},Yb={class:"grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"};function Xb(t,e,n,s,r,o){const i=Jt("router-link"),a=Jt("Layout");return Ie(),$e("div",{onTouchmove:e[1]||(e[1]=(...l)=>o.touch&&o.touch(...l)),onMousemove:e[2]||(e[2]=(...l)=>o.check&&o.check(...l))},[ee(a,null,{default:Re(()=>[m("div",Vb,[zb,m("img",{style:vt({transform:`translate(${r.xPos/10}px, ${r.yPos/10}px)`}),class:"w-[2200px] absolute left-[-10%] top-[-10%] -z-10",src:Ub},null,4),m("img",{style:vt({transform:`translate(${r.xPos/13}px, ${r.yPos/13}px)`}),class:"w-[2200px] h-[70%] absolute left-[-10%] top-0 -z-10",src:Fb},null,4),m("img",{style:vt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[440px] absolute justify-self-center mr-[1120px] bottom-[60px] z-[-9]",src:Bb},null,4),m("img",{style:vt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[500px] absolute justify-self-center ml-[220px] bottom-[40px] z-[-9]",src:jb},null,4),m("img",{style:vt({transform:`translate(${r.xPos/18}px, ${r.yPos/20}px)`}),class:"w-[2200px] absolute justify-self-center bottom-[-4%] -z-10",src:Hb},null,4),m("div",Wb,[m("div",Kb,[m("div",qb,[m("div",Gb,[ee(i,{to:"/Products",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),ee(i,{to:"/about",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].about),1)]),_:1})])]),m("div",Jb,[m("div",Yb,[ee(i,{to:"/Blog",class:"relative z-10 flex items-center justify-center bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},{default:Re(()=>[be(W(r.store.langProp[r.store.lang].blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=l=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white")),class:"relative z-10 bg-yellow-500 bg-opacity-[0.8] w-40 h-12 rounded-md"},W(r.store.langProp[r.store.lang].contacts),1)])])])])])]),_:1})],32)}const Qb=ot($b,[["render",Xb]]);let br=[{path:"/home",alias:"Home",component:Qb},{path:"/about",alias:"About",component:()=>tn(()=>import("./About-728041c9.js"),[])},{path:"/Products",alias:"Products",component:()=>tn(()=>import("./Products-323df00c.js"),[])},{path:"/Personal",alias:"Personal",component:()=>tn(()=>import("./Personal-d701f18c.js"),[])},{path:"/PersonalArea",alias:"PersonalArea",component:()=>tn(()=>import("./PersonalArea-25a4a939.js"),[])},{path:"/Blog",alias:"Blog",component:()=>tn(()=>import("./Blog-59cd31ac.js"),[])},{path:"/Checkout",alias:"Checkout",component:()=>tn(()=>import("./Checkout-5b11cb64.js"),[])}];const Zb=Db({history:X_("/"),routes:[{path:"/",name:"root",redirect:t=>Be().lang},{path:"/ru",name:"ru",redirect:t=>"ru/home",beforeEnter:t=>{console.log("repeat"),Be().lang="ru"},children:br},{path:"/en",name:"en",redirect:t=>"en/home",beforeEnter:t=>{Be().lang="en"},children:br},{path:"/kg",name:"kg",redirect:t=>"kg/home",beforeEnter:t=>{Be().lang="kg"},children:br}]});const tr=Bf(R_),ey=$f();new Se;const ty={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};tr.component("Layout",S_);tr.use(ey);tr.use(Zb);_l(ty);Io();tr.mount("#app");export{De as F,S_ as L,ot as _,m as a,be as b,zs as c,$e as d,ny as e,ee as f,Po as g,Ie as o,Jt as r,W as t,Be as u,Re as w};
