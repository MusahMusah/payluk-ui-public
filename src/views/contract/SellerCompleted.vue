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
    <seller-data-view-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />

    <vs-table
      class="vs-table"
      multiple
      ref="table"
      v-model="selected"
      pagination
      :max-items="itemsPerPage"
      search
      :data="allSellerCompletedContracts"
    >
      <div
        slot="header"
        class="flex flex-wrap-reverse items-center flex-grow justify-between"
      >
        <!-- <vs-button
          type="border"
          icon-pack="feather"
          icon="icon-plus"
          @click="addNewData"
          >Add New</vs-button
        > -->
        <!-- {{pendingContracts}} -->

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div
            class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
          >
            <span class="mr-2"
              >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} -
              {{
                allSellerCompletedContracts.length -
                  currentPage * itemsPerPage >
                0
                  ? currentPage * itemsPerPage
                  : allSellerCompletedContracts.length
              }}
              of {{ allSellerCompletedContracts.length }}</span
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
        <vs-th sort-key="status">Status</vs-th>
        <!-- <vs-th sort-key="category">Item Quantity</vs-th> -->
        <!-- <vs-th sort-key="ship_from">Ship From</vs-th>
        <vs-th sort-key="ship_to">Ship To</vs-th> -->
        <!-- <vs-th sort-key="price">Total Cost</vs-th> -->
        <!-- <vs-th sort-key="price">Ship Date</vs-th>
        <vs-th sort-key="price">Delivered Before</vs-th> -->
        <vs-th sort-key="price">Details</vs-th>
        <vs-th>Action</vs-th>
      </template>

      <template slot-scope="{ data }">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data" style="margin-bottom: 10em !important;">
            <vs-td class="img-container">
              <img
                v-if="tr.seller_image"
                :src="tr.seller_image"
                class="product-img"
              />
              <img v-else :src="cover_img" class="product-img" />
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.company_name }}
              </p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">
                {{ tr.item_name }}
              </p>
            </vs-td>

            <vs-td>
              <vs-chip color="primary">{{ tr.satisfied }}</vs-chip>
            </vs-td>

            <vs-td class="text-center">
              <!-- <feather-icon
                icon="EyeIcon"
                svgClasses="w-10 text-center h-10 hover:text-primary stroke-current"
                @click.stop="editData(tr)"
              /> -->
              <vs-button
                color="primary"
                :to="{ name: 'seller-completed-details', params: { invitation_id: tr.invitation_id } }"
                type="border"
                icon="remove_red_eye"
                >View</vs-button
              >
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <vs-button
                :style="hide"
                v-if="
                  tr.expired_time > tr.delivered_before_date &&
                  tr.seller_ticket != 1
                "
                @click="ticketPopUp(tr.invitation_id)"
                type="gradient"
                class="m-1"
              >
                Open Ticket
              </vs-button>
              <!-- close_transaction(tr.invitation_id) -->
              <!-- open_ticket_popop -->
            </vs-td>
          </vs-tr>
        </tbody>
        <div class="">
          <vs-popup
            classContent="popup-example2"
            title="OPEN TICKET FOR COMPLAIN"
            :style="visibility2"
            :active.sync="popupActivo2"
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
                  class="review-image w-full"
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
            <!-- </form> -->
          </vs-popup>
        </div>

        <div class="centerx">
          <vs-popup
            classContent="popup-example"
            title="Contracts Type"
            :style="visibility"
            :active.sync="popupActivo"
          >
            <div class="vx-row mt-5">
              <div class="vx-col w-full">
                <label>Select Contract Type</label>
                <v-select
                  data-vv-validate-on="blur"
                  v-model="contract_type"
                  v-validate="'required'"
                  name="Contract Type"
                  class="w-full"
                  :options="['Pending', 'Completed']"
                ></v-select>
                <span class="text-danger text-sm">{{
                  errors.first("Contract Type")
                }}</span>
              </div>
            </div>
            <vs-button
              :disabled="!validateForm"
              class="mt-6 ml-auto flex"
              @click="open_contracts"
              >OPEN</vs-button
            >
            <!-- </form> -->
          </vs-popup>
        </div>
      </template>
    </vs-table>
  </div>
</template>

<script>
import SellerDataViewSidebar from "../ui-elements/data-list/SellerDataViewSidebar";
import vSelect from "vue-select";
import { mapActions, mapGetters } from "vuex";
// import moduleDataList from "@/store/data-list/moduleDataList.js"

export default {
  components: {
    SellerDataViewSidebar,
    vSelect,
  },
  data() {
    return {
      selected: [],
      itemsPerPage: 4,
      contract_type: "",
      cover_img: require("@/assets/images/timeline.jpg"),

      subject: "Choose Subject",
      addressTypeOptions: [
        {
          text: "The items have been delivered but my funds have not been sent",
          value:
            "The items have been delivered but my funds have not been sent",
        },
        {
          text: "The buyer cancelled after the goods have been delivered",
          value: "The buyer cancelled after the goods have been delivered",
        },
        {
          text: "The buyer did not complete the payment",
          value: "The buyer did not complete the payment",
        },
      ],

      message: "",
      hide: "",
      popupActivo: false,
      popupActivo2: false,

      visibility: "",
      visibility2: "",

      isMounted: false,
      activeConfirm: false,
      addNewDataSidebar: false,
      sidebarData: {},

      // Ticket
      selectedFile: "",
      imagePreview: require("@/assets/images/Placeholder.jpg"),
      // subject:'',
      ticket_message: "",
    };
  },
  computed: {
    ...mapGetters({
      getAllPendingRequests: "contract_request/getAllPendingRequest",
      getSellerCompletedContracts:
        "contract_request/getSellerCompletedContracts",
    }),
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
      return 0;
    },
    validateForm() {
      return !this.errors.any() && this.contract_type != "";
    },
    validateForm2() {
      return !this.errors.any() && this.starRating != "" && this.message != "";
    },
    validateForm3() {
      return (
        !this.errors.any() && this.subject != "" && this.ticket_message != ""
      );
    },
    allSellerCompletedContracts() {
      return this.getSellerCompletedContracts;
    },
  },
  methods: {
    ...mapActions({
      acceptContract: "contract_request/acceptContract",
      closeContract: "contract_request/closeContract",
      sendReview: "contract_request/sendReview",
      sendTicket: "tickets/sendTicket",
      sellerCompletedContracts: "contract_request/sellerCompletedContracts",
    }),
    openUpload() {
      document.getElementById("file-field").click();
    },
    ticketPopUp(invitation_id) {
      localStorage.setItem("ticketInviteId", invitation_id);
      this.popupActivo2 = true;
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
      this.popupActivo2 = false;
      const formData = new FormData();
      if (this.selectedFile.name) {
        formData.append("file", this.selectedFile, this.selectedFile.name);
      }
      formData.append("invitation_id", localStorage.getItem("ticketInviteId"));
      formData.append("subject", this.subject);
      formData.append("message", this.ticket_message);

      this.$vs.loading();
      this.sendTicket(formData)
        .then((response) => {
          console.log(response);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Success",
            text: response.data.message,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
          localStorage.removeItem("ticketInviteId");
          setTimeout(() => {
            location.reload();
          }, 500);
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("ticketInviteId");
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.messages.error,
            position: "top-right",
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "danger",
          });
        });
    },

    open_contracts() {
      this.visibility = "display:none";
      if (this.contract_type == "Pending") {
        this.pending();
        // this.$router.replace({name : 'seller-pending'}).catch((err) => { console.log(err)})
      } else if (this.contract_type == "Completed") {
        this.completed();
        // location.href = "/seller-pending"
      }
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
    // this.completed();
    this.sellerCompletedContracts();
  },
  mounted() {
    this.isMounted = true;
  },
};
</script>
<style lang="scss">
.preview-image {
  /* width: 327px; */
  /* width: 35vw; */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 45vh;
  /* height: 50vh; */
  text-align: center;
  object-fit: contain;
  /* object-fit: cover; */
}
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
