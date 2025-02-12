const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dlzfc57k.js","./index.BMC0XXzi.css","./B_uyQa6e.js","./Db7qyMpq.js","./error-404.C3V-3Mc4.css","./_Vo3WKBY.js","./error-500.dGVH929u.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Nf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Fe={},ti=[],Dn=()=>{},j0=()=>!1,ta=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Of=t=>t.startsWith("onUpdate:"),st=Object.assign,Df=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},W0=Object.prototype.hasOwnProperty,Oe=(t,e)=>W0.call(t,e),ue=Array.isArray,ni=t=>na(t)==="[object Map]",Cy=t=>na(t)==="[object Set]",q0=t=>na(t)==="[object RegExp]",fe=t=>typeof t=="function",ze=t=>typeof t=="string",Ks=t=>typeof t=="symbol",Be=t=>t!==null&&typeof t=="object",Sy=t=>(Be(t)||fe(t))&&fe(t.then)&&fe(t.catch),Py=Object.prototype.toString,na=t=>Py.call(t),K0=t=>na(t).slice(8,-1),ky=t=>na(t)==="[object Object]",xf=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,si=Nf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ec=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},z0=/-(\w)/g,rn=Ec(t=>t.replace(z0,(e,n)=>n?n.toUpperCase():"")),G0=/\B([A-Z])/g,Sr=Ec(t=>t.replace(G0,"-$1").toLowerCase()),Tc=Ec(t=>t.charAt(0).toUpperCase()+t.slice(1)),wu=Ec(t=>t?`on${Tc(t)}`:""),Os=(t,e)=>!Object.is(t,e),ri=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ny=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},ch=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Oy=t=>{const e=ze(t)?Number(t):NaN;return isNaN(e)?t:e};let ng;const wc=()=>ng||(ng=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ic(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=ze(s)?J0(s):Ic(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(ze(t)||Be(t))return t}const Q0=/;(?![^(]*\))/g,Y0=/:([^]+)/,X0=/\/\*[^]*?\*\//g;function J0(t){const e={};return t.replace(X0,"").split(Q0).forEach(n=>{if(n){const s=n.split(Y0);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function bc(t){let e="";if(ze(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const s=bc(t[n]);s&&(e+=s+" ")}else if(Be(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Z0(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ze(e)&&(t.class=bc(e)),n&&(t.style=Ic(n)),t}const eb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tb=Nf(eb);function Dy(t){return!!t||t===""}const xy=t=>!!(t&&t.__v_isRef===!0),nb=t=>ze(t)?t:t==null?"":ue(t)||Be(t)&&(t.toString===Py||!fe(t.toString))?xy(t)?nb(t.value):JSON.stringify(t,My,2):String(t),My=(t,e)=>xy(e)?My(t,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[Iu(s,i)+" =>"]=r,n),{})}:Cy(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Iu(n))}:Ks(e)?Iu(e):Be(e)&&!ue(e)&&!ky(e)?String(e):e,Iu=(t,e="")=>{var n;return Ks(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kt;class Ly{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Kt,!e&&Kt&&(this.index=(Kt.scopes||(Kt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Kt;try{return Kt=this,e()}finally{Kt=n}}}on(){Kt=this}off(){Kt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Vy(t){return new Ly(t)}function Fy(){return Kt}let Ue;const bu=new WeakSet;class Uy{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Kt&&Kt.active&&Kt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,bu.has(this)&&(bu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Hy(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,sg(this),$y(this);const e=Ue,n=_n;Ue=this,_n=!0;try{return this.fn()}finally{jy(this),Ue=e,_n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vf(e);this.deps=this.depsTail=void 0,sg(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?bu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){uh(this)&&this.run()}get dirty(){return uh(this)}}let By=0,_o,yo;function Hy(t,e=!1){if(t.flags|=8,e){t.next=yo,yo=t;return}t.next=_o,_o=t}function Mf(){By++}function Lf(){if(--By>0)return;if(yo){let e=yo;for(yo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;_o;){let e=_o;for(_o=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function $y(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jy(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),Vf(s),sb(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function uh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wy(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wy(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===xo))return;t.globalVersion=xo;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!uh(t)){t.flags&=-3;return}const n=Ue,s=_n;Ue=t,_n=!0;try{$y(t);const r=t.fn(t._value);(e.version===0||Os(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ue=n,_n=s,jy(t),t.flags&=-3}}function Vf(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Vf(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function sb(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _n=!0;const qy=[];function zs(){qy.push(_n),_n=!1}function Gs(){const t=qy.pop();_n=t===void 0?!0:t}function sg(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let xo=0;class rb{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ff{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!_n||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new rb(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,Ky(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=s)}return n}trigger(e){this.version++,xo++,this.notify(e)}notify(e){Mf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Lf()}}}function Ky(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Ky(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const bl=new WeakMap,dr=Symbol(""),hh=Symbol(""),Mo=Symbol("");function Ct(t,e,n){if(_n&&Ue){let s=bl.get(t);s||bl.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new Ff),r.map=s,r.key=n),r.track()}}function Xn(t,e,n,s,r,i){const o=bl.get(t);if(!o){xo++;return}const a=c=>{c&&c.trigger()};if(Mf(),e==="clear")o.forEach(a);else{const c=ue(t),u=c&&xf(n);if(c&&n==="length"){const h=Number(s);o.forEach((f,p)=>{(p==="length"||p===Mo||!Ks(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Mo)),e){case"add":c?u&&a(o.get("length")):(a(o.get(dr)),ni(t)&&a(o.get(hh)));break;case"delete":c||(a(o.get(dr)),ni(t)&&a(o.get(hh)));break;case"set":ni(t)&&a(o.get(dr));break}}Lf()}function ib(t,e){const n=bl.get(t);return n&&n.get(e)}function $r(t){const e=Pe(t);return e===t?e:(Ct(e,"iterate",Mo),sn(t)?e:e.map(St))}function Rc(t){return Ct(t=Pe(t),"iterate",Mo),t}const ob={__proto__:null,[Symbol.iterator](){return Ru(this,Symbol.iterator,St)},concat(...t){return $r(this).concat(...t.map(e=>ue(e)?$r(e):e))},entries(){return Ru(this,"entries",t=>(t[1]=St(t[1]),t))},every(t,e){return Kn(this,"every",t,e,void 0,arguments)},filter(t,e){return Kn(this,"filter",t,e,n=>n.map(St),arguments)},find(t,e){return Kn(this,"find",t,e,St,arguments)},findIndex(t,e){return Kn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Kn(this,"findLast",t,e,St,arguments)},findLastIndex(t,e){return Kn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Kn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Au(this,"includes",t)},indexOf(...t){return Au(this,"indexOf",t)},join(t){return $r(this).join(t)},lastIndexOf(...t){return Au(this,"lastIndexOf",t)},map(t,e){return Kn(this,"map",t,e,void 0,arguments)},pop(){return to(this,"pop")},push(...t){return to(this,"push",t)},reduce(t,...e){return rg(this,"reduce",t,e)},reduceRight(t,...e){return rg(this,"reduceRight",t,e)},shift(){return to(this,"shift")},some(t,e){return Kn(this,"some",t,e,void 0,arguments)},splice(...t){return to(this,"splice",t)},toReversed(){return $r(this).toReversed()},toSorted(t){return $r(this).toSorted(t)},toSpliced(...t){return $r(this).toSpliced(...t)},unshift(...t){return to(this,"unshift",t)},values(){return Ru(this,"values",St)}};function Ru(t,e,n){const s=Rc(t),r=s[e]();return s!==t&&!sn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const ab=Array.prototype;function Kn(t,e,n,s,r,i){const o=Rc(t),a=o!==t&&!sn(t),c=o[e];if(c!==ab[e]){const f=c.apply(t,i);return a?St(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,St(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=c.call(o,u,s);return a&&r?r(h):h}function rg(t,e,n,s){const r=Rc(t);let i=n;return r!==t&&(sn(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,St(a),c,t)}),r[e](i,...s)}function Au(t,e,n){const s=Pe(t);Ct(s,"iterate",Mo);const r=s[e](...n);return(r===-1||r===!1)&&Hf(n[0])?(n[0]=Pe(n[0]),s[e](...n)):r}function to(t,e,n=[]){zs(),Mf();const s=Pe(t)[e].apply(t,n);return Lf(),Gs(),s}const lb=Nf("__proto__,__v_isRef,__isVue"),zy=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ks));function cb(t){Ks(t)||(t=String(t));const e=Pe(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class Gy{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?vb:Jy:i?Xy:Yy).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ue(e);if(!r){let c;if(o&&(c=ob[n]))return c;if(n==="hasOwnProperty")return cb}const a=Reflect.get(e,n,pt(e)?e:s);return(Ks(n)?zy.has(n):lb(n))||(r||Ct(e,"get",n),i)?a:pt(a)?o&&xf(n)?a:a.value:Be(a)?r?Zy(a):Qs(a):a}}class Qy extends Gy{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const c=Us(i);if(!sn(s)&&!Us(s)&&(i=Pe(i),s=Pe(s)),!ue(e)&&pt(i)&&!pt(s))return c?!1:(i.value=s,!0)}const o=ue(e)&&xf(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,s,pt(e)?e:r);return e===Pe(r)&&(o?Os(s,i)&&Xn(e,"set",n,s):Xn(e,"add",n,s)),a}deleteProperty(e,n){const s=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&Xn(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Ks(n)||!zy.has(n))&&Ct(e,"has",n),s}ownKeys(e){return Ct(e,"iterate",ue(e)?"length":dr),Reflect.ownKeys(e)}}class ub extends Gy{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hb=new Qy,fb=new ub,db=new Qy(!0);const fh=t=>t,Va=t=>Reflect.getPrototypeOf(t);function pb(t,e,n){return function(...s){const r=this.__v_raw,i=Pe(r),o=ni(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=r[t](...s),h=n?fh:e?ph:St;return!e&&Ct(i,"iterate",c?hh:dr),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function Fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gb(t,e){const n={get(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);t||(Os(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:c}=Va(o),u=e?fh:t?ph:St;if(c.call(o,r))return u(i.get(r));if(c.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ct(Pe(r),"iterate",dr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);return t||(Os(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,c=Pe(a),u=e?fh:t?ph:St;return!t&&Ct(c,"iterate",dr),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return st(n,t?{add:Fa("add"),set:Fa("set"),delete:Fa("delete"),clear:Fa("clear")}:{add(r){!e&&!sn(r)&&!Us(r)&&(r=Pe(r));const i=Pe(this);return Va(i).has.call(i,r)||(i.add(r),Xn(i,"add",r,r)),this},set(r,i){!e&&!sn(i)&&!Us(i)&&(i=Pe(i));const o=Pe(this),{has:a,get:c}=Va(o);let u=a.call(o,r);u||(r=Pe(r),u=a.call(o,r));const h=c.call(o,r);return o.set(r,i),u?Os(i,h)&&Xn(o,"set",r,i):Xn(o,"add",r,i),this},delete(r){const i=Pe(this),{has:o,get:a}=Va(i);let c=o.call(i,r);c||(r=Pe(r),c=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return c&&Xn(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,o=r.clear();return i&&Xn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=pb(r,t,e)}),n}function Uf(t,e){const n=gb(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Oe(n,r)&&r in s?n:s,r,i)}const mb={get:Uf(!1,!1)},_b={get:Uf(!1,!0)},yb={get:Uf(!0,!1)};const Yy=new WeakMap,Xy=new WeakMap,Jy=new WeakMap,vb=new WeakMap;function Eb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Tb(t){return t.__v_skip||!Object.isExtensible(t)?0:Eb(K0(t))}function Qs(t){return Us(t)?t:Bf(t,!1,hb,mb,Yy)}function Zn(t){return Bf(t,!1,db,_b,Xy)}function Zy(t){return Bf(t,!0,fb,yb,Jy)}function Bf(t,e,n,s,r){if(!Be(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=Tb(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function pr(t){return Us(t)?pr(t.__v_raw):!!(t&&t.__v_isReactive)}function Us(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function Hf(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function dh(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Ny(t,"__v_skip",!0),t}const St=t=>Be(t)?Qs(t):t,ph=t=>Be(t)?Zy(t):t;function pt(t){return t?t.__v_isRef===!0:!1}function is(t){return ev(t,!1)}function Lo(t){return ev(t,!0)}function ev(t,e){return pt(t)?t:new wb(t,e)}class wb{constructor(e,n){this.dep=new Ff,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:St(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||sn(e)||Us(e);e=s?e:Pe(e),Os(e,n)&&(this._rawValue=e,this._value=s?e:St(e),this.dep.trigger())}}function qe(t){return pt(t)?t.value:t}const Ib={get:(t,e,n)=>e==="__v_raw"?t:qe(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return pt(r)&&!pt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function tv(t){return pr(t)?t:new Proxy(t,Ib)}class bb{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return ib(Pe(this._object),this._key)}}class Rb{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Ab(t,e,n){return pt(t)?t:fe(t)?new Rb(t):Be(t)&&arguments.length>1?Cb(t,e,n):is(t)}function Cb(t,e,n){const s=t[e];return pt(s)?s:new bb(t,e,n)}class Sb{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Ff(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Hy(this,!0),!0}get value(){const e=this.dep.track();return Wy(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Pb(t,e,n=!1){let s,r;return fe(t)?s=t:(s=t.get,r=t.set),new Sb(s,r,n)}const Ua={},Rl=new WeakMap;let ir;function kb(t,e=!1,n=ir){if(n){let s=Rl.get(n);s||Rl.set(n,s=[]),s.push(t)}}function Nb(t,e,n=Fe){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:c}=n,u=P=>r?P:sn(P)||r===!1||r===0?Jn(P,1):Jn(P);let h,f,p,m,I=!1,k=!1;if(pt(t)?(f=()=>t.value,I=sn(t)):pr(t)?(f=()=>u(t),I=!0):ue(t)?(k=!0,I=t.some(P=>pr(P)||sn(P)),f=()=>t.map(P=>{if(pt(P))return P.value;if(pr(P))return u(P);if(fe(P))return c?c(P,2):P()})):fe(t)?e?f=c?()=>c(t,2):t:f=()=>{if(p){zs();try{p()}finally{Gs()}}const P=ir;ir=h;try{return c?c(t,3,[m]):t(m)}finally{ir=P}}:f=Dn,e&&r){const P=f,M=r===!0?1/0:r;f=()=>Jn(P(),M)}const N=Fy(),x=()=>{h.stop(),N&&N.active&&Df(N.effects,h)};if(i&&e){const P=e;e=(...M)=>{P(...M),x()}}let O=k?new Array(t.length).fill(Ua):Ua;const E=P=>{if(!(!(h.flags&1)||!h.dirty&&!P))if(e){const M=h.run();if(r||I||(k?M.some((F,b)=>Os(F,O[b])):Os(M,O))){p&&p();const F=ir;ir=h;try{const b=[M,O===Ua?void 0:k&&O[0]===Ua?[]:O,m];c?c(e,3,b):e(...b),O=M}finally{ir=F}}}else h.run()};return a&&a(E),h=new Uy(f),h.scheduler=o?()=>o(E,!1):E,m=P=>kb(P,!1,h),p=h.onStop=()=>{const P=Rl.get(h);if(P){if(c)c(P,4);else for(const M of P)M();Rl.delete(h)}},e?s?E(!0):O=h.run():o?o(E.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Jn(t,e=1/0,n){if(e<=0||!Be(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,pt(t))Jn(t.value,e,n);else if(ue(t))for(let s=0;s<t.length;s++)Jn(t[s],e,n);else if(Cy(t)||ni(t))t.forEach(s=>{Jn(s,e,n)});else if(ky(t)){for(const s in t)Jn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Jn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sa(t,e,n,s){try{return s?t(...s):t()}catch(r){Ni(r,e,n)}}function Tn(t,e,n,s){if(fe(t)){const r=sa(t,e,n,s);return r&&Sy(r)&&r.catch(i=>{Ni(i,e,n)}),r}if(ue(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Tn(t[i],e,n,s));return r}}function Ni(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Fe;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,c,u)===!1)return}a=a.parent}if(i){zs(),sa(i,null,10,[t,c,u]),Gs();return}}Ob(t,n,r,s,o)}function Ob(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ft=[];let Cn=-1;const ii=[];let ws=null,Wr=0;const nv=Promise.resolve();let Al=null;function ra(t){const e=Al||nv;return t?e.then(this?t.bind(this):t):e}function Db(t){let e=Cn+1,n=Ft.length;for(;e<n;){const s=e+n>>>1,r=Ft[s],i=Vo(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function $f(t){if(!(t.flags&1)){const e=Vo(t),n=Ft[Ft.length-1];!n||!(t.flags&2)&&e>=Vo(n)?Ft.push(t):Ft.splice(Db(e),0,t),t.flags|=1,sv()}}function sv(){Al||(Al=nv.then(rv))}function gh(t){ue(t)?ii.push(...t):ws&&t.id===-1?ws.splice(Wr+1,0,t):t.flags&1||(ii.push(t),t.flags|=1),sv()}function ig(t,e,n=Cn+1){for(;n<Ft.length;n++){const s=Ft[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ft.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Cl(t){if(ii.length){const e=[...new Set(ii)].sort((n,s)=>Vo(n)-Vo(s));if(ii.length=0,ws){ws.push(...e);return}for(ws=e,Wr=0;Wr<ws.length;Wr++){const n=ws[Wr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}ws=null,Wr=0}}const Vo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function rv(t){try{for(Cn=0;Cn<Ft.length;Cn++){const e=Ft[Cn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),sa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Cn<Ft.length;Cn++){const e=Ft[Cn];e&&(e.flags&=-2)}Cn=-1,Ft.length=0,Cl(),Al=null,(Ft.length||ii.length)&&rv()}}let Ut=null,iv=null;function Sl(t){const e=Ut;return Ut=t,iv=t&&t.type.__scopeId||null,e}function ov(t,e=Ut,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&yg(-1);const i=Sl(e);let o;try{o=t(...r)}finally{Sl(i),s._d&&yg(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function y2(t,e){if(Ut===null)return t;const n=Nc(Ut),s=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[i,o,a,c=Fe]=e[r];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Jn(o),s.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function Sn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let c=a.dir[s];c&&(zs(),Tn(c,n,8,[t.el,a,t,e]),Gs())}}const xb=Symbol("_vte"),av=t=>t.__isTeleport,Is=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function Mb(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cc(()=>{t.isMounted=!0}),Wf(()=>{t.isUnmounting=!0}),t}const en=[Function,Array],lv={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},cv=t=>{const e=t.subTree;return e.component?cv(e.component):e},Lb={name:"BaseTransition",props:lv,setup(t,{slots:e}){const n=kc(),s=Mb();return()=>{const r=e.default&&fv(e.default(),!0);if(!r||!r.length)return;const i=uv(r),o=Pe(t),{mode:a}=o;if(s.isLeaving)return Cu(i);const c=og(i);if(!c)return Cu(i);let u=mh(c,o,s,n,f=>u=f);c.type!==ft&&pi(c,u);let h=n.subTree&&og(n.subTree);if(h&&h.type!==ft&&!fn(c,h)&&cv(n).type!==ft){let f=mh(h,o,s,n);if(pi(h,f),a==="out-in"&&c.type!==ft)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},Cu(i);a==="in-out"&&c.type!==ft?f.delayLeave=(p,m,I)=>{const k=hv(s,h);k[String(h.key)]=h,p[Is]=()=>{m(),p[Is]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{I(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function uv(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==ft){e=n;break}}return e}const Vb=Lb;function hv(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function mh(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:I,onLeaveCancelled:k,onBeforeAppear:N,onAppear:x,onAfterAppear:O,onAppearCancelled:E}=e,P=String(t.key),M=hv(n,t),F=(y,T)=>{y&&Tn(y,s,9,T)},b=(y,T)=>{const S=T[1];F(y,T),ue(y)?y.every(A=>A.length<=1)&&S():y.length<=1&&S()},v={mode:o,persisted:a,beforeEnter(y){let T=c;if(!n.isMounted)if(i)T=N||c;else return;y[Is]&&y[Is](!0);const S=M[P];S&&fn(t,S)&&S.el[Is]&&S.el[Is](),F(T,[y])},enter(y){let T=u,S=h,A=f;if(!n.isMounted)if(i)T=x||u,S=O||h,A=E||f;else return;let w=!1;const ge=y[Ba]=ve=>{w||(w=!0,ve?F(A,[y]):F(S,[y]),v.delayedLeave&&v.delayedLeave(),y[Ba]=void 0)};T?b(T,[y,ge]):ge()},leave(y,T){const S=String(t.key);if(y[Ba]&&y[Ba](!0),n.isUnmounting)return T();F(p,[y]);let A=!1;const w=y[Is]=ge=>{A||(A=!0,T(),ge?F(k,[y]):F(I,[y]),y[Is]=void 0,M[S]===t&&delete M[S])};M[S]=t,m?b(m,[y,w]):w()},clone(y){const T=mh(y,e,n,s,r);return r&&r(T),T}};return v}function Cu(t){if(oa(t))return t=ls(t),t.children=null,t}function og(t){if(!oa(t))return av(t.type)&&t.children?uv(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function pi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,pi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function fv(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===zt?(o.patchFlag&128&&r++,s=s.concat(fv(o.children,e,a))):(e||o.type!==ft)&&s.push(a!=null?ls(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function ia(t,e){return fe(t)?st({name:t.name},e,{setup:t}):t}function jf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fo(t,e,n,s,r=!1){if(ue(t)){t.forEach((I,k)=>Fo(I,e&&(ue(e)?e[k]:e),n,s,r));return}if(gr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Fo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Nc(s.component):s.el,o=r?null:i,{i:a,r:c}=t,u=e&&e.r,h=a.refs===Fe?a.refs={}:a.refs,f=a.setupState,p=Pe(f),m=f===Fe?()=>!1:I=>Oe(p,I);if(u!=null&&u!==c&&(ze(u)?(h[u]=null,m(u)&&(f[u]=null)):pt(u)&&(u.value=null)),fe(c))sa(c,a,12,[o,h]);else{const I=ze(c),k=pt(c);if(I||k){const N=()=>{if(t.f){const x=I?m(c)?f[c]:h[c]:c.value;r?ue(x)&&Df(x,i):ue(x)?x.includes(i)||x.push(i):I?(h[c]=[i],m(c)&&(f[c]=h[c])):(c.value=[i],t.k&&(h[t.k]=c.value))}else I?(h[c]=o,m(c)&&(f[c]=o)):k&&(c.value=o,t.k&&(h[t.k]=o))};o?(N.id=-1,_t(N,n)):N()}}}let ag=!1;const jr=()=>{ag||(console.error("Hydration completed but contains mismatches."),ag=!0)},Fb=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",Ub=t=>t.namespaceURI.includes("MathML"),Ha=t=>{if(t.nodeType===1){if(Fb(t))return"svg";if(Ub(t))return"mathml"}},Xr=t=>t.nodeType===8;function Bb(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:c,createComment:u}}=t,h=(E,P)=>{if(!P.hasChildNodes()){n(null,E,P),Cl(),P._vnode=E;return}f(P.firstChild,E,null,null,null),Cl(),P._vnode=E},f=(E,P,M,F,b,v=!1)=>{v=v||!!P.dynamicChildren;const y=Xr(E)&&E.data==="[",T=()=>k(E,P,M,F,b,y),{type:S,ref:A,shapeFlag:w,patchFlag:ge}=P;let ve=E.nodeType;P.el=E,ge===-2&&(v=!1,P.dynamicChildren=null);let ne=null;switch(S){case yr:ve!==3?P.children===""?(c(P.el=r(""),o(E),E),ne=E):ne=T():(E.data!==P.children&&(jr(),E.data=P.children),ne=i(E));break;case ft:O(E)?(ne=i(E),x(P.el=E.content.firstChild,E,M)):ve!==8||y?ne=T():ne=i(E);break;case al:if(y&&(E=i(E),ve=E.nodeType),ve===1||ve===3){ne=E;const he=!P.children.length;for(let te=0;te<P.staticCount;te++)he&&(P.children+=ne.nodeType===1?ne.outerHTML:ne.data),te===P.staticCount-1&&(P.anchor=ne),ne=i(ne);return y?i(ne):ne}else T();break;case zt:y?ne=I(E,P,M,F,b,v):ne=T();break;default:if(w&1)(ve!==1||P.type.toLowerCase()!==E.tagName.toLowerCase())&&!O(E)?ne=T():ne=p(E,P,M,F,b,v);else if(w&6){P.slotScopeIds=b;const he=o(E);if(y?ne=N(E):Xr(E)&&E.data==="teleport start"?ne=N(E,E.data,"teleport end"):ne=i(E),e(P,he,null,M,F,Ha(he),v),gr(P)&&!P.type.__asyncResolved){let te;y?(te=et(zt),te.anchor=ne?ne.previousSibling:he.lastChild):te=E.nodeType===3?zv(""):et("div"),te.el=E,P.component.subTree=te}}else w&64?ve!==8?ne=T():ne=P.type.hydrate(E,P,M,F,b,v,t,m):w&128&&(ne=P.type.hydrate(E,P,M,F,Ha(o(E)),b,v,t,f))}return A!=null&&Fo(A,null,F,P),ne},p=(E,P,M,F,b,v)=>{v=v||!!P.dynamicChildren;const{type:y,props:T,patchFlag:S,shapeFlag:A,dirs:w,transition:ge}=P,ve=y==="input"||y==="option";if(ve||S!==-1){w&&Sn(P,null,M,"created");let ne=!1;if(O(E)){ne=Dv(null,ge)&&M&&M.vnode.props&&M.vnode.props.appear;const te=E.content.firstChild;ne&&ge.beforeEnter(te),x(te,E,M),P.el=E=te}if(A&16&&!(T&&(T.innerHTML||T.textContent))){let te=m(E.firstChild,P,E,M,F,b,v);for(;te;){$a(E,1)||jr();const Ge=te;te=te.nextSibling,a(Ge)}}else if(A&8){let te=P.children;te[0]===`
`&&(E.tagName==="PRE"||E.tagName==="TEXTAREA")&&(te=te.slice(1)),E.textContent!==te&&($a(E,0)||jr(),E.textContent=P.children)}if(T){if(ve||!v||S&48){const te=E.tagName.includes("-");for(const Ge in T)(ve&&(Ge.endsWith("value")||Ge==="indeterminate")||ta(Ge)&&!si(Ge)||Ge[0]==="."||te)&&s(E,Ge,null,T[Ge],void 0,M)}else if(T.onClick)s(E,"onClick",null,T.onClick,void 0,M);else if(S&4&&pr(T.style))for(const te in T.style)T.style[te]}let he;(he=T&&T.onVnodeBeforeMount)&&Ht(he,M,P),w&&Sn(P,null,M,"beforeMount"),((he=T&&T.onVnodeMounted)||w||ne)&&Bv(()=>{he&&Ht(he,M,P),ne&&ge.enter(E),w&&Sn(P,null,M,"mounted")},F)}return E.nextSibling},m=(E,P,M,F,b,v,y)=>{y=y||!!P.dynamicChildren;const T=P.children,S=T.length;for(let A=0;A<S;A++){const w=y?T[A]:T[A]=Gt(T[A]),ge=w.type===yr;E?(ge&&!y&&A+1<S&&Gt(T[A+1]).type===yr&&(c(r(E.data.slice(w.children.length)),M,i(E)),E.data=w.children),E=f(E,w,F,b,v,y)):ge&&!w.children?c(w.el=r(""),M):($a(M,1)||jr(),n(null,w,M,null,F,b,Ha(M),v))}return E},I=(E,P,M,F,b,v)=>{const{slotScopeIds:y}=P;y&&(b=b?b.concat(y):y);const T=o(E),S=m(i(E),P,T,M,F,b,v);return S&&Xr(S)&&S.data==="]"?i(P.anchor=S):(jr(),c(P.anchor=u("]"),T,S),S)},k=(E,P,M,F,b,v)=>{if($a(E.parentElement,1)||jr(),P.el=null,v){const S=N(E);for(;;){const A=i(E);if(A&&A!==S)a(A);else break}}const y=i(E),T=o(E);return a(E),n(null,P,T,y,M,F,Ha(T),b),M&&(M.vnode.el=P.el,Pc(M,P.el)),y},N=(E,P="[",M="]")=>{let F=0;for(;E;)if(E=i(E),E&&Xr(E)&&(E.data===P&&F++,E.data===M)){if(F===0)return i(E);F--}return E},x=(E,P,M)=>{const F=P.parentNode;F&&F.replaceChild(E,P);let b=M;for(;b;)b.vnode.el===P&&(b.vnode.el=b.subTree.el=E),b=b.parent},O=E=>E.nodeType===1&&E.tagName==="TEMPLATE";return[h,f]}const lg="data-allow-mismatch",Hb={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function $a(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(lg);)t=t.parentElement;const n=t&&t.getAttribute(lg);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:n.split(",").includes(Hb[e])}}wc().requestIdleCallback;wc().cancelIdleCallback;function $b(t,e){if(Xr(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(Xr(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const gr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function cg(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:o,suspensible:a=!0,onError:c}=t;let u=null,h,f=0;const p=()=>(f++,u=null,m()),m=()=>{let I;return u||(I=u=e().catch(k=>{if(k=k instanceof Error?k:new Error(String(k)),c)return new Promise((N,x)=>{c(k,()=>N(p()),()=>x(k),f+1)});throw k}).then(k=>I!==u&&u?u:(k&&(k.__esModule||k[Symbol.toStringTag]==="Module")&&(k=k.default),h=k,k)))};return ia({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(I,k,N){const x=i?()=>{const O=i(N,E=>$b(I,E));O&&(k.bum||(k.bum=[])).push(O)}:N;h?x():m().then(()=>!k.isUnmounted&&x())},get __asyncResolved(){return h},setup(){const I=it;if(jf(I),h)return()=>Su(h,I);const k=E=>{u=null,Ni(E,I,13,!s)};if(a&&I.suspense||_i)return m().then(E=>()=>Su(E,I)).catch(E=>(k(E),()=>s?et(s,{error:E}):null));const N=is(!1),x=is(),O=is(!!r);return r&&setTimeout(()=>{O.value=!1},r),o!=null&&setTimeout(()=>{if(!N.value&&!x.value){const E=new Error(`Async component timed out after ${o}ms.`);k(E),x.value=E}},o),m().then(()=>{N.value=!0,I.parent&&oa(I.parent.vnode)&&I.parent.update()}).catch(E=>{k(E),x.value=E}),()=>{if(N.value&&h)return Su(h,I);if(x.value&&s)return et(s,{error:x.value});if(n&&!O.value)return et(n)}}})}function Su(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=et(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const oa=t=>t.type.__isKeepAlive,jb={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=kc(),s=n.ctx;if(!s.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:c,m:u,um:h,o:{createElement:f}}}=s,p=f("div");s.activate=(O,E,P,M,F)=>{const b=O.component;u(O,E,P,0,a),c(b.vnode,O,E,P,b,a,M,O.slotScopeIds,F),_t(()=>{b.isDeactivated=!1,b.a&&ri(b.a);const v=O.props&&O.props.onVnodeMounted;v&&Ht(v,b.parent,O)},a)},s.deactivate=O=>{const E=O.component;kl(E.m),kl(E.a),u(O,p,null,1,a),_t(()=>{E.da&&ri(E.da);const P=O.props&&O.props.onVnodeUnmounted;P&&Ht(P,E.parent,O),E.isDeactivated=!0},a)};function m(O){Pu(O),h(O,n,a,!0)}function I(O){r.forEach((E,P)=>{const M=bh(E.type);M&&!O(M)&&k(P)})}function k(O){const E=r.get(O);E&&(!o||!fn(E,o))?m(E):o&&Pu(o),r.delete(O),i.delete(O)}_r(()=>[t.include,t.exclude],([O,E])=>{O&&I(P=>uo(O,P)),E&&I(P=>!uo(E,P))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(Nl(n.subTree.type)?_t(()=>{r.set(N,ja(n.subTree))},n.subTree.suspense):r.set(N,ja(n.subTree)))};return Cc(x),pv(x),Wf(()=>{r.forEach(O=>{const{subTree:E,suspense:P}=n,M=ja(E);if(O.type===M.type&&O.key===M.key){Pu(M);const F=M.component.da;F&&_t(F,P);return}m(O)})}),()=>{if(N=null,!e.default)return o=null;const O=e.default(),E=O[0];if(O.length>1)return o=null,O;if(!mi(E)||!(E.shapeFlag&4)&&!(E.shapeFlag&128))return o=null,E;let P=ja(E);if(P.type===ft)return o=null,P;const M=P.type,F=bh(gr(P)?P.type.__asyncResolved||{}:M),{include:b,exclude:v,max:y}=t;if(b&&(!F||!uo(b,F))||v&&F&&uo(v,F))return P.shapeFlag&=-257,o=P,E;const T=P.key==null?M:P.key,S=r.get(T);return P.el&&(P=ls(P),E.shapeFlag&128&&(E.ssContent=P)),N=T,S?(P.el=S.el,P.component=S.component,P.transition&&pi(P,P.transition),P.shapeFlag|=512,i.delete(T),i.add(T)):(i.add(T),y&&i.size>parseInt(y,10)&&k(i.values().next().value)),P.shapeFlag|=256,o=P,Nl(E.type)?E:P}}},Wb=jb;function uo(t,e){return ue(t)?t.some(n=>uo(n,e)):ze(t)?t.split(",").includes(e):q0(t)?(t.lastIndex=0,t.test(e)):!1}function qb(t,e){dv(t,"a",e)}function Kb(t,e){dv(t,"da",e)}function dv(t,e,n=it){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ac(e,s,n),n){let r=n.parent;for(;r&&r.parent;)oa(r.parent.vnode)&&zb(s,e,n,r),r=r.parent}}function zb(t,e,n,s){const r=Ac(e,t,s,!0);gv(()=>{Df(s[e],r)},n)}function Pu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ja(t){return t.shapeFlag&128?t.ssContent:t}function Ac(t,e,n=it,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{zs();const a=aa(n),c=Tn(e,n,t,o);return a(),Gs(),c});return s?r.unshift(i):r.push(i),i}}const ds=t=>(e,n=it)=>{(!_i||t==="sp")&&Ac(t,(...s)=>e(...s),n)},Gb=ds("bm"),Cc=ds("m"),Qb=ds("bu"),pv=ds("u"),Wf=ds("bum"),gv=ds("um"),Yb=ds("sp"),Xb=ds("rtg"),Jb=ds("rtc");function mv(t,e=it){Ac("ec",t,e)}const _v="components";function v2(t,e){return vv(_v,t,!0,e)||t}const yv=Symbol.for("v-ndc");function Zb(t){return ze(t)?vv(_v,t,!1)||t:t||yv}function vv(t,e,n=!0,s=!1){const r=Ut||it;if(r){const i=r.type;{const a=bh(i,!1);if(a&&(a===e||a===rn(e)||a===Tc(rn(e))))return i}const o=ug(r[t]||i[t],e)||ug(r.appContext[t],e);return!o&&s?i:o}}function ug(t,e){return t&&(t[e]||t[rn(e)]||t[Tc(rn(e))])}function E2(t,e,n,s){let r;const i=n,o=ue(t);if(o||ze(t)){const a=o&&pr(t);let c=!1;a&&(c=!sn(t),t=Rc(t)),r=new Array(t.length);for(let u=0,h=t.length;u<h;u++)r[u]=e(c?St(t[u]):t[u],u,void 0,i)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,i)}else if(Be(t))if(t[Symbol.iterator])r=Array.from(t,(a,c)=>e(a,c,void 0,i));else{const a=Object.keys(t);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const h=a[c];r[c]=e(t[h],h,c,i)}}else r=[];return r}const _h=t=>t?Gv(t)?Nc(t):_h(t.parent):null,vo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>_h(t.parent),$root:t=>_h(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qf(t),$forceUpdate:t=>t.f||(t.f=()=>{$f(t.update)}),$nextTick:t=>t.n||(t.n=ra.bind(t.proxy)),$watch:t=>vR.bind(t)}),ku=(t,e)=>t!==Fe&&!t.__isScriptSetup&&Oe(t,e),eR={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:c}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(ku(s,e))return o[e]=1,s[e];if(r!==Fe&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];yh&&(o[e]=0)}}const h=vo[e];let f,p;if(h)return e==="$attrs"&&Ct(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Fe&&Oe(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return ku(r,e)?(r[e]=n,!0):s!==Fe&&Oe(s,e)?(s[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Fe&&Oe(t,o)||ku(e,o)||(a=i[0])&&Oe(a,o)||Oe(s,o)||Oe(vo,o)||Oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function hg(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let yh=!0;function tR(t){const e=qf(t),n=t.proxy,s=t.ctx;yh=!1,e.beforeCreate&&fg(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:c,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:I,activated:k,deactivated:N,beforeDestroy:x,beforeUnmount:O,destroyed:E,unmounted:P,render:M,renderTracked:F,renderTriggered:b,errorCaptured:v,serverPrefetch:y,expose:T,inheritAttrs:S,components:A,directives:w,filters:ge}=e;if(u&&nR(u,s,null),o)for(const he in o){const te=o[he];fe(te)&&(s[he]=te.bind(n))}if(r){const he=r.call(n,n);Be(he)&&(t.data=Qs(he))}if(yh=!0,i)for(const he in i){const te=i[he],Ge=fe(te)?te.bind(n,n):fe(te.get)?te.get.bind(n,n):Dn,cn=!fe(te)&&fe(te.set)?te.set.bind(n):Dn,Jt=dn({get:Ge,set:cn});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>Jt.value,set:Qe=>Jt.value=Qe})}if(a)for(const he in a)Ev(a[he],s,n,he);if(c){const he=fe(c)?c.call(n):c;Reflect.ownKeys(he).forEach(te=>{oi(te,he[te])})}h&&fg(h,t,"c");function ne(he,te){ue(te)?te.forEach(Ge=>he(Ge.bind(n))):te&&he(te.bind(n))}if(ne(Gb,f),ne(Cc,p),ne(Qb,m),ne(pv,I),ne(qb,k),ne(Kb,N),ne(mv,v),ne(Jb,F),ne(Xb,b),ne(Wf,O),ne(gv,P),ne(Yb,y),ue(T))if(T.length){const he=t.exposed||(t.exposed={});T.forEach(te=>{Object.defineProperty(he,te,{get:()=>n[te],set:Ge=>n[te]=Ge})})}else t.exposed||(t.exposed={});M&&t.render===Dn&&(t.render=M),S!=null&&(t.inheritAttrs=S),A&&(t.components=A),w&&(t.directives=w),y&&jf(t)}function nR(t,e,n=Dn){ue(t)&&(t=vh(t));for(const s in t){const r=t[s];let i;Be(r)?"default"in r?i=Dt(r.from||s,r.default,!0):i=Dt(r.from||s):i=Dt(r),pt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function fg(t,e,n){Tn(ue(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ev(t,e,n,s){let r=s.includes(".")?Lv(n,s):()=>n[s];if(ze(t)){const i=e[t];fe(i)&&_r(r,i)}else if(fe(t))_r(r,t.bind(n));else if(Be(t))if(ue(t))t.forEach(i=>Ev(i,e,n,s));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&_r(r,i,t)}}function qf(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!r.length&&!n&&!s?c=e:(c={},r.length&&r.forEach(u=>Pl(c,u,o,!0)),Pl(c,e,o)),Be(e)&&i.set(e,c),c}function Pl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Pl(t,i,n,!0),r&&r.forEach(o=>Pl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=sR[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const sR={data:dg,props:pg,emits:pg,methods:ho,computed:ho,beforeCreate:Vt,created:Vt,beforeMount:Vt,mounted:Vt,beforeUpdate:Vt,updated:Vt,beforeDestroy:Vt,beforeUnmount:Vt,destroyed:Vt,unmounted:Vt,activated:Vt,deactivated:Vt,errorCaptured:Vt,serverPrefetch:Vt,components:ho,directives:ho,watch:iR,provide:dg,inject:rR};function dg(t,e){return e?t?function(){return st(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function rR(t,e){return ho(vh(t),vh(e))}function vh(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ho(t,e){return t?st(Object.create(null),t,e):e}function pg(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:st(Object.create(null),hg(t),hg(e??{})):e}function iR(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const s in e)n[s]=Vt(t[s],e[s]);return n}function Tv(){return{app:null,config:{isNativeTag:j0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oR=0;function aR(t,e){return function(s,r=null){fe(s)||(s=st({},s)),r!=null&&!Be(r)&&(r=null);const i=Tv(),o=new WeakSet,a=[];let c=!1;const u=i.app={_uid:oR++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Yv,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...f)):fe(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!c){const m=u._ceVNode||et(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,h):t(m,h,p),c=!0,u._container=h,h.__vue_app__=u,Nc(m.component)}},onUnmount(h){a.push(h)},unmount(){c&&(Tn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=mr;mr=u;try{return h()}finally{mr=f}}};return u}}let mr=null;function oi(t,e){if(it){let n=it.provides;const s=it.parent&&it.parent.provides;s===n&&(n=it.provides=Object.create(s)),n[t]=e}}function Dt(t,e,n=!1){const s=it||Ut;if(s||mr){const r=mr?mr._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&fe(e)?e.call(s&&s.proxy):e}}function wv(){return!!(it||Ut||mr)}const Iv={},bv=()=>Object.create(Iv),Rv=t=>Object.getPrototypeOf(t)===Iv;function lR(t,e,n,s=!1){const r={},i=bv();t.propsDefaults=Object.create(null),Av(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:Zn(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function cR(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Pe(r),[c]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(Sc(t.emitsOptions,p))continue;const m=e[p];if(c)if(Oe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const I=rn(p);r[I]=Eh(c,a,I,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Av(t,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=Sr(f))===f||!Oe(e,h)))&&(c?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=Eh(c,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Oe(e,f))&&(delete i[f],u=!0)}u&&Xn(t.attrs,"set","")}function Av(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(si(c))continue;const u=e[c];let h;r&&Oe(r,h=rn(c))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Sc(t.emitsOptions,c)||(!(c in s)||u!==s[c])&&(s[c]=u,o=!0)}if(i){const c=Pe(n),u=a||Fe;for(let h=0;h<i.length;h++){const f=i[h];n[f]=Eh(r,c,f,u[f],t,!Oe(u,f))}}return o}function Eh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&s===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&fe(c)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=aa(r);s=u[n]=c.call(null,e),h()}}else s=c;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Sr(n))&&(s=!0))}return s}const uR=new WeakMap;function Cv(t,e,n=!1){const s=n?uR:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let c=!1;if(!fe(t)){const h=f=>{c=!0;const[p,m]=Cv(f,e,!0);st(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!c)return Be(t)&&s.set(t,ti),ti;if(ue(i))for(let h=0;h<i.length;h++){const f=rn(i[h]);gg(f)&&(o[f]=Fe)}else if(i)for(const h in i){const f=rn(h);if(gg(f)){const p=i[h],m=o[f]=ue(p)||fe(p)?{type:p}:st({},p),I=m.type;let k=!1,N=!0;if(ue(I))for(let x=0;x<I.length;++x){const O=I[x],E=fe(O)&&O.name;if(E==="Boolean"){k=!0;break}else E==="String"&&(N=!1)}else k=fe(I)&&I.name==="Boolean";m[0]=k,m[1]=N,(k||Oe(m,"default"))&&a.push(f)}}const u=[o,a];return Be(t)&&s.set(t,u),u}function gg(t){return t[0]!=="$"&&!si(t)}const Sv=t=>t[0]==="_"||t==="$stable",Kf=t=>ue(t)?t.map(Gt):[Gt(t)],hR=(t,e,n)=>{if(e._n)return e;const s=ov((...r)=>Kf(e(...r)),n);return s._c=!1,s},Pv=(t,e,n)=>{const s=t._ctx;for(const r in t){if(Sv(r))continue;const i=t[r];if(fe(i))e[r]=hR(r,i,s);else if(i!=null){const o=Kf(i);e[r]=()=>o}}},kv=(t,e)=>{const n=Kf(e);t.slots.default=()=>n},Nv=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},fR=(t,e,n)=>{const s=t.slots=bv();if(t.vnode.shapeFlag&32){const r=e._;r?(Nv(s,e,n),n&&Ny(s,"_",r,!0)):Pv(e,s)}else e&&kv(t,e)},dR=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Fe;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Nv(r,e,n):(i=!e.$stable,Pv(e,r)),o=e}else e&&(kv(t,e),o={default:1});if(i)for(const a in r)!Sv(a)&&o[a]==null&&delete r[a]},_t=Bv;function pR(t){return Ov(t)}function gR(t){return Ov(t,Bb)}function Ov(t,e){const n=wc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=Dn,insertStaticContent:I}=t,k=(R,C,L,$=null,U=null,W=null,Q=void 0,z=null,K=!!C.dynamicChildren)=>{if(R===C)return;R&&!fn(R,C)&&($=B(R),Qe(R,U,W,!0),R=null),C.patchFlag===-2&&(K=!1,C.dynamicChildren=null);const{type:q,ref:ae,shapeFlag:J}=C;switch(q){case yr:N(R,C,L,$);break;case ft:x(R,C,L,$);break;case al:R==null&&O(C,L,$,Q);break;case zt:A(R,C,L,$,U,W,Q,z,K);break;default:J&1?M(R,C,L,$,U,W,Q,z,K):J&6?w(R,C,L,$,U,W,Q,z,K):(J&64||J&128)&&q.process(R,C,L,$,U,W,Q,z,K,se)}ae!=null&&U&&Fo(ae,R&&R.ref,W,C||R,!C)},N=(R,C,L,$)=>{if(R==null)s(C.el=a(C.children),L,$);else{const U=C.el=R.el;C.children!==R.children&&u(U,C.children)}},x=(R,C,L,$)=>{R==null?s(C.el=c(C.children||""),L,$):C.el=R.el},O=(R,C,L,$)=>{[R.el,R.anchor]=I(R.children,C,L,$,R.el,R.anchor)},E=({el:R,anchor:C},L,$)=>{let U;for(;R&&R!==C;)U=p(R),s(R,L,$),R=U;s(C,L,$)},P=({el:R,anchor:C})=>{let L;for(;R&&R!==C;)L=p(R),r(R),R=L;r(C)},M=(R,C,L,$,U,W,Q,z,K)=>{C.type==="svg"?Q="svg":C.type==="math"&&(Q="mathml"),R==null?F(C,L,$,U,W,Q,z,K):y(R,C,U,W,Q,z,K)},F=(R,C,L,$,U,W,Q,z)=>{let K,q;const{props:ae,shapeFlag:J,transition:ie,dirs:re}=R;if(K=R.el=o(R.type,W,ae&&ae.is,ae),J&8?h(K,R.children):J&16&&v(R.children,K,null,$,U,Nu(R,W),Q,z),re&&Sn(R,null,$,"created"),b(K,R,R.scopeId,Q,$),ae){for(const ke in ae)ke!=="value"&&!si(ke)&&i(K,ke,null,ae[ke],W,$);"value"in ae&&i(K,"value",null,ae.value,W),(q=ae.onVnodeBeforeMount)&&Ht(q,$,R)}re&&Sn(R,null,$,"beforeMount");const ce=Dv(U,ie);ce&&ie.beforeEnter(K),s(K,C,L),((q=ae&&ae.onVnodeMounted)||ce||re)&&_t(()=>{q&&Ht(q,$,R),ce&&ie.enter(K),re&&Sn(R,null,$,"mounted")},U)},b=(R,C,L,$,U)=>{if(L&&m(R,L),$)for(let W=0;W<$.length;W++)m(R,$[W]);if(U){let W=U.subTree;if(C===W||Nl(W.type)&&(W.ssContent===C||W.ssFallback===C)){const Q=U.vnode;b(R,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},v=(R,C,L,$,U,W,Q,z,K=0)=>{for(let q=K;q<R.length;q++){const ae=R[q]=z?bs(R[q]):Gt(R[q]);k(null,ae,C,L,$,U,W,Q,z)}},y=(R,C,L,$,U,W,Q)=>{const z=C.el=R.el;let{patchFlag:K,dynamicChildren:q,dirs:ae}=C;K|=R.patchFlag&16;const J=R.props||Fe,ie=C.props||Fe;let re;if(L&&tr(L,!1),(re=ie.onVnodeBeforeUpdate)&&Ht(re,L,C,R),ae&&Sn(C,R,L,"beforeUpdate"),L&&tr(L,!0),(J.innerHTML&&ie.innerHTML==null||J.textContent&&ie.textContent==null)&&h(z,""),q?T(R.dynamicChildren,q,z,L,$,Nu(C,U),W):Q||te(R,C,z,null,L,$,Nu(C,U),W,!1),K>0){if(K&16)S(z,J,ie,L,U);else if(K&2&&J.class!==ie.class&&i(z,"class",null,ie.class,U),K&4&&i(z,"style",J.style,ie.style,U),K&8){const ce=C.dynamicProps;for(let ke=0;ke<ce.length;ke++){const Ce=ce[ke],Tt=J[Ce],lt=ie[Ce];(lt!==Tt||Ce==="value")&&i(z,Ce,Tt,lt,U,L)}}K&1&&R.children!==C.children&&h(z,C.children)}else!Q&&q==null&&S(z,J,ie,L,U);((re=ie.onVnodeUpdated)||ae)&&_t(()=>{re&&Ht(re,L,C,R),ae&&Sn(C,R,L,"updated")},$)},T=(R,C,L,$,U,W,Q)=>{for(let z=0;z<C.length;z++){const K=R[z],q=C[z],ae=K.el&&(K.type===zt||!fn(K,q)||K.shapeFlag&70)?f(K.el):L;k(K,q,ae,null,$,U,W,Q,!0)}},S=(R,C,L,$,U)=>{if(C!==L){if(C!==Fe)for(const W in C)!si(W)&&!(W in L)&&i(R,W,C[W],null,U,$);for(const W in L){if(si(W))continue;const Q=L[W],z=C[W];Q!==z&&W!=="value"&&i(R,W,z,Q,U,$)}"value"in L&&i(R,"value",C.value,L.value,U)}},A=(R,C,L,$,U,W,Q,z,K)=>{const q=C.el=R?R.el:a(""),ae=C.anchor=R?R.anchor:a("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:re}=C;re&&(z=z?z.concat(re):re),R==null?(s(q,L,$),s(ae,L,$),v(C.children||[],L,ae,U,W,Q,z,K)):J>0&&J&64&&ie&&R.dynamicChildren?(T(R.dynamicChildren,ie,L,U,W,Q,z),(C.key!=null||U&&C===U.subTree)&&xv(R,C,!0)):te(R,C,L,ae,U,W,Q,z,K)},w=(R,C,L,$,U,W,Q,z,K)=>{C.slotScopeIds=z,R==null?C.shapeFlag&512?U.ctx.activate(C,L,$,Q,K):ge(C,L,$,U,W,Q,K):ve(R,C,K)},ge=(R,C,L,$,U,W,Q)=>{const z=R.component=LR(R,$,U);if(oa(R)&&(z.ctx.renderer=se),VR(z,!1,Q),z.asyncDep){if(U&&U.registerDep(z,ne,Q),!R.el){const K=z.subTree=et(ft);x(null,K,C,L)}}else ne(z,R,C,L,U,W,Q)},ve=(R,C,L)=>{const $=C.component=R.component;if(RR(R,C,L))if($.asyncDep&&!$.asyncResolved){he($,C,L);return}else $.next=C,$.update();else C.el=R.el,$.vnode=C},ne=(R,C,L,$,U,W,Q)=>{const z=()=>{if(R.isMounted){let{next:J,bu:ie,u:re,parent:ce,vnode:ke}=R;{const wt=Mv(R);if(wt){J&&(J.el=ke.el,he(R,J,Q)),wt.asyncDep.then(()=>{R.isUnmounted||z()});return}}let Ce=J,Tt;tr(R,!1),J?(J.el=ke.el,he(R,J,Q)):J=ke,ie&&ri(ie),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&Ht(Tt,ce,J,ke),tr(R,!0);const lt=Ou(R),gt=R.subTree;R.subTree=lt,k(gt,lt,f(gt.el),B(gt),R,U,W),J.el=lt.el,Ce===null&&Pc(R,lt.el),re&&_t(re,U),(Tt=J.props&&J.props.onVnodeUpdated)&&_t(()=>Ht(Tt,ce,J,ke),U)}else{let J;const{el:ie,props:re}=C,{bm:ce,m:ke,parent:Ce,root:Tt,type:lt}=R,gt=gr(C);if(tr(R,!1),ce&&ri(ce),!gt&&(J=re&&re.onVnodeBeforeMount)&&Ht(J,Ce,C),tr(R,!0),ie&&Me){const wt=()=>{R.subTree=Ou(R),Me(ie,R.subTree,R,U,null)};gt&&lt.__asyncHydrate?lt.__asyncHydrate(ie,R,wt):wt()}else{Tt.ce&&Tt.ce._injectChildStyle(lt);const wt=R.subTree=Ou(R);k(null,wt,L,$,R,U,W),C.el=wt.el}if(ke&&_t(ke,U),!gt&&(J=re&&re.onVnodeMounted)){const wt=C;_t(()=>Ht(J,Ce,wt),U)}(C.shapeFlag&256||Ce&&gr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&R.a&&_t(R.a,U),R.isMounted=!0,C=L=$=null}};R.scope.on();const K=R.effect=new Uy(z);R.scope.off();const q=R.update=K.run.bind(K),ae=R.job=K.runIfDirty.bind(K);ae.i=R,ae.id=R.uid,K.scheduler=()=>$f(ae),tr(R,!0),q()},he=(R,C,L)=>{C.component=R;const $=R.vnode.props;R.vnode=C,R.next=null,cR(R,C.props,$,L),dR(R,C.children,L),zs(),ig(R),Gs()},te=(R,C,L,$,U,W,Q,z,K=!1)=>{const q=R&&R.children,ae=R?R.shapeFlag:0,J=C.children,{patchFlag:ie,shapeFlag:re}=C;if(ie>0){if(ie&128){cn(q,J,L,$,U,W,Q,z,K);return}else if(ie&256){Ge(q,J,L,$,U,W,Q,z,K);return}}re&8?(ae&16&&Bt(q,U,W),J!==q&&h(L,J)):ae&16?re&16?cn(q,J,L,$,U,W,Q,z,K):Bt(q,U,W,!0):(ae&8&&h(L,""),re&16&&v(J,L,$,U,W,Q,z,K))},Ge=(R,C,L,$,U,W,Q,z,K)=>{R=R||ti,C=C||ti;const q=R.length,ae=C.length,J=Math.min(q,ae);let ie;for(ie=0;ie<J;ie++){const re=C[ie]=K?bs(C[ie]):Gt(C[ie]);k(R[ie],re,L,null,U,W,Q,z,K)}q>ae?Bt(R,U,W,!0,!1,J):v(C,L,$,U,W,Q,z,K,J)},cn=(R,C,L,$,U,W,Q,z,K)=>{let q=0;const ae=C.length;let J=R.length-1,ie=ae-1;for(;q<=J&&q<=ie;){const re=R[q],ce=C[q]=K?bs(C[q]):Gt(C[q]);if(fn(re,ce))k(re,ce,L,null,U,W,Q,z,K);else break;q++}for(;q<=J&&q<=ie;){const re=R[J],ce=C[ie]=K?bs(C[ie]):Gt(C[ie]);if(fn(re,ce))k(re,ce,L,null,U,W,Q,z,K);else break;J--,ie--}if(q>J){if(q<=ie){const re=ie+1,ce=re<ae?C[re].el:$;for(;q<=ie;)k(null,C[q]=K?bs(C[q]):Gt(C[q]),L,ce,U,W,Q,z,K),q++}}else if(q>ie)for(;q<=J;)Qe(R[q],U,W,!0),q++;else{const re=q,ce=q,ke=new Map;for(q=ce;q<=ie;q++){const Mt=C[q]=K?bs(C[q]):Gt(C[q]);Mt.key!=null&&ke.set(Mt.key,q)}let Ce,Tt=0;const lt=ie-ce+1;let gt=!1,wt=0;const ms=new Array(lt);for(q=0;q<lt;q++)ms[q]=0;for(q=re;q<=J;q++){const Mt=R[q];if(Tt>=lt){Qe(Mt,U,W,!0);continue}let Zt;if(Mt.key!=null)Zt=ke.get(Mt.key);else for(Ce=ce;Ce<=ie;Ce++)if(ms[Ce-ce]===0&&fn(Mt,C[Ce])){Zt=Ce;break}Zt===void 0?Qe(Mt,U,W,!0):(ms[Zt-ce]=q+1,Zt>=wt?wt=Zt:gt=!0,k(Mt,C[Zt],L,null,U,W,Q,z,K),Tt++)}const Lr=gt?mR(ms):ti;for(Ce=Lr.length-1,q=lt-1;q>=0;q--){const Mt=ce+q,Zt=C[Mt],Vr=Mt+1<ae?C[Mt+1].el:$;ms[q]===0?k(null,Zt,L,Vr,U,W,Q,z,K):gt&&(Ce<0||q!==Lr[Ce]?Jt(Zt,L,Vr,2):Ce--)}}},Jt=(R,C,L,$,U=null)=>{const{el:W,type:Q,transition:z,children:K,shapeFlag:q}=R;if(q&6){Jt(R.component.subTree,C,L,$);return}if(q&128){R.suspense.move(C,L,$);return}if(q&64){Q.move(R,C,L,se);return}if(Q===zt){s(W,C,L);for(let J=0;J<K.length;J++)Jt(K[J],C,L,$);s(R.anchor,C,L);return}if(Q===al){E(R,C,L);return}if($!==2&&q&1&&z)if($===0)z.beforeEnter(W),s(W,C,L),_t(()=>z.enter(W),U);else{const{leave:J,delayLeave:ie,afterLeave:re}=z,ce=()=>s(W,C,L),ke=()=>{J(W,()=>{ce(),re&&re()})};ie?ie(W,ce,ke):ke()}else s(W,C,L)},Qe=(R,C,L,$=!1,U=!1)=>{const{type:W,props:Q,ref:z,children:K,dynamicChildren:q,shapeFlag:ae,patchFlag:J,dirs:ie,cacheIndex:re}=R;if(J===-2&&(U=!1),z!=null&&Fo(z,null,L,R,!0),re!=null&&(C.renderCache[re]=void 0),ae&256){C.ctx.deactivate(R);return}const ce=ae&1&&ie,ke=!gr(R);let Ce;if(ke&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&Ht(Ce,C,R),ae&6)Rn(R.component,L,$);else{if(ae&128){R.suspense.unmount(L,$);return}ce&&Sn(R,null,C,"beforeUnmount"),ae&64?R.type.remove(R,C,L,se,$):q&&!q.hasOnce&&(W!==zt||J>0&&J&64)?Bt(q,C,L,!1,!0):(W===zt&&J&384||!U&&ae&16)&&Bt(K,C,L),$&&Ye(R)}(ke&&(Ce=Q&&Q.onVnodeUnmounted)||ce)&&_t(()=>{Ce&&Ht(Ce,C,R),ce&&Sn(R,null,C,"unmounted")},L)},Ye=R=>{const{type:C,el:L,anchor:$,transition:U}=R;if(C===zt){gs(L,$);return}if(C===al){P(R);return}const W=()=>{r(L),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(R.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:z}=U,K=()=>Q(L,W);z?z(R.el,W,K):K()}else W()},gs=(R,C)=>{let L;for(;R!==C;)L=p(R),r(R),R=L;r(C)},Rn=(R,C,L)=>{const{bum:$,scope:U,job:W,subTree:Q,um:z,m:K,a:q}=R;kl(K),kl(q),$&&ri($),U.stop(),W&&(W.flags|=8,Qe(Q,R,C,L)),z&&_t(z,C),_t(()=>{R.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&R.asyncDep&&!R.asyncResolved&&R.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},Bt=(R,C,L,$=!1,U=!1,W=0)=>{for(let Q=W;Q<R.length;Q++)Qe(R[Q],C,L,$,U)},B=R=>{if(R.shapeFlag&6)return B(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const C=p(R.anchor||R.el),L=C&&C[xb];return L?p(L):C};let Z=!1;const X=(R,C,L)=>{R==null?C._vnode&&Qe(C._vnode,null,null,!0):k(C._vnode||null,R,C,null,null,null,L),C._vnode=R,Z||(Z=!0,ig(),Cl(),Z=!1)},se={p:k,um:Qe,m:Jt,r:Ye,mt:ge,mc:v,pc:te,pbc:T,n:B,o:t};let Te,Me;return e&&([Te,Me]=e(se)),{render:X,hydrate:Te,createApp:aR(X,Te)}}function Nu({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function tr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Dv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function xv(t,e,n=!1){const s=t.children,r=e.children;if(ue(s)&&ue(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=bs(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&xv(o,a)),a.type===yr&&(a.el=o.el)}}function mR(t){const e=t.slice(),n=[0];let s,r,i,o,a;const c=t.length;for(s=0;s<c;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Mv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Mv(e)}function kl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _R=Symbol.for("v-scx"),yR=()=>Dt(_R);function T2(t,e){return zf(t,null,e)}function _r(t,e,n){return zf(t,e,n)}function zf(t,e,n=Fe){const{immediate:s,deep:r,flush:i,once:o}=n,a=st({},n),c=e&&s||!e&&i!=="post";let u;if(_i){if(i==="sync"){const m=yR();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!c){const m=()=>{};return m.stop=Dn,m.resume=Dn,m.pause=Dn,m}}const h=it;a.call=(m,I,k)=>Tn(m,h,I,k);let f=!1;i==="post"?a.scheduler=m=>{_t(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,I)=>{I?m():$f(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=Nb(t,e,a);return _i&&(u?u.push(p):c&&p()),p}function vR(t,e,n){const s=this.proxy,r=ze(t)?t.includes(".")?Lv(s,t):()=>s[t]:t.bind(s,s);let i;fe(e)?i=e:(i=e.handler,n=e);const o=aa(this),a=zf(r,i.bind(s),n);return o(),a}function Lv(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const ER=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${rn(e)}Modifiers`]||t[`${Sr(e)}Modifiers`];function TR(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Fe;let r=n;const i=e.startsWith("update:"),o=i&&ER(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>ze(h)?h.trim():h)),o.number&&(r=n.map(ch)));let a,c=s[a=wu(e)]||s[a=wu(rn(e))];!c&&i&&(c=s[a=wu(Sr(e))]),c&&Tn(c,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tn(u,t,6,r)}}function Vv(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!fe(t)){const c=u=>{const h=Vv(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Be(t)&&s.set(t,null),null):(ue(i)?i.forEach(c=>o[c]=null):st(o,i),Be(t)&&s.set(t,o),o)}function Sc(t,e){return!t||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Sr(e))||Oe(t,e))}function Ou(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:c,render:u,renderCache:h,props:f,data:p,setupState:m,ctx:I,inheritAttrs:k}=t,N=Sl(t);let x,O;try{if(n.shapeFlag&4){const P=r||s,M=P;x=Gt(u.call(M,P,h,f,m,p,I)),O=a}else{const P=e;x=Gt(P.length>1?P(f,{attrs:a,slots:o,emit:c}):P(f,null)),O=e.props?a:IR(a)}}catch(P){Eo.length=0,Ni(P,t,1),x=et(ft)}let E=x;if(O&&k!==!1){const P=Object.keys(O),{shapeFlag:M}=E;P.length&&M&7&&(i&&P.some(Of)&&(O=bR(O,i)),E=ls(E,O,!1,!0))}return n.dirs&&(E=ls(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&pi(E,n.transition),x=E,Sl(N),x}function wR(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(mi(r)){if(r.type!==ft||r.children==="v-if"){if(n)return;n=r}}else return}return n}const IR=t=>{let e;for(const n in t)(n==="class"||n==="style"||ta(n))&&((e||(e={}))[n]=t[n]);return e},bR=(t,e)=>{const n={};for(const s in t)(!Of(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function RR(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return s?mg(s,o,u):!!o;if(c&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==s[p]&&!Sc(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?mg(s,o,u):!0:!!o;return!1}function mg(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Sc(n,i))return!0}return!1}function Pc({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Nl=t=>t.__isSuspense;let Th=0;const AR={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,c,u){if(t==null)CR(e,n,s,r,i,o,a,c,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}SR(t,e,n,s,r,o,a,c,u)}},hydrate:PR,normalize:kR},Fv=AR;function Uo(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function CR(t,e,n,s,r,i,o,a,c){const{p:u,o:{createElement:h}}=c,f=h("div"),p=t.suspense=Uv(t,r,s,e,f,n,i,o,a,c);u(null,p.pendingBranch=t.ssContent,f,null,s,p,i,o),p.deps>0?(Uo(t,"onPending"),Uo(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),ai(p,t.ssFallback)):p.resolve(!1,!0)}function SR(t,e,n,s,r,i,o,a,{p:c,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:I,pendingBranch:k,isInFallback:N,isHydrating:x}=f;if(k)f.pendingBranch=p,fn(p,k)?(c(k,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():N&&(x||(c(I,m,n,s,r,null,i,o,a),ai(f,m)))):(f.pendingId=Th++,x?(f.isHydrating=!1,f.activeBranch=k):u(k,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),N?(c(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(c(I,m,n,s,r,null,i,o,a),ai(f,m))):I&&fn(p,I)?(c(I,p,n,s,r,f,i,o,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(I&&fn(p,I))c(I,p,n,s,r,f,i,o,a),ai(f,p);else if(Uo(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=Th++,c(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:O,pendingId:E}=f;O>0?setTimeout(()=>{f.pendingId===E&&f.fallback(m)},O):O===0&&f.fallback(m)}}function Uv(t,e,n,s,r,i,o,a,c,u,h=!1){const{p:f,m:p,um:m,n:I,o:{parentNode:k,remove:N}}=u;let x;const O=NR(t);O&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const E=t.props?Oy(t.props.timeout):void 0,P=i,M={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:Th++,timeout:typeof E=="number"?E:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(F=!1,b=!1){const{vnode:v,activeBranch:y,pendingBranch:T,pendingId:S,effects:A,parentComponent:w,container:ge}=M;let ve=!1;M.isHydrating?M.isHydrating=!1:F||(ve=y&&T.transition&&T.transition.mode==="out-in",ve&&(y.transition.afterLeave=()=>{S===M.pendingId&&(p(T,ge,i===P?I(y):i,0),gh(A))}),y&&(k(y.el)===ge&&(i=I(y)),m(y,w,M,!0)),ve||p(T,ge,i,0)),ai(M,T),M.pendingBranch=null,M.isInFallback=!1;let ne=M.parent,he=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...A),he=!0;break}ne=ne.parent}!he&&!ve&&gh(A),M.effects=[],O&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!b&&e.resolve()),Uo(v,"onResolve")},fallback(F){if(!M.pendingBranch)return;const{vnode:b,activeBranch:v,parentComponent:y,container:T,namespace:S}=M;Uo(b,"onFallback");const A=I(v),w=()=>{M.isInFallback&&(f(null,F,T,A,y,null,S,a,c),ai(M,F))},ge=F.transition&&F.transition.mode==="out-in";ge&&(v.transition.afterLeave=w),M.isInFallback=!0,m(v,y,null,!0),ge||w()},move(F,b,v){M.activeBranch&&p(M.activeBranch,F,b,v),M.container=F},next(){return M.activeBranch&&I(M.activeBranch)},registerDep(F,b,v){const y=!!M.pendingBranch;y&&M.deps++;const T=F.vnode.el;F.asyncDep.catch(S=>{Ni(S,F,0)}).then(S=>{if(F.isUnmounted||M.isUnmounted||M.pendingId!==F.suspenseId)return;F.asyncResolved=!0;const{vnode:A}=F;Ih(F,S,!1),T&&(A.el=T);const w=!T&&F.subTree.el;b(F,A,k(T||F.subTree.el),T?null:I(F.subTree),M,o,v),w&&N(w),Pc(F,A.el),y&&--M.deps===0&&M.resolve()})},unmount(F,b){M.isUnmounted=!0,M.activeBranch&&m(M.activeBranch,n,F,b),M.pendingBranch&&m(M.pendingBranch,n,F,b)}};return M}function PR(t,e,n,s,r,i,o,a,c){const u=e.suspense=Uv(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),h=c(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function kR(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=_g(s?n.default:n),t.ssFallback=s?_g(n.fallback):et(ft)}function _g(t){let e;if(fe(t)){const n=gi&&t._c;n&&(t._d=!1,Pn()),t=t(),n&&(t._d=!0,e=jt,Hv())}return ue(t)&&(t=wR(t)),t=Gt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Bv(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):gh(t)}function ai(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,Pc(s,r))}function NR(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const zt=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),ft=Symbol.for("v-cmt"),al=Symbol.for("v-stc"),Eo=[];let jt=null;function Pn(t=!1){Eo.push(jt=t?null:[])}function Hv(){Eo.pop(),jt=Eo[Eo.length-1]||null}let gi=1;function yg(t,e=!1){gi+=t,t<0&&jt&&e&&(jt.hasOnce=!0)}function $v(t){return t.dynamicChildren=gi>0?jt||ti:null,Hv(),gi>0&&jt&&jt.push(t),t}function jv(t,e,n,s,r,i){return $v(qv(t,e,n,s,r,i,!0))}function cr(t,e,n,s,r){return $v(et(t,e,n,s,r,!0))}function mi(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Wv=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||pt(t)||fe(t)?{i:Ut,r:t,k:e,f:!!n}:t:null);function qv(t,e=null,n=null,s=0,r=null,i=t===zt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wv(e),ref:e&&ll(e),scopeId:iv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ut};return a?(Gf(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=ze(n)?8:16),gi>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const et=OR;function OR(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===yv)&&(t=ft),mi(t)){const a=ls(t,e,!0);return n&&Gf(a,n),gi>0&&!i&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag=-2,a}if(HR(t)&&(t=t.__vccOpts),e){e=Kv(e);let{class:a,style:c}=e;a&&!ze(a)&&(e.class=bc(a)),Be(c)&&(Hf(c)&&!ue(c)&&(c=st({},c)),e.style=Ic(c))}const o=ze(t)?1:Nl(t)?128:av(t)?64:Be(t)?4:fe(t)?2:0;return qv(t,e,n,s,r,o,i,!0)}function Kv(t){return t?Hf(t)||Rv(t)?st({},t):t:null}function ls(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:c}=t,u=e?DR(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Wv(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(ll(e)):[i,ll(e)]:ll(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&s&&pi(h,c.clone(h)),h}function zv(t=" ",e=0){return et(yr,null,t,e)}function w2(t="",e=!1){return e?(Pn(),cr(ft,null,t)):et(ft,null,t)}function Gt(t){return t==null||typeof t=="boolean"?et(ft):ue(t)?et(zt,null,t.slice()):mi(t)?bs(t):et(yr,null,String(t))}function bs(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ls(t)}function Gf(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Gf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Rv(e)?e._ctx=Ut:r===3&&Ut&&(Ut.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ut},n=32):(e=String(e),s&64?(n=16,e=[zv(e)]):n=8);t.children=e,t.shapeFlag|=n}function DR(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=bc([e.class,s.class]));else if(r==="style")e.style=Ic([e.style,s.style]);else if(ta(r)){const i=e[r],o=s[r];o&&i!==o&&!(ue(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function Ht(t,e,n,s=null){Tn(t,e,7,[n,s])}const xR=Tv();let MR=0;function LR(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||xR,i={uid:MR++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ly(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cv(s,r),emitsOptions:Vv(s,r),emit:null,emitted:null,propsDefaults:Fe,inheritAttrs:s.inheritAttrs,ctx:Fe,data:Fe,props:Fe,attrs:Fe,slots:Fe,refs:Fe,setupState:Fe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=TR.bind(null,i),t.ce&&t.ce(i),i}let it=null;const kc=()=>it||Ut;let Ol,wh;{const t=wc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Ol=e("__VUE_INSTANCE_SETTERS__",n=>it=n),wh=e("__VUE_SSR_SETTERS__",n=>_i=n)}const aa=t=>{const e=it;return Ol(t),t.scope.on(),()=>{t.scope.off(),Ol(e)}},vg=()=>{it&&it.scope.off(),Ol(null)};function Gv(t){return t.vnode.shapeFlag&4}let _i=!1;function VR(t,e=!1,n=!1){e&&wh(e);const{props:s,children:r}=t.vnode,i=Gv(t);lR(t,s,i,e),fR(t,r,n);const o=i?FR(t,e):void 0;return e&&wh(!1),o}function FR(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eR);const{setup:s}=n;if(s){zs();const r=t.setupContext=s.length>1?BR(t):null,i=aa(t),o=sa(s,t,0,[t.props,r]),a=Sy(o);if(Gs(),i(),(a||t.sp)&&!gr(t)&&jf(t),a){if(o.then(vg,vg),e)return o.then(c=>{Ih(t,c,e)}).catch(c=>{Ni(c,t,0)});t.asyncDep=o}else Ih(t,o,e)}else Qv(t,e)}function Ih(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Be(e)&&(t.setupState=tv(e)),Qv(t,n)}let Eg;function Qv(t,e,n){const s=t.type;if(!t.render){if(!e&&Eg&&!s.render){const r=s.template||qf(t).template;if(r){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=s,u=st(st({isCustomElement:i,delimiters:a},o),c);s.render=Eg(r,u)}}t.render=s.render||Dn}{const r=aa(t);zs();try{tR(t)}finally{Gs(),r()}}}const UR={get(t,e){return Ct(t,"get",""),t[e]}};function BR(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,UR),slots:t.slots,emit:t.emit,expose:e}}function Nc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(tv(dh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in vo)return vo[n](t)},has(e,n){return n in e||n in vo}})):t.proxy}function bh(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function HR(t){return fe(t)&&"__vccOpts"in t}const dn=(t,e)=>Pb(t,e,_i);function kn(t,e,n){const s=arguments.length;return s===2?Be(e)&&!ue(e)?mi(e)?et(t,null,[e]):et(t,e):et(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&mi(n)&&(n=[n]),et(t,e,n))}const Yv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rh;const Tg=typeof window<"u"&&window.trustedTypes;if(Tg)try{Rh=Tg.createPolicy("vue",{createHTML:t=>t})}catch{}const Xv=Rh?t=>Rh.createHTML(t):t=>t,$R="http://www.w3.org/2000/svg",jR="http://www.w3.org/1998/Math/MathML",Yn=typeof document<"u"?document:null,wg=Yn&&Yn.createElement("template"),WR={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?Yn.createElementNS($R,t):e==="mathml"?Yn.createElementNS(jR,t):n?Yn.createElement(t,{is:n}):Yn.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>Yn.createTextNode(t),createComment:t=>Yn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Yn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{wg.innerHTML=Xv(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=wg.content;if(s==="svg"||s==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Es="transition",no="animation",Bo=Symbol("_vtc"),Jv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qR=st({},lv,Jv),KR=t=>(t.displayName="Transition",t.props=qR,t),zR=KR((t,{slots:e})=>kn(Vb,GR(t),e)),nr=(t,e=[])=>{ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ig=t=>t?ue(t)?t.some(e=>e.length>1):t.length>1:!1;function GR(t){const e={};for(const A in t)A in Jv||(e[A]=t[A]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,I=QR(r),k=I&&I[0],N=I&&I[1],{onBeforeEnter:x,onEnter:O,onEnterCancelled:E,onLeave:P,onLeaveCancelled:M,onBeforeAppear:F=x,onAppear:b=O,onAppearCancelled:v=E}=e,y=(A,w,ge,ve)=>{A._enterCancelled=ve,sr(A,w?h:a),sr(A,w?u:o),ge&&ge()},T=(A,w)=>{A._isLeaving=!1,sr(A,f),sr(A,m),sr(A,p),w&&w()},S=A=>(w,ge)=>{const ve=A?b:O,ne=()=>y(w,A,ge);nr(ve,[w,ne]),bg(()=>{sr(w,A?c:i),zn(w,A?h:a),Ig(ve)||Rg(w,s,k,ne)})};return st(e,{onBeforeEnter(A){nr(x,[A]),zn(A,i),zn(A,o)},onBeforeAppear(A){nr(F,[A]),zn(A,c),zn(A,u)},onEnter:S(!1),onAppear:S(!0),onLeave(A,w){A._isLeaving=!0;const ge=()=>T(A,w);zn(A,f),A._enterCancelled?(zn(A,p),Sg()):(Sg(),zn(A,p)),bg(()=>{A._isLeaving&&(sr(A,f),zn(A,m),Ig(P)||Rg(A,s,N,ge))}),nr(P,[A,ge])},onEnterCancelled(A){y(A,!1,void 0,!0),nr(E,[A])},onAppearCancelled(A){y(A,!0,void 0,!0),nr(v,[A])},onLeaveCancelled(A){T(A),nr(M,[A])}})}function QR(t){if(t==null)return null;if(Be(t))return[Du(t.enter),Du(t.leave)];{const e=Du(t);return[e,e]}}function Du(t){return Oy(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bo]||(t[Bo]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Bo];n&&(n.delete(e),n.size||(t[Bo]=void 0))}function bg(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let YR=0;function Rg(t,e,n,s){const r=t._endId=++YR,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=XR(t,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=c&&f()};setTimeout(()=>{h<c&&f()},a+1),t.addEventListener(u,p)}function XR(t,e){const n=window.getComputedStyle(t),s=I=>(n[I]||"").split(", "),r=s(`${Es}Delay`),i=s(`${Es}Duration`),o=Ag(r,i),a=s(`${no}Delay`),c=s(`${no}Duration`),u=Ag(a,c);let h=null,f=0,p=0;e===Es?o>0&&(h=Es,f=o,p=i.length):e===no?u>0&&(h=no,f=u,p=c.length):(f=Math.max(o,u),h=f>0?o>u?Es:no:null,p=h?h===Es?i.length:c.length:0);const m=h===Es&&/\b(transform|all)(,|$)/.test(s(`${Es}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:m}}function Ag(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Cg(n)+Cg(t[s])))}function Cg(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Sg(){return document.body.offsetHeight}function JR(t,e,n){const s=t[Bo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Dl=Symbol("_vod"),Zv=Symbol("_vsh"),I2={beforeMount(t,{value:e},{transition:n}){t[Dl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):so(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),so(t,!0),s.enter(t)):s.leave(t,()=>{so(t,!1)}):so(t,e))},beforeUnmount(t,{value:e}){so(t,e)}};function so(t,e){t.style.display=e?t[Dl]:"none",t[Zv]=!e}const ZR=Symbol(""),eA=/(^|;)\s*display\s*:/;function tA(t,e,n){const s=t.style,r=ze(n);let i=!1;if(n&&!r){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&cl(s,a,"")}else for(const o in e)n[o]==null&&cl(s,o,"");for(const o in n)o==="display"&&(i=!0),cl(s,o,n[o])}else if(r){if(e!==n){const o=s[ZR];o&&(n+=";"+o),s.cssText=n,i=eA.test(n)}}else e&&t.removeAttribute("style");Dl in t&&(t[Dl]=i?s.display:"",t[Zv]&&(s.display="none"))}const Pg=/\s*!important$/;function cl(t,e,n){if(ue(n))n.forEach(s=>cl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=nA(t,e);Pg.test(n)?t.setProperty(Sr(s),n.replace(Pg,""),"important"):t[s]=n}}const kg=["Webkit","Moz","ms"],xu={};function nA(t,e){const n=xu[e];if(n)return n;let s=rn(e);if(s!=="filter"&&s in t)return xu[e]=s;s=Tc(s);for(let r=0;r<kg.length;r++){const i=kg[r]+s;if(i in t)return xu[e]=i}return e}const Ng="http://www.w3.org/1999/xlink";function Og(t,e,n,s,r,i=tb(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ng,e.slice(6,e.length)):t.setAttributeNS(Ng,e,n):n==null||i&&!Dy(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ks(n)?String(n):n)}function Dg(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xv(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Dy(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function qr(t,e,n,s){t.addEventListener(e,n,s)}function sA(t,e,n,s){t.removeEventListener(e,n,s)}const xg=Symbol("_vei");function rA(t,e,n,s,r=null){const i=t[xg]||(t[xg]={}),o=i[e];if(s&&o)o.value=s;else{const[a,c]=iA(e);if(s){const u=i[e]=lA(s,r);qr(t,a,u,c)}else o&&(sA(t,a,o,c),i[e]=void 0)}}const Mg=/(?:Once|Passive|Capture)$/;function iA(t){let e;if(Mg.test(t)){e={};let s;for(;s=t.match(Mg);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let Mu=0;const oA=Promise.resolve(),aA=()=>Mu||(oA.then(()=>Mu=0),Mu=Date.now());function lA(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Tn(cA(s,n.value),e,5,[s])};return n.value=t,n.attached=aA(),n}function cA(t,e){if(ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Lg=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uA=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?JR(t,s,o):e==="style"?tA(t,n,s):ta(e)?Of(e)||rA(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hA(t,e,s,o))?(Dg(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Og(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!ze(s))?Dg(t,rn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Og(t,e,s,o))};function hA(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lg(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Lg(e)&&ze(n)?!1:e in t}const Vg=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>ri(e,n):e};function fA(t){t.target.composing=!0}function Fg(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Lu=Symbol("_assign"),b2={created(t,{modifiers:{lazy:e,trim:n,number:s}},r){t[Lu]=Vg(r);const i=s||r.props&&r.props.type==="number";qr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=ch(a)),t[Lu](a)}),n&&qr(t,"change",()=>{t.value=t.value.trim()}),e||(qr(t,"compositionstart",fA),qr(t,"compositionend",Fg),qr(t,"change",Fg))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:s,trim:r,number:i}},o){if(t[Lu]=Vg(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?ch(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(s&&e===n||r&&t.value.trim()===c)||(t.value=c))}},dA=["ctrl","shift","alt","meta"],pA={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dA.some(n=>t[`${n}Key`]&&!e.includes(n))},R2=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=pA[e[o]];if(a&&a(r,e))return}return t(r,...i)})},eE=st({patchProp:uA},WR);let To,Ug=!1;function gA(){return To||(To=pR(eE))}function mA(){return To=Ug?To:gR(eE),Ug=!0,To}const _A=(...t)=>{const e=gA().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=nE(s);if(!r)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,tE(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},yA=(...t)=>{const e=mA().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=nE(s);if(r)return n(r,!0,tE(r))},e};function tE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function nE(t){return ze(t)?document.querySelector(t):t}const vA=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,EA=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,TA=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function wA(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){IA(t);return}return e}function IA(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function xl(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const s=n.toLowerCase();if(s==="true")return!0;if(s==="false")return!1;if(s==="undefined")return;if(s==="null")return null;if(s==="nan")return Number.NaN;if(s==="infinity")return Number.POSITIVE_INFINITY;if(s==="-infinity")return Number.NEGATIVE_INFINITY}if(!TA.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(vA.test(t)||EA.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,wA)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const bA=/#/g,RA=/&/g,AA=/\//g,CA=/=/g,Qf=/\+/g,SA=/%5e/gi,PA=/%60/gi,kA=/%7c/gi,NA=/%20/gi;function OA(t){return encodeURI(""+t).replace(kA,"|")}function Ah(t){return OA(typeof t=="string"?t:JSON.stringify(t)).replace(Qf,"%2B").replace(NA,"+").replace(bA,"%23").replace(RA,"%26").replace(PA,"`").replace(SA,"^").replace(AA,"%2F")}function Vu(t){return Ah(t).replace(CA,"%3D")}function Ml(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function DA(t){return Ml(t.replace(Qf," "))}function xA(t){return Ml(t.replace(Qf," "))}function MA(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=DA(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=xA(s[2]||"");e[r]===void 0?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}return e}function LA(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${Vu(t)}=${Ah(n)}`).join("&"):`${Vu(t)}=${Ah(e)}`:Vu(t)}function VA(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>LA(e,t[e])).filter(Boolean).join("&")}const FA=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,UA=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,BA=/^([/\\]\s*){2,}[^/\\]/,HA=/^[\s\0]*(blob|data|javascript|vbscript):$/i,$A=/\/$|\/\?|\/#/,jA=/^\.?\//;function Pr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?FA.test(t):UA.test(t)||(e.acceptRelative?BA.test(t):!1)}function WA(t){return!!t&&HA.test(t)}function Ch(t="",e){return e?$A.test(t):t.endsWith("/")}function Yf(t="",e){if(!e)return(Ch(t)?t.slice(0,-1):t)||"/";if(!Ch(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),s=t.slice(r));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function Sh(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Ch(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),s=t.slice(r),!n))return s;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function qA(t=""){return t.startsWith("/")}function Bg(t=""){return qA(t)?t:"/"+t}function KA(t,e){if(rE(e)||Pr(t))return t;const n=Yf(e);return t.startsWith(n)?t:Xf(n,t)}function Hg(t,e){if(rE(e))return t;const n=Yf(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function sE(t,e){const n=QA(t),s={...MA(n.search),...e};return n.search=VA(s),YA(n)}function rE(t){return!t||t==="/"}function zA(t){return t&&t!=="/"}function Xf(t,...e){let n=t||"";for(const s of e.filter(r=>zA(r)))if(n){const r=s.replace(jA,"");n=Sh(n)+r}else n=s;return n}function iE(...t){var o,a,c,u;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let r=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(s.length===1&&Pr(s[0]))continue;s.pop(),r--;continue}if(f===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+p;continue}s.push(p),r++}}let i=s.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(c=n[0])!=null&&c.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*r)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function GA(t,e,n={}){return n.trailingSlash||(t=Sh(t),e=Sh(e)),n.leadingSlash||(t=Bg(t),e=Bg(e)),n.encoding||(t=Ml(t),e=Ml(e)),t===e}const oE=Symbol.for("ufo:protocolRelative");function QA(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!Pr(t,{acceptRelative:!0}))return $g(t);const[,s="",r,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:c,search:u,hash:h}=$g(a);return{protocol:s.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:c,search:u,hash:h,[oE]:!s}}function $g(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function YA(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[oE]?(t.protocol||"")+"//":"")+r+i+e+n+s}class XA extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function JA(t){var c,u,h,f,p;const e=((c=t.error)==null?void 0:c.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",s=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(s)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${i}${e?` ${e}`:""}`,a=new XA(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return t[m]}});for(const[m,I]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return t.response&&t.response[I]}});return a}const ZA=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function jg(t="GET"){return ZA.has(t.toUpperCase())}function eC(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const tC=new Set(["image/svg","application/xml","application/xhtml","application/html"]),nC=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function sC(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return nC.test(e)?"json":tC.has(e)||e.startsWith("text/")?"text":"blob"}function rC(t,e,n,s){const r=iC((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,s);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:r}}function iC(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[r,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(r,i);return s}async function Wa(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const oC=new Set([408,409,425,429,500,502,503,504]),aC=new Set([101,204,205,304]);function aE(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function r(a){const c=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!c){let h;typeof a.options.retry=="number"?h=a.options.retry:h=jg(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):oC.has(f))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=JA(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(c,u={}){const h={request:c,options:rC(c,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await Wa(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=KA(h.request,h.options.baseURL)),h.options.query&&(h.request=sE(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&jg(h.options.method)&&(eC(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const m=new s;f=setTimeout(()=>{const I=new Error("[TimeoutError]: The operation was aborted due to timeout");I.name="TimeoutError",I.code=23,m.abort(I)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await Wa(h,h.options.onRequestError),await r(h)}finally{f&&clearTimeout(f)}if((h.response.body||h.response._bodyInit)&&!aC.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||sC(h.response.headers.get("content-type")||"");switch(m){case"json":{const I=await h.response.text(),k=h.options.parseResponse||xl;h.response._data=k(I);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await Wa(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await Wa(h,h.options.onResponseError),await r(h)):h.response},o=async function(c,u){return(await i(c,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},c={})=>aE({...t,...c,defaults:{...t.defaults,...c.defaults,...a}}),o}const Ll=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),lC=Ll.fetch?(...t)=>Ll.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),cC=Ll.Headers,uC=Ll.AbortController,hC=aE({fetch:lC,Headers:cC,AbortController:uC}),fC=hC,dC=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},Vl=dC().app,pC=()=>Vl.baseURL,gC=()=>Vl.buildAssetsDir,Jf=(...t)=>iE(lE(),gC(),...t),lE=(...t)=>{const e=Vl.cdnURL||Vl.baseURL;return t.length?iE(e,...t):e};globalThis.__buildAssetsURL=Jf,globalThis.__publicAssetsURL=lE;globalThis.$fetch||(globalThis.$fetch=fC.create({baseURL:pC()}));function Ph(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?Ph(r,e,i):typeof r=="function"&&(e[i]=r)}return e}const mC={run:t=>t()},_C=()=>mC,cE=typeof console.createTask<"u"?console.createTask:_C;function yC(t,e){const n=e.shift(),s=cE(n);return t.reduce((r,i)=>r.then(()=>s.run(()=>i(...e))),Promise.resolve())}function vC(t,e){const n=e.shift(),s=cE(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function Fu(t,e){for(const n of[...t])n(e)}class EC{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Ph(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=Ph(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(yC,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(vC,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&Fu(this._before,r);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&Fu(this._after,r)}):(this._after&&r&&Fu(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function uE(){return new EC}function TC(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const c=()=>{e=o},u=()=>e===o?c:void 0;kh.add(u);try{const h=r?r.run(o,a):a();return n||(e=void 0),await h}finally{kh.delete(u)}}}}function wC(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=TC({...t,...s})),e[n]}}}const Fl=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Wg="__unctx__",IC=Fl[Wg]||(Fl[Wg]=wC()),bC=(t,e={})=>IC.get(t,e),qg="__unctx_async_handlers__",kh=Fl[qg]||(Fl[qg]=new Set);function vr(t){const e=[];for(const r of kh){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const Nh=!1,RC=!1,A2={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},AC=null,CC="#__nuxt",hE="nuxt-app",Kg=36e5,SC="vite:preloadError";function fE(t=hE){return bC(t,{asyncContext:!1})}const PC="__nuxt_plugin";function kC(t){var r;let e=0;const n={_id:t.id||hE||"nuxt-app",_scope:Vy(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.15.0"},get vue(){return n.vueApp.version}},payload:Zn({...((r=t.ssrContext)==null?void 0:r.payload)||{},data:Zn({}),state:Qs({}),once:new Set,_errors:Zn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!Fy()?n._scope.run(()=>zg(n,i)):zg(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Zn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=uE(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;qa(n,a,o),qa(n.vueApp.config.globalProperties,a,o)},qa(n.vueApp,"$nuxt",n),qa(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(SC,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||Je;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const s=n.payload.config;return n.provide("config",s),n}function NC(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function OC(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function DC(t,e){const n=[],s=[],r=[],i=[];let o=0;async function a(c){var h;const u=((h=c.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)s.push([new Set(u),c]);else{const f=OC(t,c).then(async()=>{c._name&&(n.push(c._name),await Promise.all(s.map(async([p,m])=>{p.has(c._name)&&(p.delete(c._name),p.size===0&&(o++,await a(m)))})))});c.parallel?r.push(f.catch(p=>i.push(p))):await f}}for(const c of e)NC(t,c);for(const c of e)await a(c);if(await Promise.all(r),o)for(let c=0;c<o;c++)await Promise.all(r);if(i.length)throw i[0]}function Xt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[PC]:!0,_name:e})}const xC=Xt;function zg(t,e,n){const s=()=>e();return fE(t._id).set(t),t.vueApp.runWithContext(s)}function MC(t){var n;let e;return wv()&&(e=(n=kc())==null?void 0:n.appContext.app.$nuxt),e=e||fE(t).tryUse(),e||null}function Je(t){const e=MC(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function la(t){return Je().$config}function qa(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function LC(t,e){return{ctx:{table:t},matchAll:n=>pE(n,t)}}function dE(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,r])=>[s,dE(r)])):new Map(Object.entries(t[n]));return e}function VC(t){return LC(dE(t))}function pE(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[i,o]of Gg(e.wildcard))(t===i||t.startsWith(i+"/"))&&s.push(o);for(const[i,o]of Gg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");s.push(...pE(a,o))}const r=e.static.get(t);return r&&s.push(r),s.filter(Boolean)}function Gg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function Uu(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function Oh(t,e,n=".",s){if(!Uu(e))return Oh(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:Uu(o)&&Uu(r[i])?r[i]=Oh(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function FC(t){return(...e)=>e.reduce((n,s)=>Oh(n,s,"",t),{})}const gE=FC();function UC(t,e){try{return e in t}catch{return!1}}var BC=Object.defineProperty,HC=(t,e,n)=>e in t?BC(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,or=(t,e,n)=>(HC(t,typeof e!="symbol"?e+"":e,n),n);class Dh extends Error{constructor(e,n={}){super(e,n),or(this,"statusCode",500),or(this,"fatal",!1),or(this,"unhandled",!1),or(this,"statusMessage"),or(this,"data"),or(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:Mh(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=mE(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}or(Dh,"__h3_error__",!0);function xh(t){if(typeof t=="string")return new Dh(t);if($C(t))return t;const e=new Dh(t.message??t.statusMessage??"",{cause:t.cause||t});if(UC(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=Mh(t.statusCode,e.statusCode):t.status&&(e.statusCode=Mh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;mE(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function $C(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const jC=/[^\u0009\u0020-\u007E]/g;function mE(t=""){return t.replace(jC,"")}function Mh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const WC=Symbol("layout-meta"),Oc=Symbol("route"),on=()=>{var t;return(t=Je())==null?void 0:t.$router},_E=()=>wv()?Dt(Oc,Je()._route):Je()._route;const qC=()=>{try{if(Je()._processingMiddleware)return!0}catch{return!1}return!1},Qg=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?KC(t):on().resolve(t).href;if(e!=null&&e.open){const{target:c="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,c,h),Promise.resolve()}const s=Pr(n,{acceptRelative:!0}),r=(e==null?void 0:e.external)||s;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:c}=new URL(n,window.location.href);if(c&&WA(c))throw new Error(`Cannot navigate to a URL with '${c}' protocol.`)}const i=qC();if(!r&&i)return e!=null&&e.replace?typeof t=="string"?{path:t,replace:!0}:{...t,replace:!0}:t;const o=on(),a=Je();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function KC(t){return sE(t.path||"",t.query||{})+(t.hash||"")}const yE="__nuxt_error",Dc=()=>Ab(Je().payload,"error"),Jr=t=>{const e=xc(t);try{const n=Je(),s=Dc();n.hooks.callHook("app:error",e),s.value=s.value||e}catch{throw e}return e},zC=async(t={})=>{const e=Je(),n=Dc();e.callHook("app:error:cleared",t),t.redirect&&await on().replace(t.redirect),n.value=AC},GC=t=>!!t&&typeof t=="object"&&yE in t,xc=t=>{const e=xh(t);return Object.defineProperty(e,yE,{value:!0,configurable:!1,writable:!1}),e};var Yg={};/**
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
 */const vE={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Y=function(t,e){if(!t)throw Oi(e)},Oi=function(t){return new Error("Firebase Database ("+vE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const EE=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},QC=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,c=r+2<t.length,u=c?t[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(p=64)),s.push(n[h],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(EE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new YC;const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const I=u<<6&192|f;s.push(I)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class YC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const TE=function(t){const e=EE(t);return Mc.encodeByteArray(e,!0)},Ul=function(t){return TE(t).replace(/\./g,"")},Bl=function(t){try{return Mc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XC(t){return wE(void 0,t)}function wE(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!JC(n)||(t[n]=wE(t[n],e[n]));return t}function JC(t){return t!=="__proto__"}/**
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
 */function ZC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eS=()=>ZC().__FIREBASE_DEFAULTS__,tS=()=>{if(typeof process>"u"||typeof Yg>"u")return;const t=Yg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bl(t[1]);return e&&JSON.parse(e)},Lc=()=>{try{return eS()||tS()||nS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sS=t=>{var e,n;return(n=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rS=t=>{const e=sS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},IE=()=>{var t;return(t=Lc())===null||t===void 0?void 0:t.config},iS=t=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Ho{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function oS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ul(JSON.stringify(n)),Ul(JSON.stringify(o)),""].join(".")}/**
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
 */function xt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xt())}function aS(){var t;const e=(t=Lc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function lS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function cS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uS(){const t=xt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function RE(){return vE.NODE_ADMIN===!0}function hS(){return!aS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AE(){try{return typeof indexedDB=="object"}catch{return!1}}function fS(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const dS="FirebaseError";class $n extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=dS,Object.setPrototypeOf(this,$n.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Di.prototype.create)}}class Di{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?pS(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new $n(r,a,s)}}function pS(t,e){return t.replace(gS,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const gS=/\{\$([^}]+)}/g;/**
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
 */function $o(t){return JSON.parse(t)}function yt(t){return JSON.stringify(t)}/**
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
 */const CE=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=$o(Bl(i[0])||""),n=$o(Bl(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},mS=function(t){const e=CE(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},_S=function(t){const e=CE(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ps(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function yi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Lh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Hl(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function $l(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(Xg(i)&&Xg(o)){if(!$l(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Xg(t){return t!==null&&typeof t=="object"}/**
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
 */function xi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class yS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+c+h+s[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function vS(t,e){const n=new ES(t,e);return n.subscribe.bind(n)}class ES{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");TS(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=Bu),r.error===void 0&&(r.error=Bu),r.complete===void 0&&(r.complete=Bu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function TS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Bu(){}function wS(t,e){return`${t} failed: ${e} argument `}/**
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
 */const IS=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,Y(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},Vc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function an(t){return t&&t._delegate?t._delegate:t}class wn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ar="[DEFAULT]";/**
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
 */class bS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Ho;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AS(e))try{this.getOrInitializeService({instanceIdentifier:ar})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ar){return this.instances.has(e)}getOptions(e=ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:RS(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ar){return this.component?this.component.multipleInstances?e:ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function RS(t){return t===ar?void 0:t}function AS(t){return t.instantiationMode==="EAGER"}/**
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
 */class CS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new bS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const SS={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},PS=ye.INFO,kS={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},NS=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=kS[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ca{constructor(e){this.name=e,this._logLevel=PS,this._logHandler=NS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const OS=(t,e)=>e.some(n=>t instanceof n);let Jg,Zg;function DS(){return Jg||(Jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xS(){return Zg||(Zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SE=new WeakMap,Vh=new WeakMap,PE=new WeakMap,Hu=new WeakMap,ed=new WeakMap;function MS(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ds(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SE.set(n,t)}).catch(()=>{}),ed.set(e,t),e}function LS(t){if(Vh.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vh.set(t,e)}let Fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||PE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ds(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VS(t){Fh=t(Fh)}function FS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call($u(this),e,...n);return PE.set(s,e.sort?e.sort():[e]),Ds(s)}:xS().includes(t)?function(...e){return t.apply($u(this),e),Ds(SE.get(this))}:function(...e){return Ds(t.apply($u(this),e))}}function US(t){return typeof t=="function"?FS(t):(t instanceof IDBTransaction&&LS(t),OS(t,DS())?new Proxy(t,Fh):t)}function Ds(t){if(t instanceof IDBRequest)return MS(t);if(Hu.has(t))return Hu.get(t);const e=US(t);return e!==t&&(Hu.set(t,e),ed.set(e,t)),e}const $u=t=>ed.get(t);function BS(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Ds(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Ds(o.result),c.oldVersion,c.newVersion,Ds(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const HS=["get","getKey","getAll","getAllKeys","count"],$S=["put","add","delete","clear"],ju=new Map;function em(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ju.get(e))return ju.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=$S.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||HS.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&c.done]))[0]};return ju.set(e,i),i}VS(t=>({...t,get:(e,n,s)=>em(e,n)||t.get(e,n,s),has:(e,n)=>!!em(e,n)||t.has(e,n)}));/**
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
 */class jS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WS(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function WS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Uh="@firebase/app",tm="0.10.17";/**
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
 */const cs=new ca("@firebase/app"),qS="@firebase/app-compat",KS="@firebase/analytics-compat",zS="@firebase/analytics",GS="@firebase/app-check-compat",QS="@firebase/app-check",YS="@firebase/auth",XS="@firebase/auth-compat",JS="@firebase/database",ZS="@firebase/data-connect",eP="@firebase/database-compat",tP="@firebase/functions",nP="@firebase/functions-compat",sP="@firebase/installations",rP="@firebase/installations-compat",iP="@firebase/messaging",oP="@firebase/messaging-compat",aP="@firebase/performance",lP="@firebase/performance-compat",cP="@firebase/remote-config",uP="@firebase/remote-config-compat",hP="@firebase/storage",fP="@firebase/storage-compat",dP="@firebase/firestore",pP="@firebase/vertexai",gP="@firebase/firestore-compat",mP="firebase",_P="11.1.0";/**
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
 */const Bh="[DEFAULT]",yP={[Uh]:"fire-core",[qS]:"fire-core-compat",[zS]:"fire-analytics",[KS]:"fire-analytics-compat",[QS]:"fire-app-check",[GS]:"fire-app-check-compat",[YS]:"fire-auth",[XS]:"fire-auth-compat",[JS]:"fire-rtdb",[ZS]:"fire-data-connect",[eP]:"fire-rtdb-compat",[tP]:"fire-fn",[nP]:"fire-fn-compat",[sP]:"fire-iid",[rP]:"fire-iid-compat",[iP]:"fire-fcm",[oP]:"fire-fcm-compat",[aP]:"fire-perf",[lP]:"fire-perf-compat",[cP]:"fire-rc",[uP]:"fire-rc-compat",[hP]:"fire-gcs",[fP]:"fire-gcs-compat",[dP]:"fire-fst",[gP]:"fire-fst-compat",[pP]:"fire-vertex","fire-js":"fire-js",[mP]:"fire-js-all"};/**
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
 */const jl=new Map,vP=new Map,Hh=new Map;function nm(t,e){try{t.container.addComponent(e)}catch(n){cs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Vn(t){const e=t.name;if(Hh.has(e))return cs.debug(`There were multiple attempts to register component ${e}.`),!1;Hh.set(e,t);for(const n of jl.values())nm(n,t);for(const n of vP.values())nm(n,t);return!0}function kE(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function es(t){return t.settings!==void 0}/**
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
 */const EP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},xs=new Di("app","Firebase",EP);/**
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
 */class TP{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xs.create("app-deleted",{appName:this._name})}}/**
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
 */const Ys=_P;function NE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw xs.create("bad-app-name",{appName:String(r)});if(n||(n=IE()),!n)throw xs.create("no-options");const i=jl.get(r);if(i){if($l(n,i.options)&&$l(s,i.config))return i;throw xs.create("duplicate-app",{appName:r})}const o=new CS(r);for(const c of Hh.values())o.addComponent(c);const a=new TP(n,s,o);return jl.set(r,a),a}function OE(t=Bh){const e=jl.get(t);if(!e&&t===Bh&&IE())return NE();if(!e)throw xs.create("no-app",{appName:t});return e}function Qt(t,e,n){var s;let r=(s=yP[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cs.warn(a.join(" "));return}Vn(new wn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const wP="firebase-heartbeat-database",IP=1,jo="firebase-heartbeat-store";let Wu=null;function DE(){return Wu||(Wu=BS(wP,IP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw xs.create("idb-open",{originalErrorMessage:t.message})})),Wu}async function bP(t){try{const n=(await DE()).transaction(jo),s=await n.objectStore(jo).get(xE(t));return await n.done,s}catch(e){if(e instanceof $n)cs.warn(e.message);else{const n=xs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cs.warn(n.message)}}}async function sm(t,e){try{const s=(await DE()).transaction(jo,"readwrite");await s.objectStore(jo).put(e,xE(t)),await s.done}catch(n){if(n instanceof $n)cs.warn(n.message);else{const s=xs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cs.warn(s.message)}}}function xE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RP=1024,AP=30*24*60*60*1e3;class CP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PP(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=rm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AP}),this._storage.overwrite(this._heartbeatsCache))}catch(s){cs.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rm(),{heartbeatsToSend:s,unsentEntries:r}=SP(this._heartbeatsCache.heartbeats),i=Ul(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return cs.warn(n),""}}}function rm(){return new Date().toISOString().substring(0,10)}function SP(t,e=RP){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),im(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),im(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class PP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AE()?fS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return sm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function im(t){return Ul(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function kP(t){Vn(new wn("platform-logger",e=>new jS(e),"PRIVATE")),Vn(new wn("heartbeat",e=>new CP(e),"PRIVATE")),Qt(Uh,tm,t),Qt(Uh,tm,"esm2017"),Qt("fire-js","")}kP("");var om=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,ME;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function y(){}y.prototype=v.prototype,b.D=v.prototype,b.prototype=new y,b.prototype.constructor=b,b.C=function(T,S,A){for(var w=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)w[ge-2]=arguments[ge];return v.prototype[S].apply(T,w)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(b,v,y){y||(y=0);var T=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)T[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)T[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=b.g[0],y=b.g[1],S=b.g[2];var A=b.g[3],w=v+(A^y&(S^A))+T[0]+3614090360&4294967295;v=y+(w<<7&4294967295|w>>>25),w=A+(S^v&(y^S))+T[1]+3905402710&4294967295,A=v+(w<<12&4294967295|w>>>20),w=S+(y^A&(v^y))+T[2]+606105819&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(v^S&(A^v))+T[3]+3250441966&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(A^y&(S^A))+T[4]+4118548399&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(S^v&(y^S))+T[5]+1200080426&4294967295,A=v+(w<<12&4294967295|w>>>20),w=S+(y^A&(v^y))+T[6]+2821735955&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(v^S&(A^v))+T[7]+4249261313&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(A^y&(S^A))+T[8]+1770035416&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(S^v&(y^S))+T[9]+2336552879&4294967295,A=v+(w<<12&4294967295|w>>>20),w=S+(y^A&(v^y))+T[10]+4294925233&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(v^S&(A^v))+T[11]+2304563134&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(A^y&(S^A))+T[12]+1804603682&4294967295,v=y+(w<<7&4294967295|w>>>25),w=A+(S^v&(y^S))+T[13]+4254626195&4294967295,A=v+(w<<12&4294967295|w>>>20),w=S+(y^A&(v^y))+T[14]+2792965006&4294967295,S=A+(w<<17&4294967295|w>>>15),w=y+(v^S&(A^v))+T[15]+1236535329&4294967295,y=S+(w<<22&4294967295|w>>>10),w=v+(S^A&(y^S))+T[1]+4129170786&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(v^y))+T[6]+3225465664&4294967295,A=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(A^v))+T[11]+643717713&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(S^A))+T[0]+3921069994&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^A&(y^S))+T[5]+3593408605&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(v^y))+T[10]+38016083&4294967295,A=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(A^v))+T[15]+3634488961&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(S^A))+T[4]+3889429448&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^A&(y^S))+T[9]+568446438&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(v^y))+T[14]+3275163606&4294967295,A=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(A^v))+T[3]+4107603335&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(S^A))+T[8]+1163531501&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(S^A&(y^S))+T[13]+2850285829&4294967295,v=y+(w<<5&4294967295|w>>>27),w=A+(y^S&(v^y))+T[2]+4243563512&4294967295,A=v+(w<<9&4294967295|w>>>23),w=S+(v^y&(A^v))+T[7]+1735328473&4294967295,S=A+(w<<14&4294967295|w>>>18),w=y+(A^v&(S^A))+T[12]+2368359562&4294967295,y=S+(w<<20&4294967295|w>>>12),w=v+(y^S^A)+T[5]+4294588738&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^S)+T[8]+2272392833&4294967295,A=v+(w<<11&4294967295|w>>>21),w=S+(A^v^y)+T[11]+1839030562&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^v)+T[14]+4259657740&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^A)+T[1]+2763975236&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^S)+T[4]+1272893353&4294967295,A=v+(w<<11&4294967295|w>>>21),w=S+(A^v^y)+T[7]+4139469664&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^v)+T[10]+3200236656&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^A)+T[13]+681279174&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^S)+T[0]+3936430074&4294967295,A=v+(w<<11&4294967295|w>>>21),w=S+(A^v^y)+T[3]+3572445317&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^v)+T[6]+76029189&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(y^S^A)+T[9]+3654602809&4294967295,v=y+(w<<4&4294967295|w>>>28),w=A+(v^y^S)+T[12]+3873151461&4294967295,A=v+(w<<11&4294967295|w>>>21),w=S+(A^v^y)+T[15]+530742520&4294967295,S=A+(w<<16&4294967295|w>>>16),w=y+(S^A^v)+T[2]+3299628645&4294967295,y=S+(w<<23&4294967295|w>>>9),w=v+(S^(y|~A))+T[0]+4096336452&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~S))+T[7]+1126891415&4294967295,A=v+(w<<10&4294967295|w>>>22),w=S+(v^(A|~y))+T[14]+2878612391&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~v))+T[5]+4237533241&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~A))+T[12]+1700485571&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~S))+T[3]+2399980690&4294967295,A=v+(w<<10&4294967295|w>>>22),w=S+(v^(A|~y))+T[10]+4293915773&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~v))+T[1]+2240044497&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~A))+T[8]+1873313359&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~S))+T[15]+4264355552&4294967295,A=v+(w<<10&4294967295|w>>>22),w=S+(v^(A|~y))+T[6]+2734768916&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~v))+T[13]+1309151649&4294967295,y=S+(w<<21&4294967295|w>>>11),w=v+(S^(y|~A))+T[4]+4149444226&4294967295,v=y+(w<<6&4294967295|w>>>26),w=A+(y^(v|~S))+T[11]+3174756917&4294967295,A=v+(w<<10&4294967295|w>>>22),w=S+(v^(A|~y))+T[2]+718787259&4294967295,S=A+(w<<15&4294967295|w>>>17),w=y+(A^(S|~v))+T[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(w<<21&4294967295|w>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+A&4294967295}s.prototype.u=function(b,v){v===void 0&&(v=b.length);for(var y=v-this.blockSize,T=this.B,S=this.h,A=0;A<v;){if(S==0)for(;A<=y;)r(this,b,A),A+=this.blockSize;if(typeof b=="string"){for(;A<v;)if(T[S++]=b.charCodeAt(A++),S==this.blockSize){r(this,T),S=0;break}}else for(;A<v;)if(T[S++]=b[A++],S==this.blockSize){r(this,T),S=0;break}}this.h=S,this.o+=v},s.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;var y=8*this.o;for(v=b.length-8;v<b.length;++v)b[v]=y&255,y/=256;for(this.u(b),b=Array(16),v=y=0;4>v;++v)for(var T=0;32>T;T+=8)b[y++]=this.g[v]>>>T&255;return b};function i(b,v){var y=a;return Object.prototype.hasOwnProperty.call(y,b)?y[b]:y[b]=v(b)}function o(b,v){this.h=v;for(var y=[],T=!0,S=b.length-1;0<=S;S--){var A=b[S]|0;T&&A==v||(y[S]=A,T=!1)}this.g=y}var a={};function c(b){return-128<=b&&128>b?i(b,function(v){return new o([v|0],0>v?-1:0)}):new o([b|0],0>b?-1:0)}function u(b){if(isNaN(b)||!isFinite(b))return f;if(0>b)return N(u(-b));for(var v=[],y=1,T=0;b>=y;T++)v[T]=b/y|0,y*=4294967296;return new o(v,0)}function h(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return N(h(b.substring(1),v));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),T=f,S=0;S<b.length;S+=8){var A=Math.min(8,b.length-S),w=parseInt(b.substring(S,S+A),v);8>A?(A=u(Math.pow(v,A)),T=T.j(A).add(u(w))):(T=T.j(y),T=T.add(u(w)))}return T}var f=c(0),p=c(1),m=c(16777216);t=o.prototype,t.m=function(){if(k(this))return-N(this).m();for(var b=0,v=1,y=0;y<this.g.length;y++){var T=this.i(y);b+=(0<=T?T:4294967296+T)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(I(this))return"0";if(k(this))return"-"+N(this).toString(b);for(var v=u(Math.pow(b,6)),y=this,T="";;){var S=P(y,v).g;y=x(y,S.j(v));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(b);if(y=S,I(y))return A+T;for(;6>A.length;)A="0"+A;T=A+T}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function I(b){if(b.h!=0)return!1;for(var v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function k(b){return b.h==-1}t.l=function(b){return b=x(this,b),k(b)?-1:I(b)?0:1};function N(b){for(var v=b.g.length,y=[],T=0;T<v;T++)y[T]=~b.g[T];return new o(y,~b.h).add(p)}t.abs=function(){return k(this)?N(this):this},t.add=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0,S=0;S<=v;S++){var A=T+(this.i(S)&65535)+(b.i(S)&65535),w=(A>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);T=w>>>16,A&=65535,w&=65535,y[S]=w<<16|A}return new o(y,y[y.length-1]&-2147483648?-1:0)};function x(b,v){return b.add(N(v))}t.j=function(b){if(I(this)||I(b))return f;if(k(this))return k(b)?N(this).j(N(b)):N(N(this).j(b));if(k(b))return N(this.j(N(b)));if(0>this.l(m)&&0>b.l(m))return u(this.m()*b.m());for(var v=this.g.length+b.g.length,y=[],T=0;T<2*v;T++)y[T]=0;for(T=0;T<this.g.length;T++)for(var S=0;S<b.g.length;S++){var A=this.i(T)>>>16,w=this.i(T)&65535,ge=b.i(S)>>>16,ve=b.i(S)&65535;y[2*T+2*S]+=w*ve,O(y,2*T+2*S),y[2*T+2*S+1]+=A*ve,O(y,2*T+2*S+1),y[2*T+2*S+1]+=w*ge,O(y,2*T+2*S+1),y[2*T+2*S+2]+=A*ge,O(y,2*T+2*S+2)}for(T=0;T<v;T++)y[T]=y[2*T+1]<<16|y[2*T];for(T=v;T<2*v;T++)y[T]=0;return new o(y,0)};function O(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function E(b,v){this.g=b,this.h=v}function P(b,v){if(I(v))throw Error("division by zero");if(I(b))return new E(f,f);if(k(b))return v=P(N(b),v),new E(N(v.g),N(v.h));if(k(v))return v=P(b,N(v)),new E(N(v.g),v.h);if(30<b.g.length){if(k(b)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=p,T=v;0>=T.l(b);)y=M(y),T=M(T);var S=F(y,1),A=F(T,1);for(T=F(T,2),y=F(y,2);!I(T);){var w=A.add(T);0>=w.l(b)&&(S=S.add(y),A=w),T=F(T,1),y=F(y,1)}return v=x(b,S.j(v)),new E(S,v)}for(S=f;0<=b.l(v);){for(y=Math.max(1,Math.floor(b.m()/v.m())),T=Math.ceil(Math.log(y)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),A=u(y),w=A.j(v);k(w)||0<w.l(b);)y-=T,A=u(y),w=A.j(v);I(A)&&(A=p),S=S.add(A),b=x(b,w)}return new E(S,b)}t.A=function(b){return P(this,b).h},t.and=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)&b.i(T);return new o(y,this.h&b.h)},t.or=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)|b.i(T);return new o(y,this.h|b.h)},t.xor=function(b){for(var v=Math.max(this.g.length,b.g.length),y=[],T=0;T<v;T++)y[T]=this.i(T)^b.i(T);return new o(y,this.h^b.h)};function M(b){for(var v=b.g.length+1,y=[],T=0;T<v;T++)y[T]=b.i(T)<<1|b.i(T-1)>>>31;return new o(y,b.h)}function F(b,v){var y=v>>5;v%=32;for(var T=b.g.length-y,S=[],A=0;A<T;A++)S[A]=0<v?b.i(A+y)>>>v|b.i(A+y+1)<<32-v:b.i(A+y);return new o(S,b.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,ME=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Er=o}).apply(typeof om<"u"?om:typeof self<"u"?self:typeof window<"u"?window:{});var Ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var LE,fo,VE,ul,$h,FE,UE,BE;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ka=="object"&&Ka];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function r(l,d){if(d)e:{var g=s;l=l.split(".");for(var _=0;_<l.length-1;_++){var D=l[_];if(!(D in g))break e;g=g[D]}l=l[l.length-1],_=g[l],d=d(_),d!=_&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var g=0,_=!1,D={next:function(){if(!_&&g<l.length){var V=g++;return{value:d(V,l[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}r("Array.prototype.values",function(l){return l||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function c(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function u(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,g){return l.call.apply(l.bind,arguments)}function f(l,d,g){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,_),l.apply(d,D)}}return function(){return l.apply(d,arguments)}}function p(l,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function m(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var _=g.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function I(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(_,D,V){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return d.prototype[D].apply(_,G)}}function k(l){const d=l.length;if(0<d){const g=Array(d);for(let _=0;_<d;_++)g[_]=l[_];return g}return[]}function N(l,d){for(let g=1;g<arguments.length;g++){const _=arguments[g];if(c(_)){const D=l.length||0,V=_.length||0;l.length=D+V;for(let G=0;G<V;G++)l[D+G]=_[G]}else l.push(_)}}class x{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function O(l){return/^[\s\xa0]*$/.test(l)}function E(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function P(l){return P[" "](l),l}P[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function F(l,d,g){for(const _ in l)d.call(g,l[_],_,l)}function b(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function v(l){const d={};for(const g in l)d[g]=l[g];return d}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(l,d){let g,_;for(let D=1;D<arguments.length;D++){_=arguments[D];for(g in _)l[g]=_[g];for(let V=0;V<y.length;V++)g=y[V],Object.prototype.hasOwnProperty.call(_,g)&&(l[g]=_[g])}}function S(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function A(l){a.setTimeout(()=>{throw l},0)}function w(){var l=Ge;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,g){const _=ve.get();_.set(d,g),this.h?this.h.next=_:this.g=_,this.h=_}}var ve=new x(()=>new ne,l=>l.reset());class ne{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let he,te=!1,Ge=new ge,cn=()=>{const l=a.Promise.resolve(void 0);he=()=>{l.then(Jt)}};var Jt=()=>{for(var l;l=w();){try{l.h.call(l.g)}catch(g){A(g)}var d=ve;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}te=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ye(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var gs=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return l}();function Rn(l,d){if(Ye.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(M){e:{try{P(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Bt[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Rn.aa.h.call(this)}}I(Rn,Ye);var Bt={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(l,d,g,_,D){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!_,this.ha=D,this.key=++Z,this.da=this.fa=!1}function se(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Te(l){this.src=l,this.g={},this.h=0}Te.prototype.add=function(l,d,g,_,D){var V=l.toString();l=this.g[V],l||(l=this.g[V]=[],this.h++);var G=R(l,d,_,D);return-1<G?(d=l[G],g||(d.fa=!1)):(d=new X(d,this.src,V,!!_,D),d.fa=g,l.push(d)),d};function Me(l,d){var g=d.type;if(g in l.g){var _=l.g[g],D=Array.prototype.indexOf.call(_,d,void 0),V;(V=0<=D)&&Array.prototype.splice.call(_,D,1),V&&(se(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function R(l,d,g,_){for(var D=0;D<l.length;++D){var V=l[D];if(!V.da&&V.listener==d&&V.capture==!!g&&V.ha==_)return D}return-1}var C="closure_lm_"+(1e6*Math.random()|0),L={};function $(l,d,g,_,D){if(Array.isArray(d)){for(var V=0;V<d.length;V++)$(l,d[V],g,_,D);return null}return g=ie(g),l&&l[B]?l.K(d,g,u(_)?!!_.capture:!!_,D):U(l,d,g,!1,_,D)}function U(l,d,g,_,D,V){if(!d)throw Error("Invalid event type");var G=u(D)?!!D.capture:!!D,Ve=ae(l);if(Ve||(l[C]=Ve=new Te(l)),g=Ve.add(d,g,_,G,V),g.proxy)return g;if(_=W(),g.proxy=_,_.src=l,_.listener=g,l.addEventListener)gs||(D=G),D===void 0&&(D=!1),l.addEventListener(d.toString(),_,D);else if(l.attachEvent)l.attachEvent(K(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return g}function W(){function l(g){return d.call(l.src,l.listener,g)}const d=q;return l}function Q(l,d,g,_,D){if(Array.isArray(d))for(var V=0;V<d.length;V++)Q(l,d[V],g,_,D);else _=u(_)?!!_.capture:!!_,g=ie(g),l&&l[B]?(l=l.i,d=String(d).toString(),d in l.g&&(V=l.g[d],g=R(V,g,_,D),-1<g&&(se(V[g]),Array.prototype.splice.call(V,g,1),V.length==0&&(delete l.g[d],l.h--)))):l&&(l=ae(l))&&(d=l.g[d.toString()],l=-1,d&&(l=R(d,g,_,D)),(g=-1<l?d[l]:null)&&z(g))}function z(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[B])Me(d.i,l);else{var g=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(g,_,l.capture):d.detachEvent?d.detachEvent(K(g),_):d.addListener&&d.removeListener&&d.removeListener(_),(g=ae(d))?(Me(g,l),g.h==0&&(g.src=null,d[C]=null)):se(l)}}}function K(l){return l in L?L[l]:L[l]="on"+l}function q(l,d){if(l.da)l=!0;else{d=new Rn(d,this);var g=l.listener,_=l.ha||l.src;l.fa&&z(l),l=g.call(_,d)}return l}function ae(l){return l=l[C],l instanceof Te?l:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(l){return typeof l=="function"?l:(l[J]||(l[J]=function(d){return l.handleEvent(d)}),l[J])}function re(){Qe.call(this),this.i=new Te(this),this.M=this,this.F=null}I(re,Qe),re.prototype[B]=!0,re.prototype.removeEventListener=function(l,d,g,_){Q(this,l,d,g,_)};function ce(l,d){var g,_=l.F;if(_)for(g=[];_;_=_.F)g.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Ye(d,l);else if(d instanceof Ye)d.target=d.target||l;else{var D=d;d=new Ye(_,l),T(d,D)}if(D=!0,g)for(var V=g.length-1;0<=V;V--){var G=d.g=g[V];D=ke(G,_,!0,d)&&D}if(G=d.g=l,D=ke(G,_,!0,d)&&D,D=ke(G,_,!1,d)&&D,g)for(V=0;V<g.length;V++)G=d.g=g[V],D=ke(G,_,!1,d)&&D}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],_=0;_<g.length;_++)se(g[_]);delete l.g[d],l.h--}}this.F=null},re.prototype.K=function(l,d,g,_){return this.i.add(String(l),d,!1,g,_)},re.prototype.L=function(l,d,g,_){return this.i.add(String(l),d,!0,g,_)};function ke(l,d,g,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,V=0;V<d.length;++V){var G=d[V];if(G&&!G.da&&G.capture==g){var Ve=G.listener,mt=G.ha||G.src;G.fa&&Me(l.i,G),D=Ve.call(mt,_)!==!1&&D}}return D&&!_.defaultPrevented}function Ce(l,d,g){if(typeof l=="function")g&&(l=p(l,g));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Tt(l){l.g=Ce(()=>{l.g=null,l.i&&(l.i=!1,Tt(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class lt extends Qe{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(l){Qe.call(this),this.h=l,this.g={}}I(gt,Qe);var wt=[];function ms(l){F(l.g,function(d,g){this.g.hasOwnProperty(g)&&z(d)},l),l.g={}}gt.prototype.N=function(){gt.aa.N.call(this),ms(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Lr=a.JSON.stringify,Mt=a.JSON.parse,Zt=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Vr(){}Vr.prototype.h=null;function hp(l){return l.h||(l.h=l.i())}function fp(){}var ji={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lu(){Ye.call(this,"d")}I(lu,Ye);function cu(){Ye.call(this,"c")}I(cu,Ye);var Xs={},dp=null;function wa(){return dp=dp||new re}Xs.La="serverreachability";function pp(l){Ye.call(this,Xs.La,l)}I(pp,Ye);function Wi(l){const d=wa();ce(d,new pp(d))}Xs.STAT_EVENT="statevent";function gp(l,d){Ye.call(this,Xs.STAT_EVENT,l),this.stat=d}I(gp,Ye);function Lt(l){const d=wa();ce(d,new gp(d,l))}Xs.Ma="timingevent";function mp(l,d){Ye.call(this,Xs.Ma,l),this.size=d}I(mp,Ye);function qi(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function Ki(){this.g=!0}Ki.prototype.xa=function(){this.g=!1};function E0(l,d,g,_,D,V){l.info(function(){if(l.g)if(V)for(var G="",Ve=V.split("&"),mt=0;mt<Ve.length;mt++){var Se=Ve[mt].split("=");if(1<Se.length){var It=Se[0];Se=Se[1];var bt=It.split("_");G=2<=bt.length&&bt[1]=="type"?G+(It+"="+Se+"&"):G+(It+"=redacted&")}}else G=null;else G=V;return"XMLHTTP REQ ("+_+") [attempt "+D+"]: "+d+`
`+g+`
`+G})}function T0(l,d,g,_,D,V,G){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+D+"]: "+d+`
`+g+`
`+V+" "+G})}function Fr(l,d,g,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+I0(l,g)+(_?" "+_:"")})}function w0(l,d){l.info(function(){return"TIMEOUT: "+d})}Ki.prototype.info=function(){};function I0(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var _=g[l];if(!(2>_.length)){var D=_[1];if(Array.isArray(D)&&!(1>D.length)){var V=D[0];if(V!="noop"&&V!="stop"&&V!="close")for(var G=1;G<D.length;G++)D[G]=""}}}}return Lr(g)}catch{return d}}var Ia={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},_p={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},uu;function ba(){}I(ba,Vr),ba.prototype.g=function(){return new XMLHttpRequest},ba.prototype.i=function(){return{}},uu=new ba;function _s(l,d,g,_){this.j=l,this.i=d,this.l=g,this.R=_||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yp}function yp(){this.i=null,this.g="",this.h=!1}var vp={},hu={};function fu(l,d,g){l.L=1,l.v=Sa(Wn(d)),l.m=g,l.P=!0,Ep(l,null)}function Ep(l,d){l.F=Date.now(),Ra(l),l.A=Wn(l.v);var g=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),xp(g.i,"t",_),l.C=0,g=l.j.J,l.h=new yp,l.g=Jp(l.j,g?d:null,!l.m),0<l.O&&(l.M=new lt(p(l.Y,l,l.g),l.O)),d=l.U,g=l.g,_=l.ca;var D="readystatechange";Array.isArray(D)||(D&&(wt[0]=D.toString()),D=wt);for(var V=0;V<D.length;V++){var G=$(g,D[V],_||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Wi(),E0(l.i,l.u,l.A,l.l,l.R,l.m)}_s.prototype.ca=function(l){l=l.target;const d=this.M;d&&qn(l)==3?d.j():this.Y(l)},_s.prototype.Y=function(l){try{if(l==this.g)e:{const bt=qn(this.g);var d=this.g.Ba();const Hr=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Hp(this.g)))){this.J||bt!=4||d==7||(d==8||0>=Hr?Wi(3):Wi(2)),du(this);var g=this.g.Z();this.X=g;t:if(Tp(this)){var _=Hp(this.g);l="";var D=_.length,V=qn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Js(this),zi(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(V&&d==D-1)});_.length=0,this.h.g+=l,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,T0(this.i,this.u,this.A,this.l,this.R,bt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,mt=this.g;if((Ve=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(Ve)){var Se=Ve;break t}}Se=null}if(g=Se)Fr(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,pu(this,g);else{this.o=!1,this.s=3,Lt(12),Js(this),zi(this);break e}}if(this.P){g=!0;let un;for(;!this.J&&this.C<G.length;)if(un=b0(this,G),un==hu){bt==4&&(this.s=4,Lt(14),g=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(un==vp){this.s=4,Lt(15),Fr(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else Fr(this.i,this.l,un,null),pu(this,un);if(Tp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||G.length!=0||this.h.h||(this.s=1,Lt(16),g=!1),this.o=this.o&&g,!g)Fr(this.i,this.l,G,"[Invalid Chunked Response]"),Js(this),zi(this);else if(0<G.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Eu(It),It.M=!0,Lt(11))}}else Fr(this.i,this.l,G,null),pu(this,G);bt==4&&Js(this),this.o&&!this.J&&(bt==4?Gp(this.j,this):(this.o=!1,Ra(this)))}else H0(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Js(this),zi(this)}}}catch{}finally{}};function Tp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function b0(l,d){var g=l.C,_=d.indexOf(`
`,g);return _==-1?hu:(g=Number(d.substring(g,_)),isNaN(g)?vp:(_+=1,_+g>d.length?hu:(d=d.slice(_,_+g),l.C=_+g,d)))}_s.prototype.cancel=function(){this.J=!0,Js(this)};function Ra(l){l.S=Date.now()+l.I,wp(l,l.I)}function wp(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=qi(p(l.ba,l),d)}function du(l){l.B&&(a.clearTimeout(l.B),l.B=null)}_s.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(w0(this.i,this.A),this.L!=2&&(Wi(),Lt(17)),Js(this),this.s=2,zi(this)):wp(this,this.S-l)};function zi(l){l.j.G==0||l.J||Gp(l.j,l)}function Js(l){du(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,ms(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function pu(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||gu(g.h,l))){if(!l.K&&gu(g.h,l)&&g.G==3){try{var _=g.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var D=_;if(D[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)xa(g),Oa(g);else break e;vu(g),Lt(18)}}else g.za=D[1],0<g.za-g.T&&37500>D[2]&&g.F&&g.v==0&&!g.C&&(g.C=qi(p(g.Za,g),6e3));if(1>=Rp(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else er(g,11)}else if((l.K||g.g==l)&&xa(g),!O(d))for(D=g.Da.g.parse(d),d=0;d<D.length;d++){let Se=D[d];if(g.T=Se[0],Se=Se[1],g.G==2)if(Se[0]=="c"){g.K=Se[1],g.ia=Se[2];const It=Se[3];It!=null&&(g.la=It,g.j.info("VER="+g.la));const bt=Se[4];bt!=null&&(g.Aa=bt,g.j.info("SVER="+g.Aa));const Hr=Se[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(_=1.5*Hr,g.L=_,g.j.info("backChannelRequestTimeoutMs_="+_)),_=g;const un=l.g;if(un){const La=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var V=_.h;V.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(mu(V,V.h),V.h=null))}if(_.D){const Tu=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Tu&&(_.ya=Tu,He(_.I,_.D,Tu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),_=g;var G=l;if(_.qa=Xp(_,_.J?_.ia:null,_.W),G.K){Ap(_.h,G);var Ve=G,mt=_.L;mt&&(Ve.I=mt),Ve.B&&(du(Ve),Ra(Ve)),_.g=G}else Kp(_);0<g.i.length&&Da(g)}else Se[0]!="stop"&&Se[0]!="close"||er(g,7);else g.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?er(g,7):yu(g):Se[0]!="noop"&&g.l&&g.l.ta(Se),g.v=0)}}Wi(4)}catch{}}var R0=class{constructor(l,d){this.g=l,this.map=d}};function Ip(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Rp(l){return l.h?1:l.g?l.g.size:0}function gu(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function mu(l,d){l.g?l.g.add(d):l.h=d}function Ap(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Ip.prototype.cancel=function(){if(this.i=Cp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Cp(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return k(l.i)}function A0(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(c(l)){for(var d=[],g=l.length,_=0;_<g;_++)d.push(l[_]);return d}d=[],g=0;for(_ in l)d[g++]=l[_];return d}function C0(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(c(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const _ in l)d[g++]=_;return d}}}function Sp(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(c(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=C0(l),_=A0(l),D=_.length,V=0;V<D;V++)d.call(void 0,_[V],g&&g[V],l)}var Pp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S0(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var _=l[g].indexOf("="),D=null;if(0<=_){var V=l[g].substring(0,_);D=l[g].substring(_+1)}else V=l[g];d(V,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Zs(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Zs){this.h=l.h,Aa(this,l.j),this.o=l.o,this.g=l.g,Ca(this,l.s),this.l=l.l;var d=l.i,g=new Yi;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),kp(this,g),this.m=l.m}else l&&(d=String(l).match(Pp))?(this.h=!1,Aa(this,d[1]||"",!0),this.o=Gi(d[2]||""),this.g=Gi(d[3]||"",!0),Ca(this,d[4]),this.l=Gi(d[5]||"",!0),kp(this,d[6]||"",!0),this.m=Gi(d[7]||"")):(this.h=!1,this.i=new Yi(null,this.h))}Zs.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Qi(d,Np,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Qi(d,Np,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Qi(g,g.charAt(0)=="/"?N0:k0,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Qi(g,D0)),l.join("")};function Wn(l){return new Zs(l)}function Aa(l,d,g){l.j=g?Gi(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function Ca(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function kp(l,d,g){d instanceof Yi?(l.i=d,x0(l.i,l.h)):(g||(d=Qi(d,O0)),l.i=new Yi(d,l.h))}function He(l,d,g){l.i.set(d,g)}function Sa(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Gi(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Qi(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,P0),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function P0(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Np=/[#\/\?@]/g,k0=/[#\?:]/g,N0=/[#\?]/g,O0=/[#\?@]/g,D0=/#/g;function Yi(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function ys(l){l.g||(l.g=new Map,l.h=0,l.i&&S0(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=Yi.prototype,t.add=function(l,d){ys(this),this.i=null,l=Ur(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function Op(l,d){ys(l),d=Ur(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Dp(l,d){return ys(l),d=Ur(l,d),l.g.has(d)}t.forEach=function(l,d){ys(this),this.g.forEach(function(g,_){g.forEach(function(D){l.call(d,D,_,this)},this)},this)},t.na=function(){ys(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let _=0;_<d.length;_++){const D=l[_];for(let V=0;V<D.length;V++)g.push(d[_])}return g},t.V=function(l){ys(this);let d=[];if(typeof l=="string")Dp(this,l)&&(d=d.concat(this.g.get(Ur(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},t.set=function(l,d){return ys(this),this.i=null,l=Ur(this,l),Dp(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function xp(l,d,g){Op(l,d),0<g.length&&(l.i=null,l.g.set(Ur(l,d),k(g)),l.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var _=d[g];const V=encodeURIComponent(String(_)),G=this.V(_);for(_=0;_<G.length;_++){var D=V;G[_]!==""&&(D+="="+encodeURIComponent(String(G[_]))),l.push(D)}}return this.i=l.join("&")};function Ur(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function x0(l,d){d&&!l.j&&(ys(l),l.i=null,l.g.forEach(function(g,_){var D=_.toLowerCase();_!=D&&(Op(this,_),xp(this,D,g))},l)),l.j=d}function M0(l,d){const g=new Ki;if(a.Image){const _=new Image;_.onload=m(vs,g,"TestLoadImage: loaded",!0,d,_),_.onerror=m(vs,g,"TestLoadImage: error",!1,d,_),_.onabort=m(vs,g,"TestLoadImage: abort",!1,d,_),_.ontimeout=m(vs,g,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function L0(l,d){const g=new Ki,_=new AbortController,D=setTimeout(()=>{_.abort(),vs(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(V=>{clearTimeout(D),V.ok?vs(g,"TestPingServer: ok",!0,d):vs(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),vs(g,"TestPingServer: error",!1,d)})}function vs(l,d,g,_,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),_(g)}catch{}}function V0(){this.g=new Zt}function F0(l,d,g){const _=g||"";try{Sp(l,function(D,V){let G=D;u(D)&&(G=Lr(D)),d.push(_+V+"="+encodeURIComponent(G))})}catch(D){throw d.push(_+"type="+encodeURIComponent("_badmap")),D}}function Pa(l){this.l=l.Ub||null,this.j=l.eb||!1}I(Pa,Vr),Pa.prototype.g=function(){return new ka(this.l,this.j)},Pa.prototype.i=function(l){return function(){return l}}({});function ka(l,d){re.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ka,re),t=ka.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Ji(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xi(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Ji(this)),this.g&&(this.readyState=3,Ji(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Mp(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function Mp(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Xi(this):Ji(this),this.readyState==3&&Mp(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Xi(this))},t.Qa=function(l){this.g&&(this.response=l,Xi(this))},t.ga=function(){this.g&&Xi(this)};function Xi(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Ji(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function Ji(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(ka.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Lp(l){let d="";return F(l,function(g,_){d+=_,d+=":",d+=g,d+=`\r
`}),d}function _u(l,d,g){e:{for(_ in g){var _=!1;break e}_=!0}_||(g=Lp(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):He(l,d,g))}function Xe(l){re.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Xe,re);var U0=/^https?$/i,B0=["POST","PUT"];t=Xe.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,g,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():uu.g(),this.v=this.o?hp(this.o):hp(uu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(V){Vp(this,V);return}if(l=g||"",g=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var D in _)g.set(D,_[D]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())g.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),D=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(B0,d,void 0))||_||D||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of g)this.g.setRequestHeader(V,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bp(this),this.u=!0,this.g.send(l),this.u=!1}catch(V){Vp(this,V)}};function Vp(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Fp(l),Na(l)}function Fp(l){l.A||(l.A=!0,ce(l,"complete"),ce(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,ce(this,"complete"),ce(this,"abort"),Na(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Na(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Up(this):this.bb())},t.bb=function(){Up(this)};function Up(l){if(l.h&&typeof o<"u"&&(!l.v[1]||qn(l)!=4||l.Z()!=2)){if(l.u&&qn(l)==4)Ce(l.Ea,0,l);else if(ce(l,"readystatechange"),qn(l)==4){l.h=!1;try{const G=l.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var _;if(_=G===0){var D=String(l.D).match(Pp)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),_=!U0.test(D?D.toLowerCase():"")}g=_}if(g)ce(l,"complete"),ce(l,"success");else{l.m=6;try{var V=2<qn(l)?l.g.statusText:""}catch{V=""}l.l=V+" ["+l.Z()+"]",Fp(l)}}finally{Na(l)}}}}function Na(l,d){if(l.g){Bp(l);const g=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||ce(l,"ready");try{g.onreadystatechange=_}catch{}}}function Bp(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function qn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<qn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),Mt(d)}};function Hp(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function H0(l){const d={};l=(l.g&&2<=qn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(O(l[_]))continue;var g=S(l[_]);const D=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=d[D]||[];d[D]=V,V.push(g)}b(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zi(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function $p(l){this.Aa=0,this.i=[],this.j=new Ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zi("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zi("baseRetryDelayMs",5e3,l),this.cb=Zi("retryDelaySeedMs",1e4,l),this.Wa=Zi("forwardChannelMaxRetries",2,l),this.wa=Zi("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Ip(l&&l.concurrentRequestLimit),this.Da=new V0,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$p.prototype,t.la=8,t.G=1,t.connect=function(l,d,g,_){Lt(0),this.W=l,this.H=d||{},g&&_!==void 0&&(this.H.OSID=g,this.H.OAID=_),this.F=this.X,this.I=Xp(this,null,this.W),Da(this)};function yu(l){if(jp(l),l.G==3){var d=l.U++,g=Wn(l.I);if(He(g,"SID",l.K),He(g,"RID",d),He(g,"TYPE","terminate"),eo(l,g),d=new _s(l,l.j,d),d.L=2,d.v=Sa(Wn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Jp(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ra(d)}Yp(l)}function Oa(l){l.g&&(Eu(l),l.g.cancel(),l.g=null)}function jp(l){Oa(l),l.u&&(a.clearTimeout(l.u),l.u=null),xa(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Da(l){if(!bp(l.h)&&!l.s){l.s=!0;var d=l.Ga;he||cn(),te||(he(),te=!0),Ge.add(d,l),l.B=0}}function $0(l,d){return Rp(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=qi(p(l.Ga,l,d),Qp(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const D=new _s(this,this.j,l);let V=this.o;if(this.S&&(V?(V=v(V),T(V,this.S)):V=this.S),this.m!==null||this.O||(D.H=V,V=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var _=this.i[g];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=qp(this,D,d),g=Wn(this.I),He(g,"RID",l),He(g,"CVER",22),this.D&&He(g,"X-HTTP-Session-Id",this.D),eo(this,g),V&&(this.O?d="headers="+encodeURIComponent(String(Lp(V)))+"&"+d:this.m&&_u(g,this.m,V)),mu(this.h,D),this.Ua&&He(g,"TYPE","init"),this.P?(He(g,"$req",d),He(g,"SID","null"),D.T=!0,fu(D,g,null)):fu(D,g,d),this.G=2}}else this.G==3&&(l?Wp(this,l):this.i.length==0||bp(this.h)||Wp(this))};function Wp(l,d){var g;d?g=d.l:g=l.U++;const _=Wn(l.I);He(_,"SID",l.K),He(_,"RID",g),He(_,"AID",l.T),eo(l,_),l.m&&l.o&&_u(_,l.m,l.o),g=new _s(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=qp(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),mu(l.h,g),fu(g,_,d)}function eo(l,d){l.H&&F(l.H,function(g,_){He(d,_,g)}),l.l&&Sp({},function(g,_){He(d,_,g)})}function qp(l,d,g){g=Math.min(l.i.length,g);var _=l.l?p(l.l.Na,l.l,l):null;e:{var D=l.i;let V=-1;for(;;){const G=["count="+g];V==-1?0<g?(V=D[0].g,G.push("ofs="+V)):V=0:G.push("ofs="+V);let Ve=!0;for(let mt=0;mt<g;mt++){let Se=D[mt].g;const It=D[mt].map;if(Se-=V,0>Se)V=Math.max(0,D[mt].g-100),Ve=!1;else try{F0(It,G,"req"+Se+"_")}catch{_&&_(It)}}if(Ve){_=G.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,_}function Kp(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;he||cn(),te||(he(),te=!0),Ge.add(d,l),l.v=0}}function vu(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=qi(p(l.Fa,l),Qp(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,zp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=qi(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Oa(this),zp(this))};function Eu(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function zp(l){l.g=new _s(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=Wn(l.qa);He(d,"RID","rpc"),He(d,"SID",l.K),He(d,"AID",l.T),He(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(d,"TO",l.ja),He(d,"TYPE","xmlhttp"),eo(l,d),l.m&&l.o&&_u(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=Sa(Wn(d)),g.m=null,g.P=!0,Ep(g,l)}t.Za=function(){this.C!=null&&(this.C=null,Oa(this),vu(this),Lt(19))};function xa(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Gp(l,d){var g=null;if(l.g==d){xa(l),Eu(l),l.g=null;var _=2}else if(gu(l.h,d))g=d.D,Ap(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var D=l.B;_=wa(),ce(_,new mp(_,g)),Da(l)}else Kp(l);else if(D=d.s,D==3||D==0&&0<d.X||!(_==1&&$0(l,d)||_==2&&vu(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),D){case 1:er(l,5);break;case 4:er(l,10);break;case 3:er(l,6);break;default:er(l,2)}}}function Qp(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function er(l,d){if(l.j.info("Error code "+d),d==2){var g=p(l.fb,l),_=l.Xa;const D=!_;_=new Zs(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Aa(_,"https"),Sa(_),D?M0(_.toString(),g):L0(_.toString(),g)}else Lt(2);l.G=0,l.l&&l.l.sa(d),Yp(l),jp(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Yp(l){if(l.G=0,l.ka=[],l.l){const d=Cp(l.h);(d.length!=0||l.i.length!=0)&&(N(l.ka,d),N(l.ka,l.i),l.h.i.length=0,k(l.i),l.i.length=0),l.l.ra()}}function Xp(l,d,g){var _=g instanceof Zs?Wn(g):new Zs(g);if(_.g!="")d&&(_.g=d+"."+_.g),Ca(_,_.s);else{var D=a.location;_=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var V=new Zs(null);_&&Aa(V,_),d&&(V.g=d),D&&Ca(V,D),g&&(V.l=g),_=V}return g=l.D,d=l.ya,g&&d&&He(_,g,d),He(_,"VER",l.la),eo(l,_),_}function Jp(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Xe(new Pa({eb:g})):new Xe(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zp(){}t=Zp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ma(){}Ma.prototype.g=function(l,d){return new qt(l,d)};function qt(l,d){re.call(this),this.g=new $p(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!O(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!O(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new Br(this)}I(qt,re),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){yu(this.g)},qt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Lr(l),l=g);d.i.push(new R0(d.Ya++,l)),d.G==3&&Da(d)},qt.prototype.N=function(){this.g.l=null,delete this.j,yu(this.g),delete this.g,qt.aa.N.call(this)};function eg(l){lu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}I(eg,lu);function tg(){cu.call(this),this.status=1}I(tg,cu);function Br(l){this.g=l}I(Br,Zp),Br.prototype.ua=function(){ce(this.g,"a")},Br.prototype.ta=function(l){ce(this.g,new eg(l))},Br.prototype.sa=function(l){ce(this.g,new tg)},Br.prototype.ra=function(){ce(this.g,"b")},Ma.prototype.createWebChannel=Ma.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,BE=function(){return new Ma},UE=function(){return wa()},FE=Xs,$h={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ia.NO_ERROR=0,Ia.TIMEOUT=8,Ia.HTTP_ERROR=6,ul=Ia,_p.COMPLETE="complete",VE=_p,fp.EventType=ji,ji.OPEN="a",ji.CLOSE="b",ji.ERROR="c",ji.MESSAGE="d",re.prototype.listen=re.prototype.K,fo=fp,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,LE=Xe}).apply(typeof Ka<"u"?Ka:typeof self<"u"?self:typeof window<"u"?window:{});const am="@firebase/firestore";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let Mi="11.0.2";/**
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
 */const wr=new ca("@firebase/firestore");function Kr(){return wr.logLevel}function ee(t,...e){if(wr.logLevel<=ye.DEBUG){const n=e.map(td);wr.debug(`Firestore (${Mi}): ${t}`,...n)}}function us(t,...e){if(wr.logLevel<=ye.ERROR){const n=e.map(td);wr.error(`Firestore (${Mi}): ${t}`,...n)}}function vi(t,...e){if(wr.logLevel<=ye.WARN){const n=e.map(td);wr.warn(`Firestore (${Mi}): ${t}`,...n)}}function td(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Mi}) INTERNAL ASSERTION FAILED: `+t;throw us(e),new Error(e)}function xe(t,e){t||de()}function _e(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends $n{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ms{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class HE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class NP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class OP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class DP{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let s=this.i;const r=c=>this.i!==s?(s=this.i,n(c)):Promise.resolve();let i=new Ms;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ms,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ms)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new HE(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new At(e)}}class xP{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=At.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class MP{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new xP(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class LP{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VP{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){xe(this.o===void 0);const s=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new LP(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class $E{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=FP(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%e.length))}return s}}function we(t,e){return t<e?-1:t>e?1:0}function Ei(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */class nt{static now(){return nt.fromMillis(Date.now())}static fromDate(e){return nt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new nt(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new nt(0,0))}static max(){return new pe(new nt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Wo{constructor(e,n,s){n===void 0?n=0:n>e.length&&de(),s===void 0?s=e.length-n:s>e.length-n&&de(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Wo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=e.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ke extends Wo{construct(e,n,s){return new Ke(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(j.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const UP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Wo{construct(e,n,s){return new vt(e,n,s)}static isValidIdentifier(e){return UP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new oe(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new oe(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new oe(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new oe(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Ke.fromString(e))}static fromName(e){return new le(Ke.fromString(e).popFirst(5))}static empty(){return new le(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Ke(e.slice()))}}function BP(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=pe.fromTimestamp(s===1e9?new nt(n+1,0):new nt(n,s));return new Bs(r,le.empty(),e)}function HP(t){return new Bs(t.readTime,t.key,-1)}class Bs{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Bs(pe.min(),le.empty(),-1)}static max(){return new Bs(pe.max(),le.empty(),-1)}}function $P(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Li(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==jP)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,s)=>{n(e)})}static reject(e){return new H((n,s)=>{s(e)})}static waitFor(e){return new H((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},c=>s(c))}),o=!0,i===r&&n()})}static or(e){let n=H.resolve(!1);for(const s of e)n=n.next(r=>r?H.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new H((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new H((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function qP(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ie(s),this.se=s=>n.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fc.oe=-1;function Uc(t){return t==null}function Wl(t){return t===0&&1/t==-1/0}function KP(t){return typeof t=="number"&&Number.isInteger(t)&&!Wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function zP(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=lm(e)),e=GP(t.get(n),e);return lm(e)}function GP(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function lm(t){return t+""}/**
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
 */function cm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function jE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let rt=class jh{constructor(e,n){this.comparator=e,this.root=n||Ls.EMPTY}insert(e,n){return new jh(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ls.BLACK,null,null))}remove(e){return new jh(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ls.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}},za=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Ls=class Qn{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??Qn.RED,this.left=r??Qn.EMPTY,this.right=i??Qn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new Qn(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Qn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return Qn.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}};Ls.EMPTY=null,Ls.RED=!0,Ls.BLACK=!1;Ls.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,s,r,i){return this}insert(e,n,s){return new Ls(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new um(this.data.getIterator())}getIteratorFrom(e){return new um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new pn([])}unionWith(e){let n=new at(vt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ei(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class WE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new WE("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const QP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hs(t){if(xe(!!t),typeof t=="string"){let e=0;const n=QP.exec(t);if(xe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ze(t.seconds),nanos:Ze(t.nanos)}}function Ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $s(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bc(t){const e=t.mapValue.fields.__previous_value__;return nd(e)?Bc(e):e}function qo(t){const e=Hs(t.mapValue.fields.__local_write_time__.timestampValue);return new nt(e.seconds,e.nanos)}/**
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
 */class YP{constructor(e,n,s,r,i,o,a,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=u}}class Ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function js(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nd(t)?4:JP(t)?9007199254740991:XP(t)?10:11:de()}function Fn(t,e){if(t===e)return!0;const n=js(t);if(n!==js(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=Hs(r.timestampValue),a=Hs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return $s(r.bytesValue).isEqual($s(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ze(r.geoPointValue.latitude)===Ze(i.geoPointValue.latitude)&&Ze(r.geoPointValue.longitude)===Ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ze(r.integerValue)===Ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Ze(r.doubleValue),a=Ze(i.doubleValue);return o===a?Wl(o)===Wl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ei(t.arrayValue.values||[],e.arrayValue.values||[],Fn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(cm(o)!==cm(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!Fn(o[c],a[c])))return!1;return!0}(t,e);default:return de()}}function zo(t,e){return(t.values||[]).find(n=>Fn(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=js(t),s=js(e);if(n!==s)return we(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ze(i.integerValue||i.doubleValue),c=Ze(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return hm(t.timestampValue,e.timestampValue);case 4:return hm(qo(t),qo(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(i,o){const a=$s(i),c=$s(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let u=0;u<a.length&&u<c.length;u++){const h=we(a[u],c[u]);if(h!==0)return h}return we(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=we(Ze(i.latitude),Ze(o.latitude));return a!==0?a:we(Ze(i.longitude),Ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fm(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,c,u,h;const f=i.fields||{},p=o.fields||{},m=(a=f.value)===null||a===void 0?void 0:a.arrayValue,I=(c=p.value)===null||c===void 0?void 0:c.arrayValue,k=we(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0);return k!==0?k:fm(m,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ga.mapValue&&o===Ga.mapValue)return 0;if(i===Ga.mapValue)return 1;if(o===Ga.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),u=o.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=we(c[f],h[f]);if(p!==0)return p;const m=Ti(a[c[f]],u[h[f]]);if(m!==0)return m}return we(c.length,h.length)}(t.mapValue,e.mapValue);default:throw de()}}function hm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Hs(t),s=Hs(e),r=we(n.seconds,s.seconds);return r!==0?r:we(n.nanos,s.nanos)}function fm(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Ti(n[r],s[r]);if(i)return i}return we(n.length,s.length)}function wi(t){return Wh(t)}function Wh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Hs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return $s(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=Wh(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${Wh(n.fields[o])}`;return r+"}"}(t.mapValue):de()}function hl(t){switch(js(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bc(t);return e?16+hl(e):16;case 5:return 2*t.stringValue.length;case 6:return $s(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+hl(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return kr(s.fields,(i,o)=>{r+=i.length+hl(o)}),r}(t.mapValue);default:throw de()}}function qh(t){return!!t&&"integerValue"in t}function sd(t){return!!t&&"arrayValue"in t}function dm(t){return!!t&&"nullValue"in t}function pm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function fl(t){return!!t&&"mapValue"in t}function XP(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=wo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function JP(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!fl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=vt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=wo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());fl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Fn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];fl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){kr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new tn(wo(this.value))}}function qE(t){const e=[];return kr(t.fields,(n,s)=>{const r=new vt([n]);if(fl(s)){const i=qE(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new pn(e)}/**
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
 */class Pt{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Pt(e,0,pe.min(),pe.min(),pe.min(),tn.empty(),0)}static newFoundDocument(e,n,s,r){return new Pt(e,1,n,pe.min(),s,r,0)}static newNoDocument(e,n){return new Pt(e,2,n,pe.min(),pe.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new Pt(e,3,n,pe.min(),pe.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ql{constructor(e,n){this.position=e,this.inclusive=n}}function gm(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=le.comparator(le.fromName(o.referenceValue),n.key):s=Ti(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function mm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Fn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Kl{constructor(e,n="asc"){this.field=e,this.dir=n}}function ZP(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class KE{}class ot extends KE{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new tk(e,n,s):n==="array-contains"?new rk(e,s):n==="in"?new ik(e,s):n==="not-in"?new ok(e,s):n==="array-contains-any"?new ak(e,s):new ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new nk(e,s):new sk(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ti(n,this.value)):n!==null&&js(this.value)===js(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Un extends KE{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Un(e,n)}matches(e){return zE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function zE(t){return t.op==="and"}function GE(t){return ek(t)&&zE(t)}function ek(t){for(const e of t.filters)if(e instanceof Un)return!1;return!0}function Kh(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+wi(t.value);if(GE(t))return t.filters.map(e=>Kh(e)).join(",");{const e=t.filters.map(n=>Kh(n)).join(",");return`${t.op}(${e})`}}function QE(t,e){return t instanceof ot?function(s,r){return r instanceof ot&&s.op===r.op&&s.field.isEqual(r.field)&&Fn(s.value,r.value)}(t,e):t instanceof Un?function(s,r){return r instanceof Un&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&QE(o,r.filters[a]),!0):!1}(t,e):void de()}function YE(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${wi(n.value)}`}(t):t instanceof Un?function(n){return n.op.toString()+" {"+n.getFilters().map(YE).join(" ,")+"}"}(t):"Filter"}class tk extends ot{constructor(e,n,s){super(e,n,s),this.key=le.fromName(s.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class nk extends ot{constructor(e,n){super(e,"in",n),this.keys=XE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class sk extends ot{constructor(e,n){super(e,"not-in",n),this.keys=XE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function XE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>le.fromName(s.referenceValue))}class rk extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sd(n)&&zo(n.arrayValue,this.value)}}class ik extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&zo(this.value.arrayValue,n)}}class ok extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!zo(this.value.arrayValue,n)}}class ak extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>zo(this.value.arrayValue,s))}}/**
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
 */class lk{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function _m(t,e=null,n=[],s=[],r=null,i=null,o=null){return new lk(t,e,n,s,r,i,o)}function rd(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Kh(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Uc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wi(s)).join(",")),e.ue=n}return e.ue}function id(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ZP(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!QE(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!mm(t.startAt,e.startAt)&&mm(t.endAt,e.endAt)}function zh(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Hc{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ck(t,e,n,s,r,i,o,a){return new Hc(t,e,n,s,r,i,o,a)}function JE(t){return new Hc(t)}function ym(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uk(t){return t.collectionGroup!==null}function Io(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(vt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Kl(i,s))}),n.has(vt.keyField().canonicalString())||e.ce.push(new Kl(vt.keyField(),s))}return e.ce}function xn(t){const e=_e(t);return e.le||(e.le=hk(e,Io(t))),e.le}function hk(t,e){if(t.limitType==="F")return _m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new Kl(r.field,i)});const n=t.endAt?new ql(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ql(t.startAt.position,t.startAt.inclusive):null;return _m(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Gh(t,e,n){return new Hc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $c(t,e){return id(xn(t),xn(e))&&t.limitType===e.limitType}function ZE(t){return`${rd(xn(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>YE(r)).join(", ")}]`),Uc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>wi(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>wi(r)).join(",")),`Target(${s})`}(xn(t))}; limitType=${t.limitType})`}function jc(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):le.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Io(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,c){const u=gm(o,a,c);return o.inclusive?u<=0:u<0}(s.startAt,Io(s),r)||s.endAt&&!function(o,a,c){const u=gm(o,a,c);return o.inclusive?u>=0:u>0}(s.endAt,Io(s),r))}(t,e)}function fk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function eT(t){return(e,n)=>{let s=!1;for(const r of Io(t)){const i=dk(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function dk(t,e,n){const s=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),u=a.data.field(i);return c!==null&&u!==null?Ti(c,u):de()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return de()}}/**
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
 */class Nr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return jE(this.inner)}size(){return this.innerSize}}/**
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
 */const pk=new rt(le.comparator);function hs(){return pk}const tT=new rt(le.comparator);function po(...t){let e=tT;for(const n of t)e=e.insert(n.key,n);return e}function nT(t){let e=tT;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function ur(){return bo()}function sT(){return bo()}function bo(){return new Nr(t=>t.toString(),(t,e)=>t.isEqual(e))}const gk=new rt(le.comparator),mk=new at(le.comparator);function Ee(...t){let e=mk;for(const n of t)e=e.add(n);return e}const _k=new at(we);function yk(){return _k}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wl(e)?"-0":e}}function rT(t){return{integerValue:""+t}}function vk(t,e){return KP(e)?rT(e):od(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(){this._=void 0}}function Ek(t,e,n){return t instanceof zl?function(r,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&nd(i)&&(i=Bc(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Go?oT(t,e):t instanceof Qo?aT(t,e):function(r,i){const o=iT(r,i),a=vm(o)+vm(r.Pe);return qh(o)&&qh(r.Pe)?rT(a):od(r.serializer,a)}(t,e)}function Tk(t,e,n){return t instanceof Go?oT(t,e):t instanceof Qo?aT(t,e):n}function iT(t,e){return t instanceof Gl?function(s){return qh(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class zl extends Wc{}class Go extends Wc{constructor(e){super(),this.elements=e}}function oT(t,e){const n=lT(e);for(const s of t.elements)n.some(r=>Fn(r,s))||n.push(s);return{arrayValue:{values:n}}}class Qo extends Wc{constructor(e){super(),this.elements=e}}function aT(t,e){let n=lT(e);for(const s of t.elements)n=n.filter(r=>!Fn(r,s));return{arrayValue:{values:n}}}class Gl extends Wc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function vm(t){return Ze(t.integerValue||t.doubleValue)}function lT(t){return sd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function wk(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof Go&&r instanceof Go||s instanceof Qo&&r instanceof Qo?Ei(s.elements,r.elements,Fn):s instanceof Gl&&r instanceof Gl?Fn(s.Pe,r.Pe):s instanceof zl&&r instanceof zl}(t.transform,e.transform)}class Ik{constructor(e,n){this.version=e,this.transformResults=n}}class os{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new os}static exists(e){return new os(void 0,e)}static updateTime(e){return new os(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qc{}function cT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new hT(t.key,os.none()):new ua(t.key,t.data,os.none());{const n=t.data,s=tn.empty();let r=new at(vt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Or(t.key,s,new pn(r.toArray()),os.none())}}function bk(t,e,n){t instanceof ua?function(r,i,o){const a=r.value.clone(),c=Tm(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Or?function(r,i,o){if(!dl(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Tm(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(uT(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ro(t,e,n,s){return t instanceof ua?function(i,o,a,c){if(!dl(i.precondition,o))return a;const u=i.value.clone(),h=wm(i.fieldTransforms,c,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Or?function(i,o,a,c){if(!dl(i.precondition,o))return a;const u=wm(i.fieldTransforms,c,o),h=o.data;return h.setAll(uT(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(i,o,a){return dl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function Rk(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=iT(s.transform,r||null);i!=null&&(n===null&&(n=tn.empty()),n.set(s.field,i))}return n||null}function Em(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ei(s,r,(i,o)=>wk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ua extends qc{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Or extends qc{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function uT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function Tm(t,e,n){const s=new Map;xe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Tk(o,a,n[r]))}return s}function wm(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,Ek(i,o,e))}return s}class hT extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ak extends qc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ck{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&bk(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Ro(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Ro(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=sT();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const c=cT(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Ei(this.mutations,e.mutations,(n,s)=>Em(n,s))&&Ei(this.baseMutations,e.baseMutations,(n,s)=>Em(n,s))}}class ad{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){xe(e.mutations.length===s.length);let r=function(){return gk}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ad(e,n,s,r)}}/**
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
 */class Sk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class Pk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,be;function kk(t){switch(t){default:return de();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function fT(t){if(t===void 0)return us("GRPC error has no .code"),j.UNKNOWN;switch(t){case tt.OK:return j.OK;case tt.CANCELLED:return j.CANCELLED;case tt.UNKNOWN:return j.UNKNOWN;case tt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case tt.INTERNAL:return j.INTERNAL;case tt.UNAVAILABLE:return j.UNAVAILABLE;case tt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case tt.NOT_FOUND:return j.NOT_FOUND;case tt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case tt.ABORTED:return j.ABORTED;case tt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case tt.DATA_LOSS:return j.DATA_LOSS;default:return de()}}(be=tt||(tt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Nk(){return new TextEncoder}/**
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
 */const Ok=new Er([4294967295,4294967295],0);function Im(t){const e=Nk().encode(t),n=new ME;return n.update(e),new Uint8Array(n.digest())}function bm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,s],0),new Er([r,i],0)]}class ld{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new go(`Invalid padding: ${n}`);if(s<0)throw new go(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new go(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new go(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Er.fromNumber(this.Te)}Ee(e,n,s){let r=e.add(n.multiply(Er.fromNumber(s)));return r.compare(Ok)===1&&(r=new Er([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Im(e),[s,r]=bm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);if(!this.de(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ld(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Im(e),[s,r]=bm(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(s,r,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class go extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kc{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,ha.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Kc(pe.min(),r,new rt(we),hs(),Ee())}}class ha{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new ha(s,n,Ee(),Ee(),Ee())}}/**
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
 */class pl{constructor(e,n,s,r){this.Re=e,this.removedTargetIds=n,this.key=s,this.Ve=r}}class dT{constructor(e,n){this.targetId=e,this.me=n}}class pT{constructor(e,n,s=Et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Rm{constructor(){this.fe=0,this.ge=Am(),this.pe=Et.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),s=Ee();return this.ge.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:de()}}),new ha(this.pe,this.ye,e,n,s)}Ce(){this.we=!1,this.ge=Am()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,xe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Dk{constructor(e){this.Le=e,this.Be=new Map,this.ke=hs(),this.qe=Qa(),this.Qe=Qa(),this.Ke=new rt(we)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(n);break;case 3:this.je(n)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((s,r)=>{this.je(r)&&n(r)})}Je(e){const n=e.targetId,s=e.me.count,r=this.Ye(n);if(r){const i=r.target;if(zh(i))if(s===0){const o=new le(i.path);this.We(n,o,Pt.newNoDocument(o,pe.min()))}else xe(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=$s(s).toUint8Array()}catch(c){if(c instanceof WE)return vi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new ld(o,r,i)}catch(c){return vi(c instanceof go?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,s){return n.me.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),r++)}),r}it(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&zh(a.target)){const c=new le(a.target.path);this.st(c).has(o)||this.ot(o,c)||this.We(o,c,Pt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let s=Ee();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Ye(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const r=new Kc(e,n,this.Ke,this.ke,s);return this.ke=hs(),this.qe=Qa(),this.Qe=Qa(),this.Ke=new rt(we),r}Ue(e,n){if(!this.je(e))return;const s=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,s),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const r=this.ze(e);this.ot(e,n)?r.Fe(n,1):r.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),s&&(this.ke=this.ke.insert(n,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new Rm,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new at(we),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(we),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Rm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Qa(){return new rt(le.comparator)}function Am(){return new rt(le.comparator)}const xk={asc:"ASCENDING",desc:"DESCENDING"},Mk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Lk={and:"AND",or:"OR"};class Vk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qh(t,e){return t.useProto3Json||Uc(e)?e:{value:e}}function Ql(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function gT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Fk(t,e){return Ql(t,e.toTimestamp())}function Mn(t){return xe(!!t),pe.fromTimestamp(function(n){const s=Hs(n);return new nt(s.seconds,s.nanos)}(t))}function cd(t,e){return Yh(t,e).canonicalString()}function Yh(t,e){const n=function(r){return new Ke(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function mT(t){const e=Ke.fromString(t);return xe(TT(e)),e}function Xh(t,e){return cd(t.databaseId,e.path)}function qu(t,e){const n=mT(e);if(n.get(1)!==t.databaseId.projectId)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(yT(n))}function _T(t,e){return cd(t.databaseId,e)}function Uk(t){const e=mT(t);return e.length===4?Ke.emptyPath():yT(e)}function Jh(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function yT(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Cm(t,e,n){return{name:Xh(t,e),fields:n.value.mapValue.fields}}function Bk(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:fT(u.code);return new oe(h,u.message||"")}(o);n=new pT(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=qu(t,s.document.name),i=Mn(s.document.updateTime),o=s.document.createTime?Mn(s.document.createTime):pe.min(),a=new tn({mapValue:{fields:s.document.fields}}),c=Pt.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new pl(u,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=qu(t,s.document),i=s.readTime?Mn(s.readTime):pe.min(),o=Pt.newNoDocument(r,i),a=s.removedTargetIds||[];n=new pl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=qu(t,s.document),i=s.removedTargetIds||[];n=new pl([],i,r,null)}else{if(!("filter"in e))return de();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new Pk(r,i),a=s.targetId;n=new dT(a,o)}}return n}function Hk(t,e){let n;if(e instanceof ua)n={update:Cm(t,e.key,e.value)};else if(e instanceof hT)n={delete:Xh(t,e.key)};else if(e instanceof Or)n={update:Cm(t,e.key,e.data),updateMask:Yk(e.fieldMask)};else{if(!(e instanceof Ak))return de();n={verify:Xh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof zl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Go)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Qo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Gl)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw de()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:Fk(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function $k(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Mn(r.updateTime):Mn(i);return o.isEqual(pe.min())&&(o=Mn(i)),new Ik(o,r.transformResults||[])}(n,e))):[]}function jk(t,e){return{documents:[_T(t,e.path)]}}function Wk(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=_T(t,r);const i=function(u){if(u.length!==0)return ET(Un.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:Gr(p.field),direction:zk(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ct:n,parent:r}}function qk(t){let e=Uk(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){xe(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=vT(f);return p instanceof Un&&GE(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(I){return new Kl(Qr(I.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,Uc(p)?null:p}(n.limit));let c=null;n.startAt&&(c=function(f){const p=!!f.before,m=f.values||[];return new ql(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,m=f.values||[];return new ql(m,p)}(n.endAt)),ck(e,r,o,i,a,"F",c,u)}function Kk(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Qr(n.unaryFilter.field);return ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=Qr(n.unaryFilter.field);return ot.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(Qr(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Un.create(n.compositeFilter.filters.map(s=>vT(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function zk(t){return xk[t]}function Gk(t){return Mk[t]}function Qk(t){return Lk[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return vt.fromServerFormat(t.fieldPath)}function ET(t){return t instanceof ot?function(n){if(n.op==="=="){if(pm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(dm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(dm(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:Gk(n.op),value:n.value}}}(t):t instanceof Un?function(n){const s=n.getFilters().map(r=>ET(r));return s.length===1?s[0]:{compositeFilter:{op:Qk(n.op),filters:s}}}(t):de()}function Yk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function TT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ns{constructor(e,n,s,r,i=pe.min(),o=pe.min(),a=Et.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ns(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Xk{constructor(e){this.ht=e}}function Jk(t){const e=qk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gh(e,e.limit,"L"):e}/**
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
 */class Zk{constructor(){this.ln=new eN}addToCollectionParentIndex(e,n){return this.ln.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(Bs.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(Bs.min())}updateCollectionGroup(e,n,s){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class eN{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new at(Ke.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new at(Ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class $t{static withCacheSize(e){return new $t(e,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */$t.DEFAULT_COLLECTION_PERCENTILE=10,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,$t.DEFAULT=new $t(41943040,$t.DEFAULT_COLLECTION_PERCENTILE,$t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),$t.DISABLED=new $t(-1,0,0);/**
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
 */class Ii{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new Ii(0)}static Qn(){return new Ii(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm([t,e],[n,s]){const r=we(t,n);return r===0?we(e,s):r}class tN{constructor(e){this.Gn=e,this.buffer=new at(Pm),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();Pm(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class nN{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ee("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vi(n)?ee("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Li(n)}await this.Yn(3e5)})}}class sN{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return H.resolve(Fc.oe);const s=new tN(n);return this.Zn.forEachTarget(e,r=>s.Hn(r.sequenceNumber)).next(()=>this.Zn.er(e,r=>s.Hn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.Zn.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(Sm)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Sm):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let s,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,n))).next(f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Kr()<=ye.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(u-c)+`ms
Total Duration: ${u-h}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function rN(t,e){return new sN(t,e)}/**
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
 */class iN{constructor(){this.changes=new Nr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Pt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?H.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class oN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class aN{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Ro(s.mutation,r,pn.empty(),nt.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ee()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ee()){const r=ur();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=po();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=ur();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ee()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=hs();const o=bo(),a=function(){return bo()}();return n.forEach((c,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Or)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Ro(h.mutation,u,h.mutation.getFieldMask(),nt.now())):o.set(u.key,pn.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new oN(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=bo();let r=new rt((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let h=s.get(c)||pn.empty();h=a.applyToLocalView(u,h),s.set(c,h);const f=(r.get(a.batchId)||Ee()).add(c);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,h=c.value,f=sT();h.forEach(p=>{if(!i.has(p)){const m=cT(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return H.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):H.resolve(ur());let a=-1,c=i;return o.next(u=>H.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?H.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Ee())).next(h=>({batchId:a,changes:nT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(s=>{let r=po();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=po();return this.indexManager.getCollectionParents(e,i).next(a=>H.forEach(a,c=>{const u=function(f,p){return new Hc(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((c,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Pt.newInvalidDocument(h)))});let a=po();return o.forEach((c,u)=>{const h=i.get(c);h!==void 0&&Ro(h.mutation,u,pn.empty(),nt.now()),jc(n,u)&&(a=a.insert(c,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return H.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Mn(r.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(r){return{name:r.name,query:Jk(r.bundledQuery),readTime:Mn(r.readTime)}}(n)),H.resolve()}}/**
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
 */class cN{constructor(){this.overlays=new rt(le.comparator),this.Er=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const s=ur();return H.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Tt(e,n,i)}),H.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Er.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(s)),H.resolve()}getOverlaysForCollection(e,n,s){const r=ur(),i=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return H.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new rt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=ur(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return H.resolve(a)}Tt(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Er.get(r.largestBatchId).delete(s.key);this.Er.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Sk(n,s));let i=this.Er.get(n);i===void 0&&(i=Ee(),this.Er.set(n,i)),this.Er.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
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
 */class ud{constructor(){this.dr=new at(ut.Ar),this.Rr=new at(ut.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const s=new ut(e,n);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.gr(new ut(e,n))}pr(e,n){e.forEach(s=>this.removeReference(s,n))}yr(e){const n=new le(new Ke([])),s=new ut(n,e),r=new ut(n,e+1),i=[];return this.Rr.forEachInRange([s,r],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new le(new Ke([])),s=new ut(n,e),r=new ut(n,e+1);let i=Ee();return this.Rr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),s=this.dr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return le.comparator(e.key,n.key)||we(e.br,n.br)}static Vr(e,n){return we(e.br,n.br)||le.comparator(e.key,n.key)}}/**
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
 */class hN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new at(ut.Ar)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Ck(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.vr=this.vr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return H.resolve(o)}lookupMutationBatch(e,n){return H.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Fr(s),i=r<0?0:r;return H.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),r=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([s,r],o=>{const a=this.Cr(o.br);i.push(a)}),H.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new at(we);return n.forEach(r=>{const i=new ut(r,0),o=new ut(r,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],a=>{s=s.add(a.br)})}),H.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;le.isDocumentKey(i)||(i=i.child(""));const o=new ut(new le(i),0);let a=new at(we);return this.vr.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.br)),!0)},o),H.resolve(this.Mr(a))}Mr(e){const n=[];return e.forEach(s=>{const r=this.Cr(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){xe(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return H.forEach(n.mutations,r=>{const i=new ut(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,n){const s=new ut(n,0),r=this.vr.firstAfterOrEqual(s);return H.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class fN{constructor(e){this.Nr=e,this.docs=function(){return new rt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Nr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return H.resolve(s?s.document.mutableCopy():Pt.newInvalidDocument(n))}getEntries(e,n){let s=hs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Pt.newInvalidDocument(r))}),H.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=hs();const o=n.path,a=new le(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:h}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||$P(HP(h),s)<=0||(r.has(h.key)||jc(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return H.resolve(i)}getAllFromCollectionGroup(e,n,s,r){de()}Lr(e,n){return H.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new dN(this)}getSize(e){return H.resolve(this.size)}}class dN extends iN{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.hr.addEntry(e,r)):this.hr.removeEntry(s)}),H.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class pN{constructor(e){this.persistence=e,this.Br=new Nr(n=>rd(n),id),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.kr=0,this.qr=new ud,this.targetCount=0,this.Qr=Ii.qn()}forEachTarget(e,n){return this.Br.forEach((s,r)=>n(r)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.kr&&(this.kr=n),H.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new Ii(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.Un(n),H.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Br.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),H.waitFor(i).next(()=>r)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const s=this.Br.get(n)||null;return H.resolve(s)}addMatchingKeys(e,n,s){return this.qr.mr(n,s),H.resolve()}removeMatchingKeys(e,n,s){this.qr.pr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),H.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),H.resolve()}getMatchingKeysForTargetId(e,n){const s=this.qr.Sr(n);return H.resolve(s)}containsKey(e,n){return H.resolve(this.qr.containsKey(n))}}/**
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
 */class wT{constructor(e,n){this.Kr={},this.overlays={},this.$r=new Fc(0),this.Ur=!1,this.Ur=!0,this.Wr=new uN,this.referenceDelegate=e(this),this.Gr=new pN(this),this.indexManager=new Zk,this.remoteDocumentCache=function(r){return new fN(r)}(s=>this.referenceDelegate.zr(s)),this.serializer=new Xk(n),this.jr=new lN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Kr[e.toKey()];return s||(s=new hN(n,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const r=new gN(this.$r.next());return this.referenceDelegate.Hr(),s(r).next(i=>this.referenceDelegate.Jr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Yr(e,n){return H.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,n)))}}class gN extends WP{constructor(e){super(),this.currentSequenceNumber=e}}class hd{constructor(e){this.persistence=e,this.Zr=new ud,this.Xr=null}static ei(e){return new hd(e)}get ti(){if(this.Xr)return this.Xr;throw de()}addReference(e,n,s){return this.Zr.addReference(s,n),this.ti.delete(s.toString()),H.resolve()}removeReference(e,n,s){return this.Zr.removeReference(s,n),this.ti.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),H.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(r=>this.ti.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.ti.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ti,s=>{const r=le.fromPath(s);return this.ni(e,r).next(i=>{i||n.removeEntry(r,pe.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(s=>{s?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return H.or([()=>H.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Yl{constructor(e,n){this.persistence=e,this.ri=new Nr(s=>zP(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=rN(this,n)}static ei(e,n){return new Yl(e,n)}Hr(){}Jr(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}nr(e){let n=0;return this.er(e,s=>{n++}).next(()=>n)}er(e,n){return H.forEach(this.ri,(s,r)=>this.ir(e,s,r).next(i=>i?H.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Lr(e,o=>this.ir(e,o,n).next(a=>{a||(s++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,n,s){return this.ri.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),H.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=hl(e.data.value)),n}ir(e,n,s){return H.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.ri.get(n);return H.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class fd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Wi=s,this.Gi=r}static zi(e,n){let s=Ee(),r=Ee();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new fd(e,n.fromCache,s,r)}}/**
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
 */class mN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class _N{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return hS()?8:qP(xt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.Xi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new mN;return this.ts(e,n,o).next(a=>{if(i.result=a,this.Hi)return this.ns(e,n,o,a.size)})}).next(()=>i.result)}ns(e,n,s,r){return s.documentReadCount<this.Ji?(Kr()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),H.resolve()):(Kr()<=ye.DEBUG&&ee("QueryEngine","Query:",zr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.Yi*r?(Kr()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xn(n))):H.resolve())}Xi(e,n){if(ym(n))return H.resolve(null);let s=xn(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Gh(n,null,"F"),s=xn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Ee(...i);return this.Zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.rs(n,a);return this.ss(n,u,o,c.readTime)?this.Xi(e,Gh(n,null,"F")):this.os(e,u,n,c)}))})))}es(e,n,s,r){return ym(n)||r.isEqual(pe.min())?H.resolve(null):this.Zi.getDocuments(e,s).next(i=>{const o=this.rs(n,i);return this.ss(n,o,s,r)?H.resolve(null):(Kr()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),zr(n)),this.os(e,o,n,BP(r,-1)).next(a=>a))})}rs(e,n){let s=new at(eT(e));return n.forEach((r,i)=>{jc(e,i)&&(s=s.add(i))}),s}ss(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ts(e,n,s){return Kr()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",zr(n)),this.Zi.getDocumentsMatchingQuery(e,n,Bs.min(),s)}os(e,n,s,r){return this.Zi.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n,s,r){this.persistence=e,this._s=n,this.serializer=r,this.us=new rt(we),this.cs=new Nr(i=>rd(i),id),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new aN(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function vN(t,e,n,s){return new yN(t,e,n,s)}async function IT(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Ps(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=Ee();for(const u of r){o.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)c=c.add(h.key)}return n.localDocuments.getDocuments(s,c).next(u=>({Ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function EN(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.hs.newChangeBuffer({trackRemovals:!0});return function(a,c,u,h){const f=u.batch,p=f.keys();let m=H.resolve();return p.forEach(I=>{m=m.next(()=>h.getEntry(c,I)).next(k=>{const N=u.docVersions.get(I);xe(N!==null),k.version.compareTo(N)<0&&(f.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),h.addEntry(k)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let c=Ee();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(c=c.add(a.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function bT(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function TN(t,e){const n=_e(t),s=e.snapshotVersion;let r=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});r=n.us;const a=[];e.targetChanges.forEach((h,f)=>{const p=r.get(f);if(!p)return;a.push(n.Gr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Gr.addMatchingKeys(i,h.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Et.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(f,m),function(k,N,x){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,m,h)&&a.push(n.Gr.updateTargetData(i,m))});let c=hs(),u=Ee();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(wN(i,o,e.documentUpdates).next(h=>{c=h.Is,u=h.Es})),!s.isEqual(pe.min())){const h=n.Gr.getLastRemoteSnapshotVersion(i).next(f=>n.Gr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return H.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(n.us=r,i))}function wN(t,e,n){let s=Ee(),r=Ee();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=hs();return n.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):ee("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Is:o,Es:r}})}function IN(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function bN(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Gr.getTargetData(s,e).next(i=>i?(r=i,H.resolve(r)):n.Gr.allocateTargetId(s).next(o=>(r=new Ns(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Gr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.us.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.us=n.us.insert(s.targetId,s),n.cs.set(e,s.targetId)),s})}async function Zh(t,e,n){const s=_e(t),r=s.us.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Vi(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.us=s.us.remove(e),s.cs.delete(r.target)}function km(t,e,n){const s=_e(t);let r=pe.min(),i=Ee();return s.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,h){const f=_e(c),p=f.cs.get(h);return p!==void 0?H.resolve(f.us.get(p)):f.Gr.getTargetData(u,h)}(s,o,xn(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s._s.getDocumentsMatchingQuery(o,e,n?r:pe.min(),n?i:Ee())).next(a=>(RN(s,fk(e),a),{documents:a,ds:i})))}function RN(t,e,n){let s=t.ls.get(e)||pe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.ls.set(e,s)}class Nm{constructor(){this.activeTargetIds=yk()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AN{constructor(){this._o=new Nm,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,s){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Nm,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class CN{uo(e){}shutdown(){}}/**
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
 */class Om{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ya=null;function Ku(){return Ya===null?Ya=function(){return 268435456+Math.round(2147483648*Math.random())}():Ya++,"0x"+Ya.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class PN{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Rt="WebChannelConnection";class kN extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+n.host,this.Mo=`projects/${r}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Oo(n,s,r,i,o){const a=Ku(),c=this.No(n,s.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(u,i,o),this.Bo(n,c,u,r).then(h=>(ee("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw vi("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}ko(n,s,r,i,o,a){return this.Oo(n,s,r,i,o)}Lo(n,s,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((i,o)=>n[o]=i),r&&r.headers.forEach((i,o)=>n[o]=i)}No(n,s){const r=SN[n];return`${this.Fo}/v1/${s}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,s,r){const i=Ku();return new Promise((o,a)=>{const c=new LE;c.setWithCredentials(!0),c.listenOnce(VE.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ul.NO_ERROR:const h=c.getResponseJson();ee(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case ul.TIMEOUT:ee(Rt,`RPC '${e}' ${i} timed out`),a(new oe(j.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const f=c.getStatus();if(ee(Rt,`RPC '${e}' ${i} failed with status:`,f,"response text:",c.getResponseText()),f>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const I=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(m.status);a(new oe(I,m.message))}else a(new oe(j.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new oe(j.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{ee(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);ee(Rt,`RPC '${e}' ${i} sending request:`,r),c.send(n,"POST",u,s,15)})}qo(e,n,s){const r=Ku(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BE(),a=UE(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Lo(c.initMessageHeaders,n,s),c.encodeInitMessageHeaders=!0;const h=i.join("");ee(Rt,`Creating RPC '${e}' stream ${r}: ${h}`,c);const f=o.createWebChannel(h,c);let p=!1,m=!1;const I=new PN({Eo:N=>{m?ee(Rt,`Not sending because RPC '${e}' stream ${r} is closed:`,N):(p||(ee(Rt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),ee(Rt,`RPC '${e}' stream ${r} sending:`,N),f.send(N))},Ao:()=>f.close()}),k=(N,x,O)=>{N.listen(x,E=>{try{O(E)}catch(P){setTimeout(()=>{throw P},0)}})};return k(f,fo.EventType.OPEN,()=>{m||(ee(Rt,`RPC '${e}' stream ${r} transport opened.`),I.So())}),k(f,fo.EventType.CLOSE,()=>{m||(m=!0,ee(Rt,`RPC '${e}' stream ${r} transport closed`),I.Do())}),k(f,fo.EventType.ERROR,N=>{m||(m=!0,vi(Rt,`RPC '${e}' stream ${r} transport errored:`,N),I.Do(new oe(j.UNAVAILABLE,"The operation could not be completed")))}),k(f,fo.EventType.MESSAGE,N=>{var x;if(!m){const O=N.data[0];xe(!!O);const E=O,P=(E==null?void 0:E.error)||((x=E[0])===null||x===void 0?void 0:x.error);if(P){ee(Rt,`RPC '${e}' stream ${r} received error:`,P);const M=P.status;let F=function(y){const T=tt[y];if(T!==void 0)return fT(T)}(M),b=P.message;F===void 0&&(F=j.INTERNAL,b="Unknown error status: "+M+" with message "+P.message),m=!0,I.Do(new oe(F,b)),f.close()}else ee(Rt,`RPC '${e}' stream ${r} received:`,O),I.vo(O)}}),k(a,FE.STAT_EVENT,N=>{N.stat===$h.PROXY?ee(Rt,`RPC '${e}' stream ${r} detected buffering proxy`):N.stat===$h.NOPROXY&&ee(Rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{I.bo()},0),I}}function zu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t){return new Vk(t,!0)}/**
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
 */class RT{constructor(e,n,s=1e3,r=1.5,i=6e4){this.li=e,this.timerId=n,this.Qo=s,this.Ko=r,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),r=Math.max(0,n-s);r>0&&ee("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,r,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class AT{constructor(e,n,s,r,i,o,a,c){this.li=e,this.Yo=s,this.Zo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new RT(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(us(n.toString()),us("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Xo===n&&this.I_(s,r)},s=>{e(()=>{const r=new oe(j.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(r)})})}I_(e,n){const s=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(r=>{s(()=>this.E_(r))}),this.stream.onMessage(r=>{s(()=>++this.n_==1?this.A_(r):this.onNext(r))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NN extends AT{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=Bk(this.serializer,e),s=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Mn(o.readTime):pe.min()}(e);return this.listener.R_(n,s)}V_(e){const n={};n.database=Jh(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=zh(c)?{documents:jk(i,c)}:{query:Wk(i,c).ct},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=gT(i,o.resumeToken);const u=Qh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=Ql(i,o.snapshotVersion.toTimestamp());const u=Qh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=Kk(this.serializer,e);s&&(n.labels=s),this.c_(n)}m_(e){const n={};n.database=Jh(this.serializer),n.removeTarget=e,this.c_(n)}}class ON extends AT{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=$k(e.writeResults,e.commitTime),s=Mn(e.commitTime);return this.listener.y_(s,n)}w_(){const e={};e.database=Jh(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>Hk(this.serializer,s))};this.c_(n)}}/**
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
 */class DN extends class{}{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.S_=!1}b_(){if(this.S_)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,s,r){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,Yh(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe(j.UNKNOWN,i.toString())})}ko(e,n,s,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.ko(e,Yh(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe(j.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class xN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(us(n),this.C_=!1):ee("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class MN{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{s.enqueueAndForget(async()=>{Dr(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.k_.add(4),await fa(u),u.K_.set("Unknown"),u.k_.delete(4),await Gc(u)}(this))})}),this.K_=new xN(s,r)}}async function Gc(t){if(Dr(t))for(const e of t.q_)await e(!0)}async function fa(t){for(const e of t.q_)await e(!1)}function CT(t,e){const n=_e(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),md(n)?gd(n):Fi(n).s_()&&pd(n,e))}function dd(t,e){const n=_e(t),s=Fi(n);n.B_.delete(e),s.s_()&&ST(n,e),n.B_.size===0&&(s.s_()?s.a_():Dr(n)&&n.K_.set("Unknown"))}function pd(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fi(t).V_(e)}function ST(t,e){t.U_.xe(e),Fi(t).m_(e)}function gd(t){t.U_=new Dk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Fi(t).start(),t.K_.F_()}function md(t){return Dr(t)&&!Fi(t).i_()&&t.B_.size>0}function Dr(t){return _e(t).k_.size===0}function PT(t){t.U_=void 0}async function LN(t){t.K_.set("Online")}async function VN(t){t.B_.forEach((e,n)=>{pd(t,e)})}async function FN(t,e){PT(t),md(t)?(t.K_.O_(e),gd(t)):t.K_.set("Unknown")}async function UN(t,e,n){if(t.K_.set("Online"),e instanceof pT&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.B_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.B_.delete(a),r.U_.removeTarget(a))}(t,e)}catch(s){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Xl(t,s)}else if(e instanceof pl?t.U_.$e(e):e instanceof dT?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(pe.min()))try{const s=await bT(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.U_.it(o);return a.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.B_.get(u);h&&i.B_.set(u,h.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,u)=>{const h=i.B_.get(c);if(!h)return;i.B_.set(c,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),ST(i,c);const f=new Ns(h.target,c,u,h.sequenceNumber);pd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){ee("RemoteStore","Failed to raise snapshot:",s),await Xl(t,s)}}async function Xl(t,e,n){if(!Vi(e))throw e;t.k_.add(1),await fa(t),t.K_.set("Offline"),n||(n=()=>bT(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Gc(t)})}function kT(t,e){return e().catch(n=>Xl(t,n,e))}async function Qc(t){const e=_e(t),n=Ws(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;BN(e);)try{const r=await IN(e.localStore,s);if(r===null){e.L_.length===0&&n.a_();break}s=r.batchId,HN(e,r)}catch(r){await Xl(e,r)}NT(e)&&OT(e)}function BN(t){return Dr(t)&&t.L_.length<10}function HN(t,e){t.L_.push(e);const n=Ws(t);n.s_()&&n.f_&&n.g_(e.mutations)}function NT(t){return Dr(t)&&!Ws(t).i_()&&t.L_.length>0}function OT(t){Ws(t).start()}async function $N(t){Ws(t).w_()}async function jN(t){const e=Ws(t);for(const n of t.L_)e.g_(n.mutations)}async function WN(t,e,n){const s=t.L_.shift(),r=ad.from(s,e,n);await kT(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Qc(t)}async function qN(t,e){e&&Ws(t).f_&&await async function(s,r){if(function(o){return kk(o)&&o!==j.ABORTED}(r.code)){const i=s.L_.shift();Ws(s).__(),await kT(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Qc(s)}}(t,e),NT(t)&&OT(t)}async function Dm(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const s=Dr(n);n.k_.add(3),await fa(n),s&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Gc(n)}async function KN(t,e){const n=_e(t);e?(n.k_.delete(2),await Gc(n)):e||(n.k_.add(2),await fa(n),n.K_.set("Unknown"))}function Fi(t){return t.W_||(t.W_=function(n,s,r){const i=_e(n);return i.b_(),new NN(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:LN.bind(null,t),mo:VN.bind(null,t),po:FN.bind(null,t),R_:UN.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),md(t)?gd(t):t.K_.set("Unknown")):(await t.W_.stop(),PT(t))})),t.W_}function Ws(t){return t.G_||(t.G_=function(n,s,r){const i=_e(n);return i.b_(),new ON(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:$N.bind(null,t),po:qN.bind(null,t),p_:jN.bind(null,t),y_:WN.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Qc(t)):(await t.G_.stop(),t.L_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class _d{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ms,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new _d(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yd(t,e){if(us("AsyncQueue",`${e}: ${t}`),Vi(t))return new oe(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class li{static emptySet(e){return new li(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||le.comparator(n.key,s.key):(n,s)=>le.comparator(n.key,s.key),this.keyedMap=po(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof li)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new li;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class xm{constructor(){this.z_=new rt(le.comparator)}track(e){const n=e.doc.key,s=this.z_.get(n);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(n,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(n):e.type===1&&s.type===2?this.z_=this.z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):de():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class bi{constructor(e,n,s,r,i,o,a,c,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new bi(e,n,li.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$c(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class zN{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class GN{constructor(){this.queries=Mm(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,s){const r=_e(n),i=r.queries;r.queries=Mm(),i.forEach((o,a)=>{for(const c of a.J_)c.onError(s)})})(this,new oe(j.ABORTED,"Firestore shutting down"))}}function Mm(){return new Nr(t=>ZE(t),$c)}async function QN(t,e){const n=_e(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.Y_()&&e.Z_()&&(s=2):(i=new zN,s=e.Z_()?0:1);try{switch(s){case 0:i.H_=await n.onListen(r,!0);break;case 1:i.H_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=yd(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.J_.push(e),e.ea(n.onlineState),i.H_&&e.ta(i.H_)&&vd(n)}async function YN(t,e){const n=_e(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?r=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function XN(t,e){const n=_e(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.J_)a.ta(r)&&(s=!0);o.H_=r}}s&&vd(n)}function JN(t,e,n){const s=_e(t),r=s.queries.get(e);if(r)for(const i of r.J_)i.onError(n);s.queries.delete(e)}function vd(t){t.X_.forEach(e=>{e.next()})}var ef,Lm;(Lm=ef||(ef={})).na="default",Lm.Cache="cache";class ZN{constructor(e,n,s){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new bi(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const s=n!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ef.Cache}}/**
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
 */class DT{constructor(e){this.key=e}}class xT{constructor(e){this.key=e}}class eO{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Ee(),this.mutatedKeys=Ee(),this.Va=eT(e),this.ma=new li(this.Va)}get fa(){return this.da}ga(e,n){const s=n?n.pa:new xm,r=n?n.ma:this.ma;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const p=r.get(h),m=jc(this.query,f)?f:null,I=!!p&&this.mutatedKeys.has(p.key),k=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;p&&m?p.data.isEqual(m.data)?I!==k&&(s.track({type:3,doc:m}),N=!0):this.ya(p,m)||(s.track({type:2,doc:m}),N=!0,(c&&this.Va(m,c)>0||u&&this.Va(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),N=!0):p&&!m&&(s.track({type:1,doc:p}),N=!0,(c||u)&&(a=!0)),N&&(m?(o=o.add(m),i=k?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{ma:o,pa:s,ss:a,mutatedKeys:i}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((h,f)=>function(m,I){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return k(m)-k(I)}(h.type,f.type)||this.Va(h.doc,f.doc)),this.wa(s),r=r!=null&&r;const a=n&&!r?this.Sa():[],c=this.Ra.size===0&&this.current&&!r?1:0,u=c!==this.Aa;return this.Aa=c,o.length!==0||u?{snapshot:new bi(this.query,e.ma,i,o,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:a}:{ba:a}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new xm,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Ee(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const n=[];return e.forEach(s=>{this.Ra.has(s)||n.push(new xT(s))}),this.Ra.forEach(s=>{e.has(s)||n.push(new DT(s))}),n}va(e){this.da=e.ds,this.Ra=Ee();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return bi.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class tO{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class nO{constructor(e){this.key=e,this.Fa=!1}}class sO{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new Nr(a=>ZE(a),$c),this.Oa=new Map,this.Na=new Set,this.La=new rt(le.comparator),this.Ba=new Map,this.ka=new ud,this.qa={},this.Qa=new Map,this.Ka=Ii.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function rO(t,e,n=!0){const s=BT(t);let r;const i=s.xa.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Ca()):r=await MT(s,e,n,!0),r}async function iO(t,e){const n=BT(t);await MT(n,e,!0,!1)}async function MT(t,e,n,s){const r=await bN(t.localStore,xn(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await oO(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&CT(t.remoteStore,r),a}async function oO(t,e,n,s,r){t.Ua=(f,p,m)=>async function(k,N,x,O){let E=N.view.ga(x);E.ss&&(E=await km(k.localStore,N.query,!1).then(({documents:b})=>N.view.ga(b,E)));const P=O&&O.targetChanges.get(N.targetId),M=O&&O.targetMismatches.get(N.targetId)!=null,F=N.view.applyChanges(E,k.isPrimaryClient,P,M);return Fm(k,N.targetId,F.ba),F.snapshot}(t,f,p,m);const i=await km(t.localStore,e,!0),o=new eO(e,i.ds),a=o.ga(i.documents),c=ha.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,c);Fm(t,n,u.ba);const h=new tO(e,n,o);return t.xa.set(e,h),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),u.snapshot}async function aO(t,e,n){const s=_e(t),r=s.xa.get(e),i=s.Oa.get(r.targetId);if(i.length>1)return s.Oa.set(r.targetId,i.filter(o=>!$c(o,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Zh(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&dd(s.remoteStore,r.targetId),tf(s,r.targetId)}).catch(Li)):(tf(s,r.targetId),await Zh(s.localStore,r.targetId,!0))}async function lO(t,e){const n=_e(t),s=n.xa.get(e),r=n.Oa.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),dd(n.remoteStore,s.targetId))}async function cO(t,e,n){const s=mO(t);try{const r=await function(o,a){const c=_e(o),u=nt.now(),h=a.reduce((m,I)=>m.add(I.key),Ee());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",m=>{let I=hs(),k=Ee();return c.hs.getEntries(m,h).next(N=>{I=N,I.forEach((x,O)=>{O.isValidDocument()||(k=k.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(m,I)).next(N=>{f=N;const x=[];for(const O of a){const E=Rk(O,f.get(O.key).overlayedDocument);E!=null&&x.push(new Or(O.key,E,qE(E.value.mapValue),os.exists(!0)))}return c.mutationQueue.addMutationBatch(m,u,x,a)}).next(N=>{p=N;const x=N.applyToLocalDocumentSet(f,k);return c.documentOverlayCache.saveOverlays(m,N.batchId,x)})}).then(()=>({batchId:p.batchId,changes:nT(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,c){let u=o.qa[o.currentUser.toKey()];u||(u=new rt(we)),u=u.insert(a,c),o.qa[o.currentUser.toKey()]=u}(s,r.batchId,n),await da(s,r.changes),await Qc(s.remoteStore)}catch(r){const i=yd(r,"Failed to persist write");n.reject(i)}}async function LT(t,e){const n=_e(t);try{const s=await TN(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Ba.get(i);o&&(xe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Fa=!0:r.modifiedDocuments.size>0?xe(o.Fa):r.removedDocuments.size>0&&(xe(o.Fa),o.Fa=!1))}),await da(n,s,e)}catch(s){await Li(s)}}function Vm(t,e,n){const s=_e(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.xa.forEach((i,o)=>{const a=o.view.ea(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const c=_e(o);c.onlineState=a;let u=!1;c.queries.forEach((h,f)=>{for(const p of f.J_)p.ea(a)&&(u=!0)}),u&&vd(c)}(s.eventManager,e),r.length&&s.Ma.R_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function uO(t,e,n){const s=_e(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Ba.get(e),i=r&&r.key;if(i){let o=new rt(le.comparator);o=o.insert(i,Pt.newNoDocument(i,pe.min()));const a=Ee().add(i),c=new Kc(pe.min(),new Map,new rt(we),o,a);await LT(s,c),s.La=s.La.remove(i),s.Ba.delete(e),Ed(s)}else await Zh(s.localStore,e,!1).then(()=>tf(s,e,n)).catch(Li)}async function hO(t,e){const n=_e(t),s=e.batch.batchId;try{const r=await EN(n.localStore,e);FT(n,s,null),VT(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await da(n,r)}catch(r){await Li(r)}}async function fO(t,e,n){const s=_e(t);try{const r=await function(o,a){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,a).next(f=>(xe(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);FT(s,e,n),VT(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await da(s,r)}catch(r){await Li(r)}}function VT(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function FT(t,e,n){const s=_e(t);let r=s.qa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.qa[s.currentUser.toKey()]=r}}function tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.Oa.get(e))t.xa.delete(s),n&&t.Ma.Wa(s,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(s=>{t.ka.containsKey(s)||UT(t,s)})}function UT(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(dd(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),Ed(t))}function Fm(t,e,n){for(const s of n)s instanceof DT?(t.ka.addReference(s.key,e),dO(t,s)):s instanceof xT?(ee("SyncEngine","Document no longer in limbo: "+s.key),t.ka.removeReference(s.key,e),t.ka.containsKey(s.key)||UT(t,s.key)):de()}function dO(t,e){const n=e.key,s=n.path.canonicalString();t.La.get(n)||t.Na.has(s)||(ee("SyncEngine","New document in limbo: "+n),t.Na.add(s),Ed(t))}function Ed(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new le(Ke.fromString(e)),s=t.Ka.next();t.Ba.set(s,new nO(n)),t.La=t.La.insert(n,s),CT(t.remoteStore,new Ns(xn(JE(n.path)),s,"TargetPurposeLimboResolution",Fc.oe))}}async function da(t,e,n){const s=_e(t),r=[],i=[],o=[];s.xa.isEmpty()||(s.xa.forEach((a,c)=>{o.push(s.Ua(c,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){r.push(u);const f=fd.zi(c.targetId,u);i.push(f)}}))}),await Promise.all(o),s.Ma.R_(r),await async function(c,u){const h=_e(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>H.forEach(u,p=>H.forEach(p.Wi,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>H.forEach(p.Gi,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!Vi(f))throw f;ee("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.us.get(p),I=m.snapshotVersion,k=m.withLastLimboFreeSnapshotVersion(I);h.us=h.us.insert(p,k)}}}(s.localStore,i))}async function pO(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const s=await IT(n.localStore,e);n.currentUser=e,function(i,o){i.Qa.forEach(a=>{a.forEach(c=>{c.reject(new oe(j.CANCELLED,o))})}),i.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await da(n,s.Ts)}}function gO(t,e){const n=_e(t),s=n.Ba.get(e);if(s&&s.Fa)return Ee().add(s.key);{let r=Ee();const i=n.Oa.get(e);if(!i)return r;for(const o of i){const a=n.xa.get(o);r=r.unionWith(a.view.fa)}return r}}function BT(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=LT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=gO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=uO.bind(null,e),e.Ma.R_=XN.bind(null,e.eventManager),e.Ma.Wa=JN.bind(null,e.eventManager),e}function mO(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=hO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fO.bind(null,e),e}class Jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return vN(this.persistence,new _N,e.initialUser,this.serializer)}ja(e){return new wT(hd.ei,this.serializer)}za(e){return new AN}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jl.provider={build:()=>new Jl};class _O extends Jl{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){xe(this.persistence.referenceDelegate instanceof Yl);const s=this.persistence.referenceDelegate.garbageCollector;return new nN(s,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?$t.withCacheSize(this.cacheSizeBytes):$t.DEFAULT;return new wT(s=>Yl.ei(s,n),this.serializer)}}class nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Vm(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pO.bind(null,this.syncEngine),await KN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new GN}()}createDatastore(e){const n=zc(e.databaseInfo.databaseId),s=function(i){return new kN(i)}(e.databaseInfo);return function(i,o,a,c){return new DN(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new MN(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Vm(this.syncEngine,n,0),function(){return Om.p()?new Om:new CN}())}createSyncEngine(e,n){return function(r,i,o,a,c,u,h){const f=new sO(r,i,o,a,c,u);return h&&(f.$a=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=_e(r);ee("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await fa(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nf.provider={build:()=>new nf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class yO{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):us("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class vO{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=At.UNAUTHENTICATED,this.clientId=$E.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ms;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=yd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Gu(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await IT(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Um(t,e){t.asyncQueue.verifyOperationInProgress();const n=await EO(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>Dm(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>Dm(e.remoteStore,r)),t._onlineComponents=e}async function EO(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===j.FAILED_PRECONDITION||r.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;vi("Error using user provided cache. Falling back to memory cache: "+n),await Gu(t,new Jl)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Gu(t,new _O(void 0));return t._offlineComponents}async function HT(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await Um(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await Um(t,new nf))),t._onlineComponents}function TO(t){return HT(t).then(e=>e.syncEngine)}async function wO(t){const e=await HT(t),n=e.eventManager;return n.onListen=rO.bind(null,e.syncEngine),n.onUnlisten=aO.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=iO.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=lO.bind(null,e.syncEngine),n}function IO(t,e,n={}){const s=new Ms;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,u){const h=new yO({next:p=>{h.eu(),o.enqueueAndForget(()=>YN(i,f)),p.fromCache&&c.source==="server"?u.reject(new oe(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new ZN(a,h,{includeMetadataChanges:!0,ua:!0});return QN(i,f)}(await wO(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function $T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=new Map;/**
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
 */function jT(t,e,n){if(!n)throw new oe(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bO(t,e,n,s){if(e===!0&&s===!0)throw new oe(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hm(t){if(!le.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $m(t){if(le.isDocumentKey(t))throw new oe(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Td(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Zl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Td(t);throw new oe(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$T((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jm(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new NP;switch(s.type){case"firstParty":return new MP(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Bm.get(n);s&&(ee("ComponentProvider","Removing Datastore"),Bm.delete(n),s.terminate())}(this),Promise.resolve()}}function RO(t,e,n,s={}){var r;const i=(t=Zl(t,Yc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,c;if(typeof s.mockUserToken=="string")a=s.mockUserToken,c=At.MOCK_USER;else{a=oS(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new oe(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new At(u)}t._authCredentials=new OP(new HE(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Xc(this.firestore,e,this._query)}}class yn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yn(this.firestore,e,this._key)}}class Vs extends Xc{constructor(e,n,s){super(e,n,JE(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yn(this.firestore,null,new le(e))}withConverter(e){return new Vs(this.firestore,e,this._path)}}function N2(t,e,...n){if(t=an(t),jT("collection","path",e),t instanceof Yc){const s=Ke.fromString(e,...n);return $m(s),new Vs(t,null,s)}{if(!(t instanceof yn||t instanceof Vs))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return $m(s),new Vs(t.firestore,null,s)}}function AO(t,e,...n){if(t=an(t),arguments.length===1&&(e=$E.newId()),jT("doc","path",e),t instanceof Yc){const s=Ke.fromString(e,...n);return Hm(s),new yn(t,null,new le(s))}{if(!(t instanceof yn||t instanceof Vs))throw new oe(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Ke.fromString(e,...n));return Hm(s),new yn(t.firestore,t instanceof Vs?t.converter:null,new le(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new RT(this,"async_queue_retry"),this.fu=()=>{const s=zu();s&&ee("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const n=zu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=zu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Ms;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Vi(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw us("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Ru=!1,s))));return this.gu=n,n}enqueueAfterDelay(e,n,s){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const r=_d.createAndSchedule(this,e,n,s,i=>this.Su(i));return this.du.push(r),r}pu(){this.Au&&de()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class wd extends Yc{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new Wm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wm(e),this._firestoreClient=void 0,await e}}}function O2(t,e){const n=typeof t=="object"?t:OE(),s=typeof t=="string"?t:"(default)",r=kE(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=rS("firestore");i&&RO(r,...i)}return r}function WT(t){if(t._terminated)throw new oe(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CO(t),t._firestoreClient}function CO(t){var e,n,s;const r=t._freezeSettings(),i=function(a,c,u,h){return new YP(a,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,$T(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new vO(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ri(Et.fromBase64String(e))}catch(n){throw new oe(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ri(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this._methodName=e}}/**
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
 */class Jc{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const SO=/^__.*__$/;class PO{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new Or(e,this.data,this.fieldMask,n,this.fieldTransforms):new ua(e,this.data,n,this.fieldTransforms)}}function KT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Rd{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Lu(e),r}Bu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.xu({path:s,Nu:!1});return r.Fu(),r}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return ec(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(KT(this.Mu)&&SO.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class kO{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||zc(e)}$u(e,n,s,r=!1){return new Rd({Mu:e,methodName:n,Ku:s,path:vt.emptyPath(),Nu:!1,Qu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function NO(t){const e=t._freezeSettings(),n=zc(t._databaseId);return new kO(t._databaseId,!!e.ignoreUndefinedProperties,n)}function OO(t,e,n,s,r,i={}){const o=t.$u(i.merge||i.mergeFields?2:0,e,n,r);YT("Data must be an object, but it was:",o,s);const a=GT(s,o);let c,u;if(i.merge)c=new pn(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const p=DO(e,f,n);if(!o.contains(p))throw new oe(j.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);MO(h,p)||h.push(p)}c=new pn(h),u=o.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,u=o.fieldTransforms;return new PO(new tn(a),c,u)}function zT(t,e){if(QT(t=an(t)))return YT("Unsupported field value:",e,t),GT(t,e);if(t instanceof qT)return function(s,r){if(!KT(r.Mu))throw r.qu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let c=zT(a,r.ku(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=an(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return vk(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=nt.fromDate(s);return{timestampValue:Ql(r.serializer,i)}}if(s instanceof nt){const i=new nt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ql(r.serializer,i)}}if(s instanceof Jc)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ri)return{bytesValue:gT(r.serializer,s._byteString)};if(s instanceof yn){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:cd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof bd)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw a.qu("VectorValues must only contain numeric values.");return od(a.serializer,c)})}}}}}}(s,r);throw r.qu(`Unsupported field value: ${Td(s)}`)}(t,e)}function GT(t,e){const n={};return jE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(s,r)=>{const i=zT(r,e.Ou(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function QT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof nt||t instanceof Jc||t instanceof Ri||t instanceof yn||t instanceof qT||t instanceof bd)}function YT(t,e,n){if(!QT(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=Td(n);throw s==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+s)}}function DO(t,e,n){if((e=an(e))instanceof Id)return e._internalPath;if(typeof e=="string")return XT(t,e);throw ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const xO=new RegExp("[~\\*/\\[\\]]");function XT(t,e,n){if(e.search(xO)>=0)throw ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Id(...e.split("."))._internalPath}catch{throw ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ec(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new oe(j.INVALID_ARGUMENT,a+t+c)}function MO(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new yn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new LO(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ZT("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class LO extends JT{data(){return super.data()}}function ZT(t,e){return typeof e=="string"?XT(t,e):e instanceof Id?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class FO{convertValue(e,n="none"){switch(js(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($s(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return kr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Ze(o.doubleValue));return new bd(i)}convertGeoPoint(e){return new Jc(Ze(e.latitude),Ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Bc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(qo(e));default:return null}}convertTimestamp(e){const n=Hs(e);return new nt(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Ke.fromString(e);xe(TT(s));const r=new Ko(s.get(1),s.get(3)),i=new le(s.popFirst(5));return r.isEqual(n)||us(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UO(t,e,n){let s;return s=t?t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class BO extends JT{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new gl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ZT("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class gl extends BO{data(e={}){return super.data(e)}}class HO{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new Xa(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new gl(this._firestore,this._userDataWriter,s.key,s,new Xa(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const c=new gl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Xa(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new gl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Xa(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:$O(a.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $O(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}class jO extends FO{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yn(this.firestore,null,n)}}function D2(t){t=Zl(t,Xc);const e=Zl(t.firestore,wd),n=WT(e),s=new jO(e);return VO(t._query),IO(n,t._query).then(r=>new HO(e,s,t,r))}function x2(t,e){const n=Zl(t.firestore,wd),s=AO(t),r=UO(t.converter,e);return WO(n,[OO(NO(t.firestore),"addDoc",s._key,r,t.converter!==null,{}).toMutation(s._key,os.exists(!1))]).then(()=>s)}function WO(t,e){return function(s,r){const i=new Ms;return s.asyncQueue.enqueueAndForget(async()=>cO(await TO(s),r,i)),i.promise}(WT(t),e)}(function(e,n=!0){(function(r){Mi=r})(Ys),Vn(new wn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new wd(new DP(s.getProvider("auth-internal")),new VP(s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Qt(am,"4.7.5",e),Qt(am,"4.7.5","esm2017")})();function qm(t){const e=KO(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let r=0;r<n.byteLength;r++)s.setUint8(r,e.charCodeAt(r));return n}const qO="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function KO(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let r=0;r<t.length;r++)n<<=6,n|=qO.indexOf(t[r]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const zO=-1,GO=-2,QO=-3,YO=-4,XO=-5,JO=-6;function ZO(t,e){return e1(JSON.parse(t),e)}function e1(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function r(i,o=!1){if(i===zO)return;if(i===QO)return NaN;if(i===YO)return 1/0;if(i===XO)return-1/0;if(i===JO)return-0;if(o)throw new Error("Invalid input");if(i in s)return s[i];const a=n[i];if(!a||typeof a!="object")s[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],u=e==null?void 0:e[c];if(u)return s[i]=u(r(a[1]));switch(c){case"Date":s[i]=new Date(a[1]);break;case"Set":const h=new Set;s[i]=h;for(let m=1;m<a.length;m+=1)h.add(r(a[m]));break;case"Map":const f=new Map;s[i]=f;for(let m=1;m<a.length;m+=2)f.set(r(a[m]),r(a[m+1]));break;case"RegExp":s[i]=new RegExp(a[1],a[2]);break;case"Object":s[i]=Object(a[1]);break;case"BigInt":s[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);s[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=r(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[c],I=a[1],k=qm(I),N=new m(k);s[i]=N;break}case"ArrayBuffer":{const m=a[1],I=qm(m);s[i]=I;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);s[i]=c;for(let u=0;u<a.length;u+=1){const h=a[u];h!==GO&&(c[u]=r(h))}}else{const c={};s[i]=c;for(const u in a){const h=a[u];c[u]=r(h)}}return s[i]}return r(0)}const t1=new Set(["title","titleTemplate","script","style","noscript"]),ml=new Set(["base","meta","link","style","script","noscript"]),n1=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),s1=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),ew=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),r1=typeof window<"u";function tc(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function sf(t){if(t._h)return t._h;if(t._d)return tc(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return tc(e)}function i1(t,e){return t instanceof Promise?t.then(e):e(t)}function rf(t,e,n,s){const r=s||nw(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(r instanceof Promise)return r.then(o=>rf(t,e,n,o));const i={tag:t,props:r};for(const o of ew){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||t1.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function o1(t,e){var s;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,i])=>t==="style"?`${r}:${i}`:r)),(s=String(Array.isArray(e)?e.join(n):e))==null?void 0:s.split(n).filter(r=>!!r.trim()).join(n)}function tw(t,e,n,s){for(let r=s;r<n.length;r+=1){const i=n[r];if(i==="class"||i==="style"){t[i]=o1(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,tw(t,e,n,r)));if(!e&&!ew.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function nw(t,e=!1){const n=tw(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const a1=10;function sw(t,e,n){for(let s=n;s<e.length;s+=1){const r=e[s];if(r instanceof Promise)return r.then(i=>(e[s]=i,sw(t,e,s)));Array.isArray(r)?t.push(...r):t.push(r)}}function l1(t){const e=[],n=t.resolvedInput;for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const i=n[r];if(!(i===void 0||!n1.has(r))){if(Array.isArray(i)){for(const o of i)e.push(rf(r,o,t));continue}e.push(rf(r,i,t))}}if(e.length===0)return[];const s=[];return i1(sw(s,e,0),()=>s.map((r,i)=>(r._e=t._i,t.mode&&(r._m=t.mode),r._p=(t._i<<a1)+i,r)))}const Km=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),zm={base:-10,title:10},Gm={critical:-80,high:-10,low:20};function nc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in zm&&(n=zm[t.tag]),e&&e in Gm?n+Gm[e]:n}const c1=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],u1=["name","property","http-equiv"];function rw(t){const{props:e,tag:n}=t;if(s1.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const s of u1)if(e[s]!==void 0)return`${n}:${s}:${e[s]}`;return!1}const Rs="%separator";function h1(t,e,n=!1){var r;let s;if(e==="s"||e==="pageTitle")s=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");s=(r=t[e.substring(0,i)])==null?void 0:r[e.substring(i+1)]}else s=t[e];if(s!==void 0)return n?(s||"").replace(/"/g,'\\"'):s||""}const f1=new RegExp(`${Rs}(?:\\s*${Rs})*`,"g");function Ja(t,e,n,s=!1){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const i=r.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Rs);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Rs||!i.includes(a))return a;const c=h1(e,a.slice(1),s);return c!==void 0?c:a}).trim(),o&&(t.endsWith(Rs)&&(t=t.slice(0,-Rs.length)),t.startsWith(Rs)&&(t=t.slice(Rs.length)),t=t.replace(f1,n).trim()),t}function Qm(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function iw(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{var f;const i=(await t.resolveTags()).map(p=>({tag:p,id:ml.has(p.tag)?sf(p):p.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const p=new Set;for(const m of["body","head"]){const I=(f=n[m])==null?void 0:f.children;for(const k of I){const N=k.tagName.toLowerCase();if(!ml.has(N))continue;const x={tag:N,props:await nw(k.getAttributeNames().reduce((M,F)=>({...M,[F]:k.getAttribute(F)}),{})),innerHTML:k.innerHTML},O=rw(x);let E=O,P=1;for(;E&&p.has(E);)E=`${O}:${P++}`;E&&(x._d=E,p.add(E)),o.elMap[k.getAttribute("data-hid")||sf(x)]=k}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(p,m,I){const k=`${p}:${m}`;o.sideEffects[k]=I,delete o.pendingSideEffects[k]}function c({id:p,$el:m,tag:I}){const k=I.tag.endsWith("Attrs");if(o.elMap[p]=m,k||(I.textContent&&I.textContent!==m.textContent&&(m.textContent=I.textContent),I.innerHTML&&I.innerHTML!==m.innerHTML&&(m.innerHTML=I.innerHTML),a(p,"el",()=>{var N;(N=o.elMap[p])==null||N.remove(),delete o.elMap[p]})),I._eventHandlers)for(const N in I._eventHandlers)Object.prototype.hasOwnProperty.call(I._eventHandlers,N)&&m.getAttribute(`data-${N}`)!==""&&((I.tag==="bodyAttrs"?n.defaultView:m).addEventListener(N.substring(2),I._eventHandlers[N].bind(m)),m.setAttribute(`data-${N}`,""));for(const N in I.props){if(!Object.prototype.hasOwnProperty.call(I.props,N))continue;const x=I.props[N],O=`attr:${N}`;if(N==="class"){if(!x)continue;for(const E of x.split(" "))k&&a(p,`${O}:${E}`,()=>m.classList.remove(E)),!m.classList.contains(E)&&m.classList.add(E)}else if(N==="style"){if(!x)continue;for(const E of x.split(";")){const P=E.indexOf(":"),M=E.substring(0,P).trim(),F=E.substring(P+1).trim();a(p,`${O}:${M}`,()=>{m.style.removeProperty(M)}),m.style.setProperty(M,F)}}else m.getAttribute(N)!==x&&m.setAttribute(N,x===!0?"":String(x)),k&&a(p,O,()=>m.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const p of i){const{tag:m,shouldRender:I,id:k}=p;if(I){if(m.tag==="title"){n.title=m.textContent;continue}p.$el=p.$el||o.elMap[k],p.$el?c(p):ml.has(m.tag)&&u.push(p)}}for(const p of u){const m=p.tag.tagPosition||"head";p.$el=n.createElement(p.tag.tag),c(p),h[m]=h[m]||n.createDocumentFragment(),h[m].appendChild(p.$el)}for(const p of i)await t.hooks.callHook("dom:renderTag",p,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const p in o.pendingSideEffects)o.pendingSideEffects[p]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function d1(t,e={}){const n=e.delayFn||(s=>setTimeout(s,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(s=>n(()=>iw(t,e).then(()=>{delete t._domDebouncedUpdatePromise,s()})))}function p1(t){return e=>{var s,r;const n=((r=(s=e.resolvedOptions.document)==null?void 0:s.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{d1(i,t)}}}}}const g1=new Set(["templateParams","htmlAttrs","bodyAttrs"]),m1={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=rw(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const s of t.tags){const r=(s.key?`${s.tag}:${s.key}`:s._d)||sf(s),i=e[r];if(i){let a=s==null?void 0:s.tagDuplicateStrategy;if(!a&&g1.has(s.tag)&&(a="merge"),a==="merge"){const c=i.props;c.style&&s.props.style&&(c.style[c.style.length-1]!==";"&&(c.style+=";"),s.props.style=`${c.style} ${s.props.style}`),c.class&&s.props.class?s.props.class=`${c.class} ${s.props.class}`:c.class&&(s.props.class=c.class),e[r].props={...c,...s.props};continue}else if(s._e===i._e){i._duped=i._duped||[],s._d=`${i._d}:${i._duped.length+1}`,i._duped.push(s);continue}else if(nc(s)>nc(i))continue}if(!(s.innerHTML||s.textContent||Object.keys(s.props).length!==0)&&ml.has(s.tag)){delete e[r];continue}e[r]=s}const n=[];for(const s in e){const r=e[s],i=r._duped;n.push(r),i&&(delete r._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(s=>!(s.tag==="meta"&&(s.props.name||s.props.property)&&!s.props.content))}}},_1=new Set(["script","link","bodyAttrs"]),y1=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!_1.has(n.tag))continue;const s=n.props;for(const r in s){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(s,r))continue;const i=s[r];typeof i=="function"&&(t.ssr&&Km.has(r)?s[r]=`this.dataset.${r}fired = true`:delete s[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||tc(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var r,i;const s=e==null?void 0:e.dataset;if(s)for(const o in s){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);Km.has(a)&&((i=(r=n._eventHandlers)==null?void 0:r[a])==null||i.call(e,new Event(a.substring(2))))}}}}),v1=new Set(["link","style","script","noscript"]),E1={hooks:{"tag:normalise":({tag:t})=>{t.key&&v1.has(t.tag)&&(t.props["data-hid"]=t._h=tc(t.key))}}},T1={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const s of t.tags)s._m!=="server"||s.tag!=="titleTemplate"&&s.tag!=="templateParams"&&s.tag!=="title"||(e[s.tag]=s.tag==="title"||s.tag==="titleTemplate"?s.textContent:s.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},w1={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:s,offset:r}of c1){if(!n.tagPriority.startsWith(s))continue;const i=n.tagPriority.substring(s.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+r;break}}t.tags.sort((n,s)=>{const r=nc(n),i=nc(s);return r<i?-1:r>i?1:n._p-s._p})}}},I1={meta:"content",link:"href",htmlAttrs:"lang"},b1=["innerHTML","textContent"],R1=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let s;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(s=e.tags.splice(a,1)[0].props,a-=1);const r=s||{},i=r.separator||"|";delete r.separator,r.pageTitle=Ja(r.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",r,i);for(const a of n){if(a.processTemplateParams===!1)continue;const c=I1[a.tag];if(c&&typeof a.props[c]=="string")a.props[c]=Ja(a.props[c],r,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of b1)typeof a[u]=="string"&&(a[u]=Ja(a[u],r,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=r,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let s=0;s<e.length;s+=1){const r=e[s];r.tag==="title"&&r.processTemplateParams!==!1&&(n=r)}n!=null&&n.textContent&&(n.textContent=Ja(n.textContent,t._templateParams,t._separator))}}}),A1={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,s;for(let r=0;r<e.length;r+=1){const i=e[r];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(s=i)}if(s&&n){const r=Qm(s.textContent,n.textContent);r!==null?n.textContent=r||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(s){const r=Qm(s.textContent);r!==null&&(s.textContent=r,s.tag="title",s=void 0)}s&&t.tags.splice(t.tags.indexOf(s),1)}}},C1={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let ow;function S1(t={}){const e=P1(t);return e.use(p1()),ow=e}function Ym(t,e){return!t||t==="server"&&e||t==="client"&&!e}function P1(t={}){const e=uE();e.addHooks(t.hooks||{}),t.document=t.document||(r1?document:void 0);const n=!t.document,s=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(c){const u=typeof c=="function"?c(a):c;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),Ym(u.mode,n)&&e.addHooks(u.hooks||{}))},push(c,u){u==null||delete u.head;const h={_i:r++,input:c,...u};return Ym(h.mode,n)&&(i.push(h),s()),{dispose(){i=i.filter(f=>f._i!==h._i),s()},patch(f){for(const p of i)p._i===h._i&&(p.input=h.input=f);s()}}},async resolveTags(){const c={tags:[],entries:[...i]};await e.callHook("entries:resolve",c);for(const u of c.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const f of await l1(u)){const p={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",p),c.tags.push(p.tag)}}return await e.callHook("tags:beforeResolve",c),await e.callHook("tags:resolve",c),await e.callHook("tags:afterResolve",c),c.tags},ssr:n};return[m1,T1,y1,E1,w1,R1,A1,C1,...(t==null?void 0:t.plugins)||[]].forEach(c=>a.use(c)),a.hooks.callHook("init",a),a}function k1(){return ow}const N1=Yv[0]==="3";function O1(t){return typeof t=="function"?t():qe(t)}function of(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=O1(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>of(n));if(typeof e=="object"){const n={};for(const s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(s==="titleTemplate"||s[0]==="o"&&s[1]==="n"){n[s]=qe(e[s]);continue}n[s]=of(e[s])}return n}return e}const D1={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=of(e.input)}}},aw="usehead";function x1(t){return{install(n){N1&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(aw,t))}}.install}function M1(t={}){t.domDelayFn=t.domDelayFn||(n=>ra(()=>setTimeout(()=>n(),0)));const e=S1(t);return e.use(D1),e.install=x1(e),e}const af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},lf="__unhead_injection_handler__";function L1(t){af[lf]=t}function M2(){return lf in af?af[lf]():Dt(aw)||k1()}const V1="modulepreload",F1=function(t,e){return new URL(t,e).href},Xm={},sc=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=F1(u,s),u in Xm)return;Xm[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!s)for(let I=o.length-1;I>=0;I--){const k=o[I];if(k.href===u&&(!h||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":V1,h||(m.as="script"),m.crossOrigin="",m.href=u,c&&m.setAttribute("nonce",c),document.head.appendChild(m),h)return new Promise((I,k)=>{m.addEventListener("load",I),m.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let _l,yl;function U1(){return _l=$fetch(Jf(`builds/meta/${la().app.buildId}.json`),{responseType:"json"}),_l.then(t=>{yl=VC(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),_l}function Zc(){return _l||U1()}async function Ad(t){const e=typeof t=="string"?t:t.path;if(await Zc(),!yl)return console.error("[nuxt] Error creating app manifest matcher.",yl),{};try{return gE({},...yl.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function Jm(t,e={}){const n=await H1(t,e),s=Je(),r=s._payloadCache=s._payloadCache||{};return n in r?r[n]||null:(r[n]=cw(t).then(i=>i?lw(n).then(o=>o||(delete r[n],null)):(r[n]=null,null)),r[n])}const B1="_payload.json";async function H1(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Pr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=la(),r=e.hash||(e.fresh?Date.now():s.app.buildId),i=s.app.cdnURL,o=i&&await cw(t)?i:s.app.baseURL;return Xf(o,n.pathname,B1+(r?`?${r}`:""))}async function lw(t){const e=fetch(t).then(n=>n.text().then(uw));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function cw(t=_E().path){const e=Je();return t=Yf(t),(await Zc()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await Ad({path:t});return!!s.prerender&&!s.redirect})}let rr=null;async function $1(){var s;if(rr)return rr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await uw(t.textContent||""),n=t.dataset.src?await lw(t.dataset.src):void 0;return rr={...e,...n,...window.__NUXT__},(s=rr.config)!=null&&s.public&&(rr.config.public=Qs(rr.config.public)),rr}async function uw(t){return await ZO(t,Je()._payloadRevivers)}function vl(t,e){Je()._payloadRevivers[t]=e}const j1=xC(()=>{vl("FirebaseTimestamp",t=>dh(new nt(t.seconds,t.nanoseconds))),vl("FirebaseGeoPoint",t=>dh(new Jc(t.latitude,t.longitude))),vl("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),W1=[["NuxtError",t=>xc(t)],["EmptyShallowRef",t=>Lo(t==="_"?void 0:t==="0n"?BigInt(0):xl(t))],["EmptyRef",t=>is(t==="_"?void 0:t==="0n"?BigInt(0):xl(t))],["ShallowRef",t=>Lo(t)],["ShallowReactive",t=>Zn(t)],["Ref",t=>is(t)],["Reactive",t=>Qs(t)]],q1=Xt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,r]of W1)vl(s,r);Object.assign(t.payload,([e,n]=vr(()=>t.runWithContext($1)),e=await e,n(),e)),window.__NUXT__=t.payload}}),K1=[],z1=Xt({name:"nuxt:head",enforce:"pre",setup(t){const e=M1({plugins:K1});L1(()=>Je().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await iw(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof document<"u";function hw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function G1(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hw(t.default)}const Ne=Object.assign;function Qu(t,e){const n={};for(const s in e){const r=e[s];n[s]=In(r)?r.map(t):t(r)}return n}const Ao=()=>{},In=Array.isArray,fw=/#/g,Q1=/&/g,Y1=/\//g,X1=/=/g,J1=/\?/g,dw=/\+/g,Z1=/%5B/g,eD=/%5D/g,pw=/%5E/g,tD=/%60/g,gw=/%7B/g,nD=/%7C/g,mw=/%7D/g,sD=/%20/g;function Cd(t){return encodeURI(""+t).replace(nD,"|").replace(Z1,"[").replace(eD,"]")}function rD(t){return Cd(t).replace(gw,"{").replace(mw,"}").replace(pw,"^")}function cf(t){return Cd(t).replace(dw,"%2B").replace(sD,"+").replace(fw,"%23").replace(Q1,"%26").replace(tD,"`").replace(gw,"{").replace(mw,"}").replace(pw,"^")}function iD(t){return cf(t).replace(X1,"%3D")}function oD(t){return Cd(t).replace(fw,"%23").replace(J1,"%3F")}function aD(t){return t==null?"":oD(t).replace(Y1,"%2F")}function Yo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const lD=/\/$/,cD=t=>t.replace(lD,"");function Yu(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(s=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=dD(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:Yo(o)}}function uD(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Zm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hD(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Ai(e.matched[s],n.matched[r])&&_w(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ai(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _w(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fD(t[n],e[n]))return!1;return!0}function fD(t,e){return In(t)?e_(t,e):In(e)?e_(e,t):t===e}function e_(t,e){return In(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function dD(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xo;(function(t){t.pop="pop",t.push="push"})(Xo||(Xo={}));var Co;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Co||(Co={}));function pD(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),cD(t)}const gD=/^[^#]+#/;function mD(t,e){return t.replace(gD,"#")+e}function _D(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const eu=()=>({left:window.scrollX,top:window.scrollY});function yD(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=_D(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function t_(t,e){return(history.state?history.state.position-e:-1)+t}const uf=new Map;function vD(t,e){uf.set(t,e)}function ED(t){const e=uf.get(t);return uf.delete(t),e}let TD=()=>location.protocol+"//"+location.host;function yw(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,c=r.slice(a);return c[0]!=="/"&&(c="/"+c),Zm(c,"")}return Zm(n,t)+s+r}function wD(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=yw(t,location),I=n.value,k=e.value;let N=0;if(p){if(n.value=m,e.value=p,o&&o===I){o=null;return}N=k?p.position-k.position:0}else s(m);r.forEach(x=>{x(n.value,I,{delta:N,type:Xo.pop,direction:N?N>0?Co.forward:Co.back:Co.unknown})})};function c(){o=n.value}function u(p){r.push(p);const m=()=>{const I=r.indexOf(p);I>-1&&r.splice(I,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:eu()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:c,listen:u,destroy:f}}function n_(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?eu():null}}function ID(t){const{history:e,location:n}=window,s={value:yw(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+c:TD()+t+c;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(c,u){const h=Ne({},e.state,n_(r.value.back,c,r.value.forward,!0),u,{position:r.value.position});i(c,h,!0),s.value=c}function a(c,u){const h=Ne({},r.value,e.state,{forward:c,scroll:eu()});i(h.current,h,!0);const f=Ne({},n_(s.value,c,null),{position:h.position+1},u);i(c,f,!1),s.value=c}return{location:s,state:r,push:a,replace:o}}function bD(t){t=pD(t);const e=ID(t),n=wD(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ne({location:"",base:t,go:s,createHref:mD.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function RD(t){return typeof t=="string"||t&&typeof t=="object"}function vw(t){return typeof t=="string"||typeof t=="symbol"}const Ew=Symbol("");var s_;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(s_||(s_={}));function Ci(t,e){return Ne(new Error,{type:t,[Ew]:!0},e)}function Gn(t,e){return t instanceof Error&&Ew in t&&(e==null||!!(t.type&e))}const r_="[^/]+?",AD={sensitive:!1,strict:!1,start:!0,end:!0},CD=/[.+*?^${}()[\]/\\]/g;function SD(t,e){const n=Ne({},AD,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(CD,"\\$&"),m+=40;else if(p.type===1){const{value:I,repeatable:k,optional:N,regexp:x}=p;i.push({name:I,repeatable:k,optional:N});const O=x||r_;if(O!==r_){m+=10;try{new RegExp(`(${O})`)}catch(P){throw new Error(`Invalid custom RegExp for param "${I}" (${O}): `+P.message)}}let E=k?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;f||(E=N&&u.length<2?`(?:/${E})`:"/"+E),N&&(E+="?"),r+=E,m+=20,N&&(m+=-8),k&&(m+=-20),O===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",I=i[p-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:I,repeatable:k,optional:N}=m,x=I in u?u[I]:"";if(In(x)&&!k)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const O=In(x)?x.join("/"):x;if(!O)if(N)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);h+=O}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:c}}function PD(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Tw(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=PD(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(i_(s))return 1;if(i_(r))return-1}return r.length-s.length}function i_(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kD={type:0,value:""},ND=/[a-zA-Z0-9_]/;function OD(t){if(!t)return[[]];if(t==="/")return[[kD]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,c,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:c==="/"?(u&&f(),o()):c===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:c==="("?n=2:ND.test(c)?p():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+c:n=3:h+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function DD(t,e,n){const s=SD(OD(t.path),n),r=Ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function xD(t,e){const n=[],s=new Map;e=c_({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,m){const I=!m,k=a_(f);k.aliasOf=m&&m.record;const N=c_(e,f),x=[k];if("alias"in f){const P=typeof f.alias=="string"?[f.alias]:f.alias;for(const M of P)x.push(a_(Ne({},k,{components:m?m.record.components:k.components,path:M,aliasOf:m?m.record:k})))}let O,E;for(const P of x){const{path:M}=P;if(p&&M[0]!=="/"){const F=p.record.path,b=F[F.length-1]==="/"?"":"/";P.path=p.record.path+(M&&b+M)}if(O=DD(P,p,N),m?m.alias.push(O):(E=E||O,E!==O&&E.alias.push(O),I&&f.name&&!l_(O)&&o(f.name)),ww(O)&&c(O),k.children){const F=k.children;for(let b=0;b<F.length;b++)i(F[b],O,m&&m.children[b])}m=m||O}return E?()=>{o(E)}:Ao}function o(f){if(vw(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){const p=VD(f,n);n.splice(p,0,f),f.record.name&&!l_(f)&&s.set(f.record.name,f)}function u(f,p){let m,I={},k,N;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw Ci(1,{location:f});N=m.record.name,I=Ne(o_(p.params,m.keys.filter(E=>!E.optional).concat(m.parent?m.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),f.params&&o_(f.params,m.keys.map(E=>E.name))),k=m.stringify(I)}else if(f.path!=null)k=f.path,m=n.find(E=>E.re.test(k)),m&&(I=m.parse(k),N=m.record.name);else{if(m=p.name?s.get(p.name):n.find(E=>E.re.test(p.path)),!m)throw Ci(1,{location:f,currentLocation:p});N=m.record.name,I=Ne({},p.params,f.params),k=m.stringify(I)}const x=[];let O=m;for(;O;)x.unshift(O.record),O=O.parent;return{name:N,path:k,params:I,matched:x,meta:LD(x)}}t.forEach(f=>i(f));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function o_(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function a_(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:MD(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function MD(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function l_(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function LD(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function c_(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function VD(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;Tw(t,e[i])<0?s=i:n=i+1}const r=FD(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function FD(t){let e=t;for(;e=e.parent;)if(ww(e)&&Tw(t,e)===0)return e}function ww({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function UD(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(dw," "),o=i.indexOf("="),a=Yo(o<0?i:i.slice(0,o)),c=o<0?null:Yo(i.slice(o+1));if(a in e){let u=e[a];In(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function u_(t){let e="";for(let n in t){const s=t[n];if(n=iD(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(s)?s.map(i=>i&&cf(i)):[s&&cf(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function BD(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=In(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const HD=Symbol(""),h_=Symbol(""),Sd=Symbol(""),Iw=Symbol(""),hf=Symbol("");function ro(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function As(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,c)=>{const u=p=>{p===!1?c(Ci(4,{from:n,to:e})):p instanceof Error?c(p):RD(p)?c(Ci(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>c(p))})}function Xu(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(hw(c)){const h=(c.__vccOpts||c)[e];h&&i.push(As(h,n,s,o,a,r))}else{let u=c();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=G1(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&As(m,n,s,o,a,r)()}))}}return i}function f_(t){const e=Dt(Sd),n=Dt(Iw),s=dn(()=>{const c=qe(t.to);return e.resolve(c)}),r=dn(()=>{const{matched:c}=s.value,{length:u}=c,h=c[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(Ai.bind(null,h));if(p>-1)return p;const m=d_(c[u-2]);return u>1&&d_(h)===m&&f[f.length-1].path!==m?f.findIndex(Ai.bind(null,c[u-2])):p}),i=dn(()=>r.value>-1&&KD(n.params,s.value.params)),o=dn(()=>r.value>-1&&r.value===n.matched.length-1&&_w(n.params,s.value.params));function a(c={}){if(qD(c)){const u=e[qe(t.replace)?"replace":"push"](qe(t.to)).catch(Ao);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:dn(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function $D(t){return t.length===1?t[0]:t}const jD=ia({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:f_,setup(t,{slots:e}){const n=Qs(f_(t)),{options:s}=Dt(Sd),r=dn(()=>({[p_(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[p_(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&$D(e.default(n));return t.custom?i:kn("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),WD=jD;function qD(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function KD(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!In(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function d_(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const p_=(t,e,n)=>t??e??n,zD=ia({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Dt(hf),r=dn(()=>t.route||s.value),i=Dt(h_,0),o=dn(()=>{let u=qe(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=dn(()=>r.value.matched[o.value]);oi(h_,dn(()=>o.value+1)),oi(HD,a),oi(hf,r);const c=is();return _r(()=>[c.value,a.value,t.name],([u,h,f],[p,m,I])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!Ai(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return g_(n.default,{Component:p,route:u});const m=f.props[h],I=m?m===!0?u.params:typeof m=="function"?m(u):m:null,N=kn(p,Ne({},I,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(f.instances[h]=null)},ref:c}));return g_(n.default,{Component:N,route:u})||N}}});function g_(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const bw=zD;function GD(t){const e=xD(t.routes,t),n=t.parseQuery||UD,s=t.stringifyQuery||u_,r=t.history,i=ro(),o=ro(),a=ro(),c=Lo(hn);let u=hn;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=Qu.bind(null,B=>""+B),f=Qu.bind(null,aD),p=Qu.bind(null,Yo);function m(B,Z){let X,se;return vw(B)?(X=e.getRecordMatcher(B),se=Z):se=B,e.addRoute(se,X)}function I(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function k(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function x(B,Z){if(Z=Ne({},Z||c.value),typeof B=="string"){const C=Yu(n,B,Z.path),L=e.resolve({path:C.path},Z),$=r.createHref(C.fullPath);return Ne(C,L,{params:p(L.params),hash:Yo(C.hash),redirectedFrom:void 0,href:$})}let X;if(B.path!=null)X=Ne({},B,{path:Yu(n,B.path,Z.path).path});else{const C=Ne({},B.params);for(const L in C)C[L]==null&&delete C[L];X=Ne({},B,{params:f(C)}),Z.params=f(Z.params)}const se=e.resolve(X,Z),Te=B.hash||"";se.params=h(p(se.params));const Me=uD(s,Ne({},B,{hash:rD(Te),path:se.path})),R=r.createHref(Me);return Ne({fullPath:Me,hash:Te,query:s===u_?BD(B.query):B.query||{}},se,{redirectedFrom:void 0,href:R})}function O(B){return typeof B=="string"?Yu(n,B,c.value.path):Ne({},B)}function E(B,Z){if(u!==B)return Ci(8,{from:Z,to:B})}function P(B){return b(B)}function M(B){return P(Ne(O(B),{replace:!0}))}function F(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let se=typeof X=="function"?X(B):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=O(se):{path:se},se.params={}),Ne({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function b(B,Z){const X=u=x(B),se=c.value,Te=B.state,Me=B.force,R=B.replace===!0,C=F(X);if(C)return b(Ne(O(C),{state:typeof C=="object"?Ne({},Te,C.state):Te,force:Me,replace:R}),Z||X);const L=X;L.redirectedFrom=Z;let $;return!Me&&hD(s,se,X)&&($=Ci(16,{to:L,from:se}),Jt(se,se,!0,!1)),($?Promise.resolve($):T(L,se)).catch(U=>Gn(U)?Gn(U,2)?U:cn(U):te(U,L,se)).then(U=>{if(U){if(Gn(U,2))return b(Ne({replace:R},O(U.to),{state:typeof U.to=="object"?Ne({},Te,U.to.state):Te,force:Me}),Z||L)}else U=A(L,se,!0,R,Te);return S(L,se,U),U})}function v(B,Z){const X=E(B,Z);return X?Promise.reject(X):Promise.resolve()}function y(B){const Z=gs.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function T(B,Z){let X;const[se,Te,Me]=QD(B,Z);X=Xu(se.reverse(),"beforeRouteLeave",B,Z);for(const C of se)C.leaveGuards.forEach(L=>{X.push(As(L,B,Z))});const R=v.bind(null,B,Z);return X.push(R),Bt(X).then(()=>{X=[];for(const C of i.list())X.push(As(C,B,Z));return X.push(R),Bt(X)}).then(()=>{X=Xu(Te,"beforeRouteUpdate",B,Z);for(const C of Te)C.updateGuards.forEach(L=>{X.push(As(L,B,Z))});return X.push(R),Bt(X)}).then(()=>{X=[];for(const C of Me)if(C.beforeEnter)if(In(C.beforeEnter))for(const L of C.beforeEnter)X.push(As(L,B,Z));else X.push(As(C.beforeEnter,B,Z));return X.push(R),Bt(X)}).then(()=>(B.matched.forEach(C=>C.enterCallbacks={}),X=Xu(Me,"beforeRouteEnter",B,Z,y),X.push(R),Bt(X))).then(()=>{X=[];for(const C of o.list())X.push(As(C,B,Z));return X.push(R),Bt(X)}).catch(C=>Gn(C,8)?C:Promise.reject(C))}function S(B,Z,X){a.list().forEach(se=>y(()=>se(B,Z,X)))}function A(B,Z,X,se,Te){const Me=E(B,Z);if(Me)return Me;const R=Z===hn,C=Yr?history.state:{};X&&(se||R?r.replace(B.fullPath,Ne({scroll:R&&C&&C.scroll},Te)):r.push(B.fullPath,Te)),c.value=B,Jt(B,Z,X,R),cn()}let w;function ge(){w||(w=r.listen((B,Z,X)=>{if(!Rn.listening)return;const se=x(B),Te=F(se);if(Te){b(Ne(Te,{replace:!0,force:!0}),se).catch(Ao);return}u=se;const Me=c.value;Yr&&vD(t_(Me.fullPath,X.delta),eu()),T(se,Me).catch(R=>Gn(R,12)?R:Gn(R,2)?(b(Ne(O(R.to),{force:!0}),se).then(C=>{Gn(C,20)&&!X.delta&&X.type===Xo.pop&&r.go(-1,!1)}).catch(Ao),Promise.reject()):(X.delta&&r.go(-X.delta,!1),te(R,se,Me))).then(R=>{R=R||A(se,Me,!1),R&&(X.delta&&!Gn(R,8)?r.go(-X.delta,!1):X.type===Xo.pop&&Gn(R,20)&&r.go(-1,!1)),S(se,Me,R)}).catch(Ao)}))}let ve=ro(),ne=ro(),he;function te(B,Z,X){cn(B);const se=ne.list();return se.length?se.forEach(Te=>Te(B,Z,X)):console.error(B),Promise.reject(B)}function Ge(){return he&&c.value!==hn?Promise.resolve():new Promise((B,Z)=>{ve.add([B,Z])})}function cn(B){return he||(he=!B,ge(),ve.list().forEach(([Z,X])=>B?X(B):Z()),ve.reset()),B}function Jt(B,Z,X,se){const{scrollBehavior:Te}=t;if(!Yr||!Te)return Promise.resolve();const Me=!X&&ED(t_(B.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return ra().then(()=>Te(B,Z,Me)).then(R=>R&&yD(R)).catch(R=>te(R,B,Z))}const Qe=B=>r.go(B);let Ye;const gs=new Set,Rn={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:k,resolve:x,options:t,push:P,replace:M,go:Qe,back:()=>Qe(-1),forward:()=>Qe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:Ge,install(B){const Z=this;B.component("RouterLink",WD),B.component("RouterView",bw),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>qe(c)}),Yr&&!Ye&&c.value===hn&&(Ye=!0,P(r.location).catch(Te=>{}));const X={};for(const Te in hn)Object.defineProperty(X,Te,{get:()=>c.value[Te],enumerable:!0});B.provide(Sd,Z),B.provide(Iw,Zn(X)),B.provide(hf,c);const se=B.unmount;gs.add(B),B.unmount=function(){gs.delete(B),gs.size<1&&(u=hn,w&&w(),w=null,c.value=hn,Ye=!1,he=!1),se()}}};function Bt(B){return B.reduce((Z,X)=>Z.then(()=>y(X)),Promise.resolve())}return Rn}function QD(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>Ai(u,a))?s.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(u=>Ai(u,c))||r.push(c))}return[n,s,r]}const YD=/(:\w+)\([^)]+\)/g,XD=/(:\w+)[?+*]/g,JD=/:\w+/g,ZD=(t,e)=>e.path.replace(YD,"$1").replace(XD,"$1").replace(JD,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),ff=(t,e)=>{const n=t.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&ZD(t.route,n));return typeof s=="function"?s(t.route):s},ex=(t,e)=>({default:()=>t?kn(Wb,t===!0?{}:t,e):e});function Pd(t){return Array.isArray(t)?t:[t]}const Ju=[{name:"index",path:"/",component:()=>sc(()=>import("./Dlzfc57k.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"login",path:"/login",component:()=>sc(()=>import("./Bsdq9w3w.js"),[],import.meta.url)}],tx=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var s;return e?kn(t,e,n):(s=n.default)==null?void 0:s.call(n)}}),nx=/(:\w+)\([^)]+\)/g,sx=/(:\w+)[?+*]/g,rx=/:\w+/g;function m_(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(nx,"$1").replace(sx,"$1").replace(rx,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function ix(t,e){return t===e||e===hn?!1:m_(t)!==m_(e)?!0:!t.matched.every((s,r)=>{var i,o;return s.components&&s.components.default===((o=(i=e.matched[r])==null?void 0:i.components)==null?void 0:o.default)})}const ox={scrollBehavior(t,e,n){var u;const s=Je(),r=((u=on().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&ix(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:__(t.hash),behavior:r}:!1;const a=h=>!!(h.meta.pageTransition??Nh),c=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{s.hooks.hookOnce(c,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(i={el:t.hash,top:__(t.hash),behavior:r}),h(i)})})}};function __(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const ax={hashMode:!1,scrollBehaviorType:"auto"},An={...ax,...ox},lx=async t=>{var c;let e,n;if(!((c=t.meta)!=null&&c.validate))return;const s=Je(),r=on(),i=([e,n]=vr(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=xc({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=r.beforeResolve(u=>{if(a(),u===t){const h=r.afterEach(async()=>{h(),await s.runWithContext(()=>Jr(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})};function kd(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function Rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Aw=Rw,Cw=new Di("auth","Firebase",Rw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc=new ca("@firebase/auth");function cx(t,...e){rc.logLevel<=ye.WARN&&rc.warn(`Auth (${Ys}): ${t}`,...e)}function El(t,...e){rc.logLevel<=ye.ERROR&&rc.error(`Auth (${Ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,...e){throw Od(t,...e)}function vn(t,...e){return Od(t,...e)}function Nd(t,e,n){const s=Object.assign(Object.assign({},Aw()),{[e]:n});return new Di("auth","Firebase",s).create(e,{appName:t.name})}function Tr(t){return Nd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ux(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Bn(t,"argument-error"),Nd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Od(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Cw.create(t,...e)}function me(t,e,...n){if(!t)throw Od(e,...n)}function ts(t){const e="INTERNAL ASSERTION FAILED: "+t;throw El(e),new Error(e)}function fs(t,e){t||ts(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function hx(){return y_()==="http:"||y_()==="https:"}function y_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hx()||cS()||"connection"in navigator)?navigator.onLine:!0}function dx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,fs(n>e,"Short delay should be less than long delay!"),this.isMobile=Zf()||bE()}get(){return fx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dd(t,e){fs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ts("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ts("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ts("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx=new pa(3e4,6e4);function xd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ui(t,e,n,s,r={}){return Pw(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=xi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return lS()||(u.referrerPolicy="no-referrer"),Sw.fetch()(kw(t,t.config.apiHost,n,a),u)})}async function Pw(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},px),e);try{const r=new _x(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Za(t,"user-disabled",o);const h=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Nd(t,h,u);Bn(t,h)}}catch(r){if(r instanceof $n)throw r;Bn(t,"network-request-failed",{message:String(r)})}}async function mx(t,e,n,s,r={}){const i=await Ui(t,e,n,s,r);return"mfaPendingCredential"in i&&Bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kw(t,e,n,s){const r=`${e}${n}?${s}`;return t.config.emulator?Dd(t.config,r):`${t.config.apiScheme}://${r}`}class _x{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(vn(this.auth,"network-request-failed")),gx.get())})}}function Za(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=vn(t,e,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(t,e){return Ui(t,"POST","/v1/accounts:delete",e)}async function Nw(t,e){return Ui(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vx(t,e=!1){const n=an(t),s=await n.getIdToken(e),r=Md(s);me(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:So(Zu(r.auth_time)),issuedAtTime:So(Zu(r.iat)),expirationTime:So(Zu(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Zu(t){return Number(t)*1e3}function Md(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return El("JWT malformed, contained fewer than 3 sections"),null;try{const r=Bl(n);return r?JSON.parse(r):(El("Failed to decode base64 JWT payload"),null)}catch(r){return El("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function v_(t){const e=Md(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof $n&&Ex(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function Ex({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=So(this.lastLoginAt),this.creationTime=So(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ic(t){var e;const n=t.auth,s=await t.getIdToken(),r=await Jo(t,Nw(n,{idToken:s}));me(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ow(i.providerUserInfo):[],a=Ix(t.providerData,o),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new pf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function wx(t){const e=an(t);await ic(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ix(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Ow(t){return t.map(e=>{var{providerId:n}=e,s=kd(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){const n=await Pw(t,{},async()=>{const s=xi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=kw(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sw.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rx(t,e){return Ui(t,"POST","/v2/accounts:revokeToken",xd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):v_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=v_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await bx(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new ci;return s&&(me(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(me(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return ts("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ns{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=kd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Tx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jo(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vx(this,e)}reload(){return wx(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ns(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await ic(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(es(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await Jo(this,yx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,c,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:E,emailVerified:P,isAnonymous:M,providerData:F,stsTokenManager:b}=n;me(E&&b,e,"internal-error");const v=ci.fromJSON(this.name,b);me(typeof E=="string",e,"internal-error"),Ts(f,e.name),Ts(p,e.name),me(typeof P=="boolean",e,"internal-error"),me(typeof M=="boolean",e,"internal-error"),Ts(m,e.name),Ts(I,e.name),Ts(k,e.name),Ts(N,e.name),Ts(x,e.name),Ts(O,e.name);const y=new ns({uid:E,auth:e,email:p,emailVerified:P,displayName:f,isAnonymous:M,photoURL:I,phoneNumber:m,tenantId:k,stsTokenManager:v,createdAt:x,lastLoginAt:O});return F&&Array.isArray(F)&&(y.providerData=F.map(T=>Object.assign({},T))),N&&(y._redirectEventId=N),y}static async _fromIdTokenResponse(e,n,s=!1){const r=new ci;r.updateFromServerResponse(n);const i=new ns({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ic(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];me(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?Ow(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new ci;a.updateFromIdToken(s);const c=new ns({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new pf(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_=new Map;function ss(t){fs(t instanceof Function,"Expected a class definition");let e=E_.get(t);return e?(fs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,E_.set(t,e),e)}/**
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
 */class Dw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dw.type="NONE";const T_=Dw;/**
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
 */function Tl(t,e,n){return`firebase:${t}:${e}:${n}`}class ui{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Tl(this.userKey,r.apiKey,i),this.fullPersistenceKey=Tl("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ns._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ui(ss(T_),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||ss(T_);const o=Tl(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=ns._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ui(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ui(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uw(e))return"Blackberry";if(Bw(e))return"Webos";if(Mw(e))return"Safari";if((e.includes("chrome/")||Lw(e))&&!e.includes("edge/"))return"Chrome";if(Fw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function xw(t=xt()){return/firefox\//i.test(t)}function Mw(t=xt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lw(t=xt()){return/crios\//i.test(t)}function Vw(t=xt()){return/iemobile/i.test(t)}function Fw(t=xt()){return/android/i.test(t)}function Uw(t=xt()){return/blackberry/i.test(t)}function Bw(t=xt()){return/webos/i.test(t)}function Ld(t=xt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ax(t=xt()){var e;return Ld(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cx(){return uS()&&document.documentMode===10}function Hw(t=xt()){return Ld(t)||Fw(t)||Bw(t)||Uw(t)||/windows phone/i.test(t)||Vw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t,e=[]){let n;switch(t){case"Browser":n=w_(xt());break;case"Worker":n=`${w_(xt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ys}/${s}`}/**
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
 */class Sx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Px(t,e={}){return Ui(t,"GET","/v2/passwordPolicy",xd(t,e))}/**
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
 */const kx=6;class Nx{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(r=c.containsLowercaseLetter)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ox{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new I_(this),this.idTokenSubscription=new I_(this),this.beforeStateQueue=new Sx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ss(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await ui.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nw(this,{idToken:e}),s=await ns._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(es(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ic(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(es(this.app))return Promise.reject(Tr(this));const n=e?an(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return es(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return es(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ss(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Px(this),n=new Nx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Di("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Rx(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ss(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await ui.create(this,[ss(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,s,r);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$w(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&cx(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Vd(t){return an(t)}class I_{constructor(e){this.auth=e,this.observer=null,this.addObserver=vS(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dx(t){Fd=t}function xx(t){return Fd.loadJS(t)}function Mx(){return Fd.gapiScript}function Lx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vx(t,e){const n=kE(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if($l(i,e??{}))return r;Bn(r,"already-initialized")}return n.initialize({options:e})}function Fx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ss);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ts("not implemented")}_getIdTokenResponse(e){return ts("not implemented")}_linkToIdToken(e,n){return ts("not implemented")}_getReauthenticationResolver(e){return ts("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(t,e){return mx(t,"POST","/v1/accounts:signInWithIdp",xd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux="http://localhost";class Ir extends jw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=kd(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Ir(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,hi(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:Ux,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends Ud{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends ga{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:Ss.PROVIDER_ID,signInMethod:Ss.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ss.credentialFromTaggedObject(e)}static credentialFromError(e){return Ss.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ss.credential(n,s)}catch{return null}}}Ss.GOOGLE_SIGN_IN_METHOD="google.com";Ss.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends ga{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ps.credential(e.oauthAccessToken)}catch{return null}}}Ps.GITHUB_SIGN_IN_METHOD="github.com";Ps.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends ga{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:ks.PROVIDER_ID,signInMethod:ks.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ks.credentialFromTaggedObject(e)}static credentialFromError(e){return ks.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return ks.credential(n,s)}catch{return null}}}ks.TWITTER_SIGN_IN_METHOD="twitter.com";ks.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await ns._fromIdTokenResponse(e,s,r),o=b_(s);return new Si({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=b_(s);return new Si({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function b_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends $n{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new oc(e,n,s,r)}}function Ww(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oc._fromErrorAndOperation(t,i,e,s):i})}async function Bx(t,e,n=!1){const s=await Jo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Si._forOperation(t,"link",s)}/**
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
 */async function Hx(t,e,n=!1){const{auth:s}=t;if(es(s.app))return Promise.reject(Tr(s));const r="reauthenticate";try{const i=await Jo(t,Ww(s,r,e,t),n);me(i.idToken,s,"internal-error");const o=Md(i.idToken);me(o,s,"internal-error");const{sub:a}=o;return me(t.uid===a,s,"user-mismatch"),Si._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Bn(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $x(t,e,n=!1){if(es(t.app))return Promise.reject(Tr(t));const s="signIn",r=await Ww(t,s,e),i=await Si._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function jx(t,e,n,s){return an(t).onIdTokenChanged(e,n,s)}function L2(t){return an(t).signOut()}const ac="__sak";/**
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
 */class qw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ac,"1"),this.storage.removeItem(ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx=1e3,qx=10;class Kw extends qw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Cx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,qx):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Wx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kw.type="LOCAL";const Kx=Kw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zw extends qw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}zw.type="SESSION";const zx=zw;/**
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
 */function Gx(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new tu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),c=await Gx(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bd(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Qx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Bd("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(){return window}function Yx(t){Ln().location.href=t}/**
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
 */function Gw(){return typeof Ln().WorkerGlobalScope<"u"&&typeof Ln().importScripts=="function"}async function Xx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Jx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Zx(){return Gw()?self:null}/**
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
 */const Qw="firebaseLocalStorageDb",eM=1,lc="firebaseLocalStorage",Yw="fbase_key";class ma{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function nu(t,e){return t.transaction([lc],e?"readwrite":"readonly").objectStore(lc)}function tM(){const t=indexedDB.deleteDatabase(Qw);return new ma(t).toPromise()}function gf(){const t=indexedDB.open(Qw,eM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(lc,{keyPath:Yw})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(lc)?e(s):(s.close(),await tM(),e(await gf()))})})}async function R_(t,e,n){const s=nu(t,!0).put({[Yw]:e,value:n});return new ma(s).toPromise()}async function nM(t,e){const n=nu(t,!1).get(e),s=await new ma(n).toPromise();return s===void 0?null:s.value}function A_(t,e){const n=nu(t,!0).delete(e);return new ma(n).toPromise()}const sM=800,rM=3;class Xw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>rM)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tu._getInstance(Zx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Xx(),!this.activeServiceWorker)return;this.sender=new Qx(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Jx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gf();return await R_(e,ac,"1"),await A_(e,ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>R_(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>nM(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>A_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=nu(r,!1).getAll();return new ma(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),sM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xw.type="LOCAL";const iM=Xw;new pa(3e4,6e4);/**
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
 */function Jw(t,e){return e?ss(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hd extends jw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oM(t){return $x(t.auth,new Hd(t),t.bypassAuthState)}function aM(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Hx(n,new Hd(t),t.bypassAuthState)}async function lM(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),Bx(n,new Hd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oM;case"linkViaPopup":case"linkViaRedirect":return lM;case"reauthViaPopup":case"reauthViaRedirect":return aM;default:Bn(this.auth,"internal-error")}}resolve(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=new pa(2e3,1e4);async function V2(t,e,n){if(es(t.app))return Promise.reject(vn(t,"operation-not-supported-in-this-environment"));const s=Vd(t);ux(t,e,Ud);const r=Jw(s,n);return new hr(s,"signInViaPopup",e,r).executeNotNull()}class hr extends Zw{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){fs(this.filter.length===1,"Popup operations only handle one event");const e=Bd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(vn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(vn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(vn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cM.get())};e()}}hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM="pendingRedirect",wl=new Map;class hM extends Zw{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const s=await fM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fM(t,e){const n=gM(e),s=pM(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function dM(t,e){wl.set(t._key(),e)}function pM(t){return ss(t._redirectPersistence)}function gM(t){return Tl(uM,t.config.apiKey,t.name)}async function mM(t,e,n=!1){if(es(t.app))return Promise.reject(Tr(t));const s=Vd(t),r=Jw(s,e),o=await new hM(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _M=10*60*1e3;class yM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!eI(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(vn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=_M&&this.cachedEventUids.clear(),this.cachedEventUids.has(C_(e))}saveEventToCache(e){this.cachedEventUids.add(C_(e)),this.lastProcessedEventTime=Date.now()}}function C_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eI(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EM(t,e={}){return Ui(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wM=/^https?/;async function IM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EM(t);for(const n of e)try{if(bM(n))return}catch{}Bn(t,"unauthorized-domain")}function bM(t){const e=df(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!wM.test(n))return!1;if(TM.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const RM=new pa(3e4,6e4);function S_(){const t=Ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AM(t){return new Promise((e,n)=>{var s,r,i;function o(){S_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{S_(),n(vn(t,"network-request-failed"))},timeout:RM.get()})}if(!((r=(s=Ln().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Ln().gapi)===null||i===void 0)&&i.load)o();else{const a=Lx("iframefcb");return Ln()[a]=()=>{gapi.load?o():n(vn(t,"network-request-failed"))},xx(`${Mx()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Il=null,e})}let Il=null;function CM(t){return Il=Il||AM(t),Il}/**
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
 */const SM=new pa(5e3,15e3),PM="__/auth/iframe",kM="emulator/auth/iframe",NM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},OM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function DM(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dd(e,kM):`https://${t.config.authDomain}/${PM}`,s={apiKey:e.apiKey,appName:t.name,v:Ys},r=OM.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${xi(s).slice(1)}`}async function xM(t){const e=await CM(t),n=Ln().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:DM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NM,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=vn(t,"network-request-failed"),a=Ln().setTimeout(()=>{i(o)},SM.get());function c(){Ln().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const MM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},LM=500,VM=600,FM="_blank",UM="http://localhost";class P_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function BM(t,e,n,s=LM,r=VM){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},MM),{width:s.toString(),height:r.toString(),top:i,left:o}),u=xt().toLowerCase();n&&(a=Lw(u)?FM:n),xw(u)&&(e=e||UM,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[m,I])=>`${p}${m}=${I},`,"");if(Ax(u)&&a!=="_self")return HM(e||"",a),new P_(null);const f=window.open(e||"",a,h);me(f,t,"popup-blocked");try{f.focus()}catch{}return new P_(f)}function HM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const $M="__/auth/handler",jM="emulator/auth/handler",WM=encodeURIComponent("fac");async function k_(t,e,n,s,r,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ys,eventId:r};if(e instanceof Ud){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lh(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ga){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await t._getAppCheckToken(),u=c?`#${WM}=${encodeURIComponent(c)}`:"";return`${qM(t)}?${xi(a).slice(1)}${u}`}function qM({config:t}){return t.emulator?Dd(t,jM):`https://${t.authDomain}/${$M}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="webStorageSupport";class KM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zx,this._completeRedirectFn=mM,this._overrideRedirectResult=dM}async _openPopup(e,n,s,r){var i;fs((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await k_(e,n,s,df(),r);return BM(e,o,Bd())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await k_(e,n,s,df(),r);return Yx(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(fs(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await xM(e),s=new yM(e);return n.register("authEvent",r=>(me(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(eh,{type:eh},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[eh];o!==void 0&&n(!!o),Bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=IM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hw()||Mw()||Ld()}}const zM=KM;var N_="@firebase/auth",O_="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function YM(t){Vn(new wn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$w(t)},u=new Ox(s,r,i,c);return Fx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Vn(new wn("auth-internal",e=>{const n=Vd(e.getProvider("auth").getImmediate());return(s=>new GM(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(N_,O_,QM(t)),Qt(N_,O_,"esm2017")}/**
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
 */const XM=5*60;iS("authIdTokenMaxAge");function JM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Dx({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=vn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",JM().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});YM("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZM=new Map,eL={activated:!1,tokenObservers:[]};function bn(t){return ZM.get(t)||Object.assign({},eL)}const D_={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tL{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ho,this.pending.promise.catch(n=>{}),await nL(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ho,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function nL(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},cc=new Di("appCheck","AppCheck",sL);function tI(t){if(!bn(t).activated)throw cc.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL="firebase-app-check-database",iL=1,mf="firebase-app-check-store";let el=null;function oL(){return el||(el=new Promise((t,e)=>{try{const n=indexedDB.open(rL,iL);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(cc.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(mf,{keyPath:"compositeKey"})}}}catch(n){e(cc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),el)}function aL(t,e){return lL(cL(t),e)}async function lL(t,e){const s=(await oL()).transaction(mf,"readwrite"),i=s.objectStore(mf).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=c=>{o()},s.onerror=c=>{var u;a(cc.create("storage-set",{originalErrorMessage:(u=c.target.error)===null||u===void 0?void 0:u.message}))}})}function cL(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new ca("@firebase/app-check");function x_(t,e){return AE()?aL(t,e).catch(n=>{_f.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uL={error:"UNKNOWN_ERROR"};function hL(t){return Mc.encodeString(JSON.stringify(t),!1)}async function yf(t,e=!1){const n=t.app;tI(n);const s=bn(n);let r=s.token,i;if(r&&!mo(r)&&(s.token=void 0,r=void 0),!r){const c=await s.cachedTokenPromise;c&&(mo(c)?r=c:await x_(n,void 0))}if(!e&&r&&mo(r))return{token:r.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),r=await bn(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?_f.warn(c.message):_f.error(c),i=c}let a;return r?i?mo(r)?a={token:r.token,internalError:i}:a=L_(i):(a={token:r.token},s.token=r,await x_(n,r)):a=L_(i),o&&gL(n,a),a}async function fL(t){const e=t.app;tI(e);const{provider:n}=bn(e);{const{token:s}=await n.getToken();return{token:s}}}function dL(t,e,n,s){const{app:r}=t,i=bn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&mo(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),M_(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>M_(t))}function nI(t,e){const n=bn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function M_(t){const{app:e}=t,n=bn(e);let s=n.tokenRefresher;s||(s=pL(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function pL(t){const{app:e}=t;return new tL(async()=>{const n=bn(e);let s;if(n.token?s=await yf(t,!0):s=await yf(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=bn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},D_.RETRIAL_MIN_WAIT,D_.RETRIAL_MAX_WAIT)}function gL(t,e){const n=bn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function mo(t){return t.expireTimeMillis-Date.now()>0}function L_(t){return{token:hL(uL),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=bn(this.app);for(const n of e)nI(this.app,n.next);return Promise.resolve()}}function _L(t,e){return new mL(t,e)}function yL(t){return{getToken:e=>yf(t,e),getLimitedUseToken:()=>fL(t),addTokenListener:e=>dL(t,"INTERNAL",e),removeTokenListener:e=>nI(t.app,e)}}const vL="@firebase/app-check",EL="0.8.10",TL="app-check",V_="app-check-internal";function wL(){Vn(new wn(TL,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return _L(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(V_).initialize()})),Vn(new wn(V_,t=>{const e=t.getProvider("app-check").getImmediate();return yL(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qt(vL,EL)}wL();var IL="firebase",bL="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(IL,bL,"app");const sI=Symbol("firebaseApp");function rI(t){return kc()&&Dt(sI,null)||OE(t)}const RL=typeof window<"u",tl=new WeakMap;function AL(t,e){if(!tl.has(t)){const n=Vy(!0);tl.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),tl.delete(t)}}return tl.get(t)}const iI=new WeakMap;function CL(t){return iI.get(rI(t))}const nl=new WeakMap;function oI(t){const e=rI(t);if(!nl.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{nl.set(e,i),n(i.value)}];nl.set(e,r)}return nl.get(e)}function SL(t){const e=oI(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function PL(t,e){jx(e,n=>{const s=oI();t.value=n,Array.isArray(s)&&s[1](t)})}var F_={};const U_="@firebase/database",B_="1.0.10";/**
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
 */let aI="";function kL(t){aI=t}/**
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
 */class NL{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),yt(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$o(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class OL{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ps(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const lI=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new NL(e)}}catch{}return new OL},fr=lI("localStorage"),DL=lI("sessionStorage");/**
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
 */const fi=new ca("@firebase/database"),xL=function(){let t=1;return function(){return t++}}(),cI=function(t){const e=IS(t),n=new yS;n.update(e);const s=n.digest();return Mc.encodeByteArray(s)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=_a.apply(null,s):typeof s=="object"?e+=yt(s):e+=s,e+=" "}return e};let Po=null,H_=!0;const ML=function(t,e){Y(!e,"Can't turn on custom loggers persistently."),fi.logLevel=ye.VERBOSE,Po=fi.log.bind(fi)},kt=function(...t){if(H_===!0&&(H_=!1,Po===null&&DL.get("logging_enabled")===!0&&ML()),Po){const e=_a.apply(null,t);Po(e)}},ya=function(t){return function(...e){kt(t,...e)}},vf=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);fi.error(e)},br=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw fi.error(e),new Error(e)},Yt=function(...t){const e="FIREBASE WARNING: "+_a(...t);fi.warn(e)},LL=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Yt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},uI=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},VL=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Pi="[MIN_NAME]",Rr="[MAX_NAME]",Bi=function(t,e){if(t===e)return 0;if(t===Pi||e===Rr)return-1;if(e===Pi||t===Rr)return 1;{const n=$_(t),s=$_(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},FL=function(t,e){return t===e?0:t<e?-1:1},io=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+yt(e))},$d=function(t){if(typeof t!="object"||t===null)return yt(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=yt(e[s]),n+=":",n+=$d(t[e[s]]);return n+="}",n},hI=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function ln(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const fI=function(t){Y(!uI(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,c;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(c=n;c;c-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(c=0;c<64;c+=8){let p=parseInt(h.substr(c,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},UL=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},BL=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},HL=new RegExp("^-?(0*)\\d{1,10}$"),$L=-2147483648,jL=2147483647,$_=function(t){if(HL.test(t)){const e=Number(t);if(e>=$L&&e<=jL)return e}return null},va=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Yt("Exception was thrown by user callback.",n),e},Math.floor(0))}},WL=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ko=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class qL{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Yt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class KL{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(kt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Yt(e)}}/**
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
 */const jd="5",dI="v",pI="s",gI="r",mI="f",_I=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,yI="ls",vI="p",Ef="ac",EI="websocket",TI="long_polling";/**
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
 */class zL{constructor(e,n,s,r,i=!1,o="",a=!1,c=!1){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function GL(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function wI(t,e,n){Y(typeof e=="string","typeof type must == string"),Y(typeof n=="object","typeof params must == object");let s;if(e===EI)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===TI)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);GL(t)&&(n.ns=t.namespace);const r=[];return ln(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class QL{constructor(){this.counters_={}}incrementCounter(e,n=1){ps(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return XC(this.counters_)}}/**
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
 */const th={},nh={};function Wd(t){const e=t.toString();return th[e]||(th[e]=new QL),th[e]}function YL(t,e){const n=t.toString();return nh[n]||(nh[n]=e()),nh[n]}/**
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
 */class XL{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&va(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const j_="start",JL="close",ZL="pLPCommand",eV="pRTLPCB",II="id",bI="pw",RI="ser",tV="cb",nV="seg",sV="ts",rV="d",iV="dframe",AI=1870,CI=30,oV=AI-CI,aV=25e3,lV=3e4;class Zr{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ya(e),this.stats_=Wd(n),this.urlFn=c=>(this.appCheckToken&&(c[Ef]=this.appCheckToken),wI(n,TI,c))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new XL(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(lV)),VL(()=>{if(this.isClosed_)return;this.scriptTagHolder=new qd((...i)=>{const[o,a,c,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===j_)this.id=a,this.password=c;else if(o===JL)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[j_]="t",s[RI]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[tV]=this.scriptTagHolder.uniqueCallbackIdentifier),s[dI]=jd,this.transportSessionId&&(s[pI]=this.transportSessionId),this.lastSessionId&&(s[yI]=this.lastSessionId),this.applicationId&&(s[vI]=this.applicationId),this.appCheckToken&&(s[Ef]=this.appCheckToken),typeof location<"u"&&location.hostname&&_I.test(location.hostname)&&(s[gI]=mI);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Zr.forceAllow_=!0}static forceDisallow(){Zr.forceDisallow_=!0}static isAvailable(){return Zr.forceAllow_?!0:!Zr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!UL()&&!BL()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=TE(n),r=hI(s,oV);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[iV]="t",s[II]=e,s[bI]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=yt(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class qd{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=xL(),window[ZL+this.uniqueCallbackIdentifier]=e,window[eV+this.uniqueCallbackIdentifier]=n,this.myIFrame=qd.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){kt("frame writing exception"),a.stack&&kt(a.stack),kt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||kt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[II]=this.myID,e[bI]=this.myPW,e[RI]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+CI+s.length<=AI;){const o=this.pendingSegs.shift();s=s+"&"+nV+r+"="+o.seg+"&"+sV+r+"="+o.ts+"&"+rV+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(aV)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{kt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const cV=16384,uV=45e3;let uc=null;typeof MozWebSocket<"u"?uc=MozWebSocket:typeof WebSocket<"u"&&(uc=WebSocket);class Nn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ya(this.connId),this.stats_=Wd(n),this.connURL=Nn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[dI]=jd,typeof location<"u"&&location.hostname&&_I.test(location.hostname)&&(o[gI]=mI),n&&(o[pI]=n),s&&(o[yI]=s),r&&(o[Ef]=r),i&&(o[vI]=i),wI(e,EI,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fr.set("previous_websocket_failure",!0);try{let s;RE(),this.mySock=new uc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Nn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&uc!==null&&!Nn.forceDisallow_}static previouslyFailed(){return fr.isInMemoryStorage||fr.get("previous_websocket_failure")===!0}markConnectionHealthy(){fr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$o(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Y(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=yt(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=hI(n,cV);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(uV))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Nn.responsesRequiredToBeHealthy=2;Nn.healthyTimeout=3e4;/**
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
 */class Zo{static get ALL_TRANSPORTS(){return[Zr,Nn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Nn.isAvailable();let s=n&&!Nn.previouslyFailed();if(e.webSocketOnly&&(n||Yt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Nn];else{const r=this.transports_=[];for(const i of Zo.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Zo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Zo.globalTransportInitialized_=!1;/**
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
 */const hV=6e4,fV=5e3,dV=10*1024,pV=100*1024,sh="t",W_="d",gV="s",q_="r",mV="e",K_="o",z_="a",G_="n",Q_="p",_V="h";class yV{constructor(e,n,s,r,i,o,a,c,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ya("c:"+this.id+":"),this.transportManager_=new Zo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=ko(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>pV?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dV?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sh in e){const n=e[sh];n===z_?this.upgradeIfSecondaryHealthy_():n===q_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===K_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=io("t",e),s=io("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Q_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:z_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:G_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=io("t",e),s=io("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=io(sh,e);if(W_ in e){const s=e[W_];if(n===_V){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===G_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===gV?this.onConnectionShutdown_(s):n===q_?this.onReset_(s):n===mV?vf("Server Error: "+s):n===K_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vf("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jd!==s&&Yt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),ko(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(hV))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ko(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(fV))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Q_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class SI{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class PI{constructor(e){this.allowedEvents_=e,this.listeners_={},Y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){Y(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class hc extends PI{static getInstance(){return new hc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Zf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Y_=32,X_=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new We("")}function Re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qs(t){return t.pieces_.length-t.pieceNum_}function je(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function kI(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function vV(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function NI(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function OI(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function dt(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new We(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function nn(t,e){const n=Re(t),s=Re(e);if(n===null)return e;if(n===s)return nn(je(t),je(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function DI(t,e){if(qs(t)!==qs(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function gn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(qs(t)>qs(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class EV{constructor(e,n){this.errorPrefix_=n,this.parts_=NI(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Vc(this.parts_[s]);xI(this)}}function TV(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Vc(e),xI(t)}function wV(t){const e=t.parts_.pop();t.byteLength_-=Vc(e),t.parts_.length>0&&(t.byteLength_-=1)}function xI(t){if(t.byteLength_>X_)throw new Error(t.errorPrefix_+"has a key path longer than "+X_+" bytes ("+t.byteLength_+").");if(t.parts_.length>Y_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Y_+") or object contains a cycle "+lr(t))}function lr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Kd extends PI{static getInstance(){return new Kd}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const oo=1e3,IV=60*5*1e3,J_=30*1e3,bV=1.3,RV=3e4,AV="server_kill",Z_=3;class as extends SI{constructor(e,n,s,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=as.nextPersistentConnectionId_++,this.log_=ya("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oo,this.maxReconnectDelay_=IV,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c&&!RE())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Kd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&hc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(yt(i)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new Ho,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,u=a.s;as.warnOnListenWarnings_(c,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,c))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ps(e,"w")){const s=yi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Yt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_S(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=J_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=mS(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+yt(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vf("Unrecognized action received from server: "+yt(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>RV&&(this.reconnectDelay_=oo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bV)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+as.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,s())},u=function(f){Y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?kt("getToken() completed but was canceled"):(kt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new yV(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Yt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(AV)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&Yt(f),c())}}}interrupt(e){kt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){kt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lh(this.interruptReasons_)&&(this.reconnectDelay_=oo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>$d(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new We(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){kt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Z_&&(this.reconnectDelay_=J_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){kt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Z_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+aI.replace(/\./g,"-")]=1,Zf()?e["framework.cordova"]=1:bE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=hc.getInstance().currentlyOnline();return Lh(this.interruptReasons_)&&e}}as.nextPersistentConnectionId_=0;as.nextConnectionId_=0;/**
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
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
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
 */class su{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ae(Pi,e),r=new Ae(Pi,n);return this.compare(s,r)!==0}minPost(){return Ae.MIN}}/**
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
 */let sl;class MI extends su{static get __EMPTY_NODE(){return sl}static set __EMPTY_NODE(e){sl=e}compare(e,n){return Bi(e.name,n.name)}isDefinedOn(e){throw Oi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Rr,sl)}makePost(e,n){return Y(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,sl)}toString(){return".key"}}const di=new MI;/**
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
 */class rl{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ht.RED,this.left=r??Wt.EMPTY_NODE,this.right=i??Wt.EMPTY_NODE}copy(e,n,s,r,i){return new ht(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Wt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Wt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class CV{copy(e,n,s,r,i){return this}insert(e,n,s){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Wt{constructor(e,n=Wt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Wt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new Wt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new rl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new rl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new rl(this.root_,null,this.comparator_,!0,e)}}Wt.EMPTY_NODE=new CV;/**
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
 */function SV(t,e){return Bi(t.name,e.name)}function zd(t,e){return Bi(t,e)}/**
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
 */let Tf;function PV(t){Tf=t}const LI=function(t){return typeof t=="number"?"number:"+fI(t):"string:"+t},VI=function(t){if(t.isLeafNode()){const e=t.val();Y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ps(e,".sv"),"Priority must be a string or number.")}else Y(t===Tf||t.isEmpty(),"priority of unexpected type.");Y(t===Tf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ey;class ct{static set __childrenNodeConstructor(e){ey=e}static get __childrenNodeConstructor(){return ey}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),VI(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Re(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Y(s!==".priority"||qs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(je(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+LI(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=fI(this.value_):e+=this.value_,this.lazyHash_=cI(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(Y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=ct.VALUE_TYPE_ORDER.indexOf(n),i=ct.VALUE_TYPE_ORDER.indexOf(s);return Y(r>=0,"Unknown leaf type: "+n),Y(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let FI,UI;function kV(t){FI=t}function NV(t){UI=t}class OV extends su{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Bi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Rr,new ct("[PRIORITY-POST]",UI))}makePost(e,n){const s=FI(e);return new Ae(n,new ct("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ot=new OV;/**
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
 */const DV=Math.log(2);class xV{constructor(e){const n=i=>parseInt(Math.log(i)/DV,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fc=function(t,e,n,s){t.sort(e);const r=function(c,u){const h=u-c;let f,p;if(h===0)return null;if(h===1)return f=t[c],p=n?n(f):f,new ht(p,f.node,ht.BLACK,null,null);{const m=parseInt(h/2,10)+c,I=r(c,m),k=r(m+1,u);return f=t[m],p=n?n(f):f,new ht(p,f.node,ht.BLACK,I,k)}},i=function(c){let u=null,h=null,f=t.length;const p=function(I,k){const N=f-I,x=f;f-=I;const O=r(N+1,x),E=t[N],P=n?n(E):E;m(new ht(P,E.node,k,null,O))},m=function(I){u?(u.left=I,u=I):(h=I,u=I)};for(let I=0;I<c.count;++I){const k=c.nextBitIsOne(),N=Math.pow(2,c.count-(I+1));k?p(N,ht.BLACK):(p(N,ht.BLACK),p(N,ht.RED))}return h},o=new xV(t.length),a=i(o);return new Wt(s||e,a)};/**
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
 */let rh;const ao={};class rs{static get Default(){return Y(Ot,"ChildrenNode.ts has not been loaded"),rh=rh||new rs({".priority":ao},{".priority":Ot}),rh}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=yi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Wt?n:null}hasIndex(e){return ps(this.indexSet_,e.toString())}addIndex(e,n){Y(e!==di,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=fc(s,e.getCompare()):a=ao;const c=e.toString(),u=Object.assign({},this.indexSet_);u[c]=e;const h=Object.assign({},this.indexes_);return h[c]=a,new rs(h,u)}addToIndexes(e,n){const s=Hl(this.indexes_,(r,i)=>{const o=yi(this.indexSet_,i);if(Y(o,"Missing index implementation for "+i),r===ao)if(o.isDefinedOn(e.node)){const a=[],c=n.getIterator(Ae.Wrap);let u=c.getNext();for(;u;)u.name!==e.name&&a.push(u),u=c.getNext();return a.push(e),fc(a,o.getCompare())}else return ao;else{const a=n.get(e.name);let c=r;return a&&(c=c.remove(new Ae(e.name,a))),c.insert(e,e.node)}});return new rs(s,this.indexSet_)}removeFromIndexes(e,n){const s=Hl(this.indexes_,r=>{if(r===ao)return r;{const i=n.get(e.name);return i?r.remove(new Ae(e.name,i)):r}});return new rs(s,this.indexSet_)}}/**
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
 */let lo;class De{static get EMPTY_NODE(){return lo||(lo=new De(new Wt(zd),null,rs.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&VI(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||lo}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?lo:n}}getChild(e){const n=Re(e);return n===null?this:this.getImmediateChild(n).getChild(je(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Y(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ae(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?lo:this.priorityNode_;return new De(r,o,i)}}updateChild(e,n){const s=Re(e);if(s===null)return n;{Y(Re(e)!==".priority"||qs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(je(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ot,(o,a)=>{n[o]=a.val(e),s++,i&&De.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+LI(this.getPriority().val())+":"),this.forEachChild(Ot,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":cI(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ea?-1:0}withIndex(e){if(e===di||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===di||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ot),r=n.getIterator(Ot);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===di?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class MV extends De{constructor(){super(new Wt(zd),De.EMPTY_NODE,rs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const Ea=new MV;Object.defineProperties(Ae,{MIN:{value:new Ae(Pi,De.EMPTY_NODE)},MAX:{value:new Ae(Rr,Ea)}});MI.__EMPTY_NODE=De.EMPTY_NODE;ct.__childrenNodeConstructor=De;PV(Ea);NV(Ea);/**
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
 */const LV=!0;function Nt(t,e=null){if(t===null)return De.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,Nt(e))}if(!(t instanceof Array)&&LV){const n=[];let s=!1;if(ln(t,(o,a)=>{if(o.substring(0,1)!=="."){const c=Nt(a);c.isEmpty()||(s=s||!c.getPriority().isEmpty(),n.push(new Ae(o,c)))}}),n.length===0)return De.EMPTY_NODE;const i=fc(n,SV,o=>o.name,zd);if(s){const o=fc(n,Ot.getCompare());return new De(i,Nt(e),new rs({".priority":o},{".priority":Ot}))}else return new De(i,Nt(e),rs.Default)}else{let n=De.EMPTY_NODE;return ln(t,(s,r)=>{if(ps(t,s)&&s.substring(0,1)!=="."){const i=Nt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(Nt(e))}}kV(Nt);/**
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
 */class VV extends su{constructor(e){super(),this.indexPath_=e,Y(!Ie(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Bi(e.name,n.name):i}makePost(e,n){const s=Nt(e),r=De.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ae(n,r)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,Ea);return new Ae(Rr,e)}toString(){return NI(this.indexPath_,0).join("/")}}/**
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
 */class FV extends su{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Bi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const s=Nt(e);return new Ae(n,s)}toString(){return".value"}}const UV=new FV;/**
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
 */function BV(t){return{type:"value",snapshotNode:t}}function HV(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function $V(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ty(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function jV(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Gd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Pi}hasEnd(){return this.endSet_}getIndexEndValue(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ot}copy(){const e=new Gd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function ny(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ot?n="$priority":t.index_===UV?n="$value":t.index_===di?n="$key":(Y(t.index_ instanceof VV,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=yt(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=yt(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+yt(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=yt(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+yt(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function sy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ot&&(e.i=t.index_.toString()),e}/**
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
 */class dc extends SI{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=ya("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=dc.getListenId_(e,s),a={};this.listens_[o]=a;const c=ny(e._queryParams);this.restRequest_(i+".json",c,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),yi(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,n){const s=dc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=ny(e._queryParams),s=e._path.toString(),r=new Ho;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+xi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=$o(a.responseText)}catch{Yt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,c)}else a.status!==401&&a.status!==404&&Yt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class WV{constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function pc(){return{value:null,children:new Map}}function BI(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Re(e);t.children.has(s)||t.children.set(s,pc());const r=t.children.get(s);e=je(e),BI(r,e,n)}}function wf(t,e,n){t.value!==null?n(e,t.value):qV(t,(s,r)=>{const i=new We(e.toString()+"/"+s);wf(r,i,n)})}function qV(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class KV{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ln(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const ry=10*1e3,zV=30*1e3,GV=5*60*1e3;class QV{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new KV(e);const s=ry+(zV-ry)*Math.random();ko(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;ln(e,(r,i)=>{i>0&&ps(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),ko(this.reportStats_.bind(this),Math.floor(Math.random()*2*GV))}}/**
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
 */var On;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(On||(On={}));function HI(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function $I(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function jI(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class gc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=On.ACK_USER_WRITE,this.source=HI()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new gc(Le(),n,this.revert)}}else return Y(Re(this.path)===e,"operationForChild called for unrelated child."),new gc(je(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ar{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=On.OVERWRITE}operationForChild(e){return Ie(this.path)?new Ar(this.source,Le(),this.snap.getImmediateChild(e)):new Ar(this.source,je(this.path),this.snap)}}/**
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
 */class ea{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=On.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new Ar(this.source,Le(),n.value):new ea(this.source,Le(),n)}else return Y(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ea(this.source,je(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Qd{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function YV(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(jV(o.childName,o.snapshotNode))}),co(t,r,"child_removed",e,s,n),co(t,r,"child_added",e,s,n),co(t,r,"child_moved",i,s,n),co(t,r,"child_changed",e,s,n),co(t,r,"value",e,s,n),r}function co(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,c)=>JV(t,a,c)),o.forEach(a=>{const c=XV(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(c,t.query_))})})}function XV(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function JV(t,e,n){if(e.childName==null||n.childName==null)throw Oi("Should only compare child_ events.");const s=new Ae(e.childName,e.snapshotNode),r=new Ae(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function WI(t,e){return{eventCache:t,serverCache:e}}function No(t,e,n,s){return WI(new Qd(e,n,s),t.serverCache)}function qI(t,e,n,s){return WI(t.eventCache,new Qd(e,n,s))}function If(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Cr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ih;const ZV=()=>(ih||(ih=new Wt(FL)),ih);class $e{static fromObject(e){let n=new $e(null);return ln(e,(s,r)=>{n=n.set(new We(s),r)}),n}constructor(e,n=ZV()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(Ie(e))return null;{const s=Re(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(je(e),n);return i!=null?{path:dt(new We(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Re(e),s=this.children.get(n);return s!==null?s.subtree(je(e)):new $e(null)}}set(e,n){if(Ie(e))return new $e(n,this.children);{const s=Re(e),i=(this.children.get(s)||new $e(null)).set(je(e),n),o=this.children.insert(s,i);return new $e(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new $e(null):new $e(null,this.children);{const n=Re(e),s=this.children.get(n);if(s){const r=s.remove(je(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new $e(null):new $e(this.value,i)}else return this}}get(e){if(Ie(e))return this.value;{const n=Re(e),s=this.children.get(n);return s?s.get(je(e)):null}}setTree(e,n){if(Ie(e))return n;{const s=Re(e),i=(this.children.get(s)||new $e(null)).setTree(je(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new $e(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(dt(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ie(e))return null;{const i=Re(e),o=this.children.get(i);return o?o.findOnPath_(je(e),dt(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,s){if(Ie(e))return this;{this.value&&s(n,this.value);const r=Re(e),i=this.children.get(r);return i?i.foreachOnPath_(je(e),dt(n,r),s):new $e(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(dt(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class En{constructor(e){this.writeTree_=e}static empty(){return new En(new $e(null))}}function Oo(t,e,n){if(Ie(e))return new En(new $e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=nn(r,e);return i=i.updateChild(o,n),new En(t.writeTree_.set(r,i))}else{const r=new $e(n),i=t.writeTree_.setTree(e,r);return new En(i)}}}function iy(t,e,n){let s=t;return ln(n,(r,i)=>{s=Oo(s,dt(e,r),i)}),s}function oy(t,e){if(Ie(e))return En.empty();{const n=t.writeTree_.setTree(e,new $e(null));return new En(n)}}function bf(t,e){return xr(t,e)!=null}function xr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(nn(n.path,e)):null}function ay(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ot,(s,r)=>{e.push(new Ae(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ae(s,r.value))}),e}function Fs(t,e){if(Ie(e))return t;{const n=xr(t,e);return n!=null?new En(new $e(n)):new En(t.writeTree_.subtree(e))}}function Rf(t){return t.writeTree_.isEmpty()}function ki(t,e){return KI(Le(),t.writeTree_,e)}function KI(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(Y(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=KI(dt(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(dt(t,".priority"),s)),n}}/**
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
 */function zI(t,e){return JI(e,t)}function eF(t,e,n,s,r){Y(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=Oo(t.visibleWrites,e,n)),t.lastWriteId=s}function tF(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function nF(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Y(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&sF(a,s.path)?r=!1:gn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return rF(t),!0;if(s.snap)t.visibleWrites=oy(t.visibleWrites,s.path);else{const a=s.children;ln(a,c=>{t.visibleWrites=oy(t.visibleWrites,dt(s.path,c))})}return!0}else return!1}function sF(t,e){if(t.snap)return gn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&gn(dt(t.path,n),e))return!0;return!1}function rF(t){t.visibleWrites=GI(t.allWrites,iF,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function iF(t){return t.visible}function GI(t,e,n){let s=En.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)gn(n,o)?(a=nn(n,o),s=Oo(s,a,i.snap)):gn(o,n)&&(a=nn(o,n),s=Oo(s,Le(),i.snap.getChild(a)));else if(i.children){if(gn(n,o))a=nn(n,o),s=iy(s,a,i.children);else if(gn(o,n))if(a=nn(o,n),Ie(a))s=iy(s,Le(),i.children);else{const c=yi(i.children,Re(a));if(c){const u=c.getChild(je(a));s=Oo(s,Le(),u)}}}else throw Oi("WriteRecord should have .snap or .children")}}return s}function QI(t,e,n,s,r){if(!s&&!r){const i=xr(t.visibleWrites,e);if(i!=null)return i;{const o=Fs(t.visibleWrites,e);if(Rf(o))return n;if(n==null&&!bf(o,Le()))return null;{const a=n||De.EMPTY_NODE;return ki(o,a)}}}else{const i=Fs(t.visibleWrites,e);if(!r&&Rf(i))return n;if(!r&&n==null&&!bf(i,Le()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(gn(u.path,e)||gn(e,u.path))},a=GI(t.allWrites,o,e),c=n||De.EMPTY_NODE;return ki(a,c)}}}function oF(t,e,n){let s=De.EMPTY_NODE;const r=xr(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ot,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Fs(t.visibleWrites,e);return n.forEachChild(Ot,(o,a)=>{const c=ki(Fs(i,new We(o)),a);s=s.updateImmediateChild(o,c)}),ay(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Fs(t.visibleWrites,e);return ay(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function aF(t,e,n,s,r){Y(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=dt(e,n);if(bf(t.visibleWrites,i))return null;{const o=Fs(t.visibleWrites,i);return Rf(o)?r.getChild(n):ki(o,r.getChild(n))}}function lF(t,e,n,s){const r=dt(e,n),i=xr(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Fs(t.visibleWrites,r);return ki(o,s.getNode().getImmediateChild(n))}else return null}function cF(t,e){return xr(t.visibleWrites,e)}function uF(t,e,n,s,r,i,o){let a;const c=Fs(t.visibleWrites,e),u=xr(c,Le());if(u!=null)a=u;else if(n!=null)a=ki(c,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=p.getNext();for(;m&&h.length<r;)f(m,s)!==0&&h.push(m),m=p.getNext();return h}else return[]}function hF(){return{visibleWrites:En.empty(),allWrites:[],lastWriteId:-1}}function Af(t,e,n,s){return QI(t.writeTree,t.treePath,e,n,s)}function YI(t,e){return oF(t.writeTree,t.treePath,e)}function ly(t,e,n,s){return aF(t.writeTree,t.treePath,e,n,s)}function mc(t,e){return cF(t.writeTree,dt(t.treePath,e))}function fF(t,e,n,s,r,i){return uF(t.writeTree,t.treePath,e,n,s,r,i)}function Yd(t,e,n){return lF(t.writeTree,t.treePath,e,n)}function XI(t,e){return JI(dt(t.treePath,e),t.writeTree)}function JI(t,e){return{treePath:t,writeTree:e}}/**
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
 */class dF{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Y(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Y(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,ty(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,$V(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,HV(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,ty(s,e.snapshotNode,r.oldSnap));else throw Oi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class pF{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ZI=new pF;class Xd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Qd(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Cr(this.viewCache_),i=fF(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function gF(t,e){Y(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Y(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mF(t,e,n,s,r){const i=new dF;let o,a;if(n.type===On.OVERWRITE){const u=n;u.source.fromUser?o=Cf(t,e,u.path,u.snap,s,r,i):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=_c(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===On.MERGE){const u=n;u.source.fromUser?o=yF(t,e,u.path,u.children,s,r,i):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Sf(t,e,u.path,u.children,s,r,a,i))}else if(n.type===On.ACK_USER_WRITE){const u=n;u.revert?o=TF(t,e,u.path,s,r,i):o=vF(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===On.LISTEN_COMPLETE)o=EF(t,e,n.path,s,i);else throw Oi("Unknown operation type: "+n.type);const c=i.getChanges();return _F(e,o,c),{viewCache:o,changes:c}}function _F(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=If(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push(BV(If(e)))}}function e0(t,e,n,s,r,i){const o=e.eventCache;if(mc(s,n)!=null)return e;{let a,c;if(Ie(n))if(Y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Cr(e),h=u instanceof De?u:De.EMPTY_NODE,f=YI(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Af(s,Cr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Re(n);if(u===".priority"){Y(qs(n)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=ly(s,n,h,c);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=je(n);let f;if(o.isCompleteForChild(u)){c=e.serverCache.getNode();const p=ly(s,n,o.getNode(),c);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=Yd(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return No(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function _c(t,e,n,s,r,i,o,a){const c=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(c.getNode(),s,null);else if(h.filtersNodes()&&!c.isFiltered()){const m=c.getNode().updateChild(n,s);u=h.updateFullNode(c.getNode(),m,null)}else{const m=Re(n);if(!c.isCompleteForPath(n)&&qs(n)>1)return e;const I=je(n),N=c.getNode().getImmediateChild(m).updateChild(I,s);m===".priority"?u=h.updatePriority(c.getNode(),N):u=h.updateChild(c.getNode(),m,N,I,ZI,null)}const f=qI(e,u,c.isFullyInitialized()||Ie(n),h.filtersNodes()),p=new Xd(r,f,i);return e0(t,f,n,r,p,a)}function Cf(t,e,n,s,r,i,o){const a=e.eventCache;let c,u;const h=new Xd(r,e,i);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),c=No(e,u,!0,t.filter.filtersNodes());else{const f=Re(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),c=No(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=je(n),m=a.getNode().getImmediateChild(f);let I;if(Ie(p))I=s;else{const k=h.getCompleteChild(f);k!=null?kI(p)===".priority"&&k.getChild(OI(p)).isEmpty()?I=k:I=k.updateChild(p,s):I=De.EMPTY_NODE}if(m.equals(I))c=e;else{const k=t.filter.updateChild(a.getNode(),f,I,p,h,o);c=No(e,k,a.isFullyInitialized(),t.filter.filtersNodes())}}}return c}function cy(t,e){return t.eventCache.isCompleteForChild(e)}function yF(t,e,n,s,r,i,o){let a=e;return s.foreach((c,u)=>{const h=dt(n,c);cy(e,Re(h))&&(a=Cf(t,a,h,u,r,i,o))}),s.foreach((c,u)=>{const h=dt(n,c);cy(e,Re(h))||(a=Cf(t,a,h,u,r,i,o))}),a}function uy(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Sf(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,u;Ie(n)?u=s:u=new $e(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),I=uy(t,m,p);c=_c(t,c,new We(f),I,r,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!m){const I=e.serverCache.getNode().getImmediateChild(f),k=uy(t,I,p);c=_c(t,c,new We(f),k,r,i,o,a)}}),c}function vF(t,e,n,s,r,i,o){if(mc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(s.value!=null){if(Ie(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _c(t,e,n,c.getNode().getChild(n),r,i,a,o);if(Ie(n)){let u=new $e(null);return c.getNode().forEachChild(di,(h,f)=>{u=u.set(new We(h),f)}),Sf(t,e,n,u,r,i,a,o)}else return e}else{let u=new $e(null);return s.foreach((h,f)=>{const p=dt(n,h);c.isCompleteForPath(p)&&(u=u.set(h,c.getNode().getChild(p)))}),Sf(t,e,n,u,r,i,a,o)}}function EF(t,e,n,s,r){const i=e.serverCache,o=qI(e,i.getNode(),i.isFullyInitialized()||Ie(n),i.isFiltered());return e0(t,o,n,s,ZI,r)}function TF(t,e,n,s,r,i){let o;if(mc(s,n)!=null)return e;{const a=new Xd(s,e,r),c=e.eventCache.getNode();let u;if(Ie(n)||Re(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Af(s,Cr(e));else{const f=e.serverCache.getNode();Y(f instanceof De,"serverChildren would be complete if leaf node"),h=YI(s,f)}h=h,u=t.filter.updateFullNode(c,h,i)}else{const h=Re(n);let f=Yd(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?u=t.filter.updateChild(c,h,f,je(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(c,h,De.EMPTY_NODE,je(n),a,i):u=c,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Af(s,Cr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||mc(s,Le())!=null,No(e,u,o,t.filter.filtersNodes())}}function wF(t,e){const n=Cr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Re(e)).isEmpty())?n.getChild(e):null}function hy(t,e,n,s){e.type===On.MERGE&&e.source.queryId!==null&&(Y(Cr(t.viewCache_),"We should always have a full cache before handling merges"),Y(If(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=mF(t.processor_,r,e,n,s);return gF(t.processor_,i.viewCache),Y(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,IF(t,i.changes,i.viewCache.eventCache.getNode())}function IF(t,e,n,s){const r=t.eventRegistrations_;return YV(t.eventGenerator_,e,n,r)}/**
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
 */let fy;function bF(t){Y(!fy,"__referenceConstructor has already been defined"),fy=t}function Jd(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return Y(i!=null,"SyncTree gave us an op for an invalid query."),hy(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(hy(o,e,n,s));return i}}function Zd(t,e){let n=null;for(const s of t.views.values())n=n||wF(s,e);return n}/**
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
 */let dy;function RF(t){Y(!dy,"__referenceConstructor has already been defined"),dy=t}class py{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $e(null),this.pendingWriteTree_=hF(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function AF(t,e,n,s,r){return eF(t.pendingWriteTree_,e,n,s,r),r?iu(t,new Ar(HI(),e,n)):[]}function ei(t,e,n=!1){const s=tF(t.pendingWriteTree_,e);if(nF(t.pendingWriteTree_,e)){let i=new $e(null);return s.snap!=null?i=i.set(Le(),!0):ln(s.children,o=>{i=i.set(new We(o),!0)}),iu(t,new gc(s.path,i,n))}else return[]}function ru(t,e,n){return iu(t,new Ar($I(),e,n))}function CF(t,e,n){const s=$e.fromObject(n);return iu(t,new ea($I(),e,s))}function SF(t,e,n,s){const r=r0(t,s);if(r!=null){const i=i0(r),o=i.path,a=i.queryId,c=nn(o,e),u=new Ar(jI(a),c,n);return o0(t,o,u)}else return[]}function PF(t,e,n,s){const r=r0(t,s);if(r){const i=i0(r),o=i.path,a=i.queryId,c=nn(o,e),u=$e.fromObject(n),h=new ea(jI(a),c,u);return o0(t,o,h)}else return[]}function t0(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const c=nn(o,e),u=Zd(a,c);if(u)return u});return QI(r,e,i,n,!0)}function iu(t,e){return n0(e,t.syncPointTree_,null,zI(t.pendingWriteTree_,Le()))}function n0(t,e,n,s){if(Ie(t.path))return s0(t,e,n,s);{const r=e.get(Le());n==null&&r!=null&&(n=Zd(r,Le()));let i=[];const o=Re(t.path),a=t.operationForChild(o),c=e.children.get(o);if(c&&a){const u=n?n.getImmediateChild(o):null,h=XI(s,o);i=i.concat(n0(a,c,u,h))}return r&&(i=i.concat(Jd(r,t,s,n))),i}}function s0(t,e,n,s){const r=e.get(Le());n==null&&r!=null&&(n=Zd(r,Le()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=n?n.getImmediateChild(o):null,u=XI(s,o),h=t.operationForChild(o);h&&(i=i.concat(s0(h,a,c,u)))}),r&&(i=i.concat(Jd(r,t,s,n))),i}function r0(t,e){return t.tagToQueryMap.get(e)}function i0(t){const e=t.indexOf("$");return Y(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function o0(t,e,n){const s=t.syncPointTree_.get(e);Y(s,"Missing sync point for query tag that we're tracking");const r=zI(t.pendingWriteTree_,e);return Jd(s,n,r,null)}/**
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
 */class ep{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new ep(n)}node(){return this.node_}}class tp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=dt(this.path_,e);return new tp(this.syncTree_,n)}node(){return t0(this.syncTree_,this.path_)}}const kF=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},gy=function(t,e,n){if(!t||typeof t!="object")return t;if(Y(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NF(t[".sv"],e,n);if(typeof t[".sv"]=="object")return OF(t[".sv"],e);Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NF=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Y(!1,"Unexpected server value: "+t)}},OF=function(t,e,n){t.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Y(!1,"Unexpected increment value: "+s);const r=e.node();if(Y(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},DF=function(t,e,n,s){return np(e,new tp(n,t),s)},xF=function(t,e,n){return np(t,new ep(e),n)};function np(t,e,n){const s=t.getPriority().val(),r=gy(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=gy(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ct(a,Nt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new ct(r))),o.forEachChild(Ot,(a,c)=>{const u=np(c,e.getImmediateChild(a),n);u!==c&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class sp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function rp(t,e){let n=e instanceof We?e:new We(e),s=t,r=Re(n);for(;r!==null;){const i=yi(s.node.children,r)||{children:{},childCount:0};s=new sp(r,s,i),n=je(n),r=Re(n)}return s}function Hi(t){return t.node.value}function a0(t,e){t.node.value=e,Pf(t)}function l0(t){return t.node.childCount>0}function MF(t){return Hi(t)===void 0&&!l0(t)}function ou(t,e){ln(t.node.children,(n,s)=>{e(new sp(n,t,s))})}function c0(t,e,n,s){n&&!s&&e(t),ou(t,r=>{c0(r,e,!0,s)})}function LF(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ta(t){return new We(t.parent===null?t.name:Ta(t.parent)+"/"+t.name)}function Pf(t){t.parent!==null&&VF(t.parent,t.name,t)}function VF(t,e,n){const s=MF(n),r=ps(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Pf(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Pf(t))}/**
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
 */const FF=/[\[\].#$\/\u0000-\u001F\u007F]/,UF=/[\[\].#$\u0000-\u001F\u007F]/,oh=10*1024*1024,u0=function(t){return typeof t=="string"&&t.length!==0&&!FF.test(t)},BF=function(t){return typeof t=="string"&&t.length!==0&&!UF.test(t)},HF=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),BF(t)},h0=function(t,e,n){const s=n instanceof We?new EV(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+lr(s));if(typeof e=="function")throw new Error(t+"contains a function "+lr(s)+" with contents = "+e.toString());if(uI(e))throw new Error(t+"contains "+e.toString()+" "+lr(s));if(typeof e=="string"&&e.length>oh/3&&Vc(e)>oh)throw new Error(t+"contains a string greater than "+oh+" utf8 bytes "+lr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(ln(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!u0(o)))throw new Error(t+" contains an invalid key ("+o+") "+lr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);TV(s,o),h0(t,a,s),wV(s)}),r&&i)throw new Error(t+' contains ".value" child '+lr(s)+" in addition to actual children.")}},$F=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!u0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!HF(n))throw new Error(wS(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class jF{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function WF(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!DI(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Mr(t,e,n){WF(t,n),qF(t,s=>gn(s,e)||gn(e,s))}function qF(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(KF(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function KF(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Po&&kt("event: "+n.toString()),va(s)}}}/**
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
 */const zF="repo_interrupt",GF=25;class QF{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new jF,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=pc(),this.transactionQueueTree_=new sp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function YF(t,e,n){if(t.stats_=Wd(t.repoInfo_),t.forceRestClient_||WL())t.server_=new dc(t.repoInfo_,(s,r,i,o)=>{my(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>_y(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{yt(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new as(t.repoInfo_,e,(s,r,i,o)=>{my(t,s,r,i,o)},s=>{_y(t,s)},s=>{JF(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=YL(t.repoInfo_,()=>new QV(t.stats_,t.server_)),t.infoData_=new WV,t.infoSyncTree_=new py({startListening:(s,r,i,o)=>{let a=[];const c=t.infoData_.getNode(s._path);return c.isEmpty()||(a=ru(t.infoSyncTree_,s._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ip(t,"connected",!1),t.serverSyncTree_=new py({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,c)=>{const u=o(a,c);Mr(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function XF(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function f0(t){return kF({timestamp:XF(t)})}function my(t,e,n,s,r){t.dataUpdateCount++;const i=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const c=Hl(n,u=>Nt(u));o=PF(t.serverSyncTree_,i,c,r)}else{const c=Nt(n);o=SF(t.serverSyncTree_,i,c,r)}else if(s){const c=Hl(n,u=>Nt(u));o=CF(t.serverSyncTree_,i,c)}else{const c=Nt(n);o=ru(t.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=ap(t,i)),Mr(t.eventQueue_,a,o)}function _y(t,e){ip(t,"connected",e),e===!1&&eU(t)}function JF(t,e){ln(e,(n,s)=>{ip(t,n,s)})}function ip(t,e,n){const s=new We("/.info/"+e),r=Nt(n);t.infoData_.updateSnapshot(s,r);const i=ru(t.infoSyncTree_,s,r);Mr(t.eventQueue_,s,i)}function ZF(t){return t.nextWriteId_++}function eU(t){d0(t,"onDisconnectEvents");const e=f0(t),n=pc();wf(t.onDisconnect_,Le(),(r,i)=>{const o=DF(r,i,t.serverSyncTree_,e);BI(n,r,o)});let s=[];wf(n,Le(),(r,i)=>{s=s.concat(ru(t.serverSyncTree_,r,i));const o=rU(t,r);ap(t,o)}),t.onDisconnect_=pc(),Mr(t.eventQueue_,Le(),s)}function tU(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zF)}function d0(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),kt(n,...e)}function p0(t,e,n){return t0(t.serverSyncTree_,e,n)||De.EMPTY_NODE}function op(t,e=t.transactionQueueTree_){if(e||au(t,e),Hi(e)){const n=m0(t,e);Y(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&nU(t,Ta(e),n)}else l0(e)&&ou(e,n=>{op(t,n)})}function nU(t,e,n){const s=n.map(u=>u.currentWriteId),r=p0(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];Y(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=nn(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;t.server_.put(c.toString(),a,u=>{d0(t,"transaction put response",{path:c.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(ei(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();au(t,rp(t.transactionQueueTree_,e)),op(t,t.transactionQueueTree_),Mr(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)va(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{Yt("transaction at "+c.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}ap(t,e)}},o)}function ap(t,e){const n=g0(t,e),s=Ta(n),r=m0(t,n);return sU(t,r,s),s}function sU(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],u=nn(n,c.path);let h=!1,f;if(Y(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(ei(t.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=GF)h=!0,f="maxretry",r=r.concat(ei(t.serverSyncTree_,c.currentWriteId,!0));else{const p=p0(t,c.path,o);c.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){h0("transaction failed: Data returned ",m,c.path);let I=Nt(m);typeof m=="object"&&m!=null&&ps(m,".priority")||(I=I.updatePriority(p.getPriority()));const N=c.currentWriteId,x=f0(t),O=xF(I,p,x);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=O,c.currentWriteId=ZF(t),o.splice(o.indexOf(N),1),r=r.concat(AF(t.serverSyncTree_,c.path,O,c.currentWriteId,c.applyLocally)),r=r.concat(ei(t.serverSyncTree_,N,!0))}else h=!0,f="nodata",r=r.concat(ei(t.serverSyncTree_,c.currentWriteId,!0))}Mr(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}au(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)va(s[a]);op(t,t.transactionQueueTree_)}function g0(t,e){let n,s=t.transactionQueueTree_;for(n=Re(e);n!==null&&Hi(s)===void 0;)s=rp(s,n),e=je(e),n=Re(e);return s}function m0(t,e){const n=[];return _0(t,e,n),n.sort((s,r)=>s.order-r.order),n}function _0(t,e,n){const s=Hi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);ou(e,r=>{_0(t,r,n)})}function au(t,e){const n=Hi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,a0(e,n.length>0?n:void 0)}ou(e,s=>{au(t,s)})}function rU(t,e){const n=Ta(g0(t,e)),s=rp(t.transactionQueueTree_,e);return LF(s,r=>{ah(t,r)}),ah(t,s),c0(s,r=>{ah(t,r)}),n}function ah(t,e){const n=Hi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Y(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(Y(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ei(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?a0(e,void 0):n.length=i+1,Mr(t.eventQueue_,Ta(e),r);for(let o=0;o<s.length;o++)va(s[o])}}/**
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
 */function iU(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function oU(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Yt(`Invalid query segment '${n}' in query '${t}'`)}return e}const yy=function(t,e){const n=aU(t),s=n.namespace;n.domain==="firebase.com"&&br(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&br("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||LL();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zL(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new We(n.pathString)}},aU=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",c=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=iU(t.substring(h,f)));const p=oU(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const I=e.indexOf(".");s=e.substring(0,I).toLowerCase(),n=e.substring(I+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:c,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ie(this._path)?null:kI(this._path)}get ref(){return new $i(this._repo,this._path)}get _queryIdentifier(){const e=sy(this._queryParams),n=$d(e);return n==="{}"?"default":n}get _queryObject(){return sy(this._queryParams)}isEqual(e){if(e=an(e),!(e instanceof lp))return!1;const n=this._repo===e._repo,s=DI(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+vV(this._path)}}class $i extends lp{constructor(e,n){super(e,n,new Gd,!1)}get parent(){const e=OI(this._path);return e===null?null:new $i(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}bF($i);RF($i);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lU="FIREBASE_DATABASE_EMULATOR_HOST",kf={};let cU=!1;function uU(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||br("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),kt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yy(i,r),a=o.repoInfo,c;typeof process<"u"&&F_&&(c=F_[lU]),c?(i=`http://${c}?ns=${a.namespace}`,o=yy(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new KL(t.name,t.options,e);$F("Invalid Firebase Database URL",o),Ie(o.path)||br("Database URL must point to the root of a Firebase Database (not including a child path).");const h=fU(a,t,u,new qL(t.name,n));return new dU(h,t)}function hU(t,e){const n=kf[e];(!n||n[t.key]!==t)&&br(`Database ${e}(${t.repoInfo_}) has already been deleted.`),tU(t),delete n[t.key]}function fU(t,e,n,s){let r=kf[e.name];r||(r={},kf[e.name]=r);let i=r[t.toURLString()];return i&&br("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new QF(t,cU,n,s),r[t.toURLString()]=i,i}class dU{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(YF(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new $i(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hU(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&br("Cannot call "+e+" on a deleted database.")}}/**
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
 */function pU(t){kL(Ys),Vn(new wn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return uU(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),Qt(U_,B_,t),Qt(U_,B_,"esm2017")}as.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};as.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};pU();/**
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
 */const y0="firebasestorage.googleapis.com",gU="storageBucket",mU=2*60*1e3,_U=10*60*1e3;/**
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
 */class jn extends $n{constructor(e,n,s=0){super(lh(e),`Firebase Storage: ${n} (${lh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,jn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Hn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Hn||(Hn={}));function lh(t){return"storage/"+t}function yU(){const t="An unknown error occurred, please check the error payload for server response.";return new jn(Hn.UNKNOWN,t)}function vU(){return new jn(Hn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function EU(){return new jn(Hn.CANCELED,"User canceled the upload/download.")}function TU(t){return new jn(Hn.INVALID_URL,"Invalid URL '"+t+"'.")}function wU(t){return new jn(Hn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vy(t){return new jn(Hn.INVALID_ARGUMENT,t)}function v0(){return new jn(Hn.APP_DELETED,"The Firebase app was deleted.")}function IU(t){return new jn(Hn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class mn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=mn.makeFromUrl(e,n)}catch{return new mn(e,"")}if(s.path==="")return s;throw wU(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),c={bucket:1,path:3};function u(P){P.path_=decodeURIComponent(P.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${p}`,"i"),I={bucket:1,path:3},k=n===y0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",x=new RegExp(`^https?://${k}/${r}/${N}`,"i"),E=[{regex:a,indices:c,postModify:i},{regex:m,indices:I,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let P=0;P<E.length;P++){const M=E[P],F=M.regex.exec(e);if(F){const b=F[M.indices.bucket];let v=F[M.indices.path];v||(v=""),s=new mn(b,v),M.postModify(s);break}}if(s==null)throw TU(e);return s}}class bU{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function RU(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function c(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function f(N){r=setTimeout(()=>{r=null,t(m,c())},N)}function p(){i&&clearTimeout(i)}function m(N,...x){if(u){p();return}if(N){p(),h.call(null,N,...x);return}if(c()||o){p(),h.call(null,N,...x);return}s<64&&(s*=2);let E;a===1?(a=2,E=0):E=(s+Math.random())*1e3,f(E)}let I=!1;function k(N){I||(I=!0,p(),!u&&(r!==null?(N||(a=2),clearTimeout(r),f(0)):N||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,k(!0)},n),k}function AU(t){t(!1)}/**
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
 */function CU(t){return t!==void 0}function Ey(t,e,n,s){if(s<e)throw vy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw vy(`Invalid value for '${t}'. Expected ${n} or less.`)}function SU(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var yc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(yc||(yc={}));/**
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
 */function PU(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class kU{constructor(e,n,s,r,i,o,a,c,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,I)=>{this.resolve_=m,this.reject_=I,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new il(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===yc.NO_ERROR,c=i.getStatus();if(!a||PU(c,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===yc.ABORT;s(!1,new il(!1,null,h));return}const u=this.successCodes_.indexOf(c)!==-1;s(!0,new il(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());CU(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=yU();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(r.canceled){const c=this.appDelete_?v0():EU();o(c)}else{const c=vU();o(c)}};this.canceled_?n(!1,new il(!1,null,!0)):this.backoffId_=RU(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AU(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class il{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function NU(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OU(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DU(t,e){e&&(t["X-Firebase-GMPID"]=e)}function xU(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MU(t,e,n,s,r,i,o=!0){const a=SU(t.urlParams),c=t.url+a,u=Object.assign({},t.headers);return DU(u,e),NU(u,n),OU(u,i),xU(u,s),new kU(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function LU(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VU(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class vc{constructor(e,n){this._service=e,n instanceof mn?this._location=n:this._location=mn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vc(e,n)}get root(){const e=new mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return VU(this._location.path)}get storage(){return this._service}get parent(){const e=LU(this._location.path);if(e===null)return null;const n=new mn(this._location.bucket,e);return new vc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IU(e)}}function Ty(t,e){const n=e==null?void 0:e[gU];return n==null?null:mn.makeFromBucketSpec(n,t)}class FU{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=y0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mU,this._maxUploadRetryTime=_U,this._requests=new Set,r!=null?this._bucket=mn.makeFromBucketSpec(r,this._host):this._bucket=Ty(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mn.makeFromBucketSpec(this._url,e):this._bucket=Ty(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ey("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ey("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vc(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new bU(v0());{const o=MU(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const wy="@firebase/storage",Iy="0.13.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UU="storage";function BU(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new FU(n,s,r,e,Ys)}function HU(){Vn(new wn(UU,BU,"PUBLIC").setMultipleInstances(!0)),Qt(wy,Iy,""),Qt(wy,Iy,"esm2017")}HU();const cp=Symbol("VueFireAuth");function $U({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=jU(n,s,e,t);PL(r,i)}}function jU(t,e,n,s,r=Vx(t,s)){const i=AL(t,e).run(()=>is(n));return iI.set(t,i),e.provide(cp,r),[i,r]}function F2(t){return RL?Dt(cp):null}function WU(t,{firebaseApp:e,modules:n=[]}){t.provide(sI,e);for(const s of n)s(e,t)}const qU=()=>Je().$firebaseApp,KU=t=>SL(qU().name),zU=async(t,e)=>{let n,s;const r=([n,s]=vr(()=>KU()),n=await n,s(),n);if(r&&t.name==="login")return Qg("/");if(!r&&t.path!=="/login")return Qg({path:"/login",query:{redirect:t.fullPath}})},GU=async t=>{let e,n;const s=([e,n]=vr(()=>Ad({path:t.path})),e=await e,n(),e);if(s.redirect)return Pr(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},QU=[lx,zU,GU],Do={};function YU(t,e,n){const{pathname:s,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Hg(h,"")}const a=Hg(s,t),c=!n||GA(a,n,{trailingSlash:!0})?a:n;return c+(c.includes("?")?"":r)+i}const XU=Xt({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,s=la().app.baseURL;const r=((N=An.history)==null?void 0:N.call(An,s))??bD(s),i=An.routes?([e,n]=vr(()=>An.routes(Ju)),e=await e,n(),e??Ju):Ju;let o;const a=GD({...An,scrollBehavior:(x,O,E)=>{if(O===hn){o=E;return}if(An.scrollBehavior){if(a.options.scrollBehavior=An.scrollBehavior,"scrollRestoration"in window.history){const P=a.beforeEach(()=>{P(),window.history.scrollRestoration="manual"})}return An.scrollBehavior(x,hn,o||E)}},history:r,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const c=Lo(a.currentRoute.value);a.afterEach((x,O)=>{c.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=YU(s,window.location,t.payload.path),h=Lo(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((x,O)=>{var E,P,M,F;((P=(E=x.matched[0])==null?void 0:E.components)==null?void 0:P.default)===((F=(M=O.matched[0])==null?void 0:M.components)==null?void 0:F.default)&&f()});const p={};for(const x in h.value)Object.defineProperty(p,x,{get:()=>h.value[x],enumerable:!0});t._route=Zn(p),t._middleware=t._middleware||{global:[],named:{}};const m=Dc();a.afterEach(async(x,O,E)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(zC),E&&await t.callHook("page:loading:end")});try{[e,n]=vr(()=>a.isReady()),await e,n()}catch(x){[e,n]=vr(()=>t.runWithContext(()=>Jr(x))),await e,n()}const I=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const k=t.payload.state._layout;return a.beforeEach(async(x,O)=>{var E;await t.callHook("page:loading:start"),x.meta=Qs(x.meta),t.isHydrating&&k&&!Us(x.meta.layout)&&(x.meta.layout=k),t._processingMiddleware=!0;{const P=new Set([...QU,...t._middleware.global]);for(const M of x.matched){const F=M.meta.middleware;if(F)for(const b of Pd(F))P.add(b)}{const M=await t.runWithContext(()=>Ad({path:x.path}));if(M.appMiddleware)for(const F in M.appMiddleware)M.appMiddleware[F]?P.add(F):P.delete(F)}for(const M of P){const F=typeof M=="string"?t._middleware.named[M]||await((E=Do[M])==null?void 0:E.call(Do).then(v=>v.default||v)):M;if(!F)throw new Error(`Unknown route middleware: '${M}'.`);const b=await t.runWithContext(()=>F(x,O));if(!t.payload.serverRendered&&t.isHydrating&&(b===!1||b instanceof Error)){const v=b||xh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Jr(v)),!1}if(b!==!0&&(b||b===!1))return b}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(x,O)=>{x.matched.length===0&&await t.runWithContext(()=>Jr(xh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in I&&(I.name=void 0),await a.replace({...I,force:!0}),a.options.scrollBehavior=An.scrollBehavior}catch(x){await t.runWithContext(()=>Jr(x))}}),{provide:{router:a}}}}),by=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),U2=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),up=t=>{const e=Je();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{by(()=>t())}):by(()=>t())},JU=Xt({name:"nuxt:payload",setup(t){on().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const s=await Jm(e.path);s&&Object.assign(t.static.data,s.data)}),up(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:s}=new URL(n,window.location.href);s===window.location.hostname&&await Jm(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Zc,1e3)})}}),ZU=Xt(()=>{const t=on();up(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),e2=Xt(t=>{let e;async function n(){const s=await Zc();e&&clearTimeout(e),e=setTimeout(n,Kg);try{const r=await $fetch(Jf("builds/latest.json")+`?${Date.now()}`);r.id!==s.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}up(()=>{e=setTimeout(n,Kg)})});function t2(t={}){const e=t.path||window.location.pathname;let n={};try{n=xl(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:Je().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const n2=Xt({name:"nuxt:chunk-reload",setup(t){const e=on(),n=la(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)});function r(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Xf(n.app.baseURL,i.fullPath);t2({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((i,o)=>{s.has(i)&&r(o)})}}),s2=Xt({name:"nuxt:global-components"}),ol={},r2=Xt({name:"nuxt:prefetch",setup(t){const e=on();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const s=(r=n==null?void 0:n.meta)==null?void 0:r.layout;s&&typeof ol[s]=="function"&&await ol[s]()})}),t.hooks.hook("link:prefetch",n=>{if(Pr(n))return;const s=e.resolve(n);if(!s)return;const r=s.meta.layout;let i=Pd(s.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Do[o]=="function"&&Do[o]();r&&typeof ol[r]=="function"&&ol[r]()})}}),i2=Xt(()=>({provide:{firebaseApp:NE(la().public.vuefire.config)}})),o2=Xt(t=>{const e=t.$firebaseApp;return $U({initialUser:t.payload.vuefireUser,dependencies:{errorMap:Aw,persistence:[iM,Kx],popupRedirectResolver:zM}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>Dt(cp))}}}),a2=Xt(t=>{const e=t.$firebaseApp;t.vueApp.use(WU,{firebaseApp:e})}),l2=[j1,q1,z1,XU,JU,ZU,e2,n2,s2,r2,i2,o2,a2],c2=ia({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,s={};for(const r in t.route)Object.defineProperty(s,r,{get:()=>e===t.renderKey?t.route[r]:n[r],enumerable:!0});return oi(Oc,Zn(s)),()=>kn(t.vnode,{ref:t.vnodeRef})}}),u2=ia({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const r=Je(),i=is(),o=Dt(Oc,null);let a;s({pageRef:i});const c=Dt(WC,null);let u;const h=r.deferHydration();if(r.isHydrating){const f=r.hooks.hookOnce("app:error",h);on().beforeEach(f)}return t.pageKey&&_r(()=>t.pageKey,(f,p)=>{f!==p&&r.callHook("page:loading:start")}),()=>kn(bw,{name:t.name,route:t.route,...e},{default:f=>{const p=f2(o,f.route,f.Component),m=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(u&&!m)return u;h();return}if(u&&c&&!c.isCurrent(f.route))return u;if(p&&o&&(!c||c!=null&&c.isCurrent(o)))return m?u:null;const I=ff(f,t.pageKey);!r.isHydrating&&!d2(o,f.route,f.Component)&&a===I&&r.callHook("page:loading:end"),a=I;const k=!!(t.transition??f.route.meta.pageTransition??Nh),N=k&&h2([t.transition,f.route.meta.pageTransition,Nh,{onAfterLeave:()=>{r.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),x=t.keepalive??f.route.meta.keepalive??RC;return u=tx(zR,k&&N,ex(x,kn(Fv,{suspensible:!0,onPending:()=>r.callHook("page:start",f.Component),onResolve:()=>{ra(()=>r.callHook("page:finish",f.Component).then(()=>r.callHook("page:loading:end")).finally(h))}},{default:()=>{const O=kn(c2,{key:I||void 0,vnode:n.default?kn(zt,void 0,n.default(f)):f.Component,route:f.route,renderKey:I||void 0,trackRootNodes:k,vnodeRef:i});return x&&(O.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),O}}))).default(),u}})}});function h2(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?Pd(n.onAfterLeave):void 0}));return gE(...e)}function f2(t,e,n){if(!t)return!1;const s=e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((r,i)=>{var o,a,c;return((o=r.components)==null?void 0:o.default)!==((c=(a=t.matched[i])==null?void 0:a.components)==null?void 0:c.default)})||n&&ff({route:e,Component:n})!==ff({route:t,Component:n})}function d2(t,e,n){return t?e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const p2={class:"app"},g2={__name:"app",setup(t){const e=on(),n=CL();return Cc(()=>{_r(n,(s,r)=>{if(r&&!s)return e.replace("login")})}),(s,r)=>{const i=u2;return Pn(),jv("div",p2,[et(i)])}}},m2={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const s=Number(n.statusCode||500),r=s===404,i=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=r?cg(()=>sc(()=>import("./B_uyQa6e.js"),__vite__mapDeps([2,3,4]),import.meta.url)):cg(()=>sc(()=>import("./_Vo3WKBY.js"),__vite__mapDeps([5,3,6]),import.meta.url));return(f,p)=>(Pn(),cr(qe(h),Z0(Kv({statusCode:qe(s),statusMessage:qe(i),description:qe(o),stack:qe(a)})),null,16))}},_2={key:0},Ry={__name:"nuxt-root",setup(t){const e=()=>null,n=Je(),s=n.deferHydration();if(n.isHydrating){const c=n.hooks.hookOnce("app:error",s);on().beforeEach(c)}const r=!1;oi(Oc,_E()),n.hooks.callHookWith(c=>c.map(u=>u()),"vue:setup");const i=Dc(),o=!1;mv((c,u,h)=>{if(n.hooks.callHook("vue:error",c,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),GC(c)&&(c.fatal||c.unhandled))return n.runWithContext(()=>Jr(c)),!1});const a=!1;return(c,u)=>(Pn(),cr(Fv,{onResolve:qe(s)},{default:ov(()=>[qe(o)?(Pn(),jv("div",_2)):qe(i)?(Pn(),cr(qe(m2),{key:1,error:qe(i)},null,8,["error"])):qe(a)?(Pn(),cr(qe(e),{key:2,context:qe(a)},null,8,["context"])):qe(r)?(Pn(),cr(Zb(qe(r)),{key:3})):(Pn(),cr(qe(g2),{key:4}))]),_:1},8,["onResolve"]))}};let Ay;{let t;Ay=async function(){var o,a;if(t)return t;const s=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?yA(Ry):_A(Ry),r=kC({vueApp:s});async function i(c){await r.callHook("app:error",c),r.payload.error=r.payload.error||xc(c)}s.config.errorHandler=i,r.hook("app:suspense:resolve",()=>{s.config.errorHandler===i&&(s.config.errorHandler=void 0)});try{await DC(r,l2)}catch(c){i(c)}try{await r.hooks.callHook("app:created",s),await r.hooks.callHook("app:beforeMount",s),s.mount(CC),await r.hooks.callHook("app:mounted",s),await ra()}catch(c){i(c)}return s},t=Ay().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{ov as A,zv as B,M2 as C,T2 as D,_r as E,Kb as F,qb as G,of as H,kc as I,CL as J,F2 as K,O2 as L,N2 as M,D2 as N,qe as O,w2 as P,R2 as Q,y2 as R,b2 as S,pt as T,I2 as U,zt as V,E2 as W,L2 as X,x2 as Y,V2 as Z,Ss as _,Je as a,up as b,by as c,ia as d,Wf as e,U2 as f,v2 as g,kn as h,dn as i,Pr as j,KC as k,Xf as l,Qg as m,A2 as n,Cc as o,MA as p,la as q,is as r,Yf as s,Pn as t,on as u,jv as v,Sh as w,qv as x,nb as y,et as z};
