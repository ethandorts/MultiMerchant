import mongoose, { Mongoose, Schema } from 'mongoose';
import Users from '../DatabaseModels/UsersSchema.js';
import Product from './ProductsSchema.js';

const addressSchema = new mongoose.Schema({
    StreetAddress: {type: String, required: true, minlength:5, maxlength: 150},
    City: { type: String, required: true, minlength:3},
    PostCode: { type: String, required: true, validate: {validator: function(postcode_value) { return /^(BT\d{1,3} ?\d[ABD-HJLNP-UW-Z]{2})$/i.test(postcode_value);}}},
    Country: { type: String, required: true}
})

const OrderItemsSchema = new mongoose.Schema({
    Product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Products'
    },
    Seller: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    Quantity: {
        type: Number, 
        required: true
    }, 
    Price: {
        type: Number, 
        required: true
    }
})

const OrdersSchema = new mongoose.Schema({
    Buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    OrderItemsInfo: [OrderItemsSchema],
    OrderDate: {
        type: Date,
        require: true,
        default: Date.now
    },
    TotalPrice: {
        type: Number,
        required: true
    },
    ShippingAddress: {
        type: addressSchema,
        required: true
    },
    PaymentMethod: {
        type: String,
        required: true,
        enum: ['Credit Card', 'Debit Card', 'PayPal']
    },
    PaymentStatus: {
        type: String,
        required: true,
        enum: ['Paid', 'Not Paid']
    }
});

OrdersSchema.pre('save', async function(next) {
    try {
        const buyer = await User.findById(this.Buyer);
        if(!buyer) {
            throw new Error('Buyer was not found in the User collection');
        }
        this.ShippingAddress = buyer.Address;
        for (const orderItem of this.OrderItemsInfo) {
            const product = await Product.findById(orderItem.Product);
            if (!product) {
                throw new Error(`Product with ID ${orderItem.Product} not found`);
            }
            orderItem.Quantity = product.Quantity;
            orderItem.Price = product.ProductPrice;
        }
        this.TotalPrice = this.OrderItemsInfo.reduce((total, item) => total + (item.Quantity * item.Price), 0);
        next();
    } catch (err) {
        next(err);
    }});

const Order = mongoose.model('Order', OrdersSchema);

export default Order;