var Datastore = require('nedb')
    ,dbName = 'data.db'
    ,db;

if(!db) {
    db = new Datastore({
        filename: dbName, 
        autoload: true 
    });
    console.log('Banco de dados ' + dbName + ' de imagem pronto para uso !')
}

module.exports = db;