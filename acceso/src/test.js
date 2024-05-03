import React, {useState} from "react";

const RegistroForm = () => {

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
      };
      
  
}

export default RegistroForm;