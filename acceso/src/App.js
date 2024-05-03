import React, { useState } from 'react';
import RegistroForm from './RegistroForm';
import LoginForm from './LoginForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [users, setUsers] = useState([]);

  
  // Función para registrar un nuevo usuario
  const handleRegistro = (userData) => {
    // Verificar si el correo electrónico ya está registrado
    const existingUser = users.find(user => user.email === userData.email);
    if (existingUser) {
      alert('El correo electrónico ya está registrado.');
      return;
    }
    // Agregar el nuevo usuario al arreglo
    setUsers([...users, userData]);
    // Establecer como conectado al nuevo usuario
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  // Función para iniciar sesión
  const handleLogin = (userData) => {
    // Buscar al usuario por su correo electrónico y contraseña
    const user = users.find(user => user.email === userData.email && user.password === userData.password);
    if (user) {
      // Establecer como conectado al usuario encontrado
      setCurrentUser(user);
      setIsLoggedIn(true);
    } else {
      alert('Inicio de sesión fallido. Credenciales incorrectas.');
    }
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setCurrentUser(null); // Limpiar el usuario actual
    setIsLoggedIn(false); // Establecer como desconectado
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          {isLoggedIn ? (
            <div>
              <h2>¡Bienvenido, {currentUser.email}!</h2>
              <button onClick={handleLogout} className="btn btn-danger">Cerrar sesión</button>
            </div>
          ) : (
            <div>
              <h2>Registro</h2>
              <RegistroForm handleRegistro={handleRegistro} />
              <h2>Iniciar sesión</h2>
              <LoginForm handleLogin={handleLogin} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;






