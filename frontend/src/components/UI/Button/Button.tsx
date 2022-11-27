import { ButtonProps } from './Button.props'
import cn from "classnames"

import styles from './Button.module.scss'

const Button = ({children,type,...props}:ButtonProps) => {
  return (
    <button className={cn(styles.button,{
      [styles.cartButton]: type==='cart',
      [styles.disabled]: type === 'disabled'
    })} disabled={type === 'disabled' ? true:false} {...props}>
        {children}
    </button>
  )
}

export default Button