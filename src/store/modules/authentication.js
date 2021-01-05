/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "axios"
import router from "@/router"
// const ApiLoginUrl = 'http://localhost:3000/login';
const ApiLoginUrl = 'https://www.app.payluk.com/login';
export default {
  namespaced: true,

  state : {
    token : null,
    user : null,
    error_201 : null,
  },

  getters : {
    loggedIn(state) {
        return state.token !== null
    },
    user (state) {
      return state.user
    },
    authenticated (state) {
      return state.token && state.user
    },
    error_201 (state) {
      return state.error_201
    },
  },

  mutations : {
    SET_TOKEN (state, token){
      state.token = token
    },

    SET_USER (state, data){
      state.user = data
    },
    SET_ERROR (state, data){
      state.error_201 = data
    },
  },

  actions : {
    // Login User
    async logIn ( { dispatch, commit }, credentials) {
      let response = await axios.post('/login', credentials)
      if (response.data.token) {
        // Set jwt token
        commit('SET_TOKEN', response.data.token)
      }
      let verify = await axios.get('/firewall')
      if (verify.status == 200) {
        dispatch('attempt', response.data.token)

      } else if(verify.status == 201){

        localStorage.setItem("verify_token", localStorage.getItem('token'))
        localStorage.removeItem("token")
        // Check if account has multiple login attempt error and redirect to force password reset
        if (verify.data.errorcode == 703) {
          // localStorage.removeItem("token")
          localStorage.setItem("error_703", verify.data.message)
          // return router.push({ name: 'verify-otp', params: { dataMessage: verify.data.message } })
          // return window.location.href =  ApiLoginUrl + `/verify_otp?message=${verify.data.message}`;
          return window.location.href =  ApiLoginUrl + `/verify_otp`;
        }
        localStorage.removeItem("token")
        // Set the error
         commit('SET_ERROR', verify.data.message)
        throw 201
      }
      // dispatch('attempt', response.data.token)
    },

    // Attempt Login and set User Data
    async attempt({ commit, state }, token){
      if (token) {
        // Set jwt token
        commit('SET_TOKEN', token)
      }

      if (!state.token) {
        return
      }

    try {
          // Make request to the me endpoint
          //   await axios.get('/firewall').then(() => {}).catch(() => {
          //   localStorage.removeItem("token")
          //   localStorage.removeItem("verify_token")
          //   return window.location.href = ` https://payluk.com/backend/login`;
          // })
          let response = await axios.get('/account')
          if (response.status == 200) {
            commit('SET_USER', response.data.data)

          } else {
               localStorage.removeItem("token")
        //   // , params: { dataMessage: verify.data.message }
                return router.push({ name: 'login' })
          }
      } catch (error) {
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      }
    },

    // Register New User
    async registerUser({ dispatch, commit }, payload) {
      let response = await axios.post('/signup', payload)
      if (response.data.token) {
        // Set jwt token
        commit('SET_TOKEN', response.data.token)
      }
      let verify = await axios.get('/firewall')
      if (verify.status == 200) {
        dispatch('attempt', response.data.token)

      }

    },

    // Verify User Otp
    async verifyOtp(_, payload) {
      axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('verify_token')}`
      return await axios.post('/verify_otp', {otp : payload})

    },

    // Resend Otp For User
    async resendOtp() {
      axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('verify_token')}`
      return await axios.get('/resend_otp')
      .then((response) => {
        router.push({ name: 'verify-otp', params: { dataMessage: response.data.message } })
      })
    },

    // Verify User Password change Otp
    async verifyPasswordOtp(_, payload) {
      axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('verify_password_token')}`
      return await axios.post('/verify_password_otp', {otp : payload})

    },

    // Resend Otp For User
    async resendPasswordOtp() {
      axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('verify_password_token')}`
      return await axios.get('/resend_otp')
      // .then((response) => {
      //   router.replace({ name: 'verify-password-otp', params: { dataMessage: response.data.message } })
      // })
    },

    // Recover Password with email address
    async recoverPassword (_, payload) {
      return await axios.get('/password_reset?email=' + payload, {email : payload})
      .then((response) => {
        // console.log(response)
        localStorage.setItem("verify_password_token", response.data.token)
        router.push({ name: 'verify-password-otp', params: { dataMessage: response.data.message } })
      })

    },

    // Reset Password For forgot Account
    async resetPassword(_, payload) {
      axios.defaults.headers.common['Authorization'] =  `Bearer ${localStorage.getItem('verify_password_token')}`
      return await axios.put('/reset_password', payload)
      .then((response) => {
        // console.log(response)
        localStorage.removeItem("verify_password_token")
        router.push({ name: 'login', params: { dataSuccessMessage: response.data.message } })
      })
    },

    // Do the Logout
    async logOut({ commit }) {
      let response = await axios.get('/firewall').then(() => {}).catch(() => {
        console.log(response)
        localStorage.removeItem("token")
        localStorage.removeItem("verify_token")
        return window.location.href = ApiLoginUrl;
      })
      return axios.post('/logout')
      .then(() => {
        localStorage.removeItem("verify_token")
        localStorage.removeItem("token")
        commit('SET_TOKEN', null)
        commit('SET_USER', null)
      })
    }
  }

}
