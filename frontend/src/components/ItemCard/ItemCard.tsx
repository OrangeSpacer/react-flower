import Button from '../UI/Button/Button'
import { ItemCardProps } from './ItemCard.props'
import cn from "classnames"

import styles from './ItemCard.module.scss'

const ItemCard = ({colorless,imgLink,price,name}:ItemCardProps) => {
  return (
    <div className={cn(styles.ItemCard,{[styles.colorless]: colorless === true})}>
        <img src={imgLink} alt="imgItem" className={styles.img}/>
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