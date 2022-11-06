import { useEffect, useState } from 'react'
import { useAction } from '../../../hooks/useAction'
import Counter from '../../UI/Counter/Counter'


import styles from './CartItem.module.scss'
import { CartItemProps } from './CartItem.props'

const CartItem = ({cost,imageId,title,quantity,id,deleteItem,changeQunatity,changeTotalPrice}:CartItemProps) => {
    const [count,setCount] = useState(quantity)
    const [costItem,setCostItem] = useState<string>(cost)

    useEffect(() => {
        const handleCost = () => {
            let newCost:string = String(parseInt(cost)*count)
            changeTotalPrice(id,count)
            setCostItem(newCost)
        }
        handleCost()
    },[count,cost,id,changeTotalPrice])

    useEffect(() => {
        changeQunatity(id,count)
    },[quantity])

    return (
    <div className={styles.cartItem}>
        <div className={styles.imgBlock}>
            <img src={`img/cardItem/${imageId}.png`} alt="cardItem" className={styles.img}/>
        </div>
        <div className={styles.content}>
            <div className={styles.content__top}>
                <div className={styles.title}>
                    {title}
                </div>
                <div className={styles.cost}>
                    {costItem} ₽
                </div>
            </div>
            <div className={styles.content__bottom}>
                <Counter value={String(count)} setValue={setCount}/>
                <button className={styles.delete} onClick={() => deleteItem(id)}>
                    удалить
                </button>
            </div>
        </div>
    </div>
    )
}

export default CartItem