const CustomEventComponent = (event) => {
  return (
    <div style={{ display: "flex", height: "40px" }}>
      <h1 style={{ color: "black", fontSize: "12px" }}>{event.event.status}</h1>
      <h1 style={{ color: "black", fontSize: "12px" }}>{event.event.client}</h1>
    </div>
  );
};

export default CustomEventComponent;
