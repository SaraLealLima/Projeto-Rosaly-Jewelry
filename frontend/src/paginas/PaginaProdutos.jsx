import React, {Component, lazy, Suspense} from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
// import Produto from '../components/Produto';
import Imagem from '../components/Imagem';
import { withRouter } from 'react-router-dom';
import { cliqueCategoria } from '../store/actions/categoriasActions'
import { selecionarProduto} from '../store/actions/produtoSelecionadoActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import loading from '../images/loading.png'

const Produto = lazy(() => import('../components/Produto'));

class PaginaProdutos extends Component {
    constructor(props) {
        super(props)
        this.state = { produtos: [], show: false };
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("/api/produtos");
        const json = await resposta.json();
        this.setState({ produtos: json, show: false });
    }


    handleClose() {
        this.setState({ produtos: this.state.produtos, show: false })
    }

    handleOpen(produto) {
        this.props.selecionarProduto(produto)
        this.setState({ produtos: this.state.produtos, show: true })
    }


    irParaPaginaPedido(idproduto) {
        this.props.history.push("/paginaPedido/" + idproduto)
    }

    render() {

        var produtosFiltrados = []
        if (this.props.categoriaSelecionada === 'todos') {
            produtosFiltrados = this.state.produtos
        } else {
            produtosFiltrados = this.state.produtos.filter((produto) => {
                return produto.categoria.toLowerCase() === this.props.categoriaSelecionada
            })

        }

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
                                    {this.props.categorias.map((categoria) => <li key={categoria.valor} onClick={() => this.props.cliqueCategoria(categoria.valor)}>{categoria.texto}</li>)}
                                </ul>
                            </aside>
                        </Col>
                        <Suspense fallback={ <img src={loading} className="loadingImagem" alt="Carregando..." /> }>
                          <Col sm={12} md={8} lg={9}>
                            {produtosFiltrados.map(produto => <Produto onClick={() => this.handleOpen(produto)} produto={produto} key={produto.idproduto} />)}
                        </Col>  
                        </Suspense>
                        
                    </Row>
                </Container>

                <Modal show={this.state.show} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton bsPrefix="modal-header-custom mt-4 mr-4"> </Modal.Header>
                    {this.props.produtoSelecionado === null ? '' :
                        <div className="modal-box-produto mb-5">
                            <Imagem key={this.props.produtoSelecionado.idproduto} src={this.props.produtoSelecionado.imagem} alt={this.props.produtoSelecionado.nome} />
                            <br />
                            <p className="modal-nome-produto">{this.props.produtoSelecionado.nome}</p>
                            <br />
                            <p className="modal-antigo-preco">{this.props.produtoSelecionado.preco}</p>
                            <p className="modal-novo-preco">{this.props.produtoSelecionado.novopreco}</p>

                            <button className="comprar-btn" id="btn-comprar" onClick={() => this.irParaPaginaPedido(this.props.produtoSelecionado.idproduto)} >Comprar</button>
                        </div>}
                </Modal>

            </div>


        )

    }


}

const mapStateToProps = store => ({
    categorias: store.categoriasState.categorias,
    categoriaSelecionada: store.categoriasState.categoriaSelecionada,
    produtoSelecionado: store.prodSelecionadoState.produtoSelecionado
})

const mapDispatchToProps = dispatch => bindActionCreators({ cliqueCategoria, selecionarProduto }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaginaProdutos));