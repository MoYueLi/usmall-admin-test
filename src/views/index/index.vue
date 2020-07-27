<template>
  <div>
    <el-container class="mainView">
<!--      <el-scrollbar wrap-class="scrollbar-wrapper">-->
      <el-aside class="aside" width="150px">

          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            router
            active-text-color="#ffd04b">
            <el-menu-item index="/home">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>首页</span>
              </template>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">系统设置</span>
              </template>
              <el-menu-item index="/menu">菜单管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
              <el-menu-item index="/manage">管理员管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span slot="title">商城管理</span>
              </template>
              <el-menu-item index="/cate" :disabled="$route.path=='/cate'">商品分类</el-menu-item>
              <el-menu-item index="/spec">商品规格</el-menu-item>
              <el-menu-item index="/goods">商品管理</el-menu-item>
              <el-menu-item index="/member">会员管理</el-menu-item>
              <el-menu-item index="/banner">轮播图管理</el-menu-item>
              <el-menu-item index="/seckill">秒杀活动</el-menu-item>
            </el-submenu>
          </el-menu>

      </el-aside>
<!--      </el-scrollbar>-->
      <el-container>
        <el-header>头部</el-header>
        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view class="view"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .aside {
    background: #545c64;
    height: 100vh;
    overflow: hidden;
  }

  .el-col {
    width: 100%;
    height: 100%;
  }

  .el-header {
    background: #b3c0d1;
    overflow: hidden;
  }
  .view{
    padding-top: 20px;
  }
  .mainView{
    height: 100vh;
  }

</style>
