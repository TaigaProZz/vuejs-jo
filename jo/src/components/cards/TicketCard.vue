<template>
<div
  class="flex flex-col justify-start rounded-md place-content-between gap-[14px] relative items-center bg-graySecondary h-[305px] w-[234px] sm:h-[345px] sm:w-[274px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[32px]">
  <!--  price  -->
  <p
    class="text-[20px] h-[34px] w-[136px] top-[-16px] rounded font-bold absolute bg-lightBlue text-text2 flex justify-center items-center text-center">
    {{ ticket.price }}€
  </p>
  <!--  header : name and number of person admission  -->
  <div class="flex flex-col items-center gap-[10px]">
    <!--  name  -->
    <h3 class="font-bold text-[20px]">{{ ticket.name }}</h3>
    <!--  person admission  -->
    <p>{{ ticket.numberOfPersonsAdmission }} {{ ticket.numberOfPersonsAdmission > 1 ? `personnes` : "personne" }}</p>
  </div>
  <!--  description  -->
  <p class="h-full">{{ ticket.description }}</p>
  <!--  buy button  -->
  <div class="flex flex-col gap-[15px] text-center">
    <PrimaryButton text="Acheter" @click="this.$router.push(`formules/${ticket.id}`)" />
    <!--  add to cart  -->
    <p class="cursor-pointer">Ajouter au panier</p>
  </div>
</div>
</template>

<script>
import PrimaryButton from "../buttons/PrimaryButton.vue";

export default {
  name: 'TicketCard',
  components: {
    PrimaryButton
  },
  props: {
    ticket: {
      type: Object,
      default: {}
    }
  }
  
}
</script>
