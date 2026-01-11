"use client"

import React, { useState } from "react"

function Video() {
  const [activeVideo, setActiveVideo] = useState(null)

  // ✅ Videos list (YouTube + Facebook + Local)
  const videos = [
    {
      id: 1,
      type: "youtube",
      url: "https://youtube.com/shorts/BIB-GrKrXpQ?si=rwlNTqtqmJndLebh",
      title: "KCF Community Program 2024",
      description:
        "Watch our latest community outreach program and scholarship initiatives",
    },
    {
      id: 2,
      type: "youtube",
      url: "https://youtu.be/ooiN8eOdnjc?si=OaArrWL-zyzYBcqT",
      title: "Success Stories from KCF Scholars",
      description:
        "Watch our latest community outreach program and scholarship initiatives",
    },
    {
      id: 3,
      type: "facebook",
      url: "https://www.facebook.com/reel/1483897127077427",
      title: "KCF Community Reel (Facebook)",
      description: "Highlights from our community activities shared on Facebook",
    },
    {
      id: 4,
      type: "local",
      src: "/videos/kcf-event.mp4", // ⬅️ add file later
      title: "KCF Business Stalls Video",
      description: "Recorded moments from our recent community event",
    },
  ]

  // ✅ Extract YouTube ID safely
  const getVideoId = (url) => {
    if (!url) return ""
    if (url.includes("shorts/")) return url.split("shorts/")[1].split("?")[0]
    if (url.includes("youtu.be/")) return url.split("youtu.be/")[1].split("?")[0]
    if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0]
    return ""
  }

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Watch Our Impact
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            See how Kokan Community Forum is transforming lives through education
            and community support
          </p>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video) => {
            const videoId = video.type === "youtube" ? getVideoId(video.url) : null

            return (
              <div
                key={video.id}
                className="bg-white rounded-2xl shadow-xl border border-green-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                {/* Video Container */}
                <div className="aspect-video relative bg-black">

                  {/* 🔴 YOUTUBE */}
                  {video.type === "youtube" && (
                    <>
                      {activeVideo === video.id ? (
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          onClick={() => setActiveVideo(video.id)}
                          className="absolute inset-0 cursor-pointer"
                        >
                          <img
                            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                              <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {/* 🔵 FACEBOOK */}
                  {video.type === "facebook" && (
                    <iframe
                      src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                        video.url
                      )}&show_text=false&width=560`}
                      className="w-full h-full"
                      style={{ border: "none", overflow: "hidden" }}
                      scrolling="no"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}

                  {/* 🟢 LOCAL VIDEO */}
                  {video.type === "local" && (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {video.description}
                  </p>

                  {video.type !== "local" && (
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
                    >
                      Watch on Platform
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
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Video
