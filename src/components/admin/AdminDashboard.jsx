"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("achievers");

  // State for API data
  const [achieversData, setAchieversData] = useState([]);
  const [scholarshipData, setScholarshipData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuth, setIsAuth] = useState(null);

  const router = useRouter();

  // Modal states
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAadhaarModal, setShowAadhaarModal] = useState(false);
  const [selectedAadhaarImage, setSelectedAadhaarImage] = useState(null);

  useEffect(() => {
    const init = async () => {
      const ok = await adminAuthCheck();
      if (ok) {
        fetchAllData(); // ✅ only after auth success
      }
    };

    init();
  }, []);

  const adminAuthCheck = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/admin/auth/check`, {
        withCredentials: true,
      });

      if (response.data.success) {
        setIsAuth(true);
        return true;
      } else {
        setIsAuth(false);
        router.replace("/admin"); // 🔴 login page
        return false;
      }
    } catch (error) {
      setIsAuth(false);
      router.replace("/admin"); // 🔴 login page
      return false;
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      await Promise.all([getAchieversData(), getScholarshipData()]);
    } catch (err) {
      setError("Failed to load data");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getAchieversData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/achievers-award/all`);
      console.log("Achievers Data:", response.data);

      if (response.data.success) {
        setAchieversData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching achievers:", error);
      throw error;
    }
  };

  const getScholarshipData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/ai-scholarship/all`);
      console.log("Scholarship Data:", response.data);

      if (response.data.success) {
        setScholarshipData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching scholarship:", error);
      throw error;
    }
  };

  // Open details modal
  const handleViewDetails = (applicant, type) => {
    setSelectedApplicant({ ...applicant, type });
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  // Close modals
  const closeModal = () => {
    setShowModal(false);
    setSelectedApplicant(null);
    document.body.style.overflow = "unset";
  };

  const closeAadhaarModal = () => {
    setShowAadhaarModal(false);
    setSelectedAadhaarImage(null);
  };

  // Open Aadhaar image modal
  const handleViewAadhaar = (imageUrl) => {
    setSelectedAadhaarImage(imageUrl);
    setShowAadhaarModal(true);
  };

  // Get full image URL
  const getImageUrl = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    return `${API_URL}${imagePath}`;
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center pt-24">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold text-lg">
            Loading applications...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 pt-24">
        <div className="text-center max-w-md mx-auto bg-white p-8 rounded-2xl shadow-xl">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Error Loading Data
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={fetchAllData}
            className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 pt-40 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-3">
            Admin Dashboard
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            Manage all applications and scholarships
          </p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-2xl mb-8 overflow-hidden">
          <div className="border-b-2 border-gray-100">
            <nav
              className="flex overflow-x-auto bg-gradient-to-r from-gray-50 to-white"
              aria-label="Tabs"
            >
              <button
                onClick={() => setActiveTab("achievers")}
                className={`flex-1 px-6 py-5 text-base sm:text-lg font-bold whitespace-nowrap border-b-4 transition-all duration-300 ${
                  activeTab === "achievers"
                    ? "border-green-600 text-green-700 bg-green-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  🏆 Achievers Award
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-sm font-bold">
                    {achieversData.length}
                  </span>
                </span>
              </button>
              <button
                onClick={() => setActiveTab("scholarship")}
                className={`flex-1 px-6 py-5 text-base sm:text-lg font-bold whitespace-nowrap border-b-4 transition-all duration-300 ${
                  activeTab === "scholarship"
                    ? "border-blue-600 text-blue-700 bg-blue-50"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  🎓 AI Scholarship
                  <span className="px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-bold">
                    {scholarshipData.length}
                  </span>
                </span>
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6 sm:p-8">
            {/* ACHIEVERS AWARD TAB */}
            {activeTab === "achievers" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-green-600 to-emerald-500 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Achievers Award Applications
                  </h2>
                </div>

                {achieversData.length === 0 ? (
                  <div className="text-center py-16 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-12 h-12 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg font-medium">
                      No applications found
                    </p>
                  </div>
                ) : (
                  achieversData.map((applicant, index) => (
                    <div
                      key={applicant._id}
                      className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-green-300 transition-all duration-300 transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Header Section */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b-2 border-green-100">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {applicant.firstName?.[0] || "A"}
                            {applicant.surname?.[0] || "A"}
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                              {applicant.firstName} {applicant.middleName}{" "}
                              {applicant.surname}
                            </h3>
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              Applied on {formatDate(applicant.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                          <p className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wide flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            Email
                          </p>
                          <p className="text-sm text-gray-800 font-medium break-words">
                            {applicant.email}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-green-100 hover:border-green-300 transition-colors">
                          <p className="text-xs font-semibold text-green-600 mb-1 uppercase tracking-wide flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              />
                            </svg>
                            Contact
                          </p>
                          <p className="text-sm text-gray-800 font-medium">
                            {applicant.contactNumber}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() => handleViewDetails(applicant, "achiever")}
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View Details
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* AI SCHOLARSHIP TAB */}
            {activeTab === "scholarship" && (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-blue-600 to-indigo-500 rounded-full"></div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    AI Scholarship Applications
                  </h2>
                </div>

                {scholarshipData.length === 0 ? (
                  <div className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg
                        className="w-12 h-12 text-gray-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-lg font-medium">
                      No applications found
                    </p>
                  </div>
                ) : (
                  scholarshipData.map((applicant, index) => (
                    <div
                      key={applicant._id}
                      className="bg-gradient-to-br from-white to-blue-50 border-2 border-blue-100 rounded-2xl p-6 sm:p-8 hover:shadow-2xl hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Header Section */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 pb-6 border-b-2 border-blue-100">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                            {applicant.fullName
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("") || "NA"}
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1">
                              {applicant.fullName}
                            </h3>
                            <p className="text-sm text-gray-500 flex items-center gap-2">
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                />
                              </svg>
                              Applied on {formatDate(applicant.createdAt)}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Quick Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div className="bg-white p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                          <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              />
                            </svg>
                            Email
                          </p>
                          <p className="text-sm text-gray-800 font-medium break-words">
                            {applicant.email}
                          </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-blue-100 hover:border-blue-300 transition-colors">
                          <p className="text-xs font-semibold text-blue-600 mb-1 uppercase tracking-wide flex items-center gap-1">
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                              />
                            </svg>
                            Mobile
                          </p>
                          <p className="text-sm text-gray-800 font-medium">
                            {applicant.mobile}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <button
                        onClick={() =>
                          handleViewDetails(applicant, "scholarship")
                        }
                        className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        View Details
                      </button>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DETAILS MODAL */}
      {showModal && selectedApplicant && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
            {/* White background overlay */}
            <div
              className="fixed inset-0 transition-opacity bg-white bg-opacity-95"
              onClick={closeModal}
            ></div>

            <div className="relative inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl border-2 border-gray-200">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="mb-6 pb-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedApplicant.type === "achiever"
                    ? `${selectedApplicant.firstName} ${selectedApplicant.middleName} ${selectedApplicant.surname}`
                    : selectedApplicant.fullName}
                </h2>
                <span className="text-sm text-gray-500">
                  Applied on {formatDate(selectedApplicant.createdAt)}
                </span>
              </div>

              <div className="max-h-[70vh] overflow-y-auto pr-2">
                {selectedApplicant.type === "achiever" && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-green-600 rounded"></span>
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Email
                          </p>
                          <p className="text-sm text-gray-800 break-all">
                            {selectedApplicant.email}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Contact Number
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.contactNumber}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Current Address
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.currentAddress}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Current Address
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.currentAddress}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Native Address
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.nativeAddress}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Aadhaar Number
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.aadhaar}
                          </p>
                        </div>
                      </div>
                    </div>

                    {selectedApplicant.aadhaarImages &&
                      selectedApplicant.aadhaarImages.length > 0 && (
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                            <span className="w-1 h-6 bg-blue-600 rounded"></span>
                            Aadhaar Documents
                          </h3>
                          <div className="grid grid-cols-2 gap-4">
                            {selectedApplicant.aadhaarImages.map(
                              (img, index) => (
                                <div key={index} className="relative group">
                                  <div className="bg-gray-100 rounded-lg p-2 border-2 border-gray-200">
                                    <img
                                      src={getImageUrl(img)}
                                      alt={`Aadhaar ${index + 1}`}
                                      className="w-full h-48 object-cover rounded-lg"
                                    />
                                  </div>
                                  <button
                                    onClick={() =>
                                      handleViewAadhaar(getImageUrl(img))
                                    }
                                    className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all flex items-center gap-1"
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                      />
                                    </svg>
                                    View Full Size
                                  </button>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-600 rounded"></span>
                        Education Details
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-xs font-semibold text-gray-600 mb-2">
                            SSC
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {selectedApplicant.education?.ssc?.score}
                          </p>
                          <p className="text-sm text-gray-600">
                            Year: {selectedApplicant.education?.ssc?.year}
                          </p>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <p className="text-xs font-semibold text-gray-600 mb-2">
                            HSC
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {selectedApplicant.education?.hsc?.score}
                          </p>
                          <p className="text-sm text-gray-600">
                            Year: {selectedApplicant.education?.hsc?.year}
                          </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <p className="text-xs font-semibold text-gray-600 mb-2">
                            Graduation
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {selectedApplicant.education?.graduation?.degree ||
                              "Not Provided"}
                          </p>
                          {selectedApplicant.education?.graduation?.year && (
                            <p className="text-sm text-gray-600">
                              Year:{" "}
                              {selectedApplicant.education.graduation.year}
                            </p>
                          )}
                        </div>
                        <div className="bg-pink-50 p-4 rounded-lg">
                          <p className="text-xs font-semibold text-gray-600 mb-2">
                            Post Graduation
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            {selectedApplicant.education?.postGraduation
                              ?.degree || "Not Provided"}
                          </p>
                          {selectedApplicant.education?.postGraduation
                            ?.year && (
                            <p className="text-sm text-gray-600">
                              Year:{" "}
                              {selectedApplicant.education.postGraduation.year}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {selectedApplicant.awardsReceived && (
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                          <span className="w-1 h-6 bg-yellow-600 rounded"></span>
                          Awards & Achievements
                        </h3>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.awardsReceived}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {selectedApplicant.type === "scholarship" && (
                  <div className="space-y-6">
                    {/* ================= PERSONAL INFO ================= */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-blue-600 rounded"></span>
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Full Name
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.fullName}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Email
                          </p>
                          <p className="text-sm text-gray-800 break-all">
                            {selectedApplicant.email}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Mobile
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.mobile}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Date of Birth
                          </p>
                          <p className="text-sm text-gray-800">
                            {formatDate(selectedApplicant.dob)}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Gender
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.gender}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Kokan Region
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.kokanRegion}
                          </p>
                        </div>

                        <div >
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Are you Hafiz e Quran? *
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.hafizEQuran}
                          </p>
                        </div>
                        <div className="sm:col-span-2">
                          <p className="text-xs font-semibold text-gray-500 mb-1">
                            Address
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ================= ACADEMIC DETAILS ================= */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-indigo-600 rounded"></span>
                        Academic Details
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-blue-50 p-4 rounded-lg">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            10th School
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.tenthSchoolName}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            10th Board
                          </p>
                          <p className="text-sm text-gray-800 uppercase">
                            {selectedApplicant.tenthBoard}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            10th Percentage
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.tenthPercentage}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            11th College
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.eleventhCollegeName}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            11th Stream
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.eleventhStream}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            11th Percentage
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.eleventhPercentage}
                          </p>
                        </div>

                        {/* <div>
          <p className="text-xs font-semibold text-gray-600 mb-1">12th College</p>
          <p className="text-sm text-gray-800">{selectedApplicant.twelfthCollegeName}</p>
        </div> */}

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            12th Stream
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.twelfthStream}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            12th Percentage
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.twelfthPercentage}
                          </p>
                        </div>

                        <div className="sm:col-span-2">
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Career Path
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.careerPath}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ================= ACTIVITIES ================= */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-green-600 rounded"></span>
                        Background Activities
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {selectedApplicant.onlineCourses && (
                          <span className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm">
                            Online Courses
                          </span>
                        )}
                        {selectedApplicant.codingPractice && (
                          <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-sm">
                            Coding Practice
                          </span>
                        )}
                        {selectedApplicant.workshops && (
                          <span className="px-3 py-1.5 bg-purple-100 text-purple-800 rounded-full text-sm">
                            Workshops
                          </span>
                        )}
                        {selectedApplicant.noneButInterested && (
                          <span className="px-3 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm">
                            Interested to Learn
                          </span>
                        )}
                      </div>
                    </div>

                    {/* ================= FAMILY ================= */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-purple-600 rounded"></span>
                        Family Background
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-purple-50 p-4 rounded-lg">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Father Name
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.fatherName}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Father Occupation
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.fatherOccupation}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Father Income
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.fatherIncome}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Mother Name
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.motherName}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Mother Occupation
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.motherOccupation}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Mother Income
                          </p>
                          <p className="text-sm text-gray-800">
                            {selectedApplicant.motherIncome}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            First Graduate
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.firstGraduate}
                          </p>
                        </div>

                        {/* <div>
          <p className="text-xs font-semibold text-gray-600 mb-1">Orphan</p>
          <p className="text-sm text-gray-800 capitalize">{selectedApplicant.isOrphan}</p>
        </div> */}
                      </div>
                    </div>

                    {/* ================= COUNSELLING ================= */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-pink-600 rounded"></span>
                        Counselling Preferences
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-pink-50 p-4 rounded-lg">
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Time
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.counsellingTime}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Mobile Number
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.counsellingMobile}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Language
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.counsellingLanguage}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-gray-600 mb-1">
                            Mobile Owner
                          </p>
                          <p className="text-sm text-gray-800 capitalize">
                            {selectedApplicant.mobileOwner}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* ================= MOTIVATION ================= */}
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-yellow-600 rounded"></span>
                        Motivation
                      </h3>

                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-800 leading-relaxed">
                          {selectedApplicant.motivation}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AADHAAR IMAGE MODAL */}
      {showAadhaarModal && selectedAadhaarImage && (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-20 pb-20">
            <div
              className="fixed inset-0 transition-opacity bg-black bg-opacity-90"
              onClick={closeAadhaarModal}
            ></div>

            <div className="relative z-10 max-w-6xl max-h-[85vh] w-full">
              <button
                onClick={closeAadhaarModal}
                className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors bg-red-600 hover:bg-red-700 rounded-full p-2.5 shadow-2xl"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <img
                src={selectedAadhaarImage}
                alt="Aadhaar Document"
                className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
