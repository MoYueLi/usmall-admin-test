<template>
  <div>
    <el-table :data="list" style="width: 100%;margin-bottom: 20px;"
              row-key="id" border>
      <el-table-column prop="id" label="编号" width="180">
      </el-table-column>
      <el-table-column prop="title" label="轮播图标题" width="180">
      </el-table-column>
      <el-table-column label="图片" width="180">
        <template slot-scope="scope">
          <img :src="$imgpre+scope.row.img" alt/>
        </template>
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
import { reqBannerDelete } from '../../../utils/request'
import { successAlert, warningAlert } from '../../../utils/alert'

export default {
  name: 'bList',
  data () {
    return {}
  },
  computed: {
    ...mapGetters({
      list: 'banner/list'
    })
  },
  methods: {
    ...mapActions({
      reqList: 'banner/setBannerList'
    }),
    update (id) {
      this.$emit('edit', id)
    },
    del (id) {
      reqBannerDelete({ id: id }).then(res => {
        if (res.data.code === 200) {
          successAlert(res.data.msg)
          this.reqList()
        } else {
          warningAlert(res.data.msg)
        }
      })
    }
  },
  mounted () {
    if (this.list && !this.list.length) {
      this.reqList()
    }
  }
}
</script>

<style scoped>
  img {
    width: 100px;
  }
</style>
