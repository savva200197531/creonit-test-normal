<template>
  <div class="goods">
    <router-link :to="{name: 'cart', params: { cart_data: CART }}">
      <div class="goods-link-to-cart">
        Cart: {{ CART.length }}
      </div>
    </router-link>
    <router-link :to="{name: 'maximaLandingMain'}">
      <div class="cart-link-to-maxima">Перейти к основному сайту</div>
    </router-link>
    <v-select
      :selected="selected"
      :options="categories"
      @select="sortByCategories"
    />
    <h1>Goods list</h1>
    <div class="goods-list">
      <GoodsItem
        v-for="product in this.filterProducts"
        :key="product.id"
        :product_data="product"
        @addToCart="addToCart">
      </GoodsItem>
    </div>
  </div>
</template>

<script>
  import GoodsItem from "./v-goods-item";
  import { mapActions, mapGetters } from 'vuex';
  import vSelect from '../v-select';

  export default {
    name: "Goods",
    components: {
      GoodsItem,
      vSelect,
    },
    props: {},
    data() {
      return {
        productArray: [],
        selected: 'Все',
        categories: [
          { title: 'Все', slug: 'all' },
          { title: 'Шины', slug: 'shiny' },
          { title: 'Диски', slug: 'diski' }
        ],
        sortedProducts: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
      filterProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      }
    },
    methods: {
      ...mapActions([
        'GET_DATA_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      },
      sortByCategories(category) {
        this.sortedProducts = [];
        let vm = this;
        this.PRODUCTS.map((item) => {
          if (item.category.slug === category.slug) {
            vm.sortedProducts.push(item);
          }
        })
        this.selected = category.title
      },
    },
    mounted() {
      this.GET_DATA_FROM_API();
    }
  }
</script>

<style scoped lang="scss">
  .goods {
    font-family: Intro-regular, sans-serif;
    position: relative;
    padding-top: 70px;
    
    h1 {
      text-align: center;
      margin-bottom: 50px;
    }
    
    .goods-link-to-cart {
      font-family: Intro-light, sans-serif;
      right: 10px;
      position: absolute;
      top: 10px;
      padding: 16px;
      border: 1px solid #aeaeae;
    }
    
    .cart-link-to-maxima {
      font-family: Intro-light, sans-serif;
      left: 10px;
      position: absolute;
      top: 10px;
      padding: 16px;
      border: 1px solid #aeaeae;
    }
    
    .goods-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      height: 100vh;
    }
  }
</style>