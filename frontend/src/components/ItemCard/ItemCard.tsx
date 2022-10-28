import Button from '../UI/Button/Button'
import { ItemCardProps } from './ItemCard.props'
import cn from "classnames"

import styles from './ItemCard.module.scss'

const ItemCard = ({colorless = false,imgLink,price,name,height='450',width='350'}:ItemCardProps) => {
  return (
    <div className={styles.ItemCard}>
        <img src={`img/cardItem/${imgLink}.png`} alt="imgItem" className={cn(styles.img,{[styles.colorless]: colorless === true})} style={{height:`${height}px`,width:`${width}px`}}/>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.price}>
            {price}
        </div>
        <div className={styles.addCart}>
            <Button type='cart'>
                В корзину 
            </Button>
        </div>
    </div>
  )
}

export default ItemCard