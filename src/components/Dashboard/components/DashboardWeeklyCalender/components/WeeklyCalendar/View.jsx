import React from 'react';
import classNames from 'classnames';

import { DayAbbreviations, WeekDays } from '../../constants';
import { MonthsName } from '../../constants';

import './WeeklyCalendar.scss';

function WeeklyCalender({ selectedDate, setSelectedDate }) {
  const currentDate = new Date();
  const weeklyDates = Array.from(Array(7).keys()).map((idx) => {
    const d = new Date();
    d.setDate(d.getDate() - d.getDay() + idx);
    return d;
  });

  return (
    <div className="weekly-calendar">
      <p className="weekly-calendar__selected-date">
        {selectedDate.getDate()} {MonthsName[selectedDate.getMonth()]},{' '}
        {WeekDays[selectedDate.getDay()]}
      </p>
      <div className="weekly-calendar__wrapper">
        {weeklyDates.map((date, index) => (
          <div className="weekly-calendar__wrapper-day-container" key={index}>
            <p
              className={classNames(
                'weekly-calendar__wrapper-day-container__day-heading',
                date.getDay() === currentDate.getDay() ? 'active' : 'non-active'
              )}
            >
              {DayAbbreviations[date.getDay()]}
            </p>
            {selectedDate.getDate() === date.getDate() ? (
              <p className="selected-date-container">{date.getDate()}</p>
            ) : (
              <p
                className={classNames(
                  'data-content',
                  date.getDay() === currentDate.getDay()
                    ? 'data-content__active'
                    : 'data-content__non-active'
                )}
                onClick={() => {
                  setSelectedDate(date);
                }}
              >
                {date.getDate()}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyCalender;
