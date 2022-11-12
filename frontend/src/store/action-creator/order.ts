import axios from "axios"
import { Dispatch } from "react"
import { orderAction, OrderActionTypes } from "../../Types/order"

export const fetchOrder = () => {
    return async(dispatch: Dispatch<orderAction>) => {
        try{
            const token = localStorage.getItem('token')
            const {data} = await axios.get('/api/order/all',{
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: OrderActionTypes.FETCH_ORDER_SUCCESS,
                payload: [data]
            })
        }catch(e:any){
            dispatch({
                type: OrderActionTypes.FETCH_ORDER_ERROR,
                payload: e.repsonse.data.message
            })
        }
    }
}