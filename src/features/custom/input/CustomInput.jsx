import React from 'react'
import styles from './customInput.module.css'
const CustomInput = ({data}) => {
    return (
        <div className={`${styles.input_container}`}>
            <input placeholder={data} className={`${styles.input_field}`} type="text"/>
                <label for="input-field" className={`${styles.input_label}`}></label>
                <span className={`${styles.input_highlight}`}></span>
        </div>

    )
}

export default CustomInput