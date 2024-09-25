import React, { useState } from 'react';
import '../../styles/styleprincipal.css'; // Actualiza la ruta de importación

export default function PrincipalPage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes añadir la lógica para manejar la recuperación de contraseña.
        // Por ejemplo, puedes enviar el email a tu servidor.
        setMessage('Se ha enviado un enlace de recuperación a tu correo electrónico.');
    };

    return (
        <div className="main-container">
            <div className="header">
                <img src="img/Logo.jpg" alt="Logo de la Pizzería" className="logo" />
                <h1 className="nombre-pizzeria">LA BELLA ITALIA</h1>
            </div>
            <div className="recovery-container">
                <h2>Recuperar Contraseña</h2>
                <form id="passwordRecoveryForm" onSubmit={handleSubmit}>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                    <button type="submit">Recuperar Contraseña</button>
                </form>
                <p id="message">{message}</p>
            </div>
        </div>
    );
}
