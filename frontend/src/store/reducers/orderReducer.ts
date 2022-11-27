import { orderAction, OrderActionTypes, OrderState } from "../../Types/order"

const initialStore: OrderState = {
    orders: [],
    loading: false,
    error: null
}

export const orderReducer = (state = initialStore, action: orderAction): OrderState => {
    switch(action.type){
        case OrderActionTypes.FETCH_ORDER:
            return {...state,loading:true}
        case OrderActionTypes.FETCH_ORDER_SUCCESS:
            return {...state,loading:false,orders: action.payload}
        case OrderActionTypes.FETCH_ORDER_ERROR:
            return {...state,error: action.payload}
        default:
            return state
    }
}