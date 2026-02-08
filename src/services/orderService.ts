import type { CreateOrderRequestDto } from "../dtos/CreateOrderRequestDto";
import type { CreateOrderResponseDto } from "../dtos/CreateOrderResponseDto";
const API_URL = import.meta.env.VITE_API_URL;

export async function createOrder(
  request: CreateOrderRequestDto
): Promise<CreateOrderResponseDto> {
  const response = await fetch(`${API_URL}/api/Orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar pedido");
  }
    return response.json();

}
