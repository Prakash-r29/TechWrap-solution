{/* =========================================================
    SECURITY & RELIABILITY
========================================================= */}
import "./Devsecurity.css"
function Devsecurity(){
    return(
    <>
    <section className="security-section">

  {/* Background effects */}
  <div className="security-grid"></div>

  <div className="security-glow security-glow-one"></div>
  <div className="security-glow security-glow-two"></div>

  <div className="security-orb security-orb-one"></div>
  <div className="security-orb security-orb-two"></div>


  <div className="container">

    {/* =====================================================
        HEADING
    ===================================================== */}

    <div className="security-heading">

      <div className="security-label">
        <span className="security-label-dot"></span>
        SECURITY & RELIABILITY
      </div>

      <h2>
        Deploy faster without
        <span> compromising security.</span>
      </h2>

      <p>
        Build and deploy with confidence using security,
        access control and continuous monitoring throughout
        your DevOps lifecycle.
      </p>

    </div>


    {/* =====================================================
        SECURITY CARDS
    ===================================================== */}

    <div className="security-features">


      {/* 01 */}
      <div
        className="security-card"
        style={
          {
            "--security-delay": "0s"
          } as React.CSSProperties
        }
      >

        <div className="security-card-scan"></div>

        <div className="security-card-top">

          <div className="security-number">
            01
          </div>

          <div className="security-status">
            <span></span>
            SECURE
          </div>

        </div>


        <div className="security-icon-wrap">

          <div className="security-icon">
            🔐
          </div>

          <div className="security-icon-ring"></div>

        </div>


        <div className="security-card-content">

          <h3>
            Secure Pipelines
          </h3>

          <p>
            Protect CI/CD workflows with secure
            deployment practices and automated controls.
          </p>

        </div>


        <div className="security-card-line"></div>

      </div>



      {/* 02 */}
      <div
        className="security-card"
        style={
          {
            "--security-delay": "0.12s"
          } as React.CSSProperties
        }
      >

        <div className="security-card-scan"></div>

        <div className="security-card-top">

          <div className="security-number">
            02
          </div>

          <div className="security-status">
            <span></span>
            SCANNING
          </div>

        </div>


        <div className="security-icon-wrap">

          <div className="security-icon">
            🛡️
          </div>

          <div className="security-icon-ring"></div>

        </div>


        <div className="security-card-content">

          <h3>
            Vulnerability Detection
          </h3>

          <p>
            Identify security issues early with continuous
            vulnerability detection and validation.
          </p>

        </div>


        <div className="security-card-line"></div>

      </div>



      {/* 03 */}
      <div
        className="security-card"
        style={
          {
            "--security-delay": "0.24s"
          } as React.CSSProperties
        }
      >

        <div className="security-card-scan"></div>

        <div className="security-card-top">

          <div className="security-number">
            03
          </div>

          <div className="security-status">
            <span></span>
            PROTECTED
          </div>

        </div>


        <div className="security-icon-wrap">

          <div className="security-icon">
            🔑
          </div>

          <div className="security-icon-ring"></div>

        </div>


        <div className="security-card-content">

          <h3>
            Access Control
          </h3>

          <p>
            Manage infrastructure permissions and control
            access across your development environments.
          </p>

        </div>


        <div className="security-card-line"></div>

      </div>



      {/* 04 */}
      <div
        className="security-card"
        style={
          {
            "--security-delay": "0.36s"
          } as React.CSSProperties
        }
      >

        <div className="security-card-scan"></div>

        <div className="security-card-top">

          <div className="security-number">
            04
          </div>

          <div className="security-status">
            <span></span>
            LIVE
          </div>

        </div>


        <div className="security-icon-wrap">

          <div className="security-icon">
            📡
          </div>

          <div className="security-icon-ring"></div>

        </div>


        <div className="security-card-content">

          <h3>
            Real-Time Monitoring
          </h3>

          <p>
            Detect infrastructure issues before they
            impact users with continuous monitoring.
          </p>

        </div>


        <div className="security-card-line"></div>

      </div>


    </div>


    {/* =====================================================
        SECURITY STATUS BAR
    ===================================================== */}

    <div className="security-status-bar">

      <div className="security-live">

        <span className="security-live-dot"></span>

        <span>
          Security systems operational
        </span>

      </div>


      <div className="security-status-items">

        <span>
          <b>✓</b> Pipeline
        </span>

        <span>
          <b>✓</b> Access
        </span>

        <span>
          <b>✓</b> Monitoring
        </span>

        <span>
          <b>✓</b> Protection
        </span>

      </div>

    </div>

  </div>

</section>
</>
)
}
export default Devsecurity;