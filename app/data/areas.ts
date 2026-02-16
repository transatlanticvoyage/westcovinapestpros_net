export interface Area {
  slug: string;
  name: string;
  displayName: string;
  zipCode: string;
  content: {
    hero: {
      title: string;
      subtitle: string;
    };
    description: string;
    pricing: Array<{
      service: string;
      price: string;
    }>;
    features: string[];
    nearby: string[];
  };
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const areas: Area[] = [
  {
    slug: "barrington-91790",
    name: "Barrington",
    displayName: "Barrington",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Barrington, 91790",
        subtitle: "Serving Barrington with professional pest control services"
      },
      description: `<p>Discover top-rated <strong>pest control in Barrington</strong> with West Covina Pest Pros, your trusted local experts serving the 91790 area. Our team brings years of experience tackling common pests in Barrington homes and businesses, ensuring safe and effective solutions tailored to our community's unique needs. Whether it's ants invading your kitchen or rodents scurrying in the attic, we provide prompt, professional <em>Barrington pest control</em> that keeps your property pest-free.</p>
      
      <h2>Comprehensive Pest Control Services in Barrington 91790</h2>
      <p>In the heart of Barrington, 91790, pests like termites and bed bugs can thrive due to our warm climate and proximity to green spaces. West Covina Pest Pros understands the local ecosystem, using eco-friendly methods to eliminate infestations without harming your family or the environment. From initial inspection to ongoing prevention, our <strong>pest control Barrington</strong> services are designed for lasting results.</p>
      
      <ul>
        <li>Ant control: Targeted treatments for common household ants.</li>
        <li>Rodent removal: Safe trapping and exclusion for mice and rats.</li>
        <li>Termite treatment: Advanced inspections and barriers for wood-destroying pests.</li>
      </ul>
      
      <h2>Affordable Pricing for Barrington Pest Control</h2>
      <p>Our transparent pricing ensures no hidden fees for <strong>local pest control in Barrington</strong>. Contact us today for a free estimate in 91790!</p>`,
      pricing: [
        { service: "Initial Inspection & Treatment", price: "$99" },
        { service: "Monthly Maintenance Plan", price: "$49/month" },
        { service: "Termite Inspection", price: "Free with quote" }
      ],
      features: [
        "Ant control: Targeted treatments for common household ants.",
        "Rodent removal: Safe trapping and exclusion for mice and rats.",
        "Termite treatment: Advanced inspections and barriers for wood-destroying pests."
      ],
      nearby: [
        "We proudly serve Barrington",
        "91790",
        "and surrounding areas including West Covina",
        "Walnut",
        "Covina",
        "and Rowland Heights. Our coverage extends to all nearby communities for comprehensive pest control solutions."
      ]
    },
    seo: {
      title: "Pest Control in Barrington Near Me 91790 - Ant Control, Rodent Removal, Termite Treatment, Bed Bug Extermination, Spider Control",
      description: "Reliable pest control in Barrington, 91790 near me. West Covina Pest Pros offers expert ant, rodent & termite services. Call (213) 463-6630 for fast relief!",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "cameron-park-91790",
    name: "Cameron Park",
    displayName: "Cameron Park",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Cameron Park, CA 91790",
        subtitle: "Serving Cameron Park with professional pest control services"
      },
      description: `<p>Discover top-rated <strong>pest control in Cameron Park</strong> with West Covina Pest Pros, your trusted local experts serving the 91790 area. Our team understands the unique pest challenges in Cameron Park, from urban infestations to suburban invasions, ensuring effective solutions tailored to our community's needs.</p>
      
      <h2>Pest Control Cameron Park: Common Issues and Solutions</h2>
      <p>In Cameron Park, 91790, residents often face pests like ants, rodents, and termites due to the mild climate and nearby green spaces. Our <em>Cameron Park pest control</em> services provide quick, eco-friendly treatments to protect your home or business. We prioritize safe methods that keep your family and pets secure while eliminating pests at the source.</p>
      
      <ul>
        <li>Ant extermination: Targeted treatments for common household ants.</li>
        <li>Rodent removal: Trapping and prevention for mice and rats.</li>
        <li>Termite inspections: Early detection to avoid costly damage.</li>
      </ul>
      
      <h2>Affordable Pricing for Pest Control in Cameron Park</h2>
      <p>Our transparent pricing makes professional <strong>pest control Cameron Park</strong> accessible. Initial consultations are free, and we offer ongoing maintenance plans to keep pests away long-term.</p>
      
      <p>With deep local knowledge of Cameron Park's 91790 neighborhoods, West Covina Pest Pros delivers results you can count on. Contact us today for a pest-free home!</p>`,
      pricing: [
        { service: "One-Time Treatment", price: "$99" },
        { service: "Quarterly Plan", price: "$49/month" },
        { service: "Termite Inspection", price: "Free with service" }
      ],
      features: [
        "Ant extermination: Targeted treatments for common household ants.",
        "Rodent removal: Trapping and prevention for mice and rats.",
        "Termite inspections: Early detection to avoid costly damage."
      ],
      nearby: [
        "We proudly serve Cameron Park (91790) and nearby areas including West Covina",
        "Walnut",
        "Rowland Heights",
        "Hacienda Heights",
        "and Covina for comprehensive pest control solutions."
      ]
    },
    seo: {
      title: "Pest Control in Cameron Park Near Me 91790 - Ants, Rodents, Termites, Bed Bugs, Cockroaches, Spiders",
      description: "Reliable pest control in Cameron Park, 91790 near me. West Covina Pest Pros handles ants, rodents & more. Call (213) 463-6630 for fast service!",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "cordelia-91790",
    name: "Cordelia",
    displayName: "Cordelia",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Cordelia, 91790",
        subtitle: "Serving Cordelia with professional pest control services"
      },
      description: `<p>Discover top-rated <strong>pest control in Cordelia</strong> with West Covina Pest Pros, your trusted local experts serving the 91790 area. Our team understands the unique challenges of Cordelia's suburban environment, where common pests like ants, rodents, and termites thrive due to the mild California climate. We provide comprehensive <em>Cordelia pest control services</em> tailored to residential and commercial properties, ensuring your home or business remains pest-free year-round.</p>
      
      <h2>Why Cordelia Needs Specialized Pest Control</h2>
      <p>In Cordelia (91790), proximity to urban West Covina means pests can easily migrate from neighboring areas. Our local knowledge allows us to address issues like seasonal ant invasions and termite damage swiftly. Whether it's a one-time treatment or ongoing maintenance, West Covina Pest Pros uses eco-friendly methods to protect your property without harming the environment.</p>
      
      <ul>
        <li>Ant control: Targeted treatments for common household ants</li>
        <li>Rodent removal: Safe trapping and exclusion for mice and rats</li>
        <li>Termite inspections: Free initial assessments for early detection</li>
      </ul>
      
      <h2>Affordable Pricing for Pest Control in Cordelia</h2>
      <p>We offer transparent pricing to fit your budget. Contact us for a free quote customized to your needs in 91790.</p>`,
      pricing: [
        { service: "Initial Pest Inspection", price: "$49" },
        { service: "Standard Treatment (up to 2,000 sq ft)", price: "$199" },
        { service: "Quarterly Maintenance Plan", price: "$89/month" }
      ],
      features: [
        "Ant control: Targeted treatments for common household ants",
        "Rodent removal: Safe trapping and exclusion for mice and rats",
        "Termite inspections: Free initial assessments for early detection"
      ],
      nearby: [
        "We proudly serve Cordelia and surrounding areas in West Covina",
        "nearby residential neighborhoods",
        "and commercial districts for comprehensive pest solutions."
      ]
    },
    seo: {
      title: "Pest Control in Cordelia Near Me 91790 - Professional Extermination Services",
      description: "Expert pest control in Cordelia, 91790. West Covina Pest Pros offers residential & commercial pest management. Call (213) 463-6630 today!",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "country-club-park-91790",
    name: "Country Club Park",
    displayName: "Country Club Park",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Country Club Park, 91790",
        subtitle: "Serving Country Club Park with professional pest control services"
      },
      description: `<p>Discover premium <strong>pest control in Country Club Park</strong> with West Covina Pest Pros, your trusted local experts serving the exclusive 91790 area. Our team understands the high standards expected in Country Club Park's upscale community, providing discreet, effective pest management solutions that protect your valuable property investment while maintaining the neighborhood's pristine appearance.</p>
      
      <h2>Specialized Pest Control for Country Club Park</h2>
      <p>Country Club Park's manicured landscapes and luxury homes in 91790 require sophisticated pest management approaches. Our <em>Country Club Park pest control</em> services focus on prevention and targeted treatments that eliminate pests without disrupting your lifestyle or property aesthetics. From protecting golf course-adjacent properties to maintaining pest-free clubhouses, we deliver results that meet your community's standards.</p>
      
      <ul>
        <li>Discreet ant control for luxury properties</li>
        <li>Comprehensive termite protection for high-value homes</li>
        <li>Rodent exclusion services for exclusive neighborhoods</li>
      </ul>
      
      <h2>Premium Pricing for Country Club Park Pest Control</h2>
      <p>Our premium services reflect the quality and discretion expected in Country Club Park. Contact us for a confidential consultation in 91790.</p>`,
      pricing: [
        { service: "Premium Initial Treatment", price: "$149" },
        { service: "Executive Maintenance Plan", price: "$79/month" },
        { service: "Comprehensive Property Assessment", price: "Complimentary" }
      ],
      features: [
        "Discreet ant control for luxury properties",
        "Comprehensive termite protection for high-value homes",
        "Rodent exclusion services for exclusive neighborhoods"
      ],
      nearby: [
        "We serve the exclusive Country Club Park community",
        "adjacent golf course properties",
        "luxury residential areas in 91790",
        "and surrounding upscale West Covina neighborhoods."
      ]
    },
    seo: {
      title: "Premium Pest Control in Country Club Park 91790 - Luxury Property Protection",
      description: "Exclusive pest control services for Country Club Park, 91790. Discreet, professional pest management for luxury homes. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "deer-park-91791",
    name: "Deer Park",
    displayName: "Deer Park",
    zipCode: "91791",
    content: {
      hero: {
        title: "Expert Pest Control Services in Deer Park, 91791",
        subtitle: "Serving Deer Park with professional pest control services"
      },
      description: `<p>Experience reliable <strong>pest control in Deer Park</strong> with West Covina Pest Pros, your dedicated local experts serving the 91791 community. Our team specializes in addressing the unique pest challenges found in Deer Park's natural setting, where residential areas border open spaces and wildlife corridors. We provide comprehensive pest management that respects both your home environment and the local ecosystem.</p>
      
      <h2>Deer Park Pest Control: Nature-Conscious Solutions</h2>
      <p>In Deer Park, 91791, the proximity to natural areas brings both beauty and pest challenges. Our <em>Deer Park pest control</em> approach balances effective pest elimination with environmental responsibility. We understand how local wildlife patterns affect pest behavior and use this knowledge to provide targeted treatments that protect your home while preserving the area's natural charm.</p>
      
      <ul>
        <li>Eco-friendly ant control for nature-adjacent properties</li>
        <li>Wildlife-safe rodent management solutions</li>
        <li>Termite protection for homes near wooded areas</li>
      </ul>
      
      <h2>Nature-Friendly Pricing for Deer Park</h2>
      <p>Our environmentally conscious approach doesn't compromise on value. Discover our competitive pricing for Deer Park pest control in 91791.</p>`,
      pricing: [
        { service: "Eco-Friendly Initial Treatment", price: "$109" },
        { service: "Green Maintenance Plan", price: "$59/month" },
        { service: "Wildlife-Safe Assessment", price: "Free consultation" }
      ],
      features: [
        "Eco-friendly ant control for nature-adjacent properties",
        "Wildlife-safe rodent management solutions",
        "Termite protection for homes near wooded areas"
      ],
      nearby: [
        "We serve Deer Park's residential community",
        "properties adjacent to natural areas",
        "wildlife corridor neighborhoods in 91791",
        "and surrounding West Covina nature-friendly zones."
      ]
    },
    seo: {
      title: "Eco-Friendly Pest Control in Deer Park 91791 - Nature-Safe Solutions",
      description: "Environmentally conscious pest control in Deer Park, 91791. Wildlife-safe pest management near natural areas. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "downtown-west-covina-91790",
    name: "Downtown West Covina",
    displayName: "Downtown West Covina",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Downtown West Covina, 91790",
        subtitle: "Serving Downtown West Covina with professional pest control services"
      },
      description: `<p>Discover top-rated <strong>pest control in Downtown West Covina</strong> with West Covina Pest Pros, your trusted local exterminators serving the 91790 zip code. Our team brings years of experience tackling common pests in this vibrant urban area, where busy streets and residential zones demand quick, effective solutions. From apartment complexes to local businesses, we understand the unique challenges of pest infestations in Downtown West Covina.</p>
      
      <h2>Comprehensive Pest Control Services in Downtown West Covina</h2>
      <p>In the heart of West Covina, pests like ants, roaches, and rodents thrive due to the area's mild climate and dense population. At West Covina Pest Pros, we offer tailored <em>pest control Downtown West Covina</em> strategies that prioritize safety and efficiency. Our eco-friendly treatments ensure your home or office in 91790 remains pest-free without harmful residues.</p>
      
      <ul>
        <li>Ant extermination using targeted baits</li>
        <li>Termite inspections and barriers for long-term protection</li>
        <li>Rodent trapping and exclusion in urban settings</li>
        <li>Bed bug heat treatments for thorough eradication</li>
      </ul>
      
      <h2>Affordable Pricing for 91790 Pest Control</h2>
      <p>We believe quality pest control in Downtown West Covina shouldn't break the bank. Our transparent pricing reflects our commitment to the community, with no hidden fees for residents and businesses in 91790.</p>`,
      pricing: [
        { service: "Initial Inspection & Treatment", price: "$99" },
        { service: "Monthly Maintenance Plan", price: "$49/month" },
        { service: "Termite Control Package", price: "$299" }
      ],
      features: [
        "Ant extermination using targeted baits",
        "Termite inspections and barriers for long-term protection",
        "Rodent trapping and exclusion in urban settings",
        "Bed bug heat treatments for thorough eradication"
      ],
      nearby: [
        "We serve Downtown West Covina's urban core",
        "apartment complexes and condominiums",
        "local businesses and retail establishments",
        "and surrounding 91790 residential neighborhoods."
      ]
    },
    seo: {
      title: "Downtown West Covina Pest Control 91790 - Commercial & Residential Services",
      description: "Professional pest control in Downtown West Covina, 91790. Urban pest management for apartments, businesses & homes. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "eastland-91790",
    name: "Eastland",
    displayName: "Eastland",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Eastland, 91790",
        subtitle: "Serving Eastland with professional pest control services"
      },
      description: `<p>At West Covina Pest Pros, we provide top-rated <strong>pest control in Eastland</strong> tailored to the unique needs of our 91790 community. With years of local experience, our team understands the common pest issues in Eastland, from seasonal ant invasions to persistent rodent problems. Whether you're dealing with termites threatening your home's structure or bed bugs disrupting your peace, our eco-friendly solutions ensure safe, effective results for Eastland residents.</p>
      
      <h2>Comprehensive Pest Control Services in Eastland</h2>
      <p>Our <em>pest control Eastland</em> services cover a wide range of infestations, including spiders, cockroaches, and more. We prioritize quick response times and use advanced techniques to eliminate pests at the source, preventing future outbreaks. Serving the 91790 zip code with pride, we know the local environment—from Eastland's residential neighborhoods to nearby commercial spaces—and adapt our strategies accordingly.</p>
      
      <ul>
        <li>Ant control: Targeted treatments for fire ants and carpenter ants common in Eastland yards.</li>
        <li>Rodent removal: Humane trapping and exclusion for mice and rats in 91790 homes.</li>
        <li>Termite inspections: Free assessments to protect your property from wood-destroying pests.</li>
      </ul>
      
      <h2>Affordable Pricing for Eastland Pest Control</h2>
      <p>Invest in professional <strong>Eastland pest control near me</strong> today and enjoy a pest-free home backed by our satisfaction guarantee.</p>`,
      pricing: [
        { service: "Initial Inspection & Treatment", price: "$99" },
        { service: "Monthly Maintenance Plan", price: "$49/month" },
        { service: "Termite Control Package", price: "$299" }
      ],
      features: [
        "Ant control: Targeted treatments for fire ants and carpenter ants common in Eastland yards.",
        "Rodent removal: Humane trapping and exclusion for mice and rats in 91790 homes.",
        "Termite inspections: Free assessments to protect your property from wood-destroying pests."
      ],
      nearby: [
        "We serve Eastland's residential neighborhoods",
        "nearby commercial spaces",
        "surrounding areas in 91790",
        "and adjacent West Covina communities."
      ]
    },
    seo: {
      title: "Professional Pest Control in Eastland 91790 - Residential & Commercial",
      description: "Expert pest control services in Eastland, 91790. Comprehensive pest management for homes and businesses. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "merced-91790",
    name: "Merced",
    displayName: "Merced",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Merced, 91790",
        subtitle: "Serving Merced with professional pest control services"
      },
      description: `<p>Find reliable <strong>pest control in Merced</strong> with West Covina Pest Pros, your local experts serving the 91790 area with dedication and experience. Our team understands the specific pest challenges that Merced residents face, from common household invaders to seasonal pest surges. We provide comprehensive solutions that protect your family and property while maintaining the community standards that make Merced a great place to live.</p>
      
      <h2>Merced Pest Control: Community-Focused Solutions</h2>
      <p>In Merced, 91790, our approach to pest control reflects our commitment to this close-knit community. Our <em>Merced pest control</em> services are designed with your neighbors' safety and your property's protection in mind. We use proven methods that eliminate pests effectively while respecting the residential character of the area.</p>
      
      <ul>
        <li>Family-safe ant control for Merced households</li>
        <li>Reliable rodent exclusion for residential properties</li>
        <li>Thorough termite inspections for peace of mind</li>
      </ul>
      
      <h2>Community-Friendly Pricing for Merced</h2>
      <p>Our pricing reflects our commitment to serving the Merced community with quality pest control services that residents can afford.</p>`,
      pricing: [
        { service: "Residential Treatment Package", price: "$109" },
        { service: "Family-Safe Maintenance Plan", price: "$55/month" },
        { service: "Community Inspection Special", price: "Free with treatment" }
      ],
      features: [
        "Family-safe ant control for Merced households",
        "Reliable rodent exclusion for residential properties",
        "Thorough termite inspections for peace of mind"
      ],
      nearby: [
        "We serve the Merced residential community",
        "family neighborhoods in 91790",
        "local schools and parks areas",
        "and surrounding West Covina family-friendly zones."
      ]
    },
    seo: {
      title: "Family-Safe Pest Control in Merced 91790 - Residential Specialists",
      description: "Community-focused pest control in Merced, 91790. Family-safe pest management for residential properties. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "northside-91791",
    name: "Northside",
    displayName: "Northside",
    zipCode: "91791",
    content: {
      hero: {
        title: "Expert Pest Control Services in Northside, 91791",
        subtitle: "Serving Northside with professional pest control services"
      },
      description: `<p>Discover top-rated pest control in Northside, where West Covina Pest Pros delivers expert solutions tailored to the unique needs of our 91791 community. With years of local experience, we understand the common pest issues facing Northside residents, from invasive ants to stubborn rodents. Our comprehensive pest control services ensure your home or business remains pest-free, using eco-friendly methods that prioritize safety and effectiveness.</p>
      
      <h2>Expert Pest Control Services in Northside</h2>
      <p>In Northside, 91791, pests can thrive due to the area's mild climate and proximity to urban green spaces. Whether you're dealing with termites damaging your property or bed bugs disrupting your sleep, our team at West Covina Pest Pros is here to help. We offer customized pest control in Northside plans that address infestations quickly and prevent future problems.</p>
      
      <ul>
        <li>Ant control: Targeted treatments for common Northside ant species.</li>
        <li>Rodent removal: Safe trapping and exclusion for mice and rats in 91791 homes.</li>
        <li>Termite inspections: Thorough checks to protect your Northside property investment.</li>
      </ul>
      
      <h2>Pricing for Pest Control in Northside</h2>
      <p>Our affordable pricing makes professional pest control in Northside accessible for all 91791 residents. Contact us today for a free quote!</p>`,
      pricing: [
        { service: "Initial Inspection & Treatment", price: "$99" },
        { service: "Monthly Maintenance Plan", price: "$49/month" },
        { service: "Emergency Rodent Control", price: "$149" }
      ],
      features: [
        "Ant control: Targeted treatments for common Northside ant species.",
        "Rodent removal: Safe trapping and exclusion for mice and rats in 91791 homes.",
        "Termite inspections: Thorough checks to protect your Northside property investment."
      ],
      nearby: [
        "We serve Northside residential areas",
        "properties near urban green spaces",
        "91791 neighborhoods",
        "and surrounding West Covina communities."
      ]
    },
    seo: {
      title: "Professional Pest Control in Northside 91791 - Residential & Commercial",
      description: "Expert pest control services in Northside, 91791. Comprehensive pest management for homes and businesses. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "northview-91790",
    name: "Northview",
    displayName: "Northview",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Northview, 91790",
        subtitle: "Serving Northview with professional pest control services"
      },
      description: `<p>Experience professional <strong>pest control in Northview</strong> with West Covina Pest Pros, your trusted local experts serving the 91790 community. Our team brings extensive knowledge of Northview's unique pest challenges, from suburban residential issues to commercial property needs. We provide comprehensive pest management solutions that protect your property investment while maintaining the quality of life that makes Northview an attractive place to live and work.</p>
      
      <h2>Northview Pest Control: Comprehensive Solutions</h2>
      <p>Northview's diverse property types in 91790 require versatile pest control approaches. Our <em>Northview pest control</em> services adapt to everything from single-family homes to multi-unit properties, ensuring effective treatment regardless of your specific situation. We understand the local pest patterns and seasonal variations that affect this area.</p>
      
      <ul>
        <li>Versatile ant control for diverse property types</li>
        <li>Comprehensive rodent management for residential and commercial properties</li>
        <li>Preventive termite protection for property preservation</li>
      </ul>
      
      <h2>Flexible Pricing for Northview Properties</h2>
      <p>Our pricing structure accommodates the diverse property needs found throughout Northview, ensuring professional pest control for every budget.</p>`,
      pricing: [
        { service: "Property Assessment & Treatment", price: "$119" },
        { service: "Comprehensive Maintenance Plan", price: "$65/month" },
        { service: "Multi-Property Discount", price: "15% off additional properties" }
      ],
      features: [
        "Versatile ant control for diverse property types",
        "Comprehensive rodent management for residential and commercial properties",
        "Preventive termite protection for property preservation"
      ],
      nearby: [
        "We serve all Northview property types",
        "residential and commercial buildings in 91790",
        "multi-unit complexes",
        "and surrounding West Covina diverse neighborhoods."
      ]
    },
    seo: {
      title: "Comprehensive Pest Control in Northview 91790 - All Property Types",
      description: "Professional pest control in Northview, 91790. Residential & commercial pest management solutions. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "plaza-west-covina-91790",
    name: "Plaza West Covina",
    displayName: "Plaza West Covina",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Plaza West Covina, 91790",
        subtitle: "Serving Plaza West Covina with professional pest control services"
      },
      description: `<p>At West Covina Pest Pros, we provide top-rated <strong>pest control in Plaza West Covina</strong>, serving the 91790 zip code with unmatched expertise. Our local team understands the unique pest challenges in this vibrant shopping and residential area, from ants invading homes to rodents lurking in nearby green spaces. Whether you're dealing with termites threatening your property or cockroaches in your apartment, our tailored solutions ensure safe, effective elimination.</p>
      
      <h2>Why Plaza West Covina Needs Specialized Pest Control</h2>
      <p>The bustling environment of Plaza West Covina attracts various pests due to its proximity to urban and suburban settings. Our <em>pest control services in Plaza West Covina</em> focus on eco-friendly methods that protect families and pets while targeting infestations at the source. With years of experience in 91790, we offer inspections, treatments, and prevention plans customized for local homes and businesses.</p>
      
      <ul>
        <li>Comprehensive ant control to stop trails in their tracks</li>
        <li>Rodent exclusion for secure, pest-free spaces</li>
        <li>Termite detection and treatment for structural safety</li>
      </ul>
      
      <h2>Affordable Pricing for Pest Control in 91790</h2>
      <p>Don't let pests disrupt your life in Plaza West Covina—contact West Covina Pest Pros today for reliable <strong>exterminators near 91790</strong>.</p>`,
      pricing: [
        { service: "Initial Inspection & Treatment", price: "$99" },
        { service: "Monthly Maintenance Plan", price: "$49/month" },
        { service: "Emergency Extermination", price: "$149" }
      ],
      features: [
        "Comprehensive ant control to stop trails in their tracks",
        "Rodent exclusion for secure, pest-free spaces",
        "Termite detection and treatment for structural safety"
      ],
      nearby: [
        "We serve Plaza West Covina shopping areas",
        "surrounding residential neighborhoods",
        "local businesses in 91790",
        "and adjacent West Covina commercial districts."
      ]
    },
    seo: {
      title: "Plaza West Covina Pest Control 91790 - Shopping & Residential Areas",
      description: "Expert pest control in Plaza West Covina, 91790. Commercial & residential pest management near shopping areas. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "ramona-91790",
    name: "Ramona",
    displayName: "Ramona",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in Ramona, 91790",
        subtitle: "Serving Ramona with professional pest control services"
      },
      description: `<p>Enjoy peace of mind with professional <strong>pest control in Ramona</strong> from West Covina Pest Pros, your dedicated local experts serving the 91790 community. Our experienced team understands the residential character of Ramona and provides pest management solutions that respect your neighborhood's quiet, family-friendly atmosphere while delivering the thorough protection your home deserves.</p>
      
      <h2>Ramona Pest Control: Neighborhood-Focused Service</h2>
      <p>Ramona's established residential community in 91790 benefits from our tailored approach to pest control. Our <em>Ramona pest control</em> services prioritize discretion and effectiveness, ensuring your home remains protected without disrupting the peaceful nature of your neighborhood. We understand the importance of maintaining property values and community standards.</p>
      
      <ul>
        <li>Discreet ant control that protects curb appeal</li>
        <li>Quiet rodent management for residential peace</li>
        <li>Preventive termite care for property value protection</li>
      </ul>
      
      <h2>Neighborhood-Friendly Pricing for Ramona</h2>
      <p>Our community-conscious pricing ensures that quality pest control remains accessible to all Ramona residents in 91790.</p>`,
      pricing: [
        { service: "Residential Protection Package", price: "$99" },
        { service: "Neighborhood Care Plan", price: "$52/month" },
        { service: "Property Value Protection Service", price: "Free assessment" }
      ],
      features: [
        "Discreet ant control that protects curb appeal",
        "Quiet rodent management for residential peace",
        "Preventive termite care for property value protection"
      ],
      nearby: [
        "We serve Ramona's established neighborhoods",
        "family-friendly residential areas in 91790",
        "quiet suburban streets",
        "and surrounding West Covina residential communities."
      ]
    },
    seo: {
      title: "Residential Pest Control in Ramona 91790 - Family-Friendly Service",
      description: "Professional pest control in Ramona, 91790. Discreet, family-friendly pest management for residential areas. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "south-hills-91791",
    name: "South Hills",
    displayName: "South Hills",
    zipCode: "91791",
    content: {
      hero: {
        title: "Expert Pest Control Services in South Hills, 91791",
        subtitle: "Serving South Hills with professional pest control services"
      },
      description: `<p>Discover top-rated <strong>pest control in South Hills</strong> with West Covina Pest Pros, your trusted local experts serving the 91791 area. Nestled in the heart of West Covina, South Hills faces unique pest challenges due to its suburban charm and proximity to green spaces. Our team brings deep knowledge of local pest behaviors, ensuring effective solutions for homes and businesses in this vibrant community.</p>
      
      <h2>Comprehensive Pest Control Solutions in South Hills 91791</h2>
      <p>From seasonal invasions to persistent infestations, we offer tailored <em>pest control services in South Hills</em> that protect your property year-round. Our eco-friendly treatments target common issues like ants marching through kitchens, termites damaging wooden structures, and rodents seeking shelter in attics. With years of experience in the 91791 zip code, we prioritize fast response times and minimal disruption to your daily life.</p>
      
      <ul>
        <li>Ant Control: Eliminate colonies with targeted baits and barriers.</li>
        <li>Termite Treatment: Advanced inspections and treatments to safeguard your investment.</li>
        <li>Rodent Removal: Humane trapping and exclusion for mice and rats.</li>
        <li>Bed Bug Extermination: Thorough heat treatments for complete eradication.</li>
      </ul>
      
      <h2>Affordable Pricing for Pest Control in South Hills</h2>
      <p>Our transparent pricing ensures value without surprises. Contact us for a free quote customized to your South Hills property.</p>`,
      pricing: [
        { service: "Initial Inspection & Treatment", price: "$99" },
        { service: "Monthly Maintenance Plan", price: "$49/month" },
        { service: "Termite Inspection", price: "Free with Service" }
      ],
      features: [
        "Ant Control: Eliminate colonies with targeted baits and barriers.",
        "Termite Treatment: Advanced inspections and treatments to safeguard your investment.",
        "Rodent Removal: Humane trapping and exclusion for mice and rats.",
        "Bed Bug Extermination: Thorough heat treatments for complete eradication."
      ],
      nearby: [
        "We serve South Hills suburban neighborhoods",
        "properties near green spaces in 91791",
        "residential and business areas",
        "and surrounding West Covina communities."
      ]
    },
    seo: {
      title: "South Hills Pest Control 91791 - Suburban & Green Space Specialists",
      description: "Professional pest control in South Hills, 91791. Comprehensive pest management for suburban properties near green spaces. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "vineyards-91791",
    name: "Vineyards",
    displayName: "Vineyards",
    zipCode: "91791",
    content: {
      hero: {
        title: "Expert Pest Control Services in Vineyards, 91791",
        subtitle: "Serving Vineyards with professional pest control services"
      },
      description: `<p>Experience specialized <strong>pest control in Vineyards</strong> with West Covina Pest Pros, your expert local team serving the distinctive 91791 community. The Vineyards area presents unique pest management challenges due to its landscaped environment and residential density. Our team understands how the local terrain and climate create specific pest patterns, allowing us to provide targeted solutions that protect your property effectively.</p>
      
      <h2>Vineyards Pest Control: Landscape-Aware Solutions</h2>
      <p>In the Vineyards area of 91791, our pest control approach recognizes the relationship between landscaping and pest activity. Our <em>Vineyards pest control</em> services account for the area's unique environmental factors, from irrigated landscapes to seasonal plant cycles. We provide solutions that work in harmony with your property's landscaping while effectively eliminating pest problems.</p>
      
      <ul>
        <li>Landscape-integrated ant control systems</li>
        <li>Moisture-management rodent prevention</li>
        <li>Plant-safe termite protection methods</li>
      </ul>
      
      <h2>Specialized Pricing for Vineyards Properties</h2>
      <p>Our pricing reflects the specialized approach needed for Vineyards area properties, ensuring effective pest control that works with your landscape investment.</p>`,
      pricing: [
        { service: "Landscape-Integrated Treatment", price: "$129" },
        { service: "Terrain-Aware Maintenance Plan", price: "$69/month" },
        { service: "Environmental Assessment", price: "Complimentary with service" }
      ],
      features: [
        "Landscape-integrated ant control systems",
        "Moisture-management rodent prevention",
        "Plant-safe termite protection methods"
      ],
      nearby: [
        "We serve the Vineyards residential community",
        "landscaped properties in 91791",
        "irrigation-adjacent areas",
        "and surrounding West Covina terrain-specific neighborhoods."
      ]
    },
    seo: {
      title: "Specialized Pest Control in Vineyards 91791 - Landscape-Aware Solutions",
      description: "Expert pest control in Vineyards, 91791. Landscape-integrated pest management for unique terrain properties. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  },
  {
    slug: "west-end-91790",
    name: "West End",
    displayName: "West End",
    zipCode: "91790",
    content: {
      hero: {
        title: "Expert Pest Control Services in West End, 91790",
        subtitle: "Serving West End with professional pest control services"
      },
      description: `<p>Secure your property with reliable <strong>pest control in West End</strong> from West Covina Pest Pros, your local experts serving the 91790 community. The West End area combines residential comfort with urban convenience, creating unique pest management needs that our experienced team understands thoroughly. We provide comprehensive solutions that protect your home or business while respecting the character of this established neighborhood.</p>
      
      <h2>West End Pest Control: Urban-Suburban Solutions</h2>
      <p>West End's position in 91790 creates a unique blend of urban and suburban pest challenges. Our <em>West End pest control</em> services address the full spectrum of pest issues, from residential ant problems to commercial rodent concerns. We adapt our methods to work effectively in this transitional environment while maintaining the community standards residents expect.</p>
      
      <ul>
        <li>Urban-adapted ant control for mixed-use areas</li>
        <li>Flexible rodent management for diverse property types</li>
        <li>Comprehensive termite protection for established structures</li>
      </ul>
      
      <h2>Adaptive Pricing for West End Properties</h2>
      <p>Our flexible pricing structure serves the diverse property types and needs found throughout West End's 91790 community.</p>`,
      pricing: [
        { service: "Area-Adaptive Treatment", price: "$109" },
        { service: "Mixed-Use Property Plan", price: "$59/month" },
        { service: "Transition Zone Assessment", price: "Free evaluation" }
      ],
      features: [
        "Urban-adapted ant control for mixed-use areas",
        "Flexible rodent management for diverse property types",
        "Comprehensive termite protection for established structures"
      ],
      nearby: [
        "We serve West End's residential areas",
        "mixed-use properties in 91790",
        "established neighborhood structures",
        "and surrounding West Covina transition zones."
      ]
    },
    seo: {
      title: "Adaptive Pest Control in West End 91790 - Urban-Suburban Solutions",
      description: "Professional pest control in West End, 91790. Flexible pest management for mixed urban-suburban environments. Call (213) 463-6630.",
      keywords: "pest control, pest management, West Covina, 2500 E Workman Ave #2516, West Covina, CA 91791"
    }
  }
];

export const getAreaBySlug = (slug: string): Area | undefined => {
  return areas.find(area => area.slug === slug);
};

export const getAllAreaSlugs = (): string[] => {
  return areas.map(area => area.slug);
};

// Services data that appears on every page
export const services = [
  { name: "Ant Control", slug: "ant-control" },
  { name: "Bed Bug Extermination", slug: "bed-bug-extermination" },
  { name: "Bee And Wasp Removal", slug: "bee-and-wasp-removal" },
  { name: "Cockroach Control", slug: "cockroach-control" },
  { name: "Flea Control", slug: "flea-control" },
  { name: "Moth Control", slug: "moth-control" },
  { name: "Mosquito Control", slug: "mosquito-control" },
  { name: "Rodent Control", slug: "rodent-control" },
  { name: "Silverfish Control", slug: "silverfish-control" },
  { name: "Spider Control", slug: "spider-control" },
  { name: "Termite Treatment", slug: "termite-treatment" },
  { name: "Tick Control", slug: "tick-control" },
  { name: "Commercial Pest Control", slug: "commercial-pest-control" },
  { name: "Residential Pest Control", slug: "residential-pest-control" }
];

// Business info
export const businessInfo = {
  name: "West Covina Pest Pros",
  phone: "(213) 463-6630",
  address: "2500 E Workman Ave #2516, West Covina, CA 91791",
  description: "Professional pest control services you can trust in West Covina."
};