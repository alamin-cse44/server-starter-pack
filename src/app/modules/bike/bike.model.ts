import { model, Schema } from 'mongoose';
import { IBike } from './bike.interface';

const bikeSchema = new Schema<IBike>({
    name: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
},
{
    timestamps: true,
})

export const BikeModel = model<IBike>("Bike", bikeSchema);