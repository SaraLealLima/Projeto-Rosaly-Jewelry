import React, { Component, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Produto from '../components/Produto';


class PaginaProdutos extends Component {
    constructor(props) {
        super(props)
        this.state = { produtos: [], produtosFiltrados: [] };
    }

    componentDidMount() {
        this.loadAsyncData()
    }

    async loadAsyncData() {
        const resposta = await fetch("http://rosalyjewelrybackend/api/produtos.php");
        const json = await resposta.json();
        this.setState({ produtos: json, produtosFiltrados: json });
    }

    exibirCategoria(categoria) {
        if (categoria == 'todos') {
            this.setState({ produtos: this.state.produtos, produtosFiltrados: this.state.produtos })
        } else {
            let produtosFiltrados = this.state.produtos.filter((produto) => {
                return produto.categoria.toLowerCase() == categoria
            })
            this.setState({ produtos: this.state.produtos, produtosFiltrados: produtosFiltrados })
        }
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
                            {this.state.produtosFiltrados && this.state.produtosFiltrados.map(produto => <Produto produto={produto} />)}
                        </Col>
                    </Row>
                </Container>
            </div>


        )

    }


}


export default PaginaProdutos;