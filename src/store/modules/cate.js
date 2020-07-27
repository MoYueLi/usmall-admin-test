import { reqCateList } from '../../utils/request'

const state = {
  list: []
}

const mutations = {
  changeList (state, arr) {
    state.list = arr
  }
}

const actions = {
  setCateList (context) {
    reqCateList({istree: true}).then(res => {
      context.commit('changeList', res.data.list)
    })
  }
}
const getters = {
  list: (state) => state.list
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
