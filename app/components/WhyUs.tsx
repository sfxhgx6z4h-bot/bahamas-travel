import Image from "next/image";

const features = [
  {
    icon: "🏝️",
    title: "Exclusive Island Access",
    desc: "We partner with private resorts and local boat captains to take you places other agencies can't.",
  },
  {
    icon: "🤿",
    title: "Expert Local Guides",
    desc: "Born-and-raised Bahamian guides who know every hidden cove, reef, and restaurant worth visiting.",
  },
  {
    icon: "🛡️",
    title: "Fully Insured Travel",
    desc: "Comprehensive travel protection so you can explore with complete peace of mind.",
  },
  {
    icon: "💬",
    title: "24/7 Concierge Support",
    desc: "A real human available around the clock before, during, and after your trip.",
  },
  {
    icon: "♻️",
    title: "Eco-Responsible Tourism",
    desc: "We offset carbon emissions and support local reef conservation projects on every booking.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "Find the same package cheaper elsewhere and we'll match it — no questions asked.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — image stack */}
          <div className="relative h-[520px] hidden lg:block">
            <div className="absolute top-0 left-0 w-72 h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&q=80"
                alt="Crystal clear Bahamas water"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-80 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://plus.unsplash.com/premium_photo-1675802755792-a7cfd346b5be?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Bahamas boat tour"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right — text */}
          <div>
            <p className="text-sky-500 uppercase tracking-widest text-sm font-semibold mb-2">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              We Make Paradise <span className="text-sky-500">Effortless</span>
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed">
              From the moment you dream of the Bahamas to the day you fly home sunburnt and smiling,
              we handle every detail so your only job is to enjoy it.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <span className="text-3xl">{f.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
