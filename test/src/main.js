import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import qs from 'qs';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  qs,
  render: h => h(App),
}).$mount('#app');

