import { api } from './config/axios'
import endPoints from './config/endPoints'
import notificationError from './notificationErrorResponseService'

export default {
    async getGruposAfinidad() {
        try {
            const response = await api.get(endPoints.getGruposAfinidad)
            return response.data.lista
        } catch (error) {
            console.error(error)
            notificationError({message: error})
        }
    },

}