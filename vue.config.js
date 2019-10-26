let path = require('path');
const PAGES = {
    index: {
        // page 的入口
        entry: 'src/index.ts',
        // 模板来源
        template: 'src/index.html',
        // 在 dist/index.html 的输出
        filename: 'index.html',
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
};
module.exports = {
    publicPath: './',
    pages: PAGES,
    configureWebpack: {
        resolve: {
            alias: {
                '@': path.join(__dirname, 'src'),
                vue$: 'vue/dist/vue.esm.js',
                'project.css': path.join(__dirname, 'src/lib/style/project.css'),
                commonService: path.join(__dirname, 'src/service/commonService.js'),
                permissionService: path.join(__dirname, 'src/service/permission/service.js'),
                filter: path.join(__dirname, 'src/lib/filter/index.js')
            }
        }
    },
    // mock及代理
    // devServer: {
    //     disableHostCheck: true,
    //     // eslint报错输出到浏览器
    //     overlay: {
    //         warnings: true,
    //         errors: true
    //     },
    //     // 代理
    //     proxy: {
    //         '/marketcenter': {
    //             target: 'https://jz-amp.daojia-inc.com/mock/309'
    //         }
    //     }
    // },
    // // eslint报错展示
    // lintOnSave: 'error'
};
