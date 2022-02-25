import { api, login } from './config/axios'
import endPoints from './config/endPoints'

export default {

    async getProductos() {
        try {
            const response = await api.get(endPoints.getProducts)
            return response.data.lista
        } catch (error) {
            console.error(error)
        }
    },

    async getGruposAfinidad() {
        try {
            const response = await api.get(endPoints.getGruposAfinidad)
            return response.data.lista
        } catch (error) {
            console.error(error)
        }
    },

    async getCuentas(values) {
        try {
            const response = await api.get(`${endPoints.getCuentas}${values}`)
            return response.data.lista
        } catch (error) {
            console.log(error)
        }
    },

    async getSucursales() {
        try {
            const response = await api.get(`${endPoints.getSucursales}`)
            return response.data.lista
        } catch (error) {
            console.log(error)
        }
    },

    async getGruposAfinidad() {
        try {
            const response = await api.get(`${endPoints.getGruposAfinidad}`)
            return response.data.lista
        } catch (error) {
            console.log(error)
        }
    },

    async getPosicionesImpositivas() {
        try {
            const response = await api.get(`${endPoints.getPosicionesImpositivas}`)
            return response.data.lista
        } catch (error) {
            console.log(error)
        }
    },

    async getTipoProducto() {
        try {
            const response = await api.get(`${endPoints.getTipoProducto}`)
            return response.data.lista
        } catch (error) {
            console.log(error)
        }
    },



    async postCuenta(data) {
        // console.log(data);
        try {
            const response = await login.post(endPoints.postCuenta, data)
            return response
        } catch (error) {
            console.log(error)
        }
    }
}