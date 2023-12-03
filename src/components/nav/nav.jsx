import './nav.scss'
import Logo from '../../assets/logo.svg'
import User from '../../assets/user.svg'
import Search from '../../assets/search.svg'
const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img src={Logo} alt="logo" width={140} height={47}/>
      </div>
      <ul className="nav__items">
        <li className="nav__items-item">
          <a href="#">Destination</a>
        </li>
        <li className="nav__items-item">
          <a href="#">Offer</a>
        </li>
        <li className="nav__items-item">
          <a href="#">Tour</a>
        </li>
        <li className="nav__items-item">
          <a href="#">Blog</a>
        </li>
      </ul>
      <div className="nav__admin">
        <a className="nav__admin-user">
          <img src={User} alt="user" width={20} height={20} />
          <p className="nav__admin-user-title">My Account</p>
        </a>
        <div className="nav__admin-search">
          <a href="#">
            <img src={Search} alt="search" width={20} height={20}/>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav