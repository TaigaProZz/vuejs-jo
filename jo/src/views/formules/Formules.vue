<template>
  <MainTitle title="Nos tickets" />
  <!-- {/* List of TicketCard */} -->
  <div className="flex justify-center">
    <ul className="flex flex-col md:flex-wrap md:flex-row gap-20 mt-20 ">
      <li v-for="(item, index) in tickets" :key="index">
        <TicketCard :ticket="item" />
      </li>
    </ul>
  </div>
</template>

<script>
import MainTitle from '../../layout/main-title/MainTitle.vue';
import fetchTickets from '../../services/ticket.service';
import TicketCard from '@/components/cards/TicketCard.vue';

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
    async getTickets() {
      try {
        this.isLoading = true;
        this.tickets = await fetchTickets();
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    }
  },
  async mounted() {
    await this.getTickets();
  },
}

</script>