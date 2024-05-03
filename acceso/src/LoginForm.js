import React, { useState } from 'react';

const LoginForm = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones
    if (!email.trim() || !password.trim()) {
      alert('Por favor, complete todos los campos.');
      return;
    }
    // Enviar datos al componente principal para el inicio de sesión
    handleLogin({ email, password });
    // Limpiar campos después del inicio de sesión exitoso
    setEmail('');
    setPassword('');
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
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
      <button type="submit" className="btn btn-primary">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;


