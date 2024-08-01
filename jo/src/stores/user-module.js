import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', {
  state: () => ({
    user: {},
    isLoggedIn: false,
    doubleAuthSetup: false,
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getIsLoggedIn(state) {
      return state.isLoggedIn;
    },
    getDoubleAuthSetup(state) {
      return state.doubleAuthSetup;
    },
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
    },
    handleDoubleAuthSetup(state) {
      this.doubleAuthSetup = state;
      this.isLoggedIn = state;
    },
    handleRemoveDoubleAuthSetup() {
      this.doubleAuthSetup = false;
    },
    async logoutUser() {
      this.addUser({});
      this.handleIsLoggedIn(false);
    },
  },
})