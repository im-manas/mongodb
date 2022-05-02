const express=require('express');
const port=3006;
const appServer=express();
const path=require('path')

//router setup, import router
const homeRouting=require('./Router/homeRoute')
const adminRouting=require('./Router/adminRoute')
const userRouting=require('./Router/userRoute')

//connect database
const mongoConnect=require('./Database/db').mongo_connect;

//express url encoded
appServer.use(express.urlencoded());

//ejs setup
appServer.set('view engine','ejs')
appServer.set('views','View')

//static files setup
appServer.use(express.static(path.join(__dirname,'Public')))

//after import router, use here
appServer.use(homeRouting)
appServer.use(adminRouting)
appServer.use(userRouting)

//port setup(mongodb)
mongoConnect(()=>{
    appServer.listen(port,()=>{
        console.log(`Server connected at http://127.0.0.1:${port}`);
    })
})

