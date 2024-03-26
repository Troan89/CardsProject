import{j as e}from"./jsx-runtime-DzgN-JE8.js";import{R as h}from"./rating-CyB3WMJB.js";import{T as a}from"./typography-BUUkRT78.js";import{T as r,a as y}from"./tableSort-CaxGMcMT.js";import"./index-CO9pbFv1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Icons-i9HqDeSz.js";import"./clsx-B-dksMZM.js";const B={argTypes:{},component:r.Root,tags:["autodocs"],title:"Components/Table"},p=[{answer:"Saturday",emoji:"🙂",number:1,question:"What day is it today?",username:"Jon"},{answer:"JavaScript",emoji:"💻",number:2,question:"What is the best programming language?",username:"Lin"},{answer:'"Master and Margarita"',emoji:"🌈",number:3,question:"What should I read?",username:"Paul"},{answer:'"The Imitation Game"',emoji:"🎬",number:4,question:"What movie should I watch?",username:"Max"},{answer:"Artificial Intelligence",emoji:"🤖",number:5,question:"What is AI?",username:"Alex"}],T={args:{columns:[{column:1,sortBy:"number",title:"Number"},{column:2,sortBy:"question",title:"Question"},{column:3,sortBy:"answer",title:"Answer"},{column:4,sortBy:"username",title:"Username"},{column:5,sortBy:"rating",sortable:!1,title:"Rating"},{column:6,sortBy:"emoji",sortable:!1,title:"Emoji"}],onSort:n=>console.log(n),sort:null},render:n=>e.jsxs(r.Root,{children:[e.jsx(y,{...n}),e.jsx(r.Body,{children:p.map((l,t)=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{children:e.jsx(a,{variant:"body2",children:l.number})}),e.jsx(r.Cell,{children:e.jsx(a,{variant:"body2",children:l.question})}),e.jsx(r.Cell,{children:e.jsx(a,{variant:"body2",children:l.answer})}),e.jsx(r.Cell,{children:e.jsxs(a,{variant:"body2",children:[" ",l.username]})}),e.jsx(r.Cell,{children:e.jsx(h,{value:4})}),e.jsx(r.Cell,{children:e.jsx(a,{variant:"body2",children:l.emoji})})]},t))})]})},s=T,o={args:{},render:n=>e.jsxs(r.Root,{...n,children:[e.jsx(r.Head,{children:e.jsxs(r.Row,{children:[e.jsx(r.HeadCell,{columns:5,children:e.jsx(a,{variant:"subtitle2",children:"Вопрос"})}),e.jsx(r.HeadCell,{columns:5,children:e.jsx(a,{variant:"subtitle2",children:"Ответ"})}),e.jsx(r.HeadCell,{columns:2,children:e.jsx(a,{variant:"subtitle2",children:"Рейтинг"})}),e.jsx(r.HeadCell,{columns:3,children:e.jsx(a,{variant:"subtitle2",children:"Смайлик"})})]})}),e.jsx(r.Body,{children:p.map((l,t)=>e.jsxs(r.Row,{children:[e.jsx(r.Cell,{rows:5,children:e.jsx(a,{variant:"body2",children:l.question})}),e.jsx(r.Cell,{rows:5,children:e.jsx(a,{variant:"body2",children:l.answer})}),e.jsx(r.Cell,{rows:2,children:e.jsx(h,{value:4})}),e.jsx(r.Cell,{rows:3,children:e.jsx(a,{variant:"body2",children:l.emoji})})]},t))})]})};var i,u,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:"Template",...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var m,c,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: args => {
    return <Table.Root {...args}>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.HeadCell columns={5}>\r
              <Typography variant={'subtitle2'}>Вопрос</Typography>\r
            </Table.HeadCell>\r
            <Table.HeadCell columns={5}>\r
              <Typography variant={'subtitle2'}>Ответ</Typography>\r
            </Table.HeadCell>\r
            <Table.HeadCell columns={2}>\r
              <Typography variant={'subtitle2'}>Рейтинг</Typography>\r
            </Table.HeadCell>\r
            <Table.HeadCell columns={3}>\r
              <Typography variant={'subtitle2'}>Смайлик</Typography>\r
            </Table.HeadCell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          {options.map((option, index) => <Table.Row key={index}>\r
              <Table.Cell rows={5}>\r
                <Typography variant={'body2'}>{option.question}</Typography>\r
              </Table.Cell>\r
              <Table.Cell rows={5}>\r
                <Typography variant={'body2'}>{option.answer}</Typography>\r
              </Table.Cell>\r
              <Table.Cell rows={2}>\r
                <Rating value={4} />\r
              </Table.Cell>\r
              <Table.Cell rows={3}>\r
                <Typography variant={'body2'}>{option.emoji}</Typography>\r
              </Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table.Root>;
  }
}`,...(b=(c=o.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};const q=["TabFiveCols","TabFourCols"];export{s as TabFiveCols,o as TabFourCols,q as __namedExportsOrder,B as default};
