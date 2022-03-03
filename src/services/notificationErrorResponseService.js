import { notification } from "antd";

const notificationError = ({message}) => {
  notification.error({
    message: `Error`,
    description: message,
    placement: "topRight",
  });
}

export default notificationError