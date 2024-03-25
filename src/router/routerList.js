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
        name: '测试页面',
        label: '测试页面',
        component: () => import('@/views/case/index'),
        meta: { title: '测试页面', icon: '' }
      },{
        id: '1-2',
        pid:1,
        path: 'vModel',
        name: '自定义组件实现 v-model',
        label: '自定义组件实现 v-model',
        component: ()=> import('@/views/case/vModel'),
        meta: { title: '自定义组件实现 v-model', icon: '' }
      },{
        id: '1-3',
        pid:1,
        path: 'autoText',
        name: '自动文本效果',
        label: '自动文本效果',
        component: ()=> import('@/views/case/auto-text-effect'),
        meta: { title: '自动文本效果', icon: '' }
      }
    ]
    },
    {
      id: '2',
      pid: ' ',
      path: '/richtext',
      name: '富文本',
      component: Layout,
      label: '富文本',
      meta: {
        title: '富文本'
      },
      children: [
        {
          id: '2-1',
          path: 'richtext',
          name: '富文本编辑器',
          label: '富文本编辑器',
          pid: '1',
          component: ()=> import('@/views/Richtext/index.vue'),
          meta: { title: '富文本编辑器', icon: '' }
        }
      ]
    }
  ]
}