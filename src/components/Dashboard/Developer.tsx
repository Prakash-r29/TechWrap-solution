import { useAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function DeveloperDashboard() {
  const {
    currentUser,
    logout,
  } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <section className="dashboard-page">

      <div className="dashboard-container">

        <div className="dashboard-header">

          <div>

            <span className="dashboard-eyebrow">
              TECHWRAP DEVELOPER
            </span>

            <h1>
              Developer Dashboard
            </h1>

            <p>
              Welcome{" "}
              {currentUser?.displayName}
              .
            </p>

          </div>

          <button
            className="dashboard-logout"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <span className="dashboard-icon">
              ⚛️
            </span>

            <h3>
              Frontend
            </h3>

            <p>
              React · TypeScript · Bootstrap
            </p>
          </div>

          <div className="dashboard-card">
            <span className="dashboard-icon">
              ☕
            </span>

            <h3>
              Backend
            </h3>

            <p>
              Java · Spring Boot · Node.js
            </p>
          </div>

          <div className="dashboard-card">
            <span className="dashboard-icon">
              ☁️
            </span>

            <h3>
              Cloud & DevOps
            </h3>

            <p>
              Firebase · Docker · CI/CD
            </p>
          </div>

          <div className="dashboard-card">
            <span className="dashboard-icon">
              🤖
            </span>

            <h3>
              AI & Automation
            </h3>

            <p>
              AI APIs · LLMs · Agents
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default DeveloperDashboard;