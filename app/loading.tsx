"use client";

import React from 'react';

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 z-[9999] bg-[var(--color-bg)] flex items-center justify-center overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-heading)]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--color-heading)]/10 rounded-full blur-2xl animate-ping"></div>
        </div>

        {/* Loading Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-6">
          {/* Logo/Name */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-heading)] mb-4 loading-fade-in">
              Hatam Hashemi
            </h1>
            <p className="text-lg text-[var(--color-text)]/80 loading-fade-in-delay">
              Frontend Developer
            </p>
          </div>

          {/* Loading Animation */}
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-4 border-[var(--color-heading)]/20 rounded-full"></div>
              {/* Animated Ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-[var(--color-heading)] rounded-full animate-spin"></div>
              {/* Inner Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--color-heading)] rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="text-sm text-[var(--color-text)]/70">
            <div className="flex items-center justify-center gap-2">
              <span>Loading portfolio</span>
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[var(--color-heading)] rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-[var(--color-heading)] rounded-full animate-bounce delay-100"></div>
                <div className="w-1 h-1 bg-[var(--color-heading)] rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes loading-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes loading-fade-in-delay {
          0%, 30% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .loading-fade-in {
          animation: loading-fade-in 0.8s ease-out forwards;
        }
        
        .loading-fade-in-delay {
          animation: loading-fade-in-delay 1.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}