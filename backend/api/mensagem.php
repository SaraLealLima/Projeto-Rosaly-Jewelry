<?php

    require_once "../actions/connection.php";

    if($_SERVER['REQUEST_METHOD'] == "POST"){
         $email = ($_POST['email']);
         $nome = ($_POST['nome']);
		 $mensagem = ($_POST['mensagem']);
		

         nonquery("INSERT INTO clientes (id_cliente, nome_cliente, email) VALUES
         (DEFAULT, '$nome', '$email')");

         $resultado = query("SELECT id_cliente FROM clientes WHERE email = '$email'");

         $id_cliente = mysqli_fetch_assoc($resultado);


         nonquery("INSERT INTO mensagens (id_msg, id_cliente, mensagem) VALUES
         (DEFAULT, ".$id_cliente['id_cliente'].", '$mensagem')");
    };

    header("Access-Control-Allow-Origin: *");

   
?>