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
                <vx-card title="Schedule Analysis">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <div class="flex">
                            <div class="mr-6">
                                <p class="mb-1 font-semibold" style="color: #7367f0;">This Month</p>
                                <p class="text-3xl" style="color: #7367f0;"><sup class="mr-1 text-base">$</sup>782187</p>
                            </div>
                            <div>
                                <p class="mb-1 font-semibold" style="color: #7367f0;">Last Month</p>
                                <p class="text-3xl" style="color: #7367f0;"><sup class="mr-1 text-base">$</sup>666635</p>
                            </div>
                        </div>
                        <vue-apex-charts
                          type=line
                          height=266
                          :options="analyticsData.revenueComparisonLine.chartOptions"
                          :series="analyticsData.revenueComparisonLine.series" />
                    </div>
                </vx-card>
            </div>

            <!-- RADIAL CHART -->
            <div class="w-full vx-col md:w-1/3 mb-base">
                <vx-card title="Goal Overview">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions"  :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center mt-" slot="no-body-bottom">
                        <div class="w-1/2 border border-b-0 border-l-0 border-r-0 border-solid d-theme-border-grey-light">
                            <p class="mt-4" style="color: #7367f0; font-size: 1.1em; font-weight: bold">Main Balance</p>
                            <p class="mb-4 text-3xl font-semibold" style="color: #7367f0;">{{main_balance}}</p>
                        </div>
                        <div class="w-1/2 border border-b-0 border-r-0 border-solid d-theme-border-grey-light">
                            <p class="mt-4" style="color: #7367f0; font-size: 1.1em; font-weight: bold">Lain Balance</p>
                            <p class="mb-4 text-3xl font-semibold" style="color: #7367f0;">{{lain_balance}}</p>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <!-- CARD 6: Product Orders -->
            <div class="w-full vx-col lg:w-1/3 mb-base">
                <vx-card title="Contracts Overview">
                    <!-- CARD ACTION -->
                    <template slot="actions">
                        <change-time-duration-dropdown />
                    </template>

                    <!-- Chart -->
                    <div slot="no-body">
                        <vue-apex-charts type=radialBar height=435 :options="analyticsData.productOrdersRadialBar.chartOptions" :series="analyticsData.productOrdersRadialBar.series" />
                    </div>

                    <ul>
                        <!-- productsOrder.analyticsData{{analyticsData.productOrdersRadialBar.analyticsData}} -->
                        <li v-for="orderData in analyticsData.productOrdersRadialBar.analyticsData" :key="orderData.orderType" class="flex justify-between mb-">
                            <span class="flex items-center">
                                    <span class="inline-block w-4 h-4 mr-2 bg-white border-solid rounded-full border-3" :class="`border-${orderData.color}`"></span>
                                    <span class="font-semibold">{{ orderData.orderType }}</span>
                            </span>
                            <span>{{ orderData.counts }}</span>
                        </li>
                    </ul>
                </vx-card>
            </div>

            <!-- CARD 7: Sales Stats -->
            <div class="w-full vx-col lg:w-1/3 mb-base">
              <vx-card title="Sales Stats" subtitle="Last 6 Months">
                <template slot="actions">
                  <feather-icon icon="MoreVerticalIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                </template>
                <div class="flex">
                  <span class="flex items-center"><div class="w-3 h-3 mr-1 rounded-full bg-primary"></div><span>Sales</span></span>
                  <span class="flex items-center ml-4"><div class="w-3 h-3 mr-1 rounded-full bg-warning"></div><span>Visits</span></span>
                </div>
                <div slot="no-body-bottom">
                  <vue-apex-charts type=radar height=400 :options="analyticsData.statisticsRadar.chartOptions" :series="analyticsData.statisticsRadar.series" />
                </div>
              </vx-card>
            </div>

            <!-- CARD 8: Activity Timeline -->
            <div class="w-full vx-col lg:w-1/3 mb-base">
                <vx-card title="Activity Timeline">
                    <vx-timeline :data="timelineData" />
                </vx-card>
            </div>
        </div>

        <div class="vx-row">
            <div class="w-full vx-col">
                <vx-card title="Recent Transactions">
                <div slot="no-body" class="mt-4">
                    <vs-table :data="dispatchedOrders" class="table-dark-inverted">
                    <template slot="thead">
                        <vs-th>ORDER NO.</vs-th>
                        <vs-th>STATUS</vs-th>
                        <vs-th>OPERATORS</vs-th>
                        <vs-th>LOCATION</vs-th>
                        <vs-th>DISTANCE</vs-th>
                        <vs-th>START DATE</vs-th>
                        <vs-th>EST DELIVERY DATE</vs-th>
                    </template>

                    <template slot-scope="{data}">
                        <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].orderNo">
                            <span>#{{data[indextr].orderNo}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].status">
                            <span class="flex items-center px-2 py-1 rounded"><div class="w-3 h-3 mr-2 rounded-full" :class="'bg-' + data[indextr].statusColor"></div>{{data[indextr].status}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].orderNo">
                            <ul class="users-liked user-list">
                                <li v-for="(user, userIndex) in data[indextr].usersLiked" :key="userIndex">
                                    <vx-tooltip :text="user.name" position="bottom">
                                        <vs-avatar :src="user.img" size="30px" class="-m-1 border-2 border-white border-solid"></vs-avatar>
                                    </vx-tooltip>
                                </li>
                            </ul>
                        </vs-td>
                        <vs-td :data="data[indextr].orderNo">
                            <span>{{data[indextr].location}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].orderNo">
                            <span>{{data[indextr].distance}}</span>
                            <vs-progress :percent="data[indextr].distPercent" :color="data[indextr].statusColor"></vs-progress>
                        </vs-td>
                        <vs-td :data="data[indextr].orderNo">
                            <span>{{data[indextr].startDate}}</span>
                        </vs-td>
                        <vs-td :data="data[indextr].orderNo">
                            <span>{{data[indextr].estDelDate}}</span>
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
      }),
      user_data() {
            return this.userData
      },
      lain_balance () {
        return this.formatMoney(this.userData.lain_balance)

      },
      main_balance () {
        return this.formatMoney(this.userData.main_balance)

      },
    },
    methods : {
      ...mapActions({
          activeUserInfo : "users/activeUserInfo",
      }),
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
        VxTimeline
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    created() {
      this.activeUserInfo()
      this.test()
      this.formatMoney()
      // Subscribers gained - Statistics
      // axios.get("/api/card/card-statistics/subscribers")
      //   .then((response) => { this.subscribersGained = response.data })
      //   .catch((error) => { console.log(error) })

      // // Revenue Generated
      // axios.get("/api/card/card-statistics/revenue")
      //   .then((response) => { this.revenueGenerated = response.data })
      //   .catch((error) => { console.log(error) })

      // // Sales
      // axios.get("/api/card/card-statistics/sales")
      //   .then((response) => { this.quarterlySales = response.data })
      //   .catch((error) => { console.log(error) })

      // // Orders - Statistics
      // axios.get("/api/card/card-statistics/orders")
      //   .then((response) => { this.ordersRecevied = response.data })
      //   .catch((error) => { console.log(error) })

      // // Revenue Comparison
      // axios.get("/api/card/card-analytics/revenue-comparison")
      //   .then((response) => { this.revenueComparisonLine = response.data })
      //   .catch((error) => { console.log(error) })

      // // Goal Overview
      // axios.get("/api/card/card-analytics/goal-overview")
      //   .then((response) => { this.goalOverview = response.data })
      //   .catch((error) => { console.log(error) })

      // // Browser Analytics
      // axios.get("/api/card/card-analytics/browser-analytics")
      //   .then((response) => { this.browserStatistics = response.data })
      //   .catch((error) => { console.log(error) })

      // // Client Retention
      // axios.get("/api/card/card-analytics/client-retention")
      //   .then((response) => { this.clientRetentionBar = response.data })
      //   .catch((error) => { console.log(error) })

      // // Sessions By Device
      // axios.get("/api/card/card-analytics/session-by-device")
      //   .then((response) => { this.sessionsData = response.data })
      //   .catch((error) => { console.log(error) })

      // // Chat Log
      // axios.get("/api/chat/demo-1/log")
      //   .then((response) => { this.chatLog = response.data })
      //   .catch((error) => { console.log(error) })

      // // Customers
      // axios.get("/api/card/card-analytics/customers")
      //   .then((response) => { this.customersData = response.data })
      //   .catch((error) => { console.log(error) })
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
