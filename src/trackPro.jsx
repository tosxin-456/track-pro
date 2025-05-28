import React, { useState } from "react";
import {
  User,
  Lock,
  Eye,
  EyeOff,
  Mail,
  Phone,
  MapPin,
  Shield,
  BarChart3,
  Users,
  Activity,
  AlertTriangle,
  TrendingUp,
  Calendar,
  FileText,
  Settings,
  LogOut,
  Bell,
  Search,
  Filter,
  Download,
  Plus,
  Heart,
  Truck,
  Building2,
  Globe,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const TrackProApp = () => {
  const [currentPage, setCurrentPage] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);

  // Dummy data for charts
  const healthTrendData = [
    { month: "Jan", healthy: 850, sick: 45, treated: 40 },
    { month: "Feb", healthy: 920, sick: 38, treated: 35 },
    { month: "Mar", healthy: 880, sick: 52, treated: 48 },
    { month: "Apr", healthy: 950, sick: 41, treated: 38 },
    { month: "May", healthy: 1020, sick: 35, treated: 32 },
    { month: "Jun", healthy: 1080, sick: 28, treated: 25 }
  ];

  const complianceData = [
    { region: "North", compliant: 85, nonCompliant: 15 },
    { region: "South", compliant: 92, nonCompliant: 8 },
    { region: "East", compliant: 78, nonCompliant: 22 },
    { region: "West", compliant: 88, nonCompliant: 12 },
    { region: "Central", compliant: 94, nonCompliant: 6 }
  ];

  const userRoleData = [
    { name: "Farmers", value: 1250, color: "#10B981" },
    { name: "Veterinarians", value: 85, color: "#3B82F6" },
    { name: "Abattoirs", value: 42, color: "#F59E0B" },
    { name: "Regulators", value: 18, color: "#EF4444" }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "outbreak",
      message: "Avian flu detected in North Region",
      time: "2 hours ago",
      severity: "high"
    },
    {
      id: 2,
      type: "compliance",
      message: "Farm ABC123 missed vaccination schedule",
      time: "4 hours ago",
      severity: "medium"
    },
    {
      id: 3,
      type: "system",
      message: "New batch of animals registered",
      time: "6 hours ago",
      severity: "low"
    },
    {
      id: 4,
      type: "health",
      message: "Unusual mortality rate in South Region",
      time: "8 hours ago",
      severity: "high"
    }
  ];

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({ role: "admin", name: "Admin User" });
    setCurrentPage("dashboard");
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setUser({ role: "admin", name: "New Admin" });
    setCurrentPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentPage("login");
  };

  // Login Page
  const LoginPage = () => (
    <div className="min-h-screen font-mont bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TrackPro</h1>
          <p className="text-gray-600">Animal Health Tracking System</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="admin@trackpro.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-green-600 hover:text-green-500">
              Forgot password?
            </a>
          </div>

          <button
            onClick={handleLogin}
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
          >
            Sign In
          </button>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => setCurrentPage("signup")}
              className="text-green-600 hover:text-green-500 font-semibold"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  // Signup Page
  const SignupPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Join TrackPro
          </h1>
          <p className="text-gray-600">Create your admin account</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="+234 xxx xxx xxxx"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Ministry of Agriculture"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Create a strong password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                required
              />
              <span className="ml-2 text-sm text-gray-600">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setCurrentPage("login")}
              className="text-green-600 hover:text-green-500 font-semibold"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );

  // Sidebar Component
  const Sidebar = ({ activePage, setActivePage }) => {
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
      <div className="bg-gray-900 text-white w-64 min-h-screen p-4">
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
                onClick={() => setActivePage(item.id)}
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

  // Header Component
  const Header = () => (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Admin Dashboard
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          <button className="relative p-2 text-gray-400 hover:text-gray-600">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-700 font-medium">{user?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Dashboard Overview
  const DashboardOverview = () => (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Animals</p>
              <p className="text-3xl font-bold text-gray-900">12,459</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Farms</p>
              <p className="text-3xl font-bold text-gray-900">847</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <TrendingUp className="w-4 h-4 mr-1" />
                +8% from last month
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Health Alerts</p>
              <p className="text-3xl font-bold text-gray-900">23</p>
              <p className="text-sm text-red-600 flex items-center mt-1">
                <AlertTriangle className="w-4 h-4 mr-1" />
                +5 new today
              </p>
            </div>
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Compliance Rate
              </p>
              <p className="text-3xl font-bold text-gray-900">94%</p>
              <p className="text-sm text-green-600 flex items-center mt-1">
                <CheckCircle className="w-4 h-4 mr-1" />
                Above target
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Animal Health Trends
            </h3>
            <button className="text-green-600 hover:text-green-700 flex items-center text-sm font-medium">
              <Download className="w-4 h-4 mr-1" />
              Export
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={healthTrendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="healthy"
                stroke="#10B981"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="sick"
                stroke="#EF4444"
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="treated"
                stroke="#3B82F6"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Regional Compliance
            </h3>
            <button className="text-green-600 hover:text-green-700 flex items-center text-sm font-medium">
              <Filter className="w-4 h-4 mr-1" />
              Filter
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={complianceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="region" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="compliant" fill="#10B981" />
              <Bar dataKey="nonCompliant" fill="#EF4444" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity & User Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Recent Alerts
            </h3>
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentAlerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div
                  className={`w-3 h-3 rounded-full mr-4 ${
                    alert.severity === "high"
                      ? "bg-red-500"
                      : alert.severity === "medium"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {alert.message}
                  </p>
                  <p className="text-xs text-gray-500">{alert.time}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Clock className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            User Distribution
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={userRoleData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {userRoleData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {userRoleData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div
                    className={`w-3 h-3 rounded-full mr-2`}
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Simple placeholder pages for other sections
  const PlaceholderPage = ({ title, description }) => (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-6">{description}</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200 font-semibold flex items-center mx-auto">
          <Plus className="w-5 h-5 mr-2" />
          Get Started
        </button>
      </div>
    </div>
  );

  // Main Dashboard Layout
  const Dashboard = () => {
    const [activePage, setActivePage] = useState("dashboard");

    const renderContent = () => {
      switch (activePage) {
        case "dashboard":
          return <DashboardOverview />;
        case "users":
          return (
            <PlaceholderPage
              title="User Management"
              description="Manage farmers, veterinarians, and other system users"
            />
          );
        case "animals":
          return (
            <PlaceholderPage
              title="Animal Tracking"
              description="Track and manage individual animal profiles and health records"
            />
          );
        case "health":
          return (
            <PlaceholderPage
              title="Health Monitoring"
              description="Monitor disease surveillance and health trends across regions"
            />
          );
        case "compliance":
          return (
            <PlaceholderPage
              title="Compliance Management"
              description="Track regulatory compliance and generate audit reports"
            />
          );
        case "reports":
          return (
            <PlaceholderPage
              title="Reports & Analytics"
              description="Generate detailed reports and insights"
            />
          );
        case "alerts":
          return (
            <PlaceholderPage
              title="Alert Management"
              description="Manage system alerts and notifications"
            />
          );
        case "traceability":
          return (
            <PlaceholderPage
              title="Traceability Chain"
              description="Track animals from farm to fork with QR codes"
            />
          );
        case "settings":
          return (
            <PlaceholderPage
              title="System Settings"
              description="Configure system preferences and user permissions"
            />
          );
        default:
          return <DashboardOverview />;
      }
    };

    return (
      <div className="flex font-mont h-screen bg-gray-50">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto">{renderContent()}</main>
        </div>
      </div>
    );
  };

  // Main App Render
  if (user) {
    return <Dashboard />;
  }

  return currentPage === "login" ? <LoginPage /> : <SignupPage />;
};

export default TrackProApp;
