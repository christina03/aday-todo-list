export default [
    { path: '/', redirect: '/index' },
    {
        name: 'index',
        path: '/index',
        component: () => import('@/pages/App.vue'),
        meta: { title: '首页' }
    }
];
