<template>
  <header class="header">
    <div class="schedule">
      <a href="#" @click.prevent class="schedule-link">
        <img src="../../assets/img/calendar.png" alt="calendar">
        <span>расписание занятий</span>
      </a>
    </div>
    <a href="#" @click.prevent class="phone-one">
      <h3>+7 3852<span> 28-30-28</span></h3>
    </a>
    <a href="#" @click.prevent class="phone-two">
      <h3>+7 3852<span> 28-30-29</span></h3>
    </a>
    <div class="call-order">
      <a href="#" @click.prevent class="call-order-link">
        <img src="../../assets/img/phone.png" alt="phone">
        <span>заказать звонок</span>
      </a>
    </div>
  </header>
</template>

<script>

  export default {
    name: 'HeaderSection',

    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .header:before {
    content: '';
    position: absolute;
    background-color: #f14e75;
    box-sizing: border-box;
    transform: translate(-51%, 0);
    left: 50%;
    width: 100.8vw;
    min-width: 100%;
    height: 100%;
    z-index: -1;
  }

  .header {
    display: flex;
    height: 50px;
    position: relative;

    .schedule {
      width: 292px;

      .schedule-link:hover {
        text-decoration: underline #ffffff;
      }


      .schedule-link {
        display: flex;
        align-items: center;
        width: 230px;
        background: #ce365b;
        height: 100%;

        img {
          margin-left: 20px;
          margin-top: -5px;
        }

        span {
          font-family: 'Intro-regular', sans-serif;
          color: white;
          font-size: 12px;
          text-transform: uppercase;
          margin-left: 5px;
        }
      }
    }

    .phone-one {
      width: 197px;
      display: flex;
      align-items: baseline;
      margin-left: 25px;

      h3 {
        margin-top: 10px;
        font-family: 'Intro-regular', sans-serif;
        color: #ffa3b9;
        font-size: 14px;
        white-space: nowrap;

        span {
          font-family: 'Intro-bold', sans-serif;
          font-size: 20px;
          color: #ffffff;
        }
      }
    }

    .phone-two {
      width: 206px;
      display: flex;
      align-items: baseline;
      margin-left: 25px;

      h3 {
        margin-top: 10px;
        font-family: 'Intro-regular', sans-serif;
        color: #ffa3b9;
        font-size: 14px;
        white-space: nowrap;

        span {
          font-family: 'Intro-bold', sans-serif;
          font-size: 20px;
          color: #ffffff;
        }
      }
    }

    .call-order {
      width: 292px;

      .call-order-link:hover {
        text-decoration: underline #ffffff;
      }

      .call-order-link {
        display: flex;
        align-items: center;
        width: 230px;
        background: #ce365b;
        height: 100%;
        margin-left: auto;

        img {
          margin-left: 20px;
          margin-top: -5px;
        }

        span {
          font-family: 'Intro-regular', sans-serif;
          color: white;
          font-size: 12px;
          text-transform: uppercase;
          margin-left: 20px;
        }
      }
    }
  }
</style>
