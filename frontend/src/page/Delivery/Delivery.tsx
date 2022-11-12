import Container from '../../components/Container/Container'
import MiniCard from '../../components/MiniCard/MiniCard'
import ListIItem from '../../components/UI/ListItem/ListIItem'
import Title from '../../components/UI/Title/Titiel'


import styles from './Delivery.module.scss'

const Delivery = () => {
    const payment = [
        'БАНКОВСКОЙ КАРТОЙ ПРИ ОФОРМЛЕНИИ ЗАКАЗА ЧЕРЕЗ САЙТ или по ссылке',
        'НАЛИЧНЫМИ,  БАНКОВСКОЙ КАРТОЙ ПРИ САМОВЫВОЗЕ или с расчетного счета орагнизации',
        'НАЛИЧНЫМИ ПРИ ДОСТАВКЕ КУРЬЕРОМ',
        'КРИПТОВАЛЮТОЙ'
    ]
    const listItemFirst = [
        {condition:'Беслпатно - ',defaultText:'при заказе на сумму ',result:'от 90 рублей'},
        {condition:'10 рублей - ',defaultText:'при заказе на сумму ',result:'менее 90 рублей'},
        {defaultText:'Так же вы можете забрать ваш заказ самостоятельно по адресу: ',result:'г. Минск, ул. Тимирязева д. 67, комн. 112 ежедневно с 10.00 до 21.00'}
    ]
    const listItemSecond = [
        {defaultText:'Доставка осуществляется по городу Минску в пределах МКАД ',result:'в любой день'},
        {defaultText:'Возможность, сроки и стоимость доставки за пределы МКАД, доставки в ночное время, праздники ',result:'оговариваются с менеджером'},
    ]
    return (
    <div className={styles.delivery}>
        <Container>
            <Title title='Доставка' titleSide='l' subTitleSide='l' subtitle='и оплата'/>
            <img src="img/Delivery/top.png" alt="flower" className={styles.imgTop}/>
            <img src="img/Delivery/middle.png" alt="flower" className={styles.imgMiddle}/>
            <img src="img/Delivery/bottom.png" alt="flower" className={styles.imgBottom}/>
            <div className={styles.block}>
                <div className={styles.title}>
                    Способы оплаты:
                </div>
                <div className={styles.cardBlock}>
                    {payment.map((item,index) => <MiniCard key={index}>{item}</MiniCard>)}
                </div>
            </div>
            <div className={styles.block}>
                <div className={styles.title}>
                    стоимость доставки:
                </div>
                <ul>
                    {listItemFirst.map((item,index) => <ListIItem key={index} defaultText={item.defaultText} condition={item.condition} result={item.result}/>)}
                </ul>
            </div>
            <div className={styles.block}> 
                <div className={styles.title}>
                    Условия доставки:
                </div>
                <div>
                <ul>
                    {listItemSecond.map((item,index) => <ListIItem  key={index} defaultText={item.defaultText} result={item.result}/>)}
                </ul>
                </div>
            </div>
            <div className={styles.moreInfoBlock}>
                <div className={styles.moreInfo}>
                    <div className={styles.title}>
                        Дополнительно:
                    </div>
                    <div className={styles.textBlock}>
                        Доставка иному лицу возможна только в случае оплаты заказа заказчиком. Доставка осуществляется не ранее чем через 2 часа после оплаты заказа, но может быть ранее, если букет есть в наличии либо по договорённости 
                        с менеджером.
                        Время ожидания курьера составляет 15 минут.
                        В случае если на момент доставки цветов получателя нет либо нет возможности по иным причинам произвести доставку (указан неточный адрес, закрытая входная дверь, контрольно-пропускная система и др.), мы оставляем за собой право по собственному выбору:
                        оставить цветы тому, кто открыл дверь;
                        с заказчиком согласовать повторную доставку, которая дополнительно оплачивается;
                        отказаться от передачи цветов без возврата денежных средств.
                    </div>
                </div>
                <div className={styles.moreInfo}>
                    <div className={styles.title}>
                        Возврат денег:
                    </div>
                    <div className={styles.textBlock}>
                        При отказе заказчика от заказа в течение двух часов, если заказ ещё не начал готовиться, средства возвращаются в полном объёме. Если же флорист начал подготовку, то заказчик имеет право на возврат 50% стоимости, либо, если ещё не был оплачен, то обязан оплатить 50%. 
                        Цветы надлежащего качества возврату и обмену не подлежат, а если имеются какие-либо недостатки в цветах – возврат производится лишь если эти недостатки не являются природными и естественными изъянами растения.
                        Возврат денежных средств производится незамедлительно на тот счёт, с которого произошла оплата, их же поступление на счёт зависит от платёжной системы.
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default Delivery