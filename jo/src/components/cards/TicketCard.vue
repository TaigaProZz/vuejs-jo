<template>
<div
  class="flex flex-col justify-start rounded-md place-content-between gap-[14px] relative items-center bg-graySecondary h-[360px] w-[234px]  sm:w-[274px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[26px]">
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
  <p class="h-full text-[14px]">{{ ticket.description }}</p>
  <!--  buy button  -->
  <div class="flex flex-col gap-[15px] text-center items-center">
    <PrimaryButton text="Acheter" @click="buy" />
    <!--  add to cart  -->
    <p class="cursor-pointer" @click="addCart">{{ !confirmButton ? 'Ajouter au panier' : 'Panier plein. Ajouter quand même?'}}</p>
  </div>
</div>
</template>

<script>
import { mapState } from "pinia";
import { useUserStore } from '@/stores/user-module';
import { useCartStore } from '@/stores/cart-module';

import PrimaryButton from "../buttons/PrimaryButton.vue";
import { buyTicket } from "../../services/ticket.service";
import { showErrorPopup, showSuccessPopup } from "../../utils/toast/toast";

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
  },
  data() {
    return {
      cartIsFull: false,
      confirmButton: false,
    }
  },
  computed: {
    ...mapState(useUserStore, ['isLoggedIn']),
    ...mapState(useCartStore, ['cart']),
  },
  methods: {
    async buy() {
      try {
        if (!this.isLoggedIn) {
          return showErrorPopup('Vous devez vous connecter pour acheter un ticket');
        }
        await buyTicket(this.ticket.stripeProductId);
      } catch (error) {
        showErrorPopup('Une erreur est survenue lors de l\'achat du ticket. Veuillez réessayer plus tard');
        console.error(error);
      }
    },
    addCart() {
      // check if cart is already full
      if (Object.keys(this.cart).length !== 0) {
        this.cartIsFull = true;
      }

      // if cart is full and confirm button is not already clicked
      if (this.cartIsFull && !this.confirmButton) {
        return this.confirmButton = true;
      }

      // when ticket is added to cart
      showSuccessPopup('Ticket ajouté au panier');
      this.confirmButton = false;
      return this.$emit('add-cart', this.ticket);
    }
  }
  
}
</script>
