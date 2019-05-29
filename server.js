var http = require('http')
    ,app = require('./config/express')
    db = require('./config/database');

http.createServer(app).listen(3939, function() {
    console.log('By Cleiton Silva. Entre com o endereço http://localhost:' + this.address().port) + '/';
});

