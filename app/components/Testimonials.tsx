const testimonials = [
  {
    name: "Sarah & James",
    location: "New York, USA",
    rating: 5,
    avatar: "SJ",
    color: "bg-sky-500",
    text: "BahamasEscape planned our honeymoon flawlessly. The private villa in Exuma was beyond words — swimming pigs, turquoise water, and the most attentive staff we've ever encountered.",
  },
  {
    name: "Marco Fontana",
    location: "Milan, Italy",
    rating: 5,
    avatar: "MF",
    color: "bg-emerald-500",
    text: "As an avid diver, I had high expectations. The dive guides at Bimini were phenomenal. We saw hammerhead sharks, spotted eagle rays, and a coral wall that took my breath away.",
  },
  {
    name: "Emily Chen",
    location: "Toronto, Canada",
    rating: 5,
    avatar: "EC",
    color: "bg-amber-500",
    text: "Traveled solo for the first time and felt completely safe and looked after. The 24/7 concierge was so helpful. Nassau's pink sand beaches and the local food scene were highlights!",
  },
  {
    name: "The Williams Family",
    location: "London, UK",
    rating: 5,
    avatar: "WF",
    color: "bg-violet-500",
    text: "Five of us including three kids, and everything ran like clockwork. The island hopper package was perfect — enough variety to keep the teens engaged while we parents actually relaxed.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sky-500 uppercase tracking-widest text-sm font-semibold mb-2">
            Traveler Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Don&apos;t take our word for it — hear from the thousands who&apos;ve already fallen in love with the Bahamas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-50 rounded-3xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 text-sky-200" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C5.6 8 2 11.6 2 16s3.6 8 8 8h1v4l6-4h1c4.4 0 8-3.6 8-8s-3.6-8-8-8H10zm12 8c0 2.2-1.8 4-4 4h-1.4L14 21.5V20h-4c-2.2 0-4-1.8-4-4s1.8-4 4-4h12c2.2 0 4 1.8 4 4z" />
              </svg>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">&quot;{t.text}&quot;</p>

              <Stars count={t.rating} />

              <div className="flex items-center gap-3 mt-2">
                <div
                  className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
