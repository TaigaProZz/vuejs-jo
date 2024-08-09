<template>
  <div class="flex flex-col gap-6">
    <MainTitle title="Conditions générales d'utilisation" />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nunc nec nunc
      consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nunc nec nunc consectetur adipiscing elit. Sed ut
      purus eget nunc. Nullam nec nunc nec nunc consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nunc nec
    </p>

    <MainTitle title="Mentions légales" class="mt-10" />
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
  name: 'Cgu',
  components: {
    PrimaryButton,
    InputForm,
    MainTitle
  },
}

</script>