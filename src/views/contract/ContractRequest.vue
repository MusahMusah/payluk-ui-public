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
    <div class="vx-row" v-if="getAllPendingRequests.data">
      <!-- USER PROFILE CARD 2 - MINIMAL -->
      <div
        class="w-full vx-col sm:w-1/2 lg:w-1/3 mb-base"
        v-for="(request, index) in getAllPendingRequests.data"
        :key="index"
      >
        <vx-card class="p-2">
          <vs-avatar
            v-if="request.image"
            class="block mx-auto mb-6"
            size="80px"
            :src="request.image"
          />
          <vs-avatar
            v-else
            class="block mx-auto mb-6"
            size="80px"
            :src="profile_img"
          />
          <div class="text-center">
            <h4>{{ request.first_name + " " + request.last_name }}</h4>
            <p class="text-grey">{{ request.email }}</p>
          </div>
          <div class="flex flex-wrap justify-between">
            <vs-button
              icon="check"
              class="mt-4 mr-2 shadow-lg"
              type="gradient"
              color="primary"
              gradient-color-secondary="#CE9FFC"
              @click="accept_invite(request.invitation_id)"
              >Accept</vs-button
            >
            <vs-button
              icon="cancel"
              class="mt-4 bg-danger"
              color="danger"
              type="gradient"
              @click="decline_invite(request.invitation_id)"
              >Decline</vs-button
            >
          </div>
          <template slot="footer">
            <vs-divider />
            <div class="flex justify-between">
              <span class="flex items-center">
                <feather-icon
                  icon="StarIcon"
                  svgClasses="h-5 w-5 text-warning stroke-current"
                />
                <!-- <vs-icon icon="star" size="medium" color="yellow"></vs-icon> -->
                <!-- <Quotation></Quotation> -->
                <span class="ml-2">4.2</span>
              </span>
            </div>
          </template>
        </vx-card>
      </div>
    </div>
    <div class="vx-row" v-else>
      <div class="w-full my-20 vx-col mx20">
        <vx-card
          title="No Invites Available"
          title-color="#fff"
          card-background="primary"
          content-color="#fff"
        >
          <p class="mb-3">You Have No Invitation Request Available</p>
        </vx-card>
      </div>
    </div>

    <!-- Pop Up The Form -->
    <!-- <vs-button @click="popupActivo2 = true" color="primary" type="filled"
      >Open Popup</vs-button> -->
    <!-- :active.sync="popupActivo2" -->
    <vs-popup
      classContent="popup-example"
      title="Quotation Details"
      :style="visibility"
      :active.sync="popupActivo"
    >
      <!-- <form data-vv-scope="add-new-address"> -->
      <div class="vx-row">
        <div class="w-full vx-col sm:w-1/2">
          <!-- <vs-input
            v-validate="'required|min:3'"
            data-vv-validate-on="blur"
            label="Item Name:"
            name="Item Name"
            type="text"
            class="w-full"
            icon-no-border
            v-model="item_name"
            icon-pack="feather"
            icon="icon-mail"
          /> -->
          <label for="">Add Item(s) Name</label>
          <v-select data-vv-validate-on="blur" v-validate="'required|min:3'" name="Item Name" v-model="items_name"
           class="w-full mb-2" :options="[]" taggable multiple push-tags />
          <span class="text-sm text-danger">{{
            errors.first("Item Name")
          }}</span>
        </div>

        <div class="w-full vx-col sm:w-1/2">
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="Item Quantity"
            type="number"
            class="w-full"
            icon-pack="feather"
            icon="icon-smartphone"
            icon-no-border
            label="Item(s) Quantity"
            v-model="item_quantity"
          />
          <span class="text-sm text-danger">{{
            errors.first("Item Quantity")
          }}</span>
        </div>
      </div>

      <div class="vx-row">
        <div class="w-full vx-col sm:w-1/2">
            <!-- type="number" -->
          <vs-input
            v-currency="{currency: null}"
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="Total Cost"
            class="w-full mt-5"
            icon-pack="feather"
            icon="icon-smartphone"
            icon-no-border
            label="Total Cost"
            v-model="total_cost"
          />
          <span class="text-sm text-danger">{{
            errors.first("Total Cost")
          }}</span>
        </div>

        <div class="w-full mt-5 vx-col sm:w-1/2">
          <label for="">Currency</label>
          <v-select
            v-validate="'required'"
            data-vv-validate-on="blur"
            v-model="currency"
            name="Currency"
            label="Currency"
            class="w-full"
            :options="['USD', 'NGN', 'EUR']"
          ></v-select>
          <span class="text-sm text-danger">{{
            errors.first("Currency")
          }}</span>
        </div>
      </div>

      <div class="vx-row">
        <div class="w-full mt-5 vx-col sm:w-1/2">
          <label for="">Ship From</label>
          <v-select
            v-validate="'required'"
            name="Ship From"
            data-vv-validate-on="blur"
            v-model="ship_from"
            class="w-full"
            :options="states"
          ></v-select>
          <span class="text-sm text-danger">{{
            errors.first("Ship From")
          }}</span>
        </div>

        <div class="w-full mt-5 vx-col sm:w-1/2">
          <label for="">Ship To</label>
          <v-select
            v-validate="'required'"
            name="Ship To"
            data-vv-validate-on="blur"
            v-model="ship_to"
            class="w-full"
            :options="states"
          ></v-select>
            <!-- :options="['Kano', 'Abuja']" -->
          <span class="text-sm text-danger">{{ errors.first("Ship To") }}</span>
        </div>
      </div>

      <div class="vx-row">
        <div class="w-full mt-5 vx-col">
          <label for="">Ship Date</label>
          <datepicker
            v-validate="'required'"
            data-vv-validate-on="blur"
            placeholder="Choose Ship Date"
            name="Ship Date"
            v-model="ship_date"
          ></datepicker>
          <span class="text-sm text-danger">{{
            errors.first("Ship Date")
          }}</span>
        </div>

        <div class="w-full mt-5 vx-col">
          <label for="">Delivered Before Date</label>
          <datepicker
            v-validate="'required'"
            data-vv-validate-on="blur"
            placeholder="Choose Delivered Before Date"
            name="Delivered Before Date"
            v-model="delivered_before_date"
          ></datepicker>
          <span class="text-sm text-danger">{{
            errors.first("Delivered Before Date")
          }}</span>
          <!-- <vs-select label="Address Type:" v-model="addressType" class="w-full">
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in addressTypeOptions" />
                </vs-select> -->
        </div>
      </div>
      <div class="vx-row">
        <div class="w-full vx-col">
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            type="text"
            class="w-full mt-5"
            placeholder="Your Company Name"
            label="Company Name"
            name="Company Name"
            v-model="company_name"
          />
          <span class="text-sm text-danger">{{
            errors.first("Company Name")
          }}</span>
        </div>
      </div>
      <div class="mt-5 vx-row">
        <div class="w-full vx-col">
          <vs-textarea
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="Company Address"
            label="Company Address"
            v-model="company_address"
          />
          <span class="text-sm text-danger">{{
            errors.first("Company Address")
          }}</span>
        </div>
      </div>
      <!-- @click.prevent="submitNewAddressForm" :disabled="!validateForm" -->
      <vs-button class="flex mt-6 mb-12 ml-auto" :disabled="!validateForm" @click="send_quotation"
        >SAVE AND SEND QUOTATION</vs-button
      >
      <!-- </form> -->
    </vs-popup>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
import { mapActions, mapGetters } from "vuex";
import Quotation from "./Quotation";

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
    },
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
        total_cost: Number(this.total_cost.replace(/[^0-9.-]+/g,"")),
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
            text: error.response.data.messages.error,
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
    // if (this.getAllPendingRequests.data.length > 0) {
    //   return
    // }
    if (!this.getAllPendingRequests.length > 0) {
      this.$vs.loading();
      this.allInvites()
      .then(() => {
        this.$vs.loading.close();
      })
      .catch((error) => {
        this.$vs.loading.close();
        console.log(error)
      })
    }
  },
  components: {
    Quotation,
    "v-select": vSelect,
    Datepicker
  }
  // mounted() {
  //     this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
  // },
};
</script>

<style lang="scss"></style>
