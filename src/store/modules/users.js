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
// const ApiLoginUrl = 'http://localhost:3000/login';
const ApiLoginUrl = 'https://www.app.payluk.com/login';
export default {
  namespaced: true,

  state : {
    userData : [],
    topSellers : [],
    singleUserData : [],
    notifications : [],
    currencies:[],
    allUsers : [],
    dashBoardAnalytics : [],
    dashBoardContractsOverview: [],
  },

  getters : {
    getUserData (state) {
      return state.userData
    },
    getTopSellers (state) {
      return state.topSellers
    },
    getSingleUserData(state) {
      return state.singleUserData
    },
    getNotifications(state){
      return state.notifications
    },
    getAllCurrencies(state){
      return state.currencies
    },
    getAllUsers(state){
      return state.allUsers
    },
    getDashBoardAnalytics(state){
      return state.dashBoardAnalytics
    },
    getDashBoardContractsOverView(state){
      return state.dashBoardContractsOverview
    },
  },

  mutations : {
    SET_USER_DATA (state, data){
      state.userData = data
    },
    SET_TOP_SELLERS (state, data) {
      state.topSellers = data
    },
    SET_SINGLE_USER_DATA(state, data){
      state.singleUserData = data
    },
    SET_NOTIFICATION(state, data){
      state.notifications = data
    },
    SET_GET_ALL_CURRENCIES(state, data){
      state.currencies = data
    },
    SET_ALL_USERS(state, data){
      state.allUsers = data
    },
    SET_DASHBOARD_ANALYTICS(state, data) {
      state.dashBoardAnalytics = data
    },
    SET_DASHBOARD_CONTRACT_OVERVIEW(state, data)
    {
      state.dashBoardContractsOverview = data
    },
  },

  actions : {
    // Get Active User Data
    async activeUserInfo({ commit }) {
        let response = await axios.get('/firewall').then((res) => {
          if (res.status == 201 && res.data.errorcode == 702) {
            localStorage.removeItem("token")
            localStorage.removeItem("verify_token")
            return window.location.href = ApiLoginUrl;
          }
        }).catch(() => {
          localStorage.removeItem("token")
          localStorage.removeItem("verify_token")
          return window.location.href = ApiLoginUrl;
        })
        let res = await axios.get('/account')
        // console.log(res)
        if (res.status == 200) {
            commit('SET_USER_DATA', res.data.data)
        } else if(response.status == 201) {
          localStorage.removeItem("token")
          localStorage.removeItem("verify_token")
          return window.location.href = ApiLoginUrl;
        }else {
          localStorage.removeItem("token")
          localStorage.removeItem("verify_token")
          return window.location.href = ApiLoginUrl;
        }
    },

    // Get User By Wallet Id
    async UserPublicProfile({ commit }, wallet_id) {
      let response = await axios.get('/clients?wallet_id=' + wallet_id)
      // console.log(response.data.data)
      if (response) {
        commit('SET_SINGLE_USER_DATA', response.data.data)
      }
    },

    // Top Sellers
    async topSellers({ commit }){
      let response = await axios.get('/top_sellers')
      if (response) {
        commit('SET_TOP_SELLERS', response.data.users)
      }
    },

    // Get All Currencies
    async allCurrencies({ commit }){
      let response = await axios.get('/currency/get')
      // console.log(response.data)
      if (response) {
        commit('SET_GET_ALL_CURRENCIES', response.data.data)
      }
    },

    // Update Currency
    async updateCurrency(_, payload){
      // console.log(response.data)
      return await axios.put('/currency/set', payload)
    },

    // Search For Sellers/Users
    async searchUserData({commit}){
      let response = await axios.get('/search')
      if (response) {
        commit('SET_ALL_USERS', response.data.data)
      }
    },
    // Update User Password
    async updatePassword(_, payload) {
      return await axios.put('/profile/update', payload)
    },

    // Update About Info
    async updateAboutInfo (_, payload) {
      return await axios.put('/about_us', {about : payload})
    },

    // Send Invite
    async sendInvite(_, payload) {
      return await axios.get('/request_collaboration?wallet_id=' + payload +'&invite=1')
    },

    // Load Notification
    async notifications({commit}) {
      let response = await axios.get('/notification')
      if (response) {
        commit('SET_NOTIFICATION', response.data)
      }
    },

    // Activate Account
    async triggerOtp() {
      return await axios.get('/send_otp')
    },

    // Verify Otp
    async verifyAccount(_, payload) {
      return await axios.post('/verify_otp', {otp : payload})
    },

      // Resend Otp For User
    async resendOtp() {
      return await axios.get('/resend_otp')
      // .then((response) => {
      //   router.push({ name: 'verify-otp', params: { dataMessage: response.data.message } })
      // })
    },

    // DashBoard Schedule Analysis
    async dashBoardAnalytics({commit}) {
      let response = await axios.get('/dashboard/chart')
      if (response) {
        commit('SET_DASHBOARD_ANALYTICS', response.data)
      }
    },
    // DashBoard Schedule Analysis
    async dashBoardContractsOverview({commit}) {
      let response = await axios.get('/dashboard/invoice/activities')
      if (response) {
        commit('SET_DASHBOARD_CONTRACT_OVERVIEW', response.data.data)
      }
    },

  }

}
