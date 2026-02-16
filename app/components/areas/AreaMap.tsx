import { Area } from '../../data/areas';

interface Props {
  area: Area;
}

export function AreaMap({ area }: Props) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(area.name)}%2C%20West%20Covina%2C%20${area.zipCode}%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="map-container bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-semibold text-gray-800 flex items-center">
              <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
              {area.name} Service Area Map
            </h3>
          </div>
          <div className="relative h-64">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight={0}
              marginWidth={0}
              loading="lazy"
              src={mapSrc}
              title={`${area.name} Service Area Map`}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}