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

                        <div class="vx-row">
                          <div class="w-full vx-col">
                            <div class="flex mb-4 flex-wra items-sta">
                              <vs-button v-if="(details.payment != 'made' && details.status != 'request_modification')" type="border" color="primary" @click="openConfirm(details)"> ACCEPT & PAY</vs-button>
                              <vs-button type="border" color="primary" v-if=" (details.payment == 'made' && details.status != 'request_modification')" @click="openConfirm2(details.invitation_id)" class="ml2"> CONFIRM TRNSACTION </vs-button>
                            </div>
                          </div>
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <vs-button @click="popupActivo4 = true" v-if="(details.flow == 'buyer' && details.status != 'request_modification')" type="border" color="primary" > REQUEST MODIFICATION </vs-button>
                            </div>
                          </div>
                          <div class="w-full vx-col">
                            <div class="mb-4 fle flex-wra items-sta">
                              <vs-button type="border" color="primary" @click="ticketPopUp(details.invitation_id)" v-if="(details.current_date >  details.delivered_before_date && details.buyer_ticket != 1 && details.status != 'request_modification')"> OPEN TICKET </vs-button>
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


              <vs-button @click="decline_contract(details.invitation_id)" color="danger" type="border" class="w-full">DECLINE CONTRACT</vs-button>
            </vx-card>
          </div>
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
    // allBuyerPendingContracts () {
    //   return this.getBuyerPendingContracts
    // }
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
        amount:   Number(details.total_cost.replace(/[^0-9.-]+/g,"")),
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
        text: 'Are You Sure To Comnfirm Transaction? No Complains Can be resolved After Confirmation.',
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
    this.buyerPendingContracts();
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
