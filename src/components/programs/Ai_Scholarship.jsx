"use client";

import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000";

function Scholarship() {
  const [formData, setFormData] = useState({
    surname: "",
    firstName: "",
    middleName: "",
    contactNumber: "",
    email: "",
    dateOfBirth: "",
    gender: "",
    currentAddress: "",
    nativeAddress: "",
    aadhaarNumber: "",
    aadhaarImages: [],
    sscScore: "",
    sscYear: "",
    hscScore: "",
    hscYear: "",
    currentCourse: "",
    currentYear: "",
    collegeName: "",
    collegeAddress: "",
    currentCGPA: "",
    reasonForScholarship: "",
    marksheet: null,
  });

  const [aadhaarPreviews, setAadhaarPreviews] = useState([]);
  const [marksheetPreview, setMarksheetPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAadhaarUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + aadhaarPreviews.length > 2) {
      alert("You can only upload maximum 2 images (Front and Back)");
      return;
    }
    const newPreviews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));
    setAadhaarPreviews((prev) => [...prev, ...newPreviews]);
    setFormData((prev) => ({
      ...prev,
      aadhaarImages: [...prev.aadhaarImages, ...files],
    }));
  };

  const removeAadhaarImage = (index) => {
    setAadhaarPreviews((prev) => prev.filter((_, i) => i !== index));
    setFormData((prev) => ({
      ...prev,
      aadhaarImages: prev.aadhaarImages.filter((_, i) => i !== index),
    }));
  };

  const handleMarksheetUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      const isImage = fileType.startsWith("image/");
      const isPDF = fileType === "application/pdf";

      setFormData((prev) => ({ ...prev, marksheet: file }));
      setMarksheetPreview({
        file,
        name: file.name,
        type: fileType,
        preview: isImage ? URL.createObjectURL(file) : null,
        isImage,
        isPDF,
      });
    }
  };

  const removeMarksheet = () => {
    if (marksheetPreview?.preview) {
      URL.revokeObjectURL(marksheetPreview.preview);
    }
    setFormData((prev) => ({ ...prev, marksheet: null }));
    setMarksheetPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Frontend validation: reason length
    if (formData.reasonForScholarship.trim().length < 100) {
      alert("Please write at least 100 characters for the scholarship reason.");
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = new FormData();

      // Append all text fields
      Object.entries(formData).forEach(([key, value]) => {
        if (key !== "aadhaarImages" && key !== "marksheet" && value !== null) {
          payload.append(key, value);
        }
      });

      // Append Aadhaar images (multiple)
      formData.aadhaarImages.forEach((file) => {
        payload.append("aadhaarImages", file);
      });

      // Append marksheet (single)
      if (formData.marksheet) {
        payload.append("marksheet", formData.marksheet);
      }

      console.log("Sending FormData with files...");

      const response = await axios.post(
        `${API_URL}/api/ai-scholarship/formData`,
        payload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Server response:", response.data);
      alert("Application submitted successfully!");

      // Reset form
      setFormData({
        surname: "",
        firstName: "",
        middleName: "",
        contactNumber: "",
        email: "",
        dateOfBirth: "",
        gender: "",
        currentAddress: "",
        nativeAddress: "",
        aadhaarNumber: "",
        aadhaarImages: [],
        sscScore: "",
        sscYear: "",
        hscScore: "",
        hscYear: "",
        currentCourse: "",
        currentYear: "",
        collegeName: "",
        collegeAddress: "",
        currentCGPA: "",
        reasonForScholarship: "",
        marksheet: null,
      });
      setAadhaarPreviews([]);
      setMarksheetPreview(null);
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response?.data?.errors) {
        alert(
          "Please fix the following:\n\n" +
            error.response.data.errors.join("\n")
        );
      } else {
        alert(error.response?.data?.message || "Failed to submit application");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full mb-4">
            <svg
              className="w-10 h-10 text-white"
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            AI Scholarship Application
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Apply for educational financial support to pursue your academic
            dreams
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl border border-green-100 p-8"
        >
          {/* Personal Information */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                1
              </span>
              Personal Information
            </h2>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Surname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter surname"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter middle name"
                />
              </div>
            </div>

            {/* Contact & Personal Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="10-digit mobile number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                2
              </span>
              Address Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Current Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="currentAddress"
                  value={formData.currentAddress}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your current residential address"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Native Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="nativeAddress"
                  value={formData.nativeAddress}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your native/hometown address"
                />
              </div>
            </div>
          </div>

          {/* Aadhaar Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                3
              </span>
              Aadhaar Details
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aadhaar Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="aadhaarNumber"
                  value={formData.aadhaarNumber}
                  onChange={handleInputChange}
                  required
                  pattern="[0-9]{12}"
                  maxLength="12"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter 12-digit Aadhaar number"
                />
              </div>

              {/* Aadhaar Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aadhaar Card Images (Front & Back){" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-all duration-200">
                  <input
                    type="file"
                    id="aadhaar-upload"
                    accept="image/*"
                    multiple
                    onChange={handleAadhaarUpload}
                    className="hidden"
                  />
                  <label htmlFor="aadhaar-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center">
                      <svg
                        className="w-12 h-12 text-gray-400 mb-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p className="text-gray-600 font-medium mb-1">
                        Click to upload Aadhaar images
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG up to 10MB (Max 2 images)
                      </p>
                    </div>
                  </label>
                </div>

                {/* Image Previews */}
                {aadhaarPreviews.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {aadhaarPreviews.map((preview, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={preview.preview}
                          alt={`Aadhaar ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg border-2 border-green-200"
                        />
                        <button
                          type="button"
                          onClick={() => removeAadhaarImage(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                        <p className="text-xs text-gray-600 mt-1 text-center">
                          {index === 0 ? "Front" : "Back"}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                4
              </span>
              Educational Qualifications
            </h2>

            <div className="space-y-6">
              {/* SSC */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  SSC (10th Standard)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      SSC Score/Percentage{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="sscScore"
                      value={formData.sscScore}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 85% or 425/500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Passing <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="sscYear"
                      value={formData.sscYear}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{4}"
                      maxLength="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>

              {/* HSC */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  HSC (12th Standard)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      HSC Score/Percentage{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="hscScore"
                      value={formData.hscScore}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 75% or 450/600"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Passing <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="hscYear"
                      value={formData.hscYear}
                      onChange={handleInputChange}
                      required
                      pattern="[0-9]{4}"
                      maxLength="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>

              {/* Current Education */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Current Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Course/Program <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="currentCourse"
                      value={formData.currentCourse}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., B.Tech, B.Com, BA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Year <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="currentYear"
                      value={formData.currentYear}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select year</option>
                      <option value="1st">1st Year</option>
                      <option value="2nd">2nd Year</option>
                      <option value="3rd">3rd Year</option>
                      <option value="4th">4th Year</option>
                    </select>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    College/Institute Name{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter college/institute name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    College Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="collegeAddress"
                    value={formData.collegeAddress}
                    onChange={handleInputChange}
                    required
                    rows="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter college address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current CGPA/Percentage{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="currentCGPA"
                    value={formData.currentCGPA}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., 8.5 or 75%"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Statement of Purpose */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                5
              </span>
              Statement of Purpose
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Why do you need this scholarship?{" "}
                <span className="text-red-500">*</span>
              </label>
              <textarea
                name="reasonForScholarship"
                value={formData.reasonForScholarship}
                onChange={handleInputChange}
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Share your background, financial situation, challenges, academic goals, and how this scholarship will help you achieve your dreams..."
              />
              <p
                className={`text-sm mt-2 ${
                  formData.reasonForScholarship.length < 100
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {formData.reasonForScholarship.length} / 100 characters
              </p>
            </div>
          </div>

          {/* Document Upload */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                6
              </span>
              Document Upload
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Latest Marksheet <span className="text-red-500">*</span>
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-500 transition-all duration-200">
                <input
                  type="file"
                  id="marksheet-upload"
                  accept="image/*,application/pdf"
                  onChange={handleMarksheetUpload}
                  required
                  className="hidden"
                />
                <label htmlFor="marksheet-upload" className="cursor-pointer">
                  <div className="flex flex-col items-center">
                    <svg
                      className="w-12 h-12 text-gray-400 mb-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="text-gray-600 font-medium mb-1">
                      Click to upload your latest marksheet
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF or Image format (Max 10MB)
                    </p>
                  </div>
                </label>
              </div>

              {/* Marksheet Preview */}
              {marksheetPreview && (
                <div className="mt-4">
                  {marksheetPreview.isImage ? (
                    <div className="relative group">
                      <img
                        src={marksheetPreview.preview}
                        alt="Marksheet Preview"
                        className="w-full h-64 object-contain rounded-lg border-2 border-green-200 bg-gray-50"
                      />
                      <button
                        type="button"
                        onClick={removeMarksheet}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                      <p className="text-xs text-gray-600 mt-2 text-center">
                        {marksheetPreview.name}
                      </p>
                    </div>
                  ) : marksheetPreview.isPDF ? (
                    <div className="flex items-center justify-between bg-green-50 p-4 rounded-lg border-2 border-green-200">
                      <div className="flex items-center gap-3">
                        <svg
                          className="w-10 h-10 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <div>
                          <p className="text-sm text-gray-700 font-semibold">
                            {marksheetPreview.name}
                          </p>
                          <p className="text-xs text-gray-500">PDF Document</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={removeMarksheet}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 hover:bg-red-100 rounded-full"
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
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={
                isSubmitting ||
                formData.reasonForScholarship.trim().length < 100
              }
              className={`group relative px-12 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 transition-all duration-300 ${
                isSubmitting
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:scale-105 active:scale-95"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-3">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Submit Application
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </form>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help? Contact us at{" "}
          <a
            href="mailto:scholarship@kokanforum.org"
            className="text-green-600 hover:underline"
          >
            scholarship@kokanforum.org
          </a>
        </p>
      </div>
    </div>
  );
}

export default Scholarship;
