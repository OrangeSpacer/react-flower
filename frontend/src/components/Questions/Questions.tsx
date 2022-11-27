import Container from "../Container/Container"
import Title from "../UI/Title/Titiel"

import styles from './Questions.module.scss'
import QuestionsForm from "./QuestionsForm/QuestionsForm"

const Questions = () => {
  return (
    <div className={styles.questions}>
        <Container>
            <Title title="остались" titleSide="l" subtitle="вопросы?" subTitleSide="l"/>
            <div className={styles.formBlock}>
                <div className={styles.text}>
                    Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной связи, и наш специалист свяжется с вами в течение 15 минут.
                </div>
                <QuestionsForm/>
            </div>
            <img src="img/Questions/bg.png" alt="bg" className={styles.img}/>
            <img src="img/Questions/flower.png" alt="flower" className={styles.imgTop}/>
        </Container>
    </div>
  )
}

export default Questions