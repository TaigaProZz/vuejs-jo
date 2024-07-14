<script>
export default {
  name: "MainTitle",
  props: {
    title: {
      type: String,
    },
    center: {
      type: Boolean,
    }
  }
}
</script>

<template>
  <h1 class="text-4xl font-bold mt-12" :class="center ? 'text-center' : '' ">{{title}}</h1>
  <!-- <v-divider :thickness="3" class="my-8"</v-divider> -->
</template>