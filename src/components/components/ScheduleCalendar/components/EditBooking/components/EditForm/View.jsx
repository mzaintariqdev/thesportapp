import { Button, DatePicker, Form, Select, Input, TimePicker } from 'antd';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { RecurrenceOptions } from '../../../../constants';

import './EditForm.scss';

function EditForm(props) {
  const [form] = Form.useForm();
  const { data, onCancel, actions, id } = props;
  const date = Form.useWatch('date', form);
  const [timeDisabled, setTimeDisabled] = useState(true);

  useEffect(() => {
    if (date) {
      setTimeDisabled(false);
    } else {
      setTimeDisabled(true);
    }
  }, [date]);

  const initial = {
    date: moment(data?.date),
    clientName: data?.clientName,
    resource: data?.resource,
    recurrence: data?.recurrence,
    time: [moment(data?.start), moment(data?.end)],
    status: data?.status,
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
      status: data?.status,
    };

    actions.editBookingById({
      data: formData,
      id,
    });
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      autoComplete="off"
      initialValues={initial}
      validateTrigger="onSubmit"
      className="edit-booking-form__container"
    >
      <Form.Item
        className="add-booking-form__container-input-fields"
        label="Client"
        name="clientName"
        rules={[
          {
            required: true,
            message: 'Please input your Client name',
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
            message: 'Please input your Resource',
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
            message: 'Please Select Booking Date',
          },
        ]}
      >
        <DatePicker format={'ll'} disabledDate={disabledDate} />
      </Form.Item>
      <Form.Item
        className="add-booking-form__container-input-fields"
        label="Time"
        name="time"
        rules={[
          { required: true, message: 'Please select a time range!' },
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
            message: 'Please Select Recurrence',
          },
        ]}
      >
        <Select options={RecurrenceOptions} />
      </Form.Item>

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
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default EditForm;
