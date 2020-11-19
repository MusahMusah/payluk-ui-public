/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

// Vuesax Component Framework
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css'; // Vuesax
Vue.use(Vuesax)


// Theme Configurations
import '../themeConfig.js'


// Globally Registered Components
import './globalComponents.js'


// Styles: SCSS
import './assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'


// Vue Router
import router from './router'


// Vuex Store
import store from './store/store'


// Vuejs - Vue wrapper for hammerjs
import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


// Tour
import VueTour from 'vue-tour'
Vue.use(VueTour)
require('vue-tour/dist/vue-tour.css')

import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

// import vSelect from 'vue-select'
// Vue.use(vSelect)
// Clipboard
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard);

// VeeValidate
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);


// PrismJS
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'


// Feather font icon
require('./assets/css/iconfont.css')

// Subscriber
require('@/store/subscriber')

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';
axios.defaults.baseURL = 'https://payluk.com/backend'
// Vue Progress Bar Config Setup
import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: '#7367f0',
  failedColor: 'red',
  height: '2px',
  thickness: '4px',
  // transition: {speed: '0.2s', opacity: '0.6s', termination: 300},
  transition: {speed: '1s', opacity: '0.6s', termination: 800},
})

store.dispatch('authentication/attempt', localStorage.getItem('token'))
// console.log(store.dispatch('authentication/attempt', localStorage.getItem('token')))

Vue.config.productionTip = false
console.log(store.getters['authentication/loggedIn'])

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuthentication)) {
    if (!store.getters['authentication/loggedIn']) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters['authentication/loggedIn']) {
      next({
        name: 'dashboard-analytics',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
