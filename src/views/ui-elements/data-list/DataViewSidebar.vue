<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <!-- <h4>{{ Object.entries(this.data).length === 0 ? "ADD NEW" : "UPDATE" }} ITEM</h4> -->
      <h4>CONTRACT DETAILS</h4>
      <feather-icon
        icon="XIcon"
        @click.stop="isSidebarActiveLocal = false"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar
      class="scroll-area--data-list-add-new"
      :settings="settings"
    >
      <div class="p-6">
        <!-- Product Image -->
        <template>
          <!-- Image Container -->
          <div
            class="img-container w-64 mx-auto flex items-center justify-center"
          >
            <img v-if="sellerImg" :src="sellerImg" alt="img" class="responsive" />
            <img v-else :src="cover_img" alt="img" class="responsive" />
          </div>
        </template>

        <!-- NAME -->
        <vs-input
          label="Item Name"
          v-model="itemName"
          class="mt-5 w-full"
          :disabled="disable"
          name="item-name"
          v-validate="'required'"
        />
        <vs-input
          label="Item Quantity"
          :disabled="disable"
          v-model="itemQuantity"
          class="mt-5 w-full"
        />
        <vs-input label="Wallet ID" :disabled="disable" v-model="walletId" class="mt-5 w-full" />
        <vs-input
          icon-pack="feather"
          :disabled="disable"
          label="Total Cost"
          v-model="totalCost"
          class="mt-5 w-full"
        />
        <vs-input label="Currency" :disabled="disable" v-model="currency" class="mt-5 w-full" />
        <vs-input label="Ship From" :disabled="disable" v-model="shipFrom" class="mt-5 w-full" />
        <vs-input label="Ship To" :disabled="disable" v-model="shipTo" class="mt-5 w-full" />
        <vs-input label="Ship Date" :disabled="disable" v-model="shipDate" class="mt-5 w-full" />
        <vs-input
          label="Delivered Before"
          :disabled="disable"
          v-model="deliveredDate"
          class="mt-5 w-full"
        />
        <vs-input
          label="Company Name"
          :disabled="disable"
          v-model="companyName"
          class="mt-5 w-full"
        />
        <vs-textarea
          label="Company Address"
          :disabled="disable"
          v-model="companyAddress"
          class="mt-5 w-full mb-3"
        />
        
        <vs-textarea
          v-if="modificationMessage1"
          label="Modification Message 1"
          :disabled="disable"
          v-model="modificationMessage1"
        />
        <vs-textarea
          v-if="modificationMessage2"
          label="Modification Message 2"
          :disabled="disable"
          v-model="modificationMessage2"
        />
        <vs-textarea
          v-if="modificationMessage3"
          label="Modification Message 3"
          :disabled="disable"
          v-model="modificationMessage3"
        />

        <!-- ORDER STATUS -->
        <label for="">Contract Status</label>
        <vs-chip color="primary" class="mt-2 mb-4 w-full">
          <span style="text-transform: uppercase">{{ status }}</span>
        </vs-chip>
        <!-- <v-select label="countryName" :options="status"></v-select> -->
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <!-- <vs-button class="mr-1" v-if="payment != 'made'" @click="submitData"
        >Accept & Pay</vs-button
      > -->
      <vs-button
        v-if="(flow == 'buyer' && status != 'request_modification')"
        class="mt-4 w-full"
        @click="popupActivo = true"
        >Request Modification</vs-button
      >
      <vs-button type="border" class="mt-4 w-full" color="danger" @click="decline_contract(invitationId)"
        >Decline Contract
        </vs-button >
    </div>
    <div class="clearfix">
      <vs-popup
        classContent="popup-example2"
        title="REQUEST MODIFICATION OF SELLER QUOTATION"
        :style="visibility"
        :active.sync="popupActivo"
      >
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <vs-textarea
              label="Modification Message"
              name="Message"
              data-vv-validate-on="blur"
              v-validate="'required'"
              v-model="message"
            />
            <span class="text-danger text-sm">{{
              errors.first("Message")
            }}</span>
          </div>
        </div>
        <!-- :disabled="!validateForm" -->
        <vs-button
          :disabled="!isFormValid"
          class="mt-6 ml-auto flex"
          @click="send_request_modification(invitationId)"
          >SUBMIT REQUEST</vs-button
        >
        <!-- </form> -->
      </vs-popup>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { mapActions } from "vuex";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        let {
          seller_image,
          wallet_id,
          invitation_id,
          item_name,
          item_quantity,
          total_cost,
          currency,
          ship_from,
          ship_to,
          ship_date,
          delivered_before_date,
          company_name,
          company_address,
          flow,
          modification_message1,
          modification_message2,
          modification_message3,
          status,
          payment,
        } = JSON.parse(JSON.stringify(this.data));
        this.sellerImg = seller_image;
        this.walletId = wallet_id;
        this.invitationId = invitation_id;
        this.itemName = item_name;
        this.itemQuantity = item_quantity;
        this.totalCost = total_cost;
        this.currency = currency;
        this.shipFrom = ship_from;
        this.shipTo = ship_to;
        this.shipDate = ship_date;
        this.deliveredDate = delivered_before_date;
        this.companyName = company_name;
        this.companyAddress = company_address;
        this.modificationMessage1 = modification_message1;
        this.modificationMessage2 = modification_message2;
        this.modificationMessage3 = modification_message3;
        this.flow = flow;
        this.status = status;
        this.payment = payment;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    },
  },
  data() {
    return {
      disable: true,

      sellerImg: null,
      cover_img: require("@/assets/images/timeline.jpg"),
      message: "",
      walletId: null,
      invitationId: null,
      itemName: null,
      itemQuantity: null,
      totalCost: null,
      currency: null,
      shipFrom: null,
      shipTo: null,
      shipDate: null,
      deliveredDate: null,
      companyName: null,
      companyAddress: null,
      modificationMessage1: null,
      status: null,
      flow: null,
      payment: null,
      popupActivo: false,
      visibility: "",

      category_choices: [
        { text: "Audio", value: "audio" },
        { text: "Computers", value: "computers" },
        { text: "Fitness", value: "fitness" },
        { text: "Appliance", value: "appliance" },
      ],

      order_status_choices: [
        { text: "Pending", value: this.status },
        // {text:'Canceled',value:'canceled'},
        // {text:'Delivered',value:'delivered'},
        // {text:'On Hold',value:'on_hold'}
      ],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      },
    },
    isFormValid() {
      return !this.errors.any() && this.message != "";
    },
  },
  methods: {
    ...mapActions({
      sendRequestModification: "contract_request/sendRequestModification",
      declineContract: "contract_request/declineContract"
    }),
    decline_contract(invitation_id) {
      this.popupActivo = false;
      const payload = {
        invitation_id: invitation_id,
        status: 'declined',
      };
      this.$vs.loading();
      this.declineContract(payload)
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
          setTimeout(() => {
            location.reload();
          }, 1000)
          
        })
        .catch((error) => {
          console.log(error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },
    send_request_modification(verify) {
      // console.log(verify);
      this.popupActivo = false;
      const payload = {
        invitation_id: verify,
        message: this.message,
      };
      this.$vs.loading();
      this.sendRequestModification(payload)
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
          console.log(error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },

    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = "";
      this.dataCategory = null;
      this.dataOrder_status = "pending";
      this.dataPrice = 0;
      this.dataImg = null;
    },
    submitData() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          const obj = {
            id: this.dataId,
            name: this.dataName,
            img: this.dataImg,
            category: this.dataCategory,
            order_status: this.dataOrder_status,
            price: this.dataPrice,
          };

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch("dataList/updateItem", obj).catch((err) => {
              console.error(err);
            });
          } else {
            delete obj.id;
            obj.popularity = 0;
            this.$store.dispatch("dataList/addItem", obj).catch((err) => {
              console.error(err);
            });
          }

          this.$emit("closeSidebar");
          this.initValues();
        }
      });
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.dataImg = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
      }
    },
  },
  components: {
    VuePerfectScrollbar,
  },
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  height: calc(100% - 4.3rem);
}
</style>
