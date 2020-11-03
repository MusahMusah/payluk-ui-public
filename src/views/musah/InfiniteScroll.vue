<template>
  <div>
      <div v-for="item in items" :key="item.id">
          <slot name="item" v-bind:item="item" />
      </div>
      <div v-if="items.length" v-observe-visibility="handleScrolledToBottom"></div>
  </div>
</template>

<script>
export default {
    props: {
        items: {
            required: true,
            type: Array
        }
    },

    data() {
        return {
            page: 1
        }
    },
    methods: {
        handleScrolledToBottom (isVisible){
            if(!isVisible) {return}

            this.page ++
            this.$emit('refetch', this.page)
        }
    }
}
</script>

<style>

</style>