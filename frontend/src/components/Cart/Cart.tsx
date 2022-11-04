import { CartProps } from './Cart.props'
import CartItem from './CartItems/CartItem'
import Button from '../UI/Button/Button'

import cn from "classnames"
import styles from './Cart.module.scss'

const Cart = ({open,setOpen}:CartProps) => {
  const handleCloseCart = () => {
    setOpen(false)
  }

  const cartItems = [
    {cost:'100',imgId:'1',title:'test'},
    {cost:'100',imgId:'1',title:'test'},
    {cost:'100',imgId:'1',title:'test'},
    {cost:'100',imgId:'1',title:'test'},
    {cost:'100',imgId:'1',title:'test'},
    {cost:'100',imgId:'1',title:'test'},
    {cost:'100',imgId:'1',title:'test'}
  ]

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
        {cartItems.map(item => <CartItem cost={item.cost} imgId={item.imgId} title={item.title}/>)}
      </div>
      <div className={styles.btnBlock}>
        <div>
          Предварительный итог: {} РУБ.
        </div>
        <Button children='Оформить заказ' type='cart'/>
      </div>
    </div>
  )
}

export default Cart