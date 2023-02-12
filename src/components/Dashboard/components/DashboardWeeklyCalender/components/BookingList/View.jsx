import React from 'react';

import BookingContainer from './components/BookingContainer';

import './BookingList.scss';

function BookingList() {
  return (
    <div className="booking-list">
      <div className="booking-list-wrapper">
        <BookingContainer status={'completed'} />
        <BookingContainer status={'unpaid'} />
        <BookingContainer status={'completed'} />
      </div>
      <p className="booking-list__show-more">Show more</p>
    </div>
  );
}

export default BookingList;
