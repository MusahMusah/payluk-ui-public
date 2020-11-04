<!-- =========================================================================================
    File Name: CardBasic.vue
    Description: Basic Cards
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div class="centerx">
    <vs-button @click="popupActivo2 = true" color="primary" type="filled"
      >Open Popup</vs-button>
    <vs-popup
      classContent="popup-example"
      title="Quotation Details"
      :active.sync="popupActivo2"
    >
      <form data-vv-scope="add-new-address">
        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              label="Item Name:"
              type="text"
              class="w-full"
              icon-pack="feather"
              icon="icon-mail"
              icon-no-border
              v-model="item_name"
            />
          </div>

          <div class="vx-col sm:w-1/2 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="number"
              class="w-full"
              icon-pack="feather"
              icon="icon-smartphone"
              icon-no-border
              label="Item Quantity"
              v-model="item_quantity"
            />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="number"
              class="w-full mt-5"
              icon-pack="feather"
              icon="icon-smartphone"
              icon-no-border
              label="Total Cost"
              v-model="total_cost"
            />
          </div>

          <div class="vx-col sm:w-1/2 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="text"
              class="w-full mt-5"
              icon-pack="feather"
              icon="icon-smartphone"
              icon-no-border
              label="Currency"
              v-model="currency"
            />
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col sm:w-1/2 w-full mt-5">
            <label for="">Ship From</label>
            <v-select
              v-validate="'required'"
              data-vv-validate-on="blur"
              v-model="selected"
              class="w-full"
              :options="options"
            ></v-select>
          </div>

          <div class="vx-col sm:w-1/2 w-full mt-5">
            <label for="">Ship To</label>
            <v-select
              v-validate="'required'"
              data-vv-validate-on="blur"
              v-model="selected"
              class="w-full"
              :options="options"
            ></v-select>
          </div>
        </div>

        <div class="vx-row">
          <div class="vx-col w-full mt-5">
            <datepicker
              v-validate="'required'"
              data-vv-validate-on="blur"
              placeholder="Select Ship Date"
              v-model="date"
            ></datepicker>
          </div>

          <div class="vx-col w-full mt-5">
            <datepicker
              v-validate="'required'"
              data-vv-validate-on="blur"
              placeholder="Delivered Before Date"
              v-model="date"
            ></datepicker>
            <!-- <vs-select label="Address Type:" v-model="addressType" class="w-full">
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in addressTypeOptions" />
                </vs-select> -->
          </div>
        </div>
        <div class="vx-row">
          <div class="vx-col w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              type="text"
              class="w-full mt-5"
              icon-pack="feather"
              icon="icon-smartphone"
              icon-no-border
              label="Company Name"
              v-model="company_name"
            />
          </div>
        </div>
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <vs-textarea 
            v-validate="'required'"
            data-vv-validate-on="blur"
            label="Company Address" v-model="textarea" />
          </div>
        </div>
        <vs-button class="mt-6 ml-auto flex" @click.prevent="submitNewAddressForm">SAVE AND SEND QUOTATION</vs-button>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      textarea: "",
      select1: 3,
      options1: [
        { text: "IT", value: 0 },
        { text: "Blade Runner", value: 2 },
        { text: "Thor Ragnarok", value: 3 },
      ],
      value1: "",
      value2: "",
      popupActivo2: false,
      popupActivo3: false,
      passengers: 1,
      //   Date
      date: null,
      // vSelect
      options: [
        { id: 1, label: "foo" },
        { id: 3, label: "bar" },
        { id: 2, label: "baz" },
      ],
      selected: { id: 3, label: "bar" },
    };
  },
  computed: {
    ...mapGetters({
      getAllPendingRequests: "contract_request/getAllPendingRequest",
    }),
  },
  methods: {
    ...mapActions({
      allInvites: "contract_request/pendingRequest",
      acceptInvite: "contract_request/acceptInvite",
      declineInvite: "contract_request/declineInvite",
    }),
    accept_invite(payload) {
      // Loading
      this.$vs.loading();
      this.acceptInvite(payload)
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
          location.reload();
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            position:'top-right',
            // text: error.response.data,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
    decline_invite(payload) {
      // Loading
      this.$vs.loading();
      this.declineInvite(payload)
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
        })
        .catch((error) => {
          console.log(error.response.data);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            position:'top-right',
            // text: error.response.data,
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
  },
  created() {
    this.allInvites();
  },
  components: {
    "v-select": vSelect,
    Datepicker,
  },
};
</script>

<style lang="scss">
#size {
  width: 50%;
}
</style>
