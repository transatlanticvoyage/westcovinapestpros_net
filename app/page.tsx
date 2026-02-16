import type { Metadata } from 'next'
import Header from './components/Header'
import Footer from './components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pest Control in West Covina Near Me 91791 - Ant Control, Bed Bug Extermination, Termite Treatment, Rodent Control',
  description: 'Expert pest control in West Covina, CA near me. Serving zip codes 91790, 91791 with ant, bed bug, rodent control & more. Call (213) 463-6630 for fast service!',
  keywords: 'pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791',
  authors: [{ name: 'West Covina Pest Pros' }],
  openGraph: {
    title: 'Pest Control in West Covina Near Me 91791 - Ant Control, Bed Bug Extermination, Termite Treatment, Rodent Control',
    description: 'Expert pest control in West Covina, CA near me. Serving zip codes 91790, 91791 with ant, bed bug, rodent control & more. Call (213) 463-6630 for fast service!',
    type: 'website',
    siteName: 'West Covina Pest Pros',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Pest Control in West Covina Near Me 91791 - Ant Control, Bed Bug Extermination, Termite Treatment, Rodent Control',
    description: 'Expert pest control in West Covina, CA near me. Serving zip codes 91790, 91791 with ant, bed bug, rodent control & more. Call (213) 463-6630 for fast service!',
  },
}

export default function Home() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Reliable Pest Control in West Covina – Safe Homes Guaranteed
              </h1>
              <p className="text-lg md:text-xl mb-6">
                Protect your family from pests with local experts serving West Covina neighborhoods in 91790 and 91791. Fast, effective solutions for ants, rodents, and termites.
              </p>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="bg-yellow-500 text-black p-6 rounded-lg shadow-lg">
                <p className="font-bold text-lg mb-2">Call Now!</p>
                <a href="tel:(213) 463-6630" className="block text-2xl font-bold mb-2">
                  (213) 463-6630
                </a>
                <p className="text-sm">Free Estimates Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-8">
                <div className="text-4xl text-blue-600 mr-4">ℹ️</div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About West Covina Pest Pros</h2>
              </div>
              <div className="text-lg text-gray-600 leading-relaxed">
                <p>Welcome to West Covina Pest Pros, your trusted partner for professional <strong>pest control in West Covina</strong>. Located at 2500 E Workman Ave #2516, West Covina, CA 91791, we've been serving the community for years with top-notch pest management services tailored to the unique needs of our local area.</p>
                
                <h3 className="text-xl font-semibold mt-6 mb-3">Comprehensive Pest Control Services in West Covina</h3>
                <p>From residential pest control to commercial pest management, we handle it all. Our team specializes in ant control, bed bug extermination, bee and wasp removal, cockroach control, flea control, moth control, mosquito control, rodent control, silverfish control, spider control, termite treatment, and tick control.</p>
                
                <ul className="mt-4 space-y-2">
                  <li>• Free inspections for all West Covina homes and businesses</li>
                  <li>• Customized treatment plans for long-lasting results</li>
                  <li>• 24/7 emergency services for urgent pest issues</li>
                </ul>
              </div>
            </div>
            
            <div className="lg:text-right">
              <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">About Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600">Comprehensive pest control services</p>
          </div>
          <div className="max-w-4xl mx-auto">
            {[
              'Ant Control',
              'Bed Bug Extermination',
              'Bee And Wasp Removal',
              'Cockroach Control',
              'Flea Control',
              'Moth Control',
              'Mosquito Control',
              'Rodent Control',
              'Silverfish Control',
              'Spider Control',
              'Termite Treatment',
              'Tick Control',
              'Commercial Pest Control',
              'Residential Pest Control'
            ].map((service, index) => (
              <div key={service} className="flex items-center mb-8 p-6 bg-white rounded-lg shadow-sm">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {index + 1}
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold mb-2">
                    <span className="text-blue-600">{service}</span>
                  </h3>
                  <p className="text-gray-600">Professional {service.toLowerCase()} with guaranteed results and competitive pricing.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-6xl mb-6">📞</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Estimate Today</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for professional service and free estimates</p>
          <div className="space-y-4">
            <a 
              href="tel:(213) 463-6630" 
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-xl text-xl transition duration-300 transform hover:scale-105"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  )
}