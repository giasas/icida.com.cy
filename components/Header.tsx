import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-icida-navy text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logo.jpg"
              alt="ICIDA Technologies"
              width={50}
              height={50}
              className="rounded"
            />
            <div>
              <h1 className="text-xl font-bold">Icida</h1>
              <p className="text-xs text-gray-300">Technologies</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-icida-yellow transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-icida-yellow transition-colors">
              About
            </Link>
            <Link href="/products" className="hover:text-icida-yellow transition-colors">
              Products
            </Link>
            <Link href="/support" className="hover:text-icida-yellow transition-colors">
              Support
            </Link>
            <Link href="/contact" className="hover:text-icida-yellow transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
