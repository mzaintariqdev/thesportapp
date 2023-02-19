import React from 'react';

import ClientRightInfo from './components/ClientRightInfo';
import ClientLeftInfo from './components/ClientLeftInfo';

import './ClientProfile.scss';

function ClientProfile() {
  return (
    <div className="client-profile-comp">
      <ClientLeftInfo />
      <ClientRightInfo />
    </div>
  );
}

export default ClientProfile;
