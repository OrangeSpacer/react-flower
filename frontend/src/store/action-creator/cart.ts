import axios from "axios"
import { Dispatch } from "react"
import { cartAction, CartActionTypes } from "../../Types/cart"

export const fetchCart = ():any => {
    return async(dispatch: Dispatch<cartAction>) => {
        try{
            dispatch({type: CartActionTypes.FETCH_CART})
            const {data} = await axios.get('/api/cart')
            dispatch({
                type: CartActionTypes.FETCH_CART_SUCCESS,
                payload: [data]
            })
        }catch(e){
            dispatch({
                type: CartActionTypes.FECTH_CART_ERROR,
                payload: "Не удалось загрузить товары"
            })
        }
    }
}

export const deleteItemCart = (itemId:string):any => {
    return async() => {
        try{
            await axios.post(`/api/cart/delete`,{itemId})
        }catch(e){
            console.log('Не удалось удалить товар')
        }
    }
}