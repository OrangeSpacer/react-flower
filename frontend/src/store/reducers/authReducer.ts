import { authAction, AuthActionTypes, AuthState } from "../../Types/auth"

const initialState: AuthState = {
    auth:false,
    loading:false,
    error:null
}


export const authReducer = (state = initialState,action: authAction): AuthState => {
    switch(action.type){
        case AuthActionTypes.FETCH_AUTH:
            return {...state,loading:true}
        case AuthActionTypes.FETCH_AUTH_SUCCESS:
            return {...state,auth:action.payload}
        case AuthActionTypes.FETCH_AUTH_ERROR:
            return {...state,error: action.payload}
        default:
            return state
    }
}