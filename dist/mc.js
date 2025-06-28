(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))l(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const g of h.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function a(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function l(f){if(f.ep)return;f.ep=!0;const h=a(f);fetch(f.href,h)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hr=globalThis,Rn=Hr.ShadowRoot&&(Hr.ShadyCSS===void 0||Hr.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,jn=Symbol(),Si=new WeakMap;let Vi=class{constructor(t,a,l){if(this._$cssResult$=!0,l!==jn)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=a}get styleSheet(){let t=this.o;const a=this.t;if(Rn&&t===void 0){const l=a!==void 0&&a.length===1;l&&(t=Si.get(a)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),l&&Si.set(a,t))}return t}toString(){return this.cssText}};const Zo=n=>new Vi(typeof n=="string"?n:n+"",void 0,jn),Ie=(n,...t)=>{const a=n.length===1?n[0]:t.reduce((l,f,h)=>l+(g=>{if(g._$cssResult$===!0)return g.cssText;if(typeof g=="number")return g;throw Error("Value passed to 'css' function must be a 'css' function result: "+g+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(f)+n[h+1],n[0]);return new Vi(a,n,jn)},es=(n,t)=>{if(Rn)n.adoptedStyleSheets=t.map(a=>a instanceof CSSStyleSheet?a:a.styleSheet);else for(const a of t){const l=document.createElement("style"),f=Hr.litNonce;f!==void 0&&l.setAttribute("nonce",f),l.textContent=a.cssText,n.appendChild(l)}},_i=Rn?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let a="";for(const l of t.cssRules)a+=l.cssText;return Zo(a)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ts,defineProperty:rs,getOwnPropertyDescriptor:ns,getOwnPropertyNames:is,getOwnPropertySymbols:os,getPrototypeOf:ss}=Object,vt=globalThis,Di=vt.trustedTypes,as=Di?Di.emptyScript:"",Tn=vt.reactiveElementPolyfillSupport,mr=(n,t)=>n,Ur={toAttribute(n,t){switch(t){case Boolean:n=n?as:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let a=n;switch(t){case Boolean:a=n!==null;break;case Number:a=n===null?null:Number(n);break;case Object:case Array:try{a=JSON.parse(n)}catch{a=null}}return a}},zn=(n,t)=>!ts(n,t),Mi={attribute:!0,type:String,converter:Ur,reflect:!1,useDefault:!1,hasChanged:zn};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),vt.litPropertyMetadata??(vt.litPropertyMetadata=new WeakMap);let Qt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,a=Mi){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(t,a),!a.noAccessor){const l=Symbol(),f=this.getPropertyDescriptor(t,l,a);f!==void 0&&rs(this.prototype,t,f)}}static getPropertyDescriptor(t,a,l){const{get:f,set:h}=ns(this.prototype,t)??{get(){return this[a]},set(g){this[a]=g}};return{get:f,set(g){const S=f==null?void 0:f.call(this);h==null||h.call(this,g),this.requestUpdate(t,S,l)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Mi}static _$Ei(){if(this.hasOwnProperty(mr("elementProperties")))return;const t=ss(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(mr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mr("properties"))){const a=this.properties,l=[...is(a),...os(a)];for(const f of l)this.createProperty(f,a[f])}const t=this[Symbol.metadata];if(t!==null){const a=litPropertyMetadata.get(t);if(a!==void 0)for(const[l,f]of a)this.elementProperties.set(l,f)}this._$Eh=new Map;for(const[a,l]of this.elementProperties){const f=this._$Eu(a,l);f!==void 0&&this._$Eh.set(f,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const a=[];if(Array.isArray(t)){const l=new Set(t.flat(1/0).reverse());for(const f of l)a.unshift(_i(f))}else t!==void 0&&a.push(_i(t));return a}static _$Eu(t,a){const l=a.attribute;return l===!1?void 0:typeof l=="string"?l:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(a=>this.enableUpdating=a),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(a=>a(this))}addController(t){var a;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((a=t.hostConnected)==null||a.call(t))}removeController(t){var a;(a=this._$EO)==null||a.delete(t)}_$E_(){const t=new Map,a=this.constructor.elementProperties;for(const l of a.keys())this.hasOwnProperty(l)&&(t.set(l,this[l]),delete this[l]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return es(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(a=>{var l;return(l=a.hostConnected)==null?void 0:l.call(a)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(a=>{var l;return(l=a.hostDisconnected)==null?void 0:l.call(a)})}attributeChangedCallback(t,a,l){this._$AK(t,l)}_$ET(t,a){var h;const l=this.constructor.elementProperties.get(t),f=this.constructor._$Eu(t,l);if(f!==void 0&&l.reflect===!0){const g=(((h=l.converter)==null?void 0:h.toAttribute)!==void 0?l.converter:Ur).toAttribute(a,l.type);this._$Em=t,g==null?this.removeAttribute(f):this.setAttribute(f,g),this._$Em=null}}_$AK(t,a){var h,g;const l=this.constructor,f=l._$Eh.get(t);if(f!==void 0&&this._$Em!==f){const S=l.getPropertyOptions(f),A=typeof S.converter=="function"?{fromAttribute:S.converter}:((h=S.converter)==null?void 0:h.fromAttribute)!==void 0?S.converter:Ur;this._$Em=f,this[f]=A.fromAttribute(a,S.type)??((g=this._$Ej)==null?void 0:g.get(f))??null,this._$Em=null}}requestUpdate(t,a,l){var f;if(t!==void 0){const h=this.constructor,g=this[t];if(l??(l=h.getPropertyOptions(t)),!((l.hasChanged??zn)(g,a)||l.useDefault&&l.reflect&&g===((f=this._$Ej)==null?void 0:f.get(t))&&!this.hasAttribute(h._$Eu(t,l))))return;this.C(t,a,l)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,a,{useDefault:l,reflect:f,wrapped:h},g){l&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,g??a??this[t]),h!==!0||g!==void 0)||(this._$AL.has(t)||(this.hasUpdated||l||(a=void 0),this._$AL.set(t,a)),f===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var l;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[h,g]of this._$Ep)this[h]=g;this._$Ep=void 0}const f=this.constructor.elementProperties;if(f.size>0)for(const[h,g]of f){const{wrapped:S}=g,A=this[h];S!==!0||this._$AL.has(h)||A===void 0||this.C(h,void 0,g,A)}}let t=!1;const a=this._$AL;try{t=this.shouldUpdate(a),t?(this.willUpdate(a),(l=this._$EO)==null||l.forEach(f=>{var h;return(h=f.hostUpdate)==null?void 0:h.call(f)}),this.update(a)):this._$EM()}catch(f){throw t=!1,this._$EM(),f}t&&this._$AE(a)}willUpdate(t){}_$AE(t){var a;(a=this._$EO)==null||a.forEach(l=>{var f;return(f=l.hostUpdated)==null?void 0:f.call(l)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(a=>this._$ET(a,this[a]))),this._$EM()}updated(t){}firstUpdated(t){}};Qt.elementStyles=[],Qt.shadowRootOptions={mode:"open"},Qt[mr("elementProperties")]=new Map,Qt[mr("finalized")]=new Map,Tn==null||Tn({ReactiveElement:Qt}),(vt.reactiveElementVersions??(vt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const br=globalThis,Vr=br.trustedTypes,Ei=Vr?Vr.createPolicy("lit-html",{createHTML:n=>n}):void 0,Wi="$lit$",mt=`lit$${Math.random().toFixed(9).slice(2)}$`,Gi="?"+mt,cs=`<${Gi}>`,Et=document,wr=()=>Et.createComment(""),Cr=n=>n===null||typeof n!="object"&&typeof n!="function",Bn=Array.isArray,us=n=>Bn(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",An=`[ 	
\f\r]`,yr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Oi=/-->/g,Ni=/>/g,St=RegExp(`>|${An}(?:([^\\s"'>=/]+)(${An}*=${An}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Li=/'/g,Fi=/"/g,Yi=/^(?:script|style|textarea|title)$/i,ls=n=>(t,...a)=>({_$litType$:n,strings:t,values:a}),ue=ls(1),Zt=Symbol.for("lit-noChange"),ve=Symbol.for("lit-nothing"),Ii=new WeakMap,_t=Et.createTreeWalker(Et,129);function Xi(n,t){if(!Bn(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ei!==void 0?Ei.createHTML(t):t}const fs=(n,t)=>{const a=n.length-1,l=[];let f,h=t===2?"<svg>":t===3?"<math>":"",g=yr;for(let S=0;S<a;S++){const A=n[S];let E,O,L=-1,H=0;for(;H<A.length&&(g.lastIndex=H,O=g.exec(A),O!==null);)H=g.lastIndex,g===yr?O[1]==="!--"?g=Oi:O[1]!==void 0?g=Ni:O[2]!==void 0?(Yi.test(O[2])&&(f=RegExp("</"+O[2],"g")),g=St):O[3]!==void 0&&(g=St):g===St?O[0]===">"?(g=f??yr,L=-1):O[1]===void 0?L=-2:(L=g.lastIndex-O[2].length,E=O[1],g=O[3]===void 0?St:O[3]==='"'?Fi:Li):g===Fi||g===Li?g=St:g===Oi||g===Ni?g=yr:(g=St,f=void 0);const J=g===St&&n[S+1].startsWith("/>")?" ":"";h+=g===yr?A+cs:L>=0?(l.push(E),A.slice(0,L)+Wi+A.slice(L)+mt+J):A+mt+(L===-2?S:J)}return[Xi(n,h+(n[a]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),l]};class $r{constructor({strings:t,_$litType$:a},l){let f;this.parts=[];let h=0,g=0;const S=t.length-1,A=this.parts,[E,O]=fs(t,a);if(this.el=$r.createElement(E,l),_t.currentNode=this.el.content,a===2||a===3){const L=this.el.content.firstChild;L.replaceWith(...L.childNodes)}for(;(f=_t.nextNode())!==null&&A.length<S;){if(f.nodeType===1){if(f.hasAttributes())for(const L of f.getAttributeNames())if(L.endsWith(Wi)){const H=O[g++],J=f.getAttribute(L).split(mt),M=/([.?@])?(.*)/.exec(H);A.push({type:1,index:h,name:M[2],strings:J,ctor:M[1]==="."?hs:M[1]==="?"?ps:M[1]==="@"?gs:Qr}),f.removeAttribute(L)}else L.startsWith(mt)&&(A.push({type:6,index:h}),f.removeAttribute(L));if(Yi.test(f.tagName)){const L=f.textContent.split(mt),H=L.length-1;if(H>0){f.textContent=Vr?Vr.emptyScript:"";for(let J=0;J<H;J++)f.append(L[J],wr()),_t.nextNode(),A.push({type:2,index:++h});f.append(L[H],wr())}}}else if(f.nodeType===8)if(f.data===Gi)A.push({type:2,index:h});else{let L=-1;for(;(L=f.data.indexOf(mt,L+1))!==-1;)A.push({type:7,index:h}),L+=mt.length-1}h++}}static createElement(t,a){const l=Et.createElement("template");return l.innerHTML=t,l}}function er(n,t,a=n,l){var g,S;if(t===Zt)return t;let f=l!==void 0?(g=a._$Co)==null?void 0:g[l]:a._$Cl;const h=Cr(t)?void 0:t._$litDirective$;return(f==null?void 0:f.constructor)!==h&&((S=f==null?void 0:f._$AO)==null||S.call(f,!1),h===void 0?f=void 0:(f=new h(n),f._$AT(n,a,l)),l!==void 0?(a._$Co??(a._$Co=[]))[l]=f:a._$Cl=f),f!==void 0&&(t=er(n,f._$AS(n,t.values),f,l)),t}class ds{constructor(t,a){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:a},parts:l}=this._$AD,f=((t==null?void 0:t.creationScope)??Et).importNode(a,!0);_t.currentNode=f;let h=_t.nextNode(),g=0,S=0,A=l[0];for(;A!==void 0;){if(g===A.index){let E;A.type===2?E=new Ar(h,h.nextSibling,this,t):A.type===1?E=new A.ctor(h,A.name,A.strings,this,t):A.type===6&&(E=new ys(h,this,t)),this._$AV.push(E),A=l[++S]}g!==(A==null?void 0:A.index)&&(h=_t.nextNode(),g++)}return _t.currentNode=Et,f}p(t){let a=0;for(const l of this._$AV)l!==void 0&&(l.strings!==void 0?(l._$AI(t,l,a),a+=l.strings.length-2):l._$AI(t[a])),a++}}class Ar{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,a,l,f){this.type=2,this._$AH=ve,this._$AN=void 0,this._$AA=t,this._$AB=a,this._$AM=l,this.options=f,this._$Cv=(f==null?void 0:f.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=a.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,a=this){t=er(this,t,a),Cr(t)?t===ve||t==null||t===""?(this._$AH!==ve&&this._$AR(),this._$AH=ve):t!==this._$AH&&t!==Zt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):us(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==ve&&Cr(this._$AH)?this._$AA.nextSibling.data=t:this.T(Et.createTextNode(t)),this._$AH=t}$(t){var h;const{values:a,_$litType$:l}=t,f=typeof l=="number"?this._$AC(t):(l.el===void 0&&(l.el=$r.createElement(Xi(l.h,l.h[0]),this.options)),l);if(((h=this._$AH)==null?void 0:h._$AD)===f)this._$AH.p(a);else{const g=new ds(f,this),S=g.u(this.options);g.p(a),this.T(S),this._$AH=g}}_$AC(t){let a=Ii.get(t.strings);return a===void 0&&Ii.set(t.strings,a=new $r(t)),a}k(t){Bn(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let l,f=0;for(const h of t)f===a.length?a.push(l=new Ar(this.O(wr()),this.O(wr()),this,this.options)):l=a[f],l._$AI(h),f++;f<a.length&&(this._$AR(l&&l._$AB.nextSibling,f),a.length=f)}_$AR(t=this._$AA.nextSibling,a){var l;for((l=this._$AP)==null?void 0:l.call(this,!1,!0,a);t&&t!==this._$AB;){const f=t.nextSibling;t.remove(),t=f}}setConnected(t){var a;this._$AM===void 0&&(this._$Cv=t,(a=this._$AP)==null||a.call(this,t))}}class Qr{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,a,l,f,h){this.type=1,this._$AH=ve,this._$AN=void 0,this.element=t,this.name=a,this._$AM=f,this.options=h,l.length>2||l[0]!==""||l[1]!==""?(this._$AH=Array(l.length-1).fill(new String),this.strings=l):this._$AH=ve}_$AI(t,a=this,l,f){const h=this.strings;let g=!1;if(h===void 0)t=er(this,t,a,0),g=!Cr(t)||t!==this._$AH&&t!==Zt,g&&(this._$AH=t);else{const S=t;let A,E;for(t=h[0],A=0;A<h.length-1;A++)E=er(this,S[l+A],a,A),E===Zt&&(E=this._$AH[A]),g||(g=!Cr(E)||E!==this._$AH[A]),E===ve?t=ve:t!==ve&&(t+=(E??"")+h[A+1]),this._$AH[A]=E}g&&!f&&this.j(t)}j(t){t===ve?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class hs extends Qr{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ve?void 0:t}}class ps extends Qr{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ve)}}class gs extends Qr{constructor(t,a,l,f,h){super(t,a,l,f,h),this.type=5}_$AI(t,a=this){if((t=er(this,t,a,0)??ve)===Zt)return;const l=this._$AH,f=t===ve&&l!==ve||t.capture!==l.capture||t.once!==l.once||t.passive!==l.passive,h=t!==ve&&(l===ve||f);f&&this.element.removeEventListener(this.name,this,l),h&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var a;typeof this._$AH=="function"?this._$AH.call(((a=this.options)==null?void 0:a.host)??this.element,t):this._$AH.handleEvent(t)}}class ys{constructor(t,a,l){this.element=t,this.type=6,this._$AN=void 0,this._$AM=a,this.options=l}get _$AU(){return this._$AM._$AU}_$AI(t){er(this,t)}}const Pn=br.litHtmlPolyfillSupport;Pn==null||Pn($r,Ar),(br.litHtmlVersions??(br.litHtmlVersions=[])).push("3.3.0");const ms=(n,t,a)=>{const l=(a==null?void 0:a.renderBefore)??t;let f=l._$litPart$;if(f===void 0){const h=(a==null?void 0:a.renderBefore)??null;l._$litPart$=f=new Ar(t.insertBefore(wr(),h),h,void 0,a??{})}return f._$AI(n),f};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=globalThis;let xe=class extends Qt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var a;const t=super.createRenderRoot();return(a=this.renderOptions).renderBefore??(a.renderBefore=t.firstChild),t}update(t){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ms(a,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Zt}};var Ui;xe._$litElement$=!0,xe.finalized=!0,(Ui=Dt.litElementHydrateSupport)==null||Ui.call(Dt,{LitElement:xe});const Sn=Dt.litElementPolyfillSupport;Sn==null||Sn({LitElement:xe});(Dt.litElementVersions??(Dt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=n=>(t,a)=>{a!==void 0?a.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bs={attribute:!0,type:String,converter:Ur,reflect:!1,hasChanged:zn},vs=(n=bs,t,a)=>{const{kind:l,metadata:f}=a;let h=globalThis.litPropertyMetadata.get(f);if(h===void 0&&globalThis.litPropertyMetadata.set(f,h=new Map),l==="setter"&&((n=Object.create(n)).wrapped=!0),h.set(a.name,n),l==="accessor"){const{name:g}=a;return{set(S){const A=t.get.call(this);t.set.call(this,S),this.requestUpdate(g,A,n)},init(S){return S!==void 0&&this.C(g,void 0,n,S),S}}}if(l==="setter"){const{name:g}=a;return function(S){const A=this[g];t.call(this,S),this.requestUpdate(g,A,n)}}throw Error("Unsupported decorator location: "+l)};function W(n){return(t,a)=>typeof a=="object"?vs(n,t,a):((l,f,h)=>{const g=f.hasOwnProperty(h);return f.constructor.createProperty(h,l),g?Object.getOwnPropertyDescriptor(f,h):void 0})(n,t,a)}function xs(n,t=2,a=!0){const l=n.trim().split(/\s+/);return a&&l.length>1?(l[0][0]+l[l.length-1][0]).toUpperCase():l.map(h=>h[0].toUpperCase()).slice(0,t).join("")}var ws=Object.defineProperty,Cs=Object.getOwnPropertyDescriptor,Kr=(n,t,a,l)=>{for(var f=l>1?void 0:l?Cs(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&ws(t,a,f),f};let Dn=class extends xe{constructor(){super(...arguments),this.size=40}render(){return ue`
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
        `}};Kr([W({type:Number})],Dn.prototype,"size",2);Dn=Kr([me("mc-avatar")],Dn);let Mn=class extends xe{constructor(){super(...arguments),this.text=""}render(){return ue`
            <style>
                span {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                }
            </style>
            <span>${xs(this.text)}</span>
        `}};Kr([W({type:String})],Mn.prototype,"text",2);Mn=Kr([me("mc-avatar-text")],Mn);const $s=Ie`
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
`;var ks=Object.defineProperty,Ts=Object.getOwnPropertyDescriptor,xt=(n,t,a,l)=>{for(var f=l>1?void 0:l?Ts(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&ks(t,a,f),f};let Ge=class extends xe{constructor(){super(...arguments),this.disabled=!1,this.toggle=!1,this.selected=!1,this.flex=!1,this.variant="filled",this.size="small",this.rippleColor={filled:"on-primary",elevated:"primary",tonal:"on-secondary-container",outlined:"on-surface-variant",standard:"on-background"},this.borderRadius={full:{extraSmall:"16px",small:"20px",medium:"28px",large:"48px",extraLarge:"68px"},square:{extraSmall:"8px",small:"8px",medium:"12px",large:"16px",extraLarge:"16px"}}}get buttonElement(){var n;return(n=this.shadowRoot)==null?void 0:n.querySelector("button")}onToggled(){}onUnToggled(){}clickHandler(){this.toggle&&(this.selected=!this.selected,this.selected&&this.onToggled(),this.selected||this.onUnToggled())}render(){return ue`
            ${this.flex?ue`
                <style>:host {
                    flex: 1 1 auto
                }</style>`:ue``}
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
        `}};Ge.styles=$s;xt([W({type:Boolean,reflect:!0})],Ge.prototype,"disabled",2);xt([W({type:Boolean,reflect:!0})],Ge.prototype,"toggle",2);xt([W({type:Boolean,reflect:!0})],Ge.prototype,"selected",2);xt([W({type:Boolean,reflect:!0})],Ge.prototype,"flex",2);xt([W()],Ge.prototype,"variant",2);xt([W()],Ge.prototype,"size",2);Ge=xt([me("mc-button")],Ge);let Ri=class extends Ge{constructor(){super(),this.toggle=!0}render(){return ue`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected}
                    ?disabled=${this.disabled} @click=${this.clickHandler}>
                <div>
                    ${this.selected?ue`
                        <slot class="icon" name="selected_icon"></slot>
                        <slot name="selected_text"></slot>`:ue`
                        <slot class="icon" name="icon"></slot>
                        <slot></slot>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Ri=xt([me("mc-toggle-button")],Ri);function As(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var qr={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Ps=qr.exports,ji;function Ss(){return ji||(ji=1,function(n){(function(t,a){n.exports=t.document?a(t,!0):function(l){if(!l.document)throw new Error("jQuery requires a window with a document");return a(l)}})(typeof window<"u"?window:Ps,function(t,a){var l=[],f=Object.getPrototypeOf,h=l.slice,g=l.flat?function(e){return l.flat.call(e)}:function(e){return l.concat.apply([],e)},S=l.push,A=l.indexOf,E={},O=E.toString,L=E.hasOwnProperty,H=L.toString,J=H.call(Object),M={},N=function(r){return typeof r=="function"&&typeof r.nodeType!="number"&&typeof r.item!="function"},oe=function(r){return r!=null&&r===r.window},j=t.document,fe={type:!0,src:!0,nonce:!0,noModule:!0};function ne(e,r,i){i=i||j;var o,c,u=i.createElement("script");if(u.text=e,r)for(o in fe)c=r[o]||r.getAttribute&&r.getAttribute(o),c&&u.setAttribute(o,c);i.head.appendChild(u).parentNode.removeChild(u)}function ge(e){return e==null?e+"":typeof e=="object"||typeof e=="function"?E[O.call(e)]||"object":typeof e}var ee="3.7.1",be=/HTML$/i,s=function(e,r){return new s.fn.init(e,r)};s.fn=s.prototype={jquery:ee,constructor:s,length:0,toArray:function(){return h.call(this)},get:function(e){return e==null?h.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var r=s.merge(this.constructor(),e);return r.prevObject=this,r},each:function(e){return s.each(this,e)},map:function(e){return this.pushStack(s.map(this,function(r,i){return e.call(r,i,r)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(s.grep(this,function(e,r){return(r+1)%2}))},odd:function(){return this.pushStack(s.grep(this,function(e,r){return r%2}))},eq:function(e){var r=this.length,i=+e+(e<0?r:0);return this.pushStack(i>=0&&i<r?[this[i]]:[])},end:function(){return this.prevObject||this.constructor()},push:S,sort:l.sort,splice:l.splice},s.extend=s.fn.extend=function(){var e,r,i,o,c,u,d=arguments[0]||{},m=1,y=arguments.length,v=!1;for(typeof d=="boolean"&&(v=d,d=arguments[m]||{},m++),typeof d!="object"&&!N(d)&&(d={}),m===y&&(d=this,m--);m<y;m++)if((e=arguments[m])!=null)for(r in e)o=e[r],!(r==="__proto__"||d===o)&&(v&&o&&(s.isPlainObject(o)||(c=Array.isArray(o)))?(i=d[r],c&&!Array.isArray(i)?u=[]:!c&&!s.isPlainObject(i)?u={}:u=i,c=!1,d[r]=s.extend(v,u,o)):o!==void 0&&(d[r]=o));return d},s.extend({expando:"jQuery"+(ee+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var r,i;return!e||O.call(e)!=="[object Object]"?!1:(r=f(e),r?(i=L.call(r,"constructor")&&r.constructor,typeof i=="function"&&H.call(i)===J):!0)},isEmptyObject:function(e){var r;for(r in e)return!1;return!0},globalEval:function(e,r,i){ne(e,{nonce:r&&r.nonce},i)},each:function(e,r){var i,o=0;if(de(e))for(i=e.length;o<i&&r.call(e[o],o,e[o])!==!1;o++);else for(o in e)if(r.call(e[o],o,e[o])===!1)break;return e},text:function(e){var r,i="",o=0,c=e.nodeType;if(!c)for(;r=e[o++];)i+=s.text(r);return c===1||c===11?e.textContent:c===9?e.documentElement.textContent:c===3||c===4?e.nodeValue:i},makeArray:function(e,r){var i=r||[];return e!=null&&(de(Object(e))?s.merge(i,typeof e=="string"?[e]:e):S.call(i,e)),i},inArray:function(e,r,i){return r==null?-1:A.call(r,e,i)},isXMLDoc:function(e){var r=e&&e.namespaceURI,i=e&&(e.ownerDocument||e).documentElement;return!be.test(r||i&&i.nodeName||"HTML")},merge:function(e,r){for(var i=+r.length,o=0,c=e.length;o<i;o++)e[c++]=r[o];return e.length=c,e},grep:function(e,r,i){for(var o,c=[],u=0,d=e.length,m=!i;u<d;u++)o=!r(e[u],u),o!==m&&c.push(e[u]);return c},map:function(e,r,i){var o,c,u=0,d=[];if(de(e))for(o=e.length;u<o;u++)c=r(e[u],u,i),c!=null&&d.push(c);else for(u in e)c=r(e[u],u,i),c!=null&&d.push(c);return g(d)},guid:1,support:M}),typeof Symbol=="function"&&(s.fn[Symbol.iterator]=l[Symbol.iterator]),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,r){E["[object "+r+"]"]=r.toLowerCase()});function de(e){var r=!!e&&"length"in e&&e.length,i=ge(e);return N(e)||oe(e)?!1:i==="array"||r===0||typeof r=="number"&&r>0&&r-1 in e}function Q(e,r){return e.nodeName&&e.nodeName.toLowerCase()===r.toLowerCase()}var he=l.pop,Ue=l.sort,Xe=l.splice,Z="[\\x20\\t\\r\\n\\f]",Ae=new RegExp("^"+Z+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Z+"+$","g");s.contains=function(e,r){var i=r&&r.parentNode;return e===i||!!(i&&i.nodeType===1&&(e.contains?e.contains(i):e.compareDocumentPosition&&e.compareDocumentPosition(i)&16))};var It=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Rt(e,r){return r?e==="\0"?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}s.escapeSelector=function(e){return(e+"").replace(It,Rt)};var Ce=j,dt=S;(function(){var e,r,i,o,c,u=dt,d,m,y,v,$,P=s.expando,w=0,_=0,G=Rr(),se=Rr(),K=Rr(),Pe=Rr(),we=function(p,b){return p===b&&(c=!0),0},Ke="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ze="(?:\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ie="\\["+Z+"*("+Ze+")(?:"+Z+"*([*^$|!~]?=)"+Z+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ze+"))|)"+Z+"*\\]",At=":("+Ze+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ie+")*)|.*)\\)|)",ae=new RegExp(Z+"+","g"),ye=new RegExp("^"+Z+"*,"+Z+"*"),hr=new RegExp("^"+Z+"*([>+~]|"+Z+")"+Z+"*"),bn=new RegExp(Z+"|>"),et=new RegExp(At),pr=new RegExp("^"+Ze+"$"),tt={ID:new RegExp("^#("+Ze+")"),CLASS:new RegExp("^\\.("+Ze+")"),TAG:new RegExp("^("+Ze+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+At),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Z+"*(even|odd|(([+-]|)(\\d*)n|)"+Z+"*(?:([+-]|)"+Z+"*(\\d+)|))"+Z+"*\\)|)","i"),bool:new RegExp("^(?:"+Ke+")$","i"),needsContext:new RegExp("^"+Z+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Z+"*((?:-\\d)?\\d*)"+Z+"*\\)|)(?=[^-]|$)","i")},pt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,Be=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,vn=/[+~]/,at=new RegExp("\\\\[\\da-fA-F]{1,6}"+Z+"?|\\\\([^\\r\\n\\f])","g"),ct=function(p,b){var x="0x"+p.slice(1)-65536;return b||(x<0?String.fromCharCode(x+65536):String.fromCharCode(x>>10|55296,x&1023|56320))},Wo=function(){yt()},Go=zr(function(p){return p.disabled===!0&&Q(p,"fieldset")},{dir:"parentNode",next:"legend"});function Yo(){try{return d.activeElement}catch{}}try{u.apply(l=h.call(Ce.childNodes),Ce.childNodes),l[Ce.childNodes.length].nodeType}catch{u={apply:function(b,x){dt.apply(b,h.call(x))},call:function(b){dt.apply(b,h.call(arguments,1))}}}function ce(p,b,x,C){var T,D,F,z,I,te,V,X=b&&b.ownerDocument,re=b?b.nodeType:9;if(x=x||[],typeof p!="string"||!p||re!==1&&re!==9&&re!==11)return x;if(!C&&(yt(b),b=b||d,y)){if(re!==11&&(I=Be.exec(p)))if(T=I[1]){if(re===9)if(F=b.getElementById(T)){if(F.id===T)return u.call(x,F),x}else return x;else if(X&&(F=X.getElementById(T))&&ce.contains(b,F)&&F.id===T)return u.call(x,F),x}else{if(I[2])return u.apply(x,b.getElementsByTagName(p)),x;if((T=I[3])&&b.getElementsByClassName)return u.apply(x,b.getElementsByClassName(T)),x}if(!Pe[p+" "]&&(!v||!v.test(p))){if(V=p,X=b,re===1&&(bn.test(p)||hr.test(p))){for(X=vn.test(p)&&xn(b.parentNode)||b,(X!=b||!M.scope)&&((z=b.getAttribute("id"))?z=s.escapeSelector(z):b.setAttribute("id",z=P)),te=gr(p),D=te.length;D--;)te[D]=(z?"#"+z:":scope")+" "+jr(te[D]);V=te.join(",")}try{return u.apply(x,X.querySelectorAll(V)),x}catch{Pe(p,!0)}finally{z===P&&b.removeAttribute("id")}}}return Pi(p.replace(Ae,"$1"),b,x,C)}function Rr(){var p=[];function b(x,C){return p.push(x+" ")>r.cacheLength&&delete b[p.shift()],b[x+" "]=C}return b}function We(p){return p[P]=!0,p}function Xt(p){var b=d.createElement("fieldset");try{return!!p(b)}catch{return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function Xo(p){return function(b){return Q(b,"input")&&b.type===p}}function Jo(p){return function(b){return(Q(b,"input")||Q(b,"button"))&&b.type===p}}function Ti(p){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===p:b.disabled===p:b.isDisabled===p||b.isDisabled!==!p&&Go(b)===p:b.disabled===p:"label"in b?b.disabled===p:!1}}function Pt(p){return We(function(b){return b=+b,We(function(x,C){for(var T,D=p([],x.length,b),F=D.length;F--;)x[T=D[F]]&&(x[T]=!(C[T]=x[T]))})})}function xn(p){return p&&typeof p.getElementsByTagName<"u"&&p}function yt(p){var b,x=p?p.ownerDocument||p:Ce;return x==d||x.nodeType!==9||!x.documentElement||(d=x,m=d.documentElement,y=!s.isXMLDoc(d),$=m.matches||m.webkitMatchesSelector||m.msMatchesSelector,m.msMatchesSelector&&Ce!=d&&(b=d.defaultView)&&b.top!==b&&b.addEventListener("unload",Wo),M.getById=Xt(function(C){return m.appendChild(C).id=s.expando,!d.getElementsByName||!d.getElementsByName(s.expando).length}),M.disconnectedMatch=Xt(function(C){return $.call(C,"*")}),M.scope=Xt(function(){return d.querySelectorAll(":scope")}),M.cssHas=Xt(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),M.getById?(r.filter.ID=function(C){var T=C.replace(at,ct);return function(D){return D.getAttribute("id")===T}},r.find.ID=function(C,T){if(typeof T.getElementById<"u"&&y){var D=T.getElementById(C);return D?[D]:[]}}):(r.filter.ID=function(C){var T=C.replace(at,ct);return function(D){var F=typeof D.getAttributeNode<"u"&&D.getAttributeNode("id");return F&&F.value===T}},r.find.ID=function(C,T){if(typeof T.getElementById<"u"&&y){var D,F,z,I=T.getElementById(C);if(I){if(D=I.getAttributeNode("id"),D&&D.value===C)return[I];for(z=T.getElementsByName(C),F=0;I=z[F++];)if(D=I.getAttributeNode("id"),D&&D.value===C)return[I]}return[]}}),r.find.TAG=function(C,T){return typeof T.getElementsByTagName<"u"?T.getElementsByTagName(C):T.querySelectorAll(C)},r.find.CLASS=function(C,T){if(typeof T.getElementsByClassName<"u"&&y)return T.getElementsByClassName(C)},v=[],Xt(function(C){var T;m.appendChild(C).innerHTML="<a id='"+P+"' href='' disabled='disabled'></a><select id='"+P+"-\r\\' disabled='disabled'><option selected=''></option></select>",C.querySelectorAll("[selected]").length||v.push("\\["+Z+"*(?:value|"+Ke+")"),C.querySelectorAll("[id~="+P+"-]").length||v.push("~="),C.querySelectorAll("a#"+P+"+*").length||v.push(".#.+[+~]"),C.querySelectorAll(":checked").length||v.push(":checked"),T=d.createElement("input"),T.setAttribute("type","hidden"),C.appendChild(T).setAttribute("name","D"),m.appendChild(C).disabled=!0,C.querySelectorAll(":disabled").length!==2&&v.push(":enabled",":disabled"),T=d.createElement("input"),T.setAttribute("name",""),C.appendChild(T),C.querySelectorAll("[name='']").length||v.push("\\["+Z+"*name"+Z+"*="+Z+`*(?:''|"")`)}),M.cssHas||v.push(":has"),v=v.length&&new RegExp(v.join("|")),we=function(C,T){if(C===T)return c=!0,0;var D=!C.compareDocumentPosition-!T.compareDocumentPosition;return D||(D=(C.ownerDocument||C)==(T.ownerDocument||T)?C.compareDocumentPosition(T):1,D&1||!M.sortDetached&&T.compareDocumentPosition(C)===D?C===d||C.ownerDocument==Ce&&ce.contains(Ce,C)?-1:T===d||T.ownerDocument==Ce&&ce.contains(Ce,T)?1:o?A.call(o,C)-A.call(o,T):0:D&4?-1:1)}),d}ce.matches=function(p,b){return ce(p,null,null,b)},ce.matchesSelector=function(p,b){if(yt(p),y&&!Pe[b+" "]&&(!v||!v.test(b)))try{var x=$.call(p,b);if(x||M.disconnectedMatch||p.document&&p.document.nodeType!==11)return x}catch{Pe(b,!0)}return ce(b,d,null,[p]).length>0},ce.contains=function(p,b){return(p.ownerDocument||p)!=d&&yt(p),s.contains(p,b)},ce.attr=function(p,b){(p.ownerDocument||p)!=d&&yt(p);var x=r.attrHandle[b.toLowerCase()],C=x&&L.call(r.attrHandle,b.toLowerCase())?x(p,b,!y):void 0;return C!==void 0?C:p.getAttribute(b)},ce.error=function(p){throw new Error("Syntax error, unrecognized expression: "+p)},s.uniqueSort=function(p){var b,x=[],C=0,T=0;if(c=!M.sortStable,o=!M.sortStable&&h.call(p,0),Ue.call(p,we),c){for(;b=p[T++];)b===p[T]&&(C=x.push(T));for(;C--;)Xe.call(p,x[C],1)}return o=null,p},s.fn.uniqueSort=function(){return this.pushStack(s.uniqueSort(h.apply(this)))},r=s.expr={cacheLength:50,createPseudo:We,match:tt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(p){return p[1]=p[1].replace(at,ct),p[3]=(p[3]||p[4]||p[5]||"").replace(at,ct),p[2]==="~="&&(p[3]=" "+p[3]+" "),p.slice(0,4)},CHILD:function(p){return p[1]=p[1].toLowerCase(),p[1].slice(0,3)==="nth"?(p[3]||ce.error(p[0]),p[4]=+(p[4]?p[5]+(p[6]||1):2*(p[3]==="even"||p[3]==="odd")),p[5]=+(p[7]+p[8]||p[3]==="odd")):p[3]&&ce.error(p[0]),p},PSEUDO:function(p){var b,x=!p[6]&&p[2];return tt.CHILD.test(p[0])?null:(p[3]?p[2]=p[4]||p[5]||"":x&&et.test(x)&&(b=gr(x,!0))&&(b=x.indexOf(")",x.length-b)-x.length)&&(p[0]=p[0].slice(0,b),p[2]=x.slice(0,b)),p.slice(0,3))}},filter:{TAG:function(p){var b=p.replace(at,ct).toLowerCase();return p==="*"?function(){return!0}:function(x){return Q(x,b)}},CLASS:function(p){var b=G[p+" "];return b||(b=new RegExp("(^|"+Z+")"+p+"("+Z+"|$)"))&&G(p,function(x){return b.test(typeof x.className=="string"&&x.className||typeof x.getAttribute<"u"&&x.getAttribute("class")||"")})},ATTR:function(p,b,x){return function(C){var T=ce.attr(C,p);return T==null?b==="!=":b?(T+="",b==="="?T===x:b==="!="?T!==x:b==="^="?x&&T.indexOf(x)===0:b==="*="?x&&T.indexOf(x)>-1:b==="$="?x&&T.slice(-x.length)===x:b==="~="?(" "+T.replace(ae," ")+" ").indexOf(x)>-1:b==="|="?T===x||T.slice(0,x.length+1)===x+"-":!1):!0}},CHILD:function(p,b,x,C,T){var D=p.slice(0,3)!=="nth",F=p.slice(-4)!=="last",z=b==="of-type";return C===1&&T===0?function(I){return!!I.parentNode}:function(I,te,V){var X,re,q,le,Le,_e=D!==F?"nextSibling":"previousSibling",He=I.parentNode,rt=z&&I.nodeName.toLowerCase(),Jt=!V&&!z,De=!1;if(He){if(D){for(;_e;){for(q=I;q=q[_e];)if(z?Q(q,rt):q.nodeType===1)return!1;Le=_e=p==="only"&&!Le&&"nextSibling"}return!0}if(Le=[F?He.firstChild:He.lastChild],F&&Jt){for(re=He[P]||(He[P]={}),X=re[p]||[],le=X[0]===w&&X[1],De=le&&X[2],q=le&&He.childNodes[le];q=++le&&q&&q[_e]||(De=le=0)||Le.pop();)if(q.nodeType===1&&++De&&q===I){re[p]=[w,le,De];break}}else if(Jt&&(re=I[P]||(I[P]={}),X=re[p]||[],le=X[0]===w&&X[1],De=le),De===!1)for(;(q=++le&&q&&q[_e]||(De=le=0)||Le.pop())&&!((z?Q(q,rt):q.nodeType===1)&&++De&&(Jt&&(re=q[P]||(q[P]={}),re[p]=[w,De]),q===I)););return De-=T,De===C||De%C===0&&De/C>=0}}},PSEUDO:function(p,b){var x,C=r.pseudos[p]||r.setFilters[p.toLowerCase()]||ce.error("unsupported pseudo: "+p);return C[P]?C(b):C.length>1?(x=[p,p,"",b],r.setFilters.hasOwnProperty(p.toLowerCase())?We(function(T,D){for(var F,z=C(T,b),I=z.length;I--;)F=A.call(T,z[I]),T[F]=!(D[F]=z[I])}):function(T){return C(T,0,x)}):C}},pseudos:{not:We(function(p){var b=[],x=[],C=kn(p.replace(Ae,"$1"));return C[P]?We(function(T,D,F,z){for(var I,te=C(T,null,z,[]),V=T.length;V--;)(I=te[V])&&(T[V]=!(D[V]=I))}):function(T,D,F){return b[0]=T,C(b,null,F,x),b[0]=null,!x.pop()}}),has:We(function(p){return function(b){return ce(p,b).length>0}}),contains:We(function(p){return p=p.replace(at,ct),function(b){return(b.textContent||s.text(b)).indexOf(p)>-1}}),lang:We(function(p){return pr.test(p||"")||ce.error("unsupported lang: "+p),p=p.replace(at,ct).toLowerCase(),function(b){var x;do if(x=y?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return x=x.toLowerCase(),x===p||x.indexOf(p+"-")===0;while((b=b.parentNode)&&b.nodeType===1);return!1}}),target:function(p){var b=t.location&&t.location.hash;return b&&b.slice(1)===p.id},root:function(p){return p===m},focus:function(p){return p===Yo()&&d.hasFocus()&&!!(p.type||p.href||~p.tabIndex)},enabled:Ti(!1),disabled:Ti(!0),checked:function(p){return Q(p,"input")&&!!p.checked||Q(p,"option")&&!!p.selected},selected:function(p){return p.parentNode&&p.parentNode.selectedIndex,p.selected===!0},empty:function(p){for(p=p.firstChild;p;p=p.nextSibling)if(p.nodeType<6)return!1;return!0},parent:function(p){return!r.pseudos.empty(p)},header:function(p){return gt.test(p.nodeName)},input:function(p){return pt.test(p.nodeName)},button:function(p){return Q(p,"input")&&p.type==="button"||Q(p,"button")},text:function(p){var b;return Q(p,"input")&&p.type==="text"&&((b=p.getAttribute("type"))==null||b.toLowerCase()==="text")},first:Pt(function(){return[0]}),last:Pt(function(p,b){return[b-1]}),eq:Pt(function(p,b,x){return[x<0?x+b:x]}),even:Pt(function(p,b){for(var x=0;x<b;x+=2)p.push(x);return p}),odd:Pt(function(p,b){for(var x=1;x<b;x+=2)p.push(x);return p}),lt:Pt(function(p,b,x){var C;for(x<0?C=x+b:x>b?C=b:C=x;--C>=0;)p.push(C);return p}),gt:Pt(function(p,b,x){for(var C=x<0?x+b:x;++C<b;)p.push(C);return p})}},r.pseudos.nth=r.pseudos.eq;for(e in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[e]=Xo(e);for(e in{submit:!0,reset:!0})r.pseudos[e]=Jo(e);function Ai(){}Ai.prototype=r.filters=r.pseudos,r.setFilters=new Ai;function gr(p,b){var x,C,T,D,F,z,I,te=se[p+" "];if(te)return b?0:te.slice(0);for(F=p,z=[],I=r.preFilter;F;){(!x||(C=ye.exec(F)))&&(C&&(F=F.slice(C[0].length)||F),z.push(T=[])),x=!1,(C=hr.exec(F))&&(x=C.shift(),T.push({value:x,type:C[0].replace(Ae," ")}),F=F.slice(x.length));for(D in r.filter)(C=tt[D].exec(F))&&(!I[D]||(C=I[D](C)))&&(x=C.shift(),T.push({value:x,type:D,matches:C}),F=F.slice(x.length));if(!x)break}return b?F.length:F?ce.error(p):se(p,z).slice(0)}function jr(p){for(var b=0,x=p.length,C="";b<x;b++)C+=p[b].value;return C}function zr(p,b,x){var C=b.dir,T=b.next,D=T||C,F=x&&D==="parentNode",z=_++;return b.first?function(I,te,V){for(;I=I[C];)if(I.nodeType===1||F)return p(I,te,V);return!1}:function(I,te,V){var X,re,q=[w,z];if(V){for(;I=I[C];)if((I.nodeType===1||F)&&p(I,te,V))return!0}else for(;I=I[C];)if(I.nodeType===1||F)if(re=I[P]||(I[P]={}),T&&Q(I,T))I=I[C]||I;else{if((X=re[D])&&X[0]===w&&X[1]===z)return q[2]=X[2];if(re[D]=q,q[2]=p(I,te,V))return!0}return!1}}function wn(p){return p.length>1?function(b,x,C){for(var T=p.length;T--;)if(!p[T](b,x,C))return!1;return!0}:p[0]}function Qo(p,b,x){for(var C=0,T=b.length;C<T;C++)ce(p,b[C],x);return x}function Br(p,b,x,C,T){for(var D,F=[],z=0,I=p.length,te=b!=null;z<I;z++)(D=p[z])&&(!x||x(D,C,T))&&(F.push(D),te&&b.push(z));return F}function Cn(p,b,x,C,T,D){return C&&!C[P]&&(C=Cn(C)),T&&!T[P]&&(T=Cn(T,D)),We(function(F,z,I,te){var V,X,re,q,le=[],Le=[],_e=z.length,He=F||Qo(b||"*",I.nodeType?[I]:I,[]),rt=p&&(F||!b)?Br(He,le,p,I,te):He;if(x?(q=T||(F?p:_e||C)?[]:z,x(rt,q,I,te)):q=rt,C)for(V=Br(q,Le),C(V,[],I,te),X=V.length;X--;)(re=V[X])&&(q[Le[X]]=!(rt[Le[X]]=re));if(F){if(T||p){if(T){for(V=[],X=q.length;X--;)(re=q[X])&&V.push(rt[X]=re);T(null,q=[],V,te)}for(X=q.length;X--;)(re=q[X])&&(V=T?A.call(F,re):le[X])>-1&&(F[V]=!(z[V]=re))}}else q=Br(q===z?q.splice(_e,q.length):q),T?T(null,z,q,te):u.apply(z,q)})}function $n(p){for(var b,x,C,T=p.length,D=r.relative[p[0].type],F=D||r.relative[" "],z=D?1:0,I=zr(function(X){return X===b},F,!0),te=zr(function(X){return A.call(b,X)>-1},F,!0),V=[function(X,re,q){var le=!D&&(q||re!=i)||((b=re).nodeType?I(X,re,q):te(X,re,q));return b=null,le}];z<T;z++)if(x=r.relative[p[z].type])V=[zr(wn(V),x)];else{if(x=r.filter[p[z].type].apply(null,p[z].matches),x[P]){for(C=++z;C<T&&!r.relative[p[C].type];C++);return Cn(z>1&&wn(V),z>1&&jr(p.slice(0,z-1).concat({value:p[z-2].type===" "?"*":""})).replace(Ae,"$1"),x,z<C&&$n(p.slice(z,C)),C<T&&$n(p=p.slice(C)),C<T&&jr(p))}V.push(x)}return wn(V)}function Ko(p,b){var x=b.length>0,C=p.length>0,T=function(D,F,z,I,te){var V,X,re,q=0,le="0",Le=D&&[],_e=[],He=i,rt=D||C&&r.find.TAG("*",te),Jt=w+=He==null?1:Math.random()||.1,De=rt.length;for(te&&(i=F==d||F||te);le!==De&&(V=rt[le])!=null;le++){if(C&&V){for(X=0,!F&&V.ownerDocument!=d&&(yt(V),z=!y);re=p[X++];)if(re(V,F||d,z)){u.call(I,V);break}te&&(w=Jt)}x&&((V=!re&&V)&&q--,D&&Le.push(V))}if(q+=le,x&&le!==q){for(X=0;re=b[X++];)re(Le,_e,F,z);if(D){if(q>0)for(;le--;)Le[le]||_e[le]||(_e[le]=he.call(I));_e=Br(_e)}u.apply(I,_e),te&&!D&&_e.length>0&&q+b.length>1&&s.uniqueSort(I)}return te&&(w=Jt,i=He),Le};return x?We(T):T}function kn(p,b){var x,C=[],T=[],D=K[p+" "];if(!D){for(b||(b=gr(p)),x=b.length;x--;)D=$n(b[x]),D[P]?C.push(D):T.push(D);D=K(p,Ko(T,C)),D.selector=p}return D}function Pi(p,b,x,C){var T,D,F,z,I,te=typeof p=="function"&&p,V=!C&&gr(p=te.selector||p);if(x=x||[],V.length===1){if(D=V[0]=V[0].slice(0),D.length>2&&(F=D[0]).type==="ID"&&b.nodeType===9&&y&&r.relative[D[1].type]){if(b=(r.find.ID(F.matches[0].replace(at,ct),b)||[])[0],b)te&&(b=b.parentNode);else return x;p=p.slice(D.shift().value.length)}for(T=tt.needsContext.test(p)?0:D.length;T--&&(F=D[T],!r.relative[z=F.type]);)if((I=r.find[z])&&(C=I(F.matches[0].replace(at,ct),vn.test(D[0].type)&&xn(b.parentNode)||b))){if(D.splice(T,1),p=C.length&&jr(D),!p)return u.apply(x,C),x;break}}return(te||kn(p,V))(C,b,!y,x,!b||vn.test(p)&&xn(b.parentNode)||b),x}M.sortStable=P.split("").sort(we).join("")===P,yt(),M.sortDetached=Xt(function(p){return p.compareDocumentPosition(d.createElement("fieldset"))&1}),s.find=ce,s.expr[":"]=s.expr.pseudos,s.unique=s.uniqueSort,ce.compile=kn,ce.select=Pi,ce.setDocument=yt,ce.tokenize=gr,ce.escape=s.escapeSelector,ce.getText=s.text,ce.isXML=s.isXMLDoc,ce.selectors=s.expr,ce.support=s.support,ce.uniqueSort=s.uniqueSort})();var Je=function(e,r,i){for(var o=[],c=i!==void 0;(e=e[r])&&e.nodeType!==9;)if(e.nodeType===1){if(c&&s(e).is(i))break;o.push(e)}return o},jt=function(e,r){for(var i=[];e;e=e.nextSibling)e.nodeType===1&&e!==r&&i.push(e);return i},zt=s.expr.match.needsContext,Bt=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function ht(e,r,i){return N(r)?s.grep(e,function(o,c){return!!r.call(o,c,o)!==i}):r.nodeType?s.grep(e,function(o){return o===r!==i}):typeof r!="string"?s.grep(e,function(o){return A.call(r,o)>-1!==i}):s.filter(r,e,i)}s.filter=function(e,r,i){var o=r[0];return i&&(e=":not("+e+")"),r.length===1&&o.nodeType===1?s.find.matchesSelector(o,e)?[o]:[]:s.find.matches(e,s.grep(r,function(c){return c.nodeType===1}))},s.fn.extend({find:function(e){var r,i,o=this.length,c=this;if(typeof e!="string")return this.pushStack(s(e).filter(function(){for(r=0;r<o;r++)if(s.contains(c[r],this))return!0}));for(i=this.pushStack([]),r=0;r<o;r++)s.find(e,c[r],i);return o>1?s.uniqueSort(i):i},filter:function(e){return this.pushStack(ht(this,e||[],!1))},not:function(e){return this.pushStack(ht(this,e||[],!0))},is:function(e){return!!ht(this,typeof e=="string"&&zt.test(e)?s(e):e||[],!1).length}});var ir,Sr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,en=s.fn.init=function(e,r,i){var o,c;if(!e)return this;if(i=i||ir,typeof e=="string")if(e[0]==="<"&&e[e.length-1]===">"&&e.length>=3?o=[null,e,null]:o=Sr.exec(e),o&&(o[1]||!r))if(o[1]){if(r=r instanceof s?r[0]:r,s.merge(this,s.parseHTML(o[1],r&&r.nodeType?r.ownerDocument||r:j,!0)),Bt.test(o[1])&&s.isPlainObject(r))for(o in r)N(this[o])?this[o](r[o]):this.attr(o,r[o]);return this}else return c=j.getElementById(o[2]),c&&(this[0]=c,this.length=1),this;else return!r||r.jquery?(r||i).find(e):this.constructor(r).find(e);else{if(e.nodeType)return this[0]=e,this.length=1,this;if(N(e))return i.ready!==void 0?i.ready(e):e(s)}return s.makeArray(e,this)};en.prototype=s.fn,ir=s(j);var tn=/^(?:parents|prev(?:Until|All))/,_r={children:!0,contents:!0,next:!0,prev:!0};s.fn.extend({has:function(e){var r=s(e,this),i=r.length;return this.filter(function(){for(var o=0;o<i;o++)if(s.contains(this,r[o]))return!0})},closest:function(e,r){var i,o=0,c=this.length,u=[],d=typeof e!="string"&&s(e);if(!zt.test(e)){for(;o<c;o++)for(i=this[o];i&&i!==r;i=i.parentNode)if(i.nodeType<11&&(d?d.index(i)>-1:i.nodeType===1&&s.find.matchesSelector(i,e))){u.push(i);break}}return this.pushStack(u.length>1?s.uniqueSort(u):u)},index:function(e){return e?typeof e=="string"?A.call(s(e),this[0]):A.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,r){return this.pushStack(s.uniqueSort(s.merge(this.get(),s(e,r))))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});function Dr(e,r){for(;(e=e[r])&&e.nodeType!==1;);return e}s.each({parent:function(e){var r=e.parentNode;return r&&r.nodeType!==11?r:null},parents:function(e){return Je(e,"parentNode")},parentsUntil:function(e,r,i){return Je(e,"parentNode",i)},next:function(e){return Dr(e,"nextSibling")},prev:function(e){return Dr(e,"previousSibling")},nextAll:function(e){return Je(e,"nextSibling")},prevAll:function(e){return Je(e,"previousSibling")},nextUntil:function(e,r,i){return Je(e,"nextSibling",i)},prevUntil:function(e,r,i){return Je(e,"previousSibling",i)},siblings:function(e){return jt((e.parentNode||{}).firstChild,e)},children:function(e){return jt(e.firstChild)},contents:function(e){return e.contentDocument!=null&&f(e.contentDocument)?e.contentDocument:(Q(e,"template")&&(e=e.content||e),s.merge([],e.childNodes))}},function(e,r){s.fn[e]=function(i,o){var c=s.map(this,r,i);return e.slice(-5)!=="Until"&&(o=i),o&&typeof o=="string"&&(c=s.filter(o,c)),this.length>1&&(_r[e]||s.uniqueSort(c),tn.test(e)&&c.reverse()),this.pushStack(c)}});var je=/[^\x20\t\r\n\f]+/g;function to(e){var r={};return s.each(e.match(je)||[],function(i,o){r[o]=!0}),r}s.Callbacks=function(e){e=typeof e=="string"?to(e):s.extend({},e);var r,i,o,c,u=[],d=[],m=-1,y=function(){for(c=c||e.once,o=r=!0;d.length;m=-1)for(i=d.shift();++m<u.length;)u[m].apply(i[0],i[1])===!1&&e.stopOnFalse&&(m=u.length,i=!1);e.memory||(i=!1),r=!1,c&&(i?u=[]:u="")},v={add:function(){return u&&(i&&!r&&(m=u.length-1,d.push(i)),function $(P){s.each(P,function(w,_){N(_)?(!e.unique||!v.has(_))&&u.push(_):_&&_.length&&ge(_)!=="string"&&$(_)})}(arguments),i&&!r&&y()),this},remove:function(){return s.each(arguments,function($,P){for(var w;(w=s.inArray(P,u,w))>-1;)u.splice(w,1),w<=m&&m--}),this},has:function($){return $?s.inArray($,u)>-1:u.length>0},empty:function(){return u&&(u=[]),this},disable:function(){return c=d=[],u=i="",this},disabled:function(){return!u},lock:function(){return c=d=[],!i&&!r&&(u=i=""),this},locked:function(){return!!c},fireWith:function($,P){return c||(P=P||[],P=[$,P.slice?P.slice():P],d.push(P),r||y()),this},fire:function(){return v.fireWith(this,arguments),this},fired:function(){return!!o}};return v};function Ht(e){return e}function Mr(e){throw e}function Gn(e,r,i,o){var c;try{e&&N(c=e.promise)?c.call(e).done(r).fail(i):e&&N(c=e.then)?c.call(e,r,i):r.apply(void 0,[e].slice(o))}catch(u){i.apply(void 0,[u])}}s.extend({Deferred:function(e){var r=[["notify","progress",s.Callbacks("memory"),s.Callbacks("memory"),2],["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),0,"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return c.done(arguments).fail(arguments),this},catch:function(u){return o.then(null,u)},pipe:function(){var u=arguments;return s.Deferred(function(d){s.each(r,function(m,y){var v=N(u[y[4]])&&u[y[4]];c[y[1]](function(){var $=v&&v.apply(this,arguments);$&&N($.promise)?$.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[y[0]+"With"](this,v?[$]:arguments)})}),u=null}).promise()},then:function(u,d,m){var y=0;function v($,P,w,_){return function(){var G=this,se=arguments,K=function(){var we,Ke;if(!($<y)){if(we=w.apply(G,se),we===P.promise())throw new TypeError("Thenable self-resolution");Ke=we&&(typeof we=="object"||typeof we=="function")&&we.then,N(Ke)?_?Ke.call(we,v(y,P,Ht,_),v(y,P,Mr,_)):(y++,Ke.call(we,v(y,P,Ht,_),v(y,P,Mr,_),v(y,P,Ht,P.notifyWith))):(w!==Ht&&(G=void 0,se=[we]),(_||P.resolveWith)(G,se))}},Pe=_?K:function(){try{K()}catch(we){s.Deferred.exceptionHook&&s.Deferred.exceptionHook(we,Pe.error),$+1>=y&&(w!==Mr&&(G=void 0,se=[we]),P.rejectWith(G,se))}};$?Pe():(s.Deferred.getErrorHook?Pe.error=s.Deferred.getErrorHook():s.Deferred.getStackHook&&(Pe.error=s.Deferred.getStackHook()),t.setTimeout(Pe))}}return s.Deferred(function($){r[0][3].add(v(0,$,N(m)?m:Ht,$.notifyWith)),r[1][3].add(v(0,$,N(u)?u:Ht)),r[2][3].add(v(0,$,N(d)?d:Mr))}).promise()},promise:function(u){return u!=null?s.extend(u,o):o}},c={};return s.each(r,function(u,d){var m=d[2],y=d[5];o[d[1]]=m.add,y&&m.add(function(){i=y},r[3-u][2].disable,r[3-u][3].disable,r[0][2].lock,r[0][3].lock),m.add(d[3].fire),c[d[0]]=function(){return c[d[0]+"With"](this===c?void 0:this,arguments),this},c[d[0]+"With"]=m.fireWith}),o.promise(c),e&&e.call(c,c),c},when:function(e){var r=arguments.length,i=r,o=Array(i),c=h.call(arguments),u=s.Deferred(),d=function(m){return function(y){o[m]=this,c[m]=arguments.length>1?h.call(arguments):y,--r||u.resolveWith(o,c)}};if(r<=1&&(Gn(e,u.done(d(i)).resolve,u.reject,!r),u.state()==="pending"||N(c[i]&&c[i].then)))return u.then();for(;i--;)Gn(c[i],d(i),u.reject);return u.promise()}});var ro=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;s.Deferred.exceptionHook=function(e,r){t.console&&t.console.warn&&e&&ro.test(e.name)&&t.console.warn("jQuery.Deferred exception: "+e.message,e.stack,r)},s.readyException=function(e){t.setTimeout(function(){throw e})};var rn=s.Deferred();s.fn.ready=function(e){return rn.then(e).catch(function(r){s.readyException(r)}),this},s.extend({isReady:!1,readyWait:1,ready:function(e){(e===!0?--s.readyWait:s.isReady)||(s.isReady=!0,!(e!==!0&&--s.readyWait>0)&&rn.resolveWith(j,[s]))}}),s.ready.then=rn.then;function Er(){j.removeEventListener("DOMContentLoaded",Er),t.removeEventListener("load",Er),s.ready()}j.readyState==="complete"||j.readyState!=="loading"&&!j.documentElement.doScroll?t.setTimeout(s.ready):(j.addEventListener("DOMContentLoaded",Er),t.addEventListener("load",Er));var ot=function(e,r,i,o,c,u,d){var m=0,y=e.length,v=i==null;if(ge(i)==="object"){c=!0;for(m in i)ot(e,r,m,i[m],!0,u,d)}else if(o!==void 0&&(c=!0,N(o)||(d=!0),v&&(d?(r.call(e,o),r=null):(v=r,r=function($,P,w){return v.call(s($),w)})),r))for(;m<y;m++)r(e[m],i,d?o:o.call(e[m],m,r(e[m],i)));return c?e:v?r.call(e):y?r(e[0],i):u},no=/^-ms-/,io=/-([a-z])/g;function oo(e,r){return r.toUpperCase()}function Qe(e){return e.replace(no,"ms-").replace(io,oo)}var or=function(e){return e.nodeType===1||e.nodeType===9||!+e.nodeType};function sr(){this.expando=s.expando+sr.uid++}sr.uid=1,sr.prototype={cache:function(e){var r=e[this.expando];return r||(r={},or(e)&&(e.nodeType?e[this.expando]=r:Object.defineProperty(e,this.expando,{value:r,configurable:!0}))),r},set:function(e,r,i){var o,c=this.cache(e);if(typeof r=="string")c[Qe(r)]=i;else for(o in r)c[Qe(o)]=r[o];return c},get:function(e,r){return r===void 0?this.cache(e):e[this.expando]&&e[this.expando][Qe(r)]},access:function(e,r,i){return r===void 0||r&&typeof r=="string"&&i===void 0?this.get(e,r):(this.set(e,r,i),i!==void 0?i:r)},remove:function(e,r){var i,o=e[this.expando];if(o!==void 0){if(r!==void 0)for(Array.isArray(r)?r=r.map(Qe):(r=Qe(r),r=r in o?[r]:r.match(je)||[]),i=r.length;i--;)delete o[r[i]];(r===void 0||s.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var r=e[this.expando];return r!==void 0&&!s.isEmptyObject(r)}};var B=new sr,Ee=new sr,so=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ao=/[A-Z]/g;function co(e){return e==="true"?!0:e==="false"?!1:e==="null"?null:e===+e+""?+e:so.test(e)?JSON.parse(e):e}function Yn(e,r,i){var o;if(i===void 0&&e.nodeType===1)if(o="data-"+r.replace(ao,"-$&").toLowerCase(),i=e.getAttribute(o),typeof i=="string"){try{i=co(i)}catch{}Ee.set(e,r,i)}else i=void 0;return i}s.extend({hasData:function(e){return Ee.hasData(e)||B.hasData(e)},data:function(e,r,i){return Ee.access(e,r,i)},removeData:function(e,r){Ee.remove(e,r)},_data:function(e,r,i){return B.access(e,r,i)},_removeData:function(e,r){B.remove(e,r)}}),s.fn.extend({data:function(e,r){var i,o,c,u=this[0],d=u&&u.attributes;if(e===void 0){if(this.length&&(c=Ee.get(u),u.nodeType===1&&!B.get(u,"hasDataAttrs"))){for(i=d.length;i--;)d[i]&&(o=d[i].name,o.indexOf("data-")===0&&(o=Qe(o.slice(5)),Yn(u,o,c[o])));B.set(u,"hasDataAttrs",!0)}return c}return typeof e=="object"?this.each(function(){Ee.set(this,e)}):ot(this,function(m){var y;if(u&&m===void 0)return y=Ee.get(u,e),y!==void 0||(y=Yn(u,e),y!==void 0)?y:void 0;this.each(function(){Ee.set(this,e,m)})},null,r,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ee.remove(this,e)})}}),s.extend({queue:function(e,r,i){var o;if(e)return r=(r||"fx")+"queue",o=B.get(e,r),i&&(!o||Array.isArray(i)?o=B.access(e,r,s.makeArray(i)):o.push(i)),o||[]},dequeue:function(e,r){r=r||"fx";var i=s.queue(e,r),o=i.length,c=i.shift(),u=s._queueHooks(e,r),d=function(){s.dequeue(e,r)};c==="inprogress"&&(c=i.shift(),o--),c&&(r==="fx"&&i.unshift("inprogress"),delete u.stop,c.call(e,d,u)),!o&&u&&u.empty.fire()},_queueHooks:function(e,r){var i=r+"queueHooks";return B.get(e,i)||B.access(e,i,{empty:s.Callbacks("once memory").add(function(){B.remove(e,[r+"queue",i])})})}}),s.fn.extend({queue:function(e,r){var i=2;return typeof e!="string"&&(r=e,e="fx",i--),arguments.length<i?s.queue(this[0],e):r===void 0?this:this.each(function(){var o=s.queue(this,e,r);s._queueHooks(this,e),e==="fx"&&o[0]!=="inprogress"&&s.dequeue(this,e)})},dequeue:function(e){return this.each(function(){s.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,r){var i,o=1,c=s.Deferred(),u=this,d=this.length,m=function(){--o||c.resolveWith(u,[u])};for(typeof e!="string"&&(r=e,e=void 0),e=e||"fx";d--;)i=B.get(u[d],e+"queueHooks"),i&&i.empty&&(o++,i.empty.add(m));return m(),c.promise(r)}});var Xn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ar=new RegExp("^(?:([+-])=|)("+Xn+")([a-z%]*)$","i"),st=["Top","Right","Bottom","Left"],$t=j.documentElement,qt=function(e){return s.contains(e.ownerDocument,e)},uo={composed:!0};$t.getRootNode&&(qt=function(e){return s.contains(e.ownerDocument,e)||e.getRootNode(uo)===e.ownerDocument});var Or=function(e,r){return e=r||e,e.style.display==="none"||e.style.display===""&&qt(e)&&s.css(e,"display")==="none"};function Jn(e,r,i,o){var c,u,d=20,m=o?function(){return o.cur()}:function(){return s.css(e,r,"")},y=m(),v=i&&i[3]||(s.cssNumber[r]?"":"px"),$=e.nodeType&&(s.cssNumber[r]||v!=="px"&&+y)&&ar.exec(s.css(e,r));if($&&$[3]!==v){for(y=y/2,v=v||$[3],$=+y||1;d--;)s.style(e,r,$+v),(1-u)*(1-(u=m()/y||.5))<=0&&(d=0),$=$/u;$=$*2,s.style(e,r,$+v),i=i||[]}return i&&($=+$||+y||0,c=i[1]?$+(i[1]+1)*i[2]:+i[2],o&&(o.unit=v,o.start=$,o.end=c)),c}var Qn={};function lo(e){var r,i=e.ownerDocument,o=e.nodeName,c=Qn[o];return c||(r=i.body.appendChild(i.createElement(o)),c=s.css(r,"display"),r.parentNode.removeChild(r),c==="none"&&(c="block"),Qn[o]=c,c)}function Ut(e,r){for(var i,o,c=[],u=0,d=e.length;u<d;u++)o=e[u],o.style&&(i=o.style.display,r?(i==="none"&&(c[u]=B.get(o,"display")||null,c[u]||(o.style.display="")),o.style.display===""&&Or(o)&&(c[u]=lo(o))):i!=="none"&&(c[u]="none",B.set(o,"display",i)));for(u=0;u<d;u++)c[u]!=null&&(e[u].style.display=c[u]);return e}s.fn.extend({show:function(){return Ut(this,!0)},hide:function(){return Ut(this)},toggle:function(e){return typeof e=="boolean"?e?this.show():this.hide():this.each(function(){Or(this)?s(this).show():s(this).hide()})}});var cr=/^(?:checkbox|radio)$/i,Kn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Zn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var e=j.createDocumentFragment(),r=e.appendChild(j.createElement("div")),i=j.createElement("input");i.setAttribute("type","radio"),i.setAttribute("checked","checked"),i.setAttribute("name","t"),r.appendChild(i),M.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,r.innerHTML="<textarea>x</textarea>",M.noCloneChecked=!!r.cloneNode(!0).lastChild.defaultValue,r.innerHTML="<option></option>",M.option=!!r.lastChild})();var ze={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ze.tbody=ze.tfoot=ze.colgroup=ze.caption=ze.thead,ze.th=ze.td,M.option||(ze.optgroup=ze.option=[1,"<select multiple='multiple'>","</select>"]);function Oe(e,r){var i;return typeof e.getElementsByTagName<"u"?i=e.getElementsByTagName(r||"*"):typeof e.querySelectorAll<"u"?i=e.querySelectorAll(r||"*"):i=[],r===void 0||r&&Q(e,r)?s.merge([e],i):i}function nn(e,r){for(var i=0,o=e.length;i<o;i++)B.set(e[i],"globalEval",!r||B.get(r[i],"globalEval"))}var fo=/<|&#?\w+;/;function ei(e,r,i,o,c){for(var u,d,m,y,v,$,P=r.createDocumentFragment(),w=[],_=0,G=e.length;_<G;_++)if(u=e[_],u||u===0)if(ge(u)==="object")s.merge(w,u.nodeType?[u]:u);else if(!fo.test(u))w.push(r.createTextNode(u));else{for(d=d||P.appendChild(r.createElement("div")),m=(Kn.exec(u)||["",""])[1].toLowerCase(),y=ze[m]||ze._default,d.innerHTML=y[1]+s.htmlPrefilter(u)+y[2],$=y[0];$--;)d=d.lastChild;s.merge(w,d.childNodes),d=P.firstChild,d.textContent=""}for(P.textContent="",_=0;u=w[_++];){if(o&&s.inArray(u,o)>-1){c&&c.push(u);continue}if(v=qt(u),d=Oe(P.appendChild(u),"script"),v&&nn(d),i)for($=0;u=d[$++];)Zn.test(u.type||"")&&i.push(u)}return P}var ti=/^([^.]*)(?:\.(.+)|)/;function Vt(){return!0}function Wt(){return!1}function on(e,r,i,o,c,u){var d,m;if(typeof r=="object"){typeof i!="string"&&(o=o||i,i=void 0);for(m in r)on(e,m,i,o,r[m],u);return e}if(o==null&&c==null?(c=i,o=i=void 0):c==null&&(typeof i=="string"?(c=o,o=void 0):(c=o,o=i,i=void 0)),c===!1)c=Wt;else if(!c)return e;return u===1&&(d=c,c=function(y){return s().off(y),d.apply(this,arguments)},c.guid=d.guid||(d.guid=s.guid++)),e.each(function(){s.event.add(this,r,c,o,i)})}s.event={global:{},add:function(e,r,i,o,c){var u,d,m,y,v,$,P,w,_,G,se,K=B.get(e);if(or(e))for(i.handler&&(u=i,i=u.handler,c=u.selector),c&&s.find.matchesSelector($t,c),i.guid||(i.guid=s.guid++),(y=K.events)||(y=K.events=Object.create(null)),(d=K.handle)||(d=K.handle=function(Pe){return typeof s<"u"&&s.event.triggered!==Pe.type?s.event.dispatch.apply(e,arguments):void 0}),r=(r||"").match(je)||[""],v=r.length;v--;)m=ti.exec(r[v])||[],_=se=m[1],G=(m[2]||"").split(".").sort(),_&&(P=s.event.special[_]||{},_=(c?P.delegateType:P.bindType)||_,P=s.event.special[_]||{},$=s.extend({type:_,origType:se,data:o,handler:i,guid:i.guid,selector:c,needsContext:c&&s.expr.match.needsContext.test(c),namespace:G.join(".")},u),(w=y[_])||(w=y[_]=[],w.delegateCount=0,(!P.setup||P.setup.call(e,o,G,d)===!1)&&e.addEventListener&&e.addEventListener(_,d)),P.add&&(P.add.call(e,$),$.handler.guid||($.handler.guid=i.guid)),c?w.splice(w.delegateCount++,0,$):w.push($),s.event.global[_]=!0)},remove:function(e,r,i,o,c){var u,d,m,y,v,$,P,w,_,G,se,K=B.hasData(e)&&B.get(e);if(!(!K||!(y=K.events))){for(r=(r||"").match(je)||[""],v=r.length;v--;){if(m=ti.exec(r[v])||[],_=se=m[1],G=(m[2]||"").split(".").sort(),!_){for(_ in y)s.event.remove(e,_+r[v],i,o,!0);continue}for(P=s.event.special[_]||{},_=(o?P.delegateType:P.bindType)||_,w=y[_]||[],m=m[2]&&new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=u=w.length;u--;)$=w[u],(c||se===$.origType)&&(!i||i.guid===$.guid)&&(!m||m.test($.namespace))&&(!o||o===$.selector||o==="**"&&$.selector)&&(w.splice(u,1),$.selector&&w.delegateCount--,P.remove&&P.remove.call(e,$));d&&!w.length&&((!P.teardown||P.teardown.call(e,G,K.handle)===!1)&&s.removeEvent(e,_,K.handle),delete y[_])}s.isEmptyObject(y)&&B.remove(e,"handle events")}},dispatch:function(e){var r,i,o,c,u,d,m=new Array(arguments.length),y=s.event.fix(e),v=(B.get(this,"events")||Object.create(null))[y.type]||[],$=s.event.special[y.type]||{};for(m[0]=y,r=1;r<arguments.length;r++)m[r]=arguments[r];if(y.delegateTarget=this,!($.preDispatch&&$.preDispatch.call(this,y)===!1)){for(d=s.event.handlers.call(this,y,v),r=0;(c=d[r++])&&!y.isPropagationStopped();)for(y.currentTarget=c.elem,i=0;(u=c.handlers[i++])&&!y.isImmediatePropagationStopped();)(!y.rnamespace||u.namespace===!1||y.rnamespace.test(u.namespace))&&(y.handleObj=u,y.data=u.data,o=((s.event.special[u.origType]||{}).handle||u.handler).apply(c.elem,m),o!==void 0&&(y.result=o)===!1&&(y.preventDefault(),y.stopPropagation()));return $.postDispatch&&$.postDispatch.call(this,y),y.result}},handlers:function(e,r){var i,o,c,u,d,m=[],y=r.delegateCount,v=e.target;if(y&&v.nodeType&&!(e.type==="click"&&e.button>=1)){for(;v!==this;v=v.parentNode||this)if(v.nodeType===1&&!(e.type==="click"&&v.disabled===!0)){for(u=[],d={},i=0;i<y;i++)o=r[i],c=o.selector+" ",d[c]===void 0&&(d[c]=o.needsContext?s(c,this).index(v)>-1:s.find(c,this,null,[v]).length),d[c]&&u.push(o);u.length&&m.push({elem:v,handlers:u})}}return v=this,y<r.length&&m.push({elem:v,handlers:r.slice(y)}),m},addProp:function(e,r){Object.defineProperty(s.Event.prototype,e,{enumerable:!0,configurable:!0,get:N(r)?function(){if(this.originalEvent)return r(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(i){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:i})}})},fix:function(e){return e[s.expando]?e:new s.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var r=this||e;return cr.test(r.type)&&r.click&&Q(r,"input")&&Nr(r,"click",!0),!1},trigger:function(e){var r=this||e;return cr.test(r.type)&&r.click&&Q(r,"input")&&Nr(r,"click"),!0},_default:function(e){var r=e.target;return cr.test(r.type)&&r.click&&Q(r,"input")&&B.get(r,"click")||Q(r,"a")}},beforeunload:{postDispatch:function(e){e.result!==void 0&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}};function Nr(e,r,i){if(!i){B.get(e,r)===void 0&&s.event.add(e,r,Vt);return}B.set(e,r,!1),s.event.add(e,r,{namespace:!1,handler:function(o){var c,u=B.get(this,r);if(o.isTrigger&1&&this[r]){if(u)(s.event.special[r]||{}).delegateType&&o.stopPropagation();else if(u=h.call(arguments),B.set(this,r,u),this[r](),c=B.get(this,r),B.set(this,r,!1),u!==c)return o.stopImmediatePropagation(),o.preventDefault(),c}else u&&(B.set(this,r,s.event.trigger(u[0],u.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=Vt)}})}s.removeEvent=function(e,r,i){e.removeEventListener&&e.removeEventListener(r,i)},s.Event=function(e,r){if(!(this instanceof s.Event))return new s.Event(e,r);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.defaultPrevented===void 0&&e.returnValue===!1?Vt:Wt,this.target=e.target&&e.target.nodeType===3?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,r&&s.extend(this,r),this.timeStamp=e&&e.timeStamp||Date.now(),this[s.expando]=!0},s.Event.prototype={constructor:s.Event,isDefaultPrevented:Wt,isPropagationStopped:Wt,isImmediatePropagationStopped:Wt,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Vt,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Vt,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Vt,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},s.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},s.event.addProp),s.each({focus:"focusin",blur:"focusout"},function(e,r){function i(o){if(j.documentMode){var c=B.get(this,"handle"),u=s.event.fix(o);u.type=o.type==="focusin"?"focus":"blur",u.isSimulated=!0,c(o),u.target===u.currentTarget&&c(u)}else s.event.simulate(r,o.target,s.event.fix(o))}s.event.special[e]={setup:function(){var o;if(Nr(this,e,!0),j.documentMode)o=B.get(this,r),o||this.addEventListener(r,i),B.set(this,r,(o||0)+1);else return!1},trigger:function(){return Nr(this,e),!0},teardown:function(){var o;if(j.documentMode)o=B.get(this,r)-1,o?B.set(this,r,o):(this.removeEventListener(r,i),B.remove(this,r));else return!1},_default:function(o){return B.get(o.target,e)},delegateType:r},s.event.special[r]={setup:function(){var o=this.ownerDocument||this.document||this,c=j.documentMode?this:o,u=B.get(c,r);u||(j.documentMode?this.addEventListener(r,i):o.addEventListener(e,i,!0)),B.set(c,r,(u||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,c=j.documentMode?this:o,u=B.get(c,r)-1;u?B.set(c,r,u):(j.documentMode?this.removeEventListener(r,i):o.removeEventListener(e,i,!0),B.remove(c,r))}}}),s.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,r){s.event.special[e]={delegateType:r,bindType:r,handle:function(i){var o,c=this,u=i.relatedTarget,d=i.handleObj;return(!u||u!==c&&!s.contains(c,u))&&(i.type=d.origType,o=d.handler.apply(this,arguments),i.type=r),o}}}),s.fn.extend({on:function(e,r,i,o){return on(this,e,r,i,o)},one:function(e,r,i,o){return on(this,e,r,i,o,1)},off:function(e,r,i){var o,c;if(e&&e.preventDefault&&e.handleObj)return o=e.handleObj,s(e.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof e=="object"){for(c in e)this.off(c,r,e[c]);return this}return(r===!1||typeof r=="function")&&(i=r,r=void 0),i===!1&&(i=Wt),this.each(function(){s.event.remove(this,e,i,r)})}});var ho=/<script|<style|<link/i,po=/checked\s*(?:[^=]|=\s*.checked.)/i,go=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ri(e,r){return Q(e,"table")&&Q(r.nodeType!==11?r:r.firstChild,"tr")&&s(e).children("tbody")[0]||e}function yo(e){return e.type=(e.getAttribute("type")!==null)+"/"+e.type,e}function mo(e){return(e.type||"").slice(0,5)==="true/"?e.type=e.type.slice(5):e.removeAttribute("type"),e}function ni(e,r){var i,o,c,u,d,m,y;if(r.nodeType===1){if(B.hasData(e)&&(u=B.get(e),y=u.events,y)){B.remove(r,"handle events");for(c in y)for(i=0,o=y[c].length;i<o;i++)s.event.add(r,c,y[c][i])}Ee.hasData(e)&&(d=Ee.access(e),m=s.extend({},d),Ee.set(r,m))}}function bo(e,r){var i=r.nodeName.toLowerCase();i==="input"&&cr.test(e.type)?r.checked=e.checked:(i==="input"||i==="textarea")&&(r.defaultValue=e.defaultValue)}function Gt(e,r,i,o){r=g(r);var c,u,d,m,y,v,$=0,P=e.length,w=P-1,_=r[0],G=N(_);if(G||P>1&&typeof _=="string"&&!M.checkClone&&po.test(_))return e.each(function(se){var K=e.eq(se);G&&(r[0]=_.call(this,se,K.html())),Gt(K,r,i,o)});if(P&&(c=ei(r,e[0].ownerDocument,!1,e,o),u=c.firstChild,c.childNodes.length===1&&(c=u),u||o)){for(d=s.map(Oe(c,"script"),yo),m=d.length;$<P;$++)y=c,$!==w&&(y=s.clone(y,!0,!0),m&&s.merge(d,Oe(y,"script"))),i.call(e[$],y,$);if(m)for(v=d[d.length-1].ownerDocument,s.map(d,mo),$=0;$<m;$++)y=d[$],Zn.test(y.type||"")&&!B.access(y,"globalEval")&&s.contains(v,y)&&(y.src&&(y.type||"").toLowerCase()!=="module"?s._evalUrl&&!y.noModule&&s._evalUrl(y.src,{nonce:y.nonce||y.getAttribute("nonce")},v):ne(y.textContent.replace(go,""),y,v))}return e}function ii(e,r,i){for(var o,c=r?s.filter(r,e):e,u=0;(o=c[u])!=null;u++)!i&&o.nodeType===1&&s.cleanData(Oe(o)),o.parentNode&&(i&&qt(o)&&nn(Oe(o,"script")),o.parentNode.removeChild(o));return e}s.extend({htmlPrefilter:function(e){return e},clone:function(e,r,i){var o,c,u,d,m=e.cloneNode(!0),y=qt(e);if(!M.noCloneChecked&&(e.nodeType===1||e.nodeType===11)&&!s.isXMLDoc(e))for(d=Oe(m),u=Oe(e),o=0,c=u.length;o<c;o++)bo(u[o],d[o]);if(r)if(i)for(u=u||Oe(e),d=d||Oe(m),o=0,c=u.length;o<c;o++)ni(u[o],d[o]);else ni(e,m);return d=Oe(m,"script"),d.length>0&&nn(d,!y&&Oe(e,"script")),m},cleanData:function(e){for(var r,i,o,c=s.event.special,u=0;(i=e[u])!==void 0;u++)if(or(i)){if(r=i[B.expando]){if(r.events)for(o in r.events)c[o]?s.event.remove(i,o):s.removeEvent(i,o,r.handle);i[B.expando]=void 0}i[Ee.expando]&&(i[Ee.expando]=void 0)}}}),s.fn.extend({detach:function(e){return ii(this,e,!0)},remove:function(e){return ii(this,e)},text:function(e){return ot(this,function(r){return r===void 0?s.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=r)})},null,e,arguments.length)},append:function(){return Gt(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var r=ri(this,e);r.appendChild(e)}})},prepend:function(){return Gt(this,arguments,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var r=ri(this,e);r.insertBefore(e,r.firstChild)}})},before:function(){return Gt(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Gt(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,r=0;(e=this[r])!=null;r++)e.nodeType===1&&(s.cleanData(Oe(e,!1)),e.textContent="");return this},clone:function(e,r){return e=e??!1,r=r??e,this.map(function(){return s.clone(this,e,r)})},html:function(e){return ot(this,function(r){var i=this[0]||{},o=0,c=this.length;if(r===void 0&&i.nodeType===1)return i.innerHTML;if(typeof r=="string"&&!ho.test(r)&&!ze[(Kn.exec(r)||["",""])[1].toLowerCase()]){r=s.htmlPrefilter(r);try{for(;o<c;o++)i=this[o]||{},i.nodeType===1&&(s.cleanData(Oe(i,!1)),i.innerHTML=r);i=0}catch{}}i&&this.empty().append(r)},null,e,arguments.length)},replaceWith:function(){var e=[];return Gt(this,arguments,function(r){var i=this.parentNode;s.inArray(this,e)<0&&(s.cleanData(Oe(this)),i&&i.replaceChild(r,this))},e)}}),s.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,r){s.fn[e]=function(i){for(var o,c=[],u=s(i),d=u.length-1,m=0;m<=d;m++)o=m===d?this:this.clone(!0),s(u[m])[r](o),S.apply(c,o.get());return this.pushStack(c)}});var sn=new RegExp("^("+Xn+")(?!px)[a-z%]+$","i"),an=/^--/,Lr=function(e){var r=e.ownerDocument.defaultView;return(!r||!r.opener)&&(r=t),r.getComputedStyle(e)},oi=function(e,r,i){var o,c,u={};for(c in r)u[c]=e.style[c],e.style[c]=r[c];o=i.call(e);for(c in r)e.style[c]=u[c];return o},vo=new RegExp(st.join("|"),"i");(function(){function e(){if(v){y.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",v.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",$t.appendChild(y).appendChild(v);var $=t.getComputedStyle(v);i=$.top!=="1%",m=r($.marginLeft)===12,v.style.right="60%",u=r($.right)===36,o=r($.width)===36,v.style.position="absolute",c=r(v.offsetWidth/3)===12,$t.removeChild(y),v=null}}function r($){return Math.round(parseFloat($))}var i,o,c,u,d,m,y=j.createElement("div"),v=j.createElement("div");v.style&&(v.style.backgroundClip="content-box",v.cloneNode(!0).style.backgroundClip="",M.clearCloneStyle=v.style.backgroundClip==="content-box",s.extend(M,{boxSizingReliable:function(){return e(),o},pixelBoxStyles:function(){return e(),u},pixelPosition:function(){return e(),i},reliableMarginLeft:function(){return e(),m},scrollboxSize:function(){return e(),c},reliableTrDimensions:function(){var $,P,w,_;return d==null&&($=j.createElement("table"),P=j.createElement("tr"),w=j.createElement("div"),$.style.cssText="position:absolute;left:-11111px;border-collapse:separate",P.style.cssText="box-sizing:content-box;border:1px solid",P.style.height="1px",w.style.height="9px",w.style.display="block",$t.appendChild($).appendChild(P).appendChild(w),_=t.getComputedStyle(P),d=parseInt(_.height,10)+parseInt(_.borderTopWidth,10)+parseInt(_.borderBottomWidth,10)===P.offsetHeight,$t.removeChild($)),d}}))})();function ur(e,r,i){var o,c,u,d,m=an.test(r),y=e.style;return i=i||Lr(e),i&&(d=i.getPropertyValue(r)||i[r],m&&d&&(d=d.replace(Ae,"$1")||void 0),d===""&&!qt(e)&&(d=s.style(e,r)),!M.pixelBoxStyles()&&sn.test(d)&&vo.test(r)&&(o=y.width,c=y.minWidth,u=y.maxWidth,y.minWidth=y.maxWidth=y.width=d,d=i.width,y.width=o,y.minWidth=c,y.maxWidth=u)),d!==void 0?d+"":d}function si(e,r){return{get:function(){if(e()){delete this.get;return}return(this.get=r).apply(this,arguments)}}}var ai=["Webkit","Moz","ms"],ci=j.createElement("div").style,ui={};function xo(e){for(var r=e[0].toUpperCase()+e.slice(1),i=ai.length;i--;)if(e=ai[i]+r,e in ci)return e}function cn(e){var r=s.cssProps[e]||ui[e];return r||(e in ci?e:ui[e]=xo(e)||e)}var wo=/^(none|table(?!-c[ea]).+)/,Co={position:"absolute",visibility:"hidden",display:"block"},li={letterSpacing:"0",fontWeight:"400"};function fi(e,r,i){var o=ar.exec(r);return o?Math.max(0,o[2]-(i||0))+(o[3]||"px"):r}function un(e,r,i,o,c,u){var d=r==="width"?1:0,m=0,y=0,v=0;if(i===(o?"border":"content"))return 0;for(;d<4;d+=2)i==="margin"&&(v+=s.css(e,i+st[d],!0,c)),o?(i==="content"&&(y-=s.css(e,"padding"+st[d],!0,c)),i!=="margin"&&(y-=s.css(e,"border"+st[d]+"Width",!0,c))):(y+=s.css(e,"padding"+st[d],!0,c),i!=="padding"?y+=s.css(e,"border"+st[d]+"Width",!0,c):m+=s.css(e,"border"+st[d]+"Width",!0,c));return!o&&u>=0&&(y+=Math.max(0,Math.ceil(e["offset"+r[0].toUpperCase()+r.slice(1)]-u-y-m-.5))||0),y+v}function di(e,r,i){var o=Lr(e),c=!M.boxSizingReliable()||i,u=c&&s.css(e,"boxSizing",!1,o)==="border-box",d=u,m=ur(e,r,o),y="offset"+r[0].toUpperCase()+r.slice(1);if(sn.test(m)){if(!i)return m;m="auto"}return(!M.boxSizingReliable()&&u||!M.reliableTrDimensions()&&Q(e,"tr")||m==="auto"||!parseFloat(m)&&s.css(e,"display",!1,o)==="inline")&&e.getClientRects().length&&(u=s.css(e,"boxSizing",!1,o)==="border-box",d=y in e,d&&(m=e[y])),m=parseFloat(m)||0,m+un(e,r,i||(u?"border":"content"),d,o,m)+"px"}s.extend({cssHooks:{opacity:{get:function(e,r){if(r){var i=ur(e,"opacity");return i===""?"1":i}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(e,r,i,o){if(!(!e||e.nodeType===3||e.nodeType===8||!e.style)){var c,u,d,m=Qe(r),y=an.test(r),v=e.style;if(y||(r=cn(m)),d=s.cssHooks[r]||s.cssHooks[m],i!==void 0){if(u=typeof i,u==="string"&&(c=ar.exec(i))&&c[1]&&(i=Jn(e,r,c),u="number"),i==null||i!==i)return;u==="number"&&!y&&(i+=c&&c[3]||(s.cssNumber[m]?"":"px")),!M.clearCloneStyle&&i===""&&r.indexOf("background")===0&&(v[r]="inherit"),(!d||!("set"in d)||(i=d.set(e,i,o))!==void 0)&&(y?v.setProperty(r,i):v[r]=i)}else return d&&"get"in d&&(c=d.get(e,!1,o))!==void 0?c:v[r]}},css:function(e,r,i,o){var c,u,d,m=Qe(r),y=an.test(r);return y||(r=cn(m)),d=s.cssHooks[r]||s.cssHooks[m],d&&"get"in d&&(c=d.get(e,!0,i)),c===void 0&&(c=ur(e,r,o)),c==="normal"&&r in li&&(c=li[r]),i===""||i?(u=parseFloat(c),i===!0||isFinite(u)?u||0:c):c}}),s.each(["height","width"],function(e,r){s.cssHooks[r]={get:function(i,o,c){if(o)return wo.test(s.css(i,"display"))&&(!i.getClientRects().length||!i.getBoundingClientRect().width)?oi(i,Co,function(){return di(i,r,c)}):di(i,r,c)},set:function(i,o,c){var u,d=Lr(i),m=!M.scrollboxSize()&&d.position==="absolute",y=m||c,v=y&&s.css(i,"boxSizing",!1,d)==="border-box",$=c?un(i,r,c,v,d):0;return v&&m&&($-=Math.ceil(i["offset"+r[0].toUpperCase()+r.slice(1)]-parseFloat(d[r])-un(i,r,"border",!1,d)-.5)),$&&(u=ar.exec(o))&&(u[3]||"px")!=="px"&&(i.style[r]=o,o=s.css(i,r)),fi(i,o,$)}}}),s.cssHooks.marginLeft=si(M.reliableMarginLeft,function(e,r){if(r)return(parseFloat(ur(e,"marginLeft"))||e.getBoundingClientRect().left-oi(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),s.each({margin:"",padding:"",border:"Width"},function(e,r){s.cssHooks[e+r]={expand:function(i){for(var o=0,c={},u=typeof i=="string"?i.split(" "):[i];o<4;o++)c[e+st[o]+r]=u[o]||u[o-2]||u[0];return c}},e!=="margin"&&(s.cssHooks[e+r].set=fi)}),s.fn.extend({css:function(e,r){return ot(this,function(i,o,c){var u,d,m={},y=0;if(Array.isArray(o)){for(u=Lr(i),d=o.length;y<d;y++)m[o[y]]=s.css(i,o[y],!1,u);return m}return c!==void 0?s.style(i,o,c):s.css(i,o)},e,r,arguments.length>1)}});function Ne(e,r,i,o,c){return new Ne.prototype.init(e,r,i,o,c)}s.Tween=Ne,Ne.prototype={constructor:Ne,init:function(e,r,i,o,c,u){this.elem=e,this.prop=i,this.easing=c||s.easing._default,this.options=r,this.start=this.now=this.cur(),this.end=o,this.unit=u||(s.cssNumber[i]?"":"px")},cur:function(){var e=Ne.propHooks[this.prop];return e&&e.get?e.get(this):Ne.propHooks._default.get(this)},run:function(e){var r,i=Ne.propHooks[this.prop];return this.options.duration?this.pos=r=s.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=r=e,this.now=(this.end-this.start)*r+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),i&&i.set?i.set(this):Ne.propHooks._default.set(this),this}},Ne.prototype.init.prototype=Ne.prototype,Ne.propHooks={_default:{get:function(e){var r;return e.elem.nodeType!==1||e.elem[e.prop]!=null&&e.elem.style[e.prop]==null?e.elem[e.prop]:(r=s.css(e.elem,e.prop,""),!r||r==="auto"?0:r)},set:function(e){s.fx.step[e.prop]?s.fx.step[e.prop](e):e.elem.nodeType===1&&(s.cssHooks[e.prop]||e.elem.style[cn(e.prop)]!=null)?s.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ne.propHooks.scrollTop=Ne.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},s.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},s.fx=Ne.prototype.init,s.fx.step={};var Yt,Fr,$o=/^(?:toggle|show|hide)$/,ko=/queueHooks$/;function ln(){Fr&&(j.hidden===!1&&t.requestAnimationFrame?t.requestAnimationFrame(ln):t.setTimeout(ln,s.fx.interval),s.fx.tick())}function hi(){return t.setTimeout(function(){Yt=void 0}),Yt=Date.now()}function Ir(e,r){var i,o=0,c={height:e};for(r=r?1:0;o<4;o+=2-r)i=st[o],c["margin"+i]=c["padding"+i]=e;return r&&(c.opacity=c.width=e),c}function pi(e,r,i){for(var o,c=(Ve.tweeners[r]||[]).concat(Ve.tweeners["*"]),u=0,d=c.length;u<d;u++)if(o=c[u].call(i,r,e))return o}function To(e,r,i){var o,c,u,d,m,y,v,$,P="width"in r||"height"in r,w=this,_={},G=e.style,se=e.nodeType&&Or(e),K=B.get(e,"fxshow");i.queue||(d=s._queueHooks(e,"fx"),d.unqueued==null&&(d.unqueued=0,m=d.empty.fire,d.empty.fire=function(){d.unqueued||m()}),d.unqueued++,w.always(function(){w.always(function(){d.unqueued--,s.queue(e,"fx").length||d.empty.fire()})}));for(o in r)if(c=r[o],$o.test(c)){if(delete r[o],u=u||c==="toggle",c===(se?"hide":"show"))if(c==="show"&&K&&K[o]!==void 0)se=!0;else continue;_[o]=K&&K[o]||s.style(e,o)}if(y=!s.isEmptyObject(r),!(!y&&s.isEmptyObject(_))){P&&e.nodeType===1&&(i.overflow=[G.overflow,G.overflowX,G.overflowY],v=K&&K.display,v==null&&(v=B.get(e,"display")),$=s.css(e,"display"),$==="none"&&(v?$=v:(Ut([e],!0),v=e.style.display||v,$=s.css(e,"display"),Ut([e]))),($==="inline"||$==="inline-block"&&v!=null)&&s.css(e,"float")==="none"&&(y||(w.done(function(){G.display=v}),v==null&&($=G.display,v=$==="none"?"":$)),G.display="inline-block")),i.overflow&&(G.overflow="hidden",w.always(function(){G.overflow=i.overflow[0],G.overflowX=i.overflow[1],G.overflowY=i.overflow[2]})),y=!1;for(o in _)y||(K?"hidden"in K&&(se=K.hidden):K=B.access(e,"fxshow",{display:v}),u&&(K.hidden=!se),se&&Ut([e],!0),w.done(function(){se||Ut([e]),B.remove(e,"fxshow");for(o in _)s.style(e,o,_[o])})),y=pi(se?K[o]:0,o,w),o in K||(K[o]=y.start,se&&(y.end=y.start,y.start=0))}}function Ao(e,r){var i,o,c,u,d;for(i in e)if(o=Qe(i),c=r[o],u=e[i],Array.isArray(u)&&(c=u[1],u=e[i]=u[0]),i!==o&&(e[o]=u,delete e[i]),d=s.cssHooks[o],d&&"expand"in d){u=d.expand(u),delete e[o];for(i in u)i in e||(e[i]=u[i],r[i]=c)}else r[o]=c}function Ve(e,r,i){var o,c,u=0,d=Ve.prefilters.length,m=s.Deferred().always(function(){delete y.elem}),y=function(){if(c)return!1;for(var P=Yt||hi(),w=Math.max(0,v.startTime+v.duration-P),_=w/v.duration||0,G=1-_,se=0,K=v.tweens.length;se<K;se++)v.tweens[se].run(G);return m.notifyWith(e,[v,G,w]),G<1&&K?w:(K||m.notifyWith(e,[v,1,0]),m.resolveWith(e,[v]),!1)},v=m.promise({elem:e,props:s.extend({},r),opts:s.extend(!0,{specialEasing:{},easing:s.easing._default},i),originalProperties:r,originalOptions:i,startTime:Yt||hi(),duration:i.duration,tweens:[],createTween:function(P,w){var _=s.Tween(e,v.opts,P,w,v.opts.specialEasing[P]||v.opts.easing);return v.tweens.push(_),_},stop:function(P){var w=0,_=P?v.tweens.length:0;if(c)return this;for(c=!0;w<_;w++)v.tweens[w].run(1);return P?(m.notifyWith(e,[v,1,0]),m.resolveWith(e,[v,P])):m.rejectWith(e,[v,P]),this}}),$=v.props;for(Ao($,v.opts.specialEasing);u<d;u++)if(o=Ve.prefilters[u].call(v,e,$,v.opts),o)return N(o.stop)&&(s._queueHooks(v.elem,v.opts.queue).stop=o.stop.bind(o)),o;return s.map($,pi,v),N(v.opts.start)&&v.opts.start.call(e,v),v.progress(v.opts.progress).done(v.opts.done,v.opts.complete).fail(v.opts.fail).always(v.opts.always),s.fx.timer(s.extend(y,{elem:e,anim:v,queue:v.opts.queue})),v}s.Animation=s.extend(Ve,{tweeners:{"*":[function(e,r){var i=this.createTween(e,r);return Jn(i.elem,e,ar.exec(r),i),i}]},tweener:function(e,r){N(e)?(r=e,e=["*"]):e=e.match(je);for(var i,o=0,c=e.length;o<c;o++)i=e[o],Ve.tweeners[i]=Ve.tweeners[i]||[],Ve.tweeners[i].unshift(r)},prefilters:[To],prefilter:function(e,r){r?Ve.prefilters.unshift(e):Ve.prefilters.push(e)}}),s.speed=function(e,r,i){var o=e&&typeof e=="object"?s.extend({},e):{complete:i||!i&&r||N(e)&&e,duration:e,easing:i&&r||r&&!N(r)&&r};return s.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in s.fx.speeds?o.duration=s.fx.speeds[o.duration]:o.duration=s.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){N(o.old)&&o.old.call(this),o.queue&&s.dequeue(this,o.queue)},o},s.fn.extend({fadeTo:function(e,r,i,o){return this.filter(Or).css("opacity",0).show().end().animate({opacity:r},e,i,o)},animate:function(e,r,i,o){var c=s.isEmptyObject(e),u=s.speed(r,i,o),d=function(){var m=Ve(this,s.extend({},e),u);(c||B.get(this,"finish"))&&m.stop(!0)};return d.finish=d,c||u.queue===!1?this.each(d):this.queue(u.queue,d)},stop:function(e,r,i){var o=function(c){var u=c.stop;delete c.stop,u(i)};return typeof e!="string"&&(i=r,r=e,e=void 0),r&&this.queue(e||"fx",[]),this.each(function(){var c=!0,u=e!=null&&e+"queueHooks",d=s.timers,m=B.get(this);if(u)m[u]&&m[u].stop&&o(m[u]);else for(u in m)m[u]&&m[u].stop&&ko.test(u)&&o(m[u]);for(u=d.length;u--;)d[u].elem===this&&(e==null||d[u].queue===e)&&(d[u].anim.stop(i),c=!1,d.splice(u,1));(c||!i)&&s.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var r,i=B.get(this),o=i[e+"queue"],c=i[e+"queueHooks"],u=s.timers,d=o?o.length:0;for(i.finish=!0,s.queue(this,e,[]),c&&c.stop&&c.stop.call(this,!0),r=u.length;r--;)u[r].elem===this&&u[r].queue===e&&(u[r].anim.stop(!0),u.splice(r,1));for(r=0;r<d;r++)o[r]&&o[r].finish&&o[r].finish.call(this);delete i.finish})}}),s.each(["toggle","show","hide"],function(e,r){var i=s.fn[r];s.fn[r]=function(o,c,u){return o==null||typeof o=="boolean"?i.apply(this,arguments):this.animate(Ir(r,!0),o,c,u)}}),s.each({slideDown:Ir("show"),slideUp:Ir("hide"),slideToggle:Ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){s.fn[e]=function(i,o,c){return this.animate(r,i,o,c)}}),s.timers=[],s.fx.tick=function(){var e,r=0,i=s.timers;for(Yt=Date.now();r<i.length;r++)e=i[r],!e()&&i[r]===e&&i.splice(r--,1);i.length||s.fx.stop(),Yt=void 0},s.fx.timer=function(e){s.timers.push(e),s.fx.start()},s.fx.interval=13,s.fx.start=function(){Fr||(Fr=!0,ln())},s.fx.stop=function(){Fr=null},s.fx.speeds={slow:600,fast:200,_default:400},s.fn.delay=function(e,r){return e=s.fx&&s.fx.speeds[e]||e,r=r||"fx",this.queue(r,function(i,o){var c=t.setTimeout(i,e);o.stop=function(){t.clearTimeout(c)}})},function(){var e=j.createElement("input"),r=j.createElement("select"),i=r.appendChild(j.createElement("option"));e.type="checkbox",M.checkOn=e.value!=="",M.optSelected=i.selected,e=j.createElement("input"),e.value="t",e.type="radio",M.radioValue=e.value==="t"}();var gi,lr=s.expr.attrHandle;s.fn.extend({attr:function(e,r){return ot(this,s.attr,e,r,arguments.length>1)},removeAttr:function(e){return this.each(function(){s.removeAttr(this,e)})}}),s.extend({attr:function(e,r,i){var o,c,u=e.nodeType;if(!(u===3||u===8||u===2)){if(typeof e.getAttribute>"u")return s.prop(e,r,i);if((u!==1||!s.isXMLDoc(e))&&(c=s.attrHooks[r.toLowerCase()]||(s.expr.match.bool.test(r)?gi:void 0)),i!==void 0){if(i===null){s.removeAttr(e,r);return}return c&&"set"in c&&(o=c.set(e,i,r))!==void 0?o:(e.setAttribute(r,i+""),i)}return c&&"get"in c&&(o=c.get(e,r))!==null?o:(o=s.find.attr(e,r),o??void 0)}},attrHooks:{type:{set:function(e,r){if(!M.radioValue&&r==="radio"&&Q(e,"input")){var i=e.value;return e.setAttribute("type",r),i&&(e.value=i),r}}}},removeAttr:function(e,r){var i,o=0,c=r&&r.match(je);if(c&&e.nodeType===1)for(;i=c[o++];)e.removeAttribute(i)}}),gi={set:function(e,r,i){return r===!1?s.removeAttr(e,i):e.setAttribute(i,i),i}},s.each(s.expr.match.bool.source.match(/\w+/g),function(e,r){var i=lr[r]||s.find.attr;lr[r]=function(o,c,u){var d,m,y=c.toLowerCase();return u||(m=lr[y],lr[y]=d,d=i(o,c,u)!=null?y:null,lr[y]=m),d}});var Po=/^(?:input|select|textarea|button)$/i,So=/^(?:a|area)$/i;s.fn.extend({prop:function(e,r){return ot(this,s.prop,e,r,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[s.propFix[e]||e]})}}),s.extend({prop:function(e,r,i){var o,c,u=e.nodeType;if(!(u===3||u===8||u===2))return(u!==1||!s.isXMLDoc(e))&&(r=s.propFix[r]||r,c=s.propHooks[r]),i!==void 0?c&&"set"in c&&(o=c.set(e,i,r))!==void 0?o:e[r]=i:c&&"get"in c&&(o=c.get(e,r))!==null?o:e[r]},propHooks:{tabIndex:{get:function(e){var r=s.find.attr(e,"tabindex");return r?parseInt(r,10):Po.test(e.nodeName)||So.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),M.optSelected||(s.propHooks.selected={get:function(e){var r=e.parentNode;return r&&r.parentNode&&r.parentNode.selectedIndex,null},set:function(e){var r=e.parentNode;r&&(r.selectedIndex,r.parentNode&&r.parentNode.selectedIndex)}}),s.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){s.propFix[this.toLowerCase()]=this});function kt(e){var r=e.match(je)||[];return r.join(" ")}function Tt(e){return e.getAttribute&&e.getAttribute("class")||""}function fn(e){return Array.isArray(e)?e:typeof e=="string"?e.match(je)||[]:[]}s.fn.extend({addClass:function(e){var r,i,o,c,u,d;return N(e)?this.each(function(m){s(this).addClass(e.call(this,m,Tt(this)))}):(r=fn(e),r.length?this.each(function(){if(o=Tt(this),i=this.nodeType===1&&" "+kt(o)+" ",i){for(u=0;u<r.length;u++)c=r[u],i.indexOf(" "+c+" ")<0&&(i+=c+" ");d=kt(i),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(e){var r,i,o,c,u,d;return N(e)?this.each(function(m){s(this).removeClass(e.call(this,m,Tt(this)))}):arguments.length?(r=fn(e),r.length?this.each(function(){if(o=Tt(this),i=this.nodeType===1&&" "+kt(o)+" ",i){for(u=0;u<r.length;u++)for(c=r[u];i.indexOf(" "+c+" ")>-1;)i=i.replace(" "+c+" "," ");d=kt(i),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(e,r){var i,o,c,u,d=typeof e,m=d==="string"||Array.isArray(e);return N(e)?this.each(function(y){s(this).toggleClass(e.call(this,y,Tt(this),r),r)}):typeof r=="boolean"&&m?r?this.addClass(e):this.removeClass(e):(i=fn(e),this.each(function(){if(m)for(u=s(this),c=0;c<i.length;c++)o=i[c],u.hasClass(o)?u.removeClass(o):u.addClass(o);else(e===void 0||d==="boolean")&&(o=Tt(this),o&&B.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||e===!1?"":B.get(this,"__className__")||""))}))},hasClass:function(e){var r,i,o=0;for(r=" "+e+" ";i=this[o++];)if(i.nodeType===1&&(" "+kt(Tt(i))+" ").indexOf(r)>-1)return!0;return!1}});var _o=/\r/g;s.fn.extend({val:function(e){var r,i,o,c=this[0];return arguments.length?(o=N(e),this.each(function(u){var d;this.nodeType===1&&(o?d=e.call(this,u,s(this).val()):d=e,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=s.map(d,function(m){return m==null?"":m+""})),r=s.valHooks[this.type]||s.valHooks[this.nodeName.toLowerCase()],(!r||!("set"in r)||r.set(this,d,"value")===void 0)&&(this.value=d))})):c?(r=s.valHooks[c.type]||s.valHooks[c.nodeName.toLowerCase()],r&&"get"in r&&(i=r.get(c,"value"))!==void 0?i:(i=c.value,typeof i=="string"?i.replace(_o,""):i??"")):void 0}}),s.extend({valHooks:{option:{get:function(e){var r=s.find.attr(e,"value");return r??kt(s.text(e))}},select:{get:function(e){var r,i,o,c=e.options,u=e.selectedIndex,d=e.type==="select-one",m=d?null:[],y=d?u+1:c.length;for(u<0?o=y:o=d?u:0;o<y;o++)if(i=c[o],(i.selected||o===u)&&!i.disabled&&(!i.parentNode.disabled||!Q(i.parentNode,"optgroup"))){if(r=s(i).val(),d)return r;m.push(r)}return m},set:function(e,r){for(var i,o,c=e.options,u=s.makeArray(r),d=c.length;d--;)o=c[d],(o.selected=s.inArray(s.valHooks.option.get(o),u)>-1)&&(i=!0);return i||(e.selectedIndex=-1),u}}}}),s.each(["radio","checkbox"],function(){s.valHooks[this]={set:function(e,r){if(Array.isArray(r))return e.checked=s.inArray(s(e).val(),r)>-1}},M.checkOn||(s.valHooks[this].get=function(e){return e.getAttribute("value")===null?"on":e.value})});var fr=t.location,yi={guid:Date.now()},dn=/\?/;s.parseXML=function(e){var r,i;if(!e||typeof e!="string")return null;try{r=new t.DOMParser().parseFromString(e,"text/xml")}catch{}return i=r&&r.getElementsByTagName("parsererror")[0],(!r||i)&&s.error("Invalid XML: "+(i?s.map(i.childNodes,function(o){return o.textContent}).join(`
`):e)),r};var mi=/^(?:focusinfocus|focusoutblur)$/,bi=function(e){e.stopPropagation()};s.extend(s.event,{trigger:function(e,r,i,o){var c,u,d,m,y,v,$,P,w=[i||j],_=L.call(e,"type")?e.type:e,G=L.call(e,"namespace")?e.namespace.split("."):[];if(u=P=d=i=i||j,!(i.nodeType===3||i.nodeType===8)&&!mi.test(_+s.event.triggered)&&(_.indexOf(".")>-1&&(G=_.split("."),_=G.shift(),G.sort()),y=_.indexOf(":")<0&&"on"+_,e=e[s.expando]?e:new s.Event(_,typeof e=="object"&&e),e.isTrigger=o?2:3,e.namespace=G.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+G.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=i),r=r==null?[e]:s.makeArray(r,[e]),$=s.event.special[_]||{},!(!o&&$.trigger&&$.trigger.apply(i,r)===!1))){if(!o&&!$.noBubble&&!oe(i)){for(m=$.delegateType||_,mi.test(m+_)||(u=u.parentNode);u;u=u.parentNode)w.push(u),d=u;d===(i.ownerDocument||j)&&w.push(d.defaultView||d.parentWindow||t)}for(c=0;(u=w[c++])&&!e.isPropagationStopped();)P=u,e.type=c>1?m:$.bindType||_,v=(B.get(u,"events")||Object.create(null))[e.type]&&B.get(u,"handle"),v&&v.apply(u,r),v=y&&u[y],v&&v.apply&&or(u)&&(e.result=v.apply(u,r),e.result===!1&&e.preventDefault());return e.type=_,!o&&!e.isDefaultPrevented()&&(!$._default||$._default.apply(w.pop(),r)===!1)&&or(i)&&y&&N(i[_])&&!oe(i)&&(d=i[y],d&&(i[y]=null),s.event.triggered=_,e.isPropagationStopped()&&P.addEventListener(_,bi),i[_](),e.isPropagationStopped()&&P.removeEventListener(_,bi),s.event.triggered=void 0,d&&(i[y]=d)),e.result}},simulate:function(e,r,i){var o=s.extend(new s.Event,i,{type:e,isSimulated:!0});s.event.trigger(o,null,r)}}),s.fn.extend({trigger:function(e,r){return this.each(function(){s.event.trigger(e,r,this)})},triggerHandler:function(e,r){var i=this[0];if(i)return s.event.trigger(e,r,i,!0)}});var Do=/\[\]$/,vi=/\r?\n/g,Mo=/^(?:submit|button|image|reset|file)$/i,Eo=/^(?:input|select|textarea|keygen)/i;function hn(e,r,i,o){var c;if(Array.isArray(r))s.each(r,function(u,d){i||Do.test(e)?o(e,d):hn(e+"["+(typeof d=="object"&&d!=null?u:"")+"]",d,i,o)});else if(!i&&ge(r)==="object")for(c in r)hn(e+"["+c+"]",r[c],i,o);else o(e,r)}s.param=function(e,r){var i,o=[],c=function(u,d){var m=N(d)?d():d;o[o.length]=encodeURIComponent(u)+"="+encodeURIComponent(m??"")};if(e==null)return"";if(Array.isArray(e)||e.jquery&&!s.isPlainObject(e))s.each(e,function(){c(this.name,this.value)});else for(i in e)hn(i,e[i],r,c);return o.join("&")},s.fn.extend({serialize:function(){return s.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=s.prop(this,"elements");return e?s.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!s(this).is(":disabled")&&Eo.test(this.nodeName)&&!Mo.test(e)&&(this.checked||!cr.test(e))}).map(function(e,r){var i=s(this).val();return i==null?null:Array.isArray(i)?s.map(i,function(o){return{name:r.name,value:o.replace(vi,`\r
`)}}):{name:r.name,value:i.replace(vi,`\r
`)}}).get()}});var Oo=/%20/g,No=/#.*$/,Lo=/([?&])_=[^&]*/,Fo=/^(.*?):[ \t]*([^\r\n]*)$/mg,Io=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ro=/^(?:GET|HEAD)$/,jo=/^\/\//,xi={},pn={},wi="*/".concat("*"),gn=j.createElement("a");gn.href=fr.href;function Ci(e){return function(r,i){typeof r!="string"&&(i=r,r="*");var o,c=0,u=r.toLowerCase().match(je)||[];if(N(i))for(;o=u[c++];)o[0]==="+"?(o=o.slice(1)||"*",(e[o]=e[o]||[]).unshift(i)):(e[o]=e[o]||[]).push(i)}}function $i(e,r,i,o){var c={},u=e===pn;function d(m){var y;return c[m]=!0,s.each(e[m]||[],function(v,$){var P=$(r,i,o);if(typeof P=="string"&&!u&&!c[P])return r.dataTypes.unshift(P),d(P),!1;if(u)return!(y=P)}),y}return d(r.dataTypes[0])||!c["*"]&&d("*")}function yn(e,r){var i,o,c=s.ajaxSettings.flatOptions||{};for(i in r)r[i]!==void 0&&((c[i]?e:o||(o={}))[i]=r[i]);return o&&s.extend(!0,e,o),e}function zo(e,r,i){for(var o,c,u,d,m=e.contents,y=e.dataTypes;y[0]==="*";)y.shift(),o===void 0&&(o=e.mimeType||r.getResponseHeader("Content-Type"));if(o){for(c in m)if(m[c]&&m[c].test(o)){y.unshift(c);break}}if(y[0]in i)u=y[0];else{for(c in i){if(!y[0]||e.converters[c+" "+y[0]]){u=c;break}d||(d=c)}u=u||d}if(u)return u!==y[0]&&y.unshift(u),i[u]}function Bo(e,r,i,o){var c,u,d,m,y,v={},$=e.dataTypes.slice();if($[1])for(d in e.converters)v[d.toLowerCase()]=e.converters[d];for(u=$.shift();u;)if(e.responseFields[u]&&(i[e.responseFields[u]]=r),!y&&o&&e.dataFilter&&(r=e.dataFilter(r,e.dataType)),y=u,u=$.shift(),u){if(u==="*")u=y;else if(y!=="*"&&y!==u){if(d=v[y+" "+u]||v["* "+u],!d){for(c in v)if(m=c.split(" "),m[1]===u&&(d=v[y+" "+m[0]]||v["* "+m[0]],d)){d===!0?d=v[c]:v[c]!==!0&&(u=m[0],$.unshift(m[1]));break}}if(d!==!0)if(d&&e.throws)r=d(r);else try{r=d(r)}catch(P){return{state:"parsererror",error:d?P:"No conversion from "+y+" to "+u}}}}return{state:"success",data:r}}s.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fr.href,type:"GET",isLocal:Io.test(fr.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":s.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,r){return r?yn(yn(e,s.ajaxSettings),r):yn(s.ajaxSettings,e)},ajaxPrefilter:Ci(xi),ajaxTransport:Ci(pn),ajax:function(e,r){typeof e=="object"&&(r=e,e=void 0),r=r||{};var i,o,c,u,d,m,y,v,$,P,w=s.ajaxSetup({},r),_=w.context||w,G=w.context&&(_.nodeType||_.jquery)?s(_):s.event,se=s.Deferred(),K=s.Callbacks("once memory"),Pe=w.statusCode||{},we={},Ke={},Ze="canceled",ie={readyState:0,getResponseHeader:function(ae){var ye;if(y){if(!u)for(u={};ye=Fo.exec(c);)u[ye[1].toLowerCase()+" "]=(u[ye[1].toLowerCase()+" "]||[]).concat(ye[2]);ye=u[ae.toLowerCase()+" "]}return ye==null?null:ye.join(", ")},getAllResponseHeaders:function(){return y?c:null},setRequestHeader:function(ae,ye){return y==null&&(ae=Ke[ae.toLowerCase()]=Ke[ae.toLowerCase()]||ae,we[ae]=ye),this},overrideMimeType:function(ae){return y==null&&(w.mimeType=ae),this},statusCode:function(ae){var ye;if(ae)if(y)ie.always(ae[ie.status]);else for(ye in ae)Pe[ye]=[Pe[ye],ae[ye]];return this},abort:function(ae){var ye=ae||Ze;return i&&i.abort(ye),At(0,ye),this}};if(se.promise(ie),w.url=((e||w.url||fr.href)+"").replace(jo,fr.protocol+"//"),w.type=r.method||r.type||w.method||w.type,w.dataTypes=(w.dataType||"*").toLowerCase().match(je)||[""],w.crossDomain==null){m=j.createElement("a");try{m.href=w.url,m.href=m.href,w.crossDomain=gn.protocol+"//"+gn.host!=m.protocol+"//"+m.host}catch{w.crossDomain=!0}}if(w.data&&w.processData&&typeof w.data!="string"&&(w.data=s.param(w.data,w.traditional)),$i(xi,w,r,ie),y)return ie;v=s.event&&w.global,v&&s.active++===0&&s.event.trigger("ajaxStart"),w.type=w.type.toUpperCase(),w.hasContent=!Ro.test(w.type),o=w.url.replace(No,""),w.hasContent?w.data&&w.processData&&(w.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(w.data=w.data.replace(Oo,"+")):(P=w.url.slice(o.length),w.data&&(w.processData||typeof w.data=="string")&&(o+=(dn.test(o)?"&":"?")+w.data,delete w.data),w.cache===!1&&(o=o.replace(Lo,"$1"),P=(dn.test(o)?"&":"?")+"_="+yi.guid+++P),w.url=o+P),w.ifModified&&(s.lastModified[o]&&ie.setRequestHeader("If-Modified-Since",s.lastModified[o]),s.etag[o]&&ie.setRequestHeader("If-None-Match",s.etag[o])),(w.data&&w.hasContent&&w.contentType!==!1||r.contentType)&&ie.setRequestHeader("Content-Type",w.contentType),ie.setRequestHeader("Accept",w.dataTypes[0]&&w.accepts[w.dataTypes[0]]?w.accepts[w.dataTypes[0]]+(w.dataTypes[0]!=="*"?", "+wi+"; q=0.01":""):w.accepts["*"]);for($ in w.headers)ie.setRequestHeader($,w.headers[$]);if(w.beforeSend&&(w.beforeSend.call(_,ie,w)===!1||y))return ie.abort();if(Ze="abort",K.add(w.complete),ie.done(w.success),ie.fail(w.error),i=$i(pn,w,r,ie),!i)At(-1,"No Transport");else{if(ie.readyState=1,v&&G.trigger("ajaxSend",[ie,w]),y)return ie;w.async&&w.timeout>0&&(d=t.setTimeout(function(){ie.abort("timeout")},w.timeout));try{y=!1,i.send(we,At)}catch(ae){if(y)throw ae;At(-1,ae)}}function At(ae,ye,hr,bn){var et,pr,tt,pt,gt,Be=ye;y||(y=!0,d&&t.clearTimeout(d),i=void 0,c=bn||"",ie.readyState=ae>0?4:0,et=ae>=200&&ae<300||ae===304,hr&&(pt=zo(w,ie,hr)),!et&&s.inArray("script",w.dataTypes)>-1&&s.inArray("json",w.dataTypes)<0&&(w.converters["text script"]=function(){}),pt=Bo(w,pt,ie,et),et?(w.ifModified&&(gt=ie.getResponseHeader("Last-Modified"),gt&&(s.lastModified[o]=gt),gt=ie.getResponseHeader("etag"),gt&&(s.etag[o]=gt)),ae===204||w.type==="HEAD"?Be="nocontent":ae===304?Be="notmodified":(Be=pt.state,pr=pt.data,tt=pt.error,et=!tt)):(tt=Be,(ae||!Be)&&(Be="error",ae<0&&(ae=0))),ie.status=ae,ie.statusText=(ye||Be)+"",et?se.resolveWith(_,[pr,Be,ie]):se.rejectWith(_,[ie,Be,tt]),ie.statusCode(Pe),Pe=void 0,v&&G.trigger(et?"ajaxSuccess":"ajaxError",[ie,w,et?pr:tt]),K.fireWith(_,[ie,Be]),v&&(G.trigger("ajaxComplete",[ie,w]),--s.active||s.event.trigger("ajaxStop")))}return ie},getJSON:function(e,r,i){return s.get(e,r,i,"json")},getScript:function(e,r){return s.get(e,void 0,r,"script")}}),s.each(["get","post"],function(e,r){s[r]=function(i,o,c,u){return N(o)&&(u=u||c,c=o,o=void 0),s.ajax(s.extend({url:i,type:r,dataType:u,data:o,success:c},s.isPlainObject(i)&&i))}}),s.ajaxPrefilter(function(e){var r;for(r in e.headers)r.toLowerCase()==="content-type"&&(e.contentType=e.headers[r]||"")}),s._evalUrl=function(e,r,i){return s.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){s.globalEval(o,r,i)}})},s.fn.extend({wrapAll:function(e){var r;return this[0]&&(N(e)&&(e=e.call(this[0])),r=s(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&r.insertBefore(this[0]),r.map(function(){for(var i=this;i.firstElementChild;)i=i.firstElementChild;return i}).append(this)),this},wrapInner:function(e){return N(e)?this.each(function(r){s(this).wrapInner(e.call(this,r))}):this.each(function(){var r=s(this),i=r.contents();i.length?i.wrapAll(e):r.append(e)})},wrap:function(e){var r=N(e);return this.each(function(i){s(this).wrapAll(r?e.call(this,i):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){s(this).replaceWith(this.childNodes)}),this}}),s.expr.pseudos.hidden=function(e){return!s.expr.pseudos.visible(e)},s.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},s.ajaxSettings.xhr=function(){try{return new t.XMLHttpRequest}catch{}};var Ho={0:200,1223:204},dr=s.ajaxSettings.xhr();M.cors=!!dr&&"withCredentials"in dr,M.ajax=dr=!!dr,s.ajaxTransport(function(e){var r,i;if(M.cors||dr&&!e.crossDomain)return{send:function(o,c){var u,d=e.xhr();if(d.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(u in e.xhrFields)d[u]=e.xhrFields[u];e.mimeType&&d.overrideMimeType&&d.overrideMimeType(e.mimeType),!e.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(u in o)d.setRequestHeader(u,o[u]);r=function(m){return function(){r&&(r=i=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,m==="abort"?d.abort():m==="error"?typeof d.status!="number"?c(0,"error"):c(d.status,d.statusText):c(Ho[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=r(),i=d.onerror=d.ontimeout=r("error"),d.onabort!==void 0?d.onabort=i:d.onreadystatechange=function(){d.readyState===4&&t.setTimeout(function(){r&&i()})},r=r("abort");try{d.send(e.hasContent&&e.data||null)}catch(m){if(r)throw m}},abort:function(){r&&r()}}}),s.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),s.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return s.globalEval(e),e}}}),s.ajaxPrefilter("script",function(e){e.cache===void 0&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),s.ajaxTransport("script",function(e){if(e.crossDomain||e.scriptAttrs){var r,i;return{send:function(o,c){r=s("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",i=function(u){r.remove(),i=null,u&&c(u.type==="error"?404:200,u.type)}),j.head.appendChild(r[0])},abort:function(){i&&i()}}}});var ki=[],mn=/(=)\?(?=&|$)|\?\?/;s.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=ki.pop()||s.expando+"_"+yi.guid++;return this[e]=!0,e}}),s.ajaxPrefilter("json jsonp",function(e,r,i){var o,c,u,d=e.jsonp!==!1&&(mn.test(e.url)?"url":typeof e.data=="string"&&(e.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&mn.test(e.data)&&"data");if(d||e.dataTypes[0]==="jsonp")return o=e.jsonpCallback=N(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,d?e[d]=e[d].replace(mn,"$1"+o):e.jsonp!==!1&&(e.url+=(dn.test(e.url)?"&":"?")+e.jsonp+"="+o),e.converters["script json"]=function(){return u||s.error(o+" was not called"),u[0]},e.dataTypes[0]="json",c=t[o],t[o]=function(){u=arguments},i.always(function(){c===void 0?s(t).removeProp(o):t[o]=c,e[o]&&(e.jsonpCallback=r.jsonpCallback,ki.push(o)),u&&N(c)&&c(u[0]),u=c=void 0}),"script"}),M.createHTMLDocument=function(){var e=j.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",e.childNodes.length===2}(),s.parseHTML=function(e,r,i){if(typeof e!="string")return[];typeof r=="boolean"&&(i=r,r=!1);var o,c,u;return r||(M.createHTMLDocument?(r=j.implementation.createHTMLDocument(""),o=r.createElement("base"),o.href=j.location.href,r.head.appendChild(o)):r=j),c=Bt.exec(e),u=!i&&[],c?[r.createElement(c[1])]:(c=ei([e],r,u),u&&u.length&&s(u).remove(),s.merge([],c.childNodes))},s.fn.load=function(e,r,i){var o,c,u,d=this,m=e.indexOf(" ");return m>-1&&(o=kt(e.slice(m)),e=e.slice(0,m)),N(r)?(i=r,r=void 0):r&&typeof r=="object"&&(c="POST"),d.length>0&&s.ajax({url:e,type:c||"GET",dataType:"html",data:r}).done(function(y){u=arguments,d.html(o?s("<div>").append(s.parseHTML(y)).find(o):y)}).always(i&&function(y,v){d.each(function(){i.apply(this,u||[y.responseText,v,y])})}),this},s.expr.pseudos.animated=function(e){return s.grep(s.timers,function(r){return e===r.elem}).length},s.offset={setOffset:function(e,r,i){var o,c,u,d,m,y,v,$=s.css(e,"position"),P=s(e),w={};$==="static"&&(e.style.position="relative"),m=P.offset(),u=s.css(e,"top"),y=s.css(e,"left"),v=($==="absolute"||$==="fixed")&&(u+y).indexOf("auto")>-1,v?(o=P.position(),d=o.top,c=o.left):(d=parseFloat(u)||0,c=parseFloat(y)||0),N(r)&&(r=r.call(e,i,s.extend({},m))),r.top!=null&&(w.top=r.top-m.top+d),r.left!=null&&(w.left=r.left-m.left+c),"using"in r?r.using.call(e,w):P.css(w)}},s.fn.extend({offset:function(e){if(arguments.length)return e===void 0?this:this.each(function(c){s.offset.setOffset(this,e,c)});var r,i,o=this[0];if(o)return o.getClientRects().length?(r=o.getBoundingClientRect(),i=o.ownerDocument.defaultView,{top:r.top+i.pageYOffset,left:r.left+i.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,r,i,o=this[0],c={top:0,left:0};if(s.css(o,"position")==="fixed")r=o.getBoundingClientRect();else{for(r=this.offset(),i=o.ownerDocument,e=o.offsetParent||i.documentElement;e&&(e===i.body||e===i.documentElement)&&s.css(e,"position")==="static";)e=e.parentNode;e&&e!==o&&e.nodeType===1&&(c=s(e).offset(),c.top+=s.css(e,"borderTopWidth",!0),c.left+=s.css(e,"borderLeftWidth",!0))}return{top:r.top-c.top-s.css(o,"marginTop",!0),left:r.left-c.left-s.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&s.css(e,"position")==="static";)e=e.offsetParent;return e||$t})}}),s.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,r){var i=r==="pageYOffset";s.fn[e]=function(o){return ot(this,function(c,u,d){var m;if(oe(c)?m=c:c.nodeType===9&&(m=c.defaultView),d===void 0)return m?m[r]:c[u];m?m.scrollTo(i?m.pageXOffset:d,i?d:m.pageYOffset):c[u]=d},e,o,arguments.length)}}),s.each(["top","left"],function(e,r){s.cssHooks[r]=si(M.pixelPosition,function(i,o){if(o)return o=ur(i,r),sn.test(o)?s(i).position()[r]+"px":o})}),s.each({Height:"height",Width:"width"},function(e,r){s.each({padding:"inner"+e,content:r,"":"outer"+e},function(i,o){s.fn[o]=function(c,u){var d=arguments.length&&(i||typeof c!="boolean"),m=i||(c===!0||u===!0?"margin":"border");return ot(this,function(y,v,$){var P;return oe(y)?o.indexOf("outer")===0?y["inner"+e]:y.document.documentElement["client"+e]:y.nodeType===9?(P=y.documentElement,Math.max(y.body["scroll"+e],P["scroll"+e],y.body["offset"+e],P["offset"+e],P["client"+e])):$===void 0?s.css(y,v,m):s.style(y,v,$,m)},r,d?c:void 0,d)}})}),s.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,r){s.fn[r]=function(i){return this.on(r,i)}}),s.fn.extend({bind:function(e,r,i){return this.on(e,null,r,i)},unbind:function(e,r){return this.off(e,null,r)},delegate:function(e,r,i,o){return this.on(r,e,i,o)},undelegate:function(e,r,i){return arguments.length===1?this.off(e,"**"):this.off(r,e||"**",i)},hover:function(e,r){return this.on("mouseenter",e).on("mouseleave",r||e)}}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(i,o){return arguments.length>0?this.on(r,null,i,o):this.trigger(r)}});var qo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;s.proxy=function(e,r){var i,o,c;if(typeof r=="string"&&(i=e[r],r=e,e=i),!!N(e))return o=h.call(arguments,2),c=function(){return e.apply(r||this,o.concat(h.call(arguments)))},c.guid=e.guid=e.guid||s.guid++,c},s.holdReady=function(e){e?s.readyWait++:s.ready(!0)},s.isArray=Array.isArray,s.parseJSON=JSON.parse,s.nodeName=Q,s.isFunction=N,s.isWindow=oe,s.camelCase=Qe,s.type=ge,s.now=Date.now,s.isNumeric=function(e){var r=s.type(e);return(r==="number"||r==="string")&&!isNaN(e-parseFloat(e))},s.trim=function(e){return e==null?"":(e+"").replace(qo,"$1")};var Uo=t.jQuery,Vo=t.$;return s.noConflict=function(e){return t.$===s&&(t.$=Vo),e&&t.jQuery===s&&(t.jQuery=Uo),s},typeof a>"u"&&(t.jQuery=t.$=s),s})}(qr)),qr.exports}var Ji=Ss();const zi=As(Ji);var _s=Object.getOwnPropertyDescriptor,Qi=(n,t,a,l)=>{for(var f=l>1?void 0:l?_s(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=g(f)||f);return f};let Wr=class extends xe{constructor(){super(...arguments),this.handleSlotChange=n=>{(n?n.target:this.renderRoot.querySelector("slot")).assignedElements({flatten:!0}).forEach(l=>{l instanceof HTMLElement&&(l.addEventListener("mousedown",()=>{l.shadowRoot.querySelector("button div").style.paddingInline="1rem"}),l.addEventListener("mouseup",()=>{setTimeout(()=>{l.shadowRoot.querySelector("button div").style.paddingInline="0"},200)}))})}}firstUpdated(){this.handleSlotChange()}render(){return ue`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `}};Wr.styles=[Ie`
            .container {
                display: flex;
                align-items: center;
                gap: 8px;
            }
        `];Wr=Qi([me("mc-button-group")],Wr);let En=class extends Wr{constructor(){super(),this.onslotchange=()=>{(async()=>{await this.updateComplete,this.resetRadius();for(let n=0;n<this.children.length;n++){const t=this.children[n],a=t.buttonElement;t.onUnToggled=()=>{this.resetRadius()},t.onToggled=()=>{this.resetRadius(),Ji.map(this.children,l=>{l.selected=!1}),t.selected=!0,a.style.borderRadius=t.borderRadius.full[t.size]}}})(),this.handleSlotChange()}}resetRadius(){for(let n=0;n<this.children.length;n++){const t=this.children[n],a=t.buttonElement;a.style.borderRadius=t.borderRadius.square[t.size],n===0&&(a.style.borderTopLeftRadius=t.borderRadius.full[t.size],a.style.borderBottomLeftRadius=t.borderRadius.full[t.size]),n===this.children.length-1&&(a.style.borderTopRightRadius=t.borderRadius.full[t.size],a.style.borderBottomRightRadius=t.borderRadius.full[t.size])}}firstUpdated(){this.onslotchange()}};En.styles=[Ie`
            .container {
                display: flex;
                align-items: center;
                gap: 2px;
            }
        `];En=Qi([me("mc-connected-button-group")],En);var Ds=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,Ki=(n,t,a,l)=>{for(var f=l>1?void 0:l?Ms(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&Ds(t,a,f),f};let Gr=class extends xe{constructor(){super(...arguments),this.variant="elevated"}render(){return ue`
            <div class="container" variant=${this.variant}>
                <slot></slot>
            </div>
        `}};Gr.styles=Ie`
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
    `;Ki([W({type:String})],Gr.prototype,"variant",2);Gr=Ki([me("mc-card")],Gr);var Es=Object.getOwnPropertyDescriptor,Os=(n,t,a,l)=>{for(var f=l>1?void 0:l?Es(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=g(f)||f);return f};let Bi=class extends xe{render(){return ue`
            <style>
                .container {
                    width: 100%;
                    height: 1px;
                    background: rgba(var(--md-sys-color-outline-variant));
                }
            </style>
            <div class="container" part="container"></div>
        `}};Bi=Os([me("mc-divider")],Bi);const Ns=Ie`
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

`,Ls=Ie`
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
 */const Fs=n=>n.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Is={CHILD:2},Rs=n=>(...t)=>({_$litDirective$:n,values:t});class js{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,a,l){this._$Ct=t,this._$AM=a,this._$Ci=l}_$AS(t,a){return this.update(t,a)}update(t,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vr=(n,t)=>{var l;const a=n._$AN;if(a===void 0)return!1;for(const f of a)(l=f._$AO)==null||l.call(f,t,!1),vr(f,t);return!0},Yr=n=>{let t,a;do{if((t=n._$AM)===void 0)break;a=t._$AN,a.delete(n),n=t}while((a==null?void 0:a.size)===0)},Zi=n=>{for(let t;t=n._$AM;n=t){let a=t._$AN;if(a===void 0)t._$AN=a=new Set;else if(a.has(n))break;a.add(n),Hs(t)}};function zs(n){this._$AN!==void 0?(Yr(this),this._$AM=n,Zi(this)):this._$AM=n}function Bs(n,t=!1,a=0){const l=this._$AH,f=this._$AN;if(f!==void 0&&f.size!==0)if(t)if(Array.isArray(l))for(let h=a;h<l.length;h++)vr(l[h],!1),Yr(l[h]);else l!=null&&(vr(l,!1),Yr(l));else vr(this,n)}const Hs=n=>{n.type==Is.CHILD&&(n._$AP??(n._$AP=Bs),n._$AQ??(n._$AQ=zs))};class qs extends js{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,a,l){super._$AT(t,a,l),Zi(this),this.isConnected=t._$AU}_$AO(t,a=!0){var l,f;t!==this.isConnected&&(this.isConnected=t,t?(l=this.reconnected)==null||l.call(this):(f=this.disconnected)==null||f.call(this)),a&&(vr(this,t),Yr(this))}setValue(t){if(Fs(this._$Ct))this._$Ct._$AI(t,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=t,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=()=>new Vs;class Vs{}const _n=new WeakMap,Ws=Rs(class extends qs{render(n){return ve}update(n,[t]){var l;const a=t!==this.G;return a&&this.G!==void 0&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.G=t,this.ht=(l=n.options)==null?void 0:l.host,this.rt(this.ct=n.element)),ve}rt(n){if(this.isConnected||(n=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let a=_n.get(t);a===void 0&&(a=new WeakMap,_n.set(t,a)),a.get(this.G)!==void 0&&this.G.call(this.ht,void 0),a.set(this.G,n),n!==void 0&&this.G.call(this.ht,n)}else this.G.value=n}get lt(){var n,t;return typeof this.G=="function"?(n=_n.get(this.ht??globalThis))==null?void 0:n.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var Gs=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,Ye=(n,t,a,l)=>{for(var f=l>1?void 0:l?Ys(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&Gs(t,a,f),f};let Ot=class extends xe{constructor(){super(...arguments),this.size="medium",this.color="pc",this.disabled=!1,this.iconSize={small:24,medium:28,large:36},this.height={small:56,medium:80,large:96},this.borderRadius={small:16,medium:20,large:28},this.backgroundColor={p:"primary",s:"secondary",t:"tertiary",pc:"primary-container",sc:"secondary-container",tc:"tertiary-container"}}get buttonElement(){var n;return(n=this.shadowRoot)==null?void 0:n.querySelector("button")}render(){return ue`
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
        `}};Ot.styles=Ns;Ye([W()],Ot.prototype,"size",2);Ye([W()],Ot.prototype,"color",2);Ye([W({type:Boolean})],Ot.prototype,"disabled",2);Ot=Ye([me("mc-fab")],Ot);let On=class extends Ot{constructor(){super(),this.icon="",this.fontSize={small:16,medium:22,large:24},this.lineHeight={small:24,medium:28,large:32},this.padding={small:[16,8],medium:[26,12],large:[28,16]}}render(){return ue`
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
        `}};Ye([W()],On.prototype,"icon",2);On=Ye([me("mc-extended-fab")],On);let Nt=class extends xe{constructor(){super(...arguments),this.icon="",this.color="p",this.size="medium",this.open=!1,this.height={small:56,medium:80,large:96},this.closeButtonRef=Us(),this.onslotchange=()=>{(async()=>{await this.updateComplete;for(let n=0;n<this.children.length;n++){const t=this.children[n],a=t.buttonElement;t.color=`${this.color}c`,a.style.borderRadius=`${t.height[t.size]/2}px`,t.style.width="80%",t.onclick=()=>{this.clickHandler()}}})()}}firstUpdated(){this.onslotchange()}clickHandler(){this.open=!this.open;for(let n=this.children.length-1;n>=0;n--){const t=this.children[n],a=(this.children.length-n)*20+20;setTimeout(()=>{this.open?t.style.width="100%":t.style.width="60%"},a)}this.open?this.closeButtonRef.value.buttonElement.style.borderRadius="28px":this.closeButtonRef.value.buttonElement.style.borderRadius=null}render(){return ue`
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
                        @mouseup=${this.clickHandler} ${Ws(this.closeButtonRef)}>
                    ${this.open?"close":this.icon}
                </mc-fab>
            </div>
        `}};Nt.styles=Ls;Ye([W()],Nt.prototype,"icon",2);Ye([W()],Nt.prototype,"color",2);Ye([W()],Nt.prototype,"size",2);Ye([W()],Nt.prototype,"open",2);Nt=Ye([me("mc-fab-menu")],Nt);var Xs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Hn=(n,t,a,l)=>{for(var f=l>1?void 0:l?Js(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&Xs(t,a,f),f};let kr=class extends xe{constructor(){super(...arguments),this.size=24}render(){return ue`
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
        `}};kr.styles=Ie`
        .icon {
            font-family: "Material Symbols Outlined";
            -webkit-user-select: none;
            user-select: none;
        }
    `;Hn([W()],kr.prototype,"name",2);Hn([W({type:Number})],kr.prototype,"size",2);kr=Hn([me("mc-icon")],kr);const Qs=Ie`
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
`;var Ks=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,wt=(n,t,a,l)=>{for(var f=l>1?void 0:l?Zs(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&Ks(t,a,f),f};let it=class extends Ge{constructor(){super(...arguments),this.disabled=!1,this.toggle=!1,this.selected=!1,this.shape="default",this.variant="filled",this.size="small",this.rippleColor={filled:"on-primary",elevated:"primary",tonal:"on-secondary-container",outlined:"on-surface-variant",standard:"on-background"},this.iconSize={extraSmall:20,small:24,medium:24,large:32,extraLarge:40}}get buttonElement(){var n;return(n=this.shadowRoot)==null?void 0:n.querySelector("button")}render(){return ue`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @mouseup=${this.clickHandler}>
                <div>
                    <mc-icon size=${this.iconSize[this.size]}>
                        <slot></slot>
                    </mc-icon>
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};it.styles=Qs;wt([W({type:Boolean})],it.prototype,"disabled",2);wt([W({type:Boolean})],it.prototype,"toggle",2);wt([W({type:Boolean})],it.prototype,"selected",2);wt([W()],it.prototype,"shape",2);wt([W()],it.prototype,"variant",2);wt([W()],it.prototype,"size",2);it=wt([me("mc-icon-button")],it);let Hi=class extends it{constructor(){super(),this.toggle=!0}render(){return ue`
            <button part="button" type="button" class="button" variant=${this.variant} size=${this.size}
                    ?toggle=${this.toggle}
                    ?selected=${this.selected} shape=${this.shape}
                    ?disabled=${this.disabled} @mouseup=${this.clickHandler}>
                <div>
                    ${this.selected?ue`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot class="icon" name="selected"></slot>
                        </mc-icon>`:ue`
                        <mc-icon size=${this.iconSize[this.size]}>
                            <slot></slot>
                        </mc-icon>
                    `}
                </div>
                <mc-ripple color=${this.rippleColor[this.variant]} ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};Hi=wt([me("mc-toggle-icon-button")],Hi);const ea=Ie`
    .container{
        display: flex;
        flex-direction: column;
        padding: 8px;
        padding-inline: 0;
    }
`,ta=Ie`
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
`;var ra=Object.defineProperty,na=Object.getOwnPropertyDescriptor,Ct=(n,t,a,l)=>{for(var f=l>1?void 0:l?na(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&ra(t,a,f),f};let Nn=class extends xe{render(){return ue`
            <div class="container" part="container">
                <slot></slot>
            </div>
        `}};Nn.styles=ea;Nn=Ct([me("mc-list")],Nn);let ft=class extends xe{constructor(){super(...arguments),this.text="",this.description="",this.headType="icon",this.selected=!1,this.disabled=!1,this.lines=0}render(){return ue`
            <div class="container" part="container" ?selected=${this.selected} ?disabled=${this.disabled}
                 lines=${{0:"a",1:"b",2:"c"}[this.lines]} headtype=${this.headType}>
                <slot class="head" name="head"></slot>
                <div class="body">
                    <span class="text">${this.text}</span>
                    <span class="description">${this.description}</span>
                </div>
                <slot class="bottom" name="bottom"></slot>
            </div>
        `}};ft.styles=ta;Ct([W({type:String})],ft.prototype,"text",2);Ct([W({type:String})],ft.prototype,"description",2);Ct([W({type:String})],ft.prototype,"headType",2);Ct([W({type:Boolean})],ft.prototype,"selected",2);Ct([W({type:Boolean})],ft.prototype,"disabled",2);Ct([W({type:Number})],ft.prototype,"lines",2);ft=Ct([me("mc-list-item")],ft);const ia=Ie`
    :host {
        display: block;
        width: fit-content;
    }

    .container {
        width: 100%;
        position: relative;
    }

    .menu {
        display: flex;
        flex-direction: column;
        padding: 8px 0;
        border-radius: 4px;
        min-width: 7rem;
        max-width: 17.5rem;
        box-sizing: border-box;
        z-index: 99;
        transition: 200ms;
        width: 100%;
        background: rgb(var(--md-sys-color-surface-container));
        box-shadow: var(--md-sys-elevation-level2);
    }

    [position=top-left] {
        transform-origin: 0 0;
    }

    [position=top-right] {
        transform-origin: 100% 0;
    }

    [position=bottom-left] {
        transform-origin: 0 100%;
    }

    [position=bottom-right] {
        transform-origin: 100% 100%;
    }

    [closed] {
        opacity: .8;
    }

    ::slotted(mc-divider) {
        margin: 7.5px 0;
    }
`,oa=Ie`
    .container {
        position: relative;
        background: transparent;
        border: none;
        outline: none;
        box-sizing: border-box;
        text-align: left;
        display: flex;
        justify-items: center;
        align-items: center;
        color: rgb(var(--md-sys-color-on-surface));
        gap: 12px;
        width: 100%;
        font-size: 14px;
        padding-inline: 12px;
        transition: 200ms;
        height: 48px;
        overflow: hidden;

        &:hover {
            background: color-mix(in srgb, rgb(var(--md-sys-color-surface-container)), rgb(var(--md-sys-color-on-surface)) 8%);
        }

        &[selected] {
            background: rgb(var(--md-sys-color-secondary-container));
            color: rgb(var(--md-sys-color-on-secondary-container));
        }
        

        &[disabled] {
            background: transparent;
            color: rgba(var(--md-sys-color-on-surface), .38);
        }

        & > span {
            margin: auto;
            margin-left: 0;
            user-select: none;
        }

        .head {
            display: flex;
            margin-right: 8px;
        }

        .bottom {
            display: flex;
        }
    }
`;var sa=Object.defineProperty,aa=Object.getOwnPropertyDescriptor,qe=(n,t,a,l)=>{for(var f=l>1?void 0:l?aa(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&sa(t,a,f),f};let Lt=class extends xe{constructor(){super(...arguments),this.selects="none",this.value="",this.values=[],this.dense=!1,this.onslotchange=()=>{this.querySelectorAll("mc-menu-item").forEach(t=>{t.onclick=()=>{this.selects==="single"?this.value===t.value?this.value="":this.value=t.value:this.selects==="multiple"&&(this.values.includes(t.value)?this.values=this.values.filter(a=>a!==t.value):this.values=[...this.values,t.value]),this.setSelected()}})}}setSelected(){this.querySelectorAll("mc-menu-item").forEach(t=>{this.selects==="single"?t.selected=t.value===this.value:this.selects==="multiple"&&(t.selected=this.values.includes(t.value))})}updated(n){super.updated(n),(n.has("value")||n.has("values"))&&this.setSelected()}firstUpdated(){this.setSelected(),this.onslotchange()}render(){return ue`
            <div class="container">
                <div class="menu">
                    <slot></slot>
                </div>
            </div>
        `}};Lt.styles=ia;qe([W()],Lt.prototype,"selects",2);qe([W({reflect:!0})],Lt.prototype,"value",2);qe([W({converter:{fromAttribute:n=>n.split(" "),toAttribute:n=>n.join(" ")},reflect:!0})],Lt.prototype,"values",2);qe([W({type:Boolean})],Lt.prototype,"dense",2);Lt=qe([me("mc-menu")],Lt);let tr=class extends xe{constructor(){super(...arguments),this.value="",this.disabled=!1,this.selected=!1}render(){return ue`
            <button class="container" ?selected=${this.selected} ?disabled=${this.disabled} @click=${()=>{}}>
                ${this.selected?ue`
                    <mc-icon class="head" name="check"></mc-icon>`:ue`
                    <slot class="head" name="head"></slot>
                `}
                <span><slot></slot></span>
                <slot class="bottom" name="bottom"></slot>
                <mc-ripple color="on-surface" ?disabled=${this.disabled}></mc-ripple>
            </button>
        `}};tr.styles=oa;qe([W()],tr.prototype,"value",2);qe([W({type:Boolean})],tr.prototype,"disabled",2);qe([W({type:Boolean,reflect:!0})],tr.prototype,"selected",2);tr=qe([me("mc-menu-item")],tr);let Xr=class extends xe{constructor(){super(...arguments),this.open=!1,this.trigger="click"}render(){return ue`
            <div class="dropdown">
                <slot name="trigger"></slot>
                <slot></slot>
            </div>
        `}};qe([W({reflect:!0})],Xr.prototype,"open",2);qe([W()],Xr.prototype,"trigger",2);Xr=qe([me("mc-dropdown")],Xr);var ca=Object.defineProperty,ua=Object.getOwnPropertyDescriptor,Zr=(n,t,a,l)=>{for(var f=l>1?void 0:l?ua(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&ca(t,a,f),f};let rr=class extends xe{constructor(){super(...arguments),this.color="primary",this.opacity=.2,this.disabled=!1,this.currentRipple=null,this._onMouseDown=n=>{var g;if(this.disabled)return;const t=this.getBoundingClientRect(),a=Math.max(t.width,t.height),l=n.clientX-t.left-a/2,f=n.clientY-t.top-a/2,h=document.createElement("span");h.className="ripple",h.style.width=h.style.height=`${a}px`,h.style.left=`${l}px`,h.style.top=`${f}px`,h.style.backgroundColor=`rgb(var(--md-sys-color-${this.color}))`,h.style.boxShadow=`0 0 12px 8px rgb(var(--md-sys-color-${this.color}))`,h.style.opacity=`${this.opacity}`,(g=this.shadowRoot)==null||g.appendChild(h),requestAnimationFrame(()=>{h.classList.add("active")}),this.currentRipple=h},this._onMouseUp=()=>{if(!this.currentRipple)return;const n=this.currentRipple;n.style.opacity="0",n.addEventListener("transitionend",()=>{n.remove(),this.currentRipple===n&&(this.currentRipple=null)},{once:!0})}}render(){return ue``}connectedCallback(){super.connectedCallback(),this.addEventListener("mousedown",this._onMouseDown),this.addEventListener("mouseup",this._onMouseUp),this.addEventListener("mouseleave",this._onMouseUp)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("mousedown",this._onMouseDown),this.removeEventListener("mouseup",this._onMouseUp)}};rr.styles=Ie`
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
    `;Zr([W()],rr.prototype,"color",2);Zr([W()],rr.prototype,"opacity",2);Zr([W({type:Boolean})],rr.prototype,"disabled",2);rr=Zr([me("mc-ripple")],rr);const la=Ie`
    .container {
        display: inline-flex;
        position: relative;
        border-radius: 16px;
        height: 32px;
        width: 52px;
        transition: 150ms;
        background: rgb(var(--md-sys-color-surface-container-highest));
        box-sizing: border-box;
        border: 2px solid rgb(var(--md-sys-color-outline));

        .input {
            display: none;
        }

        .thumb {
            transition: 150ms;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 8px;
            width: 16px;
            height: 16px;
            background: rgb(var(--md-sys-color-outline));
            color: rgb(var(--md-sys-color-surface-container-highest));
            left: 5px;

            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 0px;
        }
        
        &[mode="always"] {
            .thumb {
                border-radius: 12px;
                left: 2px;
                width: 24px;
                height: 24px;
            }
        }

        &:active .thumb {
            width: 28px;
            height: 28px;
            border-radius: 14px;
            left: 0px;
        }

        &:hover {
            .thumb {
                background: rgb(var(--md-sys-color-on-surface-variant));
            }
        }

        &[disabled] {
            touch-action: none;
            pointer-events: none;
            border-color: rgb(var(--md-sys-color-surface-container-highest));
            background: transparent;

            .thumb {
                color: rgba(var(--md-sys-color-surface-container-highest), .38);
                background: rgba(var(--md-sys-color-on-surface), .38);
            }
        }


        &[checked] {
            background: rgb(var(--md-sys-color-primary));
            border: 2px solid rgb(var(--md-sys-color-primary));

            .thumb {
                border-radius: 12px;
                left: 22px;
                width: 24px;
                height: 24px;
                background: rgb(var(--md-sys-color-on-primary));
                color: rgb(var(--md-sys-color-on-primary-container));
            }

            &:active .thumb {
                width: 28px;
                height: 28px;
                border-radius: 14px;
                left: 20px;
            }

            &:hover {
                .thumb {
                    background: rgb(var(--md-sys-color-primary-container));
                }
            }

            &[disabled] {
                border: transparent;
                background: rgb(var(--md-sys-color-on-surface), .12);

                .thumb {
                    color: rgba(var(--md-sys-color-on-surface), .38);
                    background: rgb(var(--md-sys-color-surface));
                }
            }
        }
    }
`;var fa=Object.defineProperty,da=Object.getOwnPropertyDescriptor,Pr=(n,t,a,l)=>{for(var f=l>1?void 0:l?da(t,a):t,h=n.length-1,g;h>=0;h--)(g=n[h])&&(f=(l?g(t,a,f):g(f))||f);return l&&f&&fa(t,a,f),f};let Ft=class extends xe{constructor(){super(...arguments),this.icon="check",this.mode="onChecked",this.disabled=!1,this.checked=!1}_handleClick(){this.disabled||(this.checked=!this.checked)}render(){return ue`
            <div class="container" ?disabled=${this.disabled} mode=${this.mode}
                 @keydown=${n=>{(n.key==="Enter"||n.key===" ")&&(this._handleClick(),n.preventDefault())}} ?checked=${this.checked} @click=${this._handleClick}>
                <div>
                    <mc-icon size="16" class="thumb" name=${this.mode==="always"||this.mode==="onChecked"&&this.checked?this.icon:""}></mc-icon>
                </div>
            </div>
        `}};Ft.styles=la;Pr([W({type:String})],Ft.prototype,"icon",2);Pr([W({type:String})],Ft.prototype,"mode",2);Pr([W({type:Boolean})],Ft.prototype,"disabled",2);Pr([W({type:Boolean,reflect:!0})],Ft.prototype,"checked",2);Ft=Pr([me("mc-switch")],Ft);/**
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
 */function Fe(n){return n<0?-1:n===0?0:1}function xr(n,t,a){return(1-a)*n+a*t}function ha(n,t,a){return a<n?n:a>t?t:a}function Jr(n,t,a){return a<n?n:a>t?t:a}function qn(n){return n=n%360,n<0&&(n=n+360),n}function pa(n,t){return qn(t-n)<=180?1:-1}function ga(n,t){return 180-Math.abs(Math.abs(n-t)-180)}function Ln(n,t){const a=n[0]*t[0][0]+n[1]*t[0][1]+n[2]*t[0][2],l=n[0]*t[1][0]+n[1]*t[1][1]+n[2]*t[1][2],f=n[0]*t[2][0]+n[1]*t[2][1]+n[2]*t[2][2];return[a,l,f]}/**
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
 */const ya=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],ma=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],ba=[95.047,100,108.883];function Un(n,t,a){return(255<<24|(n&255)<<16|(t&255)<<8|a&255)>>>0}function qi(n){const t=Mt(n[0]),a=Mt(n[1]),l=Mt(n[2]);return Un(t,a,l)}function va(n){return n>>16&255}function xa(n){return n>>8&255}function wa(n){return n&255}function Ca(n,t,a){const l=ma,f=l[0][0]*n+l[0][1]*t+l[0][2]*a,h=l[1][0]*n+l[1][1]*t+l[1][2]*a,g=l[2][0]*n+l[2][1]*t+l[2][2]*a,S=Mt(f),A=Mt(h),E=Mt(g);return Un(S,A,E)}function $a(n){const t=Kt(va(n)),a=Kt(xa(n)),l=Kt(wa(n));return Ln([t,a,l],ya)}function ka(n){const t=bt(n),a=Mt(t);return Un(a,a,a)}function Fn(n){const t=$a(n)[1];return 116*eo(t/100)-16}function bt(n){return 100*Aa((n+16)/116)}function In(n){return eo(n/100)*116-16}function Kt(n){const t=n/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function Mt(n){const t=n/100;let a=0;return t<=.0031308?a=t*12.92:a=1.055*Math.pow(t,1/2.4)-.055,ha(0,255,Math.round(a*255))}function Ta(){return ba}function eo(n){const t=.008856451679035631,a=24389/27;return n>t?Math.pow(n,1/3):(a*n+16)/116}function Aa(n){const t=.008856451679035631,a=24389/27,l=n*n*n;return l>t?l:(116*n-16)/a}/**
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
 */class nt{static make(t=Ta(),a=200/Math.PI*bt(50)/100,l=50,f=2,h=!1){const g=t,S=g[0]*.401288+g[1]*.650173+g[2]*-.051461,A=g[0]*-.250268+g[1]*1.204414+g[2]*.045854,E=g[0]*-.002079+g[1]*.048952+g[2]*.953127,O=.8+f/10,L=O>=.9?xr(.59,.69,(O-.9)*10):xr(.525,.59,(O-.8)*10);let H=h?1:O*(1-1/3.6*Math.exp((-a-42)/92));H=H>1?1:H<0?0:H;const J=O,M=[H*(100/S)+1-H,H*(100/A)+1-H,H*(100/E)+1-H],N=1/(5*a+1),oe=N*N*N*N,j=1-oe,fe=oe*a+.1*j*j*Math.cbrt(5*a),ne=bt(l)/t[1],ge=1.48+Math.sqrt(ne),ee=.725/Math.pow(ne,.2),be=ee,s=[Math.pow(fe*M[0]*S/100,.42),Math.pow(fe*M[1]*A/100,.42),Math.pow(fe*M[2]*E/100,.42)],de=[400*s[0]/(s[0]+27.13),400*s[1]/(s[1]+27.13),400*s[2]/(s[2]+27.13)],Q=(2*de[0]+de[1]+.05*de[2])*ee;return new nt(ne,Q,ee,be,L,J,M,fe,Math.pow(fe,.25),ge)}constructor(t,a,l,f,h,g,S,A,E,O){this.n=t,this.aw=a,this.nbb=l,this.ncb=f,this.c=h,this.nc=g,this.rgbD=S,this.fl=A,this.fLRoot=E,this.z=O}}nt.DEFAULT=nt.make();/**
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
 */class ke{constructor(t,a,l,f,h,g,S,A,E){this.hue=t,this.chroma=a,this.j=l,this.q=f,this.m=h,this.s=g,this.jstar=S,this.astar=A,this.bstar=E}distance(t){const a=this.jstar-t.jstar,l=this.astar-t.astar,f=this.bstar-t.bstar,h=Math.sqrt(a*a+l*l+f*f);return 1.41*Math.pow(h,.63)}static fromInt(t){return ke.fromIntInViewingConditions(t,nt.DEFAULT)}static fromIntInViewingConditions(t,a){const l=(t&16711680)>>16,f=(t&65280)>>8,h=t&255,g=Kt(l),S=Kt(f),A=Kt(h),E=.41233895*g+.35762064*S+.18051042*A,O=.2126*g+.7152*S+.0722*A,L=.01932141*g+.11916382*S+.95034478*A,H=.401288*E+.650173*O-.051461*L,J=-.250268*E+1.204414*O+.045854*L,M=-.002079*E+.048952*O+.953127*L,N=a.rgbD[0]*H,oe=a.rgbD[1]*J,j=a.rgbD[2]*M,fe=Math.pow(a.fl*Math.abs(N)/100,.42),ne=Math.pow(a.fl*Math.abs(oe)/100,.42),ge=Math.pow(a.fl*Math.abs(j)/100,.42),ee=Fe(N)*400*fe/(fe+27.13),be=Fe(oe)*400*ne/(ne+27.13),s=Fe(j)*400*ge/(ge+27.13),de=(11*ee+-12*be+s)/11,Q=(ee+be-2*s)/9,he=(20*ee+20*be+21*s)/20,Ue=(40*ee+20*be+s)/20,Z=Math.atan2(Q,de)*180/Math.PI,Ae=Z<0?Z+360:Z>=360?Z-360:Z,It=Ae*Math.PI/180,Rt=Ue*a.nbb,Ce=100*Math.pow(Rt/a.aw,a.c*a.z),dt=4/a.c*Math.sqrt(Ce/100)*(a.aw+4)*a.fLRoot,Je=Ae<20.14?Ae+360:Ae,jt=.25*(Math.cos(Je*Math.PI/180+2)+3.8),Bt=5e4/13*jt*a.nc*a.ncb*Math.sqrt(de*de+Q*Q)/(he+.305),ht=Math.pow(Bt,.9)*Math.pow(1.64-Math.pow(.29,a.n),.73),ir=ht*Math.sqrt(Ce/100),Sr=ir*a.fLRoot,en=50*Math.sqrt(ht*a.c/(a.aw+4)),tn=(1+100*.007)*Ce/(1+.007*Ce),_r=1/.0228*Math.log(1+.0228*Sr),Dr=_r*Math.cos(It),je=_r*Math.sin(It);return new ke(Ae,ir,Ce,dt,Sr,en,tn,Dr,je)}static fromJch(t,a,l){return ke.fromJchInViewingConditions(t,a,l,nt.DEFAULT)}static fromJchInViewingConditions(t,a,l,f){const h=4/f.c*Math.sqrt(t/100)*(f.aw+4)*f.fLRoot,g=a*f.fLRoot,S=a/Math.sqrt(t/100),A=50*Math.sqrt(S*f.c/(f.aw+4)),E=l*Math.PI/180,O=(1+100*.007)*t/(1+.007*t),L=1/.0228*Math.log(1+.0228*g),H=L*Math.cos(E),J=L*Math.sin(E);return new ke(l,a,t,h,g,A,O,H,J)}static fromUcs(t,a,l){return ke.fromUcsInViewingConditions(t,a,l,nt.DEFAULT)}static fromUcsInViewingConditions(t,a,l,f){const h=a,g=l,S=Math.sqrt(h*h+g*g),E=(Math.exp(S*.0228)-1)/.0228/f.fLRoot;let O=Math.atan2(g,h)*(180/Math.PI);O<0&&(O+=360);const L=t/(1-(t-100)*.007);return ke.fromJchInViewingConditions(L,E,O,f)}toInt(){return this.viewed(nt.DEFAULT)}viewed(t){const a=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),l=Math.pow(a/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),f=this.hue*Math.PI/180,h=.25*(Math.cos(f+2)+3.8),g=t.aw*Math.pow(this.j/100,1/t.c/t.z),S=h*(5e4/13)*t.nc*t.ncb,A=g/t.nbb,E=Math.sin(f),O=Math.cos(f),L=23*(A+.305)*l/(23*S+11*l*O+108*l*E),H=L*O,J=L*E,M=(460*A+451*H+288*J)/1403,N=(460*A-891*H-261*J)/1403,oe=(460*A-220*H-6300*J)/1403,j=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),fe=Fe(M)*(100/t.fl)*Math.pow(j,1/.42),ne=Math.max(0,27.13*Math.abs(N)/(400-Math.abs(N))),ge=Fe(N)*(100/t.fl)*Math.pow(ne,1/.42),ee=Math.max(0,27.13*Math.abs(oe)/(400-Math.abs(oe))),be=Fe(oe)*(100/t.fl)*Math.pow(ee,1/.42),s=fe/t.rgbD[0],de=ge/t.rgbD[1],Q=be/t.rgbD[2],he=1.86206786*s-1.01125463*de+.14918677*Q,Ue=.38752654*s+.62144744*de-.00897398*Q,Xe=-.0158415*s-.03412294*de+1.04996444*Q;return Ca(he,Ue,Xe)}static fromXyzInViewingConditions(t,a,l,f){const h=.401288*t+.650173*a-.051461*l,g=-.250268*t+1.204414*a+.045854*l,S=-.002079*t+.048952*a+.953127*l,A=f.rgbD[0]*h,E=f.rgbD[1]*g,O=f.rgbD[2]*S,L=Math.pow(f.fl*Math.abs(A)/100,.42),H=Math.pow(f.fl*Math.abs(E)/100,.42),J=Math.pow(f.fl*Math.abs(O)/100,.42),M=Fe(A)*400*L/(L+27.13),N=Fe(E)*400*H/(H+27.13),oe=Fe(O)*400*J/(J+27.13),j=(11*M+-12*N+oe)/11,fe=(M+N-2*oe)/9,ne=(20*M+20*N+21*oe)/20,ge=(40*M+20*N+oe)/20,be=Math.atan2(fe,j)*180/Math.PI,s=be<0?be+360:be>=360?be-360:be,de=s*Math.PI/180,Q=ge*f.nbb,he=100*Math.pow(Q/f.aw,f.c*f.z),Ue=4/f.c*Math.sqrt(he/100)*(f.aw+4)*f.fLRoot,Xe=s<20.14?s+360:s,Z=1/4*(Math.cos(Xe*Math.PI/180+2)+3.8),It=5e4/13*Z*f.nc*f.ncb*Math.sqrt(j*j+fe*fe)/(ne+.305),Rt=Math.pow(It,.9)*Math.pow(1.64-Math.pow(.29,f.n),.73),Ce=Rt*Math.sqrt(he/100),dt=Ce*f.fLRoot,Je=50*Math.sqrt(Rt*f.c/(f.aw+4)),jt=(1+100*.007)*he/(1+.007*he),zt=Math.log(1+.0228*dt)/.0228,Bt=zt*Math.cos(de),ht=zt*Math.sin(de);return new ke(s,Ce,he,Ue,dt,Je,jt,Bt,ht)}xyzInViewingConditions(t){const a=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),l=Math.pow(a/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),f=this.hue*Math.PI/180,h=.25*(Math.cos(f+2)+3.8),g=t.aw*Math.pow(this.j/100,1/t.c/t.z),S=h*(5e4/13)*t.nc*t.ncb,A=g/t.nbb,E=Math.sin(f),O=Math.cos(f),L=23*(A+.305)*l/(23*S+11*l*O+108*l*E),H=L*O,J=L*E,M=(460*A+451*H+288*J)/1403,N=(460*A-891*H-261*J)/1403,oe=(460*A-220*H-6300*J)/1403,j=Math.max(0,27.13*Math.abs(M)/(400-Math.abs(M))),fe=Fe(M)*(100/t.fl)*Math.pow(j,1/.42),ne=Math.max(0,27.13*Math.abs(N)/(400-Math.abs(N))),ge=Fe(N)*(100/t.fl)*Math.pow(ne,1/.42),ee=Math.max(0,27.13*Math.abs(oe)/(400-Math.abs(oe))),be=Fe(oe)*(100/t.fl)*Math.pow(ee,1/.42),s=fe/t.rgbD[0],de=ge/t.rgbD[1],Q=be/t.rgbD[2],he=1.86206786*s-1.01125463*de+.14918677*Q,Ue=.38752654*s+.62144744*de-.00897398*Q,Xe=-.0158415*s-.03412294*de+1.04996444*Q;return[he,Ue,Xe]}}/**
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
 */class U{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const a=t/100;let l=0;return a<=.0031308?l=a*12.92:l=1.055*Math.pow(a,1/2.4)-.055,l*255}static chromaticAdaptation(t){const a=Math.pow(Math.abs(t),.42);return Fe(t)*400*a/(a+27.13)}static hueOf(t){const a=Ln(t,U.SCALED_DISCOUNT_FROM_LINRGB),l=U.chromaticAdaptation(a[0]),f=U.chromaticAdaptation(a[1]),h=U.chromaticAdaptation(a[2]),g=(11*l+-12*f+h)/11,S=(l+f-2*h)/9;return Math.atan2(S,g)}static areInCyclicOrder(t,a,l){const f=U.sanitizeRadians(a-t),h=U.sanitizeRadians(l-t);return f<h}static intercept(t,a,l){return(a-t)/(l-t)}static lerpPoint(t,a,l){return[t[0]+(l[0]-t[0])*a,t[1]+(l[1]-t[1])*a,t[2]+(l[2]-t[2])*a]}static setCoordinate(t,a,l,f){const h=U.intercept(t[f],a,l[f]);return U.lerpPoint(t,h,l)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,a){const l=U.Y_FROM_LINRGB[0],f=U.Y_FROM_LINRGB[1],h=U.Y_FROM_LINRGB[2],g=a%4<=1?0:100,S=a%2===0?0:100;if(a<4){const A=g,E=S,O=(t-A*f-E*h)/l;return U.isBounded(O)?[O,A,E]:[-1,-1,-1]}else if(a<8){const A=g,E=S,O=(t-E*l-A*h)/f;return U.isBounded(O)?[E,O,A]:[-1,-1,-1]}else{const A=g,E=S,O=(t-A*l-E*f)/h;return U.isBounded(O)?[A,E,O]:[-1,-1,-1]}}static bisectToSegment(t,a){let l=[-1,-1,-1],f=l,h=0,g=0,S=!1,A=!0;for(let E=0;E<12;E++){const O=U.nthVertex(t,E);if(O[0]<0)continue;const L=U.hueOf(O);if(!S){l=O,f=O,h=L,g=L,S=!0;continue}(A||U.areInCyclicOrder(h,L,g))&&(A=!1,U.areInCyclicOrder(h,a,L)?(f=O,g=L):(l=O,h=L))}return[l,f]}static midpoint(t,a){return[(t[0]+a[0])/2,(t[1]+a[1])/2,(t[2]+a[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,a){const l=U.bisectToSegment(t,a);let f=l[0],h=U.hueOf(f),g=l[1];for(let S=0;S<3;S++)if(f[S]!==g[S]){let A=-1,E=255;f[S]<g[S]?(A=U.criticalPlaneBelow(U.trueDelinearized(f[S])),E=U.criticalPlaneAbove(U.trueDelinearized(g[S]))):(A=U.criticalPlaneAbove(U.trueDelinearized(f[S])),E=U.criticalPlaneBelow(U.trueDelinearized(g[S])));for(let O=0;O<8&&!(Math.abs(E-A)<=1);O++){const L=Math.floor((A+E)/2),H=U.CRITICAL_PLANES[L],J=U.setCoordinate(f,H,g,S),M=U.hueOf(J);U.areInCyclicOrder(h,a,M)?(g=J,E=L):(f=J,h=M,A=L)}}return U.midpoint(f,g)}static inverseChromaticAdaptation(t){const a=Math.abs(t),l=Math.max(0,27.13*a/(400-a));return Fe(t)*Math.pow(l,1/.42)}static findResultByJ(t,a,l){let f=Math.sqrt(l)*11;const h=nt.DEFAULT,g=1/Math.pow(1.64-Math.pow(.29,h.n),.73),A=.25*(Math.cos(t+2)+3.8)*(5e4/13)*h.nc*h.ncb,E=Math.sin(t),O=Math.cos(t);for(let L=0;L<5;L++){const H=f/100,J=a===0||f===0?0:a/Math.sqrt(H),M=Math.pow(J*g,1/.9),oe=h.aw*Math.pow(H,1/h.c/h.z)/h.nbb,j=23*(oe+.305)*M/(23*A+11*M*O+108*M*E),fe=j*O,ne=j*E,ge=(460*oe+451*fe+288*ne)/1403,ee=(460*oe-891*fe-261*ne)/1403,be=(460*oe-220*fe-6300*ne)/1403,s=U.inverseChromaticAdaptation(ge),de=U.inverseChromaticAdaptation(ee),Q=U.inverseChromaticAdaptation(be),he=Ln([s,de,Q],U.LINRGB_FROM_SCALED_DISCOUNT);if(he[0]<0||he[1]<0||he[2]<0)return 0;const Ue=U.Y_FROM_LINRGB[0],Xe=U.Y_FROM_LINRGB[1],Z=U.Y_FROM_LINRGB[2],Ae=Ue*he[0]+Xe*he[1]+Z*he[2];if(Ae<=0)return 0;if(L===4||Math.abs(Ae-l)<.002)return he[0]>100.01||he[1]>100.01||he[2]>100.01?0:qi(he);f=f-(Ae-l)*f/(2*Ae)}return 0}static solveToInt(t,a,l){if(a<1e-4||l<1e-4||l>99.9999)return ka(l);t=qn(t);const f=t/180*Math.PI,h=bt(l),g=U.findResultByJ(f,a,h);if(g!==0)return g;const S=U.bisectToLimit(h,f);return qi(S)}static solveToCam(t,a,l){return ke.fromInt(U.solveToInt(t,a,l))}}U.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];U.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];U.Y_FROM_LINRGB=[.2126,.7152,.0722];U.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
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
 */class Te{static from(t,a,l){return new Te(U.solveToInt(t,a,l))}static fromInt(t){return new Te(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(U.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(U.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(U.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const a=ke.fromInt(t);this.internalHue=a.hue,this.internalChroma=a.chroma,this.internalTone=Fn(t),this.argb=t}setInternalState(t){const a=ke.fromInt(t);this.internalHue=a.hue,this.internalChroma=a.chroma,this.internalTone=Fn(t),this.argb=t}inViewingConditions(t){const l=ke.fromInt(this.toInt()).xyzInViewingConditions(t),f=ke.fromXyzInViewingConditions(l[0],l[1],l[2],nt.make());return Te.from(f.hue,f.chroma,In(l[1]))}}/**
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
 */class Vn{static harmonize(t,a){const l=Te.fromInt(t),f=Te.fromInt(a),h=ga(l.hue,f.hue),g=Math.min(h*.5,15),S=qn(l.hue+g*pa(l.hue,f.hue));return Te.from(S,l.chroma,l.tone).toInt()}static hctHue(t,a,l){const f=Vn.cam16Ucs(t,a,l),h=ke.fromInt(f),g=ke.fromInt(t);return Te.from(h.hue,g.chroma,Fn(t)).toInt()}static cam16Ucs(t,a,l){const f=ke.fromInt(t),h=ke.fromInt(a),g=f.jstar,S=f.astar,A=f.bstar,E=h.jstar,O=h.astar,L=h.bstar,H=g+(E-g)*l,J=S+(O-S)*l,M=A+(L-A)*l;return ke.fromUcs(H,J,M).toInt()}}/**
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
 */class $e{static ratioOfTones(t,a){return t=Jr(0,100,t),a=Jr(0,100,a),$e.ratioOfYs(bt(t),bt(a))}static ratioOfYs(t,a){const l=t>a?t:a,f=l===a?t:a;return(l+5)/(f+5)}static lighter(t,a){if(t<0||t>100)return-1;const l=bt(t),f=a*(l+5)-5,h=$e.ratioOfYs(f,l),g=Math.abs(h-a);if(h<a&&g>.04)return-1;const S=In(f)+.4;return S<0||S>100?-1:S}static darker(t,a){if(t<0||t>100)return-1;const l=bt(t),f=(l+5)/a-5,h=$e.ratioOfYs(l,f),g=Math.abs(h-a);if(h<a&&g>.04)return-1;const S=In(f)-.4;return S<0||S>100?-1:S}static lighterUnsafe(t,a){const l=$e.lighter(t,a);return l<0?100:l}static darkerUnsafe(t,a){const l=$e.darker(t,a);return l<0?0:l}}/**
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
 */class Wn{static isDisliked(t){const a=Math.round(t.hue)>=90&&Math.round(t.hue)<=111,l=Math.round(t.chroma)>16,f=Math.round(t.tone)<65;return a&&l&&f}static fixIfDisliked(t){return Wn.isDisliked(t)?Te.from(t.hue,t.chroma,70):t}}/**
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
 */class R{static fromPalette(t){return new R(t.name??"",t.palette,t.tone,t.isBackground??!1,t.background,t.secondBackground,t.contrastCurve,t.toneDeltaPair)}constructor(t,a,l,f,h,g,S,A){if(this.name=t,this.palette=a,this.tone=l,this.isBackground=f,this.background=h,this.secondBackground=g,this.contrastCurve=S,this.toneDeltaPair=A,this.hctCache=new Map,!h&&g)throw new Error(`Color ${t} has secondBackgrounddefined, but background is not defined.`);if(!h&&S)throw new Error(`Color ${t} has contrastCurvedefined, but background is not defined.`);if(h&&!S)throw new Error(`Color ${t} has backgrounddefined, but contrastCurve is not defined.`)}getArgb(t){return this.getHct(t).toInt()}getHct(t){const a=this.hctCache.get(t);if(a!=null)return a;const l=this.getTone(t),f=this.palette(t).getHct(l);return this.hctCache.size>4&&this.hctCache.clear(),this.hctCache.set(t,f),f}getTone(t){const a=t.contrastLevel<0;if(this.toneDeltaPair){const l=this.toneDeltaPair(t),f=l.roleA,h=l.roleB,g=l.delta,S=l.polarity,A=l.stayTogether,O=this.background(t).getTone(t),L=S==="nearer"||S==="lighter"&&!t.isDark||S==="darker"&&t.isDark,H=L?f:h,J=L?h:f,M=this.name===H.name,N=t.isDark?1:-1,oe=H.contrastCurve.get(t.contrastLevel),j=J.contrastCurve.get(t.contrastLevel),fe=H.tone(t);let ne=$e.ratioOfTones(O,fe)>=oe?fe:R.foregroundTone(O,oe);const ge=J.tone(t);let ee=$e.ratioOfTones(O,ge)>=j?ge:R.foregroundTone(O,j);return a&&(ne=R.foregroundTone(O,oe),ee=R.foregroundTone(O,j)),(ee-ne)*N>=g||(ee=Jr(0,100,ne+g*N),(ee-ne)*N>=g||(ne=Jr(0,100,ee-g*N))),50<=ne&&ne<60?N>0?(ne=60,ee=Math.max(ee,ne+g*N)):(ne=49,ee=Math.min(ee,ne+g*N)):50<=ee&&ee<60&&(A?N>0?(ne=60,ee=Math.max(ee,ne+g*N)):(ne=49,ee=Math.min(ee,ne+g*N)):N>0?ee=60:ee=49),M?ne:ee}else{let l=this.tone(t);if(this.background==null)return l;const f=this.background(t).getTone(t),h=this.contrastCurve.get(t.contrastLevel);if($e.ratioOfTones(f,l)>=h||(l=R.foregroundTone(f,h)),a&&(l=R.foregroundTone(f,h)),this.isBackground&&50<=l&&l<60&&($e.ratioOfTones(49,f)>=h?l=49:l=60),this.secondBackground){const[g,S]=[this.background,this.secondBackground],[A,E]=[g(t).getTone(t),S(t).getTone(t)],[O,L]=[Math.max(A,E),Math.min(A,E)];if($e.ratioOfTones(O,l)>=h&&$e.ratioOfTones(L,l)>=h)return l;const H=$e.lighter(O,h),J=$e.darker(L,h),M=[];return H!==-1&&M.push(H),J!==-1&&M.push(J),R.tonePrefersLightForeground(A)||R.tonePrefersLightForeground(E)?H<0?100:H:M.length===1?M[0]:J<0?0:J}return l}}static foregroundTone(t,a){const l=$e.lighterUnsafe(t,a),f=$e.darkerUnsafe(t,a),h=$e.ratioOfTones(l,t),g=$e.ratioOfTones(f,t);if(R.tonePrefersLightForeground(t)){const A=Math.abs(h-g)<.1&&h<a&&g<a;return h>=a||h>=g||A?l:f}else return g>=a||g>=h?f:l}static tonePrefersLightForeground(t){return Math.round(t)<60}static toneAllowsLightForeground(t){return Math.round(t)<=49}static enableLightForeground(t){return R.tonePrefersLightForeground(t)&&!R.toneAllowsLightForeground(t)?49:t}}/**
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
 */class Me{static fromInt(t){const a=Te.fromInt(t);return Me.fromHct(a)}static fromHct(t){return new Me(t.hue,t.chroma,t)}static fromHueAndChroma(t,a){const l=new Pa(t,a).create();return new Me(t,a,l)}constructor(t,a,l){this.hue=t,this.chroma=a,this.keyColor=l,this.cache=new Map}tone(t){let a=this.cache.get(t);return a===void 0&&(a=Te.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,a)),a}getHct(t){return Te.fromInt(this.tone(t))}}class Pa{constructor(t,a){this.hue=t,this.requestedChroma=a,this.chromaCache=new Map,this.maxChromaValue=200}create(){let f=0,h=100;for(;f<h;){const g=Math.floor((f+h)/2),S=this.maxChroma(g)<this.maxChroma(g+1);if(this.maxChroma(g)>=this.requestedChroma-.01)if(Math.abs(f-50)<Math.abs(h-50))h=g;else{if(f===g)return Te.from(this.hue,this.requestedChroma,f);f=g}else S?f=g+1:h=g}return Te.from(this.hue,this.requestedChroma,f)}maxChroma(t){if(this.chromaCache.has(t))return this.chromaCache.get(t);const a=Te.from(this.hue,this.maxChromaValue,t).chroma;return this.chromaCache.set(t,a),a}}/**
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
 */class Y{constructor(t,a,l,f){this.low=t,this.normal=a,this.medium=l,this.high=f}get(t){return t<=-1?this.low:t<0?xr(this.low,this.normal,(t- -1)/1):t<.5?xr(this.normal,this.medium,(t-0)/.5):t<1?xr(this.medium,this.high,(t-.5)/.5):this.high}}/**
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
 */class Re{constructor(t,a,l,f,h){this.roleA=t,this.roleB=a,this.delta=l,this.polarity=f,this.stayTogether=h}}/**
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
 */var Tr;(function(n){n[n.MONOCHROME=0]="MONOCHROME",n[n.NEUTRAL=1]="NEUTRAL",n[n.TONAL_SPOT=2]="TONAL_SPOT",n[n.VIBRANT=3]="VIBRANT",n[n.EXPRESSIVE=4]="EXPRESSIVE",n[n.FIDELITY=5]="FIDELITY",n[n.CONTENT=6]="CONTENT",n[n.RAINBOW=7]="RAINBOW",n[n.FRUIT_SALAD=8]="FRUIT_SALAD"})(Tr||(Tr={}));/**
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
 */function nr(n){return n.variant===Tr.FIDELITY||n.variant===Tr.CONTENT}function pe(n){return n.variant===Tr.MONOCHROME}function Sa(n,t,a,l){let f=a,h=Te.from(n,t,a);if(h.chroma<t){let g=h.chroma;for(;h.chroma<t;){f+=l?-1:1;const S=Te.from(n,t,f);if(g>S.chroma||Math.abs(S.chroma-t)<.4)break;const A=Math.abs(S.chroma-t),E=Math.abs(h.chroma-t);A<E&&(h=S),g=Math.max(g,S.chroma)}}return f}class k{static highestSurface(t){return t.isDark?k.surfaceBright:k.surfaceDim}}k.contentAccentToneDelta=15;k.primaryPaletteKeyColor=R.fromPalette({name:"primary_palette_key_color",palette:n=>n.primaryPalette,tone:n=>n.primaryPalette.keyColor.tone});k.secondaryPaletteKeyColor=R.fromPalette({name:"secondary_palette_key_color",palette:n=>n.secondaryPalette,tone:n=>n.secondaryPalette.keyColor.tone});k.tertiaryPaletteKeyColor=R.fromPalette({name:"tertiary_palette_key_color",palette:n=>n.tertiaryPalette,tone:n=>n.tertiaryPalette.keyColor.tone});k.neutralPaletteKeyColor=R.fromPalette({name:"neutral_palette_key_color",palette:n=>n.neutralPalette,tone:n=>n.neutralPalette.keyColor.tone});k.neutralVariantPaletteKeyColor=R.fromPalette({name:"neutral_variant_palette_key_color",palette:n=>n.neutralVariantPalette,tone:n=>n.neutralVariantPalette.keyColor.tone});k.background=R.fromPalette({name:"background",palette:n=>n.neutralPalette,tone:n=>n.isDark?6:98,isBackground:!0});k.onBackground=R.fromPalette({name:"on_background",palette:n=>n.neutralPalette,tone:n=>n.isDark?90:10,background:n=>k.background,contrastCurve:new Y(3,3,4.5,7)});k.surface=R.fromPalette({name:"surface",palette:n=>n.neutralPalette,tone:n=>n.isDark?6:98,isBackground:!0});k.surfaceDim=R.fromPalette({name:"surface_dim",palette:n=>n.neutralPalette,tone:n=>n.isDark?6:new Y(87,87,80,75).get(n.contrastLevel),isBackground:!0});k.surfaceBright=R.fromPalette({name:"surface_bright",palette:n=>n.neutralPalette,tone:n=>n.isDark?new Y(24,24,29,34).get(n.contrastLevel):98,isBackground:!0});k.surfaceContainerLowest=R.fromPalette({name:"surface_container_lowest",palette:n=>n.neutralPalette,tone:n=>n.isDark?new Y(4,4,2,0).get(n.contrastLevel):100,isBackground:!0});k.surfaceContainerLow=R.fromPalette({name:"surface_container_low",palette:n=>n.neutralPalette,tone:n=>n.isDark?new Y(10,10,11,12).get(n.contrastLevel):new Y(96,96,96,95).get(n.contrastLevel),isBackground:!0});k.surfaceContainer=R.fromPalette({name:"surface_container",palette:n=>n.neutralPalette,tone:n=>n.isDark?new Y(12,12,16,20).get(n.contrastLevel):new Y(94,94,92,90).get(n.contrastLevel),isBackground:!0});k.surfaceContainerHigh=R.fromPalette({name:"surface_container_high",palette:n=>n.neutralPalette,tone:n=>n.isDark?new Y(17,17,21,25).get(n.contrastLevel):new Y(92,92,88,85).get(n.contrastLevel),isBackground:!0});k.surfaceContainerHighest=R.fromPalette({name:"surface_container_highest",palette:n=>n.neutralPalette,tone:n=>n.isDark?new Y(22,22,26,30).get(n.contrastLevel):new Y(90,90,84,80).get(n.contrastLevel),isBackground:!0});k.onSurface=R.fromPalette({name:"on_surface",palette:n=>n.neutralPalette,tone:n=>n.isDark?90:10,background:n=>k.highestSurface(n),contrastCurve:new Y(4.5,7,11,21)});k.surfaceVariant=R.fromPalette({name:"surface_variant",palette:n=>n.neutralVariantPalette,tone:n=>n.isDark?30:90,isBackground:!0});k.onSurfaceVariant=R.fromPalette({name:"on_surface_variant",palette:n=>n.neutralVariantPalette,tone:n=>n.isDark?80:30,background:n=>k.highestSurface(n),contrastCurve:new Y(3,4.5,7,11)});k.inverseSurface=R.fromPalette({name:"inverse_surface",palette:n=>n.neutralPalette,tone:n=>n.isDark?90:20});k.inverseOnSurface=R.fromPalette({name:"inverse_on_surface",palette:n=>n.neutralPalette,tone:n=>n.isDark?20:95,background:n=>k.inverseSurface,contrastCurve:new Y(4.5,7,11,21)});k.outline=R.fromPalette({name:"outline",palette:n=>n.neutralVariantPalette,tone:n=>n.isDark?60:50,background:n=>k.highestSurface(n),contrastCurve:new Y(1.5,3,4.5,7)});k.outlineVariant=R.fromPalette({name:"outline_variant",palette:n=>n.neutralVariantPalette,tone:n=>n.isDark?30:80,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5)});k.shadow=R.fromPalette({name:"shadow",palette:n=>n.neutralPalette,tone:n=>0});k.scrim=R.fromPalette({name:"scrim",palette:n=>n.neutralPalette,tone:n=>0});k.surfaceTint=R.fromPalette({name:"surface_tint",palette:n=>n.primaryPalette,tone:n=>n.isDark?80:40,isBackground:!0});k.primary=R.fromPalette({name:"primary",palette:n=>n.primaryPalette,tone:n=>pe(n)?n.isDark?100:0:n.isDark?80:40,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:n=>new Re(k.primaryContainer,k.primary,10,"nearer",!1)});k.onPrimary=R.fromPalette({name:"on_primary",palette:n=>n.primaryPalette,tone:n=>pe(n)?n.isDark?10:90:n.isDark?20:100,background:n=>k.primary,contrastCurve:new Y(4.5,7,11,21)});k.primaryContainer=R.fromPalette({name:"primary_container",palette:n=>n.primaryPalette,tone:n=>nr(n)?n.sourceColorHct.tone:pe(n)?n.isDark?85:25:n.isDark?30:90,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.primaryContainer,k.primary,10,"nearer",!1)});k.onPrimaryContainer=R.fromPalette({name:"on_primary_container",palette:n=>n.primaryPalette,tone:n=>nr(n)?R.foregroundTone(k.primaryContainer.tone(n),4.5):pe(n)?n.isDark?0:100:n.isDark?90:30,background:n=>k.primaryContainer,contrastCurve:new Y(3,4.5,7,11)});k.inversePrimary=R.fromPalette({name:"inverse_primary",palette:n=>n.primaryPalette,tone:n=>n.isDark?40:80,background:n=>k.inverseSurface,contrastCurve:new Y(3,4.5,7,7)});k.secondary=R.fromPalette({name:"secondary",palette:n=>n.secondaryPalette,tone:n=>n.isDark?80:40,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:n=>new Re(k.secondaryContainer,k.secondary,10,"nearer",!1)});k.onSecondary=R.fromPalette({name:"on_secondary",palette:n=>n.secondaryPalette,tone:n=>pe(n)?n.isDark?10:100:n.isDark?20:100,background:n=>k.secondary,contrastCurve:new Y(4.5,7,11,21)});k.secondaryContainer=R.fromPalette({name:"secondary_container",palette:n=>n.secondaryPalette,tone:n=>{const t=n.isDark?30:90;return pe(n)?n.isDark?30:85:nr(n)?Sa(n.secondaryPalette.hue,n.secondaryPalette.chroma,t,!n.isDark):t},isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.secondaryContainer,k.secondary,10,"nearer",!1)});k.onSecondaryContainer=R.fromPalette({name:"on_secondary_container",palette:n=>n.secondaryPalette,tone:n=>pe(n)?n.isDark?90:10:nr(n)?R.foregroundTone(k.secondaryContainer.tone(n),4.5):n.isDark?90:30,background:n=>k.secondaryContainer,contrastCurve:new Y(3,4.5,7,11)});k.tertiary=R.fromPalette({name:"tertiary",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?n.isDark?90:25:n.isDark?80:40,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:n=>new Re(k.tertiaryContainer,k.tertiary,10,"nearer",!1)});k.onTertiary=R.fromPalette({name:"on_tertiary",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?n.isDark?10:90:n.isDark?20:100,background:n=>k.tertiary,contrastCurve:new Y(4.5,7,11,21)});k.tertiaryContainer=R.fromPalette({name:"tertiary_container",palette:n=>n.tertiaryPalette,tone:n=>{if(pe(n))return n.isDark?60:49;if(!nr(n))return n.isDark?30:90;const t=n.tertiaryPalette.getHct(n.sourceColorHct.tone);return Wn.fixIfDisliked(t).tone},isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.tertiaryContainer,k.tertiary,10,"nearer",!1)});k.onTertiaryContainer=R.fromPalette({name:"on_tertiary_container",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?n.isDark?0:100:nr(n)?R.foregroundTone(k.tertiaryContainer.tone(n),4.5):n.isDark?90:30,background:n=>k.tertiaryContainer,contrastCurve:new Y(3,4.5,7,11)});k.error=R.fromPalette({name:"error",palette:n=>n.errorPalette,tone:n=>n.isDark?80:40,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(3,4.5,7,7),toneDeltaPair:n=>new Re(k.errorContainer,k.error,10,"nearer",!1)});k.onError=R.fromPalette({name:"on_error",palette:n=>n.errorPalette,tone:n=>n.isDark?20:100,background:n=>k.error,contrastCurve:new Y(4.5,7,11,21)});k.errorContainer=R.fromPalette({name:"error_container",palette:n=>n.errorPalette,tone:n=>n.isDark?30:90,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.errorContainer,k.error,10,"nearer",!1)});k.onErrorContainer=R.fromPalette({name:"on_error_container",palette:n=>n.errorPalette,tone:n=>pe(n)?n.isDark?90:10:n.isDark?90:30,background:n=>k.errorContainer,contrastCurve:new Y(3,4.5,7,11)});k.primaryFixed=R.fromPalette({name:"primary_fixed",palette:n=>n.primaryPalette,tone:n=>pe(n)?40:90,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.primaryFixed,k.primaryFixedDim,10,"lighter",!0)});k.primaryFixedDim=R.fromPalette({name:"primary_fixed_dim",palette:n=>n.primaryPalette,tone:n=>pe(n)?30:80,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.primaryFixed,k.primaryFixedDim,10,"lighter",!0)});k.onPrimaryFixed=R.fromPalette({name:"on_primary_fixed",palette:n=>n.primaryPalette,tone:n=>pe(n)?100:10,background:n=>k.primaryFixedDim,secondBackground:n=>k.primaryFixed,contrastCurve:new Y(4.5,7,11,21)});k.onPrimaryFixedVariant=R.fromPalette({name:"on_primary_fixed_variant",palette:n=>n.primaryPalette,tone:n=>pe(n)?90:30,background:n=>k.primaryFixedDim,secondBackground:n=>k.primaryFixed,contrastCurve:new Y(3,4.5,7,11)});k.secondaryFixed=R.fromPalette({name:"secondary_fixed",palette:n=>n.secondaryPalette,tone:n=>pe(n)?80:90,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.secondaryFixed,k.secondaryFixedDim,10,"lighter",!0)});k.secondaryFixedDim=R.fromPalette({name:"secondary_fixed_dim",palette:n=>n.secondaryPalette,tone:n=>pe(n)?70:80,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.secondaryFixed,k.secondaryFixedDim,10,"lighter",!0)});k.onSecondaryFixed=R.fromPalette({name:"on_secondary_fixed",palette:n=>n.secondaryPalette,tone:n=>10,background:n=>k.secondaryFixedDim,secondBackground:n=>k.secondaryFixed,contrastCurve:new Y(4.5,7,11,21)});k.onSecondaryFixedVariant=R.fromPalette({name:"on_secondary_fixed_variant",palette:n=>n.secondaryPalette,tone:n=>pe(n)?25:30,background:n=>k.secondaryFixedDim,secondBackground:n=>k.secondaryFixed,contrastCurve:new Y(3,4.5,7,11)});k.tertiaryFixed=R.fromPalette({name:"tertiary_fixed",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?40:90,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.tertiaryFixed,k.tertiaryFixedDim,10,"lighter",!0)});k.tertiaryFixedDim=R.fromPalette({name:"tertiary_fixed_dim",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?30:80,isBackground:!0,background:n=>k.highestSurface(n),contrastCurve:new Y(1,1,3,4.5),toneDeltaPair:n=>new Re(k.tertiaryFixed,k.tertiaryFixedDim,10,"lighter",!0)});k.onTertiaryFixed=R.fromPalette({name:"on_tertiary_fixed",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?100:10,background:n=>k.tertiaryFixedDim,secondBackground:n=>k.tertiaryFixed,contrastCurve:new Y(4.5,7,11,21)});k.onTertiaryFixedVariant=R.fromPalette({name:"on_tertiary_fixed_variant",palette:n=>n.tertiaryPalette,tone:n=>pe(n)?90:30,background:n=>k.tertiaryFixedDim,secondBackground:n=>k.tertiaryFixed,contrastCurve:new Y(3,4.5,7,11)});/**
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
 */class Se{static of(t){return new Se(t,!1)}static contentOf(t){return new Se(t,!0)}static fromColors(t){return Se.createPaletteFromColors(!1,t)}static contentFromColors(t){return Se.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,a){const l=new Se(a.primary,t);if(a.secondary){const f=new Se(a.secondary,t);l.a2=f.a1}if(a.tertiary){const f=new Se(a.tertiary,t);l.a3=f.a1}if(a.error){const f=new Se(a.error,t);l.error=f.a1}if(a.neutral){const f=new Se(a.neutral,t);l.n1=f.n1}if(a.neutralVariant){const f=new Se(a.neutralVariant,t);l.n2=f.n2}return l}constructor(t,a){const l=Te.fromInt(t),f=l.hue,h=l.chroma;a?(this.a1=Me.fromHueAndChroma(f,h),this.a2=Me.fromHueAndChroma(f,h/3),this.a3=Me.fromHueAndChroma(f+60,h/2),this.n1=Me.fromHueAndChroma(f,Math.min(h/12,4)),this.n2=Me.fromHueAndChroma(f,Math.min(h/6,8))):(this.a1=Me.fromHueAndChroma(f,Math.max(48,h)),this.a2=Me.fromHueAndChroma(f,16),this.a3=Me.fromHueAndChroma(f+60,24),this.n1=Me.fromHueAndChroma(f,4),this.n2=Me.fromHueAndChroma(f,8)),this.error=Me.fromHueAndChroma(25,84)}}/**
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
 */class lt{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}get surfaceDim(){return this.props.surfaceDim}get surfaceBright(){return this.props.surfaceBright}get surfaceContainerLowest(){return this.props.surfaceContainerLowest}get surfaceContainerLow(){return this.props.surfaceContainerLow}get surfaceContainer(){return this.props.surfaceContainer}get surfaceContainerHigh(){return this.props.surfaceContainerHigh}get surfaceContainerHighest(){return this.props.surfaceContainerHighest}get surfaceTint(){return this.props.surfaceTint}get primaryFixed(){return this.props.primaryFixed}get primaryFixedDim(){return this.props.primaryFixedDim}get onPrimaryFixed(){return this.props.onPrimaryFixed}get onPrimaryFixedVariant(){return this.props.onPrimaryFixedVariant}get secondaryFixed(){return this.props.secondaryFixed}get secondaryFixedDim(){return this.props.secondaryFixedDim}get onSecondaryFixed(){return this.props.onSecondaryFixed}get onSecondaryFixedVariant(){return this.props.onSecondaryFixedVariant}get tertiaryFixed(){return this.props.tertiaryFixed}get tertiaryFixedDim(){return this.props.tertiaryFixedDim}get onTertiaryFixed(){return this.props.onTertiaryFixed}get onTertiaryFixedVariant(){return this.props.onTertiaryFixedVariant}static light(t){return lt.lightFromCorePalette(Se.of(t))}static dark(t){return lt.darkFromCorePalette(Se.of(t))}static lightContent(t){return lt.lightFromCorePalette(Se.contentOf(t))}static darkContent(t){return lt.darkFromCorePalette(Se.contentOf(t))}static lightFromCorePalette(t){return new lt({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80),surfaceDim:t.n1.tone(87),surfaceBright:t.n1.tone(98),surfaceContainerLowest:t.n1.tone(100),surfaceContainerLow:t.n1.tone(96),surfaceContainer:t.n1.tone(94),surfaceContainerHigh:t.n1.tone(92),surfaceContainerHighest:t.n1.tone(90),surfaceTint:t.a1.tone(40),primaryFixed:t.a1.tone(90),primaryFixedDim:t.a1.tone(80),onPrimaryFixed:t.a1.tone(10),onPrimaryFixedVariant:t.a1.tone(30),secondaryFixed:t.a2.tone(90),secondaryFixedDim:t.a2.tone(80),onSecondaryFixed:t.a2.tone(10),onSecondaryFixedVariant:t.a2.tone(30),tertiaryFixed:t.a3.tone(90),tertiaryFixedDim:t.a3.tone(80),onTertiaryFixed:t.a3.tone(10),onTertiaryFixedVariant:t.a3.tone(30)})}static darkFromCorePalette(t){return new lt({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40),surfaceDim:t.n1.tone(6),surfaceBright:t.n1.tone(24),surfaceContainerLowest:t.n1.tone(4),surfaceContainerLow:t.n1.tone(10),surfaceContainer:t.n1.tone(12),surfaceContainerHigh:t.n1.tone(17),surfaceContainerHighest:t.n1.tone(22),surfaceTint:t.a1.tone(80),primaryFixed:t.a1.tone(90),primaryFixedDim:t.a1.tone(80),onPrimaryFixed:t.a1.tone(10),onPrimaryFixedVariant:t.a1.tone(30),secondaryFixed:t.a2.tone(90),secondaryFixedDim:t.a2.tone(80),onSecondaryFixed:t.a2.tone(10),onSecondaryFixedVariant:t.a2.tone(30),tertiaryFixed:t.a3.tone(90),tertiaryFixedDim:t.a3.tone(80),onTertiaryFixed:t.a3.tone(10),onTertiaryFixedVariant:t.a3.tone(30)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
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
 */function _a(n){n=n.replace("#","");const t=n.length===3,a=n.length===6,l=n.length===8;if(!t&&!a&&!l)throw new Error("unexpected hex "+n);let f=0,h=0,g=0;return t?(f=ut(n.slice(0,1).repeat(2)),h=ut(n.slice(1,2).repeat(2)),g=ut(n.slice(2,3).repeat(2))):a?(f=ut(n.slice(0,2)),h=ut(n.slice(2,4)),g=ut(n.slice(4,6))):l&&(f=ut(n.slice(2,4)),h=ut(n.slice(4,6)),g=ut(n.slice(6,8))),(255<<24|(f&255)<<16|(h&255)<<8|g&255)>>>0}function ut(n){return parseInt(n,16)}/**
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
 */function Da(n,t=[]){const a=Se.of(n);return{source:n,schemes:{light:lt.light(n),dark:lt.dark(n)},palettes:{primary:a.a1,secondary:a.a2,tertiary:a.a3,neutral:a.n1,neutralVariant:a.n2,error:a.error},customColors:t.map(l=>Ma(n,l))}}function Ma(n,t){let a=t.value;const l=a,f=n;t.blend&&(a=Vn.harmonize(l,f));const g=Se.of(a).a1;return{color:t,value:a,light:{color:g.tone(40),onColor:g.tone(100),colorContainer:g.tone(90),onColorContainer:g.tone(10)},dark:{color:g.tone(80),onColor:g.tone(20),colorContainer:g.tone(30),onColorContainer:g.tone(90)}}}function Ea(n="#6750A4"){const t=Da(_a(n));let a="";for(const[f,h]of Object.entries(t.schemes.light.toJSON())){const g=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();a=a+`--md-sys-color-${g}:${h>>16&255},${h>>8&255},${h&255};`}let l="";for(const[f,h]of Object.entries(t.schemes.dark.toJSON())){const g=f.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();l=l+`--md-sys-color-${g}:${h>>16&255},${h>>8&255},${h&255};`}zi(".colorTheme").remove(),zi(document.head).append(`
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
    `)}Ea();
