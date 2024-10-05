import { wrapFunctional } from './utils'

export { default as Logo } from '../../components/Logo.vue'
export { default as AdminHeader } from '../../components/admin/header.vue'
export { default as AdminSidebar } from '../../components/admin/sidebar.vue'
export { default as WebFooter } from '../../components/web/footer.vue'
export { default as WebNavbar } from '../../components/web/navbar.vue'
export { default as WebSlider } from '../../components/web/slider.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminHeader = import('../../components/admin/header.vue' /* webpackChunkName: "components/admin-header" */).then(c => wrapFunctional(c.default || c))
export const LazyAdminSidebar = import('../../components/admin/sidebar.vue' /* webpackChunkName: "components/admin-sidebar" */).then(c => wrapFunctional(c.default || c))
export const LazyWebFooter = import('../../components/web/footer.vue' /* webpackChunkName: "components/web-footer" */).then(c => wrapFunctional(c.default || c))
export const LazyWebNavbar = import('../../components/web/navbar.vue' /* webpackChunkName: "components/web-navbar" */).then(c => wrapFunctional(c.default || c))
export const LazyWebSlider = import('../../components/web/slider.vue' /* webpackChunkName: "components/web-slider" */).then(c => wrapFunctional(c.default || c))
