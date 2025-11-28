export default function Support() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-icida-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Customer Support & Training</h1>
          <p className="text-xl text-gray-200">
            We're here to help you succeed
          </p>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-icida-navy">
            Our Support Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-4">Technical Support</h3>
              <p className="text-gray-700 mb-4">
                Our expert technical team is available to help you troubleshoot and resolve any issues with your equipment.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Phone & email support</li>
                <li>✓ Remote assistance</li>
                <li>✓ On-site service (when needed)</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Training Programs</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training to help you get the most out of your ICIDA equipment.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Equipment operation</li>
                <li>✓ Maintenance procedures</li>
                <li>✓ Best practices</li>
                <li>✓ Workflow optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Maintenance & Warranty</h3>
              <p className="text-gray-700 mb-4">
                Regular maintenance and warranty support to keep your equipment running smoothly.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Preventive maintenance</li>
                <li>✓ Spare parts availability</li>
                <li>✓ Warranty coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-icida-navy">
            Resources & Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">📚 User Manuals</h3>
              <p className="text-gray-700 mb-4">
                Detailed documentation for all ICIDA products, including setup guides, operating instructions, and troubleshooting tips.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">🎬 Video Tutorials</h3>
              <p className="text-gray-700 mb-4">
                Step-by-step video guides covering equipment operation, maintenance, and best practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">❓ FAQ</h3>
              <p className="text-gray-700 mb-4">
                Answers to frequently asked questions about our products, services, and DTF printing technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-4">📧 Knowledge Base</h3>
              <p className="text-gray-700 mb-4">
                Searchable database of articles, tips, and solutions to common issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-icida-navy to-blue-900 text-white p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Get Support Now</h2>
            <p className="text-xl text-center mb-8 text-gray-200">
              Our support team is ready to assist you
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Cyprus Support</h3>
                <p className="mb-2">📞 00357 22 108 379</p>
                <p>✉️ info@icida.com.cy</p>
                <p className="text-sm text-gray-300 mt-4">
                  Monday - Friday: 9:00 AM - 5:00 PM (EET)
                </p>
              </div>
              <div className="bg-blue-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Greece Support</h3>
                <p className="mb-2">📞 0030 212 2140854</p>
                <p className="text-sm text-gray-300 mt-4">
                  Monday - Friday: 9:00 AM - 5:00 PM (EET)
                </p>
              </div>
            </div>
            <div className="text-center mt-8">
              <a
                href="/contact"
                className="inline-block bg-icida-yellow text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-icida-navy">
            Software & Drivers
          </h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">ICIDA DTF Pro lite</h3>
                <p className="text-gray-600">Professional DTF printing software</p>
              </div>
              <div className="text-4xl">💻</div>
            </div>
            <p className="text-gray-700 mb-6">
              Our proprietary software is included with all CHAMELEON DTF printers,
              providing advanced color management, ICC profiles, and workflow optimization.
            </p>
            <div className="bg-gray-50 p-4 rounded">
              <h4 className="font-bold mb-2">Features:</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>✓ Colour Accura technology</li>
                <li>✓ ICC Profile support</li>
                <li>✓ Advanced print settings</li>
                <li>✓ Job management</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
