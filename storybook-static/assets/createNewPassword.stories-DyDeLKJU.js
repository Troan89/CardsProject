import './_commonjsHelpers-BosuxZz1.js'
import './Icons-i9HqDeSz.js'
import './clsx-B-dksMZM.js'
import './index-CO9pbFv1.js'
import './textField-DaZ4w6xp.js'

import { B as g } from './button-BXHm91ri.js'
import { C as x } from './card-CFWRH6tA.js'
import { j as r } from './jsx-runtime-DzgN-JE8.js'
import { T as i } from './typography-BUUkRT78.js'
import { F as _, u as f, t as h, z as n } from './zod-C96BnJbV.js'
const y = '_wrapper_fc6fq_1',
  j = '_content_fc6fq_11',
  C = '_info_fc6fq_33',
  t = { content: j, info: C, wrapper: y },
  N = n.object({ password: n.string().min(3) }),
  o = ({ onSubmit: e }) => {
    let a
    const {
      control: m,
      formState: { errors: l },
      handleSubmit: u,
      register: w,
    } = f({ defaultValues: { password: '' }, resolver: h(N) })

    return r.jsx(x, {
      children: r.jsxs('form', {
        children: [
          r.jsx('div', { children: r.jsx(i, { children: 'Create new password', variant: 'h1' }) }),
          r.jsx(_, {
            ...w('password'),
            control: m,
            error: (a = l.password) == null ? void 0 : a.message,
            label: 'Password',
            type: 'password',
          }),
          r.jsx('div', {
            children: r.jsx(i, {
              children: 'Create new password and we will send you further instructions to email',
              className: t.info,
            }),
          }),
          r.jsx(g, {
            children: 'Create new password',
            fullWidth: !0,
            type: 'submit',
            variant: 'primary',
          }),
        ],
        className: t.content,
        onSubmit: u(e),
      }),
      className: t.wrapper,
    })
  }

try {
  ;(o.displayName = 'CreateNewPassword'),
    (o.__docgenInfo = {
      description: '',
      displayName: 'CreateNewPassword',
      props: {
        onSubmit: {
          defaultValue: null,
          description: '',
          name: 'onSubmit',
          required: !0,
          type: { name: '(data: { password: string; }) => void' },
        },
      },
    })
} catch {}
const V = {
    component: o,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    title: 'Auth/CreateNewPasswordPage',
  },
  s = {
    args: {
      onSubmit: e => {
        console.log(e)
      },
    },
  }
let d, c, p

s.parameters = {
  ...s.parameters,
  docs: {
    ...((d = s.parameters) == null ? void 0 : d.docs),
    source: {
      originalSource: `{
  args: {
    onSubmit: data => {
      console.log(data);
    }
  }
}`,
      ...((p = (c = s.parameters) == null ? void 0 : c.docs) == null ? void 0 : p.source),
    },
  },
}
const z = ['CreateNewPasswordDefault']

export { V as default, s as CreateNewPasswordDefault, z as __namedExportsOrder }
