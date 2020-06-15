<template>
  <keep-alive>
    <div class="container">
      <router-link :to="{name: 'goods'}">
        <div class="maxima-link-to-goods">Перейти к товарам</div>
      </router-link>
      <HeaderSection></HeaderSection>
      <NavigationSection></NavigationSection>
      <Slider
        :carousel_data="sliderItems"
        :interval="11000"
      />
      <Skier></Skier>
      <CalculatorSection></CalculatorSection>
      <Walker></Walker>
      <FooterSection></FooterSection>
    </div>
  </keep-alive>
</template>

<script>
  import HeaderSection from "./sections/v-section-header";
  import NavigationSection from "./sections/v-section-navigation";
  import Slider from "./sections/v-section-slider";
  import Skier from "./sections/v-section-skier";
  import CalculatorSection from "./sections/v-section-calculator";
  import Walker from "./sections/v-section-walker";
  import FooterSection from "./sections/v-section-footer";
  

  export default {
    name: 'MaximaLandingMain',
    components: {
      Slider,
      Walker,
      Skier,
      HeaderSection,
      NavigationSection,
      CalculatorSection,
      FooterSection,
    },
    data() {
      return {
        sliderItems: [
          {
            id: 1,
            name: 'img1',
            img: 'treadmills.jpg',
            event: 'Lorem ipsum dolor.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
          },
          {
            id: 2,
            name: 'img2',
            img: 'woman.jpg',
            event: 'Lorem ipsum dolor.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
          },
          {
            id: 3,
            name: 'img3',
            img: 'push-up.jpg',
            event: 'Lorem ipsum dolor.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
          },
          {
            id: 4,
            name: 'img4',
            img: 'cross.jpg',
            event: 'Lorem ipsum dolor.',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'
          },
        ],
      }
    },
    computed: {},
    methods: {
    
    },
  }
</script>

<style lang="scss">
  .container {
    max-width: 980px;
    min-width: 800px;
    margin: 0 auto;
    position: relative;

    .maxima-link-to-goods {
      position: absolute;
      left: 0;
      top: 50px;
      z-index: 1;
      font-family: Intro-regular, sans-serif;
      color: #000000;
    }
  }

</style>
