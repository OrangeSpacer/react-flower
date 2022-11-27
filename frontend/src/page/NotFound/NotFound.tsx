
import Container from '../../components/Container/Container'

import cn from "classnames"
import styles from './NotFound.module.scss'
import { NavLink } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <Container>
        <div className={styles.numberBlock}>
            <div className={cn(styles.number,styles.firstNumber)}>
              4
            </div>
            <div className={cn(styles.number,styles.secondNumber)}>
              0
            </div>
            <div className={cn(styles.number,styles.thirdNumber)}>
              4
            </div>
        </div>
          <div className={styles.errorBlock}>
            <div className={styles.text}>
              ошибка 404
            </div>
            <div className={styles.text}>
              Упс...Такой страницы нет
            </div>
            <div>
              <NavLink to='/' className={styles.link}>
                На главную
              </NavLink>
            </div>
          </div>
          <img src="img/404/404.png" alt="flower" className={styles.flower}/>
      </Container>
    </div>
  )
}

export default NotFound