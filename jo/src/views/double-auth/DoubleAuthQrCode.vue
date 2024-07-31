<template>
  <div class="flex flex-col gap-10">
    <MainTitle title="Double Authentification" />
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-6">
        <p>Scannez le QR code ci-dessous avec votre application d'authentification</p>
        <img :src="qrcode" alt="qrcode" class="w-3/12"/>
      </div>
      <form :onSubmit="formHandler" class="flex flex-col gap-4 w-6/12">
        <InputForm v-model="otpCode" type="text" label="Code généré" placeholder="Le code affiché sur l'application d'authentification" />
        <PrimaryButton text="Continuer" type="submit" />
        <PrimaryButton text="Déconnexion" type="text" @click="logoutClick" />
      </form>
    </div>
  </div>
</template>

<script>
import HeroButton from '../../components/buttons/HeroButton.vue';
import SportCard from '../../components/cards/SportCard.vue';
import MainTitle from '../../layout/main-title/MainTitle.vue';
import PrimaryButton from '../../components/buttons/PrimaryButton.vue';
import InputForm from '../../components/input/InputForm.vue';
import { axiosBase } from '../../services/axios';
import { verifyOtp, logout } from '../../services/account.service';

export default {
  name: 'DoubleAuthQrCode',
  components: {
    HeroButton,
    SportCard,
    MainTitle,
    PrimaryButton,
    InputForm
  },
  props: {
    user: Object
  },
  data() {
    return {
      opts: {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
        quality: 0.3,
        margin: 1,
        color: {
          dark: "#010599FF",
          light: "#FFBF60FF"
        }
      },
      qrcode: '',
      otpCode: ''
    }
  },
  mounted() {
    this.generateQRCode();
  },
  methods: {
    async logoutClick() {
      await logout();
      this.$router.push('/login');
    },
    async generateQRCode() {
      const res = await axiosBase().post('auth/2fa/setup');
      this.qrcode = res.data.qrcode;
      console.log(this.qrcode);
    },
    async formHandler(event) {
      event.preventDefault();
      console.log(this.otpCode);
      const res = await verifyOtp(this.otpCode);
      console.log(res);
    }
  },
}
</script>


