import express from 'express';
import { placeOrder, placeOrderMpesa, placeOrderStripe, allOrders, userOrders, updateOrderStatus, verifyStripe } from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/userAuth.js';

const orderRouter = express.Router();

//Admin routes
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateOrderStatus);

//payment routes
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/mpesa', authUser, placeOrderMpesa);

//user routes
orderRouter.post('/userorders', authUser, userOrders);

//Verify stripe payment
orderRouter.post('/verifyStripe', authUser, verifyStripe);

export default orderRouter;
