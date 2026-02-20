import Image from "next/image";

const destinations = [
  {
    name: "Nassau",
    tagline: "Capital vibes & colonial charm",
    img: "https://images.unsplash.com/photo-1617339860647-358f07e44823?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlight: "City & Culture",
  },
  {
    name: "Exuma Cays",
    tagline: "Swim with friendly pigs",
    img: "https://images.unsplash.com/photo-1487251918058-8c9ee71607dd?q=80&w=642&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlight: "Wildlife",
  },
  {
    name: "Harbour Island",
    tagline: "Famous pink sand beaches",
    img: "https://media.istockphoto.com/id/1469922664/photo/sea-surface-aerial-view-bird-eye-view-photo-of-waves-and-water-surface-texture-amazing-beach.webp?a=1&b=1&s=612x612&w=0&k=20&c=oN8lihzSxzK7XyCWp97Hbbd-D-MxxzdpyjYyGMqbBRk=",
    highlight: "Beach",
  },
  {
    name: "Bimini",
    tagline: "Diving & deep-sea fishing",
    img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    highlight: "Adventure",
  },
  {
    name: "Eleuthera",
    tagline: "Untouched natural beauty",
    img: "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
    highlight: "Nature",
  },
  {
    name: "Grand Bahama",
    tagline: "Reefs, caves & snorkeling",
    img: "https://images.unsplash.com/photo-1719958129558-1c94272a9de4?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    highlight: "Snorkeling",
  },
];

export default function Destinations() {
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
            From vibrant Nassau to secluded atolls, each island tells its own story.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div
              key={d.name}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="relative h-72">
                <Image
                  src={d.img}
                  alt={d.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
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
                <span className="inline-block mt-3 text-sky-300 text-sm font-semibold group-hover:underline">
                  Explore →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
