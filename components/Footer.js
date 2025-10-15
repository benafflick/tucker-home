export default function Footer() {
  return (
    <footer className="bg-[#F5EBDD] text-gray-700 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + tagline */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
            <img
              src="/logo.png"
              alt="Tucker Home Renovations LLC"
              className="w-10 h-10 object-contain"
            />
            <h2 className="text-lg font-semibold">
              Tucker Home Renovations LLC
            </h2>
          </div>
          <p className="text-sm text-gray-600">
            Elevating homes with timeless design and modern craftsmanship.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-md font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-[#B48B5E]">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#B48B5E]">
                Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#B48B5E]">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#B48B5E]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-md font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 53B Buena Vista Rdg, Marion, NC 28752</p>
          <p className="text-sm">✉️ info@tuckerhomes.com</p>
          <p className="text-sm">📞 +1 (623) 265-4875</p>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-8 pt-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Tucker Home Renovations LLC. All rights
        reserved.
      </div>
    </footer>
  );
}
