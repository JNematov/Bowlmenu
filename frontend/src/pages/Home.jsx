import Slideshow from "../components/Slideshow";
import { Link } from "react-router-dom";
import palov from "../images/palov_3.webp";

const Home = () => (
  <div className="home-page">
    <Slideshow slidesUrl={`http://localhost:8000/events`} />
    <div className="visit-us">
      <div className="content">
        <h2>Visit Us</h2>
        <hr />
        <p>Monday : Closed</p>
        <p>Tuesday-Sunday : 11:00 am - 9:00 pm</p>
        <p className="adress">
          8650 Spicewood Springs Rd ste 119, Austin, TX 78759
        </p>
        <p className="phone-number">512-992-0128</p>
      </div>
      <img src={palov} alt="palov" className="fixed-image" />
    </div>
    <section className="pic">
      <div className="menu-title">
        <h1 className="menu-h1">Menu</h1>
      </div>
    </section>
    <div className="menu-subsection">
      <h3>From our family to yours, we present the Uzbek cuisine</h3>
      <p>
        Some of our traditional appetizers include Cheburek (deep-fried turnover
        with a filling of ground or minced meat and onions) and Samosas (fried
        or baked pastry with a savory filling) Within our entrees we have
        traditional Uzbek cuisine such as Shashlik (shish Kebab), Manti
        Dumplings, Fried Lagman, and Kebab. Our family recipes will keep you
        coming back for more! We have sides such as Uzbek bread, Pita Bread,
        French Fries, and of course, Achik-Chuchuk, and Borshit and Lagman Soup.
        Finally we have a variety of tasty desserts like Baklava and Honey
        Bread, along with our delicious cheescake!
      </p>
      <ul>
        <li style={{ padding: "0 2% 0 2%" }}>
          <Link
            to="menu/#Entrees"
            style={{ color: "antiquewhite", fontFamily: "Cinzel Serif" }}
          >
            Entrees
          </Link>
        </li>
        <li style={{ padding: "0 2% 0 2%" }}>
          <Link
            to="menu/#Appetizers"
            style={{ color: "antiquewhite", fontFamily: "Cinzel Serif" }}
          >
            Appetizers
          </Link>
        </li>
        <li style={{ padding: "0 2% 0 2%" }}>
          <Link
            to="menu/#Desserts"
            style={{ color: "antiquewhite", fontFamily: "Cinzel Serif" }}
          >
            Desserts
          </Link>
        </li>
        <li style={{ padding: "0 2% 0 2%" }}>
          <Link
            to="menu/#Drinks"
            style={{ color: "antiquewhite", fontFamily: "Cinzel Serif" }}
          >
            Drinks
          </Link>
        </li>
      </ul>
    </div>
    <section className="pic">
      <div className="menu-title-2">
        <h1 className="about-h1">About</h1>
      </div>
    </section>
    <div className="about-subsection">
      <h3>Austin's original Uzbek restaurant</h3>
      <p style={{ marginInline: "15%" }}>
        Midst the lack of Uzbek dining options in the Austin area, Bowl Menu
        serves authentic food for the masses! We are a family owned and operated
        restaurant dedicated to providing tasty and healthy food to our
        customers
      </p>
    </div>
  </div>
);

export default Home;
