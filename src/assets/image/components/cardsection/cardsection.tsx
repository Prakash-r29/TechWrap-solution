import "./CardSection.css";

function CardSection() {
  return (
    <section className="services-section py-5">

      <div className="container">

        <div className="service-card">

          <div className="row align-items-center">

            {/* Left Side */}
            <div className="col-lg-6 p-5">

              <span className="badge bg-primary mb-3">
                 Data
              </span>

              <h2 className="display-5 fw-bold mb-4">
                Get data from the most complete data marketplace
              </h2>

              <p className="lead text-secondary mb-4">
                One contract to buy data from 200+ data and AI vendors in Clay’s marketplace. Create intent signals from anything on the internet. Bring 1st and 3rd party data together.
              </p>

              <div className="d-flex gap-3 flex-wrap">

                <button className="btn btn-primary btn-lg">
                  Start free trail
                </button>

                <button className="btn btn-outline-dark btn-lg">
                Explore data marketplace
                </button>

              </div>

            </div>

            {/* Right Side */}
            <div className="col-lg-6">

              <div className="features">

                <div className="feature-box">
                  🔒
                  <h4>Secure Solutions</h4>
                  <p>Performance, security and scalability together.</p>
                </div>

                <div className="feature-box">
                  ⚡
                  <h4>High Performance</h4>
                  <p>Lightning-fast websites with modern technologies.</p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CardSection;