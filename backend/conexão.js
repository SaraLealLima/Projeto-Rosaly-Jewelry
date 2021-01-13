const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.json({extended: true}))
app.use(cors())

let conexaoDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'rosalyjewelry'
})

conexaoDB.connect((error) => {
    if(error) {
        console.log('A conexão com o banco de dados falhou ' + error)
    } else {
        console.log('Conectado com sucesso ao banco de dados')
    }
})


app.get('/api/produtos', (req, res) => {
    let sql = 'SELECT * FROM produtos;'
    conexaoDB.query(sql, (error, result) => {
        if (error) {
            console.log('Erro ' + error)
        } else {
            res.send(result)
        }
    })
})

app.get('/api/produto', (req, res) => {
    let idproduto = req.query.idproduto 
    if (idproduto == undefined) {
        res.send('Você não passou um valor para o parametro idproduto')
        return
    } 
    let sql = 'SELECT * FROM produtos WHERE idproduto = ?'
    conexaoDB.query(sql, [idproduto], (error, result) => {
        if (error) {
            console.log('Erro ' + error)
            return
        } 
        res.send(result[0])
    })
})


app.get('/api/getmensagens', (req, res) => {
    let sql = "SELECT nome_cliente, mensagem FROM mensagens JOIN clientes ON clientes.id_cliente = mensagens.id_cliente LIMIT 10"
    conexaoDB.query(sql, (error, result) => {
        if (error) {
            console.log('Erro ' + error)
        } else {
            res.send(result)
        }
    })
})

app.post('/api/mensagem', (req, res) => {
    let post = req.body
    let email = post.email
    let nome = post.nome
    let mensagem = post.mensagem
    
    let sql1 = `INSERT INTO clientes (id_cliente, nome_cliente, email) VALUES(DEFAULT, '${nome}', '${email}')`
    let sql2 = `SELECT id_cliente FROM clientes WHERE email = '${email}'order by id_cliente desc limit 1`
    

    conexaoDB.query(sql1, (error, result) => {
        conexaoDB.query(sql2, (error, result) => {
            let sql3 = `INSERT INTO mensagens (id_msg, id_cliente, mensagem) VALUES (DEFAULT, '${result[0].id_cliente}', '${mensagem}')`
            conexaoDB.query(sql3, (error, result) => {
                res.send('Mensagem postada com muito inabalável sucesso')
            }) 
        })
    })
})

app.post('/api/pedido', (req, res) => {
    const pedido = req.body
    let sql = "INSERT INTO pedidos (idpedido, nomecliente, endereco, telefone, nomeproduto, valorunitario, quantidade, valortotal) VALUES (DEFAULT, ?, ?, ?, ?, ?, ?, (valorunitario * quantidade))"
    let valores = [
        pedido.nomecliente,
        pedido.endereco, 
        pedido.telefone, 
        pedido.nomeproduto, 
        pedido.valorunitario, 
        pedido.quantidade
    ]
    conexaoDB.query(sql, valores, (error, result) => {
        if (error) {
            console.log('Erro ' + error)
        } else {
            res.send(result)
        }
    })

})


app.listen(3030, () => {
    console.log('Servidor funcionando')
})

