<template>
  <section class="banner">
    <div class="wrapper">
      <div class="slider" :style="{ 'marginLeft': '-' + (100 * currentSlideIndex) + '%' }">
        <SliderItem
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
        >
          <div class="banner-slider">
            <div class="banner-slider-content">
              <a href="#" @click.prevent>{{ item.event }}</a>
              <p>{{ item.content }}</p>
              <button class="prev" @click="prevSlide"><img src="../../assets/img/arrow-left.png" alt="arrow"></button>
              <button class="next" @click="nextSlide"><img src="../../assets/img/arrow-right.png" alt="arrow"></button>
            </div>
          </div>
        </SliderItem>
      </div>
    </div>
  </section>
</template>

<script>
  import SliderItem from "./v-section-slider-item";

  export default {

    name: 'Slider',
    components: {
      SliderItem
    },
    props: {
      carousel_data: {
        type: Array,
        default: () => []
      },
      interval: {
        type: Number,
        default: 0,
      }
    },

    data() {
      return {
        currentSlideIndex: 0,
      }
    },

    methods: {
      prevSlide() {
        if (this.currentSlideIndex <= 0) {
          this.currentSlideIndex = this.carousel_data.length - 1
        } else {
          this.currentSlideIndex--
        }
      },

      nextSlide() {
        if (this.currentSlideIndex >= this.carousel_data.length - 1) {
          this.currentSlideIndex = 0
        } else {
          this.currentSlideIndex++
        }
      }
    },

    mounted() {
      if (this.interval > 0) {
        let vm = this;
        setInterval(() => {
          vm.nextSlide();
        }, vm.interval)
      }
    },

    computed: {},


  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .banner {
    height: 400px;

    .wrapper {
      margin-left: -80px;
      overflow: hidden;
    }

    .slider {
      display: flex;
      transition: all ease .2s;

    }

    .banner-slider {
      height: 227px;
      width: 396px;
      position: relative;
      right: 20px;
      opacity: 0.93;
      background: #e13e65;
      display: inline-block;
      bottom: 313px;

      .banner-slider-content {
        position: absolute;
        /*margin-left: 40px;*/
        /*margin-top: 30px;*/
        align-content: center;
        padding: 25px 40px 10px 38px;
        vertical-align: center;

        a {
          font-family: 'Intro-regular-alt', sans-serif;
          font-size: 34px;
          color: #ffffff;
          white-space: nowrap;
        }

        p {
          font-family: Open-sans, sans-serif;
          font-size: 14px;
          color: #ffffff;
          margin-top: 20px;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          margin-top: 50px;
        }

        .prev {
          padding: 10px;
        }

        .next {
          padding: 10px;
          margin-left: 5px;
        }
      }
    }
  }
</style>
