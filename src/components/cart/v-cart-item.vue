<template>
  <div class="cart-item">
    <div class="cart-item-list">
      <h3>{{ cart_item_data.title }}</h3>
      <img :src="cart_item_data.image_preview" alt="img">
      <div>
        <span>Цена: </span>
        {{ cart_item_data.price }} р.</div>
      <div class="quantity">
        <span>Количество: </span>
        <span>
          <button class="amount-button" @click="decrementItem">-</button>
          {{ cart_item_data.quantity }}
          <button class="amount-button" @click="incrementItem">+</button>
        </span>
      </div>
      <button
        @click="deleteFromCart"
        class="add-to-cart-btn btn">
        Удалить из корзины
      </button>
    </div>
  </div>
</template>

<script>

  export default {
    name: "CartItem",
    components: {},
    props: {
      cart_item_data: {
        type: Object,
        default() {
          return {}
        }
      },
    },
    methods: {
      deleteFromCart() {
        this.$emit('deleteFromCart')
      },

      decrementItem() {
        this.$emit('decrement')
      },

      incrementItem() {
        this.$emit('increment')
      },
    },
    mounted() {

    }
  }
</script>

<style scoped lang="scss">
  .cart-item {
    max-width: 300px;
    height: 450px;
    border: 1px solid #aeaeae;
    padding: 7px;
    box-shadow: 0 0 7px 1px;
    position: relative;

    .cart-item-list {
      text-align: center;
      
      .quantity {

        .amount-button {
          border: 1px solid#aeaeae;
          background: transparent;
          cursor: pointer;
        }
      }
    }
  }
</style>