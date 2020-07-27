<template>
  <div>
    <el-table :data="list" border style="width: 100%">
      <el-table-column prop="id" label="角色编号" width="180">
      </el-table-column>
      <el-table-column prop="rolename" label="角色名称" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status===1">启用</el-button>
          <el-button type="primary" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" @click="update(scope.row.id)">编辑</el-button>
          <del-btn @confirm="del(scope.row.id)"></del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { reqRoleDelete } from '@/utils/request'
import { successAlert, warningAlert } from '@/utils/alert'

export default {
  name: 'rList',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      list: 'role/list'
    })
  },
  methods: {
    ...mapActions({
      reqList: 'role/reqRoleList',
      reqMenuList: 'menu/reqMenuList'
    }),
    del (id) {
      reqRoleDelete({ id: id }).then(res => {
        if (res.data.code === 200) {
          successAlert(res.data.msg)
          this.reqList()
        } else {
          warningAlert(res.data.msg)
        }
      })
    },
    update (id) {
      this.$emit('edit', id)
    }
  },
  mounted () {
    this.reqList()
    this.reqMenuList()
  }
}
</script>

<style scoped>

</style>
