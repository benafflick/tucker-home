import { Home, Hammer, Users, Award } from "lucide-react";

export default function ContactBar() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            <strong>Address:</strong> 53B Buena Vista Rdg, Marion, NC 28752
          </p>
          <p className="text-gray-600 mb-4">
            <strong>Email:</strong> susantucker@tuckerhomesrenovation.com
          </p>
          <p className="text-gray-600 mb-8">
            <strong>Phone:</strong> +1 (623) 265-4875
          </p>

          <div className="text-gray-500 text-sm">
            <p>Business Hours: Mon–Sat, 8 AM – 6 PM</p>
            <p>We respond within 24 hours on weekdays.</p>
          </div>
        </div>

        {/* Company Snapshot */}
        <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Why Choose Tucker Home Renovations LLC
          </h3>
          <ul className="space-y-5">
            <li className="flex items-start gap-4">
              <Home className="text-beige-700 w-6 h-6 mt-1" />
              <p>
                <strong>10+ Years Experience</strong> — delivering modern and
                reliable home renovation solutions.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Hammer className="text-beige-700 w-6 h-6 mt-1" />
              <p>
                <strong>Quality Craftsmanship</strong> — every project is
                handled with precision and attention to detail.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Users className="text-beige-700 w-6 h-6 mt-1" />
              <p>
                <strong>Trusted by Homeowners</strong> — building lasting
                relationships through exceptional service.
              </p>
            </li>
            <li className="flex items-start gap-4">
              <Award className="text-beige-700 w-6 h-6 mt-1" />
              <p>
                <strong>Excellence Guaranteed</strong> — our team stands behind
                every project we complete.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
