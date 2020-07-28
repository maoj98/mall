import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/iconfont.css'
import { Button, Swipe, SwipeItem, Tab, Tabs, List , Cell, CellGroup  } from 'vant'
import 'vant/lib/index.less'
Vue.use(Button)
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(List);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
