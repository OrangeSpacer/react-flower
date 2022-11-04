import mongoose from "mongoose";

const cartSchema = mongoose.Schema({
    _id:{type:String,required:true},
    title:{type:String,required: true},
    cost:{type:String,required:true},
    quantity:{type:String,required:true},
    imageId: {type:String,required: true}
},{
    minimize:false,
})

const Cart= mongoose.model('CartItem',cartSchema)

export default Cart