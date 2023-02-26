import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import BookingContainer from './components/BookingContainer';

import './BookingList.scss';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

function BookingList({ bookingList, getMoreBookings, isLoading }) {
  return (
    <div className="booking-list">
      <div className="booking-list-wrapper">
        {bookingList?.map((booking, index) => (
          <BookingContainer key={index} booking={booking} />
        ))}
      </div>
      <p className="booking-list__show-more" onClick={getMoreBookings}>
        {isLoading ? <Spin indicator={antIcon} /> : 'Show more'}
      </p>
    </div>
  );
}

export default BookingList;
