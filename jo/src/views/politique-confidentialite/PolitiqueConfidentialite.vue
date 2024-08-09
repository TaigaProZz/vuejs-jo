<template>
  <div class="flex flex-col gap-6">
    <MainTitle title="Politique de Confidentialité" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nunc nec nunc
      consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nunc nec nunc consectetur adipiscing elit. Sed ut
      purus eget nunc. Nullam nec nunc nec nunc consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nunc nec
    </p>
  </div>
</template>

<script>
import MainTitle from '../../layout/main-title/MainTitle.vue';
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
import InputForm from '@/components/input/InputForm.vue';

export default {
  name: 'PolitiqueConfidentialite',
  components: {
    PrimaryButton,
    InputForm,
    MainTitle
  },
}

</script>