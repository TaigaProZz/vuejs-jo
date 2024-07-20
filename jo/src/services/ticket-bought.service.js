import { axiosBase } from "./axios";

export default async function fetchTicketsBought() {
  try {
    const response = await axiosBase().get("/tickets-bought");
    return response.data;
  } catch (error) {
    throw error;
  }
}