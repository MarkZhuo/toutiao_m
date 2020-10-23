import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入并注册vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
// 引入全局样式
import './styles/css.less'
// 导入flexible
import 'amfe-flexible'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
