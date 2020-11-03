<!-- =========================================================================================
    File Name: ForgotPassword.vue
    Description: FOrgot Password Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <!-- <div class="h-screen flex w-full bg-img">
        <div class="vx-col w-4/5 sm:w-4/5 md:w-3/5 lg:w-3/4 xl:w-3/5 mx-auto self-center">
            
        </div>
    </div> -->
    <div class="vx-row">
        <div class="vx-col mt-5 w-4/5 mx-auto self-center">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@/assets/images/pages/forgot-password.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">Activate Your Account</h4>
                                    <p>Please enter the OTP Code sent to your email address so as to Activate your account ready for any Business Transaction.</p>
                                </div>

                                <span class="text-danger text-sm">{{ errors.first('otp') }}</span>
                                <vs-input 
                                data-vv-validate-on="blur"
                                v-validate="'required|min:4|max:4'"
                                type="number" 
                                name="otp"
                                label-placeholder="OTP" 
                                v-model="otp" 
                                class="w-full mb-8" />
                                <vs-button type="border" class="px-4 w-full md:w-auto" @click="resend_otp">Resend OTP</vs-button>
                                <vs-button class="float-right px-8 w-full md:w-auto mt-3 mb-8 md:mt-0 md:mb-0" :disabled="!validateForm" @click="verify_account">Verify</vs-button>
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
    name: 'activate-account',
    computed: {
        validateForm() {
            return !this.errors.any() && this.otp;
        },
    },
    created(){
        this.trigger_otp()
    },
    data() {
        return {
            otp : ''
        }
    },
    methods : {
        ...mapActions({
        verifyAccount : 'users/verifyAccount',
        resendOtp : 'users/resendOtp',
        triggerOtp: "users/triggerOtp"
        }),
        trigger_otp () {
            this.triggerOtp()
            .then((response) => {
                this.$vs.notify({
                    title: 'Success',
                    text : response.data.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'success',
                })
            })
            .catch((error) => {
                let message = error.response.data.messages.message
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Error',
                    text : message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger',
                })
            })
        },

        verify_account () {
              // Loading
            this.$vs.loading()
            this.verifyAccount(this.otp)
            .then((response) => {
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Success',
                    text : response.data.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'success',
                });
                setTimeout(() => {
                    location.reload()
                }, 800);
                // this.$router.push('/').catch((err) => { console.log(err)})
            })
            .catch((error) => {
                let message = error.response.data.messages.error
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Error',
                    text : message,
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
                    title: 'Success',
                    text : response.data.message,
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'success',
                })
                // this.$router.push('/').catch((err) => { console.log(err)})
            })
            .catch((error) => {
                console.log(error.response)
                this.$vs.loading.close()
                this.$vs.notify({
                    title: 'Error',
                    text : Object(error.response.data.messages.error),
                    iconPack: 'feather',
                    icon: 'icon-alert-circle',
                    color: 'danger',
                })
            })
        }
    }
}
</script>
