"use client";

import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

function Ai_Scholarship() {
  const initialFormState = {
  // Personal
  fullName: "",
  dob: "",
  gender: "",
  mobile: "",
  email: "",
  address: "",
  kokanRegion: "",
  hafizEQuran: "",

  // 10th
  tenthSchoolName: "",
  tenthBoard: "",
  tenthPercentage: "",

  // 11th
  eleventhCollegeName: "",
  eleventhBoard: "",
  eleventhStream: "",
  eleventhPercentage: "",

  // 12th
  twelfthCollegeName: "",
  twelfthBoard: "",
  twelfthStream: "",
  twelfthPercentage: "",

  // Career
  careerPath: "",
  motivation: "",
  onlineCourses: false,
  codingPractice: false,
  workshops: false,
  noneButInterested: false,

  // Family
  fatherName: "",
  fatherOccupation: "",
  fatherOccupationText: "",
  fatherIncome: "",
  motherName: "",
  motherOccupation: "",
  motherOccupationText: "",
  motherIncome: "",
  isOrphan: "",
  firstGraduate: "",

  // Counselling
  counsellingTime: "",
  counsellingLanguage: "",
  mobileOwner: "",
  counsellingMobile: "",

  // Declarations
  declaration1: false,
  declaration2: false,
  declaration3: false,
  declaration4: false,
};


  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.motivation.trim().length < 100) {
      alert("Please write at least 100 characters in motivation.");
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/api/ai-scholarship/formData`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      alert("Application submitted successfully!");
      setFormData(initialFormState);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      const errors = error.response?.data?.errors;
      if (errors) {
        alert(errors.join("\n"));
      } else {
        alert("Submission failed. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-36 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl shadow-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-center mb-6">
            <svg
              className="w-20 h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>

          <h1 className="text-4xl font-bold text-center mb-4">
            Scholarship Program 2026
          </h1>
          <p className="text-center text-green-50 text-lg mb-6">
            ₹10 Lakh Scholarship Fund for Kokani Students
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">100</div>
              <div className="text-sm text-green-50">Students</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">₹10,000</div>
              <div className="text-sm text-green-50">Per Student</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-3xl font-bold mb-1">No Exam</div>
              <div className="text-sm text-green-50">Required</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* SMALL BOX */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full md:col-span-1">
              <h3 className="font-semibold text-lg mb-3">
                🎯 Selection Parameters:
              </h3>

              <div className="flex items-center gap-2 mt-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Academic performance: 15%</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">Financial Need: 15%</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">
                  Extracurricular activities and Community Service: 20%
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <svg
                  className="w-5 h-5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm">One-on-One Zoom Interview: 50%</span>
              </div>
            </div>

            {/* LONG BOX */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 w-full md:col-span-2">
              <h3 className="font-semibold text-lg mb-3">🎯 What You Get:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">₹10,000 Scholarship</span>
                </div>

                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Bachelor of AIML, Computer Science & Cyber Security
                  </span>
                </div>

                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">No Entrance Exam</span>
                </div>

                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">
                    Nexcore Institute of Technology
                  </span>
                </div>

                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">One-to-One Counselling</span>
                </div>

                <div className="flex items-center gap-2">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm">Direct Admission Opportunity</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Application Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              📝 Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name (as per Aadhaar) *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Permanent Address (Village / Taluka / District) *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="2"
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your complete address"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you from Kokan Region? *
                </label>
                <select
                  name="kokanRegion"
                  value={formData.kokanRegion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you Hafiz e Quran? *
                </label>
                <select
                  name="hafizEQuran"
                  value={formData.hafizEQuran}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b border-gray-200">
              🎓 Educational Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h1 className="text-s font-medium text-gray-900 pb-2 mt-5 border-b border-gray-200">
                📝 10th Details
              </h1>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  School Name *
                </label>
                <input
                  type="text"
                  name="tenthSchoolName"
                  value={formData.tenthSchoolName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your school/college name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Board of Education *
                </label>
                <select
                  name="tenthBoard"
                  value={formData.tenthBoard}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select board</option>
                  <option value="state">State Board</option>
                  <option value="cbse">CBSE</option>
                  <option value="icse">ICSE</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  10th Standard Overall Percentage *
                </label>
                <input
                  type="text"
                  name="tenthPercentage"
                  value={formData.tenthPercentage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 85%"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h1 className="text-s font-medium text-gray-900 pb-2 mt-5 border-b border-gray-200">
                📝 11th Details
              </h1>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Junior College Name *
                </label>
                <input
                  type="text"
                  name="eleventhCollegeName"
                  value={formData.eleventhCollegeName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your school/college name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Board of Education *
                </label>
                <select
                  name="eleventhBoard"
                  value={formData.eleventhBoard}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select board</option>
                  <option value="state">State Board</option>
                  <option value="cbse">CBSE</option>
                  <option value="icse">ICSE</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stream in 11th *
                </label>
                <select
                  name="eleventhStream"
                  value={formData.eleventhStream}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select stream</option>
                  <option value="arts">Arts</option>
                  <option value="commerce">Commerce</option>
                  <option value="science">Science</option>
                  <option value="Vocational">Vocational</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  11th Standard Overall Percentage *
                </label>
                <input
                  type="text"
                  name="eleventhPercentage"
                  value={formData.eleventhPercentage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 85%"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <h1 className="text-s font-medium text-gray-900 pb-2 mt-5 border-b border-gray-200">
                📝 12th Details
              </h1>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Junior College Name *
                </label>
                <input
                  type="text"
                  name="twelfthCollegeName"
                  value={formData.twelfthCollegeName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your school/college name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Board of Education *
                </label>
                <select
                  name="twelfthBoard"
                  value={formData.twelfthBoard}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select board</option>
                  <option value="state">State Board</option>
                  <option value="cbse">CBSE</option>
                  <option value="icse">ICSE</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stream in 12th *
                </label>
                <select
                  name="twelfthStream"
                  value={formData.twelfthStream}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select stream</option>
                  <option value="arts">Arts</option>
                  <option value="commerce">Commerce</option>
                  <option value="science">Science</option>
                  <option value="Vocational">Vocational</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  12th Standard Overall Percentage *
                </label>
                <input
                  type="text"
                  name="twelfthPercentage"
                  value={formData.twelfthPercentage}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="e.g., 85%"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              🎯 Career Interest & Motivation
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Career Path *
                </label>
                <select
                  name="careerPath"
                  value={formData.careerPath}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select your preferred path</option>
                  <option value="ai">
                    Bachelor in Artificial Intelligence & Machine Learning (3
                    years)
                  </option>
                  <option value="cybersecurity">
                    Bachelor in Computer Science (3 years)
                  </option>
                  <option value="datascience">
                    Bachelor in Cyber Security (3 years)
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why are you interested in this field? (100-150 words) *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Share your passion, interest, and goals in this field..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Have you done any of the following?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="onlineCourses"
                      checked={formData.onlineCourses}
                      onChange={handleChange}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Online courses (YouTube / Coursera / Udemy)
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="codingPractice"
                      checked={formData.codingPractice}
                      onChange={handleChange}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Coding practice
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="workshops"
                      checked={formData.workshops}
                      onChange={handleChange}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">
                      Workshops / Seminars
                    </span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="noneButInterested"
                      checked={formData.noneButInterested}
                      onChange={handleChange}
                      className="rounded"
                    />
                    <span className="text-sm text-gray-700">
                      None (but highly interested)
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              👨‍👩‍👧‍👦 Family and Financial Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Name *
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter father's name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Occupation *
                </label>

                {formData.fatherOccupation === "other" ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="fatherOccupationText"
                      value={formData.fatherOccupationText}
                      onChange={handleChange}
                      required
                      placeholder="Please specify occupation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          fatherOccupation: "",
                          fatherOccupationText: "",
                        })
                      }
                      className="text-sm text-green-600 hover:underline"
                    >
                      ← Choose from list
                    </button>
                  </div>
                ) : (
                  <select
                    name="fatherOccupation"
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select occupation</option>
                    <option value="farmer">Farmer</option>
                    <option value="labour">Labour</option>
                    <option value="private">Private Job</option>
                    <option value="government">Government Job</option>
                    <option value="business">Business</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="other">Other</option>
                  </select>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Father's Income *
                </label>
                <select
                  name="fatherIncome"
                  value={formData.fatherIncome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select income range</option>
                  <option value="below2">Below ₹2 Lakh</option>
                  <option value="2-5">₹2–5 Lakh</option>
                  <option value="5-10">₹5–10 Lakh</option>
                  <option value="above10">Above ₹10 Lakh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mother's Name *
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  placeholder="Enter mother's name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mother's Occupation *
                </label>

                {formData.motherOccupation === "other" ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="motherOccupationText"
                      value={formData.motherOccupationText}
                      onChange={handleChange}
                      required
                      placeholder="Please specify occupation"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setFormData({
                          ...formData,
                          motherOccupation: "",
                          motherOccupationText: "",
                        })
                      }
                      className="text-sm text-green-600 hover:underline"
                    >
                      ← Choose from list
                    </button>
                  </div>
                ) : (
                  <select
                    name="motherOccupation"
                    value={formData.motherOccupation}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select occupation</option>
                    <option value="housewife">Housewife</option>
                    <option value="farmer">Farmer</option>
                    <option value="labour">Labour</option>
                    <option value="private">Private Job</option>
                    <option value="government">Government Job</option>
                    <option value="business">Business</option>
                    <option value="self-employed">Self Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="other">Other</option>
                  </select>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mother's Income *
                </label>
                <select
                  name="motherIncome"
                  value={formData.motherIncome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select income range</option>
                  <option value="below2">Below ₹2 Lakh</option>
                  <option value="2-5">₹2–5 Lakh</option>
                  <option value="5-10">₹5–10 Lakh</option>
                  <option value="above10">Above ₹10 Lakh</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Are you an orphan? *
                </label>
                <select
                  name="isOrphan"
                  value={formData.isOrphan}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Graduate in Family? *
                </label>
                <select
                  name="firstGraduate"
                  value={formData.firstGraduate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
          </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                ✅ Commitment & Counselling
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time for Counselling Call *
                  </label>
                  <select
                    name="counsellingTime"
                    value={formData.counsellingTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select time slot</option>
                    <option value="morning">9AM - 10AM</option>
                    <option value="afternoon">10AM - 11AM</option>
                    <option value="evening">11AM - 12PM</option>
                    <option value="morning">2PM - 3PM</option>
                    <option value="afternoon">3PM - 4PM</option>
                    <option value="evening">4PM - 5PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Language Preference for Counselling *
                  </label>
                  <select
                    name="counsellingLanguage"
                    value={formData.counsellingLanguage}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select language</option>
                    <option value="english">English</option>
                    <option value="hindi">Hindi</option>
                    <option value="marathi">Marathi</option>
                    <option value="kokani">Kokani</option>
                    <option value="urdu">Urdu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Number for Counselling *
                  </label>
                  <input
                    type="tel"
                    name="counsellingMobile"
                    value={formData.counsellingMobile}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                {/* Whose number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Whose number is this? *
                  </label>
                  <select
                    name="mobileOwner"
                    value={formData.mobileOwner}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select</option>
                    <option value="self">Self</option>
                    <option value="father">Father</option>
                    <option value="mother">Mother</option>
                    <option value="sibling">Sibling</option>
                    <option value="guardian">Guardian</option>
                  </select>
                </div>
              </div>
              <span className="block mt-4 text-[14px] text-red-500 font-semibold">
                * ALL ACADEMIC RECORDS WHICH ARE SUBMITTED WILL BE VERIFIED WITH
                DOCUMENTS DURING ZOOM MEEETING
              </span>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                📜 Declaration & Acknowledgement
              </h3>
              <div className="space-y-3">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="declaration1"
                    checked={formData.declaration1}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I understand that I will receive a ₹10,000 scholarship if
                    selected, and 100 students will be shortlisted based on
                    academics and interest.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="declaration2"
                    checked={formData.declaration2}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I am willing to attend a one-to-one counselling call before
                    final selection.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="declaration3"
                    checked={formData.declaration3}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    I am aware that I will get direct admission opportunity with
                    industry partner Nexcore Alliance without entrance exam.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="declaration4"
                    checked={formData.declaration4}
                    onChange={handleChange}
                    required
                    className="mt-1"
                  />
                  <span className="text-sm text-gray-700">
                    All information provided by me is true and correct. I
                    understand false information may lead to disqualification.
                  </span>
                </label>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-12 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-105"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">
            For any queries, contact us at:{" "}
            <a
              href="mailto:kokancommunityforumWKD@gmail.comg"
              className="text-gray-600 hover:underline text-sm"
            >
              kokancommunityforumWKD@gmail.com
            </a>
          </p>
          <p className="text-xs mt-2">
            Powered by{" "}
            <span className="font-semibold">Kokan Community Forum</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Ai_Scholarship;
