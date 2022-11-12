export interface AuthState {
    auth: boolean,
    loading: boolean,
    error: null | string
}

export enum AuthActionTypes {
    FETCH_AUTH = "FETCH_AUTH",
    FETCH_AUTH_ERROR = "FETCH_AUTH_ERROR",
    FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS",
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGOUT_AUTH = "LOGOUT_AUTH",
    REGISTER_AUTH = "REGISTER_AUTH"

}

interface FetchAuthState{
    type: AuthActionTypes.FETCH_AUTH
}

interface FetchAuthErrorState{
    type: AuthActionTypes.FETCH_AUTH_ERROR,
    payload: string
}

interface FetchAuthSuccessState{
    type: AuthActionTypes.FETCH_AUTH_SUCCESS,
    payload: boolean
}

interface FetchLoginAuth{
    type: AuthActionTypes.LOGIN_AUTH,
    payload: boolean
}

interface FetchRegisterAuth{
    type: AuthActionTypes.REGISTER_AUTH,
    payload:boolean
}

interface FetchLogoutAuth{
    type: AuthActionTypes.LOGOUT_AUTH,
    payload: boolean
}

export type authAction = FetchAuthErrorState | FetchAuthState | FetchAuthSuccessState | FetchLoginAuth | FetchLogoutAuth | FetchRegisterAuth