import { TagProps } from './Tag.props'

import styles from './Tag.module.scss'

const Tag = ({name}:TagProps) => {
  return (
    <div className={styles.tag}>
        {name}
    </div>
  )
}

export default Tag