import React from "react";
import "./Homepage.css";
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image4.jpg";
import image5 from "./image/image5.jpg";
import image6 from "./image/image6.jpg";

function App() {
  return (
    <div className="App">
     
      <main>
        <section className="hero">
          <h2>Welcome to My Homepage</h2>
          <p>Here's some information about what you can find on this page.</p>
        </section>
        <section className="images">
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
        </section>
        <section className="features">
          <div className="feature">
            <img src={image4} alt="Feature 1" />
            <h3>Feature 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="feature">
            <img src={image5} alt="Feature 2" />
            <h3>Feature 2</h3>
            <p>
              Phasellus vehicula sapien eu mauris consequat, sed posuere libero
              faucibus.
            </p>
          </div>
          <div className="feature">
            <img src={image6} alt="Feature 3" />
            <h3>Feature 3</h3>
            <p>
              Vestibulum sit amet urna nec erat consectetur posuere sed non
              ipsum.
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2023 Dilip Singh Naruka</p>
      </footer>
    </div>
  );
}

export default App;
