import Container from "../../components/Container/Container"
import Title from "../../components/UI/Title/Titiel"

import cn from "classnames"
import styles from './About.module.scss'

const About = () => {
  const listArray = [
    'выбор оттенков и сортов цветков в любое время года;',
    'отправка фото готовой композиции перед отправкой;',
    'возможность заказать цветы с доставкой в течение часа;',
    'выгодные цены – на сайте только те варианты, что Вы сможете купить;',
    'полная конфиденциальность по заказу;',
    'в нашем уютном цветочном магазине цветы, которые приятно дарить.'
  ]
  return (
    <div className={styles.about}>
      <Container>
        <Title title="О нас" titleSide="l"/>
        <div className={styles.block}>
          <div className={styles.title} style={{maxWidth:'260px'}}>
            Lover
            flower
          </div>
          <div className={styles.content}>
            <div className={styles.textBlock}>
              <div className={cn(styles.textTitle,styles.text)}>
                молодая команда разных людей с одинаковыми ценностями.
              </div>
              <div className={styles.text}>
                Мы считаем, что удовольствие от качества длится дольше, чем удовольствие 
                от низкой цены. И поэтому в создание нашей букетерии мы вложили все, 
                чем располагаем: душу, сердце, время и мечты! Мы готовы обещать вам только то, что можем сделать. А делаем мы только самое качественное, самое интересное 
                и обязательно уникальное. Мы всегда честны со своими клиентами во всем – 
                в нашем каталоге только те букеты, которые вы действительно сможете купить.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.title}>
            гарантии
          </div>
          <div className={cn(styles.text,styles.textCenter)}>
            Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем вам фотографию именно вашего букета до его отправки получателю. Вся предоставленная Вами информация конфиденциальна и будет известна только нам и курьеру для осуществления доставки.
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.title} style={{maxWidth:'695px'}}>
            Заказ букетов на сайте компании Lower Flower – это:
          </div>
          <div className={styles.content}>
            <ul>
              {listArray.map((item,index) => <li key={index} className={styles.text}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className={styles.block}>
          <div className={styles.title} style={{maxWidth:'1100px',color:'white',paddingLeft:'0'}}>
            Природная гармония цвета, неповторимость бутонов 
            и Ваши чувства 
            в нежных лепестках 
            не оставят никого равнодушным.
          </div>
          <div className={styles.text} style={{textAlign:'center',marginTop:'40px'}}>
            Вы выбираете и заказываете цветочный сюрприз, а мы вкладываем в него душу!
          </div>
        </div>
        <img src="img/About/left.png" alt="flower" className={cn(styles.img,styles.left)}/>
        <img src="img/About/right.png" alt="flower" className={cn(styles.img,styles.right)}/>
        <img src="img/About/bottom.png" alt="flower" className={cn(styles.img,styles.bottom)}/>
      </Container>
    </div>
  )
}

export default About