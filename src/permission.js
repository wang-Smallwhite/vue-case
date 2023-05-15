import router, { constantRoutes, resetRouter, asyncRoutes } from '@/router'
import {getToken} from '@/utils/auth'
import RouterList from './router/routerList'
const whiteList = ['/login'] // no redirect whitelist  白名单

let hasRoles = false, oneRun= true
router.beforeEach((to, from, next)=>{
  const hasToken = getToken()
  if(hasToken) {
    if(to.path == '/login') {  // 已登录， 自动跳转到 / 页面
      next({path: '/'});
    }else { // 登录后， 进入其他页面 进行权限判断
      if(hasRoles) {
        console.log('有权限？')
        next()
      }else {
        if(oneRun) {
          oneRun = false
          // console.log('没有权限, 动态添加')
          const totalRoutes = [...asyncRoutes, ...RouterList.routerList]
          resetRouter()
          router.options.routes = totalRoutes;
          router.addRoutes(totalRoutes)
          next({...to, replace: true})
          oneRun = true
        }else {
          next()
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