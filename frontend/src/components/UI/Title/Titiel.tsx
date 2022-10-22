import { TitleProps } from "./Title.props"
import cn from "classnames"

import styles from "./Title.module.scss"

const Title = ({subTitleSide,subtitle,title,titleSide,...props}:TitleProps) => {
  return (
    <div>
        <h2 className={cn(styles.title,{
            [styles.left]: titleSide === "l",
            [styles.center]: titleSide === "c",
            [styles.right]: titleSide === "r"
        })}>
            {title}
        </h2>
        <h2 className={cn(styles.title,{
            [styles.left]: subTitleSide === "l",
            [styles.center]: subTitleSide === "c",
            [styles.right]: subTitleSide === "r"
        })}>
            {subtitle}
        </h2>
    </div>
  )
}

export default Title