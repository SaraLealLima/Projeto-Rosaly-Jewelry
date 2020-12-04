import React from 'react';

function PaginaInicial() {
    return (
        <main>
            <section className="parallax container-fluid">
                <div className="row justify-content-center h-100">
                    <div className="welcome-text col-sm-12 col-lg-5 ">
                        <p>Bem vindo ao site da Rosaly Jewelry.</p>
                        <p>Joias com design único, para clientes únicos. Feitas artesanalmente sob demanda.</p>
                    </div>
                </div>
            </section>
            <section className="container texto-1">
                <p>Fundada há mais de 40 anos atrás, a Rosaly Jewelry tem se destacado como uma das maiores
                    e melhores joalherias nacionais. Nossas jóias são tão especiais quanto nossos clientes, por isso sempre as
                    confeccionamos com muito cuidado, utilizando as melhores materias primas disponíveis no mercado, desenhadas por nossos
                    excepcionais designer e feitas pelas mãos dos mais talentosos ourives. <br/>
                    Nosso site é seguro e contamos com uma equipe de atendimento que estará disponível para te ajudar no que precisar. </p>
            </section>
            <section className="second-image container-fluid" />

        </main>
    )
}

export default PaginaInicial;