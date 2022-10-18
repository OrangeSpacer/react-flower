import { Link } from 'react-router-dom'
import { FooterProps } from './Footer.props'
import cn from "classnames"

import styles from './Footer.module.scss'

const Footer = ({catalogLinks,pageLinks}:FooterProps) => {
  return (
    <footer className={styles.footer}>
        <div className={styles.block}>
            <div>
                <Link to="/">
                    <img src="/img/header/logo.svg" alt="logo" />
                </Link>
            </div>
            <div>
                <div className={styles.title}>
                    Реквезиты
                </div>
                <div className={cn(styles.text,styles.textBlock)}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero nihil officia atque repellendus quos nesciunt voluptatibus, aut voluptate omnis quidem officiis a neque! Harum nihil earum dolore eos. Necessitatibus.
                </div>
            </div>
        </div>
        <div className={styles.block}>
            <div className={styles.title}>
                Каталог
            </div>
            <div>
                {catalogLinks.map(item => 
                    <div key={item.name} className={styles.linkBlock}>
                        <Link to={item.link} className={styles.text}>
                            {item.name}
                        </Link>
                    </div>
                )}
            </div>
        </div>
        <div className={styles.block}>
            <div>
                {pageLinks.map(item => 
                    <div className={styles.pageLinks}>
                        <Link to={item.link} className={styles.title}>
                            {item.name}
                        </Link>
                    </div>
                )}
            </div>            
        </div>
        <div className={styles.block}>
            <div>
                <div className={styles.title}>
                    lorem@lorem.by
                </div>
                <div className={styles.text}>
                    Доставка 24/7 по договоренности с оператором
                </div>
            </div>
            <div>  
                <div className={styles.title}>
                    ул. Тимирязева 670
                </div>
                <div className={styles.text}>
                    10:00 до 21:00 без выходных
                </div>
            </div>
            <div>
                <div>
                    <a href="tel:+375291136969" className={styles.title}>
                        +375 (29) 113-69-69
                    </a>
                </div>
                <div className={styles.text}>
                    прием звонков круглосуточно
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer