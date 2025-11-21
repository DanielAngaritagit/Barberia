# 💈 Sistema de Reserva de Turnos: Barberia 
**Por Keiner Daniel Bautista Angarita**

Este proyecto es el sitio web para "Daniel Barber", una barbería ficticia. El sitio presenta un diseño moderno y profesional, e incluye un sistema de reservas de citas del lado del cliente.

---

## 🚀 Demo y Despliegue (Front Visible)

¡Haz clic en el enlace para ver el sistema funcionando en vivo!

[![Deploy with Vercel](https://vercel.com/button)]([Pega aquí el URL de tu demo en Vercel]) 
---

## 🚀 Características

*   **Sitio Web de una Sola Página (SPA):** Toda la información está accesible en una sola página con desplazamiento suave.
*   **Diseño Responsivo:** Se adapta a dispositivos móviles, tabletas y de escritorio.
*   **Secciones:**
    *   **Inicio:** Un banner de bienvenida atractivo.
    *   **Servicios:** Lista de servicios ofrecidos con precios.
    *   **Galería:** Muestra del trabajo realizado.
    *   **Reservas:** Un formulario para que los clientes agenden sus citas.
    *   **Ubicación:** Mapa de Google integrado e información de contacto.
*   **Sistema de Reservas (Local):**
    *   Los clientes pueden seleccionar fecha y hora.
    *   Los horarios no disponibles se deshabilitan.
    *   Las reservas se guardan en el `localStorage` del navegador.

---

## 🛠️ Tecnologías Utilizadas

*   **Frontend:**
    *   ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
    *   ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
    *   ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
*   **Base de Datos (No integrada):**
    *   ![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
    *   Se proporciona un script `database.sql` para una posible implementación de backend, pero el sitio actual funciona sin servidor y utiliza `localStorage`.

---

## ⚙️ Cómo Utilizar

Este es un proyecto estático. No requiere un servidor de backend ni un proceso de construcción.

1.  **Clonar el repositorio (o descargar los archivos):**
    ```bash
    git clone https://github.com/DanielAngaritagit/Barberia.git
    ```
2.  **Abrir `index.html`:**
    *   Navega a la carpeta del proyecto.
    *   Haz doble clic en el archivo `index.html` para abrirlo en tu navegador web.

---

## 🗄️ Esquema de la Base de Datos

El archivo `database.sql` contiene el script para crear una tabla de `citas` en una base de datos MySQL. Esta es una referencia para una futura expansión del proyecto para incluir un backend.

**Tabla `citas`:**

| Columna      | Tipo        | Restricciones                 | Descripción              |
|--------------|-------------|-------------------------------|--------------------------|
| `id`         | INT         | AUTO_INCREMENT, PRIMARY KEY   | ID único de la cita      |
| `name`       | VARCHAR(100)| NOT NULL                      | Nombre del cliente       |
| `phone`      | VARCHAR(20) | NOT NULL                      | Teléfono del cliente     |
| `citas_date` | DATE        | NOT NULL                      | Fecha de la cita         |
| `citas_time` | TIME        | NOT NULL                      | Hora de la cita          |
| `created_at` | TIMESTAMP   | DEFAULT CURRENT_TIMESTAMP     | Fecha de creación del registro |
