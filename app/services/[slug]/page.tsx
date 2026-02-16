import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/services-data';

// Generate static params for all service pages
export async function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for each service page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service page was not found.',
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
      siteName: 'West Covina Pest Pros',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: service.metaTitle,
      description: service.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Structured data for local business service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "West Covina Pest Pros",
    "description": service.metaDescription,
    "telephone": "(213) 463-6630",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2500 E Workman Ave #2516",
      "addressLocality": "West Covina",
      "addressRegion": "CA",
      "postalCode": "91791",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "address": "2500 E Workman Ave #2516, West Covina, CA 91791"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoRadius": "50000",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "address": "2500 E Workman Ave #2516, West Covina, CA 91791"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services",
      "itemListElement": [{
        "@type": "Offer",
        "name": service.title,
        "category": "pest control",
        "areaServed": "West Covina",
        "availableAtOrFrom": {
          "@type": "Place",
          "name": "West Covina Pest Pros",
          "address": "2500 E Workman Ave #2516, West Covina, CA 91791"
        }
      }]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": 90
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <i className="fas fa-home text-2xl mr-3 opacity-80"></i>
              <div className="text-2xl font-bold">
                <a href="/" className="hover:text-yellow-300 transition duration-300">
                  West Covina Pest Pros
                </a>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="/" className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
                <i className="fas fa-home mr-2"></i>Home
              </a>
              <div className="relative group">
                <button className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
                  <i className="fas fa-tools mr-2"></i>Services <i className="fas fa-chevron-down ml-1"></i>
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="py-2">
                    <a href="/services/ant-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Ant Control
                    </a>
                    <a href="/services/bed-bug-extermination" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Bed Bug Extermination
                    </a>
                    <a href="/services/bee-and-wasp-removal" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Bee And Wasp Removal
                    </a>
                    <a href="/services/cockroach-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Cockroach Control
                    </a>
                    <a href="/services/commercial-pest-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Commercial Pest Control
                    </a>
                    <a href="/services/flea-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Flea Control
                    </a>
                    <a href="/services/mosquito-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Mosquito Control
                    </a>
                    <a href="/services/moth-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Moth Control
                    </a>
                    <a href="/services/residential-pest-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Residential Pest Control
                    </a>
                    <a href="/services/rodent-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Rodent Control
                    </a>
                    <a href="/services/silverfish-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Silverfish Control
                    </a>
                    <a href="/services/spider-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Spider Control
                    </a>
                    <a href="/services/termite-treatment" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Termite Treatment
                    </a>
                    <a href="/services/tick-control" className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition duration-200 flex items-center">
                      <i className="fas fa-wrench mr-3 text-blue-500"></i>Tick Control
                    </a>
                  </div>
                </div>
              </div>
              <a href="/blog/" className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
                <i className="fas fa-blog mr-2"></i>Blog
              </a>
              <a href="/pest-control-cost-calculator" className="hover:text-yellow-300 font-medium transition duration-300 flex items-center">
                <i className="fas fa-calculator mr-2"></i>Pest Control Cost Calculator
              </a>
              <a href="tel:(213) 463-6630" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl font-bold transition duration-300 transform hover:scale-105 shadow-lg flex items-center">
                <i className="fas fa-phone mr-2"></i>(213) 463-6630
              </a>
            </nav>
            <div className="md:hidden">
              <a href="tel:(213) 463-6630" className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-medium transition duration-300 flex items-center">
                <i className="fas fa-phone mr-2"></i>Call
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Service Hero */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <i className={`${service.icon} text-6xl text-blue-600 mb-6`}></i>
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              {service.heroTitle}
            </h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto mb-8">
              {service.heroDescription}
            </p>
            <a href="tel:(213) 463-6630" className="phone-button bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105 shadow-xl inline-flex items-center">
              <i className="fas fa-phone mr-3"></i>Call (213) 463-6630 Now
            </a>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div 
              className="text-lg text-gray-600 leading-relaxed prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.contentHtml }}
            />
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <i className="fas fa-star text-4xl text-yellow-500 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Our {service.title} Services?</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 shadow-lg">
                  <i className="fas fa-check"></i>
                </div>
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <i className="fas fa-cogs text-4xl text-blue-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">Our {service.title} Process</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {service.processSteps.map((step, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold mb-2">Step {step.step}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <i className="fas fa-question-circle text-4xl text-blue-600 mr-4"></i>
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="space-y-6">
            {service.faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <h3 className="text-lg font-bold text-blue-600 mb-3 flex items-center">
                  <i className="fas fa-question text-sm mr-3"></i>{faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="map-container bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="font-semibold text-gray-800 flex items-center">
                <i className="fas fa-map-marker-alt mr-2 text-red-500"></i>
                Find Us for {service.title} Services in West Covina
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
                src="https://maps.google.com/maps?q=2500%20E%20Workman%20Ave%20%232516%2C%20West%20Covina%2C%20CA%2091791&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title={`Find Us for ${service.title} Services in West Covina`}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i className="fas fa-phone text-6xl mb-6 opacity-80"></i>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.estimateTitle}</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for professional service and free estimates</p>
          <div className="space-y-4">
            <a href="tel:(213) 463-6630" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105">
              <i className="fas fa-phone mr-3"></i>Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <i className="fas fa-home text-3xl text-blue-400 mr-4"></i>
                <h3 className="text-2xl font-bold">West Covina Pest Pros</h3>
              </div>
              <p className="text-gray-300 mb-4 text-lg">Professional pest control services you can trust in West Covina.</p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <i className="fas fa-map-marker-alt text-red-400 mr-3"></i>
                  <span>2500 E Workman Ave #2516, West Covina, CA 91791</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <i className="fas fa-phone text-green-400 mr-3"></i>
                  <a href="tel:(213) 463-6630" className="hover:text-yellow-300 transition duration-300">(213) 463-6630</a>
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
                <li><a href="/services/ant-control" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Ant Control</a></li>
                <li><a href="/services/bed-bug-extermination" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Bed Bug Extermination</a></li>
                <li><a href="/services/termite-treatment" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Termite Treatment</a></li>
                <li><a href="/services/rodent-control" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-chevron-right text-blue-400 mr-2 text-sm"></i>Rodent Control</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <i className="fas fa-map text-green-400 mr-3"></i>Service Areas
              </h3>
              <ul className="space-y-3">
                <li><a href="/areas-served/downtown-west-covina-91790" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-location-dot text-red-400 mr-2 text-sm"></i>Downtown West Covina</a></li>
                <li><a href="/areas-served/south-hills-91791" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-location-dot text-red-400 mr-2 text-sm"></i>South Hills</a></li>
                <li><a href="/areas-served/cameron-park-91790" className="text-gray-300 hover:text-yellow-300 transition duration-300 flex items-center"><i className="fas fa-location-dot text-red-400 mr-2 text-sm"></i>Cameron Park</a></li>
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
                  This site helps homeowners, free of charge, find and connect with service contractors in their area. Before hiring, homeowners should confirm that the contractor meets all licensing and insurance requirements for the job. All contractors operate independently, and this site does not guarantee or stand behind any work they provide.
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
      </footer>

      {/* Floating Phone Button for Mobile */}
      <a href="tel:(213) 463-6630" className="floating-phone fixed bottom-5 right-5 z-50 w-16 h-16 bg-blue-600 hover:bg-blue-700 text-white rounded-full md:hidden flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
        <i className="fas fa-phone text-xl"></i>
      </a>
    </>
  );
}