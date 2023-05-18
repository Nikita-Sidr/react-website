import React from "react";
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
        <img className={`${s.header} ${s.img}`} src='https://external-preview.redd.it/EE571pNKCqRWdQvWf_BGqK04Igwv8P9Os8bBAJImTW8.jpg?auto=webp&s=647110bc6e3d1e979f9815b6cf4d33e5dd36d523' alt='' />
      </header>
    )
}
export default Header