import React, { useReducer } from 'react'
import UserReducer from './UserReducer'
import UserContext from './UserContext'
import axios from 'axios'
import { GET_PROFILE, GET_USER } from "../types";

const UserState = (props) => {
    const initialState = {
        user: {},
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUser = async () => {
        const res = await axios.get('https://reqres.in/api/users')
        dispatch({
            type: GET_USER,
            payload: res.data.data

        })
     }
    const getProfile = async (id) => {
        const res = await axios.get('https://reqres.in/api/users/' + 3)
        dispatch({
            type: GET_PROFILE,
            payload: res.data.data

        })
     }
    return (
        <UserContext.Provider value={{
            user: state.user,
            getUser,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;