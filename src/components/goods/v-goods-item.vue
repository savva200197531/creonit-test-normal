<template>
  <div class="goods-item">
    <div class="goods-item-list">
      <h3>{{ product_data.title }}</h3>
      <img :src="product_data.image_preview" alt="img">
      <p>Цена: {{ product_data.price }} р.</p>
      <button
        class="add-to-cart-btn btn"
        @click="addToCart">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsItem",
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      addToCart() {
        this.$emit('addToCart', this.product_data);
      },
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
  }
</script>

<style scoped lang="scss">
  .goods-item {
    max-width: 300px;
    height: 450px;
    border: 1px solid #aeaeae;
    padding: 7px;
    box-shadow: 0 0 7px 1px;
    position: relative;

    .goods-item-list {
      text-align: center;

      h3 {

      }
    }
  }
</style>