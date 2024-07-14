<template>
<!-- <button @click="notify">ssss</button> -->

<!--  hero page image  -->
<div class="h-hero w-full flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-12 md:gap-20">
  <!--  main title  -->
  <div class="flex sm:h-full sm:w-4/12 flex-col items-center justify-center">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">JEUX OLYMPIQUES<br />DE PARIS<br />2024</h1>
    <HeroButton text="Réserver son ticket" @click="this$router.push('/formules')"/>
  </div>
  <!--  image  -->
  <div class="h-30 md:min-w-[300px] max-w-[800px]">
    <img src="@/assets/bg/bg-jo.webp" class="object-fill rounded-lg" alt="anneaux des jeux olmypiques" />
  </div>
</div>

<!--  sport calendar section 
   title  -->
<div class="mt-[80px]">
  <MainTitle title="Calendrier des sports" />
  <!--  container  -->
  <div class="flex flex-col w-full gap-[56px] mt-[26px]">

    <!--  day 1  -->
    <section class="flex flex-col gap-[56px]">
      <h2 class="font-bold text-3xl">Jour 1</h2>
      <div class="flex flex-col flex-wrap items-center lg:flex-row gap-[20px] md:gap-[20px] lg:gap-[40px] md:ml-8">
        <SportCard v-for="(item, index) in dayOneSports" :key="index" :sport="item" />
      </div>
    </section>

    <!--  day 2  -->
    <section class="flex flex-col gap-[56px]">
      <h2 class="font-bold text-3xl">Jour 2</h2>
      <div class="flex flex-col flex-wrap items-center lg:flex-row gap-[20px] md:gap-[20px] lg:gap-[40px] md:ml-8">
        <SportCard v-for="(item, index) in dayTwoSports" :key="index" :sport="item" />
      </div>
    </section>
  </div>
</div>
</template>

<script>
import { toast } from 'vue3-toastify';
import HeroButton from '../../components/buttons/HeroButton.vue';
import SportCard from '../../components/cards/SportCard.vue';
import MainTitle from '../../layout/main-title/MainTitle.vue';

export default {
  name: 'Home',
  components: {
    HeroButton,
    SportCard,
    MainTitle
  },
  props: {
    user: Object
  },
  methods: {
    notify () {
      toast('Wow so easy !');
    }
  },


  data() {
    return {
      dayOneSports: [
        {
          id: 1,
          title: "Athlétisme",
          hour: "10h00",
          imgSrc: "../../assets/sports/athletics.jpg"
        },
        {
          id: 2,
          title: "Natation",
          hour: "13h00",
          imgSrc: "/assets/sports/pool.jpg"
        },
        {
          id: 3,
          title: "Tir à l'arc",
          hour: "16h00",
          imgSrc: "/assets/sports/archery.jpg"
        },
        {
          id: 4,
          title: "Athlétisme",
          hour: "10h00",
          imgSrc: "/assets/sports/athletics.jpg"
        },
        {
          id: 5,
          title: "Natation",
          hour: "13h00",
          imgSrc: "/assets/sports/pool.jpg"
        },
        {
          id: 6,
          title: "Tir à l'arc",
          hour: "16h00",
          imgSrc: "/assets/sports/archery.jpg"
        },
      ],
      dayTwoSports: [
        {
          id: 1,
          title: "Cyclysme",
          hour: "10h00",
          imgSrc: "/assets/sports/cyclisme.webp"
        },
        {
          id: 2,
          title: "Basket 3c3",
          hour: "13h00",
          imgSrc: "/assets/sports/basket.jpg"
        },
        {
          id: 3,
          title: "Golf",
          hour: "16h00",
          imgSrc: "/assets/sports/golf.jpg"
        },
        {
          id: 4,
          title: "Athlétisme",
          hour: "10h00",
          imgSrc: "/assets/sports/athletics.jpg"
        },
        {
          id: 5,
          title: "Natation",
          hour: "13h00",
          imgSrc: "/assets/sports/pool.jpg"
        },
        {
          id: 6,
          title: "Tir à l'arc",
          hour: "16h00",
          imgSrc: "/assets/sports/archery.jpg"
        },
      ]
    }
  }
}
</script>
