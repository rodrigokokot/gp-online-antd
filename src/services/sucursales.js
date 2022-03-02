import { api } from './config/axios'
import endPoints from './config/endPoints'

export default {
    async getSucursales(values) {
        let response;
        try {
            if (values !== undefined) {
                response = await api.get(`${endPoints.getSucursales}/${values}`)
                return response.data
            }
            else {
                response = await api.get(endPoints.getSucursales)
                return response.data.lista
            }
        } catch (error) {
            console.error(error)
        }
    },

    async putSucursal(data) {
        console.log(data)
        // try {
        //     const response = await api.put(endPoints.getSucursales,data)
        //     return response
        // } catch (error) {
        //     console.error(error)
        // }
    },

    async getProvincias() {
        try {
            const response = await api.get(endPoints.getProvincias)
            return response.data
        } catch (error) {
            console.error(error)
        }
    },

    async getEstados() {
        try {
            const response = await api.get(endPoints.getEstados)
            return response.data
        } catch (error) {
            console.error(error)
        }
    },

}