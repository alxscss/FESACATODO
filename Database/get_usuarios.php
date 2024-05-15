<?php
// Obtener los datos del formulario o de cualquier otra fuente
require 'conexion.php';
$correo = $_POST['correo']; // Suponiendo que estás usando un formulario POST
$nombreCompleto = $_POST['nombre_completo'];
$numeroCuenta = $_POST['numero_cuenta'];
$nombreUsuario = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];

// Conexión a la base de datos
$host = 'localhost';
$usuario = 'root';
$contrasena = '';
$baseDatos = 'Acatodo';

$conexion = new mysqli($host, $usuario, $contrasena, $baseDatos);

// Verificar la conexión
if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}

// Consulta SQL para insertar datos
$sql = "INSERT INTO Usuarios (correo_institucional, nombre_completo, numero_cuenta, nombre_usuario, contrasena) 
        VALUES ('$correo', '$nombreCompleto', $numeroCuenta, '$nombreUsuario', '$contrasena')";

if ($conexion->query($sql) === TRUE) {
    echo "Datos insertados correctamente.";
} else {
    echo "Error al insertar datos: " . $conexion->error;
}

// Cerrar conexión
$conexion->close();
?>
