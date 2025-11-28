export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">ICIDA Technologies</h3>
            <p className="text-gray-400 text-sm">
              Professional DTF printing equipment for the commercial printing industry.
            </p>
          </div>

          {/* Cyprus */}
          <div>
            <h4 className="font-semibold mb-4">Cyprus</h4>
            <p className="text-gray-400 text-sm">
              21 Foiliou Pana Street<br />
              1045 Nicosia – Cyprus<br />
              📞 00357 22 108 379<br />
              ✉️ info@icida.com.cy
            </p>
          </div>

          {/* Greece */}
          <div>
            <h4 className="font-semibold mb-4">Greece</h4>
            <p className="text-gray-400 text-sm">
              145 Astrους Street<br />
              10442 Kolonos – Athens<br />
              📞 0030 212 2140854
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/products" className="hover:text-white">Products</a></li>
              <li><a href="/support" className="hover:text-white">Support</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 ICIDA Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
