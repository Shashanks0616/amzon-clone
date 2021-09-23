import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="Apple iMac with Retina 5K Display (27-inch/68.58 cm, 8GB RAM, 3.1GHz 6-core 10th-Generation Intel Core i5 Processor, 256GB SSD Storage) - Silve"
          price={1,69,900.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/41k91d0EYfL._AC_SY200_.jpg"
        />

        <Product
          id="12321341"
          title="2020 Apple MacBook Air (13.3-inch/33.78 cm, Apple M1 chip with 8-core CPU and 7-core GPU, 8GB RAM, 256GB SSD) - Space Grey"
          price={88,490.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg"
          
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The lean Startup: How Constant Innovation"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/61N6Ai7RkJL._AC_UY218_.jpg"
        />

        <Product
          id="12321341"
          title="The lean Startup: How Constant Innovation"
          price={11.96}
          rating={5}
          image="https://tse1.mm.bing.net/th?id=OIP.oVTInf6BxsjyDMK9pv6bPgHaE8&pid=Api&P=0&w=232&h=155"
        />

        <Product
          id="12321341"
          title="The lean Startup: How Constant Innovation"
          price={11.96}
          rating={5}
          image="https://tse1.mm.bing.net/th?id=OIP.oVTInf6BxsjyDMK9pv6bPgHaE8&pid=Api&P=0&w=232&h=155"
        />
      </div>

      <div className="home__row">
        <Product
          id="12321341"
          title="The lean Startup: How Constant Innovation"
          price={11.96}
          rating={5}
          image="https://tse1.mm.bing.net/th?id=OIP.oVTInf6BxsjyDMK9pv6bPgHaE8&pid=Api&P=0&w=232&h=155"
        />
      </div>
    </div>
  );
}

export default Home;
