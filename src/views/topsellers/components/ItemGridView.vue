<!-- =========================================================================================
	File Name: ItemGridView.vue
	Description: Item Component - Grid VIew
	----------------------------------------------------------------------------------------
	Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <!-- <div class="item-grid-view vx-row match-height">
        <div class="vx-col" :class="gridColumnWidth" v-for="item in items" :key="item.objectID"> -->
            <vx-card class="overflow-hidden grid-view-item mb-base">
                <template slot="no-body">

                    <!-- ITEM IMAGE -->
                    <div v-if="item.profile_image" class="flex items-center justify-center h-64 mb-4 bg-white item-img-container">
                        <img :src="item.profile_image"  :alt="item.first_name" class="px-4 grid-view-img">
                    </div>
                    <div v-else class="flex items-center justify-center h-64 mb-4 bg-white item-img-container">
                        <img :src="cover_img"  :alt="item.name" class="px-4 grid-view-img">
                    </div>

                    <div class="px-4 item-details">

                        <!-- RATING & PRICE -->
                        <div class="flex items-center justify-between">
                            <div class="flex px-2 py-1 text-white rounded bg-primary">
                                <span class="mr-2 text-sm">4</span>
                                <feather-icon icon="StarIcon" svgClasses="h-4 w-4" />
                            </div>

                        </div>

                        <!-- TITLE & DESCRIPTION -->
                        <div class="my-4">
                            <h6 class="mb-1 font-semibold truncate">{{ `${item.first_name + ' ' + item.last_name}` }}</h6>
                            <p class="text-sm truncate item-description">{{ item.email }}</p>
                        </div>
                    </div>

                    <!-- SLOT: ACTION BUTTONS -->
                    <slot name="action-buttons" />
                </template>
            </vx-card>
       <!--  </div>
    </div> -->
</template>

<script>
export default{
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    data () {
      return {
        cover_img: require("@/assets/images/timeline.jpg"),
      }
    }
}
</script>

<style lang="scss" scoped>
.grid-view-item {
    .grid-view-img {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        transition: .35s;
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 4px 25px 0px rgba(0,0,0,.25);

        .grid-view-img{
            opacity: 0.9;
        }
    }
}
</style>
