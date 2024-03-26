import{j as d}from"./jsx-runtime-DzgN-JE8.js";import{r as t}from"./index-CO9pbFv1.js";import{I as w}from"./Icons-i9HqDeSz.js";import{B as F}from"./button-BXHm91ri.js";import{C as j}from"./card-CFWRH6tA.js";import{T as R}from"./typography-BUUkRT78.js";import{_ as i}from"./extends-CCbyfPlC.js";import{b as T,a as v,f as $,e as D,c as k,g as L}from"./index-Dwm3ODnT.js";import{$ as _}from"./index-gwQh6S1x.js";import{h as V,$ as q,a as B,b as S,c as G,d as K}from"./Combination-BY04mCsb.js";import{$ as E}from"./index-prfkBr7j.js";import{c as O}from"./clsx-B-dksMZM.js";const y="Dialog",[N,Ne]=T(y),[U,f]=N(y),Y=e=>{const{__scopeDialog:a,children:n,open:r,defaultOpen:c,onOpenChange:o,modal:s=!0}=e,l=t.useRef(null),u=t.useRef(null),[g=!1,m]=k({prop:r,defaultProp:c,onChange:o});return t.createElement(U,{scope:a,triggerRef:l,contentRef:u,contentId:_(),titleId:_(),descriptionId:_(),open:g,onOpenChange:m,onOpenToggle:t.useCallback(()=>m(A=>!A),[m]),modal:s},n)},Z="DialogTrigger",z=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=f(Z,n),o=v(a,c.triggerRef);return t.createElement(D.button,i({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":C(c.open)},r,{ref:o,onClick:$(e.onClick,c.onOpenToggle)}))}),I="DialogPortal",[H,M]=N(I,{forceMount:void 0}),J=e=>{const{__scopeDialog:a,forceMount:n,children:r,container:c}=e,o=f(I,a);return t.createElement(H,{scope:a,forceMount:n},t.Children.map(r,s=>t.createElement(E,{present:n||o.open},t.createElement(G,{asChild:!0,container:c},s))))},x="DialogOverlay",Q=t.forwardRef((e,a)=>{const n=M(x,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=f(x,e.__scopeDialog);return o.modal?t.createElement(E,{present:r||o.open},t.createElement(W,i({},c,{ref:a}))):null}),W=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=f(x,n);return t.createElement(K,{as:L,allowPinchZoom:!0,shards:[c.contentRef]},t.createElement(D.div,i({"data-state":C(c.open)},r,{ref:a,style:{pointerEvents:"auto",...r.style}})))}),b="DialogContent",X=t.forwardRef((e,a)=>{const n=M(b,e.__scopeDialog),{forceMount:r=n.forceMount,...c}=e,o=f(b,e.__scopeDialog);return t.createElement(E,{present:r||o.open},o.modal?t.createElement(ee,i({},c,{ref:a})):t.createElement(te,i({},c,{ref:a})))}),ee=t.forwardRef((e,a)=>{const n=f(b,e.__scopeDialog),r=t.useRef(null),c=v(a,n.contentRef,r);return t.useEffect(()=>{const o=r.current;if(o)return V(o)},[]),t.createElement(P,i({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:$(e.onCloseAutoFocus,o=>{var s;o.preventDefault(),(s=n.triggerRef.current)===null||s===void 0||s.focus()}),onPointerDownOutside:$(e.onPointerDownOutside,o=>{const s=o.detail.originalEvent,l=s.button===0&&s.ctrlKey===!0;(s.button===2||l)&&o.preventDefault()}),onFocusOutside:$(e.onFocusOutside,o=>o.preventDefault())}))}),te=t.forwardRef((e,a)=>{const n=f(b,e.__scopeDialog),r=t.useRef(!1),c=t.useRef(!1);return t.createElement(P,i({},e,{ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s;if((s=e.onCloseAutoFocus)===null||s===void 0||s.call(e,o),!o.defaultPrevented){var l;r.current||(l=n.triggerRef.current)===null||l===void 0||l.focus(),o.preventDefault()}r.current=!1,c.current=!1},onInteractOutside:o=>{var s,l;(s=e.onInteractOutside)===null||s===void 0||s.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const u=o.target;((l=n.triggerRef.current)===null||l===void 0?void 0:l.contains(u))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&c.current&&o.preventDefault()}}))}),P=t.forwardRef((e,a)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:c,onCloseAutoFocus:o,...s}=e,l=f(b,n),u=t.useRef(null),g=v(a,u);return q(),t.createElement(t.Fragment,null,t.createElement(B,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:c,onUnmountAutoFocus:o},t.createElement(S,i({role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":C(l.open)},s,{ref:g,onDismiss:()=>l.onOpenChange(!1)}))),!1)});const oe="DialogClose",ce=t.forwardRef((e,a)=>{const{__scopeDialog:n,...r}=e,c=f(oe,n);return t.createElement(D.button,i({type:"button"},r,{ref:a,onClick:$(e.onClick,()=>c.onOpenChange(!1))}))});function C(e){return e?"open":"closed"}const ne=Y,ae=z,re=J,se=Q,le=X,de=ce,ie="_content_wl0f9_1",fe="_overlay_wl0f9_19",ue="_text_wl0f9_25",pe="_close_wl0f9_34",$e="_card_wl0f9_43",be="_icon_wl0f9_50",p={content:ie,overlay:fe,text:ue,close:pe,card:$e,icon:be},h=t.forwardRef(({isOpen:e,onChange:a,...n},r)=>{const c={close:p.close,content:O(p.content,n.className),overlay:p.overlay,title:O(p.text,n.className)};return d.jsxs(ne,{open:e,...n,children:[d.jsx(ae,{asChild:!0,children:d.jsx(F,{"aria-label":"Open",onClick:()=>a&&a(!0),variant:"primary",children:n.titleBtn})}),d.jsxs(re,{children:[d.jsx(se,{className:c.overlay,ref:r}),d.jsx(le,{asChild:!0,className:c.content,children:d.jsxs(j,{className:p.card,children:[n.title&&d.jsxs(R,{as:"div",className:c.title,children:[d.jsx(R,{as:"h3",variant:"h3",children:n.title}),d.jsx(de,{"aria-label":"Close",className:c.close,onClick:()=>a&&a(!1),children:d.jsx(w,{className:p.icon,iconId:"close"})})]}),n.children]})})]})]})});try{h.displayName="Modal",h.__docgenInfo={description:"",displayName:"Modal",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((isOpen: boolean) => void)"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},titleBtn:{defaultValue:null,description:"",name:"titleBtn",required:!1,type:{name:"string"}}}}}catch{}export{h as M};
