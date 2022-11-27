import { authAction, AuthActionTypes, AuthState } from "../../Types/auth"

const initialState: AuthState = {
    auth:false,
    role: "USER",
    loading:false,
    error:null
}


export const authReducer = (state = initialState,action: authAction): AuthState => {
    switch(action.type){
        case AuthActionTypes.FETCH_AUTH:
            return {...state,loading:true}
        case AuthActionTypes.FETCH_AUTH_SUCCESS:
            return {...state,loading:false,auth:action.payload}
        case AuthActionTypes.FETCH_AUTH_ERROR:
            return {...state,error: action.payload}
        case AuthActionTypes.LOGIN_AUTH:
            return {...state,loading:false,auth: action.payload}
        case AuthActionTypes.USER_ROLE:
            return {...state, role:action.payload}
        case AuthActionTypes.LOGOUT_AUTH:
            return {...state,auth: action.payload}
            case AuthActionTypes.REGISTER_AUTH:
                return {...state,loading:false,auth: action.payload}
        default:
            return state
    }
}