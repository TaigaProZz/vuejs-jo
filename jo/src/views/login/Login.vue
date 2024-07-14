<template>
<div class="h-[50rem] flex items-center justify-center">
  <!-- form -->
  <form
    class="rounded-lg flex justify-between items-center px-10 pt-10 pb-6 flex-col h-[30rem] w-full md:w-96 bg-radial-custom-gradient drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)]"
    :onSubmit="formHandler">
    <div class="w-full flex flex-col items-center gap-6">
      <h1 class="text-2xl font-bold drop-shadow-[0_6px_8px_rgba(0,0,0,0.)]">Se connecter</h1>
      <!-- inputs -->
      <InputForm type="email" label="Email" placeholder="Entrez votre email" v-model="email" />
      <InputForm type="password" label="Mot de passe" placeholder="Entrez votre mot de passe" v-model="password" />
      <a class="text-end w-full underline underline-offset-2 cursor-pointer">Mot de passe oublié ?</a>
    </div>
    
    <div class="w-full flex flex-col items-center gap-2">
      <!-- login btn -->
      <PrimaryButton text="Se connecter" type="submit" />
      
      <p>Pas encore inscrit ?
        <a class="underline underline-offset-2 cursor-pointer" @click="this.$router.push('/register')">Inscrivez-vous ici</a>
      </p>
    </div>
  </form>
</div>
</template>

<script>
import { toast } from 'vue3-toastify';
import { login } from "@/services/account.service";

import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
import InputForm from '@/components/input/InputForm.vue';
import { mapActions } from 'pinia';
import { useUserStore } from '../../store';

export default {
  name: 'Login',
  components: {
    PrimaryButton,
    InputForm
  },

  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login,
    ...mapActions(useUserStore, ['logUser']),
    async formHandler (event) {
      event.preventDefault();

      console.log(this.email, this.password);
      // get data from inputs
      const data = {
        email: this.email.toLowerCase(),
        password: this.password
      };

      // check if inputs are not empty
      if (!data.email || !data.password || !data.email && !data.password) return console.error('Veuillez remplir tous les champs.')

      // print a toast for the promise
      try {
        const response = await toast.promise(
          login(data),
          {
            loading: 'Connexion...',
            success: 'Connexion réussie !',
            error: (err) => `Connexion échouée : ${err.response.data.message || ''}`,
          }
        );
        console.log("scc");
        // update user store
        console.log(response);
        this.logUser(response);
        this.$router.push('/profile')
      } catch (err) { }
    }
  }
}

</script>