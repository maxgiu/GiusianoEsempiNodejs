    let express=require("express")
    let app=express()

    app.get("/",(req,res)=>{
        res.send("sono la pagina Home")
    })

    app.get("/seconda",(req,res)=>{
        res.sendFile(__dirname+"/HTML/index.html")
    })

    app.get("/form",(req,res)=>{
        res.sendFile(__dirname+"/HTML/client.html")
    })


    app.listen(3001, ()=>{
        console.log("server in esecuzione su porta 3001")
    })