"use client";

import { useEffect, useState } from "react";

type LoaderState = "animating" | "fading" | "hidden";

export default function PageLoader() {
  const [state, setState] = useState<LoaderState>("animating");

  useEffect(() => {
    try {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        setState("hidden");
        return;
      }

      // Start fade-out at 2.2s, hide at 3.0s
      const fadeTimer = setTimeout(() => setState("fading"), 2200);
      const hideTimer = setTimeout(() => setState("hidden"), 3000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    } catch {
      setState("hidden");
    }
  }, []);

  if (state === "hidden") return null;

  return (
    <>
      <style>{`
        @keyframes pageloaderFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @keyframes pageloaderDrawPanel {
          from { stroke-dashoffset: 400; opacity: 0; }
          to   { stroke-dashoffset: 0;   opacity: 1; }
        }

        @keyframes pageloaderSlideInCar {
          from { transform: translateX(60px); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }

        @keyframes pageloaderRotateSun {
          from { transform: rotate(0deg);   transform-origin: 155px 38px; }
          to   { transform: rotate(360deg); transform-origin: 155px 38px; }
        }

        @keyframes pageloaderFadeInText {
          from { opacity: 0; letter-spacing: 0.35em; }
          to   { opacity: 1; letter-spacing: 0.2em;  }
        }

        .pageloader-panel {
          stroke-dasharray: 400;
          stroke-dashoffset: 400;
          opacity: 0;
          animation: pageloaderDrawPanel 0.8s ease 0.4s forwards;
        }

        .pageloader-car {
          opacity: 0;
          animation: pageloaderSlideInCar 0.8s ease 0.8s forwards;
        }

        .pageloader-sun-rays {
          transform-origin: 155px 38px;
          animation: pageloaderRotateSun 0.6s linear 1.2s forwards;
        }

        .pageloader-text {
          opacity: 0;
          animation: pageloaderFadeInText 0.6s ease 1.6s forwards;
        }

        .pageloader-svg {
          animation: pageloaderFadeIn 0.4s ease forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ${
          state === "fading" ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden="true"
        role="presentation"
      >
        <div className="flex flex-col items-center gap-6">
          {/* Inline SVG: solar panel + electric car + sun */}
          <svg
            width="220"
            height="160"
            viewBox="0 0 220 160"
            xmlns="http://www.w3.org/2000/svg"
            className="pageloader-svg"
            aria-hidden="true"
          >
            {/* ── Solar panel ── */}
            {/* Panel body */}
            <rect
              x="20"
              y="20"
              width="120"
              height="80"
              rx="4"
              fill="#0d2e5c"
              className="pageloader-panel"
              stroke="#1a6fd4"
              strokeWidth="2"
            />
            {/* Horizontal grid lines */}
            <line x1="20" y1="46.7" x2="140" y2="46.7" stroke="#1a6fd4" strokeWidth="1.5" className="pageloader-panel" />
            <line x1="20" y1="73.3" x2="140" y2="73.3" stroke="#1a6fd4" strokeWidth="1.5" className="pageloader-panel" />
            {/* Vertical grid lines */}
            <line x1="50"  y1="20" x2="50"  y2="100" stroke="#1a6fd4" strokeWidth="1.5" className="pageloader-panel" />
            <line x1="80"  y1="20" x2="80"  y2="100" stroke="#1a6fd4" strokeWidth="1.5" className="pageloader-panel" />
            <line x1="110" y1="20" x2="110" y2="100" stroke="#1a6fd4" strokeWidth="1.5" className="pageloader-panel" />
            {/* Panel mount / stand */}
            <line x1="80" y1="100" x2="80" y2="115" stroke="#1a6fd4" strokeWidth="3" className="pageloader-panel" />
            <line x1="65" y1="115" x2="95" y2="115" stroke="#1a6fd4" strokeWidth="3" className="pageloader-panel" />

            {/* ── Sun (top-right) ── */}
            {/* Rays — rotate group */}
            <g className="pageloader-sun-rays">
              <line x1="155" y1="20" x2="155" y2="13" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="155" y1="56" x2="155" y2="63" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="138" y1="38" x2="131" y2="38" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="172" y1="38" x2="179" y2="38" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="143" y1="25" x2="138" y2="20" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="167" y1="51" x2="172" y2="56" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="167" y1="25" x2="172" y2="20" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
              <line x1="143" y1="51" x2="138" y2="56" stroke="#f5a623" strokeWidth="2" strokeLinecap="round" />
            </g>
            {/* Sun core */}
            <circle cx="155" cy="38" r="12" fill="#f5a623" />

            {/* ── Electric car (slides in from right) ── */}
            <g className="pageloader-car">
              {/* Car body */}
              <rect x="25" y="120" width="140" height="28" rx="6" fill="#3a9a3a" />
              {/* Cabin / roof */}
              <path
                d="M55 120 Q65 103 85 100 L125 100 Q145 103 155 120 Z"
                fill="#2d7a2d"
              />
              {/* Windscreen */}
              <path
                d="M62 120 Q70 107 88 105 L120 105 Q136 107 144 120 Z"
                fill="#a8d5a2"
                opacity="0.7"
              />
              {/* Front wheel */}
              <circle cx="60"  cy="148" r="12" fill="#1a1a1a" />
              <circle cx="60"  cy="148" r="6"  fill="#555555" />
              {/* Rear wheel */}
              <circle cx="135" cy="148" r="12" fill="#1a1a1a" />
              <circle cx="135" cy="148" r="6"  fill="#555555" />
              {/* EV charging port indicator */}
              <rect x="25" y="130" width="6" height="10" rx="2" fill="#4dbf4d" />
              {/* Headlight */}
              <rect x="163" y="126" width="8" height="6" rx="2" fill="#fffde7" />
              {/* Tail light */}
              <rect x="19" y="126" width="6" height="6" rx="2" fill="#e53935" />
            </g>
          </svg>

          {/* Wordmark */}
          <span
            className="pageloader-text text-xl font-bold text-[#1a6fd4]"
            style={{ letterSpacing: "0.2em" }}
          >
            HIGH BREED NETWORK
          </span>
        </div>
      </div>
    </>
  );
}
