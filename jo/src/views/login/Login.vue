<template>
<div class="h-[50rem] flex items-center justify-center">
  <!-- form -->
  <form
    class="rounded-lg flex justify-between items-center px-10 pt-10 pb-6 flex-col h-[30rem] w-full md:w-96 bg-radial-custom-gradient drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)]"
    :onSubmit="formHandler">
    <div v-if="!otpCodeVerification" class="w-full flex flex-col items-center gap-6">
      <h1 class="text-2xl font-bold drop-shadow-[0_6px_8px_rgba(0,0,0,0.)]">Se connecter</h1>
      <!-- inputs -->
      <InputForm type="email" label="Email" placeholder="Entrez votre email" v-model="email" />
      <InputForm type="password" label="Mot de passe" placeholder="Entrez votre mot de passe" v-model="password" />
      <a class="text-end w-full underline underline-offset-2 cursor-pointer">Mot de passe oublié ?</a>
    </div>
    <!-- otp code form -->
    <div v-else class="w-full flex flex-col items-center gap-6">
      <p>Rentrez le code généré sur votre application d'authentifaction.</p>
      <InputForm type="text" label="Code de vérification" placeholder="Entrez le code de vérification" v-model="otpCode" />
    </div>

    <div class="w-full flex flex-col items-center gap-2">
      <!-- login btn -->
      <PrimaryButton :text="otpCodeVerification ? 'Se connecter' : 'Continuer'" type="submit" />
      
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
import { mapActions } from 'pinia';
import { useUserStore } from '../../stores/user-module';
import { showErrorPopup } from '../../utils/toast/toast';
import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
import InputForm from '@/components/input/InputForm.vue';

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
      options:{
        position: toast.POSITION.BOTTOM_RIGHT,
        theme: toast.THEME.DARK
      },
      otpCodeVerification: false,
      otpCode: null
    }
  },
  methods: {
    login,
    ...mapActions(useUserStore, ['logUser', 'handleDoubleAuthSetup', 'handleIsLoggedIn']),

    async formHandler (event) {
      event.preventDefault();

      // get data from inputs
      const data = {
        email: this.email.toLowerCase(),
        password: this.password,
        otpCode: this.otpCode
      };

      // check if inputs are not empty
      if (!data.email || !data.password || !data.email && !data.password) return showErrorPopup('Veuillez remplir tous les champs.')
      if(this.otpCodeVerification && !this.otpCode) return showErrorPopup('Veuillez entrer le code de vérification.');

      // print a toast for the promise
      try {
        // try to login
        const response = await login(data);
      
        // update user store
        this.logUser(response);
        this.$router.push('/profile')
      } catch (error) { 
        // handle errors

        // if email or password is incorrect
        if (error.response.data.message === 'Veuillez vérifier vos identifiants de connexion.') {
          showErrorPopup('Email ou mot de passe incorrect.');
        }

        // if login is successfull but 2fa is not activated
        if (error === '2FA n\'est pas activé.') {
          // update user store
          this.handleDoubleAuthSetup(true);
          return this.$router.push('/double-auth-qrcode');
        }

        // if 2fa is activated, display otp code input
        if (error.response.data.message === '2fa code needed.') {
          console.log('2fa code needed.');
          return this.otpCodeVerification = true;
        } 

        // if 2fa code is incorrect
        if (error.response.data.message === 'Invalid 2fa token.') {
          showErrorPopup('Code de vérification incorrect.');
        }
      }
    }
  }
}

</script>