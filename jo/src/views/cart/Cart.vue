<template>
  <div class="flex flex-col gap-10">
    <h1 class="text-4xl font-bold">Mon Panier</h1>
    
    <CartCard v-if="Object.keys(getCart).length !== 0" :item="getCart" @delete-cart="handleRemoveItem" />
    <h2 v-else class="text-xl">Votre panier est vide</h2>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCartStore } from '../../stores/cart-module';
import CartCard from '../../components/cards/CartCard.vue';

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
  methods: {
    ...mapActions(useCartStore, ['removeItem']),

    handleRemoveItem(item) {
      this.removeItem(item);
    }
  }
}
</script>
