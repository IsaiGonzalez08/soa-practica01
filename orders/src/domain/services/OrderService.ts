import { Order } from '../models/Order';

export interface OrderService {
  crearOrden(total: number, status: 'Creado' | 'Pagado' | 'Enviado'): Promise<Order>;
  listaOrdenes(): Promise<Order[]>;
  actualizarOrden(orderId: string, status: 'Creado' | 'Pagado' | 'Enviado'): Promise<Order | null>;
}
