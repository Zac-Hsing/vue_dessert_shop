import { createRouter,  createWebHashHistory } from 'vue-router'
import home from '../views/home.vue'
import cart from '../views/cart.vue'
import AllDessert from '@/components/dessert/AllDessert.vue'
import CheeseCake from '@/components/dessert/CheeseCake.vue'
import ChocoCake from '@/components/dessert/ChocoCake.vue'
import FruitTower from '@/components/dessert/FruitTower.vue'
import login from '@/views/login.vue'
import admin from '@/components/admin/admin.vue'
import orderList from '@/components/admin/page/orderList.vue'
import commodity from '@/components/admin/page/commodity.vue'

const router = createRouter({
  history:  createWebHashHistory('/vue_dessert_shop/'),
  routes: [
    {
      path:'/',
      component:home,
      redirect: '/All',
      children:[
          {
            path:'All',
            component:AllDessert
          },
          {
            path:'CheeseCake',
            component:CheeseCake
          },
          {
            path:'ChocoCake',
            component:ChocoCake
          },
          {
            path:'FruitTower',
            component:FruitTower
          },
      ]
    },
    {
      path:'/cart',
      component:cart
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/admin', 
      component: admin, 
      children: [
        {
          path:'order',
          component:orderList
        },
        {
          path:'commodity',
          component:commodity
        },
      ]
    },
  ]
})

export default router
