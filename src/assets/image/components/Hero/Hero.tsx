import "./Hero.css";

function Hero() {
  return (
    <>
      <section className="hero-section">

        <div className="hero-glow"></div>

        <div className="container">

          {/* Text Content */}
          <div className="row justify-content-center">

            <div className="col-lg-8 text-center">

              <h1 className="hero-title">
                We Wrap Ambitious Ideas in
                <span> Technology </span>
                That Delivers.
              </h1>

              <p className="hero-description">
                TechWrap Solution designs, develops and delivers
                modern websites, web applications and digital
                experiences that help businesses grow faster.
              </p>

              <div className="hero-buttons justify-content-center">

                <button className="btn btn-primary hero-btn">
                  Start a Free trial →
                </button>

                <button className="btn btn-outline-dark work-btn">
                  Get a Demo
                </button>

              </div>

            </div>

          </div>

          </div>

        

      </section>
    </>
  );
}

export default Hero;