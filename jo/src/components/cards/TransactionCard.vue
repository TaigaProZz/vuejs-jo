<template>
<div
  class="flex flex flex-col min-w-[260px] h-auto max-w-[620px] w-full justify-start rounded-lg justify-between gap-[14px] bg-graySecondary text-text2   drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px]">
  <div class="w-full flex justify-between">
    <h2 class="text-[20px] font-bold">{{ item.ticket.name }}</h2>
    <p class="text-sm"> {{ handleDate(item.date) }} </p>
  </div>
  <div class="flex justify-between items-end">
    <p class="ml-1 text-sm w-10/12">{{ item.ticket.description }}</p>
    <img src="@/assets/icons/download.svg" alt="download ticket" class="w-6 h-6 cursor-pointer" @click="downloadTicket" />
  </div>
<!-- {{ item }} -->
</div>
</template>

<script>

export default {
  name: 'TransactionCard',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    downloadTicket() {
      this.$emit('download-ticket', this.item);
    },
    handleDate(date) {
      return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  }
}
</script>
