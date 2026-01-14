"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [membersOpen, setMembersOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileMembersOpen, setMobileMembersOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleJoinUs = () => {
    if (window.location.pathname === "/") {
      // Already on homepage → scroll manually
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView();
      }
    } else {
      // From another page → navigate to home with hash
      router.push("/#contact");
    }

    // close menus
    setIsOpen(false);
    setAboutOpen(false);
    setMembersOpen(false);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
    setAboutOpen(false);
    setMembersOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-1.5"
          : "bg-white shadow-md py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => handleNavigation("/")}
          >
            <div className="relative">
              <img
                src="/logo.png"
                alt="Kokan Community Forum"
                className={`object-contain transition-transform duration-300 hover:scale-105 ${
                  scrolled ? "h-30 w-30" : "h-28 w-28"
                }`}
              />
            </div>

            <div className="hidden lg:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                Kokan Community Forum
              </h1>
              <p className="text-[14px] text-red-600 font-semibold tracking-wide mt-0.5 text-center">
                World Kokani Day
              </p>
              <p className="text-xs text-gray-500 flex justify-center items-center gap-1 mt-0.5 ">
                <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                Unity
                <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                Education
                <span className="inline-block w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse"></span>
                Social Work
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button
              onClick={() => handleNavigation("/")}
              className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => {
                setAboutOpen(false);
                setMembersOpen(false);
              }}
            >
              <button className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 group flex items-center gap-1">
                About Us
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-green-100 overflow-visible transition-all duration-300 z-50 ${
                  aboutOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {/* <button 
                  onClick={() => handleNavigation('/donors')} 
                  className="w-full block px-6 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Donors</div>
                      <div className="text-xs text-gray-500">Our generous supporters</div>
                    </div>
                  </div>
                </button> */}
                <div className="border-t border-gray-100"></div>
                {/* <button 
                  onClick={() => handleNavigation('/volunteers')} 
                  className="w-full block px-6 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Volunteers</div>
                      <div className="text-xs text-gray-500">Community helpers</div>
                    </div>
                  </div>
                </button> */}
                <div className="border-t border-gray-100"></div>

                {/* Members with Nested Dropdown - Complete Wrapper */}
                <div
                  className="relative"
                  onMouseEnter={() => setMembersOpen(true)}
                  onMouseLeave={() => setMembersOpen(false)}
                >
                  {/* Members Button */}
                  <div className="w-full block px-6 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <div>
                          <div className="font-semibold">Members</div>
                          <div className="text-xs text-gray-500">
                            Our community members
                          </div>
                        </div>
                      </div>
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Nested Members Dropdown */}
                  {membersOpen && (
                    <div className="absolute left-full top-0 w-56 bg-white rounded-lg shadow-xl border border-green-100 overflow-hidden z-50">
                      <button
                        onClick={() => handleNavigation("/committee-members")}
                        className="w-full block px-6 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
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
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          <span className="font-medium">Committee Members</span>
                        </div>
                      </button>
                      <div className="border-t border-gray-100"></div>
                      <button
                        onClick={() => handleNavigation("/supporting-members")}
                        className="w-full block px-6 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3">
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
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          <span className="font-medium">
                            Supporting Members
                          </span>
                        </div>
                      </button>
                    </div>
                  )}
                </div>
                {/* <div className="border-t border-gray-100"></div>
                <button 
                  onClick={() => handleNavigation('/events')} 
                  className="w-full block px-6 py-3 text-left text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <div className="font-semibold">Events</div>
                      <div className="text-xs text-gray-500">Our community events</div>
                    </div>
                  </div>
                </button> */}
              </div>
            </div>

            {/* AI Scholarship Link */}
            <button
              onClick={() => handleNavigation("/ai-scholarship")}
              className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 group"
            >
              Scholarship
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Achievers Award Link */}
            <button
              onClick={() => handleNavigation("/achievers-award")}
              className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 group"
            >
              Achievers Award
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </button>

            {/* Support Link */}
            {/* <button onClick={() => handleNavigation('/support')} className="relative px-4 py-2 text-gray-700 hover:text-green-600 font-medium transition-all duration-200 group">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </button> */}

            <button
              onClick={handleJoinUs}
              className="ml-4 relative overflow-hidden bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-2.5 rounded-full font-medium shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
                Join Us
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-gray-700 hover:text-green-600 focus:outline-none transition-colors duration-200"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-b from-white to-green-50 border-t border-green-100 shadow-inner">
          <div className="px-4 pt-4 pb-6 space-y-1">
            <div className="px-4 pb-3 border-b border-green-100">
              <div className="text-sm font-semibold ml-15 text-gray-800">
                Kokan Community Forum
              </div>
              <div className="text-xs text-red-600 font-semibold text-center">
                World Kokani Day
              </div>
              <div className="text-[10px] justify-center text-gray-500 mt-0.5 flex items-center gap-1">
                <span className="inline-block w-1 h-1 bg-green-600 rounded-full"></span>
                Unity
                <span className="inline-block w-1 h-1 bg-green-600 rounded-full"></span>
                Education
                <span className="inline-block w-1 h-1 bg-green-600 rounded-full"></span>
                Social Work
              </div>
            </div>

            <button
              onClick={() => handleNavigation("/")}
              className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-white hover:text-green-600 hover:pl-6 rounded-lg font-medium transition-all duration-200 hover:shadow-sm"
            >
              Home
            </button>

            {/* Mobile About Us Dropdown */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-white hover:text-green-600 rounded-lg font-medium transition-all duration-200"
              >
                <span>About Us</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileAboutOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-8 pr-4 py-2 space-y-2">
                  {/* Mobile Nested Members Dropdown */}
                  <div>
                    <button
                      onClick={() => setMobileMembersOpen(!mobileMembersOpen)}
                      className="w-full text-left flex items-center justify-between px-4 py-2 text-sm text-gray-600 hover:bg-white hover:text-green-600 rounded-lg transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
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
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span>Members</span>
                      </div>
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${
                          mobileMembersOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        mobileMembersOpen ? "max-h-48" : "max-h-0"
                      }`}
                    >
                      <div className="pl-8 pr-4 py-2 space-y-2">
                        <button
                          onClick={() => handleNavigation("/committee-members")}
                          className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-gray-600 hover:bg-white hover:text-green-600 rounded-lg transition-all duration-200"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                            />
                          </svg>
                          Committee Members
                        </button>
                        <button
                          onClick={() =>
                            handleNavigation("/supporting-members")
                          }
                          className="w-full text-left flex items-center gap-2 px-4 py-2 text-xs text-gray-600 hover:bg-white hover:text-green-600 rounded-lg transition-all duration-200"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          Supporting Members
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <button 
                    onClick={() => handleNavigation('/events')} 
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-white hover:text-green-600 rounded-lg transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Events
                  </button> */}
                </div>
              </div>
            </div>

            {/* Mobile Scholarship Link */}
            <button
              onClick={() => handleNavigation("/ai-scholarship")}
              className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-white hover:text-green-600 hover:pl-6 rounded-lg font-medium transition-all duration-200 hover:shadow-sm"
            >
              Scholarship
            </button>

            {/* Mobile Achievers Award Link */}
            <button
              onClick={() => handleNavigation("/achievers-award")}
              className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-white hover:text-green-600 hover:pl-6 rounded-lg font-medium transition-all duration-200 hover:shadow-sm"
            >
              Achievers Award
            </button>

            {/* Mobile Support Link */}
            {/* <button 
              onClick={() => handleNavigation('/support')} 
              className="w-full text-left block px-4 py-3 text-gray-700 hover:bg-white hover:text-green-600 hover:pl-6 rounded-lg font-medium transition-all duration-200 hover:shadow-sm"
            >
              Support
            </button> */}

            <button
              onClick={handleJoinUs}
              className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-full font-medium shadow-lg shadow-green-200 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
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
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
              Join Us Today
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
