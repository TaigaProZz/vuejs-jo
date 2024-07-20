<template>
  
  <div class="flex flex-col gap-10">
    <h1 class="text-4xl font-bold">Mes achats</h1>
    <TransactionCard v-if="ticketBought" :item="ticketBought" @download-ticket="downloadTicket" />
    <div v-else>Vous n'avez pas encore acheté de tickets.</div>
    <div v-if="isLoading" class="text-center">Chargement</div>
  </div>
</template>

<script>
import TransactionCard from '../../components/cards/TransactionCard.vue';
import fetchTicketsBought from '../../services/ticket-bought.service';
import jsPDF from 'jspdf';
import QRCode from 'qrcode';


export default {  
  name: 'Transactions',
  components: {
    TransactionCard,
  },
  props: {
    user: Object
  },

  data() {
    return {
      ticketBought: null,
      isLoading: false
    }
  },
  methods: {
    async downloadTicket(ticket) {
      if (!ticket || !ticket.finalKey) {
          return
        }

      // generate QR code
      const qrcodeDataUrl = await this.generateQRCode(ticket.finalKey)

      if (qrcodeDataUrl) {
        // create PDF
        const pdf = new jsPDF()
        pdf.text('Voici votre QR code :', 10, 20)
        pdf.addImage(qrcodeDataUrl, 'PNG', 0, 25, 80, 80)
        pdf.save('ticket.pdf')
      }
    },
    async generateQRCode(text) {
      try {
        return await QRCode.toDataURL(text)
      } catch (err) {
        console.error(err)
        return null
      }
    },
  },
  async mounted() {
    try {
      this.isLoading = true;
      this.ticketBought = await fetchTicketsBought();
    } catch (error) {
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }
}

</script>