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
                    <div class="vx-row">
                      <div class="w-full text-center vx-col lg:w-2/2">
                        <h1 class="text-center" style="color: #7367f0; font-weight: bold">Delivery Date Countdown Timer</h1>
                        <div v-if="details.buyer_ticket != 1" id="clockdiv" class="items-center justify-center text-cente fle" style="text-align: center !important">
                          <div>
                            <span class="days"></span>
                            <div class="smalltext">Days</div>
                          </div>
                          <div>
                            <span class="hours"></span>
                            <div class="smalltext">Hours</div>
                          </div>
                          <div>
                            <span class="minutes"></span>
                            <div class="smalltext">Minutes</div>
                          </div>
                          <div>
                            <span class="seconds"></span>
                            <div class="smalltext">Seconds</div>
                          </div>
                        </div>
                        <div v-else style="font-size: 1.2em">
                          We have recieved your complain, we will repond to your ticket within the next 24hrs.
                          <br>
                          <vs-button to="/tickets">
                            Ticket Details
                          </vs-button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 vx-row">
                      <div
                        class="flex items-center justify-center w-full vx-col md:w-2/5"
                      >
                        <div
                          class="w-full mx-auto mb-10 w3/5 product-img-container md:mb-0"
                        >
                          <img
                            v-if="details.seller_image"
                            :src="details.seller_image"
                            alt="Apple - Apple Watch Series 1 42mm Space Gray Aluminum Case Black Sport Band - Space Gray Aluminum"
                            class="responsive"
                          />
                          <img
                            v-else
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
                            <div class="flex mb-4 flex-wra items-sta">
                              <vs-button v-if="(details.payment != 'made' && details.status != 'request_modification')" type="border" color="primary" @click="openConfirm(details)"> ACCEPT & PAY</vs-button>
                              <vs-button type="border" color="primary" v-if=" (details.payment == 'made' && details.status != 'request_modification')" @click="openConfirm2(details.invitation_id)" class="ml2"> CONFIRM TRNSACTION </vs-button>
                            </div>
                          </div>
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <vs-button @click="popupActivo4 = true" v-if="(details.flow == 'buyer' && details.payment != 'made' && details.status != 'request_modification')" type="border" color="primary" > REQUEST MODIFICATION </vs-button>
                            </div>
                          </div>
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <vs-button type="border" color="primary" @click="ticketPopUp(details.invitation_id)" v-if="(new Date(details.current_date) > new Date(details.delivered_before_date) && details.payment == 'made' && details.buyer_ticket != 1 && details.status != 'request_modification')"> OPEN TICKET </vs-button>
                              <!-- <vs-button type="border" color="primary" @click="ticketPopUp(details.invitation_id)" v-if="(new Date(details.current_date) > new Date(details.delivered_before_date) && details.buyer_ticket != 1)"> OPEN TICKET </vs-button> -->
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

          <div class="w-full vx-col sm:w-3/3 lg:w-1/3">
            <vx-card>
              <!-- <p class="mb-3 text-grey">Contract Details</p> -->
              <p class="mb-3 font-semibold">Contract Details</p>
              <div class="flex justify-between">
                <!-- <span class="font-semibold">Coupons</span> -->
                <!-- <span class="font-medium cursor-pointer text-primary"
                  >All Contracts</span
                > -->
              </div>

              <vs-divider />


              <div class="flex justify-between mb-2">
                <span class="text-grey">Status</span>
                <span v-if="details.status == 'request_modification'"><vs-chip color="primary">Requested Modification</vs-chip></span>
                <span v-else><vs-chip color="primary">{{ details.status }}</vs-chip></span>
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

              <vs-divider />


              <vs-button v-if="details.payment != 'made'" @click="decline_contract(details.invitation_id)" color="danger" type="border" class="w-full">DECLINE CONTRACT</vs-button>
            </vx-card>
          </div>
        </div>

          <!-- Request Modificartion Popup -->
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
                @click="send_request_modification(details.invitation_id)"
                >SUBMIT REQUEST</vs-button
              >
              <!-- </form> -->
            </vs-popup>
          </div>

          <!-- Submit Review Popup -->
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

          <!-- Open Ticket -->
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
                    class="w-full preview-imag"
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
            </vs-popup>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import vSelect from "vue-select";
export default {
  components: {
    vSelect,
  },
  data() {
    return {
      cover_img: require("@/assets/images/timeline.jpg"),
      details : [],
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
    }
  },

  computed : {
    ...mapGetters({
      getBuyerPendingContracts: "contract_request/getBuyerPendingContracts",
      getSingleContract: "contract_request/getSingleContract",
    }),
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
    singleContractDetails () {
      return this.getSingleContract
    },
  },

  methods : {
    ...mapActions({
      buyerPendingContracts: "contract_request/buyerPendingContracts",
      acceptContract: "contract_request/acceptContract",
      closeContract: "contract_request/closeContract",
      sendReview: "contract_request/sendReview",
      sendBuyerTicket: "tickets/sendBuyerTicket",
      sendRequestModification: "contract_request/sendRequestModification",
      declineContract: "contract_request/declineContract",
      singleContract: "contract_request/singleContract",
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
          this.$router.replace({name: 'dashboard-analytics'}).catch(() => {})
          // setTimeout(() => {
          //   location.reload();
          // }, 300)

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
          setTimeout(() => {
              location.reload()
            }, 800);
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
          // localStorage.removeItem("invitation_id")
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
          // console.log(error);
          //  localStorage.removeItem("invitation_id")
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
          this.$router.replace({name: 'dashboard-analytics'}).catch(() => {})
          // setTimeout(() => {
          //     location.reload()

          //   }, 800);
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

    openConfirm(details) {
      const payload =
      {
        contract_id : details.id,
        invitation_id: details.invitation_id,
        amount:   Number(details.total_cost.replace(/[^0-9.-]+/g,"")).toString(),
        currency: details.currency
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
          if(response.status == 201){
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

          }else {
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
  },

  watch: {
    // '$route'() {
    //   this.$vs.loading();
    //   this.singleContract(this.$route.params.invitation_id)
    //   .then(() => {
    //     this.$vs.loading.close();
    //   })
    //   .catch(() => {
    //     this.$router.replace({name: '404'}).catch(() => {})
    //   })
    // },
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
    // this.buyerPendingContracts();
    // this.$vs.loading();
    // this.singleContract(this.$route.params.invitation_id)
    // .then(() => {
    //   this.$vs.loading.close();
    //   this.details = this.singleContractDetails[0]
    // })
    // .catch(() => {
    //   this.$vs.loading.close();
    //   this.$router.replace({name: '404'}).catch(() => {})
    // })

  },
  updated() {
     var countDownDate = new Date(this.singleContractDetails[0].delivered_before_date_time).getTime();
    // var countDownDate = new Date("2021-01-08").getTime();
    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;
        // alert(distance);

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        let clock = document.getElementById("clockdiv");
        clock.querySelector('.days').innerHTML = days;
        clock.querySelector('.hours').innerHTML = hours;
        clock.querySelector('.minutes').innerHTML = minutes;
        clock.querySelector('.seconds').innerHTML = seconds;
        // .innerHTML = days + "d " + hours + "h "
        // + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("clockdiv").innerHTML = "Contract Delivery Before Date Reached, You can now Open Ticket For Complain...";
          // clock.querySelector('.days').innerHTML = 0;
          // clock.querySelector('.hours').innerHTML = 0;
          // clock.querySelector('.minutes').innerHTML = 0;
          // clock.querySelector('.seconds').innerHTML = 0;

        }
    }, 1000);
  }
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
  // text-align: center;
  object-fit: contain;
  /* object-fit: cover; */
}

</style>
<style>
#clockdiv{
	/* color: #fff; */
	display: inline-block;
	font-weight: 600;
	text-align: center;
  font-size: 1.5rem;
  /* font-size: 30px; */
}

#clockdiv > div{
  padding: 7px;
  margin: 10px;
	border-radius: 3px;
	background: #7367f0;
	display: inline-block;
}

#clockdiv div > span{
	padding: 15px;
	border-radius: 3px;
	background: #fff;
	display: inline-block;
}

.smalltext{
  color: #fff;
	padding-top: 5px;
	font-size: 16px;
}
</style>
