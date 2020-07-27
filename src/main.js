import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/iconfont.css'
import { Button, Swipe, SwipeItem, Tab, Tabs, List   } from 'vant'
import 'vant/lib/index.less'
Vue.use(Button)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
