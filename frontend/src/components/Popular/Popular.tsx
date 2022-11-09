import { useEffect } from 'react'
import { useAction } from '../../hooks/useAction'
import { useTypesSelector } from '../../hooks/useTypesSelector'
import Container from '../Container/Container'
import Slider from '../Slider/Slider'
import Title from '../UI/Title/Titiel'

import styles from  './Popular.module.scss'

const Popular = () => {
  const {fetchProducts} = useAction()
  const {items} = useTypesSelector(state => state.products)
  
  useEffect(() => {
    fetchProducts()
  },[])

  console.log(items.slice(0,3))
  
  return (
    <Container>
        <div className={styles.popular}>
            <Title title='Популярные' titleSide='r' subtitle='Букеты' subTitleSide='r'/>
            <div className={styles.text}>
                Самые любимые композиции наших клиентов
            </div>
            <img src="img/Popular/bg.png" alt="bg" className={styles.backImg}/>
            <div className={styles.sliderBlock}>
              <Slider itemsArray={items.slice(0,3)}/>
            </div>
        </div>
    </Container>
  )
}

export default Popular