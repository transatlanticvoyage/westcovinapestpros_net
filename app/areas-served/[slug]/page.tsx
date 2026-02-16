import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAreaBySlug, getAllAreaSlugs, services, businessInfo, Area } from '../../data/areas';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AreaHero } from '../../components/areas/AreaHero';
import { AreaContent } from '../../components/areas/AreaContent';
import { AreaInfo } from '../../components/areas/AreaInfo';
import { AreaMap } from '../../components/areas/AreaMap';
import { ContactSection } from '../../components/areas/ContactSection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllAreaSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  
  if (!area) {
    return {
      title: 'Area Not Found | West Covina Pest Pros',
    };
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "West Covina Pest Pros",
    "description": area.seo.description,
    "telephone": businessInfo.phone,
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-17:00",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2500 E Workman Ave #2516, West Covina, CA 91791",
      "addressLocality": "West Covina",
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
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "name": service.name,
        "category": "pest control",
        "areaServed": "West Covina",
        "availableAtOrFrom": {
          "@type": "Place",
          "name": "West Covina Pest Pros",
          "address": "2500 E Workman Ave #2516, West Covina, CA 91791"
        }
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "46"
    }
  };

  return {
    title: area.seo.title,
    description: area.seo.description,
    keywords: area.seo.keywords,
    openGraph: {
      title: area.seo.title,
      description: area.seo.description,
      type: 'website',
      siteName: 'West Covina Pest Pros',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary',
      title: area.seo.title,
      description: area.seo.description,
    },
    other: {
      'application/ld+json': JSON.stringify(structuredData)
    }
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <AreaHero area={area} />
        <AreaContent area={area} />
        <AreaInfo area={area} />
        <AreaMap area={area} />
        <ContactSection area={area} />
      </main>
      <Footer />
    </>
  );
}