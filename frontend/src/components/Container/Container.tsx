import { ContainerProps } from './Container.props'

import styles from './Container.module.scss'

const Container = ({children}:ContainerProps) => {
  return (
    <div className={styles.container}>
        {children}
    </div>
  )
}

export default Container