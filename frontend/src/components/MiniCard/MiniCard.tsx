import { MiniCardProps } from './MiniCard.props'

import styles from './MiniCard.module.scss'

const MiniCard = ({children}:MiniCardProps):JSX.Element => {
  return (
    <div className={styles.miniCard}>
        {children}
    </div>
  )
}

export default MiniCard