import{j as e}from"./jsx-runtime-DzgN-JE8.js";import{r as m}from"./index-CO9pbFv1.js";import{B as n}from"./button-BXHm91ri.js";import{T as a}from"./typography-BUUkRT78.js";import{M as i}from"./modal-Br9809uT.js";import"./_commonjsHelpers-BosuxZz1.js";import"./clsx-B-dksMZM.js";import"./Icons-i9HqDeSz.js";import"./card-CFWRH6tA.js";import"./extends-CCbyfPlC.js";import"./index-Dwm3ODnT.js";import"./index-BT32HCm8.js";import"./index-gwQh6S1x.js";import"./Combination-BY04mCsb.js";import"./index-prfkBr7j.js";const T={component:i,tags:["autodocs"],title:"Components/Modal"},t={args:{isOpen:!0,onChange:()=>{},title:"Modal"},render:p=>{const[d,r]=m.useState(!1);return e.jsx(e.Fragment,{children:e.jsxs(i,{...p,isOpen:d,onChange:r,title:"Delete card",titleBtn:"Delete card",children:[e.jsxs(a,{as:"div",style:{fontFamily:"Helvetica, sans-serif",padding:"18px 24px"},children:["Do you really want to remove ",e.jsx("strong",{children:"Card Name?"})," All cards will be deleted."]}),e.jsxs(a,{as:"div",style:{display:"flex",justifyContent:"space-between",padding:"0 24px"},children:[e.jsx(n,{onClick:()=>r(!1),style:{marginLeft:"0"},variant:"secondary",children:"Cansel"}),e.jsx(n,{variant:"primary",children:"Delete card"})]})]})})}};var o,s,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onChange: () => {},
    title: 'Modal'
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <>\r
        <Modal {...args} isOpen={open} onChange={setOpen} title={'Delete card'} titleBtn={'Delete card'}>\r
          <Typography as={'div'} style={{
          fontFamily: 'Helvetica, sans-serif',
          padding: '18px 24px'
        }}>\r
            Do you really want to remove <strong>Card Name?</strong> All cards will be deleted.\r
          </Typography>\r
          <Typography as={'div'} style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 24px'
        }}>\r
            <Button onClick={() => setOpen(false)} style={{
            marginLeft: '0'
          }} variant={'secondary'}>\r
              Cansel\r
            </Button>\r
            <Button variant={'primary'}>Delete card</Button>\r
          </Typography>\r
        </Modal>\r
      </>;
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const F=["ModalFromDeleteCard"];export{t as ModalFromDeleteCard,F as __namedExportsOrder,T as default};
