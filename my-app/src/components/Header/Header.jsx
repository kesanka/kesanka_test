import React from 'react'
import style from './Header.module.css'

const Header = () => {
    return (
        <header className={style.header}>
            <img className = {style.logo} src='https://www.citypng.com/public/uploads/preview/-21602609759jz7anpnlii.png' />
        </header>
    );

};
export default Header