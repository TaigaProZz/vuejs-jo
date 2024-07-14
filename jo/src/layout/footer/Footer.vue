
<template>
  <footer class="w-full flex flex-col items-center gap-3 py-6 md:gap-16 lg:gap-40 md:justify-center md:flex-row">
    <!--  footer logo  -->
    <div class="w-full flex flex-col items-center text-center gap-6 md:flex-row md:justify-end md:text-left">
      <img :src="logo" alt="jo 2024 paris" @click="this.$router.push('/')" />

      <!--  first side  -->
      <ul class="flex flex-col gap-3">
        <li class="hover:text-creme cursor-pointer" v-for="(item, index) in firstSideElements" :key="index"
          @click="this.$router.push(item.href)">{{ item.name }}</li>
      </ul>
    </div>

    <!--  divider for mobile between sections  -->
     <!-- <div class="md:hidden bg-white my-8 w-8/12">
        <v-divider :thickness="1"></v-divider>
     </div> -->

    <!--  last side  -->
    <div class="w-full flex flex-col items-center text-center gap-6 md:items-start md:text-left">
      <ul class="flex flex-col gap-3">
        <li class="hover:text-creme cursor-pointer" v-for="(item, index) in secondSideElements" :key="index" @click="handleClick(item, index)">{{item.name}}</li>
      </ul>
    </div>
  </footer>
</template>

<script>
import logo from '@/assets/logo/logo-jo.svg';

export default  {
  name: "Footer",
  data() {
    return {
      logo,
      firstSideElements: [
        { name: "Conditions générale de vente", href: "/cgv" },
        { name: "Conditions générale d'utilisation", href: "/cgu" },
        { name: "Politique de confidentialité", href: "/pdc" },
        { name: "Conditions générale de vente", href: "/cgv" },
      ],
      secondSideElements: [
        { name: "A propos", href: "/about" },
        { name: "Formules", href: "/formules" },
        { name: "Mon profil", href: "/profile" },
        { name: "© Copyright 2024. Made by Taiga ProZz", href: "https://github.com/taigaprozz/" },
      ]
    }
  },
  methods: {
    handleClick(item, index) {
      if (index === this.secondSideElements.length - 1) {
        window.open(item.href, '_blank');
      } else {
        this.$router.push(item.href);
      }
    }
  }
}

</script>
