<?php

    function query($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "rosalyjewelry";

        $conn = mysqli_connect($servername, $username, $password, $database);
        mysqli_set_charset($conn, "utf8mb4");
        $resultado = mysqli_query($conn, $sql);
        mysqli_close($conn);
        return $resultado;
    }

    function nonquery($sql) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "rosalyjewelry";

        $conn = mysqli_connect($servername, $username, $password, $database);
        mysqli_set_charset($conn, "utf8mb4");
        $resultado = mysqli_query($conn, $sql);
        mysqli_close($conn);
    }

    
?>
