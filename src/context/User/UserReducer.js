import { GET_PROFILE, GET_USER } from '../types'

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_USER:
            return {
                ...state,
                user: payload
            }
        case GET_PROFILE:
            return {
                ...state,
                user: payload
            }
        default: return state
    }
}