var http=require('http')
var fs=require('fs')
var url=require('url')

http.createServer(function(req,res){
    var q=url.parse(req.url,true)
    if(q.pathname==='/'){
    fs.readFile('hm.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
})
    }
    else if(q.pathname==='/form'){
        fs.readFile('form.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data)
    res.end()
        })
    }
    else if(q.pathname==='/signup'){
         res.writeHead(200,{'Content-Type':'text/html'})
         res.write('<h1>'+q.query.fname+'</h1>')
         res.write('<h1>'+q.query.lname+'</h1>')
         res.write('<h1>'+q.query.phone+'</h1>')
         res.end()       
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write('error')
        res.end()
    }
}).listen(7000,()=>
    console.log('server start')
)
