import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import "./ProductGraph.css";


/* =========================
   USER DATA
========================= */

const userData = [
  { month: "Jan", users: 5000 },
  { month: "Feb", users: 9000 },
  { month: "Mar", users: 14000 },
  { month: "Apr", users: 19000 },
  { month: "May", users: 25000 },
  { month: "Jun", users: 30000 }
];


/* =========================
   API DATA
========================= */

const apiData = [
  { month: "Jan", requests: 400000 },
  { month: "Feb", requests: 700000 },
  { month: "Mar", requests: 900000 },
  { month: "Apr", requests: 1200000 },
  { month: "May", requests: 1600000 },
  { month: "Jun", requests: 2000000 }
];


/* =========================
   INTEGRATION DATA
========================= */

const integrationData = [
  {
    name: "Stripe",
    connections: 150
  },
  {
    name: "GitHub",
    connections: 120
  },
  {
    name: "Slack",
    connections: 95
  },
  {
    name: "AWS",
    connections: 80
  },
  {
    name: "OpenAI",
    connections: 130
  }
];


/* =========================
   DEPLOYMENT DATA
========================= */

const deploymentData = [
  {
    name: "Successful",
    value: 72
  },
  {
    name: "Failed",
    value: 8
  },
  {
    name: "In Progress",
    value: 12
  },
  {
    name: "Cancelled",
    value: 8
  }
];


const deploymentColors = [
  "#818cf8",
  "#f87171",
  "#fbbf24",
  "#64748b"
];


function ProductAnalytics() {

  return (

    <section className="analytics-section">

      {/* Background */}

      <div className="analytics-grid"></div>

      <div className="analytics-glow analytics-glow-one"></div>

      <div className="analytics-glow analytics-glow-two"></div>


      <div className="container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="analytics-heading">

          <span className="analytics-label">

            <span className="analytics-live-dot"></span>

            LIVE PRODUCT ANALYTICS

          </span>


          <h2>

            Understand your
            <span> product performance.</span>

          </h2>


          <p>

            Track users, API activity, integrations and
            deployments from one powerful dashboard.

          </p>

        </div>


        {/* =========================
            USER GROWTH
        ========================= */}

        <div className="chart-card user-growth-chart">

          <div className="chart-card-header">

            <div>

              <span className="chart-label">
                USER GROWTH
              </span>

              <h3>
                30,000
              </h3>

              <span className="growth-positive">
                ↑ 18.6% this month
              </span>

            </div>


            <div className="chart-badge">

              <span></span>

              Monthly Active Users

            </div>

          </div>


          <div className="chart-container">

            <ResponsiveContainer
              width="100%"
              height="100%"
            >

              <LineChart data={userData}>

                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="rgba(255,255,255,0.05)"
                  vertical={false}
                />

                <XAxis
                  dataKey="month"
                  stroke="#596176"
                  tickLine={false}
                  axisLine={false}
                />

                <YAxis
                  stroke="#596176"
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) =>
                    `${value / 1000}K`
                  }
                />

                <Tooltip
                  contentStyle={{
                    background: "#10152d",
                    border:
                      "1px solid rgba(129,140,248,.25)",
                    borderRadius: "10px",
                    color: "#fff"
                  }}
                />

                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#818cf8"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#818cf8"
                  }}
                  activeDot={{
                    r: 7
                  }}

                  animationDuration={2200}

                  animationEasing="ease-out"
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>


        {/* =========================
            SECOND ROW
        ========================= */}

        <div className="row g-4 mt-1">


          {/* API USAGE */}

          <div className="col-lg-7">

            <div className="chart-card small-chart-card">

              <div className="chart-card-header">

                <div>

                  <span className="chart-label">
                    API USAGE
                  </span>

                  <h3>
                    2.0M
                  </h3>

                  <span className="growth-positive">
                    ↑ 24.2%
                  </span>

                </div>

                <div className="chart-icon">
                  ↗
                </div>

              </div>


              <div className="small-chart">

                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >

                  <AreaChart data={apiData}>

                    <defs>

                      <linearGradient
                        id="apiGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >

                        <stop
                          offset="0%"
                          stopColor="#818cf8"
                          stopOpacity={0.35}
                        />

                        <stop
                          offset="100%"
                          stopColor="#818cf8"
                          stopOpacity={0}
                        />

                      </linearGradient>

                    </defs>


                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(255,255,255,0.04)"
                      vertical={false}
                    />


                    <XAxis
                      dataKey="month"
                      stroke="#596176"
                      tickLine={false}
                      axisLine={false}
                    />


                    <YAxis
                      stroke="#596176"
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) =>
                        `${value / 1000000}M`
                      }
                    />


                    <Tooltip
                      contentStyle={{
                        background: "#10152d",
                        border:
                          "1px solid rgba(129,140,248,.25)",
                        borderRadius: "10px"
                      }}
                    />


                    <Area
                      type="monotone"
                      dataKey="requests"
                      stroke="#a78bfa"
                      strokeWidth={3}
                      fill="url(#apiGradient)"
                      animationDuration={2000}
                    />

                  </AreaChart>

                </ResponsiveContainer>

              </div>

            </div>

          </div>


          {/* INTEGRATIONS */}

          <div className="col-lg-5">

            <div className="chart-card small-chart-card">

              <div className="chart-card-header">

                <div>

                  <span className="chart-label">
                    INTEGRATION ACTIVITY
                  </span>

                  <h3>
                    575
                  </h3>

                  <span className="chart-muted">
                    Active connections
                  </span>

                </div>

              </div>


              <div className="integration-bars">

                {integrationData.map(
                  (item, index) => (

                    <div
                      className="integration-row"
                      key={item.name}
                    >

                      <div className="integration-name">

                        <span>
                          {item.name}
                        </span>

                        <strong>
                          {item.connections}
                        </strong>

                      </div>


                      <div className="integration-track">

                        <div
                          className="integration-progress"
                          style={{
                            width:
                              `${(item.connections / 150) * 100}%`,
                            animationDelay:
                              `${index * 0.12}s`
                          }}
                        />

                      </div>

                    </div>

                  )
                )}

              </div>

            </div>

          </div>

        </div>


        {/* =========================
            DEPLOYMENT
        ========================= */}

        <div className="chart-card deployment-card">

          <div className="chart-card-header">

            <div>

              <span className="chart-label">
                DEPLOYMENT STATISTICS
              </span>

              <h3>
                3,240
              </h3>

              <span className="growth-positive">
                ↑ 12.4% deployments
              </span>

            </div>

          </div>


          <div className="deployment-content">


            <div className="donut-wrapper">

              <ResponsiveContainer
                width="100%"
                height="100%"
              >

                <PieChart>

                  <Pie
                    data={deploymentData}
                    dataKey="value"
                    nameKey="name"
                    innerRadius="68%"
                    outerRadius="88%"
                    paddingAngle={4}

                    animationDuration={1800}

                  >

                    {deploymentData.map(
                      (_, index) => (
                        <Cell
                          key={index}
                          fill={
                            deploymentColors[index]
                          }
                        />
                      )
                    ) as any}

                  </Pie>

                </PieChart>

              </ResponsiveContainer>


              <div className="donut-center">

                <strong>
                  72%
                </strong>

                <span>
                  Success
                </span>

              </div>

            </div>


            <div className="deployment-stats">

              {deploymentData.map(
                (item, index) => (

                  <div
                    className="deployment-stat"
                    key={item.name}
                  >

                    <div>

                      <span
                        className="stat-dot"
                        style={{
                          background:
                            deploymentColors[index]
                        }}
                      />

                      {item.name}

                    </div>

                    <strong>
                      {item.value}%
                    </strong>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}


export default ProductAnalytics;