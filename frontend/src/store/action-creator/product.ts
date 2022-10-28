import axios from "axios"
import { Dispatch } from "react"
import { productsAction, ProductsAtionTypes } from "../../Types/produts"

export const fetchProducts = ():any => {
    return async(dispatch: Dispatch<productsAction>) => {
        try{
            dispatch({type: ProductsAtionTypes.FETCH_PRODUCTS})
            const {data} = await axios.get('/api/catalog')
            dispatch({
                type: ProductsAtionTypes.FECTH_PRODUCTS_SUCCESS,
                payload: data.catalogItems[0].items
            })
        }catch(e){
            dispatch({
                type: ProductsAtionTypes.FETCH_PRODUCTS_ERROR,
                payload: 'Не удалось загрузить каталог товаров'
            })
        }
    }
}