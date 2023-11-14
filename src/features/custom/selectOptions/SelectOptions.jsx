import React, { useState } from 'react'
import styles from './selectOptions.module.css'
import { IoMdArrowDropup } from 'react-icons/io'
const SelectOptions = ({ data,number,onChange,defoult }) => {

    const [selected, setSelected] = useState(false)
    const [select, setSelect] = useState('')

    
    
    window.addEventListener('click', (e) => {
        if (e.target.closest(`.${styles.selectBox_container}${number}`) === null ) {
            setSelected(false)
        }
    }
    )
    return (
        <div className={`${styles.selectBox_container} ${styles.selectBox_container}${number}`}>
            <button className={`${styles.selectBox}`} onClick={(e) => {
                setSelected(!selected)
                e.preventDefault()
            }}
            >
                {select ? (select) : defoult? (defoult) : 'Seçin'}
                <IoMdArrowDropup className={`${styles.selectBox_icon} ${selected ? (styles.bottom) : ('')}`} />
            </button>
            <div className={
                `${styles.selectBox_options} 
                ${selected ? (styles.active) : ('')}`
            }>
                {selected ? (
                    <ul>
                        {data?.map((item) => (
                            <li key={item.id} onClick={() => {
                                setSelect(item.content)
                                setSelected(false)
                                onChange(item.content)
                            }
                            }>{item.content}</li>
                        ))}
                    </ul>
                )
                    : ('')
                }
            </div>
        </div>
    )
}

export default SelectOptions