const { Schema, model, models } = require("mongoose");

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    cat: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    image: {
        type: String
    },
    color: {
        type: String,
        trim: true
    },
    size: {
        type: String,
        trim: true
    }
}, { timestamps: true });

export const Product = models.Product || model("Product", productSchema);