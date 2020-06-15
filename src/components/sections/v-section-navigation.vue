<template>
  <section class="navigation">
    <div class="logo"><img src="../../assets/img/logo.png" alt="logo"></div>
    <ul class="navigation-list">
      <li>
        <a href="#" class="club navigation-list-link" @click.prevent>
          <i><img src="../../assets/img/club.png" alt="club"></i>
          <p>Наш клуб</p>
        </a>
      </li>
      <li>
        <a class="card navigation-list-link" href="#" @click.prevent>
          <i><img src="../../assets/img/card.png" alt="card"></i>
          <p>Клубные карты</p>
        </a>
      </li>
      <li>
        <a class="life navigation-list-link" href="#" @click.prevent>
          <i><img src="../../assets/img/life.png" alt="life"></i>
          <p>Максима Life</p>
        </a>
      </li>
      <li>
        <a class="team navigation-list-link" href="#" @click.prevent>
          <i><img src="../../assets/img/team.png" alt="team"></i>
          <p>Команда</p>
        </a>
      </li>
      <li>
        <a class="contacts navigation-list-link" href="#" @click.prevent>
          <i><img src="../../assets/img/contacts.png" alt="contacts"></i>
          <p>Контакты</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'NavigationSection',
    data() {
      return {}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  
  .navigation {
    display: flex;
    align-items: center;
    height: 179px;
    
    .logo {
      width: 292px;
      
      img {
        cursor: pointer;
      }
    }
    
    .navigation-list {
      width: 688px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .club {
        
        img {
        
        }
      }
      
      .navigation-list-link:before {
        transition: all 0.2s ease;
        position: absolute;
        left: 50%;
        margin-left: -25px;
        bottom: -65px;
        width: 50px;
        height: 10px;
        border-radius: 50%;
        background: linear-gradient(to bottom, #ebebeb 0%, #ddd 100%);
        content: '';
      }
      
      .navigation-list-link:hover:before {
        width: 40px;
        height: 8px;
        margin-left: -20px;
      }
      
      .navigation-list-link:hover {
        position: relative;
        cursor: pointer;
        font-family: 'Intro-regular', sans-serif;
        color: #5b5b5b;
        
        p {
          margin-top: 12px;
        }
        
        i {
          transition: all 0.3s cubic-bezier(0.68, -0.85, 0.265, 1.55);
          display: block;
          z-index: 100;
          position: relative;
          top: -18px;
          width: 60px;
          height: 60px;
          margin: auto auto 15px auto;
          border-radius: 50%;
          background: #e74069;
          line-height: 60px;
          text-align: center;
          
          img {
            vertical-align: middle;
          }
        }
      }
      
      .navigation-list-link {
        position: relative;
        cursor: pointer;
        font-family: 'Intro-regular', sans-serif;
        color: #5b5b5b;
        
        p {
          margin-top: 12px;
        }
        
        i {
          transition: all 0.3s cubic-bezier(0.68, -0.85, 0.265, 1.55);
          display: block;
          z-index: 100;
          position: relative;
          top: 0;
          width: 60px;
          height: 60px;
          margin: auto auto 15px auto;
          border-radius: 50%;
          background: #1bbdce;
          line-height: 60px;
          text-align: center;
          
          img {
            vertical-align: middle;
          }
        }
        
        
      }
      
      li {
        text-align: center;
      }
      
      li:first-child {
        margin-left: 17px;
      }
    }
  }
</style>
