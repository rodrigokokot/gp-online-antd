import { login } from './config/axios'
import endPoints from './config/endPoints'

export default {
    async getToken() {
        try {
            const response = await login.post(endPoints.accesToken, {
                "username": "admin9999",
                "password": "GlobalProc#1",
                "grant_type": "password",
                "client_id": "GlobalOnline",
                "client_secret": "aa8a0dee-e723-494d-98bd-90bab9ab8dee"
            })
            return response
        } catch (error) {
            console.log(error)
        }
    },
}