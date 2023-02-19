import React from 'react';

import VenueLogo from '../../assets/img/Rectangle.svg';
import LogInForm from './components/LogInForm';

import './LogIn.scss';

function Login() {
  return (
    <div className="login-page">
      <div className="banner">
        <div className="banner-left">
          <img className="venueLogo" src={VenueLogo} alt="VenueLogo" />
        </div>

        <div className="banner-right">
          <p className="banner-right__client-name">Padel Academy</p>
          <p className="banner-right__client-address">
            JBR, Dubai, United Arab Emirates
          </p>
        </div>
      </div>
      <div className="LogInForm">
        <LogInForm />
      </div>
    </div>
  );
}

export default Login;
