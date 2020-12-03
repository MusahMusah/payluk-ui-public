<template lang="html">
  <vs-row>
    <vs-col vs-lg="7" vs-type="flex" vs-justify="center" vs-align="center"  vs-sm="12" vs-xs="12" class="m-2 mx-auto mb-5">
      <vx-card>
        <h2 class="m-3 text-center" style="color: #7367f0" icon="feather icon-credit-card">Make Deposit</h2>
         <!-- <div class="mt-10 mb-6 vx-row">
          <div class="w-full vx-col">
              <label>Select Payment Method</label>
                <v-select
                  data-vv-validate-on="blur"
                  v-model="payment_method"
                  v-validate="'required'"
                  name="Payment Method"
                  class="w-full"
                  :options="['Paystack', 'Stripe']"
                ></v-select>
                <span class="text-sm text-danger">{{ errors.first('Payment Method') }}</span>
            </div>
          </div> -->
        <div class="mt-6 mb-4 vx-row">
          <!-- <div class="w-full vx-col">
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
          </div> -->
        </div>
        <div class="mt-6 mb-4 vx-row">
          <div class="w-full vx-col">
            <vs-input
              data-vv-validate-on="blur"
              v-validate="'required'"
              class="w-full"
              name="Amount"
              icon-pack="feather"
              icon="feather icon-credit-card"
              icon-no-border
              label-placeholder="Amount"
              v-model="amount"
            />
            <span class="text-sm text-danger">{{ errors.first('Amount') }}</span>
          </div>
        </div>
        <div class="vx-row ">
          <div class="w-full mt-6 vx-col">
            <vs-button
              v-if="this.activeUserCurrency == 'USD'"
              :disabled="!validateForm"
              @click="invokeStripe"
              icon-pack="feather"
              icon="feather icon-credit-card"
              class="mb-2"
              style="width: 100%"
              >Complete Payment</vs-button
            >
            <paystack
            v-else
            id="paystack-button"
            class="bg-primary"
            :disabled="!validateForm"
            :amount="amount * 100"
            :email="activeUserEmail"
            :paystackkey="PUBLIC_KEY"
            :reference="reference"
            :callback="creditUserAccount"
            :close="paystackCloseWindow"
            :embed="false"
            >
            <i class="fas fa-money-bill-alt"></i>
            Make Payment
            </paystack>
          </div>
        </div>
      </vx-card>
    </vs-col>
  </vs-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import vSelect from "vue-select";
import paystack from 'vue-paystack';
export default {
  data() {
    return {
      amount: '',
      email : '',
      payment_method: '',
      PUBLIC_KEY: "pk_test_d236cd0f648a7429521cad6c3018cd4d920f49e0"
    };
  },
  components: {
    vSelect,
    paystack
  },
  methods:{
    ...mapActions({
      completePaystackPayment: "payments/completePaystackPayment"
    }),
    // Paystack Methods
    paystackCloseWindow() {
      this.$vs.notify({
        title: "Info",
        text: 'Deposit Payment Window Closed',
        position:'top-right',
        iconPack: "feather",
        icon: "icon-alert-circle",
        color: "primary",
      });
    },

    creditUserAccount(){
      // Loading
      this.$vs.loading();
      const formData = new FormData();
      formData.append("reference", this.reference);
      this.completePaystackPayment(formData)
        .then((response) => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
          this.$router.replace({name:'dashboard-analytics', params: { amount : this.amount }}).catch((err) => { console.log(err)})
        })
        .catch((error) => {
          console.log(error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: Object(error.response.data.messages.error),
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
    // End Paystack Methods
    invokeStripe(){
      localStorage.setItem("amount", this.amount)
      this.$router.replace({name:'deposit-pay', params: { amount : this.amount }}).catch((err) => { console.log(err)})
    }
  },
  computed:{
    ...mapGetters({
      getTransactionsDetails: "payments/getTransactionsData",
      getUserData : "users/getUserData",
    }),
    user_transactions() {
      if (this.getTransactionsDetails == null) {
        return []
      }else {
        return this.getTransactionsDetails;

      }
      // return []
    },
    activeUserEmail(){
      return this.getUserData.email
    },
    activeUserCurrency(){
      return this.getUserData.currency
    },
    validateForm() {
      return !this.errors.any() && this.amount != "";
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    },
  },
  mounted(){
    var scriptTag = document.createElement("script");
    scriptTag.src = "https://js.paystack.co/v1/inline.js";
    document.getElementsByTagName('head')[0].appendChild(scriptTag);

    let scriptTag2 = document.createElement("script");
    scriptTag2.src = "https://js.stripe.com/v3/";
    document.getElementsByTagName('head')[0].appendChild(scriptTag2);

    let scriptTag3 = document.createElement("script");
    scriptTag3.src = "https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch";
    document.getElementsByTagName('head')[0].appendChild(scriptTag3);

  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }

  }
}
</script>

<style>
#paystack-button {
  /* background-color: #8ebf42; */
  color: white;
  padding: 14px 0;
  /* margin: 10px 0; */
  border: none;
  cursor: grabbing;
  width: 100%;
}
</style>
