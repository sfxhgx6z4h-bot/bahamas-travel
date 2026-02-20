import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt="Bahamas tropical beach paradise"
        fill
        className="object-cover object-bottom"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-sky-300 text-sm font-semibold mb-4">
          Your Dream Getaway Awaits
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
          Discover the <span className="text-sky-400">Bahamas</span>
        </h1>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-lg [text-shadow:0_2px_8px_rgba(0,0,0,0.6)]">
          Turquoise waters, white-sand beaches, and unforgettable sunsets — paradise is closer than you think.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#packages"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
          >
            Explore Packages
          </a>
          <a
            href="#destinations"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105"
          >
            View Destinations
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
