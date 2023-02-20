import React from 'react';

import ProfileAdditionalInfo from './components/ProfileAdditionalInfo';
import ProfileBillingDetails from '../ProfileBillingDetails';

import './ClientProfile.scss';

function ClientProfile() {
  return (
    <div className="client-profile-form">
      <p className="form-heading">Billing Details</p>
      <ProfileBillingDetails showContact={true} />
      <p className="form-heading"> Additional Information</p>
      <ProfileAdditionalInfo />
    </div>
  );
}

export default ClientProfile;
