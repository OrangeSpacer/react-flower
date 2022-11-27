
import { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/Burger";
import Cart from "../Cart/Cart";
import styles from "./Header.module.scss";
import { LinkList } from "./HeaderLinkList";

const Header = () => {
  const [openContent,setOpenContent] = useState(false)
  const [cartOpen,setCartOpen] = useState(false)

  const openContentHandle = () => {
    setOpenContent(!openContent)
  }
  return (
    <header className={styles.header}>
      <div className={styles.header__content} style={openContent ? {transform:'translateX(0)',transition:'all 0.5s ease'}:{}}>
        <Link to="/">
            <img src="img/header/logo.svg" alt="logo" />
        </Link>
        <div className={styles.header__list}>
            <Burger linkList={LinkList}/>
        </div>
        <div className={styles.header__info}>
          <div className={styles.header__info_auth}>
            <Link to="/auth" className={styles.header__info_link}>
              <img src="img/header/login.svg" alt="login"/>
            </Link>
          </div>
          <div className={styles.header__info_phone}>
              <a href="tel:+375291136969" className={styles.header__info_link}>
                <img src="img/header/phone.svg" alt="phone"/>
                +375 (29) 113-69-69
              </a>
          </div>
        </div>
      </div>
      <div className={styles.header__name}>
        Lower Flower
      </div>
      <div className={styles.header__cart} style={{color:'white'}}>
        <img src="img/cart/cart.svg" alt="cart" onClick={() => setCartOpen(!cartOpen)} className={styles.header__cart_img}/>
        <Cart open={cartOpen} setOpen={setCartOpen}/>
      </div> 
      <div className={styles.header__openContent} onClick={openContentHandle}>
        {openContent ? <img src="/img/header/close.svg" alt="close"/>:<img src="/img/header/burger.svg" alt="burger"/>}
      </div>
    </header>
  )
}

export default Header