import { Link } from 'react-router-dom'
import { BurgerProps } from './Burger.props'

import styles from './Burger.module.scss'

const Burger = ({linkList}: BurgerProps) => {
  return (
    <div className={styles.burger}>
        {linkList.map(item => 
            <div key={item.name} className={styles.burger__list_item}>
              <Link to={item.link} className={styles.burger__list_item_link}>
                {item.name}
              </Link>
            </div>
        )}
    </div>
  )
}

export default Burger