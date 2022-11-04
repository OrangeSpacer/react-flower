import * as ProductsActionCreators from './product'
import * as CartActionCreators from './cart'

export default{
    ...ProductsActionCreators,
    ...CartActionCreators
}