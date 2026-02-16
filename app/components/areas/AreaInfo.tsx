import { Area } from '../../data/areas';

interface Props {
  area: Area;
}

export function AreaInfo({ area }: Props) {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <i className="fas fa-info-circle text-4xl text-blue-600 mr-4"></i>
            <h2 className="text-3xl font-bold text-gray-900">About {area.name}</h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-xl">
            <p className="text-lg text-gray-600 mb-8">
              Professional pest control services available in {area.name}. We serve this area with reliable, high-quality solutions tailored to your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-map text-blue-600 mr-3"></i>Area Information
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-600 flex items-center">
                    <i className="fas fa-location-dot text-red-500 mr-3"></i><strong>Zip Code:</strong> {area.zipCode}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <i className="fas fa-map-marker-alt text-blue-500 mr-3"></i><strong>Service Area:</strong> {area.name} and surrounding neighborhoods
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <i className="fas fa-road text-green-600 mr-3"></i>Nearby Areas We Serve
                </h3>
                <ul className="space-y-2">
                  {area.content.nearby.map((nearbyArea, index) => (
                    <li key={index} className="text-gray-600 flex items-start">
                      <i className="fas fa-chevron-right text-blue-500 mr-2 text-sm mt-1 flex-shrink-0"></i>
                      <span>{nearbyArea}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}