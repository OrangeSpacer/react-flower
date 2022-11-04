import { useEffect, useState } from 'react'
import Counter from '../../UI/Counter/Counter'


import styles from './CartItem.module.scss'
import { CartItemProps } from './CartItem.props'

const CartItem = ({cost,imageId,title}:CartItemProps) => {
    const [count,setCount] = useState('1')
    const [costItem,setCostItem] = useState<string>(cost)

    useEffect(() => {
        const handleCost = () => {
            let newCost:string = String(parseInt(cost)*parseInt(count))
            setCostItem(newCost)
        }
        handleCost()
    },[count,cost])


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
                <Counter value={count} setValue={setCount}/>
                <button className={styles.delete}>
                    удалить
                </button>
            </div>
        </div>
    </div>
    )
}

export default CartItem