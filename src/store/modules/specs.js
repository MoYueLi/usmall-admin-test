import { reqSpecsList, reqSpecsTotal } from '@/utils/request'

const state = {
  list: [],
  total: 0,
  page: 1,
  size: 3
}

const mutations = {
  setSpecsList (state, arr) {
    state.list = arr
  },
  setSpecsTotal (state, sum) {
    state.total = sum
    console.log(sum)
    console.log(state.total)
  },
  setSpecsPage (state, page) {
    state.page = page
  }
}

const actions = {
  // 请求商品规格数据 (分页方式)
  reqSpecsList (context) {
    const params = {
      size: context.state.size,
      page: context.state.page
    }
    reqSpecsList(params).then(res => {
      context.commit('setSpecsList', res.data.list)
    })
  },
  reqSpecsTotal (context) {
    reqSpecsTotal().then(res => {
      context.commit('setSpecsTotal', res.data.list[0].total)
    })
  },
  reqCurPage (context, page) {
    context.commit('setSpecsPage', page)
  }
}

const getters = {
  list: (state) => state.list,
  size: (state) => state.size,
  total: (state) => state.total
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
