import './contact.css'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'
import table from '../../assets/table.png'
import social from '../../assets/social.png'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <section className="contact container">
      <h1 className="contact__title">Biz bilan bog‘lanish</h1>
      <div className="row">
        <div className="contact__item">
          <img src={phone} width={40} height={50} alt="phone" />
          <span className="subtitle">Telefon:</span>
          <span className="phone">+998936042700</span>
        </div>
        <div className="contact__item">
          <img src={location} width={40} height={50} alt="location" />
          <span className="subtitle">Manzil:</span>
          <span className="phone"> Namangan Shahar Alisher Navoiy kochasi 31-”A”uy
          </span>
        </div>
        <Link to="/register">
          <div className="contact__item">
            <img src={table} width={40} height={50} alt="phone" />
            <span className="subtitle">Kursga yozilish:</span>
          </div>
          </Link>
        <div className="contact__item">
          <img src={social} width={40} height={50} alt="phone" />
          <span className="subtitle">Bizning ijtimoiy tarmoqlarimiz</span>
        </div>
      </div>
    </section>
  );
}

export default Contact