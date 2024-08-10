<template>
<!--  hero page image  -->
<div class="h-hero w-full flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-12 md:gap-20">
  <!--  main title  -->
  <div class="flex sm:h-full sm:w-4/12 flex-col items-center justify-center">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">JEUX OLYMPIQUES<br />DE PARIS<br />2024</h1>
    <HeroButton text="Réserver son ticket" @click="this.$router.push('/formules')"/>
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
      <div class="flex flex-col flex-wrap items-center lg:flex-row gap-[20px] md:gap-[20px] lg:gap-[40px]">
        <SportCard v-for="(item, index) in dayOneSports" :key="index" :sport="item" />
      </div>
    </section>

    <!--  day 2  -->
    <section class="flex flex-col gap-[56px]">
      <h2 class="font-bold text-3xl">Jour 2</h2>
      <div class="flex flex-col flex-wrap items-center lg:flex-row gap-[20px] md:gap-[20px] lg:gap-[40px]">
        <SportCard v-for="(item, index) in dayTwoSports" :key="index" :sport="item" />
      </div>
    </section>
  </div>
  <div class="flex flex-col lg:flex-row gap-6">
    <div>
      <MainTitle class="mt-0 mb-6" title="A propos" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d656.189485344938!2d2.287525433947544!3d48.86282602613075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fe4ae702e43%3A0xc3cf0dea2d7a2450!2sCit%C3%A9%20de%20l&#39;architecture%20et%20du%20patrimoine%2C%201%20Pl.%20du%20Trocad%C3%A9ro%20et%20du%2011%20Novembre%2C%2075016%20Paris!5e0!3m2!1sfr!2sfr!4v1723217884857!5m2!1sfr!2sfr"
        class="w-full h-[300px] lg:w-[600px] lg:h-[400px]"
        style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
   
    <div class="lg:mt-32">
      <h3 class="font-bold">Besoin d'aide ?</h3>
      <p class="mt-6">Vous pouvez nous contacter par mail à l'adresse suivante : <a class="underline" href="mailto:dummy@email.fr">dummy@email.fr</a></p> 
      <p class="mt-2">Vous pouvez également nous contacter par téléphone au : <a class="underline" href="tel:+33123456789">01 23 45 67 89</a></p>
          
    </div>
  </div>
  
</div>
</template>

<script>
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
  data() {
    return {
      dayOneSports: [
        {
          id: 1,
          title: "Athlétisme",
          hour: "10h00",
          imgSrc: "src/assets/sports/athletics.jpg"
        },
        {
          id: 2,
          title: "Natation",
          hour: "13h00",
          imgSrc: "src/assets/sports/pool.jpg"
        },
        {
          id: 3,
          title: "Tir à l'arc",
          hour: "16h00",
          imgSrc: "src/assets/sports/archery.jpg"
        },
      ],
      dayTwoSports: [
        {
          id: 1,
          title: "Cyclysme",
          hour: "10h00",
          imgSrc: "src/assets/sports/cyclisme.webp"
        },
        {
          id: 2,
          title: "Basket 3c3",
          hour: "13h00",
          imgSrc: "src/assets/sports/basket.jpg"
        },
        {
          id: 3,
          title: "Golf",
          hour: "16h00",
          imgSrc: "src/assets/sports/golf.jpg"
        },
      ]
    }
  },
}
</script>
