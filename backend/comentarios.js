const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'rosalyJewelry';

let client 
let db
let comentariosCollection

// Cria a conexão
async function conectar() {
    client = await MongoClient.connect(url) 
    db = client.db(dbName);
    comentariosCollection = db.collection('comentarios');
}

async function inserirComentario (comentario) {
    await conectar()
    const result = await comentariosCollection.insertOne(comentario);
    console.log("Inseriu o comentário");
    client.close();
    return result
}

async function pegarComentarios () {
    await conectar()
    const cursor = await comentariosCollection.find()
    const result = []
    await cursor.forEach(function (comentario) {
        result.push(comentario)
    });
    client.close();
    return result
}

module.exports = {
    inserirComentario, pegarComentarios
}
