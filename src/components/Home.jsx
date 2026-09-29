import React from "react";
import "../assets/style/style.css";

import heroImage from "../assets/images/hero.jpg";
import sofaImage from "../assets/images/sofa.jpg";
import bedImage from "../assets/images/bed.jpg";
import tableImage from "../assets/images/table.jpg";
import chairImage from "../assets/images/chair.jpg";
import cabinetImage from "../assets/images/cabinet.jpg";
import deskImage from "../assets/images/desk.jpg";

function Home() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">

          <a className="navbar-brand" href="#home">
            OakNest Furniture
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#products">
                  Products
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

            </ul>

          </div>

        </div>
      </nav>


      <section className="hero" id="home">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-md-6">

              <h1>Furniture Made For Living</h1>

              <p>
                Discover beautiful furniture designed to make
                your home comfortable, elegant and welcoming.
              </p>

              <a href="#products" className="btn btn-main">
                Explore Furniture
              </a>

            </div>


            <div className="col-md-6">

              <img
                src={heroImage}
                className="img-fluid rounded"
                alt="Furniture"
              />

            </div>

          </div>

        </div>

      </section>


      <section className="products" id="products">

        <div className="container">

          <h2>Our Furniture</h2>

          <div className="row">


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={sofaImage}
                  alt="Classic Sofa"
                />

                <h3>Classic Sofa</h3>

                <p>₹28,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={bedImage}
                  alt="Wooden Bed"
                />

                <h3>Wooden Bed</h3>

                <p>₹35,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={tableImage}
                  alt="Dining Table"
                />

                <h3>Dining Table</h3>

                <p>₹22,499</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={chairImage}
                  alt="Comfort Chair"
                />

                <h3>Comfort Chair</h3>

                <p>₹8,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={cabinetImage}
                  alt="Storage Cabinet"
                />

                <h3>Storage Cabinet</h3>

                <p>₹15,999</p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="product-card">

                <img
                  src={deskImage}
                  alt="Office Desk"
                />

                <h3>Office Desk</h3>

                <p>₹12,999</p>

              </div>

            </div>


          </div>

        </div>

      </section>


      <section className="about" id="about">

        <div className="container">

          <h2>About OakNest</h2>

          <p>
            OakNest Furniture brings together timeless designs,
            comfortable materials and practical furniture for
            modern homes.
          </p>

        </div>

      </section>


      <section className="contact" id="contact">

        <div className="container">

          <h2>Contact Us</h2>

          <p>Phone: +91 1111 1111</p>

          <p>Email: oaknest@gmail.com</p>

          <p>Bengaluru, Karnataka</p>

        </div>

      </section>


      <footer>

        <div className="container">

          <div className="footer-links">

            <a href="#home">Home</a>

            <a href="#products">Products</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

          </div>

          <p>
            &copy; 2026 OakNest Furniture. All Rights Reserved.
          </p>

        </div>

      </footer>

    </>
  );
}

export default Home;