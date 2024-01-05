import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Welcome to an expansive digital storefront, where a broader card
                seamlessly introduces you to a world of offerings. Below, you'll
                find engaging content that goes beyond the ordinary, inviting
                you to explore a diverse range of products and experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
