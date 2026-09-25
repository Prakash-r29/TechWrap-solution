import { useAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function AdminDashboard() {
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
              TECHWRAP ADMIN
            </span>

            <h1>
              Admin Dashboard
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
              👥
            </span>

            <h3>
              Users
            </h3>

            <p>
              Manage TechWrap users.
            </p>
          </div>

          <div className="dashboard-card">
            <span className="dashboard-icon">
              📊
            </span>

            <h3>
              Analytics
            </h3>

            <p>
              View platform activity.
            </p>
          </div>

          <div className="dashboard-card">
            <span className="dashboard-icon">
              ⚙️
            </span>

            <h3>
              Settings
            </h3>

            <p>
              Manage platform settings.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AdminDashboard;