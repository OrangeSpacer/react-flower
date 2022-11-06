export interface ProductsState {
    items: any[],
    loading: boolean,
    error: null | string
}

export enum ProductsAtionTypes{
    FETCH_PRODUCTS = "FECTH_PRODUCTS",
    FECTH_PRODUCTS_SUCCESS = "FECTH_PRODUCTS_SUCCESS",
    FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
    SET_PRODUCTS = "SET_PRODUCTS",
    DETELE_ITEM_ON_CART = "DETELE_ITEM_ON_CART",
    SET_CATALOG_NEW = "SET_CATALOG_NEW"
}

interface FetchProductsAction {
    type: ProductsAtionTypes.FETCH_PRODUCTS
}

interface FetchProductsSuccessAction{
    type: ProductsAtionTypes.FECTH_PRODUCTS_SUCCESS,
    payload: any[]
}

interface FetchProductsErrorAction{
    type: ProductsAtionTypes.FETCH_PRODUCTS_ERROR,
    payload: string
}

interface FetchProductsSetAction{
    type: ProductsAtionTypes.SET_PRODUCTS,
}

interface FetchProductsSetNewAction{
    type: ProductsAtionTypes.SET_CATALOG_NEW
}

interface DeleteItemOnCart{
    type: ProductsAtionTypes.DETELE_ITEM_ON_CART,
    payload: []
}

export type productsAction = FetchProductsAction | FetchProductsSuccessAction | FetchProductsErrorAction | FetchProductsSetNewAction | FetchProductsSetAction | DeleteItemOnCart