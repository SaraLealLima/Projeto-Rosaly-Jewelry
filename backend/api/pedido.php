<?php

    require_once "../actions/connection.php";

    if($_SERVER['REQUEST_METHOD'] == "POST"){
         $nomeproduto = ($_POST['nomeproduto']);
		 $preco = ($_POST['valorunitario']);
		 $quantidade = ($_POST['quantidade']);
		 $nomecliente = ($_POST['nomecliente']);
		 $endereco = ($_POST['endereco']);
         $telefone = ($_POST['telefone']);
         
         nonquery("INSERT INTO pedidos (idpedido, nomecliente, endereco, telefone, nomeproduto, valorunitario, quantidade, valortotal) VALUES
         (DEFAULT, '$nomecliente', '$endereco', '$telefone', '$nomeproduto', '$preco', '$quantidade', (valorunitario * quantidade))");
    }

    header("Access-Control-Allow-Origin: *");

   
?>