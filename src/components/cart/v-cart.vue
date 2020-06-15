<template>
  <div class="cart">
    <router-link :to="{name: 'goods'}">
      <div class="cart-link-to-goods  router-link">Вернуться к товарам</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">Корзина пуста...</p>
    <div class="cart-list">
      <CartItem
        v-for="(item, index) in cart_data"
        :key="item.id"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      >
      </CartItem>
      <div class="cart-list-total">
        <p class="total-name">Сумма: </p>
        <p>{{ cartTotalCost }} р.</p>
      </div>
    </div>
  </div>
</template>

<script>
  import CartItem from "./v-cart-item";
  import { mapActions } from 'vuex'

  export default {
    name: 'Cart',
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      CartItem,
    },
    data() {
      return {}
    },
    computed: {
      cartTotalCost() {
        let result = [];

        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity);
          }

          result = result.reduce((sum, el) => {
            return sum + el
          });

          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .cart {
    font-family: Intro-regular, sans-serif;
    position: relative;
    padding-top: 70px;

    .cart-link-to-goods {
      font-family: Intro-light, sans-serif;
    }

    h1 {
      text-align: center;
      margin-bottom: 50px;
    }

    p {
      text-align: center;
      font-size: 20px;
    }

    .cart-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      height: 100vh;

      .cart-list-total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: 30px;
        display: flex;
        justify-content: center;
        background: #26ae68;
        color: #ffffff;
        font-size: 25px;

        .total-name {
          margin-right: 10px;
        }
      }
    }
  }
</style>
