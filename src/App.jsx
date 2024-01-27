import "./App.css";

function App() {
  return (
    <div>
      <div className="main">
        <header className="navbar container flex align">
          <div className="logo">RAAJ</div>
          <div className="flex">
            <div className="nav-title flex gap">
              <a href="#">Home</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact Us</a>
            </div>
            <div className="hamburger flex gap text">
              <div className="ham1" />
              <div className="ham2" />
              <div className="ham3" />
            </div>
          </div>
        </header>
      </div>
      <div className="img-store container flex wrap justify text gap">
        <div className="images">
          <img
            className="w-100"
            src="https://everlybrothers.com/cdn/shop/products/ebmini1_1946x.jpg?v=1655135833"
            alt
          />
          <h2>Guitar</h2>
        </div>
        <div className="images">
          <img
            className="w-100"
            src="https://everlybrothers.com/cdn/shop/products/ebmini1_1946x.jpg?v=1655135833"
            alt
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam,
            corporis!
          </p>
        </div>
        <div className="images">
          <img
            className="w-100"
            src="https://everlybrothers.com/cdn/shop/products/ebmini1_1946x.jpg?v=1655135833"
            alt
          />
          <strong>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </strong>
        </div>
        <div className="images">
          <img
            className="w-100"
            src="https://everlybrothers.com/cdn/shop/products/ebmini1_1946x.jpg?v=1655135833"
            alt
          />
          <i>
            <h2>Namste</h2>
          </i>
        </div>
        <div className="images">
          <img
            className="w-100"
            src="https://everlybrothers.com/cdn/shop/products/ebmini1_1946x.jpg?v=1655135833"
            alt
          />
        </div>
        <div className="images">
          <img
            className="w-100"
            src="https://everlybrothers.com/cdn/shop/products/ebmini1_1946x.jpg?v=1655135833"
            alt
          />
        </div>
      </div>
    </div>
  );
}

export default App;
