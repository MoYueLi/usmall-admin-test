<template>
  <div>
    <el-button class="elBtn" @click="add" type="primary">添加</el-button>
    <!--添加弹窗-->
    <c-add ref="add" :info="info"/>
    <!--展示列表-->
    <c-list @edit="edit"/>
  </div>
</template>

<script>
import CAdd from './components/cAdd'
import CList from './components/cList'

export default {
  name: 'Cate',
  components: { CList, CAdd },
  data () {
    return {
      info: {
        show: false,
        title: '商品分类添加',
        isAdd: true
      }
    }
  },
  methods: {
    add () {
      this.info.show = true
      this.info.title = '商品分类添加'
      this.info.isAdd = true
    },
    edit (id) {
      this.info.show = true
      this.info.title = '商品分类编辑'
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
