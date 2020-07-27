<template>
  <div>
    <el-button class="elBtn" @click="add" type="primary">添加</el-button>
    <!--添加弹窗-->
    <r-add ref="add" :info="info"/>
    <!--数据table-->
    <r-list @edit="edit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import RAdd from './components/rAdd'
import RList from './components/rList'

export default {
  name: 'Role',
  components: { RList, RAdd },
  data () {
    return {
      info: {
        show: false,
        title: '角色添加',
        isAdd: true
      }
    }
  },
  methods: {
    ...mapActions({
      reqRoleList: 'role/reqRoleList'
    }),
    add () {
      this.info.show = true
      this.info.title = '角色添加'
      this.info.isAdd = true
      // this.reqRoleList()
    },
    edit (id) {
      this.info.show = true
      this.info.title = '角色编辑'
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
