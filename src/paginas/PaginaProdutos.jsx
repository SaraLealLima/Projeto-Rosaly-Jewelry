import React, { useEffect, useState } from 'react';
import Produto from '../components/Produto';


function PaginaProdutos() {
    const [produtos, setProdutos] = useState([]);
    useEffect(async () => {
        const resposta = await fetch("http://rosalyjewelrybackend/api/produtos.php");
        console.log(resposta);
        const json = await resposta.json();
        console.log(json);
        setProdutos(json);
    }, [])
    return <p>
        {produtos &&  produtos.map(produto => <Produto /> ) }
    </p>

}


export default PaginaProdutos;