<template>
  <div class="h-[50rem] flex items-center justify-center">
    <form :onSubmit="formHandler"
      class="h-fit  rounded-lg flex justify-between gap-4 items-center px-4 sm:px-10 pt-6 pb-6 flex-col h-[44rem] w-full bg-radial-custom-gradient drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)] sm:w-96 md:pt-10">
      <div class="w-full flex flex-col items-center gap-6 ">
        <h1 class="text-2xl font-bold drop-shadow-[0_6px_8px_rgba(0,0,0,0.)] ">S'inscrire</h1>
        <!-- {/* email */} -->
        <InputForm type="email" label="Email" placeholder="Entrez votre email" errorMessage="Please enter a valid email" 
          v-model="email"
        />

        <!-- {/* passwords */} -->
        <div class="w-full">
          <InputForm type="password" label="Mot de passe" labelPlacement="inside" description=''
            placeholder="Entrez votre mot de passe" class="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" v-model="password" />
          <p class="text-[12px] mt-2 ml-1 text-[#71717A]">Le mot de passe doit contenir au moins 8 caractères, une lettre, un nombre et un caractère spécial.</p>
        </div>
       
        <InputForm isRequired type="password" label="Répéter mot de passe"
          placeholder="Confirmez votre mot de passe" class="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" v-model="password1" />

        <!-- {/* names */} -->
        <InputForm v-model="lastName" type="text" label="Votre nom" placeholder="Entrez votre nom"
          class="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
        <InputForm v-model="firstName" type="text" label="Votre prénom" placeholder="Entrez votre prénom"
          class="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />

        <!-- {/* checkbox */} -->
        <div class="w-full flex items-center">
          <input id="checkbox" type="checkbox" v-model="checkboxSelected" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600 cursor-pointer" />
          <label for="checkbox" class="text-text2 text-sm ml-2">J'accepte la<a @click="this.$router.push('/pdc')" class="text-creme cursor-pointer"> politique de confidentialité</a></label>
        </div>
      </div>

      <!-- {/* sign up button */} -->
      <div class="gap-3 mt-3 w-full flex flex-col items-center text-center">
        <PrimaryButton text="S'inscrire" type="submit" />
        <p>Déjà inscrit ?<button type="button" @click="this.$router.push('/login')"><span class="underline underline-offset-2 ml-2 cursor-pointer">Connectez-vous ici</span></button>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { register } from "@/services/account.service";

import PrimaryButton from "@/components/buttons/PrimaryButton.vue";
import InputForm from "@/components/input/InputForm.vue";
import { toast } from "vue3-toastify";
import { showErrorPopup } from "../../utils/toast/toast";

export default {
  name: 'Register',
  components: {
    PrimaryButton,
    InputForm
  },
  data() {
    return {
      checkboxSelected: false,
      isInvalid: false,
      email: '',
      password: '',
      password1: '',
      lastName: '',
      firstName: '',

      // regexs
      emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      // minimum eight characters, at least one letter, one number and one special character
      passwordRegex: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    }
  },
  methods: {
    validateEmail (value) {
      return this.emailRegex.test(value);
    },

    async formHandler (event) {
      event.preventDefault();

      const data = {
        email: this.email.toLowerCase(),
        password: this.password,
        password1: this.password1,
        surname: this.lastName,
        name: this.firstName,
      }

      // check if inputs are empty
      if (!data.email || !data.password || !data.password1 || !data.surname || !data.name) return showErrorPopup('Veuillez remplir tous les champs.');

      // validate email
      if (!this.validateEmail(data.email)) return showErrorPopup("Veuillez entrer un email valide.");

      // check if password is strong : Minimum eight characters, at least one letter, one number and one special character
      if (!this.passwordRegex.test(data.password)) return showErrorPopup("Le mot de passe n'est pas assez complexe.");

      // check if passwords match
      if (data.password !== data.password1) return showErrorPopup('Les mots de passe ne sont pas identiques.');

      // check if checkbox is checked
      if (!this.checkboxSelected) return showErrorPopup('Vous devez accepter la politique de confidentialité.');

      // delete unnecesseraly password 2
      delete data.password1;

      try {
        await toast.promise(
          register(data),
          {
            pending: 'Inscription...',
            success: 'Inscription réussie ! Vous pouvez vous connecter.',
            error: {
              render(error) {
                return `Inscription échouée ${error}`
              }
            } ,
          },
        );
        console.log('scc');
        // go to login
        this.$router.push('/login')
      } catch (err) { }
    }
  }
}
</script>