import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Imagem from '../components/Imagem';
import { selecionarProduto } from '../store/actions/produtoSelecionadoActions'

class PaginaPedido extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.produtoSelecionado === null) {
            this.loadAsyncData()
        }
    }

    async loadAsyncData() {
        let idproduto = this.props.match.params.idproduto;
        const resposta = await fetch("/api/produto?idproduto=" + idproduto);
        const json = await resposta.json();
        this.props.selecionarProduto(json)
    }

    async postarPedido(evento) {
        evento.preventDefault()
        const formPedido = new FormData(evento.target);
        const resposta = await fetch('/api/pedido', {
            body: JSON.stringify(Object.fromEntries(formPedido)), 
            method: 'POST', 
            headers: new Headers({'content-type': 'application/json'})
        })
        if (resposta.status === 200) {
            this.props.history.push("/paginaConfirmacao")
        } else {
            alert('Erro: O pedido não pode ser concluído.')
        }
    }

    render() {
        return (
            <div className="corpo-pedido">
                {this.props.produtoSelecionado === null ? '' :
                    <div className="formulario-pedido">

                        <p className="novo-preco">Preencha o formulário abaixo para realizar o pedido</p>

                        <Imagem key={this.props.produtoSelecionado.idproduto} src={this.props.produtoSelecionado.imagem} alt= {this.props.produtoSelecionado.nome} />

                        <div className="row justify-content-center">
                            <div className="col-sm-8 col-md-9 col-lg-9">

                                <form onSubmit={(evento)=> this.postarPedido(evento)}>
                                    <div className="form-group">
                                        <label htmlFor="nomeproduto">Nome do produto</label> <br />
                                        <input className="form-control" type="text" name="nomeproduto" required defaultValue={this.props.produtoSelecionado.nome} readOnly />
                                        <br /><br />

                                        <label htmlFor="valorunitario">Preço</label> <br />
                                        <input className="form-control" type="number" name="valorunitario" required defaultValue={this.props.produtoSelecionado.novopreco} readOnly />
                                        <br /><br />

                                        <label htmlFor="quantidade">Quantidade</label> <br />
                                        <input className="form-control" type="number" name="quantidade" required defaultValue="1" /> <br /><br />

                                        <label htmlFor="nomecliente">Nome do cliente</label> <br />
                                        <input className="form-control" type="text" name="nomecliente" required /> <br /><br />

                                        <label htmlFor="endereco">Endereço</label> <br />
                                        <input className="form-control" type="text" name="endereco" required /> <br /><br />

                                        <label htmlFor="telefone">Telefone</label> <br />
                                        <input className="form-control" type="tel" name="telefone" required /> <br /><br /><br />

                                        <button type="submit" className="comprar-btn">Fazer pedido</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = store => ({
    produtoSelecionado: store.prodSelecionadoState.produtoSelecionado
})

const mapDispatchToProps = dispatch => bindActionCreators({ selecionarProduto }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaginaPedido));