import "./Services.css";
import iconCart from "../assets/icon-cart.png";
import iconHand from "../assets/icon-hand.png";
import iconWorld from "../assets/icon-world.png";
import iconCarrot from "../assets/icon-carrot.png";

export const Services = () => (
  <section className="services">
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-box">
        <ul className="services-list">
          <li className="services-list-item">
            <a href="#" target="_self">
              Online Shopping{" "}
              <img className="services-img" src={iconCart} alt="icon-cart" />
            </a>
          </li>
          <li className="services-list-item">
            <a href="#" target="_self">
              Quality Product{" "}
              <img className="services-img" src={iconHand} alt="icon-hand" />
            </a>
          </li>
          <li className="services-list-item">
            <a href="#" target="_self">
              Domestic & International
              <br /> Delivery{" "}
              <img
                className="services-img icon-world"
                src={iconWorld}
                alt="icon-world"
              />
            </a>
          </li>
          <li className="services-list-item">
            <a href="#" target="_self">
              Well Organized{" "}
              <img
                className="services-img"
                src={iconCarrot}
                alt="icon-carrot"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);
