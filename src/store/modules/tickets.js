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
    allTickets : []
  },

  getters : {
    getAllTickets(state){
      return state.allTickets
    }
  },

  mutations : {
    SET_ALL_TICKETS(state, data){
      state.allTickets = data
    }
  },

  actions : {
    // Seller sendTicket 
    async sendTicket(_, payload){
        return await axios.post('/seller/ticket/create', payload)
    },
  
    // Buyer sendTicket
    async sendBuyerTicket(_, payload){
    return await axios.post('/buyer/ticket/create', payload)
    },

    // Get All Tickets
    async allTickets({commit}) {
        let response = await axios.get('/ticket/view')
        if (response.status == 200) {
            commit('SET_ALL_TICKETS', response.data.ticket)
        }
    },

  }

}
