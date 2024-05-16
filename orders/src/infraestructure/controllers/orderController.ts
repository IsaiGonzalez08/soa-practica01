import { Request, Response } from 'express';
import { OrderUseCase } from '../../application/usecases/OrderUseCase';

export class OrderController {
  constructor(private orderUseCase: OrderUseCase) { }

  async crearOrden(req: Request, res: Response) {
    try {
      const { total, status } = req.body;
      const order = await this.orderUseCase.crearOrden(total, status);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Error al crear la orden' });
    }
  }


  async listaOrdenes(req: Request, res: Response) {
    try {
      const orders = await this.orderUseCase.listaOrdenes();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error al buscar las ordenes' });
    }
  }

  async actualizarOrden(req: Request, res: Response) {
    const orderId = req.params.id;
    const { status } = req.body;
    try {
      const order = await this.orderUseCase.actualizarOrden(orderId, status);
      if (!order) {
        res.status(404).json({ message: 'Orden no encontrada' });
      } else {
        res.json(order);
      }
    } catch (error) {
      res.status(500).json({ message: 'Error actualizando el estado de la orden' });
    }
  }
}
