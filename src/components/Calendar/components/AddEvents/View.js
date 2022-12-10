import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useNavigate } from "react-router-dom";
import { Form } from "antd";

//schema to validate event inputs
const schema = yup
  .object({
    title: yup.string().required("Can't Be Empty"),
    start: yup.date().required("Please specify the time to start"),
  })
  .required();

const AddEvents = ({ addEventApi, error, onHide }) => {
  const navigate = useNavigate();
  const [rerender, setRerender] = useState(false);
  const [dbError, setError] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (error && !firstRender) {
      setError(error);
    }
    if (!error?.start && !error?.end && dbError !== false) {
      setTimeout(navigate("/"));
    }
  }, [rerender]);
  //using form-hook to register event data
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    setFirstRender(false);
    addEventApi(values).then(() => {
      setRerender(!rerender);
    });
    setTimeout(() => {
      console.log("Close Modal");
      onHide();
    }, 1500);
  };

  return (
    //this form is in bootstrab
    <Form
      onFinish={handleSubmit(onSubmit)}
      className=" align-content-center m-5"
    >
      <div className="mb-4">
        <label htmlFor="client" className="form-label">
          Client Name
        </label>
        <input
          {...register("client")}
          type="text"
          placeholder="client"
          className="form-control"
          id="client"
          aria-describedby="client"
        />
        <p
          className={`error text-warning position-absolute ${
            errors.title ? "active" : ""
          }`}
        >
          {errors.title ? <i className="bi bi-info-circle me-2"></i> : ""}
          {errors.title?.message}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="title" className="form-label">
          Event Title
        </label>
        <input
          {...register("title")}
          type="text"
          placeholder="title"
          className="form-control"
          id="title"
          aria-describedby="title"
        />
        <p
          className={`error text-warning position-absolute ${
            errors.title ? "active" : ""
          }`}
        >
          {errors.title ? <i className="bi bi-info-circle me-2"></i> : ""}
          {errors.title?.message}
        </p>
      </div>
      <div className="mb-4" style={{ zIndex: "100" }}>
        <label htmlFor="start" className="form-label">
          Start Date
        </label>
        {/* controllers are the way you can wrap and use datePicker inside react form-hook*/}
        {/* start date controller*/}
        <Controller
          control={control}
          name="start"
          render={({ field }) => (
            <DatePicker
              minDate={new Date()}
              autoComplete="off"
              placeholderText="Select date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              value={field.value}
              showTimeSelect
              timeFormat="HH:mm"
              dateFormat="MMMM d, yyyy h:mm aa"
              className="form-control"
              id="start"
            />
          )}
        />
        {/* error handling */}
        <p
          className={`error text-warning position-absolute ${
            errors.start ? "active" : ""
          }`}
        >
          {errors.start ? <i className=" bi bi-info-circle me-2"></i> : ""}
          {errors.start?.message}
        </p>
        <p
          className={`error text-warning position-absolute ${
            dbError.start ? "" : "d-none"
          }`}
        >
          {dbError.start ? <i className=" bi bi-info-circle me-2"></i> : ""}
          {dbError.start}
        </p>
      </div>
      <div className="mb-4" style={{ zIndex: "100" }}>
        <label htmlFor="end" className="form-label">
          End Date
        </label>
        {/* end date controller*/}
        <Controller
          control={control}
          name="end"
          render={({ field }) => (
            <DatePicker
              minDate={new Date()}
              autoComplete="off"
              placeholderText="Select end date"
              onChange={(date) => field.onChange(date)}
              selected={field.value}
              value={field.value}
              timeFormat="HH:mm"
              dateFormat="MMMM d, yyyy h:mm aa"
              showTimeSelect
              className="form-control"
              id="end"
            />
          )}
        />
        <p
          className={`error text-warning position-absolute ${
            dbError.end ? "" : "d-none"
          }`}
        >
          {dbError.end ? <i className=" bi bi-info-circle me-2"></i> : ""}
          {dbError.end}
        </p>
      </div>
      <div className="mb-4">
        <label htmlFor="describe" className="form-label">
          Event Description{" "}
          <span className="text-danger small">(optional)</span>
        </label>
        <input
          {...register("describe")}
          type="text"
          placeholder="describe your event"
          className="form-control"
          id="describe"
          aria-describedby="describe"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="status" className="form-label">
          Status
        </label>
        <input
          {...register("status")}
          type="text"
          placeholder="status your event"
          className="form-control"
          id="status"
          aria-describedby="status"
        />
      </div>
      <button type="submit" className="btn btn-success">
        Create
      </button>
    </Form>
  );
};

export default AddEvents;
