const http = require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("wecome to home page")
    }
    else if(req.url==='/about'){
        res.end("wecome to about page")
    }
    else{
        res.end(`
        <h1> OOPS </h1>
        <a href= "/"> back home </a> `)
    }


    

})
server.listen(8080)