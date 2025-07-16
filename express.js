const express=require('express')
const app=express()
var path=require('path')

app.use(function(req,res,next){
    console.log('start')
    next()
})
app.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname,'form.html'))
     console.log('middle')
})
    app.use(function(req,res){
     console.log('end')
    })
app.post('/signup',function(req,res){
res.send('account created')

})
app.post('/about',function(req,res){
res.send('about')
})
app.listen(7000,()=>{
    // console.log(__dirname)
    console.log('server started')
})