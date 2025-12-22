import { FaPhoneAlt, FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt} from "react-icons/fa";

export default function footer() {
  return (
    <footer className="bg-[#fffaf3] text-[#4b2e05] border-t border-[#cbb89d]">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div>
          <img src="./src/assets/header logo.png" alt="Logo" className="w-32 mb-4" />
          <div className="flex space-x-4 mt-3 text-lg">
            <a href="https://www.linkedin.com/company/govardhanecovillage"><FaLinkedin /></a>
            <a href="https://www.facebook.com/govardhanecovillage/"><FaFacebook /></a>
            <a href="https://www.instagram.com/govardhan_ecovillage/#"><FaInstagram /></a>
            <a href="https://www.youtube.com/c/govardhanecovillage"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">WELLNESS</h3>
          <ul className="space-y-1">
            <li>Yoga</li>
            <li>Ayurveda</li>
            <li>Sound Healing</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">EXPERIENCES</h3>
          <ul className="space-y-1">
            <li>Living</li>
            <li>Day Visit</li>
            <li>Engage</li>
            <li>Events</li>
            <li>Samskaras</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">SPIRITUALITY</h3>
          <ul className="space-y-1">
            <li>Residential Courses</li>
            <li>Certificate Courses</li>
            <li>Kids & Teen Camps</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">SUSTAINABILITY</h3>
          <ul className="space-y-1">
            <li>Initiatives</li>
            <li>Tours</li>
            <li>Join the Team</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#cbb89d] my-4 mx-auto"></div>

      {/* Contact Section */}
      <div className="text-center space-y-4 pb-3">
        <p className="text-sm font-medium">CONTACT US</p>
        <p className="text-xs">Office & Call Timings: 9:00 am to 7:00 pm IST</p>

        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
          <div className="bg-[#f8eee1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaPhoneAlt className="text-[#4b2e05]" />
            <span>For Room Booking: +91 92265 16922 / 23</span>
          </div>

          <div className="bg-[#f8eee1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaWhatsapp className="text-[#4b2e05]" />
            <span>Day Visit (Paid): +91 92265 16910</span>
          </div>

          <div className="bg-[#f8eee1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaWhatsapp className="text-[#4b2e05]" />
            <span>Day Visit (Free Tour): +91 99200 55993</span>
          </div>

          <div className="bg-[#f8eee1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaWhatsapp className="text-[#4b2e05]" />
            <span>Yoga & Sound Healing: +91 92265 16906</span>
          </div>

          <div className="bg-[#f8eee1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaPhoneAlt className="text-[#4b2e05]" />
            <span>Ayurveda: +91 96079 38952</span>
          </div>

          <div className="bg-[#f8eee1] px-4 py-2 rounded-md flex items-center space-x-2">
            <FaPhoneAlt className="text-[#4b2e05]" />
            <span>Sustainability: +91 92265 16929</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#cbb89d] my-4 mx-auto"></div>

      {/* Address */}
      <div className="text-center mt-8 text-sm">
        <p className="font-semibold">GOVARDHAN ECOVILLAGE</p>
        <p>Galtare, P.O. Hamrapur, Wada (Taluka), Palghar (District) - 421 303, Maharashtra, India</p>
        <a href="#" className="flex items-center justify-center text-green-700 font-medium hover:underline mt-1">
            <FaMapMarkerAlt className="mr-2 text-green-700" />
            How to reach GEV
        </a>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#cbb89d] mt-8 pt-4 text-center text-xs text-gray-600 pb-6">
        <p>© 2024, Govardhan Ecovillage. All Rights Reserved</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}
