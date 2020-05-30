import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import {
  SET_POSITION,
  SET_USERNAME
} from './mutation-types'

const store = new Vuex.Store({
  strict: process.env.NODE_ENV == 'production',
  state: {
    position: '北京',
    userName: ''
  },
  mutations: {
    [SET_POSITION](state, {position}) {
      state.position = position;
    },
    [SET_USERNAME](state, {userName}) {
      state.userName = userName;
    }
  }
})

export default store;