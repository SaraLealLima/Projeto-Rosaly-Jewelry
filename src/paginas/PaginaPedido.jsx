import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Imagem from '../components/Imagem';

class PaginaPedido extends Component {
    constructor(props) {
        super(props)
        this.state = { produto: null }
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        let idproduto = this.props.match.params.idproduto;
        const resposta = await fetch("http://rosalyjewelrybackend/api/produto.php?idproduto=" + idproduto);
        const json = await resposta.json();
        this.setState({ produto: json });
    }

    render() {
        return (
            <div className="corpo-pedido">
                {this.state.produto === null ? '' :
                    <div className="formulario-pedido">

                        <p className="novo-preco">Preencha o formulário abaixo para realizar o pedido</p>

                        <Imagem key={this.state.produto.idproduto} src={this.state.produto.imagem} alt= {this.state.produto.nome} />

                        <div className="row justify-content-center">
                            <div className="col-sm-8 col-md-9 col-lg-9">

                                <form>
                                    <div className="form-group">
                                        <label for="nomeproduto">Nome do produto</label> <br />
                                        <input className="form-control" type="text" name="nomeproduto" required value={this.state.produto.nome} />
                                        <br /><br />

                                        <label for="valorunitario">Preço</label> <br />
                                        <input className="form-control" type="number" name="valorunitario" required value={this.state.produto.novopreco} />
                                        <br /><br />

                                        <label for="quantidade">Quantidade</label> <br />
                                        <input className="form-control" type="number" name="quantidade" required value="1" /> <br /><br />

                                        <label for="nomecliente">Nome do cliente</label> <br />
                                        <input className="form-control" type="text" name="nomecliente" required /> <br /><br />

                                        <label for="endereco">Endereço</label> <br />
                                        <input className="form-control" type="text" name="endereco" required /> <br /><br />

                                        <label for="telefone">Telefone</label> <br />
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

export default withRouter(PaginaPedido);