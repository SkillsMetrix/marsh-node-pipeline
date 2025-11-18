var express= require('express')
var app= express()

app.get('/showuser',(req,res)=>{

    res.send('user details found again')
})
app.get('/adduser',(req,res)=>{

    res.send('user details added')
})


app.listen(4000,()=>{
    console.log('server is ready');
})
