import React from "react";
import { Search, Bell, User } from "lucide-react"; // Adjust based on your icon library

const Header = ({ user }) => (
  <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-semibold text-gray-900">
          Admin Dashboard
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            id="search"
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
          <span className="text-gray-700 font-medium">
            {user?.name || "Admin"}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
