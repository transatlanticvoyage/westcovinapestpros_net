import { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { blogPosts } from '@/data/blog-posts'

export const metadata: Metadata = {
  title: 'Pest Control Blog | West Covina Pest Pros Tips & Advice',
  description: 'Expert pest control tips, guides, and advice for West Covina homeowners. Learn about ant control, cockroach prevention, and more.',
  keywords: 'pest control blog, West Covina pest tips, ant control guide, cockroach prevention, bed bug detection',
  openGraph: {
    title: 'Pest Control Blog | West Covina Pest Pros',
    description: 'Expert pest control tips and advice for West Covina residents',
    url: 'https://westcovinapestpros.net/blog',
    siteName: 'West Covina Pest Pros',
    locale: 'en_US',
    type: 'website',
  }
}

export default function BlogPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-green-700 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pest Control Blog
            </h1>
            <p className="text-xl">
              Expert tips and advice for keeping your West Covina home pest-free
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-gray-900">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-green-700 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {post.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <time className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-green-700 font-semibold hover:text-green-800 transition-colors"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Professional Pest Control?
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Don't let pests take over your home. Get expert help today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="tel:626-555-0198"
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-800 transition-colors"
              >
                Call (626) 555-0198
              </Link>
              <Link 
                href="/#contact"
                className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}