import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {},
    isLoggedIn: false,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  actions: {
    addUser(data) {
      return this.user = data;
    },
    handleIsLoggedIn(state) {
      return this.isLoggedIn = state;
    },
    async logUser(data) {
      this.addUser(data);
      this.handleIsLoggedIn(true);
    }
  },
})