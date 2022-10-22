import { createStore } from 'vuex'

export default createStore({
  state: {
    isUploaded:false
  },
  getters: {
  },
  mutations: {
    setIsUploaded(state) {
      state.isUploaded=true
    },
    setIsFileEmpty(state) {
      state.isUploaded=false
    }
  },
  actions: {
  },
  modules: {
  }
})
