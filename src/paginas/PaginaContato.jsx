import React, { Component } from 'react';
import { Container, ListGroup, Col, Row } from 'react-bootstrap';

class PaginaContato extends Component {
    constructor(props) {
        super(props)
        this.state = {mensagens: []}
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("http://rosalyjewelrybackend/api/getmensagens.php");
        const json = await resposta.json();
        this.setState({ mensagens: json});
    }
    

    async enviarMensagem(evento) {
        evento.preventDefault()
        const formMensagem = new FormData(evento.target);
        console.log(evento)
        const resposta = await fetch('http://rosalyjewelrybackend/api/mensagem.php', {
            body: formMensagem, 
            method: 'POST', 
        })
        console.log(await resposta.text())
        if (resposta.status === 200) {
            alert('Mensagem enviada!')
            var msg = {nome_cliente: formMensagem.get('nome'), mensagem: formMensagem.get('mensagem')}
            this.setState({mensagens: this.state.mensagens.concat(msg)})
        } else {
            alert('A mensagem não pode ser enviada.')
        }
    }

    render() {
        return (
        <div>
            <div className="texto-padrao container ml-sm-0 ml-md-5 mt-5">
                <p id="titulo">FALE CONOSCO</p>
                <p> Estamos sempre prontos para te atender!</p>
                <p>Nosso telefone para atendimento referente a compras realizadas nas nossas lojas físicas: <br/>
                (11) 4358-6732 <br/> <br/>
                Para compras realizadas pelo site: <br/>
                (11) 4360-5859</p>
                <p>Ou se preferir, entre em contato pelo nosso e-mail: <br/>
                atendimento@rosalyjewelry.com.br</p>
                <br/>

                <p>Abaixo você pode deixar um comentário ou sugestão:</p>
                
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">

                            <div className="form-group">
                                <form onSubmit={(evento)=> this.enviarMensagem(evento)}>
                                    <label htmlFor="email">Seu endereço de e-mail:</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="email" placeholder="Digite seu email"/> <br/>

                                    <label htmlFor="nome" >Seu nome: </label> <br/>
                                    <input className="form-control" type="text" name="nome" id="nome" placeholder="Seu nome aqui"/> <br/>
                                    
                                    <label htmlFor="mensagem">Digite aqui sua mensagem</label>
                                    <textarea className="form-control" name="mensagem" id="mensagem" rows="4" placeholder="Sua mensagem..."></textarea>
                                
                                    <br/>
                                    <button type="submit" className="add-btn mb-5">Enviar</button> <br/>
                                </form>
                            </div>

                        
                        </div>
                    </div>
                
            </div>

            <Container fluid className="mb-5 mx-5">
                <Row>
                    <Col xs={6}>
                        <h3>Comentários dos nossos clientes:</h3> <br/>
                        <ListGroup>
                        {this.state.mensagens.map(mensagem => (
                            <ListGroup.Item>
                            <h5>{mensagem.nome_cliente}</h5>
                            <p>{mensagem.mensagem}</p>
                            </ListGroup.Item>
                        ))}
                        
                        </ListGroup>
                        
                    </Col>
                    
                </Row>
                
            </Container>
           

        </div>
    )

    }
    
}

export default PaginaContato;