import type { TicketDto } from "../dtos/TicketDto";

const API_URL = import.meta.env.VITE_API_URL;

export async function getTickets(): Promise<TicketDto[]> {
  const response = await fetch(`${API_URL}/tickets`);

  if (!response.ok) {
    throw new Error("Erro ao buscar tickets");
  }

  return response.json();
}
