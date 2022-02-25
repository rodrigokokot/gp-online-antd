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
        const jdata = JSON.parse(data);
        console.log(jdata)
        // const body = {
        //     "cuenta": {
        //         "Nombre": jdata.nombre,
        //         "Apellido": jdata.apellido,
        //         "Email": jdata.email,
        //         "Sexo": "F",
        //         "IdProducto": 101,
        //         "FechaNacimiento": "1980-04-20",
        //         "IdCuentaExterna": "",
        //         "SucursalEmisora": jdata.sucursal,
        //         "GrupoAfinidad": 1,
        //         "Nacionalidad": 32,
        //         "TrackingId": "4564233",
        //         "TipoTarjeta": 1,
        //         "DocumentoOtro": "20254733017",
        //         "Documento": {
        //             "Tipo": 1,
        //             "Numero": "25473301"
        //         },
        //         "Embozado": {
        //             "Nombre": "Gabriela Gomez",
        //             "CuartaLinea": ""
        //         },
        //         "Telefono": {
        //             "Particular": "1141615646",
        //             "Celular": "1145874512",
        //             "Correspondencia": "1145874512",
        //             "Laboral": "1147964519",
        //             "Otro": "1147094800"
        //         },
        //         "DomicilioParticular": {
        //             "Pais": 32,
        //             "Provincia": 1,
        //             "CodigoPostal": "1004",
        //             "Calle": "SMartin",
        //             "Piso": "",
        //             "Departamento": "",
        //             "Altura": "536",
        //             "Localidad": "CABA",
        //             "Comentario": ""
        //         },
        //         "DomicilioCorrespondencia": {
        //             "Pais": 32,
        //             "Provincia": 1,
        //             "CodigoPostal": "1004",
        //             "Calle": "SMartin",
        //             "Piso": "",
        //             "Departamento": "",
        //             "Altura": "536",
        //             "Localidad": "CABA",
        //             "Comentario": ""
        //         }
        //     }
        // }
        const body = {
            "cuenta": {
                "Nombre": "Gabriela Gomez",
                "Apellido": "Aprepaga",
                "Email": "gg@gmail.com",
                "Sexo": "F",
                "IdProducto": 101,
                "FechaNacimiento": "1980-04-20",
                "IdCuentaExterna": "",
                "SucursalEmisora": 1,
                "GrupoAfinidad": 1,
                "Nacionalidad": 32,
                "TrackingId": "4564233",
                "TipoTarjeta": 1,
                "DocumentoOtro": "20254733017",
                "Documento": {
                    "Tipo": 1,
                    "Numero": "25473301"
                },
                "Embozado": {
                    "Nombre": "Gabriela Gomez",
                    "CuartaLinea": ""
                },
                "Telefono": {
                    "Particular": "1141615646",
                    "Celular": "1145874512",
                    "Correspondencia": "1145874512",
                    "Laboral": "1147964519",
                    "Otro": "1147094800"
                },
                "DomicilioParticular": {
                    "Pais": 32,
                    "Provincia": 1,
                    "CodigoPostal": "1004",
                    "Calle": "SMartin",
                    "Piso": "",
                    "Departamento": "",
                    "Altura": "536",
                    "Localidad": "CABA",
                    "Comentario": ""
                },
                "DomicilioCorrespondencia": {
                    "Pais": 32,
                    "Provincia": 1,
                    "CodigoPostal": "1004",
                    "Calle": "SMartin",
                    "Piso": "",
                    "Departamento": "",
                    "Altura": "536",
                    "Localidad": "CABA",
                    "Comentario": ""
                }
            }
        }
        console.log(body);
        try {
            const response = await api.post(endPoints.postCuenta, JSON.stringify(body))
            return response
        } catch (error) {
            console.log(error)
        }
    },

    async putCuenta(data) {
        console.log(JSON.parse(data));
        const body = {
            "cuenta": {
                "Nombre": data.nombre,
                "Apellido": data.apellido,
                "Email": data.email,
                "Sexo": "F",
                "IdProducto": 23,
                "FechaNacimiento": "1980-04-20",
                "IdCuentaExterna": "",
                "SucursalEmisora": data.sucursal,
                "GrupoAfinidad": 1,
                "Nacionalidad": 32,
                "TrackingId": "4564233",
                "TipoTarjeta": 1,
                "DocumentoOtro": "20254733017",
                "Documento": {
                    "Tipo": 1,
                    "Numero": data.documento
                },
                "Embozado": {
                    "Nombre": "Gabriela Gomez",
                    "CuartaLinea": ""
                },
                "Telefono": {
                    "Particular": "1141615646",
                    "Celular": "1145874512",
                    "Correspondencia": "1145874512",
                    "Laboral": "1147964519",
                    "Otro": "1147094800"
                },
                "DomicilioParticular": {
                    "Pais": 32,
                    "Provincia": 1,
                    "CodigoPostal": "1004",
                    "Calle": "SMartin",
                    "Piso": "",
                    "Departamento": "",
                    "Altura": "536",
                    "Localidad": "CABA",
                    "Comentario": ""
                },
                "DomicilioCorrespondencia": {
                    "Pais": 32,
                    "Provincia": 1,
                    "CodigoPostal": "1004",
                    "Calle": "SMartin",
                    "Piso": "",
                    "Departamento": "",
                    "Altura": "536",
                    "Localidad": "CABA",
                    "Comentario": ""
                }
            }
        }
        // try {
        //     const response = await api.put(endPoints.postCuenta, JSON.stringify(body))
        //     return response
        // } catch (error) {
        //     console.log(error)
        // }
    }
}