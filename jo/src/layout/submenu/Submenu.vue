<template>
<div class=" w-full min-w-[200px] max-w-[250px] hidden lg:flex flex-col items-center px-2 py-2 rounded-lg bg-graySecondary drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]">
  <!-- title -->
  <h2 class="w-full text-xl p-2">Compte</h2>

  <!-- divider -->
  <hr class="w-full my-4 border-creme" />

  <!-- links list -->
  <ul class="w-full flex flex-col ">
    <li v-for="item in items" :key="item" @click="this.$router.push(item.href)" class="cursor-pointer p-2 hover:text-creme hover:bg-gray-600 rounded-lg">
      {{ item.name }}
    </li>
  </ul>

  <!-- divider -->
  <hr class="w-full my-4 border-creme" />

  <!-- logout btn -->
  <button @click="logoutClick" type="button" class="mb-1 p-2 w-full h-full flex flex-col justify-end cursor-pointer hover:text-creme hover:bg-gray-600 rounded-lg">Déconnexion</button>
</div>
</template>

<script>
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';
import { logout } from '../../services/account.service';

export default {
  name: 'Submenu',
  components: {
    PrimaryButton
  },
  props: {
    path: String
  },
  data() {
    return {
      items: [
        { name: 'Mon Profil', href: '/profile'}, 
        { name: 'Mes Achats', href: '/transactions' }, 
        { name: 'Mon Panier', href: '/cart' }
      ],
    }
  }, 
  methods: {
    async logoutClick() {
      await logout();
    },
  }
};
</script>
