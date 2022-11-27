import * as ProductsActionCreators from './product'
import * as CartActionCreators from './cart'
import * as AuthActionCreators from './auth'
import * as OrderActionCreators from './order'
export default{
    ...ProductsActionCreators,
    ...CartActionCreators,
    ...AuthActionCreators,
    ...OrderActionCreators
}