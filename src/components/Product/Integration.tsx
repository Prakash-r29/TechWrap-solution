import "./Integration.css";

function Integrations() {
  return (
    <div className="integrations-page">

      <div className="row align-items-center g-5">

        <div className="col-lg-5">

          <span className="integration-label">
            INTEGRATIONS
          </span>

          <h2>
            Connect your
            <span> entire ecosystem.</span>
          </h2>

          <p>
            Connect your applications, APIs, databases
            and business platforms through a flexible
            integration architecture.
          </p>


          <div className="integration-features">

            <div>
              <strong>01</strong>

              <h5>API First</h5>

              <p>
                Connect applications through
                reliable APIs.
              </p>
            </div>


            <div>
              <strong>02</strong>

              <h5>Real-Time Data</h5>

              <p>
                Keep your business data synchronized.
              </p>
            </div>


            <div>
              <strong>03</strong>

              <h5>Secure</h5>

              <p>
                Secure authentication and
                controlled access.
              </p>
            </div>

          </div>

        </div>


        <div className="col-lg-7">

          <div className="integration-network">

            <div className="integration-center">
              T
              <small>TechWrap</small>
            </div>

            <div className="integration-node node-1">
              CRM
            </div>

            <div className="integration-node node-2">
              API
            </div>

            <div className="integration-node node-3">
              DB
            </div>

            <div className="integration-node node-4">
              AI
            </div>

            <div className="integration-line line-1"></div>
            <div className="integration-line line-2"></div>
            <div className="integration-line line-3"></div>
            <div className="integration-line line-4"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Integrations;