// const orderModel = require('../models/orderModel');


const createNewOrder = async (req,res) => {
    console.log(req.body);
    //const {shippingInfo, shippingMethod, orderItems, paymentInfo, itemsAmount, taxAmount, shippingAmount, paymentAmount } = req.body;
    const shippingInfo = req.body.shippingInfo;
    const orderItems = req.body.orderItems;
    const paymentInfo = req.body.paymentInfo;
    const itemsAmount = req.body.itemsAmount;
    const taxAmount = req.body.taxAmount;
    const paymentAmount = req.body.paymentAmount;
    const userEmail = req.body.userEmail;
    const orderStatus = req.body.orderStatus;
    try{
        const order = await orderModel.create(
            {
                shippingInfo,
                shippingMethod,
                orderItems,
                userEmail,
                orderStatus,
                paymentInfo,
                itemsAmount,
                taxAmount,
                shippingAmount,
                paymentAmount,
                paidAt: Date.now(),
                //user: req.user._id,
            }
        );
    
        res.status(201).send({
            "success": true,
            "message": "New Record Created"
        }    
        );
    }catch(err){
        console.log(err)
    }

    
}

module.exports = {createNewOrder};