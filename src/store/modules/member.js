import { reqMemberList } from '../../utils/request'

const state = {
  list: []
}

const mutations = {
  changeList (state, arr) {
    state.list = arr
  }
}

const actions = {
  setMemberList (context) {
    reqMemberList().then(res => {
      if (res.data.code === 200) {
        context.commit('changeList', res.data.list)
      }
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
  actions,
  getters
}
