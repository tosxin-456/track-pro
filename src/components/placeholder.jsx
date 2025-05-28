// src/components/PlaceholderPage.jsx
import { Plus } from "lucide-react";

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

export default PlaceholderPage;
