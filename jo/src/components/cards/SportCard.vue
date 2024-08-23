<template>
<div
  class="flex flex-col justify-start place-content-between gap-[14px] text-text2 h-[280px] w-full max-w-[250px] sm:h-[306px] sm:max-w-none sm:w-[304px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[32px]">
  <div class="flex flex-col gap-[35px] w-full">
    <!--  image  -->
    <div class="w-full">
      <img :src="getImageSrc(sport.imgSrc)" :alt="sport.title" width="500" height="500" class="rounded-[12px] h-36 w-full object-cover" />
    </div>
    <div class="flex flex-col gap-1">
      <!--  name  -->
      <h3 class="font-semibold text-[16px]">{{sport.title}}</h3>
      <!--  hour  -->
      <h3 class="text-[14px] opacity-75">{{sport.hour}}</h3>
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
  },
  data() {
    return {
      environment: import.meta.env.VITE_APP_NODE_ENV
    };
  },
  methods: {
    getImageSrc(imgSrc) {
      return this.environment === 'development' ? `src/${imgSrc}` : '@/' + imgSrc;
    }
  }
}
</script>
