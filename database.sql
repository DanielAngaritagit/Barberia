-- Script de base de datos para la Barbería Daniel Barber
-- Este script crea la tabla necesaria para almacenar las citas.

CREATE DATABASE IF NOT EXISTS barberia;
USE barberia;

CREATE TABLE IF NOT EXISTS citas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,       -- Nombre del cliente
    phone VARCHAR(20) NOT NULL,       -- Teléfono del cliente
    citas_date DATE NOT NULL,         -- Fecha de la cita
    citas_time TIME NOT NULL,         -- Hora de la cita
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- Opcional: agregar un índice para búsquedas más rápidas por fecha y hora
CREATE INDEX idx_citas_datetime ON citas (citas_date, citas_time);