import { useEffect, useState } from "react";
import { getTickets } from "../../services/ticketingApi";
import type { TicketDto } from "../../dtos/TicketDto";

export function TicketsPage() {
  const [tickets, setTickets] = useState<TicketDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTickets().then((data) => {
      setTickets(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Carregando tickets...</p>;
  }

  return (
    <div>
      <h1>Lista de Tickets</h1>

      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            Ticket {ticket.id} - {ticket.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
