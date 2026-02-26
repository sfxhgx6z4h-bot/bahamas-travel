import Image from "next/image";

const packages = [
  {
    name: "Island Hopper",
    duration: "5 Days / 4 Nights",
    price: "$1,299",
    img: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    includes: ["Round-trip flights", "4-star hotel", "Island ferry passes", "Breakfast daily"],
    badge: "Best Value",
    badgeColor: "bg-amber-400 text-amber-900",
  },
  {
    name: "Luxury Cay Retreat",
    duration: "7 Days / 6 Nights",
    price: "$3,499",
    img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    includes: ["Private villa", "Personal butler", "Yacht day trip", "All meals included"],
    badge: "Most Popular",
    badgeColor: "bg-sky-500 text-white",
  },
  {
    name: "Adventure Diver",
    duration: "6 Days / 5 Nights",
    price: "$2,199",
    img: "https://plus.unsplash.com/premium_photo-1661894232140-73d96a67731b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    includes: ["PADI dive certification", "5 guided dives", "Snorkel tours", "Airport transfers"],
    badge: "Adventure",
    badgeColor: "bg-emerald-500 text-white",
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sky-500 uppercase tracking-widest text-sm font-semibold mb-2">
            Curated Experiences
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Travel Packages
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            All-inclusive packages designed so you can relax from the moment you&nbsp;arrive.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52">
                <Image src={pkg.img} alt={pkg.name} fill className="object-cover" />
                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeColor}`}>
                  {pkg.badge}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                <p className="text-sky-500 text-sm font-medium mt-1">{pkg.duration}</p>

                <ul className="mt-4 space-y-2 flex-1">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-sky-500 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a href="tel:2679389705" className="block w-full text-center bg-sky-500 hover:bg-sky-600 text-white font-bold px-5 py-3 rounded-full transition-colors">
                    Call to book now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
