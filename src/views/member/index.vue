<template>
  <div>
    <!--会员信息修改-->
    <m-edit ref="edit" :info="info"/>
    <!--会员信息列表-->
    <m-list @edit="edit"/>
  </div>
</template>

<script>
import MEdit from './components/mEdit'
import MList from './components/mList'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Member',
  components: { MList, MEdit },
  data () {
    return {
      info: {
        show: false,
        title: '会员修改'
      }
    }
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
    edit (id) {
      this.info.show = true
      this.$refs.edit.getInfo(id)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
