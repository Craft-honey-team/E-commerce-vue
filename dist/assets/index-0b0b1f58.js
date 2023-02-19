(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();function Fr(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function mt(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=fe(s)?nl(s):mt(s);if(r)for(const i in r)e[i]=r[i]}return e}else{if(fe(t))return t;if(re(t))return t}}const Zc=/;(?![^(]*\))/g,el=/:([^]+)/,tl=/\/\*.*?\*\//gs;function nl(t){const e={};return t.replace(tl,"").split(Zc).forEach(n=>{if(n){const s=n.split(el);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _n(t){let e="";if(fe(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=_n(t[n]);s&&(e+=s+" ")}else if(re(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rl=Fr(sl);function Go(t){return!!t||t===""}function il(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=zt(t[s],e[s]);return n}function zt(t,e){if(t===e)return!0;let n=Ri(t),s=Ri(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=$n(t),s=$n(e),n||s)return t===e;if(n=L(t),s=L(e),n||s)return n&&s?il(t,e):!1;if(n=re(t),s=re(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,i=Object.keys(e).length;if(r!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!zt(t[o],e[o]))return!1}}return String(t)===String(e)}function Br(t,e){return t.findIndex(n=>zt(n,e))}const Cn=t=>fe(t)?t:t==null?"":L(t)||re(t)&&(t.toString===Xo||!j(t.toString))?JSON.stringify(t,Jo,2):String(t),Jo=(t,e)=>e&&e.__v_isRef?Jo(t,e.value):tn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:bn(e)?{[`Set(${e.size})`]:[...e.values()]}:re(e)&&!L(e)&&!Qo(e)?String(e):e,ie={},en=[],He=()=>{},ol=()=>!1,al=/^on[^a-z]/,Ns=t=>al.test(t),jr=t=>t.startsWith("onUpdate:"),xe=Object.assign,Hr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cl=Object.prototype.hasOwnProperty,G=(t,e)=>cl.call(t,e),L=Array.isArray,tn=t=>Xn(t)==="[object Map]",bn=t=>Xn(t)==="[object Set]",Ri=t=>Xn(t)==="[object Date]",j=t=>typeof t=="function",fe=t=>typeof t=="string",$n=t=>typeof t=="symbol",re=t=>t!==null&&typeof t=="object",Yo=t=>re(t)&&j(t.then)&&j(t.catch),Xo=Object.prototype.toString,Xn=t=>Xo.call(t),ll=t=>Xn(t).slice(8,-1),Qo=t=>Xn(t)==="[object Object]",Vr=t=>fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ul=/-(\w)/g,Qe=Ds(t=>t.replace(ul,(e,n)=>n?n.toUpperCase():"")),fl=/\B([A-Z])/g,vn=Ds(t=>t.replace(fl,"-$1").toLowerCase()),Ls=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),er=Ds(t=>t?`on${Ls(t)}`:""),Fn=(t,e)=>!Object.is(t,e),hs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ws=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ci;const dl=()=>Ci||(Ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class Zo{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!e&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Ae;try{return Ae=this,e()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ea(t){return new Zo(t)}function hl(t,e=Ae){e&&e.active&&e.effects.push(t)}function pl(){return Ae}function gl(t){Ae&&Ae.cleanups.push(t)}const zr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ta=t=>(t.w&St)>0,na=t=>(t.n&St)>0,ml=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=St},_l=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ta(r)&&!na(r)?r.delete(t):e[n++]=r,r.w&=~St,r.n&=~St}e.length=n}},gr=new WeakMap;let kn=0,St=1;const mr=30;let Be;const jt=Symbol(""),_r=Symbol("");class Wr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hl(this,s)}run(){if(!this.active)return this.fn();let e=Be,n=yt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Be,Be=this,yt=!0,St=1<<++kn,kn<=mr?ml(this):ki(this),this.fn()}finally{kn<=mr&&_l(this),St=1<<--kn,Be=this.parent,yt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Be===this?this.deferStop=!0:this.active&&(ki(this),this.onStop&&this.onStop(),this.active=!1)}}function ki(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yt=!0;const sa=[];function yn(){sa.push(yt),yt=!1}function wn(){const t=sa.pop();yt=t===void 0?!0:t}function Me(t,e,n){if(yt&&Be){let s=gr.get(t);s||gr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=zr()),ra(r)}}function ra(t,e){let n=!1;kn<=mr?na(t)||(t.n|=St,n=!ta(t)):n=!t.has(Be),n&&(t.add(Be),Be.deps.push(t))}function ot(t,e,n,s,r,i){const o=gr.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&L(t)){const c=Bn(s);o.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":L(t)?Vr(n)&&a.push(o.get("length")):(a.push(o.get(jt)),tn(t)&&a.push(o.get(_r)));break;case"delete":L(t)||(a.push(o.get(jt)),tn(t)&&a.push(o.get(_r)));break;case"set":tn(t)&&a.push(o.get(jt));break}if(a.length===1)a[0]&&br(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);br(zr(c))}}function br(t,e){const n=L(t)?t:[...t];for(const s of n)s.computed&&Pi(s);for(const s of n)s.computed||Pi(s)}function Pi(t,e){(t!==Be||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bl=Fr("__proto__,__v_isRef,__isVue"),ia=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n)),vl=Kr(),yl=Kr(!1,!0),wl=Kr(!0),Ai=El();function El(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=J(this);for(let i=0,o=this.length;i<o;i++)Me(s,"get",i+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(J)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){yn();const s=J(this)[e].apply(this,n);return wn(),s}}),t}function Kr(t=!1,e=!1){return function(s,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?$l:ua:e?la:ca).get(s))return s;const o=L(s);if(!t&&o&&G(Ai,r))return Reflect.get(Ai,r,i);const a=Reflect.get(s,r,i);return($n(r)?ia.has(r):bl(r))||(t||Me(s,"get",r),e)?a:ce(a)?o&&Vr(r)?a:a.value:re(a)?t?fa(a):En(a):a}}const Il=oa(),xl=oa(!0);function oa(t=!1){return function(n,s,r,i){let o=n[s];if(cn(o)&&ce(o)&&!ce(r))return!1;if(!t&&(!Es(r)&&!cn(r)&&(o=J(o),r=J(r)),!L(n)&&ce(o)&&!ce(r)))return o.value=r,!0;const a=L(n)&&Vr(s)?Number(s)<n.length:G(n,s),c=Reflect.set(n,s,r,i);return n===J(i)&&(a?Fn(r,o)&&ot(n,"set",s,r):ot(n,"add",s,r)),c}}function Tl(t,e){const n=G(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&ot(t,"delete",e,void 0),s}function Sl(t,e){const n=Reflect.has(t,e);return(!$n(e)||!ia.has(e))&&Me(t,"has",e),n}function Rl(t){return Me(t,"iterate",L(t)?"length":jt),Reflect.ownKeys(t)}const aa={get:vl,set:Il,deleteProperty:Tl,has:Sl,ownKeys:Rl},Cl={get:wl,set(t,e){return!0},deleteProperty(t,e){return!0}},kl=xe({},aa,{get:yl,set:xl}),qr=t=>t,Us=t=>Reflect.getPrototypeOf(t);function rs(t,e,n=!1,s=!1){t=t.__v_raw;const r=J(t),i=J(e);n||(e!==i&&Me(r,"get",e),Me(r,"get",i));const{has:o}=Us(r),a=s?qr:n?Yr:jn;if(o.call(r,e))return a(t.get(e));if(o.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function is(t,e=!1){const n=this.__v_raw,s=J(n),r=J(t);return e||(t!==r&&Me(s,"has",t),Me(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function os(t,e=!1){return t=t.__v_raw,!e&&Me(J(t),"iterate",jt),Reflect.get(t,"size",t)}function Oi(t){t=J(t);const e=J(this);return Us(e).has.call(e,t)||(e.add(t),ot(e,"add",t,t)),this}function Mi(t,e){e=J(e);const n=J(this),{has:s,get:r}=Us(n);let i=s.call(n,t);i||(t=J(t),i=s.call(n,t));const o=r.call(n,t);return n.set(t,e),i?Fn(e,o)&&ot(n,"set",t,e):ot(n,"add",t,e),this}function Ni(t){const e=J(this),{has:n,get:s}=Us(e);let r=n.call(e,t);r||(t=J(t),r=n.call(e,t)),s&&s.call(e,t);const i=e.delete(t);return r&&ot(e,"delete",t,void 0),i}function Di(){const t=J(this),e=t.size!==0,n=t.clear();return e&&ot(t,"clear",void 0,void 0),n}function as(t,e){return function(s,r){const i=this,o=i.__v_raw,a=J(o),c=e?qr:t?Yr:jn;return!t&&Me(a,"iterate",jt),o.forEach((l,f)=>s.call(r,c(l),c(f),i))}}function cs(t,e,n){return function(...s){const r=this.__v_raw,i=J(r),o=tn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=r[t](...s),f=n?qr:e?Yr:jn;return!e&&Me(i,"iterate",c?_r:jt),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return t==="delete"?!1:this}}function Pl(){const t={get(i){return rs(this,i)},get size(){return os(this)},has:is,add:Oi,set:Mi,delete:Ni,clear:Di,forEach:as(!1,!1)},e={get(i){return rs(this,i,!1,!0)},get size(){return os(this)},has:is,add:Oi,set:Mi,delete:Ni,clear:Di,forEach:as(!1,!0)},n={get(i){return rs(this,i,!0)},get size(){return os(this,!0)},has(i){return is.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:as(!0,!1)},s={get(i){return rs(this,i,!0,!0)},get size(){return os(this,!0)},has(i){return is.call(this,i,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=cs(i,!1,!1),n[i]=cs(i,!0,!1),e[i]=cs(i,!1,!0),s[i]=cs(i,!0,!0)}),[t,n,e,s]}const[Al,Ol,Ml,Nl]=Pl();function Gr(t,e){const n=e?t?Nl:Ml:t?Ol:Al;return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(G(n,r)&&r in s?n:s,r,i)}const Dl={get:Gr(!1,!1)},Ll={get:Gr(!1,!0)},Ul={get:Gr(!0,!1)},ca=new WeakMap,la=new WeakMap,ua=new WeakMap,$l=new WeakMap;function Fl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Bl(t){return t.__v_skip||!Object.isExtensible(t)?0:Fl(ll(t))}function En(t){return cn(t)?t:Jr(t,!1,aa,Dl,ca)}function jl(t){return Jr(t,!1,kl,Ll,la)}function fa(t){return Jr(t,!0,Cl,Ul,ua)}function Jr(t,e,n,s,r){if(!re(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Bl(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function wt(t){return cn(t)?wt(t.__v_raw):!!(t&&t.__v_isReactive)}function cn(t){return!!(t&&t.__v_isReadonly)}function Es(t){return!!(t&&t.__v_isShallow)}function da(t){return wt(t)||cn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function ln(t){return ws(t,"__v_skip",!0),t}const jn=t=>re(t)?En(t):t,Yr=t=>re(t)?fa(t):t;function ha(t){yt&&Be&&(t=J(t),ra(t.dep||(t.dep=zr())))}function pa(t,e){t=J(t),t.dep&&br(t.dep)}function ce(t){return!!(t&&t.__v_isRef===!0)}function Xr(t){return ga(t,!1)}function Hl(t){return ga(t,!0)}function ga(t,e){return ce(t)?t:new Vl(t,e)}class Vl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:jn(e)}get value(){return ha(this),this._value}set value(e){const n=this.__v_isShallow||Es(e)||cn(e);e=n?e:J(e),Fn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:jn(e),pa(this))}}function nn(t){return ce(t)?t.value:t}const zl={get:(t,e,n)=>nn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return ce(r)&&!ce(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ma(t){return wt(t)?t:new Proxy(t,zl)}function Wl(t){const e=L(t)?new Array(t.length):{};for(const n in t)e[n]=ql(t,n);return e}class Kl{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ql(t,e,n){const s=t[e];return ce(s)?s:new Kl(t,e,n)}var _a;class Gl{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[_a]=!1,this._dirty=!0,this.effect=new Wr(e,()=>{this._dirty||(this._dirty=!0,pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=J(this);return ha(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_a="__v_isReadonly";function Jl(t,e,n=!1){let s,r;const i=j(t);return i?(s=t,r=He):(s=t.get,r=t.set),new Gl(s,r,i||!r,n)}function Et(t,e,n,s){let r;try{r=s?t(...s):t()}catch(i){$s(i,e,n)}return r}function Ve(t,e,n,s){if(j(t)){const i=Et(t,e,n,s);return i&&Yo(i)&&i.catch(o=>{$s(o,e,n)}),i}const r=[];for(let i=0;i<t.length;i++)r.push(Ve(t[i],e,n,s));return r}function $s(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Et(c,null,10,[t,o,a]);return}}Yl(t,n,r,s)}function Yl(t,e,n,s=!0){console.error(t)}let Hn=!1,vr=!1;const ve=[];let Ge=0;const sn=[];let nt=null,Lt=0;const ba=Promise.resolve();let Qr=null;function Zr(t){const e=Qr||ba;return t?e.then(this?t.bind(this):t):e}function Xl(t){let e=Ge+1,n=ve.length;for(;e<n;){const s=e+n>>>1;Vn(ve[s])<t?e=s+1:n=s}return e}function ei(t){(!ve.length||!ve.includes(t,Hn&&t.allowRecurse?Ge+1:Ge))&&(t.id==null?ve.push(t):ve.splice(Xl(t.id),0,t),va())}function va(){!Hn&&!vr&&(vr=!0,Qr=ba.then(wa))}function Ql(t){const e=ve.indexOf(t);e>Ge&&ve.splice(e,1)}function Zl(t){L(t)?sn.push(...t):(!nt||!nt.includes(t,t.allowRecurse?Lt+1:Lt))&&sn.push(t),va()}function Li(t,e=Hn?Ge+1:0){for(;e<ve.length;e++){const n=ve[e];n&&n.pre&&(ve.splice(e,1),e--,n())}}function ya(t){if(sn.length){const e=[...new Set(sn)];if(sn.length=0,nt){nt.push(...e);return}for(nt=e,nt.sort((n,s)=>Vn(n)-Vn(s)),Lt=0;Lt<nt.length;Lt++)nt[Lt]();nt=null,Lt=0}}const Vn=t=>t.id==null?1/0:t.id,eu=(t,e)=>{const n=Vn(t)-Vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wa(t){vr=!1,Hn=!0,ve.sort(eu);const e=He;try{for(Ge=0;Ge<ve.length;Ge++){const n=ve[Ge];n&&n.active!==!1&&Et(n,null,14)}}finally{Ge=0,ve.length=0,ya(),Hn=!1,Qr=null,(ve.length||sn.length)&&wa()}}function tu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let r=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=s[f]||ie;p&&(r=n.map(_=>fe(_)?_.trim():_)),h&&(r=n.map(Bn))}let a,c=s[a=er(e)]||s[a=er(Qe(e))];!c&&i&&(c=s[a=er(vn(e))]),c&&Ve(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(l,t,6,r)}}function Ea(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const f=Ea(l,e,!0);f&&(a=!0,xe(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(re(t)&&s.set(t,null),null):(L(i)?i.forEach(c=>o[c]=null):xe(o,i),re(t)&&s.set(t,o),o)}function Fs(t,e){return!t||!Ns(e)?!1:(e=e.slice(2).replace(/Once$/,""),G(t,e[0].toLowerCase()+e.slice(1))||G(t,vn(e))||G(t,e))}let _e=null,Ia=null;function Is(t){const e=_e;return _e=t,Ia=t&&t.type.__scopeId||null,e}function Ce(t,e=_e,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Wi(-1);const i=Is(e);let o;try{o=t(...r)}finally{Is(i),s._d&&Wi(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function tr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:_,ctx:T,inheritAttrs:P}=t;let U,k;const $=Is(t);try{if(n.shapeFlag&4){const K=r||s;U=qe(f.call(K,K,h,i,_,p,T)),k=c}else{const K=e;U=qe(K.length>1?K(i,{attrs:c,slots:a,emit:l}):K(i,null)),k=e.props?c:nu(c)}}catch(K){Mn.length=0,$s(K,t,1),U=X(Rt)}let O=U;if(k&&P!==!1){const K=Object.keys(k),{shapeFlag:Y}=O;K.length&&Y&7&&(o&&K.some(jr)&&(k=su(k,o)),O=un(O,k))}return n.dirs&&(O=un(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Is($),U}const nu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ns(n))&&((e||(e={}))[n]=t[n]);return e},su=(t,e)=>{const n={};for(const s in t)(!jr(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ru(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Ui(s,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(o[p]!==s[p]&&!Fs(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?Ui(s,o,l):!0:!!o;return!1}function Ui(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Fs(n,i))return!0}return!1}function iu({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ou=t=>t.__isSuspense;function au(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Zl(t)}function ps(t,e){if(ge){let n=ge.provides;const s=ge.parent&&ge.parent.provides;s===n&&(n=ge.provides=Object.create(s)),n[t]=e}}function Je(t,e,n=!1){const s=ge||_e;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&j(e)?e.call(s.proxy):e}}const ls={};function Pn(t,e,n){return xa(t,e,n)}function xa(t,e,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=ie){const a=ge;let c,l=!1,f=!1;if(ce(t)?(c=()=>t.value,l=Es(t)):wt(t)?(c=()=>t,s=!0):L(t)?(f=!0,l=t.some(O=>wt(O)||Es(O)),c=()=>t.map(O=>{if(ce(O))return O.value;if(wt(O))return Ft(O);if(j(O))return Et(O,a,2)})):j(t)?e?c=()=>Et(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Ve(t,a,3,[p])}:c=He,e&&s){const O=c;c=()=>Ft(O())}let h,p=O=>{h=k.onStop=()=>{Et(O,a,4)}},_;if(Wn)if(p=He,e?n&&Ve(e,a,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const O=tf();_=O.__watcherHandles||(O.__watcherHandles=[])}else return He;let T=f?new Array(t.length).fill(ls):ls;const P=()=>{if(k.active)if(e){const O=k.run();(s||l||(f?O.some((K,Y)=>Fn(K,T[Y])):Fn(O,T)))&&(h&&h(),Ve(e,a,3,[O,T===ls?void 0:f&&T[0]===ls?[]:T,p]),T=O)}else k.run()};P.allowRecurse=!!e;let U;r==="sync"?U=P:r==="post"?U=()=>Re(P,a&&a.suspense):(P.pre=!0,a&&(P.id=a.uid),U=()=>ei(P));const k=new Wr(c,U);e?n?P():T=k.run():r==="post"?Re(k.run.bind(k),a&&a.suspense):k.run();const $=()=>{k.stop(),a&&a.scope&&Hr(a.scope.effects,k)};return _&&_.push($),$}function cu(t,e,n){const s=this.proxy,r=fe(t)?t.includes(".")?Ta(s,t):()=>s[t]:t.bind(s,s);let i;j(e)?i=e:(i=e.handler,n=e);const o=ge;fn(this);const a=xa(r,i.bind(s),n);return o?fn(o):Ht(),a}function Ta(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Ft(t,e){if(!re(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ce(t))Ft(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)Ft(t[n],e);else if(bn(t)||tn(t))t.forEach(n=>{Ft(n,e)});else if(Qo(t))for(const n in t)Ft(t[n],e);return t}function Sa(t){return j(t)?{setup:t,name:t.name}:t}const An=t=>!!t.type.__asyncLoader,Ra=t=>t.type.__isKeepAlive;function lu(t,e){Ca(t,"a",e)}function uu(t,e){Ca(t,"da",e)}function Ca(t,e,n=ge){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Bs(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Ra(r.parent.vnode)&&fu(s,e,n,r),r=r.parent}}function fu(t,e,n,s){const r=Bs(e,t,s,!0);ka(()=>{Hr(s[e],r)},n)}function Bs(t,e,n=ge,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;yn(),fn(n);const a=Ve(e,n,t,o);return Ht(),wn(),a});return s?r.unshift(i):r.push(i),i}}const ct=t=>(e,n=ge)=>(!Wn||t==="sp")&&Bs(t,(...s)=>e(...s),n),du=ct("bm"),hu=ct("m"),pu=ct("bu"),gu=ct("u"),mu=ct("bum"),ka=ct("um"),_u=ct("sp"),bu=ct("rtg"),vu=ct("rtc");function yu(t,e=ge){Bs("ec",t,e)}function be(t,e){const n=_e;if(n===null)return t;const s=zs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ie]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&Ft(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ot(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(yn(),Ve(c,n,8,[t.el,a,t,e]),wn())}}const ti="components";function Wt(t,e){return Aa(ti,t,!0,e)||t}const Pa=Symbol();function wu(t){return fe(t)?Aa(ti,t,!1)||t:t||Pa}function Aa(t,e,n=!0,s=!1){const r=_e||ge;if(r){const i=r.type;if(t===ti){const a=Qu(i,!1);if(a&&(a===e||a===Qe(e)||a===Ls(Qe(e))))return i}const o=$i(r[t]||i[t],e)||$i(r.appContext[t],e);return!o&&s?i:o}}function $i(t,e){return t&&(t[e]||t[Qe(e)]||t[Ls(Qe(e))])}function Rb(t,e,n,s){let r;const i=n&&n[s];if(L(t)||fe(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,i&&i[o])}else if(re(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];r[a]=e(t[l],l,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}function Eu(t,e,n={},s,r){if(_e.isCE||_e.parent&&An(_e.parent)&&_e.parent.isCE)return e!=="default"&&(n.name=e),X("slot",n,s&&s());let i=t[e];i&&i._c&&(i._d=!1),ye();const o=i&&Oa(i(n)),a=Hs(De,{key:n.key||o&&o.key||`_${e}`},o||(s?s():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function Oa(t){return t.some(e=>Ts(e)?!(e.type===Rt||e.type===De&&!Oa(e.children)):!0)?t:null}const yr=t=>t?Va(t)?zs(t)||t.proxy:yr(t.parent):null,On=xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>yr(t.parent),$root:t=>yr(t.root),$emit:t=>t.emit,$options:t=>ni(t),$forceUpdate:t=>t.f||(t.f=()=>ei(t.update)),$nextTick:t=>t.n||(t.n=Zr.bind(t.proxy)),$watch:t=>cu.bind(t)}),nr=(t,e)=>t!==ie&&!t.__isScriptSetup&&G(t,e),Iu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(nr(s,e))return o[e]=1,s[e];if(r!==ie&&G(r,e))return o[e]=2,r[e];if((l=t.propsOptions[0])&&G(l,e))return o[e]=3,i[e];if(n!==ie&&G(n,e))return o[e]=4,n[e];wr&&(o[e]=0)}}const f=On[e];let h,p;if(f)return e==="$attrs"&&Me(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&G(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,G(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return nr(r,e)?(r[e]=n,!0):s!==ie&&G(s,e)?(s[e]=n,!0):G(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&G(t,o)||nr(e,o)||(a=i[0])&&G(a,o)||G(s,o)||G(On,o)||G(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:G(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let wr=!0;function xu(t){const e=ni(t),n=t.proxy,s=t.ctx;wr=!1,e.beforeCreate&&Fi(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:_,updated:T,activated:P,deactivated:U,beforeDestroy:k,beforeUnmount:$,destroyed:O,unmounted:K,render:Y,renderTracked:oe,renderTriggered:z,errorCaptured:W,serverPrefetch:de,expose:he,inheritAttrs:Te,components:Ne,directives:lt,filters:ke}=e;if(l&&Tu(l,s,null,t.appContext.config.unwrapInjectedRef),o)for(const te in o){const Z=o[te];j(Z)&&(s[te]=Z.bind(n))}if(r){const te=r.call(n,n);re(te)&&(t.data=En(te))}if(wr=!0,i)for(const te in i){const Z=i[te],Ue=j(Z)?Z.bind(n,n):j(Z.get)?Z.get.bind(n,n):He,At=!j(Z)&&j(Z.set)?Z.set.bind(n):He,$e=Oe({get:Ue,set:At});Object.defineProperty(s,te,{enumerable:!0,configurable:!0,get:()=>$e.value,set:Se=>$e.value=Se})}if(a)for(const te in a)Ma(a[te],s,n,te);if(c){const te=j(c)?c.call(n):c;Reflect.ownKeys(te).forEach(Z=>{ps(Z,te[Z])})}f&&Fi(f,t,"c");function le(te,Z){L(Z)?Z.forEach(Ue=>te(Ue.bind(n))):Z&&te(Z.bind(n))}if(le(du,h),le(hu,p),le(pu,_),le(gu,T),le(lu,P),le(uu,U),le(yu,W),le(vu,oe),le(bu,z),le(mu,$),le(ka,K),le(_u,de),L(he))if(he.length){const te=t.exposed||(t.exposed={});he.forEach(Z=>{Object.defineProperty(te,Z,{get:()=>n[Z],set:Ue=>n[Z]=Ue})})}else t.exposed||(t.exposed={});Y&&t.render===He&&(t.render=Y),Te!=null&&(t.inheritAttrs=Te),Ne&&(t.components=Ne),lt&&(t.directives=lt)}function Tu(t,e,n=He,s=!1){L(t)&&(t=Er(t));for(const r in t){const i=t[r];let o;re(i)?"default"in i?o=Je(i.from||r,i.default,!0):o=Je(i.from||r):o=Je(i),ce(o)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Fi(t,e,n){Ve(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ma(t,e,n,s){const r=s.includes(".")?Ta(n,s):()=>n[s];if(fe(t)){const i=e[t];j(i)&&Pn(r,i)}else if(j(t))Pn(r,t.bind(n));else if(re(t))if(L(t))t.forEach(i=>Ma(i,e,n,s));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&Pn(r,i,t)}}function ni(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>xs(c,l,o,!0)),xs(c,e,o)),re(e)&&i.set(e,c),c}function xs(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&xs(t,i,n,!0),r&&r.forEach(o=>xs(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=Su[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Su={data:Bi,props:Nt,emits:Nt,methods:Nt,computed:Nt,beforeCreate:Ee,created:Ee,beforeMount:Ee,mounted:Ee,beforeUpdate:Ee,updated:Ee,beforeDestroy:Ee,beforeUnmount:Ee,destroyed:Ee,unmounted:Ee,activated:Ee,deactivated:Ee,errorCaptured:Ee,serverPrefetch:Ee,components:Nt,directives:Nt,watch:Cu,provide:Bi,inject:Ru};function Bi(t,e){return e?t?function(){return xe(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Ru(t,e){return Nt(Er(t),Er(e))}function Er(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ee(t,e){return t?[...new Set([].concat(t,e))]:e}function Nt(t,e){return t?xe(xe(Object.create(null),t),e):e}function Cu(t,e){if(!t)return e;if(!e)return t;const n=xe(Object.create(null),t);for(const s in e)n[s]=Ee(t[s],e[s]);return n}function ku(t,e,n,s=!1){const r={},i={};ws(i,Vs,1),t.propsDefaults=Object.create(null),Na(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:jl(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function Pu(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=J(r),[c]=t.propsOptions;let l=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Fs(t.emitsOptions,p))continue;const _=e[p];if(c)if(G(i,p))_!==i[p]&&(i[p]=_,l=!0);else{const T=Qe(p);r[T]=Ir(c,a,T,_,t,!1)}else _!==i[p]&&(i[p]=_,l=!0)}}}else{Na(t,e,r,i)&&(l=!0);let f;for(const h in a)(!e||!G(e,h)&&((f=vn(h))===h||!G(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Ir(c,a,h,void 0,t,!0)):delete r[h]);if(i!==a)for(const h in i)(!e||!G(e,h))&&(delete i[h],l=!0)}l&&ot(t,"set","$attrs")}function Na(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(ds(c))continue;const l=e[c];let f;r&&G(r,f=Qe(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Fs(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,o=!0)}if(i){const c=J(n),l=a||ie;for(let f=0;f<i.length;f++){const h=i[f];n[h]=Ir(r,c,h,l[h],t,!G(l,h))}}return o}function Ir(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=G(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&j(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(fn(r),s=l[n]=c.call(null,e),Ht())}else s=c}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===vn(n))&&(s=!0))}return s}function Da(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const f=h=>{c=!0;const[p,_]=Da(h,e,!0);xe(o,p),_&&a.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return re(t)&&s.set(t,en),en;if(L(i))for(let f=0;f<i.length;f++){const h=Qe(i[f]);ji(h)&&(o[h]=ie)}else if(i)for(const f in i){const h=Qe(f);if(ji(h)){const p=i[f],_=o[h]=L(p)||j(p)?{type:p}:Object.assign({},p);if(_){const T=zi(Boolean,_.type),P=zi(String,_.type);_[0]=T>-1,_[1]=P<0||T<P,(T>-1||G(_,"default"))&&a.push(h)}}}const l=[o,a];return re(t)&&s.set(t,l),l}function ji(t){return t[0]!=="$"}function Hi(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Vi(t,e){return Hi(t)===Hi(e)}function zi(t,e){return L(e)?e.findIndex(n=>Vi(n,t)):j(e)&&Vi(e,t)?0:-1}const La=t=>t[0]==="_"||t==="$stable",si=t=>L(t)?t.map(qe):[qe(t)],Au=(t,e,n)=>{if(e._n)return e;const s=Ce((...r)=>si(e(...r)),n);return s._c=!1,s},Ua=(t,e,n)=>{const s=t._ctx;for(const r in t){if(La(r))continue;const i=t[r];if(j(i))e[r]=Au(r,i,s);else if(i!=null){const o=si(i);e[r]=()=>o}}},$a=(t,e)=>{const n=si(e);t.slots.default=()=>n},Ou=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),ws(e,"_",n)):Ua(e,t.slots={})}else t.slots={},e&&$a(t,e);ws(t.slots,Vs,1)},Mu=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(xe(r,e),!n&&a===1&&delete r._):(i=!e.$stable,Ua(e,r)),o=e}else e&&($a(t,e),o={default:1});if(i)for(const a in r)!La(a)&&!(a in o)&&delete r[a]};function Fa(){return{app:null,config:{isNativeTag:ol,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nu=0;function Du(t,e){return function(s,r=null){j(s)||(s=Object.assign({},s)),r!=null&&!re(r)&&(r=null);const i=Fa(),o=new Set;let a=!1;const c=i.app={_uid:Nu++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:nf,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...f)):j(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,h){if(!a){const p=X(s,r);return p.appContext=i,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,zs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c}};return c}}function xr(t,e,n,s,r=!1){if(L(t)){t.forEach((p,_)=>xr(p,e&&(L(e)?e[_]:e),n,s,r));return}if(An(s)&&!r)return;const i=s.shapeFlag&4?zs(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(fe(l)?(f[l]=null,G(h,l)&&(h[l]=null)):ce(l)&&(l.value=null)),j(c))Et(c,a,12,[o,f]);else{const p=fe(c),_=ce(c);if(p||_){const T=()=>{if(t.f){const P=p?G(h,c)?h[c]:f[c]:c.value;r?L(P)&&Hr(P,i):L(P)?P.includes(i)||P.push(i):p?(f[c]=[i],G(h,c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,G(h,c)&&(h[c]=o)):_&&(c.value=o,t.k&&(f[t.k]=o))};o?(T.id=-1,Re(T,n)):T()}}}const Re=au;function Lu(t){return Uu(t)}function Uu(t,e){const n=dl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:_=He,insertStaticContent:T}=t,P=(u,d,g,m=null,y=null,I=null,R=!1,E=null,x=!!d.dynamicChildren)=>{if(u===d)return;u&&!Tn(u,d)&&(m=S(u),Se(u,y,I,!0),u=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:w,ref:N,shapeFlag:A}=d;switch(w){case js:U(u,d,g,m);break;case Rt:k(u,d,g,m);break;case gs:u==null&&$(d,g,m,R);break;case De:Ne(u,d,g,m,y,I,R,E,x);break;default:A&1?Y(u,d,g,m,y,I,R,E,x):A&6?lt(u,d,g,m,y,I,R,E,x):(A&64||A&128)&&w.process(u,d,g,m,y,I,R,E,x,q)}N!=null&&y&&xr(N,u&&u.ref,I,d||u,!d)},U=(u,d,g,m)=>{if(u==null)s(d.el=a(d.children),g,m);else{const y=d.el=u.el;d.children!==u.children&&l(y,d.children)}},k=(u,d,g,m)=>{u==null?s(d.el=c(d.children||""),g,m):d.el=u.el},$=(u,d,g,m)=>{[u.el,u.anchor]=T(u.children,d,g,m,u.el,u.anchor)},O=({el:u,anchor:d},g,m)=>{let y;for(;u&&u!==d;)y=p(u),s(u,g,m),u=y;s(d,g,m)},K=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},Y=(u,d,g,m,y,I,R,E,x)=>{R=R||d.type==="svg",u==null?oe(d,g,m,y,I,R,E,x):de(u,d,y,I,R,E,x)},oe=(u,d,g,m,y,I,R,E)=>{let x,w;const{type:N,props:A,shapeFlag:D,transition:B,dirs:V}=u;if(x=u.el=o(u.type,I,A&&A.is,A),D&8?f(x,u.children):D&16&&W(u.children,x,null,m,y,I&&N!=="foreignObject",R,E),V&&Ot(u,null,m,"created"),A){for(const ee in A)ee!=="value"&&!ds(ee)&&i(x,ee,null,A[ee],I,u.children,m,y,C);"value"in A&&i(x,"value",null,A.value),(w=A.onVnodeBeforeMount)&&Ke(w,m,u)}z(x,u,u.scopeId,R,m),V&&Ot(u,null,m,"beforeMount");const ne=(!y||y&&!y.pendingBranch)&&B&&!B.persisted;ne&&B.beforeEnter(x),s(x,d,g),((w=A&&A.onVnodeMounted)||ne||V)&&Re(()=>{w&&Ke(w,m,u),ne&&B.enter(x),V&&Ot(u,null,m,"mounted")},y)},z=(u,d,g,m,y)=>{if(g&&_(u,g),m)for(let I=0;I<m.length;I++)_(u,m[I]);if(y){let I=y.subTree;if(d===I){const R=y.vnode;z(u,R,R.scopeId,R.slotScopeIds,y.parent)}}},W=(u,d,g,m,y,I,R,E,x=0)=>{for(let w=x;w<u.length;w++){const N=u[w]=E?ht(u[w]):qe(u[w]);P(null,N,d,g,m,y,I,R,E)}},de=(u,d,g,m,y,I,R)=>{const E=d.el=u.el;let{patchFlag:x,dynamicChildren:w,dirs:N}=d;x|=u.patchFlag&16;const A=u.props||ie,D=d.props||ie;let B;g&&Mt(g,!1),(B=D.onVnodeBeforeUpdate)&&Ke(B,g,d,u),N&&Ot(d,u,g,"beforeUpdate"),g&&Mt(g,!0);const V=y&&d.type!=="foreignObject";if(w?he(u.dynamicChildren,w,E,g,m,V,I):R||Z(u,d,E,null,g,m,V,I,!1),x>0){if(x&16)Te(E,d,A,D,g,m,y);else if(x&2&&A.class!==D.class&&i(E,"class",null,D.class,y),x&4&&i(E,"style",A.style,D.style,y),x&8){const ne=d.dynamicProps;for(let ee=0;ee<ne.length;ee++){const ue=ne[ee],Fe=A[ue],Jt=D[ue];(Jt!==Fe||ue==="value")&&i(E,ue,Fe,Jt,y,u.children,g,m,C)}}x&1&&u.children!==d.children&&f(E,d.children)}else!R&&w==null&&Te(E,d,A,D,g,m,y);((B=D.onVnodeUpdated)||N)&&Re(()=>{B&&Ke(B,g,d,u),N&&Ot(d,u,g,"updated")},m)},he=(u,d,g,m,y,I,R)=>{for(let E=0;E<d.length;E++){const x=u[E],w=d[E],N=x.el&&(x.type===De||!Tn(x,w)||x.shapeFlag&70)?h(x.el):g;P(x,w,N,null,m,y,I,R,!0)}},Te=(u,d,g,m,y,I,R)=>{if(g!==m){if(g!==ie)for(const E in g)!ds(E)&&!(E in m)&&i(u,E,g[E],null,R,d.children,y,I,C);for(const E in m){if(ds(E))continue;const x=m[E],w=g[E];x!==w&&E!=="value"&&i(u,E,w,x,R,d.children,y,I,C)}"value"in m&&i(u,"value",g.value,m.value)}},Ne=(u,d,g,m,y,I,R,E,x)=>{const w=d.el=u?u.el:a(""),N=d.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:B}=d;B&&(E=E?E.concat(B):B),u==null?(s(w,g,m),s(N,g,m),W(d.children,g,N,y,I,R,E,x)):A>0&&A&64&&D&&u.dynamicChildren?(he(u.dynamicChildren,D,g,y,I,R,E),(d.key!=null||y&&d===y.subTree)&&Ba(u,d,!0)):Z(u,d,g,N,y,I,R,E,x)},lt=(u,d,g,m,y,I,R,E,x)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?y.ctx.activate(d,g,m,R,x):ke(d,g,m,y,I,R,x):pe(u,d,x)},ke=(u,d,g,m,y,I,R)=>{const E=u.component=Ku(u,m,y);if(Ra(u)&&(E.ctx.renderer=q),Gu(E),E.asyncDep){if(y&&y.registerDep(E,le),!u.el){const x=E.subTree=X(Rt);k(null,x,d,g)}return}le(E,u,d,g,y,I,R)},pe=(u,d,g)=>{const m=d.component=u.component;if(ru(u,d,g))if(m.asyncDep&&!m.asyncResolved){te(m,d,g);return}else m.next=d,Ql(m.update),m.update();else d.el=u.el,m.vnode=d},le=(u,d,g,m,y,I,R)=>{const E=()=>{if(u.isMounted){let{next:N,bu:A,u:D,parent:B,vnode:V}=u,ne=N,ee;Mt(u,!1),N?(N.el=V.el,te(u,N,R)):N=V,A&&hs(A),(ee=N.props&&N.props.onVnodeBeforeUpdate)&&Ke(ee,B,N,V),Mt(u,!0);const ue=tr(u),Fe=u.subTree;u.subTree=ue,P(Fe,ue,h(Fe.el),S(Fe),u,y,I),N.el=ue.el,ne===null&&iu(u,ue.el),D&&Re(D,y),(ee=N.props&&N.props.onVnodeUpdated)&&Re(()=>Ke(ee,B,N,V),y)}else{let N;const{el:A,props:D}=d,{bm:B,m:V,parent:ne}=u,ee=An(d);if(Mt(u,!1),B&&hs(B),!ee&&(N=D&&D.onVnodeBeforeMount)&&Ke(N,ne,d),Mt(u,!0),A&&H){const ue=()=>{u.subTree=tr(u),H(A,u.subTree,u,y,null)};ee?d.type.__asyncLoader().then(()=>!u.isUnmounted&&ue()):ue()}else{const ue=u.subTree=tr(u);P(null,ue,g,m,u,y,I),d.el=ue.el}if(V&&Re(V,y),!ee&&(N=D&&D.onVnodeMounted)){const ue=d;Re(()=>Ke(N,ne,ue),y)}(d.shapeFlag&256||ne&&An(ne.vnode)&&ne.vnode.shapeFlag&256)&&u.a&&Re(u.a,y),u.isMounted=!0,d=g=m=null}},x=u.effect=new Wr(E,()=>ei(w),u.scope),w=u.update=()=>x.run();w.id=u.uid,Mt(u,!0),w()},te=(u,d,g)=>{d.component=u;const m=u.vnode.props;u.vnode=d,u.next=null,Pu(u,d.props,m,g),Mu(u,d.children,g),yn(),Li(),wn()},Z=(u,d,g,m,y,I,R,E,x=!1)=>{const w=u&&u.children,N=u?u.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:B}=d;if(D>0){if(D&128){At(w,A,g,m,y,I,R,E,x);return}else if(D&256){Ue(w,A,g,m,y,I,R,E,x);return}}B&8?(N&16&&C(w,y,I),A!==w&&f(g,A)):N&16?B&16?At(w,A,g,m,y,I,R,E,x):C(w,y,I,!0):(N&8&&f(g,""),B&16&&W(A,g,m,y,I,R,E,x))},Ue=(u,d,g,m,y,I,R,E,x)=>{u=u||en,d=d||en;const w=u.length,N=d.length,A=Math.min(w,N);let D;for(D=0;D<A;D++){const B=d[D]=x?ht(d[D]):qe(d[D]);P(u[D],B,g,null,y,I,R,E,x)}w>N?C(u,y,I,!0,!1,A):W(d,g,m,y,I,R,E,x,A)},At=(u,d,g,m,y,I,R,E,x)=>{let w=0;const N=d.length;let A=u.length-1,D=N-1;for(;w<=A&&w<=D;){const B=u[w],V=d[w]=x?ht(d[w]):qe(d[w]);if(Tn(B,V))P(B,V,g,null,y,I,R,E,x);else break;w++}for(;w<=A&&w<=D;){const B=u[A],V=d[D]=x?ht(d[D]):qe(d[D]);if(Tn(B,V))P(B,V,g,null,y,I,R,E,x);else break;A--,D--}if(w>A){if(w<=D){const B=D+1,V=B<N?d[B].el:m;for(;w<=D;)P(null,d[w]=x?ht(d[w]):qe(d[w]),g,V,y,I,R,E,x),w++}}else if(w>D)for(;w<=A;)Se(u[w],y,I,!0),w++;else{const B=w,V=w,ne=new Map;for(w=V;w<=D;w++){const Pe=d[w]=x?ht(d[w]):qe(d[w]);Pe.key!=null&&ne.set(Pe.key,w)}let ee,ue=0;const Fe=D-V+1;let Jt=!1,xi=0;const xn=new Array(Fe);for(w=0;w<Fe;w++)xn[w]=0;for(w=B;w<=A;w++){const Pe=u[w];if(ue>=Fe){Se(Pe,y,I,!0);continue}let We;if(Pe.key!=null)We=ne.get(Pe.key);else for(ee=V;ee<=D;ee++)if(xn[ee-V]===0&&Tn(Pe,d[ee])){We=ee;break}We===void 0?Se(Pe,y,I,!0):(xn[We-V]=w+1,We>=xi?xi=We:Jt=!0,P(Pe,d[We],g,null,y,I,R,E,x),ue++)}const Ti=Jt?$u(xn):en;for(ee=Ti.length-1,w=Fe-1;w>=0;w--){const Pe=V+w,We=d[Pe],Si=Pe+1<N?d[Pe+1].el:m;xn[w]===0?P(null,We,g,Si,y,I,R,E,x):Jt&&(ee<0||w!==Ti[ee]?$e(We,g,Si,2):ee--)}}},$e=(u,d,g,m,y=null)=>{const{el:I,type:R,transition:E,children:x,shapeFlag:w}=u;if(w&6){$e(u.component.subTree,d,g,m);return}if(w&128){u.suspense.move(d,g,m);return}if(w&64){R.move(u,d,g,q);return}if(R===De){s(I,d,g);for(let A=0;A<x.length;A++)$e(x[A],d,g,m);s(u.anchor,d,g);return}if(R===gs){O(u,d,g);return}if(m!==2&&w&1&&E)if(m===0)E.beforeEnter(I),s(I,d,g),Re(()=>E.enter(I),y);else{const{leave:A,delayLeave:D,afterLeave:B}=E,V=()=>s(I,d,g),ne=()=>{A(I,()=>{V(),B&&B()})};D?D(I,V,ne):ne()}else s(I,d,g)},Se=(u,d,g,m=!1,y=!1)=>{const{type:I,props:R,ref:E,children:x,dynamicChildren:w,shapeFlag:N,patchFlag:A,dirs:D}=u;if(E!=null&&xr(E,null,g,u,!0),N&256){d.ctx.deactivate(u);return}const B=N&1&&D,V=!An(u);let ne;if(V&&(ne=R&&R.onVnodeBeforeUnmount)&&Ke(ne,d,u),N&6)b(u.component,g,m);else{if(N&128){u.suspense.unmount(g,m);return}B&&Ot(u,null,d,"beforeUnmount"),N&64?u.type.remove(u,d,g,y,q,m):w&&(I!==De||A>0&&A&64)?C(w,d,g,!1,!0):(I===De&&A&384||!y&&N&16)&&C(x,d,g),m&&Gt(u)}(V&&(ne=R&&R.onVnodeUnmounted)||B)&&Re(()=>{ne&&Ke(ne,d,u),B&&Ot(u,null,d,"unmounted")},g)},Gt=u=>{const{type:d,el:g,anchor:m,transition:y}=u;if(d===De){ss(g,m);return}if(d===gs){K(u);return}const I=()=>{r(g),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(u.shapeFlag&1&&y&&!y.persisted){const{leave:R,delayLeave:E}=y,x=()=>R(g,I);E?E(u.el,I,x):x()}else I()},ss=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},b=(u,d,g)=>{const{bum:m,scope:y,update:I,subTree:R,um:E}=u;m&&hs(m),y.stop(),I&&(I.active=!1,Se(R,u,d,g)),E&&Re(E,d),Re(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},C=(u,d,g,m=!1,y=!1,I=0)=>{for(let R=I;R<u.length;R++)Se(u[R],d,g,m,y)},S=u=>u.shapeFlag&6?S(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),M=(u,d,g)=>{u==null?d._vnode&&Se(d._vnode,null,null,!0):P(d._vnode||null,u,d,null,null,null,g),Li(),ya(),d._vnode=u},q={p:P,um:Se,m:$e,r:Gt,mt:ke,mc:W,pc:Z,pbc:he,n:S,o:t};let ae,H;return e&&([ae,H]=e(q)),{render:M,hydrate:ae,createApp:Du(M,ae)}}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ba(t,e,n=!1){const s=t.children,r=e.children;if(L(s)&&L(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ht(r[i]),a.el=o.el),n||Ba(o,a)),a.type===js&&(a.el=o.el)}}function $u(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Fu=t=>t.__isTeleport,De=Symbol(void 0),js=Symbol(void 0),Rt=Symbol(void 0),gs=Symbol(void 0),Mn=[];let je=null;function ye(t=!1){Mn.push(je=t?null:[])}function Bu(){Mn.pop(),je=Mn[Mn.length-1]||null}let zn=1;function Wi(t){zn+=t}function ja(t){return t.dynamicChildren=zn>0?je||en:null,Bu(),zn>0&&je&&je.push(t),t}function Le(t,e,n,s,r,i){return ja(v(t,e,n,s,r,i,!0))}function Hs(t,e,n,s,r){return ja(X(t,e,n,s,r,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function Tn(t,e){return t.type===e.type&&t.key===e.key}const Vs="__vInternal",Ha=({key:t})=>t??null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?fe(t)||ce(t)||j(t)?{i:_e,r:t,k:e,f:!!n}:t:null;function v(t,e=null,n=null,s=0,r=null,i=t===De?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ha(e),ref:e&&ms(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_e};return a?(ii(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=fe(n)?8:16),zn>0&&!o&&je&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&je.push(c),c}const X=ju;function ju(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===Pa)&&(t=Rt),Ts(t)){const a=un(t,e,!0);return n&&ii(a,n),zn>0&&!i&&je&&(a.shapeFlag&6?je[je.indexOf(t)]=a:je.push(a)),a.patchFlag|=-2,a}if(Zu(t)&&(t=t.__vccOpts),e){e=Hu(e);let{class:a,style:c}=e;a&&!fe(a)&&(e.class=_n(a)),re(c)&&(da(c)&&!L(c)&&(c=xe({},c)),e.style=mt(c))}const o=fe(t)?1:ou(t)?128:Fu(t)?64:re(t)?4:j(t)?2:0;return v(t,e,n,s,r,o,i,!0)}function Hu(t){return t?da(t)||Vs in t?xe({},t):t:null}function un(t,e,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=t,a=e?Vu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ha(a),ref:e&&e.ref?n&&r?L(r)?r.concat(ms(e)):[r,ms(e)]:ms(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==De?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&un(t.ssContent),ssFallback:t.ssFallback&&un(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function me(t=" ",e=0){return X(js,null,t,e)}function ri(t,e){const n=X(gs,null,t);return n.staticCount=e,n}function Ss(t="",e=!1){return e?(ye(),Hs(Rt,null,t)):X(Rt,null,t)}function qe(t){return t==null||typeof t=="boolean"?X(Rt):L(t)?X(De,null,t.slice()):typeof t=="object"?ht(t):X(js,null,String(t))}function ht(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:un(t)}function ii(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),ii(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Vs in e)?e._ctx=_e:r===3&&_e&&(_e.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:_e},n=32):(e=String(e),s&64?(n=16,e=[me(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=_n([e.class,s.class]));else if(r==="style")e.style=mt([e.style,s.style]);else if(Ns(r)){const i=e[r],o=s[r];o&&i!==o&&!(L(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ke(t,e,n,s=null){Ve(t,e,7,[n,s])}const zu=Fa();let Wu=0;function Ku(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||zu,i={uid:Wu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Da(s,r),emitsOptions:Ea(s,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tu.bind(null,i),t.ce&&t.ce(i),i}let ge=null;const qu=()=>ge||_e,fn=t=>{ge=t,t.scope.on()},Ht=()=>{ge&&ge.scope.off(),ge=null};function Va(t){return t.vnode.shapeFlag&4}let Wn=!1;function Gu(t,e=!1){Wn=e;const{props:n,children:s}=t.vnode,r=Va(t);ku(t,n,r,e),Ou(t,s);const i=r?Ju(t,e):void 0;return Wn=!1,i}function Ju(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ln(new Proxy(t.ctx,Iu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Xu(t):null;fn(t),yn();const i=Et(s,t,0,[t.props,r]);if(wn(),Ht(),Yo(i)){if(i.then(Ht,Ht),e)return i.then(o=>{Ki(t,o,e)}).catch(o=>{$s(o,t,0)});t.asyncDep=i}else Ki(t,i,e)}else za(t,e)}function Ki(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:re(e)&&(t.setupState=ma(e)),za(t,n)}let qi;function za(t,e,n){const s=t.type;if(!t.render){if(!e&&qi&&!s.render){const r=s.template||ni(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=xe(xe({isCustomElement:i,delimiters:a},o),c);s.render=qi(r,l)}}t.render=s.render||He}fn(t),yn(),xu(t),wn(),Ht()}function Yu(t){return new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}})}function Xu(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Yu(t))},slots:t.slots,emit:t.emit,expose:e}}function zs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ma(ln(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}}))}function Qu(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function Zu(t){return j(t)&&"__vccOpts"in t}const Oe=(t,e)=>Jl(t,e,Wn);function Wa(t,e,n){const s=arguments.length;return s===2?re(e)&&!L(e)?Ts(e)?X(t,null,[e]):X(t,e):X(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ts(n)&&(n=[n]),X(t,e,n))}const ef=Symbol(""),tf=()=>Je(ef),nf="3.2.45",sf="http://www.w3.org/2000/svg",Ut=typeof document<"u"?document:null,Gi=Ut&&Ut.createElement("template"),rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ut.createElementNS(sf,t):Ut.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ut.createTextNode(t),createComment:t=>Ut.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ut.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Gi.innerHTML=s?`<svg>${t}</svg>`:t;const a=Gi.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function of(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function af(t,e,n){const s=t.style,r=fe(n);if(n&&!r){for(const i in n)Tr(s,i,n[i]);if(e&&!fe(e))for(const i in e)n[i]==null&&Tr(s,i,"")}else{const i=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=i)}}const Ji=/\s*!important$/;function Tr(t,e,n){if(L(n))n.forEach(s=>Tr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=cf(t,e);Ji.test(n)?t.setProperty(vn(s),n.replace(Ji,""),"important"):t[s]=n}}const Yi=["Webkit","Moz","ms"],sr={};function cf(t,e){const n=sr[e];if(n)return n;let s=Qe(e);if(s!=="filter"&&s in t)return sr[e]=s;s=Ls(s);for(let r=0;r<Yi.length;r++){const i=Yi[r]+s;if(i in t)return sr[e]=i}return e}const Xi="http://www.w3.org/1999/xlink";function lf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Xi,e.slice(6,e.length)):t.setAttributeNS(Xi,e,n);else{const i=rl(e);n==null||i&&!Go(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function uf(t,e,n,s,r,i,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,r,i),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Go(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function st(t,e,n,s){t.addEventListener(e,n,s)}function ff(t,e,n,s){t.removeEventListener(e,n,s)}function df(t,e,n,s,r=null){const i=t._vei||(t._vei={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=hf(e);if(s){const l=i[e]=mf(s,r);st(t,a,l,c)}else o&&(ff(t,a,o,c),i[e]=void 0)}}const Qi=/(?:Once|Passive|Capture)$/;function hf(t){let e;if(Qi.test(t)){e={};let s;for(;s=t.match(Qi);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}let rr=0;const pf=Promise.resolve(),gf=()=>rr||(pf.then(()=>rr=0),rr=Date.now());function mf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ve(_f(s,n.value),e,5,[s])};return n.value=t,n.attached=gf(),n}function _f(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Zi=/^on[a-z]/,bf=(t,e,n,s,r=!1,i,o,a,c)=>{e==="class"?of(t,s,r):e==="style"?af(t,n,s):Ns(e)?jr(e)||df(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vf(t,e,s,r))?uf(t,e,s,i,o,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lf(t,e,s,r))};function vf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Zi.test(e)&&j(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Zi.test(e)&&fe(n)?!1:e in t}const Ct=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>hs(e,n):e};function yf(t){t.target.composing=!0}function eo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const It={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=Ct(r);const i=s||r.props&&r.props.type==="number";st(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bn(a)),t._assign(a)}),n&&st(t,"change",()=>{t.value=t.value.trim()}),e||(st(t,"compositionstart",yf),st(t,"compositionend",eo),st(t,"change",eo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},i){if(t._assign=Ct(i),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&Bn(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},wf={deep:!0,created(t,e,n){t._assign=Ct(n),st(t,"change",()=>{const s=t._modelValue,r=dn(t),i=t.checked,o=t._assign;if(L(s)){const a=Br(s,r),c=a!==-1;if(i&&!c)o(s.concat(r));else if(!i&&c){const l=[...s];l.splice(a,1),o(l)}}else if(bn(s)){const a=new Set(s);i?a.add(r):a.delete(r),o(a)}else o(Ka(t,i))})},mounted:to,beforeUpdate(t,e,n){t._assign=Ct(n),to(t,e,n)}};function to(t,{value:e,oldValue:n},s){t._modelValue=e,L(e)?t.checked=Br(e,s.props.value)>-1:bn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=zt(e,Ka(t,!0)))}const Ef={created(t,{value:e},n){t.checked=zt(e,n.props.value),t._assign=Ct(n),st(t,"change",()=>{t._assign(dn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=Ct(s),e!==n&&(t.checked=zt(e,s.props.value))}},If={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=bn(e);st(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bn(dn(o)):dn(o));t._assign(t.multiple?r?new Set(i):i:i[0])}),t._assign=Ct(s)},mounted(t,{value:e}){no(t,e)},beforeUpdate(t,e,n){t._assign=Ct(n)},updated(t,{value:e}){no(t,e)}};function no(t,e){const n=t.multiple;if(!(n&&!L(e)&&!bn(e))){for(let s=0,r=t.options.length;s<r;s++){const i=t.options[s],o=dn(i);if(n)L(e)?i.selected=Br(e,o)>-1:i.selected=e.has(o);else if(zt(dn(i),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function dn(t){return"_value"in t?t._value:t.value}function Ka(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Sr={created(t,e,n){us(t,e,n,null,"created")},mounted(t,e,n){us(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){us(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){us(t,e,n,s,"updated")}};function xf(t,e){switch(t){case"SELECT":return If;case"TEXTAREA":return It;default:switch(e){case"checkbox":return wf;case"radio":return Ef;default:return It}}}function us(t,e,n,s,r){const o=xf(t.tagName,n.props&&n.props.type)[r];o&&o(t,e,n,s)}const $t={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Sn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Sn(t,!0),s.enter(t)):s.leave(t,()=>{Sn(t,!1)}):Sn(t,e))},beforeUnmount(t,{value:e}){Sn(t,e)}};function Sn(t,e){t.style.display=e?t._vod:"none"}const Tf=xe({patchProp:bf},rf);let so;function Sf(){return so||(so=Lu(Tf))}const Rf=(...t)=>{const e=Sf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Cf(s);if(!r)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Cf(t){return fe(t)?document.querySelector(t):t}var kf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let qa;const Ws=t=>qa=t,Ga=Symbol();function Rr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Nn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Nn||(Nn={}));function Pf(){const t=ea(!0),e=t.run(()=>Xr({}));let n=[],s=[];const r=ln({install(i){Ws(r),r._a=i,i.provide(Ga,r),i.config.globalProperties.$pinia=r,s.forEach(o=>n.push(o)),s=[]},use(i){return!this._a&&!kf?s.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Ja=()=>{};function ro(t,e,n,s=Ja){t.push(e);const r=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),s())};return!n&&pl()&&gl(r),r}function Yt(t,...e){t.slice().forEach(n=>{n(...e)})}function Cr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Rr(r)&&Rr(s)&&t.hasOwnProperty(n)&&!ce(s)&&!wt(s)?t[n]=Cr(r,s):t[n]=s}return t}const Af=Symbol();function Of(t){return!Rr(t)||!t.hasOwnProperty(Af)}const{assign:pt}=Object;function Mf(t){return!!(ce(t)&&t.effect)}function Nf(t,e,n,s){const{state:r,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const f=Wl(n.state.value[t]);return pt(f,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=ln(Oe(()=>{Ws(n);const _=n._s.get(t);return o[p].call(_,_)})),h),{}))}return c=Ya(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(p=>{pt(p,h)})},c}function Ya(t,e,n={},s,r,i){let o;const a=pt({actions:{}},n),c={deep:!0};let l,f,h=ln([]),p=ln([]),_;const T=s.state.value[t];!i&&!T&&(s.state.value[t]={}),Xr({});let P;function U(z){let W;l=f=!1,typeof z=="function"?(z(s.state.value[t]),W={type:Nn.patchFunction,storeId:t,events:_}):(Cr(s.state.value[t],z),W={type:Nn.patchObject,payload:z,storeId:t,events:_});const de=P=Symbol();Zr().then(()=>{P===de&&(l=!0)}),f=!0,Yt(h,W,s.state.value[t])}const k=Ja;function $(){o.stop(),h=[],p=[],s._s.delete(t)}function O(z,W){return function(){Ws(s);const de=Array.from(arguments),he=[],Te=[];function Ne(pe){he.push(pe)}function lt(pe){Te.push(pe)}Yt(p,{args:de,name:z,store:Y,after:Ne,onError:lt});let ke;try{ke=W.apply(this&&this.$id===t?this:Y,de)}catch(pe){throw Yt(Te,pe),pe}return ke instanceof Promise?ke.then(pe=>(Yt(he,pe),pe)).catch(pe=>(Yt(Te,pe),Promise.reject(pe))):(Yt(he,ke),ke)}}const K={_p:s,$id:t,$onAction:ro.bind(null,p),$patch:U,$reset:k,$subscribe(z,W={}){const de=ro(h,z,W.detached,()=>he()),he=o.run(()=>Pn(()=>s.state.value[t],Te=>{(W.flush==="sync"?f:l)&&z({storeId:t,type:Nn.direct,events:_},Te)},pt({},c,W)));return de},$dispose:$},Y=En(K);s._s.set(t,Y);const oe=s._e.run(()=>(o=ea(),o.run(()=>e())));for(const z in oe){const W=oe[z];if(ce(W)&&!Mf(W)||wt(W))i||(T&&Of(W)&&(ce(W)?W.value=T[z]:Cr(W,T[z])),s.state.value[t][z]=W);else if(typeof W=="function"){const de=O(z,W);oe[z]=de,a.actions[z]=W}}return pt(Y,oe),pt(J(Y),oe),Object.defineProperty(Y,"$state",{get:()=>s.state.value[t],set:z=>{U(W=>{pt(W,z)})}}),s._p.forEach(z=>{pt(Y,o.run(()=>z({store:Y,app:s._a,pinia:s,options:a})))}),T&&i&&n.hydrate&&n.hydrate(Y.$state,T),l=!0,f=!0,Y}function Df(t,e,n){let s,r;const i=typeof e=="function";typeof t=="string"?(s=t,r=i?n:e):(r=t,s=t.id);function o(a,c){const l=qu();return a=a||l&&Je(Ga,null),a&&Ws(a),a=qa,a._s.has(s)||(i?Ya(s,e,r,a):Nf(s,r,a)),a._s.get(s)}return o.$id=s,o}const kt=Df("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",lang:"rus",langProp:{rus:{catalogue:"Каталог",about:"О нас",blog:"Блог",contacts:"Контакты"},en:{catalogue:"Products",about:"About us",blog:"Blog",contacts:"Contacts"},kyr:{}}})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Lf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,_=l&63;c||(_=64,o||(p=64)),s.push(n[f],n[h],n[p],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||l==null||h==null)throw Error();const p=i<<2|a>>4;if(s.push(p),l!==64){const _=a<<4&240|l>>2;if(s.push(_),h!==64){const T=l<<6&192|h;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Uf=function(t){const e=Xa(t);return Qa.encodeByteArray(e,!0)},Za=function(t){return Uf(t).replace(/\./g,"")},ec=function(t){try{return Qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $f(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ff=()=>$f().__FIREBASE_DEFAULTS__,Bf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jf=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},oi=()=>{try{return Ff()||Bf()||jf()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hf=t=>{var e,n;return(n=(e=oi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vf=()=>{var t;return(t=oi())===null||t===void 0?void 0:t.config},tc=t=>{var e;return(e=oi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(we())}function Kf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gf(){const t=we();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jf(){try{return typeof indexedDB=="object"}catch{return!1}}function Yf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="FirebaseError";class Pt extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xf,Object.setPrototypeOf(this,Pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?Qf(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Pt(r,a,s)}}function Qf(t,e){return t.replace(Zf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Zf=/\{\$([^}]+)}/g;function ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Rs(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(io(i)&&io(o)){if(!Rs(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function io(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function td(t,e){const n=new nd(t,e);return n.subscribe.bind(n)}class nd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ir),r.error===void 0&&(r.error=ir),r.complete===void 0&&(r.complete=ir);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ir(){}/**
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
 */function In(t){return t&&t._delegate?t._delegate:t}class hn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Dt="[DEFAULT]";/**
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
 */class rd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(od(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:id(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function id(t){return t===Dt?void 0:t}function od(t){return t.instantiationMode==="EAGER"}/**
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
 */class ad{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rd(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const cd={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},ld=se.INFO,ud={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},fd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ud[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=ld,this._logHandler=fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const dd=(t,e)=>e.some(n=>t instanceof n);let oo,ao;function hd(){return oo||(oo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pd(){return ao||(ao=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,kr=new WeakMap,rc=new WeakMap,or=new WeakMap,ai=new WeakMap;function gd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(xt(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sc.set(n,t)}).catch(()=>{}),ai.set(e,t),e}function md(t){if(kr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});kr.set(t,e)}let Pr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _d(t){Pr=t(Pr)}function bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ar(this),e,...n);return rc.set(s,e.sort?e.sort():[e]),xt(s)}:pd().includes(t)?function(...e){return t.apply(ar(this),e),xt(sc.get(this))}:function(...e){return xt(t.apply(ar(this),e))}}function vd(t){return typeof t=="function"?bd(t):(t instanceof IDBTransaction&&md(t),dd(t,hd())?new Proxy(t,Pr):t)}function xt(t){if(t instanceof IDBRequest)return gd(t);if(or.has(t))return or.get(t);const e=vd(t);return e!==t&&(or.set(t,e),ai.set(e,t)),e}const ar=t=>ai.get(t);function yd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=xt(o);return s&&o.addEventListener("upgradeneeded",c=>{s(xt(o.result),c.oldVersion,c.newVersion,xt(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const wd=["get","getKey","getAll","getAllKeys","count"],Ed=["put","add","delete","clear"],cr=new Map;function co(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ed.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wd.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return cr.set(e,i),i}_d(t=>({...t,get:(e,n,s)=>co(e,n)||t.get(e,n,s),has:(e,n)=>!!co(e,n)||t.has(e,n)}));/**
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
 */class Id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",lo="0.9.3";/**
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
 */const Kt=new nc("@firebase/app"),Td="@firebase/app-compat",Sd="@firebase/analytics-compat",Rd="@firebase/analytics",Cd="@firebase/app-check-compat",kd="@firebase/app-check",Pd="@firebase/auth",Ad="@firebase/auth-compat",Od="@firebase/database",Md="@firebase/database-compat",Nd="@firebase/functions",Dd="@firebase/functions-compat",Ld="@firebase/installations",Ud="@firebase/installations-compat",$d="@firebase/messaging",Fd="@firebase/messaging-compat",Bd="@firebase/performance",jd="@firebase/performance-compat",Hd="@firebase/remote-config",Vd="@firebase/remote-config-compat",zd="@firebase/storage",Wd="@firebase/storage-compat",Kd="@firebase/firestore",qd="@firebase/firestore-compat",Gd="firebase",Jd="9.17.1";/**
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
 */const Or="[DEFAULT]",Yd={[Ar]:"fire-core",[Td]:"fire-core-compat",[Rd]:"fire-analytics",[Sd]:"fire-analytics-compat",[kd]:"fire-app-check",[Cd]:"fire-app-check-compat",[Pd]:"fire-auth",[Ad]:"fire-auth-compat",[Od]:"fire-rtdb",[Md]:"fire-rtdb-compat",[Nd]:"fire-fn",[Dd]:"fire-fn-compat",[Ld]:"fire-iid",[Ud]:"fire-iid-compat",[$d]:"fire-fcm",[Fd]:"fire-fcm-compat",[Bd]:"fire-perf",[jd]:"fire-perf-compat",[Hd]:"fire-rc",[Vd]:"fire-rc-compat",[zd]:"fire-gcs",[Wd]:"fire-gcs-compat",[Kd]:"fire-fst",[qd]:"fire-fst-compat","fire-js":"fire-js",[Gd]:"fire-js-all"};/**
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
 */const Cs=new Map,Mr=new Map;function Xd(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Mr.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;Mr.set(e,t);for(const n of Cs.values())Xd(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tt=new Qn("app","Firebase",Qd);/**
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
 */class Zd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=Jd;function oc(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Tt.create("bad-app-name",{appName:String(r)});if(n||(n=Vf()),!n)throw Tt.create("no-options");const i=Cs.get(r);if(i){if(Rs(n,i.options)&&Rs(s,i.config))return i;throw Tt.create("duplicate-app",{appName:r})}const o=new ad(r);for(const c of Mr.values())o.addComponent(c);const a=new Zd(n,s,o);return Cs.set(r,a),a}function eh(t=Or){const e=Cs.get(t);if(!e&&t===Or)return oc();if(!e)throw Tt.create("no-app",{appName:t});return e}function rn(t,e,n){var s;let r=(s=Yd[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}Kn(new hn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const th="firebase-heartbeat-database",nh=1,qn="firebase-heartbeat-store";let lr=null;function ac(){return lr||(lr=yd(th,nh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Tt.create("idb-open",{originalErrorMessage:t.message})})),lr}async function sh(t){try{return(await ac()).transaction(qn).objectStore(qn).get(cc(t))}catch(e){if(e instanceof Pt)Kt.warn(e.message);else{const n=Tt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function uo(t,e){try{const s=(await ac()).transaction(qn,"readwrite");return await s.objectStore(qn).put(e,cc(t)),s.done}catch(n){if(n instanceof Pt)Kt.warn(n.message);else{const s=Tt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(s.message)}}}function cc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rh=1024,ih=30*24*60*60*1e3;class oh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ch(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=ih}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=fo(),{heartbeatsToSend:n,unsentEntries:s}=ah(this._heartbeatsCache.heartbeats),r=Za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function fo(){return new Date().toISOString().substring(0,10)}function ah(t,e=rh){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),ho(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),ho(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ch{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jf()?Yf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return uo(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function ho(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lh(t){Kn(new hn("platform-logger",e=>new Id(e),"PRIVATE")),Kn(new hn("heartbeat",e=>new oh(e),"PRIVATE")),rn(Ar,lo,t),rn(Ar,lo,"esm2017"),rn("fire-js","")}lh("");var uh="firebase",fh="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn(uh,fh,"app");function ci(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function lc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dh=lc,uc=new Qn("auth","Firebase",lc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=new nc("@firebase/auth");function _s(t,...e){po.logLevel<=se.ERROR&&po.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,...e){throw li(t,...e)}function Ye(t,...e){return li(t,...e)}function fc(t,e,n){const s=Object.assign(Object.assign({},dh()),{[e]:n});return new Qn("auth","Firebase",s).create(e,{appName:t.name})}function hh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ze(t,"argument-error"),fc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function li(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return uc.create(t,...e)}function F(t,e,...n){if(!t)throw li(e,...n)}function rt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _s(e),new Error(e)}function at(t,e){t||rt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=new Map;function it(t){at(t instanceof Function,"Expected a class definition");let e=go.get(t);return e?(at(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,go.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e){const n=ic(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(Rs(i,e??{}))return r;Ze(r,"already-initialized")}return n.initialize({options:e})}function gh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mh(){return mo()==="http:"||mo()==="https:"}function mo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _h(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(mh()||Kf()||"connection"in navigator)?navigator.onLine:!0}function bh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.shortDelay=e,this.longDelay=n,at(n>e,"Short delay should be less than long delay!"),this.isMobile=Wf()||qf()}get(){return _h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t,e){at(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;rt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;rt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;rt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new es(3e4,6e4);function wh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qs(t,e,n,s,r={}){return hc(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Zn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dc.fetch()(pc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function hc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},vh),e);try{const r=new Ih(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fs(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fs(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fs(t,"user-disabled",o);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fc(t,f,l);Ze(t,f)}}catch(r){if(r instanceof Pt)throw r;Ze(t,"network-request-failed")}}async function Eh(t,e,n,s,r={}){const i=await qs(t,e,n,s,r);return"mfaPendingCredential"in i&&Ze(t,"multi-factor-auth-required",{_serverResponse:i}),i}function pc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?ui(t.config,r):`${t.config.apiScheme}://${r}`}class Ih{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ye(this.auth,"network-request-failed")),yh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Ye(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xh(t,e){return qs(t,"POST","/v1/accounts:delete",e)}async function Th(t,e){return qs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sh(t,e=!1){const n=In(t),s=await n.getIdToken(e),r=fi(s);F(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Dn(ur(r.auth_time)),issuedAtTime:Dn(ur(r.iat)),expirationTime:Dn(ur(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ur(t){return Number(t)*1e3}function fi(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const r=ec(n);return r?JSON.parse(r):(_s("Failed to decode base64 JWT payload"),null)}catch(r){return _s("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Rh(t){const e=fi(t);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Pt&&Ch(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ch({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dn(this.lastLoginAt),this.creationTime=Dn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ks(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Gn(t,Th(n,{idToken:s}));F(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Oh(i.providerUserInfo):[],a=Ah(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new gc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Ph(t){const e=In(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ah(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Oh(t){return t.map(e=>{var{providerId:n}=e,s=ci(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mh(t,e){const n=await hc(t,{},async()=>{const s=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=pc(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dc.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await Mh(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Jn;return s&&(F(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(F(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(F(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t,e){F(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=ci(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new gc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return F(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sh(this,e)}reload(){return Ph(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Vt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,l,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:K,isAnonymous:Y,providerData:oe,stsTokenManager:z}=n;F(O&&z,e,"internal-error");const W=Jn.fromJSON(this.name,z);F(typeof O=="string",e,"internal-error"),ft(h,e.name),ft(p,e.name),F(typeof K=="boolean",e,"internal-error"),F(typeof Y=="boolean",e,"internal-error"),ft(_,e.name),ft(T,e.name),ft(P,e.name),ft(U,e.name),ft(k,e.name),ft($,e.name);const de=new Vt({uid:O,auth:e,email:p,emailVerified:K,displayName:h,isAnonymous:Y,photoURL:T,phoneNumber:_,tenantId:P,stsTokenManager:W,createdAt:k,lastLoginAt:$});return oe&&Array.isArray(oe)&&(de.providerData=oe.map(he=>Object.assign({},he))),U&&(de._redirectEventId=U),de}static async _fromIdTokenResponse(e,n,s=!1){const r=new Jn;r.updateFromServerResponse(n);const i=new Vt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ks(i),i}}/**
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
 */class mc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mc.type="NONE";const _o=mc;/**
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
 */function bs(t,e,n){return`firebase:${t}:${e}:${n}`}class on{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=bs(this.userKey,r.apiKey,i),this.fullPersistenceKey=bs("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new on(it(_o),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=r[0]||it(_o);const o=bs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=Vt._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new on(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new on(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_c(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wc(e))return"Blackberry";if(Ec(e))return"Webos";if(di(e))return"Safari";if((e.includes("chrome/")||bc(e))&&!e.includes("edge/"))return"Chrome";if(yc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _c(t=we()){return/firefox\//i.test(t)}function di(t=we()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bc(t=we()){return/crios\//i.test(t)}function vc(t=we()){return/iemobile/i.test(t)}function yc(t=we()){return/android/i.test(t)}function wc(t=we()){return/blackberry/i.test(t)}function Ec(t=we()){return/webos/i.test(t)}function Gs(t=we()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Nh(t=we()){var e;return Gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dh(){return Gf()&&document.documentMode===10}function Ic(t=we()){return Gs(t)||yc(t)||Ec(t)||wc(t)||/windows phone/i.test(t)||vc(t)}function Lh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e=[]){let n;switch(t){case"Browser":n=bo(we());break;case"Worker":n=`${bo(we())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${s}`}/**
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
 */class Uh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new vo(this),this.idTokenSubscription=new vo(this),this.beforeStateQueue=new Uh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await on.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?In(e):null;return n&&F(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;F(n,this,"argument-error"),this.redirectPersistenceManager=await on.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return F(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Js(t){return In(t)}class vo{constructor(e){this.auth=e,this.observer=null,this.addObserver=td(n=>this.observer=n)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Fh(t,e,n){const s=Js(t);F(s._canInitEmulator,s,"emulator-config-failed"),F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Tc(e),{host:o,port:a}=Bh(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||jh()}function Tc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bh(t){const e=Tc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:yo(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:yo(o)}}}function yo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rt("not implemented")}_getIdTokenResponse(e){return rt("not implemented")}_linkToIdToken(e,n){return rt("not implemented")}_getReauthenticationResolver(e){return rt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(t,e){return Eh(t,"POST","/v1/accounts:signInWithIdp",wh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="http://localhost";class qt extends Sc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ze("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=ci(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new qt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return an(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,an(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,an(e,n)}buildRequest(){const e={requestUri:Hh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ts extends hi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t extends ts{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch{return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie extends ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:Ie.PROVIDER_ID,signInMethod:Ie.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ie.credentialFromTaggedObject(e)}static credentialFromError(e){return Ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ie.credential(n,s)}catch{return null}}}Ie.GOOGLE_SIGN_IN_METHOD="google.com";Ie.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends ts{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.GITHUB_SIGN_IN_METHOD="github.com";bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ts{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vt.credential(n,s)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await Vt._fromIdTokenResponse(e,s,r),o=wo(s);return new pn({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=wo(s);return new pn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function wo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Pt{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Ps.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Ps(e,n,s,r)}}function Rc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ps._fromErrorAndOperation(t,i,e,s):i})}async function Vh(t,e,n=!1){const s=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pn._forOperation(t,"link",s)}/**
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
 */async function zh(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const i=await Gn(t,Rc(s,r,e,t),n);F(i.idToken,s,"internal-error");const o=fi(i.idToken);F(o,s,"internal-error");const{sub:a}=o;return F(t.uid===a,s,"user-mismatch"),pn._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ze(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,e,n=!1){const s="signIn",r=await Rc(t,s,e),i=await pn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function Kh(t,e,n,s){return In(t).onIdTokenChanged(e,n,s)}function qh(t,e,n){return In(t).beforeAuthStateChanged(e,n)}const As="__sak";/**
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
 */class Cc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){const t=we();return di(t)||Gs(t)}const Jh=1e3,Yh=10;class kc extends Cc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gh()&&Lh(),this.fallbackToPolling=Ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Dh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Yh):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kc.type="LOCAL";const Xh=kc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc extends Cc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Pc.type="SESSION";const Ac=Pc;/**
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
 */function Qh(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ys(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await Qh(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pi(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=pi("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(){return window}function ep(t){Xe().location.href=t}/**
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
 */function Oc(){return typeof Xe().WorkerGlobalScope<"u"&&typeof Xe().importScripts=="function"}async function tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function np(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sp(){return Oc()?self:null}/**
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
 */const Mc="firebaseLocalStorageDb",rp=1,Os="firebaseLocalStorage",Nc="fbase_key";class ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function ip(){const t=indexedDB.deleteDatabase(Mc);return new ns(t).toPromise()}function Dr(){const t=indexedDB.open(Mc,rp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Os,{keyPath:Nc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Os)?e(s):(s.close(),await ip(),e(await Dr()))})})}async function Eo(t,e,n){const s=Xs(t,!0).put({[Nc]:e,value:n});return new ns(s).toPromise()}async function op(t,e){const n=Xs(t,!1).get(e),s=await new ns(n).toPromise();return s===void 0?null:s.value}function Io(t,e){const n=Xs(t,!0).delete(e);return new ns(n).toPromise()}const ap=800,cp=3;class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>cp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(sp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tp(),!this.activeServiceWorker)return;this.sender=new Zh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||np()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dr();return await Eo(e,As,"1"),await Io(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Eo(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>op(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Io(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=Xs(r,!1).getAll();return new ns(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dc.type="LOCAL";const lp=Dc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Ye("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",up().appendChild(s)})}function dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new es(3e4,6e4);/**
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
 */function Lc(t,e){return e?it(e):(F(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class gi extends Sc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return an(e,this._buildIdpRequest())}_linkToIdToken(e,n){return an(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return an(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hp(t){return Wh(t.auth,new gi(t),t.bypassAuthState)}function pp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),zh(n,new gi(t),t.bypassAuthState)}async function gp(t){const{auth:e,user:n}=t;return F(n,e,"internal-error"),Vh(n,new gi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hp;case"linkViaPopup":case"linkViaRedirect":return gp;case"reauthViaPopup":case"reauthViaRedirect":return pp;default:Ze(this.auth,"internal-error")}}resolve(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){at(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new es(2e3,1e4);async function $c(t,e,n){const s=Js(t);hh(t,e,hi);const r=Lc(s,n);return new Bt(s,"signInViaPopup",e,r).executeNotNull()}class Bt extends Uc{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Bt.currentPopupAction&&Bt.currentPopupAction.cancel(),Bt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){at(this.filter.length===1,"Popup operations only handle one event");const e=pi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mp.get())};e()}}Bt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="pendingRedirect",vs=new Map;class bp extends Uc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vs.get(this.auth._key());if(!e){try{const s=await vp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vs.set(this.auth._key(),e)}return this.bypassAuthState||vs.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vp(t,e){const n=Ep(e),s=wp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function yp(t,e){vs.set(t._key(),e)}function wp(t){return it(t._redirectPersistence)}function Ep(t){return bs(_p,t.config.apiKey,t.name)}async function Ip(t,e,n=!1){const s=Js(t),r=Lc(s,e),o=await new bp(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=10*60*1e3;class Tp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Fc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ye(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(xo(e))}saveEventToCache(e){this.cachedEventUids.add(xo(e)),this.lastProcessedEventTime=Date.now()}}function xo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Fc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Sp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(t,e={}){return qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kp=/^https?/;async function Pp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Rp(t);for(const n of e)try{if(Ap(n))return}catch{}Ze(t,"unauthorized-domain")}function Ap(t){const e=Nr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!kp.test(n))return!1;if(Cp.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Op=new es(3e4,6e4);function To(){const t=Xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mp(t){return new Promise((e,n)=>{var s,r,i;function o(){To(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{To(),n(Ye(t,"network-request-failed"))},timeout:Op.get()})}if(!((r=(s=Xe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Xe().gapi)===null||i===void 0)&&i.load)o();else{const a=dp("iframefcb");return Xe()[a]=()=>{gapi.load?o():n(Ye(t,"network-request-failed"))},fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ys=null,e})}let ys=null;function Np(t){return ys=ys||Mp(t),ys}/**
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
 */const Dp=new es(5e3,15e3),Lp="__/auth/iframe",Up="emulator/auth/iframe",$p={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bp(t){const e=t.config;F(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ui(e,Up):`https://${t.config.authDomain}/${Lp}`,s={apiKey:e.apiKey,appName:t.name,v:Ks},r=Fp.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Zn(s).slice(1)}`}async function jp(t){const e=await Np(t),n=Xe().gapi;return F(n,t,"internal-error"),e.open({where:document.body,url:Bp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$p,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Ye(t,"network-request-failed"),a=Xe().setTimeout(()=>{i(o)},Dp.get());function c(){Xe().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vp=500,zp=600,Wp="_blank",Kp="http://localhost";class So{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qp(t,e,n,s=Vp,r=zp){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hp),{width:s.toString(),height:r.toString(),top:i,left:o}),l=we().toLowerCase();n&&(a=bc(l)?Wp:n),_c(l)&&(e=e||Kp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[_,T])=>`${p}${_}=${T},`,"");if(Nh(l)&&a!=="_self")return Gp(e||"",a),new So(null);const h=window.open(e||"",a,f);F(h,t,"popup-blocked");try{h.focus()}catch{}return new So(h)}function Gp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Jp="__/auth/handler",Yp="emulator/auth/handler";function Ro(t,e,n,s,r,i){F(t.config.authDomain,t,"auth-domain-config-required"),F(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ks,eventId:r};if(e instanceof hi){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ed(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(i||{}))o[c]=l}if(e instanceof ts){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Xp(t)}?${Zn(a).slice(1)}`}function Xp({config:t}){return t.emulator?ui(t,Yp):`https://${t.authDomain}/${Jp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="webStorageSupport";class Qp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ac,this._completeRedirectFn=Ip,this._overrideRedirectResult=yp}async _openPopup(e,n,s,r){var i;at((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Ro(e,n,s,Nr(),r);return qp(e,o,pi())}async _openRedirect(e,n,s,r){return await this._originValidation(e),ep(Ro(e,n,s,Nr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(at(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await jp(e),s=new Tp(e);return n.register("authEvent",r=>(F(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fr,{type:fr},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[fr];o!==void 0&&n(!!o),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Pp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ic()||di()||Gs()}}const Zp=Qp;var Co="@firebase/auth",ko="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ng(t){Kn(new hn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{F(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),F(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const l={apiKey:i,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xc(t)},f=new $h(a,c,l);return gh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new hn("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(s=>new eg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rn(Co,ko,tg(t)),rn(Co,ko,"esm2017")}/**
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
 */const sg=5*60,rg=tc("authIdTokenMaxAge")||sg;let Po=null;const ig=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rg)return;const r=n==null?void 0:n.token;Po!==r&&(Po=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function mi(t=eh()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ph(t,{popupRedirectResolver:Zp,persistence:[lp,Xh,Ac]}),s=tc("authTokenSyncURL");if(s){const i=ig(s);qh(n,i,()=>i(n.currentUser)),Kh(n,o=>i(o))}const r=Hf("auth");return r&&Fh(n,`http://${r}`),n}ng("Browser");const _i="/assets/Telegram-c178456d.svg",bi="/assets/WhatsApp-64705ce5.svg",vi="/assets/Instagram-d32ffc78.svg",et=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},og={props:{buttonName:String},data:()=>({contact:!1,store:kt()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},ag={class:"grid overflow-scroll [&_*]:font-roboto"},cg={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] h-[60px]"},lg=v("span",{class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black"},"Контакты",-1),ug=v("span",{class:"justify-self-center"},"|",-1),fg=ri('<div class="grid grid-cols-2"><div><p class="text-3xl mb-[5px] font-semibold font-roboto">Адрес:</p><p class="text-2xl font-roboto">770033, Кыргызстан</p><p class="text-2xl mb-[20px] font-roboto">ул.Киевская 77</p></div><div><p class="text-3xl mb-[5px] font-roboto font-semibold">Телефон:</p><p class="text-2xl mb-[20px] font-roboto">+996779454233</p></div><div class="grid auto-rows-min gap-[10px] [&amp;_a]:mr-[10px]"><p class="text-3xl font-roboto font-semibold">Соц. сети:</p><div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+_i+'" alt=""></a><p class="text-2xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+bi+'" alt=""></a><p class="text-2xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+vi+'" alt=""></a><p class="text-2xl font-roboto">crafthoney.kg</p></div></div><div><p class="text-3xl mb-[5px] font-roboto font-semibold">E-mail:</p><p class="text-2xl font-roboto">crafthoneykg@gmail.com</p></div></div>',1);function dg(t,e,n,s,r,i){return ye(),Le("div",ag,[v("div",cg,[lg,ug,v("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},"Обратная связь")]),fg])}const Bc=et(og,[["render",dg]]),hg="/assets/drawing-9a7198cf.svg",pg="/assets/CraftHoney-0d412893.svg",gg="/assets/menu-694c5a76.svg",mg="/assets/account_circle-229cba33.svg",_g="/assets/shopping_cart-809c2612.svg",bg="/assets/Register_1-5c661edd.svg",vg="/assets/Enter_1-7f28cdb9.svg",yg={data(){return{burgerMenu:!1,store:kt()}},components:{Contacts:Bc}},wg={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},Eg={class:"grid grid-flow-col gap-[100px] items-center max-[1300px]:gap-[40px] max-[400px]:grid-cols-[54%_auto]"},Ig=v("img",{class:"self-center w-[60px] inline",src:hg},null,-1),xg=v("img",{class:"ml-[10px] self-center w-[120px] inline",src:pg},null,-1),Tg={key:0,class:"text-xl [&>a]:mr-[30px] max-[1050px]:hidden"},Sg={class:"grid min-[1051px]:hidden"},Rg={class:"flex items-center justify-end max-[1050px]:hidden"},Cg={class:"flex items-center mr-[100px] max-[1300px]:mr-[40px]"},kg=v("img",{class:"mr-[10px] w-[24px]",src:mg},null,-1),Pg={class:"mr-[100px] max-[1300px]:mr-[40px]"},Ag=v("img",{class:"w-[22px] max-[800px]:hidden",src:_g,alt:""},null,-1),Og=ri('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+bi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+_i+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+vi+'" alt=""></a></div>',1),Mg={class:""},Ng={class:"flex flex-col justify-center [&>*]:px-[10px]"},Dg=v("strong",null,"X",-1),Lg=[Dg],Ug={class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},$g=v("img",{class:"w-[24px] h-24[px] mr-[10px]",src:bg,alt:""},null,-1),Fg=v("img",{class:"w-[24px] h-[24px] mr-[10px]",src:vg,alt:""},null,-1),Bg=ri('<div class="my-[20px] px-[10px]"><div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+bi+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+_i+'" alt=""></a></div></div><p class="my-[10px]">Адрес: 770033,Кыргызстан <br>ул.Киевская,77</p><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+vi+'" alt=""></a></div>',1);function jg(t,e,n,s,r,i){const o=Wt("router-link");return ye(),Le("header",wg,[v("div",Eg,[v("div",null,[X(o,{class:"flex max-w-fit",to:"/"},{default:Ce(()=>[Ig,xg]),_:1})]),t.$route.name!="Home"?(ye(),Le("div",Tg,[X(o,{to:"/Products"},{default:Ce(()=>[me("Каталог")]),_:1}),X(o,{to:"/about"},{default:Ce(()=>[me("О нас")]),_:1}),X(o,{to:"/Blog"},{default:Ce(()=>[me("Блог")]),_:1}),v("button",{onClick:e[0]||(e[0]=a=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},"Контакты")])):Ss("",!0)]),v("div",Sg,[v("img",{onClick:e[1]||(e[1]=a=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:gg})]),v("div",Rg,[v("div",Cg,[kg,v("button",{class:"text-xl text-center",onClick:e[2]||(e[2]=a=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},"Вход")]),v("div",Pg,[X(o,{to:"/Checkout"},{default:Ce(()=>[Ag]),_:1})]),Og]),v("div",{class:_n(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[v("div",Mg,[v("div",Ng,[v("button",{onClick:e[3]||(e[3]=a=>r.burgerMenu=!1),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right"},Lg),X(o,{to:"/Products",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Ce(()=>[me("Каталог")]),_:1}),X(o,{to:"/about",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Ce(()=>[me("О нас")]),_:1}),X(o,{to:"/Blog",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:Ce(()=>[me("Блог")]),_:1}),v("button",{onClick:e[4]||(e[4]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},"Контакты")]),v("div",Ug,[v("button",{onClick:e[5]||(e[5]=a=>(r.store.bg="bg-bee",r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[$g,me("Регистрация")]),v("button",{onClick:e[6]||(e[6]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[Fg,me("Вход")])]),Bg])],2)])}const Hg=et(yg,[["render",jg]]),Vg={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",store:kt()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail=""}}},zg={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},Wg={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] h-[60px]"},Kg=v("span",{class:"justify-self-center"},"|",-1),qg=v("span",{class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black"},"Обратная связь",-1),Gg=v("h2",{class:"text-3xl justify-self-center font-roboto"},"Свяжитесь с нами",-1),Jg={class:"grid grid-cols-2 gap-[20px]"},Yg=v("textarea",{class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,-1),Xg={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},Qg=v("button",{class:"bg-[#EAAD02] text-white rounded-[5px]"},"Отправить",-1);function Zg(t,e,n,s,r,i){return ye(),Le("div",zg,[v("div",Wg,[v("button",{onClick:e[0]||(e[0]=o=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},"Контакты"),Kg,qg]),Gg,be(v("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>t.inputValueName=o),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:"Ваше Имя"},null,512),[[It,t.inputValueName]]),v("div",Jg,[be(v("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>t.inputValueMail=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[It,t.inputValueMail]]),be(v("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>t.inputValuePhone=o),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Телефон"},null,512),[[It,t.inputValuePhone]])]),Yg,v("div",Xg,[Qg,v("button",{onClick:e[4]||(e[4]=(...o)=>i.clearInput&&i.clearInput(...o)),class:"bg-[#02020233] rounded-[5px]"},"Сбросить")])])}const jc=et(Vg,[["render",Zg]]),em="/assets/call-65c88a38.svg",tm={data(){return{store:kt()}},components:{Feedback:jc}},nm={class:"bg-white flex justify-center my-[1vh] w-full"},sm={class:"self-center"},rm=v("img",{class:"inline ml-2",src:em},null,-1);function im(t,e,n,s,r,i){return ye(),Le("footer",nm,[v("div",sm,[v("button",{onClick:e[0]||(e[0]=o=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),rm])])}const om=et(tm,[["render",im]]),am="/assets/Vector-9ca58fbf.svg",yi="/assets/visibility_on-0c36d6bb.svg",wi="/assets/visibility_off-e6686e60.svg",cm={props:{buttonName:String},data(){return{email:"",password:"",store:kt(),showPassword:!1}},methods:{loginGoogle(){const t=mi(),e=new Ie;$c(t,e).then(n=>{Ie.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Ie.credentialFromError(n)})},async login(){let t={method:"POST",header:{"Contetnt-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,returnSecureToken:!0})};const e=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",t);e!=null&&e.ok&&(e.json(),this.store.modal=!1)},eyechange(){this.showPassword=!this.showPassword}}},lm={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},um={class:"grid auto-rows-min gap-[20px]"},fm={class:"text-[30px] flex justify-center"},dm=v("span",{class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},"Вход",-1),hm=v("span",{class:"mx-2"},"|",-1),pm=v("img",{class:"mr-[8px]",src:am},null,-1),gm={class:"relative"},mm=["type"],_m={src:yi,alt:""},bm={src:wi,alt:""},vm=["disabled"],ym={class:"text-center"};function wm(t,e,n,s,r,i){const o=Wt("router-link");return ye(),Le("div",lm,[v("div",um,[v("div",fm,[dm,hm,v("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},"Регистрация")]),v("button",{onClick:e[1]||(e[1]=(...a)=>i.loginGoogle&&i.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[pm,me("Вход через Google ")]),be(v("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:"Введите Email"},null,512),[[It,r.email]]),v("div",gm,[be(v("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:"Введите пароль"},null,8,mm),[[Sr,r.password]]),v("button",{onClick:e[4]||(e[4]=(...a)=>i.eyechange&&i.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[be(v("img",_m,null,512),[[$t,r.showPassword]]),be(v("img",bm,null,512),[[$t,!r.showPassword]])])]),X(o,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:Ce(()=>[me("Забыли пароль?")]),_:1}),v("button",{onClick:e[5]||(e[5]=(...a)=>i.login&&i.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},"Войти ",8,vm),v("p",ym,[me("У Вас еще нет аккаунта?"),v("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},"Создать")])])])}const Em=et(cm,[["render",wm]]),Im="/assets/Vector-9ca58fbf.svg",xm={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:kt()}},methods:{loginGoogle(){const t=mi(),e=new Ie;$c(t,e).then(n=>{Ie.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,Ie.credentialFromError(n)})},async register(){let t={method:"POST",header:{"Contetnt-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,returnSecureToken:!0})};if(this.password2==this.password){const e=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",t);e!=null&&e.ok&&(e.json(),this.store.comp="Login")}},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},Tm={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},Sm={class:"grid auto-rows-min gap-[20px]"},Rm={class:"text-[30px] h-[45px] flex justify-center"},Cm=v("span",{class:"mx-2"},"|",-1),km=v("span",{class:"bg-gray-300 rounded-[10px] px-2 text-black"},"Регистрация",-1),Pm=v("img",{class:"mr-[8px]",src:Im},null,-1),Am={class:"relative"},Om=["type"],Mm={src:yi,alt:""},Nm={src:wi,alt:""},Dm={class:"relative"},Lm=["type"],Um={src:yi,alt:""},$m={src:wi,alt:""},Fm={key:0,class:"text-red-500 font-roboto"},Bm=["disabled"],jm={class:"text-center"};function Hm(t,e,n,s,r,i){return ye(),Le("div",Tm,[v("div",Sm,[v("div",Rm,[v("button",{onClick:e[0]||(e[0]=o=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},"Вход"),Cm,km]),v("button",{onClick:e[1]||(e[1]=(...o)=>i.loginGoogle&&i.loginGoogle(...o)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[Pm,me(" Вход через Google ")]),be(v("input",{"onUpdate:modelValue":e[2]||(e[2]=o=>r.name=o),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:"Имя пользователя"},null,512),[[It,r.name]]),be(v("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>r.email=o),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:"Введите Email"},null,512),[[It,r.email]]),v("div",Am,[be(v("input",{"onUpdate:modelValue":e[4]||(e[4]=o=>r.password=o),onFocus:e[5]||(e[5]=o=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:"Пароль"},null,40,Om),[[Sr,r.password]]),v("button",{onClick:e[6]||(e[6]=(...o)=>i.eyechange&&i.eyechange(...o)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[be(v("img",Mm,null,512),[[$t,r.showPassword]]),be(v("img",Nm,null,512),[[$t,!r.showPassword]])])]),v("div",Dm,[be(v("input",{"onUpdate:modelValue":e[7]||(e[7]=o=>r.password2=o),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:"Подвердите пароль"},null,8,Lm),[[Sr,r.password2]]),v("button",{onClick:e[8]||(e[8]=o=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[be(v("img",Um,null,512),[[$t,r.showPassword]]),be(v("img",$m,null,512),[[$t,!r.showPassword]])])]),r.password2!=r.password?(ye(),Le("div",Fm,"Пароли не совпадают")):Ss("",!0),be(v("div",{class:"text-red-500 font-roboto"},"Минимальное кол-во символов - "+Cn(r.MinLength),513),[[$t,r.passwordMinLength&&r.password.length<=5]]),v("button",{onClick:e[9]||(e[9]=(...o)=>i.register&&i.register(...o)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},"Войти ",8,Bm),v("p",jm,[me("У Вас уже есть аккаунт?"),v("button",{onClick:e[10]||(e[10]=o=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},"Войти")])])])}const Vm=et(xm,[["render",Hm]]),zm={data(){return{store:kt()}},components:{Contacts:Bc,Feedback:jc,Login:Em,Register:Vm}},Wm={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},Km={class:"p-2 text-right"},qm=v("strong",null,"X",-1),Gm=[qm];function Jm(t,e,n,s,r,i){return r.store.modal?(ye(),Le("div",Wm,[r.store.modal?(ye(),Le("div",{key:0,onClick:e[0]||(e[0]=o=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):Ss("",!0),v("div",{class:_n([r.store.bg,"bg-cover bg-no-repeat grid grid-rows-[max-content] rounded-[10px] z-[11]"])},[v("div",Km,[v("button",{onClick:e[1]||(e[1]=o=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},Gm)]),(ye(),Hs(wu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):Ss("",!0)}const Ym=et(zm,[["render",Jm]]),Xm={components:{Header:Hg,Footer:om,LayoutModal:Ym}};function Qm(t,e,n,s,r,i){const o=Wt("LayoutModal"),a=Wt("Header");return ye(),Le(De,null,[X(o),v("div",{class:_n([t.$route.name=="Home"?"absolute inset-0":"min-h-screen","overflow-hidden px-[40px] grid grid-rows-[min-content_auto_min-content] max-w-screen max-[800px]:px-[20px]"])},[X(a),Eu(t.$slots,"default")],2)],64)}const Zm=et(Xm,[["render",Qm]]),e_={};function t_(t,e){const n=Wt("RouterView");return ye(),Hs(n)}const n_=et(e_,[["render",t_]]),s_="modulepreload",r_=function(t){return"/"+t},Ao={},Xt=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=r_(i),i in Ao)return;Ao[i]=!0;const o=i.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${a}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":s_,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Zt=typeof window<"u";function i_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function dr(t,e){const n={};for(const s in e){const r=e[s];n[s]=ze(r)?r.map(t):t(r)}return n}const Ln=()=>{},ze=Array.isArray,o_=/\/$/,a_=t=>t.replace(o_,"");function hr(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=f_(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:o}}function c_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function l_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&gn(e.matched[s],n.matched[r])&&Hc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!u_(t[n],e[n]))return!1;return!0}function u_(t,e){return ze(t)?Mo(t,e):ze(e)?Mo(e,t):t===e}function Mo(t,e){return ze(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function f_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,i,o;for(i=0;i<s.length;i++)if(o=s[i],o!==".")if(o==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(i-(i===s.length?1:0)).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Un||(Un={}));function d_(t){if(!t)if(Zt){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),a_(t)}const h_=/^[^#]+#/;function p_(t,e){return t.replace(h_,"#")+e}function g_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function m_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=g_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function No(t,e){return(history.state?history.state.position-e:-1)+t}const Lr=new Map;function __(t,e){Lr.set(t,e)}function b_(t){const e=Lr.get(t);return Lr.delete(t),e}let v_=()=>location.protocol+"//"+location.host;function Vc(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Oo(c,"")}return Oo(n,t)+s+r}function y_(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const _=Vc(t,location),T=n.value,P=e.value;let U=0;if(p){if(n.value=_,e.value=p,o&&o===T){o=null;return}U=P?p.position-P.position:0}else s(_);r.forEach(k=>{k(n.value,T,{delta:U,type:Yn.pop,direction:U?U>0?Un.forward:Un.back:Un.unknown})})};function c(){o=n.value}function l(p){r.push(p);const _=()=>{const T=r.indexOf(p);T>-1&&r.splice(T,1)};return i.push(_),_}function f(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:Qs()}),"")}function h(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Do(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Qs():null}}function w_(t){const{history:e,location:n}=window,s={value:Vc(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:v_()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),r.value=l}catch(_){console.error(_),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,Do(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});i(c,f,!0),s.value=c}function a(c,l){const f=Q({},r.value,e.state,{forward:c,scroll:Qs()});i(f.current,f,!0);const h=Q({},Do(s.value,c,null),{position:f.position+1},l);i(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function E_(t){t=d_(t);const e=w_(t),n=y_(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Q({location:"",base:t,go:s,createHref:p_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function I_(t){return typeof t=="string"||t&&typeof t=="object"}function zc(t){return typeof t=="string"||typeof t=="symbol"}const dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wc=Symbol("");var Lo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Lo||(Lo={}));function mn(t,e){return Q(new Error,{type:t,[Wc]:!0},e)}function tt(t,e){return t instanceof Error&&Wc in t&&(e==null||!!(t.type&e))}const Uo="[^/]+?",x_={sensitive:!1,strict:!1,start:!0,end:!0},T_=/[.+*?^${}()[\]/\\]/g;function S_(t,e){const n=Q({},x_,e),s=[];let r=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const p=l[h];let _=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(T_,"\\$&"),_+=40;else if(p.type===1){const{value:T,repeatable:P,optional:U,regexp:k}=p;i.push({name:T,repeatable:P,optional:U});const $=k||Uo;if($!==Uo){_+=10;try{new RegExp(`(${$})`)}catch(K){throw new Error(`Invalid custom RegExp for param "${T}" (${$}): `+K.message)}}let O=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;h||(O=U&&l.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,_+=20,U&&(_+=-8),P&&(_+=-20),$===".*"&&(_+=-50)}f.push(_)}s.push(f)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(l){const f=l.match(o),h={};if(!f)return null;for(let p=1;p<f.length;p++){const _=f[p]||"",T=i[p-1];h[T.name]=_&&T.repeatable?_.split("/"):_}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const _ of p)if(_.type===0)f+=_.value;else if(_.type===1){const{value:T,repeatable:P,optional:U}=_,k=T in l?l[T]:"";if(ze(k)&&!P)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const $=ze(k)?k.join("/"):k;if(!$)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);f+=$}}return f||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function R_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function C_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=R_(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if($o(s))return 1;if($o(r))return-1}return r.length-s.length}function $o(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const k_={type:0,value:""},P_=/[a-zA-Z0-9_]/;function A_(t){if(!t)return[[]];if(t==="/")return[[k_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${l}": ${_}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,l="",f="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:P_.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),r}function O_(t,e,n){const s=S_(A_(t.path),n),r=Q(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function M_(t,e){const n=[],s=new Map;e=jo({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,h,p){const _=!p,T=N_(f);T.aliasOf=p&&p.record;const P=jo(e,f),U=[T];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const K of O)U.push(Q({},T,{components:p?p.record.components:T.components,path:K,aliasOf:p?p.record:T}))}let k,$;for(const O of U){const{path:K}=O;if(h&&K[0]!=="/"){const Y=h.record.path,oe=Y[Y.length-1]==="/"?"":"/";O.path=h.record.path+(K&&oe+K)}if(k=O_(O,h,P),p?p.alias.push(k):($=$||k,$!==k&&$.alias.push(k),_&&f.name&&!Bo(k)&&o(f.name)),T.children){const Y=T.children;for(let oe=0;oe<Y.length;oe++)i(Y[oe],k,p&&p.children[oe])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return $?()=>{o($)}:Ln}function o(f){if(zc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&C_(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Kc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!Bo(f)&&s.set(f.record.name,f)}function l(f,h){let p,_={},T,P;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw mn(1,{location:f});P=p.record.name,_=Q(Fo(h.params,p.keys.filter($=>!$.optional).map($=>$.name)),f.params&&Fo(f.params,p.keys.map($=>$.name))),T=p.stringify(_)}else if("path"in f)T=f.path,p=n.find($=>$.re.test(T)),p&&(_=p.parse(T),P=p.record.name);else{if(p=h.name?s.get(h.name):n.find($=>$.re.test(h.path)),!p)throw mn(1,{location:f,currentLocation:h});P=p.record.name,_=Q({},h.params,f.params),T=p.stringify(_)}const U=[];let k=p;for(;k;)U.unshift(k.record),k=k.parent;return{name:P,path:T,params:_,matched:U,meta:L_(U)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Fo(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function N_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:D_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function D_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function Bo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function L_(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function jo(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Kc(t,e){return e.children.some(n=>n===t||Kc(t,n))}const qc=/#/g,U_=/&/g,$_=/\//g,F_=/=/g,B_=/\?/g,Gc=/\+/g,j_=/%5B/g,H_=/%5D/g,Jc=/%5E/g,V_=/%60/g,Yc=/%7B/g,z_=/%7C/g,Xc=/%7D/g,W_=/%20/g;function Ei(t){return encodeURI(""+t).replace(z_,"|").replace(j_,"[").replace(H_,"]")}function K_(t){return Ei(t).replace(Yc,"{").replace(Xc,"}").replace(Jc,"^")}function Ur(t){return Ei(t).replace(Gc,"%2B").replace(W_,"+").replace(qc,"%23").replace(U_,"%26").replace(V_,"`").replace(Yc,"{").replace(Xc,"}").replace(Jc,"^")}function q_(t){return Ur(t).replace(F_,"%3D")}function G_(t){return Ei(t).replace(qc,"%23").replace(B_,"%3F")}function J_(t){return t==null?"":G_(t).replace($_,"%2F")}function Ms(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Y_(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(Gc," "),o=i.indexOf("="),a=Ms(o<0?i:i.slice(0,o)),c=o<0?null:Ms(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Ho(t){let e="";for(let n in t){const s=t[n];if(n=q_(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(s)?s.map(i=>i&&Ur(i)):[s&&Ur(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function X_(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ze(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const Q_=Symbol(""),Vo=Symbol(""),Ii=Symbol(""),Qc=Symbol(""),$r=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function gt(t,e,n,s,r){const i=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(mn(4,{from:n,to:e})):h instanceof Error?a(h):I_(h)?a(mn(2,{from:e,to:h})):(i&&s.enterCallbacks[r]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(s&&s.instances[r],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function pr(t,e,n,s){const r=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Z_(a)){const l=(a.__vccOpts||a)[e];l&&r.push(gt(l,n,s,i,o))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=i_(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&gt(p,n,s,i,o)()}))}}return r}function Z_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zo(t){const e=Je(Ii),n=Je(Qc),s=Oe(()=>e.resolve(nn(t.to))),r=Oe(()=>{const{matched:c}=s.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(gn.bind(null,f));if(p>-1)return p;const _=Wo(c[l-2]);return l>1&&Wo(f)===_&&h[h.length-1].path!==_?h.findIndex(gn.bind(null,c[l-2])):p}),i=Oe(()=>r.value>-1&&sb(n.params,s.value.params)),o=Oe(()=>r.value>-1&&r.value===n.matched.length-1&&Hc(n.params,s.value.params));function a(c={}){return nb(c)?e[nn(t.replace)?"replace":"push"](nn(t.to)).catch(Ln):Promise.resolve()}return{route:s,href:Oe(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}const eb=Sa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zo,setup(t,{slots:e}){const n=En(zo(t)),{options:s}=Je(Ii),r=Oe(()=>({[Ko(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ko(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),tb=eb;function nb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function sb(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!ze(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Wo(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ko=(t,e,n)=>t??e??n,rb=Sa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Je($r),r=Oe(()=>t.route||s.value),i=Je(Vo,0),o=Oe(()=>{let l=nn(i);const{matched:f}=r.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Oe(()=>r.value.matched[o.value]);ps(Vo,Oe(()=>o.value+1)),ps(Q_,a),ps($r,r);const c=Xr();return Pn(()=>[c.value,a.value,t.name],([l,f,h],[p,_,T])=>{f&&(f.instances[h]=l,_&&_!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),l&&f&&(!_||!gn(f,_)||!p)&&(f.enterCallbacks[h]||[]).forEach(P=>P(l))},{flush:"post"}),()=>{const l=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return qo(n.default,{Component:p,route:l});const _=h.props[f],T=_?_===!0?l.params:typeof _=="function"?_(l):_:null,U=Wa(p,Q({},T,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return qo(n.default,{Component:U,route:l})||U}}});function qo(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ib=rb;function ob(t){const e=M_(t.routes,t),n=t.parseQuery||Y_,s=t.stringifyQuery||Ho,r=t.history,i=Rn(),o=Rn(),a=Rn(),c=Hl(dt);let l=dt;Zt&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=dr.bind(null,b=>""+b),h=dr.bind(null,J_),p=dr.bind(null,Ms);function _(b,C){let S,M;return zc(b)?(S=e.getRecordMatcher(b),M=C):M=b,e.addRoute(M,S)}function T(b){const C=e.getRecordMatcher(b);C&&e.removeRoute(C)}function P(){return e.getRoutes().map(b=>b.record)}function U(b){return!!e.getRecordMatcher(b)}function k(b,C){if(C=Q({},C||c.value),typeof b=="string"){const u=hr(n,b,C.path),d=e.resolve({path:u.path},C),g=r.createHref(u.fullPath);return Q(u,d,{params:p(d.params),hash:Ms(u.hash),redirectedFrom:void 0,href:g})}let S;if("path"in b)S=Q({},b,{path:hr(n,b.path,C.path).path});else{const u=Q({},b.params);for(const d in u)u[d]==null&&delete u[d];S=Q({},b,{params:h(b.params)}),C.params=h(C.params)}const M=e.resolve(S,C),q=b.hash||"";M.params=f(p(M.params));const ae=c_(s,Q({},b,{hash:K_(q),path:M.path})),H=r.createHref(ae);return Q({fullPath:ae,hash:q,query:s===Ho?X_(b.query):b.query||{}},M,{redirectedFrom:void 0,href:H})}function $(b){return typeof b=="string"?hr(n,b,c.value.path):Q({},b)}function O(b,C){if(l!==b)return mn(8,{from:C,to:b})}function K(b){return z(b)}function Y(b){return K(Q($(b),{replace:!0}))}function oe(b){const C=b.matched[b.matched.length-1];if(C&&C.redirect){const{redirect:S}=C;let M=typeof S=="function"?S(b):S;return typeof M=="string"&&(M=M.includes("?")||M.includes("#")?M=$(M):{path:M},M.params={}),Q({query:b.query,hash:b.hash,params:"path"in M?{}:b.params},M)}}function z(b,C){const S=l=k(b),M=c.value,q=b.state,ae=b.force,H=b.replace===!0,u=oe(S);if(u)return z(Q($(u),{state:typeof u=="object"?Q({},q,u.state):q,force:ae,replace:H}),C||S);const d=S;d.redirectedFrom=C;let g;return!ae&&l_(s,M,S)&&(g=mn(16,{to:d,from:M}),At(M,M,!0,!1)),(g?Promise.resolve(g):de(d,M)).catch(m=>tt(m)?tt(m,2)?m:Ue(m):te(m,d,M)).then(m=>{if(m){if(tt(m,2))return z(Q({replace:H},$(m.to),{state:typeof m.to=="object"?Q({},q,m.to.state):q,force:ae}),C||d)}else m=Te(d,M,!0,H,q);return he(d,M,m),m})}function W(b,C){const S=O(b,C);return S?Promise.reject(S):Promise.resolve()}function de(b,C){let S;const[M,q,ae]=ab(b,C);S=pr(M.reverse(),"beforeRouteLeave",b,C);for(const u of M)u.leaveGuards.forEach(d=>{S.push(gt(d,b,C))});const H=W.bind(null,b,C);return S.push(H),Qt(S).then(()=>{S=[];for(const u of i.list())S.push(gt(u,b,C));return S.push(H),Qt(S)}).then(()=>{S=pr(q,"beforeRouteUpdate",b,C);for(const u of q)u.updateGuards.forEach(d=>{S.push(gt(d,b,C))});return S.push(H),Qt(S)}).then(()=>{S=[];for(const u of b.matched)if(u.beforeEnter&&!C.matched.includes(u))if(ze(u.beforeEnter))for(const d of u.beforeEnter)S.push(gt(d,b,C));else S.push(gt(u.beforeEnter,b,C));return S.push(H),Qt(S)}).then(()=>(b.matched.forEach(u=>u.enterCallbacks={}),S=pr(ae,"beforeRouteEnter",b,C),S.push(H),Qt(S))).then(()=>{S=[];for(const u of o.list())S.push(gt(u,b,C));return S.push(H),Qt(S)}).catch(u=>tt(u,8)?u:Promise.reject(u))}function he(b,C,S){for(const M of a.list())M(b,C,S)}function Te(b,C,S,M,q){const ae=O(b,C);if(ae)return ae;const H=C===dt,u=Zt?history.state:{};S&&(M||H?r.replace(b.fullPath,Q({scroll:H&&u&&u.scroll},q)):r.push(b.fullPath,q)),c.value=b,At(b,C,S,H),Ue()}let Ne;function lt(){Ne||(Ne=r.listen((b,C,S)=>{if(!ss.listening)return;const M=k(b),q=oe(M);if(q){z(Q(q,{replace:!0}),M).catch(Ln);return}l=M;const ae=c.value;Zt&&__(No(ae.fullPath,S.delta),Qs()),de(M,ae).catch(H=>tt(H,12)?H:tt(H,2)?(z(H.to,M).then(u=>{tt(u,20)&&!S.delta&&S.type===Yn.pop&&r.go(-1,!1)}).catch(Ln),Promise.reject()):(S.delta&&r.go(-S.delta,!1),te(H,M,ae))).then(H=>{H=H||Te(M,ae,!1),H&&(S.delta&&!tt(H,8)?r.go(-S.delta,!1):S.type===Yn.pop&&tt(H,20)&&r.go(-1,!1)),he(M,ae,H)}).catch(Ln)}))}let ke=Rn(),pe=Rn(),le;function te(b,C,S){Ue(b);const M=pe.list();return M.length?M.forEach(q=>q(b,C,S)):console.error(b),Promise.reject(b)}function Z(){return le&&c.value!==dt?Promise.resolve():new Promise((b,C)=>{ke.add([b,C])})}function Ue(b){return le||(le=!b,lt(),ke.list().forEach(([C,S])=>b?S(b):C()),ke.reset()),b}function At(b,C,S,M){const{scrollBehavior:q}=t;if(!Zt||!q)return Promise.resolve();const ae=!S&&b_(No(b.fullPath,0))||(M||!S)&&history.state&&history.state.scroll||null;return Zr().then(()=>q(b,C,ae)).then(H=>H&&m_(H)).catch(H=>te(H,b,C))}const $e=b=>r.go(b);let Se;const Gt=new Set,ss={currentRoute:c,listening:!0,addRoute:_,removeRoute:T,hasRoute:U,getRoutes:P,resolve:k,options:t,push:K,replace:Y,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:pe.add,isReady:Z,install(b){const C=this;b.component("RouterLink",tb),b.component("RouterView",ib),b.config.globalProperties.$router=C,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>nn(c)}),Zt&&!Se&&c.value===dt&&(Se=!0,K(r.location).catch(q=>{}));const S={};for(const q in dt)S[q]=Oe(()=>c.value[q]);b.provide(Ii,C),b.provide(Qc,En(S)),b.provide($r,c);const M=b.unmount;Gt.add(b),b.unmount=function(){Gt.delete(b),Gt.size<1&&(l=dt,Ne&&Ne(),Ne=null,c.value=dt,Se=!1,le=!1),M()}}};return ss}function Qt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function ab(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gn(l,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gn(l,c))||r.push(c))}return[n,s,r]}const cb="/assets/paralax1-371235c6.png",lb="/assets/paralax2-aa0b773a.png",ub="/assets/paralax3a-7b662525.png",fb="/assets/paralax3b-b777e898.png",db="/assets/paralax9-20ab124f.png",hb={data(){return{xPos:0,yPos:0,store:kt()}},methods:{check(t){this.xPos=t.clientX-window.innerWidth/2,this.yPos=t.clientY-window.innerHeight/2},touch(t){this.xPos=t.touches[0].clientX-window.innerWidth/2,this.yPos=t.touches[0].clientY-window.innerHeight/2}},computed:{parallaxHeight(){return window.innerHeight-102*2}}},pb={class:"relative grid overflow-hidden -mx-[100px] [&>img]:max-w-none [&>img]:select-none"},gb=v("div",{class:"absolute w-full h-full bg-black bg-opacity-50"},null,-1),mb={class:"h-full justify-center flex items-center"},_b={class:"grid gap-[10vh] [&_*]:text-white"},bb={class:"justify-center flex"},vb={class:"grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"},yb={class:"justify-center flex max-[800px]:pt-[10px]"},wb={class:"grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"};function Eb(t,e,n,s,r,i){const o=Wt("router-link"),a=Wt("Layout");return ye(),Le("div",{onTouchmove:e[1]||(e[1]=(...c)=>i.touch&&i.touch(...c)),onMousemove:e[2]||(e[2]=(...c)=>i.check&&i.check(...c))},[X(a,null,{default:Ce(()=>[v("div",pb,[gb,v("img",{style:mt({transform:`translate(${r.xPos/10}px, ${r.yPos/10}px)`}),class:"w-[2200px] absolute left-[-10%] top-[-10%] -z-10",src:cb},null,4),v("img",{style:mt({transform:`translate(${r.xPos/13}px, ${r.yPos/13}px)`}),class:"w-[2200px] h-[70%] absolute left-[-10%] top-0 -z-10",src:lb},null,4),v("img",{style:mt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[440px] absolute justify-self-center mr-[1120px] bottom-[60px] z-[-9]",src:ub},null,4),v("img",{style:mt({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[500px] absolute justify-self-center ml-[220px] bottom-[40px] z-[-9]",src:fb},null,4),v("img",{style:mt({transform:`translate(${r.xPos/18}px, ${r.yPos/20}px)`}),class:"w-[2200px] absolute justify-self-center bottom-[-4%] -z-10",src:db},null,4),v("div",mb,[v("div",_b,[v("div",bb,[v("div",vb,[X(o,{to:"/Products",class:"relative z-10 flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md"},{default:Ce(()=>[me(Cn(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),X(o,{to:"/about",class:"relative z-10 flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md"},{default:Ce(()=>[me(Cn(r.store.langProp[r.store.lang].about),1)]),_:1})])]),v("div",yb,[v("div",wb,[X(o,{to:"/Blog",class:"relative z-10 flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md"},{default:Ce(()=>[me(Cn(r.store.langProp[r.store.lang].blog),1)]),_:1}),v("button",{onClick:e[0]||(e[0]=c=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white")),class:"relative z-10 bg-yellow-500 w-40 h-12 rounded-md"},Cn(r.store.langProp[r.store.lang].contacts),1)])])])])])]),_:1})],32)}const Ib=et(hb,[["render",Eb]]),xb=ob({history:E_("/"),routes:[{path:"/",name:"Home",component:Ib},{path:"/about",name:"About",component:()=>Xt(()=>import("./About-7ad6380d.js"),[])},{path:"/Products",name:"Products",component:()=>Xt(()=>import("./Products-b54eee79.js"),[])},{path:"/Personal",name:"Personal",component:()=>Xt(()=>import("./Personal-cdb0373f.js"),[])},{path:"/PersonalArea",name:"PersonalArea",component:()=>Xt(()=>import("./PersonalArea-64554ad7.js"),[])},{path:"/Blog",name:"Blog",component:()=>Xt(()=>import("./Blog-2c3d7b26.js"),[])},{path:"/Checkout",name:"Checkout",component:()=>Xt(()=>import("./Checkout-c5cdd9e8.js"),[])}]});const Zs=Rf(n_),Tb=Pf();new Ie;const Sb={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};Zs.component("Layout",Zm);Zs.use(Tb);Zs.use(xb);oc(Sb);mi();Zs.mount("#app");export{De as F,Zm as L,et as _,v as a,me as b,Hs as c,Le as d,Rb as e,X as f,vi as g,ye as o,Wt as r,Cn as t,Ce as w};
