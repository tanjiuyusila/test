import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
// use
Vue.use(mavonEditor);

import qs from 'qs';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  qs,
  render: h => h(App),
}).$mount('#app');

