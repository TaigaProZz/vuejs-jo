<template>
  <MainTitle title="Nos tickets" />
  <!-- {/* List of TicketCard */} -->
  <div className="flex justify-center">
    <ul className="flex flex-col md:flex-wrap md:flex-row gap-20 mt-20 ">
      <li v-for="(item, index) in tickets" :key="index">
        <TicketCard :ticket="item" @add-cart="handleAddCart" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { fetchTickets } from '../../services/ticket.service';
import { useCartStore } from '../../stores/cart-module';
import TicketCard from '@/components/cards/TicketCard.vue';
import MainTitle from '../../layout/main-title/MainTitle.vue';

export default {
  name: 'Formules',
  components: {
    MainTitle,
    TicketCard
  },
  props: {
    user: Object
  },
  data() {
    return {
      tickets: [],
      isLoading: true
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addItem']),
    async getTickets() {
      try {
        this.isLoading = true;
        this.tickets = await fetchTickets();
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
    handleAddCart(ticket) {
      return this.addItem(ticket);
    }
  },
  async mounted() {
    await this.getTickets();
  },
}

</script>