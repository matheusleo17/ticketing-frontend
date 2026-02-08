import { useState } from "react";
import { createOrder } from "../../services/orderService";

export function CreateOrderPage() {
  const [ticketId, setTicketId] = useState("");
  const [buyerId, setBuyerId] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [orderId, setOrderId] = useState<string | null>(null);

  async function handleSubmit() {
    try {
     const response = await createOrder({
        ticketId,
        buyerId,
    });

        setOrderId(response.orderId);
        setMessage("Pedido criado com sucesso!");
    } catch {
        setMessage("Erro ao criar pedido");
    }
  }



  return (
    <div>
      <h1>Criar Pedido</h1>

      <div>
        <input
          placeholder="Ticket Id"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
        />
      </div>

      <div>
        <input
          placeholder="Buyer Id"
          value={buyerId}
          onChange={(e) => setBuyerId(e.target.value)}
        />
      </div>


      <button onClick={handleSubmit}>Criar Pedido</button>

      {message && <p>{message}</p>}
        {orderId && (
        <p>
            <strong>OrderId:</strong>{orderId}
        </p>
      )}
    </div>
  );
}
