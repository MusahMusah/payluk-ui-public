<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div>
    <div class="flex items-center justify-center w-full h-screen bg-img vx-row no-gutter" style="height: 120vh !important;">
      <div class="flex items-center justify-center w-full vx-row no-gutter">
        <!-- <template v-if="windowWidth < 992"> -->
          <div class="text-center" style="margin-bottom: -7em">
            <img src="@/assets/images/logo.png" style="height: 120px;" alt="login" class="mx-auto">
          </div>
        <!-- </template> -->
        <!-- <template v-else>
          <div class="text-center" style="marginbottom: -7em">
            <img src="@/assets/images/small-logo-white.png" style="height: 120px;" alt="login" class="mx-auto">
          </div>
        </template> -->
      </div>
        <div class="m-4 vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0">
            <vx-card class="mt-5">
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div class="self-center hidden mx-auto vx-col sm:hidden md:hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/register.jpg" alt="register" class="mx-auto">
                        </div>
                        <div class="self-center mx-auto vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="px-8 pt-8 register-tabs-container">
                                <div class="mb-4 vx-card__title">
                                    <h4 class="mb-4">Create Account</h4>
                                    <p>Fill the below form to create a new account.</p>
                                </div>
                                <div class="clearfix">
                                  <vs-input
                                    v-validate="'required|min:3'"
                                    data-vv-validate-on="blur"
                                    label-placeholder="First Name"
                                    name="first_name"
                                    placeholder="First Name"
                                    v-model="first_name"
                                    class="w-full" />
                                  <span class="text-sm text-danger">{{ errors.first('first_name') }}</span>

                                  <vs-input
                                    v-validate="'required|min:3'"
                                    data-vv-validate-on="blur"
                                    label-placeholder="Last Name"
                                    name="last_name"
                                    placeholder="Last Name"
                                    v-model="last_name"
                                    class="w-full" />
                                  <span class="text-sm text-danger">{{ errors.first('last_name') }}</span>

                                  <vs-input
                                    v-validate="'required|email'"
                                    data-vv-validate-on="blur"
                                    name="email"
                                    type="email"
                                    label-placeholder="Email"
                                    placeholder="Email"
                                    v-model="email"
                                    class="w-full mt-6 mb-2" />
                                  <span class="text-sm text-danger">{{ errors.first('email') }}</span>

                                  <!-- <label>Country</label>
                                  <v-select
                                    v-validate="'required'"
                                    name="Country"
                                    data-vv-validate-on="blur"
                                    v-model="country"
                                    class="w-full"
                                    :options="['Nigeria']"
                                  ></v-select>
                                  <span class="text-sm text-danger">{{ errors.first("Country") }}</span> -->

                                  <vs-input
                                    v-validate="'required'"
                                    data-vv-validate-on="blur"
                                    name="phone"
                                    type="number"
                                    label-placeholder="Phone Number"
                                    placeholder="Phone Number"
                                    v-model="phone"
                                    class="w-full mt-6" />
                                  <span class="text-sm text-danger">{{ errors.first('phone') }}</span>

                                  <!-- <vs-input
                                    ref="password"
                                    type="password"
                                    data-vv-validate-on="blur"
                                    v-validate="'required|min:6'"
                                    name="pass"
                                    label-placeholder="Password"
                                    placeholder="Password"
                                    v-model="pass"
                                    class="w-full mt-6" /> -->
                                  <VuePassword
                                      v-model="password"
                                      class="mt-6"
                                      :strength="score"
                                      @input="updateStrength"
                                  >
                                      <template
                                          v-slot:password-input="props"
                                          class="mt-6 control has-icons-left vs-con-input"
                                      >
                                          <input
                                              class="w-full pl-12 input vs-inputx vs-input--input normal hasValue"
                                              style="border: 1px solid rgba(0, 0, 0, 0.2);"
                                              type="password"
                                              ref="password"
                                              data-vv-validate-on="blur"
                                              v-validate="'required|min:6'"
                                              placeholder="Password"
                                              :value="props.value"
                                              name="password"
                                              @input="props.updatePassword"
                                          />
                                          <i class="vs-icon notranslate icon-scale icon-inputx vs-input--icon feather icon icon-lock null icon-no-border"></i>
                                      </template>
                                  </VuePassword>
                                  <span class="text-sm text-danger">{{ errors.first('password') }}</span>

                                  <!-- <vs-input
                                    type="password"
                                    v-validate="'min:6|confirmed:password'"
                                    data-vv-validate-on="blur"
                                    data-vv-as="password"
                                    name="confirm_password"
                                    label-placeholder="Confirm Password"
                                    placeholder="Confirm Password"
                                    v-model="confirm_password"
                                    class="w-full mt-6" /> -->
                                    <VuePassword
                                      v-model="confirm_password"
                                      class="mt-6"
                                      :strength="score"
                                      @input="updateStrength"
                                    >
                                        <template
                                            v-slot:password-input="props"
                                            class="mt-6 control has-icons-left vs-con-input"
                                        >
                                            <input
                                              class="w-full pl-12 input vs-inputx vs-input--input normal hasValue"
                                              style="border: 1px solid rgba(0, 0, 0, 0.2);"
                                              name="confirm password"
                                              type="password"
                                              v-validate="'min:6|confirmed:password'"
                                              data-vv-validate-on="blur"
                                              label-placeholder="Confirm Password"
                                              placeholder="Confirm Password"
                                              :value="props.value"
                                              @input="props.updatePassword"
                                            />
                                            <i class="vs-icon notranslate icon-scale icon-inputx vs-input--icon feather icon icon-lock null icon-no-border"></i>
                                        </template>
                                    </VuePassword>
                                  <span class="text-sm text-danger">{{ errors.first('confirm password') }}</span>

                                  <vs-checkbox v-model="terms" class="mt-5">I accept the terms & conditions.</vs-checkbox>
                                  <vs-button  type="border" to="/login" class="mt-5 mb-6">Login</vs-button>
                                  <vs-button class="float-right mt-5 mb-6" @click="register_User" :disabled="!validateForm">Register</vs-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import VuePassword from 'vue-password';
import vSelect from "vue-select";
export default {
    data() {
        return {
            first_name: '',
            last_name: '',
            email : '',
            country: 'Nigeria',
            password: '',
            confirm_password: '',
            phone : '',
            terms: false,
            successMessage : ''
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.first_name != '' && this.country!= '' && this.last_name != '' && this.email != '' && this.password != '' && this.confirm_password != '' && this.terms === true;
        },
        windowWidth()     { return this.$store.state.windowWidth }
    },
    methods: {
        ...mapActions({
          registerUser : 'authentication/registerUser'
        }),
        updateStrength (password) {
          // return password
          this.strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
          this.mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
          if (this.strongRegex.test(password)){
            this.score = 4
            // return 4
          } else if(this.mediumRegex.test(password)){
            this.score = 2
            // return 2
          }else {
            this.score = 1
          }
        },
        checkLogin() {
          // If user is already logged in notify
          if(this.$store.state.auth.isUserLoggedIn()) {

            // Close animation if passed as payload
            // this.$vs.loading.close()

            this.$vs.notify({
              title: 'Login Attempt',
              text: 'You are already logged in!',
              position:'top-right',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'warning'
            })

            return false
          }
          return true
        },
        register_User() {

          let payload = {
              first_name: this.first_name,
              last_name : this.last_name,
              email: this.email,
              country: this.country,
              pass: this.password,
              confirm_password : this.confirm_password,
              phone : this.phone,
              terms : this.terms == true ? 'on' : 'false'
          }
          // Loading
          this.$vs.loading()
          this.registerUser(payload)
          .then(() => {
             this.$vs.loading.close()
            // console.log(response)
            this.successMessage = 'Registered Successfully!'
            this.$router.push('/').catch((err) => { console.log(err)})
          })
          .catch(error => {
            this.$vs.loading.close()
            let logs = Object.values(error.response.data.messages)
            // console.log(Object.values(error.response.data.messages))
            logs.forEach(element => {
              this.$vs.notify({
              title: 'Error',
              text: element,
              position:'top-right',
              iconPack: 'feather',
              icon: 'icon-alert-circle',
              color: 'danger',
              // position: ' top-right'
              })
            });
            // this.serverErrors = Object.values(error.response.data.errors)
          })
        },

    },
    components: {
      "v-select": vSelect,
      VuePassword,
    }
}
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
