// DashboardOverview.jsx
import React, { useState } from "react";
import {
  TrendingUp,
  Heart,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Shield,
  Download,
  Filter,
  Clock
} from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const DashboardOverview = () => {
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

  return (
    <div className="p-6 space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Animals */}
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

        {/* Active Farms */}
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

        {/* Health Alerts */}
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

        {/* Compliance Rate */}
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
        {/* Animal Health Trends */}
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

        {/* Regional Compliance */}
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

      {/* Alerts & User Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Alerts */}
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

        {/* User Distribution */}
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
                    className="w-3 h-3 rounded-full mr-2"
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
};

export default DashboardOverview;
