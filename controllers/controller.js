let collection = require('../models/Spidey');

const postSpiderman = (req,res) => {
    let spider = req.body;
    collection.postSpiderman(spider, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllSpideys = (req,res) => {
    collection.getAllSpideys((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteSpidey = (req,res) => {
    let spider = req.body;
    collection.deleteOne(spider, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postSpiderman,getAllSpideys}