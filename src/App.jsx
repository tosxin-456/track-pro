import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import DashboardLayout from "./components/dashboard";
import PlaceholderPage from "./components/placeholder";
import DashboardOverview from "./pages/dashboard";
import UserManagement from "./pages/user management";
import AnimalTracking from "./pages/tracking";
import HealthMonitoringDashboard from "./pages/monitor";
import ComplianceManagement from "./pages/compliance";
import ReportsAnalytics from "./pages/reports and analytics";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected Routes */}
        {user ? (
          <Route path="/*" element={<DashboardLayout />}>
            {/* Redirect default to dashboard overview */}
            <Route index element={<Navigate to="dashboard" replace />} />

            {/* Dashboard Overview */}
            <Route path="dashboard" element={<DashboardOverview />} />

            {/* Placeholder Routes */}
            <Route path="users" element={<UserManagement />} />
            <Route path="animals" element={<AnimalTracking />} />
            <Route
              path="health"
              element={
                <HealthMonitoringDashboard/>
              }
            />
            <Route
              path="compliance"
              element={
                <ComplianceManagement />
              }
            />
            <Route
              path="reports"
              element={
                <ReportsAnalytics/>
              }
            />
            <Route
              path="alerts"
              element={
                <PlaceholderPage
                  title="Alert Management"
                  description="Manage system alerts and notifications"
                />
              }
            />
            <Route
              path="traceability"
              element={
                <PlaceholderPage
                  title="Traceability Chain"
                  description="Track animals from farm to fork with QR codes"
                />
              }
            />
            <Route
              path="settings"
              element={
                <PlaceholderPage
                  title="System Settings"
                  description="Configure system preferences and user permissions"
                />
              }
            />
          </Route>
        ) : (
          <Route path="/*" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
