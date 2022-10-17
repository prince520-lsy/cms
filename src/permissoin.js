// 控制页面访问权限的js文件 利用导航守卫实现
import router from './router'
import store from './store'
// 全局前置导航守卫：这个导航是在页面跳转之前的函数
router.beforeEach((to, from, next) => {
    // to: 去哪里（跳转目标路由对象）
    // form：从哪里来（当前的路由对象）
    // next：放行函数，当我们直接调用该函数的时候表示可以进入页面，否则不可以进入
    /**
       * 需求：判断当前用户是否已登录，已登录则放行，否则跳转到登录页面
       *  如何判断用户已登录？
       * 答：可以通过token判断，当token存在的时候说明用户已登录，否则没有登录
       *
       * */
    const token = store.state.user.token
    if (token) {
        // 已登录  --- 判断是否为登录页面 -- 是 跳转到首页，否则直接放行
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        // 未登录 --- 如果跳转的目标路由对象本身就是登录页则直接放行，否则跳转到登录页面
        if (to.path === '/login') {
            next()
        } else {
            next('/login')
        }
    }
})
