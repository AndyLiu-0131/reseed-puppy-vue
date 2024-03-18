import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 引入element-plus图标
import * as icons from '@element-plus/icons-vue'
// 引入全局样式
import '@/assets/styles/index.scss'
import 'element-plus/dist/index.css'
// 引入iconfont
import '@/assets/styles/iconfont/iconfont.css'
// 引入暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入pinia
import store from '@/store'
import { Icon } from '@iconify/vue'

const app = createApp(App)

Object.entries(icons).forEach(([key, component]) => {
  app.component(key, component)
})
app.use(ElementPlus, {
  locale: zhCn,
})
app.component('Icon', Icon)
app.use(router)
app.use(store)
app.mount('#app')
