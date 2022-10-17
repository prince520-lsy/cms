
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    //按需加载，只有访问到页面才会加载
    component: () => import('../views/login.vue')
  },
  {
    path: '/',
    // name: 'index',
    component: Index,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard.vue')
      },
      {
        path: 'article',
        name: 'article',
        component: () => import('@/views/article.vue')
      }
    ]
  },


]

const router = new VueRouter({
  routes
})

export default router
