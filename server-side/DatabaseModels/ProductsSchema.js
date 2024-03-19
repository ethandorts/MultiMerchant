import mongoose from 'mongoose';
import Users from '../DatabaseModels/UsersSchema.js';

const RatingsSchema = new mongoose.Schema({
    ProductStarRating: {
        type: Number,
        required: true
    }, 
    ProductRatingDescription: {
        type: String, 
        required: true
    },
    Buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Users,
        required: true
    }
})

const ProductsSchema = new mongoose.Schema ({
    ProductName : {
        type: String,
        required: true,
        maxlength: 100
    },
    ProductPrice: {
        type: Number,
        required: true
    },
    ProductDescription : {
        type: String,
        required: true
    }, 
    ProductCategory : {
        type: String, 
        required: true,
        enum: ['T-Shirts', 'Coats', 'Shorts', 'Jumpers', 'Sweatshirts', 'Joggers', 'Trainers', 'Shoes']
    },
    ProductStock: {
        type: Number, 
        required: true
    },
    ProductBrand: {
        type: String,
        required: true
    },
    ProductColour : {
        type: String,
        required: true
    },
    ProductCondition: {
        type: String,
        required: true
    }, 
    ProductConditionDescription: {
        type: String, 
        required: true
    },
    ProductRating: {
        type: RatingsSchema
    },
    Seller: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    }
})

const Products = mongoose.model('Products', ProductsSchema);

export default Products;
