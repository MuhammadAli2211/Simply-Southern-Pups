import "./petSection.css";

import article1 from "./assets/pet1.png";
import article2 from "./assets/pet2.png";
import article3 from "./assets/pet3.png";
import logo from "./assets/logo.png";

import customer1 from "./assets/customer1.png";
import customer2 from "./assets/customer2.png";
import customer3 from "./assets/customer3.png";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

function PetSections() {

  const articles = [
    {
      id: 1,
      image: article1,
      category: "Pet Knowledge",
      title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
      excerpt: "The Pomeranian is one of the cutest and smartest pets."
    },
    {
      id: 2,
      image: article2,
      category: "Pet Knowledge",
      title: "Dog Diet: You Need To Know",
      excerpt: "A healthy diet helps your dog stay active and strong."
    },
    {
      id: 3,
      image: article3,
      category: "Pet Knowledge",
      title: "Why Dogs Bite Furniture and How to Prevent It",
      excerpt: "Chewing furniture is common for growing dogs."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Anna & Tobby",
      review: "Amazing Products & Delivery on time.",
      image: customer1,
      bg: "#FCEB92"
    },
    {
      id: 2,
      name: "Christine & Tom",
      review: "Love the overall shopping experience!",
      image: customer2,
      bg: "#F3C1C6"
    },
    {
      id: 3,
      name: "Sindy & Kitch",
      review: "Kitch loves food from the pup shop.",
      image: customer3,
      bg: "#D6C7ED"
    }
  ];

  return (
    <>
      <div className="petSections">

        <section className="knowledgeSection">

          <div className="sectionHeader">
            <div>
              <span className="smallText">You already know?</span>
              <h2>Useful Pet Knowledge</h2>
            </div>

            <button className="viewBtn">View More →</button>
          </div>

          <div className="knowledgeGrid">

            {articles.map((item) => (
              <div className="knowledgeCard" key={item.id}>
                <div className="knowledgeImage">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="knowledgeContent">
                  <span className="categoryTag">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </div>
            ))}

          </div>
        </section>

        <section className="customerSection">

          <div className="customerTitle">
            <h2>Happy Customer</h2>
            <div className="line"></div>
          </div>

          <div className="customerGrid">

            {testimonials.map((item) => (
              <div className="customerCard" key={item.id}>

                <div
                  className="customerImageArea"
                  style={{ background: item.bg }}
                >
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="customerContent">
                  <h3>{item.name}</h3>
                  <p>"{item.review}"</p>
                </div>

              </div>
            ))}

          </div>

          <button className="exploreBtn">Explore More →</button>
        </section>

      </div>

      <footer id="footer-section" className="footer-section">

        <div className="newsletterBox">

          <h2>
            Register Now So You Don't Miss
            <br />
            Our Programs
          </h2>

          <div className="newsletterInput">
            <input type="email" placeholder="Enter your Email" />
            <button>Subscribe Now</button>
          </div>

        </div>

        <div className="footerNav">

          <ul>
            <li><a href="/#menu">Home</a></li>
            <li><a href="/#footer-section">Contact Info</a></li>
            <li><a href="/#menu">Menu </a></li>
            <li><a href="/#banner-container">Gallery</a></li>

          </ul>

          <div className="socialIcons">
            <a href="/"><FaFacebookF /></a>
            <a href="/"><FaTwitter /></a>
            <a href="/"><FaInstagram /></a>
            <a href="/"><FaYoutube /></a>
          </div>

        </div>


        <div className="footerBottom">

          <p>© 2022 Simply Southern Pups. All rights reserved.</p>

          <div className="footerLogo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="footerLinks">
            <a href="/">Terms of Service</a>
            <a href="/">Privacy Policy</a>
          </div>

        </div>

      </footer>
    </>
  );
}

export default PetSections;