import { useEffect, useState } from 'react'
import { CartProps } from './Cart.props'
import { useAction } from '../../hooks/useAction'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import CartItem from './CartItems/CartItem'
import Button from '../UI/Button/Button'

import cn from "classnames"
import styles from './Cart.module.scss'
import Loader from '../UI/Loader/Loader'


const Cart = ({open,setOpen}:CartProps) => {
  const {fetchCart,deleteItemCart,addQunatityItemCart,changeStateItemOnCart,cartOffer} = useAction()
  const {items,loading} = useTypesSelector(state => state.cart)
  const [cartItems,setCartItems]:any = useState([])
  const [totalPrice,setTotalPrice] = useState(0)
  const [orderComplete,setOrderComplete]:any = useState(false)
  const handleCloseCart = () => {
    setOpen(false)
  }
  
  useEffect(() => {
    fetchCart()
  },[items.length])

  const handleQunatityNumber = (id:string,qunatity:number) => {
    addQunatityItemCart(id,qunatity)
  }

  useEffect(() => {
    if(items[0]?.cartItems){
      setCartItems(items[0].cartItems)
      setTotalPrice(items[0].totalPrice)
    }
  },[items])

  const handleOffer = () => {
    cartOffer(cartItems,`#${Math.floor(Math.random()*1000)}`)
    cartItems.forEach((item:any) => {
      deleteItem(item._id)
    })
    setOrderComplete(true)
    setTimeout(() => setOrderComplete(false),5000)
  }


  const deleteItem = (id:string) => {
    const newCartItems = cartItems.filter((item:any) => item._id!==id)
    changeStateItemOnCart(id)
    deleteItemCart(id)
    setCartItems(newCartItems)
  }

  const handeleAddQuantity = (id:string,qunatity:string) => {
    const newQunatityArrays = cartItems
    
    newQunatityArrays.forEach((item:any) => {
      if(item._id === id){
        item.quantity = String(qunatity)
      }
    })
    
    let newTotalPrice = newQunatityArrays.reduce((acc:number,item:any) => {
      acc+=parseInt(item.cost)*parseInt(item.quantity)
      return acc
    },0)
    
    setTotalPrice(newTotalPrice)
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
      {loading ? 
        <Loader/>:
        cartItems.length ? 
          <>
            <div className={styles.cartItems}>
              {cartItems.map((item:any) => <CartItem key={item._id} id={item._id} changeQunatity={handleQunatityNumber} changeTotalPrice={handeleAddQuantity} deleteItem={deleteItem} quantity={item.quantity} cost={item.cost} imageId={item.imageId} title={item.title}/>)}
            </div>
            <div className={styles.btnBlock}>
              <div>
                Предварительный итог: {totalPrice} РУБ.
              </div>
              <Button children='Оформить заказ' type='cart' onClick={handleOffer}/>
            </div>
          </>:
          <div className={styles.empty}>
            <div className={styles.emptyTitle}>
              {!orderComplete ? 
              'Ваша корзина пуста':'Спасибо за заказ'}
            </div>
            <img src={!orderComplete ? 'img/cart/empty.png':''} alt="empty-cart" className={styles.emptyImg}/>
          </div>
      }
    </div>
  )
}

export default Cart