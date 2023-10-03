import React from 'react'
import styles from './navBar.module.css'
import DarkMode from '../../../DarkMode'
import { Link, useNavigate } from "react-router-dom";
import ButtonHover from '../../custom/buttons/ButtonHover'

const NavBar = () => {
  return (
    <div className={`${styles.navBar_container}`}>
      <div className={`${styles.navBar_container_logo}`}>
        <Link to="/">
          <h1>Logo</h1>
        </Link>
      </div>
      <div className={`${styles.navBar_container_menu}`}>
        <ul>
          <li><Link to="/sell-buy">Alqı-satıq</Link></li>
          <li><Link to="/rent">Kirayə</Link></li>
          <li><Link to="/new-building">Yeni tikili</Link></li>
          <li><Link to="/living-complex">Yaşayış kompleksləri</Link></li>
        </ul>
      </div>
      <div className={`${styles.navBar_container_box}`}>
        <div className={`${styles.navBar_container_box_add}`}>
          <Link to="/add-prodact">
            <ButtonHover text={'Elan yerləşdir +'} />
          </Link>
        </div>
        <div className={`${styles.navBar_container_box_login}`}>
          <ButtonHover text={'Daxil ol'} />
        </div>
        <div className={`${styles.navBar_container_box_register}`}>
          <ButtonHover text={'Qeydiyyat'} />
        </div>
        <div className={`${styles.navBar_container_box_them}`}>
          <DarkMode />
        </div>
      </div>
    </div>
  )
}

export default NavBar