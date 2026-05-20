import "./App.css";
import dogGirl from "./assets/photo1.png";
import logo from "./assets/logo.png";

function Hero() {
  return (
    <section id="menu" className="hero">


      <div className="topbar">
        <p>Upto 30% OFF - Limited Time Learn More</p>

        <p>803-830-6109 (Call / Text)</p>

        <p>Pickup / Delivery</p>
      </div>

      <nav className="navbar">

        <div className="logo-area">

          <div className="logo-bg"></div>

          <img src={logo} alt="logo" />

        </div>

        <ul className="nav-links">
          <li><a href="/#menu">Home</a></li>
          <li><a href="/#footer-section">Contact Info</a></li>
          <li><a href="/#menu">Menu </a></li>
          <li><a href="/#banner-container">Gallery</a></li>

        </ul>

        <div className="search-box">
          <input type="text" placeholder="Explore Breed" />
        </div>
        <button
  className="nav-btn"
  onClick={() => {
    window.location.href = "/Puppies#puppies-section";
  }}
>
  Available Puppies
</button>
      </nav>

      <div className="hero-content">

        <div className="hero-left">

          <h1>
            Get Your Family
            <br />
            A New Member
          </h1>

          <p>
            At Simply Southern Pups strive to provide South Carolina's
            premier puppy adoption experience. We appreciate and celebrate
            the difference that puppies can make in the quality of one's life.
          </p>

          <button className="intro-btn">
            View Intro ⭘
          </button>

          <div className="blue-circle"></div>

        </div>

        <div className="hero-right">

          <div className="small-square"></div>
          <div className="small-diamond"></div>

          <div className="blue-layer"></div>

          <div className="camel-layer"></div>

          <img src={dogGirl} alt="girl and dog" />

        </div>

      </div>

    </section>
  );
}

export default Hero;