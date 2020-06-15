<template>
  <div class="sliderItem">
    <img :src=" require('../../assets/img/' + item_data.img) " alt="">
      <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'SliderItem',
    props: {
      item_data: {
        type: Object,
        default: () => {
        }
      },

      imageSlide: {
        type: Boolean,
        default: true,
      }
    },

    data() {
      return {}
    },

    computed: {},
  }
</script>

<style scoped lang="scss">
  .sliderItem {
    margin-left: 80px;
    width: 100vw;
  }
</style>
