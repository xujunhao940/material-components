(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const y of h.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&l(y)}).observe(document,{childList:!0,subtree:!0});function a(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(f){if(f.ep)return;f.ep=!0;const h=a(f);fetch(f.href,h)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rr=globalThis,En=Rr.ShadowRoot&&(Rr.ShadyCSS===void 0||Rr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,On=Symbol(),Ci=new WeakMap;let ji=class{constructor(r,a,l){if(this._$cssResult$=!0,l!==On)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=a}get styleSheet(){let r=this.o;const a=this.t;if(En&&r===void 0){const l=a!==void 0&&a.length===1;l&&(r=Ci.get(a)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),l&&Ci.set(a,r))}return r}toString(){return this.cssText}};const Go=i=>new ji(typeof i=="string"?i:i+"",void 0,On),We=(i,...r)=>{const a=i.length===1?i[0]:r.reduce((l,f,h)=>l+(y=>{if(y._$cssResult$===!0)return y.cssText;if(typeof y=="number")return y;throw Error("Value passed to 'css' function must be a 'css' function result: "+y+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(f)+i[h+1],i[0]);return new ji(a,i,On)},Yo=(i,r)=>{if(En)i.adoptedStyleSheets=r.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of r){const l=document.createElement("style"),f=Rr.litNonce;f!==void 0&&l.setAttribute("nonce",f),l.textContent=a.cssText,i.appendChild(l)}},$i=En?i=>i:i=>i instanceof CSSStyleSheet?(r=>{let a="";for(const l of r.cssRules)a+=l.cssText;return Go(a)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Xo,defineProperty:Jo,getOwnPropertyDescriptor:Qo,getOwnPropertyNames:Ko,getOwnPropertySymbols:Zo,getPrototypeOf:es}=Object,bt=globalThis,ki=bt.trustedTypes,ts=ki?ki.emptyScript:"",vn=bt.reactiveElementPolyfillSupport,hr=(i,r)=>i,jr={toAttribute(i,r){switch(r){case Boolean:i=i?ts:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,r){let a=i;switch(r){case Boolean:a=i!==null;break;case Number:a=i===null?null:Number(i);break;case Object:case Array:try{a=JSON.parse(i)}catch{a=null}}return a}},Nn=(i,r)=>!Xo(i,r),Ti={attribute:!0,type:String,converter:jr,reflect:!1,useDefault:!1,hasChanged:Nn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),bt.litPropertyMetadata??(bt.litPropertyMetadata=new WeakMap);let Yt=class extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??(this.l=[])).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,a=Ti){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(r,a),!a.noAccessor){const l=Symbol(),f=this.getPropertyDescriptor(r,l,a);f!==void 0&&Jo(this.prototype,r,f)}}static getPropertyDescriptor(r,a,l){const{get:f,set:h}=Qo(this.prototype,r)??{get(){return this[a]},set(y){this[a]=y}};return{get:f,set(y){const S=f==null?void 0:f.call(this);h==null||h.call(this,y),this.requestUpdate(r,S,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??Ti}static _$Ei(){if(this.hasOwnProperty(hr("elementProperties")))return;const r=es(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(hr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(hr("properties"))){const a=this.properties,l=[...Ko(a),...Zo(a)];for(const f of l)this.createProperty(f,a[f])}const r=this[Symbol.metadata];if(r!==null){const a=litPropertyMetadata.get(r);if(a!==void 0)for(const[l,f]of a)this.elementProperties.set(l,f)}this._$Eh=new Map;for(const[a,l]of this.elementProperties){const f=this._$Eu(a,l);f!==void 0&&this._$Eh.set(f,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const a=[];if(Array.isArray(r)){const l=new Set(r.flat(1/0).reverse());for(const f of l)a.unshift($i(f))}else r!==void 0&&a.push($i(r));return a}static _$Eu(r,a){const l=a.attribute;return l===!1?void 0:typeof l=="string"?l:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var r;this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),(r=this.constructor.l)==null||r.forEach(a=>a(this))}addController(r){var a;(this._$EO??(this._$EO=new Set)).add(r),this.renderRoot!==void 0&&this.isConnected&&((a=r.hostConnected)==null||a.call(r))}removeController(r){var a;(a=this._$EO)==null||a.delete(r)}_$E_(){const r=new Map,a=this.constructor.elementProperties;for(const l of a.keys())this.hasOwnProperty(l)&&(r.set(l,this[l]),delete this[l]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Yo(r,this.constructor.elementStyles),r}connectedCallback(){var r;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(r=this._$EO)==null||r.forEach(a=>{var l;return(l=a.hostConnected)==null?void 0:l.call(a)})}enableUpdating(r){}disconnectedCallback(){var r;(r=this._$EO)==null||r.forEach(a=>{var l;return(l=a.hostDisconnected)==null?void 0:l.call(a)})}attributeChangedCallback(r,a,l){this._$AK(r,l)}_$ET(r,a){var h;const l=this.constructor.elementProperties.get(r),f=this.constructor._$Eu(r,l);if(f!==void 0&&l.reflect===!0){const y=(((h=l.converter)==null?void 0:h.toAttribute)!==void 0?l.converter:jr).toAttribute(a,l.type);this._$Em=r,y==null?this.removeAttribute(f):this.setAttribute(f,y),this._$Em=null}}_$AK(r,a){var h,y;const l=this.constructor,f=l._$Eh.get(r);if(f!==void 0&&this._$Em!==f){const S=l.getPropertyOptions(f),A=typeof S.converter=="function"?{fromAttribute:S.converter}:((h=S.converter)==null?void 0:h.fromAttribute)!==void 0?S.converter:jr;this._$Em=f,this[f]=A.fromAttribute(a,S.type)??((y=this._$Ej)==null?void 0:y.get(f))??null,this._$Em=null}}requestUpdate(r,a,l){var f;if(r!==void 0){const h=this.constructor,y=this[r];if(l??(l=h.getPropertyOptions(r)),!((l.hasChanged??Nn)(y,a)||l.useDefault&&l.reflect&&y===((f=this._$Ej)==null?void 0:f.get(r))&&!this.hasAttribute(h._$Eu(r,l))))return;this.C(r,a,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,a,{useDefault:l,reflect:f,wrapped:h},y){l&&!(this._$Ej??(this._$Ej=new Map)).has(r)&&(this._$Ej.set(r,y??a??this[r]),h!==!0||y!==void 0)||(this._$AL.has(r)||(this.hasUpdated||l||(a=void 0),this._$AL.set(r,a)),f===!0&&this._$Em!==r&&(this._$Eq??(this._$Eq=new Set)).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var l;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[h,y]of this._$Ep)this[h]=y;this._$Ep=void 0}const f=this.constructor.elementProperties;if(f.size>0)for(const[h,y]of f){const{wrapped:S}=y,A=this[h];S!==!0||this._$AL.has(h)||A===void 0||this.C(h,void 0,y,A)}}let r=!1;const a=this._$AL;try{r=this.shouldUpdate(a),r?(this.willUpdate(a),(l=this._$EO)==null||l.forEach(f=>{var h;return(h=f.hostUpdate)==null?void 0:h.call(f)}),this.update(a)):this._$EM()}catch(f){throw r=!1,this._$EM(),f}r&&this._$AE(a)}willUpdate(r){}_$AE(r){var a;(a=this._$EO)==null||a.forEach(l=>{var f;return(f=l.hostUpdated)==null?void 0:f.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(r){}firstUpdated(r){}};Yt.elementStyles=[],Yt.shadowRootOptions={mode:"open"},Yt[hr("elementProperties")]=new Map,Yt[hr("finalized")]=new Map,vn==null||vn({ReactiveElement:Yt}),(bt.reactiveElementVersions??(bt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pr=globalThis,zr=pr.trustedTypes,Ai=zr?zr.createPolicy("lit-html",{createHTML:i=>i}):void 0,zi="$lit$",yt=`lit$${Math.random().toFixed(9).slice(2)}$`,Bi="?"+yt,rs=`<${Bi}>`,Mt=document,mr=()=>Mt.createComment(""),br=i=>i===null||typeof i!="object"&&typeof i!="function",Ln=Array.isArray,ns=i=>Ln(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",xn=`[ 	
\f\r]`,dr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pi=/-->/g,Si=/>/g,Pt=RegExp(`>|${xn}(?:([^\\s"'>=/]+)(${xn}*=${xn}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),_i=/'/g,Di=/"/g,Hi=/^(?:script|style|textarea|title)$/i,is=i=>(r,...a)=>({_$litType$:i,strings:r,values:a}),ye=is(1),Jt=Symbol.for("lit-noChange"),be=Symbol.for("lit-nothing"),Mi=new WeakMap,St=Mt.createTreeWalker(Mt,129);function qi(i,r){if(!Ln(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ai!==void 0?Ai.createHTML(r):r}const os=(i,r)=>{const a=i.length-1,l=[];let f,h=r===2?"<svg>":r===3?"<math>":"",y=dr;for(let S=0;S<a;S++){const A=i[S];let E,O,L=-1,H=0;for(;H<A.length&&(y.lastIndex=H,O=y.exec(A),O!==null);)H=y.lastIndex,y===dr?O[1]==="!--"?y=Pi:O[1]!==void 0?y=Si:O[2]!==void 0?(Hi.test(O[2])&&(f=RegExp("</"+O[2],"g")),y=Pt):O[3]!==void 0&&(y=Pt):y===Pt?O[0]===">"?(y=f??dr,L=-1):O[1]===void 0?L=-2:(L=y.lastIndex-O[2].length,E=O[1],y=O[3]===void 0?Pt:O[3]==='"'?Di:_i):y===Di||y===_i?y=Pt:y===Pi||y===Si?y=dr:(y=Pt,f=void 0);const X=y===Pt&&i[S+1].startsWith("/>")?" ":"";h+=y===dr?A+rs:L>=0?(l.push(E),A.slice(0,L)+zi+A.slice(L)+yt+X):A+yt+(L===-2?S:X)}return[qi(i,h+(i[a]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),l]};class vr{constructor({strings:r,_$litType$:a},l){let f;this.parts=[];let h=0,y=0;const S=r.length-1,A=this.parts,[E,O]=os(r,a);if(this.el=vr.createElement(E,l),St.currentNode=this.el.content,a===2||a===3){const L=this.el.content.firstChild;L.replaceWith(...L.childNodes)}for(;(f=St.nextNode())!==null&&A.length<S;){if(f.nodeType===1){if(f.hasAttributes())for(const L of f.getAttributeNames())if(L.endsWith(zi)){const H=O[y++],X=f.getAttribute(L).split(yt),M=/([.?@])?(.*)/.exec(H);A.push({type:1,index:h,name:M[2],strings:X,ctor:M[1]==="."?as:M[1]==="?"?us:M[1]==="@"?cs:Vr}),f.removeAttribute(L)}else L.startsWith(yt)&&(A.push({type:6,index:h}),f.removeAttribute(L));if(Hi.test(f.tagName)){const L=f.textContent.split(yt),H=L.length-1;if(H>0){f.textContent=zr?zr.emptyScript:"";for(let X=0;X<H;X++)f.append(L[X],mr()),St.nextNode(),A.push({type:2,index:++h});f.append(L[H],mr())}}}else if(f.nodeType===8)if(f.data===Bi)A.push({type:2,index:h});else{let L=-1;for(;(L=f.data.indexOf(yt,L+1))!==-1;)A.push({type:7,index:h}),L+=yt.length-1}h++}}static createElement(r,a){const l=Mt.createElement("template");return l.innerHTML=r,l}}function Qt(i,r,a=i,l){var y,S;if(r===Jt)return r;let f=l!==void 0?(y=a._$Co)==null?void 0:y[l]:a._$Cl;const h=br(r)?void 0:r._$litDirective$;return(f==null?void 0:f.constructor)!==h&&((S=f==null?void 0:f._$AO)==null||S.call(f,!1),h===void 0?f=void 0:(f=new h(i),f._$AT(i,a,l)),l!==void 0?(a._$Co??(a._$Co=[]))[l]=f:a._$Cl=f),f!==void 0&&(r=Qt(i,f._$AS(i,r.values),f,l)),r}class ss{constructor(r,a){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:a},parts:l}=this._$AD,f=((r==null?void 0:r.creationScope)??Mt).importNode(a,!0);St.currentNode=f;let h=St.nextNode(),y=0,S=0,A=l[0];for(;A!==void 0;){if(y===A.index){let E;A.type===2?E=new Cr(h,h.nextSibling,this,r):A.type===1?E=new A.ctor(h,A.name,A.strings,this,r):A.type===6&&(E=new ls(h,this,r)),this._$AV.push(E),A=l[++S]}y!==(A==null?void 0:A.index)&&(h=St.nextNode(),y++)}return St.currentNode=Mt,f}p(r){let a=0;for(const l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(r,l,a),a+=l.strings.length-2):l._$AI(r[a])),a++}}class Cr{get _$AU(){var r;return((r=this._$AM)==null?void 0:r._$AU)??this._$Cv}constructor(r,a,l,f){this.type=2,this._$AH=be,this._$AN=void 0,this._$AA=r,this._$AB=a,this._$AM=l,this.options=f,this._$Cv=(f==null?void 0:f.isConnected)??!0}get parentNode(){let r=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(r==null?void 0:r.nodeType)===11&&(r=a.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,a=this){r=Qt(this,r,a),br(r)?r===be||r==null||r===""?(this._$AH!==be&&this._$AR(),this._$AH=be):r!==this._$AH&&r!==Jt&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):ns(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==be&&br(this._$AH)?this._$AA.nextSibling.data=r:this.T(Mt.createTextNode(r)),this._$AH=r}$(r){var h;const{values:a,_$litType$:l}=r,f=typeof l=="number"?this._$AC(r):(l.el===void 0&&(l.el=vr.createElement(qi(l.h,l.h[0]),this.options)),l);if(((h=this._$AH)==null?void 0:h._$AD)===f)this._$AH.p(a);else{const y=new ss(f,this),S=y.u(this.options);y.p(a),this.T(S),this._$AH=y}}_$AC(r){let a=Mi.get(r.strings);return a===void 0&&Mi.set(r.strings,a=new vr(r)),a}k(r){Ln(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let l,f=0;for(const h of r)f===a.length?a.push(l=new Cr(this.O(mr()),this.O(mr()),this,this.options)):l=a[f],l._$AI(h),f++;f<a.length&&(this._$AR(l&&l._$AB.nextSibling,f),a.length=f)}_$AR(r=this._$AA.nextSibling,a){var l;for((l=this._$AP)==null?void 0:l.call(this,!1,!0,a);r&&r!==this._$AB;){const f=r.nextSibling;r.remove(),r=f}}setConnected(r){var a;this._$AM===void 0&&(this._$Cv=r,(a=this._$AP)==null||a.call(this,r))}}class Vr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,a,l,f,h){this.type=1,this._$AH=be,this._$AN=void 0,this.element=r,this.name=a,this._$AM=f,this.options=h,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=be}_$AI(r,a=this,l,f){const h=this.strings;let y=!1;if(h===void 0)r=Qt(this,r,a,0),y=!br(r)||r!==this._$AH&&r!==Jt,y&&(this._$AH=r);else{const S=r;let A,E;for(r=h[0],A=0;A<h.length-1;A++)E=Qt(this,S[l+A],a,A),E===Jt&&(E=this._$AH[A]),y||(y=!br(E)||E!==this._$AH[A]),E===be?r=be:r!==be&&(r+=(E??"")+h[A+1]),this._$AH[A]=E}y&&!f&&this.j(r)}j(r){r===be?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class as extends Vr{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===be?void 0:r}}class us extends Vr{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==be)}}class cs extends Vr{constructor(r,a,l,f,h){super(r,a,l,f,h),this.type=5}_$AI(r,a=this){if((r=Qt(this,r,a,0)??be)===Jt)return;const l=this._$AH,f=r===be&&l!==be||r.capture!==l.capture||r.once!==l.once||r.passive!==l.passive,h=r!==be&&(l===be||f);f&&this.element.removeEventListener(this.name,this,l),h&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){var a;typeof this._$AH=="function"?this._$AH.call(((a=this.options)==null?void 0:a.host)??this.element,r):this._$AH.handleEvent(r)}}class ls{constructor(r,a,l){this.element=r,this.type=6,this._$AN=void 0,this._$AM=a,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(r){Qt(this,r)}}const wn=pr.litHtmlPolyfillSupport;wn==null||wn(vr,Cr),(pr.litHtmlVersions??(pr.litHtmlVersions=[])).push("3.3.0");const fs=(i,r,a)=>{const l=(a==null?void 0:a.renderBefore)??r;let f=l._$litPart$;if(f===void 0){const h=(a==null?void 0:a.renderBefore)??null;l._$litPart$=f=new Cr(r.insertBefore(mr(),h),h,void 0,a??{})}return f._$AI(i),f};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=globalThis;let _e=class extends Yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const r=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=r.firstChild),r}update(r){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=fs(a,this.renderRoot,this.renderOptions)}connectedCallback(){var r;super.connectedCallback(),(r=this._$Do)==null||r.setConnected(!0)}disconnectedCallback(){var r;super.disconnectedCallback(),(r=this._$Do)==null||r.setConnected(!1)}render(){return Jt}};var Ii;_e._$litElement$=!0,_e.finalized=!0,(Ii=_t.litElementHydrateSupport)==null||Ii.call(_t,{LitElement:_e});const Cn=_t.litElementPolyfillSupport;Cn==null||Cn({LitElement:_e});(_t.litElementVersions??(_t.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=i=>(r,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(i,r)}):customElements.define(i,r)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ds={attribute:!0,type:String,converter:jr,reflect:!1,hasChanged:Nn},hs=(i=ds,r,a)=>{const{kind:l,metadata:f}=a;let h=globalThis.litPropertyMetadata.get(f);if(h===void 0&&globalThis.litPropertyMetadata.set(f,h=new Map),l==="setter"&&((i=Object.create(i)).wrapped=!0),h.set(a.name,i),l==="accessor"){const{name:y}=a;return{set(S){const A=r.get.call(this);r.set.call(this,S),this.requestUpdate(y,A,i)},init(S){return S!==void 0&&this.C(y,void 0,i,S),S}}}if(l==="setter"){const{name:y}=a;return function(S){const A=this[y];r.call(this,S),this.requestUpdate(y,A,i)}}throw Error("Unsupported decorator location: "+l)};function se(i){return(r,a)=>typeof a=="object"?hs(i,r,a):((l,f,h)=>{const y=f.hasOwnProperty(h);return f.constructor.createProperty(h,l),y?Object.getOwnPropertyDescriptor(f,h):void 0})(i,r,a)}function ps(i,r=2,a=!0){const l=i.trim().split(/\s+/);return a&&l.length>1?(l[0][0]+l[l.length-1][0]).toUpperCase():l.map(h=>h[0].toUpperCase()).slice(0,r).join("")}var gs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,Wr=(i,r,a,l)=>{for(var f=l>1?void 0:l?ys(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&gs(r,a,f),f};let kn=class extends _e{constructor(){super(...arguments),this.size=40}render(){return ye`
            <style>
                .container {
                    background: rgba(var(--md-sys-color-primary-container));
                    color: rgba(var(--md-sys-color-on-primary-container));
                    width: ${this.size}px;
                    height: ${this.size}px;
                    -webkit-user-select: none;
                    user-select: none;
                    border-radius: 50%;
                    overflow: hidden;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                ::slotted(*) {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <span class="container"><slot></slot></span>
        `}};Wr([se({type:Number})],kn.prototype,"size",2);kn=Wr([Pe("mc-avatar")],kn);let Tn=class extends _e{constructor(){super(...arguments),this.text=""}render(){return ye`
            <style>
                span {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
            </style>
            <span>${ps(this.text)}</span>
        `}};Wr([se({type:String})],Tn.prototype,"text",2);Tn=Wr([Pe("mc-avatar-text")],Tn);const ms=We`
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
`;var bs=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,vt=(i,r,a,l)=>{for(var f=l>1?void 0:l?vs(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&bs(r,a,f),f};let Ve=class extends _e{constructor(){super(...arguments),this.disabled=!1,this.toggle=!1,this.selected=!1,this.flex=!1,this.variant="filled",this.size="small",this.rippleColor={filled:"on-primary",elevated:"primary",tonal:"on-secondary-container",outlined:"on-surface-variant",standard:"on-background"},this.borderRadius={full:{extraSmall:"16px",small:"20px",medium:"28px",large:"48px",extraLarge:"68px"},square:{extraSmall:"8px",small:"8px",medium:"12px",large:"16px",extraLarge:"16px"}}}get buttonElement(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("button")}onToggled(){}onUnToggled(){}clickHandler(){this.toggle&&(this.selected=!this.selected,this.selected&&this.onToggled(),this.selected||this.onUnToggled())}render(){return ye`
            ${this.flex?ye`
                <style>:host {
                    flex: 1 1 auto
                }</style>`:ye``}
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
        `}};Ve.styles=ms;vt([se({type:Boolean,reflect:!0})],Ve.prototype,"disabled",2);vt([se({type:Boolean,reflect:!0})],Ve.prototype,"toggle",2);vt([se({type:Boolean,reflect:!0})],Ve.prototype,"selected",2);vt([se({type:Boolean,reflect:!0})],Ve.prototype,"flex",2);vt([se()],Ve.prototype,"variant",2);vt([se()],Ve.prototype,"size",2);Ve=vt([Pe("mc-button")],Ve);let Ei=class extends Ve{constructor(){super(),this.toggle=!0}render(){return ye`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    ${this.selected?ye`
                        <slot class="icon" name="selected_icon"></slot>
                        <slot name="selected_text"></slot>`:ye`
                        <slot class="icon" name="icon"></slot>
                        <slot></slot>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Ei=vt([Pe("mc-toggle-button")],Ei);function xs(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ir={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var ws=Ir.exports,Oi;function Cs(){return Oi||(Oi=1,function(i){(function(r,a){i.exports=r.document?a(r,!0):function(l){if(!l.document)throw new Error("jQuery requires a window with a document");return a(l)}})(typeof window<"u"?window:ws,function(r,a){var l=[],f=Object.getPrototypeOf,h=l.slice,y=l.flat?function(e){return l.flat.call(e)}:function(e){return l.concat.apply([],e)},S=l.push,A=l.indexOf,E={},O=E.toString,L=E.hasOwnProperty,H=L.toString,X=H.call(Object),M={},N=function(t){return typeof t=="function"&&typeof t.nodeType!="number"&&typeof t.item!="function"},ie=function(t){return t!=null&&t===t.window},j=r.document,le={type:!0,src:!0,nonce:!0,noModule:!0};function re(e,t,n){n=n||j;var o,u,c=n.createElement("script");if(c.text=e,t)for(o in le)u=t[o]||t.getAttribute&&t.getAttribute(o),u&&c.setAttribute(o,u);n.head.appendChild(c).parentNode.removeChild(c)}function pe(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?E[O.call(e)]||"object":typeof e}var Z="3.7.1",me=/HTML$/i,s=function(e,t){return new s.fn.init(e,t)};s.fn=s.prototype={jquery:Z,constructor:s,length:0,toArray:function(){return h.call(this)},get:function(e){return e==null?h.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=s.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return s.each(this,e)},map:function(e){return this.pushStack(s.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(s.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(s.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:S,sort:l.sort,splice:l.splice},s.extend=s.fn.extend=function(){var e,t,n,o,u,c,d=arguments[0]||{},m=1,g=arguments.length,v=!1;for(typeof d=="boolean"&&(v=d,d=arguments[m]||{},m++),typeof d!="object"&&!N(d)&&(d={}),m===g&&(d=this,m--);m<g;m++)if((e=arguments[m])!=null)for(t in e)o=e[t],!(t==="__proto__"||d===o)&&(v&&o&&(s.isPlainObject(o)||(u=Array.isArray(o)))?(n=d[t],u&&!Array.isArray(n)?c=[]:!u&&!s.isPlainObject(n)?c={}:c=n,u=!1,d[t]=s.extend(v,c,o)):o!==void 0&&(d[t]=o));return d},s.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!e||O.call(e)!=="[object Object]"?!1:(t=f(e),t?(n=L.call(t,"constructor")&&t.constructor,typeof n=="function"&&H.call(n)===X):!0)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){re(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,o=0;if(fe(e))for(n=e.length;o<n&&t.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(t.call(e[o],o,e[o])===!1)break;return e},text:function(e){var t,n="",o=0,u=e.nodeType;if(!u)for(;t=e[o++];)n+=s.text(t);return u===1||u===11?e.textContent:u===9?e.documentElement.textContent:u===3||u===4?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return e!=null&&(fe(Object(e))?s.merge(n,typeof e=="string"?[e]:e):S.call(n,e)),n},inArray:function(e,t,n){return t==null?-1:A.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!me.test(t||n&&n.nodeName||"HTML")},merge:function(e,t){for(var n=+t.length,o=0,u=e.length;o<n;o++)e[u++]=t[o];return e.length=u,e},grep:function(e,t,n){for(var o,u=[],c=0,d=e.length,m=!n;c<d;c++)o=!t(e[c],c),o!==m&&u.push(e[c]);return u},map:function(e,t,n){var o,u,c=0,d=[];if(fe(e))for(o=e.length;c<o;c++)u=t(e[c],c,n),u!=null&&d.push(u);else for(c in e)u=t(e[c],c,n),u!=null&&d.push(u);return y(d)},guid:1,support:M}),typeof Symbol=="function"&&(s.fn[Symbol.iterator]=l[Symbol.iterator]),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){E["[object "+t+"]"]=t.toLowerCase()});function fe(e){var t=!!e&&"length"in e&&e.length,n=pe(e);return N(e)||ie(e)?!1:n==="array"||t===0||typeof t=="number"&&t>0&&t-1 in e}function J(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var de=l.pop,He=l.sort,Ye=l.splice,K="[\\x20\\t\\r\\n\\f]",ke=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g");s.contains=function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&n.nodeType===1&&(e.contains?e.contains(n):e.compareDocumentPosition&&e.compareDocumentPosition(n)&16))};var Nt=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Lt(e,t){return t?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}s.escapeSelector=function(e){return(e+"").replace(Nt,Lt)};var xe=j,ft=S;(function(){var e,t,n,o,u,c=ft,d,m,g,v,$,P=s.expando,w=0,_=0,W=Or(),oe=Or(),Q=Or(),Te=Or(),ve=function(p,b){return p===b&&(u=!0),0},Qe="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ke="(?:\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ne="\\["+K+"*("+Ke+")(?:"+K+"*([*^$|!~]?=)"+K+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ke+"))|)"+K+"*\\]",Tt=":("+Ke+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ne+")*)|.*)\\)|)",ae=new RegExp(K+"+","g"),ge=new RegExp("^"+K+"*,"+K+"*"),cr=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),dn=new RegExp(K+"|>"),Ze=new RegExp(Tt),lr=new RegExp("^"+Ke+"$"),et={ID:new RegExp("^#("+Ke+")"),CLASS:new RegExp("^\\.("+Ke+")"),TAG:new RegExp("^("+Ke+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+Tt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+Qe+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},ht=/^(?:input|select|textarea|button)$/i,pt=/^h\d$/i,ze=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,hn=/[+~]/,st=new RegExp("\\\\[\\da-fA-F]{1,6}"+K+"?|\\\\([^\\r\\n\\f])","g"),at=function(p,b){var x="0x"+p.slice(1)-65536;return b||(x<0?String.fromCharCode(x+65536):String.fromCharCode(x>>10|55296,x&1023|56320))},zo=function(){gt()},Bo=Lr(function(p){return p.disabled===!0&&J(p,"fieldset")},{dir:"parentNode",next:"legend"});function Ho(){try{return d.activeElement}catch{}}try{c.apply(l=h.call(xe.childNodes),xe.childNodes),l[xe.childNodes.length].nodeType}catch{c={apply:function(b,x){ft.apply(b,h.call(x))},call:function(b){ft.apply(b,h.call(arguments,1))}}}function ue(p,b,x,C){var T,D,F,z,R,ee,V,Y=b&&b.ownerDocument,te=b?b.nodeType:9;if(x=x||[],typeof p!="string"||!p||te!==1&&te!==9&&te!==11)return x;if(!C&&(gt(b),b=b||d,g)){if(te!==11&&(R=ze.exec(p)))if(T=R[1]){if(te===9)if(F=b.getElementById(T)){if(F.id===T)return c.call(x,F),x}else return x;else if(Y&&(F=Y.getElementById(T))&&ue.contains(b,F)&&F.id===T)return c.call(x,F),x}else{if(R[2])return c.apply(x,b.getElementsByTagName(p)),x;if((T=R[3])&&b.getElementsByClassName)return c.apply(x,b.getElementsByClassName(T)),x}if(!Te[p+" "]&&(!v||!v.test(p))){if(V=p,Y=b,te===1&&(dn.test(p)||cr.test(p))){for(Y=hn.test(p)&&pn(b.parentNode)||b,(Y!=b||!M.scope)&&((z=b.getAttribute("id"))?z=s.escapeSelector(z):b.setAttribute("id",z=P)),ee=fr(p),D=ee.length;D--;)ee[D]=(z?"#"+z:":scope")+" "+Nr(ee[D]);V=ee.join(",")}try{return c.apply(x,Y.querySelectorAll(V)),x}catch{Te(p,!0)}finally{z===P&&b.removeAttribute("id")}}}return wi(p.replace(ke,"$1"),b,x,C)}function Or(){var p=[];function b(x,C){return p.push(x+" ")>t.cacheLength&&delete b[p.shift()],b[x+" "]=C}return b}function Ue(p){return p[P]=!0,p}function Wt(p){var b=d.createElement("fieldset");try{return!!p(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function qo(p){return function(b){return J(b,"input")&&b.type===p}}function Uo(p){return function(b){return(J(b,"input")||J(b,"button"))&&b.type===p}}function vi(p){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===p:b.disabled===p:b.isDisabled===p||b.isDisabled!==!p&&Bo(b)===p:b.disabled===p:"label"in b?b.disabled===p:!1}}function At(p){return Ue(function(b){return b=+b,Ue(function(x,C){for(var T,D=p([],x.length,b),F=D.length;F--;)x[T=D[F]]&&(x[T]=!(C[T]=x[T]))})})}function pn(p){return p&&typeof p.getElementsByTagName<"u"&&p}function gt(p){var b,x=p?p.ownerDocument||p:xe;return x==d||x.nodeType!==9||!x.documentElement||(d=x,m=d.documentElement,g=!s.isXMLDoc(d),$=m.matches||m.webkitMatchesSelector||m.msMatchesSelector,m.msMatchesSelector&&xe!=d&&(b=d.defaultView)&&b.top!==b&&b.addEventListener("unload",zo),M.getById=Wt(function(C){return m.appendChild(C).id=s.expando,!d.getElementsByName||!d.getElementsByName(s.expando).length}),M.disconnectedMatch=Wt(function(C){return $.call(C,"*")}),M.scope=Wt(function(){return d.querySelectorAll(":scope")}),M.cssHas=Wt(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(t.filter.ID=function(C){var T=C.replace(st,at);return function(D){return D.getAttribute("id")===T}},t.find.ID=function(C,T){if(typeof T.getElementById<"u"&&g){var D=T.getElementById(C);return D?[D]:[]}}):(t.filter.ID=function(C){var T=C.replace(st,at);return function(D){var F=typeof D.getAttributeNode<"u"&&D.getAttributeNode("id");return F&&F.value===T}},t.find.ID=function(C,T){if(typeof T.getElementById<"u"&&g){var D,F,z,R=T.getElementById(C);if(R){if(D=R.getAttributeNode("id"),D&&D.value===C)return[R];for(z=T.getElementsByName(C),F=0;R=z[F++];)if(D=R.getAttributeNode("id"),D&&D.value===C)return[R]}return[]}}),t.find.TAG=function(C,T){return typeof T.getElementsByTagName<"u"?T.getElementsByTagName(C):T.querySelectorAll(C)},t.find.CLASS=function(C,T){if(typeof T.getElementsByClassName<"u"&&g)return T.getElementsByClassName(C)},v=[],Wt(function(C){var T;m.appendChild(C).innerHTML="<a id='"+P+"' href='' disabled='disabled'></a><select id='"+P+"-\r\\' disabled='disabled'><option selected=''></option></select>",C.querySelectorAll("[selected]").length||v.push("\\["+K+"*(?:value|"+Qe+")"),C.querySelectorAll("[id~="+P+"-]").length||v.push("~="),C.querySelectorAll("a#"+P+"+*").length||v.push(".#.+[+~]"),C.querySelectorAll(":checked").length||v.push(":checked"),T=d.createElement("input"),T.setAttribute("type","hidden"),C.appendChild(T).setAttribute("name","D"),m.appendChild(C).disabled=!0,C.querySelectorAll(":disabled").length!==2&&v.push(":enabled",":disabled"),T=d.createElement("input"),T.setAttribute("name",""),C.appendChild(T),C.querySelectorAll("[name='']").length||v.push("\\["+K+"*name"+K+"*="+K+`*(?:''|"")`)}),M.cssHas||v.push(":has"),v=v.length&&new RegExp(v.join("|")),ve=function(C,T){if(C===T)return u=!0,0;var D=!C.compareDocumentPosition-!T.compareDocumentPosition;return D||(D=(C.ownerDocument||C)==(T.ownerDocument||T)?C.compareDocumentPosition(T):1,D&1||!M.sortDetached&&T.compareDocumentPosition(C)===D?C===d||C.ownerDocument==xe&&ue.contains(xe,C)?-1:T===d||T.ownerDocument==xe&&ue.contains(xe,T)?1:o?A.call(o,C)-A.call(o,T):0:D&4?-1:1)}),d}ue.matches=function(p,b){return ue(p,null,null,b)},ue.matchesSelector=function(p,b){if(gt(p),g&&!Te[b+" "]&&(!v||!v.test(b)))try{var x=$.call(p,b);if(x||M.disconnectedMatch||p.document&&p.document.nodeType!==11)return x}catch{Te(b,!0)}return ue(b,d,null,[p]).length>0},ue.contains=function(p,b){return(p.ownerDocument||p)!=d&&gt(p),s.contains(p,b)},ue.attr=function(p,b){(p.ownerDocument||p)!=d&&gt(p);var x=t.attrHandle[b.toLowerCase()],C=x&&L.call(t.attrHandle,b.toLowerCase())?x(p,b,!g):void 0;return C!==void 0?C:p.getAttribute(b)},ue.error=function(p){throw new Error("Syntax error, unrecognized expression: "+p)},s.uniqueSort=function(p){var b,x=[],C=0,T=0;if(u=!M.sortStable,o=!M.sortStable&&h.call(p,0),He.call(p,ve),u){for(;b=p[T++];)b===p[T]&&(C=x.push(T));for(;C--;)Ye.call(p,x[C],1)}return o=null,p},s.fn.uniqueSort=function(){return this.pushStack(s.uniqueSort(h.apply(this)))},t=s.expr={cacheLength:50,createPseudo:Ue,match:et,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(p){return p[1]=p[1].replace(st,at),p[3]=(p[3]||p[4]||p[5]||"").replace(st,at),p[2]==="~="&&(p[3]=" "+p[3]+" "),p.slice(0,4)},CHILD:function(p){return p[1]=p[1].toLowerCase(),p[1].slice(0,3)==="nth"?(p[3]||ue.error(p[0]),p[4]=+(p[4]?p[5]+(p[6]||1):2*(p[3]==="even"||p[3]==="odd")),p[5]=+(p[7]+p[8]||p[3]==="odd")):p[3]&&ue.error(p[0]),p},PSEUDO:function(p){var b,x=!p[6]&&p[2];return et.CHILD.test(p[0])?null:(p[3]?p[2]=p[4]||p[5]||"":x&&Ze.test(x)&&(b=fr(x,!0))&&(b=x.indexOf(")",x.length-b)-x.length)&&(p[0]=p[0].slice(0,b),p[2]=x.slice(0,b)),p.slice(0,3))}},filter:{TAG:function(p){var b=p.replace(st,at).toLowerCase();return p==="*"?function(){return!0}:function(x){return J(x,b)}},CLASS:function(p){var b=W[p+" "];return b||(b=new RegExp("(^|"+K+")"+p+"("+K+"|$)"))&&W(p,function(x){return b.test(typeof x.className=="string"&&x.className||typeof x.getAttribute<"u"&&x.getAttribute("class")||"")})},ATTR:function(p,b,x){return function(C){var T=ue.attr(C,p);return T==null?b==="!=":b?(T+="",b==="="?T===x:b==="!="?T!==x:b==="^="?x&&T.indexOf(x)===0:b==="*="?x&&T.indexOf(x)>-1:b==="$="?x&&T.slice(-x.length)===x:b==="~="?(" "+T.replace(ae," ")+" ").indexOf(x)>-1:b==="|="?T===x||T.slice(0,x.length+1)===x+"-":!1):!0}},CHILD:function(p,b,x,C,T){var D=p.slice(0,3)!=="nth",F=p.slice(-4)!=="last",z=b==="of-type";return C===1&&T===0?function(R){return!!R.parentNode}:function(R,ee,V){var Y,te,q,ce,Le,Se=D!==F?"nextSibling":"previousSibling",Be=R.parentNode,tt=z&&R.nodeName.toLowerCase(),Gt=!V&&!z,De=!1;if(Be){if(D){for(;Se;){for(q=R;q=q[Se];)if(z?J(q,tt):q.nodeType===1)return!1;Le=Se=p==="only"&&!Le&&"nextSibling"}return!0}if(Le=[F?Be.firstChild:Be.lastChild],F&&Gt){for(te=Be[P]||(Be[P]={}),Y=te[p]||[],ce=Y[0]===w&&Y[1],De=ce&&Y[2],q=ce&&Be.childNodes[ce];q=++ce&&q&&q[Se]||(De=ce=0)||Le.pop();)if(q.nodeType===1&&++De&&q===R){te[p]=[w,ce,De];break}}else if(Gt&&(te=R[P]||(R[P]={}),Y=te[p]||[],ce=Y[0]===w&&Y[1],De=ce),De===!1)for(;(q=++ce&&q&&q[Se]||(De=ce=0)||Le.pop())&&!((z?J(q,tt):q.nodeType===1)&&++De&&(Gt&&(te=q[P]||(q[P]={}),te[p]=[w,De]),q===R)););return De-=T,De===C||De%C===0&&De/C>=0}}},PSEUDO:function(p,b){var x,C=t.pseudos[p]||t.setFilters[p.toLowerCase()]||ue.error("unsupported pseudo: "+p);return C[P]?C(b):C.length>1?(x=[p,p,"",b],t.setFilters.hasOwnProperty(p.toLowerCase())?Ue(function(T,D){for(var F,z=C(T,b),R=z.length;R--;)F=A.call(T,z[R]),T[F]=!(D[F]=z[R])}):function(T){return C(T,0,x)}):C}},pseudos:{not:Ue(function(p){var b=[],x=[],C=bn(p.replace(ke,"$1"));return C[P]?Ue(function(T,D,F,z){for(var R,ee=C(T,null,z,[]),V=T.length;V--;)(R=ee[V])&&(T[V]=!(D[V]=R))}):function(T,D,F){return b[0]=T,C(b,null,F,x),b[0]=null,!x.pop()}}),has:Ue(function(p){return function(b){return ue(p,b).length>0}}),contains:Ue(function(p){return p=p.replace(st,at),function(b){return(b.textContent||s.text(b)).indexOf(p)>-1}}),lang:Ue(function(p){return lr.test(p||"")||ue.error("unsupported lang: "+p),p=p.replace(st,at).toLowerCase(),function(b){var x;do if(x=g?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return x=x.toLowerCase(),x===p||x.indexOf(p+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(p){var b=r.location&&r.location.hash;return b&&b.slice(1)===p.id},root:function(p){return p===m},focus:function(p){return p===Ho()&&d.hasFocus()&&!!(p.type||p.href||~p.tabIndex)},enabled:vi(!1),disabled:vi(!0),checked:function(p){return J(p,"input")&&!!p.checked||J(p,"option")&&!!p.selected},selected:function(p){return p.parentNode&&p.parentNode.selectedIndex,p.selected===!0},empty:function(p){for(p=p.firstChild;p;p=p.nextSibling)if(p.nodeType<6)return!1;return!0},parent:function(p){return!t.pseudos.empty(p)},header:function(p){return pt.test(p.nodeName)},input:function(p){return ht.test(p.nodeName)},button:function(p){return J(p,"input")&&p.type==="button"||J(p,"button")},text:function(p){var b;return J(p,"input")&&p.type==="text"&&((b=p.getAttribute("type"))==null||b.toLowerCase()==="text")},first:At(function(){return[0]}),last:At(function(p,b){return[b-1]}),eq:At(function(p,b,x){return[x<0?x+b:x]}),even:At(function(p,b){for(var x=0;x<b;x+=2)p.push(x);return p}),odd:At(function(p,b){for(var x=1;x<b;x+=2)p.push(x);return p}),lt:At(function(p,b,x){var C;for(x<0?C=x+b:x>b?C=b:C=x;--C>=0;)p.push(C);return p}),gt:At(function(p,b,x){for(var C=x<0?x+b:x;++C<b;)p.push(C);return p})}},t.pseudos.nth=t.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})t.pseudos[e]=qo(e);for(e in{submit:!0,reset:!0})t.pseudos[e]=Uo(e);function xi(){}xi.prototype=t.filters=t.pseudos,t.setFilters=new xi;function fr(p,b){var x,C,T,D,F,z,R,ee=oe[p+" "];if(ee)return b?0:ee.slice(0);for(F=p,z=[],R=t.preFilter;F;){(!x||(C=ge.exec(F)))&&(C&&(F=F.slice(C[0].length)||F),z.push(T=[])),x=!1,(C=cr.exec(F))&&(x=C.shift(),T.push({value:x,type:C[0].replace(ke," ")}),F=F.slice(x.length));for(D in t.filter)(C=et[D].exec(F))&&(!R[D]||(C=R[D](C)))&&(x=C.shift(),T.push({value:x,type:D,matches:C}),F=F.slice(x.length));if(!x)break}return b?F.length:F?ue.error(p):oe(p,z).slice(0)}function Nr(p){for(var b=0,x=p.length,C="";b<x;b++)C+=p[b].value;return C}function Lr(p,b,x){var C=b.dir,T=b.next,D=T||C,F=x&&D==="parentNode",z=_++;return b.first?function(R,ee,V){for(;R=R[C];)if(R.nodeType===1||F)return p(R,ee,V);return!1}:function(R,ee,V){var Y,te,q=[w,z];if(V){for(;R=R[C];)if((R.nodeType===1||F)&&p(R,ee,V))return!0}else for(;R=R[C];)if(R.nodeType===1||F)if(te=R[P]||(R[P]={}),T&&J(R,T))R=R[C]||R;else{if((Y=te[D])&&Y[0]===w&&Y[1]===z)return q[2]=Y[2];if(te[D]=q,q[2]=p(R,ee,V))return!0}return!1}}function gn(p){return p.length>1?function(b,x,C){for(var T=p.length;T--;)if(!p[T](b,x,C))return!1;return!0}:p[0]}function Vo(p,b,x){for(var C=0,T=b.length;C<T;C++)ue(p,b[C],x);return x}function Fr(p,b,x,C,T){for(var D,F=[],z=0,R=p.length,ee=b!=null;z<R;z++)(D=p[z])&&(!x||x(D,C,T))&&(F.push(D),ee&&b.push(z));return F}function yn(p,b,x,C,T,D){return C&&!C[P]&&(C=yn(C)),T&&!T[P]&&(T=yn(T,D)),Ue(function(F,z,R,ee){var V,Y,te,q,ce=[],Le=[],Se=z.length,Be=F||Vo(b||"*",R.nodeType?[R]:R,[]),tt=p&&(F||!b)?Fr(Be,ce,p,R,ee):Be;if(x?(q=T||(F?p:Se||C)?[]:z,x(tt,q,R,ee)):q=tt,C)for(V=Fr(q,Le),C(V,[],R,ee),Y=V.length;Y--;)(te=V[Y])&&(q[Le[Y]]=!(tt[Le[Y]]=te));if(F){if(T||p){if(T){for(V=[],Y=q.length;Y--;)(te=q[Y])&&V.push(tt[Y]=te);T(null,q=[],V,ee)}for(Y=q.length;Y--;)(te=q[Y])&&(V=T?A.call(F,te):ce[Y])>-1&&(F[V]=!(z[V]=te))}}else q=Fr(q===z?q.splice(Se,q.length):q),T?T(null,z,q,ee):c.apply(z,q)})}function mn(p){for(var b,x,C,T=p.length,D=t.relative[p[0].type],F=D||t.relative[" "],z=D?1:0,R=Lr(function(Y){return Y===b},F,!0),ee=Lr(function(Y){return A.call(b,Y)>-1},F,!0),V=[function(Y,te,q){var ce=!D&&(q||te!=n)||((b=te).nodeType?R(Y,te,q):ee(Y,te,q));return b=null,ce}];z<T;z++)if(x=t.relative[p[z].type])V=[Lr(gn(V),x)];else{if(x=t.filter[p[z].type].apply(null,p[z].matches),x[P]){for(C=++z;C<T&&!t.relative[p[C].type];C++);return yn(z>1&&gn(V),z>1&&Nr(p.slice(0,z-1).concat({value:p[z-2].type===" "?"*":""})).replace(ke,"$1"),x,z<C&&mn(p.slice(z,C)),C<T&&mn(p=p.slice(C)),C<T&&Nr(p))}V.push(x)}return gn(V)}function Wo(p,b){var x=b.length>0,C=p.length>0,T=function(D,F,z,R,ee){var V,Y,te,q=0,ce="0",Le=D&&[],Se=[],Be=n,tt=D||C&&t.find.TAG("*",ee),Gt=w+=Be==null?1:Math.random()||.1,De=tt.length;for(ee&&(n=F==d||F||ee);ce!==De&&(V=tt[ce])!=null;ce++){if(C&&V){for(Y=0,!F&&V.ownerDocument!=d&&(gt(V),z=!g);te=p[Y++];)if(te(V,F||d,z)){c.call(R,V);break}ee&&(w=Gt)}x&&((V=!te&&V)&&q--,D&&Le.push(V))}if(q+=ce,x&&ce!==q){for(Y=0;te=b[Y++];)te(Le,Se,F,z);if(D){if(q>0)for(;ce--;)Le[ce]||Se[ce]||(Se[ce]=de.call(R));Se=Fr(Se)}c.apply(R,Se),ee&&!D&&Se.length>0&&q+b.length>1&&s.uniqueSort(R)}return ee&&(w=Gt,n=Be),Le};return x?Ue(T):T}function bn(p,b){var x,C=[],T=[],D=Q[p+" "];if(!D){for(b||(b=fr(p)),x=b.length;x--;)D=mn(b[x]),D[P]?C.push(D):T.push(D);D=Q(p,Wo(T,C)),D.selector=p}return D}function wi(p,b,x,C){var T,D,F,z,R,ee=typeof p=="function"&&p,V=!C&&fr(p=ee.selector||p);if(x=x||[],V.length===1){if(D=V[0]=V[0].slice(0),D.length>2&&(F=D[0]).type==="ID"&&b.nodeType===9&&g&&t.relative[D[1].type]){if(b=(t.find.ID(F.matches[0].replace(st,at),b)||[])[0],b)ee&&(b=b.parentNode);else return x;p=p.slice(D.shift().value.length)}for(T=et.needsContext.test(p)?0:D.length;T--&&(F=D[T],!t.relative[z=F.type]);)if((R=t.find[z])&&(C=R(F.matches[0].replace(st,at),hn.test(D[0].type)&&pn(b.parentNode)||b))){if(D.splice(T,1),p=C.length&&Nr(D),!p)return c.apply(x,C),x;break}}return(ee||bn(p,V))(C,b,!g,x,!b||hn.test(p)&&pn(b.parentNode)||b),x}M.sortStable=P.split("").sort(ve).join("")===P,gt(),M.sortDetached=Wt(function(p){return p.compareDocumentPosition(d.createElement("fieldset"))&1}),s.find=ue,s.expr[":"]=s.expr.pseudos,s.unique=s.uniqueSort,ue.compile=bn,ue.select=wi,ue.setDocument=gt,ue.tokenize=fr,ue.escape=s.escapeSelector,ue.getText=s.text,ue.isXML=s.isXMLDoc,ue.selectors=s.expr,ue.support=s.support,ue.uniqueSort=s.uniqueSort})();var Xe=function(e,t,n){for(var o=[],u=n!==void 0;(e=e[t])&&e.nodeType!==9;)if(e.nodeType===1){if(u&&s(e).is(n))break;o.push(e)}return o},Ft=function(e,t){for(var n=[];e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n},Rt=s.expr.match.needsContext,It=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function dt(e,t,n){return N(t)?s.grep(e,function(o,u){return!!t.call(o,u,o)!==n}):t.nodeType?s.grep(e,function(o){return o===t!==n}):typeof t!="string"?s.grep(e,function(o){return A.call(t,o)>-1!==n}):s.filter(t,e,n)}s.filter=function(e,t,n){var o=t[0];return n&&(e=":not("+e+")"),t.length===1&&o.nodeType===1?s.find.matchesSelector(o,e)?[o]:[]:s.find.matches(e,s.grep(t,function(u){return u.nodeType===1}))},s.fn.extend({find:function(e){var t,n,o=this.length,u=this;if(typeof e!="string")return this.pushStack(s(e).filter(function(){for(t=0;t<o;t++)if(s.contains(u[t],this))return!0}));for(n=this.pushStack([]),t=0;t<o;t++)s.find(e,u[t],n);return o>1?s.uniqueSort(n):n},filter:function(e){return this.pushStack(dt(this,e||[],!1))},not:function(e){return this.pushStack(dt(this,e||[],!0))},is:function(e){return!!dt(this,typeof e=="string"&&Rt.test(e)?s(e):e||[],!1).length}});var er,$r=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Yr=s.fn.init=function(e,t,n){var o,u;if(!e)return this;if(n=n||er,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?o=[null,e,null]:o=$r.exec(e),o&&(o[1]||!t))if(o[1]){if(t=t instanceof s?t[0]:t,s.merge(this,s.parseHTML(o[1],t&&t.nodeType?t.ownerDocument||t:j,!0)),It.test(o[1])&&s.isPlainObject(t))for(o in t)N(this[o])?this[o](t[o]):this.attr(o,t[o]);return this}else return u=j.getElementById(o[2]),u&&(this[0]=u,this.length=1),this;else return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(N(e))return n.ready!==void 0?n.ready(e):e(s)}return s.makeArray(e,this)};Yr.prototype=s.fn,er=s(j);var Xr=/^(?:parents|prev(?:Until|All))/,kr={children:!0,contents:!0,next:!0,prev:!0};s.fn.extend({has:function(e){var t=s(e,this),n=t.length;return this.filter(function(){for(var o=0;o<n;o++)if(s.contains(this,t[o]))return!0})},closest:function(e,t){var n,o=0,u=this.length,c=[],d=typeof e!="string"&&s(e);if(!Rt.test(e)){for(;o<u;o++)for(n=this[o];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(d?d.index(n)>-1:n.nodeType===1&&s.find.matchesSelector(n,e))){c.push(n);break}}return this.pushStack(c.length>1?s.uniqueSort(c):c)},index:function(e){return e?typeof e=="string"?A.call(s(e),this[0]):A.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(s.uniqueSort(s.merge(this.get(),s(e,t))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Tr(e,t){for(;(e=e[t])&&e.nodeType!==1;);return e}s.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return Xe(e,"parentNode")},parentsUntil:function(e,t,n){return Xe(e,"parentNode",n)},next:function(e){return Tr(e,"nextSibling")},prev:function(e){return Tr(e,"previousSibling")},nextAll:function(e){return Xe(e,"nextSibling")},prevAll:function(e){return Xe(e,"previousSibling")},nextUntil:function(e,t,n){return Xe(e,"nextSibling",n)},prevUntil:function(e,t,n){return Xe(e,"previousSibling",n)},siblings:function(e){return Ft((e.parentNode||{}).firstChild,e)},children:function(e){return Ft(e.firstChild)},contents:function(e){return e.contentDocument!=null&&f(e.contentDocument)?e.contentDocument:(J(e,"template")&&(e=e.content||e),s.merge([],e.childNodes))}},function(e,t){s.fn[e]=function(n,o){var u=s.map(this,t,n);return e.slice(-5)!=="Until"&&(o=n),o&&typeof o=="string"&&(u=s.filter(o,u)),this.length>1&&(kr[e]||s.uniqueSort(u),Xr.test(e)&&u.reverse()),this.pushStack(u)}});var Ie=/[^\x20\t\r\n\f]+/g;function Xi(e){var t={};return s.each(e.match(Ie)||[],function(n,o){t[o]=!0}),t}s.Callbacks=function(e){e=typeof e=="string"?Xi(e):s.extend({},e);var t,n,o,u,c=[],d=[],m=-1,g=function(){for(u=u||e.once,o=t=!0;d.length;m=-1)for(n=d.shift();++m<c.length;)c[m].apply(n[0],n[1])===!1&&e.stopOnFalse&&(m=c.length,n=!1);e.memory||(n=!1),t=!1,u&&(n?c=[]:c="")},v={add:function(){return c&&(n&&!t&&(m=c.length-1,d.push(n)),function $(P){s.each(P,function(w,_){N(_)?(!e.unique||!v.has(_))&&c.push(_):_&&_.length&&pe(_)!=="string"&&$(_)})}(arguments),n&&!t&&g()),this},remove:function(){return s.each(arguments,function($,P){for(var w;(w=s.inArray(P,c,w))>-1;)c.splice(w,1),w<=m&&m--}),this},has:function($){return $?s.inArray($,c)>-1:c.length>0},empty:function(){return c&&(c=[]),this},disable:function(){return u=d=[],c=n="",this},disabled:function(){return!c},lock:function(){return u=d=[],!n&&!t&&(c=n=""),this},locked:function(){return!!u},fireWith:function($,P){return u||(P=P||[],P=[$,P.slice?P.slice():P],d.push(P),t||g()),this},fire:function(){return v.fireWith(this,arguments),this},fired:function(){return!!o}};return v};function jt(e){return e}function Ar(e){throw e}function Bn(e,t,n,o){var u;try{e&&N(u=e.promise)?u.call(e).done(t).fail(n):e&&N(u=e.then)?u.call(e,t,n):t.apply(void 0,[e].slice(o))}catch(c){n.apply(void 0,[c])}}s.extend({Deferred:function(e){var t=[["notify","progress",s.Callbacks("memory"),s.Callbacks("memory"),2],["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),0,"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),1,"rejected"]],n="pending",o={state:function(){return n},always:function(){return u.done(arguments).fail(arguments),this},catch:function(c){return o.then(null,c)},pipe:function(){var c=arguments;return s.Deferred(function(d){s.each(t,function(m,g){var v=N(c[g[4]])&&c[g[4]];u[g[1]](function(){var $=v&&v.apply(this,arguments);$&&N($.promise)?$.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[g[0]+"With"](this,v?[$]:arguments)})}),c=null}).promise()},then:function(c,d,m){var g=0;function v($,P,w,_){return function(){var W=this,oe=arguments,Q=function(){var ve,Qe;if(!($<g)){if(ve=w.apply(W,oe),ve===P.promise())throw new TypeError("Thenable self-resolution");Qe=ve&&(typeof ve=="object"||typeof ve=="function")&&ve.then,N(Qe)?_?Qe.call(ve,v(g,P,jt,_),v(g,P,Ar,_)):(g++,Qe.call(ve,v(g,P,jt,_),v(g,P,Ar,_),v(g,P,jt,P.notifyWith))):(w!==jt&&(W=void 0,oe=[ve]),(_||P.resolveWith)(W,oe))}},Te=_?Q:function(){try{Q()}catch(ve){s.Deferred.exceptionHook&&s.Deferred.exceptionHook(ve,Te.error),$+1>=g&&(w!==Ar&&(W=void 0,oe=[ve]),P.rejectWith(W,oe))}};$?Te():(s.Deferred.getErrorHook?Te.error=s.Deferred.getErrorHook():s.Deferred.getStackHook&&(Te.error=s.Deferred.getStackHook()),r.setTimeout(Te))}}return s.Deferred(function($){t[0][3].add(v(0,$,N(m)?m:jt,$.notifyWith)),t[1][3].add(v(0,$,N(c)?c:jt)),t[2][3].add(v(0,$,N(d)?d:Ar))}).promise()},promise:function(c){return c!=null?s.extend(c,o):o}},u={};return s.each(t,function(c,d){var m=d[2],g=d[5];o[d[1]]=m.add,g&&m.add(function(){n=g},t[3-c][2].disable,t[3-c][3].disable,t[0][2].lock,t[0][3].lock),m.add(d[3].fire),u[d[0]]=function(){return u[d[0]+"With"](this===u?void 0:this,arguments),this},u[d[0]+"With"]=m.fireWith}),o.promise(u),e&&e.call(u,u),u},when:function(e){var t=arguments.length,n=t,o=Array(n),u=h.call(arguments),c=s.Deferred(),d=function(m){return function(g){o[m]=this,u[m]=arguments.length>1?h.call(arguments):g,--t||c.resolveWith(o,u)}};if(t<=1&&(Bn(e,c.done(d(n)).resolve,c.reject,!t),c.state()==="pending"||N(u[n]&&u[n].then)))return c.then();for(;n--;)Bn(u[n],d(n),c.reject);return c.promise()}});var Ji=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;s.Deferred.exceptionHook=function(e,t){r.console&&r.console.warn&&e&&Ji.test(e.name)&&r.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},s.readyException=function(e){r.setTimeout(function(){throw e})};var Jr=s.Deferred();s.fn.ready=function(e){return Jr.then(e).catch(function(t){s.readyException(t)}),this},s.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--s.readyWait:s.isReady)||(s.isReady=!0,!(e!==!0&&--s.readyWait>0)&&Jr.resolveWith(j,[s]))}}),s.ready.then=Jr.then;function Pr(){j.removeEventListener("DOMContentLoaded",Pr),r.removeEventListener("load",Pr),s.ready()}j.readyState==="complete"||j.readyState!=="loading"&&!j.documentElement.doScroll?r.setTimeout(s.ready):(j.addEventListener("DOMContentLoaded",Pr),r.addEventListener("load",Pr));var it=function(e,t,n,o,u,c,d){var m=0,g=e.length,v=n==null;if(pe(n)==="object"){u=!0;for(m in n)it(e,t,m,n[m],!0,c,d)}else if(o!==void 0&&(u=!0,N(o)||(d=!0),v&&(d?(t.call(e,o),t=null):(v=t,t=function($,P,w){return v.call(s($),w)})),t))for(;m<g;m++)t(e[m],n,d?o:o.call(e[m],m,t(e[m],n)));return u?e:v?t.call(e):g?t(e[0],n):c},Qi=/^-ms-/,Ki=/-([a-z])/g;function Zi(e,t){return t.toUpperCase()}function Je(e){return e.replace(Qi,"ms-").replace(Ki,Zi)}var tr=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function rr(){this.expando=s.expando+rr.uid++}rr.uid=1,rr.prototype={cache:function(e){var t=e[this.expando];return t||(t={},tr(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var o,u=this.cache(e);if(typeof t=="string")u[Je(t)]=n;else for(o in t)u[Je(o)]=t[o];return u},get:function(e,t){return t===void 0?this.cache(e):e[this.expando]&&e[this.expando][Je(t)]},access:function(e,t,n){return t===void 0||t&&typeof t=="string"&&n===void 0?this.get(e,t):(this.set(e,t,n),n!==void 0?n:t)},remove:function(e,t){var n,o=e[this.expando];if(o!==void 0){if(t!==void 0)for(Array.isArray(t)?t=t.map(Je):(t=Je(t),t=t in o?[t]:t.match(Ie)||[]),n=t.length;n--;)delete o[t[n]];(t===void 0||s.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return t!==void 0&&!s.isEmptyObject(t)}};var B=new rr,Ee=new rr,eo=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,to=/[A-Z]/g;function ro(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:eo.test(e)?JSON.parse(e):e}function Hn(e,t,n){var o;if(n===void 0&&e.nodeType===1)if(o="data-"+t.replace(to,"-$&").toLowerCase(),n=e.getAttribute(o),typeof n=="string"){try{n=ro(n)}catch{}Ee.set(e,t,n)}else n=void 0;return n}s.extend({hasData:function(e){return Ee.hasData(e)||B.hasData(e)},data:function(e,t,n){return Ee.access(e,t,n)},removeData:function(e,t){Ee.remove(e,t)},_data:function(e,t,n){return B.access(e,t,n)},_removeData:function(e,t){B.remove(e,t)}}),s.fn.extend({data:function(e,t){var n,o,u,c=this[0],d=c&&c.attributes;if(e===void 0){if(this.length&&(u=Ee.get(c),c.nodeType===1&&!B.get(c,"hasDataAttrs"))){for(n=d.length;n--;)d[n]&&(o=d[n].name,o.indexOf("data-")===0&&(o=Je(o.slice(5)),Hn(c,o,u[o])));B.set(c,"hasDataAttrs",!0)}return u}return typeof e=="object"?this.each(function(){Ee.set(this,e)}):it(this,function(m){var g;if(c&&m===void 0)return g=Ee.get(c,e),g!==void 0||(g=Hn(c,e),g!==void 0)?g:void 0;this.each(function(){Ee.set(this,e,m)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ee.remove(this,e)})}}),s.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=B.get(e,t),n&&(!o||Array.isArray(n)?o=B.access(e,t,s.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=s.queue(e,t),o=n.length,u=n.shift(),c=s._queueHooks(e,t),d=function(){s.dequeue(e,t)};u==="inprogress"&&(u=n.shift(),o--),u&&(t==="fx"&&n.unshift("inprogress"),delete c.stop,u.call(e,d,c)),!o&&c&&c.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return B.get(e,n)||B.access(e,n,{empty:s.Callbacks("once memory").add(function(){B.remove(e,[t+"queue",n])})})}}),s.fn.extend({queue:function(e,t){var n=2;return typeof e!="string"&&(t=e,e="fx",n--),arguments.length<n?s.queue(this[0],e):t===void 0?this:this.each(function(){var o=s.queue(this,e,t);s._queueHooks(this,e),e==="fx"&&o[0]!=="inprogress"&&s.dequeue(this,e)})},dequeue:function(e){return this.each(function(){s.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,o=1,u=s.Deferred(),c=this,d=this.length,m=function(){--o||u.resolveWith(c,[c])};for(typeof e!="string"&&(t=e,e=void 0),e=e||"fx";d--;)n=B.get(c[d],e+"queueHooks"),n&&n.empty&&(o++,n.empty.add(m));return m(),u.promise(t)}});var qn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,nr=new RegExp("^(?:([+-])=|)("+qn+")([a-z%]*)$","i"),ot=["Top","Right","Bottom","Left"],Ct=j.documentElement,zt=function(e){return s.contains(e.ownerDocument,e)},no={composed:!0};Ct.getRootNode&&(zt=function(e){return s.contains(e.ownerDocument,e)||e.getRootNode(no)===e.ownerDocument});var Sr=function(e,t){return e=t||e,e.style.display==="none"||e.style.display===""&&zt(e)&&s.css(e,"display")==="none"};function Un(e,t,n,o){var u,c,d=20,m=o?function(){return o.cur()}:function(){return s.css(e,t,"")},g=m(),v=n&&n[3]||(s.cssNumber[t]?"":"px"),$=e.nodeType&&(s.cssNumber[t]||v!=="px"&&+g)&&nr.exec(s.css(e,t));if($&&$[3]!==v){for(g=g/2,v=v||$[3],$=+g||1;d--;)s.style(e,t,$+v),(1-c)*(1-(c=m()/g||.5))<=0&&(d=0),$=$/c;$=$*2,s.style(e,t,$+v),n=n||[]}return n&&($=+$||+g||0,u=n[1]?$+(n[1]+1)*n[2]:+n[2],o&&(o.unit=v,o.start=$,o.end=u)),u}var Vn={};function io(e){var t,n=e.ownerDocument,o=e.nodeName,u=Vn[o];return u||(t=n.body.appendChild(n.createElement(o)),u=s.css(t,"display"),t.parentNode.removeChild(t),u==="none"&&(u="block"),Vn[o]=u,u)}function Bt(e,t){for(var n,o,u=[],c=0,d=e.length;c<d;c++)o=e[c],o.style&&(n=o.style.display,t?(n==="none"&&(u[c]=B.get(o,"display")||null,u[c]||(o.style.display="")),o.style.display===""&&Sr(o)&&(u[c]=io(o))):n!=="none"&&(u[c]="none",B.set(o,"display",n)));for(c=0;c<d;c++)u[c]!=null&&(e[c].style.display=u[c]);return e}s.fn.extend({show:function(){return Bt(this,!0)},hide:function(){return Bt(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){Sr(this)?s(this).show():s(this).hide()})}});var ir=/^(?:checkbox|radio)$/i,Wn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Gn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=j.createDocumentFragment(),t=e.appendChild(j.createElement("div")),n=j.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),M.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,t.innerHTML="<option></option>",M.option=!!t.lastChild})();var je={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};je.tbody=je.tfoot=je.colgroup=je.caption=je.thead,je.th=je.td,M.option||(je.optgroup=je.option=[1,"<select multiple='multiple'>","</select>"]);function Oe(e,t){var n;return typeof e.getElementsByTagName<"u"?n=e.getElementsByTagName(t||"*"):typeof e.querySelectorAll<"u"?n=e.querySelectorAll(t||"*"):n=[],t===void 0||t&&J(e,t)?s.merge([e],n):n}function Qr(e,t){for(var n=0,o=e.length;n<o;n++)B.set(e[n],"globalEval",!t||B.get(t[n],"globalEval"))}var oo=/<|&#?\w+;/;function Yn(e,t,n,o,u){for(var c,d,m,g,v,$,P=t.createDocumentFragment(),w=[],_=0,W=e.length;_<W;_++)if(c=e[_],c||c===0)if(pe(c)==="object")s.merge(w,c.nodeType?[c]:c);else if(!oo.test(c))w.push(t.createTextNode(c));else{for(d=d||P.appendChild(t.createElement("div")),m=(Wn.exec(c)||["",""])[1].toLowerCase(),g=je[m]||je._default,d.innerHTML=g[1]+s.htmlPrefilter(c)+g[2],$=g[0];$--;)d=d.lastChild;s.merge(w,d.childNodes),d=P.firstChild,d.textContent=""}for(P.textContent="",_=0;c=w[_++];){if(o&&s.inArray(c,o)>-1){u&&u.push(c);continue}if(v=zt(c),d=Oe(P.appendChild(c),"script"),v&&Qr(d),n)for($=0;c=d[$++];)Gn.test(c.type||"")&&n.push(c)}return P}var Xn=/^([^.]*)(?:\.(.+)|)/;function Ht(){return!0}function qt(){return!1}function Kr(e,t,n,o,u,c){var d,m;if(typeof t=="object"){typeof n!="string"&&(o=o||n,n=void 0);for(m in t)Kr(e,m,n,o,t[m],c);return e}if(o==null&&u==null?(u=n,o=n=void 0):u==null&&(typeof n=="string"?(u=o,o=void 0):(u=o,o=n,n=void 0)),u===!1)u=qt;else if(!u)return e;return c===1&&(d=u,u=function(g){return s().off(g),d.apply(this,arguments)},u.guid=d.guid||(d.guid=s.guid++)),e.each(function(){s.event.add(this,t,u,o,n)})}s.event={global:{},add:function(e,t,n,o,u){var c,d,m,g,v,$,P,w,_,W,oe,Q=B.get(e);if(tr(e))for(n.handler&&(c=n,n=c.handler,u=c.selector),u&&s.find.matchesSelector(Ct,u),n.guid||(n.guid=s.guid++),(g=Q.events)||(g=Q.events=Object.create(null)),(d=Q.handle)||(d=Q.handle=function(Te){return typeof s<"u"&&s.event.triggered!==Te.type?s.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ie)||[""],v=t.length;v--;)m=Xn.exec(t[v])||[],_=oe=m[1],W=(m[2]||"").split(".").sort(),_&&(P=s.event.special[_]||{},_=(u?P.delegateType:P.bindType)||_,P=s.event.special[_]||{},$=s.extend({type:_,origType:oe,data:o,handler:n,guid:n.guid,selector:u,needsContext:u&&s.expr.match.needsContext.test(u),namespace:W.join(".")},c),(w=g[_])||(w=g[_]=[],w.delegateCount=0,(!P.setup||P.setup.call(e,o,W,d)===!1)&&e.addEventListener&&e.addEventListener(_,d)),P.add&&(P.add.call(e,$),$.handler.guid||($.handler.guid=n.guid)),u?w.splice(w.delegateCount++,0,$):w.push($),s.event.global[_]=!0)},remove:function(e,t,n,o,u){var c,d,m,g,v,$,P,w,_,W,oe,Q=B.hasData(e)&&B.get(e);if(!(!Q||!(g=Q.events))){for(t=(t||"").match(Ie)||[""],v=t.length;v--;){if(m=Xn.exec(t[v])||[],_=oe=m[1],W=(m[2]||"").split(".").sort(),!_){for(_ in g)s.event.remove(e,_+t[v],n,o,!0);continue}for(P=s.event.special[_]||{},_=(o?P.delegateType:P.bindType)||_,w=g[_]||[],m=m[2]&&new RegExp("(^|\\.)"+W.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=c=w.length;c--;)$=w[c],(u||oe===$.origType)&&(!n||n.guid===$.guid)&&(!m||m.test($.namespace))&&(!o||o===$.selector||o==="**"&&$.selector)&&(w.splice(c,1),$.selector&&w.delegateCount--,P.remove&&P.remove.call(e,$));d&&!w.length&&((!P.teardown||P.teardown.call(e,W,Q.handle)===!1)&&s.removeEvent(e,_,Q.handle),delete g[_])}s.isEmptyObject(g)&&B.remove(e,"handle events")}},dispatch:function(e){var t,n,o,u,c,d,m=new Array(arguments.length),g=s.event.fix(e),v=(B.get(this,"events")||Object.create(null))[g.type]||[],$=s.event.special[g.type]||{};for(m[0]=g,t=1;t<arguments.length;t++)m[t]=arguments[t];if(g.delegateTarget=this,!($.preDispatch&&$.preDispatch.call(this,g)===!1)){for(d=s.event.handlers.call(this,g,v),t=0;(u=d[t++])&&!g.isPropagationStopped();)for(g.currentTarget=u.elem,n=0;(c=u.handlers[n++])&&!g.isImmediatePropagationStopped();)(!g.rnamespace||c.namespace===!1||g.rnamespace.test(c.namespace))&&(g.handleObj=c,g.data=c.data,o=((s.event.special[c.origType]||{}).handle||c.handler).apply(u.elem,m),o!==void 0&&(g.result=o)===!1&&(g.preventDefault(),g.stopPropagation()));return $.postDispatch&&$.postDispatch.call(this,g),g.result}},handlers:function(e,t){var n,o,u,c,d,m=[],g=t.delegateCount,v=e.target;if(g&&v.nodeType&&!(e.type==="click"&&e.button>=1)){for(;v!==this;v=v.parentNode||this)if(v.nodeType===1&&!(e.type==="click"&&v.disabled===!0)){for(c=[],d={},n=0;n<g;n++)o=t[n],u=o.selector+" ",d[u]===void 0&&(d[u]=o.needsContext?s(u,this).index(v)>-1:s.find(u,this,null,[v]).length),d[u]&&c.push(o);c.length&&m.push({elem:v,handlers:c})}}return v=this,g<t.length&&m.push({elem:v,handlers:t.slice(g)}),m},addProp:function(e,t){Object.defineProperty(s.Event.prototype,e,{enumerable:!0,configurable:!0,get:N(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(n){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:n})}})},fix:function(e){return e[s.expando]?e:new s.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return ir.test(t.type)&&t.click&&J(t,"input")&&_r(t,"click",!0),!1},trigger:function(e){var t=this||e;return ir.test(t.type)&&t.click&&J(t,"input")&&_r(t,"click"),!0},_default:function(e){var t=e.target;return ir.test(t.type)&&t.click&&J(t,"input")&&B.get(t,"click")||J(t,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function _r(e,t,n){if(!n){B.get(e,t)===void 0&&s.event.add(e,t,Ht);return}B.set(e,t,!1),s.event.add(e,t,{namespace:!1,handler:function(o){var u,c=B.get(this,t);if(o.isTrigger&1&&this[t]){if(c)(s.event.special[t]||{}).delegateType&&o.stopPropagation();else if(c=h.call(arguments),B.set(this,t,c),this[t](),u=B.get(this,t),B.set(this,t,!1),c!==u)return o.stopImmediatePropagation(),o.preventDefault(),u}else c&&(B.set(this,t,s.event.trigger(c[0],c.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=Ht)}})}s.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},s.Event=function(e,t){if(!(this instanceof s.Event))return new s.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Ht:qt,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&s.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[s.expando]=!0},s.Event.prototype={constructor:s.Event,isDefaultPrevented:qt,isPropagationStopped:qt,isImmediatePropagationStopped:qt,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ht,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ht,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ht,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},s.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},s.event.addProp),s.each({focus:"focusin",blur:"focusout"},function(e,t){function n(o){if(j.documentMode){var u=B.get(this,"handle"),c=s.event.fix(o);c.type=o.type==="focusin"?"focus":"blur",c.isSimulated=!0,u(o),c.target===c.currentTarget&&u(c)}else s.event.simulate(t,o.target,s.event.fix(o))}s.event.special[e]={setup:function(){var o;if(_r(this,e,!0),j.documentMode)o=B.get(this,t),o||this.addEventListener(t,n),B.set(this,t,(o||0)+1);else return!1},trigger:function(){return _r(this,e),!0},teardown:function(){var o;if(j.documentMode)o=B.get(this,t)-1,o?B.set(this,t,o):(this.removeEventListener(t,n),B.remove(this,t));else return!1},_default:function(o){return B.get(o.target,e)},delegateType:t},s.event.special[t]={setup:function(){var o=this.ownerDocument||this.document||this,u=j.documentMode?this:o,c=B.get(u,t);c||(j.documentMode?this.addEventListener(t,n):o.addEventListener(e,n,!0)),B.set(u,t,(c||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,u=j.documentMode?this:o,c=B.get(u,t)-1;c?B.set(u,t,c):(j.documentMode?this.removeEventListener(t,n):o.removeEventListener(e,n,!0),B.remove(u,t))}}}),s.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){s.event.special[e]={delegateType:t,bindType:t,handle:function(n){var o,u=this,c=n.relatedTarget,d=n.handleObj;return(!c||c!==u&&!s.contains(u,c))&&(n.type=d.origType,o=d.handler.apply(this,arguments),n.type=t),o}}}),s.fn.extend({on:function(e,t,n,o){return Kr(this,e,t,n,o)},one:function(e,t,n,o){return Kr(this,e,t,n,o,1)},off:function(e,t,n){var o,u;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,s(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof e=="object"){for(u in e)this.off(u,t,e[u]);return this}return(t===!1||typeof t=="function")&&(n=t,t=void 0),n===!1&&(n=qt),this.each(function(){s.event.remove(this,e,n,t)})}});var so=/<script|<style|<link/i,ao=/checked\s*(?:[^=]|=\s*.checked.)/i,uo=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Jn(e,t){return J(e,"table")&&J(t.nodeType!==11?t:t.firstChild,"tr")&&s(e).children("tbody")[0]||e}function co(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function lo(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Qn(e,t){var n,o,u,c,d,m,g;if(t.nodeType===1){if(B.hasData(e)&&(c=B.get(e),g=c.events,g)){B.remove(t,"handle events");for(u in g)for(n=0,o=g[u].length;n<o;n++)s.event.add(t,u,g[u][n])}Ee.hasData(e)&&(d=Ee.access(e),m=s.extend({},d),Ee.set(t,m))}}function fo(e,t){var n=t.nodeName.toLowerCase();n==="input"&&ir.test(e.type)?t.checked=e.checked:(n==="input"||n==="textarea")&&(t.defaultValue=e.defaultValue)}function Ut(e,t,n,o){t=y(t);var u,c,d,m,g,v,$=0,P=e.length,w=P-1,_=t[0],W=N(_);if(W||P>1&&typeof _=="string"&&!M.checkClone&&ao.test(_))return e.each(function(oe){var Q=e.eq(oe);W&&(t[0]=_.call(this,oe,Q.html())),Ut(Q,t,n,o)});if(P&&(u=Yn(t,e[0].ownerDocument,!1,e,o),c=u.firstChild,u.childNodes.length===1&&(u=c),c||o)){for(d=s.map(Oe(u,"script"),co),m=d.length;$<P;$++)g=u,$!==w&&(g=s.clone(g,!0,!0),m&&s.merge(d,Oe(g,"script"))),n.call(e[$],g,$);if(m)for(v=d[d.length-1].ownerDocument,s.map(d,lo),$=0;$<m;$++)g=d[$],Gn.test(g.type||"")&&!B.access(g,"globalEval")&&s.contains(v,g)&&(g.src&&(g.type||"").toLowerCase()!=="module"?s._evalUrl&&!g.noModule&&s._evalUrl(g.src,{nonce:g.nonce||g.getAttribute("nonce")},v):re(g.textContent.replace(uo,""),g,v))}return e}function Kn(e,t,n){for(var o,u=t?s.filter(t,e):e,c=0;(o=u[c])!=null;c++)!n&&o.nodeType===1&&s.cleanData(Oe(o)),o.parentNode&&(n&&zt(o)&&Qr(Oe(o,"script")),o.parentNode.removeChild(o));return e}s.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var o,u,c,d,m=e.cloneNode(!0),g=zt(e);if(!M.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!s.isXMLDoc(e))for(d=Oe(m),c=Oe(e),o=0,u=c.length;o<u;o++)fo(c[o],d[o]);if(t)if(n)for(c=c||Oe(e),d=d||Oe(m),o=0,u=c.length;o<u;o++)Qn(c[o],d[o]);else Qn(e,m);return d=Oe(m,"script"),d.length>0&&Qr(d,!g&&Oe(e,"script")),m},cleanData:function(e){for(var t,n,o,u=s.event.special,c=0;(n=e[c])!==void 0;c++)if(tr(n)){if(t=n[B.expando]){if(t.events)for(o in t.events)u[o]?s.event.remove(n,o):s.removeEvent(n,o,t.handle);n[B.expando]=void 0}n[Ee.expando]&&(n[Ee.expando]=void 0)}}}),s.fn.extend({detach:function(e){return Kn(this,e,!0)},remove:function(e){return Kn(this,e)},text:function(e){return it(this,function(t){return t===void 0?s.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=t)})},null,e,arguments.length)},append:function(){return Ut(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Jn(this,e);t.appendChild(e)}})},prepend:function(){return Ut(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var t=Jn(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ut(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ut(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;(e=this[t])!=null;t++)e.nodeType===1&&(s.cleanData(Oe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=e??!1,t=t??e,this.map(function(){return s.clone(this,e,t)})},html:function(e){return it(this,function(t){var n=this[0]||{},o=0,u=this.length;if(t===void 0&&n.nodeType===1)return n.innerHTML;if(typeof t=="string"&&!so.test(t)&&!je[(Wn.exec(t)||["",""])[1].toLowerCase()]){t=s.htmlPrefilter(t);try{for(;o<u;o++)n=this[o]||{},n.nodeType===1&&(s.cleanData(Oe(n,!1)),n.innerHTML=t);n=0}catch{}}n&&this.empty().append(t)},null,e,arguments.length)},replaceWith:function(){var e=[];return Ut(this,arguments,function(t){var n=this.parentNode;s.inArray(this,e)<0&&(s.cleanData(Oe(this)),n&&n.replaceChild(t,this))},e)}}),s.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){s.fn[e]=function(n){for(var o,u=[],c=s(n),d=c.length-1,m=0;m<=d;m++)o=m===d?this:this.clone(!0),s(c[m])[t](o),S.apply(u,o.get());return this.pushStack(u)}});var Zr=new RegExp("^("+qn+")(?!px)[a-z%]+$","i"),en=/^--/,Dr=function(e){var t=e.ownerDocument.defaultView;return(!t||!t.opener)&&(t=r),t.getComputedStyle(e)},Zn=function(e,t,n){var o,u,c={};for(u in t)c[u]=e.style[u],e.style[u]=t[u];o=n.call(e);for(u in t)e.style[u]=c[u];return o},ho=new RegExp(ot.join("|"),"i");(function(){function e(){if(v){g.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",v.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ct.appendChild(g).appendChild(v);var $=r.getComputedStyle(v);n=$.top!=="1%",m=t($.marginLeft)===12,v.style.right="60%",c=t($.right)===36,o=t($.width)===36,v.style.position="absolute",u=t(v.offsetWidth/3)===12,Ct.removeChild(g),v=null}}function t($){return Math.round(parseFloat($))}var n,o,u,c,d,m,g=j.createElement("div"),v=j.createElement("div");v.style&&(v.style.backgroundClip="content-box",v.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=v.style.backgroundClip==="content-box",s.extend(M,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),c},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),m},scrollboxSize:function(){return e(),u},reliableTrDimensions:function(){var $,P,w,_;return d==null&&($=j.createElement("table"),P=j.createElement("tr"),w=j.createElement("div"),$.style.cssText="position:absolute;left:-11111px;border-collapse:separate",P.style.cssText="box-sizing:content-box;border:1px solid",P.style.height="1px",w.style.height="9px",w.style.display="block",Ct.appendChild($).appendChild(P).appendChild(w),_=r.getComputedStyle(P),d=parseInt(_.height,10)+parseInt(_.borderTopWidth,10)+parseInt(_.borderBottomWidth,10)===P.offsetHeight,Ct.removeChild($)),d}}))})();function or(e,t,n){var o,u,c,d,m=en.test(t),g=e.style;return n=n||Dr(e),n&&(d=n.getPropertyValue(t)||n[t],m&&d&&(d=d.replace(ke,"$1")||void 0),d===""&&!zt(e)&&(d=s.style(e,t)),!M.pixelBoxStyles()&&Zr.test(d)&&ho.test(t)&&(o=g.width,u=g.minWidth,c=g.maxWidth,g.minWidth=g.maxWidth=g.width=d,d=n.width,g.width=o,g.minWidth=u,g.maxWidth=c)),d!==void 0?d+"":d}function ei(e,t){return{get:function(){if(e()){delete this.get;return}return(this.get=t).apply(this,arguments)}}}var ti=["Webkit","Moz","ms"],ri=j.createElement("div").style,ni={};function po(e){for(var t=e[0].toUpperCase()+e.slice(1),n=ti.length;n--;)if(e=ti[n]+t,e in ri)return e}function tn(e){var t=s.cssProps[e]||ni[e];return t||(e in ri?e:ni[e]=po(e)||e)}var go=/^(none|table(?!-c[ea]).+)/,yo={position:"absolute",visibility:"hidden",display:"block"},ii={letterSpacing:"0",fontWeight:"400"};function oi(e,t,n){var o=nr.exec(t);return o?Math.max(0,o[2]-(n||0))+(o[3]||"px"):t}function rn(e,t,n,o,u,c){var d=t==="width"?1:0,m=0,g=0,v=0;if(n===(o?"border":"content"))return 0;for(;d<4;d+=2)n==="margin"&&(v+=s.css(e,n+ot[d],!0,u)),o?(n==="content"&&(g-=s.css(e,"padding"+ot[d],!0,u)),n!=="margin"&&(g-=s.css(e,"border"+ot[d]+"Width",!0,u))):(g+=s.css(e,"padding"+ot[d],!0,u),n!=="padding"?g+=s.css(e,"border"+ot[d]+"Width",!0,u):m+=s.css(e,"border"+ot[d]+"Width",!0,u));return!o&&c>=0&&(g+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-c-g-m-.5))||0),g+v}function si(e,t,n){var o=Dr(e),u=!M.boxSizingReliable()||n,c=u&&s.css(e,"boxSizing",!1,o)==="border-box",d=c,m=or(e,t,o),g="offset"+t[0].toUpperCase()+t.slice(1);if(Zr.test(m)){if(!n)return m;m="auto"}return(!M.boxSizingReliable()&&c||!M.reliableTrDimensions()&&J(e,"tr")||m==="auto"||!parseFloat(m)&&s.css(e,"display",!1,o)==="inline")&&e.getClientRects().length&&(c=s.css(e,"boxSizing",!1,o)==="border-box",d=g in e,d&&(m=e[g])),m=parseFloat(m)||0,m+rn(e,t,n||(c?"border":"content"),d,o,m)+"px"}s.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=or(e,"opacity");return n===""?"1":n}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,t,n,o){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var u,c,d,m=Je(t),g=en.test(t),v=e.style;if(g||(t=tn(m)),d=s.cssHooks[t]||s.cssHooks[m],n!==void 0){if(c=typeof n,c==="string"&&(u=nr.exec(n))&&u[1]&&(n=Un(e,t,u),c="number"),n==null||n!==n)return;c==="number"&&!g&&(n+=u&&u[3]||(s.cssNumber[m]?"":"px")),!M.clearCloneStyle&&n===""&&t.indexOf("background")===0&&(v[t]="inherit"),(!d||!("set"in d)||(n=d.set(e,n,o))!==void 0)&&(g?v.setProperty(t,n):v[t]=n)}else return d&&"get"in d&&(u=d.get(e,!1,o))!==void 0?u:v[t]}},css:function(e,t,n,o){var u,c,d,m=Je(t),g=en.test(t);return g||(t=tn(m)),d=s.cssHooks[t]||s.cssHooks[m],d&&"get"in d&&(u=d.get(e,!0,n)),u===void 0&&(u=or(e,t,o)),u==="normal"&&t in ii&&(u=ii[t]),n===""||n?(c=parseFloat(u),n===!0||isFinite(c)?c||0:u):u}}),s.each(["height","width"],function(e,t){s.cssHooks[t]={get:function(n,o,u){if(o)return go.test(s.css(n,"display"))&&(!n.getClientRects().length||!n.getBoundingClientRect().width)?Zn(n,yo,function(){return si(n,t,u)}):si(n,t,u)},set:function(n,o,u){var c,d=Dr(n),m=!M.scrollboxSize()&&d.position==="absolute",g=m||u,v=g&&s.css(n,"boxSizing",!1,d)==="border-box",$=u?rn(n,t,u,v,d):0;return v&&m&&($-=Math.ceil(n["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(d[t])-rn(n,t,"border",!1,d)-.5)),$&&(c=nr.exec(o))&&(c[3]||"px")!=="px"&&(n.style[t]=o,o=s.css(n,t)),oi(n,o,$)}}}),s.cssHooks.marginLeft=ei(M.reliableMarginLeft,function(e,t){if(t)return(parseFloat(or(e,"marginLeft"))||e.getBoundingClientRect().left-Zn(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),s.each({margin:"",padding:"",border:"Width"},function(e,t){s.cssHooks[e+t]={expand:function(n){for(var o=0,u={},c=typeof n=="string"?n.split(" "):[n];o<4;o++)u[e+ot[o]+t]=c[o]||c[o-2]||c[0];return u}},e!=="margin"&&(s.cssHooks[e+t].set=oi)}),s.fn.extend({css:function(e,t){return it(this,function(n,o,u){var c,d,m={},g=0;if(Array.isArray(o)){for(c=Dr(n),d=o.length;g<d;g++)m[o[g]]=s.css(n,o[g],!1,c);return m}return u!==void 0?s.style(n,o,u):s.css(n,o)},e,t,arguments.length>1)}});function Ne(e,t,n,o,u){return new Ne.prototype.init(e,t,n,o,u)}s.Tween=Ne,Ne.prototype={constructor:Ne,init:function(e,t,n,o,u,c){this.elem=e,this.prop=n,this.easing=u||s.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=c||(s.cssNumber[n]?"":"px")},cur:function(){var e=Ne.propHooks[this.prop];return e&&e.get?e.get(this):Ne.propHooks._default.get(this)},run:function(e){var t,n=Ne.propHooks[this.prop];return this.options.duration?this.pos=t=s.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ne.propHooks._default.set(this),this}},Ne.prototype.init.prototype=Ne.prototype,Ne.propHooks={_default:{get:function(e){var t;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(t=s.css(e.elem,e.prop,""),!t||t==="auto"?0:t)},set:function(e){s.fx.step[e.prop]?s.fx.step[e.prop](e):e.elem.nodeType===1&&(s.cssHooks[e.prop]||e.elem.style[tn(e.prop)]!=null)?s.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ne.propHooks.scrollTop=Ne.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},s.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},s.fx=Ne.prototype.init,s.fx.step={};var Vt,Mr,mo=/^(?:toggle|show|hide)$/,bo=/queueHooks$/;function nn(){Mr&&(j.hidden===!1&&r.requestAnimationFrame?r.requestAnimationFrame(nn):r.setTimeout(nn,s.fx.interval),s.fx.tick())}function ai(){return r.setTimeout(function(){Vt=void 0}),Vt=Date.now()}function Er(e,t){var n,o=0,u={height:e};for(t=t?1:0;o<4;o+=2-t)n=ot[o],u["margin"+n]=u["padding"+n]=e;return t&&(u.opacity=u.width=e),u}function ui(e,t,n){for(var o,u=(qe.tweeners[t]||[]).concat(qe.tweeners["*"]),c=0,d=u.length;c<d;c++)if(o=u[c].call(n,t,e))return o}function vo(e,t,n){var o,u,c,d,m,g,v,$,P="width"in t||"height"in t,w=this,_={},W=e.style,oe=e.nodeType&&Sr(e),Q=B.get(e,"fxshow");n.queue||(d=s._queueHooks(e,"fx"),d.unqueued==null&&(d.unqueued=0,m=d.empty.fire,d.empty.fire=function(){d.unqueued||m()}),d.unqueued++,w.always(function(){w.always(function(){d.unqueued--,s.queue(e,"fx").length||d.empty.fire()})}));for(o in t)if(u=t[o],mo.test(u)){if(delete t[o],c=c||u==="toggle",u===(oe?"hide":"show"))if(u==="show"&&Q&&Q[o]!==void 0)oe=!0;else continue;_[o]=Q&&Q[o]||s.style(e,o)}if(g=!s.isEmptyObject(t),!(!g&&s.isEmptyObject(_))){P&&e.nodeType===1&&(n.overflow=[W.overflow,W.overflowX,W.overflowY],v=Q&&Q.display,v==null&&(v=B.get(e,"display")),$=s.css(e,"display"),$==="none"&&(v?$=v:(Bt([e],!0),v=e.style.display||v,$=s.css(e,"display"),Bt([e]))),($==="inline"||$==="inline-block"&&v!=null)&&s.css(e,"float")==="none"&&(g||(w.done(function(){W.display=v}),v==null&&($=W.display,v=$==="none"?"":$)),W.display="inline-block")),n.overflow&&(W.overflow="hidden",w.always(function(){W.overflow=n.overflow[0],W.overflowX=n.overflow[1],W.overflowY=n.overflow[2]})),g=!1;for(o in _)g||(Q?"hidden"in Q&&(oe=Q.hidden):Q=B.access(e,"fxshow",{display:v}),c&&(Q.hidden=!oe),oe&&Bt([e],!0),w.done(function(){oe||Bt([e]),B.remove(e,"fxshow");for(o in _)s.style(e,o,_[o])})),g=ui(oe?Q[o]:0,o,w),o in Q||(Q[o]=g.start,oe&&(g.end=g.start,g.start=0))}}function xo(e,t){var n,o,u,c,d;for(n in e)if(o=Je(n),u=t[o],c=e[n],Array.isArray(c)&&(u=c[1],c=e[n]=c[0]),n!==o&&(e[o]=c,delete e[n]),d=s.cssHooks[o],d&&"expand"in d){c=d.expand(c),delete e[o];for(n in c)n in e||(e[n]=c[n],t[n]=u)}else t[o]=u}function qe(e,t,n){var o,u,c=0,d=qe.prefilters.length,m=s.Deferred().always(function(){delete g.elem}),g=function(){if(u)return!1;for(var P=Vt||ai(),w=Math.max(0,v.startTime+v.duration-P),_=w/v.duration||0,W=1-_,oe=0,Q=v.tweens.length;oe<Q;oe++)v.tweens[oe].run(W);return m.notifyWith(e,[v,W,w]),W<1&&Q?w:(Q||m.notifyWith(e,[v,1,0]),m.resolveWith(e,[v]),!1)},v=m.promise({elem:e,props:s.extend({},t),opts:s.extend(!0,{specialEasing:{},easing:s.easing._default},n),originalProperties:t,originalOptions:n,startTime:Vt||ai(),duration:n.duration,tweens:[],createTween:function(P,w){var _=s.Tween(e,v.opts,P,w,v.opts.specialEasing[P]||v.opts.easing);return v.tweens.push(_),_},stop:function(P){var w=0,_=P?v.tweens.length:0;if(u)return this;for(u=!0;w<_;w++)v.tweens[w].run(1);return P?(m.notifyWith(e,[v,1,0]),m.resolveWith(e,[v,P])):m.rejectWith(e,[v,P]),this}}),$=v.props;for(xo($,v.opts.specialEasing);c<d;c++)if(o=qe.prefilters[c].call(v,e,$,v.opts),o)return N(o.stop)&&(s._queueHooks(v.elem,v.opts.queue).stop=o.stop.bind(o)),o;return s.map($,ui,v),N(v.opts.start)&&v.opts.start.call(e,v),v.progress(v.opts.progress).done(v.opts.done,v.opts.complete).fail(v.opts.fail).always(v.opts.always),s.fx.timer(s.extend(g,{elem:e,anim:v,queue:v.opts.queue})),v}s.Animation=s.extend(qe,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return Un(n.elem,e,nr.exec(t),n),n}]},tweener:function(e,t){N(e)?(t=e,e=["*"]):e=e.match(Ie);for(var n,o=0,u=e.length;o<u;o++)n=e[o],qe.tweeners[n]=qe.tweeners[n]||[],qe.tweeners[n].unshift(t)},prefilters:[vo],prefilter:function(e,t){t?qe.prefilters.unshift(e):qe.prefilters.push(e)}}),s.speed=function(e,t,n){var o=e&&typeof e=="object"?s.extend({},e):{complete:n||!n&&t||N(e)&&e,duration:e,easing:n&&t||t&&!N(t)&&t};return s.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in s.fx.speeds?o.duration=s.fx.speeds[o.duration]:o.duration=s.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){N(o.old)&&o.old.call(this),o.queue&&s.dequeue(this,o.queue)},o},s.fn.extend({fadeTo:function(e,t,n,o){return this.filter(Sr).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var u=s.isEmptyObject(e),c=s.speed(t,n,o),d=function(){var m=qe(this,s.extend({},e),c);(u||B.get(this,"finish"))&&m.stop(!0)};return d.finish=d,u||c.queue===!1?this.each(d):this.queue(c.queue,d)},stop:function(e,t,n){var o=function(u){var c=u.stop;delete u.stop,c(n)};return typeof e!="string"&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var u=!0,c=e!=null&&e+"queueHooks",d=s.timers,m=B.get(this);if(c)m[c]&&m[c].stop&&o(m[c]);else for(c in m)m[c]&&m[c].stop&&bo.test(c)&&o(m[c]);for(c=d.length;c--;)d[c].elem===this&&(e==null||d[c].queue===e)&&(d[c].anim.stop(n),u=!1,d.splice(c,1));(u||!n)&&s.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=B.get(this),o=n[e+"queue"],u=n[e+"queueHooks"],c=s.timers,d=o?o.length:0;for(n.finish=!0,s.queue(this,e,[]),u&&u.stop&&u.stop.call(this,!0),t=c.length;t--;)c[t].elem===this&&c[t].queue===e&&(c[t].anim.stop(!0),c.splice(t,1));for(t=0;t<d;t++)o[t]&&o[t].finish&&o[t].finish.call(this);delete n.finish})}}),s.each(["toggle","show","hide"],function(e,t){var n=s.fn[t];s.fn[t]=function(o,u,c){return o==null||typeof o=="boolean"?n.apply(this,arguments):this.animate(Er(t,!0),o,u,c)}}),s.each({slideDown:Er("show"),slideUp:Er("hide"),slideToggle:Er("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){s.fn[e]=function(n,o,u){return this.animate(t,n,o,u)}}),s.timers=[],s.fx.tick=function(){var e,t=0,n=s.timers;for(Vt=Date.now();t<n.length;t++)e=n[t],!e()&&n[t]===e&&n.splice(t--,1);n.length||s.fx.stop(),Vt=void 0},s.fx.timer=function(e){s.timers.push(e),s.fx.start()},s.fx.interval=13,s.fx.start=function(){Mr||(Mr=!0,nn())},s.fx.stop=function(){Mr=null},s.fx.speeds={slow:600,fast:200,_default:400},s.fn.delay=function(e,t){return e=s.fx&&s.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(n,o){var u=r.setTimeout(n,e);o.stop=function(){r.clearTimeout(u)}})},function(){var e=j.createElement("input"),t=j.createElement("select"),n=t.appendChild(j.createElement("option"));e.type="checkbox",M.checkOn=e.value!=="",M.optSelected=n.selected,e=j.createElement("input"),e.value="t",e.type="radio",M.radioValue=e.value==="t"}();var ci,sr=s.expr.attrHandle;s.fn.extend({attr:function(e,t){return it(this,s.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){s.removeAttr(this,e)})}}),s.extend({attr:function(e,t,n){var o,u,c=e.nodeType;if(!(c===3||c===8||c===2)){if(typeof e.getAttribute>"u")return s.prop(e,t,n);if((c!==1||!s.isXMLDoc(e))&&(u=s.attrHooks[t.toLowerCase()]||(s.expr.match.bool.test(t)?ci:void 0)),n!==void 0){if(n===null){s.removeAttr(e,t);return}return u&&"set"in u&&(o=u.set(e,n,t))!==void 0?o:(e.setAttribute(t,n+""),n)}return u&&"get"in u&&(o=u.get(e,t))!==null?o:(o=s.find.attr(e,t),o??void 0)}},attrHooks:{type:{set:function(e,t){if(!M.radioValue&&t==="radio"&&J(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,o=0,u=t&&t.match(Ie);if(u&&e.nodeType===1)for(;n=u[o++];)e.removeAttribute(n)}}),ci={set:function(e,t,n){return t===!1?s.removeAttr(e,n):e.setAttribute(n,n),n}},s.each(s.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sr[t]||s.find.attr;sr[t]=function(o,u,c){var d,m,g=u.toLowerCase();return c||(m=sr[g],sr[g]=d,d=n(o,u,c)!=null?g:null,sr[g]=m),d}});var wo=/^(?:input|select|textarea|button)$/i,Co=/^(?:a|area)$/i;s.fn.extend({prop:function(e,t){return it(this,s.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[s.propFix[e]||e]})}}),s.extend({prop:function(e,t,n){var o,u,c=e.nodeType;if(!(c===3||c===8||c===2))return(c!==1||!s.isXMLDoc(e))&&(t=s.propFix[t]||t,u=s.propHooks[t]),n!==void 0?u&&"set"in u&&(o=u.set(e,n,t))!==void 0?o:e[t]=n:u&&"get"in u&&(o=u.get(e,t))!==null?o:e[t]},propHooks:{tabIndex:{get:function(e){var t=s.find.attr(e,"tabindex");return t?parseInt(t,10):wo.test(e.nodeName)||Co.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(s.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),s.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){s.propFix[this.toLowerCase()]=this});function $t(e){var t=e.match(Ie)||[];return t.join(" ")}function kt(e){return e.getAttribute&&e.getAttribute("class")||""}function on(e){return Array.isArray(e)?e:typeof e=="string"?e.match(Ie)||[]:[]}s.fn.extend({addClass:function(e){var t,n,o,u,c,d;return N(e)?this.each(function(m){s(this).addClass(e.call(this,m,kt(this)))}):(t=on(e),t.length?this.each(function(){if(o=kt(this),n=this.nodeType===1&&" "+$t(o)+" ",n){for(c=0;c<t.length;c++)u=t[c],n.indexOf(" "+u+" ")<0&&(n+=u+" ");d=$t(n),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(e){var t,n,o,u,c,d;return N(e)?this.each(function(m){s(this).removeClass(e.call(this,m,kt(this)))}):arguments.length?(t=on(e),t.length?this.each(function(){if(o=kt(this),n=this.nodeType===1&&" "+$t(o)+" ",n){for(c=0;c<t.length;c++)for(u=t[c];n.indexOf(" "+u+" ")>-1;)n=n.replace(" "+u+" "," ");d=$t(n),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(e,t){var n,o,u,c,d=typeof e,m=d==="string"||Array.isArray(e);return N(e)?this.each(function(g){s(this).toggleClass(e.call(this,g,kt(this),t),t)}):typeof t=="boolean"&&m?t?this.addClass(e):this.removeClass(e):(n=on(e),this.each(function(){if(m)for(c=s(this),u=0;u<n.length;u++)o=n[u],c.hasClass(o)?c.removeClass(o):c.addClass(o);else(e===void 0||d==="boolean")&&(o=kt(this),o&&B.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||e===!1?"":B.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,o=0;for(t=" "+e+" ";n=this[o++];)if(n.nodeType===1&&(" "+$t(kt(n))+" ").indexOf(t)>-1)return!0;return!1}});var $o=/\r/g;s.fn.extend({val:function(e){var t,n,o,u=this[0];return arguments.length?(o=N(e),this.each(function(c){var d;this.nodeType===1&&(o?d=e.call(this,c,s(this).val()):d=e,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=s.map(d,function(m){return m==null?"":m+""})),t=s.valHooks[this.type]||s.valHooks[this.nodeName.toLowerCase()],(!t||!("set"in t)||t.set(this,d,"value")===void 0)&&(this.value=d))})):u?(t=s.valHooks[u.type]||s.valHooks[u.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(u,"value"))!==void 0?n:(n=u.value,typeof n=="string"?n.replace($o,""):n??"")):void 0}}),s.extend({valHooks:{option:{get:function(e){var t=s.find.attr(e,"value");return t??$t(s.text(e))}},select:{get:function(e){var t,n,o,u=e.options,c=e.selectedIndex,d=e.type==="select-one",m=d?null:[],g=d?c+1:u.length;for(c<0?o=g:o=d?c:0;o<g;o++)if(n=u[o],(n.selected||o===c)&&!n.disabled&&(!n.parentNode.disabled||!J(n.parentNode,"optgroup"))){if(t=s(n).val(),d)return t;m.push(t)}return m},set:function(e,t){for(var n,o,u=e.options,c=s.makeArray(t),d=u.length;d--;)o=u[d],(o.selected=s.inArray(s.valHooks.option.get(o),c)>-1)&&(n=!0);return n||(e.selectedIndex=-1),c}}}}),s.each(["radio","checkbox"],function(){s.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=s.inArray(s(e).val(),t)>-1}},M.checkOn||(s.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var ar=r.location,li={guid:Date.now()},sn=/\?/;s.parseXML=function(e){var t,n;if(!e||typeof e!="string")return null;try{t=new r.DOMParser().parseFromString(e,"text/xml")}catch{}return n=t&&t.getElementsByTagName("parsererror")[0],(!t||n)&&s.error("Invalid XML: "+(n?s.map(n.childNodes,function(o){return o.textContent}).join(`
`):e)),t};var fi=/^(?:focusinfocus|focusoutblur)$/,di=function(e){e.stopPropagation()};s.extend(s.event,{trigger:function(e,t,n,o){var u,c,d,m,g,v,$,P,w=[n||j],_=L.call(e,"type")?e.type:e,W=L.call(e,"namespace")?e.namespace.split("."):[];if(c=P=d=n=n||j,!(n.nodeType===3||n.nodeType===8)&&!fi.test(_+s.event.triggered)&&(_.indexOf(".")>-1&&(W=_.split("."),_=W.shift(),W.sort()),g=_.indexOf(":")<0&&"on"+_,e=e[s.expando]?e:new s.Event(_,typeof e=="object"&&e),e.isTrigger=o?2:3,e.namespace=W.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+W.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=t==null?[e]:s.makeArray(t,[e]),$=s.event.special[_]||{},!(!o&&$.trigger&&$.trigger.apply(n,t)===!1))){if(!o&&!$.noBubble&&!ie(n)){for(m=$.delegateType||_,fi.test(m+_)||(c=c.parentNode);c;c=c.parentNode)w.push(c),d=c;d===(n.ownerDocument||j)&&w.push(d.defaultView||d.parentWindow||r)}for(u=0;(c=w[u++])&&!e.isPropagationStopped();)P=c,e.type=u>1?m:$.bindType||_,v=(B.get(c,"events")||Object.create(null))[e.type]&&B.get(c,"handle"),v&&v.apply(c,t),v=g&&c[g],v&&v.apply&&tr(c)&&(e.result=v.apply(c,t),e.result===!1&&e.preventDefault());return e.type=_,!o&&!e.isDefaultPrevented()&&(!$._default||$._default.apply(w.pop(),t)===!1)&&tr(n)&&g&&N(n[_])&&!ie(n)&&(d=n[g],d&&(n[g]=null),s.event.triggered=_,e.isPropagationStopped()&&P.addEventListener(_,di),n[_](),e.isPropagationStopped()&&P.removeEventListener(_,di),s.event.triggered=void 0,d&&(n[g]=d)),e.result}},simulate:function(e,t,n){var o=s.extend(new s.Event,n,{type:e,isSimulated:!0});s.event.trigger(o,null,t)}}),s.fn.extend({trigger:function(e,t){return this.each(function(){s.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return s.event.trigger(e,t,n,!0)}});var ko=/\[\]$/,hi=/\r?\n/g,To=/^(?:submit|button|image|reset|file)$/i,Ao=/^(?:input|select|textarea|keygen)/i;function an(e,t,n,o){var u;if(Array.isArray(t))s.each(t,function(c,d){n||ko.test(e)?o(e,d):an(e+"["+(typeof d=="object"&&d!=null?c:"")+"]",d,n,o)});else if(!n&&pe(t)==="object")for(u in t)an(e+"["+u+"]",t[u],n,o);else o(e,t)}s.param=function(e,t){var n,o=[],u=function(c,d){var m=N(d)?d():d;o[o.length]=encodeURIComponent(c)+"="+encodeURIComponent(m??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!s.isPlainObject(e))s.each(e,function(){u(this.name,this.value)});else for(n in e)an(n,e[n],t,u);return o.join("&")},s.fn.extend({serialize:function(){return s.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=s.prop(this,"elements");return e?s.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!s(this).is(":disabled")&&Ao.test(this.nodeName)&&!To.test(e)&&(this.checked||!ir.test(e))}).map(function(e,t){var n=s(this).val();return n==null?null:Array.isArray(n)?s.map(n,function(o){return{name:t.name,value:o.replace(hi,`\r
`)}}):{name:t.name,value:n.replace(hi,`\r
`)}}).get()}});var Po=/%20/g,So=/#.*$/,_o=/([?&])_=[^&]*/,Do=/^(.*?):[ \t]*([^\r\n]*)$/mg,Mo=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eo=/^(?:GET|HEAD)$/,Oo=/^\/\//,pi={},un={},gi="*/".concat("*"),cn=j.createElement("a");cn.href=ar.href;function yi(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var o,u=0,c=t.toLowerCase().match(Ie)||[];if(N(n))for(;o=c[u++];)o[0]==="+"?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(n)):(e[o]=e[o]||[]).push(n)}}function mi(e,t,n,o){var u={},c=e===un;function d(m){var g;return u[m]=!0,s.each(e[m]||[],function(v,$){var P=$(t,n,o);if(typeof P=="string"&&!c&&!u[P])return t.dataTypes.unshift(P),d(P),!1;if(c)return!(g=P)}),g}return d(t.dataTypes[0])||!u["*"]&&d("*")}function ln(e,t){var n,o,u=s.ajaxSettings.flatOptions||{};for(n in t)t[n]!==void 0&&((u[n]?e:o||(o={}))[n]=t[n]);return o&&s.extend(!0,e,o),e}function No(e,t,n){for(var o,u,c,d,m=e.contents,g=e.dataTypes;g[0]==="*";)g.shift(),o===void 0&&(o=e.mimeType||t.getResponseHeader("Content-Type"));if(o){for(u in m)if(m[u]&&m[u].test(o)){g.unshift(u);break}}if(g[0]in n)c=g[0];else{for(u in n){if(!g[0]||e.converters[u+" "+g[0]]){c=u;break}d||(d=u)}c=c||d}if(c)return c!==g[0]&&g.unshift(c),n[c]}function Lo(e,t,n,o){var u,c,d,m,g,v={},$=e.dataTypes.slice();if($[1])for(d in e.converters)v[d.toLowerCase()]=e.converters[d];for(c=$.shift();c;)if(e.responseFields[c]&&(n[e.responseFields[c]]=t),!g&&o&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),g=c,c=$.shift(),c){if(c==="*")c=g;else if(g!=="*"&&g!==c){if(d=v[g+" "+c]||v["* "+c],!d){for(u in v)if(m=u.split(" "),m[1]===c&&(d=v[g+" "+m[0]]||v["* "+m[0]],d)){d===!0?d=v[u]:v[u]!==!0&&(c=m[0],$.unshift(m[1]));break}}if(d!==!0)if(d&&e.throws)t=d(t);else try{t=d(t)}catch(P){return{state:"parsererror",error:d?P:"No conversion from "+g+" to "+c}}}}return{state:"success",data:t}}s.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ar.href,type:"GET",isLocal:Mo.test(ar.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":gi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":s.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ln(ln(e,s.ajaxSettings),t):ln(s.ajaxSettings,e)},ajaxPrefilter:yi(pi),ajaxTransport:yi(un),ajax:function(e,t){typeof e=="object"&&(t=e,e=void 0),t=t||{};var n,o,u,c,d,m,g,v,$,P,w=s.ajaxSetup({},t),_=w.context||w,W=w.context&&(_.nodeType||_.jquery)?s(_):s.event,oe=s.Deferred(),Q=s.Callbacks("once memory"),Te=w.statusCode||{},ve={},Qe={},Ke="canceled",ne={readyState:0,getResponseHeader:function(ae){var ge;if(g){if(!c)for(c={};ge=Do.exec(u);)c[ge[1].toLowerCase()+" "]=(c[ge[1].toLowerCase()+" "]||[]).concat(ge[2]);ge=c[ae.toLowerCase()+" "]}return ge==null?null:ge.join(", ")},getAllResponseHeaders:function(){return g?u:null},setRequestHeader:function(ae,ge){return g==null&&(ae=Qe[ae.toLowerCase()]=Qe[ae.toLowerCase()]||ae,ve[ae]=ge),this},overrideMimeType:function(ae){return g==null&&(w.mimeType=ae),this},statusCode:function(ae){var ge;if(ae)if(g)ne.always(ae[ne.status]);else for(ge in ae)Te[ge]=[Te[ge],ae[ge]];return this},abort:function(ae){var ge=ae||Ke;return n&&n.abort(ge),Tt(0,ge),this}};if(oe.promise(ne),w.url=((e||w.url||ar.href)+"").replace(Oo,ar.protocol+"//"),w.type=t.method||t.type||w.method||w.type,w.dataTypes=(w.dataType||"*").toLowerCase().match(Ie)||[""],w.crossDomain==null){m=j.createElement("a");try{m.href=w.url,m.href=m.href,w.crossDomain=cn.protocol+"//"+cn.host!=m.protocol+"//"+m.host}catch{w.crossDomain=!0}}if(w.data&&w.processData&&typeof w.data!="string"&&(w.data=s.param(w.data,w.traditional)),mi(pi,w,t,ne),g)return ne;v=s.event&&w.global,v&&s.active++===0&&s.event.trigger("ajaxStart"),w.type=w.type.toUpperCase(),w.hasContent=!Eo.test(w.type),o=w.url.replace(So,""),w.hasContent?w.data&&w.processData&&(w.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(w.data=w.data.replace(Po,"+")):(P=w.url.slice(o.length),w.data&&(w.processData||typeof w.data=="string")&&(o+=(sn.test(o)?"&":"?")+w.data,delete w.data),w.cache===!1&&(o=o.replace(_o,"$1"),P=(sn.test(o)?"&":"?")+"_="+li.guid+++P),w.url=o+P),w.ifModified&&(s.lastModified[o]&&ne.setRequestHeader("If-Modified-Since",s.lastModified[o]),s.etag[o]&&ne.setRequestHeader("If-None-Match",s.etag[o])),(w.data&&w.hasContent&&w.contentType!==!1||t.contentType)&&ne.setRequestHeader("Content-Type",w.contentType),ne.setRequestHeader("Accept",w.dataTypes[0]&&w.accepts[w.dataTypes[0]]?w.accepts[w.dataTypes[0]]+(w.dataTypes[0]!=="*"?", "+gi+"; q=0.01":""):w.accepts["*"]);for($ in w.headers)ne.setRequestHeader($,w.headers[$]);if(w.beforeSend&&(w.beforeSend.call(_,ne,w)===!1||g))return ne.abort();if(Ke="abort",Q.add(w.complete),ne.done(w.success),ne.fail(w.error),n=mi(un,w,t,ne),!n)Tt(-1,"No Transport");else{if(ne.readyState=1,v&&W.trigger("ajaxSend",[ne,w]),g)return ne;w.async&&w.timeout>0&&(d=r.setTimeout(function(){ne.abort("timeout")},w.timeout));try{g=!1,n.send(ve,Tt)}catch(ae){if(g)throw ae;Tt(-1,ae)}}function Tt(ae,ge,cr,dn){var Ze,lr,et,ht,pt,ze=ge;g||(g=!0,d&&r.clearTimeout(d),n=void 0,u=dn||"",ne.readyState=ae>0?4:0,Ze=ae>=200&&ae<300||ae===304,cr&&(ht=No(w,ne,cr)),!Ze&&s.inArray("script",w.dataTypes)>-1&&s.inArray("json",w.dataTypes)<0&&(w.converters["text script"]=function(){}),ht=Lo(w,ht,ne,Ze),Ze?(w.ifModified&&(pt=ne.getResponseHeader("Last-Modified"),pt&&(s.lastModified[o]=pt),pt=ne.getResponseHeader("etag"),pt&&(s.etag[o]=pt)),ae===204||w.type==="HEAD"?ze="nocontent":ae===304?ze="notmodified":(ze=ht.state,lr=ht.data,et=ht.error,Ze=!et)):(et=ze,(ae||!ze)&&(ze="error",ae<0&&(ae=0))),ne.status=ae,ne.statusText=(ge||ze)+"",Ze?oe.resolveWith(_,[lr,ze,ne]):oe.rejectWith(_,[ne,ze,et]),ne.statusCode(Te),Te=void 0,v&&W.trigger(Ze?"ajaxSuccess":"ajaxError",[ne,w,Ze?lr:et]),Q.fireWith(_,[ne,ze]),v&&(W.trigger("ajaxComplete",[ne,w]),--s.active||s.event.trigger("ajaxStop")))}return ne},getJSON:function(e,t,n){return s.get(e,t,n,"json")},getScript:function(e,t){return s.get(e,void 0,t,"script")}}),s.each(["get","post"],function(e,t){s[t]=function(n,o,u,c){return N(o)&&(c=c||u,u=o,o=void 0),s.ajax(s.extend({url:n,type:t,dataType:c,data:o,success:u},s.isPlainObject(n)&&n))}}),s.ajaxPrefilter(function(e){var t;for(t in e.headers)t.toLowerCase()==="content-type"&&(e.contentType=e.headers[t]||"")}),s._evalUrl=function(e,t,n){return s.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){s.globalEval(o,t,n)}})},s.fn.extend({wrapAll:function(e){var t;return this[0]&&(N(e)&&(e=e.call(this[0])),t=s(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var n=this;n.firstElementChild;)n=n.firstElementChild;return n}).append(this)),this},wrapInner:function(e){return N(e)?this.each(function(t){s(this).wrapInner(e.call(this,t))}):this.each(function(){var t=s(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=N(e);return this.each(function(n){s(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){s(this).replaceWith(this.childNodes)}),this}}),s.expr.pseudos.hidden=function(e){return!s.expr.pseudos.visible(e)},s.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},s.ajaxSettings.xhr=function(){try{return new r.XMLHttpRequest}catch{}};var Fo={0:200,1223:204},ur=s.ajaxSettings.xhr();M.cors=!!ur&&"withCredentials"in ur,M.ajax=ur=!!ur,s.ajaxTransport(function(e){var t,n;if(M.cors||ur&&!e.crossDomain)return{send:function(o,u){var c,d=e.xhr();if(d.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(c in e.xhrFields)d[c]=e.xhrFields[c];e.mimeType&&d.overrideMimeType&&d.overrideMimeType(e.mimeType),!e.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(c in o)d.setRequestHeader(c,o[c]);t=function(m){return function(){t&&(t=n=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,m==="abort"?d.abort():m==="error"?typeof d.status!="number"?u(0,"error"):u(d.status,d.statusText):u(Fo[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=t(),n=d.onerror=d.ontimeout=t("error"),d.onabort!==void 0?d.onabort=n:d.onreadystatechange=function(){d.readyState===4&&r.setTimeout(function(){t&&n()})},t=t("abort");try{d.send(e.hasContent&&e.data||null)}catch(m){if(t)throw m}},abort:function(){t&&t()}}}),s.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),s.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return s.globalEval(e),e}}}),s.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),s.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var t,n;return{send:function(o,u){t=s("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(c){t.remove(),n=null,c&&u(c.type==="error"?404:200,c.type)}),j.head.appendChild(t[0])},abort:function(){n&&n()}}}});var bi=[],fn=/(=)\?(?=&|$)|\?\?/;s.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bi.pop()||s.expando+"_"+li.guid++;return this[e]=!0,e}}),s.ajaxPrefilter("json jsonp",function(e,t,n){var o,u,c,d=e.jsonp!==!1&&(fn.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&fn.test(e.data)&&"data");if(d||e.dataTypes[0]==="jsonp")return o=e.jsonpCallback=N(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,d?e[d]=e[d].replace(fn,"$1"+o):e.jsonp!==!1&&(e.url+=(sn.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return c||s.error(o+" was not called"),c[0]},e.dataTypes[0]="json",u=r[o],r[o]=function(){c=arguments},n.always(function(){u===void 0?s(r).removeProp(o):r[o]=u,e[o]&&(e.jsonpCallback=t.jsonpCallback,bi.push(o)),c&&N(u)&&u(c[0]),c=u=void 0}),"script"}),M.createHTMLDocument=function(){var e=j.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),s.parseHTML=function(e,t,n){if(typeof e!="string")return[];typeof t=="boolean"&&(n=t,t=!1);var o,u,c;return t||(M.createHTMLDocument?(t=j.implementation.createHTMLDocument(""),o=t.createElement("base"),o.href=j.location.href,t.head.appendChild(o)):t=j),u=It.exec(e),c=!n&&[],u?[t.createElement(u[1])]:(u=Yn([e],t,c),c&&c.length&&s(c).remove(),s.merge([],u.childNodes))},s.fn.load=function(e,t,n){var o,u,c,d=this,m=e.indexOf(" ");return m>-1&&(o=$t(e.slice(m)),e=e.slice(0,m)),N(t)?(n=t,t=void 0):t&&typeof t=="object"&&(u="POST"),d.length>0&&s.ajax({url:e,type:u||"GET",dataType:"html",data:t}).done(function(g){c=arguments,d.html(o?s("<div>").append(s.parseHTML(g)).find(o):g)}).always(n&&function(g,v){d.each(function(){n.apply(this,c||[g.responseText,v,g])})}),this},s.expr.pseudos.animated=function(e){return s.grep(s.timers,function(t){return e===t.elem}).length},s.offset={setOffset:function(e,t,n){var o,u,c,d,m,g,v,$=s.css(e,"position"),P=s(e),w={};$==="static"&&(e.style.position="relative"),m=P.offset(),c=s.css(e,"top"),g=s.css(e,"left"),v=($==="absolute"||$==="fixed")&&(c+g).indexOf("auto")>-1,v?(o=P.position(),d=o.top,u=o.left):(d=parseFloat(c)||0,u=parseFloat(g)||0),N(t)&&(t=t.call(e,n,s.extend({},m))),t.top!=null&&(w.top=t.top-m.top+d),t.left!=null&&(w.left=t.left-m.left+u),"using"in t?t.using.call(e,w):P.css(w)}},s.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(u){s.offset.setOffset(this,e,u)});var t,n,o=this[0];if(o)return o.getClientRects().length?(t=o.getBoundingClientRect(),n=o.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,o=this[0],u={top:0,left:0};if(s.css(o,"position")==="fixed")t=o.getBoundingClientRect();else{for(t=this.offset(),n=o.ownerDocument,e=o.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&s.css(e,"position")==="static";)e=e.parentNode;e&&e!==o&&e.nodeType===1&&(u=s(e).offset(),u.top+=s.css(e,"borderTopWidth",!0),u.left+=s.css(e,"borderLeftWidth",!0))}return{top:t.top-u.top-s.css(o,"marginTop",!0),left:t.left-u.left-s.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&s.css(e,"position")==="static";)e=e.offsetParent;return e||Ct})}}),s.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=t==="pageYOffset";s.fn[e]=function(o){return it(this,function(u,c,d){var m;if(ie(u)?m=u:u.nodeType===9&&(m=u.defaultView),d===void 0)return m?m[t]:u[c];m?m.scrollTo(n?m.pageXOffset:d,n?d:m.pageYOffset):u[c]=d},e,o,arguments.length)}}),s.each(["top","left"],function(e,t){s.cssHooks[t]=ei(M.pixelPosition,function(n,o){if(o)return o=or(n,t),Zr.test(o)?s(n).position()[t]+"px":o})}),s.each({Height:"height",Width:"width"},function(e,t){s.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,o){s.fn[o]=function(u,c){var d=arguments.length&&(n||typeof u!="boolean"),m=n||(u===!0||c===!0?"margin":"border");return it(this,function(g,v,$){var P;return ie(g)?o.indexOf("outer")===0?g["inner"+e]:g.document.documentElement["client"+e]:g.nodeType===9?(P=g.documentElement,Math.max(g.body["scroll"+e],P["scroll"+e],g.body["offset"+e],P["offset"+e],P["client"+e])):$===void 0?s.css(g,v,m):s.style(g,v,$,m)},t,d?u:void 0,d)}})}),s.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){s.fn[t]=function(n){return this.on(t,n)}}),s.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){s.fn[t]=function(n,o){return arguments.length>0?this.on(t,null,n,o):this.trigger(t)}});var Ro=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;s.proxy=function(e,t){var n,o,u;if(typeof t=="string"&&(n=e[t],t=e,e=n),!!N(e))return o=h.call(arguments,2),u=function(){return e.apply(t||this,o.concat(h.call(arguments)))},u.guid=e.guid=e.guid||s.guid++,u},s.holdReady=function(e){e?s.readyWait++:s.ready(!0)},s.isArray=Array.isArray,s.parseJSON=JSON.parse,s.nodeName=J,s.isFunction=N,s.isWindow=ie,s.camelCase=Je,s.type=pe,s.now=Date.now,s.isNumeric=function(e){var t=s.type(e);return(t==="number"||t==="string")&&!isNaN(e-parseFloat(e))},s.trim=function(e){return e==null?"":(e+"").replace(Ro,"$1")};var Io=r.jQuery,jo=r.$;return s.noConflict=function(e){return r.$===s&&(r.$=jo),e&&r.jQuery===s&&(r.jQuery=Io),s},typeof a>"u"&&(r.jQuery=r.$=s),s})}(Ir)),Ir.exports}var Ui=Cs();const Ni=xs(Ui);var $s=Object.getOwnPropertyDescriptor,Vi=(i,r,a,l)=>{for(var f=l>1?void 0:l?$s(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=y(f)||f);return f};let Br=class extends _e{constructor(){super(...arguments),this.handleSlotChange=i=>{(i?i.target:this.renderRoot.querySelector("slot")).assignedElements({flatten:!0}).forEach(l=>{l instanceof HTMLElement&&(l.addEventListener("mousedown",()=>{l.shadowRoot.querySelector("button div").style.paddingInline="1rem"}),l.addEventListener("mouseup",()=>{setTimeout(()=>{l.shadowRoot.querySelector("button div").style.paddingInline="0"},200)}))})}}firstUpdated(){this.handleSlotChange()}render(){return ye`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `}};Br.styles=[We`
            .container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
        `];Br=Vi([Pe("mc-button-group")],Br);let An=class extends Br{constructor(){super(),this.onslotchange=()=>{(async()=>{await this.updateComplete,this.resetRadius();for(let i=0;i<this.children.length;i++){const r=this.children[i],a=r.buttonElement;r.onUnToggled=()=>{this.resetRadius()},r.onToggled=()=>{this.resetRadius(),Ui.map(this.children,l=>{l.selected=!1}),r.selected=!0,a.style.borderRadius=r.borderRadius.full[r.size]}}})(),this.handleSlotChange()}}resetRadius(){for(let i=0;i<this.children.length;i++){const r=this.children[i],a=r.buttonElement;a.style.borderRadius=r.borderRadius.square[r.size],i===0&&(a.style.borderTopLeftRadius=r.borderRadius.full[r.size],a.style.borderBottomLeftRadius=r.borderRadius.full[r.size]),i===this.children.length-1&&(a.style.borderTopRightRadius=r.borderRadius.full[r.size],a.style.borderBottomRightRadius=r.borderRadius.full[r.size])}}firstUpdated(){this.onslotchange()}};An.styles=[We`
            .container {
                display: flex;
                align-items: center;
                gap: 2px;
            }
        `];An=Vi([Pe("mc-connected-button-group")],An);var ks=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,Wi=(i,r,a,l)=>{for(var f=l>1?void 0:l?Ts(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&ks(r,a,f),f};let Hr=class extends _e{constructor(){super(...arguments),this.variant="elevated"}render(){return ye`
            <div class="container" variant=${this.variant}>
                <slot></slot>
            </div>
        `}};Hr.styles=We`
        .container {
            display: flex;
            box-sizing: border-box;
            height: 100%;
            border-radius: 12px;
            transition: 200ms;
        }

        .container[variant=elevated] {
            background: rgb(var(--md-sys-color-surface-container-low));
            box-shadow: var(--md-sys-elevation-level1);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-container-low)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level2);
            }
        }

        .container[variant=filled] {
            background: rgb(var(--md-sys-color-surface-container-highest));
            box-shadow: var(--md-sys-elevation-level0);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface-container-highest)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }
        }

        .container[variant=outlined] {
            background: rgb(var(--md-sys-color-surface));
            border: 1px solid rgb(var(--md-sys-color-outline-variant));
            box-shadow: var(--md-sys-elevation-level0);

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-surface)), rgb(var(--md-sys-color-on-primary)) 8%);
                box-shadow: var(--md-sys-elevation-level1);
            }
        }
    `;Wi([se({type:String})],Hr.prototype,"variant",2);Hr=Wi([Pe("mc-card")],Hr);var As=Object.getOwnPropertyDescriptor,Ps=(i,r,a,l)=>{for(var f=l>1?void 0:l?As(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=y(f)||f);return f};let Li=class extends _e{render(){return ye`
            <style>
                .container {
                    width: 100%;
                    height: 1px;
                    background: rgba(var(--md-sys-color-outline-variant));
                }
            </style>
            <div class="container"></div>
        `}};Li=Ps([Pe("mc-divider")],Li);const Ss=We`
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

`,_s=We`
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
 */const Ds=i=>i.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ms={CHILD:2},Es=i=>(...r)=>({_$litDirective$:i,values:r});class Os{constructor(r){}get _$AU(){return this._$AM._$AU}_$AT(r,a,l){this._$Ct=r,this._$AM=a,this._$Ci=l}_$AS(r,a){return this.update(r,a)}update(r,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=(i,r)=>{var l;const a=i._$AN;if(a===void 0)return!1;for(const f of a)(l=f._$AO)==null||l.call(f,r,!1),gr(f,r);return!0},qr=i=>{let r,a;do{if((r=i._$AM)===void 0)break;a=r._$AN,a.delete(i),i=r}while((a==null?void 0:a.size)===0)},Gi=i=>{for(let r;r=i._$AM;i=r){let a=r._$AN;if(a===void 0)r._$AN=a=new Set;else if(a.has(i))break;a.add(i),Fs(r)}};function Ns(i){this._$AN!==void 0?(qr(this),this._$AM=i,Gi(this)):this._$AM=i}function Ls(i,r=!1,a=0){const l=this._$AH,f=this._$AN;if(f!==void 0&&f.size!==0)if(r)if(Array.isArray(l))for(let h=a;h<l.length;h++)gr(l[h],!1),qr(l[h]);else l!=null&&(gr(l,!1),qr(l));else gr(this,i)}const Fs=i=>{i.type==Ms.CHILD&&(i._$AP??(i._$AP=Ls),i._$AQ??(i._$AQ=Ns))};class Rs extends Os{constructor(){super(...arguments),this._$AN=void 0}_$AT(r,a,l){super._$AT(r,a,l),Gi(this),this.isConnected=r._$AU}_$AO(r,a=!0){var l,f;r!==this.isConnected&&(this.isConnected=r,r?(l=this.reconnected)==null||l.call(this):(f=this.disconnected)==null||f.call(this)),a&&(gr(this,r),qr(this))}setValue(r){if(Ds(this._$Ct))this._$Ct._$AI(r,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=r,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is=()=>new js;class js{}const $n=new WeakMap,zs=Es(class extends Rs{render(i){return be}update(i,[r]){var l;const a=r!==this.G;return a&&this.G!==void 0&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=r,this.ht=(l=i.options)==null?void 0:l.host,this.rt(this.ct=i.element)),be}rt(i){if(this.isConnected||(i=void 0),typeof this.G=="function"){const r=this.ht??globalThis;let a=$n.get(r);a===void 0&&(a=new WeakMap,$n.set(r,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,i),i!==void 0&&this.G.call(this.ht,i)}else this.G.value=i}get lt(){var i,r;return typeof this.G=="function"?(i=$n.get(this.ht??globalThis))==null?void 0:i.get(this.G):(r=this.G)==null?void 0:r.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Bs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,Ge=(i,r,a,l)=>{for(var f=l>1?void 0:l?Hs(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&Bs(r,a,f),f};let Et=class extends _e{constructor(){super(...arguments),this.size="medium",this.color="pc",this.disabled=!1,this.iconSize={small:24,medium:28,large:36},this.height={small:56,medium:80,large:96},this.borderRadius={small:16,medium:20,large:28},this.backgroundColor={p:"primary",s:"secondary",t:"tertiary",pc:"primary-container",sc:"secondary-container",tc:"tertiary-container"}}get buttonElement(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("button")}render(){return ye`
            <style>
                .button {
                    width: ${this.height[this.size]}px !important;
                    height: ${this.height[this.size]}px !important;
                    background: rgba(var(--md-sys-color-${this.backgroundColor[this.color]}));
                    color: rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]}));
                    border-radius: ${this.borderRadius[this.size]}px;

                    &:hover {
                        background: color-mix(in srgb, rgba(var(--md-sys-color-${this.backgroundColor[this.color]})), rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]})) 8%);
                        box-shadow: var(--md-sys-elevation-level4);
                    }
                }
            </style>
            <button part="button" type="button" class="button" color=${this.color} size=${this.size}
                    ?disabled=${this.disabled}>
                <mc-icon size=${this.iconSize[this.size]}>
                    <slot></slot>
                </mc-icon>
                <mc-ripple color=${`on-${this.backgroundColor[this.color]}`} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Et.styles=Ss;Ge([se()],Et.prototype,"size",2);Ge([se()],Et.prototype,"color",2);Ge([se({type:Boolean})],Et.prototype,"disabled",2);Et=Ge([Pe("mc-fab")],Et);let Pn=class extends Et{constructor(){super(),this.icon="",this.fontSize={small:16,medium:22,large:24},this.lineHeight={small:24,medium:28,large:32},this.padding={small:[16,8],medium:[26,12],large:[28,16]}}render(){return ye`
            <style>
                .button {
                    height: ${this.height[this.size]}px;
                    width: auto;
                    background: rgba(var(--md-sys-color-${this.backgroundColor[this.color]}));
                    color: rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]}));
                    border-radius: ${this.borderRadius[this.size]}px;
                    font-size: ${this.fontSize[this.size]}px;
                    line-height: ${this.lineHeight[this.size]}px;
                    
                    &:hover {
                        background: color-mix(in srgb, rgba(var(--md-sys-color-${this.backgroundColor[this.color]})), rgba(var(--md-sys-color-on-${this.backgroundColor[this.color]})) 8%);
                        box-shadow: var(--md-sys-elevation-level4);
                    }
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
        `}};Ge([se()],Pn.prototype,"icon",2);Pn=Ge([Pe("mc-extended-fab")],Pn);let Ot=class extends _e{constructor(){super(...arguments),this.icon="",this.color="p",this.size="medium",this.open=!1,this.height={small:56,medium:80,large:96},this.closeButtonRef=Is(),this.onslotchange=()=>{(async()=>{await this.updateComplete;for(let i=0;i<this.children.length;i++){const r=this.children[i],a=r.buttonElement;r.color=`${this.color}c`,a.style.borderRadius=`${r.height[r.size]/2}px`,r.style.width="80%",r.onclick=()=>{this.clickHandler()}}})()}}firstUpdated(){this.onslotchange()}clickHandler(){this.open=!this.open;for(let i=this.children.length-1;i>=0;i--){const r=this.children[i],a=(this.children.length-i)*20+20;setTimeout(()=>{this.open?r.style.width="100%":r.style.width="60%"},a)}this.open?this.closeButtonRef.value.buttonElement.style.borderRadius="28px":this.closeButtonRef.value.buttonElement.style.borderRadius=null}render(){return ye`
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
                        @click=${this.clickHandler} ${zs(this.closeButtonRef)}>
                    ${this.open?"close":this.icon}
                </mc-fab>
            </div>
        `}};Ot.styles=_s;Ge([se()],Ot.prototype,"icon",2);Ge([se()],Ot.prototype,"color",2);Ge([se()],Ot.prototype,"size",2);Ge([se()],Ot.prototype,"open",2);Ot=Ge([Pe("mc-fab-menu")],Ot);var qs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Fn=(i,r,a,l)=>{for(var f=l>1?void 0:l?Us(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&qs(r,a,f),f};let xr=class extends _e{constructor(){super(...arguments),this.size=24}render(){return ye`
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
            <slot class="icon">${this.name}</slot>
        `}};xr.styles=We`
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
    `;Fn([se()],xr.prototype,"name",2);Fn([se({type:Number})],xr.prototype,"size",2);xr=Fn([Pe("mc-icon")],xr);const Vs=We`
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
`;var Ws=Object.defineProperty,Gs=Object.getOwnPropertyDescriptor,xt=(i,r,a,l)=>{for(var f=l>1?void 0:l?Gs(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&Ws(r,a,f),f};let nt=class extends Ve{constructor(){super(...arguments),this.disabled=!1,this.toggle=!1,this.selected=!1,this.shape="default",this.variant="filled",this.size="small",this.rippleColor={filled:"on-primary",elevated:"primary",tonal:"on-secondary-container",outlined:"on-surface-variant",standard:"on-background"},this.iconSize={extraSmall:20,small:24,medium:24,large:32,extraLarge:40}}get buttonElement(){var i;return(i=this.shadowRoot)==null?void 0:i.querySelector("button")}render(){return ye`
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
        `}};nt.styles=Vs;xt([se({type:Boolean})],nt.prototype,"disabled",2);xt([se({type:Boolean})],nt.prototype,"toggle",2);xt([se({type:Boolean})],nt.prototype,"selected",2);xt([se()],nt.prototype,"shape",2);xt([se()],nt.prototype,"variant",2);xt([se()],nt.prototype,"size",2);nt=xt([Pe("mc-icon-button")],nt);let Fi=class extends nt{constructor(){super(),this.toggle=!0}render(){return ye`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    ${this.selected?ye`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot class="icon" name="selected"></slot>
                        </mc-icon>`:ye`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot></slot>
                        </mc-icon>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Fi=xt([Pe("mc-toggle-icon-button")],Fi);const Ys=We`
    .container{
        display: flex;
        flex-direction: column;
        padding: 8px;
        padding-inline: 0;
    }
`,Xs=We`
    :host {
        display: inline-block;
        vertical-align: middle;
        min-width: 0;
    }

    .container {
        transition: 200ms;
        display: flex;
        flex-direction: row;
        box-sizing: border-box;
        background: rgb(var(--md-sys-color-surface));
        gap: 16px;
        width: 100%;

        padding: 8px 16px;
        height: 72px;

        &:hover {
            background: color-mix(in srgb, rgb(var(--md-sys-color-surface)), rgb(var(--md-sys-color-on-surface)) 8%);
        }

        .body {
            width: 100%;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        .text {
            font-size: 16px;
            color: rgb(var(--md-sys-color-on-surface));
        }

        .description {
            width: 100%;
            font-size: 14px;
            color: rgb(var(--md-sys-color-on-surface-variant));
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }


        &[selected] {
            background: rgb(var(--md-sys-color-secondary-container));

            &:hover {
                background: color-mix(in srgb, rgb(var(--md-sys-color-secondary-container)), rgb(var(--md-sys-color-on-surface)) 8%);
            }

            .text {
                color: rgb(var(--md-sys-color-on-secondary-container));
            }

            .description {
                color: rgb(var(--md-sys-color-on-surface));
            }
        }

        &[lines=a] {
            align-items: center;
        }

        &[lines=b] {
            align-items: center;

            .description {
                -webkit-line-clamp: 1;
            }
        }

        &[lines=c] {
            padding: 12px 16px;
            height: 88px;


            .body {
                align-self: center;
            }

            .description {
                -webkit-line-clamp: 2;
            }
        }

        &[headtype=image] {
            .head::slotted(*) {
                width: 56px;
                height: 56px;
            }
        }

        &[headtype=video] {
            padding: 12px 16px;
            padding-left: 0;
            height: 88px;

            .head::slotted(*) {
                height: 64px;
            }
        }

        &[disabled] {
            background: rgb(var(--md-sys-color-surface));
        }
    }
`;var Js=Object.defineProperty,Qs=Object.getOwnPropertyDescriptor,wt=(i,r,a,l)=>{for(var f=l>1?void 0:l?Qs(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&Js(r,a,f),f};let Sn=class extends _e{render(){return ye`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `}};Sn.styles=Ys;Sn=wt([Pe("mc-list")],Sn);let lt=class extends _e{constructor(){super(...arguments),this.text="",this.description="",this.headType="icon",this.selected=!1,this.disabled=!1,this.lines=0}render(){return ye`
            <div class="container" part="container" ?selected=${this.selected} ?disabled=${this.disabled}
                 lines=${{0:"a",1:"b",2:"c"}[this.lines]} headtype=${this.headType}>
                <slot class="head" name="head"></slot>
                <div class="body">
                    <span class="text">${this.text}</span>
                    <span class="description">${this.description}</span>
                </div>
                <slot class="bottom" name="bottom"></slot>
            </div>
        `}};lt.styles=Xs;wt([se({type:String})],lt.prototype,"text",2);wt([se({type:String})],lt.prototype,"description",2);wt([se({type:String})],lt.prototype,"headType",2);wt([se({type:Boolean})],lt.prototype,"selected",2);wt([se({type:Boolean})],lt.prototype,"disabled",2);wt([se({type:Number})],lt.prototype,"lines",2);lt=wt([Pe("mc-list-item")],lt);var Ks=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,Gr=(i,r,a,l)=>{for(var f=l>1?void 0:l?Zs(r,a):r,h=i.length-1,y;h>=0;h--)(y=i[h])&&(f=(l?y(r,a,f):y(f))||f);return l&&f&&Ks(r,a,f),f};let Kt=class extends _e{constructor(){super(...arguments),this.color="primary",this.opacity=.2,this.disabled=!1,this.currentRipple=null,this._onMouseDown=i=>{var y;if(this.disabled)return;const r=this.getBoundingClientRect(),a=Math.max(r.width,r.height),l=i.clientX-r.left-a/2,f=i.clientY-r.top-a/2,h=document.createElement("span");h.className="ripple",h.style.width=h.style.height=`${a}px`,h.style.left=`${l}px`,h.style.top=`${f}px`,h.style.backgroundColor=`rgb(var(--md-sys-color-${this.color}))`,h.style.boxShadow=`0 0 12px 8px rgb(var(--md-sys-color-${this.color}))`,h.style.opacity=`${this.opacity}`,(y=this.shadowRoot)==null||y.appendChild(h),requestAnimationFrame(()=>{h.classList.add("active")}),this.currentRipple=h},this._onMouseUp=()=>{if(!this.currentRipple)return;const i=this.currentRipple;i.style.opacity="0",i.addEventListener("transitionend",()=>{i.remove(),this.currentRipple===i&&(this.currentRipple=null)},{once:!0})}}render(){return ye``}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("mouseup",this._onMouseUp),this.addEventListener("mouseleave",this._onMouseUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this._onMouseDown),this.removeEventListener("mouseup",this._onMouseUp)}};Kt.styles=We`
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
    `;Gr([se()],Kt.prototype,"color",2);Gr([se()],Kt.prototype,"opacity",2);Gr([se({type:Boolean})],Kt.prototype,"disabled",2);Kt=Gr([Pe("mc-ripple")],Kt);/**
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
 */function Fe(i){return i<0?-1:i===0?0:1}function yr(i,r,a){return(1-a)*i+a*r}function ea(i,r,a){return a<i?i:a>r?r:a}function Ur(i,r,a){return a<i?i:a>r?r:a}function Rn(i){return i=i%360,i<0&&(i=i+360),i}function ta(i,r){return Rn(r-i)<=180?1:-1}function ra(i,r){return 180-Math.abs(Math.abs(i-r)-180)}function _n(i,r){const a=i[0]*r[0][0]+i[1]*r[0][1]+i[2]*r[0][2],l=i[0]*r[1][0]+i[1]*r[1][1]+i[2]*r[1][2],f=i[0]*r[2][0]+i[1]*r[2][1]+i[2]*r[2][2];return[a,l,f]}/**
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
 */const na=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],ia=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],oa=[95.047,100,108.883];function In(i,r,a){return(255<<24|(i&255)<<16|(r&255)<<8|a&255)>>>0}function Ri(i){const r=Dt(i[0]),a=Dt(i[1]),l=Dt(i[2]);return In(r,a,l)}function sa(i){return i>>16&255}function aa(i){return i>>8&255}function ua(i){return i&255}function ca(i,r,a){const l=ia,f=l[0][0]*i+l[0][1]*r+l[0][2]*a,h=l[1][0]*i+l[1][1]*r+l[1][2]*a,y=l[2][0]*i+l[2][1]*r+l[2][2]*a,S=Dt(f),A=Dt(h),E=Dt(y);return In(S,A,E)}function la(i){const r=Xt(sa(i)),a=Xt(aa(i)),l=Xt(ua(i));return _n([r,a,l],na)}function fa(i){const r=mt(i),a=Dt(r);return In(a,a,a)}function Dn(i){const r=la(i)[1];return 116*Yi(r/100)-16}function mt(i){return 100*ha((i+16)/116)}function Mn(i){return Yi(i/100)*116-16}function Xt(i){const r=i/255;return r<=.040449936?r/12.92*100:Math.pow((r+.055)/1.055,2.4)*100}function Dt(i){const r=i/100;let a=0;return r<=.0031308?a=r*12.92:a=1.055*Math.pow(r,1/2.4)-.055,ea(0,255,Math.round(a*255))}function da(){return oa}function Yi(i){const r=.008856451679035631,a=24389/27;return i>r?Math.pow(i,1/3):(a*i+16)/116}function ha(i){const r=.008856451679035631,a=24389/27,l=i*i*i;return l>r?l:(116*i-16)/a}/**
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
 */class rt{static make(r=da(),a=200/Math.PI*mt(50)/100,l=50,f=2,h=!1){const y=r,S=y[0]*.401288+y[1]*.650173+y[2]*-.051461,A=y[0]*-.250268+y[1]*1.204414+y[2]*.045854,E=y[0]*-.002079+y[1]*.048952+y[2]*.953127,O=.8+f/10,L=O>=.9?yr(.59,.69,(O-.9)*10):yr(.525,.59,(O-.8)*10);let H=h?1:O*(1-1/3.6*Math.exp((-a-42)/92));H=H>1?1:H<0?0:H;const X=O,M=[H*(100/S)+1-H,H*(100/A)+1-H,H*(100/E)+1-H],N=1/(5*a+1),ie=N*N*N*N,j=1-ie,le=ie*a+.1*j*j*Math.cbrt(5*a),re=mt(l)/r[1],pe=1.48+Math.sqrt(re),Z=.725/Math.pow(re,.2),me=Z,s=[Math.pow(le*M[0]*S/100,.42),Math.pow(le*M[1]*A/100,.42),Math.pow(le*M[2]*E/100,.42)],fe=[400*s[0]/(s[0]+27.13),400*s[1]/(s[1]+27.13),400*s[2]/(s[2]+27.13)],J=(2*fe[0]+fe[1]+.05*fe[2])*Z;return new rt(re,J,Z,me,L,X,M,le,Math.pow(le,.25),pe)}constructor(r,a,l,f,h,y,S,A,E,O){this.n=r,this.aw=a,this.nbb=l,this.ncb=f,this.c=h,this.nc=y,this.rgbD=S,this.fl=A,this.fLRoot=E,this.z=O}}rt.DEFAULT=rt.make();/**
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
 */class Ce{constructor(r,a,l,f,h,y,S,A,E){this.hue=r,this.chroma=a,this.j=l,this.q=f,this.m=h,this.s=y,this.jstar=S,this.astar=A,this.bstar=E}distance(r){const a=this.jstar-r.jstar,l=this.astar-r.astar,f=this.bstar-r.bstar,h=Math.sqrt(a*a+l*l+f*f);return 1.41*Math.pow(h,.63)}static fromInt(r){return Ce.fromIntInViewingConditions(r,rt.DEFAULT)}static fromIntInViewingConditions(r,a){const l=(r&16711680)>>16,f=(r&65280)>>8,h=r&255,y=Xt(l),S=Xt(f),A=Xt(h),E=.41233895*y+.35762064*S+.18051042*A,O=.2126*y+.7152*S+.0722*A,L=.01932141*y+.11916382*S+.95034478*A,H=.401288*E+.650173*O-.051461*L,X=-.250268*E+1.204414*O+.045854*L,M=-.002079*E+.048952*O+.953127*L,N=a.rgbD[0]*H,ie=a.rgbD[1]*X,j=a.rgbD[2]*M,le=Math.pow(a.fl*Math.abs(N)/100,.42),re=Math.pow(a.fl*Math.abs(ie)/100,.42),pe=Math.pow(a.fl*Math.abs(j)/100,.42),Z=Fe(N)*400*le/(le+27.13),me=Fe(ie)*400*re/(re+27.13),s=Fe(j)*400*pe/(pe+27.13),fe=(11*Z+-12*me+s)/11,J=(Z+me-2*s)/9,de=(20*Z+20*me+21*s)/20,He=(40*Z+20*me+s)/20,K=Math.atan2(J,fe)*180/Math.PI,ke=K<0?K+360:K>=360?K-360:K,Nt=ke*Math.PI/180,Lt=He*a.nbb,xe=100*Math.pow(Lt/a.aw,a.c*a.z),ft=4/a.c*Math.sqrt(xe/100)*(a.aw+4)*a.fLRoot,Xe=ke<20.14?ke+360:ke,Ft=.25*(Math.cos(Xe*Math.PI/180+2)+3.8),It=5e4/13*Ft*a.nc*a.ncb*Math.sqrt(fe*fe+J*J)/(de+.305),dt=Math.pow(It,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),er=dt*Math.sqrt(xe/100),$r=er*a.fLRoot,Yr=50*Math.sqrt(dt*a.c/(a.aw+4)),Xr=(1+100*.007)*xe/(1+.007*xe),kr=1/.0228*Math.log(1+.0228*$r),Tr=kr*Math.cos(Nt),Ie=kr*Math.sin(Nt);return new Ce(ke,er,xe,ft,$r,Yr,Xr,Tr,Ie)}static fromJch(r,a,l){return Ce.fromJchInViewingConditions(r,a,l,rt.DEFAULT)}static fromJchInViewingConditions(r,a,l,f){const h=4/f.c*Math.sqrt(r/100)*(f.aw+4)*f.fLRoot,y=a*f.fLRoot,S=a/Math.sqrt(r/100),A=50*Math.sqrt(S*f.c/(f.aw+4)),E=l*Math.PI/180,O=(1+100*.007)*r/(1+.007*r),L=1/.0228*Math.log(1+.0228*y),H=L*Math.cos(E),X=L*Math.sin(E);return new Ce(l,a,r,h,y,A,O,H,X)}static fromUcs(r,a,l){return Ce.fromUcsInViewingConditions(r,a,l,rt.DEFAULT)}static fromUcsInViewingConditions(r,a,l,f){const h=a,y=l,S=Math.sqrt(h*h+y*y),E=(Math.exp(S*.0228)-1)/.0228/f.fLRoot;let O=Math.atan2(y,h)*(180/Math.PI);O<0&&(O+=360);const L=r/(1-(r-100)*.007);return Ce.fromJchInViewingConditions(L,E,O,f)}toInt(){return this.viewed(rt.DEFAULT)}viewed(r){const a=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),l=Math.pow(a/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),f=this.hue*Math.PI/180,h=.25*(Math.cos(f+2)+3.8),y=r.aw*Math.pow(this.j/100,1/r.c/r.z),S=h*(5e4/13)*r.nc*r.ncb,A=y/r.nbb,E=Math.sin(f),O=Math.cos(f),L=23*(A+.305)*l/(23*S+11*l*O+108*l*E),H=L*O,X=L*E,M=(460*A+451*H+288*X)/1403,N=(460*A-891*H-261*X)/1403,ie=(460*A-220*H-6300*X)/1403,j=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),le=Fe(M)*(100/r.fl)*Math.pow(j,1/.42),re=Math.max(0,27.13*Math.abs(N)/(400-Math.abs(N))),pe=Fe(N)*(100/r.fl)*Math.pow(re,1/.42),Z=Math.max(0,27.13*Math.abs(ie)/(400-Math.abs(ie))),me=Fe(ie)*(100/r.fl)*Math.pow(Z,1/.42),s=le/r.rgbD[0],fe=pe/r.rgbD[1],J=me/r.rgbD[2],de=1.86206786*s-1.01125463*fe+.14918677*J,He=.38752654*s+.62144744*fe-.00897398*J,Ye=-.0158415*s-.03412294*fe+1.04996444*J;return ca(de,He,Ye)}static fromXyzInViewingConditions(r,a,l,f){const h=.401288*r+.650173*a-.051461*l,y=-.250268*r+1.204414*a+.045854*l,S=-.002079*r+.048952*a+.953127*l,A=f.rgbD[0]*h,E=f.rgbD[1]*y,O=f.rgbD[2]*S,L=Math.pow(f.fl*Math.abs(A)/100,.42),H=Math.pow(f.fl*Math.abs(E)/100,.42),X=Math.pow(f.fl*Math.abs(O)/100,.42),M=Fe(A)*400*L/(L+27.13),N=Fe(E)*400*H/(H+27.13),ie=Fe(O)*400*X/(X+27.13),j=(11*M+-12*N+ie)/11,le=(M+N-2*ie)/9,re=(20*M+20*N+21*ie)/20,pe=(40*M+20*N+ie)/20,me=Math.atan2(le,j)*180/Math.PI,s=me<0?me+360:me>=360?me-360:me,fe=s*Math.PI/180,J=pe*f.nbb,de=100*Math.pow(J/f.aw,f.c*f.z),He=4/f.c*Math.sqrt(de/100)*(f.aw+4)*f.fLRoot,Ye=s<20.14?s+360:s,K=1/4*(Math.cos(Ye*Math.PI/180+2)+3.8),Nt=5e4/13*K*f.nc*f.ncb*Math.sqrt(j*j+le*le)/(re+.305),Lt=Math.pow(Nt,.9)*Math.pow(1.64-Math.pow(.29,f.n),.73),xe=Lt*Math.sqrt(de/100),ft=xe*f.fLRoot,Xe=50*Math.sqrt(Lt*f.c/(f.aw+4)),Ft=(1+100*.007)*de/(1+.007*de),Rt=Math.log(1+.0228*ft)/.0228,It=Rt*Math.cos(fe),dt=Rt*Math.sin(fe);return new Ce(s,xe,de,He,ft,Xe,Ft,It,dt)}xyzInViewingConditions(r){const a=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),l=Math.pow(a/Math.pow(1.64-Math.pow(.29,r.n),.73),1/.9),f=this.hue*Math.PI/180,h=.25*(Math.cos(f+2)+3.8),y=r.aw*Math.pow(this.j/100,1/r.c/r.z),S=h*(5e4/13)*r.nc*r.ncb,A=y/r.nbb,E=Math.sin(f),O=Math.cos(f),L=23*(A+.305)*l/(23*S+11*l*O+108*l*E),H=L*O,X=L*E,M=(460*A+451*H+288*X)/1403,N=(460*A-891*H-261*X)/1403,ie=(460*A-220*H-6300*X)/1403,j=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),le=Fe(M)*(100/r.fl)*Math.pow(j,1/.42),re=Math.max(0,27.13*Math.abs(N)/(400-Math.abs(N))),pe=Fe(N)*(100/r.fl)*Math.pow(re,1/.42),Z=Math.max(0,27.13*Math.abs(ie)/(400-Math.abs(ie))),me=Fe(ie)*(100/r.fl)*Math.pow(Z,1/.42),s=le/r.rgbD[0],fe=pe/r.rgbD[1],J=me/r.rgbD[2],de=1.86206786*s-1.01125463*fe+.14918677*J,He=.38752654*s+.62144744*fe-.00897398*J,Ye=-.0158415*s-.03412294*fe+1.04996444*J;return[de,He,Ye]}}/**
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
 */class U{static sanitizeRadians(r){return(r+Math.PI*8)%(Math.PI*2)}static trueDelinearized(r){const a=r/100;let l=0;return a<=.0031308?l=a*12.92:l=1.055*Math.pow(a,1/2.4)-.055,l*255}static chromaticAdaptation(r){const a=Math.pow(Math.abs(r),.42);return Fe(r)*400*a/(a+27.13)}static hueOf(r){const a=_n(r,U.SCALED_DISCOUNT_FROM_LINRGB),l=U.chromaticAdaptation(a[0]),f=U.chromaticAdaptation(a[1]),h=U.chromaticAdaptation(a[2]),y=(11*l+-12*f+h)/11,S=(l+f-2*h)/9;return Math.atan2(S,y)}static areInCyclicOrder(r,a,l){const f=U.sanitizeRadians(a-r),h=U.sanitizeRadians(l-r);return f<h}static intercept(r,a,l){return(a-r)/(l-r)}static lerpPoint(r,a,l){return[r[0]+(l[0]-r[0])*a,r[1]+(l[1]-r[1])*a,r[2]+(l[2]-r[2])*a]}static setCoordinate(r,a,l,f){const h=U.intercept(r[f],a,l[f]);return U.lerpPoint(r,h,l)}static isBounded(r){return 0<=r&&r<=100}static nthVertex(r,a){const l=U.Y_FROM_LINRGB[0],f=U.Y_FROM_LINRGB[1],h=U.Y_FROM_LINRGB[2],y=a%4<=1?0:100,S=a%2===0?0:100;if(a<4){const A=y,E=S,O=(r-A*f-E*h)/l;return U.isBounded(O)?[O,A,E]:[-1,-1,-1]}else if(a<8){const A=y,E=S,O=(r-E*l-A*h)/f;return U.isBounded(O)?[E,O,A]:[-1,-1,-1]}else{const A=y,E=S,O=(r-A*l-E*f)/h;return U.isBounded(O)?[A,E,O]:[-1,-1,-1]}}static bisectToSegment(r,a){let l=[-1,-1,-1],f=l,h=0,y=0,S=!1,A=!0;for(let E=0;E<12;E++){const O=U.nthVertex(r,E);if(O[0]<0)continue;const L=U.hueOf(O);if(!S){l=O,f=O,h=L,y=L,S=!0;continue}(A||U.areInCyclicOrder(h,L,y))&&(A=!1,U.areInCyclicOrder(h,a,L)?(f=O,y=L):(l=O,h=L))}return[l,f]}static midpoint(r,a){return[(r[0]+a[0])/2,(r[1]+a[1])/2,(r[2]+a[2])/2]}static criticalPlaneBelow(r){return Math.floor(r-.5)}static criticalPlaneAbove(r){return Math.ceil(r-.5)}static bisectToLimit(r,a){const l=U.bisectToSegment(r,a);let f=l[0],h=U.hueOf(f),y=l[1];for(let S=0;S<3;S++)if(f[S]!==y[S]){let A=-1,E=255;f[S]<y[S]?(A=U.criticalPlaneBelow(U.trueDelinearized(f[S])),E=U.criticalPlaneAbove(U.trueDelinearized(y[S]))):(A=U.criticalPlaneAbove(U.trueDelinearized(f[S])),E=U.criticalPlaneBelow(U.trueDelinearized(y[S])));for(let O=0;O<8&&!(Math.abs(E-A)<=1);O++){const L=Math.floor((A+E)/2),H=U.CRITICAL_PLANES[L],X=U.setCoordinate(f,H,y,S),M=U.hueOf(X);U.areInCyclicOrder(h,a,M)?(y=X,E=L):(f=X,h=M,A=L)}}return U.midpoint(f,y)}static inverseChromaticAdaptation(r){const a=Math.abs(r),l=Math.max(0,27.13*a/(400-a));return Fe(r)*Math.pow(l,1/.42)}static findResultByJ(r,a,l){let f=Math.sqrt(l)*11;const h=rt.DEFAULT,y=1/Math.pow(1.64-Math.pow(.29,h.n),.73),A=.25*(Math.cos(r+2)+3.8)*(5e4/13)*h.nc*h.ncb,E=Math.sin(r),O=Math.cos(r);for(let L=0;L<5;L++){const H=f/100,X=a===0||f===0?0:a/Math.sqrt(H),M=Math.pow(X*y,1/.9),ie=h.aw*Math.pow(H,1/h.c/h.z)/h.nbb,j=23*(ie+.305)*M/(23*A+11*M*O+108*M*E),le=j*O,re=j*E,pe=(460*ie+451*le+288*re)/1403,Z=(460*ie-891*le-261*re)/1403,me=(460*ie-220*le-6300*re)/1403,s=U.inverseChromaticAdaptation(pe),fe=U.inverseChromaticAdaptation(Z),J=U.inverseChromaticAdaptation(me),de=_n([s,fe,J],U.LINRGB_FROM_SCALED_DISCOUNT);if(de[0]<0||de[1]<0||de[2]<0)return 0;const He=U.Y_FROM_LINRGB[0],Ye=U.Y_FROM_LINRGB[1],K=U.Y_FROM_LINRGB[2],ke=He*de[0]+Ye*de[1]+K*de[2];if(ke<=0)return 0;if(L===4||Math.abs(ke-l)<.002)return de[0]>100.01||de[1]>100.01||de[2]>100.01?0:Ri(de);f=f-(ke-l)*f/(2*ke)}return 0}static solveToInt(r,a,l){if(a<1e-4||l<1e-4||l>99.9999)return fa(l);r=Rn(r);const f=r/180*Math.PI,h=mt(l),y=U.findResultByJ(f,a,h);if(y!==0)return y;const S=U.bisectToLimit(h,f);return Ri(S)}static solveToCam(r,a,l){return Ce.fromInt(U.solveToInt(r,a,l))}}U.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];U.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];U.Y_FROM_LINRGB=[.2126,.7152,.0722];U.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
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
 */class $e{static from(r,a,l){return new $e(U.solveToInt(r,a,l))}static fromInt(r){return new $e(r)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(r){this.setInternalState(U.solveToInt(r,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(r){this.setInternalState(U.solveToInt(this.internalHue,r,this.internalTone))}get tone(){return this.internalTone}set tone(r){this.setInternalState(U.solveToInt(this.internalHue,this.internalChroma,r))}constructor(r){this.argb=r;const a=Ce.fromInt(r);this.internalHue=a.hue,this.internalChroma=a.chroma,this.internalTone=Dn(r),this.argb=r}setInternalState(r){const a=Ce.fromInt(r);this.internalHue=a.hue,this.internalChroma=a.chroma,this.internalTone=Dn(r),this.argb=r}inViewingConditions(r){const l=Ce.fromInt(this.toInt()).xyzInViewingConditions(r),f=Ce.fromXyzInViewingConditions(l[0],l[1],l[2],rt.make());return $e.from(f.hue,f.chroma,Mn(l[1]))}}/**
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
 */class jn{static harmonize(r,a){const l=$e.fromInt(r),f=$e.fromInt(a),h=ra(l.hue,f.hue),y=Math.min(h*.5,15),S=Rn(l.hue+y*ta(l.hue,f.hue));return $e.from(S,l.chroma,l.tone).toInt()}static hctHue(r,a,l){const f=jn.cam16Ucs(r,a,l),h=Ce.fromInt(f),y=Ce.fromInt(r);return $e.from(h.hue,y.chroma,Dn(r)).toInt()}static cam16Ucs(r,a,l){const f=Ce.fromInt(r),h=Ce.fromInt(a),y=f.jstar,S=f.astar,A=f.bstar,E=h.jstar,O=h.astar,L=h.bstar,H=y+(E-y)*l,X=S+(O-S)*l,M=A+(L-A)*l;return Ce.fromUcs(H,X,M).toInt()}}/**
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
 */class we{static ratioOfTones(r,a){return r=Ur(0,100,r),a=Ur(0,100,a),we.ratioOfYs(mt(r),mt(a))}static ratioOfYs(r,a){const l=r>a?r:a,f=l===a?r:a;return(l+5)/(f+5)}static lighter(r,a){if(r<0||r>100)return-1;const l=mt(r),f=a*(l+5)-5,h=we.ratioOfYs(f,l),y=Math.abs(h-a);if(h<a&&y>.04)return-1;const S=Mn(f)+.4;return S<0||S>100?-1:S}static darker(r,a){if(r<0||r>100)return-1;const l=mt(r),f=(l+5)/a-5,h=we.ratioOfYs(l,f),y=Math.abs(h-a);if(h<a&&y>.04)return-1;const S=Mn(f)-.4;return S<0||S>100?-1:S}static lighterUnsafe(r,a){const l=we.lighter(r,a);return l<0?100:l}static darkerUnsafe(r,a){const l=we.darker(r,a);return l<0?0:l}}/**
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
 */class zn{static isDisliked(r){const a=Math.round(r.hue)>=90&&Math.round(r.hue)<=111,l=Math.round(r.chroma)>16,f=Math.round(r.tone)<65;return a&&l&&f}static fixIfDisliked(r){return zn.isDisliked(r)?$e.from(r.hue,r.chroma,70):r}}/**
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
 */class I{static fromPalette(r){return new I(r.name??"",r.palette,r.tone,r.isBackground??!1,r.background,r.secondBackground,r.contrastCurve,r.toneDeltaPair)}constructor(r,a,l,f,h,y,S,A){if(this.name=r,this.palette=a,this.tone=l,this.isBackground=f,this.background=h,this.secondBackground=y,this.contrastCurve=S,this.toneDeltaPair=A,this.hctCache=new Map,!h&&y)throw new Error(`Color ${r} has secondBackgrounddefined, but background is not defined.`);if(!h&&S)throw new Error(`Color ${r} has contrastCurvedefined, but background is not defined.`);if(h&&!S)throw new Error(`Color ${r} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(r){return this.getHct(r).toInt()}getHct(r){const a=this.hctCache.get(r);if(a!=null)return a;const l=this.getTone(r),f=this.palette(r).getHct(l);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(r,f),f}getTone(r){const a=r.contrastLevel<0;if(this.toneDeltaPair){const l=this.toneDeltaPair(r),f=l.roleA,h=l.roleB,y=l.delta,S=l.polarity,A=l.stayTogether,O=this.background(r).getTone(r),L=S==="nearer"||S==="lighter"&&!r.isDark||S==="darker"&&r.isDark,H=L?f:h,X=L?h:f,M=this.name===H.name,N=r.isDark?1:-1,ie=H.contrastCurve.get(r.contrastLevel),j=X.contrastCurve.get(r.contrastLevel),le=H.tone(r);let re=we.ratioOfTones(O,le)>=ie?le:I.foregroundTone(O,ie);const pe=X.tone(r);let Z=we.ratioOfTones(O,pe)>=j?pe:I.foregroundTone(O,j);return a&&(re=I.foregroundTone(O,ie),Z=I.foregroundTone(O,j)),(Z-re)*N>=y||(Z=Ur(0,100,re+y*N),(Z-re)*N>=y||(re=Ur(0,100,Z-y*N))),50<=re&&re<60?N>0?(re=60,Z=Math.max(Z,re+y*N)):(re=49,Z=Math.min(Z,re+y*N)):50<=Z&&Z<60&&(A?N>0?(re=60,Z=Math.max(Z,re+y*N)):(re=49,Z=Math.min(Z,re+y*N)):N>0?Z=60:Z=49),M?re:Z}else{let l=this.tone(r);if(this.background==null)return l;const f=this.background(r).getTone(r),h=this.contrastCurve.get(r.contrastLevel);if(we.ratioOfTones(f,l)>=h||(l=I.foregroundTone(f,h)),a&&(l=I.foregroundTone(f,h)),this.isBackground&&50<=l&&l<60&&(we.ratioOfTones(49,f)>=h?l=49:l=60),this.secondBackground){const[y,S]=[this.background,this.secondBackground],[A,E]=[y(r).getTone(r),S(r).getTone(r)],[O,L]=[Math.max(A,E),Math.min(A,E)];if(we.ratioOfTones(O,l)>=h&&we.ratioOfTones(L,l)>=h)return l;const H=we.lighter(O,h),X=we.darker(L,h),M=[];return H!==-1&&M.push(H),X!==-1&&M.push(X),I.tonePrefersLightForeground(A)||I.tonePrefersLightForeground(E)?H<0?100:H:M.length===1?M[0]:X<0?0:X}return l}}static foregroundTone(r,a){const l=we.lighterUnsafe(r,a),f=we.darkerUnsafe(r,a),h=we.ratioOfTones(l,r),y=we.ratioOfTones(f,r);if(I.tonePrefersLightForeground(r)){const A=Math.abs(h-y)<.1&&h<a&&y<a;return h>=a||h>=y||A?l:f}else return y>=a||y>=h?f:l}static tonePrefersLightForeground(r){return Math.round(r)<60}static toneAllowsLightForeground(r){return Math.round(r)<=49}static enableLightForeground(r){return I.tonePrefersLightForeground(r)&&!I.toneAllowsLightForeground(r)?49:r}}/**
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
 */class Me{static fromInt(r){const a=$e.fromInt(r);return Me.fromHct(a)}static fromHct(r){return new Me(r.hue,r.chroma,r)}static fromHueAndChroma(r,a){const l=new pa(r,a).create();return new Me(r,a,l)}constructor(r,a,l){this.hue=r,this.chroma=a,this.keyColor=l,this.cache=new Map}tone(r){let a=this.cache.get(r);return a===void 0&&(a=$e.from(this.hue,this.chroma,r).toInt(),this.cache.set(r,a)),a}getHct(r){return $e.fromInt(this.tone(r))}}class pa{constructor(r,a){this.hue=r,this.requestedChroma=a,this.chromaCache=new Map,this.maxChromaValue=200}create(){let f=0,h=100;for(;f<h;){const y=Math.floor((f+h)/2),S=this.maxChroma(y)<this.maxChroma(y+1);if(this.maxChroma(y)>=this.requestedChroma-.01)if(Math.abs(f-50)<Math.abs(h-50))h=y;else{if(f===y)return $e.from(this.hue,this.requestedChroma,f);f=y}else S?f=y+1:h=y}return $e.from(this.hue,this.requestedChroma,f)}maxChroma(r){if(this.chromaCache.has(r))return this.chromaCache.get(r);const a=$e.from(this.hue,this.maxChromaValue,r).chroma;return this.chromaCache.set(r,a),a}}/**
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
 */class G{constructor(r,a,l,f){this.low=r,this.normal=a,this.medium=l,this.high=f}get(r){return r<=-1?this.low:r<0?yr(this.low,this.normal,(r- -1)/1):r<.5?yr(this.normal,this.medium,(r-0)/.5):r<1?yr(this.medium,this.high,(r-.5)/.5):this.high}}/**
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
 */class Re{constructor(r,a,l,f,h){this.roleA=r,this.roleB=a,this.delta=l,this.polarity=f,this.stayTogether=h}}/**
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
 */var wr;(function(i){i[i.MONOCHROME=0]="MONOCHROME",i[i.NEUTRAL=1]="NEUTRAL",i[i.TONAL_SPOT=2]="TONAL_SPOT",i[i.VIBRANT=3]="VIBRANT",i[i.EXPRESSIVE=4]="EXPRESSIVE",i[i.FIDELITY=5]="FIDELITY",i[i.CONTENT=6]="CONTENT",i[i.RAINBOW=7]="RAINBOW",i[i.FRUIT_SALAD=8]="FRUIT_SALAD"})(wr||(wr={}));/**
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
 */function Zt(i){return i.variant===wr.FIDELITY||i.variant===wr.CONTENT}function he(i){return i.variant===wr.MONOCHROME}function ga(i,r,a,l){let f=a,h=$e.from(i,r,a);if(h.chroma<r){let y=h.chroma;for(;h.chroma<r;){f+=l?-1:1;const S=$e.from(i,r,f);if(y>S.chroma||Math.abs(S.chroma-r)<.4)break;const A=Math.abs(S.chroma-r),E=Math.abs(h.chroma-r);A<E&&(h=S),y=Math.max(y,S.chroma)}}return f}class k{static highestSurface(r){return r.isDark?k.surfaceBright:k.surfaceDim}}k.contentAccentToneDelta=15;k.primaryPaletteKeyColor=I.fromPalette({name:"primary_palette_key_color",palette:i=>i.primaryPalette,tone:i=>i.primaryPalette.keyColor.tone});k.secondaryPaletteKeyColor=I.fromPalette({name:"secondary_palette_key_color",palette:i=>i.secondaryPalette,tone:i=>i.secondaryPalette.keyColor.tone});k.tertiaryPaletteKeyColor=I.fromPalette({name:"tertiary_palette_key_color",palette:i=>i.tertiaryPalette,tone:i=>i.tertiaryPalette.keyColor.tone});k.neutralPaletteKeyColor=I.fromPalette({name:"neutral_palette_key_color",palette:i=>i.neutralPalette,tone:i=>i.neutralPalette.keyColor.tone});k.neutralVariantPaletteKeyColor=I.fromPalette({name:"neutral_variant_palette_key_color",palette:i=>i.neutralVariantPalette,tone:i=>i.neutralVariantPalette.keyColor.tone});k.background=I.fromPalette({name:"background",palette:i=>i.neutralPalette,tone:i=>i.isDark?6:98,isBackground:!0});k.onBackground=I.fromPalette({name:"on_background",palette:i=>i.neutralPalette,tone:i=>i.isDark?90:10,background:i=>k.background,contrastCurve:new G(3,3,4.5,7)});k.surface=I.fromPalette({name:"surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?6:98,isBackground:!0});k.surfaceDim=I.fromPalette({name:"surface_dim",palette:i=>i.neutralPalette,tone:i=>i.isDark?6:new G(87,87,80,75).get(i.contrastLevel),isBackground:!0});k.surfaceBright=I.fromPalette({name:"surface_bright",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(24,24,29,34).get(i.contrastLevel):98,isBackground:!0});k.surfaceContainerLowest=I.fromPalette({name:"surface_container_lowest",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(4,4,2,0).get(i.contrastLevel):100,isBackground:!0});k.surfaceContainerLow=I.fromPalette({name:"surface_container_low",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(10,10,11,12).get(i.contrastLevel):new G(96,96,96,95).get(i.contrastLevel),isBackground:!0});k.surfaceContainer=I.fromPalette({name:"surface_container",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(12,12,16,20).get(i.contrastLevel):new G(94,94,92,90).get(i.contrastLevel),isBackground:!0});k.surfaceContainerHigh=I.fromPalette({name:"surface_container_high",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(17,17,21,25).get(i.contrastLevel):new G(92,92,88,85).get(i.contrastLevel),isBackground:!0});k.surfaceContainerHighest=I.fromPalette({name:"surface_container_highest",palette:i=>i.neutralPalette,tone:i=>i.isDark?new G(22,22,26,30).get(i.contrastLevel):new G(90,90,84,80).get(i.contrastLevel),isBackground:!0});k.onSurface=I.fromPalette({name:"on_surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?90:10,background:i=>k.highestSurface(i),contrastCurve:new G(4.5,7,11,21)});k.surfaceVariant=I.fromPalette({name:"surface_variant",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?30:90,isBackground:!0});k.onSurfaceVariant=I.fromPalette({name:"on_surface_variant",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?80:30,background:i=>k.highestSurface(i),contrastCurve:new G(3,4.5,7,11)});k.inverseSurface=I.fromPalette({name:"inverse_surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?90:20});k.inverseOnSurface=I.fromPalette({name:"inverse_on_surface",palette:i=>i.neutralPalette,tone:i=>i.isDark?20:95,background:i=>k.inverseSurface,contrastCurve:new G(4.5,7,11,21)});k.outline=I.fromPalette({name:"outline",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?60:50,background:i=>k.highestSurface(i),contrastCurve:new G(1.5,3,4.5,7)});k.outlineVariant=I.fromPalette({name:"outline_variant",palette:i=>i.neutralVariantPalette,tone:i=>i.isDark?30:80,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5)});k.shadow=I.fromPalette({name:"shadow",palette:i=>i.neutralPalette,tone:i=>0});k.scrim=I.fromPalette({name:"scrim",palette:i=>i.neutralPalette,tone:i=>0});k.surfaceTint=I.fromPalette({name:"surface_tint",palette:i=>i.primaryPalette,tone:i=>i.isDark?80:40,isBackground:!0});k.primary=I.fromPalette({name:"primary",palette:i=>i.primaryPalette,tone:i=>he(i)?i.isDark?100:0:i.isDark?80:40,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Re(k.primaryContainer,k.primary,10,"nearer",!1)});k.onPrimary=I.fromPalette({name:"on_primary",palette:i=>i.primaryPalette,tone:i=>he(i)?i.isDark?10:90:i.isDark?20:100,background:i=>k.primary,contrastCurve:new G(4.5,7,11,21)});k.primaryContainer=I.fromPalette({name:"primary_container",palette:i=>i.primaryPalette,tone:i=>Zt(i)?i.sourceColorHct.tone:he(i)?i.isDark?85:25:i.isDark?30:90,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.primaryContainer,k.primary,10,"nearer",!1)});k.onPrimaryContainer=I.fromPalette({name:"on_primary_container",palette:i=>i.primaryPalette,tone:i=>Zt(i)?I.foregroundTone(k.primaryContainer.tone(i),4.5):he(i)?i.isDark?0:100:i.isDark?90:30,background:i=>k.primaryContainer,contrastCurve:new G(3,4.5,7,11)});k.inversePrimary=I.fromPalette({name:"inverse_primary",palette:i=>i.primaryPalette,tone:i=>i.isDark?40:80,background:i=>k.inverseSurface,contrastCurve:new G(3,4.5,7,7)});k.secondary=I.fromPalette({name:"secondary",palette:i=>i.secondaryPalette,tone:i=>i.isDark?80:40,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Re(k.secondaryContainer,k.secondary,10,"nearer",!1)});k.onSecondary=I.fromPalette({name:"on_secondary",palette:i=>i.secondaryPalette,tone:i=>he(i)?i.isDark?10:100:i.isDark?20:100,background:i=>k.secondary,contrastCurve:new G(4.5,7,11,21)});k.secondaryContainer=I.fromPalette({name:"secondary_container",palette:i=>i.secondaryPalette,tone:i=>{const r=i.isDark?30:90;return he(i)?i.isDark?30:85:Zt(i)?ga(i.secondaryPalette.hue,i.secondaryPalette.chroma,r,!i.isDark):r},isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.secondaryContainer,k.secondary,10,"nearer",!1)});k.onSecondaryContainer=I.fromPalette({name:"on_secondary_container",palette:i=>i.secondaryPalette,tone:i=>he(i)?i.isDark?90:10:Zt(i)?I.foregroundTone(k.secondaryContainer.tone(i),4.5):i.isDark?90:30,background:i=>k.secondaryContainer,contrastCurve:new G(3,4.5,7,11)});k.tertiary=I.fromPalette({name:"tertiary",palette:i=>i.tertiaryPalette,tone:i=>he(i)?i.isDark?90:25:i.isDark?80:40,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Re(k.tertiaryContainer,k.tertiary,10,"nearer",!1)});k.onTertiary=I.fromPalette({name:"on_tertiary",palette:i=>i.tertiaryPalette,tone:i=>he(i)?i.isDark?10:90:i.isDark?20:100,background:i=>k.tertiary,contrastCurve:new G(4.5,7,11,21)});k.tertiaryContainer=I.fromPalette({name:"tertiary_container",palette:i=>i.tertiaryPalette,tone:i=>{if(he(i))return i.isDark?60:49;if(!Zt(i))return i.isDark?30:90;const r=i.tertiaryPalette.getHct(i.sourceColorHct.tone);return zn.fixIfDisliked(r).tone},isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.tertiaryContainer,k.tertiary,10,"nearer",!1)});k.onTertiaryContainer=I.fromPalette({name:"on_tertiary_container",palette:i=>i.tertiaryPalette,tone:i=>he(i)?i.isDark?0:100:Zt(i)?I.foregroundTone(k.tertiaryContainer.tone(i),4.5):i.isDark?90:30,background:i=>k.tertiaryContainer,contrastCurve:new G(3,4.5,7,11)});k.error=I.fromPalette({name:"error",palette:i=>i.errorPalette,tone:i=>i.isDark?80:40,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(3,4.5,7,7),toneDeltaPair:i=>new Re(k.errorContainer,k.error,10,"nearer",!1)});k.onError=I.fromPalette({name:"on_error",palette:i=>i.errorPalette,tone:i=>i.isDark?20:100,background:i=>k.error,contrastCurve:new G(4.5,7,11,21)});k.errorContainer=I.fromPalette({name:"error_container",palette:i=>i.errorPalette,tone:i=>i.isDark?30:90,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.errorContainer,k.error,10,"nearer",!1)});k.onErrorContainer=I.fromPalette({name:"on_error_container",palette:i=>i.errorPalette,tone:i=>he(i)?i.isDark?90:10:i.isDark?90:30,background:i=>k.errorContainer,contrastCurve:new G(3,4.5,7,11)});k.primaryFixed=I.fromPalette({name:"primary_fixed",palette:i=>i.primaryPalette,tone:i=>he(i)?40:90,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.primaryFixed,k.primaryFixedDim,10,"lighter",!0)});k.primaryFixedDim=I.fromPalette({name:"primary_fixed_dim",palette:i=>i.primaryPalette,tone:i=>he(i)?30:80,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.primaryFixed,k.primaryFixedDim,10,"lighter",!0)});k.onPrimaryFixed=I.fromPalette({name:"on_primary_fixed",palette:i=>i.primaryPalette,tone:i=>he(i)?100:10,background:i=>k.primaryFixedDim,secondBackground:i=>k.primaryFixed,contrastCurve:new G(4.5,7,11,21)});k.onPrimaryFixedVariant=I.fromPalette({name:"on_primary_fixed_variant",palette:i=>i.primaryPalette,tone:i=>he(i)?90:30,background:i=>k.primaryFixedDim,secondBackground:i=>k.primaryFixed,contrastCurve:new G(3,4.5,7,11)});k.secondaryFixed=I.fromPalette({name:"secondary_fixed",palette:i=>i.secondaryPalette,tone:i=>he(i)?80:90,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.secondaryFixed,k.secondaryFixedDim,10,"lighter",!0)});k.secondaryFixedDim=I.fromPalette({name:"secondary_fixed_dim",palette:i=>i.secondaryPalette,tone:i=>he(i)?70:80,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.secondaryFixed,k.secondaryFixedDim,10,"lighter",!0)});k.onSecondaryFixed=I.fromPalette({name:"on_secondary_fixed",palette:i=>i.secondaryPalette,tone:i=>10,background:i=>k.secondaryFixedDim,secondBackground:i=>k.secondaryFixed,contrastCurve:new G(4.5,7,11,21)});k.onSecondaryFixedVariant=I.fromPalette({name:"on_secondary_fixed_variant",palette:i=>i.secondaryPalette,tone:i=>he(i)?25:30,background:i=>k.secondaryFixedDim,secondBackground:i=>k.secondaryFixed,contrastCurve:new G(3,4.5,7,11)});k.tertiaryFixed=I.fromPalette({name:"tertiary_fixed",palette:i=>i.tertiaryPalette,tone:i=>he(i)?40:90,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.tertiaryFixed,k.tertiaryFixedDim,10,"lighter",!0)});k.tertiaryFixedDim=I.fromPalette({name:"tertiary_fixed_dim",palette:i=>i.tertiaryPalette,tone:i=>he(i)?30:80,isBackground:!0,background:i=>k.highestSurface(i),contrastCurve:new G(1,1,3,4.5),toneDeltaPair:i=>new Re(k.tertiaryFixed,k.tertiaryFixedDim,10,"lighter",!0)});k.onTertiaryFixed=I.fromPalette({name:"on_tertiary_fixed",palette:i=>i.tertiaryPalette,tone:i=>he(i)?100:10,background:i=>k.tertiaryFixedDim,secondBackground:i=>k.tertiaryFixed,contrastCurve:new G(4.5,7,11,21)});k.onTertiaryFixedVariant=I.fromPalette({name:"on_tertiary_fixed_variant",palette:i=>i.tertiaryPalette,tone:i=>he(i)?90:30,background:i=>k.tertiaryFixedDim,secondBackground:i=>k.tertiaryFixed,contrastCurve:new G(3,4.5,7,11)});/**
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
 */class Ae{static of(r){return new Ae(r,!1)}static contentOf(r){return new Ae(r,!0)}static fromColors(r){return Ae.createPaletteFromColors(!1,r)}static contentFromColors(r){return Ae.createPaletteFromColors(!0,r)}static createPaletteFromColors(r,a){const l=new Ae(a.primary,r);if(a.secondary){const f=new Ae(a.secondary,r);l.a2=f.a1}if(a.tertiary){const f=new Ae(a.tertiary,r);l.a3=f.a1}if(a.error){const f=new Ae(a.error,r);l.error=f.a1}if(a.neutral){const f=new Ae(a.neutral,r);l.n1=f.n1}if(a.neutralVariant){const f=new Ae(a.neutralVariant,r);l.n2=f.n2}return l}constructor(r,a){const l=$e.fromInt(r),f=l.hue,h=l.chroma;a?(this.a1=Me.fromHueAndChroma(f,h),this.a2=Me.fromHueAndChroma(f,h/3),this.a3=Me.fromHueAndChroma(f+60,h/2),this.n1=Me.fromHueAndChroma(f,Math.min(h/12,4)),this.n2=Me.fromHueAndChroma(f,Math.min(h/6,8))):(this.a1=Me.fromHueAndChroma(f,Math.max(48,h)),this.a2=Me.fromHueAndChroma(f,16),this.a3=Me.fromHueAndChroma(f+60,24),this.n1=Me.fromHueAndChroma(f,4),this.n2=Me.fromHueAndChroma(f,8)),this.error=Me.fromHueAndChroma(25,84)}}/**
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
 */class ct{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}get surfaceDim(){return this.props.surfaceDim}get surfaceBright(){return this.props.surfaceBright}get surfaceContainerLowest(){return this.props.surfaceContainerLowest}get surfaceContainerLow(){return this.props.surfaceContainerLow}get surfaceContainer(){return this.props.surfaceContainer}get surfaceContainerHigh(){return this.props.surfaceContainerHigh}get surfaceContainerHighest(){return this.props.surfaceContainerHighest}get surfaceTint(){return this.props.surfaceTint}get primaryFixed(){return this.props.primaryFixed}get primaryFixedDim(){return this.props.primaryFixedDim}get onPrimaryFixed(){return this.props.onPrimaryFixed}get onPrimaryFixedVariant(){return this.props.onPrimaryFixedVariant}get secondaryFixed(){return this.props.secondaryFixed}get secondaryFixedDim(){return this.props.secondaryFixedDim}get onSecondaryFixed(){return this.props.onSecondaryFixed}get onSecondaryFixedVariant(){return this.props.onSecondaryFixedVariant}get tertiaryFixed(){return this.props.tertiaryFixed}get tertiaryFixedDim(){return this.props.tertiaryFixedDim}get onTertiaryFixed(){return this.props.onTertiaryFixed}get onTertiaryFixedVariant(){return this.props.onTertiaryFixedVariant}static light(r){return ct.lightFromCorePalette(Ae.of(r))}static dark(r){return ct.darkFromCorePalette(Ae.of(r))}static lightContent(r){return ct.lightFromCorePalette(Ae.contentOf(r))}static darkContent(r){return ct.darkFromCorePalette(Ae.contentOf(r))}static lightFromCorePalette(r){return new ct({primary:r.a1.tone(40),onPrimary:r.a1.tone(100),primaryContainer:r.a1.tone(90),onPrimaryContainer:r.a1.tone(10),secondary:r.a2.tone(40),onSecondary:r.a2.tone(100),secondaryContainer:r.a2.tone(90),onSecondaryContainer:r.a2.tone(10),tertiary:r.a3.tone(40),onTertiary:r.a3.tone(100),tertiaryContainer:r.a3.tone(90),onTertiaryContainer:r.a3.tone(10),error:r.error.tone(40),onError:r.error.tone(100),errorContainer:r.error.tone(90),onErrorContainer:r.error.tone(10),background:r.n1.tone(99),onBackground:r.n1.tone(10),surface:r.n1.tone(99),onSurface:r.n1.tone(10),surfaceVariant:r.n2.tone(90),onSurfaceVariant:r.n2.tone(30),outline:r.n2.tone(50),outlineVariant:r.n2.tone(80),shadow:r.n1.tone(0),scrim:r.n1.tone(0),inverseSurface:r.n1.tone(20),inverseOnSurface:r.n1.tone(95),inversePrimary:r.a1.tone(80),surfaceDim:r.n1.tone(87),surfaceBright:r.n1.tone(98),surfaceContainerLowest:r.n1.tone(100),surfaceContainerLow:r.n1.tone(96),surfaceContainer:r.n1.tone(94),surfaceContainerHigh:r.n1.tone(92),surfaceContainerHighest:r.n1.tone(90),surfaceTint:r.a1.tone(40),primaryFixed:r.a1.tone(90),primaryFixedDim:r.a1.tone(80),onPrimaryFixed:r.a1.tone(10),onPrimaryFixedVariant:r.a1.tone(30),secondaryFixed:r.a2.tone(90),secondaryFixedDim:r.a2.tone(80),onSecondaryFixed:r.a2.tone(10),onSecondaryFixedVariant:r.a2.tone(30),tertiaryFixed:r.a3.tone(90),tertiaryFixedDim:r.a3.tone(80),onTertiaryFixed:r.a3.tone(10),onTertiaryFixedVariant:r.a3.tone(30)})}static darkFromCorePalette(r){return new ct({primary:r.a1.tone(80),onPrimary:r.a1.tone(20),primaryContainer:r.a1.tone(30),onPrimaryContainer:r.a1.tone(90),secondary:r.a2.tone(80),onSecondary:r.a2.tone(20),secondaryContainer:r.a2.tone(30),onSecondaryContainer:r.a2.tone(90),tertiary:r.a3.tone(80),onTertiary:r.a3.tone(20),tertiaryContainer:r.a3.tone(30),onTertiaryContainer:r.a3.tone(90),error:r.error.tone(80),onError:r.error.tone(20),errorContainer:r.error.tone(30),onErrorContainer:r.error.tone(80),background:r.n1.tone(10),onBackground:r.n1.tone(90),surface:r.n1.tone(10),onSurface:r.n1.tone(90),surfaceVariant:r.n2.tone(30),onSurfaceVariant:r.n2.tone(80),outline:r.n2.tone(60),outlineVariant:r.n2.tone(30),shadow:r.n1.tone(0),scrim:r.n1.tone(0),inverseSurface:r.n1.tone(90),inverseOnSurface:r.n1.tone(20),inversePrimary:r.a1.tone(40),surfaceDim:r.n1.tone(6),surfaceBright:r.n1.tone(24),surfaceContainerLowest:r.n1.tone(4),surfaceContainerLow:r.n1.tone(10),surfaceContainer:r.n1.tone(12),surfaceContainerHigh:r.n1.tone(17),surfaceContainerHighest:r.n1.tone(22),surfaceTint:r.a1.tone(80),primaryFixed:r.a1.tone(90),primaryFixedDim:r.a1.tone(80),onPrimaryFixed:r.a1.tone(10),onPrimaryFixedVariant:r.a1.tone(30),secondaryFixed:r.a2.tone(90),secondaryFixedDim:r.a2.tone(80),onSecondaryFixed:r.a2.tone(10),onSecondaryFixedVariant:r.a2.tone(30),tertiaryFixed:r.a3.tone(90),tertiaryFixedDim:r.a3.tone(80),onTertiaryFixed:r.a3.tone(10),onTertiaryFixedVariant:r.a3.tone(30)})}constructor(r){this.props=r}toJSON(){return{...this.props}}}/**
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
 */function ya(i){i=i.replace("#","");const r=i.length===3,a=i.length===6,l=i.length===8;if(!r&&!a&&!l)throw new Error("unexpected hex "+i);let f=0,h=0,y=0;return r?(f=ut(i.slice(0,1).repeat(2)),h=ut(i.slice(1,2).repeat(2)),y=ut(i.slice(2,3).repeat(2))):a?(f=ut(i.slice(0,2)),h=ut(i.slice(2,4)),y=ut(i.slice(4,6))):l&&(f=ut(i.slice(2,4)),h=ut(i.slice(4,6)),y=ut(i.slice(6,8))),(255<<24|(f&255)<<16|(h&255)<<8|y&255)>>>0}function ut(i){return parseInt(i,16)}/**
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
 */function ma(i,r=[]){const a=Ae.of(i);return{source:i,schemes:{light:ct.light(i),dark:ct.dark(i)},palettes:{primary:a.a1,secondary:a.a2,tertiary:a.a3,neutral:a.n1,neutralVariant:a.n2,error:a.error},customColors:r.map(l=>ba(i,l))}}function ba(i,r){let a=r.value;const l=a,f=i;r.blend&&(a=jn.harmonize(l,f));const y=Ae.of(a).a1;return{color:r,value:a,light:{color:y.tone(40),onColor:y.tone(100),colorContainer:y.tone(90),onColorContainer:y.tone(10)},dark:{color:y.tone(80),onColor:y.tone(20),colorContainer:y.tone(30),onColorContainer:y.tone(90)}}}function va(i="#6750A4"){const r=ma(ya(i));let a="";for(const[f,h]of Object.entries(r.schemes.light.toJSON())){const y=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();a=a+`--md-sys-color-${y}:${h>>16&255},${h>>8&255},${h&255};`}let l="";for(const[f,h]of Object.entries(r.schemes.dark.toJSON())){const y=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();l=l+`--md-sys-color-${y}:${h>>16&255},${h>>8&255},${h&255};`}Ni(".colorTheme").remove(),Ni(document.head).append(`
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
    `)}va();
