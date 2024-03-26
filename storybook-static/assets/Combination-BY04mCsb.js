import{_ as Q}from"./extends-CCbyfPlC.js";import{r as i}from"./index-CO9pbFv1.js";import{d as D,a as fe,e as J,f as K,h as Ce}from"./index-Dwm3ODnT.js";import{R as Te}from"./index-BT32HCm8.js";function Pe(e,t=globalThis==null?void 0:globalThis.document){const n=D(e);i.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const Z="dismissableLayer.update",Oe="dismissableLayer.pointerDownOutside",Re="dismissableLayer.focusOutside";let te;const Le=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ct=i.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:a,onPointerDownOutside:u,onFocusOutside:l,onInteractOutside:o,onDismiss:h,...g}=e,f=i.useContext(Le),[s,m]=i.useState(null),v=(n=s==null?void 0:s.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,w]=i.useState({}),c=fe(t,E=>m(E)),d=Array.from(f.layers),[b]=[...f.layersWithOutsidePointerEventsDisabled].slice(-1),S=d.indexOf(b),p=s?d.indexOf(s):-1,y=f.layersWithOutsidePointerEventsDisabled.size>0,$=p>=S,x=ke(E=>{const O=E.target,ee=[...f.branches].some(U=>U.contains(O));!$||ee||(u==null||u(E),o==null||o(E),E.defaultPrevented||h==null||h())},v),T=xe(E=>{const O=E.target;[...f.branches].some(U=>U.contains(O))||(l==null||l(E),o==null||o(E),E.defaultPrevented||h==null||h())},v);return Pe(E=>{p===f.layers.size-1&&(a==null||a(E),!E.defaultPrevented&&h&&(E.preventDefault(),h()))},v),i.useEffect(()=>{if(s)return r&&(f.layersWithOutsidePointerEventsDisabled.size===0&&(te=v.body.style.pointerEvents,v.body.style.pointerEvents="none"),f.layersWithOutsidePointerEventsDisabled.add(s)),f.layers.add(s),ne(),()=>{r&&f.layersWithOutsidePointerEventsDisabled.size===1&&(v.body.style.pointerEvents=te)}},[s,v,r,f]),i.useEffect(()=>()=>{s&&(f.layers.delete(s),f.layersWithOutsidePointerEventsDisabled.delete(s),ne())},[s,f]),i.useEffect(()=>{const E=()=>w({});return document.addEventListener(Z,E),()=>document.removeEventListener(Z,E)},[]),i.createElement(J.div,Q({},g,{ref:c,style:{pointerEvents:y?$?"auto":"none":void 0,...e.style},onFocusCapture:K(e.onFocusCapture,T.onFocusCapture),onBlurCapture:K(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:K(e.onPointerDownCapture,x.onPointerDownCapture)}))});function ke(e,t=globalThis==null?void 0:globalThis.document){const n=D(e),r=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{const u=o=>{if(o.target&&!r.current){let g=function(){ve(Oe,n,h,{discrete:!0})};const h={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=g,t.addEventListener("click",a.current,{once:!0})):g()}else t.removeEventListener("click",a.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",u)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",u),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function xe(e,t=globalThis==null?void 0:globalThis.document){const n=D(e),r=i.useRef(!1);return i.useEffect(()=>{const a=u=>{u.target&&!r.current&&ve(Re,n,{originalEvent:u},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ne(){const e=new CustomEvent(Z);document.dispatchEvent(e)}function ve(e,t,n,{discrete:r}){const a=n.originalEvent.target,u=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Ce(a,u):a.dispatchEvent(u)}let H=0;function Tt(){i.useEffect(()=>{var e,t;const n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=n[0])!==null&&e!==void 0?e:re()),document.body.insertAdjacentElement("beforeend",(t=n[1])!==null&&t!==void 0?t:re()),H++,()=>{H===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(r=>r.remove()),H--}},[])}function re(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}const j="focusScope.autoFocusOnMount",X="focusScope.autoFocusOnUnmount",ae={bubbles:!1,cancelable:!0},Pt=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:u,...l}=e,[o,h]=i.useState(null),g=D(a),f=D(u),s=i.useRef(null),m=fe(t,c=>h(c)),v=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let c=function(p){if(v.paused||!o)return;const y=p.target;o.contains(y)?s.current=y:P(s.current,{select:!0})},d=function(p){if(v.paused||!o)return;const y=p.relatedTarget;y!==null&&(o.contains(y)||P(s.current,{select:!0}))},b=function(p){if(document.activeElement===document.body)for(const $ of p)$.removedNodes.length>0&&P(o)};document.addEventListener("focusin",c),document.addEventListener("focusout",d);const S=new MutationObserver(b);return o&&S.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",c),document.removeEventListener("focusout",d),S.disconnect()}}},[r,o,v.paused]),i.useEffect(()=>{if(o){ce.add(v);const c=document.activeElement;if(!o.contains(c)){const b=new CustomEvent(j,ae);o.addEventListener(j,g),o.dispatchEvent(b),b.defaultPrevented||(De(We(he(o)),{select:!0}),document.activeElement===c&&P(o))}return()=>{o.removeEventListener(j,g),setTimeout(()=>{const b=new CustomEvent(X,ae);o.addEventListener(X,f),o.dispatchEvent(b),b.defaultPrevented||P(c??document.body,{select:!0}),o.removeEventListener(X,f),ce.remove(v)},0)}}},[o,g,f,v]);const w=i.useCallback(c=>{if(!n&&!r||v.paused)return;const d=c.key==="Tab"&&!c.altKey&&!c.ctrlKey&&!c.metaKey,b=document.activeElement;if(d&&b){const S=c.currentTarget,[p,y]=Ae(S);p&&y?!c.shiftKey&&b===y?(c.preventDefault(),n&&P(p,{select:!0})):c.shiftKey&&b===p&&(c.preventDefault(),n&&P(y,{select:!0})):b===S&&c.preventDefault()}},[n,r,v.paused]);return i.createElement(J.div,Q({tabIndex:-1},l,{ref:m,onKeyDown:w}))});function De(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(P(r,{select:t}),document.activeElement!==n)return}function Ae(e){const t=he(e),n=oe(t,e),r=oe(t.reverse(),e);return[n,r]}function he(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function oe(e,t){for(const n of e)if(!Fe(n,{upTo:t}))return n}function Fe(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ie(e){return e instanceof HTMLInputElement&&"select"in e}function P(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ie(e)&&t&&e.select()}}const ce=Ne();function Ne(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ie(e,t),e.unshift(t)},remove(t){var n;e=ie(e,t),(n=e[0])===null||n===void 0||n.resume()}}}function ie(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function We(e){return e.filter(t=>t.tagName!=="A")}const Ot=i.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...a}=e;return r?Te.createPortal(i.createElement(J.div,Q({},a,{ref:t})),r):null});var Me=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},R=new WeakMap,A=new WeakMap,F={},V=0,me=function(e){return e&&(e.host||me(e.parentNode))},Be=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=me(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},_e=function(e,t,n,r){var a=Be(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var u=F[n],l=[],o=new Set,h=new Set(a),g=function(s){!s||o.has(s)||(o.add(s),g(s.parentNode))};a.forEach(g);var f=function(s){!s||h.has(s)||Array.prototype.forEach.call(s.children,function(m){if(o.has(m))f(m);else{var v=m.getAttribute(r),w=v!==null&&v!=="false",c=(R.get(m)||0)+1,d=(u.get(m)||0)+1;R.set(m,c),u.set(m,d),l.push(m),c===1&&w&&A.set(m,!0),d===1&&m.setAttribute(n,"true"),w||m.setAttribute(r,"true")}})};return f(t),o.clear(),V++,function(){l.forEach(function(s){var m=R.get(s)-1,v=u.get(s)-1;R.set(s,m),u.set(s,v),m||(A.has(s)||s.removeAttribute(r),A.delete(s)),v||s.removeAttribute(n)}),V--,V||(R=new WeakMap,R=new WeakMap,A=new WeakMap,F={})}},Rt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=t||Me(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),_e(r,a,n,"aria-hidden")):function(){return null}},C=function(){return C=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(t[u]=n[u])}return t},C.apply(this,arguments)};function be(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function Ue(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,u;r<a;r++)(u||!(r in t))&&(u||(u=Array.prototype.slice.call(t,0,r)),u[r]=t[r]);return e.concat(u||Array.prototype.slice.call(t))}var W="right-scroll-bar-position",M="width-before-scroll-bar",Ke="with-scroll-bars-hidden",He="--removed-body-scroll-bar-size";function Y(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function je(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var ue=new WeakMap;function Xe(e,t){var n=je(t||null,function(r){return e.forEach(function(a){return Y(a,r)})});return i.useLayoutEffect(function(){var r=ue.get(n);if(r){var a=new Set(r),u=new Set(e),l=n.current;a.forEach(function(o){u.has(o)||Y(o,null)}),u.forEach(function(o){a.has(o)||Y(o,l)})}ue.set(n,e)},[e]),n}function Ve(e){return e}function Ye(e,t){t===void 0&&(t=Ve);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(u){var l=t(u,r);return n.push(l),function(){n=n.filter(function(o){return o!==l})}},assignSyncMedium:function(u){for(r=!0;n.length;){var l=n;n=[],l.forEach(u)}n={push:function(o){return u(o)},filter:function(){return n}}},assignMedium:function(u){r=!0;var l=[];if(n.length){var o=n;n=[],o.forEach(u),l=n}var h=function(){var f=l;l=[],f.forEach(u)},g=function(){return Promise.resolve().then(h)};g(),n={push:function(f){l.push(f),g()},filter:function(f){return l=l.filter(f),n}}}};return a}function ze(e){e===void 0&&(e={});var t=Ye(null);return t.options=C({async:!0,ssr:!1},e),t}var pe=function(e){var t=e.sideCar,n=be(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,C({},n))};pe.isSideCarExport=!0;function Ge(e,t){return e.useMedium(t),pe}var ge=ze(),z=function(){},_=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:z,onWheelCapture:z,onTouchMoveCapture:z}),a=r[0],u=r[1],l=e.forwardProps,o=e.children,h=e.className,g=e.removeScrollBar,f=e.enabled,s=e.shards,m=e.sideCar,v=e.noIsolation,w=e.inert,c=e.allowPinchZoom,d=e.as,b=d===void 0?"div":d,S=be(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),p=m,y=Xe([n,t]),$=C(C({},S),a);return i.createElement(i.Fragment,null,f&&i.createElement(p,{sideCar:ge,removeScrollBar:g,shards:s,noIsolation:v,inert:w,setCallbacks:u,allowPinchZoom:!!c,lockRef:n}),l?i.cloneElement(i.Children.only(o),C(C({},$),{ref:y})):i.createElement(b,C({},$,{className:h,ref:y}),o))});_.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};_.classNames={fullWidth:M,zeroRight:W};var Ze=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function qe(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=Ze();return t&&e.setAttribute("nonce",t),e}function Qe(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function Je(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var et=function(){var e=0,t=null;return{add:function(n){e==0&&(t=qe())&&(Qe(t,n),Je(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},tt=function(){var e=et();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},ye=function(){var e=tt(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},nt={left:0,top:0,right:0,gap:0},G=function(e){return parseInt(e||"",10)||0},rt=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[G(n),G(r),G(a)]},at=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return nt;var t=rt(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},ot=ye(),B="data-scroll-locked",ct=function(e,t,n,r){var a=e.left,u=e.top,l=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(Ke,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(B,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(u,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(W,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(M,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(W," .").concat(W,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(M," .").concat(M,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(B,`] {
    `).concat(He,": ").concat(o,`px;
  }
`)},it=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r,u=i.useMemo(function(){return at(a)},[a]);return i.useEffect(function(){return document.body.setAttribute(B,""),function(){document.body.removeAttribute(B)}},[]),i.createElement(ot,{styles:ct(u,!t,a,n?"":"!important")})},q=!1;if(typeof window<"u")try{var I=Object.defineProperty({},"passive",{get:function(){return q=!0,!0}});window.addEventListener("test",I,I),window.removeEventListener("test",I,I)}catch{q=!1}var L=q?{passive:!1}:!1,ut=function(e){return e.tagName==="TEXTAREA"},Ee=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!ut(e)&&n[t]==="visible")},st=function(e){return Ee(e,"overflowY")},lt=function(e){return Ee(e,"overflowX")},se=function(e,t){var n=t;do{typeof ShadowRoot<"u"&&n instanceof ShadowRoot&&(n=n.host);var r=$e(e,n);if(r){var a=Se(e,n),u=a[1],l=a[2];if(u>l)return!0}n=n.parentNode}while(n&&n!==document.body);return!1},dt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},ft=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},$e=function(e,t){return e==="v"?st(t):lt(t)},Se=function(e,t){return e==="v"?dt(t):ft(t)},vt=function(e,t){return e==="h"&&t==="rtl"?-1:1},ht=function(e,t,n,r,a){var u=vt(e,window.getComputedStyle(t).direction),l=u*r,o=n.target,h=t.contains(o),g=!1,f=l>0,s=0,m=0;do{var v=Se(e,o),w=v[0],c=v[1],d=v[2],b=c-d-u*w;(w||b)&&$e(e,o)&&(s+=b,m+=w),o=o.parentNode}while(!h&&o!==document.body||h&&(t.contains(o)||t===o));return(f&&(a&&s===0||!a&&l>s)||!f&&(a&&m===0||!a&&-l>m))&&(g=!0),g},N=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},le=function(e){return[e.deltaX,e.deltaY]},de=function(e){return e&&"current"in e?e.current:e},mt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},bt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},pt=0,k=[];function gt(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(pt++)[0],u=i.useState(function(){return ye()})[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var c=Ue([e.lockRef.current],(e.shards||[]).map(de),!0).filter(Boolean);return c.forEach(function(d){return d.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),c.forEach(function(d){return d.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=i.useCallback(function(c,d){if("touches"in c&&c.touches.length===2)return!l.current.allowPinchZoom;var b=N(c),S=n.current,p="deltaX"in c?c.deltaX:S[0]-b[0],y="deltaY"in c?c.deltaY:S[1]-b[1],$,x=c.target,T=Math.abs(p)>Math.abs(y)?"h":"v";if("touches"in c&&T==="h"&&x.type==="range")return!1;var E=se(T,x);if(!E)return!0;if(E?$=T:($=T==="v"?"h":"v",E=se(T,x)),!E)return!1;if(!r.current&&"changedTouches"in c&&(p||y)&&(r.current=$),!$)return!0;var O=r.current||$;return ht(O,d,c,O==="h"?p:y,!0)},[]),h=i.useCallback(function(c){var d=c;if(!(!k.length||k[k.length-1]!==u)){var b="deltaY"in d?le(d):N(d),S=t.current.filter(function($){return $.name===d.type&&$.target===d.target&&mt($.delta,b)})[0];if(S&&S.should){d.cancelable&&d.preventDefault();return}if(!S){var p=(l.current.shards||[]).map(de).filter(Boolean).filter(function($){return $.contains(d.target)}),y=p.length>0?o(d,p[0]):!l.current.noIsolation;y&&d.cancelable&&d.preventDefault()}}},[]),g=i.useCallback(function(c,d,b,S){var p={name:c,delta:d,target:b,should:S};t.current.push(p),setTimeout(function(){t.current=t.current.filter(function(y){return y!==p})},1)},[]),f=i.useCallback(function(c){n.current=N(c),r.current=void 0},[]),s=i.useCallback(function(c){g(c.type,le(c),c.target,o(c,e.lockRef.current))},[]),m=i.useCallback(function(c){g(c.type,N(c),c.target,o(c,e.lockRef.current))},[]);i.useEffect(function(){return k.push(u),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:m}),document.addEventListener("wheel",h,L),document.addEventListener("touchmove",h,L),document.addEventListener("touchstart",f,L),function(){k=k.filter(function(c){return c!==u}),document.removeEventListener("wheel",h,L),document.removeEventListener("touchmove",h,L),document.removeEventListener("touchstart",f,L)}},[]);var v=e.removeScrollBar,w=e.inert;return i.createElement(i.Fragment,null,w?i.createElement(u,{styles:bt(a)}):null,v?i.createElement(it,{gapMode:"margin"}):null)}const yt=Ge(ge,gt);var we=i.forwardRef(function(e,t){return i.createElement(_,C({},e,{ref:t,sideCar:yt}))});we.classNames=_.classNames;const Lt=we;export{Tt as $,Pt as a,Ct as b,Ot as c,Lt as d,Rt as h};
