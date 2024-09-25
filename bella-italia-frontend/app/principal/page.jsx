"use client"; // Añade esta línea para marcar el componente como Client Component

import React from 'react';
import '../../styles/styleprincipal.css'; // Actualiza la ruta de importación

export default function PrincipalPage() {
    return (
        <div>
            <nav className="menu">
                <img src="/img/Logo.jpg" alt="Logo de la Pizzería" className="logo" />
                <p className="username">Nombre de Usuario</p>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li>
                        <a href="#">Perfil</a>
                        <div className="dropdown-content">
                            <a href="#">Editar Perfil</a>
                        </div>
                    </li>
                    <li>
                        <a href="#">Categorías</a>
                        <a href="#">Funciones de cada empleado</a>
                    </li>
                    <li>
                        <a href="#">Solicitudes</a>
                        <div className="dropdown-content">
                            <a href="#">Solicitud</a>
                            <a href="#">Configuración</a>
                        </div>
                    </li>
                </ul>
            </nav>

            <div className="main-container">
                <div className="header">
                    <h1 className="nombre-pizzeria">LA BELLA ITALIA</h1>
                </div>
                <div className="login-container">
                    <h2>Bienvenido a la Página Principal</h2>
                    <p>Has iniciado sesión correctamente.</p>
                </div>
            </div>
        </div>
    );
}
