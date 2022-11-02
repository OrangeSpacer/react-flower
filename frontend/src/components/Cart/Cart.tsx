import CartItems from './CartItems/CartItem'
import { CartProps } from './Cart.props'

import cn from "classnames"
import styles from './Cart.module.scss'

const Cart = ({open,setOpen}:CartProps) => {
  const handleCloseCart = () => {
    setOpen(false)
  }
  return (
    <div className={cn(styles.cart,{[styles.open]:open === true})}>
      <div className={styles.mainBlock}>
        <div className={styles.title}>
            Ваша корзина
        </div>
        <div className={styles.close} onClick={handleCloseCart}>
          <img src="img/header/close.svg" alt="closeCart"/>
        </div>
      </div>
        <div className={styles.cartItems}>
            <CartItems cost='100' imgId='1' title='test'/>
        </div>
    </div>
  )
}

export default Cart