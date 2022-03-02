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
        const jdata = JSON.parse(data);
        console.log(jdata)
        const body = {
            "sucursal": {
                "idSucursal": jdata.idSucursal,
                "descripcion": jdata.descripcion,
                "idDomicilio": 0,
                "idEstado": jdata.estado,
                "rowVersion": 0,
                "domicilio": {
                    "idDomicilio": 0,
                    "idPais": 0,
                    "idProvincia": jdata.provincia,
                    "idCodigoPostal": "string",
                    "direccion": "string",
                    "numero": 0,
                    "piso": "string",
                    "depto": "string",
                    "entreCalles": jdata.calle,
                    "referencia": "string",
                    "telefono": "string",
                    "barrio": "string",
                    "localidad": jdata.localidad,
                    "replicaDomicilioLegal": true,
                    "rowVersion": 0
                }
            }
        }
        try {
            const response = await api.put(endPoints.getSucursales, body)
            return response
        } catch (error) {
            console.error(error)
        }
    },

    async postSucursal(data) {
        console.log(data)
        const body = {
            "sucursal": {
                "idSucursal": 0,
                "descripcion": "string",
                "idDomicilio": 0,
                "idEstado": 0,
                "rowVersion": 0,
                "domicilio": {
                    "idDomicilio": 0,
                    "idPais": 0,
                    "idProvincia": "string",
                    "idCodigoPostal": "string",
                    "direccion": "string",
                    "numero": 0,
                    "piso": "string",
                    "depto": "string",
                    "entreCalles": "string",
                    "referencia": "string",
                    "telefono": "string",
                    "barrio": "string",
                    "localidad": "string",
                    "replicaDomicilioLegal": true,
                    "rowVersion": 0
                }
            }
        }
        try {
            const response = await api.post(endPoints.getSucursales,body)
            return response
        } catch (error) {
            console.error(error)
        }
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