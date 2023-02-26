import React from 'react';

import SampleImage from '../../../../../../../../assets/icons/sample-image.svg';
import BookingStatus from '../../../../../../../components/BookingStatus';

import './BookingContainer.scss';

function BookingContainer({ booking }) {
  return (
    <div className="booking-container">
      <div className="booking-container__heading">
        <p className="booking-container__heading-label">{booking?.title}</p>
        <p className="booking-container__heading-tag">{booking?.price}</p>
      </div>
      <div className="booking-container__due-date">
        <p className="booking-container__due-date__label">Time</p>
        <p className="booking-container__due-date__value">{booking?.time}</p>
      </div>
      <div className="booking-container__status">
        <div className="booking-container__status-image-wrap">
          <img className="client-img" src={SampleImage} alt="client" />
          <p className="client-name">{booking?.clientName}</p>
        </div>
        <BookingStatus status={booking?.status} />
      </div>
    </div>
  );
}

export default BookingContainer;
