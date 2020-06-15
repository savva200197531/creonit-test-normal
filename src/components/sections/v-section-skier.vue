<template>
  <section class="events">
    <div class="events-title">
      <h1>События декабря</h1>
    </div>
    <div class="events-flags">
      <a class="flag-one">
        <img src="../../assets/img/flag.png" alt="flag">
        <span class="flag-date">10</span>
        <a href="#" class="flag-text" @click.prevent>Катаемся на лыжах</a>
      </a>
      <div class="flag-two">
        <div>
          <img src="../../assets/img/flag.png" alt="flag">
          <span class="flag-date">21</span>
          <a href="#" class="flag-text" @click.prevent>Турнир
            по армрестлингу</a>
        </div>
      </div>
      <div class="skier" ref="skier"></div>
      <div class="flag-three">
        <img src="../../assets/img/flag.png" alt="flag">
        <span class="flag-date">24</span>
        <a href="#" class="flag-text" @click.prevent>Новый год в «Максиме»</a>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Skier',
    data() {
      return {
        skier: null,
        timer: null,
        i: 1,
        timePassed: 0,
      }
    },
    methods: {

      skierAnimate() {
        this.skier = this.$refs.skier;
        this.go();
      },

      go() {
        const that = this;
        this.timer = setInterval(() => {
          this.i = this.i + 30;
          this.timePassed = this.i - 1;
          that.skier.style.left = -this.timePassed / 5 + 2000 + 'px';
          that.skier.style.top = this.timePassed / 90 + 290 + 'px';
          if (this.timePassed > 15000) {
            this.timePassed = 0;
            this.i = 1;
            clearInterval(this.timer);
            this.go();
          }
        }, 10);
      },
    },
    mounted() {
      this.skierAnimate()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  .flag-text {
    margin-top: 32px;
    margin-left: 24px;
    font-family: 'Intro-regular', sans-serif;
    font-size: 18px;
  }
  
  .flag-date {
    margin-top: -145px;
    margin-left: 10px;
    font-family: 'Intro-bold-Alt', sans-serif;
    font-size: 30px;
  }
  
  .flag-text, .flag-date {
    color: #ffffff;
    margin-bottom: 0;
    transform: skewY(-10deg);
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  
  .flag-text:hover {
    text-decoration: underline;
  }
  
  .events:before {
    content: '';
    position: absolute;
    background: url('../../assets/img/ski-bg.png') no-repeat center center;
    transform: translate(-51%, 0);
    left: 50%;
    width: 100vw;
    min-width: 100%;
    height: 100%;
    z-index: -2;
    box-sizing: border-box;
  }
  
  .events {
    position: relative;
    
    .events-title {
      
      h1 {
        font-family: 'Intro-regular-alt', sans-serif;
        text-align: center;
        position: relative;
        top: 50px;
        color: #626161;
        font-size: 34px;
        z-index: 3;
      }
    }
    
    .events-flags {
      display: flex;
      justify-content: space-between;
      height: 520px;
      position: relative;
      
      .skier {
        display: inline-block;
        z-index: 2;
        position: absolute;
        top: 300px;
        background: url('../../assets/img/skier.png') 0 0 no-repeat;
        width: 194px;
        height: 139px;
      }
      
      .flag-one:before {
        content: '';
        background-color: #d0d0d0;
        position: absolute;
        width: 4px;
        height: 145px;
        top: 128px;
        left: 20px;
        z-index: -1;
      }
      
      .flag-one:after {
        content: '';
        background-color: #d0d0d0;
        position: absolute;
        width: 4px;
        height: 185px;
        top: 100px;
        left: 234px;
        z-index: 3;
      }
      
      .flag-one {
        position: relative;
        margin-top: 226px;
        right: 15px;
        
        a {
          margin-left: 44px;
        }
      }
      
      .flag-two:before {
        content: '';
        background-color: #d0d0d0;
        position: absolute;
        width: 4px;
        height: 145px;
        top: 128px;
        left: 20px;
        z-index: -1;
      }
      
      .flag-two:after {
        content: '';
        background-color: #d0d0d0;
        position: absolute;
        width: 4px;
        height: 185px;
        top: 100px;
        left: 234px;
        z-index: 3;
      }
      
      .flag-two {
        position: relative;
        margin-top: 202px;
      }
      
      .flag-three:before {
        content: '';
        background-color: #d0d0d0;
        position: absolute;
        width: 4px;
        height: 160px;
        top: 125px;
        left: 20px;
        z-index: -2;
      }
      
      .flag-three:after {
        content: '';
        background-color: #d0d0d0;
        position: absolute;
        width: 4px;
        height: 180px;
        top: 100px;
        left: 234px;
        z-index: 3;
      }
      
      .flag-three {
        position: relative;
        margin-top: 181px;
        
      }
    }
  }
</style>
