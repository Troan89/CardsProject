import{j as v}from"./jsx-runtime-DzgN-JE8.js";import{r as e}from"./index-CO9pbFv1.js";import{T as L}from"./typography-BUUkRT78.js";import{_}from"./extends-CCbyfPlC.js";import{b as q,c as K,e as I,a as N,f as g}from"./index-Dwm3ODnT.js";import{$ as S,a as T,b as U}from"./index-Bflfiljd.js";import{a as z}from"./index-DtwMkvya.js";import{$ as H}from"./index-CjLZEfCi.js";import{$ as W}from"./index-iWjfmL1M.js";import{c as V}from"./clsx-B-dksMZM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BT32HCm8.js";import"./index-gwQh6S1x.js";const D="Radio",[X,j]=q(D),[Y,Ee]=X(D),J=e.forwardRef((a,s)=>{const{__scopeRadio:r,name:d,checked:n=!1,required:l,disabled:o,value:p="on",onCheck:c,...f}=a,[b,i]=e.useState(null),u=N(s,m=>i(m)),t=e.useRef(!1),$=b?!!b.closest("form"):!0;return e.createElement(Y,{scope:r,checked:n,disabled:o},e.createElement(I.button,_({type:"button",role:"radio","aria-checked":n,"data-state":Z(n),"data-disabled":o?"":void 0,disabled:o,value:p},f,{ref:u,onClick:g(a.onClick,m=>{n||c==null||c(),$&&(t.current=m.isPropagationStopped(),t.current||m.stopPropagation())})})),$&&e.createElement(Q,{control:b,bubbles:!t.current,name:d,value:p,checked:n,required:l,disabled:o,style:{transform:"translateX(-100%)"}}))}),Q=a=>{const{control:s,checked:r,bubbles:d=!0,...n}=a,l=e.useRef(null),o=W(r),p=H(s);return e.useEffect(()=>{const c=l.current,f=window.HTMLInputElement.prototype,i=Object.getOwnPropertyDescriptor(f,"checked").set;if(o!==r&&i){const u=new Event("click",{bubbles:d});i.call(c,r),c.dispatchEvent(u)}},[o,r,d]),e.createElement("input",_({type:"radio","aria-hidden":!0,defaultChecked:r},n,{tabIndex:-1,ref:l,style:{...a.style,...p,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function Z(a){return a?"checked":"unchecked"}const ee=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],O="RadioGroup",[ae,we]=q(O,[S,j]),M=S(),oe=j(),[re,ne]=ae(O),te=e.forwardRef((a,s)=>{const{__scopeRadioGroup:r,name:d,defaultValue:n,value:l,required:o=!1,disabled:p=!1,orientation:c,dir:f,loop:b=!0,onValueChange:i,...u}=a,t=M(r),$=z(f),[m,F]=K({prop:l,defaultProp:n,onChange:i});return e.createElement(re,{scope:r,name:d,required:o,disabled:p,value:m,onValueChange:F},e.createElement(T,_({asChild:!0},t,{orientation:c,dir:$,loop:b}),e.createElement(I.div,_({role:"radiogroup","aria-required":o,"aria-orientation":c,"data-disabled":p?"":void 0,dir:$},u,{ref:s}))))}),le="RadioGroupItem",se=e.forwardRef((a,s)=>{const{__scopeRadioGroup:r,disabled:d,...n}=a,l=ne(le,r),o=l.disabled||d,p=M(r),c=oe(r),f=e.useRef(null),b=N(s,f),i=l.value===n.value,u=e.useRef(!1);return e.useEffect(()=>{const t=m=>{ee.includes(m.key)&&(u.current=!0)},$=()=>u.current=!1;return document.addEventListener("keydown",t),document.addEventListener("keyup",$),()=>{document.removeEventListener("keydown",t),document.removeEventListener("keyup",$)}},[]),e.createElement(U,_({asChild:!0},p,{focusable:!o,active:i}),e.createElement(J,_({disabled:o,required:l.required,checked:i},c,n,{name:l.name,ref:b,onCheck:()=>l.onValueChange(n.value),onKeyDown:g(t=>{t.key==="Enter"&&t.preventDefault()}),onFocus:g(n.onFocus,()=>{var t;u.current&&((t=f.current)===null||t===void 0||t.click())})})))}),ce=te,de=se,pe="_root_1hrop_1",ie="_options_1hrop_9",ue="_option_1hrop_9",fe="_radio_1hrop_25",y={root:pe,options:ie,option:ue,radio:fe},x=e.forwardRef(({className:a,...s},r)=>v.jsx(ce,{className:V(y.root,a),...s,ref:r})),G=e.forwardRef(({className:a,...s},r)=>v.jsx(de,{className:V(y.options,a),ref:r,...s,children:v.jsx("div",{className:y.radio})})),C=e.forwardRef((a,s)=>{const{errorMessage:r,options:d,...n}=a,l=d.map(o=>v.jsxs("div",{className:y.option,children:[v.jsx(G,{value:o.value}),v.jsx(L,{as:"label",htmlFor:o.value,variant:"body2",children:o.label})]},o.value));return v.jsx(x,{...n,onValueChange:o=>{console.log(o)},ref:s,children:l})});try{C.displayName="RadioGroup",C.__docgenInfo={description:"",displayName:"RadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"Options[]"}}}}}catch{}try{G.displayName="RadioGroupItem",G.__docgenInfo={description:"",displayName:"RadioGroupItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="RadioGroupRoot",x.__docgenInfo={description:"",displayName:"RadioGroupRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Ae={component:C,tags:["autodocs"],title:"Components/RadioGroup"},R={args:{options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Grapes",value:"grapes"},{label:"Pineapple",value:"pineapple"},{label:"Apple",value:"apple1"},{label:"Banana",value:"banana1"}]}},h={args:{disabled:!0,options:[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Blueberry",value:"blueberry"},{label:"Grapes",value:"grapes"},{label:"Pineapple",value:"pineapple"},{label:"Apple",value:"apple1"},{label:"Banana",value:"banana1"}]}};var k,E,w;R.parameters={...R.parameters,docs:{...(k=R.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Blueberry',
      value: 'blueberry'
    }, {
      label: 'Grapes',
      value: 'grapes'
    }, {
      label: 'Pineapple',
      value: 'pineapple'
    }, {
      label: 'Apple',
      value: 'apple1'
    }, {
      label: 'Banana',
      value: 'banana1'
    }]
  }
}`,...(w=(E=R.parameters)==null?void 0:E.docs)==null?void 0:w.source}}};var A,P,B;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options: [{
      label: 'Apple',
      value: 'apple'
    }, {
      label: 'Banana',
      value: 'banana'
    }, {
      label: 'Blueberry',
      value: 'blueberry'
    }, {
      label: 'Grapes',
      value: 'grapes'
    }, {
      label: 'Pineapple',
      value: 'pineapple'
    }, {
      label: 'Apple',
      value: 'apple1'
    }, {
      label: 'Banana',
      value: 'banana1'
    }]
  }
}`,...(B=(P=h.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};const Pe=["RadioGroupDefault","RadioGroupDisabled"];export{R as RadioGroupDefault,h as RadioGroupDisabled,Pe as __namedExportsOrder,Ae as default};
