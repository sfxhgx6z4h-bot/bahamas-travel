"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const photos = [
  { src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80", alt: "Beach hammock sunset", span: "col-span-2 row-span-2" },
  { src: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=600&q=80", alt: "Turquoise cove", span: "" },
  { src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80", alt: "Underwater coral reef", span: "" },
  { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", alt: "Pink sand beach", span: "" },
  { src: "https://images.unsplash.com/photo-1586611292717-f828b167408c?w=600&q=80", alt: "Bahamas sailing boat", span: "" },
  { src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80", alt: "Luxury resort pool", span: "" },
  { src: "https://images.unsplash.com/photo-1487251918058-8c9ee71607dd?q=80&w=642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", alt: "Exuma Cays", span: "" },
  { src: "https://images.unsplash.com/photo-1506125840744-167167210587?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFoYW1hc3xlbnwwfHwwfHx8MA%3D%3D", alt: "Bahamas aerial view", span: "" },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), []);

  const next = useCallback(() =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, prev, next]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = activeIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sky-400 uppercase tracking-widest text-sm font-semibold mb-2">
            Visual Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Life in the Bahamas
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {photos.map((p, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${p.span}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={close}
        >
          {/* Image container */}
          <div
            className="relative w-full max-w-5xl max-h-[90vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[80vh]">
              <Image
                src={photos[activeIndex].src.replace(/w=\d+/, "w=1920")}
                alt={photos[activeIndex].alt}
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Caption */}
            <p className="text-center text-gray-300 text-sm mt-3">
              {photos[activeIndex].alt} &nbsp;·&nbsp; {activeIndex + 1} / {photos.length}
            </p>
          </div>

          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/25 rounded-full p-2 transition-colors"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-colors"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
