import{j as r}from"./jsx-runtime-DzgN-JE8.js";import{z as n,u as f,F as _,t as h}from"./zod-C96BnJbV.js";import{B as g}from"./button-BXHm91ri.js";import{C as x}from"./card-CFWRH6tA.js";import{T as i}from"./typography-BUUkRT78.js";import"./index-CO9pbFv1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./textField-DaZ4w6xp.js";import"./Icons-i9HqDeSz.js";import"./clsx-B-dksMZM.js";const y="_wrapper_fc6fq_1",j="_content_fc6fq_11",C="_info_fc6fq_33",t={wrapper:y,content:j,info:C},N=n.object({password:n.string().min(3)}),o=({onSubmit:e})=>{var a;const{control:m,formState:{errors:l},handleSubmit:u,register:w}=f({defaultValues:{password:""},resolver:h(N)});return r.jsx(x,{className:t.wrapper,children:r.jsxs("form",{className:t.content,onSubmit:u(e),children:[r.jsx("div",{children:r.jsx(i,{variant:"h1",children:"Create new password"})}),r.jsx(_,{...w("password"),control:m,error:(a=l.password)==null?void 0:a.message,label:"Password",type:"password"}),r.jsx("div",{children:r.jsx(i,{className:t.info,children:"Create new password and we will send you further instructions to email"})}),r.jsx(g,{fullWidth:!0,type:"submit",variant:"primary",children:"Create new password"})]})})};try{o.displayName="CreateNewPassword",o.__docgenInfo={description:"",displayName:"CreateNewPassword",props:{onSubmit:{defaultValue:null,description:"",name:"onSubmit",required:!0,type:{name:"(data: { password: string; }) => void"}}}}}catch{}const V={component:o,parameters:{layout:"centered"},tags:["autodocs"],title:"Auth/CreatePassword"},s={args:{onSubmit:e=>{console.log(e)}}};var d,c,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    onSubmit: data => {
      console.log(data);
    }
  }
}`,...(p=(c=s.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const z=["CreateNewPasswordDefault"];export{s as CreateNewPasswordDefault,z as __namedExportsOrder,V as default};