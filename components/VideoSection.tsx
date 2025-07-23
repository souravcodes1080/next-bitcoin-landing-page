"use client"
import React, { useRef, useState } from "react";

function VideoSection() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const toggleMute = () =>{
        const video = videoRef.current
        if(!video) return;
        video.muted = !video.muted
        
    }
  return (
    <div>
      <div className="bg-black pb-20">
        <h1 className="md:text-5xl sm:text-4xl text-3xl text-center font-semibold pt-20 text-white">
          Ready to break the bank?
        </h1>
        <p className="text-gray-300 text-center pt-5 pb-20 text-xl">
          Watch our Mezofesto.
        </p>
        <video 
        
        ref={videoRef}
        onClick={toggleMute}
          className="w-[70%] mx-auto object-cover rounded-3xl cursor-pointer"
          autoPlay
          muted
          loop
          playsInline
        >
          <source  src="/images/mezo_video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default VideoSection;
