import GridLoader from 'react-spinners/GridLoader'

import styles from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderBlock}>
        <GridLoader
          color={'#43FFD2'}
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  )
}

export default Loader