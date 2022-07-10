const { MongoClient } = require('mongodb');
const debug = require('debug')("app:module-database");

const{  Config } = require('../config');
var conection = null
module.exports.Database = (collection) => new Promise( async (resolve, reject) => {
    try {
        if (!conection){
            const client = new MongoClient(Config.mongoUri);
            conection = await client.connect();
            debug('Nueva conexion realizada con MongoDB Atlas');
        }
        debug('Reutilizando conexion')
        const db = conection.db(Config.mongoDbname);
        resolve(db.collection(collection))
    }catch (error){
        reject(error);
    }
})