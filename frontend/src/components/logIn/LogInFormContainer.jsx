import React from 'react';
import LogInForm from './LogInForm';
import history from '../utils/history';
import logo from '../../assets/logo.svg';

export default function LogInFormContainer() {
  // const handleClick = () =>{
  //     history.push('/');
  //     history.go();
  // };

  return (
    <div className="logIn-container">
      <div className="form-max-width mx-auto">
        <h2 className="text-tertiary text-center">INICIA SESIÓN</h2>
        <span className="divider m-0">○</span>
      </div>
      <LogInForm />
      <span className="divider"/>
      <p className="text-center mb-0 mt-1">
        <span className="me-2">
          ¿Aún no tienes cuenta?
        </span>
        <button className="w-75% signIn">Regístrate</button>
      </p>
    </div>
  );
}

