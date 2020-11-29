/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "axios"
// import router from "@/router"

export default {
  namespaced: true,

  state : {
    supportedBanks : [],
    withdrawalCharges : [],
  },

  getters : {
    getSupportedBanks(state){
      return state.supportedBanks
    },
    getWithdrawalCharges(state){
      return state.withdrawalCharges
    },
  },

  mutations : {
    SET_GET_SUPPORTED_BANKS(state, data){
      state.supportedBanks = data
    },
    SET_GET_WITHDRAWAL_CHARGES(state, data){
      state.withdrawalCharges = data
    },
  },

  actions : {
    // Load Supported Banks
    async supportedBanks({commit}, payload) {
      let response = await axios.get('/withdrawal/bank?currency=' + payload)
      if (response) {
        commit('SET_GET_SUPPORTED_BANKS', response.data)
      }
    },

    // Load Withdrawal Charges
    async withdrawalCharges({commit}, payload) {
      let response = await axios.get('/withdrawal/charges?currency=' + payload)
      if (response) {
        commit('SET_GET_WITHDRAWAL_CHARGES', response.data.charges)
      }
    },

    // Instant Validation Of Account
    async validateBankCredentials(_, payload) {
        return await axios.post('/withdrawal/validate', payload)
    },

    // Initiate Transfer
    async initiateCashTransfer (_, payload) {
      return await axios.post('/withdrawal/initiate', payload)
    },

  }

}
