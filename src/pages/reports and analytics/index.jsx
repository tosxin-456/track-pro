import React, { useState } from "react";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Download,
  Filter,
  Calendar,
  Eye,
  FileText,
  Share2,
  Settings,
  Clock,
  Users,
  DollarSign,
  Activity,
  Target,
  Zap,
  RefreshCw,
  ChevronDown,
  Search
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
  PieChart as RechartsPieChart,
  Cell,
  AreaChart,
  Area
} from "recharts";

const ReportsAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy data for charts
  const performanceData = [
    { month: "Jan", revenue: 45000, customers: 120, orders: 450 },
    { month: "Feb", revenue: 52000, customers: 135, orders: 520 },
    { month: "Mar", revenue: 48000, customers: 128, orders: 480 },
    { month: "Apr", revenue: 61000, customers: 152, orders: 610 },
    { month: "May", revenue: 55000, customers: 145, orders: 550 },
    { month: "Jun", revenue: 67000, customers: 168, orders: 670 }
  ];

  const categoryData = [
    { name: "Electronics", value: 35, color: "#3B82F6" },
    { name: "Clothing", value: 25, color: "#10B981" },
    { name: "Home & Garden", value: 20, color: "#F59E0B" },
    { name: "Books", value: 12, color: "#EF4444" },
    { name: "Sports", value: 8, color: "#8B5CF6" }
  ];

  const conversionData = [
    { day: "Mon", rate: 2.4 },
    { day: "Tue", rate: 3.1 },
    { day: "Wed", rate: 2.8 },
    { day: "Thu", rate: 3.5 },
    { day: "Fri", rate: 4.2 },
    { day: "Sat", rate: 3.8 },
    { day: "Sun", rate: 2.9 }
  ];

  const recentReports = [
    {
      id: 1,
      title: "Monthly Sales Performance",
      type: "Sales",
      date: "2024-05-27",
      status: "completed",
      views: 145,
      size: "2.4 MB"
    },
    {
      id: 2,
      title: "Customer Behavior Analysis",
      type: "Analytics",
      date: "2024-05-26",
      status: "completed",
      views: 98,
      size: "1.8 MB"
    },
    {
      id: 3,
      title: "Inventory Management Report",
      type: "Operations",
      date: "2024-05-25",
      status: "processing",
      views: 67,
      size: "3.1 MB"
    },
    {
      id: 4,
      title: "Marketing Campaign ROI",
      type: "Marketing",
      date: "2024-05-24",
      status: "completed",
      views: 123,
      size: "1.9 MB"
    },
    {
      id: 5,
      title: "Financial Summary Q2",
      type: "Finance",
      date: "2024-05-23",
      status: "scheduled",
      views: 0,
      size: "Pending"
    }
  ];

  const kpiData = [
    {
      title: "Total Revenue",
      value: "$328,000",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign
    },
    {
      title: "Active Users",
      value: "24,567",
      change: "+8.2%",
      trend: "up",
      icon: Users
    },
    {
      title: "Conversion Rate",
      value: "3.2%",
      change: "-2.1%",
      trend: "down",
      icon: Target
    },
    {
      title: "Avg. Order Value",
      value: "$89.50",
      change: "+5.7%",
      trend: "up",
      icon: Activity
    }
  ];

  const reportTemplates = [
    {
      id: 1,
      name: "Sales Performance",
      category: "Sales",
      frequency: "Weekly",
      lastRun: "2024-05-27"
    },
    {
      id: 2,
      name: "Customer Analytics",
      category: "Customer",
      frequency: "Monthly",
      lastRun: "2024-05-01"
    },
    {
      id: 3,
      name: "Financial Summary",
      category: "Finance",
      frequency: "Monthly",
      lastRun: "2024-05-01"
    },
    {
      id: 4,
      name: "Marketing ROI",
      category: "Marketing",
      frequency: "Bi-weekly",
      lastRun: "2024-05-20"
    },
    {
      id: 5,
      name: "Inventory Status",
      category: "Operations",
      frequency: "Daily",
      lastRun: "2024-05-28"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-100";
      case "processing":
        return "text-blue-600 bg-blue-100";
      case "scheduled":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <BarChart3 className="text-blue-600" size={36} />
                Reports & Analytics
              </h1>
              <p className="text-gray-600 mt-2">
                Generate detailed reports and business insights
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <RefreshCw size={20} />
                Refresh Data
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                <FileText size={20} />
                New Report
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200">
            <nav className="flex space-x-8">
              {["overview", "reports", "analytics", "templates"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <select
            value={selectedTimeframe}
            onChange={(e) => setSelectedTimeframe(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="all">All Categories</option>
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance</option>
            <option value="operations">Operations</option>
          </select>

          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search reports..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-64"
            />
          </div>
        </div>

        {activeTab === "overview" && (
          <>
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {kpiData.map((kpi, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">
                        {kpi.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        {kpi.value}
                      </p>
                      <div className="flex items-center mt-2">
                        <span
                          className={`text-sm font-medium ${
                            kpi.trend === "up"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {kpi.change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                          vs last month
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <kpi.icon className="text-blue-600" size={24} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Revenue Trend */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Revenue Trend
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Settings size={20} />
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip
                      formatter={(value) => [
                        `$${value.toLocaleString()}`,
                        "Revenue"
                      ]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.1}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Category Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Sales by Category
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Settings size={20} />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={300}>
                    <RechartsPieChart>
                      <Tooltip />
                      <RechartsPieChart
                        data={categoryData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                      >
                        {categoryData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </RechartsPieChart>
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-sm text-gray-600">{item.name}</span>
                      <span className="text-sm font-medium text-gray-900 ml-auto">
                        {item.value}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Conversion Rate Chart */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Weekly Conversion Rate
                </h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-lg">
                    This Week
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-50">
                    Last Week
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={conversionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => [`${value}%`, "Conversion Rate"]}
                  />
                  <Line
                    type="monotone"
                    dataKey="rate"
                    stroke="#10B981"
                    strokeWidth={3}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </>
        )}

        {activeTab === "reports" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Reports
                </h2>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Export All
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Report Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date Created
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentReports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {report.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-600">
                          {report.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {report.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(
                            report.status
                          )}`}
                        >
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {report.views}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {report.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                          <button className="text-blue-600 hover:text-blue-800">
                            <Eye size={16} />
                          </button>
                          <button className="text-green-600 hover:text-green-800">
                            <Download size={16} />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <Share2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "analytics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Customer Analytics */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Customer Growth
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="customers" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Order Analytics */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Order Volume
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={performanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="orders"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTab === "templates" && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Report Templates
                </h2>
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                  <FileText size={20} />
                  Create Template
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reportTemplates.map((template) => (
                  <div
                    key={template.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-medium text-gray-900">
                        {template.name}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full">
                        {template.category}
                      </span>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock size={12} />
                        {template.frequency}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        Last run: {template.lastRun}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded text-sm hover:bg-blue-100 transition-colors">
                        Run Now
                      </button>
                      <button className="px-3 py-2 bg-gray-50 text-gray-600 rounded text-sm hover:bg-gray-100 transition-colors">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportsAnalytics;
