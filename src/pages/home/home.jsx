import "./home.scss";
import play from "../../assets/play.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="main">
      <div className="container">
        <div className="main__info">
          <h2 className="main-title">
            O’qi, <br /> Registon bilan o‘zgartir!
          </h2>
          <div className="btns">
            <Link to="/about">
              <a href="#">
                <span>
                  <img src={play} alt="play" />
                </span>
              </a>
            </Link>
            <h4>Bizning filial <br /> haqida bilib oling</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
