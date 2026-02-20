"use client";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80"
        alt="Bahamas paradise"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-sky-900/80" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center text-white">
        <p className="uppercase tracking-widest text-sky-300 text-sm font-semibold mb-3">
          Stay in the Loop
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
          Get Exclusive Bahamas Deals
        </h2>
        <p className="text-sky-100 mb-10 text-lg">
          Subscribe and receive curated island deals, hidden gems, and early-bird discounts straight to your inbox — no spam, ever.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 px-5 py-4 rounded-full bg-sky-400 text-sky-900 placeholder-sky-700 font-bold focus:outline-none focus:ring-2 focus:ring-sky-300 text-sm"
          />
          <button
            type="submit"
            className="bg-sky-400 hover:bg-sky-300 text-sky-900 font-bold px-7 py-4 rounded-full transition-colors whitespace-nowrap"
          >
            Subscribe Free
          </button>
        </form>

        <p className="mt-5 text-sky-300 text-xs">
          Join 24,000+ travelers already subscribed. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
