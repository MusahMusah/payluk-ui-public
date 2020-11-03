<template lang="html">
  <vs-row>
    <vs-col vs-md="6" vs-lg="6" vs-type="fle" vs-justify="center" vs-alig="center"  vs-sm="12" vs-xs="12" class="m-2">
      <vs-card>
         <div>
            <vs-table search max-items="6" pagination  stripe :data="user_transactions">
              <template slot="header">
                <h3>
                  Transactions History
                </h3>
              </template>
              <template slot="thead">
                <vs-th sort-key="amount"> Amount </vs-th>
                <vs-th sort-key="card_number"> Card Number </vs-th>
                <!-- <vs-th sort-key="card_type"> Card Type </vs-th> -->
                <vs-th sort-key="status"> Status </vs-th>
                <vs-th sort-key="date"> Date </vs-th>
              </template>

              <template slot-scope="{data}">
                <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                  <vs-td :data="data[indextr].amount">  {{ data[indextr].amount }} </vs-td>

                  <vs-td :data="data[indextr].card_number">
                    {{ data[indextr].card_number }}
                  </vs-td>

                  <!-- <vs-td style="text-transform: uppercase" :data="data[indextr].card_type">
                    {{ data[indextr].card_type | capitalize }}
                  </vs-td> -->
                  <vs-td :data="data[indextr].status">
                    <vs-chip color="primary">
                      <vs-avatar icon="check" />
                      <span>{{ data[indextr].status }}</span>
                    </vs-chip>
                  </vs-td>
                  <vs-td :data="data[indextr].date">
                    {{ data[indextr].date }}
                  </vs-td>
                </vs-tr>
              </template>
            </vs-table>
          </div>
      </vs-card>
    </vs-col>
    <vs-col vs-md="5" vs-lg="5" vs-type="flex" vs-justify="center" vs-align="center"  vs-sm="12" vs-xs="12" class="m-2">
      <vx-card>
        <h2 class="m-3" icon="feather icon-credit-card">Deposit Payment</h2>
         <div class="vx-row mb-6 mt-10">
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
          </div>
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
      if (this.payment_method == 'Paystack') {
        this.payWithPaystack()
      } else if(this.payment_method == 'Stripe'){
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
            .then(function (response) {
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
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
    invokeStripe(){
      // localStorage.setItem("amount", this.amount)
      this.$router.replace({name:'deposit-pay', params: { amount : this.amount }}).catch((err) => { console.log(err)})
    }
  },
  computed:{
    ...mapGetters({
      getTransactionsDetails: "payments/getTransactionsData"
    }),
    user_transactions() {
      if (this.getTransactionsDetails == null) {
        return []
      }else {
        return this.getTransactionsDetails;

      }
      // return []
    },
    validateForm() {
      return !this.errors.any() && this.payment_method != "" && this.amount != "" && this.email != "";
    }
  },
   created() {
    this.transactionDetailsData();
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