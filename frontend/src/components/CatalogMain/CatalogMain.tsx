import Container from '../Container/Container'
import Tag from '../Tag/Tag'
import Title from '../UI/Title/Titiel'

import styles from './CatalogMain.module.scss'
import { tags } from './Tags'

const CatalogMain = () => {
  return (
    <div className={styles.main}>
        <Container>
            <div className={styles.content}>
                <Title title='Каталог' titleSide='l' subTitleSide='l' subtitle='Букетов'/>
                <div className={styles.text}>
                    В нашем магазине самый большой выбор букетов для любых событий:
                </div>
                <div className={styles.tags}>
                  {tags.map((item,index) => <Tag key={index} name={item.name}/>)}
                </div>
            </div>
            <img src="img/Catalog/leftFlower.png" alt="flowerBG" className={styles.leftFlower}/>
            <img src="img/Catalog/rightFlower.png" alt="flowerBG" className={styles.rightFlower}/>
        </Container>
    </div>
  )
}

export default CatalogMain