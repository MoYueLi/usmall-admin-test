<template>
  <div>
    <el-table :data="list" style="width: 100%;margin-bottom: 20px;"
              row-key="id" border
              :tree-props="{children: 'children'}">
      <el-table-column prop="id" label="菜单编号" width="180">
      </el-table-column>
      <el-table-column prop="title" label="菜单名称" width="180">
      </el-table-column>
      <el-table-column label="菜单图标" width="180">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
        </template>
      </el-table-column>
      <el-table-column prop="url" label="菜单地址" width="180">
      </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-button type="primary" v-if="scope.row.status === 1">启用</el-button>
          <el-button type="info" v-else>禁用</el-button>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="update(scope.row.id)" type="primary">编 辑</el-button>
          <del-btn @confirm="del(scope.row.id)" type="danger">删 除</del-btn>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { reqMenuDel } from '@/utils/request'
import { successAlert, warningAlert } from '@/utils/alert'

export default {
  name: 'vList',
  computed: {
    // vuex中拿去共享的数据
    ...mapGetters({
      list: 'menu/list'
    })
  },
  data () {
    return {}
  },
  methods: {
    // 获取菜单数据的方法
    ...mapActions({
      reqList: 'menu/reqMenuList'
    }),
    // 删除单个表单数据
    del (id) {
      reqMenuDel({ id: id }).then(res => {
        if (res.data.code === 200) {
          successAlert(res.data.msg)
          this.reqList()
        } else {
          warningAlert(res.data.msg)
        }
      })

      // this.$confirm('你确定要删除吗？', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // })
      //   .then(() => {
      //     reqMenuDel({ id: id }).then(res => {
      //       if (res.data.code === 200) {
      //         successAlert(res.data.msg)
      //         this.reqList()
      //       } else {
      //         warningAlert(res.data.msg)
      //       }
      //     })
      //   })
      //   .catch(() => {
      //     this.$message({
      //       type: 'info',
      //       message: '已取消删除'
      //     })
      //   })
    },
    // 修改数据
    update (id) {
      this.$emit('edit', id)
    }
  },
  mounted () {
    this.reqList()
  }
}
</script>

<style scoped>

</style>
