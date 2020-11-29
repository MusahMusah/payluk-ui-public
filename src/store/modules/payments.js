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
    transactionDetails : [],
    withdrawalDetails : [],
  },

  getters : {
    getTransactionsData(state){
      return state.transactionDetails
    },
    getWithdrawalData(state){
      return state.withdrawalDetails
    }
  },

  mutations : {
    SET_GET_TRANSACTION_DATA(state, data){
      state.transactionDetails = data
    },
    SET_GET_WITHDRAWAL_DATA(state, data) {
      state.withdrawalDetails = data
    },
  },

  actions : {
    // Load All User's Transaction Details
    async transactionDetailsData({commit}) {
      let response = await axios.get('/transactions/all')
      if (response) {
        console.log(response.data.transactions)
        commit('SET_GET_TRANSACTION_DATA', response.data.transactions)
      }
    },

    // Load All User's Withdrawal Details
    async withdrawalDetailsData({commit}) {
      let response = await axios.get('/withdrawal/list')
      if (response) {
        console.log(response.data)
        commit('SET_GET_WITHDRAWAL_DATA', response.data.data)
      }
    },
    async completePaystackPayment(_, payload) {
        return await axios.post('/paystack/invoke', {reference : payload})
    },

  }

}
