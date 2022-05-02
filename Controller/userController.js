const ProductModel=require('../Model/product')


exports.getProductDetails=(req,res)=>{
    ProductModel.fetchData().then(Product=>{
        res.render('User/products',{
                title:"Details",
                data:Product
            })
    }).catch(err=>{
        console.log("data not found..",err);
    })
}

exports.getuserDetails=(req,res)=>{
    let product_id=req.params.pid;
    console.log("product id:",product_id);
    ProductModel.findById(product_id)
    .then(Product=>{
        res.render('User/productdetails',{
            title:"userDetails",
            data:Product
        })
    }).catch(err=>{
        console.log("Product not found...",err);
    })
}

exports.postSearchDetails=(req,res)=>{
    console.log("Search Value : ",req.body);
    let search=req.body.search;
    ProductModel.search(search).then(result=>{
        console.log("after searching:",result);
        res.render('User/products',{
            title:"details",
            data:result
        })
    }).catch(err=>{
        console.log("err",err);
    })
}