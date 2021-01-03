<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="demo-basic-card">

    <div class="vx-row">
      <div class="w-full my-20 vx-col mx20">
        <vx-card
          title="No Invites Available"
          title-color="#fff"
          card-background="primary"
          content-color="#fff"
        >
          <p class="mb-3">You Have No Current Transaction(s) as Merchant</p>
        </vx-card>
      </div>
    </div>

  </div>
</template>

<script>
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      // card 1
      states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
      ],
      item_name: "",
      items_name : [],
      item_quantity: "",
      total_cost: "",
      currency: "",
      ship_from: "",
      ship_to: "",
      ship_date: "",
      delivered_before_date: "",
      company_name: "",
      company_address: "",
      visibility: '',
      profile_img: require("@/assets/images/noimage.svg"),
      popupActivo: false,
      passengers: 1,
      date: null
    };
  },
  computed: {
    ...mapGetters({
      getAllPendingRequests: "contract_request/getAllPendingRequest"
    }),
    validateForm() {
      return !this.errors.any() && this.items_name != "" && this.item_quantity != ""
      && this.total_cost != "" && this.currency != ""
      && this.ship_from != "" && this.ship_to != "" && this.ship_date != ""
      && this.delivered_before_date != "" && this.company_name != "";
    },
    allRequests() {
      return { ...this.getAllPendingRequests };
    }
  },
  methods: {
    ...mapActions({
      allInvites: "contract_request/pendingRequest",
      acceptInvite: "contract_request/acceptInvite",
      declineInvite: "contract_request/declineInvite",
      sendQuotation: "contract_request/sendQuotation"
    }),
    accept_invite(payload) {
      localStorage.setItem("invite_id", payload)
      this.pop();
    },
    decline_invite(payload) {
      // Loading
      this.$vs.loading();
      this.declineInvite(payload)
        .then(response => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success"
          });
          setTimeout(() => {
              location.reload()
            }, 500);
        })
        .catch(error => {
          console.log(error.response.data);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
          });
        });
    },
    pop() {
      this.popupActivo = true;
      this.visibility = "";
    },
    send_quotation() {
      let payload = {
        invitation_id: localStorage.getItem("invite_id"),
        item_name: this.items_name,
        item_quantity: this.item_quantity,
        total_cost: this.total_cost.replace(/[^0-9.-]+/g,""),
        currency: this.currency,
        ship_from: this.ship_from,
        ship_to: this.ship_to,
        ship_date: this.ship_date,
        delivered_before_date: this.delivered_before_date,
        company_name: this.company_name,
        company_address: this.company_address
      };

      // Loading
      this.$vs.loading();
      // .then(()=> {
        // this.acceptInvite(localStorage.getItem("invite_id"), "good")
        this.sendQuotation(payload)
        .then(response => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success"
          });
          this.visibility = "display:none";
          localStorage.removeItem("invite_id")
          setTimeout(() => {
              location.reload()
            }, 800);

          // this.$router.replace('/contract-request').catch((err) => { console.log(err)})
          // router.push(router.currentRoute.query.to || '/').catch((err) => { console.log(err)})
        })
        .catch(error => {
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            // text: "Invalid Login Credentials, Try again!",
            text: error.response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger"
            // position: ' top-right'
          });
        });
    }
  },
  created() {
  },
  components: {
    "v-select": vSelect,
    Datepicker
  }
  // mounted() {
  //     this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
  // },
};
</script>

<style lang="scss"></style>
