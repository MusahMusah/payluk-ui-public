<!-- =========================================================================================
    File Name: ResetPassword.vue
    Description: Reset Password Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col sm:w-3/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/reset-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Reset Password</h4>
                                    <p>Please enter your new password.</p>
                                </div>
                                <!-- <vs-input type="email" label-placeholder="Email" v-model="value1" class="w-full mb-6" /> -->
                                <vs-input 
                                ref="password"
                                data-vv-validate-on="blur"
                                v-validate="'required|min:6|max:10'"
                                name="password"
                                placeholder="Password"
                                v-model="password"
                                type="password" 
                                label-placeholder="Password" 
                                class="w-full mb-6" />
                                <span class="text-danger text-sm">{{ errors.first('password') }}</span>
                                <vs-input 
                                type="password" 
                                v-validate="'min:6|confirmed:password'"
                                data-vv-validate-on="blur"
                                data-vv-as="password"
                                name="confirm_password"
                                label-placeholder="Confirm Password"
                                placeholder="Confirm Password"
                                v-model="confirm_password"
                                class="w-full mb-8" />
                                <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

                                <div class="flex flex-wrap justify-between flex-col-reverse sm:flex-row">
                                    <vs-button type="border" to="/login" class="w-full sm:w-auto mb-8 sm:mb-auto mt-3 sm:mt-auto">Go Back To Login</vs-button>
                                    <vs-button class="w-full sm:w-auto"  :disabled="!validateForm" @click="reset_password">Reset</vs-button>
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
import { mapActions } from 'vuex'
export default {
    computed: {
        validateForm() {
            return !this.errors.any() && this.password  != '' && this.confirm_password != '';
        },
    },
    data() {
        return {
            password : '',
            confirm_password : '',
        }
    },
     methods : {
        ...mapActions({
        resetPassword : 'authentication/resetPassword',
        }),
        reset_password () {
            const payload = {
                password : this.password,
                confirm_password : this.confirm_password,
            }
              // Loading
            this.$vs.loading()
            this.resetPassword(payload)
            .then(() => {
                // console.log(response)
                this.$vs.loading.close()
            })
            .catch((error) => {
                console.log(error)
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Error',
                    text : Object(error.response.data.messages.error),
                    position:'top-right',
                    // text: error.response.data,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger',
                })
            })
        }
    }
}
</script>
