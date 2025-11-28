import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-icida-navy to-blue-900 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Professional DTF Printing Solutions
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Advanced equipment for the commercial printing industry.
                High-resolution, long-lasting prints with the CHAMELEON DTF series.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/products"
                  className="bg-icida-yellow text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
                >
                  View Products
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-icida-navy transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/pro2460.jpg"
                alt="CHAMELEON DTF Pro2460"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-icida-navy">
            Why Choose ICIDA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4">Quality & Reliability</h3>
              <p className="text-gray-600">
                High-performance equipment built to meet the demanding needs of professional printing.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-4">Technological Innovation</h3>
              <p className="text-gray-600">
                Cutting-edge DTF technology for superior print quality and efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-4">Support & Training</h3>
              <p className="text-gray-600">
                Comprehensive customer support and training to maximize your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-icida-navy">
            Featured Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/pro2460.jpg"
                  alt="CHAMELEON DTF Pro2460"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">CHAMELEON DTF Pro2460</h3>
                <p className="text-gray-600 mb-4">
                  Large format 60cm DTF printer for professional use
                </p>
                <Link
                  href="/products#pro2460"
                  className="text-icida-blue font-semibold hover:text-icida-navy"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/pro1130.jpg"
                  alt="CHAMELEON DTF Pro1130"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">CHAMELEON DTF Pro1130</h3>
                <p className="text-gray-600 mb-4">
                  Compact and reliable DTF printer for small businesses
                </p>
                <Link
                  href="/products#pro1130"
                  className="text-icida-blue font-semibold hover:text-icida-navy"
                >
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-64">
                <Image
                  src="/images/dtf-inks.jpg"
                  alt="DTF Pro Inks"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">DTF Pro Inks</h3>
                <p className="text-gray-600 mb-4">
                  Premium quality inks for vibrant, long-lasting prints
                </p>
                <Link
                  href="/products#inks"
                  className="text-icida-blue font-semibold hover:text-icida-navy"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-icida-navy text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Printing Business?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Contact us today to learn more about our professional DTF printing solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-icida-yellow text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
