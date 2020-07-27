import { reqRoleList } from '@/utils/request'

const state = {
  list: []
}

const mutations = {
  changeList (state, arr) {
    state.list = arr
  }
}

const actions = {
  reqRoleList (context) {
    reqRoleList().then(res => {
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
