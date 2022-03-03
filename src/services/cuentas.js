import { api, login } from './config/axios'
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

    async getCuentas(values) {
        try {
            const response = await api.get(`${endPoints.getCuentas}${values}`)
            return response.data.lista
        } catch (error) {
            console.error(error)
            notificationError({message: error})
        }
    },

    async getCuentasId(id) {
        try {
            const response = await api.get(`${endPoints.getCuentaId}/${id}`)
            return response.data
        } catch (error) {
            console.error(error)
            notificationError({message: error})
        }
    },

    async postCuenta(data) {
        // console.error(data);
        try {
            const response = await login.post(endPoints.postCuenta, data)
            return response
        } catch (error) {
            console.error(error)
            notificationError({message: error})
        }
    }
}