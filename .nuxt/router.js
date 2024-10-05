import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _889c0864 = () => interopDefault(import('../pages/login/index.vue' /* webpackChunkName: "pages/login/index" */))
const _081e2c1e = () => interopDefault(import('../pages/post/index.vue' /* webpackChunkName: "pages/post/index" */))
const _67c7510e = () => interopDefault(import('../pages/search/index.vue' /* webpackChunkName: "pages/search/index" */))
const _05191c0f = () => interopDefault(import('../pages/admin/category/index.vue' /* webpackChunkName: "pages/admin/category/index" */))
const _44b339f9 = () => interopDefault(import('../pages/admin/dashboard/index.vue' /* webpackChunkName: "pages/admin/dashboard/index" */))
const _196f4ba0 = () => interopDefault(import('../pages/admin/menu/index.vue' /* webpackChunkName: "pages/admin/menu/index" */))
const _7b938031 = () => interopDefault(import('../pages/admin/post/index.vue' /* webpackChunkName: "pages/admin/post/index" */))
const _46887db2 = () => interopDefault(import('../pages/admin/slider/index.vue' /* webpackChunkName: "pages/admin/slider/index" */))
const _7bb13eff = () => interopDefault(import('../pages/admin/tag/index.vue' /* webpackChunkName: "pages/admin/tag/index" */))
const _0974199c = () => interopDefault(import('../pages/admin/user/index.vue' /* webpackChunkName: "pages/admin/user/index" */))
const _2f3b605c = () => interopDefault(import('../pages/admin/category/create/index.vue' /* webpackChunkName: "pages/admin/category/create/index" */))
const _64381a91 = () => interopDefault(import('../pages/admin/menu/create/index.vue' /* webpackChunkName: "pages/admin/menu/create/index" */))
const _53d13d20 = () => interopDefault(import('../pages/admin/post/create/index.vue' /* webpackChunkName: "pages/admin/post/create/index" */))
const _727360cf = () => interopDefault(import('../pages/admin/slider/create/index.vue' /* webpackChunkName: "pages/admin/slider/create/index" */))
const _bc4c023c = () => interopDefault(import('../pages/admin/tag/create/index.vue' /* webpackChunkName: "pages/admin/tag/create/index" */))
const _29b32cb6 = () => interopDefault(import('../pages/admin/user/create/index.vue' /* webpackChunkName: "pages/admin/user/create/index" */))
const _346a2088 = () => interopDefault(import('../pages/admin/category/edit/_id.vue' /* webpackChunkName: "pages/admin/category/edit/_id" */))
const _001922c7 = () => interopDefault(import('../pages/admin/menu/edit/_id.vue' /* webpackChunkName: "pages/admin/menu/edit/_id" */))
const _bd969db4 = () => interopDefault(import('../pages/admin/post/edit/_id.vue' /* webpackChunkName: "pages/admin/post/edit/_id" */))
const _26b3d798 = () => interopDefault(import('../pages/admin/tag/edit/_id.vue' /* webpackChunkName: "pages/admin/tag/edit/_id" */))
const _0d121bdb = () => interopDefault(import('../pages/admin/user/edit/_id.vue' /* webpackChunkName: "pages/admin/user/edit/_id" */))
const _4115f6f2 = () => interopDefault(import('../pages/category/_slug.vue' /* webpackChunkName: "pages/category/_slug" */))
const _0b8b6eae = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _b12e0812 = () => interopDefault(import('../pages/tag/_slug.vue' /* webpackChunkName: "pages/tag/_slug" */))
const _80b33318 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _889c0864,
    name: "login"
  }, {
    path: "/post",
    component: _081e2c1e,
    name: "post"
  }, {
    path: "/search",
    component: _67c7510e,
    name: "search"
  }, {
    path: "/admin/category",
    component: _05191c0f,
    name: "admin-category"
  }, {
    path: "/admin/dashboard",
    component: _44b339f9,
    name: "admin-dashboard"
  }, {
    path: "/admin/menu",
    component: _196f4ba0,
    name: "admin-menu"
  }, {
    path: "/admin/post",
    component: _7b938031,
    name: "admin-post"
  }, {
    path: "/admin/slider",
    component: _46887db2,
    name: "admin-slider"
  }, {
    path: "/admin/tag",
    component: _7bb13eff,
    name: "admin-tag"
  }, {
    path: "/admin/user",
    component: _0974199c,
    name: "admin-user"
  }, {
    path: "/admin/category/create",
    component: _2f3b605c,
    name: "admin-category-create"
  }, {
    path: "/admin/menu/create",
    component: _64381a91,
    name: "admin-menu-create"
  }, {
    path: "/admin/post/create",
    component: _53d13d20,
    name: "admin-post-create"
  }, {
    path: "/admin/slider/create",
    component: _727360cf,
    name: "admin-slider-create"
  }, {
    path: "/admin/tag/create",
    component: _bc4c023c,
    name: "admin-tag-create"
  }, {
    path: "/admin/user/create",
    component: _29b32cb6,
    name: "admin-user-create"
  }, {
    path: "/admin/category/edit/:id?",
    component: _346a2088,
    name: "admin-category-edit-id"
  }, {
    path: "/admin/menu/edit/:id?",
    component: _001922c7,
    name: "admin-menu-edit-id"
  }, {
    path: "/admin/post/edit/:id?",
    component: _bd969db4,
    name: "admin-post-edit-id"
  }, {
    path: "/admin/tag/edit/:id?",
    component: _26b3d798,
    name: "admin-tag-edit-id"
  }, {
    path: "/admin/user/edit/:id?",
    component: _0d121bdb,
    name: "admin-user-edit-id"
  }, {
    path: "/category/:slug?",
    component: _4115f6f2,
    name: "category-slug"
  }, {
    path: "/post/:slug",
    component: _0b8b6eae,
    name: "post-slug"
  }, {
    path: "/tag/:slug?",
    component: _b12e0812,
    name: "tag-slug"
  }, {
    path: "/",
    component: _80b33318,
    name: "index"
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
