import Link from 'next/link';
import { services, areas, businessInfo } from '../data/areas';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <i className="fas fa-home text-3xl text-blue-400 mr-4"></i>
              <h3 className="text-2xl font-bold">{businessInfo.name}</h3>
            </div>
            <p className="text-gray-300 mb-4 text-lg">{businessInfo.description}</p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt text-red-400 mr-3"></i>
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-phone text-green-400 mr-3"></i>
                <a href={`tel:${businessInfo.phone}`} className="hover:text-yellow-300 transition duration-300">
                  {businessInfo.phone}
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <i className="fas fa-city text-blue-400 mr-3"></i>
                <span>Serving West Covina & Surrounding Areas</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-tools text-blue-400 mr-3"></i>Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"
                  >
                    <i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <i className="fas fa-map text-green-400 mr-3"></i>Service Areas
            </h3>
            <ul className="space-y-3">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas-served/${area.slug}`}
                    className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"
                  >
                    <i className="fas fa-location-dot text-red-400 mr-2 text-sm"></i>
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="mb-8">
            <div className="bg-gray-800 rounded-lg p-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <i className="fas fa-info-circle text-yellow-400 mr-2"></i>
                Disclaimer
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                This site helps homeowners, free of charge, find and connect with service contractors in their area. Before hiring, homeowners should confirm that the contractor meets all licensing and insurance requirements for the job. All contractors operate independently, and this site does not guarantee or stand behind any work they provide. Any people shown in photos or video content are models used for representation only and are not the contractors presented on this site.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">&copy; 2026 West Covina Pest Pros. All rights reserved.</p>
            <div className="flex space-x-6">
              <span className="text-gray-400 flex items-center">
                <i className="fas fa-shield-alt text-green-400 mr-2"></i>Licensed & Insured
              </span>
              <span className="text-gray-400 flex items-center">
                <i className="fas fa-clock text-blue-400 mr-2"></i>24/7 Emergency Service
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Phone Button for Mobile */}
      <a
        href={`tel:${businessInfo.phone}`}
        className="floating-phone fixed bottom-5 right-5 z-[1000] w-16 h-16 bg-blue-600 text-white rounded-full hidden items-center justify-center shadow-lg no-underline animate-pulse"
      >
        <i className="fas fa-phone text-xl"></i>
      </a>
    </footer>
  );
}