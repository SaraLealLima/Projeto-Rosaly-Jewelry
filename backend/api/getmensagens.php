<?php


    require_once "../actions/connection.php";

    $result = query("SELECT nome_cliente, mensagem FROM mensagens JOIN clientes ON clientes.id_cliente = mensagens.id_cliente LIMIT 10");
    $msgs = [];

    while($row = mysqli_fetch_assoc($result)){
        $msgs[] = $row;
    }

    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    echo (json_encode($msgs));


?>