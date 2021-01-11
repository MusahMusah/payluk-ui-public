<!-- =========================================================================================
    File Name: DashboardEcommerce.vue
    Description: Dashboard - Ecommerce
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <div class="vx-row">

            <!-- LINE CHART -->
            <div class="w-full vx-col md:w-2/3 mb-base">
                <vx-card title="Schedule Analysis" styl="height: 68vh;">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <div class="flex">
                            <div class="mr-6">
                                <p class="mb-1 font-semibold" style="color: #7367f0;">This Month</p>
                                <p class="text-3xl" style="color: #7367f0;" v-if="ScheduleAnalytics.series"><sup class="mr-1 text-base">₦</sup>{{this_monthAnalytics}}</p>
                                <p class="text-3xl" style="color: #7367f0;" v-else><sup class="mr-1 text-base">₦</sup>0</p>
                            </div>
                            <div>
                                <p class="mb-1 font-semibold" style="color: #7367f0;">Last Month</p>
                                <p class="text-3xl" style="color: #7367f0;" v-if="ScheduleAnalytics.series"><sup class="mr-1 text-base">₦</sup>{{last_monthAnalytics}}</p>
                                <p class="text-3xl" style="color: #7367f0;" v-else><sup class="mr-1 text-base">₦</sup>0</p>
                            </div>
                        </div>
                          <!-- v-if="ScheduleAnalytics.series" -->
                        <vue-apex-charts
                          type=line
                          height=266
                          :options="analyticsData.revenueComparisonLine.chartOptions"
                          :series="ScheduleAnalytics.series" />
                        <!-- <vue-apex-charts
                          v-else
                          type=line
                          height=266
                          :options="analyticsData.revenueComparisonLine.chartOptions"
                          :series="[]" /> -->
                    </div>
                </vx-card>
            </div>

            <!-- RADIAL CHART -->
            <div class="w-full vx-col md:w-1/3 mb-base">
                <vx-card title="Goal Overview" styl="height: 68vh;">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions"  :series="[Number(this.userData.info.main_balance), Number(this.userData.info.lain_balance)]" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center mt-" slot="no-body-bottom">
                        <div class="w-1/2 border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light">
                            <p class="mt-4" style="color: #7367f0; font-size: 1.2em; font-weight: bold">Main Balance</p>
                            <p class="mb-4 text-3xl font-semibold" style="color: #7367f0; font-size: 1.2em !important;">₦{{main_balance}}</p>
                        </div>
                        <div class="w-1/2 border border-b-0 border-r-0 border-solid d-theme-border-grey-light">
                            <p class="mt-4" style="color: #7367f0; font-size: 1.2em; font-weight: bold;">Lein Balance</p>
                            <p class="mb-4 text-3xl font-semibold" style="color: #7367f0; font-size: 1.2em !important;">₦{{lain_balance}}</p>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <!-- CARD 6: Product Orders -->
            <div class="w-full vx-col lg:w-1/2 mb-base">
                <vx-card title="Contracts Overview" style="height: 90vh;">
                    <!-- CARD ACTION -->
                    <template slot="actions">
                        <!-- <change-time-duration-dropdown /> -->
                    </template>

                    <!-- Chart -->
                    <div slot="no-body">
                        <!-- <vue-apex-charts type=radialBar height=435 :options="analyticsData.productOrdersRadialBar.chartOptions" :series="analyticsData.productOrdersRadialBar.series" /> -->
                        <vue-apex-charts type=radialBar height=435 :options="analyticsData.productOrdersRadialBar.chartOptions" :series="[getContractsOverView['completed'], getContractsOverView['pending']]" />
                    </div>

                    <ul>
                        <!-- productsOrder.analyticsData{{analyticsData.productOrdersRadialBar.analyticsData}} -->
                        <li v-for="orderData in analyticsData.productOrdersRadialBar.analyticsData" :key="orderData.orderType" class="flex justify-between mb-">
                            <span class="flex items-center">
                                    <span class="inline-block w-4 h-4 mr-2 bg-white border-solid rounded-full border-3" :class="`border-${orderData.color}`"></span>
                                    <span class="font-semibold">{{ orderData.orderType }}</span>
                            </span>
                            <span v-if="orderData.orderType == 'Completed'">{{ getContractsOverView['completed'] }}</span>
                            <span v-else>{{ getContractsOverView['pending'] }}</span>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- CARD 8: Activity Timeline -->
            <div class="w-full vx-col lg:w-1/2 mb-base">
                <!-- <vx-card title="Activity Timeline" style="height: 90vh;marginbottom: 7.5rem !important; overflow-y: auto !important;">
                    <vx-timeline v-if="getNotifications.data.length > 0" :data="getNotifications.data" styl="margin-bottom: 5.8rem;" />
                    <p v-else>No Timeline Data Yet</p>
                </vx-card> -->
                <vx-card title="TOP TRADERS" v-if="top_sellers" style="height: 90vh;marginbottom: 7.5rem !important; overflow-y: auto !important;">
                    <template slot="actions">
                      <feather-icon icon="MoreHorizontalIcon"></feather-icon>
                    </template>

                    <ul class="friend-suggesions-list">
                      <li
                        class="flex items-center mb-4 friend-suggestion"
                        v-for="(top_seller, index) in top_sellers"
                        :key="index"
                      >
                        <div class="mr-3">
                          <vs-avatar
                            class="m-0"
                            :src="top_seller.small_image"
                            size="35px"
                          />
                        </div>
                        <div class="leading-tight">
                          <p class="font-medium">
                            <router-link
                              :to="{
                                name: 'user-public-profile',
                                params: { wallet_id: top_seller.wallet_id },
                              }"
                            >
                              {{ top_seller.first_name }}</router-link
                            >
                          </p>
                          <!-- <span class="text-xs" style="text-transform: uppercase">{{
                            top_seller.ranking
                          }}</span> -->
                          <star-rating
                          :star-size="15"
                          :read-only="true"
                          :rating="Number(top_seller.star)"
                          :max-rating="Number(top_seller.star)"
                          :border-width="1"
                          border-color="#d8d8d8"
                          :rounded-corners="true"
                          :show-rating="false"
                          :star-points="
                          [23,2, 14,17, 0,19,
                            10,34, 7,50,
                            23,43, 38,50, 36,34,
                            46,19, 31,17]">
                          </star-rating>
                          <span class="" style="text-transform: uppercase;font-weight: 500; font-size: 1em">Beginner</span>
                        </div>
                        <div class="ml-auto cursor-pointer">
                          <vs-button
                            type="border"
                            icon="send"
                            :disabled="false"
                            @click="send_invite(top_seller.wallet_id)"
                            >Send Invite</vs-button
                          >
                        </div>
                      </li>
                    </ul>
                    <template slot="footer">
                      <!-- <vs-button icon-pack="feather" icon="icon-plus" class="w-full my-auto"
                        >Load More</vs-button
                      > -->
                    </template>
                </vx-card>
                <vx-card title="TOP TRADERS" v-else style="height: 90vh;marginbottom: 7.5rem !important; overflow-y: auto !important;">
                  <p>Top Traders Not in the Platform Yet.</p>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <div class="w-full vx-col">
                <vx-card title="Recent Deposit Transactions">
                <div slot="no-body" class="mt-4">
                    <vs-table :data="user_transactions" max-items="5" pagination stripe class="table-dark-inverted stripe">
                    <template slot="thead">
                        <vs-th>TRANSACTION DATE</vs-th>
                        <vs-th>TRANSACTION AMOUNT</vs-th>
                        <vs-th>TRANSACTION CURRENCY</vs-th>
                        <vs-th>TRANSACTION STATUS</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].date">
                            <span>{{data[indextr].date}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].amount">
                            <span>{{data[indextr].amount}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].currency">
                            <span>{{data[indextr].currency}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].status">
                            <vs-chip color="primary" class="text-center">
                                <vs-avatar icon="check" />
                                <span>{{ data[indextr].status }}</span>
                            </vs-chip>
                        </vs-td>
                        </vs-tr>
                    </template>
                    </vs-table>
                </div>

                </vx-card>
            </div>
        </div>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'
import VxTimeline from "@/components/timeline/VxTimeline"
import StarRating from 'vue-star-rating'
import { mapActions, mapGetters } from 'vuex'

export default{
    data() {
        return {
            testCash : '',
            subscribersGained: {},
            revenueGenerated: {},
            quarterlySales: {},
            ordersRecevied: {},

            revenueComparisonLine: {},
            goalOverview: {},

            browserStatistics: [],
            clientRetentionBar: {},

            sessionsData: {},
            chatLog: [],
            chatMsgInput: '',
            customersData: {},

            analyticsData: analyticsData,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },

            // Analytics page
            checkpointReward: {},
            salesBarSession: {},
            supportTracker: {},
            productsOrder: {},
            salesRadar: {},

            timelineData: [
              {
                color: "primary",
                icon: "PlusIcon",
                title: "Client Meeting",
                desc: "Bonbon macaroon jelly beans gummi bears jelly lollipop apple",
                time: "25 mins Ago"
              },
              {
                color: "warning",
                icon: "MailIcon",
                title: "Email Newsletter",
                desc: "Cupcake gummi bears soufflé caramels candy",
                time: "15 Days Ago"
              },
            //   {
            //     color: "danger",
            //     icon: "UsersIcon",
            //     title: "Plan Webinar",
            //     desc: "Candy ice cream cake. Halvah gummi bears",
            //     time: "20 days ago"
            //   },
              {
                color: "primary",
                icon: "LayoutIcon",
                title: "Launch Website",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",
                time: "25 days ago"
              },
              {
                color: "warning",
                icon: "TvIcon",
                title: "Marketing",
                desc: "Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",
                time: "28 days ago"
              }
            ],
            dispatchedOrders:
            [
                {"orderNo":879985,"status":"Moving","statusColor":"success","operator":"Cinar Knowles","operatorImg":"/img/avatar-s-2.93c7a17a.png","usersLiked":[{"name":"Vennie Mostowy","img":"/img/avatar-s-5.73b9c8f8.png"},{"name":"Elicia Rieske","img":"/img/avatar-s-7.9241b5d6.png"},{"name":"Julee Rossignol","img":"/img/avatar-s-10.7be10c57.png"},{"name":"Darcey Nooner","img":"/img/avatar-s-8.2579bd6d.png"}],"location":"Anniston, Alabama","distance":"130 km","distPercent":80,"startDate":"26/07/2018","estDelDate":"28/07/2018"},{"orderNo":156897,"status":"Pending","statusColor":"warning","operator":"Britany Ryder","operatorImg":"/img/avatar-s-4.88863dbb.png","usersLiked":[{"name":"Trina Lynes","img":"/img/avatar-s-1.8edbcded.png"},{"name":"Lilian Nenez","img":"/img/avatar-s-2.93c7a17a.png"},{"name":"Alberto Glotzbach","img":"/img/avatar-s-3.a718f09a.png"}],"location":"Cordova, Alaska","distance":"234 km","distPercent":60,"startDate":"26/07/2018","estDelDate":"28/07/2018"},{"orderNo":568975,"status":"Moving","statusColor":"success","operator":"Kishan Ashton","operatorImg":"/img/avatar-s-1.8edbcded.png","usersLiked":[{"name":"Lai Lewandowski","img":"/img/avatar-s-6.6b63817c.png"},{"name":"Elicia Rieske","img":"/img/avatar-s-7.9241b5d6.png"},{"name":"Darcey Nooner","img":"/img/avatar-s-8.2579bd6d.png"},{"name":"Julee Rossignol","img":"/img/avatar-s-10.7be10c57.png"},{"name":"Jeffrey Gerondale","img":"/img/avatar-s-9.ec990ac1.png"}],"location":"Florence, Alabama","distance":"168 km","distPercent":70,"startDate":"26/07/2018","estDelDate":"28/07/2018"},{"orderNo":245689,"status":"Canceled","statusColor":"danger","operator":"Anabella Elliott","operatorImg":"/img/avatar-s-6.6b63817c.png","usersLiked":[{"name":"Vennie Mostowy","img":"/img/avatar-s-5.73b9c8f8.png"},{"name":"Elicia Rieske","img":"/img/avatar-s-7.9241b5d6.png"}],"location":"Clifton, Arizona","distance":"125 km","distPercent":95,"startDate":"26/07/2018","estDelDate":"28/07/2018"}
            ],
        }
    },
    computed : {
      ...mapGetters({
          userData : 'users/getUserData',
          scheduleAnalysis : 'users/getDashBoardAnalytics',
          contractsOverView : 'users/getDashBoardContractsOverView',
          notificationsData : 'users/getNotifications',
          getTransactionsDetails: "payments/getTransactionsData",
      }),
      user_transactions() {
          if (this.userData.deposit.transactions == null) {
              return [];
          } else {
              return this.userData.deposit.transactions;
          }
          // return this.userData.deposit.transactions
      },
      top_sellers () {
        return this.userData.top_seller
      },
      getNotifications(){
        return this.userData.notification
      },
      getContractsOverView()
      {
        return this.userData.invoice
      },
      ScheduleAnalytics() {
        return this.scheduleAnalysis
      },
      this_monthAnalytics() {
        return this.formatMoney(this.scheduleAnalysis.series[0].total_amount)
      },
      last_monthAnalytics() {
        return this.formatMoney(this.scheduleAnalysis.series[1].total_amount)
      },
      user_data() {
        return this.userData
      },
      lain_balance () {
        return this.formatMoney(this.userData.info.lain_balance)
      },

      non_formated_main_balance () {
        return 0
        // return Number(this.userData.info.main_balance)
        // return parseInt(this.userData.info.main_balance)
        // return Number(this.main_balance.replace(/[^0-9.-]+/g,""))
      },

      non_formated_lain_balance () {
        return 0
        // return parseInt(this.userData.info.lain_balance)
        // return Number(this.lain_balance.replace(/[^0-9.-]+/g,""))
      },

      main_balance () {
        return this.formatMoney(this.userData.info.main_balance)
      },
    },
    methods : {
      ...mapActions({
        activeUserInfo : "users/activeUserInfo",
        dashBoardAnalytics : "users/dashBoardAnalytics",
        dashBoardContractsOverview : "users/dashBoardContractsOverview",
        transactionDetailsData: "payments/transactionDetailsData",
        sendInvite: "users/sendInvite",
      }),
      send_invite(wallet_id) {
        // Loading
        this.$vs.loading();
        this.sendInvite(wallet_id)
          .then((response) => {
            this.$vs.loading.close();
            if (response.data.errorcode == 711) {
              // Account Not Activated
              this.$vs.notify({
                title: "Info",
                text: response.data.message,
                position:'top-right',
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "danger",
              });
            } else if (response.data.errorcode == 712) {
              // Cant send your self request
              this.$vs.notify({
                title: "Info",
                text: response.data.message,
                position:'top-right',
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "success",
              });
            } else if (response.data.errorcode == 704) {
              // Seller Account Not Approved
              this.$vs.notify({
                title: "Info",
                text: response.data.message,
                position:'top-right',
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "danger",
              });
            } else {
              // Request Successfully Sent
              this.$vs.notify({
                title: "Success",
                text: response.data.message,
                position:'top-right',
                iconPack: "feather",
                icon: "icon-alert-circle",
                color: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
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
      formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

          const negativeSign = amount < 0 ? "-" : "";

          let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
          let j = (i.length > 3) ? i.length % 3 : 0;

          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
          console.log(e)
        }
      }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        VuePerfectScrollbar,
        ChangeTimeDurationDropdown,
        VxTimeline,
        StarRating,
    },
    mounted() {
        // this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    created() {
      this.formatMoney();
      this.activeUserInfo()
      this.dashBoardAnalytics();
      // this.$vs.loading();
      // .then(() => {
      //   this.$vs.loading.close();
      // })
      // .catch(() => {
      //   this.$vs.loading.close();
      //   this.logOutAction()
      //   .then(() => {
      //     this.$router.push('/login').catch(() => {})
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      // })
      // this.dashBoardContractsOverview();
      // this.transactionDetailsData();
    }
}
</script>

<style lang="scss">
.chat-card-log {
    height: 400px;

    .chat-sent-msg {
        background-color: #f2f4f7 !important;
    }
}
</style>
