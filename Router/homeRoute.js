const express=require('express')
const homeRoute=express.Router()

const home_controller=require('../Controller/homeController')


homeRoute.get('/',home_controller.getHome)



module.exports=homeRoute;