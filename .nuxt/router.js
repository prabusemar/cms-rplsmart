import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1b515980 = () => interopDefault(import('..\\pages\\login\\index.vue' /* webpackChunkName: "pages/login/index" */))
const _18fb666a = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _1680ee83 = () => interopDefault(import('..\\pages\\search\\index.vue' /* webpackChunkName: "pages/search/index" */))
const _66062a9c = () => interopDefault(import('..\\pages\\admin\\category\\index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _308b9a66 = () => interopDefault(import('..\\pages\\admin\\dashboard\\index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _324db39b = () => interopDefault(import('..\\pages\\admin\\menu\\index.vue' /* webpackChunkName: "pages/admin/menu/index" */))
const _9931648c = () => interopDefault(import('..\\pages\\admin\\post\\index.vue' /* webpackChunkName: "pages/admin/post/index" */))
const _3ad74ed9 = () => interopDefault(import('..\\pages\\admin\\slider\\index.vue' /* webpackChunkName: "pages/admin/slider/index" */))
const _f0ee9cc0 = () => interopDefault(import('..\\pages\\admin\\tag\\index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _3ccc3ca2 = () => interopDefault(import('..\\pages\\admin\\user\\index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _4c25e6a0 = () => interopDefault(import('..\\pages\\admin\\category\\create\\index.vue' /* webpackChunkName: "pages/admin/category/create/index" */))
const _26dffec2 = () => interopDefault(import('..\\pages\\admin\\menu\\create\\index.vue' /* webpackChunkName: "pages/admin/menu/create/index" */))
const _63b90bbe = () => interopDefault(import('..\\pages\\admin\\post\\create\\index.vue' /* webpackChunkName: "pages/admin/post/create/index" */))
const _983d0446 = () => interopDefault(import('..\\pages\\admin\\slider\\create\\index.vue' /* webpackChunkName: "pages/admin/slider/create/index" */))
const _334329a4 = () => interopDefault(import('..\\pages\\admin\\tag\\create\\index.vue' /* webpackChunkName: "pages/admin/tag/create/index" */))
const _7126dab3 = () => interopDefault(import('..\\pages\\admin\\user\\create\\index.vue' /* webpackChunkName: "pages/admin/user/create/index" */))
const _e6cc4caa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _1b19183a = () => interopDefault(import('..\\pages\\admin\\category\\edit\\_id.vue' /* webpackChunkName: "pages/admin/category/edit/_id" */))
const _1333ec8e = () => interopDefault(import('..\\pages\\admin\\menu\\edit\\_id.vue' /* webpackChunkName: "pages/admin/menu/edit/_id" */))
const _82510750 = () => interopDefault(import('..\\pages\\admin\\post\\edit\\_id.vue' /* webpackChunkName: "pages/admin/post/edit/_id" */))
const _1a387d3e = () => interopDefault(import('..\\pages\\admin\\tag\\edit\\_id.vue' /* webpackChunkName: "pages/admin/tag/edit/_id" */))
const _adf5e466 = () => interopDefault(import('..\\pages\\admin\\user\\edit\\_id.vue' /* webpackChunkName: "pages/admin/user/edit/_id" */))
const _11c297e5 = () => interopDefault(import('..\\pages\\category\\_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _1c68a8fa = () => interopDefault(import('..\\pages\\post\\_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _03c26b27 = () => interopDefault(import('..\\pages\\tag\\_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/login",
    component: _1b515980,
    name: "login"
  }, {
    path: "/post",
    component: _18fb666a,
    name: "post"
  }, {
    path: "/search",
    component: _1680ee83,
    name: "search"
  }, {
    path: "/admin/category",
    component: _66062a9c,
    name: "admin-category"
  }, {
    path: "/admin/dashboard",
    component: _308b9a66,
    name: "admin-dashboard"
  }, {
    path: "/admin/menu",
    component: _324db39b,
    name: "admin-menu"
  }, {
    path: "/admin/post",
    component: _9931648c,
    name: "admin-post"
  }, {
    path: "/admin/slider",
    component: _3ad74ed9,
    name: "admin-slider"
  }, {
    path: "/admin/tag",
    component: _f0ee9cc0,
    name: "admin-tag"
  }, {
    path: "/admin/user",
    component: _3ccc3ca2,
    name: "admin-user"
  }, {
    path: "/admin/category/create",
    component: _4c25e6a0,
    name: "admin-category-create"
  }, {
    path: "/admin/menu/create",
    component: _26dffec2,
    name: "admin-menu-create"
  }, {
    path: "/admin/post/create",
    component: _63b90bbe,
    name: "admin-post-create"
  }, {
    path: "/admin/slider/create",
    component: _983d0446,
    name: "admin-slider-create"
  }, {
    path: "/admin/tag/create",
    component: _334329a4,
    name: "admin-tag-create"
  }, {
    path: "/admin/user/create",
    component: _7126dab3,
    name: "admin-user-create"
  }, {
    path: "/",
    component: _e6cc4caa,
    name: "index"
  }, {
    path: "/admin/category/edit/:id?",
    component: _1b19183a,
    name: "admin-category-edit-id"
  }, {
    path: "/admin/menu/edit/:id?",
    component: _1333ec8e,
    name: "admin-menu-edit-id"
  }, {
    path: "/admin/post/edit/:id?",
    component: _82510750,
    name: "admin-post-edit-id"
  }, {
    path: "/admin/tag/edit/:id?",
    component: _1a387d3e,
    name: "admin-tag-edit-id"
  }, {
    path: "/admin/user/edit/:id?",
    component: _adf5e466,
    name: "admin-user-edit-id"
  }, {
    path: "/category/:slug?",
    component: _11c297e5,
    name: "category-slug"
  }, {
    path: "/post/:slug",
    component: _1c68a8fa,
    name: "post-slug"
  }, {
    path: "/tag/:slug?",
    component: _03c26b27,
    name: "tag-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
