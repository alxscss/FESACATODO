CREATE TABLE Usuarios (
    id SERIAL PRIMARY KEY,
    correo_institucional VARCHAR(100) UNIQUE NOT NULL,
    nombre_completo VARCHAR(100) NOT NULL,
    numero_cuenta BIGINT UNIQUE NOT NULL,
    nombre_usuario VARCHAR(50) UNIQUE NOT NULL,
    contrasena VARCHAR(100) NOT NULL
);

CREATE TABLE Reportes (
    id SERIAL PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha_envio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT REFERENCES Usuarios(id) ON DELETE CASCADE
);

CREATE TABLE Perfiles (
    id SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(100) NOT NULL,
    descripcion TEXT,
    foto VARCHAR(255)
);

CREATE TABLE Rutas_Transporte (
    id SERIAL PRIMARY KEY,
    origen VARCHAR(100) NOT NULL,
    destino VARCHAR(100) NOT NULL,
    horario VARCHAR(50) NOT NULL,
    precio NUMERIC(10, 2) NOT NULL
);

CREATE TABLE Productos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(10, 2) NOT NULL
);

CREATE TABLE Comidas_Cafeteria (
    id SERIAL PRIMARY KEY,
    nombre_plato VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(10, 2) NOT NULL
);

CREATE TABLE Alquileres (
    id SERIAL PRIMARY KEY,
    direccion VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio NUMERIC(10, 2) NOT NULL
);