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
    allrequest : [],
    buyerPendingContracts: [],
    buyerCompletedContracts: [],
    sellerPendingContracts: [],
    sellerCompletedContracts: []
  },

  getters : {
    getAllPendingRequest(state) {
      return state.allrequest
    },
    getBuyerPendingContracts(state){
      return state.buyerPendingContracts
    },
    getBuyerCompletedContracts(state){
      return state.buyerCompletedContracts
    },
    getSellerPendingContracts(state){
      return state.sellerPendingContracts
    },
    getSellerCompletedContracts(state){
      return state.sellerCompletedContracts
    }
  },

  mutations : {
    SET_ALL_PENDING_REQUEST(state, data) {
      return state.allrequest = data
    },
    SET_BUYER_PENDING_CONTRACTS(state, data){
      return state.buyerPendingContracts = data
    },
    SET_BUYER_COMPLETED_CONTRACTS(state, data){
      return state.buyerCompletedContracts = data
    },
    SET_SELLER_PENDING_CONTRACTS(state, data){
      return state.sellerPendingContracts = data
    },
    SET_SELLER_COMPLETED_CONTRACTS(state, data){
      return state.sellerCompletedContracts = data
    }
  },

  actions : {
    // Get All Pending Request
    async pendingRequest({commit}) {
      let response = await axios.get('/load_pending_invitation')
      // console.log(response)
      if (response.status === 200) {
        commit('SET_ALL_PENDING_REQUEST', response.data)
      }
    },

    // Accept Contract
    async acceptContract(_, payload){
      return await axios.post('/contract/quotation/buyer/pay', payload)
    },

    // Seller sendTicket 
    async sendTicket(_, payload){
      return await axios.post('/seller/ticket/create', payload)
    },

    // Buyer sendTicket
    async sendBuyerTicket(_, payload){
      return await axios.post('/buyer/ticket/create', payload)
    },

    // Close Contract/Transaction
    async closeContract(_, payload){
      return await axios.post('/contract/quotation/buyer/confirm', {invitation_id : payload})
    },

    // Decline Contract
    async declineContract(_, payload){
      return await axios.post('/contract/buyer/decline_contract', payload)
    },

    // Send Review
    async sendReview(_, payload){
      return await axios.post('/contract/quotation/buyer/review', payload)
    },

    // Send Request Modification
    async sendRequestModification(_, payload){
      return await axios.post('/contract/buyer/request_modification', payload)
    },

    // Get All Buyer Pending Contracts
    async buyerPendingContracts({commit}) {
      let response = await axios.get('/contract/buyer')
      // console.log(response.data.contracts)
      if (response.status === 200) {
        commit('SET_BUYER_PENDING_CONTRACTS', response.data.contracts)
      }
    },

    // Get All Buyer Pending Contracts
    async buyerCompletedContracts({commit}) {
      let response = await axios.get('/contract/buyer/completed')
      // console.log(response.data.contracts)
      if (response.status === 200) {
        commit('SET_BUYER_COMPLETED_CONTRACTS', response.data.contracts)
      }
    },

     // Get All Seller Pending Contracts
    async sellerPendingContracts({commit}) {
      let response = await axios.get('/contract/seller')
      // console.log(response.data.contracts)
      if (response.status === 200) {
        commit('SET_SELLER_PENDING_CONTRACTS', response.data.contracts)
      }
    },

    // Get All Seller Pending Contracts
    async sellerCompletedContracts({commit}) {
      let response = await axios.get('/contract/seller/completed')
      // console.log(response.data.contracts)
      if (response.status === 200) {
        commit('SET_SELLER_COMPLETED_CONTRACTS', response.data.contracts)
      }
    },

    // Accept Invitation
    async acceptInvite(_, payload) {
      return await axios.get('/invitation_pointer?invitation_id=' + payload +'&response=accepted')
    },

    // Decline Invitation
    async declineInvite(_, payload) {
      return await axios.get('/invitation_pointer?invitation_id=' + payload +'&response=declined')
    },

    // MArk Notifications as Read
    async notificationRead() {
      return await axios.get('/reset_notification')
    },

    // 
    async sendQuotation(_, payload) {
      return await axios.put('/send_quotation', payload) 
    },

  }

}
