import React from 'react'
import styles from './buttons.module.css'

const ButtonHover = ({text}) => {
  return (
    <button
    className={`${styles.button_hover}`}
    >{text}</button>
  )
}

export default ButtonHover