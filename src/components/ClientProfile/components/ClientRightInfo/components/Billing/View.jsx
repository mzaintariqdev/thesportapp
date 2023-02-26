import ProfileDebitCard from './components/ProfileDebitCard';
import ProfileBillingDetails from '../ProfileBillingDetails';

import './Billing.scss';

function Billing() {
  return (
    <div className="billing-wrap">
      <p className="form-headings">Billing Details</p>
      <ProfileBillingDetails showContact={false} />
      <p className="form-headings">Direct Debit Account</p>
      <ProfileDebitCard />
    </div>
  );
}

export default Billing;
