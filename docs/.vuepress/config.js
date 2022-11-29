module.exports = {
  themeConfig: {
    logo: '/assets/img/logo.png',
    //全局自动生成侧边栏
    // sidebar: 'auto',
    //数组写法
    // sidebar: [
    //   '/',
    //   'about',
    //   'about1',
    //   {
    //     title: '第一个分组', // 必要的
    //     path: '/css/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ['/css/c-aaa', '/css/c-bbb', '/css/c-ccc'],
    //   },
    // ],
    //对象写法
    sidebar: {
      '/css/': ['c-aaa', 'c-bbb', 'c-ccc'],
    },
    //全局消失导航栏
    // navbar: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'about', link: '/about' },
      { text: 'about1', link: '/about1' },
      {
        text: 'Languages',
        items: [
          {
            text: 'Group1',
            items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ],
          },
          {
            text: 'Group2',
            items: [
              { text: 'Home', link: '/' },
              { text: 'Guide', link: '/about' },
            ],
          },
        ],
      },
    ],
  },
};
