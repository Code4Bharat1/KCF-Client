"use client";


import React from "react";
import { useRouter } from "next/navigation";


function Footer() {
  const router = useRouter();


  const handleNavigation = (path) => {
    router.push(path);
  };
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Donors", href: "/donors" },
    { name: "Volunteers", href: "/volunteers" },
    { name: "Committee Members", href: "/committee-members" },
    { name: "Supporting Members", href: "/supporting-members" },
    { name: "Events", href: "/events" },
    { name: "Support", href: "/support" },
    { name: "Contact Us", href: "/#contact" },
  ];


  const programs = [
    { name: "Educational Scholarships",},
    { name: "Youth Development",},
    { name: "Cultural Events",},
    { name: "Social Services",},
    { name: "Community Meetings",},
  ];


  const resources = [
    { name: "Become a Member",},
    { name: "Volunteer Opportunities",},
    { name: "Donate",},
    { name: "Newsletter",},
    { name: "FAQs",},
  ];


  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      href: "#",
      color: "hover:bg-blue-600",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      href: "#",
      color: "hover:bg-pink-600",
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      ),
      href: "#",
      color: "hover:bg-sky-500",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "#",
      color: "hover:bg-blue-700",
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "#",
      color: "hover:bg-red-600",
    },
  ];


  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-gradient-to-b from-green-50 to-white border-t border-green-300 overflow-hidden">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-20 h-20 bg-gradient-to-r rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <img
                  src="/mylogo.png"
                  alt="KCF Logo"
                  className="w-25 h-25 object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML =
                      '<span class="text-2xl font-bold text-white">KCF</span>';
                  }}
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent break-words">
                  Kokan Community Forum
                </h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Strengthening bonds within the Kokan community through unity,
              education, and social service. Together, we build a better
              tomorrow.
            </p>


            {/* Social Links */}
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Follow Us</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    title={social.name}
                    className={`w-10 h-10 bg-white border border-green-200 rounded-lg flex items-center justify-center text-gray-600 ${social.color} hover:text-white transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md flex-shrink-0`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>


          {/* Quick Links */}
          <div className="min-w-0">
            <h3 className="text-gray-800 font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavigation(link.href)}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-500 transition-all duration-300 flex-shrink-0"></span>
                    <span className="break-words">{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>


          {/* Our Programs */}
          <div className="min-w-0">
            <h3 className="text-gray-800 font-bold text-lg mb-6 relative inline-block">
              Our Programs
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a
                    href={program.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-500 transition-all duration-300 flex-shrink-0"></span>
                    <span className="break-words">{program.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Get Involved */}
          <div className="min-w-0">
            <h3 className="text-gray-800 font-bold text-lg mb-6 relative inline-block">
              Get Involved
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-green-600 to-green-500 -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200 flex items-center gap-2 group text-sm md:text-base"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-green-500 transition-all duration-300 flex-shrink-0"></span>
                    <span className="break-words">{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>


            {/* Contact Info with Properly Aligned SVG Icons */}
            <div className="mt-8 space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3 text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>


                <a
                  href="https://www.google.com/maps/place/KOKAN+COMMUNITY+FORUM/@18.9652187,72.8392672,824m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3be7ce37b86a6129:0xb94c884a14337eda!8m2!3d18.9652187!4d72.8418421!16s%2Fg%2F11fsvxnqls"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm leading-5 hover:underline break-words"
                >
                  39/4, Kadil Mulla House, Husain Patel Marg, Mazgaon, Mumbai –
                  400010, India
                </a>
              </div>


              {/* Phone */}
              <div className="flex items-center gap-3 text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0"
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


                <a
                  href="tel:+919820104711"
                  className="text-xs md:text-sm leading-5 hover:underline break-words"
                >
                  +91 98201 04711
                </a>
              </div>


              {/* Email */}
              <div className="flex items-start gap-3 text-gray-600">
                <svg
                  className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
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
                <a
                  href="mailto:kokancommunityforumWKD@gmail.com"
                  className="text-xs md:text-sm leading-5 hover:underline break-all"
                >
                  kokancommunityforumWKD@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Bottom Bar */}
      <div className="border-t border-green-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center gap-4">
            <div className="text-gray-600 text-xs md:text-sm text-center">
              © {currentYear} Kokan Community Forum. All rights reserved.
            </div>


            {/* Managing Director Section */}
            <div className="text-gray-700 text-xs md:text-sm text-center">
              <span className="font-semibold">Managing Director:</span>{" "}
              <a
                href="https://www.facebook.com/awab.habib.fakih/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-medium hover:underline cursor-pointer"
              >
                Awab Habib Fakih
              </a>
            </div>


            {/* Credit Section */}
            <div className="pt-4 border-t border-green-100 text-center w-full">
              <p className="text-gray-600 text-xs md:text-sm px-4">
                <span className="italic block sm:inline">
                  Built By Kokani. For Kokani. Built with purpose.
                </span>{" "}
                <a
                  href="https://www.nexcorealliance.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-semibold transition-colors duration-200 hover:underline break-words"
                >
                  www.nexcorealliance.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Footer;