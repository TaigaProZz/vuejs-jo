<template>
<div class="w-full flex flex-col lg:flex-row gap-16 px-8 pt-20">
  <Submenu :path="path" class="w-4/12 mt-20" />

  <div class="w-8/12">
    <!-- <Profile v-if="path === '/account'" :user="user"/>
    <Cart v-if="path === '/cart'" /> -->
    <component :is="currentComponent" :user="user" :cart="cart" />

  </div>
</div>
</template>

<script>
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
      cart : {
        items: []
      }
    }
  },
  computed: {
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
 
  methods: {

  },

};
</script>
