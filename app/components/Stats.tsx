import { Funnel_Display } from "next/font/google";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
});

const stats = [
  { value: "300+", label: "Islands to Explore" },
  { value: "50K+", label: "Happy Travelers" },
  { value: "15+", label: "Years of Experience" },
  { value: "4.9★", label: "Average Rating" },
];

export default function Stats() {
  return (
    <section className={`bg-sky-500 py-12 ${funnelDisplay.className}`}>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-extrabold">{s.value}</p>
            <p className="text-sky-100 text-sm mt-1 font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
