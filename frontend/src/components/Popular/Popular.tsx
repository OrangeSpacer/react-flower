import Container from '../Container/Container'
import Slider from '../Slider/Slider'
import Title from '../UI/Title/Titiel'

import styles from  './Popular.module.scss'

const Popular = () => {
  const sliderArray = [
    {name:'лучший день',colorless:true,imgLink:'1',price:'167.000 ₽'},
    {name:'лучший день',colorless:true,imgLink:'2',price:'167.000 ₽'},
    {name:'лучший день',colorless:true,imgLink:'3',price:'167.000 ₽'},
  ]
  return (
    <Container>
        <div className={styles.popular}>
            <Title title='Популярные' titleSide='r' subtitle='Букеты' subTitleSide='r'/>
            <div className={styles.text}>
                Самые любимые композиции наших клиентов
            </div>
            <img src="img/Popular/bg.png" alt="bg" className={styles.backImg}/>
            <div className={styles.sliderBlock}>
              <Slider itemsArray={sliderArray}/>
            </div>
        </div>
    </Container>
  )
}

export default Popular