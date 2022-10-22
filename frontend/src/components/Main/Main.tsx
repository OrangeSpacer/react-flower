import { MainProps } from './Main.props'

import styles from  './Main.module.scss'
import Button from '../UI/Button/Button'

const Main = ({}:MainProps) => {
  return (
    <div className={styles.main}>
        <img src="img/Main/mainBG.png" alt="background" className={styles.img}/>
        <div className={styles.mainContent}>
            <h1 className={styles.title}>
                Lower Flower
            </h1>
            <div className={styles.subtitle}>
                Создаём для тех, кто ценит свежесть и изящество цветка
            </div>
            <div className={styles.btnBlock}>
                <Button onClick={() => console.log("Смотреть каталог")} type='default'>
                    смотреть каталог
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Main