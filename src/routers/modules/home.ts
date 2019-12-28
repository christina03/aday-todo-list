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
        path: '/JsDemo/stringifyDemo',
        component: () => import('@/pages/JsDemo/StringifyDemo.vue'),
        meta: { title: 'JSON.stringify()demo' }
    },
    {
        name: 'vmodelDemo',
        path: '/VueDemo/vmodelDemo',
        component: () => import('@/pages/VueDemo/VmodelDemo.vue'),
        meta: { title: 'VmodelDemo' }
    },
    {
        name: 'JsDataType',
        path: '/JsDemo/JsDataType',
        component: () => import('@/pages/JsDemo/JsDataType.vue'),
        meta: { title: 'JS数据类型' }
    },
    {
        name: 'ThousandsSeparator',
        path: '/JsDemo/ThousandsSeparator',
        component: () => import('@/pages/JsDemo/ThousandsSeparator.vue'),
        meta: { title: '数据千分位分割' }
    }
];
