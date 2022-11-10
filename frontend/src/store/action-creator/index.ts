import * as ProductsActionCreators from './product'
import * as CartActionCreators from './cart'
import * as AuthActionCreators from './auth'
export default{
    ...ProductsActionCreators,
    ...CartActionCreators,
    ...AuthActionCreators
}