<template>
  <button
    class="w-[135px] h-[45px] text-[16px] flex items-center justify-center bg-creme rounded-md font-semibold text-text1">{{text}}
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
