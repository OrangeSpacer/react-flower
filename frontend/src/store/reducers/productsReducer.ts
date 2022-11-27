import { productsAction, ProductsAtionTypes, ProductsState } from "../../Types/produts"

const initialStore: ProductsState = {
    items: [],
    loading: false,
    error: null
}

export const productsReducer = (state = initialStore,action:productsAction): ProductsState => {
    switch(action.type){
        case ProductsAtionTypes.FETCH_PRODUCTS:
            return {loading: true,error: null, items: []}
        case ProductsAtionTypes.FECTH_PRODUCTS_SUCCESS:
            return {...state,loading:false,items: action.payload}
        case ProductsAtionTypes.FETCH_PRODUCTS_ERROR:
            return {...state,error:action.payload}
        case ProductsAtionTypes.DETELE_ITEM_ON_CART:
            return {...state,items:action.payload}
        case ProductsAtionTypes.DELETE_PRODUCTS_CATALOG:
            return {...state,items:[]}
        default:
            return state
    }
}