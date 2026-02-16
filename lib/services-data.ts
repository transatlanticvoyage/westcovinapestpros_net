export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  contentHtml: string;
  benefits: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  estimateTitle: string;
  icon: string;
}

export const services: ServiceData[] = [
  {
    slug: 'ant-control',
    title: 'Ant Control',
    metaTitle: 'Pest Control in West Covina Near Me 91791 - Ant Control, Termite Extermination, Rodent Removal, Bed Bug Treatment',
    metaDescription: 'Expert ant control in West Covina, CA 91791. Professional pest control near me for homes & businesses. Fast, reliable service from West Covina Pest Pros. Call now!',
    heroTitle: 'Professional Ant Control Services in West Covina',
    heroDescription: 'Professional ant control services in West Covina by West Covina Pest Pros',
    contentHtml: `<p>At West Covina Pest Pros, we specialize in effective <strong>ant control in West Covina</strong>, providing top-tier pest control solutions tailored to the unique needs of our local community at 2500 E Workman Ave #2516, West Covina, CA 91791. With years of experience serving West Covina residents and businesses, our team understands the challenges posed by common ant infestations in our warm California climate. Whether you're dealing with carpenter ants damaging your property or sugar ants invading your kitchen, our eco-friendly treatments ensure long-lasting results without compromising your family's safety.</p>

<h2>Why Choose Our Ant Extermination in West Covina?</h2>
<p>Our <em>ant control services in West Covina</em> go beyond temporary fixes. We use advanced, targeted methods to eliminate ant colonies at the source, preventing future invasions. As a trusted local pest control provider, we prioritize quick response times and customized plans that fit your budget and schedule. Serving ZIP code 91791 and surrounding areas, West Covina Pest Pros is your go-to for reliable ant removal that protects your home or office.</p>

<ul>
<li>Free initial inspections for all West Covina properties</li>
<li>Guaranteed results with follow-up treatments if needed</li>
<li>Environmentally safe products approved for indoor and outdoor use</li>
</ul>

<h2>Pricing for Ant Control Services</h2>
<table border="1">
<tr><th>Service Package</th><th>Description</th><th>Price</th></tr>
<tr><td>Basic Ant Treatment</td><td>Single-room extermination and prevention</td><td>$99</td></tr>
<tr><td>Full Home Ant Control</td><td>Comprehensive inspection and whole-house treatment</td><td>$199</td></tr>
<tr><td>Ongoing Maintenance Plan</td><td>Quarterly visits for lasting protection</td><td>$49/month</td></tr>
</table>

<p>Don't let ants take over your space—contact West Covina Pest Pros today for a free quote on <strong>professional ant control near me in West Covina</strong>!</p>`,
    benefits: [
      'Eliminate ant colonies quickly and effectively to restore peace in your West Covina home',
      'Prevent structural damage from carpenter ants with our expert local treatments',
      'Use safe, non-toxic methods that protect pets and children in 91791',
      'Save time and money with our guaranteed ant control services that prevent re-infestation',
      'Enjoy 24/7 emergency response from West Covina Pest Pros for urgent pest issues'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Free Inspection',
        description: 'Our technicians visit your West Covina property to identify ant types and entry points.'
      },
      {
        step: 2,
        title: 'Customized Treatment Plan',
        description: 'We develop a targeted strategy using safe, effective products for ant control in West Covina.'
      },
      {
        step: 3,
        title: 'Implementation and Monitoring',
        description: 'Apply treatments and monitor progress with follow-up visits to ensure complete elimination.'
      },
      {
        step: 4,
        title: 'Prevention Advice',
        description: 'Provide tips to keep ants away, tailored to local West Covina conditions.'
      }
    ],
    faqs: [
      {
        question: 'How much does ant control cost in West Covina?',
        answer: 'Costs start at $99 for basic treatments at West Covina Pest Pros. Full home services are $199, with maintenance plans at $49/month. Contact us for a free quote.'
      },
      {
        question: 'Are your ant control methods safe for families in 91791?',
        answer: 'Yes, we use EPA-approved, eco-friendly products that are safe for children, pets, and the environment in West Covina homes.'
      },
      {
        question: 'How long does it take to get rid of ants in West Covina?',
        answer: 'Most ant infestations are controlled within 1-2 visits, but severe cases may require ongoing monitoring. We offer fast service from our local 91791 location.'
      },
      {
        question: 'Do you offer guarantees for ant extermination services?',
        answer: 'Absolutely! West Covina Pest Pros provides a satisfaction guarantee—if ants return within 30 days, we\'ll retreat for free.'
      }
    ],
    estimateTitle: 'Get Your Free Ant Control Estimate',
    icon: 'fas fa-tools'
  },
  {
    slug: 'bed-bug-extermination',
    title: 'Bed Bug Extermination',
    metaTitle: 'Bed Bug Extermination West Covina 91791 - Professional Bed Bug Treatment Near Me',
    metaDescription: 'Professional bed bug extermination in West Covina, CA 91791. Fast, effective bed bug treatment from West Covina Pest Pros. Call for immediate service!',
    heroTitle: 'Professional Bed Bug Extermination in West Covina',
    heroDescription: 'Expert bed bug extermination services in West Covina by West Covina Pest Pros',
    contentHtml: `<p>At West Covina Pest Pros, we provide comprehensive <strong>bed bug extermination in West Covina</strong>, offering effective solutions to eliminate these persistent pests from your home or business. Located at 2500 E Workman Ave #2516, West Covina, CA 91791, our experienced team uses proven methods to ensure complete bed bug elimination and prevent future infestations.</p>

<h2>Why Choose Our Bed Bug Treatment Services?</h2>
<p>Our bed bug extermination services in West Covina combine advanced heat treatment, chemical applications, and thorough inspections to eliminate bed bugs at all life stages. We understand the urgency of bed bug problems and offer same-day service to restore your peace of mind quickly.</p>

<ul>
<li>Heat treatment that kills bed bugs and eggs instantly</li>
<li>Comprehensive inspection and treatment of all affected areas</li>
<li>Follow-up visits to ensure complete elimination</li>
</ul>

<h2>Bed Bug Treatment Pricing</h2>
<table border="1">
<tr><th>Treatment Type</th><th>Description</th><th>Price</th></tr>
<tr><td>Single Room Treatment</td><td>Heat treatment for one bedroom</td><td>$399</td></tr>
<tr><td>Whole Home Treatment</td><td>Complete bed bug elimination</td><td>$899</td></tr>
<tr><td>Follow-up Treatment</td><td>Additional treatment if needed</td><td>$199</td></tr>
</table>

<p>Don't let bed bugs disrupt your sleep—contact West Covina Pest Pros for immediate bed bug extermination service!</p>`,
    benefits: [
      'Complete bed bug elimination using advanced heat treatment technology',
      'Same-day service available for urgent bed bug infestations',
      'Safe, non-toxic methods that protect your family and pets',
      'Thorough inspection to identify all hiding spots and breeding areas',
      'Guaranteed results with follow-up treatments included'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Thorough Inspection',
        description: 'Complete examination of your property to locate all bed bug activity and hiding spots.'
      },
      {
        step: 2,
        title: 'Treatment Plan Development',
        description: 'Create a customized treatment strategy using heat, chemical, or combination methods.'
      },
      {
        step: 3,
        title: 'Professional Treatment',
        description: 'Execute the treatment plan using state-of-the-art equipment and proven techniques.'
      },
      {
        step: 4,
        title: 'Follow-up and Prevention',
        description: 'Monitor results and provide prevention tips to avoid future infestations.'
      }
    ],
    faqs: [
      {
        question: 'How effective is heat treatment for bed bugs?',
        answer: 'Heat treatment is 100% effective when properly applied, killing all bed bugs and eggs in a single treatment session.'
      },
      {
        question: 'How long does bed bug treatment take?',
        answer: 'Treatment typically takes 4-8 hours depending on the size of the infestation and property.'
      },
      {
        question: 'Do I need to leave my home during treatment?',
        answer: 'Yes, you\'ll need to vacate during heat treatment, but you can return the same day once treatment is complete.'
      },
      {
        question: 'Is bed bug treatment safe for my family?',
        answer: 'Our treatments are completely safe for humans and pets once the process is complete and the area has cooled.'
      }
    ],
    estimateTitle: 'Get Your Free Bed Bug Treatment Estimate',
    icon: 'fas fa-bed'
  },
  {
    slug: 'bee-and-wasp-removal',
    title: 'Bee And Wasp Removal',
    metaTitle: 'Bee & Wasp Removal West Covina 91791 - Safe Professional Hive Removal',
    metaDescription: 'Safe bee and wasp removal in West Covina, CA 91791. Professional hive removal and wasp nest elimination. Emergency service available!',
    heroTitle: 'Professional Bee and Wasp Removal Services',
    heroDescription: 'Safe and effective bee and wasp removal services in West Covina',
    contentHtml: `<p>West Covina Pest Pros specializes in safe <strong>bee and wasp removal in West Covina</strong>, providing expert services to protect your property while preserving beneficial pollinators when possible. Our trained technicians handle dangerous wasp nests and bee colonies with the utmost care and safety.</p>

<h2>Safe Bee and Wasp Removal Services</h2>
<p>Our approach to bee and wasp removal prioritizes safety for both our clients and the insects. We relocate beneficial bees when possible and eliminate aggressive wasp colonies that pose threats to your family.</p>

<ul>
<li>Emergency same-day service for dangerous situations</li>
<li>Bee relocation services to preserve pollinators</li>
<li>Complete wasp nest removal and prevention</li>
</ul>

<h2>Bee and Wasp Removal Pricing</h2>
<table border="1">
<tr><th>Service</th><th>Description</th><th>Price</th></tr>
<tr><td>Wasp Nest Removal</td><td>Single nest elimination</td><td>$149</td></tr>
<tr><td>Bee Relocation</td><td>Safe bee colony relocation</td><td>$299</td></tr>
<tr><td>Multiple Nest Treatment</td><td>Treatment for 3+ nests</td><td>$399</td></tr>
</table>

<p>Protect your family from dangerous stings—contact West Covina Pest Pros for professional bee and wasp removal!</p>`,
    benefits: [
      'Safe removal of dangerous wasp nests and bee colonies',
      'Emergency response for urgent stinging insect threats',
      'Eco-friendly bee relocation to preserve pollinators',
      'Complete nest removal with prevention measures',
      'Experienced technicians with proper safety equipment'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Safety Assessment',
        description: 'Evaluate the location and danger level of bee or wasp activity.'
      },
      {
        step: 2,
        title: 'Removal Strategy',
        description: 'Determine the best approach: relocation for bees or elimination for wasps.'
      },
      {
        step: 3,
        title: 'Safe Removal',
        description: 'Execute removal using proper safety equipment and techniques.'
      },
      {
        step: 4,
        title: 'Prevention Measures',
        description: 'Seal entry points and provide recommendations to prevent future nesting.'
      }
    ],
    faqs: [
      {
        question: 'Do you relocate bees instead of killing them?',
        answer: 'Yes, we prioritize bee relocation when possible to preserve these important pollinators.'
      },
      {
        question: 'How quickly can you respond to wasp emergencies?',
        answer: 'We offer same-day emergency service for dangerous wasp situations in West Covina.'
      },
      {
        question: 'Is wasp removal safe around children and pets?',
        answer: 'Yes, we use safe removal methods and ensure the area is secure before completing the service.'
      },
      {
        question: 'What\'s the difference between bee and wasp removal?',
        answer: 'Bees are typically relocated to preserve them, while aggressive wasps are eliminated for safety.'
      }
    ],
    estimateTitle: 'Get Your Free Bee & Wasp Removal Estimate',
    icon: 'fas fa-bug'
  },
  {
    slug: 'cockroach-control',
    title: 'Cockroach Control',
    metaTitle: 'Cockroach Control West Covina 91791 - Professional Roach Extermination',
    metaDescription: 'Professional cockroach control in West Covina, CA 91791. Effective roach extermination and prevention services. Call West Covina Pest Pros today!',
    heroTitle: 'Professional Cockroach Control in West Covina',
    heroDescription: 'Effective cockroach extermination services in West Covina',
    contentHtml: `<p>West Covina Pest Pros delivers comprehensive <strong>cockroach control in West Covina</strong>, using advanced treatment methods to eliminate roach infestations and prevent future problems. Our experienced team understands cockroach behavior and uses targeted approaches for lasting results.</p>

<h2>Effective Cockroach Extermination</h2>
<p>Our cockroach control services combine gel baits, residual sprays, and exclusion techniques to eliminate roaches at their source. We target all common species including German cockroaches, American cockroaches, and Oriental cockroaches.</p>

<ul>
<li>Comprehensive inspection to identify infestation sources</li>
<li>Targeted treatment using professional-grade products</li>
<li>Ongoing monitoring and prevention strategies</li>
</ul>

<h2>Cockroach Control Pricing</h2>
<table border="1">
<tr><th>Service Level</th><th>Description</th><th>Price</th></tr>
<tr><td>Initial Treatment</td><td>Comprehensive roach elimination</td><td>$179</td></tr>
<tr><td>Follow-up Treatment</td><td>Additional treatment as needed</td><td>$89</td></tr>
<tr><td>Quarterly Maintenance</td><td>Ongoing prevention program</td><td>$69/visit</td></tr>
</table>

<p>Eliminate cockroaches for good—contact West Covina Pest Pros for professional roach control services!</p>`,
    benefits: [
      'Complete elimination of cockroach infestations using proven methods',
      'Targeted treatment for all common cockroach species',
      'Safe, effective products that won\'t harm your family or pets',
      'Ongoing prevention to keep roaches from returning',
      'Fast response times for urgent cockroach problems'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Detailed Inspection',
        description: 'Thorough examination to locate cockroach hiding spots and breeding areas.'
      },
      {
        step: 2,
        title: 'Treatment Application',
        description: 'Apply targeted treatments using gel baits and residual sprays.'
      },
      {
        step: 3,
        title: 'Monitoring Progress',
        description: 'Track treatment effectiveness and adjust strategy as needed.'
      },
      {
        step: 4,
        title: 'Prevention Planning',
        description: 'Implement exclusion measures and sanitation recommendations.'
      }
    ],
    faqs: [
      {
        question: 'How long does it take to eliminate cockroaches?',
        answer: 'Most cockroach infestations are controlled within 2-4 weeks with proper treatment and follow-up.'
      },
      {
        question: 'Are cockroach treatments safe for my family?',
        answer: 'Yes, we use EPA-approved products applied by certified technicians for maximum safety.'
      },
      {
        question: 'What attracts cockroaches to my home?',
        answer: 'Cockroaches are attracted to food, water, and shelter. We\'ll help identify and eliminate these attractants.'
      },
      {
        question: 'Do you offer guarantees on cockroach control?',
        answer: 'Yes, we guarantee our cockroach treatments and will return if problems persist.'
      }
    ],
    estimateTitle: 'Get Your Free Cockroach Control Estimate',
    icon: 'fas fa-bug'
  },
  {
    slug: 'commercial-pest-control',
    title: 'Commercial Pest Control',
    metaTitle: 'Commercial Pest Control West Covina 91791 - Business Pest Management',
    metaDescription: 'Professional commercial pest control in West Covina, CA 91791. Protect your business with comprehensive pest management services. Call today!',
    heroTitle: 'Commercial Pest Control Services in West Covina',
    heroDescription: 'Professional pest management solutions for West Covina businesses',
    contentHtml: `<p>West Covina Pest Pros provides comprehensive <strong>commercial pest control in West Covina</strong>, protecting businesses from pest-related disruptions and health code violations. Our commercial services are tailored to meet the unique needs of restaurants, offices, warehouses, and retail establishments.</p>

<h2>Professional Business Pest Management</h2>
<p>Our commercial pest control services include regular inspections, preventive treatments, and emergency response to keep your business pest-free. We work with your schedule to minimize disruptions to your operations.</p>

<ul>
<li>Customized treatment plans for different business types</li>
<li>Regular monitoring and documentation for compliance</li>
<li>Emergency response for urgent pest situations</li>
</ul>

<h2>Commercial Pest Control Pricing</h2>
<table border="1">
<tr><th>Service Type</th><th>Description</th><th>Price</th></tr>
<tr><td>Monthly Service</td><td>Regular pest prevention (under 5,000 sq ft)</td><td>$89/month</td></tr>
<tr><td>Quarterly Service</td><td>Seasonal treatment program</td><td>$199/quarter</td></tr>
<tr><td>One-time Treatment</td><td>Emergency or initial treatment</td><td>$299</td></tr>
</table>

<p>Protect your business reputation—contact West Covina Pest Pros for reliable commercial pest control!</p>`,
    benefits: [
      'Protect your business reputation with consistent pest prevention',
      'Maintain health code compliance with documented service records',
      'Minimize business disruptions with flexible scheduling',
      'Comprehensive treatment for all commercial pest issues',
      'Emergency response for urgent pest situations'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Business Assessment',
        description: 'Evaluate your facility\'s unique pest risks and compliance requirements.'
      },
      {
        step: 2,
        title: 'Custom Program Design',
        description: 'Create a tailored pest management program for your business type.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Begin regular treatments with minimal disruption to operations.'
      },
      {
        step: 4,
        title: 'Ongoing Support',
        description: 'Provide regular reporting and adjust program as needed.'
      }
    ],
    faqs: [
      {
        question: 'Do you provide documentation for health inspections?',
        answer: 'Yes, we provide detailed service records and documentation required for health code compliance.'
      },
      {
        question: 'Can you work around our business hours?',
        answer: 'Absolutely, we offer flexible scheduling including after-hours and weekend service.'
      },
      {
        question: 'What types of businesses do you serve?',
        answer: 'We serve restaurants, offices, retail stores, warehouses, healthcare facilities, and more.'
      },
      {
        question: 'How quickly can you respond to emergencies?',
        answer: 'We offer same-day emergency service for urgent commercial pest situations.'
      }
    ],
    estimateTitle: 'Get Your Free Commercial Pest Control Quote',
    icon: 'fas fa-building'
  },
  {
    slug: 'flea-control',
    title: 'Flea Control',
    metaTitle: 'Flea Control West Covina 91791 - Professional Flea Treatment & Removal',
    metaDescription: 'Effective flea control in West Covina, CA 91791. Professional flea treatment for homes and pets. Fast, safe flea elimination services!',
    heroTitle: 'Professional Flea Control Services in West Covina',
    heroDescription: 'Effective flea elimination and prevention services for your home',
    contentHtml: `<p>West Covina Pest Pros provides comprehensive <strong>flea control in West Covina</strong>, eliminating flea infestations that affect both your pets and family. Our integrated approach targets fleas at all life stages for complete elimination and long-term prevention.</p>

<h2>Complete Flea Elimination Services</h2>
<p>Our flea control services address both indoor and outdoor flea populations using targeted treatments that break the flea life cycle. We work with you to protect your pets and family from flea bites and infestations.</p>

<ul>
<li>Treatment of all flea life stages (eggs, larvae, adults)</li>
<li>Indoor and outdoor treatment applications</li>
<li>Pet-safe treatment options available</li>
</ul>

<h2>Flea Control Pricing</h2>
<table border="1">
<tr><th>Treatment Package</th><th>Description</th><th>Price</th></tr>
<tr><td>Interior Treatment</td><td>Complete indoor flea elimination</td><td>$159</td></tr>
<tr><td>Yard Treatment</td><td>Outdoor flea control for your property</td><td>$129</td></tr>
<tr><td>Complete Package</td><td>Indoor and outdoor flea treatment</td><td>$249</td></tr>
</table>

<p>Stop flea infestations before they spread—contact West Covina Pest Pros for professional flea control!</p>`,
    benefits: [
      'Complete flea elimination targeting all life stages',
      'Pet-safe treatment options to protect your furry friends',
      'Indoor and outdoor treatment for comprehensive control',
      'Fast-acting treatments that provide quick relief',
      'Prevention strategies to avoid future infestations'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Flea Assessment',
        description: 'Identify the extent of flea infestation and affected areas.'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Develop a comprehensive treatment plan for indoor and outdoor areas.'
      },
      {
        step: 3,
        title: 'Application',
        description: 'Apply targeted treatments to eliminate fleas at all life stages.'
      },
      {
        step: 4,
        title: 'Follow-up Care',
        description: 'Monitor progress and provide additional treatments if needed.'
      }
    ],
    faqs: [
      {
        question: 'Are flea treatments safe for my pets?',
        answer: 'Yes, we use pet-safe products and can coordinate treatment with your veterinarian\'s flea control program.'
      },
      {
        question: 'How long does it take to eliminate fleas?',
        answer: 'Most flea infestations are controlled within 2-3 weeks with proper treatment and follow-up.'
      },
      {
        question: 'Do I need to treat both indoor and outdoor areas?',
        answer: 'For best results, we recommend treating both areas as fleas can develop in yard areas and move indoors.'
      },
      {
        question: 'When can my pets return after treatment?',
        answer: 'Pets can typically return once treated areas are dry, usually within 2-4 hours.'
      }
    ],
    estimateTitle: 'Get Your Free Flea Control Estimate',
    icon: 'fas fa-bug'
  },
  {
    slug: 'mosquito-control',
    title: 'Mosquito Control',
    metaTitle: 'Mosquito Control West Covina 91791 - Professional Mosquito Treatment',
    metaDescription: 'Professional mosquito control in West Covina, CA 91791. Effective mosquito treatment and prevention for your yard. Enjoy your outdoor space!',
    heroTitle: 'Professional Mosquito Control in West Covina',
    heroDescription: 'Effective mosquito elimination for comfortable outdoor living',
    contentHtml: `<p>West Covina Pest Pros offers comprehensive <strong>mosquito control in West Covina</strong>, helping you reclaim your outdoor spaces from these disease-carrying pests. Our targeted treatments reduce mosquito populations and provide lasting protection for your family.</p>

<h2>Effective Mosquito Treatment Programs</h2>
<p>Our mosquito control services include breeding site elimination, barrier treatments, and ongoing maintenance to keep mosquito populations under control throughout the season.</p>

<ul>
<li>Breeding site identification and elimination</li>
<li>Barrier spray treatments for long-lasting protection</li>
<li>Seasonal maintenance programs available</li>
</ul>

<h2>Mosquito Control Pricing</h2>
<table border="1">
<tr><th>Service Option</th><th>Description</th><th>Price</th></tr>
<tr><td>One-Time Treatment</td><td>Single barrier spray application</td><td>$149</td></tr>
<tr><td>Monthly Program</td><td>Regular treatments during mosquito season</td><td>$79/month</td></tr>
<tr><td>Event Treatment</td><td>Pre-event mosquito control</td><td>$199</td></tr>
</table>

<p>Enjoy your yard again—contact West Covina Pest Pros for effective mosquito control services!</p>`,
    benefits: [
      'Dramatic reduction in mosquito populations around your home',
      'Protection from mosquito-borne diseases for your family',
      'Ability to enjoy outdoor spaces without constant mosquito bites',
      'Eco-friendly treatment options that protect beneficial insects',
      'Seasonal programs for continuous protection'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Property Inspection',
        description: 'Identify mosquito breeding sites and resting areas on your property.'
      },
      {
        step: 2,
        title: 'Source Elimination',
        description: 'Remove or treat standing water sources where mosquitoes breed.'
      },
      {
        step: 3,
        title: 'Barrier Treatment',
        description: 'Apply long-lasting treatments to vegetation and resting areas.'
      },
      {
        step: 4,
        title: 'Ongoing Maintenance',
        description: 'Provide regular treatments to maintain mosquito control throughout the season.'
      }
    ],
    faqs: [
      {
        question: 'How long does mosquito treatment last?',
        answer: 'Our barrier treatments typically provide 3-4 weeks of mosquito control, depending on weather conditions.'
      },
      {
        question: 'Is mosquito treatment safe for children and pets?',
        answer: 'Yes, our treatments are safe for families and pets once the application has dried.'
      },
      {
        question: 'When is the best time to start mosquito control?',
        answer: 'We recommend starting treatments in early spring before mosquito populations peak.'
      },
      {
        question: 'Do you offer organic mosquito control options?',
        answer: 'Yes, we offer eco-friendly treatment options for environmentally conscious customers.'
      }
    ],
    estimateTitle: 'Get Your Free Mosquito Control Estimate',
    icon: 'fas fa-bug'
  },
  {
    slug: 'moth-control',
    title: 'Moth Control',
    metaTitle: 'Moth Control West Covina 91791 - Professional Moth Extermination',
    metaDescription: 'Professional moth control in West Covina, CA 91791. Effective treatment for clothes moths, pantry moths, and more. Protect your belongings!',
    heroTitle: 'Professional Moth Control in West Covina',
    heroDescription: 'Effective moth elimination and prevention services',
    contentHtml: `<p>West Covina Pest Pros provides specialized <strong>moth control in West Covina</strong>, protecting your clothing, food, and belongings from damaging moth infestations. Our targeted treatments eliminate both clothes moths and pantry moths effectively.</p>

<h2>Comprehensive Moth Treatment Services</h2>
<p>Our moth control services address different types of moth infestations including clothes moths that damage fabrics and pantry moths that contaminate food products.</p>

<ul>
<li>Identification of moth species and infestation sources</li>
<li>Targeted treatments for clothes and pantry moths</li>
<li>Prevention strategies to protect belongings</li>
</ul>

<h2>Moth Control Pricing</h2>
<table border="1">
<tr><th>Service Type</th><th>Description</th><th>Price</th></tr>
<tr><td>Clothes Moth Treatment</td><td>Treatment for fabric-damaging moths</td><td>$139</td></tr>
<tr><td>Pantry Moth Treatment</td><td>Kitchen and food storage area treatment</td><td>$119</td></tr>
<tr><td>Complete Moth Control</td><td>Comprehensive treatment for all moth types</td><td>$219</td></tr>
</table>

<p>Protect your belongings from moth damage—contact West Covina Pest Pros for professional moth control!</p>`,
    benefits: [
      'Protection of valuable clothing and fabric items from moth damage',
      'Elimination of pantry moths that contaminate food products',
      'Targeted treatments specific to different moth species',
      'Prevention strategies to avoid future moth problems',
      'Safe, effective treatments that won\'t damage belongings'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Moth Identification',
        description: 'Identify the type of moths and locate infestation sources.'
      },
      {
        step: 2,
        title: 'Source Removal',
        description: 'Remove infested materials and identify attractants.'
      },
      {
        step: 3,
        title: 'Targeted Treatment',
        description: 'Apply appropriate treatments for specific moth species.'
      },
      {
        step: 4,
        title: 'Prevention Plan',
        description: 'Implement storage and prevention strategies to avoid re-infestation.'
      }
    ],
    faqs: [
      {
        question: 'What\'s the difference between clothes moths and pantry moths?',
        answer: 'Clothes moths damage fabrics and natural fibers, while pantry moths infest food products and grains.'
      },
      {
        question: 'How can I prevent moth infestations?',
        answer: 'Regular cleaning, proper food storage, and cedar products can help prevent moth problems.'
      },
      {
        question: 'Are moth treatments safe for my clothes?',
        answer: 'Yes, our treatments are specifically designed to eliminate moths without damaging fabrics.'
      },
      {
        question: 'How long does moth treatment take to work?',
        answer: 'Most moth problems are resolved within 1-2 weeks of treatment application.'
      }
    ],
    estimateTitle: 'Get Your Free Moth Control Estimate',
    icon: 'fas fa-bug'
  },
  {
    slug: 'residential-pest-control',
    title: 'Residential Pest Control',
    metaTitle: 'Residential Pest Control West Covina 91791 - Home Pest Management',
    metaDescription: 'Complete residential pest control in West Covina, CA 91791. Protect your home with comprehensive pest management services. Family-safe treatments!',
    heroTitle: 'Residential Pest Control Services in West Covina',
    heroDescription: 'Comprehensive pest management solutions for your home',
    contentHtml: `<p>West Covina Pest Pros provides complete <strong>residential pest control in West Covina</strong>, protecting your home and family from a wide range of pest problems. Our comprehensive approach ensures your home remains pest-free year-round.</p>

<h2>Complete Home Pest Protection</h2>
<p>Our residential pest control services include treatment and prevention for ants, spiders, roaches, rodents, and other common household pests. We customize our approach based on your home\'s specific needs.</p>

<ul>
<li>Comprehensive inspection and treatment of your entire home</li>
<li>Quarterly service plans for ongoing protection</li>
<li>Family and pet-safe treatment methods</li>
</ul>

<h2>Residential Pest Control Pricing</h2>
<table border="1">
<tr><th>Service Plan</th><th>Description</th><th>Price</th></tr>
<tr><td>Initial Treatment</td><td>Complete home pest elimination</td><td>$199</td></tr>
<tr><td>Quarterly Service</td><td>Ongoing pest prevention program</td><td>$89/visit</td></tr>
<tr><td>Monthly Service</td><td>Enhanced protection plan</td><td>$69/month</td></tr>
</table>

<p>Keep your home pest-free—contact West Covina Pest Pros for comprehensive residential pest control!</p>`,
    benefits: [
      'Complete protection from all common household pests',
      'Family and pet-safe treatment methods for peace of mind',
      'Regular service to prevent pest problems before they start',
      'Customized treatment plans based on your home\'s needs',
      'Emergency service available for urgent pest situations'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Home Inspection',
        description: 'Thorough inspection of your home to identify pest issues and entry points.'
      },
      {
        step: 2,
        title: 'Treatment Plan',
        description: 'Develop a customized pest control plan for your specific needs.'
      },
      {
        step: 3,
        title: 'Initial Treatment',
        description: 'Apply comprehensive treatments to eliminate existing pest problems.'
      },
      {
        step: 4,
        title: 'Ongoing Service',
        description: 'Regular maintenance visits to keep your home pest-free.'
      }
    ],
    faqs: [
      {
        question: 'What pests are covered in residential service?',
        answer: 'Our service covers ants, spiders, roaches, silverfish, earwigs, and many other common household pests.'
      },
      {
        question: 'How often should I have pest control service?',
        answer: 'We recommend quarterly service for most homes, with monthly service for properties with persistent issues.'
      },
      {
        question: 'Are your treatments safe for children and pets?',
        answer: 'Yes, we use family and pet-safe products applied by certified, experienced technicians.'
      },
      {
        question: 'What if pests return between visits?',
        answer: 'We offer free callback service between scheduled visits if covered pests return.'
      }
    ],
    estimateTitle: 'Get Your Free Residential Pest Control Estimate',
    icon: 'fas fa-home'
  },
  {
    slug: 'rodent-control',
    title: 'Rodent Control',
    metaTitle: 'Rodent Control West Covina 91791 - Professional Rat & Mouse Extermination',
    metaDescription: 'Professional rodent control in West Covina, CA 91791. Effective rat and mouse extermination services. Protect your home from rodent damage!',
    heroTitle: 'Professional Rodent Control in West Covina',
    heroDescription: 'Effective rat and mouse elimination and exclusion services',
    contentHtml: `<p>West Covina Pest Pros provides comprehensive <strong>rodent control in West Covina</strong>, eliminating rats and mice that threaten your property and health. Our integrated approach combines trapping, exclusion, and sanitation for long-term rodent control.</p>

<h2>Complete Rodent Elimination Services</h2>
<p>Our rodent control services address both rats and mice using proven trapping methods, exclusion techniques, and ongoing monitoring to ensure complete elimination and prevention.</p>

<ul>
<li>Comprehensive inspection to identify entry points and nesting areas</li>
<li>Strategic trap placement for maximum effectiveness</li>
<li>Exclusion services to prevent future rodent problems</li>
</ul>

<h2>Rodent Control Pricing</h2>
<table border="1">
<tr><th>Service Level</th><th>Description</th><th>Price</th></tr>
<tr><td>Initial Service</td><td>Complete rodent elimination program</td><td>$189</td></tr>
<tr><td>Exclusion Service</td><td>Seal entry points to prevent re-entry</td><td>$299</td></tr>
<tr><td>Ongoing Monitoring</td><td>Monthly monitoring and maintenance</td><td>$59/month</td></tr>
</table>

<p>Stop rodent damage to your property—contact West Covina Pest Pros for professional rodent control!</p>`,
    benefits: [
      'Complete elimination of rats and mice from your property',
      'Prevention of property damage from rodent chewing and nesting',
      'Protection from health risks associated with rodent droppings',
      'Exclusion services to prevent future rodent entry',
      'Ongoing monitoring to ensure long-term control'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Rodent Inspection',
        description: 'Comprehensive inspection to identify rodent activity and entry points.'
      },
      {
        step: 2,
        title: 'Trapping Program',
        description: 'Strategic placement of traps to eliminate existing rodent populations.'
      },
      {
        step: 3,
        title: 'Exclusion Work',
        description: 'Seal entry points to prevent future rodent access.'
      },
      {
        step: 4,
        title: 'Monitoring',
        description: 'Ongoing monitoring to ensure continued rodent control.'
      }
    ],
    faqs: [
      {
        question: 'What\'s the difference between rats and mice?',
        answer: 'Rats are larger and more cautious, while mice are smaller and more curious. Treatment approaches differ for each.'
      },
      {
        question: 'How long does it take to eliminate rodents?',
        answer: 'Most rodent problems are controlled within 2-4 weeks, depending on the size of the infestation.'
      },
      {
        question: 'Do you use poison for rodent control?',
        answer: 'We primarily use trapping methods, which are safer and more effective than poison baits.'
      },
      {
        question: 'How can I prevent rodents from returning?',
        answer: 'Exclusion work, proper sanitation, and ongoing monitoring are key to preventing rodent re-infestation.'
      }
    ],
    estimateTitle: 'Get Your Free Rodent Control Estimate',
    icon: 'fas fa-mouse'
  },
  {
    slug: 'silverfish-control',
    title: 'Silverfish Control',
    metaTitle: 'Silverfish Control West Covina 91791 - Professional Silverfish Extermination',
    metaDescription: 'Professional silverfish control in West Covina, CA 91791. Effective silverfish extermination to protect your books, papers, and belongings!',
    heroTitle: 'Professional Silverfish Control in West Covina',
    heroDescription: 'Effective silverfish elimination and prevention services',
    contentHtml: `<p>West Covina Pest Pros provides targeted <strong>silverfish control in West Covina</strong>, protecting your books, papers, and belongings from these destructive pests. Our treatments eliminate silverfish infestations and prevent damage to your valuable items.</p>

<h2>Effective Silverfish Treatment</h2>
<p>Our silverfish control services target the humid conditions and food sources that attract these pests, providing comprehensive elimination and long-term prevention.</p>

<ul>
<li>Moisture control recommendations to eliminate silverfish habitat</li>
<li>Targeted treatments in areas where silverfish hide and feed</li>
<li>Protection of books, papers, and fabric items</li>
</ul>

<h2>Silverfish Control Pricing</h2>
<table border="1">
<tr><th>Treatment Option</th><th>Description</th><th>Price</th></tr>
<tr><td>Standard Treatment</td><td>Interior silverfish elimination</td><td>$129</td></tr>
<tr><td>Comprehensive Service</td><td>Treatment plus moisture control advice</td><td>$179</td></tr>
<tr><td>Follow-up Treatment</td><td>Additional treatment if needed</td><td>$79</td></tr>
</table>

<p>Protect your belongings from silverfish damage—contact West Covina Pest Pros for professional silverfish control!</p>`,
    benefits: [
      'Protection of books, papers, and fabric items from silverfish damage',
      'Elimination of silverfish populations in humid areas of your home',
      'Moisture control recommendations to prevent future infestations',
      'Targeted treatments in areas where silverfish hide and breed',
      'Long-lasting results with proper environmental modifications'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Silverfish Detection',
        description: 'Identify silverfish activity and preferred hiding spots in your home.'
      },
      {
        step: 2,
        title: 'Moisture Assessment',
        description: 'Evaluate moisture levels and humidity sources that attract silverfish.'
      },
      {
        step: 3,
        title: 'Targeted Treatment',
        description: 'Apply treatments to areas where silverfish hide and feed.'
      },
      {
        step: 4,
        title: 'Environmental Control',
        description: 'Provide recommendations for moisture control and prevention.'
      }
    ],
    faqs: [
      {
        question: 'What damage do silverfish cause?',
        answer: 'Silverfish eat paper, books, wallpaper, fabrics, and other items containing starches and cellulose.'
      },
      {
        question: 'Why do I have silverfish in my home?',
        answer: 'Silverfish are attracted to moisture and humidity, often found in bathrooms, basements, and attics.'
      },
      {
        question: 'How can I prevent silverfish?',
        answer: 'Reducing humidity, fixing leaks, and proper ventilation help prevent silverfish infestations.'
      },
      {
        question: 'Are silverfish treatments safe?',
        answer: 'Yes, our silverfish treatments are safe for families and pets when applied by professionals.'
      }
    ],
    estimateTitle: 'Get Your Free Silverfish Control Estimate',
    icon: 'fas fa-bug'
  },
  {
    slug: 'spider-control',
    title: 'Spider Control',
    metaTitle: 'Spider Control West Covina 91791 - Professional Spider Extermination',
    metaDescription: 'Professional spider control in West Covina, CA 91791. Effective spider extermination including black widows and dangerous species!',
    heroTitle: 'Professional Spider Control in West Covina',
    heroDescription: 'Effective spider elimination and web removal services',
    contentHtml: `<p>West Covina Pest Pros offers comprehensive <strong>spider control in West Covina</strong>, eliminating dangerous spiders like black widows and brown recluses while reducing overall spider populations around your home.</p>

<h2>Complete Spider Elimination Services</h2>
<p>Our spider control services target both venomous and nuisance spiders, using specialized treatments that eliminate spiders and their webs while preventing new infestations.</p>

<ul>
<li>Treatment for dangerous spiders including black widows</li>
<li>Web removal and ongoing spider prevention</li>
<li>Indoor and outdoor spider control applications</li>
</ul>

<h2>Spider Control Pricing</h2>
<table border="1">
<tr><th>Service Type</th><th>Description</th><th>Price</th></tr>
<tr><td>Interior Treatment</td><td>Indoor spider elimination and prevention</td><td>$139</td></tr>
<tr><td>Exterior Treatment</td><td>Outdoor spider and web control</td><td>$119</td></tr>
<tr><td>Complete Service</td><td>Indoor and outdoor spider control</td><td>$219</td></tr>
</table>

<p>Eliminate dangerous spiders from your property—contact West Covina Pest Pros for professional spider control!</p>`,
    benefits: [
      'Elimination of dangerous spiders like black widows and brown recluses',
      'Reduction of spider webs and overall spider populations',
      'Protection for your family from venomous spider bites',
      'Indoor and outdoor treatment for comprehensive control',
      'Long-lasting results with residual spider prevention'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Spider Inspection',
        description: 'Identify spider species and locate webs and harborage areas.'
      },
      {
        step: 2,
        title: 'Web Removal',
        description: 'Remove existing spider webs and egg sacs from your property.'
      },
      {
        step: 3,
        title: 'Treatment Application',
        description: 'Apply targeted treatments to eliminate spiders and prevent return.'
      },
      {
        step: 4,
        title: 'Ongoing Prevention',
        description: 'Provide recommendations and follow-up service as needed.'
      }
    ],
    faqs: [
      {
        question: 'Are black widow spiders common in West Covina?',
        answer: 'Yes, black widows are found in Southern California and require professional treatment for safe elimination.'
      },
      {
        question: 'How dangerous are spider bites?',
        answer: 'Most spider bites are harmless, but black widows and brown recluses can cause serious medical issues.'
      },
      {
        question: 'Will spider treatment eliminate all spiders?',
        answer: 'Treatment significantly reduces spider populations, though some spiders may occasionally appear.'
      },
      {
        question: 'How often should I have spider control service?',
        answer: 'Quarterly service is typically recommended to maintain spider control around your home.'
      }
    ],
    estimateTitle: 'Get Your Free Spider Control Estimate',
    icon: 'fas fa-spider'
  },
  {
    slug: 'termite-treatment',
    title: 'Termite Treatment',
    metaTitle: 'Pest Control in West Covina Near Me 91791 - Termite Treatment, Bed Bug Extermination, Rodent Control, Ant Removal',
    metaDescription: 'Reliable termite treatment in West Covina, CA 91791. Expert pest control near me at West Covina Pest Pros. Protect your home today! Call (626) 555-0123.',
    heroTitle: 'Termite Treatment in West Covina',
    heroDescription: 'Professional termite treatment services in West Covina by West Covina Pest Pros',
    contentHtml: `<p>At West Covina Pest Pros, we specialize in comprehensive termite treatment in West Covina, delivering top-tier pest control solutions tailored to the unique needs of our local community. With years of experience serving West Covina residents at our location in 2500 E Workman Ave #2516, West Covina, CA 91791, we understand the challenges posed by termites in our warm California climate. Our expert team uses eco-friendly methods to eliminate termites and prevent future infestations, ensuring your property remains safe and secure.</p>

<h2>Why Choose West Covina Pest Pros for Termite Treatment in West Covina?</h2>
<p>Our local expertise in termite control in West Covina sets us apart. We know the specific termite species common in the 91791 area, like subterranean and drywood termites, and we employ advanced detection and treatment techniques. Whether you're dealing with a minor infestation or need preventive termite treatment near me, our certified technicians provide fast, effective services that minimize disruption to your daily life. We prioritize customer satisfaction with transparent pricing and guarantees on all termite treatments in West Covina.</p>

<ul>
<li>Free initial inspections for termite damage in West Covina homes</li>
<li>Customized treatment plans based on your property's needs</li>
<li>Environmentally safe products that protect your family and pets</li>
</ul>

<h2>Pricing for Termite Treatment Services</h2>
<table border="1">
<tr><th>Service</th><th>Description</th><th>Starting Price</th></tr>
<tr><td>Basic Inspection</td><td>Thorough termite check in West Covina</td><td>$99</td></tr>
<tr><td>Spot Treatment</td><td>Targeted termite elimination</td><td>$299</td></tr>
<tr><td>Full Home Treatment</td><td>Complete protection plan</td><td>$599</td></tr>
</table>

<p>Invest in professional termite treatment in West Covina today—contact West Covina Pest Pros for a free quote and safeguard your investment.</p>`,
    benefits: [
      'Effective termite elimination using proven methods tailored for West Covina homes',
      'Prevention of costly structural damage with our local expertise',
      'Eco-friendly treatments safe for families and pets in the 91791 area',
      'Quick response times for urgent pest control needs near you',
      'Long-term warranties on all termite treatment services'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Initial Inspection',
        description: 'Our team visits your West Covina property to identify termite activity and damage.'
      },
      {
        step: 2,
        title: 'Custom Treatment Plan',
        description: 'We develop a targeted strategy using safe, effective products.'
      },
      {
        step: 3,
        title: 'Application and Monitoring',
        description: 'Treatments are applied, followed by follow-up visits to ensure complete eradication.'
      },
      {
        step: 4,
        title: 'Ongoing Prevention',
        description: 'Receive tips and optional maintenance to keep termites away long-term.'
      }
    ],
    faqs: [
      {
        question: 'How do I know if I need termite treatment in West Covina?',
        answer: 'Signs include mud tubes, discarded wings, or wood damage. Contact West Covina Pest Pros for a free inspection in the 91791 area.'
      },
      {
        question: 'Are your termite treatments safe for my family?',
        answer: 'Yes, we use EPA-approved, eco-friendly products that are safe for children, pets, and the environment in West Covina homes.'
      },
      {
        question: 'What is the cost of termite treatment near me in West Covina?',
        answer: 'Prices start at $99 for inspections and vary by infestation size. Get a personalized quote from our team at 2500 E Workman Ave #2516.'
      },
      {
        question: 'How long does termite treatment take?',
        answer: 'Most treatments are completed in one visit, with follow-ups as needed for full protection in your West Covina property.'
      }
    ],
    estimateTitle: 'Get Your Free Termite Treatment Estimate',
    icon: 'fas fa-tools'
  },
  {
    slug: 'tick-control',
    title: 'Tick Control',
    metaTitle: 'Tick Control West Covina 91791 - Professional Tick Treatment & Prevention',
    metaDescription: 'Professional tick control in West Covina, CA 91791. Effective tick treatment to protect your family and pets from tick-borne diseases!',
    heroTitle: 'Professional Tick Control in West Covina',
    heroDescription: 'Effective tick elimination and prevention for your family\'s safety',
    contentHtml: `<p>West Covina Pest Pros provides comprehensive <strong>tick control in West Covina</strong>, protecting your family and pets from dangerous tick-borne diseases like Lyme disease and Rocky Mountain spotted fever. Our targeted treatments eliminate ticks from your property and provide ongoing protection.</p>

<h2>Complete Tick Elimination Services</h2>
<p>Our tick control services focus on treating areas where ticks are most likely to be found, including tall grass, shrubs, and wooded areas around your property.</p>

<ul>
<li>Treatment of tick habitats around your property</li>
<li>Protection from dangerous tick-borne diseases</li>
<li>Pet-safe treatment options available</li>
</ul>

<h2>Tick Control Pricing</h2>
<table border="1">
<tr><th>Service Package</th><th>Description</th><th>Price</th></tr>
<tr><td>Yard Treatment</td><td>Complete property tick control</td><td>$169</td></tr>
<tr><td>Seasonal Program</td><td>3 treatments during tick season</td><td>$399</td></tr>
<tr><td>Pre-event Treatment</td><td>Treatment before outdoor events</td><td>$199</td></tr>
</table>

<p>Protect your family from tick-borne diseases—contact West Covina Pest Pros for professional tick control!</p>`,
    benefits: [
      'Protection from dangerous tick-borne diseases for your family',
      'Safe elimination of ticks from your property',
      'Pet-safe treatment options to protect your furry friends',
      'Seasonal programs for ongoing tick prevention',
      'Treatment of tick habitats to reduce populations'
    ],
    processSteps: [
      {
        step: 1,
        title: 'Property Assessment',
        description: 'Identify tick habitats and high-risk areas on your property.'
      },
      {
        step: 2,
        title: 'Habitat Treatment',
        description: 'Target treatments to areas where ticks live and reproduce.'
      },
      {
        step: 3,
        title: 'Barrier Protection',
        description: 'Create protective barriers to prevent tick migration.'
      },
      {
        step: 4,
        title: 'Ongoing Monitoring',
        description: 'Regular follow-up to maintain tick control throughout the season.'
      }
    ],
    faqs: [
      {
        question: 'When is tick season in West Covina?',
        answer: 'Tick season typically runs from spring through fall, with peak activity in warmer months.'
      },
      {
        question: 'Are tick treatments safe for pets?',
        answer: 'Yes, we offer pet-safe treatment options and can coordinate with your veterinarian.'
      },
      {
        question: 'How effective is tick control treatment?',
        answer: 'Our treatments can reduce tick populations by 85-95% when properly applied and maintained.'
      },
      {
        question: 'What diseases do ticks carry?',
        answer: 'Ticks can transmit Lyme disease, Rocky Mountain spotted fever, and other serious illnesses.'
      }
    ],
    estimateTitle: 'Get Your Free Tick Control Estimate',
    icon: 'fas fa-bug'
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}