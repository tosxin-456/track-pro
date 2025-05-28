import React from "react";
import {
  BarChart3,
  Users,
  Heart,
  Activity,
  Shield,
  FileText,
  AlertTriangle,
  Truck,
  Settings,
  LogOut
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract active page from the current pathname
  // Assuming routes like /dashboard, /users, etc.
  const activePage = location.pathname.slice(1); // remove leading '/'

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: BarChart3 },
    { id: "users", label: "User Management", icon: Users },
    { id: "animals", label: "Animal Tracking", icon: Heart },
    { id: "health", label: "Health Monitoring", icon: Activity },
    { id: "compliance", label: "Compliance", icon: Shield },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "alerts", label: "Alerts", icon: AlertTriangle },
    { id: "traceability", label: "Traceability", icon: Truck },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <div className="bg-gray-900 text-white w-64 min-h-screen p-4 relative">
      <div className="flex items-center mb-8">
        <Heart className="w-8 h-8 text-green-400 mr-3" />
        <h1 className="text-xl font-bold">TrackPro Admin</h1>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
              className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                activePage === item.id
                  ? "bg-green-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <button
          onClick={handleLogout}
          className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
