import Vue from 'vue';
import VueRouter from 'vue-router';
import home from './modules/home';

Vue.use(VueRouter);

const homeRouter = new VueRouter({ routes: home });


export {
    homeRouter
};
