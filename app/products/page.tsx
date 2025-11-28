import Image from 'next/image'

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-icida-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-gray-200">
            Professional DTF printing equipment and supplies
          </p>
        </div>
      </section>

      {/* DTF Printers */}
      <section className="py-20" id="printers">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-icida-navy">
            CHAMELEON DTF Printers
          </h2>

          {/* Pro2460 */}
          <div className="grid md:grid-cols-2 gap-12 mb-16" id="pro2460">
            <div className="relative h-96">
              <Image
                src="/images/pro2460.jpg"
                alt="CHAMELEON DTF Pro2460"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">CHAMELEON DTF Pro2460</h3>
              <p className="text-gray-700 mb-4 text-lg">
                Professional large format 60cm DTF printer for high-volume commercial printing.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold mb-3">Specifications:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Print Width:</strong> Maximum media width 60cm/24 inches</li>
                  <li>• <strong>Print Heads:</strong> CMYK Print head with 4 Channels | DMX heads per channel</li>
                  <li>• <strong>Printing Resolution:</strong> 2880 x 1440 dpi  | 1440 x 1440 | 720 x 720</li>
                  <li>• <strong>Colors:</strong> CMYK + 4 White + Varnish</li>
                  <li>• <strong>Software:</strong> ICIDA DTF Pro lite</li>
                  <li>• <strong>Ink Cartridges:</strong> 750ml Refillable cartridges</li>
                  <li>• <strong>Power:</strong> 110Kg | W 72 H 140 X D5 1 310 cm</li>
                  <li>• <strong>Working Conditions:</strong> Operating temperature: 15°C - 35°C | Relative humidity: 30-70%</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  ✓ Colour Accura
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                  ✓ ICC Profiles
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>Included:</strong> Inks (1000ml) | A3 Films & Powder | WhiterIp7 Print Software
              </p>
            </div>
          </div>

          {/* Pro1130 */}
          <div className="grid md:grid-cols-2 gap-12" id="pro1130">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold mb-4">CHAMELEON DTF Pro1130</h3>
              <p className="text-gray-700 mb-4 text-lg">
                Compact and reliable small format DTF printer, perfect for small businesses and startups.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4">
                <h4 className="font-bold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reliable CMYK printing</li>
                  <li>• Small footprint - perfect for limited spaces</li>
                  <li>• High-resolution output</li>
                  <li>• Auto powder and pre-treat system</li>
                  <li>• WhiterIp7 Print Software included</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                  ✓ Colour Accura
                </span>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-semibold">
                  ✓ ICC Profiles
                </span>
              </div>
              <p className="text-gray-600 mb-6">
                <strong>Included:</strong> Inks (1000ml) | A3 Films & Powder | WhiterIp7 Print Software
              </p>
            </div>
            <div className="relative h-96 order-1 md:order-2">
              <Image
                src="/images/pro1130.jpg"
                alt="CHAMELEON DTF Pro1130"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section className="py-20 bg-gray-50" id="accessories">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-icida-navy">Accessories & Equipment</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smoke Purifier */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/smoke-purifier.jpg"
                  alt="Smoke Dust Purifier"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Smoke Dust Purifier</h3>
                <ul className="text-gray-600 space-y-1 text-sm mb-4">
                  <li>• Enhanced partition and purification combination</li>
                  <li>• To separate fiber, dust and oily smoke in the air</li>
                  <li>• High-efficiency filter fully purifies micro-particles</li>
                  <li>• 4 fan levels</li>
                </ul>
              </div>
            </div>

            {/* Powder Shaker */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/powder-shaker.jpg"
                  alt="Compact Size Powder Shaker Machine"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Compact Size Powder Shaker Machine</h3>
                <ul className="text-gray-600 space-y-1 text-sm mb-4">
                  <li>• 60/64cm</li>
                  <li>• Hot melt powder and PET film</li>
                  <li>• Auto powder recycling system</li>
                  <li>• Compact size</li>
                  <li>• 2 heating zones</li>
                </ul>
              </div>
            </div>

            {/* Digital Ribbon Printer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 flex items-center justify-center h-64 bg-gray-100">
                <div className="text-6xl">🖨️</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Digital Ribbon Printer D-4032</h3>
                <p className="text-gray-600 text-sm mb-4">
                  104mm printing width with automatic cutter for professional ribbon printing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consumables */}
      <section className="py-20" id="inks">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-icida-navy">Inks, Films & Powders</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* DTF Inks */}
            <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-400 p-8 rounded-lg text-white">
              <div className="relative h-48 mb-4">
                <Image
                  src="/images/dtf-inks.jpg"
                  alt="DTF Pro Inks"
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">DTF Pro Inks</h3>
              <p className="mb-4">Premium quality pigment inks available in:</p>
              <ul className="space-y-2">
                <li>✓ Black</li>
                <li>✓ Cyan</li>
                <li>✓ Magenta</li>
                <li>✓ Yellow</li>
                <li>✓ White</li>
              </ul>
              <p className="mt-4 text-sm">
                Available in 110ml and 1L bottles. 15% lighter feeling versus other DTF inks.
              </p>
            </div>

            {/* DTF Films */}
            <div className="bg-white border-4 border-icida-navy p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-icida-navy">DTF Films</h3>
              <p className="text-gray-700 mb-4">OEKO-TEX certified, Made in EU</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ A3 Sheets (100 pack) - Cool peel</li>
                <li>✓ 30cm Roll</li>
                <li>✓ 33cm Roll</li>
                <li>✓ 45cm Roll</li>
                <li>✓ 60cm Roll</li>
              </ul>
            </div>

            {/* DTF Powder */}
            <div className="bg-white border-4 border-icida-yellow p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-icida-navy">DTF Powder</h3>
              <p className="text-gray-700 mb-4">
                OEKO-TEX ECOPASSPORT 24EP00059<br />
                Made in EU
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ White 150 PTU (1kg bag)</li>
                <li>✓ Black (1kg bag)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-icida-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Need Help Choosing the Right Equipment?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our team is ready to help you find the perfect solution for your business.
          </p>
          <a
            href="/contact"
            className="inline-block bg-icida-yellow text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
