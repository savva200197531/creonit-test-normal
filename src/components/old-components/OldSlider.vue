<template>
  <div id="app">
    <div class='slider js-slider'>
      <div class="slider__body" v-bind:style='{left: sliderOffsetLeft + "px"}'>
        <div
          class="slider__slide js-slide"
          v-for='slide in sliderList'
          :key="slide"
          v-bind:style='"background-image: url(" + slide.img + ")"'>
        </div>
      </div>
    </div>
    <div class="banner-slider">
      <div class="banner-slider-content">
        <h2>
          Карта на полгода
          за 9900!
        </h2>
        <p>
          21 декабря в фитнес-клубе Максима прошли соревнования по армрестлингу.
        </p>
        <img src="../../assets/img/arrow-left.png" class="arrow-left" alt="arrow" v-on:click='prevSlide'>
        <img src="../../assets/img/arrow-right.png" class="arrow-right" alt="arrow" v-on:click='nextSlide'>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Old-slider',
    data() {
      return {
        sliderAllCount: 0,
        sliderActive: 1,
        sliderOffsetLeft: 0,
        sliderOffsetStep: 0,
        sliderList: [
          { img: 'https://sun1-24.userapi.com/UXOtw0-rzqzaA0CL5ZBhw4nMY-xiimVtrXbAeA/m3A2PNVvoes.jpg' },
          { img: 'https://sun1-17.userapi.com/rWS7T2DX7POuMD8OHu6L1hhbSAfHzKByn4eGWg/lVVe2DUDpfU.jpg' },
          { img: 'https://sun1-20.userapi.com/iVsEyBH-sDhN_Kd8nTaZhAAGcff7xqTbdvLHzA/5jpdKNPRSHc.jpg' },
          { img: 'https://sun1-28.userapi.com/hAPQ7MbD1ci-ssw0grYZU8g2PHXMOk_oC00stQ/R9IC08NfCvo.jpg' },
          { img: 'https://sun1-24.userapi.com/UXOtw0-rzqzaA0CL5ZBhw4nMY-xiimVtrXbAeA/m3A2PNVvoes.jpg' },
        ]
      }
    },

    methods: {
      initSlider: function () {
        let sliderBody = this.$el.querySelector('.js-slider');
        let sliderSlides = sliderBody.querySelectorAll('.js-slide');
        this.sliderOffsetStep = sliderBody.clientWidth;
        this.sliderAllCount = sliderSlides.length
      },

      openSlide: function (id) {
        if (id > 0 && id <= this.sliderAllCount) {
          this.sliderActive = id;
          this.sliderOffsetLeft = -(this.sliderActive * this.sliderOffsetStep - this.sliderOffsetStep)
        }
      },

      nextSlide: function () {
        if (this.sliderActive < this.sliderAllCount) {
          this.sliderActive += 1
          this.openSlide(this.sliderActive)
        } else if (this.sliderActive >= this.sliderAllCount) {
          this.sliderActive = 1;
          this.openSlide(this.sliderActive);
        }
      },

      prevSlide: function () {
        if (this.sliderActive > 1) {
          this.sliderActive -= 1;
          this.openSlide(this.sliderActive)
        } else if (this.sliderActive <= 1) {
          this.sliderActive = 4;
          this.openSlide(this.sliderActive);
        }
      }
    },

    mounted() {
      this.initSlider()

      window.addEventListener('resize', () => {
        this.initSlider();
        this.openSlide(this.sliderActive)
      })
    },
  }
</script>

<style scoped lang="scss">
  $slider-height: 400px;
  $slide-width: 100%;

  #app {
    position: relative;

    .slider {
      overflow: hidden;
      width: 100%;
      height: $slider-height;
      position: relative;

      &__body {
        min-width: auto;
        height: $slider-height;
        display: flex;
        position: relative;
        align-items: stretch;
        transition: all .5s ease;
      }

      &__slide {
        min-width: $slide-width;
        height: $slider-height;
        background-size: cover;
        background-position: center;
        flex: 1 100%;
      }
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
        margin-left: 40px;
        margin-top: 30px;

        h2 {
          font-family: 'Intro-regular-alt', sans-serif;
          font-size: 34px;
          color: #ffffff;
          max-width: 310px;
        }

        p {
          font-family: Open-sans, sans-serif;
          font-size: 14px;
          color: #ffffff;
          margin-top: 20px;
        }

        img {
          margin-left: -5px;
          margin-top: 15px;
          cursor: pointer;
          padding: 5px;
        }

        .arrow-right {
          margin-left: 13px;
        }
      }
    }
  }

</style>
