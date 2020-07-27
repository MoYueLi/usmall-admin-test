<template>
  <div>
    <el-table :data="list" style="width: 100%;margin-bottom: 20px;"
              row-key="id" border
              :tree-props="{children: 'children'}">
      <el-table-column prop="id" label="用户编号" width="180">
      </el-table-column>
      <el-table-column prop="nickname" label="昵称" width="180">
      </el-table-column>
      <el-table-column prop="phone" label="手机号" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status === 1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="update(scope.row.uid)" type="primary">编 辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'mList',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      list: 'member/list'
    })
  },
  methods: {
    ...mapActions({
      reqList: 'member/setMemberList'
    }),
    update (id) {
      this.$emit('edit', id)
    }
  },
  mounted () {
    if (this.list.length === 0) {
      this.reqList()
    }
  }
}
</script>

<style scoped>

</style>
