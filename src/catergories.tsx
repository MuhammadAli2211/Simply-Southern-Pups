import "./catergories.css";

import dog1 from "./assets/dog1.png";
import dog2 from "./assets/dog2.png";
import dog3 from "./assets/dog3.png";
import dog4 from "./assets/dog4.png";
import dog5 from "./assets/dog5.png";
import dog6 from "./assets/dog6.png";
import dog7 from "./assets/dog7.png";
import dog8 from "./assets/dog8.png";

function Puppies() {

  const categories = [
    {
      image: dog1,
      title: "All designer Breeds",
      total: "24 Puppies",
    },

    {
      image: dog2,
      title: "All Doodle Breeds",
      total: "24 Puppies",
    },

    {
      image: dog3,
      title: "All Purebred Breeds",
      total: "24 Puppies",
    },

    {
      image: dog4,
      title: "All designer Breeds",
      total: "24 Puppies",
    },
  ];

  const puppies = [
    dog1,
    dog5,
    dog2,
    dog3,
    dog6,
    dog7,
    dog8,
    dog4,
  ];

  return (
    <section id="puppies-section" className="puppies-section">


      <div className="category-header">

        <h1>Puppy Breed Categories</h1>

        <div className="arrows">
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>

      </div>


      <div className="category-grid">

        {categories.map((item, index) => (
          <div className="category-card" key={index}>

            <img src={item.image} alt="" />

            <div className="category-info">
              <h3>{item.title}</h3>
              <p>{item.total}</p>
            </div>

          </div>
        ))}

      </div>


      <div className="pets-header">

        <div>
          <span>Whats new?</span>

          <h2>
            Take A Look At Some Of Our Pets
          </h2>
        </div>

        <button className="view-btn">
          View More →
        </button>

      </div>


      <div className="pets-grid">

        {puppies.map((dog, index) => (
          <div className="pet-card" key={index}>

            <img src={dog} alt="" />

                      </div>
        ))}

      </div>

    </section>
  );
}

export default Puppies;