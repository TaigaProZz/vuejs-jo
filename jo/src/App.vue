<script>
import { RouterView } from 'vue-router';
import Navbar from './layout/navbar/Navbar.vue';
import Footer from './layout/footer/Footer.vue';
import getUser from './services/user.service';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from './stores/user-module';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      user: {},
      hideLayout: false
    }
  },
  computed: {
    ...mapState(useUserStore, ['getUser', 'getIsLoggedIn'])
  },
  watch: {
    // hide layout if on login page 
    $route(to, from) {
      console.log(to.path);
      this.hideLayout = to.path === '/double-auth-qrcode';
    }
  },
  methods: {
    ...mapActions(useUserStore, ['logUser']),
    async fetchUser() {
      try {
        this.isLoading = true
        const response = await getUser()
        this.logUser(response);
      } catch (error) {}
        finally {
        this.isLoading = false;
      } 
    }
  },
  async mounted() {
    await this.fetchUser();
  },
}
</script>

<template>
  <div class="min-h-screen flex flex-col items-center bg-radial-custom-gradient">
    <Navbar v-if="!hideLayout" :user="getUser" :isLoggedIn="getIsLoggedIn" />
    <main class="flex-grow w-full p-6 md:w-8/12 mb-16">
      <p v-if="isLoading">loading...</p>
      <RouterView v-else :user="getUser" />
    </main>
    <Footer v-if="!hideLayout" />
  </div>

</template>

