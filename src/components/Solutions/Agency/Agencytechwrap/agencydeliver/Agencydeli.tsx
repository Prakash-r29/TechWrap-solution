import "./Agencydeli.css"
function Agencydeli(){
return(<>
<section className="delivery-process">
  <div className="process-container">

    <div className="process-heading">
      <span>OUR PROCESS</span>
      <h2>Agency Delivery Process</h2>
      <p>
        From idea to production, we turn your requirements into
        reliable digital products.
      </p>
    </div>

    <div className="timeline">

      <div className="timeline-line">
        <div className="timeline-progress"></div>
        <div className="timeline-particle"></div>
      </div>

      <div className="process-step">
        <div className="step-number">01</div>
        <div className="step-dot"></div>

        <div className="step-content">
          <span>DISCOVER</span>
          <h3>Discover</h3>
          <p>Understand client requirements.</p>
          <small>Requirements</small>
        </div>
      </div>

      <div className="process-step">
        <div className="step-number">02</div>
        <div className="step-dot"></div>

        <div className="step-content">
          <span>PLAN</span>
          <h3>Plan</h3>
          <p>Define scope, architecture and timeline.</p>
          <small>Architecture</small>
        </div>
      </div>

      <div className="process-step">
        <div className="step-number">03</div>
        <div className="step-dot"></div>

        <div className="step-content">
          <span>BUILD</span>
          <h3>Build</h3>
          <p>Develop applications and integrations.</p>
          <small>React · API · TypeScript</small>
        </div>
      </div>

      <div className="process-step">
        <div className="step-number">04</div>
        <div className="step-dot"></div>

        <div className="step-content">
          <span>TEST</span>
          <h3>Test</h3>
          <p>QA, responsive testing and API validation.</p>
          <small>QA · Testing</small>
        </div>
      </div>

      <div className="process-step">
        <div className="step-number">05</div>
        <div className="step-dot"></div>

        <div className="step-content">
          <span>DEPLOY</span>
          <h3>Deploy</h3>
          <p>Cloud deployment and production setup.</p>
          <small>Cloud · CI/CD</small>
        </div>
      </div>

      <div className="process-step">
        <div className="step-number">06</div>
        <div className="step-dot"></div>

        <div className="step-content">
          <span>DELIVER</span>
          <h3>Deliver</h3>
          <p>Hand over a production-ready solution.</p>
          <small>Production</small>
        </div>
      </div>

    </div>
  </div>
</section>
</>
)
}
export default Agencydeli;