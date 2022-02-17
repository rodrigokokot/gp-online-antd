import { api, jsonPlaceHolder} from './config/axios'

export default {
    async getAll() {
        const response = await jsonPlaceHolder.get('/posts')
        return response.data
    },

    async apiGPgetAll() {
        const response = await api.get('/posts')
        return response.data
    }

}