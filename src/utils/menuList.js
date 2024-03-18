const menuList = [
  {
    meta: {
      icon: 'ph:chart-line-fill',
      title: '首页',
      breadcrumb: ['首页']
    },
    id: '01',
    name: '首页',
    path: '/index',
    parentId: 0,
    sort: 1,
  },
  {
    meta: {
      icon: 'ph:download-fill',
      title: '下载器配置',
      breadcrumb: ['下载器配置']
    },
    id: '02',
    name: '下载器配置',
    path: '/downloader-config',
    parentId: 0,
    sort: 2,
  },
  {
    meta: {
      icon: 'ph:planet-fill',
      title: '站点配置',
      breadcrumb: ['站点配置']
    },
    id: '02',
    name: '站点配置',
    path: '/site-config',
    parentId: 0,
    sort: 2,
  },
  {
    meta: {
      icon: 'ph:clock-countdown-fill',
      title: '定时任务',
      breadcrumb: ['定时任务']
    },
    id: '02',
    name: '定时任务',
    path: '/task',
    parentId: 0,
    sort: 2,
  },
  {
    meta: {
      icon: 'ph:gear-fine-fill',
      title: '系统设置',
      breadcrumb: ['系统设置']
    },
    id: '02',
    name: '系统设置',
    path: '/settings',
    parentId: 0,
    sort: 2,
    children: [
      {
        meta: {
          icon: 'ph:notebook-fill',
          title: '系统日志管理',
          breadcrumb: ['系统设置', '系统日志管理']
        },
        id: '02',
        name: '系统日志管理',
        path: '/settings/logs',
        parentId: 0,
        sort: 2,
      },
      {
        meta: {
          icon: 'ph:squares-four-fill',
          title: '系统菜单管理',
          breadcrumb: ['系统设置', '系统菜单管理']
        },
        id: '02',
        name: '系统菜单管理',
        path: '/settings/menu',
        parentId: 0,
        sort: 2,
      },
    ]
  },
]

export default menuList
