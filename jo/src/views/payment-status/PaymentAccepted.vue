<template>
  <div class="flex flex-col items-center justify-center h-72">
    <h1 class="text-4xl font-bold mb-4">Paiement accepté</h1>
    <p class="text-lg text-gray-600">Merci pour la réservation!</p>
    <button @click="this.$router.push('/transactions')" class="mt-8 px-4 py-2 bg-creme text-text1 rounded">Voir son ticket</button>
  </div>
</template>

<script>
export default {
  name: 'PaymentAccepted',
}
</script>
