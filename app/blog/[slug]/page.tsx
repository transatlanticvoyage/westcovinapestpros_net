import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import { blogPosts } from '@/data/blog-posts'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | West Covina Pest Pros',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | West Covina Pest Pros`,
    description: post.description,
    keywords: `${post.category}, pest control West Covina, ${post.title.toLowerCase()}`,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://westcovinapestpros.net/blog/${post.slug}`,
      siteName: 'West Covina Pest Pros',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `https://westcovinapestpros.net/blog/${post.slug}`
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  // Get related posts (same category or random)
  const relatedPosts = blogPosts
    .filter(p => p.slug !== post.slug)
    .filter(p => p.category === post.category)
    .slice(0, 3)
  
  // If not enough related posts in same category, add random ones
  if (relatedPosts.length < 3) {
    const additionalPosts = blogPosts
      .filter(p => p.slug !== post.slug && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length)
    relatedPosts.push(...additionalPosts)
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'West Covina Pest Pros',
      logo: {
        '@type': 'ImageObject',
        url: 'https://westcovinapestpros.net/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://westcovinapestpros.net/blog/${post.slug}`
    }
  }

  return (
    <>
      <Header />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <main className="min-h-screen">
        {/* Article Header */}
        <article className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Breadcrumbs */}
            <nav className="text-sm mb-8">
              <ol className="flex items-center space-x-2">
                <li>
                  <Link href="/" className="text-green-700 hover:text-green-800">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li>
                  <Link href="/blog" className="text-green-700 hover:text-green-800">
                    Blog
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-gray-700">{post.title}</li>
              </ol>
            </nav>

            {/* Article Meta */}
            <header className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <time>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-700">
                {post.description}
              </p>
              
              <div className="mt-4 text-sm text-gray-600">
                By {post.author}
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-gray-900 
                prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-700 prose-p:mb-4
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-gray-700 prose-li:mb-2
                prose-strong:text-gray-900 prose-strong:font-semibold"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA Box */}
            <div className="bg-green-50 border-2 border-green-700 rounded-lg p-8 mt-12">
              <h3 className="text-2xl font-bold mb-4">
                Need Professional Pest Control in West Covina?
              </h3>
              <p className="text-gray-700 mb-6">
                Don't let pests take over your home. Our expert technicians are ready to help with safe, effective treatments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="tel:626-555-0198"
                  className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition-colors text-center"
                >
                  Call (626) 555-0198
                </Link>
                <Link 
                  href="/#contact"
                  className="bg-white text-green-700 border-2 border-green-700 px-6 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Related Articles
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <article 
                  key={relatedPost.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="p-6">
                    <span className="text-sm text-green-700 font-semibold">
                      {relatedPost.category}
                    </span>
                    
                    <h3 className="text-xl font-bold mt-2 mb-3">
                      <Link 
                        href={`/blog/${relatedPost.slug}`}
                        className="text-gray-900 hover:text-green-700 transition-colors"
                      >
                        {relatedPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-700 text-sm line-clamp-2">
                      {relatedPost.description}
                    </p>
                    
                    <Link 
                      href={`/blog/${relatedPost.slug}`}
                      className="text-green-700 font-semibold text-sm mt-4 inline-block hover:text-green-800"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}