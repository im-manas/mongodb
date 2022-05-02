const express=require('express')
const user_router=express.Router()
const user_controller=require('../Controller/userController')


user_router.get('/userproduct',user_controller.getProductDetails)
user_router.get('/details/:pid',user_controller.getuserDetails)
user_router.post('/search',user_controller.postSearchDetails)


module.exports=user_router