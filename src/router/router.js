import Vue from "vue";
import Router from 'vue-router';
import MaximaLandingMain from "../components/v-main-wrapper";
import Goods from "../components/goods/v-goods";
import Cart from "../components/cart/v-cart";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'maximaLandingMain',
      component: MaximaLandingMain,
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
      props: true
    }
  ]
})

export default router;
