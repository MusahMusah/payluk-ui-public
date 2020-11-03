/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"
import authentication from './modules/authentication'
import users from './modules/users'
import contract_request from './modules/contract_request'
import payments from './modules/payments'
import tickets from './modules/tickets'

Vue.use(Vuex)


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules : {
      authentication,
      users,
      contract_request,
      payments,
      tickets
    },
    strict: process.env.NODE_ENV !== 'production'
})
