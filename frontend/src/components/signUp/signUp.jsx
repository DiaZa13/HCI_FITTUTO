import React from 'react';
import SignUpFormcontainer from './signUpFormcontainer';
import img from '../../assets/tutor3.png';
function SignUp() {
  return (
    <div className="signUp-container">
      <div className="signUp-img">
        <img src={img} className={'d-none d-md-block vh-100 w-100'} alt="LOGO"/>
      </div>
      <SignUpFormcontainer />
    </div>
  );
}

export default SignUp;
