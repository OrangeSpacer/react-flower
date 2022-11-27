import Container from '../Container/Container'
import Step from '../Step/Step'
import Title from '../UI/Title/Titiel'

import styles from './HowOrder.module.scss'

const HowOrder = () => {
  const steps = [
    {step:'1 шаг',text:"Выберите какие цветы или подарки вы хотите купить"},
    {step:'2 шаг',text:"Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp"},
    {step:'3 шаг',text:"Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне"},
    {step:'4 шаг',text:"Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен"},
    {step:'5 шаг',text:"Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга"},
  ]
  return (
        <div className={styles.howOrder}>
          <Container>
              <div className={styles.titleBlock}>
                  <Title title='Как сделать' titleSide='l' subtitle='заказ' subTitleSide='l'/>
              </div>
              <div className={styles.steps}>
                  {steps.map((item,index) => <Step key={index} step={item.step} text={item.text}/>)}
              </div>
              <img src="img/HowOrder/bg.png" alt="bg" className={styles.img}/>
          </Container>
        </div>
  )
}

export default HowOrder