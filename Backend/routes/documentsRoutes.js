const express=require('express');

const Document=require('../models/document');
const { verifyToken }=require('../middleware/auth');

const router=express.Router();
//Get all documents
router.get('/',verifyToken,async(req,res)=>{
    
    try{
        const documents=await Document.find({});
        
        res.status(200).json(documents);
    }catch(err){
        console.error(err.message);
        res.status(500).json({error:'Server error'});
    }

}
);
//Get a single document
router.get('/:id',verifyToken,async(req,res)=>{
    
    try{
        const document=await Document.findById(req.params.id);
        
        if(!document){
            return res.status(404).json({msg:'Document not found'});
        }
        res.status(200).json(document);
    }catch(err){
        console.error("Error in Server",err);
        res.status(500).json({message:'Server error'})
        }

    });
//New document creation
router.post('/',verifyToken,async(req,res)=>{
    const {title,content}=req.body;
    try{
        const document=await Document.create({title,content,owner:req.user.id});
        
        res.status(201).json(document);
    }catch(err){
        
        res.status(500).json({message:'Server error'});
    }
}
);
//Update document
router.put('/:id',verifyToken,async(req,res)=>{
    const {title,content}=req.body;
    try{
        let document=await Document.findByIdAndUpdate(req.params.id,{title,content},{new:true});
        if(!document){
            return res.status(404).json({msg:'Document not found'});
        }
        
        res.status(200).json(document);
    }catch(err){
        //console.error(err.message);
        res.status(500).json({message:'Server error'});
    }
}
);
//Delete document
router.delete('/:id',verifyToken,async(req,res)=>{
    try{
        let document=await Document.findByIdAndDelete(req.params.id);
        if(!document){
            return res.status(404).json({msg:'Document not found'});
        }
        res.status(200).json({msg:'Document deleted'});
    }catch(err){
        console.error(err.message);
        res.status(500).json({message:'Server error'});
    }
}
);
module.exports=router;



