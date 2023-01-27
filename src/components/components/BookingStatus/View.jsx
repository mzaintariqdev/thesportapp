import classNames from "classnames";

import "./BookingStatus.scss";

function BookingStatus(props) {
  const { status } = props;
  return (
    <div
      className={classNames(
        "status-container",
        status === "unpaid" ? "unpaid" : "others"
      )}
    >
      {status}
    </div>
  );
}

export default BookingStatus;
