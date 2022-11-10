import {combineReducers} from "redux"
import { authReducer } from "./authReducer"
import { cartReducer } from "./cartReducer"
import { productsReducer } from "./productsReducer"

export const rootReducer = combineReducers({
    products:productsReducer,
    cart:cartReducer,
    auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>