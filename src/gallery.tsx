import "./gallery.css";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import Dog11 from "./assets/dog11.png";
import verctor from "./assets/vector.png";

function Gallery() {
  return (
    <>
      <section>
        <div id="banner-container" className="banner-container">

          <div className="blue-box"></div>
          <div className="camel-box"></div>

          <div className="banner-left">
            <div className="badge-wrapper">
              <img src={logo2} alt="Nominee Badge" className="badge-img" />
            </div>
          </div>

          <div className="banner-right">
            <div className="content-wrapper">
              <h2 className="banner-heading">
                99% Of Breeding<br />
                Parents OFA Certified
              </h2>

              <p className="banner-text">
                OFA testing is an essential component of responsible dog breeding practices...
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== GUIDE SECTION ===== */}
      <section className="puppy-guide-section">
        <div className="guide-content">
          <h1 className="guide-title">
            Guide For Future Puppy Owners
          </h1>
        </div>

        <div className="dog-img">
          <img src={Dog11} alt="Future Puppy Owner Guide" />
        </div>
      </section>

      <section className="puppy-guarante-section">
        <div className="guarantee-content">

          <div className="light-box"></div>
          <div className="dark-box"></div>

          <div className="guarantee-text">
            <h2>Puppies With A</h2>

            <h1>
              GUARANTEE <span className="paw">
                <img src={verctor} alt="paw print" className="paw-img" />
              </span>
            </h1>

            <p>
              The health of your new family member is our primary concern. We take all necessary precautions from vet inspection of our pups to their parents requirement to pass annual exams. If there’s something undiscoverable at 8 weeks of age that later comes up as hereditary or congenital, you’re covered. We stand behind our pups with up to a 10 Year guarantee.
            </p>
          </div>

          <div className="logo3">   
            <img src={logo3} alt="Nominee Badge" className="logo3-img" />
          </div>

        </div>
      </section>
    </>
  );
}

export default Gallery;