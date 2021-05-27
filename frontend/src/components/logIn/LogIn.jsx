import React from 'react';
import LogInFormContainer from './LogInFormContainer';
import img from '../../assets/tutor3.png';

export default function LogIn() {
  return (
    <div className="signUp-container">
      <LogInFormContainer />
      <div className="signUp-img">
        <img src={img} className={'d-none d-md-block vh-100 w-100'} alt="LOGO"/>
      </div>
    </div>
  );
}

