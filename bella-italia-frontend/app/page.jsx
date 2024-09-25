"use client"

import React, { useState } from 'react';
import '../styles/stylesindex.css';

export default function HomePage() {
    const [showRegister, setShowRegister] = useState(false);
    const [userRole, setUserRole] = useState('Elige tu rol'); // Estado para el rol del usuario

    const handleRegisterClick = () => {
        setShowRegister(true);
    };

    const handleLoginClick = () => {
        setShowRegister(false);
    };

    const handleRoleChange = (e) => {
        setUserRole(e.target.value);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica para verificar las credenciales y el rol seleccionado
        // Por ahora, simulamos la autenticación directamente en el frontend
        console.log('Usuario:', userRole);
    };

    return (
        <div className="main-container">
            <div className="header"></div>
            <div className="login-container">
                <img src="img/Logo.jpg" alt="Logo de la Pizzería" className="login-logo" />
                {!showRegister ? (
                    <>
                        <h2>Iniciar Sesión</h2>
                        <form id="login-form" onSubmit={handleLoginSubmit}>
                            <input type="text" id="username" name="username" placeholder="Nombre de usuario" required />
                            <input type="password" id="password" name="password" placeholder="Contraseña" required />
                            <div>
                                <label htmlFor="user-role">Selecciona tu rol:</label>
                                <select id="user-role" value={userRole} onChange={handleRoleChange} required>
                                    <option value="Elige tu rol" disabled>Elige tu rol</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="empleado">Empleado</option>
                                </select>
                            </div>
                            <button type="submit">Iniciar Sesión</button>
                            <a href="/forgot-password" className="forgot-password">¿Olvidaste tu contraseña?</a>
                        </form>
                        <button onClick={handleRegisterClick} className="register-button">Registrarse</button>
                    </>
                ) : (
                    <>
                        <h2>Registro</h2>
                        <form id="register-form">
                            <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
                            <input type="text" id="apellido" name="apellido" placeholder="Apellido" required />
                            <input type="text" id="telefono" name="telefono" placeholder="Teléfono" required />
                            <input type="email" id="corrreo" name="corrreo" placeholder="Correo Electrónico" required />
                            <input type="text" id="ciudad" name="ciudad" placeholder="Ciudad" required />
                            <input type="text" id="direccion" name="direccion" placeholder="Dirección" required />
                            <input type="text" id="cedula" name="cedula" placeholder="Cédula" required />
                            <input type="password" id="password" name="password" placeholder="Contraseña" required />
                            <div>
                                <label htmlFor="user-role">Selecciona tu rol:</label>
                                <select id="user-role" value={userRole} onChange={handleRoleChange} required>
                                    <option value="Elige tu rol" disabled>Elige tu rol</option>
                                    <option value="cliente">Cliente</option>
                                    <option value="empleado">Empleado</option>
                                </select>
                            </div>
                            <button type="submit">Registrarse</button>
                        </form>
                        <button onClick={handleLoginClick} className="back-to-login-button">Volver al Inicio de Sesión</button>
                    </>
                )}
            </div>
        </div>
    );
}
