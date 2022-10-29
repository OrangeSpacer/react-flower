import { CheckBoxProps } from './CheckBox.props'

import cn from "classnames"
import styles from './CheckBox.module.scss'
import { useEffect, useState } from 'react'

const CheckBox = ({checked}:CheckBoxProps) => {
  const [check,SetCheck] = useState(false)

  useEffect(() => {
    SetCheck(checked)
  },[checked])
  
  return (
    <button className={cn(styles.CheckBox,{[styles.checked]: check===true})}/>
  )
}

export default CheckBox