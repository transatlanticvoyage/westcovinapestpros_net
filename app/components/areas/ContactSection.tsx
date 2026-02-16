import { Area, businessInfo } from '../../data/areas';

interface Props {
  area: Area;
}

export function ContactSection({ area }: Props) {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <i className="fas fa-phone text-6xl mb-6 opacity-80"></i>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Service in {area.name}</h2>
        <p className="text-xl mb-8 opacity-90">Contact us today for professional service and free estimates</p>
        <div className="space-y-4">
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105"
          >
            <i className="fas fa-phone mr-3"></i>Call Now
          </a>
        </div>
      </div>
    </section>
  );
}