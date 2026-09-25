
import React, { useEffect, useMemo, useState } from "react";
import { useAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";

import {
  collection,
  doc,
  onSnapshot,
  Timestamp,
} from "firebase/firestore";

import { db } from "../../Firebase/Firebase";

import "./userdashboard.css";

/* =========================================================
   TYPES
========================================================= */

interface Project {
  id: string;
  name: string;
  type: string;
  progress: number;
  status: "In Progress" | "Review" | "Completed";
  icon: string;
  createdAt?: Timestamp | null;
}

interface Activity {
  id: string;
  title: string;
  description: string;
  icon: string;
  createdAt?: Timestamp | null;
}

interface UserData {
  name?: string;
  email?: string;
  aiCredits?: number;
  plan?: string;
}

interface RequestData {
  id: string;
  status?: string;
  createdAt?: Timestamp | null;
}

/* =========================================================
   HELPERS
========================================================= */

const getTimestampDate = (
  timestamp?: Timestamp | null
): Date | null => {
  if (!timestamp) return null;

  try {
    return timestamp.toDate();
  } catch {
    return null;
  }
};

const formatRelativeTime = (
  timestamp?: Timestamp | null
): string => {
  const date = getTimestampDate(timestamp);

  if (!date) return "Recently";

  const now = new Date();
  const difference = now.getTime() - date.getTime();

  const seconds = Math.floor(difference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 30) return "Just now";
  if (minutes < 1) return `${seconds}s ago`;
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;

  return date.toLocaleDateString();
};

const getDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/* =========================================================
   CHART HELPERS
========================================================= */

const buildChartPoints = (
  values: number[],
  width = 700,
  height = 220
) => {
  if (values.length === 0) {
    return [];
  }

  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);

  const range = max - min || 1;

  return values.map((value, index) => {
    const x =
      values.length === 1
        ? width / 2
        : (index / (values.length - 1)) * width;

    const y =
      height -
      ((value - min) / range) * (height - 25) -
      10;

    return {
      x,
      y,
      value,
    };
  });
};

const buildPath = (
  points: { x: number; y: number }[]
): string => {
  if (!points.length) return "";

  return points
    .map(
      (point, index) =>
        `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`
    )
    .join(" ");
};

/* =========================================================
   COMPONENT
========================================================= */

const Dashboard: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  /* =======================================================
     STATE
  ======================================================= */

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const [timeRange, setTimeRange] =
    useState("7D");

  const [userData, setUserData] =
    useState<UserData | null>(null);

  const [projects, setProjects] =
    useState<Project[]>([]);

  const [activities, setActivities] =
    useState<Activity[]>([]);

  const [requests, setRequests] =
    useState<RequestData[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  /* =======================================================
     FIRESTORE REAL-TIME LISTENERS
  ======================================================= */

  useEffect(() => {
    if (!currentUser) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    const uid = currentUser.uid;

    /* -------------------------------------------------------
       USER DOCUMENT
    ------------------------------------------------------- */

    const userRef = doc(db, "users", uid);

    const unsubscribeUser = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setUserData(
            snapshot.data() as UserData
          );
        } else {
          setUserData({
            name:
              currentUser.displayName ||
              currentUser.email?.split("@")[0] ||
              "User",

            email:
              currentUser.email || "",

            aiCredits: 0,
            plan: "Free",
          });
        }

        setLoading(false);
      },
      (err) => {
        console.error(
          "User listener error:",
          err
        );

        setError(
          "Unable to load your account information."
        );

        setLoading(false);
      }
    );

    /* -------------------------------------------------------
       PROJECTS
    ------------------------------------------------------- */

    const projectsRef = collection(
      db,
      "users",
      uid,
      "projects"
    );

    const unsubscribeProjects = onSnapshot(
      projectsRef,
      (snapshot) => {
        const projectData: Project[] =
          snapshot.docs.map((item) => {
            const data = item.data();

            return {
              id: item.id,

              name:
                data.name ||
                "Untitled Project",

              type:
                data.type ||
                "Project",

              progress:
                typeof data.progress === "number"
                  ? Math.min(
                      100,
                      Math.max(0, data.progress)
                    )
                  : 0,

              status:
                data.status === "Completed" ||
                data.status === "Review"
                  ? data.status
                  : "In Progress",

              icon:
                data.icon ||
                "🚀",

              createdAt:
                data.createdAt || null,
            };
          });

        projectData.sort((a, b) => {
          const aTime =
            a.createdAt?.toMillis?.() || 0;

          const bTime =
            b.createdAt?.toMillis?.() || 0;

          return bTime - aTime;
        });

        setProjects(projectData);
      },
      (err) => {
        console.error(
          "Projects listener error:",
          err
        );

        setError(
          "Unable to load your projects."
        );
      }
    );

    /* -------------------------------------------------------
       ACTIVITIES
    ------------------------------------------------------- */

    const activityRef = collection(
      db,
      "users",
      uid,
      "activities"
    );

    const unsubscribeActivities = onSnapshot(
      activityRef,
      (snapshot) => {
        const activityData: Activity[] =
          snapshot.docs.map((item) => {
            const data = item.data();

            return {
              id: item.id,

              title:
                data.title ||
                "Activity",

              description:
                data.description ||
                "",

              icon:
                data.icon ||
                "⚡",

              createdAt:
                data.createdAt || null,
            };
          });

        activityData.sort((a, b) => {
          const aTime =
            a.createdAt?.toMillis?.() || 0;

          const bTime =
            b.createdAt?.toMillis?.() || 0;

          return bTime - aTime;
        });

        setActivities(activityData);
      },
      (err) => {
        console.error(
          "Activity listener error:",
          err
        );

        setError(
          "Unable to load recent activity."
        );
      }
    );

    /* -------------------------------------------------------
       SERVICE REQUESTS
    ------------------------------------------------------- */

    const requestsRef = collection(
      db,
      "users",
      uid,
      "requests"
    );

    const unsubscribeRequests = onSnapshot(
      requestsRef,
      (snapshot) => {
        const requestData: RequestData[] =
          snapshot.docs.map((item) => {
            const data = item.data();

            return {
              id: item.id,

              status:
                data.status ||
                "Pending",

              createdAt:
                data.createdAt || null,
            };
          });

        setRequests(requestData);
      },
      (err) => {
        console.error(
          "Requests listener error:",
          err
        );

        setError(
          "Unable to load service requests."
        );
      }
    );

    /* -------------------------------------------------------
       CLEANUP
    ------------------------------------------------------- */

    return () => {
      unsubscribeUser();
      unsubscribeProjects();
      unsubscribeActivities();
      unsubscribeRequests();
    };
  }, [currentUser]);

  /* =======================================================
     USER INFORMATION
  ======================================================= */

  const userName =
    userData?.name ||
    currentUser?.displayName ||
    currentUser?.email?.split("@")[0] ||
    "User";

  const userEmail =
    userData?.email ||
    currentUser?.email ||
    "No email available";

  const userInitial =
    userName.charAt(0).toUpperCase();

  const userPlan =
    userData?.plan || "Free";

  const aiCredits =
    typeof userData?.aiCredits === "number"
      ? userData.aiCredits
      : 0;

  /* =======================================================
     DASHBOARD COUNTS
  ======================================================= */

  const activeProjects = projects.filter(
    (project) =>
      project.status !== "Completed"
  ).length;

  const completedProjects = projects.filter(
    (project) =>
      project.status === "Completed"
  ).length;

  const serviceRequests = requests.length;

  /* =======================================================
     CHART DATA
  ======================================================= */

  const chartData = useMemo(() => {
    const days =
      timeRange === "7D"
        ? 7
        : timeRange === "30D"
        ? 30
        : 90;

    const today = new Date();

    const dateMap: Record<string, number> =
      {};

    for (let i = days - 1; i >= 0; i--) {
      const date = new Date(today);

      date.setHours(0, 0, 0, 0);
      date.setDate(
        today.getDate() - i
      );

      dateMap[getDateKey(date)] = 0;
    }

    activities.forEach((activity) => {
      const date =
        getTimestampDate(
          activity.createdAt
        );

      if (!date) return;

      const key = getDateKey(date);

      if (
        Object.prototype.hasOwnProperty.call(
          dateMap,
          key
        )
      ) {
        dateMap[key] += 1;
      }
    });

    const values = Object.values(dateMap);

    return values.length
      ? values
      : [0];
  }, [activities, timeRange]);

  const chartPoints = useMemo(
    () =>
      buildChartPoints(
        chartData,
        700,
        220
      ),
    [chartData]
  );

  const chartPath = useMemo(
    () => buildPath(chartPoints),
    [chartPoints]
  );

  const chartAreaPath = useMemo(() => {
    if (!chartPoints.length) return "";

    const first =
      chartPoints[0];

    const last =
      chartPoints[
        chartPoints.length - 1
      ];

    return `
      ${chartPath}
      L ${last.x} 220
      L ${first.x} 220
      Z
    `;
  }, [chartPath, chartPoints]);

  const totalActivity =
    chartData.reduce(
      (sum, value) => sum + value,
      0
    );

  /* =======================================================
     LOGOUT
  ======================================================= */

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.error(
        "Logout error:",
        err
      );
    }
  };

  /* =======================================================
     MENU
  ======================================================= */

  const handleMenuClick = (
    menu: string
  ) => {
    setActiveMenu(menu);
    setSidebarOpen(false);
  };

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return (
      <main className="dashboard-page">
        <div className="dashboard-loading">
          <div className="loading-spinner"></div>

          <p>
            Loading your TechWrap dashboard...
          </p>
        </div>
      </main>
    );
  }

  /* =======================================================
     RENDER
  ======================================================= */

  return (
    <main className="dashboard-page">

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="dashboard-grid"></div>

      <div className="dashboard-orb dashboard-orb-one"></div>
      <div className="dashboard-orb dashboard-orb-two"></div>

      {/* ===================================================
          MOBILE OVERLAY
      =================================================== */}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* ===================================================
          SIDEBAR
      =================================================== */}

      <aside
        className={`dashboard-sidebar ${
          sidebarOpen
            ? "sidebar-open"
            : ""
        }`}
      >

        <div className="sidebar-logo">
          <div className="logo-mark">
            T
          </div>

          <div>
            <strong>
              Tech<span>Wrap</span>
            </strong>

            <small>
              DIGITAL PLATFORM
            </small>
          </div>
        </div>

        {/* MAIN */}

        <div className="sidebar-section">
          <p className="sidebar-label">
            MAIN
          </p>

          <button
            className={`sidebar-item ${
              activeMenu === "Dashboard"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Dashboard"
              )
            }
          >
            <span>⌂</span>
            <strong>Dashboard</strong>
          </button>
        </div>

        {/* WORKSPACE */}

        <div className="sidebar-section">
          <p className="sidebar-label">
            WORKSPACE
          </p>

          <button
            className={`sidebar-item ${
              activeMenu === "My Projects"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "My Projects"
              )
            }
          >
            <span>▦</span>
            <strong>My Projects</strong>

            <em>
              {projects.length}
            </em>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "New Project"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "New Project"
              )
            }
          >
            <span>＋</span>
            <strong>New Project</strong>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "Requests"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Requests"
              )
            }
          >
            <span>◇</span>
            <strong>Requests</strong>

            <em>
              {serviceRequests}
            </em>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "Messages"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Messages"
              )
            }
          >
            <span>✉</span>
            <strong>Messages</strong>
          </button>
        </div>

        {/* AI */}

        <div className="sidebar-section">
          <p className="sidebar-label">
            AI & PRODUCTS
          </p>

          <button
            className={`sidebar-item ${
              activeMenu === "TechWrap AI"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "TechWrap AI"
              )
            }
          >
            <span>✦</span>
            <strong>TechWrap AI</strong>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "AI Tools"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "AI Tools"
              )
            }
          >
            <span>✧</span>
            <strong>AI Tools</strong>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "Integrations"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Integrations"
              )
            }
          >
            <span>⊞</span>
            <strong>Integrations</strong>
          </button>
        </div>

        {/* ANALYTICS */}

        <div className="sidebar-section">
          <p className="sidebar-label">
            ANALYTICS
          </p>

          <button
            className={`sidebar-item ${
              activeMenu === "Analytics"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Analytics"
              )
            }
          >
            <span>⌁</span>
            <strong>Analytics</strong>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "Billing"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Billing"
              )
            }
          >
            <span>◈</span>
            <strong>Billing</strong>
          </button>
        </div>

        {/* RESOURCES */}

        <div className="sidebar-section">
          <p className="sidebar-label">
            RESOURCES
          </p>

          <button
            className={`sidebar-item ${
              activeMenu === "Documentation"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Documentation"
              )
            }
          >
            <span>▤</span>
            <strong>
              Documentation
            </strong>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "Favorites"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Favorites"
              )
            }
          >
            <span>☆</span>
            <strong>Favorites</strong>
          </button>

          <button
            className={`sidebar-item ${
              activeMenu === "Support"
                ? "active"
                : ""
            }`}
            onClick={() =>
              handleMenuClick(
                "Support"
              )
            }
          >
            <span>?</span>
            <strong>Support</strong>
          </button>
        </div>

        {/* SIDEBAR BOTTOM */}

        <div className="sidebar-bottom">

          <button
            className="sidebar-item"
            onClick={() =>
              handleMenuClick(
                "Notifications"
              )
            }
          >
            <span>♢</span>
            <strong>
              Notifications
            </strong>

            {activities.length > 0 && (
              <em>
                {Math.min(
                  activities.length,
                  99
                )}
              </em>
            )}
          </button>

          <button
            className="sidebar-item"
            onClick={() =>
              handleMenuClick(
                "Profile"
              )
            }
          >
            <span>◎</span>
            <strong>Profile</strong>
          </button>

          <button
            className="sidebar-item"
            onClick={() =>
              handleMenuClick(
                "Settings"
              )
            }
          >
            <span>⚙</span>
            <strong>Settings</strong>
          </button>

          <button
            className="sidebar-item logout-item"
            onClick={handleLogout}
          >
            <span>↪</span>
            <strong>Logout</strong>
          </button>

        </div>
      </aside>

      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <section className="dashboard-main">

        {/* TOPBAR */}

        <header className="dashboard-topbar">

          <button
            className="mobile-menu-btn"
            onClick={() =>
              setSidebarOpen(
                !sidebarOpen
              )
            }
          >
            ☰
          </button>

          <div className="topbar-title">
            <span>
              {activeMenu}
            </span>
          </div>

          <div className="topbar-right">

            <button
              className="topbar-icon"
              onClick={() =>
                handleMenuClick(
                  "Notifications"
                )
              }
            >
              ♢

              {activities.length > 0 && (
                <i></i>
              )}
            </button>

            <div
              className="topbar-user"
              title={userEmail}
            >

              <div className="user-avatar">
                {userInitial}
              </div>

              <div className="user-info">
                <strong>
                  {userName}
                </strong>

                <small>
                  {userPlan} Plan
                </small>
              </div>

            </div>

          </div>
        </header>

        {/* CONTENT */}

        <div className="dashboard-content">

          {/* ERROR */}

          {error && (
            <div className="dashboard-error">
              ⚠ {error}
            </div>
          )}

          {/* HERO */}

          <section className="dashboard-hero">

            <div className="hero-content">

              <div className="system-status">
                <span></span>
                All systems operational
              </div>

              <h1>
                Welcome back,{" "}
                <span>
                  {userName}
                </span>
              </h1>

              <p>
                Here's what's happening
                across your TechWrap
                workspace today.
              </p>

              <div className="hero-actions">

                <button
                  className="btn-primary"
                  onClick={() =>
                    handleMenuClick(
                      "Analytics"
                    )
                  }
                >
                  View Reports
                  <span>→</span>
                </button>

                <button
                  className="btn-secondary"
                  onClick={() =>
                    handleMenuClick(
                      "New Project"
                    )
                  }
                >
                  + Start New Project
                </button>

              </div>

            </div>

            <div className="hero-decoration">
              <div className="hero-ring ring-one"></div>
              <div className="hero-ring ring-two"></div>
              <div className="hero-core">
                ✦
              </div>
            </div>

          </section>

          {/* STATS */}

          <section className="stats-grid">

            <div className="stat-card">

              <div className="stat-top">
                <div className="stat-icon">
                  ◈
                </div>

                <span className="stat-growth">
                  Live
                </span>
              </div>

              <p>Active Projects</p>

              <h2>
                {String(
                  activeProjects
                ).padStart(2, "0")}
              </h2>

              <small>
                Currently in progress
              </small>

            </div>

            <div className="stat-card">

              <div className="stat-top">
                <div className="stat-icon">
                  ◇
                </div>

                <span className="stat-growth">
                  Live
                </span>
              </div>

              <p>Service Requests</p>

              <h2>
                {String(
                  serviceRequests
                ).padStart(2, "0")}
              </h2>

              <small>
                Total requests
              </small>

            </div>

            <div className="stat-card">

              <div className="stat-top">
                <div className="stat-icon">
                  ✓
                </div>

                <span className="stat-growth">
                  Live
                </span>
              </div>

              <p>
                Completed Projects
              </p>

              <h2>
                {String(
                  completedProjects
                ).padStart(2, "0")}
              </h2>

              <small>
                Successfully delivered
              </small>

            </div>

            <div className="stat-card">

              <div className="stat-top">
                <div className="stat-icon">
                  ✦
                </div>

                <span className="stat-growth">
                  AI
                </span>
              </div>

              <p>AI Credits</p>

              <h2>
                {aiCredits.toLocaleString()}
              </h2>

              <small>
                Available credits
              </small>

            </div>

          </section>

          {/* ANALYTICS + ACTIVITY */}

          <section className="dashboard-two-column">

            {/* ANALYTICS */}

            <div className="dashboard-card analytics-card">

              <div className="card-header">

                <div>
                  <span className="card-eyebrow">
                    PERFORMANCE
                  </span>

                  <h3>
                    Activity Overview
                  </h3>
                </div>

                <div className="range-buttons">

                  {[
                    "7D",
                    "30D",
                    "90D",
                  ].map((range) => (
                    <button
                      key={range}
                      className={
                        timeRange === range
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setTimeRange(
                          range
                        )
                      }
                    >
                      {range}
                    </button>
                  ))}

                </div>

              </div>

              <div className="analytics-summary">

                <div>
                  <strong>
                    {totalActivity.toLocaleString()}
                  </strong>

                  <span>
                    Total Activity
                  </span>
                </div>

                <div>
                  <strong>
                    {activities.length}
                  </strong>

                  <span>
                    All-time Events
                  </span>
                </div>

              </div>

              <div className="chart-wrapper">

                {totalActivity === 0 ? (
                  <div className="chart-empty">
                    <span>⌁</span>
                    <p>
                      No activity recorded
                      for this period yet.
                    </p>
                  </div>
                ) : (
                  <svg
                    viewBox="0 0 700 220"
                    preserveAspectRatio="none"
                    className="activity-chart"
                  >

                    <defs>
                      <linearGradient
                        id="chartGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#5b8cff"
                          stopOpacity="0.32"
                        />

                        <stop
                          offset="100%"
                          stopColor="#8b5cf6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d={chartAreaPath}
                      fill="url(#chartGradient)"
                    />

                    <path
                      d={chartPath}
                      fill="none"
                      stroke="#6d8fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {chartPoints.map(
                      (point, index) => (
                        <circle
                          key={index}
                          cx={point.x}
                          cy={point.y}
                          r="4"
                          fill="#ffffff"
                          stroke="#6d8fff"
                          strokeWidth="2"
                        />
                      )
                    )}

                  </svg>
                )}

              </div>

            </div>

            {/* RECENT ACTIVITY */}

            <div className="dashboard-card activity-card">

              <div className="card-header">

                <div>
                  <span className="card-eyebrow">
                    TIMELINE
                  </span>

                  <h3>
                    Recent Activity
                  </h3>
                </div>

                <button
                  className="view-all-btn"
                  onClick={() =>
                    handleMenuClick(
                      "Notifications"
                    )
                  }
                >
                  View all →
                </button>

              </div>

              <div className="activity-list">

                {activities.length === 0 ? (
                  <div className="empty-state">
                    <div>
                      ✦
                    </div>

                    <p>
                      No recent activity
                    </p>

                    <span>
                      Your latest activities
                      will appear here.
                    </span>
                  </div>
                ) : (
                  activities
                    .slice(0, 5)
                    .map((item) => (
                      <div
                        className="activity-item"
                        key={item.id}
                      >

                        <div className="activity-icon">
                          {item.icon}
                        </div>

                        <div className="activity-content">
                          <strong>
                            {item.title}
                          </strong>

                          <p>
                            {item.description}
                          </p>

                          <small>
                            {formatRelativeTime(
                              item.createdAt
                            )}
                          </small>
                        </div>

                      </div>
                    ))
                )}

              </div>

            </div>

          </section>

          {/* PROJECTS */}

          <section className="dashboard-card projects-card">

            <div className="card-header">

              <div>
                <span className="card-eyebrow">
                  WORKSPACE
                </span>

                <h3>
                  Your Projects
                </h3>
              </div>

              <button
                className="view-all-btn"
                onClick={() =>
                  handleMenuClick(
                    "My Projects"
                  )
                }
              >
                View all →
              </button>

            </div>

            <div className="projects-list">

              {projects.length === 0 ? (
                <div className="empty-projects">
                  <div>
                    🚀
                  </div>

                  <h4>
                    No projects yet
                  </h4>

                  <p>
                    Start your first TechWrap
                    project to see it here.
                  </p>

                  <button
                    className="btn-primary"
                    onClick={() =>
                      handleMenuClick(
                        "New Project"
                      )
                    }
                  >
                    Create Project →
                  </button>
                </div>
              ) : (
                projects
                  .slice(0, 4)
                  .map((project) => (
                    <div
                      className="project-row"
                      key={project.id}
                    >

                      <div className="project-main">

                        <div className="project-icon">
                          {project.icon}
                        </div>

                        <div>
                          <strong>
                            {project.name}
                          </strong>

                          <span>
                            {project.type}
                          </span>
                        </div>

                      </div>

                      <div className="project-progress">

                        <div className="progress-label">
                          <span>
                            Progress
                          </span>

                          <strong>
                            {project.progress}%
                          </strong>
                        </div>

                        <div className="progress-bar">
                          <div
                            style={{
                              width: `${project.progress}%`,
                            }}
                          ></div>
                        </div>

                      </div>

                      <div
                        className={`project-status status-${project.status
                          .toLowerCase()
                          .replace(
                            " ",
                            "-"
                          )}`}
                      >
                        {project.status}
                      </div>

                    </div>
                  ))
              )}

            </div>

          </section>

          {/* QUICK ACTIONS */}

          <section className="quick-actions-section">

            <div className="section-heading">
              <span>
                SHORTCUTS
              </span>

              <h3>
                Quick Actions
              </h3>
            </div>

            <div className="quick-actions-grid">

              <button
                className="quick-action"
                onClick={() =>
                  handleMenuClick(
                    "New Project"
                  )
                }
              >
                <div>＋</div>

                <strong>
                  New Project
                </strong>

                <span>
                  Start something new →
                </span>
              </button>

              <button
                className="quick-action"
                onClick={() =>
                  handleMenuClick(
                    "TechWrap AI"
                  )
                }
              >
                <div>✦</div>

                <strong>
                  TechWrap AI
                </strong>

                <span>
                  Explore AI tools →
                </span>
              </button>

              <button
                className="quick-action"
                onClick={() =>
                  handleMenuClick(
                    "Documentation"
                  )
                }
              >
                <div>▤</div>

                <strong>
                  Documentation
                </strong>

                <span>
                  Learn & build →
                </span>
              </button>

              <button
                className="quick-action"
                onClick={() =>
                  handleMenuClick(
                    "Support"
                  )
                }
              >
                <div>?</div>

                <strong>
                  Get Support
                </strong>

                <span>
                  We're here to help →
                </span>
              </button>

            </div>

          </section>

          {/* AI BANNER */}

          <section className="ai-banner">

            <div className="ai-banner-glow"></div>

            <div className="ai-banner-icon">
              ✦
            </div>

            <div className="ai-banner-content">

              <span>
                POWERED BY TECHWRAP AI
              </span>

              <h3>
                Build smarter with AI.
              </h3>

              <p>
                Automate workflows, generate
                content, analyze data and
                accelerate your projects.
              </p>

            </div>

            <button
              className="ai-banner-btn"
              onClick={() =>
                handleMenuClick(
                  "TechWrap AI"
                )
              }
            >
              Explore TechWrap AI
              <span>→</span>
            </button>

          </section>

        </div>

        {/* FOOTER */}

        <footer className="dashboard-footer">

          <span>
            © 2026 TechWrap. All rights
            reserved.
          </span>

          <div>
            <button>
              Privacy
            </button>

            <button>
              Terms
            </button>

            <button>
              Security
            </button>
          </div>

        </footer>

      </section>

    </main>
  );
};

export default Dashboard;

