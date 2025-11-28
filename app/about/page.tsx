import Image from 'next/image'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-icida-navy to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About ICIDA Technologies</h1>
          <p className="text-xl text-gray-200">
            Innovation, Quality, and Excellence in DTF Printing Equipment
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-icida-navy">Who We Are</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                ICIDA TECHNOLOGIES is an innovative company specializing in the development
                and manufacturing of advanced professional equipment for the commercial
                printing industry.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With a focus on quality, reliability, and technological innovation, we offer
                solutions such as the DTF Plotter 60cm, available to the Greek and Cypriot market.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are committed to providing high-performance equipment that meets the growing
                demands of the market for digital printing, high-resolution, and long-lasting prints.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/pro2460.jpg"
                alt="ICIDA Equipment"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Greek Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-icida-navy text-center">Ποιοι Είμαστε</h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Η ICIDA TECHNOLOGIES είναι μια καινοτόμα εταιρεία που ειδικεύεται στην ανάπτυξη
              και κατασκευή προηγμένου επαγγελματικού εξοπλισμού για τον χώρο των επαγγελματικών
              εκτυπώσεων.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed text-lg">
              Με έμφαση στην ποιότητα, την αξιοπιστία και την τεχνολογική καινοτομία, προσφέρουμε
              λύσεις όπως τον DTF Plotter 60cm, διαθέσιμο στην ελληνική και κυπριακή αγορά.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              Επικεντρωνόμαστε στην παροχή υψηλής απόδοσης εξοπλισμού που ανταποκρίνεται στις
              αυξανόμενες απαιτήσεις της αγοράς για ψηφιακές εκτυπώσεις, υψηλής ανάλυσης και
              αντοχής στον χρόνο.
            </p>
          </div>
        </div>
      </section>

      {/* Core Functions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-icida-navy">
            Our Core Functions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl mb-4">🔬</div>
              <h3 className="text-xl font-bold mb-4">Research & Development</h3>
              <p className="text-gray-600">
                Continuous innovation to bring cutting-edge DTF printing technology to market.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-4">Manufacturing</h3>
              <p className="text-gray-600">
                High-quality production of DTF large format printers and related equipment.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-xl font-bold mb-4">Customer Support & Training</h3>
              <p className="text-gray-600">
                Comprehensive support and training to ensure customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-icida-navy text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-blue-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Cyprus Office</h3>
              <p className="mb-2">📍 21 Foiliou Pana Street</p>
              <p className="mb-2">1045 Nicosia – Cyprus</p>
              <p className="mb-2">📞 00357 22 108 379</p>
              <p>✉️ info@icida.com.cy</p>
            </div>
            <div className="bg-blue-900 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Greece Office</h3>
              <p className="mb-2">📍 145 Astrους Street</p>
              <p className="mb-2">10442 Kolonos – Athens</p>
              <p>📞 0030 212 2140854</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
