import React, { useEffect, useState } from "react";
import "./AddBookings.scss";

import {
  Button,
  DatePicker,
  Form,
  Input,
  Modal,
  Select,
  Spin,
  TimePicker,
} from "antd";
import styled from "styled-components";
import { RecurrenceOptions } from "../../constants";
import moment from "moment";

const AddBookings = (props) => {
  const [form] = Form.useForm();
  const { actions, isModalLoading, isModalOpen, defaultValue } = props;

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
      status: "unpaid",
    };

    actions.addBooking({
      data: formData,
    });
  };

  const onClose = () => {
    form.resetFields();

    actions.setAddBookingState();
    actions.setIsAddModalOpen({ open: false });
  };
  const date = Form.useWatch("date", form);

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
        return Promise.reject("End time must be later than start time!");
      }
    }
    return Promise.resolve();
  };

  return (
    <Modal
      className="add-booking-form"
      footer={false}
      visible={isModalOpen}
      onCancel={onClose}
    >
      <Spin spinning={isModalLoading}>
        <p className="add-booking-form__title">New Booking</p>
        <Divider />
        <Form
          form={form}
          onFinish={onFinish}
          autoComplete="off"
          initialValues={initial}
          validateTrigger="onSubmit"
        >
          <div className="add-booking-form__container">
            <Form.Item
              className="add-booking-form__container-input-fields"
              label="Client"
              name="client"
              rules={[
                {
                  required: true,
                  message: "Please input your Client name",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="add-booking-form__container-input-fields"
              label="Resource"
              name="resource"
              rules={[
                {
                  required: true,
                  message: "Please input your Resource",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              className="add-booking-form__container-input-fields"
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please Select Booking Date",
                },
              ]}
            >
              <DatePicker format={"ll"} disabledDate={disabledDate} />
            </Form.Item>
            <Form.Item
              className="add-booking-form__container-input-fields"
              label="Time"
              name="time"
              rules={[
                { required: true, message: "Please select a time range!" },
                { validator: validateStartEndTime },
              ]}
            >
              <TimePicker.RangePicker
                format="HH:mm"
                minuteStep={15}
                disabled={timeDisabled}
              />
            </Form.Item>
            <Form.Item
              className="add-booking-form__container-input-fields"
              label="Recurrence"
              name="recurrence"
              rules={[
                {
                  required: true,
                  message: "Please Select Recurrence",
                },
              ]}
            >
              <Select options={RecurrenceOptions} />
            </Form.Item>
          </div>

          <div className="add-booking-form__container-actions">
            <Form.Item>
              <Button
                className="add-booking-form__container-actions__checkout-btn"
                type="primary"
              >
                Express Checkout
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="add-booking-form__container-actions__add-booking-btn"
                htmlType="submit"
              >
                Add Booking
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Spin>
    </Modal>
  );
};

const Divider = styled.p`
  margin-top: 22px;
  margin-bottom: 8px;
  border: 1px solid ${(p) => p.theme.colors.assetGray};
`;

export default AddBookings;
