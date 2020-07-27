<template>
  <div>
    <el-button @click="add" type="primary">添加</el-button>
    <!--添加规格-->
    <s-add ref="add" :info="info"/>
    <!--规格数据-->
    <s-list @edit="edit"/>
  </div>
</template>

<script>
import SAdd from './components/sAdd'
import SList from './components/sList'

export default {
  name: 'Spec',
  components: { SList, SAdd },
  data () {
    return {
      info: {
        show: false,
        title: '规格添加',
        isAdd: true
      }
    }
  },
  methods: {
    add () {
      this.info.show = true
      this.info.title = '规格添加'
      this.info.isAdd = true
    },
    edit (id) {
      this.info.show = true
      this.info.title = '规格修改'
      this.info.isAdd = false
      // console.log(id)
      this.$refs.add.getDetail(id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
