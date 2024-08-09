<template>
<nav class="w-full px-6 py-3 md:w-8/12 flex items-center justify-between bg-transparent">
  <!-- burger menu icon -->
  <div class="sm:hidden" @click="toggleMenu">
    <button :aria-label="isBurgerOpen ? 'Close menu' : 'Open menu'" class="sm:hidden">
      <img src="@/assets/icons/burger-menu.svg" class="h-[30px] fill-white" />
    </button>
  </div>

  <!-- elements -->
  <div class="flex items-center h-full">
    <!-- logo and title -->
    <div class="navbar-brand justify-center md:mr-6">
      <RouterLink class="flex items-center justify-center" to="/">
        <img :src="logo" alt="jo 2024 paris" class="" />
        <p class="font-bold text-inherit ml-3 hidden lg:flex">JO 2024</p>
      </RouterLink>
    </div>

    <!-- navigation items -->
    <div class="navbar-content hidden sm:flex gap-4 justify-center">
      <template v-for="(item, index) in navItems.slice(1, 2)" :key="index">
        <div :class="['navbar-item', { 'active': pathname === item.href }]">
          <RouterLink class="h-full flex items-center hover:text-creme" :to="item.href">
            {{ item.name }}
          </RouterLink>
        </div>
      </template>
    </div>
  </div>

  <!-- login and register buttons or user menu -->
  <div class="flex gap-5 justify-end">
    <!-- cart item -->
    <div class="hidden sm:flex mr-6 pt-1" :class="{ 'active': pathname === '/cart' }">
      <button class="h-full flex items-center cursor-pointer" @click="this.$router.push('/cart')">
        <div class="flex items-center justify-center relative">
          <p>Panier</p>
          <img src="@/assets/icons/shopping-cart.svg" alt="cart" class="h-6 w-6 ml-2" />
          <p
            class="absolute bottom-3 left-[4.7rem] font-bold rounded-full bg-creme h-7 w-7 flex items-center justify-center pt-0.5">
            <!-- {{ user.cartItems }} -->
            {{ Object.keys(getCart).length === 0 ? "0" : "1" }}
          </p>
        </div>
      </button>
    </div>

    <!-- user not logged in -->
    <template v-if="!isLoggedIn">
      <div class="navbar-item hidden lg:flex" :class="{ 'active': pathname === '/login' }">
        <button class="h-full flex items-center hover:text-creme" @click="this.$router.push('/login')">
          Connexion
        </button>
      </div>
      <div class="navbar-item">
        <button :class="{ 'bg-creme': pathname === '/register', 'bg-gray-300 hover:bg-creme': pathname !== '/register' }" class="text-text1 rounded-lg px-4 py-2" @click="this.$router.push('/register')">S'inscrire</button>
      </div>
    </template>

    <!-- user logged in  -->
    <template v-else>
      <!-- avatar dropdown -->
      <!-- container -->
      <div class="pt-2" ref="targetElement">
        <!-- toggle -->
        <button class="dropdown-trigger relative">
          <img src="@/assets/icons/user-ico.svg" alt="user dropdown" class="h-10 w-10 cursor-pointer" @click="toggleDropdown" />
        </button>

        <!-- dropdown menu -->
        <div v-if="isDropdownOpen" class="z-50 bg-white w-[200px] -translate-x-44 p-2 py-4 gap-4 absolute flex flex-col justify-between rounded-lg">
          
          <!-- first part with email-->
          <div class="h-14 gap-3 cursor-pointer px-2 hover:bg-gray-100" to="/profile" @click="gotoPage('/profile')">
            <p class="font-semibold text-text1">Connecté avec</p>
            <p class="font-semibold text-text1">{{ user.name }}</p>
          </div>

          <hr />
          
          <!-- items for redirection -->
          <div class="flex flex-col">
            <ul v-for="(item, index) in dropdownItems" :key="index">
              <li class="h-full py-1.5 px-2 dropdown-item text-text1 cursor-pointer w-full text-left hover:font-semibold hover:bg-gray-100 rounded-lg" @click="gotoPage(item.href)">
                {{ item.name }}
              </li>
            </ul>
          </div>

          <hr />

          <!-- log out button -->
          <div>
            <button class="dropdown-item w-full text-left text-red-600 py-1.5 px-2 hover:font-semibold hover:bg-red-100 rounded-lg" @click="logoutClick">
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </template> 
  </div>

  <!-- burger menu -->
  <div v-if="isBurgerOpen" class="bg-transparent absoulte">

    <template v-for="(item, index) in navItems" :key="index">

      <div class="navbar-menu-item" :class="{ 'active': pathname === item.href }" @click="handleMenuClose">
        <button class="w-full"
          :class="{ 'text-warning': index === 1, 'text-danger': index === navItems.length - 1, 'text-foreground': index !== 1 && index !== navItems.length - 1 }"
          @click="gotoPage(item.href)" size="lg">
          {{ item.name }}
        </button>
      </div>
    </template>
  </div>
</nav>
</template>

<script>
import { mapState } from 'pinia';
import { useCartStore } from '../../stores/cart-module';
import { logout } from '../../services/account.service';

import logo from '@/assets/logo/logo-jo.svg';
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';

export default {
  name: 'NavbarLayout',
  components: {
    PrimaryButton
  },
  props: {
    user: Object,
    isLoggedIn: Boolean
  },
  data() {
    return {
      logo,
      pathname: '/',
      isDropdownOpen: false,
      isBurgerOpen: false,
      navItems: [
        { name: 'Accueil', href: '/' },
        { name: 'Formules', href: '/formules' },
        // { name: 'A propos', href: '/about' },
        { name: 'Se connecter', href: '/login' },
        { name: "S'inscrire", href: '/register' }
      ],

      dropdownItems: [
        { name: 'Mon Profil', href: '/profile' },
        { name: 'Mes Achats', href: '/transactions' },
        { name: 'Mon Panier', href: '/cart' }
      ]
    }
  },
  watch: {
    $route(to, from) {
      this.pathname = to.path;
    },
  },
  computed: {
    ...mapState(useCartStore, ['getCart']),
  },
  methods: {
    gotoPage(page) {
      this.$router.push(page);
      this.handleDropdownClose();
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },

    handleDropdownClose ()  {
      this.isDropdownOpen = false;
    },

    handleClickOutside(event) {
      if(!this.isLoggedIn) return;
      const targetElement = this.$refs.targetElement;
      if (!targetElement.contains(event.target)) {
        this.handleDropdownClose()
      }
    },

    async logoutClick() {
      // logout logic here
      await logout();
      this.handleDropdownClose();
    },
  },
  // mounted() {
  //   document.addEventListener('click', this.handleClickOutside);
  // },
  // beforeDestroy() {
  //   document.removeEventListener('click', this.handleClickOutside);
  // },
};
</script>
