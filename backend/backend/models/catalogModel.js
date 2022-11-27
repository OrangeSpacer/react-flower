import mongoose from "mongoose";

const ctalogSchema = mongoose.Schema({
    items: [
        {
            imageId:{type:String,required: true},
            nameItem:{type:String,required: true},
            tags: {type:Object,required:true},
            cost:{type:String,required: true},
            inCart:{type:Boolean,default:false}
        }
    ]
},{
    timestamps: true,
    minimize: false
})

const Catalog = mongoose.model('Catalog',ctalogSchema)

export default Catalog