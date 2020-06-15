<template>
  <footer class="footer">
    <div class="address">
      <h3>©2015, Фитнес-центр «Максима»</h3>
      <a href="#" @click.prevent>Барнаул, ул. Лазурная, 7</a>
      <p>Отдел продаж:<span> 28-30-28</span></p>
      <p>Рецепция:<span> 28-30-28</span></p>
    </div>
    <div class="operating-mode">
      <h3>Режим работы</h3>
      <p>Пн-Пт:<span> 7:00 - 22:00</span></p>
      <p>Сб<span> 8:00 - 22:00</span></p>
      <p>Вс<span> 9:00-21:00</span></p>
    </div>
    <div class="socials">
      <ul class="socials-list">
        <li class="socials-list-item">
          <a href="#" @click.prevent>
            <i class="fab fa-vk"></i>
          </a>
        </li>
        <li class="socials-list-item">
          <a href="#" @click.prevent>
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="socials-list-item">
          <a href="#" @click.prevent>
            <i class="fab fa-odnoklassniki"></i>
          </a>
        </li>
        <li class="socials-list-item">
          <a href="#" @click.prevent>
            <img src="../../assets/img/youtube.png" alt="youtube">
          </a>
        </li>
      </ul>
      <p><a href="#" @click.prevent>Правила клуба</a> (публичная оферта)</p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  .footer:before {
    background: #e9426a;
    content: '';
    position: absolute;
    transform: translate(-51%, 0);
    left: 50%;
    width: 100.8vw;
    min-width: 100%;
    height: 100%;
    z-index: -1;
    box-sizing: border-box;
  }

  .footer {
    display: flex;
    position: relative;
    height: 200px;
    background: #e9426a;
    justify-content: space-between;
    color: #ffffff;

    .address {
      text-align: left;

      a {
        display: block;
        font-family: Open-sans, sans-serif;
        font-weight: normal;
        font-size: 13px;
        margin-top: 20px;
        color: #ffffff;
        text-decoration: underline;
      }

      a:hover {
        text-decoration: none;
      }

      h3 {
        font-family: 'Intro-regular', sans-serif;
        font-size: 18px;
        margin-top: 45px;
        margin-left: -15px;
      }

      p {
        font-family: Open-sans, sans-serif;
        font-weight: normal;
        font-size: 13px;
        margin-top: 13px;
      }

      span {
        font-weight: bold;
      }
    }

    .operating-mode {
      text-align: left;

      h3 {
        font-family: 'Intro-regular' , sans-serif;
        font-size: 18px;
        margin-top: 45px;
      }

      p:nth-child(2) {
        margin-top: 20px;
      }

      p {
        font-family: Open-sans, sans-serif;
        font-weight: normal;
        font-size: 13px;
        margin-top: 13px;
      }

      span {
        font-weight: bold;
      }
    }

    .socials {
      margin-top: 45px;

      p {
        margin-left: 21px;
        margin-top: 50px;
        font-size: 10px;
        font-family: Open-sans, sans-serif;
        font-weight: 400;

        a {
          font-size: 12px;
          font-weight: 700;
          color: #ffffff;
          text-decoration: underline;
        }

        a:hover {
          text-decoration: none;
        }
      }

      .socials-list {
        display: flex;
        justify-content: flex-end;

        .socials-list-item {
          margin-left: 18px;
          display: flex;

          a {
            position: relative;
            width: 46px;
            height: 46px;
            border: 1px solid #e33861;
            border-radius: 50%;
            background: #e33861;

            .fab {
              color: white;
              font-size: 20px;
              position: absolute;
            }

            .fa-vk {
              left: 11px;
              top: 13px;
            }

            .fa-facebook-f {
              left: 16px;
              top: 12px;
            }

            .fa-odnoklassniki {
              left: 16px;
              top: 12px;
            }

            img {
              position: absolute;
              left: 11px;
              top: 7px;
            }
          }
        }
      }
    }
  }
</style>
