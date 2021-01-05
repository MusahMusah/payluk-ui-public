<template>
  <div>
    <div class="content-area__conten">
      <div id="item-detail-page">
        <div class="vx-row">
          <div class="w-full mb-5 vx-col lg:w-5/5">
            <vx-card>
              <vs-collapse v-if="details.modification_message1">

              <vs-collapse-item icon-pack="feather" icon-arrow="icon-arrow-down">
                <div slot="header" class="font-bold text-primary">
                  OPEN YOUR MODIFICATION REQUEST
                </div>

                <vs-list>
                  <vs-list-header v-if="details.modification_message1" title="MODIFICATION MESSAGE 1"></vs-list-header>
                  <vs-list-item v-if="details.modification_message1" :title="details.message_time1" :subtitle="details.modification_message1"></vs-list-item>

                  <vs-list-header v-if="details.modification_message2" title="MODIFICATION MESSAGE 2"></vs-list-header>
                  <vs-list-item v-if="details.modification_message2" :title="details.message_time2" :subtitle="details.modification_message2"></vs-list-item>

                  <vs-list-header v-if="details.modification_message3" title="MODIFICATION MESSAGE 3"></vs-list-header>
                  <vs-list-item v-if="details.modification_message3" :title="details.message_time3" :subtitle="details.modification_message3"></vs-list-item>
                </vs-list>
              </vs-collapse-item>

            </vs-collapse>
            </vx-card>
          </div>
        </div>
        <div class="vx-row">
          <div class="relative vx-col lg:w-2/3">
            <div class="mb-5 vx-card">
              <!---->
              <div
                class="vx-card__collapsible-content vs-con-loading__container"
              >
                <div class="item-content">
                  <div class="p-6 product-details">
                    <div class="mt-6 vx-row">
                      <div
                        class="flex items-center justify-center w-full vx-col md:w-2/5"
                      >
                        <div
                          class="w-3/5 mx-auto mb-10 product-img-container md:mb-0"
                        >
                          <img
                            :src="cover_img"
                            alt="Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum"
                            class="responsive"
                          />
                        </div>
                      </div>
                      <div class="w-full vx-col md:w-3/5">
                        <h3 style="text-transform: uppercase">
                           <span v-for="(item, index) in details.item_name" :key="index">
                            <span style="text-transform: uppercase">{{ item }},</span>
                          </span>
                        </h3>
                        <p class="my-2">
                          <span class="mr-2">by</span
                          ><span style="text-transform: uppercase">{{ details.company_name }}</span>
                        </p>
                        <p class="flex flex-wrap items-center">
                          <span v-if="details.currency == 'USD' "
                            class="mt-2 mr-4 text-2xl font-medium leading-none text-primary"
                            >${{ details.total_cost }}</span
                          >
                          <span v-else-if="details.currency == 'NGN' "
                            class="mt-2 mr-4 text-2xl font-medium leading-none text-primary"
                            >₦{{ details.total_cost }}</span
                          >
                        </p>
                        <div class="vs-component vs-divider">
                          <span
                            class="vs-divider-border after vs-divider-border-default"
                            style="
                              width: 100%;
                              border-top: 1px solid rgba(0, 0, 0, 0.1);
                            "
                          ></span>
                          <!---->
                          <span
                            class="vs-divider-border before vs-divider-border-default"
                            style="
                              width: 100%;
                              border-top: 1px solid rgba(0, 0, 0, 0.1);
                            "
                          ></span>
                        </div>
                        <p>
                          {{ details.company_address }}
                        </p>

                        <div class="vs-component vs-divider">
                          <span
                            class="vs-divider-border after vs-divider-border-default"
                            style="
                              width: 100%;
                              border-top: 1px solid rgba(0, 0, 0, 0.1);
                            "
                          ></span>
                          <!---->
                          <span
                            class="vs-divider-border before vs-divider-border-default"
                            style="
                              width: 100%;
                              border-top: 1px solid rgba(0, 0, 0, 0.1);
                            "
                          ></span>
                        </div>

                        <div class="mt-3 vx-row">
                          <span class="ml-3 text-xl font-medium"
                            >Wallet ID :
                          </span>
                          <vs-chip
                            color="primary"
                            style="font-size: .9em"
                            class="ml-1"
                            >{{ details.wallet_id }}</vs-chip
                          >
                        </div>
                        <div class="vs-component vs-divider">
                          <span
                            class="vs-divider-border after vs-divider-border-default"
                            style="
                              width: 100%;
                              border-top: 1px solid rgba(0, 0, 0, 0.1);
                            "
                          ></span>
                          <!---->
                          <span
                            class="vs-divider-border before vs-divider-border-default"
                            style="
                              width: 100%;
                              border-top: 1px solid rgba(0, 0, 0, 0.1);
                            "
                          ></span>
                        </div>

                        <div class="vx-row">
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <!-- @click="ticketPopUp(details.invitation_id)" -->
                               <!-- <vs-button type="border" color="primary" @click="popupActivo = true" v-if="!(details.expired_time >  details.delivered_before_date && details.seller_ticket != 1)"> OPEN TICKET </vs-button> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!----><!---->
              </div>
              <div
                class="vx-card__code-container collapsed"
                style="max-height: 0px; display: none"
              >
                <div class="code-content">
                  <pre
                    class="language-markup"
                  ><code class="language-markup"></code></pre>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full vx-col lg:w-1/3">
            <vx-card>
              <!-- <p class="mb-3 text-grey">Contract Details</p> -->
              <p class="mb-3 font-semibold">Contract Details</p>
              <div class="flex justify-between">
                <!-- <span class="font-semibold">Coupons</span> -->
                <!-- <span class="font-medium cursor-pointer text-primary"
                  >View All Contracts</span
                > -->
              </div>

              <vs-divider />


              <div class="flex justify-between mb-2">
                <span class="text-grey">Status</span>
                <span><vs-chip color="primary">{{ details.status }}</vs-chip></span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Item Quantity</span>
                <span><vs-chip color="primary">{{ details.item_quantity }}</vs-chip></span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Currency</span>
                <span><vs-chip color="primary">{{ details.currency }}</vs-chip></span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Ship Date</span>
                <span><vs-chip color="primary">{{ details.ship_date }}</vs-chip></span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Delivered Date</span>
                <span><vs-chip color="primary">{{ details.delivered_before_date }}</vs-chip></span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">Ship From</span>
                <span><vs-chip color="primary">{{ details.ship_from }}</vs-chip></span>
              </div>
              <div class="flex justify-between mb-2">
                <span class="text-grey">To</span>
                <span><vs-chip color="primary">{{ details.ship_to }}</vs-chip></span>
              </div>

              <!-- <vs-divider /> -->


              <!-- <vs-button color="primary" @click="popupActive=true" type="border" class="w-full">MODIFY CONTRACT</vs-button> -->
            </vx-card>
          </div>
        </div>

        <!-- Pop Up For Request Modification -->
        <vs-popup
        classContent="popup-example"
        title="MODIFY CONTRACT DETAILS"
        :active.sync="popupActive"
        fullscree
      >
        <!-- <form data-vv-scope="add-new-address"> -->
        <div class="vx-row">
          <div class="w-full vx-col sm:w-1/2">
            <vs-input
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
            />
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
              label="Item Quantity"
              v-model="item_quantity"
            />
            <span class="text-sm text-danger">{{
              errors.first("Item Quantity")
            }}</span>
          </div>
        </div>

        <div class="vx-row">
          <div class="w-full vx-col sm:w-1/2">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="Total Cost"
              type="number"
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
              :options="['Kano', 'Abuja']"
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
              :options="['Kano', 'Abuja']"
            ></v-select>
            <span class="text-sm text-danger">{{ errors.first("Ship To") }}</span>
          </div>
        </div>

        <div class="vx-row">
          <div class="w-full mt-5 vx-col">
            <datepicker
              v-validate="'required'"
              data-vv-validate-on="blur"
              placeholder="Select Ship Date"
              name="Ship Date"
              v-model="ship_date"
            ></datepicker>
            <span class="text-sm text-danger">{{
              errors.first("Ship Date")
            }}</span>
          </div>

          <div class="w-full mt-5 vx-col">
            <datepicker
              v-validate="'required'"
              data-vv-validate-on="blur"
              placeholder="Delivered Before Date"
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
              icon-pack="feather"
              icon="icon-smartphone"
              icon-no-border
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
        <vs-button class="flex mt-6 ml-auto" :disabled="!validateForm" @click="send_quotation"
          >SAVE AND MODIFY</vs-button
        >
        <!-- </form> -->
        </vs-popup>

        <!-- Pop For Opening Ticket  -->
        <div class="">
          <vs-popup
            classContent="popup-example2"
            title="OPEN TICKET FOR COMPLAIN"
            :active.sync="popupActivo"
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
                  class="w-full review-image"
                  v-on:click="openUpload"
                 style="height: 57vh !important; object-fit: cover"
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
            <!-- </form> -->
          </vs-popup>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSelect from "vue-select";
import Datepicker from "vuejs-datepicker";
export default {
  components : {
    Datepicker,
    vSelect
  },
  data() {
    return {
      // Tickets Data
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
      // Ticket
      selectedFile: "",
      imagePreview: require("@/assets/images/Placeholder.jpg"),
      // subject:'',
      ticket_message: "",


      cover_img: require("@/assets/images/timeline.jpg"),
      details : [],
      item_name: "",
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
      popupActive: false,
      passengers: 1,
      date: null
    }
  },

  computed : {
    validateForm3() {
      return (
        !this.errors.any() && this.subject != "" && this.ticket_message != ""
      );
    },
    ...mapGetters({
      getSellerCompletedContracts: "contract_request/getSellerCompletedContracts",
      getSingleContract: "contract_request/getSingleContract",
    }),
    singleContractDetails () {
      return this.getSingleContract
    },
  },

  methods : {
    ...mapActions({
      sellerCompletedContracts: "contract_request/sellerCompletedContracts",
      sendTicket: "tickets/sendTicket",
      singleContract: "contract_request/singleContract",
    }),
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
  },

  watch: {
    '$route'() {
    }
  },

  created() {
    this.$vs.loading();
    this.singleContract(this.$route.params.invitation_id)
    .then(() => {
      this.$vs.loading.close();
      this.details = this.singleContractDetails[0]
    })
    .catch(() => {
      this.$vs.loading.close();
      this.$router.replace({name: '404'}).catch(() => {})
    })
  },
  mounted () {
    // this.sellerCompletedContracts();
  }
};
</script>

<style>
</style>
