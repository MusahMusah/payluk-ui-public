<!-- =========================================================================================
  File Name: TheNavbar.vue
  Description: Navbar component
  Component Name: TheNavbar
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
<div class="relative">
  <div class="vx-navbar-wrapper" :class="classObj">
    <vs-navbar class="vx-navbar navbar-custom navbar-skelton" :color="navbarColorLocal">

      <!-- SM - OPEN SIDEBAR BUTTON -->
      <feather-icon class="mr-1 cursor-pointer sm:inline-flex xl:hidden" icon="MenuIcon" @click.stop="showSidebar"></feather-icon>

      <template v-if="windowWidth >= 992">
        <!-- STARRED PAGES - FIRST 10 -->
        <!-- <ul class="vx-navbar__starred-pages">
          <draggable v-model="starredPagesLimited" :group="{name: 'pinList'}" class="flex cursor-move">
            <li class="starred-page" v-for="page in starredPagesLimited" :key="page.url">
              <vx-tooltip :text="page.label" position="bottom" delay=".3s">
                <feather-icon svgClasses="h-6 w-6" class="p-2 cursor-pointer" :icon="page.labelIcon" @click="$router.push(page.url).catch(() => {})" />
              </vx-tooltip>
            </li>
          </draggable>
        </ul> -->

        <!-- STARRED PAGES MORE -->
        <div class="vx-navbar__starred-pages--more-dropdown" v-if="starredPagesMore.length">
          <vs-dropdown vs-custom-content vs-trigger-click>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="p-2 cursor-pointer"></feather-icon>
            <vs-dropdown-menu>
              <ul class="vx-navbar__starred-pages-more--list">
                <draggable v-model="starredPagesMore" :group="{name: 'pinList'}" class="cursor-move">
                  <li class="flex items-center cursor-pointer starred-page--more" v-for="page in starredPagesMore" :key="page.url" @click="$router.push(page.url).catch(() => {})">
                    <feather-icon svgClasses="h-5 w-5" class="ml-2 mr-1" :icon="page.labelIcon"></feather-icon>
                    <span class="px-2 pt-2 pb-1">{{ page.label }}</span>
                  </li>
                </draggable>
              </ul>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <div class="bookmark-container">
          <!-- <feather-icon icon="StarIcon" :svgClasses="['stoke-current text-warning', {'text-white': navbarColor != '#fff'}]" class="p-2 cursor-pointer" @click.stop="showBookmarkPagesDropdown = !showBookmarkPagesDropdown" /> -->
                    <!-- <div v-click-outside="outside" class="absolute w-1/3 mt-4 bookmark-list xl:w-1/4" v-if="showBookmarkPagesDropdown">
          <vx-auto-suggest :autoFocus="true" :data="navbarSearchAndPinList" @selected="selected" @actionClicked="actionClicked" inputClassses="w-full" show-action show-pinned background-overlay></vx-auto-suggest>
          </div> -->
          <!-- <feather-icon icon="StarIcon" :svgClasses="['stoke-current text-warning', {'text-white': navbarColor != '#fff'}]" class="p-2 cursor-pointer" @click.stop="showBookmarkPagesDropdown = !showBookmarkPagesDropdown" /> -->
            <vs-chip color="primary ml-1" id="tour_rankingSection">
              <!-- <vs-avatar icon-pack="feather" icon="icon-star" /> -->
              <span style="font-weight: bold; font-sze: 1.3em">RANKING :</span>
              <star-rating
              :star-size="15"
              :read-only="true"
              :rating="Number(rank)"
              :max-rating="Number(rank)"
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
              <span class="p-2" style="text-transform: uppercase;font-weight: bold; font-size: 1.2em">{{userData.info.rank}}</span>
              <!-- <vs-button class="p-1" style="text-transform: uppercase;font-weight: bold; font-size: 1.3em">{{userData.rank.toUpperCase()}}</vs-button> -->
            </vs-chip>
            <vs-chip color="primary" class="ml-2 mr-2" id="tour_statusSection">
              <vs-avatar size="28px" v-if="userData.info.status == 'not activated'" icon="close" />
              <vs-avatar size="28px" v-else icon="check" />
              <span  style="text-transform: uppercase; font-weight: bold; font-size: 1.3em">ACCOUNT {{userData.info.status}}</span>
                <!-- <vs-button icon="send" radius style="text-transform: uppercase; font-weight: bold; font-size: 1.3em">ACCOUNT {{userData.status.toUpperCase()}}</vs-button> -->
            </vs-chip>
            <vs-button v-if="userData.info.status == 'not activated'"
            :to="{name: 'activate-account'}"
            style="text-transform: uppercase; font-weight: bold; font-size: .7em"
            size="medium" icon="double_arrow" color="primary">ACTIVATE</vs-button>
        </div>
      </template>
      <template v-if="windowWidth < 992">

        <!-- STARRED PAGES MORE -->
        <div class="vx-navbar__starred-pages--more-dropdown" v-if="starredPagesMore.length">
          <vs-dropdown vs-custom-content vs-trigger-click>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" class="p-2 cursor-pointer"></feather-icon>
            <vs-dropdown-menu>
              <ul class="vx-navbar__starred-pages-more--list">
                <draggable v-model="starredPagesMore" :group="{name: 'pinList'}" class="cursor-move">
                  <li class="flex items-center cursor-pointer starred-page--more" v-for="page in starredPagesMore" :key="page.url" @click="$router.push(page.url).catch(() => {})">
                    <feather-icon svgClasses="h-5 w-5" class="ml-2 mr-1" :icon="page.labelIcon"></feather-icon>
                    <span class="px-2 pt-2 pb-1">{{ page.label }}</span>
                  </li>
                </draggable>
              </ul>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <div class="bookmark-container">
            <!-- icon="double_arrow" -->
            <vs-button :to="{name: 'activate-account'}"
            color="primary"
            v-if="(userData.info.status == 'not activated')" size="small" class="ml-2">ACTIVATE ACCOUNT</vs-button>
            <vs-chip color="primary" v-else>
              <span style="font-weight: bold; font-size: .9em; padding:1px">RANK :</span>
              <star-rating
              :star-size="10"
              :read-only="true"
              :rating="Number(rank)"
              :max-rating="Number(rank)"
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
              <span class="p-1" style="text-transform: uppercase;font-weight: bold; font-size: .9em">{{userData.info.rank}}</span>
            </vs-chip>
        </div>
      </template>


      <vs-spacer />

      <!-- SEARCHBAR -->
      <div class="absolute left-0 w-full h-full search-full-container" :class="{'flex': showFullSearch}" v-show="showFullSearch">
            <!-- :data="navbarSearchAndPinList" -->
          <vx-auto-suggest
            class="w-full"
            inputClassses="w-full vs-input-no-border vs-input-no-shdow-focus"
            :autoFocus="showFullSearch"
            icon="SearchIcon"
            placeholder="Search..."
            ref="navbarSearch"
            :data="searchData"
            @closeSearchbar="showFullSearch = false"
            @selected="selected"
            background-overlay />
          <div class="absolute right-0 z-50 h-full">
              <feather-icon icon="XIcon" class="h-full px-4 cursor-pointer close-search-icon" @click="showFullSearch = false"></feather-icon>
          </div>
      </div>
      <!-- <feather-icon icon="SearchIcon" @click="showFullSearch = true" class="mr-4 cursor-pointer navbar-fuzzy-search"></feather-icon> -->
      <feather-icon icon="SearchIcon" id="tour_searchSection" @click="searchUsers" class="mr-4 cursor-pointer navbar-fuzzy-search"></feather-icon>

      <!-- NOTIFICATIONS -->
      <!-- <vs-dropdown vs-custom-content :vs-trigger-click="change"  class="cursor-pointer"> -->
      <div @click="notification_read" id="tour_notificationSection">
        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer">
        <feather-icon icon="BellIcon" class="mt-1 mr-2 cursor-pointer sm:mr-6" :badge="getNotifications.badge"></feather-icon>
        <vs-dropdown-menu class="notification-dropdown dropdown-custom vx-navbar-dropdown">

          <div class="p-5 text-center text-white notification-top bg-primary">
            <h3 class="text-white">{{ getNotifications.badge }} New</h3>
            <p class="opacity-75">App Notifications</p>
          </div>

          <VuePerfectScrollbar ref="mainSidebarPs" class="p-0 mb-10 scroll-area--nofications-dropdown" :settings="settings">
          <ul class="bordered-items">
            <li v-for="(ntf, index) in getNotifications.data" :key="index" class="flex justify-between px-4 py-4 cursor-pointer notification">
              <template v-if="index <= 5">
                <div class="flex items-start">
                  <feather-icon icon="PackageIcon" svgClasses="text-primary stroke-current mr-1 h-6 w-6"></feather-icon>
                  <div class="mx-2">
                    <span class="block font-medium notification-title text-primary">{{ntf.title}}</span>
                    <small>{{ ntf.message }}</small>
                  </div>
                </div>
                <small class="mt-1 whitespace-no-wrap">{{ ntf.created_at }}</small>
              </template>
            </li>
          </ul>
          </VuePerfectScrollbar>
                    <div class="fixed bottom-0 w-full p-2 font-semibold text-center border border-b-0 border-l-0 border-r-0 border-solid rounded-b-lg cursor-pointer checkout-footer text-primary d-theme-border-grey-light">
                        <span>View All Notifications</span>
                    </div>
        </vs-dropdown-menu>
      </vs-dropdown>
      </div>
      <!-- {{getNotifications}} -->
      <!-- USER META -->
      <div class="flex items-center the-navbar__user-meta" v-if="userData">
        <div class="hidden leading-tight text-right sm:block">
           <p class="font-semibold">{{ user_displayName }}</p>
          <small>{{ user_displayEmail }}</small>
        </div>
        <vs-dropdown vs-custom-content vs-trigger-click class="cursor-pointer" id="tour_logout_profileSection">
          <div class="ml-3 con-img">
            <img
              v-if="activeUserImg"
              key="onlineImg"
              :src="activeUserImg"
              alt="user-img"
              width="40"
              height="40"
              class="block rounded-full shadow-md cursor-pointer" />
              <img
              v-else
              key="onlineImg"
              :src="profileNoImage"
              alt="user-img"
              width="40"
              height="40"
              class="block rounded-full shadow-md cursor-pointer" />
          </div>
          <vs-dropdown-menu class="vx-navbar-dropdown">
            <ul style="min-width: 9rem">
              <li
                class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
                @click="$router.replace('/account').catch(() => {})">

                <feather-icon icon="UserIcon" svgClasses="w-4 h-4" />
                <span class="ml-2">Profile</span>
              </li>
              <vs-divider class="m-1"></vs-divider>
              <li
                class="flex px-4 py-2 cursor-pointer hover:bg-primary hover:text-white"
                @click="logout">
                <feather-icon icon="LogOutIcon" svgClasses="w-4 h-4"/>
                <span class="ml-2">Logout</span>
              </li>
            </ul>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>
    </vs-navbar>
  </div>
</div>
</template>

<script>
import VxAutoSuggest from '@/components/vx-auto-suggest/VxAutoSuggest.vue';
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import draggable from 'vuedraggable'
import StarRating from 'vue-star-rating'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "the-navbar",
    props: {
        navbarColor: {
            type: String,
            default: "#fff",
        },
    },
    data() {
        return {
            rank: 0,
            profileNoImage : require('@/assets/images/noimage.svg'),
            navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
            searchData : {},
            searchQuery: '',
            showFullSearch: false,
            unreadNotifications: [
                { index: 0, title: 'New Message', msg: 'Are your going to meet me tonight?', icon: 'MessageSquareIcon', time: this.randomDate({sec: 10}), category: 'primary' },
                { index: 1, title: 'New Order Recieved', msg: 'You got new order of goods.', icon: 'PackageIcon', time: this.randomDate({sec: 40}), category: 'success' },
                { index: 2, title: 'Server Limit Reached!', msg: 'Server have 99% CPU usage.', icon: 'AlertOctagonIcon', time: this.randomDate({min: 1}), category: 'danger' },
                { index: 3, title: 'New Mail From Peter', msg: 'Cake sesame snaps cupcake', icon: 'MailIcon', time: this.randomDate({min: 6}), category: 'primary' },
                { index: 4, title: 'Bruce\'s Party', msg: 'Chocolate cake oat cake tiramisu', icon: 'CalendarIcon', time: this.randomDate({hr: 2}), category: 'warning' },
            ],
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
            autoFocusSearch: false,
            showBookmarkPagesDropdown: false,
        }
    },
    watch: {
        '$route'() {
            if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
        },
        getNotification(){
          this.notifications()
          return this.notificationsData
        }
    },
    computed: {
        ...mapGetters({
          authenticated : 'authentication/authenticated',
          user : 'authentication/user',
          userData : 'users/getUserData',
          notificationsData : 'users/getNotifications',
        }),

        // PROFILE
        user_displayName() {
            return this.userData.info.first_name + " " + this.userData.info.last_name
        },
        user_displayEmail() {
            return this.userData.info.email
        },
        getNotifications(){
          return this.notificationsData
        },
        activeUserImg() {
            // return this.$store.state.AppActiveUser.photoURL;
            return this.userData.info.small_image
        },
        navbarColorLocal() {
          return this.$store.state.theme === "dark" ? "#10163a" : this.navbarColor
        },
        // HELPER
        verticalNavMenuWidth() {
            return this.$store.state.verticalNavMenuWidth
        },
        windowWidth() {
            return this.$store.state.windowWidth
        },

        // NAVBAR STYLE
        classObj() {
            if (this.verticalNavMenuWidth == "default") return "navbar-default"
            else if (this.verticalNavMenuWidth == "reduced") return "navbar-reduced"
            else if (this.verticalNavMenuWidth) return "navbar-full"
        },

        // BOOKMARK & SEARCH
        data() {
            // return this.$store.state.navbarSearchAndPinList;
            // return this.searchUserData()
            return 0
        },
        starredPages() {
            return this.$store.state.starredPages;
        },
        starredPagesLimited: {
            get() {
                return this.starredPages.slice(0, 10);
            },
            set(list) {
                this.$store.dispatch('arrangeStarredPagesLimited', list);
            }
        },
        starredPagesMore: {
            get() {
                return this.starredPages.slice(10);
            },
            set(list) {
                this.$store.dispatch('arrangeStarredPagesMore', list);
            }
        },

    },
    methods: {
        ...mapActions({
          logOutAction : 'authentication/logOut',
          activeUserInfo : "users/activeUserInfo",
          searchDB : "users/searchUserData",
          notifications: "users/notifications",
          notificationRead: "contract_request/notificationRead"
        }),
        searchUsers () {
            this.$router.push('/users').catch(() => {})
        },
        notification_read()
        {
          this.notificationRead()
          .then(() => {
            this.notifications()
          })
        },
        searchUserData(){
          this.searchDB()
          .then((res) => {
            this.searchData = res.data
          })

        },
        showSidebar() {
            this.$store.commit('TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE', true);
        },
        selected(item) {
            this.$router.push(item.url).catch(() => {})
            this.showFullSearch = false;
        },
        actionClicked(item) {
            // e.stopPropogation();
            this.$store.dispatch('updateStarredPage', { index: item.index, val: !item.highlightAction });
        },
        showNavbarSearch() {
            this.showFullSearch = true;
        },
        showSearchbar() {
            this.showFullSearch = true;
        },
        elapsedTime(startTime) {
            let x = new Date(startTime);
            let now = new Date();
            var timeDiff = now - x;
            timeDiff /= 1000;

            var seconds = Math.round(timeDiff);
            timeDiff = Math.floor(timeDiff / 60);

            var minutes = Math.round(timeDiff % 60);
            timeDiff = Math.floor(timeDiff / 60);

            var hours = Math.round(timeDiff % 24);
            timeDiff = Math.floor(timeDiff / 24);

            var days = Math.round(timeDiff % 365);
            timeDiff = Math.floor(timeDiff / 365);

            var years = timeDiff;

            if (years > 0) {
                return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
            } else if (days > 0) {
                return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
            } else if (hours > 0) {
                return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
            } else if (minutes > 0) {
                return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
            } else if (seconds > 0) {
                return seconds + (seconds > 1 ? ' sec ago' : 'just now');
            }

            return 'Just Now'
        },
        logout() {
            // This is just for demo Purpose. If user clicks on logout -> redirect
            this.logOutAction()
            .then(() => {
              this.$router.push('/login').catch(() => {})
            })
            .catch((err) => {
              console.log(err)
            })
        },
        outside: function() {
            this.showBookmarkPagesDropdown = false
        },

        // Method for creating dummy notification time
        randomDate({hr, min, sec}) {
          let date = new Date()

          if(hr) date.setHours(date.getHours() - hr)
          if(min) date.setMinutes(date.getMinutes() - min)
          if(sec) date.setSeconds(date.getSeconds() - sec)

          return date
        }
    },
    created () {
      this.$vs.loading();
      this.activeUserInfo()
      .then(() => {
        this.$vs.loading.close();
      })
      .catch(() => {
        this.$vs.loading.close();
        this.logOutAction()
        .then(() => {
          this.$router.push('/login').catch(() => {})
        })
        .catch((err) => {
          console.log(err)
        })
      })
      this.searchUserData()
      this.notifications()
      setInterval(() => this.notifications(), 300000);
    },
    // updated(){
    //   this.rank = Number(this.userData.info.star)
    // },
    directives: {
        'click-outside': {
            bind: function(el, binding) {
                const bubble = binding.modifiers.bubble
                const handler = (e) => {
                    if (bubble || (!el.contains(e.target) && el !== e.target)) {
                        binding.value(e)
                    }
                }
                el.__vueClickOutside__ = handler
                document.addEventListener('click', handler)
            },

            unbind: function(el) {
                document.removeEventListener('click', el.__vueClickOutside__)
                el.__vueClickOutside__ = null

            }
        }
    },
    components: {
        VxAutoSuggest,
        VuePerfectScrollbar,
        draggable,
        StarRating
    },
}
</script>
