import React, { useEffect, useState } from 'react';
import './EditBooking.scss';

import {
  Button,
  DatePicker,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  Popover,
  Select,
  Spin,
  TimePicker,
} from 'antd';
import styled from 'styled-components';
import { RecurrenceOptions } from '../../constants';
import moment from 'moment';
import BookingStatus from '../../../BookingStatus/View';
import BookingDetails from './components/BookingDetails/View';
import {
  EllipsisOutlined,
  MoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const EditBooking = (props) => {
  const [form] = Form.useForm();
  const {
    actions,
    isModalLoading,
    isModalOpen,
    defaultValue,
    bookingId,
    bookingData,
  } = props;
  console.log('booking id', bookingData);
  useEffect(() => {
    actions.getBookingById({ id: bookingId });
  }, [bookingId]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => form.resetFields(), [defaultValue]);
  const [timeDisabled, setTimeDisabled] = useState(true);

  const onFinish = (data) => {
    let date = moment(data.date);
    const endTime = moment(data.time[1]);
    const startTime = moment(data.time[0]);
    endTime.set({ year: date.year(), month: date.month(), date: date.date() });
    startTime.set({
      year: date.year(),
      month: date.month(),
      date: date.date(),
    });
    const formData = {
      clientName: data.client,
      recurrence: data.recurrence,
      resource: data.resource,
      start: moment(startTime).toDate(),
      end: moment(endTime).toDate(),
      date: moment(data.date).toDate(),
      status: 'unpaid',
    };

    actions.addBooking({
      data: formData,
    });
  };

  const onClose = () => {
    form.resetFields();

    actions.setBookingById({ data: {} });
    actions.setIsEditModalOpen({ open: false });
  };

  const onDelete = () => {
    actions.deleteBookingById({ id: bookingId });
    actions.setBookingById({ data: {} });
    actions.setIsEditModalOpen({ open: false });
  };
  const date = Form.useWatch('date', form);

  useEffect(() => {
    if (date) {
      setTimeDisabled(false);
    } else {
      setTimeDisabled(true);
    }
  }, [date]);

  const initial = {
    date: moment(defaultValue.date),
  };

  const disabledDate = (current) => {
    return current < moment();
  };

  const validateStartEndTime = (rule, value) => {
    if (value && value[0] && value[1]) {
      const startTime = value[0].valueOf();
      const endTime = value[1].valueOf();
      if (startTime >= endTime) {
        return Promise.reject('End time must be later than start time!');
      }
    }
    return Promise.resolve();
  };

  const handleClick = ({ key }) => {
    console.log(key);
    //you can perform setState here
    if (key === 'Delete') {
      onDelete();
    }
  };

  const menu = (
    <Menu onClick={handleClick}>
      <Menu.Item key="Delete">Delete</Menu.Item>
    </Menu>
  );

  return (
    <Modal
      className="edit-booking-form"
      footer={false}
      visible={isModalOpen}
      onCancel={onClose}
    >
      <Spin spinning={isModalLoading}>
        <div className="edit-booking-form__header">
          <p className="edit-booking-form__header-title">Booking Information</p>
          <Dropdown overlay={menu} trigger={['click']}>
            <a onClick={(e) => e.preventDefault()}>
              <MoreOutlined />
            </a>
          </Dropdown>
        </div>

        <div onClick={onDelete} className="edit-booking-form__status">
          <BookingStatus status="unpaid" />
        </div>

        <BookingDetails onCancel={onClose} bookingData={bookingData} />
      </Spin>
    </Modal>
  );
};

export default EditBooking;
