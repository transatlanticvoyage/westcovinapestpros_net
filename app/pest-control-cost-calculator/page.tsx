'use client'

import { useState } from 'react'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function PestControlCalculatorPage() {
  const [propertyType, setPropertyType] = useState('residential')
  const [squareFootage, setSquareFootage] = useState('')
  const [pestType, setPestType] = useState('general')
  const [frequency, setFrequency] = useState('onetime')
  const [result, setResult] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)

  const calculateCost = () => {
    const sqft = parseFloat(squareFootage)
    
    if (!sqft || sqft <= 0) {
      alert('Please enter valid square footage')
      return
    }

    let baseCost = propertyType === 'residential' ? 150 : 300
    let sqftCost = Math.ceil(sqft / 1000) * 50

    const pestMultiplier: Record<string, number> = {
      general: 1,
      termite: 2.5,
      rodent: 1.8,
      bed: 2.2
    }

    const frequencyDiscount: Record<string, number> = {
      onetime: 1,
      quarterly: 0.85,
      monthly: 0.75
    }

    const totalCost = (baseCost + sqftCost) * pestMultiplier[pestType] * frequencyDiscount[frequency]
    
    setResult(Math.round(totalCost))
    setShowResult(true)
  }

  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Calculator Header */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              <i className="fas fa-calculator text-blue-600 mr-3"></i>
              Pest Control Cost Calculator
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Get instant estimates for your pest control needs in West Covina
            </p>
          </header>
          
          {/* Description Section */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="prose max-w-none">
              <p>Our pest control cost calculator provides instant estimates for both residential and commercial pest control services in West Covina. Simply input your property details and specific pest concerns to receive a preliminary cost estimate for our professional pest management services. The calculator takes into account factors such as property size, type of pest problem, and preferred treatment frequency to generate an accurate estimate. While every pest situation is unique, this tool gives you a reliable starting point for budgeting your pest control needs.</p>
            </div>
          </div>
          
          {/* Calculator Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
              <form className="space-y-6">
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Property Type</label>
                  <select 
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Square Footage</label>
                  <input 
                    type="number" 
                    value={squareFootage}
                    onChange={(e) => setSquareFootage(e.target.value)}
                    className="w-full p-2 border rounded" 
                    min="0" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Type of Pest Problem</label>
                  <select 
                    value={pestType}
                    onChange={(e) => setPestType(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="general">General Pest Control</option>
                    <option value="termite">Termite Treatment</option>
                    <option value="rodent">Rodent Control</option>
                    <option value="bed">Bed Bug Treatment</option>
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Treatment Frequency</label>
                  <select 
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                    className="w-full p-2 border rounded"
                  >
                    <option value="onetime">One-Time Treatment</option>
                    <option value="quarterly">Quarterly Service</option>
                    <option value="monthly">Monthly Service</option>
                  </select>
                </div>
                
                <button 
                  type="button" 
                  onClick={calculateCost}
                  className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
                >
                  Calculate Cost
                </button>
              </form>
              
              {showResult && result && (
                <div className="mt-6 p-4 bg-gray-100 rounded">
                  <p className="text-xl font-bold">Estimated Cost: ${result}</p>
                  <p className="mt-2">This estimate includes basic inspection and treatment. Call (213) 463-6630 for a detailed quote.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <i className="fas fa-star text-blue-600 mr-3"></i>
              Why Use Our Calculator?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Get instant cost estimates for pest control services</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Compare different treatment options and frequencies</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Plan your pest control budget effectively</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Understand pricing factors for professional pest management</span>
              </div>
              <div className="flex items-start">
                <i className="fas fa-check-circle text-blue-600 mr-3 mt-1"></i>
                <span className="text-gray-700">Save time by getting preliminary quotes online</span>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <i className="fas fa-question-circle text-blue-600 mr-3"></i>
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  1. How accurate is this pest control calculator?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our calculator provides estimates based on average service costs in West Covina. While actual costs may vary depending on specific pest situations and property conditions, the estimates are typically within 85-90% accuracy for standard treatments.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  2. What factors affect pest control costs?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Pest control costs are influenced by property size, type of pest infestation, severity of the problem, treatment frequency, and property type (residential vs. commercial). Additional factors may include access difficulties and required treatment methods.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  3. Do you offer free on-site inspections?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, West Covina Pest Pros provides free initial inspections to verify the type and extent of pest problems and provide exact quotes for our services.
                </p>
              </div>
            </div>
          </div>
          
          {/* Lead Capture & CTA */}
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to solve your pest problems? Call West Covina Pest Pros at (213) 463-6630 for a free inspection and detailed quote. Our licensed professionals are ready to help protect your property from unwanted pests.
            </h3>
            <p className="text-gray-700 mb-6">
              Get accurate quotes from licensed professionals in West Covina. 
              Our experienced team provides quality pest control services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:(213) 463-6630" 
                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center">
                <i className="fas fa-phone mr-2"></i>Call (213) 463-6630
              </a>
              <a href="/#contact" 
                 className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-flex items-center justify-center">
                <i className="fas fa-envelope mr-2"></i>Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}