import { CardInfoProps } from './CardInfo.props'
import { Link } from 'react-router-dom'
import cn from "classnames"

import styles from  './CardInfo.module.scss'

const CardInfo = ({infoArray,title,titleSide}:CardInfoProps) => {
  return (
    <div className={styles.card}>
        <div className={cn(styles.title,{
            [styles.left]: titleSide === 'l',
            [styles.center]: titleSide === 'c',
            [styles.right]: titleSide === 'r',
        })}>
            {title}
        </div>
        <div className={styles.content}>
            <ul className={styles.list}>
                {infoArray.map(item => 
                    <li key={item} className={styles.item}>
                        {item}
                    </li>
                )}
            </ul>
        </div>
        <div className={styles.linkBlock}>
            <Link to="/catalog" className={styles.link}>
                смотреть каталог
            </Link>
        </div>
    </div>
  )
}

export default CardInfo