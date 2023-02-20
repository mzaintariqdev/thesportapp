import React from 'react';
import classNames from 'classnames';

import { ReactComponent as EditIcon } from '../../../../../../../../assets/icons/edit.svg';
import { ReactComponent as MoreIcon } from '../../../../../../../../assets/icons/more.svg';

import './Schedule.scss';

function Schedule(props) {
  return (
    <div
      className={classNames(
        'schedule-wrapper',
        props.status ? 'paid-schedule' : 'other-schedule'
      )}
    >
      <div className="sub-schedule-wrapper">
        <p className="sub-schedule-wrapper__header">Resource</p>
        <p className="sub-schedule-wrapper__value">Tennis Court</p>
      </div>
      <div className="sub-schedule-wrapper">
        <p className="sub-schedule-wrapper__header">Date</p>
        <p className="sub-schedule-wrapper__value">22 March 10:00 - 11:00</p>
      </div>
      <div className="sub-schedule-wrapper">
        <p className="sub-schedule-wrapper__header">Amount</p>
        <p className="sub-schedule-wrapper__value">420 AED</p>
      </div>
      <div className="options-wrap">
        <EditIcon />
        <MoreIcon />
      </div>
    </div>
  );
}

export default Schedule;
