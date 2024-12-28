const mongoose=require('mongoose');

const documentSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
},{
    timestamps:true
});

module.exports=mongoose.model('Document',documentSchema);