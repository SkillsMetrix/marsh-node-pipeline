var express= require('express')
var app= express()

app.get('/showuser',(req,res)=>{

    res.send('user details found')
})
app.get('/adduser',(req,res)=>{

    res.send('user details added')
})


app.listen(3000,()=>{
    console.log('server is ready');
})