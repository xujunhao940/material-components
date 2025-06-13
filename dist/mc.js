(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&l(m)}).observe(document,{childList:!0,subtree:!0});function a(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function l(f){if(f.ep)return;f.ep=!0;const p=a(f);fetch(f.href,p)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lr=globalThis,kn=Lr.ShadowRoot&&(Lr.ShadyCSS===void 0||Lr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,An=Symbol(),gi=new WeakMap;let Mi=class{constructor(r,a,l){if(this._$cssResult$=!0,l!==An)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=a}get styleSheet(){let r=this.o;const a=this.t;if(kn&&r===void 0){const l=a!==void 0&&a.length===1;l&&(r=gi.get(a)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),l&&gi.set(a,r))}return r}toString(){return this.cssText}};const Io=i=>new Mi(typeof i=="string"?i:i+"",void 0,An),mt=(i,...r)=>{const a=i.length===1?i[0]:r.reduce((l,f,p)=>l+(m=>{if(m._$cssResult$===!0)return m.cssText;if(typeof m=="number")return m;throw Error("Value passed to 'css' function must be a 'css' function result: "+m+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(f)+i[p+1],i[0]);return new Mi(a,i,An)},jo=(i,r)=>{if(kn)i.adoptedStyleSheets=r.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of r){const l=document.createElement("style"),f=Lr.litNonce;f!==void 0&&l.setAttribute("nonce",f),l.textContent=a.cssText,i.appendChild(l)}},yi=kn?i=>i:i=>i instanceof CSSStyleSheet?(r=>{let a="";for(const l of r.cssRules)a+=l.cssText;return Io(a)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:zo,defineProperty:Bo,getOwnPropertyDescriptor:Ho,getOwnPropertyNames:qo,getOwnPropertySymbols:Uo,getPrototypeOf:Vo}=Object,yt=globalThis,mi=yt.trustedTypes,Wo=mi?mi.emptyScript:"",gn=yt.reactiveElementPolyfillSupport,fr=(i,r)=>i,Rr={toAttribute(i,r){switch(r){case Boolean:i=i?Wo:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,r){let a=i;switch(r){case Boolean:a=i!==null;break;case Number:a=i===null?null:Number(i);break;case Object:case Array:try{a=JSON.parse(i)}catch{a=null}}return a}},Pn=(i,r)=>!zo(i,r),bi={attribute:!0,type:String,converter:Rr,reflect:!1,useDefault:!1,hasChanged:Pn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),yt.litPropertyMetadata??(yt.litPropertyMetadata=new WeakMap);let Wt=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,a=bi){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(r,a),!a.noAccessor){const l=Symbol(),f=this.getPropertyDescriptor(r,l,a);f!==void 0&&Bo(this.prototype,r,f)}}static getPropertyDescriptor(r,a,l){const{get:f,set:p}=Ho(this.prototype,r)??{get(){return this[a]},set(m){this[a]=m}};return{get:f,set(m){const S=f==null?void 0:f.call(this);p==null||p.call(this,m),this.requestUpdate(r,S,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??bi}static _$Ei(){if(this.hasOwnProperty(fr("elementProperties")))return;const r=Vo(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(fr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(fr("properties"))){const a=this.properties,l=[...qo(a),...Uo(a)];for(const f of l)this.createProperty(f,a[f])}const r=this[Symbol.metadata];if(r!==null){const a=litPropertyMetadata.get(r);if(a!==void 0)for(const[l,f]of a)this.elementProperties.set(l,f)}this._$Eh=new Map;for(const[a,l]of this.elementProperties){const f=this._$Eu(a,l);f!==void 0&&this._$Eh.set(f,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const a=[];if(Array.isArray(r)){const l=new Set(r.flat(1/0).reverse());for(const f of l)a.unshift(yi(f))}else r!==void 0&&a.push(yi(r));return a}static _$Eu(r,a){const l=a.attribute;return l===!1?void 0:typeof l=="string"?l:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var r;this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),(r=this.constructor.l)==null||r.forEach(a=>a(this))}addController(r){var a;(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&((a=r.hostConnected)==null||a.call(r))}removeController(r){var a;(a=this._$EO)==null||a.delete(r)}_$E_(){const r=new Map,a=this.constructor.elementProperties;for(const l of a.keys())this.hasOwnProperty(l)&&(r.set(l,this[l]),delete this[l]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jo(r,this.constructor.elementStyles),r}connectedCallback(){var r;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(a=>{var l;return(l=a.hostConnected)==null?void 0:l.call(a)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$EO)==null||r.forEach(a=>{var l;return(l=a.hostDisconnected)==null?void 0:l.call(a)})}attributeChangedCallback(r,a,l){this._$AK(r,l)}_$ET(r,a){var p;const l=this.constructor.elementProperties.get(r),f=this.constructor._$Eu(r,l);if(f!==void 0&&l.reflect===!0){const m=(((p=l.converter)==null?void 0:p.toAttribute)!==void 0?l.converter:Rr).toAttribute(a,l.type);this._$Em=r,m==null?this.removeAttribute(f):this.setAttribute(f,m),this._$Em=null}}_$AK(r,a){var p,m;const l=this.constructor,f=l._$Eh.get(r);if(f!==void 0&&this._$Em!==f){const S=l.getPropertyOptions(f),A=typeof S.converter=="function"?{fromAttribute:S.converter}:((p=S.converter)==null?void 0:p.fromAttribute)!==void 0?S.converter:Rr;this._$Em=f,this[f]=A.fromAttribute(a,S.type)??((m=this._$Ej)==null?void 0:m.get(f))??null,this._$Em=null}}requestUpdate(r,a,l){var f;if(r!==void 0){const p=this.constructor,m=this[r];if(l??(l=p.getPropertyOptions(r)),!((l.hasChanged??Pn)(m,a)||l.useDefault&&l.reflect&&m===((f=this._$Ej)==null?void 0:f.get(r))&&!this.hasAttribute(p._$Eu(r,l))))return;this.C(r,a,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,a,{useDefault:l,reflect:f,wrapped:p},m){l&&!(this._$Ej??(this._$Ej=new Map)).has(r)&&(this._$Ej.set(r,m??a??this[r]),p!==!0||m!==void 0)||(this._$AL.has(r)||(this.hasUpdated||l||(a=void 0),this._$AL.set(r,a)),f===!0&&this._$Em!==r&&(this._$Eq??(this._$Eq=new Set)).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var l;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[p,m]of this._$Ep)this[p]=m;this._$Ep=void 0}const f=this.constructor.elementProperties;if(f.size>0)for(const[p,m]of f){const{wrapped:S}=m,A=this[p];S!==!0||this._$AL.has(p)||A===void 0||this.C(p,void 0,m,A)}}let r=!1;const a=this._$AL;try{r=this.shouldUpdate(a),r?(this.willUpdate(a),(l=this._$EO)==null||l.forEach(f=>{var p;return(p=f.hostUpdate)==null?void 0:p.call(f)}),this.update(a)):this._$EM()}catch(f){throw r=!1,this._$EM(),f}r&&this._$AE(a)}willUpdate(r){}_$AE(r){var a;(a=this._$EO)==null||a.forEach(l=>{var f;return(f=l.hostUpdated)==null?void 0:f.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(r){}firstUpdated(r){}};Wt.elementStyles=[],Wt.shadowRootOptions={mode:"open"},Wt[fr("elementProperties")]=new Map,Wt[fr("finalized")]=new Map,gn==null||gn({ReactiveElement:Wt}),(yt.reactiveElementVersions??(yt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dr=globalThis,Ir=dr.trustedTypes,vi=Ir?Ir.createPolicy("lit-html",{createHTML:i=>i}):void 0,Ei="$lit$",pt=`lit$${Math.random().toFixed(9).slice(2)}$`,Oi="?"+pt,Go=`<${Oi}>`,Dt=document,gr=()=>Dt.createComment(""),yr=i=>i===null||typeof i!="object"&&typeof i!="function",Sn=Array.isArray,Yo=i=>Sn(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",yn=`[ 	
\f\r]`,lr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,xi=/-->/g,Ci=/>/g,kt=RegExp(`>|${yn}(?:([^\\s"'>=/]+)(${yn}*=${yn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),wi=/'/g,$i=/"/g,Ni=/^(?:script|style|textarea|title)$/i,Xo=i=>(r,...a)=>({_$litType$:i,strings:r,values:a}),Ae=Xo(1),Yt=Symbol.for("lit-noChange"),me=Symbol.for("lit-nothing"),Ti=new WeakMap,At=Dt.createTreeWalker(Dt,129);function Li(i,r){if(!Sn(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return vi!==void 0?vi.createHTML(r):r}const Jo=(i,r)=>{const a=i.length-1,l=[];let f,p=r===2?"<svg>":r===3?"<math>":"",m=lr;for(let S=0;S<a;S++){const A=i[S];let E,O,L=-1,H=0;for(;H<A.length&&(m.lastIndex=H,O=m.exec(A),O!==null);)H=m.lastIndex,m===lr?O[1]==="!--"?m=xi:O[1]!==void 0?m=Ci:O[2]!==void 0?(Ni.test(O[2])&&(f=RegExp("</"+O[2],"g")),m=kt):O[3]!==void 0&&(m=kt):m===kt?O[0]===">"?(m=f??lr,L=-1):O[1]===void 0?L=-2:(L=m.lastIndex-O[2].length,E=O[1],m=O[3]===void 0?kt:O[3]==='"'?$i:wi):m===$i||m===wi?m=kt:m===xi||m===Ci?m=lr:(m=kt,f=void 0);const X=m===kt&&i[S+1].startsWith("/>")?" ":"";p+=m===lr?A+Go:L>=0?(l.push(E),A.slice(0,L)+Ei+A.slice(L)+pt+X):A+pt+(L===-2?S:X)}return[Li(i,p+(i[a]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),l]};class mr{constructor({strings:r,_$litType$:a},l){let f;this.parts=[];let p=0,m=0;const S=r.length-1,A=this.parts,[E,O]=Jo(r,a);if(this.el=mr.createElement(E,l),At.currentNode=this.el.content,a===2||a===3){const L=this.el.content.firstChild;L.replaceWith(...L.childNodes)}for(;(f=At.nextNode())!==null&&A.length<S;){if(f.nodeType===1){if(f.hasAttributes())for(const L of f.getAttributeNames())if(L.endsWith(Ei)){const H=O[m++],X=f.getAttribute(L).split(pt),M=/([.?@])?(.*)/.exec(H);A.push({type:1,index:p,name:M[2],strings:X,ctor:M[1]==="."?Ko:M[1]==="?"?Zo:M[1]==="@"?es:Hr}),f.removeAttribute(L)}else L.startsWith(pt)&&(A.push({type:6,index:p}),f.removeAttribute(L));if(Ni.test(f.tagName)){const L=f.textContent.split(pt),H=L.length-1;if(H>0){f.textContent=Ir?Ir.emptyScript:"";for(let X=0;X<H;X++)f.append(L[X],gr()),At.nextNode(),A.push({type:2,index:++p});f.append(L[H],gr())}}}else if(f.nodeType===8)if(f.data===Oi)A.push({type:2,index:p});else{let L=-1;for(;(L=f.data.indexOf(pt,L+1))!==-1;)A.push({type:7,index:p}),L+=pt.length-1}p++}}static createElement(r,a){const l=Dt.createElement("template");return l.innerHTML=r,l}}function Xt(i,r,a=i,l){var m,S;if(r===Yt)return r;let f=l!==void 0?(m=a._$Co)==null?void 0:m[l]:a._$Cl;const p=yr(r)?void 0:r._$litDirective$;return(f==null?void 0:f.constructor)!==p&&((S=f==null?void 0:f._$AO)==null||S.call(f,!1),p===void 0?f=void 0:(f=new p(i),f._$AT(i,a,l)),l!==void 0?(a._$Co??(a._$Co=[]))[l]=f:a._$Cl=f),f!==void 0&&(r=Xt(i,f._$AS(i,r.values),f,l)),r}class Qo{constructor(r,a){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:a},parts:l}=this._$AD,f=((r==null?void 0:r.creationScope)??Dt).importNode(a,!0);At.currentNode=f;let p=At.nextNode(),m=0,S=0,A=l[0];for(;A!==void 0;){if(m===A.index){let E;A.type===2?E=new xr(p,p.nextSibling,this,r):A.type===1?E=new A.ctor(p,A.name,A.strings,this,r):A.type===6&&(E=new ts(p,this,r)),this._$AV.push(E),A=l[++S]}m!==(A==null?void 0:A.index)&&(p=At.nextNode(),m++)}return At.currentNode=Dt,f}p(r){let a=0;for(const l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(r,l,a),a+=l.strings.length-2):l._$AI(r[a])),a++}}class xr{get _$AU(){var r;return((r=this._$AM)==null?void 0:r._$AU)??this._$Cv}constructor(r,a,l,f){this.type=2,this._$AH=me,this._$AN=void 0,this._$AA=r,this._$AB=a,this._$AM=l,this.options=f,this._$Cv=(f==null?void 0:f.isConnected)??!0}get parentNode(){let r=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(r==null?void 0:r.nodeType)===11&&(r=a.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,a=this){r=Xt(this,r,a),yr(r)?r===me||r==null||r===""?(this._$AH!==me&&this._$AR(),this._$AH=me):r!==this._$AH&&r!==Yt&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):Yo(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==me&&yr(this._$AH)?this._$AA.nextSibling.data=r:this.T(Dt.createTextNode(r)),this._$AH=r}$(r){var p;const{values:a,_$litType$:l}=r,f=typeof l=="number"?this._$AC(r):(l.el===void 0&&(l.el=mr.createElement(Li(l.h,l.h[0]),this.options)),l);if(((p=this._$AH)==null?void 0:p._$AD)===f)this._$AH.p(a);else{const m=new Qo(f,this),S=m.u(this.options);m.p(a),this.T(S),this._$AH=m}}_$AC(r){let a=Ti.get(r.strings);return a===void 0&&Ti.set(r.strings,a=new mr(r)),a}k(r){Sn(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let l,f=0;for(const p of r)f===a.length?a.push(l=new xr(this.O(gr()),this.O(gr()),this,this.options)):l=a[f],l._$AI(p),f++;f<a.length&&(this._$AR(l&&l._$AB.nextSibling,f),a.length=f)}_$AR(r=this._$AA.nextSibling,a){var l;for((l=this._$AP)==null?void 0:l.call(this,!1,!0,a);r&&r!==this._$AB;){const f=r.nextSibling;r.remove(),r=f}}setConnected(r){var a;this._$AM===void 0&&(this._$Cv=r,(a=this._$AP)==null||a.call(this,r))}}class Hr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,a,l,f,p){this.type=1,this._$AH=me,this._$AN=void 0,this.element=r,this.name=a,this._$AM=f,this.options=p,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=me}_$AI(r,a=this,l,f){const p=this.strings;let m=!1;if(p===void 0)r=Xt(this,r,a,0),m=!yr(r)||r!==this._$AH&&r!==Yt,m&&(this._$AH=r);else{const S=r;let A,E;for(r=p[0],A=0;A<p.length-1;A++)E=Xt(this,S[l+A],a,A),E===Yt&&(E=this._$AH[A]),m||(m=!yr(E)||E!==this._$AH[A]),E===me?r=me:r!==me&&(r+=(E??"")+p[A+1]),this._$AH[A]=E}m&&!f&&this.j(r)}j(r){r===me?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class Ko extends Hr{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===me?void 0:r}}class Zo extends Hr{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==me)}}class es extends Hr{constructor(r,a,l,f,p){super(r,a,l,f,p),this.type=5}_$AI(r,a=this){if((r=Xt(this,r,a,0)??me)===Yt)return;const l=this._$AH,f=r===me&&l!==me||r.capture!==l.capture||r.once!==l.once||r.passive!==l.passive,p=r!==me&&(l===me||f);f&&this.element.removeEventListener(this.name,this,l),p&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){var a;typeof this._$AH=="function"?this._$AH.call(((a=this.options)==null?void 0:a.host)??this.element,r):this._$AH.handleEvent(r)}}class ts{constructor(r,a,l){this.element=r,this.type=6,this._$AN=void 0,this._$AM=a,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(r){Xt(this,r)}}const mn=dr.litHtmlPolyfillSupport;mn==null||mn(mr,xr),(dr.litHtmlVersions??(dr.litHtmlVersions=[])).push("3.3.0");const rs=(i,r,a)=>{const l=(a==null?void 0:a.renderBefore)??r;let f=l._$litPart$;if(f===void 0){const p=(a==null?void 0:a.renderBefore)??null;l._$litPart$=f=new xr(r.insertBefore(gr(),p),p,void 0,a??{})}return f._$AI(i),f};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pt=globalThis;let tt=class extends Wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const r=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=r.firstChild),r}update(r){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=rs(a,this.renderRoot,this.renderOptions)}connectedCallback(){var r;super.connectedCallback(),(r=this._$Do)==null||r.setConnected(!0)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this._$Do)==null||r.setConnected(!1)}render(){return Yt}};var _i;tt._$litElement$=!0,tt.finalized=!0,(_i=Pt.litElementHydrateSupport)==null||_i.call(Pt,{LitElement:tt});const bn=Pt.litElementPolyfillSupport;bn==null||bn({LitElement:tt});(Pt.litElementVersions??(Pt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue=i=>(r,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(i,r)}):customElements.define(i,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ns={attribute:!0,type:String,converter:Rr,reflect:!1,hasChanged:Pn},is=(i=ns,r,a)=>{const{kind:l,metadata:f}=a;let p=globalThis.litPropertyMetadata.get(f);if(p===void 0&&globalThis.litPropertyMetadata.set(f,p=new Map),l==="setter"&&((i=Object.create(i)).wrapped=!0),p.set(a.name,i),l==="accessor"){const{name:m}=a;return{set(S){const A=r.get.call(this);r.set.call(this,S),this.requestUpdate(m,A,i)},init(S){return S!==void 0&&this.C(m,void 0,i,S),S}}}if(l==="setter"){const{name:m}=a;return function(S){const A=this[m];r.call(this,S),this.requestUpdate(m,A,i)}}throw Error("Unsupported decorator location: "+l)};function le(i){return(r,a)=>typeof a=="object"?is(i,r,a):((l,f,p)=>{const m=f.hasOwnProperty(p);return f.constructor.createProperty(p,l),m?Object.getOwnPropertyDescriptor(f,p):void 0})(i,r,a)}const os=mt`
    :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
    }

    .button {
        width: 100%;
        transition: 200ms;
        position: relative;
        cursor: pointer;
        min-height: 0;
        height: 40px;
        padding-inline: 12px;
        outline: none;
        border: none;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 200ms;
            padding-inline: 0;
        }

        &[disabled] {
            cursor: default;
        }

        &[size=extraSmall] {
            font-size: 14px;
            height: 32px;
            padding-inline: 12px;
            border-radius: 16px;

            div {
                gap: 4px;
            }

            &[selected] {
                border-radius: 8px;
            }
        }

        &[size=small] {
            font-size: 14px;
            height: 40px;
            padding-inline: 16px;
            border-radius: 20px;

            div {
                gap: 8px;
            }

            &[selected] {
                border-radius: 8px;
            }
        }

        &[size=medium] {
            font-size: 16px;
            height: 56px;
            padding-inline: 24px;
            border-radius: 28px;

            div {
                gap: 8px;
            }

            &[selected] {
                border-radius: 12px;
            }
        }

        &[size=large] {
            font-size: 24px;
            height: 96px;
            padding-inline: 48px;
            border-radius: 48px;

            div {
                gap: 12px;
            }

            &[selected] {
                border-radius: 16px;
            }
        }

        &[size=extraLarge] {
            font-size: 36px;
            height: 136px;
            padding-inline: 64px;
            border-radius: 68px;

            div {
                gap: 16px;
            }

            &[selected] {
                border-radius: 16px;
            }
        }

        &[variant=elevated] {
            background: rgb(var(--md-sys-color-surface-variant));
            color: rgb(var(--md-sys-color-primary));
            box-shadow: var(--md-sys-elevation-level1);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-variant)), rgb(var(--md-sys-color-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level3);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-surface-container-low));
                color: rgb(var(--md-sys-color-primary));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-primary));
                color: rgb(var(--md-sys-color-on-primary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=filled] {
            background: rgb(var(--md-sys-color-primary));
            color: rgb(var(--md-sys-color-on-primary));

            &:hover {
                background: color-mix(in srgb-linear, rgb(var(--md-sys-color-primary)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-surface-container));
                color: rgb(var(--md-sys-color-on-surface-variant));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-primary));
                color: rgb(var(--md-sys-color-on-primary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=tonal] {
            background: rgb(var(--md-sys-color-secondary-container));
            color: rgb(var(--md-sys-color-on-secondary-container));

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-secondary-container)), rgb(var(--md-sys-color-on-secondary-container)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-secondary-container));
                color: rgb(var(--md-sys-color-on-secondary-container));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-secondary));
                color: rgb(var(--md-sys-color-on-secondary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=outlined] {
            border: 1px solid rgb(var(--md-sys-color-outline));
            background: transparent;
            color: rgb(var(--md-sys-color-on-surface-variant));

            &:hover {
                background: rgba(var(--md-sys-color-on-surface-variant), .08);
            }


            &[selected] {
                background: rgb(var(--md-sys-color-inverse-surface));
                color: rgb(var(--md-sys-color-inverse-on-surface));
            }

            &[disabled] {
                background: transparent;
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=standard] {
            background: transparent;
            color: rgb(var(--md-sys-color-primary));

            &:hover {
                background: rgba(var(--md-sys-color-primary), .08);
            }

            &[disabled] {
                background: transparent;
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }
    }
`;var ss=Object.defineProperty,as=Object.getOwnPropertyDescriptor,bt=(i,r,a,l)=>{for(var f=l>1?void 0:l?as(r,a):r,p=i.length-1,m;p>=0;p--)(m=i[p])&&(f=(l?m(r,a,f):m(f))||f);return l&&f&&ss(r,a,f),f};let qe=class extends tt{constructor(){super(...arguments),this.disabled=!1,this.toggle=!1,this.selected=!1,this.flex=!1,this.variant="filled",this.size="small",this.rippleColor={filled:"on-primary",elevated:"primary",tonal:"on-secondary-container",outlined:"on-surface-variant",standard:"on-background"},this.borderRadius={full:{extraSmall:"16px",small:"20px",medium:"28px",large:"48px",extraLarge:"68px"},square:{extraSmall:"8px",small:"8px",medium:"12px",large:"16px",extraLarge:"16px"}}}get buttonElement(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("button")}onToggled(){}onUnToggled(){}clickHandler(){this.toggle&&(this.selected=!this.selected,this.selected&&this.onToggled(),this.selected||this.onUnToggled())}render(){return Ae`
            ${this.flex?Ae`
                <style>:host {
                    flex: 1 1 auto
                }</style>`:Ae``}
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @mouseup=${this.clickHandler}>
                <div>
                    <slot class="icon" name="icon"></slot>
                    <slot></slot>
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};qe.styles=os;bt([le({type:Boolean,reflect:!0})],qe.prototype,"disabled",2);bt([le({type:Boolean,reflect:!0})],qe.prototype,"toggle",2);bt([le({type:Boolean,reflect:!0})],qe.prototype,"selected",2);bt([le({type:Boolean,reflect:!0})],qe.prototype,"flex",2);bt([le()],qe.prototype,"variant",2);bt([le()],qe.prototype,"size",2);qe=bt([Ue("mc-button")],qe);let ki=class extends qe{constructor(){super(),this.toggle=!0}render(){return Ae`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    ${this.selected?Ae`
                        <slot class="icon" name="selected_icon"></slot>
                        <slot name="selected_text"></slot>`:Ae`
                        <slot class="icon" name="icon"></slot>
                        <slot></slot>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};ki=bt([Ue("mc-toggle-button")],ki);function us(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Fr={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var cs=Fr.exports,Ai;function ls(){return Ai||(Ai=1,function(i){(function(r,a){i.exports=r.document?a(r,!0):function(l){if(!l.document)throw new Error("jQuery requires a window with a document");return a(l)}})(typeof window<"u"?window:cs,function(r,a){var l=[],f=Object.getPrototypeOf,p=l.slice,m=l.flat?function(e){return l.flat.call(e)}:function(e){return l.concat.apply([],e)},S=l.push,A=l.indexOf,E={},O=E.toString,L=E.hasOwnProperty,H=L.toString,X=H.call(Object),M={},N=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},ie=function(t){return t!=null&&t===t.window},j=r.document,ce={type:!0,src:!0,nonce:!0,noModule:!0};function re(e,t,n){n=n||j;var o,u,c=n.createElement("script");if(c.text=e,t)for(o in ce)u=t[o]||t.getAttribute&&t.getAttribute(o),u&&c.setAttribute(o,u);n.head.appendChild(c).parentNode.removeChild(c)}function pe(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?E[O.call(e)]||"object":typeof e}var Z="3.7.1",ye=/HTML$/i,s=function(e,t){return new s.fn.init(e,t)};s.fn=s.prototype={jquery:Z,constructor:s,length:0,toArray:function(){return p.call(this)},get:function(e){return e==null?p.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=s.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return s.each(this,e)},map:function(e){return this.pushStack(s.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(p.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(s.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(s.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:S,sort:l.sort,splice:l.splice},s.extend=s.fn.extend=function(){var e,t,n,o,u,c,d=arguments[0]||{},y=1,g=arguments.length,v=!1;for(typeof d=="boolean"&&(v=d,d=arguments[y]||{},y++),typeof d!="object"&&!N(d)&&(d={}),y===g&&(d=this,y--);y<g;y++)if((e=arguments[y])!=null)for(t in e)o=e[t],!(t==="__proto__"||d===o)&&(v&&o&&(s.isPlainObject(o)||(u=Array.isArray(o)))?(n=d[t],u&&!Array.isArray(n)?c=[]:!u&&!s.isPlainObject(n)?c={}:c=n,u=!1,d[t]=s.extend(v,c,o)):o!==void 0&&(d[t]=o));return d},s.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!e||O.call(e)!=="[object Object]"?!1:(t=f(e),t?(n=L.call(t,"constructor")&&t.constructor,typeof n=="function"&&H.call(n)===X):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){re(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,o=0;if(fe(e))for(n=e.length;o<n&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},text:function(e){var t,n="",o=0,u=e.nodeType;if(!u)for(;t=e[o++];)n+=s.text(t);return u===1||u===11?e.textContent:u===9?e.documentElement.textContent:u===3||u===4?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return e!=null&&(fe(Object(e))?s.merge(n,typeof e=="string"?[e]:e):S.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:A.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!ye.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,o=0,u=e.length;o<n;o++)e[u++]=t[o];return e.length=u,e},grep:function(e,t,n){for(var o,u=[],c=0,d=e.length,y=!n;c<d;c++)o=!t(e[c],c),o!==y&&u.push(e[c]);return u},map:function(e,t,n){var o,u,c=0,d=[];if(fe(e))for(o=e.length;c<o;c++)u=t(e[c],c,n),u!=null&&d.push(u);else for(c in e)u=t(e[c],c,n),u!=null&&d.push(u);return m(d)},guid:1,support:M}),typeof Symbol=="function"&&(s.fn[Symbol.iterator]=l[Symbol.iterator]),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){E["[object "+t+"]"]=t.toLowerCase()});function fe(e){var t=!!e&&"length"in e&&e.length,n=pe(e);return N(e)||ie(e)?!1:n==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}function J(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var de=l.pop,ze=l.sort,We=l.splice,K="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g");s.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&n.nodeType===1&&(e.contains?e.contains(n):e.compareDocumentPosition&&e.compareDocumentPosition(n)&16))};var Et=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Ot(e,t){return t?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}s.escapeSelector=function(e){return(e+"").replace(Et,Ot)};var ve=j,ct=S;(function(){var e,t,n,o,u,c=ct,d,y,g,v,$,P=s.expando,C=0,D=0,W=Mr(),oe=Mr(),Q=Mr(),Te=Mr(),be=function(h,b){return h===b&&(u=!0),0},Xe="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Je="(?:\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ne="\\["+K+"*("+Je+")(?:"+K+"*([*^$|!~]?=)"+K+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Je+"))|)"+K+"*\\]",$t=":("+Je+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ne+")*)|.*)\\)|)",se=new RegExp(K+"+","g"),ge=new RegExp("^"+K+"*,"+K+"*"),ar=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),un=new RegExp(K+"|>"),Qe=new RegExp($t),ur=new RegExp("^"+Je+"$"),Ke={ID:new RegExp("^#("+Je+")"),CLASS:new RegExp("^\\.("+Je+")"),TAG:new RegExp("^("+Je+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+$t),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+Xe+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},ft=/^(?:input|select|textarea|button)$/i,dt=/^h\d$/i,Ie=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,cn=/[+~]/,ot=new RegExp("\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\([^\\r\\n\\f])","g"),st=function(h,b){var x="0x"+h.slice(1)-65536;return b||(x<0?String.fromCharCode(x+65536):String.fromCharCode(x>>10|55296,x&1023|56320))},Mo=function(){ht()},Eo=Or(function(h){return h.disabled===!0&&J(h,"fieldset")},{dir:"parentNode",next:"legend"});function Oo(){try{return d.activeElement}catch{}}try{c.apply(l=p.call(ve.childNodes),ve.childNodes),l[ve.childNodes.length].nodeType}catch{c={apply:function(b,x){ct.apply(b,p.call(x))},call:function(b){ct.apply(b,p.call(arguments,1))}}}function ae(h,b,x,w){var k,_,F,z,R,ee,V,Y=b&&b.ownerDocument,te=b?b.nodeType:9;if(x=x||[],typeof h!="string"||!h||te!==1&&te!==9&&te!==11)return x;if(!w&&(ht(b),b=b||d,g)){if(te!==11&&(R=Ie.exec(h)))if(k=R[1]){if(te===9)if(F=b.getElementById(k)){if(F.id===k)return c.call(x,F),x}else return x;else if(Y&&(F=Y.getElementById(k))&&ae.contains(b,F)&&F.id===k)return c.call(x,F),x}else{if(R[2])return c.apply(x,b.getElementsByTagName(h)),x;if((k=R[3])&&b.getElementsByClassName)return c.apply(x,b.getElementsByClassName(k)),x}if(!Te[h+" "]&&(!v||!v.test(h))){if(V=h,Y=b,te===1&&(un.test(h)||ar.test(h))){for(Y=cn.test(h)&&ln(b.parentNode)||b,(Y!=b||!M.scope)&&((z=b.getAttribute("id"))?z=s.escapeSelector(z):b.setAttribute("id",z=P)),ee=cr(h),_=ee.length;_--;)ee[_]=(z?"#"+z:":scope")+" "+Er(ee[_]);V=ee.join(",")}try{return c.apply(x,Y.querySelectorAll(V)),x}catch{Te(h,!0)}finally{z===P&&b.removeAttribute("id")}}}return pi(h.replace($e,"$1"),b,x,w)}function Mr(){var h=[];function b(x,w){return h.push(x+" ")>t.cacheLength&&delete b[h.shift()],b[x+" "]=w}return b}function He(h){return h[P]=!0,h}function Ut(h){var b=d.createElement("fieldset");try{return!!h(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function No(h){return function(b){return J(b,"input")&&b.type===h}}function Lo(h){return function(b){return(J(b,"input")||J(b,"button"))&&b.type===h}}function di(h){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===h:b.disabled===h:b.isDisabled===h||b.isDisabled!==!h&&Eo(b)===h:b.disabled===h:"label"in b?b.disabled===h:!1}}function Tt(h){return He(function(b){return b=+b,He(function(x,w){for(var k,_=h([],x.length,b),F=_.length;F--;)x[k=_[F]]&&(x[k]=!(w[k]=x[k]))})})}function ln(h){return h&&typeof h.getElementsByTagName<"u"&&h}function ht(h){var b,x=h?h.ownerDocument||h:ve;return x==d||x.nodeType!==9||!x.documentElement||(d=x,y=d.documentElement,g=!s.isXMLDoc(d),$=y.matches||y.webkitMatchesSelector||y.msMatchesSelector,y.msMatchesSelector&&ve!=d&&(b=d.defaultView)&&b.top!==b&&b.addEventListener("unload",Mo),M.getById=Ut(function(w){return y.appendChild(w).id=s.expando,!d.getElementsByName||!d.getElementsByName(s.expando).length}),M.disconnectedMatch=Ut(function(w){return $.call(w,"*")}),M.scope=Ut(function(){return d.querySelectorAll(":scope")}),M.cssHas=Ut(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(t.filter.ID=function(w){var k=w.replace(ot,st);return function(_){return _.getAttribute("id")===k}},t.find.ID=function(w,k){if(typeof k.getElementById<"u"&&g){var _=k.getElementById(w);return _?[_]:[]}}):(t.filter.ID=function(w){var k=w.replace(ot,st);return function(_){var F=typeof _.getAttributeNode<"u"&&_.getAttributeNode("id");return F&&F.value===k}},t.find.ID=function(w,k){if(typeof k.getElementById<"u"&&g){var _,F,z,R=k.getElementById(w);if(R){if(_=R.getAttributeNode("id"),_&&_.value===w)return[R];for(z=k.getElementsByName(w),F=0;R=z[F++];)if(_=R.getAttributeNode("id"),_&&_.value===w)return[R]}return[]}}),t.find.TAG=function(w,k){return typeof k.getElementsByTagName<"u"?k.getElementsByTagName(w):k.querySelectorAll(w)},t.find.CLASS=function(w,k){if(typeof k.getElementsByClassName<"u"&&g)return k.getElementsByClassName(w)},v=[],Ut(function(w){var k;y.appendChild(w).innerHTML="<a id='"+P+"' href='' disabled='disabled'></a><select id='"+P+"-\r\\' disabled='disabled'><option selected=''></option></select>",w.querySelectorAll("[selected]").length||v.push("\\["+K+"*(?:value|"+Xe+")"),w.querySelectorAll("[id~="+P+"-]").length||v.push("~="),w.querySelectorAll("a#"+P+"+*").length||v.push(".#.+[+~]"),w.querySelectorAll(":checked").length||v.push(":checked"),k=d.createElement("input"),k.setAttribute("type","hidden"),w.appendChild(k).setAttribute("name","D"),y.appendChild(w).disabled=!0,w.querySelectorAll(":disabled").length!==2&&v.push(":enabled",":disabled"),k=d.createElement("input"),k.setAttribute("name",""),w.appendChild(k),w.querySelectorAll("[name='']").length||v.push("\\["+K+"*name"+K+"*="+K+`*(?:''|"")`)}),M.cssHas||v.push(":has"),v=v.length&&new RegExp(v.join("|")),be=function(w,k){if(w===k)return u=!0,0;var _=!w.compareDocumentPosition-!k.compareDocumentPosition;return _||(_=(w.ownerDocument||w)==(k.ownerDocument||k)?w.compareDocumentPosition(k):1,_&1||!M.sortDetached&&k.compareDocumentPosition(w)===_?w===d||w.ownerDocument==ve&&ae.contains(ve,w)?-1:k===d||k.ownerDocument==ve&&ae.contains(ve,k)?1:o?A.call(o,w)-A.call(o,k):0:_&4?-1:1)}),d}ae.matches=function(h,b){return ae(h,null,null,b)},ae.matchesSelector=function(h,b){if(ht(h),g&&!Te[b+" "]&&(!v||!v.test(b)))try{var x=$.call(h,b);if(x||M.disconnectedMatch||h.document&&h.document.nodeType!==11)return x}catch{Te(b,!0)}return ae(b,d,null,[h]).length>0},ae.contains=function(h,b){return(h.ownerDocument||h)!=d&&ht(h),s.contains(h,b)},ae.attr=function(h,b){(h.ownerDocument||h)!=d&&ht(h);var x=t.attrHandle[b.toLowerCase()],w=x&&L.call(t.attrHandle,b.toLowerCase())?x(h,b,!g):void 0;return w!==void 0?w:h.getAttribute(b)},ae.error=function(h){throw new Error("Syntax error, unrecognized expression: "+h)},s.uniqueSort=function(h){var b,x=[],w=0,k=0;if(u=!M.sortStable,o=!M.sortStable&&p.call(h,0),ze.call(h,be),u){for(;b=h[k++];)b===h[k]&&(w=x.push(k));for(;w--;)We.call(h,x[w],1)}return o=null,h},s.fn.uniqueSort=function(){return this.pushStack(s.uniqueSort(p.apply(this)))},t=s.expr={cacheLength:50,createPseudo:He,match:Ke,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(h){return h[1]=h[1].replace(ot,st),h[3]=(h[3]||h[4]||h[5]||"").replace(ot,st),h[2]==="~="&&(h[3]=" "+h[3]+" "),h.slice(0,4)},CHILD:function(h){return h[1]=h[1].toLowerCase(),h[1].slice(0,3)==="nth"?(h[3]||ae.error(h[0]),h[4]=+(h[4]?h[5]+(h[6]||1):2*(h[3]==="even"||h[3]==="odd")),h[5]=+(h[7]+h[8]||h[3]==="odd")):h[3]&&ae.error(h[0]),h},PSEUDO:function(h){var b,x=!h[6]&&h[2];return Ke.CHILD.test(h[0])?null:(h[3]?h[2]=h[4]||h[5]||"":x&&Qe.test(x)&&(b=cr(x,!0))&&(b=x.indexOf(")",x.length-b)-x.length)&&(h[0]=h[0].slice(0,b),h[2]=x.slice(0,b)),h.slice(0,3))}},filter:{TAG:function(h){var b=h.replace(ot,st).toLowerCase();return h==="*"?function(){return!0}:function(x){return J(x,b)}},CLASS:function(h){var b=W[h+" "];return b||(b=new RegExp("(^|"+K+")"+h+"("+K+"|$)"))&&W(h,function(x){return b.test(typeof x.className=="string"&&x.className||typeof x.getAttribute<"u"&&x.getAttribute("class")||"")})},ATTR:function(h,b,x){return function(w){var k=ae.attr(w,h);return k==null?b==="!=":b?(k+="",b==="="?k===x:b==="!="?k!==x:b==="^="?x&&k.indexOf(x)===0:b==="*="?x&&k.indexOf(x)>-1:b==="$="?x&&k.slice(-x.length)===x:b==="~="?(" "+k.replace(se," ")+" ").indexOf(x)>-1:b==="|="?k===x||k.slice(0,x.length+1)===x+"-":!1):!0}},CHILD:function(h,b,x,w,k){var _=h.slice(0,3)!=="nth",F=h.slice(-4)!=="last",z=b==="of-type";return w===1&&k===0?function(R){return!!R.parentNode}:function(R,ee,V){var Y,te,q,ue,Oe,Pe=_!==F?"nextSibling":"previousSibling",je=R.parentNode,Ze=z&&R.nodeName.toLowerCase(),Vt=!V&&!z,Se=!1;if(je){if(_){for(;Pe;){for(q=R;q=q[Pe];)if(z?J(q,Ze):q.nodeType===1)return!1;Oe=Pe=h==="only"&&!Oe&&"nextSibling"}return!0}if(Oe=[F?je.firstChild:je.lastChild],F&&Vt){for(te=je[P]||(je[P]={}),Y=te[h]||[],ue=Y[0]===C&&Y[1],Se=ue&&Y[2],q=ue&&je.childNodes[ue];q=++ue&&q&&q[Pe]||(Se=ue=0)||Oe.pop();)if(q.nodeType===1&&++Se&&q===R){te[h]=[C,ue,Se];break}}else if(Vt&&(te=R[P]||(R[P]={}),Y=te[h]||[],ue=Y[0]===C&&Y[1],Se=ue),Se===!1)for(;(q=++ue&&q&&q[Pe]||(Se=ue=0)||Oe.pop())&&!((z?J(q,Ze):q.nodeType===1)&&++Se&&(Vt&&(te=q[P]||(q[P]={}),te[h]=[C,Se]),q===R)););return Se-=k,Se===w||Se%w===0&&Se/w>=0}}},PSEUDO:function(h,b){var x,w=t.pseudos[h]||t.setFilters[h.toLowerCase()]||ae.error("unsupported pseudo: "+h);return w[P]?w(b):w.length>1?(x=[h,h,"",b],t.setFilters.hasOwnProperty(h.toLowerCase())?He(function(k,_){for(var F,z=w(k,b),R=z.length;R--;)F=A.call(k,z[R]),k[F]=!(_[F]=z[R])}):function(k){return w(k,0,x)}):w}},pseudos:{not:He(function(h){var b=[],x=[],w=pn(h.replace($e,"$1"));return w[P]?He(function(k,_,F,z){for(var R,ee=w(k,null,z,[]),V=k.length;V--;)(R=ee[V])&&(k[V]=!(_[V]=R))}):function(k,_,F){return b[0]=k,w(b,null,F,x),b[0]=null,!x.pop()}}),has:He(function(h){return function(b){return ae(h,b).length>0}}),contains:He(function(h){return h=h.replace(ot,st),function(b){return(b.textContent||s.text(b)).indexOf(h)>-1}}),lang:He(function(h){return ur.test(h||"")||ae.error("unsupported lang: "+h),h=h.replace(ot,st).toLowerCase(),function(b){var x;do if(x=g?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return x=x.toLowerCase(),x===h||x.indexOf(h+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(h){var b=r.location&&r.location.hash;return b&&b.slice(1)===h.id},root:function(h){return h===y},focus:function(h){return h===Oo()&&d.hasFocus()&&!!(h.type||h.href||~h.tabIndex)},enabled:di(!1),disabled:di(!0),checked:function(h){return J(h,"input")&&!!h.checked||J(h,"option")&&!!h.selected},selected:function(h){return h.parentNode&&h.parentNode.selectedIndex,h.selected===!0},empty:function(h){for(h=h.firstChild;h;h=h.nextSibling)if(h.nodeType<6)return!1;return!0},parent:function(h){return!t.pseudos.empty(h)},header:function(h){return dt.test(h.nodeName)},input:function(h){return ft.test(h.nodeName)},button:function(h){return J(h,"input")&&h.type==="button"||J(h,"button")},text:function(h){var b;return J(h,"input")&&h.type==="text"&&((b=h.getAttribute("type"))==null||b.toLowerCase()==="text")},first:Tt(function(){return[0]}),last:Tt(function(h,b){return[b-1]}),eq:Tt(function(h,b,x){return[x<0?x+b:x]}),even:Tt(function(h,b){for(var x=0;x<b;x+=2)h.push(x);return h}),odd:Tt(function(h,b){for(var x=1;x<b;x+=2)h.push(x);return h}),lt:Tt(function(h,b,x){var w;for(x<0?w=x+b:x>b?w=b:w=x;--w>=0;)h.push(w);return h}),gt:Tt(function(h,b,x){for(var w=x<0?x+b:x;++w<b;)h.push(w);return h})}},t.pseudos.nth=t.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=No(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=Lo(e);function hi(){}hi.prototype=t.filters=t.pseudos,t.setFilters=new hi;function cr(h,b){var x,w,k,_,F,z,R,ee=oe[h+" "];if(ee)return b?0:ee.slice(0);for(F=h,z=[],R=t.preFilter;F;){(!x||(w=ge.exec(F)))&&(w&&(F=F.slice(w[0].length)||F),z.push(k=[])),x=!1,(w=ar.exec(F))&&(x=w.shift(),k.push({value:x,type:w[0].replace($e," ")}),F=F.slice(x.length));for(_ in t.filter)(w=Ke[_].exec(F))&&(!R[_]||(w=R[_](w)))&&(x=w.shift(),k.push({value:x,type:_,matches:w}),F=F.slice(x.length));if(!x)break}return b?F.length:F?ae.error(h):oe(h,z).slice(0)}function Er(h){for(var b=0,x=h.length,w="";b<x;b++)w+=h[b].value;return w}function Or(h,b,x){var w=b.dir,k=b.next,_=k||w,F=x&&_==="parentNode",z=D++;return b.first?function(R,ee,V){for(;R=R[w];)if(R.nodeType===1||F)return h(R,ee,V);return!1}:function(R,ee,V){var Y,te,q=[C,z];if(V){for(;R=R[w];)if((R.nodeType===1||F)&&h(R,ee,V))return!0}else for(;R=R[w];)if(R.nodeType===1||F)if(te=R[P]||(R[P]={}),k&&J(R,k))R=R[w]||R;else{if((Y=te[_])&&Y[0]===C&&Y[1]===z)return q[2]=Y[2];if(te[_]=q,q[2]=h(R,ee,V))return!0}return!1}}function fn(h){return h.length>1?function(b,x,w){for(var k=h.length;k--;)if(!h[k](b,x,w))return!1;return!0}:h[0]}function Fo(h,b,x){for(var w=0,k=b.length;w<k;w++)ae(h,b[w],x);return x}function Nr(h,b,x,w,k){for(var _,F=[],z=0,R=h.length,ee=b!=null;z<R;z++)(_=h[z])&&(!x||x(_,w,k))&&(F.push(_),ee&&b.push(z));return F}function dn(h,b,x,w,k,_){return w&&!w[P]&&(w=dn(w)),k&&!k[P]&&(k=dn(k,_)),He(function(F,z,R,ee){var V,Y,te,q,ue=[],Oe=[],Pe=z.length,je=F||Fo(b||"*",R.nodeType?[R]:R,[]),Ze=h&&(F||!b)?Nr(je,ue,h,R,ee):je;if(x?(q=k||(F?h:Pe||w)?[]:z,x(Ze,q,R,ee)):q=Ze,w)for(V=Nr(q,Oe),w(V,[],R,ee),Y=V.length;Y--;)(te=V[Y])&&(q[Oe[Y]]=!(Ze[Oe[Y]]=te));if(F){if(k||h){if(k){for(V=[],Y=q.length;Y--;)(te=q[Y])&&V.push(Ze[Y]=te);k(null,q=[],V,ee)}for(Y=q.length;Y--;)(te=q[Y])&&(V=k?A.call(F,te):ue[Y])>-1&&(F[V]=!(z[V]=te))}}else q=Nr(q===z?q.splice(Pe,q.length):q),k?k(null,z,q,ee):c.apply(z,q)})}function hn(h){for(var b,x,w,k=h.length,_=t.relative[h[0].type],F=_||t.relative[" "],z=_?1:0,R=Or(function(Y){return Y===b},F,!0),ee=Or(function(Y){return A.call(b,Y)>-1},F,!0),V=[function(Y,te,q){var ue=!_&&(q||te!=n)||((b=te).nodeType?R(Y,te,q):ee(Y,te,q));return b=null,ue}];z<k;z++)if(x=t.relative[h[z].type])V=[Or(fn(V),x)];else{if(x=t.filter[h[z].type].apply(null,h[z].matches),x[P]){for(w=++z;w<k&&!t.relative[h[w].type];w++);return dn(z>1&&fn(V),z>1&&Er(h.slice(0,z-1).concat({value:h[z-2].type===" "?"*":""})).replace($e,"$1"),x,z<w&&hn(h.slice(z,w)),w<k&&hn(h=h.slice(w)),w<k&&Er(h))}V.push(x)}return fn(V)}function Ro(h,b){var x=b.length>0,w=h.length>0,k=function(_,F,z,R,ee){var V,Y,te,q=0,ue="0",Oe=_&&[],Pe=[],je=n,Ze=_||w&&t.find.TAG("*",ee),Vt=C+=je==null?1:Math.random()||.1,Se=Ze.length;for(ee&&(n=F==d||F||ee);ue!==Se&&(V=Ze[ue])!=null;ue++){if(w&&V){for(Y=0,!F&&V.ownerDocument!=d&&(ht(V),z=!g);te=h[Y++];)if(te(V,F||d,z)){c.call(R,V);break}ee&&(C=Vt)}x&&((V=!te&&V)&&q--,_&&Oe.push(V))}if(q+=ue,x&&ue!==q){for(Y=0;te=b[Y++];)te(Oe,Pe,F,z);if(_){if(q>0)for(;ue--;)Oe[ue]||Pe[ue]||(Pe[ue]=de.call(R));Pe=Nr(Pe)}c.apply(R,Pe),ee&&!_&&Pe.length>0&&q+b.length>1&&s.uniqueSort(R)}return ee&&(C=Vt,n=je),Oe};return x?He(k):k}function pn(h,b){var x,w=[],k=[],_=Q[h+" "];if(!_){for(b||(b=cr(h)),x=b.length;x--;)_=hn(b[x]),_[P]?w.push(_):k.push(_);_=Q(h,Ro(k,w)),_.selector=h}return _}function pi(h,b,x,w){var k,_,F,z,R,ee=typeof h=="function"&&h,V=!w&&cr(h=ee.selector||h);if(x=x||[],V.length===1){if(_=V[0]=V[0].slice(0),_.length>2&&(F=_[0]).type==="ID"&&b.nodeType===9&&g&&t.relative[_[1].type]){if(b=(t.find.ID(F.matches[0].replace(ot,st),b)||[])[0],b)ee&&(b=b.parentNode);else return x;h=h.slice(_.shift().value.length)}for(k=Ke.needsContext.test(h)?0:_.length;k--&&(F=_[k],!t.relative[z=F.type]);)if((R=t.find[z])&&(w=R(F.matches[0].replace(ot,st),cn.test(_[0].type)&&ln(b.parentNode)||b))){if(_.splice(k,1),h=w.length&&Er(_),!h)return c.apply(x,w),x;break}}return(ee||pn(h,V))(w,b,!g,x,!b||cn.test(h)&&ln(b.parentNode)||b),x}M.sortStable=P.split("").sort(be).join("")===P,ht(),M.sortDetached=Ut(function(h){return h.compareDocumentPosition(d.createElement("fieldset"))&1}),s.find=ae,s.expr[":"]=s.expr.pseudos,s.unique=s.uniqueSort,ae.compile=pn,ae.select=pi,ae.setDocument=ht,ae.tokenize=cr,ae.escape=s.escapeSelector,ae.getText=s.text,ae.isXML=s.isXMLDoc,ae.selectors=s.expr,ae.support=s.support,ae.uniqueSort=s.uniqueSort})();var Ge=function(e,t,n){for(var o=[],u=n!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(u&&s(e).is(n))break;o.push(e)}return o},Nt=function(e,t){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n},Lt=s.expr.match.needsContext,Ft=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function lt(e,t,n){return N(t)?s.grep(e,function(o,u){return!!t.call(o,u,o)!==n}):t.nodeType?s.grep(e,function(o){return o===t!==n}):typeof t!="string"?s.grep(e,function(o){return A.call(t,o)>-1!==n}):s.filter(t,e,n)}s.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),t.length===1&&o.nodeType===1?s.find.matchesSelector(o,e)?[o]:[]:s.find.matches(e,s.grep(t,function(u){return u.nodeType===1}))},s.fn.extend({find:function(e){var t,n,o=this.length,u=this;if(typeof e!="string")return this.pushStack(s(e).filter(function(){for(t=0;t<o;t++)if(s.contains(u[t],this))return!0}));for(n=this.pushStack([]),t=0;t<o;t++)s.find(e,u[t],n);return o>1?s.uniqueSort(n):n},filter:function(e){return this.pushStack(lt(this,e||[],!1))},not:function(e){return this.pushStack(lt(this,e||[],!0))},is:function(e){return!!lt(this,typeof e=="string"&&Lt.test(e)?s(e):e||[],!1).length}});var Kt,Cr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ur=s.fn.init=function(e,t,n){var o,u;if(!e)return this;if(n=n||Kt,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?o=[null,e,null]:o=Cr.exec(e),o&&(o[1]||!t))if(o[1]){if(t=t instanceof s?t[0]:t,s.merge(this,s.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:j,!0)),Ft.test(o[1])&&s.isPlainObject(t))for(o in t)N(this[o])?this[o](t[o]):this.attr(o,t[o]);return this}else return u=j.getElementById(o[2]),u&&(this[0]=u,this.length=1),this;else return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(N(e))return n.ready!==void 0?n.ready(e):e(s)}return s.makeArray(e,this)};Ur.prototype=s.fn,Kt=s(j);var Vr=/^(?:parents|prev(?:Until|All))/,wr={children:!0,contents:!0,next:!0,prev:!0};s.fn.extend({has:function(e){var t=s(e,this),n=t.length;return this.filter(function(){for(var o=0;o<n;o++)if(s.contains(this,t[o]))return!0})},closest:function(e,t){var n,o=0,u=this.length,c=[],d=typeof e!="string"&&s(e);if(!Lt.test(e)){for(;o<u;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(d?d.index(n)>-1:n.nodeType===1&&s.find.matchesSelector(n,e))){c.push(n);break}}return this.pushStack(c.length>1?s.uniqueSort(c):c)},index:function(e){return e?typeof e=="string"?A.call(s(e),this[0]):A.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(s.uniqueSort(s.merge(this.get(),s(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function $r(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}s.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return Ge(e,"parentNode")},parentsUntil:function(e,t,n){return Ge(e,"parentNode",n)},next:function(e){return $r(e,"nextSibling")},prev:function(e){return $r(e,"previousSibling")},nextAll:function(e){return Ge(e,"nextSibling")},prevAll:function(e){return Ge(e,"previousSibling")},nextUntil:function(e,t,n){return Ge(e,"nextSibling",n)},prevUntil:function(e,t,n){return Ge(e,"previousSibling",n)},siblings:function(e){return Nt((e.parentNode||{}).firstChild,e)},children:function(e){return Nt(e.firstChild)},contents:function(e){return e.contentDocument!=null&&f(e.contentDocument)?e.contentDocument:(J(e,"template")&&(e=e.content||e),s.merge([],e.childNodes))}},function(e,t){s.fn[e]=function(n,o){var u=s.map(this,t,n);return e.slice(-5)!=="Until"&&(o=n),o&&typeof o=="string"&&(u=s.filter(o,u)),this.length>1&&(wr[e]||s.uniqueSort(u),Vr.test(e)&&u.reverse()),this.pushStack(u)}});var Fe=/[^\x20\t\r\n\f]+/g;function zi(e){var t={};return s.each(e.match(Fe)||[],function(n,o){t[o]=!0}),t}s.Callbacks=function(e){e=typeof e=="string"?zi(e):s.extend({},e);var t,n,o,u,c=[],d=[],y=-1,g=function(){for(u=u||e.once,o=t=!0;d.length;y=-1)for(n=d.shift();++y<c.length;)c[y].apply(n[0],n[1])===!1&&e.stopOnFalse&&(y=c.length,n=!1);e.memory||(n=!1),t=!1,u&&(n?c=[]:c="")},v={add:function(){return c&&(n&&!t&&(y=c.length-1,d.push(n)),function $(P){s.each(P,function(C,D){N(D)?(!e.unique||!v.has(D))&&c.push(D):D&&D.length&&pe(D)!=="string"&&$(D)})}(arguments),n&&!t&&g()),this},remove:function(){return s.each(arguments,function($,P){for(var C;(C=s.inArray(P,c,C))>-1;)c.splice(C,1),C<=y&&y--}),this},has:function($){return $?s.inArray($,c)>-1:c.length>0},empty:function(){return c&&(c=[]),this},disable:function(){return u=d=[],c=n="",this},disabled:function(){return!c},lock:function(){return u=d=[],!n&&!t&&(c=n=""),this},locked:function(){return!!u},fireWith:function($,P){return u||(P=P||[],P=[$,P.slice?P.slice():P],d.push(P),t||g()),this},fire:function(){return v.fireWith(this,arguments),this},fired:function(){return!!o}};return v};function Rt(e){return e}function Tr(e){throw e}function Nn(e,t,n,o){var u;try{e&&N(u=e.promise)?u.call(e).done(t).fail(n):e&&N(u=e.then)?u.call(e,t,n):t.apply(void 0,[e].slice(o))}catch(c){n.apply(void 0,[c])}}s.extend({Deferred:function(e){var t=[["notify","progress",s.Callbacks("memory"),s.Callbacks("memory"),2],["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),0,"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),1,"rejected"]],n="pending",o={state:function(){return n},always:function(){return u.done(arguments).fail(arguments),this},catch:function(c){return o.then(null,c)},pipe:function(){var c=arguments;return s.Deferred(function(d){s.each(t,function(y,g){var v=N(c[g[4]])&&c[g[4]];u[g[1]](function(){var $=v&&v.apply(this,arguments);$&&N($.promise)?$.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[g[0]+"With"](this,v?[$]:arguments)})}),c=null}).promise()},then:function(c,d,y){var g=0;function v($,P,C,D){return function(){var W=this,oe=arguments,Q=function(){var be,Xe;if(!($<g)){if(be=C.apply(W,oe),be===P.promise())throw new TypeError("Thenable self-resolution");Xe=be&&(typeof be=="object"||typeof be=="function")&&be.then,N(Xe)?D?Xe.call(be,v(g,P,Rt,D),v(g,P,Tr,D)):(g++,Xe.call(be,v(g,P,Rt,D),v(g,P,Tr,D),v(g,P,Rt,P.notifyWith))):(C!==Rt&&(W=void 0,oe=[be]),(D||P.resolveWith)(W,oe))}},Te=D?Q:function(){try{Q()}catch(be){s.Deferred.exceptionHook&&s.Deferred.exceptionHook(be,Te.error),$+1>=g&&(C!==Tr&&(W=void 0,oe=[be]),P.rejectWith(W,oe))}};$?Te():(s.Deferred.getErrorHook?Te.error=s.Deferred.getErrorHook():s.Deferred.getStackHook&&(Te.error=s.Deferred.getStackHook()),r.setTimeout(Te))}}return s.Deferred(function($){t[0][3].add(v(0,$,N(y)?y:Rt,$.notifyWith)),t[1][3].add(v(0,$,N(c)?c:Rt)),t[2][3].add(v(0,$,N(d)?d:Tr))}).promise()},promise:function(c){return c!=null?s.extend(c,o):o}},u={};return s.each(t,function(c,d){var y=d[2],g=d[5];o[d[1]]=y.add,g&&y.add(function(){n=g},t[3-c][2].disable,t[3-c][3].disable,t[0][2].lock,t[0][3].lock),y.add(d[3].fire),u[d[0]]=function(){return u[d[0]+"With"](this===u?void 0:this,arguments),this},u[d[0]+"With"]=y.fireWith}),o.promise(u),e&&e.call(u,u),u},when:function(e){var t=arguments.length,n=t,o=Array(n),u=p.call(arguments),c=s.Deferred(),d=function(y){return function(g){o[y]=this,u[y]=arguments.length>1?p.call(arguments):g,--t||c.resolveWith(o,u)}};if(t<=1&&(Nn(e,c.done(d(n)).resolve,c.reject,!t),c.state()==="pending"||N(u[n]&&u[n].then)))return c.then();for(;n--;)Nn(u[n],d(n),c.reject);return c.promise()}});var Bi=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;s.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&Bi.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},s.readyException=function(e){r.setTimeout(function(){throw e})};var Wr=s.Deferred();s.fn.ready=function(e){return Wr.then(e).catch(function(t){s.readyException(t)}),this},s.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--s.readyWait:s.isReady)||(s.isReady=!0,!(e!==!0&&--s.readyWait>0)&&Wr.resolveWith(j,[s]))}}),s.ready.then=Wr.then;function kr(){j.removeEventListener("DOMContentLoaded",kr),r.removeEventListener("load",kr),s.ready()}j.readyState==="complete"||j.readyState!=="loading"&&!j.documentElement.doScroll?r.setTimeout(s.ready):(j.addEventListener("DOMContentLoaded",kr),r.addEventListener("load",kr));var nt=function(e,t,n,o,u,c,d){var y=0,g=e.length,v=n==null;if(pe(n)==="object"){u=!0;for(y in n)nt(e,t,y,n[y],!0,c,d)}else if(o!==void 0&&(u=!0,N(o)||(d=!0),v&&(d?(t.call(e,o),t=null):(v=t,t=function($,P,C){return v.call(s($),C)})),t))for(;y<g;y++)t(e[y],n,d?o:o.call(e[y],y,t(e[y],n)));return u?e:v?t.call(e):g?t(e[0],n):c},Hi=/^-ms-/,qi=/-([a-z])/g;function Ui(e,t){return t.toUpperCase()}function Ye(e){return e.replace(Hi,"ms-").replace(qi,Ui)}var Zt=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function er(){this.expando=s.expando+er.uid++}er.uid=1,er.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Zt(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var o,u=this.cache(e);if(typeof t=="string")u[Ye(t)]=n;else for(o in t)u[Ye(o)]=t[o];return u},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Ye(t)]},access:function(e,t,n){return t===void 0||t&&typeof t=="string"&&n===void 0?this.get(e,t):(this.set(e,t,n),n!==void 0?n:t)},remove:function(e,t){var n,o=e[this.expando];if(o!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Ye):(t=Ye(t),t=t in o?[t]:t.match(Fe)||[]),n=t.length;n--;)delete o[t[n]];(t===void 0||s.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!s.isEmptyObject(t)}};var B=new er,_e=new er,Vi=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Wi=/[A-Z]/g;function Gi(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:Vi.test(e)?JSON.parse(e):e}function Ln(e,t,n){var o;if(n===void 0&&e.nodeType===1)if(o="data-"+t.replace(Wi,"-$&").toLowerCase(),n=e.getAttribute(o),typeof n=="string"){try{n=Gi(n)}catch{}_e.set(e,t,n)}else n=void 0;return n}s.extend({hasData:function(e){return _e.hasData(e)||B.hasData(e)},data:function(e,t,n){return _e.access(e,t,n)},removeData:function(e,t){_e.remove(e,t)},_data:function(e,t,n){return B.access(e,t,n)},_removeData:function(e,t){B.remove(e,t)}}),s.fn.extend({data:function(e,t){var n,o,u,c=this[0],d=c&&c.attributes;if(e===void 0){if(this.length&&(u=_e.get(c),c.nodeType===1&&!B.get(c,"hasDataAttrs"))){for(n=d.length;n--;)d[n]&&(o=d[n].name,o.indexOf("data-")===0&&(o=Ye(o.slice(5)),Ln(c,o,u[o])));B.set(c,"hasDataAttrs",!0)}return u}return typeof e=="object"?this.each(function(){_e.set(this,e)}):nt(this,function(y){var g;if(c&&y===void 0)return g=_e.get(c,e),g!==void 0||(g=Ln(c,e),g!==void 0)?g:void 0;this.each(function(){_e.set(this,e,y)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){_e.remove(this,e)})}}),s.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=B.get(e,t),n&&(!o||Array.isArray(n)?o=B.access(e,t,s.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=s.queue(e,t),o=n.length,u=n.shift(),c=s._queueHooks(e,t),d=function(){s.dequeue(e,t)};u==="inprogress"&&(u=n.shift(),o--),u&&(t==="fx"&&n.unshift("inprogress"),delete c.stop,u.call(e,d,c)),!o&&c&&c.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return B.get(e,n)||B.access(e,n,{empty:s.Callbacks("once memory").add(function(){B.remove(e,[t+"queue",n])})})}}),s.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?s.queue(this[0],e):t===void 0?this:this.each(function(){var o=s.queue(this,e,t);s._queueHooks(this,e),e==="fx"&&o[0]!=="inprogress"&&s.dequeue(this,e)})},dequeue:function(e){return this.each(function(){s.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,o=1,u=s.Deferred(),c=this,d=this.length,y=function(){--o||u.resolveWith(c,[c])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";d--;)n=B.get(c[d],e+"queueHooks"),n&&n.empty&&(o++,n.empty.add(y));return y(),u.promise(t)}});var Fn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,tr=new RegExp("^(?:([+-])=|)("+Fn+")([a-z%]*)$","i"),it=["Top","Right","Bottom","Left"],xt=j.documentElement,It=function(e){return s.contains(e.ownerDocument,e)},Yi={composed:!0};xt.getRootNode&&(It=function(e){return s.contains(e.ownerDocument,e)||e.getRootNode(Yi)===e.ownerDocument});var Ar=function(e,t){return e=t||e,e.style.display==="none"||e.style.display===""&&It(e)&&s.css(e,"display")==="none"};function Rn(e,t,n,o){var u,c,d=20,y=o?function(){return o.cur()}:function(){return s.css(e,t,"")},g=y(),v=n&&n[3]||(s.cssNumber[t]?"":"px"),$=e.nodeType&&(s.cssNumber[t]||v!=="px"&&+g)&&tr.exec(s.css(e,t));if($&&$[3]!==v){for(g=g/2,v=v||$[3],$=+g||1;d--;)s.style(e,t,$+v),(1-c)*(1-(c=y()/g||.5))<=0&&(d=0),$=$/c;$=$*2,s.style(e,t,$+v),n=n||[]}return n&&($=+$||+g||0,u=n[1]?$+(n[1]+1)*n[2]:+n[2],o&&(o.unit=v,o.start=$,o.end=u)),u}var In={};function Xi(e){var t,n=e.ownerDocument,o=e.nodeName,u=In[o];return u||(t=n.body.appendChild(n.createElement(o)),u=s.css(t,"display"),t.parentNode.removeChild(t),u==="none"&&(u="block"),In[o]=u,u)}function jt(e,t){for(var n,o,u=[],c=0,d=e.length;c<d;c++)o=e[c],o.style&&(n=o.style.display,t?(n==="none"&&(u[c]=B.get(o,"display")||null,u[c]||(o.style.display="")),o.style.display===""&&Ar(o)&&(u[c]=Xi(o))):n!=="none"&&(u[c]="none",B.set(o,"display",n)));for(c=0;c<d;c++)u[c]!=null&&(e[c].style.display=u[c]);return e}s.fn.extend({show:function(){return jt(this,!0)},hide:function(){return jt(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){Ar(this)?s(this).show():s(this).hide()})}});var rr=/^(?:checkbox|radio)$/i,jn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,zn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=j.createDocumentFragment(),t=e.appendChild(j.createElement("div")),n=j.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),M.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",M.option=!!t.lastChild})();var Re={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Re.tbody=Re.tfoot=Re.colgroup=Re.caption=Re.thead,Re.th=Re.td,M.option||(Re.optgroup=Re.option=[1,"<select multiple='multiple'>","</select>"]);function Me(e,t){var n;return typeof e.getElementsByTagName<"u"?n=e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?n=e.querySelectorAll(t||"*"):n=[],t===void 0||t&&J(e,t)?s.merge([e],n):n}function Gr(e,t){for(var n=0,o=e.length;n<o;n++)B.set(e[n],"globalEval",!t||B.get(t[n],"globalEval"))}var Ji=/<|&#?\w+;/;function Bn(e,t,n,o,u){for(var c,d,y,g,v,$,P=t.createDocumentFragment(),C=[],D=0,W=e.length;D<W;D++)if(c=e[D],c||c===0)if(pe(c)==="object")s.merge(C,c.nodeType?[c]:c);else if(!Ji.test(c))C.push(t.createTextNode(c));else{for(d=d||P.appendChild(t.createElement("div")),y=(jn.exec(c)||["",""])[1].toLowerCase(),g=Re[y]||Re._default,d.innerHTML=g[1]+s.htmlPrefilter(c)+g[2],$=g[0];$--;)d=d.lastChild;s.merge(C,d.childNodes),d=P.firstChild,d.textContent=""}for(P.textContent="",D=0;c=C[D++];){if(o&&s.inArray(c,o)>-1){u&&u.push(c);continue}if(v=It(c),d=Me(P.appendChild(c),"script"),v&&Gr(d),n)for($=0;c=d[$++];)zn.test(c.type||"")&&n.push(c)}return P}var Hn=/^([^.]*)(?:\.(.+)|)/;function zt(){return!0}function Bt(){return!1}function Yr(e,t,n,o,u,c){var d,y;if(typeof t=="object"){typeof n!="string"&&(o=o||n,n=void 0);for(y in t)Yr(e,y,n,o,t[y],c);return e}if(o==null&&u==null?(u=n,o=n=void 0):u==null&&(typeof n=="string"?(u=o,o=void 0):(u=o,o=n,n=void 0)),u===!1)u=Bt;else if(!u)return e;return c===1&&(d=u,u=function(g){return s().off(g),d.apply(this,arguments)},u.guid=d.guid||(d.guid=s.guid++)),e.each(function(){s.event.add(this,t,u,o,n)})}s.event={global:{},add:function(e,t,n,o,u){var c,d,y,g,v,$,P,C,D,W,oe,Q=B.get(e);if(Zt(e))for(n.handler&&(c=n,n=c.handler,u=c.selector),u&&s.find.matchesSelector(xt,u),n.guid||(n.guid=s.guid++),(g=Q.events)||(g=Q.events=Object.create(null)),(d=Q.handle)||(d=Q.handle=function(Te){return typeof s<"u"&&s.event.triggered!==Te.type?s.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Fe)||[""],v=t.length;v--;)y=Hn.exec(t[v])||[],D=oe=y[1],W=(y[2]||"").split(".").sort(),D&&(P=s.event.special[D]||{},D=(u?P.delegateType:P.bindType)||D,P=s.event.special[D]||{},$=s.extend({type:D,origType:oe,data:o,handler:n,guid:n.guid,selector:u,needsContext:u&&s.expr.match.needsContext.test(u),namespace:W.join(".")},c),(C=g[D])||(C=g[D]=[],C.delegateCount=0,(!P.setup||P.setup.call(e,o,W,d)===!1)&&e.addEventListener&&e.addEventListener(D,d)),P.add&&(P.add.call(e,$),$.handler.guid||($.handler.guid=n.guid)),u?C.splice(C.delegateCount++,0,$):C.push($),s.event.global[D]=!0)},remove:function(e,t,n,o,u){var c,d,y,g,v,$,P,C,D,W,oe,Q=B.hasData(e)&&B.get(e);if(!(!Q||!(g=Q.events))){for(t=(t||"").match(Fe)||[""],v=t.length;v--;){if(y=Hn.exec(t[v])||[],D=oe=y[1],W=(y[2]||"").split(".").sort(),!D){for(D in g)s.event.remove(e,D+t[v],n,o,!0);continue}for(P=s.event.special[D]||{},D=(o?P.delegateType:P.bindType)||D,C=g[D]||[],y=y[2]&&new RegExp("(^|\\.)"+W.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=c=C.length;c--;)$=C[c],(u||oe===$.origType)&&(!n||n.guid===$.guid)&&(!y||y.test($.namespace))&&(!o||o===$.selector||o==="**"&&$.selector)&&(C.splice(c,1),$.selector&&C.delegateCount--,P.remove&&P.remove.call(e,$));d&&!C.length&&((!P.teardown||P.teardown.call(e,W,Q.handle)===!1)&&s.removeEvent(e,D,Q.handle),delete g[D])}s.isEmptyObject(g)&&B.remove(e,"handle events")}},dispatch:function(e){var t,n,o,u,c,d,y=new Array(arguments.length),g=s.event.fix(e),v=(B.get(this,"events")||Object.create(null))[g.type]||[],$=s.event.special[g.type]||{};for(y[0]=g,t=1;t<arguments.length;t++)y[t]=arguments[t];if(g.delegateTarget=this,!($.preDispatch&&$.preDispatch.call(this,g)===!1)){for(d=s.event.handlers.call(this,g,v),t=0;(u=d[t++])&&!g.isPropagationStopped();)for(g.currentTarget=u.elem,n=0;(c=u.handlers[n++])&&!g.isImmediatePropagationStopped();)(!g.rnamespace||c.namespace===!1||g.rnamespace.test(c.namespace))&&(g.handleObj=c,g.data=c.data,o=((s.event.special[c.origType]||{}).handle||c.handler).apply(u.elem,y),o!==void 0&&(g.result=o)===!1&&(g.preventDefault(),g.stopPropagation()));return $.postDispatch&&$.postDispatch.call(this,g),g.result}},handlers:function(e,t){var n,o,u,c,d,y=[],g=t.delegateCount,v=e.target;if(g&&v.nodeType&&!(e.type==="click"&&e.button>=1)){for(;v!==this;v=v.parentNode||this)if(v.nodeType===1&&!(e.type==="click"&&v.disabled===!0)){for(c=[],d={},n=0;n<g;n++)o=t[n],u=o.selector+" ",d[u]===void 0&&(d[u]=o.needsContext?s(u,this).index(v)>-1:s.find(u,this,null,[v]).length),d[u]&&c.push(o);c.length&&y.push({elem:v,handlers:c})}}return v=this,g<t.length&&y.push({elem:v,handlers:t.slice(g)}),y},addProp:function(e,t){Object.defineProperty(s.Event.prototype,e,{enumerable:!0,configurable:!0,get:N(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(n){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:n})}})},fix:function(e){return e[s.expando]?e:new s.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return rr.test(t.type)&&t.click&&J(t,"input")&&Pr(t,"click",!0),!1},trigger:function(e){var t=this||e;return rr.test(t.type)&&t.click&&J(t,"input")&&Pr(t,"click"),!0},_default:function(e){var t=e.target;return rr.test(t.type)&&t.click&&J(t,"input")&&B.get(t,"click")||J(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function Pr(e,t,n){if(!n){B.get(e,t)===void 0&&s.event.add(e,t,zt);return}B.set(e,t,!1),s.event.add(e,t,{namespace:!1,handler:function(o){var u,c=B.get(this,t);if(o.isTrigger&1&&this[t]){if(c)(s.event.special[t]||{}).delegateType&&o.stopPropagation();else if(c=p.call(arguments),B.set(this,t,c),this[t](),u=B.get(this,t),B.set(this,t,!1),c!==u)return o.stopImmediatePropagation(),o.preventDefault(),u}else c&&(B.set(this,t,s.event.trigger(c[0],c.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=zt)}})}s.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},s.Event=function(e,t){if(!(this instanceof s.Event))return new s.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?zt:Bt,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&s.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[s.expando]=!0},s.Event.prototype={constructor:s.Event,isDefaultPrevented:Bt,isPropagationStopped:Bt,isImmediatePropagationStopped:Bt,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=zt,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=zt,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=zt,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},s.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},s.event.addProp),s.each({focus:"focusin",blur:"focusout"},function(e,t){function n(o){if(j.documentMode){var u=B.get(this,"handle"),c=s.event.fix(o);c.type=o.type==="focusin"?"focus":"blur",c.isSimulated=!0,u(o),c.target===c.currentTarget&&u(c)}else s.event.simulate(t,o.target,s.event.fix(o))}s.event.special[e]={setup:function(){var o;if(Pr(this,e,!0),j.documentMode)o=B.get(this,t),o||this.addEventListener(t,n),B.set(this,t,(o||0)+1);else return!1},trigger:function(){return Pr(this,e),!0},teardown:function(){var o;if(j.documentMode)o=B.get(this,t)-1,o?B.set(this,t,o):(this.removeEventListener(t,n),B.remove(this,t));else return!1},_default:function(o){return B.get(o.target,e)},delegateType:t},s.event.special[t]={setup:function(){var o=this.ownerDocument||this.document||this,u=j.documentMode?this:o,c=B.get(u,t);c||(j.documentMode?this.addEventListener(t,n):o.addEventListener(e,n,!0)),B.set(u,t,(c||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,u=j.documentMode?this:o,c=B.get(u,t)-1;c?B.set(u,t,c):(j.documentMode?this.removeEventListener(t,n):o.removeEventListener(e,n,!0),B.remove(u,t))}}}),s.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){s.event.special[e]={delegateType:t,bindType:t,handle:function(n){var o,u=this,c=n.relatedTarget,d=n.handleObj;return(!c||c!==u&&!s.contains(u,c))&&(n.type=d.origType,o=d.handler.apply(this,arguments),n.type=t),o}}}),s.fn.extend({on:function(e,t,n,o){return Yr(this,e,t,n,o)},one:function(e,t,n,o){return Yr(this,e,t,n,o,1)},off:function(e,t,n){var o,u;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,s(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof e=="object"){for(u in e)this.off(u,t,e[u]);return this}return(t===!1||typeof t=="function")&&(n=t,t=void 0),n===!1&&(n=Bt),this.each(function(){s.event.remove(this,e,n,t)})}});var Qi=/<script|<style|<link/i,Ki=/checked\s*(?:[^=]|=\s*.checked.)/i,Zi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function qn(e,t){return J(e,"table")&&J(t.nodeType!==11?t:t.firstChild,"tr")&&s(e).children("tbody")[0]||e}function eo(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function to(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Un(e,t){var n,o,u,c,d,y,g;if(t.nodeType===1){if(B.hasData(e)&&(c=B.get(e),g=c.events,g)){B.remove(t,"handle events");for(u in g)for(n=0,o=g[u].length;n<o;n++)s.event.add(t,u,g[u][n])}_e.hasData(e)&&(d=_e.access(e),y=s.extend({},d),_e.set(t,y))}}function ro(e,t){var n=t.nodeName.toLowerCase();n==="input"&&rr.test(e.type)?t.checked=e.checked:(n==="input"||n==="textarea")&&(t.defaultValue=e.defaultValue)}function Ht(e,t,n,o){t=m(t);var u,c,d,y,g,v,$=0,P=e.length,C=P-1,D=t[0],W=N(D);if(W||P>1&&typeof D=="string"&&!M.checkClone&&Ki.test(D))return e.each(function(oe){var Q=e.eq(oe);W&&(t[0]=D.call(this,oe,Q.html())),Ht(Q,t,n,o)});if(P&&(u=Bn(t,e[0].ownerDocument,!1,e,o),c=u.firstChild,u.childNodes.length===1&&(u=c),c||o)){for(d=s.map(Me(u,"script"),eo),y=d.length;$<P;$++)g=u,$!==C&&(g=s.clone(g,!0,!0),y&&s.merge(d,Me(g,"script"))),n.call(e[$],g,$);if(y)for(v=d[d.length-1].ownerDocument,s.map(d,to),$=0;$<y;$++)g=d[$],zn.test(g.type||"")&&!B.access(g,"globalEval")&&s.contains(v,g)&&(g.src&&(g.type||"").toLowerCase()!=="module"?s._evalUrl&&!g.noModule&&s._evalUrl(g.src,{nonce:g.nonce||g.getAttribute("nonce")},v):re(g.textContent.replace(Zi,""),g,v))}return e}function Vn(e,t,n){for(var o,u=t?s.filter(t,e):e,c=0;(o=u[c])!=null;c++)!n&&o.nodeType===1&&s.cleanData(Me(o)),o.parentNode&&(n&&It(o)&&Gr(Me(o,"script")),o.parentNode.removeChild(o));return e}s.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var o,u,c,d,y=e.cloneNode(!0),g=It(e);if(!M.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!s.isXMLDoc(e))for(d=Me(y),c=Me(e),o=0,u=c.length;o<u;o++)ro(c[o],d[o]);if(t)if(n)for(c=c||Me(e),d=d||Me(y),o=0,u=c.length;o<u;o++)Un(c[o],d[o]);else Un(e,y);return d=Me(y,"script"),d.length>0&&Gr(d,!g&&Me(e,"script")),y},cleanData:function(e){for(var t,n,o,u=s.event.special,c=0;(n=e[c])!==void 0;c++)if(Zt(n)){if(t=n[B.expando]){if(t.events)for(o in t.events)u[o]?s.event.remove(n,o):s.removeEvent(n,o,t.handle);n[B.expando]=void 0}n[_e.expando]&&(n[_e.expando]=void 0)}}}),s.fn.extend({detach:function(e){return Vn(this,e,!0)},remove:function(e){return Vn(this,e)},text:function(e){return nt(this,function(t){return t===void 0?s.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=t)})},null,e,arguments.length)},append:function(){return Ht(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=qn(this,e);t.appendChild(e)}})},prepend:function(){return Ht(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=qn(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ht(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ht(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(s.cleanData(Me(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return s.clone(this,e,t)})},html:function(e){return nt(this,function(t){var n=this[0]||{},o=0,u=this.length;if(t===void 0&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!Qi.test(t)&&!Re[(jn.exec(t)||["",""])[1].toLowerCase()]){t=s.htmlPrefilter(t);try{for(;o<u;o++)n=this[o]||{},n.nodeType===1&&(s.cleanData(Me(n,!1)),n.innerHTML=t);n=0}catch{}}n&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Ht(this,arguments,function(t){var n=this.parentNode;s.inArray(this,e)<0&&(s.cleanData(Me(this)),n&&n.replaceChild(t,this))},e)}}),s.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){s.fn[e]=function(n){for(var o,u=[],c=s(n),d=c.length-1,y=0;y<=d;y++)o=y===d?this:this.clone(!0),s(c[y])[t](o),S.apply(u,o.get());return this.pushStack(u)}});var Xr=new RegExp("^("+Fn+")(?!px)[a-z%]+$","i"),Jr=/^--/,Sr=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=r),t.getComputedStyle(e)},Wn=function(e,t,n){var o,u,c={};for(u in t)c[u]=e.style[u],e.style[u]=t[u];o=n.call(e);for(u in t)e.style[u]=c[u];return o},no=new RegExp(it.join("|"),"i");(function(){function e(){if(v){g.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",v.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",xt.appendChild(g).appendChild(v);var $=r.getComputedStyle(v);n=$.top!=="1%",y=t($.marginLeft)===12,v.style.right="60%",c=t($.right)===36,o=t($.width)===36,v.style.position="absolute",u=t(v.offsetWidth/3)===12,xt.removeChild(g),v=null}}function t($){return Math.round(parseFloat($))}var n,o,u,c,d,y,g=j.createElement("div"),v=j.createElement("div");v.style&&(v.style.backgroundClip="content-box",v.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=v.style.backgroundClip==="content-box",s.extend(M,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),c},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),y},scrollboxSize:function(){return e(),u},reliableTrDimensions:function(){var $,P,C,D;return d==null&&($=j.createElement("table"),P=j.createElement("tr"),C=j.createElement("div"),$.style.cssText="position:absolute;left:-11111px;border-collapse:separate",P.style.cssText="box-sizing:content-box;border:1px solid",P.style.height="1px",C.style.height="9px",C.style.display="block",xt.appendChild($).appendChild(P).appendChild(C),D=r.getComputedStyle(P),d=parseInt(D.height,10)+parseInt(D.borderTopWidth,10)+parseInt(D.borderBottomWidth,10)===P.offsetHeight,xt.removeChild($)),d}}))})();function nr(e,t,n){var o,u,c,d,y=Jr.test(t),g=e.style;return n=n||Sr(e),n&&(d=n.getPropertyValue(t)||n[t],y&&d&&(d=d.replace($e,"$1")||void 0),d===""&&!It(e)&&(d=s.style(e,t)),!M.pixelBoxStyles()&&Xr.test(d)&&no.test(t)&&(o=g.width,u=g.minWidth,c=g.maxWidth,g.minWidth=g.maxWidth=g.width=d,d=n.width,g.width=o,g.minWidth=u,g.maxWidth=c)),d!==void 0?d+"":d}function Gn(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var Yn=["Webkit","Moz","ms"],Xn=j.createElement("div").style,Jn={};function io(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Yn.length;n--;)if(e=Yn[n]+t,e in Xn)return e}function Qr(e){var t=s.cssProps[e]||Jn[e];return t||(e in Xn?e:Jn[e]=io(e)||e)}var oo=/^(none|table(?!-c[ea]).+)/,so={position:"absolute",visibility:"hidden",display:"block"},Qn={letterSpacing:"0",fontWeight:"400"};function Kn(e,t,n){var o=tr.exec(t);return o?Math.max(0,o[2]-(n||0))+(o[3]||"px"):t}function Kr(e,t,n,o,u,c){var d=t==="width"?1:0,y=0,g=0,v=0;if(n===(o?"border":"content"))return 0;for(;d<4;d+=2)n==="margin"&&(v+=s.css(e,n+it[d],!0,u)),o?(n==="content"&&(g-=s.css(e,"padding"+it[d],!0,u)),n!=="margin"&&(g-=s.css(e,"border"+it[d]+"Width",!0,u))):(g+=s.css(e,"padding"+it[d],!0,u),n!=="padding"?g+=s.css(e,"border"+it[d]+"Width",!0,u):y+=s.css(e,"border"+it[d]+"Width",!0,u));return!o&&c>=0&&(g+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-c-g-y-.5))||0),g+v}function Zn(e,t,n){var o=Sr(e),u=!M.boxSizingReliable()||n,c=u&&s.css(e,"boxSizing",!1,o)==="border-box",d=c,y=nr(e,t,o),g="offset"+t[0].toUpperCase()+t.slice(1);if(Xr.test(y)){if(!n)return y;y="auto"}return(!M.boxSizingReliable()&&c||!M.reliableTrDimensions()&&J(e,"tr")||y==="auto"||!parseFloat(y)&&s.css(e,"display",!1,o)==="inline")&&e.getClientRects().length&&(c=s.css(e,"boxSizing",!1,o)==="border-box",d=g in e,d&&(y=e[g])),y=parseFloat(y)||0,y+Kr(e,t,n||(c?"border":"content"),d,o,y)+"px"}s.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nr(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,o){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var u,c,d,y=Ye(t),g=Jr.test(t),v=e.style;if(g||(t=Qr(y)),d=s.cssHooks[t]||s.cssHooks[y],n!==void 0){if(c=typeof n,c==="string"&&(u=tr.exec(n))&&u[1]&&(n=Rn(e,t,u),c="number"),n==null||n!==n)return;c==="number"&&!g&&(n+=u&&u[3]||(s.cssNumber[y]?"":"px")),!M.clearCloneStyle&&n===""&&t.indexOf("background")===0&&(v[t]="inherit"),(!d||!("set"in d)||(n=d.set(e,n,o))!==void 0)&&(g?v.setProperty(t,n):v[t]=n)}else return d&&"get"in d&&(u=d.get(e,!1,o))!==void 0?u:v[t]}},css:function(e,t,n,o){var u,c,d,y=Ye(t),g=Jr.test(t);return g||(t=Qr(y)),d=s.cssHooks[t]||s.cssHooks[y],d&&"get"in d&&(u=d.get(e,!0,n)),u===void 0&&(u=nr(e,t,o)),u==="normal"&&t in Qn&&(u=Qn[t]),n===""||n?(c=parseFloat(u),n===!0||isFinite(c)?c||0:u):u}}),s.each(["height","width"],function(e,t){s.cssHooks[t]={get:function(n,o,u){if(o)return oo.test(s.css(n,"display"))&&(!n.getClientRects().length||!n.getBoundingClientRect().width)?Wn(n,so,function(){return Zn(n,t,u)}):Zn(n,t,u)},set:function(n,o,u){var c,d=Sr(n),y=!M.scrollboxSize()&&d.position==="absolute",g=y||u,v=g&&s.css(n,"boxSizing",!1,d)==="border-box",$=u?Kr(n,t,u,v,d):0;return v&&y&&($-=Math.ceil(n["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(d[t])-Kr(n,t,"border",!1,d)-.5)),$&&(c=tr.exec(o))&&(c[3]||"px")!=="px"&&(n.style[t]=o,o=s.css(n,t)),Kn(n,o,$)}}}),s.cssHooks.marginLeft=Gn(M.reliableMarginLeft,function(e,t){if(t)return(parseFloat(nr(e,"marginLeft"))||e.getBoundingClientRect().left-Wn(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),s.each({margin:"",padding:"",border:"Width"},function(e,t){s.cssHooks[e+t]={expand:function(n){for(var o=0,u={},c=typeof n=="string"?n.split(" "):[n];o<4;o++)u[e+it[o]+t]=c[o]||c[o-2]||c[0];return u}},e!=="margin"&&(s.cssHooks[e+t].set=Kn)}),s.fn.extend({css:function(e,t){return nt(this,function(n,o,u){var c,d,y={},g=0;if(Array.isArray(o)){for(c=Sr(n),d=o.length;g<d;g++)y[o[g]]=s.css(n,o[g],!1,c);return y}return u!==void 0?s.style(n,o,u):s.css(n,o)},e,t,arguments.length>1)}});function Ee(e,t,n,o,u){return new Ee.prototype.init(e,t,n,o,u)}s.Tween=Ee,Ee.prototype={constructor:Ee,init:function(e,t,n,o,u,c){this.elem=e,this.prop=n,this.easing=u||s.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=c||(s.cssNumber[n]?"":"px")},cur:function(){var e=Ee.propHooks[this.prop];return e&&e.get?e.get(this):Ee.propHooks._default.get(this)},run:function(e){var t,n=Ee.propHooks[this.prop];return this.options.duration?this.pos=t=s.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ee.propHooks._default.set(this),this}},Ee.prototype.init.prototype=Ee.prototype,Ee.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=s.css(e.elem,e.prop,""),!t||t==="auto"?0:t)},set:function(e){s.fx.step[e.prop]?s.fx.step[e.prop](e):e.elem.nodeType===1&&(s.cssHooks[e.prop]||e.elem.style[Qr(e.prop)]!=null)?s.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ee.propHooks.scrollTop=Ee.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},s.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},s.fx=Ee.prototype.init,s.fx.step={};var qt,Dr,ao=/^(?:toggle|show|hide)$/,uo=/queueHooks$/;function Zr(){Dr&&(j.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(Zr):r.setTimeout(Zr,s.fx.interval),s.fx.tick())}function ei(){return r.setTimeout(function(){qt=void 0}),qt=Date.now()}function _r(e,t){var n,o=0,u={height:e};for(t=t?1:0;o<4;o+=2-t)n=it[o],u["margin"+n]=u["padding"+n]=e;return t&&(u.opacity=u.width=e),u}function ti(e,t,n){for(var o,u=(Be.tweeners[t]||[]).concat(Be.tweeners["*"]),c=0,d=u.length;c<d;c++)if(o=u[c].call(n,t,e))return o}function co(e,t,n){var o,u,c,d,y,g,v,$,P="width"in t||"height"in t,C=this,D={},W=e.style,oe=e.nodeType&&Ar(e),Q=B.get(e,"fxshow");n.queue||(d=s._queueHooks(e,"fx"),d.unqueued==null&&(d.unqueued=0,y=d.empty.fire,d.empty.fire=function(){d.unqueued||y()}),d.unqueued++,C.always(function(){C.always(function(){d.unqueued--,s.queue(e,"fx").length||d.empty.fire()})}));for(o in t)if(u=t[o],ao.test(u)){if(delete t[o],c=c||u==="toggle",u===(oe?"hide":"show"))if(u==="show"&&Q&&Q[o]!==void 0)oe=!0;else continue;D[o]=Q&&Q[o]||s.style(e,o)}if(g=!s.isEmptyObject(t),!(!g&&s.isEmptyObject(D))){P&&e.nodeType===1&&(n.overflow=[W.overflow,W.overflowX,W.overflowY],v=Q&&Q.display,v==null&&(v=B.get(e,"display")),$=s.css(e,"display"),$==="none"&&(v?$=v:(jt([e],!0),v=e.style.display||v,$=s.css(e,"display"),jt([e]))),($==="inline"||$==="inline-block"&&v!=null)&&s.css(e,"float")==="none"&&(g||(C.done(function(){W.display=v}),v==null&&($=W.display,v=$==="none"?"":$)),W.display="inline-block")),n.overflow&&(W.overflow="hidden",C.always(function(){W.overflow=n.overflow[0],W.overflowX=n.overflow[1],W.overflowY=n.overflow[2]})),g=!1;for(o in D)g||(Q?"hidden"in Q&&(oe=Q.hidden):Q=B.access(e,"fxshow",{display:v}),c&&(Q.hidden=!oe),oe&&jt([e],!0),C.done(function(){oe||jt([e]),B.remove(e,"fxshow");for(o in D)s.style(e,o,D[o])})),g=ti(oe?Q[o]:0,o,C),o in Q||(Q[o]=g.start,oe&&(g.end=g.start,g.start=0))}}function lo(e,t){var n,o,u,c,d;for(n in e)if(o=Ye(n),u=t[o],c=e[n],Array.isArray(c)&&(u=c[1],c=e[n]=c[0]),n!==o&&(e[o]=c,delete e[n]),d=s.cssHooks[o],d&&"expand"in d){c=d.expand(c),delete e[o];for(n in c)n in e||(e[n]=c[n],t[n]=u)}else t[o]=u}function Be(e,t,n){var o,u,c=0,d=Be.prefilters.length,y=s.Deferred().always(function(){delete g.elem}),g=function(){if(u)return!1;for(var P=qt||ei(),C=Math.max(0,v.startTime+v.duration-P),D=C/v.duration||0,W=1-D,oe=0,Q=v.tweens.length;oe<Q;oe++)v.tweens[oe].run(W);return y.notifyWith(e,[v,W,C]),W<1&&Q?C:(Q||y.notifyWith(e,[v,1,0]),y.resolveWith(e,[v]),!1)},v=y.promise({elem:e,props:s.extend({},t),opts:s.extend(!0,{specialEasing:{},easing:s.easing._default},n),originalProperties:t,originalOptions:n,startTime:qt||ei(),duration:n.duration,tweens:[],createTween:function(P,C){var D=s.Tween(e,v.opts,P,C,v.opts.specialEasing[P]||v.opts.easing);return v.tweens.push(D),D},stop:function(P){var C=0,D=P?v.tweens.length:0;if(u)return this;for(u=!0;C<D;C++)v.tweens[C].run(1);return P?(y.notifyWith(e,[v,1,0]),y.resolveWith(e,[v,P])):y.rejectWith(e,[v,P]),this}}),$=v.props;for(lo($,v.opts.specialEasing);c<d;c++)if(o=Be.prefilters[c].call(v,e,$,v.opts),o)return N(o.stop)&&(s._queueHooks(v.elem,v.opts.queue).stop=o.stop.bind(o)),o;return s.map($,ti,v),N(v.opts.start)&&v.opts.start.call(e,v),v.progress(v.opts.progress).done(v.opts.done,v.opts.complete).fail(v.opts.fail).always(v.opts.always),s.fx.timer(s.extend(g,{elem:e,anim:v,queue:v.opts.queue})),v}s.Animation=s.extend(Be,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return Rn(n.elem,e,tr.exec(t),n),n}]},tweener:function(e,t){N(e)?(t=e,e=["*"]):e=e.match(Fe);for(var n,o=0,u=e.length;o<u;o++)n=e[o],Be.tweeners[n]=Be.tweeners[n]||[],Be.tweeners[n].unshift(t)},prefilters:[co],prefilter:function(e,t){t?Be.prefilters.unshift(e):Be.prefilters.push(e)}}),s.speed=function(e,t,n){var o=e&&typeof e=="object"?s.extend({},e):{complete:n||!n&&t||N(e)&&e,duration:e,easing:n&&t||t&&!N(t)&&t};return s.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in s.fx.speeds?o.duration=s.fx.speeds[o.duration]:o.duration=s.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){N(o.old)&&o.old.call(this),o.queue&&s.dequeue(this,o.queue)},o},s.fn.extend({fadeTo:function(e,t,n,o){return this.filter(Ar).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var u=s.isEmptyObject(e),c=s.speed(t,n,o),d=function(){var y=Be(this,s.extend({},e),c);(u||B.get(this,"finish"))&&y.stop(!0)};return d.finish=d,u||c.queue===!1?this.each(d):this.queue(c.queue,d)},stop:function(e,t,n){var o=function(u){var c=u.stop;delete u.stop,c(n)};return typeof e!="string"&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var u=!0,c=e!=null&&e+"queueHooks",d=s.timers,y=B.get(this);if(c)y[c]&&y[c].stop&&o(y[c]);else for(c in y)y[c]&&y[c].stop&&uo.test(c)&&o(y[c]);for(c=d.length;c--;)d[c].elem===this&&(e==null||d[c].queue===e)&&(d[c].anim.stop(n),u=!1,d.splice(c,1));(u||!n)&&s.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=B.get(this),o=n[e+"queue"],u=n[e+"queueHooks"],c=s.timers,d=o?o.length:0;for(n.finish=!0,s.queue(this,e,[]),u&&u.stop&&u.stop.call(this,!0),t=c.length;t--;)c[t].elem===this&&c[t].queue===e&&(c[t].anim.stop(!0),c.splice(t,1));for(t=0;t<d;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete n.finish})}}),s.each(["toggle","show","hide"],function(e,t){var n=s.fn[t];s.fn[t]=function(o,u,c){return o==null||typeof o=="boolean"?n.apply(this,arguments):this.animate(_r(t,!0),o,u,c)}}),s.each({slideDown:_r("show"),slideUp:_r("hide"),slideToggle:_r("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){s.fn[e]=function(n,o,u){return this.animate(t,n,o,u)}}),s.timers=[],s.fx.tick=function(){var e,t=0,n=s.timers;for(qt=Date.now();t<n.length;t++)e=n[t],!e()&&n[t]===e&&n.splice(t--,1);n.length||s.fx.stop(),qt=void 0},s.fx.timer=function(e){s.timers.push(e),s.fx.start()},s.fx.interval=13,s.fx.start=function(){Dr||(Dr=!0,Zr())},s.fx.stop=function(){Dr=null},s.fx.speeds={slow:600,fast:200,_default:400},s.fn.delay=function(e,t){return e=s.fx&&s.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(n,o){var u=r.setTimeout(n,e);o.stop=function(){r.clearTimeout(u)}})},function(){var e=j.createElement("input"),t=j.createElement("select"),n=t.appendChild(j.createElement("option"));e.type="checkbox",M.checkOn=e.value!=="",M.optSelected=n.selected,e=j.createElement("input"),e.value="t",e.type="radio",M.radioValue=e.value==="t"}();var ri,ir=s.expr.attrHandle;s.fn.extend({attr:function(e,t){return nt(this,s.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){s.removeAttr(this,e)})}}),s.extend({attr:function(e,t,n){var o,u,c=e.nodeType;if(!(c===3||c===8||c===2)){if(typeof e.getAttribute>"u")return s.prop(e,t,n);if((c!==1||!s.isXMLDoc(e))&&(u=s.attrHooks[t.toLowerCase()]||(s.expr.match.bool.test(t)?ri:void 0)),n!==void 0){if(n===null){s.removeAttr(e,t);return}return u&&"set"in u&&(o=u.set(e,n,t))!==void 0?o:(e.setAttribute(t,n+""),n)}return u&&"get"in u&&(o=u.get(e,t))!==null?o:(o=s.find.attr(e,t),o??void 0)}},attrHooks:{type:{set:function(e,t){if(!M.radioValue&&t==="radio"&&J(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,o=0,u=t&&t.match(Fe);if(u&&e.nodeType===1)for(;n=u[o++];)e.removeAttribute(n)}}),ri={set:function(e,t,n){return t===!1?s.removeAttr(e,n):e.setAttribute(n,n),n}},s.each(s.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ir[t]||s.find.attr;ir[t]=function(o,u,c){var d,y,g=u.toLowerCase();return c||(y=ir[g],ir[g]=d,d=n(o,u,c)!=null?g:null,ir[g]=y),d}});var fo=/^(?:input|select|textarea|button)$/i,ho=/^(?:a|area)$/i;s.fn.extend({prop:function(e,t){return nt(this,s.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[s.propFix[e]||e]})}}),s.extend({prop:function(e,t,n){var o,u,c=e.nodeType;if(!(c===3||c===8||c===2))return(c!==1||!s.isXMLDoc(e))&&(t=s.propFix[t]||t,u=s.propHooks[t]),n!==void 0?u&&"set"in u&&(o=u.set(e,n,t))!==void 0?o:e[t]=n:u&&"get"in u&&(o=u.get(e,t))!==null?o:e[t]},propHooks:{tabIndex:{get:function(e){var t=s.find.attr(e,"tabindex");return t?parseInt(t,10):fo.test(e.nodeName)||ho.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(s.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),s.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){s.propFix[this.toLowerCase()]=this});function Ct(e){var t=e.match(Fe)||[];return t.join(" ")}function wt(e){return e.getAttribute&&e.getAttribute("class")||""}function en(e){return Array.isArray(e)?e:typeof e=="string"?e.match(Fe)||[]:[]}s.fn.extend({addClass:function(e){var t,n,o,u,c,d;return N(e)?this.each(function(y){s(this).addClass(e.call(this,y,wt(this)))}):(t=en(e),t.length?this.each(function(){if(o=wt(this),n=this.nodeType===1&&" "+Ct(o)+" ",n){for(c=0;c<t.length;c++)u=t[c],n.indexOf(" "+u+" ")<0&&(n+=u+" ");d=Ct(n),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(e){var t,n,o,u,c,d;return N(e)?this.each(function(y){s(this).removeClass(e.call(this,y,wt(this)))}):arguments.length?(t=en(e),t.length?this.each(function(){if(o=wt(this),n=this.nodeType===1&&" "+Ct(o)+" ",n){for(c=0;c<t.length;c++)for(u=t[c];n.indexOf(" "+u+" ")>-1;)n=n.replace(" "+u+" "," ");d=Ct(n),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(e,t){var n,o,u,c,d=typeof e,y=d==="string"||Array.isArray(e);return N(e)?this.each(function(g){s(this).toggleClass(e.call(this,g,wt(this),t),t)}):typeof t=="boolean"&&y?t?this.addClass(e):this.removeClass(e):(n=en(e),this.each(function(){if(y)for(c=s(this),u=0;u<n.length;u++)o=n[u],c.hasClass(o)?c.removeClass(o):c.addClass(o);else(e===void 0||d==="boolean")&&(o=wt(this),o&&B.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||e===!1?"":B.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,o=0;for(t=" "+e+" ";n=this[o++];)if(n.nodeType===1&&(" "+Ct(wt(n))+" ").indexOf(t)>-1)return!0;return!1}});var po=/\r/g;s.fn.extend({val:function(e){var t,n,o,u=this[0];return arguments.length?(o=N(e),this.each(function(c){var d;this.nodeType===1&&(o?d=e.call(this,c,s(this).val()):d=e,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=s.map(d,function(y){return y==null?"":y+""})),t=s.valHooks[this.type]||s.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||t.set(this,d,"value")===void 0)&&(this.value=d))})):u?(t=s.valHooks[u.type]||s.valHooks[u.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(u,"value"))!==void 0?n:(n=u.value,typeof n=="string"?n.replace(po,""):n??"")):void 0}}),s.extend({valHooks:{option:{get:function(e){var t=s.find.attr(e,"value");return t??Ct(s.text(e))}},select:{get:function(e){var t,n,o,u=e.options,c=e.selectedIndex,d=e.type==="select-one",y=d?null:[],g=d?c+1:u.length;for(c<0?o=g:o=d?c:0;o<g;o++)if(n=u[o],(n.selected||o===c)&&!n.disabled&&(!n.parentNode.disabled||!J(n.parentNode,"optgroup"))){if(t=s(n).val(),d)return t;y.push(t)}return y},set:function(e,t){for(var n,o,u=e.options,c=s.makeArray(t),d=u.length;d--;)o=u[d],(o.selected=s.inArray(s.valHooks.option.get(o),c)>-1)&&(n=!0);return n||(e.selectedIndex=-1),c}}}}),s.each(["radio","checkbox"],function(){s.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=s.inArray(s(e).val(),t)>-1}},M.checkOn||(s.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var or=r.location,ni={guid:Date.now()},tn=/\?/;s.parseXML=function(e){var t,n;if(!e||typeof e!="string")return null;try{t=new r.DOMParser().parseFromString(e,"text/xml")}catch{}return n=t&&t.getElementsByTagName("parsererror")[0],(!t||n)&&s.error("Invalid XML: "+(n?s.map(n.childNodes,function(o){return o.textContent}).join(`
`):e)),t};var ii=/^(?:focusinfocus|focusoutblur)$/,oi=function(e){e.stopPropagation()};s.extend(s.event,{trigger:function(e,t,n,o){var u,c,d,y,g,v,$,P,C=[n||j],D=L.call(e,"type")?e.type:e,W=L.call(e,"namespace")?e.namespace.split("."):[];if(c=P=d=n=n||j,!(n.nodeType===3||n.nodeType===8)&&!ii.test(D+s.event.triggered)&&(D.indexOf(".")>-1&&(W=D.split("."),D=W.shift(),W.sort()),g=D.indexOf(":")<0&&"on"+D,e=e[s.expando]?e:new s.Event(D,typeof e=="object"&&e),e.isTrigger=o?2:3,e.namespace=W.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+W.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=t==null?[e]:s.makeArray(t,[e]),$=s.event.special[D]||{},!(!o&&$.trigger&&$.trigger.apply(n,t)===!1))){if(!o&&!$.noBubble&&!ie(n)){for(y=$.delegateType||D,ii.test(y+D)||(c=c.parentNode);c;c=c.parentNode)C.push(c),d=c;d===(n.ownerDocument||j)&&C.push(d.defaultView||d.parentWindow||r)}for(u=0;(c=C[u++])&&!e.isPropagationStopped();)P=c,e.type=u>1?y:$.bindType||D,v=(B.get(c,"events")||Object.create(null))[e.type]&&B.get(c,"handle"),v&&v.apply(c,t),v=g&&c[g],v&&v.apply&&Zt(c)&&(e.result=v.apply(c,t),e.result===!1&&e.preventDefault());return e.type=D,!o&&!e.isDefaultPrevented()&&(!$._default||$._default.apply(C.pop(),t)===!1)&&Zt(n)&&g&&N(n[D])&&!ie(n)&&(d=n[g],d&&(n[g]=null),s.event.triggered=D,e.isPropagationStopped()&&P.addEventListener(D,oi),n[D](),e.isPropagationStopped()&&P.removeEventListener(D,oi),s.event.triggered=void 0,d&&(n[g]=d)),e.result}},simulate:function(e,t,n){var o=s.extend(new s.Event,n,{type:e,isSimulated:!0});s.event.trigger(o,null,t)}}),s.fn.extend({trigger:function(e,t){return this.each(function(){s.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return s.event.trigger(e,t,n,!0)}});var go=/\[\]$/,si=/\r?\n/g,yo=/^(?:submit|button|image|reset|file)$/i,mo=/^(?:input|select|textarea|keygen)/i;function rn(e,t,n,o){var u;if(Array.isArray(t))s.each(t,function(c,d){n||go.test(e)?o(e,d):rn(e+"["+(typeof d=="object"&&d!=null?c:"")+"]",d,n,o)});else if(!n&&pe(t)==="object")for(u in t)rn(e+"["+u+"]",t[u],n,o);else o(e,t)}s.param=function(e,t){var n,o=[],u=function(c,d){var y=N(d)?d():d;o[o.length]=encodeURIComponent(c)+"="+encodeURIComponent(y??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!s.isPlainObject(e))s.each(e,function(){u(this.name,this.value)});else for(n in e)rn(n,e[n],t,u);return o.join("&")},s.fn.extend({serialize:function(){return s.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=s.prop(this,"elements");return e?s.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!s(this).is(":disabled")&&mo.test(this.nodeName)&&!yo.test(e)&&(this.checked||!rr.test(e))}).map(function(e,t){var n=s(this).val();return n==null?null:Array.isArray(n)?s.map(n,function(o){return{name:t.name,value:o.replace(si,`\r
`)}}):{name:t.name,value:n.replace(si,`\r
`)}}).get()}});var bo=/%20/g,vo=/#.*$/,xo=/([?&])_=[^&]*/,Co=/^(.*?):[ \t]*([^\r\n]*)$/mg,wo=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,$o=/^(?:GET|HEAD)$/,To=/^\/\//,ai={},nn={},ui="*/".concat("*"),on=j.createElement("a");on.href=or.href;function ci(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var o,u=0,c=t.toLowerCase().match(Fe)||[];if(N(n))for(;o=c[u++];)o[0]==="+"?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(n)):(e[o]=e[o]||[]).push(n)}}function li(e,t,n,o){var u={},c=e===nn;function d(y){var g;return u[y]=!0,s.each(e[y]||[],function(v,$){var P=$(t,n,o);if(typeof P=="string"&&!c&&!u[P])return t.dataTypes.unshift(P),d(P),!1;if(c)return!(g=P)}),g}return d(t.dataTypes[0])||!u["*"]&&d("*")}function sn(e,t){var n,o,u=s.ajaxSettings.flatOptions||{};for(n in t)t[n]!==void 0&&((u[n]?e:o||(o={}))[n]=t[n]);return o&&s.extend(!0,e,o),e}function ko(e,t,n){for(var o,u,c,d,y=e.contents,g=e.dataTypes;g[0]==="*";)g.shift(),o===void 0&&(o=e.mimeType||t.getResponseHeader("Content-Type"));if(o){for(u in y)if(y[u]&&y[u].test(o)){g.unshift(u);break}}if(g[0]in n)c=g[0];else{for(u in n){if(!g[0]||e.converters[u+" "+g[0]]){c=u;break}d||(d=u)}c=c||d}if(c)return c!==g[0]&&g.unshift(c),n[c]}function Ao(e,t,n,o){var u,c,d,y,g,v={},$=e.dataTypes.slice();if($[1])for(d in e.converters)v[d.toLowerCase()]=e.converters[d];for(c=$.shift();c;)if(e.responseFields[c]&&(n[e.responseFields[c]]=t),!g&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),g=c,c=$.shift(),c){if(c==="*")c=g;else if(g!=="*"&&g!==c){if(d=v[g+" "+c]||v["* "+c],!d){for(u in v)if(y=u.split(" "),y[1]===c&&(d=v[g+" "+y[0]]||v["* "+y[0]],d)){d===!0?d=v[u]:v[u]!==!0&&(c=y[0],$.unshift(y[1]));break}}if(d!==!0)if(d&&e.throws)t=d(t);else try{t=d(t)}catch(P){return{state:"parsererror",error:d?P:"No conversion from "+g+" to "+c}}}}return{state:"success",data:t}}s.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:or.href,type:"GET",isLocal:wo.test(or.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ui,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":s.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?sn(sn(e,s.ajaxSettings),t):sn(s.ajaxSettings,e)},ajaxPrefilter:ci(ai),ajaxTransport:ci(nn),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var n,o,u,c,d,y,g,v,$,P,C=s.ajaxSetup({},t),D=C.context||C,W=C.context&&(D.nodeType||D.jquery)?s(D):s.event,oe=s.Deferred(),Q=s.Callbacks("once memory"),Te=C.statusCode||{},be={},Xe={},Je="canceled",ne={readyState:0,getResponseHeader:function(se){var ge;if(g){if(!c)for(c={};ge=Co.exec(u);)c[ge[1].toLowerCase()+" "]=(c[ge[1].toLowerCase()+" "]||[]).concat(ge[2]);ge=c[se.toLowerCase()+" "]}return ge==null?null:ge.join(", ")},getAllResponseHeaders:function(){return g?u:null},setRequestHeader:function(se,ge){return g==null&&(se=Xe[se.toLowerCase()]=Xe[se.toLowerCase()]||se,be[se]=ge),this},overrideMimeType:function(se){return g==null&&(C.mimeType=se),this},statusCode:function(se){var ge;if(se)if(g)ne.always(se[ne.status]);else for(ge in se)Te[ge]=[Te[ge],se[ge]];return this},abort:function(se){var ge=se||Je;return n&&n.abort(ge),$t(0,ge),this}};if(oe.promise(ne),C.url=((e||C.url||or.href)+"").replace(To,or.protocol+"//"),C.type=t.method||t.type||C.method||C.type,C.dataTypes=(C.dataType||"*").toLowerCase().match(Fe)||[""],C.crossDomain==null){y=j.createElement("a");try{y.href=C.url,y.href=y.href,C.crossDomain=on.protocol+"//"+on.host!=y.protocol+"//"+y.host}catch{C.crossDomain=!0}}if(C.data&&C.processData&&typeof C.data!="string"&&(C.data=s.param(C.data,C.traditional)),li(ai,C,t,ne),g)return ne;v=s.event&&C.global,v&&s.active++===0&&s.event.trigger("ajaxStart"),C.type=C.type.toUpperCase(),C.hasContent=!$o.test(C.type),o=C.url.replace(vo,""),C.hasContent?C.data&&C.processData&&(C.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(C.data=C.data.replace(bo,"+")):(P=C.url.slice(o.length),C.data&&(C.processData||typeof C.data=="string")&&(o+=(tn.test(o)?"&":"?")+C.data,delete C.data),C.cache===!1&&(o=o.replace(xo,"$1"),P=(tn.test(o)?"&":"?")+"_="+ni.guid+++P),C.url=o+P),C.ifModified&&(s.lastModified[o]&&ne.setRequestHeader("If-Modified-Since",s.lastModified[o]),s.etag[o]&&ne.setRequestHeader("If-None-Match",s.etag[o])),(C.data&&C.hasContent&&C.contentType!==!1||t.contentType)&&ne.setRequestHeader("Content-Type",C.contentType),ne.setRequestHeader("Accept",C.dataTypes[0]&&C.accepts[C.dataTypes[0]]?C.accepts[C.dataTypes[0]]+(C.dataTypes[0]!=="*"?", "+ui+"; q=0.01":""):C.accepts["*"]);for($ in C.headers)ne.setRequestHeader($,C.headers[$]);if(C.beforeSend&&(C.beforeSend.call(D,ne,C)===!1||g))return ne.abort();if(Je="abort",Q.add(C.complete),ne.done(C.success),ne.fail(C.error),n=li(nn,C,t,ne),!n)$t(-1,"No Transport");else{if(ne.readyState=1,v&&W.trigger("ajaxSend",[ne,C]),g)return ne;C.async&&C.timeout>0&&(d=r.setTimeout(function(){ne.abort("timeout")},C.timeout));try{g=!1,n.send(be,$t)}catch(se){if(g)throw se;$t(-1,se)}}function $t(se,ge,ar,un){var Qe,ur,Ke,ft,dt,Ie=ge;g||(g=!0,d&&r.clearTimeout(d),n=void 0,u=un||"",ne.readyState=se>0?4:0,Qe=se>=200&&se<300||se===304,ar&&(ft=ko(C,ne,ar)),!Qe&&s.inArray("script",C.dataTypes)>-1&&s.inArray("json",C.dataTypes)<0&&(C.converters["text script"]=function(){}),ft=Ao(C,ft,ne,Qe),Qe?(C.ifModified&&(dt=ne.getResponseHeader("Last-Modified"),dt&&(s.lastModified[o]=dt),dt=ne.getResponseHeader("etag"),dt&&(s.etag[o]=dt)),se===204||C.type==="HEAD"?Ie="nocontent":se===304?Ie="notmodified":(Ie=ft.state,ur=ft.data,Ke=ft.error,Qe=!Ke)):(Ke=Ie,(se||!Ie)&&(Ie="error",se<0&&(se=0))),ne.status=se,ne.statusText=(ge||Ie)+"",Qe?oe.resolveWith(D,[ur,Ie,ne]):oe.rejectWith(D,[ne,Ie,Ke]),ne.statusCode(Te),Te=void 0,v&&W.trigger(Qe?"ajaxSuccess":"ajaxError",[ne,C,Qe?ur:Ke]),Q.fireWith(D,[ne,Ie]),v&&(W.trigger("ajaxComplete",[ne,C]),--s.active||s.event.trigger("ajaxStop")))}return ne},getJSON:function(e,t,n){return s.get(e,t,n,"json")},getScript:function(e,t){return s.get(e,void 0,t,"script")}}),s.each(["get","post"],function(e,t){s[t]=function(n,o,u,c){return N(o)&&(c=c||u,u=o,o=void 0),s.ajax(s.extend({url:n,type:t,dataType:c,data:o,success:u},s.isPlainObject(n)&&n))}}),s.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),s._evalUrl=function(e,t,n){return s.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){s.globalEval(o,t,n)}})},s.fn.extend({wrapAll:function(e){var t;return this[0]&&(N(e)&&(e=e.call(this[0])),t=s(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(e){return N(e)?this.each(function(t){s(this).wrapInner(e.call(this,t))}):this.each(function(){var t=s(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=N(e);return this.each(function(n){s(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){s(this).replaceWith(this.childNodes)}),this}}),s.expr.pseudos.hidden=function(e){return!s.expr.pseudos.visible(e)},s.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},s.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var Po={0:200,1223:204},sr=s.ajaxSettings.xhr();M.cors=!!sr&&"withCredentials"in sr,M.ajax=sr=!!sr,s.ajaxTransport(function(e){var t,n;if(M.cors||sr&&!e.crossDomain)return{send:function(o,u){var c,d=e.xhr();if(d.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(c in e.xhrFields)d[c]=e.xhrFields[c];e.mimeType&&d.overrideMimeType&&d.overrideMimeType(e.mimeType),!e.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(c in o)d.setRequestHeader(c,o[c]);t=function(y){return function(){t&&(t=n=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,y==="abort"?d.abort():y==="error"?typeof d.status!="number"?u(0,"error"):u(d.status,d.statusText):u(Po[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=t(),n=d.onerror=d.ontimeout=t("error"),d.onabort!==void 0?d.onabort=n:d.onreadystatechange=function(){d.readyState===4&&r.setTimeout(function(){t&&n()})},t=t("abort");try{d.send(e.hasContent&&e.data||null)}catch(y){if(t)throw y}},abort:function(){t&&t()}}}),s.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),s.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return s.globalEval(e),e}}}),s.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),s.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(o,u){t=s("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(c){t.remove(),n=null,c&&u(c.type==="error"?404:200,c.type)}),j.head.appendChild(t[0])},abort:function(){n&&n()}}}});var fi=[],an=/(=)\?(?=&|$)|\?\?/;s.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=fi.pop()||s.expando+"_"+ni.guid++;return this[e]=!0,e}}),s.ajaxPrefilter("json jsonp",function(e,t,n){var o,u,c,d=e.jsonp!==!1&&(an.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&an.test(e.data)&&"data");if(d||e.dataTypes[0]==="jsonp")return o=e.jsonpCallback=N(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,d?e[d]=e[d].replace(an,"$1"+o):e.jsonp!==!1&&(e.url+=(tn.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return c||s.error(o+" was not called"),c[0]},e.dataTypes[0]="json",u=r[o],r[o]=function(){c=arguments},n.always(function(){u===void 0?s(r).removeProp(o):r[o]=u,e[o]&&(e.jsonpCallback=t.jsonpCallback,fi.push(o)),c&&N(u)&&u(c[0]),c=u=void 0}),"script"}),M.createHTMLDocument=function(){var e=j.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),s.parseHTML=function(e,t,n){if(typeof e!="string")return[];typeof t=="boolean"&&(n=t,t=!1);var o,u,c;return t||(M.createHTMLDocument?(t=j.implementation.createHTMLDocument(""),o=t.createElement("base"),o.href=j.location.href,t.head.appendChild(o)):t=j),u=Ft.exec(e),c=!n&&[],u?[t.createElement(u[1])]:(u=Bn([e],t,c),c&&c.length&&s(c).remove(),s.merge([],u.childNodes))},s.fn.load=function(e,t,n){var o,u,c,d=this,y=e.indexOf(" ");return y>-1&&(o=Ct(e.slice(y)),e=e.slice(0,y)),N(t)?(n=t,t=void 0):t&&typeof t=="object"&&(u="POST"),d.length>0&&s.ajax({url:e,type:u||"GET",dataType:"html",data:t}).done(function(g){c=arguments,d.html(o?s("<div>").append(s.parseHTML(g)).find(o):g)}).always(n&&function(g,v){d.each(function(){n.apply(this,c||[g.responseText,v,g])})}),this},s.expr.pseudos.animated=function(e){return s.grep(s.timers,function(t){return e===t.elem}).length},s.offset={setOffset:function(e,t,n){var o,u,c,d,y,g,v,$=s.css(e,"position"),P=s(e),C={};$==="static"&&(e.style.position="relative"),y=P.offset(),c=s.css(e,"top"),g=s.css(e,"left"),v=($==="absolute"||$==="fixed")&&(c+g).indexOf("auto")>-1,v?(o=P.position(),d=o.top,u=o.left):(d=parseFloat(c)||0,u=parseFloat(g)||0),N(t)&&(t=t.call(e,n,s.extend({},y))),t.top!=null&&(C.top=t.top-y.top+d),t.left!=null&&(C.left=t.left-y.left+u),"using"in t?t.using.call(e,C):P.css(C)}},s.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(u){s.offset.setOffset(this,e,u)});var t,n,o=this[0];if(o)return o.getClientRects().length?(t=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,o=this[0],u={top:0,left:0};if(s.css(o,"position")==="fixed")t=o.getBoundingClientRect();else{for(t=this.offset(),n=o.ownerDocument,e=o.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&s.css(e,"position")==="static";)e=e.parentNode;e&&e!==o&&e.nodeType===1&&(u=s(e).offset(),u.top+=s.css(e,"borderTopWidth",!0),u.left+=s.css(e,"borderLeftWidth",!0))}return{top:t.top-u.top-s.css(o,"marginTop",!0),left:t.left-u.left-s.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&s.css(e,"position")==="static";)e=e.offsetParent;return e||xt})}}),s.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=t==="pageYOffset";s.fn[e]=function(o){return nt(this,function(u,c,d){var y;if(ie(u)?y=u:u.nodeType===9&&(y=u.defaultView),d===void 0)return y?y[t]:u[c];y?y.scrollTo(n?y.pageXOffset:d,n?d:y.pageYOffset):u[c]=d},e,o,arguments.length)}}),s.each(["top","left"],function(e,t){s.cssHooks[t]=Gn(M.pixelPosition,function(n,o){if(o)return o=nr(n,t),Xr.test(o)?s(n).position()[t]+"px":o})}),s.each({Height:"height",Width:"width"},function(e,t){s.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){s.fn[o]=function(u,c){var d=arguments.length&&(n||typeof u!="boolean"),y=n||(u===!0||c===!0?"margin":"border");return nt(this,function(g,v,$){var P;return ie(g)?o.indexOf("outer")===0?g["inner"+e]:g.document.documentElement["client"+e]:g.nodeType===9?(P=g.documentElement,Math.max(g.body["scroll"+e],P["scroll"+e],g.body["offset"+e],P["offset"+e],P["client"+e])):$===void 0?s.css(g,v,y):s.style(g,v,$,y)},t,d?u:void 0,d)}})}),s.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){s.fn[t]=function(n){return this.on(t,n)}}),s.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){s.fn[t]=function(n,o){return arguments.length>0?this.on(t,null,n,o):this.trigger(t)}});var So=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;s.proxy=function(e,t){var n,o,u;if(typeof t=="string"&&(n=e[t],t=e,e=n),!!N(e))return o=p.call(arguments,2),u=function(){return e.apply(t||this,o.concat(p.call(arguments)))},u.guid=e.guid=e.guid||s.guid++,u},s.holdReady=function(e){e?s.readyWait++:s.ready(!0)},s.isArray=Array.isArray,s.parseJSON=JSON.parse,s.nodeName=J,s.isFunction=N,s.isWindow=ie,s.camelCase=Ye,s.type=pe,s.now=Date.now,s.isNumeric=function(e){var t=s.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},s.trim=function(e){return e==null?"":(e+"").replace(So,"$1")};var Do=r.jQuery,_o=r.$;return s.noConflict=function(e){return r.$===s&&(r.$=_o),e&&r.jQuery===s&&(r.jQuery=Do),s},typeof a>"u"&&(r.jQuery=r.$=s),s})}(Fr)),Fr.exports}var Fi=ls();const Pi=us(Fi);var fs=Object.getOwnPropertyDescriptor,Ri=(i,r,a,l)=>{for(var f=l>1?void 0:l?fs(r,a):r,p=i.length-1,m;p>=0;p--)(m=i[p])&&(f=m(f)||f);return f};let jr=class extends tt{constructor(){super(...arguments),this.handleSlotChange=i=>{(i?i.target:this.renderRoot.querySelector("slot")).assignedElements({flatten:!0}).forEach(l=>{l instanceof HTMLElement&&(l.addEventListener("mousedown",()=>{l.shadowRoot.querySelector("button div").style.paddingInline="1rem"}),l.addEventListener("mouseup",()=>{l.shadowRoot.querySelector("button div").style.paddingInline="0"}))})}}firstUpdated(){this.handleSlotChange()}render(){return Ae`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `}};jr.styles=[mt`
            .container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
        `];jr=Ri([Ue("mc-button-group")],jr);let xn=class extends jr{constructor(){super(),this.onslotchange=()=>{(async()=>{await this.updateComplete,this.resetRadius();for(let i=0;i<this.children.length;i++){const r=this.children[i],a=r.buttonElement;r.onUnToggled=()=>{console.log("untoggled"),this.resetRadius()},r.onToggled=()=>{console.log("toggled"),this.resetRadius(),Fi.map(this.children,l=>{l.selected=!1}),r.selected=!0,a.style.borderRadius=r.borderRadius.full[r.size]}}})(),this.handleSlotChange()}}resetRadius(){for(let i=0;i<this.children.length;i++){const r=this.children[i],a=r.buttonElement;a.style.borderRadius=r.borderRadius.square[r.size],i===0&&(a.style.borderTopLeftRadius=r.borderRadius.full[r.size],a.style.borderBottomLeftRadius=r.borderRadius.full[r.size]),i===this.children.length-1&&(a.style.borderTopRightRadius=r.borderRadius.full[r.size],a.style.borderBottomRightRadius=r.borderRadius.full[r.size])}}firstUpdated(){this.onslotchange()}};xn.styles=[mt`
            .container {
                display: flex;
                align-items: center;
                gap: 2px;
            }
        `];xn=Ri([Ue("mc-connected-button-group")],xn);const ds=mt`
    :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
        transition: 200ms;
    }

    .button {
        width: 100%;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 200ms;
        position: relative;
        cursor: pointer;
        min-height: 0;
        outline: none;
        border: none;
        box-shadow: var(--md-sys-elevation-level3);

        &[disabled] {
            cursor: default;
            background: transparent!important;
            color: rgba(var(--md-sys-color-on-surface), .38)!important;
            box-shadow: none!important;
        }
        
        &:hover{
            box-shadow: var(--md-sys-elevation-level4);
        }
    }

`,hs=mt`
    :host {
        max-height: 50vh;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
        transition: 200ms ease-in-out;
        overflow: hidden;
        display: flex;
        interpolate-size: allow-keywords;
    }

    .container {
        height: auto;
        max-height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 8px;
        overflow: visible;
    }

    .fabs {
        opacity: .4;
        overflow: scroll;
        transition: 200ms ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 4px;
        height: 0;
        interpolate-size: allow-keywords;
        padding: 0;


        &[open=true] {
            padding: 1rem;
            padding-bottom: 80px;
            opacity: 1;
            height: auto;
        }
    }

    .close-button {
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ps=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gs={CHILD:2},ys=i=>(...r)=>({_$litDirective$:i,values:r});class ms{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,a,l){this._$Ct=r,this._$AM=a,this._$Ci=l}_$AS(r,a){return this.update(r,a)}update(r,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hr=(i,r)=>{var l;const a=i._$AN;if(a===void 0)return!1;for(const f of a)(l=f._$AO)==null||l.call(f,r,!1),hr(f,r);return!0},zr=i=>{let r,a;do{if((r=i._$AM)===void 0)break;a=r._$AN,a.delete(i),i=r}while((a==null?void 0:a.size)===0)},Ii=i=>{for(let r;r=i._$AM;i=r){let a=r._$AN;if(a===void 0)r._$AN=a=new Set;else if(a.has(i))break;a.add(i),xs(r)}};function bs(i){this._$AN!==void 0?(zr(this),this._$AM=i,Ii(this)):this._$AM=i}function vs(i,r=!1,a=0){const l=this._$AH,f=this._$AN;if(f!==void 0&&f.size!==0)if(r)if(Array.isArray(l))for(let p=a;p<l.length;p++)hr(l[p],!1),zr(l[p]);else l!=null&&(hr(l,!1),zr(l));else hr(this,i)}const xs=i=>{i.type==gs.CHILD&&(i._$AP??(i._$AP=vs),i._$AQ??(i._$AQ=bs))};class Cs extends ms{constructor(){super(...arguments),this._$AN=void 0}_$AT(r,a,l){super._$AT(r,a,l),Ii(this),this.isConnected=r._$AU}_$AO(r,a=!0){var l,f;r!==this.isConnected&&(this.isConnected=r,r?(l=this.reconnected)==null||l.call(this):(f=this.disconnected)==null||f.call(this)),a&&(hr(this,r),zr(this))}setValue(r){if(ps(this._$Ct))this._$Ct._$AI(r,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=r,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ws=()=>new $s;class $s{}const vn=new WeakMap,Ts=ys(class extends Cs{render(i){return me}update(i,[r]){var l;const a=r!==this.G;return a&&this.G!==void 0&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=r,this.ht=(l=i.options)==null?void 0:l.host,this.rt(this.ct=i.element)),me}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const r=this.ht??globalThis;let a=vn.get(r);a===void 0&&(a=new WeakMap,vn.set(r,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,r;return typeof this.G=="function"?(i=vn.get(this.ht??globalThis))==null?void 0:i.get(this.G):(r=this.G)==null?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var ks=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Ve=(i,r,a,l)=>{for(var f=l>1?void 0:l?As(r,a):r,p=i.length-1,m;p>=0;p--)(m=i[p])&&(f=(l?m(r,a,f):m(f))||f);return l&&f&&ks(r,a,f),f};let _t=class extends tt{constructor(){super(...arguments),this.size="medium",this.color="pc",this.disabled=!1,this.iconSize={small:24,medium:28,large:36},this.height={small:56,medium:80,large:96},this.borderRadius={small:16,medium:20,large:28},this.backgroundColor={p:"primary",s:"secondary",t:"tertiary",pc:"primary-container",sc:"secondary-container",tc:"tertiary-container"}}get buttonElement(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("button")}render(){return Ae`
            <style>
                .button {
                    width: ${this.height[this.size]}px !important;
                    height: ${this.height[this.size]}px !important;
                    background: rgba(var(--md-sys-color-${this.backgroundColor[this.color]}));
                    color: rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]}));
                    border-radius: ${this.borderRadius[this.size]}px;
                }
            </style>
            <button part="button" type="button" class="button" color=${this.color} size=${this.size}
                    ?disabled=${this.disabled}>
                <mc-icon size=${this.iconSize[this.size]}>
                    <slot></slot>
                </mc-icon>
                <mc-ripple color=${`on-${this.backgroundColor[this.color]}`} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};_t.styles=ds;Ve([le()],_t.prototype,"size",2);Ve([le()],_t.prototype,"color",2);Ve([le({type:Boolean})],_t.prototype,"disabled",2);_t=Ve([Ue("mc-fab")],_t);let Cn=class extends _t{constructor(){super(),this.icon="",this.fontSize={small:16,medium:22,large:24},this.lineHeight={small:24,medium:28,large:32},this.padding={small:[16,8],medium:[26,12],large:[28,16]}}render(){return Ae`
            <style>
                .button {
                    height: ${this.height[this.size]}px;
                    width: auto;
                    background: rgba(var(--md-sys-color-${this.backgroundColor[this.color]}));
                    color: rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]}));
                    border-radius: ${this.borderRadius[this.size]}px;
                    font-size: ${this.fontSize[this.size]}px;
                    line-height: ${this.lineHeight[this.size]}px;
                }

                .icon {
                    padding-left: ${this.padding[this.size][0]}px;
                    padding-right: ${this.padding[this.size][1]}px;
                }

                .label {
                    padding-right: ${this.borderRadius[this.size]}px
                }
            </style>
            <button part="button" type="button" class="button" color=${this.color} size=${this.size}
                    ?disabled=${this.disabled}>
                <mc-icon class="icon" size=${this.iconSize[this.size]} name=${this.icon}></mc-icon>
                <span class="label">
                        <slot></slot>
                    </span>
                <mc-ripple color=${`on-${this.backgroundColor[this.color]}`} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Ve([le()],Cn.prototype,"icon",2);Cn=Ve([Ue("mc-extended-fab")],Cn);let Mt=class extends tt{constructor(){super(...arguments),this.icon="",this.color="p",this.size="medium",this.open=!1,this.height={small:56,medium:80,large:96},this.closeButtonRef=ws(),this.onslotchange=()=>{(async()=>{await this.updateComplete;for(let i=0;i<this.children.length;i++){const r=this.children[i],a=r.buttonElement;r.color=`${this.color}c`,a.style.borderRadius=`${r.height[r.size]/2}px`,r.style.width="80%",r.onclick=()=>{this.clickHandler()}}})()}}firstUpdated(){this.onslotchange()}clickHandler(){this.open=!this.open;for(let i=this.children.length-1;i>=0;i--){const r=this.children[i],a=(this.children.length-i)*20+20;setTimeout(()=>{this.open?r.style.width="100%":r.style.width="60%"},a)}this.open?this.closeButtonRef.value.buttonElement.style.borderRadius="28px":this.closeButtonRef.value.buttonElement.style.borderRadius=null}render(){return Ae`
            <style>
                :host {
                    height: ${this.open?"unset":`${this.height[this.size]+32}px`};
                }

                .fabs {
                    width: ${this.open?"unset":`${this.height[this.size]+32}px`};
                }
            </style>
            <div class="container">
                <div class="fabs" open=${this.open}>
                    <slot></slot>
                </div>
                <mc-fab class="close-button" size=${this.open?"small":this.size} color=${this.color}
                        @click=${this.clickHandler} ${Ts(this.closeButtonRef)}>
                    ${this.open?"close":this.icon}
                </mc-fab>
            </div>
        `}};Mt.styles=hs;Ve([le()],Mt.prototype,"icon",2);Ve([le()],Mt.prototype,"color",2);Ve([le()],Mt.prototype,"size",2);Ve([le()],Mt.prototype,"open",2);Mt=Ve([Ue("mc-fab-menu")],Mt);var Ps=Object.defineProperty,Ss=Object.getOwnPropertyDescriptor,Dn=(i,r,a,l)=>{for(var f=l>1?void 0:l?Ss(r,a):r,p=i.length-1,m;p>=0;p--)(m=i[p])&&(f=(l?m(r,a,f):m(f))||f);return l&&f&&Ps(r,a,f),f};let br=class extends tt{constructor(){super(...arguments),this.size=24}render(){return Ae`
            <style>
                :host {
                    width: ${this.size}px;
                    height: ${this.size}px;
                }

                .icon {
                    font-size: ${this.size}px;
                    line-height: ${this.size}px;
                }
            </style>
            <span class="icon">${this.name?this.name:Ae`<slot></slot>`}</span>
        `}};br.styles=mt`
        :host,
                * {
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                    -webkit-user-select: none;
                    -webkit-user-drag: none;
                    -webkit-touch-callout: none;
                }

                .icon {
                    font-family: "Material Symbols Outlined";
                    -webkit-user-select: none;
                    user-select: none;
                }
    `;Dn([le()],br.prototype,"name",2);Dn([le({type:Number})],br.prototype,"size",2);br=Dn([Ue("mc-icon")],br);const Ds=mt`
    :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
    }

    .button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 200ms;
        position: relative;
        cursor: pointer;
        min-height: 0;
        height: 40px;
        outline: none;
        border: none;

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 200ms;
            padding-inline: 0;
        }


        &[disabled] {
            cursor: default;
        }

        &[size=extraSmall] {
            font-size: 14px;
            height: 32px;
            max-width: 32px;
            border-radius: 16px;
            gap: 4px;

            &[selected] {
                border-radius: 12px;
            }

            &[shape=narrow] {
                max-width: 28px;
                width: 28px;
            }

            &[shape=wide] {
                max-width: 40px;
                width: 40px;
            }

            &:active {
                border-radius: 8px;
            }
        }

        &[size=small] {
            font-size: 14px;
            height: 40px;
            max-width: 40px;
            width: 40px;
            border-radius: 20px;
            gap: 8px;

            &[selected] {
                border-radius: 12px;
            }

            &[shape=narrow] {
                max-width: 32px;
                width: 32px;
            }

            &[shape=wide] {
                max-width: 52px;
                width: 52px;
            }


            &:active {
                border-radius: 8px;
            }
        }

        &[size=medium] {
            font-size: 16px;
            height: 56px;
            max-width: 56px;
            width: 56px;
            border-radius: 28px;
            gap: 8px;

            &[selected] {
                border-radius: 16px;
            }

            &[shape=narrow] {
                max-width: 48px;
                width: 48px;
            }

            &[shape=wide] {
                max-width: 72px;
                width: 72px;
            }


            &:active {
                border-radius: 12px;
            }
        }

        &[size=large] {
            font-size: 24px;
            height: 96px;
            max-width: 96px;
            width: 96px;
            border-radius: 48px;
            gap: 12px;

            &[selected] {
                border-radius: 28px;
            }

            &[shape=narrow] {
                max-width: 64px;
                width: 64px;
            }

            &[shape=wide] {
                max-width: 128px;
                width: 128px;
            }


            &:active {
                border-radius: 16px;
            }
        }

        &[size=extraLarge] {
            font-size: 36px;
            height: 136px;
            max-width: 136px;
            width: 136px;
            border-radius: 68px;
            gap: 16px;

            &[selected] {
                border-radius: 28px;
            }

            &[shape=narrow] {
                max-width: 104px;
                width: 104px;
            }

            &[shape=wide] {
                max-width: 184px;
                width: 184px;
            }

            &:active {
                border-radius: 16px;
            }
        }
        
        
        &[variant=elevated] {
            background: rgb(var(--md-sys-color-surface-variant));
            color: rgb(var(--md-sys-color-primary));
            box-shadow: var(--md-sys-elevation-level1);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-variant)), rgb(var(--md-sys-color-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level3);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-surface-container-low));
                color: rgb(var(--md-sys-color-primary));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-primary));
                color: rgb(var(--md-sys-color-on-primary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=filled] {
            background: rgb(var(--md-sys-color-primary));
            color: rgb(var(--md-sys-color-on-primary));

            &:hover {
                background: color-mix(in srgb-linear, rgb(var(--md-sys-color-primary)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-surface-container));
                color: rgb(var(--md-sys-color-on-surface-variant));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-primary));
                color: rgb(var(--md-sys-color-on-primary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=tonal] {
            background: rgb(var(--md-sys-color-secondary-container));
            color: rgb(var(--md-sys-color-on-secondary-container));

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-secondary-container)), rgb(var(--md-sys-color-on-secondary-container)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }

            &[toggle] {
                background: rgb(var(--md-sys-color-secondary-container));
                color: rgb(var(--md-sys-color-on-secondary-container));
            }

            &[selected] {
                background: rgb(var(--md-sys-color-secondary));
                color: rgb(var(--md-sys-color-on-secondary));
            }

            &[disabled] {
                background: rgba(var(--md-sys-color-on-surface), 10%);
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=outlined] {
            border: 1px solid rgb(var(--md-sys-color-outline));
            background: transparent;
            color: rgb(var(--md-sys-color-on-surface-variant));

            &:hover {
                background: rgba(var(--md-sys-color-on-surface-variant), .08);
            }


            &[selected] {
                background: rgb(var(--md-sys-color-inverse-surface));
                color: rgb(var(--md-sys-color-inverse-on-surface));
            }

            &[disabled] {
                background: transparent;
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }

        &[variant=standard] {
            background: transparent;
            color: rgb(var(--md-sys-color-primary));

            &:hover {
                background: rgba(var(--md-sys-color-primary), .08);
            }

            &[disabled] {
                background: transparent;
                color: rgba(var(--md-sys-color-on-surface), .38);
                box-shadow: none;
            }
        }
    }
`;var _s=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,vt=(i,r,a,l)=>{for(var f=l>1?void 0:l?Ms(r,a):r,p=i.length-1,m;p>=0;p--)(m=i[p])&&(f=(l?m(r,a,f):m(f))||f);return l&&f&&_s(r,a,f),f};let rt=class extends qe{constructor(){super(...arguments),this.disabled=!1,this.toggle=!1,this.selected=!1,this.shape="default",this.variant="filled",this.size="small",this.rippleColor={filled:"on-primary",elevated:"primary",tonal:"on-secondary-container",outlined:"on-surface-variant",standard:"on-background"},this.iconSize={extraSmall:20,small:24,medium:24,large:32,extraLarge:40}}get buttonElement(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("button")}render(){return Ae`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    <mc-icon size=${this.iconSize[this.size]}>
                        <slot></slot>
                    </mc-icon>
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};rt.styles=Ds;vt([le({type:Boolean})],rt.prototype,"disabled",2);vt([le({type:Boolean})],rt.prototype,"toggle",2);vt([le({type:Boolean})],rt.prototype,"selected",2);vt([le()],rt.prototype,"shape",2);vt([le()],rt.prototype,"variant",2);vt([le()],rt.prototype,"size",2);rt=vt([Ue("mc-icon-button")],rt);let Si=class extends rt{constructor(){super(),this.toggle=!0}render(){return Ae`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    ${this.selected?Ae`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot class="icon" name="selected"></slot>
                        </mc-icon>`:Ae`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot></slot>
                        </mc-icon>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Si=vt([Ue("mc-toggle-icon-button")],Si);var Es=Object.defineProperty,Os=Object.getOwnPropertyDescriptor,qr=(i,r,a,l)=>{for(var f=l>1?void 0:l?Os(r,a):r,p=i.length-1,m;p>=0;p--)(m=i[p])&&(f=(l?m(r,a,f):m(f))||f);return l&&f&&Es(r,a,f),f};let Jt=class extends tt{constructor(){super(...arguments),this.color="primary",this.opacity=.2,this.disabled=!1,this.currentRipple=null,this._onMouseDown=i=>{var m;if(this.disabled)return;const r=this.getBoundingClientRect(),a=Math.max(r.width,r.height),l=i.clientX-r.left-a/2,f=i.clientY-r.top-a/2,p=document.createElement("span");p.className="ripple",p.style.width=p.style.height=`${a}px`,p.style.left=`${l}px`,p.style.top=`${f}px`,p.style.backgroundColor=`rgb(var(--md-sys-color-${this.color}))`,p.style.boxShadow=`0 0 12px 8px rgb(var(--md-sys-color-${this.color}))`,p.style.opacity=`${this.opacity}`,(m=this.shadowRoot)==null||m.appendChild(p),requestAnimationFrame(()=>{p.classList.add("active")}),this.currentRipple=p},this._onMouseUp=()=>{if(!this.currentRipple)return;const i=this.currentRipple;i.style.opacity="0",i.addEventListener("transitionend",()=>{i.remove(),this.currentRipple===i&&(this.currentRipple=null)},{once:!0})}}render(){return Ae``}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("mouseup",this._onMouseUp),this.addEventListener("mouseleave",this._onMouseUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this._onMouseDown),this.removeEventListener("mouseup",this._onMouseUp)}};Jt.styles=mt`
        :host {
            position: absolute;
            inset: 0;
            border-radius: inherit;
            overflow: hidden;
            display: block;
        }

        .ripple {
            position: absolute;
            border-radius: 50%;
            transform: scale(0);
            transition: 600ms ease-out;

            &.active {
                transform: scale(4);
                opacity: 1;
            }
        }
    `;qr([le()],Jt.prototype,"color",2);qr([le()],Jt.prototype,"opacity",2);qr([le({type:Boolean})],Jt.prototype,"disabled",2);Jt=qr([Ue("mc-ripple")],Jt);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(i){return i<0?-1:i===0?0:1}function pr(i,r,a){return(1-a)*i+a*r}function Ns(i,r,a){return a<i?i:a>r?r:a}function Br(i,r,a){return a<i?i:a>r?r:a}function _n(i){return i=i%360,i<0&&(i=i+360),i}function Ls(i,r){return _n(r-i)<=180?1:-1}function Fs(i,r){return 180-Math.abs(Math.abs(i-r)-180)}function wn(i,r){const a=i[0]*r[0][0]+i[1]*r[0][1]+i[2]*r[0][2],l=i[0]*r[1][0]+i[1]*r[1][1]+i[2]*r[1][2],f=i[0]*r[2][0]+i[1]*r[2][1]+i[2]*r[2][2];return[a,l,f]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],Is=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],js=[95.047,100,108.883];function Mn(i,r,a){return(255<<24|(i&255)<<16|(r&255)<<8|a&255)>>>0}function Di(i){const r=St(i[0]),a=St(i[1]),l=St(i[2]);return Mn(r,a,l)}function zs(i){return i>>16&255}function Bs(i){return i>>8&255}function Hs(i){return i&255}function qs(i,r,a){const l=Is,f=l[0][0]*i+l[0][1]*r+l[0][2]*a,p=l[1][0]*i+l[1][1]*r+l[1][2]*a,m=l[2][0]*i+l[2][1]*r+l[2][2]*a,S=St(f),A=St(p),E=St(m);return Mn(S,A,E)}function Us(i){const r=Gt(zs(i)),a=Gt(Bs(i)),l=Gt(Hs(i));return wn([r,a,l],Rs)}function Vs(i){const r=gt(i),a=St(r);return Mn(a,a,a)}function $n(i){const r=Us(i)[1];return 116*ji(r/100)-16}function gt(i){return 100*Gs((i+16)/116)}function Tn(i){return ji(i/100)*116-16}function Gt(i){const r=i/255;return r<=.040449936?r/12.92*100:Math.pow((r+.055)/1.055,2.4)*100}function St(i){const r=i/100;let a=0;return r<=.0031308?a=r*12.92:a=1.055*Math.pow(r,1/2.4)-.055,Ns(0,255,Math.round(a*255))}function Ws(){return js}function ji(i){const r=.008856451679035631,a=24389/27;return i>r?Math.pow(i,1/3):(a*i+16)/116}function Gs(i){const r=.008856451679035631,a=24389/27,l=i*i*i;return l>r?l:(116*i-16)/a}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{static make(r=Ws(),a=200/Math.PI*gt(50)/100,l=50,f=2,p=!1){const m=r,S=m[0]*.401288+m[1]*.650173+m[2]*-.051461,A=m[0]*-.250268+m[1]*1.204414+m[2]*.045854,E=m[0]*-.002079+m[1]*.048952+m[2]*.953127,O=.8+f/10,L=O>=.9?pr(.59,.69,(O-.9)*10):pr(.525,.59,(O-.8)*10);let H=p?1:O*(1-1/3.6*Math.exp((-a-42)/92));H=H>1?1:H<0?0:H;const X=O,M=[H*(100/S)+1-H,H*(100/A)+1-H,H*(100/E)+1-H],N=1/(5*a+1),ie=N*N*N*N,j=1-ie,ce=ie*a+.1*j*j*Math.cbrt(5*a),re=gt(l)/r[1],pe=1.48+Math.sqrt(re),Z=.725/Math.pow(re,.2),ye=Z,s=[Math.pow(ce*M[0]*S/100,.42),Math.pow(ce*M[1]*A/100,.42),Math.pow(ce*M[2]*E/100,.42)],fe=[400*s[0]/(s[0]+27.13),400*s[1]/(s[1]+27.13),400*s[2]/(s[2]+27.13)],J=(2*fe[0]+fe[1]+.05*fe[2])*Z;return new et(re,J,Z,ye,L,X,M,ce,Math.pow(ce,.25),pe)}constructor(r,a,l,f,p,m,S,A,E,O){this.n=r,this.aw=a,this.nbb=l,this.ncb=f,this.c=p,this.nc=m,this.rgbD=S,this.fl=A,this.fLRoot=E,this.z=O}}et.DEFAULT=et.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(r,a,l,f,p,m,S,A,E){this.hue=r,this.chroma=a,this.j=l,this.q=f,this.m=p,this.s=m,this.jstar=S,this.astar=A,this.bstar=E}distance(r){const a=this.jstar-r.jstar,l=this.astar-r.astar,f=this.bstar-r.bstar,p=Math.sqrt(a*a+l*l+f*f);return 1.41*Math.pow(p,.63)}static fromInt(r){return Ce.fromIntInViewingConditions(r,et.DEFAULT)}static fromIntInViewingConditions(r,a){const l=(r&16711680)>>16,f=(r&65280)>>8,p=r&255,m=Gt(l),S=Gt(f),A=Gt(p),E=.41233895*m+.35762064*S+.18051042*A,O=.2126*m+.7152*S+.0722*A,L=.01932141*m+.11916382*S+.95034478*A,H=.401288*E+.650173*O-.051461*L,X=-.250268*E+1.204414*O+.045854*L,M=-.002079*E+.048952*O+.953127*L,N=a.rgbD[0]*H,ie=a.rgbD[1]*X,j=a.rgbD[2]*M,ce=Math.pow(a.fl*Math.abs(N)/100,.42),re=Math.pow(a.fl*Math.abs(ie)/100,.42),pe=Math.pow(a.fl*Math.abs(j)/100,.42),Z=Ne(N)*400*ce/(ce+27.13),ye=Ne(ie)*400*re/(re+27.13),s=Ne(j)*400*pe/(pe+27.13),fe=(11*Z+-12*ye+s)/11,J=(Z+ye-2*s)/9,de=(20*Z+20*ye+21*s)/20,ze=(40*Z+20*ye+s)/20,K=Math.atan2(J,fe)*180/Math.PI,$e=K<0?K+360:K>=360?K-360:K,Et=$e*Math.PI/180,Ot=ze*a.nbb,ve=100*Math.pow(Ot/a.aw,a.c*a.z),ct=4/a.c*Math.sqrt(ve/100)*(a.aw+4)*a.fLRoot,Ge=$e<20.14?$e+360:$e,Nt=.25*(Math.cos(Ge*Math.PI/180+2)+3.8),Ft=5e4/13*Nt*a.nc*a.ncb*Math.sqrt(fe*fe+J*J)/(de+.305),lt=Math.pow(Ft,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),Kt=lt*Math.sqrt(ve/100),Cr=Kt*a.fLRoot,Ur=50*Math.sqrt(lt*a.c/(a.aw+4)),Vr=(1+100*.007)*ve/(1+.007*ve),wr=1/.0228*Math.log(1+.0228*Cr),$r=wr*Math.cos(Et),Fe=wr*Math.sin(Et);return new Ce($e,Kt,ve,ct,Cr,Ur,Vr,$r,Fe)}static fromJch(r,a,l){return Ce.fromJchInViewingConditions(r,a,l,et.DEFAULT)}static fromJchInViewingConditions(r,a,l,f){const p=4/f.c*Math.sqrt(r/100)*(f.aw+4)*f.fLRoot,m=a*f.fLRoot,S=a/Math.sqrt(r/100),A=50*Math.sqrt(S*f.c/(f.aw+4)),E=l*Math.PI/180,O=(1+100*.007)*r/(1+.007*r),L=1/.0228*Math.log(1+.0228*m),H=L*Math.cos(E),X=L*Math.sin(E);return new Ce(l,a,r,p,m,A,O,H,X)}static fromUcs(r,a,l){return Ce.fromUcsInViewingConditions(r,a,l,et.DEFAULT)}static fromUcsInViewingConditions(r,a,l,f){const p=a,m=l,S=Math.sqrt(p*p+m*m),E=(Math.exp(S*.0228)-1)/.0228/f.fLRoot;let O=Math.atan2(m,p)*(180/Math.PI);O<0&&(O+=360);const L=r/(1-(r-100)*.007);return Ce.fromJchInViewingConditions(L,E,O,f)}toInt(){return this.viewed(et.DEFAULT)}viewed(r){const a=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),l=Math.pow(a/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),f=this.hue*Math.PI/180,p=.25*(Math.cos(f+2)+3.8),m=r.aw*Math.pow(this.j/100,1/r.c/r.z),S=p*(5e4/13)*r.nc*r.ncb,A=m/r.nbb,E=Math.sin(f),O=Math.cos(f),L=23*(A+.305)*l/(23*S+11*l*O+108*l*E),H=L*O,X=L*E,M=(460*A+451*H+288*X)/1403,N=(460*A-891*H-261*X)/1403,ie=(460*A-220*H-6300*X)/1403,j=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),ce=Ne(M)*(100/r.fl)*Math.pow(j,1/.42),re=Math.max(0,27.13*Math.abs(N)/(400-Math.abs(N))),pe=Ne(N)*(100/r.fl)*Math.pow(re,1/.42),Z=Math.max(0,27.13*Math.abs(ie)/(400-Math.abs(ie))),ye=Ne(ie)*(100/r.fl)*Math.pow(Z,1/.42),s=ce/r.rgbD[0],fe=pe/r.rgbD[1],J=ye/r.rgbD[2],de=1.86206786*s-1.01125463*fe+.14918677*J,ze=.38752654*s+.62144744*fe-.00897398*J,We=-.0158415*s-.03412294*fe+1.04996444*J;return qs(de,ze,We)}static fromXyzInViewingConditions(r,a,l,f){const p=.401288*r+.650173*a-.051461*l,m=-.250268*r+1.204414*a+.045854*l,S=-.002079*r+.048952*a+.953127*l,A=f.rgbD[0]*p,E=f.rgbD[1]*m,O=f.rgbD[2]*S,L=Math.pow(f.fl*Math.abs(A)/100,.42),H=Math.pow(f.fl*Math.abs(E)/100,.42),X=Math.pow(f.fl*Math.abs(O)/100,.42),M=Ne(A)*400*L/(L+27.13),N=Ne(E)*400*H/(H+27.13),ie=Ne(O)*400*X/(X+27.13),j=(11*M+-12*N+ie)/11,ce=(M+N-2*ie)/9,re=(20*M+20*N+21*ie)/20,pe=(40*M+20*N+ie)/20,ye=Math.atan2(ce,j)*180/Math.PI,s=ye<0?ye+360:ye>=360?ye-360:ye,fe=s*Math.PI/180,J=pe*f.nbb,de=100*Math.pow(J/f.aw,f.c*f.z),ze=4/f.c*Math.sqrt(de/100)*(f.aw+4)*f.fLRoot,We=s<20.14?s+360:s,K=1/4*(Math.cos(We*Math.PI/180+2)+3.8),Et=5e4/13*K*f.nc*f.ncb*Math.sqrt(j*j+ce*ce)/(re+.305),Ot=Math.pow(Et,.9)*Math.pow(1.64-Math.pow(.29,f.n),.73),ve=Ot*Math.sqrt(de/100),ct=ve*f.fLRoot,Ge=50*Math.sqrt(Ot*f.c/(f.aw+4)),Nt=(1+100*.007)*de/(1+.007*de),Lt=Math.log(1+.0228*ct)/.0228,Ft=Lt*Math.cos(fe),lt=Lt*Math.sin(fe);return new Ce(s,ve,de,ze,ct,Ge,Nt,Ft,lt)}xyzInViewingConditions(r){const a=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),l=Math.pow(a/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),f=this.hue*Math.PI/180,p=.25*(Math.cos(f+2)+3.8),m=r.aw*Math.pow(this.j/100,1/r.c/r.z),S=p*(5e4/13)*r.nc*r.ncb,A=m/r.nbb,E=Math.sin(f),O=Math.cos(f),L=23*(A+.305)*l/(23*S+11*l*O+108*l*E),H=L*O,X=L*E,M=(460*A+451*H+288*X)/1403,N=(460*A-891*H-261*X)/1403,ie=(460*A-220*H-6300*X)/1403,j=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),ce=Ne(M)*(100/r.fl)*Math.pow(j,1/.42),re=Math.max(0,27.13*Math.abs(N)/(400-Math.abs(N))),pe=Ne(N)*(100/r.fl)*Math.pow(re,1/.42),Z=Math.max(0,27.13*Math.abs(ie)/(400-Math.abs(ie))),ye=Ne(ie)*(100/r.fl)*Math.pow(Z,1/.42),s=ce/r.rgbD[0],fe=pe/r.rgbD[1],J=ye/r.rgbD[2],de=1.86206786*s-1.01125463*fe+.14918677*J,ze=.38752654*s+.62144744*fe-.00897398*J,We=-.0158415*s-.03412294*fe+1.04996444*J;return[de,ze,We]}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static sanitizeRadians(r){return(r+Math.PI*8)%(Math.PI*2)}static trueDelinearized(r){const a=r/100;let l=0;return a<=.0031308?l=a*12.92:l=1.055*Math.pow(a,1/2.4)-.055,l*255}static chromaticAdaptation(r){const a=Math.pow(Math.abs(r),.42);return Ne(r)*400*a/(a+27.13)}static hueOf(r){const a=wn(r,U.SCALED_DISCOUNT_FROM_LINRGB),l=U.chromaticAdaptation(a[0]),f=U.chromaticAdaptation(a[1]),p=U.chromaticAdaptation(a[2]),m=(11*l+-12*f+p)/11,S=(l+f-2*p)/9;return Math.atan2(S,m)}static areInCyclicOrder(r,a,l){const f=U.sanitizeRadians(a-r),p=U.sanitizeRadians(l-r);return f<p}static intercept(r,a,l){return(a-r)/(l-r)}static lerpPoint(r,a,l){return[r[0]+(l[0]-r[0])*a,r[1]+(l[1]-r[1])*a,r[2]+(l[2]-r[2])*a]}static setCoordinate(r,a,l,f){const p=U.intercept(r[f],a,l[f]);return U.lerpPoint(r,p,l)}static isBounded(r){return 0<=r&&r<=100}static nthVertex(r,a){const l=U.Y_FROM_LINRGB[0],f=U.Y_FROM_LINRGB[1],p=U.Y_FROM_LINRGB[2],m=a%4<=1?0:100,S=a%2===0?0:100;if(a<4){const A=m,E=S,O=(r-A*f-E*p)/l;return U.isBounded(O)?[O,A,E]:[-1,-1,-1]}else if(a<8){const A=m,E=S,O=(r-E*l-A*p)/f;return U.isBounded(O)?[E,O,A]:[-1,-1,-1]}else{const A=m,E=S,O=(r-A*l-E*f)/p;return U.isBounded(O)?[A,E,O]:[-1,-1,-1]}}static bisectToSegment(r,a){let l=[-1,-1,-1],f=l,p=0,m=0,S=!1,A=!0;for(let E=0;E<12;E++){const O=U.nthVertex(r,E);if(O[0]<0)continue;const L=U.hueOf(O);if(!S){l=O,f=O,p=L,m=L,S=!0;continue}(A||U.areInCyclicOrder(p,L,m))&&(A=!1,U.areInCyclicOrder(p,a,L)?(f=O,m=L):(l=O,p=L))}return[l,f]}static midpoint(r,a){return[(r[0]+a[0])/2,(r[1]+a[1])/2,(r[2]+a[2])/2]}static criticalPlaneBelow(r){return Math.floor(r-.5)}static criticalPlaneAbove(r){return Math.ceil(r-.5)}static bisectToLimit(r,a){const l=U.bisectToSegment(r,a);let f=l[0],p=U.hueOf(f),m=l[1];for(let S=0;S<3;S++)if(f[S]!==m[S]){let A=-1,E=255;f[S]<m[S]?(A=U.criticalPlaneBelow(U.trueDelinearized(f[S])),E=U.criticalPlaneAbove(U.trueDelinearized(m[S]))):(A=U.criticalPlaneAbove(U.trueDelinearized(f[S])),E=U.criticalPlaneBelow(U.trueDelinearized(m[S])));for(let O=0;O<8&&!(Math.abs(E-A)<=1);O++){const L=Math.floor((A+E)/2),H=U.CRITICAL_PLANES[L],X=U.setCoordinate(f,H,m,S),M=U.hueOf(X);U.areInCyclicOrder(p,a,M)?(m=X,E=L):(f=X,p=M,A=L)}}return U.midpoint(f,m)}static inverseChromaticAdaptation(r){const a=Math.abs(r),l=Math.max(0,27.13*a/(400-a));return Ne(r)*Math.pow(l,1/.42)}static findResultByJ(r,a,l){let f=Math.sqrt(l)*11;const p=et.DEFAULT,m=1/Math.pow(1.64-Math.pow(.29,p.n),.73),A=.25*(Math.cos(r+2)+3.8)*(5e4/13)*p.nc*p.ncb,E=Math.sin(r),O=Math.cos(r);for(let L=0;L<5;L++){const H=f/100,X=a===0||f===0?0:a/Math.sqrt(H),M=Math.pow(X*m,1/.9),ie=p.aw*Math.pow(H,1/p.c/p.z)/p.nbb,j=23*(ie+.305)*M/(23*A+11*M*O+108*M*E),ce=j*O,re=j*E,pe=(460*ie+451*ce+288*re)/1403,Z=(460*ie-891*ce-261*re)/1403,ye=(460*ie-220*ce-6300*re)/1403,s=U.inverseChromaticAdaptation(pe),fe=U.inverseChromaticAdaptation(Z),J=U.inverseChromaticAdaptation(ye),de=wn([s,fe,J],U.LINRGB_FROM_SCALED_DISCOUNT);if(de[0]<0||de[1]<0||de[2]<0)return 0;const ze=U.Y_FROM_LINRGB[0],We=U.Y_FROM_LINRGB[1],K=U.Y_FROM_LINRGB[2],$e=ze*de[0]+We*de[1]+K*de[2];if($e<=0)return 0;if(L===4||Math.abs($e-l)<.002)return de[0]>100.01||de[1]>100.01||de[2]>100.01?0:Di(de);f=f-($e-l)*f/(2*$e)}return 0}static solveToInt(r,a,l){if(a<1e-4||l<1e-4||l>99.9999)return Vs(l);r=_n(r);const f=r/180*Math.PI,p=gt(l),m=U.findResultByJ(f,a,p);if(m!==0)return m;const S=U.bisectToLimit(p,f);return Di(S)}static solveToCam(r,a,l){return Ce.fromInt(U.solveToInt(r,a,l))}}U.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];U.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];U.Y_FROM_LINRGB=[.2126,.7152,.0722];U.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static from(r,a,l){return new we(U.solveToInt(r,a,l))}static fromInt(r){return new we(r)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(r){this.setInternalState(U.solveToInt(r,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(r){this.setInternalState(U.solveToInt(this.internalHue,r,this.internalTone))}get tone(){return this.internalTone}set tone(r){this.setInternalState(U.solveToInt(this.internalHue,this.internalChroma,r))}constructor(r){this.argb=r;const a=Ce.fromInt(r);this.internalHue=a.hue,this.internalChroma=a.chroma,this.internalTone=$n(r),this.argb=r}setInternalState(r){const a=Ce.fromInt(r);this.internalHue=a.hue,this.internalChroma=a.chroma,this.internalTone=$n(r),this.argb=r}inViewingConditions(r){const l=Ce.fromInt(this.toInt()).xyzInViewingConditions(r),f=Ce.fromXyzInViewingConditions(l[0],l[1],l[2],et.make());return we.from(f.hue,f.chroma,Tn(l[1]))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{static harmonize(r,a){const l=we.fromInt(r),f=we.fromInt(a),p=Fs(l.hue,f.hue),m=Math.min(p*.5,15),S=_n(l.hue+m*Ls(l.hue,f.hue));return we.from(S,l.chroma,l.tone).toInt()}static hctHue(r,a,l){const f=En.cam16Ucs(r,a,l),p=Ce.fromInt(f),m=Ce.fromInt(r);return we.from(p.hue,m.chroma,$n(r)).toInt()}static cam16Ucs(r,a,l){const f=Ce.fromInt(r),p=Ce.fromInt(a),m=f.jstar,S=f.astar,A=f.bstar,E=p.jstar,O=p.astar,L=p.bstar,H=m+(E-m)*l,X=S+(O-S)*l,M=A+(L-A)*l;return Ce.fromUcs(H,X,M).toInt()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{static ratioOfTones(r,a){return r=Br(0,100,r),a=Br(0,100,a),xe.ratioOfYs(gt(r),gt(a))}static ratioOfYs(r,a){const l=r>a?r:a,f=l===a?r:a;return(l+5)/(f+5)}static lighter(r,a){if(r<0||r>100)return-1;const l=gt(r),f=a*(l+5)-5,p=xe.ratioOfYs(f,l),m=Math.abs(p-a);if(p<a&&m>.04)return-1;const S=Tn(f)+.4;return S<0||S>100?-1:S}static darker(r,a){if(r<0||r>100)return-1;const l=gt(r),f=(l+5)/a-5,p=xe.ratioOfYs(l,f),m=Math.abs(p-a);if(p<a&&m>.04)return-1;const S=Tn(f)-.4;return S<0||S>100?-1:S}static lighterUnsafe(r,a){const l=xe.lighter(r,a);return l<0?100:l}static darkerUnsafe(r,a){const l=xe.darker(r,a);return l<0?0:l}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{static isDisliked(r){const a=Math.round(r.hue)>=90&&Math.round(r.hue)<=111,l=Math.round(r.chroma)>16,f=Math.round(r.tone)<65;return a&&l&&f}static fixIfDisliked(r){return On.isDisliked(r)?we.from(r.hue,r.chroma,70):r}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{static fromPalette(r){return new I(r.name??"",r.palette,r.tone,r.isBackground??!1,r.background,r.secondBackground,r.contrastCurve,r.toneDeltaPair)}constructor(r,a,l,f,p,m,S,A){if(this.name=r,this.palette=a,this.tone=l,this.isBackground=f,this.background=p,this.secondBackground=m,this.contrastCurve=S,this.toneDeltaPair=A,this.hctCache=new Map,!p&&m)throw new Error(`Color ${r} has secondBackgrounddefined, but background is not defined.`);if(!p&&S)throw new Error(`Color ${r} has contrastCurvedefined, but background is not defined.`);if(p&&!S)throw new Error(`Color ${r} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(r){return this.getHct(r).toInt()}getHct(r){const a=this.hctCache.get(r);if(a!=null)return a;const l=this.getTone(r),f=this.palette(r).getHct(l);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(r,f),f}getTone(r){const a=r.contrastLevel<0;if(this.toneDeltaPair){const l=this.toneDeltaPair(r),f=l.roleA,p=l.roleB,m=l.delta,S=l.polarity,A=l.stayTogether,O=this.background(r).getTone(r),L=S==="nearer"||S==="lighter"&&!r.isDark||S==="darker"&&r.isDark,H=L?f:p,X=L?p:f,M=this.name===H.name,N=r.isDark?1:-1,ie=H.contrastCurve.get(r.contrastLevel),j=X.contrastCurve.get(r.contrastLevel),ce=H.tone(r);let re=xe.ratioOfTones(O,ce)>=ie?ce:I.foregroundTone(O,ie);const pe=X.tone(r);let Z=xe.ratioOfTones(O,pe)>=j?pe:I.foregroundTone(O,j);return a&&(re=I.foregroundTone(O,ie),Z=I.foregroundTone(O,j)),(Z-re)*N>=m||(Z=Br(0,100,re+m*N),(Z-re)*N>=m||(re=Br(0,100,Z-m*N))),50<=re&&re<60?N>0?(re=60,Z=Math.max(Z,re+m*N)):(re=49,Z=Math.min(Z,re+m*N)):50<=Z&&Z<60&&(A?N>0?(re=60,Z=Math.max(Z,re+m*N)):(re=49,Z=Math.min(Z,re+m*N)):N>0?Z=60:Z=49),M?re:Z}else{let l=this.tone(r);if(this.background==null)return l;const f=this.background(r).getTone(r),p=this.contrastCurve.get(r.contrastLevel);if(xe.ratioOfTones(f,l)>=p||(l=I.foregroundTone(f,p)),a&&(l=I.foregroundTone(f,p)),this.isBackground&&50<=l&&l<60&&(xe.ratioOfTones(49,f)>=p?l=49:l=60),this.secondBackground){const[m,S]=[this.background,this.secondBackground],[A,E]=[m(r).getTone(r),S(r).getTone(r)],[O,L]=[Math.max(A,E),Math.min(A,E)];if(xe.ratioOfTones(O,l)>=p&&xe.ratioOfTones(L,l)>=p)return l;const H=xe.lighter(O,p),X=xe.darker(L,p),M=[];return H!==-1&&M.push(H),X!==-1&&M.push(X),I.tonePrefersLightForeground(A)||I.tonePrefersLightForeground(E)?H<0?100:H:M.length===1?M[0]:X<0?0:X}return l}}static foregroundTone(r,a){const l=xe.lighterUnsafe(r,a),f=xe.darkerUnsafe(r,a),p=xe.ratioOfTones(l,r),m=xe.ratioOfTones(f,r);if(I.tonePrefersLightForeground(r)){const A=Math.abs(p-m)<.1&&p<a&&m<a;return p>=a||p>=m||A?l:f}else return m>=a||m>=p?f:l}static tonePrefersLightForeground(r){return Math.round(r)<60}static toneAllowsLightForeground(r){return Math.round(r)<=49}static enableLightForeground(r){return I.tonePrefersLightForeground(r)&&!I.toneAllowsLightForeground(r)?49:r}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{static fromInt(r){const a=we.fromInt(r);return De.fromHct(a)}static fromHct(r){return new De(r.hue,r.chroma,r)}static fromHueAndChroma(r,a){const l=new Ys(r,a).create();return new De(r,a,l)}constructor(r,a,l){this.hue=r,this.chroma=a,this.keyColor=l,this.cache=new Map}tone(r){let a=this.cache.get(r);return a===void 0&&(a=we.from(this.hue,this.chroma,r).toInt(),this.cache.set(r,a)),a}getHct(r){return we.fromInt(this.tone(r))}}class Ys{constructor(r,a){this.hue=r,this.requestedChroma=a,this.chromaCache=new Map,this.maxChromaValue=200}create(){let f=0,p=100;for(;f<p;){const m=Math.floor((f+p)/2),S=this.maxChroma(m)<this.maxChroma(m+1);if(this.maxChroma(m)>=this.requestedChroma-.01)if(Math.abs(f-50)<Math.abs(p-50))p=m;else{if(f===m)return we.from(this.hue,this.requestedChroma,f);f=m}else S?f=m+1:p=m}return we.from(this.hue,this.requestedChroma,f)}maxChroma(r){if(this.chromaCache.has(r))return this.chromaCache.get(r);const a=we.from(this.hue,this.maxChromaValue,r).chroma;return this.chromaCache.set(r,a),a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(r,a,l,f){this.low=r,this.normal=a,this.medium=l,this.high=f}get(r){return r<=-1?this.low:r<0?pr(this.low,this.normal,(r- -1)/1):r<.5?pr(this.normal,this.medium,(r-0)/.5):r<1?pr(this.medium,this.high,(r-.5)/.5):this.high}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(r,a,l,f,p){this.roleA=r,this.roleB=a,this.delta=l,this.polarity=f,this.stayTogether=p}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr;(function(i){i[i.MONOCHROME=0]="MONOCHROME",i[i.NEUTRAL=1]="NEUTRAL",i[i.TONAL_SPOT=2]="TONAL_SPOT",i[i.VIBRANT=3]="VIBRANT",i[i.EXPRESSIVE=4]="EXPRESSIVE",i[i.FIDELITY=5]="FIDELITY",i[i.CONTENT=6]="CONTENT",i[i.RAINBOW=7]="RAINBOW",i[i.FRUIT_SALAD=8]="FRUIT_SALAD"})(vr||(vr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(i){return i.variant===vr.FIDELITY||i.variant===vr.CONTENT}function he(i){return i.variant===vr.MONOCHROME}function Xs(i,r,a,l){let f=a,p=we.from(i,r,a);if(p.chroma<r){let m=p.chroma;for(;p.chroma<r;){f+=l?-1:1;const S=we.from(i,r,f);if(m>S.chroma||Math.abs(S.chroma-r)<.4)break;const A=Math.abs(S.chroma-r),E=Math.abs(p.chroma-r);A<E&&(p=S),m=Math.max(m,S.chroma)}}return f}class T{static highestSurface(r){return r.isDark?T.surfaceBright:T.surfaceDim}}T.contentAccentToneDelta=15;T.primaryPaletteKeyColor=I.fromPalette({name:"primary_palette_key_color",palette:i=>i.primaryPalette,tone:i=>i.primaryPalette.keyColor.tone});T.secondaryPaletteKeyColor=I.fromPalette({name:"secondary_palette_key_color",palette:i=>i.secondaryPalette,tone:i=>i.secondaryPalette.keyColor.tone});T.tertiaryPaletteKeyColor=I.fromPalette({name:"tertiary_palette_key_color",palette:i=>i.tertiaryPalette,tone:i=>i.tertiaryPalette.keyColor.tone});T.neutralPaletteKeyColor=I.fromPalette({name:"neutral_palette_key_color",palette:i=>i.neutralPalette,tone:i=>i.neutralPalette.keyColor.tone});T.neutralVariantPaletteKeyColor=I.fromPalette({name:"neutral_variant_palette_key_color",palette:i=>i.neutralVariantPalette,tone:i=>i.neutralVariantPalette.keyColor.tone});T.background=I.fromPalette({name:"background",palette:i=>i.neutralPalette,tone:i=>i.isDark?6:98,isBackground:!0});T.onBackground=I.fromPalette({name:"on_background",palette:i=>i.neutralPalette,tone:i=>i.isDark?90:10,background:i=>T.background,contrastCurve:new G(3,3,4.5,7)});T.surface=I.fromPalette({name:"surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?6:98,isBackground:!0});T.surfaceDim=I.fromPalette({name:"surface_dim",palette:i=>i.neutralPalette,tone:i=>i.isDark?6:new G(87,87,80,75).get(i.contrastLevel),isBackground:!0});T.surfaceBright=I.fromPalette({name:"surface_bright",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(24,24,29,34).get(i.contrastLevel):98,isBackground:!0});T.surfaceContainerLowest=I.fromPalette({name:"surface_container_lowest",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(4,4,2,0).get(i.contrastLevel):100,isBackground:!0});T.surfaceContainerLow=I.fromPalette({name:"surface_container_low",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(10,10,11,12).get(i.contrastLevel):new G(96,96,96,95).get(i.contrastLevel),isBackground:!0});T.surfaceContainer=I.fromPalette({name:"surface_container",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(12,12,16,20).get(i.contrastLevel):new G(94,94,92,90).get(i.contrastLevel),isBackground:!0});T.surfaceContainerHigh=I.fromPalette({name:"surface_container_high",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(17,17,21,25).get(i.contrastLevel):new G(92,92,88,85).get(i.contrastLevel),isBackground:!0});T.surfaceContainerHighest=I.fromPalette({name:"surface_container_highest",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(22,22,26,30).get(i.contrastLevel):new G(90,90,84,80).get(i.contrastLevel),isBackground:!0});T.onSurface=I.fromPalette({name:"on_surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?90:10,background:i=>T.highestSurface(i),contrastCurve:new G(4.5,7,11,21)});T.surfaceVariant=I.fromPalette({name:"surface_variant",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?30:90,isBackground:!0});T.onSurfaceVariant=I.fromPalette({name:"on_surface_variant",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?80:30,background:i=>T.highestSurface(i),contrastCurve:new G(3,4.5,7,11)});T.inverseSurface=I.fromPalette({name:"inverse_surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?90:20});T.inverseOnSurface=I.fromPalette({name:"inverse_on_surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?20:95,background:i=>T.inverseSurface,contrastCurve:new G(4.5,7,11,21)});T.outline=I.fromPalette({name:"outline",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?60:50,background:i=>T.highestSurface(i),contrastCurve:new G(1.5,3,4.5,7)});T.outlineVariant=I.fromPalette({name:"outline_variant",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?30:80,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5)});T.shadow=I.fromPalette({name:"shadow",palette:i=>i.neutralPalette,tone:i=>0});T.scrim=I.fromPalette({name:"scrim",palette:i=>i.neutralPalette,tone:i=>0});T.surfaceTint=I.fromPalette({name:"surface_tint",palette:i=>i.primaryPalette,tone:i=>i.isDark?80:40,isBackground:!0});T.primary=I.fromPalette({name:"primary",palette:i=>i.primaryPalette,tone:i=>he(i)?i.isDark?100:0:i.isDark?80:40,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Le(T.primaryContainer,T.primary,10,"nearer",!1)});T.onPrimary=I.fromPalette({name:"on_primary",palette:i=>i.primaryPalette,tone:i=>he(i)?i.isDark?10:90:i.isDark?20:100,background:i=>T.primary,contrastCurve:new G(4.5,7,11,21)});T.primaryContainer=I.fromPalette({name:"primary_container",palette:i=>i.primaryPalette,tone:i=>Qt(i)?i.sourceColorHct.tone:he(i)?i.isDark?85:25:i.isDark?30:90,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.primaryContainer,T.primary,10,"nearer",!1)});T.onPrimaryContainer=I.fromPalette({name:"on_primary_container",palette:i=>i.primaryPalette,tone:i=>Qt(i)?I.foregroundTone(T.primaryContainer.tone(i),4.5):he(i)?i.isDark?0:100:i.isDark?90:30,background:i=>T.primaryContainer,contrastCurve:new G(3,4.5,7,11)});T.inversePrimary=I.fromPalette({name:"inverse_primary",palette:i=>i.primaryPalette,tone:i=>i.isDark?40:80,background:i=>T.inverseSurface,contrastCurve:new G(3,4.5,7,7)});T.secondary=I.fromPalette({name:"secondary",palette:i=>i.secondaryPalette,tone:i=>i.isDark?80:40,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Le(T.secondaryContainer,T.secondary,10,"nearer",!1)});T.onSecondary=I.fromPalette({name:"on_secondary",palette:i=>i.secondaryPalette,tone:i=>he(i)?i.isDark?10:100:i.isDark?20:100,background:i=>T.secondary,contrastCurve:new G(4.5,7,11,21)});T.secondaryContainer=I.fromPalette({name:"secondary_container",palette:i=>i.secondaryPalette,tone:i=>{const r=i.isDark?30:90;return he(i)?i.isDark?30:85:Qt(i)?Xs(i.secondaryPalette.hue,i.secondaryPalette.chroma,r,!i.isDark):r},isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.secondaryContainer,T.secondary,10,"nearer",!1)});T.onSecondaryContainer=I.fromPalette({name:"on_secondary_container",palette:i=>i.secondaryPalette,tone:i=>he(i)?i.isDark?90:10:Qt(i)?I.foregroundTone(T.secondaryContainer.tone(i),4.5):i.isDark?90:30,background:i=>T.secondaryContainer,contrastCurve:new G(3,4.5,7,11)});T.tertiary=I.fromPalette({name:"tertiary",palette:i=>i.tertiaryPalette,tone:i=>he(i)?i.isDark?90:25:i.isDark?80:40,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Le(T.tertiaryContainer,T.tertiary,10,"nearer",!1)});T.onTertiary=I.fromPalette({name:"on_tertiary",palette:i=>i.tertiaryPalette,tone:i=>he(i)?i.isDark?10:90:i.isDark?20:100,background:i=>T.tertiary,contrastCurve:new G(4.5,7,11,21)});T.tertiaryContainer=I.fromPalette({name:"tertiary_container",palette:i=>i.tertiaryPalette,tone:i=>{if(he(i))return i.isDark?60:49;if(!Qt(i))return i.isDark?30:90;const r=i.tertiaryPalette.getHct(i.sourceColorHct.tone);return On.fixIfDisliked(r).tone},isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.tertiaryContainer,T.tertiary,10,"nearer",!1)});T.onTertiaryContainer=I.fromPalette({name:"on_tertiary_container",palette:i=>i.tertiaryPalette,tone:i=>he(i)?i.isDark?0:100:Qt(i)?I.foregroundTone(T.tertiaryContainer.tone(i),4.5):i.isDark?90:30,background:i=>T.tertiaryContainer,contrastCurve:new G(3,4.5,7,11)});T.error=I.fromPalette({name:"error",palette:i=>i.errorPalette,tone:i=>i.isDark?80:40,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Le(T.errorContainer,T.error,10,"nearer",!1)});T.onError=I.fromPalette({name:"on_error",palette:i=>i.errorPalette,tone:i=>i.isDark?20:100,background:i=>T.error,contrastCurve:new G(4.5,7,11,21)});T.errorContainer=I.fromPalette({name:"error_container",palette:i=>i.errorPalette,tone:i=>i.isDark?30:90,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.errorContainer,T.error,10,"nearer",!1)});T.onErrorContainer=I.fromPalette({name:"on_error_container",palette:i=>i.errorPalette,tone:i=>he(i)?i.isDark?90:10:i.isDark?90:30,background:i=>T.errorContainer,contrastCurve:new G(3,4.5,7,11)});T.primaryFixed=I.fromPalette({name:"primary_fixed",palette:i=>i.primaryPalette,tone:i=>he(i)?40:90,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.primaryFixed,T.primaryFixedDim,10,"lighter",!0)});T.primaryFixedDim=I.fromPalette({name:"primary_fixed_dim",palette:i=>i.primaryPalette,tone:i=>he(i)?30:80,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.primaryFixed,T.primaryFixedDim,10,"lighter",!0)});T.onPrimaryFixed=I.fromPalette({name:"on_primary_fixed",palette:i=>i.primaryPalette,tone:i=>he(i)?100:10,background:i=>T.primaryFixedDim,secondBackground:i=>T.primaryFixed,contrastCurve:new G(4.5,7,11,21)});T.onPrimaryFixedVariant=I.fromPalette({name:"on_primary_fixed_variant",palette:i=>i.primaryPalette,tone:i=>he(i)?90:30,background:i=>T.primaryFixedDim,secondBackground:i=>T.primaryFixed,contrastCurve:new G(3,4.5,7,11)});T.secondaryFixed=I.fromPalette({name:"secondary_fixed",palette:i=>i.secondaryPalette,tone:i=>he(i)?80:90,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.secondaryFixed,T.secondaryFixedDim,10,"lighter",!0)});T.secondaryFixedDim=I.fromPalette({name:"secondary_fixed_dim",palette:i=>i.secondaryPalette,tone:i=>he(i)?70:80,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.secondaryFixed,T.secondaryFixedDim,10,"lighter",!0)});T.onSecondaryFixed=I.fromPalette({name:"on_secondary_fixed",palette:i=>i.secondaryPalette,tone:i=>10,background:i=>T.secondaryFixedDim,secondBackground:i=>T.secondaryFixed,contrastCurve:new G(4.5,7,11,21)});T.onSecondaryFixedVariant=I.fromPalette({name:"on_secondary_fixed_variant",palette:i=>i.secondaryPalette,tone:i=>he(i)?25:30,background:i=>T.secondaryFixedDim,secondBackground:i=>T.secondaryFixed,contrastCurve:new G(3,4.5,7,11)});T.tertiaryFixed=I.fromPalette({name:"tertiary_fixed",palette:i=>i.tertiaryPalette,tone:i=>he(i)?40:90,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.tertiaryFixed,T.tertiaryFixedDim,10,"lighter",!0)});T.tertiaryFixedDim=I.fromPalette({name:"tertiary_fixed_dim",palette:i=>i.tertiaryPalette,tone:i=>he(i)?30:80,isBackground:!0,background:i=>T.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Le(T.tertiaryFixed,T.tertiaryFixedDim,10,"lighter",!0)});T.onTertiaryFixed=I.fromPalette({name:"on_tertiary_fixed",palette:i=>i.tertiaryPalette,tone:i=>he(i)?100:10,background:i=>T.tertiaryFixedDim,secondBackground:i=>T.tertiaryFixed,contrastCurve:new G(4.5,7,11,21)});T.onTertiaryFixedVariant=I.fromPalette({name:"on_tertiary_fixed_variant",palette:i=>i.tertiaryPalette,tone:i=>he(i)?90:30,background:i=>T.tertiaryFixedDim,secondBackground:i=>T.tertiaryFixed,contrastCurve:new G(3,4.5,7,11)});/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{static of(r){return new ke(r,!1)}static contentOf(r){return new ke(r,!0)}static fromColors(r){return ke.createPaletteFromColors(!1,r)}static contentFromColors(r){return ke.createPaletteFromColors(!0,r)}static createPaletteFromColors(r,a){const l=new ke(a.primary,r);if(a.secondary){const f=new ke(a.secondary,r);l.a2=f.a1}if(a.tertiary){const f=new ke(a.tertiary,r);l.a3=f.a1}if(a.error){const f=new ke(a.error,r);l.error=f.a1}if(a.neutral){const f=new ke(a.neutral,r);l.n1=f.n1}if(a.neutralVariant){const f=new ke(a.neutralVariant,r);l.n2=f.n2}return l}constructor(r,a){const l=we.fromInt(r),f=l.hue,p=l.chroma;a?(this.a1=De.fromHueAndChroma(f,p),this.a2=De.fromHueAndChroma(f,p/3),this.a3=De.fromHueAndChroma(f+60,p/2),this.n1=De.fromHueAndChroma(f,Math.min(p/12,4)),this.n2=De.fromHueAndChroma(f,Math.min(p/6,8))):(this.a1=De.fromHueAndChroma(f,Math.max(48,p)),this.a2=De.fromHueAndChroma(f,16),this.a3=De.fromHueAndChroma(f+60,24),this.n1=De.fromHueAndChroma(f,4),this.n2=De.fromHueAndChroma(f,8)),this.error=De.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}get surfaceDim(){return this.props.surfaceDim}get surfaceBright(){return this.props.surfaceBright}get surfaceContainerLowest(){return this.props.surfaceContainerLowest}get surfaceContainerLow(){return this.props.surfaceContainerLow}get surfaceContainer(){return this.props.surfaceContainer}get surfaceContainerHigh(){return this.props.surfaceContainerHigh}get surfaceContainerHighest(){return this.props.surfaceContainerHighest}get surfaceTint(){return this.props.surfaceTint}get primaryFixed(){return this.props.primaryFixed}get primaryFixedDim(){return this.props.primaryFixedDim}get onPrimaryFixed(){return this.props.onPrimaryFixed}get onPrimaryFixedVariant(){return this.props.onPrimaryFixedVariant}get secondaryFixed(){return this.props.secondaryFixed}get secondaryFixedDim(){return this.props.secondaryFixedDim}get onSecondaryFixed(){return this.props.onSecondaryFixed}get onSecondaryFixedVariant(){return this.props.onSecondaryFixedVariant}get tertiaryFixed(){return this.props.tertiaryFixed}get tertiaryFixedDim(){return this.props.tertiaryFixedDim}get onTertiaryFixed(){return this.props.onTertiaryFixed}get onTertiaryFixedVariant(){return this.props.onTertiaryFixedVariant}static light(r){return ut.lightFromCorePalette(ke.of(r))}static dark(r){return ut.darkFromCorePalette(ke.of(r))}static lightContent(r){return ut.lightFromCorePalette(ke.contentOf(r))}static darkContent(r){return ut.darkFromCorePalette(ke.contentOf(r))}static lightFromCorePalette(r){return new ut({primary:r.a1.tone(40),onPrimary:r.a1.tone(100),primaryContainer:r.a1.tone(90),onPrimaryContainer:r.a1.tone(10),secondary:r.a2.tone(40),onSecondary:r.a2.tone(100),secondaryContainer:r.a2.tone(90),onSecondaryContainer:r.a2.tone(10),tertiary:r.a3.tone(40),onTertiary:r.a3.tone(100),tertiaryContainer:r.a3.tone(90),onTertiaryContainer:r.a3.tone(10),error:r.error.tone(40),onError:r.error.tone(100),errorContainer:r.error.tone(90),onErrorContainer:r.error.tone(10),background:r.n1.tone(99),onBackground:r.n1.tone(10),surface:r.n1.tone(99),onSurface:r.n1.tone(10),surfaceVariant:r.n2.tone(90),onSurfaceVariant:r.n2.tone(30),outline:r.n2.tone(50),outlineVariant:r.n2.tone(80),shadow:r.n1.tone(0),scrim:r.n1.tone(0),inverseSurface:r.n1.tone(20),inverseOnSurface:r.n1.tone(95),inversePrimary:r.a1.tone(80),surfaceDim:r.n1.tone(87),surfaceBright:r.n1.tone(98),surfaceContainerLowest:r.n1.tone(100),surfaceContainerLow:r.n1.tone(96),surfaceContainer:r.n1.tone(94),surfaceContainerHigh:r.n1.tone(92),surfaceContainerHighest:r.n1.tone(90),surfaceTint:r.a1.tone(40),primaryFixed:r.a1.tone(90),primaryFixedDim:r.a1.tone(80),onPrimaryFixed:r.a1.tone(10),onPrimaryFixedVariant:r.a1.tone(30),secondaryFixed:r.a2.tone(90),secondaryFixedDim:r.a2.tone(80),onSecondaryFixed:r.a2.tone(10),onSecondaryFixedVariant:r.a2.tone(30),tertiaryFixed:r.a3.tone(90),tertiaryFixedDim:r.a3.tone(80),onTertiaryFixed:r.a3.tone(10),onTertiaryFixedVariant:r.a3.tone(30)})}static darkFromCorePalette(r){return new ut({primary:r.a1.tone(80),onPrimary:r.a1.tone(20),primaryContainer:r.a1.tone(30),onPrimaryContainer:r.a1.tone(90),secondary:r.a2.tone(80),onSecondary:r.a2.tone(20),secondaryContainer:r.a2.tone(30),onSecondaryContainer:r.a2.tone(90),tertiary:r.a3.tone(80),onTertiary:r.a3.tone(20),tertiaryContainer:r.a3.tone(30),onTertiaryContainer:r.a3.tone(90),error:r.error.tone(80),onError:r.error.tone(20),errorContainer:r.error.tone(30),onErrorContainer:r.error.tone(80),background:r.n1.tone(10),onBackground:r.n1.tone(90),surface:r.n1.tone(10),onSurface:r.n1.tone(90),surfaceVariant:r.n2.tone(30),onSurfaceVariant:r.n2.tone(80),outline:r.n2.tone(60),outlineVariant:r.n2.tone(30),shadow:r.n1.tone(0),scrim:r.n1.tone(0),inverseSurface:r.n1.tone(90),inverseOnSurface:r.n1.tone(20),inversePrimary:r.a1.tone(40),surfaceDim:r.n1.tone(6),surfaceBright:r.n1.tone(24),surfaceContainerLowest:r.n1.tone(4),surfaceContainerLow:r.n1.tone(10),surfaceContainer:r.n1.tone(12),surfaceContainerHigh:r.n1.tone(17),surfaceContainerHighest:r.n1.tone(22),surfaceTint:r.a1.tone(80),primaryFixed:r.a1.tone(90),primaryFixedDim:r.a1.tone(80),onPrimaryFixed:r.a1.tone(10),onPrimaryFixedVariant:r.a1.tone(30),secondaryFixed:r.a2.tone(90),secondaryFixedDim:r.a2.tone(80),onSecondaryFixed:r.a2.tone(10),onSecondaryFixedVariant:r.a2.tone(30),tertiaryFixed:r.a3.tone(90),tertiaryFixedDim:r.a3.tone(80),onTertiaryFixed:r.a3.tone(10),onTertiaryFixedVariant:r.a3.tone(30)})}constructor(r){this.props=r}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(i){i=i.replace("#","");const r=i.length===3,a=i.length===6,l=i.length===8;if(!r&&!a&&!l)throw new Error("unexpected hex "+i);let f=0,p=0,m=0;return r?(f=at(i.slice(0,1).repeat(2)),p=at(i.slice(1,2).repeat(2)),m=at(i.slice(2,3).repeat(2))):a?(f=at(i.slice(0,2)),p=at(i.slice(2,4)),m=at(i.slice(4,6))):l&&(f=at(i.slice(2,4)),p=at(i.slice(4,6)),m=at(i.slice(6,8))),(255<<24|(f&255)<<16|(p&255)<<8|m&255)>>>0}function at(i){return parseInt(i,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qs(i,r=[]){const a=ke.of(i);return{source:i,schemes:{light:ut.light(i),dark:ut.dark(i)},palettes:{primary:a.a1,secondary:a.a2,tertiary:a.a3,neutral:a.n1,neutralVariant:a.n2,error:a.error},customColors:r.map(l=>Ks(i,l))}}function Ks(i,r){let a=r.value;const l=a,f=i;r.blend&&(a=En.harmonize(l,f));const m=ke.of(a).a1;return{color:r,value:a,light:{color:m.tone(40),onColor:m.tone(100),colorContainer:m.tone(90),onColorContainer:m.tone(10)},dark:{color:m.tone(80),onColor:m.tone(20),colorContainer:m.tone(30),onColorContainer:m.tone(90)}}}function Zs(i="#6750A4"){const r=Qs(Js(i));let a="";for(const[f,p]of Object.entries(r.schemes.light.toJSON())){const m=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();a=a+`--md-sys-color-${m}:${p>>16&255},${p>>8&255},${p&255};`}let l="";for(const[f,p]of Object.entries(r.schemes.dark.toJSON())){const m=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();l=l+`--md-sys-color-${m}:${p>>16&255},${p>>8&255},${p&255};`}Pi(".colorTheme").remove(),Pi(document.head).append(`
        <style class="colorTheme">
            :root {
                ${a}
            }
            @media (prefers-color-scheme: dark) {
                :root {
                    ${l}
                }
            }
        </style>
    `)}Zs();
