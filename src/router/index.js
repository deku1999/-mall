import Vue from 'vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)
const Home = ()=> import('views/Home/Home')
const Sort = ()=> import('views/Sort/Sort')
const Shop = ()=> import('views/Shop/Shop')
const Profile = ()=> import('views/Profile/Profile')
const Detail = ()=> import('views/detail/Detail')
const routes = [
{
    path : '/',
    redirect : '/home'
},{
    path : '/home',
    component : Home
},{
    path : '/Sort',
    component : Sort
},{
    path : '/Shop',
    component : Shop
},{
    path : '/Profile',
    component : Profile
},{
    path: '/detail/:id',
    component : Detail
}
]
const router = new VueRouter({
    routes,
    mode : 'history'
})
export default router