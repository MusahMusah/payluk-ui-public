<template>
  <vs-card>
    <vs-table  max-items="3" sorted filtered search stripe pagination :data="get_all_tickets">

    <template slot="thead">
      <vs-th sort-key="ticket_id">Ticket ID</vs-th>
      <vs-th sort-key="subject">Subject</vs-th>
      <vs-th sort-key="status">Status</vs-th>
      <vs-th sort-key="message">Message</vs-th>
      <vs-th sort-key="timer">Timer</vs-th>
    </template>

    <template slot-scope="{data}">
      <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
        <vs-td :data="tr.ticket_id">
          {{ tr.ticket_id }}
        </vs-td>
        <vs-td :data="tr.subject">
          {{ tr.subject }}
        </vs-td>
        <vs-td :data="tr.status">
          <vs-chip color="primary">{{ tr.status }}</vs-chip>
        </vs-td>
        <vs-td :data="tr.message">
          {{ tr.message }}
        </vs-td>
        <vs-td :data="tr.timer">
          {{ tr.timer }}
        </vs-td>

          <template class="expand-user" slot="expand">
            <div class="w-full con-expand-users">
              <div class="flex items-center justify-between con-btns-user">
                <div class="flex items-center justify-start con-userx">
                  <!-- <vs-avatar :badge="tr.id" size="45px" /> -->
                  <vs-avatar :badge="tr.id" size="60px" :src="adminImage" />
                  <span>Admin</span>
                </div>
                <div class="flex">
                  <vs-button type="border" size="small" icon-pack="feather" icon="icon-phone" class="mr-2"></vs-button>
                  <!-- <vs-button type="border" size="small" icon-pack="feather" icon="icon-send" color="success" class="mr-2"></vs-button> -->
                </div>
              </div>
              <vs-list>
                <vs-list-item icon-pack="feather" icon="icon-mai" :title="'We have recieved your complain, we will repond to your ticket within the next 24hrs.'"></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-mail" :title="'Contact Admin for further Details Via : support@payluk.com'"></vs-list-item>
                <vs-list-item icon-pack="feather" icon="icon-phone" :title="'Contact Admin for further Details Via : (+234) 8099 378 337 '"></vs-list-item>
              </vs-list>
            </div>
          </template>
      </vs-tr>
    </template>
  </vs-table>
  </vs-card>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data() {
    return {
      adminImage : require('@/assets/images/logo.png'),
      users: [{id:1,email: "shoaliyu@gmail.com", name:"musahmusah",website:"aliyu.com"}]
    }
  },
  methods : {
    ...mapActions({
      allTickets: "tickets/allTickets",
    }),
  },
  computed : {
    ...mapGetters({
      getAllTickets: "tickets/getAllTickets",
    }),
    get_all_tickets(){
      return this.getAllTickets
    }
  },
  created(){
    if (!this.get_all_tickets.length > 0) {
      this.$vs.loading();
      this.allTickets()
      .then(() => {
        this.$vs.loading.close();
      })
      .catch(() => {
        this.$vs.loading.close();
      })
    }
  }
};
</script>
