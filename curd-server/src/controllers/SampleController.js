const sampleModel = require("../models/SampleModel");

exports.SampleItemsCreate = async (req, res) => {
    try{
        let reqBody = req.body;
        let d = await sampleModel.create(reqBody);
        console.log(d);
        res.json({status:"success", message:"Completed"})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}
exports.SampleItemsAll = async (req, res) => {
    try{
        let data = await sampleModel.find({});
        res.json({status:"success", data: data})
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.SampleItemsFindById = async (req, res) => {
    try{
        let id = req.params.id
        let data = await sampleModel.find({_id:id});
        res.json({status:"success", data:data[0]});
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}

exports.DeleteItemsFindById = async (req, res) => {
    try{
        let id = req.params.id
        await sampleModel.deleteOne({_id:id});
        res.json({status:"success", message:"success"});
    }catch (err) {
        res.json({status:"fail",message:err})
    }
}