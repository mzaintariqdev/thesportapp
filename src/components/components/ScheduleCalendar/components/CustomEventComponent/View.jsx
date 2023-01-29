import "./CustomEventComponent.scss";

const CustomEventComponent = (event) => {
  return (
    <div className="event-container">
      <h1 className="event-container__client-name">{event.event.clientName}</h1>
    </div>
  );
};

export default CustomEventComponent;
