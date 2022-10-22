import CardInfo from '../CardInfo/CardInfo'
import Title from '../UI/Title/Titiel'
import { firstInfo, secondInfo, thirdInfo } from './CatalogInfo'
import cn from "classnames"

import styles from './Catalog.module.scss'
import Container from '../Container/Container'

const Catalog = () => {
    return (
        <Container>
            <div className={styles.catalog}>
                <div className={styles.catalogLeft}>
                    <Title title='Каталог' titleSide='l' className={styles.title}/>
                    <div className={styles.info}>
                        У нас самый большой выбор цветов, букетов, открыток и подарков.Мы всегда поможем вам подобрать букет для вашего события, наш менеджер вас проконсультирует и поможет определиться с выбором
                    </div>
                    <div className={styles.info} style={{marginBottom:'80px'}}>
                        Ознакомьтесь с нашими разделами каталога
                    </div>
                    <div className={styles.infoBlock}>
                        <CardInfo infoArray={firstInfo.infoArray} title={firstInfo.title} titleSide={firstInfo.titleSide}/>
                        <div className={styles.backtext}>
                            Цветы
                        </div>
                    </div>
                </div>
                <div className={styles.catalogRight}>
                    <div className={cn(styles.infoBlock,styles.infoBlockSetting)}>
                        <CardInfo infoArray={secondInfo.infoArray} title={secondInfo.title} titleSide={secondInfo.titleSide}/>
                        <div className={cn(styles.backtext,styles.backtextRight)}>
                            Букеты
                        </div>
                    </div>
                    <div className={styles.infoBlock}>
                        <CardInfo infoArray={thirdInfo.infoArray} title={thirdInfo.title} titleSide={thirdInfo.titleSide}/>
                        <div className={cn(styles.backtext,styles.backtextRight)}>
                            Дополнительно
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Catalog