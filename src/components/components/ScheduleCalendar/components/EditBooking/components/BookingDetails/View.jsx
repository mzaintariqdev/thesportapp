import React from 'react';

import './BookingDetails.scss';
import { Button } from 'antd';

function BookingDetails(props) {
  const { bookingData, onCancel } = props;
  console.log(bookingData);
  const bookingDate = new Date(bookingData?.date);
  let startTime = new Date(bookingData?.start);
  startTime =
    startTime.getHours() +
    ':' +
    (startTime.getMinutes() < 10 ? '0' : '') +
    startTime.getMinutes();
  let endTime = new Date(bookingData?.end);
  endTime =
    endTime.getHours() +
    ':' +
    (endTime.getMinutes() < 10 ? '0' : '') +
    endTime.getMinutes();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="booking-details">
      <div className="booking-details-wrapper">
        <p className="booking-details-wrapper__label">Client</p>
        <p className="booking-details-wrapper__value">
          {bookingData?.clientName}
        </p>
      </div>
      <div className="booking-details-wrapper">
        <p className="booking-details-wrapper__label">Resource</p>
        <p className="booking-details-wrapper__value">
          {bookingData?.resource}
        </p>
      </div>
      <div className="booking-details-wrapper">
        <p className="booking-details-wrapper__label">Sport</p>
        <p className="booking-details-wrapper__value">{bookingData?.sport}</p>
      </div>
      <div className="booking-details-wrapper">
        <p className="booking-details-wrapper__label">Date & Time</p>
        <p className="booking-details-wrapper__value">
          {bookingDate?.getDate() +
            ' ' +
            monthNames[bookingDate?.getMonth()] +
            ' ' +
            bookingDate?.getFullYear() +
            ' - ' +
            startTime +
            ' to ' +
            endTime}
        </p>
      </div>
      <div className="booking-details-wrapper">
        <p className="booking-details-wrapper__label">Amount</p>
        <p className="booking-details-wrapper__value">{bookingData?.amount}</p>
      </div>
      <div className="booking-details-wrapper">
        <p className="booking-details-wrapper__label">Payment</p>
        <p className="booking-details-wrapper__value">{bookingData?.payment}</p>
      </div>
      <div className="booking-details-actions">
        <Button
          onClick={onCancel}
          className="booking-details-actions__cancel"
          type="primary"
        >
          Cancel
        </Button>

        <Button
          type="primary"
          className="booking-details-actions__checkout "
          htmlType="submit"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}

export default BookingDetails;
