import React from 'react';

import SampleImage from '../../../../../../../../assets/icons/sample-image.svg';
import BookingStatus from '../../../../../../../components/BookingStatus';

import './BookingContainer.scss';

function BookingContainer({ status = 'completed' }) {
  return (
    <div className="booking-container">
      <div className="booking-container__heading">
        <p className="booking-container__heading-label">
          Send benefit review by Sunday
        </p>
        <p className="booking-container__heading-tag">300 USD</p>
      </div>
      <div className="booking-container__due-date">
        <p className="booking-container__due-date__label">Time</p>
        <p className="booking-container__due-date__value">08:00 AM</p>
      </div>
      <div className="booking-container__status">
        <div className="booking-container__status-image-wrap">
          <img className="client-img" src={SampleImage} alt="client" />
          <p className="client-name">Rebecca Moore</p>
        </div>
        <BookingStatus status={status} />
      </div>
    </div>
  );
}

export default BookingContainer;
