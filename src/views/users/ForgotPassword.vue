<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: FOrgot Password Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Recover your password</h4>
                                    <p>Please enter your email address and we'll send you OTP code to reset your password.</p>
                                </div>

                                <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                                <vs-input 
                                type="email" 
                                label-placeholder="Email" 
                                v-validate="'required|email|min:3'"
                                data-vv-validate-on="blur"
                                name="email"
                                icon-no-border
                                icon="icon icon-user"
                                icon-pack="feather"
                                v-model="email"
                                class="w-full mb-8" />
                                <vs-button type="border" to="/login" class="px-4 w-full md:w-auto">Back To Login</vs-button>
                                <vs-button class="float-right px-4 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" 
                                :disabled="!validateForm" @click="recover_password">
                                    Recover Password
                                </vs-button>
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
            return !this.errors.any() && this.email;
        },
    },
    data() {
        return {
            email : ''
        }
    },
    methods : {
        ...mapActions({
        recoverPassword : 'authentication/recoverPassword',
        }),
        recover_password () {
              // Loading
            this.$vs.loading()
            this.recoverPassword(this.email)
            .then(() => {
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
