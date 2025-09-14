import OrderModel from "../models/OrderModel.js";
import UserModel from "../models/UserModel.js";
import Stripe from 'stripe';

//Global variables
const currency = 'usd';  //currency for stripe and razorpay
const deliveryCharge = 10; //delivery charges for each order

//stipe gateway instance
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


//Placing order using cash on delvery method (COD)
const placeOrder = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new OrderModel(orderData);
        await newOrder.save();

        //clear user cart data
        await UserModel.findByIdAndUpdate(userId, {cartData: {}});

        res.json({success: true, message: 'Order placed successfully!'});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Placing order using Stripe
const placeOrderStripe = async (req, res) => {
    try {
        const {userId, items, amount, address} = req.body;
        const {origin} = req.headers;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: 'Stripe',
            payment: false,
            date: Date.now()
        }

        const newOrder = new OrderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }));

        line_items.push({
            price_data: {
                currency: currency,
                product_data: {
                    name: 'Delivery Charges'
                },
                unit_amount: deliveryCharge * 100
            },
            quantity: 1
        });

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment'
        });

        res.json({success: true, session_url: session.url});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Verify stripe
const verifyStripe = async (req, res) => {
    const {orderId, success, userId} = req.body;

    try {
        if(success === 'true') {
            await OrderModel.findByIdAndUpdate(orderId, {payment: true});
            await UserModel.findByIdAndUpdate(userId, {cartData: {}});
            res.json({success: true});
        } else {
            await OrderModel.findByIdAndDelete(orderId);
            res.json({success: false});
        }
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Placing order using razorpay
const placeOrderMpesa = async (req, res) => {
    
}

//All orders data for admin panel
const allOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find({});
        res.json({success: true, orders});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//User order data
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body;
        const orders = await OrderModel.find({userId});
        res.json({success: true, orders});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

//Update order status (admin)
const updateOrderStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;
        await OrderModel.findByIdAndUpdate(orderId, {status});
        res.json({success: true, message: 'Order status updated successfully!'});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {
    placeOrder, placeOrderStripe, placeOrderMpesa,
    allOrders, userOrders, updateOrderStatus, verifyStripe
};