import React from 'react';
import LogInFormContainer from './LogInFormContainer';
import img from '../../assets/background.png';

export default function LogIn() {
  return (
    <div>
      <LogInFormContainer />
      <img src={img} className={'d-none d-md-block w-100 logIn-img'} alt="LOGO"/>
    </div>
  );
}

