import React from 'react';

function PaginaContato() {
    return (
        <div>
            <div class="texto-padrao container ml-sm-0 ml-md-5 mt-5">
                <p id="titulo">FALE CONOSCO</p>
                <p> Estamos sempre prontos para te atender!</p>
                <p>Nosso telefone para atendimento referente a compras realizadas nas nossas lojas físicas: <br/>
                (11) 4358-6732 <br/> <br/>
                Para compras realizadas pelo site: <br/>
                (11) 4360-5859</p>
                <p>Ou se preferir, entre em contato pelo nosso e-mail: <br/>
                atendimento@rosalyjewelry.com.br</p>
                <br/>

                <p>Para mais praticidade, deixe uma mensagem, sugestão,
                elogio ou dúvidas e seu endereço de e-mail. Nossa equipe responderá assim que possível.</p>
                <form>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">

                            <form action="" method="post">
                                <div className="form-group">
                                    <label for="email">Seu endereço de e-mail:</label>
                                    <input type="email" name="email" className="form-control" id="email" aria-describedby="email" placeholder="Digite seu email"/> <br/>

                                    <label for="mensagem">Digite aqui sua mensagem</label>
                                    <textarea className="form-control" name="mensagem" id="mensagem" rows="4" placeholder="Sua mensagem..."></textarea>
                                
                                    <br/>
                                    <button type="submit" className="add-btn mb-5">Enviar</button> <br/>
                                </div>
                            </form>

                        
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaginaContato;