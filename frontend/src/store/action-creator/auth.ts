import axios from "axios"
import { Dispatch } from "react"
import { authAction, AuthActionTypes } from "../../Types/auth"

export const fetchAuth = () => {
    return async(dispatch: Dispatch<authAction>) => {
        try{
            dispatch({type:AuthActionTypes.FETCH_AUTH})
            const token = localStorage.getItem('token')
            dispatch({
                type: AuthActionTypes.FETCH_AUTH_SUCCESS,
                payload:!!token
            })
            console.log(token)
        }catch(e:any){
            dispatch({
                type:AuthActionTypes.FETCH_AUTH_ERROR,
                payload: e
            })
        }
    }
}

export const loginAuth = (email:string,password:string) => {
    return async(dispatch: Dispatch<authAction>) => {
        try{
            dispatch({type:AuthActionTypes.FETCH_AUTH})
            const {data} = await axios.post('/api/user/login',{
                email:email,
                password:password
            })
            dispatch({
                type: AuthActionTypes.LOGIN_AUTH,
                payload: true
            })
            localStorage.setItem('token',data.token)
            dispatch({
                type: AuthActionTypes.FETCH_AUTH_ERROR,
                payload: ''
            })
        }catch(e:any){
            dispatch({
                type: AuthActionTypes.FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
            console.log(e.response.data.message)
        }
    }
}

export const logoutAuth = () => {
    return async(dispatch: Dispatch<authAction>) => {
        try{
            localStorage.removeItem('token')
            dispatch({
                type: AuthActionTypes.LOGOUT_AUTH,
                payload: false
            })
        }catch(e:any){
            dispatch({
                type: AuthActionTypes.FETCH_AUTH_ERROR,
                payload: e
            })
        }
    }
}

export const registerAuth = (email:string,password:string) => {
    return async(dispatch: Dispatch<authAction>) => {
        try{
            dispatch({type:AuthActionTypes.FETCH_AUTH})
            const {data} = await axios.post('/api/user',{
                email:email,
                password:password
            })
            localStorage.setItem('token',data.token)
            dispatch({
                type: AuthActionTypes.REGISTER_AUTH,
                payload: true
            })
            dispatch({
                type: AuthActionTypes.FETCH_AUTH_ERROR,
                payload: ''
            })
        }catch(e:any){
            dispatch({
                type: AuthActionTypes.FETCH_AUTH_ERROR,
                payload: e.response.data.message
            })
            console.log(e.response.data.message)
        }
    }
}