import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../views/login/index')
    },
    {
      path: '/',
      component: () => import('../views/index/index'),
      children: [
        {
          path: 'banner',
          component: () => import('../views/banner/index'),
          name: '轮播设置'
        },
        {
          path: 'cate',
          component: () => import('../views/cate/index'),
          name: '商品分类'
        },
        {
          path: 'goods',
          component: () => import('../views/goods/index'),
          name: '商品管理'
        },
        {
          path: 'home',
          component: () => import('../views/home/index'),
          name: '主页'
        },
        {
          path: 'manage',
          component: () => import('../views/manage/index'),
          name: '管理员管理'
        },
        {
          path: 'member',
          component: () => import('../views/member/index'),
          name: '会员管理'
        },
        {
          path: 'menu',
          component: () => import('../views/menu/index'),
          name: '菜单管理'
        },
        {
          path: 'role',
          component: () => import('../views/role/index'),
          name: '角色管理'
        },
        {
          path: 'seckill',
          component: () => import('../views/seckill/index'),
          name: '秒杀活动'
        },
        {
          path: 'spec',
          component: () => import('../views/spec/index'),
          name: '商品规格'
        },
        {
          path: '',
          redirect: 'home'
        }
      ]
    }
  ]
})
