<template>
<div class="flex flex-col items-center justify-center h-72">
  <h1 class="text-4xl font-bold mb-4">Paiement refusé</h1>
  <p class="text-lg text-gray-600">Malheureusement, votre achat a échoué... Réssayez plus tard !</p>
  <button @click="this.$router.push('/cart')" class="mt-8 px-4 py-2 bg-creme text-text1 rounded">Voir son panier</button>
</div>
</template>

<script>
export default {
  name: 'PaymentRefused',
}
</script>

<style>
/* Add any custom styles here */
</style>