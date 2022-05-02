const mongodb=require('mongodb');
const mongo_Client=mongodb.MongoClient;

let db_url="mongodb+srv://manaspramanik:Manas_1999@cluster0.vpytl.mongodb.net/Products?retryWrites=true&w=majority";
let _db;

const mongo_connect=(callback)=>{
    mongo_Client.connect(db_url,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(clientData=>{
        console.log("Database connected...");
        _db=clientData.db('Products') //create database name
        callback();
    })
    .catch(err=>{
        console.log("Database is not connected..",err);
    })
}

const getDB=()=>{
    if(_db)
    {
        console.log("Database found");
        return _db;
    }
    else
    {
        console.log("Database not found");
    }
}

exports.mongo_connect=mongo_connect;
exports.getDB=getDB;