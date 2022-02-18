import { api, jsonPlaceHolder, login } from './config/axios'

export default {
    async getAll() {
        const response = await jsonPlaceHolder.get('/posts')
        return response.data
    },

    async getToken() {
        const response = await login.post('/AccessToken/AllData', {
            "username": "admin9999",
            "password": "GlobalProc#1",
            "grant_type": "password",
            "client_id": "GlobalOnline",
            "client_secret": "aa8a0dee-e723-494d-98bd-90bab9ab8dee"
        })
        return response
    },

    async getProductos() {
        const response = await api.get('/Productos?IsActive=true')
        return response
    },
}