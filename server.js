const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
app.use (bodyParser.json());
const porta = 3000;
app.set('port', porta);

let contador = 2;

const clientes = [
    {
    id: 1,
    Prodnome: 'Joao',
    ProdUnidade: "3",
    ProdValorUnin : "20.0",
    },
    {
        id: 2,
        Prodnome: 'Joao',
        ProdUnidade: "1",
        ProdValorUnin : "20.0",
    }
    ]
    app.get('/cliente', (req, res, next) => {
        res.json(clientes);
        });
    app.post('/cliente', (req, res, next) => {
        const cliente = req.body;
        clientes.push({id: contador += 1, nome: cliente.Prodnome, unidade: cliente.ProdUnidade,Unidade:cliente.ProdValorUnin});
        console.log(clientes);
        res.end();
            });
    app.put("/cliente/:id", (req,res,next)=>{
        const clienteComDadosNovos = req.body;
        const index = clientes.findIndex(c=>c.id === parseInt(req.params.id));
        const clienteParaAtualizar = clientes[index];
                
        clienteParaAtualizar.Prodnome =  clienteComDadosNovos.Prodnome;
        clienteParaAtualizar.ProdUnidade = clienteComDadosNovos.ProdUnidade;
        clienteParaAtualizar.ProdValorUnin = clienteComDadosNovos.ProdValorUnin;

                
        res.status(204).send();
            
            });
    app.delete("/cliente/:id", (req,res, next)=>{
        const idParam = req.params.id;
        const index = clientes.findIndex(c=>c.id === parseInt(idParam));
        clientes.splice(index,1)
        res.status(204).send();

    

    });

    const porta = 3000;
    app.set('port', porta);
    const server = http.createServer(app);
    server.listen(3000);
    
