import "./Footer.css";


function Footer() {
  return (
    <footer className="footer">

      {/* CTA Card */}

      <div className="container">

        <div className="footer-card">

          <div className="row align-items-center">

            <div className="col-lg-8">

              <span className="footer-badge">
                Let's Build Together
              </span>

              <h2>
                Ready to turn your ideas into
                <span> digital success?</span>
              </h2>

              <p>
                TechWrap Solution helps startups and enterprises build
                modern websites, web applications, AI-powered products,
                dashboards and scalable business solutions.
              </p>

            </div>

            <div className="col-lg-4 text-lg-end mt-4 mt-lg-0">

              <button className="btn btn-primary btn-lg me-3">
                Start Project
              </button>

              <br />
                <br />
             <button className="btn btn-outline-dark btn-lg">
               Contact Us
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Footer Links */}

      <div className="container py-5">

        <div className="row gy-5">

          <div className="col-lg-2 col-md-4">

            <h5>Services</h5>

            <a href="/">Website Development</a>
            <a href="/">Web Applications</a>
            <a href="/">UI/UX Design</a>
            <a href="/">Mobile Responsive Design</a>
            <a href="/">API Integration</a>
            <a href="/">Website Maintenance</a>

          </div>

          <div className="col-lg-2 col-md-4">

            <h5>Technologies</h5>

            <a href="/">React.js</a>
            <a href="/">JavaScript</a>
            <a href="/">Bootstrap</a>
            <a href="/">Java</a>
            <a href="/">Spring Boot</a>
            <a href="/">MySQL</a>

          </div>

          <div className="col-lg-2 col-md-4">

            <h5>Solutions</h5>

            <a href="/">Business Websites</a>
            <a href="/">Portfolio Websites</a>
            <a href="/">Admin Dashboards</a>
            <a href="/">AI SaaS</a>
            <a href="/">E-Commerce</a>
            <a href="/">Landing Pages</a>

          </div>

          <div className="col-lg-2 col-md-4">

            <h5>Resources</h5>

            <a href="/">Blog</a>
            <a href="/">Case Studies</a>
            <a href="/">FAQs</a>
            <a href="/">Documentation</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>

          </div>

          <div className="col-lg-2 col-md-4">

            <h5>Company</h5>

            <a href="/">About Us</a>
            <a href="/">Our Team</a>
            <a href="/">Careers</a>
            <a href="/">Testimonials</a>
            <a href="/">Contact</a>

          </div>

          <div className="col-lg-2 col-md-4">

            <h5>Contact</h5>

            <a href="/">techwrapsolution@org.com</a>
            <a href="/">+91 98765 43210</a>
            <a href="/">Chennai, India</a>

          </div>

        </div>

      </div>
      {/* Bottom */}

      <div className="footer-bottom">

        <div className="container d-flex justify-content-between align-items-center flex-wrap">

          <p>
            © 2026 TechWrap Solution. All Rights Reserved.
          </p>

          <div className="social-links">


          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;