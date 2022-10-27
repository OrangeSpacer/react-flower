import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { HeaderProps } from '../Header/Header.props'

import styles from './RootLayout.module.scss'

const RootLayout = ({children}:HeaderProps) => {
  const catalogLinks = [
    {name: 'Популярное', link: '/catalog'},
    {name: 'Сухоцветы', link: '/catalog'},
    {name: 'Букеты роз', link: '/catalog'},
    {name: 'Композиции из цветов', link: '/catalog'},
    {name: 'Индивидуальный букет', link: '/catalog'},
    {name: 'Букет на праздник', link: '/catalog'},
    {name: 'Упаковка подарков', link: '/catalog'},
    {name: 'Шары', link: '/catalog'},
    {name: 'Открытки', link: '/catalog'},
    {name: 'Конверты', link: '/catalog'},
  ]

  const pageLinks = [
    {name:'Доставка и оплата',link:'/delivery'},
    {name:'О нас',link:'/about'},
    {name:'faq',link:'/faq'},
    {name:'контакты',link:'/contacts'},
  ]

  return (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.body}>
            {children}
        </div>
        <Footer pageLinks={pageLinks} catalogLinks={catalogLinks}/>
    </div>
  )
}

export default RootLayout