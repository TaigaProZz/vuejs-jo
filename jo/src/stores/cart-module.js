import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: {}
  }),
  getters: {
    getCart(state) {
      localStorage.getItem('cart') ? state.cart = JSON.parse(localStorage.getItem('cart')) : state.cart = {};
      return state.cart;
    },
  },
  actions: {
    addItem(data) {
      // check if cart is emmpty, if so, return
      if (this.cart.length > 0) return;

      // add item to localstorage and cart
      localStorage.setItem('cart', JSON.stringify(data));
      return this.cart = data;
    },
    removeItem() {
      localStorage.removeItem('cart');
      return this.cart = {};
    }
 
  },
})