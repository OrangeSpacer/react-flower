import Container from "../../components/Container/Container"
import MiniCard from "../../components/MiniCard/MiniCard"
import QuestionsForm from "../../components/Questions/QuestionsForm/QuestionsForm"
import Title from "../../components/UI/Title/Titiel"

import cn from "classnames"
import styles from './Contact.module.scss'

const Contact = () => {
    const cardArray = [
        {title:'время работы',text:'с 10:00 до 21:00 без выходных'},
        {title:'Адрес',text:'Lorem ipsum dolor sit amet consectetur'},
        {title:'Телефон',text:'+375 (29) 111-66-66'},
        {title:'E-mail',text:'lorem@lorem.by'},
    ]
    return (
    <div className={styles.contacts}>
        <Container>
            <div className={styles.block}>
                <Title title="Контакты" titleSide="l"/>
                <div className={styles.cardsBlock}>
                    {cardArray.map((item,index) => <MiniCard key={index} title={item.title}>{item.text}</MiniCard>)}
                </div>
            </div>
            <div className={styles.block}>
                <Title title="Напишите" titleSide="l" subtitle="нам" subTitleSide="l"/>
                <div className={styles.formBlock}>
                    <QuestionsForm/>
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.miniTitle}>
                    мы на карте
                </div>
                <div className={styles.mapBlock}>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6b0dc55ab9155fb1e15b9271659760bdd84493b1c0f36aa86bfd43d0f8292be8&amp;source=constructor" frameBorder="0" className={styles.map}/>
                </div>
            </div>
        </Container>
        <img src="img/Contacts/left.png" alt="flower" className={cn(styles.flower,styles.left)}/>
        <img src="img/Contacts/right.png" alt="flower" className={cn(styles.flower,styles.right)}/>
    </div>
    )
}

export default Contact