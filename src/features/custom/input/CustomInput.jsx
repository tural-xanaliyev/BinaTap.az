import React from 'react'
import styles from './customInput.module.css'
const CustomInput = ({ data, type, onChanges }) => {
    return (
        <div className={`${styles.input_container}`}>
            <input type={type} placeholder={data} className={`${styles.input_field}`}  
            onChange={(e) => {
                onChanges(e.target.value)
            }}
            required
            />
            <label for="input-field" className={`${styles.input_label}`}></label>
            <span className={`${styles.input_highlight}`}></span>
        </div>

    )
}

export default CustomInput