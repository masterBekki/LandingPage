import './news.css'
import img1 from '../../assets/new1.jpg'
import img2 from '../../assets/new2.jpg'
import img3 from '../../assets/new3.jpg'
import dataIcon from '../../assets/data.png'
const News = () => {
  return (
    <section className="news container">
      <h1 className="news__title">Eng so‘ngi</h1>
      <h3 className="news__subtitle">Registan Yangiliklar</h3>
      <div className="row">
        <div className="item">
          <img src={img1} alt="img" className="item__img" />
          <div className="date">
            <img src={dataIcon} alt="data" width={18} height={18} />
            <p>August 1, 2023</p>
          </div>
          <h2 className="item-title">Registan Namangan</h2>
        </div>
        <div className="item">
          <img src={img2} alt="img" className="item__img" />
          <div className="date">
            <img src={dataIcon} alt="data" width={18} height={18} />
            <p>August 1, 2023</p>
          </div>
          <h2 className="item-title">Registan Namangan</h2>
        </div>
        <div className="item">
          <img src={img3} alt="img" className="item__img" />
          <div className="date">
            <img src={dataIcon} alt="data" width={18} height={18} />
            <p>August 1, 2023</p>
          </div>
          <h2 className="item-title">Registan Namangan</h2>
        </div>
        <div className="item">
          <img src={img2} alt="img" className="item__img" />
          <div className="date">
            <img src={dataIcon} alt="data" width={18} height={18} />
            <p>August 1, 2023</p>
          </div>
          <h2 className="item-title">Registan Namangan</h2>
        </div>
        <div className="item">
          <img src={img3} alt="img" className="item__img" />
          <div className="date">
            <img src={dataIcon} alt="data" width={18} height={18} />
            <p>August 1, 2023</p>
          </div>
          <h2 className="item-title">Registan Namangan</h2>
        </div>
        <div className="item">
          <img src={img1} alt="img" className="item__img" />
          <div className="date">
            <img src={dataIcon} alt="data" width={18} height={18} />
            <p>August 1, 2023</p>
          </div>
          <h2 className="item-title">Registan Namangan</h2>
        </div>
      </div>
    </section>
  );
}

export default News