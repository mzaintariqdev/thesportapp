import { Modal, Button } from "react-bootstrap";
import React from "react";
import "../../style/model.scss";
import { Link } from "react-router-dom";

const Popping = ({
  open,
  handleClose,
  event,
  deleteEventApi,
  renderStatus,
  rerender,
}) => {
  const { id, describe, title, start, end, client, status } = event;

  const handleDelete = async () => {
    await deleteEventApi(event.id);
    rerender(!renderStatus);
  };

  const modal = () => {
    return (
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-capitalize">{title}</Modal.Title>
          <Modal.Title className="text-capitalize">
            {client} {status}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {describe ? (
            <p className="lead">{describe}</p>
          ) : (
            "No Dsecriptions Yet"
          )}
          <div className="row justify-content-between">
            <p className="col small text-muted text-center pb-0 mb-0">
              from: {start}
            </p>
            <p className="col small text-muted text-center pb-0 mb-0">
              to: {end}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleClose}>
            Close
          </Button>
          <Link to={`/event/${id}/update`}>
            <Button variant="success">Update</Button>
          </Link>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  if (id) {
    return modal();
  } else {
    <p>there is no modal to preview</p>;
  }
};

export default Popping;
