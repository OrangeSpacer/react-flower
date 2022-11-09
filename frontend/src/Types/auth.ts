export interface AuthState {
    auth: boolean,
    loading: boolean,
    error: null | string
}

export enum AuthActionTypes {
    FETCH_AUTH = "FETCH_AUTH",
    FETCH_AUTH_ERROR = "FETCH_AUTH_ERROR",
    FETCH_AUTH_SUCCESS = "FETCH_AUTH_SUCCESS",
    POST_AUTH = "POST_AUTH"
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

export type authAction = FetchAuthErrorState | FetchAuthState | FetchAuthSuccessState