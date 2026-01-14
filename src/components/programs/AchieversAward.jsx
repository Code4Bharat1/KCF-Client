"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:5000"

function AchieversAward() {
  const [formData, setFormData] = useState({
    surname: '',
    firstName: '',
    middleName: '',
    contactNumber: '',
    email: '',
    currentAddress: '',
    nativeAddress: '',
    aadhaarNumber: '',
    aadhaarImages: [],
    sscScore: '',
    sscYear: '',
    hscScore: '',
    hscYear: '',
    graduation: '',
    graduationYear: '',
    postGraduation: '',
    postGraduationYear: '',
    awardsReceived: ''
  })

  const [aadhaarPreviews, setAadhaarPreviews] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAadhaarUpload = (e) => {
    const files = Array.from(e.target.files)

    if (files.length + aadhaarPreviews.length > 2) {
      alert('You can only upload maximum 2 images (Front and Back)')
      return
    }

    const newPreviews = files.map(file => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name
    }))

    setAadhaarPreviews(prev => [...prev, ...newPreviews])
    setFormData(prev => ({
      ...prev,
      aadhaarImages: [...prev.aadhaarImages, ...files]
    }))
  }

  const removeAadhaarImage = (index) => {
    setAadhaarPreviews(prev => prev.filter((_, i) => i !== index))
    setFormData(prev => ({
      ...prev,
      aadhaarImages: prev.aadhaarImages.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object
      const formDataToSend = new FormData()

      // Append all text fields
      formDataToSend.append('surname', formData.surname)
      formDataToSend.append('firstName', formData.firstName)
      formDataToSend.append('middleName', formData.middleName)
      formDataToSend.append('contactNumber', formData.contactNumber)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('currentAddress', formData.currentAddress)
      formDataToSend.append('nativeAddress', formData.nativeAddress)
      formDataToSend.append('aadhaarNumber', formData.aadhaarNumber)
      formDataToSend.append('sscScore', formData.sscScore)
      formDataToSend.append('sscYear', formData.sscYear)
      formDataToSend.append('hscScore', formData.hscScore)
      formDataToSend.append('hscYear', formData.hscYear)
      formDataToSend.append('graduation', formData.graduation)
      formDataToSend.append('graduationYear', formData.graduationYear)
      formDataToSend.append('postGraduation', formData.postGraduation)
      formDataToSend.append('postGraduationYear', formData.postGraduationYear)
      formDataToSend.append('awardsReceived', formData.awardsReceived)

      // Append image files
      formData.aadhaarImages.forEach((file, index) => {
        formDataToSend.append('aadhaarImages', file)
      })

      console.log("Sending FormData with files...")

      // Send multipart/form-data request
      const response = await axios.post(
        `${API_URL}/api/achievers-award/formData`,
        formDataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )

      alert("Form submitted successfully!")
      console.log("Server response:", response.data)

      // Reset form
      setFormData({
        surname: '',
        firstName: '',
        middleName: '',
        contactNumber: '',
        email: '',
        currentAddress: '',
        nativeAddress: '',
        aadhaarNumber: '',
        aadhaarImages: [],
        sscScore: '',
        sscYear: '',
        hscScore: '',
        hscYear: '',
        graduation: '',
        graduationYear: '',
        postGraduation: '',
        postGraduationYear: '',
        awardsReceived: ''
      })
      setAadhaarPreviews([])

    } catch (error) {
       console.error("Error submitting form:", error);

    // 🔴 DUPLICATE EMAIL HANDLING
    if (error.response?.status === 409) {
      alert("An application with this email already exists.");
      return;
    }

    // 🟠 OTHER BACKEND / NETWORK ERRORS
    alert(
      error.response?.data?.message ||
      "Failed to submit form. Please try again."
    );
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 pt-42 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-600 to-green-500 rounded-full mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Achievers Award Nomination
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nominate outstanding community members who have made significant contributions to society
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl border border-green-100 p-8">

          {/* Personal Information Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">1</span>
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter middle name"
                />
              </div>
            </div>

            {/* Contact Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">2</span>
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your native/hometown address"
                />
              </div>
            </div>
          </div>

          {/* Aadhaar Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">3</span>
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
                  className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter 12-digit Aadhaar number"
                />
              </div>

              {/* Aadhaar Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Aadhaar Card Images (Front & Back) <span className="text-red-500">*</span>
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
                      <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-gray-600 font-medium mb-1">Click to upload Aadhaar images</p>
                      <p className="text-sm text-gray-500">PNG, JPG up to 10MB (Max 2 images)</p>
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
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        <p className="text-xs text-gray-600 mt-1 text-center">
                          {index === 0 ? 'Front' : 'Back'}
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
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">4</span>
              Educational Qualifications
            </h2>

            <div className="space-y-6">
              {/* SSC */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">SSC (10th Standard)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      SSC Score/Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="sscScore"
                      value={formData.sscScore}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>

              {/* HSC */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">HSC (12th Standard)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      HSC Score/Percentage <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="hscScore"
                      value={formData.hscScore}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
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
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>

              {/* Graduation - NOW OPTIONAL */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Graduation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      name="graduation"
                      value={formData.graduation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., B.Tech, B.Com, BA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Graduation
                    </label>
                    <input
                      type="text"
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleInputChange}
                      pattern="[0-9]{4}"
                      maxLength="4"
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>

              {/* Post-Graduation - OPTIONAL */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Post-Graduation </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Degree
                    </label>
                    <input
                      type="text"
                      name="postGraduation"
                      value={formData.postGraduation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., M.Tech, MBA, MA"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Year of Post-Graduation
                    </label>
                    <input
                      type="text"
                      name="postGraduationYear"
                      value={formData.postGraduationYear}
                      onChange={handleInputChange}
                      pattern="[0-9]{4}"
                      maxLength="4"
                      className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="YYYY"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section - NOW OPTIONAL */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">5</span>
              Awards & Achievements 
            </h2>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Awards Received
              </label>
              <textarea
                name="awardsReceived"
                value={formData.awardsReceived}
                onChange={handleInputChange}
                rows="5"
                className="w-full px-4 py-3 text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                placeholder="Please list all awards, recognitions, and achievements received. Include award name, year, and issuing organization."
              />
              <p className="text-sm text-gray-500 mt-2">
                Example: National Science Award 2023, Best Employee Award 2022, etc.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-center pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`group relative px-12 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white rounded-full font-semibold text-lg shadow-xl shadow-green-200 hover:shadow-2xl hover:shadow-green-300 transition-all duration-300 ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:scale-105 active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Submitting...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Submit Nomination
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              )}
            </button>
          </div>
        </form>

        {/* Help Text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help? Contact us at <a href="mailto:awards@kokanforum.org" className="text-green-600 hover:underline">awards@kokanforum.org</a>
        </p>
      </div>
    </div>
  )
}

export default AchieversAward
