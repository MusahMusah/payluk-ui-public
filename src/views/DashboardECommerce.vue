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
            <div class="vx-col w-full md:w-2/3 mb-base">
                <vx-card title="Revenue">
                    <template slot="actions">
                        <feather-icon icon="SettingsIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>
                    <div slot="no-body" class="p-6 pb-0">
                        <div class="flex">
                            <div class="mr-6">
                                <p class="mb-1 font-semibold">This Month</p>
                                <p class="text-3xl text-success"><sup class="text-base mr-1">$</sup>782187</p>
                            </div>
                            <div>
                                <p class="mb-1 font-semibold">Last Month</p>
                                <p class="text-3xl"><sup class="text-base mr-1">$</sup>666635</p>
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
            <div class="vx-col w-full md:w-1/3 mb-base">
                <vx-card title="Goal Overview">
                    <template slot="actions">
                        <feather-icon icon="HelpCircleIcon" svgClasses="w-6 h-6 text-grey"></feather-icon>
                    </template>

                    <!-- CHART -->
                    <template slot="no-body">
                        <div class="mt-10">
                            <vue-apex-charts type=radialBar height=240 :options="analyticsData.goalOverviewRadialBar.chartOptions" :series="analyticsData.goalOverviewRadialBar.series" />
                        </div>
                    </template>

                    <!-- DATA -->
                    <div class="flex justify-between text-center" slot="no-body-bottom">
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0 border-l-0">
                            <p class="mt-4">Completed</p>
                            <p class="mb-4 text-3xl font-semibold">786,617</p>
                        </div>
                        <div class="w-1/2 border border-solid d-theme-border-grey-light border-r-0 border-b-0">
                            <p class="mt-4">In Progress</p>
                            <p class="mb-4 text-3xl font-semibold">13,561</p>
                        </div>
                    </div>
                </vx-card>
            </div>
        </div>
        
     
    </div>
</template>

<script>
import axios from 'axios'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import VueApexCharts from 'vue-apexcharts'
import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
import analyticsData from './ui-elements/card/analyticsData.js'
import ChangeTimeDurationDropdown from '@/components/ChangeTimeDurationDropdown.vue'

export default{
    data() {
        return {
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
        }
    },
    components: {
        VueApexCharts,
        StatisticsCardLine,
        VuePerfectScrollbar,
        ChangeTimeDurationDropdown
    },
    mounted() {
        this.$refs.chatLogPS.$el.scrollTop = this.$refs.chatLog.scrollHeight;
    },
    created() {
      // Subscribers gained - Statistics
      axios.get("/api/card/card-statistics/subscribers")
        .then((response) => { this.subscribersGained = response.data })
        .catch((error) => { console.log(error) })

      // Revenue Generated
      axios.get("/api/card/card-statistics/revenue")
        .then((response) => { this.revenueGenerated = response.data })
        .catch((error) => { console.log(error) })

      // Sales
      axios.get("/api/card/card-statistics/sales")
        .then((response) => { this.quarterlySales = response.data })
        .catch((error) => { console.log(error) })

      // Orders - Statistics
      axios.get("/api/card/card-statistics/orders")
        .then((response) => { this.ordersRecevied = response.data })
        .catch((error) => { console.log(error) })

      // Revenue Comparison
      axios.get("/api/card/card-analytics/revenue-comparison")
        .then((response) => { this.revenueComparisonLine = response.data })
        .catch((error) => { console.log(error) })

      // Goal Overview
      axios.get("/api/card/card-analytics/goal-overview")
        .then((response) => { this.goalOverview = response.data })
        .catch((error) => { console.log(error) })

      // Browser Analytics
      axios.get("/api/card/card-analytics/browser-analytics")
        .then((response) => { this.browserStatistics = response.data })
        .catch((error) => { console.log(error) })

      // Client Retention
      axios.get("/api/card/card-analytics/client-retention")
        .then((response) => { this.clientRetentionBar = response.data })
        .catch((error) => { console.log(error) })

      // Sessions By Device
      axios.get("/api/card/card-analytics/session-by-device")
        .then((response) => { this.sessionsData = response.data })
        .catch((error) => { console.log(error) })

      // Chat Log
      axios.get("/api/chat/demo-1/log")
        .then((response) => { this.chatLog = response.data })
        .catch((error) => { console.log(error) })

      // Customers
      axios.get("/api/card/card-analytics/customers")
        .then((response) => { this.customersData = response.data })
        .catch((error) => { console.log(error) })
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
