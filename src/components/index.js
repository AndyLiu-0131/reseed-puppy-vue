import { defineAsyncComponent } from 'vue'

const registerComponent = (app) => {
  app.component(
    'RpSearch',
    () => import('./RpSearch.vue')
  )
  app.component(
    'RpTable',
    () => import('./RpTable.vue')
  )
}

export default registerComponent