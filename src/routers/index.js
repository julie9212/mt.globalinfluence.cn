  export default [
    {
      path: '/',
      name: 'layout',
      component: () => import('../layout/Home'),
      children: [
        {
          path: '/',
          name: '首页',
          component: () => import('../views/Index/Index'),
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/About'),
          },
      ]
    },
    // {
    //   path: '/login',
    //   name: '后台登录',
    //   component: () => import('../views/login.vue'),
    // },
    // {
    //   path: '/home',
    //   name: 'layout',
    //   component: () => import('../views/Home'),
    //   }

  ]