import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c)),
  AdminHeader: () => import('../../components/admin/header.vue' /* webpackChunkName: "components/admin-header" */).then(c => wrapFunctional(c.default || c)),
  AdminSidebar: () => import('../../components/admin/sidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => wrapFunctional(c.default || c)),
  WebFooter: () => import('../../components/web/footer.vue' /* webpackChunkName: "components/web-footer" */).then(c => wrapFunctional(c.default || c)),
  WebNavbar: () => import('../../components/web/navbar.vue' /* webpackChunkName: "components/web-navbar" */).then(c => wrapFunctional(c.default || c)),
  WebSlider: () => import('../../components/web/slider.vue' /* webpackChunkName: "components/web-slider" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
