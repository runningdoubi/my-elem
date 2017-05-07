import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header/header.vue'
import Goods from '@/components/goods/goods.vue'
import Seller from '@/components/seller/seller.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/header',
        component: Header
    }, {
        path: '/goods',
        component: Goods
    }, {
        path: '/seller',
        component: Seller
    }],
    linkActiveClass:"active"
})
