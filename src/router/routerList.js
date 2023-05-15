import Layout from '@/layout'
export default {
  routerList: [
    {
      id: '1',
      pid: ' ',
      path: '/case',
      redirect: 'case',
      name: '案例',
      component: Layout,
      label: '案例',
      alwaysShow: true,
      meta: {
        title: '案例'
      },
      children: [{
        id: '1-1',
        pid: 1,
        path: 'case',
        name: '数据中心',
        label: '数据中心',
        component: () => import('@/views/case/index'),
        meta: { title: '数据中心', icon: '' }
      }]
    },
    {
      id: '2',
      pid: ' ',
      path: '/index',
      redirect: 'index',
      name: '首页',
      component: Layout,
      label: '首页',
      alwaysShow: true,
      meta: {
        title: '首页'
      },
      children: [{
        id: '2-1',
        pid: 2,
        path: 'index',
        name: '测试',
        label: '测试',
        component: () => import('@/views/index/index'),
        meta: { title: '测试', icon: '' }
      }]
    }
  ]
}