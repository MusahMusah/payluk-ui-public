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
    transactionDetails : []
  },

  getters : {
    getTransactionsData(state){
      return state.transactionDetails
    }
  },

  mutations : {
    SET_GET_TRANSACTION_DATA(state, data){
      state.transactionDetails = data
    }
  },

  actions : {
    // Load Notification
    async transactionDetailsData({commit}) {
      let response = await axios.get('/transactions/all')
      if (response) {
        console.log(response.data.transactions)
        commit('SET_GET_TRANSACTION_DATA', response.data.transactions)
      }
    },
    async completePaystackPayment(_, payload) {
        return await axios.post('/paystack/invoke', {reference : payload}) 
    },

  }

}
