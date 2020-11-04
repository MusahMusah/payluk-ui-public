<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                   <vs-alert v-if="successMessage" active="true" color="success">
                      {{successMessage}}
                  </vs-alert>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <div>
                  <vs-input
                      v-validate="'required|email|min:3'"
                      data-vv-validate-on="blur"
                      name="email"
                      icon-no-border
                      icon="icon icon-user"
                      icon-pack="feather"
                      label-placeholder="Email"
                      v-model="formData.email"
                      class="w-full"/>
                     <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                  <vs-input
                      data-vv-validate-on="blur"
                      v-validate="'required|min:6'"
                      type="password"
                      name="password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Password"
                      v-model="formData.password"
                      class="w-full mt-6" />
                      <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                  <div class="flex flex-wrap justify-between my-5">
                      <vs-checkbox v-model="formData.checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox>
                      <router-link to="/forgot-password">Forgot Password?</router-link>
                  </div>
                  <vs-button  type="border" to="/register">Register</vs-button>
                  <vs-button class="float-right" :disabled="!validateForm" @click="login">Login</vs-button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
// import router from '@/router'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'login',
  props: {
    dataSuccessMessage: {
      type: String,
    }
  },
  data() {
    return {
      formData : {
        email: '',
        password: '',
        checkbox_remember_me: false
      },
      successMessage : this.dataSuccessMessage
    }
  },
  created(){
    if (this.successMessage) {
      this.$vs.notify({
        title: 'Info',
        text: this.successMessage,
        position:'top-right',
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'success',
        // position: ' top-right'
      })
    }
  },
  computed: {
    ...mapGetters({
      error_201 : 'authentication/error_201'
    }),
    validateForm() {
      return !this.errors.any() && this.formData.email != '' && this.formData.password != '';
    },
  },
  methods: {
    ...mapActions({
      logIn : 'authentication/logIn'
    }),

    login() {
      // Loading
      this.$vs.loading()
      this.logIn(this.formData)
      .then(() => {
        this.$vs.loading.close()
        this.$router.push('/').catch((err) => { console.log(err)})
        // router.push(router.currentRoute.query.to || '/').catch((err) => { console.log(err)})
      })
      .catch((error) => {
        this.$vs.loading.close()
          if (error == 201) {
            console.log(this.error_201)
            this.$vs.notify({
                title: 'Error',
                // text: "Invalid Login Credentials, Try again!",
                text : this.error_201,
                position:'top-right',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger',
                // position: ' top-right'
            })
          } else {
            // console.log(Object.values(error.response.data.messages))
            if (error.response.status == 500) {
                this.$vs.notify({
                title: 'Error',
                // text: "Invalid Login Credentials, Try again!",
                text : error.response.data.message,
                position:'top-right',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger',
                // position: ' top-right'
            })
            } else {
                this.$vs.notify({
                title: 'Error',
                // text: "Invalid Login Credentials, Try again!",
                text : error.response.data.messages.error,
                position:'top-right',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger',
                // position: ' top-right'
              })
            }
          
          }

      })
    },

    registerUser() {
      if (!this.checkLogin()) return
      this.$router.push('/pages/register').catch(() => {})
    }
  }
}

</script>



<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>
