import './hero.scss'
import ArrowLeft from '../../assets/arrowLeft.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__title">
        <h1 className="hero__title-subtitle">It’s Time To Explore The World</h1>
        <button className="btn">Plan Your Trip</button>
      </div>
      <div className="hero__wrapper">
          <div className="hero__wrapper_count-pagination">
            <button className="btn-outline">
              <img src={ArrowLeft} alt="arrow left" />
            </button>
            <button className="btn-outline">
              <img src={ArrowLeft} alt="arrow left" className="arrowRight" />
            </button>

            <div className="hero__wrapper__count-pagination-count">
              1
            </div>
          </div>
          <div className="hero__wrapper-tour">
            <div className="col-3">
              <label>Destinations</label>
              <select>
                <option value="0">Arab Egypt</option>
                <option value="1">Uzbekistan</option>
                <option value="2">Tadjikistan</option>
              </select>
            </div>
            <div className="col-3">
              <label>Check in</label>
              <input type="date" />
            </div>
            <div className="col-3">
              <label>Price Range</label>
              <input type="text" placeholder='Enter Price'/>
            </div>
          </div>
          <div className="col-3">
            <button className="btn">
              Discover Now
            </button>
          </div>
        </div>
    </section>
  );
}

export default Hero