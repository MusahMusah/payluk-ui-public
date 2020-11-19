<template lang="html">
  <vs-row>
    <vs-col vs-lg="7" vs-type="flex" vs-justify="center" vs-align="center"  vs-sm="12" vs-xs="12" class="m-2 mb-5 mx-auto">
      <vx-card>
        <h2 class="m-3 text-center" style="color: #7367f0" icon="feather icon-credit-card">Make Deposit</h2>
         <!-- <div class="vx-row mb-6 mt-10">
          <div class="vx-col w-full">
              <label>Select Payment Method</label>
                <v-select
                  data-vv-validate-on="blur"
                  v-model="payment_method"
                  v-validate="'required'"
                  name="Payment Method"
                  class="w-full"
                  :options="['Paystack', 'Stripe']"
                ></v-select>
                <span class="text-danger text-sm">{{ errors.first('Payment Method') }}</span>
            </div>
          </div> -->
        <div class="vx-row mb-4 mt-6">
          <div class="vx-col w-full">
            <vs-input
              v-validate="'required|email'"
              data-vv-validate-on="blur"
              name="email"
              type="email"
              label-placeholder="Email"
              placeholder="Email"
              v-model="email"
              class="w-full mt-6 mb-2" />
            <span class="text-danger text-sm">{{ errors.first('email') }}</span>
          </div>
        </div>
        <div class="vx-row mb-4 mt-6">
          <div class="vx-col w-full">
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
            <span class="text-danger text-sm">{{ errors.first('Amount') }}</span>
          </div>
        </div>
        <div class="vx-row ">
          <div class="vx-col w-full mt-6">
            <vs-button
              :disabled="!validateForm"
              @click="completePayment"
              icon-pack="feather"
              icon="feather icon-credit-card"
              class="mb-2"
              style="width: 100%"
              >Complete Payment</vs-button
            >
          </div>
        </div>
      </vx-card>
    </vs-col>
  </vs-row>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from "vuex";
import vSelect from "vue-select";
export default {
  data() {
    return {
      amount: '',
      email: '',
      payment_method: '',
    };
  },
  components: {
    vSelect,
  },
  methods:{
    ...mapActions({
      transactionDetailsData: "payments/transactionDetailsData",
      completePaystackPayment: "payments/completePaystackPayment"
    }),
    completePayment(){
      if (this.activeUserCurrency == 'NGN') {
        this.payWithPaystack()
      } else if(this.activeUserCurrency == 'USD'){
        this.invokeStripe()
      }
    },
    payWithPaystack(){
      let handler = PaystackPop.setup({
        key: 'pk_test_d236cd0f648a7429521cad6c3018cd4d920f49e0', // Replace with your public key
        email: this.email,
        amount: this.amount * 100,
        reference: ''+Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
        callback: function(response) {
          //  alert(response.reference);
            //this happens after the payment is completed successfully
            var reference = response.reference;
            const formData = new FormData();
            formData.append("reference", reference);

            // alert('Payment complete! Reference: ' + reference);
            // Make an AJAX call or axios to our backend with the reference as post server with the reference to verify the transaction
            axios({
                method: 'post',
                url: '/paystack/invoke',
                data: formData
            })
            .then(function () {
                // console.log(response);
                // check
                window.location.reload()
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        onClose: function() {
            alert('Transaction was not completed, window closed.');
        },
      });
      handler.openIframe();
    },
    creditUserAccount(reference){
      // Loading
      this.$vs.loading();
      this.completePaystackPayment(reference)
        .then((response) => {
          console.log(response.data)
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
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
    activeUserCurrency(){
      return this.getUserData.currency
    },
    validateForm() {
      return !this.errors.any() && this.amount != "" && this.email != "";
    }
  },
   created() {
    this.transactionDetailsData();
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
</style>
