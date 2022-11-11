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

export const addItemCart = (title:string,cost:string,quantity:string,imageId:string,_id:string):any => {
    return async(dispatch: Dispatch<cartAction>) => {
        try{
            const {data} = await axios.post(`/api/cart/add`,{title,cost,quantity,imageId,_id})
            dispatch({
                type: CartActionTypes.ADD_CART_ITEM,
                payload: data
            })
        }catch(e){
            console.log('Не удалось добвить товар в корзину')
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

export const addQunatityItemCart = (itemId:string,quantity:number): any => {
    return async() => {
        try{
            await axios.put(`/api/cart/update`,{itemId,quantity})
        }catch(e){
            console.log('Не удалось увелисить количество товара')
        }
    }
}

export const cartOffer = (items:any[],orderId:string) => {
    return async(dispatch: Dispatch<cartAction>) => {
        try{
            const token = localStorage.getItem('token')
            await axios.post('/api/order',{
                items: items,
                orderId: orderId,
            },{headers:{
                Authorization: 'Bearer ' + token
            }})
            dispatch({
                type:CartActionTypes.FETCH_CART_SUCCESS,
                payload: []
            })
        }catch(e:any){
            dispatch({
                type: CartActionTypes.FECTH_CART_ERROR,
                payload: e.response.data.message
            })
        }
    }
}