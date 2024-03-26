import{j as i}from"./jsx-runtime-DzgN-JE8.js";import{r as h}from"./index-CO9pbFv1.js";import{C as m}from"./check-box-DWLf6EMK.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icons-i9HqDeSz.js";import"./typography-BUUkRT78.js";import"./clsx-B-dksMZM.js";import"./extends-CCbyfPlC.js";import"./index-Dwm3ODnT.js";import"./index-BT32HCm8.js";import"./index-iWjfmL1M.js";import"./index-CjLZEfCi.js";import"./index-prfkBr7j.js";const R={component:m,tags:["autodocs"],title:"Components/Checkbox"},e={args:{disabled:!1,label:"Click here"}},r={render:d=>{const[o,p]=h.useState(!1);return i.jsx(m,{...d,checked:o,label:"Click here",onChange:()=>p(!o)})}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    disabled: false,
    label: 'Click here'
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};var c,n,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} label={'Click here'} onChange={() => setChecked(!checked)} />;
  }
}`,...(l=(n=r.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const q=["Uncontrolled","Controlled"];export{r as Controlled,e as Uncontrolled,q as __namedExportsOrder,R as default};
