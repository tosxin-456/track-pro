import React, { useState } from 'react';
import { 
  PawPrint, 
  Plus, 
  Search, 
  Filter,
  Heart,
  Activity,
  Calendar,
  MapPin,
  Edit3,
  Eye,
  Trash2,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  X,
  Thermometer,
  Weight,
  Syringe,
  Stethoscope
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const AnimalTracking = () => {
  const [animals, setAnimals] = useState([
    {
      id: 1,
      name: "Bessie",
      species: "cattle",
      breed: "Holstein",
      tagId: "CT-001",
      age: "3 years",
      weight: 650,
      location: "Pasture A",
      healthStatus: "healthy",
      lastCheckup: "2024-05-20",
      vaccinations: ["Foot and Mouth", "Brucellosis"],
      birthDate: "2021-03-15",
      gender: "female",
      owner: "John Smith",
      notes: "Excellent milk producer",
      weightHistory: [
        { date: "2024-01", weight: 620 },
        { date: "2024-02", weight: 630 },
        { date: "2024-03", weight: 640 },
        { date: "2024-04", weight: 645 },
        { date: "2024-05", weight: 650 }
      ]
    },
    {
      id: 2,
      name: "Charlie",
      species: "pig",
      breed: "Yorkshire",
      tagId: "PG-002",
      age: "1 year",
      weight: 180,
      location: "Pen B",
      healthStatus: "attention",
      lastCheckup: "2024-05-25",
      vaccinations: ["Swine Flu", "Porcine Parvovirus"],
      birthDate: "2023-02-10",
      gender: "male",
      owner: "Mike Davis",
      notes: "Minor respiratory issue - monitoring",
      weightHistory: [
        { date: "2024-01", weight: 150 },
        { date: "2024-02", weight: 160 },
        { date: "2024-03", weight: 170 },
        { date: "2024-04", weight: 175 },
        { date: "2024-05", weight: 180 }
      ]
    },
    {
      id: 3,
      name: "Dolly",
      species: "sheep",
      breed: "Merino",
      tagId: "SH-003",
      age: "2 years",
      weight: 75,
      location: "Field C",
      healthStatus: "healthy",
      lastCheckup: "2024-05-22",
      vaccinations: ["Clostridial", "Foot Rot"],
      birthDate: "2022-04-08",
      gender: "female",
      owner: "Sarah Johnson",
      notes: "Excellent wool quality",
      weightHistory: [
        { date: "2024-01", weight: 70 },
        { date: "2024-02", weight: 72 },
        { date: "2024-03", weight: 73 },
        { date: "2024-04", weight: 74 },
        { date: "2024-05", weight: 75 }
      ]
    },
    {
      id: 4,
      name: "Thunder",
      species: "horse",
      breed: "Arabian",
      tagId: "HR-004",
      age: "5 years",
      weight: 450,
      location: "Stable A",
      healthStatus: "healthy",
      lastCheckup: "2024-05-18",
      vaccinations: ["Tetanus", "Influenza", "Rhinopneumonitis"],
      birthDate: "2019-06-12",
      gender: "male",
      owner: "Emily Chen",
      notes: "Training for competitions",
      weightHistory: [
        { date: "2024-01", weight: 440 },
        { date: "2024-02", weight: 445 },
        { date: "2024-03", weight: 448 },
        { date: "2024-04", weight: 449 },
        { date: "2024-05", weight: 450 }
      ]
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("all");
  const [filterHealth, setFilterHealth] = useState("all");
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("view");

  const [formData, setFormData] = useState({
    name: "",
    species: "cattle",
    breed: "",
    tagId: "",
    age: "",
    weight: "",
    location: "",
    healthStatus: "healthy",
    vaccinations: "",
    gender: "female",
    owner: "",
    notes: ""
  });

  const species = [
    {
      value: "cattle",
      label: "Cattle",
      icon: "🐄",
      color: "bg-brown-100 text-brown-800"
    },
    {
      value: "pig",
      label: "Pig",
      icon: "🐷",
      color: "bg-pink-100 text-pink-800"
    },
    {
      value: "sheep",
      label: "Sheep",
      icon: "🐑",
      color: "bg-gray-100 text-gray-800"
    },
    {
      value: "horse",
      label: "Horse",
      icon: "🐎",
      color: "bg-amber-100 text-amber-800"
    },
    {
      value: "goat",
      label: "Goat",
      icon: "🐐",
      color: "bg-green-100 text-green-800"
    }
  ];

  const getSpeciesColor = (speciesValue) => {
    const speciesObj = species.find((s) => s.value === speciesValue);
    return speciesObj ? speciesObj.color : "bg-gray-100 text-gray-800";
  };

  const getSpeciesIcon = (speciesValue) => {
    const speciesObj = species.find((s) => s.value === speciesValue);
    return speciesObj ? speciesObj.icon : "🐾";
  };

  const getHealthStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-100 text-green-800";
      case "attention":
        return "bg-yellow-100 text-yellow-800";
      case "sick":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredAnimals = animals.filter((animal) => {
    const matchesSearch =
      animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      animal.tagId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecies =
      filterSpecies === "all" || animal.species === filterSpecies;
    const matchesHealth =
      filterHealth === "all" || animal.healthStatus === filterHealth;

    return matchesSearch && matchesSpecies && matchesHealth;
  });

  // Data for charts
  const speciesDistribution = species
    .map((s) => ({
      name: s.label,
      value: animals.filter((a) => a.species === s.value).length,
      color:
        s.value === "cattle"
          ? "#8B4513"
          : s.value === "pig"
          ? "#FFC0CB"
          : s.value === "sheep"
          ? "#D3D3D3"
          : s.value === "horse"
          ? "#DAA520"
          : "#90EE90"
    }))
    .filter((item) => item.value > 0);

  const healthStatusData = [
    {
      name: "Healthy",
      value: animals.filter((a) => a.healthStatus === "healthy").length,
      color: "#10B981"
    },
    {
      name: "Attention",
      value: animals.filter((a) => a.healthStatus === "attention").length,
      color: "#F59E0B"
    },
    {
      name: "Sick",
      value: animals.filter((a) => a.healthStatus === "sick").length,
      color: "#EF4444"
    }
  ].filter((item) => item.value > 0);

  const avgWeightBySpecies = species
    .map((s) => {
      const speciesAnimals = animals.filter((a) => a.species === s.value);
      const avgWeight =
        speciesAnimals.length > 0
          ? Math.round(
              speciesAnimals.reduce((sum, a) => sum + a.weight, 0) /
                speciesAnimals.length
            )
          : 0;
      return {
        species: s.label,
        weight: avgWeight
      };
    })
    .filter((item) => item.weight > 0);

  const handleViewAnimal = (animal) => {
    setSelectedAnimal(animal);
    setModalMode("view");
    setShowModal(true);
  };

  const handleAddAnimal = () => {
    setModalMode("add");
    setFormData({
      name: "",
      species: "cattle",
      breed: "",
      tagId: "",
      age: "",
      weight: "",
      location: "",
      healthStatus: "healthy",
      vaccinations: "",
      gender: "female",
      owner: "",
      notes: ""
    });
    setShowModal(true);
  };

  const handleEditAnimal = (animal) => {
    setSelectedAnimal(animal);
    setModalMode("edit");
    setFormData({
      name: animal.name,
      species: animal.species,
      breed: animal.breed,
      tagId: animal.tagId,
      age: animal.age,
      weight: animal.weight.toString(),
      location: animal.location,
      healthStatus: animal.healthStatus,
      vaccinations: animal.vaccinations.join(", "),
      gender: animal.gender,
      owner: animal.owner,
      notes: animal.notes
    });
    setShowModal(true);
  };

  const handleDeleteAnimal = (animalId) => {
    if (window.confirm("Are you sure you want to delete this animal record?")) {
      setAnimals(animals.filter((animal) => animal.id !== animalId));
    }
  };

  const handleSubmit = () => {
    if (modalMode === "add") {
      const newAnimal = {
        id: Math.max(...animals.map((a) => a.id)) + 1,
        ...formData,
        weight: parseInt(formData.weight),
        vaccinations: formData.vaccinations
          .split(",")
          .map((v) => v.trim())
          .filter((v) => v),
        lastCheckup: new Date().toISOString().split("T")[0],
        birthDate: new Date().toISOString().split("T")[0],
        weightHistory: [
          {
            date: new Date().toISOString().slice(0, 7),
            weight: parseInt(formData.weight)
          }
        ]
      };
      setAnimals([...animals, newAnimal]);
    } else if (modalMode === "edit") {
      setAnimals(
        animals.map((animal) =>
          animal.id === selectedAnimal.id
            ? {
                ...animal,
                ...formData,
                weight: parseInt(formData.weight),
                vaccinations: formData.vaccinations
                  .split(",")
                  .map((v) => v.trim())
                  .filter((v) => v)
              }
            : animal
        )
      );
    }

    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <PawPrint className="h-8 w-8 text-green-600" />
                Animal Tracking
              </h1>
              <p className="text-gray-600 mt-2">
                Track and manage individual animal profiles and health records
              </p>
            </div>
            <button
              onClick={handleAddAnimal}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Plus className="h-5 w-5" />
              Add Animal
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Animals
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {animals.length}
                </p>
              </div>
              <PawPrint className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Healthy</p>
                <p className="text-2xl font-bold text-green-600">
                  {animals.filter((a) => a.healthStatus === "healthy").length}
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Need Attention
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {animals.filter((a) => a.healthStatus === "attention").length}
                </p>
              </div>
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Recent Checkups
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {
                    animals.filter((a) => {
                      const checkupDate = new Date(a.lastCheckup);
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return checkupDate >= weekAgo;
                    }).length
                  }
                </p>
              </div>
              <Stethoscope className="h-8 w-8 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Species Distribution
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={speciesDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {speciesDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Health Status
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={healthStatusData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Average Weight by Species
            </h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={avgWeightBySpecies}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="species" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} kg`, "Weight"]} />
                <Bar dataKey="weight" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search animals by name or tag ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-4">
              <select
                value={filterSpecies}
                onChange={(e) => setFilterSpecies(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Species</option>
                {species.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
              <select
                value={filterHealth}
                onChange={(e) => setFilterHealth(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="all">All Health Status</option>
                <option value="healthy">Healthy</option>
                <option value="attention">Need Attention</option>
                <option value="sick">Sick</option>
              </select>
            </div>
          </div>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">
                      {getSpeciesIcon(animal.species)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {animal.name}
                      </h3>
                      <p className="text-sm text-gray-500">{animal.tagId}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleViewAnimal(animal)}
                      className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
                      title="View details"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleEditAnimal(animal)}
                      className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded"
                      title="Edit animal"
                    >
                      <Edit3 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteAnimal(animal.id)}
                      className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
                      title="Delete animal"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSpeciesColor(
                        animal.species
                      )}`}
                    >
                      {species.find((s) => s.value === animal.species)?.label}
                    </span>
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getHealthStatusColor(
                        animal.healthStatus
                      )}`}
                    >
                      {animal.healthStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Weight className="h-4 w-4 text-gray-400" />
                      <span>{animal.weight} kg</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>{animal.age}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{animal.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Stethoscope className="h-4 w-4 text-gray-400" />
                      <span>{animal.lastCheckup}</span>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <p className="text-xs text-gray-500">
                      Owner: {animal.owner}
                    </p>
                    <p className="text-xs text-gray-500">
                      Breed: {animal.breed}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <PawPrint className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">
              No animals found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
            <div className="relative top-10 mx-auto p-5 border w-full max-w-4xl shadow-lg rounded-md bg-white">
              <div className="mt-3">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {modalMode === "view"
                      ? `${selectedAnimal?.name} - Details`
                      : modalMode === "add"
                      ? "Add New Animal"
                      : "Edit Animal"}
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {modalMode === "view" && selectedAnimal ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Basic Information
                        </h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">
                              Name:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.name}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Tag ID:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.tagId}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Species:
                            </span>
                            <p className="text-gray-900">
                              {
                                species.find(
                                  (s) => s.value === selectedAnimal.species
                                )?.label
                              }
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Breed:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.breed}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Age:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.age}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Gender:
                            </span>
                            <p className="text-gray-900 capitalize">
                              {selectedAnimal.gender}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Weight:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.weight} kg
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Location:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.location}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Health Information
                        </h4>
                        <div className="space-y-3 text-sm">
                          <div>
                            <span className="font-medium text-gray-600">
                              Health Status:
                            </span>
                            <span
                              className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getHealthStatusColor(
                                selectedAnimal.healthStatus
                              )}`}
                            >
                              {selectedAnimal.healthStatus}
                            </span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Last Checkup:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.lastCheckup}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Vaccinations:
                            </span>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {selectedAnimal.vaccinations.map(
                                (vaccine, index) => (
                                  <span
                                    key={index}
                                    className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                                  >
                                    {vaccine}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Owner:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.owner}
                            </p>
                          </div>
                          <div>
                            <span className="font-medium text-gray-600">
                              Notes:
                            </span>
                            <p className="text-gray-900">
                              {selectedAnimal.notes}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Weight History
                        </h4>
                        <ResponsiveContainer width="100%" height={250}>
                          <LineChart data={selectedAnimal.weightHistory}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip
                              formatter={(value) => [`${value} kg`, "Weight"]}
                            />
                            <Line
                              type="monotone"
                              dataKey="weight"
                              stroke="#10B981"
                              strokeWidth={2}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Species *
                        </label>
                        <select
                          name="species"
                          value={formData.species}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        >
                          {species.map((s) => (
                            <option key={s.value} value={s.value}>
                              {s.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Breed
                        </label>
                        <input
                          type="text"
                          name="breed"
                          value={formData.breed}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Age
                        </label>
                        <input
                          type="text"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          placeholder="e.g., 2 years"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Weight (kg) *
                        </label>
                        <input
                          type="number"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="e.g., Pasture A, Pen B"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Gender
                        </label>
                        <select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Health Status
                        </label>
                        <select
                          name="healthStatus"
                          value={formData.healthStatus}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="healthy">Healthy</option>
                          <option value="attention">Need Attention</option>
                          <option value="sick">Sick</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Owner
                        </label>
                        <input
                          type="text"
                          name="owner"
                          value={formData.owner}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Vaccinations
                      </label>
                      <input
                        type="text"
                        name="vaccinations"
                        value={formData.vaccinations}
                        onChange={handleInputChange}
                        placeholder="Enter vaccinations separated by commas"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Notes
                      </label>
                      <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Additional notes about the animal..."
                      />
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t">
                      <button
                        onClick={() => setShowModal(false)}
                        className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors"
                      >
                        {modalMode === "add" ? "Add Animal" : "Save Changes"}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimalTracking;