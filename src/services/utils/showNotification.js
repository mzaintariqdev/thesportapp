import { notification } from "antd";

const showNotifications = (description, error = false, apiStatus = 200) => {
  if (error) {
    notification.error({
      message: `Error ${apiStatus}`,
      description,
    });
  } else {
    notification.success({
      message: "Success",
      description,
    });
  }
};

export default showNotifications;
