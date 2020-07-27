import { reqMenuList } from '../../utils/request'

const state = {
// 列表数据
  list: []
}

const mutations = {
  // 修改列表数据
  changeList (state, arr) {
    state.list = arr
  }
}

const actions = {
  reqMenuList (context) {
    reqMenuList({ istree: true }).then(res => {
      context.commit('changeList', res.data.list)
    })
  }
}

const getters = {
  list: (statr) => state.list
}

export default {
  namespaced: true,
  getters,
  mutations,
  state,
  actions
}
