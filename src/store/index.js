import Vue from 'vue'
import Vuex from 'vuex'
import { state, mutations, getters } from './mutations'
import actions from './actions'

Vue.use(Vuex)

const moduleFiles = require.context('./modules', true, /\.js$/)

const modules = moduleFiles.keys().reduce(
  (modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = moduleFiles(modulePath)
    modules[moduleName] = value.default
    return modules
  }, {})

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})
