import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-900 to-teal-700 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} />
                contact@healthfirst.app
              </li>
              <li className="flex items-center gap-2 hover:text-white transition">
                <Phone size={16} />
                +91 93098 39597
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Mon–Sat: 9 AM – 8 PM
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Our Location (Pune)
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Center for Mental Wellness</li>
              <li>102/201 Housing Society</li>
              <li>Sant Tukaram Nagar</li>
              <li>Pune – 411021, MH, India</li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Important Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Appointment Booking Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Refund & Cancellation
              </li>
              <li>
                <Link
                  to="/doctor/login"
                  className="text-teal-300 hover:text-white font-medium"
                >
                  Doctor Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Recent Posts
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Post Traumatic Growth
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Understanding Trauma
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-600 mt-10 pt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} HealthFirst. Built with ❤️ using React & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}

export default Footer;