<template>
  <button
    class="w-[120px] sm:w-[135px] h-[35px] sm:h-[45px] text-[16px] flex items-center justify-center bg-creme rounded-md font-semibold text-text1 hover:opacity-75">{{text}}
  </button>

</template>
     

<script>
export default {
  name: 'PrimaryButton',
  props: {
    text: {
      type: String
    }
  }
}
</script>
