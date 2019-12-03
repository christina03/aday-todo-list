export default [
    { path: '/', redirect: '/index' },
    {
        name: 'index',
        path: '/index',
        component: () => import('@/pages/App.vue'),
        meta: { title: '首页' }
    },
    {
        name: 'index',
        path: '/pageList',
        component: () => import('@/pages/PageList.vue'),
        meta: { title: '分页demo' }
    },
    {
        name: 'stringifyDemo',
        path: '/stringifyDemo',
        component: () => import('@/pages/StringifyDemo.vue'),
        meta: { title: 'JSON.stringify()demo' }
    },
    {
        name: 'vmodelDemo',
        path: '/vmodelDemo',
        component: () => import('@/pages/VmodelDemo.vue'),
        meta: { title: 'JSON.stringify()demo' }
    }
];
