<!-- =========================================================================================
  File Name: Profile.vue
  Description: Profile Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="profile-page">
    <!-- PROFILE HEADER -->
    <div class="profile-header">
      <div class="relative">
        <div class="rounded-t-lg cover-container">
          <img
            v-if="userData_info.small_image"
            key="onlineImage"
            v-bind:src="userData_info.small_image"
            alt="user-profile-cover"
            style="object-fit: cover; height: 383px"
            class="block responsive"
          />
          <img
            v-else
            key="onlineImage1"
            :src="user_info.cover_img"
            alt="user-profile-cover"
            style="object-fit: cover; height: 383px"
            class="block responsive"
          />
        </div>
        <div class="pointer-events-none profile-img-container">
          <div>
            <vs-avatar
              v-if="userData_info.small_image"
              class="user-profile-img"
              :src="userData_info.small_image"
              size="85px"
            />
            <vs-avatar
              class="user-profile-img"
              v-else
              :src="user_info.profile_img"
              size="85px"
            />
          </div>
          <div class="flex pointer-events-auto profile-actions">
            <!-- <vs-button icon-pack="feather" radius icon="icon-edit-2"></vs-button> -->
            <vs-button
              type="button"
              name="button"
              size="small"
              to="/profile-view"
              class="p-3 mr-4 vs-component vs-button vs-button-primary vs-button-filled includeIcon"
            >
              <span
                class="vs-button-backgroundx vs-button--background"
                style="
                  opacity: 1;
                  left: 20px;
                  top: 20px;
                  width: 0px;
                  height: 0px;
                  transition: width 0.3s ease 0s, height 0.3s ease 0s,
                    opacity 0.3s ease 0s;
                "
              ></span>
              <i
                class="vs-icon notranslate icon-scale feather icon-edit null"
                style="order: 0; margin-right: 5px; margin-left: 0px"
              ></i>
              <span class="vs-button-text vs-button--text" style="font-size: 1.2em;">View Profile</span>
              <span
                class="vs-button-linex"
                style="
                  top: auto;
                  bottom: -2px;
                  left: 50%;
                  transform: translate(-50%);
                "
              ></span>
            </vs-button>
            <!-- <vs-button icon-pack="feather" radius icon="icon-settings" class="ml-2 lg:ml-4"></vs-button> -->
          </div>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center justify-end p-6 profile-header-nav"
      >
        <div class="block sm:hidden">
          <feather-icon
            @click="isNavOpen = !isNavOpen"
            icon="AlignJustifyIcon"
            v-show="!isNavOpen"
            class="cursor-pointer vx-navbar-toggler"
          />
          <feather-icon
            icon="XIcon"
            v-show="isNavOpen"
            @click="isNavOpen = !isNavOpen"
            class="cursor-pointer vx-navbar-toggler"
          />
        </div>
        <!-- <div :class="isNavOpen ? 'block': 'hidden'" class="flex-grow w-full sm:flex sm:items-center sm:w-auto">
                    <div class="text-sm sm:flex-grow">
                        <ul class="justify-around w-full mt-8 sm:flex md:mt-0 md:ml-auto md:w-3/4">
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Timeline</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">About</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Photos</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Friends</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Videos</router-link></li>
                            <li class="p-2 sm:p-0"><router-link to="/pages/profile">Events</router-link></li>
                        </ul>
                    </div>
        </div>-->
      </div>
      <!-- <vx-navbar> -->
      <!-- </vx-navbar> -->
    </div>

        <!-- <InfiniteScroll :items="allReviews" @refresh="fetch">
          <template v-slot:item="{ item }">
            <vx-card
              class="mt-base"
            >
              <div>
                <div class="flex justify-between mb-4 post-header">
                  <div class="flex items-center">
                    <div>
                      <vs-avatar
                        v-if="userReview.client_profile"
                        :src="userReview.client_profile"
                        class="m-0"
                        size="45px"
                      ></vs-avatar>
                      <vs-avatar v-else class="m-0" size="45px"></vs-avatar>
                    </div>
                    <div class="ml-4">
            {{item.date}}
                      <h6>{{ userReview.clients_name }}</h6>
                      <small>{{ userReview.date }}</small>
                    </div>
                  </div>
                  <div class="flex">
                    <star-rating
                      :star-size="20"
                      :read-only="true"
                      :rating="parseFloat(userReview.star)"
                      :border-width="1"
                      border-color="#d8d8d8"
                      :rounded-corners="true"
                      :star-points="[
                        23,
                        2,
                        14,
                        17,
                        0,
                        19,
                        10,
                        34,
                        7,
                        50,
                        23,
                        43,
                        38,
                        50,
                        36,
                        34,
                        46,
                        19,
                        31,
                        17,
                      ]"
                    ></star-rating>
                  </div>
                </div>
                <div class="post-content">
                  <p>{{ userReview.message }}</p>
                </div>
              </div>
            </vx-card>
          </template>
        </InfiniteScroll> -->
    <!-- COL AREA -->
    <div class="vx-row">
      <!-- COL 1 -->
      <div class="w-full vx-col lg:w-1/4">
        <!-- ABOUT CARD -->
        <vx-card title="About" class="mt-base">
          <!-- ACTION SLOT popupActivo=true -->

          <!-- USER BIO -->
          <div class="user-bio">
            <p v-if="userData_info.about !== 'null'">{{userData_info.about}}</p>
          </div>

          <!-- OTEHR DATA -->
          <div class="mt-5">
            <h6>Full Name:</h6>
            <p>{{fullname}}</p>
          </div>
          <div class="mt-5">
            <h6>Joined:</h6>
            <p>November 15, 2015</p>
          </div>
          <div class="mt-5">
            <h6>Email:</h6>
            <p>{{userData_info.email}}</p>
          </div>
        </vx-card>
        <vx-card title="TOP SELLERS" class="mt-base">
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
                <!-- <vs-avatar size="15px" icon="star" color="warning" style="background-color: yellow;"/>  -->
                <span class="text-xs" style="text-transform: uppercase">{{
                  top_seller.ranking
                }}</span>
              </div>
              <div class="ml-auto cursor-pointer">
                <vs-button
                  type="border"
                  icon="send"
                  :disabled="false"
                  @click="send_invite(top_seller.wallet_id)"
                  >Invite</vs-button
                >
              </div>
            </li>
          </ul>
          <template slot="footer">
            <vs-button icon-pack="feather" icon="icon-plus" class="w-full"
              >Load More</vs-button
            >
          </template>
        </vx-card>
      </div>
      <!-- {{allReviews}} -->
      <!-- COL 2 -->
      <div class="w-full vx-col lg:w-1/2" v-if="allReviews != null">

        <vx-card title="All Reviews" class="mt-base">
          <div  v-for="(userReview, index) in allReviews" :key="index" class="mb-10">
            <!-- POST HEADER -->
            <div class="flex justify-between mb-4 post-header">
              <div class="flex items-center">
                <div>
                  <vs-avatar
                    v-if="userReview.profile_image"
                    :src="userReview.profile_image"
                    class="m-0"
                    size="45px"
                  ></vs-avatar>
                  <vs-avatar v-else class="m-0" size="45px"></vs-avatar>
                </div>
                <div class="ml-4">
                  <h6>{{userReview.clients_name}}</h6>
                  <small>{{userReview.date}}</small>
                </div>
              </div>
              <div class="flex">
                <!-- CUSTOM SHAPE -->
                <!-- <h6 class="mt-4">Custom Star Shape</h6> -->
                <star-rating
                  :star-size="20"
                  :read-only="true"
                  :rating="parseFloat(userReview.star)"
                  :border-width="1"
                  border-color="#d8d8d8"
                  :rounded-corners="true"
                  :star-points="
                                [23,2, 14,17, 0,19,
                                 10,34, 7,50,
                                 23,43, 38,50, 36,34,
                                  46,19, 31,17]"
                ></star-rating>
                <!-- <feather-icon class="ml-4" icon="HeartIcon" :svgClasses="{'text-danger fill-current stroke-current': post.isLiked}"></feather-icon> -->
              </div>
            </div>

            <!-- POST CONTENT -->
            <div class="post-content">
              <p>{{userReview.message}}</p>
            </div>
           <vs-divider color="primary" class="mb-3"></vs-divider>
          </div>
        </vx-card>
        <!-- <div v-if="userReviews != null" v-observe-visibility="handleScrolledToBottom"></div> -->
      </div>
      <div class="w-full vx-col lg:w-1/2" v-else>
        <vx-card class="mt-base" title="No Reviews Available"
          title-color="#fff"
          card-background="primary"
          content-color="#fff">
          <div>
            <!-- POST HEADER -->
            <div class="flex justify-between mb-4 post-header">
              <div class="flex items-center"></div>
              <div class="flex">
                <!-- CUSTOM SHAPE -->
              </div>
            </div>

            <!-- POST CONTENT -->
            <div class="h-10 p-5 m-5 post-content">
              <p>You Do not have any reviews Yet</p>
            </div>
            <!-- {{userReviews}} -->
          </div>
        </vx-card>
      </div>

      <!-- COL 3 -->
      <div class="w-full vx-col lg:w-1/4">
        <vx-card title="QR CODE" class="mt-base">
          <img :src="userData_info.qr" />
          <div class="mt-5">
            <h6>WALLET ID:</h6>
            <template>
              <vs-input
                v-model="wallet_id"
                disabled
                class="w-full mt-3 inine-flex"
              />
              <vs-button
                color="primary"
                size="large"
                v-clipboard:copy="wallet_id"
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
                class="mt-2"
                icon="content_copy"
                style="text-align: center; width: 100%"
                >Copy Wallet ID!</vs-button
              >
            </template>
          </div>
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { videoPlayer } from "vue-video-player";
import "video.js/dist/video-js.css";
// import InfiniteScroll from '../musah/InfiniteScroll'
import StarRating from "vue-star-rating";
import { mapGetters, mapActions } from "vuex";

export default {
  props: ["wallet_id"],
  data() {
    return {
      textarea: "",
      visibility: "",
      counterDanger: false,
      popupActivo: false,
      isNavOpen: false,
      wasSidebarOpen: null,
      user_info: {
        profile_img: require("@/assets/images/noimage.svg"),
        cover_img: require("@/assets/images/timeline.jpg"),
      },
      // infinite scroll data
      allReviews: [],
      page:1,
      lastPage:1
    };
  },

  computed: {
    ...mapGetters({
      userData: "users/getUserData",
      singleUserDataProfile : "users/getSingleUserData",
      top_sellers: "users/getTopSellers",
    }),
    validateForm() {
      return !this.errors.any() && this.textarea != "";
    },
    userData_info() {
      return this.singleUserDataProfile;
    },
    fullname() {
        return `${this.userData_info.first_name + ' ' + this.userData_info.last_name}`
    },
    userReviews() {
      return this.userData_info.reviews;
    },
    mediaType() {
      return (media) => {
        if (media.img) {
          const ext = media.img.split(".").pop();
          if (this.mediaExtensions.img.includes(ext)) return "image";
        } else if (media.sources && media.poster) {
          // other validations
          return "video";
        }
      };
    },
    playerOptions() {
      return (media) => {
        return {
          height: "360",
          fluid: true,
          autoplay: false,
          muted: true,
          language: "en",
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: media.sources,
          poster: media.poster,
        };
      };
    },
  },
  methods: {
    ...mapActions({
      activeUserInfo: "users/activeUserInfo",
      topSellers: "users/topSellers",
      sendInvite: "users/sendInvite",
      singleUserdata: "users/UserPublicProfile",
    }),
    // async fetch1(page){
    //   if (page > this.lastPage) {  return  }
    //   let reviews = await axios.get(`https://payluk.com/backend/account?page=${page}`)
    //   console.log(reviews.data.data.reviews.review)
    //   this.allReviews.push(...reviews.data.data.reviews)
    //   this.lastPage = reviews.data.data.reviews.pager.meta.last_page
    //   // console.log(this.lastPage)
    // },
    async fetchfd(){
      // let reviews = await axios.get(`https://payluk.com/backend/reviews?page=${this.page}`)
      let reviews = await axios.get(`https://payluk.com/backend/clients_review?wallet_id=${this.$route.params.wallet_id}&page=${this.page}`)
      if (reviews.data.reviews != null)
      {

        this.allReviews.push(...reviews.data.reviews)
        this.lastPage = reviews.data.pagers[0].meta.last_page
      }else
      {
        this.allReviews = null
      }
    },
    handleScrolledToBottom (isVisible){
            if(!isVisible) {return}
            if (this.page >= this.lastPage) {  return  }
            this.page ++
            this.fetch()
    },
    pop() {
      this.popupActivo = true;
      this.visibility = "";
    },
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
    update_aboutInfo() {
      // Loading
      this.$vs.loading();
      this.updateAboutInfo(this.textarea)
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
          this.userData_info.about = this.textarea;
          this.visibility = "display:none";
        })
        .catch((error) => {
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
    onCopy() {
      this.$vs.notify({
        title: "Success!",
        text: "Wallet ID copied successfully.",
        color: "success",
        iconPack: "feather",
        position: "top-center",
        icon: "icon-check-circle",
      });
    },
    onError() {
      this.$vs.notify({
        title: "Failed!",
        text: "Error in copying text.",
        color: "danger",
        iconPack: "feather",
        position: "top-center",
        icon: "icon-alert-circle",
      });
    },
    loadContent() {
      this.$vs.loading({
        background: this.backgroundLoading,
        color: this.colorLoading,
        container: "#button-load-more-posts",
        scale: 0.45,
      });
      setTimeout(() => {
        this.$vs.loading.close("#button-load-more-posts > .con-vs-loading");
      }, 3000);
    },
  },
   watch: {
       '$route'() {
          this.$vs.loading();
          this.singleUserdata(this.$route.params.wallet_id)
          .then(() => {
            this.$vs.loading.close();
          })
          .catch(() => {
              this.$router.replace({name: 'page-error-404'}).catch(() => {})
          })
          // this.fetch()
          // this.handleScrolledToBottom()
        },
   },
  created() {
    this.$vs.loading();
    this.singleUserdata(this.$route.params.wallet_id)
    .then(() => {
      this.$vs.loading.close();
    })
    .catch(() => {
        this.$router.replace({name: '404'}).catch(() => {})
    })
    // this.fetch()
    // this.handleScrolledToBottom()
    // this.activeUserInfo();
    this.topSellers();
  },
  components: {
    videoPlayer,
    StarRating,
    // InfiniteScroll
  },
  mounted() {
    this.wasSidebarOpen = this.$store.state.reduceButton;
    this.$store.commit("TOGGLE_REDUCE_BUTTON", true);
    // this.fetch(1)
    // this.fetch()
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit("TOGGLE_REDUCE_BUTTON", false);
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
