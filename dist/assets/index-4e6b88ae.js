(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Br(t,e){const n=Object.create(null),s=t.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return e?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function _t(t){if(L(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=de(s)?nl(s):_t(s);if(r)for(const o in r)e[o]=r[o]}return e}else{if(de(t))return t;if(oe(t))return t}}const Zc=/;(?![^(]*\))/g,el=/:([^]+)/,tl=/\/\*.*?\*\//gs;function nl(t){const e={};return t.replace(tl,"").split(Zc).forEach(n=>{if(n){const s=n.split(el);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bn(t){let e="";if(de(t))e=t;else if(L(t))for(let n=0;n<t.length;n++){const s=bn(t[n]);s&&(e+=s+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rl=Br(sl);function Gi(t){return!!t||t===""}function ol(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Wt(t[s],e[s]);return n}function Wt(t,e){if(t===e)return!0;let n=Ro(t),s=Ro(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Fn(t),s=Fn(e),n||s)return t===e;if(n=L(t),s=L(e),n||s)return n&&s?ol(t,e):!1;if(n=oe(t),s=oe(e),n||s){if(!n||!s)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const i in t){const a=t.hasOwnProperty(i),c=e.hasOwnProperty(i);if(a&&!c||!a&&c||!Wt(t[i],e[i]))return!1}}return String(t)===String(e)}function jr(t,e){return t.findIndex(n=>Wt(n,e))}const V=t=>de(t)?t:t==null?"":L(t)||oe(t)&&(t.toString===Xi||!$(t.toString))?JSON.stringify(t,Ji,2):String(t),Ji=(t,e)=>e&&e.__v_isRef?Ji(t,e.value):nn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:yn(e)?{[`Set(${e.size})`]:[...e.values()]}:oe(e)&&!L(e)&&!Qi(e)?String(e):e,ie={},tn=[],Ve=()=>{},il=()=>!1,al=/^on[^a-z]/,Ms=t=>al.test(t),$r=t=>t.startsWith("onUpdate:"),Te=Object.assign,Hr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},cl=Object.prototype.hasOwnProperty,J=(t,e)=>cl.call(t,e),L=Array.isArray,nn=t=>Xn(t)==="[object Map]",yn=t=>Xn(t)==="[object Set]",Ro=t=>Xn(t)==="[object Date]",$=t=>typeof t=="function",de=t=>typeof t=="string",Fn=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Yi=t=>oe(t)&&$(t.then)&&$(t.catch),Xi=Object.prototype.toString,Xn=t=>Xi.call(t),ll=t=>Xn(t).slice(8,-1),Qi=t=>Xn(t)==="[object Object]",Vr=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ds=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ds=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},ul=/-(\w)/g,Ze=Ds(t=>t.replace(ul,(e,n)=>n?n.toUpperCase():"")),fl=/\B([A-Z])/g,vn=Ds(t=>t.replace(fl,"-$1").toLowerCase()),Ls=Ds(t=>t.charAt(0).toUpperCase()+t.slice(1)),er=Ds(t=>t?`on${Ls(t)}`:""),Bn=(t,e)=>!Object.is(t,e),hs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ws=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},jn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ko;const dl=()=>ko||(ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Oe;class Zi{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Oe,!e&&Oe&&(this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Oe;try{return Oe=this,e()}finally{Oe=n}}}on(){Oe=this}off(){Oe=this.parent}stop(e){if(this.active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function ea(t){return new Zi(t)}function hl(t,e=Oe){e&&e.active&&e.effects.push(t)}function pl(){return Oe}function gl(t){Oe&&Oe.cleanups.push(t)}const zr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ta=t=>(t.w&St)>0,na=t=>(t.n&St)>0,ml=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=St},_l=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const r=e[s];ta(r)&&!na(r)?r.delete(t):e[n++]=r,r.w&=~St,r.n&=~St}e.length=n}},gr=new WeakMap;let kn=0,St=1;const mr=30;let $e;const Ht=Symbol(""),_r=Symbol("");class Wr{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,hl(this,s)}run(){if(!this.active)return this.fn();let e=$e,n=wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=$e,$e=this,wt=!0,St=1<<++kn,kn<=mr?ml(this):Co(this),this.fn()}finally{kn<=mr&&_l(this),St=1<<--kn,$e=this.parent,wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){$e===this?this.deferStop=!0:this.active&&(Co(this),this.onStop&&this.onStop(),this.active=!1)}}function Co(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let wt=!0;const sa=[];function wn(){sa.push(wt),wt=!1}function En(){const t=sa.pop();wt=t===void 0?!0:t}function Me(t,e,n){if(wt&&$e){let s=gr.get(t);s||gr.set(t,s=new Map);let r=s.get(n);r||s.set(n,r=zr()),ra(r)}}function ra(t,e){let n=!1;kn<=mr?na(t)||(t.n|=St,n=!ta(t)):n=!t.has($e),n&&(t.add($e),$e.deps.push(t))}function at(t,e,n,s,r,o){const i=gr.get(t);if(!i)return;let a=[];if(e==="clear")a=[...i.values()];else if(n==="length"&&L(t)){const c=jn(s);i.forEach((l,f)=>{(f==="length"||f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),e){case"add":L(t)?Vr(n)&&a.push(i.get("length")):(a.push(i.get(Ht)),nn(t)&&a.push(i.get(_r)));break;case"delete":L(t)||(a.push(i.get(Ht)),nn(t)&&a.push(i.get(_r)));break;case"set":nn(t)&&a.push(i.get(Ht));break}if(a.length===1)a[0]&&br(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);br(zr(c))}}function br(t,e){const n=L(t)?t:[...t];for(const s of n)s.computed&&Ao(s);for(const s of n)s.computed||Ao(s)}function Ao(t,e){(t!==$e||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const bl=Br("__proto__,__v_isRef,__isVue"),oa=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Fn)),yl=Kr(),vl=Kr(!1,!0),wl=Kr(!0),Oo=El();function El(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=Y(this);for(let o=0,i=this.length;o<i;o++)Me(s,"get",o+"");const r=s[e](...n);return r===-1||r===!1?s[e](...n.map(Y)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wn();const s=Y(this)[e].apply(this,n);return En(),s}}),t}function Kr(t=!1,e=!1){return function(s,r,o){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&o===(t?e?Fl:ua:e?la:ca).get(s))return s;const i=L(s);if(!t&&i&&J(Oo,r))return Reflect.get(Oo,r,o);const a=Reflect.get(s,r,o);return(Fn(r)?oa.has(r):bl(r))||(t||Me(s,"get",r),e)?a:le(a)?i&&Vr(r)?a:a.value:oe(a)?t?fa(a):In(a):a}}const Il=ia(),xl=ia(!0);function ia(t=!1){return function(n,s,r,o){let i=n[s];if(ln(i)&&le(i)&&!le(r))return!1;if(!t&&(!Es(r)&&!ln(r)&&(i=Y(i),r=Y(r)),!L(n)&&le(i)&&!le(r)))return i.value=r,!0;const a=L(n)&&Vr(s)?Number(s)<n.length:J(n,s),c=Reflect.set(n,s,r,o);return n===Y(o)&&(a?Bn(r,i)&&at(n,"set",s,r):at(n,"add",s,r)),c}}function Tl(t,e){const n=J(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&at(t,"delete",e,void 0),s}function Pl(t,e){const n=Reflect.has(t,e);return(!Fn(e)||!oa.has(e))&&Me(t,"has",e),n}function Sl(t){return Me(t,"iterate",L(t)?"length":Ht),Reflect.ownKeys(t)}const aa={get:yl,set:Il,deleteProperty:Tl,has:Pl,ownKeys:Sl},Rl={get:wl,set(t,e){return!0},deleteProperty(t,e){return!0}},kl=Te({},aa,{get:vl,set:xl}),qr=t=>t,Us=t=>Reflect.getPrototypeOf(t);function rs(t,e,n=!1,s=!1){t=t.__v_raw;const r=Y(t),o=Y(e);n||(e!==o&&Me(r,"get",e),Me(r,"get",o));const{has:i}=Us(r),a=s?qr:n?Yr:$n;if(i.call(r,e))return a(t.get(e));if(i.call(r,o))return a(t.get(o));t!==r&&t.get(e)}function os(t,e=!1){const n=this.__v_raw,s=Y(n),r=Y(t);return e||(t!==r&&Me(s,"has",t),Me(s,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function is(t,e=!1){return t=t.__v_raw,!e&&Me(Y(t),"iterate",Ht),Reflect.get(t,"size",t)}function No(t){t=Y(t);const e=Y(this);return Us(e).has.call(e,t)||(e.add(t),at(e,"add",t,t)),this}function Mo(t,e){e=Y(e);const n=Y(this),{has:s,get:r}=Us(n);let o=s.call(n,t);o||(t=Y(t),o=s.call(n,t));const i=r.call(n,t);return n.set(t,e),o?Bn(e,i)&&at(n,"set",t,e):at(n,"add",t,e),this}function Do(t){const e=Y(this),{has:n,get:s}=Us(e);let r=n.call(e,t);r||(t=Y(t),r=n.call(e,t)),s&&s.call(e,t);const o=e.delete(t);return r&&at(e,"delete",t,void 0),o}function Lo(){const t=Y(this),e=t.size!==0,n=t.clear();return e&&at(t,"clear",void 0,void 0),n}function as(t,e){return function(s,r){const o=this,i=o.__v_raw,a=Y(i),c=e?qr:t?Yr:$n;return!t&&Me(a,"iterate",Ht),i.forEach((l,f)=>s.call(r,c(l),c(f),o))}}function cs(t,e,n){return function(...s){const r=this.__v_raw,o=Y(r),i=nn(o),a=t==="entries"||t===Symbol.iterator&&i,c=t==="keys"&&i,l=r[t](...s),f=n?qr:e?Yr:$n;return!e&&Me(o,"iterate",c?_r:Ht),{next(){const{value:h,done:p}=l.next();return p?{value:h,done:p}:{value:a?[f(h[0]),f(h[1])]:f(h),done:p}},[Symbol.iterator](){return this}}}}function ft(t){return function(...e){return t==="delete"?!1:this}}function Cl(){const t={get(o){return rs(this,o)},get size(){return is(this)},has:os,add:No,set:Mo,delete:Do,clear:Lo,forEach:as(!1,!1)},e={get(o){return rs(this,o,!1,!0)},get size(){return is(this)},has:os,add:No,set:Mo,delete:Do,clear:Lo,forEach:as(!1,!0)},n={get(o){return rs(this,o,!0)},get size(){return is(this,!0)},has(o){return os.call(this,o,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:as(!0,!1)},s={get(o){return rs(this,o,!0,!0)},get size(){return is(this,!0)},has(o){return os.call(this,o,!0)},add:ft("add"),set:ft("set"),delete:ft("delete"),clear:ft("clear"),forEach:as(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=cs(o,!1,!1),n[o]=cs(o,!0,!1),e[o]=cs(o,!1,!0),s[o]=cs(o,!0,!0)}),[t,n,e,s]}const[Al,Ol,Nl,Ml]=Cl();function Gr(t,e){const n=e?t?Ml:Nl:t?Ol:Al;return(s,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(J(n,r)&&r in s?n:s,r,o)}const Dl={get:Gr(!1,!1)},Ll={get:Gr(!1,!0)},Ul={get:Gr(!0,!1)},ca=new WeakMap,la=new WeakMap,ua=new WeakMap,Fl=new WeakMap;function Bl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jl(t){return t.__v_skip||!Object.isExtensible(t)?0:Bl(ll(t))}function In(t){return ln(t)?t:Jr(t,!1,aa,Dl,ca)}function $l(t){return Jr(t,!1,kl,Ll,la)}function fa(t){return Jr(t,!0,Rl,Ul,ua)}function Jr(t,e,n,s,r){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=r.get(t);if(o)return o;const i=jl(t);if(i===0)return t;const a=new Proxy(t,i===2?s:n);return r.set(t,a),a}function Et(t){return ln(t)?Et(t.__v_raw):!!(t&&t.__v_isReactive)}function ln(t){return!!(t&&t.__v_isReadonly)}function Es(t){return!!(t&&t.__v_isShallow)}function da(t){return Et(t)||ln(t)}function Y(t){const e=t&&t.__v_raw;return e?Y(e):t}function un(t){return ws(t,"__v_skip",!0),t}const $n=t=>oe(t)?In(t):t,Yr=t=>oe(t)?fa(t):t;function ha(t){wt&&$e&&(t=Y(t),ra(t.dep||(t.dep=zr())))}function pa(t,e){t=Y(t),t.dep&&br(t.dep)}function le(t){return!!(t&&t.__v_isRef===!0)}function Xr(t){return ga(t,!1)}function Hl(t){return ga(t,!0)}function ga(t,e){return le(t)?t:new Vl(t,e)}class Vl{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Y(e),this._value=n?e:$n(e)}get value(){return ha(this),this._value}set value(e){const n=this.__v_isShallow||Es(e)||ln(e);e=n?e:Y(e),Bn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$n(e),pa(this))}}function sn(t){return le(t)?t.value:t}const zl={get:(t,e,n)=>sn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return le(r)&&!le(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function ma(t){return Et(t)?t:new Proxy(t,zl)}function Wl(t){const e=L(t)?new Array(t.length):{};for(const n in t)e[n]=ql(t,n);return e}class Kl{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function ql(t,e,n){const s=t[e];return le(s)?s:new Kl(t,e,n)}var _a;class Gl{constructor(e,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[_a]=!1,this._dirty=!0,this.effect=new Wr(e,()=>{this._dirty||(this._dirty=!0,pa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const e=Y(this);return ha(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}_a="__v_isReadonly";function Jl(t,e,n=!1){let s,r;const o=$(t);return o?(s=t,r=Ve):(s=t.get,r=t.set),new Gl(s,r,o||!r,n)}function It(t,e,n,s){let r;try{r=s?t(...s):t()}catch(o){Fs(o,e,n)}return r}function ze(t,e,n,s){if($(t)){const o=It(t,e,n,s);return o&&Yi(o)&&o.catch(i=>{Fs(i,e,n)}),o}const r=[];for(let o=0;o<t.length;o++)r.push(ze(t[o],e,n,s));return r}function Fs(t,e,n,s=!0){const r=e?e.vnode:null;if(e){let o=e.parent;const i=e.proxy,a=n;for(;o;){const l=o.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,i,a)===!1)return}o=o.parent}const c=e.appContext.config.errorHandler;if(c){It(c,null,10,[t,i,a]);return}}Yl(t,n,r,s)}function Yl(t,e,n,s=!0){console.error(t)}let Hn=!1,yr=!1;const ve=[];let Je=0;const rn=[];let st=null,Ut=0;const ba=Promise.resolve();let Qr=null;function Zr(t){const e=Qr||ba;return t?e.then(this?t.bind(this):t):e}function Xl(t){let e=Je+1,n=ve.length;for(;e<n;){const s=e+n>>>1;Vn(ve[s])<t?e=s+1:n=s}return e}function eo(t){(!ve.length||!ve.includes(t,Hn&&t.allowRecurse?Je+1:Je))&&(t.id==null?ve.push(t):ve.splice(Xl(t.id),0,t),ya())}function ya(){!Hn&&!yr&&(yr=!0,Qr=ba.then(wa))}function Ql(t){const e=ve.indexOf(t);e>Je&&ve.splice(e,1)}function Zl(t){L(t)?rn.push(...t):(!st||!st.includes(t,t.allowRecurse?Ut+1:Ut))&&rn.push(t),ya()}function Uo(t,e=Hn?Je+1:0){for(;e<ve.length;e++){const n=ve[e];n&&n.pre&&(ve.splice(e,1),e--,n())}}function va(t){if(rn.length){const e=[...new Set(rn)];if(rn.length=0,st){st.push(...e);return}for(st=e,st.sort((n,s)=>Vn(n)-Vn(s)),Ut=0;Ut<st.length;Ut++)st[Ut]();st=null,Ut=0}}const Vn=t=>t.id==null?1/0:t.id,eu=(t,e)=>{const n=Vn(t)-Vn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function wa(t){yr=!1,Hn=!0,ve.sort(eu);const e=Ve;try{for(Je=0;Je<ve.length;Je++){const n=ve[Je];n&&n.active!==!1&&It(n,null,14)}}finally{Je=0,ve.length=0,va(),Hn=!1,Qr=null,(ve.length||rn.length)&&wa()}}function tu(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ie;let r=n;const o=e.startsWith("update:"),i=o&&e.slice(7);if(i&&i in s){const f=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:p}=s[f]||ie;p&&(r=n.map(b=>de(b)?b.trim():b)),h&&(r=n.map(jn))}let a,c=s[a=er(e)]||s[a=er(Ze(e))];!c&&o&&(c=s[a=er(vn(e))]),c&&ze(c,t,6,r);const l=s[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(l,t,6,r)}}function Ea(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const o=t.emits;let i={},a=!1;if(!$(t)){const c=l=>{const f=Ea(l,e,!0);f&&(a=!0,Te(i,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!o&&!a?(oe(t)&&s.set(t,null),null):(L(o)?o.forEach(c=>i[c]=null):Te(i,o),oe(t)&&s.set(t,i),i)}function Bs(t,e){return!t||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),J(t,e[0].toLowerCase()+e.slice(1))||J(t,vn(e))||J(t,e))}let be=null,Ia=null;function Is(t){const e=be;return be=t,Ia=t&&t.type.__scopeId||null,e}function ke(t,e=be,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&Ko(-1);const o=Is(e);let i;try{i=t(...r)}finally{Is(o),s._d&&Ko(1)}return i};return s._n=!0,s._c=!0,s._d=!0,s}function tr(t){const{type:e,vnode:n,proxy:s,withProxy:r,props:o,propsOptions:[i],slots:a,attrs:c,emit:l,render:f,renderCache:h,data:p,setupState:b,ctx:T,inheritAttrs:C}=t;let U,k;const F=Is(t);try{if(n.shapeFlag&4){const q=r||s;U=Ge(f.call(q,q,h,o,b,p,T)),k=c}else{const q=e;U=Ge(q.length>1?q(o,{attrs:c,slots:a,emit:l}):q(o,null)),k=e.props?c:nu(c)}}catch(q){Nn.length=0,Fs(q,t,1),U=Q(Rt)}let O=U;if(k&&C!==!1){const q=Object.keys(k),{shapeFlag:X}=O;q.length&&X&7&&(i&&q.some($r)&&(k=su(k,i)),O=fn(O,k))}return n.dirs&&(O=fn(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Is(F),U}const nu=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ms(n))&&((e||(e={}))[n]=t[n]);return e},su=(t,e)=>{const n={};for(const s in t)(!$r(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ru(t,e,n){const{props:s,children:r,component:o}=t,{props:i,children:a,patchFlag:c}=e,l=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?Fo(s,i,l):!!i;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const p=f[h];if(i[p]!==s[p]&&!Bs(l,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===i?!1:s?i?Fo(s,i,l):!0:!!i;return!1}function Fo(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const o=s[r];if(e[o]!==t[o]&&!Bs(n,o))return!0}return!1}function ou({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const iu=t=>t.__isSuspense;function au(t,e){e&&e.pendingBranch?L(t)?e.effects.push(...t):e.effects.push(t):Zl(t)}function ps(t,e){if(me){let n=me.provides;const s=me.parent&&me.parent.provides;s===n&&(n=me.provides=Object.create(s)),n[t]=e}}function Ye(t,e,n=!1){const s=me||be;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$(e)?e.call(s.proxy):e}}const ls={};function Cn(t,e,n){return xa(t,e,n)}function xa(t,e,{immediate:n,deep:s,flush:r,onTrack:o,onTrigger:i}=ie){const a=me;let c,l=!1,f=!1;if(le(t)?(c=()=>t.value,l=Es(t)):Et(t)?(c=()=>t,s=!0):L(t)?(f=!0,l=t.some(O=>Et(O)||Es(O)),c=()=>t.map(O=>{if(le(O))return O.value;if(Et(O))return jt(O);if($(O))return It(O,a,2)})):$(t)?e?c=()=>It(t,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),ze(t,a,3,[p])}:c=Ve,e&&s){const O=c;c=()=>jt(O())}let h,p=O=>{h=k.onStop=()=>{It(O,a,4)}},b;if(Wn)if(p=Ve,e?n&&ze(e,a,3,[c(),f?[]:void 0,p]):c(),r==="sync"){const O=tf();b=O.__watcherHandles||(O.__watcherHandles=[])}else return Ve;let T=f?new Array(t.length).fill(ls):ls;const C=()=>{if(k.active)if(e){const O=k.run();(s||l||(f?O.some((q,X)=>Bn(q,T[X])):Bn(O,T)))&&(h&&h(),ze(e,a,3,[O,T===ls?void 0:f&&T[0]===ls?[]:T,p]),T=O)}else k.run()};C.allowRecurse=!!e;let U;r==="sync"?U=C:r==="post"?U=()=>Re(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),U=()=>eo(C));const k=new Wr(c,U);e?n?C():T=k.run():r==="post"?Re(k.run.bind(k),a&&a.suspense):k.run();const F=()=>{k.stop(),a&&a.scope&&Hr(a.scope.effects,k)};return b&&b.push(F),F}function cu(t,e,n){const s=this.proxy,r=de(t)?t.includes(".")?Ta(s,t):()=>s[t]:t.bind(s,s);let o;$(e)?o=e:(o=e.handler,n=e);const i=me;dn(this);const a=xa(r,o.bind(s),n);return i?dn(i):Vt(),a}function Ta(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function jt(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),le(t))jt(t.value,e);else if(L(t))for(let n=0;n<t.length;n++)jt(t[n],e);else if(yn(t)||nn(t))t.forEach(n=>{jt(n,e)});else if(Qi(t))for(const n in t)jt(t[n],e);return t}function Pa(t){return $(t)?{setup:t,name:t.name}:t}const An=t=>!!t.type.__asyncLoader,Sa=t=>t.type.__isKeepAlive;function lu(t,e){Ra(t,"a",e)}function uu(t,e){Ra(t,"da",e)}function Ra(t,e,n=me){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(js(e,s,n),n){let r=n.parent;for(;r&&r.parent;)Sa(r.parent.vnode)&&fu(s,e,n,r),r=r.parent}}function fu(t,e,n,s){const r=js(e,t,s,!0);ka(()=>{Hr(s[e],r)},n)}function js(t,e,n=me,s=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;wn(),dn(n);const a=ze(e,n,t,i);return Vt(),En(),a});return s?r.unshift(o):r.push(o),o}}const lt=t=>(e,n=me)=>(!Wn||t==="sp")&&js(t,(...s)=>e(...s),n),du=lt("bm"),hu=lt("m"),pu=lt("bu"),gu=lt("u"),mu=lt("bum"),ka=lt("um"),_u=lt("sp"),bu=lt("rtg"),yu=lt("rtc");function vu(t,e=me){js("ec",t,e)}function ye(t,e){const n=be;if(n===null)return t;const s=zs(n)||n.proxy,r=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[i,a,c,l=ie]=e[o];i&&($(i)&&(i={mounted:i,updated:i}),i.deep&&jt(a),r.push({dir:i,instance:s,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Nt(t,e,n,s){const r=t.dirs,o=e&&e.dirs;for(let i=0;i<r.length;i++){const a=r[i];o&&(a.oldValue=o[i].value);let c=a.dir[s];c&&(wn(),ze(c,n,8,[t.el,a,t,e]),En())}}const to="components";function Kt(t,e){return Aa(to,t,!0,e)||t}const Ca=Symbol();function wu(t){return de(t)?Aa(to,t,!1)||t:t||Ca}function Aa(t,e,n=!0,s=!1){const r=be||me;if(r){const o=r.type;if(t===to){const a=Qu(o,!1);if(a&&(a===e||a===Ze(e)||a===Ls(Ze(e))))return o}const i=Bo(r[t]||o[t],e)||Bo(r.appContext[t],e);return!i&&s?o:i}}function Bo(t,e){return t&&(t[e]||t[Ze(e)]||t[Ls(Ze(e))])}function $b(t,e,n,s){let r;const o=n&&n[s];if(L(t)||de(t)){r=new Array(t.length);for(let i=0,a=t.length;i<a;i++)r[i]=e(t[i],i,void 0,o&&o[i])}else if(typeof t=="number"){r=new Array(t);for(let i=0;i<t;i++)r[i]=e(i+1,i,void 0,o&&o[i])}else if(oe(t))if(t[Symbol.iterator])r=Array.from(t,(i,a)=>e(i,a,void 0,o&&o[a]));else{const i=Object.keys(t);r=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];r[a]=e(t[l],l,a,o&&o[a])}}else r=[];return n&&(n[s]=r),r}function Eu(t,e,n={},s,r){if(be.isCE||be.parent&&An(be.parent)&&be.parent.isCE)return e!=="default"&&(n.name=e),Q("slot",n,s&&s());let o=t[e];o&&o._c&&(o._d=!1),we();const i=o&&Oa(o(n)),a=Hs(Le,{key:n.key||i&&i.key||`_${e}`},i||(s?s():[]),i&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Oa(t){return t.some(e=>Ts(e)?!(e.type===Rt||e.type===Le&&!Oa(e.children)):!0)?t:null}const vr=t=>t?Va(t)?zs(t)||t.proxy:vr(t.parent):null,On=Te(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vr(t.parent),$root:t=>vr(t.root),$emit:t=>t.emit,$options:t=>no(t),$forceUpdate:t=>t.f||(t.f=()=>eo(t.update)),$nextTick:t=>t.n||(t.n=Zr.bind(t.proxy)),$watch:t=>cu.bind(t)}),nr=(t,e)=>t!==ie&&!t.__isScriptSetup&&J(t,e),Iu={get({_:t},e){const{ctx:n,setupState:s,data:r,props:o,accessCache:i,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const b=i[e];if(b!==void 0)switch(b){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(nr(s,e))return i[e]=1,s[e];if(r!==ie&&J(r,e))return i[e]=2,r[e];if((l=t.propsOptions[0])&&J(l,e))return i[e]=3,o[e];if(n!==ie&&J(n,e))return i[e]=4,n[e];wr&&(i[e]=0)}}const f=On[e];let h,p;if(f)return e==="$attrs"&&Me(t,"get",e),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==ie&&J(n,e))return i[e]=4,n[e];if(p=c.config.globalProperties,J(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:o}=t;return nr(r,e)?(r[e]=n,!0):s!==ie&&J(s,e)?(s[e]=n,!0):J(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:o}},i){let a;return!!n[i]||t!==ie&&J(t,i)||nr(e,i)||(a=o[0])&&J(a,i)||J(s,i)||J(On,i)||J(r.config.globalProperties,i)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:J(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let wr=!0;function xu(t){const e=no(t),n=t.proxy,s=t.ctx;wr=!1,e.beforeCreate&&jo(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:i,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:p,beforeUpdate:b,updated:T,activated:C,deactivated:U,beforeDestroy:k,beforeUnmount:F,destroyed:O,unmounted:q,render:X,renderTracked:ae,renderTriggered:W,errorCaptured:K,serverPrefetch:he,expose:pe,inheritAttrs:Pe,components:De,directives:ut,filters:Ce}=e;if(l&&Tu(l,s,null,t.appContext.config.unwrapInjectedRef),i)for(const ne in i){const ee=i[ne];$(ee)&&(s[ne]=ee.bind(n))}if(r){const ne=r.call(n,n);oe(ne)&&(t.data=In(ne))}if(wr=!0,o)for(const ne in o){const ee=o[ne],Fe=$(ee)?ee.bind(n,n):$(ee.get)?ee.get.bind(n,n):Ve,Ot=!$(ee)&&$(ee.set)?ee.set.bind(n):Ve,Be=Ne({get:Fe,set:Ot});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>Be.value,set:Se=>Be.value=Se})}if(a)for(const ne in a)Na(a[ne],s,n,ne);if(c){const ne=$(c)?c.call(n):c;Reflect.ownKeys(ne).forEach(ee=>{ps(ee,ne[ee])})}f&&jo(f,t,"c");function ue(ne,ee){L(ee)?ee.forEach(Fe=>ne(Fe.bind(n))):ee&&ne(ee.bind(n))}if(ue(du,h),ue(hu,p),ue(pu,b),ue(gu,T),ue(lu,C),ue(uu,U),ue(vu,K),ue(yu,ae),ue(bu,W),ue(mu,F),ue(ka,q),ue(_u,he),L(pe))if(pe.length){const ne=t.exposed||(t.exposed={});pe.forEach(ee=>{Object.defineProperty(ne,ee,{get:()=>n[ee],set:Fe=>n[ee]=Fe})})}else t.exposed||(t.exposed={});X&&t.render===Ve&&(t.render=X),Pe!=null&&(t.inheritAttrs=Pe),De&&(t.components=De),ut&&(t.directives=ut)}function Tu(t,e,n=Ve,s=!1){L(t)&&(t=Er(t));for(const r in t){const o=t[r];let i;oe(o)?"default"in o?i=Ye(o.from||r,o.default,!0):i=Ye(o.from||r):i=Ye(o),le(i)&&s?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function jo(t,e,n){ze(L(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Na(t,e,n,s){const r=s.includes(".")?Ta(n,s):()=>n[s];if(de(t)){const o=e[t];$(o)&&Cn(r,o)}else if($(t))Cn(r,t.bind(n));else if(oe(t))if(L(t))t.forEach(o=>Na(o,e,n,s));else{const o=$(t.handler)?t.handler.bind(n):e[t.handler];$(o)&&Cn(r,o,t)}}function no(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:i}}=t.appContext,a=o.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(l=>xs(c,l,i,!0)),xs(c,e,i)),oe(e)&&o.set(e,c),c}function xs(t,e,n,s=!1){const{mixins:r,extends:o}=e;o&&xs(t,o,n,!0),r&&r.forEach(i=>xs(t,i,n,!0));for(const i in e)if(!(s&&i==="expose")){const a=Pu[i]||n&&n[i];t[i]=a?a(t[i],e[i]):e[i]}return t}const Pu={data:$o,props:Dt,emits:Dt,methods:Dt,computed:Dt,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Dt,directives:Dt,watch:Ru,provide:$o,inject:Su};function $o(t,e){return e?t?function(){return Te($(t)?t.call(this,this):t,$(e)?e.call(this,this):e)}:e:t}function Su(t,e){return Dt(Er(t),Er(e))}function Er(t){if(L(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ie(t,e){return t?[...new Set([].concat(t,e))]:e}function Dt(t,e){return t?Te(Te(Object.create(null),t),e):e}function Ru(t,e){if(!t)return e;if(!e)return t;const n=Te(Object.create(null),t);for(const s in e)n[s]=Ie(t[s],e[s]);return n}function ku(t,e,n,s=!1){const r={},o={};ws(o,Vs,1),t.propsDefaults=Object.create(null),Ma(t,e,r,o);for(const i in t.propsOptions[0])i in r||(r[i]=void 0);n?t.props=s?r:$l(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function Cu(t,e,n,s){const{props:r,attrs:o,vnode:{patchFlag:i}}=t,a=Y(r),[c]=t.propsOptions;let l=!1;if((s||i>0)&&!(i&16)){if(i&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let p=f[h];if(Bs(t.emitsOptions,p))continue;const b=e[p];if(c)if(J(o,p))b!==o[p]&&(o[p]=b,l=!0);else{const T=Ze(p);r[T]=Ir(c,a,T,b,t,!1)}else b!==o[p]&&(o[p]=b,l=!0)}}}else{Ma(t,e,r,o)&&(l=!0);let f;for(const h in a)(!e||!J(e,h)&&((f=vn(h))===h||!J(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(r[h]=Ir(c,a,h,void 0,t,!0)):delete r[h]);if(o!==a)for(const h in o)(!e||!J(e,h))&&(delete o[h],l=!0)}l&&at(t,"set","$attrs")}function Ma(t,e,n,s){const[r,o]=t.propsOptions;let i=!1,a;if(e)for(let c in e){if(ds(c))continue;const l=e[c];let f;r&&J(r,f=Ze(c))?!o||!o.includes(f)?n[f]=l:(a||(a={}))[f]=l:Bs(t.emitsOptions,c)||(!(c in s)||l!==s[c])&&(s[c]=l,i=!0)}if(o){const c=Y(n),l=a||ie;for(let f=0;f<o.length;f++){const h=o[f];n[h]=Ir(r,c,h,l[h],t,!J(l,h))}}return i}function Ir(t,e,n,s,r,o){const i=t[n];if(i!=null){const a=J(i,"default");if(a&&s===void 0){const c=i.default;if(i.type!==Function&&$(c)){const{propsDefaults:l}=r;n in l?s=l[n]:(dn(r),s=l[n]=c.call(null,e),Vt())}else s=c}i[0]&&(o&&!a?s=!1:i[1]&&(s===""||s===vn(n))&&(s=!0))}return s}function Da(t,e,n=!1){const s=e.propsCache,r=s.get(t);if(r)return r;const o=t.props,i={},a=[];let c=!1;if(!$(t)){const f=h=>{c=!0;const[p,b]=Da(h,e,!0);Te(i,p),b&&a.push(...b)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!o&&!c)return oe(t)&&s.set(t,tn),tn;if(L(o))for(let f=0;f<o.length;f++){const h=Ze(o[f]);Ho(h)&&(i[h]=ie)}else if(o)for(const f in o){const h=Ze(f);if(Ho(h)){const p=o[f],b=i[h]=L(p)||$(p)?{type:p}:Object.assign({},p);if(b){const T=Wo(Boolean,b.type),C=Wo(String,b.type);b[0]=T>-1,b[1]=C<0||T<C,(T>-1||J(b,"default"))&&a.push(h)}}}const l=[i,a];return oe(t)&&s.set(t,l),l}function Ho(t){return t[0]!=="$"}function Vo(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function zo(t,e){return Vo(t)===Vo(e)}function Wo(t,e){return L(e)?e.findIndex(n=>zo(n,t)):$(e)&&zo(e,t)?0:-1}const La=t=>t[0]==="_"||t==="$stable",so=t=>L(t)?t.map(Ge):[Ge(t)],Au=(t,e,n)=>{if(e._n)return e;const s=ke((...r)=>so(e(...r)),n);return s._c=!1,s},Ua=(t,e,n)=>{const s=t._ctx;for(const r in t){if(La(r))continue;const o=t[r];if($(o))e[r]=Au(r,o,s);else if(o!=null){const i=so(o);e[r]=()=>i}}},Fa=(t,e)=>{const n=so(e);t.slots.default=()=>n},Ou=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Y(e),ws(e,"_",n)):Ua(e,t.slots={})}else t.slots={},e&&Fa(t,e);ws(t.slots,Vs,1)},Nu=(t,e,n)=>{const{vnode:s,slots:r}=t;let o=!0,i=ie;if(s.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(Te(r,e),!n&&a===1&&delete r._):(o=!e.$stable,Ua(e,r)),i=e}else e&&(Fa(t,e),i={default:1});if(o)for(const a in r)!La(a)&&!(a in i)&&delete r[a]};function Ba(){return{app:null,config:{isNativeTag:il,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Mu=0;function Du(t,e){return function(s,r=null){$(s)||(s=Object.assign({},s)),r!=null&&!oe(r)&&(r=null);const o=Ba(),i=new Set;let a=!1;const c=o.app={_uid:Mu++,_component:s,_props:r,_container:null,_context:o,_instance:null,version:nf,get config(){return o.config},set config(l){},use(l,...f){return i.has(l)||(l&&$(l.install)?(i.add(l),l.install(c,...f)):$(l)&&(i.add(l),l(c,...f))),c},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),c},component(l,f){return f?(o.components[l]=f,c):o.components[l]},directive(l,f){return f?(o.directives[l]=f,c):o.directives[l]},mount(l,f,h){if(!a){const p=Q(s,r);return p.appContext=o,f&&e?e(p,l):t(p,l,h),a=!0,c._container=l,l.__vue_app__=c,zs(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return o.provides[l]=f,c}};return c}}function xr(t,e,n,s,r=!1){if(L(t)){t.forEach((p,b)=>xr(p,e&&(L(e)?e[b]:e),n,s,r));return}if(An(s)&&!r)return;const o=s.shapeFlag&4?zs(s.component)||s.component.proxy:s.el,i=r?null:o,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ie?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(de(l)?(f[l]=null,J(h,l)&&(h[l]=null)):le(l)&&(l.value=null)),$(c))It(c,a,12,[i,f]);else{const p=de(c),b=le(c);if(p||b){const T=()=>{if(t.f){const C=p?J(h,c)?h[c]:f[c]:c.value;r?L(C)&&Hr(C,o):L(C)?C.includes(o)||C.push(o):p?(f[c]=[o],J(h,c)&&(h[c]=f[c])):(c.value=[o],t.k&&(f[t.k]=c.value))}else p?(f[c]=i,J(h,c)&&(h[c]=i)):b&&(c.value=i,t.k&&(f[t.k]=i))};i?(T.id=-1,Re(T,n)):T()}}}const Re=au;function Lu(t){return Uu(t)}function Uu(t,e){const n=dl();n.__VUE__=!0;const{insert:s,remove:r,patchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:p,setScopeId:b=Ve,insertStaticContent:T}=t,C=(u,d,g,_=null,v=null,I=null,S=!1,E=null,x=!!d.dynamicChildren)=>{if(u===d)return;u&&!Pn(u,d)&&(_=P(u),Se(u,v,I,!0),u=null),d.patchFlag===-2&&(x=!1,d.dynamicChildren=null);const{type:w,ref:M,shapeFlag:A}=d;switch(w){case $s:U(u,d,g,_);break;case Rt:k(u,d,g,_);break;case gs:u==null&&F(d,g,_,S);break;case Le:De(u,d,g,_,v,I,S,E,x);break;default:A&1?X(u,d,g,_,v,I,S,E,x):A&6?ut(u,d,g,_,v,I,S,E,x):(A&64||A&128)&&w.process(u,d,g,_,v,I,S,E,x,G)}M!=null&&v&&xr(M,u&&u.ref,I,d||u,!d)},U=(u,d,g,_)=>{if(u==null)s(d.el=a(d.children),g,_);else{const v=d.el=u.el;d.children!==u.children&&l(v,d.children)}},k=(u,d,g,_)=>{u==null?s(d.el=c(d.children||""),g,_):d.el=u.el},F=(u,d,g,_)=>{[u.el,u.anchor]=T(u.children,d,g,_,u.el,u.anchor)},O=({el:u,anchor:d},g,_)=>{let v;for(;u&&u!==d;)v=p(u),s(u,g,_),u=v;s(d,g,_)},q=({el:u,anchor:d})=>{let g;for(;u&&u!==d;)g=p(u),r(u),u=g;r(d)},X=(u,d,g,_,v,I,S,E,x)=>{S=S||d.type==="svg",u==null?ae(d,g,_,v,I,S,E,x):he(u,d,v,I,S,E,x)},ae=(u,d,g,_,v,I,S,E)=>{let x,w;const{type:M,props:A,shapeFlag:D,transition:j,dirs:z}=u;if(x=u.el=i(u.type,I,A&&A.is,A),D&8?f(x,u.children):D&16&&K(u.children,x,null,_,v,I&&M!=="foreignObject",S,E),z&&Nt(u,null,_,"created"),A){for(const te in A)te!=="value"&&!ds(te)&&o(x,te,null,A[te],I,u.children,_,v,R);"value"in A&&o(x,"value",null,A.value),(w=A.onVnodeBeforeMount)&&qe(w,_,u)}W(x,u,u.scopeId,S,_),z&&Nt(u,null,_,"beforeMount");const se=(!v||v&&!v.pendingBranch)&&j&&!j.persisted;se&&j.beforeEnter(x),s(x,d,g),((w=A&&A.onVnodeMounted)||se||z)&&Re(()=>{w&&qe(w,_,u),se&&j.enter(x),z&&Nt(u,null,_,"mounted")},v)},W=(u,d,g,_,v)=>{if(g&&b(u,g),_)for(let I=0;I<_.length;I++)b(u,_[I]);if(v){let I=v.subTree;if(d===I){const S=v.vnode;W(u,S,S.scopeId,S.slotScopeIds,v.parent)}}},K=(u,d,g,_,v,I,S,E,x=0)=>{for(let w=x;w<u.length;w++){const M=u[w]=E?pt(u[w]):Ge(u[w]);C(null,M,d,g,_,v,I,S,E)}},he=(u,d,g,_,v,I,S)=>{const E=d.el=u.el;let{patchFlag:x,dynamicChildren:w,dirs:M}=d;x|=u.patchFlag&16;const A=u.props||ie,D=d.props||ie;let j;g&&Mt(g,!1),(j=D.onVnodeBeforeUpdate)&&qe(j,g,d,u),M&&Nt(d,u,g,"beforeUpdate"),g&&Mt(g,!0);const z=v&&d.type!=="foreignObject";if(w?pe(u.dynamicChildren,w,E,g,_,z,I):S||ee(u,d,E,null,g,_,z,I,!1),x>0){if(x&16)Pe(E,d,A,D,g,_,v);else if(x&2&&A.class!==D.class&&o(E,"class",null,D.class,v),x&4&&o(E,"style",A.style,D.style,v),x&8){const se=d.dynamicProps;for(let te=0;te<se.length;te++){const fe=se[te],je=A[fe],Yt=D[fe];(Yt!==je||fe==="value")&&o(E,fe,je,Yt,v,u.children,g,_,R)}}x&1&&u.children!==d.children&&f(E,d.children)}else!S&&w==null&&Pe(E,d,A,D,g,_,v);((j=D.onVnodeUpdated)||M)&&Re(()=>{j&&qe(j,g,d,u),M&&Nt(d,u,g,"updated")},_)},pe=(u,d,g,_,v,I,S)=>{for(let E=0;E<d.length;E++){const x=u[E],w=d[E],M=x.el&&(x.type===Le||!Pn(x,w)||x.shapeFlag&70)?h(x.el):g;C(x,w,M,null,_,v,I,S,!0)}},Pe=(u,d,g,_,v,I,S)=>{if(g!==_){if(g!==ie)for(const E in g)!ds(E)&&!(E in _)&&o(u,E,g[E],null,S,d.children,v,I,R);for(const E in _){if(ds(E))continue;const x=_[E],w=g[E];x!==w&&E!=="value"&&o(u,E,w,x,S,d.children,v,I,R)}"value"in _&&o(u,"value",g.value,_.value)}},De=(u,d,g,_,v,I,S,E,x)=>{const w=d.el=u?u.el:a(""),M=d.anchor=u?u.anchor:a("");let{patchFlag:A,dynamicChildren:D,slotScopeIds:j}=d;j&&(E=E?E.concat(j):j),u==null?(s(w,g,_),s(M,g,_),K(d.children,g,M,v,I,S,E,x)):A>0&&A&64&&D&&u.dynamicChildren?(pe(u.dynamicChildren,D,g,v,I,S,E),(d.key!=null||v&&d===v.subTree)&&ja(u,d,!0)):ee(u,d,g,M,v,I,S,E,x)},ut=(u,d,g,_,v,I,S,E,x)=>{d.slotScopeIds=E,u==null?d.shapeFlag&512?v.ctx.activate(d,g,_,S,x):Ce(d,g,_,v,I,S,x):ge(u,d,x)},Ce=(u,d,g,_,v,I,S)=>{const E=u.component=Ku(u,_,v);if(Sa(u)&&(E.ctx.renderer=G),Gu(E),E.asyncDep){if(v&&v.registerDep(E,ue),!u.el){const x=E.subTree=Q(Rt);k(null,x,d,g)}return}ue(E,u,d,g,v,I,S)},ge=(u,d,g)=>{const _=d.component=u.component;if(ru(u,d,g))if(_.asyncDep&&!_.asyncResolved){ne(_,d,g);return}else _.next=d,Ql(_.update),_.update();else d.el=u.el,_.vnode=d},ue=(u,d,g,_,v,I,S)=>{const E=()=>{if(u.isMounted){let{next:M,bu:A,u:D,parent:j,vnode:z}=u,se=M,te;Mt(u,!1),M?(M.el=z.el,ne(u,M,S)):M=z,A&&hs(A),(te=M.props&&M.props.onVnodeBeforeUpdate)&&qe(te,j,M,z),Mt(u,!0);const fe=tr(u),je=u.subTree;u.subTree=fe,C(je,fe,h(je.el),P(je),u,v,I),M.el=fe.el,se===null&&ou(u,fe.el),D&&Re(D,v),(te=M.props&&M.props.onVnodeUpdated)&&Re(()=>qe(te,j,M,z),v)}else{let M;const{el:A,props:D}=d,{bm:j,m:z,parent:se}=u,te=An(d);if(Mt(u,!1),j&&hs(j),!te&&(M=D&&D.onVnodeBeforeMount)&&qe(M,se,d),Mt(u,!0),A&&H){const fe=()=>{u.subTree=tr(u),H(A,u.subTree,u,v,null)};te?d.type.__asyncLoader().then(()=>!u.isUnmounted&&fe()):fe()}else{const fe=u.subTree=tr(u);C(null,fe,g,_,u,v,I),d.el=fe.el}if(z&&Re(z,v),!te&&(M=D&&D.onVnodeMounted)){const fe=d;Re(()=>qe(M,se,fe),v)}(d.shapeFlag&256||se&&An(se.vnode)&&se.vnode.shapeFlag&256)&&u.a&&Re(u.a,v),u.isMounted=!0,d=g=_=null}},x=u.effect=new Wr(E,()=>eo(w),u.scope),w=u.update=()=>x.run();w.id=u.uid,Mt(u,!0),w()},ne=(u,d,g)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Cu(u,d.props,_,g),Nu(u,d.children,g),wn(),Uo(),En()},ee=(u,d,g,_,v,I,S,E,x=!1)=>{const w=u&&u.children,M=u?u.shapeFlag:0,A=d.children,{patchFlag:D,shapeFlag:j}=d;if(D>0){if(D&128){Ot(w,A,g,_,v,I,S,E,x);return}else if(D&256){Fe(w,A,g,_,v,I,S,E,x);return}}j&8?(M&16&&R(w,v,I),A!==w&&f(g,A)):M&16?j&16?Ot(w,A,g,_,v,I,S,E,x):R(w,v,I,!0):(M&8&&f(g,""),j&16&&K(A,g,_,v,I,S,E,x))},Fe=(u,d,g,_,v,I,S,E,x)=>{u=u||tn,d=d||tn;const w=u.length,M=d.length,A=Math.min(w,M);let D;for(D=0;D<A;D++){const j=d[D]=x?pt(d[D]):Ge(d[D]);C(u[D],j,g,null,v,I,S,E,x)}w>M?R(u,v,I,!0,!1,A):K(d,g,_,v,I,S,E,x,A)},Ot=(u,d,g,_,v,I,S,E,x)=>{let w=0;const M=d.length;let A=u.length-1,D=M-1;for(;w<=A&&w<=D;){const j=u[w],z=d[w]=x?pt(d[w]):Ge(d[w]);if(Pn(j,z))C(j,z,g,null,v,I,S,E,x);else break;w++}for(;w<=A&&w<=D;){const j=u[A],z=d[D]=x?pt(d[D]):Ge(d[D]);if(Pn(j,z))C(j,z,g,null,v,I,S,E,x);else break;A--,D--}if(w>A){if(w<=D){const j=D+1,z=j<M?d[j].el:_;for(;w<=D;)C(null,d[w]=x?pt(d[w]):Ge(d[w]),g,z,v,I,S,E,x),w++}}else if(w>D)for(;w<=A;)Se(u[w],v,I,!0),w++;else{const j=w,z=w,se=new Map;for(w=z;w<=D;w++){const Ae=d[w]=x?pt(d[w]):Ge(d[w]);Ae.key!=null&&se.set(Ae.key,w)}let te,fe=0;const je=D-z+1;let Yt=!1,To=0;const Tn=new Array(je);for(w=0;w<je;w++)Tn[w]=0;for(w=j;w<=A;w++){const Ae=u[w];if(fe>=je){Se(Ae,v,I,!0);continue}let Ke;if(Ae.key!=null)Ke=se.get(Ae.key);else for(te=z;te<=D;te++)if(Tn[te-z]===0&&Pn(Ae,d[te])){Ke=te;break}Ke===void 0?Se(Ae,v,I,!0):(Tn[Ke-z]=w+1,Ke>=To?To=Ke:Yt=!0,C(Ae,d[Ke],g,null,v,I,S,E,x),fe++)}const Po=Yt?Fu(Tn):tn;for(te=Po.length-1,w=je-1;w>=0;w--){const Ae=z+w,Ke=d[Ae],So=Ae+1<M?d[Ae+1].el:_;Tn[w]===0?C(null,Ke,g,So,v,I,S,E,x):Yt&&(te<0||w!==Po[te]?Be(Ke,g,So,2):te--)}}},Be=(u,d,g,_,v=null)=>{const{el:I,type:S,transition:E,children:x,shapeFlag:w}=u;if(w&6){Be(u.component.subTree,d,g,_);return}if(w&128){u.suspense.move(d,g,_);return}if(w&64){S.move(u,d,g,G);return}if(S===Le){s(I,d,g);for(let A=0;A<x.length;A++)Be(x[A],d,g,_);s(u.anchor,d,g);return}if(S===gs){O(u,d,g);return}if(_!==2&&w&1&&E)if(_===0)E.beforeEnter(I),s(I,d,g),Re(()=>E.enter(I),v);else{const{leave:A,delayLeave:D,afterLeave:j}=E,z=()=>s(I,d,g),se=()=>{A(I,()=>{z(),j&&j()})};D?D(I,z,se):se()}else s(I,d,g)},Se=(u,d,g,_=!1,v=!1)=>{const{type:I,props:S,ref:E,children:x,dynamicChildren:w,shapeFlag:M,patchFlag:A,dirs:D}=u;if(E!=null&&xr(E,null,g,u,!0),M&256){d.ctx.deactivate(u);return}const j=M&1&&D,z=!An(u);let se;if(z&&(se=S&&S.onVnodeBeforeUnmount)&&qe(se,d,u),M&6)y(u.component,g,_);else{if(M&128){u.suspense.unmount(g,_);return}j&&Nt(u,null,d,"beforeUnmount"),M&64?u.type.remove(u,d,g,v,G,_):w&&(I!==Le||A>0&&A&64)?R(w,d,g,!1,!0):(I===Le&&A&384||!v&&M&16)&&R(x,d,g),_&&Jt(u)}(z&&(se=S&&S.onVnodeUnmounted)||j)&&Re(()=>{se&&qe(se,d,u),j&&Nt(u,null,d,"unmounted")},g)},Jt=u=>{const{type:d,el:g,anchor:_,transition:v}=u;if(d===Le){ss(g,_);return}if(d===gs){q(u);return}const I=()=>{r(g),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:S,delayLeave:E}=v,x=()=>S(g,I);E?E(u.el,I,x):x()}else I()},ss=(u,d)=>{let g;for(;u!==d;)g=p(u),r(u),u=g;r(d)},y=(u,d,g)=>{const{bum:_,scope:v,update:I,subTree:S,um:E}=u;_&&hs(_),v.stop(),I&&(I.active=!1,Se(S,u,d,g)),E&&Re(E,d),Re(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},R=(u,d,g,_=!1,v=!1,I=0)=>{for(let S=I;S<u.length;S++)Se(u[S],d,g,_,v)},P=u=>u.shapeFlag&6?P(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),N=(u,d,g)=>{u==null?d._vnode&&Se(d._vnode,null,null,!0):C(d._vnode||null,u,d,null,null,null,g),Uo(),va(),d._vnode=u},G={p:C,um:Se,m:Be,r:Jt,mt:Ce,mc:K,pc:ee,pbc:pe,n:P,o:t};let ce,H;return e&&([ce,H]=e(G)),{render:N,hydrate:ce,createApp:Du(N,ce)}}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ja(t,e,n=!1){const s=t.children,r=e.children;if(L(s)&&L(r))for(let o=0;o<s.length;o++){const i=s[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=pt(r[o]),a.el=i.el),n||ja(i,a)),a.type===$s&&(a.el=i.el)}}function Fu(t){const e=t.slice(),n=[0];let s,r,o,i,a;const c=t.length;for(s=0;s<c;s++){const l=t[s];if(l!==0){if(r=n[n.length-1],t[r]<l){e[s]=r,n.push(s);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,t[n[a]]<l?o=a+1:i=a;l<t[n[o]]&&(o>0&&(e[s]=n[o-1]),n[o]=s)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=e[i];return n}const Bu=t=>t.__isTeleport,Le=Symbol(void 0),$s=Symbol(void 0),Rt=Symbol(void 0),gs=Symbol(void 0),Nn=[];let He=null;function we(t=!1){Nn.push(He=t?null:[])}function ju(){Nn.pop(),He=Nn[Nn.length-1]||null}let zn=1;function Ko(t){zn+=t}function $a(t){return t.dynamicChildren=zn>0?He||tn:null,ju(),zn>0&&He&&He.push(t),t}function Ue(t,e,n,s,r,o){return $a(m(t,e,n,s,r,o,!0))}function Hs(t,e,n,s,r){return $a(Q(t,e,n,s,r,!0))}function Ts(t){return t?t.__v_isVNode===!0:!1}function Pn(t,e){return t.type===e.type&&t.key===e.key}const Vs="__vInternal",Ha=({key:t})=>t??null,ms=({ref:t,ref_key:e,ref_for:n})=>t!=null?de(t)||le(t)||$(t)?{i:be,r:t,k:e,f:!!n}:t:null;function m(t,e=null,n=null,s=0,r=null,o=t===Le?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ha(e),ref:e&&ms(e),scopeId:Ia,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:be};return a?(oo(c,n),o&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),zn>0&&!i&&He&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&He.push(c),c}const Q=$u;function $u(t,e=null,n=null,s=0,r=null,o=!1){if((!t||t===Ca)&&(t=Rt),Ts(t)){const a=fn(t,e,!0);return n&&oo(a,n),zn>0&&!o&&He&&(a.shapeFlag&6?He[He.indexOf(t)]=a:He.push(a)),a.patchFlag|=-2,a}if(Zu(t)&&(t=t.__vccOpts),e){e=Hu(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=bn(a)),oe(c)&&(da(c)&&!L(c)&&(c=Te({},c)),e.style=_t(c))}const i=de(t)?1:iu(t)?128:Bu(t)?64:oe(t)?4:$(t)?2:0;return m(t,e,n,s,r,i,o,!0)}function Hu(t){return t?da(t)||Vs in t?Te({},t):t:null}function fn(t,e,n=!1){const{props:s,ref:r,patchFlag:o,children:i}=t,a=e?Vu(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ha(a),ref:e&&e.ref?n&&r?L(r)?r.concat(ms(e)):[r,ms(e)]:ms(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fn(t.ssContent),ssFallback:t.ssFallback&&fn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx}}function _e(t=" ",e=0){return Q($s,null,t,e)}function ro(t,e){const n=Q(gs,null,t);return n.staticCount=e,n}function Ps(t="",e=!1){return e?(we(),Hs(Rt,null,t)):Q(Rt,null,t)}function Ge(t){return t==null||typeof t=="boolean"?Q(Rt):L(t)?Q(Le,null,t.slice()):typeof t=="object"?pt(t):Q($s,null,String(t))}function pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fn(t)}function oo(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(L(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),oo(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(Vs in e)?e._ctx=be:r===3&&be&&(be.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $(e)?(e={default:e,_ctx:be},n=32):(e=String(e),s&64?(n=16,e=[_e(e)]):n=8);t.children=e,t.shapeFlag|=n}function Vu(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bn([e.class,s.class]));else if(r==="style")e.style=_t([e.style,s.style]);else if(Ms(r)){const o=e[r],i=s[r];i&&o!==i&&!(L(o)&&o.includes(i))&&(e[r]=o?[].concat(o,i):i)}else r!==""&&(e[r]=s[r])}return e}function qe(t,e,n,s=null){ze(t,e,7,[n,s])}const zu=Ba();let Wu=0;function Ku(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||zu,o={uid:Wu++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Da(s,r),emitsOptions:Ea(s,r),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:s.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=tu.bind(null,o),t.ce&&t.ce(o),o}let me=null;const qu=()=>me||be,dn=t=>{me=t,t.scope.on()},Vt=()=>{me&&me.scope.off(),me=null};function Va(t){return t.vnode.shapeFlag&4}let Wn=!1;function Gu(t,e=!1){Wn=e;const{props:n,children:s}=t.vnode,r=Va(t);ku(t,n,r,e),Ou(t,s);const o=r?Ju(t,e):void 0;return Wn=!1,o}function Ju(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=un(new Proxy(t.ctx,Iu));const{setup:s}=n;if(s){const r=t.setupContext=s.length>1?Xu(t):null;dn(t),wn();const o=It(s,t,0,[t.props,r]);if(En(),Vt(),Yi(o)){if(o.then(Vt,Vt),e)return o.then(i=>{qo(t,i,e)}).catch(i=>{Fs(i,t,0)});t.asyncDep=o}else qo(t,o,e)}else za(t,e)}function qo(t,e,n){$(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=ma(e)),za(t,n)}let Go;function za(t,e,n){const s=t.type;if(!t.render){if(!e&&Go&&!s.render){const r=s.template||no(t).template;if(r){const{isCustomElement:o,compilerOptions:i}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,l=Te(Te({isCustomElement:o,delimiters:a},i),c);s.render=Go(r,l)}}t.render=s.render||Ve}dn(t),wn(),xu(t),En(),Vt()}function Yu(t){return new Proxy(t.attrs,{get(e,n){return Me(t,"get","$attrs"),e[n]}})}function Xu(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=Yu(t))},slots:t.slots,emit:t.emit,expose:e}}function zs(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ma(un(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in On)return On[n](t)},has(e,n){return n in e||n in On}}))}function Qu(t,e=!0){return $(t)?t.displayName||t.name:t.name||e&&t.__name}function Zu(t){return $(t)&&"__vccOpts"in t}const Ne=(t,e)=>Jl(t,e,Wn);function Wa(t,e,n){const s=arguments.length;return s===2?oe(e)&&!L(e)?Ts(e)?Q(t,null,[e]):Q(t,e):Q(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ts(n)&&(n=[n]),Q(t,e,n))}const ef=Symbol(""),tf=()=>Ye(ef),nf="3.2.45",sf="http://www.w3.org/2000/svg",Ft=typeof document<"u"?document:null,Jo=Ft&&Ft.createElement("template"),rf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e?Ft.createElementNS(sf,t):Ft.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Ft.createTextNode(t),createComment:t=>Ft.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ft.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,o){const i=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Jo.innerHTML=s?`<svg>${t}</svg>`:t;const a=Jo.content;if(s){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[i?i.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function of(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function af(t,e,n){const s=t.style,r=de(n);if(n&&!r){for(const o in n)Tr(s,o,n[o]);if(e&&!de(e))for(const o in e)n[o]==null&&Tr(s,o,"")}else{const o=s.display;r?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=o)}}const Yo=/\s*!important$/;function Tr(t,e,n){if(L(n))n.forEach(s=>Tr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=cf(t,e);Yo.test(n)?t.setProperty(vn(s),n.replace(Yo,""),"important"):t[s]=n}}const Xo=["Webkit","Moz","ms"],sr={};function cf(t,e){const n=sr[e];if(n)return n;let s=Ze(e);if(s!=="filter"&&s in t)return sr[e]=s;s=Ls(s);for(let r=0;r<Xo.length;r++){const o=Xo[r]+s;if(o in t)return sr[e]=o}return e}const Qo="http://www.w3.org/1999/xlink";function lf(t,e,n,s,r){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Qo,e.slice(6,e.length)):t.setAttributeNS(Qo,e,n);else{const o=rl(e);n==null||o&&!Gi(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function uf(t,e,n,s,r,o,i){if(e==="innerHTML"||e==="textContent"){s&&i(s,r,o),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const c=n??"";(t.value!==c||t.tagName==="OPTION")&&(t.value=c),n==null&&t.removeAttribute(e);return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gi(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function rt(t,e,n,s){t.addEventListener(e,n,s)}function ff(t,e,n,s){t.removeEventListener(e,n,s)}function df(t,e,n,s,r=null){const o=t._vei||(t._vei={}),i=o[e];if(s&&i)i.value=s;else{const[a,c]=hf(e);if(s){const l=o[e]=mf(s,r);rt(t,a,l,c)}else i&&(ff(t,a,i,c),o[e]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function hf(t){let e;if(Zo.test(t)){e={};let s;for(;s=t.match(Zo);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vn(t.slice(2)),e]}let rr=0;const pf=Promise.resolve(),gf=()=>rr||(pf.then(()=>rr=0),rr=Date.now());function mf(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ze(_f(s,n.value),e,5,[s])};return n.value=t,n.attached=gf(),n}function _f(t,e){if(L(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const ei=/^on[a-z]/,bf=(t,e,n,s,r=!1,o,i,a,c)=>{e==="class"?of(t,s,r):e==="style"?af(t,n,s):Ms(e)?$r(e)||df(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):yf(t,e,s,r))?uf(t,e,s,o,i,a,c):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),lf(t,e,s,r))};function yf(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&ei.test(e)&&$(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ei.test(e)&&de(n)?!1:e in t}const kt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return L(e)?n=>hs(e,n):e};function vf(t){t.target.composing=!0}function ti(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const xt={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t._assign=kt(r);const o=s||r.props&&r.props.type==="number";rt(t,e?"change":"input",i=>{if(i.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=jn(a)),t._assign(a)}),n&&rt(t,"change",()=>{t.value=t.value.trim()}),e||(rt(t,"compositionstart",vf),rt(t,"compositionend",ti),rt(t,"change",ti))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:r}},o){if(t._assign=kt(o),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(r||t.type==="number")&&jn(t.value)===e))return;const i=e??"";t.value!==i&&(t.value=i)}},wf={deep:!0,created(t,e,n){t._assign=kt(n),rt(t,"change",()=>{const s=t._modelValue,r=hn(t),o=t.checked,i=t._assign;if(L(s)){const a=jr(s,r),c=a!==-1;if(o&&!c)i(s.concat(r));else if(!o&&c){const l=[...s];l.splice(a,1),i(l)}}else if(yn(s)){const a=new Set(s);o?a.add(r):a.delete(r),i(a)}else i(Ka(t,o))})},mounted:ni,beforeUpdate(t,e,n){t._assign=kt(n),ni(t,e,n)}};function ni(t,{value:e,oldValue:n},s){t._modelValue=e,L(e)?t.checked=jr(e,s.props.value)>-1:yn(e)?t.checked=e.has(s.props.value):e!==n&&(t.checked=Wt(e,Ka(t,!0)))}const Ef={created(t,{value:e},n){t.checked=Wt(e,n.props.value),t._assign=kt(n),rt(t,"change",()=>{t._assign(hn(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t._assign=kt(s),e!==n&&(t.checked=Wt(e,s.props.value))}},If={deep:!0,created(t,{value:e,modifiers:{number:n}},s){const r=yn(e);rt(t,"change",()=>{const o=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?jn(hn(i)):hn(i));t._assign(t.multiple?r?new Set(o):o:o[0])}),t._assign=kt(s)},mounted(t,{value:e}){si(t,e)},beforeUpdate(t,e,n){t._assign=kt(n)},updated(t,{value:e}){si(t,e)}};function si(t,e){const n=t.multiple;if(!(n&&!L(e)&&!yn(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],i=hn(o);if(n)L(e)?o.selected=jr(e,i)>-1:o.selected=e.has(i);else if(Wt(hn(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function hn(t){return"_value"in t?t._value:t.value}function Ka(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Pr={created(t,e,n){us(t,e,n,null,"created")},mounted(t,e,n){us(t,e,n,null,"mounted")},beforeUpdate(t,e,n,s){us(t,e,n,s,"beforeUpdate")},updated(t,e,n,s){us(t,e,n,s,"updated")}};function xf(t,e){switch(t){case"SELECT":return If;case"TEXTAREA":return xt;default:switch(e){case"checkbox":return wf;case"radio":return Ef;default:return xt}}}function us(t,e,n,s,r){const i=xf(t.tagName,n.props&&n.props.type)[r];i&&i(t,e,n,s)}const Bt={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Sn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Sn(t,!0),s.enter(t)):s.leave(t,()=>{Sn(t,!1)}):Sn(t,e))},beforeUnmount(t,{value:e}){Sn(t,e)}};function Sn(t,e){t.style.display=e?t._vod:"none"}const Tf=Te({patchProp:bf},rf);let ri;function Pf(){return ri||(ri=Lu(Tf))}const Sf=(...t)=>{const e=Pf().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=Rf(s);if(!r)return;const o=e._component;!$(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.innerHTML="";const i=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),i},e};function Rf(t){return de(t)?document.querySelector(t):t}var kf=!1;/*!
  * pinia v2.0.28
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let qa;const Ws=t=>qa=t,Ga=Symbol();function Sr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Mn;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Mn||(Mn={}));function Cf(){const t=ea(!0),e=t.run(()=>Xr({}));let n=[],s=[];const r=un({install(o){Ws(r),r._a=o,o.provide(Ga,r),o.config.globalProperties.$pinia=r,s.forEach(i=>n.push(i)),s=[]},use(o){return!this._a&&!kf?s.push(o):n.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Ja=()=>{};function oi(t,e,n,s=Ja){t.push(e);const r=()=>{const o=t.indexOf(e);o>-1&&(t.splice(o,1),s())};return!n&&pl()&&gl(r),r}function Xt(t,...e){t.slice().forEach(n=>{n(...e)})}function Rr(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,s)=>t.set(s,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],r=t[n];Sr(r)&&Sr(s)&&t.hasOwnProperty(n)&&!le(s)&&!Et(s)?t[n]=Rr(r,s):t[n]=s}return t}const Af=Symbol();function Of(t){return!Sr(t)||!t.hasOwnProperty(Af)}const{assign:gt}=Object;function Nf(t){return!!(le(t)&&t.effect)}function Mf(t,e,n,s){const{state:r,actions:o,getters:i}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=r?r():{});const f=Wl(n.state.value[t]);return gt(f,o,Object.keys(i||{}).reduce((h,p)=>(h[p]=un(Ne(()=>{Ws(n);const b=n._s.get(t);return i[p].call(b,b)})),h),{}))}return c=Ya(t,l,e,n,s,!0),c.$reset=function(){const h=r?r():{};this.$patch(p=>{gt(p,h)})},c}function Ya(t,e,n={},s,r,o){let i;const a=gt({actions:{}},n),c={deep:!0};let l,f,h=un([]),p=un([]),b;const T=s.state.value[t];!o&&!T&&(s.state.value[t]={}),Xr({});let C;function U(W){let K;l=f=!1,typeof W=="function"?(W(s.state.value[t]),K={type:Mn.patchFunction,storeId:t,events:b}):(Rr(s.state.value[t],W),K={type:Mn.patchObject,payload:W,storeId:t,events:b});const he=C=Symbol();Zr().then(()=>{C===he&&(l=!0)}),f=!0,Xt(h,K,s.state.value[t])}const k=Ja;function F(){i.stop(),h=[],p=[],s._s.delete(t)}function O(W,K){return function(){Ws(s);const he=Array.from(arguments),pe=[],Pe=[];function De(ge){pe.push(ge)}function ut(ge){Pe.push(ge)}Xt(p,{args:he,name:W,store:X,after:De,onError:ut});let Ce;try{Ce=K.apply(this&&this.$id===t?this:X,he)}catch(ge){throw Xt(Pe,ge),ge}return Ce instanceof Promise?Ce.then(ge=>(Xt(pe,ge),ge)).catch(ge=>(Xt(Pe,ge),Promise.reject(ge))):(Xt(pe,Ce),Ce)}}const q={_p:s,$id:t,$onAction:oi.bind(null,p),$patch:U,$reset:k,$subscribe(W,K={}){const he=oi(h,W,K.detached,()=>pe()),pe=i.run(()=>Cn(()=>s.state.value[t],Pe=>{(K.flush==="sync"?f:l)&&W({storeId:t,type:Mn.direct,events:b},Pe)},gt({},c,K)));return he},$dispose:F},X=In(q);s._s.set(t,X);const ae=s._e.run(()=>(i=ea(),i.run(()=>e())));for(const W in ae){const K=ae[W];if(le(K)&&!Nf(K)||Et(K))o||(T&&Of(K)&&(le(K)?K.value=T[W]:Rr(K,T[W])),s.state.value[t][W]=K);else if(typeof K=="function"){const he=O(W,K);ae[W]=he,a.actions[W]=K}}return gt(X,ae),gt(Y(X),ae),Object.defineProperty(X,"$state",{get:()=>s.state.value[t],set:W=>{U(K=>{gt(K,W)})}}),s._p.forEach(W=>{gt(X,i.run(()=>W({store:X,app:s._a,pinia:s,options:a})))}),T&&o&&n.hydrate&&n.hydrate(X.$state,T),l=!0,f=!0,X}function Df(t,e,n){let s,r;const o=typeof e=="function";typeof t=="string"?(s=t,r=o?n:e):(r=t,s=t.id);function i(a,c){const l=qu();return a=a||l&&Ye(Ga,null),a&&Ws(a),a=qa,a._s.has(s)||(o?Ya(s,e,r,a):Mf(s,r,a)),a._s.get(s)}return i.$id=s,i}const Ct=Df("store",{state:()=>({bg:"bg-white",modal:!1,feedback:!1,comp:"Contacts",lang:"rus",langProp:{rus:{catalogue:"Каталог",about:"О нас",blog:"Блог",contacts:"Контакты",entrance:"Вход",registeration:"Регистрация",loginWithGoogle:"Вход через Google",enterEmail:"Введите Email",enterPassword:"Введите пароль",password:"Пароль",confirmThePassword:"Подтвердите пароль",username:"Имя пользователя",minimumNumberOfSymbols:"Минимальное кол-во символов",passwordMismatch:"Пароли не совпадают",toComeIn:"Войти",doYouAlreadyHaveAnAccount:"У Вас уже есть аккаунт?",forgotYourPassword:"Забыли пароль?",dontHaveAnAccountYet:"У Вас еще нет аккаунта?",create:"Создать",aboutUs:"О нас",aboutUsP1:"Мы рады приветствовать Вас на нашем семейном производстве экологически чистых продуктов",aboutUsP2:"Наше небольшое семейное производство берет свое начало в далеком 1996 году, а началось все с того, что наш папа решил завести несколько пчелиных семей и начал постигать основы общения с пчелами, изучать их нрав и поведение. Изначально пчел у нас было не много, всего 16 семей Среднерусской породы, за тем по мере углубления в изучение пчеловодства мы экспериментировали и заводили другие породы пчел:",aboutUsP3:"в 2000 году мы заводили Карпатскую породу пчел, порядка 15 семей, в 2014 перешли на породу Карника и увеличили количество семей уже до 40, а к 2020 году увеличили количество семей этой породы до 235. С 2022 года мы оставили 110 семей пород Бакфаст и Карника.",aboutUsP4:"Экологически чистое место расположение нашей пасеки в высокогорье Джалал-Абадской области обеспечивает высокое качество продукта, чистый горный воздух, обширные луга с разными травами, кристально-чистая вода горных рек ледникового происхождения, все это делает наш мед неповторимым по составу и качеству.",aboutUsP5:"Приобретая нашу продукцию Вы обеспечиваете здоровье и долголетие Вас и Вашей семьи!",blogP1:"Интересные факты про мед",blogP2:"Мед — очень полезный продукт питания. Настоящий мед делают только пчелы. Благодаря большому содержанию полезных веществ этот продукт обладает целебными свойствами. Самые интересные факты о мёде — в этой статье. В 1985 году перуанские наркодиллеры выпускали пчел прямо на поля с цветущим коки. Насекомые собрали наркотический мед, который был конфискован на границе. Для изготовления литра меда пчелы собирают 2,5 литра нектара. Испанцы добавляют мед к искусственному питанию детей, болеющих желтухой или болезнями крови.",blogP3:"Цветочный мед",blogP4:"Сложность цветочного медав том, что привести его к какой-то одной характеристике по внешнему виду невозможно. Цвет и запах зависит от того, где и с каких растений он был собран. Наиболее часто встречающиеся разновидности по цвету - светло-желтый или оранжевый мед. Также на рынке можно встретить янтарные оттенки меда, золотистые, темно-коричневые. Чуть реже встречается мед зеленоватого оттенка. Что касается запаха, то здесь обязательно превалируют цветочные ароматы, часто слышатся фруктовые нотки. Есть включения сладкого или пряного аромата. На вкус цветочный мед - очень деликатный, нежный, послевкусие - продолжительное. В меде чувствуется приятный травяной привкус.",feedback:"Обратная связь",address:"Адрес:",kyrgyzstan:"Кыргызстан",street:"ул.Киевская 77",telephone:"Телефон:",telephone_1:"Телефон",socialNetworks:"Соц. сети:",contactUs:"Свяжитесь с нами",yourName:"Ваше Имя",message:"Сообщение",send:"Отправить",reset:"Сбросить"},en:{catalogue:"Products",about:"About us",blog:"Blog",contacts:"Contacts",entrance:"Entrance",registeration:"Registration",loginWithGoogle:"Login with Google",enterEmail:"Enter Email",enterPassword:"Enter password",password:"Password",confirmThePassword:"Confirm the password",username:"Username",minimumNumberOfSymbols:"Minimum number of symbols",passwordMismatch:"Password mismatch",toComeIn:"To come in",doYouAlreadyHaveAnAccount:"Do you already have an account?",forgotYourPassword:"Forgot your password?",dontHaveAnAccountYet:"Do not have an account yet?",create:"Create",aboutUs:"About Us",aboutUsP1:"We are pleased to welcome you to our family-run production of organic products",aboutUsP2:"Our small family business dates back to 1996, and it all started with the fact that our dad decided to start several bee colonies and began to comprehend the basics of communication with bees, to study their temper and behavior. Initially, we did not have many bees, only 16 families of the Central Russian breed, then, as we deepened in studying beekeeping, we experimented and started other breeds of bees:",aboutUsP3:"in 2000 we started the Carpathian breed of bees, about 15 families, in 2014 we switched to the Karnika breed and increased the number of families is already up to 40, and by 2020 the number of families of this breed has been increased to 235. Since 2022, we have left 110 families of Buckfast and Karnika breeds.",aboutUsP4:"An ecologically clean place, the location of our apiary in the highlands of the Jalal-Abad region provides high product quality, clean mountain air, vast meadows with various herbs, crystal clear mountain water rivers of glacial origin, all this makes our honey unique in composition and quality.",aboutUsP5:"By purchasing our products you ensure the health and longevity of you and your family!",blogP1:"Interesting facts about honey",blogP2:"Honey is a very useful food product. Only bees make real honey. Thanks to the great content nutrients this product has healing properties. The most interesting facts about honey - in this article. In 1985, Peruvian drug dealers released bees into coca fields. Insects collected narcotic honey that was confiscated at the border. To make a liter of honey, bees collect 2.5 liters of nectar. The Spaniards add honey to the artificial nutrition of children suffering from jaundice or blood diseases.",blogP3:"Flower honey",blogP4:"The complexity of flower honey is that it is impossible to bring it to any one characteristic in appearance. The color and smell depends on where and from which plants it was collected. The most common varieties in color are light yellow or orange honey. Also on the market you can find amber shades of honey, golden, dark brown. Slightly less common is honey of a greenish hue. As for the smell, floral aromas definitely prevail here, fruity notes are often heard. There are inclusions of a sweet or spicy aroma. The taste of flower honey is very delicate, delicate, the aftertaste is long. Honey has a pleasant herbal flavor.",feedback:"Feedback",address:"Address:",kyrgyzstan:"Kyrgyzstan",street:"Kievskaya street 77",telephone:"Telephone:",socialNetworks:"Social networks:",contactUs:"Contact us",yourName:"Your name",telephone_1:"Telephone",message:"Message",send:"Send",reset:"Reset"},kyr:{catalogue:"Каталог",about:"Биз жөнүндө",blog:"Блог",contacts:"Байланыштар",entrance:"Кире бериш",registeration:"Каттоо",loginWithGoogle:"Google менен кириңиз",enterEmail:"Электрондук почтаны киргизиңиз",enterPassword:"Сырсөздү киргизиңиз",password:"Купуя сөз",confirmThePassword:"Сырсөздү ырастаңыз",username:"Колдонуучунун аты",minimumNumberOfSymbols:"Символдордун минималдуу саны",passwordMismatch:"Сырсөз дал келбейт",toComeIn:"Кирүү үчүн",doYouAlreadyHaveAnAccount:"Сиздин аккаунтуңуз барбы?",forgotYourPassword:"Сыр сөзүңүздү унуттуңузбу?",dontHaveAnAccountYet:"Азырынча аккаунтуңуз жокпу?",create:"Түзүү",aboutUs:"Биз жөнүндө",aboutUsP1:"Сизди биздин үй-бүлөбүздүн органикалык өндүрүшүндө тосуп алууга кубанычтабыз	буюмдар",aboutUsP2:"Биздин чакан үй-бүлөлүк бизнесибиз 1996-жылдан бери башталган жана анын баары биздин ата бир нече аары колонияларын түзүүнү чечти жана аарылар менен баарлашуунун негиздерин түшүнө баштады, алардын мүнөзүн жана мүнөзүн изилдей баштады. жүрүм-турум. Адегенде бизде аарылар көп болгон эмес, болгону 16 үй-бүлө Борбордук орус породасындагы, андан кийин тереңдеген сайын окуп жатат аарычылык, биз эксперимент жүргүзүп, аарылардын башка породаларын баштадык:",aboutUsP3:"2000-жылы аарылардын Карпат породасын, 15ке жакын үй-бүлөнү, 2014-жылы Карника породасын жана көбөйдү үй-бүлөлөрдүн саны 40ка жетти, ал эми 2020-жылга чейин бул породадагы үй-бүлөлөрдүн саны 235ке чейин көбөйтүлдү. 2022-жылдан бери биз Бакфаст жана Карника породаларынын 110 үй-бүлөсүн калтырдык.",aboutUsP4:"Экологиялык жактан таза жер, биздин бал челектин Жалал-Абад облусунун бийик тоолуу аймагында жайгашканы бийик продукциянын сапаты, таза тоонун абасы, ар кандай чөптөр өскөн кең шалбаалар, тунук тоо суулары дарыялар мөңгүдөн келип чыккан, мунун баары биздин балды курамы жана сапаты боюнча уникалдуу кылат.",aboutUsP5:"Биздин продукцияларды сатып алуу менен сиз өзүңүздүн жана үй-бүлөңүздүн ден соолугун жана узак өмүрүн камсыздайсыз!",blogP1:"Бал жөнүндө кызыктуу фактылар",blogP2:"Бал абдан пайдалуу тамак-аш продуктусу. Чыныгы балды аарылар гана жасайт. Улууга рахмат мазмун бул продукт дарылык касиетке ээ. Бал жөнүндө эң кызыктуу фактылар - жылы бул макала. 1985-жылы Перулук баңгизат сатуучулар аарыларды кока талааларына кое беришкен. Курт-кумурскалар чогултулган чек арадан алынган наркотикалык бал. Бир литр бал алуу үчүн аарылар 2,5 литр шире чогултат. Испаниялыктар сарык же кан оорулары менен ооруган балдардын жасалма тамактануусуна бал кошуп беришет.",blogP3:"Гүл бал",blogP4:"Гүл балынын татаалдыгы, аны сырткы көрүнүшү боюнча кандайдыр бир өзгөчөлүккө алып келүү мүмкүн эмес. Түсү жана жыты анын кайдан жана кайсы өсүмдүктөрдөн чогултулганына жараша болот. түсү көп таралган сорттору ачык сары же кызгылт сары бал болуп саналат. Ошондой эле рынокто бал, алтын, кара күрөң янтарь көлөкөлөрүн таба аласыз. Бир аз таралган жашыл түстөгү бал. Жытка келсек, бул жерде сөзсүз түрдө гүл жыттары басымдуулук кылат, мөмөлүү ноталар көп угулат. таттуу же ачуу жыпар жыттуу кошулмалар бар. Гүлдүн балынын даамы өтө назик, назик, даамы узун. Балдын жагымдуу чөп даамы бар.",feedback:"Кайра Байланыш",address:"Дарек:",kyrgyzstan:"Кыргызстан",street:"Киев көчөсү 77",telephone:"Телефон:",socialNetworks:"Социалдык тармактар:",contactUs:"Биз менен байланыш",yourName:"Сиздин атыңыз",telephone_1:"Телефон",message:"Кабар",send:"Жөнөтүү",reset:"Калыбына келтирүү"}}})});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Xa=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Lf=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],i=t[n++],a=t[n++],c=((r&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Qa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],i=r+1<t.length,a=i?t[r+1]:0,c=r+2<t.length,l=c?t[r+2]:0,f=o>>2,h=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,b=l&63;c||(b=64,i||(p=64)),s.push(n[f],n[h],n[p],n[b])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Lf(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const l=r<t.length?n[t.charAt(r)]:64;++r;const h=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||l==null||h==null)throw Error();const p=o<<2|a>>4;if(s.push(p),l!==64){const b=a<<4&240|l>>2;if(s.push(b),h!==64){const T=l<<6&192|h;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Uf=function(t){const e=Xa(t);return Qa.encodeByteArray(e,!0)},Za=function(t){return Uf(t).replace(/\./g,"")},ec=function(t){try{return Qa.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ff(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Bf=()=>Ff().__FIREBASE_DEFAULTS__,jf=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$f=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ec(t[1]);return e&&JSON.parse(e)},io=()=>{try{return Bf()||jf()||$f()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hf=t=>{var e,n;return(n=(e=io())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vf=()=>{var t;return(t=io())===null||t===void 0?void 0:t.config},tc=t=>{var e;return(e=io())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function Kf(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gf(){const t=Ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jf(){try{return typeof indexedDB=="object"}catch{return!1}}function Yf(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="FirebaseError";class At extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Xf,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qn.prototype.create)}}class Qn{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?Qf(o,s):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new At(r,a,s)}}function Qf(t,e){return t.replace(Zf,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Zf=/\{\$([^}]+)}/g;function ed(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ss(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],i=e[r];if(ii(o)&&ii(i)){if(!Ss(o,i))return!1}else if(o!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function ii(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function td(t,e){const n=new nd(t,e);return n.subscribe.bind(n)}class nd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");sd(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=or),r.error===void 0&&(r.error=or),r.complete===void 0&&(r.complete=or);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function or(){}/**
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
 */function xn(t){return t&&t._delegate?t._delegate:t}class pn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Lt="[DEFAULT]";/**
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
 */class rd{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zf;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(id(e))try{this.getOrInitializeService({instanceIdentifier:Lt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=Lt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Lt){return this.instances.has(e)}getOptions(e=Lt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);s===a&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:od(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Lt){return this.component?this.component.multipleInstances?e:Lt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function od(t){return t===Lt?void 0:t}function id(t){return t.instantiationMode==="EAGER"}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const cd={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ld=re.INFO,ud={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},fd=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=ud[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nc{constructor(e){this.name=e,this._logLevel=ld,this._logHandler=fd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cd[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const dd=(t,e)=>e.some(n=>t instanceof n);let ai,ci;function hd(){return ai||(ai=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pd(){return ci||(ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sc=new WeakMap,kr=new WeakMap,rc=new WeakMap,ir=new WeakMap,ao=new WeakMap;function gd(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(Tt(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&sc.set(n,t)}).catch(()=>{}),ao.set(e,t),e}function md(t){if(kr.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});kr.set(t,e)}let Cr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return kr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||rc.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function _d(t){Cr=t(Cr)}function bd(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ar(this),e,...n);return rc.set(s,e.sort?e.sort():[e]),Tt(s)}:pd().includes(t)?function(...e){return t.apply(ar(this),e),Tt(sc.get(this))}:function(...e){return Tt(t.apply(ar(this),e))}}function yd(t){return typeof t=="function"?bd(t):(t instanceof IDBTransaction&&md(t),dd(t,hd())?new Proxy(t,Cr):t)}function Tt(t){if(t instanceof IDBRequest)return gd(t);if(ir.has(t))return ir.get(t);const e=yd(t);return e!==t&&(ir.set(t,e),ao.set(e,t)),e}const ar=t=>ao.get(t);function vd(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),a=Tt(i);return s&&i.addEventListener("upgradeneeded",c=>{s(Tt(i.result),c.oldVersion,c.newVersion,Tt(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const wd=["get","getKey","getAll","getAllKeys","count"],Ed=["put","add","delete","clear"],cr=new Map;function li(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cr.get(e))return cr.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Ed.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||wd.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,r?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),r&&c.done]))[0]};return cr.set(e,o),o}_d(t=>({...t,get:(e,n,s)=>li(e,n)||t.get(e,n,s),has:(e,n)=>!!li(e,n)||t.has(e,n)}));/**
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
 */class Id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xd(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function xd(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ar="@firebase/app",ui="0.9.3";/**
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
 */const qt=new nc("@firebase/app"),Td="@firebase/app-compat",Pd="@firebase/analytics-compat",Sd="@firebase/analytics",Rd="@firebase/app-check-compat",kd="@firebase/app-check",Cd="@firebase/auth",Ad="@firebase/auth-compat",Od="@firebase/database",Nd="@firebase/database-compat",Md="@firebase/functions",Dd="@firebase/functions-compat",Ld="@firebase/installations",Ud="@firebase/installations-compat",Fd="@firebase/messaging",Bd="@firebase/messaging-compat",jd="@firebase/performance",$d="@firebase/performance-compat",Hd="@firebase/remote-config",Vd="@firebase/remote-config-compat",zd="@firebase/storage",Wd="@firebase/storage-compat",Kd="@firebase/firestore",qd="@firebase/firestore-compat",Gd="firebase",Jd="9.17.1";/**
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
 */const Or="[DEFAULT]",Yd={[Ar]:"fire-core",[Td]:"fire-core-compat",[Sd]:"fire-analytics",[Pd]:"fire-analytics-compat",[kd]:"fire-app-check",[Rd]:"fire-app-check-compat",[Cd]:"fire-auth",[Ad]:"fire-auth-compat",[Od]:"fire-rtdb",[Nd]:"fire-rtdb-compat",[Md]:"fire-fn",[Dd]:"fire-fn-compat",[Ld]:"fire-iid",[Ud]:"fire-iid-compat",[Fd]:"fire-fcm",[Bd]:"fire-fcm-compat",[jd]:"fire-perf",[$d]:"fire-perf-compat",[Hd]:"fire-rc",[Vd]:"fire-rc-compat",[zd]:"fire-gcs",[Wd]:"fire-gcs-compat",[Kd]:"fire-fst",[qd]:"fire-fst-compat","fire-js":"fire-js",[Gd]:"fire-js-all"};/**
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
 */const Rs=new Map,Nr=new Map;function Xd(t,e){try{t.container.addComponent(e)}catch(n){qt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(Nr.has(e))return qt.debug(`There were multiple attempts to register component ${e}.`),!1;Nr.set(e,t);for(const n of Rs.values())Xd(n,t);return!0}function oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Qd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pt=new Qn("app","Firebase",Qd);/**
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
 */class Zd{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new pn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ks=Jd;function ic(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Or,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Pt.create("bad-app-name",{appName:String(r)});if(n||(n=Vf()),!n)throw Pt.create("no-options");const o=Rs.get(r);if(o){if(Ss(n,o.options)&&Ss(s,o.config))return o;throw Pt.create("duplicate-app",{appName:r})}const i=new ad(r);for(const c of Nr.values())i.addComponent(c);const a=new Zd(n,s,i);return Rs.set(r,a),a}function eh(t=Or){const e=Rs.get(t);if(!e&&t===Or)return ic();if(!e)throw Pt.create("no-app",{appName:t});return e}function on(t,e,n){var s;let r=(s=Yd[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qt.warn(a.join(" "));return}Kn(new pn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const th="firebase-heartbeat-database",nh=1,qn="firebase-heartbeat-store";let lr=null;function ac(){return lr||(lr=vd(th,nh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Pt.create("idb-open",{originalErrorMessage:t.message})})),lr}async function sh(t){try{return(await ac()).transaction(qn).objectStore(qn).get(cc(t))}catch(e){if(e instanceof At)qt.warn(e.message);else{const n=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qt.warn(n.message)}}}async function fi(t,e){try{const s=(await ac()).transaction(qn,"readwrite");return await s.objectStore(qn).put(e,cc(t)),s.done}catch(n){if(n instanceof At)qt.warn(n.message);else{const s=Pt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qt.warn(s.message)}}}function cc(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rh=1024,oh=30*24*60*60*1e3;class ih{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ch(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=di();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const o=new Date(r.date).valueOf();return Date.now()-o<=oh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=di(),{heartbeatsToSend:n,unsentEntries:s}=ah(this._heartbeatsCache.heartbeats),r=Za(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function di(){return new Date().toISOString().substring(0,10)}function ah(t,e=rh){const n=[];let s=t.slice();for(const r of t){const o=n.find(i=>i.agent===r.agent);if(o){if(o.dates.push(r.date),hi(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),hi(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class ch{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jf()?Yf().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return fi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function hi(t){return Za(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function lh(t){Kn(new pn("platform-logger",e=>new Id(e),"PRIVATE")),Kn(new pn("heartbeat",e=>new ih(e),"PRIVATE")),on(Ar,ui,t),on(Ar,ui,"esm2017"),on("fire-js","")}lh("");var uh="firebase",fh="9.17.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(uh,fh,"app");function co(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function lc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dh=lc,uc=new Qn("auth","Firebase",lc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pi=new nc("@firebase/auth");function _s(t,...e){pi.logLevel<=re.ERROR&&pi.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,...e){throw lo(t,...e)}function Xe(t,...e){return lo(t,...e)}function fc(t,e,n){const s=Object.assign(Object.assign({},dh()),{[e]:n});return new Qn("auth","Firebase",s).create(e,{appName:t.name})}function hh(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&et(t,"argument-error"),fc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function lo(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return uc.create(t,...e)}function B(t,e,...n){if(!t)throw lo(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _s(e),new Error(e)}function ct(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=new Map;function it(t){ct(t instanceof Function,"Expected a class definition");let e=gi.get(t);return e?(ct(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,gi.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(t,e){const n=oc(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),o=n.getOptions();if(Ss(o,e??{}))return r;et(r,"already-initialized")}return n.initialize({options:e})}function gh(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(it);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function mh(){return mi()==="http:"||mi()==="https:"}function mi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class es{constructor(e,n){this.shortDelay=e,this.longDelay=n,ct(n>e,"Short delay should be less than long delay!"),this.isMobile=Wf()||qf()}get(){return _h()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t,e){ct(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh=new es(3e4,6e4);function wh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qs(t,e,n,s,r={}){return hc(t,r,async()=>{let o={},i={};s&&(e==="GET"?i=s:o={body:JSON.stringify(s)});const a=Zn(Object.assign({key:t.config.apiKey},i)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),dc.fetch()(pc(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},o))})}async function hc(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},yh),e);try{const r=new Ih(t),o=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const i=await o.json();if("needConfirmation"in i)throw fs(t,"account-exists-with-different-credential",i);if(o.ok&&!("errorMessage"in i))return i;{const a=o.ok?i.errorMessage:i.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fs(t,"credential-already-in-use",i);if(c==="EMAIL_EXISTS")throw fs(t,"email-already-in-use",i);if(c==="USER_DISABLED")throw fs(t,"user-disabled",i);const f=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fc(t,f,l);et(t,f)}}catch(r){if(r instanceof At)throw r;et(t,"network-request-failed")}}async function Eh(t,e,n,s,r={}){const o=await qs(t,e,n,s,r);return"mfaPendingCredential"in o&&et(t,"multi-factor-auth-required",{_serverResponse:o}),o}function pc(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?uo(t.config,r):`${t.config.apiScheme}://${r}`}class Ih{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Xe(this.auth,"network-request-failed")),vh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fs(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Xe(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Dn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ph(t,e=!1){const n=xn(t),s=await n.getIdToken(e),r=fo(s);B(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const o=typeof r.firebase=="object"?r.firebase:void 0,i=o==null?void 0:o.sign_in_provider;return{claims:r,token:s,authTime:Dn(ur(r.auth_time)),issuedAtTime:Dn(ur(r.iat)),expirationTime:Dn(ur(r.exp)),signInProvider:i||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ur(t){return Number(t)*1e3}function fo(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _s("JWT malformed, contained fewer than 3 sections"),null;try{const r=ec(n);return r?JSON.parse(r):(_s("Failed to decode base64 JWT payload"),null)}catch(r){return _s("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Sh(t){const e=fo(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof At&&Rh(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Rh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function ks(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Gn(t,Th(n,{idToken:s}));B(r==null?void 0:r.users.length,n,"internal-error");const o=r.users[0];t._notifyReloadListener(o);const i=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Oh(o.providerUserInfo):[],a=Ah(t.providerData,i),c=t.isAnonymous,l=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new gc(o.createdAt,o.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Ch(t){const e=xn(t);await ks(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ah(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Oh(t){return t.map(e=>{var{providerId:n}=e,s=co(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nh(t,e){const n=await hc(t,{},async()=>{const s=Zn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:o}=t.config,i=pc(t,r,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",dc.fetch()(i,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:o}=await Nh(e,n);this.updateTokensAndExpiration(s,r,Number(o))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:o}=n,i=new Jn;return s&&(B(typeof s=="string","internal-error",{appName:e}),i.refreshToken=s),r&&(B(typeof r=="string","internal-error",{appName:e}),i.accessToken=r),o&&(B(typeof o=="number","internal-error",{appName:e}),i.expirationTime=o),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,o=co(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new gc(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Ph(this,e)}reload(){return Ch(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ks(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gn(this,xh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,o,i,a,c,l,f;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,b=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,T=(i=n.photoURL)!==null&&i!==void 0?i:void 0,C=(a=n.tenantId)!==null&&a!==void 0?a:void 0,U=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,k=(l=n.createdAt)!==null&&l!==void 0?l:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:O,emailVerified:q,isAnonymous:X,providerData:ae,stsTokenManager:W}=n;B(O&&W,e,"internal-error");const K=Jn.fromJSON(this.name,W);B(typeof O=="string",e,"internal-error"),dt(h,e.name),dt(p,e.name),B(typeof q=="boolean",e,"internal-error"),B(typeof X=="boolean",e,"internal-error"),dt(b,e.name),dt(T,e.name),dt(C,e.name),dt(U,e.name),dt(k,e.name),dt(F,e.name);const he=new zt({uid:O,auth:e,email:p,emailVerified:q,displayName:h,isAnonymous:X,photoURL:T,phoneNumber:b,tenantId:C,stsTokenManager:K,createdAt:k,lastLoginAt:F});return ae&&Array.isArray(ae)&&(he.providerData=ae.map(pe=>Object.assign({},pe))),U&&(he._redirectEventId=U),he}static async _fromIdTokenResponse(e,n,s=!1){const r=new Jn;r.updateFromServerResponse(n);const o=new zt({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ks(o),o}}/**
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
 */class mc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}mc.type="NONE";const _i=mc;/**
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
 */function bs(t,e,n){return`firebase:${t}:${e}:${n}`}class an{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:o}=this.auth;this.fullUserKey=bs(this.userKey,r.apiKey,o),this.fullPersistenceKey=bs("persistence",r.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new an(it(_i),e,s);const r=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let o=r[0]||it(_i);const i=bs(s,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(i);if(f){const h=zt._fromJSON(e,f);l!==o&&(a=h),o=l;break}}catch{}const c=r.filter(l=>l._shouldAllowMigration);return!o._shouldAllowMigration||!c.length?new an(o,e,s):(o=c[0],a&&await o._set(i,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==o)try{await l._remove(i)}catch{}})),new an(o,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_c(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(wc(e))return"Blackberry";if(Ec(e))return"Webos";if(ho(e))return"Safari";if((e.includes("chrome/")||bc(e))&&!e.includes("edge/"))return"Chrome";if(vc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _c(t=Ee()){return/firefox\//i.test(t)}function ho(t=Ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bc(t=Ee()){return/crios\//i.test(t)}function yc(t=Ee()){return/iemobile/i.test(t)}function vc(t=Ee()){return/android/i.test(t)}function wc(t=Ee()){return/blackberry/i.test(t)}function Ec(t=Ee()){return/webos/i.test(t)}function Gs(t=Ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Mh(t=Ee()){var e;return Gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Dh(){return Gf()&&document.documentMode===10}function Ic(t=Ee()){return Gs(t)||vc(t)||Ec(t)||wc(t)||/windows phone/i.test(t)||yc(t)}function Lh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(t,e=[]){let n;switch(t){case"Browser":n=bi(Ee());break;case"Worker":n=`${bi(Ee())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${s}`}/**
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
 */class Uh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=o=>new Promise((i,a)=>{try{const c=e(o);i(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,s){this.app=e,this.heartbeatServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yi(this),this.idTokenSubscription=new yi(this),this.beforeStateQueue=new Uh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uc,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=it(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await an.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!i||i===a)&&(c!=null&&c.user)&&(r=c.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(i){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ks(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?xn(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(it(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qn("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&it(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await an.create(this,[it(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),i=this._isInitialized?Promise.resolve():this._initializationPromise;return B(i,this,"internal-error"),i.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,s,r):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(n["X-Firebase-Client"]=s),n}}function Js(t){return xn(t)}class yi{constructor(e){this.auth=e,this.observer=null,this.addObserver=td(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Bh(t,e,n){const s=Js(t);B(s._canInitEmulator,s,"emulator-config-failed"),B(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),o=Tc(e),{host:i,port:a}=jh(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${o}//${i}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:i,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||$h()}function Tc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function jh(t){const e=Tc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const o=r[1];return{host:o,port:vi(s.substr(o.length+1))}}else{const[o,i]=s.split(":");return{host:o,port:vi(i)}}}function vi(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $h(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e){return Eh(t,"POST","/v1/accounts:signInWithIdp",wh(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hh="http://localhost";class Gt extends Pc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):et("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,o=co(n,["providerId","signInMethod"]);if(!s||!r)return null;const i=new Gt(s,r);return i.idToken=o.idToken||void 0,i.accessToken=o.accessToken||void 0,i.secret=o.secret,i.nonce=o.nonce,i.pendingToken=o.pendingToken||null,i}_getIdTokenResponse(e){const n=this.buildRequest();return cn(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,cn(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,cn(e,n)}buildRequest(){const e={requestUri:Hh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ts extends po{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends ts{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gt._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return xe.credential(n,s)}catch{return null}}}xe.GOOGLE_SIGN_IN_METHOD="google.com";xe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends ts{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:yt.PROVIDER_ID,signInMethod:yt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yt.credentialFromTaggedObject(e)}static credentialFromError(e){return yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yt.credential(e.oauthAccessToken)}catch{return null}}}yt.GITHUB_SIGN_IN_METHOD="github.com";yt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ts{constructor(){super("twitter.com")}static credential(e,n){return Gt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return vt.credential(n,s)}catch{return null}}}vt.TWITTER_SIGN_IN_METHOD="twitter.com";vt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const o=await zt._fromIdTokenResponse(e,s,r),i=wi(s);return new gn({user:o,providerId:i,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=wi(s);return new gn({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function wi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends At{constructor(e,n,s,r){var o;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Cs.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Cs(e,n,s,r)}}function Sc(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Cs._fromErrorAndOperation(t,o,e,s):o})}async function Vh(t,e,n=!1){const s=await Gn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return gn._forOperation(t,"link",s)}/**
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
 */async function zh(t,e,n=!1){const{auth:s}=t,r="reauthenticate";try{const o=await Gn(t,Sc(s,r,e,t),n);B(o.idToken,s,"internal-error");const i=fo(o.idToken);B(i,s,"internal-error");const{sub:a}=i;return B(t.uid===a,s,"user-mismatch"),gn._forOperation(t,r,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&et(s,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,e,n=!1){const s="signIn",r=await Sc(t,s,e),o=await gn._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(o.user),o}function Kh(t,e,n,s){return xn(t).onIdTokenChanged(e,n,s)}function qh(t,e,n){return xn(t).beforeAuthStateChanged(e,n)}const As="__sak";/**
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
 */class Rc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(As,"1"),this.storage.removeItem(As),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(){const t=Ee();return ho(t)||Gs(t)}const Jh=1e3,Yh=10;class kc extends Rc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Gh()&&Lh(),this.fallbackToPolling=Ic(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((i,a,c)=>{this.notifyListeners(i,c)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(s);if(e.newValue!==i)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const r=()=>{const i=this.storage.getItem(s);!n&&this.localCache[s]===i||this.notifyListeners(s,i)},o=this.storage.getItem(s);Dh()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Yh):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Jh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}kc.type="LOCAL";const Xh=kc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc extends Rc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Cc.type="SESSION";const Ac=Cc;/**
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
 */class Ys{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Ys(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:o}=n.data,i=this.handlersMap[r];if(!(i!=null&&i.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(i).map(async l=>l(n.origin,o)),c=await Qh(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ys.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Zh{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let o,i;return new Promise((a,c)=>{const l=go("",20);r.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},s);i={messageChannel:r,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),o=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(p.data.response);break;default:clearTimeout(f),clearTimeout(o),c(new Error("invalid_response"));break}}},this.handlers.add(i),r.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[r.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function ep(t){Qe().location.href=t}/**
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
 */function Oc(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function tp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function np(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sp(){return Oc()?self:null}/**
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
 */const Nc="firebaseLocalStorageDb",rp=1,Os="firebaseLocalStorage",Mc="fbase_key";class ns{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xs(t,e){return t.transaction([Os],e?"readwrite":"readonly").objectStore(Os)}function op(){const t=indexedDB.deleteDatabase(Nc);return new ns(t).toPromise()}function Dr(){const t=indexedDB.open(Nc,rp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Os,{keyPath:Mc})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Os)?e(s):(s.close(),await op(),e(await Dr()))})})}async function Ei(t,e,n){const s=Xs(t,!0).put({[Mc]:e,value:n});return new ns(s).toPromise()}async function ip(t,e){const n=Xs(t,!1).get(e),s=await new ns(n).toPromise();return s===void 0?null:s.value}function Ii(t,e){const n=Xs(t,!0).delete(e);return new ns(n).toPromise()}const ap=800,cp=3;class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Dr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>cp)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Oc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ys._getInstance(sp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await tp(),!this.activeServiceWorker)return;this.sender=new Zh(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||np()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dr();return await Ei(e,As,"1"),await Ii(e,As),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ei(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>ip(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ii(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const o=Xs(r,!1).getAll();return new ns(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:o}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(o)&&(this.notifyListeners(r,o),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ap)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dc.type="LOCAL";const lp=Dc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const o=Xe("internal-error");o.customData=r,n(o)},s.type="text/javascript",s.charset="UTF-8",up().appendChild(s)})}function dp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new es(3e4,6e4);/**
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
 */function Lc(t,e){return e?it(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class mo extends Pc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return cn(e,this._buildIdpRequest())}_linkToIdToken(e,n){return cn(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return cn(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hp(t){return Wh(t.auth,new mo(t),t.bypassAuthState)}function pp(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),zh(n,new mo(t),t.bypassAuthState)}async function gp(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),Vh(n,new mo(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(e,n,s,r,o=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:o,error:i,type:a}=e;if(i){this.reject(i);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:o||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hp;case"linkViaPopup":case"linkViaRedirect":return gp;case"reauthViaPopup":case"reauthViaRedirect":return pp;default:et(this.auth,"internal-error")}}resolve(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ct(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp=new es(2e3,1e4);async function Fc(t,e,n){const s=Js(t);hh(t,e,po);const r=Lc(s,n);return new $t(s,"signInViaPopup",e,r).executeNotNull()}class $t extends Uc{constructor(e,n,s,r,o){super(e,n,r,o),this.provider=s,this.authWindow=null,this.pollId=null,$t.currentPopupAction&&$t.currentPopupAction.cancel(),$t.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){ct(this.filter.length===1,"Popup operations only handle one event");const e=go();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$t.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,mp.get())};e()}}$t.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p="pendingRedirect",ys=new Map;class bp extends Uc{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=ys.get(this.auth._key());if(!e){try{const s=await yp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}ys.set(this.auth._key(),e)}return this.bypassAuthState||ys.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yp(t,e){const n=Ep(e),s=wp(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function vp(t,e){ys.set(t._key(),e)}function wp(t){return it(t._redirectPersistence)}function Ep(t){return bs(_p,t.config.apiKey,t.name)}async function Ip(t,e,n=!1){const s=Js(t),r=Lc(s,e),i=await new bp(s,r,n).execute();return i&&!n&&(delete i.user._redirectEventId,await s._persistUserIfCurrent(i.user),await s._setRedirectUser(null,e)),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=10*60*1e3;class Tp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Pp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Bc(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xp&&this.cachedEventUids.clear(),this.cachedEventUids.has(xi(e))}saveEventToCache(e){this.cachedEventUids.add(xi(e)),this.lastProcessedEventTime=Date.now()}}function xi(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Pp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(t,e={}){return qs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kp=/^https?/;async function Cp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Sp(t);for(const n of e)try{if(Ap(n))return}catch{}et(t,"unauthorized-domain")}function Ap(t){const e=Mr(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return i.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===s}if(!kp.test(n))return!1;if(Rp.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const Op=new es(3e4,6e4);function Ti(){const t=Qe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Np(t){return new Promise((e,n)=>{var s,r,o;function i(){Ti(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ti(),n(Xe(t,"network-request-failed"))},timeout:Op.get()})}if(!((r=(s=Qe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((o=Qe().gapi)===null||o===void 0)&&o.load)i();else{const a=dp("iframefcb");return Qe()[a]=()=>{gapi.load?i():n(Xe(t,"network-request-failed"))},fp(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw vs=null,e})}let vs=null;function Mp(t){return vs=vs||Np(t),vs}/**
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
 */const Dp=new es(5e3,15e3),Lp="__/auth/iframe",Up="emulator/auth/iframe",Fp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jp(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?uo(e,Up):`https://${t.config.authDomain}/${Lp}`,s={apiKey:e.apiKey,appName:t.name,v:Ks},r=Bp.get(t.config.apiHost);r&&(s.eid=r);const o=t._getFrameworks();return o.length&&(s.fw=o.join(",")),`${n}?${Zn(s).slice(1)}`}async function $p(t){const e=await Mp(t),n=Qe().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:jp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fp,dontclear:!0},s=>new Promise(async(r,o)=>{await s.restyle({setHideOnLeave:!1});const i=Xe(t,"network-request-failed"),a=Qe().setTimeout(()=>{o(i)},Dp.get());function c(){Qe().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{o(i)})}))}/**
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
 */const Hp={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vp=500,zp=600,Wp="_blank",Kp="http://localhost";class Pi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qp(t,e,n,s=Vp,r=zp){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),i=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hp),{width:s.toString(),height:r.toString(),top:o,left:i}),l=Ee().toLowerCase();n&&(a=bc(l)?Wp:n),_c(l)&&(e=e||Kp,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[b,T])=>`${p}${b}=${T},`,"");if(Mh(l)&&a!=="_self")return Gp(e||"",a),new Pi(null);const h=window.open(e||"",a,f);B(h,t,"popup-blocked");try{h.focus()}catch{}return new Pi(h)}function Gp(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const Jp="__/auth/handler",Yp="emulator/auth/handler";function Si(t,e,n,s,r,o){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const i={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ks,eventId:r};if(e instanceof po){e.setDefaultLanguage(t.languageCode),i.providerId=e.providerId||"",ed(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(o||{}))i[c]=l}if(e instanceof ts){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(i.scopes=c.join(","))}t.tenantId&&(i.tid=t.tenantId);const a=i;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Xp(t)}?${Zn(a).slice(1)}`}function Xp({config:t}){return t.emulator?uo(t,Yp):`https://${t.authDomain}/${Jp}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr="webStorageSupport";class Qp{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ac,this._completeRedirectFn=Ip,this._overrideRedirectResult=vp}async _openPopup(e,n,s,r){var o;ct((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const i=Si(e,n,s,Mr(),r);return qp(e,i,go())}async _openRedirect(e,n,s,r){return await this._originValidation(e),ep(Si(e,n,s,Mr(),r)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:o}=this.eventManagers[n];return r?Promise.resolve(r):(ct(o,"If manager is not set, promise should be"),o)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await $p(e),s=new Tp(e);return n.register("authEvent",r=>(B(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fr,{type:fr},r=>{var o;const i=(o=r==null?void 0:r[0])===null||o===void 0?void 0:o[fr];i!==void 0&&n(!!i),et(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ic()||ho()||Gs()}}const Zp=Qp;var Ri="@firebase/auth",ki="0.21.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ng(t){Kn(new pn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:o,authDomain:i}=s.options;return((a,c)=>{B(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),B(!(i!=null&&i.includes(":")),"argument-error",{appName:a.name});const l={apiKey:o,authDomain:i,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xc(t)},f=new Fh(a,c,l);return gh(f,n),f})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Kn(new pn("auth-internal",e=>{const n=Js(e.getProvider("auth").getImmediate());return(s=>new eg(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Ri,ki,tg(t)),on(Ri,ki,"esm2017")}/**
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
 */const sg=5*60,rg=tc("authIdTokenMaxAge")||sg;let Ci=null;const og=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>rg)return;const r=n==null?void 0:n.token;Ci!==r&&(Ci=r,await fetch(t,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function _o(t=eh()){const e=oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ph(t,{popupRedirectResolver:Zp,persistence:[lp,Xh,Ac]}),s=tc("authTokenSyncURL");if(s){const o=og(s);qh(n,o,()=>o(n.currentUser)),Kh(n,i=>o(i))}const r=Hf("auth");return r&&Bh(n,`http://${r}`),n}ng("Browser");const bo="/assets/Telegram-c178456d.svg",yo="/assets/WhatsApp-64705ce5.svg",vo="/assets/Instagram-d32ffc78.svg",tt=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},ig={props:{buttonName:String},data:()=>({contact:!1,store:Ct()}),methods:{showContacts(){this.contact=!0},closeModal(){this.contact=!1}}},ag={class:"grid overflow-scroll [&_*]:font-roboto"},cg={class:"grid grid-cols-[max-content_auto_max-content] mb-[20px] text-[40px] max-[700px]:grid-cols-1"},lg={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},ug=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),fg={class:"grid grid-cols-2"},dg={class:"text-3xl mb-[5px] font-semibold font-roboto"},hg={class:"text-2xl font-roboto"},pg={class:"text-2xl mb-[20px] font-roboto"},gg={class:"text-3xl mb-[5px] font-roboto font-semibold"},mg=m("p",{class:"text-2xl mb-[20px] font-roboto"},"+996779454233",-1),_g={class:"grid auto-rows-min gap-[10px] [&_a]:mr-[10px]"},bg={class:"text-3xl font-roboto font-semibold"},yg=ro('<div class="flex items-center"><a href="https://t.me/+996779454233" target="_blank"><img class="inline" src="'+bo+'" alt=""></a><p class="text-2xl font-roboto">+996779454233</p></div><div class="flex items-center"><a href="https://wa.me/79146089174" target="_blank"><img class="inline" src="'+yo+'" alt=""></a><p class="text-2xl">+79146089174</p></div><div class="flex items-center"><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img class="inline" src="'+vo+'" alt=""></a><p class="text-2xl font-roboto">crafthoney.kg</p></div>',3),vg=m("div",null,[m("p",{class:"text-3xl mb-[5px] font-roboto font-semibold"},"E-mail:"),m("p",{class:"text-2xl font-roboto"},"crafthoneykg@gmail.com")],-1);function wg(t,e,n,s,r,o){return we(),Ue("div",ag,[m("div",cg,[m("span",lg,V(t.store.langProp[t.store.lang].contacts),1),ug,m("button",{onClick:e[0]||(e[0]=i=>t.store.comp="Feedback"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},V(t.store.langProp[t.store.lang].feedback),1)]),m("div",fg,[m("div",null,[m("p",dg,V(t.store.langProp[t.store.lang].address),1),m("p",hg,"770033, "+V(t.store.langProp[t.store.lang].kyrgyzstan),1),m("p",pg,V(t.store.langProp[t.store.lang].street),1)]),m("div",null,[m("p",gg,V(t.store.langProp[t.store.lang].telephone),1),mg]),m("div",_g,[m("p",bg,V(t.store.langProp[t.store.lang].socialNetworks),1),yg]),vg])])}const jc=tt(ig,[["render",wg]]),Eg="/assets/drawing-9a7198cf.svg",Ig="/assets/CraftHoney-0d412893.svg",xg="/assets/menu-694c5a76.svg",Tg="/assets/account_circle-229cba33.svg",Pg="/assets/shopping_cart-809c2612.svg",Sg="/assets/Register_1-5c661edd.svg",Rg="/assets/Enter_1-7f28cdb9.svg",kg={data(){return{burgerMenu:!1,store:Ct()}},components:{Contacts:jc}},Cg={class:"bg-white flex justify-between my-[10px] max-[800px]:grid-cols-1"},Ag={class:"grid grid-flow-col gap-[100px] items-center max-[1300px]:gap-[40px] max-[400px]:grid-cols-[54%_auto]"},Og=m("img",{class:"self-center w-[60px] inline",src:Eg},null,-1),Ng=m("img",{class:"ml-[10px] self-center w-[120px] inline",src:Ig},null,-1),Mg={key:0,class:"text-xl [&>a]:mr-[30px] max-[1050px]:hidden"},Dg={class:"grid min-[1051px]:hidden"},Lg={class:"flex items-center justify-end max-[1050px]:hidden"},Ug={class:"flex items-center mr-[100px] max-[1300px]:mr-[40px]"},Fg=m("img",{class:"mr-[10px] w-[24px]",src:Tg},null,-1),Bg={class:"mr-[100px] max-[1300px]:mr-[40px]"},jg=m("img",{class:"w-[22px] max-[800px]:hidden",src:Pg,alt:""},null,-1),$g=ro('<div class="grid grid-flow-col gap-[10px]"><a href="https://wa.me/79146089174" target="_blank"><img src="'+yo+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+bo+'" alt=""></a><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+vo+'" alt=""></a></div>',1),Hg={class:""},Vg={class:"flex flex-col justify-center [&>*]:px-[10px]"},zg=m("strong",null,"X",-1),Wg=[zg],Kg={class:"flex flex-col items-center border-b-[1px] border-[#BCB9B9]"},qg=m("img",{class:"w-[24px] h-24[px] mr-[10px]",src:Sg,alt:""},null,-1),Gg=m("img",{class:"w-[24px] h-[24px] mr-[10px]",src:Rg,alt:""},null,-1),Jg=ro('<div class="my-[20px] px-[10px]"><div class="grid grid-cols-2 gap-[80px]"><div class="flex items-center"><p class="font-inter text-[16px] text-black">+996779454233</p></div><div class="flex justify-around items-center"><a href="https://wa.me/79146089174" target="_blank"><img src="'+yo+'" alt=""></a><a href="https://t.me/+996779454233" target="_blank"><img src="'+bo+'" alt=""></a></div></div><p class="my-[10px]">Адрес: 770033,Кыргызстан <br>ул.Киевская,77</p><a href="https://www.instagram.com/crafthoney.kg" target="_blank"><img src="'+vo+'" alt=""></a></div>',1);function Yg(t,e,n,s,r,o){const i=Kt("router-link");return we(),Ue("header",Cg,[m("div",Ag,[m("div",null,[Q(i,{class:"flex max-w-fit",to:"/"},{default:ke(()=>[Og,Ng]),_:1})]),t.$route.name!="Home"?(we(),Ue("div",Mg,[Q(i,{to:"/Products"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),Q(i,{to:"/about"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].about),1)]),_:1}),Q(i,{to:"/Blog"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=a=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white"))},V(r.store.langProp[r.store.lang].contacts),1)])):Ps("",!0)]),m("div",Dg,[m("img",{onClick:e[1]||(e[1]=a=>r.burgerMenu=!0),class:"justify-self-center self-center hover:cursor-pointer",src:xg})]),m("div",Lg,[m("div",Ug,[Fg,m("button",{class:"text-xl text-center",onClick:e[2]||(e[2]=a=>(r.store.modal=!0,r.store.comp="Login",r.store.bg="bg-bee"))},V(r.store.langProp[r.store.lang].entrance),1)]),m("div",Bg,[Q(i,{to:"/Checkout"},{default:ke(()=>[jg]),_:1})]),$g]),m("div",{class:bn(["right-[0px] top-0 overflow-hidden transition-all duration-500 ease-in-out z-50 absolute h-screen bg-[#DAE2E2]",r.burgerMenu?"w-[330px]":"w-[0px]"])},[m("div",Hg,[m("div",Vg,[m("button",{onClick:e[3]||(e[3]=a=>r.burgerMenu=!1),class:"self-end w-fit focus:outline-none mr-2 mt-2 text-[22px] text-right"},Wg),Q(i,{to:"/Products",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:ke(()=>[_e("Каталог")]),_:1}),Q(i,{to:"/about",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:ke(()=>[_e("О нас")]),_:1}),Q(i,{to:"/Blog",class:"flex items-center w-full h-[46px] font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},{default:ke(()=>[_e("Блог")]),_:1}),m("button",{onClick:e[4]||(e[4]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Contacts",r.store.bg="bg-white")),class:"w-full h-[46px] text-left font-inter font-[200] text-[22px] border-b-[1px] border-black text-[#999999]"},"Контакты")]),m("div",Kg,[m("button",{onClick:e[5]||(e[5]=a=>(r.store.bg="bg-bee",r.store.modal=!0,r.burgerMenu=!1,r.store.comp="Register")),class:"w-[218px] h-[47px] mt-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[#FFF9F9]"},[qg,_e("Регистрация")]),m("button",{onClick:e[6]||(e[6]=a=>(r.store.modal=!0,r.burgerMenu=!1,r.store.bg="bg-bee",r.store.comp="Login")),class:"border-[2px] border-solid border-black rounded-[8px] w-[218px] h-[47px] mt-[5px] mb-[20px] flex justify-center items-center font-ubuntu font-[400] text-[16px] text-[##000000]"},[Gg,_e("Вход")])]),Jg])],2)])}const Xg=tt(kg,[["render",Yg]]),Qg={props:{buttonName:String},data:()=>({feedback:!1,inputValueName:"",inputValueMail:"",inputValuePhone:"",store:Ct()}),methods:{showFeedback(){this.feedback=!0},closeModal(){this.feedback=!1},cleanForm(){},clearInput(){this.inputValueName="",this.inputValuePhone="",this.inputValueMail=""}}},Zg={class:"grid grid-flow-row gap-[20px] mb-[60px] [&_input]:h-[60px]"},em={class:"grid grid-cols-[max-content_auto_max-content] text-[40px] max-[700px]:grid-cols-1"},tm=m("span",{class:"justify-self-center max-[700px]:hidden"},"|",-1),nm={class:"bg-gray-200 font-bold font-roboto rounded-[10px] px-2 text-black text-center"},sm={class:"text-3xl justify-self-center font-roboto"},rm=["placeholder"],om={class:"grid grid-cols-2 gap-[20px]"},im=["placeholder"],am=m("textarea",{class:"border-solid border-2 rounded-[4px] border-gray-400 h-[139px] px-[10px] py-[10px]",placeholder:"Сообщение",name:"",id:""},null,-1),cm={class:"grid grid-cols-2 gap-[20px] [&>*]:h-[50px]"},lm={class:"bg-[#EAAD02] text-white rounded-[5px]"};function um(t,e,n,s,r,o){return we(),Ue("div",Zg,[m("div",em,[m("button",{onClick:e[0]||(e[0]=i=>t.store.comp="Contacts"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white"},V(t.store.langProp[t.store.lang].contacts),1),tm,m("span",nm,V(t.store.langProp[t.store.lang].feedback),1)]),m("h2",sm,V(t.store.langProp[t.store.lang].contactUs),1),ye(m("input",{"onUpdate:modelValue":e[1]||(e[1]=i=>t.inputValueName=i),class:"border-solid border-2 rounded-[4px] border-gray-400 text-center",type:"text",placeholder:t.store.langProp[t.store.lang].yourName},null,8,rm),[[xt,t.inputValueName]]),m("div",om,[ye(m("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>t.inputValueMail=i),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:"Email"},null,512),[[xt,t.inputValueMail]]),ye(m("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>t.inputValuePhone=i),class:"border-solid border-2 rounded-[4px] border-gray-400 px-[10px]",type:"text",placeholder:t.store.langProp[t.store.lang].telephone_1},null,8,im),[[xt,t.inputValuePhone]])]),am,m("div",cm,[m("button",lm,V(t.store.langProp[t.store.lang].send),1),m("button",{onClick:e[4]||(e[4]=(...i)=>o.clearInput&&o.clearInput(...i)),class:"bg-[#02020233] rounded-[5px]"},V(t.store.langProp[t.store.lang].reset),1)])])}const $c=tt(Qg,[["render",um]]),fm="/assets/call-65c88a38.svg",dm={data(){return{store:Ct()}},components:{Feedback:$c}},hm={class:"bg-white flex justify-center my-[1vh] w-full"},pm={class:"self-center"},gm=m("img",{class:"inline ml-2",src:fm},null,-1);function mm(t,e,n,s,r,o){return we(),Ue("footer",hm,[m("div",pm,[m("button",{onClick:e[0]||(e[0]=i=>(r.store.modal=!0,r.store.comp="Feedback",r.store.bg="bg-gray-200")),class:"underline text-[20px]"},"Обратная связь"),gm])])}const _m=tt(dm,[["render",mm]]),bm="/assets/Vector-9ca58fbf.svg",wo="/assets/visibility_on-0c36d6bb.svg",Eo="/assets/visibility_off-e6686e60.svg",ym={props:{buttonName:String},data(){return{email:"",password:"",store:Ct(),showPassword:!1}},methods:{loginGoogle(){const t=_o(),e=new xe;Fc(t,e).then(n=>{xe.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,xe.credentialFromError(n)})},async login(){let t={method:"POST",header:{"Contetnt-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,returnSecureToken:!0})};const e=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",t);e!=null&&e.ok&&(e.json(),this.store.modal=!1)},eyechange(){this.showPassword=!this.showPassword}}},vm={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},wm={class:"grid auto-rows-min gap-[20px]"},Em={class:"text-[30px] flex justify-center"},Im={class:"bg-gray-200 rounded-[10px] px-2 text-black font-roboto"},xm=m("span",{class:"mx-2"},"|",-1),Tm=m("img",{class:"mr-[8px]",src:bm},null,-1),Pm=["placeholder"],Sm={class:"relative"},Rm=["type","placeholder"],km={src:wo,alt:""},Cm={src:Eo,alt:""},Am=["disabled"],Om={class:"text-center"};function Nm(t,e,n,s,r,o){const i=Kt("router-link");return we(),Ue("div",vm,[m("div",wm,[m("div",Em,[m("span",Im,V(r.store.langProp[r.store.lang].entrance),1),xm,m("button",{onClick:e[0]||(e[0]=a=>r.store.comp="Register"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white font-roboto hover:text-amber-700"},V(r.store.langProp[r.store.lang].registeration),1)]),m("button",{onClick:e[1]||(e[1]=(...a)=>o.loginGoogle&&o.loginGoogle(...a)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[Tm,_e(V(r.store.langProp[r.store.lang].loginWithGoogle),1)]),ye(m("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>r.email=a),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] border-2 rounded-[3px] h-[45px] border-gray-400 font-roboto",type:"email",placeholder:r.store.langProp[r.store.lang].enterEmail},null,8,Pm),[[xt,r.email]]),m("div",Sm,[ye(m("input",{"onUpdate:modelValue":e[3]||(e[3]=a=>r.password=a),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].enterPassword},null,8,Rm),[[Pr,r.password]]),m("button",{onClick:e[4]||(e[4]=(...a)=>o.eyechange&&o.eyechange(...a)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[ye(m("img",km,null,512),[[Bt,r.showPassword]]),ye(m("img",Cm,null,512),[[Bt,!r.showPassword]])])]),Q(i,{to:"/",class:"text-blue-500 px-[10px] flex justify-end hover:text-amber-700 hover:underline underline-offset-4"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].forgotYourPassword),1)]),_:1}),m("button",{onClick:e[5]||(e[5]=(...a)=>o.login&&o.login(...a)),disabled:r.email.length<=2||r.password.length<=1,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},V(r.store.langProp[r.store.lang].toComeIn),9,Am),m("p",Om,[_e(V(r.store.langProp[r.store.lang].dontHaveAnAccountYet),1),m("button",{onClick:e[6]||(e[6]=a=>r.store.comp="Register"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},V(r.store.langProp[r.store.lang].create),1)])])])}const Mm=tt(ym,[["render",Nm]]),Dm="/assets/Vector-9ca58fbf.svg",Lm={data(){return{showModal:!1,name:"",password:"",password2:"",email:"",showPassword:!1,passwordMinLength:!1,MinLength:5,eyepass:"src/assets/visibility_off.svg",store:Ct()}},methods:{loginGoogle(){const t=_o(),e=new xe;Fc(t,e).then(n=>{xe.credentialFromResult(n).accessToken,n.user,this.store.modal=!1}).catch(n=>{n.code,n.message,n.customData.email,xe.credentialFromError(n)})},async register(){let t={method:"POST",header:{"Contetnt-Type":"application/json"},body:JSON.stringify({email:this.email,password:this.password,returnSecureToken:!0})};if(this.password2==this.password){const e=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",t);e!=null&&e.ok&&(e.json(),this.store.comp="Login")}},eyechange(){this.showPassword=!this.showPassword,this.eyepass=="src/assets/visibility_off.svg"?this.eyepass="src/assets/visibility_ON.svg":this.eyepass="src/assets/visibility_off.svg"}}},Um={class:"h-[500px] grid grid-cols-2 [&_*]:font-roboto [&_input]:pl-[8px]"},Fm={class:"grid auto-rows-min gap-[20px]"},Bm={class:"text-[30px] h-[45px] flex justify-center"},jm=m("span",{class:"mx-2"},"|",-1),$m={class:"bg-gray-300 rounded-[10px] px-2 text-black"},Hm=m("img",{class:"mr-[8px]",src:Dm},null,-1),Vm=["placeholder"],zm=["placeholder"],Wm={class:"relative"},Km=["type","placeholder"],qm={src:wo,alt:""},Gm={src:Eo,alt:""},Jm={class:"relative"},Ym=["type","placeholder"],Xm={src:wo,alt:""},Qm={src:Eo,alt:""},Zm={key:0,class:"text-red-500 font-roboto leading-[2px]"},e_=["disabled"],t_={class:"text-center"};function n_(t,e,n,s,r,o){return we(),Ue("div",Um,[m("div",Fm,[m("div",Bm,[m("button",{onClick:e[0]||(e[0]=i=>r.store.comp="Login"),class:"bg-[#EAAD02] rounded-[10px] px-2 text-white hover:text-amber-700"},V(r.store.langProp[r.store.lang].entrance),1),jm,m("span",$m,V(r.store.langProp[r.store.lang].registeration),1)]),m("button",{onClick:e[1]||(e[1]=(...i)=>o.loginGoogle&&o.loginGoogle(...i)),class:"border-2 flex items-center justify-center rounded-[3px] border-none bg-gray-100 text-black h-[45px] hover:text-amber-700"},[Hm,_e(" "+V(r.store.langProp[r.store.lang].loginWithGoogle),1)]),ye(m("input",{"onUpdate:modelValue":e[2]||(e[2]=i=>r.name=i),class:"bg-[url('@/assets/person.svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"text",placeholder:r.store.langProp[r.store.lang].username},null,8,Vm),[[xt,r.name]]),ye(m("input",{"onUpdate:modelValue":e[3]||(e[3]=i=>r.email=i),class:"bg-[url('@/assets/mail(1).svg')] bg-no-repeat bg-[left_16px_top_12px] indent-[40px] px-[8px] font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",type:"email",placeholder:r.store.langProp[r.store.lang].enterEmail},null,8,zm),[[xt,r.email]]),m("div",Wm,[ye(m("input",{"onUpdate:modelValue":e[4]||(e[4]=i=>r.password=i),onFocus:e[5]||(e[5]=i=>r.passwordMinLength=!0),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] px-[8px] w-full font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].password},null,40,Km),[[Pr,r.password]]),m("button",{onClick:e[6]||(e[6]=(...i)=>o.eyechange&&o.eyechange(...i)),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[ye(m("img",qm,null,512),[[Bt,r.showPassword]]),ye(m("img",Gm,null,512),[[Bt,!r.showPassword]])])]),m("div",Jm,[ye(m("input",{"onUpdate:modelValue":e[7]||(e[7]=i=>r.password2=i),class:"bg-[url('@/assets/lock.svg')] bg-no-repeat bg-[left_16px_top_9px] indent-[40px] w-full px-[8px] flex items-center font-roboto border-2 rounded-[3px] h-[45px] border-gray-400",required:"",type:r.showPassword?"text":"password",placeholder:r.store.langProp[r.store.lang].confirmThePassword},null,8,Ym),[[Pr,r.password2]]),m("button",{onClick:e[8]||(e[8]=i=>r.showPassword=!r.showPassword),class:"buttonPass absolute right-[30px] top-0 bottom-0"},[ye(m("img",Xm,null,512),[[Bt,r.showPassword]]),ye(m("img",Qm,null,512),[[Bt,!r.showPassword]])])]),r.password2!=r.password?(we(),Ue("div",Zm,V(r.store.langProp[r.store.lang].passwordMismatch),1)):Ps("",!0),ye(m("div",{class:"text-red-500 font-roboto leading-[2px]"},V(r.store.langProp[r.store.lang].minimumNumberOfSymbols)+" - "+V(r.MinLength),513),[[Bt,r.passwordMinLength&&r.password.length<=5]]),m("button",{onClick:e[9]||(e[9]=(...i)=>o.register&&o.register(...i)),disabled:r.name.length<=2||r.password.length<=5||r.email.length<=5||r.password!==r.password2,class:"bg-[#EAAD02] border-2 border-none rounded-[3px] text-white h-[45px] disabled:opacity-50"},V(r.store.langProp[r.store.lang].toComeIn),9,e_),m("p",t_,[_e(V(r.store.langProp[r.store.lang].doYouAlreadyHaveAnAccount),1),m("button",{onClick:e[10]||(e[10]=i=>r.store.comp="Login"),class:"ml-[8px] text-blue-500 underline hover:text-amber-700"},V(r.store.langProp[r.store.lang].toComeIn),1)])])])}const s_=tt(Lm,[["render",n_]]),r_={data(){return{store:Ct()}},components:{Contacts:jc,Feedback:$c,Login:Mm,Register:s_}},o_={key:0,class:"fixed z-[12] inset-0 flex justify-center items-center"},i_={class:"p-2 text-right"},a_=m("strong",null,"X",-1),c_=[a_];function l_(t,e,n,s,r,o){return r.store.modal?(we(),Ue("div",o_,[r.store.modal?(we(),Ue("div",{key:0,onClick:e[0]||(e[0]=i=>r.store.modal=!1),class:"fixed z-[11] inset-0 flex justify-center bg-black bg-opacity-80"})):Ps("",!0),m("div",{class:bn([r.store.bg,"max-h-screen overflow-scroll bg-cover bg-no-repeat grid rounded-[10px] z-[11]"])},[m("div",i_,[m("button",{onClick:e[1]||(e[1]=i=>r.store.modal=!1),class:"w-10 h-10 focus:outline-none text-[29px]"},c_)]),(we(),Hs(wu(r.store.comp),{class:"mx-20 mb-10"}))],2)])):Ps("",!0)}const u_=tt(r_,[["render",l_]]),f_={components:{Header:Xg,Footer:_m,LayoutModal:u_}};function d_(t,e,n,s,r,o){const i=Kt("LayoutModal"),a=Kt("Header");return we(),Ue(Le,null,[Q(i),m("div",{class:bn([t.$route.name=="Home"?"h-screen min-h-[700px]":"min-h-screen","overflow-x-hidden px-[40px] grid grid-rows-[min-content_auto] max-w-screen max-[800px]:px-[20px]"])},[Q(a),Eu(t.$slots,"default")],2)],64)}const h_=tt(f_,[["render",d_]]),p_={};function g_(t,e){const n=Kt("RouterView");return we(),Hs(n)}const m_=tt(p_,[["render",g_]]),__="modulepreload",b_=function(t){return"/"+t},Ai={},Qt=function(e,n,s){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=b_(o),o in Ai)return;Ai[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!s)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===o&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":__,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const en=typeof window<"u";function y_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Z=Object.assign;function dr(t,e){const n={};for(const s in e){const r=e[s];n[s]=We(r)?r.map(t):t(r)}return n}const Ln=()=>{},We=Array.isArray,v_=/\/$/,w_=t=>t.replace(v_,"");function hr(t,e,n="/"){let s,r={},o="",i="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),o=e.slice(c+1,a>-1?a:e.length),r=t(o)),a>-1&&(s=s||e.slice(0,a),i=e.slice(a,e.length)),s=T_(s??e,n),{fullPath:s+(o&&"?")+o+i,path:s,query:r,hash:i}}function E_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Oi(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function I_(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&mn(e.matched[s],n.matched[r])&&Hc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Hc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!x_(t[n],e[n]))return!1;return!0}function x_(t,e){return We(t)?Ni(t,e):We(e)?Ni(e,t):t===e}function Ni(t,e){return We(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function T_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/");let r=n.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var Yn;(function(t){t.pop="pop",t.push="push"})(Yn||(Yn={}));var Un;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Un||(Un={}));function P_(t){if(!t)if(en){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),w_(t)}const S_=/^[^#]+#/;function R_(t,e){return t.replace(S_,"#")+e}function k_(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Qs=()=>({left:window.pageXOffset,top:window.pageYOffset});function C_(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=k_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Mi(t,e){return(history.state?history.state.position-e:-1)+t}const Lr=new Map;function A_(t,e){Lr.set(t,e)}function O_(t){const e=Lr.get(t);return Lr.delete(t),e}let N_=()=>location.protocol+"//"+location.host;function Vc(t,e){const{pathname:n,search:s,hash:r}=e,o=t.indexOf("#");if(o>-1){let a=r.includes(t.slice(o))?t.slice(o).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Oi(c,"")}return Oi(n,t)+s+r}function M_(t,e,n,s){let r=[],o=[],i=null;const a=({state:p})=>{const b=Vc(t,location),T=n.value,C=e.value;let U=0;if(p){if(n.value=b,e.value=p,i&&i===T){i=null;return}U=C?p.position-C.position:0}else s(b);r.forEach(k=>{k(n.value,T,{delta:U,type:Yn.pop,direction:U?U>0?Un.forward:Un.back:Un.unknown})})};function c(){i=n.value}function l(p){r.push(p);const b=()=>{const T=r.indexOf(p);T>-1&&r.splice(T,1)};return o.push(b),b}function f(){const{history:p}=window;p.state&&p.replaceState(Z({},p.state,{scroll:Qs()}),"")}function h(){for(const p of o)p();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f),{pauseListeners:c,listen:l,destroy:h}}function Di(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?Qs():null}}function D_(t){const{history:e,location:n}=window,s={value:Vc(t,n)},r={value:e.state};r.value||o(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(c,l,f){const h=t.indexOf("#"),p=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:N_()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),r.value=l}catch(b){console.error(b),n[f?"replace":"assign"](p)}}function i(c,l){const f=Z({},e.state,Di(r.value.back,c,r.value.forward,!0),l,{position:r.value.position});o(c,f,!0),s.value=c}function a(c,l){const f=Z({},r.value,e.state,{forward:c,scroll:Qs()});o(f.current,f,!0);const h=Z({},Di(s.value,c,null),{position:f.position+1},l);o(c,h,!1),s.value=c}return{location:s,state:r,push:a,replace:i}}function L_(t){t=P_(t);const e=D_(t),n=M_(t,e.state,e.location,e.replace);function s(o,i=!0){i||n.pauseListeners(),history.go(o)}const r=Z({location:"",base:t,go:s,createHref:R_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function U_(t){return typeof t=="string"||t&&typeof t=="object"}function zc(t){return typeof t=="string"||typeof t=="symbol"}const ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Wc=Symbol("");var Li;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Li||(Li={}));function _n(t,e){return Z(new Error,{type:t,[Wc]:!0},e)}function nt(t,e){return t instanceof Error&&Wc in t&&(e==null||!!(t.type&e))}const Ui="[^/]+?",F_={sensitive:!1,strict:!1,start:!0,end:!0},B_=/[.+*?^${}()[\]/\\]/g;function j_(t,e){const n=Z({},F_,e),s=[];let r=n.start?"^":"";const o=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let h=0;h<l.length;h++){const p=l[h];let b=40+(n.sensitive?.25:0);if(p.type===0)h||(r+="/"),r+=p.value.replace(B_,"\\$&"),b+=40;else if(p.type===1){const{value:T,repeatable:C,optional:U,regexp:k}=p;o.push({name:T,repeatable:C,optional:U});const F=k||Ui;if(F!==Ui){b+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${T}" (${F}): `+q.message)}}let O=C?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;h||(O=U&&l.length<2?`(?:/${O})`:"/"+O),U&&(O+="?"),r+=O,b+=20,U&&(b+=-8),C&&(b+=-20),F===".*"&&(b+=-50)}f.push(b)}s.push(f)}if(n.strict&&n.end){const l=s.length-1;s[l][s[l].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const i=new RegExp(r,n.sensitive?"":"i");function a(l){const f=l.match(i),h={};if(!f)return null;for(let p=1;p<f.length;p++){const b=f[p]||"",T=o[p-1];h[T.name]=b&&T.repeatable?b.split("/"):b}return h}function c(l){let f="",h=!1;for(const p of t){(!h||!f.endsWith("/"))&&(f+="/"),h=!1;for(const b of p)if(b.type===0)f+=b.value;else if(b.type===1){const{value:T,repeatable:C,optional:U}=b,k=T in l?l[T]:"";if(We(k)&&!C)throw new Error(`Provided param "${T}" is an array but it is not repeatable (* or + modifiers)`);const F=We(k)?k.join("/"):k;if(!F)if(U)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):h=!0);else throw new Error(`Missing required param "${T}"`);f+=F}}return f||"/"}return{re:i,score:s,keys:o,parse:a,stringify:c}}function $_(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function H_(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const o=$_(s[n],r[n]);if(o)return o;n++}if(Math.abs(r.length-s.length)===1){if(Fi(s))return 1;if(Fi(r))return-1}return r.length-s.length}function Fi(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const V_={type:0,value:""},z_=/[a-zA-Z0-9_]/;function W_(t){if(!t)return[[]];if(t==="/")return[[V_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(b){throw new Error(`ERR (${n})/"${l}": ${b}`)}let n=0,s=n;const r=[];let o;function i(){o&&r.push(o),o=[]}let a=0,c,l="",f="";function h(){l&&(n===0?o.push({type:0,value:l}):n===1||n===2||n===3?(o.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),i()):c===":"?(h(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:z_.test(c)?p():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),i(),r}function K_(t,e,n){const s=j_(W_(t.path),n),r=Z(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function q_(t,e){const n=[],s=new Map;e=$i({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function o(f,h,p){const b=!p,T=G_(f);T.aliasOf=p&&p.record;const C=$i(e,f),U=[T];if("alias"in f){const O=typeof f.alias=="string"?[f.alias]:f.alias;for(const q of O)U.push(Z({},T,{components:p?p.record.components:T.components,path:q,aliasOf:p?p.record:T}))}let k,F;for(const O of U){const{path:q}=O;if(h&&q[0]!=="/"){const X=h.record.path,ae=X[X.length-1]==="/"?"":"/";O.path=h.record.path+(q&&ae+q)}if(k=K_(O,h,C),p?p.alias.push(k):(F=F||k,F!==k&&F.alias.push(k),b&&f.name&&!ji(k)&&i(f.name)),T.children){const X=T.children;for(let ae=0;ae<X.length;ae++)o(X[ae],k,p&&p.children[ae])}p=p||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&c(k)}return F?()=>{i(F)}:Ln}function i(f){if(zc(f)){const h=s.get(f);h&&(s.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&s.delete(f.record.name),f.children.forEach(i),f.alias.forEach(i))}}function a(){return n}function c(f){let h=0;for(;h<n.length&&H_(f,n[h])>=0&&(f.record.path!==n[h].record.path||!Kc(f,n[h]));)h++;n.splice(h,0,f),f.record.name&&!ji(f)&&s.set(f.record.name,f)}function l(f,h){let p,b={},T,C;if("name"in f&&f.name){if(p=s.get(f.name),!p)throw _n(1,{location:f});C=p.record.name,b=Z(Bi(h.params,p.keys.filter(F=>!F.optional).map(F=>F.name)),f.params&&Bi(f.params,p.keys.map(F=>F.name))),T=p.stringify(b)}else if("path"in f)T=f.path,p=n.find(F=>F.re.test(T)),p&&(b=p.parse(T),C=p.record.name);else{if(p=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!p)throw _n(1,{location:f,currentLocation:h});C=p.record.name,b=Z({},h.params,f.params),T=p.stringify(b)}const U=[];let k=p;for(;k;)U.unshift(k.record),k=k.parent;return{name:C,path:T,params:b,matched:U,meta:Y_(U)}}return t.forEach(f=>o(f)),{addRoute:o,resolve:l,removeRoute:i,getRoutes:a,getRecordMatcher:r}}function Bi(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function G_(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:J_(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function J_(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="boolean"?n:n[s];return e}function ji(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Y_(t){return t.reduce((e,n)=>Z(e,n.meta),{})}function $i(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function Kc(t,e){return e.children.some(n=>n===t||Kc(t,n))}const qc=/#/g,X_=/&/g,Q_=/\//g,Z_=/=/g,eb=/\?/g,Gc=/\+/g,tb=/%5B/g,nb=/%5D/g,Jc=/%5E/g,sb=/%60/g,Yc=/%7B/g,rb=/%7C/g,Xc=/%7D/g,ob=/%20/g;function Io(t){return encodeURI(""+t).replace(rb,"|").replace(tb,"[").replace(nb,"]")}function ib(t){return Io(t).replace(Yc,"{").replace(Xc,"}").replace(Jc,"^")}function Ur(t){return Io(t).replace(Gc,"%2B").replace(ob,"+").replace(qc,"%23").replace(X_,"%26").replace(sb,"`").replace(Yc,"{").replace(Xc,"}").replace(Jc,"^")}function ab(t){return Ur(t).replace(Z_,"%3D")}function cb(t){return Io(t).replace(qc,"%23").replace(eb,"%3F")}function lb(t){return t==null?"":cb(t).replace(Q_,"%2F")}function Ns(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ub(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const o=s[r].replace(Gc," "),i=o.indexOf("="),a=Ns(i<0?o:o.slice(0,i)),c=i<0?null:Ns(o.slice(i+1));if(a in e){let l=e[a];We(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Hi(t){let e="";for(let n in t){const s=t[n];if(n=ab(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(We(s)?s.map(o=>o&&Ur(o)):[s&&Ur(s)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function fb(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=We(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const db=Symbol(""),Vi=Symbol(""),xo=Symbol(""),Qc=Symbol(""),Fr=Symbol("");function Rn(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function mt(t,e,n,s,r){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,a)=>{const c=h=>{h===!1?a(_n(4,{from:n,to:e})):h instanceof Error?a(h):U_(h)?a(_n(2,{from:e,to:h})):(o&&s.enterCallbacks[r]===o&&typeof h=="function"&&o.push(h),i())},l=t.call(s&&s.instances[r],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(h=>a(h))})}function pr(t,e,n,s){const r=[];for(const o of t)for(const i in o.components){let a=o.components[i];if(!(e!=="beforeRouteEnter"&&!o.instances[i]))if(hb(a)){const l=(a.__vccOpts||a)[e];l&&r.push(mt(l,n,s,o,i))}else{let c=a();r.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${o.path}"`));const f=y_(l)?l.default:l;o.components[i]=f;const p=(f.__vccOpts||f)[e];return p&&mt(p,n,s,o,i)()}))}}return r}function hb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zi(t){const e=Ye(xo),n=Ye(Qc),s=Ne(()=>e.resolve(sn(t.to))),r=Ne(()=>{const{matched:c}=s.value,{length:l}=c,f=c[l-1],h=n.matched;if(!f||!h.length)return-1;const p=h.findIndex(mn.bind(null,f));if(p>-1)return p;const b=Wi(c[l-2]);return l>1&&Wi(f)===b&&h[h.length-1].path!==b?h.findIndex(mn.bind(null,c[l-2])):p}),o=Ne(()=>r.value>-1&&_b(n.params,s.value.params)),i=Ne(()=>r.value>-1&&r.value===n.matched.length-1&&Hc(n.params,s.value.params));function a(c={}){return mb(c)?e[sn(t.replace)?"replace":"push"](sn(t.to)).catch(Ln):Promise.resolve()}return{route:s,href:Ne(()=>s.value.href),isActive:o,isExactActive:i,navigate:a}}const pb=Pa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zi,setup(t,{slots:e}){const n=In(zi(t)),{options:s}=Ye(xo),r=Ne(()=>({[Ki(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ki(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:Wa("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},o)}}}),gb=pb;function mb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function _b(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!We(r)||r.length!==s.length||s.some((o,i)=>o!==r[i]))return!1}return!0}function Wi(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ki=(t,e,n)=>t??e??n,bb=Pa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Ye(Fr),r=Ne(()=>t.route||s.value),o=Ye(Vi,0),i=Ne(()=>{let l=sn(o);const{matched:f}=r.value;let h;for(;(h=f[l])&&!h.components;)l++;return l}),a=Ne(()=>r.value.matched[i.value]);ps(Vi,Ne(()=>i.value+1)),ps(db,a),ps(Fr,r);const c=Xr();return Cn(()=>[c.value,a.value,t.name],([l,f,h],[p,b,T])=>{f&&(f.instances[h]=l,b&&b!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=b.leaveGuards),f.updateGuards.size||(f.updateGuards=b.updateGuards))),l&&f&&(!b||!mn(f,b)||!p)&&(f.enterCallbacks[h]||[]).forEach(C=>C(l))},{flush:"post"}),()=>{const l=r.value,f=t.name,h=a.value,p=h&&h.components[f];if(!p)return qi(n.default,{Component:p,route:l});const b=h.props[f],T=b?b===!0?l.params:typeof b=="function"?b(l):b:null,U=Wa(p,Z({},T,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(h.instances[f]=null)},ref:c}));return qi(n.default,{Component:U,route:l})||U}}});function qi(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const yb=bb;function vb(t){const e=q_(t.routes,t),n=t.parseQuery||ub,s=t.stringifyQuery||Hi,r=t.history,o=Rn(),i=Rn(),a=Rn(),c=Hl(ht);let l=ht;en&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=dr.bind(null,y=>""+y),h=dr.bind(null,lb),p=dr.bind(null,Ns);function b(y,R){let P,N;return zc(y)?(P=e.getRecordMatcher(y),N=R):N=y,e.addRoute(N,P)}function T(y){const R=e.getRecordMatcher(y);R&&e.removeRoute(R)}function C(){return e.getRoutes().map(y=>y.record)}function U(y){return!!e.getRecordMatcher(y)}function k(y,R){if(R=Z({},R||c.value),typeof y=="string"){const u=hr(n,y,R.path),d=e.resolve({path:u.path},R),g=r.createHref(u.fullPath);return Z(u,d,{params:p(d.params),hash:Ns(u.hash),redirectedFrom:void 0,href:g})}let P;if("path"in y)P=Z({},y,{path:hr(n,y.path,R.path).path});else{const u=Z({},y.params);for(const d in u)u[d]==null&&delete u[d];P=Z({},y,{params:h(y.params)}),R.params=h(R.params)}const N=e.resolve(P,R),G=y.hash||"";N.params=f(p(N.params));const ce=E_(s,Z({},y,{hash:ib(G),path:N.path})),H=r.createHref(ce);return Z({fullPath:ce,hash:G,query:s===Hi?fb(y.query):y.query||{}},N,{redirectedFrom:void 0,href:H})}function F(y){return typeof y=="string"?hr(n,y,c.value.path):Z({},y)}function O(y,R){if(l!==y)return _n(8,{from:R,to:y})}function q(y){return W(y)}function X(y){return q(Z(F(y),{replace:!0}))}function ae(y){const R=y.matched[y.matched.length-1];if(R&&R.redirect){const{redirect:P}=R;let N=typeof P=="function"?P(y):P;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=F(N):{path:N},N.params={}),Z({query:y.query,hash:y.hash,params:"path"in N?{}:y.params},N)}}function W(y,R){const P=l=k(y),N=c.value,G=y.state,ce=y.force,H=y.replace===!0,u=ae(P);if(u)return W(Z(F(u),{state:typeof u=="object"?Z({},G,u.state):G,force:ce,replace:H}),R||P);const d=P;d.redirectedFrom=R;let g;return!ce&&I_(s,N,P)&&(g=_n(16,{to:d,from:N}),Ot(N,N,!0,!1)),(g?Promise.resolve(g):he(d,N)).catch(_=>nt(_)?nt(_,2)?_:Fe(_):ne(_,d,N)).then(_=>{if(_){if(nt(_,2))return W(Z({replace:H},F(_.to),{state:typeof _.to=="object"?Z({},G,_.to.state):G,force:ce}),R||d)}else _=Pe(d,N,!0,H,G);return pe(d,N,_),_})}function K(y,R){const P=O(y,R);return P?Promise.reject(P):Promise.resolve()}function he(y,R){let P;const[N,G,ce]=wb(y,R);P=pr(N.reverse(),"beforeRouteLeave",y,R);for(const u of N)u.leaveGuards.forEach(d=>{P.push(mt(d,y,R))});const H=K.bind(null,y,R);return P.push(H),Zt(P).then(()=>{P=[];for(const u of o.list())P.push(mt(u,y,R));return P.push(H),Zt(P)}).then(()=>{P=pr(G,"beforeRouteUpdate",y,R);for(const u of G)u.updateGuards.forEach(d=>{P.push(mt(d,y,R))});return P.push(H),Zt(P)}).then(()=>{P=[];for(const u of y.matched)if(u.beforeEnter&&!R.matched.includes(u))if(We(u.beforeEnter))for(const d of u.beforeEnter)P.push(mt(d,y,R));else P.push(mt(u.beforeEnter,y,R));return P.push(H),Zt(P)}).then(()=>(y.matched.forEach(u=>u.enterCallbacks={}),P=pr(ce,"beforeRouteEnter",y,R),P.push(H),Zt(P))).then(()=>{P=[];for(const u of i.list())P.push(mt(u,y,R));return P.push(H),Zt(P)}).catch(u=>nt(u,8)?u:Promise.reject(u))}function pe(y,R,P){for(const N of a.list())N(y,R,P)}function Pe(y,R,P,N,G){const ce=O(y,R);if(ce)return ce;const H=R===ht,u=en?history.state:{};P&&(N||H?r.replace(y.fullPath,Z({scroll:H&&u&&u.scroll},G)):r.push(y.fullPath,G)),c.value=y,Ot(y,R,P,H),Fe()}let De;function ut(){De||(De=r.listen((y,R,P)=>{if(!ss.listening)return;const N=k(y),G=ae(N);if(G){W(Z(G,{replace:!0}),N).catch(Ln);return}l=N;const ce=c.value;en&&A_(Mi(ce.fullPath,P.delta),Qs()),he(N,ce).catch(H=>nt(H,12)?H:nt(H,2)?(W(H.to,N).then(u=>{nt(u,20)&&!P.delta&&P.type===Yn.pop&&r.go(-1,!1)}).catch(Ln),Promise.reject()):(P.delta&&r.go(-P.delta,!1),ne(H,N,ce))).then(H=>{H=H||Pe(N,ce,!1),H&&(P.delta&&!nt(H,8)?r.go(-P.delta,!1):P.type===Yn.pop&&nt(H,20)&&r.go(-1,!1)),pe(N,ce,H)}).catch(Ln)}))}let Ce=Rn(),ge=Rn(),ue;function ne(y,R,P){Fe(y);const N=ge.list();return N.length?N.forEach(G=>G(y,R,P)):console.error(y),Promise.reject(y)}function ee(){return ue&&c.value!==ht?Promise.resolve():new Promise((y,R)=>{Ce.add([y,R])})}function Fe(y){return ue||(ue=!y,ut(),Ce.list().forEach(([R,P])=>y?P(y):R()),Ce.reset()),y}function Ot(y,R,P,N){const{scrollBehavior:G}=t;if(!en||!G)return Promise.resolve();const ce=!P&&O_(Mi(y.fullPath,0))||(N||!P)&&history.state&&history.state.scroll||null;return Zr().then(()=>G(y,R,ce)).then(H=>H&&C_(H)).catch(H=>ne(H,y,R))}const Be=y=>r.go(y);let Se;const Jt=new Set,ss={currentRoute:c,listening:!0,addRoute:b,removeRoute:T,hasRoute:U,getRoutes:C,resolve:k,options:t,push:q,replace:X,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:o.add,beforeResolve:i.add,afterEach:a.add,onError:ge.add,isReady:ee,install(y){const R=this;y.component("RouterLink",gb),y.component("RouterView",yb),y.config.globalProperties.$router=R,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>sn(c)}),en&&!Se&&c.value===ht&&(Se=!0,q(r.location).catch(G=>{}));const P={};for(const G in ht)P[G]=Ne(()=>c.value[G]);y.provide(xo,R),y.provide(Qc,In(P)),y.provide(Fr,c);const N=y.unmount;Jt.add(y),y.unmount=function(){Jt.delete(y),Jt.size<1&&(l=ht,De&&De(),De=null,c.value=ht,Se=!1,ue=!1),N()}}};return ss}function Zt(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function wb(t,e){const n=[],s=[],r=[],o=Math.max(e.matched.length,t.matched.length);for(let i=0;i<o;i++){const a=e.matched[i];a&&(t.matched.find(l=>mn(l,a))?s.push(a):n.push(a));const c=t.matched[i];c&&(e.matched.find(l=>mn(l,c))||r.push(c))}return[n,s,r]}const Eb="/assets/paralax1-371235c6.png",Ib="/assets/paralax2-aa0b773a.png",xb="/assets/paralax3a-7b662525.png",Tb="/assets/paralax3b-b777e898.png",Pb="/assets/paralax9-20ab124f.png",Sb={data(){return{xPos:0,yPos:0,store:Ct()}},methods:{check(t){this.xPos=t.clientX-window.innerWidth/2,this.yPos=t.clientY-window.innerHeight/2},touch(t){this.xPos=t.touches[0].clientX-window.innerWidth/2,this.yPos=t.touches[0].clientY-window.innerHeight/2}},computed:{parallaxHeight(){return window.innerHeight-102*2}}},Rb={class:"relative grid overflow-hidden -mx-[100px] [&>img]:max-w-none [&>img]:select-none"},kb=m("div",{class:"absolute w-full h-full bg-gray-900 bg-opacity-[.3]"},null,-1),Cb={class:"h-full justify-center flex items-center"},Ab={class:"grid gap-[10vh] [&_*]:text-white"},Ob={class:"justify-center flex"},Nb={class:"grid grid-cols-2 gap-[40vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"},Mb={class:"justify-center flex max-[800px]:pt-[10px]"},Db={class:"grid grid-cols-2 gap-[20vw] max-[800px]:grid-cols-1 max-[800px]:gap-[10px]"};function Lb(t,e,n,s,r,o){const i=Kt("router-link"),a=Kt("Layout");return we(),Ue("div",{onTouchmove:e[1]||(e[1]=(...c)=>o.touch&&o.touch(...c)),onMousemove:e[2]||(e[2]=(...c)=>o.check&&o.check(...c))},[Q(a,null,{default:ke(()=>[m("div",Rb,[kb,m("img",{style:_t({transform:`translate(${r.xPos/10}px, ${r.yPos/10}px)`}),class:"w-[2200px] absolute left-[-10%] top-[-10%] -z-10",src:Eb},null,4),m("img",{style:_t({transform:`translate(${r.xPos/13}px, ${r.yPos/13}px)`}),class:"w-[2200px] h-[70%] absolute left-[-10%] top-0 -z-10",src:Ib},null,4),m("img",{style:_t({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[440px] absolute justify-self-center mr-[1120px] bottom-[60px] z-[-9]",src:xb},null,4),m("img",{style:_t({transform:`translate(${r.xPos/24}px, ${r.yPos/24}px)`}),class:"w-[500px] absolute justify-self-center ml-[220px] bottom-[40px] z-[-9]",src:Tb},null,4),m("img",{style:_t({transform:`translate(${r.xPos/18}px, ${r.yPos/20}px)`}),class:"w-[2200px] absolute justify-self-center bottom-[-4%] -z-10",src:Pb},null,4),m("div",Cb,[m("div",Ab,[m("div",Ob,[m("div",Nb,[Q(i,{to:"/Products",class:"relative z-10 flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].catalogue),1)]),_:1}),Q(i,{to:"/about",class:"relative z-10 flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].about),1)]),_:1})])]),m("div",Mb,[m("div",Db,[Q(i,{to:"/Blog",class:"relative z-10 flex items-center justify-center bg-yellow-500 w-40 h-12 rounded-md"},{default:ke(()=>[_e(V(r.store.langProp[r.store.lang].blog),1)]),_:1}),m("button",{onClick:e[0]||(e[0]=c=>(r.store.modal=!0,r.store.comp="Contacts",r.store.bg="bg-white")),class:"relative z-10 bg-yellow-500 w-40 h-12 rounded-md"},V(r.store.langProp[r.store.lang].contacts),1)])])])])])]),_:1})],32)}const Ub=tt(Sb,[["render",Lb]]),Fb=vb({history:L_("/"),routes:[{path:"/",name:"Home",component:Ub},{path:"/about",name:"About",component:()=>Qt(()=>import("./About-64bbf4bc.js"),[])},{path:"/Products",name:"Products",component:()=>Qt(()=>import("./Products-9a4c2b62.js"),[])},{path:"/Personal",name:"Personal",component:()=>Qt(()=>import("./Personal-eb4b4e4f.js"),[])},{path:"/PersonalArea",name:"PersonalArea",component:()=>Qt(()=>import("./PersonalArea-4f102241.js"),[])},{path:"/Blog",name:"Blog",component:()=>Qt(()=>import("./Blog-9a511d26.js"),[])},{path:"/Checkout",name:"Checkout",component:()=>Qt(()=>import("./Checkout-f6dc8651.js"),[])}]});const Zs=Sf(m_),Bb=Cf();new xe;const jb={apiKey:"AIzaSyBTSEZwHNPgKNuBJggnTFcdjmC9RR4R7NA",authDomain:"craft-honey.firebaseapp.com",projectId:"craft-honey",storageBucket:"craft-honey.appspot.com",messagingSenderId:"601806986687",appId:"1:601806986687:web:d7b903e0736c4d4d35550a"};Zs.component("Layout",h_);Zs.use(Bb);Zs.use(Fb);ic(jb);_o();Zs.mount("#app");export{Le as F,h_ as L,tt as _,m as a,_e as b,Hs as c,Ue as d,$b as e,Q as f,vo as g,we as o,Kt as r,V as t,Ct as u,ke as w};
