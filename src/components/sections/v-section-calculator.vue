<template>
  <section class="calc">
    <div class="calc-title">
      <h1>Взвесьте себя и узнайте, что делать</h1>
      <p>Узнайте, каким должен быть ваш вес, учитывая рост, возраст и род занятий.</p>
    </div>
    <div class="calc-table">
      <form @submit.prevent>
        <div class="calc-table-head">
          <span class="weight table-reg">Вес:</span>
          <input type="text" class="weight-input table-input table-sans">
          <span class="age table-reg">Возраст:</span>
          <input type="text" class="age-input table-input table-sans">
          <span class="height table-reg">Рост:</span>
          <input type="text" class="height-input table-input table-sans">
        </div>
        <div class="calc-table-gender">
          <span class="table-reg">Кто вы?</span>
          <input type="radio" name="gender" class="hide table-radio" id="man">
          <label for="man" class="table-sans table-radio man">Мужчина</label>
          <input type="radio" name="gender" class="hide table-radio" id="woman">
          <label for="woman" class="table-sans table-radio woman">Женщина</label>
        </div>
        <div class="calc-table-body">
          <span class="table-reg">Телосложение:</span>
          <input type="radio" name="body-type" class="hide table-radio" id="normal">
          <label for="normal" class="table-sans table-radio normal">Нормальное</label>
          <input type="radio" name="body-type" class="hide table-radio" id="fat">
          <label for="fat" class="table-sans table-radio fat">Полное</label>
          <input type="radio" name="body-type" class="hide table-radio" id="skinny">
          <label for="skinny" class="table-sans table-radio skinny">Хрупкое</label>
        </div>
        <button class="calculate">Расчитать</button>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'CalculatorSection',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .table-input {
    background: #12a9c4;
    border: 1px solid #0d9bbd;
    height: 40px;
    border-radius: 3px;
    width: 80px;
    margin-left: 12px;
  }

  .table-reg {
    font-family: 'Intro-regular', sans-serif;
    font-size: 18px;
  }

  .table-sans {
    font-family: Open-sans, sans-serif;
    font-weight: 700;
    font-size: 13px;
  }

  .table-radio {
    background: #1dc4dc;
    border: 2px solid #41edff;
    border-radius: 40px;
    margin-left: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    cursor: pointer;
  }

  .table-radio:checked + .table-radio {
    background: #ffffff;
    border: 2px solid #ffffff;
    color: #21d0e2;
  }

  .table-radio:hover {
    background: #41edff;
    border: 2px solid #41edff;
    color: #ffffff;
  }

  .calc {
    .calc-title {
      text-align: center;
      margin-top: 35px;

      h1 {
        font-family: 'Intro-regular-alt', sans-serif;
        color: #626161;
        font-size: 34px;
      }

      p {
        margin-top: 10px;
        font-family: 'Intro-light', sans-serif;
        color: #626161;
        font-size: 22px;
      }
    }

    .calc-table {
      color: #ffffff;
      margin-top: 40px;
      height: 396px;
      border-top: 10px solid #17add2;
      border-left: 4px solid #17add2;
      border-radius: 3px;
      background: #1bbbd8;
      text-align: center;

      .calc-table-head {
        margin-top: 40px;

        .weight-input {
          width: 80px;
        }

        .age {
          margin-left: 35px;
        }

        .height {
          margin-left: 65px;
        }

      }

      .calc-table-gender {
        margin-top: 55px;
        position: relative;
        right: 70px;
        display: inline-block;

        .man {
          padding-left: 56px;
          padding-right: 56px;
        }

        .woman {
          padding-left: 56px;
          padding-right: 56px;
        }

      }

      .calc-table-body {
        margin-top: 68px;
        position: relative;
        left: -2px;

        .normal {
          padding-left: 46px;
          padding-right: 46px;
        }

        .fat {
          padding-left: 62px;
          padding-right: 62px;
        }

        .skinny {
          padding-left: 60px;
          padding-right: 60px;
        }
      }

      .calculate {
        margin-top: 55px;
        font-family: 'Intro-regular-alt', sans-serif;
        font-size: 22px;
        color: #ffffff;
        padding: 17px 60px;
        background: #20cce0;
        border: 2px solid #ffffff;
        border-radius: 2px;
        cursor: pointer;
      }
    }
  }
</style>
