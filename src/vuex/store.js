import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_DATA_TO_STATE: (state, item) => {
      state.products.push(...item.data.items)
    },
    SET_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(item => {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart. push(product)
        }
      } else {
        state.cart. push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      }
    }
  },
  actions: {
    GET_DATA_FROM_API({ commit }) {
      axios.all([
        axios.get('http://vue-tests.dev.creonit.ru/api/catalog/shiny'),
        axios.get('http://vue-tests.dev.creonit.ru/api/catalog/diski')
      ])
        .then((products) => {
          products.forEach(item => {
            commit('SET_DATA_TO_STATE', item);
            return item.data.items
          })
        })
        .catch((error) => {
          console.log(error);
          return error;
        })
    },
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART', product);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit('DECREMENT', index)
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  },
});

export default store;