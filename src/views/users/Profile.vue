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
        <div class="cover-container rounded-t-lg">
          <img
            v-if="userData_info.small_image"
            key="onlineImage"
            v-bind:src="userData_info.small_image"
            alt="user-profile-cover"
            style="object-fit: cover; height: 383px"
            class="responsive block"
          />
          <img
            v-else
            key="onlineImage1"
            :src="user_info.cover_img"
            alt="user-profile-cover"
            style="object-fit: cover; height: 383px"
            class="responsive block"
          />
        </div>
        <div class="profile-img-container pointer-events-none">
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
          <div class="profile-actions pointer-events-auto flex">
            <!-- <vs-button icon-pack="feather" radius icon="icon-edit-2"></vs-button> -->
            <vs-button
              type="button"
              name="button"
              to="/profile-view"
              class="vs-component vs-button mr-4 vs-button-primary vs-button-filled includeIcon"
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
              <span class="vs-button-text vs-button--text">View Profile</span>
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
        class="flex items-center justify-end flex-wrap profile-header-nav p-6"
      >
        <div class="block sm:hidden">
          <feather-icon
            @click="isNavOpen = !isNavOpen"
            icon="AlignJustifyIcon"
            v-show="!isNavOpen"
            class="vx-navbar-toggler cursor-pointer"
          />
          <feather-icon
            icon="XIcon"
            v-show="isNavOpen"
            @click="isNavOpen = !isNavOpen"
            class="vx-navbar-toggler cursor-pointer"
          />
        </div>
        <!-- <div :class="isNavOpen ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
                    <div class="text-sm sm:flex-grow">
                        <ul class="sm:flex justify-around mt-8 w-full md:mt-0 md:ml-auto md:w-3/4">
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
                <div class="post-header flex justify-between mb-4">
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
      <div class="vx-col w-full lg:w-1/4">
        <!-- ABOUT CARD -->
        <vx-card title="About" class="mt-base">
          <!-- ACTION SLOT popupActivo=true -->
          <template slot="actions">
            <vs-button icon-pack="feather" @click="pop" radis icon="icon-edit-2"
              >Edit</vs-button
            >
          </template>

          <!-- USER BIO -->
          <div class="user-bio">
            <p v-if="userData_info.about !== 'null'">
              {{ userData_info.about }}
            </p>
          </div>

          <!-- OTEHR DATA -->
          <div class="mt-5">
            <h6>Default Currency:</h6>
            <p>{{userData_info.currency}}</p>
          </div>
          <div class="mt-5">
            <h6>Joined:</h6>
            <p>{{userData_info.created_at.date}}</p>
          </div>
          <div class="mt-5">
            <h6>Email:</h6>
            <p>{{ userData_info.email }}</p>
          </div>
        </vx-card>
        <div class="centerx">
          <vs-popup
            class="holamundo"
            title="Update Short Description About Yourself"
            :style="visibility"
            :active.sync="popupActivo"
          >
            <p>
              <span class="text-danger text-sm">{{
                errors.first("about")
              }}</span>
              <vs-textarea
                counter="200"
                v-validate="'required|max:50'"
                data-vv-validate-on="blur"
                label="Character Limit: 200"
                name="about"
                label-placeholder="About Your Self"
                placeholder="About Your Self"
                :counter-danger.sync="counterDanger"
                v-model="textarea"
              />
            </p>
            <vs-button
              color="primary"
              :disabled="!validateForm"
              icon-pack="feather"
              class="mt-4"
              icon="icon-edit-2"
              @click="update_aboutInfo"
              >Update</vs-button
            >
          </vs-popup>
        </div>
        <vx-card title="TOP SELLERS" class="mt-base">
          <template slot="actions">
            <feather-icon icon="MoreHorizontalIcon"></feather-icon>
          </template>

          <ul class="friend-suggesions-list">
            <li
              class="friend-suggestion flex items-center mb-4"
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
      <div class="vx-col w-full lg:w-1/2" v-if="allReviews != null">

        <vx-card class="mt-base" v-for="(userReview, index) in allReviews" :key="index">
          <div>
            <!-- POST HEADER -->
            <div class="post-header flex justify-between mb-4">
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
          </div>
        </vx-card>
        <!-- v-if="allReviews" -->
        <div v-if="userReviews != null" v-observe-visibility="handleScrolledToBottom"></div>
      </div>
      <div class="vx-col w-full lg:w-1/2" v-else >
        <vx-card class="mt-base">
          <div>
            <!-- POST HEADER -->
            <div class="post-header flex justify-between mb-4">
              <div class="flex items-center"></div>
              <div class="flex">
                <!-- CUSTOM SHAPE -->
              </div>
            </div>

            <!-- POST CONTENT -->
            <div class="post-content h-10 p-5 m-5">
              <p>No Reviews Yet</p>
            </div>
            <!-- {{userReviews}} -->
          </div>
        </vx-card>
      </div>

      <!-- COL 3 -->
      <div class="vx-col w-full lg:w-1/4">
        <vx-card title="QR CODE" class="mt-base">
          <img :src="userData_info.qr" />
          <div class="mt-5">
            <h6>WALLET ID:</h6>
            <template>
              <vs-input
                v-model="wallet_id"
                disabled
                class="inine-flex mt-3 w-full"
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
    <!-- 
        <div class="vx-row">
            <div class="vx-col w-full">
                <div class="flex justify-center mt-base">
                    <vs-button id="button-load-more-posts" class="vs-con-loading__container" @click="loadContent">Load More</vs-button>
                </div>
            </div>
    </div>-->
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
      top_sellers: "users/getTopSellers",
    }),
    validateForm() {
      return !this.errors.any() && this.textarea != "";
    },
    userData_info() {
      return this.userData;
    },
    wallet_id() {
      return this.userData_info.wallet_id;
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
      updateAboutInfo: "users/updateAboutInfo",
      topSellers: "users/topSellers",
      sendInvite: "users/sendInvite",
    }),
    async fetch1(page){
      if (page > this.lastPage) {  return  }
      let reviews = await axios.get(`http://localhost/pay4me/pay4me-clients-side-api/account?page=${page}`)
      console.log(reviews.data.data.reviews.review)
      this.allReviews.push(...reviews.data.data.reviews)
      this.lastPage = reviews.data.data.reviews.pager.meta.last_page
      // console.log(this.lastPage)
    },
    async fetch(){
      let reviews = await axios.get(`http://localhost/pay4me/pay4me-clients-side-api/reviews?page=${this.page}`)
      console.log(reviews.data.reviews)
      if (reviews.data.reviews != null) 
      {
      
        this.allReviews.push(...reviews.data.reviews)
        this.lastPage = reviews.data.pagers[0].meta.last_page
        // console.log(this.lastPage)
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
    // handleScrolledToBottom() {
    //   console.log("test")
    // },
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
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger",
            });
          } else if (response.data.errorcode == 712) {
            // Cant send your self request
            this.$vs.notify({
              title: "Info",
              text: response.data.message,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "success",
            });
          } else if (response.data.errorcode == 704) {
            // Seller Account Not Approved
            this.$vs.notify({
              title: "Info",
              text: response.data.message,
              iconPack: "feather",
              icon: "icon-alert-circle",
              color: "danger",
            });
          } else {
            // Request Successfully Sent
            this.$vs.notify({
              title: "Success",
              text: response.data.message,
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
            iconPack: "feather",
            icon: "icon-alert-circle",
            color: "success",
          });
          this.userData_info.about = this.textarea;
          this.visibility = "display:none";
        })
        .catch((error) => {
          console.log(error);
          this.$vs.loading.close();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
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
  created() {
    this.activeUserInfo();
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
    this.fetch()
  },
  beforeDestroy() {
    if (!this.wasSidebarOpen) this.$store.commit("TOGGLE_REDUCE_BUTTON", false);
  },
};
</script>


<style lang="scss">
@import "@/assets/scss/vuexy/pages/profile.scss";
</style>
