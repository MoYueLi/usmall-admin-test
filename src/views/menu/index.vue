<template>
  <div>
    <el-button class="elBtn" @click="add" type="primary">添加</el-button>
    <!--添加编辑弹窗-->
    <v-add ref="add" :info="info"/>
    <!--数据列表-->
    <v-list @edit="edit"/>
  </div>
</template>

<script>
import VAdd from './components/mAdd'
import VList from './components/mList'
import { mapGetters } from 'vuex'

export default {
  name: 'Menu',
  components: { VList, VAdd },
  computed: {
    ...mapGetters({
      list: 'menu/list'
    })
  },
  data () {
    return {
      info: {
        show: false,
        title: '菜单添加',
        isAdd: true
      }
    }
  },
  methods: {
    add () {
      this.info.show = true
      this.info.isAdd = true
      this.info.title = '菜单添加'
    },
    // 编辑数据
    edit (id) {
      this.info.show = true
      this.info.isAdd = false
      this.info.title = '菜单修改'
      this.$refs.add.getDetail(id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
  .elBtn {
    margin-bottom: 20px;
  }
</style>
