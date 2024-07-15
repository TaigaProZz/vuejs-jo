<template>
  
  <div class="flex flex-col gap-10">
    <h1 class="text-4xl font-bold">Mon Profil</h1>
    <InputForm type="email" label="Email" :disabled="true" :required="false" v-model="user.email" />
    <InputForm type="text" label="Nom" :disabled="true" :required="false" v-model="user.surname" />
    <InputForm type="text" label="Prénom" :disabled="true" :required="false" v-model="user.name" />
  </div>
</template>

<script>
import InputForm from '@/components/input/InputForm.vue';
import MainTitle from '../../layout/main-title/MainTitle.vue';
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';

export default {  
  name: 'Profile',
  components: {
    InputForm,
    MainTitle,
    PrimaryButton
  },
  props: {
    user: Object
  },

  data() {
    return {
    }
  },
  methods: {
  }
}

</script>