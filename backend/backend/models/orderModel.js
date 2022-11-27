import mongoose from "mongoose";


const ordersSchema = mongoose.Schema({
    userId: {required:true, type:String},
    orderId: {required: true,type: String},
    items:[{
        imageId: {
            required: true, 
            type:String
        },
        title: {
            required: true, 
            type: String
        },
        quantity: {
            required: true, 
            type:String
        },
        cost: {
            required: true, 
            type:String
        }
    }],
    endCost: {required: true, type:Number}
},{
    timestamps: true,
    minimize: false
})

const Orders = mongoose.model('Orders', ordersSchema)

export default Orders