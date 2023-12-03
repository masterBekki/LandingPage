import './header.css'
import logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" width={145} height={52} />
      </div>
      <ul className="header__items">
        <li className="header__item">
          <a href="#">Biz haqimizda</a>
        </li>
        <li className="header__item">
          <a href="#">Yangiliklar</a>
        </li>
        <li className="header__item">
          <a href="#">Natijalar</a>
        </li>
        <li className="header__item">
          <a href="#">Filiallarimiz</a>
        </li>
        <li className="header__item">
          <a href="#">Biz bilan bog‘lanish</a>
        </li>
      </ul>
      <button className="btn">
        Online Test
      </button>
    </header>
  );
}

export default Header