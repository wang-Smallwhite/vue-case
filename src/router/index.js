import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/login',
    component: ()=> import('../views/login/login')
  },
  {
    path: '*',
    component: ()=> import('../views/404.vue')
  },
  {
    path: '/',
    component: ()=> import('../views/index')
  }
];

export const asyncRoutes = [
  {
    path: '/about',
    component: ()=> import('../views/about/index')
  }
]


const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export default router;
