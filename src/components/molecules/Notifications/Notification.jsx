import { notification } from 'antd'
import PropTypes from 'prop-types'

const Notification = ({title, message, type, placement}) => {
  notification[type]({
    message: title,
    description: message,
    placement,
  })
}

Notification.prototype ={
  placement: PropTypes.string,
  title: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'info', 'warning', 'warn'])
}

Notification.defaultProps = {
  placement: 'topRight',
  title: 'Error',
  message: 'Ocurrió un error inesperado. Inténtalo nuevamente.',
  type: 'error'
}

export default Notification