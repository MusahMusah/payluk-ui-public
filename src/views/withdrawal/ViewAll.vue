<template lang="html">
    <vs-row>
        <vs-col vs-md="12" vs-lg="12" vs-type="fle" vs-justify="center" vs-alig="center" vs-sm="12" vs-xs="12" class="m-2">
            <vs-card>
                <div>
                    <vs-table search max-items="6" pagination stripe :data="user_transactions">
                        <template slot="header">
                            <h3>
                               Withdrawal Payments History
                            </h3>
                        </template>
                        <template slot="thead">
                            <vs-th sort-key="date"> Date </vs-th>
                            <vs-th sort-key="amount"> Amount </vs-th>
                            <vs-th sort-key="charges"> Charges</vs-th>
                            <vs-th sort-key="bank_name"> Bank Name</vs-th>
                            <vs-th sort-key="account_number"> Account Number </vs-th>
                            <vs-th sort-key="account_name"> Account Name </vs-th>
                            <vs-th sort-key="currency"> Currency </vs-th>
                            <vs-th sort-key="reference"> Ref Code </vs-th>
                        </template>

                        <template slot-scope="{data}">
                            <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                                <vs-td :data="data[indextr].date">
                                    {{ data[indextr].date }}
                                </vs-td>
                                <vs-td :data="data[indextr].amount"> {{ data[indextr].amount }} </vs-td>
                                <vs-td :data="data[indextr].charges">
                                    {{ data[indextr].charges }}
                                </vs-td>
                                <vs-td :data="data[indextr].bank_name">
                                    {{ data[indextr].bank_name }}
                                </vs-td>
                                <vs-td :data="data[indextr].account_number">
                                    {{ data[indextr].account_number }}
                                </vs-td>
                                <vs-td :data="data[indextr].account_name">
                                    {{ data[indextr].account_name }}
                                </vs-td>
                                <vs-td :data="data[indextr].currency">
                                    {{ data[indextr].currency }}
                                </vs-td>
                                <vs-td :data="data[indextr].reference">
                                    {{ data[indextr].reference }}
                                </vs-td>

                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
            </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
    import { mapGetters, mapActions } from "vuex";
    import vSelect from "vue-select";
    export default {
        data() {
            return {
            };
        },
        components: {
            vSelect,
        },
        methods: {
            ...mapActions({
                withdrawalDetailsData: "payments/withdrawalDetailsData",
            }),
        },
        computed: {
            ...mapGetters({
                getWithdrawalData: "payments/getWithdrawalData",
            }),
            user_transactions() {
                // if (this.getWithdrawalData == null) {
                //     return [];
                // } else {
                //     return this.getWithdrawalData;
                // }
                    return this.getWithdrawalData;
            },
        },
        created() {
            this.withdrawalDetailsData();
        },
        filters: {
            capitalize: function (value) {
                if (!value) return "";
                value = value.toString();
                return value.charAt(0).toUpperCase() + value.slice(1);
            },
        },
    };
</script>

<style></style>
