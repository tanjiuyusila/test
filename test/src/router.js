import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import SetTest from './views/SetTest.vue';
import TestDetail from './views/TestDetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/setTest',
      name: 'setTest',
      component: SetTest,
    },
    {
      path: '/testDetail/:id',
      name: 'testDetail',
      component: TestDetail
    }
  ],
});
