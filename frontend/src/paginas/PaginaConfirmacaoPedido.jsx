import React from 'react';
import { Link } from 'react-router-dom';

function PaginaConfirmacaoPedido() {
    return(
        <div className="confirmacao-pedido">
            Seu pedido foi realizado com sucesso!

            <br/><br/>
	        <Link to="/">Clique aqui para voltar à página inicial </Link>
        </div>
    )
}

export default PaginaConfirmacaoPedido;