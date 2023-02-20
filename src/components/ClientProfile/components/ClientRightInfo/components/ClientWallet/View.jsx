import React from 'react';

import './ClientWallet.scss';

function ClientWallet() {
  return (
    <div className="client-wallet">
      <div className="client-wallet__wrap">
        <p className="client-wallet__wrap-heading">Balance</p>
        <p className="client-wallet__wrap-value">0 AED</p>
      </div>
      <div className="divider" />
      <div className="client-wallet__wrap">
        <p className="client-wallet__wrap-heading">Due</p>
        <p className="client-wallet__wrap-value">200 AED</p>
      </div>
      <div className="divider" />
      <div className="client-wallet__wrap">
        <p className="client-wallet__wrap-heading">Cancelled</p>
        <p className="client-wallet__wrap-value">0</p>
      </div>
      <div className="divider" />
      <div className="client-wallet__wrap">
        <p className="client-wallet__wrap-heading">No-Show</p>
        <p className="client-wallet__wrap-value">0 </p>
      </div>
    </div>
  );
}

export default ClientWallet;
