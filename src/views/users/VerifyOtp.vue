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
                                    <h4 class="mb-4">Verify Your Account</h4>
                                    <p>Please enter the OTP Code sent to your email address so as to verify your account.</p>
                                </div>

                                <span class="text-danger text-sm">{{ errors.first('otp') }}</span>
                                <vs-input 
                                data-vv-validate-on="blur"
                                v-validate="'required|min:4|max:4'"
                                type="text" 
                                name="otp"
                                label-placeholder="OTP" 
                                v-model="otp" 
                                class="w-full mb-8" />
                                <vs-button type="border" class="px-4 w-full md:w-auto" @click="resend_otp">Resend OTP</vs-button>
                                <vs-button class="float-right px-8 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" :disabled="!validateForm" @click="verify_otp">Verify</vs-button>
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
    name: 'verify-otp',
    props: {
        dataMessage: {
            type: String,
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.otp;
        },
    },
    created(){
        if (localStorage.getItem('error_703')) {
            this.$vs.notify({
                title: 'Info',
                text: localStorage.getItem('error_703'),
                position:'top-right',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'danger',
            })
            localStorage.removeItem("error_703")
        }
        if (this.dataMessage) {
            this.$vs.notify({
                title: 'Info',
                text: this.dataMessage,
                position:'top-right',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'success',
            })
        }
    },
    data() {
        return {
            otp : ''
        }
    },
    methods : {
        ...mapActions({
        verifyOtp : 'authentication/verifyOtp',
        resendOtp : 'authentication/resendOtp'
        }),
        verify_otp () {
              // Loading
            this.$vs.loading()
            this.verifyOtp(this.otp)
            .then((response) => {
                this.$vs.loading.close()
                localStorage.removeItem("verify_token")
                this.$vs.notify({
                    title: 'Successful',
                    text : response.data.message,
                    position:'top-right',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'success',
                })
                this.$router.push('/login').catch((err) => { console.log(err)})
            })
            .catch((error) => {
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Error',
                    text : Object(error.response.data.messages.error),
                    position:'top-right',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger',
                })
            })
        },

        resend_otp () {
            this.$vs.loading()
            this.resendOtp()
            .then((response) => {
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Successful',
                    text : response.data.message,
                    position:'top-right',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'success',
                })
                // this.$router.push('/').catch((err) => { console.log(err)})
            })
            .catch((error) => {
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Error',
                    text : Object(error.response.data.messages.error),
                    position:'top-right',
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger',
                })
            })
        }
    }
}
</script>
