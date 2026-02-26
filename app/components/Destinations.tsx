"use client";

import Image from "next/image";
import { useState } from "react";

const destinations = [
  {
    name: "Nassau",
    tagline: "Capital vibes & colonial charm",
    img: "https://images.unsplash.com/photo-1617339860647-358f07e44823?q=80&w=774&auto=format&fit=crop",
    highlight: "City & Culture",
    backImg:
      "https://images.unsplash.com/photo-1652575379962-0e0e5c0c25eb?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Walk cobblestone streets lined with pastel colonial buildings, haggle at the famous Nassau Straw Market, and tour 18th-century Fort Fincastle overlooking the harbour. End the day with fresh conch salad by the water.",
  },
  {
    name: "Exuma Cays",
    tagline: "Swim with friendly pigs",
    img: "https://images.unsplash.com/photo-1487251918058-8c9ee71607dd?q=80&w=642&auto=format&fit=crop",
    highlight: "Wildlife",
    backImg:
      "https://images.unsplash.com/photo-1541689221361-ad95003448dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXh1bWElMjBjYXlzfGVufDB8fDB8fHww",
    description:
      "Meet the world-famous swimming pigs at Pig Beach, kayak through emerald sea caves, and discover sandbars that vanish with the tides. The crystal-clear shallows here are unlike anywhere else on earth.",
  },
  {
    name: "Harbour Island",
    tagline: "Famous pink sand beaches",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    highlight: "Beach",
    backImg:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    description:
      "Stroll the legendary 3-mile Pink Sand Beach, one of the world's most photographed shores. Rent a golf cart to explore Dunmore Town's colourful gingerbread cottages and dine at award-winning harbour-side restaurants.",
  },
  {
    name: "Bimini",
    tagline: "Diving & deep-sea fishing",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    highlight: "Adventure",
    backImg:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    description:
      "Follow in Hemingway's wake on world-class deep-sea fishing runs, then dive the mysterious Bimini Road — an ancient underwater rock formation that some call the lost city of Atlantis.",
  },
  {
    name: "Eleuthera",
    tagline: "Untouched natural beauty",
    img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
    highlight: "Nature",
    backImg:
      "https://images.unsplash.com/photo-1575110396888-6872c2a1bc1a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxldXRoZXJhfGVufDB8fDB8fHww",
    description:
      "Stand at the Glass Window Bridge where the deep Atlantic crashes against the turquoise Caribbean in a jaw-dropping collision of colour. Miles of empty white-sand beach await beyond every bend.",
  },
  {
    name: "Grand Bahama",
    tagline: "Reefs, caves & snorkeling",
    img: "https://images.unsplash.com/photo-1719958129558-1c94272a9de4?q=80&w=1933&auto=format&fit=crop",
    highlight: "Snorkeling",
    backImg:
      "https://plus.unsplash.com/premium_photo-1666497934040-ec832d302f13?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhbmQlMjBCYWhhbWF8ZW58MHx8MHx8fDA%3D",
    description:
      "Snorkel the world's third-largest barrier reef and swim through hauntingly beautiful underwater caves in Lucayan National Park, where ancient caverns open directly onto powdery white-sand beaches.",
  },
];

export default function Destinations() {
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <section id="destinations" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sky-500 uppercase tracking-widest text-sm font-semibold mb-2">
            Where to Go
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Top Destinations
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            From vibrant Nassau to secluded atolls, each island tells its own
            story. Hover a card to discover more.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="h-80"
              style={{ perspective: "1000px" }}
            >
              {/* Flip inner */}
              <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out [transform-style:preserve-3d]"
                style={{ transform: flipped === d.name ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                {/* ── Front face ── */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-md [backface-visibility:hidden]">
                  <div className="relative h-full">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  </div>

                  {/* Badge */}
                  <span className="absolute top-4 left-4 bg-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {d.highlight}
                  </span>

                  {/* Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-bold">{d.name}</h3>
                    <p className="text-gray-300 text-sm mt-1">{d.tagline}</p>
                    <button
                      onClick={() => setFlipped(d.name)}
                      className="mt-3 bg-sky-500 hover:bg-sky-400 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer"
                    >
                      Explore →
                    </button>
                  </div>
                </div>

                {/* ── Back face ── */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="relative h-full">
                    <Image
                      src={d.backImg}
                      alt={`${d.name} — discover more`}
                      fill
                      className="object-cover"
                    />
                    {/* Stronger overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                    {/* Top row: badge + back button */}
                    <div className="flex items-center justify-between">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                        {d.highlight}
                      </span>
                      <button
                        onClick={() => setFlipped(null)}
                        className="bg-white/30 hover:bg-white/50 backdrop-blur-sm border border-white/60 text-white text-sm font-bold px-4 py-1.5 rounded-full cursor-pointer transition-colors"
                      >
                        ← Back
                      </button>
                    </div>

                    {/* Bottom: content */}
                    <div>
                      <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed overflow-y-auto max-h-24 pr-4 scrollbar-thin">
                        {d.description}
                      </p>
                      <a
                        href="#packages"
                        onClick={() => setFlipped(null)}
                        className="inline-block mt-4 bg-sky-500 hover:bg-sky-400 transition-colors text-white text-sm font-semibold px-5 py-2 rounded-full"
                      >
                        View Packages
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
