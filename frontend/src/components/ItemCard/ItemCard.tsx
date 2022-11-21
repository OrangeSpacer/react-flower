import Button from '../UI/Button/Button'
import { ItemCardProps } from './ItemCard.props'
import cn from "classnames"

import styles from './ItemCard.module.scss'
import { useAction } from '../../hooks/useAction'

const ItemCard = ({colorless = false,imgLink,price,id,inCart,name,tags,interaction = true,height='450',width='350'}:ItemCardProps) => {
    const {addItemCart,deleteItemCart,fetchCart,changeStateItemOnCart} = useAction()
    const addItem = () => {
        addItemCart(name,price,'1',imgLink,id)
        changeStateItemOnCart(id)
    }

    const removeItem = () => {
        deleteItemCart(id)
        fetchCart()
        changeStateItemOnCart(id)
    }


    return (
    <div className={styles.ItemCard}>
        <img src={`img/cardItem/${imgLink}.png`} alt="imgItem" className={cn(styles.img,{[styles.colorless]: colorless === true})} style={{height:`${height}px`,width:`${width}px`}}/>
        <div className={styles.name}>
            {name}
        </div>
        <div className={styles.price}>
            {price}
        </div>
        {interaction ? 
            <div className={styles.addCart}>
                {inCart ? 
                    <Button type='cart' onClick={removeItem}>
                        Удалить 
                    </Button>:
                    <Button type='cart' onClick={addItem}>
                        В корзину 
                    </Button>
                }
            </div>:
            null
        }
        {tags ? 
            <div>
                <div>
                    Теги:
                </div>
                <div>
                    {tags.colors} & {tags.format} & {tags.light}
                </div>
            </div>:
            null
        }
    </div>
    )
}

export default ItemCard