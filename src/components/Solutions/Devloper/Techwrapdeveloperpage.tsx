
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Techwrapdeveloperpage.css";


/* =========================================================
   TYPES
========================================================= */

type DevLanguage = "react" | "django";


/* =========================================================
   CODE EXAMPLES
========================================================= */

const apiSnippets: Record<DevLanguage, string> = {
  react: `// React.js — Fetch TechWrap Analytics 
import { useEffect, useState } from "react"; 
import { TechWrapClient } from "@techwrap/sdk"; 
 
export function AnalyticsDashboard() { 
  const [metrics, setMetrics] = useState(null); 
 
  useEffect(() => { 
    const client = new TechWrapClient( 
      "YOUR_PUBLIC_KEY" 
    ); 
 
    client.analytics 
      .getSummary({ 
        timeframe: "30d", 
      }) 
      .then((data) => setMetrics(data)) 
      .catch((err) => 
        console.error("Data fetch failed", err) 
      ); 
  }, []); 
 
  return ( 
    <div className="tw-dev-widget"> 
      {metrics ? ( 
        <DataChart data={metrics} /> 
      ) : ( 
        <Spinner /> 
      )} 
    </div> 
  ); 
}`,

  django: `# Django / Python — Secure TechWrap Webhook 
import json 
 
from django.http import JsonResponse 
from django.views.decorators.csrf import csrf_exempt 
 
from techwrap.utils import verify_webhook_signature 
 
 
@csrf_exempt 
def techwrap_webhook_receiver(request): 
 
    if request.method == "POST": 
 
        payload = request.body 
 
        signature = request.headers.get( 
            "TechWrap-Signature" 
        ) 
 
        if verify_webhook_signature( 
            payload, 
            signature, 
            "YOUR_WEBHOOK_SECRET" 
        ): 
 
            event = json.loads(payload) 
 
            if event["type"] == "project.deployed": 
 
                process_new_deployment( 
                    event["data"] 
                ) 
 
                return JsonResponse({ 
                    "status": "success" 
                }) 
 
    return JsonResponse( 
        {"error": "Invalid request"}, 
        status=400 
    )`,
};


/* =========================================================
   STACK DATA
========================================================= */

const stackItems = [
  {
    icon: "⚛",
    title: "React.js",
    subtitle: "Frontend SDK",
  },
  {
    icon: "TS",
    title: "TypeScript",
    subtitle: "Type-safe APIs",
  },
  {
    icon: "PY",
    title: "Django",
    subtitle: "Backend webhooks",
  },
  {
    icon: "API",
    title: "REST API",
    subtitle: "Enterprise services",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

const TechWrapDeveloperPage: React.FC = () => {

  const [activeTab, setActiveTab] =
    useState<DevLanguage>("react");

  const [copyStatus, setCopyStatus] =
    useState("Copy");

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const navigate = useNavigate();


  /* =======================================================
     COPY CODE
  ======================================================= */

  const handleCopyCode = async () => {

    try {

      await navigator.clipboard.writeText(
        apiSnippets[activeTab]
      );

      setCopyStatus("Copied");

      window.setTimeout(() => {
        setCopyStatus("Copy");
      }, 1800);

    } catch {

      setCopyStatus("Failed");

      window.setTimeout(() => {
        setCopyStatus("Copy");
      }, 1800);

    }

  };


  /* =======================================================
     RESET COPY STATE
  ======================================================= */

  useEffect(() => {

    setCopyStatus("Copy");

  }, [activeTab]);


  return (

    <section className="tw-dev-integration">

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="tw-dev-bg-grid"
        aria-hidden="true"
      />

      <div
        className="tw-dev-glow tw-dev-glow-left"
        aria-hidden="true"
      />

      <div
        className="tw-dev-glow tw-dev-glow-right"
        aria-hidden="true"
      />


      <div className="container">

        {/* ===================================================
            SECTION INTRO
        =================================================== */}

        <div className="tw-dev-heading">

          <div className="tw-dev-eyebrow">

            <span className="tw-dev-eyebrow-dot"></span>

            DEVELOPER INTEGRATION

            <span className="tw-dev-eyebrow-line"></span>

          </div>


          <h2>
            Seamless
            <span>
              Stack Integration.
            </span>
          </h2>


          <p>
            Connect your product with TechWrap through
            clean APIs, developer-friendly SDKs and secure
            webhooks. Build faster without changing the
            way your team works.
          </p>

        </div>


        {/* ===================================================
            MAIN INTEGRATION AREA
        =================================================== */}

        <div className="tw-dev-integration-layout">


          {/* =================================================
              LEFT SIDE
          ================================================= */}

          <div className="tw-dev-integration-copy">

            <div className="tw-dev-copy-card">

              <div className="tw-dev-card-top">

                <span className="tw-dev-card-index">
                  01
                </span>

                <span className="tw-dev-card-status">

                  <i></i>

                  CONNECTED

                </span>

              </div>


              <h3>
                Connect your existing
                <strong>
                  technology stack.
                </strong>
              </h3>


              <p>
                Whether you're building a React dashboard,
                a Django backend or connecting third-party
                enterprise systems, TechWrap provides the
                integration layer your application needs.
              </p>


              {/* =================================================
                  BENEFITS
              ================================================= */}

              <div className="tw-dev-benefits">

                <div className="tw-dev-benefit">

                  <span className="tw-dev-benefit-icon">
                    ✓
                  </span>

                  <div>

                    <strong>
                      Type-safe APIs
                    </strong>

                    <small>
                      Predictable integration
                    </small>

                  </div>

                </div>


                <div className="tw-dev-benefit">

                  <span className="tw-dev-benefit-icon">
                    ↗
                  </span>

                  <div>

                    <strong>
                      Real-time sync
                    </strong>

                    <small>
                      Keep systems connected
                    </small>

                  </div>

                </div>


                <div className="tw-dev-benefit">

                  <span className="tw-dev-benefit-icon">
                    ◈
                  </span>

                  <div>

                    <strong>
                      Secure webhooks
                    </strong>

                    <small>
                      Verified platform events
                    </small>

                  </div>

                </div>


                <div className="tw-dev-benefit">

                  <span className="tw-dev-benefit-icon">
                    ⚡
                  </span>

                  <div>

                    <strong>
                      Production ready
                    </strong>

                    <small>
                      Built for real applications
                    </small>

                  </div>

                </div>

              </div>


              {/* =================================================
                  STACK
              ================================================= */}

              <div className="tw-dev-stack-section">

                <span className="tw-dev-stack-label">
                  SUPPORTED STACK
                </span>


                <div className="tw-dev-stack-list">

                  {stackItems.map((item) => (

                    <div
                      className="tw-dev-stack-item"
                      key={item.title}
                    >

                      <span className="tw-dev-stack-icon">
                        {item.icon}
                      </span>

                      <div>

                        <strong>
                          {item.title}
                        </strong>

                        <small>
                          {item.subtitle}
                        </small>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>


          {/* =================================================
              RIGHT SIDE — CODE PANEL
          ================================================= */}

          <div className="tw-dev-code-column">

            <div className="tw-dev-connection-status">

              <div className="tw-dev-connection-dot">
                <span></span>
              </div>

              <div>

                <strong>
                  TechWrap API
                </strong>

                <small>
                  Secure connection established
                </small>

              </div>


              <span className="tw-dev-connection-live">
                LIVE
              </span>

            </div>


            {/* =================================================
                CODE WINDOW
            ================================================= */}

            <div className="tw-dev-code-window">

              <div className="tw-dev-code-topbar">

                <div className="tw-dev-window-dots">

                  <i></i>
                  <i></i>
                  <i></i>

                </div>


                <div className="tw-dev-window-url">
                  developer.techwrap.dev
                </div>


                <button
                  type="button"
                  className="tw-dev-copy-button"
                  onClick={handleCopyCode}
                >

                  <span>
                    {copyStatus}
                  </span>

                  <i>
                    {copyStatus === "Copied"
                      ? "✓"
                      : "⧉"}
                  </i>

                </button>

              </div>


              {/* =================================================
                  LANGUAGE TABS
              ================================================= */}

              <div className="tw-dev-language-bar">

                <button
                  type="button"
                  className={
                    activeTab === "react"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveTab("react")
                  }
                >

                  <span>
                    REACT
                  </span>

                  <small>
                    UI
                  </small>

                </button>


                <button
                  type="button"
                  className={
                    activeTab === "django"
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setActiveTab("django")
                  }
                >

                  <span>
                    DJANGO
                  </span>

                  <small>
                    PYTHON
                  </small>

                </button>

              </div>


              {/* =================================================
                  CODE BODY
              ================================================= */}

              <div className="tw-dev-code-body">

                <div className="tw-dev-code-line-numbers">

                  {apiSnippets[activeTab]
                    .split("\n")
                    .map((_, index) => (

                      <span key={index}>
                        {String(
                          index + 1
                        ).padStart(
                          2,
                          "0"
                        )}
                      </span>

                    ))}

                </div>


                <pre className="tw-dev-code-content">

                  <code>
                    {apiSnippets[activeTab]}
                  </code>

                </pre>

              </div>


              {/* =================================================
                  CODE FOOTER
              ================================================= */}

              <div className="tw-dev-code-footer">

                <span>

                  <i></i>

                  API READY

                </span>


                <span>

                  {activeTab === "react"
                    ? "JavaScript SDK"
                    : "Python Webhook"}

                </span>

              </div>

            </div>


            {/* =================================================
                MINI STATS
            ================================================= */}

            <div className="tw-dev-mini-stats">

              <div>

                <span>
                  API RESPONSE
                </span>

                <strong>
                  128ms
                </strong>

                <small>
                  ↗ optimized
                </small>

              </div>


              <div>

                <span>
                  UPTIME
                </span>

                <strong>
                  99.98%
                </strong>

                <small>
                  stable
                </small>

              </div>


              <div>

                <span>
                  EVENTS
                </span>

                <strong>
                  24/7
                </strong>

                <small>
                  real-time
                </small>

              </div>

            </div>

          </div>

        </div>


        {/* ===================================================
            BOTTOM CTA
        =================================================== */}

        <div className="tw-dev-integration-footer">

          <div className="tw-dev-footer-line">
            <span></span>
          </div>


          <div className="tw-dev-footer-copy">

            <span>
              BUILD WITHOUT FRICTION
            </span>

            <strong>
              Your stack. Your workflow. TechWrap underneath.
            </strong>

          </div>


          {/* =================================================
              EXPLORE DOCUMENTATION
              REACT ROUTER NAVIGATION
          ================================================= */}

          <button
            type="button"
            className="tw-dev-doc-button"
            onClick={() => navigate("/pages/Documentation")}
          >

            Explore Documentation

            <span>
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
};


export default TechWrapDeveloperPage;

