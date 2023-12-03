import './header.css'
import { useState } from 'react';

import logo from '../../assets/logo.png'
import { Link, NavLink } from "react-router-dom";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="container-header container">
      <nav className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="logo" width={145} height={52} />
          </Link>
        </div>
        <div className="menu" onClick={() => {
          setMenuOpen(!menuOpen)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : "header__items"}>
          <li className="header__item">
            <NavLink to="/about">Biz haqimizda</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/news">Yangiliklar</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/score">Natijalar</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/filial">Filiallarimiz</NavLink>
          </li>
          <li className="header__item">
            <NavLink to="/contact">Biz bilan bog‘lanish</NavLink>
          </li>
        </ul>
        <NavLink to="/test" className="btn">
          Online Test
        </NavLink>
      </nav>
    </div>
  );
}

export default Header