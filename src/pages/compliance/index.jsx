import React, { useState } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  FileText,
  Download,
  Filter,
  Search,
  Calendar,
  Building,
  Users,
  TrendingUp,
  Eye
} from "lucide-react";

const ComplianceManagement = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Dummy compliance data
  const complianceStats = {
    totalRequirements: 124,
    compliant: 98,
    nonCompliant: 15,
    pending: 11,
    complianceRate: 79
  };

  const regulations = [
    {
      id: 1,
      name: "GDPR",
      category: "Data Protection",
      status: "compliant",
      lastAudit: "2024-03-15",
      nextAudit: "2024-06-15",
      risk: "low",
      requirements: 23,
      compliantReqs: 23
    },
    {
      id: 2,
      name: "SOX",
      category: "Financial",
      status: "non-compliant",
      lastAudit: "2024-02-28",
      nextAudit: "2024-05-28",
      risk: "high",
      requirements: 18,
      compliantReqs: 14
    },
    {
      id: 3,
      name: "HIPAA",
      category: "Healthcare",
      status: "pending",
      lastAudit: "2024-01-20",
      nextAudit: "2024-07-20",
      risk: "medium",
      requirements: 31,
      compliantReqs: 28
    },
    {
      id: 4,
      name: "PCI DSS",
      category: "Payment",
      status: "compliant",
      lastAudit: "2024-03-10",
      nextAudit: "2024-09-10",
      risk: "low",
      requirements: 12,
      compliantReqs: 12
    },
    {
      id: 5,
      name: "ISO 27001",
      category: "Security",
      status: "non-compliant",
      lastAudit: "2024-02-15",
      nextAudit: "2024-08-15",
      risk: "high",
      requirements: 25,
      compliantReqs: 20
    }
  ];

  const auditReports = [
    {
      id: 1,
      title: "Q1 2024 Compliance Audit",
      date: "2024-03-31",
      type: "Quarterly",
      status: "completed",
      findings: 8,
      critical: 2
    },
    {
      id: 2,
      title: "GDPR Annual Assessment",
      date: "2024-03-15",
      type: "Annual",
      status: "completed",
      findings: 3,
      critical: 0
    },
    {
      id: 3,
      title: "SOX Controls Review",
      date: "2024-02-28",
      type: "Special",
      status: "in-progress",
      findings: 12,
      critical: 4
    },
    {
      id: 4,
      title: "Monthly Security Check",
      date: "2024-04-30",
      type: "Monthly",
      status: "draft",
      findings: 5,
      critical: 1
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "compliant":
        return "text-green-600 bg-green-100";
      case "non-compliant":
        return "text-red-600 bg-red-100";
      case "pending":
        return "text-yellow-600 bg-yellow-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "low":
        return "text-green-600 bg-green-100";
      case "medium":
        return "text-yellow-600 bg-yellow-100";
      case "high":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  const filteredRegulations = regulations.filter((reg) => {
    const matchesFilter =
      selectedFilter === "all" || reg.status === selectedFilter;
    const matchesSearch =
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Shield className="text-blue-600" size={36} />
                Compliance Management
              </h1>
              <p className="text-gray-600 mt-2">
                Track regulatory compliance and manage audit reports
              </p>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download size={20} />
                Export Report
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
                <FileText size={20} />
                New Audit
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Requirements
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {complianceStats.totalRequirements}
                </p>
              </div>
              <FileText className="text-blue-600" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Compliant</p>
                <p className="text-2xl font-bold text-green-600">
                  {complianceStats.compliant}
                </p>
              </div>
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Non-Compliant
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {complianceStats.nonCompliant}
                </p>
              </div>
              <XCircle className="text-red-600" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Pending Review
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {complianceStats.pending}
                </p>
              </div>
              <Clock className="text-yellow-600" size={24} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Compliance Rate
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {complianceStats.complianceRate}%
                </p>
              </div>
              <TrendingUp className="text-blue-600" size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regulations Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Regulatory Compliance
                  </h2>
                  <div className="flex gap-2">
                    <select
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="all">All Status</option>
                      <option value="compliant">Compliant</option>
                      <option value="non-compliant">Non-Compliant</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>

                <div className="relative">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Search regulations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Regulation
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Risk
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Progress
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Audit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredRegulations.map((reg) => (
                      <tr key={reg.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {reg.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {reg.category}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getStatusColor(
                              reg.status
                            )}`}
                          >
                            {reg.status.replace("-", " ")}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getRiskColor(
                              reg.risk
                            )}`}
                          >
                            {reg.risk}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2">
                              <div
                                className="bg-blue-600 h-2 rounded-full"
                                style={{
                                  width: `${
                                    (reg.compliantReqs / reg.requirements) * 100
                                  }%`
                                }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">
                              {reg.compliantReqs}/{reg.requirements}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {reg.nextAudit}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">
                            <Eye size={16} />
                          </button>
                          <button className="text-gray-600 hover:text-gray-800">
                            <FileText size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Audit Reports */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Recent Audit Reports
                </h2>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {auditReports.map((report) => (
                    <div
                      key={report.id}
                      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-medium text-gray-900 text-sm">
                          {report.title}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            report.status === "completed"
                              ? "bg-green-100 text-green-600"
                              : report.status === "in-progress"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {report.status.replace("-", " ")}
                        </span>
                      </div>

                      <div className="text-xs text-gray-500 mb-3">
                        <div className="flex items-center gap-1 mb-1">
                          <Calendar size={12} />
                          {report.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Building size={12} />
                          {report.type} Audit
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-600">
                          {report.findings} findings
                        </span>
                        {report.critical > 0 && (
                          <span className="text-red-600 font-medium">
                            {report.critical} critical
                          </span>
                        )}
                      </div>

                      <div className="mt-3 flex gap-2">
                        <button className="flex-1 px-3 py-1 bg-blue-50 text-blue-600 rounded text-xs hover:bg-blue-100 transition-colors">
                          View Report
                        </button>
                        <button className="px-3 py-1 bg-gray-50 text-gray-600 rounded text-xs hover:bg-gray-100 transition-colors">
                          <Download size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                  View All Reports
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Quick Actions
                </h2>
              </div>

              <div className="p-6 space-y-3">
                <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all flex items-center gap-2">
                  <FileText size={20} />
                  Generate Compliance Report
                </button>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all flex items-center gap-2">
                  <Shield size={20} />
                  Schedule Audit
                </button>

                <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all flex items-center gap-2">
                  <AlertTriangle size={20} />
                  Review Risk Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceManagement;
