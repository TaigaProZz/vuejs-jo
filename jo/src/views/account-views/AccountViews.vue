<template>
<div class="w-full flex flex-col lg:flex-row gap-16 px-8 pt-20">
  <Submenu v-if="isLoggedIn" :path="path" class="w-4/12 mt-20" />

  <div class="w-full lg:w-8/12">
    <component :is="currentComponent" :user="user" />
  </div>
</div>
</template>

<script>
import { mapState } from 'pinia';
import { useUserStore } from '@/stores/user-module';
import Submenu from '../../layout/submenu/Submenu.vue';
import Profile from '../profile/Profile.vue';
import Transactions from '../transactions/Transactions.vue';
import Cart from '../cart/Cart.vue';



export default {
  name: 'AccountViews',
  components: {
    Submenu,
    Profile,
    Transactions,
    Cart
  },
  props: {
    user: Object  
  },
  data() {
    return {
      path: '',
    }
  },
  watch: {
    $route(to, from) {
      this.path = to.path;
    },
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn']),
    currentComponent() {
      switch (this.$route.path) {
        case '/profile':
          return 'Profile';
        case '/transactions':
          return 'Transactions';
        case '/cart':
          return 'Cart';
        default:
          return null;
      }
    }
  },
};
</script>
