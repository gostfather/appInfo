// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  // {
  //   name: '反馈',
  //   path: 'https://github.com/alibaba/ice',
  //   external: true,
  //   newWindow: true,
  //   icon: 'message',
  // },
  // {
  //   name: '帮助',
  //   path: 'https://alibaba.github.io/ice',
  //   external: true,
  //   newWindow: true,
  //   icon: 'bangzhu',
  // },
];

const asideMenuConfig = [
  {
    name: '应用详情',
    path: '/dashboard',
    icon: 'home2',
    children: [
      {
        name: '应用详情',
        path: '/dashboard/monitor',
      },
    ],
  },
  {
    name: '应用查询',
    path: '/query',
  },
  {
    name: '账号申请',
    path: '/account',
    icon: 'home',
  },
  {
    name: '应用详情',
    path: '/app',
    icon: 'home',
  },
  {
    name: '\u5E94\u7528\u5F52\u56E0',
    path: '/AppAttribution',
    icon: 'home',
    children: [
      {
        name: '应用报警',
        path: '/AppAttribution/alert',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
