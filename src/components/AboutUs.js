import React, { useState } from "react";
import howToUseApp from "./API/howToUse";

const AboutUs = () => {
  const [aboutDate, setAboutData] = useState(howToUseApp);
  return (
    <>
      {/* -------------------About Us First Part--------------------- */}
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center">
              <img src="./images/hero3.jpg" alt="aboutusImg" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutDate.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <button className="btn-style btn-style-border">learn more</button>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------About Us Second Part--------------------- */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center flex-column">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How to use the App?</h1>
              {aboutDate.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}
              <button className="btn-style btn-style-border">learn more</button>
            </div>
            <div className="col-12 col-lg-5">
              <img src="./images/callcenter.jpg" alt="aboutusImg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
