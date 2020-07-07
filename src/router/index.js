import Vue from 'vue'
import VueRouter from 'vue-router'
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const home = () => import('views/home/home') 
const sort = () => import('views/sort/sort')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const detail = () => import('views/detail/detail')
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home,
        meta: {
            title: '蘑菇街'
        }
    },{
        path: '/sort',
        component: sort,
        meta: {
            title: '分类'
        }
    },{
        path: '/cart',
        component: cart,
        meta: {
            title: '购物车'
        }
    },{
        path: '/profile',
        component: profile,
        meta: {
            title: '我的'
        }
    },
    {
        path: '/detail',
        component: detail,
        meta: {
            title: '商品详情'
        }
    }
]
const router = new VueRouter({
    routes,
    mode: 'history',
})
router.beforeEach((to, from ,next) => {
    window.document.title = to.meta.title
    next()
})
export default router