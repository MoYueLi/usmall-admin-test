<template>
  <div>
    <el-button @click="add" type="primary">添加</el-button>
    <!-- 添加弹窗-->
    <u-add ref="add" :info="info"/>
    <!-- 数据列表-->
    <u-list @edit="edit"/>
  </div>
</template>

<script>
import UAdd from './components/uAdd'
import UList from './components/uList'

export default {
  name: 'Manage',
  components: { UList, UAdd },
  data () {
    return {
      info: {
        show: false,
        title: '管理员添加',
        isAdd: true
      }
    }
  },
  methods: {
    add () {
      this.info.show = true
      this.info.title = '管理员添加'
      this.info.isAdd = true
    },
    edit (id) {
      this.info.show = true
      this.info.title = '管理员修改'
      this.info.isAdd = false
      this.$refs.add.getDetail(id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
