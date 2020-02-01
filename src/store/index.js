import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    age:100
  },
  mutations: {
    add(state){
     state.age++
    },
    sub(state){
      state.age--
     }
  },
  actions: {
  },
  modules: {
  },
  getters:{
    pp(state){
      return state.age*state.age
    }
  }
})
