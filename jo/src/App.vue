<script>
import { RouterView } from 'vue-router';
import Navbar from './layout/navbar/Navbar.vue';
import Footer from './layout/footer/Footer.vue';
import getUser from './services/user.service';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from './store';

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      isLoading: false,
      user: {}
    }
  },
  computed: {
    ...mapState(useUserStore, ['getUser', 'getIsLoggedIn'])
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
    <Navbar :user="getUser" :isLoggedIn="getIsLoggedIn" />
    <main class="flex-grow w-full p-6 md:w-10/12 mb-16">
      <p v-if="isLoading">loading...</p>
      <RouterView v-else :user="getUser" />
    </main>
    <Footer />
  </div>

</template>

