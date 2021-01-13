import React, { Component } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import Produto from '../components/Produto';
import Imagem from '../components/Imagem';
import { withRouter } from 'react-router-dom';

class PaginaProdutos extends Component {
    constructor(props) {
        super(props)
        this.state = { produtos: [], produtosFiltrados: [], produtoClicado: null, show: false };
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("/api/produtos");
        const json = await resposta.json();
        this.setState({ produtos: json, produtosFiltrados: json, produtoClicado: this.state.produtoClicado, show: false });
    }

    exibirCategoria(categoria) {
        if (categoria === 'todos') {
            this.setState({ produtos: this.state.produtos, produtosFiltrados: this.state.produtos, produtoClicado: this.state.produtoClicado, show: false })
        } else {
            let produtosFiltrados = this.state.produtos.filter((produto) => {
                return produto.categoria.toLowerCase() === categoria
            })
            this.setState({ produtos: this.state.produtos, produtosFiltrados: produtosFiltrados, produtoClicado: this.state.produtoClicado, show: false })
        }
    }

    handleClose() {
        this.setState({produtos: this.state.produtos, produtosFiltrados: this.state.produtosFiltrados, produtoClicado: this.state.produtoClicado, show: false })
    }

    handleOpen(produto) {
        this.setState({produtos: this.state.produtos, produtosFiltrados: this.state.produtosFiltrados, produtoClicado: produto, show: true})
    }


    irParaPaginaPedido(idproduto) {
        this.props.history.push("/paginaPedido/"+idproduto)
    }

    render() {
        return (
            <div>
                <div className="texto-padrao container ml-sm-0 ml-md-5 mt-5">
                    <p id="titulo">NOSSOS PRODUTOS</p>
                    <p> Confira nossas incríveis jóias, todas trabalhadas no
                mais exigente padrão de qualidade, elaboradas com cuidado e elegância. <br />
                Aproveite pois estamos no nosso mês de aniversário, <strong> todas as jóias com descontos imperdíveis!</strong>
                    </p>
                </div>

                <br />

                <div className="container mb-5 w-50">
                    <div className="alert alert-warning" role="alert">
                        <strong>Atenção</strong>, promoção válida apenas para esse mês!
                    </div>
                    <div className="alert alert-primary" role="alert">
                        <strong>FRETE GRÁTIS</strong> para compras de 2 jóias ou mais!
                    </div>
                </div>

                <br />
                <Container fluid>
                    <Row>
                        <Col sm={12} md={4} lg={3}>
                            <aside className="categorias">
                                <p>CATEGORIAS</p>
                                <ul>
                                    <li onClick={() => this.exibirCategoria('todos')}>Todas as jóias (15)</li>
                                    <li onClick={() => this.exibirCategoria('aliança')}>Alianças (3) </li>
                                    <li onClick={() => this.exibirCategoria('anel')}>Anéis (3)</li>
                                    <li onClick={() => this.exibirCategoria('colar')}>Colares (3) </li>
                                    <li onClick={() => this.exibirCategoria('brinco')}>Brincos (3) </li>
                                    <li onClick={() => this.exibirCategoria('pulseira')}>Pulseiras (3) </li>
                                </ul>
                            </aside>
                        </Col>
                        <Col sm={12} md={8} lg={9}>
                            {this.state.produtosFiltrados && this.state.produtosFiltrados.map(produto => <Produto onClick={() => this.handleOpen(produto)} produto={produto} key={produto.idproduto} />)}
                        </Col>
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton bsPrefix="modal-header-custom mt-4 mr-4"> </Modal.Header>
                    {this.state.produtoClicado === null ? '' : 
                     <div className="modal-box-produto mb-5">
                        <Imagem key={this.state.produtoClicado.idproduto} src={this.state.produtoClicado.imagem} alt= {this.state.produtoClicado.nome} />
                        <br/>
                        <p className="modal-nome-produto">{this.state.produtoClicado.nome}</p>
                        <br/>
                        <p className="modal-antigo-preco">{this.state.produtoClicado.preco}</p>
                        <p className="modal-novo-preco">{this.state.produtoClicado.novopreco}</p>
    
                        <button className="comprar-btn" id="btn-comprar" onClick={() => this.irParaPaginaPedido(this.state.produtoClicado.idproduto)} >Comprar</button>
                     </div>}
                </Modal>

            </div>


        )

    }


}


export default withRouter(PaginaProdutos);