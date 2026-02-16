import Link from 'next/link';
import { services, areas, businessInfo } from '../data/areas';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-2xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <i className="fas fa-home text-2xl mr-3 opacity-80"></i>
            <div className="text-2xl font-bold">
              <Link href="/" className="hover:text-yellow-300 transition duration-300">
                West Covina Pest Pros
              </Link>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
              <i className="fas fa-home mr-2"></i>Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
                <i className="fas fa-tools mr-2"></i>Services <i className="fas fa-chevron-down ml-1"></i>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center"
                    >
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>{service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas Dropdown */}
            <div className="relative group">
              <button className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>Areas <i className="fas fa-chevron-down ml-1"></i>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  {areas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/areas-served/${area.slug}`}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center"
                    >
                      <i className="fas fa-location-dot mr-3 text-red-500"></i>{area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Link href="/blog/" className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
              <i className="fas fa-blog mr-2"></i>Blog
            </Link>
            
            <Link href="/pest-control-cost-calculator" className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
              <i className="fas fa-calculator mr-2"></i>Pest Control Cost Calculator
            </Link>
            
            <a href={`tel:${businessInfo.phone}`} className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition duration-300 transform hover:scale-105 shadow-lg flex items-center">
              <i className="fas fa-phone mr-2"></i>{businessInfo.phone}
            </a>
          </nav>
          <div className="md:hidden">
            <a href={`tel:${businessInfo.phone}`} className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center">
              <i className="fas fa-phone mr-2"></i>Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}