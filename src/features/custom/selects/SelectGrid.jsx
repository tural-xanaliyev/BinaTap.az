import React from 'react'
import styles from './selectGrid.module.css'
import { Disclosure } from '@headlessui/react'
import {FaChevronDown, FaChevronUp} from 'react-icons/fa'
const SelectGrid = ({ content, data }) => {
  const [open, setOpen] = React.useState(false)
  return (
    <Disclosure>
     <Disclosure.Button className={`${styles.Disclosure_button}`} onClick={() => setOpen(!open)}>
      {content}
      {open ? <FaChevronUp className={`${styles.Disclosure_icon}`} /> : <FaChevronDown className={`${styles.Disclosure_icon}`} />}
     </Disclosure.Button>
     <Disclosure.Panel className={`${styles.Disclosure_panel}`}>
      <div className={`${styles.panel_box}`}>
        <h3>Mərtəbə</h3>
        <h4>{data.floor}</h4>
      </div>
      <div className={`${styles.panel_box}`}>
        <h3>Otaq Sayı</h3>
        <h4>{data.rooms}</h4>
      </div>
      <div className={`${styles.panel_box}`}>
        <h3>Əmlakın Növü</h3>
        <h4>{data.type}</h4>
      </div>
      <div className={`${styles.panel_box}`}>
        <h3>İstifadə Sahəsi</h3>
        <h4>{data.area}</h4>
      </div>
      <div className={`${styles.panel_box}`}>
        <h3>Binanın Mərtəbə Sayı</h3>
        <h4>{data.buildingFloor}</h4>
      </div>
      <div className={`${styles.panel_box}`}>
        <h3>Binanın Yaşı</h3>
        <h4>{data.buildingAge}</h4>
      </div>
      <div>

      </div>
    </Disclosure.Panel>
    </Disclosure>
  )
}

export default SelectGrid