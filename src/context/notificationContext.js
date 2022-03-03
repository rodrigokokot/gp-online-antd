import { notification } from "antd";
import { createContext, useContext } from "react";


export const NotificationContext = createContext();
const [api, contextHolder] = notification.useNotification();

export const useNotification = () => {
    const context = useContext(NotificationContext)
    if(!context) throw new Error('No existe un auth provider')
    return context
}


export function NotificationProvider({ children }) {
    const openNotification = () => {
      api.info({
        message: `Notification `,
        description: <NotificationContext.Consumer>{({ name }) => `Hello, ${name}!`}</NotificationContext.Consumer>,
        placement: 'topRight',
      });
    };

    return <NotificationContext.Provider value={{ name: 'Ant Design' }} >{ contextHolder }</NotificationContext.Provider>
}