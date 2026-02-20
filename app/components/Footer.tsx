const footerLinks = {
  Destinations: ["Nassau", "Exuma Cays", "Harbour Island", "Bimini", "Eleuthera", "Grand Bahama"],
  Packages: ["Island Hopper", "Luxury Retreat", "Adventure Diver", "Family Fun", "Romantic Getaway"],
  Company: ["About Us", "Careers", "Press", "Partners", "Blog"],
  Support: ["Help Center", "Booking Policy", "Cancellations", "Travel Insurance", "Contact Us"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top */}
        <div className="grid md:grid-cols-5 gap-16 pb-12 border-b border-gray-800">
          {/* Brand */}
          <div className="md:col-span-1 md:pr-10">
            <p className="text-2xl font-bold text-white mb-4 tracking-tight whitespace-nowrap">🐚 BahamasEscape</p>
            <p className="text-sm leading-relaxed">
              Your trusted gateway to the world&apos;s most beautiful archipelago since 2009.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-5">
              {["Instagram", "Facebook", "TikTok", "YouTube"].map((s) => (
                <button
                  key={s}
                  className="w-8 h-8 rounded-full bg-gray-800 hover:bg-sky-600 transition-colors flex items-center justify-center"
                  aria-label={s}
                >
                  <span className="text-xs font-bold text-gray-300">{s[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-sky-400 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 BahamasEscape. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
