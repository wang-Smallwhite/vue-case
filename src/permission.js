import router, { constantRoutes, resetRouter, asyncRoutes } from '@/router'
const whiteList = ['/login'] // no redirect whitelist  白名单

let hasToken = false, hasRoles = false, oneRun= true
router.beforeEach((to, from, next)=>{
  if(hasToken) {
    console.log(to.path)
    if(to.path == '/login') {  // 已登录， 自动跳转到 / 页面
      next({path: '/'});
    }else {
      if(to.path == '/') {
        next()
      }else {  // 登录后， 进入其他页面 进行权限判断
        if(hasRoles) {
          next()
        }else {
          if(oneRun) {
            oneRun = false
            console.log('没有权限, 动态添加')
            const totalRoutes = [...asyncRoutes]
            console.log(totalRoutes)
            resetRouter()
            router.options.routes = totalRoutes;
            console.log(router.options)
            router.addRoutes(totalRoutes)
            next({...to, replace: true})
            oneRun = true
          }else {
            next()
          }
          
        }
      }
    }
  }else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
    }
  }

  
})