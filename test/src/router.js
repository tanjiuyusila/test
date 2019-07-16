import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Test from './views/Test.vue';
import SetTest from './views/SetTest.vue';
import SingleTest from './views/SingleTest.vue';

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
      path: '/test',
      name: 'test',
      component: Test,
      children:[
        {
          path: 'setTest',
          name: 'setTest',
          component: SetTest
        },
        {
          path: 'singleTest',
          name: 'singleTest',
          component: SingleTest
        },
      ]
    }
  ],
});
