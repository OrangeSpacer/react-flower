import {combineReducers} from "redux"
import { cartReducer } from "./cartReducer"
import { productsReducer } from "./productsReducer"

export const rootReducer = combineReducers({
    products:productsReducer,
    cart:cartReducer
})

export type RootState = ReturnType<typeof rootReducer>