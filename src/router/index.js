import { createRouter, createWebHistory } from 'vue-router'
import NProgress from '@/utils/nprogress'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      // 登录
      path: '/login',
      component: () => import('@/whiteListPages/login/Index.vue'),
      name: 'login',
    },
    {
      // 登录成功
      path: '/',
      component: () => import('@/layout/Index.vue'),
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: '首页',
          meta: { breadcrumb: ['首页'] },
          component: () => import('@/pages/index/Index.vue'),
        },
        {
          path: '/downloader-config',
          name: '下载器配置',
          meta: { breadcrumb: ['下载器配置'] },
          component: () => import('@/pages/downloaderConfig/Index.vue'),
        },
        {
          path: '/site-config',
          name: '站点配置',
          meta: { breadcrumb: ['站点配置'] },
          component: () => import('@/pages/siteConfig/Index.vue'),
        },
        {
          path: '/task',
          name: '定时任务',
          meta: { breadcrumb: ['定时任务'] },
          component: () => import('@/pages/task/Index.vue'),
        },
        {
          path: '/settings/logs',
          name: '系统日志管理',
          meta: { breadcrumb: ['系统设置', '系统日志管理'] },
          component: () => import('@/pages/settings/Logs.vue'),
        },
        {
          path: '/settings/menu',
          name: '系统菜单管理',
          meta: { breadcrumb: ['系统设置', '系统菜单管理'] },
          component: () => import('@/pages/settings/Menu.vue'),
        },
      ],
    },
    {
      // 404
      path: '/404',
      component: () => import('@/whiteListPages/notFound/Index.vue'),
      name: '404',
    },
    {
      // 任意路由
      path: '/:pathMatch(.*)*',
      redirect: '/404',
      name: 'Any',
    },
  ],
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0,
    }
  },
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
