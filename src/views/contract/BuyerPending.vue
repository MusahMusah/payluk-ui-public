<!-- =========================================================================================
  File Name: DataListThumbView.vue
  Description: Data List - Thumb View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="data-list-thumb-view" class="data-list-container">
    <data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />

    <vs-table
      multiple
      ref="table"
      v-model="selected"
      pagination
      :max-items="itemsPerPage"
      search
      :data="allBuyerPendingContracts"
    >
      <div
        slot="header"
        class="flex flex-wrap-reverse items-center justify-between flex-grow"
      >
        <!-- <vs-button
          type="border"
          icon-pack="feather"
          icon="icon-plus"
          @click="addNewData"
          >Add New</vs-button
        > -->

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="mb-4 mr-4 cursor-pointer">
          <div
            class="flex items-center justify-between p-4 font-medium border border-solid rounded-full cursor-pointer d-theme-border-grey-light d-theme-dark-bg"
          >
            <span class="mr-2"
              >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
              {{
                allBuyerPendingContracts.length - currentPage * itemsPerPage > 0
                  ? currentPage * itemsPerPage
                  : allBuyerPendingContracts.length
              }}
              of {{ allBuyerPendingContracts.length }}</span
            >
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>
            <vs-dropdown-item @click="itemsPerPage = 4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage = 10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage = 15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage = 20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template slot="thead">
        <vs-th>Seller Image</vs-th>
        <vs-th sort-key="company_name">Company Name</vs-th>
        <vs-th sort-key="item_name">Item Name</vs-th>
        <!-- <vs-th sort-key="status">Status</vs-th> -->
        <!-- <vs-th sort-key="category">Item Quantity</vs-th> -->
        <!-- <vs-th sort-key="ship_from">Ship From</vs-th>
        <vs-th sort-key="ship_to">Ship To</vs-th> -->
        <vs-th sort-key="price">Total Cost</vs-th>
        <!-- <vs-th sort-key="price">Ship Date</vs-th>
        <vs-th sort-key="price">Delivered Before</vs-th> -->
        <vs-th sort-key="price">Details</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{ data }">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td class="img-container">
              <img v-if="tr.seller_image" :src="tr.seller_image" class="product-img" />
              <img v-else :src="cover_img" class="product-img" />
            </vs-td>

            <vs-td>
              <p class="font-medium truncate product-name">
                {{ tr.company_name }}
              </p>
            </vs-td>

            <vs-td>
              <p class="font-medium truncate product-name">
                <span v-for="(item, index) in tr.item_name" :key="index">
                  <span v-if="index <= 2">{{ item }},</span>
                </span>
              </p>
            </vs-td>

            <!-- <vs-td>
              <vs-chip color="primary">{{ tr.satisfied }}</vs-chip>
            </vs-td> -->

            <vs-td>
              <p class="product-category">{{ tr.total_cost }}</p>
            </vs-td>

            <vs-td class="text-center">
              <!-- <feather-icon
                icon="EyeIcon"
                svgClasses="w-10 text-center h-10 hover:text-primary stroke-current"
                @click.stop="editData(tr)"
              /> -->
               <vs-button
                color="primary"
                :to="{ name: 'buyer-pending-details', params: { invitation_id: tr.invitation_id } }"
                type="border"
                icon="remove_red_eye"
                >View</vs-button
              >
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <vs-button
              color="primary"
              :style="hide" v-if="(tr.payment != 'made' && tr.status != 'request_modification')"
              @click="openConfirm(tr)"
              type="border" class="m-1">
              Accept and Pay
              </vs-button>
              <vs-button
              color="primary"
              v-if="(tr.current_date >  tr.delivered_before_date && tr.buyer_ticket != 1 && tr.status != 'request_modification')"
              @click="ticketPopUp(tr.invitation_id)"
              type="border"  class="m-1">
              Open Ticket
              </vs-button>
              <vs-button
              color="primary"
              :style="hide" v-if="(tr.payment == 'made' && tr.status != 'request_modification')"
              @click="openConfirm2(tr.invitation_id)"
              type="border">
              Confirm Transaction
              </vs-button>
            </vs-td>
          </vs-tr>
        </tbody>
        <div class="">
          <vs-popup
            classContent="popup-example2"
            title="OPEN TICKET FOR COMPLAIN"
            :active.sync="popupActivo3"
          >
            <div class="vx-row">
              <div class="w-full vx-col">
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
                <span class="text-sm text-danger">{{
                  errors.first("Ticket Subject")
                }}</span>
              </div>
            </div>
            <div class="mt-5 vx-row">
              <div class="w-full vx-col">
                <vs-textarea
                  data-vv-validate-on="blur"
                  v-validate="'required'"
                  label="Message"
                  v-model="ticket_message"
                />
                <span class="text-sm text-danger">{{
                  errors.first("Ticket Mesage")
                }}</span>
              </div>
            </div>
            <div class="mt-5 vx-row">
              <div class="w-full vx-col">
                <img
                  v-bind:src="imagePreview"
                  class="w-full preview-image"
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
              class="flex mt-6 ml-auto"
              @click="send_ticket"
              >SUBMIT TICKET</vs-button
            >
          </vs-popup>
        </div>

        <div class="centerx">
          <vs-popup
            classContent="popup-example"
            title="Submit Review"
            :style="visibility2"
            :active.sync="popupActivo2"
          >
            <div class="mt-5 vx-row">
              <div class="w-full vx-col">
                <label style="font-weight:bold">Star Rating</label>
                <v-select
                  data-vv-validate-on="blur"
                  v-model="starRating"
                  v-validate="'required'"
                  placeholder="Rate Seller"
                  class="w-full"
                  :options="['1', '2','3','4','5']"
                ></v-select>
              </div>
            </div>
            <div class="mt-5 vx-row">
                <label for="" class="m-2" style="font-weight:bold">Are You Satisfied :</label>
                <vs-switch class="m-2" style="width: 20%;" color="primary" vs-icon-on="check_box" vs-icon-off="block" v-model="satisfied">
                  <span slot="on">YES</span>
                  <span slot="off">NO</span>
                </vs-switch>
            </div>
            <div class="mt-5 vx-row">
              <div class="w-full vx-col">
                 <vs-textarea label="Remark Message" v-model="message" />
              </div>
            </div>
            <vs-button :disabled="!validateForm2" class="flex mt-6 ml-auto" @click="send_review"
              >SUBMIT REVIEW</vs-button
            >
            <!-- </form> -->
          </vs-popup>
        </div>

        <div class="clearfix">
          <vs-popup
            classContent="popup-example2"
            title="REQUEST MODIFICATION OF SELLER QUOTATION"
            :active.sync="popupActivo4"
          >
            <div class="mt-5 vx-row">
              <div class="w-full vx-col">
                <vs-textarea
                  label="Modification Message"
                  name="Message"
                  data-vv-validate-on="blur"
                  v-validate="'required'"
                  v-model="modification_message"
                />
                <span class="text-sm text-danger">{{
                  errors.first("Message")
                }}</span>
              </div>
            </div>
            <!-- :disabled="!validateForm" -->
            <vs-button
              :disabled="!validateForm"
              class="flex mt-6 ml-auto"
              @click="send_request_modification(invitationId)"
              >SUBMIT REQUEST</vs-button
            >
            <!-- </form> -->
          </vs-popup>
        </div>
      </template>
    </vs-table>
  </div>
</template>

<script>
import DataViewSidebar from "../ui-elements/data-list/DataViewSidebar";
import vSelect from "vue-select";
import {mapActions, mapGetters} from 'vuex'
// import moduleDataList from "@/store/data-list/moduleDataList.js"

export default {
  components: {
    DataViewSidebar,
    vSelect,
  },
  data() {
    return {
      selected: [],
      itemsPerPage: 4,
      cover_img: require("@/assets/images/timeline.jpg"),
      contract_type: "",
      centerx: '',
      satisfied:true,
      starRating: '',
      message:'',

      modification_message: '',

      hide: '',
      popupActivo: false,
      popupActivo2: false,
      popupActivo3: false,
      popupActivo4: false,
      visibility: "",
      visibility2:"",
      visibility3:"",
      isMounted: false,
      activeConfirm: false,
      addNewDataSidebar: false,
      sidebarData: {},

      // Ticket
      subject: "Choose Subject",
      addressTypeOptions: [
        {
          text: "Delay delivery",
          value:
            "Delay delivery",
        },
        {
          text: "Not what i ordered for",
          value: "Not what i ordered for",
        }
      ],
      ticket_message:'',
      selectedFile: "",
      imagePreview: require("@/assets/images/Placeholder.jpg"),
    };
  },
  computed: {
    ...mapGetters({
      getBuyerPendingContracts : "contract_request/getBuyerPendingContracts"
    }),
    currentPage() {
      if (this.isMounted) {
        // return this.$refs.table.currentx;
      }
      return 0;
    },
    validateForm() {
      return !this.errors.any() && this.modification_message != "";
    },
    validateForm2() {
      return !this.errors.any() && this.starRating != "" && this.message != "";
    },
    validateForm3() {
      return (
        !this.errors.any() && this.subject != "" && this.ticket_message != ""
      );
    },
    allBuyerPendingContracts() {
      if (this.getBuyerPendingContracts == null) {
          return [];
      } else {
          return this.getBuyerPendingContracts;
      }
    },
  },
  methods: {
    ...mapActions({
      acceptContract: "contract_request/acceptContract",
      closeContract: "contract_request/closeContract",
      sendReview: "contract_request/sendReview",
      sendBuyerTicket: "tickets/sendBuyerTicket",
      sendRequestModification: "contract_request/sendRequestModification",
      buyerpendingContracts : "contract_request/buyerPendingContracts",
    }),

    send_request_modification(verify) {
      // console.log(verify);
      this.popupActivo4 = false;
      const payload = {
        invitation_id: verify,
        message: this.modification_message,
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

    close_transaction(){
      const payload = localStorage.getItem("invitation_id")
      this.$vs.loading();
      this.closeContract(payload)
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
            this.popupActivo2 = true
          }, 1500)

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

    ticketPopUp(invitation_id){
      localStorage.setItem("ticketInviteId", invitation_id);
      this.popupActivo3=true
    },
    openUpload() {
      document.getElementById("file-field").click();
    },
    updatePreview(e) {
      // console.log('e', e)
      var reader,
        files = e.target.files;
      // console.log(files.length)
      if (files.length === 0) {
        console.log("Empty");
      }
      this.filecheck = files.length;
      reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(files[0]);
      this.selectedFile = e.target.files[0];
      // console.log(this.selectedFile)
    },
    send_ticket() {
      this.popupActivo3 = false;
      const formData = new FormData();
      if (this.selectedFile.name) {
        formData.append("file", this.selectedFile, this.selectedFile.name);
      }
      formData.append("invitation_id", localStorage.getItem("ticketInviteId"));
      formData.append("subject", this.subject);
      formData.append("message", this.ticket_message);

      this.$vs.loading();
      this.sendBuyerTicket(formData)
        .then((response) => {
          console.log(response);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
          localStorage.removeItem("ticketInviteId");
          setTimeout(() => {
              location.reload()
            }, 500);
        })
        .catch((error) => {
          console.log(error.response);
          localStorage.removeItem("ticketInviteId");
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.messages.error,
            position:'top-right',
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },

    send_review(){
      this.popupActivo2 = false
      // this.visibility2 = "display:none";
      const payload = {
        invitation_id : localStorage.getItem("invitation_id"),
        star: this.starRating,
        satisfied:this.satisfied,
        message: this.message
      }
       this.$vs.loading();
      this.sendReview(payload)
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
          localStorage.removeItem("invitation_id")
          setTimeout(() => {
              location.reload()
            }, 800);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("invitation_id")
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

    openConfirm(tr) {
      const payload =
      {
        contract_id : tr.id,
        invitation_id: tr.invitation_id,
        amount:   Number(tr.total_cost.replace(/[^0-9.-]+/g,"")),
        currency: tr.currency
      }
      localStorage.setItem("payload",  JSON.stringify(payload))
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: `Confirm`,
        text: 'Are You Sure To Complete Payment?',
        accept: this.accept_contract
      })
    },

    openConfirm2(invitation_id) {
      localStorage.setItem("invitation_id", invitation_id)
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: `Confirm`,
        text: 'Are You Sure To Confirm Transaction? No Complains Can be resolved After Confirmation.',
        accept: this.close_transaction
      })
    },

    accept_contract() {
      let payload = JSON.parse(localStorage.getItem("payload"))
      this.$vs.loading();
      this.acceptContract(payload)
        .then((response) => {
          if (response.status == 201)
          {
            localStorage.removeItem("payload")
            this.$vs.loading.close();
            this.$vs.notify({
              title: "Info",
              text: response.data.message,
              position:'top-right',
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "success",
            });

          } else
          {
            localStorage.removeItem("payload")
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
              location.reload()
            }, 800);
          }

        })
        .catch((error) => {
          localStorage.removeItem("payload")
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

    editData(data) {
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
  },
  created() {
    if (!this.allBuyerPendingContracts.length > 0) {
      this.$vs.loading();
      this.buyerpendingContracts()
      .then(() => {
        this.$vs.loading.close();
      })
      .catch(() => {
        this.$vs.loading.close();
      })
    }
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>
<style lang="scss">
#data-list-thumb-view {
  .vs-con-table {
    .product-name {
      max-width: 23rem;
    }

    .vs-table--header {
      display: flex;
      flex-wrap: wrap-reverse;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      > span {
        display: flex;
        flex-grow: 1;
      }

      .vs-table--search {
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          & + i {
            left: 1rem;
          }

          &:focus + i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;

      tr {
        box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
        td {
          padding: 10px;
          &:first-child {
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          }
          &:last-child {
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          }
          &.img-container {
            // width: 1rem;
            // background: #fff;

            span {
              display: flex;
              justify-content: flex-start;
            }

            .product-img {
              height: 110px;
            }
          }
        }
        td.td-check {
          padding: 20px !important;
        }
      }
    }

    .vs-table--thead {
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text {
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check {
        padding: 0 15px !important;
      }
      tr {
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
