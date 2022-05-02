const ProductModel=require('../Model/product')  //this one is file name

exports.getAddProduct=(req,res)=>{
    res.render('Admin/add-product',{
        title:"Products"
    })
}

exports.postProductData=(req,res)=>{
    console.log("data:",req.body);
    let title=req.body.title;
    let price=req.body.price;
    let description=req.body.description;
    const formData=new ProductModel(title, price, description)
    formData.saveData()
    .then(results=>{
        console.log("Product is saved",results);
    })
    .catch(err=>{
        console.log("err to save",err);
    })
    res.redirect('/')
}

exports.getProductDetails=(req,res)=>{
    ProductModel.fetchData().then(Product=>{
        res.render('Admin/view-product',{
                title:"Details",
                data:Product
            })
    }).catch(err=>{
        console.log("data not found..",err);
    })
}

exports.postEditData=(req,res)=>{
    console.log("Edited data:",req.body);
    let title=req.body.title;
    let price=req.body.price;
    let description=req.body.description;
    let id=req.body.id;
    const updatedData=new ProductModel(title, price, description, id)
    updatedData.saveData()
    .then(results=>{
        console.log("Product is saved");
    })
    .catch(err=>{
        console.log("err to save",err);
    })
    res.redirect('/productDetails')
}

exports.getEdit=(req,res)=>{
    let product_id=req.params.pid;
    console.log("product id:",product_id);
    ProductModel.findById(product_id)
    .then(Product=>{
        res.render('Admin/edit',{
            title:"Edit Page",
            data:Product
        })
    }).catch(err=>{
        console.log("Product not found",err);
    })
}

// exports.getDeletedata=(req,res)=>{
//     let product_id=req.params.pid;   //use in get method
//     console.log("product id:",product_id);
//     ProductModel.deleteData(product_id)
//     .then(result=>{
//         console.log(result);
//         res.redirect('/productDetails')
//     }).catch(err=>{
//         console.log("error",err);
//     })
// }

exports.postDeletedata=(req,res)=>{
    let product_id=req.body.product_id  //use in post method
    console.log("product id:",product_id);
    ProductModel.deleteData(product_id)
    .then(result=>{
        console.log(result);
        res.redirect('/productDetails')
    }).catch(err=>{
        console.log("error",err);
    })
}