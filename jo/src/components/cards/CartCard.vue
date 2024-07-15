<template>
<div
  class="flex flex flex-col min-w-[260px] h-auto max-w-[620px] w-full sm:flex-row justify-start rounded-lg justify-between gap-[14px] bg-graySecondary text-text2   drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px]">
  
  <!-- first part -->
  <div class="flex flex-col w-full h-full gap-6 justify-between">
      <!--  name and description -->
      <div class="flex justify-between">
        <div class="w-10/12">
          <h3 class="font-semibold text-[18px]">{{ item.name }}</h3>
          <p class="font-regular text-[14px] ml-2">{{ item.description }}</p>
        </div>
     
        <!-- trash ico -->
        <div @click="deleteCart" class="w-[40px]">
          <img src="@/assets/icons/trash.svg" alt="trash"
            class="h-[50px] w-[50px] cursor-pointer rounded-lg hover:bg-grayPrimary" />
        </div>
      </div>
     
      <!-- buttons group -->
      <div class="flex gap-4">
        <!-- price -->
        <p
          class="text-[16px] py-1.5 px-8 w-fit h-fit flex justify-center bg-grayPrimary bg-opacity-65 text-text2 rounded-lg font-semibold">
          {{ item.price }}€</p>

        <!-- buy -->
        <p @click="buyTicket" class="text-[16px] py-1.5 px-8 w-fit h-fit flex justify-center bg-creme text-text1 rounded-lg font-semibold cursor-pointer hover:bg-opacity-70">
          Acheter
        </p>
      </div>
    </div>


</div>
</template>

<script>

export default {
  name: 'CartCard',
  props: {
    item: {
      type: Object,
    }
  },
  methods: {
    buyTicket() {
      this.$emit('buy-ticket', this.item);
    },

    deleteCart() {
      this.$emit('delete-cart', this.item);
    }
  }
}
</script>
