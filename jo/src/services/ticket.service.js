import { axiosBase } from "./axios";
import { showErrorPopup } from '@/utils/toast/toast';

async function fetchTickets() {
  try {
    const response = await axiosBase().get("/ticket");
    return response.data;
  } catch (error) {
    throw error;
  }
}

/*
  * to redirect to stripe to buy a ticket
  * @param {string} id - Stripe id of the ticket
  * @returns {void}
  * @throws {Error} 
  */
async function buyTicket(id) {
  try {
    const response = await axiosBase().post('/stripe/', {
      stripePriceId: id
    });
    window.location.href = response.data.url;
  } catch (error) {
    showErrorPopup('Une erreur est survenue lors de l\'achat du ticket');
  }
}

export { fetchTickets, buyTicket };