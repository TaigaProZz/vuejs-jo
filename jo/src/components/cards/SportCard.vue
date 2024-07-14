<template>
<div
  class="flex flex-col justify-start rounded-[20px] place-content-between gap-[14px] bg-graySecondary text-text2 h-[280px] w-full max-w-[250px] sm:h-[306px] sm:max-w-none sm:w-[304px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[32px]">
  <div class="flex flex-col gap-[35px] w-full">
    <!--  image  -->
    <div class="w-full">
      <img :src="sport.imgSrc" :alt="sport.title" width={500} height={500} class="h-36 w-full object-cover" />
    </div>
    <div class="flex flex-col gap-1">
      <!--  name  -->
      <h3 class="font-semibold text-[18px]">{{sport.title}}</h3>
      <!--  hour  -->
      <h3 class="text-[14px]">{{sport.hour}}</h3>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    sport: {
      type: Object,
    }
  }

}
</script>
