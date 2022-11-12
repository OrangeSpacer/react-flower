import styles from './ListItem.module.scss'
import { ListItemProps } from './ListItem.props'

const ListIItem = ({condition,defaultText,result}:ListItemProps) => {
  return (
    <li className={styles.item}>
      <span className={styles.condition}>
        {condition}
      </span>
      {defaultText}
      <span className={styles.result}>
        {result}
      </span>
    </li>
  )
}

export default ListIItem