/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [

        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
                  path: '/',
                  redirect: '/dashboard/analytics'
              },
              {
                  path: '/dashboard/analytics',
                  name: 'dashboard-analytics',
                  component: () => import('./views/DashboardAnalytics.vue'),
                  meta: {
                    requiresAuthentication: true,
                  },
              },

              // User Sections
              {
                path: '/account',
                name: 'account',
                component: () => import('./views/users/Profile.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    // { title: 'Pages' },
                    { title: 'Profile', active: true },
                  ],
                  pageTitle: 'Profile',
                  requiresAuthentication: true,
                },
              },
              // ACTIVATE ACCOUNT
              {
                path: '/activate-account',
                name: 'activate-account',
                component: () => import('./views/users/ActivateAccount.vue'),
                meta: {
                  // breadcrumb: [
                  //   { title: 'Home', url: '/' },
                  //   { title: 'Profile View', url: '/profile-view', active: true },
                  //   { title: 'Update', active: true },
                  // ],
                  // pageTitle: 'Account Update',
                  requiresAuthentication: true,
                },
              },
              {
                path: '/profile-view',
                name: 'profile-view',
                component: () => import('./views/users/Profile-View.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'User', active: true },
                    { title: 'View', active: true },
                  ],
                  pageTitle: 'User Account',
                  requiresAuthentication: true
                },
              },
              {
                path: '/profile-update',
                name: 'profile-update',
                component: () => import('./views/users/Profile-Edit.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Profile View', url: '/profile-view', active: true },
                    { title: 'Update', active: true },
                  ],
                  pageTitle: 'Account Update',
                  requiresAuthentication: true,
                },
              },
              {
                path: '/user/:wallet_id',
                name: 'user-public-profile',
                props: true,
                component: () => import('./views/users/UserPublicProfile.vue'),
                meta: {
                  requiresAuthentication: true
                }
              },
              {
                path: '/request',
                name: 'request',
                component: () => import('./views/contract/ContractRequest.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Contract Request', active: true },
                  ],
                  pageTitle: 'Contract Request',
                  requiresAuthentication: true
                }
              },
              {
                path: '/deposit',
                name: 'deposit',
                component: () => import('./views/users/Deposit.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Deposit Payment', active: true },
                  ],
                  pageTitle: 'Deposit Payment',
                  requiresAuthentication: true
                }
              },
              {
                path: '/deposit-pay',
                name: 'deposit-pay',
                component: () => import('./views/users/DepositPay.vue'),
                meta: {
                  breadcrumb: [
                    { title: 'Home', url: '/' },
                    { title: 'Complete Payment', active: true },
                  ],
                  pageTitle: 'Complete Payment',
                  requiresAuthentication: true
                }
              },
              {
                path: '/faq',
                name: 'faq',
                component: () => import('./views/pages/Faq.vue'),
                meta: {
                  requiresAuthentication: true
                }
              },
              {
                path: '/seller',
                name: 'seller',
                component: () => import('./views/contract/Seller.vue'),
                meta: {
                  breadcrumb: [
                      { title: 'Home', url: '/' },
                      // { title: 'Data List'},
                      { title: 'Your Pending Contracts', active: true },
                  ],
                  pageTitle: 'Your Pending Contracts',
                },

              },
              {
                path: '/buyer',
                name: 'buyer',
                component: () => import('./views/contract/Buyer.vue'),
                meta: {
                  breadcrumb: [
                      { title: 'Home', url: '/' },
                      // { title: 'Data List'},
                      { title: 'Your Pending Contracts', active: true },
                  ],
                  pageTitle: 'Your Pending Contracts',
                },

              },

              // Tickets
              {
                path: '/tickets',
                name: 'tickets',
                component: () => import('./views/tickets/Tickets.vue'),
                meta: {
                  breadcrumb: [
                      { title: 'Home', url: '/' },
                      { title: 'All Tickets', active: true },
                  ],
                  pageTitle: 'All Tickets',
                },

              },
              {
                path: '/test2',
                name: 'test2',
                component: () => import('./views/users/Test.vue'),
              },
              {
                path: '/test',
                name: 'test',
                component: () => import('./views/DashboardECommerce.vue'),
              },
            ],
        },
    // =============================================================================
    // AUTHENTICATIONS
    // =============================================================================
        {
          path: '',
          component: () => import('@/layouts/full-page/FullPage.vue'),
          children: [
      // =============================================================================
      // VISITORS
      // =============================================================================
            {
              path: '/login',
              name: 'login',
              props : true,
              component: () => import('@/views/users/Login.vue'),
              meta: {
                requiresVisitor: true,
              },
            },
            {
              path: '/register',
              name: 'register',
              component: () => import('@/views/users/Register.vue'),
              meta: {
                requiresVisitor: true,
              },
            },
            {
              path: '/verify_otp',
              name: 'verify-otp',
              component: () => import('@/views/users/VerifyOtp.vue'),
              props : true,
              meta: {
                requiresVisitor: true,
              },
            },
            {
              path: '/forgot-password',
              name: 'forgot-password',
              component: () => import('@/views/users/ForgotPassword.vue'),
              meta: {
                requiresVisitor: true,
              },
            },
            {
              path: '/verify_password_otp',
              name: 'verify-password-otp',
              component: () => import('@/views/users/VerifyPasswordOtp.vue'),
              props : true,
              meta: {
                requiresVisitor: true,
              },
            },
            {
                path: '/reset-password',
                name: 'reset-password',
                component: () => import('@/views/users/ResetPassword.vue'),
                // meta: {
                //     rule: 'editor'
                // }
            },
          ]
        },

    // =============================================================================
    // ERROR PAGE
    // =============================================================================
        {
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
        // =============================================================================
        // PAGES
        // =============================================================================
              {
                path: '/404',
                name: '404',
                component: () => import('@/views/pages/Error404.vue')
              },
            ]
        },
        // Redirect to 404 page, if no match found
        {
          path: '*',
          redirect: '/404'
        }
    ],
})


router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

// router.afterEach((to, from) => {
//   // Complete the animation of the route progress bar.
//   NProgress.done()
// })


router.afterEach((to, from) => {
  // Remove initial loading
  NProgress.done()
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
