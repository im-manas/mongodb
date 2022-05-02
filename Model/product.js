const mongodb=require('mongodb')
const getDB=require('../Database/db').getDB

module.exports=class Product{
    constructor(title, price, description,pid)
    {
        this.title=title;
        this.price=price;
        this.description=description;
        this.id=pid;
    }
    saveData()
    {
        const db=getDB();
        let dbOperation;
        if(this.id)
        {
            dbOperation=db.collection('Product_data')
            .updateOne({_id:new mongodb.ObjectId(this.id)},{$set:this})
        }
        else{
            dbOperation=db.collection('Product_data').insertOne(this)
        }
        return dbOperation
        .then(results=>{
            console.log("Data inserted successfully");
        })
        .catch(err=>{
            console.log("Data not insert",err);
        })
    }

    static fetchData()
    {
        const db=getDB();
        return db.collection('Product_data').find().toArray()
        .then(products=>{
            return products;
        })
        .catch(err=>{
            console.log("product not found",err);
        })
    }

    static findById(product_id)
    {
        const db=getDB();
        return db.collection('Product_data').find({_id:new mongodb.ObjectId(product_id)}).next()
        .then(singleData=>{
            return singleData;
        })
        .catch(err=>{
            console.log("product not found",err);
        })
    }

    static deleteData(product_id)
    {
        const db=getDB()
        return db.collection('Product_data').deleteOne({_id:new mongodb.ObjectId(product_id)})
        .then(res=>{
            console.log("delete successfully");
        }).catch(err=>{
            console.log("error",err);
        })
    }

    static search(title)
    {
        const db=getDB()
        return db.collection('Product_data').find({title:title}).toArray()
        .then((result)=>{
            console.log("Search done..",result);
            return result
        }).catch(err=>{
            console.log("error",err);
        })
    }
}