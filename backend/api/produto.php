<?php

    $idproduto = $_GET["idproduto"];

    require_once "../actions/connection.php";

    $result = query("SELECT * FROM produtos WHERE idproduto = $idproduto");

    $produto = mysqli_fetch_assoc($result);

    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    echo (json_encode($produto));
?>