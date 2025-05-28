import React, { useState } from "react";
import {
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Shield,
  Users,
  MapPin,
  Calendar,
  BarChart3,
  Thermometer,
  Heart,
  Stethoscope,
  Eye,
  RefreshCw
} from "lucide-react";

const HealthMonitoringDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedTimeframe, setSelectedTimeframe] = useState("Last 30 Days");

  const regions = [
    "All Regions",
    "North America",
    "Europe",
    "Asia-Pacific",
    "Africa",
    "South America"
  ];
  const timeframes = [
    "Last 7 Days",
    "Last 30 Days",
    "Last 3 Months",
    "Last Year"
  ];

  const alertData = [
    {
      id: 1,
      disease: "Influenza A",
      region: "North America",
      level: "Medium",
      trend: "up",
      cases: 1847
    },
    {
      id: 2,
      disease: "COVID-19",
      region: "Europe",
      level: "Low",
      trend: "down",
      cases: 342
    },
    {
      id: 3,
      disease: "Dengue Fever",
      region: "Asia-Pacific",
      level: "High",
      trend: "up",
      cases: 2156
    },
    {
      id: 4,
      disease: "Malaria",
      region: "Africa",
      level: "Medium",
      trend: "down",
      cases: 967
    }
  ];

  const statsData = [
    {
      title: "Active Cases",
      value: "12,847",
      change: "+5.2%",
      trend: "up",
      icon: Users,
      color: "text-green-600"
    },
    {
      title: "Recovery Rate",
      value: "94.3%",
      change: "+2.1%",
      trend: "up",
      icon: Heart,
      color: "text-green-600"
    },
    {
      title: "Monitored Regions",
      value: "156",
      change: "+12",
      trend: "up",
      icon: MapPin,
      color: "text-green-600"
    },
    {
      title: "Risk Level",
      value: "Moderate",
      change: "Stable",
      trend: "stable",
      icon: Shield,
      color: "text-green-600"
    }
  ];

  const surveillanceData = [
    { disease: "Respiratory Infections", cases: 3245, change: 12, regions: 45 },
    { disease: "Gastrointestinal", cases: 1876, change: -8, regions: 32 },
    { disease: "Vector-borne", cases: 2134, change: 23, regions: 28 },
    { disease: "Waterborne", cases: 892, change: -15, regions: 19 }
  ];

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "low":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-600 rounded-xl">
                <Activity className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-green-900">
                  Health Monitoring
                </h1>
                <p className="text-green-700">
                  Disease surveillance and health trends across regions
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                <RefreshCw className="h-4 w-4" />
                <span>Refresh Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8 border border-green-100">
          <div className="flex items-center space-x-6 flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-green-600" />
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-green-600" />
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border border-green-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {timeframes.map((timeframe) => (
                  <option key={timeframe} value={timeframe}>
                    {timeframe}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 border border-green-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-green-100`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="flex items-center space-x-1">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  ) : stat.trend === "down" ? (
                    <TrendingDown className="h-4 w-4 text-red-600" />
                  ) : (
                    <div className="h-4 w-4 bg-gray-400 rounded-full"></div>
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up"
                        ? "text-green-600"
                        : stat.trend === "down"
                        ? "text-red-600"
                        : "text-gray-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Active Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-green-100">
            <div className="p-6 border-b border-green-100">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Active Disease Alerts
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {alertData.map((alert) => (
                  <div
                    key={alert.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {alert.disease}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full border ${getLevelColor(
                            alert.level
                          )}`}
                        >
                          {alert.level} Risk
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{alert.region}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Users className="h-4 w-4" />
                          <span>{alert.cases.toLocaleString()} cases</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {alert.trend === "up" ? (
                        <TrendingUp className="h-5 w-5 text-red-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-green-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Surveillance Summary */}
          <div className="bg-white rounded-xl shadow-sm border border-green-100">
            <div className="p-6 border-b border-green-100">
              <div className="flex items-center space-x-3">
                <Eye className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Surveillance Summary
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {surveillanceData.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {item.disease}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{item.cases.toLocaleString()} cases</span>
                        <span>{item.regions} regions</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`text-sm font-medium ${
                          item.change > 0 ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {item.change > 0 ? "+" : ""}
                        {item.change}%
                      </span>
                      {item.change > 0 ? (
                        <TrendingUp className="h-4 w-4 text-red-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Health Trends Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 mb-8">
          <div className="p-6 border-b border-green-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-6 w-6 text-green-600" />
                <h2 className="text-xl font-semibold text-gray-900">
                  Health Trends
                </h2>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Thermometer className="h-4 w-4" />
                <span>Real-time monitoring</span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="h-64 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-dashed border-green-200 flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <p className="text-green-600 font-medium">
                  Interactive health trends chart
                </p>
                <p className="text-green-500 text-sm">
                  Data visualization would be displayed here
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-green-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <Stethoscope className="h-5 w-5 text-green-600" />
              <span className="text-gray-600">
                Last updated: {new Date().toLocaleString()}
              </span>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <span>Data sources: WHO, CDC, Local Health Authorities</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitoringDashboard;
