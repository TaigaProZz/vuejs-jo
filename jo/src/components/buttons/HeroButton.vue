<template>
  <button class="h-[48px] text-[16px] flex items-center justify-center text-text1 bg-creme rounded-md p-6 font-semibold">{{text}}</button>
</template>

<script>
export default {
  name: 'HeroButton',
  props: {
    text : {
      type: String
    }
  }
}
</script>
