import { api } from './config/axios'
import endPoints from './config/endPoints'
import notificationError from './notificationErrorResponseService'

export default {
    async getProductos() {
        try {
            const response = await api.get(endPoints.getProducts)
            return response.data.lista
        } catch (error) {
            console.error(error)
            notificationError({message: error})
        }
    },
}