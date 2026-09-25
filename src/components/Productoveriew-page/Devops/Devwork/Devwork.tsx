import "./Devwork.css"
function Devwork(){
  return(
  <>
  
<section className="devops-workflow-section">

  {/* Background */}
  <div className="devops-workflow-grid"></div>

  <div className="devops-workflow-glow devops-glow-one"></div>
  <div className="devops-workflow-glow devops-glow-two"></div>

  {/* Heading */}
  <div className="container">

    <div className="devops-workflow-heading">

      <div className="devops-section-label">
        <span></span>
        DEVOPS WORKFLOW
      </div>

      <h2>
        From <span>Code to Production.</span>
      </h2>

      <p>
        A reliable DevOps workflow that automates development,
        testing, deployment and continuous monitoring.
      </p>

    </div>


    {/* Pipeline */}
    <div className="devops-pipeline">

      {/* Connecting line */}
      <div className="devops-pipeline-line">
        <div className="devops-pipeline-progress"></div>
        <div className="devops-moving-dot"></div>
      </div>


      {/* Steps */}
      <div className="devops-steps">

        {/* 01 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0s" } as React.CSSProperties}
        >

          <div className="devops-step-number">01</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">📋</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Plan</h3>
            <p>
              Define requirements, architecture and delivery goals.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>


        {/* 02 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0.1s" } as React.CSSProperties}
        >

          <div className="devops-step-number">02</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">💻</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Code</h3>
            <p>
              Develop clean, scalable and maintainable applications.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>


        {/* 03 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0.2s" } as React.CSSProperties}
        >

          <div className="devops-step-number">03</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">⚙️</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Build</h3>
            <p>
              Automatically compile, package and prepare applications.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>


        {/* 04 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0.3s" } as React.CSSProperties}
        >

          <div className="devops-step-number">04</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">🧪</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Test</h3>
            <p>
              Validate functionality, performance and reliability.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>


        {/* 05 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0.4s" } as React.CSSProperties}
        >

          <div className="devops-step-number">05</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">📦</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Release</h3>
            <p>
              Manage versions and prepare reliable production releases.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>


        {/* 06 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0.5s" } as React.CSSProperties}
        >

          <div className="devops-step-number">06</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">🚀</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Deploy</h3>
            <p>
              Deliver applications safely across cloud environments.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>


        {/* 07 */}
        <div
          className="devops-step"
          style={{ "--step-delay": "0.6s" } as React.CSSProperties}
        >

          <div className="devops-step-number">07</div>

          <div className="devops-step-icon">
            <div className="devops-icon-inner">📊</div>
            <div className="devops-icon-ring"></div>
          </div>

          <div className="devops-step-content">
            <h3>Monitor</h3>
            <p>
              Monitor systems continuously and optimize performance.
            </p>
          </div>

          <div className="devops-step-indicator"></div>

        </div>

      </div>

    </div>


    {/* Bottom status */}
    <div className="devops-workflow-bottom">

      <span className="devops-status-dot"></span>

      Continuous integration · continuous delivery · continuous improvement

    </div>

  </div>

</section>
</>
  )
}
export default Devwork;