export { featuredProperties } from "./HomePageContent";
export { locations } from "./HomePageContent";

export const rentalProperties = [
  {
    id: "olive-rentals",
    badge: "Ready to Move",
    title: "Olive Rentals",
    price: "Rs 28K/mo",
    emi: "Deposit Rs 84K",
    area: "1180 sq.ft",
    location: "Gachibowli, Hyderabad",
    accent: "forest",
  },
  {
    id: "green-boulevard",
    badge: "Family Friendly",
    title: "Green Boulevard",
    price: "Rs 34K/mo",
    emi: "Deposit Rs 1L",
    area: "1320 sq.ft",
    location: "Kondapur, Hyderabad",
    accent: "sky",
  },
  {
    id: "metro-suites",
    badge: "Near IT Hub",
    title: "Metro Suites",
    price: "Rs 22K/mo",
    emi: "Deposit Rs 66K",
    area: "920 sq.ft",
    location: "Madhapur, Hyderabad",
    accent: "meadow",
  },
];

export const auctionProperties = [
  {
    id: "bank-auction-plot",
    badge: "Bank Auction",
    title: "Tellapur Corner Plot",
    price: "Reserve Rs 54L",
    emi: "Market Rs 67L",
    area: "240 sq.yd",
    location: "Tellapur, Hyderabad",
    accent: "sand",
  },
  {
    id: "govt-flat-auction",
    badge: "Government Auction",
    title: "Narsingi Tower Flat",
    price: "Reserve Rs 61L",
    emi: "Market Rs 79L",
    area: "1480 sq.ft",
    location: "Narsingi, Hyderabad",
    accent: "forest",
  },
  {
    id: "nclt-commercial",
    badge: "NCLT Auction",
    title: "Financial District Office",
    price: "Reserve Rs 88L",
    emi: "Market Rs 1.08Cr",
    area: "1760 sq.ft",
    location: "Financial District",
    accent: "sky",
  },
];

export const services = [
  {
    title: "Land Verification",
    description:
      "Ownership checks, encumbrance review, and title risk screening.",
  },
  {
    title: "Registration Assistance",
    description:
      "Agreement prep, document coordination, and registration support.",
  },
  {
    title: "Legal Consultation",
    description:
      "Property legal guidance for buyers, sellers, and auction bidders.",
  },
  {
    title: "Flat Inspection",
    description:
      "On-site quality checks for structure, finishes, and snag reporting.",
  },
  {
    title: "Property Valuation",
    description:
      "Budget-first pricing benchmarks with local market comparisons.",
  },
];

export const valuePoints = [
  {
    title: "Verified Listings",
    description:
      "Every listing is screened for pricing sanity, location clarity, and authenticity.",
  },
  {
    title: "Budget Friendly",
    description:
      "EMI-aware discovery helps users compare smart homes without overcommitting.",
  },
  {
    title: "Legal Assistance",
    description:
      "From title review to auction paperwork, we reduce hidden legal friction.",
  },
  {
    title: "Property Inspection",
    description:
      "Independent inspection support helps buyers and tenants avoid costly surprises.",
  },
  {
    title: "Trusted Agents",
    description:
      "Human guidance stays available for shortlists, negotiations, and final closure.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear price context, estimated EMIs, and market references keep decisions grounded.",
  },
];

export const buyPageContent = {
  nav: {
    links: [
      { label: "Buy", to: "/buy" },
      { label: "Rent", to: "/rent" },
      { label: "Projects", to: "/buy", active: true },
      { label: "Auctions", to: "/auctions" },
      { label: "Services", to: "/services" },
      { label: "Locations", to: "/buy" },
      { label: "Resources", to: "/buy" },
    ],
    ctaLabel: "List Your Property",
  },
  hero: {
    breadcrumbs: ["Home", "Projects"],
    kicker: "Premium Projects",
    title: "Explore Handpicked Real Estate Projects",
    description:
      "Browse verified residential and commercial projects from top builders in prime locations.",
    image: "/Images/buy-house.jpg",
    imageAlt: "Premium apartment project",
    stats: [
      { value: "120+", label: "Projects", icon: "projects" },
      { value: "50+", label: "Builders", icon: "builders" },
      { value: "20+", label: "Locations", icon: "locations" },
    ],
    filters: [
      {
        label: "Search Projects",
        placeholder: "Project or builder name",
        type: "input",
      },
      {
        label: "Location",
        placeholder: "Select Location",
        type: "select",
      },
      {
        label: "Project Type",
        placeholder: "All Types",
        type: "select",
      },
      {
        label: "Budget",
        placeholder: "Min - Max",
        type: "input",
      },
      {
        label: "Status",
        placeholder: "All Status",
        type: "select",
      },
    ],
    searchLabel: "Search Projects",
    moreFiltersLabel: "More Filters",
  },
  featuredProjects: {
    title: "Featured Projects",
    actionLabel: "View All Projects",
    actionTo: "/buy",
    items: [
      {
        id: "lansum-eldorado",
        title: "Lansum Eldorado",
        category: "2, 3, 4 BHK Apartments",
        badge: "Launch Offer",
        badgeIcon: "star",
        location: "Kokapet, Hyderabad",
        price: "Rs 78 L - Rs 2.15 Cr",
        area: "30 Acres",
        details: "6 Towers",
        availability: "Dec 2026",
        rating: "4.8",
        reviews: "112 reviews",
        tone: "sky",
        image: "/Images/flats.jpg",
        imageAlt: "Lansum Eldorado apartment towers",
        ctaLabel: "View Project",
      },
      {
        id: "aparna-zenon",
        title: "Aparna Zenon",
        category: "2, 3 BHK Apartments",
        badge: "Under Construction",
        badgeIcon: "rocket",
        location: "Tellapur, Hyderabad",
        price: "Rs 66 L - Rs 1.45 Cr",
        area: "12 Acres",
        details: "4 Towers",
        availability: "Jun 2026",
        rating: "4.7",
        reviews: "89 reviews",
        tone: "forest",
        image: "/Images/luxury-homes.jpg",
        imageAlt: "Aparna Zenon residential building",
        ctaLabel: "View Project",
      },
      {
        id: "rajapushpa-pristinia",
        title: "Rajapushpa Pristinia",
        category: "3, 4 BHK Apartments",
        badge: "New Launch",
        badgeIcon: "rocket",
        location: "Narsingi, Hyderabad",
        price: "Rs 1.10 Cr - Rs 2.90 Cr",
        area: "24 Acres",
        details: "5 Towers",
        availability: "Dec 2027",
        rating: "4.9",
        reviews: "143 reviews",
        tone: "sunrise",
        image: "/Images/flats.jpg",
        imageAlt: "Rajapushpa Pristinia premium towers",
        ctaLabel: "View Project",
      },
      {
        id: "my-home-tycoon",
        title: "My Home Tycoon",
        category: "Office Spaces",
        badge: "Ready to Move",
        badgeIcon: "chart",
        location: "Gachibowli, Hyderabad",
        price: "Rs 95 L - Rs 5.25 Cr",
        area: "10 Acres",
        details: "2 Towers",
        availability: "Ready",
        rating: "4.8",
        reviews: "101 reviews",
        tone: "harbor",
        image: "/Images/commercial.jpg",
        imageAlt: "My Home Tycoon commercial office building",
        ctaLabel: "Inspect Asset",
      },
    ],
  },
  reasons: {
    title: "Why Invest in New Projects?",
    items: [
      {
        title: "Modern Amenities",
        description:
          "Access world-class amenities designed for a better lifestyle.",
        icon: "amenities",
      },
      {
        title: "High Appreciation",
        description:
          "Projects in prime locations with strong growth potential.",
        icon: "growth",
      },
      {
        title: "Better Planning",
        description: "Thoughtfully designed spaces with optimal utilization.",
        icon: "planning",
      },
      {
        title: "Flexible Payments",
        description: "Construction-linked plans and easy EMI options.",
        icon: "payments",
      },
      {
        title: "Trusted Builders",
        description: "Verified developers with proven track records.",
        icon: "builders",
      },
      {
        title: "Transparency",
        description: "Clear pricing, legal checks & project documents.",
        icon: "shield",
      },
    ],
  },
  builders: {
    title: "Top Builders",
    actionLabel: "View All Builders",
    actionTo: "/buy",
    items: [
      { name: "LANSUM", subtitle: "Building Trust, Adding Value" },
      { name: "aparna", subtitle: "Lead the future" },
      { name: "RAJAPUSHPA", subtitle: "Shaping Inventive Spaces" },
      { name: "MY HOME GROUP", subtitle: "Urban growth leaders" },
      { name: "Prestige Group", subtitle: "Crafted for city life" },
      { name: "SUMADHURA", subtitle: "Delivering Happiness" },
    ],
  },
  supportCta: {
    title: "Need Help Choosing the Right Project?",
    description:
      "Our experts can help you find the perfect property based on your budget, needs & goals.",
    primaryLabel: "Talk to an Expert",
    secondaryLabel: "Schedule a Site Visit",
  },
  trustStrip: [
    { label: "100% Verified Properties", icon: "verify" },
    { label: "Legal Assistance", icon: "legal" },
    { label: "Expert Support", icon: "support" },
    { label: "Price Transparency", icon: "pricing" },
    { label: "Secure Transactions", icon: "secure" },
  ],
};

export const testimonials = [
  {
    name: "Aarav Mehta",
    role: "First-time Buyer",
    quote:
      "Budget RealEstate helped us shortlist genuine options fast and stay within our EMI comfort zone.",
  },
  {
    name: "Sneha Reddy",
    role: "Rental Customer",
    quote:
      "The rent search felt clear and honest. I found a flat near work without the usual broker chaos.",
  },
  {
    name: "Rahul Verma",
    role: "Auction Investor",
    quote:
      "The market-price comparison and legal help made auction opportunities much easier to evaluate.",
  },
];

export const faqs = {
  home: [
    {
      question: "How do you keep properties budget friendly?",
      answer:
        "We surface pricing context, EMI estimates, and verified options so users can compare realistic choices quickly.",
    },
    {
      question: "Can I search buy, rent, auctions, and services together?",
      answer:
        "Yes. The platform is designed as one place to move between buying, renting, auctions, and support services.",
    },
    {
      question: "Are the listings verified?",
      answer:
        "Listings are reviewed for authenticity, core property details, and pricing consistency before we highlight them.",
    },
  ],
  buy: [
    {
      question: "Do you show EMI-friendly buying options?",
      answer:
        "Yes. Buying sections pair listing prices with EMI-style context to make affordability easier to judge.",
    },
    {
      question: "Can I get legal help before closing a purchase?",
      answer:
        "Yes. We include legal consultation and registration assistance as part of the wider service stack.",
    },
  ],
  rent: [
    {
      question: "Do rental listings include deposit context?",
      answer:
        "Yes. We highlight likely deposit expectations and space details to help renters compare confidently.",
    },
    {
      question: "Can I find homes near business hubs?",
      answer:
        "Yes. Rental sections emphasize high-demand employment corridors and practical commute-based choices.",
    },
  ],
  auctions: [
    {
      question: "What types of auctions are covered?",
      answer:
        "We focus on bank auctions, government auctions, NCLT opportunities, and debt recovery properties.",
    },
    {
      question: "How do I compare reserve price versus market price?",
      answer:
        "Auction listings show both reserve and market context so you can evaluate opportunity more clearly.",
    },
  ],
  services: [
    {
      question: "Do I need to use services only after finding a property?",
      answer:
        "No. Services can support pre-purchase checks, rental review, valuation, and auction readiness at any stage.",
    },
    {
      question: "Which service is best before token payment?",
      answer:
        "Land verification and legal consultation are the strongest first steps before committing funds.",
    },
  ],
};
