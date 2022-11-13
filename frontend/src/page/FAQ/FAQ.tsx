import Container from '../../components/Container/Container'
import Accordion from '../../components/UI/Accordion/Accordion'
import Title from '../../components/UI/Title/Titiel'

import styles from './FAQ.module.scss'

const FAQ = () => {
    const accordionContent =[
        {title:'БУДЕТ ЛИ ЗАКАЗАННЫЙ БУКЕТ В ТОЧНОСТИ СООТВЕТСТВОВАТЬ ЕГО ИЗОБРАЖЕНИЮ НА САЙТЕ?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
        {title:'КАК ДОЛГО СТОЯТ БУКЕТЫ ИЗ СУХОЦВЕТОВ?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
        {title:'ДЕЛАЕТЕ ЛИ ВЫ ФОТО ГОТОВОГО БУКЕТА ПЕРЕД ОТПРАВКОЙ?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
        {title:'А СКОЛЬКО ДОЛЖНЫ ПРОСТОЯТЬ ЦВЕТЫ В БУКЕТЕ?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
        {title:'ЕСТЬ ЛИ ДОСТАВКА ЗА ПРЕДЕЛЫ МКАД?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
        {title:'КАК ОПРЕДЕЛИТЬ СВЕЖИЕ ЛИ ЦВЕТЫ?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
        {title:'ЧЕМ ОТЛИЧАЕТСЯ БЕЛОРУССКАЯ РОЗА ОТ ИМПОРТНОЙ?',text:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa deleniti, iste minus, necessitatibus modi nisi ab incidunt dignissimos eveniet mollitia veritatis assumenda commodi totam ipsa, consequatur qui ad tenetur. Ipsam!'},
    ]   
    return (
        <div className={styles.FAQ}>
            <Container>
                <Title title='FAQ' titleSide='l'/>
                <div className={styles.accordion}>
                    <Accordion content={accordionContent}/>
                </div>
            </Container>
        </div>
    )
}

export default FAQ