import { r as D } from './index-CO9pbFv1.js'
import './index-BT32HCm8.js'
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function k() {
  return (
    (k = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    k.apply(this, arguments)
  )
}
var V
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(V || (V = {}))
const Ut = 'popstate'
function xr(e) {
  e === void 0 && (e = {})
  function t(n, a) {
    let { pathname: l, search: s, hash: h } = n.location
    return $e(
      '',
      { pathname: l, search: s, hash: h },
      (a.state && a.state.usr) || null,
      (a.state && a.state.key) || 'default'
    )
  }
  function r(n, a) {
    return typeof a == 'string' ? a : ye(a)
  }
  return Er(t, r, null, e)
}
function U(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function Ce(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function Sr() {
  return Math.random().toString(36).substr(2, 8)
}
function _t(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function $e(e, t, r, n) {
  return (
    r === void 0 && (r = null),
    k(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? we(t) : t,
      { state: r, key: (t && t.key) || n || Sr() }
    )
  )
}
function ye(e) {
  let { pathname: t = '/', search: r = '', hash: n = '' } = e
  return (
    r && r !== '?' && (t += r.charAt(0) === '?' ? r : '?' + r),
    n && n !== '#' && (t += n.charAt(0) === '#' ? n : '#' + n),
    t
  )
}
function we(e) {
  let t = {}
  if (e) {
    let r = e.indexOf('#')
    r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)))
    let n = e.indexOf('?')
    n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e)
  }
  return t
}
function Er(e, t, r, n) {
  n === void 0 && (n = {})
  let { window: a = document.defaultView, v5Compat: l = !1 } = n,
    s = a.history,
    h = V.Pop,
    c = null,
    m = f()
  m == null && ((m = 0), s.replaceState(k({}, s.state, { idx: m }), ''))
  function f() {
    return (s.state || { idx: null }).idx
  }
  function y() {
    h = V.Pop
    let v = f(),
      b = v == null ? null : v - m
    ;(m = v), c && c({ action: h, location: S.location, delta: b })
  }
  function R(v, b) {
    h = V.Push
    let P = $e(S.location, v, b)
    r && r(P, v), (m = f() + 1)
    let F = _t(P, m),
      N = S.createHref(P)
    try {
      s.pushState(F, '', N)
    } catch (q) {
      if (q instanceof DOMException && q.name === 'DataCloneError') throw q
      a.location.assign(N)
    }
    l && c && c({ action: h, location: S.location, delta: 1 })
  }
  function B(v, b) {
    h = V.Replace
    let P = $e(S.location, v, b)
    r && r(P, v), (m = f())
    let F = _t(P, m),
      N = S.createHref(P)
    s.replaceState(F, '', N), l && c && c({ action: h, location: S.location, delta: 0 })
  }
  function M(v) {
    let b = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      P = typeof v == 'string' ? v : ye(v)
    return (
      (P = P.replace(/ $/, '%20')),
      U(b, 'No window.location.(origin|href) available to create URL for href: ' + P),
      new URL(P, b)
    )
  }
  let S = {
    get action() {
      return h
    },
    get location() {
      return e(a, s)
    },
    listen(v) {
      if (c) throw new Error('A history only accepts one active listener')
      return (
        a.addEventListener(Ut, y),
        (c = v),
        () => {
          a.removeEventListener(Ut, y), (c = null)
        }
      )
    },
    createHref(v) {
      return t(a, v)
    },
    createURL: M,
    encodeLocation(v) {
      let b = M(v)
      return { pathname: b.pathname, search: b.search, hash: b.hash }
    },
    push: R,
    replace: B,
    go(v) {
      return s.go(v)
    },
  }
  return S
}
var z
;(function (e) {
  ;(e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error')
})(z || (z = {}))
const Pr = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function Dr(e) {
  return e.index === !0
}
function ct(e, t, r, n) {
  return (
    r === void 0 && (r = []),
    n === void 0 && (n = {}),
    e.map((a, l) => {
      let s = [...r, l],
        h = typeof a.id == 'string' ? a.id : s.join('-')
      if (
        (U(a.index !== !0 || !a.children, 'Cannot specify children on an index route'),
        U(
          !n[h],
          'Found a route id collision on id "' +
            h +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Dr(a))
      ) {
        let c = k({}, a, t(a), { id: h })
        return (n[h] = c), c
      } else {
        let c = k({}, a, t(a), { id: h, children: void 0 })
        return (n[h] = c), a.children && (c.children = ct(a.children, t, s, n)), c
      }
    })
  )
}
function ke(e, t, r) {
  r === void 0 && (r = '/')
  let n = typeof t == 'string' ? we(t) : t,
    a = ue(n.pathname || '/', r)
  if (a == null) return null
  let l = Kt(e)
  Cr(l)
  let s = null
  for (let h = 0; s == null && h < l.length; ++h) {
    let c = Br(a)
    s = Nr(l[h], c)
  }
  return s
}
function Lr(e, t) {
  let { route: r, pathname: n, params: a } = e
  return { id: r.id, pathname: n, params: a, data: t[r.id], handle: r.handle }
}
function Kt(e, t, r, n) {
  t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = '')
  let a = (l, s, h) => {
    let c = {
      relativePath: h === void 0 ? l.path || '' : h,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: s,
      route: l,
    }
    c.relativePath.startsWith('/') &&
      (U(
        c.relativePath.startsWith(n),
        'Absolute route path "' +
          c.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (c.relativePath = c.relativePath.slice(n.length)))
    let m = ve([n, c.relativePath]),
      f = r.concat(c)
    l.children &&
      l.children.length > 0 &&
      (U(
        l.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + m + '".')
      ),
      Kt(l.children, t, f, m)),
      !(l.path == null && !l.index) && t.push({ path: m, score: Ar(m, l.index), routesMeta: f })
  }
  return (
    e.forEach((l, s) => {
      var h
      if (l.path === '' || !((h = l.path) != null && h.includes('?'))) a(l, s)
      else for (let c of Jt(l.path)) a(l, s, c)
    }),
    t
  )
}
function Jt(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [r, ...n] = t,
    a = r.endsWith('?'),
    l = r.replace(/\?$/, '')
  if (n.length === 0) return a ? [l, ''] : [l]
  let s = Jt(n.join('/')),
    h = []
  return (
    h.push(...s.map(c => (c === '' ? l : [l, c].join('/')))),
    a && h.push(...s),
    h.map(c => (e.startsWith('/') && c === '' ? '/' : c))
  )
}
function Cr(e) {
  e.sort((t, r) =>
    t.score !== r.score
      ? r.score - t.score
      : jr(
          t.routesMeta.map(n => n.childrenIndex),
          r.routesMeta.map(n => n.childrenIndex)
        )
  )
}
const Mr = /^:[\w-]+$/,
  Tr = 3,
  Ur = 2,
  _r = 1,
  Fr = 10,
  Or = -2,
  Ft = e => e === '*'
function Ar(e, t) {
  let r = e.split('/'),
    n = r.length
  return (
    r.some(Ft) && (n += Or),
    t && (n += Ur),
    r.filter(a => !Ft(a)).reduce((a, l) => a + (Mr.test(l) ? Tr : l === '' ? _r : Fr), n)
  )
}
function jr(e, t) {
  return e.length === t.length && e.slice(0, -1).every((n, a) => n === t[a])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function Nr(e, t) {
  let { routesMeta: r } = e,
    n = {},
    a = '/',
    l = []
  for (let s = 0; s < r.length; ++s) {
    let h = r[s],
      c = s === r.length - 1,
      m = a === '/' ? t : t.slice(a.length) || '/',
      f = ft({ path: h.relativePath, caseSensitive: h.caseSensitive, end: c }, m)
    if (!f) return null
    Object.assign(n, f.params)
    let y = h.route
    l.push({
      params: n,
      pathname: ve([a, f.pathname]),
      pathnameBase: Wr(ve([a, f.pathnameBase])),
      route: y,
    }),
      f.pathnameBase !== '/' && (a = ve([a, f.pathnameBase]))
  }
  return l
}
function ft(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [r, n] = Ir(e.path, e.caseSensitive, e.end),
    a = t.match(r)
  if (!a) return null
  let l = a[0],
    s = l.replace(/(.)\/+$/, '$1'),
    h = a.slice(1)
  return {
    params: n.reduce((m, f, y) => {
      let { paramName: R, isOptional: B } = f
      if (R === '*') {
        let S = h[y] || ''
        s = l.slice(0, l.length - S.length).replace(/(.)\/+$/, '$1')
      }
      const M = h[y]
      return B && !M ? (m[R] = void 0) : (m[R] = (M || '').replace(/%2F/g, '/')), m
    }, {}),
    pathname: l,
    pathnameBase: s,
    pattern: e,
  }
}
function Ir(e, t, r) {
  t === void 0 && (t = !1),
    r === void 0 && (r = !0),
    Ce(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    )
  let n = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, h, c) => (
            n.push({ paramName: h, isOptional: c != null }), c ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        )
  return (
    e.endsWith('*')
      ? (n.push({ paramName: '*' }), (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : r
      ? (a += '\\/*$')
      : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), n]
  )
}
function Br(e) {
  try {
    return e
      .split('/')
      .map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      Ce(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    )
  }
}
function ue(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let r = t.endsWith('/') ? t.length - 1 : t.length,
    n = e.charAt(r)
  return n && n !== '/' ? null : e.slice(r) || '/'
}
function zr(e, t) {
  t === void 0 && (t = '/')
  let { pathname: r, search: n = '', hash: a = '' } = typeof e == 'string' ? we(e) : e
  return { pathname: r ? (r.startsWith('/') ? r : kr(r, t)) : t, search: $r(n), hash: Vr(a) }
}
function kr(e, t) {
  let r = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach(a => {
      a === '..' ? r.length > 1 && r.pop() : a !== '.' && r.push(a)
    }),
    r.length > 1 ? r.join('/') : '/'
  )
}
function st(e, t, r, n) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(n) + '].  Please separate it out to the ') +
    ('`to.' + r + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function qt(e) {
  return e.filter((t, r) => r === 0 || (t.route.path && t.route.path.length > 0))
}
function Qe(e, t) {
  let r = qt(e)
  return t
    ? r.map((n, a) => (a === e.length - 1 ? n.pathname : n.pathnameBase))
    : r.map(n => n.pathnameBase)
}
function Ze(e, t, r, n) {
  n === void 0 && (n = !1)
  let a
  typeof e == 'string'
    ? (a = we(e))
    : ((a = k({}, e)),
      U(!a.pathname || !a.pathname.includes('?'), st('?', 'pathname', 'search', a)),
      U(!a.pathname || !a.pathname.includes('#'), st('#', 'pathname', 'hash', a)),
      U(!a.search || !a.search.includes('#'), st('#', 'search', 'hash', a)))
  let l = e === '' || a.pathname === '',
    s = l ? '/' : a.pathname,
    h
  if (s == null) h = r
  else {
    let y = t.length - 1
    if (!n && s.startsWith('..')) {
      let R = s.split('/')
      for (; R[0] === '..'; ) R.shift(), (y -= 1)
      a.pathname = R.join('/')
    }
    h = y >= 0 ? t[y] : '/'
  }
  let c = zr(a, h),
    m = s && s !== '/' && s.endsWith('/'),
    f = (l || s === '.') && r.endsWith('/')
  return !c.pathname.endsWith('/') && (m || f) && (c.pathname += '/'), c
}
const ve = e => e.join('/').replace(/\/\/+/g, '/'),
  Wr = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  $r = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Vr = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class yt {
  constructor(t, r, n, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = r || ''),
      (this.internal = a),
      n instanceof Error ? ((this.data = n.toString()), (this.error = n)) : (this.data = n)
  }
}
function Hr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const Yt = ['post', 'put', 'patch', 'delete'],
  Kr = new Set(Yt),
  Jr = ['get', ...Yt],
  qr = new Set(Jr),
  Yr = new Set([301, 302, 303, 307, 308]),
  Gr = new Set([307, 308]),
  ut = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Xr = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Ne = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  Gt = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Qr = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Xt = 'remix-router-transitions'
function Zr(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    r = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    n = !r
  U(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter')
  let a
  if (e.mapRouteProperties) a = e.mapRouteProperties
  else if (e.detectErrorBoundary) {
    let i = e.detectErrorBoundary
    a = o => ({ hasErrorBoundary: i(o) })
  } else a = Qr
  let l = {},
    s = ct(e.routes, a, void 0, l),
    h,
    c = e.basename || '/',
    m = k(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    f = null,
    y = new Set(),
    R = null,
    B = null,
    M = null,
    S = e.hydrationData != null,
    v = ke(s, e.history.location, c),
    b = null
  if (v == null) {
    let i = ee(404, { pathname: e.history.location.pathname }),
      { matches: o, route: d } = kt(s)
    ;(v = o), (b = { [d.id]: i })
  }
  let P,
    F = v.some(i => i.route.lazy),
    N = v.some(i => i.route.loader)
  if (F) P = !1
  else if (!N) P = !0
  else if (m.v7_partialHydration) {
    let i = e.hydrationData ? e.hydrationData.loaderData : null,
      o = e.hydrationData ? e.hydrationData.errors : null,
      d = p =>
        p.route.loader
          ? p.route.loader.hydrate === !0
            ? !1
            : (i && i[p.route.id] !== void 0) || (o && o[p.route.id] !== void 0)
          : !0
    if (o) {
      let p = v.findIndex(g => o[g.route.id] !== void 0)
      P = v.slice(0, p + 1).every(d)
    } else P = v.every(d)
  } else P = e.hydrationData != null
  let q,
    u = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: v,
      initialized: P,
      navigation: ut,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || b,
      fetchers: new Map(),
      blockers: new Map(),
    },
    A = V.Pop,
    W = !1,
    j,
    Y = !1,
    G = new Map(),
    te = null,
    Re = !1,
    de = !1,
    He = [],
    Ke = [],
    $ = new Map(),
    Je = 0,
    Ue = -1,
    xe = new Map(),
    ne = new Set(),
    Se = new Map(),
    _e = new Map(),
    ae = new Set(),
    ce = new Map(),
    fe = new Map(),
    rt = !1
  function lr() {
    if (
      ((f = e.history.listen(i => {
        let { action: o, location: d, delta: p } = i
        if (rt) {
          rt = !1
          return
        }
        Ce(
          fe.size === 0 || p != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        )
        let g = Ct({ currentLocation: u.location, nextLocation: d, historyAction: o })
        if (g && p != null) {
          ;(rt = !0),
            e.history.go(p * -1),
            Ye(g, {
              state: 'blocked',
              location: d,
              proceed() {
                Ye(g, { state: 'proceeding', proceed: void 0, reset: void 0, location: d }),
                  e.history.go(p)
              },
              reset() {
                let C = new Map(u.blockers)
                C.set(g, Ne), Q({ blockers: C })
              },
            })
          return
        }
        return he(o, d)
      })),
      r)
    ) {
      cn(t, G)
      let i = () => fn(t, G)
      t.addEventListener('pagehide', i), (te = () => t.removeEventListener('pagehide', i))
    }
    return u.initialized || he(V.Pop, u.location, { initialHydration: !0 }), q
  }
  function sr() {
    f && f(),
      te && te(),
      y.clear(),
      j && j.abort(),
      u.fetchers.forEach((i, o) => qe(o)),
      u.blockers.forEach((i, o) => Lt(o))
  }
  function ur(i) {
    return y.add(i), () => y.delete(i)
  }
  function Q(i, o) {
    o === void 0 && (o = {}), (u = k({}, u, i))
    let d = [],
      p = []
    m.v7_fetcherPersist &&
      u.fetchers.forEach((g, C) => {
        g.state === 'idle' && (ae.has(C) ? p.push(C) : d.push(C))
      }),
      [...y].forEach(g =>
        g(u, {
          deletedFetchers: p,
          unstable_viewTransitionOpts: o.viewTransitionOpts,
          unstable_flushSync: o.flushSync === !0,
        })
      ),
      m.v7_fetcherPersist && (d.forEach(g => u.fetchers.delete(g)), p.forEach(g => qe(g)))
  }
  function Fe(i, o, d) {
    var p, g
    let { flushSync: C } = d === void 0 ? {} : d,
      E =
        u.actionData != null &&
        u.navigation.formMethod != null &&
        re(u.navigation.formMethod) &&
        u.navigation.state === 'loading' &&
        ((p = i.state) == null ? void 0 : p._isRedirect) !== !0,
      x
    o.actionData
      ? Object.keys(o.actionData).length > 0
        ? (x = o.actionData)
        : (x = null)
      : E
      ? (x = u.actionData)
      : (x = null)
    let w = o.loaderData ? zt(u.loaderData, o.loaderData, o.matches || [], o.errors) : u.loaderData,
      T = u.blockers
    T.size > 0 && ((T = new Map(T)), T.forEach((I, J) => T.set(J, Ne)))
    let H =
      W === !0 ||
      (u.navigation.formMethod != null &&
        re(u.navigation.formMethod) &&
        ((g = i.state) == null ? void 0 : g._isRedirect) !== !0)
    h && ((s = h), (h = void 0)),
      Re ||
        A === V.Pop ||
        (A === V.Push
          ? e.history.push(i, i.state)
          : A === V.Replace && e.history.replace(i, i.state))
    let L
    if (A === V.Pop) {
      let I = G.get(u.location.pathname)
      I && I.has(i.pathname)
        ? (L = { currentLocation: u.location, nextLocation: i })
        : G.has(i.pathname) && (L = { currentLocation: i, nextLocation: u.location })
    } else if (Y) {
      let I = G.get(u.location.pathname)
      I ? I.add(i.pathname) : ((I = new Set([i.pathname])), G.set(u.location.pathname, I)),
        (L = { currentLocation: u.location, nextLocation: i })
    }
    Q(
      k({}, o, {
        actionData: x,
        loaderData: w,
        historyAction: A,
        location: i,
        initialized: !0,
        navigation: ut,
        revalidation: 'idle',
        restoreScrollPosition: Tt(i, o.matches || u.matches),
        preventScrollReset: H,
        blockers: T,
      }),
      { viewTransitionOpts: L, flushSync: C === !0 }
    ),
      (A = V.Pop),
      (W = !1),
      (Y = !1),
      (Re = !1),
      (de = !1),
      (He = []),
      (Ke = [])
  }
  async function Rt(i, o) {
    if (typeof i == 'number') {
      e.history.go(i)
      return
    }
    let d = ht(
        u.location,
        u.matches,
        c,
        m.v7_prependBasename,
        i,
        m.v7_relativeSplatPath,
        o == null ? void 0 : o.fromRouteId,
        o == null ? void 0 : o.relative
      ),
      { path: p, submission: g, error: C } = Ot(m.v7_normalizeFormMethod, !1, d, o),
      E = u.location,
      x = $e(u.location, p, o && o.state)
    x = k({}, x, e.history.encodeLocation(x))
    let w = o && o.replace != null ? o.replace : void 0,
      T = V.Push
    w === !0
      ? (T = V.Replace)
      : w === !1 ||
        (g != null &&
          re(g.formMethod) &&
          g.formAction === u.location.pathname + u.location.search &&
          (T = V.Replace))
    let H = o && 'preventScrollReset' in o ? o.preventScrollReset === !0 : void 0,
      L = (o && o.unstable_flushSync) === !0,
      I = Ct({ currentLocation: E, nextLocation: x, historyAction: T })
    if (I) {
      Ye(I, {
        state: 'blocked',
        location: x,
        proceed() {
          Ye(I, { state: 'proceeding', proceed: void 0, reset: void 0, location: x }), Rt(i, o)
        },
        reset() {
          let J = new Map(u.blockers)
          J.set(I, Ne), Q({ blockers: J })
        },
      })
      return
    }
    return await he(T, x, {
      submission: g,
      pendingError: C,
      preventScrollReset: H,
      replace: o && o.replace,
      enableViewTransition: o && o.unstable_viewTransition,
      flushSync: L,
    })
  }
  function dr() {
    if ((nt(), Q({ revalidation: 'loading' }), u.navigation.state !== 'submitting')) {
      if (u.navigation.state === 'idle') {
        he(u.historyAction, u.location, { startUninterruptedRevalidation: !0 })
        return
      }
      he(A || u.historyAction, u.navigation.location, { overrideNavigation: u.navigation })
    }
  }
  async function he(i, o, d) {
    j && j.abort(),
      (j = null),
      (A = i),
      (Re = (d && d.startUninterruptedRevalidation) === !0),
      wr(u.location, u.matches),
      (W = (d && d.preventScrollReset) === !0),
      (Y = (d && d.enableViewTransition) === !0)
    let p = h || s,
      g = d && d.overrideNavigation,
      C = ke(p, o, c),
      E = (d && d.flushSync) === !0
    if (!C) {
      let J = ee(404, { pathname: o.pathname }),
        { matches: Z, route: K } = kt(p)
      at(), Fe(o, { matches: Z, loaderData: {}, errors: { [K.id]: J } }, { flushSync: E })
      return
    }
    if (
      u.initialized &&
      !de &&
      an(u.location, o) &&
      !(d && d.submission && re(d.submission.formMethod))
    ) {
      Fe(o, { matches: C }, { flushSync: E })
      return
    }
    j = new AbortController()
    let x = Be(e.history, o, j.signal, d && d.submission),
      w,
      T
    if (d && d.pendingError) T = { [We(C).route.id]: d.pendingError }
    else if (d && d.submission && re(d.submission.formMethod)) {
      let J = await cr(x, o, d.submission, C, { replace: d.replace, flushSync: E })
      if (J.shortCircuited) return
      ;(w = J.pendingActionData),
        (T = J.pendingActionError),
        (g = dt(o, d.submission)),
        (E = !1),
        (x = new Request(x.url, { signal: x.signal }))
    }
    let {
      shortCircuited: H,
      loaderData: L,
      errors: I,
    } = await fr(
      x,
      o,
      C,
      g,
      d && d.submission,
      d && d.fetcherSubmission,
      d && d.replace,
      d && d.initialHydration === !0,
      E,
      w,
      T
    )
    H ||
      ((j = null),
      Fe(o, k({ matches: C }, w ? { actionData: w } : {}, { loaderData: L, errors: I })))
  }
  async function cr(i, o, d, p, g) {
    g === void 0 && (g = {}), nt()
    let C = un(o, d)
    Q({ navigation: C }, { flushSync: g.flushSync === !0 })
    let E,
      x = pt(p, o)
    if (!x.route.action && !x.route.lazy)
      E = {
        type: z.error,
        error: ee(405, { method: i.method, pathname: o.pathname, routeId: x.route.id }),
      }
    else if (((E = await Ie('action', i, x, p, l, a, c, m.v7_relativeSplatPath)), i.signal.aborted))
      return { shortCircuited: !0 }
    if (ge(E)) {
      let w
      return (
        g && g.replace != null
          ? (w = g.replace)
          : (w = E.location === u.location.pathname + u.location.search),
        await Oe(u, E, { submission: d, replace: w }),
        { shortCircuited: !0 }
      )
    }
    if (Le(E)) {
      let w = We(p, x.route.id)
      return (
        (g && g.replace) !== !0 && (A = V.Push),
        { pendingActionData: {}, pendingActionError: { [w.route.id]: E.error } }
      )
    }
    if (pe(E)) throw ee(400, { type: 'defer-action' })
    return { pendingActionData: { [x.route.id]: E.data } }
  }
  async function fr(i, o, d, p, g, C, E, x, w, T, H) {
    let L = p || dt(o, g),
      I = g || C || Vt(L),
      J = h || s,
      [Z, K] = At(
        e.history,
        u,
        d,
        I,
        o,
        m.v7_partialHydration && x === !0,
        de,
        He,
        Ke,
        ae,
        Se,
        ne,
        J,
        c,
        T,
        H
      )
    if (
      (at(_ => !(d && d.some(O => O.route.id === _)) || (Z && Z.some(O => O.route.id === _))),
      (Ue = ++Je),
      Z.length === 0 && K.length === 0)
    ) {
      let _ = Pt()
      return (
        Fe(
          o,
          k(
            { matches: d, loaderData: {}, errors: H || null },
            T ? { actionData: T } : {},
            _ ? { fetchers: new Map(u.fetchers) } : {}
          ),
          { flushSync: w }
        ),
        { shortCircuited: !0 }
      )
    }
    if (!Re && (!m.v7_partialHydration || !x)) {
      K.forEach(O => {
        let X = u.fetchers.get(O.key),
          Xe = ze(void 0, X ? X.data : void 0)
        u.fetchers.set(O.key, Xe)
      })
      let _ = T || u.actionData
      Q(
        k(
          { navigation: L },
          _ ? (Object.keys(_).length === 0 ? { actionData: null } : { actionData: _ }) : {},
          K.length > 0 ? { fetchers: new Map(u.fetchers) } : {}
        ),
        { flushSync: w }
      )
    }
    K.forEach(_ => {
      $.has(_.key) && oe(_.key), _.controller && $.set(_.key, _.controller)
    })
    let Ee = () => K.forEach(_ => oe(_.key))
    j && j.signal.addEventListener('abort', Ee)
    let { results: it, loaderResults: Pe, fetcherResults: le } = await xt(u.matches, d, Z, K, i)
    if (i.signal.aborted) return { shortCircuited: !0 }
    j && j.signal.removeEventListener('abort', Ee), K.forEach(_ => $.delete(_.key))
    let me = Wt(it)
    if (me) {
      if (me.idx >= Z.length) {
        let _ = K[me.idx - Z.length].key
        ne.add(_)
      }
      return await Oe(u, me.result, { replace: E }), { shortCircuited: !0 }
    }
    let { loaderData: ot, errors: je } = Bt(u, d, Z, Pe, H, K, le, ce)
    ce.forEach((_, O) => {
      _.subscribe(X => {
        ;(X || _.done) && ce.delete(O)
      })
    }),
      m.v7_partialHydration &&
        x &&
        u.errors &&
        Object.entries(u.errors)
          .filter(_ => {
            let [O] = _
            return !Z.some(X => X.route.id === O)
          })
          .forEach(_ => {
            let [O, X] = _
            je = Object.assign(je || {}, { [O]: X })
          })
    let lt = Pt(),
      De = Dt(Ue),
      Ge = lt || De || K.length > 0
    return k({ loaderData: ot, errors: je }, Ge ? { fetchers: new Map(u.fetchers) } : {})
  }
  function hr(i, o, d, p) {
    if (n)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      )
    $.has(i) && oe(i)
    let g = (p && p.unstable_flushSync) === !0,
      C = h || s,
      E = ht(
        u.location,
        u.matches,
        c,
        m.v7_prependBasename,
        d,
        m.v7_relativeSplatPath,
        o,
        p == null ? void 0 : p.relative
      ),
      x = ke(C, E, c)
    if (!x) {
      Ae(i, o, ee(404, { pathname: E }), { flushSync: g })
      return
    }
    let { path: w, submission: T, error: H } = Ot(m.v7_normalizeFormMethod, !0, E, p)
    if (H) {
      Ae(i, o, H, { flushSync: g })
      return
    }
    let L = pt(x, w)
    if (((W = (p && p.preventScrollReset) === !0), T && re(T.formMethod))) {
      mr(i, o, w, L, x, g, T)
      return
    }
    Se.set(i, { routeId: o, path: w }), pr(i, o, w, L, x, g, T)
  }
  async function mr(i, o, d, p, g, C, E) {
    if ((nt(), Se.delete(i), !p.route.action && !p.route.lazy)) {
      let O = ee(405, { method: E.formMethod, pathname: d, routeId: o })
      Ae(i, o, O, { flushSync: C })
      return
    }
    let x = u.fetchers.get(i)
    ie(i, dn(E, x), { flushSync: C })
    let w = new AbortController(),
      T = Be(e.history, d, w.signal, E)
    $.set(i, w)
    let H = Je,
      L = await Ie('action', T, p, g, l, a, c, m.v7_relativeSplatPath)
    if (T.signal.aborted) {
      $.get(i) === w && $.delete(i)
      return
    }
    if (m.v7_fetcherPersist && ae.has(i)) {
      if (ge(L) || Le(L)) {
        ie(i, se(void 0))
        return
      }
    } else {
      if (ge(L))
        if (($.delete(i), Ue > H)) {
          ie(i, se(void 0))
          return
        } else return ne.add(i), ie(i, ze(E)), Oe(u, L, { fetcherSubmission: E })
      if (Le(L)) {
        Ae(i, o, L.error)
        return
      }
    }
    if (pe(L)) throw ee(400, { type: 'defer-action' })
    let I = u.navigation.location || u.location,
      J = Be(e.history, I, w.signal),
      Z = h || s,
      K = u.navigation.state !== 'idle' ? ke(Z, u.navigation.location, c) : u.matches
    U(K, "Didn't find any matches after fetcher action")
    let Ee = ++Je
    xe.set(i, Ee)
    let it = ze(E, L.data)
    u.fetchers.set(i, it)
    let [Pe, le] = At(
      e.history,
      u,
      K,
      E,
      I,
      !1,
      de,
      He,
      Ke,
      ae,
      Se,
      ne,
      Z,
      c,
      { [p.route.id]: L.data },
      void 0
    )
    le
      .filter(O => O.key !== i)
      .forEach(O => {
        let X = O.key,
          Xe = u.fetchers.get(X),
          Rr = ze(void 0, Xe ? Xe.data : void 0)
        u.fetchers.set(X, Rr), $.has(X) && oe(X), O.controller && $.set(X, O.controller)
      }),
      Q({ fetchers: new Map(u.fetchers) })
    let me = () => le.forEach(O => oe(O.key))
    w.signal.addEventListener('abort', me)
    let { results: ot, loaderResults: je, fetcherResults: lt } = await xt(u.matches, K, Pe, le, J)
    if (w.signal.aborted) return
    w.signal.removeEventListener('abort', me),
      xe.delete(i),
      $.delete(i),
      le.forEach(O => $.delete(O.key))
    let De = Wt(ot)
    if (De) {
      if (De.idx >= Pe.length) {
        let O = le[De.idx - Pe.length].key
        ne.add(O)
      }
      return Oe(u, De.result)
    }
    let { loaderData: Ge, errors: _ } = Bt(u, u.matches, Pe, je, void 0, le, lt, ce)
    if (u.fetchers.has(i)) {
      let O = se(L.data)
      u.fetchers.set(i, O)
    }
    Dt(Ee),
      u.navigation.state === 'loading' && Ee > Ue
        ? (U(A, 'Expected pending action'),
          j && j.abort(),
          Fe(u.navigation.location, {
            matches: K,
            loaderData: Ge,
            errors: _,
            fetchers: new Map(u.fetchers),
          }))
        : (Q({ errors: _, loaderData: zt(u.loaderData, Ge, K, _), fetchers: new Map(u.fetchers) }),
          (de = !1))
  }
  async function pr(i, o, d, p, g, C, E) {
    let x = u.fetchers.get(i)
    ie(i, ze(E, x ? x.data : void 0), { flushSync: C })
    let w = new AbortController(),
      T = Be(e.history, d, w.signal)
    $.set(i, w)
    let H = Je,
      L = await Ie('loader', T, p, g, l, a, c, m.v7_relativeSplatPath)
    if (
      (pe(L) && (L = (await er(L, T.signal, !0)) || L),
      $.get(i) === w && $.delete(i),
      !T.signal.aborted)
    ) {
      if (ae.has(i)) {
        ie(i, se(void 0))
        return
      }
      if (ge(L))
        if (Ue > H) {
          ie(i, se(void 0))
          return
        } else {
          ne.add(i), await Oe(u, L)
          return
        }
      if (Le(L)) {
        Ae(i, o, L.error)
        return
      }
      U(!pe(L), 'Unhandled fetcher deferred data'), ie(i, se(L.data))
    }
  }
  async function Oe(i, o, d) {
    let { submission: p, fetcherSubmission: g, replace: C } = d === void 0 ? {} : d
    o.revalidate && (de = !0)
    let E = $e(i.location, o.location, { _isRedirect: !0 })
    if ((U(E, 'Expected a location on the redirect navigation'), r)) {
      let I = !1
      if (o.reloadDocument) I = !0
      else if (Gt.test(o.location)) {
        const J = e.history.createURL(o.location)
        I = J.origin !== t.location.origin || ue(J.pathname, c) == null
      }
      if (I) {
        C ? t.location.replace(o.location) : t.location.assign(o.location)
        return
      }
    }
    j = null
    let x = C === !0 ? V.Replace : V.Push,
      { formMethod: w, formAction: T, formEncType: H } = i.navigation
    !p && !g && w && T && H && (p = Vt(i.navigation))
    let L = p || g
    if (Gr.has(o.status) && L && re(L.formMethod))
      await he(x, E, { submission: k({}, L, { formAction: o.location }), preventScrollReset: W })
    else {
      let I = dt(E, p)
      await he(x, E, { overrideNavigation: I, fetcherSubmission: g, preventScrollReset: W })
    }
  }
  async function xt(i, o, d, p, g) {
    let C = await Promise.all([
        ...d.map(w => Ie('loader', g, w, o, l, a, c, m.v7_relativeSplatPath)),
        ...p.map(w =>
          w.matches && w.match && w.controller
            ? Ie(
                'loader',
                Be(e.history, w.path, w.controller.signal),
                w.match,
                w.matches,
                l,
                a,
                c,
                m.v7_relativeSplatPath
              )
            : { type: z.error, error: ee(404, { pathname: w.path }) }
        ),
      ]),
      E = C.slice(0, d.length),
      x = C.slice(d.length)
    return (
      await Promise.all([
        $t(
          i,
          d,
          E,
          E.map(() => g.signal),
          !1,
          u.loaderData
        ),
        $t(
          i,
          p.map(w => w.match),
          x,
          p.map(w => (w.controller ? w.controller.signal : null)),
          !0
        ),
      ]),
      { results: C, loaderResults: E, fetcherResults: x }
    )
  }
  function nt() {
    ;(de = !0),
      He.push(...at()),
      Se.forEach((i, o) => {
        $.has(o) && (Ke.push(o), oe(o))
      })
  }
  function ie(i, o, d) {
    d === void 0 && (d = {}),
      u.fetchers.set(i, o),
      Q({ fetchers: new Map(u.fetchers) }, { flushSync: (d && d.flushSync) === !0 })
  }
  function Ae(i, o, d, p) {
    p === void 0 && (p = {})
    let g = We(u.matches, o)
    qe(i),
      Q(
        { errors: { [g.route.id]: d }, fetchers: new Map(u.fetchers) },
        { flushSync: (p && p.flushSync) === !0 }
      )
  }
  function St(i) {
    return (
      m.v7_fetcherPersist && (_e.set(i, (_e.get(i) || 0) + 1), ae.has(i) && ae.delete(i)),
      u.fetchers.get(i) || Xr
    )
  }
  function qe(i) {
    let o = u.fetchers.get(i)
    $.has(i) && !(o && o.state === 'loading' && xe.has(i)) && oe(i),
      Se.delete(i),
      xe.delete(i),
      ne.delete(i),
      ae.delete(i),
      u.fetchers.delete(i)
  }
  function gr(i) {
    if (m.v7_fetcherPersist) {
      let o = (_e.get(i) || 0) - 1
      o <= 0 ? (_e.delete(i), ae.add(i)) : _e.set(i, o)
    } else qe(i)
    Q({ fetchers: new Map(u.fetchers) })
  }
  function oe(i) {
    let o = $.get(i)
    U(o, 'Expected fetch controller: ' + i), o.abort(), $.delete(i)
  }
  function Et(i) {
    for (let o of i) {
      let d = St(o),
        p = se(d.data)
      u.fetchers.set(o, p)
    }
  }
  function Pt() {
    let i = [],
      o = !1
    for (let d of ne) {
      let p = u.fetchers.get(d)
      U(p, 'Expected fetcher: ' + d), p.state === 'loading' && (ne.delete(d), i.push(d), (o = !0))
    }
    return Et(i), o
  }
  function Dt(i) {
    let o = []
    for (let [d, p] of xe)
      if (p < i) {
        let g = u.fetchers.get(d)
        U(g, 'Expected fetcher: ' + d), g.state === 'loading' && (oe(d), xe.delete(d), o.push(d))
      }
    return Et(o), o.length > 0
  }
  function vr(i, o) {
    let d = u.blockers.get(i) || Ne
    return fe.get(i) !== o && fe.set(i, o), d
  }
  function Lt(i) {
    u.blockers.delete(i), fe.delete(i)
  }
  function Ye(i, o) {
    let d = u.blockers.get(i) || Ne
    U(
      (d.state === 'unblocked' && o.state === 'blocked') ||
        (d.state === 'blocked' && o.state === 'blocked') ||
        (d.state === 'blocked' && o.state === 'proceeding') ||
        (d.state === 'blocked' && o.state === 'unblocked') ||
        (d.state === 'proceeding' && o.state === 'unblocked'),
      'Invalid blocker state transition: ' + d.state + ' -> ' + o.state
    )
    let p = new Map(u.blockers)
    p.set(i, o), Q({ blockers: p })
  }
  function Ct(i) {
    let { currentLocation: o, nextLocation: d, historyAction: p } = i
    if (fe.size === 0) return
    fe.size > 1 && Ce(!1, 'A router only supports one blocker at a time')
    let g = Array.from(fe.entries()),
      [C, E] = g[g.length - 1],
      x = u.blockers.get(C)
    if (
      !(x && x.state === 'proceeding') &&
      E({ currentLocation: o, nextLocation: d, historyAction: p })
    )
      return C
  }
  function at(i) {
    let o = []
    return (
      ce.forEach((d, p) => {
        ;(!i || i(p)) && (d.cancel(), o.push(p), ce.delete(p))
      }),
      o
    )
  }
  function yr(i, o, d) {
    if (((R = i), (M = o), (B = d || null), !S && u.navigation === ut)) {
      S = !0
      let p = Tt(u.location, u.matches)
      p != null && Q({ restoreScrollPosition: p })
    }
    return () => {
      ;(R = null), (M = null), (B = null)
    }
  }
  function Mt(i, o) {
    return (
      (B &&
        B(
          i,
          o.map(p => Lr(p, u.loaderData))
        )) ||
      i.key
    )
  }
  function wr(i, o) {
    if (R && M) {
      let d = Mt(i, o)
      R[d] = M()
    }
  }
  function Tt(i, o) {
    if (R) {
      let d = Mt(i, o),
        p = R[d]
      if (typeof p == 'number') return p
    }
    return null
  }
  function br(i) {
    ;(l = {}), (h = ct(i, a, void 0, l))
  }
  return (
    (q = {
      get basename() {
        return c
      },
      get future() {
        return m
      },
      get state() {
        return u
      },
      get routes() {
        return s
      },
      get window() {
        return t
      },
      initialize: lr,
      subscribe: ur,
      enableScrollRestoration: yr,
      navigate: Rt,
      fetch: hr,
      revalidate: dr,
      createHref: i => e.history.createHref(i),
      encodeLocation: i => e.history.encodeLocation(i),
      getFetcher: St,
      deleteFetcher: gr,
      dispose: sr,
      getBlocker: vr,
      deleteBlocker: Lt,
      _internalFetchControllers: $,
      _internalActiveDeferreds: ce,
      _internalSetRoutes: br,
    }),
    q
  )
}
function en(e) {
  return (
    e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0))
  )
}
function ht(e, t, r, n, a, l, s, h) {
  let c, m
  if (s) {
    c = []
    for (let y of t)
      if ((c.push(y), y.route.id === s)) {
        m = y
        break
      }
  } else (c = t), (m = t[t.length - 1])
  let f = Ze(a || '.', Qe(c, l), ue(e.pathname, r) || e.pathname, h === 'path')
  return (
    a == null && ((f.search = e.search), (f.hash = e.hash)),
    (a == null || a === '' || a === '.') &&
      m &&
      m.route.index &&
      !wt(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, '?index&') : '?index'),
    n && r !== '/' && (f.pathname = f.pathname === '/' ? r : ve([r, f.pathname])),
    ye(f)
  )
}
function Ot(e, t, r, n) {
  if (!n || !en(n)) return { path: r }
  if (n.formMethod && !sn(n.formMethod))
    return { path: r, error: ee(405, { method: n.formMethod }) }
  let a = () => ({ path: r, error: ee(400, { type: 'invalid-body' }) }),
    l = n.formMethod || 'get',
    s = e ? l.toUpperCase() : l.toLowerCase(),
    h = Zt(r)
  if (n.body !== void 0) {
    if (n.formEncType === 'text/plain') {
      if (!re(s)) return a()
      let R =
        typeof n.body == 'string'
          ? n.body
          : n.body instanceof FormData || n.body instanceof URLSearchParams
          ? Array.from(n.body.entries()).reduce((B, M) => {
              let [S, v] = M
              return (
                '' +
                B +
                S +
                '=' +
                v +
                `
`
              )
            }, '')
          : String(n.body)
      return {
        path: r,
        submission: {
          formMethod: s,
          formAction: h,
          formEncType: n.formEncType,
          formData: void 0,
          json: void 0,
          text: R,
        },
      }
    } else if (n.formEncType === 'application/json') {
      if (!re(s)) return a()
      try {
        let R = typeof n.body == 'string' ? JSON.parse(n.body) : n.body
        return {
          path: r,
          submission: {
            formMethod: s,
            formAction: h,
            formEncType: n.formEncType,
            formData: void 0,
            json: R,
            text: void 0,
          },
        }
      } catch {
        return a()
      }
    }
  }
  U(typeof FormData == 'function', 'FormData is not available in this environment')
  let c, m
  if (n.formData) (c = mt(n.formData)), (m = n.formData)
  else if (n.body instanceof FormData) (c = mt(n.body)), (m = n.body)
  else if (n.body instanceof URLSearchParams) (c = n.body), (m = It(c))
  else if (n.body == null) (c = new URLSearchParams()), (m = new FormData())
  else
    try {
      ;(c = new URLSearchParams(n.body)), (m = It(c))
    } catch {
      return a()
    }
  let f = {
    formMethod: s,
    formAction: h,
    formEncType: (n && n.formEncType) || 'application/x-www-form-urlencoded',
    formData: m,
    json: void 0,
    text: void 0,
  }
  if (re(f.formMethod)) return { path: r, submission: f }
  let y = we(r)
  return (
    t && y.search && wt(y.search) && c.append('index', ''),
    (y.search = '?' + c),
    { path: ye(y), submission: f }
  )
}
function tn(e, t) {
  let r = e
  if (t) {
    let n = e.findIndex(a => a.route.id === t)
    n >= 0 && (r = e.slice(0, n))
  }
  return r
}
function At(e, t, r, n, a, l, s, h, c, m, f, y, R, B, M, S) {
  let v = S ? Object.values(S)[0] : M ? Object.values(M)[0] : void 0,
    b = e.createURL(t.location),
    P = e.createURL(a),
    F = S ? Object.keys(S)[0] : void 0,
    q = tn(r, F).filter((A, W) => {
      let { route: j } = A
      if (j.lazy) return !0
      if (j.loader == null) return !1
      if (l)
        return j.loader.hydrate
          ? !0
          : t.loaderData[j.id] === void 0 && (!t.errors || t.errors[j.id] === void 0)
      if (rn(t.loaderData, t.matches[W], A) || h.some(te => te === A.route.id)) return !0
      let Y = t.matches[W],
        G = A
      return jt(
        A,
        k({ currentUrl: b, currentParams: Y.params, nextUrl: P, nextParams: G.params }, n, {
          actionResult: v,
          defaultShouldRevalidate:
            s ||
            b.pathname + b.search === P.pathname + P.search ||
            b.search !== P.search ||
            Qt(Y, G),
        })
      )
    }),
    u = []
  return (
    f.forEach((A, W) => {
      if (l || !r.some(Re => Re.route.id === A.routeId) || m.has(W)) return
      let j = ke(R, A.path, B)
      if (!j) {
        u.push({
          key: W,
          routeId: A.routeId,
          path: A.path,
          matches: null,
          match: null,
          controller: null,
        })
        return
      }
      let Y = t.fetchers.get(W),
        G = pt(j, A.path),
        te = !1
      y.has(W)
        ? (te = !1)
        : c.includes(W)
        ? (te = !0)
        : Y && Y.state !== 'idle' && Y.data === void 0
        ? (te = s)
        : (te = jt(
            G,
            k(
              {
                currentUrl: b,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: P,
                nextParams: r[r.length - 1].params,
              },
              n,
              { actionResult: v, defaultShouldRevalidate: s }
            )
          )),
        te &&
          u.push({
            key: W,
            routeId: A.routeId,
            path: A.path,
            matches: j,
            match: G,
            controller: new AbortController(),
          })
    }),
    [q, u]
  )
}
function rn(e, t, r) {
  let n = !t || r.route.id !== t.route.id,
    a = e[r.route.id] === void 0
  return n || a
}
function Qt(e, t) {
  let r = e.route.path
  return (
    e.pathname !== t.pathname || (r != null && r.endsWith('*') && e.params['*'] !== t.params['*'])
  )
}
function jt(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t)
    if (typeof r == 'boolean') return r
  }
  return t.defaultShouldRevalidate
}
async function Nt(e, t, r) {
  if (!e.lazy) return
  let n = await e.lazy()
  if (!e.lazy) return
  let a = r[e.id]
  U(a, 'No route found in manifest')
  let l = {}
  for (let s in n) {
    let c = a[s] !== void 0 && s !== 'hasErrorBoundary'
    Ce(
      !c,
      'Route "' +
        a.id +
        '" has a static property "' +
        s +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + s + '" will be ignored.')
    ),
      !c && !Pr.has(s) && (l[s] = n[s])
  }
  Object.assign(a, l), Object.assign(a, k({}, t(a), { lazy: void 0 }))
}
async function Ie(e, t, r, n, a, l, s, h, c) {
  c === void 0 && (c = {})
  let m,
    f,
    y,
    R = S => {
      let v,
        b = new Promise((P, F) => (v = F))
      return (
        (y = () => v()),
        t.signal.addEventListener('abort', y),
        Promise.race([S({ request: t, params: r.params, context: c.requestContext }), b])
      )
    }
  try {
    let S = r.route[e]
    if (r.route.lazy)
      if (S) {
        let v,
          b = await Promise.all([
            R(S).catch(P => {
              v = P
            }),
            Nt(r.route, l, a),
          ])
        if (v) throw v
        f = b[0]
      } else if ((await Nt(r.route, l, a), (S = r.route[e]), S)) f = await R(S)
      else if (e === 'action') {
        let v = new URL(t.url),
          b = v.pathname + v.search
        throw ee(405, { method: t.method, pathname: b, routeId: r.route.id })
      } else return { type: z.data, data: void 0 }
    else if (S) f = await R(S)
    else {
      let v = new URL(t.url),
        b = v.pathname + v.search
      throw ee(404, { pathname: b })
    }
    U(
      f !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a spinner') +
        ' for route ' +
        ('"' + r.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.'
    )
  } catch (S) {
    ;(m = z.error), (f = S)
  } finally {
    y && t.signal.removeEventListener('abort', y)
  }
  if (ln(f)) {
    let S = f.status
    if (Yr.has(S)) {
      let b = f.headers.get('Location')
      if (
        (U(b, 'Redirects returned/thrown from loaders/actions must have a Location header'),
        !Gt.test(b))
      )
        b = ht(new URL(t.url), n.slice(0, n.indexOf(r) + 1), s, !0, b, h)
      else if (!c.isStaticRequest) {
        let P = new URL(t.url),
          F = b.startsWith('//') ? new URL(P.protocol + b) : new URL(b),
          N = ue(F.pathname, s) != null
        F.origin === P.origin && N && (b = F.pathname + F.search + F.hash)
      }
      if (c.isStaticRequest) throw (f.headers.set('Location', b), f)
      return {
        type: z.redirect,
        status: S,
        location: b,
        revalidate: f.headers.get('X-Remix-Revalidate') !== null,
        reloadDocument: f.headers.get('X-Remix-Reload-Document') !== null,
      }
    }
    if (c.isRouteRequest) throw { type: m === z.error ? z.error : z.data, response: f }
    let v
    try {
      let b = f.headers.get('Content-Type')
      b && /\bapplication\/json\b/.test(b)
        ? f.body == null
          ? (v = null)
          : (v = await f.json())
        : (v = await f.text())
    } catch (b) {
      return { type: z.error, error: b }
    }
    return m === z.error
      ? { type: m, error: new yt(S, f.statusText, v), headers: f.headers }
      : { type: z.data, data: v, statusCode: f.status, headers: f.headers }
  }
  if (m === z.error) return { type: m, error: f }
  if (on(f)) {
    var B, M
    return {
      type: z.deferred,
      deferredData: f,
      statusCode: (B = f.init) == null ? void 0 : B.status,
      headers: ((M = f.init) == null ? void 0 : M.headers) && new Headers(f.init.headers),
    }
  }
  return { type: z.data, data: f }
}
function Be(e, t, r, n) {
  let a = e.createURL(Zt(t)).toString(),
    l = { signal: r }
  if (n && re(n.formMethod)) {
    let { formMethod: s, formEncType: h } = n
    ;(l.method = s.toUpperCase()),
      h === 'application/json'
        ? ((l.headers = new Headers({ 'Content-Type': h })), (l.body = JSON.stringify(n.json)))
        : h === 'text/plain'
        ? (l.body = n.text)
        : h === 'application/x-www-form-urlencoded' && n.formData
        ? (l.body = mt(n.formData))
        : (l.body = n.formData)
  }
  return new Request(a, l)
}
function mt(e) {
  let t = new URLSearchParams()
  for (let [r, n] of e.entries()) t.append(r, typeof n == 'string' ? n : n.name)
  return t
}
function It(e) {
  let t = new FormData()
  for (let [r, n] of e.entries()) t.append(r, n)
  return t
}
function nn(e, t, r, n, a) {
  let l = {},
    s = null,
    h,
    c = !1,
    m = {}
  return (
    r.forEach((f, y) => {
      let R = t[y].route.id
      if ((U(!ge(f), 'Cannot handle redirect results in processLoaderData'), Le(f))) {
        let B = We(e, R),
          M = f.error
        n && ((M = Object.values(n)[0]), (n = void 0)),
          (s = s || {}),
          s[B.route.id] == null && (s[B.route.id] = M),
          (l[R] = void 0),
          c || ((c = !0), (h = Hr(f.error) ? f.error.status : 500)),
          f.headers && (m[R] = f.headers)
      } else
        pe(f) ? (a.set(R, f.deferredData), (l[R] = f.deferredData.data)) : (l[R] = f.data),
          f.statusCode != null && f.statusCode !== 200 && !c && (h = f.statusCode),
          f.headers && (m[R] = f.headers)
    }),
    n && ((s = n), (l[Object.keys(n)[0]] = void 0)),
    { loaderData: l, errors: s, statusCode: h || 200, loaderHeaders: m }
  )
}
function Bt(e, t, r, n, a, l, s, h) {
  let { loaderData: c, errors: m } = nn(t, r, n, a, h)
  for (let f = 0; f < l.length; f++) {
    let { key: y, match: R, controller: B } = l[f]
    U(s !== void 0 && s[f] !== void 0, 'Did not find corresponding fetcher result')
    let M = s[f]
    if (!(B && B.signal.aborted))
      if (Le(M)) {
        let S = We(e.matches, R == null ? void 0 : R.route.id)
        ;(m && m[S.route.id]) || (m = k({}, m, { [S.route.id]: M.error })), e.fetchers.delete(y)
      } else if (ge(M)) U(!1, 'Unhandled fetcher revalidation redirect')
      else if (pe(M)) U(!1, 'Unhandled fetcher deferred data')
      else {
        let S = se(M.data)
        e.fetchers.set(y, S)
      }
  }
  return { loaderData: c, errors: m }
}
function zt(e, t, r, n) {
  let a = k({}, t)
  for (let l of r) {
    let s = l.route.id
    if (
      (t.hasOwnProperty(s)
        ? t[s] !== void 0 && (a[s] = t[s])
        : e[s] !== void 0 && l.route.loader && (a[s] = e[s]),
      n && n.hasOwnProperty(s))
    )
      break
  }
  return a
}
function We(e, t) {
  return (
    (t ? e.slice(0, e.findIndex(n => n.route.id === t) + 1) : [...e])
      .reverse()
      .find(n => n.route.hasErrorBoundary === !0) || e[0]
  )
}
function kt(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find(r => r.index || !r.path || r.path === '/') || { id: '__shim-error-route__' }
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t }
}
function ee(e, t) {
  let { pathname: r, routeId: n, method: a, type: l } = t === void 0 ? {} : t,
    s = 'Unknown Server Error',
    h = 'Unknown @remix-run/router error'
  return (
    e === 400
      ? ((s = 'Bad Request'),
        a && r && n
          ? (h =
              'You made a ' +
              a +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide a `spinner` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : l === 'defer-action'
          ? (h = 'defer() is not supported in actions')
          : l === 'invalid-body' && (h = 'Unable to encode submission body'))
      : e === 403
      ? ((s = 'Forbidden'), (h = 'Route "' + n + '" does not match URL "' + r + '"'))
      : e === 404
      ? ((s = 'Not Found'), (h = 'No route matches URL "' + r + '"'))
      : e === 405 &&
        ((s = 'Method Not Allowed'),
        a && r && n
          ? (h =
              'You made a ' +
              a.toUpperCase() +
              ' request to "' +
              r +
              '" but ' +
              ('did not provide an `action` for route "' + n + '", ') +
              'so there is no way to handle the request.')
          : a && (h = 'Invalid request method "' + a.toUpperCase() + '"')),
    new yt(e || 500, s, new Error(h), !0)
  )
}
function Wt(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t]
    if (ge(r)) return { result: r, idx: t }
  }
}
function Zt(e) {
  let t = typeof e == 'string' ? we(e) : e
  return ye(k({}, t, { hash: '' }))
}
function an(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
    ? t.hash !== ''
    : e.hash === t.hash
    ? !0
    : t.hash !== ''
}
function pe(e) {
  return e.type === z.deferred
}
function Le(e) {
  return e.type === z.error
}
function ge(e) {
  return (e && e.type) === z.redirect
}
function on(e) {
  let t = e
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  )
}
function ln(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  )
}
function sn(e) {
  return qr.has(e.toLowerCase())
}
function re(e) {
  return Kr.has(e.toLowerCase())
}
async function $t(e, t, r, n, a, l) {
  for (let s = 0; s < r.length; s++) {
    let h = r[s],
      c = t[s]
    if (!c) continue
    let m = e.find(y => y.route.id === c.route.id),
      f = m != null && !Qt(m, c) && (l && l[c.route.id]) !== void 0
    if (pe(h) && (a || f)) {
      let y = n[s]
      U(y, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await er(h, y, a).then(R => {
          R && (r[s] = R || r[s])
        })
    }
  }
}
async function er(e, t, r) {
  if ((r === void 0 && (r = !1), !(await e.deferredData.resolveData(t)))) {
    if (r)
      try {
        return { type: z.data, data: e.deferredData.unwrappedData }
      } catch (a) {
        return { type: z.error, error: a }
      }
    return { type: z.data, data: e.deferredData.data }
  }
}
function wt(e) {
  return new URLSearchParams(e).getAll('index').some(t => t === '')
}
function pt(e, t) {
  let r = typeof t == 'string' ? we(t).search : t.search
  if (e[e.length - 1].route.index && wt(r || '')) return e[e.length - 1]
  let n = qt(e)
  return n[n.length - 1]
}
function Vt(e) {
  let { formMethod: t, formAction: r, formEncType: n, text: a, formData: l, json: s } = e
  if (!(!t || !r || !n)) {
    if (a != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: void 0,
        text: a,
      }
    if (l != null)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: l,
        json: void 0,
        text: void 0,
      }
    if (s !== void 0)
      return {
        formMethod: t,
        formAction: r,
        formEncType: n,
        formData: void 0,
        json: s,
        text: void 0,
      }
  }
}
function dt(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      }
}
function un(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  }
}
function ze(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      }
}
function dn(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  }
}
function se(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  }
}
function cn(e, t) {
  try {
    let r = e.sessionStorage.getItem(Xt)
    if (r) {
      let n = JSON.parse(r)
      for (let [a, l] of Object.entries(n || {}))
        l && Array.isArray(l) && t.set(a, new Set(l || []))
    }
  } catch {}
}
function fn(e, t) {
  if (t.size > 0) {
    let r = {}
    for (let [n, a] of t) r[n] = [...a]
    try {
      e.sessionStorage.setItem(Xt, JSON.stringify(r))
    } catch (n) {
      Ce(!1, 'Failed to save applied view transitions in sessionStorage (' + n + ').')
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function gt() {
  return (
    (gt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    gt.apply(this, arguments)
  )
}
const bt = D.createContext(null),
  hn = D.createContext(null),
  be = D.createContext(null),
  tr = D.createContext(null),
  Te = D.createContext({ outlet: null, matches: [], isDataRoute: !1 })
function mn(e, t) {
  let { relative: r } = t === void 0 ? {} : t
  et() || U(!1)
  let { basename: n, navigator: a } = D.useContext(be),
    { hash: l, pathname: s, search: h } = tt(e, { relative: r }),
    c = s
  return (
    n !== '/' && (c = s === '/' ? n : ve([n, s])), a.createHref({ pathname: c, search: h, hash: l })
  )
}
function et() {
  return D.useContext(tr) != null
}
function Ve() {
  return et() || U(!1), D.useContext(tr).location
}
function rr(e) {
  D.useContext(be).static || D.useLayoutEffect(e)
}
function nr() {
  let { isDataRoute: e } = D.useContext(Te)
  return e ? Rn() : pn()
}
function pn() {
  et() || U(!1)
  let e = D.useContext(bt),
    { basename: t, future: r, navigator: n } = D.useContext(be),
    { matches: a } = D.useContext(Te),
    { pathname: l } = Ve(),
    s = JSON.stringify(Qe(a, r.v7_relativeSplatPath)),
    h = D.useRef(!1)
  return (
    rr(() => {
      h.current = !0
    }),
    D.useCallback(
      function (m, f) {
        if ((f === void 0 && (f = {}), !h.current)) return
        if (typeof m == 'number') {
          n.go(m)
          return
        }
        let y = Ze(m, JSON.parse(s), l, f.relative === 'path')
        e == null && t !== '/' && (y.pathname = y.pathname === '/' ? t : ve([t, y.pathname])),
          (f.replace ? n.replace : n.push)(y, f.state, f)
      },
      [t, n, s, l, e]
    )
  )
}
const gn = D.createContext(null)
function vn(e) {
  let t = D.useContext(Te).outlet
  return t && D.createElement(gn.Provider, { value: e }, t)
}
function tt(e, t) {
  let { relative: r } = t === void 0 ? {} : t,
    { future: n } = D.useContext(be),
    { matches: a } = D.useContext(Te),
    { pathname: l } = Ve(),
    s = JSON.stringify(Qe(a, n.v7_relativeSplatPath))
  return D.useMemo(() => Ze(e, JSON.parse(s), l, r === 'path'), [e, s, l, r])
}
var ar = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(ar || {}),
  ir = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(ir || {})
function yn(e) {
  let t = D.useContext(bt)
  return t || U(!1), t
}
function wn(e) {
  let t = D.useContext(Te)
  return t || U(!1), t
}
function bn(e) {
  let t = wn(),
    r = t.matches[t.matches.length - 1]
  return r.route.id || U(!1), r.route.id
}
function Rn() {
  let { router: e } = yn(ar.UseNavigateStable),
    t = bn(ir.UseNavigateStable),
    r = D.useRef(!1)
  return (
    rr(() => {
      r.current = !0
    }),
    D.useCallback(
      function (a, l) {
        l === void 0 && (l = {}),
          r.current &&
            (typeof a == 'number' ? e.navigate(a) : e.navigate(a, gt({ fromRouteId: t }, l)))
      },
      [e, t]
    )
  )
}
function Bn(e) {
  let { to: t, replace: r, state: n, relative: a } = e
  et() || U(!1)
  let { future: l, static: s } = D.useContext(be),
    { matches: h } = D.useContext(Te),
    { pathname: c } = Ve(),
    m = nr(),
    f = Ze(t, Qe(h, l.v7_relativeSplatPath), c, a === 'path'),
    y = JSON.stringify(f)
  return (
    D.useEffect(() => m(JSON.parse(y), { replace: r, state: n, relative: a }), [m, y, a, r, n]),
    null
  )
}
function zn(e) {
  return vn(e.context)
}
new Promise(() => {})
function xn(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null }
  return (
    e.Component && Object.assign(t, { element: D.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: D.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, { errorElement: D.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  )
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Me() {
  return (
    (Me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t]
            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }),
    Me.apply(this, arguments)
  )
}
function or(e, t) {
  if (e == null) return {}
  var r = {},
    n = Object.keys(e),
    a,
    l
  for (l = 0; l < n.length; l++) (a = n[l]), !(t.indexOf(a) >= 0) && (r[a] = e[a])
  return r
}
function Sn(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function En(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Sn(e)
}
const Pn = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'unstable_viewTransition',
  ],
  Dn = [
    'aria-current',
    'caseSensitive',
    'className',
    'end',
    'style',
    'to',
    'unstable_viewTransition',
    'children',
  ],
  Ln = '6'
try {
  window.__reactRouterVersion = Ln
} catch {}
function kn(e, t) {
  return Zr({
    basename: t == null ? void 0 : t.basename,
    future: Me({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: xr({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Cn(),
    routes: e,
    mapRouteProperties: xn,
    window: t == null ? void 0 : t.window,
  }).initialize()
}
function Cn() {
  var e
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
  return t && t.errors && (t = Me({}, t, { errors: Mn(t.errors) })), t
}
function Mn(e) {
  if (!e) return null
  let t = Object.entries(e),
    r = {}
  for (let [n, a] of t)
    if (a && a.__type === 'RouteErrorResponse')
      r[n] = new yt(a.status, a.statusText, a.data, a.internal === !0)
    else if (a && a.__type === 'Error') {
      if (a.__subType) {
        let l = window[a.__subType]
        if (typeof l == 'function')
          try {
            let s = new l(a.message)
            ;(s.stack = ''), (r[n] = s)
          } catch {}
      }
      if (r[n] == null) {
        let l = new Error(a.message)
        ;(l.stack = ''), (r[n] = l)
      }
    } else r[n] = a
  return r
}
const Tn = D.createContext({ isTransitioning: !1 }),
  Un =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  _n = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Fn = D.forwardRef(function (t, r) {
    let {
        onClick: n,
        relative: a,
        reloadDocument: l,
        replace: s,
        state: h,
        target: c,
        to: m,
        preventScrollReset: f,
        unstable_viewTransition: y,
      } = t,
      R = or(t, Pn),
      { basename: B } = D.useContext(be),
      M,
      S = !1
    if (typeof m == 'string' && _n.test(m) && ((M = m), Un))
      try {
        let F = new URL(window.location.href),
          N = m.startsWith('//') ? new URL(F.protocol + m) : new URL(m),
          q = ue(N.pathname, B)
        N.origin === F.origin && q != null ? (m = q + N.search + N.hash) : (S = !0)
      } catch {}
    let v = mn(m, { relative: a }),
      b = An(m, {
        replace: s,
        state: h,
        target: c,
        preventScrollReset: f,
        relative: a,
        unstable_viewTransition: y,
      })
    function P(F) {
      n && n(F), F.defaultPrevented || b(F)
    }
    return D.createElement(
      'a',
      Me({}, R, { href: M || v, onClick: S || l ? n : P, ref: r, target: c })
    )
  }),
  Wn = D.forwardRef(function (t, r) {
    let {
        'aria-current': n = 'page',
        caseSensitive: a = !1,
        className: l = '',
        end: s = !1,
        style: h,
        to: c,
        unstable_viewTransition: m,
        children: f,
      } = t,
      y = or(t, Dn),
      R = tt(c, { relative: y.relative }),
      B = Ve(),
      M = D.useContext(hn),
      { navigator: S, basename: v } = D.useContext(be),
      b = M != null && jn(R) && m === !0,
      P = S.encodeLocation ? S.encodeLocation(R).pathname : R.pathname,
      F = B.pathname,
      N = M && M.navigation && M.navigation.location ? M.navigation.location.pathname : null
    a || ((F = F.toLowerCase()), (N = N ? N.toLowerCase() : null), (P = P.toLowerCase())),
      N && v && (N = ue(N, v) || N)
    const q = P !== '/' && P.endsWith('/') ? P.length - 1 : P.length
    let u = F === P || (!s && F.startsWith(P) && F.charAt(q) === '/'),
      A = N != null && (N === P || (!s && N.startsWith(P) && N.charAt(P.length) === '/')),
      W = { isActive: u, isPending: A, isTransitioning: b },
      j = u ? n : void 0,
      Y
    typeof l == 'function'
      ? (Y = l(W))
      : (Y = [l, u ? 'active' : null, A ? 'pending' : null, b ? 'transitioning' : null]
          .filter(Boolean)
          .join(' '))
    let G = typeof h == 'function' ? h(W) : h
    return D.createElement(
      Fn,
      Me({}, y, {
        'aria-current': j,
        className: Y,
        ref: r,
        style: G,
        to: c,
        unstable_viewTransition: m,
      }),
      typeof f == 'function' ? f(W) : f
    )
  })
var vt
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(vt || (vt = {}))
var Ht
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Ht || (Ht = {}))
function On(e) {
  let t = D.useContext(bt)
  return t || U(!1), t
}
function An(e, t) {
  let {
      target: r,
      replace: n,
      state: a,
      preventScrollReset: l,
      relative: s,
      unstable_viewTransition: h,
    } = t === void 0 ? {} : t,
    c = nr(),
    m = Ve(),
    f = tt(e, { relative: s })
  return D.useCallback(
    y => {
      if (En(y, r)) {
        y.preventDefault()
        let R = n !== void 0 ? n : ye(m) === ye(f)
        c(e, {
          replace: R,
          state: a,
          preventScrollReset: l,
          relative: s,
          unstable_viewTransition: h,
        })
      }
    },
    [m, c, f, n, a, r, e, l, s, h]
  )
}
function jn(e, t) {
  t === void 0 && (t = {})
  let r = D.useContext(Tn)
  r == null && U(!1)
  let { basename: n } = On(vt.useViewTransitionState),
    a = tt(e, { relative: t.relative })
  if (!r.isTransitioning) return !1
  let l = ue(r.currentLocation.pathname, n) || r.currentLocation.pathname,
    s = ue(r.nextLocation.pathname, n) || r.nextLocation.pathname
  return ft(a.pathname, s) != null || ft(a.pathname, l) != null
}
export { Fn as L, Wn as N, zn as O, nr as a, Bn as b, kn as c, Ve as u }
