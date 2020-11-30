import React, { useEffect } from 'react';

function PaginaProdutos() {
    useEffect(async () => {
        const resposta = await fetch("http://rosalyjewelrybackend/api/produtos.php");
        console.log(resposta);
        const json = await resposta.json();
        console.log(json);
    }

    )
    return <p>Te amo me compra remédio :c</p>

}

export default PaginaProdutos;