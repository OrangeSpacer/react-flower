export interface OrderState{
    orders: any[],
    loading: boolean,
    error: null | string
}

export enum OrderActionTypes{
    FETCH_ORDER = "FETCH_ORDER",
    FETCH_ORDER_SUCCESS = "FETCH_ORDER_SUCCES",
    FETCH_ORDER_ERROR = "FETCH_ORDER_ERROR"
}

interface FetchOrderState{
    type: OrderActionTypes.FETCH_ORDER
}

interface FetchOrderSuccessState{
    type: OrderActionTypes.FETCH_ORDER_SUCCESS,
    payload: any[]
}

interface FetchOrderErrorState{
    type: OrderActionTypes.FETCH_ORDER_ERROR,
    payload: string
}

export type orderAction = FetchOrderState | FetchOrderErrorState | FetchOrderSuccessState