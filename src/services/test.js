import api from './config/axios'

export default {
    getAll = () => {
        return api.get()
    }
}