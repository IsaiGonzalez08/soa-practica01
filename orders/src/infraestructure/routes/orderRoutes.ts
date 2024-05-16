import express from 'express';
import { OrderController } from '../controllers/orderController';
import { OrderUseCase } from '../../application/usecases/OrderUseCase';
import { OrderRepositoryImpl } from '../repositories/orderRepositoryImp';

const router = express.Router();

const orderRepository = new OrderRepositoryImpl();
const orderUseCase = new OrderUseCase(orderRepository);
const orderController = new OrderController(orderUseCase);

router.post('/orders', async (req, res) => await orderController.crearOrden(req, res));
router.get('/orders', async (req, res) => await orderController.listaOrdenes(req, res));
router.put('/orders/:id/status', async (req, res) => await orderController.actualizarOrden(req, res));

export default router;