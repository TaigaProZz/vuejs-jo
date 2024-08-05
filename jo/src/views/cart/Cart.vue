<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-4xl font-bold">Mon Panier</h1>
    
    <CartCard v-if="Object.keys(getCart).length !== 0 && cart" :item="cart" @delete-cart="handleRemoveItem" />
    <h2 v-else class="text-xl">Votre panier est vide</h2>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../../stores/cart-module';
import CartCard from '../../components/cards/CartCard.vue';
import { fetchOneTicket } from '../../services/ticket.service';

export default {
  name: 'Cart',
  components: {
    CartCard
  },
  props: {
    user: Object,
  },
  data() {
    return {
      cart: null
    }
  },
  computed: {
    ...mapState(useCartStore, ['getCart']),
  },
  async mounted() {    
    if (Object.keys(this.getCart).length !== 0) {
      this.cart = await fetchOneTicket(this.getCart.id);      
    }
  },
  methods: {
    ...mapActions(useCartStore, ['removeItem']),
    handleRemoveItem(item) {
      this.removeItem(item);
    }
  }
}
</script>
