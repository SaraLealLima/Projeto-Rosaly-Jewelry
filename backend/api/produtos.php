<?php

    require_once "../actions/connection.php";

    $result = query("SELECT * FROM rosalyjewelry.produtos");
    $produtos = [];

    while($row = mysqli_fetch_assoc($result)){
        $produtos[] = $row;
    }

    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    echo (json_encode($produtos));

?>