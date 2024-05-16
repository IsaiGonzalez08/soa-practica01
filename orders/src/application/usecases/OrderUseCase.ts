import { OrderService } from '../../domain/services/OrderService';
import { Order } from '../../domain/models/Order';

export class OrderUseCase {
  constructor(private orderService: OrderService) { }

  async crearOrden(total: number, status: 'Creado' | 'Pagado' | 'Enviado'): Promise<Order> {
    try {
      const order = await this.orderService.crearOrden(total, status);
      return order;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating order');
    }
  }


  async listaOrdenes(): Promise<Order[]> {
    return this.orderService.listaOrdenes();
  }

  async actualizarOrden(orderId: string, status: 'Creado' | 'Pagado' | 'Enviado'): Promise<Order | null> {
    return this.orderService.actualizarOrden(orderId, status);
  }
}