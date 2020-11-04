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
            <img  v-if="buyerImg" :src="buyerImg" alt="img" class="responsive" />
            <img  v-else :src="cover_img" alt="img" class="responsive" />
          </div>
        </template>

        <!-- NAME -->
        <vs-input
          label="Item Name"
          v-model="itemName"
          class="mt-5 w-full"
          name="item-name"
          v-validate="'required'"
        />
        <vs-input
          label="Item Quantity"
          v-model="itemQuantity"
          class="mt-5 w-full"
        />
        <vs-input label="Wallet ID" v-model="walletId" class="mt-5 w-full" />
        <vs-input
          icon-pack="feather"
          icon="icon-dollar-sign"
          label="Total Cost"
          v-model="totalCost"
          class="mt-5 w-full"
        />
        <vs-input label="Currency" v-model="currency" class="mt-5 w-full" />
        <vs-input label="Ship From" v-model="shipFrom" class="mt-5 w-full" />
        <vs-input label="Ship To" v-model="shipTo" class="mt-5 w-full" />
        <vs-input label="Ship Date" v-model="shipDate" class="mt-5 w-full" />
        <vs-input
          label="Delivered Before"
          v-model="deliveredDate"
          class="mt-5 w-full"
        />
        <vs-input
          label="Company Name"
          v-model="companyName"
          class="mt-5 w-full"
        />
        <vs-input
          label="Company Address"
          v-model="companyAddress"
          class="mt-5 w-full mb-3"
        />
        <vs-textarea
          v-if="modificationMessage1"
          label="Modification Message 1"
          v-model="modificationMessage1"
        />

        <vs-textarea
          v-if="modificationMessage2"
          label="Modification Message 2"
          v-model="modificationMessage2"
        />

        <vs-textarea
          v-if="modificationMessage3"
          label="Modification Message 3"
          v-model="modificationMessage3"
        />

        <!-- ORDER STATUS -->
        <label for="">Contract Status</label>
        <vs-chip color="primary" class="mt-2 mb-4 w-full">
          <span style="text-transform: uppercase">{{ status }}</span>
        </vs-chip>
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="w-full"
        >Submit Updated Quotation</vs-button
      >
      <!-- <vs-button clss="mr-6" @click="popupActivo = true"
        >Open Ticket</vs-button
      > -->
      <!-- <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancel</vs-button> -->
    </div>
    <!-- <div class="">
      <vs-popup
        classContent="popup-example2"
        title="OPEN TICKET FOR COMPLAIN"
        :active.sync="popupActivo3"
      >
        <div class="vx-row">
          <div class="vx-col w-full">
            <label for="">Ticket Subject:</label>
            <vs-select
              data-vv-validate-on="blur"
              v-validate="'required'"
              v-model="subject"
              name="Ticket Subject"
              class="w-full mt-2"
            >
              <vs-select-item
                :key="index"
                :value="item.value"
                :text="item.text"
                v-for="(item, index) in addressTypeOptions"
              />
            </vs-select>
            <span class="text-danger text-sm">{{
              errors.first("Ticket Subject")
            }}</span>
          </div>
        </div>
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <vs-textarea
              data-vv-validate-on="blur"
              v-validate="'required'"
              label="Message"
              v-model="ticket_message"
            />
            <span class="text-danger text-sm">{{
              errors.first("Ticket Mesage")
            }}</span>
          </div>
        </div>
        <div class="vx-row mt-5">
          <div class="vx-col w-full">
            <img
              v-bind:src="imagePreview"
              class="preview-image w-full"
              v-on:click="openUpload"
              style="heght: 60vh !important; object-fit: contain"
            />

            <div class="form-group">
              <input
                name="image"
                type="file"
                id="file-field"
                required
                v-on:change="updatePreview"
                style="display: none"
              />
            </div>
          </div>
        </div>

        <vs-button
          :disabled="!validateForm3"
          class="mt-6 ml-auto flex"
          @click="send_ticket"
          >SUBMIT TICKET</vs-button
        >
      </vs-popup>
    </div> -->
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
          buyer_image,
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
        this.buyerImg = buyer_image;
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
      buyerImg: null,
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
      modificationMessage2: null,
      modificationMessage3: null,
      status: null,
      flow: null,
      payment: null,
      popupActivo: false,
      visibility: "",

      // Ticket
      cover_img: require("@/assets/images/timeline.jpg"),

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
    }),
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
