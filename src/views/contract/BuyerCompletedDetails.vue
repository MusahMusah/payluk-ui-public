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
                          <span
                            class="pl-4 mt-2 mr-2 border border-t-0 border-b-0 border-r-0 border-solid d-theme-border-grey-light"
                          >
                            <div data-v-34cbeed1="" class="vue-star-rating">
                              <div data-v-34cbeed1="" class="vue-star-rating">
                                <span
                                  data-v-34cbeed1=""
                                  class="vue-star-rating-star"
                                  style="margin-right: 0px"
                                >
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="20"
                                    width="20"
                                    viewBox="0 0 20 20"
                                    class="vue-star-rating-star"
                                    step="100"
                                  >
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="gvv127"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0"
                                    >
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffd055"
                                      ></stop>
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"
                                      ></stop>
                                    </linearGradient>
                                    <filter
                                      data-v-21f5376e=""
                                      id="di23cg"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"
                                      ></feGaussianBlur>
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"
                                        ></feMergeNode>
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"
                                        ></feMergeNode>
                                      </feMerge>
                                    </filter>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#gvv127)"
                                      stroke="#fff"
                                      filter="url(#di23cg)"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#gvv127)"
                                      stroke="#999"
                                      stroke-width="0"
                                      stroke-linejoin="miter"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#gvv127)"
                                    ></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  class="vue-star-rating-star"
                                  style="margin-right: 0px"
                                >
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="20"
                                    width="20"
                                    viewBox="0 0 20 20"
                                    class="vue-star-rating-star"
                                    step="100"
                                  >
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="avu1cs"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0"
                                    >
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffd055"
                                      ></stop>
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"
                                      ></stop>
                                    </linearGradient>
                                    <filter
                                      data-v-21f5376e=""
                                      id="xoyt5"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"
                                      ></feGaussianBlur>
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"
                                        ></feMergeNode>
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"
                                        ></feMergeNode>
                                      </feMerge>
                                    </filter>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#avu1cs)"
                                      stroke="#fff"
                                      filter="url(#xoyt5)"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#avu1cs)"
                                      stroke="#999"
                                      stroke-width="0"
                                      stroke-linejoin="miter"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#avu1cs)"
                                    ></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  class="vue-star-rating-star"
                                  style="margin-right: 0px"
                                >
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="20"
                                    width="20"
                                    viewBox="0 0 20 20"
                                    class="vue-star-rating-star"
                                    step="100"
                                  >
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="kcann"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0"
                                    >
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffd055"
                                      ></stop>
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"
                                      ></stop>
                                    </linearGradient>
                                    <filter
                                      data-v-21f5376e=""
                                      id="r7nzph"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"
                                      ></feGaussianBlur>
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"
                                        ></feMergeNode>
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"
                                        ></feMergeNode>
                                      </feMerge>
                                    </filter>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#kcann)"
                                      stroke="#fff"
                                      filter="url(#r7nzph)"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#kcann)"
                                      stroke="#999"
                                      stroke-width="0"
                                      stroke-linejoin="miter"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#kcann)"
                                    ></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  class="vue-star-rating-star"
                                  style="margin-right: 0px"
                                >
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="20"
                                    width="20"
                                    viewBox="0 0 20 20"
                                    class="vue-star-rating-star"
                                    step="100"
                                  >
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="dqcqii"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0"
                                    >
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#ffd055"
                                      ></stop>
                                      <stop
                                        data-v-21f5376e=""
                                        offset="100%"
                                        stop-color="#d8d8d8"
                                      ></stop>
                                    </linearGradient>
                                    <filter
                                      data-v-21f5376e=""
                                      id="it8g4s"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"
                                      ></feGaussianBlur>
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"
                                        ></feMergeNode>
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"
                                        ></feMergeNode>
                                      </feMerge>
                                    </filter>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#dqcqii)"
                                      stroke="#fff"
                                      filter="url(#it8g4s)"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#dqcqii)"
                                      stroke="#999"
                                      stroke-width="0"
                                      stroke-linejoin="miter"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#dqcqii)"
                                    ></polygon>
                                  </svg>
                                </span>
                                <span
                                  data-v-34cbeed1=""
                                  class="vue-star-rating-star"
                                  style="margin-right: 0px"
                                >
                                  <svg
                                    data-v-21f5376e=""
                                    data-v-34cbeed1=""
                                    height="20"
                                    width="20"
                                    viewBox="0 0 20 20"
                                    class="vue-star-rating-star"
                                    step="100"
                                  >
                                    <linearGradient
                                      data-v-21f5376e=""
                                      id="ng7w4"
                                      x1="0"
                                      x2="100%"
                                      y1="0"
                                      y2="0"
                                    >
                                      <stop
                                        data-v-21f5376e=""
                                        offset="0%"
                                        stop-color="#ffd055"
                                      ></stop>
                                      <stop
                                        data-v-21f5376e=""
                                        offset="0%"
                                        stop-color="#d8d8d8"
                                      ></stop>
                                    </linearGradient>
                                    <filter
                                      data-v-21f5376e=""
                                      id="ojd83"
                                      height="130%"
                                      width="130%"
                                      filterUnits="userSpaceOnUse"
                                    >
                                      <feGaussianBlur
                                        data-v-21f5376e=""
                                        stdDeviation="0"
                                        result="coloredBlur"
                                      ></feGaussianBlur>
                                      <feMerge data-v-21f5376e="">
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="coloredBlur"
                                        ></feMergeNode>
                                        <feMergeNode
                                          data-v-21f5376e=""
                                          in="SourceGraphic"
                                        ></feMergeNode>
                                      </feMerge>
                                    </filter>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#ng7w4)"
                                      stroke="#fff"
                                      filter="url(#ojd83)"
                                      style="display: none"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#ng7w4)"
                                      stroke="#999"
                                      stroke-width="0"
                                      stroke-linejoin="miter"
                                    ></polygon>
                                    <polygon
                                      data-v-21f5376e=""
                                      points="9.090909090909092,1.0101010101010102,3.0303030303030303,20,18.181818181818183,7.878787878787879,0,7.878787878787879,15.15151515151515,20"
                                      fill="url(#ng7w4)"
                                    ></polygon>
                                  </svg>
                                </span>
                                <!---->
                              </div>
                            </div>
                          </span>
                          <span class="mt-2 leading-none cursor-pointer"
                            >424 ratings</span
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

                        <!-- <div class="vx-row">
                          <div class="w-full vx-col">
                            <div class="flex mb-4 flex-wra items-sta">
                              <vs-button> ACCEPT & PAY</vs-button>
                              <vs-button class="ml-2"> COMPLETE PAY </vs-button>
                            </div>
                          </div>
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <vs-button> REQUEST MODIFICATION </vs-button>
                            </div>
                          </div>
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <vs-button> OPEN TICKET </vs-button>
                            </div>
                          </div>
                        </div> -->
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
                <span class="font-medium cursor-pointer text-primary"
                  >All Contracts</span
                >
              </div>

              <vs-divider />


              <div class="flex justify-between mb-2">
                <span class="text-grey">Status</span>
                <span><vs-chip color="primary">{{ details.satisfied }}</vs-chip></span>
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


              <!-- <vs-button color="danger" v-if="details.state != 'close'" type="border" class="w-full">DECLINE CONTRACT</vs-button> -->
            </vx-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      cover_img: require("@/assets/images/timeline.jpg"),
      details : [],
    }
  },

  computed : {
    ...mapGetters({
      getBuyerCompletedContracts: "contract_request/getBuyerCompletedContracts",
      getSingleContract: "contract_request/getSingleContract",
    }),
    allBuyerCompletedContracts () {
      return this.getBuyerCompletedContracts
    },
    singleContractDetails () {
      return this.getSingleContract
    },
  },

  methods : {
    ...mapActions({
      buyerCompletedContracts: "contract_request/buyerCompletedContracts",
      singleContract: "contract_request/singleContract",
    }),
  },

  watch: {
    '$route'() {
    },
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
    // this.buyerCompletedContracts();
  }
};
</script>

<style>
</style>
