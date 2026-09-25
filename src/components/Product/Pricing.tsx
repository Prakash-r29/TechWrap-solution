import "./Pricing.css";

function Pricing() {
  return (
    <div className="pricing-page">

      <div className="pricing-heading text-center">

        <span>
          SIMPLE PRICING
        </span>

        <h2>
          Choose the plan that
          <strong> fits your business.</strong>
        </h2>

        <p>
          Start small and scale when you're ready.
        </p>

      </div>


      <div className="row g-4 mt-4">


        {/* STARTER */}

        <div className="col-lg-4">

          <div className="pricing-card">

            <span>STARTER</span>

            <h3>
              ₹999
              <small>/month</small>
            </h3>

            <p>
              Perfect for individuals and
              small projects.
            </p>

            <hr />

            <ul>
              <li>✓ 3 Projects</li>
              <li>✓ Basic API Access</li>
              <li>✓ Basic Analytics</li>
              <li>✓ Email Support</li>
            </ul>

            <button>
              Get Started
            </button>

          </div>

        </div>


        {/* BUSINESS */}

        <div className="col-lg-4">

          <div className="pricing-card pricing-popular">

            <div className="popular">
              MOST POPULAR
            </div>

            <span>BUSINESS</span>

            <h3>
              ₹2,999
              <small>/month</small>
            </h3>

            <p>
              For growing businesses and teams.
            </p>

            <hr />

            <ul>
              <li>✓ 15 Projects</li>
              <li>✓ Advanced APIs</li>
              <li>✓ Integrations</li>
              <li>✓ Advanced Analytics</li>
              <li>✓ Priority Support</li>
            </ul>

            <button>
              Get Started
            </button>

          </div>

        </div>


        {/* ENTERPRISE */}

        <div className="col-lg-4">

          <div className="pricing-card">

            <span>ENTERPRISE</span>

            <h3>
              Custom
            </h3>

            <p>
              Tailored solutions for
              large organizations.
            </p>

            <hr />

            <ul>
              <li>✓ Unlimited Projects</li>
              <li>✓ Custom APIs</li>
              <li>✓ Enterprise Security</li>
              <li>✓ Dedicated Support</li>
            </ul>

            <button>
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Pricing;