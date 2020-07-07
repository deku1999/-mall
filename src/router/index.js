import VueRouter from 'vue-router'
import Vue from 'vue'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const home = () => import('../views/home.vue')
const cart = () => import('../views/cart.vue')
const routes = [
    {
        path: '/',
        redirect: '/home'
    }
    ,{
        path: '/home',
        component: home,
        meta: {
            title: '主页'
        }
    },
    {
        path: '/cart',
        component: cart,
        meta: {
            title: '购物车'
        }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})
router.beforeEach((to, from ,next) => {
    window.document.title = to.meta.title
    next()
})
router.afterEach((to, from ,next) => {
    window.scrollTo(0,0)
})
export default router