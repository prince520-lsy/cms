
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    //按需加载，只有访问到页面才会加载
    component: () => import('@/views/login/index.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
