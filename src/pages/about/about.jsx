import './about.css'
import bg from '../../assets/about.jpg'

const About = () => {
  return (
    <section className="about container">
      <h1 className="about__title">Registon o`quv markazi haqida</h1>
      <div className="row">
        <div className="about__img">
          <img src={bg} alt="logo" width={500} height={300}/>
        </div>
        <div className="about__info">
          <p className="about__info-title">
            “REGISTON” o‘quv markazi 2014-yilda tashkil topgan. Bosh ofisimiz Yakkasaroy tumanida joylashgan
          </p>
          <p className="about__info-title">
            “REGISTON” Namangan viloyati filiali esa 2022-yil Avgust oyida o‘z faoliyatini yuritishni boshlagan. Hozirgi kunga kelib o’quv markazimizda barcha yo’nalishlar mavjud
          </p>
          <div className="about__reyting">
            <div className="reyting__filial">
              <label>29+</label>
              <span>filiallar</span>
            </div>
            <div className="reyting__filial">
              <label>900+</label>
              <span>jamoa a`zolari</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About