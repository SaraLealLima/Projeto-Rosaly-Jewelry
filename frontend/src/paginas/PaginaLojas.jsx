import React from 'react';

function PaginaLojas() {
    return (
        <div>
            <div className="container mb-5 mt-5 w-75">
                <div className="alert alert-danger" role="alert">
                    <strong>Atenção</strong>, nossas lojas estão temporariamente fechadas devido a pandemia do COVID-19, 
                    para manter nossos fucionários e suas famílias em segurança.
                </div>
            </div>
            <div className="texto-padrao container ml-sm-0 ml-md-5 mt-5">
                <p id="titulo">NOSSAS LOJAS</p>
                <p> Saiba onde nos encontrar! Venha
                até uma de nossas lojas para ver
                os modelos disponíveis e até mesmo prova-los. Nossa equipe te receberá com muito carinho e fará sua visita ser
                incrível!</p>
            </div>
            <br/>
            <section className="nossas-lojas container-fluid mb-5 mt-5">
        <div className="row">
                <div className="loja col-sm-3 col-md-3 col-lg-3 mb-5">
                    <p> SÃO PAULO</p>
                    <p>Rua Oscar Freire, 800 <br/>
                        Cerqueira César <br/>
                        CEP: 01426-002 <br/>
                        São Paulo - SP </p>
                </div>
                <div className="loja col-sm-3 col-md-3 col-lg-3 mb-5">
                    <p> RIO DE JANEIRO</p>
                    <p>Rua Duvivier, 20 <br/>
                        Copacabana<br/>
                        CEP: 22020-020 <br/>
                        Rio de Janeiro, RJ </p>
                </div>
                <div className="loja col-sm-3 col-md-3 col-lg-3 mb-5">
                    <p> BELO HORIZONTE</p>
                    <p>Rua Professor Moraes, 610<br/>
                        Savassi<br/>
                        CEP: 30150-370 <br/>
                        Belo Horizonte, MG</p>
                </div>
                <div className="loja col-sm-3 col-md-3 col-lg-3 mb-5">
                    <p> FLORIANÓPOLIS</p>
                    <p>Rua Madalena Barbi, 180<br/>
                        Centro <br/>
                        CEP: 88015-190 <br/>
                        Florianópolis, SC </p>
                 </div>
        </div>

        
    
        </section>
    </div>   
    )
}

export default PaginaLojas;