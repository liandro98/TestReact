import React, { useState } from 'react';

const RegistroForm = ({ handleRegistro }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los campos antes de llamar a la función handleRegistro
    if (email.trim() === '') {
      setError('Por favor ingresa tu correo electrónico');
      return;
    }
    if (password.trim() === '') {
      setError('Por favor ingresa tu contraseña');
      return;
    }
    // Llamar a la función handleRegistro pasando los datos del usuario
    handleRegistro({ email, password });
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    // Limpiar el mensaje de error al modificar el campo de email
    setError('');
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    // Limpiar el mensaje de error al modificar el campo de contraseña
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={handleChangeEmail}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control"
          placeholder="Contraseña"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button type="submit" className="btn btn-primary">Registrarse</button>
      {/* Mostrar el mensaje de error si existe */}
      {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
    </form>
  );
};

export default RegistroForm;



