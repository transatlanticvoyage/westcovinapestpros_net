import { Area, businessInfo } from '../../data/areas';

interface Props {
  area: Area;
}

export function AreaHero({ area }: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <i className="fas fa-map-marker-alt text-6xl text-red-600 mb-6"></i>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {area.content.hero.title}
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto mb-8">
            {area.content.hero.subtitle}
          </p>
          <a
            href={`tel:${businessInfo.phone}`}
            className="phone-button bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105 shadow-xl inline-flex items-center"
          >
            <i className="fas fa-phone mr-3"></i>Call {businessInfo.phone} Now
          </a>
        </div>
      </div>
    </section>
  );
}