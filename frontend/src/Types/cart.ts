export interface CartState {
    items: any[],
    loading: boolean,
    error: string | null
}

export enum CartActionTypes{
    FETCH_CART = "FETCH_CART",
    FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS",
    FECTH_CART_ERROR = "FECTH_CART_ERROR",
    DELETE_CART_ITEM = "DELETE_CART_ITEM",
    ADD_CART_ITEM = "ADD_CART_ITEM",
    ADD_QUNATITY_ITEM_CART = "ADD_QUANTITY_ITEM_CART"
}

interface FetchCartAction{
    type: CartActionTypes.FETCH_CART
}

interface FetchCartSuccessAction{
    type: CartActionTypes.FETCH_CART_SUCCESS,
    payload: any[]
}

interface FecthCartErrorAction{
    type: CartActionTypes.FECTH_CART_ERROR,
    payload: string
}

interface DeleteCartItemAction{
    type: CartActionTypes.DELETE_CART_ITEM
}

interface AddCartItemAction{
    type: CartActionTypes.ADD_CART_ITEM,
    payload: any[]
}

interface AddQuantityItemAction{
    type: CartActionTypes.ADD_QUNATITY_ITEM_CART
}

export type cartAction = FetchCartAction | FetchCartSuccessAction | FecthCartErrorAction | DeleteCartItemAction | AddCartItemAction | AddQuantityItemAction