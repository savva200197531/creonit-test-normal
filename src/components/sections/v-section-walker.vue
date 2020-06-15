<template>
  <div class="walker-component">
    <section class="walker">
      <img ref="walkerMan" src="../../assets/img/walkman.gif" class="walker-man" id="walker-man" alt="man-walks">
      <div class="walker-table-div">
        <img src="../../assets/img/table.png" class="walker-table" alt="table">
        <div class="walker-table-text">
          <h4>
            Пока вы находитесь на сайте,
          </h4>
          <p>
            человечек уже прошел <span class="meter" ref="Meter">0</span> м
          </p>
          <p>
            и, между прочим, потратил <span ref="Calories">0</span> ккал
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: 'Walker',

    data() {
      return {
        times: 1,
        man: null,
        meter: null,
        calories: null,
        timer: null,
        switchTimer: null,
        i: 0,
        step: 0,
      }
    },

    methods: {
      skierAnimate() {
        this.man = this.$refs.walkerMan;
        this.switch();
        this.go();
      },

      go() {
        this.timer = setInterval(() => {
          if (this.times % 2) {
            this.step = this.step + 3;
            this.man.style.left = this.step + 'px';
            this.man.classList.remove('back');
          } else {
            this.step = this.step - 3;
            this.man.style.left = this.step + 'px';
            this.man.classList.add('back');
          }
        }, 10);
      },

      switch() {
        this.switchTimer = setInterval(() => {
          if (this.step > 800 || this.step < -50) {
            this.times++
          }
        }, 10)
      },

      counter() {
        this.meter = this.$refs.Meter;
        this.calories = this.$refs.Calories;
        setInterval(() => {
          this.meter.innerHTML++;
          this.i = Math.ceil((this.i + 0.09) * 100) / 100;
          this.calories.innerHTML = this.i
        }, 1000)
      },
    },

    mounted() {
      this.skierAnimate();
      this.counter();
    },

  }
</script>

<style lang="scss" scoped>
  
  #walker-man {
    margin-left: 0;
    cursor: pointer;
    transition: margin-left 4s linear;
  }
  
  /* переворот картинки через CSS */
  
  .back {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: fliph;
  }
  
  .walker-man {
    position: absolute;
    top: 6px;
    left: 0;
    margin-top: 10px;
    z-index: 1;
  }
  
  .walker:before {
    background: url('../../assets/img/bottom-bg.png') no-repeat center;
    content: '';
    position: absolute;
    transform: translate(-51%, 0);
    left: 50%;
    width: 100vw;
    min-width: 100%;
    height: 100%;
    z-index: -1;
    box-sizing: border-box;
    margin-top: -6px;
  }
  
  .walker {
    display: flex;
    align-items: baseline;
    position: relative;
    margin-bottom: -6px;
    
    .walker-table-div {
      position: relative;
      margin: 15px auto 0 auto;
      
      .walker-table {
      
      }
      
      .walker-table-text {
        position: absolute;
        text-align: left;
        left: 97px;
        top: 60px;
        
        h4 {
          font-family: 'Intro-regular', sans-serif;
          font-size: 20px;
          color: #626161;
        }
        
        p {
          font-family: Open-sans, sans-serif;
          font-size: 14px;
          color: #464343;
        }
        
        span {
          font-family: 'Intro-bold-Alt', sans-serif;
          font-size: 20px;
          color: #1bbbd9;
        }
      }
    }
  }
</style>
