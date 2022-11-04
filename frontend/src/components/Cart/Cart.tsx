import { useEffect, useState } from 'react'
import { CartProps } from './Cart.props'
import CartItem from './CartItems/CartItem'
import Button from '../UI/Button/Button'

import cn from "classnames"
import styles from './Cart.module.scss'
import { useAction } from '../../hooks/useAction'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import { CartItemProps } from './CartItems/CartItem.props'

const Cart = ({open,setOpen}:CartProps) => {
  const {fetchCart,deleteItemCart} = useAction()
  const {error,items,loading} = useTypesSelector(state => state.cart)
  
  const handleCloseCart = () => {
    setOpen(false)
  }

  useEffect(() => {
    fetchCart()
  },[])

  const deleteItem = (id:string) => {
    deleteItemCart(id)
  }

  console.log(items)

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
      {items.length ? 
        <>
          <div className={styles.cartItems}>
            {items[0].cartItems.map((item:CartItemProps) => <CartItem key={item._id} id={item._id} cost={item.cost} imageId={item.imageId} title={item.title}/>)}
          </div>
          <div className={styles.btnBlock}>
            <div>
              Предварительный итог: {items[0].totalPrice} РУБ.
            </div>
            <Button children='Оформить заказ' type='cart' onClick={() => deleteItem('635a252f8e49147058343fe')}/>
          </div>
        </>:
        null 
      }
    </div>
  )
}

export default Cart