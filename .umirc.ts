import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
/*   layout: {  
     name: 'My App', // 网站名字
     layout: 'mix', // layout 的菜单模式， side: 左侧导航 top: 顶部导航 mix: 混合式导航
     navTheme: 'light', // 左侧导航的主题为 浅色 主题
  }, */
  //约定路由需要注释这段 
 /*  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/products',component: '@/pages/products'},
  ], */
  fastRefresh: {},
});
