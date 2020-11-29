<!-- =========================================================================================
  File Name: ECommerceShop.vue
  Description: eCommerce Shop Page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div>
        <ais-instant-search
            :search-client="searchClient"
            index-name="instant_search" id="algolia-instant-search-demo">

            <!-- AIS CONFIG -->
            <ais-configure :hits-per-page.camel="9" />

            <div class="mb-4 algolia-header">
                <div class="flex flex-wrap items-center justify-between md:items-end">
                    <!-- TOGGLE SIDEBAR BUTTON -->
                    <feather-icon
                        class="inline-flex mr-4 cursor-pointer lg:hidden"
                        icon="MenuIcon"
                        @click.stop="toggleFilterSidebar" />

                    <p class="hidden font-semibold lg:inline-flex algolia-filters-label"></p>

                    <div class="flex items-end justify-between flex-grow">
                        <!-- Stats -->
                        <ais-stats>
                            <p slot-scope="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }" class="hidden font-semibold text-center md:block">
                                {{ resultQuery.length }} results found in {{ processingTimeMS }}ms
                            </p>
                        </ais-stats>

                        <div class="flex flex-wrap">

                            <!-- SORTING -->
                            <!-- <ais-sort-by :items="[
                                { value: 'instant_search', label: 'Featured' },
                                { value: 'instant_search_price_asc', label: 'Lowest Price' },
                                { value: 'instant_search_price_desc', label: 'Highest Price' },
                            ]">
                                <vs-select
                                    :value="currentRefinement"
                                    slot-scope="{ items, currentRefinement, refine }"
                                    @input="(val) => refine(val)"
                                    class="w-48 mr-4 vs-input-shadow-drop vs-select-no-border d-theme-input-dark-bg">
                                    <vs-select-item v-for="item in items" :key="item.value" :value="item.value" :text="item.label" />
                                </vs-select>
                            </ais-sort-by> -->

                            <!-- ITEM VIEW - GRID/LIST -->
                            <!-- <div>
                                <feather-icon
                                    icon="GridIcon"
                                    @click="currentItemView='item-grid-view'"
                                    class="p-2 rounded-lg cursor-pointer shadow-drop d-theme-dark-bg"
                                    :svgClasses="{'text-primary stroke-current': currentItemView == 'item-grid-view'}" />
                                <feather-icon
                                    icon="ListIcon"
                                    @click="currentItemView='item-list-view'"
                                    class="hidden p-2 ml-4 rounded-lg cursor-pointer shadow-drop d-theme-dark-bg sm:inline-flex"
                                    :svgClasses="{'text-primary stroke-current': currentItemView == 'item-list-view'}" />
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <div id="algolia-content-container" class="relative clearfix">

                <!-- RIGHT COL -->
                <!-- <div :class="{'sidebar-spacer-with-margin': clickNotClose}"> -->
                <div>

                    <!-- SEARCH BAR -->
                    <ais-search-box>
                        <div slot-scope="{ currentRefinement, isSearchStalled, refine }">
                            <div class="relative mb-8">

                                <!-- SEARCH INPUT -->
                                <!-- <vs-input class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg" placeholder="Search here" v-model="currentRefinement" @input="refine($event)" @keyup.esc="refine('')" size="large" /> -->
                                <vs-input class="w-full vs-input-shadow-drop vs-input-no-border d-theme-input-dark-bg" placeholder="Search here" v-model="searchQuery"  @keyup.esc="refine('')" size="large" />

                                <!-- SEARCH LOADING -->
                                <p :hidden="!isSearchStalled" class="mt-4 text-grey">
                                  <feather-icon icon="ClockIcon" svgClasses="w-4 h-4" class="mr-2 align-middle" />
                                  <span>Loading...</span>
                                </p>

                                <!-- SEARCH ICON -->
                                <div slot="submit-icon" class="absolute top-0 right-0 px-6 py-4" v-show="!currentRefinement">
                                    <feather-icon icon="SearchIcon" svgClasses="h-6 w-6" />
                                </div>

                                <!-- CLEAR INPUT ICON -->
                                <div slot="reset-icon" class="absolute top-0 right-0 px-6 py-4" v-show="currentRefinement">
                                    <feather-icon icon="XIcon" svgClasses="h-6 w-6 cursor-pointer" @click="refine('')" />
                                </div>
                            </div>
                        </div>
                    </ais-search-box>

                    <!-- SEARCH RESULT -->
                    <ais-hits>
                        <div slot-scope="{ items }">

                            <!-- GRID VIEW -->
                            <template>
                                <div class="items-grid-view vx-row match-height">
                                      <!-- <h2>{{allUsers}}</h2> -->
                                    <div class="w-full vx-col lg:w-1/3 sm:w-1/2" v-for="(item, index) in resultQuery" :key="index">
                                        <item-grid-view :item="item">

                                            <!-- SLOT: ACTION BUTTONS -->
                                            <template slot="action-buttons">
                                                <div class="flex flex-wrap">

                                                    <!-- PRIMARY BUTTON: ADD TO WISH LIST -->
                                                    <!-- SECONDARY BUTTON: ADD-TO/VIEW-IN CART -->
                                                    <div
                                                        class="flex items-center justify-center flex-grow p-3 text-white cursor-pointer item-view-secondary-action-btn bg-primary"
                                                       >
                                                        <!-- <feather-icon icon="ShoppingBagIcon" svgClasses="h-4 w-4" /> -->
                                                        <vs-button :to="{  name: 'user-public-profile', params: { wallet_id: item.wallet }}"  class="ml-2 text-sm font-semibold" size="small">
                                                          VIEW PROFILE
                                                        </vs-button>
                                                    </div>
                                                </div>
                                            </template>
                                        </item-grid-view>
                                    </div>
                                    <vx-card  title="User Not Found"
                                    title-color="#fff"
                                    card-background="primary"
                                    content-color="#fff"
                                    class="m-3 w-12/12" v-if="resultQuery.length < 1">

                                        No Result was Found For {{searchQuery}}

                                    </vx-card>
                                </div>
                            </template>

                            <!-- LIST VIEW -->

                        </div>
                    </ais-hits>

                    <!-- PAGINATION -->
                    <!-- <ais-pagination>
                        <div slot-scope="{
                                currentRefinement,
                                nbPages,
                                pages,
                                isFirstPage,
                                isLastPage,
                                refine,
                                createURL
                            }"
                        >

                        <vs-pagination

                            :total="nbPages"
                            :max="7"
                            :value="currentRefinement + 1"
                            @input="(val) => { refine(val - 1) }" />
                        </div>
                    </ais-pagination> -->

                    <!-- ALGOLIA LOGO -->
                    <!-- <img class="flex h-8 mx-auto mt-4" src="@/assets/images/pages/eCommerce/Algolia-logo.png" alt="algolia-logo"> -->
                </div>
            </div>
        </ais-instant-search>
    </div>
</template>

<script>
import {
  AisClearRefinements,
  AisConfigure,
  AisHierarchicalMenu,
  AisHits,
  AisInstantSearch,
  AisNumericMenu,
  AisPagination,
  AisRangeInput,
  AisRatingMenu,
  AisRefinementList,
  AisSearchBox,
  AisSortBy,
  AisStats
} from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    ItemGridView: () => import("./components/ItemGridView.vue"),
    ItemListView: () => import("./components/ItemListView.vue"),
    AisClearRefinements,
    AisConfigure,
    AisHierarchicalMenu,
    AisHits,
    AisInstantSearch,
    AisNumericMenu,
    AisPagination,
    AisRangeInput,
    AisRatingMenu,
    AisRefinementList,
    AisSearchBox,
    AisSortBy,
    AisStats
  },
  data() {
    return {
      searchQuery: null,
      resources:[
          {title:"ABE Attendance",uri:"aaaa.com",category:"a",icon:null},
          {title:"Accounting Services",uri:"aaaa.com",category:"a",icon:null},
          {title:"Administration",uri:"aaaa.com",category:"a",icon:null},
          {title:"Advanced Student Lookup",uri:"bbbb.com",category:"b",icon:null},
          {title:"Art & Sciences",uri:"bbbb.com",category:"b",icon:null},
          {title:"Auxiliares Services",uri:"bbbb.com",category:"b",icon:null},
          {title:"Basic Skills",uri:"cccc.com",category:"c",icon:null},
          {title:"Board of Trustees",uri:"dddd.com",category:"d",icon:null}
      ],

      searchClient: algoliasearch(
        'latency',
        '6be0576ff61c053d5f9a3225e2a90f76'
      ),
      // Filter Sidebar
      isFilterSidebarActive: true,
      clickNotClose: true,
      currentItemView: 'item-grid-view',
      numericItems: [
        { label: 'All' },
        { label: '<= $10', end: 10 },
        { label: '$10 - $100', start: 10, end: 100 },
        { label: '$100 - $500', start: 100, end: 500 },
        { label: '>= $500', start: 500 },
      ],
      algoliaCategories: [
        'hierarchicalCategories.lvl0',
        'hierarchicalCategories.lvl1',
        'hierarchicalCategories.lvl2',
        'hierarchicalCategories.lvl3',
      ]
    }
  },
  computed: {
    ...mapGetters({
      getAllUsers: "users/getAllUsers",
    }),
    allUsers () {
      return this.getAllUsers
    },
    resultQuery(){
      if(this.searchQuery){
      // return this.allUsers.filter((item)=>{
      //   return this.searchQuery.toLowerCase().split(' ').every(v => item.first_name.toLowerCase().includes(v)
      //   || item.last_name.toLowerCase().includes(v)
      //   || item.email.toLowerCase().includes(v) || item.wallet.toLowerCase().includes(v)
      //   )
      // })
      let result =  this.allUsers.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.first_name.toLowerCase().includes(v)
        || item.last_name.toLowerCase().includes(v)
        || item.email.toLowerCase().includes(v) || item.wallet.toLowerCase().includes(v)
        )
      })
      if (result.length > 0) {
        return result
      }else {
        // alert("No resut")
        return []
      }
      }else{
        return this.allUsers;
      }
    },

    toValue() {
      return (value, range) => [
        value.min !== null ? value.min : range.min,
        value.max !== null ? value.max : range.max,
      ]
    },

    // GRID VIEW
    isInCart() {
      return true
      // return (itemId) => this.$store.getters['eCommerce/isInCart'](itemId)
    },
    isInWishList() {
      return true
      // return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    },
    windowWidth() { return this.$store.state.windowWidth }
  },
  watch: {
    windowWidth() {
      this.setSidebarWidth()
    }
  },
  methods: {
    ...mapActions({
      searchDB : "users/searchUserData",
    }),
    setSidebarWidth() {
      if (this.windowWidth < 992) {
        this.isFilterSidebarActive = this.clickNotClose = false
      } else {
        this.isFilterSidebarActive = this.clickNotClose = true
      }
    },

    // GRID VIEW - ACTIONS
    toggleFilterSidebar() {
      if (this.clickNotClose) return
      this.isFilterSidebarActive = !this.isFilterSidebarActive
    },
    toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item)
    },
    additemInCart(item) {
      this.$store.dispatch('eCommerce/additemInCart', item)
    },
    cartButtonClicked(item) {
      this.isInCart(item.objectID) ? this.$router.push('/apps/eCommerce/checkout').catch(() => {}) : this.additemInCart(item)
    }
  },
  created() {
    this.setSidebarWidth()
  }
}

</script>


<style lang="scss">
#algolia-instant-search-demo {
  .algolia-header {
    .algolia-filters-label {
      width: calc(260px + 2.4rem);
    }
  }

  #algolia-content-container {

    .vs-sidebar {
      position: relative;
      float: left;
    }
  }

  .algolia-search-input-right-aligned-icon {
    padding: 1rem 1.5rem;
  }

  .algolia-price-slider {
    min-width: unset;
  }

  .item-view-primary-action-btn {
    color: #2c2c2c !important;
    background-color: #f6f6f6;
    min-width: 50%;
  }

  .item-view-secondary-action-btn {
    min-width: 50%;
  }
}

.theme-dark {
  #algolia-instant-search-demo {
    #algolia-content-container {
      .vs-sidebar {
        background-color: #10163a;
      }
    }
  }
}

@media (min-width: 992px) {
  .vs-sidebar-rounded {
    .vs-sidebar {
      border-radius: .5rem;
    }

    .vs-sidebar--items {
      border-radius: .5rem;
    }
  }
}

@media (max-width: 992px) {
  #algolia-content-container {
    .vs-sidebar {
      position: absolute !important;
      float: none !important;
    }
  }
}

</style>

