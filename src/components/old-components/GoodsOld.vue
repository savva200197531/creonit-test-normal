<template>
  <div class="data">
    <template v-if="shiny">
      <div class="data-shiny"
           v-for="shiny in shiny.data.items"
           :key="shiny.id">
        <p>{{ shiny.title }}</p>
        <img :src="shiny.image_preview" alt="" class="cart-image">
        <p>{{ shiny.price }}</p>
        <button>Добавить в корзину</button>
      </div>
    </template>
    <template v-if="diski">
      <div class="data-diski"
           v-for="diski in diski.data.items"
           :key="diski.id">
        <p>{{ diski.title }}</p>
        <img :src="diski.image_preview" alt="">
        <p>{{ diski.price }}</p>
        <button>Добавить в корзину</button>
      </div>
    </template>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'GoodsOld',
    data() {
      return {
        shiny: null,
        diski: null,
      }
    },
    props: {},
    methods: {
      clickMe() {
        // console.log(this.info.data.items)
        this.info.data.items.forEach(key => {
          console.log(key)
        })

      }
    },
    mounted() {
      axios.get('http://vue-tests.dev.creonit.ru/api/catalog/shiny').then(response => (this.shiny = response))
      axios.get('http://vue-tests.dev.creonit.ru/api/catalog/diski').then(response => this.diski = response)
    }
  }
</script>


<style scoped lang="scss">
  .data {
    font-family: Intro-regular, sans-serif;

    display: flex;
    align-items: baseline;
    flex-wrap: wrap;

    .data-shiny {

      img {
        width: 300px;
      }
    }

    .data-diski {

    }
  }
</style>
