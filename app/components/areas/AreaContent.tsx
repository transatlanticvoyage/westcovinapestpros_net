import Link from 'next/link';
import { Area, services, businessInfo } from '../../data/areas';

interface Props {
  area: Area;
}

export function AreaContent({ area }: Props) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center mb-6">
              <i className="fas fa-home text-3xl text-blue-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">Local pest control Experts</h2>
            </div>
            <div 
              className="text-lg text-gray-600 leading-relaxed mb-8 content-section prose prose-lg"
              dangerouslySetInnerHTML={{ __html: area.content.description }}
            />
            
            {/* Pricing Table */}
            {area.content.pricing.length > 0 && (
              <div className="mb-8">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Service</th>
                      <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Starting Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {area.content.pricing.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="border border-gray-300 px-4 py-3">{item.service}</td>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-blue-600">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <i className="fas fa-list text-blue-600 mr-3"></i>Our Services in {area.name}:
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.slug} className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold mr-3">
                      <i className="fas fa-check" style={{ fontSize: '8px' }}></i>
                    </div>
                    <Link href={`/services/${service.slug}`} className="text-blue-600 hover:underline font-medium">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-8 rounded-xl shadow-xl">
            <i className="fas fa-location-dot text-4xl mb-4"></i>
            <h3 className="text-2xl font-bold mb-4">Serving {area.name}</h3>
            <p className="mb-6 opacity-90">Call us today for fast, reliable service in your area!</p>
            <a
              href={`tel:${businessInfo.phone}`}
              className="phone-button bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition duration-300 block text-center transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-phone mr-2"></i>Call {businessInfo.phone}
            </a>
            <p className="mt-4 text-center text-sm opacity-75">Free Estimates • Licensed & Insured</p>
          </div>
        </div>
      </div>
    </section>
  );
}