<?php

$db = mysqli_connect('localhost', 'root', '1702090', 'appsalon_mvc');


if (!$db) {
    echo "Error: No se pudo conectar a MySQL.";
    echo "errno de depuración: " . mysqli_connect_errno();
    echo "error de depuración: " . mysqli_connect_error();
    exit;
}
/*
$s = "localhost";
$db = "appsalon_mvc";
$u = "root";
$p = "1702090";

$conexion=new mysqli($s, $u, $p, $db);


if ($conexion -> connect_errno) {
    
    echo "No conectado";
}else{
    echo "bd Conectado";
}
*/
?>