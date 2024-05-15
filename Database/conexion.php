<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Acatodo";

$conexion = mysqli_connect($servername, $username, $password, $dbname);

if (!$conexion) {
    die("Conexión fallida: " . mysqli_connect_error());
}
?>