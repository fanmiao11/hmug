import App from './App'
import * as filters from '@/filters/index.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
