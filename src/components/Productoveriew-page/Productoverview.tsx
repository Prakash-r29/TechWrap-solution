import "./Product.css";

function Overview() {
  return (
    <div className="overview-page">

      <div className="row align-items-center g-5">

        <div className="col-lg-6">

          <span className="overview-label">
            PRODUCT OVERVIEW
          </span>

          <h2>
            Everything you need
            <span> to grow digitally.</span>
          </h2>

          <p>
            TechWrap Solution helps businesses build,
            connect and scale modern digital experiences
            through powerful technology solutions.
          </p>

          <div className="overview-features">

            <div className="overview-feature">
              <div className="overview-icon">
                ⚡
              </div>

              <div>
                <h5>Build Faster</h5>

                <p>
                  Build modern digital products
                  faster and more efficiently.
                </p>
              </div>
            </div>


            <div className="overview-feature">
              <div className="overview-icon">
                🔗
              </div>

              <div>
                <h5>Connect Everything</h5>

                <p>
                  Connect applications, APIs and
                  business tools together.
                </p>
              </div>
            </div>


            <div className="overview-feature">
              <div className="overview-icon">
                📈
              </div>

              <div>
                <h5>Scale Confidently</h5>

                <p>
                  Technology that grows alongside
                  your business.
                </p>
              </div>
            </div>

          </div>

        </div>


        <div className="col-lg-6">

          <div className="overview-visual">

            <div className="overview-dashboard">

              <small>TECHWRAP PLATFORM</small>

              <h4>
                Business Performance
              </h4>

              <div className="overview-chart">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>

              <div className="overview-stat">

                <span>
                  Growth
                </span>

                <strong>
                  +32.8%
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Overview;