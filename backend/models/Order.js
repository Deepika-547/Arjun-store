const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    name: String,
    phone: String,
    items: Array,
    totalAmount: Number,
    address: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Order", OrderSchema);