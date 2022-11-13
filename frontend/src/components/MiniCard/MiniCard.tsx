import { MiniCardProps } from './MiniCard.props'

import styles from './MiniCard.module.scss'

const MiniCard = ({children,title}:MiniCardProps):JSX.Element => {
  return (
    <div className={styles.miniCard}>
      <div className={styles.title}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default MiniCard