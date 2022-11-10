import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/layout';
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
  
];

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '首页',
    children: [
      {
        path: 'index',
        name: 'index',
        component: ()=> import('../views/index')
      },{
        path: 'about',
        name: 'about',
        component: ()=> import('../views/about/index')
      }
    ]
  },
  
  
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
