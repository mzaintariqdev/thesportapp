import React, { useEffect, useState } from 'react';
import './EditBooking.scss';

import { Dropdown, Form, Menu, Modal, Spin } from 'antd';

import { ReactComponent as EditIcon } from '../../../../../assets/icons/edit.svg';

import BookingStatus from '../../../BookingStatus/View';
import BookingDetails from './components/BookingDetails/View';
import { MoreOutlined } from '@ant-design/icons';
import EditForm from './components/EditForm';

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

  useEffect(() => {
    actions.getBookingById({ id: bookingId });
  }, [bookingId]);

  const [editForm, setEditForm] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => form.resetFields(), [defaultValue]);

  const onClose = () => {
    form.resetFields();
    setEditForm(false);
    actions.setBookingById({ data: {} });
    actions.setIsEditModalOpen({ open: false });
  };

  const onDelete = () => {
    actions.deleteBookingById({ id: bookingId });
    actions.setBookingById({ data: {} });
    actions.setIsEditModalOpen({ open: false });
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

  const setEdit = () => {
    setEditForm(!editForm);
  };

  return (
    <Modal
      className="edit-booking-form"
      footer={false}
      visible={isModalOpen}
      onCancel={onClose}
    >
      <Spin spinning={isModalLoading}>
        <div className="edit-booking-form__header">
          <p className="edit-booking-form__header-title">
            {editForm ? 'Edit Booking' : 'Booking Information'}
          </p>
          {editForm ? (
            ''
          ) : (
            <div className="edit-icon">
              <EditIcon onClick={setEdit} />
              <Dropdown overlay={menu} trigger={['click']}>
                <a onClick={(e) => e.preventDefault()}>
                  <MoreOutlined />
                </a>
              </Dropdown>
            </div>
          )}
        </div>
        {editForm ? (
          <EditForm data={bookingData} onCancel={setEdit} id={bookingId} />
        ) : (
          <>
            <div onClick={onDelete} className="edit-booking-form__status">
              <BookingStatus status="unpaid" />
            </div>

            <BookingDetails onCancel={onClose} bookingData={bookingData} />
          </>
        )}
      </Spin>
    </Modal>
  );
};

export default EditBooking;
