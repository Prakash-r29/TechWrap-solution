import { useState } from "react";
import "./techstack.css";

type CodeTab = "react" | "django";

function StackIntegration() {
  const [activeTab, setActiveTab] = useState<CodeTab>("react");
  const [copied, setCopied] = useState(false);

  const codeExamples = {
    react: `// React.js: Fetching TechWrap Analytics Data

import { useEffect, useState } from "react";

interface AnalyticsData {
  users: number;
  requests: number;
  revenue: number;
}

export function AnalyticsDashboard() {
  const [metrics, setMetrics] =
    useState<AnalyticsData | null>(null);

  useEffect(() => {
    fetch("https://api.techwrap.com/analytics")
      .then((response) => response.json())
      .then((data) => setMetrics(data))
      .catch((error) =>
        console.error("Data fetch failed", error)
      );
  }, []);

  return (
    <div className="dashboard-widget">
      {metrics ? (
        <div>
          <h3>Analytics</h3>
          <p>Users: {metrics.users}</p>
          <p>API Requests: {metrics.requests}</p>
          <p>Revenue: ₹{metrics.revenue}</p>
        </div>
      ) : (
        <p>Loading analytics...</p>
      )}
    </div>
  );
}`,

    django: `# Django Backend: TechWrap Analytics API

from django.http import JsonResponse
from django.views.decorators.http import require_GET

@require_GET
def analytics_summary(request):

    data = {
        "users": 12450,
        "requests": 1840000,
        "revenue": 485000,
    }

    return JsonResponse(data)


# urls.py

from django.urls import path
from .views import analytics_summary

urlpatterns = [
    path(
        "api/analytics/",
        analytics_summary,
        name="analytics-summary"
    ),
]`,
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab]);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1800);
  };

  return (
    <section className="stack-integration">
      <div className="stack-container">

        {/* LEFT CONTENT */}
        <div className="stack-info">

          <span className="stack-eyebrow">
            DEVELOPER EXPERIENCE
          </span>

          <h2>
            Seamless Stack
            <br />
            <strong>Integration</strong>
          </h2>

          <p>
            Connect your frontend, backend and APIs with
            clean, production-ready development workflows.
            Build applications faster without fighting your
            technology stack.
          </p>

          <div className="stack-features">

            <div className="stack-feature">
              <span>✓</span>
              <p>Type-safe REST APIs</p>
            </div>

            <div className="stack-feature">
              <span>✓</span>
              <p>Real-time data synchronization</p>
            </div>

            <div className="stack-feature">
              <span>✓</span>
              <p>Production-ready architecture</p>
            </div>

            <div className="stack-feature">
              <span>✓</span>
              <p>Easy frontend and backend integration</p>
            </div>

          </div>

          <div className="stack-tech-tags">
            <span>React</span>
            <span>TypeScript</span>
            <span>Django</span>
            <span>REST API</span>
          </div>

        </div>

        {/* CODE WINDOW */}
        <div className="code-window">

          {/* CODE HEADER */}
          <div className="code-header">

            <div className="code-tabs">

              <button
                className={
                  activeTab === "react"
                    ? "code-tab active"
                    : "code-tab"
                }
                onClick={() => {
                  setActiveTab("react");
                  setCopied(false);
                }}
              >
                React.js UI
              </button>

              <button
                className={
                  activeTab === "django"
                    ? "code-tab active"
                    : "code-tab"
                }
                onClick={() => {
                  setActiveTab("django");
                  setCopied(false);
                }}
              >
                Django Backend
              </button>

            </div>

            <button
              className="copy-button"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy"}
            </button>

          </div>

          {/* CODE BODY */}
          <div className="code-body">

            <div className="code-language">
              {activeTab === "react"
                ? "REACT / TYPESCRIPT"
                : "PYTHON / DJANGO"}
            </div>

            <pre key={activeTab}>
              <code>
                {codeExamples[activeTab]}
              </code>
            </pre>

          </div>

        </div>

      </div>
    </section>
  );
}

export default StackIntegration;