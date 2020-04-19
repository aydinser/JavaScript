var express = require('express');
var app = express();
var PORT = 3000;

var middleware  = {
    requireAuthentication : function(req,res,next){
        console.log('Özel route girildi')
        next();
    },
    logger : function(req,res,next){
        console.log(req.method + " " + req.orginalUrl);
        next();

    }
}

app.use(middleware.logger);

app.get('/',middleware.requireAuthentication,function(req,res,next){
    res.send('sayfa acilis')
})

app.get('/hakkimda',middleware.requireAuthentication, function(req,res){
    res.send('<h4>Bu sayfa benin hakkimdaki bilgileri kapsamaktadir</h4>')
})

app.use(express.static(__dirname + '/public'));

app.listen(PORT,function(){
    console.log('server ' + PORT + ' nolu portaata alisiyor')
})


