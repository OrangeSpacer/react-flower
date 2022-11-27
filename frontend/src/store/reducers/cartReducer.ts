import { cartAction, CartActionTypes, CartState } from "../../Types/cart"

const initialStore: CartState = {
    items:[],
    loading:false,
    error:null
}

export const cartReducer = (state = initialStore,action:cartAction): CartState => {
    switch(action.type){
        case CartActionTypes.FETCH_CART:
            return {...state,loading:true}
        case CartActionTypes.FETCH_CART_SUCCESS:
            return {...state,loading:false,items:action.payload}
        case CartActionTypes.FECTH_CART_ERROR:
            return {...state,error:action.payload}
        case CartActionTypes.ADD_CART_ITEM:
            return {...state,items:action.payload}
        case CartActionTypes.DELETE_CART_ITEM:
            return {...state}
        case CartActionTypes.ADD_QUNATITY_ITEM_CART:
            return {...state}
        default:
            return state
    }
}